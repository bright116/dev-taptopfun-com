var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("../../@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function (t) {
    var e;
    !function (t) {
        t[t.Local = 0] = "Local", t[t.Async = 1] = "Async", t[t.Sync = 2] = "Sync";
    }(e = e || (e = {}));
    var s = /* */ function () {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [{
            key: "rotateLeft",
            value: function rotateLeft(t, e) {
                return t << e | t >>> 32 - e;
            }
        }, {
            key: "addUnsigned",
            value: function addUnsigned(t, e) {
                var s, i, a, n, r;
                return a = 2147483648 & t, n = 2147483648 & e, r = (1073741823 & t) + (1073741823 & e),
                    (s = 1073741824 & t) & (i = 1073741824 & e) ? 2147483648 ^ r ^ a ^ n : s | i ? 1073741824 & r ? 3221225472 ^ r ^ a ^ n : 1073741824 ^ r ^ a ^ n : r ^ a ^ n;
            }
        }, {
            key: "F",
            value: function F(t, e, s) {
                return t & e | ~t & s;
            }
        }, {
            key: "G",
            value: function G(t, e, s) {
                return t & s | e & ~s;
            }
        }, {
            key: "H",
            value: function H(t, e, s) {
                return t ^ e ^ s;
            }
        }, {
            key: "I",
            value: function I(t, e, s) {
                return e ^ (t | ~s);
            }
        }, {
            key: "FF",
            value: function FF(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.F(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "GG",
            value: function GG(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.G(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "HH",
            value: function HH(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.H(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "II",
            value: function II(t, e, s, i, a, n, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.I(e, s, i), a), r)),
                    this.addUnsigned(this.rotateLeft(t, n), e);
            }
        }, {
            key: "convertToWordArray",
            value: function convertToWordArray(t) {
                for (var e, s = t.length, i = s + 8, a = 16 * ((i - i % 64) / 64 + 1), n = Array(a - 1), r = 0, o = 0; o < s;) {
                    r = o % 4 * 8, n[e = (o - o % 4) / 4] = n[e] | t.charCodeAt(o) << r, o++;
                }
                return r = o % 4 * 8, n[e = (o - o % 4) / 4] = n[e] | 128 << r, n[a - 2] = s << 3,
                    n[a - 1] = s >>> 29, n;
            }
        }, {
            key: "wordToHex",
            value: function wordToHex(t) {
                var e, s = "", i = "";
                for (e = 0; e <= 3; e++) {
                    s += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
                }
                return s;
            }
        }, {
            key: "uTF8Encode",
            value: function uTF8Encode(t) {
                t = t.replace(/\x0d\x0a/g, "\n");
                for (var e = "", s = 0; s < t.length; s++) {
                    var i = t.charCodeAt(s);
                    i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192),
                        e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
                            e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
                }
                return e;
            }
        }, {
            key: "md5",
            value: function md5(t) {
                var e, s, i, a, n, r, o, d, l, h = Array();
                for (t = this.uTF8Encode(t), h = this.convertToWordArray(t), r = 1732584193, o = 4023233417,
                    d = 2562383102, l = 271733878, e = 0; e < h.length; e += 16) {
                    s = r, i = o, a = d, n = l, r = this.FF(r, o, d, l, h[e + 0], 7, 3614090360), l = this.FF(l, r, o, d, h[e + 1], 12, 3905402710),
                        d = this.FF(d, l, r, o, h[e + 2], 17, 606105819), o = this.FF(o, d, l, r, h[e + 3], 22, 3250441966),
                        r = this.FF(r, o, d, l, h[e + 4], 7, 4118548399), l = this.FF(l, r, o, d, h[e + 5], 12, 1200080426),
                        d = this.FF(d, l, r, o, h[e + 6], 17, 2821735955), o = this.FF(o, d, l, r, h[e + 7], 22, 4249261313),
                        r = this.FF(r, o, d, l, h[e + 8], 7, 1770035416), l = this.FF(l, r, o, d, h[e + 9], 12, 2336552879),
                        d = this.FF(d, l, r, o, h[e + 10], 17, 4294925233), o = this.FF(o, d, l, r, h[e + 11], 22, 2304563134),
                        r = this.FF(r, o, d, l, h[e + 12], 7, 1804603682), l = this.FF(l, r, o, d, h[e + 13], 12, 4254626195),
                        d = this.FF(d, l, r, o, h[e + 14], 17, 2792965006), o = this.FF(o, d, l, r, h[e + 15], 22, 1236535329),
                        r = this.GG(r, o, d, l, h[e + 1], 5, 4129170786), l = this.GG(l, r, o, d, h[e + 6], 9, 3225465664),
                        d = this.GG(d, l, r, o, h[e + 11], 14, 643717713), o = this.GG(o, d, l, r, h[e + 0], 20, 3921069994),
                        r = this.GG(r, o, d, l, h[e + 5], 5, 3593408605), l = this.GG(l, r, o, d, h[e + 10], 9, 38016083),
                        d = this.GG(d, l, r, o, h[e + 15], 14, 3634488961), o = this.GG(o, d, l, r, h[e + 4], 20, 3889429448),
                        r = this.GG(r, o, d, l, h[e + 9], 5, 568446438), l = this.GG(l, r, o, d, h[e + 14], 9, 3275163606),
                        d = this.GG(d, l, r, o, h[e + 3], 14, 4107603335), o = this.GG(o, d, l, r, h[e + 8], 20, 1163531501),
                        r = this.GG(r, o, d, l, h[e + 13], 5, 2850285829), l = this.GG(l, r, o, d, h[e + 2], 9, 4243563512),
                        d = this.GG(d, l, r, o, h[e + 7], 14, 1735328473), o = this.GG(o, d, l, r, h[e + 12], 20, 2368359562),
                        r = this.HH(r, o, d, l, h[e + 5], 4, 4294588738), l = this.HH(l, r, o, d, h[e + 8], 11, 2272392833),
                        d = this.HH(d, l, r, o, h[e + 11], 16, 1839030562), o = this.HH(o, d, l, r, h[e + 14], 23, 4259657740),
                        r = this.HH(r, o, d, l, h[e + 1], 4, 2763975236), l = this.HH(l, r, o, d, h[e + 4], 11, 1272893353),
                        d = this.HH(d, l, r, o, h[e + 7], 16, 4139469664), o = this.HH(o, d, l, r, h[e + 10], 23, 3200236656),
                        r = this.HH(r, o, d, l, h[e + 13], 4, 681279174), l = this.HH(l, r, o, d, h[e + 0], 11, 3936430074),
                        d = this.HH(d, l, r, o, h[e + 3], 16, 3572445317), o = this.HH(o, d, l, r, h[e + 6], 23, 76029189),
                        r = this.HH(r, o, d, l, h[e + 9], 4, 3654602809), l = this.HH(l, r, o, d, h[e + 12], 11, 3873151461),
                        d = this.HH(d, l, r, o, h[e + 15], 16, 530742520), o = this.HH(o, d, l, r, h[e + 2], 23, 3299628645),
                        r = this.II(r, o, d, l, h[e + 0], 6, 4096336452), l = this.II(l, r, o, d, h[e + 7], 10, 1126891415),
                        d = this.II(d, l, r, o, h[e + 14], 15, 2878612391), o = this.II(o, d, l, r, h[e + 5], 21, 4237533241),
                        r = this.II(r, o, d, l, h[e + 12], 6, 1700485571), l = this.II(l, r, o, d, h[e + 3], 10, 2399980690),
                        d = this.II(d, l, r, o, h[e + 10], 15, 4293915773), o = this.II(o, d, l, r, h[e + 1], 21, 2240044497),
                        r = this.II(r, o, d, l, h[e + 8], 6, 1873313359), l = this.II(l, r, o, d, h[e + 15], 10, 4264355552),
                        d = this.II(d, l, r, o, h[e + 6], 15, 2734768916), o = this.II(o, d, l, r, h[e + 13], 21, 1309151649),
                        r = this.II(r, o, d, l, h[e + 4], 6, 4149444226), l = this.II(l, r, o, d, h[e + 11], 10, 3174756917),
                        d = this.II(d, l, r, o, h[e + 2], 15, 718787259), o = this.II(o, d, l, r, h[e + 9], 21, 3951481745),
                        r = this.addUnsigned(r, s), o = this.addUnsigned(o, i), d = this.addUnsigned(d, a),
                        l = this.addUnsigned(l, n);
                }
                return (this.wordToHex(r) + this.wordToHex(o) + this.wordToHex(d) + this.wordToHex(l)).toLowerCase();
            }
        }, {
            key: "buildSign",
            value: function buildSign(t, e) {
                e = e || !0;
                for (var s = Object.keys(t).sort(), i = "", a = 0; a < s.length; a++) {
                    i += s[a] + ":" + t[s[a]];
                }
                e && (i += zs.configs.gameCfg.secret);
                var n = this.md5(i);
                return n = n.toLowerCase();
            }
        }]);
        return s;
    }();
    var i = /* */ function () {
        function i() {
            (0, _classCallCheck2.default)(this, i);
        }
        (0, _createClass2.default)(i, null, [{
            key: "init",
            value: function () {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee() {
                    var t, e, _t;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    t = zs.configs.gameCfg;
                                    i.defaultData = t.network;
                                    _context.next = 4;
                                    return i.ping();

                                case 4:
                                    e = {
                                        user_id: 1,
                                        user_type: 1,
                                        update_time: Date.now(),
                                        is_new: 0
                                    };
                                    if (!zs.platform.proxy) {
                                        _context.next = 13;
                                        break;
                                    }
                                    _context.next = 8;
                                    return zs.platform.async.getLoginParams();

                                case 8:
                                    _t = _context.sent;
                                    _context.t0 = _t;
                                    if (!_context.t0) {
                                        _context.next = 13;
                                        break;
                                    }
                                    _context.next = 13;
                                    return i.login(_t).then(function (t) {
                                        t.user_id && (e = t, zs.log.debug("登陆成功：", "Network", t));
                                    });

                                case 13:
                                    return _context.abrupt("return", e);

                                case 14:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }));
                function init() {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        }, {
            key: "getUrl",
            value: function getUrl(t) {
                return i.domainIdx < 0 || i.domainIdx >= i.listDomain.length ? null : null == i.mapWebApi[t] ? (zs.log.error("非法网络接口： " + t, "Network"),
                    null) : i.listDomain[i.domainIdx] + "/" + i.version + "/" + i.mapWebApi[t];
            }
        }, {
            key: "obj2arg",
            value: function obj2arg(t) {
                var e = [];
                for (var s in t) {
                    e.push(s + "=" + t[s]);
                }
                return e.join("&");
            }
        }, {
            key: "post",
            value: function post(t, e, s) {
                var _this = this;
                return new Promise(function (a, n) {
                    var r = new Laya.HttpRequest(), o = !1, d = !1;
                    r.http.timeout = s || 1e4, zs.utils.sleep(r.http.timeout).then(function () {
                        d || (n(), o = !0);
                    }), r.once(Laya.Event.COMPLETE, _this, function (e) {
                        if (!o) {
                            zs.log.debug("post " + t + " 成功", "Network", e);
                            var _s = JSON.parse(e);
                            a(_s.data), d = !0;
                        }
                    }), r.once(Laya.Event.ERROR, _this, function (t) {
                        o || (n(t), d = !0);
                    })//, r.send(t, i.obj2arg(e), "post", "text");
                });
            }
        }, {
            key: "get",
            value: function get(t, e, s) {
                var _this2 = this;
                return new Promise(function (a, n) {
                    var r = new Laya.HttpRequest(), o = !1, d = !1;
                    r.http.timeout = s || 1e4, zs.utils.sleep(r.http.timeout).then(function () {
                        d || (n(), o = !0);
                    }), r.once(Laya.Event.COMPLETE, _this2, function (t) {
                        if (!o) {
                            var _e = JSON.parse(t);
                            a(_e.data), d = !0;
                        }
                    }), r.once(Laya.Event.ERROR, _this2, function (t) {
                        o || (n(t), d = !0);
                    })//, r.send(t, i.obj2arg(e), "get", "text");
                });
            }
        }, {
            key: "nativeRequest",
            value: function nativeRequest(t, e, i, a, n) {
                var _this3 = this;
                if (a) {
                    var _t2 = s.buildSign(e, !n);
                    e = Object.assign(e, {
                        sign: _t2
                    });
                }
                return new Promise(function (s, a) {
                    zs.platform.async.request({
                        url: t,
                        data: e,
                        method: i
                    }).then(function (t) {
                        s(t);
                    }).catch(function () {
                        // var n = new XMLHttpRequest();
                        // n.onreadystatechange = function () {
                        //     if (4 == n.readyState) {
                        //         var t = n.responseText;
                        //         if (n.status >= 200 && n.status < 400) {
                        //             var e = {};
                        //             try {
                        //                 e = JSON.parse(t);
                        //             } catch (e) {
                        //                 return zs.log.error("json parse error ", t), a(e);
                        //             }
                        //             return s(e);
                        //         }
                        //         return zs.log.error("error ", t), a(t);
                        //     }
                        // }, n.timeout = 3e3, n.ontimeout = function (t) {
                        //     return zs.log.error("error ", t), a(t);
                        // }, n.open(i, t, !0), "POST" == i ? (n.open("POST", t), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        //     n.send(_this3.obj2arg(e))) : n.send();
                    });
                });
            }
        }, {
            key: "request",
            value: function request(t, s, a) {
                return new Promise(function (n, r) {
                    var o = null, d = i.getUrl(t), l = null;
                    if (d && (null == a || a == e.Sync)) return i.post(d, s).then(function (e) {
                        var a = null;
                        switch (t) {
                            case "config":
                                s && "module" === s.type && (a = s.module ? s.module : "base_module", s.table && (a += ">>" + s.table));
                                break;

                            case "download":
                                a = s.key;
                        }
                        null != e && "" != e && i.setLocalData(t, e, a), n(e);
                    }).catch(function (t) {
                        r(t);
                    });
                    if (null == d || a === e.Local || a === e.Async) {
                        switch (t) {
                            case "login":
                                o = i.getLocalData(t);
                                break;

                            case "config":
                                if (s && "module" === s.type) {
                                    var _e2 = s.module ? s.module : "base_module";
                                    s.table && (_e2 += ">>" + s.table), o = i.getLocalData(t, _e2);
                                }
                                break;

                            case "download":
                                s && s.key && (o = i.getLocalData(t, s.key));
                                break;

                            case "update":
                                o = !0;
                        }
                        return n(l);
                    }
                    return i.post(d, s).then(function (e) {
                        var a = null;
                        switch (t) {
                            case "config":
                                s && "module" === s.type && (a = s.module ? s.module : "base_module", s.table && (a += "_" + s.table));
                                break;

                            case "download":
                                a = s.key;
                        }
                        null != e && "" != e && i.setLocalData(t, e, a);
                    }), n(l);
                });
            }
        }, {
            key: "getLocalData",
            value: function getLocalData(t, e) {
                var s = t;
                e && (s += ">>" + e);
                var a = Laya.LocalStorage.getItem("network_" + s);
                return a ? JSON.parse(a) : i.defaultData[s];
            }
        }, {
            key: "setLocalData",
            value: function setLocalData(t, e, s) {
                if (null == e || null == e) return;
                var i = t;
                s && (i += ">>" + s);
                var a = JSON.stringify(e);
                a && Laya.LocalStorage.setItem("network_" + i, a);
            }
        }, {
            key: "ping",
            value: function () {
                var _ping = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2() {
                    var _loop, _t3, _ret;
                    return _regenerator.default.wrap(function _callee2$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    i.domainIdx = -1;
                                    _loop = /* */ _regenerator.default.mark(function _loop(_t3) {
                                        var e, s;
                                        return _regenerator.default.wrap(function _loop$(_context2) {
                                            while (1) {
                                                switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                        e = i.listDomain[_t3] + "/" + i.version + "/" + i.mapWebApi.ping, s = {};
                                                        zs.log.debug("ping: " + e);
                                                        _context2.next = 4;
                                                        return;
                                                    case 4:
                                                        if (!(i.domainIdx >= 0)) {
                                                            _context2.next = 6;
                                                            break;
                                                        }
                                                        return _context2.abrupt("return", "break");

                                                    case 6:
                                                    case "end":
                                                        return _context2.stop();
                                                }
                                            }
                                        }, _loop);
                                    });
                                    _t3 = 0;

                                case 3:
                                    if (!(_t3 < i.listDomain.length)) {
                                        _context3.next = 11;
                                        break;
                                    }
                                    return _context3.delegateYield(_loop(_t3), "t0", 5);

                                case 5:
                                    _ret = _context3.t0;
                                    if (!(_ret === "break")) {
                                        _context3.next = 8;
                                        break;
                                    }
                                    return _context3.abrupt("break", 11);

                                case 8:
                                    _t3++;
                                    _context3.next = 3;
                                    break;

                                case 11:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee2);
                }));
                function ping() {
                    return _ping.apply(this, arguments);
                }
                return ping;
            }()
        }, {
            key: "login",
            value: function () {
                var _login = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee3(t, e) {
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    return _context4.abrupt("return", (null == t && (t = {}), t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        zs.log.debug("登录参数：", "Network", t), i.request("login", t, e)));

                                case 1:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee3);
                }));
                function login(_x, _x2) {
                    return _login.apply(this, arguments);
                }
                return login;
            }()
        }, {
            key: "config",
            value: function () {
                var _config = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee4(t, e, s, a) {
                    var n;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    n = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        type: t ? "switch" : "module",
                                        v: zs.configs.gameCfg.version
                                    };
                                    return _context5.abrupt("return", (t || (n.module = e || "base_module", s && (n.table = s)),
                                        i.request("config", n, a)));

                                case 2:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee4);
                }));
                function config(_x3, _x4, _x5, _x6) {
                    return _config.apply(this, arguments);
                }
                return config;
            }()
        }, {
            key: "update",
            value: function () {
                var _update = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee5(t, e, s) {
                    var a;
                    return _regenerator.default.wrap(function _callee5$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    a = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        uid: zs.core.userId,
                                        key: t,
                                        data: e
                                    };
                                    return _context6.abrupt("return", i.request("update", a, s));

                                case 2:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee5);
                }));
                function update(_x7, _x8, _x9) {
                    return _update.apply(this, arguments);
                }
                return update;
            }()
        }, {
            key: "download",
            value: function () {
                var _download = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee6(t, e) {
                    var s;
                    return _regenerator.default.wrap(function _callee6$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    s = {
                                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                        uid: zs.core.userId,
                                        key: t
                                    };
                                    return _context7.abrupt("return", i.request("download", s, e));

                                case 2:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee6);
                }));
                function download(_x10, _x11) {
                    return _download.apply(this, arguments);
                }
                return download;
            }()
        }]);
        return i;
    }();
    i.version = "v1", i.domainIdx = -1, i.city = null, i.timestamp = null, i.defaultData = {},
        i.listDomain = ["", 
            "",
            ""
        ],
        i.mapWebApi = {

        }, t.NetworkMode = e, t.MD5 = s, t.network = i;
}(window.zs = window.zs || {});