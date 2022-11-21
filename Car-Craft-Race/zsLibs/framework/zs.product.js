!function () {
    var _typeof2 = require("../../runtime/helpers/typeof");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, function (t) {
        "use strict";
        var e = /* */ function () {
            function e() {
                _classCallCheck2(this, e);
            }
            _createClass2(e, null, [{
                key: "keys",
                get: function get() {
                    return null == this._keys && (this._keys = {}), this._keys;
                }
            }, {
                key: "cleanProductKey",
                value: function cleanProductKey(t) {
                    return t.replace(/\s/g, "").replace("（", "(").replace("）", ")");
                }
            }, {
                key: "init",
                value: function init(t) {
                    if (this.scene = zs.utils.getItem(this.firstSceneCache), this.scene || (this.scene = zs.platform.sync.getScene(),
                        this.scene && zs.utils.setItem(this.firstSceneCache, this.scene)), null != t) {
                        this._defines = t;
                        for (var _e8 in t) {
                            _e8 = this.cleanProductKey(_e8), zs.configs.gameCfg.pure ? (this.keys[_e8] = null,
                                this._defines[_e8] = null) : this.keys[_e8] = t[_e8];
                        }
                    }
                }
            }, {
                key: "sync",
                value: function sync(t) {
                    if (!(null == t || t.length <= 0 || zs.configs.gameCfg.pure)) {
                        t.zs_country_white_list && (this.country = t.zs_country_white_list);
                        for (var _e9 in t) {
                            this.registe(_e9, t[_e9]);
                        }
                        if (zs.configs.gameCfg.debug) zs.network.edit("is_shielded", "0").catch(function (t) {
                            return t;
                        }); else {
                            var _t = !1, s = !1, i = !1, n = !1, c = this.sceneCheck(this.keys[e.switchScene]), l = this.countryCheck();
                            for (var h in this.keys) {
                                if (!this.keys[h]) continue;
                                var r = e.blockSwitch.indexOf(h) >= 0;
                                if (!c && r) {
                                    this.keys[h] = null, this._defines && (this._defines[h] = null), _t = !0;
                                    continue;
                                }
                                if (!l && r) {
                                    this.keys[h] = null, this._defines && (this._defines[h] = null), s = !0;
                                    continue;
                                }
                                var u = h + "(" + this.sceneMark + ")", a = this.keys[u];
                                if (this.scene && a && a.length > 0) {
                                    var _e10 = this.sceneCheck(a);
                                    if (!_e10) {
                                        this.keys[h] = _e10, this._defines && (this._defines[h] = _e10), _t = !0;
                                        continue;
                                    }
                                }
                                var f = h + "(" + this.cityMark + ")", o = this.keys[f];
                                if (this.city && o && o.length > 0) {
                                    var _t2 = this.cityCheck(o);
                                    if (!_t2) {
                                        this.keys[h] = _t2, this._defines && (this._defines[h] = _t2), i = !0;
                                        continue;
                                    }
                                }
                                var y = h + "(" + this.timeMark + ")", _ = this.keys[y];
                                if (this.timestamp && _ && _.length > 0) {
                                    var _t3 = _.split(/[|｜]/), _e11 = 1;
                                    if (_t3.length > 1) {
                                        for (var _s = 0, _i = _t3.length; _s < _i; _s++) {
                                            if (!this.timeCheck(_t3[_s])) {
                                                _e11 = 0;
                                                break;
                                            }
                                        }
                                    } else _e11 = this.timeCheck(_);
                                    _e11 || (this.keys[h] = _e11, this._defines && (this._defines[h] = _e11), n = !0);
                                }
                            }
                            s && zs.network.edit("is_shielded", "1").catch(function (t) {
                                return t;
                            }), _t ? (console.log("场景值屏蔽生效", this.scene), zs.td.justTrack("场景值屏蔽生效", "场景值屏蔽生效", {
                                scene: this.scene
                            })) : s ? (console.log("国家屏蔽生效", this.country), zs.td.justTrack("国家屏蔽生效", "国家屏蔽生效", {
                                country: this.country
                            })) : i ? (console.log("地区屏蔽生效", this.city), zs.td.justTrack("地区屏蔽生效", "地区屏蔽生效", {
                                city: this.city
                            })) : n && (console.log("时间屏蔽生效", this.timestamp), zs.td.justTrack("时间屏蔽生效", "时间屏蔽生效", {
                                timestamp: this.timestamp
                            }));
                        }
                        this.synced = !0;
                    }
                }
            }, {
                key: "countryCheck",
                value: function countryCheck() {
                    return zs.core.userInfo.is_shielded ? null : this.country && this.countryWhiteList && "" != this.countryWhiteList ? this.countryWhiteList.replace(/\s/g, "").split(/[|｜]/).indexOf(this.country) < 0 ? null : 1 : null;
                }
            }, {
                key: "cityCheck",
                value: function cityCheck(t) {
                    return this.city && t && "" !== t ? t.replace(/\s/g, "").split(/[|｜]/).indexOf(this.city) < 0 ? 1 : null : 1;
                }
            }, {
                key: "sceneCheck",
                value: function sceneCheck(t) {
                    return this.scene && t && "" !== t ? t.replace(/\s/g, "").split(/[|｜]/).indexOf(this.scene) < 0 ? 1 : null : 1;
                }
            }, {
                key: "timeCheck",
                value: function timeCheck(t) {
                    if (!this.timestamp || !t || "" === t) return 1;
                    var _e5 = t.split("-");
                    if (_e5.length < 2) return 1;
                    var s = _e5[0].split(/[:：]/), i = _e5[1].split(/[:：]/), n = new Date(this.timestamp), c = n.getHours(), l = n.getMinutes();
                    if (s.length > 0) {
                        var _t4 = parseInt(s[0]);
                        if (isNaN(_t4) && (_t4 = 0), c < _t4) return 1;
                        if (c == _t4 && s.length > 1) {
                            var _t5 = parseInt(s[1]);
                            if (isNaN(_t5) && (_t5 = 0), l < _t5) return 1;
                        }
                    }
                    if (i.length > 0) {
                        var _t6 = parseInt(i[0]);
                        if (isNaN(_t6) && (_t6 = 0), c > _t6) return 1;
                        if (c == _t6 && i.length > 1) {
                            var _t7 = parseInt(i[1]);
                            if (isNaN(_t7) && (_t7 = 0), l > _t7) return 1;
                        }
                    }
                    return null;
                }
            }, {
                key: "registe",
                value: function registe(t, _e6) {
                    if (null == _e6) return;
                    t = this.cleanProductKey(t);
                    var s = this.keys[t];
                    if (null == s || _typeof2(s) == _typeof2(_e6)) this.keys[t] = _e6, this._defines && (this._defines[t] = _e6); else if ("number" == typeof s && "string" == typeof _e6) {
                        var _s2 = parseFloat(_e6);
                        isNaN(_s2) && (_s2 = 0), this.keys[t] = _s2, this._defines && (this._defines[t] = _s2);
                    } else zs.log.warn("关键词类型不匹配，无法注册产品关键词：" + t, "Product");
                }
            }, {
                key: "get",
                value: function get(t) {
                    t = this.cleanProductKey(t);
                    var _e7 = this.keys[t];
                    return "function" == typeof _e7 ? _e7.call(this) : (null == _e7 && zs.log.debug("产品开关 " + t + " 不存在"),
                        _e7);
                }
            }]);
            return e;
        }();
        e.synced = !1, e.scene = null, e.city = null, e.country = null, e.timestamp = null,
            e.firstSceneCache = "first_enter_scene", e.switchScene = "zs_scene_value", e.sceneMark = "scene",
            e.cityMark = "city", e.timeMark = "time", e.countryWhiteList = "中国", e.blockSwitch = ["zs_button_delay_time", "zs_start_game_video_switch", "zs_full_screen_button_switch", "zs_banner_vertical_enable", "zs_click_award_num", "zs_ready_click_num", "zs_auto_full_screen_jump_switch", "zs_game_start_jump_switch"],
            t.product = e;
    }(window.zs = window.zs || {});
}()