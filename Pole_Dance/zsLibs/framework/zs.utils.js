var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t, e) {
    "use strict";
    var n = /* */ function() {
        function n() {
            (0, _classCallCheck2.default)(this, n);
        }
        (0, _createClass2.default)(n, null, [ {
            key: "getOrAddComponent",
            value: function getOrAddComponent(t, e) {
                if (null == t) return;
                var n = t.getComponent(e);
                return null == n && (n = t.addComponent(e)), n;
            }
        }, {
            key: "sleep",
            value: function sleep(t) {
                return new Promise(function(e, n) {
                    setTimeout(function() {
                        e();
                    }, t);
                });
            }
        }, {
            key: "isToday",
            value: function isToday(t) {
                var e = Date.now();
                if (e - t > 86400) return !1;
                var n = new Date(e), r = new Date(t);
                return n.getDate() == r.getDate();
            }
        }, {
            key: "randInt",
            value: function randInt(t, e) {
                return Math.random() * (e - t) + t << 0;
            }
        }, {
            key: "srandInt",
            value: function srandInt(t, e) {
                return this.seedRandom() * (e - t) + t << 0;
            }
        }, {
            key: "rand",
            value: function rand(t, e) {
                return Math.random() * (e - t) + t;
            }
        }, {
            key: "srand",
            value: function srand(t, e) {
                return this.seedRandom() * (e - t) + t;
            }
        }, {
            key: "seedRandom",
            value: function seedRandom() {
                return this.randSeed = (9301 * this.randSeed + 49297) % 233280, this.randSeed / 233280;
            }
        }, {
            key: "setRandSeed",
            value: function setRandSeed(t) {
                this.randSeed = t, this.randSeed = (9301 * this.randSeed + 49297) % 233280;
            }
        }, {
            key: "pickNumbers",
            value: function pickNumbers(t, e, n) {
                var _ref;
                if (n <= 0) return [];
                t > e && (_ref = [ e, t ], t = _ref[0], e = _ref[1], _ref);
                var r = [], s = [];
                for (var _n = t; _n <= e; _n++) {
                    s.push(_n);
                }
                n >= s.length && (n = s.length);
                for (var _t = 0; _t < n; _t++) {
                    var _t2 = this.randInt(0, s.length);
                    r.push(s[_t2]), s.splice(_t2, 1);
                }
                return r;
            }
        }, {
            key: "spickNumbers",
            value: function spickNumbers(t, e, n, r) {
                var _ref2;
                if (n <= 0) return [];
                t > e && (_ref2 = [ e, t ], t = _ref2[0], e = _ref2[1], _ref2);
                var s = [], a = [];
                for (var _n2 = t; _n2 <= e; _n2++) {
                    a.push(_n2);
                }
                n >= a.length && (n = a.length), r && this.setRandSeed(r);
                for (var _t3 = 0; _t3 < n; _t3++) {
                    var _t4 = this.srandInt(0, a.length);
                    s.push(a[_t4]), a.splice(_t4, 1);
                }
                return s;
            }
        }, {
            key: "pickArray",
            value: function pickArray(t, e) {
                if (null == t || t.length <= 0 || e <= 0) return [];
                var n = [], r = t.concat();
                e >= r.length && (e = r.length);
                for (var _t5 = 0; _t5 < e; _t5++) {
                    var _t6 = this.randInt(0, r.length);
                    n.push(r[_t6]), r.splice(_t6, 1);
                }
                return n;
            }
        }, {
            key: "spickArray",
            value: function spickArray(t, e, n) {
                if (null == t || t.length <= 0 || e <= 0) return [];
                var r = [], s = t.concat();
                e >= s.length && (e = s.length), n && this.setRandSeed(n);
                for (var _t7 = 0; _t7 < e; _t7++) {
                    var _t8 = this.srandInt(0, s.length);
                    r.push(s[_t8]), s.splice(_t8, 1);
                }
                return r;
            }
        }, {
            key: "isNumber",
            value: function isNumber(t) {
                return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t));
            }
        }, {
            key: "startwith",
            value: function startwith(t, e) {
                return !(t.length < e.length) && t.slice(0, e.length) == e;
            }
        }, {
            key: "flatKVJson",
            value: function flatKVJson(t, e) {
                var n = {};
                if (!Array.isArray(t) || t.length <= 0) return n;
                for (var r = 0, s = t.length; r < s; r++) {
                    var _s = t[r];
                    if (_s.key && _s.value) {
                        var _t9 = _s.value;
                        if (e && "number" != typeof _s.value) {
                            var _e = parseFloat(_s.value);
                            isNaN(_e) || (_t9 = _s.value);
                        }
                        n[_s.key] = _t9;
                    }
                }
                return n;
            }
        } ]);
        return n;
    }();
    n.randSeed = 5, t.utils = n;
}(window.zs = window.zs || {}, Laya);