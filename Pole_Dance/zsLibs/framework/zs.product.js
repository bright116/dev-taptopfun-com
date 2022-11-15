var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("../../@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(e) {
    var t = /* */ function() {
        function t() {
            (0, _classCallCheck2.default)(this, t);
        }
        (0, _createClass2.default)(t, null, [ {
            key: "cleanProductKey",
            value: function cleanProductKey(e) {
                return e.replace(/\s/g, "").replace("（", "(").replace("）", ")");
            }
        }, {
            key: "init",
            value: function init(e) {
                if (null != e) {
                    this._defines = e;
                    for (var _t in e) {
                        _t = this.cleanProductKey(_t), zs.configs.gameCfg.pure ? (this.keys[_t] = null, 
                        this._defines[_t] = null) : this.keys[_t] = e[_t];
                    }
                }
            }
        }, {
            key: "sync",
            value: function sync(e) {
                if (null != e && !zs.configs.gameCfg.pure) {
                    for (var _t2 in e) {
                        this.registe(_t2, e[_t2]);
                    }
                    if (!zs.configs.gameCfg.debug) {
                        this.scene = Laya.LocalStorage.getItem(this.firstSceneCache), this.scene || (this.scene = zs.platform.sync.getScene(), 
                        this.scene && Laya.LocalStorage.setItem(this.firstSceneCache, this.scene));
                        var _e = this.sceneCheck(this.keys[t.switchScene]);
                        for (var _t3 in this.keys) {
                            if (!_e) {
                                this.keys[_t3] = null, this._defines && (this._defines[_t3] = null);
                                continue;
                            }
                            var s = _t3 + "(" + this.sceneMark + ")", i = this.keys[s];
                            if (this.scene && i && i.length > 0) {
                                var _e2 = this.sceneCheck(i);
                                if (this.keys[_t3] = _e2, this._defines && (this._defines[_t3] = _e2), !_e2) continue;
                            }
                            var n = _t3 + "(" + this.cityMark + ")", h = this.keys[n];
                            if (this.city && h && h.length > 0) {
                                var _e3 = this.cityCheck(h);
                                if (this.keys[_t3] = _e3, this._defines && (this._defines[_t3] = _e3), !_e3) continue;
                            }
                            var l = _t3 + "(" + this.timeMark + ")", c = this.keys[l];
                            if (this.timestamp && c && c.length > 0) {
                                var _e4 = c.split(/[|｜]/), _s = 1;
                                if (_e4.length > 1) {
                                    _s = 0;
                                    for (var _t4 = 0, _i = _e4.length; _t4 < _i; _t4++) {
                                        if (!this.timeCheck(_e4[_t4])) {
                                            _s = _t4 + 1;
                                            break;
                                        }
                                    }
                                } else _s = this.timeCheck(c);
                                this.keys[_t3] = _s, this._defines && (this._defines[_t3] = _s);
                            }
                        }
                    }
                }
            }
        }, {
            key: "cityCheck",
            value: function cityCheck(e) {
                return this.city && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(this.city) < 0 ? 1 : 0 : 1;
            }
        }, {
            key: "sceneCheck",
            value: function sceneCheck(e) {
                return this.scene && e && "" !== e ? e.replace(/\s/g, "").split(/[|｜]/).indexOf(this.scene) < 0 ? 1 : 0 : 1;
            }
        }, {
            key: "timeCheck",
            value: function timeCheck(e) {
                if (!this.timestamp || !e || "" === e) return 1;
                var t = e.split("-");
                if (t.length < 2) return 1;
                var s = t[0].split(/[:：]/), i = t[1].split(/[:：]/), n = new Date(this.timestamp), h = n.getHours(), l = n.getMinutes();
                if (s.length > 0) {
                    var _e5 = parseInt(s[0]);
                    if (isNaN(_e5) && (_e5 = 0), h < _e5) return 1;
                    if (h == _e5 && s.length > 1) {
                        var _e6 = parseInt(s[1]);
                        if (isNaN(_e6) && (_e6 = 0), l < _e6) return 1;
                    }
                }
                if (i.length > 0) {
                    var _e7 = parseInt(i[0]);
                    if (isNaN(_e7) && (_e7 = 0), h > _e7) return 1;
                    if (l == _e7 && i.length > 1) {
                        var _e8 = parseInt(i[1]);
                        if (isNaN(_e8) && (_e8 = 0), l > _e8) return 1;
                    }
                }
                return 0;
            }
        }, {
            key: "registe",
            value: function registe(e, t) {
                if (null == t) return;
                e = this.cleanProductKey(e);
                var s = this.keys[e];
                if (null == s || (0, _typeof2.default)(s) == (0, _typeof2.default)(t)) this.keys[e] = t, 
                this._defines && (this._defines[e] = t); else if ("number" == typeof s && "string" == typeof t) {
                    var _s2 = parseFloat(t);
                    isNaN(_s2) && (_s2 = 0), this.keys[e] = _s2, this._defines && (this._defines[e] = _s2);
                } else zs.log.warn("关键词类型不匹配，无法注册产品关键词：" + e, "Product");
            }
        }, {
            key: "get",
            value: function get(e) {
                e = this.cleanProductKey(e);
                var t = this.keys[e];
                return "function" == typeof t ? t.call(this) : (null == t && zs.log.debug("产品开关 " + e + " 不存在"), 
                t);
            }
        }, {
            key: "keys",
            get: function get() {
                return null == this._keys && (this._keys = {}), this._keys;
            }
        } ]);
        return t;
    }();
    t.scene = null, t.city = null, t.timestamp = null, t.firstSceneCache = "first_enter_scene", 
    t.switchScene = "zs_scene_value", t.sceneMark = "scene", t.cityMark = "city", t.timeMark = "time", 
    e.product = t;
}(window.zs = window.zs || {});