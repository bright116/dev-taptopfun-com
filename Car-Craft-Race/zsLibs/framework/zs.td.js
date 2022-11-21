!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

    var _asyncToGenerator2 = require("../../runtime/helpers/asyncToGenerator");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, function (a) {
        "use strict";
        var l = /* */ function () {
            function l() {
                _classCallCheck2(this, l);
            }
            _createClass2(l, null, [{
                key: "init",
                value: function init() {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.tdAppSdk && null != GameGlobal.tdInit ? null == this.appKey || this.appKey.length <= 0 ? zs.log.warn("appKey非法，无法正常设置TD SDK", "Talking Data") : null == this.appName || this.appName.length <= 0 ? zs.log.warn("appName非法，无法正常设置TD SDK", "Talking Data") : null == this.appId || this.appId.length <= 0 ? zs.log.warn("appId非法，无法正常设置TD SDK", "Talking Data") : (GameGlobal.tdInit.init(),
                        this.TDSDK = GameGlobal.tdAppSdk) : zs.log.warn("无法初始化TD SDK", "Talking Data"));
                }
            }, {
                key: "registeInfo",
                value: function registeInfo(a, _l) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.tdAppSdk && null != GameGlobal.tdInit ? (null == this.infos && (this.infos = {}),
                        null == this.infos[a] && (this.infos[a] = {}), _l && (this.infos[a] = _l)) : zs.log.warn("TD SDK不存在，无法注册配置", "Talking Data"));
                }
            }, {
                key: "registeConfig",
                value: function () {
                    var _registeConfig = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee(a) {
                        var _l5;
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        if ("undefined" != typeof wx) if ("undefined" != typeof GameGlobal && null != GameGlobal.tdAppSdk && null != GameGlobal.tdInit) {
                                            if (a) {
                                                for (_l5 in a) {
                                                    this.registeInfo(_l5, a[_l5]);
                                                }
                                                zs.log.debug("注册数据配置表成功", "Talking Data");
                                            } else zs.log.warn("注册数据配置表失败", "Talking Data");
                                        } else zs.log.warn("TD SDK不存在，无法注册配置表", "Talking Data");

                                    case 1:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                    function registeConfig(_x) {
                        return _registeConfig.apply(this, arguments);
                    }
                    return registeConfig;
                }()
            }, {
                key: "justTrack",
                value: function justTrack(a, _l3, e) {
                    this.TDSDK && (zs.log.debug("TD数据统计 " + a + " : " + _l3, "Talking Data", e), this.TDSDK.event({
                        id: a,
                        label: _l3,
                        params: e
                    }));
                }
            }, {
                key: "track",
                value: function track(a, _l4) {
                    if (!this.TDSDK || null == this.infos) return;
                    var e = a.split("_", 2), n = null, t = "";
                    if (e.length > 1 ? (n = this.infos[e[0] + "_"]) && (t = n.label + e[1]) : t = (n = this.infos[a]).label,
                        null == n) return void zs.log.warn("数据时间未注册，无法上报数据： " + a, "Talking Data");
                    var p = {}, o = !1;
                    if (null != n.params && n.params.length > 0) if (null == _l4) n.strict && (zs.log.warn("缺少必要属性，无法上报数据: " + key, "Talking Data"),
                        o = !0); else for (var _a = 0, _e = n.params.length; _a < _e; _a++) {
                            var _e2 = n.params[_a];
                            if (null == _l4[_e2] && n.strict) {
                                zs.log.warn("缺少必要属性，无法上报数据: " + _e2, "Talking Data"), o = !0;
                                break;
                            }
                            p[_e2] = _l4[_e2];
                        }
                    o || (zs.log.debug("TD数据统计 " + a + " : " + t, "Talking Data", p), this.TDSDK.event({
                        id: a,
                        label: t,
                        params: p
                    }));
                }
            }, {
                key: "appKey",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取appKey", "Talking Data"),
                        null) : GameGlobal.appInfo.app.appKey;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.appKey = a : zs.log.warn("TD SDK不存在，无法设置appKey", "Talking Data"));
                }
            }, {
                key: "appName",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取appName", "Talking Data"),
                        null) : GameGlobal.appInfo.app.displayName;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.displayName = a : zs.log.warn("TD SDK不存在，无法设置appName", "Talking Data"));
                }
            }, {
                key: "appId",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取appId", "Talking Data"),
                        null) : GameGlobal.appInfo.app.uniqueId;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.uniqueId = a : zs.log.warn("TD SDK不存在，无法设置appId", "Talking Data"));
                }
            }, {
                key: "versionName",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取versionName", "Talking Data"),
                        null) : GameGlobal.appInfo.app.versionName;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.versionName = a : zs.log.warn("TD SDK不存在，无法设置appKey", "Talking Data"));
                }
            }, {
                key: "versionCode",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取versionCode", "Talking Data"),
                        null) : GameGlobal.appInfo.app.versionCode;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.versionCode = a : zs.log.warn("TD SDK不存在，无法设置appKey", "Talking Data"));
                }
            }, {
                key: "channel",
                get: function get() {
                    return "undefined" == typeof wx ? null : "undefined" == typeof GameGlobal || null == GameGlobal.appInfo ? (zs.log.warn("TD SDK不存在，无法获取channel", "Talking Data"),
                        null) : GameGlobal.appInfo.app.channel;
                },
                set: function set(a) {
                    "undefined" != typeof wx && ("undefined" != typeof GameGlobal && null != GameGlobal.appInfo ? GameGlobal.appInfo.app.channel = a : zs.log.warn("TD SDK不存在，无法设置channel", "Talking Data"));
                }
            }]);
            return l;
        }();
        l.workflowKey = "workflow_", l.workflowDesc = "工作流-", l.startupKey = "startup",
            l.startupDesc = "启动游戏", l.gameStartKey = "gameStart", l.gameStartDesc = "开始游戏",
            a.td = l;
    }(window.zs = window.zs || {});
}()