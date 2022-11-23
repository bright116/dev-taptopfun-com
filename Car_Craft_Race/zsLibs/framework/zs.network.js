!function () {
    var _interopRequireDefault = require("../../runtime/helpers/interopRequireDefault");

    var _regenerator = _interopRequireDefault(require("../../runtime/regenerator"));

    var _asyncToGenerator2 = require("../../runtime/helpers/asyncToGenerator");

    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    var _createClass2 = require("../../runtime/helpers/createClass");

    window.zs = window.zs || {}, function (t) {
        "use strict";
        var e;
        !function (t) {
            t[t.Local = 0] = "Local", t[t.Async = 1] = "Async", t[t.Sync = 2] = "Sync";
        }(e = e || (e = {}));
        var a = /* */ function () {
            function a() {
                _classCallCheck2(this, a);
            }
            _createClass2(a, null, [{
                key: "rotateLeft",
                value: function rotateLeft(t, e) {
                    return t << e | t >>> 32 - e;
                }
            }, {
                key: "addUnsigned",
                value: function addUnsigned(t, e) {
                    var _a, i, s, r, o;
                    return s = 2147483648 & t, r = 2147483648 & e, o = (1073741823 & t) + (1073741823 & e),
                        (_a = 1073741824 & t) & (i = 1073741824 & e) ? 2147483648 ^ o ^ s ^ r : _a | i ? 1073741824 & o ? 3221225472 ^ o ^ s ^ r : 1073741824 ^ o ^ s ^ r : o ^ s ^ r;
                }
            }, {
                key: "F",
                value: function F(t, e, _a2) {
                    return t & e | ~t & _a2;
                }
            }, {
                key: "G",
                value: function G(t, e, _a3) {
                    return t & _a3 | e & ~_a3;
                }
            }, {
                key: "H",
                value: function H(t, e, _a4) {
                    return t ^ e ^ _a4;
                }
            }, {
                key: "I",
                value: function I(t, e, _a5) {
                    return e ^ (t | ~_a5);
                }
            }, {
                key: "FF",
                value: function FF(t, e, _a6, i, s, r, o) {
                    return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.F(e, _a6, i), s), o)),
                        this.addUnsigned(this.rotateLeft(t, r), e);
                }
            }, {
                key: "GG",
                value: function GG(t, e, _a7, i, s, r, o) {
                    return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.G(e, _a7, i), s), o)),
                        this.addUnsigned(this.rotateLeft(t, r), e);
                }
            }, {
                key: "HH",
                value: function HH(t, e, _a8, i, s, r, o) {
                    return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.H(e, _a8, i), s), o)),
                        this.addUnsigned(this.rotateLeft(t, r), e);
                }
            }, {
                key: "II",
                value: function II(t, e, _a9, i, s, r, o) {
                    return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.I(e, _a9, i), s), o)),
                        this.addUnsigned(this.rotateLeft(t, r), e);
                }
            }, {
                key: "convertToWordArray",
                value: function convertToWordArray(t) {
                    for (var e, _a10 = t.length, i = _a10 + 8, s = 16 * ((i - i % 64) / 64 + 1), r = Array(s - 1), o = 0, n = 0; n < _a10;) {
                        o = n % 4 * 8, r[e = (n - n % 4) / 4] = r[e] | t.charCodeAt(n) << o, n++;
                    }
                    return o = n % 4 * 8, r[e = (n - n % 4) / 4] = r[e] | 128 << o, r[s - 2] = _a10 << 3,
                        r[s - 1] = _a10 >>> 29, r;
                }
            }, {
                key: "wordToHex",
                value: function wordToHex(t) {
                    var e, _a11 = "", i = "";
                    for (e = 0; e <= 3; e++) {
                        _a11 += (i = "0" + (t >>> 8 * e & 255).toString(16)).substr(i.length - 2, 2);
                    }
                    return _a11;
                }
            }, {
                key: "uTF8Encode",
                value: function uTF8Encode(t) {
                    t = t.replace(/\x0d\x0a/g, "\n");
                    for (var e = "", _a12 = 0; _a12 < t.length; _a12++) {
                        var i = t.charCodeAt(_a12);
                        i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192),
                            e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224),
                                e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128));
                    }
                    return e;
                }
            }, {
                key: "md5",
                value: function md5(t) {
                    var e, _a13, i, s, r, o, n, d, l, g = Array();
                    for (t = this.uTF8Encode(t), g = this.convertToWordArray(t), o = 1732584193, n = 4023233417,
                        d = 2562383102, l = 271733878, e = 0; e < g.length; e += 16) {
                        _a13 = o, i = n, s = d, r = l, o = this.FF(o, n, d, l, g[e + 0], 7, 3614090360),
                            l = this.FF(l, o, n, d, g[e + 1], 12, 3905402710), d = this.FF(d, l, o, n, g[e + 2], 17, 606105819),
                            n = this.FF(n, d, l, o, g[e + 3], 22, 3250441966), o = this.FF(o, n, d, l, g[e + 4], 7, 4118548399),
                            l = this.FF(l, o, n, d, g[e + 5], 12, 1200080426), d = this.FF(d, l, o, n, g[e + 6], 17, 2821735955),
                            n = this.FF(n, d, l, o, g[e + 7], 22, 4249261313), o = this.FF(o, n, d, l, g[e + 8], 7, 1770035416),
                            l = this.FF(l, o, n, d, g[e + 9], 12, 2336552879), d = this.FF(d, l, o, n, g[e + 10], 17, 4294925233),
                            n = this.FF(n, d, l, o, g[e + 11], 22, 2304563134), o = this.FF(o, n, d, l, g[e + 12], 7, 1804603682),
                            l = this.FF(l, o, n, d, g[e + 13], 12, 4254626195), d = this.FF(d, l, o, n, g[e + 14], 17, 2792965006),
                            n = this.FF(n, d, l, o, g[e + 15], 22, 1236535329), o = this.GG(o, n, d, l, g[e + 1], 5, 4129170786),
                            l = this.GG(l, o, n, d, g[e + 6], 9, 3225465664), d = this.GG(d, l, o, n, g[e + 11], 14, 643717713),
                            n = this.GG(n, d, l, o, g[e + 0], 20, 3921069994), o = this.GG(o, n, d, l, g[e + 5], 5, 3593408605),
                            l = this.GG(l, o, n, d, g[e + 10], 9, 38016083), d = this.GG(d, l, o, n, g[e + 15], 14, 3634488961),
                            n = this.GG(n, d, l, o, g[e + 4], 20, 3889429448), o = this.GG(o, n, d, l, g[e + 9], 5, 568446438),
                            l = this.GG(l, o, n, d, g[e + 14], 9, 3275163606), d = this.GG(d, l, o, n, g[e + 3], 14, 4107603335),
                            n = this.GG(n, d, l, o, g[e + 8], 20, 1163531501), o = this.GG(o, n, d, l, g[e + 13], 5, 2850285829),
                            l = this.GG(l, o, n, d, g[e + 2], 9, 4243563512), d = this.GG(d, l, o, n, g[e + 7], 14, 1735328473),
                            n = this.GG(n, d, l, o, g[e + 12], 20, 2368359562), o = this.HH(o, n, d, l, g[e + 5], 4, 4294588738),
                            l = this.HH(l, o, n, d, g[e + 8], 11, 2272392833), d = this.HH(d, l, o, n, g[e + 11], 16, 1839030562),
                            n = this.HH(n, d, l, o, g[e + 14], 23, 4259657740), o = this.HH(o, n, d, l, g[e + 1], 4, 2763975236),
                            l = this.HH(l, o, n, d, g[e + 4], 11, 1272893353), d = this.HH(d, l, o, n, g[e + 7], 16, 4139469664),
                            n = this.HH(n, d, l, o, g[e + 10], 23, 3200236656), o = this.HH(o, n, d, l, g[e + 13], 4, 681279174),
                            l = this.HH(l, o, n, d, g[e + 0], 11, 3936430074), d = this.HH(d, l, o, n, g[e + 3], 16, 3572445317),
                            n = this.HH(n, d, l, o, g[e + 6], 23, 76029189), o = this.HH(o, n, d, l, g[e + 9], 4, 3654602809),
                            l = this.HH(l, o, n, d, g[e + 12], 11, 3873151461), d = this.HH(d, l, o, n, g[e + 15], 16, 530742520),
                            n = this.HH(n, d, l, o, g[e + 2], 23, 3299628645), o = this.II(o, n, d, l, g[e + 0], 6, 4096336452),
                            l = this.II(l, o, n, d, g[e + 7], 10, 1126891415), d = this.II(d, l, o, n, g[e + 14], 15, 2878612391),
                            n = this.II(n, d, l, o, g[e + 5], 21, 4237533241), o = this.II(o, n, d, l, g[e + 12], 6, 1700485571),
                            l = this.II(l, o, n, d, g[e + 3], 10, 2399980690), d = this.II(d, l, o, n, g[e + 10], 15, 4293915773),
                            n = this.II(n, d, l, o, g[e + 1], 21, 2240044497), o = this.II(o, n, d, l, g[e + 8], 6, 1873313359),
                            l = this.II(l, o, n, d, g[e + 15], 10, 4264355552), d = this.II(d, l, o, n, g[e + 6], 15, 2734768916),
                            n = this.II(n, d, l, o, g[e + 13], 21, 1309151649), o = this.II(o, n, d, l, g[e + 4], 6, 4149444226),
                            l = this.II(l, o, n, d, g[e + 11], 10, 3174756917), d = this.II(d, l, o, n, g[e + 2], 15, 718787259),
                            n = this.II(n, d, l, o, g[e + 9], 21, 3951481745), o = this.addUnsigned(o, _a13),
                            n = this.addUnsigned(n, i), d = this.addUnsigned(d, s), l = this.addUnsigned(l, r);
                    }
                    return (this.wordToHex(o) + this.wordToHex(n) + this.wordToHex(d) + this.wordToHex(l)).toLowerCase();
                }
            }, {
                key: "buildSign",
                value: function buildSign(t, e) {
                    e = e || !0;
                    for (var _a14 = Object.keys(t).sort(), i = "", s = 0; s < _a14.length; s++) {
                        i += _a14[s] + ":" + t[_a14[s]];
                    }
                    e && (i += zs.configs.gameCfg.secret);
                    var r = this.md5(i);
                    return r = r.toLowerCase();
                }
            }]);
            return a;
        }();
        var i = /* */ function () {
            function i() {
                _classCallCheck2(this, i);
            }
            _createClass2(i, null, [{
                key: "encrypt",
                value: function encrypt(t) {
                    var e = CryptoJS.enc.Utf8.parse(i.authorizationSecret), a = CryptoJS.enc.Utf8.parse(t);
                    return CryptoJS.AES.encrypt(a, e, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    }).toString();
                }
            }, {
                key: "decrypt",
                value: function decrypt(t) {
                    var e = CryptoJS.enc.Utf8.parse(i.authorizationSecret), a = CryptoJS.AES.decrypt(t, e, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7
                    });
                    return CryptoJS.enc.Utf8.stringify(a).toString();
                }
            }, {
                key: "init",
                value: function () {
                    var _init = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee() {
                        var t, _e, e, _t, _t2;
                        return _regenerator.default.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        t = zs.configs.gameCfg;
                                        if (!(i.defaultData = t.network, !t.skipRemote)) {
                                            _context.next = 6;
                                            break;
                                        }
                                        _context.next = 4;
                                        return {
                                            "webDomains": [
                                                "",//https://gamesapi.zxmn2018.com
                                                "",//https://gamesapi.qwpo2018.com
                                                ""//https://gamesapi.zaml2018.com
                                            ],
                                            "webApis": {
                                                "ping": "game/clientInfo",
                                                "login": "game/login",
                                                "config": "game/config",
                                                "update": "game/update",
                                                "download": "game/download"
                                            },
                                            "exportDomainOld": "",//https://zsad.zxmn2018.com
                                            "exportDomainNew": ""//https://gamesapi.zxmn2018.com
                                        }
                                    case 4:
                                        _e = _context.sent;
                                        _e && (_e.webDomains && (i.listDomain = _e.webDomains), _e.webApis &&
                                            (_e.webApis.ping && (i.mapWebApi.ping = _e.webApis.ping),
                                                _e.webApis.login && (i.mapWebApi.login = _e.webApis.login),
                                                _e.webApis.config && (i.mapWebApi.config = _e.webApis.config),
                                                _e.webApis.update && (i.mapWebApi.update = _e.webApis.update),
                                                _e.webApis.download && (i.mapWebApi.download = _e.webApis.download)),
                                            _e.exportDomainOld && (zs.exporter.dataMgr.URL = _e.exportDomainOld), _e.exportDomainNew && (zs.exporter.dataMgr.NEWURL = _e.exportDomainNew)),
                                            zs.log.debug("remote webSetting", "Network", _e);

                                    case 6:
                                        _context.next = 8;
                                        return i.ping().catch(function (t) {
                                            return t;
                                        });

                                    case 8:
                                        _context.t0 = "v2" == i.version;
                                        if (!_context.t0) {
                                            _context.next = 12;
                                            break;
                                        }
                                        _context.next = 12;
                                        return i.authorization().catch(function (t) {
                                            return t;
                                        });

                                    case 12:
                                        e = {
                                            user_id: 1,
                                            user_type: 1,
                                            update_time: Date.now(),
                                            is_new: 0,
                                            is_shielded: 0
                                        };
                                        if (!(i.domainIdx >= 0)) {
                                            _context.next = 28;
                                            break;
                                        }
                                        if (!zs.platform.proxy) {
                                            _context.next = 25;
                                            break;
                                        }
                                        _context.next = 17;
                                        return zs.platform.async.getLoginParams().catch(function (t) {
                                            return t;
                                        });

                                    case 17:
                                        _t = _context.sent;
                                        _context.t1 = _t;
                                        if (!_context.t1) {
                                            _context.next = 23;
                                            break;
                                        }
                                        zs.td.justTrack("后台登录", "后台登录");
                                        _context.next = 23;
                                        return i.login(_t).then(function (t) {
                                            t.user_id ? (e = t, i.ready = !0, zs.log.debug("登陆成功：", "Network", t)) : zs.td.justTrack("后台登录失败", "后台登录失败");
                                        }).catch(function (t) {
                                            zs.td.justTrack("后台登录失败", "后台登录失败");
                                        });

                                    case 23:
                                        _context.next = 28;
                                        break;

                                    case 25:
                                        _context.next = 27;
                                        return i.login({
                                            uid: "1"
                                        }).then(function (t) {
                                            t.user_id && (e = t, i.ready = !0, zs.log.debug("登陆成功：", "Network", t));
                                        }).catch(function (t) {
                                            return t;
                                        });

                                    case 27:
                                        i.ready = !0;

                                    case 28:
                                        i.loginCode = "";
                                        for (_t2 = 0; _t2 < 3; _t2++) {
                                            i.loginCode += zs.utils.randByte();
                                        }
                                        return _context.abrupt("return", e);

                                    case 31:
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
                    for (var a in t) {
                        e.push(a + "=" + t[a]);
                    }
                    return e.join("&");
                }
            }, {
                key: "post",
                value: function () {
                    var _post = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee2(t, e, a, s, r) {
                        var _this = this;
                        var d, o, n;
                        return _regenerator.default.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        if (!(null == r && (r = 3), zs.platform.proxy && zs.platform.async.request)) {
                                            _context2.next = 4;
                                            break;
                                        }
                                        d = {
                                            "content-type": "application/json"
                                        };
                                        if ("v2" == i.version && "" != i.authorizationToken && (d = {
                                            "content-type": "application/json",
                                            authorization: i.authorizationToken
                                        }, !s)) {
                                            o = JSON.stringify(e), n = i.encrypt(o);
                                            e._data = n;
                                        }
                                        return _context2.abrupt("return", new Promise(function (_i, o) {
                                            zs.log.debug("通讯请求：" + t, "Network", e), zs.td.justTrack("通讯请求", "通讯请求"), zs.platform.async.request({
                                                url: t,
                                                data: JSON.stringify(e),
                                                timeout: a,
                                                header: d,
                                                method: "POST"
                                            }).then(function (e) {
                                                return zs.log.debug("请求成功：" + t, "Network", e), _i(e.data.data);
                                            }).catch(function (n) {
                                                return r > 0 ? (zs.log.error("请求重试：" + t, "Network", n), _this.post(t, e, a, s, --r).then(_i).catch(o)) : (zs.td.justTrack("通讯请求失败", "通讯请求失败"),
                                                    zs.log.error("请求失败：" + t, "Network", n), o(n));
                                            });
                                        }));

                                    case 4:
                                        return _context2.abrupt("return", new Promise(function (o, n) {
                                            // var d = new XMLHttpRequest();
                                            // var l = !1, g = !1;
                                            // if (d.timeout = a || 1e4, zs.utils.sleep(d.timeout).then(function () {
                                            //     if (!g) return l = !0, r > 0 ? (zs.log.error("重复请求：" + t), _this.post(t, e, a, s, --r).then(o).catch(n)) : (zs.log.error("请求超时：" + t),
                                            //         n());
                                            // }).catch(function (t) {
                                            //     return t;
                                            // }), d.onreadystatechange = function () {
                                            //     if (4 == d.readyState && !l) {
                                            //         g = !0;
                                            //         var c = d.responseText;
                                            //         if (d.status >= 200 && d.status < 400) {
                                            //             var h = {};
                                            //             try {
                                            //                 h = JSON.parse(c), "v2" == i.version && h.code;
                                            //             } catch (t) {
                                            //                 return zs.log.error("请求解析失败： ", t), n(t);
                                            //             }
                                            //             return zs.log.debug("请求成功：" + t, "Network", c), o(h.data);
                                            //         }
                                            //         return r > 0 ? (zs.log.error("重复请求：" + t, c), _this.post(t, e, a, s, --r).then(o).catch(n)) : 
                                            //         (zs.log.error("请求失败：" + t, c),
                                            //             n(c));
                                            //     }
                                            // }, d.ontimeout = function (_i2) {
                                            //     return g = !0, l = !0, r > 0 ? (zs.log.error("重复请求：" + t, _i2), _this.post(t, e, a, s, --r).then(o).catch(n)) : (zs.log.error("请求超时： " + t, _i2),
                                            //         n(_i2));
                                            // }, d.open("POST", t, !0), d.setRequestHeader("Content-Type", "application/json"),
                                            //     "v2" == i.version && "" != i.authorizationToken && (d.setRequestHeader("authorization", i.authorizationToken),
                                            //         !s)) {
                                            //     var c = JSON.stringify(e), h = i.encrypt(c);
                                            //     e._data = h;
                                            // }
                                            // d.send(JSON.stringify(e)), zs.log.debug("通讯请求：" + t, "Network", e);
                                            n();
                                        }));

                                    case 5:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2);
                    }));
                    function post(_x, _x2, _x3, _x4, _x5) {
                        return _post.apply(this, arguments);
                    }
                    return post;
                }()
            }, {
                key: "get",
                value: function get(t, e, a, _i3) {
                    var _this2 = this;
                    return null == _i3 && (_i3 = 3), zs.platform.proxy && zs.platform.async.request ? new Promise(function (s, r) {
                        zs.log.debug("通讯请求：" + t, "Network", e), zs.td.justTrack("通讯请求", "通讯请求"), zs.platform.async.request({
                            url: t,
                            data: JSON.stringify(e),
                            timeout: a,
                            method: "GET"
                        }).then(function (e) {
                            return zs.log.debug("请求成功：" + t, "Network", e), s(e.data.data);
                        }).catch(function (o) {
                            return _i3 > 0 ? (zs.log.error("请求重试：" + t, "Network", o), _this2.get(t, e, a, --_i3).then(s).catch(r)) : (zs.td.justTrack("通讯请求失败", "通讯请求失败"),
                                zs.log.error("请求失败：" + t, "Network", o), r(o));
                        });
                    }) : new Promise(function (s, r) {
                        // var o = new XMLHttpRequest();
                        // var n = !1, d = !1;
                        // o.timeout = a || 1e4, zs.utils.sleep(o.timeout).then(function () {
                        //     if (!d) return n = !0, _i3 > 0 ? (zs.log.error("重复请求：" + t), _this2.get(t, e, a, --_i3).then(s).catch(r)) : (zs.log.error("请求超时：" + t),
                        //         r());
                        // }).catch(function (t) {
                        //     return t;
                        // }), o.onreadystatechange = function () {
                        //     if (4 == o.readyState && !n) {
                        //         d = !0;
                        //         var l = o.responseText;
                        //         if (o.status >= 200 && o.status < 400) {
                        //             var g = {};
                        //             try {
                        //                 g = JSON.parse(l);
                        //             } catch (t) {
                        //                 return zs.log.error("请求解析失败： ", t), r(t);
                        //             }
                        //             return zs.log.debug("请求成功：" + t, "Network", l), s(g.data);
                        //         }
                        //         return _i3 > 0 ? (zs.log.error("重复请求：" + t, l), _this2.get(t, e, a, --_i3).then(s).catch(r)) : (zs.log.error("请求失败：" + t, l),
                        //             r(l));
                        //     }
                        // }, o.ontimeout = function (o) {
                        //     return d = !0, n = !0, _i3 > 0 ? (zs.log.error("重复请求：" + t, o), _this2.get(t, e, a, --_i3).then(s).catch(r)) : (zs.log.error("请求超时： " + t, o),
                        //         r(o));
                        // }, o.open("GET", t, !0), o.setRequestHeader("Content-Type", "application/json");
                        // var l = JSON.stringify(e);
                        // o.send(l), zs.log.debug("通讯请求：" + t, "Network", l);
                        r()
                    });
                }
            }, {
                key: "nativeRequest",
                value: function nativeRequest(t, e, s, r, o, n) {
                    var _this3 = this;
                    var d = Math.round(new Date().getTime() / 1e3).toString();
                    if (e = Object.assign(e, {
                        timestamp: d
                    }), r) {
                        var _t3 = a.buildSign(e, !o);
                        e = Object.assign(e, {
                            sign: _t3
                        });
                    }
                    return new Promise(function (a, s) {
                        if ("v2" == i.version && "" != i.authorizationToken && !n) {
                            var r = JSON.stringify(e), o = i.encrypt(r);
                            e._data = o;
                        }
                        _this3.post(t, e, 3e3, !0).then(function (t) {
                            a(t);
                        }).catch(function (t) {
                            s(t);
                        });
                    });
                }
            }, {
                key: "request",
                value: function request(t, a, s) {
                    return new Promise(function (r, o) {
                        var n = null, d = i.getUrl(t), l = null;
                        if (zs.configs.gameCfg.local && (s = e.Local), d && (null == s || s == e.Sync)) return i.post(d, a).then(function (e) {
                            var s = null;
                            switch (t) {
                                case "config":
                                    a && "module" === a.type ? a.module ? (s = a.module ? a.module : "base_module",
                                        a.table && (s += ">>" + a.table)) : a.table && (s = a.table) : a && "switch" === a.type && (s = "switch");
                                    break;

                                case "download":
                                    s = a.key;
                                    break;

                                case "auth":
                                    i.authorizationToken = e.token, i.authorizationSecret = e.secret;
                            }
                            null == e || "" == e || "Array" == typeof e && 0 == e.length ? e = i.getLocalData(t, s) : i.setLocalData(t, e, s),
                                r(e);
                        }).catch(function (t) {
                            o(t);
                        });
                        if (null == d || s === e.Local || s === e.Async) {
                            switch (t) {
                                case "login":
                                    n = i.getLocalData(t);
                                    break;

                                case "config":
                                    var _e2 = null;
                                    a && "module" === a.type ? a.module ? (_e2 = a.module ? a.module : "base_module",
                                        a.table && (_e2 += ">>" + a.table)) : a.table && (_e2 = a.table) : a && a.type,
                                        _e2 = "switch", n = i.getLocalData(t, _e2);
                                    break;

                                case "download":
                                    a && a.key && (n = i.getLocalData(t, a.key));
                                    break;

                                case "update":
                                    a && a.key && a.data && i.setLocalData("download", a.data, a.key), n = !0;
                            }
                            if (null == n && zs.log.fatal("本地网络缓存及默认值不存在: " + t, "Network"), l = n, null == d || s === e.Local) return zs.log.debug(t + " 通讯返回本地数据", "Network"),
                                r(l);
                        }
                        return i.post(d, a).then(function (e) {
                            var s = null;
                            switch (t) {
                                case "config":
                                    a && "module" === a.type && (s = a.module ? a.module : "base_module", a.table && (s += "_" + a.table));
                                    break;

                                case "download":
                                    s = a.key;
                            }
                            null != e && "" != e && i.setLocalData(t, e, s);
                        }).catch(function (t) {
                            return t;
                        }), r(l);
                    });
                }
            }, {
                key: "getLocalData",
                value: function getLocalData(t, e) {
                    var a = t;
                    e && (a += ">>" + e);
                    var s = zs.utils.getItem("network_" + a);
                    return s ? JSON.parse(s) : i.defaultData[a];
                }
            }, {
                key: "setLocalData",
                value: function setLocalData(t, e, a) {
                    if (null == e || null == e) return;
                    var _i4 = t;
                    a && (_i4 += ">>" + a);
                    var s = JSON.stringify(e);
                    s && zs.utils.setItem("network_" + _i4, s);
                }
            }, {
                key: "ping",
                value: function () {
                    var _ping = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee3() {
                        var _loop, _t4, _ret;
                        return _regenerator.default.wrap(function _callee3$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        i.domainIdx = -1;
                                        _loop = /* */ _regenerator.default.mark(function _loop(_t4) {
                                            var e, a;
                                            return _regenerator.default.wrap(function _loop$(_context3) {
                                                while (1) {
                                                    switch (_context3.prev = _context3.next) {
                                                        case 0:
                                                            e = i.listDomain[_t4] + "/" + i.version + "/" + i.mapWebApi.ping, a = {};
                                                            _context3.next = 3;
                                                            return
                                                        // i.get(e, a, 1e3).then(function (e) {
                                                        //     i.domainIdx = _t4, zs.product.city = e.city, zs.product.country = e.country, zs.product.timestamp = 1e3 * e.timestamp;
                                                        // }).catch(function (t) {
                                                        //     zs.log.warn("域名 " + e + " 无法正常通讯", "Network");
                                                        // });

                                                        case 3:
                                                            if (!(i.domainIdx >= 0)) {
                                                                _context3.next = 5;
                                                                break;
                                                            }
                                                            return _context3.abrupt("return", "break");

                                                        case 5:
                                                            _context3.next = 7;
                                                            return zs.utils.sleep(1e3);

                                                        case 7:
                                                        case "end":
                                                            return _context3.stop();
                                                    }
                                                }
                                            }, _loop);
                                        });
                                        _t4 = 0;

                                    case 3:
                                        if (!(_t4 < i.listDomain.length)) {
                                            _context4.next = 11;
                                            break;
                                        }
                                        return _context4.delegateYield(_loop(_t4), "t0", 5);

                                    case 5:
                                        _ret = _context4.t0;
                                        if (!(_ret === "break")) {
                                            _context4.next = 8;
                                            break;
                                        }
                                        return _context4.abrupt("break", 11);

                                    case 8:
                                        _t4++;
                                        _context4.next = 3;
                                        break;

                                    case 11:
                                    case "end":
                                        return _context4.stop();
                                }
                            }
                        }, _callee3);
                    }));
                    function ping() {
                        return _ping.apply(this, arguments);
                    }
                    return ping;
                }()
            }, {
                key: "authorization",
                value: function () {
                    var _authorization = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee4() {
                        var t;
                        return _regenerator.default.wrap(function _callee4$(_context5) {
                            while (1) {
                                switch (_context5.prev = _context5.next) {
                                    case 0:
                                        t = {};
                                        return _context5.abrupt("return", (t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            i.request("auth", t)));

                                    case 2:
                                    case "end":
                                        return _context5.stop();
                                }
                            }
                        }, _callee4);
                    }));
                    function authorization() {
                        return _authorization.apply(this, arguments);
                    }
                    return authorization;
                }()
            }, {
                key: "login",
                value: function () {
                    var _login = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee5(t, e) {
                        return _regenerator.default.wrap(function _callee5$(_context6) {
                            while (1) {
                                switch (_context6.prev = _context6.next) {
                                    case 0:
                                        return _context6.abrupt("return", (null == t && (t = {}), t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            zs.log.debug("登录参数：", "Network", t), i.request("login", t, e)));

                                    case 1:
                                    case "end":
                                        return _context6.stop();
                                }
                            }
                        }, _callee5);
                    }));
                    function login(_x6, _x7) {
                        return _login.apply(this, arguments);
                    }
                    return login;
                }()
            }, {
                key: "config",
                value: function () {
                    var _config = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee6(t, e, a, s) {
                        var r;
                        return _regenerator.default.wrap(function _callee6$(_context7) {
                            while (1) {
                                switch (_context7.prev = _context7.next) {
                                    case 0:
                                        _context7.t0 = i.ready;
                                        if (_context7.t0) {
                                            _context7.next = 4;
                                            break;
                                        }
                                        _context7.next = 4;
                                        return i.init();

                                    case 4:
                                        r = {
                                            gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            type: t ? "switch" : "module",
                                            v: zs.configs.gameCfg.version
                                        };
                                        return _context7.abrupt("return", (t || (r.module = e || "base_module", a && (r.table = a)),
                                            i.request("config", r, s)));

                                    case 6:
                                    case "end":
                                        return _context7.stop();
                                }
                            }
                        }, _callee6);
                    }));
                    function config(_x8, _x9, _x10, _x11) {
                        return _config.apply(this, arguments);
                    }
                    return config;
                }()
            }, {
                key: "jsonConfig",
                value: function () {
                    var _jsonConfig = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee7(t, e) {
                        var a;
                        return _regenerator.default.wrap(function _callee7$(_context8) {
                            while (1) {
                                switch (_context8.prev = _context8.next) {
                                    case 0:
                                        _context8.t0 = i.ready;
                                        if (_context8.t0) {
                                            _context8.next = 4;
                                            break;
                                        }
                                        _context8.next = 4;
                                        return i.init();

                                    case 4:
                                        a = {
                                            gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            type: "json",
                                            v: zs.configs.gameCfg.version,
                                            module: "base_module"
                                        };
                                        return _context8.abrupt("return", (t && (a.table = t), i.request("config", a, e)));

                                    case 6:
                                    case "end":
                                        return _context8.stop();
                                }
                            }
                        }, _callee7);
                    }));
                    function jsonConfig(_x12, _x13) {
                        return _jsonConfig.apply(this, arguments);
                    }
                    return jsonConfig;
                }()
            }, {
                key: "update",
                value: function () {
                    var _update = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee8(t, e, a) {
                        var s;
                        return _regenerator.default.wrap(function _callee8$(_context9) {
                            while (1) {
                                switch (_context9.prev = _context9.next) {
                                    case 0:
                                        _context9.t0 = i.ready;
                                        if (_context9.t0) {
                                            _context9.next = 4;
                                            break;
                                        }
                                        _context9.next = 4;
                                        return i.init();

                                    case 4:
                                        s = {
                                            gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            uid: zs.core.userId,
                                            key: t,
                                            data: e
                                        };
                                        return _context9.abrupt("return", i.request("update", s, a));

                                    case 6:
                                    case "end":
                                        return _context9.stop();
                                }
                            }
                        }, _callee8);
                    }));
                    function update(_x14, _x15, _x16) {
                        return _update.apply(this, arguments);
                    }
                    return update;
                }()
            }, {
                key: "download",
                value: function () {
                    var _download = _asyncToGenerator2(/* */ _regenerator.default.mark(function _callee9(t, e) {
                        var a;
                        return _regenerator.default.wrap(function _callee9$(_context10) {
                            while (1) {
                                switch (_context10.prev = _context10.next) {
                                    case 0:
                                        _context10.t0 = i.ready;
                                        if (_context10.t0) {
                                            _context10.next = 4;
                                            break;
                                        }
                                        _context10.next = 4;
                                        return i.init();

                                    case 4:
                                        a = {
                                            gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                            uid: zs.core.userId,
                                            key: t
                                        };
                                        return _context10.abrupt("return", i.request("download", a, e));

                                    case 6:
                                    case "end":
                                        return _context10.stop();
                                }
                            }
                        }, _callee9);
                    }));
                    function download(_x17, _x18) {
                        return _download.apply(this, arguments);
                    }
                    return download;
                }()
            }, {
                key: "log",
                value: function log(t, e) {
                    window.zs.platform.config.platformMark, zs.configs.gameCfg.appId, zs.core.userId;
                }
            }, {
                key: "edit",
                value: function edit(t, e, a) {
                    var s = {
                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                        uid: zs.core.userId,
                        key: t,
                        val: e
                    };
                    return i.request("edit", s, a);
                }
            }, {
                key: "behavior",
                value: function behavior(t, e, a, s) {
                    var r = {
                        event_id: t,
                        type: e,
                        record: a
                    };
                    return i.request("behavior", r, s);
                }
            }, {
                key: "report",
                value: function report(t, e, a, s, r) {
                    var o = {
                        gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                        app_id: window.zs.platform.config.platformMark + zs.configs.gameCfg.appId,
                        platform_id: i.platformId[zs.platform.config.platformMark],
                        uid: zs.core.userId,
                        open_id: zs.exporter.dataMgr.getUUID(),
                        group: t,
                        event: e,
                        name: a,
                        version: zs.configs.gameCfg.version,
                        params: s,
                        timestamp: Math.round(new Date().getTime() / 1e3).toString()
                    };
                    return i.request("report", o, r);
                }
            }]);
            return i;
        }();
        i.ready = !1, i.version = "v2", i.domainIdx = -1, i.city = null, i.timestamp = null,
            i.defaultData = {},
            i.remoteWebSettingURL = "",//https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/new_framework/web.json
            i.authorizationToken = "", i.authorizationSecret = "",
            i.listDomain = ["", //https://gamesapi.zxmn2018.com
                "",//https://gamesapi.qwpo2018.com
                ""],//https://gamesapi.zaml2018.com
            i.mapWebApi = {
                auth: "game/auth",
                ping: "game/clientInfo",
                login: "game/login",
                config: "game/config",
                update: "game/update",
                download: "game/download",
                report: "game/report",
                log: "game/log",
                behavior: "ad/behavior",
                edit: "game/edit"
            }, i.platformId = {
                wx_: 1,
                oppo_: 2,
                vivo_: 3,
                qq_: 4,
                tt_: 5,
                app_: 6,
                ks_: 7,
                hw_: 8
            }, t.NetworkMode = e, t.MD5 = a, t.network = i;
    }(window.zs = window.zs || {});
}()