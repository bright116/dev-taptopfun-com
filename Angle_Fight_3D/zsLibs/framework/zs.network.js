var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(requirea("../../@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/createClass"));

window.zs = window.zs || {}, function(t) {
    "use strict";
    var e;
    !function(t) {
        t[t.Local = 0] = "Local", t[t.Async = 1] = "Async", t[t.Sync = 2] = "Sync";
    }(e = e || (e = {}));
    var a = /* */ function() {
        function a() {
            (0, _classCallCheck2.default)(this, a);
        }
        (0, _createClass2.default)(a, null, [ {
            key: "rotateLeft",
            value: function rotateLeft(t, e) {
                return t << e | t >>> 32 - e;
            }
        }, {
            key: "addUnsigned",
            value: function addUnsigned(t, e) {
                var a, s, i, o, r;
                return i = 2147483648 & t, o = 2147483648 & e, r = (1073741823 & t) + (1073741823 & e), 
                (a = 1073741824 & t) & (s = 1073741824 & e) ? 2147483648 ^ r ^ i ^ o : a | s ? 1073741824 & r ? 3221225472 ^ r ^ i ^ o : 1073741824 ^ r ^ i ^ o : r ^ i ^ o;
            }
        }, {
            key: "F",
            value: function F(t, e, a) {
                return t & e | ~t & a;
            }
        }, {
            key: "G",
            value: function G(t, e, a) {
                return t & a | e & ~a;
            }
        }, {
            key: "H",
            value: function H(t, e, a) {
                return t ^ e ^ a;
            }
        }, {
            key: "I",
            value: function I(t, e, a) {
                return e ^ (t | ~a);
            }
        }, {
            key: "FF",
            value: function FF(t, e, a, s, i, o, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.F(e, a, s), i), r)), 
                this.addUnsigned(this.rotateLeft(t, o), e);
            }
        }, {
            key: "GG",
            value: function GG(t, e, a, s, i, o, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.G(e, a, s), i), r)), 
                this.addUnsigned(this.rotateLeft(t, o), e);
            }
        }, {
            key: "HH",
            value: function HH(t, e, a, s, i, o, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.H(e, a, s), i), r)), 
                this.addUnsigned(this.rotateLeft(t, o), e);
            }
        }, {
            key: "II",
            value: function II(t, e, a, s, i, o, r) {
                return t = this.addUnsigned(t, this.addUnsigned(this.addUnsigned(this.I(e, a, s), i), r)), 
                this.addUnsigned(this.rotateLeft(t, o), e);
            }
        }, {
            key: "convertToWordArray",
            value: function convertToWordArray(t) {
                for (var e, a = t.length, s = a + 8, i = 16 * ((s - s % 64) / 64 + 1), o = Array(i - 1), r = 0, n = 0; n < a; ) {
                    r = n % 4 * 8, o[e = (n - n % 4) / 4] = o[e] | t.charCodeAt(n) << r, n++;
                }
                return r = n % 4 * 8, o[e = (n - n % 4) / 4] = o[e] | 128 << r, o[i - 2] = a << 3, 
                o[i - 1] = a >>> 29, o;
            }
        }, {
            key: "wordToHex",
            value: function wordToHex(t) {
                var e, a = "", s = "";
                for (e = 0; e <= 3; e++) {
                    a += (s = "0" + (t >>> 8 * e & 255).toString(16)).substr(s.length - 2, 2);
                }
                return a;
            }
        }, {
            key: "uTF8Encode",
            value: function uTF8Encode(t) {
                t = t.replace(/\x0d\x0a/g, "\n");
                for (var e = "", a = 0; a < t.length; a++) {
                    var s = t.charCodeAt(a);
                    s < 128 ? e += String.fromCharCode(s) : s > 127 && s < 2048 ? (e += String.fromCharCode(s >> 6 | 192), 
                    e += String.fromCharCode(63 & s | 128)) : (e += String.fromCharCode(s >> 12 | 224), 
                    e += String.fromCharCode(s >> 6 & 63 | 128), e += String.fromCharCode(63 & s | 128));
                }
                return e;
            }
        }, {
            key: "md5",
            value: function md5(t) {
                var e, a, s, i, o, r, n, d, l, g = Array();
                for (t = this.uTF8Encode(t), g = this.convertToWordArray(t), r = 1732584193, n = 4023233417, 
                d = 2562383102, l = 271733878, e = 0; e < g.length; e += 16) {
                    a = r, s = n, i = d, o = l, r = this.FF(r, n, d, l, g[e + 0], 7, 3614090360), l = this.FF(l, r, n, d, g[e + 1], 12, 3905402710), 
                    d = this.FF(d, l, r, n, g[e + 2], 17, 606105819), n = this.FF(n, d, l, r, g[e + 3], 22, 3250441966), 
                    r = this.FF(r, n, d, l, g[e + 4], 7, 4118548399), l = this.FF(l, r, n, d, g[e + 5], 12, 1200080426), 
                    d = this.FF(d, l, r, n, g[e + 6], 17, 2821735955), n = this.FF(n, d, l, r, g[e + 7], 22, 4249261313), 
                    r = this.FF(r, n, d, l, g[e + 8], 7, 1770035416), l = this.FF(l, r, n, d, g[e + 9], 12, 2336552879), 
                    d = this.FF(d, l, r, n, g[e + 10], 17, 4294925233), n = this.FF(n, d, l, r, g[e + 11], 22, 2304563134), 
                    r = this.FF(r, n, d, l, g[e + 12], 7, 1804603682), l = this.FF(l, r, n, d, g[e + 13], 12, 4254626195), 
                    d = this.FF(d, l, r, n, g[e + 14], 17, 2792965006), n = this.FF(n, d, l, r, g[e + 15], 22, 1236535329), 
                    r = this.GG(r, n, d, l, g[e + 1], 5, 4129170786), l = this.GG(l, r, n, d, g[e + 6], 9, 3225465664), 
                    d = this.GG(d, l, r, n, g[e + 11], 14, 643717713), n = this.GG(n, d, l, r, g[e + 0], 20, 3921069994), 
                    r = this.GG(r, n, d, l, g[e + 5], 5, 3593408605), l = this.GG(l, r, n, d, g[e + 10], 9, 38016083), 
                    d = this.GG(d, l, r, n, g[e + 15], 14, 3634488961), n = this.GG(n, d, l, r, g[e + 4], 20, 3889429448), 
                    r = this.GG(r, n, d, l, g[e + 9], 5, 568446438), l = this.GG(l, r, n, d, g[e + 14], 9, 3275163606), 
                    d = this.GG(d, l, r, n, g[e + 3], 14, 4107603335), n = this.GG(n, d, l, r, g[e + 8], 20, 1163531501), 
                    r = this.GG(r, n, d, l, g[e + 13], 5, 2850285829), l = this.GG(l, r, n, d, g[e + 2], 9, 4243563512), 
                    d = this.GG(d, l, r, n, g[e + 7], 14, 1735328473), n = this.GG(n, d, l, r, g[e + 12], 20, 2368359562), 
                    r = this.HH(r, n, d, l, g[e + 5], 4, 4294588738), l = this.HH(l, r, n, d, g[e + 8], 11, 2272392833), 
                    d = this.HH(d, l, r, n, g[e + 11], 16, 1839030562), n = this.HH(n, d, l, r, g[e + 14], 23, 4259657740), 
                    r = this.HH(r, n, d, l, g[e + 1], 4, 2763975236), l = this.HH(l, r, n, d, g[e + 4], 11, 1272893353), 
                    d = this.HH(d, l, r, n, g[e + 7], 16, 4139469664), n = this.HH(n, d, l, r, g[e + 10], 23, 3200236656), 
                    r = this.HH(r, n, d, l, g[e + 13], 4, 681279174), l = this.HH(l, r, n, d, g[e + 0], 11, 3936430074), 
                    d = this.HH(d, l, r, n, g[e + 3], 16, 3572445317), n = this.HH(n, d, l, r, g[e + 6], 23, 76029189), 
                    r = this.HH(r, n, d, l, g[e + 9], 4, 3654602809), l = this.HH(l, r, n, d, g[e + 12], 11, 3873151461), 
                    d = this.HH(d, l, r, n, g[e + 15], 16, 530742520), n = this.HH(n, d, l, r, g[e + 2], 23, 3299628645), 
                    r = this.II(r, n, d, l, g[e + 0], 6, 4096336452), l = this.II(l, r, n, d, g[e + 7], 10, 1126891415), 
                    d = this.II(d, l, r, n, g[e + 14], 15, 2878612391), n = this.II(n, d, l, r, g[e + 5], 21, 4237533241), 
                    r = this.II(r, n, d, l, g[e + 12], 6, 1700485571), l = this.II(l, r, n, d, g[e + 3], 10, 2399980690), 
                    d = this.II(d, l, r, n, g[e + 10], 15, 4293915773), n = this.II(n, d, l, r, g[e + 1], 21, 2240044497), 
                    r = this.II(r, n, d, l, g[e + 8], 6, 1873313359), l = this.II(l, r, n, d, g[e + 15], 10, 4264355552), 
                    d = this.II(d, l, r, n, g[e + 6], 15, 2734768916), n = this.II(n, d, l, r, g[e + 13], 21, 1309151649), 
                    r = this.II(r, n, d, l, g[e + 4], 6, 4149444226), l = this.II(l, r, n, d, g[e + 11], 10, 3174756917), 
                    d = this.II(d, l, r, n, g[e + 2], 15, 718787259), n = this.II(n, d, l, r, g[e + 9], 21, 3951481745), 
                    r = this.addUnsigned(r, a), n = this.addUnsigned(n, s), d = this.addUnsigned(d, i), 
                    l = this.addUnsigned(l, o);
                }
                return (this.wordToHex(r) + this.wordToHex(n) + this.wordToHex(d) + this.wordToHex(l)).toLowerCase();
            }
        }, {
            key: "buildSign",
            value: function buildSign(t, e) {
                e = e || !0;
                for (var a = Object.keys(t).sort(), s = "", i = 0; i < a.length; i++) {
                    s += a[i] + ":" + t[a[i]];
                }
                e && (s += zs.configs.gameCfg.secret);
                var o = this.md5(s);
                return o = o.toLowerCase();
            }
        } ]);
        return a;
    }();
    var s = /* */ function() {
        function s() {
            (0, _classCallCheck2.default)(this, s);
        }
        (0, _createClass2.default)(s, null, [ {
            key: "encrypt",
            value: function encrypt(t) {
                var e = CryptoJS.enc.Utf8.parse(s.authorizationSecret), a = CryptoJS.enc.Utf8.parse(t);
                return CryptoJS.AES.encrypt(a, e, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }).toString();
            }
        }, {
            key: "decrypt",
            value: function decrypt(t) {
                var e = CryptoJS.enc.Utf8.parse(s.authorizationSecret), a = CryptoJS.AES.decrypt(t, e, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
                return CryptoJS.enc.Utf8.stringify(a).toString();
            }
        }, {
            key: "init",
            value: function() {
                var _init = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee() {
                    var t, _e, e, _t, _t2;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                t = zs.configs.gameCfg;
                                if (!(s.defaultData = t.network, !t.skipRemote)) {
                                    _context.next = 6;
                                    break;
                                }
                                _context.next = 4;
                                return zs.resource.nativeLoad(t.remoteWebSettingURL || s.remoteWebSettingURL, null, !0).catch(function(t) {
                                    return t;
                                });

                              case 4:
                                _e = _context.sent;
                                _e && (_e.webDomains && (s.listDomain = _e.webDomains), _e.webApis && (_e.webApis.ping && (s.mapWebApi.ping = _e.webApis.ping), 
                                _e.webApis.login && (s.mapWebApi.login = _e.webApis.login), _e.webApis.config && (s.mapWebApi.config = _e.webApis.config), 
                                _e.webApis.update && (s.mapWebApi.update = _e.webApis.update), _e.webApis.download && (s.mapWebApi.download = _e.webApis.download)), 
                                _e.exportDomainOld && (zs.exporter.dataMgr.URL = _e.exportDomainOld), _e.exportDomainNew && (zs.exporter.dataMgr.NEWURL = _e.exportDomainNew)), 
                                zs.log.debug("remote webSetting", "Network", _e);

                              case 6:
                                _context.next = 8;
                                return s.ping().catch(function(t) {
                                    return t;
                                });

                              case 8:
                                _context.t0 = "v2" == s.version;
                                if (!_context.t0) {
                                    _context.next = 12;
                                    break;
                                }
                                _context.next = 12;
                                return s.authorization().catch(function(t) {
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
                                if (!(s.domainIdx >= 0)) {
                                    _context.next = 28;
                                    break;
                                }
                                if (!zs.platform.proxy) {
                                    _context.next = 25;
                                    break;
                                }
                                _context.next = 17;
                                return zs.platform.async.getLoginParams().catch(function(t) {
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
                                return s.login(_t).then(function(t) {
                                    t.user_id ? (e = t, s.ready = !0, zs.log.debug("登陆成功：", "Network", t)) : zs.td.justTrack("后台登录失败", "后台登录失败");
                                }).catch(function(t) {
                                    zs.td.justTrack("后台登录失败", "后台登录失败");
                                });

                              case 23:
                                _context.next = 28;
                                break;

                              case 25:
                                _context.next = 27;
                                return s.login({
                                    uid: "1"
                                }).then(function(t) {
                                    t.user_id && (e = t, s.ready = !0, zs.log.debug("登陆成功：", "Network", t));
                                }).catch(function(t) {
                                    return t;
                                });

                              case 27:
                                s.ready = !0;

                              case 28:
                                e.is_new && zs.SaveData.save(), s.loginCode = "";
                                for (_t2 = 0; _t2 < 3; _t2++) {
                                    s.loginCode += zs.utils.randByte();
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
                return s.domainIdx < 0 || s.domainIdx >= s.listDomain.length ? null : null == s.mapWebApi[t] ? (zs.log.error("非法网络接口： " + t, "Network"), 
                null) : s.listDomain[s.domainIdx] + "/" + s.version + "/" + s.mapWebApi[t];
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
            value: function() {
                var _post = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee2(t, e, a, i, o) {
                    var _this = this;
                    var d, r, n;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!(null == o && (o = 3), zs.platform.proxy && zs.platform.async.request)) {
                                    _context2.next = 4;
                                    break;
                                }
                                d = {
                                    "content-type": "application/json"
                                };
                                if ("v2" == s.version && "" != s.authorizationToken && (d = {
                                    "content-type": "application/json",
                                    authorization: s.authorizationToken
                                }, !i)) {
                                    r = JSON.stringify(e), n = s.encrypt(r);
                                    e._data = n;
                                }
                                return _context2.abrupt("return", new zs.Coop(function(s, r) {
                                    zs.log.debug("通讯请求：" + t, "Network", e), zs.td.justTrack("通讯请求", "通讯请求"), zs.platform.async.request({
                                        url: t,
                                        data: JSON.stringify(e),
                                        timeout: a,
                                        header: d,
                                        method: "POST"
                                    }).then(function(e) {
                                        return zs.log.debug("请求成功：" + t, "Network", e), s(e.data.data);
                                    }).catch(function(n) {
                                        return o > 0 ? (zs.log.error("请求重试：" + t, "Network", n), _this.post(t, e, a, i, --o).then(s).catch(r)) : (zs.td.justTrack("通讯请求失败", "通讯请求失败"), 
                                        zs.log.error("请求失败：" + t, "Network", n), r(n));
                                    });
                                }));

                              case 4:
                                return _context2.abrupt("return", new zs.Coop(function(r, n) {
                                    var d = new XMLHttpRequest();
                                    var l = !1, g = !1;
                                    if (d.timeout = a || 1e4, zs.utils.sleep(d.timeout).then(function() {
                                        if (!g) return l = !0, o > 0 ? (zs.log.error("重复请求：" + t), _this.post(t, e, a, i, --o).then(r).catch(n)) : (zs.log.error("请求超时：" + t), 
                                        n());
                                    }).catch(function(t) {
                                        return t;
                                    }), d.onreadystatechange = function() {
                                        if (4 == d.readyState && !l) {
                                            g = !0;
                                            var c = d.responseText;
                                            if (d.status >= 200 && d.status < 400) {
                                                var u = {};
                                                try {
                                                    u = JSON.parse(c), "v2" == s.version && u.code;
                                                } catch (t) {
                                                    return zs.log.error("请求解析失败： ", t), n(t);
                                                }
                                                return zs.log.debug("请求成功：" + t, "Network", c), r(u.data);
                                            }
                                            return o > 0 ? (zs.log.error("重复请求：" + t, c), _this.post(t, e, a, i, --o).then(r).catch(n)) : (zs.log.error("请求失败：" + t, c), 
                                            n(c));
                                        }
                                    }, d.ontimeout = function(s) {
                                        if (!g && !l) return g = !0, l = !0, o > 0 ? (zs.log.error("重复请求：" + t, s), _this.post(t, e, a, i, --o).then(r).catch(n)) : (zs.log.error("请求超时： " + t, s), 
                                        n(s));
                                    }, d.open("POST", t, !0), d.setRequestHeader("Content-Type", "application/json"), 
                                    "v2" == s.version && "" != s.authorizationToken && (d.setRequestHeader("authorization", s.authorizationToken), 
                                    !i)) {
                                        var c = JSON.stringify(e), u = s.encrypt(c);
                                        e._data = u;
                                    }
                                    d.send(JSON.stringify(e)), zs.log.debug("通讯请求：" + t, "Network", e);
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
            value: function get(t, e, a, s) {
                var _this2 = this;
                return null == s && (s = 3), zs.platform.proxy && zs.platform.async.request ? new zs.Coop(function(i, o) {
                    zs.log.debug("通讯请求：" + t, "Network", e), zs.td.justTrack("通讯请求", "通讯请求"), zs.platform.async.request({
                        url: t,
                        data: JSON.stringify(e),
                        timeout: a,
                        method: "GET"
                    }).then(function(e) {
                        return zs.log.debug("请求成功：" + t, "Network", e), i(e.data.data);
                    }).catch(function(r) {
                        return s > 0 ? (zs.log.error("请求重试：" + t, "Network", r), _this2.get(t, e, a, --s).then(i).catch(o)) : (zs.td.justTrack("通讯请求失败", "通讯请求失败"), 
                        zs.log.error("请求失败：" + t, "Network", r), o(r));
                    });
                }) : new zs.Coop(function(i, o) {
                    var r = new XMLHttpRequest();
                    var n = !1, d = !1;
                    r.timeout = a || 1e4, zs.utils.sleep(r.timeout).then(function() {
                        if (!d) return n = !0, s > 0 ? (zs.log.error("重复请求：" + t), _this2.get(t, e, a, --s).then(i).catch(o)) : (zs.log.error("请求超时：" + t), 
                        o());
                    }).catch(function(t) {
                        return t;
                    }), r.onreadystatechange = function() {
                        if (4 == r.readyState && !n) {
                            d = !0;
                            var l = r.responseText;
                            if (r.status >= 200 && r.status < 400) {
                                var g = {};
                                try {
                                    g = JSON.parse(l);
                                } catch (t) {
                                    return zs.log.error("请求解析失败： ", t), o(t);
                                }
                                return zs.log.debug("请求成功：" + t, "Network", l), i(g.data);
                            }
                            return s > 0 ? (zs.log.error("重复请求：" + t, l), _this2.get(t, e, a, --s).then(i).catch(o)) : (zs.log.error("请求失败：" + t, l), 
                            o(l));
                        }
                    }, r.ontimeout = function(r) {
                        if (!d && !n) return d = !0, n = !0, s > 0 ? (zs.log.error("重复请求：" + t, r), _this2.get(t, e, a, --s).then(i).catch(o)) : (zs.log.error("请求超时： " + t, r), 
                        o(r));
                    }, r.open("GET", t, !0), r.setRequestHeader("Content-Type", "application/json");
                    var l = JSON.stringify(e);
                    r.send(l), zs.log.debug("通讯请求：" + t, "Network", l);
                });
            }
        }, {
            key: "nativeRequest",
            value: function nativeRequest(t, e, i, o, r, n) {
                var _this3 = this;
                var d = Math.round(new Date().getTime() / 1e3).toString();
                if (e = Object.assign(e, {
                    timestamp: d
                }), o) {
                    var _t3 = a.buildSign(e, !r);
                    e = Object.assign(e, {
                        sign: _t3
                    });
                }
                return new zs.Coop(function(a, i) {
                    if ("v2" == s.version && "" != s.authorizationToken && !n) {
                        var o = JSON.stringify(e), r = s.encrypt(o);
                        e._data = r;
                    }
                    _this3.post(t, e, 3e3, !0).then(function(t) {
                        a(t);
                    }).catch(function(t) {
                        i(t);
                    });
                });
            }
        }, {
            key: "request",
            value: function request(t, a, i) {
                return new zs.Coop(function(o, r) {
                    var n = null, d = s.getUrl(t), l = null;
                    if (zs.configs.gameCfg.local && (i = e.Local), d && (null == i || i == e.Sync)) return s.post(d, a).then(function(e) {
                        var i = null;
                        switch (t) {
                          case "config":
                            a && "window.modulea" === a.type ? a.window.modulea ? (i = a.window.modulea ? a.window.modulea : "base_module", 
                            a.table && (i += ">>" + a.table)) : a.table && (i = a.table) : a && "switch" === a.type && (i = "switch");
                            break;

                          case "download":
                          case "get":
                            i = a.key;
                            break;

                          case "auth":
                            s.authorizationToken = e.token, s.authorizationSecret = e.secret;
                        }
                        null == e || "" == e || Array.isArray(e) && 0 == e.length ? e = s.getLocalData(t, i) : s.setLocalData(t, e, i), 
                        o(e);
                    }).catch(function(t) {
                        r(t);
                    });
                    if (null == d || i === e.Local || i === e.Async) {
                        switch (t) {
                          case "login":
                            n = s.getLocalData(t);
                            break;

                          case "config":
                            var _e2 = null;
                            a && "window.modulea" === a.type ? a.window.modulea ? (_e2 = a.window.modulea ? a.window.modulea : "base_module", 
                            a.table && (_e2 += ">>" + a.table)) : a.table && (_e2 = a.table) : a && a.type, 
                            _e2 = "switch", n = s.getLocalData(t, _e2);
                            break;

                          case "download":
                            a && a.key && (n = s.getLocalData(t, a.key));
                            break;

                          case "get":
                            if (a && a.key) {
                                n = s.getLocalData(t, a.key);
                            }
                            break;

                          case "update":
                            a && a.key && a.data && s.setLocalData("download", a.data, a.key), n = !0;
                            break;

                          case "edit":
                            if (a && a.key && a.val) {
                                var _t4 = null;
                                (_t4 = JSON.parse(a.val)) && _t4.data && (_t4 = _t4.data), s.setLocalData("get", _t4, a.key);
                            }
                            n = !0;
                        }
                        if (null == n && zs.log.fatal("本地网络缓存及默认值不存在: " + t, "Network"), l = n, null == d || i === e.Local) return zs.log.debug(t + " 通讯返回本地数据", "Network"), 
                        o(l);
                    }
                    return s.post(d, a).then(function(e) {
                        var i = null;
                        switch (t) {
                          case "config":
                            a && "window.modulea" === a.type && (i = a.window.modulea ? a.window.modulea : "base_module", a.table && (i += "_" + a.table));
                            break;

                          case "download":
                            i = a.key;
                        }
                        null != e && "" != e && s.setLocalData(t, e, i);
                    }).catch(function(t) {
                        return t;
                    }), o(l);
                });
            }
        }, {
            key: "getLocalData",
            value: function getLocalData(t, e) {
                var a = t;
                e && (a += ">>" + e);
                var i = zs.utils.getItem("network_" + a);
                return i ? JSON.parse(i) : s.defaultData[a];
            }
        }, {
            key: "setLocalData",
            value: function setLocalData(t, e, a) {
                if (null == e || null == e) return;
                var s = t;
                a && (s += ">>" + a);
                var i = JSON.stringify(e);
                i && zs.utils.setItem("network_" + s, i);
            }
        }, {
            key: "ping",
            value: function() {
                var _ping = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee3() {
                    var _loop, _t5, _ret;
                    return _regenerator.default.wrap(function _callee3$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                s.domainIdx = -1;
                                _loop = /* */ _regenerator.default.mark(function _loop(_t5) {
                                    var e, a;
                                    return _regenerator.default.wrap(function _loop$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                              case 0:
                                                e = s.listDomain[_t5] + "/" + s.version + "/" + s.mapWebApi.ping, a = {};
                                                _context3.next = 3;
                                                return s.get(e, a, 1e3).then(function(e) {
                                                    s.domainIdx = _t5, zs.product.city = e.city, zs.product.country = e.country, zs.product.timestamp = 1e3 * e.timestamp;
                                                }).catch(function(t) {
                                                    zs.log.warn("域名 " + e + " 无法正常通讯", "Network");
                                                });

                                              case 3:
                                                if (!(s.domainIdx >= 0)) {
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
                                _t5 = 0;

                              case 3:
                                if (!(_t5 < s.listDomain.length)) {
                                    _context4.next = 11;
                                    break;
                                }
                                return _context4.delegateYield(_loop(_t5), "t0", 5);

                              case 5:
                                _ret = _context4.t0;
                                if (!(_ret === "break")) {
                                    _context4.next = 8;
                                    break;
                                }
                                return _context4.abrupt("break", 11);

                              case 8:
                                _t5++;
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
            value: function() {
                var _authorization = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee4() {
                    var t;
                    return _regenerator.default.wrap(function _callee4$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                t = {};
                                return _context5.abrupt("return", (t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId, 
                                s.request("auth", t)));

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
            value: function() {
                var _login = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee5(t, e) {
                    return _regenerator.default.wrap(function _callee5$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                return _context6.abrupt("return", (null == t && (t = {}), t.gid = window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId, 
                                zs.log.debug("登录参数：", "Network", t), s.request("login", t, e)));

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
            value: function() {
                var _config = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee6(t, e, a, i) {
                    var o;
                    return _regenerator.default.wrap(function _callee6$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _context7.t0 = s.ready;
                                if (_context7.t0) {
                                    _context7.next = 4;
                                    break;
                                }
                                _context7.next = 4;
                                return s.init();

                              case 4:
                                o = {
                                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                    type: t ? "switch" : "window.modulea",
                                    v: zs.configs.gameCfg.version
                                };
                                return _context7.abrupt("return", (t || (o.window.modulea = e || "base_module", a && (o.table = a)), 
                                s.request("config", o, i)));

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
            value: function() {
                var _jsonConfig = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee7(t, e) {
                    var a;
                    return _regenerator.default.wrap(function _callee7$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.t0 = s.ready;
                                if (_context8.t0) {
                                    _context8.next = 4;
                                    break;
                                }
                                _context8.next = 4;
                                return s.init();

                              case 4:
                                a = {
                                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                    type: "json",
                                    v: zs.configs.gameCfg.version,
                                    modulea: "base_module"
                                };
                                return _context8.abrupt("return", (t && (a.table = t), s.request("config", a, e)));

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
            value: function() {
                var _update = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee8(t, e, a) {
                    var i;
                    return _regenerator.default.wrap(function _callee8$(_context9) {
                        while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                _context9.t0 = s.ready;
                                if (_context9.t0) {
                                    _context9.next = 4;
                                    break;
                                }
                                _context9.next = 4;
                                return s.init();

                              case 4:
                                i = {
                                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                    uid: zs.core.userId,
                                    key: t,
                                    data: e
                                };
                                return _context9.abrupt("return", s.request("update", i, a));

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
            value: function() {
                var _download = (0, _asyncToGenerator2.default)(/* */ _regenerator.default.mark(function _callee9(t, e) {
                    var a;
                    return _regenerator.default.wrap(function _callee9$(_context10) {
                        while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                _context10.t0 = s.ready;
                                if (_context10.t0) {
                                    _context10.next = 4;
                                    break;
                                }
                                _context10.next = 4;
                                return s.init();

                              case 4:
                                a = {
                                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                                    uid: zs.core.userId,
                                    key: t
                                };
                                return _context10.abrupt("return", s.request("download", a, e));

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
            key: "dataEdit",
            value: function dataEdit(t, e, a) {
                var i = {
                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                    uid: zs.core.userId,
                    key: t,
                    val: e
                };
                return s.request("edit", i, a);
            }
        }, {
            key: "dataGet",
            value: function dataGet(t, e) {
                var a = {
                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                    uid: zs.core.userId,
                    key: t
                };
                return s.request("get", a, e);
            }
        }, {
            key: "video",
            value: function video(t, e, a, i) {
                var o = zs.configs.gameCfg.video ? zs.configs.gameCfg.video[e] : null;
                null == o && (e = "default", o = "默认视频");
                var r = {
                    gid: window.zs.platform.config.platformMark + zs.configs.gameCfg.gameId,
                    uid: zs.core.userId,
                    uvid: t,
                    video_id: e,
                    video_name: o,
                    video_type: a,
                    version: zs.configs.gameCfg.version,
                    scene: zs.platform.sync.getScene(),
                    timestamp: new Date().getTime()
                };
                return s.request("video", r, i);
            }
        }, {
            key: "behavior",
            value: function behavior(t, e, a, i) {
                var o = {
                    event_id: t,
                    type: e,
                    record: a
                };
                return s.request("behavior", o, i);
            }
        } ]);
        return s;
    }();
    s.ready = !1, s.version = "v2", s.domainIdx = -1, s.city = null, s.timestamp = null, 
    s.defaultData = {}, s.remoteWebSettingURL = "https://changshazhise01-1254961065.cos.ap-guangzhou.myqcloud.com/zhise/new_framework/web.json", 
    s.authorizationToken = "", s.authorizationSecret = "", s.listDomain = [ "https://gamesapi.zxmn2018.com", "https://gamesapi.qwpo2018.com", "https://gamesapi.zaml2018.com" ], 
    s.mapWebApi = {
        auth: "game/auth",
        ping: "game/clientInfo",
        login: "game/login",
        config: "game/config",
        update: "game/update",
        download: "game/download",
        report: "game/report",
        log: "game/log",
        behavior: "ad/behavior",
        edit: "game/edit",
        get: "game/get",
        video: "game/video"
    }, s.platformId = {
        wx_: 1,
        oppo_: 2,
        vivo_: 3,
        qq_: 4,
        tt_: 5,
        app_: 6,
        ks_: 7,
        hw_: 8
    }, t.NetworkMode = e, t.MD5 = a, t.network = s;
}(window.zs = window.zs || {});