!function() {
    "use strict";
    class e extends Laya.Script {
        constructor() {
            super();
        }
        onStart() {}
        initAttr(e) {
            this.pro.value = e;
        }
    }
    class t {
        start() {}
    }
    var a, i, s, n, r, o, h, l, c, d, g, u, m, p, f, y, _, C, w, b, S, k, v, L, A, x, I, R, M, D;
    !function(e) {
        e[e.audio = 0] = "audio", e[e.event = 1] = "event", e[e.module = 2] = "module", 
        e[e.data = 3] = "data", e[e.scene = 4] = "scene", e[e.ui = 5] = "ui", e[e.debug = 6] = "debug", 
        e[e.pay = 7] = "pay", e[e.share = 8] = "share", e[e.ad = 9] = "ad", e[e.url = 10] = "url";
    }(a || (a = {})), function(e) {
        e[e.audio = -1] = "audio", e[e.event = -2] = "event", e[e.module = -3] = "module", 
        e[e.data = -4] = "data", e[e.scene = -5] = "scene", e[e.ui = -6] = "ui", e[e.debug = -7] = "debug", 
        e[e.pay = -8] = "pay", e[e.share = -9] = "share", e[e.ad = -10] = "ad";
    }(i || (i = {})), function(e) {
        e[e.panel = 0] = "panel", e[e.dialog = 1] = "dialog";
    }(s || (s = {})), function(e) {
        e[e.null = 0] = "null", e[e.boy = 1] = "boy", e[e.girl = 2] = "girl";
    }(n || (n = {})), function(e) {
        e[e.adUnit = 0] = "adUnit", e[e.adUnit_1 = 1] = "adUnit_1", e[e.share = 2] = "share", 
        e[e.adToShare = 3] = "adToShare";
    }(r || (r = {})), function(e) {
        e[e.succeed = 0] = "succeed", e[e.Failure = 1] = "Failure", e[e.cancel = 2] = "cancel";
    }(o || (o = {})), function(e) {
        e[e.video = 0] = "video", e[e.banner = 1] = "banner", e[e.grid = 2] = "grid", e[e.Interstitial = 3] = "Interstitial", 
        e[e.custom = 4] = "custom";
    }(h || (h = {})), function(e) {
        e[e.null = 0] = "null", e[e.create = 1] = "create", e[e.noAd = 2] = "noAd";
    }(l || (l = {})), function(e) {
        e[e.msec = 0] = "msec", e[e.sec = 1] = "sec", e[e.min = 2] = "min", e[e.hour = 3] = "hour", 
        e[e.day = 4] = "day";
    }(c || (c = {})), function(e) {
        e[e.full = 0] = "full", e[e.simple = 1] = "simple";
    }(d || (d = {})), function(e) {
        e[e.msec = 0] = "msec", e[e.sec = 1] = "sec", e[e.min = 2] = "min", e[e.hour = 3] = "hour", 
        e[e.day = 4] = "day", e[e.mon = 5] = "mon", e[e.year = 6] = "year";
    }(g || (g = {}));
    class T {
        constructor(e = o.succeed) {
            this.tag = "", this.requestData = {}, this.result = o.succeed, this.data = {}, this.errCode = 0, 
            this.err = "", this.result = e;
        }
    }
    class B {
        static getGlobalID() {
            let e = Date.now();
            return B.globaltime == e ? this.globalindex++ : this.globalindex = 0, B.globaltime = e, 
            e + "_" + B.globalindex;
        }
        static random(e) {
            return Math.random() * e;
        }
        static randomByWeight(e) {
            let t = 0;
            for (let a = 0; a < e.length; a++) t += e[a];
            let a = B.random(t);
            t = 0;
            for (let i = 0; i < e.length; i++) if (a <= (t += e[i])) return i;
            return 0;
        }
        static getUuid() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 0 | B.random(16);
                return ("x" == e ? t : 3 & t | 8).toString(16);
            });
        }
        static getTextByStr(e, ...t) {
            let a = e;
            if (!t || t.length <= 0) return a;
            let i = a.split("%s");
            if (i.length <= 1) return a;
            a = "";
            for (let e = 0; e < t.length && (a += i[e] + t[e], !(i.length - 1 <= e)); e++) ;
            for (let e = t.length; e < i.length; e++) a += i[e];
            return a;
        }
        static getRandIDs(e, t = 1) {
            if (t <= 1) return Math.floor(B.random(e));
            let a = [], i = [];
            for (let t = 0; t < e; t++) a.push(t);
            for (let e = 0; e < t; e++) {
                let e = Math.floor(B.random(a.length));
                if (i.push(a[e]), a.splice(e, 1), a.length <= 0) break;
            }
            return i;
        }
        static beelinePointByAngle(e, t, a, i) {
            var s = new Laya.Vector2(), n = 0;
            return a <= 90 ? (n = a * (Math.PI / 180), s.x = e + Math.sin(n) * i, n = (90 - a) * (Math.PI / 180), 
            s.y = t + Math.sin(n) * i) : a <= 180 ? (n = (180 - a) * (Math.PI / 180), s.x = e + Math.sin(n) * i, 
            n = (a - 90) * (Math.PI / 180), s.y = t - Math.sin(n) * i) : a <= 270 ? (n = (a - 180) * (Math.PI / 180), 
            s.x = e - Math.sin(n) * i, n = (270 - a) * (Math.PI / 180), s.y = t - Math.sin(n) * i) : (n = Math.max(0, 360 - a) * (Math.PI / 180), 
            s.x = e - Math.sin(n) * i, n = (a - 270) * (Math.PI / 180), s.y = t + Math.sin(n) * i), 
            s;
        }
    }
    B.globalindex = 0, B.globaltime = 0, function(e) {
        e[e.TestExit = -101] = "TestExit", e[e.WXVersionTooOld = -99] = "WXVersionTooOld", 
        e[e.ExitMiniGame = -98] = "ExitMiniGame", e[e.NoError = 1e3] = "NoError";
    }(u || (u = {})), function(e) {
        e[e.Bg_1 = 1] = "Bg_1", e[e.Bg_2 = 2] = "Bg_2", e[e.Bg_Star = 3] = "Bg_Star", e[e.TongYong = 4] = "TongYong", 
        e[e.DaoJiShi1 = 5] = "DaoJiShi1", e[e.DaoJiShi23 = 6] = "DaoJiShi23", e[e.UseNitrogen = 7] = "UseNitrogen", 
        e[e.GetNitrogen = 8] = "GetNitrogen", e[e.UsingNitrogen = 9] = "UsingNitrogen", 
        e[e.StartGame = 10] = "StartGame", e[e.Fail = 11] = "Fail", e[e.Success = 12] = "Success", 
        e[e.Go = 13] = "Go", e[e.JieSuoXinChe = 14] = "JieSuoXinChe", e[e.ShaChe = 15] = "ShaChe", 
        e[e.ChiJinBi = 16] = "ChiJinBi", e[e.GuanBi = 17] = "GuanBi", e[e.HuoDeJinBi = 18] = "HuoDeJinBi", 
        e[e.ZhaungChe = 19] = "ZhaungChe", e[e.TanPaiMing = 20] = "TanPaiMing", e[e.HongYouMen = 21] = "HongYouMen";
    }(m || (m = {})), function(e) {
        e[e.CountDown = 1] = "CountDown", e[e.poseStarGame = 2] = "poseStarGame", e[e.updataShowGoldPower = 3] = "updataShowGoldPower", 
        e[e.powerGetTween = 4] = "powerGetTween", e[e.goldGetTween = 5] = "goldGetTween", 
        e[e.homeGoldGift = 6] = "homeGoldGift", e[e.eatGold = 7] = "eatGold", e[e.share_kefuReward = 8] = "share_kefuReward", 
        e[e.share_carport = 9] = "share_carport", e[e.share_shibai = 10] = "share_shibai", 
        e[e.share_chenggong = 11] = "share_chenggong", e[e.share_tili = 12] = "share_tili", 
        e[e.share_lixian = 13] = "share_lixian", e[e.share_glodGift = 14] = "share_glodGift", 
        e[e.banner_mistake = 15] = "banner_mistake", e[e.is_destination = 16] = "is_destination", 
        e[e.is_resurgence = 17] = "is_resurgence", e[e.is_obstacles = 18] = "is_obstacles", 
        e[e.is_gold = 19] = "is_gold", e[e.is_nitro = 20] = "is_nitro", e[e.defeated_resurgence = 21] = "defeated_resurgence", 
        e[e.defeated_barrier = 22] = "defeated_barrier", e[e.victory_replay = 23] = "victory_replay", 
        e[e.bx_gaming_close = 24] = "bx_gaming_close", e[e.start_game = 25] = "start_game", 
        e[e.opencountDown = 26] = "opencountDown", e[e.ExportFail = 27] = "ExportFail";
    }(p || (p = {})), function(e) {
        e.Float = "浮窗", e.Try = "试玩", e.Side = "侧边栏", e.FloatBar = "底边栏", e.StartPage = "首屏", 
        e.Mode = "模式界面", e.GameResult = "结算界面", e.WindowSide = "对联", e.TryExport = "插屏", 
        e.ExportList = "底边栏", e.Zhu = "主界面", e.JieShu = "结束界面", e.QuXiaoDaoliang = "取消导量";
    }(f || (f = {})), function(e) {
        e[e.StartGame = 1] = "StartGame", e[e.ResumeGame = 2] = "ResumeGame", e[e.RestartGame = 3] = "RestartGame";
    }(y || (y = {})), function(e) {
        e[e.LeftToMiddle = 0] = "LeftToMiddle", e[e.MiddleToRight = 1] = "MiddleToRight", 
        e[e.RightToMiddle = 2] = "RightToMiddle", e[e.MiddleToLeft = 3] = "MiddleToLeft", 
        e[e.Invalid = 4] = "Invalid";
    }(_ || (_ = {})), function(e) {
        e[e.Gold = 0] = "Gold", e[e.power = 1] = "power", e[e.Diamond = 2] = "Diamond";
    }(C || (C = {})), function(e) {
        e[e.ended = 0] = "ended", e[e.goon = 1] = "goon", e[e.none = 2] = "none";
    }(w || (w = {})), function(e) {
        e[e.wx = 1] = "wx", e[e.qq = 2] = "qq", e[e.web = 3] = "web", e[e.tt = 4] = "tt";
    }(b || (b = {})), function(e) {
        e[e.zanTing = 1] = "zanTing", e[e.shibai = 2] = "shibai";
    }(S || (S = {})), function(e) {
        e[e.not = 0] = "not", e[e.carport = 1] = "carport", e[e.shibai = 2] = "shibai", 
        e[e.chenggong = 3] = "chenggong", e[e.tili = 4] = "tili", e[e.lixian = 5] = "lixian", 
        e[e.glodGift = 6] = "glodGift", e[e.bannerMistake = 7] = "bannerMistake";
    }(k || (k = {})), function(e) {
        e.server = "server", e.res = "res";
    }(v || (v = {})), function(e) {
        e[e.down = 0] = "down", e[e.up = 1] = "up";
    }(L || (L = {})), function(e) {
        e[e.front = 0] = "front", e[e.left = 1] = "left", e[e.right = 2] = "right";
    }(A || (A = {})), function(e) {
        e[e.drop = 0] = "drop", e[e.barrier = 1] = "barrier";
    }(x || (x = {})), function(e) {
        e[e.not = 0] = "not", e[e.qianjin = 1] = "qianjin", e[e.shache = 2] = "shache", 
        e[e.daoche = 3] = "daoche";
    }(I || (I = {})), function(e) {
        e[e.before = 1] = "before", e[e.after = 2] = "after", e[e.gameing = 3] = "gameing", 
        e[e.defeatAfter = 4] = "defeatAfter";
    }(R || (R = {})), function(e) {
        e.updateSubscribe = "Subscribe";
    }(M || (M = {})), function(e) {
        e.bannerSwitchTime = "bannerSwitchTime", e.bannerSwitchCount = "bannerSwitchCount", 
        e.newUserShowChaping = "newUserShowChaping", e.loadingShowBanner = "loadingShowBanner", 
        e.bannerFirstSwitchCount = "bannerFirstSwitchCount", e.bxCheckPoint = "bxCheckPoint";
    }(D || (D = {}));
    class U extends t {
        constructor() {
            super(...arguments), this.defaultKey = "", this.urls = {};
        }
        static getMgr() {
            return U.mgr = U.mgr || new U();
        }
        onLoad() {
            U.mgr = this;
        }
        start() {}
        getDefUrl() {
            return this.getUrl(this.defaultKey);
        }
        getUrl(e) {
            return this.urls[e];
        }
        addUrl(e, t) {
            "" == this.defaultKey && this.setDefaultKey(e), this.urls[e] = t;
        }
        setDefaultKey(e) {
            this.defaultKey = e;
        }
    }
    U.mgr = null;
    class P {}
    P.appkey = "63cad4a11f898981759105f89f5d8f28", P.appName = "海底飞车", P.appId = "wx8c6ef9fd519e8c26", 
    P.version = "2020.1.0.0", P.ut = "3", P.PlatformTypr = b.web, P.width = 1334, P.height = 750, 
    P.debug = !1, P.uiDir = "gameui", P.defaultCarId = 1001, P.bannerMistake = !1, P.showMisUse = !1, 
    P.showUpdateSubscribe = !0, P.chest_gameing_num = 0, P.rivalCarRes = [], P.musicType = 1, 
    P.gameScene3D = null, P.gameCamera = null, P.checkpointSprite3D = null, P.carSprite3D = null, 
    P.gameControll = null, P.cameraLocalPos = null, P.cameralocalRotationEuler = null, 
    P.constantTable = null, P.now_game_level_config = null, P.rankArr = [], P.gameScene = "scenes/GameScene.scene", 
    P.homeScene = "scenes/HomeScene.scene", P.loginScene = "scenes/LoginScene.scene", 
    P.LoadResScene = "scenes/LoadResScene.scene", P.Res3D = {
        HomeScene: "LayaGame3D/Scenes/Interface/Conventional/interface.ls",
        GameScene: "LayaGame3D/Scenes/game_scene/Conventional/car_game.ls"
    }, P.config = [ "config/config.zip" ], P.localFiles = [ "local", "scenes", "prefab", "prefabs", "dialogs", "item", "panelUI", "versions", "texiao", "prefab", "gameui", "chest" ], 
    P.sound = {
        1: "soundRes/BgPlay_1.mp3",
        2: "soundRes/BgPlay_2.mp3",
        3: "soundRes/BgPlay_Star.mp3",
        4: "soundRes/TongYong.mp3",
        5: "soundRes/DaoJiShi1.mp3",
        6: "soundRes/DaoJiShi23.mp3",
        7: "soundRes/UseNitrogen.mp3",
        8: "soundRes/GetNitrogen.mp3",
        9: "soundRes/UsingNitrogen.wav",
        10: "soundRes/StartGame.mp3",
        11: "soundRes/Fail.mp3",
        12: "soundRes/Success.mp3",
        13: "soundRes/Go.mp3",
        14: "soundRes/JieSuoXinChe.mp3",
        15: "soundRes/ShaChe.wav",
        16: "soundRes/ChiJinBi.mp3",
        17: "soundRes/GuanBi.mp3",
        18: "soundRes/HuoDeJinBi.mp3",
        19: "soundRes/ZhaungChe.mp3",
        20: "soundRes/TanPaiMing.mp3",
        21: "soundRes/HongYouMen.mp3"
    };
    const N = !1;
    class E {
        static getSrc(e) {
            let t = P.sound[e];
            return t ? `${t}` : null;
        }
        static playEffect(e, t = !1, a = !1) {
             let i = ee.getItem("playSoundMuted", !0);
                        Laya.SoundManager.muted = !i
                        console.log(Laya.SoundManager.muted)
                        if(Laya.SoundManager.muted == false)
                        {
                                            if (N) return;
                if (Laya.SoundManager.soundMuted) return;
                let i = this.soundChannelMap[e];
                if (i && t && !a) i.isStopped && i.resume(); else {
                    let a = this.getSrc(e);
                    a && (i = Laya.SoundManager.playSound(a, t ? 0 : 1), this.soundChannelMap[e] = i);
                }
                        }

        }
        static stopEffect(e) {
            if (N) return;
            if (Laya.SoundManager.soundMuted) return;
            let t = this.soundChannelMap[e];
            t && (t.isStopped || t.pause());
        }
        static soundMuted(e) {
            N || (Laya.SoundManager.soundMuted = e);
        }
        static initMusic(e) {
            if (P.PlatformTypr != b.web) {
                if (1 == e) {
                    if (!this.m_mainMusic) {
                        let e = ve.getGame().getSound();
                        this.m_mainMusic = e.createInnerAudioContext(),
                         this.m_mainMusic.src = U.getMgr().getUrl("res") + "/" + P.sound[m.Bg_Star], 
                        this.m_mainMusic.volume = 1;
                    }
                } else if (2 == e) {
                    if (!this.m_gameMusic) {
                        let e = ve.getGame().getSound();
                        this.m_gameMusic = e.createInnerAudioContext(), this.m_gameMusic.volume = 1;
                    }
                    this.m_gameMusic.src = U.getMgr().getUrl("res") + "/" + P.sound[O.randomInSection(m.Bg_1, m.Bg_2)];
                }
                this.m_gameCarRunState = -1;
            }
        }
        static playMusic(e) {
            if(1==e)
            {

                WebAudioEngine.playMusic(P.sound[m.Bg_Star])
            }
            else if(2==e)
            {

                Laya.SoundManager.playMusic(P.sound[O.randomInSection(m.Bg_1, m.Bg_2)])
            }

        }
        static stopMusic() {

            this.stopMusic_gameCarRun();
            console.log("音乐停止")
            WebAudioEngine.stopMusic();

        }
        static musicMuted(e) {
            N || (this.isMusicStop = e, this.isMusicStop && Laya.SoundManager.stopMusic());
        }
        static removeChannel(e) {
            N || Laya.SoundManager.removeChannel(e);
        }
        static init_gameCarRun(e, t) {
            P.PlatformTypr != b.web && (this.m_gameCarRunState = e, this.m_gameloopMusicUrl = U.getMgr().getUrl("res") + "/soundCar/" + t + ".wav");
        }
        static playMusic_gameCarRun() {
            P.PlatformTypr != b.web && (Laya.timer.once(990, this, this.playMusic_gameCarRun), 
            this.Sound_playerloop(this.m_gameloopMusicUrl, 0, 990));
        }
        static stopMusic_gameCarRun() {
            P.PlatformTypr != b.web && (this.m_gameloopMusic && this.m_gameloopMusic.stop(), 
            Laya.timer.clearAll(this), this.m_gameCarRunState = -1);
        }
        static Sound_playerloop(e, t = 200, a = 200) {
            if (1 != this.m_gameCarRunState) return;
            let i = O.getTimestamp();
            if (E.m_gameloopMusic) {
                let e = E.m_gameloopMusic, t = i - E.m_gameSound_loop_play_time;
                t > a ? e.stop() : Laya.timer.once(a - t, this, function() {
                    e.stop();
                }), E.m_gameloopMusic = void 0;
            }
            E.m_arr_gameSound_loop || (E.m_arr_gameSound_loop = []), E.m_arr_gameSound_loop.length <= 0 && E.m_arr_gameSound_loop.push(E.newSound(E.m_arr_gameSound_loop));
            let s = E.m_arr_gameSound_loop.pop();
            s.src = e, s.volume = 0, Laya.timer.once(t, this, this.playerloop, [ s ]), s.play(), 
            E.m_gameloopMusic = s, E.m_gameSound_loop_play_time = i;
        }
        static playerloop(e) {
            e.volume = 1;
        }
        static newSound(e) {
            let t, a = ve.getGame().getSound();
            return (t = a.createInnerAudioContext()).volume = 1, t.onEnded(() => {
                e.push(t), E.m_gameloopMusic = void 0;
            }), t.onStop(() => {
                e.push(t);
            }), t;
        }
    }
    E.soundChannelMap = {}, E.isMusicStop = !1, E.musicType = 0, E.m_gameCarRunState = -1;
    class O {
        constructor() {
            this.timeLine = new Laya.TimeLine();
        }
        static getRandom(e) {
            return Math.floor(Math.random() * e);
        }
        static randomInSection(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1));
        }
        static getRandomArr(e, t, a) {
            if (a <= 0 || e >= t) return null;
            for (var i = []; a > 0; ) {
                var s = e + Math.floor(Math.random() * (t - e + 1));
                -1 == i.indexOf(s) && (i.push(s), a--);
            }
            return i;
        }
        static getRandNinM(e, t, a = !1) {
            let i = [];
            for (let t = 0; t < e; t++) i.push(t);
            let s, n, r = i.length;
            for (;r > i.length - t; ) n = this.getRandom(r), s = i[--r], i[r] = i[n], i[n] = s;
            return a ? i.slice(i.length - t, i.length).sort((e, t) => e - t) : i.slice(i.length - t, i.length);
        }
        static transToNumber(e, t) {
            return +(e || t);
        }
        static transToStrNumber(e) {
            let t = ("" + e).split("").reverse().join("");
            return t = (t = t.replace(/(...)/, "$1,")).split("").reverse().join("");
        }
        static bezierPath(e, t, a, i, s) {
            var n, r = [], o = e.distance(t.x, t.y) / (2 * a), h = Math.atan2(t.y - e.y, t.x - e.x);
            r.push(e.x, e.y);
            for (var l = 1, c = 0; c < a - 1 + a; c++) {
                var d = e.x + Math.cos(h) * (o * (c + 1)), g = e.y + Math.sin(h) * (o * (c + 1));
                c % 2 == 0 && (d += Math.cos(h + (1 == l ? -90 * Math.PI / 180 : 270 * Math.PI / 180)) * i * l, 
                g += Math.sin(h + (1 == l ? -90 * Math.PI / 180 : 270 * Math.PI / 180)) * i * l, 
                l *= -1), r.push(d, g);
            }
            r.push(t.x, t.y);
            var u = 0, m = [], p = 0;
            for (a = (n = Laya.Bezier.I.getBezierPoints(r, s, 2)).length; p < a; p += 2) m[u] = [], 
            m[u][0] = parseFloat(n[p]), m[u][1] = parseFloat(n[p + 1]), u++;
            return m;
        }
        static parseString(e, t) {
            let a = [], i = e.split(";");
            return t ? i.filter(e => {
                let t = e.split("-");
                a.push(t);
            }) : (a = i).forEach((e, t) => {
                a[t] = Number(e);
            }), a;
        }
        static outRepetition(e) {
            let t = [];
            for (let a = 0; a < e.length; a++) {
                const i = e[a];
                -1 == t.indexOf(i) && t.push(i);
            }
            return t;
        }
        static parseTimeBynumber(e, t) {
            var a, i, s;
            i = this.number2string(Math.floor(e % 60)), a = this.number2string(Math.floor(e / 60) % 60), 
            s = this.number2string(Math.floor(e / 60 / 60));
            var n = e > 0 ? s + ":" + a + ":" + i : "00:00:00";
            return t || (n = e > 0 ? a + ":" + i : "00:00"), n;
        }
        static number2string(e) {
            return e > 9 ? "" + e : "0" + e;
        }
        static getTimestamp() {
            let e;
            return e = new Date().getTime();
        }
        static isSameDay(e) {
            if (e <= 0) return !1;
            var t = new Date(this.getTimestamp()), a = new Date(e);
            return t.toDateString() == a.toDateString();
        }
        static playAnim(e, t, a = 1) {}
        static playTweenImg(e, t, a, i = C.Gold, s) {
            let n = [];
            this.createImg(i, n, e);
            let r = 0, o = 0, h = n.length;
            for (let e = h - 1; e >= 0; e--) {
                const i = n[e];
                Laya.Tween.to(i, {
                    scaleX: 1.1,
                    scaleY: 1.1,
                    alpha: 1
                }, 20 * o + 200, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(i, {
                        x: t,
                        y: a,
                        scaleX: .7,
                        scaleY: .7
                    }, 30 * o + 400, null, Laya.Handler.create(this, () => {
                        ++r == h && this.clearImg(n);
                    }), 20 * h + 100);
                })), o++;
            }
        }
        static createImg(e, t, a) {
            let i = "";
            switch (e) {
              case C.Gold:
              case C.Diamond:
                E.playEffect(m.HuoDeJinBi), i = a;
                break;

              case C.power:
                i = a;
            }
            return new Promise((a, s) => {
                if (e == C.Diamond) for (let e = 0; e < 10; e++) {
                    let e = this.createSprite(i);
                    Laya.stage.addChild(e), e.zOrder = 1e4;
                    let a = Math.random() < .5 ? 1 : -1;
                    e.x = Math.random() * a * 120 + Laya.stage.width / 2, e.y = Math.random() * a * 120 + Laya.stage.height / 2 - 200, 
                    t.push(e), e.scaleX = e.scaleY = 0, e.anchorX = e.anchorY = .5;
                } else if (e == C.Gold) for (let e = 0; e < 10; e++) {
                    let e = this.createSprite(i);
                    e.zOrder = 1e4, Laya.stage.addChild(e);
                    let a = Math.random() < .5 ? 1 : -1;
                    e.x = Laya.stage.width / 2 + Math.random() * a * 120, e.y = Laya.stage.height / 2 + Math.random() * a * 120, 
                    t.push(e), e.scaleX = e.scaleY = 0, e.anchorX = e.anchorY = .5;
                } else if (e == C.power) for (let e = 0; e < 3; e++) {
                    let a = this.createSprite(i);
                    a.zOrder = 1e4, Laya.stage.addChild(a), t.push(a), a.scaleX = a.scaleY = 0, a.anchorX = a.anchorY = .5;
                    let s = this.isOdd(e) ? 1 : -1;
                    a.x = Math.random() * s * 80 - 10 + Laya.stage.width / 2, a.y = Math.random() * s * 80 - 60 + Laya.stage.height / 2 - 50;
                }
                a();
            });
        }
        static clearImg(e) {
            for (let t = 0; t < e.length; t++) {
                let a = e[t];
                a.parent.removeChild(a), a = null;
            }
            e = [];
        }
        static getPoint(e, t, a = 1) {
            let i = 140;
            2 == a && (i = 180);
            let s = i * Math.cos(360 * t / Math.PI / 180), n = i * Math.sin(360 * t / Math.PI / 180);
            e.x = s + Laya.stage.width / 2, e.y = n + Laya.stage.height / 2;
        }
        static createSprite(e) {
            let t = new Laya.Image(e);
            return t.width = 44, t.anchorX = .5, t.anchorY = .5, t.height = 44, t;
        }
        static isOdd(e) {
            return e % 2 != 0;
        }
        static randomArray(e) {
            return e[Math.floor(Math.random() * e.length)];
        }
        static getOffsetHeight() {
            return Laya.stage.height - Dt.height;
        }
        playSharkingAnim(e) {
            e.pivotX = e.width / 2, e.pivotY = e.height / 2, this.timeLine = new Laya.TimeLine(), 
            this.timeLine.reset(), this.timeLine.addLabel("rotateLeft1", 0).to(e, {
                rotation: 13
            }, 100, Laya.Ease.linearInOut, 2e3).addLabel("rotateRight1", 0).to(e, {
                rotation: -26
            }, 200, Laya.Ease.linearInOut, 0).addLabel("rotateLeft2", 0).to(e, {
                rotation: 23
            }, 200, Laya.Ease.linearInOut, 0).addLabel("rotateRight2", 0).to(e, {
                rotation: -20
            }, 200, Laya.Ease.linearInOut, 0).addLabel("rotateLeft3", 0).to(e, {
                rotation: 0
            }, 100, Laya.Ease.linearInOut, 1e3), this.timeLine.play("rotateLeft2", !0), this.timeLine.play(0, !0);
        }
        static shiPeiX(e, t) {
            return -1 == e ? t : t = Laya.stage.width - (P.width - t);
        }
        static shiPeiY(e, t) {
            return -1 == e ? t : t = Laya.stage.height - (P.height - t);
        }
    }
    O.imgList = [];
    var G, j = Laya.HttpRequest;
    class F {
        constructor() {
            if (F.instance) throw "HttpManager is singleton";
        }
        static get I() {
            return F.instance = F.instance || new F();
        }
        postUserData() {}
        postLevelData() {}
        send(e, t, a = null, i = null, s = null, n = null, r = "get", o = "json", h = null) {
            var l = new j();
            l.on(Laya.Event.COMPLETE, F, this.onLoadCompleted, [ a, l, t ]), l.on(Laya.Event.ERROR, F, this.onLoadError, [ i, l, t ]), 
            l.on(Laya.Event.PROGRESS, F, this.onProgress, [ s ]), "get" == e ? l.send(t, n, r, o, h) : "post" == e && l.send(t, JSON.stringify(n), "post", o, [ "Content-Type", "application/json" ]);
        }
        onLoadCompleted(e = null, t = null, a = null, i = null) {
            e && e.runWith(i), F.I.clear(t, a);
        }
        onProgress(e = null, t = 0) {
            e && e.runWith(t);
        }
        onLoadError(e = null, t = null, a = null, i = "") {
            e && e.runWith(i), F.I.clear(t, a);
        }
        clear(e, t) {
            e && e.offAll();
        }
    }
    class V {
        static get(e, t, a) {
            if ("object" == typeof t) {
                let a = [];
                for (let e in t) a.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
                e += "?", e += a.join("&");
            }
            let i = new T();
            console.log("url：", e), F.I.send("get", e, Laya.Handler.create(this, e => {
                console.log(":" + JSON.stringify(e)), i.result = o.succeed, i.data = e, a && a(i);
            }), Laya.Handler.create(this, e => {
                console.log(":" + JSON.stringify(e)), i.result = o.Failure, i.data = e, a && a(i);
            }));
        }
        static post(e, t, a) {
            let i = new T();
            F.I.send("post", e, Laya.Handler.create(this, e => {
                console.log(":" + JSON.stringify(e)), i.result = o.succeed, i.data = e, a && a(i);
            }), Laya.Handler.create(this, e => {
                console.log(":" + e), i.result = o.Failure, i.data = e, a && a(i);
            }), null, t);
        }
    }
    !function(e) {
        e.Login = "/game/login", e.GameData = "/game/data", e.KeFuReward = "/game/kf", e.setUserInfo = "/game/userinfo", 
        e.uploadScore = "/game/level1", e.getRanks = "/game/rank1";
    }(G || (G = {}));
    class z {
        static login(e, t, a, i, s, n, r, h, l) {
            z.serverUrl = e, z.logindata.ut = t, z.logindata.appid = a, z.logindata.token = i || "", 
            z.logindata.inviteCode = n || "", z.logindata.anonymousCode = s || "", z.logindata.version = r;
            let c = this, d = z.serverUrl + G.Login;
            // z.HttpGet(d, z.logindata, function(d) {
                d.result == o.succeed ? (c.gameInfo = d.data.data, c.auth = d.data.auth, c.uid = d.data.uid, 
                c.secret = d.data.secret, c.inviteCode = d.data.inviteCode, c.isCanShare = d.data.share, 
                c.isCanDemo = d.data.demo, c.isCanExit = d.data.exit, c.isCanVideo = d.data.video, 
                c.isNewPlayer = d.data.new, c.kefuReward = d.data.kefuReward, c.isCanBxMistake = d.data.bxMistake, 
                c.mistakeRate = d.data.mistakeRate ? d.data.mistakeRate : 0, c.isCanBeforeBxMistake = d.data.beforeBxMistake, 
                c.beforeBxMistakeRate = d.data.beforeBxMistakeRate ? d.data.beforeBxMistakeRate : 0, 
                c.beforeBxMistakeVideoRate = d.data.beforeBxMistakeVideoRate ? d.data.beforeBxMistakeVideoRate : 0, 
                c.isCanAfterBxMistake = d.data.afterBxMistake, c.afterBxMistakeRate = d.data.afterBxMistakeRate ? d.data.afterBxMistakeRate : 0, 
                c.afterBxMistakeVideoRate = d.data.afterBxMistakeVideoRate ? d.data.afterBxMistakeVideoRate : 0, 
                c.gameChapingRate = d.data.gameChapingRate, c.loginDemo = d.data.loginDemo, c.beforeSmallinterstitial = d.data.beforeSmallinterstitial, 
                c.gameinterfaceShowBanner = d.data.gameinterfaceShowBanner, c.fullscreentwo = d.data.fullscreentwo, 
                c.bottomerrorswitch = d.data.bottomerrorswitch, c.gamecenterlateswitch = d.data.gamecenterlateswitch, 
                c.garagevideo = d.data.garagevideo, c.checkoutthevideo = d.data.checkoutthevideo, 
                c.recommendvehicletogetvideo = d.data.recommendvehicletogetvideo, c.godcarrecommendedvideo = d.data.godcarrecommendedvideo, 
                c.randomgameswitch = d.data.randomgameswitch, c.blogin = !0, l && l(d)) : 0 != h ? (h > 0 && h--, 
                z.login(e, t, a, i, s, n, r, h, l)) : l && l(d);
            // }.bind(this));
        }
        static isLogin() {
            return z.blogin;
        }
        static isAuth() {
            return !(!z.isLogin || !z.auth);
        }
        static tryLogin(e, t, a) {
            z.login(z.serverUrl, z.logindata.ut, z.logindata.appid, e, z.logindata.anonymousCode, z.logindata.inviteCode, z.logindata.version, t, a);
        }
        static setData(e, t) {
            let a = this.serverUrl + G.GameData, i = {
                data: e
            };
            z.HttpPost(a, i, function(e) {
                t && t(e);
            }.bind(this));
        }
        static getData() {
            return this.gameInfo;
        }
        static serviceAward(e) {
            let t = this.serverUrl + G.KeFuReward;
            z.HttpPost(t, {}, function(t) {
                t.result == o.succeed ? 1 == t.data.kefuReward ? e && e(new T(o.succeed)) : e && e(new T(o.cancel)) : e && e(new T(o.Failure));
            }.bind(this));
        }
        static setUserInfo(e, t, a) {
            let i = z.serverUrl + G.setUserInfo, s = {
                encryptedData: e,
                iv: t
            };
            z.HttpPost(i, s, function(e) {
                e.result == o.succeed && (this.auth = !0), a && a(e);
            }.bind(this));
        }
        static uploadScore(e, t, a) {
            let i = z.serverUrl + G.uploadScore, s = {
                level: e,
                star: t
            };
            z.HttpPost(i, s, function(e) {
                a && a(e);
            }.bind(this));
        }
        static getRanks(e) {
            let t = z.serverUrl + G.getRanks;
            z.HttpPost(t, {}, function(t) {
                e && e(t);
            }.bind(this));
        }
        static HttpGet(e, t, a) {
            V.get(e, t, function(e) {
                a && a(e);
            }.bind(this));
        }
        static HttpPost(e, t, a) {
            // t.uid = z.uid, t.secret = z.secret, t.appid = z.logindata.appid, V.post(e, t, function(e) {
            //     a && a(e);
            // }.bind(this));
        }
    }
    z.gameInfo = {}, z.blogin = !1, z.auth = !1, z.uid = "", z.secret = "", z.inviteCode = "", 
    z.kefuReward = !1, z.isNewPlayer = !1, z.isCanShare = !1, z.isCanDemo = !1, z.isCanExit = !1, 
    z.isCanVideo = !1, z.isCanBxMistake = !1, z.mistakeRate = 0, z.isCanBeforeBxMistake = !1, 
    z.beforeBxMistakeRate = 0, z.beforeBxMistakeVideoRate = 0, z.isCanAfterBxMistake = !1, 
    z.afterBxMistakeRate = 0, z.afterBxMistakeVideoRate = 0, z.loginDemo = 0, z.gameChapingRate = 0, 
    z.bottomerrorswitch = 0, z.gamecenterlateswitch = 0, z.garagevideo = 100, z.checkoutthevideo = 100, 
    z.recommendvehicletogetvideo = 100, z.godcarrecommendedvideo = 0, z.randomgameswitch = 0, 
    z.beforeSmallinterstitial = 0, z.gameinterfaceShowBanner = 0, z.fullscreentwo = 0, 
    z.serverUrl = "", z.logindata = {};
    class H extends t {
        constructor() {
            super(...arguments), this.shareModel = [], this.sharePointArray = [];
        }
        static getMgr() {
            return H.mgr = H.mgr || new H();
        }
        onLoad() {
            H.mgr = this;
        }
        start() {}
        setShareMenu() {
            let e = O.randomInSection(1, 2), t = ve.getTableMgr().getTable("game_share_config");
            ve.getShare().setShareMenu(t.getData(e - 1, "desc"), U.getMgr().getUrl("res") + "/share/share_" + e + ".jpg", "InvitateID=" + P.invitateID);
        }
        shareApp(e, t, a, i) {
            let s = e, n = "", r = "", o = t;
            a || (a = []);
            let h = this._getShareModelId(s);
            n = this.shareModel[h].title, r = this.shareModel[h].imageUrl, ve.getShare().shareAppMessage(n, B.getTextByStr(r, a), o, i);
        }
        onShare(e) {
            let t = new T(), a = O.randomInSection(1, 2), i = ve.getTableMgr().getTable("game_share_config");
            z.isCanShare ? ve.getShare().shareAppMessage(i.getData(a - 1, "desc"), U.getMgr().getUrl("res") + "/share/share_" + a + ".jpg", "InvitateID=" + z.inviteCode, e) : (t.result = o.Failure, 
            e(t));
        }
        addShareModel(e, t) {
            let a = {
                title: e,
                imageUrl: t
            };
            return this.shareModel.push(a), this.shareModel.length - 1;
        }
        addSharePoint(e) {
            let t = [];
            return "number" == typeof e ? t.push(e) : t = e, this.sharePointArray.push(t), this.sharePointArray.length - 1;
        }
        _getShareModelId(e) {
            let t = Math.floor(Math.random() * this.sharePointArray[e].length);
            return this.sharePointArray[e][t];
        }
    }
    H.mgr = null;
    class Y {}
    Y.carNum = 0, Y.rivalNum = 1, Y.powermax = 6, Y.defaultpower = 5, Y.powerrecoverytime = 1200, 
    Y.freepowernum = 2, Y.defaultgold = 800, Y.share = 4, Y.goldbagrefresh = "10;30", 
    Y.goldbagcoefficient = "3;4;5", Y.misuseDelayTime = 500, Y.TryPanelDelayTime = 2e3, 
    Y.chapingDelayTime = 2e3, Y.chapingBannerDelayTime = 500, Y.chapingBannerCloseTime = 3e3, 
    Y.bannerFirstSwitchCount = 1, Y.bannerSwitchCount = 5, Y.bannerSwitchTime = 5, Y.chapingReturn = 0, 
    Y.gameCenterReturn = 1, Y.newUserShowChaping = 1, Y.loadingShowBanner = 1, Y.switchGameTopTime = 5, 
    Y.switchGameTopHideTime = 1, Y.bxAddPro = .05, Y.bxSubPro = .001, Y.bxClickNum = "1-2", 
    Y.bxBigBanner = 1, Y.bxDelayTime = 1500, Y.bxCheckPoint = "1-5", Y.cpCheckPoint = "1-1", 
    Y.offlineReward = 0, Y.goldGift = 0, Y.victoryMistake = 0, Y.defeateMistake = 0, 
    Y.roll = "2:20,4:20,6:20,8:20,10:10", Y.maxspeed = .2, Y.maxBackspeed = .3 * Y.maxspeed, 
    Y.maxspeedPerm = .08, Y.maxspeedCollision = .04, Y.acceleration = .003, Y.backAcceleration = .001, 
    Y.brakingspeed = .01, Y.slideMinsSpeednumber = Y.acceleration / 2, Y.carRotate = 62, 
    Y.addAngle = 10, Y.straightenCarWheel = 35, Y.hideTimer = 0, Y.showTimer = 0, Y.isKefuReward = !1, 
    Y.shareType = k.not, Y.maxCheck = 40, Y.data_CheckpointNum = 1, Y.get_goldNum = 0, 
    Y.get_goldMax = 0, Y.get_starNum = 0, Y.get_checkpointNum = 0, Y.endlucky = 0, Y.startlucky = 0, 
    Y.startvideo = 0, Y.endvideo = 0, Y.get_palyGameCheckNum = 2, Y.res_Checkpoint = "", 
    Y.res_userCar = "", Y.reality_initialSpeed = 20, Y.initialSpeedmax = 600, Y.minspeed = .05, 
    Y.carMaxGravity = 0, Y.carMaxSpeed = 0, Y.carMaxOperation = 0, Y.carMaxNitroAddSpeed = 0, 
    Y.luckyCarId = 0, Y.unlockCarId = 0, Y.TryCarId = 0, Y.oldTryCarId = 0, Y.isTryCarSate = 0, 
    Y.nitroAddSpeed = Y.maxspeed, Y.nitroacceleration = 2 * Y.acceleration, Y.nitroTime = 6e3, 
    Y.collideSpeedRate = .5, Y.carLeftRightMoveCoeffi = .2, Y.carLeftRightRotationCoeffi = 3, 
    Y.carMaxRotationCoeffi = 20, Y.carReturnRotationCoeffi = .8, Y.displayspeed = 500, 
    Y.homeCarSpeed = .01, Y.homeCarRotation = .6, Y.checkpointGoldNum = 0, Y.fullscreentime = 2;
    class X extends Laya.Script {
        onAwake() {
            this.owner.on(Laya.Event.RESIZE, this, this.onResize);
        }
        centerDialog() {
            let e = this.owner;
            e.x = Math.round((Laya.stage.width - e.width >> 1) + e.pivotX), e.y = Math.round((Laya.stage.height - e.height >> 1) + e.pivotY);
        }
        onResize() {
            this.centerDialog();
        }
    }
    var W, J = Laya.ClassUtils.regClass;
    !function(e) {
        !function(e) {
            class t extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/ChaPingPanel");
                }
            }
            e.ChaPingPanelUI = t, J("ui.dialogs.ChaPingPanelUI", t);
            class a extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/ChaPingPanelNew");
                }
            }
            e.ChaPingPanelNewUI = a, J("ui.dialogs.ChaPingPanelNewUI", a);
            class i extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/CheckpointPanel");
                }
            }
            e.CheckpointPanelUI = i, J("ui.dialogs.CheckpointPanelUI", i);
            class s extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/ChestCoinUI");
                }
            }
            e.ChestCoinUIUI = s, J("ui.dialogs.ChestCoinUIUI", s);
            class n extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/ChestDialog");
                }
            }
            e.ChestDialogUI = n, J("ui.dialogs.ChestDialogUI", n);
            class r extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/FailPanel");
                }
            }
            e.FailPanelUI = r, J("ui.dialogs.FailPanelUI", r);
            class o extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/GameCentrePanel");
                }
            }
            e.GameCentrePanelUI = o, J("ui.dialogs.GameCentrePanelUI", o);
            class h extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/LoginFullPanel");
                }
            }
            e.LoginFullPanelUI = h, J("ui.dialogs.LoginFullPanelUI", h);
            class l extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/LuckyPanel");
                }
            }
            e.LuckyPanelUI = l, J("ui.dialogs.LuckyPanelUI", l);
            class c extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/OffLinePanel");
                }
            }
            e.OffLinePanelUI = c, J("ui.dialogs.OffLinePanelUI", c);
            class d extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/PasePanel");
                }
            }
            e.PasePanelUI = d, J("ui.dialogs.PasePanelUI", d);
            class g extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/PromotionPanel");
                }
            }
            e.PromotionPanelUI = g, J("ui.dialogs.PromotionPanelUI", g);
            class u extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/ToastDialog");
                }
            }
            e.ToastDialogUI = u, J("ui.dialogs.ToastDialogUI", u);
            class m extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/TryCarPanel");
                }
            }
            e.TryCarPanelUI = m, J("ui.dialogs.TryCarPanelUI", m);
            class p extends Laya.Dialog {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("dialogs/VictoryPanel");
                }
            }
            e.VictoryPanelUI = p, J("ui.dialogs.VictoryPanelUI", p);
        }(e.dialogs || (e.dialogs = {}));
    }(W || (W = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/ChaPingItem");
                }
            }
            e.ChaPingItemUI = t, J("ui.item.ChaPingItemUI", t);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/ChaPingItemNew");
                }
            }
            e.ChaPingItemNewUI = a, J("ui.item.ChaPingItemNewUI", a);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/CheckpointItem");
                }
            }
            e.CheckpointItemUI = i, J("ui.item.CheckpointItemUI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/ExportHomeItem");
                }
            }
            e.ExportHomeItemUI = s, J("ui.item.ExportHomeItemUI", s);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/ExportItem");
                }
            }
            e.ExportItemUI = n, J("ui.item.ExportItemUI", n);
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/ExportItem2");
                }
            }
            e.ExportItem2UI = r, J("ui.item.ExportItem2UI", r);
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/GameCentreItem");
                }
            }
            e.GameCentreItemUI = o, J("ui.item.GameCentreItemUI", o);
            class h extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/LoginFullItem");
                }
            }
            e.LoginFullItemUI = h, J("ui.item.LoginFullItemUI", h);
            class l extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("item/UnlockItem");
                }
            }
            e.UnlockItemUI = l, J("ui.item.UnlockItemUI", l);
        }(e.item || (e.item = {}));
    }(W || (W = {})), function(e) {
        !function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("prefabs/DanMuItemPrefabs");
                }
            }
            e.DanMuItemPrefabsUI = t, J("ui.prefabs.DanMuItemPrefabsUI", t);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("prefabs/ExportHomePrefabs");
                }
            }
            e.ExportHomePrefabsUI = a, J("ui.prefabs.ExportHomePrefabsUI", a);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("prefabs/ExportPrefabs");
                }
            }
            e.ExportPrefabsUI = i, J("ui.prefabs.ExportPrefabsUI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("prefabs/GoldTweenPrefabs");
                }
            }
            e.GoldTweenPrefabsUI = s, J("ui.prefabs.GoldTweenPrefabsUI", s);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("prefabs/MisuseBtnPrefabs");
                }
            }
            e.MisuseBtnPrefabsUI = n, J("ui.prefabs.MisuseBtnPrefabsUI", n);
        }(e.prefabs || (e.prefabs = {}));
    }(W || (W = {})), function(e) {
        !function(e) {
            class t extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/GameScene");
                }
            }
            e.GameSceneUI = t, J("ui.scenes.GameSceneUI", t);
            class a extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/Gold");
                }
            }
            e.GoldUI = a, J("ui.scenes.GoldUI", a);
            class i extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/HomeScene");
                }
            }
            e.HomeSceneUI = i, J("ui.scenes.HomeSceneUI", i);
            class s extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/LoadResScene");
                }
            }
            e.LoadResSceneUI = s, J("ui.scenes.LoadResSceneUI", s);
            class n extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scenes/LoginScene");
                }
            }
            e.LoginSceneUI = n, J("ui.scenes.LoginSceneUI", n);
        }(e.scenes || (e.scenes = {}));
    }(W || (W = {}));
    class K extends W.dialogs.ToastDialogUI {
        constructor(e, t) {
            super(), this.holdTime = 1e3, this.flyTime = 800, this.flyY = 100, this.tip = e, 
            this.isModal = !1, this.overCallback = t, this.autoDestroyAtClosed = !0;
        }
        onAwake() {
            this.tipLabel.changeText(this.tip), setTimeout(() => {
                Laya.Tween.to(this, {
                    y: this.y - this.flyY,
                    alpha: 0
                }, this.flyTime, Laya.Ease.linearOut, Laya.Handler.create(this, this.onAniOver));
            }, this.holdTime), this.resizeBg();
        }
        resizeBg() {
            let e = this.tipLabel.textField;
            this.bg.width = e.textWidth + 40, this.bg.height = e.textHeight + 40;
        }
        onAniOver() {
            this.overCallback && this.overCallback && this.overCallback();
        }
    }
    class q {
        constructor() {
            this.items = {};
        }
        has(e) {
            return this.items.hasOwnProperty(e);
        }
        set(e, t) {
            this.items[e] = t;
        }
        delete(e) {
            return this.has(e) && delete this.items[e], !1;
        }
        get(e) {
            return this.has(e) ? this.items[e] : void 0;
        }
        values() {
            let e = [];
            for (let t in this.items) this.has(t) && e.push(this.items[t]);
            return e;
        }
    }
    class $ {
        constructor() {}
        static init() {
            UIConfig.popupBgAlpha = .85, Laya.Dialog.manager.popupEffect = this.popEffect, Laya.Dialog.manager.popupEffectHandler = new Laya.Handler(this, this.popEffect), 
            Laya.Dialog.manager.closeEffect = this.closeEffect, Laya.Dialog.manager.closeEffectHandler = new Laya.Handler(this, this.closeEffect), 
            this.dialogQueue = [], this.currentScene = "", this.showingDialogs = [], this.createTipLayer(), 
            this.initSystemOnShow();
        }
        static createTipLayer() {
            this.tipLayer = new Laya.Sprite(), this.tipLayer.width = Dt.width, this.tipLayer.height = Dt.height, 
            this.tipLayer.pivot(.5 * Dt.width, .5 * Dt.height).pos(.5 * Laya.stage.width, .5 * Laya.stage.height), 
            this.tipLayer.mouseEnabled = !1, this.tipLayer.zOrder = 1001, Laya.stage.addChild(this.tipLayer);
        }
        static closeEffect(e) {
            Laya.Tween.to(e, {
                scaleX: 0,
                scaleY: 0
            }, 10, Laya.Ease.strongOut, Laya.Handler.create(Laya.Dialog.manager, Laya.Dialog.manager.doClose, [ e ]), 0, !1, !1);
        }
        static popEffect(e) {
            e.scale(1, 1), Laya.Tween.from(e, {
                scaleX: 1,
                scaleY: 1.1
            }, 10, Laya.Ease.backOut, Laya.Handler.create(Laya.Dialog.manager, Laya.Dialog.manager.doOpen, [ e ]), 0, !1, !1);
        }
        static _dialogLayout(e) {
            e.isModal = !(e instanceof K), e.anchorX = .5, e.anchorY = .5, e.addComponent(X);
        }
        static showDialog(e, t = !0, a = !1) {
            this._dialogLayout(e), e.isShowEffect = t, this.showingDialogs.length > 0 && a ? this.dialogQueue.push(e) : (this.showingDialogs.push(e), 
            Laya.Dialog.manager.open(e, !1, t));
        }
        static closeAllDialog() {
            for (;this.showingDialogs.length > 0; ) {
                let e = this.showingDialogs[0];
                this.closeDialog(e);
            }
        }
        static closeDialog(e) {
            e && e.close();
            for (let t = this.showingDialogs.length - 1; t >= 0; t--) if (this.showingDialogs[t] === e) {
                this.showingDialogs.splice(t, 1);
                break;
            }
            if (this.showingDialogs.length < 1) {
                let e = this.dialogQueue.shift();
                e && Laya.Dialog.manager.open(e, !1, e.isShowEffect);
            }
        }
        static switchScene(e, t = null) {
            this.currentScene = e, Laya.Scene.open(e, !0, null, t);
        }
        static getCurrentScene() {
            return this.currentScene;
        }
        static getShowingDialogCount() {
            return this.showingDialogs.length;
        }
        static showToast(e) {
            let t = new K(e, () => {
                t.autoDestroyAtClosed = !0, t.destroy(!0);
            });
            this.tipLayer.addChild(t), this.popEffect(t);
        }
        static initSystemOnShow() {}
        static showParticle(e, t = null) {
            let a = Laya.loader.getRes(e);
            if (!a) return null;
            let i = new Laya.Particle2D(a);
            return i.zOrder = 15, t ? t.addChild(i) : Laya.stage.addChild(i), i;
        }
        static removeParticle(e) {
            e && e.parent && (e.emitter.stop(), e.parent.removeChild(e));
        }
        static showFloatLayerItem() {}
        static showFloatLayer() {}
        static addFloatLayerItem() {}
    }
    $._DicPanel = new q(), $.setUIPanel = function(e, t) {
        $._DicPanel.set(e, t);
    }, $.getUIPanel = function(e) {
        return $._DicPanel.get(e);
    };
    const Z = {
        NetError: "网络错误",
        LoadingTip: "Loading...",
        LoadingRes: "Loading...",
        LoadingScene: "Loading...",
        LoadingOver: "Loading Done",
        GetSuccess: "获取成功",
        GetFail: "获取失败",
        ExceedResu: "复活点已达上限",
        GoldNotEg: "Gold Coins Shortage",
        CantSign: "今日已签过",
        ShareFail: "通讯失败",
        NoVideoAd: "暂无可观看视频，请稍后再试",
        WaitPower: "暂无可观看视频，请休息一下，等待体力恢复",
        NotOpen: "暂未开放，敬请期待",
        GoldGift: "视频正在准备中，请稍后再试",
        Share: "分享",
        VideoAd: "视频广告",
        BannerAd: "Banner广告",
        GetOnePower: "获得1点体力",
        GetTryAward: "恭喜获得{0}金币",
        GetTryAwardTime: "试玩{0}秒才有奖励",
        GetTryAwardTip: "试玩{0}秒，返回得奖励",
        BtnTextGetAward: "领取",
        BtnTextGotAward: "试玩",
        GetDoubleAward: "恭喜获得双倍奖励",
        UnlockAtLevel: "{0}级解锁",
        CheckInAwardText: "点击按钮领取奖励",
        GetSignAward: "Congratulations to receive {0} coins",
        AuthUserError: "授权失败，请重试",
        AskAuthUser: "尚未授权，请先授权",
        ShareFailTip: "分享到不同的群，才可领取奖励哦！",
        ChangeMoto: "Changed",
        ChangeLuckyMoto: "Unlocked！",
        ChangeCar: "使用车辆已更换",
        PowerNot: "当前体力不足",
        NoBaoXiang: "暂无可打开宝箱，请稍后再试",
        I: "Me"
    }, Q = {
        main: "流失统计：",
        jinruloadjiemian: "1、开始loading",
        wanchengloadjiemian: "2、完成loading",
        dengluchaping: "3、关闭导量插屏按钮",
        zhujiemian: "4、进入游戏主界面",
        dianjikaishianniu: "xuhao、点击开始第num关游戏",
        guanbishenchetuijian: "xuhao、关闭第num关神车推荐按钮",
        dijiguanloadingkaishi: "xuhao、进入第num关loading",
        wanchengdijiguanload: "xuhao、完成第num关loading",
        jinruyouxi: "xuhao、进入第num关游戏",
        wanchengdaojishi: "xuhao、完成第num关倒计时等待",
        dijiguanddzd: "xuhao、到达第num关终点",
        dijiguanyxzx: "xuhao、第num关游戏中心",
        dijiguanjsbx: "xuhao、第num关宝箱界面",
        dijiguanjspm: "xuhao、第num关排名界面",
        dijiguanjsjs: "xuhao、第num关结算界面",
        huidaozhujiemian: "xuhao、回到主界面完成第num关游戏",
        dianjikaishianniu_level: "xuhao、点击开始第num关游戏",
        dijiguanloadingkaishi_level: "xuhao、进入第num关loading",
        wanchengdijiguanload_level: "xuhao、完成第num关loading",
        dijiguanddzd_level: "xuhao、到达第num关终点",
        dijiguanyxzx_level: "xuhao、第num关游戏中心",
        huidaozhujiemian_level: "xuhao、回到主界面完成第num关游戏",
        wanchengguanqia: "xuhao、完成第num关",
        dijiguankjqxyjs: "xuhao、第num关开局前幸运解锁",
        dijiguanyxzbx: "xuhao、第num关游戏中宝箱",
        dijiguancp: "xuhao、第num关插屏",
        diyiguanyxzbx: "第一关游戏中宝箱",
        diyiguanddzd: "第一关抵达终点",
        diyiguanyxzx: "第一关游戏中心",
        diyiguanjsbx: "第一关结算宝箱",
        wanchengdiyiguan: "第一关结算界面",
        dierguanyxzbx: "第二关游戏中宝箱",
        dierguanddzd: "第二关抵达终点",
        dierguanyxzx: "第二关游戏中心",
        dierguanjsbx: "第二关结算宝箱",
        wanchengdierguan: "第二关结算界面",
        disanguanyxzbx: "第三关游戏中宝箱",
        disanguanddzd: "第三关抵达终点",
        disanguanyxzx: "第三关游戏中心",
        disanguanjsbx: "第三关结算宝箱",
        wanchengdisanguan: "第三关结算界面",
        wanchengdisiguan: "完成第四关",
        wanchengdiwuguan: "完成第五关",
        wanchengdiliuguan: "完成第六关",
        wanchengdiqiguan: "完成第七关",
        wanchengdibaguan: "完成第八关",
        wanchengdijiuguan: "完成第九关",
        wanchengdishiguan: "完成第十关",
        Video: "看视频细分",
        MianFeiJinBi: "免费金币",
        TiLiBuZu: "体力不足",
        KaiJuDanQi: "开局氮气",
        ShuangBeiLingQu: "双倍领取",
        TianGuoBenGuan: "跳过本关",
        LiXinaShouYi: "离线收益",
        DaoChu: "导出统计",
        XingYunJiwMian: "幸运界面",
        ZhuJieMianChaPing: "主界面插屏",
        GaunKaChaPing: "关卡界面插屏",
        QuXiaoDaoChuChaPing: "取消导出插屏",
        baoxiang: "宝箱界面"
    };
    class ee {
        static showAdOrShare(e, t, a = null) {}
        static getStringLength(e) {
            return e && e.replace(/[\u0391-\uFFE5]/g, "aa").length || 0;
        }
        static getItem(e, t) {
            let a = localStorage.getItem(e);
            return null == a || "" == a ? t : JSON.parse(a);
        }
        static setItem(e, t) {
            localStorage.setItem(e, t + "");
        }
    }
    class te extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.sound = this.owner, this.sound.on(Laya.Event.CLICK, this, this.onSound);
        }
        onStart() {
            this.initSound();
        }
        initSound() {
            let e = ee.getItem("playSoundMuted", !0);
              Laya.SoundManager.muted = !e, this.sound.skin = Laya.SoundManager.muted ? `${P.uiDir}/shengyin_off.png` : `${P.uiDir}/shengyin.png`;
            // if(Laya.SoundManager.muted == true )
            // {
            //     this.sound.skin = `${P.uiDir}/shengyin_off.png`;
            //     WebAudioEngine.stopMusic();
            // }
            // else
            // {
            //     this.sound.skin =  `${P.uiDir}/shengyin.png`
            // }

            // console.log(Laya.SoundManager.muted)
            // if(Laya.SoundManager.muted == true)
            // {
            //     WebAudioEngine.stopMusic();
            // }

            
        }
        onSound() {
            Laya.SoundManager.muted = !Laya.SoundManager.muted, this.sound.skin = Laya.SoundManager.muted ? `${P.uiDir}/shengyin_off.png` : `${P.uiDir}/shengyin.png`, 
            Laya.SoundManager.setSoundVolume(1),ee.setItem("playSoundMuted", !Laya.SoundManager.muted), Laya.SoundManager.muted ? te.stopMusic() : te.playMusic(P.musicType); 

        }
        static playMusic(e) {

                E.playMusic(e);

        }
        static stopMusic() {
            E.stopMusic();
            E.stopEffect();
        }
        onDestroy() {
            this.sound.off(Laya.Event.CLICK, this, this.onSound);
        }
    }
    class ae extends t {
        constructor() {
            super(...arguments), this.AdCfg = [];
        }
        static getMgr() {
            return ae.mgr = ae.mgr || new ae();
        }
        onLoad() {
            ae.mgr = this;
            let e = Object.keys(h);
            for (let t = 0; t < e.length; t++) this.AdCfg.push([]);
        }
        start() {}
        addAdCfg(e, t) {
            this.AdCfg[e].push(t);
        }
        setAdCfg(e, t) {
            this.AdCfg[e] = t;
        }
        getAdCfg(e) {
            return this.AdCfg[e];
        }
        getAdUnitId(e, t) {
            return this.AdCfg[e][t];
        }
        showVideoAd(e, t) {
            let a = this.getAdUnitId(h.video, e);
            ve.getAdUnits().showVideoAd(a, function(e) {
                e.requestData.adUnitId = a, t && t(e);
            }.bind(this));
        }
        showModal(e, t) {
            wx.showModal({
                title: "提示",
                content: "未播放完视频不能获得奖励！",
                showCancel: !0,
                cancelColor: "#910202",
                cancelText: "取消",
                confirmColor: "#05AA05",
                confirmText: "确认",
                success: a => {
                    a.confirm && this.showVideoAd(e, t), a.cancel;
                },
                fail: () => {},
                complete: () => {}
            });
        }
        showInterstitialAd(e, t) {
            // let a = this.getAdUnitId(h.Interstitial, e);
            // ve.getAdUnits().showInterstitialAd(a, function(e) {
            //     e.requestData.adUnitId = a, t && t(e);
            // }.bind(this));
        }
        createBanner(e, t, a) {
            let i = this.getAdUnitId(h.banner, e);
            ve.getAdUnits().createBanner(i, t, a);
        }
        getBanner(e) {
            return ve.getAdUnits().getBanner(e);
        }
        removeBanner(e) {
            ve.getAdUnits().destroyBanner(e);
        }
        createGrid(e, t, a, i, s) {
            let n = this.getAdUnitId(h.grid, e);
            ve.getAdUnits().createGridAd(n, t, a, i, s);
        }
        getGrid(e) {
            return ve.getAdUnits().getGridAd(e);
        }
        removeGrid(e) {
            ve.getAdUnits().destroyGridAd(e);
        }
        createCustom(e, t, a, i, s, n) {
            let r = this.getAdUnitId(h.custom, e);
            ve.getAdUnits().createCustomAd(r, t, a, i, s, n);
        }
        getCustom(e) {
            return ve.getAdUnits().getCustomAd(e);
        }
        removeCustom(e) {
            ve.getAdUnits().destroyCustomAd(e);
        }
        _createBlockInputEvents() {
            return new Laya.Node();
        }
        playVideo(e) {
            let t = this;
            t.showVideoAd(0, function(a) {
                switch (a.result) {
                  case o.cancel:
                    t.showModal(0, function(a) {
                        switch (a.result) {
                          case o.cancel:
                             e.fail && e.fail(), te.playMusic(P.musicType);
                            break;

                          case o.Failure:
                            k ? t.share(e) : (e.fail && e.fail(), te.playMusic(P.musicType));
                            break;

                          case o.succeed:
                            e.success && e.success(), te.playMusic(P.musicType);
                        }
                    });
                    break;

                  case o.Failure:
                    k ? t.share(e) : (e.fail && e.fail(), te.playMusic(P.musicType));
                    break;

                  case o.succeed:
                    e.success && e.success(), te.playMusic(P.musicType);
                }
            }.bind(this));
        }
        share(e) {
            H.getMgr().onShare(function(t) {
                if ("在本地" == t.tag) e.shareCallBack && e.shareCallBack(); else switch (t.result) {
                  case o.succeed:
                    Y.shareType = e.shareType;
                    break;

                  case o.Failure:
                    Y.shareType = k.not, $.showToast(Z.NoVideoAd), te.playMusic(P.musicType);
                }
            });
        }
    }
    ae.mgr = null;
    class ie extends t {
        constructor() {
            super(...arguments), this.payCfg = [];
        }
        static getMgr() {
            return ie.mgr = ie.mgr || new ie();
        }
        onLoad() {
            ie.mgr = this;
        }
        start() {}
        addPayCfg(e, t, a) {
            let i = {
                type: e,
                adId: t,
                shareId: a
            };
            this.payCfg.push(i);
        }
        setPayCfg(e, t, a, i) {
            e >= this.payCfg.length || (this.payCfg[e].type = t, this.payCfg[e].adId = a, this.payCfg[e].shareId = i);
        }
        pay(e, t, a) {
            let i = this.payCfg[e];
            switch (i.type) {
              case r.adUnit:
                ae.getMgr().showVideoAd(e, function(e) {
                    e.tag = "ad", a(e);
                }.bind(this));
                break;

              case r.adUnit_1:
                ae.getMgr().showVideoAd(e, function(e) {
                    e.result == o.Failure && (e.result = o.succeed), e.tag = "ad", a(e);
                }.bind(this));
                break;

              case r.adToShare:
                ae.getMgr().showVideoAd(e, function(i) {
                    i.result == o.Failure ? (this.payCfg[e].type = r.share, this.pay(e, t, a)) : (i.tag = "ad", 
                    a(i));
                }.bind(this));
                break;

              case r.share:
                H.getMgr().shareApp(i.shareId, "", t, function(e) {
                    e.tag = "share", a(e);
                }.bind(this));
            }
        }
        getPayType(e) {
            return this.payCfg[e].type;
        }
    }
    ie.mgr = null;
    class se {
        constructor() {
            this.platformId = -1, this.platformName = "test", this.version = "1.0.0", this.appId = "", 
            this.isDeBug = !1, this.userinfo = null, this.storage = null, this.feedback = null, 
            this.adUnits = null, this.analystic = null, this.share = null, this.rank = null, 
            this.table = null, this.i18n = null;
        }
        onLoad() {}
        onLogin(e) {}
        getDeBug() {
            return this.isDeBug;
        }
        initPlatform() {}
        initGame() {}
        setVersion(e) {
            this.version = e;
        }
        getVersion() {
            return this.version;
        }
        setName(e) {
            this.platformName = e;
        }
        getName() {
            return this.platformName;
        }
        setId(e) {
            this.platformId = e;
        }
        getId() {
            return this.platformId;
        }
        setAppId(e) {
            this.appId = e;
        }
        getAppId() {
            return this.appId;
        }
        setUserInfoMgr(e) {
            this.userinfo = e;
        }
        getUserInfoMgr() {
            return this.userinfo;
        }
        setStorage(e) {
            this.storage = e;
        }
        getStorage() {
            return this.storage;
        }
        setFeedBack(e) {
            this.feedback = e;
        }
        getFeedBack() {
            return this.feedback;
        }
        setAdUnits(e) {
            this.adUnits = e, this.adUnits && this.adUnits.init();
        }
        getAdUnits() {
            return this.adUnits;
        }
        setAnalytics(e) {
            this.analystic = e, e.init(), e.setUserId(this.getUserInfoMgr().getUserId());
        }
        getAnalytics() {
            return this.analystic;
        }
        setShare(e) {
            this.share = e;
        }
        getShare() {
            return this.share;
        }
        setRank(e) {
            this.rank = e;
        }
        getRank() {
            return this.rank;
        }
        setTableMgr(e) {
            this.table = e;
        }
        getTableMgr() {
            return this.table;
        }
        setI18n(e) {
            this.i18n = e, this.i18n && this.i18n.init();
        }
        getI18n() {
            return this.i18n;
        }
        otherInterface(e, ...t) {}
    }
    class ne {
        setShareMenu(e, t = "", a = "") {
            wx.onShareAppMessage(function() {
                return {
                    title: e,
                    imageUrl: t,
                    query: a
                };
            });
        }
        shareAppMessage(e, t = "", a = "", i) {
            let s = new T();
            wx.shareAppMessage({
                title: e,
                imageUrl: t,
                query: a,
                success: function(e) {},
                fail: function() {}
            }), s.result = o.succeed, i(s);
        }
    }
    class re {
        constructor(e, t) {
            this.pos = new Laya.Vector2(), this.size = new Laya.Size(0, 0), this.anchor = new Laya.Vector2(), 
            this.adid = "", this.adUnitid = "", this.adid = e, this.adUnitid = t;
        }
        getId() {
            return this.adid;
        }
        getAdUnitid() {
            return this.adUnitid;
        }
        getSize() {
            return this.size;
        }
        show() {
            ve.getAdUnits().showBanner(this.adid);
        }
        hide() {
            ve.getAdUnits().hideBanner(this.adid);
        }
        destory() {
            ve.getAdUnits().destroyBanner(this.adid);
        }
        setPosition(e) {
            this.pos = e, this._onRePos();
        }
        getPosition() {
            return this.pos;
        }
        setWidth(e) {
            ve.getAdUnits().setBannerWidth(this.adid, e);
        }
        setAnchorX(e) {
            this.anchor.x = e, this._onRePos();
        }
        setAnchorY(e) {
            this.anchor.y = e, this._onRePos();
        }
        _onResize(e) {
            this.size = e, this._onRePos();
        }
        _onRePos() {
            let e = new Laya.Vector2();
            e.x = this.pos.x - this.size.width * this.anchor.x, e.y = this.pos.y - this.size.height * this.anchor.y, 
            ve.getAdUnits().setBannerPos(this.adid, e);
        }
    }
    class oe {
        constructor(e) {
            this.pos = new Laya.Vector2(), this.size = new Laya.Size(0, 0), this.anchor = new Laya.Vector2(), 
            this.adid = "", this.adid = e;
        }
        getId() {
            return this.adid;
        }
        show() {
            ve.getAdUnits().showGridAd(this.adid);
        }
        hide() {
            ve.getAdUnits().hideGridAd(this.adid);
        }
        setPosition(e) {
            this.pos = e, this._onRePos();
        }
        getPosition() {
            return this.pos;
        }
        setWidth(e) {
            ve.getAdUnits().setGridAdWidth(this.adid, e);
        }
        setAnchorX(e) {
            this.anchor.x = e, this._onRePos();
        }
        setAnchorY(e) {
            this.anchor.y = e, this._onRePos();
        }
        _onResize(e) {
            this.size = e, this._onRePos();
        }
        _onRePos() {
            let e = new Laya.Vector2();
            e.x = this.pos.x - this.size.width * this.anchor.x, e.y = this.pos.y - this.size.height * this.anchor.y, 
            ve.getAdUnits().setGridAdPos(this.adid, e);
        }
    }
    class he {
        constructor(e) {
            this.pos = new Laya.Vector2(), this.size = new Laya.Size(0, 0), this.anchor = new Laya.Vector2(), 
            this.adid = "", this.adid = e;
        }
        getId() {
            return this.adid;
        }
        show() {
            ve.getAdUnits().showCustomAd(this.adid);
        }
        hide() {
            ve.getAdUnits().hideCustomAd(this.adid);
        }
        setPosition(e) {
            this.pos = e, this._onRePos();
        }
        getPosition() {
            return this.pos;
        }
        setWidth(e) {
            ve.getAdUnits().setCustomAdWidth(this.adid, e);
        }
        setAnchorX(e) {
            this.anchor.x = e, this._onRePos();
        }
        setAnchorY(e) {
            this.anchor.y = e, this._onRePos();
        }
        _onResize(e) {
            this.size = e, this._onRePos();
        }
        _onRePos() {
            let e = new Laya.Vector2();
            e.x = this.pos.x - this.size.width * this.anchor.x, e.y = this.pos.y - this.size.height * this.anchor.y, 
            ve.getAdUnits().setCustomAdPos(this.adid, e);
        }
    }
    class le {
        constructor() {
            this.intAds = {}, this.intCallback = null, this.videoAds = {}, this.videocallback = null, 
            this.bannerAds = {}, this.gridAds = {}, this.customAds = {};
        }
        init() {}
        showInterstitialAd(e, t) {
            // this.intCallback = t;
            // let a = function(e) {
            //     this.intCallback && this.intCallback(e), this.intCallback = null;
            // }.bind(this), i = this.intAds[e];
            // if (!i) {
            //     if (!wx.createInterstitialAd) {
            //         let e = new T(o.Failure);
            //         return e.errCode = l.create, e.err = "create err", void a(e);
            //     }
            //     i = wx.createInterstitialAd({
            //         adUnitId: e
            //     }), this.intAds[e] = i, i.onClose(e => {
            //         let t = new T(o.cancel);
            //         a(t);
            //     });
            // }
            // i.show().catch(t => {
            //     this.intAds[e] = null;
            //     let i = new T(o.Failure);
            //     i.errCode = l.noAd, i.err = "no videoAd", a(i);
            // });
        }
        showVideoAd(e, t) {
            this.videocallback = t;
            let a = function(e) {
                this.videocallback && this.videocallback(e), this.videocallback = null;
            }.bind(this), i = this.videoAds[e];
            if (!i) {
                if (!wx.createRewardedVideoAd) {
                    let e = new T(o.Failure);
                    return e.errCode = l.create, e.err = "create err", void a(e);
                }
                i = wx.createRewardedVideoAd({
                    adUnitId: e
                }), this.videoAds[e] = i, i.onClose(e => {
                    if (e && e.isEnded || void 0 === e || "undefined" === e) {
                        console.log("看完广告发放奖励");
                        let e = new T(o.succeed);
                        a(e);
                    } else {
                        let e = new T(o.cancel);
                        a(e);
                    }
                }), i.onError(e => {
                    console.log("广告读取错误", e);
                    let t = new T(o.Failure);
                    t.errCode = l.noAd, t.err = "no videoAd", a(t);
                });
            }
            i.load().then(() => {
                i.show();
            });
        }
        createBanner(e, t, a) {
            let i = wx.createBannerAd({
                adUnitId: e,
                adIntervals: t,
                style: {
                    left: 0,
                    top: 0,
                    width: 300
                }
            }), s = B.getGlobalID(), n = new re(s, e);
            this.bannerAds[s] = {
                Ad: i,
                BAd: n
            }, i.onLoad(() => {
                let e = new T(o.succeed), t = this.bannerAds[s].BAd;
                e.data = t, a(e);
            }), i.onError(e => {
                let t = new T(o.Failure);
                t.errCode = e.errCode, t.err = "no videoAd", a(t);
            }), i.onResize(e => {
                let t = this.bannerAds[s].BAd, a = e.width, i = e.height;
                console.log("onResize", e, a, i);
                let n = new Laya.Size(a / this._getGameScaleW(), i / this._getGameScaleH());
                t._onResize(n);
            });
        }
        getBanner(e) {
            return this.bannerAds[e].BAd;
        }
        showBanner(e) {
            this.bannerAds[e].Ad.show();
        }
        hideBanner(e) {
            this.bannerAds[e].Ad.hide();
        }
        destroyBanner(e) {
            this.bannerAds[e].Ad.destroy(), delete this.bannerAds[e];
        }
        setBannerWidth(e, t) {
            this.bannerAds[e].Ad.style.width = this._transitionX(t);
        }
        setBannerPos(e, t) {
            let a = this.bannerAds[e].Ad;
            a.style.left = this._transitionX(t.x), a.style.top = this._transitionY(t.y);
        }
        createGridAd(e, t, a, i, s) {
            let n = wx.createGridAd({
                adUnitId: e,
                adTheme: t,
                gridCount: a,
                adIntervals: i,
                style: {
                    left: 0,
                    top: 0,
                    width: 300,
                    opacity: .8
                }
            }), r = B.getGlobalID(), h = new oe(r);
            this.gridAds[r] = {
                Ad: n,
                BAd: h
            }, n.onLoad(() => {
                let e = new T(o.succeed), t = this.gridAds[r].BAd;
                e.data = t, s(e);
            }), n.onError(e => {
                let t = new T(o.Failure);
                t.errCode = l.noAd, t.err = "no videoAd", s(t);
            }), n.onResize(e => {
                let t = this.gridAds[r].BAd, a = e.width, i = e.height;
                console.log("onResize", e, a, i);
                let s = new Laya.Size(a / this._getGameScaleW(), i / this._getGameScaleH());
                t._onResize(s);
            });
        }
        getGridAd(e) {
            return this.gridAds[e].BAd;
        }
        showGridAd(e) {
            this.gridAds[e].Ad.show();
        }
        hideGridAd(e) {
            this.gridAds[e].Ad.hide();
        }
        destroyGridAd(e) {
            this.gridAds[e].Ad.destroy(), delete this.gridAds[e];
        }
        setGridAdPos(e, t) {
            let a = this.gridAds[e].Ad;
            a.style.left = this._transitionX(t.x), a.style.top = this._transitionY(t.y);
        }
        setGridAdWidth(e, t) {
            this.gridAds[e].Ad.style.width = this._transitionX(t);
        }
        createCustomAd(e, t, a, i, s, n) {
            let r = wx.createCustomAd({
                adUnitId: e,
                adIntervals: i,
                style: {
                    left: a,
                    top: t
                }
            }), h = B.getGlobalID(), c = new he(h);
            this.customAds[h] = {
                Ad: r,
                BAd: c
            }, r.onLoad(() => {
                let e = new T(o.succeed), t = this.customAds[h].BAd;
                e.data = t, n(e);
            }), r.onError(e => {
                let t = new T(o.Failure);
                t.errCode = l.noAd, t.err = "no videoAd", n(t);
            });
        }
        getCustomAd(e) {
            return this.customAds[e].BAd;
        }
        showCustomAd(e) {
            this.customAds[e].Ad.show();
        }
        hideCustomAd(e) {
            this.customAds[e].Ad.hide();
        }
        destroyCustomAd(e) {
            this.customAds[e].Ad.destroy(), delete this.customAds[e];
        }
        setCustomAdPos(e, t) {
            let a = this.customAds[e].Ad;
            a.style.left = this._transitionX(t.x), a.style.top = this._transitionY(t.y);
        }
        setCustomAdWidth(e, t) {
            this.customAds[e].Ad.style.width = this._transitionX(t);
        }
        _getSysInfo() {
            return wx.getSystemInfoSync();
        }
        _getGameScaleW() {
            return this._getSysInfo().windowWidth / ve.getWidth();
        }
        _getGameScaleH() {
            return this._getSysInfo().windowHeight / ve.getHeight();
        }
        _transitionX(e) {
            return e * this._getGameScaleW();
        }
        _transitionY(e) {
            return e * this._getGameScaleH();
        }
    }
    class ce {
        init() {}
        setUserId(e) {}
        setUserProperty(e) {}
        logEvent(e, t) {}
        setScreenName(e) {}
    }
    class de {
        constructor() {
            this.name = "", this.score = 0, this.rank = 0, this.avatarUrl = "头像地址", this.data = {};
        }
    }
    class ge {
        constructor() {
            this.rankdatas = [], this.mydata = null, this.rankurl = "", this.curScore = 0;
        }
        setRankUrl(e) {
            this.rankurl = e;
        }
        isUserInfo() {
            if (z.isLogin()) return z.isAuth();
            ve.getUserInfoMgr().login(function(e) {
                switch (e.result) {
                  case o.succeed:
                    let t = ve.getGame().getPlatform().getId(), a = ve.getGame().getPlatform().getVersion(), i = ve.getGame().getPlatform().getAppId(), s = this.rankurl;
                    z.login(s, t, i, e.data.code, e.data.anonymousCode, e.data.inviteCode, a, 5, function(e) {
                        return e.result == o.succeed && z.isAuth();
                    }.bind(this));
                    break;

                  case o.Failure:
                  case o.cancel:
                    return !1;
                }
            }.bind(this));
        }
        setUserInfo(e, t) {
            let a = e, i = (a.rawData && a.rawData, a.encryptedData ? a.encryptedData : ""), s = a.iv ? a.iv : "";
            z.setUserInfo(i, s, t);
        }
        uploadScore(e, t, a) {
            this.curScore = e, z.uploadScore(e, null, a);
        }
        getRanks(e, t, a, i) {
            this.rankdatas.length > 0 ? (this._returnData(e, t, a), this._loadData()) : this._loadData(function() {
                this._returnData(e, t, a);
            }.bind(this));
        }
        getMyRank(e, t) {
            null != this.mydata && this.mydata.score == this.curScore ? e && e(this.mydata) : this._loadData(function(t) {
                e && e(this.mydata);
            }.bind(this));
        }
        _returnData(e, t, a) {
            let i = [];
            if (e < this.rankdatas.length) for (let a = e; a < e + t && !(a >= this.rankdatas.length); a++) i.push(this.rankdatas[a]);
            a && a(i);
        }
        _loadData(e) {
            z.getRanks(function(t) {
                if (t.result == o.succeed) {
                    let e = t.data;
                    if (e) {
                        this.mydata || (this.mydata = new de()), this._setRankInfo(this.mydata, e.my), this.curScore = this.mydata.score;
                        for (let t = 0; t < e.rank.length; t++) {
                            let a = e.rank[t];
                            this.rankdatas.push(this._setRankInfo(new de(), a));
                        }
                    }
                }
                e && e(t);
            }.bind(this));
        }
        _setRankInfo(e, t) {
            e.rank = t.rank - 1, e.name = t.name, e.score = t.level, e.avatarUrl = t.avatarUrl;
        }
    }
    class ue {
        isNewUser() {
            return !1;
        }
        setUserId(e) {}
        getUserId() {
            return "";
        }
        login(e) {
            let t = new T(), a = function(a) {
                console.log("wx.login success", a), t.result = o.succeed, t.data = a;
                let i = wx.getLaunchOptionsSync().query.inviteCode;
                t.data.inviteCode = i, e && e(t);
            }.bind(this), i = function(a) {
                console.log("wx.login fail", a), t.result = o.Failure, t.err = a, e && e(t);
            }.bind(this), s = function(e) {}.bind(this);
            wx.login({
                success: a,
                fail: i,
                complete: s
            });
        }
        getUserInfo() {
            return null;
        }
        checkAccredit(e) {}
        _getUserInfo(e) {
            wx.getUserInfo({
                lang: "zh_CN",
                success: function(t) {
                    console.log("获取授权信息成功", t), this.userInfo = t.userInfo, e && e(!0);
                },
                fail() {
                    e && e(!1);
                }
            });
        }
        isAuth() {
            return !0;
        }
        Accredit(e) {}
    }
    class me {
        static initKeys() {
            if (!me.keys) {
                let e = window.localStorage.getItem("localstoragekeys");
                me.findData(e) ? me.keys = JSON.parse(e) : me.keys = {};
            }
        }
        static saveData(e, t) {
            if (me.initKeys(), !me.keys[e]) {
                me.keys[e] = e;
                let t = JSON.stringify(me.keys);
                window.localStorage.setItem("localstoragekeys", t);
            }
            "boolean" == typeof t && (t = t ? "true" : "false"), this.datas.length > 0 && this.datas[this.datas.length - 1][0] == e ? this.datas[this.datas.length - 1][1] = t : this.datas.push([ e, t ]), 
            me.threshold < 0 ? me.saveAllData() : me._openSaveUpData();
        }
        static readData(e, t) {
            me.initKeys();
            for (let t = 0; t < this.datas.length; t++) if (this.datas[t][0] == e) return this.datas[t][1];
            var a = window.localStorage.getItem(e);
            return me.findData(a) ? "boolean" == typeof t ? a = "true" == a : "number" == typeof t && (a = +a) : a = t, 
            a;
        }
        static removeData(e) {
            window.localStorage.removeItem(e);
        }
        static removeAllData() {
            window.localStorage.clear();
        }
        static findData(e) {
            return null != e && "" !== e && "undefined" !== e;
        }
        static backupData(e) {
            me.initKeys();
            let t = Object.keys(me.keys), a = JSON.stringify(me.keys);
            window.localStorage.setItem("localstoragekeys_backup" + e, a);
            for (let a = 0; a < t.length; a++) {
                let i = window.localStorage.getItem(t[a]);
                window.localStorage.setItem(t[a] + "_backup" + e, i);
            }
            console.log("备份成功");
        }
        static recoveryData(e) {
            let t = window.localStorage.getItem("localstoragekeys_backup" + e);
            if (!me.findData(t)) return;
            me.initKeys();
            let a = Object.keys(me.keys);
            for (let e = 0; e < a.length; e++) window.localStorage.removeItem(a[e]);
            window.localStorage.setItem("localstoragekeys", t), a = Object.keys(JSON.parse(t)), 
            console.log("开始恢复");
            for (let t = 0; t < a.length; t++) {
                let i = window.localStorage.getItem(a[t] + "_backup" + e);
                console.log("恢复", a[t], i), window.localStorage.setItem(a[t], i);
            }
            console.log("恢复成功");
        }
        static saveAllData() {
            for (let e = 0; e < me.datas.length; e++) window.localStorage.setItem(me.datas[e][0], me.datas[e][1]);
            me.datas.splice(0, me.datas.length), me.isSaveIng = !1;
        }
        static _openSaveUpData() {
            me.isSaveIng || (me.isSaveIng = !0, window.localStorage.setItem(me.datas[0][0], me.datas[0][1]), 
            me.datas.splice(0, 1), setTimeout(() => {
                me.isSaveIng = !1, me.datas.length > 0 && me._openSaveUpData();
            }, me.threshold));
        }
        static exportData(e) {
            me.initKeys();
            let t = {}, a = Object.keys(me.keys);
            for (let e = 0; e < a.length; e++) {
                let i = window.localStorage.getItem(a[e]);
                t[a[e]] = i;
            }
            e(t);
        }
        static importData(e) {
            let t = Object.keys(e), a = {};
            for (let i = 0; i < t.length; i++) a[t[i]] = t[i], window.localStorage.setItem(t[i], e[t[i]]);
            let i = JSON.stringify(a);
            window.localStorage.setItem("localstoragekeys", i);
        }
    }
    me.threshold = 0, me.datas = [], me.keys = null, me.isSaveIng = !1;
    class pe {
        constructor() {
            this.savecallback = null;
        }
        readData(e, t, a) {
            let i = new T(o.succeed), s = z.getData(), n = me.readData("cljddata_version", 0), r = s.version ? s.version : 0;
            if (n < r) {
                let e = Object.keys(s);
                for (let t = 0; t < e.length; t++) me.saveData(e[t], s[e[t]]);
                me.saveData("cljddata_version", r);
            }
            i.data = me.readData(e, t), a && a(i);
        }
        saveData(e, t, a) {
            let i = Date.now();
            me.saveData("cljddata_version", i), me.saveData(e, t);
            let s = z.getData();
            s.version = i, s[e] = t, z.setData(s, a), this.savecallback && this.savecallback();
        }
        removeData(e, t) {
            let a = Date.now(), i = z.getData();
            delete i[e], i.version = a, z.setData(i, t);
        }
        removeAllData(e) {
            z.setData({}, e);
        }
        registerCallback(e) {
            this.savecallback = e;
        }
    }
    class fe {
        constructor() {
            this._name = "", this._data = {}, this._rowkeys = [], this._colkeys = [];
        }
        setData(e, t) {
            this._name = e, this._data = t, this._rowkeys = Object.keys(t), this._rowkeys.length > 0 && t[this._rowkeys[0]] && (this._colkeys = Object.keys(t[this._rowkeys[0]]));
        }
        getTableName() {
            return this._name;
        }
        getRawData() {
            return this._data;
        }
        getColNum() {
            return this._colkeys.length;
        }
        getRowNum() {
            return this._rowkeys.length;
        }
        getColKeys() {
            return this._colkeys;
        }
        getRowKeys() {
            return this._rowkeys;
        }
        filter(e) {
            let t = new fe(), a = {};
            for (let t = 0; t < this._rowkeys.length; t++) {
                let i = this._data[this._rowkeys[t]];
                e(i) && (a[this._rowkeys[t]] = i);
            }
            return t.setData(this._name, a), t;
        }
        getData(e, t) {
            let a = this._getrowkey(e);
            if (null == a) return;
            null != t && null != t || (t = 1);
            let i = this._getcolkey(t);
            return null != i && void 0 !== this._data[a] && void 0 !== this._data[a][i] ? this._data[a][i] : void 0;
        }
        getRowData(e) {
            let t = this._getrowkey(e);
            if (null != t) return this._data[t];
        }
        getColData(e) {
            let t = this._getcolkey(e);
            if (null == t) return;
            let a = {}, i = this.getRowKeys();
            for (let e = 0; e < i.length; e++) a[i[e]] = this.getData(i[e], t);
            return a;
        }
        colKeyToIndex(e) {
            for (let t = 0; t < this._colkeys.length; t++) if (this._colkeys[t] == e) return t;
        }
        colIndexTokey(e) {
            if (this._colkeys[e]) return this._colkeys[e];
        }
        rowKeyToIndex(e) {
            for (let t = 0; t < this._rowkeys.length; t++) if (this._rowkeys[t] == e) return t;
        }
        rowIndexTokey(e) {
            if (this._rowkeys[e]) return this._rowkeys[e];
        }
        _getrowkey(e) {
            let t = "";
            return t = "string" == typeof e ? e : this.rowIndexTokey(e);
        }
        _getcolkey(e) {
            let t = "";
            return t = "string" == typeof e ? e : this.colIndexTokey(e);
        }
    }
    class ye {
        constructor() {
            this._tablepath = "", this._InfotableName = "", this._tables = {};
        }
        setTablePath(e) {
            this._tablepath = e;
        }
        setInfoTable(e) {
            this._InfotableName = e;
        }
        loadAllTable(e) {
            this.loadTable(this._InfotableName, function(t) {
                if (t.result == o.Failure) t.err = "未设置InfoTable", e && e(t); else {
                    let t = this.getTable(this._InfotableName), a = t.getRowKeys(), i = [];
                    for (let e = 0; e < a.length; e++) {
                        let s = t.getData(a[e], "name");
                        if (s) {
                            t.getData(a[e], "version");
                            i.push(s);
                        }
                    }
                    this.loadTable(i, function(t) {
                        e && e(t);
                    }.bind(this));
                }
            }.bind(this));
        }
        loadTable(e, t) {
            let a = [];
            "string" == typeof e ? a.push(e) : a = e;
            let i = function(e) {
                for (let t = 0; t < e.length; t++) {
                    let a = e[t];
                    this._addtables(a);
                }
                let a = new T(o.succeed);
                t && t(a);
            }.bind(this);
            if (this._data) i(a); else {
                let e = Laya.Loader.getRes("config/config.zip");
                this._data = new JSZip(e), i(a);
            }
        }
        removeTable(e) {
            delete this._tables[e];
        }
        getTable(e) {
            return this._addtables(e), this._tables[e];
        }
        _addtables(e) {
            if (this._data || console.error("表格文件没有加载"), !this._tables[e]) {
                let t = JSON.parse(this._data.file(e + ".json").asText()), a = new fe(), i = t;
                a.setData(e, i), this._tables[e] = a;
            }
        }
    }
    class _e extends se {
        constructor() {
            super(...arguments), this.isInit = !1, this.isAccredit = !1, this.userInfo = null;
        }
        onLoad() {}
        update(e) {}
        initPlatform() {
            // this.setId(b.wx), this.setName("wx"), this.setVersion("1.0.0"), this.setUserInfoMgr(new ue()), 
            // this.setStorage(new pe()), this.setAppId(P.appId), this.setShare(new ne()), this.setAdUnits(new le()), 
            // this.setTableMgr(new ye()), this.getTableMgr().setInfoTable("game_constant_config"), 
            // this.getTableMgr().setTablePath("https://game.g.youwanshe.cn/hdfc/config.zip"), 
            // this.setAnalytics(new ce()), this.setRank(new ge()), this.checkUpdate();
        }
        initGame() {
            // P.debug ? (U.getMgr().addUrl("server", "https://game01.g.youwanshe.cn"), U.getMgr().addUrl("res", "https://game.g.youwanshe.cn/hdfc")) : (U.getMgr().addUrl("server", "https://cy.genwowanba.com"), 
            // U.getMgr().addUrl("res", "https://cdn.fairgame.cn/hdfc/res1.1.6")), U.getMgr().setDefaultKey("server"), 
            // ae.getMgr().setAdCfg(h.video, [ "adunit-0a339c8ac54161e6" ]), ae.getMgr().setAdCfg(h.banner, [ "adunit-4bb016437491a5f0", "adunit-44d3e5256f79da14", "adunit-1ad25f27536cf6fe", "adunit-994cab22e369dbc2", "adunit-33edd324d6786ea6", "adunit-0ad72283d8357442", "adunit-16de99a7e1d22d1b", "adunit-8319113d60883760", "adunit-6a0b1ddd0cf3b286", "adunit-121e7e74efe58fd6" ]), 
            // ae.getMgr().setAdCfg(h.Interstitial, [ "adunit-43712d4b5eb969a7" ]), ae.getMgr().setAdCfg(h.custom, [ "adunit-c760b059893555f7", "adunit-34b56f5f42390c4d" ]);
        }
        otherInterface(e, ...t) {
            switch (e) {
              case M.updateSubscribe:
                this.updateSubscribe();
            }
        }
        updateSubscribe() {
            try {
                !ee.getItem("update_subscribe", 0) && !z.isNewPlayer && P.showUpdateSubscribe && wx.getWhatsNewSubscriptionsSetting && wx.requestSubscribeWhatsNew && wx.requestSubscribeWhatsNew({
                    msgType: 1,
                    success(e) {
                        e.confirm && (P.showUpdateSubscribe = !1, console.log(`更新订阅用户选择了 ${e.confirm ? "是" : "否"}`), 
                        ee.setItem("update_subscribe", 1));
                    },
                    fail(e) {
                        e.errCode && 2 == Number(e.errCode) && ee.setItem("update_subscribe", 1), console.error(e);
                    }
                });
            } catch (e) {
                console.log("更新订阅出错了", e);
            }
        }
        checkUpdate() {
            let e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                console.log("小程序自动更新最新版本" + e.hasUpdate);
            }), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && e.applyUpdate();
                    }
                });
            }), e.onUpdateFailed(function() {});
        }
        checkAccredit(e) {
            var t = this;
            wx.getSetting({
                success: function(a) {
                    t.isInit = !0, !0 === a.authSetting["scope.userInfo"] ? (console.log("已经授权"), t.isAccredit = !0, 
                    t.getUserInfo(null), e && e(!0)) : (t.isAuthorize = !1, console.log("用户已拒绝授权，再调用相关 API 或者 wx.authorize 会失败，需要引导用户到设置页面打开授权开关"), 
                    e && e(!1));
                }.bind(this),
                fail() {
                    e && e(!1);
                }
            });
        }
        getUserInfo_WX(e) {
            wx.getUserInfo({
                lang: "zh_CN",
                success: function(t) {
                    console.log("获取授权信息成功", t), this.userInfo = t.userInfo, this.userInfo.encryptedData = t.encryptedData, 
                    this.userInfo.iv = t.iv, e && e(!0);
                },
                fail() {
                    e && e(!1);
                }
            });
        }
    }
    class Ce {
        constructor() {
            this.newuser = !0, this.id = "", this.auth = !1, this.nickName = "", this.avatarUrl = "", 
            this.city = "", this.gender = n.null, this.phonenumber = "", this.other = {};
        }
    }
    class we {
        constructor() {
            this.userid = "", this._userinfo = new Ce();
        }
        isNewUser() {
            return !1;
        }
        setUserId(e) {
            this.getUserInfo().id = e;
        }
        getUserId() {
            return this.getUserInfo().id;
        }
        login(e) {
            let t = new T(o.succeed);
            t.data.code = 20200909, t.data.inviteCode = 1026159, e && e(t);
        }
        getUserInfo() {
            return this._userinfo;
        }
        checkAccredit(e) {
            let t = new T(o.succeed);
            e && e(t);
        }
        isAuth() {
            return !0;
        }
        Accredit(e) {
            let t = new T(o.succeed);
            e && e(t);
        }
    }
    class be {
        setShareMenu() {}
        shareAppMessage(e, t = "", a = "", i) {
            let s = new T();
            s.tag = "在本地", i(s);
        }
    }
    class Se {
        constructor() {
            this.videoAds = {}, this.videocallback = null, this.bannerAds = {}, this.gridAds = {}, 
            this.customAds = {};
        }
        init() {}
        showInterstitialAd(e, t) {
            let a = new T(o.succeed);
            t && t(a);
        }
        showVideoAd(e, t) {
            let a = new T(o.succeed);
            t && t(a);
        }
        createBanner(e, t, a) {
            let i = new T(o.Failure);
            a && a(i);
        }
        getBanner(e) {
            return this.bannerAds[e].BAd;
        }
        showBanner(e) {
            this.bannerAds[e].Ad.show();
        }
        hideBanner(e) {
            this.bannerAds[e].Ad.hide();
        }
        destroyBanner(e) {
            this.bannerAds[e].Ad.destroy(), delete this.bannerAds[e];
        }
        setBannerWidth(e, t) {
            this.bannerAds[e].Ad.style.width = this._transitionX(t);
        }
        setBannerPos(e, t) {
            let a = this.bannerAds[e].Ad;
            a.style.left = this._transitionX(t.x), a.style.top = this._transitionY(t.y);
        }
        createGridAd(e, t, a, i, s) {
            let n = new T(o.succeed);
            s && s(n);
        }
        getGridAd(e) {
            return this.gridAds[e].BAd;
        }
        showGridAd(e) {
            this.gridAds[e].Ad.show();
        }
        hideGridAd(e) {
            this.gridAds[e].Ad.hide();
        }
        destroyGridAd(e) {
            this.gridAds[e].Ad.destroy(), delete this.gridAds[e];
        }
        setGridAdPos(e, t) {
            let a = this.gridAds[e].Ad;
            a.style.left = this._transitionX(t.x), a.style.top = this._transitionY(t.y);
        }
        setGridAdWidth(e, t) {
            this.gridAds[e].Ad.style.width = this._transitionX(t);
        }
        createCustomAd(e, t, a, i, s, n) {
            let r = new T(o.succeed);
            n && n(r);
        }
        getCustomAd(e) {
            return this.customAds[e].BAd;
        }
        showCustomAd(e) {
            this.customAds[e].Ad.show();
        }
        hideCustomAd(e) {
            this.customAds[e].Ad.hide();
        }
        destroyCustomAd(e) {
            this.customAds[e].Ad.destroy(), delete this.customAds[e];
        }
        setCustomAdPos(e, t) {
            this.customAds[e].Ad;
        }
        setCustomAdWidth(e, t) {
            this.customAds[e].Ad;
        }
        _getSysInfo() {
            return wx.getSystemInfoSync();
        }
        _getGameScaleW() {
            return this._getSysInfo().windowWidth / ve.getWidth();
        }
        _getGameScaleH() {
            return this._getSysInfo().windowHeight / ve.getHeight();
        }
        _transitionX(e) {
            return e * this._getGameScaleW();
        }
        _transitionY(e) {
            return e * this._getGameScaleH();
        }
    }
    class ke extends se {
        constructor() {
            super(...arguments), this.isInit = !1, this.isAccredit = !1, this.userInfo = null;
        }
        onLoad() {}
        update(e) {}
        initPlatform() {
            this.setId(3), this.setName("dev"), this.setVersion("1.0.0"), this.setAppId("hdfc-h5"), 
            this.setUserInfoMgr(new we()), this.setStorage(new pe()), this.setAppId(P.appId), 
            this.setShare(new be()), this.setAdUnits(new Se()), this.setTableMgr(new ye());
            this.getTableMgr().setInfoTable("game_constant_config"), this.getTableMgr().setTablePath("");
        }
        initGame() {
            // U.getMgr().addUrl("server", "https://game.g.youwanshe.cn"), U.getMgr().addUrl("res", "https://game.g.youwanshe.cn/sdqc"), 
            // U.getMgr().setDefaultKey("server"), ae.getMgr().setAdCfg(h.video, [ "adunit-b78da02cc2e5cfe8" ]), 
            // ae.getMgr().setAdCfg(h.banner, [ "adunit-754f32ae065f2037" ]), ae.getMgr().setAdCfg(h.Interstitial, [ "adunit-1b3af36779e74ca0" ]);
        }
        otherInterface(e, ...t) {}
        checkUpdate() {
            let e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {
                console.log("小程序自动更新最新版本" + e.hasUpdate);
            }), e.onUpdateReady(function() {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm && e.applyUpdate();
                    }
                });
            }), e.onUpdateFailed(function() {});
        }
    }
    class ve {
        constructor() {
            this.gameId = 0, this.gameName = "", this._mgrs = [], this._platform = null;
        }
        static getGame() {
            return ve.bgame = ve.bgame || new ve();
        }
        static getWidth() {
            return ve.getGame().getWidth();
        }
        static getHeight() {
            return ve.getGame().getHeight();
        }
        static getGameId() {
            return ve.getGame().getGameId();
        }
        static getUserInfoMgr() {
            return ve.getGame().getPlatform().getUserInfoMgr();
        }
        static getStorage() {
            return ve.getGame().getPlatform().getStorage();
        }
        static getFeedBack() {
            return ve.getGame().getPlatform().getFeedBack();
        }
        static getAdUnits() {
            return ve.getGame().getPlatform().getAdUnits();
        }
        static getAnalytics() {
            return ve.getGame().getPlatform().getAnalytics();
        }
        static getShare() {
            return ve.getGame().getPlatform().getShare();
        }
        static getRank() {
            return ve.getGame().getPlatform().getRank();
        }
        static getTableMgr() {
            return ve.getGame().getPlatform().getTableMgr();
        }
        static getI18n() {
            return ve.getGame().getPlatform().getI18n();
        }
        init() {
            switch (P.PlatformTypr) {
              case b.wx:
              case b.qq:
              case b.tt:
                this._platform = new _e();
                break;

              case b.web:
                this._platform = new ke();
            }
            this._platform.initPlatform(), this.initGame(), this._platform.initGame(), this.initResUrl();
        }
        getSound() {
            switch (P.PlatformTypr) {
              case b.web:
                return null;

              case b.wx:
              case b.tt:
                return wx;
            }
            return wx;
        }
        initResUrl() {
            P.PlatformTypr != b.web && (Laya.MiniAdpter.nativefiles = P.localFiles, Laya.URL.basePath = U.getMgr().getUrl("res") + "/");
        }
        initGame() {
            this._addMgr(ie.getMgr()), this._addMgr(H.getMgr()), this._addMgr(ae.getMgr()), 
            this._addMgr(U.getMgr());
        }
        _addMgr(e) {
            return this._mgrs.push(e), e;
        }
        getMgr(e) {
            return this._mgrs[e];
        }
        onDestroy() {}
        getGameName() {
            return this.gameName;
        }
        getGameId() {
            return this.gameId;
        }
        getWidth() {
            return Laya.stage.width;
        }
        getHeight() {
            return Laya.stage.height;
        }
        getPlatform() {
            return this._platform;
        }
    }
    ve.bgame = null;
    class Le {
        constructor() {
            this.callback = null;
        }
        static Instance() {
            return this.instance || (this.instance = new Le()), this.instance;
        }
        onStatInit() {
            let e = wx.getLaunchOptionsSync();
            window.stat && window.stat.init(P.appkey, "", e);
        }
        onStatLogin() {
            window.stat && window.stat.login({
                openid: ""
            });
        }
        onStatCreateRole() {
            window.stat && window.stat.createRole({});
        }
        reportCustomEvent(e, t) {
            let a = {
                eventName: e,
                subEventName: t
            };
            window.stat && window.stat.reportCustomEvent(a);
        }
        getFlow(e, t) {
            window.stat && window.stat.getFlow({
                appkey: P.appkey,
                type: e
            }, e => {
                t && t.runWith(e);
            });
        }
    }
    Le.instance = null;
    class Ae {
        constructor() {
            this.dispatcher = new Laya.EventDispatcher();
        }
        static getInstance() {
            return this.instance || (this.instance = new Ae()), this.instance;
        }
        static getEventType(e) {
            return `${this.eventPrefix}${e}`;
        }
        on(e, t, a, i) {
            this.dispatcher.on(Ae.getEventType(e), a, t, i);
        }
        off(e, t, a) {
            this.dispatcher.off(Ae.getEventType(e), a, t);
        }
        offAll(e) {
            this.dispatcher.offAll(Ae.getEventType(e));
        }
        offAllTarget(e) {
            this.dispatcher.offAllCaller(e);
        }
        emit(e, t) {
            return this.dispatcher.event(Ae.getEventType(e), t);
        }
        one(e, t, a) {
            this.dispatcher.once(Ae.getEventType(e), a, t);
        }
    }
    Ae.eventPrefix = "GameEv_";
    class xe {
        constructor() {}
        static importData() {
            let e = this;
            ve.getStorage().readData("UserUseCar", P.defaultCarId, function(t) {
                e.UserUseCar = t.data;
            }.bind(this)), ve.getStorage().readData("CheckpointNum", 1, function(t) {
                e.CheckpointNum = t.data, P.PlatformTypr == b.web , Y.get_checkpointNum = e.CheckpointNum;
            }.bind(this)), ve.getStorage().readData("GoldNum", Y.defaultgold, function(t) {
                e.GoldNum = t.data;
            }.bind(this));
            let t = [ P.defaultCarId ];
            ve.getStorage().readData("ownCarArr", JSON.stringify(t), function(t) {
                e.ownCarArr = JSON.parse(t.data);
            }.bind(this));
            ve.getStorage().readData("GetCarUnlockSeveral", JSON.stringify({}), function(t) {
                e.GetCarUnlockSeveral = JSON.parse(t.data);
            }.bind(this)), ve.getStorage().registerCallback(function() {
                xe.stampData();
            }.bind(this));
        }
        static stampData() {
            let e = O.getTimestamp();
            me.saveData("OffLineTimer", e);
        }
        static readStamp() {
            return me.readData("OffLineTimer", Date.now());
        }
        static setUseCarIndex(e) {
            this.UserUseCar = e, ve.getStorage().saveData("UserUseCar", this.UserUseCar);
        }
        static setCheckpointNum() {
            this.CheckpointNum++, this.CheckpointNum >= Y.maxCheck && (this.CheckpointNum = Y.maxCheck), 
            ve.getStorage().saveData("CheckpointNum", this.CheckpointNum);
        }
        static setUserHaveCarArr(e) {
            this.ownCarArr.push(e), ve.getStorage().saveData("ownCarArr", JSON.stringify(this.ownCarArr));
        }
        static addGold(e, t = !0) {
            this.setGoldNum(this.GoldNum + e), Ae.getInstance().emit(p.updataShowGoldPower, null), 
            t && e > 0 && Ae.getInstance().emit(p.goldGetTween, null);
        }
        static setGoldNum(e) {
            this.GoldNum = e, ve.getStorage().saveData("GoldNum", this.GoldNum);
        }
        static setGetCarSeveral(e, t) {
            this.GetCarUnlockSeveral[e] = t, ve.getStorage().saveData("GetCarUnlockSeveral", JSON.stringify(this.GetCarUnlockSeveral));
        }
        static getGetCarSeveral(e) {
            return this.GetCarUnlockSeveral[e] || this.setGetCarSeveral(e, 0), this.GetCarUnlockSeveral[e];
        }
    }
    xe.UserUseCar = 1, xe.ownCarArr = [], xe.CheckpointNum = 1, xe.GoldNum = 1, xe.OffLineTimer = 1, 
    xe.GetCarUnlockSeveral = {};
    class Ie extends Laya.Script {
        constructor() {
            super(...arguments), this.createUIKey = null, this.destroyUIKey = null;
        }
        onAwake() {
            Ie.isCustomShow = !1;
        }
        onDisable() {}
        onDestroy() {}
        onUpdate() {}
        static showCustom() {
            console.log(""), P.PlatformTypr != b.web && (Ie.isCustomShow = !0, Ie.BtmCompCustom ? Ie.BtmCompCustom.show() : ae.getMgr().createCustom(0, 60, Laya.stage.width / 2 - 200, 30, 1, function(e) {
                switch (e.result) {
                  case o.succeed:
                    Ie.BtmCompCustom = e.data, Ie.isCustomShow && Ie.BtmCompCustom.show(), console.log("加载完成Custom");
                }
            }.bind(this)));
        }
        static hideCustom() {
            console.log(""), Ie.isCustomShow = !1, Ie.BtmCompCustom && Ie.BtmCompCustom.hide(), 
            Ie.BtmCompCustom2 && Ie.BtmCompCustom2.hide();
        }
    }
    Ie.BtmCompCustom = null, Ie.BtmCompCustom2 = null, Ie.isCustomShow = !1;
    class Re {
        static contrastUserHaveCarIstrue() {
            let e = O.getRandomArr(0, Y.LuckyCarArr.length - 1, Y.LuckyCarArr.length - 1);
            for (let t = 0; t < e.length; t++) {
                if (!this.userHaveCarArr(Y.LuckyCarArr[e[t]].id)) return !0;
            }
            return !1;
        }
        static userHaveCarArr(e) {
            for (let t = 0; t < xe.ownCarArr.length; t++) {
                if (xe.ownCarArr[t] + 1e3 == e) return !0;
            }
            return !1;
        }
        static initShare() {
            let e = ve.getTableMgr().getTable("game_share_config"), t = e.getRowNum(), a = [];
            for (let i = 0; i < t; i++) {
                let t = U.getMgr().getUrl(v.res) + "_" + (i + 1) + ".jpg", s = H.getMgr().addShareModel(e.getData(i), t);
                a.push(s);
            }
            H.getMgr().addSharePoint(a);
            H.getMgr().setShareMenu();
        }
        static newDot(e) {
            z.isNewPlayer && (console.log("流失统计: ", e), Le.Instance().reportCustomEvent("流失统计", e));
        }
        static loadBanner(e = !1) {
            if (b.web == P.PlatformTypr) return;
            let t = this;
            this.switchTime = Y.bannerSwitchTime, this.switchCount = Y.bannerSwitchCount, e && (this.switchCount = Y.bannerSwitchCount), 
            this.switchCount <= 0 && (this.switchCount = Y.bannerSwitchCount);
            let a = ae.getMgr().getAdCfg(h.banner).length;
            this.switchCount < 1 || a < 1 || (this._banners || (this._banners = []), this._loadBannerError ? this.makeupBanner() : (this._startIndex = this._createBannerOffset == a ? 0 : this._createBannerOffset, 
            this._endIndex = Math.min(this._startIndex + this.switchCount, a), this._createBannerOffset = this._endIndex, 
            t.createBanner01()));
        }
        static createBanner01() {
            let e = this;
            !this._loadBannerError && this._startIndex < this._endIndex ? ae.getMgr().createBanner(this._startIndex, 30, function(t) {
                switch (t.result) {
                  case o.succeed:
                    Le.Instance().reportCustomEvent("banner填充率", "广告拉取成功次数");
                    let a = t.data;
                    e._banners.push(a), e.setBannerPosX(a), console.log(`创建banner成功， adid: ${ae.getMgr().getAdCfg(h.banner)[this._startIndex]}`), 
                    this._startIndex++, e.createBanner01();
                    break;

                  default:
                    console.log(`创建banner失败， adid: ${ae.getMgr().getAdCfg(h.banner)[this._startIndex]}, 错误码: ${t.errCode}`), 
                    Le.Instance().reportCustomEvent("banner填充率", "广告拉取失败次数"), t.errCode > 1002 ? (0 != this._startIndex || e._loadBannerError || (console.log(""), 
                    Re.showBannerMistake = !1), e._loadBannerError = !0, e.makeupBanner()) : (this._startIndex++, 
                    e.createBanner01());
                }
            }.bind(this)) : this.makeupBanner();
        }
        static makeupBanner() {
            let e = this.switchCount - this._banners.length;
            for (;e > 0; ) {
                e--;
                let t = this._bannerPool.pop();
                t && this._banners.push(t);
            }
            for (let e = this._bannerPool.length - 1; e >= 0; e--) this._bannerPool[e].destory();
            this._bannerPool = [], console.log("load banners->", this._banners, ",pool->", this._bannerPool);
        }
        static showBannerAd(e = !1, t = 0) {
            if (!Laya.Browser.onMiniGame) return;
            let a = this;
            try {
                if (!this._banners || this._isBannerShowed) return;
                clearInterval(this._switchBannerTimer), this._banner = this._banners[this._banners.length - 1], 
                this._banner ? (this.setBannerPosX(this._banner), this._banner.show(), console.log("show banner->", this._banner.getAdUnitid())) : console.log("show banner-> not found"), 
                this._isBannerShowed = !0, this._switchBannerTimer = setInterval(() => {
                    a.updateBanner();
                }, 1e3 * this.switchTime);
            } catch (e) {
                console.log(e);
            }
            return this._banner;
        }
        static showBannerTopAd_time(e = 1e3, t = 0) {
            if (!Laya.Browser.onMiniGame) return;
            try {
                if (Re.banner_jiesuan) return;
                this._banner = Re.showBannerAd(!0), Laya.timer.once(e, this._banner, () => {
                    Re.updateBanner(), Re.hidetopBanner();
                });
            } catch (e) {
                console.log(e);
            }
            return this._banner;
        }
        static updateBanner() {
            if (!this._isBannerShowed || !this._banners) return;
            const e = this._banners.pop();
            e && (e.hide(), this._bannerPool.push(e), console.log("remove banner:", e.getAdUnitid())), 
            this._banner = this._banners[this._banners.length - 1], this._banner ? (this.setBannerPosX(this._banner), 
            this._banner.show(), console.log("show banner->", this._banner.getAdUnitid())) : this.loadBanner();
        }
        static setBannerPosX(e, t = !1, a = 0) {
            e && (Re.isTopBanner ? e.setPosition(new Laya.Vector2((Laya.stage.width - e.getSize().width) / 2, 0)) : t ? e.setPosition(new Laya.Vector2(a - e.getSize().width / 2, Laya.stage.height - e.getSize().height)) : e.setPosition(new Laya.Vector2((Laya.stage.width - e.getSize().width) / 2, Laya.stage.height - e.getSize().height)));
        }
        static hideBanner() {
            // clearInterval(this._switchBannerTimer), this._isBannerShowed = !1, this._banner && this._banner.hide(), 
            // Ie.hideCustom();
        }
        static hideAllBanner() {
            clearInterval(this._switchBannerTimer), this._isBannerShowed = !1;
            for (var e = 0; e < Re._banners.length; e++) Re._banners[e].hide();
        }
        static hidetopBanner() {
            clearInterval(this._switchBannerTimer), this._isBannerShowed = !1, this._banner && this._banner.hide();
        }
        static bannerMistake() {}
        static createFullScreenBannerAd(e) {
            this.hideFullScreenBanner();
            let t = wx.getSystemInfoSync(), a = t.screenWidth, i = t.screenHeight, s = e ? 2 : 1, n = 0;
            for (let e = 0; e < s; e++) {
                const t = this._banners[0];
                let r;
                t && (console.log(t), r = t.getAdUnitid()), r || (r = ae.getMgr().getAdCfg(h.banner)[e]);
                let o = this.createCustomBanner({
                    adUnitId: r,
                    style: {
                        left: 0,
                        top: i - 104,
                        width: a
                    },
                    onLoad: e => {
                        if (console.log("banner onloaded:", e), 0 == n && (n = o.style.realHeight), 0 != n && this._fullscreenBanners.length == s && this._fullscreenBanners.length == s) for (let e = 0; e < s; e++) {
                            let t = this._fullscreenBanners[e];
                            t && (t.style.top = i - (e + 1) * n);
                        }
                    },
                    onError: e => {
                        console.log("banner onerror:", e);
                    },
                    onResize: e => {}
                });
                this._fullscreenBanners.push(o);
            }
        }
        static showFullScreenBanner() {
            if (this._fullscreenBanners) for (let e = this._fullscreenBanners.length - 1; e >= 0; e--) {
                let t = this._fullscreenBanners[e];
                t && t.show();
            }
        }
        static hideFullScreenBanner() {
            if (this._fullscreenBanners) for (let e = this._fullscreenBanners.length - 1; e >= 0; e--) {
                let t = this._fullscreenBanners[e];
                t && (t.hide(), t.destroy());
            }
            this._fullscreenBanners = [];
        }
        static showBannerAd_baoxiang(e = !1, t = 0) {
            try {
                if (!this._banners) return;
                this._banner = e ? this._banners[this._banners.length - 1] : this._banners[0], this._banner ? (this.setBannerPos_baoxiang(this._banner, e, t), 
                this._banner.show(), console.log("show bannerbaoxiang->", this._banner.getAdUnitid())) : console.log("show bannerbaoxiang-> not found");
            } catch (e) {
                console.log(e);
            }
            return this._banner;
        }
        static setBannerPos_baoxiang(e, t = !1, a = 0) {
            t ? e.setPosition(new Laya.Vector2(Laya.stage.width - e.getSize().width, Laya.stage.height - e.getSize().height)) : e.setPosition(new Laya.Vector2(0, Laya.stage.height - e.getSize().height)), 
            a > 0 && Laya.timer.once(a, this, () => {
                this._banner && (this._banner.hide(), Re.banner_jiesuan = null);
            });
        }
        static showBannerAd_jiesuan(e = !1, t = 0) {
            let a = null;
            try {
                if (!this._banners) return;
                (a = this._banners[this._banners.length - 1]) ? (a.setPosition(new Laya.Vector2(Laya.stage.width - a.getSize().width, Laya.stage.height - a.getSize().height)), 
                a.show(), console.log("show banner结算->", a.getAdUnitid())) : console.log("show banner结算-> not found");
            } catch (e) {
                console.log(e);
            }
            return t > 0 && (Laya.timer.clearAll(a), Laya.timer.once(t, a, () => {
                a && (a.hide(), Re.banner_jiesuan = null);
            })), Re.banner_jiesuan = a, a;
        }
        static createCustomBanner(e) {
            let t = wx.createBannerAd({
                adUnitId: e.adUnitId,
                style: e.style
            });
            return t.onLoad(e.onLoad), t.onError(e.onError), t.onResize(e.onResize), t;
        }
        static getData(e, t, a, i) {
            let s = ve.getTableMgr().getTable(e).getData(t, a);
            return null != s ? s : i;
        }
        static isHaveBanner() {
            return !!Re.showBannerMistake && !!(Re._banners && Re._banners.length > 0);
        }
        static showExport() {
            return P.PlatformTypr == b.wx;
        }
    }
    Re.switchTime = 4, Re.switchCount = 5, Re._banners = [], Re._bannerPool = [], Re._loadBannerError = !1, 
    Re._createBannerOffset = 0, Re._startIndex = 0, Re._endIndex = 0, Re._switchBannerTimer = -1, 
    Re._banner = null, Re._isBannerShowed = !1, Re.showBannerMistake = !0, Re._fullscreenBanners = null, 
    Re.isTopBanner = !1, Re.banner_jiesuan = null;
    class Me extends Laya.Script {
        constructor(e = null, t = null, a, i = null) {
            super(), this.sp = null, this.fnMouseDown = null, this.fnMouseUp = null, this.fnMouseOut = null, 
            this.initScale = 1, this.fnMouseDown = e, this.fnMouseUp = t, this.fnMouseOut = i, 
            this._palySoundType = a;
        }
        onAwake() {
            let e = this.owner;
            this.sp = e, e.on(Laya.Event.MOUSE_DOWN, null, Me.onTouch, [ this ]), e.on(Laya.Event.MOUSE_UP, null, Me.onTouch, [ this ]), 
            e.on(Laya.Event.MOUSE_OUT, null, Me.onTouch, [ this ]), this.initScale = this.sp.scaleX;
        }
        onEnable() {}
        static onTouch(e, t) {
            if (!t || !e) return;
            let a = e;
            switch (t.stopPropagation(), t.type) {
              case Laya.Event.MOUSE_DOWN:
                E.playEffect(a._palySoundType), a.sp.scale(.9 * a.initScale, .9 * a.initScale), 
                a.fnMouseDown && a.fnMouseDown();
                break;

              case Laya.Event.MOUSE_UP:
                a.sp.scale(a.initScale, a.initScale), a.fnMouseUp && a.fnMouseUp();
                break;

              case Laya.Event.MOUSE_OUT:
                a.sp.scale(a.initScale, a.initScale), a.fnMouseOut && a.fnMouseOut();
            }
        }
    }
    class De {
        static checkPointInRect(e, t) {
            return e.x > t.x && e.x < t.x + t.width && e.z > t.z && e.z < t.z + t.height;
        }
        static againstLerp(e, t, a) {
            return (a - e) / (t - e);
        }
        static lerp(e, t, a) {
            return a <= 0 ? e : a >= 1 ? t : a * t + (1 - a) * e;
        }
        static changeSpeed(e) {
            let t = this.againstLerp(Y.reality_initialSpeed, Y.initialSpeedmax, e);
            return this.lerp(Y.minspeed, Y.maxspeed, t);
        }
        static newChangeSpeed(e) {
            return e / Y.displayspeed;
        }
        static limitLerp(e, t, a, i = -1, s = -1) {
            if (a <= 0) return e;
            if (a >= 1) return t;
            var n = a * t + (1 - a) * e;
            return i >= 0 ? Math.abs(n - e) < i && (n < e ? (n = e - i) < t && (n = t) : n > e && (n = e + i) > t && (n = t)) : s >= 0 && Math.abs(n - e) > s && (n < e ? (n = e - s) < t && (n = t) : n > e && (n = e + s) > t && (n = t)), 
            n;
        }
        static limitNumber(e, t, a) {
            return e = (e = e > t ? e : t) < a ? e : a;
        }
        static pointDistanceSquare(e, t) {
            return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y) + (e.z - t.z) * (e.z - t.z));
        }
        static pointDistance(e, t) {
            return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y));
        }
        static randNum(e, t) {
            return parseInt("" + (Math.random() * (t - e) + e), 10);
        }
        static randomsort(e, t) {
            return Math.random() > .5 ? -1 : 1;
        }
        static getTanAngle(e, t) {
            var a = Math.atan(Math.abs(e) / Math.abs(t)) / .01745;
            return t >= 0 && e <= 0 ? a : t <= 0 && e <= 0 ? 180 - a : t <= 0 && e >= 0 ? 180 + a : t >= 0 && e >= 0 ? 360 - a : void 0;
        }
    }
    class Te extends Laya.Script {
        constructor() {
            super(), this.init = !1, this.videoType = 1, this.selectCarId = 0, this.carData = {};
        }
        onAwake() {
            this.homeScene = this.owner, this.selectCarId = xe.UserUseCar, this.homeScene.box_carport_panel.visible = !1, 
            this.homeScene.btn_carport_close.addComponentIntance(new Me(null, () => {
                this.onClose();
            }, m.GuanBi)), this.homeScene.btn_gold_unlock.addComponentIntance(new Me(null, () => {
                this.goldUnlockCar();
            }, m.TongYong)), this.homeScene.btn_video_unlock.addComponentIntance(new Me(null, () => {
                this.videoGoldGetCar();
            }, m.TongYong)), this.homeScene.btn_share_unlock.addComponentIntance(new Me(null, () => {
                this.ShareGoldGetCar();
            }, m.TongYong)), Ae.getInstance().on(p.share_carport, this.shareWin, this);
        }
        show() {
            this.homeScene.lab_checkpoint.text = "Garage", this.homeScene.box_carport_panel.visible = !0, 
            this.homeScene.box_home_panel.visible = !1, this.homeScene.btn_gold_unlock.visible = !1, 
            this.homeScene.btn_video_unlock.visible = !1, this.homeScene.btn_share_unlock.visible = !1, 
            this.init || (this.homeScene.list_carport.selectEnable = !0, this.homeScene.list_carport.hScrollBarSkin = "", 
            this.homeScene.list_carport.array = ve.getTableMgr().getTable("game_mycarunlock_config").getRowKeys(), 
            this.homeScene.list_carport.itemRender = W.item.UnlockItemUI, this.homeScene.list_carport.renderHandler = new Laya.Handler(this, this.updateShowCarportCarImg), 
            this.homeScene.list_carport.selectHandler = new Laya.Handler(this, this.selectCar), 
            this.homeScene.list_carport.scrollBar.value = 200 * (this.homeScene.list_carport.array.indexOf(xe.UserUseCar + "") - 1)), 
             Re.hidetopBanner();
        }
        updateShowCarportCarImg(e, t) {
            let a = Number(e.dataSource);
            e.img_icon.skin = "car/" + Te.carData(a).carid + ".png";
            let i = this.isHaveCar(a);
            e.img_unilok1.visible = !0, e.img_unilok2.visible = !i, a == this.selectCarId ? (e.img_unilok1.skin = `${P.uiDir}/xuanzhong.png`, 
            e.img_use.visible = a == xe.UserUseCar, e.img_icon.scaleX = 1.3, e.img_icon.scaleY = 1.3, 
            e.img_use.zOrder = 6, e.img_icon.zOrder = 5, this.homeScene.carAttrList.initAttr(this.selectCarId)) : (e.img_icon.zOrder = 0, 
            e.img_use.zOrder = 0, e.img_unilok1.zOrder = 1, e.img_unilok2.zOrder = 1, e.img_icon.scaleX = 1, 
            e.img_icon.scaleY = 1, e.img_unilok1.visible = !i, e.img_use.visible = a == xe.UserUseCar, 
            e.img_unilok1.skin = `${P.uiDir}/cheku_dikuang_mask.png`);
        }
        selectCar() {
            this.selectCarId = Number(this.homeScene.list_carport.selectedItem), this.carData = ve.getTableMgr().getTable("game_mycarunlock_config").getRawData()["" + this.selectCarId], 
            this.isHaveCar(this.selectCarId) ? (xe.UserUseCar = this.selectCarId, xe.setUseCarIndex(this.selectCarId), 
            this.homeScene.btn_gold_unlock.visible = !1, this.homeScene.btn_video_unlock.visible = !1, 
            this.homeScene.btn_share_unlock.visible = !1, $.showToast(Z.ChangeMoto), Te.initCarData(xe.UserUseCar)) : this.showUnlockData(), 
            E.playEffect(m.TongYong), this.homeScene.carAttrList.initAttr(this.selectCarId), 
            this.homeScene.loadCar(this.selectCarId), this.homeScene.list_carport.refresh();
        }
        showUnlockData() {
            this.homeScene.btn_gold_unlock.visible = 1 == this.carData.unlocktype;
            let e = O.getRandom(100), t = e <= z.garagevideo && z.garagevideo > 0;
            this.homeScene.btn_video_unlock.visible = 2 == this.carData.unlocktype && t, this.homeScene.btn_share_unlock.visible = 2 == this.carData.unlocktype && !t, 
            console.log("", e, z.garagevideo), 1 == this.carData.unlocktype && (this.homeScene.lab_unlock_gold_num.text = this.carData.probability), 
            2 == this.carData.unlocktype && (this.homeScene.lab_unlock_video_num.text = xe.getGetCarSeveral(this.carData.id) + " / " + this.carData.probability, 
            this.homeScene.lab_unlock_share_num.text = xe.getGetCarSeveral(this.carData.id) + " / " + this.carData.probability);
        }
        isHaveCar(e) {
            return -1 != xe.ownCarArr.indexOf(e);
        }
        goldUnlockCar() {
            xe.GoldNum >= this.carData.probability ? (xe.addGold(-this.carData.probability), 
            this.goldGetCar()) : $.showToast(Z.GoldNotEg);
        }
        goldGetCar() {
            E.playEffect(m.JieSuoXinChe), xe.setUserHaveCarArr(this.carData.id), xe.setUseCarIndex(this.carData.id), 
            this.onClose(), $.showToast(Z.ChangeLuckyMoto), Te.initCarData(xe.UserUseCar);
        }
        videoGoldGetCar() {
            this.videoType = 1, this.onVideo();
        }
        onVideo() {
            let e = this;
            platform.getInstance().showReward(
                ()=>{
                    e.videoUnlockCar();
                })
               
           
        }
        ShareGoldGetCar() {
            ae.getMgr().share({
                shareType: k.carport
            });
        }
        shareWin() {
            (Y.showTimer - Y.hideTimer) / 1e3 >= Y.share ? 1 == this.videoType ? this.videoUnlockCar() : this.goldGetCar() : (Y.shareType = k.not, 
            $.showToast(Z.ShareFailTip));
        }
        videoUnlockCar() {
            Y.shareType = k.not;
            let e = xe.getGetCarSeveral(this.carData.id);
            e + 1 == this.carData.probability ? this.goldGetCar() : (xe.setGetCarSeveral(this.carData.id, e + 1), 
            this.showUnlockData());
        }
        hide() {
            this.homeScene.box_carport_panel.visible = !1, this.homeScene.box_home_panel.visible = !0;
        }
        onClose() {
            this.hide(), Re.showBannerAd(), this.selectCarId != xe.UserUseCar && this.homeScene.loadCar(xe.UserUseCar), 
            this.homeScene.lab_checkpoint.text = "Level " + xe.CheckpointNum + "";
        }
        static luckyCarId() {
            let e = Y.LuckyCarArr.map(e => e.id).filter(e => -1 == xe.ownCarArr.indexOf(e));
            return e && e.length > 0 ? O.randomArray(e) : 0;
        }
        static NotunlockGunId() {
            let e = Y.AllCarArr.map(e => e.id).filter(e => -1 == xe.ownCarArr.indexOf(e));
            return e && e.length > 0 ? O.randomArray(e) : 0;
        }
        static NotunlockGunData() {
            let e = Y.AllCarArr.map(e => e.id).filter(e => -1 == xe.ownCarArr.indexOf(e));
            return console.log("", e), console.log("", xe.ownCarArr), e;
        }
        static carData(e) {
            return ve.getTableMgr().getTable("game_mycarunlock_config").getRawData()[e];
        }
        static getCarRes(e) {
            return `car/car_${e - 1e3}.png`;
        }
        static initCarData(e) {
            let t = this.carData(e);
            Y.maxspeed = De.newChangeSpeed(t.speed), console.log("===", Y.maxspeed), 
            Y.nitroAddSpeed = De.newChangeSpeed(t.addSpeed);
        }
        onDisable() {
            Ae.getInstance().off(p.share_carport, this.shareWin, this);
        }
    }
    class Be extends Laya.Script {
        constructor() {
            super();
        }
        initAttr(t) {
            let a = Te.carData(t);
            this.carAttr1.getComponent(e).initAttr(a.gravity / Y.carMaxGravity), this.carAttr2.getComponent(e).initAttr(a.speed / Y.carMaxSpeed), 
            this.carAttr3.getComponent(e).initAttr(a.operation / Y.carMaxOperation), this.carAttr4.getComponent(e).initAttr(a.addSpeed / Y.carMaxNitroAddSpeed);
        }
    }
    class Ue extends Laya.Script {
        constructor() {
            super();
        }
        updateRank(e, t, a) {
            this.rank = this.owner.getChildByName("lab_rank_num"), this.name = this.owner.getChildByName("lab_name"), 
            this.icon = this.name.getChildByName("img_icon"), this.flag = this.owner.getChildByName("img_flag"), 
            this.bg = this.owner.getChildByName("img_rank_bg"), this.icon.visible = 1 == e, 
            this.rank.fontSize = e <= 3 ? 53 : 35, this.rank.text = e + "", this.rank.color = "#ffffff", 
            this.name.color = "#ffffff", this.name.fontSize = 30, this.bg.skin = a ? "gameui/diban_ziji.png" : "gameui/diban.png", 
            this.name.text = t, this.flag.skin = e <= 3 ? "gameui/jinji.png" : "gameui/taotai.png";
        }
    }
    class Pe extends Laya.Script {
        constructor() {
            super(), this.time = 600, this.index = -1;
        }
        roll() {
            this.imgPoint.rotation = 0, this.rollNum = 0, this.index = -1;
            let e = [], t = [], a = Y.roll.split(",");
            for (let i = 0; i < a.length; i++) {
                let s = Number(a[i].split(":")[0]), n = Number(a[i].split(":")[1]);
                e.push(s), t.push(n);
            }
            for (let t = 1; t <= e.length; t++) this[`labBetNum${t}`] && (this[`labBetNum${t}`].text = "X" + e[t - 1] + "");
            console.log(":", e, ", :", t);
            let i = 0, s = [];
            for (let e = 0; e < t.length; e++) i += t[e], s.push(i);
            let n = O.randomInSection(1, i);
            s.push(n), s.sort((e, t) => e - t), this.owner.manyNum = e[s.indexOf(n)], this.index = s.indexOf(n), 
            console.log(s, n), console.log(",: " + n + ", : ", this.owner.manyNum), 
            this.rollNum = O.randomInSection(4, 6);
            let r = this;
            Laya.timer.once(1e3, this, () => {
                Laya.Tween.to(this.imgPoint, {
                    rotation: 90
                }, this.time / 2, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                    r.fuRotation();
                }));
            });
        }
        rotationItem() {
            let e = this, t = 0, a = 0;
            0 == this.index ? (t = -72, a = 2 * this.time / 180 * (this.imgPoint.rotation > 0 ? 162 : 18)) : 1 == this.index ? (t = -36, 
            a = 2 * this.time / 180 * (this.imgPoint.rotation > 0 ? 126 : 64)) : 2 == this.index ? (t = 0, 
            a = 2 * this.time / 180 * (this.imgPoint.rotation, 90)) : 3 == this.index ? (t = 36, 
            a = 2 * this.time / 180 * (this.imgPoint.rotation > 0 ? 64 : 126)) : 4 == this.index && (t = 72, 
            a = 2 * this.time / 180 * (this.imgPoint.rotation > 0 ? 18 : 162)), Laya.Tween.to(this.imgPoint, {
                rotation: t
            }, a, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                e.owner.parent.award();
            }));
        }
        zhengRotation() {
            let e = this;
            this.rollNum > 0 ? Laya.Tween.to(this.imgPoint, {
                rotation: 90
            }, this.time, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this.rollNum--, e.fuRotation();
            })) : this.rotationItem();
        }
        fuRotation() {
            let e = this;
            this.rollNum > 0 ? Laya.Tween.to(this.imgPoint, {
                rotation: -90
            }, this.time, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this.rollNum--, e.zhengRotation();
            })) : this.rotationItem();
        }
    }
    class Ne {
        static init() {}
        static setAIRouteObj(e, t) {
            Ne.AIRouteObj = e, Ne.AIRouteObj.active = !1, Ne.Dic_AIRouteObj || (Ne.Dic_AIRouteObj = new q()), 
            Ne.Dic_AIRouteObj.set(t, e);
        }
        static getAIRouteObj() {
            return Ne.AIRouteObj;
        }
        static getAIRouteid_pos(e, t) {
            return Ne.AIRouteObj = Ne.Dic_AIRouteObj.get(t), Ne.AIRouteObj && Ne.AIRouteObj.getChildAt(e) ? Ne.AIRouteObj.getChildAt(e).transform.position : null;
        }
        static getAIRouteid_rotate(e) {
            return Ne.AIRouteObj && Ne.AIRouteObj.getChildAt(e) ? parseInt(Ne.AIRouteObj.getChildAt(e).name.split("_")[1]) : null;
        }
    }
    Ne.AIRouteObj = null, Ne.Dic_AIRouteObj = null;
    class Ee extends Laya.Script3D {
        constructor() {
            super(), this.AllCustoms = null, this.destination = null, this.obstacles = null, 
            this.goldArr = null, this.nitroArr = null, this.addCollionObstacles = [], this.finish = null, 
            this.effRibbon = null;
        }
        static create(e) {
            var t = new Ee();
            if (t.AllCustoms = e, t.destination = t.AllCustoms.getChildByName("finish").getChildByName("Cube"), 
            t.finish = t.AllCustoms.getChildByName("finish"), t.effRibbon = t.finish.getChildByName("ribbon"), 
            t.effRibbon && (t.effRibbon.active = !1), t.obstacles = t.AllCustoms.getChildByName("obstacles"), 
            t.goldArr = t.AllCustoms.getChildByName("coin"), t.nitroArr = t.AllCustoms.getChildByName("Props"), 
            t.nitroArr.active = !1, Ne.setAIRouteObj(t.AllCustoms.getChildByName("line5"), "5"), 
            Ne.setAIRouteObj(t.AllCustoms.getChildByName("line4"), "4"), Ne.setAIRouteObj(t.AllCustoms.getChildByName("line3"), "3"), 
            Ne.setAIRouteObj(t.AllCustoms.getChildByName("line2"), "2"), Ne.setAIRouteObj(t.AllCustoms.getChildByName("line1"), "1"), 
            t.obstacles) for (let e = 0; e < t.obstacles.numChildren; e++) {
                const i = t.obstacles.getChildAt(e);
                (a = i.getComponent(Laya.Animator)).speed = 0;
                let s = this.returnDelay(i.name, 2);
                Laya.timer.once(s, this, e => {
                    e.speed = 1;
                }, [ a ]);
                for (let e = 0; e < i.numChildren; e++) {
                    const a = i.getChildAt(e);
                    if (a.getComponent(Laya.PhysicsCollider)) t.addCollionObstacles.push(a); else if (0 != a.numChildren) for (let e = 0; e < a.numChildren; e++) {
                        const i = a.getChildAt(e);
                        i.getComponent(Laya.PhysicsCollider) && t.addCollionObstacles.push(i);
                    }
                }
            }
            if (t.goldArr) {
                for (let e = 0; e < t.goldArr.numChildren; e++) {
                    var a;
                    (a = t.goldArr.getChildAt(e).getComponent(Laya.Animator)) && (a.speed = 0, Laya.timer.once(O.randomInSection(0, 2e3), this, e => {
                        e.speed = 1;
                    }, [ a ]));
                }
                Y.get_goldMax = t.goldArr.numChildren;
            }
            return t;
        }
        static returnDelay(e, t) {
            let a = e.split("_");
            return parseInt(a[t]);
        }
        static returnIndex(e) {
            for (let t = 1; t <= 20; t++) if (11 == e.length) {
                if (0 == e.indexOf("obstacles_" + t)) return t;
            } else if (0 == e.indexOf("obstacles_" + t)) return t;
            return 0;
        }
        playAnimator() {
            if (this.obstacles) for (let e = 0; e < this.obstacles.numChildren; e++) {
                this.obstacles.getChildAt(e).getComponent(Laya.Animator).speed = 1;
            }
        }
        stopAnimator() {
            if (this.obstacles) for (let t = 0; t < this.obstacles.numChildren; t++) {
                var e = this.obstacles.getChildAt(t).getComponent(Laya.Animator);
                e && (e.speed = 0);
            }
        }
        setFinishPos(e, t) {
            this.finish.transform.position = e, this.finish.transform.rotation = t;
        }
        playeffRibbon() {
            this.effRibbon && (this.effRibbon.active = !1, this.effRibbon.active = !0, console.log(""));
        }
        static obstacles1(e) {}
        static obstacles2(e) {
            var t = e.getComponent(Laya.Animator);
            t.play("obstacles_2"), Laya.timer.once(2e3, this, function() {
                t.speed = 0, Laya.timer.once(2e3, this, function() {
                    t.speed = 1;
                });
            });
        }
        removeSelf() {
            this.AllCustoms && this.AllCustoms.removeSelf();
        }
    }
    class Oe {
        constructor() {
            this.isUser = !1;
        }
    }
    class Ge {}
    Ge.RunSpeed = .05, Ge.minspeed = .05, Ge.maxspeed = .5, Ge.userMotoSpeed = Ge.minspeed, 
    Ge.acceleration = .02, Ge.brakingspeed = .01, Ge.motoExpedite = .05, Ge.moveSpeed = .05, 
    Ge.motoExpediteAddSpeed = 2 * Ge.acceleration, Ge.autocidespeed = .006, Ge.nitrogenrecovery = 3e4, 
    Ge.slideMinsSpeed = Ge.acceleration / 2, Ge.rotateHomeCar = .1, Ge.carMove = 5, 
    Ge.carRotateY = 35, Ge.carSlantX = 35, Ge.AImoveSpeed = .05, Ge.twostargold = 1.5, 
    Ge.threestargold = 2, Ge.reality_initialSpeed = 20, Ge.initialSpeedmax = 600, Ge.defaultpower = 5, 
    Ge.defaultgold = 0, Ge.powerrecoverynum = 1, Ge.powerrecoverytime = 1200, Ge.todayfreepowermax = 5, 
    Ge.freepowernum = 2, Ge.todayfreegoldmax = 5, Ge.freegoldnum = 1.2, Ge.powermax = 10, 
    Ge.nitrogenuse = 3, Ge.share = 4, Ge.eliminationinterval = 1e4, Ge.eliminationkeep = 2e4, 
    Ge.nitrogenincrease = "25;40", Ge.timetrial = "", Ge.knockout = "", Ge.notraffic = "", 
    Ge.sidewipewide = .3, Ge.kefuReward = 2, Ge.goldbagrefresh = "10;30", Ge.todaygoldbagmax = 5, 
    Ge.goldbagcoefficient = "3;4;5", Ge.levelvideo = 80, Ge.readonly_speed = Ge.reality_initialSpeed, 
    Ge.istrueStarGame = !1, Ge.trackFixationLong = 254, Ge.trackAddLongX = 0, Ge.farthestCarDis = 300, 
    Ge.oneTrackDis = 10, Ge.twoTrackDis = 200, Ge.threeTrackDis = 150, Ge.fourTrackDis = 20, 
    Ge.oneNitrogenDis = 100, Ge.twoNitrogenDis = 200, Ge.threeNitrogenDis = 50, Ge.fourNitrogenDis = 150, 
    Ge.VictoryAndDefeated = !0, Ge.isUseDanQi = !1, Ge.isNewUSer = !0, Ge.accidentNum = 0, 
    Ge.isShowGame = !0, Ge.hideTimer = 0, Ge.showTimer = 0, Ge.chaseRanking = 0, Ge.RivalCarNum = 0, 
    Ge.isCollserBarrier = !1, Ge.customs_Max = 1, Ge.customs_select = Ge.customs_Max, 
    Ge.chapterNum = 0, Ge.cumtosNum = 1, Ge.roadType = 1, Ge.skyBoxType = 1, Ge.destinationDis = 1500, 
    Ge.updataCarDestinationDis = Ge.destinationDis, Ge.onestartype = 1, Ge.onestarnum = 60, 
    Ge.twostartype = 1, Ge.twostarnum = 50, Ge.threestartype = 1, Ge.threestarnum = 30, 
    Ge.upgold = 1e3, Ge.barrierCarType = 1, Ge.checkpointtype = 1, Ge.endlucky = 80, 
    Ge.startlucky = 80, Ge.shareType = k.not, Ge.isKefuReward = !1, Ge.isGamecentre = !1, 
    Ge.isShowBanner = !0, Ge.str_road = "", Ge.str_gameCar = "", Ge.str_skyBox = "";
    class je extends Laya.Script3D {
        constructor() {
            super(...arguments), this.railObj = null, this.trackType = 1, this.rivalCarSpeed = 0, 
            this.now_routeIndex = 0, this.timecount = 1;
        }
        static create() {
            var e = new je();
            return je.I = e, e.railObj || (e.railObj = new Laya.MeshSprite3D()), e.lookatObj || (e.lookatObj = new Laya.Sprite3D()), 
            P.gameScene3D.addChild(e.railObj), e;
        }
        init(e, t, a, i) {
            let s = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "");
            this.railObj.transform.position = new Laya.Vector3(s.x, 0, s.z), this.railObj.transform.position = e.transform.position, 
            this.lookatObj.transform.position = this.railObj.transform.position, this.trackType = t, 
            this.rivalCarSpeed = a, this.endtime = 1e3 * i, this.now_routeIndex = 0, je.gameState = 1, 
            this.starttime = O.getTimestamp(), this.openGameNavigate();
        }
        openGameNavigate() {
            0 != je.gameState && (console.log(""), Laya.timer.once(this.endtime, this, this.setFinishPos));
        }
        stopGameNavigate() {
            0 != je.gameState && (console.log(""), this.endtime -= O.getTimestamp() - this.starttime, 
            Laya.timer.clear(this, this.setFinishPos));
        }
        updata() {
            0 != je.gameState && (this.railObj.transform.translate(new Laya.Vector3(0, 0, -this.rivalCarSpeed)), 
            this.DetectionRoute());
        }
        setFinishPos() {
            Laya.timer.clearAll(this), je.gameState = 0, ze.end_routeIndex = this.now_routeIndex + 1, 
            P.gameControll.setFinishPos(this.railObj.transform.position, this.railObj.transform.rotation), 
            console.log("", this.now_routeIndex);
        }
        DetectionRoute() {
            this.lookatObj.transform.position = this.railObj.transform.position;
            let e = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + ""), t = this.railObj.transform.position;
            e ? (Math.abs(e.z - t.z) + Math.abs(e.x - t.x) < 2 && (this.now_routeIndex++, e = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "")), 
            e ? (e = new Laya.Vector3(e.x, this.railObj.transform.position.y, e.z), this.lookAtTarget(e, 1, this.rivalCarSpeed)) : this.setFinishPos()) : this.setFinishPos();
        }
        lookAtTarget(e, t, a) {
            if (e) {
                this.lookatObj.transform.lookAt(e, new Laya.Vector3(0, 1, 0));
                let t = 2 * Laya.Vector3.distance(this.railObj.transform.position, e) * Math.PI / 6 / 2, i = this.lookatObj.transform.localRotationEulerY - this.railObj.transform.localRotationEulerY;
                i > 180 && (i -= 360), i < -180 && (i += 360), i = i / t * a, this.railObj.transform.localRotationEulerY += i;
            }
        }
        removeSelf() {
            this.railObj && (this.railObj.removeSelf(), this.railObj = null), Laya.timer.clearAll(this);
        }
    }
    var Fe, Ve;
    je.I = null, je.gameState = 1, function(e) {
        e.Not = "Not", e.Awake = "Awake", e.Pause = "Pause", e.Move = "Move", e.Collideing = "Collideing", 
        e.BackCar = "BackCar";
    }(Fe || (Fe = {}));
    class ze extends Laya.Script3D {
        constructor() {
            super(...arguments), this.rivalCarAll = null, this.railObj = null, this.rivalCar = null, 
            this.trackType = 1, this.rivalCarSpeed = 0, this.rivalCollision = null, this.nitrogen = null, 
            this.effBackLight = null, this.effSmoke = null, this.effSpark_right = null, this.effSpark_left = null, 
            this.effSpark_front = null, this.effSpark_back = null, this.carbody = null, this.rivalCarFL = null, 
            this.rivalCarFR = null, this.rivalCarRL = null, this.rivalCarRR = null, this.isOutStop = !1, 
            this.rivalSpeed = 0, this.zhuangJirivalSpeed = 0, this.rivalCarAddSpeed = 0, this.now_routeIndex = 0, 
            this.GameState = Fe.Not, this.BackCarCount = 5, this.MovePos = 0, this.MoveState = 0, 
            this.terminus = -1, this.arr_BackCarline = null, this.rivalPositionX = 0, this.wheelRotateSpeed = 2;
        }
        static create(e, t, a) {
            var i = e.addComponent(ze);
            return i.rivalCarAll = e, i.railObj || (i.railObj = new Laya.MeshSprite3D()), i.railObj.transform.position = i.rivalCarAll.transform.position, 
            P.gameScene3D.addChild(i.railObj), i.railObj.addChild(i.rivalCarAll), i.trackType = t, 
            i.rivalCarSpeed = a, i.camera = i.rivalCarAll.getChildAt(1), i.camera.active = !1, 
            i.rivalCar = i.rivalCarAll.getChildAt(0), i.rivalCollision = i.rivalCar.getChildAt(0), 
            i.carbody = i.rivalCollision.getChildAt(0), i.rivalCarFL = i.rivalCollision.getChildByName("wheel_1"), 
            i.rivalCarFR = i.rivalCollision.getChildByName("wheel_2"), i.rivalCarRL = i.rivalCollision.getChildByName("wheel_4"), 
            i.rivalCarRR = i.rivalCollision.getChildByName("wheel_3"), i.nitrogen = i.rivalCarAll.getChildByName("nitrogen"), 
            i.nitrogen.active = !1, i.effBackLight = i.rivalCarAll.getChildByName("car_light"), 
            i.effBackLight && (i.effBackLight.active = !1), i.effSmoke = i.rivalCarAll.getChildByName("car_smoke"), 
            i.effSmoke && (i.effSmoke.active = !1), i.effSpark_right = i.rivalCarAll.getChildByName("right_spark"), 
            i.effSpark_right && (i.effSpark_right.active = !1), i.effSpark_left = i.rivalCarAll.getChildByName("left_spark"), 
            i.effSpark_left && (i.effSpark_left.active = !1), i.effSpark_front = i.rivalCarAll.getChildByName("front_spark"), 
            i.effSpark_front && (i.effSpark_front.active = !1), i.effSpark_back = i.rivalCarAll.getChildByName("back_spark"), 
            i.effSpark_back && (i.effSpark_back.active = !1), i.rivalCarAll.transform.localScaleX = .8, 
            i.rivalCarAll.transform.localScaleZ = .8, i.rivalCarAll.transform.localScaleY = .8, 
            i.now_routeIndex = 0, i.init(), i.rankVo = new Oe(), i;
        }
        init() {
            this.canUpdate = true;
            let e = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "");
            this.railObj.transform.position = new Laya.Vector3(e.x, this.rivalCarAll.transform.position.y, e.z + O.randomInSection(1, 4) - 2), 
            this.rivalCarAll.transform.localPositionX += 0, this.rivalSpeed = this.rivalCarSpeed, 
            this.zhuangJirivalSpeed = this.rivalSpeed, this.rivalCarAddSpeed = .5 * -this.rivalSpeed, 
            this.isOutStop = !1, this.lookatObj || (this.lookatObj = new Laya.Sprite3D()), this.lookatObj.transform.position = this.railObj.transform.position, 
            this.arr_BackCarline = [ 1, 2, 3, 4 ], this.MoveState = 0, this.terminus = -1, this.GameState = Fe.Awake;
        }
        updata() {
           
            if (!this.isTerminus()) {
                switch (this.GameState) {
                  case Fe.Awake:
                    if(!this.canUpdate){
                        return;
                    }
                    if (this.isOutStop ? this.rivalCarAddSpeed > 0 ? this.rivalCarAddSpeed -= Y.acceleration : this.rivalCarAddSpeed = 0 : this.rivalCarAddSpeed >= this.rivalSpeed ? this.rivalCarAddSpeed = this.rivalSpeed : this.rivalCarAddSpeed += Y.acceleration, 
                    this.rivalCarAddSpeed < 0) return;
                    this.railObj.transform.translate(new Laya.Vector3(0, 0, -this.rivalCarAddSpeed)), 
                    this.rankVo.distance += this.rivalCarAddSpeed, this.DetectionRoute(this.rivalCarAddSpeed), 
                    this.rivalCarFL.transform.rotate(new Laya.Vector3(-this.rivalCarSpeed * this.wheelRotateSpeed, 0, 0)), 
                    this.rivalCarFR.transform.rotate(new Laya.Vector3(-this.rivalCarSpeed * this.wheelRotateSpeed, 0, 0)), 
                    this.rivalCarRL.transform.rotate(new Laya.Vector3(-this.rivalCarSpeed * this.wheelRotateSpeed, 0, 0)), 
                    this.rivalCarRR.transform.rotate(new Laya.Vector3(-this.rivalCarSpeed * this.wheelRotateSpeed, 0, 0)), 
                    0 == je.gameState && this.now_routeIndex > ze.end_routeIndex && this.setTerminus();
                    break;

                  case Fe.BackCar:
                }
                this.MoveFun();
            }
        }
        zhuangJiMove() {
            
            if(!P.gameControll.gameRes_UserCar.userCar){
                return;

            }

            console.log("jinlai")

                this.rivalSpeed = 1.3 * this.zhuangJirivalSpeed, this.rivalCarAddSpeed = this.rivalSpeed, 
                this.railObj.transform.translate(new Laya.Vector3(0, 0, -this.rivalCarAddSpeed)), 
                this.rankVo.distance += this.rivalCarAddSpeed, this.DetectionRoute(this.rivalCarAddSpeed), 
                this.canUpdate = false;
                Laya.timer.once(4000, this, () => {
                    this.rivalSpeed = this.zhuangJirivalSpeed;
                    this.canUpdate = true;
                });

            
          
        }
        change_lanes() {
             this.change_Target(), Laya.timer.once(3e3, this, this.change_lanes);
 
        }
        DetectionRoute(e) {
            this.lookatObj.transform.position = this.railObj.transform.position;
            let t = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + ""), a = this.railObj.transform.position;
            t ? (Math.abs(t.z - a.z) + Math.abs(t.x - a.x) < 2 && (this.now_routeIndex++, t = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "")), 
            t ? (t = new Laya.Vector3(t.x, this.railObj.transform.position.y, t.z), this.lookAtTarget(t, 1, e)) : this.setTerminus()) : this.setTerminus();
            
        }
        lookAtTarget(e, t, a) {
            if (e) {
                this.lookatObj.transform.lookAt(e, new Laya.Vector3(0, 1, 0));
                let t = 2 * Laya.Vector3.distance(this.railObj.transform.position, e) * Math.PI / 6 / 2, 
                i = this.lookatObj.transform.localRotationEulerY - this.railObj.transform.localRotationEulerY;
                i > 180 && (i -= 360), i < -180 && (i += 360), i = i / t * a, 
                this.railObj.transform.localRotationEulerY += i;
            }
        }
        change_Target() {
            let e = O.randomInSection(1, 7) - 4;
            this.MovePos = this.rivalCarAll.transform.localPositionX + e, this.MovePos < -3 && (this.MovePos = -3), 
            this.MovePos > 3 && (this.MovePos = 3), this.rivalCarAll.transform.localPositionX < this.MovePos ? this.MoveState = 1 : this.MoveState = -1;
            console.log("change")
        }
        MoveFun() {
            0 != this.MoveState && (1 == this.MoveState && this.rivalCarAll.transform.localPositionX > this.MovePos || -1 == this.MoveState && this.rivalCarAll.transform.localPositionX < this.MovePos ? this.MoveState = 0 : this.rivalCarAll.transform.localPositionX += this.MoveState * Ge.AImoveSpeed * this.rivalCarAddSpeed);
        }
        Collision_car(e) {
            let t = this.rivalCarAll.transform.localPositionX - e.transform.localPositionX, a = this.rivalCarAll.transform.localPositionZ - e.transform.localPositionZ, i = 1;
            i = a > 0 ? 6 : Math.abs(t) < .3 || Math.abs(a) > 1.9 ? a > 0 ? 6 : 5 : t > 0 && a > 0 ? 4 : t > 0 && a < 0 ? 2 : t < 0 && a < 0 ? 1 : 3, 
            this.TwistFun(i);
        }
        TwistFun(e) {
            console.log("type==", e);
            switch (e) {
              case 1:
              case 3:
                this.trackType > 1 && this.trackType--;
                break;

              case 2:
              case 4:
                this.trackType < 4 && this.trackType++;
                break;

              case 5:
                this.rivalCarAll.transform.translate(new Laya.Vector3(0, 0, -this.rivalSpeed));
                break;

              case 6:
                this.Collision_barrier(2);
            }
            this.change_Target(), Laya.timer.clear(this, this.change_lanes), Laya.timer.once(3e3, this, this.change_lanes);
        }
        Collision_barrier(e = 5) {
            this.GameState == Fe.Awake && (this.GameState = Fe.Collideing, Laya.timer.clear(this, this.change_lanes), 
            this.rivalCarAll.transform.translate(new Laya.Vector3(0, 0, .5)), this.BackCarCount = e, 
            Laya.timer.once(500, this, () => {
                this.GameState = Fe.BackCar;
            }));
        }
        TryBackCarline() {
            this.trackType = this.arr_BackCarline.shift(), 0 == this.arr_BackCarline.length && (this.arr_BackCarline = [ 1, 2, 3, 4 ]), 
            this.change_Target(), Laya.timer.once(3e3, this, this.change_lanes);
        }
        isTerminus() {
            return 2 == this.terminus;
        }
        setTerminus() {
            if (1 == this.terminus) return;
            this.terminus = 1;
            let e = O.randomInSection(1, 3);
            Laya.timer.once(100 * e, this, () => {
                this.terminus = 2;
            });
        }
        car_tween(e) {
            switch (e) {
              case 1:
                this.GameState = Fe.BackCar, Laya.Tween.to(this.rivalCarAll.transform, {
                    localRotationEulerX: -20
                }, 100, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this.rivalCarAll.transform, {
                        localRotationEulerX: 0
                    }, 300, null, Laya.Handler.create(this, function() {
                        this.GameState = Fe.Awake;
                    }));
                }));
                break;

              case 2:
                this.GameState = Fe.BackCar, Laya.Tween.to(this.carbody.transform, {
                    localPositionY: this.carbody.transform.localPositionY + .2
                }, 200, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this.carbody.transform, {
                        localPositionY: this.carbody.transform.localPositionY - .2
                    }, 500, null, Laya.Handler.create(this, function() {
                        this.GameState = Fe.Awake;
                    }));
                }));
            }
        }
        removeSelf() {
            this.railObj && (this.railObj.removeSelf(), this.railObj = null);
        }
    }
    ze.end_routeIndex = 0, function(e) {
        e.Not = "Not", e.Awake = "Awake", e.Pause = "Pause", e.Move = "Move", e.Collideing = "Collideing", 
        e.BackCar = "BackCar", e.Baiwei = "Baiwei";
    }(Ve || (Ve = {}));
    class He extends Laya.Script3D {
        constructor() {
            super(), this.gameState = Ve.Not, this.carAll = null, this.userCar = null, this.lookatObj = null, 
            this.railObj = null, this.carbody = null, this.camera = null, this.userCarRig = null, 
            this.wheelFatherFL = null, this.wheelFatherFR = null, this.Car_FL = null, this.Car_FR = null, 
            this.Car_RL = null, this.Car_RR = null, this.CameraPos = null, this.CamerTeXie = null, 
            this.Nitrogenl = null, this.effBackLight = null, this.effSmoke = null, this.effSpark_right = null, 
            this.effSpark_left = null, this.effSpark_front = null, this.effSpark_back = null, 
            this.isTrigge = 0, this.trackType = 1, this.orientation_MoveState = 0, this.nitrogen = null, 
            this.arr_Trigge_All = null;
        }
        static create(e, t, a) {
            var i = new He();
            i.carAll = e, i.camera = a, i.railObj || (i.railObj = new Laya.MeshSprite3D()), 
            i.railObj.transform.position = i.carAll.transform.position, P.gameScene3D.addChild(i.railObj), 
            i.railObj.addChild(i.carAll), i.railObj.addChild(i.camera), i.userCar = i.carAll, 
            i.userCarRigComp = i.userCar.getComponent(Laya.Rigidbody3D), i.userCarRigComp.isTrigger = !0, 
            i.userCarRigComp.isKinematic = !0, i.CamerTeXie = i.userCar.getChildByName("texie");
            let s = i.userCar.getChildAt(1);
            return i.CameraPos = s.transform, i.userCarRig = i.userCar.getChildAt(0).getChildAt(0), 
            i.carbody = i.userCarRig.getChildAt(0), i.wheelFatherFL = i.userCarRig.getChildByName("wheel_1"), 
            i.wheelFatherFR = i.userCarRig.getChildByName("wheel_2"), i.Car_FL = i.wheelFatherFL.getChildByName("wheel_1 1"), 
            i.Car_FR = i.wheelFatherFR.getChildByName("wheel_2 1"), i.Car_RL = i.userCarRig.getChildByName("wheel_4"), 
            i.Car_RR = i.userCarRig.getChildByName("wheel_3"), i.nitrogen = i.userCar.getChildByName("nitrogen"), 
            i.nitrogen.active = !1, i.effBackLight = i.userCar.getChildByName("car_light"), 
            i.effBackLight && (i.effBackLight.active = !1), i.effSmoke = i.userCar.getChildByName("car_smoke"), 
            i.effSmoke && (i.effSmoke.active = !1), i.effSpark_right = i.userCar.getChildByName("right_spark"), 
            i.effSpark_right && (i.effSpark_right.active = !1), i.effSpark_left = i.userCar.getChildByName("left_spark"), 
            i.effSpark_left && (i.effSpark_left.active = !1), i.effSpark_front = i.userCar.getChildByName("front_spark"), 
            i.effSpark_front && (i.effSpark_front.active = !1), i.effSpark_back = i.userCar.getChildByName("back_spark"), 
            i.effSpark_back && (i.effSpark_back.active = !1), i.userCar.transform.rotationEuler = new Laya.Vector3(0, 0, 0), 
            i.userCarRig.transform.position = new Laya.Vector3(0, 0, 0), i.userCarRig.transform.rotationEuler = new Laya.Vector3(0, 0, 0), 
            i.userCar.transform.localScaleX = .8, i.userCar.transform.localScaleY = .8, i.userCar.transform.localScaleZ = .8, 
            i.now_routeIndex = 0, i.lookatObj || (i.lookatObj = new Laya.Sprite3D()), i.lookatObj.transform.position = i.userCar.transform.position, 
            i.trackType = 5, i.orientation_MoveState = 1, i.arr_Trigge_All = [ [], [], [], [] ], 
            i.gameState = Ve.Awake, i.rankVo = new Oe(), i;
        }
        playeffBackLight(e) {
            this.effBackLight && (this.effBackLight.active = !1, this.effBackLight.active = e);
        }
        setisTrigge(e, t = null, a = 1) {
            if (5 == e) {
                E.playEffect(m.ZhaungChe);
                let a = t.getComponent(ze);
                this.rankVo.distance < a.rankVo.distance ? (e = 6, a && a.zhuangJiMove(), this.playEffSpark_back()) : (P.gameControll.zhuangJiMove(), 
                this.playEffSpark_front());
            }
            if (e <= 4) {
                if (0 == a) return void (this.arr_Trigge_All[e - 1].length > 0 && this.arr_Trigge_All[e - 1].splice(0, 1));
                if (this.arr_Trigge_All[e - 1].push(t), 1 == this.arr_Trigge_All[e - 1].length && (E.playEffect(m.ZhaungChe), 
                this.car_tween(e)), this.arr_Trigge_All[e - 1].length > 1) return;
            }
            console.log("zhuangjimove")
        }
        getisTrigge(e) {
            return this.arr_Trigge_All[e - 1].length > 0;
        }
        car_tween(e) {
            switch (e) {
              case 1:
                this.gameState = Ve.Collideing, Laya.Tween.to(this.carAll.transform, {
                    localRotationEulerX: -20
                }, 100, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this.carAll.transform, {
                        localRotationEulerX: 0
                    }, 300, null, Laya.Handler.create(this, function() {
                        this.gameState = Ve.Awake;
                    }));
                })), this.playEffSpark_front();
                break;

              case 2:
                this.gameState = Ve.Collideing, Laya.Tween.to(this.carbody.transform, {
                    localPositionY: this.carbody.transform.localPositionY + .2
                }, 200, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this.carbody.transform, {
                        localPositionY: this.carbody.transform.localPositionY - .2
                    }, 500, null, Laya.Handler.create(this, function() {
                        this.gameState = Ve.Awake;
                    }));
                })), this.playEffSpark_back();
            }
        }
        DetectionRoute(e) {
            if (this.gameState != Ve.Awake) return !1;
            this.lookatObj.transform.position = this.railObj.transform.position, e < 0 && (1 == this.orientation_MoveState && this.now_routeIndex--, 
            this.orientation_MoveState = -1), e > 0 && (-1 == this.orientation_MoveState && this.now_routeIndex++, 
            this.orientation_MoveState = 1);
            let t = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + ""), a = this.railObj.transform.position;
            return !(!t || (Math.abs(t.z - a.z) + Math.abs(t.x - a.x) < 2 && (-1 == this.orientation_MoveState && this.now_routeIndex--, 
            1 == this.orientation_MoveState && this.now_routeIndex++, t = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "")), 
            !t)) && (t = new Laya.Vector3(t.x, this.railObj.transform.position.y, t.z), this.lookAtTarget(t, 1, e), 
            !0);
        }
        lookAtTarget(e, t, a) {
            if (e) {
                this.lookatObj.transform.lookAt(e, new Laya.Vector3(0, 1, 0));
                let t = 2 * Laya.Vector3.distance(this.railObj.transform.position, e) * Math.PI / 6 / 2, i = this.lookatObj.transform.localRotationEulerY - this.railObj.transform.localRotationEulerY;
                -1 == this.orientation_MoveState && (i -= 180, i *= -1), i > 180 && (i -= 360), 
                i < -180 && (i += 360), i = i / t * a, this.railObj.transform.localRotationEulerY += i;
            }
        }
        getTeXiePos(e) {
            let t = Ne.getAIRouteid_pos(this.now_routeIndex + e, this.trackType + "");
            t && (t = new Laya.Vector3(t.x, t.y + 1, t.z));
        }
        getnow_routeIndex() {
            return this.now_routeIndex;
        }
        gettrackType() {
            return this.trackType;
        }
        playTween_baiwei() {
            if (this.gameState != Ve.Awake) return;
            this.gameState = Ve.Baiwei;
            let e = O.randomInSection(1, 5);
            Laya.Tween.clearAll(this.carAll.transform), Laya.Tween.to(this.carAll.transform, {
                localRotationEulerY: this.carAll.transform.localRotationEulerY + e
            }, 150, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.carAll.transform, {
                    localRotationEulerY: this.carAll.transform.localRotationEulerY - 2 * e
                }, 200, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(this.carAll.transform, {
                        localRotationEulerY: this.carAll.transform.localRotationEulerY + e
                    }, 150, null, Laya.Handler.create(this, function() {
                        this.gameState = Ve.Awake;
                    }));
                }));
            }));
        }
        playEffYanChen(e) {
            e ? (Laya.timer.clear(this, this.stopEffYanChen), this.effSmoke && (this.effSmoke.active = !1, 
            this.effSmoke.active = e)) : Laya.timer.once(200, this, this.stopEffYanChen);
        }
        stopEffYanChen() {
            this.effSmoke && (this.effSmoke.active = !1);
        }
        playEffSpark(e, t) {
            let a = void 0;
            switch (e) {
              case 1:
                a = this.effSpark_right;
                break;

              case 2:
                a = this.effSpark_left;
            }
            a && a.active != t && (a.active = !1, a.active = t);
        }
        playEffSpark_front() {}
        playEffSpark_back() {}
        removeSelf() {
            this.carAll && (Laya.Tween.clearAll(this.carAll.transform), this.carAll.removeSelf(), 
            this.carAll = null);
        }
    }
    class Ye extends Laya.Script3D {
        constructor() {
            super(), this.isRivalCar = !1, this.isNitrogen = !1, this.is_destination = !1, this.is_resurgence = !1, 
            this.is_obstacles = !1, this.is_gold = !1, this.goldIndex = 0, this.nitroIndex = 0;
        }
        onTriggerEnter(e) {
            this.is_destination && Ae.getInstance().emit(p.is_destination, null), this.is_gold && Ae.getInstance().emit(p.is_gold, [ this.goldIndex ]), 
            this.isNitrogen && Ae.getInstance().emit(p.is_nitro, [ this.nitroIndex ]);
        }
        onTriggerStay(e) {}
        onTriggerExit(e) {}
        onCollisionEnter(e) {
            e.other.owner == this.userCar && (this.isRivalCar || this.isNitrogen);
        }
        onCollisionStay(e) {}
        onCollisionExit(e) {}
    }
    class Xe {
        static init() {}
        static LoadCheckpoint(e) {
            return Y.res_Checkpoint = this.str_Checkpoint + e + ".lh", Y.res_Checkpoint;
        }
        static LoadUserCar(e) {
            return Y.res_userCar = this.getCarRes(e), Y.res_userCar;
        }
        static getCarRes(e) {
            let t = Te.carData(e).carid;
            return this.str_userCar + t + ".lh";
        }
        static getCarResUrl(e) {
            return this.str_userCar + "car_" + e + ".lh";
        }
        static getRivalCarRes(e) {
            let t = [];
            t = P.now_game_level_config.enemycarid.split(";");
            for (let e = 0; e < t.length; e++) t[e] = this.getCarResUrl(parseInt(t[e]));
            return P.rivalCarRes = t, t;
        }
    }
    Xe.str_Checkpoint = "LayaGame3D/Level/Conventional/Level_", Xe.str_Fish = "LayaGame3D/Level/Conventional/FishObj.lh", 
    Xe.str_userCar = "LayaGame3D/Game_car/Conventional/Game_", Xe.str_homeCar = "LayaGame3D/Interface_car/Conventional/car_", 
    Xe.str_skyBox = "LayaGame3D/Sky/Conventional/Sky_";
    class We extends Laya.Script3D {
        constructor() {
            super();
        }
        onEnable() {
            this.gameScene = this.owner.parent.parent;
        }
        onTriggerEnter(e) {
            -1 != e.owner.name.indexOf("road_obstaclesl_left") && P.gameControll.gameRes_UserCar.setisTrigge(3, e.owner, 1), 
            -1 != e.owner.name.indexOf("road_obstaclesl_right") && P.gameControll.gameRes_UserCar.setisTrigge(4, e.owner, 1), 
            -1 != e.owner.name.indexOf("road_obstaclesl_top") && P.gameControll.gameRes_UserCar.setisTrigge(1, e.owner, 1), 
            -1 != e.owner.name.indexOf("road_obstaclesl_rear") && P.gameControll.gameRes_UserCar.setisTrigge(2, e.owner, 1);
            if (e.owner.getComponent(Ye)) {
                console.log("ownersdfasfafsfs",e.owner)
                e.owner.getComponent(Ye).isRivalCar && P.gameControll.gameRes_UserCar.setisTrigge(5, e.owner, 1);
            }
        }
        onTriggerExit(e) {
            -1 != e.owner.name.indexOf("road_obstaclesl_left") && P.gameControll.gameRes_UserCar.setisTrigge(3, e.owner, 0), 
            -1 != e.owner.name.indexOf("road_obstaclesl_right") && P.gameControll.gameRes_UserCar.setisTrigge(4, e.owner, 0), 
            -1 != e.owner.name.indexOf("road_obstaclesl_top") && P.gameControll.gameRes_UserCar.setisTrigge(1, e.owner, 0), 
            -1 != e.owner.name.indexOf("road_obstaclesl_rear") && P.gameControll.gameRes_UserCar.setisTrigge(2, e.owner, 0);
        }
        onCollisionEnter(e) {}
        onCollisionStay(e) {}
        onCollisionExit(e) {}
    }
    class Je {
        static init() {}
        static setFishObj(e) {
            if (Je.FishObj = e, Je.FishObj) for (let e = 0; e < Je.FishObj.numChildren; e++) {
                Je.FishObj.getChildAt(e).addComponent(Ke).speed = e + 1;
            }
        }
        static setFishObj_pos(e, t) {
            if (!Je.FishObj) return;
            Je.FishObj.transform.position = new Laya.Vector3(e.transform.position.x, 0, e.transform.position.z), 
            Je.FishObj.transform.rotationEuler = new Laya.Vector3(e.transform.rotationEuler.x, e.transform.rotationEuler.y, e.transform.rotationEuler.z), 
            Je.skewingPos(t);
            let a = O.randomInSection(0, 356);
            Je.FishObj.transform.localRotationEulerY += a;
            for (let e = 0; e < Je.FishObj.numChildren; e++) Je.FishObj.getChildAt(e).getComponent(Ke) && Je.FishObj.getChildAt(e).getComponent(Ke).moveinit(a);
        }
        static skewingPos(e) {
            Je.FishObj && this.FishObj.transform.translate(e);
        }
        static moveFun() {
            if (Je.FishObj) for (let e = 0; e < Je.FishObj.numChildren; e++) Je.FishObj.getChildAt(e).getComponent(Ke) && Je.FishObj.getChildAt(e).getComponent(Ke).moveFun();
        }
        static removeSelf() {
            Je.FishObj && Je.FishObj.removeSelf();
        }
    }
    Je.FishObj = null, Je.arr_pos = null, Je.targetObj = null;
    class Ke extends Laya.Script3D {
        constructor() {
            super(), this.FishObj = null, this.initPos = null, this.targetPos = null, this.speed = 1;
        }
        onAwake() {
            this.FishObj = this.owner, this.initPos = new Laya.Vector3(this.FishObj.transform.localPositionX, this.FishObj.transform.localPositionY, this.FishObj.transform.localPositionZ);
        }
        moveinit(e) {
            this.FishObj.transform.localPositionX = this.initPos.x, this.FishObj.transform.localPositionY = this.initPos.y, 
            this.FishObj.transform.localPositionZ = this.initPos.z;
        }
        moveFun() {
            this.FishObj && this.FishObj.transform.translate(new Laya.Vector3(0, 0, .02 * this.speed));
        }
        onDisable() {
            Laya.Tween.clearAll(this.FishObj.transform);
        }
    }
    class qe extends Laya.Script3D {
        constructor() {
            super(...arguments), this.Obj = null, this.railObj = null, this.trackType = 1, this.rivalCarSpeed = 0, 
            this.now_routeIndex = 0, this.gameState = 1, this.timecount = 1;
        }
        static create(e) {
            var t = e.addComponent(qe);
            return t.gameState = 0, t;
        }
        init(e, t, a, i) {
            this.railObj || (this.railObj = new Laya.MeshSprite3D()), this.lookatObj || (this.lookatObj = new Laya.Sprite3D()), 
            this.Obj = this.owner, P.gameScene3D.addChild(this.railObj), this.railObj.addChild(this.Obj), 
            this.now_routeIndex = e;
            let s = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + "");
            this.railObj.transform.position = new Laya.Vector3(s.x, 0, s.z), this.lookatObj.transform.position = this.railObj.transform.position, 
            this.Obj.transform.position = new Laya.Vector3(this.railObj.transform.position.x, this.railObj.transform.position.y + 1, this.railObj.transform.position.z), 
            this.trackType = t, this.rivalCarSpeed = a, this.time = 1e6 * i, this.now_routeIndex = 0, 
            this.gameState = 1, Laya.timer.once(this.time, this, () => {
                console.log("根据指定时间固定终点位置"), this.setFinishPos();
            });
        }
        updata() {
            0 != this.gameState && (this.railObj.transform.translate(new Laya.Vector3(0, 0, -this.rivalCarSpeed)), 
            this.DetectionRoute());
        }
        setFinishPos() {
            Laya.timer.clearAll(this), this.gameState = 0;
        }
        DetectionRoute() {
            this.lookatObj.transform.position = this.railObj.transform.position;
            let e = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + ""), t = this.railObj.transform.position;
            e ? (Math.abs(e.z - t.z) + Math.abs(e.x - t.x) < 2 && (this.now_routeIndex--, e = Ne.getAIRouteid_pos(this.now_routeIndex, this.trackType + ""), 
            console.log("相机导航", this.now_routeIndex)), e ? (e = new Laya.Vector3(e.x, this.railObj.transform.position.y, e.z), 
            this.lookAtTarget(e, 1, this.rivalCarSpeed)) : this.setFinishPos()) : this.setFinishPos();
        }
        lookAtTarget(e, t, a) {
            if (e) {
                this.lookatObj.transform.lookAt(e, new Laya.Vector3(0, 1, 0));
                let t = 2 * Laya.Vector3.distance(this.railObj.transform.position, e) * Math.PI / 6 / 2, i = this.lookatObj.transform.localRotationEulerY - this.railObj.transform.localRotationEulerY;
                i > 180 && (i -= 360), i < -180 && (i += 360), i = i / t * a, this.railObj.transform.localRotationEulerY += i;
            }
        }
        removeSelf() {
            this.railObj && (this.railObj.removeSelf(), this.railObj = null), Laya.timer.clearAll(this);
        }
    }
    class $e extends Laya.Script3D {
        constructor() {
            super(), this.gameRes_Scene = null, this.gameRes_Checkpoint = null, this.gameRes_UserCar = null, 
            this.gameRes_SkyBox = null, this.is_destination = !1, this.ribbon = null, this.explode = null, 
            this.bubbleEff = null, this.gameNavigateCtrl = null, this.forceStop = !1, this.collide = 0, 
            this.nitroNum = 0, this.isUseNitro = !1, this.nitroLeftTime = 0, this.rivalCarArr = [], 
            this.camera = null, this.rankArr = [], this.nameIndex = 0, this.texie_CameraCtrl = null, 
            this.now_maxspeed = 0, this.is_LoadCustoms = !1, this.is_LoadCar = !1, this.carRotate = 0, 
            this.keyType = A.front, this.angleSum = 0, this.carWheelAngle = 0, this.is_Expedite = !1, 
            this.is_back = !1, this.is_Brake = !1, this.userCarMoveSpeed = 0, this.nitroAddSpeed = 0, 
            this.carRunSpeed = 0, this.counts = 0, this.countstime = 0, this.is_onExpedite = !0, 
            this.isOnBack = !0, this.is_onBrake = !0;
        }
        loadGameScene() {
            return this.gameRes_Scene = Laya.loader.getRes(P.Res3D.GameScene), this.cameraParent = this.gameRes_Scene.getChildByName("CameraParent"), 
            this.camera = this.gameRes_Scene.getChildByName("Camera"), this.camera.enableHDR = !1, 
            this.bubbleEff = this.gameRes_Scene.getChildByName("bubble"), console.log(this.camera.transform.localPositionX, this.camera.transform.localPositionY, this.camera.transform.localPositionZ), 
            console.log(this.camera.transform.localRotationEulerX, this.camera.transform.localRotationEulerY, this.camera.transform.localRotationEulerZ), 
            P.gameScene3D = this.gameRes_Scene, P.gameCamera = this.camera, P.gameControll = this, 
            this.gameRes_Scene;
        }
        starGame() {
            this.init(), this.LoadCheckpoint(), this.loadUserCar(xe.UserUseCar), this.loadRivalCar(), 
            this.texie_CameraCtrl = this.camera.getComponent(qe), this.texie_CameraCtrl || (this.texie_CameraCtrl = qe.create(this.camera)), 
            this.now_maxspeed = Y.maxspeed, console.log("", this.now_maxspeed);
        }
        init() {
            this.is_Expedite = !1, this.is_Brake = !1, this.gameRes_Checkpoint = null, this.gameRes_UserCar = null, 
            this.userCarMoveSpeed = 0, this.keyType = A.front, this.is_destination = !1, this.is_LoadCar = !1, 
            this.is_LoadCustoms = !1, this.carWheelAngle = 0, this.angleSum = 0, this.carRotate = 0, 
            this.is_onExpedite = !0, this.is_onBrake = !0, this.nitroNum = 0, this.isUseNitro = !1, 
            this.nitroLeftTime = 0, this.frameDeltaTime = 0, this.rankArr = [];
        }
        LoadCheckpoint() {
            var e = this;
            Laya.Scene3D.load(Y.res_Checkpoint, Laya.Handler.create(this, function(t) {
                P.checkpointSprite3D && P.checkpointSprite3D.removeSelf();
                let a = Laya.MeshSprite3D.instantiate(t, P.gameScene3D);
                P.checkpointSprite3D = a, e.gameRes_Checkpoint = Ee.create(a), e.is_LoadCustoms = !0, 
                e.addCollosion();
            }));
        }
        loadUserCar(e) {
            var t = this;
            Laya.loader.create([ Xe.LoadUserCar(e) ], Laya.Handler.create(this, () => {
                P.carSprite3D && P.carSprite3D.removeSelf();
                let a = Laya.loader.getRes(Xe.LoadUserCar(e));
                P.carSprite3D = Laya.MeshSprite3D.instantiate(a, P.gameScene3D), t.gameRes_UserCar = He.create(P.carSprite3D, xe.UserUseCar, P.gameCamera), 
                t.is_LoadCar = !0, t.addCollosion(), P.carSprite3D.addComponent(We), this.gameNavigateCtrl = je.create();
                let i = P.now_game_level_config.navigationspeed, s = P.now_game_level_config.navigationtime;
                i = De.newChangeSpeed(i), console.log("", i), this.gameNavigateCtrl.init(t.gameRes_UserCar.carAll, 5, i, s), 
                t.gameRes_UserCar.rankVo.isUser = !0, t.gameRes_UserCar.rankVo.name = Z.I, t.gameRes_UserCar.rankVo.distance = 0, 
                t.rankArr.push(t.gameRes_UserCar.rankVo), t.gameRes_UserCar.carAll.addChild(this.gameRes_Checkpoint.effRibbon), 
                this.gameRes_Checkpoint.effRibbon.transform.localPositionX = 0, this.gameRes_Checkpoint.effRibbon.transform.localPositionY = 1, 
                this.gameRes_Checkpoint.effRibbon.transform.localPositionZ = 0;
            }));
        }
        loadRivalCar() {
            var e = this;
            let t = P.now_game_level_config.enemycarspeed.split(";");
            for (let a = 0; a < P.rivalCarRes.length; a++) Laya.Scene3D.load(P.rivalCarRes[a], new Laya.Handler(this, function(i) {
                let s = t[a];
                s = De.newChangeSpeed(s), console.log("", s);
                var n = Laya.MeshSprite3D.instantiate(i, null);
                let r = n.getComponent(Laya.Rigidbody3D), o = r.colliderShape;
                var h = new Laya.BoxColliderShape(o.sizeX, o.sizeY, o.sizeZ);
                r && r.destroy();
                let l = ze.create(n, a + 1, s);
                l.rankVo.name = e.getRandomName(), l.rankVo.distance = 0, e.rankArr.push(l.rankVo), 
                l.rivalCarAll.addComponent(Laya.PhysicsCollider).colliderShape = h, l.rivalCarAll.addComponent(Ye).isRivalCar = !0, 
                e.rivalCarArr.push(l);
            }));
        }
        loadFishObj() {
            let e = Laya.loader.getRes(Xe.str_Fish);
            Je.setFishObj(P.gameScene3D.addChild(Laya.Sprite3D.instantiate(e)));
        }
        getRandomName() {
            let e = Object.keys(ve.getTableMgr().getTable("game_name_config").getRawData()), t = O.getRandomArr(1, e.length - 1, 8), a = [];
            for (let e in t) {
                if (a.length >= 4) break;
                let i = ve.getTableMgr().getTable("game_name_config").getData(t[e] + "", "name");
                -1 == a.indexOf(i) && a.push(i);
            }
            return a[this.nameIndex++];
        }
        addCollosion() {
            if (!this.is_LoadCar || !this.is_LoadCustoms) return;
            let e = this.gameRes_Checkpoint.destination.addComponent(Ye);
            if (e.userCar = this.gameRes_UserCar.userCarRig, e.is_destination = !0, this.gameRes_Checkpoint.obstacles) for (let e = 0; e < this.gameRes_Checkpoint.addCollionObstacles.length; e++) {
                this.gameRes_Checkpoint.addCollionObstacles[e].addComponent(Ye).is_obstacles = !0;
            }
            if (this.gameRes_Checkpoint.goldArr) for (let e = 0; e < this.gameRes_Checkpoint.goldArr.numChildren; e++) {
                let t = this.gameRes_Checkpoint.goldArr.getChildAt(e).addComponent(Ye);
                t.is_gold = !0, t.goldIndex = e;
            }
            if (this.gameRes_Checkpoint.nitroArr) for (let e = 0; e < this.gameRes_Checkpoint.nitroArr.numChildren; e++) {
                let t = this.gameRes_Checkpoint.nitroArr.getChildAt(e).addComponent(Ye);
                t.isNitrogen = !0, t.nitroIndex = e;
            }
        }
        updata(e) {
            if (this.frameDeltaTime = Laya.timer.delta, this.gameRes_UserCar.userCar && (this.texie_CameraCtrl && this.texie_CameraCtrl.updata(), 
            this.userCarForwardMove(e), this.fourCarWheelTurn(), e)) {
                this.onMoveSteer(), this.updateNitroTime();
                for (let e = 0; e < this.rivalCarArr.length; e++) {
                    const t = this.rivalCarArr[e];
                    t && t.updata();
                }
                this.playEffSpark(), this.setBubbleEffPos(this.gameRes_UserCar.userCar.transform.position);
            }
        }
        updateNitroTime() {
            if (this.nitroLeftTime <= 0) return this.gameRes_UserCar.nitrogen.active = !1, void E.stopEffect(m.UsingNitrogen);
            this.nitroLeftTime -= this.frameDeltaTime, this.gameRes_UserCar.nitrogen.active || (this.gameRes_UserCar.nitrogen.active = !0);
        }
        carTurn() {
            if (0 != this.userCarMoveSpeed) {
                if (this.carRotate = this.carWheelAngle * this.userCarMoveSpeed / Y.carRotate, this.carRotate + this.gameRes_UserCar.userCar.transform.localRotationEulerY > 20 || this.carRotate + this.gameRes_UserCar.userCar.transform.localRotationEulerY < -20) return;
                this.gameRes_UserCar.userCar.transform.rotate(new Laya.Vector3(0, this.carRotate, 0));
            }
        }
        onMoveSteer() {
            this.carRotate = this.carWheelAngle * this.userCarMoveSpeed / Y.carRotate;
            let e = this.getCarLeftRightMoveCoeffi(), t = this.getCarLeftRightRotationCoeffi(), a = this.getCarMaxRotationCoeffi();
            switch (this.keyType) {
              case A.left:
                if (this.gameRes_UserCar.getisTrigge(3)) return void (this.collide = -1);
                this.angleSum -= Y.addAngle, this.gameRes_UserCar.userCar.transform.localPositionX > -3 ? (this.gameRes_UserCar.userCar.transform.localPositionX -= e, 
                this.gameRes_UserCar.camera.transform.translate(new Laya.Vector3(-e, 0, 0)), this.collide = 0) : this.collide = -1, 
                this.gameRes_UserCar.userCar.transform.localRotationEulerY < a && (this.gameRes_UserCar.userCar.transform.localRotationEulerY += t);
                break;

              case A.right:
                if (this.gameRes_UserCar.getisTrigge(4)) return void (this.collide = 1);
                this.angleSum += Y.addAngle, this.gameRes_UserCar.userCar.transform.localPositionX < 3 ? (this.gameRes_UserCar.userCar.transform.localPositionX += e, 
                this.gameRes_UserCar.camera.transform.translate(new Laya.Vector3(e, 0, 0)), this.collide = 0) : this.collide = 1, 
                this.gameRes_UserCar.userCar.transform.localRotationEulerY > -a && (this.gameRes_UserCar.userCar.transform.localRotationEulerY -= t);
                break;

              default:
                this.angleSum > Y.straightenCarWheel ? this.angleSum -= Y.straightenCarWheel : this.angleSum < -Y.straightenCarWheel ? this.angleSum += Y.straightenCarWheel : this.angleSum = 0;
                let i = this.getUserCarReturnRotationCoeffi();
                Math.abs(this.gameRes_UserCar.userCar.transform.localRotationEulerY) < i && (this.gameRes_UserCar.userCar.transform.localRotationEulerY = 0), 
                this.gameRes_UserCar.userCar.transform.localRotationEulerY > i && (this.gameRes_UserCar.userCar.transform.localRotationEulerY -= i), 
                this.gameRes_UserCar.userCar.transform.localRotationEulerY < -i && (this.gameRes_UserCar.userCar.transform.localRotationEulerY += i);
            }
            this.angleSum > 540 && (this.angleSum = 540), this.angleSum < -540 && (this.angleSum = -540), 
            this.fontCarWheelTurn(this.angleSum);
        }
        getCarLeftRightMoveCoeffi() {
            return Math.abs(this.userCarMoveSpeed) > 0 ? Math.abs(this.userCarMoveSpeed) * Y.carLeftRightMoveCoeffi : 0;
        }
        getCarLeftRightRotationCoeffi() {
            return Math.abs(this.userCarMoveSpeed) ? Math.abs(this.userCarMoveSpeed) * Y.carLeftRightRotationCoeffi : 0;
        }
        getCarMaxRotationCoeffi() {
            return Y.carMaxRotationCoeffi;
        }
        getUserCarReturnRotationCoeffi() {
            return Y.carReturnRotationCoeffi;
        }
        fontCarWheelTurn(e) {
            this.carWheelAngle = this.difference(e, 30);
            let t = this.gameRes_UserCar.userCar.transform.rotationEuler.y + this.carWheelAngle;
            this.gameRes_UserCar.wheelFatherFL.transform.rotationEuler = new Laya.Vector3(0, t, 0), 
            this.gameRes_UserCar.wheelFatherFR.transform.rotationEuler = new Laya.Vector3(0, t, 0);
        }
        fourCarWheelTurn() {
            this.gameRes_UserCar.Car_FL.transform.rotate(new Laya.Vector3(-this.userCarMoveSpeed, 0, 0)), 
            this.gameRes_UserCar.Car_FR.transform.rotate(new Laya.Vector3(-this.userCarMoveSpeed, 0, 0)), 
            this.gameRes_UserCar.Car_RL.transform.rotate(new Laya.Vector3(-this.userCarMoveSpeed, 0, 0)), 
            this.gameRes_UserCar.Car_RR.transform.rotate(new Laya.Vector3(-this.userCarMoveSpeed, 0, 0));
        }
        difference(e, t) {
            return -e / 540 * t;
        }
        userCarForwardMove(e) {
            if (!(!this.is_Expedite && !this.is_Brake && !this.is_back && Math.abs(this.userCarMoveSpeed) <= 0 || this.forceStop)) {
                if (this.is_destination ? (this.carRunSpeed > .002 ? this.carRunSpeed -= .002 : this.carRunSpeed = 0, 
                this.userCarMoveSpeed = this.carRunSpeed, P.rankArr = this.rankArr) : (this.is_Brake || this.is_Expedite || this.is_back ? this.is_Brake ? this.carRunSpeed > 0 ? (this.carRunSpeed -= Y.brakingspeed, 
                this.carRunSpeed < 0 && (this.carRunSpeed = 0)) : this.carRunSpeed < 0 && (this.carRunSpeed += Y.brakingspeed, 
                this.carRunSpeed > 0 && (this.carRunSpeed = 0)) : this.is_Expedite ? this.carRunSpeed < this.now_maxspeed && (this.carRunSpeed += Y.acceleration) : this.is_back && (this.carRunSpeed > 0 && (this.carRunSpeed = 0), 
                this.carRunSpeed <= 0 && Math.abs(this.carRunSpeed) < Y.maxBackspeed && (this.carRunSpeed -= Y.backAcceleration, 
                this.carRunSpeed = Math.abs(this.carRunSpeed) > Y.maxBackspeed ? -Y.maxBackspeed : this.carRunSpeed)) : this.carRunSpeed > 0 ? this.carRunSpeed = this.carRunSpeed > Y.slideMinsSpeednumber ? this.carRunSpeed - Y.slideMinsSpeednumber : 0 : this.carRunSpeed < 0 ? this.carRunSpeed = Math.abs(this.carRunSpeed) > Y.slideMinsSpeednumber ? this.carRunSpeed + Y.slideMinsSpeednumber : 0 : this.carRunSpeed = 0, 
                this.nitroLeftTime > 0 && !this.is_destination ? this.nitroAddSpeed = Y.nitroAddSpeed : this.nitroAddSpeed > 0 && (this.nitroAddSpeed = 0), 
                this.userCarMoveSpeed = this.carRunSpeed < 0 ? this.carRunSpeed : this.carRunSpeed + this.nitroAddSpeed, 
                0 != this.collide && this.now_maxspeed * Y.collideSpeedRate < this.userCarMoveSpeed && (this.userCarMoveSpeed = this.now_maxspeed * Y.collideSpeedRate)), 
                this.userCarMoveSpeed > 0) {
                    if (this.gameRes_UserCar.getisTrigge(1)) return;
                } else if (this.userCarMoveSpeed < 0 && this.gameRes_UserCar.getisTrigge(2)) return void (this.userCarMoveSpeed = 0);
                e ? this.gameRes_UserCar.DetectionRoute(this.userCarMoveSpeed) ? (this.gameRes_UserCar.rankVo.distance += this.userCarMoveSpeed, 
                this.gameRes_UserCar.railObj.transform.translate(new Laya.Vector3(0, 0, -this.userCarMoveSpeed))) : this.userCarMoveSpeed = 0 : this.userCarMoveSpeed > 0 && this.gameRes_UserCar.playTween_baiwei();
            }
        }
        zhuangJiMove() {
            this.now_maxspeed = 1.3 * Y.maxspeed, this.userCarMoveSpeed = this.now_maxspeed, 
            Laya.timer.once(400, this, () => {
                this.now_maxspeed = Y.maxspeed, this.carRunSpeed = this.now_maxspeed;
            });
           
        }
        onExpedite() {
            this.is_Expedite && this.is_onExpedite && (this.is_onExpedite = !1, this.userCarMoveSpeed = this.userCarMoveSpeed < 0 ? 0 : this.userCarMoveSpeed);
        }
        onBack() {
            this.is_back && this.isOnBack && (this.userCarMoveSpeed = this.userCarMoveSpeed > 0 ? 0 : this.userCarMoveSpeed);
        }
        playeffBackLight(e) {
            this.gameRes_UserCar.playeffBackLight(e);
        }
        onBrake() {
            this.is_Brake && this.is_onBrake && this.userCarMoveSpeed > 0 && (this.is_onBrake = !1, 
            Laya.Tween.to(this.gameRes_UserCar.userCar.transform, {
                localRotationEulerX: 1.5
            }, 200, Laya.Ease.backOut, Laya.Handler.create(this, function() {
                this.gameRes_UserCar.userCar.transform.localRotationEulerX = 0, this.is_onBrake = !0;
            })));
        }
        carStop() {
            this.angleSum = 0, this.carRotate = 0, this.userCarMoveSpeed = 0;
        }
        animaterStop() {
            this.gameRes_Checkpoint.stopAnimator();
        }
        removeGold(e) {
            this.gameRes_Checkpoint.goldArr.getChildAt(e).active = !1;
        }
        setFinishPos(e, t) {
            this.gameRes_Checkpoint.setFinishPos(e, t);
        }
        removeNitro(e) {
            this.gameRes_Checkpoint.nitroArr.getChildAt(e).active = !1;
        }
        setBubbleEffPos(e) {
            this.bubbleEff && (this.bubbleEff.transform.position = new Laya.Vector3(e.x, this.bubbleEff.transform.position.y, e.z));
        }
        playEffSpark() {
            0 != this.userCarMoveSpeed && 1 == this.collide ? this.gameRes_UserCar.playEffSpark(1, !0) : this.gameRes_UserCar.playEffSpark(1, !1), 
            0 != this.userCarMoveSpeed && -1 == this.collide ? this.gameRes_UserCar.playEffSpark(2, !0) : this.gameRes_UserCar.playEffSpark(2, !1);
        }
        setStartGameCamera(e) {
            if (this.camera) switch (console.log("this.camera.transform.localPositionZ", this.camera.transform.localPositionZ, this.camera.transform.localRotationEulerY), 
            e) {
              case 5:
                this.gameRes_Scene.addChild(this.camera), this.camera.transform.position = this.gameRes_UserCar.CamerTeXie.transform.position, 
                this.camera.transform.lookAt(this.gameRes_UserCar.carAll.transform.position, new Laya.Vector3(0, 1, 0));
                break;

              case 4:
                this.camera.transform.localPositionX = 0, this.camera.transform.localPositionZ = -5, 
                this.camera.transform.localRotationEulerY = 180, this.camera.transform.localPositionY -= .5, 
                Laya.Tween.clearAll(this.camera.transform), Laya.Tween.to(this.camera.transform, {
                    localPositionZ: -3
                }, 1600);
                break;

              case 3:
                this.camera.transform.localPositionX = 0, this.camera.transform.localPositionZ = 5, 
                this.camera.transform.localPositionY = 1.294, this.camera.transform.localRotationEulerY = 0, 
                Laya.Tween.clearAll(this.camera.transform), Laya.Tween.to(this.camera.transform, {
                    localPositionZ: 4.12
                }, 1500);
            }
        }
        playeffRibbon() {
            this.gameRes_Checkpoint.playeffRibbon();
        }
        playEffYanChen(e) {
            this.gameRes_UserCar.playEffYanChen(e);
        }
        gameOver() {
            this.resetCamera(), Je.FishObj && Je.FishObj.removeSelf(), E.stopMusic_gameCarRun(), 
            Laya.timer.clearAll(this), this.gameNavigateCtrl && (this.gameNavigateCtrl.removeSelf(), 
            this.gameNavigateCtrl = null), this.gameRes_Checkpoint && (this.gameRes_Checkpoint.removeSelf(), 
            this.gameRes_Checkpoint = null), this.gameRes_UserCar && (this.gameRes_UserCar.removeSelf(), 
            this.gameRes_UserCar = null);
            for (var e = 0; e < this.rivalCarArr.length; ++e) this.rivalCarArr[e] && (this.rivalCarArr[e].removeSelf(), 
            this.rivalCarArr[e] = null);
            this.rivalCarArr = [], Laya.Resource.destroyUnusedResources();
        }
        resetCamera() {
            this.gameRes_Scene.addChild(this.camera), this.camera.transform.position = new Laya.Vector3(0, 1.294, 4.12), 
            this.camera.transform.rotationEuler = new Laya.Vector3(-3.2362380872248164, 20853541708209585e-21, 4013834165902333e-21);
        }
    }
    class Ze extends W.item.ChaPingItemUI {
        constructor(e) {
            super();
        }
        onAwake() {
            this.iconImg.on(Laya.Event.CLICK, this, this.onTry);
        }
        setData(e) {
            this.data = e || this.dataSource, this.updateData();
        }
        export() {}
        updateData() {
            this.data && (this.iconImg && (this.iconImg.skin = this.data.image), this.nameLabel && (this.nameLabel.text = this.data.displayTitle));
        }
        onTry() {
            this.data && dt.I.navigateToMiniProgram({
                eventName: this.data.type,
                subEventName: this.data.title,
                displayTitle: this.data.displayTitle,
                appId: this.data.appid,
                path: this.data.path,
                flowId: this.data.id,
                extraData: {
                    appId: this.data.targetAppid,
                    path: this.data.targetPath
                },
                exportType: this.exportType
            }, this.data.title, "小插屏", !1);
        }
    }
    class Qe extends W.prefabs.MisuseBtnPrefabsUI {
        constructor() {
            super(), this.nameStr = "", this.misUse = !1, this.type = 1, this.time = 0, this.callback = null, 
            this.showBannerHeight = 15, this.preventTwoClick = !1;
        }
        static addMisuseBtn(e, t, a = 1, i = !0, s = 0) {
            let n = new Qe();
            return n.centerX = 0,n.nameStr = t, n.y = Laya.stage.height - 200, n.misUse = i, 
            n.type = a, n.time = s, e.addChild(n), n;
        }
        onEnable() {
            this.btn_getAward.addComponentIntance(new Me(null, () => {
                this.onClick();
            }, m.GuanBi)), this.wuDian(), this.preventTwoClick = !1, this.btn_getAward.text = this.nameStr, 
            this.time > 0 ? (this.btn_getAward.visible = !1, Laya.timer.once(this.time, this, () => {
                this.btn_getAward.visible = !0;
            })) : this.btn_getAward.visible = !0, Y.shareType = k.bannerMistake;
        }
        wuDian() {
            if (1 == this.type && Re.hideBanner(), this.accidentNum = 0, this.accidentClickMax = 0, 
            this.showMisUseBtn()) this.accidentClickMax = O.randomInSection(2, 3), 2 == this.type && Laya.timer.once(2e3, this, this.wudianOver); else {
                this.accidentNum = this.accidentClickMax + 1;
                let e = Re.showBannerAd();
                this.y = e ? Laya.stage.height - e.getSize().height - this.showBannerHeight - this.btn_getAward.height : Laya.stage.height - this.btn_getAward.height - 230;
            }
        }
        showBanner() {
            let e = Re.showBannerAd();
            if (e) Laya.timer.once(Y.misuseDelayTime, this, () => {
                let t = Laya.stage.height - e.getSize().height - this.showBannerHeight - this.btn_getAward.height;
                Laya.Tween.to(this, {
                    y: t
                }, 100, Laya.Ease.strongOut, Laya.Handler.create(this, () => {}));
            }); else {
                let e = Re.showBannerAd();
                Laya.timer.once(Y.misuseDelayTime, this, () => {
                    this.y = e ? Laya.stage.height - e.getSize().height - this.showBannerHeight - this.btn_getAward.height : Laya.stage.height - this.btn_getAward.height - 230;
                });
            }
        }
        onClick() {
            1 == this.type && this.accidentNum++, this.accidentNum > this.accidentClickMax ? this.preventTwoClick || (this.preventTwoClick = !0, 
            this.callback && this.callback()) : this.accidentNum == this.accidentClickMax && this.showBanner();
        }
        wudianOver() {
            this.accidentNum = this.accidentClickMax + 1, this.showBanner();
        }
        static showchangguiwudian() {
            return console.log("banner:", z.isCanShare, z.mistakeRate), z.isCanShare;
        }
        onDisable() {
            P.bannerMistake = !1, Y.shareType = k.not;
        }
        showMisUseBtn() {
            let e = O.getRandom(100);
            return console.log("banner:", z.isCanShare, e, z.mistakeRate, "this.misUse", this.misUse), 
            P.showMisUse = z.isCanShare && e < z.mistakeRate, this.misUse;
        }
    }
    const et = {
        zhiJieLingQu: "Get",
        fangQi: "Again",
        queding: "Skip"
    };
    class tt extends W.prefabs.DanMuItemPrefabsUI {
        constructor() {
            super(), this.nameStr = "", this.delaytime = 0, this.time = 0, this.endpox = 0, 
            this.startpox = 0, this.startpoy = 0, this.callback = null;
        }
        static addMisuseBtn(e, t, a, i, s, n) {
            let r = new tt();
            return r.nameStr = t, r.delaytime = a, r.time = i, r.startpox = s, r.startpoy = n, 
            e.addChild(r), r;
        }
        init(e, t, a, i, s) {
            this.nameStr = e, this.delaytime = t, this.time = a, this.startpox = i, this.startpoy = s, 
            this.lab_name.text = this.nameStr, this.img_bg.width = this.lab_name.text.length * this.lab_name.fontSize + 40, 
            this.endpox = -this.img_bg.width, Laya.timer.once(this.delaytime, this, () => {
                Laya.Tween.to(this, {
                    x: this.endpox
                }, this.time);
            });
        }
        onEnable() {
            this.centerX = this.startpox, this.y = this.startpoy, this.time = this.time * (this.x / 1400), 
            this.lab_name.text = this.nameStr, this.img_bg.width = this.lab_name.text.length * this.lab_name.fontSize + 40, 
            this.endpox = 3 * -this.img_bg.width, Laya.timer.once(this.delaytime, this, () => {
                Laya.Tween.to(this, {
                    centerX: this.endpox
                }, this.time);
            });
        }
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this);
        }
    }
    class at extends W.dialogs.TryCarPanelUI {
        constructor(e) {
            super(), this._type = 1, this._type = e;
        }
        onAwake() {
            Re.hideBanner(), this.size(Laya.stage.width, Laya.stage.height), this.img_video_bg.addComponentIntance(new Me(null, () => {
                this.onVideo();
            }, m.TongYong)), this.img_share_bg.addComponentIntance(new Me(null, () => {
                this.onShare();
            }, m.TongYong)), this.btn_getAward.addComponentIntance(new Me(null, () => {
                this.oneAward();
            }, m.TongYong));
            let e = O.getRandom(100), t = e <= z.godcarrecommendedvideo && z.godcarrecommendedvideo > 0;
            console.log("godcarrecommendedvideo", e, z.godcarrecommendedvideo), this.img_video_bg.visible = t, 
            this.img_share_bg.visible = !t, Ae.getInstance().on(p.share_shibai, this.shareWin, this), 
            this.btn_getAward.visible = !1, Laya.timer.once(Y.TryPanelDelayTime, this, () => {
                this.btn_getAward.visible = !0;
            });
        }
        onEnable() {
            this.init();
        }
        init() {
            this.img_car.skin = "car/" + Te.carData(Y.TryCarId).carid + ".png", this.box_car_attr.getComponent(Be).initAttr(Y.TryCarId), 
            this.getDanMuPrefabs(), Laya.timer.loop(1e4, this, this.getDanMuPrefabs);
        }
        getDanMuPrefabs() {
            let e = Object.keys(ve.getTableMgr().getTable("game_name_config").getRawData()), t = O.getRandomArr(1, e.length - 1, 8), a = [], i = O.randomInSection(4, 6), s = 0;
            for (let e in t) {
                if (a.length >= i) break;
                let n = ve.getTableMgr().getTable("game_name_config").getData(t[e] + "", "name");
                if (-1 != a.indexOf(n)) continue;
                n += "：" + ve.getTableMgr().getTable("game_name_config").getData(t[e] + "", "dialogue");
                O.randomInSection(1, 5), Laya.stage.height, O.randomInSection(4, 8);
                let r = this.box_danmu.getChildAt(s);
                tt.addMisuseBtn(this.box_danmu, n, 0, 1e4, r.x, r.y), a.push(n), s++;
            }
        }
        onVideo() {
            // ae.getMgr().playVideo({
            //     success: () => {
            //         this.award();
            //     },
            //     fail: () => {},
            //     shareType: k.shibai
            // });
            platform.getInstance().showReward(
                ()=>{
                    //成功  发放奖励
                    this.award();
                });
               
        }
        onShare() {
            ae.getMgr().share({
                shareType: k.shibai
            });
        }
        shareWin() {
            (Y.showTimer - Y.hideTimer) / 1e3 >= Y.share ? this.award() : (Y.shareType = k.not, 
            $.showToast(Z.ShareFailTip));
        }
        oneAward() {
            $.closeDialog(this), 1 == this._type ? $.switchScene(P.LoadResScene) : 2 == this._type && (Y.get_checkpointNum <= 3 ? Re.newDot(Q.huidaozhujiemian.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 16 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.huidaozhujiemian_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 46 + "").replace("num", Y.get_checkpointNum + "")), 
            Re.showBannerAd(), $.switchScene(P.homeScene), $.showDialog(new st(3)));
        }
        award() {
            0 == Y.oldTryCarId && (Y.oldTryCarId = xe.UserUseCar), Y.isTryCarSate = 1, xe.UserUseCar = Y.TryCarId, 
            $.showToast(Z.ChangeMoto), Te.initCarData(xe.UserUseCar), this.oneAward();
        }
        onDisable() {
            Laya.timer.clearAll(this), Ae.getInstance().off(p.share_shibai, this.shareWin, this);
        }
    }
    class it extends W.dialogs.VictoryPanelUI {
        constructor() {
            super(), this.manyNum = 1;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), Re.hideBanner(), this.img_video_bg.addComponentIntance(new Me(null, () => {
                this.onVideo();
            }, m.TongYong)), this.img_share_bg.addComponentIntance(new Me(null, () => {
                this.onShare();
            }, m.TongYong));
            platform.getInstance().initList(this.appList);

            let e = O.getRandom(100), t = e <= z.checkoutthevideo && z.checkoutthevideo > 0;
            this.img_video_bg.visible = t, this.img_share_bg.visible = !t,  
            ut.addStage(this.box, !0), Ae.getInstance().on(p.share_chenggong, this.shareWin, this), 
            ae.getMgr().showInterstitialAd(0, function(e) {});
        }
        onEnable() {
            it.userRank <= 3 && Y.get_checkpointNum <= 3 && Re.newDot(Q.dijiguanjsjs.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 15 + "").replace("num", Y.get_checkpointNum + "")), 
            this.misuseBtn = Qe.addMisuseBtn(this, et.zhiJieLingQu, 2, 1 == z.bottomerrorswitch && z.isCanShare), 
            this.misuseBtn.callback = this.oneAward.bind(this), this.init();
        }
        init() {
            this.manyNum = 1, this.lab_gold_num.text = "+" + Y.checkpointGoldNum, this.img_point.rotation = 0;
        }
        onVideo() {
            let e = this;
            // ae.getMgr().playVideo({
            //     success: () => {
            //         e.box.getComponent(Pe).roll(), this.img_video_bg.visible = !1, this.img_share_bg.visible = !1, 
            //         this.misuseBtn.visible = !1;
            //     },
            //     fail: () => {},
            //     shareType: k.chenggong
            // });
            platform.getInstance().showReward(
                ()=>{
                    //成功  发放奖励
                    e.box.getComponent(Pe).roll(), this.img_video_bg.visible = !1, this.img_share_bg.visible = !1, 
                    this.misuseBtn.visible = !1;
                });
           
        }
        onShare() {
            ae.getMgr().share({
                shareType: k.chenggong
            });
        }
        shareWin() {
            (Y.showTimer - Y.hideTimer) / 1e3 >= Y.share ? (this.box.getComponent(Pe).roll(), 
            this.img_video_bg.visible = !1, this.img_share_bg.visible = !1, this.misuseBtn.visible = !1) : (Y.shareType = k.not, 
            $.showToast(Z.ShareFailTip));
        }
        oneAward() {
            let e = this, t = Re.getData("game_level_config", Y.get_checkpointNum.toString(), "endvideo", Y.endvideo);
            z.isCanShare && !z.isNewPlayer && 1 == t ? ae.getMgr().showVideoAd(0, function(t) {
                e.award();
            }.bind(this)) : e.award();
        }
        award() {
            xe.addGold(this.manyNum * Y.checkpointGoldNum), Laya.timer.once(1500, this, () => {
                $.closeDialog(this), Y.endlucky = Re.getData("game_level_config", Y.get_checkpointNum.toString(), "endlucky", Y.endlucky), 
                Y.TryCarId = Te.NotunlockGunId(), O.getRandom(100) <= Y.endlucky && Y.TryCarId > 0 ? $.showDialog(new at(2)) : (Y.get_checkpointNum <= 3 ? Re.newDot(Q.huidaozhujiemian.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 16 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.huidaozhujiemian_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 46 + "").replace("num", Y.get_checkpointNum + "")), 
                Re.showBannerAd(), $.switchScene(P.homeScene), $.showDialog(new st(3)));
            });
        }
        onDisable() {
            Ae.getInstance().off(p.share_chenggong, this.shareWin, this);
        }
    }
    it.userRank = 0;
    class st extends W.dialogs.ChaPingPanelUI {
        constructor(e, t = !1) {
            super(), this.chapingType = e, this.isshowGameOverPanel = t;
        }
        onEnable() {
            this.size(Laya.stage.width, Laya.stage.height), this.btn_return.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), this.img_game.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), Y.chapingReturn && z.isCanShare ? Laya.timer.once(Y.chapingDelayTime, this, () => {
                this.btn_return.visible = !0, this.img_game.visible = !0, Laya.timer.once(Y.chapingBannerDelayTime, this, () => {
                    Re.showBannerAd(), Laya.timer.once(Y.chapingBannerCloseTime, this, () => {
                        Re.hideBanner();
                    });
                });
            }) : Laya.timer.once(Y.chapingDelayTime, this, () => {
                this.btn_return.visible = !0;
            }), Re.hideBanner(), Le.Instance().getFlow("插屏", Laya.Handler.create(this, e => {
                this._recFlowData = e;
                try {
                    this._recFlowData.applets.length > 0 && this.init();
                } catch (e) {}
            }));
            this.onRetuen();
            this.visible = false;
        }
        init() {
            let e = [], t = O.getRandomArr(0, this._recFlowData.applets.length - 1, this._recFlowData.applets.length);
            for (let a = 0; a < t.length; a++) {
                const i = t[a];
                e.push(this._recFlowData.applets[i]);
            }
            this.list_chaPing.hScrollBarSkin = "", this.list_chaPing.itemRender = Ze, this.list_chaPing.array = e, 
            this.list_chaPing.renderHandler = new Laya.Handler(this, this.onChaPingItem), this.list_chaPing.refresh(), 
            this.m_type = 0, Laya.timer.loop(20, this, this.scrollerCall);
        }
        onChaPingItem(e, t) {
            e.setData();
        }
        scrollerCall() {
            0 == this.m_type ? (this.list_chaPing.scrollBar.value += 1, this.list_chaPing.scrollBar.value >= this.list_chaPing.scrollBar.max && (this.m_type = 1)) : 1 == this.m_type && (this.list_chaPing.scrollBar.value -= 1, 
            this.list_chaPing.scrollBar.value <= 0 && (this.m_type = 0));
        }
        onRetuen() {
            $.closeDialog(this);
        }
        onDisable() {
            1 == this.chapingType ? $.showDialog(new it()) : 2 == this.chapingType ? (Re.newDot(Q.dengluchaping), 
            Re.newDot(Q.zhujiemian), Re.showBannerAd()) : 3 == this.chapingType ? Re.showBannerAd() : 4 != this.chapingType || P.showMisUse ? 5 == this.chapingType ? Ae.getInstance().emit(p.opencountDown, null) : 6 == this.chapingType && $.switchScene(P.LoadResScene) : Re.showBannerAd(), 
            this.btn_return.off(Laya.Event.MOUSE_DOWN, this, this.onRetuen), Laya.timer.clearAll(this);
        }
    }
    class nt extends W.item.GameCentreItemUI {
        constructor(e) {
            super(), this.biaoqian = "游戏中心";
        }
        onAwake() {
            this.iconImg.on(Laya.Event.CLICK, this, this.onTry);
        }
        setData(e) {
            this.data = e || this.dataSource, this.updateData();
        }
        setbiaoqian(e) {
            this.biaoqian = e;
        }
        export(e) {
            this.exportType = e;
        }
        updateData() {
            this.data && (this.iconImg && (this.iconImg.skin = this.data.image), this.nameLabel && (this.nameLabel.text = this.data.displayTitle));
        }
        onTry() {
            this.data && dt.I.navigateToMiniProgram({
                eventName: this.data.type,
                subEventName: this.data.title,
                displayTitle: this.data.displayTitle,
                appId: this.data.appid,
                path: this.data.path,
                flowId: this.data.id,
                extraData: {
                    appId: this.data.targetAppid,
                    path: this.data.targetPath
                },
                exportType: this.exportType
            }, this.data.title, this.biaoqian, !1);
        }
    }
    class rt extends W.dialogs.FailPanelUI {
        constructor() {
            super(), this.manyNum = 1;
        }
        onAwake() {
            Re.hideBanner(), this.size(Laya.stage.width, Laya.stage.height), this.img_video_bg.addComponentIntance(new Me(null, () => {
                this.onVideo();
            }, m.TongYong)), this.img_share_bg.addComponentIntance(new Me(null, () => {
                this.onShare();
            }, m.TongYong)), this.btn_getAward.addComponentIntance(new Me(null, () => {
                this.oneAward();
            }, m.TongYong));
            let e = O.getRandom(100), t = e <= z.recommendvehicletogetvideo && z.recommendvehicletogetvideo > 0;
            this.img_video_bg.visible = t, this.img_share_bg.visible = !t, Ae.getInstance().on(p.share_shibai, this.shareWin, this), 
            this.btn_getAward.visible = !1, Laya.timer.once(Y.TryPanelDelayTime, this, () => {
                this.btn_getAward.visible = !0;
            });
        }
        onEnable() {
            this.init();
        }
        getDanMuPrefabs() {
            let e = Object.keys(ve.getTableMgr().getTable("game_name_config").getRawData()), t = O.getRandomArr(1, e.length - 1, 8), a = [], i = O.randomInSection(4, 6), s = 0;
            for (let e in t) {
                if (a.length >= i) break;
                let n = ve.getTableMgr().getTable("game_name_config").getData(t[e] + "", "name");
                if (-1 != a.indexOf(n)) continue;
                n += "：" + ve.getTableMgr().getTable("game_name_config").getData(t[e] + "", "dialogue");
                O.randomInSection(1, 5), Laya.stage.height, O.randomInSection(4, 8);
                let r = this.box_danmu.getChildAt(s);
                tt.addMisuseBtn(this.box_danmu, n, 0, 1e4, r.x, r.y), a.push(n), s++;
            }
        }
        init() {
            this.manyNum = 1, this.img_car.skin = "car/" + Te.carData(Y.unlockCarId).carid + ".png", 
            console.log("this.img_car.skin", this.img_car.skin), this.box_car_attr.getComponent(Be).initAttr(Y.unlockCarId);
        }
        onVideo() {
            platform.getInstance().showReward(
                ()=>{
                    //成功  发放奖励
                    this.award();
                });
               
            // this.award();
            // by wangshuo
            // ae.getMgr().playVideo({
            //     success: () => {
            //         this.award();
            //     },
            //     fail: () => {},
            //     shareType: k.not
            // });
        }
        onShare() {
            ae.getMgr().share({
                shareType: k.shibai
            });
        }
        shareWin() {
            (Y.showTimer - Y.hideTimer) / 1e3 >= Y.share ? this.award() : (Y.shareType = k.not, 
            $.showToast(Z.ShareFailTip));
        }
        oneAward() {
            $.closeDialog(this), Y.get_checkpointNum <= 3 ? Re.newDot(Q.huidaozhujiemian.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 16 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.huidaozhujiemian_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 46 + "").replace("num", Y.get_checkpointNum + "")), 
            Re.showBannerAd(), $.switchScene(P.homeScene), $.showDialog(new st(3));
        }
        award() {
            xe.setUseCarIndex(Y.unlockCarId), xe.setUserHaveCarArr(Y.unlockCarId), $.showToast(Z.ChangeLuckyMoto), 
            this.oneAward();
        }
        onDisable() {
            Ae.getInstance().off(p.share_shibai, this.shareWin, this), Laya.timer.clearAll(this);
        }
    }
    class ot extends W.dialogs.PromotionPanelUI {
        constructor() {
            super();
        }
        onAwake() {
            Re.hideBanner(), Y.get_checkpointNum <= 3 && Re.newDot(Q.dijiguanjspm.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 14 + "").replace("num", Y.get_checkpointNum + "")), 
            this.init(), Laya.timer.once(240, this, () => {
                this.box_rank_1.visible = !0, E.playEffect(m.TanPaiMing), Laya.timer.once(230, this, () => {
                    this.box_rank_2.visible = !0, E.playEffect(m.TanPaiMing), Laya.timer.once(220, this, () => {
                        this.box_rank_3.visible = !0, E.playEffect(m.TanPaiMing), Laya.timer.once(210, this, () => {
                            this.box_rank_4.visible = !0, E.playEffect(m.TanPaiMing), Laya.timer.once(200, this, () => {
                                this.box_rank_5.visible = !0, E.playEffect(m.TanPaiMing), Laya.timer.once(200, this, () => {
                                    this.misuseBtn = Qe.addMisuseBtn(this, et.queding, 2, 1 == z.bottomerrorswitch && z.isCanShare),
                                    this.misuseBtn.callback = this.onConfirm.bind(this), ut.addStage(this.box, !0), 
                                    ae.getMgr().showInterstitialAd(0, function(e) {});
                                });
                            });
                        });
                    });
                });
            }), Y.isTryCarSate = 0;
        }
        
        init() {
            let e = 0;
            for (let t = 1; t <= P.rankArr.length; t++) {
                let a = P.rankArr[t - 1];
                this[`box_rank_${t}`].getComponent(Ue).updateRank(t, a.name, a.isUser), a.isUser && (this.userRank = t), 
                e += this[`box_rank_${t}`].height + 10;
            }
            this.img_title.skin = "";
            this.img_title.skin = this.userRank <= 3 ? "gameui/shengli.png" : "gameui/shibai.png", 
            Y.checkpointGoldNum = Re.getData("game_level_config", Y.get_checkpointNum.toString(), "upgold", 1028) + Y.get_goldNum * Re.getData("game_level_config", Y.get_checkpointNum.toString(), "eatgold", 1), 
            this.userRank <= 3 && xe.setCheckpointNum();
            platform.getInstance().initList(this.appList);

        }
        onConfirm() {
            if ($.closeDialog(this), this.userRank <= 3) $.showDialog(new it()); else {
                let e = Te.NotunlockGunData();
                if (console.log("", e), Y.unlockCarId = 0, e) for (let t = 0; t < e.length; t++) if (Number(e[t]) > xe.UserUseCar) {
                    Y.unlockCarId = Number(e[t]);
                    break;
                }
                console.log("", Y.unlockCarId), 0 == Y.unlockCarId ? (Y.get_checkpointNum <= 3 ? Re.newDot(Q.huidaozhujiemian.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 16 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.huidaozhujiemian_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 46 + "").replace("num", Y.get_checkpointNum + "")), 
                Re.showBannerAd(), $.switchScene(P.homeScene), $.showDialog(new st(3))) : $.showDialog(new rt());
            }
        }
        onDisable() {}
    }
    class ht extends W.dialogs.ChestCoinUIUI {
        constructor(e) {
            super(), this.clickNum = 0, this.curNum = 0, this.type = e;
        }
        onEnable() {
            console.log(""), Re.showBannerAd(), this.size(Laya.stage.width, Laya.stage.height), 
            this.btn.addComponentIntance(new Me(null, () => {
                this.onBtn();
            }, m.TongYong));
            var e = Re.getData("game_level_config", xe.CheckpointNum.toString(), "freegold", 1);
            this.gold = e, this.gold_Lab.text = "x" + this.gold, this.misuseBtn = Qe.addMisuseBtn(this, et.queding, 2), 
            this.misuseBtn.callback = this.onReceive.bind(this);
        }
        onBtn() {
            xe.addGold(this.gold), Ae.getInstance().emit(p.updataShowGoldPower, null), Ae.getInstance().emit(p.goldGetTween, null), 
            Re.isHaveBanner() ? $.showDialog(new lt(this.type)) : $.showToast(Z.NoBaoXiang), 
            $.closeDialog(this);
        }
        onReceive() {
            Re.hideBanner(), xe.addGold(this.gold), Ae.getInstance().emit(p.updataShowGoldPower, null), 
            Ae.getInstance().emit(p.goldGetTween, null), this.closeChest();
        }
        closeChest() {
            Re.hideAllBanner(), $.closeDialog(this), this.type == R.before ? z.beforeSmallinterstitial ? $.showDialog(new st(6)) : $.switchScene(P.LoadResScene) : this.type == R.after ? $.showDialog(new ot()) : this.type == R.gameing ? Ae.getInstance().emit(p.bx_gaming_close, null) : this.type == R.defeatAfter && $.showDialog(new st(3)), 
            console.log("");
        }
    }
    class lt extends W.dialogs.ChestDialogUI {
        constructor(e) {
            super(), this.clickNum = 0, this.curNum = 0, this.oneIsVideo = !1, this.proValue = 0, 
            lt.I = this, this.type = e;
        }
        onEnable() {
            console.log(""), this.size(Laya.stage.width, Laya.stage.height), this.btn_chest.addComponentIntance(new Me(null, () => {
                this.onAddProValue();
            }, m.TongYong)), Re.hideBanner(), this.init(), Re.showBannerAd_baoxiang(!1, 0), 
            this.down(), wx.onShow(lt.closeChest);
        }
        down() {
            Laya.Tween.to(this.jiantou, {
                y: this.jiantou.y + 50
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this.up();
            }));
        }
        up() {
            Laya.Tween.to(this.jiantou, {
                y: this.jiantou.y - 50
            }, 300, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                this.down();
            }));
        }
        init() {
            if (this.proValue = 0, this.oneIsVideo = lt.showVideo(this.type), !this.oneIsVideo) {
                let e = Y.bxClickNum.split("-"), t = Number(e[0]), a = Number(e[1]);
                this.clickNum = O.randomInSection(t, a), this.progress = Y.bxAddPro * this.clickNum, 
                console.log(":", this.progress), Laya.timer.loop(10, this, this.proPlay);
            }
        }
        onAddProValue() {
            this.oneIsVideo ? this.playVideo() : (this.curNum++, this.proValue += Y.bxAddPro, 
            Laya.Tween.to(this.pro, {
                value: this.proValue
            }, 1));
        }
        playVideo() {
            ae.getMgr().showVideoAd(0, function(e) {
                switch (e.result) {
                  case o.succeed:
                    lt.I.award(), lt.closeChest();
                    break;

                  default:
                    lt.closeChest();
                }
            }.bind(this));
        }
        proPlay() {
            this.proValue < this.progress && this.proValue > 0 ? (this.proValue -= Y.bxSubPro, 
            this.pro.value = this.proValue) : (this.proValue > this.progress || this.clickNum <= this.curNum) && (this.proValue = 0, 
            this.curNum = 0, Re.showBannerAd_baoxiang(!0, 2e3)), this.pro.value <= 0 && (this.curNum = 0);
        }
        onDisable() {
            Laya.timer.clear(this, this.proPlay), Y.shareType = k.not;
        }
        award() {
            this.type, R.before;
        }
        static closeChest() {
            console.log(""), wx.offShow(lt.closeChest), $.showDialog(new ht(lt.I.type)), 
            $.closeDialog(lt.I);
        }
        static showChest(e) {
            if (!Re.isHaveBanner()) return console.log(""), !1;
            switch (e) {
              case R.before:
                {
                    let e = O.getRandom(100);
                    return console.log(":", z.isCanBeforeBxMistake, e, z.beforeBxMistakeRate), 
                    z.isCanBeforeBxMistake && e < z.beforeBxMistakeRate;
                }

              case R.gameing:
              case R.after:
              case R.defeatAfter:
                {
                    let e = O.getRandom(100);
                    return console.log(":", z.isCanAfterBxMistake, e, z.afterBxMistakeRate), 
                    z.isCanAfterBxMistake && e < z.afterBxMistakeRate;
                }

              default:
                return z.isCanBxMistake;
            }
        }
        static showVideo(e) {
            switch (e) {
              case R.before:
                {
                    let e = O.getRandom(100);
                    return console.log(":", e, z.beforeBxMistakeVideoRate), e < z.beforeBxMistakeVideoRate;
                }

              case R.gameing:
              case R.after:
                {
                    let e = O.getRandom(100);
                    return console.log(":", e, z.afterBxMistakeVideoRate), e < z.afterBxMistakeVideoRate;
                }

              default:
                return !1;
            }
        }
    }
    class ct extends W.dialogs.GameCentrePanelUI {
        constructor(e) {
            super(), this.showType = 2, this.showType = e;
        }
        onEnable() {
            this.size(Laya.stage.width, Laya.stage.height), this.btn_return.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), this.btn_return.visible = !1, Re.hideBanner(), this.img_game.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), Ae.getInstance().on(p.ExportFail, this.showBannerAd, this), Le.Instance().getFlow("", Laya.Handler.create(this, e => {
                this.listData = e;
                try {
                    this.listData.applets.length > 0 && this.initList();
                } catch (e) {}
            }));
            this.visible = false;
             this.onRetuen();
        }
        initList() {
            let e = [], t = O.getRandomArr(0, this.listData.applets.length - 1, this.listData.applets.length);
            for (let a = 0; a < t.length; a++) {
                const i = t[a];
                e.push(this.listData.applets[i]);
            }
            this.list_gameCentre.hScrollBarSkin = "", this.list_gameCentre.itemRender = nt, 
            this.list_gameCentre.array = e, this.list_gameCentre.renderHandler = new Laya.Handler(this, this.onUpdateItem), 
            this.list_gameCentre.refresh(), this.m_type = 0, Laya.timer.loop(20, this, this.scrollerCall), 
            z.randomgameswitch ? Laya.timer.frameOnce(1, this, this.showExport) : this.showBannerAd();
        }
        onUpdateItem(e, t) {
            e.setData(), 4 == this.showType ? e.setbiaoqian("爆破模式") : e.setbiaoqian("游戏中心");
        }
        scrollerCall() {
            0 == this.m_type ? (this.list_gameCentre.scrollBar.value += 1, this.list_gameCentre.scrollBar.value >= this.list_gameCentre.scrollBar.max && (this.m_type = 1)) : 1 == this.m_type && (this.list_gameCentre.scrollBar.value -= 1, 
            this.list_gameCentre.scrollBar.value <= 0 && (this.m_type = 0));
        }
        showExport() {
            var e = this.list_gameCentre.getChildAt(0);
            let t = O.getRandomArr(0, e.numChildren - 1, 1)[0];
            var a = e.getChildAt(t);
            a && a.onTry();
        }
        showBannerAd() {
            console.log("", z.gamecenterlateswitch, Y.chapingBannerDelayTime, Y.chapingBannerCloseTime), 
            1 == z.gamecenterlateswitch && z.isCanShare && Laya.timer.once(Y.chapingBannerDelayTime, this, () => {
                Re.showBannerAd(), Laya.timer.once(Y.chapingBannerCloseTime, this, () => {
                    Re.hideBanner();
                });
            });
        }
        onRetuen() {
            $.closeDialog(this);
        }
        onDisable() {
            1 == this.showType ? lt.showChest(R.after) ? (Y.get_checkpointNum <= 3 && Re.newDot(Q.dijiguanjsbx.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 13 + "").replace("num", Y.get_checkpointNum + "")), 
            $.showDialog(new lt(R.after))) : $.showDialog(new ot()) : 2 == this.showType ? $.showDialog(new st(3)) : 3 == this.showType ? $.showDialog(new st(4)) : 4 == this.showType && Re.showBannerAd(), 
            Ae.getInstance().off(p.ExportFail, this.showBannerAd, this), Laya.timer.clearAll(this);
        }
    }
    class dt {
        constructor() {
            this.m_selectbannerList = [], this.m_bannerTimeOut = 0, this.isInitVideoAd = !1, 
            this._video = null, this._callback = null, this._dotType = null;
        }
        static get I() {
            return dt.instance = dt.instance || new dt();
        }
        init(e) {
            this.wx = e, this.isAuthorize = !1, this.m_selectbannerList = [], Laya.Browser.onMiniGame && (this.onShow(), 
            this.onHide(), this.showShareMenu(), this.authorize(), this.systemInfo = e.getSystemInfoSync(), 
            this.registerUpdateEvents());
        }
        registerUpdateEvents() {
            if ("function" == typeof wx.getUpdateManager) {
                const e = wx.getUpdateManager();
                e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function() {
                    wx.showModal({
                        title: "",
                        content: "",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function() {
                    wx.showToast({
                        title: "",
                        icon: "none"
                    });
                });
            }
        }
        getLaunchOptionsSync() {
            return wx.getLaunchOptionsSync();
        }
        isWx() {
            return !!Laya.Browser.onMiniGame;
        }
        isIphoneX() {
            return !!this.isWx() && 0 == this.systemInfo.model.indexOf("iPhone X");
        }
        authorize() {
            wx.getSetting({
                success: e => {
                    var t = e.authSetting;
                    !0 === t["scope.userInfo"] ? (this.isAuthorize = !0, this.getUserInfo(null)) : !1 === t["scope.userInfo"] && (this.isAuthorize = !1, 
                    console.log(""));
                },
                fail: e => {
                    console.log(":", e);
                }
            });
        }
        getUserInfo(e, t = null) {
            wx.getUserInfo({
                withCredentials: !1,
                lang: "zh_CN",
                success: function(t) {
                    P.userInfo = t, P.userInfo.encryptedData = t.encryptedData, P.userInfo.iv = t.iv, 
                    e && e.runWith(t);
                },
                fail: function() {
                    t && t.run();
                }
            });
        }
        wxAccredit(e, t = !0) {
            if (wx.createUserInfoButton) {
                console.log("");
                var a = wx.createUserInfoButton({
                    type: "image",
                    image: U.getMgr().getUrl("res") + "/resources/kong.png",
                    style: {
                        left: 0,
                        top: 0,
                        width: Laya.stage.width,
                        height: Laya.stage.height
                    }
                });
                a.onTap(function(i) {
                    console.log("", i), i.userInfo ? (a.hide(), dt.I.isAuthorize = !0, P.userInfo = i.userInfo, 
                    P.userInfo.encryptedData = i.encryptedData, P.userInfo.iv = i.iv, e && e(P.userInfo)) : (t && a.hide(), 
                    e && e(null));
                }.bind(this));
            } else console.log(""), e && e(null);
        }
        onHide() {
            wx.onHide(function() {
                try {
                    je.I.stopGameNavigate();
                } catch (e) {}
                Y.hideTimer = O.getTimestamp();
            });
        }
        onShow() {
            wx.onShow(function(e) {
                try {
                    je.I.openGameNavigate();
                } catch (e) {}
                switch (Y.showTimer = O.getTimestamp(), console.log("" + (Y.showTimer - Y.hideTimer) / 1e3, Y.showTimer), 
                console.log("TableConfig.shareType", Y.shareType), Y.isKefuReward && Ae.getInstance().emit(p.share_kefuReward, null), 
                Y.shareType) {
                  case k.carport:
                    Ae.getInstance().emit(p.share_carport, null);
                    break;

                  case k.shibai:
                    Ae.getInstance().emit(p.share_shibai, null);
                    break;

                  case k.chenggong:
                    Ae.getInstance().emit(p.share_chenggong, null);
                    break;

                  case k.tili:
                    Ae.getInstance().emit(p.share_tili, null);
                    break;

                  case k.lixian:
                    Ae.getInstance().emit(p.share_lixian, null);
                    break;

                  case k.glodGift:
                    Ae.getInstance().emit(p.share_glodGift, null);
                    break;

                  case k.bannerMistake:
                    Ae.getInstance().emit(p.banner_mistake, null);
                }
               te.playMusic(P.musicType);

                
            });
        }
        vibrate(e, t) {
            e ? wx.vibrateLong({
                success: () => {
                    t && t({
                        success: !0
                    });
                },
                fail: () => {
                    t && t({
                        success: !1
                    });
                }
            }) : wx.vibrateShort({
                success: () => {
                    t && t({
                        success: !0
                    });
                },
                fail: () => {
                    t && t({
                        success: !1
                    });
                }
            });
        }
        checkIsUserAdvisedToRest(e, t = null, a = null) {
            this.wx.checkIsUserAdvisedToRest({
                todayPlayedTime: e,
                success: function(e) {
                    t && t.runWith(e);
                },
                fail: function() {
                    a && a.run();
                }
            });
        }
        getMenuButtonBoundingClientRect(e, t = !1) {
            if (!this.isWx() || !z.isCanExit) return;
            let a = wx.getMenuButtonBoundingClientRect(), i = new Laya.Image();
            i.skin = "panelUI/public_out.png", i.x = this.getBannerHeight(a.left), i.y = this.getBannerHeight(a.bottom) + 15, 
            i.on(Laya.Event.CLICK, this, this.openGameCentre, [ t ]), e.addChild(i);
        }
        openGameCentre(e) {
            $.showDialog(new ct(2));
        }
        createUserInfoButton(e, t, a, i, s, n = !1, r = "zh_CN") {
            var o = wx.createUserInfoButton({
                type: e,
                text: t,
                imgUrl: a,
                style: i,
                withCredentials: n,
                lang: r
            });
            o.onTap(e => {
                s && s.runWith(e), o.destroy();
            }), o.show();
        }
        showShareMenu(e = !1, t = null, a = null) {
            this.wx.showShareMenu({
                withShareTicket: e
            });
        }
        hideShareMenu(e = null, t = null, a = null) {
            wx.hideShareMenu({
                success: () => {
                    e && e.run();
                },
                fail: () => {
                    t && t.run();
                },
                complete: () => {
                    a && a.run();
                }
            });
        }
        onShareAppMessage(e, t = "", a = "") {
            this.isWx() && wx.onShareAppMessage(() => ({
                title: e,
                imageUrl: t,
                query: a
            }));
        }
        onShare(e) {
            if (!this.isWx()) return "没在微信";
            let t = O.randomInSection(1, 2), a = ve.getTableMgr().getTable("game_share_config");
            return e ? (this.shareAppMessage(a.getData(t - 1, "desc"), U.getMgr().getUrl("res") + "/share/share_" + t + ".jpg", "InvitateID=" + z.inviteCode), 
            !0) : (console.log(z.isCanShare + "分享"), !!z.isCanShare && (this.shareAppMessage(a.getData(t - 1, "desc"), U.getMgr().getUrl("res") + "/share/share_" + t + ".jpg", "InvitateID=" + z.inviteCode), 
            !0));
        }
        shareAppMessage(e, t = "", a = "", i = null) {
            wx.shareAppMessage({
                title: e,
                imageUrl: t,
                query: a,
                success: function(e) {
                    i && i.runWith(0);
                },
                fail: function() {
                    i && i.runWith(-1);
                }
            });
        }
        navigateToMiniProgram(e, t = "", a, i) {
            this.isWx() && wx.navigateToMiniProgram({
                appId: e.appId,
                path: e.path,
                extraData: e.extraData,
                success: () => {
                    e.success && e.success(), Le.Instance().reportCustomEvent("", e.subEventName), 
                    Le.Instance().reportCustomEvent("", e.displayTitle), Le.Instance().reportCustomEvent(a, e.displayTitle), 
                    Le.Instance().reportCustomEvent(a, e.flowId), console.log(`==>${a}:${e.displayTitle}`);
                },
                fail: () => {
                    e.fail && e.fail(), i && $.showDialog(new ct(2)), Ae.getInstance().emit(p.ExportFail, null);
                }
            });
        }
        destroyBannerAd() {
            this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
        }
        initBannerAd() {
            Laya.Browser.onMiniGame && (this.m_bannerList || (this.m_bannerList = [], this.createBanner(!0)));
        }
        showBannerAd(e = !1, t = !1, a = !1) {
            if (Laya.Browser.onMiniGame) {
                if (this.m_bannerAd && this.m_bannerAd.hide(), 0 == this.m_bannerList.length) console.log(""), 
                this.createBanner(!0); else if (e) {
                    if (this.m_bannerAd && this.m_bannerAd.hide(), this.m_bannerAd = O.randomArray(this.m_bannerList), 
                    this.m_bannerAd) return this.m_bannerAd.show(), this.m_bannerAd;
                } else if (this.m_bannerList.length > 0 && a) {
                    if (this.m_bannerAd && this.m_bannerAd.hide(), this.m_bannerAd = O.randomArray(this.m_bannerList), 
                    this.m_bannerAd) return a ? Laya.timer.once(1e3, this, this.delayShowBannerAd) : this.m_bannerAd.show(), 
                    this.m_bannerAd;
                } else if (this.m_bannerList.length > 0 && this.m_bannerTimeOut < 5) console.log("创建广告  ", this.m_bannerList.length), 
                this.createBanner(!0, !0); else if (this.m_bannerAd && this.m_bannerAd.hide(), this.m_bannerAd = O.randomArray(this.m_bannerList), 
                this.m_bannerAd) return a ? Laya.timer.once(1e3, this, this.delayShowBannerAd) : this.m_bannerAd.show(), 
                this.m_bannerAd;
                return null;
            }
        }
        delayShowBannerAd() {
            console.log(""), this.m_bannerAd.show();
        }
        hideBannerAd() {
            Laya.timer.clear(this, this.delayShowBannerAd), this.m_bannerAd && this.m_bannerAd.hide();
        }
        getBannerHeight(e) {
            return Math.floor(Laya.stage.height / this.systemInfo.screenHeight * e);
        }
        createBanner(e, t) {
            let a = this, i = (this.systemInfo.screenWidth, wx.createBannerAd({
                adUnitId: "adunit-e98b081db89bad1b",
                style: {
                    left: (this.systemInfo.screenHeight - 300) / 2,
                    top: this.systemInfo.screenHeight,
                    width: 300
                }
            }));
            this.m_bannerTimeOut++, e && (console.log("createBanner", e, " ", t), this.m_bannerAd = i), 
            t && i && i.show(), i.onError(e => {
                console.log("", a.m_bannerList.length);
            }), i.onResize(e => {
                i.style.top = this.systemInfo.screenHeight - e.height, i.style.height = e.height, 
                i.style.left = (this.systemInfo.screenWidth - e.width) / 2, a.m_bannerList.push(i), 
                a.m_bannerList.length >= 5 && console.log(""), console.log("", a.m_bannerList.length);
            });
        }
        showSelectBannerAd(e) {
            if (Laya.Browser.onMiniGame) {
                if (this.m_selectBanner && this.m_selectBanner.hide(), this.m_selectbannerList.length < 2) console.log("  ", this.m_selectbannerList.length), 
                this.selectCreateBanner(!0, e); else if (this.m_selectBanner && this.m_selectBanner.hide(), 
                this.m_selectBanner = O.randomArray(this.m_selectbannerList), this.m_selectBanner) return this.m_selectBanner.show(), 
                this.m_selectBanner;
                return this.m_selectBanner;
            }
        }
        selectCreateBanner(e, t) {
            let a = this, i = (this.systemInfo.screenWidth, wx.createBannerAd({
                adUnitId: "adunit-e98b081db89bad1b",
                style: {
                    left: (this.systemInfo.screenHeight - 300) / 2,
                    top: this.systemInfo.screenHeight,
                    width: 300
                }
            }));
            e && i && (this.m_selectBanner = i, i.show()), i.onError(e => {
                console.log("", a.m_selectbannerList.length);
            }), i.onResize(e => {
                i.style.top = this.systemInfo.screenHeight - e.height, i.style.height = e.height, 
                i.style.left = t, a.m_selectbannerList.push(i), a.m_selectbannerList.length >= 2 && console.log(""), 
                console.log("", a.m_selectbannerList.length);
            });
        }
        hideSelectBannerAd() {
            Laya.timer.clear(this, this.delayShowBannerAd), this.m_selectBanner && this.m_selectBanner.hide();
        }
        showVideoAd(e, t) {
            if (this._callback = e, this._dotType = t, !this.isWx()) return this._callback && this._callback(w.ended);
            if (this.isInitVideoAd) return;
            this.isInitVideoAd = !0;
            let a = w.none;
            null == this._video && (this._video = wx.createRewardedVideoAd({
                adUnitId: "adunit-f1974a3d5005e502"
            }), this._video.onError(e => {
                this.isInitVideoAd = !1, this._callback && this._callback(a);
            }), this._video.onClose(e => {
                e && e.isEnded || void 0 === e ? (e = w.ended, Le.Instance().reportCustomEvent(Q.Video, this._dotType)) : e = w.goon, 
                this.isInitVideoAd = !1, this._callback && this._callback(e);
            })), this._video.load().then(() => {
                this.isInitVideoAd = !1, this._video.show();
            });
        }
        showModal(e, t) {
            wx.showModal({
                title: "",
                content: "",
                showCancel: !0,
                cancelColor: "#910202",
                cancelText: "",
                confirmColor: "#05AA05",
                confirmText: "",
                success: a => {
                    a.confirm && this.showVideoAd(e, t), a.cancel;
                },
                fail: () => {},
                complete: () => {}
            });
        }
        showToast(e) {
            wx.showToast({
                title: e,
                icon: "none",
                image: "",
                duration: 1500,
                success: () => {},
                fail: () => {},
                complete: () => {}
            });
        }
    }
    class gt extends W.item.ExportItemUI {
        constructor(e) {
            super(), this.isPopupGameCentre = !1, this.exportName = "";
        }
        onAwake() {
            this.iconImg.on(Laya.Event.CLICK, this, this.onTry);
        }
        setData(e) {
            this.data = e || this.dataSource, this.updateData();
        }
        export(e, t) {
            this.isPopupGameCentre = e, this.exportName = t;
        }
        updateData() {
            this.data && (this.iconImg && (this.iconImg.skin = this.data.image), this.nameLabel && (this.nameLabel.text = this.data.displayTitle));
        }
        onTry() {
            this.data && dt.I.navigateToMiniProgram({
                eventName: this.data.type,
                subEventName: this.data.title,
                displayTitle: this.data.displayTitle,
                appId: this.data.appid,
                path: this.data.path,
                flowId: this.data.id,
                extraData: {
                    appId: this.data.targetAppid,
                    path: this.data.targetPath
                },
                exportType: this.exportType
            }, this.data.title, this.exportName, this.isPopupGameCentre);
        }
    }
    class ut extends W.prefabs.ExportPrefabsUI {
        constructor() {
            super(), this.exiptType = 0, this.isPopupGameCentre = !1;
        }
        static addStage(e, t) {
            let a = new ut();
            a.centerX = 0, a.centerY = 0, a.zOrder = -1, a.isPopupGameCentre = t, a.exportPre = a, 
            e.addChild(a.exportPre);
        }
        onAwake() {
            let e = this;
            Le.Instance().getFlow("对联", Laya.Handler.create(this, t => {
                if (this.ExportData = t, console.log("this.ExportData.applets", this.ExportData.applets), 
                this.ExportData.applets.length > 0) try {
                    this.init();
                } catch (e) {} else e.removeSelf();
            }));
            this.visible =false;
        }
        init() {
            let e, t, a = [], i = [];
            e = O.getRandomArr(0, this.ExportData.applets.length - 1, this.ExportData.applets.length);
            for (let t = 0; t < e.length; t++) {
                const i = e[t];
                a.push(this.ExportData.applets[i]);
            }
            t = O.getRandomArr(0, this.ExportData.applets.length - 1, this.ExportData.applets.length);
            for (let e = 0; e < t.length; e++) {
                const a = t[e];
                i.push(this.ExportData.applets[a]);
            }
            this.list_1.vScrollBarSkin = "", this.list_1.itemRender = gt, this.list_1.array = a, 
            this.list_1.renderHandler = new Laya.Handler(this, this.onUpdateItem), this.list_1.refresh(), 
            this.list_2.vScrollBarSkin = "", this.list_2.itemRender = gt, this.list_2.array = i, 
            this.list_2.renderHandler = new Laya.Handler(this, this.onUpdateItem), this.list_2.refresh(), 
            this.m_type_1 = 0, this.m_type_2 = 0, Laya.timer.loop(20, this, this.scrollerCall);
        }
        scrollerCall() {
            0 == this.m_type_1 ? (this.list_1.scrollBar.value += 1, this.list_1.scrollBar.value >= this.list_1.scrollBar.max && (this.m_type_1 = 1)) : 1 == this.m_type_1 && (this.list_1.scrollBar.value -= 1, 
            this.list_1.scrollBar.value <= 0 && (this.m_type_1 = 0)), 0 == this.m_type_2 ? (this.list_2.scrollBar.value += 1, 
            this.list_2.scrollBar.value >= this.list_2.scrollBar.max && (this.m_type_2 = 1)) : 1 == this.m_type_2 && (this.list_2.scrollBar.value -= 1, 
            this.list_2.scrollBar.value <= 0 && (this.m_type_2 = 0));
        }
        onUpdateItem(e, t) {
            e.setData(), e.export(this.isPopupGameCentre, "对联");
        }
        onDestroy() {
            this.exportPre && this.exportPre.removeSelf(), Laya.timer.clearAll(this);
        }
    }
    class mt extends W.dialogs.PasePanelUI {
        constructor() {
            super();
        }
        onEnable() {
            this.btn_exit.addComponentIntance(new Me(null, () => {
                this.onExit();
            }, m.GuanBi)), this.btn_continue.addComponentIntance(new Me(null, () => {
                this.onContinue();
            }, m.TongYong)), ut.addStage(this.box, !0), Re.showBannerAd();
        }
        onContinue() {
            Re.hideBanner(), $.closeDialog(this);
        }
        onExit() {
            $.closeDialog(this), ae.getMgr().showInterstitialAd(0, function(e) {}), $.switchScene(P.homeScene);
        }
        onDisable() {}
    }
    class pt extends W.prefabs.GoldTweenPrefabsUI {
        constructor() {
            super();
        }
        static addStage(e, t) {
            let a = new pt();
            a.centerX = 0, a.y = 420, a.zOrder = 1e3, a.goldNum = t, Laya.Tween.to(a, {
                y: a.y - 100
            }, 1e3, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                a.removeSelf();
            })), e.addChild(a);
        }
        onAwake() {
            this.lab_goldNum.text = "+" + this.goldNum;
        }
    }
    class ft extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.labRankNum = this.owner.getChildByName("img_rank_num_bg").getChildByName("lab_rank_num"), 
            this.labRankName = this.owner.getChildByName("lab_rank_name"), this.imgIcon = this.labRankName.getChildByName("img_icon");
        }
        updateRank(e, t, a, i = !1) {
            this.labRankNum.text = e + "", this.labRankName.color = i ? "#a5ff17" : "#ffffff", 
            this.labRankNum.fontSize = e <= 3 ? 42 : 28, this.labRankName.text = t, this.imgIcon.visible = 1 == e, 
            this.labRankNum.color = 1 == e ? "#ffe400" : 2 == e ? "#bddcfb" : 3 == e ? "#bb5822" : "#ffffff";
        }
    }
    class yt extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.gameControl = this.owner.parent.parent.gameControl, this.rank1 = this.owner.getChildByName("box_rank_item1").getComponent(ft), 
            this.rank2 = this.owner.getChildByName("box_rank_item2").getComponent(ft), this.rank3 = this.owner.getChildByName("box_rank_item3").getComponent(ft), 
            this.rank4 = this.owner.getChildByName("box_rank_item4").getComponent(ft), this.rank5 = this.owner.getChildByName("box_rank_item5").getComponent(ft);
        }
        updateRank() {
            if (this.gameControl.is_destination) return;
            let e = this.gameControl.rankArr.sort((e, t) => t.distance - e.distance), t = 0;
            for (let a = 1; a <= e.length; a++) this["rank" + a].updateRank(a, e[a - 1].name, t, e[a - 1].isUser), 
            t += this["rank" + a].owner.height + (e[a - 1].isUser ? 10 : 0) + 10;
        }
    }
    class _t extends Laya.Script {
        constructor() {
            super(), this.time = 3;
        }
        onStart() {}
        opencountDown() {
            Laya.timer.loop(1500, this, this.countDown);
        }
        countDown() {
            this.img_time.skin, 3 == this.time ? (console.log("", this.time), Laya.timer.once(200, this, () => {
                this.time >= 0 && (this.img_time.scale(1.5, 1.5), this.img_time.alpha = 1), this.time > 0 ? (this.img_time.skin = `${P.uiDir}/daojishi_${this.time}.png`, 
                Laya.Tween.to(this.img_time, {
                    alpha: 0,
                    scaleX: .5,
                    scaleY: .5
                }, 800, Laya.Ease.linearIn, Laya.Handler.create(this, () => {})), this.time > 1 ? E.playEffect(m.DaoJiShi23) : E.playEffect(m.DaoJiShi1)) : 0 == this.time && (this.img_time.skin = `${P.uiDir}/daojishi_go.png`, 
                E.playEffect(m.Go), Laya.Tween.to(this.img_time, {
                    alpha: 0,
                    scaleX: .5,
                    scaleY: .5
                }, 900, Laya.Ease.linearIn, Laya.Handler.create(this, () => {})), Laya.timer.once(1e3, this, () => {
                    this.owner.removeSelf(), Laya.timer.clearAll(this);
                })), this.time--;
            }), Ae.getInstance().emit(p.start_game, [ this.time ])) : (console.log("----time", this.time), 
            this.time >= 0 && (this.img_time.scale(1.5, 1.5), this.img_time.alpha = 1), this.time > 0 ? (this.img_time.skin = `${P.uiDir}/daojishi_${this.time}.png`, 
            Laya.Tween.to(this.img_time, {
                alpha: 0,
                scaleX: .5,
                scaleY: .5
            }, 800, Laya.Ease.linearIn, Laya.Handler.create(this, () => {})), this.time > 1 ? E.playEffect(m.DaoJiShi23) : E.playEffect(m.DaoJiShi1)) : 0 == this.time && (this.img_time.skin = `${P.uiDir}/daojishi_go.png`, 
            E.playEffect(m.Go), Laya.Tween.to(this.img_time, {
                alpha: 0,
                scaleX: .5,
                scaleY: .5
            }, 900, Laya.Ease.linearIn, Laya.Handler.create(this, () => {})), Laya.timer.once(1e3, this, () => {
                this.owner.removeSelf(), Laya.timer.clearAll(this);
            })), Ae.getInstance().emit(p.start_game, [ this.time ]), this.time--);
        }
        onDestroy() {
            Laya.timer.clear(this, this.countDown);
        }
    }
    class Ct extends W.scenes.GameSceneUI {
        constructor() {
            super(), this.scaleNum = 1;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.onBtn(), this.loadGameScene(), 
            Ae.getInstance().on(p.is_destination, this.evevt_Destination, this), Ae.getInstance().on(p.is_gold, this.evevt_Gold, this), 
            Ae.getInstance().on(p.victory_replay, this.on_victory_replay, this), Ae.getInstance().on(p.bx_gaming_close, this.bxGamingClose, this), 
            Ae.getInstance().on(p.start_game, this.eventStartGame, this), Ae.getInstance().on(p.is_nitro, this.eventNitro, this), 
            Ae.getInstance().on(p.opencountDown, this.opencountDown, this), Y.get_checkpointNum <= 3 && Re.newDot(Q.jinruyouxi.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 9 + "").replace("num", Y.get_checkpointNum + ""));
        }
        onEnable() {
            this.init(), this.showChapingDialog();
        }
        opencountDown() {
            this.gameControl.setStartGameCamera(4);
            let e = this.box_time.getComponent(_t);
            Re.hideAllBanner(), e.opencountDown();
        }
        showChapingDialog() {
            let e = O.getRandom(100), t = Y.cpCheckPoint.split("-");
            Number(t[0]) <= Y.get_checkpointNum && Number(t[1]) >= Y.get_checkpointNum && e < z.gameChapingRate ? $.showDialog(new st(5)) : this.opencountDown();
        }
        onBtn() {
            this.btn_brake.on(Laya.Event.MOUSE_DOWN, this, this.onBrake, [ L.down ]), this.btn_brake.on(Laya.Event.MOUSE_UP, this, this.onBrake, [ L.up ]), 
            this.btn_brake.on(Laya.Event.MOUSE_OUT, this, this.onBrake, [ L.up ]), this.btn_expedite.on(Laya.Event.MOUSE_DOWN, this, this.onExpedite, [ L.down ]), 
            this.btn_expedite.on(Laya.Event.MOUSE_UP, this, this.onExpedite, [ L.up ]), this.btn_expedite.on(Laya.Event.MOUSE_OUT, this, this.onExpedite, [ L.up ]), 
            this.btn_back.on(Laya.Event.MOUSE_DOWN, this, this.onBack, [ L.down ]), this.btn_back.on(Laya.Event.MOUSE_UP, this, this.onBack, [ L.up ]), 
            this.btn_back.on(Laya.Event.MOUSE_OUT, this, this.onBack, [ L.up ]), this.btn_left.on(Laya.Event.MOUSE_DOWN, this, this.onChangeDirection, [ A.left ]), 
            this.btn_left.on(Laya.Event.MOUSE_UP, this, this.onChangeDirection, [ A.front ]), 
            this.btn_left.on(Laya.Event.MOUSE_OUT, this, this.onChangeDirection, [ A.front ]), 
            this.btn_right.on(Laya.Event.MOUSE_DOWN, this, this.onChangeDirection, [ A.right ]), 
            this.btn_right.on(Laya.Event.MOUSE_UP, this, this.onChangeDirection, [ A.front ]), 
            this.btn_right.on(Laya.Event.MOUSE_OUT, this, this.onChangeDirection, [ A.front ]), 
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.on(Laya.Event.KEY_UP, this, this.onKeyUp), 
            this.btn_pase.addComponentIntance(new Me(null, () => {
                this.onPase();
            }, m.TongYong)), this.img_nitrogen.addComponentIntance(new Me(null, () => {
                this.useNitro();
            }, m.TongYong)), this.img_nitrogen.visible = !1, this.rank = this.box_rank.getComponent(yt);
        }
        loadGameScene() {
            let e = Laya.loader.getRes(P.Res3D.GameScene);
            e && (this.gameControl = e.getComponent($e), this.gameControl || (this.gameControl = e.addComponent($e)), 
            this.gameControl.loadGameScene(), e.zOrder = -1, this.addChild(e), this.gameControl && this.gameControl.starGame());
        }
        onKeyDown(e) {
            65 == e.keyCode || 97 == e.keyCode ? this.onChangeDirection(A.left) : 68 != e.keyCode && 100 != e.keyCode || this.onChangeDirection(A.right);

            if(87==e.keyCode)
            {
                this.onExpedite(L.down);           
            }

            if(83==e.keyCode)
            {
                this.onBack(L.down);
            }
        }
        onKeyUp(e) {
            65 != e.keyCode && 97 != e.keyCode && 68 != e.keyCode && 100 != e.keyCode || this.onChangeDirection(A.front);
            if(87==e.keyCode)
            {
                this.onExpedite(L.up);           
            }

            if(83==e.keyCode)
            {
                this.onBack(L.up);
            }
        }
        init() {
            P.chest_gameing_num = 0, this.gameControl.nitroNum = 0, this.img_nitrogen.skin = `${P.uiDir}/danqi.png`, 
            this.img_nitrogen.scale(1, 1), Laya.timer.loop(1, this, this.onUpdate), this.gameControl = P.gameControll, 
            this.gameControl.nameIndex = 0, this.lab_yindao_right.visible = !0, this.img_yindao_right.visible = !0, 
            this.img_yindao_right.play(), this.img_yindao_right.loop = !0, this.img_yindao_right.x = O.shiPeiX(1, this.img_yindao_right.x), 
            this.img_yindao_right.y = O.shiPeiY(1, this.img_yindao_right.y), this.lab_now_Rank.visible = !1, 
            this.img_shanpian.visible = !1, Re.hideAllBanner();
        }
        onUpdate() {
            this.gameControl.gameNavigateCtrl && this.gameControl.gameNavigateCtrl.updata(), 
            Je.moveFun(), this.rank.updateRank(), this.nitroEffect(), this.gameControl.updata(this.isStart);
        }
        nitroEffect() {
            let e = this;
            if (this.gameControl.nitroNum > 0) {
                if (this.nitroEffectPlaing) return;
                this.nitroEffectPlaing = !0, Laya.Tween.to(this.img_nitrogen, {
                    scaleX: .5,
                    scaleY: .5
                }, 1e3, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.img_nitrogen, {
                        scaleX: 1,
                        scaleY: 1
                    }, 1e3, Laya.Ease.linearInOut, Laya.Handler.create(this, () => {
                        e.nitroEffectPlaing = !1;
                    }));
                }));
            }
        }
        onBrake(e) {
            e == L.down ? (E.playEffect(m.ShaChe), this.gameControl.is_Brake = !0, this.gameControl.onBrake(), 
            this.btn_brake.scale(.9, .9)) : (this.gameControl.is_Brake = !1, this.btn_brake.scale(1, 1));
        }
        onExpedite(e) {
            e == L.down ? (this.gameControl.is_Expedite = !0, this.gameControl.onExpedite(), 
            this.btn_expedite.scale(this.scaleNum, this.scaleNum), this.lab_yindao_right.visible = !1,
            
            this.img_yindao_right.visible = !1, this.img_yindao_right.stop(), this.isStart ? this.playXingShi() :(E.playEffect(m.HongYouMen), 
            this.gameControl.gameRes_UserCar.playEffYanChen(!0))) : (this.gameControl.is_Expedite = !1, 
            this.btn_expedite.scale(1.1, 1.1), E.init_gameCarRun(0, Te.carData(xe.UserUseCar).standby), 
            E.stopMusic_gameCarRun(), E.stopEffect(m.HongYouMen), this.gameControl.gameRes_UserCar.playEffYanChen(!1));
        }
        playXingShi() {
            E.init_gameCarRun(1, Te.carData(xe.UserUseCar).speedup)
                E.playMusic_gameCarRun()


            console.log("playXingShi");
        }
        onBack(e) {
            e == L.down ? (this.gameControl.is_Brake = !0, this.gameControl.onBrake(), this.gameControl.is_Brake = !1, 
            E.playEffect(m.ShaChe), this.gameControl.is_back = !0, this.btn_back.scale(this.scaleNum, this.scaleNum), 
            this.gameControl.onBack(), this.gameControl.playeffBackLight(!0)) : (this.gameControl.is_back = !1, 
            this.btn_back.scale(1.1, 1.1), this.gameControl.playeffBackLight(!1));
        }
        onChangeDirection(e) {
            this.gameControl.keyType = e, e == A.left ? this.btn_left.scale(this.scaleNum, this.scaleNum) : e == A.right ? this.btn_right.scale(this.scaleNum, this.scaleNum) : (this.btn_left.scale(1.2, 1.2), 
            this.btn_right.scale(1.2, 1.2));
        }
        evevt_Destination() {
            this.gameControl.is_destination = !0;
            for (let e = 1; e <= this.gameControl.rankArr.length; e++) this.gameControl.rankArr[e - 1].isUser && (e <= 3 ? (E.playEffect(m.Success), 
            this.gameControl.playeffRibbon()) : E.playEffect(m.Fail), this.lab_now_Rank.visible = !0, 
            this.lab_now_Rank.text = `No ${e}`, this.rankani.play(), this.rankani.loop = !1);
            this.gameControl.setStartGameCamera(5), Y.get_checkpointNum <= 3 ? Re.newDot(Q.dijiguanddzd.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 11 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.dijiguanddzd_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 44 + "").replace("num", Y.get_checkpointNum + "")), 
            Re.isTopBanner = !1, Laya.timer.clear(this, this.showBannerTopAd_time), Re.hideAllBanner(), 
            z.isCanShare && z.gameinterfaceShowBanner && Re.showBannerAd_jiesuan(!0, 2e3), Laya.timer.once(2e3, this, this.victoryPanel);
        }
        victoryPanel() {
            Y.get_checkpointNum <= 3 ? Re.newDot(Q.dijiguanyxzx.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 12 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.dijiguanyxzx_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 45 + "").replace("num", Y.get_checkpointNum + "")), 
            $.showDialog(new ct(1));
        }
        on_victory_replay() {}
        evevt_Gold(e) {
            this.gameControl.removeGold(e), E.playEffect(m.ChiJinBi), Y.get_goldNum++, xe.GoldNum += Re.getData("game_level_config", Y.get_checkpointNum.toString(), "eatgold", 1), 
            Ae.getInstance().emit(p.eatGold, null), pt.addStage(this.Box, Re.getData("game_level_config", Y.get_checkpointNum.toString(), "eatgold", 1));
        }
        onPase() {
            $.showDialog(new mt()), this.gameControl.carStop();
        }
        bxGameStart() {
            let e = Y.bxCheckPoint.split("-"), t = Number(e[0]), a = Number(e[1]);
            0 == P.chest_gameing_num && t <= Y.get_checkpointNum && a >= Y.get_checkpointNum && lt.showChest(R.gameing) && (P.chest_gameing_num += 1, 
            this.gameControl.carStop(), this.gameControl.forceStop = !0, $.showDialog(new lt(R.gameing)));
        }
        bxGamingClose() {
            this.gameControl.forceStop = !1;
        }
        eventStartGame(e) {
            3 == e ? (this.img_shanpian.visible = !0, this.img_shanpian.alpha = 0, Laya.Tween.to(this.img_shanpian, {
                alpha: 1
            }, 50, null, Laya.Handler.create(this, () => {
                this.gameControl.setStartGameCamera(e), Laya.timer.once(100, this, () => {
                    Laya.Tween.to(this.img_shanpian, {
                        alpha: 0
                    }, 50, null, Laya.Handler.create(this, () => {
                        this.img_shanpian.visible = !1;
                    }));
                });
            }))) : this.gameControl.setStartGameCamera(e), console.log("time===", e), e > 0 || (Y.get_checkpointNum <= 3 && Re.newDot(Q.wanchengdaojishi.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 10 + "").replace("num", Y.get_checkpointNum + "")), 
            this.isStart = !0, this.gameControl.is_Expedite && (E.stopEffect(m.HongYouMen), 
            this.gameControl.gameRes_UserCar.playEffYanChen(!1), this.playXingShi()), 
            P.musicType = 2)
            
             let i = ee.getItem("playSoundMuted", !0);
                        Laya.SoundManager.muted = !i
                        console.log(Laya.SoundManager.muted)
                        if(Laya.SoundManager.muted == false)
                        {
                            E.playMusic(P.musicType) 
                        }

            
            Re.hideAllBanner(), Re.isTopBanner = !0, Laya.timer.loop(1e3 * Y.switchGameTopTime, this, this.showBannerTopAd_time, [ 1e3 * Y.switchGameTopHideTime ]), 
            Ie.showCustom();
        }
        eventNitro(e) {
            this.gameControl.removeNitro(e), this.gameControl.nitroNum = 1, this.img_nitrogen.skin = `${P.uiDir}/danqi_2.png`, 
            E.playEffect(m.GetNitrogen);
        }
        useNitro() {
            this.gameControl.nitroLeftTime > 0 || this.gameControl.nitroNum <= 0 || !this.isStart || this.gameControl.is_destination || (this.gameControl.nitroNum -= 1, 
            this.img_nitrogen.skin = `${P.uiDir}/danqi.png`, this.gameControl.nitroLeftTime = Y.nitroTime, 
            E.playEffect(m.UseNitrogen), E.playEffect(m.UsingNitrogen));
        }
        showBannerTopAd_time(e) {
            Re.showBannerTopAd_time(e);
        }
        onDisable() {
            Laya.timer.clear(this, this.onUpdate), this.gameControl && (this.gameControl.gameOver(), 
            this.gameControl = null), Ae.getInstance().off(p.is_destination, this.evevt_Destination, this), 
            Ae.getInstance().off(p.is_gold, this.evevt_Gold, this), Ae.getInstance().off(p.victory_replay, this.on_victory_replay, this), 
            Ae.getInstance().off(p.bx_gaming_close, this.bxGamingClose, this), Ae.getInstance().off(p.start_game, this.eventStartGame, this), 
            Ae.getInstance().off(p.is_nitro, this.eventNitro, this), Ae.getInstance().off(p.opencountDown, this.opencountDown, this), 
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown), Laya.stage.off(Laya.Event.KEY_UP, this, this.onKeyUp), 
            this.btn_brake.off(Laya.Event.MOUSE_DOWN, this, this.onBrake), this.btn_brake.off(Laya.Event.MOUSE_UP, this, this.onBrake), 
            this.btn_brake.off(Laya.Event.MOUSE_OUT, this, this.onBrake), this.btn_expedite.off(Laya.Event.MOUSE_DOWN, this, this.onExpedite), 
            this.btn_expedite.off(Laya.Event.MOUSE_UP, this, this.onExpedite), this.btn_expedite.off(Laya.Event.MOUSE_OUT, this, this.onExpedite), 
            this.btn_back.off(Laya.Event.MOUSE_DOWN, this, this.onBack), this.btn_back.off(Laya.Event.MOUSE_UP, this, this.onBack), 
            this.btn_back.off(Laya.Event.MOUSE_OUT, this, this.onBack), this.btn_left.off(Laya.Event.MOUSE_DOWN, this, this.onChangeDirection), 
            this.btn_left.off(Laya.Event.MOUSE_UP, this, this.onChangeDirection), this.btn_left.off(Laya.Event.MOUSE_OUT, this, this.onChangeDirection), 
            this.btn_right.off(Laya.Event.MOUSE_DOWN, this, this.onChangeDirection), this.btn_right.off(Laya.Event.MOUSE_UP, this, this.onChangeDirection), 
            this.btn_right.off(Laya.Event.MOUSE_OUT, this, this.onChangeDirection);
        }
    }
    class wt extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            Ae.getInstance().on(p.updataShowGoldPower, this.showGold, this), Ae.getInstance().on(p.goldGetTween, this.playGoldEffect, this), 
            Ae.getInstance().on(p.eatGold, this.eatGold, this);
        }
        onStart() {
            this.showGold();
        }
        showGold() {
            this.lbGoldNum.text = xe.GoldNum + "";
        }
        playGoldEffect() {
            var e = this.imgGold.localToGlobal(new Laya.Point(0, 0));
            let t = e.x + this.imgGold.width / 2 * .7, a = e.y + this.imgGold.height / 2 * .7;
            O.playTweenImg(`${P.uiDir}/jinbi.png`, t, a, C.Gold);
        }
        eatGold() {
            let e = this;
            Laya.Tween.to(this.imgGold, {
                scaleX: 1.2,
                scaleY: 1.2
            }, 100, null, Laya.Handler.create(this, function() {
                e.imgGold.scaleX = 1, e.imgGold.scaleY = 1;
            })), this.lbGoldNum.text = xe.GoldNum + "";
        }
        onDisable() {
            Ae.getInstance().off(p.updataShowGoldPower, this.playGoldEffect, this), Ae.getInstance().off(p.goldGetTween, null, this);
        }
    }
    class bt extends W.scenes.HomeSceneUI {
        constructor() {
            super(), this.Car_FL = null, this.Car_FR = null, this.Car_RL = null, this.Car_RR = null, 
            this.isOneClick = !0;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), Y.get_checkpointNum = xe.CheckpointNum, 
            this.onBtn(), this.carPort = this.getComponent(Te), this.carAttrList = this.getComponent(Be);
        }
        onEnable() {
            this.init();
        }
        init() {
            this.lab_checkpoint.text = "Level " + xe.CheckpointNum + "", this.btn_Centre_shou.visible = !1, 
            this.btn_Centre_shou2.visible = !1,
            this.btn_Centre_shou2.y = O.shiPeiY(1, this.btn_Centre_shou2.y), this.btn_Centre_shou2.play(), 
            this.btn_Centre_shou2.loop = !0, this.changeTryCarId(), this.initScene(), Te.initCarData(xe.UserUseCar), 
            this.isOneClick = !0, P.musicType = 1
            console.log(Laya.SoundManager.muted);


            let e = ee.getItem("playSoundMuted", !0);
            Laya.SoundManager.muted = !e
            console.log(Laya.SoundManager.muted)
            if(Laya.SoundManager.muted == false)
            {
                E.playMusic(P.musicType) 
            }
   


             Laya.timer.loop(10, this, this.carMove);
        }
        changeTryCarId() {
            0 != Y.oldTryCarId && 0 == Y.isTryCarSate && (xe.UserUseCar = Y.oldTryCarId, Y.oldTryCarId = 0);
        }
        initScene() {
            if (!this.homeScene) {
                let e = Laya.loader.getRes(P.Res3D.HomeScene);
                e.zOrder = -1, this.addChild(e);
                let t = e.getChildByName("Camera");
                t && (t.enableHDR = !1), this.homeScene = e;
            }
            this.loadCar(xe.UserUseCar);
        }
        loadCar(e) {
            let t = Xe.getCarRes(e);
            Laya.loader.create([ t ], Laya.Handler.create(this, () => {
                this.carSprite3d && (this.carSprite3d.removeSelf(), this.carSprite3d = null);
                let e = Laya.loader.getRes(t);
                if (e) {
                    let t = this.homeScene.addChild(Laya.Sprite3D.instantiate(e)), a = t.getChildByName("nitrogen");
                    a && (a.active = !1);
                    let i = t.getChildByName("car_light");
                    i && (i.active = !1);
                    let s = t.getChildByName("car_smoke");
                    s && (s.active = !1);
                    let n = t.getChildByName("right_spark");
                    n && (n.active = !1);
                    let r = t.getChildByName("left_spark");
                    r && (r.active = !1);
                    let o = t.getChildByName("front_spark");
                    o && (o.active = !1);
                    let h = t.getChildByName("back_spark");
                    h && (h.active = !1), this.carSprite3d = t, this.Car_FL = t.getChildAt(0).getChildAt(0).getChildByName("wheel_1"), 
                    this.Car_FR = t.getChildAt(0).getChildAt(0).getChildByName("wheel_2"), this.Car_RL = t.getChildAt(0).getChildAt(0).getChildByName("wheel_4"), 
                    this.Car_RR = t.getChildAt(0).getChildAt(0).getChildByName("wheel_3");
                }
            }), Laya.Handler.create(this, () => {}));
        }
        carMove() {
            this.carSprite3d && (this.trackSprite3d || (this.trackSprite3d = this.homeScene.getChildByName("saidao")), 
            this.trackSprite3d.transform.rotate(new Laya.Vector3(0, Y.homeCarSpeed, 0)), this.Car_FL.transform.rotate(new Laya.Vector3(-Y.homeCarRotation, 0, 0)), 
            this.Car_FR.transform.rotate(new Laya.Vector3(-Y.homeCarRotation, 0, 0)), this.Car_RL.transform.rotate(new Laya.Vector3(-Y.homeCarRotation, 0, 0)), 
            this.Car_RR.transform.rotate(new Laya.Vector3(-Y.homeCarRotation, 0, 0)));
        }
        onBtn() {
            this.btn_start_Game.addComponentIntance(new Me(null, () => {
                
                platform.getInstance().showInterstitial(
                    ()=>{
                        this.onStartGame();
                    })

            }, m.StartGame)), 
            
            this.btn_carport.addComponentIntance(new Me(null, () => {
                this.carPort.show();
            }, m.TongYong)), this.btn_Centre.addComponentIntance(new Me(null, () => {
                this.btnCentre();
            }, m.TongYong));
            this.btn_Centre.visible = false;
        }
        offBtn() {}
        btnCentre() {
            $.showDialog(new ct(4));
        }
        onStartGame() {
            if (!this.isOneClick) return;
            this.showUpdateSubscribe(), Y.get_checkpointNum <= 3 ? Re.newDot(Q.dianjikaishianniu.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 5 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.dianjikaishianniu_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 41 + "").replace("num", Y.get_checkpointNum + "")), 
            this.isOneClick = !1;
            let e = this, t = Re.getData("game_level_config", Y.get_checkpointNum.toString(), "startvideo", Y.startvideo);
            z.isCanShare && !z.isNewPlayer && 1 == t ? ae.getMgr().showVideoAd(0, function(t) {
                e.playGame();
            }.bind(this)) : e.playGame();
        }
        playGame() {
            if (Y.get_palyGameCheckNum > 0 && Y.get_palyGameCheckNum--, lt.showChest(R.before)) return Y.get_palyGameCheckNum = -1, 
            void $.showDialog(new lt(R.before));
            z.beforeSmallinterstitial ? $.showDialog(new st(6)) : $.switchScene(P.LoadResScene);
        }
        showUpdateSubscribe() {}
        onDisable() {
            this.offBtn(), this.carSprite3d && (this.carSprite3d.removeSelf(), this.carSprite3d = null), 
            Laya.timer.clear(this, this.carMove);
        }
    }
    const St = .3;
    class kt extends W.scenes.LoadResSceneUI {
        constructor() {
            super(), this.curPercent = 0;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), E.stopMusic(), P.now_game_level_config = ve.getTableMgr().getTable("game_level_config").getRowData(Y.get_checkpointNum + ""), 
            Re.showBannerAd(), this.onLoadResOver(), Y.checkpointGoldNum = 0;
        }
        onLoadResOver() {
            Y.get_checkpointNum <= 3 ? Re.newDot(Q.dijiguanloadingkaishi.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 7 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.dijiguanloadingkaishi_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 42 + "").replace("num", Y.get_checkpointNum + "")), 
            this.tipLabel.text = Z.LoadingScene, this.progressBar.value = St, this.per.text = Math.round(100 * St) + "%", 
            Laya.loader.once(Laya.Event.ERROR, this, this.onLoad3DResError);
            let e = [];
            (e = e.concat(Xe.getRivalCarRes(Y.rivalNum))).push(Xe.LoadCheckpoint(Y.get_checkpointNum)), 
            e.push(Xe.LoadUserCar(xe.UserUseCar)), e.push(P.Res3D.GameScene), Laya.loader.create(e, Laya.Handler.create(this, this.onLoad3DResOver), Laya.Handler.create(this, this.onLoad3DResProgress));
           
            
        }
        onLoad3DResError(e) {
            console.error("Load3d Res Error: "), console.error(e);
        }
        onLoad3DResProgress(e) {
            let t = St + e * (1 - St);
            (t = t > 1 ? 1 : t) < this.curPercent || (this.curPercent = t, this.progressBar.value = t, 
            this.per.text = Math.round(100 * t) + "%");
        }
        onLoad3DResOver() {
            this.progressBar.value = 1, this.per.text = "100%", this.tipLabel.text = Z.LoadingOver, 
            Re.hideAllBanner(), Y.get_checkpointNum <= 3 ? Re.newDot(Q.wanchengdijiguanload.replace("xuhao", 12 * (Y.get_checkpointNum - 1) + 8 + "").replace("num", Y.get_checkpointNum + "")) : Y.get_checkpointNum > 3 && Y.get_checkpointNum <= 10 && Re.newDot(Q.wanchengdijiguanload_level.replace("xuhao", 6 * (Y.get_checkpointNum - 4) + 43 + "").replace("num", Y.get_checkpointNum + "")), 
            Y.get_goldMax = 0, Y.get_goldNum = 0, Y.get_starNum = 0, $.switchScene(P.gameScene);
        }
    }
    class vt {
        constructor() {
            this.energy = 0, this.energyMax = 5, this.recoverynum = 1, this.defaultEnergy = 5, 
            this.energyCDMax = 18e5, this.settleTime = 0;
        }
        static get I() {
            return vt.instance = vt.instance || new vt();
        }
        init() {
            this.setDefaultNum(Y.defaultpower), this.setCDMax(1e3 * Y.powerrecoverytime), this.setMax(Y.powermax), 
            this.readTime(), this.readEnergy(), this.settle();
        }
        getNum() {
            return this.settle(), this.energy;
        }
        add(e) {
            this.getNum() >= this.getMax() && this.saveTime(Date.now()), this.settle(), this.setNum(this.getNum() + e);
        }
        setMax(e) {
            this.energyMax = e;
        }
        getMax() {
            return this.energyMax;
        }
        setCDMax(e) {
            this.energyCDMax = e;
        }
        setRecoveryNum(e) {
            this.recoverynum = e;
        }
        setDefaultNum(e) {
            this.defaultEnergy = e;
        }
        getCDMax() {
            return this.energyCDMax;
        }
        getCD() {
            if (this.getNum() >= this.getMax()) return 0;
            this.settle();
            let e = Date.now();
            return this.energyCDMax - (e - this.settleTime);
        }
        getFullTime() {
            this.settle();
            let e = this.getMax() - this.getNum();
            return e <= 0 ? 0 : e * this.getCDMax();
        }
        isEnergy(e) {
            return !0;
        }
        isEnergyMax() {
            return this.getNum() >= this.getMax();
        }
        setNum(e) {
            this.energy = e, me.saveData("energyNum", this.energy), Ae.getInstance().emit(p.updataShowGoldPower, null);
        }
        readEnergy() {
            let e = me.readData("energyNum", this.defaultEnergy);
            e && (this.energy = +e);
        }
        saveTime(e) {
            this.settleTime = e, me.saveData("energyTime", this.settleTime);
        }
        readTime() {
            let e = me.readData("energyTime", 0);
            return this.settleTime = +e, this.settleTime;
        }
        settle() {
            let e = this.getMax() - this.energy;
            if (e <= 0) return;
            let t = Date.now(), a = this.readTime();
            if (t - a < this.getCDMax()) return;
            let i = t - a, s = Math.floor(i / this.getCDMax());
            this.saveTime(t - (i - s * this.getCDMax()));
            let n = s > e ? e : s;
            n *= this.recoverynum, this.setNum(this.energy + n);
        }
    }
    vt.instance = null;
    class Lt extends W.item.ChaPingItemNewUI {
        constructor(e) {
            super();
        }
        onAwake() {
            this.iconImg.on(Laya.Event.CLICK, this, this.onTry);
        }
        setData(e) {
            this.data = e || this.dataSource, this.updateData();
        }
        export() {}
        updateData() {
            this.data && (this.iconImg && (this.iconImg.skin = this.data.image), this.nameLabel && (this.nameLabel.text = this.data.displayTitle));
        }
        onTry() {
            this.data && dt.I.navigateToMiniProgram({
                eventName: this.data.type,
                subEventName: this.data.title,
                displayTitle: this.data.displayTitle,
                appId: this.data.appid,
                path: this.data.path,
                flowId: this.data.id,
                extraData: {
                    appId: this.data.targetAppid,
                    path: this.data.targetPath
                },
                exportType: this.exportType
            }, this.data.title, "登录全屏", !1);
        }
    }
    class At extends W.item.LoginFullItemUI {
        constructor(e) {
            super(), this.biaoqian = "登陆全屏";
        }
        onAwake() {
            this.iconImg.on(Laya.Event.CLICK, this, this.onTry);
        }
        setData(e) {
            this.data = e || this.dataSource, this.updateData();
        }
        setbiaoqian(e) {
            this.biaoqian = e;
        }
        export(e) {
            this.exportType = e;
        }
        updateData() {
            this.data && (this.iconImg && (this.iconImg.skin = this.data.image), this.nameLabel && (this.nameLabel.text = this.data.displayTitle));
        }
        onTry() {
            this.data && dt.I.navigateToMiniProgram({
                eventName: this.data.type,
                subEventName: this.data.title,
                displayTitle: this.data.displayTitle,
                appId: this.data.appid,
                path: this.data.path,
                flowId: this.data.id,
                extraData: {
                    appId: this.data.targetAppid,
                    path: this.data.targetPath
                },
                exportType: this.exportType
            }, this.data.title, this.biaoqian, !1);
        }
    }
    class xt extends W.dialogs.LoginFullPanelUI {
        constructor(e) {
            super(), this.showType = 2, this.showType = e;
        }
        onEnable() {
            this.size(Laya.stage.width, Laya.stage.height), this.btn_return.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), this.btn_return.visible = !0, Re.hideBanner(), this.img_game.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), this.img_game.visible = !1, Le.Instance().getFlow("登录全屏", Laya.Handler.create(this, e => {
                this.listData = e;
                try {
                    this.listData.applets.length > 0 && this.initList();
                } catch (e) {}
            }));
            this.onRetuen();
        }
        initList() {
            let e = [], t = O.getRandomArr(0, this.listData.applets.length - 1, this.listData.applets.length);
            for (let a = 0; a < t.length; a++) {
                const i = t[a];
                e.push(this.listData.applets[i]);
            }
            this.list_gameCentre.hScrollBarSkin = "", this.list_gameCentre.itemRender = At, 
            this.list_gameCentre.array = e, this.list_gameCentre.renderHandler = new Laya.Handler(this, this.onUpdateItem), 
            this.list_gameCentre.refresh(), this.m_type = 0, Laya.timer.loop(20, this, this.scrollerCall);
        }
        onUpdateItem(e, t) {
            e.setData(), e.setbiaoqian("登录全屏");
        }
        scrollerCall() {
            0 == this.m_type ? (this.list_gameCentre.scrollBar.value += 1, this.list_gameCentre.scrollBar.value >= this.list_gameCentre.scrollBar.max && (this.m_type = 1)) : 1 == this.m_type && (this.list_gameCentre.scrollBar.value -= 1, 
            this.list_gameCentre.scrollBar.value <= 0 && (this.m_type = 0));
        }
        showExport() {
            var e = this.list_gameCentre.getChildAt(0);
            let t = O.getRandomArr(0, e.numChildren - 1, 1)[0];
            var a = e.getChildAt(t);
            a && a.onTry();
        }
        showBannerAd() {
            console.log("", z.gamecenterlateswitch, Y.chapingBannerDelayTime, Y.chapingBannerCloseTime), 
            1 == z.gamecenterlateswitch && z.isCanShare && Laya.timer.once(Y.chapingBannerDelayTime, this, () => {
                Re.showBannerAd(), Laya.timer.once(Y.chapingBannerCloseTime, this, () => {
                    Re.hideBanner();
                });
            });
        }
        onRetuen() {
            $.closeDialog(this);
        }
        onDisable() {
            1 == this.showType ? $.showDialog(new it()) : 2 == this.showType ? (Re.newDot(Q.dengluchaping), 
            Re.newDot(Q.zhujiemian), Re.showBannerAd(), Ie.showCustom()) : 3 == this.showType ? (Re.showBannerAd(), 
            Ie.showCustom()) : 4 != this.showType || P.showMisUse ? 5 == this.showType && Ae.getInstance().emit(p.opencountDown, null) : (Re.showBannerAd(), 
            Ie.showCustom()), Laya.timer.clearAll(this);
        }
    }
    class It extends W.dialogs.ChaPingPanelNewUI {
        constructor(e, t = !1) {
            super(), this.chapingType = e, this.isshowGameOverPanel = t;
        }
        onEnable() {
            this.size(Laya.stage.width, Laya.stage.height), this.img_game.addComponentIntance(new Me(null, () => {
                this.onRetuen();
            }, m.GuanBi)), Re.hideBanner(), Le.Instance().getFlow("登录全屏", Laya.Handler.create(this, e => {
                this._recFlowData = e;
                try {
                    this._recFlowData.applets.length > 0 && this.init();
                } catch (e) {}
            })), this.img_game.visible = !1, Laya.timer.once(1e3 * Y.fullscreentime, this, () => {
                this.img_game.visible = !0;
            });
            this.onRetuen();
            this.visible = false;
        }
        init() {
            let e = [], t = O.getRandomArr(0, this._recFlowData.applets.length - 1, this._recFlowData.applets.length);
            for (let a = 0; a < t.length; a++) {
                const i = t[a];
                e.push(this._recFlowData.applets[i]);
            }
            this.list_chaPing.hScrollBarSkin = "", this.list_chaPing.itemRender = Lt, this.list_chaPing.array = e, 
            this.list_chaPing.renderHandler = new Laya.Handler(this, this.onChaPingItem), this.list_chaPing.refresh(), 
            this.m_type = 0, Laya.timer.loop(20, this, this.scrollerCall);
        }
        onChaPingItem(e, t) {
            e.setData();
        }
        scrollerCall() {
            0 == this.m_type ? (this.list_chaPing.scrollBar.value += 1, this.list_chaPing.scrollBar.value >= this.list_chaPing.scrollBar.max && (this.m_type = 1)) : 1 == this.m_type && (this.list_chaPing.scrollBar.value -= 1, 
            this.list_chaPing.scrollBar.value <= 0 && (this.m_type = 0));
        }
        onRetuen() {
            $.closeDialog(this);
        }
        onDisable() {
            z.fullscreentwo ? $.showDialog(new xt(this.chapingType)) : 1 == this.chapingType ? $.showDialog(new it()) : 2 == this.chapingType ? (Re.newDot(Q.dengluchaping), 
            Re.newDot(Q.zhujiemian), Re.showBannerAd(), Ie.showCustom()) : 3 == this.chapingType ? (Re.showBannerAd(), 
            Ie.showCustom()) : 4 != this.chapingType || P.showMisUse ? 5 == this.chapingType && Ae.getInstance().emit(p.opencountDown, null) : (Re.showBannerAd(), 
            Ie.showCustom()), this.img_game.off(Laya.Event.MOUSE_DOWN, this, this.onRetuen), 
            Laya.timer.clearAll(this);
        }
    }
    const Rt = .3;
    class Mt extends W.scenes.LoginSceneUI {
        constructor() {
            super(), this.curPercent = 0, this.autoDestroyAtClosed = !0;
        }
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), P.PlatformTypr == b.wx && (Le.Instance().onStatInit(), 
            Le.Instance().onStatLogin(), Le.Instance().onStatCreateRole(), wx.onAudioInterruptionEnd(function() {

                    te.playMusic(P.musicType) 

                  console.log("");
            })), this.tipLabel.text = Z.LoadingTip, this.loadConfig().then(this.loadVersion.bind(this)).then(this.loadAllTable.bind(this)).then(this.login.bind(this)).then(this.load3DRes.bind(this)).catch(e => {
                console.log("...", e);
            });
             platform.getInstance().cargamesstartup("Seafloor-Racing",()=>{
                                //成功回调
                                //在合适位置添加公司logo
                                const sideLogo      = new Laya.Image();
                                sideLogo.skin       = "yad.png"
                                sideLogo.zOrder     = 1e3;
                                sideLogo.right   = 10;
                                sideLogo.top        = -20;
                                Laya.stage.addChild(sideLogo);
                                sideLogo.on(Laya.Event.MOUSE_DOWN,sideLogo,()=>{
                                   platform.getInstance().navigate("GAME","LOGO");
                                })
                                //进入游戏主场景
                            })
                
            
        }
        loadConfig() {
            return new Promise((e, t) => {
                let a = P.config;
                Laya.loader.load(a, Laya.Handler.create(this, () => {
                    e();
                }), Laya.Handler.create(this, this.onLoadProgress), Laya.Loader.BUFFER);
            });
        }
        loadVersion() {
            return new Promise((e, t) => {
                Laya.loader.load("versions/version.json", Laya.Handler.create(this, () => {
                    let t = Laya.loader.getRes("versions/version.json").version;
                    P.version = t, ve.bgame.getPlatform().setVersion(t), e();
                }));
            });
        }
        loadAllTable() {
            let e = this;
            return new Promise((t, a) => {
                ve.getTableMgr().loadAllTable(function(a) {
                    switch (a.result) {
                      case o.succeed:
                        e.configData(), console.log("");
                        break;

                      default:
                        console.log("");
                    }
                    t();
                }.bind(this));
            });
        }
        loadBanner() {
            let e = this;
            return new Promise((t, a) => {
                Y.loadingShowBanner && ae.getMgr().createBanner(0, 0, t => {
                    t.result == o.succeed && (e.banner = t.data, Re.setBannerPosX(e.banner), e.banner.show());
                }), t();
            });
        }
        login() {
            return new Promise((e, t) => {
                let a = this;
                let s = ve.getGame().getPlatform().getId(), n = ve.getGame().getPlatform().getVersion(), r = U.getMgr().getDefUrl();
                z.login(r, s, P.appId, i.data.code, "", i.data.inviteCode, n, 2, function(t) {
                    Re.newDot(Q.jinruloadjiemian), xe.importData(), vt.I.init(), a.tipLabel.text = Z.LoadingScene, 
                    a.progressBar.value = Rt, a.per.text = Math.round(100 * Rt) + "%", Laya.timer.once(1, a, () => {
                        Re.loadBanner(!0);
                    }), 
                    e();
                }.bind(this));
            });
        }
        load3DRes() {
            return new Promise((e, t) => {
                let a = [];
                a.push(P.Res3D.HomeScene), Laya.loader.create(a, Laya.Handler.create(this, this.onLoad3DResOver), Laya.Handler.create(this, this.onLoad3DResProgress)), 
                e();
            });
        }
        onLoadProgress(e) {
            this.progressBar.value;
            let t = e * Rt;
            this.progressBar.value = t, this.per.text = Math.round(100 * t) + "%";
        }
        onLoad3DResProgress(e) {
            let t = Rt + e * (1 - Rt);
            (t = t > 1 ? 1 : t) < this.curPercent || (this.curPercent = t, this.progressBar.value = t, 
            this.per.text = Math.round(100 * t) + "%");
        }
        onLoad3DResOver() {
            P.PlatformTypr != b.web && H.getMgr().setShareMenu(), this.progressBar.value = 1, 
            this.per.text = "100%", this.tipLabel.text = Z.LoadingOver;
            try {
                if (Re.newDot(Q.wanchengloadjiemian), $.switchScene(P.homeScene), z.isNewPlayer && (xe.OffLineTimer = 0), 
                P.PlatformTypr != b.wx) return !1;
                0 == z.loginDemo ? (Re.newDot(Q.zhujiemian), Re.showBannerAd(), Ie.showCustom()) : $.showDialog(new It(2));
            } catch (e) {
                console.error(e);
            } finally {
                this.banner && this.banner.hide();
            }
        }
        configData() {
            let e = ve.getTableMgr().getTable("game_constant_config");
            for (let t in e.getRawData()) null != Y[t] && e.getRawData()[t] && (Y[t] = e.getRawData()[t].value);
            Y.LuckyCarArr = [], Y.AllCarArr = [];
            let t = ve.getTableMgr().getTable("game_mycarunlock_config");
            Y.carNum = t.getRowNum();
            for (let e = 0; e < Y.carNum; e++) {
                const a = t.getRowData(e);
                2 == a.unlocktype && Y.LuckyCarArr.push(a), Y.AllCarArr.push(a), a.gravity && (Y.carMaxGravity = Y.carMaxGravity > a.gravity ? Y.carMaxGravity : a.gravity), 
                a.speed && (Y.carMaxSpeed = Y.carMaxSpeed > a.speed ? Y.carMaxSpeed : a.speed), 
                a.operation && (Y.carMaxOperation = Y.carMaxOperation > a.operation ? Y.carMaxOperation : a.operation), 
                a.addSpeed && (Y.carMaxNitroAddSpeed = Y.carMaxNitroAddSpeed > a.addSpeed ? Y.carMaxNitroAddSpeed : a.addSpeed);
            }
        }
    }
    class Dt {
        constructor() {}
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("scripts/CarAttrItem.ts", e), t("scripts/CarAttrList.ts", Be), t("scripts/PromotionItem.ts", Ue), 
            t("components/ToastDialog.ts", K), t("scripts/Roll.ts", Pe), t("components/GameScene.ts", Ct), 
            t("scripts/Gold.ts", wt), t("scripts/Sound.ts", te), t("scripts/RankItem.ts", ft), 
            t("scripts/Rank.ts", yt), t("scripts/StartGameTime.ts", _t), t("components/HomeScene.ts", bt), 
            t("scripts/CarPort.ts", Te), t("components/LoadResScene.ts", kt), t("components/LoginScene.ts", Mt);
        }
    }
    Dt.width = 1334, Dt.height = 750, Dt.scaleMode = "showall", Dt.screenMode = "horizontal", 
    Dt.alignV = "middle", Dt.alignH = "center", Dt.startScene = "scenes/LoginScene.scene", 
    Dt.sceneRoot = "", Dt.debug = !1, Dt.stat = !1, Dt.physicsDebug = !1, Dt.exportSceneToJson = !0, 
    Dt.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(Dt.width, Dt.height) : Laya.init(Dt.width, Dt.height, Laya.WebGL), 
            Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
            Laya.stage.scaleMode = Dt.scaleMode, Laya.stage.screenMode = Dt.screenMode, Laya.stage.alignV = Dt.alignV, 
            Laya.stage.alignH = Dt.alignH, Laya.URL.exportSceneToJson = Dt.exportSceneToJson, 
            (Dt.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
            Dt.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Dt.stat && Laya.Stat.show(), 
            Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            switch (dt.I.init(Laya.Browser.window.wx), ve.getGame(), ve.bgame.init(), P.PlatformTypr) {
              case b.wx:
                P.ut = "1";
                break;

              case b.qq:
                P.ut = "2";
                break;

              case b.web:
                P.ut = "3";
                break;

              case b.tt:
                P.ut = "4";
            }
            $.init(), $.switchScene(Dt.startScene);
        }
    }();
}();
console.log=function(){};