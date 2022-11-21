!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

    var _asyncToGenerator2 = require("../../runtime/helpers/asyncToGenerator");

    var _typeof2 = require("../../runtime/helpers/typeof");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, function (e) {
        "use strict";
        var t = /* */ function () {
            function t() {
                _classCallCheck2(this, t);
                this.switchExporter = "zs_jump_switch", this.exporterPack = null;
            }
            _createClass2(t, [{
                key: "exportWindow",
                get: function get() {
                    return null == this._exportWindow && (this._exportWindow = zs.fgui.window.create().show()),
                        this._exportWindow;
                }
            }, {
                key: "bannerWindow",
                get: function get() {
                    return null == this._bannerWindow && (this._bannerWindow = zs.fgui.window.create().show()),
                        this._bannerWindow;
                }
            }, {
                key: "fsmList",
                get: function get() {
                    return null == this._fsmList && (this._fsmList = {}), this._fsmList;
                }
            }, {
                key: "state",
                get: function get() {
                    return this.fsm ? this.fsm.current : null;
                }
            }, {
                key: "childState",
                get: function get() {
                    return this.fsm && this.fsmList[this.fsm.current] ? this.fsmList[this.fsm.current].current : null;
                }
            }, {
                key: "eventList",
                get: function get() {
                    return null == this._eventList && (this._eventList = {}), this._eventList;
                }
            }, {
                key: "registe",
                value: function registe() {
                    var _this = this;
                    this.fsm = new zs.fsm().registe(zs.workflow.PRODUCT_START,
                        zs.workflow.PRODUCT_BEGIN).registe(zs.workflow.PRODUCT_BEGIN, zs.workflow.GAME_HOME).registe(zs.workflow.GAME_HOME,
                            zs.workflow.PRODUCT_HOME_PLAY).registe(zs.workflow.PRODUCT_HOME_PLAY, zs.workflow.GAME_PLAY).registe(zs.workflow.GAME_PLAY,
                                zs.workflow.PRODUCT_PLAY_END).registe(zs.workflow.PRODUCT_PLAY_END, zs.workflow.GAME_END).registe(zs.workflow.GAME_END,
                                    zs.workflow.PRODUCT_FINISH).registe(zs.workflow.PRODUCT_FINISH, zs.workflow.PRODUCT_BEGIN)
                        .setDefault(zs.workflow.PRODUCT_START),
                        this.registeEvent(t.eventNext, this, function (e) {
                            _this.next(e);
                        }), this.registeEvent(t.eventChildNext, this, function (e) {
                            _this.childNext(e);
                        }), this.registeEvent(t.eventCreateBase, this, function (e) {
                            _this.createBase(e);
                        }), this.registeEvent(t.eventCloseBase, this, function (e) {
                            _this.exportWindow.detach(e);
                        });
                }
            }, {
                key: "start",
                value: function start() {
                    this.fsm && (this.fsm.onBeforeChange = zs.Handler.create(this, this.onBeforeChange, null, !1),
                        this.fsm.onChanged = zs.Handler.create(this, this.onChanged, null, !1)), zs.fgui.configs.registeBase(t.exporterList, zs.exporter.list),
                        zs.fgui.configs.registeBase(t.exporterCard, zs.exporter.card), zs.fgui.configs.registeBase(t.exporterBackground, zs.exporter.background),
                        zs.fgui.configs.registeBase(t.exporterLoader, zs.exporter.loader), zs.fgui.configs.registeBase(t.exporterButton, zs.exporter.button),
                        s.addAppShow(zs.Handler.create(this, zs.platform.sync.clearDelayBanner, null, !1)),
                        this.fsm.init();
                }
            }, {
                key: "setFSM",
                value: function setFSM(e, _t) {
                    this.fsmList[e.trim()] = _t;
                }
            }, {
                key: "registeEvent",
                value: function registeEvent(e, _t2, s) {
                    for (var _len = arguments.length, i = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                        i[_key - 3] = arguments[_key];
                    }
                    this.eventList[e.trim()] = {
                        caller: _t2,
                        func: s,
                        args: i
                    };
                }
            }, {
                key: "applyEvent",
                value: function applyEvent(e, _t3) {
                    var s = this.eventList[e.trim()];
                    s && s.func && s.func.apply(s.caller, _t3 && _t3.length > 0 ? _t3 : s.args);
                }
            }, {
                key: "applyEventReturn",
                value: function applyEventReturn(e, _t4) {
                    var s = this.eventList[e.trim()];
                    return s && s.func ? s.func.apply(s.caller, _t4 && _t4.length > 0 ? _t4 : s.args) : null;
                }
            }, {
                key: "callEvent",
                value: function callEvent(e) {
                    for (var _len2 = arguments.length, _t5 = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                        _t5[_key2 - 1] = arguments[_key2];
                    }
                    this.applyEvent(e, _t5);
                }
            }, {
                key: "callEventReturn",
                value: function callEventReturn(e) {
                    for (var _len3 = arguments.length, _t6 = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                        _t6[_key3 - 1] = arguments[_key3];
                    }
                    return this.applyEventReturn(e, _t6);
                }
            }, {
                key: "readConfigReturn",
                value: function readConfigReturn(e) {
                    if (null == e || null == e) return null;
                    var _t7 = null, s = _typeof2(e);
                    if ("number" === s || "boolean" === s || Array.isArray(e)) _t7 = e; else if ("object" === s) for (var _s in e) {
                        var i = e[_s];
                        null == i || null == i || Array.isArray(i) || (i = [i]), _t7 = this.applyEventReturn(_s, i);
                        break;
                    } else "string" === s && (_t7 = this.applyEventReturn(e));
                    return _t7;
                }
            }, {
                key: "runEventConfig",
                value: function runEventConfig(e) {
                    if (null == e || null == e) return;
                    var _t8 = _typeof2(e);
                    if ("string" === _t8) this.callEvent(e); else if (Array.isArray(e)) for (var _t64 = 0, _s2 = e.length; _t64 < _s2; _t64++) {
                        this.runEventConfig(e[_t64]);
                    } else if ("object" == _t8) for (var _t65 in e) {
                        var _s3 = e[_t65];
                        Array.isArray(_s3) || null == _s3 || null == _s3 || (_s3 = [_s3]), this.applyEvent(_t65, _s3);
                    }
                }
            }, {
                key: "registeChildFSM",
                value: function registeChildFSM() {
                    var e = zs.configs.productCfg;
                    for (var _t66 in e) {
                        if (_t66 = _t66.trim(), this.fsmList[_t66]) continue;
                        var _s4 = e[_t66].states;
                        if (!_s4 || _s4.length <= 0) continue;
                        var i = null, r = null, n = new zs.fsm();
                        for (var _e = 0, _t67 = _s4.length; _e < _t67; _e++) {
                            var _t68 = _s4[_e];
                            null != _t68 && "string" == typeof _t68 && ((_t68 = _t68.trim()).length <= 0 || (i ? (n.registe(r, _t68),
                                r = _t68) : (i = _t68, r = _t68)));
                        }
                        if (i) {
                            n.setDefault(i);
                            var _s5 = e[_t66].substates;
                            if (_s5 && Array.isArray(_s5)) for (var _e2 = 0, _t69 = _s5.length; _e2 < _t69; _e2++) {
                                var _t70 = _s5[_e2];
                                if (null == _t70 || !Array.isArray(_t70) || _t70.length <= 1) continue;
                                var _i = null;
                                for (var _e3 = 0, _s6 = _t70.length; _e3 < _s6; _e3++) {
                                    var _s7 = _t70[_e3];
                                    null != _s7 && "string" == typeof _s7 && ((_s7 = _s7.trim()).length <= 0 || n.getState(_i, _s7) || (_i && n.registe(_i, _s7, null != n.list[_i] ? -1 : 0),
                                        _i = _s7));
                                }
                            }
                            this.fsmList[_t66] = n;
                        }
                    }
                }
            }, {
                key: "on",
                value: function on(e, _t16, s, i) {
                    if (null == e || e.trim().length <= 0 || null == _t16) return;
                    e = e.trim(), _t16.once = !1, i = i || 0, _t16.priority = i;
                    var r = -1, n = null;
                    if (s ? (null == this.preListeners && (this.preListeners = {}), null == this.preListeners[e] && (this.preListeners[e] = []),
                        n = this.preListeners[e]) : (null == this.listeners && (this.listeners = {}), null == this.listeners[e] && (this.listeners[e] = []),
                            n = this.listeners[e]), n) {
                        for (var _e4 = 0, _s8 = n.length; _e4 < _s8; _e4++) {
                            if (n[_e4]._id == _t16._id) return;
                            var _s9 = n[_e4].priority || 0;
                            if (r < 0 && i > _s9) {
                                r = _e4;
                                break;
                            }
                        }
                        r < 0 ? n.push(_t16) : n.splice(r, 0, _t16);
                    }
                }
            }, {
                key: "onLater",
                value: function onLater(e, _t17, s, i) {
                    if (null == e || e.trim().length <= 0 || null == _t17) return;
                    e = e.trim(), _t17.once = !1, i = i || 0, _t17.priority = i;
                    var r = -1, n = null;
                    if (s ? (null == this.laterPreListeners && (this.laterPreListeners = {}), null == this.laterPreListeners[e] && (this.laterPreListeners[e] = []),
                        n = this.laterPreListeners[e]) : (null == this.laterListeners && (this.laterListeners = {}),
                            null == this.laterListeners[e] && (this.laterListeners[e] = []), n = this.laterListeners[e]),
                        n) {
                        for (var _e5 = 0, _s10 = n.length; _e5 < _s10; _e5++) {
                            if (n[_e5]._id == _t17._id) return;
                            var _s11 = n[_e5].priority || 0;
                            if (r < 0 && i > _s11) {
                                r = _e5;
                                break;
                            }
                        }
                        r < 0 ? n.push(_t17) : n.splice(r, 0, _t17);
                    }
                }
            }, {
                key: "once",
                value: function once(e, _t18, s, i) {
                    this.on(e, _t18, s, i), _t18 && (_t18.once = !0);
                }
            }, {
                key: "onceLater",
                value: function onceLater(e, _t19, s, i) {
                    this.onLater(e, _t19, s, i), _t19 && (_t19.once = !0);
                }
            }, {
                key: "off",
                value: function off(e, _t20, s) {
                    if (!(null == e || e.trim().length <= 0 || null == _t20)) if (e = e.trim(), s) {
                        if (null == this.preListeners) return;
                        if (null == this.preListeners[e]) return;
                        var _s12 = this.preListeners[e];
                        for (var _e6 = 0, i = _s12.length; _e6 < i; _e6++) {
                            if (_s12[_e6]._id == _t20._id) return void _s12.splice(_e6, 1);
                        }
                    } else {
                        if (null == this.listeners) return;
                        if (null == this.listeners[e]) return;
                        var _s13 = this.listeners[e];
                        for (var _e7 = 0, _i2 = _s13.length; _e7 < _i2; _e7++) {
                            if (_s13[_e7]._id == _t20._id) return void _s13.splice(_e7, 1);
                        }
                    }
                }
            }, {
                key: "offLater",
                value: function offLater(e, _t21, s) {
                    if (!(null == e || e.trim().length <= 0 || null == _t21)) if (e = e.trim(), s) {
                        if (null == this.laterPreListeners) return;
                        if (null == this.laterPreListeners[e]) return;
                        var _s14 = this.laterPreListeners[e];
                        for (var _e8 = 0, i = _s14.length; _e8 < i; _e8++) {
                            if (_s14[_e8]._id == _t21._id) return void _s14.splice(_e8, 1);
                        }
                    } else {
                        if (null == this.laterListeners) return;
                        if (null == this.laterListeners[e]) return;
                        var _s15 = this.laterListeners[e];
                        for (var _e9 = 0, _i3 = _s15.length; _e9 < _i3; _e9++) {
                            if (_s15[_e9]._id == _t21._id) return void _s15.splice(_e9, 1);
                        }
                    }
                }
            }, {
                key: "offAll",
                value: function offAll(e, _t22) {
                    if (!(null == e || e.trim().length <= 0)) if (e = e.trim(), _t22) {
                        if (null == this.preListeners) return;
                        if (null == this.preListeners[e]) return;
                        delete this.preListeners[e];
                    } else {
                        if (null == this.listeners) return;
                        if (null == this.listeners[e]) return;
                        delete this.listeners[e];
                    }
                }
            }, {
                key: "offAllLater",
                value: function offAllLater(e, _t23) {
                    if (!(null == e || e.trim().length <= 0)) if (e = e.trim(), _t23) {
                        if (null == this.laterPreListeners) return;
                        if (null == this.laterPreListeners[e]) return;
                        delete this.laterPreListeners[e];
                    } else {
                        if (null == this.laterListeners) return;
                        if (null == this.laterListeners[e]) return;
                        delete this.laterListeners[e];
                    }
                }
            }, {
                key: "offAllCaller",
                value: function offAllCaller(e, _t24, s) {
                    if (null != e) if (null == _t24 || _t24.trim().length <= 0) {
                        if (s) for (var _t71 in this.preListeners) {
                            var _s16 = this.preListeners[_t71];
                            for (var _t72 = 0, i = _s16.length; _t72 < i; _t72++) {
                                _s16[_t72].caller == e && (_s16.splice(_t72, 1), _t72--, i--);
                            }
                        } else for (var _t73 in this.listeners) {
                            var _s17 = this.listeners[_t73];
                            for (var _t74 = 0, _i4 = _s17.length; _t74 < _i4; _t74++) {
                                _s17[_t74].caller == e && (_s17.splice(_t74, 1), _t74--, _i4--);
                            }
                        }
                    } else if (_t24 = _t24.trim(), s) {
                        var _s18 = this.preListeners[_t24];
                        if (_s18) for (var _t75 = 0, _i5 = _s18.length; _t75 < _i5; _t75++) {
                            _s18[_t75].caller == e && (_s18.splice(_t75, 1), _t75--, _i5--);
                        }
                    } else {
                        var _s19 = this.listeners[_t24];
                        if (_s19) for (var _t76 = 0, _i6 = _s19.length; _t76 < _i6; _t76++) {
                            _s19[_t76].caller == e && (_s19.splice(_t76, 1), _t76--, _i6--);
                        }
                    }
                }
            }, {
                key: "offAllCallerLater",
                value: function offAllCallerLater(e, _t31, s) {
                    if (null != e) if (null == _t31 || _t31.trim().length <= 0) {
                        if (s) for (var _t77 in this.laterPreListeners) {
                            var _s20 = this.laterPreListeners[_t77];
                            for (var _t78 = 0, i = _s20.length; _t78 < i; _t78++) {
                                _s20[_t78].caller == e && (_s20.splice(_t78, 1), _t78--, i--);
                            }
                        } else for (var _t79 in this.laterListeners) {
                            var _s21 = this.laterListeners[_t79];
                            for (var _t80 = 0, _i7 = _s21.length; _t80 < _i7; _t80++) {
                                _s21[_t80].caller == e && (_s21.splice(_t80, 1), _t80--, _i7--);
                            }
                        }
                    } else if (_t31 = _t31.trim(), s) {
                        var _s22 = this.laterPreListeners[_t31];
                        if (_s22) for (var _t81 = 0, _i8 = _s22.length; _t81 < _i8; _t81++) {
                            _s22[_t81].caller == e && (_s22.splice(_t81, 1), _t81--, _i8--);
                        }
                    } else {
                        var _s23 = this.laterListeners[_t31];
                        if (_s23) for (var _t82 = 0, _i9 = _s23.length; _t82 < _i9; _t82++) {
                            _s23[_t82].caller == e && (_s23.splice(_t82, 1), _t82--, _i9--);
                        }
                    }
                }
            }, {
                key: "clear",
                value: function clear(e) {
                    e ? this.preListeners = null : this.listeners = null;
                }
            }, {
                key: "clearLater",
                value: function clearLater(e) {
                    e ? this.laterPreListeners = null : this.laterListeners = null;
                }
            }, {
                key: "next",
                value: function next(e) {
                    this.wantNext = 1, this.nextTarget = e, this.step();
                }
            }, {
                key: "childNext",
                value: function childNext(e) {
                    this.wantNext || (this.wantNext = 2, this.nextTarget = e, this.step());
                }
            }, {
                key: "step",
                value: function step() {
                    if (this.lockStep) return;
                    var e = this.nextTarget, _t38 = this.wantNext;
                    switch (this.wantNext = 0, this.nextTarget = null, _t38) {
                        case 1:
                            if (null != this.fsm) {
                                var _t83 = this.fsm.current;
                                e ? this.fsm.runTransition(e) || zs.log.error("无法执行从 " + _t83 + " 到 " + e + " 的工作流，请检查是否完整注册流程!", "Core") : this.fsm.runNext() || zs.log.error("无法执行 " + _t83 + " 的后续工作流，请检查是否完整注册流程!", "Core");
                            }
                            break;

                        case 2:
                            if (null != this.fsm) {
                                var _t84 = this.fsmList[this.fsm.current], _s24 = !1;
                                if (_t84 && (e && !_t84.runTransition(e) || !e && !_t84.runNext()) && (this.onChildFSMBeforeChanged(null, _t84.current),
                                    _s24 = !0), !_t84 || _s24) {
                                    var _e10 = this.fsm.current;
                                    this.fsm.runNext() || zs.log.error("无法执行 " + _e10 + " 的后续工作流，请检查是否完整注册流程!", "Core");
                                }
                            }
                    }
                }
            }, {
                key: "onBeforeChange",
                value: function onBeforeChange(e, _t41) {
                    if (zs.product.synced || zs.network.config(!0).catch(function (e) {
                        return e;
                    }).then(function (e) {
                        null == e || e.length <= 0 ? zs.td.justTrack("请求配置数据失败", "请求配置数据失败") : (zs.td.justTrack("请求配置数据成功", "请求配置数据成功"),
                            zs.product.sync(e), zs.fgui.msgtext.hide());
                    }), "wx_" == zs.platform.config.platformMark && zs.exporter.dataMgr.load(), this.lockStep = !0,
                        null != this.preListeners && null != this.preListeners[e]) {
                        var _t85 = this.preListeners[e];
                        for (var _e11 = 0, _s25 = _t85.length; _e11 < _s25; _e11++) {
                            var i = _t85[_e11].once;
                            _t85[_e11].run(), i && (_t85.splice(_e11, 1), _e11--, _s25--);
                        }
                    }
                    if (this.checkExitEvent(_t41), this.exportWindow.clear(), zs.platform.sync.hideBanner(),
                        zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[e]) {
                        var _t86 = this.laterPreListeners[e];
                        for (var _e12 = 0, _s26 = _t86.length; _e12 < _s26; _e12++) {
                            var _i10 = _t86[_e12].once;
                            _t86[_e12].run(), _i10 && (_t86.splice(_e12, 1), _e12--, _s26--);
                        }
                    }
                    this.lockStep = !1, this.step();
                }
            }, {
                key: "checkSwitch",
                value: function checkSwitch(e, _t44) {
                    var s = !0;
                    if (e) if ("boolean" == typeof e) s = e; else if (Array.isArray(e)) for (var _t87 = 0, i = e.length; _t87 < i; _t87++) {
                        var _i11 = e[_t87];
                        if (_i11 && !(_i11.length <= 0)) if ("!" == _i11[0] || "！" == _i11[0]) {
                            if (!(_i11.length > 1)) {
                                s = !1;
                                break;
                            }
                            if (_i11 = _i11.slice(1, _i11.length), zs.product.get(_i11)) {
                                s = !1;
                                break;
                            }
                        } else if (!zs.product.get(_i11)) {
                            s = !1;
                            break;
                        }
                    } else if ("string" == typeof _typeof2(e)) {
                        var _t88 = e;
                        _t88 && _t88.length > 0 && ("!" == _t88[0] || "！" == _t88[0] ? _t88.length > 1 ? (_t88 = _t88.slice(1, _t88.length),
                            zs.product.get(_t88) && (s = !1)) : s = !1 : zs.product.get(_t88) || (s = !1));
                    }
                    return !!s && (_t44 && (s = this.readConfigReturn(_t44)), s);
                }
            }, {
                key: "onChanged",
                value: function onChanged(e) {
                    this.lockStep = !0, zs.td.justTrack(zs.td.workflowKey + e, zs.td.workflowDesc + e);
                    var _t47 = zs.configs.productCfg[e], s = !1;
                    _t47 && (_t47.switch || _t47.check) && (s = !this.checkSwitch(_t47.switch, _t47.check));
                    var i = this.fsmList[e];
                    if (s) this.next(); else {
                        if (null != this.listeners && null != this.listeners[e]) {
                            var _t89 = this.listeners[e];
                            for (var _e13 = 0, _s27 = _t89.length; _e13 < _s27; _e13++) {
                                var _i12 = _t89[_e13].once;
                                _t89[_e13].run(), _i12 && (_t89.splice(_e13, 1), _e13--, _s27--);
                            }
                        }
                        if (this.checkEvent(e), i) {
                            i.onBeforeChange = zs.Handler.create(this, this.onChildFSMBeforeChanged, null, !1),
                                i.onChanged = zs.Handler.create(this, this.onChildFSMChanged, null, !1), i.init(),
                                zs.configs.productCfg[e] && zs.log.info(e + " 状态存在子状态机，无法自动创建应用运营配置，请使用子状态进行配置!", "Workflow", i.list);
                        } else this.checkBase(e), zs.product.get(this.switchExporter) && this.checkExporter(e),
                            this.checkBanner(e);
                        if (this.checkLaterEvent(e), null != this.laterListeners && null != this.laterListeners[e]) {
                            var _t90 = this.laterListeners[e];
                            for (var _e14 = 0, _s28 = _t90.length; _e14 < _s28; _e14++) {
                                var _i13 = _t90[_e14].once;
                                _t90[_e14].run(), _i13 && (_t90.splice(_e14, 1), _e14--, _s28--);
                            }
                        }
                    }
                    this.lockStep = !1, this.step();
                }
            }, {
                key: "onChildFSMBeforeChanged",
                value: function onChildFSMBeforeChanged(e, _t50) {
                    if (null == this.fsm) return;
                    this.lockStep = !0;
                    var s = this.fsm.current + "." + e;
                    if (null != this.preListeners && null != this.preListeners[s]) {
                        var _e15 = this.preListeners[s];
                        for (var _t91 = 0, _s29 = _e15.length; _t91 < _s29; _t91++) {
                            var i = _e15[_t91].once;
                            _e15[_t91].run(), i && (_e15.splice(_t91, 1), _t91--, _s29--);
                        }
                    }
                    if (this.checkExitEvent(this.fsm.current + "." + _t50), this.exportWindow.clear(),
                        zs.platform.sync.hideBanner(), zs.platform.sync.clearDelayBanner(), null != this.laterPreListeners && null != this.laterPreListeners[s]) {
                        var _e16 = this.laterPreListeners[s];
                        for (var _t92 = 0, _s30 = _e16.length; _t92 < _s30; _t92++) {
                            var _i14 = _e16[_t92].once;
                            _e16[_t92].run(), _i14 && (_e16.splice(_t92, 1), _t92--, _s30--);
                        }
                    }
                    this.lockStep = !1, this.step();
                }
            }, {
                key: "onChildFSMChanged",
                value: function onChildFSMChanged(e) {
                    if (null == this.fsm) return;
                    this.lockStep = !0;
                    var _t53 = this.fsm.current + "." + e;
                    zs.td.justTrack(zs.td.workflowKey + _t53, zs.td.workflowDesc + _t53);
                    var s = zs.configs.productCfg[_t53], i = !1;
                    if (s && (s.switch || s.check) && (i = !this.checkSwitch(s.switch, s.check)), i) this.childNext(); else {
                        if (null != this.listeners && null != this.listeners[_t53]) {
                            var _e17 = this.listeners[_t53];
                            for (var _t93 = 0, _s31 = _e17.length; _t93 < _s31; _t93++) {
                                var _i15 = _e17[_t93].once;
                                _e17[_t93].run(), _i15 && (_e17.splice(_t93, 1), _t93--, _s31--);
                            }
                        }
                        if (this.checkEvent(_t53), this.checkBase(_t53), zs.product.get(this.switchExporter) && this.checkExporter(_t53),
                            this.checkBanner(_t53), this.checkLaterEvent(_t53), null != this.laterListeners && null != this.laterListeners[_t53]) {
                            var _e18 = this.laterListeners[_t53];
                            for (var _t94 = 0, _s32 = _e18.length; _t94 < _s32; _t94++) {
                                var _i16 = _e18[_t94].once;
                                _e18[_t94].run(), _i16 && (_e18.splice(_t94, 1), _t94--, _s32--);
                            }
                        }
                    }
                    this.lockStep = !1, this.step();
                }
            }, {
                key: "checkEvent",
                value: function checkEvent(e) {
                    var _t56 = zs.configs.productCfg[e];
                    _t56 && _t56.event && this.runEventConfig(_t56.event);
                }
            }, {
                key: "checkLaterEvent",
                value: function checkLaterEvent(e) {
                    var _t57 = zs.configs.productCfg[e];
                    _t57 && _t57.laterevent && this.runEventConfig(_t57.laterevent);
                }
            }, {
                key: "checkExitEvent",
                value: function checkExitEvent(e) {
                    var _t58 = zs.configs.productCfg[e];
                    _t58 && _t58.exitevent && this.runEventConfig(_t58.exitevent);
                }
            }, {
                key: "showPreviewBanner",
                value: function showPreviewBanner(e) {
                    var _this2 = this;
                    var _t59 = e ? e.pos : null, s = e ? e.size : null, i = e ? e.checkInit : null, r = e && null != e.isWait ? e.isWait : null, n = _t59 && _t59.right ? _t59.right : null, l = _t59 && _t59.bottom ? _t59.bottom : null;
                    _t59 && _t59.left && (n = -_t59.left), _t59 && _t59.top && (l = -_t59.top), e && e.empty ? s = {
                        width: zs.configs.gameCfg.debug ? 10 : 1,
                        height: zs.configs.gameCfg.debug ? 10 : 1
                    } : null == s && (s = {
                        width: zs.platform.config.bannerWidth || 600,
                        height: zs.platform.config.bannerHeight || 200
                    }), i ? this.banner || (this.bannerWindow.attach(zs.exporter.banner).update(zs.exporter.banner, function (e) {
                        _this2.banner = e, s && (s.width && e.setWidth(s.width), s.height && e.setHeight(s.height)),
                            _this2.banner.view.visible = !r;
                    }, this), e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l),
                        this.bannerWindow.show().front()) : this.banner && (s && (s.width && this.banner.setWidth(s.width),
                            s.height && this.banner.setHeight(s.height)), this.bannerWindow.setBase(this.banner),
                            e && e.empty ? this.bannerWindow.align(zs.fgui.AlignType.TopLeft) : this.bannerWindow.align(zs.fgui.AlignType.Bottom, n, l),
                            this.bannerWindow.show().front(), this.banner.view.visible = !0);
                }
            }, {
                key: "hidePreviewBanner",
                value: function hidePreviewBanner() {
                    this.banner && (this.bannerWindow.detach(this.banner), this.banner = null);
                }
            }, {
                key: "checkBanner",
                value: function checkBanner(e) {
                    var _t60 = zs.configs.productCfg[e], s = zs.product.get("zs_skip_empty_banner");
                    if (_t60 && _t60.banner) {
                        if (this.bannerIgnoreList && this.bannerIgnoreList.indexOf(e) >= 0) return zs.log.info("状态 " + e + " 在横幅广告忽略列表中，无法自动生成，请自主管理横幅广告展示或将该状态移出忽略列表", "Workflow"),
                            void (!s && zs.platform.sync.updateBanner({
                                empty: !0,
                                checkInit: !0
                            }));
                        if ((_t60.banner.switch || _t60.banner.check) && !this.checkSwitch(_t60.banner.switch, _t60.banner.check)) return void (!s && zs.platform.sync.updateBanner({
                            empty: !0,
                            checkInit: !0
                        }));
                        zs.platform.sync.checkBanner({
                            data: _t60
                        });
                    } else !s && zs.platform.sync.updateBanner({
                        empty: !0,
                        checkInit: !0
                    });
                }
            }, {
                key: "checkExporter",
                value: function checkExporter(e) {
                    var _t61 = zs.configs.productCfg[e];
                    if (this.exporterIgnoreList && this.exporterIgnoreList.indexOf(e) >= 0) _t61 && _t61.exporter && _t61.exporter.length > 0 && zs.log.info("状态 " + e + " 在导出忽略列表中，无法自动生成，请自主管理导出展示或将该状态移出忽略列表", "Workflow"); else if (_t61 && _t61.exporter) {
                        var _e19 = _t61.exporter;
                        if (Array.isArray(_e19) && _e19.length > 0) for (var _e20 = 0, _s33 = _t61.exporter.length; _e20 < _s33; _e20++) {
                            var _s34 = _t61.exporter[_e20];
                            _s34 && (!_s34.switch && !_s34.check || this.checkSwitch(_s34.switch, _s34.check)) && this.exportWindow.applyConfig(_s34).front();
                        } else "object" == _typeof2(_e19) && (!_e19.switch && !_e19.check || this.checkSwitch(_e19.switch, _e19.check)) && this.exportWindow.applyConfig(_e19).front();
                    }
                }
            }, {
                key: "checkBase",
                value: function checkBase(e) {
                    var _t62 = zs.configs.productCfg[e];
                    if (_t62 && _t62.base) {
                        var _e21 = _t62.base;
                        if (Array.isArray(_e21) && _e21.length > 0) for (var _e22 = 0, _s35 = _t62.base.length; _e22 < _s35; _e22++) {
                            var _s36 = _t62.base[_e22];
                            _s36 && (!_s36.switch && !_s36.check || this.checkSwitch(_s36.switch, _s36.check)) && this.exportWindow.applyConfig(_s36).front();
                        } else "object" == _typeof2(_e21) && (!_e21.switch && !_e21.check || this.checkSwitch(_e21.switch, _e21.check)) && this.exportWindow.applyConfig(_e21).front();
                    }
                }
            }, {
                key: "createBase",
                value: function createBase(e) {
                    var _t63 = zs.configs.uiCfg.base[e];
                    return _t63 && this.checkSwitch(_t63.switch, _t63.check) ? this.exportWindow.applyConfig(_t63).front().getBase() : null;
                }
            }]);
            return t;
        }();
        t.exporterList = "export_list", t.exporterCard = "export_card", t.exporterBackground = "export_background",
            t.exporterLoader = "export_loader", t.exporterButton = "export_button", t.eventNext = "event_next",
            t.eventChildNext = "event_childnext", t.eventCreateBase = "event_createbase", t.eventCloseBase = "event_closebase",
            t.PRODUCT_START = "PRODUCT_START", t.PRODUCT_BEGIN = "PRODUCT_BEGIN", t.GAME_HOME = "GAME_HOME",
            t.PRODUCT_HOME_PLAY = "PRODUCT_HOME_PLAY", t.GAME_PLAY = "GAME_PLAY", t.PRODUCT_PLAY_END = "PRODUCT_PLAY_END",
            t.GAME_END = "GAME_END", t.PRODUCT_FINISH = "PRODUCT_FINISH";
        var s = /* */ function () {
            function s() {
                _classCallCheck2(this, s);
            }
            _createClass2(s, null, [{
                key: "registeBase",
                value: function registeBase(e, t) {
                    zs.fgui.configs.registeBase(e, t);
                }
            }, {
                key: "unregisteBase",
                value: function unregisteBase(e) {
                    zs.fgui.configs.unregisteBase(e);
                }
            }, {
                key: "registeItem",
                value: function registeItem(e, t) {
                    zs.fgui.configs.registeItem(e, t);
                }
            }, {
                key: "unregisteItem",
                value: function unregisteItem(e) {
                    zs.fgui.configs.unregisteItem(e);
                }
            }, {
                key: "init",
                value: function () {
                    var _init = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee(e) {
                        var t;
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        zs.proxy.init();
                                        zs.Timer.gTimer = new zs.Timer();
                                        window.requestAnimationFrame(function timerLoop(e) {
                                            zs.Timer.gTimer._update();
                                            zs.Timer.inst._update();
                                            window.requestAnimationFrame(timerLoop);
                                        });
                                        zs.platform.init();
                                        zs.platform.sync.addEventShow({
                                            showHandler: function showHandler(e) {
                                                s.onAppShow(e);
                                            }
                                        });
                                        zs.platform.sync.addEventHide({
                                            hideHandler: function hideHandler(e) {
                                                s.onAppHide(e);
                                            }
                                        });
                                        _context.next = 8;
                                        return zs.configs.init().catch(function (e) {
                                            return e;
                                        });

                                    case 8:
                                        zs.configs.gameCfg.debug && (zs.log.Configs.logLevel = zs.log.Level.DEBUG);
                                        zs.platform.proxy && "wx_" == zs.platform.config.platformMark && "undefined" != typeof wx &&
                                            zs.exporter.dataMgr.collectSource();
                                        zs.td.appKey = this.tdKey;
                                        zs.td.appName = this.appName;
                                        zs.td.appId = this.appId;
                                        zs.configs.gameCfg.tdVersion && (zs.td.versionName = zs.configs.gameCfg.tdVersion);
                                        zs.td.init();
                                        zs.td.justTrack(zs.td.startupKey, zs.td.startupDesc);
                                        zs.resource.init();
                                        this.onConfigInit && this.onConfigInit.run();
                                        zs.product.init(e);
                                        this._readyStart = !1;
                                        zs.fgui.init();
                                        t = this.entry ? this.entry : zs.base.entry;
                                        if (!this.loadingPage) {
                                            _context.next = 28;
                                            break;
                                        }
                                        _context.next = 25;
                                        return this.loadingPage.preload().catch(function (e) {
                                            return e;
                                        });

                                    case 25:
                                        this.entryInst = t.init(this.loadingPage, this, this.ready);
                                        _context.next = 35;
                                        break;

                                    case 28:
                                        if (!this.layaLoadingPage) {
                                            _context.next = 34;
                                            break;
                                        }
                                        _context.next = 31;
                                        return this.layaLoadingPage.preload().catch(function (e) {
                                            return e;
                                        });

                                    case 31:
                                        this.entryInst = t.init(this.layaLoadingPage, this, this.ready);
                                        _context.next = 35;
                                        break;

                                    case 34:
                                        this.entryInst = t.init(zs.ui.Loading, this, this.ready);

                                    case 35:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                    function init(_x) {
                        return _init.apply(this, arguments);
                    }
                    return init;
                }()
            }, {
                key: "appName",
                get: function get() {
                    return zs.configs.gameCfg ? zs.configs.gameCfg.appName : null;
                }
            }, {
                key: "appId",
                get: function get() {
                    return zs.configs.gameCfg ? zs.configs.gameCfg.appId : null;
                }
            }, {
                key: "tdKey",
                get: function get() {
                    return zs.configs.gameCfg ? zs.configs.gameCfg.tdKey : null;
                }
            }, {
                key: "readyStart",
                get: function get() {
                    return this.entryInst && this.entryInst.progress >= 100 && this._readyStart;
                }
            }, {
                key: "ready",
                value: function () {
                    var _ready = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee2() {
                        var e, t, _e23, i, _e24, _t95, _s49, _e25, _t96, _s50, r, _e26, _t97, _t98;
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        zs.log.debug("web 设置", "Core");
                                        _context2.next = 3;
                                        return zs.network.init().catch(function (e) {
                                            return e;
                                        });
                                    case 3:
                                        s.userInfo = _context2.sent;
                                        s.userId = s.userInfo.user_id;
                                        _context2.t0 = "wx_" == zs.platform.config.platformMark;
                                        if (!_context2.t0) {
                                            _context2.next = 9;
                                            break;
                                        }
                                        _context2.next = 9;
                                        return zs.exporter.dataMgr.load();
                                    case 9:
                                        this.progress = 10;
                                        zs.log.debug("运营设置", "Core");
                                        zs.td.justTrack("请求配置数据", "请求配置数据");
                                        _context2.next = 14;
                                        return zs.network.config(!0).catch(function (e) {
                                            return e;
                                        });
                                    case 14:
                                        e = _context2.sent;
                                        null == e || e.length <= 0 ? zs.td.justTrack("请求配置数据失败", "请求配置数据失败") :
                                            zs.td.justTrack("请求配置数据成功", "请求配置数据成功"),
                                            zs.product.sync(e);
                                        t = zs.product.get("zs_sync_product");
                                        if (!(t && "0" != t)) {
                                            _context2.next = 22;
                                            break;
                                        }
                                        _context2.next = 20;
                                        return zs.network.jsonConfig("productCfg,uiCfg").catch(function (e) {
                                            return e;
                                        });

                                    case 20:
                                        _e23 = _context2.sent;
                                        _e23 && _e23.productCfg && (zs.configs.productCfg = _e23.productCfg), _e23 && _e23.uiCfg && (zs.configs.uiCfg = _e23.uiCfg);
                                    case 22:
                                        this.progress = 20, zs.log.debug("初始化广告与导出组件", "Core");
                                        _context2.next = 25;
                                        return zs.fgui.loadPack(zs.fgui.configs.pack_basic).catch(function (e) {
                                            return e;
                                        });

                                    case 25:
                                        i = _context2.sent;
                                        zs.ui.FGUI_msgbox.bind(i);
                                        zs.ui.FGUI_list.bind(i);
                                        this.progress = 30;
                                        zs.log.debug("加载必要分包", "Core");
                                        _context2.next = 32;
                                        return zs.resource.preload().catch(function (e) {
                                            return e;
                                        });

                                    case 32:
                                        this.progress = 40;
                                        zs.log.debug("加载 main", "Core");
                                        _context2.next = 36;
                                        return zs.fgui.loadPacks(zs.configs.gameCfg.fguiPacks, !0).catch(function (e) {
                                            return e;
                                        });

                                    case 36:
                                        this.onFGUIBind && this.onFGUIBind.run();
                                        this.progress = 50;
                                        zs.log.debug("初始化数据统计", "Core");
                                        _context2.next = 41;
                                        return zs.td.registeConfig(zs.configs.gameCfg.tdConfig).catch(function (e) {
                                            return e;
                                        });

                                    case 41:
                                        zs.EggKnock && (zs.EggKnock.init(), zs.core.onWorkflow(zs.workflow.PRODUCT_PLAY_END, zs.Handler.create(this, function () {
                                            zs.EggKnock.markGameNum(!0);
                                        }), !0));
                                        this.progress = 60;
                                        zs.log.debug("加载基础配置", "Core");
                                        if (!(zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.configs)) {
                                            _context2.next = 65;
                                            break;
                                        }
                                        _e24 = zs.configs.gameCfg.resources.configs;
                                        _context2.t1 = _regenerator.default.keys(_e24);

                                    case 47:
                                        if ((_context2.t2 = _context2.t1()).done) {
                                            _context2.next = 65;
                                            break;
                                        }
                                        _t95 = _context2.t2.value;
                                        _s49 = _e24[_t95];
                                        _context2.t3 = _s49;
                                        if (!_context2.t3) {
                                            _context2.next = 63;
                                            break;
                                        }
                                        if (!Array.isArray(_s49)) {
                                            _context2.next = 59;
                                            break;
                                        }
                                        _context2.t4 = _s49.length > 0 && null != _s49[0] && _s49[0].trim().length > 0;
                                        if (!_context2.t4) {
                                            _context2.next = 57;
                                            break;
                                        }
                                        _context2.next = 57;
                                        return zs.configs.load(_t95, _s49[0], _s49.length > 1 ? _s49[1] : null, !(_s49.length > 2) || _s49[2]).catch(function (e) {
                                            return e;
                                        });

                                    case 57:
                                        _context2.next = 63;
                                        break;

                                    case 59:
                                        _context2.t5 = "string" == typeof _s49;
                                        if (!_context2.t5) {
                                            _context2.next = 63;
                                            break;
                                        }
                                        _context2.next = 63;
                                        return zs.configs.load(_t95, _s49, null, !0).catch(function (e) {
                                            return e;
                                        });

                                    case 63:
                                        _context2.next = 47;
                                        break;

                                    case 65:
                                        if (!(this.progress = 70, zs.configs.gameCfg && zs.configs.gameCfg.resources && zs.configs.gameCfg.resources.prefabs)) {
                                            _context2.next = 86;
                                            break;
                                        }
                                        _e25 = zs.configs.gameCfg.resources.prefabs;
                                        _context2.t6 = _regenerator.default.keys(_e25);

                                    case 68:
                                        if ((_context2.t7 = _context2.t6()).done) {
                                            _context2.next = 86;
                                            break;
                                        }
                                        _t96 = _context2.t7.value;
                                        _s50 = _e25[_t96];
                                        _context2.t8 = _s50;
                                        if (!_context2.t8) {
                                            _context2.next = 84;
                                            break;
                                        }
                                        if (!Array.isArray(_s50)) {
                                            _context2.next = 80;
                                            break;
                                        }
                                        _context2.t9 = _s50.length > 0 && null != _s50[0] && _s50[0].trim().length > 0;
                                        if (!_context2.t9) {
                                            _context2.next = 78;
                                            break;
                                        }
                                        _context2.next = 78;
                                        return zs.prefabs.load(_t96, _s50[0], _s50.length > 1 ? _s50[1] : null, !(_s50.length > 2) || _s50[2]).catch(function (e) {
                                            return e;
                                        });

                                    case 78:
                                        _context2.next = 84;
                                        break;

                                    case 80:
                                        _context2.t10 = "string" == typeof _s50;
                                        if (!_context2.t10) {
                                            _context2.next = 84;
                                            break;
                                        }
                                        _context2.next = 84;
                                        return zs.prefabs.load(_t96, _s50, null, !0).catch(function (e) {
                                            return e;
                                        });

                                    case 84:
                                        _context2.next = 68;
                                        break;

                                    case 86:
                                        this.progress = 80, zs.log.debug("广告组件初始化", "Core");
                                        r = s.userId % zs.configs.gameCfg.adsGroup * 2;
                                        zs.platform.initAds({
                                            num: zs.configs.gameCfg.adsNum,
                                            idx: r
                                        });
                                        this.progress = 85;
                                        zs.log.debug("业务流程拼装", "Core");
                                        this.progress = 95;
                                        null == this.workflow && (this.workflow = new zs.workflow());
                                        _context2.t11 = this.workflow.exporterPack;
                                        if (!_context2.t11) {
                                            _context2.next = 102;
                                            break;
                                        }
                                        if (!Array.isArray(this.workflow.exporterPack)) {
                                            _context2.next = 100;
                                            break;
                                        }
                                        _context2.next = 98;
                                        return zs.fgui.loadPacks(this.workflow.exporterPack).catch(function (e) {
                                            return e;
                                        });

                                    case 98:
                                        _context2.next = 102;
                                        break;

                                    case 100:
                                        _context2.next = 102;
                                        return zs.fgui.loadPack(this.workflow.exporterPack).catch(function (e) {
                                            return e;
                                        });

                                    case 102:
                                        this.workflow.registe();
                                        this.workflow.registeChildFSM();
                                        if (!this.workListeners) {
                                            _context2.next = 107;
                                            break;
                                        }
                                        for (_e26 = 0, _t97 = this.workListeners.length; _e26 < _t97; _e26++) {
                                            _t98 = this.workListeners[_e26];
                                            _t98.handler.once ? _t98.later ? this.workflow.onceLater(_t98.key, _t98.handler, _t98.isBefore) : this.workflow.once(_t98.key, _t98.handler, _t98.isBefore) : _t98.later ? this.workflow.onLater(_t98.key, _t98.handler, _t98.isBefore) : this.workflow.on(_t98.key, _t98.handler, _t98.isBefore);
                                        }
                                        this.workListeners = null;

                                    case 107:
                                        this.checkGameCfg(e), this.onPrepare ? this.onPrepare.run() : this.readyFinish();

                                    case 108:
                                    case "end":
                                        return _context2.stop();
                                    case "default":
                                        return;
                                }
                            }
                            // })
                        }, _callee2, this);

                    }));
                    function ready() {
                        return _ready.apply(this, arguments);
                    }
                    return ready;
                }()
            }, {
                key: "readyFinish",
                value: function readyFinish() {
                    this.checkPanelSort(), zs.Timer.inst.frameLoop(1, this, this.step), this.progress = 100,
                        this._readyStart = !0;
                }
            }, {
                key: "step",
                value: function step() {
                    this.checkPanelSort();
                }
            }, {
                key: "start",
                value: function start() {
                    zs.log.debug("启动业务", "Core"),
                        this.readyStart && (this.workflow.start()
                            , this.onStart && this.onStart.run()
                            , zs.td.justTrack(zs.td.gameStartKey, zs.td.gameStartDesc, {
                                uid: s.userId
                            }), platform.getInstance().hideSplash(),
                            platform.getInstance().showBanner()
                        );
                }
            }, {
                key: "onWorkflow",
                value: function onWorkflow(e, t, _s39, i) {
                    null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                        this.workflow ? this.workflow.on(e, t, _s39, i) : (t.once = !1, this.workListeners.push({
                            key: e,
                            handler: t,
                            priority: i,
                            isBefore: _s39
                        })));
                }
            }, {
                key: "onWorkflowLater",
                value: function onWorkflowLater(e, t, _s40, i) {
                    null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                        this.workflow ? this.workflow.onLater(e, t, _s40, i) : (t.once = !1, this.workListeners.push({
                            key: e,
                            handler: t,
                            priority: i,
                            isBefore: _s40,
                            later: !0
                        })));
                }
            }, {
                key: "onceWorkflow",
                value: function onceWorkflow(e, t, _s41, i) {
                    null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                        this.workflow ? this.workflow.once(e, t, _s41, i) : (t.once = !0, this.workListeners.push({
                            key: e,
                            handler: t,
                            priority: i,
                            isBefore: _s41
                        })));
                }
            }, {
                key: "onceWorkflowLater",
                value: function onceWorkflowLater(e, t, _s42, i) {
                    null == e || e.length <= 0 || null == t || (null == this.workListeners && (this.workListeners = []),
                        this.workflow ? this.workflow.onceLater(e, t, _s42, i) : (t.once = !0, this.workListeners.push({
                            key: e,
                            handler: t,
                            priority: i,
                            isBefore: _s42,
                            later: !0
                        })));
                }
            }, {
                key: "onAppShow",
                value: function onAppShow(e) {
                    if (!(null == this.appShowListeners || this.appShowListeners.length <= 0)) for (var _t99 = 0, _s51 = this.appShowListeners.length; _t99 < _s51; _t99++) {
                        var i = this.appShowListeners[_t99];
                        i && i.runWith(e), i && !i.once || (this.appShowListeners.splice(_t99, 1), _t99--,
                            _s51--);
                    }
                }
            }, {
                key: "onAppHide",
                value: function onAppHide(e) {
                    if (!(null == this.appHideListeners || this.appHideListeners.length <= 0)) for (var _t100 = 0, _s52 = this.appHideListeners.length; _t100 < _s52; _t100++) {
                        var i = this.appHideListeners[_t100];
                        i && i.runWith(e), i && !i.once || (this.appHideListeners.splice(_t100, 1), _t100--,
                            _s52--);
                    }
                }
            }, {
                key: "addAppShow",
                value: function addAppShow(e) {
                    null != e && (null == this.appShowListeners && (this.appShowListeners = []), this.appShowListeners.push(e));
                }
            }, {
                key: "removeAppShow",
                value: function removeAppShow(e) {
                    if (null == e || null == this.appShowListeners || this.appShowListeners.length <= 0) return;
                    var t = e.caller, _s45 = e.method, i = e.once;
                    for (var _e27 = 0, r = this.appShowListeners.length; _e27 < r; _e27++) {
                        var n = this.appShowListeners[_e27];
                        !n || t && n.caller !== t || null != _s45 && n.method !== _s45 || i && !n.once || (this.appShowListeners.splice(_e27, 1),
                            _e27--, r--, n.recover());
                    }
                }
            }, {
                key: "addAppHide",
                value: function addAppHide(e) {
                    null != e && (null == this.appHideListeners && (this.appHideListeners = []), this.appHideListeners.push(e));
                }
            }, {
                key: "removeAppHide",
                value: function removeAppHide(e) {
                    if (null == e || null == this.appHideListeners || this.appHideListeners.length <= 0) return;
                    var t = e.caller, _s46 = e.method, i = e.once;
                    for (var _e28 = 0, r = this.appHideListeners.length; _e28 < r; _e28++) {
                        var n = this.appHideListeners[_e28];
                        !n || t && n.caller !== t || null != _s46 && n.method !== _s46 || i && !n.once || (this.appHideListeners.splice(_e28, 1),
                            _e28--, r--, n.recover());
                    }
                }
            }, {
                key: "checkPanelSort",
                value: function checkPanelSort() {
                    zs.proxy.sortScene(this.entryInst);
                }
            }, {
                key: "checkGameCfg",
                value: function checkGameCfg(e) {
                    var t = zs.configs.gameCfg;
                    if (null == t.appName || t.appName.trim().length <= 0) return zs.fgui.msgtext.show("");
                    if (null == t.gameId || t.gameId.trim().length <= 0) return zs.fgui.msgtext.show("");
                    if (null == t.appId || t.appId.trim().length <= 0) return zs.fgui.msgtext.show("");
                    if (1 == s.userId && zs.platform.proxy) return zs.fgui.msgtext.show("");
                    if (!t.cp && (null == t.tdKey || t.tdKey.trim().length <= 0) && "wx_" == zs.platform.config.platformMark) return zs.fgui.msgtext.show("");
                    if (null == t.version || t.version.trim().length <= 0) return zs.fgui.msgtext.show("");
                    if (null == e || e.length < 0) return zs.fgui.msgtext.show("");
                    var i = !1;
                    if (!zs.configs.gameCfg.skipGamePlayBanner) {
                        var _e29 = !1, _t101 = zs.configs.productCfg, _s53 = _t101.GAME_PLAY;
                        if (_s53) {
                            var _i17 = _s53.states;
                            if ((!_i17 || _i17.length <= 0) && _s53.banner && _s53.banner.auto && _s53.banner.checkInit && (_e29 = !0),
                                !_e29 && _i17 && _i17.length > 0) for (var _s54 = 0, r = _i17.length; _s54 < r; _s54++) {
                                    var _r = _t101["GAME_PLAY." + _i17[_s54]];
                                    if (_r && _r.banner && _r.banner.auto && _r.banner.checkInit) {
                                        _e29 = !0;
                                        break;
                                    }
                                }
                        }
                        i = !_e29;
                    }
                    return i ? zs.fgui.msgtext.show("游戏内容中没有配置Banner") : t.pure && zs.platform.proxy ?
                        zs.fgui.msgtext.show("当前处于纯净模式") :
                        t.debug && zs.platform.proxy ? zs.fgui.msgtext.show("当前处于测试模式") : void 0;
                }
            }]);
            return s;
        }();
        s.userInfo = null, s.userId = null, s.entry = null, s.onConfigInit = null, s.onFGUIBind = null,
            s.onPrepare = null, s.onStart = null, s.overrideWorkflow = null, s.workflow = null,
            s.loadingPage = null, s.layaLoadingPage = null, e.showMsgBox = function (e) {
                zs.fgui.msgbox.show(e);
            }, e.hideMsgBox = function (e) {
                e && zs.fgui.msgbox.clear(), zs.fgui.msgbox.hide();
            }, e.workflow = t, e.core = s;
    }(window.zs = window.zs || {});
}()