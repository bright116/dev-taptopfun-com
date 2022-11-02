window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, t) {
    "use strict";
    class s {
        constructor() {}
        static event(e) {
            if (this.initialized || (this.initialized = !0, this.instance = "undefined" != typeof GameGlobal ? GameGlobal.tdAppSdk : null), 
            this.instance && (this.instance.event(e), e.id == this.event_level_complete_id)) {
                var t = new d(e.params.userId, e.params.levelId);
                this.instance.event(t);
            }
        }
    }
    s.instance = null, s.initialized = !1, s.event_startup_id = "startup", s.event_startup_label = "微信加载完成游戏启动", 
    s.event_login_id = "login", s.event_login_label = "登陆成功", s.event_game_start_id = "gameStart", 
    s.event_game_start_label = "游戏开始", s.event_game_over_id = "gameOver", s.event_game_over_label = "游戏结束", 
    s.event_level_complete_id = "levelComplete", s.event_level_complete_label = "通关关卡", 
    t.ClassUtils.regClass("zs.laya.tdapp.tdAppSdk", s);
    class a {
        constructor() {
            this.id = "", this.label = "", this.params = null;
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.tdAppEvent", a);
    class l extends a {
        constructor() {
            super(), this.id = s.event_startup_id, this.label = s.event_startup_label, this.params = {
                timestamp: Date.now()
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.startupEvt", l);
    class i extends a {
        constructor(e) {
            super(), this.id = s.event_login_id, this.label = s.event_login_label, this.params = {
                timestamp: Date.now(),
                userId: e
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.loginEvt", i);
    class n extends a {
        constructor(e) {
            super(), this.id = s.event_game_start_id, this.label = s.event_game_start_label, 
            this.params = {
                timestamp: Date.now(),
                userId: e
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.gameStartEvt", n);
    class p extends a {
        constructor(e, t) {
            super(), this.id = s.event_game_over_id, this.label = s.event_game_over_label, this.params = {
                timestamp: Date.now(),
                userId: e,
                result: t
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.gameOverEvt", p);
    class r extends a {
        constructor(e, t) {
            super(), this.id = s.event_level_complete_id, this.label = s.event_level_complete_label, 
            this.params = {
                timestamp: Date.now(),
                userId: e,
                levelId: t
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.levelCompletedEvt", r);
    class d extends a {
        constructor(e, t) {
            super(), this.id = s.event_level_complete_id + "_" + t, this.label = s.event_level_complete_label + "_" + t, 
            this.params = {
                timestamp: Date.now(),
                userId: e,
                levelId: t
            };
        }
    }
    t.ClassUtils.regClass("zs.laya.tdapp.levelCompletedExEvt", d), e.tdAppSdk = s, e.tdAppEvent = a, 
    e.startupEvt = l, e.loginEvt = i, e.gameStartEvt = n, e.gameOverEvt = p, e.levelCompletedEvt = r, 
    e.levelCompletedExEvt = d;
}(window.zs.laya.tdapp = window.zs.laya.tdapp || {}, Laya);