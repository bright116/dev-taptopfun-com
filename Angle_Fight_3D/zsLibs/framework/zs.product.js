var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t) {
    "use strict";
    var e = /* */ function() {
        function e() {
            (0, _classCallCheck2.default)(this, e);
        }
        (0, _createClass2.default)(e, null, [ {
            key: "cleanProductKey",
            value: function cleanProductKey(t) {
                return t.replace(/\s/g, "").replace("（", "(").replace("）", ")");
            }
        }, {
            key: "init",
            value: function init(t) {
                if (this.scene = zs.utils.getItem(this.firstSceneCache),(// this.scene || (this.scene = zs.platform.sync.getScene(), 
                this.scene && zs.utils.setItem(this.firstSceneCache, this.scene)), null != t) {
                    this._defines = t;
                    for (var _e in t) {
                        _e = this.cleanProductKey(_e), zs.configs.gameCfg.pure ? (this.keys[_e] = null, 
                        this._defines[_e] = null) : this.keys[_e] = t[_e];
                    }
                }
            }
        }, {
            key: "sync",
            value: function sync(t) {
                if (!(null == t || t.length <= 0 || zs.configs.gameCfg.pure)) {
                    t.zs_country_white_list && (this.country = t.zs_country_white_list);
                    for (var _e2 in t) {
                        this.registe(_e2, t[_e2]);
                    }
                    if (zs.configs.gameCfg.debug) zs.network.dataEdit("is_shielded", "0").catch(function(t) {
                        return t;
                    }); else {
                        var _t = !1, s = !1, i = !1, n = this.sceneCheck(this.keys[e.switchScene]), c = this.countryCheck(), h = zs.product.get("zs_block_switchs");
                        for (var _e3 in this.keys) {
                            if (!this.keys[_e3]) continue;
                            var l = this.blockCheck(_e3, h);
                            if (!n && l) {
                                this.keys[_e3] = null, this._defines && (this._defines[_e3] = null), _t = !0;
                                continue;
                            }
                            if (!c && l) {
                                this.keys[_e3] = null, this._defines && (this._defines[_e3] = null);
                                continue;
                            }
                            var r = _e3 + "(" + this.sceneMark + ")", u = this.keys[r];
                            if (this.scene && u && u.length > 0) {
                                var _s = this.sceneCheck(u);
                                if (!_s) {
                                    this.keys[_e3] = _s, this._defines && (this._defines[_e3] = _s), _t = !0;
                                    continue;
                                }
                            }
                            var f = _e3 + "(" + this.cityMark + ")", a = this.keys[f];
                            if (this.city && a && a.length > 0) {
                                var _t2 = this.cityCheck(a);
                                if (!_t2) {
                                    this.keys[_e3] = _t2, this._defines && (this._defines[_e3] = _t2), s = !0;
                                    continue;
                                }
                            }
                            var o = _e3 + "(" + this.timeMark + ")", y = this.keys[o];
                            if (this.timestamp && y && y.length > 0) {
                                var _t3 = y.split(/[|｜]/), _s2 = 1;
                                if (_t3.length > 1) {
                                    for (var _e4 = 0, _i = _t3.length; _e4 < _i; _e4++) {
                                        if (!this.timeCheck(_t3[_e4])) {
                                            _s2 = 0;
                                            break;
                                        }
                                    }
                                } else _s2 = this.timeCheck(y);
                                _s2 || (this.keys[_e3] = _s2, this._defines && (this._defines[_e3] = _s2), i = !0);
                            }
                        }
                        c || zs.network.dataEdit("is_shielded", "1").catch(function(t) {
                            return t;
                        }), _t ? (console.log("场景值屏蔽生效", this.scene), zs.fgui.msgtext.show("场景值屏蔽生效:" + this.scene), 
                        zs.td.justTrack("场景值屏蔽生效", "场景值屏蔽生效", {
                            scene: this.scene
                        })) : s ? (console.log("地区屏蔽生效", this.city), zs.fgui.msgtext.show("地区屏蔽生效:" + this.city), 
                        zs.td.justTrack("地区屏蔽生效", "地区屏蔽生效", {
                            city: this.city
                        })) : i && (console.log("时间屏蔽生效", this.timestamp), zs.fgui.msgtext.show("时间屏蔽生效:" + this.timestamp), 
                        zs.td.justTrack("时间屏蔽生效", "时间屏蔽生效", {
                            timestamp: this.timestamp
                        }));
                    }
                    this.synced = !0;
                }
            }
        }, {
            key: "blockCheck",
            value: function blockCheck(t, e) {
                return t && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(t) < 0 ? null : 1 : null;
            }
        }, {
            key: "countryCheck",
            value: function countryCheck() {
                return zs.core.userInfo.is_shielded ? (zs.td.justTrack("黑名单屏蔽生效", "黑名单屏蔽生效"), zs.fgui.msgtext.show("黑名单屏蔽生效"), 
                null) : this.country && this.countryWhiteList && "" != this.countryWhiteList && this.countryWhiteList.replace(/\s/g, "").split(/[|｜]/).indexOf(this.country) < 0 ? (zs.fgui.msgtext.show("国家屏蔽生效:" + this.country), 
                zs.td.justTrack("国家屏蔽生效", "国家屏蔽生效", {
                    country: this.country
                }), null) : 1;
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
                var e = t.split("-");
                if (e.length < 2) return 1;
                var s = e[0].split(/[:：]/), i = e[1].split(/[:：]/), n = new Date(this.timestamp), c = n.getHours(), h = n.getMinutes();
                if (s.length > 0) {
                    var _t4 = parseInt(s[0]);
                    if (isNaN(_t4) && (_t4 = 0), c < _t4) return 1;
                    if (c == _t4 && s.length > 1) {
                        var _t5 = parseInt(s[1]);
                        if (isNaN(_t5) && (_t5 = 0), h < _t5) return 1;
                    }
                }
                if (i.length > 0) {
                    var _t6 = parseInt(i[0]);
                    if (isNaN(_t6) && (_t6 = 0), c > _t6) return 1;
                    if (c == _t6 && i.length > 1) {
                        var _t7 = parseInt(i[1]);
                        if (isNaN(_t7) && (_t7 = 0), h > _t7) return 1;
                    }
                }
                return null;
            }
        }, {
            key: "registe",
            value: function registe(t, e) {
                if (null == e) return;
                t = this.cleanProductKey(t);
                var s = this.keys[t];
                if (null == s || (0, _typeof2.default)(s) == (0, _typeof2.default)(e)) this.keys[t] = e, 
                this._defines && (this._defines[t] = e); else if ("number" == typeof s && "string" == typeof e) {
                    var _s3 = parseFloat(e);
                    isNaN(_s3) && (_s3 = 0), this.keys[t] = _s3, this._defines && (this._defines[t] = _s3);
                } else zs.log.warn("关键词类型不匹配，无法注册产品关键词：" + t, "Product");
            }
        }, {
            key: "get",
            value: function get(t) {
                t = this.cleanProductKey(t);
                var e = this.keys[t];
                return "function" == typeof e ? e.call(this) : (null == e && zs.log.debug("产品开关 " + t + " 不存在"), 
                e);
            }
        }, {
            key: "keys",
            get: function get() {
                return null == this._keys && (this._keys = {}), this._keys;
            }
        } ]);
        return e;
    }();
    e.synced = !1, e.scene = null, e.city = null, e.country = null, e.timestamp = null, 
    e.firstSceneCache = "first_enter_scene", e.switchScene = "zs_scene_value", e.sceneMark = "scene", 
    e.cityMark = "city", e.timeMark = "time", e.countryWhiteList = "中国", t.product = e;
}(window.zs = window.zs || {});