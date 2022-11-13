var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
        function __() {
            this.constructor = t;
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype, 
        new __());
    };
}();

!function() {
    return function r(e, t, n) {
        function o(i, s) {
            if (!t[i]) {
                if (!e[i]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(i, !0);
                    if (a) return a(i, !0);
                    var c = new Error("Cannot find module '" + i + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                }
                var d = t[i] = {
                    exports: {}
                };
                e[i][0].call(d.exports, function(t) {
                    return o(e[i][1][t] || t);
                }, d, d.exports, r, e, t, n);
            }
            return t[i].exports;
        }
        for (var a = "function" == typeof require && require, i = 0; i < n.length; i++) o(n[i]);
        return o;
    };
}()({
    1: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = {}, o = {}, i = {}, r = function() {
            function YwSdk(e) {
                switch (this.PlatformObj = e, new s().get_alias()) {
                  case "oppo":
                    this.PlatformSdk = new _(this.PlatformObj);
                    break;

                  case "vivo":
                    this.PlatformSdk = new v(this.PlatformObj);
                    break;

                  case "toutiao":
                    this.PlatformSdk = new y(this.PlatformObj);
                    break;

                  case "wx":
                    this.PlatformSdk = new p(this.PlatformObj);
                    break;

                  case "qq":
                    this.PlatformSdk = new g(this.PlatformObj);
                    break;

                  case "meizu":
                    this.PlatformSdk = new m(this.PlatformObj);
                    break;

                  default:
                    console.log("平台信息错误");
                }
            }
            return YwSdk.prototype.register_callback = function(e, t) {
                return this.PlatformSdk.register_callback(e, t);
            }, YwSdk.prototype.jump_out = function(e, t) {
                return void 0 === t && (t = function(e) {}), this.PlatformSdk.jumpOut(e, t);
            }, YwSdk.prototype.init_app = function(e) {
                return this.PlatformSdk.initApp(e);
            }, YwSdk.prototype.on_show = function(e) {
                return void 0 === e && (e = function(e) {}), this.PlatformSdk.onShow(e);
            }, YwSdk.prototype.get_customise = function() {
                return this.PlatformSdk.get_customise();
            }, YwSdk.prototype.get_slide = function() {
                return this.PlatformSdk.get_slide();
            }, YwSdk.prototype.get_token = function() {
                return this.PlatformSdk.get_token();
            }, YwSdk.prototype.get_switch = function() {
                return this.PlatformSdk.get_switch();
            }, YwSdk.prototype.init_game = function(e) {
                return this.PlatformSdk.init_game(e);
            }, YwSdk;
        }();
        n.default = r;
        var s = function() {
            function YwSdk_config() {}
            return YwSdk_config.prototype.get_apiurl = function() {
                return "";
            }, YwSdk_config.prototype.get_appid = function() {
                return "wxf0c048cd29a191ec";
            }, YwSdk_config.prototype.get_game_version = function() {
                return "1.0.6";
            }, YwSdk_config.prototype.get_version = function() {
                return 1;
            }, YwSdk_config.prototype.get_alias = function() {
                return "wx";
            }, YwSdk_config.prototype.get_debug = function() {
                return !1;
            }, YwSdk_config;
        }(), l = function() {
            function YwSdk_platform_base(e) {
                this.PlatformObj = e, this.SysConfig = new s(), this.Storage = new c("", this.PlatformObj), 
                this.appid = this.SysConfig.get_appid(), this.game_version = this.SysConfig.get_game_version(), 
                this.alias = this.SysConfig.get_alias(), this.api_url = this.SysConfig.get_apiurl(), 
                this.debug = this.SysConfig.get_debug(), this.version = this.SysConfig.get_version(), 
                this.__callback = {}, this.onShow(function() {});
            }
            return YwSdk_platform_base.prototype.register_callback = function(e, t) {
                this.__callback[e] = t;
            }, YwSdk_platform_base.prototype.run_callback = function(e, t) {
                console.log("call_type", typeof this.__callback[e]), "function" == typeof this.__callback[e] && this.__callback[e](t);
            }, YwSdk_platform_base.prototype.get_customise = function() {
                return void 0 !== this.Storage.get("server_init_customise") && this.Storage.get("server_init_customise") ? this.Storage.get("server_init_customise") : o;
            }, YwSdk_platform_base.prototype.get_slide = function() {
                return void 0 !== this.Storage.get("server_init_slide") && this.Storage.get("server_init_slide") ? this.Storage.get("server_init_slide") : a;
            }, YwSdk_platform_base.prototype.get_switch = function() {
                return void 0 !== this.Storage.get("server_init_switch") && this.Storage.get("server_init_switch") ? this.Storage.get("server_init_switch") : i;
            }, YwSdk_platform_base.prototype.get_token = function() {
                return void 0 !== this.Storage.get("server_init_token", !0) && this.Storage.get("server_init_token", !0) ? this.Storage.get("server_init_token", !0) : "";
            }, YwSdk_platform_base.prototype.initApp = function(e) {
                this.console_log("开始初始化应用");
                var t = this, n = t.getLaunchOptionsSyncData();
                if (t.console_log("获取启动参数", n), this.get_token()) this.console_log("没有登录，开始调用启动方法"), 
                this.start(n); else {
                    this.console_log("开始调用登录方法"), this.login(function(a) {
                        t.console_log("初始化应用成功", a), t.start(n), t.console_log("调用启动参数成功");
                        var o = {
                            token: t.get_token(),
                            customise: t.get_customise(),
                            slide: t.get_slide(),
                            switch: t.get_switch()
                        };
                        t.console_log("init_data : ", o), e(a), t.run_callback("init_app", a);
                    });
                }
            }, YwSdk_platform_base.prototype.jumpOut = function(e, t) {
                this.console_log("执行jump_out方法");
                var n = this, a = {
                    token: this.get_token(),
                    to_appid: e.toAppid,
                    _id: e._id
                };
                this._ajax({
                    data: this.build_data("statistic.jump_out", a),
                    success: function(e) {
                        t(e), n.run_callback("jump_out", e), n.console_log("调用jump_out成功", e);
                    },
                    error: function(e) {
                        n.console_log("调用jump_out失败", e);
                    }
                });
            }, YwSdk_platform_base.prototype.onShow = function(e) {
                this.console_log("执行onShow方法");
                var t = this;
                this.getOnShowData(function(n) {
                    t.console_log("获取到解析后的onShow数据", n), t.start(n), t.console_log("发送数据到服务器成功,开始调用回调函数"), 
                    e(n), t.run_callback("on_show", n);
                });
            }, YwSdk_platform_base.prototype.start = function(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = function(e) {}), this.console_log("执行start方法");
                var n = this, a = e;
                a.token = this.get_token(), n.console_log("发送start数据", a), this._ajax({
                    data: this.build_data("statistic.start", a),
                    success: function(e) {
                        n.console_log("调用start成功", e), t(e);
                    },
                    error: function(e) {
                        n.console_log("调用start失败", e), t(e);
                    }
                });
            }, YwSdk_platform_base.prototype.init_game = function(e) {
                this.console_log("执行init_game方法");
                var t = this;
                this._ajax({
                    data: this.build_data("game.init_app", {}),
                    success: function(n) {
                        t.console_log("调用init_game成功", n), t.init_server_data(n.data), t.console_log("初始化init_game成功"), 
                        e(n.data), t.console_log("调用init_game回调函数成功");
                    },
                    error: function(e) {
                        t.console_log("调用init_game失败", e);
                    }
                });
            }, YwSdk_platform_base.prototype.login_sys = function(e, t, n) {
                void 0 === n && (n = !0), this.console_log("进入login_sys方法");
                var a = this;
                e = this.build_data("user.login", e), a.console_log("login_sys登录参数", e);
                var o = {
                    data: e,
                    error: function() {
                        a.console_log("登录失败");
                    },
                    success: function(e) {
                        a.console_log("调用登录接口成功", e), a.console_log("初始化数据对象完成，开始调用回调"), t(e);
                    }
                };
                this._ajax(o, n);
            }, YwSdk_platform_base.prototype.build_data = function(e, t) {
                e || this.console_log("action 不能为空");
                var n = this.getOperate(e);
                return t.operate = n, t.appid = this.appid, t.send_time = Date.now(), t.game_version = this.game_version, 
                "" === this.appid && this.console_log("appid 不能为空"), "" === this.game_version && this.console_log("版本号 不能为空"), 
                t;
            }, YwSdk_platform_base.prototype.init_server_data = function(e) {
                this.Storage.set("server_init_token", void 0 === e.token ? "" : e.token), this.Storage.set("server_init_customise", void 0 === e.customise ? "" : e.customise), 
                this.Storage.set("server_init_slide", void 0 === e.slide ? "" : e.slide), this.Storage.set("server_init_switch", void 0 === e.switch ? "" : e.switch);
            }, YwSdk_platform_base.prototype._ajax = function(e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "post");
                var a = e.data, o = this;
                if (void 0 === a) return !1;
                var i = new XMLHttpRequest();
                t ? i.open(n, this.api_url, t) : i.open(n, this.api_url), i.setRequestHeader("content-type", "application/json"), 
                i.send(JSON.stringify(a)), o.console_log("ajax发送的数据", e.data), i.onreadystatechange = function() {
                    if (o.console_log("状态", i.status), o.console_log("状态码", i.readyState), 200 === i.status && 4 === i.readyState) {
                        if (void 0 !== e.success) {
                            var t = JSON.parse(i.responseText);
                            return o.console_log("ajax接收到的数据", e.data), e.success(t);
                        }
                    } else if (200 !== i.status) {
                        if (void 0 !== typeof e.error) return o.console_log("获取数据异常", i), e.error();
                    } else o.console_log("请求数据错误", e.data);
                };
            }, YwSdk_platform_base.prototype.console_log = function(e, t) {
                this.debug && (t ? console.log(e, t) : console.log(e));
            }, YwSdk_platform_base.prototype.getOperate = function(e) {
                return this.alias + "." + this.version + "." + e;
            }, YwSdk_platform_base;
        }(), c = function() {
            function YwSdk_storage(e, t) {
                void 0 === e && (e = ""), this.storage_type = e, this.data = {}, this.PlatformObj = t;
            }
            return YwSdk_storage.prototype.type = function(e) {
                return void 0 === e && (e = "session"), this.storage_type = e, this;
            }, YwSdk_storage.prototype.set = function(e, t) {
                var n = "string" == typeof t ? t : JSON.stringify(t);
                switch (this.storage_type) {
                  case "session":
                    this.PlatformObj.sessionStorage.setItem(e, n);
                    break;

                  case "local":
                    this.PlatformObj.localStorage.setItem(e, n);
                    break;

                  default:
                    this.data[e] = n;
                }
            }, YwSdk_storage.prototype.get = function(e, t) {
                var n;
                switch (void 0 === t && (t = !1), this.storage_type) {
                  case "session":
                    n = this.PlatformObj.sessionStorage.getItem(e);
                    break;

                  case "local":
                    n = this.PlatformObj.localStorage.getItem(e);
                    break;

                  default:
                    n = void 0 === this.data[e] ? "{}" : this.data[e];
                }
                return t ? "{}" === (n = n.toString()) ? "" : n : "{}" === n ? "" : JSON.parse(n);
            }, YwSdk_storage;
        }(), d = function(e) {
            function Base_1() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(Base_1, e), Base_1.prototype.getLaunchOptionsSyncData = function() {
                var e = this.PlatformObj.getLaunchOptionsSync();
                if (console.log("get启动参数", e), e && (e.referrerInfo || (e.referrerInfo = {})), void 0 !== e.referrerInfo) return {
                    launch: {
                        path: e.path,
                        scene: e.scene,
                        query: e.query,
                        referrerInfo_extraData: e.referrerInfo.extraData,
                        referrerInfo_appId: e.referrerInfo.appId
                    }
                };
            }, Base_1.prototype.getOnShowData = function(e) {
                void 0 === e && (e = function(e) {});
                var t = this;
                this.PlatformObj.onShow(function(n) {
                    console.log("show_options", n);
                    var a = {
                        scene: n.scene,
                        query: n.query
                    };
                    void 0 !== n.referrerInfo && (t.console_log("获取onShow数据成功", n), a.path = n.referrerInfo.path, 
                    a.referrerInfo_extraData = n.referrerInfo.extraData, a.referrerInfo_appId = n.referrerInfo.appId), 
                    e({
                        launch: a
                    });
                });
            }, Base_1.prototype.login = function(e) {
                var t = this, n = this.PlatformObj.getLaunchOptionsSync();
                this.console_log("获取启动参数成功", n), this.PlatformObj.login({
                    success: function(n) {
                        t.console_log("调用" + t.alias + "平台登录成功", n), t.login_sys({
                            code: n.code
                        }, function(n) {
                            t.console_log("开始初始化系统参数", n), t.init_server_data(n.data.init), e(n.data.init);
                        }, !0);
                    },
                    fail: function(n) {
                        t.init_game(e), console.log("调用平台登录失败", n);
                    }
                });
            }, Base_1;
        }(l), u = function(e) {
            function Base_2() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(Base_2, e), Base_2.prototype.getLaunchOptionsSyncData = function() {
                return {
                    launch: {}
                };
            }, Base_2.prototype.getOnShowData = function(e) {
                void 0 === e && (e = function(e) {});
                this.PlatformObj.onShow(function(t) {
                    console.log("show_options", t);
                    "object" == typeof t && e({
                        launch: {}
                    });
                });
            }, Base_2.prototype.login = function(e) {
                var t = this;
                this.PlatformObj.login({
                    success: function(n) {
                        t.console_log("调用" + t.alias + "平台登录成功", n), t.login_sys({
                            token: n.token
                        }, function(n) {
                            t.console_log("开始初始化系统参数", n), t.init_server_data(n.data.init), e(n.data.init);
                        }, !1);
                    },
                    fail: function(e) {
                        console.log("调用平台登录失败", e);
                    }
                });
            }, Base_2;
        }(l), h = function(e) {
            function Base_3() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(Base_3, e), Base_3.prototype.getLaunchOptionsSyncData = function() {
                return {
                    launch: {}
                };
            }, Base_3.prototype.getOnShowData = function(e) {
                void 0 === e && (e = function(e) {});
                this.PlatformObj.onShow(function(t) {
                    console.log("show_options", t);
                    var n = {
                        launch: {
                            query: t.query.packageName,
                            referrerInfo_extraData: t.referrerInfo.extraData,
                            referrerInfo_package: t.referrerInfo.package
                        }
                    };
                    e(n);
                });
            }, Base_3.prototype.login = function(e) {
                var t = this;
                this.PlatformObj.login({
                    success: function(n) {
                        t.console_log("调用" + t.alias + "平台登录成功", n), t.login_sys({
                            token: n.token
                        }, function(n) {
                            t.console_log("开始初始化系统参数", n), t.init_server_data(n.data.init), e(n.data.init);
                        }, !0);
                    },
                    fail: function(e) {
                        console.log("调用平台登录失败", e);
                    }
                });
            }, Base_3;
        }(l), f = function(e) {
            function Base_4() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(Base_4, e), Base_4.prototype.getLaunchOptionsSyncData = function() {
                return {
                    launch: {}
                };
            }, Base_4.prototype.getOnShowData = function(e) {
                void 0 === e && (e = function(e) {});
                this.PlatformObj.onShow(function(t) {
                    console.log("show_options", t);
                    null == t && e({
                        launch: {}
                    });
                });
            }, Base_4.prototype.login = function(e) {
                var t = this;
                t.console_log("this.PlatformObj", this.PlatformObj), this.PlatformObj.getToken({
                    success: function(n) {
                        t.console_log("调用" + t.alias + "平台登录成功", n), t.login_sys({
                            token: n.token
                        }, function(n) {
                            t.console_log("开始初始化系统参数", n), t.init_server_data(n.data.init), e(n.data.init);
                        }, !1);
                    },
                    fail: function(n) {
                        console.log("调用平台登录失败", n), 4 == n.code && t.PlatformObj.getIMEI({
                            success: function(n) {
                                t.console_log("调用" + t.alias + "平台设备号成功", n), t.login_sys({
                                    token: n.imei
                                }, function(n) {
                                    t.console_log("开始初始化系统参数", n), t.init_server_data(n.data.init), e(n.data.init);
                                }, !1);
                            },
                            fail: function(e) {
                                console.log("调用平台设备号失败", e);
                            }
                        });
                    }
                });
            }, Base_4;
        }(l), p = function(e) {
            function YwSdk_wx() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_wx, e), YwSdk_wx;
        }(d), y = function(e) {
            function YwSdk_toutiao() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_toutiao, e), YwSdk_toutiao;
        }(d), g = function(e) {
            function YwSdk_qq() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_qq, e), YwSdk_qq;
        }(d), m = function(e) {
            function YwSdk_meizu() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_meizu, e), YwSdk_meizu;
        }(f), _ = function(e) {
            function YwSdk_oppo() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_oppo, e), YwSdk_oppo;
        }(u), v = function(e) {
            function YwSdk_vivo() {
                return null !== e && e.apply(this, arguments) || this;
            }
            return __extends(YwSdk_vivo, e), YwSdk_vivo;
        }(h);
    }, {} ],
    2: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./sceneui/CheckIn"), o = e("./sceneui/ExitPageUI"), i = e("./navigate/NavigateList"), r = e("./sceneui/ExportPageUI"), s = e("./sceneui/FreeUpgradeUI"), l = e("./sceneui/GameUI"), c = e("./anim/BtnScaleScript"), d = e("./sceneui/Goldfew"), u = e("./anim/AnimLight"), h = e("./sceneui/HomeUI"), f = e("./anim/BtnSwingScript"), p = e("./navigate/NavigateCircle"), y = e("./sceneui/LoadingUI"), g = e("./sceneui/MoreGameUI"), m = e("./sceneui/NewUnlockUI"), _ = e("./sceneui/OffTimeUI"), v = e("./sceneui/ResultVictoryUI"), C = e("./sceneui/TryOutUI"), S = e("./sceneui/VideoUnlockUI"), M = function() {
            function GameConfig() {}
            return GameConfig.init = function() {
                var e = Laya.ClassUtils.regClass;
                e("sceneui/CheckIn.ts", a.default), e("sceneui/ExitPageUI.ts", o.default), e("navigate/NavigateList.ts", i.default), 
                e("sceneui/ExportPageUI.ts", r.default), e("sceneui/FreeUpgradeUI.ts", s.default), 
                e("sceneui/GameUI.ts", l.default), e("anim/BtnScaleScript.ts", c.default), e("sceneui/Goldfew.ts", d.default), 
                e("anim/AnimLight.ts", u.default), e("sceneui/HomeUI.ts", h.default), e("anim/BtnSwingScript.ts", f.default), 
                e("navigate/NavigateCircle.ts", p.default), e("sceneui/LoadingUI.ts", y.default), 
                e("sceneui/MoreGameUI.ts", g.default), e("sceneui/NewUnlockUI.ts", m.default), e("sceneui/OffTimeUI.ts", _.default), 
                e("sceneui/ResultVictoryUI.ts", v.default), e("sceneui/TryOutUI.ts", C.default), 
                e("sceneui/VideoUnlockUI.ts", S.default);
            }, GameConfig.width = 750, GameConfig.height = 1334, GameConfig.scaleMode = "full", 
            GameConfig.screenMode = "none", GameConfig.alignV = "top", GameConfig.alignH = "left", 
            GameConfig.startScene = "scene/Loading.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1, 
            GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0, 
            GameConfig;
        }();
        n.default = M, M.init();
    }, {
        "./anim/AnimLight": 4,
        "./anim/BtnScaleScript": 5,
        "./anim/BtnSwingScript": 6,
        "./navigate/NavigateCircle": 32,
        "./navigate/NavigateList": 33,
        "./sceneui/CheckIn": 34,
        "./sceneui/ExitPageUI": 35,
        "./sceneui/ExportPageUI": 36,
        "./sceneui/FreeUpgradeUI": 37,
        "./sceneui/GameUI": 38,
        "./sceneui/Goldfew": 39,
        "./sceneui/HomeUI": 40,
        "./sceneui/LoadingUI": 41,
        "./sceneui/MoreGameUI": 42,
        "./sceneui/NewUnlockUI": 43,
        "./sceneui/OffTimeUI": 44,
        "./sceneui/ResultVictoryUI": 45,
        "./sceneui/TryOutUI": 46,
        "./sceneui/VideoUnlockUI": 47
    } ],
    3: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameConfig"), o = e("./yunwei/TweenExt");
        new (function() {
            function Main() {
                window.Laya3D ? Laya3D.init(a.default.width, a.default.height) : Laya.init(a.default.width, a.default.height, Laya.WebGL), 
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
                Laya.stage.scaleMode = "showall";//a.default.scaleMode, 
                // Laya.stage.screenMode = a.default.screenMode, 
                Laya.stage.alignV = a.default.alignV, Laya.stage.alignH = "center", Laya.URL.exportSceneToJson = a.default.exportSceneToJson, 
                (a.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
                a.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), 
                a.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            return Main.prototype.onVersionLoaded = function() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }, Main.prototype.onConfigLoaded = function() {
                o.TweenExt.init(), a.default.startScene && Laya.Scene.open(a.default.startScene);
            }, Main;
        }())();
    }, {
        "./GameConfig": 2,
        "./yunwei/TweenExt": 102
    } ],
    4: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function AnimLight() {
                var t = e.call(this) || this;
                return t.rate = 1, t;
            }
            return __extends(AnimLight, e), AnimLight.prototype.onEnable = function() {
                this.node = this.owner;
            }, AnimLight.prototype.onUpdate = function() {
                this.node && (this.node.rotation += 1 * this.rate);
            }, AnimLight.prototype.onDisable = function() {
                this.node.offAll(), this.node.removeSelf(), this.node.destroy();
            }, AnimLight;
        }(Laya.Script);
        n.default = a;
    }, {} ],
    5: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function BtnScaleScript() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.time = 0, t.duan = 1e3, t.max_scale = 1.3, t;
            }
            return __extends(BtnScaleScript, e), BtnScaleScript.prototype.onEnable = function() {
                this.node = this.owner;
            }, BtnScaleScript.prototype.onUpdate = function() {
                this.time += 1e3 / 60;
                var e = this.time / this.duan, t = 1;
                t = Math.floor(e) % 2 == 0 ? 1 + (e - Math.floor(e)) * (this.max_scale - 1) : 1 + (1 - (e - Math.floor(e))) * (this.max_scale - 1), 
                this.node && (this.node.destroyed || (this.node.scaleX = t, this.node.scaleY = t));
            }, BtnScaleScript.prototype.onDisable = function() {
                this.node.offAll(), this.node.removeSelf(), this.node.destroy();
            }, BtnScaleScript;
        }(Laya.Script);
        n.default = a;
    }, {} ],
    6: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function BtnSwingScript() {
                return e.call(this) || this;
            }
            return __extends(BtnSwingScript, e), BtnSwingScript.prototype.onEnable = function() {
                this.node = this.owner, this.timeLine = new Laya.TimeLine(), this.anim();
            }, BtnSwingScript.prototype.anim = function() {
                this.timeLine.to(this.node, {
                    rotation: 7
                }, 100), this.timeLine.to(this.node, {
                    rotation: -7
                }, 100), this.timeLine.to(this.node, {
                    rotation: 7
                }, 100), this.timeLine.to(this.node, {
                    rotation: -7
                }, 100), this.timeLine.to(this.node, {
                    rotation: 7
                }, 100), this.timeLine.to(this.node, {
                    rotation: -7
                }, 100), this.timeLine.to(this.node, {
                    rotation: 0
                }, 100), this.timeLine.to(this.node, {
                    rotation: 0
                }, 1e3), this.timeLine.play(0, !0);
            }, BtnSwingScript.prototype.onDisable = function() {
                this.node.offAll(), this.node.removeSelf(), this.node.destroy(), this.timeLine.pause(), 
                this.timeLine.destroy();
            }, BtnSwingScript;
        }(Laya.Script);
        n.default = a;
    }, {} ],
    7: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function CHData() {}
            return CHData.systemInfo = null, CHData.appName = "", CHData.screenWidth = Laya.Browser.clientWidth, 
            CHData.screenHeight = Laya.Browser.clientHeight, CHData.launchOption = null, CHData.sourceScene = null, 
            CHData.sourceAppId = null, CHData.videoEnable = !1, CHData;
        }();
        n.default = a;
    }, {} ],
    8: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./script/WxCH"), o = e("./script/QQCH"), i = e("./script/TTCH"), r = e("./script/BDCH"), s = e("./script/OppoCH"), l = e("./script/VivoCH"), c = e("./script/MzCH"), d = e("./script/UcCH"), u = function() {
            function CM(e) {
                console.log("platform:", e), CM.platform = e, this.initPlatform();
            }
            return CM.prototype.initPlatform = function() {
                console.log("CM.platform:", CM.platform), console.log("CM:", 1), CM.platform == CM.CH_WEIXIN ? CM.mainCH = new a.default(CM.onWindow()) : CM.platform == CM.CH_QQ ? CM.mainCH = new o.default(CM.onWindow()) : CM.platform == CM.CH_ZJ ? CM.mainCH = new i.default(CM.onWindow()) : CM.platform == CM.CH_BAIDU ? CM.mainCH = new r.default(CM.onWindow()) : CM.platform == CM.CH_OPPO ? CM.mainCH = new s.default(CM.onWindow()) : CM.platform == CM.CH_VIVO ? CM.mainCH = new l.default(CM.onWindow()) : CM.platform == CM.CH_MZ ? CM.mainCH = new c.default(CM.onWindow()) : CM.platform == CM.CH_UC && (CM.mainCH = new d.default(CM.onWindow()));
            }, CM.onWindow = function() {
                return CM.platform == CM.CH_WEIXIN ? Laya.Browser.window.wx : CM.platform == CM.CH_QQ ? Laya.Browser.window.qq : CM.platform == CM.CH_ZJ ? Laya.Browser.window.tt : CM.platform == CM.CH_BAIDU ? Laya.Browser.window.swan : CM.platform == CM.CH_OPPO ? Laya.Browser.window.qg : CM.platform == CM.CH_VIVO ? Laya.Browser.window.qg : CM.platform == CM.CH_XIAOMI ? Laya.Browser.window.qg : CM.platform == CM.CH_HUAWEI ? Laya.Browser.window.hbs : CM.platform == CM.CH_MZ ? Laya.Browser.window.mz : CM.platform == CM.CH_UC ? Laya.Browser.window.uc : void console.log("CM:", 4);
            }, CM.onMiniGame = function() {
                return CM.platform == CM.CH_WEIXIN ? Laya.Browser.onMiniGame : CM.platform == CM.CH_QQ ? "qq" in Laya.Browser.window && Laya.Browser.userAgent.indexOf("MiniGame") > -1 : CM.platform == CM.CH_ZJ ? Laya.Browser.onMiniGame : CM.platform == CM.CH_BAIDU ? Laya.Browser.onBDMiniGame : CM.platform != CM.CH_OPPO && (CM.platform != CM.CH_VIVO && (CM.platform == CM.CH_XIAOMI ? Laya.Browser.onKGMiniGame : CM.platform == CM.CH_HUAWEI || CM.platform != CM.CH_MZ && (CM.platform != CM.CH_UC && void 0)));
            }, CM.getPlatform = function() {
                return this.platform;
            }, CM.isPlatform = function(e) {
                return e == this.platform;
            }, CM.mainCH = null, CM.CH_WEIXIN = "WX", CM.CH_QQ = "QQ", CM.CH_ZJ = "ZJ", CM.CH_BAIDU = "BD", 
            CM.CH_VIVO = "VIVO", CM.CH_OPPO = "OPPO", CM.CH_HUAWEI = "HW", CM.CH_XIAOMI = "XM", 
            CM.CH_MZ = "MZ", CM.CH_UC = "UC", CM.platform = CM.CH_WEIXIN, CM;
        }();
        n.default = u;
    }, {
        "./script/BDCH": 9,
        "./script/MzCH": 11,
        "./script/OppoCH": 12,
        "./script/QQCH": 13,
        "./script/TTCH": 14,
        "./script/UcCH": 15,
        "./script/VivoCH": 16,
        "./script/WxCH": 17
    } ],
    9: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function BDCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "", n.bannerAd = null, n.banIndex = 0, n.bannerId = [ "" ], 
                n.insertAd = null, n.insertId = "", n;
            }
            return __extends(BDCH, e), BDCH.prototype.createVideoAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH.prototype.showVideoAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH.prototype.createBannerAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH.prototype.destroyBannerAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH.prototype.showBannerAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH.prototype.hideBannerAd = function() {
                throw new Error("Method not implemented.");
            }, BDCH;
        }(e("./BaseCH").default);
        n.default = a;
    }, {
        "./BaseCH": 10
    } ],
    10: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../CHData"), o = e("../../script/TotalTypeManager"), i = e("../../global/Global"), r = function() {
            function BaseCH(e) {
                this.ch = null, this.loadingTimeoutId = null, this.ch = e;
            }
            return BaseCH.prototype.login = function(e) {
                void 0 === e && (e = null), this.ch && this.ch.login({
                    success: function(t) {
                        e && e(!0, t), console.log("登录成功", t);
                    },
                    fail: function(t) {
                        e && e(!1, t), console.log("登录失败", t);
                    }
                });
            }, BaseCH.prototype.getSystem = function() {
                if (this.ch) {
                    var e = a.default.systemInfo = this.ch.getSystemInfoSync();
                    a.default.platform = e.platform, a.default.appName = a.default.systemInfo.appName, 
                    a.default.screenWidth = e.screenWidth, a.default.screenHeight = e.screenHeight, 
                    console.log("系统参数：", e);
                }
            }, BaseCH.prototype.getLaunchOptions = function() {
                if (this.ch) {
                    var e = a.default.launchOption = this.ch.getLaunchOptionsSync();
                    console.log("启动参数：", e), e && (e.referrerInfo || (e.referrerInfo = {}), a.default.sourceScene = a.default.launchOption.scene, 
                    a.default.sourceAppId = a.default.launchOption.query.source_appid ? a.default.launchOption.query.source_appid : a.default.launchOption.referrerInfo.appId);
                }
            }, BaseCH.prototype.onShowAlways = function() {
                if (this.ch) {
                    this.ch.onShow(function(e) {
                        console.log("监听回到前台事件 总是:", e);
                    });
                }
            }, BaseCH.prototype.onShow = function(e) {
                var t = this;
                if (void 0 === e && (e = null), this.ch) {
                    var n = function(a) {
                        console.log("监听回到前台事件 单次:", a), t.ch.offShow(n), e && e();
                    };
                    this.ch.offShow(n), this.ch.onShow(n);
                }
            }, BaseCH.prototype.onHide = function(e) {
                void 0 === e && (e = null), this.ch && this.ch.onHide(function() {
                    console.log("监听退出事件"), o.default.setLastLeavlTime(), o.default.setOffTime(), o.default.saveData(), 
                    e && e();
                });
            }, BaseCH.prototype.showLoading = function(e, t) {
                void 0 === e && (e = 3e3), void 0 === t && (t = null), this.ch && this.ch.showLoading({
                    title: "加载中...",
                    success: function(n) {
                        var a = this;
                        this.loadTimeoutId = setTimeout(function() {
                            a.hideLoading(), t && t();
                        }, e);
                    }
                });
            }, BaseCH.prototype.hideLoading = function() {
                this.ch && this.ch.hideLoading({
                    success: function(e) {
                        this.loadingTimeoutId && (clearTimeout(this.loadingTimeoutId), this.loadingTimeoutId = null);
                    }
                });
            }, BaseCH.prototype.showToast = function(e, t, n) {
                void 0 === t && (t = "none"), void 0 === n && (n = 2e3), this.ch && this.ch.showToast({
                    title: e,
                    icon: t,
                    duration: n
                });
            }, BaseCH.prototype.showModal = function(e, t, n, a) {
                void 0 === n && (n = !0), void 0 === a && (a = null), this.ch && this.ch.showModal({
                    title: e,
                    content: t,
                    showCancel: n,
                    success: function(e) {
                        e.confirm ? (console.log("玩家点击确定"), a && a(!0)) : e.cancel && (console.log("玩家点击取消"), 
                        a && a(!1));
                    }
                });
            }, BaseCH.prototype.vibrateShort = function() {
                this.ch && i.default.shake_switch && this.ch.vibrateShort({
                    success: function() {},
                    fail: function() {},
                    complete: function() {}
                });
            }, BaseCH.prototype.vibrateLong = function() {
                this.ch && i.default.shake_switch && this.ch.vibrateLong({
                    success: function() {},
                    fail: function() {},
                    complete: function() {}
                });
            }, BaseCH;
        }();
        n.default = r;
    }, {
        "../../global/Global": 28,
        "../../script/TotalTypeManager": 52,
        "../CHData": 7
    } ],
    11: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../dbmodule/OperationManager"), r = function(e) {
            function MzCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "yfZC8xjF", n.bannerAd = null, n.banIndex = 0, 
                n.bannerId = [ "ivUXNGW6" ], n.insertAd = null, n.insertId = "Lf0YWzqi", n.qg = null, 
                n.qg = Laya.Browser.window.qg, n.getSystemInfo(), n.onShowAlways(), n.createBannerAd(), 
                n.createVideoAd(), n.createInterstitialAd(), n.onHide(), n;
            }
            return __extends(MzCH, e), MzCH.prototype.getSystemInfo = function() {
                if (this.qg) {
                    var e = o.default.systemInfo = this.qg.getSystemInfoSync();
                    o.default.screenWidth = e.screenWidth, o.default.screenHeight = e.screenHeight, 
                    console.log("系统参数：", e);
                }
            }, MzCH.prototype.share = function(e, t, n) {
                var a = this;
                void 0 === e && (e = null), void 0 === t && (t = "article"), void 0 === n && (n = {}), 
                this.ch && i.default.shareDataLoad(function() {
                    var o = i.default.getOneShareData(), r = Laya.Browser.now() + "" + ~~(1e4 * (.1 + Math.random() / 2));
                    "article" == t ? a.ch.shareAppMessage({
                        title: o.title,
                        imageUrl: o.img_url,
                        query: "&sn=" + r + "&share_id=" + o.id,
                        extra: n,
                        success: function() {
                            console.log("分享成功"), e && e(!0);
                        },
                        fail: function(t) {
                            console.log("分享失败"), e && e(!1);
                        }
                    }) : a.ch.shareAppMessage({
                        channel: t,
                        title: o.title,
                        imageUrl: o.img_url,
                        query: "&sn=" + r + "&share_id=" + o.id,
                        extra: n,
                        success: function() {
                            console.log("分享成功"), e && e(!0);
                        },
                        fail: function(t) {
                            console.log("分享失败"), e && e(!1);
                        }
                    });
                });
            }, MzCH.prototype.createVideoAd = function() {
                this.qg;
            },  MzCH.prototype.createBannerAd = function(e) {
                if (void 0 === e && (e = !1), this.qg) {
                    var t = this.refreshBanId();
                    this.bannerAd = this.qg.createBannerAd({
                        adUnitId: this.bannerId,
                        adIntervals: t,
                        style: {
                            top: -1
                        }
                    });
                }
            }, MzCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, MzCH.prototype.destroyBannerAd = function() {}, MzCH.prototype.showBannerAd = function() {
                this.qg && (console.log("显示 banner"), this.bannerAd.show());
            }, MzCH.prototype.hideBannerAd = function() {
                this.qg && (console.log("隐藏 banner"), this.bannerAd.hide());
            }, MzCH.prototype.createInterstitialAd = function() {
                this.qg && (this.insertAd = this.qg.createInsertAd({
                    adUnitId: this.insertId
                }), this.insertAd.hide());
            }, MzCH.prototype.showInterstitialAd = function() {
                var e = this;
                console.log("显示插屏广告"), this.qg && (this.insertAd.load(), this.insertAd.onLoad(function() {
                    console.log("insert 广告加载成功"), e.insertAd.show(), e.insertAd.offLoad();
                }));
            }, MzCH.prototype.showToast = function(e, t, n) {
                void 0 === t && (t = "none"), void 0 === n && (n = 2e3), this.ch && this.ch.showToast({
                    message: e,
                    duration: n
                });
            }, MzCH;
        }(a.default);
        n.default = r;
    }, {
        "../../dbmodule/OperationManager": 24,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    12: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../global/SwitchManager"), r = function(e) {
            function OppoCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "188161", n.bannerAd = null, n.banIndex = 0, 
                n.bannerId = [ "188159" ], n.insertAd = null, n.insertId = "188160", n.nativeAd = null, 
                n.nativeId = "188162", n.isShowToast = !1, n.isShortcut = !0, n.videoCallback = null, 
                n.getSystem(), n.getLaunchOptions(), n.onShowAlways(), n.createBannerAd(), n.createVideoAd(), 
                n.createInterstitialAd(), n.onHide(), n;
            }
            return __extends(OppoCH, e), OppoCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    console.log("点击创建视频", this.ch), this.videoAd = this.ch.createRewardedVideoAd({
                        adUnitId: this.videoId
                    }), this.videoAd.onLoad(function() {
                        console.log("励视频加载成功"), o.default.videoEnable = !0, e.videoAd.offLoad();
                    }), this.videoAd.onError(function(t) {
                        console.log("视频创建错误：", t), o.default.videoEnable = !1, e.isShowToast && e.showToast("暂无广告，请稍后再试");
                    }), this.videoAd.load();
                    this.videoAd.onClose(function(t) {
                        t && t.isEnded ? (console.log("视频观看成功"), e.videoCallback && e.videoCallback(!0)) : (console.log("视频观看失败"), 
                        e.videoCallback && e.videoCallback(!1));
                    });
                }
            }, OppoCH.prototype.createBannerAd = function() {
                if (this.ch) {
                    var e = this.refreshBanId();
                    this.bannerAd = this.ch.createBannerAd({
                        adUnitId: e
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner创建成功 id=", e);
                    }), this.bannerAd.onResize(function() {
                        console.log("banner onresize");
                    }), this.bannerAd.onError(function(e) {
                        console.log("创建banner失败: ", e);
                    });
                }
            }, OppoCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, OppoCH.prototype.destroyBannerAd = function() {
                console.log("this.bannerAd：", this.bannerAd), this.bannerAd && (console.log("销毁banner"), 
                this.bannerAd.destroy(), this.bannerAd = null);
            }, OppoCH.prototype.resetBannerAd = function() {
                this.ch && (console.log("刷新banner"), this.destroyBannerAd(), this.createBannerAd(), 
                this.bannerAd.show());
            }, OppoCH.prototype.showBannerAd = function() {
                this.ch && this.bannerAd && (console.log("显示banner", this.bannerAd), this.bannerAd.show());
            }, OppoCH.prototype.hideBannerAd = function() {
                this.ch && this.bannerAd && this.bannerAd.hide();
            }, OppoCH.prototype.createInterstitialAd = function() {
                var e = this;
                this.ch && (this.insertAd = this.ch.createInsertAd({
                    adUnitId: this.insertId
                }), this.insertAd.onLoad(function() {
                    e.insertAd.offLoad(), console.log("插屏广告加载完毕");
                }), this.insertAd.onError(function(t) {
                    e.insertAd.offError(), console.log("插屏广告错误", t);
                }));
            }, OppoCH.prototype.showInterstitialAd = function(e) {
                var t = this;
                void 0 === e && (e = null), this.ch && this.insertAd && (console.log("进入展示插屏广告"), 
                this.insertAd.onClose(function() {
                    console.log("插屏广告关闭"), t.insertAd.offClose(), e && e();
                }), this.insertAd.load(), this.insertAd.show());
            }, OppoCH.prototype.gotoOther = function(e, t, n, a) {
                void 0 === a && (a = null), this.ch && t && this.ch.navigateToMiniGame({
                    pkgName: t,
                    path: n,
                    success: function() {
                        console.log("打开成功: pkgName = ", t), a && a(!0);
                    },
                    fail: function(e) {
                        console.log("打开失败: pkgName = ", t), a && a(!1);
                    }
                });
            }, OppoCH.prototype.createNativeAd = function(e) {
                var t = this;
                void 0 === e && (e = null), this.ch && (console.log("创建原生广告"), this.nativeAd = this.ch.createNativeAd({
                    adUnitId: this.nativeId
                }), this.nativeAd.onLoad(function(n) {
                    console.log("原生广告加载完毕", n.adList), t.adContent = n.adList[0], console.log("原生广告加载完毕1", n.adList[0]), 
                    console.log("原生广告加载完毕2", t.adContent), t.nativeAd.offLoad(), e && e(n.adList[0]);
                }), this.nativeAd.onError(function(e) {
                    console.log("原生广告错误", e), t.nativeAd.offError();
                }), this.nativeAd.load());
            }, OppoCH.prototype.clickNativeAd = function(e) {
                this.ch && (console.log("点击原生广告"), this.nativeAd && (this.nativeAd.reportAdShow({
                    adId: e
                }), this.nativeAd.reportAdClick({
                    adId: e
                })));
            }, OppoCH.prototype.destroyNativeAd = function() {
                this.ch && (console.log("销毁原生广告"), this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null));
            }, OppoCH.prototype.installShortcut = function(e) {
                var t = this;
                void 0 === e && (e = null);
                var n = Laya.Browser.window.qg;
                this.ch && i.default.install_shortcut && (console.log("点击 创建桌面图标"), n.hasShortcutInstalled({
                    success: function(a) {
                        t.isShortcut = !1, console.log("桌面图标是否存在:", a), 0 == a ? n.installShortcut({
                            success: function() {
                                console.log("创建桌面图标成功", a), e && e(!0);
                            },
                            fail: function(t) {
                                console.log("创建桌面图标失败", t), e && e(!0);
                            },
                            complete: function() {
                                console.log("创建桌面图标完成");
                            }
                        }) : t.showToast("桌面图标已创建", "none", 1e3);
                    },
                    fail: function(e) {},
                    complete: function() {}
                }));
            }, OppoCH.prototype.hasShortcutInstalled = function(e) {
                void 0 === e && (e = null), this.ch && this.ch.hasShortcutInstalled({
                    success: function(t) {
                        e && e(t);
                    },
                    fail: function(t) {
                        e && e(!1);
                    },
                    complete: function() {}
                });
            }, OppoCH.prototype.reportMonitor = function() {
                this.ch && (console.log("reportMonitor：", this.ch), this.ch.reportMonitor("game_scene", 0));
            }, OppoCH;
        }(a.default);
        n.default = r;
    }, {
        "../../global/SwitchManager": 30,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    13: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../dbmodule/OperationManager"), r = e("../../global/Global"), s = function(e) {
            function QQCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "2c473cc690cba1d1e8745d3338cbd153", n.bannerAd = null, 
                n.banIndex = 0, n.bannerId = [ "0caed23b1bf34f163ab7d0720cb87895" ], n.insertAd = null, 
                n.insertId = "4f48ec0d49a60bafd777f050e2c20636", n.boxAd = null, n.boxAdId = "5e0e7c3c816cef6c182f6f6c85cf857d", 
                n.share_start_time = 0, n.share_end_time = 0, n.share_interval_time = 3e3, n.videoCallback = null, 
                n.getSystem(), n.getLaunchOptions(), n.onShowAlways(), n.createBannerAd(), n.createVideoAd(), 
                n.createInterstitialAd(), n.setShareAppMessage(), n.createAppBox(), n.checkUpdate(), 
                n;
            }
            return __extends(QQCH, e), QQCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    this.videoAd = this.ch.createRewardedVideoAd({
                        adUnitId: this.videoId
                    }), this.videoAd.onLoad(function() {
                        console.log("视频创建成功"), o.default.videoEnable = !0, e.videoAd.offLoad();
                    }), this.videoAd.onError(function(e) {
                        console.log("视频创建错误：", e), o.default.videoEnable = !1;
                    }), this.videoAd.load();
                    this.videoAd.onClose(function(t) {
                        t && t.isEnded ? (console.log("视频观看成功"), e.videoCallback && e.videoCallback(!0)) : (console.log("视频观看失败"), 
                        e.videoCallback && e.videoCallback(!1)), r.default.sound_switch || (Laya.SoundManager.muted = !0);
                    });
                }
            }, QQCH.prototype.createBannerAd = function() {
                var e = this;
                if (this.ch) {
                    var t = this.refreshBanId();
                    this.bannerAd = this.ch.createBannerAd({
                        adUnitId: t,
                        adIntervals: 30,
                        style: {
                            top: o.default.screenHeight - 80,
                            left: 0,
                            width: o.default.screenWidth
                        }
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner创建成功 id=", t), e.bannerAd.offLoad();
                    }), this.bannerAd.onResize(function() {
                        console.log("Resize", e.bannerAd), e.bannerAd.style.left = (o.default.screenWidth - e.bannerAd.style.realWidth) / 2, 
                        e.bannerAd.style.top = o.default.screenHeight - e.bannerAd.style.realHeight, e.bannerAd.offResize();
                    }), this.bannerAd.onError(function(e) {
                        console.log("创建banner失败: ", e);
                    });
                }
            }, QQCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, QQCH.prototype.destroyBannerAd = function() {
                this.bannerAd && (console.log("销毁 banner"), this.bannerAd.destroy(), this.bannerAd = null);
            }, QQCH.prototype.resetBannerAd = function() {
                this.ch && (console.log("刷新 banner"), this.destroyBannerAd(), this.createBannerAd(), 
                this.bannerAd.show());
            }, QQCH.prototype.showBannerAd = function() {
                this.ch && this.bannerAd && (console.log("显示 banner"), this.bannerAd.show());
            }, QQCH.prototype.hideBannerAd = function() {
                console.log("隐藏 banner"), this.ch && this.bannerAd && this.bannerAd.hide();
            }, QQCH.prototype.createInterstitialAd = function() {
                var e = this;
                this.ch && (this.insertAd = this.ch.createInterstitialAd({
                    adUnitId: this.insertId
                }), this.insertAd.onLoad(function() {
                    console.log("插屏广告加载完毕"), e.insertAd.offLoad();
                }), this.insertAd.onError(function(t) {
                    console.log("插屏广告错误", t), e.insertAd.offError();
                }));
            }, QQCH.prototype.showInterstitialAd = function(e) {
                var t = this;
                (void 0 === e && (e = null), console.log("显示插屏广告"), this.ch && this.insertAd) && (e && (this.insertAd.offClose(), 
                this.insertAd.onClose(function() {
                    console.log("插屏广告关闭"), t.insertAd.offClose(), e && e();
                })), this.insertAd.show().catch(function(e) {
                    console.log("创建插屏广告失败"), console.log("errCode:" + e.errMsg + ",errMsg:" + e.errCode);
                }));
            }, QQCH.prototype.showShareMenu = function() {
                this.ch && (this.setShareAppMessage(), this.ch.showShareMenu({
                    withShareTicket: !1
                }), console.log("显示转发按钮"));
            }, QQCH.prototype.setShareAppMessage = function() {
                var e = this;
                this.ch && (console.log("设置转发信息"), i.default.shareDataLoad(function() {
                    e.ch.onShareAppMessage(function() {
                        var e = i.default.getOneShareData();
                        return console.log("setShareAppMessage sdb: ", e), {
                            title: e.title,
                            imageUrl: e.img_url,
                            success: function(e) {},
                            fail: function(e) {}
                        };
                    });
                }));
            }, QQCH.prototype.share = function(e) {
                var t = this;
                if (void 0 === e && (e = null), this.ch) {
                    if (!i.default.isCanShareToday()) return void this.showToast("今日奖励次数已达上限");
                    this.share_start_time = Laya.Browser.now();
                    this.onShow(function(n) {
                        t.share_end_time = Laya.Browser.now(), t.share_end_time - t.share_start_time >= t.share_interval_time ? (e && e(!0), 
                        i.default.addShareToday()) : e && e(!1);
                    }), i.default.shareDataLoad(function() {
                        var e = i.default.getOneShareData(), n = Laya.Browser.now() + "" + ~~(1e4 * (.1 + Math.random() / 2));
                        t.ch.shareAppMessage({
                            title: e.title,
                            imageUrl: e.img_url,
                            query: "&sn=" + n + "&share_id=" + e.id
                        });
                    });
                }
            }, QQCH.prototype.gotoOther = function(e, t, n) {
                void 0 === n && (n = null), this.ch && e && this.ch.navigateToMiniProgram({
                    appId: e,
                    path: t,
                    success: function(t) {
                        console.log("打开成功: appId = ", e), n && n(!0);
                    },
                    fail: function(t) {
                        console.log("打开失败: appId = ", e), n && n(!1);
                    }
                });
            }, QQCH.prototype.createAppBox = function() {
                this.ch && (this.boxAd = this.ch.createAppBox({
                    adUnitId: this.boxAdId
                }), this.boxAd.load());
            }, QQCH.prototype.showAppBox = function() {
                this.ch && this.boxAd && this.boxAd.show();
            }, QQCH.prototype.addColorSign = function(e) {
                void 0 === e && (e = null), this.ch && this.ch.addColorSign({
                    success: function(t) {
                        console.log("----subscribeAppMsg----success", t), e && e(!0);
                    },
                    fail: function(t) {
                        console.log("----subscribeAppMsg----fail", t), e && e(!0);
                    }
                });
            }, QQCH.prototype.saveAppToDesktop = function() {
                this.ch && this.ch.saveAppToDesktop();
            }, QQCH.prototype.subscribeAppMsg = function() {
                this.ch && this.ch.subscribeAppMsg({
                    subscribe: !0,
                    success: function(e) {
                        console.log("----subscribeAppMsg----success", e);
                    },
                    fail: function(e) {
                        console.log("----subscribeAppMsg----fail", e);
                    }
                });
            }, QQCH.prototype.checkUpdate = function() {
                var e = this;
                if (this.ch) {
                    var t = this.ch.getUpdateManager();
                    t.onCheckForUpdate(function(e) {
                        console.log("是否有新版本:", e.hasUpdate);
                    }), t.onUpdateFailed(function() {
                        e.showToast("新版本下载失败");
                    }), t.onUpdateReady(function() {
                        e.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, function(e) {
                            e && t.applyUpdate();
                        });
                    });
                }
            }, QQCH;
        }(a.default);
        n.default = s;
    }, {
        "../../dbmodule/OperationManager": 24,
        "../../global/Global": 28,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    14: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../dbmodule/OperationManager"), r = e("../../global/SwitchManager"), s = function(e) {
            function TTCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "2rqd5wdjpp40bmff4d", n.bannerAd = null, n.banIndex = 0, 
                n.bannerId = [ "d5qmn16ddbf2j3m7ia" ], n.insertAd = null, n.insertId = "35e9gsqo2nt1iqvov0", 
                n.btnMoreGame = null, n.gameRecorderManager = null, n.isRecording = !1, n.recordingBeginTime = 0, 
                n.recordingEndTime = 0, n.clipIndexList = [], n.recordResp = null, n.recordTime = 0, 
                n.videoCallback = null, n.getSystem(), n.getLaunchOptions(), n.onShowAlways(), n.createVideoAd(), 
                n.getGameRecorderManager(), n.checkUpdate(), n.onHide(), n;
            }
            return __extends(TTCH, e), TTCH.prototype.share = function(e, t, n) {
                if (void 0 === e && (e = null), void 0 === t && (t = "article"), void 0 === n && (n = {}), 
                this.ch) {
                    var a = i.default.getOneShareData(), o = Laya.Browser.now() + "" + ~~(1e4 * (.1 + Math.random() / 2));
                    "article" == t ? this.ch.shareAppMessage({
                        title: a.title,
                        imageUrl: a.img_url,
                        query: "&sn=" + o + "&share_id=" + a.id,
                        extra: n,
                        success: function() {
                            e && e(!0);
                        },
                        fail: function(t) {
                            e && e(!1);
                        }
                    }) : this.ch.shareAppMessage({
                        channel: t,
                        title: a.title,
                        imageUrl: a.img_url,
                        query: "&sn=" + o + "&share_id=" + a.id,
                        extra: n,
                        success: function() {
                            e && e(!0);
                        },
                        fail: function(t) {
                            e && e(!1);
                        }
                    });
                }
            }, TTCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    this.videoAd = this.ch.createRewardedVideoAd({
                        adUnitId: this.videoId
                    }), this.videoAd.onLoad(function() {
                        o.default.videoEnable = !0;
                    }), this.videoAd.onError(function(e) {
                        o.default.videoEnable = !1;
                    }), this.videoAd.load();
                    this.videoAd.onClose(function(t) {
                        t && t.isEnded ? e.videoCallback && e.videoCallback(!0) : e.videoCallback && e.videoCallback(!1);
                    });
                }
            }, TTCH.prototype.createBannerAd = function() {
                var e = this;
                if (this.ch) {
                    var t = this.refreshBanId(), n = 150;
                    n = Laya.Browser.width / Laya.Browser.height < .5 ? 250 : 150, this.bannerAd = this.ch.createBannerAd({
                        adUnitId: t,
                        style: {
                            width: n,
                            top: o.default.screenHeight - n / 16 * 9
                        }
                    }), this.bannerAd.onLoad(function() {
                        e.hideBannerAd();
                    }), this.bannerAd.onError(function(e) {}), this.bannerAd.onResize(function(t) {
                        e.bannerAd.style.top = o.default.screenHeight - t.height, e.bannerAd.style.left = (o.default.screenWidth - t.width) / 2;
                    });
                }
            }, TTCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, TTCH.prototype.destroyBannerAd = function() {
                this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
            }, TTCH.prototype.resetBannerAd = function() {
                this.ch && (this.destroyBannerAd(), this.createBannerAd(), this.showBannerAd());
            }, TTCH.prototype.showBannerAd = function() {
                this.ch && this.bannerAd && r.default.game_banner && this.bannerAd.show();
            }, TTCH.prototype.hideBannerAd = function() {
                this.bannerAd && this.bannerAd.hide();
            }, TTCH.prototype.createInterstitialAd = function() {
                var e = this, t = "Toutiao" === o.default.appName;
                this.ch && t && (this.insertAd = this.ch.createInterstitialAd({
                    adUnitId: this.insertId
                }), this.insertAd.onLoad(function() {
                    e.insertAd.offLoad();
                }), this.insertAd.onError(function(t) {
                    e.insertAd.offError();
                }));
            }, TTCH.prototype.showInterstitialAd = function(e) {
                var t = this;
                this.ch && this.insertAd ? (e && this.insertAd.onClose(function() {
                    t.insertAd.offClose(), e();
                }), this.insertAd.show().catch(function(e) {})) : e && e();
            }, TTCH.prototype.getGameRecorderManager = function() {
                var e = this;
                this.ch && (this.gameRecorderManager = this.ch.getGameRecorderManager(), this.gameRecorderManager.onError(function(e) {}), 
                this.gameRecorderManager.onInterruptionBegin(function(t) {
                    e.showToast("录屏中断");
                }), this.gameRecorderManager.onInterruptionEnd(function(t) {
                    e.showToast("录屏中断");
                }), this.gameRecorderManager.onStart(function(t) {
                    e.isRecording = !0, e.recordingBeginTime = new Date().getTime();
                }), this.gameRecorderManager.onStop(function(t) {
                    e.recordResp = t, e.isRecording = !1, e.recordingEndTime = new Date().getTime(), 
                    e.recordClip();
                }));
            }, TTCH.prototype.startGameRecorderManager = function() {
                this.ch && this.gameRecorderManager.start({
                    duration: 300
                });
            }, TTCH.prototype.stopGameRecorderManager = function() {
                this.ch && this.gameRecorderManager.stop();
            }, TTCH.prototype.recordClip = function() {
                this.ch && (this.recordTime = Math.floor((this.recordingEndTime - this.recordingBeginTime) / 1e3), 
                this.gameRecorderManager.recordClip({
                    timeRange: [ this.recordTime, 0 ]
                }));
            }, TTCH.prototype.recordShare = function(e) {
                void 0 === e && (e = null), this.ch && (this.recordTime > 3 ? this.share(function(t) {
                    e && e(t);
                }, "video", {
                    videoPath: this.recordResp.videoPath
                }) : this.showToast("录屏时间不足"));
            }, TTCH.prototype.createBtnMoreGame = function(e, t, n) {
                if (this.ch) {
                    var a = Laya.Browser.width / 640, o = 450;
                    o = Laya.Browser.width / Laya.Browser.height < .5 ? 550 : 450, this.btnMoreGame = this.ch.createMoreGamesButton({
                        type: "image",
                        image: e,
                        style: {
                            left: 0,
                            top: o * a / Laya.Browser.pixelRatio,
                            width: t * a / Laya.Browser.pixelRatio,
                            height: n * a / Laya.Browser.pixelRatio,
                            lineHeight: 0,
                            backgroundColor: "#00000000",
                            textColor: "#00000000",
                            textAlign: "center",
                            fontSize: 16,
                            borderRadius: 4,
                            borderWidth: 1,
                            borderColor: "#00000000"
                        },
                        appLaunchOptions: [],
                        onNavigateToMiniGame: function(e) {}
                    }), this.btnMoreGame.onTap(function() {});
                }
            }, TTCH.prototype.showBtnMoreGame = function() {
                this.ch && this.btnMoreGame && this.btnMoreGame.show();
            }, TTCH.prototype.showMoreGamesModal = function() {
                this.ch && r.default.isShowSideBox() && this.ch.showMoreGamesModal({
                    appLaunchOptions: [],
                    success: function(e) {},
                    fail: function(e) {},
                    onNavigateToMiniGame: function(e) {}
                });
            }, TTCH.prototype.hideBtnMoreGame = function() {
                this.ch && this.btnMoreGame && this.btnMoreGame.hide();
            }, TTCH.prototype.checkUpdate = function() {
                var e = this;
                if (this.ch) {
                    var t = this.ch.getUpdateManager();
                    t.onCheckForUpdate(function(e) {}), t.onUpdateFailed(function() {
                        e.showToast("新版本下载失败");
                    }), t.onUpdateReady(function() {
                        e.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, function(e) {
                            e && t.applyUpdate();
                        });
                    });
                }
            }, TTCH;
        }(a.default);
        n.default = s;
    }, {
        "../../dbmodule/OperationManager": 24,
        "../../global/SwitchManager": 30,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    15: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../dbmodule/OperationManager"), r = e("../../sysloader/LoaderManeger"), s = e("../../script/TotalTypeManager"), l = function(e) {
            function UcCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "159231", n.bannerAd = null, n.banIndex = 0, 
                n.bannerId = [ "159225", "159225" ], n.insertAd = null, n.insertId = "159226", n.nativeAd = null, 
                n.nativeId = "159230", n.videoCallback = null, n.addEventListener(), n.createVideoAd(), 
                n;
            }
            return __extends(UcCH, e), UcCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    console.log("点击创建视频"), this.videoAd = this.ch.createRewardVideoAd(), this.videoAd.onLoad(function() {
                        console.log("励视频加载成功"), o.default.videoEnable = !0, e.videoAd.offLoad();
                    }), this.videoAd.onError(function(e) {
                        console.log("视频创建错误：", e), o.default.videoEnable = !1;
                    }), this.videoAd.load();
                    this.videoAd.onClose(function(t) {
                        t && t.isEnded ? (console.log("视频观看成功"), e.videoCallback && e.videoCallback(!0)) : (console.log("视频观看失败"), 
                        e.videoCallback && e.videoCallback(!1));
                    });
                }
            }, UcCH.prototype.createBannerAd = function() {
                var e = this;
                if (this.ch) {
                    var t = this.refreshBanId();
                    this.bannerAd = this.ch.createBannerAd({
                        adUnitId: t,
                        adIntervals: 30,
                        style: {
                            gravity: 7
                        }
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner创建成功 id=", t), e.bannerAd.offLoad();
                    }), this.bannerAd.onResize(function() {
                        console.log("Resize", e.bannerAd), e.bannerAd.offResize();
                    }), this.bannerAd.onError(function(e) {
                        console.log("创建banner失败: ", e);
                    }), this.hideBannerAd();
                }
            }, UcCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, UcCH.prototype.destroyBannerAd = function() {
                console.log("this.bannerAd：", this.bannerAd), this.bannerAd && (console.log("销毁banner"), 
                this.bannerAd.destroy(), this.bannerAd = null);
            }, UcCH.prototype.resetBannerAd = function() {
                this.ch && (console.log("刷新banner"), this.destroyBannerAd(), this.createBannerAd());
            }, UcCH.prototype.showBannerAd = function() {
                this.ch && this.bannerAd && (console.log("显示banner", this.bannerAd), this.bannerAd.show());
            }, UcCH.prototype.hideBannerAd = function() {
                this.ch && this.bannerAd && this.bannerAd.hide();
            }, UcCH.prototype.createInterstitialAd = function() {
                this.ch;
            }, UcCH.prototype.showInterstitialAd = function() {
                console.log("显示插屏广告"), this.ch;
            }, UcCH.prototype.shareAppMessage = function() {
                var e = this;
                this.ch && i.default.shareDataLoad(function() {
                    var t = i.default.getOneShareData(), n = Laya.Browser.now() + "" + ~~(1e4 * (.1 + Math.random() / 2));
                    e.ch.shareAppMessage({
                        title: t.title,
                        imageUrl: t.img_url,
                        query: "&sn=" + n + "&share_id=" + t.id,
                        success: function(e) {
                            console.log("shareAppMessage share success", JSON.stringify(e));
                        },
                        fail: function(e) {
                            console.log("shareAppMessage share fail", JSON.stringify(e));
                        }
                    });
                });
            }, UcCH.prototype.reportUserAction = function() {
                this.ch && this.ch.reportUserAction({
                    scene: "xxx",
                    action: "PLAY",
                    score: "100",
                    success: function(e) {
                        console.log(e);
                    },
                    fail: function(e) {
                        console.error(e);
                    }
                });
            }, UcCH.prototype.addEventListener = function() {
                this.ch && document.addEventListener("visibilitychange", function(e) {
                    console.log(document.visibilityState), "visible" == document.visibilityState && (console.log("回到前台"), 
                    r.default.instance.playMusic(60001)), "hidden" == document.visibilityState && (console.log("退出前台"), 
                    s.default.setLastLeavlTime(), s.default.setOffTime(), s.default.saveData());
                });
            }, UcCH.prototype.showToast = function(e, t, n) {
                void 0 === t && (t = "none"), void 0 === n && (n = 2e3), this.ch && this.ch.showToast({
                    content: e,
                    duration: n
                });
            }, UcCH;
        }(a.default);
        n.default = l;
    }, {
        "../../dbmodule/OperationManager": 24,
        "../../script/TotalTypeManager": 52,
        "../../sysloader/LoaderManeger": 72,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    16: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../global/SwitchManager"), r = e("../../global/Global"), s = function(e) {
            function VivoCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "174f58e0c8eb49f4b73186e5fe581052", n.bannerAd = null, 
                n.banIndex = 0, n.bannerId = [ "5ae48d7074d34334b302706db684e45c" ], n.insertAd = null, 
                n.insertId = "494feb90299b45c1a846a82d10bc4b34", n.nativeAd = null, n.nativeCurrentAd = null, 
                n.nativeId = "4f06ffc93e714cbb9e4f5ae2a62cdd52", n.adList = [], n.bannerAdHeight = 200, 
                n.videoCallback = null, n.getSystem(), n.onShowAlways(), n.createBannerAd(), n.createVideoAd(), 
                n.onHide(), n;
            }
            return __extends(VivoCH, e), VivoCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    this.videoAd = qg.createRewardedVideoAd({
                        posId: this.videoId
                    }), this.videoAd.onLoad(function() {
                        console.log("视频创建成功"), o.default.videoEnable = !0, e.videoAd.offLoad();
                    }), this.videoAd.onError(function(e) {
                        o.default.videoEnable = !1, console.log("加载视频失败：", e);
                    });
                }
            },  VivoCH.prototype.createBannerAd = function() {
                var e = this;
                if (this.ch) {
                    this.bannerAdHeight = 200;
                    var t = this.refreshBanId();
                    this.bannerAd = qg.createBannerAd({
                        posId: t,
                        style: {}
                    });
                    this.bannerAd.onSize(function(t) {
                        console.log("banner大小：", t), e.bannerAdHeight = t.height, e.bannerAd.offSize();
                    }), this.bannerAd.onError(function(e) {});
                }
            }, VivoCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, VivoCH.prototype.destroyBannerAd = function() {
                this.bannerAd && this.bannerAd.destroy();
            }, VivoCH.prototype.resetBannerAd = function() {
                this.ch && (this.destroyBannerAd(), this.createBannerAd(), this.bannerAd.show());
            }, VivoCH.prototype.showBannerAd = function() {
                var e = this;
                this.ch && this.bannerAd && this.bannerAd.show().then(function() {
                    console.log("banner广告展示成功");
                }).catch(function(t) {
                    console.log("banner广告展示失败", t), e.resetBannerAd();
                });
            }, VivoCH.prototype.hideBannerAd = function() {
                this.bannerAd && this.bannerAd.hide();
            }, VivoCH.prototype.createInterstitialAd = function() {
                this.ch && (this.insertAd = this.ch.createInterstitialAd({
                    posId: this.insertId
                }), this.insertAd.show().then(function() {
                    console.log("插屏广告展示成功");
                }).catch(function(e) {
                    console.log("插屏广告失败：", e);
                }));
            }, VivoCH.prototype.showInterstitialAd = function() {
                this.ch && (this.insertAd = this.ch.createInterstitialAd({
                    posId: this.insertId
                }), this.insertAd.show().then(function() {
                    console.log("插屏广告展示成功");
                }).catch(function(e) {
                    console.log("插屏广告展示失败：", e);
                }));
            }, VivoCH.prototype.createNativeAd = function(e) {
                var t = this;
                void 0 === e && (e = null), this.ch && (console.log("创建原生广告"), this.nativeAd = this.ch.createNativeAd({
                    adUnitId: this.nativeId
                }), this.nativeAd.onLoad(function(n) {
                    console.log("原生广告加载完毕", n.adList), t.adContent = n.adList[0], e && e(n.adList[0]), 
                    t.nativeAd.offLoad();
                }), this.nativeAd.onError(function(e) {
                    console.log("原生广告错误", e), t.nativeAd.offError();
                }), this.nativeAd.load());
            }, VivoCH.prototype.destroyNativeAd = function() {
                this.ch && (console.log("销毁原生广告"), this.nativeAd && (this.nativeAd.destroy(), this.nativeAd = null));
            }, VivoCH.prototype.clickNativeAd = function(e) {
                this.ch && this.nativeAd && (this.nativeAd.reportAdShow({
                    adId: e + ""
                }), this.nativeAd.reportAdClick({
                    adId: e + ""
                }));
            }, VivoCH.prototype.installShortcut = function() {
                var e = this.ch = Laya.Browser.window.qg;
                this.ch && i.default.install_shortcut && e.installShortcut({
                    success: function() {
                        console.log("创建成功");
                    },
                    fail: function(e) {
                        console.log("创建失败", e);
                    },
                    complete: function() {}
                });
            }, VivoCH.prototype.hasShortcutInstalled = function(e) {
                void 0 === e && (e = null);
                this.ch = Laya.Browser.window.qg;
                this.ch && this.ch.hasShortcutInstalled({
                    success: function(t) {
                        e && e(t);
                    },
                    fail: function(t) {
                        e && e(!1);
                    }
                });
            }, VivoCH.prototype.share = function(e) {
                var t = this;
                void 0 === e && (e = null), this.ch && this.ch.share({
                    success: function() {
                        e && e(!0), t.showToast("分享成功");
                    },
                    fail: function(n, a) {
                        e && e(!1), t.showToast("分享失败");
                    },
                    cancel: function() {
                        e && e(!1), t.showToast("取消分享");
                    },
                    complete: function() {}
                });
            }, VivoCH.prototype.gotoOther = function(e, t, n) {
                void 0 === n && (n = null), this.ch && t && this.ch.navigateToMiniGame({
                    pkgName: t,
                    success: function() {
                        console.log("打开成功: pkgName = ", t), n && n(!0);
                    },
                    fail: function(e) {
                        console.log("打开失败: pkgName = ", t), n && n(!1);
                    }
                });
            }, VivoCH;
        }(a.default);
        n.default = s;
    }, {
        "../../global/Global": 28,
        "../../global/SwitchManager": 30,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    17: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BaseCH"), o = e("../CHData"), i = e("../../dbmodule/OperationManager"), r = e("../../global/SwitchManager"), s = function(e) {
            function WxCH(t) {
                var n = e.call(this, t) || this;
                return n.videoAd = null, n.videoId = "adunit-c763ae2b813549f1", n.bannerAd = null, 
                n.banIndex = 0, n.bannerId = [ "adunit-d456d9e07f540d53", "adunit-d1108322cb5f0ab1" ], 
                n.insertAd = null, n.insertId = "adunit-d5b965946aea0e47", n.share_start_time = 0, 
                n.share_end_time = 0, n.share_interval_time = 3e3, n.isBannerShow = !1, n.videoCallback = null, 
                n.getSystem(), n.getLaunchOptions(), n.onShowAlways(), n.createBannerAd(), n.createVideoAd(), 
                n.checkUpdate(), n.onHide(), n;
            }
            return __extends(WxCH, e), WxCH.prototype.createVideoAd = function() {
                var e = this;
                if (this.ch) {
                    this.videoAd = this.ch.createRewardedVideoAd({
                        adUnitId: this.videoId
                    }), this.videoAd.onLoad(function() {
                        console.log("视频创建成功"), o.default.videoEnable = !0, e.videoAd.offLoad();
                    }), this.videoAd.onError(function(e) {
                        console.log("视频创建错误：", e), o.default.videoEnable = !1;
                    }), this.videoAd.load();
                    this.videoAd.onClose(function(t) {
                        t && t.isEnded ? (console.info("视频观看成功"), e.videoCallback && e.videoCallback(!0)) : (console.log("视频观看失败"), 
                        e.videoCallback && e.videoCallback(!1));
                    });
                }
            }, WxCH.prototype.showVideoAd = function(e) {

                platform.getInstance().showReward(()=>{
                    e && e(true);
                })

                // console.log("showVideoAdshowVideoAdshowVideoAdshowVideoAd");
                // var t = this;
                // void 0 === e && (e = null), this.ch && this.videoAd && (this.videoCallback = e, 
                // this.videoAd.show().catch(function(n) {
                //     t.showToast("暂无广告，请稍后再试"), e && e(!1);
                // }));
            }, WxCH.prototype.createBannerAd = function() {
                var e = this;
                if (this.ch) {
                    var t = this.refreshBanId();
                    this.bannerAd = this.ch.createBannerAd({
                        adUnitId: t,
                        adIntervals: 30,
                        style: {
                            left: 80,
                            top: o.default.screenHeight - 80,
                            width: 300
                        }
                    }), this.bannerAd.onLoad(function() {
                        console.log("banner创建成功 id=", t), e.bannerAd.offLoad();
                    }), this.bannerAd.onResize(function() {
                        console.log("Resize", e.bannerAd), e.bannerAd.style.left = (o.default.screenWidth - e.bannerAd.style.realWidth) / 2, 
                        e.bannerAd.style.top = o.default.screenHeight - e.bannerAd.style.realHeight, e.bannerAd.offResize();
                    }), this.bannerAd.onError(function(e) {
                        console.log("创建banner失败: ", e);
                    }), this.isBannerShow ? this.showBannerAd() : this.hideBannerAd();
                }
            }, WxCH.prototype.refreshBanId = function() {
                return this.banIndex++, this.banIndex > this.bannerId.length - 1 && (this.banIndex = 0), 
                this.bannerId[this.banIndex];
            }, WxCH.prototype.destroyBannerAd = function() {
                this.bannerAd && (console.log("销毁 banner"), this.bannerAd.destroy(), this.bannerAd = null);
            }, WxCH.prototype.resetBannerAd = function() {
                this.ch && (console.log("刷新 banner"), this.destroyBannerAd(), this.createBannerAd());
            }, WxCH.prototype.showBannerAd = function() {
                this.isBannerShow = !0, this.ch && this.bannerAd && r.default.game_banner && (console.log("显示 banner"), 
                this.bannerAd.show());
            }, WxCH.prototype.hideBannerAd = function() {
                this.isBannerShow = !1, this.ch && this.bannerAd && (console.log("隐藏 banner"), this.bannerAd.hide());
            }, WxCH.prototype.createInterstitialAd = function() {
                var e = this;
                this.ch && (this.insertAd = this.ch.createInterstitialAd({
                    adUnitId: this.insertId
                }), this.insertAd.onLoad(function() {
                    e.insertAd.offLoad(), console.log("插屏广告加载完毕");
                }), this.insertAd.onError(function(t) {
                    e.insertAd.offError(), console.log("插屏广告错误", t);
                }));
            }, WxCH.prototype.showInterstitialAd = function(e) {
                var t = this;
                (void 0 === e && (e = null), console.log("显示插屏广告"), this.ch && this.insertAd) && (e && this.insertAd.onClose(function() {
                    console.log("插屏广告关闭"), t.insertAd.offClose(), e && e();
                }), this.insertAd.show().catch(function(e) {
                    console.log("创建插屏广告失败"), console.log("errCode:" + e.errMsg + ",errMsg:" + e.errCode);
                }));
            }, WxCH.prototype.showShareMenu = function() {
                this.ch && (this.setShareAppMessage(), this.ch.showShareMenu({
                    withShareTicket: !1
                }), console.log("显示转发按钮"));
            }, WxCH.prototype.setShareAppMessage = function() {
                var e = this;
                this.ch && (console.log("设置转发信息"), i.default.shareDataLoad(function() {
                    e.ch.onShareAppMessage(function() {
                        var e = i.default.getOneShareData();
                        return console.log("setShareAppMessage sdb: ", e), {
                            title: e.title,
                            imageUrl: e.img_url,
                            success: function(e) {},
                            fail: function(e) {}
                        };
                    });
                }));
            }, WxCH.prototype.share = function(e) {
                var t = this;
                if (void 0 === e && (e = null), this.ch) {
                    if (!i.default.isCanShareToday()) return void this.showToast("今日奖励次数已达上限");
                    this.share_start_time = Laya.Browser.now();
                    this.onShow(function(n) {
                        t.share_end_time = Laya.Browser.now(), t.share_end_time - t.share_start_time >= t.share_interval_time ? (e && e(!0), 
                        i.default.addShareToday()) : e && e(!1);
                    }), i.default.shareDataLoad(function() {
                        var e = i.default.getOneShareData(), n = Laya.Browser.now() + "" + ~~(1e4 * (.1 + Math.random() / 2));
                        t.ch.shareAppMessage({
                            title: e.title,
                            imageUrl: e.img_url,
                            query: "&sn=" + n + "&share_id=" + e.id
                        });
                    });
                }
            }, WxCH.prototype.checkUpdate = function() {
                var e = this;
                if (this.ch) {
                    var t = this.ch.getUpdateManager();
                    t.onCheckForUpdate(function(e) {
                        console.log("是否有新版本:", e.hasUpdate);
                    }), t.onUpdateFailed(function() {
                        e.showToast("新版本下载失败");
                    }), t.onUpdateReady(function() {
                        e.showModal("更新提示", "新版本已经准备好，是否重启应用？", !0, function(e) {
                            e && t.applyUpdate();
                        });
                    });
                }
            }, WxCH.prototype.gotoOther = function(e, t, n, a) {
                void 0 === a && (a = null), this.ch && t && this.ch.navigateToMiniProgram({
                    appId: t,
                    path: n,
                    success: function(e) {
                        console.log("打开成功: appid = ", t), a && a(!0);
                    },
                    fail: function(e) {
                        console.log("打开失败: appid = ", t), a && a(!1);
                    }
                });
            }, WxCH;
        }(a.default);
        n.default = s;
    }, {
        "../../dbmodule/OperationManager": 24,
        "../../global/SwitchManager": 30,
        "../CHData": 7,
        "./BaseCH": 10
    } ],
    18: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./TotalType"), o = e("./TaskBox"), i = function() {
            function CheckinTask() {}
            return CheckinTask.refresh = function() {
                var e = CheckinTask.getLastCheckinDay();
                if (7 == e[1] && !e[0]) for (var t = 1; t < 8; t++) {
                    var n = o.default.getTaskByProgressType("check_in", t);
                    o.default.user_task_box[n.id].ft = 0;
                }
            }, CheckinTask.getState = function(e) {
                var t = o.default.getTaskByProgressType("check_in", e), n = o.default.getTaskState(t);
                return 1 == n ? CheckinTask.getLastCheckinDay()[0] ? 0 : n : (-1 == n && (n = 0), 
                n);
            }, CheckinTask.getLastCheckinDay = function() {
                for (var e = 0, t = 0, n = 1; n < 8; n++) {
                    var i = o.default.getTaskByProgressType("check_in", n), r = o.default.user_task_box[i.id];
                    r.prc = Math.round(a.default.get("check_in") % 7) + 1, r.ft > 0 && (e = r.ft, t = n);
                }
                return [ o.default.timestampToDate(e) == o.default.timestampToDate(new Date().getTime()), t ];
            }, CheckinTask.completeTask = function(e) {
                if (1 == CheckinTask.getState(e)) {
                    var t = o.default.getTaskByProgressType("check_in", e);
                    return o.default.user_task_box[t.id].ft = new Date().getTime(), a.default.add("check_in", 1), 
                    CheckinTask.refresh(), !0;
                }
                return !1;
            }, CheckinTask.getList = function() {
                for (var e = new Array(), t = 1; t < o.default.task_lib.length; t++) {
                    var n = o.default.task_lib[t];
                    4 == n.ty && e.push(n);
                }
                return e;
            }, CheckinTask.checkTodayBoolCheck = function() {
                for (var e = CheckinTask.getList(), t = !0, n = 0; n < e.length; n++) {
                    var a = e[n];
                    1 == CheckinTask.getState(a.prt) && (t = !1);
                }
                return t;
            }, CheckinTask;
        }();
        n.default = i;
    }, {
        "./TaskBox": 25,
        "./TotalType": 26
    } ],
    19: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./TotalType"), o = e("./TaskBox"), i = e("./ItemCondition"), r = e("./ItemConditions"), s = function() {
            function ItemBox() {}
            return ItemBox.load = function(e) {
                ItemBox.item_json = e, ItemBox.item_lib = ItemBox.item_json.item_lib, 
                ItemBox.user_item_box = ItemBox.item_json.user_item_box;
            }, ItemBox.getItemByID = function(e) {
                return ItemBox.item_lib[e];
            }, ItemBox.getUserBoxItem = function(e) {
                return ItemBox.user_item_box[e.id];
            }, ItemBox.getUserBoxChipItem = function(e) {
                return ItemBox.user_item_box[e.cid];
            }, ItemBox.incItem = function(e, t) {
                null == t && (t = 1);
                var n = ItemBox.getUserBoxItem(e);
                return n.num += t, n;
            }, ItemBox.incItemChip = function(e, t) {
                if (e.cid > 0) {
                    var n = ItemBox.item_lib[e.cid];
                    return e.pt.indexOf("share") > -1 ? a.default.add("share", 1) : e.pt.indexOf("video") > -1 && a.default.add("video", 1), 
                    ItemBox.incItem(n, t);
                }
                return null;
            }, ItemBox.decItem = function(e, t) {
                null == t && (t = 1);
                var n = ItemBox.getUserBoxItem(e);
                return t <= n.num && (n.num -= t), n;
            }, ItemBox.mergeItem = function(e, t) {
                if (1 != e.state) return !1;
                for (var n = 0; n < e.conditions.length; n++) {
                    var o = e.conditions[n];
                    if (o.price_type_key.indexOf(t) > -1) {
                        if (o.price_type_key.indexOf("chip") > -1) {
                            if (1 != o.state) return !1;
                            var i = o.item, r = ItemBox.getUserBoxChipItem(i);
                            return ItemBox.decItem(r, o.price), ItemBox.incItem(i, 1), !0;
                        }
                        if (o.price_type_key.indexOf("cur") > -1) {
                            if (1 != o.state) return !1;
                            i = o.item;
                            return a.default.dec(t, o.price), ItemBox.incItem(i, 1), !0;
                        }
                        if (o.price_type_key.indexOf("task") > -1) {
                            if (1 != o.state) return !1;
                            i = o.item;
                            return ItemBox.incItem(i, 1), !0;
                        }
                    }
                }
                return !1;
            }, ItemBox.getItemsConditionsByType = function(e, t) {
                for (var n = new Array(), a = 1; a < ItemBox.item_lib.length; a++) {
                    var o = ItemBox.item_lib[a];
                    if (o.ty == e && o.sid == t) {
                        var i = ItemBox.itemAllConditions(o);
                        n.push(i);
                    }
                }
                return n;
            }, ItemBox.getItemState = function(e) {
                var t = ItemBox.item_lib[e];
                return ItemBox.itemAllConditions(t);
            }, ItemBox.itemAllConditions = function(e) {
                for (var t = e.pt.split(/[&|]/), n = e.pt.match(/[&|]/g), a = -1, o = new Array(), i = 0; i < t.length; i++) {
                    var s = ItemBox.itemCondition(e, t[i]);
                    o.push(s);
                }
                if (o.length > 1) for (i = 1; i < t.length; i++) a = -1 == a ? ItemBox.conditionMerge(o[i - 1].state, o[i].state, n[i - 1]) : ItemBox.conditionMerge(a, o[i].state, n[i - 1]); else a = o[0].state;
                return new r.default(a, o);
            }, ItemBox.conditionMerge = function(e, t, n) {
                return 2 == e || 2 == t ? 2 : n.indexOf("&") > -1 ? 0 == e || 0 == t ? 0 : 1 : 1 == e || 1 == t ? 1 : 0;
            }, ItemBox.itemCondition = function(e, t) {
                var n, r = t.split("="), s = r[0], l = Number(r[1]);
                if (t.indexOf("task") > -1) {
                    var c = l, d = o.default.task_lib[c], u = 0;
                    if (!(C = ItemBox.user_item_box[e.id])) return;
                    u = C.num > 0 ? 2 : 2 == (u = -1 == (u = o.default.getTaskState(d)) ? 0 : u) ? 1 : u;
                    var h = d.prt, f = o.default.user_task_box[c].prc;
                    n = new i.default(u, e, s, h, f, d);
                } else if (t.indexOf("cur") > -1) {
                    var p = s.split("_")[0], y = l;
                    if (!(C = ItemBox.user_item_box[e.id])) return;
                    for (var g = (e.pv + "").split(/[&|]/), m = 0; m < g.length; m++) {
                        var _ = g[m].split("=");
                        if (s == _[0]) {
                            var v = Number(_[1]);
                            "gold" == p && (y = l * Math.pow(v, C.bng)), "diamond" == p && (y = l * Math.pow(v, C.bnd));
                        }
                    }
                    u = C.num > 0 ? 2 : 0;
                    0 == C.num && (u = y <= a.default.get(p) ? 1 : 0), n = new i.default(u, e, s, y, a.default.get(p), null);
                } else if (t.indexOf("chip") > -1) {
                    p = s.split("_")[0], y = l;
                    var C, S = ItemBox.user_item_box[e.cid];
                    if (!(C = ItemBox.user_item_box[e.id])) return;
                    u = C.num > 0 ? 2 : 0;
                    0 == C.num && (u = S.num >= y ? 1 : 0), n = new i.default(u, e, s, y, S.num, null);
                } else n = t.indexOf("init") > -1 ? new i.default(2, e, s, 0, 0, null) : new i.default(0, e, "", 0, 0, null);
                return n;
            }, ItemBox.getChipPrice = function(e) {
                if (e.pt.indexOf("|") > -1) {
                    for (var t = e.pt.split("|"), n = 0; n < t.length; n++) if (t[n].indexOf("chip") > -1) {
                        var a = t[n].split("_");
                        return Number(a);
                    }
                } else {
                    if (!(e.pt.indexOf("&") > -1)) {
                        a = e.pt.split("_");
                        return Number(a);
                    }
                    for (t = e.pt.split("&"), n = 0; n < t.length; n++) if (t[n].indexOf("chip") > -1) {
                        var a = t[n].split("_");
                        return Number(a);
                    }
                }
            }, ItemBox.getCurPrice = function(e) {
                if (e.pt.indexOf("/") > 0) {
                    var t = e.p.split("/");
                    return Number(t[0]);
                }
                return Number(e.p);
            }, ItemBox.getUsedItem = function() {
                for (var e = new Array(), t = 1; t < ItemBox.item_lib.length; t++) {
                    var n = ItemBox.item_lib[t], a = ItemBox.getUserBoxItem(n);
                    if (a.num > 0 && a.dids) {
                        for (var o = a.dids.split(","), i = 0; i < o.length; i++) o[i] = Number(o[i]);
                        var r = {
                            item: n,
                            num: a.num,
                            dids: o
                        };
                        e.push(r);
                    }
                }
                return e;
            }, ItemBox.getUsedItemById = function(e) {
                for (var t = null, n = 1; n < ItemBox.item_lib.length; n++) {
                    var a = ItemBox.item_lib[n], o = ItemBox.getUserBoxItem(a);
                    if (o.num > 0 && o.dids) {
                        for (var i = o.dids.split(","), r = 0; r < i.length; r++) i[r] = Number(i[r]);
                        var s = {
                            item: a,
                            num: o.num,
                            dids: i
                        };
                        e == o.id && (t = s);
                    }
                }
                return t;
            }, ItemBox.addUsedItem = function(e, t, n, a, o) {
                null == n && (n = 1), null == a && (a = !1);
                var i = ItemBox.getUserBoxItem(e);
                i.num += n;
                var r = [];
                if (i.dids) {
                    r = i.dids.split(",");
                    for (var s = 0; s < r.length; s++) r[s] = Number(r[s]);
                }
                return r.push(t), i.dids = r.join(","), a && (i.bng += n), o && (i.bnd += n), i;
            }, ItemBox.changeItemDids = function(e, t, n) {
                var a = ItemBox.getUserBoxItem(e), o = [], i = [];
                if (a.dids) {
                    o = a.dids.split(",");
                    for (var r = 0; r < o.length; r++) o[r] = Number(o[r]), o[r] != t && i.push(o[r]);
                    i.push(n);
                }
                return a.dids = i.join(","), a;
            }, ItemBox.compoundItem = function(e, t, n) {
                var o = {
                    item: null,
                    isNewUnlock: !1
                };
                if (e.id < 71) {
                    var i = ItemBox.getUserBoxItem(e), r = [], s = [];
                    if (i.dids) {
                        r = i.dids.split(",");
                        for (var l = 0; l < r.length; l++) r[l] = Number(r[l]), r[l] != t && r[l] != n && s.push(r[l]);
                    }
                    var c = ItemBox.addUsedItem(ItemBox.getItemByID(e.id + 1), n);
                    i.dids = s.join(","), o.item = ItemBox.getItemByID(c.id);
                    var d = a.default.get("gun_level");
                    return d && c.id > d && (a.default.set("gun_level", c.id), o.isNewUnlock = !0), 
                    o;
                }
            }, ItemBox.getGoldNum = function(e) {
                var t = 0, n = e.prty.split("="), a = n[0], o = Number(n[1]);
                if (e.prty.indexOf("cur") > -1) {
                    a.split("_")[0];
                    t = o;
                }
                return t;
            }, ItemBox.deleteGun = function(e, t) {
                var n = ItemBox.getUserBoxItem(e), o = [], i = [];
                if (n.dids) {
                    o = n.dids.split(",");
                    for (var r = 0; r < o.length; r++) o[r] = Number(o[r]), o[r] != t && i.push(o[r]);
                }
                n.dids = i.join(",");
                var s = e.pt.split(/[&|]/)[0].split("=")[1];
                return a.default.add("gold", Number(s)), Number(s);
            }, ItemBox.upgradeGun = function(e, t, n) {
                var a = ItemBox.getUserBoxItem(ItemBox.getItemByID(e)), o = [], i = [];
                if (a.dids) {
                    o = a.dids.split(",");
                    for (var r = 0; r < o.length; r++) o[r] = Number(o[r]), o[r] != n && i.push(o[r]);
                }
                a.dids = i.join(","), ItemBox.addUsedItem(ItemBox.getItemByID(t), n);
            }, ItemBox;
        }();
        n.default = s;
    }, {
        "./ItemCondition": 20,
        "./ItemConditions": 21,
        "./TaskBox": 25,
        "./TotalType": 26
    } ],
    20: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            return function(e, t, n, a, o, i) {
                this.state = e, this.item = t, this.price_type_key = n, this.price = a, this.user_has = o, 
                this.task = i;
            };
        }();
        n.default = a;
    }, {} ],
    21: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            return function(e, t) {
                this.state = e, this.conditions = t;
            };
        }();
        n.default = a;
    }, {} ],
    22: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./TotalType"), o = e("./TaskBox"), i = function() {
            function LevelTask() {}
            return LevelTask.refresh = function() {
                for (var e = 1; e < o.default.task_lib.length; e++) {
                    var t = o.default.task_lib[e];
                    if ("level" == t.prty) o.default.getUserTaskByID(t.id).prc = a.default.get("level");
                }
            }, LevelTask.getState = function(e) {
                this.refresh(), null == e && (e = a.default.get("level"));
                var t = o.default.getTaskByProgressType("level", e);
                return t ? o.default.getTaskState(t) : -1;
            }, LevelTask.completeTask = function(e) {
                null == e && (e = a.default.get("level"));
                var t = o.default.getTaskByProgressType("level", e);
                return o.default.completeTask(t);
            }, LevelTask;
        }();
        n.default = i;
    }, {
        "./TaskBox": 25,
        "./TotalType": 26
    } ],
    23: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./TotalType"), o = function() {
            function ModuleUnlock() {}
            return ModuleUnlock.load = function(e) {
                ModuleUnlock.item_json = e, ModuleUnlock.unlock_lib = ModuleUnlock.item_json.unlock_lib, 
                ModuleUnlock.user_unlock_box = ModuleUnlock.item_json.user_unlock_box;
            }, ModuleUnlock.geUnlockLibByID = function(e) {
                return ModuleUnlock.unlock_lib[e];
            }, ModuleUnlock.geUserUnlockByID = function(e) {
                return ModuleUnlock.user_unlock_box[e];
            }, ModuleUnlock.setUserUnlockValueByID = function(e, t, n) {
                ModuleUnlock.user_unlock_box[e][t] = n, a.default.saveToLocalStorage();
            }, ModuleUnlock.isUserUnlockCanTrigger = function(e) {
                var t = ModuleUnlock.geUnlockLibByID(e);
                if (t) {
                    var n = t.con;
                    return n.length < 1 || ModuleUnlock.condition(n);
                }
                return console.log("未找到 数据"), !1;
            }, ModuleUnlock.condition = function(e) {
                var t, n, o, i;
                if (e.indexOf(":") > -1) {
                    var r = e.split(":"), s = r[0].split("==");
                    n = s[0], o = s[1], t = r[1];
                } else t = e;
                if (t.indexOf("==") > -1 ? i = "==" : t.indexOf(">=") > -1 && (i = ">="), i) {
                    var l = t.split(i), c = l[0], d = Number(l[1]);
                    if (n && o) {
                        if ("mid" == n) {
                            var u = ModuleUnlock.geUserUnlockByID(Number(o));
                            if ("==" == i) {
                                if (u[c] == d) return !0;
                            } else if (">=" == i && u[c] >= d) return !0;
                        }
                    } else {
                        var h = a.default.get(c);
                        if ("==" == i) {
                            if (h == d) return !0;
                        } else if (">=" == i && h >= d) return !0;
                    }
                }
                return !1;
            }, ModuleUnlock.Update = function(e) {
                for (var t = 1; t < ModuleUnlock.unlock_lib.length; t++) {
                    var n = ModuleUnlock.geUnlockLibByID(t), a = ModuleUnlock.geUserUnlockByID(t);
                    if (null == a) return void console.log("警告：user_unlock_item为空");
                    var o = ModuleUnlock.isUserUnlockCanTrigger(t);
                    1 == n.ty ? o && 0 == a.sd && (ModuleUnlock.setUserUnlockValueByID(t, "sd", 1), 
                    e(n)) : 2 == n.ty && o && 0 == a.sd && (ModuleUnlock.setUserUnlockValueByID(t, "sd", 1), 
                    e(n));
                }
            }, ModuleUnlock;
        }();
        n.default = o;
    }, {
        "./TotalType": 26
    } ],
    24: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./TotalType"), o = e("./model/ShareDB"), i = e("../yunwei/RandomUtil"), r = e("../sysloader/LoaderManeger"), s = function() {
            function OperationManager() {}
            return OperationManager.shareDataLoad = function(e) {
                var t = this;
                this.shareData ? e && e() : r.default.instance.loadSubPack(r.default.SUB_ID_SHARE, function() {
                    Laya.loader.create(OperationManager.DB_PATH + o.default.JSON_RES_NAME, Laya.Handler.create(t, function() {
                        var t = Laya.loader.getRes(OperationManager.DB_PATH + o.default.JSON_RES_NAME);
                        console.log("shareDataLoad "), console.log(t), this.shareData = new Array();
                        for (var n = 0; n < t[o.default.JSON_KEY].length; n++) {
                            var a = t[o.default.JSON_KEY][n];
                            if (1 == a.en) {
                                var i = o.default.creatByJson(a);
                                i.img_url = this.DB_PATH + i.img_url, this.shareData.push(i);
                            }
                        }
                        e && e();
                    }));
                });
            }, OperationManager.getOneShareData = function() {
                if (this.shareData) {
                    var e = i.default.getIntegerInRandom(this.shareData.length - 1, 0);
                    return this.shareData[e];
                }
                return new o.default();
            }, OperationManager.isCanShareToday = function() {
                if (a.default.item_json) {
                    var e = a.default.get(this.KEY_SHARE_LAST_TIME);
                    return 0 == e || null == e || (this.isToday(e) ? a.default.get(this.KEY_SHARE_NUM_TODAY) < this.LIMIT_SHARE_PRE_DAY : (a.default.set(this.KEY_SHARE_NUM_TODAY, 0), 
                    !0));
                }
                return console.warn("TotalType 未初始化"), !1;
            }, OperationManager.addShareToday = function() {
                if (a.default.item_json) {
                    var e = a.default.get(this.KEY_SHARE_NUM_TODAY);
                    console.warn("addShareToday:" + e), null == e ? a.default.set(this.KEY_SHARE_NUM_TODAY, 1) : a.default.add(this.KEY_SHARE_NUM_TODAY, 1), 
                    a.default.set(this.KEY_SHARE_LAST_TIME, new Date().getTime());
                } else console.warn("TotalType 未初始化");
            }, OperationManager.isToday = function(e) {
                return new Date(e).toDateString() === new Date().toDateString();
            }, OperationManager.DB_PATH = "res/share/", OperationManager.KEY_SHARE_NUM_TODAY = "share_num_today", 
            OperationManager.KEY_SHARE_LAST_TIME = "share_last_time", OperationManager.LIMIT_SHARE_PRE_DAY = 5, 
            OperationManager;
        }();
        n.default = s;
    }, {
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99,
        "./TotalType": 26,
        "./model/ShareDB": 27
    } ],
    25: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./CheckinTask"), o = e("./LevelTask"), i = function() {
            function TaskBox() {}
            return TaskBox.load = function(e) {
                TaskBox.item_json = e, TaskBox.task_lib = TaskBox.item_json.task_lib, TaskBox.user_task_box = TaskBox.item_json.user_task_box, 
                a.default.refresh(), o.default.refresh();
            }, TaskBox.getTaskState = function(e) {
                var t = TaskBox.getUserTaskByID(e.id);
                if (t) {
                    if (t.ft > 0) return 2;
                    if (t.prc >= e.prt) return 1;
                    var n = TaskBox.task_lib[e.pid];
                    return 2 == TaskBox.getTaskState(n) && (t.vt - new Date().getTime() > 0 || 0 == t.vt) ? 0 : -1;
                }
                return console.log("user_task 为空 检查逻辑"), null;
            }, TaskBox.getUserTaskByID = function(e) {
                return TaskBox.user_task_box[e];
            }, TaskBox.completeTask = function(e) {
                TaskBox.getTaskState(e);
                return 1 ? (TaskBox.getUserTaskByID(e.id).ft = new Date().getTime(), e) : null;
            }, TaskBox.getProgress = function(e) {
                return [ e.prt, TaskBox.user_task_box[e.id].prc ];
            }, TaskBox.incUserTaskProgress = function(e, t) {
                if (0 == TaskBox.getTaskState(e)) {
                    var n = TaskBox.getUserTaskByID(e.id);
                    return n.prc += t, n;
                }
                return null;
            }, TaskBox.getTaskByProgressType = function(e, t) {
                for (var n = 1; n < TaskBox.task_lib.length; n++) {
                    var a = TaskBox.task_lib[n];
                    if (a.prty == e && a.prt == t) return a;
                }
                return null;
            }, TaskBox.findOneTask = function(e, t, n, a) {
                for (var o = 1; o < TaskBox.task_lib.length; o++) {
                    var i = TaskBox.task_lib[o], r = null == e || i.ty == e, s = null == t || i.pid == t, l = null == n || i.prty == n, c = null == a || i.prt == a;
                    if (r && s && l && c) return i;
                }
            }, TaskBox.findOneTargetTask = function(e, t) {
                for (var n = 1; n < TaskBox.task_lib.length; n++) {
                    var a = TaskBox.task_lib[n], o = null == e || a.ty == e, i = null == t || a.pid == t;
                    if (o && i) return a;
                }
            }, TaskBox.timestampToDate = function(e) {
                var t = new Date(e);
                return t.getFullYear() + "-" + ((t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-") + t.getDate();
            }, TaskBox.getTodayEndTime = function() {
                return new Date(new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1).getTime();
            }, TaskBox.isValidTime = function(e, t) {
                return !!t || !(e.vt - new Date().getTime() < 0);
            }, TaskBox;
        }();
        n.default = i;
    }, {
        "./CheckinTask": 18,
        "./LevelTask": 22
    } ],
    26: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./ItemBox"), o = e("./TaskBox"), i = e("./ModuleUnlock"), r = function() {
            function TotalType() {}
            return TotalType.load = function(e) {
                Laya.loader.create(TotalType.DB_MODULE_PATH + "item_lib.json", Laya.Handler.create(this, function() {
                    TotalType.item_json = Laya.loader.getRes(TotalType.DB_MODULE_PATH + "item_lib.json");
                    var t, n, r, s, l, c, d = Laya.LocalStorage.getJSON("user_json");
                    if (d) if (t = d.version, n = d.total_type, r = d.user_item_box, s = d.user_task_box, 
                    l = d.user_unlock_box, c = d.gun_state, TotalType.item_json.version != t) {
                        for (var u in TotalType.item_json.total_type) null == n[u] && null == n[u] && (n[u] = TotalType.item_json.total_type[u]);
                        TotalType.dataVersionUpdate(TotalType.item_json.user_item_box, r), TotalType.dataVersionUpdate(TotalType.item_json.user_task_box, s), 
                        l && TotalType.dataVersionUpdate(TotalType.item_json.user_unlock_box, l), TotalType.item_json.total_type = n, 
                        TotalType.item_json.user_item_box = r, TotalType.item_json.user_task_box = s, l && (TotalType.item_json.user_unlock_box = l), 
                        c && (TotalType.item_json.gun_state = c), TotalType.saveToLocalStorage();
                    } else TotalType.item_json.total_type = n, TotalType.item_json.user_item_box = r, 
                    TotalType.item_json.user_task_box = s, l && (TotalType.item_json.user_unlock_box = l), 
                    c && (TotalType.item_json.gun_state = c); else TotalType.saveToLocalStorage();
                    TotalType.total_type = TotalType.item_json.total_type, a.default.load(TotalType.item_json), 
                    o.default.load(TotalType.item_json), i.default.load(TotalType.item_json), e();
                }));
            }, TotalType.dataVersionUpdate = function(e, t) {
                for (var n in e[0]) if (null == t[0][n] || null == t[0][n]) for (var a = 0; a < t.length; a++) {
                    var o = e[a][n];
                    t[a][n] = o;
                }
                for (a = 0; a < e.length; a++) if (null == t[a] || null == t[a]) {
                    o = e[a];
                    t[a] = o;
                }
            }, TotalType.versionCheck = function() {}, TotalType.saveToLocalStorage = function() {
                if (TotalType.item_json) {
                    var e = JSON.parse("{}");
                    e.version = TotalType.item_json.version, e.total_type = TotalType.item_json.total_type, 
                    e.user_item_box = TotalType.item_json.user_item_box, e.user_task_box = TotalType.item_json.user_task_box, 
                    e.user_unlock_box = TotalType.item_json.user_unlock_box, e.gun_state = TotalType.item_json.gun_state, 
                    Laya.LocalStorage.setJSON("user_json", e);
                }
            }, TotalType.get = function(e) {
                return TotalType.total_type ? TotalType.total_type[e] : null;
            }, TotalType.set = function(e, t) {
                TotalType.total_type && (TotalType.total_type[e] = t);
            }, TotalType.add = function(e, t) {
                TotalType.total_type && (TotalType.total_type[e] += t);
            }, TotalType.dec = function(e, t) {
                TotalType.total_type[e] -= t;
            }, TotalType.DB_MODULE_PATH = "res/atlas/dbmodule/", TotalType;
        }();
        n.default = r;
    }, {
        "./ItemBox": 19,
        "./ModuleUnlock": 23,
        "./TaskBox": 25
    } ],
    27: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function ShareDB() {
                this.id = 0, this.enable = 0;
            }
            return ShareDB.creatByJson = function(e) {
                var t = new ShareDB();
                return t.id = e.id, t.enable = e.en, t.img_url = ShareDB.IMG_PATH + e.img, t.desc = e.desc, 
                t.title = e.t, t;
            }, ShareDB.JSON_RES_NAME = "share_db.json", ShareDB.JSON_KEY = "share_db", ShareDB.IMG_PATH = "img/", 
            ShareDB;
        }();
        n.default = a;
    }, {} ],
    28: [ function(e, t, n) {
        "use strict";
        var a;
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), function(e) {
            e[e.OTHER = 0] = "OTHER", e[e.QR = 1] = "QR", e[e.RECOMMEND = 2] = "RECOMMEND", 
            e[e.SEARCH = 3] = "SEARCH";
        }(a = n.SourceType || (n.SourceType = {}));
        var o = function() {
            function Global() {}
            return Global.devMode = 3, Global.source_type = a.OTHER, Global.shake_switch = 1, 
            Global.sound_switch = 1, Global.moudle_navigate = 1, Global.swtich_mistouch = 0, 
            Global.boolUnlock = !1, Global.max_bullet = 4, Global.is_offline_complete = !1, 
            Global.is_show_shortcut = !0, Global.turntable_level = 5, Global.turntable_interval_level = 3, 
            Global;
        }();
        n.default = o;
    }, {} ],
    29: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function QYCtr() {}
            return QYCtr.initSDK = function() {
                this.ch = Laya.Browser.window.wx;
                var e = Laya.Browser.window.qy;
                e && e.init();
                for (var t = 0; t < this.adv_keys.length; t++) this.getAdvListPlat(t, this.adv_keys[t]);
            }, QYCtr.getAdvListPlat = function(e, t) {
                var n = this;
                this.ch && this.ch.h_GetAdvListPlat({
                    adv_key: t,
                    success: function(a) {
                        200 === a.Status ? (n.sideBoxList[e] = a.Result.Info[t], console.log("侧边栏数据：", n.sideBoxList)) : console.log("广告数据请求失败", a);
                    },
                    fail: function(e) {
                        console.log("广告数据请求失败", e);
                    }
                });
            }, QYCtr.toMinProgram = function(e, t, n, a) {
                void 0 === a && (a = null), console.log("上报：", t), this.ch && this.ch.h_ToMinProgram({
                    adv_id: e,
                    appId: t,
                    path: n,
                    success: function(e) {
                        console.log("跳转上报成功", e), a && a(!0);
                    },
                    fail: function(e) {
                        console.log("跳转上报失败", e), a && a(!1);
                    }
                });
            }, QYCtr.sideBoxList = [], QYCtr.sideBoxListClick = [], QYCtr.integralWallList = [], 
            QYCtr.sceneName = "", QYCtr.ch = null, QYCtr.adv_keys = [ "ec15cbe6c618436168228aece0e61d87", "197ad94f1382c9b9de4c491ab5c4d28b", "26fdae755a27c5fb78156256a166f9be", "7d0c1319c5d5a6449891a129bd8f43d2", "24dc5c0183b5e692a0a3c920fecd04df", "040a94c251ab46b8aeba2151950e67b6" ], 
            QYCtr;
        }();
        n.default = a;
    }, {} ],
    30: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./Global"), o = e("../channel/CHData"), i = e("../script/TotalTypeManager"), r = e("./QYCtr"), s = function() {
            function SwitchManager() {}
            return SwitchManager.initData = function(e) {
                if (e) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    this.setValue(n, n.name);
                }
            }, SwitchManager.setValue = function(e, t) {
                this[t] = Number(e.value), console.log("key:", t + "==" + Number(e.value));
            }, SwitchManager.isShowSideBox = function() {
            }, SwitchManager.isShowOfflineScene = function() {
                return i.default.getGrade() >= this.offline_scene_grade;
            }, SwitchManager.isfreeUpgrade = function() {
                return i.default.getGrade() >= SwitchManager.free_skin_scene_grade && i.default.getGrade() % SwitchManager.free_skin_scene_grade_level == 0;
            }, SwitchManager.unlockSkin = function() {
                return i.default.getGrade() >= SwitchManager.free_skin_scene_grade && i.default.getGrade() % SwitchManager.free_skin_scene_grade_level == 1;
            }, SwitchManager.physical_power = 5, SwitchManager.physical_power_time = 6e5, SwitchManager.physical_power_swtich = 0, 
            SwitchManager.receiving_button = 2, SwitchManager.pub_side_box_grade_ios = 1, SwitchManager.game_banner = 0, 
            SwitchManager.bannerMove = 1500, SwitchManager.buttonMove = 2e3, SwitchManager.normal_screen = 0, 
            SwitchManager.offline_scene_grade_double = 0, SwitchManager.add_physical_num = 3, 
            SwitchManager.offline_scene_grade = 1, SwitchManager.install_shortcut = 0, SwitchManager.out_other = 0, 
            SwitchManager.out_change = 0, SwitchManager.free_skin_scene_grade = 99, SwitchManager.free_skin_scene_grade_level = 2, 
            SwitchManager.banner_refresh_time = 3e4, SwitchManager;
        }();
        n.default = s;
    }, {
        "../channel/CHData": 7,
        "../script/TotalTypeManager": 52,
        "./Global": 28,
        "./QYCtr": 29
    } ],
    31: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./SwitchManager"), o = e("./Global"), i = e("../channel/CM"), r = e("../sceneui/HomeUI"), s = e("../../libs/yw.sdk"), l = function() {
            function YWCtr() {}
            return YWCtr.initSDK = function() {
                var e = this;
                i.default.mainCH.ch && (this.ch = new s.default(i.default.mainCH.ch)), this.ch && (console.log("开始登陆"), 
                this.ch.init_game(function(t) {
                    console.log("初始化成功", t), e.getSwitch(), e.getCustomise();
                }));
            }, YWCtr.getSlide = function() {
                if (this.ch) {
                    var e = this.ch.get_slide();
                    this.sideBoxList = e, console.log("获取侧边栏信息", e);
                }
            }, YWCtr.getSwitch = function() {
                if (this.ch) {
                    var e = this.ch.get_switch();
                    e && (o.default.swtich_mistouch = e.touch_main, o.default.moudle_navigate = null == e.force_elect ? 1 : e.force_elect), 
                    console.log("获取开关信息", e);
                }
            }, YWCtr.getCustomise = function() {
                if (this.ch) {
                    var e = this.ch.get_customise();
                    console.log("获取自定义配置", e), a.default.initData(e), r.default.instance && r.default.instance.init2DUI();
                }
            }, YWCtr.onStart = function() {
                if (this.ch) this.ch.on_show(function() {});
            }, YWCtr.jumpOut = function(e, t, n, a, o) {
                if (void 0 === o && (o = null), this.ch) this.ch.jump_out({
                    _id: e,
                    toAppid: t,
                    pkgName: n,
                    path: a
                }, o);
            }, YWCtr.register_callback = function(e) {
                void 0 === e && (e = null), this.ch && this.ch.register_callback("on_show", function() {
                    console.log("调用on_show！");
                });
            }, YWCtr.ch = null, YWCtr.sideBoxList = [], YWCtr;
        }();
        n.default = l;
    }, {
        "../../libs/yw.sdk": 1,
        "../channel/CM": 8,
        "../sceneui/HomeUI": 40,
        "./Global": 28,
        "./SwitchManager": 30
    } ],
    32: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../script/GameManager"), o = e("../yunwei/RandomUtil"), i = e("../sysloader/LoaderManeger"), r = e("../global/QYCtr"), s = e("../global/SwitchManager"), l = e("../sceneui/ExportPageUI"), c = function(e) {
            function NavigateCircle() {
                var t = e.call(this) || this;
                return t.listData = [], t.listDataClick = [], t.titleArr = [], t.i = 0, t.t = 0, 
                t.index = 0, t.status = !1, t;
            }
            return __extends(NavigateCircle, e), NavigateCircle.prototype.onEnable = function() {
                this.node = this.owner, 
                this.thumb = this.node.getChildByName("thumb"), 
                this.title = this.node.getChildByName("title");
                this.refresh();

            },NavigateCircle.prototype.onMouseDown = function(){
                if(this._id && this._id > 0){
                    platform.getInstance().navigate("GAME","MORE",this._id);
                }
            }, NavigateCircle.prototype.onDisable = function() {
                this.owner.timer.clearAll(this);

            },
            NavigateCircle.prototype.refresh = function() {
                let arr  = platform.getInstance().getForgames();
                if(arr.length > 0){
                    this.thumb.skin = arr[0].thumb;
                    this._id =arr[0].id;
                    this.owner.timer.once(8e3,this,this.refresh);
                }
            },
            
            NavigateCircle;
        }(Laya.Script);
        n.default = c;
    }, {
        "../global/QYCtr": 29,
        "../global/SwitchManager": 30,
        "../sceneui/ExportPageUI": 36,
        "../script/GameManager": 48,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99
    } ],
    33: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../script/GameManager"), o = e("../yunwei/RandomUtil"), i = e("../sysloader/LoaderManeger"), r = e("../global/SwitchManager"), s = e("../global/QYCtr"), l = e("../sceneui/ExportPageUI"), c = function(e) {
            function NavigateList() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.listData = [], t.listDataClick = [], t.direct = 0, t.scrollTween = 0, t.cardTween = 0, 
                t.isFreshIcon = 0, t.onMouseing = !1, t.isEnd = !1, t.speed = 1, t.isNWx = !1, t.status = 0, 
                t.freshIconTime = 0, t.cardTweenTime = 0, t.scrollIndex = -1, t.isRight = !0, t;
            }
            return __extends(NavigateList, e), NavigateList.prototype.onEnable = function() {
                this.list = this.owner;
            }, NavigateList.prototype.init = function(e, t, n, a, o) {
                void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === a && (a = 0), void 0 === o && (o = !0), 
                this.isNWx = o, this.getListData(), r.default.isShowSideBox() && 0 == this.status && this.listData && this.listData.length > 0 && (this.status = 1, 
                this.direct = e, this.scrollTween = t, this.cardTween = n, this.isFreshIcon = a, 
                this.setList(), this.refreshListData()), this.list.parent.visible = !0, r.default.isShowSideBox() && this.listData && this.listData.length > 0 || (this.list.parent.visible = !1);
            }, NavigateList.prototype.onUpdate = function() {
                this.scrollTween && this.loopList(), this.isFreshIcon && Laya.Browser.now() - this.freshIconTime >= 2e3 && this.refreshListData(), 
                this.cardTween && Laya.Browser.now() - this.cardTweenTime >= 1500 && this.scrollTweenTo();
            }, NavigateList.prototype.getListData = function() {
                if (this.listDataClick = s.default.sideBoxListClick, s.default.sideBoxList && s.default.sideBoxList.length > 0) {
                    if (this.listData = [], "more" == this.list.name) for (var e = 0; e < s.default.sideBoxList[1].length; e++) this.listData.push(s.default.sideBoxList[1][e]);
                    if ("home" == this.list.name) for (e = 0; e < s.default.sideBoxList[2].length; e++) this.listData.push(s.default.sideBoxList[2][e]);
                    if ("result" == this.list.name) for (e = 0; e < s.default.sideBoxList[3].length; e++) this.listData.push(s.default.sideBoxList[3][e]);
                    if ("expot" == this.list.name) for (e = 0; e < s.default.sideBoxList[4].length; e++) this.listData.push(s.default.sideBoxList[4][e]);
                    if ("exit" == this.list.name) for (e = 0; e < s.default.sideBoxList[5].length; e++) this.listData.push(s.default.sideBoxList[5][e]);
                    this.listData && this.listData.length > 0 && this.listData.sort(function() {
                        return .5 - Math.random();
                    });
                }
            }, NavigateList.prototype.setList = function() {
                1 == this.direct ? this.list.vScrollBarSkin = "" : 2 == this.direct && (this.list.hScrollBarSkin = ""), 
                this.list.selectEnable = !0, this.list.selectHandler = new Laya.Handler(this, this.onSelect), 
                this.list.on(Laya.Event.MOUSE_DOWN, this, this.onMouse, [ Laya.Event.MOUSE_DOWN ]), 
                this.list.on(Laya.Event.MOUSE_UP, this, this.onMouse, [ Laya.Event.MOUSE_UP ]), 
                this.list.on(Laya.Event.MOUSE_OUT, this, this.onMouse, [ Laya.Event.MOUSE_OUT ]);
            }, NavigateList.prototype.refreshListData = function() {
                this.freshIconTime = Laya.Browser.now();
                for (var e = [], t = 0; t < this.listData.length; ++t) {
                    var n = this.listData[t].logo_url[o.default.getIntegerInRandom(this.listData[t].logo_url.length - 1, 0)], a = this.listData[t].title;
                    Math.random() > .5 && (Math.random() > .5 ? "public/logo1.png" : "public/logo2.png"), 
                    a.length > 7 && (a = a.substring(0, 7) + ".");
                    var i = {
                        icon: {
                            skin: n
                        },
                        title: {
                            text: a
                        },
                        tittle_bg: {
                            skin: "public/color_" + (t % 6 + 1) + ".png"
                        }
                    };
                    e.push(i);
                }
                this.list.dataSource = e, this.list.refresh();
            }, NavigateList.prototype.scrollTweenTo = function() {
                this.cardTweenTime = Laya.Browser.now(), this.isRight ? (this.scrollIndex++, this.scrollIndex >= this.listData.length - 5 && (this.isRight = !1)) : (this.scrollIndex--, 
                this.scrollIndex <= 0 && (this.isRight = !0)), this.list.tweenTo(this.scrollIndex, 500);
            }, NavigateList.prototype.onSelect = function(e) {
                var t = this;
                if (console.log("点击了：", e), -1 != e) {
                    i.default.instance.playSound(8011);
                    var n = this.listData[e].adv_id, o = this.listData[e].appid, c = this.listData[e].path;
                    if (console.log("测试：" + o, this.listDataClick[o]), this.listDataClick[o] && r.default.out_other) for (var d = 0; d < this.listData.length; d++) if (!this.listDataClick[this.listData[d].appid]) {
                        n = this.listData[d].adv_id, o = this.listData[d].appid, c = this.listData[d].path;
                        break;
                    }
                    s.default.toMinProgram(n, o, c, function(e) {
                        e && (t.listDataClick[o] = 1), t.isNWx && !e && s.default.sideBoxList[4] && s.default.sideBoxList[4].length > 0 && a.default.instance.openScene(l.default.SCENE_NAME, !1);
                    }), this.list.selectedIndex = -1;
                }
            }, NavigateList.prototype.onMouse = function(e) {
                console.log(e), e == Laya.Event.MOUSE_DOWN && (this.onMouseing = !0), e == Laya.Event.MOUSE_OUT ? this.onMouseing = !1 : e == Laya.Event.MOUSE_UP && (this.onMouseing = !1);
            }, NavigateList.prototype.loopList = function() {
                this.onMouseing || (this.list.scrollBar.value += this.speed, this.list.scrollBar.value <= 0 && (this.speed = Math.abs(this.speed)), 
                this.list.scrollBar.value >= this.list.scrollBar.max && (this.speed = -Math.abs(this.speed)));
            }, NavigateList.prototype.onDisable = function() {
                Laya.timer.clearAll(this), this.list.offAll(Laya.Event.MOUSE_DOWN), this.list.offAll(Laya.Event.MOUSE_UP), 
                this.list.offAll(Laya.Event.MOUSE_OVER), s.default.sideBoxListClick = this.listDataClick, 
                this.list.removeSelf(), this.list.destroy();
            }, NavigateList;
        }(Laya.Script);
        n.default = c;
    }, {
        "../global/QYCtr": 29,
        "../global/SwitchManager": 30,
        "../sceneui/ExportPageUI": 36,
        "../script/GameManager": 48,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99
    } ],
    34: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../dbmodule/CheckinTask"), i = e("../dbmodule/ItemBox"), r = e("../dbmodule/TotalType"), s = e("../script/GameManager"), l = e("./HomeUI"), c = e("../yunwei/StageUtil"), d = e("../channel/CM"), u = function(e) {
            function CheckInUI() {
                var t = e.call(this) || this;
                return t.day = 0, c.default.setScale(t), CheckInUI.instance = t, s.default.instance.screenAdaptation(t.root, 120), 
                t;
            }
            return __extends(CheckInUI, e), CheckInUI.prototype.onOpened = function() {
                CheckInUI.first_show = !0, this.init2DUI();
            }, CheckInUI.prototype.init2DUI = function() {
                this.btnClose.on(Laya.Event.CLICK, this, this.onMoreGet, [ 1 ]), this.btnDouble.on(Laya.Event.CLICK, this, this.onMoreGet, [ 2 ]), 
                o.default.refresh(), this.listData = [], this.listData = o.default.getList(), this.refresh();
            }, CheckInUI.prototype.refresh = function() {
                o.default.refresh();
                for (var e = 0; e < 7; e++) this.updateItem(this.root.getChildByName("item" + e), e);
                this.refreshBtn();
            }, CheckInUI.prototype.setIcon = function(e, t) {
                e.skin = t;
            }, CheckInUI.prototype.updateItem = function(e, t, n, a) {
                var r = this.listData[t], s = r.prt, l = o.default.getState(s), c = e.getChildByName("dayBg"), d = c.getChildByName("dayGoods"), u = c.getChildByName("dayPrize"), h = e.getChildByName("daychecked"), f = c.getChildByName("dayName");
                r.eid && (n = "img/shop/" + i.default.getItemByID(r.eid).ic);
                n && (this.setIcon(d, n), d.scale(.5, .5)), u.text = "x" + r.pq, h.visible = !1, 
                0 == l ? (f.text = "DAY " + s, c.skin = "public/sign_3.png") : 1 == l ? (f.text = "DAY " + s, 
                c.skin = "public/sign_4.png", this.day = s) : 2 == l && (f.text = "DAY " + s, 
                c.skin = "public/sign_2.png", h.visible = !0), e.offAll(Laya.Event.CLICK), e.offAll(Laya.Event.MOUSE_DOWN), 
                1 == l && e.on(Laya.Event.CLICK, this, this.onSingerGet);
            }, CheckInUI.prototype.onSingerGet = function() {
                this.getCheckin(1);
            }, CheckInUI.prototype.onMoreGet = function(e) {
                var t = this;
                e > 1 ? d.default.mainCH.showVideoAd(function(n) {
                    n && t.getCheckin(e);
                }) : "CLAIM" == this.btnClose.text ? this.getCheckin(e) : this.onBtnClosed();
            }, CheckInUI.prototype.onBtnClosed = function(e) {
                void 0 === e && (e = !1), e && Laya.timer.clearAll(this), this.btnClose.offAll(), 
                this.btnDouble.offAll(), d.default.mainCH.hideBannerAd(), this.close(), CheckInUI.instance = null, 
                l.default.instance && l.default.instance.initText();
            }, CheckInUI.prototype.refreshBtn = function() {
                for (var e = !0, t = 0; t < this.listData.length; t++) {
                    var n = this.listData[t];
                    1 == o.default.getState(n.prt) && (e = !1, this.btnDouble.visible = !0);
                }
                e ? (this.lbBtnName.text = "RECEIVED ", this.btnClose.text = "CLOSE", this.btnDouble.disabled = !0, 
                d.default.mainCH.showBannerAd(), this.btnClose.y = this.ref.localToGlobal(new Laya.Point(0, 0), !1).y / c.default.getScaleRate()) : s.default.instance.misTouchOrDelay(this.btnClose, this.ref);
            }, CheckInUI.prototype.getCheckin = function(e) {
                for (var t = 0; t < this.listData.length; t++) {
                    var n = this.listData[t];
                    if (1 == o.default.getState(n.prt)) return o.default.completeTask(n.prt), this.refresh(), 
                    this.mergeItemByTask(n, e), void (this.btnClose.visible = !0);
                }
            }, CheckInUI.prototype.mergeItemByTask = function(e, t) {
                if (void 0 === t && (t = 1), "item" == e.pt) {
                    var n = i.default.getItemByID(e.eid), a = i.default.itemAllConditions(n);
                     i.default.incItem(n, 1), r.default.add("skin", 1),  
                    this.showSkin(n), 7 == this.day && s.default.instance.goldAnim(100, t);
                } else "gold" == e.pt && (s.default.instance.goldAnim(e.pq, t, this, this.onBtnClosed));
                i.default.getItemsConditionsByType(1, 1);
            }, CheckInUI.prototype.showSkin = function(e) {
                this.onBtnClosed();
            }, CheckInUI.SCENE_NAME = "scene/CheckIn.scene", CheckInUI.first_show = !1, CheckInUI;
        }(a.ui.scene.CheckInUI);
        n.default = u;
    }, {
        "../channel/CM": 8,
        "../dbmodule/CheckinTask": 18,
        "../dbmodule/ItemBox": 19,
        "../dbmodule/TotalType": 26,
        "../script/GameManager": 48,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100,
        "./HomeUI": 40
    } ],
    35: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../navigate/NavigateList"), s = e("../channel/CM"), l = e("../script/GoldBanenr"), c = e("../global/Global"), d = function(e) {
            function ExitPageUI() {
                var t = e.call(this) || this;
                return t.isClick = !1, o.default.setScale(t), t.btnClose.y = o.default.height() - t.btnClose.height - 40, 
                Laya.Browser.width / Laya.Browser.height < .5 && (t.exit.height = 800), t;
            }
            return __extends(ExitPageUI, e), ExitPageUI.prototype.onOpened = function(e) {
                this.source_scene = e, s.default.mainCH.hideBannerAd(), l.default.instance.hideGoldBanner();
                var t = this.exit.getComponent(r.default);
                t && 0 == t.status && t.init(1, 1, 0, 0, !0), this.initBtn();
            }, ExitPageUI.prototype.initBtn = function() {
                console.log("更多游戏"), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            }, ExitPageUI.prototype.onBtnClose = function() {
                var e = this;
                !this.isClick && c.default.swtich_mistouch ? (this.btnClose.disabled = !0, this.btnClose.gray = !1, 
                Laya.timer.once(1e3, this, function() {
                    s.default.mainCH.showBannerAd();
                }), Laya.timer.once(2e3, this, function() {
                    s.default.mainCH.hideBannerAd(), e.btnClose.disabled = !1;
                }), this.isClick = !0) : (l.default.instance.showGoldBanner(), s.default.mainCH.hideBannerAd(), 
                this.btnClose.offAll(Laya.Event.CLICK), this.close(), i.default.instance.eventDispatcher.event("close_exit"), 
                Laya.timer.clearAll(this));
            }, ExitPageUI.prototype.onDisable = function() {
                console.log("关闭了");
            }, ExitPageUI.SCENE_NAME = "scene/ExitPage.scene", ExitPageUI;
        }(a.ui.scene.ExitPageUI);
        n.default = d;
    }, {
        "../channel/CM": 8,
        "../global/Global": 28,
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100
    } ],
    36: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../navigate/NavigateList"), s = e("../channel/CM"), l = e("../global/Global"), c = e("../script/GoldBanenr"), d = function(e) {
            function ExportPageUI() {
                var t = e.call(this) || this;
                return t.isClick = !1, o.default.setScale(t), i.default.instance.screenAdaptation(t.root, 60), 
                t.btnClose.y = o.default.height() - t.btnClose.height - 10, t;
            }
            return __extends(ExportPageUI, e), ExportPageUI.prototype.onOpened = function() {
                s.default.mainCH.hideBannerAd(), c.default.instance.hideGoldBanner();
                var e = this.expot1.getComponent(r.default);
                e && 0 == e.status && e.init(2, 1, 0, 0, !1);
                var t = this.expot2.getComponent(r.default);
                t && 0 == t.status && t.init(1, 1, 0, 0, !1), this.initBtn();
            }, ExportPageUI.prototype.initBtn = function() {
                console.log("更多游戏"), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose);
            }, ExportPageUI.prototype.onBtnClose = function() {
                var e = this;
                !this.isClick && l.default.swtich_mistouch ? (this.btnClose.disabled = !0, this.btnClose.gray = !1, 
                Laya.timer.once(1e3, this, function() {
                    s.default.mainCH.showBannerAd();
                }), Laya.timer.once(2e3, this, function() {
                    s.default.mainCH.hideBannerAd(), e.btnClose.disabled = !1;
                }), this.isClick = !0) : (this.btnClose.offAll(Laya.Event.CLICK), this.close(), 
                s.default.mainCH.hideBannerAd(), c.default.instance.showGoldBanner(), i.default.instance.eventDispatcher.event("close_export"));
            }, ExportPageUI.prototype.onDisable = function() {
                console.log("关闭了");
            }, ExportPageUI.SCENE_NAME = "scene/ExportPage.scene", ExportPageUI;
        }(a.ui.scene.ExportPageUI);
        n.default = d;
    }, {
        "../channel/CM": 8,
        "../global/Global": 28,
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100
    } ],
    37: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../channel/CM"), s = e("../script/TotalTypeManager"), l = e("./HomeUI"), c = function(e) {
            function FreeUpgradeUI() {
                var t = e.call(this) || this;
                return t.result = !1, o.default.setScale(t), i.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(FreeUpgradeUI, e), FreeUpgradeUI.prototype.onOpened = function() {
                this.initUI(), this.initBtn();
            }, FreeUpgradeUI.prototype.initUI = function() {
                this.initLevel();
            }, FreeUpgradeUI.prototype.initLevel = function() {}, FreeUpgradeUI.prototype.initBtn = function() {
                this.btn_get.on(Laya.Event.CLICK, this, this.onBtnGet), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), 
                i.default.instance.misTouchOrDelay(this.btnClose, this.ref);
            }, FreeUpgradeUI.prototype.onBtnGet = function() {
                var e = this;
                r.default.mainCH.showVideoAd(function(t) {
                    t && (s.default.addSpeedLevel(), s.default.addPowLevel(), e.initLevel(), l.default.instance && l.default.instance.initText(), 
                    l.default.instance && l.default.instance.soundPlay(1), e.onBtnClose());
                });
            }, FreeUpgradeUI.prototype.onBtnClose = function() {
                r.default.mainCH.hideBannerAd(), this.btn_get.offAll(Laya.Event.CLICK), this.btnClose.offAll(Laya.Event.CLICK), 
                this.close();
            }, FreeUpgradeUI.SCENE_NAME = "scene/FreeUpgrade.scene", FreeUpgradeUI;
        }(a.ui.scene.FreeUpgradeUI);
        n.default = c;
    }, {
        "../channel/CM": 8,
        "../script/GameManager": 48,
        "../script/TotalTypeManager": 52,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100,
        "./HomeUI": 40
    } ],
    38: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), 
        i = e("../syscore/GameController"), r = e("../script/GameManager"), s = e("../script/GoldBanenr"), l = e("../navigate/NavigateList"), c = function(e) {
            function GameUI() {
                var t = e.call(this) || this;
                return t.barW = 0, o.default.setScale(t), r.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(GameUI, e), GameUI.prototype.onAwake = function() {
                i.default.instance.eventDispatcher.on("updateBar", this, this.updateBar), this.barW = this.bar.width;
            }, GameUI.prototype.onOpened = function() {
                var e = this;
                i.default.instance.startGame(this), s.default.instance.hideGoldBanner();
            }, GameUI.prototype.updateBar = function(e, t, n, a) {
                this.lb_step.text = e + "/" + t, this.bar.width = this.barW / t * (n + a) / 2 + this.barW / t * (t - e), 
                this.t1.x = (this.barW - this.bar.width) / 2 + 23, this.t2.x = this.barW - (this.barW - this.bar.width) / 2 + 43;
            }, GameUI.SCENE_NAME = "scene/Game.scene", GameUI;
        }(a.ui.scene.GameUI);
        n.default = c;
    }, {
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../syscore/GameController": 57,
        "../yunwei/StageUtil": 100,
        "./../ui/layaMaxUI": 93
    } ],
    39: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../channel/CM"), s = e("./HomeUI"), l = function(e) {
            function Goldfew() {
                var t = e.call(this) || this;
                return t.addGold = 200, o.default.setScale(t), i.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(Goldfew, e), Goldfew.prototype.onOpened = function() {
                this.initBtn(), this.lb_gold_num.text = "+" + i.default.instance.conversion(this.addGold);
            }, Goldfew.prototype.initBtn = function() {
                this.btn_get.on(Laya.Event.CLICK, this, this.onBtnGet), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), 
                i.default.instance.misTouchOrDelay(this.btnClose, this.ref);
            }, Goldfew.prototype.onBtnGet = function() {
                var e = this;
                r.default.mainCH.showVideoAd(function(t) {
                    t && i.default.instance.goldAnim(e.addGold, 1, e, function() {
                        s.default.instance && s.default.instance.initText();
                    });
                });
            }, Goldfew.prototype.onBtnClose = function() {
                r.default.mainCH.hideBannerAd(), this.btn_get.offAll(Laya.Event.CLICK), this.btnClose.offAll(Laya.Event.CLICK), 
                this.close();
            }, Goldfew.SCENE_NAME = "scene/Goldfew.scene", Goldfew;
        }(a.ui.scene.GoldfewUI);
        n.default = l;
    }, {
        "../channel/CM": 8,
        "../script/GameManager": 48,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100,
        "./HomeUI": 40
    } ],
    40: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../script/GameManager"), i = e("./LoadingUI"), r = e("../yunwei/StageUtil"), s = e("../channel/CM"), l = e("../script/GoldBanenr"), c = e("../script/TotalTypeManager"), d = e("./GameUI"), u = e("../sysloader/SceneManager"), h = e("../sysloader/LoaderManeger"), f = e("../syscore/GameController"), p = e("../script/ShopList"), y = e("../yunwei/RandomUtil"), g = e("../global/Global"), m = e("./MoreGameUI"), _ = e("../global/SwitchManager"), v = e("../navigate/NavigateList"), C = e("../navigate/NavigateCircle"), S = e("./FreeUpgradeUI"), M = e("./ResultVictoryUI"), w = e("../dbmodule/CheckinTask"), b = e("./OffTimeUI"), L = e("../dbmodule/ItemBox"), x = e("./VideoUnlockUI"), I = e("./CheckIn"), T = e("./Goldfew"), B = function(e) {
            function HomeUI() {
                var t = e.call(this) || this;
                return t.isset = !1, t.source_scene = null, t.isShowGoldHint1 = !0, t.isShowGoldHint2 = !0, 
                t.isShowGoldHint3 = !0, r.default.setScale(t), HomeUI.instance = t, o.default.instance.screenAdaptation(t.root), 
                t.shopList = new p.default(t, t.shoplist), t;
            }
            return __extends(HomeUI, e), HomeUI.prototype.onOpened = function(e) {
                this.source_scene = e, f.default.instance.eventDispatcher.on("Home", this, this.updateBar), 
                s.default.mainCH.hideBannerAd(), this.initData(), this.init2DUI(), this.initGame(), 
                this.showScene();
            }, HomeUI.prototype.showScene = function() {
                this.showOffTime(), _.default.isfreeUpgrade() && this.source_scene == M.default.SCENE_NAME ? o.default.instance.openScene(S.default.SCENE_NAME, !1) : this.source_scene == M.default.SCENE_NAME && this.showSkin();
            }, HomeUI.prototype.showCheckIn = function() {
                w.default.checkTodayBoolCheck() || this.source_scene != i.default.SCENE_NAME || this.onBtnSign();
            }, HomeUI.prototype.showOffTime = function() {
                var e = this;
                if (_.default.isShowOfflineScene() && !g.default.is_offline_complete) {
                    var t = c.default.getOffTime(), n = Math.floor(.001 * (Laya.Browser.now() - t) / 60);
                    n > 2880 && (n = 2880);
                    var a = Math.floor(.5 * n);
                    g.default.is_offline_complete = !0, console.log("离线时间：", n), console.log("离线收益：", a), 
                    n >= 10 && a > 0 ? (o.default.instance.eventDispatcher.once("close_offtime", this, function() {
                        e.showCheckIn();
                    }), o.default.instance.openScene(b.default.SCENE_NAME, !1, {
                        duan_min: n,
                        addGold: a
                    }), console.log("离线收益金币: ", a)) : this.showCheckIn();
                } else this.showCheckIn();
            }, HomeUI.prototype.showSkin = function() {
                for (var e = L.default.getItemsConditionsByType(1, 1), t = [], n = 0; n < e.length; n++) {
                    e[n].conditions[0].item.ct;
                    _.default.unlockSkin() && t.push(e[n]);
                }
                var a = t.filter(function(e) {
                    return 2 != e.state;
                });
                if (a.length > 0) {
                    var i = a[n = Math.floor(Math.random() * a.length)].conditions[0].item;
                    o.default.instance.openScene(x.default.SCENE_NAME, !1, i);
                }
            }, HomeUI.prototype.updateBar = function(e) {
                this.car_num.text = e;
            }, HomeUI.prototype.init2DUI = function() {
            }, HomeUI.prototype.initData = function() {
                this.lb_grade.text = "LEVEL:" + c.default.getGrade(), 
                this.onVolume(g.default.sound_switch), this.initText(!0), l.default.instance.setGoldLabel(), 
                l.default.instance.showGoldBanner();
            }, HomeUI.prototype.initGame = function() {
                var e = this;
                this.btn_start.visible = !1, f.default.instance.loadAllCar(function() {
                    e.initBtn();
                });
            }, HomeUI.prototype.initBtn = function() {
                this.btn_start.visible = !0, this.btn_start.on(Laya.Event.CLICK, this, this.onBtnStar), 
                this.btn_clear.on(Laya.Event.CLICK, this, this.onBtnClear), this.btn_save.on(Laya.Event.CLICK, this, this.onBtnSave), 
                this.btn_start.visible = !0, 
                this.Up_btngold.on(Laya.Event.CLICK, this, this.OnBtnUp, [ 1 ]), this.Up_btnpower.on(Laya.Event.CLICK, this, this.OnBtnUp, [ 2 ]), 
                this.Up_btnspeed.on(Laya.Event.CLICK, this, this.OnBtnUp, [ 3 ]), this.btn_sound.on(Laya.Event.CLICK, this, this.onVolume, [ 0 ]), 
                this.btn_soundoff.on(Laya.Event.CLICK, this, this.onVolume, [ 1 ]),
                this.btn_sign.on(Laya.Event.CLICK, this, this.onBtnSign);
            }, HomeUI.prototype.OnBtnUp = function(e) {
                var t = this;
                if (1 == e) {
                    
                    var n = u.default.getGoldTemp(c.default.getGoldLevel());
                    if(n.pid === 30)return;
                    c.default.getGold() >= n.cost ? (c.default.addGoldLevel(), c.default.decGold(n.cost), 
                    this.soundPlay(1)) : (this.soundPlay(0), this.isShowGoldHint1 ? (this.isShowGoldHint1 = !1, 
                    o.default.instance.openScene(T.default.SCENE_NAME, !1)) : s.default.mainCH.showVideoAd(function(e) {
                        e && (c.default.addGoldLevel(), t.initText());
                    }));
                } else if (2 == e) {
                    var a = u.default.getPowerTemp(c.default.getPowLevel());
                    if(a.pid === 30)return;
                    c.default.getGold() >= a.cost ? (c.default.addPowLevel(), c.default.decGold(a.cost), 
                    this.soundPlay(1)) : (this.soundPlay(0), this.isShowGoldHint2 ? (this.isShowGoldHint2 = !1, 
                    o.default.instance.openScene(T.default.SCENE_NAME, !1)) : s.default.mainCH.showVideoAd(function(e) {
                        e && (c.default.addPowLevel(), t.initText());
                    }));
                } else if (3 == e) {
                    var i = u.default.getPowerTemp(c.default.getSpeedLevel());
                    if(i.pid === 30)return;
                    c.default.getGold() >= i.cost ? (c.default.addSpeedLevel(), c.default.decGold(i.cost), 
                    this.soundPlay(1)) : (this.soundPlay(0), this.isShowGoldHint3 ? (this.isShowGoldHint3 = !1, 
                    o.default.instance.openScene(T.default.SCENE_NAME, !1)) : s.default.mainCH.showVideoAd(function(e) {
                        e && (c.default.addSpeedLevel(), t.initText());
                    }));
                }
                this.initText(), this.refreshGold(), c.default.saveData();
            }, HomeUI.prototype.soundPlay = function(e) {
                if (e) {
                    var t = y.default.getIntegerInRandom(5010, 5006);
                    h.default.instance.playSound(t);
                } else {
                    var n = y.default.getIntegerInRandom(5016, 5013);
                    h.default.instance.playSound(n);
                }
            }, HomeUI.prototype.onBtnStar = function() {

                platform.getInstance().showInterstitial(()=>{
                    this.btn_start.visible = !1,
                    o.default.instance.openScene(d.default.SCENE_NAME, !0);
                })
               
            },  HomeUI.prototype.onBtnSign = function() {
                console.log("点击签到"), o.default.instance.openScene(I.default.SCENE_NAME, !1);
            }, HomeUI.prototype.onBtnClear = function() {
                Laya.LocalStorage.clear();
            }, HomeUI.prototype.refreshGold = function() {
                l.default.instance.setGoldLabel();
            }, HomeUI.prototype.onBtnSave = function(e) {
                f.default.instance.loadNewCar(e);
            }, HomeUI.prototype.OnBtnSet = function() {
                h.default.instance.playSound(5023), this.isset ? (Laya.Tween.to(this.icon_panel, {
                    height: 270
                }, 200), this.isset = !1) : (Laya.Tween.to(this.icon_panel, {
                    height: 85
                }, 200), this.isset = !0);
            }, HomeUI.prototype.initText = function(e) {
                void 0 === e && (e = !1);
                var t = u.default.getPowerTemp(c.default.getPowLevel());
                this.power_level.text = t.pid + "", this.power_goldnum.text = t.cost + "";
                var n = u.default.getSpeedTemp(c.default.getSpeedLevel());
                this.speed_level.text = n.pid + "", this.speed_goldnum.text = n.cost + "";
                var a = u.default.getGoldTemp(c.default.getGoldLevel());
            
            
                this.gold_level.text = a.pid + "",
                this.Up_goldnum.text = a.cost + "", this.gold_free.visible = !1, 
                this.power_free.visible = !1, this.speed_free.visible = !1, this.power_goldnum.visible = !0, 
                this.speed_goldnum.visible = !0, this.Up_goldnum.visible = !0, this.gold_gold.visible = !0, 
                this.gold_power.visible = !0, this.gold_speed.visible = !0, c.default.getGold() < a.cost ? (this.gold_free.visible = !0, 
                this.Up_goldnum.visible = !1, this.gold_gold.visible = !1, e && (this.isShowGoldHint1 = !1)) : this.isShowGoldHint1 = !0, 
                c.default.getGold() < t.cost ? (this.power_free.visible = !0, this.power_goldnum.visible = !1, 
                this.gold_power.visible = !1, e && (this.isShowGoldHint2 = !1)) : this.isShowGoldHint2 = !0, 
                c.default.getGold() < n.cost ? (this.speed_free.visible = !0, this.speed_goldnum.visible = !1, 
                this.gold_speed.visible = !1, e && (this.isShowGoldHint3 = !1)) : this.isShowGoldHint3 = !0;

                if(a.pid == 30){
                    this.Up_goldnum.text = "MAX";
                    this.gold_free.visible = false; 
                    this.Up_goldnum.visible = true;
                   
                }
                if(t.pid == 30){
                    this.power_goldnum.text = "MAX";
                    this.power_free.visible = false; 
                    this.power_goldnum.visible = true;
                   
                }
                if(n.pid == 30){
                    this.speed_goldnum.text = "MAX";
                    this.speed_free.visible = false; 
                    this.speed_goldnum.visible = true;
                   
                }
            }, HomeUI.prototype.onVolume = function(e) {
                g.default.sound_switch = e, g.default.sound_switch ? (Laya.SoundManager.muted = !1, 
                this.btn_sound.visible = !0, this.btn_soundoff.visible = !1) : (Laya.SoundManager.muted = !0, 
                this.btn_sound.visible = !1, this.btn_soundoff.visible = !0);
            }, HomeUI.SCENE_NAME = "scene/Home.scene", HomeUI.isTryOut = !1, HomeUI;
        }(a.ui.scene.HomeUI);
        n.default = B;
    }, {
        "../channel/CM": 8,
        "../dbmodule/CheckinTask": 18,
        "../dbmodule/ItemBox": 19,
        "../global/Global": 28,
        "../global/SwitchManager": 30,
        "../navigate/NavigateCircle": 32,
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../script/ShopList": 51,
        "../script/TotalTypeManager": 52,
        "../syscore/GameController": 57,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../ui/layaMaxUI": 93,
        "../yunwei/RandomUtil": 99,
        "../yunwei/StageUtil": 100,
        "./CheckIn": 34,
        "./FreeUpgradeUI": 37,
        "./GameUI": 38,
        "./Goldfew": 39,
        "./LoadingUI": 41,
        "./MoreGameUI": 42,
        "./OffTimeUI": 44,
        "./ResultVictoryUI": 45,
        "./VideoUnlockUI": 47
    } ],
    41: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../channel/CM"), i = e("./HomeUI"), r = e("../sysloader/LoaderManeger"), s = e("../sysloader/SceneManager"), l = e("../script/GameManager"), c = e("../syscore/GameController"), d = e("../dbmodule/TotalType"), u = e("../script/TotalTypeManager"), h = e("../script/GoldBanenr"), f = e("../yunwei/StageUtil"), p = e("../global/QYCtr"), y = e("../global/YWCtr"), g = e("../script/RefreshBanner"), m = function(e) {
            function LoadingUI() {
                var t = e.call(this) || this;
                return f.default.setScale(t), 
                // console.log = function() {},
                 new o.default(o.default.CH_WEIXIN), new r.default(), 
                new l.default(), new c.default(), new h.default(), new g.default(), p.default.initSDK(), 
                y.default.initSDK(), t;
            }
            return __extends(LoadingUI, e), LoadingUI.prototype.onAwake = function() {
                var e = this;
                this.progress_panel.width = 1, Laya.timer.loop(1, this, function() {
                    if (e.progress_panel.width < 465) {
                        e.progress_panel.width += 1e3 / 60 * 465 / 3e3;
                        var t = Math.round(100 * e.progress_panel.width / 465);
                        e.progress_label.text = t + "%";
                    }
                });
            }, LoadingUI.prototype.onOpened = function() {
                var e = this;
                d.default.load(function() {
                    u.default.checkIsNewDay() && u.default.setFreeGoldNum(0), o.default.mainCH.showShareMenu(), 
                    r.default.instance.creatByJson(Laya.Handler.create(e, function() {
                        s.default.init(), r.default.instance.loadSubPack(r.default.SUB_ID_HOME, function() {
                            r.default.instance.loadSubPack(r.default.SUB_ID_OTHER, function() {
                                s.default.preLoadRes(), l.default.instance.loadScene3D(function() {
                                    e.proRefresh(!0), Laya.timer.once(1e3, e, function() {
                                        platform.getInstance().cargamesstartup("Car-Crusher",()=>{
                                            let yad     = new Laya.Image();
                                            yad.scale(0.9,0.9);
                                            yad.skin    = "common/yad.png";
                                            yad.centerX = 0;
                                            yad.bottom  = 10;
                                            yad.zOrder  = 2e3;
                                            yad.on(Laya.Event.MOUSE_DOWN,yad,()=>{platform.getInstance().navigate("GAME","LOGO")})
                                            Laya.stage.addChild(yad);
                                            e.OpenHome();
                                            
                                        })
                                       
                                    });
                                });
                            });
                        });
                    }));
                });
            }, LoadingUI.prototype.proRefresh = function(e) {
                if (void 0 === e && (e = !1), this.progress_panel.width < 530 && !e) {
                    this.progress_panel.width += 1e3 / 60 * 530 / 2e3;
                    Math.round(100 * this.progress_panel.width / 530);
                } else this.progress_panel.width = 530;
            }, LoadingUI.prototype.OpenHome = function() {
                this.root.visible = !1, 
                r.default.instance.playSound(5001), 
                Laya.Tween.to(this.bg, {
                    x: 0
                }, 1e3, null),
                 Laya.Tween.to(this.bg1, {
                    x: 640
                }, 1e3, null, Laya.Handler.create(this, function() {
                    l.default.instance.openScene(i.default.SCENE_NAME, !0, LoadingUI.SCENE_NAME);
                }));
            }, LoadingUI.SCENE_NAME = "scene/Loading.scene", LoadingUI;
        }(a.ui.scene.LoadingUI);
        n.default = m;
    }, {
        "../channel/CM": 8,
        "../dbmodule/TotalType": 26,
        "../global/QYCtr": 29,
        "../global/YWCtr": 31,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../script/RefreshBanner": 50,
        "../script/TotalTypeManager": 52,
        "../syscore/GameController": 57,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100,
        "./HomeUI": 40
    } ],
    42: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../sysloader/LoaderManeger"), s = e("../navigate/NavigateList"), l = e("../channel/CM"), c = e("../global/SwitchManager"), d = function(e) {
            function MoreGameUI() {
                var t = e.call(this) || this;
                return o.default.setScale(t), i.default.instance.screenAdaptation(t.root), t;
            }
            return __extends(MoreGameUI, e), MoreGameUI.prototype.onOpened = function() {
                var e = this.more.getComponent(s.default);
                e && 0 == e.status && e.init(0, 0, 0, 1), this.initBtn();
            }, MoreGameUI.prototype.initBtn = function() {
                var e = this;
                console.log("更多游戏"), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), 
                this.btnClose.visible = !1, l.default.mainCH.showBannerAd(), Laya.timer.once(c.default.receiving_button, this, function() {
                    return e.btnClose.visible = !0;
                });
            }, MoreGameUI.prototype.onBtnClose = function() {
                r.default.instance.playSound(8011), l.default.mainCH.hideBannerAd(), this.btnClose.offAll(Laya.Event.CLICK), 
                this.close();
            }, MoreGameUI.prototype.onDisable = function() {
                console.log("关闭了");
            }, MoreGameUI.SCENE_NAME = "scene/MoreGame.scene", MoreGameUI;
        }(a.ui.scene.MoreGameUI);
        n.default = d;
    }, {
        "../channel/CM": 8,
        "../global/SwitchManager": 30,
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../sysloader/LoaderManeger": 72,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100
    } ],
    43: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../dbmodule/ItemBox"), s = e("../channel/CM"), l = function(e) {
            function NewUnlockUI() {
                var t = e.call(this) || this;
                return o.default.setScale(t), i.default.instance.screenAdaptation(t.root), t;
            }
            return __extends(NewUnlockUI, e), NewUnlockUI.prototype.onOpened = function(e) {
                var t = r.default.getItemByID(e);
                this.ivItem.skin = "img/shop/" + t.ic, this.initBtn(), s.default.mainCH.showBannerAd();
            }, NewUnlockUI.prototype.initBtn = function() {
                this.btn_ok.on(Laya.Event.CLICK, this, this.onBtnOk);
            }, NewUnlockUI.prototype.onBtnOk = function() {
                i.default.instance.eventDispatcher.event("close_newUnlock"), this.close(), this.destroy(), 
                s.default.mainCH.hideBannerAd();
            }, NewUnlockUI.prototype.onDisable = function() {}, NewUnlockUI.SCENE_NAME = "scene/NewUnlock.scene", 
            NewUnlockUI;
        }(a.ui.scene.NewUnlockUI);
        n.default = l;
    }, {
        "../channel/CM": 8,
        "../dbmodule/ItemBox": 19,
        "../script/GameManager": 48,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100
    } ],
    44: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../script/TotalTypeManager"), i = e("../yunwei/StageUtil"), r = e("../channel/CM"), s = e("../script/GameManager"), l = function(e) {
            function OffTimeUI() {
                var t = e.call(this) || this;
                return t.addGold = 0, t.duan_min = 0, i.default.setScale(t), s.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(OffTimeUI, e), OffTimeUI.prototype.onOpened = function(e) {
                this.duan_min = e.duan_min, this.addGold = e.addGold, this.initBtn(), this.init2DUI();
            }, OffTimeUI.prototype.initBtn = function() {
                this.btnDouble.on(Laya.Event.CLICK, this, this.onBtnGetAward, [ 2 ]), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnGetAward, [ 1 ]), 
                s.default.instance.misTouchOrDelay(this.btnClose, this.ref);
            }, OffTimeUI.prototype.init2DUI = function() {
                this.lb_gold_num.text = "+" + this.addGold;
            }, OffTimeUI.prototype.onBtnGetAward = function(e) {
                var t = this;
                o.default.setOffTime(), e > 1 ? r.default.mainCH.showVideoAd(function(n) {
                    n && (s.default.instance.goldAnim(t.addGold, e), t.closeSelf(), t.close());
                }) : (s.default.instance.goldAnim(this.addGold, e), this.closeSelf(), this.close());
            }, OffTimeUI.prototype.closeSelf = function() {
                r.default.mainCH.hideBannerAd(), Laya.timer.clearAll(this), this.btnDouble.offAll(Laya.Event.CLICK), 
                this.btnClose.offAll(Laya.Event.CLICK), s.default.instance.eventDispatcher.event("close_offtime");
            }, OffTimeUI.SCENE_NAME = "scene/OffTime.scene", OffTimeUI;
        }(a.ui.scene.OffTimeUI);
        n.default = l;
    }, {
        "../channel/CM": 8,
        "../script/GameManager": 48,
        "../script/TotalTypeManager": 52,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100
    } ],
    45: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../channel/CM"), i = e("./HomeUI"), r = e("../yunwei/StageUtil"), s = e("../script/GameManager"), l = e("../sysloader/LoaderManeger"), c = e("../script/TotalTypeManager"), d = e("../script/GoldBanenr"), u = e("../sysloader/SceneManager"), h = e("../global/SwitchManager"), f = e("../global/QYCtr"), p = e("./ExportPageUI"), y = e("../navigate/NavigateList"), g = e("../yunwei/RandomUtil"), m = function(e) {
            function ResultVictoryUI() {
                var t = e.call(this) || this;
                return t.add_gold = 500, t.total_car = 0, r.default.setScale(t), s.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(ResultVictoryUI, e), ResultVictoryUI.prototype.onOpened = function(e) {
                this.total_car = e, this.root.visible = !1, this.btn_continue.visible = !1, this.init2DUI(), 
                l.default.instance.stopMusic();
            }, ResultVictoryUI.prototype.init2DUI = function() {
                var e = this;
                l.default.instance.playSound(5003), d.default.instance.showGoldBanner(), Laya.Tween.to(this.bg1, {
                    x: 320
                }, 1e3, null), Laya.Tween.to(this.bg2, {
                    x: 320
                }, 1e3, null, Laya.Handler.create(this, function() {
                    e.root.visible = !0, e.btn_continue.visible = !0, e.initBtn(), e.initData();
                }));
                var t = c.default.getGoldLevel();
                this.add_gold = 100 + 100 * this.total_car + u.default.getGoldTemp(t).p, this.lb_single.text = this.add_gold + "", 
                this.lb_mul.text = 4 * this.add_gold + "";
            }, ResultVictoryUI.prototype.initBtn = function() {
                this.btn_continue.on(Laya.Event.CLICK, this, this.onBtnContinue, [ 1 ]), 
                this.btn_videoget.on(Laya.Event.CLICK, this, this.onBtnVideo), 
                 l.default.instance.playSound(5025), 
                s.default.instance.misTouchOrDelay(this.btn_continue, this.ref);
            }, ResultVictoryUI.prototype.initData = function() {
                var e = c.default.getGrade();
                e < 100 && c.default.addGrade(), this.levelnum.text = "LEVEL:" + e;
                
                // this.sp_hand.visible = this.result.parent.visible;
                // var n = 150 + 190 * g.default.getIntegerInRandom(2, 0), a = 530 + 200 * g.default.getIntegerInRandom(1, 0);
                // this.sp_hand.pos(n, a);
            }, ResultVictoryUI.prototype.onBtnContinue = function() {
                l.default.instance.playSound(5032), this.onMoreGet(1);
            }, ResultVictoryUI.prototype.onBtnVideo = function() {
                var e = this;
                l.default.instance.playSound(5023), 
                o.default.mainCH.showVideoAd(function(t) {
                    t ? e.onMoreGet(4) : o.default.mainCH.showToast("需要观看完视频，才能获取奖励");
                });
            }, ResultVictoryUI.prototype.onMoreGet = function(e) {
                this.closeSelf(), this.root.visible = !1, this.btn_continue.visible = !1, o.default.mainCH.hideBannerAd(), 
                s.default.instance.goldAnim(this.add_gold, e, this, this.onContinue);
            }, ResultVictoryUI.prototype.closeSelf = function() {
                this.btn_continue.offAll(Laya.Event.CLICK), this.btn_videoget.offAll(Laya.Event.CLICK), 
                this.btn_continue.visible = !1, this.btn_videoget.visible = !1;
            }, ResultVictoryUI.prototype.onContinue = function() {
                var e = this;
                h.default.isShowSideBox() && f.default.sideBoxList[4] && f.default.sideBoxList[4].length > 0 ? (s.default.instance.eventDispatcher.once("close_export", this, function() {
                    e.clearAll();
                }), s.default.instance.openScene(p.default.SCENE_NAME, !1)) : this.clearAll();
            }, ResultVictoryUI.prototype.clearAll = function() {
                var e = this;
                s.default.instance.clearAll(), s.default.instance.loadScene3D(function() {
                    l.default.instance.playSound(5001), Laya.Tween.to(e.bg1, {
                        x: 0
                    }, 1e3, null), Laya.Tween.to(e.bg2, {
                        x: 640
                    }, 1e3, null, Laya.Handler.create(e, function() {
                        i.default.isTryOut = !0, s.default.instance.openScene(i.default.SCENE_NAME, !0, ResultVictoryUI.SCENE_NAME);
                    }));
                });
            }, ResultVictoryUI.SCENE_NAME = "scene/ResultVictory.scene", ResultVictoryUI;
        }(a.ui.scene.ResultVictoryUI);
        n.default = m;
    }, {
        "../channel/CM": 8,
        "../global/QYCtr": 29,
        "../global/SwitchManager": 30,
        "../navigate/NavigateList": 33,
        "../script/GameManager": 48,
        "../script/GoldBanenr": 49,
        "../script/TotalTypeManager": 52,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../ui/layaMaxUI": 93,
        "../yunwei/RandomUtil": 99,
        "../yunwei/StageUtil": 100,
        "./ExportPageUI": 36,
        "./HomeUI": 40
    } ],
    46: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../anim/AnimLight"), s = function(e) {
            function TryOutUI() {
                var t = e.call(this) || this;
                return o.default.setScale(t), i.default.instance.screenAdaptation(t.root), t;
            }
            return __extends(TryOutUI, e), TryOutUI.prototype.onOpened = function() {
                this.initBtn(), this.guang.addComponent(r.default);
            }, TryOutUI.prototype.initBtn = function() {
                this.btn_use.on(Laya.Event.CLICK, this, this.OnBtnUse);
            }, TryOutUI.prototype.OnBtnUse = function() {
                this.close();
            }, TryOutUI.SCENE_NAME = "scene/TryOut.scene", TryOutUI;
        }(a.ui.scene.TryOutUI);
        n.default = s;
    }, {
        "../anim/AnimLight": 4,
        "../script/GameManager": 48,
        "../yunwei/StageUtil": 100,
        "./../ui/layaMaxUI": 93
    } ],
    47: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../ui/layaMaxUI"), o = e("../yunwei/StageUtil"), i = e("../script/GameManager"), r = e("../channel/CM"), s = e("./HomeUI"), l = e("../dbmodule/ItemBox"), c = e("../script/ShopList"), d = e("./NewUnlockUI"), u = function(e) {
            function VideoUnlockUI() {
                var t = e.call(this) || this;
                return t.unlockItem = null, o.default.setScale(t), i.default.instance.screenAdaptation(t.root), 
                t;
            }
            return __extends(VideoUnlockUI, e), VideoUnlockUI.prototype.onOpened = function(e) {
                this.unlockItem = e, this.initUI(), this.initBtn();
            }, VideoUnlockUI.prototype.initUI = function() {
                this.ivItem.skin = "img/shop/" + this.unlockItem.ic;
            }, VideoUnlockUI.prototype.initBtn = function() {
                this.btn_get.on(Laya.Event.CLICK, this, this.onBntAtOnce), this.btnClose.on(Laya.Event.CLICK, this, this.onBtnClose), 
                i.default.instance.misTouchOrDelay(this.btnClose, this.ref);
            }, VideoUnlockUI.prototype.onBntAtOnce = function() {
                var e = this;
                r.default.mainCH.showVideoAd(function(t) {
                    t && e.refreshChip();
                });
            }, VideoUnlockUI.prototype.refreshChip = function() {
                var e = this;
                l.default.incItem(this.unlockItem, 1), i.default.instance.eventDispatcher.once("close_newUnlock", this, function(t) {
                    var n = l.default.itemAllConditions(e.unlockItem).conditions[0].item.ml;
                    s.default.instance && (s.default.instance.onBtnSave(n), s.default.instance.shopList = new c.default(e, s.default.instance.shoplist));
                }), this.onBtnClose(), i.default.instance.openScene(d.default.SCENE_NAME, !1, this.unlockItem.id);
            }, VideoUnlockUI.prototype.onBtnClose = function() {
                r.default.mainCH.hideBannerAd(), this.btn_get.offAll(Laya.Event.CLICK), this.btnClose.offAll(Laya.Event.CLICK), 
                this.close();
            }, VideoUnlockUI.SCENE_NAME = "scene/VideoUnlock.scene", VideoUnlockUI;
        }(a.ui.scene.VideoUnlockUI);
        n.default = u;
    }, {
        "../channel/CM": 8,
        "../dbmodule/ItemBox": 19,
        "../script/GameManager": 48,
        "../script/ShopList": 51,
        "../ui/layaMaxUI": 93,
        "../yunwei/StageUtil": 100,
        "./HomeUI": 40,
        "./NewUnlockUI": 43
    } ],
    48: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../syscore/GameController"), o = e("../sceneui/ResultVictoryUI"), i = e("../sysscene/WinGoldManager"), r = e("./GoldBanenr"), s = e("./TotalTypeManager"), l = e("../sysloader/SceneManager"), c = e("../channel/CM"), d = e("../sysloader/LoaderManeger"), u = e("../global/Global"), h = e("../yunwei/StageUtil"), f = e("../global/SwitchManager"), p = e("../sceneui/ExitPageUI"), y = e("../global/QYCtr"), g = function() {
            function GameManager() {
                this.eventDispatcher = null, GameManager.instance = this, this.eventDispatcher = new Laya.EventDispatcher();
            }
            return GameManager.prototype.openScene = function(e, t, n) {
                void 0 === n && (n = null), Laya.Scene.load(e, Laya.Handler.create(this, function(e) {
                    e.open(t, n);
                }));
            }, GameManager.prototype.gameOver = function(e) {
                var t = this;
                e && (console.log("游戏结束"), f.default.isShowSideBox() && y.default.sideBoxList[5] && y.default.sideBoxList[5].length > 0 ? (GameManager.instance.eventDispatcher.once("close_exit", this, function() {
                    t.openScene(o.default.SCENE_NAME, !1, e);
                }), GameManager.instance.openScene(p.default.SCENE_NAME, !0)) : this.openScene(o.default.SCENE_NAME, !1, e));
            }, GameManager.prototype.loadScene3D = function(e) {
                l.default.preLoadScene(Laya.Handler.create(this, function() {
                    a.default.instance.loadLevel(function() {
                        e && e();
                    });
                }));
            }, GameManager.prototype.clearAll = function() {
                a.default.instance.clearAll();
            }, GameManager.prototype.goldAnim = function(e, t, n, a) {
                void 0 === t && (t = 1), void 0 === n && (n = null), void 0 === a && (a = null), 
                i.default.init(Laya.Handler.create(this, function() {
                    s.default.addGold(e * t), s.default.saveData(), r.default.instance.setGoldLabel(), 
                    a && Laya.timer.once(1e3, n, a);
                }), Laya.Handler.create(this, function(n) {
                    var a = s.default.getGold() + Math.round(e * t * n / 20);
                    r.default.instance.setGoldLabelByNumber(a), 1 == n && r.default.instance.showScaleAnim(), 
                    d.default.instance.playSound(5026), c.default.mainCH.vibrateShort();
                }, null, !1)), c.default.mainCH.vibrateLong();
            }, GameManager.prototype.conversion = function(e, t) {
                void 0 === t && (t = 1), e || (e = 0);
                var n = "";
                return e < 1e3 && (n = e.toFixed(0) + ""), e >= Math.pow(10, 3) && (n = (e / Math.pow(10, 3)).toFixed(t) + "K"), 
                e >= Math.pow(10, 6) && (n = (e / Math.pow(10, 6)).toFixed(t) + "M"), e >= Math.pow(10, 9) && (n = (e / Math.pow(10, 9)).toFixed(t) + "B"), 
                e >= Math.pow(10, 12) && (n = (e / Math.pow(10, 12)).toFixed(t) + "T"), e >= Math.pow(10, 15) && (n = (e / Math.pow(10, 15)).toFixed(t) + "aa"), 
                e >= Math.pow(10, 18) && (n = (e / Math.pow(10, 18)).toFixed(t) + "ab"), e >= Math.pow(10, 21) && (n = (e / Math.pow(10, 21)).toFixed(t) + "ac"), 
                e >= Math.pow(10, 24) && (n = (e / Math.pow(10, 24)).toFixed(t) + "ad"), e >= Math.pow(10, 27) && (n = (e / Math.pow(10, 27)).toFixed(t) + "ae"), 
                e >= Math.pow(10, 30) && (n = (e / Math.pow(10, 30)).toFixed(t) + "af"), e >= Math.pow(10, 33) && (n = (e / Math.pow(10, 33)).toFixed(t) + "ag"), 
                e >= Math.pow(10, 36) && (n = (e / Math.pow(10, 36)).toFixed(t) + "ah"), e >= Math.pow(10, 39) && (n = (e / Math.pow(10, 39)).toFixed(t) + "ai"), 
                e >= Math.pow(10, 42) && (n = (e / Math.pow(10, 42)).toFixed(t) + "aj"), e >= Math.pow(10, 45) && (n = (e / Math.pow(10, 45)).toFixed(t) + "ak"), 
                n;
            }, GameManager.prototype.screenAdaptation = function(e, t) {
                void 0 === t && (t = 100), Laya.Browser.width / Laya.Browser.height < .5 && (e.y = e.y + t);
            }, GameManager.prototype.misTouchOrDelay = function(e, t, n, a) {
                void 0 === n && (n = !0), void 0 === a && (a = 25), u.default.swtich_mistouch ? (e.y = h.default.height() - e.height - a, 
                this.misTouch(e, t, n)) : (e.y = t.localToGlobal(new Laya.Point(0, 0), !1).y / h.default.getScaleRate(), 
                e.visible = !1, c.default.mainCH.showBannerAd(), Laya.timer.once(f.default.receiving_button, this, function() {
                    return e.visible = !0;
                }));
            }, GameManager.prototype.misTouch = function(e, t, n) {
                c.default.mainCH.hideBannerAd(), n && (e.disabled = !0), e.gray = !1, Laya.timer.once(f.default.bannerMove, this, function() {
                    c.default.mainCH.showBannerAd();
                }), Laya.timer.once(f.default.buttonMove, this, function() {
                    e.disabled = !1, e.gray = !1, e.y = t.localToGlobal(new Laya.Point(0, 0), !1).y / h.default.getScaleRate();
                });
            }, GameManager.instance = null, GameManager;
        }();
        n.default = g;
    }, {
        "../channel/CM": 8,
        "../global/Global": 28,
        "../global/QYCtr": 29,
        "../global/SwitchManager": 30,
        "../sceneui/ExitPageUI": 35,
        "../sceneui/ResultVictoryUI": 45,
        "../syscore/GameController": 57,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../sysscene/WinGoldManager": 86,
        "../yunwei/StageUtil": 100,
        "./GoldBanenr": 49,
        "./TotalTypeManager": 52
    } ],
    49: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameManager"), o = e("./TotalTypeManager"), i = e("../yunwei/StageUtil"), r = function() {
            function GoldBanenr() {
                this.gold_banner = null, this.lb_user_gold = null, this.ic_gold = null, GoldBanenr.instance = this, 
                this.createGoldBanner();
            }
            return GoldBanenr.prototype.showGoldBanner = function() {
                this.gold_banner && (this.gold_banner.visible = !0);
            }, GoldBanenr.prototype.hideGoldBanner = function() {
                this.gold_banner && (this.gold_banner.visible = !1);
            }, GoldBanenr.prototype.setGoldLabel = function() {
                this.lb_user_gold && (this.lb_user_gold.text = a.default.instance.conversion(o.default.getGold()));
            }, GoldBanenr.prototype.setGoldLabelByNumber = function(e) {
                this.lb_user_gold && (this.lb_user_gold.text = a.default.instance.conversion(e));
            }, GoldBanenr.prototype.getIconGoldPos = function() {
                var e = this.ic_gold.localToGlobal(new Laya.Point(0, 0), !1);
                return new Laya.Vector3(e.x, e.y, 0);
            }, GoldBanenr.prototype.showScaleAnim = function() {
                if (this.gold_banner) {
                    var e = 1.2 * i.default.getScaleRate(), t = 1 * i.default.getScaleRate();
                    Laya.Tween.to(this.gold_banner, {
                        scaleX: e,
                        scaleY: e
                    }, 150, Laya.Ease.linearIn, null, 0), Laya.Tween.to(this.gold_banner, {
                        scaleX: t,
                        scaleY: t
                    }, 150, Laya.Ease.linearIn, null, 150), Laya.Tween.to(this.gold_banner, {
                        scaleX: e,
                        scaleY: e
                    }, 150, Laya.Ease.linearIn, null, 300), Laya.Tween.to(this.gold_banner, {
                        scaleX: t,
                        scaleY: t
                    }, 150, Laya.Ease.linearIn, null, 450), Laya.Tween.to(this.gold_banner, {
                        scaleX: e,
                        scaleY: e
                    }, 150, Laya.Ease.linearIn, null, 600), Laya.Tween.to(this.gold_banner, {
                        scaleX: t,
                        scaleY: t
                    }, 150, Laya.Ease.linearIn, null, 750);
                }
            }, GoldBanenr.prototype.createGoldBanner = function() {
                var e = this;
                Laya.loader.create("prefab/gold_banner.json", Laya.Handler.create(this, function() {
                    var t = new Laya.Prefab();
                    t.json = Laya.Loader.getRes("prefab/gold_banner.json"), e.gold_banner = t.create(), 
                    e.gold_banner.zOrder = 30, Laya.stage.addChild(e.gold_banner), i.default.setScale(e.gold_banner), 
                    e.ic_gold = e.gold_banner.getChildByName("ic_gold"), e.lb_user_gold = e.gold_banner.getChildByName("lb_user_gold"), 
                    e.gold_banner.x = 10 * i.default.getScaleRate(), e.autoPosHome(), e.hideGoldBanner();
                }));
            }, GoldBanenr.prototype.autoPosHome = function() {
                Laya.Browser.width / Laya.Browser.height < .5 ? this.gold_banner.y = 160 * i.default.getScaleRate() : this.gold_banner.y = 55 * i.default.getScaleRate();
            }, GoldBanenr.prototype.autoPosGaming = function() {
                this.gold_banner.x = 120 * i.default.getScaleRate(), this.gold_banner.y = 200 * i.default.getScaleRate();
            }, GoldBanenr;
        }();
        n.default = r;
    }, {
        "../yunwei/StageUtil": 100,
        "./GameManager": 48,
        "./TotalTypeManager": 52
    } ],
    50: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../channel/CM"), o = e("../global/SwitchManager"), i = function() {
            function RefreshBanner() {
                this.refreshTime = 0, RefreshBanner.instance = this, this.refreshTime = Laya.Browser.now(), 
                Laya.timer.loop(1, this, this.update);
            }
            return RefreshBanner.prototype.update = function() {
                Laya.Browser.now() - this.refreshTime >= o.default.banner_refresh_time && (this.refreshTime = Laya.Browser.now(), 
                a.default.mainCH.resetBannerAd());
            }, RefreshBanner;
        }();
        n.default = i;
    }, {
        "../channel/CM": 8,
        "../global/SwitchManager": 30
    } ],
    51: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../dbmodule/ItemBox"), o = e("./TotalTypeManager"), i = e("../channel/CM"), r = e("./GoldBanenr"), s = e("./GameManager"), l = e("../sysloader/LoaderManeger"), c = e("../yunwei/RandomUtil"), d = e("../sceneui/HomeUI"), u = e("../sceneui/NewUnlockUI"), h = function() {
            function ShopList(e, t) {
                this.list = null, this.listData = [], this.select_id = 0, this.gun_id = 0, this.selectData = null, 
                this.selectedItem = null, this.isTryOut = !1, this.ui = e, this.list = t, this.init();
            }
            return ShopList.prototype.init = function() {
                this.listData = a.default.getItemsConditionsByType(1, 1);
                for (var e = [], t = [], n = (o.default.getGunSkin(), 0); n < this.listData.length; n++) {
                    var i = this.listData[n], r = i.conditions[0];
                    if (1 == r.item.ct) 2 == r.state ? e.push(i) : t.push(i);
                }
                this.listData = e.concat(t), this.list.hScrollBarSkin = "", this.list.selectEnable = !0, 
                this.list.selectHandler = new Laya.Handler(this, this.onSelect), this.list.renderHandler = new Laya.Handler(this, this.updateItem), 
                this.refreshListData();
            }, ShopList.prototype.refreshListData = function() {
                if (this.list.dataSource = null, this.listData.length > 0) {
                    for (var e = [], t = 0; t < this.listData.length; t++) {
                        var n = {
                            id: t,
                            commodity: {
                                skin: "img/shop/" + this.listData[t].conditions[0].item.ic
                            },
                            itemConditions: this.listData[t]
                        };
                        e.push(n);
                    }
                    this.list.dataSource = e, this.list.refresh();
                }
            }, ShopList.prototype.updateItem = function(e, t) {
                var n = e.dataSource.itemConditions, a = (o.default.getGrade(), n.conditions[0]), i = (n.conditions[1], 
                a.item, a.price), r = 2 == a.state, l = e.getChildByName("lock"), c = e.getChildByName("own"), d = l.getChildByName("btn_getgold"), u = l.getChildByName("btn_videoget"), h = d.getChildByName("buy_gold");
                l.visible = !r, c.visible = r, r || (h.text = s.default.instance.conversion(i), 
                d.on(Laya.Event.CLICK, this, this.unlockGun, [ e, t, 0, 0 ]), u.on(Laya.Event.CLICK, this, this.OnvideoGet, [ e ]));
            }, ShopList.prototype.OnvideoGet = function(e) {
                l.default.instance.playSound(5023), i.default.mainCH.showVideoAd(function(t) {
                    if (t) {
                        var n = e.dataSource.itemConditions.conditions[0].item.ml;
                        d.default.instance.onBtnSave(n);
                    }
                });
            }, ShopList.prototype.unlockGun = function(e, t, n, o) {
                var r = this, h = e.dataSource.itemConditions.conditions[n];
                this.selectData = a.default.itemAllConditions(h.item);
                var f = this.selectData.conditions[n], p = f.state, y = f.item, g = (f.price, f.price_type_key), m = g.split("_")[0];
                if (1 == p) 0 == o && (l.default.instance.playSound(5032), this.isTryOut = !0, this.purchaseSuccess(y, m), 
                s.default.instance.eventDispatcher.once("close_newUnlock", this, function(t) {
                    r.refreshUnlockShow(e, r.selectData);
                    var n = h.item.ml;
                    d.default.instance.onBtnSave(n);
                }), s.default.instance.openScene(u.default.SCENE_NAME, !1, y.id)); else if (0 == p) {
                    if (0 == o && "gold_cur" == g) {
                        var _ = c.default.getIntegerInRandom(5016, 5013);
                        l.default.instance.playSound(_), i.default.mainCH.showToast("金币不足");
                    }
                } else 2 == p && console.log("已购买");
            }, ShopList.prototype.refreshUnlockShow = function(e, t) {
                e.dataSource.itemConditions = t, this.list.refresh();
            }, ShopList.prototype.purchaseSuccess = function(e, t) {
                a.default.mergeItem(this.selectData, t), this.selectData = a.default.itemAllConditions(e), 
                r.default.instance.setGoldLabel();
            }, ShopList.prototype.onSelect = function(e) {
                if (-1 != e) {
                    var t = this.list.getCell(e).dataSource.itemConditions;
                    if (2 == t.conditions[0].state) {
                        var n = t.conditions[0].item.ml;
                        d.default.instance.onBtnSave(n);
                    }
                    this.list.selectedIndex = -1;
                }
            }, ShopList;
        }();
        n.default = h;
    }, {
        "../channel/CM": 8,
        "../dbmodule/ItemBox": 19,
        "../sceneui/HomeUI": 40,
        "../sceneui/NewUnlockUI": 43,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99,
        "./GameManager": 48,
        "./GoldBanenr": 49,
        "./TotalTypeManager": 52
    } ],
    52: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../dbmodule/TotalType"), o = function() {
            function TotalTypeManager() {}
            return TotalTypeManager.saveData = function() {
                a.default.saveToLocalStorage();
            }, TotalTypeManager.setLoginTime = function(e) {
                return a.default.set("login_time", e);
            }, TotalTypeManager.getLoginTime = function() {
                return a.default.get("login_time");
            }, TotalTypeManager.getLastLeavlTime = function() {
                return a.default.get("last_leave_time");
            }, TotalTypeManager.setLastLeavlTime = function() {
                a.default.set("last_leave_time", Laya.Browser.now());
            }, TotalTypeManager.setOffTime = function() {
                a.default.set("off_time", Laya.Browser.now());
            }, TotalTypeManager.getOffTime = function() {
                var e = a.default.get("off_time");
                return e <= 0 ? Laya.Browser.now() : e;
            }, TotalTypeManager.checkIsNewDay = function() {
                var e = this.getLastLeavlTime();
                return new Date(e).toDateString() !== new Date().toDateString();
            }, TotalTypeManager.getGold = function() {
                return a.default.get("gold");
            }, TotalTypeManager.addGold = function(e) {
                a.default.add("gold", e);
            }, TotalTypeManager.decGold = function(e) {
                a.default.add("total_gold_cost", e), a.default.dec("gold", e);
            }, TotalTypeManager.setGold = function(e) {
                a.default.set("gold", e);
            }, TotalTypeManager.getTotalGold = function() {
                return a.default.get("total_gold_cost");
            }, TotalTypeManager.getDiamond = function() {
                a.default.get("diamond");
            }, TotalTypeManager.addDiamond = function(e) {
                a.default.add("diamond", e);
            }, TotalTypeManager.decDiamond = function(e) {
                a.default.add("total_diamond_cost", e), a.default.dec("diamond", e);
            }, TotalTypeManager.getTotalDiamond = function() {
                return a.default.get("total_diamond_cost");
            }, TotalTypeManager.setTicket = function(e) {
                a.default.set("ticket", e);
            }, TotalTypeManager.getTicket = function() {
                return a.default.get("ticket");
            }, TotalTypeManager.addTicket = function() {
                a.default.add("ticket", 1);
            }, TotalTypeManager.decTicket = function() {
                a.default.dec("ticket", 1);
            }, TotalTypeManager.getFreeGoldNum = function() {
                return a.default.get("free_gold_num") || a.default.set("free_gold_num", 0), a.default.get("free_gold_num");
            }, TotalTypeManager.setFreeGoldNum = function(e) {
                return a.default.set("free_gold_num", e);
            }, TotalTypeManager.addFreeGoldNum = function() {
                a.default.add("free_gold_num", 1);
            }, TotalTypeManager.getGrade = function() {
                return a.default.get("grade");
            }, TotalTypeManager.setGrade = function(e) {
                return a.default.set("grade", e);
            }, TotalTypeManager.addGrade = function() {
                return a.default.add("grade", 1);
            }, TotalTypeManager.getLevel = function() {
                return a.default.get("level");
            }, TotalTypeManager.setLevel = function(e) {
                return a.default.set("level", e);
            }, TotalTypeManager.getPlayerSkin = function() {
                return a.default.get("player_skin");
            }, TotalTypeManager.setPlayerSkin = function(e) {
                a.default.set("player_skin", e);
            }, TotalTypeManager.getGunSkin = function() {
                return a.default.get("gun_skin");
            }, TotalTypeManager.setGunSkin = function(e) {
                a.default.set("gun_skin", e);
            }, TotalTypeManager.getPowLevel = function() {
                return a.default.get("pow_level");
            }, TotalTypeManager.addPowLevel = function() {
                return a.default.add("pow_level", 1);
            }, TotalTypeManager.setPowLevel = function(e) {
                return a.default.set("pow_level", e);
            }, TotalTypeManager.getSpeedLevel = function() {
                return a.default.get("speed_level");
            }, TotalTypeManager.addSpeedLevel = function() {
                return a.default.add("speed_level", 1);
            }, TotalTypeManager.setSpeedLevel = function(e) {
                return a.default.set("speed_level", e);
            }, TotalTypeManager.getGoldLevel = function() {
                return a.default.get("gold_level");
            }, TotalTypeManager.addGoldLevel = function() {
                return a.default.add("gold_level", 1);
            }, TotalTypeManager.setGoldLevel = function(e) {
                return a.default.set("gold_level", e);
            }, TotalTypeManager.addGunLevel = function(e) {
                a.default.item_json.gun_state[e].gl += 1;
            }, TotalTypeManager.getGunState = function() {
                return a.default.item_json.gun_state;
            }, TotalTypeManager.getItemLibUp = function() {
                return a.default.item_json.item_lib_up;
            }, TotalTypeManager;
        }();
        n.default = o;
    }, {
        "../dbmodule/TotalType": 26
    } ],
    53: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function DissolveMaterial() {
                var t = e.call(this) || this;
                return t.setShaderName("CustomMaterial"), t;
            }
            return __extends(DissolveMaterial, e), Object.defineProperty(DissolveMaterial.prototype, "albedoTexture", {
                get: function() {
                    return this._shaderValues.getTexture(DissolveMaterial.ALBEDOTEXTURE);
                },
                set: function(e) {
                    this._shaderValues.setTexture(DissolveMaterial.ALBEDOTEXTURE, e);
                },
                enumerable: !0,
                configurable: !0
            }), DissolveMaterial.initShader = function() {
                var e = {
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
                }, t = {
                    u_Time: Laya.Shader3D.PERIOD_SCENE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_AlbedoTexture: Laya.Shader3D.PERIOD_MATERIAL
                }, n = {
                    s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                    s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                    s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
                }, a = Laya.Shader3D.add("CustomMaterial"), o = new Laya.SubShader(e, t);
                a.addSubShader(o), o.addShaderPass('\n        #include "Lighting.glsl"; \n\n        attribute vec4 a_Position;\n        attribute vec3 a_Normal;\n        attribute vec2 a_Texcoord0;\n\n        uniform float u_Time;\n        uniform mat4 u_MvpMatrix;\n        uniform mat4 u_WorldMat;\n        \n        varying vec3 v_Normal;\n        varying vec2 uv; \n        varying vec2 offset;\n    \n        void main()\n        {\n            gl_Position = u_MvpMatrix * a_Position;\n            mat3 worldMat=mat3(u_WorldMat);\n            v_Normal = worldMat * a_Normal;\n            \n            uv = a_Texcoord0;\n            uv*=6.;\n            offset.x = sin( u_Time  * -3. + uv.y * 20. ) * 0.03 + sin( u_Time  * -2.7 + uv.y * 5. ) * 0.02;\n            offset.y = cos( u_Time  * -2. + uv.y * 20. ) * 0.03 + cos( u_Time  * -2.3 + uv.y * 5. ) * 0.02;\n\n            float speed = u_Time * 0.02;\n            float waver_x = sin(speed + uv.x * .5);\n            uv.x = uv.x + waver_x;\n            float waver_y = sin(speed + uv.y * .5);\n            uv.y = uv.y + waver_y;\n\n            gl_Position=remapGLPositionZ(gl_Position); \n        }', "\n        #ifdef FSHIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n\n        const vec3 rate = vec3(0.3, 0.6, 0.1);\n\n        uniform sampler2D u_AlbedoTexture;\n\n        varying vec3 v_Normal;\n        varying vec2 uv;\n        varying vec2 offset;\n\n        void main()\n        {\n            // texture\n            vec4 albedoTextureColor = vec4(1.0);\n            albedoTextureColor = texture2D(u_AlbedoTexture, uv+offset);     \n            gl_FragColor = albedoTextureColor;\n        }", n);
            }, DissolveMaterial.ALBEDOTEXTURE = Laya.Shader3D.propertyNameToID("u_AlbedoTexture"), 
            DissolveMaterial;
        }(Laya.BaseMaterial);
        n.default = a;
    }, {} ],
    54: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function StateCameraIdle() {
                StateCameraIdle.instance = this;
            }
            return StateCameraIdle.prototype.Enter = function(e) {
                console.log("StateCameraIdle"), e.camera.useOcclusionCulling = !0, e.camera.fieldOfView = 80, 
                e.camera.transform.position = e.idle_dpos, e.camera.transform.rotationEuler = e.idle_ro;
            }, StateCameraIdle.prototype.Execute = function(e) {}, StateCameraIdle.prototype.Exit = function(e) {}, 
            StateCameraIdle;
        }();
        n.StateCameraIdle = a, new a();
        var o = function() {
            function StateCameraNormalRunning() {
                StateCameraNormalRunning.instance = this;
            }
            return StateCameraNormalRunning.prototype.Enter = function(e) {
                console.log("StateCameraNormalRunning");
            }, StateCameraNormalRunning.prototype.Execute = function(e) {}, StateCameraNormalRunning.prototype.Exit = function(e) {}, 
            StateCameraNormalRunning;
        }();
        n.StateCameraNormalRunning = o, new o();
        var i = function() {
            function StateCameraWin() {
                StateCameraWin.instance = this;
            }
            return StateCameraWin.prototype.Enter = function(e) {
                console.log("StateCameraWin"), e.init_pos = e.camera.transform.position.clone(), 
                e.init_ro = e.camera.transform.rotationEuler.clone(), e.moveToPint(e.end_dpos, e.end_rp, 800);
            }, StateCameraWin.prototype.Execute = function(e) {}, StateCameraWin.prototype.Exit = function(e) {}, 
            StateCameraWin;
        }();
        n.default = i, new i();
    }, {} ],
    55: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function cameraMoveScript() {
                var t = e.call(this) || this;
                return t._tempVector3 = new Laya.Vector3(), t.yawPitchRoll = new Laya.Vector3(), 
                t.resultRotation = new Laya.Quaternion(), t.tempRotationZ = new Laya.Quaternion(), 
                t.tempRotationX = new Laya.Quaternion(), t.tempRotationY = new Laya.Quaternion(), 
                t.rotaionSpeed = 6e-5, t.speed = 5, t.p_x = 0, t.p_y = 0, t.p_z = 0, t.r_x = 0, 
                t.r_y = 0, t._tempVector3 = new Laya.Vector3(), t.yawPitchRoll = new Laya.Vector3(), 
                t.resultRotation = new Laya.Quaternion(), t.tempRotationZ = new Laya.Quaternion(), 
                t.tempRotationX = new Laya.Quaternion(), t.tempRotationY = new Laya.Quaternion(), 
                t.rotaionSpeed = 6e-5, t;
            }
            return __extends(cameraMoveScript, e), cameraMoveScript.prototype.onAwake = function() {
                Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp), 
                this.camera = this.owner;
            }, cameraMoveScript.prototype.onDestroy = function() {
                Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
            }, cameraMoveScript.prototype.onUpdate = function() {
                var e = Laya.timer.delta;
                if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                    this.owner.scene;
                    Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-.001 * e * this.speed), 
                    Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(.001 * e * this.speed), 
                    Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-.001 * e * this.speed), Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(.001 * e * this.speed), 
                    Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(-.001 * e * this.speed), 
                    Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(.001 * e * this.speed);
                    var t = Laya.stage.mouseX - this.lastMouseX, n = Laya.stage.mouseY - this.lastMouseY, a = this.yawPitchRoll;
                    a.x -= t * this.rotaionSpeed * e, a.y -= n * this.rotaionSpeed * e, this.updateRotation();
                }
                this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY;
            }, cameraMoveScript.prototype.mouseDown = function(e) {
                this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll), this.lastMouseX = Laya.stage.mouseX, 
                this.lastMouseY = Laya.stage.mouseY, this.isMouseDown = !0;
            }, cameraMoveScript.prototype.mouseUp = function(e) {
                this.isMouseDown = !1;
            }, cameraMoveScript.prototype.moveForward = function(e) {
                this._tempVector3.x = 0, this._tempVector3.y = 0, this._tempVector3.z = e, this.camera.transform.translate(this._tempVector3);
            }, cameraMoveScript.prototype.moveRight = function(e) {
                this._tempVector3.y = 0, this._tempVector3.z = 0, this._tempVector3.x = e, this.camera.transform.translate(this._tempVector3);
            }, cameraMoveScript.prototype.moveVertical = function(e) {
                this._tempVector3.x = this._tempVector3.z = 0, this._tempVector3.y = e, this.camera.transform.translate(this._tempVector3, !1);
            }, cameraMoveScript.prototype.updateRotation = function() {
                Math.abs(this.yawPitchRoll.y) < 1.5 && (Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ), 
                this.tempRotationZ.cloneTo(this.camera.transform.localRotation), this.camera.transform.localRotation = this.camera.transform.localRotation);
            }, cameraMoveScript.prototype.moveToPint = function(e, t, n) {
                this.p_x = this.camera.transform.position.x, this.p_y = this.camera.transform.position.y, 
                this.p_z = this.camera.transform.position.z, this.r_x = this.camera.transform.rotationEuler.x, 
                this.r_y = this.camera.transform.rotationEuler.y, Math.abs(t.x - this.r_x) > 180 && (t.x = (t.x + 360) % 360, 
                this.r_x = (this.r_x + 360) % 360), Math.abs(t.y - this.r_y) > 180 && (t.y = (t.y + 360) % 360, 
                this.r_y = (this.r_y + 360) % 360), Laya.Tween.to(this, {
                    p_x: e.x,
                    p_y: e.y,
                    p_z: e.z,
                    r_x: t.x,
                    r_y: t.y,
                    update: new Laya.Handler(this, this.moving)
                }, 2e3, Laya.Ease.cubicInOut, new Laya.Handler(this, function() {
                    n && n();
                }));
            }, cameraMoveScript.prototype.moving = function() {
                var e = this.camera.transform.position;
                e.x = this.p_x, e.y = this.p_y, e.z = this.p_z, this.camera.transform.position = e;
                var t = this.camera.transform.rotationEuler;
                t.x = this.r_x, t.y = this.r_y, this.camera.transform.rotationEuler = t;
            }, cameraMoveScript;
        }(Laya.Script3D);
        n.default = a;
    }, {} ],
    56: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../yunwei/FSM"), o = e("./cameraFSM"), i = e("../yunwei/TransformUtil"), r = function(e) {
            function cameraScript() {
                var t = e.call(this) || this;
                return t.idle_dpos = i.default.unityToLayaPos(new Laya.Vector3(-.88, 4.03, -11.98)), 
                t.idle_ro = i.default.unityToLayaRE(new Laya.Vector3(20, 3.02, 0)), t.p_x = 0, t.p_y = 0, 
                t.p_z = 0, t.r_x = 0, t.r_y = 0, t.r_z = 0, t.mStateMachine = new a.StateMachine(t), 
                t;
            }
            return __extends(cameraScript, e), cameraScript.prototype.onEnable = function() {
                this.camera = this.owner;
            }, cameraScript.prototype.setAimObject = function(e) {
                this.aim_object = e;
            }, cameraScript.prototype.setCameraView = function(e, t, n, a) {
                this.idle_dpos = i.default.unityToLayaPos(e), this.idle_ro = i.default.unityToLayaRE(t), 
                this.end_dpos = i.default.unityToLayaPos(n), this.end_rp = i.default.unityToLayaRE(a), 
                this.mStateMachine.ChangeState(o.StateCameraIdle.instance);
            }, cameraScript.prototype.actWin = function() {
                this.mStateMachine.ChangeState(o.default.instance);
            }, cameraScript.prototype.onDisable = function() {}, cameraScript.prototype.onUpdate = function() {
                this.mStateMachine.Update();
            }, cameraScript.prototype.getFSM = function() {
                return this.mStateMachine;
            }, cameraScript.prototype.transformTo = function(e, t, n, a) {
                if (this.aim_object && !this.aim_object.destroyed) {
                    var o = this.camera.transform, i = new Laya.Vector3();
                    if (Laya.Vector3.add(this.aim_object.transform.position, e, i), Laya.Vector3.lerp(o.position, i, t, i), 
                    i.x = 0, o.position = i, n) {
                        var r = new Laya.Vector3();
                        Laya.Vector3.lerp(o.rotationEuler, n, a, r), o.rotationEuler = r;
                    }
                }
            }, cameraScript.prototype.transformTo2 = function(e, t, n) {
                if (this.aim_object && !this.aim_object.destroyed) {
                    var a = this.camera.transform, o = new Laya.Vector3();
                    if (Laya.Vector3.add(this.aim_object.transform.position, e, o), this.dpos_lerp_cur < 1 && (this.dpos_lerp_cur += t, 
                    Laya.Vector3.lerp(this.init_pos, o, this.dpos_lerp_cur, o), a.position = o, n)) {
                        var i = new Laya.Vector3();
                        Laya.Vector3.lerp(this.init_ro, n, this.dpos_lerp_cur, i), a.rotationEuler = i;
                    }
                }
            }, cameraScript.prototype.shake = function() {
                var e = this, t = this.camera.transform.position.clone(), n = Math.random() > .5 ? 1 : -1, a = (.02 + .02 * Math.random()) * n;
                Laya.Tween.to(this.camera.transform, {
                    localPositionX: t.x + a
                }, 100, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(e.camera.transform, {
                        localPositionX: t.x - a,
                        localPositionY: t.y + a
                    }, 100, null, Laya.Handler.create(e, function() {
                        Laya.Tween.to(e.camera.transform, {
                            localPositionY: t.y - a
                        }, 100, null);
                    }));
                }));
            }, cameraScript.prototype.moveToPint = function(e, t, n, a, o) {
                void 0 === a && (a = null), void 0 === o && (o = null);
                var i = this.camera.transform.position.clone();
                this.p_x = i.x, this.p_y = i.y, this.p_z = i.z;
                var r = this.camera.transform.rotationEuler.clone();
                this.r_x = r.x, this.r_y = r.y, this.r_z = r.z, t.y < 0 && (t.y = (t.y + 360) % 360), 
                Laya.Tween.to(this, {
                    p_x: e.x,
                    p_y: e.y,
                    p_z: e.z,
                    r_x: t.x,
                    r_y: t.y,
                    r_z: t.z,
                    update: new Laya.Handler(this, this.moving)
                }, n, a, Laya.Handler.create(this, function() {
                    o && o();
                }));
            }, cameraScript.prototype.moving = function() {
                var e = this.camera.transform.position.clone();
                e.x = this.p_x, e.y = this.p_y, e.z = this.p_z, this.camera.transform.position = e;
                var t = this.camera.transform.rotationEuler.clone();
                t.x = this.r_x, t.y = this.r_y, t.z = this.r_z, this.camera.transform.rotationEuler = t;
            }, cameraScript;
        }(Laya.Script);
        n.default = r;
    }, {
        "../yunwei/FSM": 97,
        "../yunwei/TransformUtil": 101,
        "./cameraFSM": 54
    } ],
    57: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameFSM"), o = e("../yunwei/FSM"), i = e("../syscamera/cameraMoveScript"), r = e("../script/TotalTypeManager"), s = e("../sysloader/LoaderManeger"), l = e("../sysloader/SceneManager"), c = e("../syscamera/cameraScript"), d = e("../yunwei/CannonUtils"), u = e("../script/GameManager"), h = e("../sysfactory/UserMaker"), f = e("../sysfactory/MapMaker"), p = e("../sysfactory/FCore"), y = e("../yunwei/FPSUtil"), g = e("./GameData"), m = e("./MCore"), _ = e("./GameCore1"), v = e("./GameCore2"), C = e("./GameCore3"), S = e("./GameCore4"), M = e("../sysscene/EffectScript"), w = function() {
            function GameController() {
                this.physicsRate = 1, this.user_list = [], this.effectList = [], GameController.instance = this, 
                this.mStateMachine = new o.StateMachine(this), this.eventDispatcher = new Laya.EventDispatcher();
            }
            return GameController.prototype.startGame = function(e) {
                var t = this;
                this.scene2D = e, this.gameCore.star(e), this.mStateMachine.ChangeState(a.FSMStateCtrlGaming.instance), 
                Laya.timer.loop(1, this, function() {
                    y.default.pushFPS(), t.updatePhysics(), t.mStateMachine.Update(), t.gameCore.update();
                });
            }, GameController.prototype.gameOver = function() {
                this.mStateMachine.ChangeState(a.FSMStateCtrlEnd.instance), s.default.instance.stopMusic(), 
                u.default.instance.gameOver(this.gameCore.step_total + 1);
            }, GameController.prototype.loadLevel = function(e) {
                var t = this;
                void 0 === e && (e = null), this.mStateMachine.ChangeState(a.FSMStateCtrlLoading.instance);
                var n = l.default.getDramaTemp(r.default.getGrade());
                this.loadLevelByUrl(n.srid, n.sfid, function() {
                    switch (n.srid) {
                      case 30001:
                        t.gameCore = new _.default(t);
                        break;

                      case 30002:
                        t.gameCore = new v.default(t);
                        break;

                      case 30003:
                        t.gameCore = new C.default(t);
                        break;

                      case 30004:
                        t.gameCore = new S.default(t);
                    }
                    e && e();
                });
            }, GameController.prototype.loadAllCar = function(e) {
                var t = this;
                void 0 === e && (e = null), this.createAllUser(function() {
                    t.gameCore.showNewCar(function() {
                        e && e();
                    });
                });
            }, GameController.prototype.loadNewCar = function(e, t) {
                var n = this;
                void 0 === e && (e = null), void 0 === t && (t = null), this.user && (this.user.removeSelf(), 
                this.user.destroy(), this.user = null), this.createUser(e, e + 1, function(e) {
                    var a = n.gameCore.step_index;
                    n.user = e, n.user_list[a] = e, n.gameCore.showNewCar(function() {
                        t && t();
                    });
                });
            }, GameController.prototype.loadLevelByUrl = function(e, t, n) {
                var o = this;
                void 0 === n && (n = null);
                var d, u = r.default.getGrade(), h = l.default.getDramaTemp(u), p = l.default.getSceneTemp(h.srid);
                30002 == p.srid ? d = s.default.instance.getCompleteResByID(2e3) : 30004 == p.srid && (d = s.default.instance.getCompleteResByID(2001)), 
                l.default.loadLevelScene(t, d, Laya.Handler.create(this, function(t, r) {
                    o.scene3D = t, o.main_camera = r, o.main_camera_script = r.addComponent(c.default), 
                    o.main_camera_script.setCameraView(p.bcp, p.bcr, p.ecp, p.ecr), r.addComponent(i.default), 
                    o.initEngine(), f.default.creatMap(e, o.scene3D, o.physicsWorld), o.mStateMachine.ChangeState(a.FSMStateCtrlReady.instance), 
                    n && n();
                }));
            }, GameController.prototype.createAllUser = function(e) {
                var t = this;
                void 0 === e && (e = null);
                for (var n = l.default.getDramaTemp(r.default.getGrade()), a = function(a) {
                    var i = n.car_list[a];
                    o.createUser(i, i + 1, function(n) {
                        t.user_list.push(n), 0 == a && e && e();
                    });
                }, o = this, i = 0; i < n.car_list.length; i++) a(i);
            }, GameController.prototype.createUser = function(e, t, n) {
                void 0 === n && (n = null);
                var a = l.default.getCarTemp(e), o = l.default.getCarForceTemp(e);
                h.default.createByUnity(this.scene3D, this.physicsWorld, e, t, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, function(e) {
                    e.carTemp = a, e.carForceData = o, n && n(e);
                }));
            }, GameController.prototype.showUser = function(e, t) {
                void 0 === t && (t = null);
                var n = this.scene3D.getChildByName("root").getChildByName("magnet"), a = n.transform.position = new Laya.Vector3(0, 6, 0);
                this.user = this.user_list[e], this.user.transform.position = a, this.scene3D.addChild(this.user), 
                Laya.Tween.to(n.transform, {
                    localPositionY: this.user.carTemp.height
                }, 800, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(n.transform, {
                        localPositionY: 10
                    }, 500, null, null, 100);
                })), Laya.Tween.to(this.user.transform, {
                    localPositionY: 0
                }, 800, null, Laya.Handler.create(this, function() {
                    t && t();
                }));
            }, GameController.prototype.initEngine = function() {
                this.physicsWorld || (this.physicsWorld = new CANNON.World(), this.physicsWorld.gravity.set(0, g.default.Gravity, 0), 
                this.physicsWorld.broadphase = new CANNON.SAPBroadphase(this.physicsWorld), this.physicsWorld.allowSleep = !0, 
                m.default.init(this.physicsWorld));
            }, GameController.prototype.updatePhysics = function() {
                if (this.physicsWorld) {
                    var e = .001 * Laya.timer.delta;
                    e = e > 2 / 60 ? 2 / 60 : e, this.physicsWorld.step(e * this.physicsRate), 
                    this.physicsWorld.bodies.forEach(function(e) {
                        var t = p.default.getBeLong(e);
                        if (t && !t.destroyed) if (1 == e.follow_sp) e.position = d.default.cannonVector(t.transform.position), 
                        e.quaternion = d.default.cannonQuat(t.transform.rotation); else if (1 == e.is_role) t.transform.position = d.default.layaVector(e.position), 
                        e.quaternion = d.default.cannonQuat(t.transform.rotation); else {
                            if (e.type == CANNON.Body.STATIC) return;
                            t.transform.position = d.default.layaVector(e.position), 
                            t.transform.rotation = d.default.layaQuat(e.quaternion);
                        }
                    });
                }
            }, GameController.prototype.initEffect = function(e, t, n) {
                var a = this;
                void 0 === t && (t = null), void 0 === n && (n = null);
                var o = this.checkExistEffect(e);
                if (o) {
                    o.particleSystem.play(), t && (o.transform.position = t), n && (o.transform.rotationEuler = n), 
                    this.scene3D.addChild(o);
                    var i = o.getComponent(M.default);
                    i && i.reset();
                } else {
                    var r = s.default.instance.getCompleteResByID(e);
                    Laya.loader.create(r, Laya.Handler.create(this, function() {
                        var o = Laya.ShuriKenParticle3D.instantiate(Laya.loader.getRes(r));
                        o.name = "effect", t && (o.transform.position = t), 
                        n && (o.transform.rotationEuler = n), 
                        o.addComponent(M.default).init(e), 
                        a.scene3D.addChild(o), 
                        a.effectList.push(o);
                    }));
                }
            }, GameController.prototype.checkExistEffect = function(e) {
                for (var t = 0; t < this.effectList.length; t++) {
                    var n = this.effectList[t], a = n.getComponent(M.default);
                    if (0 == a.enable && a.mrid == e) return n;
                }
                return null;
            }, GameController.prototype.clearAll = function() {
                for (this.gameCore.clearAll(), Laya.timer.clearAll(this), Laya.Tween.clearAll(this), 
                this.physicsWorld.clearForces(); this.physicsWorld.bodies.length > 0; ) {
                    var e = this.physicsWorld.bodies[0];
                    this.physicsWorld.remove(e);
                }
                this.scene3D.destroy(), this.scene3D = null, this.user_list = [], Laya.Resource.destroyUnusedResources();
            }, GameController;
        }();
        n.default = w;
    }, {
        "../script/GameManager": 48,
        "../script/TotalTypeManager": 52,
        "../syscamera/cameraMoveScript": 55,
        "../syscamera/cameraScript": 56,
        "../sysfactory/FCore": 66,
        "../sysfactory/MapMaker": 69,
        "../sysfactory/UserMaker": 70,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../sysscene/EffectScript": 84,
        "../yunwei/CannonUtils": 94,
        "../yunwei/FPSUtil": 96,
        "../yunwei/FSM": 97,
        "./GameCore1": 59,
        "./GameCore2": 60,
        "./GameCore3": 61,
        "./GameCore4": 62,
        "./GameData": 63,
        "./GameFSM": 64,
        "./MCore": 65
    } ],
    58: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../script/TotalTypeManager"), o = e("../sysloader/SceneManager"), i = e("../yunwei/blendshape/BlendShapeScriptv2"), r = e("../yunwei/RandomUtil"), s = e("../yunwei/MeshUtil"), l = e("../sysfactory/FCore"), c = e("../yunwei/CannonUtils"), d = e("../syswall/WallScript"), u = e("../sysloader/LoaderManeger"), h = function() {
            function GameCore(e) {
                this.step_index = 0, this.step_total = 0, this.off_x = 0, this.off_y = 0, this.press_h = !1, 
                this.press_v = !1, this.min_x = 0, this.min_y = 0, this.h_speed_normal = 0, this.h_speed_press = 0, 
                this.v_speed_normal = 0, this.v_speed_press = 0, this.width = 0, this.height = 0, 
                this.pressSoundEnable = !0, this.car_force_data = {}, this.gameController = e, this.scene3D = this.gameController.scene3D, 
                this.main_camera = this.gameController.main_camera, this.main_camera_script = this.gameController.main_camera_script, 
                this.physicsWorld = this.gameController.physicsWorld, this.drama = o.default.getDramaTemp(a.default.getGrade()), 
                this.step_index = 0, this.step_total = this.drama.car_list.length - 1, this.preLoading();
            }
            return GameCore.prototype.star = function(e) {
                this.scene2D = e, this.scene2D.on(Laya.Event.MOUSE_DOWN, this, this.onDown), this.scene2D.on(Laya.Event.MOUSE_UP, this, this.onUp), 
                this.setWall(), this.setCollideBody(), this.eventUpdataeBar(), this.loading();
            }, GameCore.prototype.nextStep = function() {
                var e = this;
                this.onUp(), this.scene2D.off(Laya.Event.MOUSE_DOWN, this, this.onDown), this.scene2D.off(Laya.Event.MOUSE_UP, this, this.onUp), 
                this.checkProgress(function(t) {
                    t ? (e.destoryOldCar(!1), e.gameOver()) : e.destoryOldCar(!0, function() {
                        e.showNewCar(function() {
                            e.scene2D.on(Laya.Event.MOUSE_DOWN, e, e.onDown), e.scene2D.on(Laya.Event.MOUSE_UP, e, e.onUp);
                        });
                    });
                });
            }, GameCore.prototype.checkProgress = function(e) {
                void 0 === e && (e = null), this.step_index++, this.step_index > this.step_total ? e(!0) : e(!1);
            }, GameCore.prototype.gameOver = function() {}, GameCore.prototype.destoryOldCar = function(e, t) {
                void 0 === t && (t = null);
            }, GameCore.prototype.showNewCar = function(e) {
                var t = this;
                void 0 === e && (e = null), this.gameController.showUser(this.step_index, function() {
                    t.getCarForceData(t.gameController.user), t.eventUpdataeBar(), e && e();
                }), u.default.instance.playSound(5004);
            }, GameCore.prototype.onDown = function() {}, GameCore.prototype.onUp = function() {}, 
            GameCore.prototype.onPress = function() {}, GameCore.prototype.exeBlendShapes = function(e, t) {
                this.pressSoundEnable && (this.pressSoundEnable = !1, u.default.instance.playSound(5005));
                for (var n = 0; n < this.gameController.user.numChildren; n++) {
                    var a, o = this.gameController.user.getChildAt(n), d = o.getComponent(i.default);
                    if (d) {
                        if (d.mBlendShape3D.setWByXY(e, t), a = this.car_force_data[d.sp3.name]) {
                            var h = a.tri.split(">"), f = Number(h[1]);
                            f *= r.default.getRealInRandom(1.3, .5), h = h[0].split("_");
                            var p = Number(h[1]);
                            if (d.mBlendShape3D.w_list[p] > f) if (o.name.toLowerCase().indexOf("window") > -1 && 1 == o.active) {
                                var y = o.getChildAt(0);
                                y && (this.gameController.initEffect(4001, y.transform.position, y.transform.rotationEuler), 
                                this.gameController.initEffect(4001, y.transform.position, y.transform.rotationEuler)), 
                                o.active = !1;
                            } else {
                                var g = d.sp3.meshFilter.sharedMesh;
                                s.default.RecalculateBoundBox(g, 8);
                                var m = new Laya.Vector3();
                                Laya.Vector3.subtract(g.bounds.getCenter(), d.sp3.transform.position, m);
                                var _ = new Laya.Sprite3D();
                                this.scene3D.addChild(_);
                                var v = g.bounds.getCenter().clone();
                                v.x = -v.x, v.z = -v.z, _.transform.position = v, _.addChild(d.sp3), d.sp3.transform.localPosition = new Laya.Vector3(m.x, -m.y, m.z);
                                var C = l.default.bodyBoxCreate(_, this.physicsWorld, c.default.cannonVector(g.bounds.getExtent()), {
                                    isStatic: !1,
                                    mass: 1
                                }, d.sp3.name), S = a.lim_max, M = a.lim_min, w = new CANNON.Vec3(r.default.getRealInRandom(S.x, M.x), r.default.getRealInRandom(S.y, M.y), r.default.getRealInRandom(S.z, M.z)), b = a.lpos_max, L = a.lpos_min;
                                T = (T = new CANNON.Vec3(r.default.getRealInRandom(b.x, L.x), r.default.getRealInRandom(b.y, L.y), r.default.getRealInRandom(b.z, L.z))).vadd(C.position), 
                                C.applyImpulse(w, T), C.angularDamping = .6, C.linearDamping = .2, C.collisionFilterGroup = 0, 
                                d.sp3._destroyComponent(d);
                            }
                        }
                    } else if (a = this.car_force_data[o.name]) {
                        h = a.tri.split("<"), f = Number(h[1]);
                        f *= r.default.getRealInRandom(1.3, .5), h = h[0].split("_");
                        p = Number(h[1]);
                        var x = o.transform.position;
                        if (3 == p && (Math.abs(x.x - e) < f || Math.abs(x.x + e) < f) || 1 == p && Math.abs(x.y - t) < f) if (o.name.toLowerCase().indexOf("window") > -1 && 1 == o.active) {
                            var I = o.getChildAt(0);
                            I && (this.gameController.initEffect(4001, I.transform.position, I.transform.rotationEuler), 
                            this.gameController.initEffect(4001, I.transform.position, I.transform.rotationEuler)), 
                            o.active = !1;
                        } else {
                            _ = new Laya.Sprite3D();
                            this.scene3D.addChild(_), _.transform.position = x.clone(), _.addChild(o), o.transform.localPosition = new Laya.Vector3(0, 0, 0);
                            var T;
                            C = l.default.bodyBoxCreate(_, this.physicsWorld, new CANNON.Vec3(.2, .2, .2), {
                                isStatic: !1,
                                mass: 1
                            }, o.name), S = a.lim_max, M = a.lim_min, w = new CANNON.Vec3(r.default.getRealInRandom(S.x, M.x), r.default.getRealInRandom(S.y, M.y), r.default.getRealInRandom(S.z, M.z)), 
                            b = a.lpos_max, L = a.lpos_min;
                            T = (T = new CANNON.Vec3(r.default.getRealInRandom(b.x, L.x), r.default.getRealInRandom(b.y, L.y), r.default.getRealInRandom(b.z, L.z))).vadd(C.position), 
                            C.applyImpulse(w, T), C.angularDamping = .6, C.linearDamping = .2, C.collisionFilterGroup = 0;
                        }
                    }
                }
            }, GameCore.prototype.eventUpdataeBar = function() {}, GameCore.prototype.getCarForceData = function(e) {
                this.car_force_data = e.carForceData;
                var t = e.carTemp;
                this.width = t.width, this.height = t.height, this.off_x = this.width / 2, this.off_y = this.height;
            }, GameCore.prototype.setWall = function() {
                var e = this.scene3D.getChildByName("root").getChildByName("pull_left"), t = this.scene3D.getChildByName("root").getChildByName("pull_right"), n = this.scene3D.getChildByName("root").getChildByName("pull_top");
                e && (this.ls = e.addComponent(d.default)), t && (this.rs = t.addComponent(d.default)), 
                n && (this.ts = n.addComponent(d.default)), this.ls && this.ls.init(this, this.scene3D, this.physicsWorld, this.main_camera, "left", this.h_speed_normal, this.h_speed_press), 
                this.rs && this.rs.init(this, this.scene3D, this.physicsWorld, this.main_camera, "right", this.h_speed_normal, this.h_speed_press), 
                this.ts && this.ts.init(this, this.scene3D, this.physicsWorld, this.main_camera, "top", this.v_speed_normal, this.v_speed_press);
            }, GameCore.prototype.setCollideBody = function() {}, GameCore.prototype.preLoading = function() {}, 
            GameCore.prototype.loading = function() {}, GameCore.prototype.nextStepAct = function() {}, 
            GameCore.prototype.update = function() {}, GameCore.prototype.clearAll = function() {
                Laya.timer.clearAll(this), Laya.Tween.clearAll(this), this.scene2D.offAll(Laya.Event.MOUSE_DOWN), 
                this.scene2D.offAll(Laya.Event.MOUSE_UP);
            }, GameCore;
        }();
        n.default = h;
    }, {
        "../script/TotalTypeManager": 52,
        "../sysfactory/FCore": 66,
        "../sysloader/LoaderManeger": 72,
        "../sysloader/SceneManager": 75,
        "../syswall/WallScript": 92,
        "../yunwei/CannonUtils": 94,
        "../yunwei/MeshUtil": 98,
        "../yunwei/RandomUtil": 99,
        "../yunwei/blendshape/BlendShapeScriptv2": 104
    } ],
    59: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameCore"), o = e("../yunwei/blendshape/BlendShapeScriptv2"), i = e("../sysfactory/FCore"), r = e("../yunwei/CannonUtils"), s = e("../sysloader/LoaderManeger"), l = e("./MCore"), c = e("../script/TotalTypeManager"), d = function(e) {
            function GameCore1() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.min_x = 2.35, t.min_y = .6, t;
            }
            return __extends(GameCore1, e), GameCore1.prototype.preLoading = function() {
                this.scene3D.getChildByName("root").getChildByName("truck").transform.position = new Laya.Vector3(0, -6.22, 10), 
                this.h_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), this.v_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), 
                this.h_speed_press = (1 + .1 * c.default.getPowLevel()) / 1, this.v_speed_press = (1 + .1 * c.default.getPowLevel()) / 1;
            }, GameCore1.prototype.loading = function() {
                var e = this.scene3D.getChildByName("root").getChildByName("truck");
                Laya.Tween.to(e.transform, {
                    localPositionZ: -2.28
                }, 1e3), 
                s.default.instance.playMusic(5033);
            }, GameCore1.prototype.onDown = function() {
                this.ls.actRunning(), 
                this.rs.actRunning(),
                this.ts.actRunning(), 
                this.press_v = !1, 
                this.press_h = !1, this.pressSoundEnable = !0, 
                Laya.timer.frameLoop(1, this, this.onPress), 
                s.default.instance.playSound(5001);
            }, GameCore1.prototype.onUp = function() {
                this.ls.actExit(), this.rs.actExit(), this.ts.actExit(), Laya.timer.clear(this, this.onPress);
            }, GameCore1.prototype.onPress = function() {
                var e = this.ls.sp.transform.position.clone().x, t = this.ts.sp.transform.position.clone().y;
                e < this.off_x && (this.off_x = e, this.ls.actPressing(), this.rs.actPressing(), 
                this.exeBlendShapes(this.off_x, this.off_y), 0 == this.press_h && this.main_camera_script.shake(), 
                this.press_h = !0), t < this.min_y && (t = this.min_y), t < this.off_y && (this.off_y = t, 
                this.ts.actPressing(), this.exeBlendShapes(this.off_x, this.off_y), 0 == this.press_v && this.main_camera_script.shake(), 
                this.press_v = !0), e <= this.min_x && t <= this.min_y ? this.nextStep() : this.eventUpdataeBar();
            }, GameCore1.prototype.gameOver = function() {
                var e = this;
                this.main_camera_script.actWin();
                var t = this.scene3D.getChildByName("root").getChildByName("truck");
                Laya.Tween.to(t.transform, {
                    localPositionZ: -20
                }, 3e3, null, null, 1500), Laya.timer.once(1500, this, function() {
                    !function() {
                        for (var n = function(n) {
                            var a = e.gameController.user_list[n].getChildAt(0), o = i.default.getCABody(a);
                            o.sleep(), Laya.timer.callLater(e, function() {
                                e.physicsWorld.removeBody(o);
                                var n = a.transform.position.clone();
                                t.addChild(a), a.transform.position = n;
                            });
                        }, a = 0; a < e.gameController.user_list.length; a++) n(a);
                    }();
                }), Laya.timer.once(3e3, this, function() {
                    e.gameController.gameOver();
                });
            }, GameCore1.prototype.destoryOldCar = function(e, t) {
                var n = this;
                void 0 === t && (t = null);
                var a = this.gameController.user.getChildAt(0), l = a.getComponent(o.default),
                c = l.sp3.meshFilter.sharedMesh.bounds.getExtent();
                c.x *= .45, c.z *= .4;
                i.default.bodyBoxCreate(a, this.physicsWorld, r.default.cannonVector(c), {
                    isStatic: !1,
                    mass: 10,
                    collisionFilter: {
                        group: i.default.player_group,
                        mask: i.default.player_mask
                    }
                }, l.sp3.name);
                var d = this.scene3D.getChildByName("root").getChildByName("platform_left"), u = this.scene3D.getChildByName("root").getChildByName("platform_right");
                Laya.Tween.to(d.transform, {
                    localRotationEulerZ: 60
                }, 300, null, Laya.Handler.create(this, function() {
                    e && Laya.Tween.to(d.transform, {
                        localRotationEulerZ: 0
                    }, 500, null, null, 500);
                })),
                Laya.Tween.to(u.transform, {
                    localRotationEulerZ: -60
                }, 300, null, Laya.Handler.create(this, function() {
                    e && (Laya.Tween.to(u.transform, {
                        localRotationEulerZ: 0
                    }, 500, null, Laya.Handler.create(n, function() {
                        t && t();
                    }), 500), s.default.instance.playSound(5027));
                })), s.default.instance.playSound(5028);
            }, GameCore1.prototype.setCollideBody = function() {
                var e = [], t = this.scene3D.getChildByName("root").getChildByName("pull_left").getChildByName("col"), n = this.scene3D.getChildByName("root").getChildByName("pull_right").getChildByName("col"), a = this.scene3D.getChildByName("root").getChildByName("pull_top").getChildByName("col"), o = this.scene3D.getChildByName("root").getChildByName("truck").getChildByName("col_shovel");
                e.push(t), e.push(n), e.push(a);
                for (var r = 0; r < o.numChildren; r++) {
                    var s = o.getChildAt(r);
                    e.push(s);
                }
                for (r = 0; r < e.length; r++) {
                    s = e[r];
                    var c = i.default.bodyCreateByPC(s, this.physicsWorld, {
                        isStatic: !1,
                        collisionFilter: {
                            group: i.default.barrier_group,
                            mask: i.default.barrier_mask
                        }
                    }, "barrier");
                    s.material = l.default.barrier_mat, c.allowSleep = !1, c.follow_sp = !0;
                }
            }, GameCore1.prototype.update = function() {
                this.ls && 0 != this.ls.speed && this.setGear(this.ls.speed);
            }, GameCore1.prototype.setGear = function(e) {
                var t = this.scene3D.getChildByName("root").getChildByName("gear4"), n = this.scene3D.getChildByName("root").getChildByName("gear1b 1"), a = this.scene3D.getChildByName("root").getChildByName("gear3b"), o = this.scene3D.getChildByName("root").getChildByName("gear4 1"), i = this.scene3D.getChildByName("root").getChildByName("gear1"), r = this.scene3D.getChildByName("root").getChildByName("gear1b");
                t.transform.rotate(new Laya.Vector3(0, e, 0), !0, !1), n.transform.rotate(new Laya.Vector3(0, 2 * e, 0), !0, !1), 
                a.transform.rotate(new Laya.Vector3(0, 0, e), !0, !1), o.transform.rotate(new Laya.Vector3(0, 1.2 * e, 0), !0, !1), 
                i.transform.rotate(new Laya.Vector3(0, 2.2 * e, 0), !0, !1), r.transform.rotate(new Laya.Vector3(0, 2.2 * e, 0), !0, !1);
            }, GameCore1.prototype.eventUpdataeBar = function() {
                var e = 2.95 - this.min_x, t = (this.off_x - e) / (this.width / 2 - e), n = (this.off_y - this.min_y) / (this.height - this.min_y);
                t < .1 && (t = 0), n < .1 && (n = 0), this.gameController.eventDispatcher.event("updateBar", [ this.step_index + 1, this.step_total + 1, t, n ]);
            }, GameCore1;
        }(a.default);
        n.default = d;
    }, {
        "../script/TotalTypeManager": 52,
        "../sysfactory/FCore": 66,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/CannonUtils": 94,
        "../yunwei/blendshape/BlendShapeScriptv2": 104,
        "./GameCore": 58,
        "./MCore": 65
    } ],
    60: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameCore"), o = e("../yunwei/blendshape/BlendShapeScriptv2"), i = e("../sysfactory/FCore"), r = e("../yunwei/CannonUtils"), s = e("../sysloader/LoaderManeger"), l = e("./MCore"), c = e("../script/TotalTypeManager"), d = e("../yunwei/RandomUtil"), u = e("../sysscene/Sheep"), h = function(e) {
            function GameCore2() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.min_x = 4.5, t.min_y = .6, t.r_push_x = 0, t.thunder_interval = 7e3, t.time = 0, 
                t.updateEnable = !0, t;
            }
            return __extends(GameCore2, e), GameCore2.prototype.preLoading = function() {
                this.h_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), this.v_speed_normal = 2 * (1 + .1 * c.default.getSpeedLevel()), 
                this.h_speed_press = (2 + .1 * c.default.getPowLevel()) / 1, this.v_speed_press = (1 + .1 * c.default.getPowLevel()) / 1, 
                this.loadSheep();
            }, GameCore2.prototype.loading = function() {
                this.r_push_x = -this.width / 2, this.ori_c = this.scene3D._children[0].transform.position.clone(), 
                this.ori_s = this.scene3D._children[2].transform.position.clone(), s.default.instance.playSound(5017);
            }, GameCore2.prototype.loadSheep = function() {
                var e = this, t = s.default.instance.getCompleteResByID(3002);
                Laya.loader.create(t, Laya.Handler.create(this, function() {
                    for (var n = Laya.loader.getRes(t), a = 5, o = 0; o < 4; o++) {
                        var i = Laya.Sprite3D.instantiate(n);
                        i.transform.scale = new Laya.Vector3(2, 2, 2), i.transform.position = new Laya.Vector3(a, 0, d.default.getRealInRandom(6, 4) + 4), 
                        i.transform.rotationEuler = new Laya.Vector3(0, d.default.getRealInRandom(240, 120), 0), 
                        e.scene3D.getChildByName("root").addChild(i), i.addComponent(u.default), a -= 2 * Math.random() + 2;
                    }
                }));
            }, GameCore2.prototype.nextStep = function() {
                var e = this;
                this.onUp(), 
                this.scene2D.off(Laya.Event.MOUSE_DOWN, this, this.onDown), 
                this.scene2D.off(Laya.Event.MOUSE_UP, this, this.onUp), 
                this.checkProgress(function(t) {
                    t ? (e.destoryOldCar(!1), e.gameOver()) : e.destoryOldCar(!0, function() {
                        e.scene3D._children[0].transform.position = e.ori_c, 
                        e.scene3D._children[2].transform.position = e.ori_s, 
                        e.showNewCar(function() {
                            e.r_push_x = -e.width / 2, e.scene2D.on(Laya.Event.MOUSE_DOWN, e, e.onDown), e.scene2D.on(Laya.Event.MOUSE_UP, e, e.onUp);
                        });
                    });
                });
            }, GameCore2.prototype.onDown = function() {
                this.rs.actRunning(), this.ts.actRunning(), this.press_v = !1, this.press_h = !1, 
                this.pressSoundEnable = !0, Laya.timer.frameLoop(1, this, this.onPress), s.default.instance.playSound(5001);
            }, GameCore2.prototype.onUp = function() {
                this.rs.actExit(), this.ts.actExit(), Laya.timer.clear(this, this.onPress);
            }, GameCore2.prototype.onPress = function() {
                var e = this.ls.sp.transform.localPosition.clone().x, t = this.rs.sp.transform.localPosition.clone().x, n = this.ts.sp.transform.position.clone().y;
                if (t > this.r_push_x) if (this.r_push_x = t, this.rs.actPressing(), e - t > this.width) {
                    var a = this.rs.speed * Laya.timer.delta / 1e3;
                    this.scene3D._children[0].transform.translate(new Laya.Vector3(-a, 0, 0), !1), this.scene3D._children[2].transform.translate(new Laya.Vector3(-a, 0, 0), !1);
                } else {
                    a = this.rs.speed * Laya.timer.delta / 1e3;
                    this.scene3D._children[0].transform.translate(new Laya.Vector3(.5 * -a, 0, 0), !1), 
                    this.scene3D._children[2].transform.translate(new Laya.Vector3(.5 * -a, 0, 0), !1), 
                    this.off_x = (e - t) / 2, this.exeBlendShapes(this.off_x, this.off_y);
                }
                n < this.min_y && (n = this.min_y), n < this.off_y && (this.off_y = n, this.ts.actPressing(), 
                this.exeBlendShapes(this.off_x, this.off_y)), e - t <= this.ls.init_pos.x - this.rs.init_pos.x - this.min_x && n <= this.min_y ? this.nextStep() : this.eventUpdataeBar();
            }, GameCore2.prototype.gameOver = function() {
                var e = this;
                this.main_camera_script.actWin(), Laya.timer.once(3e3, this, function() {
                    s.default.instance.stopSound(5017), e.updateEnable = !1, e.gameController.gameOver();
                });
            }, GameCore2.prototype.destoryOldCar = function(e, t) {
                var n = this;
                void 0 === t && (t = null);
                this.scene3D._children[2].transform.position;
                this.scene3D._children[2].addChild(this.gameController.user), this.gameController.user.transform.position = new Laya.Vector3(0, 0, 0);
                var a = this.gameController.user.getChildAt(0), l = a.getComponent(o.default), c = l.sp3.meshFilter.sharedMesh.bounds.getExtent();
                c.x *= .1, c.z *= .1;
                i.default.bodyBoxCreate(a, this.physicsWorld, r.default.cannonVector(c), {
                    isStatic: !1,
                    mass: 10,
                    collisionFilter: {
                        group: i.default.player_group,
                        mask: i.default.player_mask
                    }
                }, l.sp3.name);
                var d = this.scene3D.getChildByName("root").getChildByName("platform");
                Laya.Tween.to(d.transform, {
                    localRotationEulerX: -90
                }, 400, null, Laya.Handler.create(this, function() {
                    e && (Laya.Tween.to(d.transform, {
                        localRotationEulerX: 0
                    }, 500, null, Laya.Handler.create(n, function() {
                        t && t();
                    }), 600), s.default.instance.playSound(5027));
                })), s.default.instance.playSound(5028);
            }, GameCore2.prototype.setCollideBody = function() {
                var e = [], t = this.scene3D.getChildByName("root").getChildByName("pull_left").getChildByName("col"), n = this.scene3D.getChildByName("root").getChildByName("pull_right").getChildByName("col"), a = this.scene3D.getChildByName("root").getChildByName("pull_top").getChildByName("col");
                e.push(t), e.push(n), e.push(a);
                for (var o = 0; o < e.length; o++) {
                    var r = e[o], s = i.default.bodyCreateByPC(r, this.physicsWorld, {
                        isStatic: !1,
                        collisionFilter: {
                            group: i.default.barrier_group,
                            mask: i.default.barrier_mask
                        }
                    }, "barrier");
                    r.material = l.default.barrier_mat, s.allowSleep = !1, s.follow_sp = !0;
                }
            }, GameCore2.prototype.eventUpdataeBar = function() {
                var e = (5.9 - this.min_x) / 2, t = (this.off_x - e) / (this.width / 2 - e), n = (this.off_y - this.min_y) / (this.height - this.min_y);
                t < 0 && (t = 0), n < 0 && (n = 0), this.gameController.eventDispatcher.event("updateBar", [ this.step_index + 1, this.step_total + 1, t, n ]);
            }, GameCore2.prototype.update = function() {
                this.updateEnable && (this.time += Laya.timer.delta, this.time > this.thunder_interval && (s.default.instance.playSound(5017), 
                this.time = 0));
            }, GameCore2;
        }(a.default);
        n.default = h;
    }, {
        "../script/TotalTypeManager": 52,
        "../sysfactory/FCore": 66,
        "../sysloader/LoaderManeger": 72,
        "../sysscene/Sheep": 85,
        "../yunwei/CannonUtils": 94,
        "../yunwei/RandomUtil": 99,
        "../yunwei/blendshape/BlendShapeScriptv2": 104,
        "./GameCore": 58,
        "./MCore": 65
    } ],
    61: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameCore"), o = e("../yunwei/blendshape/BlendShapeScriptv2"), i = e("../sysfactory/FCore"), r = e("../yunwei/CannonUtils"), s = e("../sysloader/LoaderManeger"), l = e("./MCore"), c = e("../script/TotalTypeManager"), d = e("../shader/CustomMaterial"), u = function(e) {
            function GameCore3() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.min_x = 2.35, t.min_y = .6, t.fire_enable = !0, t;
            }
            return __extends(GameCore3, e), GameCore3.prototype.preLoading = function() {
                d.default.initShader(), this.h_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), 
                this.v_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), this.h_speed_press = (1 + .1 * c.default.getPowLevel()) / 1, 
                this.v_speed_press = (1 + .1 * c.default.getPowLevel()) / 1;
                var e = this.scene3D.getChildByName("root").getChildByName("fire"), t = e.meshRenderer.material.texture, n = this.scene3D.getChildByName("root").addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(20, 20))), a = new d.default();
                n.transform.position = new Laya.Vector3(0, -5, 0), n.meshRenderer.sharedMaterial = a, 
                a.albedoTexture = t, e.active = !1;
            }, GameCore3.prototype.loading = function() {}, GameCore3.prototype.onDown = function() {
                this.ls.actRunning(), this.rs.actRunning(), this.ts.actRunning(), this.press_v = !1, 
                this.press_h = !1, this.pressSoundEnable = !0, Laya.timer.frameLoop(1, this, this.onPress), 
                s.default.instance.playSound(5001);
            }, GameCore3.prototype.onUp = function() {
                this.ls.actExit(), this.rs.actExit(), this.ts.actExit(), Laya.timer.clear(this, this.onPress);
            }, GameCore3.prototype.onPress = function() {
                var e = this.ls.sp.transform.position.clone().x, t = this.ts.sp.transform.position.clone().y;
                e < this.off_x && (this.off_x = e, this.ls.actPressing(), this.rs.actPressing(), 
                this.exeBlendShapes(this.off_x, this.off_y), 0 == this.press_h && this.main_camera_script.shake(), 
                this.press_h = !0), t < this.min_y && (t = this.min_y), t < this.off_y && (this.off_y = t, 
                this.ts.actPressing(), this.exeBlendShapes(this.off_x, this.off_y), 0 == this.press_v && this.main_camera_script.shake(), 
                this.press_v = !0), e <= this.min_x && t <= this.min_y ? this.nextStep() : this.eventUpdataeBar();
            }, GameCore3.prototype.gameOver = function() {
                var e = this;
                this.main_camera_script.actWin(), Laya.timer.once(3e3, this, function() {
                    e.gameController.gameOver();
                });
            }, GameCore3.prototype.destoryOldCar = function(e, t) {
                var n = this;
                void 0 === t && (t = null);
                var a = this.temp = this.gameController.user.getChildAt(0), l = a.getComponent(o.default), c = l.sp3.meshFilter.sharedMesh.bounds.getExtent();
                c.x *= .1, c.z *= .1;
                i.default.bodyBoxCreate(a, this.physicsWorld, r.default.cannonVector(c), {
                    isStatic: !1,
                    mass: 10,
                    collisionFilter: {
                        group: i.default.player_group,
                        mask: i.default.player_mask
                    }
                }, l.sp3.name);
                for (var d = this.scene3D.getChildByName("root").getChildByName("platform"), u = function(a) {
                    var o = d.getChildAt(a), i = o.transform.localRotationEulerY;
                    Laya.Tween.to(o.transform, {
                        localRotationEulerY: 180 - -i + 60
                    }, 500, null, Laya.Handler.create(h, function() {
                        e && Laya.Tween.to(o.transform, {
                            localRotationEulerY: i
                        }, 500, null, Laya.Handler.create(n, function() {
                            0 == a && (s.default.instance.playSound(5027), t && t());
                        }), 1e3);
                    }));
                }, h = this, f = 0; f < d.numChildren; f++) u(f);
                s.default.instance.playSound(5028);
            }, GameCore3.prototype.setCollideBody = function() {
                var e = [], t = this.scene3D.getChildByName("root").getChildByName("pull_left").getChildByName("col"), n = this.scene3D.getChildByName("root").getChildByName("pull_right").getChildByName("col"), a = this.scene3D.getChildByName("root").getChildByName("pull_top").getChildByName("col");
                e.push(t), e.push(n), e.push(a);
                for (var o = 0; o < e.length; o++) {
                    var r = e[o], s = i.default.bodyCreateByPC(r, this.physicsWorld, {
                        isStatic: !1,
                        collisionFilter: {
                            group: i.default.barrier_group,
                            mask: i.default.barrier_mask
                        }
                    }, "barrier");
                    r.material = l.default.barrier_mat, s.allowSleep = !1, s.follow_sp = !0;
                }
            }, GameCore3.prototype.eventUpdataeBar = function() {
                var e = 2.95 - this.min_x, t = (this.off_x - e) / (this.width / 2 - e), n = (this.off_y - this.min_y) / (this.height - this.min_y);
                t < .1 && (t = 0), n < .1 && (n = 0), this.gameController.eventDispatcher.event("updateBar", [ this.step_index + 1, this.step_total + 1, t, n ]);
            }, GameCore3.prototype.update = function() {
                var e = this;
                if (this.temp) {
                    var t = this.temp.transform.position.clone(), n = i.default.getCABody(this.temp);
                    t.y < -4.85 && this.fire_enable && (n.velocity = new CANNON.Vec3(0, 0, 0), n.angularVelocity = new CANNON.Vec3(0, 0, 0), 
                    this.fire_enable = !1, this.gameController.initEffect(4002, this.temp.transform.position.clone())), 
                    t.y < -10 && (n.sleep(), Laya.timer.callLater(this, function() {
                        e.physicsWorld.removeBody(n), e.temp.removeSelf(), e.temp = null, e.fire_enable = !0;
                    }));
                }
            }, GameCore3;
        }(a.default);
        n.default = u;
    }, {
        "../script/TotalTypeManager": 52,
        "../shader/CustomMaterial": 53,
        "../sysfactory/FCore": 66,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/CannonUtils": 94,
        "../yunwei/blendshape/BlendShapeScriptv2": 104,
        "./GameCore": 58,
        "./MCore": 65
    } ],
    62: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./GameCore"), o = e("../yunwei/blendshape/BlendShapeScriptv2"), i = e("../sysfactory/FCore"), r = e("../yunwei/CannonUtils"), s = e("../sysloader/LoaderManeger"), l = e("./MCore"), c = e("../script/TotalTypeManager"), d = function(e) {
            function GameCore2() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.min_x = 4.5, t.l_push_x = 0, t;
            }
            return __extends(GameCore2, e), GameCore2.prototype.preLoading = function() {
                this.h_speed_normal = 3 * (1 + .1 * c.default.getSpeedLevel()), this.h_speed_press = (1 + .1 * c.default.getPowLevel()) / 1;
            }, GameCore2.prototype.loading = function() {
                this.l_push_x = this.width / 2, this.ori_c = this.scene3D._children[0].transform.position.clone(), 
                this.ori_s = this.scene3D._children[2].transform.position.clone();
            }, GameCore2.prototype.nextStep = function() {
                var e = this;
                this.onUp(), this.scene2D.off(Laya.Event.MOUSE_DOWN, this, this.onDown), this.scene2D.off(Laya.Event.MOUSE_UP, this, this.onUp), 
                this.checkProgress(function(t) {
                    t ? (e.destoryOldCar(!1), e.gameOver()) : e.destoryOldCar(!0, function() {
                        e.scene3D._children[0].transform.position = e.ori_c, e.scene3D._children[2].transform.position = e.ori_s, 
                        e.showNewCar(function() {
                            e.l_push_x = e.width / 2, e.scene2D.on(Laya.Event.MOUSE_DOWN, e, e.onDown), e.scene2D.on(Laya.Event.MOUSE_UP, e, e.onUp);
                        });
                    });
                });
            }, GameCore2.prototype.onDown = function() {
                this.ls.actRunning(), this.press_h = !1, this.pressSoundEnable = !0, Laya.timer.frameLoop(1, this, this.onPress), 
                s.default.instance.playSound(5001);
            }, GameCore2.prototype.onUp = function() {
                this.ls.actExit(), Laya.timer.clear(this, this.onPress);
            }, GameCore2.prototype.onPress = function() {
                var e = this.ls.sp.transform.localPosition.clone().x, t = this.rs.sp.transform.localPosition.clone().x;
                if (e < this.l_push_x) if (this.l_push_x = e, this.ls.actPressing(), e - t > this.width) {
                    var n = -this.ls.speed * Laya.timer.delta / 1e3;
                    this.scene3D._children[0].transform.translate(new Laya.Vector3(n, 0, 0), !1), this.scene3D._children[2].transform.translate(new Laya.Vector3(n, 0, 0), !1);
                } else {
                    n = -this.ls.speed * Laya.timer.delta / 1e3;
                    this.scene3D._children[0].transform.translate(new Laya.Vector3(.5 * n, 0, 0), !1), 
                    this.scene3D._children[2].transform.translate(new Laya.Vector3(.5 * n, 0, 0), !1), 
                    this.off_x = (e - t) / 2, this.exeBlendShapes(this.off_x, this.off_y);
                }
                e - t <= this.ls.init_pos.x - this.rs.init_pos.x - this.min_x ? this.nextStep() : this.eventUpdataeBar();
            }, GameCore2.prototype.gameOver = function() {
                var e = this;
                this.main_camera_script.actWin(), Laya.timer.once(3e3, this, function() {
                    e.gameController.gameOver();
                });
            }, GameCore2.prototype.destoryOldCar = function(e, t) {
                var n = this;
                void 0 === t && (t = null);
                this.scene3D._children[2].transform.position;
                this.scene3D._children[2].addChild(this.gameController.user), this.gameController.user.transform.position = new Laya.Vector3(0, 0, 0);
                var a = this.gameController.user.getChildAt(0), l = a.getComponent(o.default), c = l.sp3.meshFilter.sharedMesh.bounds.getExtent();
                c.x *= .1, c.z *= .1;
                i.default.bodyBoxCreate(a, this.physicsWorld, r.default.cannonVector(c), {
                    isStatic: !1,
                    mass: 10,
                    collisionFilter: {
                        group: i.default.player_group,
                        mask: i.default.player_mask
                    }
                }, l.sp3.name);
                var d = this.scene3D.getChildByName("root").getChildByName("platform");
                Laya.Tween.to(d.transform, {
                    localRotationEulerX: 90
                }, 400, null, Laya.Handler.create(this, function() {
                    e && (Laya.Tween.to(d.transform, {
                        localRotationEulerX: 0
                    }, 500, null, Laya.Handler.create(n, function() {
                        t && t();
                    }), 600), s.default.instance.playSound(5027));
                })), s.default.instance.playSound(5028);
            }, GameCore2.prototype.setCollideBody = function() {
                var e = [], t = this.scene3D.getChildByName("root").getChildByName("pull_left").getChildByName("col"), n = this.scene3D.getChildByName("root").getChildByName("pull_right").getChildByName("col");
                e.push(t), e.push(n);
                for (var a = 0; a < e.length; a++) {
                    var o = e[a], r = i.default.bodyCreateByPC(o, this.physicsWorld, {
                        isStatic: !1,
                        collisionFilter: {
                            group: i.default.barrier_group,
                            mask: i.default.barrier_mask
                        }
                    }, "barrier");
                    o.material = l.default.barrier_mat, r.allowSleep = !1, r.follow_sp = !0;
                }
            }, GameCore2.prototype.eventUpdataeBar = function() {
                var e = (5.9 - this.min_x) / 2, t = (this.off_x - e) / (this.width / 2 - e);
                t < 0 && (t = 0), this.gameController.eventDispatcher.event("updateBar", [ this.step_index + 1, this.step_total + 1, t, t ]);
            }, GameCore2;
        }(a.default);
        n.default = d;
    }, {
        "../script/TotalTypeManager": 52,
        "../sysfactory/FCore": 66,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/CannonUtils": 94,
        "../yunwei/blendshape/BlendShapeScriptv2": 104,
        "./GameCore": 58,
        "./MCore": 65
    } ],
    63: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function GameData() {}
            return GameData.Gravity = -9.81, GameData;
        }();
        n.default = a;
    }, {} ],
    64: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function FSMStateCtrlLoading() {
                FSMStateCtrlLoading.instance = this;
            }
            return FSMStateCtrlLoading.prototype.Enter = function(e) {}, FSMStateCtrlLoading.prototype.Execute = function(e) {}, 
            FSMStateCtrlLoading.prototype.Exit = function(e) {}, FSMStateCtrlLoading;
        }();
        n.FSMStateCtrlLoading = a, new a();
        var o = function() {
            function FSMStateCtrlReady() {
                FSMStateCtrlReady.instance = this;
            }
            return FSMStateCtrlReady.prototype.Enter = function(e) {}, FSMStateCtrlReady.prototype.Execute = function(e) {}, 
            FSMStateCtrlReady.prototype.Exit = function(e) {}, FSMStateCtrlReady;
        }();
        n.FSMStateCtrlReady = o, new o();
        var i = function() {
            function FSMStateCtrlGaming() {
                FSMStateCtrlGaming.instance = this;
            }
            return FSMStateCtrlGaming.prototype.Enter = function(e) {}, FSMStateCtrlGaming.prototype.Execute = function(e) {}, 
            FSMStateCtrlGaming.prototype.Exit = function(e) {}, FSMStateCtrlGaming;
        }();
        n.FSMStateCtrlGaming = i, new i();
        var r = function() {
            function FSMStateCtrlEnd() {
                FSMStateCtrlEnd.instance = this;
            }
            return FSMStateCtrlEnd.prototype.Enter = function(e) {}, FSMStateCtrlEnd.prototype.Execute = function(e) {}, 
            FSMStateCtrlEnd.prototype.Exit = function(e) {}, FSMStateCtrlEnd;
        }();
        n.FSMStateCtrlEnd = r, new r();
    }, {} ],
    65: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function MCore() {}
            return MCore.init = function(e) {
                this.player_mat = new CANNON.Material("groundMaterial"), this.barrier_mat = new CANNON.Material("barrierMaterial"), 
                e.addContactMaterial(new CANNON.ContactMaterial(MCore.player_mat, MCore.barrier_mat, {
                    friction: .8,
                    restitution: .1,
                    contactEquationStiffness: 5e3
                }));
            }, MCore;
        }();
        n.default = a;
    }, {} ],
    66: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../yunwei/ColorUtil"), o = e("../yunwei/CannonUtils"), i = function() {
            function FCore() {}
            return FCore.createBox = function(e, t, n, a, o, i, r) {
                var s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(a.x, a.y, a.z));
                e.addChild(s), s.transform.position = n, s.transform.rotationEuler = o;
                new Laya.BlinnPhongMaterial();
                return FCore.bodyBoxCreate(s, t, new CANNON.Vec3(a.x / 2, a.y / 2, a.z / 2), i, r), 
                s;
            }, FCore.createSphere = function(e, t, n, a, o, i, r) {
                var s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createSphere(a, 6, 16));
                e.addChild(s), s.transform.position = n, s.transform.rotationEuler = o;
                new Laya.BlinnPhongMaterial();
                return FCore.bodySphereCreate(s, t, a, i, r), s;
            }, FCore.bodyBoxCreate = function(e, t, n, a, i) {
                var r = new CANNON.Box(n), s = new CANNON.Body({
                    position: o.default.cannonVector(e.transform.position),
                    quaternion: o.default.cannonQuat(e.transform.rotation)
                });
                return s.label = i, this.opsRefresh(a, s), s.addShape(r), this.setCABody(e, s), 
                this.setBeLong(s, e), t.addBody(s), s;
            }, FCore.bodySphereCreate = function(e, t, n, a, i) {
                var r = new CANNON.Sphere(n), s = new CANNON.Body({
                    position: o.default.cannonVector(e.transform.position),
                    quaternion: o.default.cannonQuat(e.transform.rotation)
                });
                return s.label = i, this.opsRefresh(a, s), s.addShape(r), this.setCABody(e, s), 
                this.setBeLong(s, e), t.addBody(s), s;
            }, FCore.bodyCreateByPC = function(e, t, n, a) {
                var i = this.getSP3PhysicsCollider(e);
                if (i) {
                    var r, s = i.type, l = i.center, c = (new Laya.Vector3(1, 1, 1), e.parent);
                    if (!c || c instanceof Laya.Scene3D || c.transform.scale, "BoxColliderShape" == s) {
                        var d = i.size, u = d[0] * e.transform.scale.x, h = d[1] * e.transform.scale.y, f = d[2] * e.transform.scale.z;
                        r = new CANNON.Box(new CANNON.Vec3(.5 * u, .5 * h, .5 * f));
                    } else if ("SphereColliderShape" == s) {
                        u = i.radius * e.transform.scale.x;
                        r = new CANNON.Sphere(u);
                    }
                    var p = e.transform.position.x, y = e.transform.position.y, g = e.transform.position.z, m = new CANNON.Vec3(l[0] * e.transform.scale.x, l[1] * e.transform.scale.y, l[2] * e.transform.scale.z), _ = e.transform.rotation, v = new CANNON.Body({
                        position: new CANNON.Vec3(p, y, g),
                        quaternion: o.default.cannonQuat(_)
                    });
                    return v.label = a, this.opsRefresh(n, v), v.addShape(r, m), this.setCABody(e, v), 
                    this.setBeLong(v, e), t.addBody(v), v;
                }
            }, FCore.bodyCreateByBounds = function(e, t, n, a) {
                var i, r = e.meshFilter.sharedMesh.bounds;
                i = new CANNON.Box(new CANNON.Vec3(r._extent.x, r._extent.y, r._extent.z));
                var s = r._center.x, l = r._center.y, c = r._center.z, d = new CANNON.Vec3(0, 0, 0), u = e.transform.rotation, h = new CANNON.Body({
                    position: new CANNON.Vec3(s, l, c),
                    quaternion: o.default.cannonQuat(u)
                });
                return h.label = a, this.opsRefresh(n, h), h.addShape(i, d), this.setCABody(e, h), 
                this.setBeLong(h, e), t.addBody(h), h;
            }, FCore.opsRefresh = function(e, t) {
                if (e) {
                    if (null != e.isStatic && (e.isStatic ? t.type = CANNON.Body.STATIC : t.type = CANNON.Body.DYNAMIC), 
                    null != e.mass && (t.mass = e.mass), null != e.friction && (t.material || (t.material = new CANNON.Material()), 
                    t.material.friction = e.friction), null != e.restitution && (t.material || (t.material = new CANNON.Material()), 
                    t.material.restitution = e.restitution), null != e.Airfriction && (t.linearDamping = e.Airfriction), 
                    null != e.collisionFilter) {
                        var n = e.collisionFilter;
                        null != n.group && (t.collisionFilterGroup = n.group), null != n.mask && (t.collisionFilterMask = n.mask);
                    }
                    null != e.isSensor && (t.collisionResponse = !e.isSensor), null != e.material && (t.material = e.material);
                }
            }, FCore.setRoleMode = function(e) {
                var t = this;
                e.is_role = !0, e.allowSleep = !1, e.postStep = function() {
                    var n = t.getBeLong(e);
                    !n && n.destroyed || (e.quaternion = o.default.cannonQuat(n.transform.rotation), 
                    e.angularVelocity = CANNON.Vec3.ZERO, n.transform.position = o.default.layaVector(e.position));
                };
            }, FCore.ctrlRole = function(e, t, n, a) {
                var o = Math.atan2(n, t), i = a * t, r = a * n, s = FCore.getCABody(e), l = s.velocity;
                if (l.x = i, l.y = 0, l.z = r, s.velocity = l, Math.abs(t) > 1e-6 || Math.abs(n) > 1e-6) {
                    var c = -180 * o / Math.PI;
                    e.transform.rotationEuler = new Laya.Vector3(0, c, 0);
                }
            }, FCore.setColor = function(e, t, n) {
                var o = e.meshRenderer.material;
                o || (o = new Laya.BlinnPhongMaterial(), e.meshRenderer.material = o), o.albedoIntensity = n, 
                o.albedoColor = a.default.ColorToAlbedo(t, 1);
            }, FCore.setBeLong = function(e, t) {
                e.belong = t;
            }, FCore.getBeLong = function(e) {
                return e.belong;
            }, FCore.setCABody = function(e, t) {
                e.Body = t;
            }, FCore.getCABody = function(e) {
                return e.Body;
            }, FCore.getSP3PhysicsCollider = function(e) {
                return e.PhysicsCollider;
            }, FCore.player_group = 2, FCore.barrier_group = 4, FCore.player_mask = 4, FCore.barrier_mask = 2, 
            FCore;
        }();
        n.default = i;
    }, {
        "../yunwei/CannonUtils": 94,
        "../yunwei/ColorUtil": 95
    } ],
    67: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function HelicopterBackWholeScript() {
                return e.call(this) || this;
            }
            return __extends(HelicopterBackWholeScript, e), HelicopterBackWholeScript.prototype.onEnable = function() {
                this.sp3 = this.owner;
            }, HelicopterBackWholeScript.prototype.onDisable = function() {}, HelicopterBackWholeScript.prototype.onUpdate = function() {
                this.sp3.transform.rotate(new Laya.Vector3(-5, 0, 0), !0, !1);
            }, HelicopterBackWholeScript;
        }(Laya.Script3D);
        n.default = a;
    }, {} ],
    68: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function HelicopterTopScript() {
                return e.call(this) || this;
            }
            return __extends(HelicopterTopScript, e), HelicopterTopScript.prototype.onEnable = function() {
                this.sp3 = this.owner;
            }, HelicopterTopScript.prototype.onDisable = function() {}, HelicopterTopScript.prototype.onUpdate = function() {
                this.sp3.transform.rotate(new Laya.Vector3(0, 3, 0), !0, !1);
            }, HelicopterTopScript;
        }(Laya.Script3D);
        n.default = a;
    }, {} ],
    69: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../sysloader/LoaderManeger"), o = e("./FCore"), i = e("../syscore/MCore"), r = function() {
            function MapMaker() {}
            return MapMaker.creatMap = function(e, t, n) {
                var o = this, i = a.default.instance.getCompleteResByID(e);
                Laya.loader.create(i, Laya.Handler.create(this, function() {
                    var i = a.default.instance.getCompleteResByID(e), r = Laya.Sprite3D.instantiate(Laya.loader.getRes(i));
                    t.addChild(r), r.name = "root", o.addPhysics(t, n);
                }));
            }, MapMaker.addPhysics = function(e, t) {
                for (var n = e.getChildByName("root").getChildByName("col_scene")._children, a = 0; a < n.length; a++) {
                    var r = n[a];
                    o.default.bodyCreateByPC(r, t, {
                        isStatic: !0,
                        collisionFilter: {
                            group: o.default.barrier_group,
                            mask: o.default.barrier_mask
                        }
                    }, "barrier");
                    r.material = i.default.barrier_mat;
                }
            }, MapMaker.barrier_col_list = [], MapMaker;
        }();
        n.default = r;
    }, {
        "../syscore/MCore": 65,
        "../sysloader/LoaderManeger": 72,
        "./FCore": 66
    } ],
    70: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../sysloader/LoaderManeger"), o = e("../yunwei/blendshape/BlendShape3Dv2"), i = e("./HelicopterBackWholeScript"), r = e("./HelicopterTopScript"), s = function() {
            function UserMakerv2() {}
            return UserMakerv2.createByUnity = function(e, t, n, s, l, c) {
                var d = this, u = a.default.instance.getCompleteResByID(n), h = a.default.instance.getCompleteResByID(s);
                new Date().getTime();
                Laya.loader.create([ u ], Laya.Handler.create(this, function() {
                    Laya.loader.load(h, Laya.Handler.create(d, function() {
                        var e = Laya.loader.getRes(h), 
                        t = new Uint8Array(e), 
                        n = Laya.Sprite3D.instantiate(Laya.loader.getRes(u));
                        n.transform.rotationEuler = new Laya.Vector3(0, -90, 0);
                        var a = 0, s = new Array(), d = 0;
                        s.push(0);
                        for (var f = 0; f < n.numChildren; f++) {
                            var p = n.getChildAt(f);
                            if (0 == f) a += 4 * p.meshFilter.sharedMesh.vertexCount, s[++d] = a; else if (p.name.indexOf("RelatedBlendShapes") > -1) for (var y = 0; y < p.numChildren; y++) {
                                a += 4 * (_ = p.getChildAt(y)).meshFilter.sharedMesh.vertexCount, s[++d] = a;
                            }
                        }
                        var g = new Laya.Sprite3D();
                        g.transform.position = l, d = 0;
                        for (f = 0; f < n.numChildren; f++) {
                            p = n.getChildAt(f);
                            if (0 == f) {
                                var m = o.default.create(p, t, s[d]);
                                g.addChild(m.des_sp3), m.des_sp3.transform.rotate(new Laya.Vector3(0, 180, 0), !1, !1), 
                                d++;
                            } else if (p.name.indexOf("RelatedBlendShapes") > -1) for (y = 0; y < p.numChildren; y++) {
                                var _ = p.getChildAt(y);
                                m = o.default.create(_, t, s[d]);
                                g.addChild(m.des_sp3), m.des_sp3.transform.rotate(new Laya.Vector3(0, 180, 0), !1, !1), 
                                d++;
                            } else if (p.name.indexOf("other_sp3") > -1) for (y = 0; y < p.numChildren; y++) {
                                _ = Laya.Sprite3D.instantiate(p.getChildAt(y));
                                g.addChild(_), "HelicopterAmbulance_PropellersBack" == _.name ? _.addComponent(i.default) : "HelicopterAmbulancePropellersTop" == _.name && _.addComponent(r.default);
                            }
                        }
                        c && (c.args = [ g ]), c.run();
                    }), null, Laya.Loader.BUFFER);
                }));
            }, UserMakerv2;
        }();
        n.default = s;
    }, {
        "../sysloader/LoaderManeger": 72,
        "../yunwei/blendshape/BlendShape3Dv2": 103,
        "./HelicopterBackWholeScript": 67,
        "./HelicopterTopScript": 68
    } ],
    71: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function AtlasImg() {
                this.image_id = 0, this.atlas_res_id = 0;
            }
            return AtlasImg.creatByJson = function(e) {
                var t = new AtlasImg();
                return t.image_id = e.gid, t.res = e.res, t.atlas_res_id = e.rid, t;
            }, AtlasImg;
        }();
        n.default = a;
    }, {} ],
    72: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./ResTemp"), o = e("../channel/CM"), i = e("./AtlasImg"), r = e("./ModelTexture"), s = e("./temp/DramaTemp"), l = function() {
            function LoaderManeger() {
                this.load_way_force = 2, this.sub_pakage_enable = !0, this.platform = "WX", this.sub_package_stage = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], 
                this.music_asyn_arr = new Array(), LoaderManeger.instance = this, this.platform = o.default.getPlatform(), 
                this.setPlatform(this.platform), o.default.onMiniGame() && (Laya.MiniAdpter.AutoCacheDownFile = !0);
            }
            return LoaderManeger.prototype.creatByJson = function(e) {
                var t = this;
                void 0 === e && (e = null), Laya.loader.create([ LoaderManeger.LOADER_CORE_JSON_RES, LoaderManeger.JSON_PATH + s.default.JSON_RES_NAME ], Laya.Handler.create(this, function() {
                    var n = Laya.loader.getRes(LoaderManeger.LOADER_CORE_JSON_RES);
                    t.base_url = n.base_url, t.latest_version = n.latest_version, t.creatResTempListByJson(n.res_list), 
                    t.creatAtalsImgListByJson(n.atlas_list), t.creatModelTextureByJson(n.model_texture_list), 
                    e && e.run();
                }));
            }, LoaderManeger.prototype.creatResTempListByJson = function(e) {
                this.res_arr = new Array();
                for (var t = 0; t < e.length; t++) {
                    var n = a.default.creatByJson(e[t]);
                    this.res_arr.push(n);
                }
            }, LoaderManeger.prototype.creatAtalsImgListByJson = function(e) {
                this.atlas_img_arr = new Array();
                for (var t = 0; t < e.length; t++) {
                    var n = i.default.creatByJson(e[t]);
                    this.atlas_img_arr.push(n);
                }
            }, LoaderManeger.prototype.creatModelTextureByJson = function(e) {
                this.model_texture_arr = new Array();
                for (var t = 0; t < e.length; t++) {
                    var n = r.default.creatByJson(e[t]);
                    this.model_texture_arr.push(n);
                }
            }, LoaderManeger.prototype.loadSkeleton = function(e, t, n) {
                this.loadSkeletonToPos(e, t, n);
            }, LoaderManeger.prototype.loadSkeletonToPos = function(e, t, n, a, o, i) {
                var r = e.split("/"), s = r[r.length - 1], l = this.getCompleteResByResName(s), c = l.replace("sk", "png");
                Laya.loader.load([ l, c ], Laya.Handler.create(this, function() {
                    var e = Laya.loader.getRes(c), r = Laya.loader.getRes(l), s = new Laya.Templet();
                    s.parseData(e, r);
                    var d = s.buildArmature(null == n ? 0 : n);
                    null != a && null != o && d.pos(a, o), null != i && (d.zOrder = i), d.url_sk = l, 
                    d.url_png = c, t.args = [ d ], t.run(), l = null, c = null;
                }));
            }, LoaderManeger.prototype.clearSkeletonRes = function(e) {
                if (e) {
                    var t = e.url_sk;
                    t && Laya.loader.clearRes(t), t = null;
                    var n = e.url_png;
                    n && Laya.loader.clearRes(n), n = null;
                }
            }, LoaderManeger.prototype.clearSkeletonResByName = function(e) {
                var t = this.getCompleteResByResName(e);
                if (t) {
                    Laya.loader.clearRes(t);
                    var n = t.replace("sk", "png");
                    Laya.loader.clearRes(n), t = null, n = null;
                }
            }, LoaderManeger.prototype.loadImageCore = function(e, t) {
                var n = this.getResTempByRes(e);
                if (n) {
                    var a = this.getCompleteRes(n);
                    Laya.loader.load([ a ], Laya.Handler.create(this, function() {
                        t.args = [ a ], t.run();
                    }));
                } else if (n = this.getAtlasResByImageRes(e)) {
                    a = this.getCompleteRes(n);
                    Laya.loader.create([ a ], Laya.Handler.create(this, function() {
                        var n = Laya.Loader.getAtlas(a);
                        for (var o in n) if (n[o].indexOf(e) > -1) {
                            t.args = [ n[o] ];
                            break;
                        }
                        t.run();
                    }));
                } else t.args = [ null ], t.run();
            }, LoaderManeger.prototype.loadImage = function(e, t, n) {
                this.loadImageCore(t, Laya.Handler.create(this, function(t) {
                    e && (e.destroyed || (e instanceof Laya.Image ? e.skin = t : e instanceof Laya.Button ? e.skin = t : e instanceof Laya.Sprite && (e.texture = t), 
                    null != n && n.run()));
                }));
            }, LoaderManeger.prototype.loadMaterialTexture2D = function(e, t, n, a, o) {
                Laya.Texture2D.load(a, Laya.Handler.create(null, function(a) {
                    t += "(Instance)";
                    var i = null;
                    if (e.skinnedMeshRenderer) i = e.skinnedMeshRenderer; else {
                        if (!e.meshRenderer) return console.warn("loadMaterialColor 找不到 预定义的渲染器"), void o.run();
                        i = e.meshRenderer;
                    }
                    for (var r = !1, s = 0; s < i.materials.length; s++) if (i.materials[s].name == t) {
                        var l = null;
                        "bp_albedo_tex" == n ? (l = i.materials[s]).albedoTexture = a : "bp_albedo_nor" == n ? (l = i.materials[s]).normalTexture = a : "e_tex" == n ? (l = i.materials[s]).texture = a : "un_albedo_tex" == n && ((l = i.materials[s]).albedoTexture = a), 
                        l && (i.materials[s] = l, r = !0);
                        break;
                    }
                    o.args[2] = r, o.run();
                }));
            }, LoaderManeger.prototype.loadMaterialColor = function(e, t, n, a) {
                t += "(Instance)";
                var o = null;
                if (e.skinnedMeshRenderer) o = e.skinnedMeshRenderer; else {
                    if (!e.meshRenderer) return void console.warn("loadMaterialColor 找不到 预定义的渲染器");
                    o = e.meshRenderer;
                }
                for (var i = 0; i < o.materials.length; i++) if (o.materials[i].name == t) {
                    var r = null;
                    "bp_albedo_color" == n ? (r = o.materials[i]).albedoColor = this.colorHEXToVector(a) : "e_color" == n ? (r = o.materials[i]).color = this.colorHEXToVector(a) : "un_albedo_color" == n && ((r = o.materials[i]).albedoColor = this.colorHEXToVector(a)), 
                    r && (o.materials[i] = r);
                    break;
                }
            }, LoaderManeger.prototype.colorHEXToVector = function(e, t) {
                null == t && (t = !1);
                var n = e.substring(1, 3), a = (16 * parseInt(n[0], 16) + parseInt(n[1], 16)) / 255, o = e.substring(3, 5), i = (16 * parseInt(o[0], 16) + parseInt(o[1], 16)) / 255, r = e.substring(5, 7), s = (16 * parseInt(r[0], 16) + parseInt(r[1], 16)) / 255;
                if (9 == e.length || t) {
                    var l = 1;
                    if (9 == e.length) {
                        var c = e.substring(7, 9);
                        l = (16 * parseInt(c[0], 16) + parseInt(c[1], 16)) / 255;
                    }
                    return new Laya.Vector4(a, i, s, l);
                }
                return 7 == e.length ? new Laya.Vector3(a, i, s) : null;
            }, LoaderManeger.prototype.getTextureList = function(e) {
                return this.getMaterialTextureListByIDs(e);
            }, LoaderManeger.prototype.loadSprite3DHDTexture = function(e, t) {
                if (e) for (var n = this.getMaterialTextureListByIDs(t), a = 0; a < n.length; a++) {
                    var o, i = n[a], r = e, s = i.name.split("/"), l = 0;
                    if ("[root]" == i.name) l = 1; else for (;l < s.length; ) {
                        if (!(r = s[l] == r.name ? e : r.getChildByName(s[l]))) {
                            console.warn("[警告]未找到指定的 模型：" + i.name + " 无法加载预定材质球参数（高清贴图，颜色等）");
                            break;
                        }
                        l++;
                    }
                    if (r && l == s.length) if (r.skinnedMeshRenderer ? o = r.skinnedMeshRenderer.materials : r.meshRenderer && (o = r.meshRenderer.materials), 
                    this.getMaterialByName(o, i.material_name)) if ("bp_albedo_color" == i.param || "e_color" == i.param || "un_albedo_color" == i.param) this.loadMaterialColor(r, i.material_name, i.param, i.res_id), 
                    console.log("颜色加载完毕：" + i.res_id); else if ("bp_albedo_tex" == i.param || "bp_albedo_nor" == i.param || "e_tex" == i.param || "un_albedo_tex" == i.param) {
                        var c = this.getResTempByID(Number(i.res_id));
                        if (c) {
                            var d = this.getCompleteRes(c);
                            this.loadMaterialTexture2D(r, i.material_name, i.param, d, Laya.Handler.create(this, function(e, t, n) {
                                n ? console.log(e.material_name + " 贴图加载完毕：" + t) : console.log("未找到指定的 材质球 ：" + e.material_name);
                            }, [ i, d ]));
                        } else console.warn("未定义的 材质球类型：" + i.param);
                    }
                }
            }, LoaderManeger.prototype.getMaterialTextureListByIDs = function(e) {
                for (var t = (e = e.substr(1, e.length - 2)).split(","), n = new Array(), a = 0; a < t.length; a++) {
                    var o = Number(t[a]), i = this.getModelTextureByID(o);
                    i && n.push(i);
                }
                return n;
            }, LoaderManeger.prototype.getMaterialByName = function(e, t) {
                t += "(Instance)";
                for (var n = 0; n < e.length; n++) if (e[n].name == t) return e[n];
                return null;
            }, LoaderManeger.prototype.getAtlasResByImageRes = function(e) {
                var t = this.getAtlasResByImgRes(e);
                if (t) {
                    var n = this.getResTempByID(t.atlas_res_id);
                    if (n) return n;
                }
                return console.warn("[警告]" + e + " 在loader_core.json 中 寻找图集映射资源失败"), null;
            }, LoaderManeger.prototype.getResTempByID = function(e) {
                for (var t = 0; t < this.res_arr.length; t++) {
                    var n = this.res_arr[t];
                    if (n.res_id == e) return n;
                }
                return console.warn("[警告]未找到 指定rid的 资源模板 请检查 rid=" + e), null;
            }, LoaderManeger.prototype.getCompleteResByResName = function(e) {
                var t = this.getResTempByRes(e);
                return t ? this.getCompleteRes(t) : null;
            }, LoaderManeger.prototype.getCompleteResByID = function(e) {
                var t = this.getResTempByID(e);
                return t ? this.getCompleteRes(t) : null;
            }, LoaderManeger.prototype.getResTempByRes = function(e) {
                for (var t = 0; t < this.res_arr.length; t++) {
                    var n = this.res_arr[t];
                    if (n.res.indexOf(e) > -1) return n;
                }
                return console.warn("[警告]在json中未找到资源模板 res=" + e), null;
            }, LoaderManeger.prototype.getAtlasResByImgRes = function(e) {
                for (var t = 0; t < this.atlas_img_arr.length; t++) {
                    var n = this.atlas_img_arr[t];
                    if (n.res.indexOf(e) > -1) return n;
                }
                return console.warn("[警告]" + e + " 图片 在 图集中的 映射未找到 请检查 json及对应资源 图集rid=" + n.atlas_res_id), 
                null;
            }, LoaderManeger.prototype.getCompleteRes = function(e) {
                var t = e.way, n = e.version;
                if (this.platform == o.default.CH_ZJ ? (t = e.way_zijie, n = e.version_zijie + "") : this.platform == o.default.CH_QQ ? (t = e.way_qq, 
                n = e.version_qq + "") : this.platform == o.default.CH_BAIDU ? (t = e.way_baidu, 
                n = e.version_baidu + "") : this.platform == o.default.CH_VIVO ? (t = e.way_vivo, 
                n = e.version_vivo + "") : this.platform == o.default.CH_OPPO ? (t = e.way_oppo, 
                n = e.version_oppo + "") : this.platform == o.default.CH_XIAOMI ? (t = e.way_xiaomi, 
                n = e.version_xiaomi + "") : this.platform == o.default.CH_HUAWEI && (t = e.way_huawei, 
                n = e.version_huawei + ""), 3 == this.load_way_force) return  e.res;
                if (2 == this.load_way_force) {
                    if (0 == t) return e.res;
                    if (1 == t) return e.res;
                } else {
                    if (1 == this.load_way_force) return e.res;
                    if (0 == this.load_way_force) return e.res;
                }
                return e.res;
            }, LoaderManeger.prototype.setLoadWayForce = function(e) {
                this.load_way_force = e, 3 == e && o.default.onMiniGame() && (Laya.URL.basePath = "", 
                Laya.MiniAdpter.nativefiles = [ "anim", "demo", "fps", "js", "libs", "loading", "prefab", "test", "utils" ]);
            }, LoaderManeger.prototype.setPlatform = function(e) {
                this.platform = e, e == o.default.CH_ZJ ? this.sub_pakage_enable = !1 : e == o.default.CH_OPPO ? this.sub_pakage_enable = !1 : e == o.default.CH_VIVO && (this.sub_pakage_enable = !1);
            }, LoaderManeger.prototype.getModelTextureByID = function(e) {
                for (var t = 0; t < this.model_texture_arr.length; t++) {
                    var n = this.model_texture_arr[t];
                    if (n.high_texture_id == e) return n;
                }
                return console.warn("[警告]htid=" + e + "未在json中找到"), null;
            }, LoaderManeger.prototype.getCompleteResListByIDs = function(e) {
                for (var t = (e = e.substr(1, e.length - 2)).split(","), n = new Array(), a = 0; a < t.length; a++) Number(t[a]);
                return n;
            }, LoaderManeger.prototype.preloadingSound = function(e, t) {
                for (var n = new Array(), a = 0; a < e.length; a++) e[a] > 5e4 && n.push(LoaderManeger.instance.getCompleteResByID(e[a]));
                n.length > 0 && Laya.loader.load(n, Laya.Handler.create(this, function() {
                    e = null, n = null, t && t();
                }));
            }, LoaderManeger.prototype.loadSubPack = function(e, t) {
                var n = this;
                if (o.default.onMiniGame() && 2 == this.load_way_force) if (this.sub_pakage_enable) if (console.log("分包:", e), 
                this.sub_package_stage[e] == LoaderManeger.SUB_PACKAGE_STAGE_NO) {
                    var i = o.default.onWindow();
                    if (i) {
                        this.sub_package_stage[e] = LoaderManeger.SUB_PACKAGE_STAGE_LOADING;
                        var r = new Date().getTime();
                        i.loadSubpackage({
                            name: a.default.getSubPackName(e),
                            success: function(o) {
                                console.log(a.default.getSubPackName(e) + " 分包 加载耗时：" + (new Date().getTime() - r)), 
                                n.sub_package_stage[e] = LoaderManeger.SUB_PACKAGE_STAGE_SC, t();
                            },
                            fail: function(n) {
                                console.error(a.default.getSubPackName(e) + " 分包加载失败"), t();
                            }
                        });
                    }
                } else this.sub_package_stage[e] == LoaderManeger.SUB_PACKAGE_STAGE_LOADING ? t() : this.sub_package_stage[e] == LoaderManeger.SUB_PACKAGE_STAGE_SC && t(); else t(); else t();
            }, LoaderManeger.prototype.getCompleteResByIDAnsySub = function(e, t) {
                var n = this, a = this.getResTempByID(e);
                a ? this.loadSubPack(a.pack_type, function() {
                    t(n.getCompleteRes(a));
                }) : t(null);
            }, LoaderManeger.prototype.isCanUseSound = function() {
                return !o.default.onMiniGame() || 2 != this.load_way_force || this.sub_package_stage[LoaderManeger.SUB_ID_SOUNDS] == LoaderManeger.SUB_PACKAGE_STAGE_SC;
            }, LoaderManeger.prototype.loadSubSounds = function(e) {
                this.loadSubPack(LoaderManeger.SUB_ID_SOUNDS, function() {
                    e && e();
                });
            }, LoaderManeger.prototype.playSound = function(e, t) {
                void 0 === t && (t = 1);
                var n = this.getCompleteResByID(e);
                n && Laya.SoundManager.playSound(n, t);
            }, LoaderManeger.prototype.stopSound = function(e) {
                var t = this.getCompleteResByID(e);
                t && Laya.SoundManager.stopSound(t);
            }, LoaderManeger.prototype.playMusic = function(e) {
                var t = this.getCompleteResByID(e);
                t && Laya.SoundManager.playMusic(t, 0);
            }, LoaderManeger.prototype.stopMusic = function() {
                Laya.SoundManager.stopMusic();
            }, LoaderManeger.prototype.activeAllSound = function(e) {
                Laya.SoundManager.muted = !e;
            }, LoaderManeger.JSON_PATH = "res/atlas/json/", LoaderManeger.LOADER_CORE_JSON_RES = LoaderManeger.JSON_PATH + "loader_core.json", 
            LoaderManeger.SUB_ID_ALTAS = 1, LoaderManeger.SUB_ID_OTHER = 2, LoaderManeger.SUB_ID_HOME = 3, 
            LoaderManeger.SUB_ID_FPS = 4, LoaderManeger.SUB_ID_BOX = 5, LoaderManeger.SUB_ID_SHARE = 6, 
            LoaderManeger.SUB_ID_SOUNDS = 7, LoaderManeger.SUB_ID_MAP_1 = 11, LoaderManeger.SUB_ID_MAP_2 = 12, 
            LoaderManeger.SUB_ID_MAP_3 = 13, LoaderManeger.SUB_ID_MAP_4 = 14, LoaderManeger.SUB_PACKAGE_STAGE_NO = 0, 
            LoaderManeger.SUB_PACKAGE_STAGE_LOADING = 1, LoaderManeger.SUB_PACKAGE_STAGE_SC = 2, 
            LoaderManeger;
        }();
        n.default = l;
    }, {
        "../channel/CM": 8,
        "./AtlasImg": 71,
        "./ModelTexture": 73,
        "./ResTemp": 74,
        "./temp/DramaTemp": 78
    } ],
    73: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function ModelTexture() {
                this.high_texture_id = 0;
            }
            return ModelTexture.creatByJson = function(e) {
                var t = new ModelTexture();
                return t.high_texture_id = Number(e.htid), t.name = e.n, t.material_name = e.m, 
                t.param = e.p, t.res_id = e.rid, t;
            }, ModelTexture;
        }();
        n.default = a;
    }, {} ],
    74: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function ResTemp() {
                this.res_id = 0, this.way = 0, this.pack_type = 0, this.way_qq = 0, this.way_zijie = 0, 
                this.way_baidu = 0, this.way_vivo = 0, this.way_oppo = 0, this.way_huawei = 0, this.way_xiaomi = 0, 
                this.version_qq = 0, this.version_zijie = 0, this.version_baidu = 0, this.version_vivo = 0, 
                this.version_oppo = 0, this.version_huawei = 0, this.version_xiaomi = 0;
            }
            return ResTemp.creatByJson = function(e) {
                var t = new ResTemp();
                return t.res_id = e.rid, t.res_type = e.rty, t.pack_type = e.t, t.res = "res/" + this.getSubPackName(t.pack_type) + "/" + e.res, 
                t.way = e.way, t.version = e.v, t.way_qq = e.q, t.way_zijie = e.z, t.way_baidu = e.b, 
                t.way_vivo = e.i, t.way_oppo = e.o, t.way_huawei = e.h, t.way_xiaomi = e.x, t.version_qq = e.qv, 
                t.version_zijie = e.zv, t.version_baidu = e.bv, t.version_vivo = e.iv, t.version_oppo = e.ov, 
                t.version_huawei = e.hv, t.version_xiaomi = e.xv, t;
            }, ResTemp.getSubPackName = function(e) {
                switch (e) {
                  case 0:
                    return "";

                  case 1:
                    return "atlas";

                  case 2:
                    return "other";

                  case 3:
                    return "home";

                  case 6:
                    return "share";

                  case 7:
                    return "sounds";

                  case 11:
                    return "map_1";

                  case 12:
                    return "map_2";

                  case 13:
                    return "map_3";

                  case 14:
                    return "map_4";
                }
            }, ResTemp;
        }();
        n.default = a;
    }, {} ],
    75: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./LoaderManeger"), o = e("./temp/CarTemp"), i = e("./temp/CarForceTemp"), r = e("./temp/DramaTemp"), s = e("./temp/SceneFrogTemp"), l = e("../script/TotalTypeManager"), c = e("./temp/SceneTemp"), d = e("./temp/PowerTemp"), u = e("./temp/SpeedTemp"), h = e("./temp/GoldTemp"), f = function() {
            function SceneManager() {}
            return SceneManager.init = function() {
                for (var e = Laya.loader.getRes(a.default.JSON_PATH + r.default.JSON_RES_NAME)[r.default.JSON_KEY], t = 0; t < e.length; t++) {
                    var n = r.default.creatByJson(e[t]);
                    this.drama_list.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + c.default.JSON_RES_NAME)[c.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = c.default.creatByJson(e[t]);
                    this.scene_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + s.default.JSON_RES_NAME)[s.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = s.default.creatByJson(e[t]);
                    this.scene_fog_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + o.default.JSON_RES_NAME)[o.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = o.default.creatByJson(e[t]);
                    this.car_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + i.default.JSON_RES_NAME)[i.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = i.default.creatByJson(e[t]);
                    this.car_force_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + d.default.JSON_RES_NAME)[d.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = d.default.creatByJson(e[t]);
                    this.power_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + u.default.JSON_RES_NAME)[u.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = u.default.creatByJson(e[t]);
                    this.speed_temp.push(n);
                }
                for (e = Laya.loader.getRes(a.default.JSON_PATH + h.default.JSON_RES_NAME)[h.default.JSON_KEY], 
                t = 0; t < e.length; t++) {
                    n = h.default.creatByJson(e[t]);
                    this.gold_temp.push(n);
                }
            }, SceneManager.getPowerTemp = function(e) {
                return this.power_temp[e];
            }, SceneManager.getSpeedTemp = function(e) {
                return this.speed_temp[e];
            }, SceneManager.getGoldTemp = function(e) {
                return this.gold_temp[e];
            }, SceneManager.getDramaTemp = function(e) {
                return this.drama_list[e];
            }, SceneManager.getSceneTemp = function(e) {
                for (var t = this.scene_temp, n = 0; n < t.length; n++) {
                    if (e == t[n].srid) return t[n];
                }
                return null;
            }, SceneManager.getSceneFogTemp = function(e) {
                return this.scene_fog_temp[e];
            }, SceneManager.getCarTemp = function(e) {
                for (var t = this.car_temp, n = 0; n < t.length; n++) {
                    if (e == t[n].rid) return t[n];
                }
            }, SceneManager.getCarForceTemp = function(e) {
                for (var t = {}, n = this.car_force_temp, a = 0; a < n.length; a++) {
                    var o = n[a];
                    e == o.rid && (t[o.n] = o);
                }
                return t;
            }, SceneManager.preLoadRes = function(e) {
                void 0 === e && (e = null);
                for (var t = [], n = 0; n < SceneManager.baseProps.length; n++) {
                    var o = a.default.instance.getCompleteResByID(SceneManager.baseProps[n]);
                    o && t.push(o);
                }
                Laya.loader.create(t, Laya.Handler.create(this, function() {
                    e && e.run();
                }));
            }, SceneManager.preLoadScene = function(e) {
                var t = this;
                void 0 === e && (e = null);
                var n = l.default.getGrade(), o = SceneManager.getDramaTemp(n), i = a.default.instance.getResTempByID(o.srid), r = a.default.instance.getCompleteResByID(o.srid);
                a.default.instance.loadSubPack(i.pack_type, function() {
                    Laya.loader.create(r, Laya.Handler.create(t, function() {
                        e && e.run();
                    }));
                });
            }, SceneManager.loadLevelScene = function(e, t, n) {
                var a = SceneManager.getSceneFogTemp(e), o = new Laya.Scene3D();
                Laya.stage.addChild(o), o.zOrder = -1, o.ambientColor = a.ac;
                var i = o.addChild(new Laya.Camera(0, .1, 500));
                i.clearColor = new Laya.Vector4(1, 230 / 255, 166 / 255, 1);
                var r = o.addChild(new Laya.DirectionLight());
                r.intensity = a.dli, r.color = a.dlc, r.transform.rotationEuler = a.lre, a.fc && (o.enableFog = !0, 
                o.fogColor = a.fc, o.fogStart = a.min_fd, o.fogRange = a.max_fd, i.clearColor = new Laya.Vector4(a.fc.x, a.fc.y, a.fc.z, 1)), 
                t && Laya.BaseMaterial.load(t, Laya.Handler.create(this, function(e) {
                    i.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
                    var t = i.skyRenderer;
                    t.mesh = Laya.SkyBox.instance, t.material = e;
                })), n && (n.args = [ o, i ], n.run());
            }, SceneManager.baseProps = [ 3001 ], SceneManager.drama_list = [], SceneManager.scene_temp = [], 
            SceneManager.scene_fog_temp = [], SceneManager.car_temp = [], SceneManager.car_force_temp = [], 
            SceneManager.power_temp = [], SceneManager.speed_temp = [], SceneManager.gold_temp = [], 
            SceneManager;
        }();
        n.default = f;
    }, {
        "../script/TotalTypeManager": 52,
        "./LoaderManeger": 72,
        "./temp/CarForceTemp": 76,
        "./temp/CarTemp": 77,
        "./temp/DramaTemp": 78,
        "./temp/GoldTemp": 79,
        "./temp/PowerTemp": 80,
        "./temp/SceneFrogTemp": 81,
        "./temp/SceneTemp": 82,
        "./temp/SpeedTemp": 83
    } ],
    76: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function CarForceTemp() {
                this.rid = 0;
            }
            return CarForceTemp.creatByJson = function(e) {
                var t = new CarForceTemp();
                for (var n in e) t[n] = e[n];
                return t.lim_max = this.StringToV3(e.lim_max), t.lim_min = this.StringToV3(e.lim_min), 
                t.lpos_max = this.StringToV3(e.lpos_max), t.lpos_min = this.StringToV3(e.lpos_min), 
                t;
            }, CarForceTemp.StringToV3 = function(e) {
                if ("[]" == e || null == e || null == e) return null;
                var t = (e = e.substr(1, e.length - 2)).split(",");
                return new Laya.Vector3(Number(t[0]), Number(t[1]), Number(t[2]));
            }, CarForceTemp.JSON_RES_NAME = "drama_core.json", CarForceTemp.JSON_KEY = "car_force_temp", 
            CarForceTemp;
        }();
        n.default = a;
    }, {} ],
    77: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function CarTemp() {
                this.rid = 0, this.height = 0, this.width = 0, this.resist = 0;
            }
            return CarTemp.creatByJson = function(e) {
                var t = new CarTemp();
                for (var n in e) t[n] = e[n];
                return t;
            }, CarTemp.JSON_RES_NAME = "drama_core.json", CarTemp.JSON_KEY = "car_temp", CarTemp;
        }();
        n.default = a;
    }, {} ],
    78: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function DramaTemp() {
                this.car_list = [];
            }
            return DramaTemp.creatByJson = function(e) {
                var t = new DramaTemp();
                for (var n in e) t[n] = e[n];
                t.car_list = [];
                for (var a = e.car_list, o = (a = a.substr(1, a.length - 2)).split(","), i = 0; i < o.length; i++) t.car_list.push(Number(o[i]));
                return t;
            }, DramaTemp.JSON_RES_NAME = "drama_core.json", DramaTemp.JSON_KEY = "drama_temp", 
            DramaTemp;
        }();
        n.default = a;
    }, {} ],
    79: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function GoldTemp() {}
            return GoldTemp.creatByJson = function(e) {
                var t = new GoldTemp();
                for (var n in e) t[n] = e[n];
                return t;
            }, GoldTemp.JSON_RES_NAME = "drama_core.json", GoldTemp.JSON_KEY = "gold_level", 
            GoldTemp;
        }();
        n.default = a;
    }, {} ],
    80: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function PowerTemp() {}
            return PowerTemp.creatByJson = function(e) {
                var t = new PowerTemp();
                for (var n in e) t[n] = e[n];
                return t;
            }, PowerTemp.JSON_RES_NAME = "drama_core.json", PowerTemp.JSON_KEY = "power_level", 
            PowerTemp;
        }();
        n.default = a;
    }, {} ],
    81: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../../yunwei/ColorUtil"), o = function() {
            function SceneFrogTemp() {}
            return SceneFrogTemp.creatByJson = function(e) {
                var t = new SceneFrogTemp(), n = e.fd, o = (n = n.substr(1, n.length - 2)).split(","), i = a.default.ColorHexToRgba(e.fc), r = a.default.ColorHexToRgba(e.ac), s = a.default.ColorHexToRgba(e.sc), l = a.default.ColorHexToRgba(e.dlc);
                return t.min_fd = Number(o[0]), t.max_fd = Number(o[1]), i && (t.fc = new Laya.Vector3(i.r / 255, i.g / 255, i.b / 255)), 
                r && (t.ac = new Laya.Vector3(r.r / 255, r.g / 255, r.b / 255)), s && (t.sc = new Laya.Vector3(s.r / 255, s.g / 255, s.b / 255)), 
                l && (t.dlc = new Laya.Vector3(l.r / 255, l.g / 255, l.b / 255)), t.dli = Number(e.dli), 
                t.lre = this.StringToV3(e.lre), t.lre = this.c_unityToLayaREV3(t.lre), t;
            }, SceneFrogTemp.StringToV3 = function(e) {
                if ("[]" == e || null == e || null == e) return null;
                var t = (e = e.substr(1, e.length - 2)).split(",");
                return new Laya.Vector3(Number(t[0]), Number(t[1]), Number(t[2]));
            }, SceneFrogTemp.c_unityToLayaREV3 = function(e) {
                return e ? new Laya.Vector3(-e.x, 180 - e.y, e.z) : null;
            }, SceneFrogTemp.JSON_RES_NAME = "drama_core.json", SceneFrogTemp.JSON_KEY = "scene_fog_temp", 
            SceneFrogTemp;
        }();
        n.default = o;
    }, {
        "../../yunwei/ColorUtil": 95
    } ],
    82: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function CarTemp() {
                this.srid = 0;
            }
            return CarTemp.creatByJson = function(e) {
                var t = new CarTemp();
                for (var n in e) t[n] = e[n];
                return t.bcp = this.StringToV3(e.bcp), t.bcr = this.StringToV3(e.bcr), t.ecp = this.StringToV3(e.ecp), 
                t.ecr = this.StringToV3(e.ecr), t;
            }, CarTemp.StringToV3 = function(e) {
                if ("[]" == e || null == e || null == e) return null;
                var t = (e = e.substr(1, e.length - 2)).split(",");
                return new Laya.Vector3(Number(t[0]), Number(t[1]), Number(t[2]));
            }, CarTemp.JSON_RES_NAME = "drama_core.json", CarTemp.JSON_KEY = "scene_temp", CarTemp;
        }();
        n.default = a;
    }, {} ],
    83: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function SpeedTemp() {}
            return SpeedTemp.creatByJson = function(e) {
                var t = new SpeedTemp();
                for (var n in e) t[n] = e[n];
                return t;
            }, SpeedTemp.JSON_RES_NAME = "drama_core.json", SpeedTemp.JSON_KEY = "speed_level", 
            SpeedTemp;
        }();
        n.default = a;
    }, {} ],
    84: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../sysloader/LoaderManeger"), o = e("../yunwei/RandomUtil"), i = function(e) {
            function EffectScript() {
                var t = e.call(this) || this;
                return t.time = 0, t.mrid = 0, t.enable = !0, t;
            }
            return __extends(EffectScript, e), EffectScript.prototype.onEnable = function() {
                this.enable = !0, this.effect = this.owner, this.playSound();
            }, EffectScript.prototype.init = function(e) {
                this.mrid = e;
            }, EffectScript.prototype.reset = function() {
                this.time = 0, this.enable = !0;
            }, EffectScript.prototype.onUpdate = function() {
                this.time += Laya.timer.delta, this.effect && (this.effect.destroyed || this.time > 1e3 && (this.effect.removeSelf(), 
                this.enable = !1));
            }, EffectScript.prototype.playSound = function() {
                if (4001 == this.mrid) {
                    var e = o.default.getIntegerInRandom(5031, 5029);
                    a.default.instance.playSound(e);
                }
            }, EffectScript;
        }(Laya.Script);
        n.default = i;
    }, {
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99
    } ],
    85: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function Sheep() {
                var t = e.call(this) || this;
                return t.anim_name = "idle", t.anim_speed = 1, t.pre_normalized_time = 0, t.pre_anim_normalized_time = 0, 
                t.act_interval = 0, t.t = 0, t.updateInterval(), t;
            }
            return __extends(Sheep, e), Sheep.prototype.onEnable = function() {
                this.sp = this.owner, this.anim = this.sp.getComponent(Laya.Animator);
            }, Sheep.prototype.onUpdate = function() {
                this.t += Laya.timer.delta, this.actAnim();
            }, Sheep.prototype.actAnim = function() {
                if (this.t > this.act_interval && "idle" == this.anim_name && this.changeAni("standby", .1), 
                "standby" == this.anim_name) {
                    var e = this.anim.getCurrentAnimatorPlayState().normalizedTime;
                    if (e - Math.floor(e) >= .9) return this.changeAni("idle", .1), void this.updateInterval();
                }
            }, Sheep.prototype.updateInterval = function() {
                this.t = 0, this.act_interval = 4e3 * Math.random() + 2e3;
            }, Sheep.prototype.changeAni = function(e, t, n) {
                void 0 === t && (t = 0), this.pre_anim_normalized_time = this.anim.getCurrentAnimatorPlayState().normalizedTime, 
                this.anim_last_start = Laya.timer.currTimer, null == n && (n = 0), this.anim.speed = this.anim_speed, 
                this.anim_name = e, 0 == t ? this.anim.play(this.anim_name, 0, 0) : this.anim.crossFade(this.anim_name, t, 0, n);
            }, Sheep;
        }(Laya.Script);
        n.default = a;
    }, {} ],
    86: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./WinGoldScript"), o = e("../yunwei/RandomUtil"), i = e("../sysloader/LoaderManeger"), r = e("../script/GoldBanenr"), s = function() {
            function WinGoldManager() {}
            return WinGoldManager.init = function(e, t) {
                var n = new Laya.Scene3D();
                Laya.stage.addChild(n), n.zOrder = 99, n.ambientColor = new Laya.Vector3(.5, .5, .5);
                var s = n.addChild(new Laya.Camera(0, .1, 1e3));
                s.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), s.transform.translate(new Laya.Vector3(0, 0, 0)), 
                s.orthographic = !0, s.orthographicVerticalSize = 10, s.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, 
                n.addChild(new Laya.DirectionLight()).intensity = .8;
                var l = r.default.instance.getIconGoldPos(), c = new Laya.Vector3();
                s.convertScreenCoordToOrthographicCoord(l, c), c.z = -8;
                for (var d = i.default.instance.getCompleteResByID(3001), u = (i.default.instance.getCompleteResByID(6001), 
                0); u < 20; u++) {
                    var h = Laya.Sprite3D.instantiate(Laya.loader.getRes(d));
                    h.getChildAt(0).active = !1, h.name = "gold", s.addChild(h), h.transform.localRotationEuler = new Laya.Vector3(-90, 0, 0);
                    var f = o.default.getRealInRandom(2, -2), p = o.default.getRealInRandom(2, -2);
                    h.transform.localPosition = new Laya.Vector3(f, p, -8);
                    var y = h.addComponent(a.default);
                    y.scale_duan = u < 10 ? o.default.getIntegerInND(50, 200, 600, 50) : o.default.getIntegerInND(800, 200, 800, 300), 
                    y.init(c, function() {
                        var a = s.numChildren;
                        t && (t.args = [ 20 - a ]), t.run(), 0 == a && (n.removeSelf(), n.destroy(), e && e.run());
                    });
                }
            }, WinGoldManager;
        }();
        n.default = s;
    }, {
        "../script/GoldBanenr": 49,
        "../sysloader/LoaderManeger": 72,
        "../yunwei/RandomUtil": 99,
        "./WinGoldScript": 87
    } ],
    87: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../yunwei/RandomUtil"), o = function(e) {
            function WinGoldScript() {
                var t = e.call(this) || this;
                return t.sc = .75, t.end_point = new Laya.Vector3(2, 4, -8), t.scale_duan = 500, 
                t.time = 0, t;
            }
            return __extends(WinGoldScript, e), WinGoldScript.prototype.onEnable = function() {
                this.gold = this.owner;
            }, WinGoldScript.prototype.onDisable = function() {}, WinGoldScript.prototype.init = function(e, t) {
                var n = this;
                this.end_point = e, this.scale = new Laya.Vector3(.1, .1, .1), this.pos = this.gold.transform.localPosition;
                Math.atan2(this.gold.transform.localPosition.y, this.gold.transform.localPosition.z), 
                Math.PI;
                var o = a.default.getRealInRandom(0, -70);
                this.gold.transform.rotate(new Laya.Vector3(o, 0, 0), !0, !1), Laya.Tween.to(this.scale, {
                    x: 2 * this.sc,
                    y: 2 * this.sc,
                    z: 2 * this.sc
                }, this.scale_duan, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                    n.gold && (n.gold.destroyed || n.scale && Laya.Tween.to(n.scale, {
                        x: 1 * n.sc,
                        y: 1 * n.sc,
                        z: 1 * n.sc
                    }, n.scale_duan, Laya.Ease.linearIn));
                })), Laya.timer.once(1800 + a.default.getIntegerInRandom(800, 0), this, function() {
                    if (n.gold && !n.gold.destroyed) {
                        var e = new Laya.Vector3();
                        Laya.Vector3.subtract(n.end_point, n.gold.transform.localPosition, e), Laya.Tween.to(n.pos, {
                            x: n.end_point.x,
                            y: n.end_point.y,
                            z: n.end_point.z
                        }, 70 * Laya.Vector3.scalarLength(e), Laya.Ease.linearIn, Laya.Handler.create(n, function() {
                            n.gold && (n.gold.destroyed || (n.gold.removeSelf(), n.gold.destroy(), t && t()));
                        }));
                    }
                });
                var i = a.default.getRealInRandom(180, 0);
                this.gold.transform.rotate(new Laya.Vector3(0, i, 0), !1, !1);
            }, WinGoldScript.prototype.onUpdate = function() {
                if (this.gold) {
                    this.time += Laya.timer.delta;
                    var e = 360 * Laya.timer.delta / WinGoldScript.cycle_time;
                    this.gold.transform.rotate(new Laya.Vector3(0, e, 0), !1, !1), this.scale && (this.gold.transform.localScale = this.scale), 
                    this.pos && (this.gold.transform.localPosition = this.pos);
                }
            }, WinGoldScript.cycle_time = 1e3, WinGoldScript;
        }(Laya.Script);
        n.default = o;
    }, {
        "../yunwei/RandomUtil": 99
    } ],
    88: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./WallFSM"), o = e("../sysloader/LoaderManeger"), i = function(e) {
            function FSMLeftRunning() {
                var t = e.call(this) || this;
                return FSMLeftRunning.instance = t, t;
            }
            return __extends(FSMLeftRunning, e), FSMLeftRunning.prototype.Enter = function(e) {
                e.speed = -e.speed_normal;
            }, FSMLeftRunning.prototype.Execute = function(e) {
                var t = e.sp.transform.localPosition.clone(), n = e.init_local_pos.x - e.gameCore.min_x;
                t.x > n && e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0);
            }, FSMLeftRunning.prototype.Exit = function(e) {}, FSMLeftRunning;
        }(a.FSMRunning);
        n.FSMLeftRunning = i, new i();
        var r = function(e) {
            function FSMLeftPressing() {
                var t = e.call(this) || this;
                return FSMLeftPressing.instance = t, t;
            }
            return __extends(FSMLeftPressing, e), FSMLeftPressing.prototype.Enter = function(e) {
                e.speed = -e.speed_press, o.default.instance.playSound(5002);
            }, FSMLeftPressing.prototype.Execute = function(e) {
                var t = e.sp.transform.localPosition.clone(), n = e.init_local_pos.x - e.gameCore.min_x;
                t.x > n && (e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0), 
                Math.abs(e.speed) > Math.abs(e.speed_press) / 1.5 && (e.speed = e.speed / 1e3 * 992));
            }, FSMLeftPressing.prototype.Exit = function(e) {}, FSMLeftPressing;
        }(a.FSMPressing);
        n.FSMLeftPressing = r, new r();
        var s = function(e) {
            function FSMLeftExit() {
                var t = e.call(this) || this;
                return FSMLeftExit.instance = t, t;
            }
            return __extends(FSMLeftExit, e), FSMLeftExit.prototype.Enter = function(e) {
                e.speed = e.speed_normal;
            }, FSMLeftExit.prototype.Execute = function(e) {
                e.sp.transform.localPosition.clone().x < e.init_local_pos.x ? e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0) : e.actStop();
            }, FSMLeftExit.prototype.Exit = function(e) {}, FSMLeftExit;
        }(a.FSMRunning);
        n.FSMLeftExit = s, new s();
    }, {
        "../sysloader/LoaderManeger": 72,
        "./WallFSM": 91
    } ],
    89: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./WallFSM"), o = e("../sysloader/LoaderManeger"), i = function(e) {
            function FSMRightRunning() {
                var t = e.call(this) || this;
                return FSMRightRunning.instance = t, t;
            }
            return __extends(FSMRightRunning, e), FSMRightRunning.prototype.Enter = function(e) {
                e.speed = e.speed_normal;
            }, FSMRightRunning.prototype.Execute = function(e) {
                var t = e.sp.transform.localPosition.clone(), n = e.init_local_pos.x + e.gameCore.min_x;
                t.x < n && e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0);
            }, FSMRightRunning.prototype.Exit = function(e) {}, FSMRightRunning;
        }(a.FSMRunning);
        n.FSMRightRunning = i, new i();
        var r = function(e) {
            function FSMRightPressing() {
                var t = e.call(this) || this;
                return FSMRightPressing.instance = t, t;
            }
            return __extends(FSMRightPressing, e), FSMRightPressing.prototype.Enter = function(e) {
                e.speed = e.speed_press, o.default.instance.playSound(5002);
            }, FSMRightPressing.prototype.Execute = function(e) {
                var t = e.sp.transform.localPosition.clone(), n = e.init_local_pos.x + e.gameCore.min_x;
                t.x < n && (e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0), 
                Math.abs(e.speed) > Math.abs(e.speed_press) / 1.5 && (e.speed = e.speed / 1e3 * 992));
            }, FSMRightPressing.prototype.Exit = function(e) {}, FSMRightPressing;
        }(a.FSMPressing);
        n.FSMRightPressing = r, new r();
        var s = function(e) {
            function FSMRightExit() {
                var t = e.call(this) || this;
                return FSMRightExit.instance = t, t;
            }
            return __extends(FSMRightExit, e), FSMRightExit.prototype.Enter = function(e) {
                e.speed = -e.speed_normal;
            }, FSMRightExit.prototype.Execute = function(e) {
                e.sp.transform.localPosition.clone().x > e.init_local_pos.x ? e.sp.transform.translate(new Laya.Vector3(e.speed * (Laya.timer.delta / 1e3), 0, 0), !0) : e.actStop();
            }, FSMRightExit.prototype.Exit = function(e) {}, FSMRightExit;
        }(a.FSMRunning);
        n.FSMRightExit = s, new s();
    }, {
        "../sysloader/LoaderManeger": 72,
        "./WallFSM": 91
    } ],
    90: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./WallFSM"), o = e("../sysloader/LoaderManeger"), i = function(e) {
            function FSMTopRunning() {
                var t = e.call(this) || this;
                return FSMTopRunning.instance = t, t;
            }
            return __extends(FSMTopRunning, e), FSMTopRunning.prototype.Enter = function(e) {
                e.speed = -e.speed_normal;
            }, FSMTopRunning.prototype.Execute = function(e) {
                e.sp.transform.position.clone().y > e.gameCore.min_y && e.sp.transform.translate(new Laya.Vector3(0, e.speed * (Laya.timer.delta / 1e3), 0), !1);
            }, FSMTopRunning.prototype.Exit = function(e) {}, FSMTopRunning;
        }(a.FSMRunning);
        n.FSMTopRunning = i, new i();
        var r = function(e) {
            function FSMTopPressing() {
                var t = e.call(this) || this;
                return FSMTopPressing.instance = t, t;
            }
            return __extends(FSMTopPressing, e), FSMTopPressing.prototype.Enter = function(e) {
                e.speed = -e.speed_press, o.default.instance.playSound(5019);
            }, FSMTopPressing.prototype.Execute = function(e) {
                e.sp.transform.position.clone().y > e.gameCore.min_y && (e.sp.transform.translate(new Laya.Vector3(0, e.speed * (Laya.timer.delta / 1e3), 0), !1), 
                Math.abs(e.speed) > Math.abs(e.speed_press) / 2.8 && (e.speed = e.speed / 1e3 * 985));
            }, FSMTopPressing.prototype.Exit = function(e) {}, FSMTopPressing;
        }(a.FSMPressing);
        n.FSMTopPressing = r, new r();
        var s = function(e) {
            function FSMTopExit() {
                var t = e.call(this) || this;
                return FSMTopExit.instance = t, t;
            }
            return __extends(FSMTopExit, e), FSMTopExit.prototype.Enter = function(e) {
                e.speed = e.speed_normal;
            }, FSMTopExit.prototype.Execute = function(e) {
                e.sp.transform.position.clone().y < e.init_pos.y && e.sp.transform.translate(new Laya.Vector3(0, e.speed * (Laya.timer.delta / 1e3) * 3, 0), !1);
            }, FSMTopExit.prototype.Exit = function(e) {}, FSMTopExit;
        }(a.FSMRunning);
        n.FSMTopExit = s, new s();
    }, {
        "../sysloader/LoaderManeger": 72,
        "./WallFSM": 91
    } ],
    91: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function FSMIdle() {
                FSMIdle.instance = this;
            }
            return FSMIdle.prototype.Enter = function(e) {
                e.speed = 0, e.init_pos = e.sp.transform.position.clone(), e.init_local_pos = e.sp.transform.localPosition.clone();
            }, FSMIdle.prototype.Execute = function(e) {}, FSMIdle.prototype.Exit = function(e) {}, 
            FSMIdle;
        }();
        n.FSMIdle = a, new a();
        var o = function() {
            function FSMRunning() {
                FSMRunning.instance = this;
            }
            return FSMRunning.prototype.Enter = function(e) {}, FSMRunning.prototype.Execute = function(e) {}, 
            FSMRunning.prototype.Exit = function(e) {}, FSMRunning;
        }();
        n.FSMRunning = o, new o();
        var i = function() {
            function FSMPressing() {
                FSMPressing.instance = this;
            }
            return FSMPressing.prototype.Enter = function(e) {}, FSMPressing.prototype.Execute = function(e) {}, 
            FSMPressing.prototype.Exit = function(e) {}, FSMPressing;
        }();
        n.FSMPressing = i, new i();
        var r = function() {
            function FSMExit() {
                FSMExit.instance = this;
            }
            return FSMExit.prototype.Enter = function(e) {}, FSMExit.prototype.Execute = function(e) {}, 
            FSMExit.prototype.Exit = function(e) {}, FSMExit;
        }();
        n.FSMExit = r, new r();
        var s = function() {
            function FSMStop() {
                FSMStop.instance = this;
            }
            return FSMStop.prototype.Enter = function(e) {
                e.speed = 0, e.sp.transform.localPosition = e.init_local_pos;
            }, FSMStop.prototype.Execute = function(e) {}, FSMStop.prototype.Exit = function(e) {}, 
            FSMStop;
        }();
        n.FSMStop = s, new s();
    }, {} ],
    92: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../yunwei/FSM"), o = e("../sysfactory/FCore"), i = e("./WallFSM"), r = e("./LeftWallFSM"), s = e("./RightWallFSM"), l = e("./TopWallFSM"), c = function(e) {
            function WallScript() {
                var t = e.call(this) || this;
                return t.progress_cup = 1, t.progress_cur = 0, t.speed = 0, t.speed_normal = 0, 
                t.speed_press = 0, t.status = "", t.mStateMachine = new a.StateMachine(t), t;
            }
            return __extends(WallScript, e), WallScript.prototype.GetFSM = function() {
                return this.mStateMachine;
            }, WallScript.prototype.onEnable = function() {
                this.sp = this.owner;
            }, WallScript.prototype.init = function(e, t, n, a, r, s, l) {
                this.gameCore = e, this.main_scene = t, this.world = n, this.main_camera = a, this.type = r, 
                this.speed_normal = s, this.speed_press = l, this.body = o.default.getCABody(this.sp), 
                this.mStateMachine.ChangeState(i.FSMIdle.instance);
            }, WallScript.prototype.onUpdate = function() {
                this.mStateMachine.Update();
            }, WallScript.prototype.actRunning = function() {
                switch (this.status = "running", this.type) {
                  case "left":
                    !this.mStateMachine.isInState(r.FSMLeftRunning.instance) && this.mStateMachine.ChangeState(r.FSMLeftRunning.instance);
                    break;

                  case "right":
                    !this.mStateMachine.isInState(s.FSMRightRunning.instance) && this.mStateMachine.ChangeState(s.FSMRightRunning.instance);
                    break;

                  case "top":
                    !this.mStateMachine.isInState(l.FSMTopRunning.instance) && this.mStateMachine.ChangeState(l.FSMTopRunning.instance);
                }
            }, WallScript.prototype.actPressing = function() {
                switch (this.status = "pressing", this.type) {
                  case "left":
                    !this.mStateMachine.isInState(r.FSMLeftPressing.instance) && this.mStateMachine.ChangeState(r.FSMLeftPressing.instance);
                    break;

                  case "right":
                    !this.mStateMachine.isInState(s.FSMRightPressing.instance) && this.mStateMachine.ChangeState(s.FSMRightPressing.instance);
                    break;

                  case "top":
                    !this.mStateMachine.isInState(l.FSMTopPressing.instance) && this.mStateMachine.ChangeState(l.FSMTopPressing.instance);
                }
            }, WallScript.prototype.actExit = function() {
                switch (this.status = "exit", this.type) {
                  case "left":
                    !this.mStateMachine.isInState(r.FSMLeftExit.instance) && this.mStateMachine.ChangeState(r.FSMLeftExit.instance);
                    break;

                  case "right":
                    !this.mStateMachine.isInState(s.FSMRightExit.instance) && this.mStateMachine.ChangeState(s.FSMRightExit.instance);
                    break;

                  case "top":
                    !this.mStateMachine.isInState(l.FSMTopExit.instance) && this.mStateMachine.ChangeState(l.FSMTopExit.instance);
                }
            }, WallScript.prototype.actStop = function() {
                this.status = "stop", !this.mStateMachine.isInState(i.FSMStop.instance) && this.mStateMachine.ChangeState(i.FSMStop.instance);
            }, WallScript;
        }(Laya.Script3D);
        n.default = c;
    }, {
        "../sysfactory/FCore": 66,
        "../yunwei/FSM": 97,
        "./LeftWallFSM": 88,
        "./RightWallFSM": 89,
        "./TopWallFSM": 90,
        "./WallFSM": 91
    } ],
    93: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = Laya.ClassUtils.regClass;
        !function(e) {
            !function(e) {
                var t = function(e) {
                    function CheckInUI() {
                        return e.call(this) || this;
                    }
                    return __extends(CheckInUI, e), CheckInUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/CheckIn");
                    }, CheckInUI;
                }(Laya.Scene);
                e.CheckInUI = t, a("ui.scene.CheckInUI", t);
                var n = function(e) {
                    function ExitPageUI() {
                        return e.call(this) || this;
                    }
                    return __extends(ExitPageUI, e), ExitPageUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/ExitPage");
                    }, ExitPageUI;
                }(Laya.Scene);
                e.ExitPageUI = n, a("ui.scene.ExitPageUI", n);
                var o = function(e) {
                    function ExportPageUI() {
                        return e.call(this) || this;
                    }
                    return __extends(ExportPageUI, e), ExportPageUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/ExportPage");
                    }, ExportPageUI;
                }(Laya.Scene);
                e.ExportPageUI = o, a("ui.scene.ExportPageUI", o);
                var i = function(e) {
                    function FreeUpgradeUI() {
                        return e.call(this) || this;
                    }
                    return __extends(FreeUpgradeUI, e), FreeUpgradeUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/FreeUpgrade");
                    }, FreeUpgradeUI;
                }(Laya.Scene);
                e.FreeUpgradeUI = i, a("ui.scene.FreeUpgradeUI", i);
                var r = function(e) {
                    function GameUI() {
                        return e.call(this) || this;
                    }
                    return __extends(GameUI, e), GameUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/Game");
                    }, GameUI;
                }(Laya.Scene);
                e.GameUI = r, a("ui.scene.GameUI", r);
                var s = function(e) {
                    function GoldfewUI() {
                        return e.call(this) || this;
                    }
                    return __extends(GoldfewUI, e), GoldfewUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/Goldfew");
                    }, GoldfewUI;
                }(Laya.Scene);
                e.GoldfewUI = s, a("ui.scene.GoldfewUI", s);
                var l = function(e) {
                    function HomeUI() {
                        return e.call(this) || this;
                    }
                    return __extends(HomeUI, e), HomeUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/Home");
                    }, HomeUI;
                }(Laya.Scene);
                e.HomeUI = l, a("ui.scene.HomeUI", l);
                var c = function(e) {
                    function LoadingUI() {
                        return e.call(this) || this;
                    }
                    return __extends(LoadingUI, e), LoadingUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/Loading");
                    }, LoadingUI;
                }(Laya.Scene);
                e.LoadingUI = c, a("ui.scene.LoadingUI", c);
                var d = function(e) {
                    function MoreGameUI() {
                        return e.call(this) || this;
                    }
                    return __extends(MoreGameUI, e), MoreGameUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/MoreGame");
                    }, MoreGameUI;
                }(Laya.Scene);
                e.MoreGameUI = d, a("ui.scene.MoreGameUI", d);
                var u = function(e) {
                    function NewUnlockUI() {
                        return e.call(this) || this;
                    }
                    return __extends(NewUnlockUI, e), NewUnlockUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/NewUnlock");
                    }, NewUnlockUI;
                }(Laya.Scene);
                e.NewUnlockUI = u, a("ui.scene.NewUnlockUI", u);
                var h = function(e) {
                    function OffTimeUI() {
                        return e.call(this) || this;
                    }
                    return __extends(OffTimeUI, e), OffTimeUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/OffTime");
                    }, OffTimeUI;
                }(Laya.Scene);
                e.OffTimeUI = h, a("ui.scene.OffTimeUI", h);
                var f = function(e) {
                    function ResultVictoryUI() {
                        return e.call(this) || this;
                    }
                    return __extends(ResultVictoryUI, e), ResultVictoryUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/ResultVictory");
                    }, ResultVictoryUI;
                }(Laya.Scene);
                e.ResultVictoryUI = f, a("ui.scene.ResultVictoryUI", f);
                var p = function(e) {
                    function TryOutUI() {
                        return e.call(this) || this;
                    }
                    return __extends(TryOutUI, e), TryOutUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/TryOut");
                    }, TryOutUI;
                }(Laya.Scene);
                e.TryOutUI = p, a("ui.scene.TryOutUI", p);
                var y = function(e) {
                    function VideoUnlockUI() {
                        return e.call(this) || this;
                    }
                    return __extends(VideoUnlockUI, e), VideoUnlockUI.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.loadScene("scene/VideoUnlock");
                    }, VideoUnlockUI;
                }(Laya.Scene);
                e.VideoUnlockUI = y, a("ui.scene.VideoUnlockUI", y);
            }(e.scene || (e.scene = {}));
        }(n.ui || (n.ui = {}));
    }, {} ],
    94: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function CannonUtils() {}
            return CannonUtils.layaVector = function(e) {
                return new Laya.Vector3(e.x, e.y, e.z);
            }, CannonUtils.layaQuat = function(e) {
                return new Laya.Quaternion(e.x, e.y, e.z, e.w);
            }, CannonUtils.cannonVector = function(e) {
                return new CANNON.Vec3(e.x, e.y, e.z);
            }, CannonUtils.cannonQuat = function(e) {
                return new CANNON.Quaternion(e.x, e.y, e.z, e.w);
            }, CannonUtils;
        }();
        n.default = a;
    }, {} ],
    95: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function ColorUtil() {}
            return ColorUtil.createFilter = function(e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = 1);
                var a = ColorUtil.ColorFilterMat(e, t, n);
                return [ new Laya.ColorFilter(a) ];
            }, ColorUtil.ColorHexToRgba = function(e) {
                return e ? {
                    r: parseInt("0x" + e.slice(1, 3)),
                    g: parseInt("0x" + e.slice(3, 5)),
                    b: parseInt("0x" + e.slice(5, 7))
                } : null;
            }, ColorUtil.ColorFilterMat = function(e, t, n) {
                void 0 === t && (t = 1), void 0 === n && (n = 1);
                var a = ColorUtil.ColorHexToRgba(e);
                return [ a.r / 255, 0, 0, 0, n, 0, a.g / 255, 0, 0, n, 0, 0, a.b / 255, 0, n, 0, 0, 0, t, 0 ];
            }, ColorUtil.createFilterByHSV = function(e, t) {
                void 0 === t && (t = 1);
                var n = ColorUtil.ColorFilterMatByVec4(this.hsvToRgb(e), t);
                return [ new Laya.ColorFilter(n) ];
            }, ColorUtil.ColorFilterMatByVec4 = function(e, t) {
                return void 0 === t && (t = 1), [ e.x / 255, 0, 0, 0, t, 0, e.y / 255, 0, 0, t, 0, 0, e.z / 255, 0, t, 0, 0, 0, e.w / 255, 0 ];
            }, ColorUtil.ColorToAlbedo = function(e, t) {
                void 0 === t && (t = 1);
                var n = ColorUtil.ColorHexToRgba(e);
                return new Laya.Vector4(n.r / 255, n.g / 255, n.b / 255, t);
            }, ColorUtil.setColorByRate = function(e, t, n, a) {
                var o = e.meshRenderer.material;
                o || (o = new Laya.BlinnPhongMaterial(), e.meshRenderer.material = o, o.albedoIntensity = 1, 
                o.specularColor = new Laya.Vector4(100 / 255, 100 / 255, 100 / 255, 1), o.shininess = .13);
                var i = ColorUtil.ColorToAlbedo(t, 1), r = ColorUtil.ColorToAlbedo(n, 1), s = new Laya.Vector4();
                Laya.Vector4.subtract(r, i, s), Laya.Vector4.scale(s, a, s), Laya.Vector4.add(i, s, s), 
                o.albedoColor = s;
            }, ColorUtil.hsvToRgb = function(e) {
                var t = e.x, n = e.y, a = e.z;
                n /= 100, a /= 100;
                var o = 0, i = 0, r = 0, s = Math.round(t / 60 % 6), l = t / 60 - s, c = a * (1 - n), d = a * (1 - l * n), u = a * (1 - (1 - l) * n);
                switch (s) {
                  case 0:
                    o = a, i = u, r = c;
                    break;

                  case 1:
                    o = d, i = a, r = c;
                    break;

                  case 2:
                    o = c, i = a, r = u;
                    break;

                  case 3:
                    o = c, i = d, r = a;
                    break;

                  case 4:
                    o = u, i = c, r = a;
                    break;

                  case 5:
                    o = a, i = c, r = d;
                }
                return o = Math.round(255 * o), i = Math.round(255 * i), r = Math.round(255 * r), 
                new Laya.Vector4(o, i, r, e.w);
            }, ColorUtil.createGlowFilter = function(e, t, n, a) {
                return [ new Laya.GlowFilter(e, t, n, a) ];
            }, ColorUtil;
        }();
        n.default = a;
    }, {} ],
    96: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function FPSUtil() {}
            return FPSUtil.clear = function() {
                this.fps_arr && this.fps_arr.slice(0, this.fps_arr.length - 1);
            }, FPSUtil.pushFPS = function() {
                var e = 1e3 / Laya.timer.delta;
                Laya.timer.delta < 250 && (this.fps_arr || (this.fps_arr = new Array()), this.fps_arr.length >= this.max_length && this.fps_arr.shift(), 
                this.fps_arr.push(e)), FPSUtil.getAvgFPS() < FPSUtil.low_performance_limit_fps && (FPSUtil.is_low_performance = !0);
            }, FPSUtil.getAvgFPS = function() {
                if (!this.fps_arr) return 60;
                if (this.fps_arr.length < this.max_length) return 60;
                var e = 0;
                for (var t in this.fps_arr) e += this.fps_arr[t];
                return e /= this.fps_arr.length;
            }, FPSUtil.getDelta = function() {
                var e = 1e3 / this.getAvgFPS();
                return e > 50 ? 50 : e;
            }, FPSUtil.max_length = 10, FPSUtil.low_performance_limit_fps = 35, FPSUtil.is_low_performance = !1, 
            FPSUtil;
        }();
        n.default = a;
    }, {} ],
    97: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function StateMachine(e) {
                this.m_pOwner = e;
            }
            return StateMachine.prototype.SetCurrentState = function(e) {
                this.m_pCurrentState = e;
            }, StateMachine.prototype.SetGlobalState = function(e) {
                this.m_pGlobalState = e;
            }, StateMachine.prototype.SetPreviousState = function(e) {
                this.m_pPreviousState = e;
            }, StateMachine.prototype.Update = function() {
                null != this.m_pGlobalState && this.m_pGlobalState.Execute(this.m_pOwner), null != this.m_pCurrentState && this.m_pCurrentState.Execute(this.m_pOwner);
            }, StateMachine.prototype.ChangeState = function(e) {
                null != e && (null != this.m_pCurrentState && (this.m_pPreviousState = this.m_pCurrentState, 
                this.m_pCurrentState.Exit(this.m_pOwner)), this.m_pCurrentState = e, this.m_pCurrentState.Enter(this.m_pOwner));
            }, StateMachine.prototype.RevertToPreViousState = function() {
                this.ChangeState(this.m_pPreviousState);
            }, StateMachine.prototype.getCurrentState = function() {
                return this.m_pCurrentState;
            }, StateMachine.prototype.getPreviousState = function() {
                return this.m_pPreviousState;
            }, StateMachine.prototype.isInState = function(e) {
                return e.constructor == this.m_pCurrentState.constructor;
            }, StateMachine.prototype.isPreState = function(e) {
                return e.constructor == this.m_pPreviousState.constructor;
            }, StateMachine;
        }();
        n.StateMachine = a;
        var o = function() {
            function EnterMineAndDigForNugget() {
                EnterMineAndDigForNugget.instance = this;
            }
            return EnterMineAndDigForNugget.prototype.Enter = function(e) {}, EnterMineAndDigForNugget.prototype.Execute = function(e) {
                e.GetFSM().ChangeState(i.instance);
            }, EnterMineAndDigForNugget.prototype.Exit = function(e) {}, EnterMineAndDigForNugget;
        }();
        n.EnterMineAndDigForNugget = o;
        var i = function() {
            function VisitBankAndDepositGold() {
                VisitBankAndDepositGold.instance = this;
            }
            return VisitBankAndDepositGold.prototype.Enter = function(e) {}, VisitBankAndDepositGold.prototype.Execute = function(e) {}, 
            VisitBankAndDepositGold.prototype.Exit = function(e) {}, VisitBankAndDepositGold;
        }();
        n.VisitBankAndDepositGold = i;
        var r = function(e) {
            function Miner() {
                var t = e.call(this) || this;
                return t.mStateMachine = new a(t), t.mStateMachine.SetCurrentState(o.instance), 
                t.mStateMachine.SetGlobalState(i.instance), t;
            }
            return __extends(Miner, e), Miner.prototype.onUpdate = function() {
                this.mStateMachine.Update();
            }, Miner.prototype.GetFSM = function() {
                return this.mStateMachine;
            }, Miner.prototype.onEnable = function() {
                this.sp3 = this.owner;
            }, Miner.prototype.onDisable = function() {}, Miner;
        }(Laya.Script3D);
        n.default = r;
    }, {} ],
    98: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function MeshUtil() {}
            return MeshUtil.RecalculateNormals = function(e, t) {
                null == t && (t = 8);
                for (var n = e._indexBuffer.getData(), a = e._vertexBuffers[0].getData(), o = a.length / t, i = 0; i < o; i++) this.setNormals(a, i, new Laya.Vector3(0, 0, 0));
                for (i = 0; i < n.length; i += 3) {
                    var r = this.getVertex(a, n[i]), s = this.getVertex(a, n[i + 1]), l = this.getVertex(a, n[i + 2]), c = new Laya.Vector3(), d = new Laya.Vector3();
                    Laya.Vector3.subtract(s, r, c), Laya.Vector3.subtract(l, r, d);
                    var u = new Laya.Vector3();
                    Laya.Vector3.cross(d, c, u), Laya.Vector3.normalize(u, u), this.addNormals(a, n[i], u), 
                    this.addNormals(a, n[i + 1], u), this.addNormals(a, n[i + 2], u);
                }
                for (i = 0; i < o; i++) {
                    u = this.getNormals(a, i);
                    Laya.Vector3.normalize(u, u), this.setNormals(a, i, u);
                }
                e._vertexBuffers[0].setData(a);
            }, MeshUtil.getVertex = function(e, t, n) {
                null == n && (n = 8);
                var a = e[t * n], o = e[t * n + 1], i = e[t * n + 2];
                return new Laya.Vector3(a, o, i);
            }, MeshUtil.setVertex = function(e, t, n, a) {
                null == a && (a = 8), e[t * a + 0] = n.x, e[t * a + 1] = n.y, e[t * a + 2] = n.z;
            }, MeshUtil.getNormals = function(e, t, n) {
                null == n && (n = 8);
                var a = e[t * n + 3], o = e[t * n + 4], i = e[t * n + 5];
                return new Laya.Vector3(a, o, i);
            }, MeshUtil.setNormals = function(e, t, n, a) {
                null == a && (a = 8), e[t * a + 3] = n.x, e[t * a + 4] = n.y, e[t * a + 5] = n.z;
            }, MeshUtil.addNormals = function(e, t, n, a) {
                null == a && (a = 8), e[t * a + 3] = e[t * a + 3] + n.x, e[t * a + 4] = e[t * a + 4] + n.y, 
                e[t * a + 5] = e[t * a + 5] + n.z;
            }, MeshUtil.getUV = function(e, t, n) {
                null == n && (n = 8);
                var a = e[t * n + n - 2], o = e[t * n + n - 1];
                return new Laya.Vector2(a, o);
            }, MeshUtil.setUV = function(e, t, n, a) {
                null == a && (a = 8), e[t * a + a - 2] = n.x, e[t * a + a - 1] = n.y;
            }, MeshUtil.newMeshVertex = function(e, t, n, a, o, i, r, s) {
                return [ e, t, n, a, o, i, r, s ];
            }, MeshUtil.RecalculateBoundBox = function(e, t) {
                null == t && (t = 8);
                for (var n = e._vertexBuffers[0].getData(), a = n.length / t, o = new Laya.Vector3(9999, 9999, 9999), i = new Laya.Vector3(-9999, -9999, -9999), r = 0; r < a; r++) {
                    var s = this.getVertex(n, r, t);
                    s.x < o.x && (o.x = s.x), s.y < o.y && (o.y = s.y), s.z < o.z && (o.z = s.z), s.x > i.x && (i.x = s.x), 
                    s.y > i.y && (i.y = s.y), s.z > i.z && (i.z = s.z);
                }
                e.bounds._boundBox.min = o, e.bounds._boundBox.max = i;
                var l = new Laya.Vector3();
                Laya.Vector3.lerp(o, i, .5, l), e.bounds._center = l;
                var c = new Laya.Vector3();
                Laya.Vector3.subtract(i, o, c), Laya.Vector3.scale(c, .5, c), e.bounds._extent = c;
            }, MeshUtil.resetCenter = function(e, t) {
                null == t && (t = 8);
                var n = e.meshFilter.sharedMesh;
                this.RecalculateBoundBox(n, t);
                var a = new Laya.Vector3();
                Laya.Vector3.subtract(n.bounds.getCenter(), e.transform.position, a), a.y = -a.y;
                for (var o = n._vertexBuffers[0].getData(), i = o.length / t, r = 0; r < i; r++) {
                    var s = this.getVertex(o, r, t);
                    Laya.Vector3.add(s, a, s), this.setVertex(o, r, s, t);
                }
                n._vertexBuffers[0].setData(o), e.transform.position = n.bounds.getCenter().clone();
            }, MeshUtil;
        }();
        n.default = a;
    }, {} ],
    99: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function RandomUtil() {}
            return RandomUtil.getIntegerInND = function(e, t, n, a) {
                var o = RandomUtil.getNumberInNormalDistribution(e, t);
                return o = (o = o > n ? n : o) < a ? a : o, Math.round(o);
            }, RandomUtil.getRealInND = function(e, t, n, a) {
                var o = RandomUtil.getNumberInNormalDistribution(e, t);
                return o = (o = o > n ? n : o) < a ? a : o;
            }, RandomUtil.getNumberInNormalDistribution = function(e, t) {
                return e + RandomUtil.uniform2NormalDistribution() * t;
            }, RandomUtil.uniform2NormalDistribution = function() {
                for (var e = 0, t = 0; t < 12; t++) e += Math.random();
                return e - 6;
            }, RandomUtil.getIntegerInRandom = function(e, t) {
                return Math.round(RandomUtil.getRealInRandom(e, t));
            }, RandomUtil.getRealInRandom = function(e, t) {
                var n = e - t;
                return t + Math.random() * n;
            }, RandomUtil.getBoolInRandom = function(e) {
                return e > Math.random();
            }, RandomUtil;
        }();
        n.default = a;
    }, {} ],
    100: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function StageUtil() {}
            return StageUtil.setScale = function(e) {
                e.scale(Laya.stage.width / 640, Laya.stage.width / 640);
            }, StageUtil.getScaleRate = function() {
                return Laya.stage.width / 640;
            }, StageUtil.mouseX = function() {
                return Laya.stage.mouseX / StageUtil.getScaleRate();
            }, StageUtil.mouseY = function() {
                return Laya.stage.mouseY / StageUtil.getScaleRate();
            }, StageUtil.height = function() {
                return Laya.stage.height / StageUtil.getScaleRate();
            }, StageUtil.width = function() {
                return Laya.stage.width / StageUtil.getScaleRate();
            }, StageUtil.localToGlobal = function(e, t) {
                var n = e.localToGlobal(t, !1);
                return n.x = n.x / StageUtil.getScaleRate(), n.y = n.y / StageUtil.getScaleRate(), 
                n;
            }, StageUtil;
        }();
        n.default = a;
    }, {} ],
    101: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./StageUtil"), o = function() {
            function TransformUtil() {}
            return TransformUtil.WorldToScreen2 = function(e, t) {
                var n = this.InverseTransformPoint(e.transform, t).z, o = new Laya.Vector3();
                return e.viewport.project(t, e.projectionViewMatrix, o), new Laya.Vector3(o.x / a.default.getScaleRate(), o.y / a.default.getScaleRate(), n);
            }, TransformUtil.ScreenToWorld = function(e, t) {
                var n = .5 * e.fieldOfView * Math.PI / 180, a = t.z * Math.tan(n), o = a * e.aspectRatio, i = this.GetLowerLeft(e.transform, t.z, o, a), r = this.GetScreenScale(o, a), s = new Laya.Vector3(), l = this.InverseTransformPoint(e.transform, i);
                return s = new Laya.Vector3(-t.x / r.x, t.y / r.y, 0), Laya.Vector3.add(l, s, s), 
                s = this.TransformPoint(e.transform, s);
            }, TransformUtil.GetScreenScale = function(e, t) {
                var n = new Laya.Vector3();
                return n.x = Laya.stage.width / e / 2, n.y = Laya.stage.height / t / 2, n;
            }, TransformUtil.GetLowerLeft = function(e, t, n, a) {
                var o = new Laya.Vector3(), i = new Laya.Vector3();
                e.getRight(i), Laya.Vector3.normalize(i, i);
                var r = new Laya.Vector3(i.x * n, i.y * n, i.z * n);
                Laya.Vector3.add(e.position, r, o);
                var s = new Laya.Vector3();
                e.getUp(s), Laya.Vector3.normalize(s, s);
                var l = new Laya.Vector3(s.x * a, s.y * a, s.z * a);
                Laya.Vector3.subtract(o, l, o);
                var c = new Laya.Vector3();
                e.getForward(c), Laya.Vector3.normalize(c, c);
                var d = new Laya.Vector3(c.x * t, c.y * t, c.z * t);
                return Laya.Vector3.subtract(o, d, o), o;
            }, TransformUtil.InverseTransformPoint = function(e, t) {
                var n = new Laya.Vector3();
                e.getRight(n);
                var a = new Laya.Vector3();
                e.getUp(a);
                var o = new Laya.Vector3();
                e.getForward(o);
                var i = new Laya.Vector3(-o.x, -o.y, -o.z), r = this.ProjectDistance(t, e.position, n), s = this.ProjectDistance(t, e.position, a), l = this.ProjectDistance(t, e.position, i);
                return new Laya.Vector3(r, s, l);
            }, TransformUtil.TransformPoint = function(e, t) {
                var n = new Laya.Vector3();
                return Laya.Vector3.transformQuat(t, e.rotation, n), Laya.Vector3.add(n, e.position, n), 
                n;
            }, TransformUtil.ProjectDistance = function(e, t, n) {
                var a = new Laya.Vector3();
                Laya.Vector3.subtract(e, t, a);
                var o = this.Angle2(a, n) * Math.PI / 180, i = Laya.Vector3.distance(e, t);
                return i *= Math.cos(o);
            }, TransformUtil.Angle2 = function(e, t) {
                var n = e.x * t.x + e.y * t.y + e.z * t.z, a = Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z), o = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z), i = 0;
                if (a * o != 0) i = n / (a * o);
                return i < -1 && (i = -1), i > 1 && (i = 1), 180 * Math.acos(i) / Math.PI;
            }, TransformUtil.unityToLayaPos = function(e) {
                return new Laya.Vector3(-e.x, e.y, e.z);
            }, TransformUtil.unityToLayaRE = function(e) {
                return new Laya.Vector3(-e.x, 180 - e.y, e.z);
            }, TransformUtil;
        }();
        n.default = o;
    }, {
        "./StageUtil": 100
    } ],
    102: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function() {
            function TweenExt() {}
            return TweenExt.init = function() {
                for (var e in TweenExt) "init" !== e && (laya.utils.Tween.prototype[e] = TweenExt[e]);
            }, TweenExt._initProps = function(e, t, n) {
                for (var a in t) {
                    if ("number" == typeof e[a]) {
                        var o = n ? e[a] : t[a], i = n ? t[a] : e[a];
                        this._props.push([ a, o, i - o ]), n || (e[a] = o);
                    }
                    if (e[a] instanceof Laya.Vector4) {
                        var r = new Laya.Vector4(), s = n ? e[a].clone() : t[a], l = n ? t[a] : e[a].clone();
                        s instanceof Laya.Vector4 || (s = new Laya.Vector4(s.x, s.y, s.z, s.w)), l = new Laya.Vector4(l.x, l.y, l.z, l.w), 
                        Laya.Vector4.subtract(l, s, r), this._props.push([ a, s, r, l ]), n || (e[a] = s);
                    }
                    if (e.transform && e.transform[a] instanceof Laya.Vector3) {
                        var c = new Laya.Vector3(), d = n ? e.transform[a].clone() : t[a], u = n ? t[a] : e.transform[a].clone();
                        d instanceof Laya.Vector3 || (d = new Laya.Vector3(d.x, d.y, d.z)), u = new Laya.Vector3(u.x, u.y, u.z), 
                        Laya.Vector3.subtract(u, d, c), this._props.push([ a, d, c, u ]), n || (e[a] = d);
                    }
                }
            }, TweenExt._updateEase = function(e) {
                var t = this._target;
                if (t) {
                    if (t.destroyed) return this.clearTween(t);
                    var n = this._usedTimer = e - this._startTimer - this._delay;
                    if (!(n < 0)) {
                        if (n >= this._duration) return this.complete();
                        for (var a = n > 0 ? this._ease(n, 0, 1, this._duration) : 0, o = this._props, i = 0, r = o.length; i < r; i++) {
                            var s = o[i];
                            if ("number" == typeof t[s[0]] && (t[s[0]] = s[1] + a * s[2]), t[s[0]] instanceof Laya.Vector4) {
                                var l = s[1].x + a * s[2].x, c = s[1].y + a * s[2].y, d = s[1].z + a * s[2].z, u = s[1].w + a * s[2].w;
                                t[s[0]] = new Laya.Vector4(l, c, d, u);
                            }
                            if (t[s[0]] instanceof Laya.Vector3) {
                                l = s[1].x + a * s[2].x, c = s[1].y + a * s[2].y, d = s[1].z + a * s[2].z;
                                t[s[0]] = new Laya.Vector3(l, c, d);
                            }
                            if (t.transform && t.transform[s[0]] instanceof Laya.Vector3) {
                                l = s[1].x + a * s[2].x, c = s[1].y + a * s[2].y, d = s[1].z + a * s[2].z;
                                t.transform[s[0]] = new Laya.Vector3(l, c, d);
                            }
                        }
                        this.update && this.update.run();
                    }
                }
            }, TweenExt.complete = function() {
                if (this._target) {
                    Laya.timer.runTimer(this, this.firstStart);
                    var e = this._complete;
                    this.completData(), this.update && this.update.run(), this._count++, 0 != this.repeat && this._count >= this.repeat ? (this.clear(), 
                    e && e.run()) : this.restart();
                }
            }, TweenExt.completData = function() {
                for (var e = this._target, t = this._props, n = 0, a = t.length; n < a; n++) {
                    var o = t[n];
                    "number" == typeof e[o[0]] && (e[o[0]] = o[1] + o[2]), e[o[0]] instanceof Laya.Vector4 && (e[o[0]] = o[3]), 
                    e[o[0]] instanceof Laya.Vector3 && (e[o[0]] = o[3]), e.transform && e.transform[o[0]] instanceof Laya.Vector3 && (e.transform[o[0]] = o[3]);
                }
            }, TweenExt;
        }();
        n.TweenExt = a;
    }, {} ],
    103: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./BlendShapeScriptv2"), o = e("./BlendShapeUtilsv2"), i = e("../MeshUtil"), r = e("./BlendshapeModel"), s = function() {
            function BlendShape3Dv2() {
                this.type = 0, this.bs_list = new Array(), this.w_list = new Array(), this.type = BlendShape3Dv2.TYPE_NORMAL;
            }
            return BlendShape3Dv2.create = function(e, t, n, s) {
                new Date().getTime();
                var l = new BlendShape3Dv2();
                null != s && (l.type = s), l.root_sp3 = e, l.bs_list.push(new r.default()), l.w_list.push(0);
                for (var c = 0 == l.type ? 4 : 2, d = e.meshFilter.sharedMesh.vertexCount, u = e.meshFilter.sharedMesh._vertexBuffers[0].getData(), h = 0; h < c; h++) {
                    l.w_list.push(0);
                    var f = 3 * (n + h * d);
                    "8wheel_wheel_6" == e.name && console.log(e.name + ": ");
                    var p = r.default.createByBuffer(t, f, d, u);
                    l.bs_list.push(p);
                }
                return l.des_sp3 = o.default.copySprite3D(e), e.parent.active = !1, i.default.RecalculateNormals(l.des_sp3.meshFilter.sharedMesh), 
                l.des_sp3.addComponent(a.default).setBlendShape3D(l), l;
            }, BlendShape3Dv2.prototype.setWByXY = function(e, t) {
                this.setWByY(t, 1, 2), e > 0 && (this.getBoundsMax(0).x < .1 ? this.setWByLeftX(-e, 3, 4) : this.setWByRightX(e, 3, 4)), 
                o.default.BSCompute(this.des_sp3, this.root_sp3, this.bs_list, this.w_list, 5);
            }, BlendShape3Dv2.prototype.setWByY = function(e, t, n) {
                var a = this.getBoundsMax(0).y - this.getBoundsMax(t).y, o = this.getBoundsMax(n).y - a, i = this.getBoundsMax(t).y - o;
                e > this.getBoundsMax(0).y ? (this.w_list[t] = 0, this.w_list[n] = 0) : e > this.getBoundsMax(t).y ? (this.w_list[t] = 1 - (e - this.getBoundsMax(t).y) / a, 
                this.w_list[n] = 0) : e > o ? (this.w_list[t] = 1, this.w_list[n] = 1 - (e - o) / i) : (this.w_list[t] = 1, 
                this.w_list[n] = 1);
            }, BlendShape3Dv2.prototype.setWByLeftX = function(e, t, n) {
                this.getBoundsMin(0).x, this.getBoundsMin(t).x, this.getBoundsMin(n).x;
                var a = this.getBoundsMin(0).x - this.getBoundsMin(t).x, o = this.getBoundsMin(n).x - a, i = this.getBoundsMin(t).x - o;
                e < this.getBoundsMin(0).x ? (this.w_list[t] = 0, this.w_list[n] = 0) : e < this.getBoundsMin(t).x ? (this.w_list[t] = 1 - (e - this.getBoundsMin(t).x) / a, 
                this.w_list[n] = 0) : e < o ? (this.w_list[t] = 1, this.w_list[n] = 1 - (e - o) / i) : (this.w_list[t] = 1, 
                this.w_list[n] = 1);
            }, BlendShape3Dv2.prototype.setWByRightX = function(e, t, n) {
                "8wheel_wheel_6" == this.root_sp3.name && console.log(this.root_sp3.name + ": " + this.w_list[1], this.w_list[2], this.w_list[3], this.w_list[4]);
                var a = this.getBoundsMax(0).x, o = this.getBoundsMax(t).x, i = a - o, r = this.getBoundsMax(n).x - i, s = o - r;
                e > a ? (this.w_list[t] = 0, this.w_list[n] = 0) : e > o ? (this.w_list[t] = 1 - (e - o) / i, 
                this.w_list[n] = 0) : e > r ? (this.w_list[t] = 1, this.w_list[n] = 1 - (e - r) / s) : (this.w_list[t] = 1, 
                this.w_list[n] = 1);
            }, BlendShape3Dv2.prototype.setWByLeftXParallel = function(e, t, n) {
                var a = this.getBoundsMin(0).x - this.getBoundsMin(n).x;
                e < this.getBoundsMin(0).x ? (this.w_list[t] = 0, this.w_list[n] = 0) : e < this.getBoundsMin(n).x ? (this.w_list[t] = 1 - (e - this.getBoundsMin(n).x) / a, 
                this.w_list[n] = 1 - (e - this.getBoundsMin(n).x) / a) : (this.w_list[t] = 1, this.w_list[n] = 1);
            }, BlendShape3Dv2.prototype.getBoundsMax = function(e) {
                return 0 == e ? this.root_sp3.meshFilter.sharedMesh.bounds.getMax() : this.bs_list[e].bounds_max;
            }, BlendShape3Dv2.prototype.getBoundsMin = function(e) {
                return 0 == e ? this.root_sp3.meshFilter.sharedMesh.bounds.getMin() : this.bs_list[e].bounds_min;
            }, BlendShape3Dv2.TYPE_NORMAL = 0, BlendShape3Dv2;
        }();
        n.default = s;
    }, {
        "../MeshUtil": 98,
        "./BlendShapeScriptv2": 104,
        "./BlendShapeUtilsv2": 105,
        "./BlendshapeModel": 106
    } ],
    104: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function BlendShapeScriptv2() {
                return e.call(this) || this;
            }
            return __extends(BlendShapeScriptv2, e), BlendShapeScriptv2.prototype.onEnable = function() {
                this.sp3 = this.owner;
            }, BlendShapeScriptv2.prototype.onDisable = function() {}, BlendShapeScriptv2.prototype.setBlendShape3D = function(e) {
                this.mBlendShape3D = e;
            }, BlendShapeScriptv2;
        }(Laya.Script3D);
        n.default = a;
    }, {} ],
    105: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../MeshUtil"), o = function() {
            function BlendShapeUtilsv2() {}
            return BlendShapeUtilsv2.BSCompute = function(e, t, n, a, o) {
                var i = e.meshFilter.sharedMesh._vertexBuffers[0].getData(), r = t.meshFilter.sharedMesh._vertexBuffers[0].getData();
                this.coreV2(n, a, o, i, r), e.meshFilter.sharedMesh._vertexBuffers[0].setData(i);
            }, BlendShapeUtilsv2.coreV2 = function(e, t, n, a, o) {
                for (var i = 0; i < a.length / 8; i++) {
                    var r = i * n, s = o[r], l = o[r + 1], c = o[r + 2];
                    t[1] < 1 ? (s += e[1].points[i].x * t[1], l += e[1].points[i].y * t[1], c += e[1].points[i].z * t[1]) : (s += e[1].points[i].x + e[2].points[i].x * t[2], 
                    l += e[1].points[i].y + e[2].points[i].y * t[2], c += e[1].points[i].z + e[2].points[i].z * t[2]), 
                    t[3] < 1 ? (s += e[3].points[i].x * t[3], l += e[3].points[i].y * t[3], c += e[3].points[i].z * t[3]) : (s += e[3].points[i].x + e[4].points[i].x * t[4], 
                    l += e[3].points[i].y + e[4].points[i].y * t[4], c += e[3].points[i].z + e[4].points[i].z * t[4]), 
                    a[r = 8 * i] = s, a[r + 1] = l, a[r + 2] = c;
                }
            }, BlendShapeUtilsv2.copySprite3D = function(e) {
                for (var t = e.meshFilter.sharedMesh._vertexBuffers[0], n = t.getData(), o = Laya.VertexMesh.getVertexDeclaration("POSITION,NORMAL,UV"), i = new Array(8 * t.vertexCount), r = 0; r < t.vertexCount; r++) {
                    var s = a.default.getVertex(n, r, 5), l = a.default.getUV(n, r, 5), c = 8 * r;
                    i[c] = s.x, i[c + 1] = s.y, i[c + 2] = s.z, i[c + 6] = l.x, i[c + 7] = l.y;
                }
                var d = new Float32Array(i), u = Laya.PrimitiveMesh._createMesh(o, d, e.meshFilter.sharedMesh._indexBuffer.getData());
                a.default.RecalculateNormals(u);
                var h = new Laya.MeshSprite3D(u);
                h.name = e.name;
                var f = e.meshRenderer.material;
                if (f.normalTexture = null, h.meshRenderer.material = f, e.numChildren > 0) {
                    console.log(e.name);
                    var p = e.getChildAt(0), y = Laya.Sprite3D.instantiate(p);
                    h.addChild(y), y.transform.localPosition = p.transform.localPosition.clone(), y.transform.localRotationEuler = p.transform.localRotationEuler.clone(), 
                    y.transform.rotate(new Laya.Vector3(0, 0, 90), !0, !1);
                }
                return h;
            }, BlendShapeUtilsv2;
        }();
        n.default = o;
    }, {
        "../MeshUtil": 98
    } ],
    106: [ function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("../MeshUtil"), o = function() {
            function BlendshapeModel() {}
            return BlendshapeModel.createByBuffer = function(e, t, n, o) {
                for (var i = new Array(), r = new Laya.Vector3(-9999, -9999, -9999), s = new Laya.Vector3(9999, 9999, 9999), l = 0; l < n; l++) {
                    a.default.getVertex(o, l, 5);
                    var c = .023622 * e[h = t + 3 * l] - 3, d = .023622 * e[h + 1] - 3, u = .023622 * e[h + 2] - 3;
                    i.push(new Laya.Vector3(c, d, u));
                    var h, f = o[h = 5 * l] + c;
                    f > r.x && (r.x = f), f < s.x && (s.x = f), (f = o[h + 1] + d) > r.y && (r.y = f), 
                    f < s.y && (s.y = f), (f = o[h + 2] + u) > r.z && (r.z = f), f < s.z && (s.z = f);
                }
                var p = new BlendshapeModel();
                return p.points = i, p.bounds_max = r, p.bounds_min = s, p;
            }, BlendshapeModel;
        }();
        n.default = o;
    }, {
        "../MeshUtil": 98
    } ]
}, {}, [ 3 ]);