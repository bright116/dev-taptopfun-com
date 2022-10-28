var __extends = this && this.__extends || function() {
    var e = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
    };
    return function(t, a) {
        function i() {
            this.constructor = t;
        }
        e(t, a), t.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype,
            new i());
    };
}();

! function() {
    function e(t, a, i) {
        function n(r, s) {
            if (!a[r]) {
                if (!t[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var p = new Error("Cannot find module '" + r + "'");
                    throw p.code = "MODULE_NOT_FOUND", p;
                }
                var u = a[r] = {
                    exports: {}
                };
                t[r][0].call(u.exports, function(e) {
                    return n(t[r][1][e] || e);
                }, u, u.exports, e, t, a, i);
            }
            return a[r].exports;
        }
        for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) n(i[r]);
        return n;
    }
    return e;
}()({
    1: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                e._b64tab = function() {
                    for (var t = {}, a = 0, i = e._b64chars.length; a < i; a++) t[e._b64chars.charAt(a)] = a;
                    return t;
                };
            }
            return e._cb_btou = function(e) {
                    switch (e.length) {
                        case 4:
                            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                            return String.fromCharCode(55296 + (t >>> 10)) + String.fromCharCode(56320 + (1023 & t));

                        case 3:
                            return String.fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                        default:
                            return String.fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                    }
                }, e._cb_decode = function(e) {
                    var t = e.length,
                        a = t % 4,
                        i = (t > 0 ? this._b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? this._b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? this._b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? this._b64tab[e.charAt(3)] : 0),
                        n = [String.fromCharCode(i >>> 16), String.fromCharCode(i >>> 8 & 255), String.fromCharCode(255 & i)];
                    return n.length -= [0, 0, 2, 1][a], n.join("");
                }, e._cb_encode = function(t) {
                    var a = [0, 2, 1][t.length % 3],
                        i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                    return [e._b64chars.charAt(i >>> 18), e._b64chars.charAt(i >>> 12 & 63), a >= 2 ? "=" : e._b64chars.charAt(i >>> 6 & 63), a >= 1 ? "=" : e._b64chars.charAt(63 & i)].join("");
                }, e._cb_utob = function(e) {
                    if (e.length < 2) {
                        return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? String.fromCharCode(192 | t >>> 6) + String.fromCharCode(128 | 63 & t) : String.fromCharCode(224 | t >>> 12 & 15) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
                    }
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return String.fromCharCode(240 | t >>> 18 & 7) + String.fromCharCode(128 | t >>> 12 & 63) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
                }, e._re_btou = function() {
                    return new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");
                }, e._atob = function(e) {
                    return e.replace(/[\s\S]{1,4}/g, this._cb_decode);
                }, e._btoa = function(e) {
                    return e.replace(/[\s\S]{1,3}/g, this._cb_encode);
                }, e._btou = function(e) {
                    return e.replace(this._re_btou, this._cb_btou);
                }, e._decode = function(e) {
                    var t = this,
                        a = String(e).replace(/[-_]/g, function(e) {
                            return "-" == e ? "+" : "/";
                        });
                    return console.log("1 = ", a), a = a.replace(/[^A-Za-z0-9\+\/]/g, ""), console.log("2 = ", a),
                        function(e) {
                            return t._btou(atob(e));
                        }(a);
                }, e._encode = function(e, t) {
                    var a = this;
                    void 0 === t && (t = !1);
                    var i = function(e) {
                        return a._btoa(a._utob(e));
                    };
                    return t ? i(String(e)).replace(/[+\/]/g, function(e) {
                        return "+" == e ? "-" : "_";
                    }).replace(/=/g, "") : i(String(e));
                }, e.EncodeURI = function(e) {
                    return this._encode(e, !0);
                }, e.FromBase64 = function(e) {
                    return this._decode(e);
                }, e.ToBase64 = function(e) {
                    return this._encode(e);
                }, e.stringToBytes = function(e) {
                    var t, a, i = new Array();
                    t = e.length;
                    for (var n = 0; n < t; n++)(a = e.charCodeAt(n)) >= 65536 && a <= 1114111 ? (i.push(a >> 18 & 7 | 240),
                        i.push(a >> 12 & 63 | 128), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : a >= 2048 && a <= 65535 ? (i.push(a >> 12 & 15 | 224),
                        i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : a >= 128 && a <= 2047 ? (i.push(a >> 6 & 31 | 192),
                        i.push(63 & a | 128)) : i.push(255 & a);
                    return i;
                }, e.byteToString = function(e) {
                    if ("string" == typeof e) return e;
                    for (var t = "", a = e, i = 0; i < a.length; i++) {
                        var n = a[i].toString(2),
                            o = n.match(/^1+?(?=0)/);
                        if (o && 8 == n.length) {
                            for (var r = o[0].length, s = a[i].toString(2).slice(7 - r), l = 1; l < r; l++) s += a[l + i].toString(2).slice(2);
                            t += String.fromCharCode(parseInt(s, 2)), i += r - 1;
                        } else t += String.fromCharCode(a[i]);
                    }
                    return t;
                }, e._utob = function(e) {
                    return e.replace(this._re_utob, this._cb_utob);
                }, e._b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e._fromCharCode = String.fromCharCode, e._re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                e;
        }();
        a.TsBase64 = i;
        var n = i.ToBase64("Typescript"),
            o = i.EncodeURI('Typescript"');
        console.log(n), console.log(o);
    }, {}],
    2: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function(e) {
                function t(t, a, i, n, o) {
                    var r = e.call(this) || this;
                    return r.frames = [], r.timer = 0, r.index = 0, r.frame_number = 1, r.interval = [100],
                        r.showAniNum = 0, r.showAniArr = [], r.startFrame = 0, r.endFrame = 0, r.framesArr = [],
                        r.isChange = !1, r.playAniNum = 0, r.aniPlayTime = 0, r.changeAnitime = [3e3],
                        r.target = t, r.target.skin = "", r.frames = a, r.frame_number = a.length, r.interval = i,
                        r.framesArr = n, r.showAniArr = r.createAniArr(n), r.changeAnitime = o, r.getStartEnd(r.playAniNum),
                        r.set_index(r.startFrame), r;
                }
                return __extends(t, e), t.prototype.getStartEnd = function(e) {
                    0 == this.showAniArr[e] ? (this.startFrame = 0, this.endFrame = Number(this.framesArr[this.showAniArr[e]])) : (this.startFrame = Number(this.framesArr[this.showAniArr[e] - 1]),
                        this.endFrame = Number(this.framesArr[this.showAniArr[e]]));
                }, t.prototype.createAniArr = function(e) {
                    var t = [];
                    return e.forEach(function(e, a) {
                        t.push(a);
                    }), this.shuffleArray(t);
                }, t.prototype.shuffleArray = function(e) {
                    for (var t = -1, a = e.length, i = a - 1, n = a; ++t < n;) {
                        var o = t + Math.floor(Math.random() * (i - t + 1)),
                            r = e[o];
                        e[o] = e[t], e[t] = r;
                    }
                    return e.length = n, e;
                }, t.prototype.add_index = function() {
                    i.default.app.playAni && (this.index + 1 >= this.endFrame ? this.isChange ? (++this.playAniNum >= this.showAniArr.length && (this.playAniNum = 0),
                        this.getStartEnd(this.playAniNum), this.set_index(this.startFrame), this.isChange = !1) : this.set_index(this.startFrame) : this.set_index(this.index + 1));
                }, t.prototype.set_index = function(e) {
                    if (this.index = e, this.target)
                        if (this.target.skin) {
                            if (this.startFrame + 1 == this.endFrame && !this.isChange) return;
                            this.index < this.endFrame && (this.target.skin = this.frames[e]);
                        } else this.target.skin = this.frames[e];
                }, t.prototype.update = function() {
                    return i.default.app.mWX.likeLoop ? (this.timer += 50, (0 == i.default.app.mWX.oddEvenTestModel.isAniTest || 1 == i.default.app.mWX.oddEvenTestModel.isAniTest) && (this.aniPlayTime += 50,
                        this.aniPlayTime >= this.changeAnitime[0]) ? (this.aniPlayTime = 0, this.isChange = !0,
                        this.add_index(), void(this.timer = 0)) : void(this.timer >= this.interval[this.showAniArr[this.playAniNum]] && (this.add_index(),
                        this.timer = 0))) : (console.log("销毁jumpAni"), void this.event("die"));
                }, t;
            }(Laya.EventDispatcher);
        a.JumpAni = n;
    }, {
        "../Main": 14
    }],
    3: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./JumpAni"),
            n = e("../Main"),
            o = function() {
                function e() {
                    this.hasFrameArr = [], this.aniList = [], Laya.timer.loop(50, this, this.loop50);
                }
                return Object.defineProperty(e, "instance", {
                    get: function() {
                        return e._instance || (e._instance = new e()), e._instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.loop50 = function() {
                    for (var e = this.aniList.concat(), t = 0; t < e.length; t++) e[t].update();
                }, e.prototype.ani = function(e, t, a, o, r, s) {
                    var l = this,
                        p = 0,
                        u = [];
                    try {
                        a.forEach(function(e) {
                            p += Number(e), u.push(p);
                        });
                    } catch (e) {
                        console.log(a);
                    }
                    var m = [];
                    m.push(t);
                    var d = 2;
                    if (n.default.app.mWX.moreFenFaNum >= 2 && 0 != s) {
                        d = s, console.log("ii1:", d, p);
                        for (h = d; h < p + d; h++) {
                            f = t.replace("_" + d + ".", "_" + h + ".");
                            console.log("path2:", f, h), m.push(f);
                        }
                    } else {
                        console.log("ii2:", d, p);
                        for (var h = d; h <= p; h++) {
                            var f = t.replace("_1.", "_" + h + ".");
                            console.log("path1:", f, h), m.push(f);
                        }
                    }
                    this.hasFrameArr.indexOf(t) < 0 && Laya.loader.load(m, Laya.Handler.create(this, function() {
                        console.log("分发加载完成"), l.hasFrameArr.push(t), n.default.app.playAni = !0;
                    }), null, Laya.Loader.IMAGE, 4), e.skin = "";
                    var c = new i.JumpAni(e, m, o, u, r);
                    this.aniList.push(c), c.on("die", this, this.onJumpAniDie, [c]), console.log("问题所在 === 分发", a, t);
                }, e.prototype.onJumpAniDie = function(e) {
                    var t = this.aniList.indexOf(e);
                    t >= 0 && this.aniList.splice(t, 1);
                }, e;
            }();
        a.JumpAniCtl = o;
    }, {
        "../Main": 14,
        "./JumpAni": 2
    }],
    4: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function() {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function() {
                        return e._instance || (e._instance = new e()), e._instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.convert = function(e) {
                    var t = 0,
                        a = [],
                        n = [],
                        o = "",
                        r = 0,
                        s = [],
                        l = [],
                        p = "",
                        u = [],
                        m = [];
                    if (e.anim_config && "" != e.anim_config) {
                        var d = {};
                        try {
                            if (d = JSON.parse(e.anim_config), d.framelist = d.group_static.toString().split(","),
                                d.framebiglist = d.group_static_big.toString().split(","), d.frameone = d.frame_static.toString().split(","),
                                d.framebigone = d.frame_static_big.toString().split(","), d.millisecond = d.millisecond_static.toString().split(","),
                                d.millisecond_big = d.millisecond_static_big.toString().split(","), d.millisecond2 = d.millisecond2.toString().split(","),
                                d.millisecond_big2 = d.millisecond_big2.toString().split(","), d.millisecond3 = d.millisecond3.toString().split(","),
                                d.millisecond_big3 = d.millisecond_big3.toString().split(","), 1 == i.default.app.mWX.moreFenFaNum) d.framelist.splice(1, d.framelist.length - 1),
                                d.framebiglist.splice(1, d.framebiglist.length - 1), d.millisecond.splice(1, d.millisecond.length - 1),
                                d.millisecond_big.splice(1, d.millisecond_big.length - 1);
                            else if (i.default.app.mWX.moreFenFaNum >= 2) d.framelist.length > 1 && d.framelist.splice(0, d.framelist.length - 1),
                                d.framebiglist.length > 1 && d.framebiglist.splice(0, d.framebiglist.length - 1),
                                d.millisecond.length > 1 && d.millisecond.splice(0, d.framelist.length - 1), d.millisecond_big.length > 1 && d.millisecond_big.splice(0, d.framelist.length - 1);
                            else if (0 == i.default.app.mWX.moreFenFaNum) {
                                for (var h = 0, f = 0, c = 0; c < d.framelist.length; c++) h += Number(d.framelist[c]);
                                for (c = 0; c < d.framebiglist.length; c++) f += Number(d.framebiglist[c]);
                                d.framelist = [h], d.framebiglist = [f];
                            }
                            console.log("moreFenFaNum2:", i.default.app.mWX.moreFenFaNum, d.framelist, d.framebiglist, d.millisecond, d.millisecond_big);
                        } catch (e) {
                            return console.log(e), null;
                        }
                        var g = i.default.app.mWX.oddEvenTestModel;
                        if (0 == g.isAniTest || 2 == g.isAniTest) t = 2, a = d.framelist, n = d.millisecond,
                            o = e.static_icon, u = d.millisecond3;
                        else {
                            n = d.millisecond2, u = d.millisecond2, t = 1;
                            for (var y = [], _ = 0; _ < Number(d.frameone[0]); _++) y.push(1);
                            a = y, o = e.url_icon;
                        }
                        if (0 == g.isAniTest || 2 == g.isAniTest) r = 2, s = d.framebiglist, l = d.millisecond_big,
                            p = e.static_big_btn_icon, m = d.millisecond_big3;
                        else {
                            m = d.millisecond_big2, l = d.millisecond_big2, r = 1;
                            for (var y = [], _ = 0; _ < Number(d.framebigone[0]); _++) y.push(1);
                            s = y, p = e.big_btn_url;
                        }
                    } else t = 0, r = 0;
                    return {
                        small_type: t,
                        small_frame: a,
                        small_interval: n,
                        small_image: o,
                        millisecond: u,
                        big_type: r,
                        big_frame: s,
                        big_interval: l,
                        big_image: p,
                        millisecond_big: m
                    };
                }, e;
            }();
        a.JumpObjConverter = n;
    }, {
        "../Main": 14
    }],
    5: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.hexcase = 0, this.b64pad = "";
            }
            return e.prototype.hex_md5 = function(e) {
                return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
            }, e.prototype.b64_md5 = function(e) {
                return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
            }, e.prototype.any_md5 = function(e, t) {
                return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
            }, e.prototype.hex_hmac_md5 = function(e, t) {
                return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
            }, e.prototype.b64_hmac_md5 = function(e, t) {
                return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
            }, e.prototype.any_hmac_md5 = function(e, t, a) {
                return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), a);
            }, e.prototype.md5_vm_test = function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
            }, e.prototype.rstr_md5 = function(e) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
            }, e.prototype.rstr_hmac_md5 = function(e, t) {
                var a = this.rstr2binl(e);
                a.length > 16 && (a = this.binl_md5(a, 8 * e.length));
                for (var i = Array(16), n = Array(16), o = 0; o < 16; o++) i[o] = 909522486 ^ a[o],
                    n[o] = 1549556828 ^ a[o];
                var r = this.binl_md5(i.concat(this.rstr2binl(t)), 512 + 8 * t.length);
                return this.binl2rstr(this.binl_md5(n.concat(r), 640));
            }, e.prototype.rstr2hex = function(e) {
                try {
                    this.hexcase;
                } catch (e) {
                    this.hexcase = 0;
                }
                for (var t, a = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < e.length; n++) t = e.charCodeAt(n),
                    i += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
                return i;
            }, e.prototype.rstr2b64 = function(e) {
                try {
                    this.b64pad;
                } catch (e) {
                    this.b64pad = "";
                }
                for (var t = "", a = e.length, i = 0; i < a; i += 3)
                    for (var n = e.charCodeAt(i) << 16 | (i + 1 < a ? e.charCodeAt(i + 1) << 8 : 0) | (i + 2 < a ? e.charCodeAt(i + 2) : 0), o = 0; o < 4; o++) 8 * i + 6 * o > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - o) & 63);
                return t;
            }, e.prototype.rstr2any = function(e, t) {
                var a, i, n, o, r, s = t.length,
                    l = Array(Math.ceil(e.length / 2));
                for (a = 0; a < l.length; a++) l[a] = e.charCodeAt(2 * a) << 8 | e.charCodeAt(2 * a + 1);
                var p = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
                    u = Array(p);
                for (i = 0; i < p; i++) {
                    for (r = Array(), o = 0, a = 0; a < l.length; a++) o = (o << 16) + l[a], o -= (n = Math.floor(o / s)) * s,
                        (r.length > 0 || n > 0) && (r[r.length] = n);
                    u[i] = o, l = r;
                }
                var m = "";
                for (a = u.length - 1; a >= 0; a--) m += t.charAt(u[a]);
                return m;
            }, e.prototype.str2rstr_utf8 = function(e) {
                for (var t, a, i = "", n = -1; ++n < e.length;) t = e.charCodeAt(n), a = n + 1 < e.length ? e.charCodeAt(n + 1) : 0,
                    55296 <= t && t <= 56319 && 56320 <= a && a <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & a),
                        n++), t <= 127 ? i += String.fromCharCode(t) : t <= 2047 ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
                return i;
            }, e.prototype.str2rstr_utf16le = function(e) {
                for (var t = "", a = 0; a < e.length; a++) t += String.fromCharCode(255 & e.charCodeAt(a), e.charCodeAt(a) >>> 8 & 255);
                return t;
            }, e.prototype.str2rstr_utf16be = function(e) {
                for (var t = "", a = 0; a < e.length; a++) t += String.fromCharCode(e.charCodeAt(a) >>> 8 & 255, 255 & e.charCodeAt(a));
                return t;
            }, e.prototype.rstr2binl = function(e) {
                for (var t = Array(e.length >> 2), a = 0; a < t.length; a++) t[a] = 0;
                for (a = 0; a < 8 * e.length; a += 8) t[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
                return t;
            }, e.prototype.binl2rstr = function(e) {
                for (var t = "", a = 0; a < 32 * e.length; a += 8) t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
                return t;
            }, e.prototype.binl_md5 = function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var a = 1732584193, i = -271733879, n = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                    var s = a,
                        l = i,
                        p = n,
                        u = o;
                    a = this.md5_ff(a, i, n, o, e[r + 0], 7, -680876936), o = this.md5_ff(o, a, i, n, e[r + 1], 12, -389564586),
                        n = this.md5_ff(n, o, a, i, e[r + 2], 17, 606105819), i = this.md5_ff(i, n, o, a, e[r + 3], 22, -1044525330),
                        a = this.md5_ff(a, i, n, o, e[r + 4], 7, -176418897), o = this.md5_ff(o, a, i, n, e[r + 5], 12, 1200080426),
                        n = this.md5_ff(n, o, a, i, e[r + 6], 17, -1473231341), i = this.md5_ff(i, n, o, a, e[r + 7], 22, -45705983),
                        a = this.md5_ff(a, i, n, o, e[r + 8], 7, 1770035416), o = this.md5_ff(o, a, i, n, e[r + 9], 12, -1958414417),
                        n = this.md5_ff(n, o, a, i, e[r + 10], 17, -42063), i = this.md5_ff(i, n, o, a, e[r + 11], 22, -1990404162),
                        a = this.md5_ff(a, i, n, o, e[r + 12], 7, 1804603682), o = this.md5_ff(o, a, i, n, e[r + 13], 12, -40341101),
                        n = this.md5_ff(n, o, a, i, e[r + 14], 17, -1502002290), i = this.md5_ff(i, n, o, a, e[r + 15], 22, 1236535329),
                        a = this.md5_gg(a, i, n, o, e[r + 1], 5, -165796510), o = this.md5_gg(o, a, i, n, e[r + 6], 9, -1069501632),
                        n = this.md5_gg(n, o, a, i, e[r + 11], 14, 643717713), i = this.md5_gg(i, n, o, a, e[r + 0], 20, -373897302),
                        a = this.md5_gg(a, i, n, o, e[r + 5], 5, -701558691), o = this.md5_gg(o, a, i, n, e[r + 10], 9, 38016083),
                        n = this.md5_gg(n, o, a, i, e[r + 15], 14, -660478335), i = this.md5_gg(i, n, o, a, e[r + 4], 20, -405537848),
                        a = this.md5_gg(a, i, n, o, e[r + 9], 5, 568446438), o = this.md5_gg(o, a, i, n, e[r + 14], 9, -1019803690),
                        n = this.md5_gg(n, o, a, i, e[r + 3], 14, -187363961), i = this.md5_gg(i, n, o, a, e[r + 8], 20, 1163531501),
                        a = this.md5_gg(a, i, n, o, e[r + 13], 5, -1444681467), o = this.md5_gg(o, a, i, n, e[r + 2], 9, -51403784),
                        n = this.md5_gg(n, o, a, i, e[r + 7], 14, 1735328473), i = this.md5_gg(i, n, o, a, e[r + 12], 20, -1926607734),
                        a = this.md5_hh(a, i, n, o, e[r + 5], 4, -378558), o = this.md5_hh(o, a, i, n, e[r + 8], 11, -2022574463),
                        n = this.md5_hh(n, o, a, i, e[r + 11], 16, 1839030562), i = this.md5_hh(i, n, o, a, e[r + 14], 23, -35309556),
                        a = this.md5_hh(a, i, n, o, e[r + 1], 4, -1530992060), o = this.md5_hh(o, a, i, n, e[r + 4], 11, 1272893353),
                        n = this.md5_hh(n, o, a, i, e[r + 7], 16, -155497632), i = this.md5_hh(i, n, o, a, e[r + 10], 23, -1094730640),
                        a = this.md5_hh(a, i, n, o, e[r + 13], 4, 681279174), o = this.md5_hh(o, a, i, n, e[r + 0], 11, -358537222),
                        n = this.md5_hh(n, o, a, i, e[r + 3], 16, -722521979), i = this.md5_hh(i, n, o, a, e[r + 6], 23, 76029189),
                        a = this.md5_hh(a, i, n, o, e[r + 9], 4, -640364487), o = this.md5_hh(o, a, i, n, e[r + 12], 11, -421815835),
                        n = this.md5_hh(n, o, a, i, e[r + 15], 16, 530742520), i = this.md5_hh(i, n, o, a, e[r + 2], 23, -995338651),
                        a = this.md5_ii(a, i, n, o, e[r + 0], 6, -198630844), o = this.md5_ii(o, a, i, n, e[r + 7], 10, 1126891415),
                        n = this.md5_ii(n, o, a, i, e[r + 14], 15, -1416354905), i = this.md5_ii(i, n, o, a, e[r + 5], 21, -57434055),
                        a = this.md5_ii(a, i, n, o, e[r + 12], 6, 1700485571), o = this.md5_ii(o, a, i, n, e[r + 3], 10, -1894986606),
                        n = this.md5_ii(n, o, a, i, e[r + 10], 15, -1051523), i = this.md5_ii(i, n, o, a, e[r + 1], 21, -2054922799),
                        a = this.md5_ii(a, i, n, o, e[r + 8], 6, 1873313359), o = this.md5_ii(o, a, i, n, e[r + 15], 10, -30611744),
                        n = this.md5_ii(n, o, a, i, e[r + 6], 15, -1560198380), i = this.md5_ii(i, n, o, a, e[r + 13], 21, 1309151649),
                        a = this.md5_ii(a, i, n, o, e[r + 4], 6, -145523070), o = this.md5_ii(o, a, i, n, e[r + 11], 10, -1120210379),
                        n = this.md5_ii(n, o, a, i, e[r + 2], 15, 718787259), i = this.md5_ii(i, n, o, a, e[r + 9], 21, -343485551),
                        a = this.safe_add(a, s), i = this.safe_add(i, l), n = this.safe_add(n, p), o = this.safe_add(o, u);
                }
                return [a, i, n, o];
            }, e.prototype.md5_cmn = function(e, t, a, i, n, o) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(i, o)), n), a);
            }, e.prototype.md5_ff = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t & a | ~t & i, e, t, n, o, r);
            }, e.prototype.md5_gg = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t & i | a & ~i, e, t, n, o, r);
            }, e.prototype.md5_hh = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t ^ a ^ i, e, t, n, o, r);
            }, e.prototype.md5_ii = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(a ^ (t | ~i), e, t, n, o, r);
            }, e.prototype.safe_add = function(e, t) {
                var a = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a;
            }, e.prototype.bit_rol = function(e, t) {
                return e << t | e >>> 32 - t;
            }, e;
        }();
        a.MD5 = i;
    }, {}],
    6: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.mWriteBox = ["wxf77fb880cddf362c", "wx4e24f1dbac6b54bb", "wxdd8d2e22b81eb6e7", "wx368efd3d253d9f9c", "wxd5c1f9da7d66191e", "wxd2c0911129978e05", "wx347553459e2b6490", "wx642d9c05ee59170a", "wx214d9b691e5b328b", "wxaa46e77919aec8d9"],
                e;
        }();
        a.WriteBoxList = i;
        var n = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    t.pos(0, 0), t.size(182, 250);
                    var a = new Laya.Image();
                    a.name = "mBack", a.anchorX = .5, a.anchorY = .5, a.pos(91, 75), a.size(150, 150),
                        t.addChild(a), a.skin = r.cdnface + "main/bk1.png";
                    var i = new Laya.Image();
                    i.name = "mBack2", i.anchorX = .5, i.anchorY = .5, i.pos(91, 75), i.size(150, 150),
                        t.addChild(i);
                    var n = new Laya.Label();
                    n.name = "GameName", n.color = "#000000", n.fontSize = 25, n.centerX = 0, n.y = 165,
                        t.addChild(n);
                    var o = new Laya.Label();
                    return o.name = "PlayNum", o.color = "#000000", o.fontSize = 18, o.centerX = 0,
                        o.y = 206, t.addChild(o), t;
                }
                return __extends(t, e), t;
            }(Laya.Box),
            o = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.initCode = function() {
                    this.mNoIcon = new Laya.Label(), this.mNoIcon.pos(10, 18), this.mNoIcon.size(5, 25),
                        this.mNoIcon.bgColor = "#FFA650", this.addChild(this.mNoIcon), this.mIcon = new Laya.Image(),
                        this.mIcon.pos(25, 12), this.mIcon.size(40, 40), this.addChild(this.mIcon), this.mName = new Laya.Label(),
                        this.mName.pos(30, 18), this.mName.size(180, 25), this.mName.color = "#000000",
                        this.mName.bold = !0, this.mName.fontSize = 25, this.addChild(this.mName), this.mList = new Laya.List(),
                        this.mList.pos(10, 70), this.mList.size(730, 230), this.mList.spaceX = 0, this.mList.itemRender = n,
                        this.addChild(this.mList);
                }, t;
            }(Laya.Image),
            r = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.mIconJumpData = null, t.mNextShowGroup = 0, t.mStartGroupY = 0, t.mShowGameAppid = "",
                        t.mGoGame = null, t.mWxMenuButtonRect = null, t.width = Laya.stage.width, t.height = Laya.stage.height,
                        t.x = Laya.stage.width, t;
                }
                return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.prototype.getMenuButtonTop_CenterPoint = function() {
                        var e = new Laya.Point(0, 0);
                        if (Laya.Browser.onMiniGame) {
                            if (t.mWxVer >= "2.1.0" && null == this.mWxMenuButtonRect && null != wx.getMenuButtonBoundingClientRect()) {
                                var a = wx.getMenuButtonBoundingClientRect();
                                null != a && NaN != a.height && void 0 != a.height && null != a.height && (this.mWxMenuButtonRect = a);
                            }
                            if (null != this.mWxMenuButtonRect) {
                                var i = this.mWxMenuButtonRect.height,
                                    n = this.mWxMenuButtonRect.top;
                                return e.x = n * Laya.stage.height / t.mPhone.screenHeight, e.y = i * Laya.stage.height / t.mPhone.screenHeight,
                                    e;
                            }
                        }
                        return e;
                    }, t.getJSON = function(e) {
                        if ("" == e || null == e) return {
                            code: -999
                        };
                        var t = e.indexOf("{", 0);
                        return e = e.substr(t, e.length - t), JSON.parse(e);
                    }, t.onBtnMouseDown = function(e) {
                        e.scale(1.05, 1.05);
                    }, t.onBtnMouseOut = function(e) {
                        e.scale(1, 1);
                    }, t.registImgBtnClick = function(e, t, a, i) {
                        void 0 === a && (a = null), void 0 === i && (i = !0), null == a && (a = this), i && (e.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown, [e]),
                                e.on(Laya.Event.MOUSE_UP, this, this.onBtnMouseOut, [e]), e.on(Laya.Event.MOUSE_OUT, this, this.onBtnMouseOut, [e])),
                            e.on(Laya.Event.CLICK, a, function(e) {
                                null != t && (null == t.args ? t.args = [e] : t.args.push(e), t.run());
                            });
                    }, t.InitServerListEx = function(e, a) {
                        if (t.mType = 2, t.mGameName = a, null == t.mSelf) {
                            if (Laya.Browser.onMiniGame && (t.mPhone = wx.getSystemInfoSync()), Laya.Browser.onMiniGame) {
                                (t.mPhone.model.indexOf("iPhone X") >= 0 || Number(t.mPhone.screenHeight) >= 812) && (t.iphoneX = !0),
                                t.mWxVer = t.mPhone.SDKVersion;
                            }
                            (t.mSelf = new t()).x = 2 == t.mType ? Laya.stage.width + 10 : -Laya.stage.width - 10,
                                t.mSelf.zOrder = 9, t.mSelf.visible = !1, t.mSelf.onInit_GoGame(), Laya.stage.addChild(t.mSelf),
                                t.mMoreList = e, t.InitData(), t.mSelf.onInit(), console.log("InitServerListEx...............");
                        }
                    }, t.InitData = function() {
                        t.mGroupList = [];
                        for (var e = null, a = 0; a < t.mMoreList.length; ++a) {
                            if (void 0 == t.mMoreList[a].groupid) return;
                            e != t.mMoreList[a].groupid && (t.mGroupList.push([]), e = t.mMoreList[a].groupid),
                                t.mGroupList[t.mGroupList.length - 1].push(t.mMoreList[a]);
                        }
                        console.log("InitGroup : ", t.mGroupList);
                    }, t.ShowList = function(e, a, i, n, o, r, s) {
                        if (t.mCloseHandler = o, t.mJumpHandle = s, i.length > 0 && (t.mJumpWrite = i),
                            console.log("MG : ", n, i, a), n.length > 0) {
                            for (var l = !1, p = 0; p < e.length; ++p) {
                                if ((u = (c = e[p]).appid.toUpperCase()) == (m = n.trim().toUpperCase())) {
                                    if (3 == c.jump_type) return console.log("MG : GoToJump_3", n), l = !0, void t.jumpToGame_3(c, function() {
                                        t.ShowList3(e, a, n, o, r);
                                    }, function() {
                                        null != t.mCloseHandler && t.mCloseHandler.run();
                                    });
                                    break;
                                }
                            }
                            if (console.log("MG : ", n, l), 0 == l) {
                                if (!Laya.Browser.onIOS)
                                    for (p = 0; p < i.length; ++p) {
                                        var u = i[p].toUpperCase(),
                                            m = n.trim().toUpperCase();
                                        if (u == m) {
                                            for (var d = {}, h = 0; h < e.length; ++h) {
                                                var f = e[h];
                                                if (f.appid.toUpperCase() == n.trim().toUpperCase()) {
                                                    d = f;
                                                    break;
                                                }
                                            }
                                            l = !0;
                                            var c = {};
                                            c.id = d.id, c.path = "", c.param = d.param, c.appid = "", c.name = "", c.box_appid = n,
                                                c.box_path = "pages/index/index?", console.log("MG : ToJump3 : ", c), t.jumpToGame_3(c, function() {
                                                    t.ShowList3(e, a, n, o, r);
                                                }, function() {
                                                    null != t.mCloseHandler && t.mCloseHandler.run();
                                                });
                                        }
                                    }
                                0 == l && t.ShowList3(e, a, n, o, r);
                            }
                        } else t.ShowList3(e, a, n, o, r);
                    }, t.ShowList3 = function(e, a, i, n, o) {
                        if (void 0 === o && (o = 9), Laya.Browser.onMiniGame && wx.showLoading({
                                title: "资源加载中",
                                mask: !0
                            }), null == t.mSelf ? e.length > 0 && t.InitServerListEx(e, a) : Laya.timer.once(300, t.mSelf, t.mSelf.latterLoadicon2, [], !0),
                            null != t.mSelf) {
                            t.iphoneX && (t.mSelf.mTitle.top = 60, t.mSelf.mPanel.top = t.mSelf.mTitle.top + 100);
                            var r = t.mSelf.getMenuButtonTop_CenterPoint();
                            r.x > 0 ? (t.mSelf.mTitle.top = r.x + r.y / 2 - t.mSelf.mTitle.height / 2, t.mSelf.mPanel.top = t.mSelf.mTitle.top + 100,
                                    console.log("use getMenuButtonTop_CanterPoint . ", r)) : console.log("no use getMenuButtonTop_CanterPoint . ", r),
                                t.mSelf.mShowGameAppid = i, t.mSelf.zOrder = o, t.mSelf.visible = !0, t.mSelf.ShowAllGames2(),
                                t.checkLoadIconCount();
                        }
                    }, t.checkLoadIconCount = function() {
                        t.latterRunShowTween();
                    }, t.latterRunShowTween = function() {
                        Laya.Browser.onMiniGame && wx.hideLoading(), Laya.timer.callLater(t.mSelf, function() {
                            2 == t.mType ? (t.mSelf.x = Laya.stage.width + 10, Laya.Tween.to(t.mSelf, {
                                x: 0
                            }, 350, null, new Laya.Handler(this, function() {
                                t.mSelf.ShowGameApp();
                            }))) : (t.mSelf.x = -Laya.stage.width - 10, Laya.Tween.to(t.mSelf, {
                                x: 0
                            }, 350, null, new Laya.Handler(this, function() {
                                t.mSelf.ShowGameApp();
                            })));
                        });
                    }, t.GetIndexList = function(e) {
                        for (var t = [], a = 0; a < e.length; ++a) 1 == Number(e[a].show_index) && String(e[a].url_btn).toString().length > 10 && String(e[a].url_result).toString().length > 10 && t.push(e[a]);
                        return t;
                    }, t.GetIndexRandom = function(e) {
                        var a = t.GetIndexList(e);
                        if (a.length > 0) {
                            var i = a[t.getRandom(0, a.length - 1)];
                            if (void 0 != i) return i;
                        }
                        return null;
                    }, t.GetIndexRandomList = function(e, a) {
                        var i = [],
                            n = t.GetIndexList(e);
                        if (n.length > 0)
                            for (; a > 0 && n.length > 0;) {
                                var o = n.splice(t.getRandom(0, n.length - 1), 1);
                                i.push(o[0]), a--;
                            }
                        return i;
                    }, t.CloseList = function() {
                        null != t.mSelf && (2 == t.mType ? Laya.Tween.to(t.mSelf, {
                            x: Laya.stage.width + 10
                        }, 420, null, new Laya.Handler(this, function() {
                            t.mSelf.visible = !1, null != t.mCloseHandler && (t.mCloseHandler.once = !0, t.mCloseHandler.run(),
                                t.mCloseHandler = null);
                        })) : Laya.Tween.to(t.mSelf, {
                            x: -Laya.stage.width - 10
                        }, 420, null, new Laya.Handler(this, function() {
                            t.mSelf.visible = !1, null != t.mCloseHandler && (t.mCloseHandler.once = !0, t.mCloseHandler.run(),
                                t.mCloseHandler = null);
                        })));
                    }, t.prototype.onInit_GoGame = function() {
                        var e = this;
                        if (null == this.mGoGame) {
                            this.mGoGame = new Laya.Image(), this.mGoGame.size(this.width, this.height), this.mGoGame.pos(0, 0);
                            var a = new Laya.Label();
                            a.left = 0, a.right = 0, a.top = 0, a.bottom = 0, a.bgColor = "#000000", a.alpha = .5,
                                this.mGoGame.addChild(a), a.on(Laya.Event.CLICK, a, function() {
                                    e.mGoGame.visible = !1;
                                });
                            var i = new Laya.Image();
                            i.name = "GameNameBack", i.size(550, 680), i.mouseEnabled = !0, i.mouseThrough = !1,
                                i.pos((this.width - i.width) / 2, (this.height - i.height) / 2), i.skin = t.cdnface + "main/bg.png",
                                this.mGoGame.addChild(i), a.on(Laya.Event.CLICK, a, function() {});
                            var n = new Laya.Image();
                            n.name = "StarBack", n.skin = t.cdnface + "main/popup_share_star.png", n.size(490, 271),
                                n.centerX = 0, n.y = 30, i.addChild(n), this.mIconMax = new Laya.Image(), this.mIconMax.name = "IconBack",
                                this.mIconMax.skin = t.cdnface + "main/bk2.png", this.mIconMax.size(180, 180), this.mIconMax.centerX = 0,
                                this.mIconMax.centerY = 15, n.addChild(this.mIconMax);
                            var o = new Laya.Image();
                            o.pos(0, 0), o.size(180, 180), o.skin = t.cdnface + "main/180s.png", this.mIconMax.addChild(o),
                                this.mIconName = new Laya.Label(), this.mIconName.size(490, 40), this.mIconName.centerX = 0,
                                this.mIconName.y = n.y + n.height + 10, this.mIconName.align = "center", this.mIconName.fontSize = 36,
                                this.mIconName.color = "#332E4D", this.mIconName.bold = !0, i.addChild(this.mIconName),
                                this.mIconTips = new Laya.Label(), this.mIconTips.size(470, 80), this.mIconTips.centerX = 0,
                                this.mIconTips.y = n.y + n.height + 70, this.mIconTips.align = "center", this.mIconTips.fontSize = 26,
                                this.mIconTips.color = "#A1A1B3", this.mIconTips.bold = !1, this.mIconTips.wordWrap = !0,
                                this.mIconTips.leading = 5, i.addChild(this.mIconTips), this.mIconGoGame = new Laya.Image(),
                                this.mIconGoGame.skin = t.cdnface + "main/popup_btn_begin.png", this.mIconGoGame.size(360, 80),
                                this.mIconGoGame.centerX = 0, this.mIconGoGame.y = this.mIconTips.y + this.mIconTips.height + 45,
                                i.addChild(this.mIconGoGame), this.mIconBottom = new Laya.Label(), this.mIconBottom.size(470, 80),
                                this.mIconBottom.centerX = 0, this.mIconBottom.y = this.mIconGoGame.y + this.mIconGoGame.height + 20,
                                this.mIconBottom.align = "center", this.mIconBottom.fontSize = 24, this.mIconBottom.color = "#8A91E6",
                                this.mIconBottom.text = "和好友一起玩吧", i.addChild(this.mIconBottom);
                            var r = new Laya.Image();
                            r.size(100, 100), r.right = 0, r.top = 0, t.registImgBtnClick(r, new Laya.Handler(this, function(t) {
                                t.stopPropagation(), e.mGoGame.visible = !1;
                            }));
                            var s = new Laya.Image();
                            s.name = "IconBack", s.skin = t.cdnface + "main/close.png", s.size(30, 30), s.right = 20,
                                s.top = 20, i.addChild(s), i.addChild(r), t.registImgBtnClick(this.mIconGoGame, new Laya.Handler(this, function(t) {
                                    t.stopPropagation(), e.jumpToGameFromData(e.mIconJumpData), e.mGoGame.visible = !1;
                                })), this.mGoGame.visible = !1, this.addChild(this.mGoGame);
                        }
                    }, t.prototype.onInit = function() {
                        if (0 == t.mMoreList.length) return t.mSelf.visible = !1, void console.log("No More GameList ... ");
                        this.mPanel.vScrollBarSkin = "", this.mPanel.hScrollBarSkin = void 0, this.mBack.skin = t.cdnface + "main/head_btn_back1.png",
                            this.mGameName.text = t.mGameName, t.registImgBtnClick(this.mBack, new Laya.Handler(this, function(e) {
                                e.stopPropagation(), t.CloseList();
                            })), t.registImgBtnClick(this.mBack2, new Laya.Handler(this, function(e) {
                                e.stopPropagation(), t.CloseList();
                            }));
                    }, t.prototype.AddOneGroupPage = function() {
                        if (this.mNextShowGroup < t.mGroupList.length) {
                            var e = new o();
                            e.initCode(), this.mPanel.addChild(e);
                            var a = t.mGroupList[this.mNextShowGroup];
                            if (e.y = this.mStartGroupY, e.x = 0, e.height = this.mPanel.height, this.init_page_game(e, a),
                                this.mStartGroupY += e.height, console.log("changeHandler : ", this.mPanel.vScrollBar.max, this.mNextShowGroup, t.mGroupList.length),
                                this.mNextShowGroup == t.mGroupList.length - 1) {
                                var i = new Laya.Label();
                                i.text = "别扯了，已经到底了...", i.size(470, 300), i.centerX = 0, i.y = e.y + e.height + 10,
                                    i.align = "center", i.fontSize = 24, i.color = "#8A91E6", this.mPanel.addChild(i);
                            }
                            if (++this.mNextShowGroup, e.y + e.height > 1500) return !1;
                        }
                        return !0;
                    }, t.prototype.ShowAllGames = function() {
                        if (0 == this.mNextShowGroup) {
                            for (this.mPanel.removeChildren(), this.mStartGroupY = 0, console.log("start : ", this.mNextShowGroup, t.mGroupList.length),
                                this.mNextShowGroup = 0; this.mNextShowGroup < t.mGroupList.length;) this.AddOneGroupPage();
                            this.mPanel.refresh();
                        }
                    }, t.prototype.ShowAllGames2 = function() {
                        0 == this.mNextShowGroup && (this.mPanel.removeChildren(), this.mStartGroupY = 0,
                            Laya.timer.once(200, this, this.ShowNextGroup));
                    }, t.prototype.ShowNextGroup = function() {
                        this.mNextShowGroup < t.mGroupList.length ? (this.AddOneGroupPage(), this.mPanel.refresh(),
                            Laya.timer.once(300, this, this.ShowNextGroup), console.log("show group : ", this.mNextShowGroup, t.mGroupList.length)) : console.log("group show over .");
                    }, t.prototype.ShowGameApp = function() {
                        this.mIconJumpData = null;
                        for (var e = 0; e < t.mMoreList.length; ++e) {
                            if (t.mMoreList[e].appid.trim().toUpperCase() == t.mSelf.mShowGameAppid.trim().toUpperCase()) {
                                this.mIconJumpData = t.mMoreList[e];
                                break;
                            }
                        }
                        null != this.mIconJumpData ? (this.mIconMax.skin = this.mIconJumpData.url_icon,
                            this.mIconName.text = this.mIconJumpData.name, this.mIconTips.text = this.mIconJumpData.msg,
                            this.mGoGame.visible = !0) : null != this.mGoGame && (this.mGoGame.visible = !1);
                    }, t.prototype.drawCircleRect = function(e, t, a, i, n, o, r, s, l) {
                        void 0 === s && (s = 0), void 0 === l && (l = "");
                        var p = [
                            ["moveTo", o, 0],
                            ["arcTo", i, 0, i, o, o],
                            ["arcTo", i, n, i - o, n, o],
                            ["arcTo", 0, n, 0, n - o, o],
                            ["arcTo", 0, 0, o, 0, o]
                        ];
                        s > 0 ? e.drawPath(t, a, p, {
                            fillStyle: r
                        }, {
                            strokeStyle: l,
                            lineWidth: s.toString()
                        }) : e.drawPath(t, a, p, {
                            fillStyle: r
                        });
                    }, t.prototype.init_page_game = function(e, a) {
                        e.mName.text = a[0].groupname;
                        var i = a[0].groupicon;
                        if (i.length > 10 ? (e.mNoIcon.visible = !1, e.mIcon.visible = !0, e.mIcon.skin = i,
                                e.mName.x = e.mIcon.x + e.mIcon.width + 10) : (e.mNoIcon.visible = !0, e.mIcon.visible = !1,
                                e.mName.x = e.mIcon.x), Laya.stage.width > Laya.stage.height) {
                            var n = Laya.stage.width;
                            1 == t.iphoneX && (n = Laya.stage.width - 60);
                            var o = Math.floor(n / 182);
                            e.width = Laya.stage.width, e.mList.width = 182 * o, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                            r = e.mList.x - e.mNoIcon.x;
                            e.mNoIcon.x += r, e.mIcon.x += r, e.mName.x += r, e.mList.repeatX = o, e.mList.repeatY = Math.ceil(a.length / o);
                        } else if (Laya.stage.width <= 728) {
                            e.mList.repeatX = 3, e.mList.repeatY = Math.ceil(a.length / 3), e.width = Laya.stage.width,
                                e.mList.width = 546, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                            var r = e.mList.x - e.mNoIcon.x;
                            e.mNoIcon.x += r, e.mIcon.x += r, e.mName.x += r;
                        } else e.mList.repeatX = 4, e.mList.repeatY = Math.ceil(a.length / 4);
                        e.height = 70 + 250 * e.mList.repeatY, e.mList.selectEnable = !0, e.mList.renderHandler = new Laya.Handler(this, this.onListRender),
                            e.mList.mouseHandler = new Laya.Handler(this, this.listmouse), e.mList.array = a;
                    }, t.getRandom = function(e, t) {
                        return Math.round(Math.random() * (t - e)) + e;
                    }, t.prototype.onListRender = function(e, a) {
                        var i = e.dataSource,
                            n = e.getChildByName("GameName"),
                            o = e.getChildByName("PlayNum"),
                            r = e.getChildByName("mBack2");
                        n.text = i.name;
                        var s = Number(i.base);
                        if (void 0 == i.basenum || 0 == Number(i.basenum)) {
                            var l = s - s / 10,
                                p = s + s / 10;
                            i.basenum = Math.floor(t.getRandom(l, p) / 1e4);
                        }
                        o.text = i.basenum + "万人在玩", t.mListSrcs.push([r, i.url_icon + "?t=" + i.updated_time]),
                            1 == t.mListSrcs.length && Laya.timer.once(300, this, this.latterLoadicon2, [], !0),
                            t.registImgBtnClick(r, null, this);
                    }, t.prototype.latterLoadicon2 = function() {
                        if (Laya.loader.retryNum = 10, (0 != t.mListSrcs.length || 0 != t.mListSrcs2.length) && 0 != t.mSelf.visible) {
                            var e = null,
                                a = "";
                            if (t.mListSrcs.length > 0) {
                                e = (n = t.mListSrcs.shift())[0], a = n[1], t.mListSrcs2.push([e, a]);
                            } else {
                                if (!(t.mReloadCount <= 1 && t.mListSrcs2.length > 0)) return;
                                t.mListSrcs = t.mListSrcs2, t.mListSrcs2 = [], t.mReloadCount++;
                                var i = t.mListSrcs.length;
                                console.log("reload count = ", i);
                                var n = t.mListSrcs.shift();
                                e = n[0], a = n[1], t.mListSrcs2.push([e, a]);
                            }
                            if (0 == e.numChildren) {
                                var o = new Laya.Image();
                                o.pos(0, 0), o.size(150, 150), o.skin = t.cdnface + "main/150s.png", e.addChild(o);
                            }
                            e.loadImage(a, new Laya.Handler(this, function() {
                                for (var e = [], i = 0; i < t.mListSrcs2.length; ++i) t.mListSrcs2[i][1] != a && e.push(t.mListSrcs2[i]);
                                t.mListSrcs2 = e, t.mLoadCount++, t.mSelf.latterLoadicon2(), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0);
                            })), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0);
                        }
                    }, t.prototype.latterLoadicon = function(e, a) {
                        if (Laya.loader.retryNum = 10, e.skin = a, e.size(150, 150), 0 == e.numChildren) {
                            var i = new Laya.Image();
                            i.pos(0, 0), i.size(150, 150), i.skin = t.cdnface + "main/150s.png", e.addChild(i);
                        }
                    }, t.prototype.listmouse = function(e, t) {
                        if (e.type == Laya.Event.CLICK) {
                            var a = e.currentTarget.dataSource;
                            "mBack2" == e.target.name && (e.stopPropagation(), this.jumpToGameFromData(a));
                        }
                    }, t.prototype.isJumpWriteList = function(e) {
                        for (var a = !1, i = 0; i < t.mJumpWrite.length; ++i) {
                            t.mJumpWrite[i].trim().toUpperCase() == e.trim().toUpperCase() && (a = !0);
                        }
                        return a;
                    }, t.prototype.jumpToGameFromData = function(e) {
                        if (null != e && Laya.Browser.onMiniGame) {
                            var a = e.path,
                                i = e.param,
                                n = e.appid,
                                o = n,
                                r = n.split("?");
                            2 == r.length && (o = r[0]);
                            var s = n.split("&");
                            2 == s.length && (o = s[0]);
                            var l = Number(e.jump_type),
                                p = "https://tcdn.wanzhushipin.cn/xcx/set/qrcode/" + o + ".jpg?t=" + e.updated_time;
                            if (void 0 != e.big_url && (p = e.big_url), console.log("list click : ", e, p),
                                a.length < 5 && (a = "pages/index/index"), Laya.Browser.onMiniGame)
                                if (t.mWxVer >= "2.2.0") {
                                    var u = function(a) {
                                            String(a.errMsg).indexOf(":fail cancel") <= 0 ? (wx.previewImage({
                                                urls: [p]
                                            }), console.log("跳转错误：显示二维码：", n, e.name, a.errMsg), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run())) : (console.log("用户取消：", n, e.name, a.errMsg), t.mJumpHandle && (t.mJumpHandle.args = [2, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run()));
                                        },
                                        m = function(a) {
                                            console.log("跳转成功", n, e.name, a), t.mJumpHandle && (t.mJumpHandle.args = [1, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run());
                                        };
                                    if (this.isJumpWriteList(n)) return wx.navigateToMiniProgram({
                                        appId: n,
                                        path: a + "?" + i,
                                        fail: u,
                                        success: m
                                    }), void console.log("在列表中直接跳转：", n, e.name, a);
                                    if (0 == l) wx.previewImage({
                                        urls: [p],
                                        success: function(e) {
                                            console.log("预览图片成功");
                                        }
                                    }), console.log("二维码显示：", n, e.name, l), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), !1, !0],
                                        t.mJumpHandle.run());
                                    else if (1 == l) wx.navigateToMiniProgram({
                                        appId: n,
                                        path: a + "?" + i,
                                        fail: u,
                                        success: m
                                    }), console.log("直接跳转：", n, e.name, a + "?" + i);
                                    else if (l >= 2) {
                                        var d = String(e.box_appid);
                                        if (d.length < 12) wx.navigateToMiniProgram({
                                            appId: n,
                                            path: a + "?" + i,
                                            fail: u,
                                            success: m
                                        }), console.log("直接跳转：盒子appid错误", n, e.name, a + "?" + i, d);
                                        else {
                                            var h = String(e.box_path);
                                            h.length < 5 ? h = a.indexOf("?") < 0 ? a + "?" + e.param : a + e.param : h.indexOf("?") < 0 ? h += "?" + e.param : h += e.param,
                                                h.indexOf("target=") < 0 && (h += "&target=" + n), wx.navigateToMiniProgram({
                                                    appId: d,
                                                    path: h,
                                                    fail: u,
                                                    success: m
                                                }), console.log("盒子跳转：", n, e.name, h, d);
                                        }
                                    }
                                } else wx.previewImage({
                                        urls: [p],
                                        success: function(e) {
                                            console.log("预览图片成功");
                                        }
                                    }), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), !1, !0], t.mJumpHandle.run()),
                                    console.log("版本不支持。显示二维码", n, e.name);
                            else console.log("请在微信中测试跳转：", n, e.name, a);
                        }
                    }, t.jumpToGame_3 = function(e, a, i) {
                        var n = e.path,
                            o = e.param,
                            r = e.appid,
                            s = String(e.box_appid);
                        n.length < 5 && (n = "pages/index/index"), 0 == o.indexOf("?") && o.substr(1);
                        var l = String(e.box_path);
                        l.length < 5 ? l = n.indexOf("?") < 0 ? n + "?" + o : n + o : l.indexOf("?") < 0 ? l += "?" + o : l += o,
                            l.indexOf("target=") < 0 && (l += "&target=" + r);
                        Laya.Browser.onMiniGame && wx.navigateToMiniProgram({
                            appId: s,
                            path: l,
                            success: function(a) {
                                console.log("跳转成功", r, e.name, a), null != i && i(), t.mJumpHandle && (t.mJumpHandle.args = [1, Number(e.id), !1, !1],
                                    t.mJumpHandle.run());
                            },
                            fail: function(n) {
                                String(n.errMsg).indexOf(":fail cancel") <= 0 ? (null != a && a(), t.mJumpHandle && (t.mJumpHandle.args = [0, Number(e.id), !1, !1],
                                    t.mJumpHandle.run())) : (console.log("用户取消", r, e.name, n.errMsg), null != i && i(),
                                    t.mJumpHandle && (t.mJumpHandle.args = [2, Number(e.id), !1, !1], t.mJumpHandle.run()));
                            }
                        }), console.log("直接盒子跳转：", r, e.name, l, s);
                    }, t.mSelf = null, t.mVer = "", t.mGameName = "", t.mJumpWrite = [], t.mWxVer = "",
                    t.mMoreList = [], t.mGroupList = [], t.mServerUrl = "", t.mType = 0, t.mPhone = {},
                    t.iphoneX = !1, t.cdnface = "https://tcdn.wanzhushipin.cn/xcx/more/", t.mListSrcs = [],
                    t.mListSrcs2 = [], t.mReloadCount = 0, t.mLoadCount = 0, t.uiView = {
                        type: "View",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            height: 1334
                        },
                        child: [{
                            type: "Label",
                            props: {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                bgColor: "#ffffff"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "mTitle",
                                right: 0,
                                left: 0,
                                height: 100
                            },
                            child: [{
                                type: "Image",
                                props: {
                                    y: -61,
                                    x: 0,
                                    width: 166,
                                    var: "mBack2",
                                    height: 161
                                }
                            }, {
                                type: "Image",
                                props: {
                                    x: 20,
                                    width: 44,
                                    var: "mBack",
                                    height: 44,
                                    centerY: 0
                                }
                            }, {
                                type: "Label",
                                props: {
                                    y: 30,
                                    var: "mGameName",
                                    text: "神手游戏",
                                    fontSize: 40,
                                    color: "#332E4D",
                                    centerX: 0,
                                    bold: !0
                                }
                            }]
                        }, {
                            type: "Panel",
                            props: {
                                var: "mPanel",
                                top: 100,
                                right: 0,
                                left: 0,
                                bottom: 0
                            }
                        }]
                    }, t;
            }(Laya.View);
        a.MoreGame = r;
    }, {}],
    7: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function() {
                function e(e) {
                    this.IS_OPEN = !1, this.BOX_TEST = !1, this.GAME_NUM_TEST = !1, this.MULTI_ICON_TEST = !1,
                        this.isEven = !1, this.isAniTest = 0;
                    var t = Number(e.uid);
                    this.isEven = t % 2 == 0;
                    var a, n = 0;
                    i.default.app.mWX.mOnOff.forEach(function(e) {
                        "of_icon_type" == e.key && (n = Number(e.value), a = Number(JSON.parse(e.param).item));
                    }), 0 == n ? this.isAniTest = t % 3 : 1 == n && (this.isAniTest = a);
                }
                return Object.defineProperty(e.prototype, "isOpen", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.IS_OPEN;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isBoxTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.BOX_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isGameNumTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.GAME_NUM_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isMultiIconTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.MULTI_ICON_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e;
            }();
        a.OddEvenTestModel = n;
    }, {
        "../Main": 14
    }],
    8: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./MoreGame"),
            n = e("../Main"),
            o = e("../script/MyLikeView2"),
            r = function() {
                function e() {}
                return e.showBoxPage = function(t, a, n, o) {
                    void 0 === o && (o = 0), e.showBefore() && i.MoreGame.ShowList(a, n, i.WriteBoxList.mWriteBox, t, new Laya.Handler(this, e.CloseBox), o, new Laya.Handler(this, e.JumpInfo));
                }, e.showBefore = function() {
                    return !0;
                }, e.CloseBox = function() {}, e.JumpInfo = function(t, a, r, s) {
                    if (console.log("跳转结果：", t, a, r, s), e.isClickJump = !0, 1 == t) {
                        console.log("-- 允许直跳后 --", n.default.app.clickAppId, n.default.app.clickGameId, n.default.app.clickFromPage);
                        for (f = 0; f < i.WriteBoxList.mWriteBox.length; ++f) {
                            if (n.default.app.clickAppId.toUpperCase() == i.WriteBoxList.mWriteBox[f].toUpperCase()) {
                                -1 == n.default.app.clickLikeArr.indexOf(n.default.app.clickGameId) && n.default.app.clickLikeArr.push(String(n.default.app.clickGameId));
                                var l = JSON.stringify(n.default.app.clickLikeArr);
                                n.default.app.mWX.setUserValue("clickLikeArr", l), console.log("-- 允许直跳后 本地保存 --", n.default.app.clickLikeArr);
                                break;
                            }
                        }
                    }
                    for (var p = 0, u = "", m = 0, d = 0, h = 1, f = 0; f < n.default.app.mWX.mGamesBox.length; ++f) Number(n.default.app.mWX.mGamesBox[f].id) == a && (p = Number(n.default.app.mWX.mGamesBox[f].gameid),
                        u = n.default.app.mWX.mGamesBox[f].name, m = Number(n.default.app.mWX.mGamesBox[f].jump_type),
                        d = Number(n.default.app.mWX.mGamesBox[f].appid), 1 == n.default.app.mWX.moreFenFaNum ? h = 1 : n.default.app.mWX.moreFenFaNum >= 1 ? h = JSON.parse(n.default.app.mWX.mGamesBox[f].anim_config).millisecond_static.split(",").length > 1 ? JSON.parse(n.default.app.mWX.mGamesBox[f].anim_config).millisecond_static.split(",").length : 1 : 0 == n.default.app.mWX.moreFenFaNum && (h = 0));
                    Laya.Browser.onIOS && (m = 1);
                    1 == e.isCallNavigation || 3 == e.isCallNavigation ? ("recom_icon_click", n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: [d],
                        position_type: "icon",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    })) : 2 == e.isCallNavigation || 4 == e.isCallNavigation || 5 == e.isCallNavigation || 6 == e.isCallNavigation || 7 == e.isCallNavigation || 9 == e.isCallNavigation ? ("recom_banner_click",
                        n.default.app.mWX.indexBpTotle("recom_click", {
                            game_show_list: o.default.showList,
                            position_type: "banner",
                            game_id: p,
                            jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                            is_success_direct: t,
                            gif_show: [u, h],
                            level: n.default.app.Level_num
                        })) : 8 == e.isCallNavigation ? n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.resultView ? n.default.app.resultView.result_showList : [],
                        position_type: "result_page",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    }) : 10 == e.isCallNavigation ? n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.baokuanlist,
                        position_type: "recommend_page",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    }) : 11 == e.isCallNavigation && n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.fakerxcxlist,
                        position_type: "app_list",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    });
                }, e.isCallNavigation = 0, e.isClickJump = !0, e;
            }();
        a.gameBox = r;
    }, {
        "../Main": 14,
        "../script/MyLikeView2": 34,
        "./MoreGame": 6
    }],
    9: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./wxCore"),
            n = e("../util/ConfigUtil"),
            o = function() {
                function e() {}
                return e.getArrayValueParam = function(e, t) {
                    if (null == e || typeof e != typeof []) return "";
                    for (var a = 0; a < e.length; ++a)
                        if (e[a].key == t) return e[a].param;
                    return "";
                }, e.getUrlParams = function(e, t) {
                    void 0 === t && (t = "1.0.1");
                    var a = !1,
                        o = new Array();
                    for (var r in e)
                        if ("string" == typeof e[r] || "number" == typeof e[r]) {
                            "tick" == r && (a = !0);
                            var s = r.toLocaleLowerCase();
                            e[s] = e[r], o.push(s);
                        }
                    if (0 == a) {
                        var l = new Date();
                        e.tick = Math.floor(l.getTime() / 1e3), o.push("tick");
                    }
                    o.sort(function(e, t) {
                        return e > t ? 1 : -1;
                    });
                    for (var p = "", u = 0; u < o.length; u++) p = p + o[u] + "=" + e[o[u]] + "&";
                    var m = "";
                    return m = null != n.ConfigUtil.mKeys[t] ? i.md5_hex.MD5(p + "key=" + n.ConfigUtil.mKeys[t]) : i.md5_hex.MD5(p + "key=wvkbfuhl"),
                        p + "key=" + m;
                }, e.getCDN = function() {
                    return "https://tcdn.wanzhushipin.cn/xcx/sf/";
                }, e.getJSON = function(e) {
                    if ("" == e || null == e) return {
                        code: -999
                    };
                    var t = e.indexOf("{", 0);
                    return e = e.substr(t, e.length - t), JSON.parse(e);
                }, e.getServer = function() {
                    return n.ConfigUtil.mURL;
                }, e;
            }();
        a.util = o;
    }, {
        "../util/ConfigUtil": 49,
        "./wxCore": 11
    }],
    10: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../util/ADUtil"),
            n = e("./wxMinPro"),
            o = e("./wxCore"),
            r = e("../Main"),
            s = e("../util/TimeUtil"),
            l = e("../util/ShareUtil"),
            p = function() {
                function e() {
                    this.tip = null;
                }
                return e.prototype.version = function() {
                    return "1.0.1";
                }, e.prototype.loginBtnPos = function() {
                    return 160;
                }, e.prototype.onBefore = function() {
                    return !1;
                }, e.prototype.onShow = function() {}, e.prototype.onReShow = function() {}, e.prototype.onLogin = function(e, t) {
                    return r.default.app.adUtil = new i.ADUtil(), r.default.app.mWX = new n.default(),
                        r.default.app.mWX.mUID = t.uid, r.default.app.mWX.mLaunch = o.default.uo.launch(),
                        r.default.app.mWX.onLaunch(o.default.uo.launch()), o.default.uo.initVideoAD(i.ADUtil.sDefaultVideoId),
                        r.default.app.mWX.initReturn(), !0;
                }, e.prototype.onEnterGame = function(e, t, a) {
                    console.log("123", e), console.log("234", t), console.log("345", a), null != r.default.app.mWX.mShareCallback && (l.ShareUtil.is_exit = !0,
                        "0" == r.default.app.mWX.getOnOffValueByKey("of_share_time") ? (r.default.app.mWX.mShareCallback(),
                            r.default.app.mWX.mShareCallback = null) : s.TimeUtil.getCurrTime() - r.default.app.mWX.mCallShareTime > r.default.app.mWX.getShareTimeByCount() ? (r.default.app.mWX.mShareCallback(),
                            r.default.app.mWX.mShareCallback = null, r.default.app.mWX.mShareCount++, r.default.app.mWX.mCallShareTime = 0) : r.default.app.is_share && Laya.timer.once(200, this, function() {}));
                }, e.prototype.onHideGame = function() {}, e.mIF = {
                    wxinfo: {
                        url: "1.0.1/qc/wxinfo?",
                        key: "1.0.1",
                        tips: "报告微信信息接口"
                    },
                    login: {
                        url: "1.0.1/qc/login?",
                        key: "1.0.1",
                        tips: "登录服务"
                    },
                    lauch: {
                        url: "1.0.1/qc/lauch?",
                        key: "1.0.1",
                        tips: "登录服务"
                    },
                    userinfo: {
                        url: "1.0.1/qc/userinfo?",
                        key: "1.0.1",
                        tips: "更新用户信息"
                    }
                }, e;
            }();
        a.wxCallBack = p;
    }, {
        "../Main": 14,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "../util/TimeUtil": 53,
        "./wxCore": 11,
        "./wxMinPro": 12
    }],
    11: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./wxCallBack"),
            n = e("./util"),
            o = e("./MD5"),
            r = e("./Base64"),
            s = e("../Main"),
            l = e("../util/TimeUtil"),
            p = function() {
                function e() {}
                return e.MD5 = function(e) {
                    return new o.MD5().hex_md5(e);
                }, e;
            }();
        a.md5_hex = p;

        var u = function() {
            function e() {
                this.version = "1.0.1", this.mLaunch = null, this.mWeUser = {}, this.mPhone = {},
                    this.mSDKVersion = "", this.iphoneX = !1, this.mCallBack = null, this.mHttpCall = null,
                    this.mLoginType = 1, this.mShowLogo = !0, this.btnLogin = null, this.zOrder = 123,
                    this.mFrist = !0, this.mInit = !1, this.mVideoAD = null, this.mNoVideo = !1, this.mIsNewUser = 0,
                    this.option123 = null, this.loginSession = null, this.first_share_from = null, this.sigh_id = null,
                    e.uo = this, console.log("wxcore.uo = " + e.uo), this.mCallBack = new i.wxCallBack();
            }
            return e.prototype.screenHeight = function() {
                return this.mPhone.screenHeight;
            }, e.prototype.IsXP = function() {
                return !!(Laya.Browser.onIOS && this.mPhone.screenWidth > 800);
            }, e.prototype.wxVersion = function() {
                return this.mSDKVersion;
            }, e.prototype.getUser = function() {
                return this.mWeUser;
            }, e.prototype.getUserID = function() {
                return Number(this.mWeUser.uid);
            }, e.prototype.phone = function() {
                return this.mPhone;
            }, e.prototype.launch = function() {
                return this.mLaunch;
            }, e.prototype.initWX = function(e, t, a) {
                void 0 === e && (e = 1), void 0 === t && (t = !0), void 0 === a && (a = 0), console.log("进入core"),
                    this.mPhone = wx.getSystemInfoSync();
                this.mPhone.model.indexOf("iPhone X") >= 0 && (this.iphoneX = !0), this.mSDKVersion = this.mPhone.SDKVersion;
                var i = wx.getLaunchOptionsSync();
                this.option123 = i.query;
                var n = {};
                if (n.query = i.query, n.scene = i.scene, n.shareTicket = i.shareTicket, n.isSticky = i.isSticky,
                    null != n.query.scene)
                    for (var o = decodeURIComponent(n.query.scene).split("&"), r = 0; r < o.length; r++) {
                        var s = o[r].split("=");
                        2 == s.length && (n.query[s[0]] = s[1]);
                    }
                this.mLaunch = n, this.mLoginType = e, this.mShowLogo = t, 1 == this.mCallBack.onBefore() && this.showLoading(),
                    Laya.timer.callLater(this, this.check);
            }, e.prototype.initWeb = function(e) {
                void 0 === e && (e = 0), 1 == this.mCallBack.onBefore() && this.showLoading();
            }, e.prototype.showLoading = function() {
                Laya.timer.callLater(this.mCallBack, this.mCallBack.onShow);
            }, e.prototype.clear = function() {}, e.prototype.showLoginBtn = function() {}, e.prototype.check = function() {
                wx.checkSession({
                    success: function(t) {
                        console.log("checkSession ok"), e.uo.login();
                    },
                    fail: function(t) {
                        console.log("checkSession fail"), wx.removeStorageSync("user"), e.uo.login();
                    }
                });
            }, e.prototype.reLogin = function() {
                wx.removeStorageSync("user"), this.login();
            }, e.prototype.login = function() {
                var t = !0,
                    a = wx.getStorageSync("user");
                if ("object" == typeof a) {
                    var i = a.openid;
                    "" != i && null != i || (t = !1), ("" == a.uid || null == a.uid || Number(a.uid) < 1e4) && (t = !1);
                } else t = !1;
                t ? (e.uo.mWeUser = a, e.uo.checkCode("")) : wx.login({
                    success: function(t) {
                        e.uo.checkCode(t.code);
                    },
                    fail: function(t) {
                        console.log("login fail,try again"), Laya.timer.once(1e3, e.uo, e.uo.login);
                    }
                });
            }, e.prototype.checkCode = function(t) {
                var a = [];
                a.code = t, "" == t && (a.uid = e.uo.mWeUser.uid), void 0 !== this.mLaunch.query.uid && (a.master = this.mLaunch.query.uid),
                    void 0 !== this.mLaunch.query.agentid && (a.agentid = this.mLaunch.query.agentid),
                    void 0 !== this.mLaunch.query.adid && (a.adid = this.mLaunch.query.adid), a.ver = this.mCallBack.version(),
                    this.server(i.wxCallBack.mIF.login, a, function(t) {
                        if (console.log("用户登录返回数据", t), 0 == t.code) {
                            if (e.uo.loginSession = l.TimeUtil.getCurrTime(), null != e.uo.mWeUser && e.uo.mWeUser.uid == t.uid) {
                                if (e.uo.mWeUser.openid != t.openid) return void Laya.timer.once(100, e.uo, e.uo.reLogin);
                            } else e.uo.mWeUser = {}, e.uo.mWeUser.openid = t.openid, e.uo.mWeUser.uid = Number(t.uid);
                            1 == e.uo.mCallBack.onLogin(e.uo.mWeUser, t) ? e.uo.getUserInfo() : e.uo.init(),
                                console.log("openid", e.uo.mWeUser.openid, e.uo.mWeUser.uid);
                        } else Laya.timer.once(1e3, e.uo, e.uo.reLogin);
                    });
            }, e.prototype.getUserInfo = function() {
                if (2 == this.mLoginType) return e.uo.onEnter(null, this.mLaunch), void e.uo.init();
                wx.getUserInfo({
                    withCredentials: !1,
                    lang: "zh_CN",
                    success: function(t) {
                        console.log(t), e.uo.initUser(t);
                    },
                    fail: function(t) {
                        console.log(t), e.uo.mSDKVersion >= "2.0.1" ? (e.uo.showLoginBtn(), e.uo.mCallBack.onReShow()) : e.uo.wxAuthorize();
                    }
                });
            }, e.prototype.wxAuthorize = function() {
                wx.authorize({
                    scope: "scope.userInfo",
                    success: function(t) {
                        e.uo.getUserInfo();
                    },
                    fail: function(t) {
                        e.uo.openSeting();
                    }
                });
            }, e.prototype.openSeting = function() {
                var t = this;
                wx.showModal({
                    title: "提示",
                    content: "游戏需要您授权头像和用户名信息",
                    showCancel: !1,
                    cancelText: "取消",
                    confirmText: "确认",
                    success: function(a) {
                        wx.openSetting({
                            success: function(t) {
                                0 == t.authSetting["scope.userInfo"] ? e.uo.openSeting() : e.uo.getUserInfo();
                            },
                            fail: function(e) {
                                t.openSeting();
                            }
                        });
                    }
                });
            }, e.prototype.initUser = function(t) {
                var a = 0,
                    i = t.userInfo;
                console.log(i.avatarUrl, e.uo.mWeUser.avatarUrl, e.uo.mWeUser.nickName, i.nickName),
                    e.uo.mWeUser.nickName != i.nickName && (e.uo.mWeUser.nickName = i.nickName, a = 1);
                var n = i.avatarUrl;
                "0" == n.charAt(n.length - 1) && "/" == n.charAt(n.length - 2) && (n = n.substr(0, n.length - 2),
                        n += "/132"), e.uo.mWeUser.avatarUrl != n && (e.uo.mWeUser.avatarUrl = n, a = 1),
                    e.uo.mWeUser.gender = i.gender, e.uo.mWeUser.province = i.province, e.uo.mWeUser.city = i.city,
                    e.uo.mWeUser.country = i.country, 1 == a && e.uo.updateUserInfo(), wx.setStorageSync("user", e.uo.mWeUser),
                    e.uo.onEnter(null, this.mLaunch), e.uo.init();
            }, e.prototype.onEnter = function(e, t) {
                this.mCallBack.onEnterGame(this.mFrist, e, t), this.mFrist = !1;
            }, e.prototype.init = function() {
                0 == this.mInit && (s.default.app.mWX.displayGameClub(!0), wx.onShow(this.wxShow),
                    wx.onHide(this.wxHide), this.mInit = !0);
            }, e.prototype.wxShow = function(t) {
                console.log("默认隐藏"), console.log("达到"), console.log("进入:" + new Date().getTime()),
                    console.log(t);
                var a = {};
                if (a.query = t.query, a.scene = t.scene, a.shareTicket = t.shareTicket, a.isSticky = t.isSticky,
                    null != a.query.scene)
                    for (var i = decodeURIComponent(a.query.scene).split("&"), n = 0; n < i.length; n++) {
                        var o = i[n].split("=");
                        2 == o.length && (a.query[o[0]] = o[1]);
                    }
                if (1 == e.uo.mFrist) return e.uo.mLaunch = a, void e.uo.getUserInfo();
                var r = e.uo.mLaunch;
                e.uo.mLaunch = a, e.uo.onEnter(r, a);
            }, e.prototype.wxHide = function() {
                e.uo.mCallBack.onHideGame(), console.log("退出:" + new Date().getTime());
            }, e.prototype.updateUserInfo = function() {
                var t = {};
                t.uid = e.uo.mWeUser.uid, t.name = r.TsBase64.EncodeURI(this.mWeUser.nickName),
                    t.avatar = r.TsBase64.EncodeURI(this.mWeUser.avatarUrl), t.gender = e.uo.mWeUser.gender,
                    null != e.uo.mWeUser.province && "" != e.uo.mWeUser.province && (t.province = e.uo.mWeUser.province),
                    null != e.uo.mWeUser.city && "" != e.uo.mWeUser.city && (t.city = e.uo.mWeUser.city),
                    this.server(i.wxCallBack.mIF.userinfo, t, function(e) {
                        console.log("updateUserInfo..ok");
                    });
            }, e.prototype.server = function(t, a, i, o) {
                void 0 === o && (o = null), this.mHttpCall = new Laya.HttpRequest(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                    var a = null;
                    a = "string" == typeof t ? n.util.getJSON(t) : n.util.getJSON(e.uo.mHttpCall.data),
                        null != i && i(a), e.uo.mHttpCall = null;
                }), this.mHttpCall.once(Laya.Event.ERROR, this, function(t) {
                    null != o ? o() : e.uo.onHttpRequestError(t);
                });
                var r = n.util.getServer() + t.url + n.util.getUrlParams(a, t.key);
                this.mHttpCall.send(r, null, "get", "text");
            }, e.prototype.onHttpRequestError = function(e) {
                wx.hideLoading();
            }, e.prototype.initVideoAD = function(t) {
                "" != t ? null == this.mVideoAD && (this.mVideoAD = wx.createRewardedVideoAd({
                    adUnitId: t
                }), this.mVideoAD.load(), this.mVideoAD.onError(function(t) {
                    console.log(t), e.uo.mNoVideo = !0;
                })) : this.mNoVideo = !0;
            }, e.prototype.haveVideo = function() {
                return null != this.mVideoAD && 1 != this.mNoVideo;
            }, e.prototype.loadingVideo = function(t) {
                return null == this.mVideoAD || 1 == e.uo.mNoVideo ? (null != t && t(!1), !1) : (this.mVideoAD.load().then(function() {
                    null != t && t(!0);
                }).catch(function(e) {
                    console.log("没有拉到广告"), console.log(e.errMsg), null != t && t(!1);
                }), !0);
            }, e.prototype.showVideoAD = function(t) {
                return null == this.mVideoAD || 1 == e.uo.mNoVideo ? (null != t && t(!1), !1) : (e.uo.mVideoAD.show(),
                    this.mVideoAD.offClose(null), this.mVideoAD.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? null != t && t(!0) : null != t && t(!1);
                    }), !0);
            }, e.uo = null, e;
        }();
        a.default = u;
    }, {
        "../Main": 14,
        "../util/TimeUtil": 53,
        "./Base64": 1,
        "./MD5": 5,
        "./util": 9,
        "./wxCallBack": 10
    }],
    12: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = Laya.HttpRequest,
            n = e("../Main"),
            o = e("./gameBox"),
            r = e("./wxCallBack"),
            s = e("./util"),
            l = e("./MoreGame"),
            p = e("../util/ConfigUtil"),
            u = e("../util/LogUtil"),
            m = e("../util/ShareConfig"),
            d = e("./Base64"),
            h = e("./wxCore"),
            f = e("../util/TimeUtil"),
            c = e("../script/MyLikeView"),
            g = e("../script/ShopView"),
            y = e("./OddEvenTestModel"),
            _ = function() {
                function e() {
                    this.mUID = 0, this.mOnOff = [], this.likeLoop = !0, this.mCards = 0, this.mWeiXinVersion = "",
                        this.mADKeep = 0, this.mHttpCall = null, this.mLaunch = null, this.mSaveImage = "",
                        this.mMyRank = 0, this.mChallenge = null, this.mShareID = 0, this.mMarks = [0, 0, 0, 0],
                        this.fhOnoff = 0, this.mrelayID = 0, this.maxToolCards = 2, this.mToolCards = 0,
                        this.mReturnAppid = "", this.mReturnUrl = "", this.mTaskInfo = [], this.mCoinsNum = 0,
                        this.mPropList = [], this.mUsingPropId = "2001", this.mStartAward = [], this.mUserData = [],
                        this.mNowDay = 0, this.mWxAdUrl = [], this.mGamesBox = [], this.mShareCallback = null,
                        this.mShareIsNoCallback = null, this.mShareIsAgainCallback = null, this.mCallShareTime = 0,
                        this.mShareCount = 0, this.mPassAwardListData = [], this.mdtValues = null, this.skinId = 9,
                        this.moreFenFaNum = 1, this.moreFenFaCount = 0, this.mWxMenuButtonRect = null, this.rnt2 = {
                            x: 0,
                            y: 0,
                            left: 0,
                            top: 0,
                            right: 0,
                            height: 0
                        }, this.is_address = !0, this.channel_id = "0", this.first_channel_id = "0";
                }
                return e.prototype.rankMeassage = function(e) {
                    wx.postMessage({
                        type: "FriendRank",
                        show: 1,
                        level: 0,
                        info: h.default.uo.getUser(),
                        dir: ["none", "previous", "next"][e]
                    });
                }, e.prototype.closeRankMeassage = function() {
                    wx.postMessage({
                        type: "FriendRank",
                        show: 0
                    });
                }, e.prototype.ResultMeassage = function() {
                    wx.postMessage({
                        type: "result",
                        show: 1,
                        level: 0,
                        info: h.default.uo.getUser()
                    });
                }, e.prototype.getItemListbytype = function(e) {
                    if (null != n.default.app.mWX.mPropList) {
                        for (var e = e, t = [], a = 0; a < n.default.app.mWX.mPropList.length; a++) Number(n.default.app.mWX.mPropList[a].type) == e && (t[t.length] = n.default.app.mWX.mPropList[a]);
                        return t;
                    }
                }, e.prototype.IsOpenMoreFenfa = function() {
                    var e = 0;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_more_fenfa" != t.key || (e = Number(t.value));
                    }), e;
                }, e.prototype.IsOpenBKYX = function() {
                    var e = 1;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_hotgame_end" != t.key || (e = Number(JSON.parse(t.param).open));
                    }), e;
                }, e.prototype.IsOpenXCXList = function() {
                    var e = 1;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_fenfa_xcxlist" != t.key || (e = Number(t.value));
                    }), e;
                }, e.prototype.BKYXNotShowList = function() {
                    var e;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_hotgame_notshow_list" != t.key || (e = JSON.parse(t.param).notshow);
                    }), e;
                }, e.prototype.getItemList = function(e) {
                    if (void 0 === e && (e = 0), null != n.default.app.mWX.mPropList) {
                        for (var t = [], a = 0; a < n.default.app.mWX.mPropList.length; a++) 0 == e ? Number(n.default.app.mWX.mPropList[a].count) > 0 && (t[t.length] = n.default.app.mWX.mPropList[a]) : 0 == Number(n.default.app.mWX.mPropList[a].count) && Number(n.default.app.mWX.mPropList[a].id < 6001) && Number(3006 != n.default.app.mWX.mPropList[a].id) && (t[t.length] = n.default.app.mWX.mPropList[a]);
                        return t;
                    }
                }, e.prototype.reportMark = function(e, t, a) {
                    void 0 === a && (a = "");
                    var n = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(a) {
                        var i = null;
                        i = "string" == typeof a ? s.util.getJSON(a) : s.util.getJSON(n.mHttpCall.data),
                            u.LogUtil.log("reportMark() -> onResult ret = " + JSON.stringify(i)), 0 == i.code && (n.mShareID = i.id,
                                n.mCards = Number(i.cards), e > n.mMarks[0] && (n.mMarks[0] = e), void 0 != t && null != t && t()),
                            n.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var o = [];
                    o.mark = e, o.uid = this.mUID, o.id = this.mrelayID, o.reason = d.TsBase64.EncodeURI(a);
                    var r = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.report + s.util.getUrlParams(o, "1.0.1");
                    u.LogUtil.log("reportMark() mark = " + e), u.LogUtil.log("reportMark() str = " + r),
                        this.mHttpCall.send(r, null, "get", "text");
                }, e.prototype.dealCards = function(e, t) {
                    if (void 0 === e && (e = null), void 0 === t && (t = null), 0 != this.mLaunch.query.gift) {
                        var a = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            var t = null;
                            t = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(a.mHttpCall.data),
                                u.LogUtil.log("dealCards() -> onResult ret = " + JSON.stringify(t)), t.code, a.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var n = [];
                        n.uid = this.mUID, null != a.mLaunch.query.gift ? n.gift = Number(this.mLaunch.query.gift) : void 0 !== this.mLaunch.query.gift ? n.gift = Number(this.mLaunch.query.gift) : n.gift = 0,
                            null != t ? n.ticket = t : void 0 !== this.mLaunch.shareTicket && (n.ticket = this.mLaunch.shareTicket),
                            this.mLaunch.query.gift = 0;
                        var o = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.AddCard + s.util.getUrlParams(n, "1.0.1");
                        this.mHttpCall.send(o, null, "get", "text");
                    }
                }, e.prototype.updateCards = function(e) {
                    void 0 === e && (e = !1);
                    var t = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(a) {
                        e && wx.hideLoading();
                        var i = null;
                        i = "string" == typeof a ? s.util.getJSON(a) : s.util.getJSON(t.mHttpCall.data),
                            u.LogUtil.log("updateCards() -> onResult ret = " + JSON.stringify(i)), 0 == i.code && (t.mCards = Number(i.cards)),
                            t.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var a = [];
                    a.uid = this.mUID, e && wx.showLoading({
                        title: "",
                        mask: !0,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    });
                    var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.querycards + s.util.getUrlParams(a);
                    this.mHttpCall.send(n, null, "get", "text");
                }, e.prototype.addCardForMe = function(e) {
                    var t = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                        var a = null;
                        a = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(t.mHttpCall.data),
                            u.LogUtil.log("addCardForMe() -> onResult ret = " + JSON.stringify(a)), 0 == a.code && (t.mCards < 2 && (t.mCards = t.mCards + 1),
                                wx.showToast({
                                    title: "获得复活卡1张",
                                    icon: "success",
                                    image: "",
                                    duration: 2e3,
                                    success: function() {},
                                    fail: function() {},
                                    complete: function() {}
                                })), t.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var a = [];
                    a.uid = t.mUID, a.id = e;
                    var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.AddMyCard + s.util.getUrlParams(a, "1.0.1");
                    this.mHttpCall.send(n, null, "get", "text");
                }, e.prototype.showWorldRank = function(e) {
                    void 0 === e && (e = 0);
                    var t = this;
                    wx.showLoading({
                        title: "",
                        mask: !0,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }), this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                        var a = null;
                        if (a = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(t.mHttpCall.data),
                            u.LogUtil.log("showWorldRank() -> onResult ret = " + JSON.stringify(a)), 0 == a.code) {
                            var i = Number(a.rank);
                            i > 0 && t.mMarks[0] > 0 && (console.log("MMRANK", i), t.mMyRank = i);
                            for (var o = n.default.app.wRankData, r = a.data, l = 0; l < r.length; l++) {
                                var p = {};
                                null == r[l].name ? p.name = "null" : (p.name = n.default.app.subname(d.TsBase64.FromBase64(r[l].name), 12),
                                    console.log(p.name));
                                var m = d.TsBase64.FromBase64(r[l].avatar);
                                "0" == m.charAt(m.length - 1) && "/" == m.charAt(m.length - 2) && (m = m.substr(0, m.length - 2),
                                        m += "/132"), p.avatar = m, p.mark = Math.floor(r[l].hismark), p.city = r[l].city,
                                    p.uid = r[l].uid, p.map1 = Math.floor(r[l].mark1), p.map2 = Math.floor(r[l].mark2),
                                    p.map3 = Math.floor(r[l].mark3), o.push(p);
                            }
                            for (l = 0; l < o.length; l++) o[l].rank = l + 1;
                            r.length, wx.hideLoading();
                        }
                        t.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var a = [];
                    a.uid = this.mUID, a.page = e;
                    var o = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.rank + s.util.getUrlParams(a);
                    this.mHttpCall.send(o, null, "get", "text"), u.LogUtil.log("showWorldRank() -> str = " + o);
                }, e.prototype.onHttpRequestError = function(e) {
                    this.mHttpCall = null, console.log("onHttpRequestError:" + e);
                }, e.prototype.initMoreGame = function(e, t) {
                    void 0 === t && (t = !1);
                    var a = l.MoreGame.GetIndexRandom(n.default.app.mWX.mGamesBox);
                    null != a ? (e.name = a.gameid, t ? (e.skin = a.url_btn, e.visible = !0) : e.skin = a.url_result) : (e.visible = !1,
                        e.skin = "");
                }, e.prototype.initMoreGame1 = function(e, t) {
                    var a = l.MoreGame.GetIndexRandom(n.default.app.mWX.mGamesBox);
                    null != a ? (e.name = a.gameid, e.skin = a.url_icon, e.visible = !0, t.text = a.name) : (e.visible = !1,
                        e.skin = "");
                }, e.prototype.getMoreUrl = function(e) {
                    for (var t = 0; t < this.mGamesBox.length; t++)
                        if (Number(e) == Number(this.mGamesBox[t].gameid)) return this.mGamesBox[t];
                }, e.prototype.reportADHit = function(e) {
                    var t = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                        t.mHttpCall = null, u.LogUtil.log("reportADHit() -> onResult e = " + JSON.stringify(e));
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var a = [];
                    a.uid = this.mUID, a.id = e;
                    var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.data + s.util.getUrlParams(a);
                    u.LogUtil.log("reportADHit() -> onResult str = " + n), this.mHttpCall.send(n, null, "get", "text");
                }, e.prototype.showMoreGamePage = function(e, t) {
                    void 0 === t && (t = null);
                    var a = n.default.app.mWX.getMoreUrl(e.name);
                    null != a && (n.default.app.is_gamebox = !0, o.gameBox.showBoxPage(a.appid, n.default.app.mWX.mGamesBox, "天天切蔬菜3D"));
                }, e.prototype.showMoreGamePage1 = function(e, t) {
                    void 0 === t && (t = null);
                    var a = n.default.app.mWX.getMoreUrl(e.name);
                    null != a && (n.default.app.is_gamebox = !0, n.default.app.moregame = 3, c.MyLikeView.from_page = t,
                        o.gameBox.showBoxPage(a.appid, n.default.app.mWX.mGamesBox, "天天切蔬菜3D"));
                }, e.prototype.getAgentID = function() {
                    return 0;
                }, e.prototype.initGameClub = function(e) {
                    h.default.uo.wxVersion() >= "2.0.3" && null == this.gameClub ? (console.log("创建游戏圈"),
                        this.gameClub = wx.createGameClubButton({
                            icon: "dark",
                            type: "image",
                            image: "gamebg/btn_bbs.png",
                            style: {
                                right: 20,
                                top: e,
                                width: 30,
                                height: 44
                            }
                        })) : console.log("不能创建游戏圈");
                }, e.prototype.isInitGameClub = function() {
                    return null != this.gameClub && (n.default.app.mWX.displayGameClub(!0), !0);
                }, e.prototype.getMenuButtonTop_CenterPoint = function() {
                    var e = new Laya.Point(0, 0),
                        t = !1;
                    if (Laya.Browser.onMiniGame) {
                        if (h.default.uo.wxVersion() >= "2.1.0" && null == this.mWxMenuButtonRect) {
                            var a = wx.getMenuButtonBoundingClientRect();
                            null != a ? NaN != a.height && void 0 != a.height && null != a.height && (this.mWxMenuButtonRect = a) : t = !0;
                        }
                        if (null != this.mWxMenuButtonRect) {
                            var i = this.mWxMenuButtonRect.height,
                                n = this.dealTopValue(this.mWxMenuButtonRect.top);
                            this.rnt2.x = this.mWxMenuButtonRect.width * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                this.rnt2.y = this.mWxMenuButtonRect.height * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                this.rnt2.right = this.mWxMenuButtonRect.right, this.rnt2.height = this.mWxMenuButtonRect.height,
                                console.log("mWxMenuButtonRect:", this.mWxMenuButtonRect, this.rnt2), e.x = n * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                e.y = i * Laya.stage.height / h.default.uo.mPhone.screenHeight, t && (e.x = 77,
                                    e.y = .5);
                        }
                    }
                    return t && (e.x = 77, e.y = .5), e;
                }, e.prototype.dealTopValue = function(e) {
                    return e > 0 ? e : Number(h.default.uo.phone().screenHeight) > 800 ? 40 : 10;
                }, e.prototype.getMyMark = function() {
                    var e = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                        wx.hideLoading();
                        var a = null;
                        a = "string" == typeof t ? s.util.getJSON(t) : s.util.getJSON(e.mHttpCall.data),
                            u.LogUtil.log("getMyMark() -> onResult ret = " + JSON.stringify(a)), 0 == a.code && (e.mMarks[0] = Number(a.mark.mark),
                                wx.postMessage({
                                    type: "send",
                                    mark: e.mMarks[0],
                                    level: 0,
                                    best: 0,
                                    user: h.default.uo.getUser()
                                })), e.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var t = [];
                    t.uid = this.mUID;
                    var a = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.mymark + s.util.getUrlParams(t, "1.0.1");
                    this.mHttpCall.send(a, null, "get", "text"), u.LogUtil.log("getMyMark() -> str = " + a);
                }, e.prototype.reportData = function(e) {
                    var t = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                        t.mHttpCall = null, u.LogUtil.log("reportData() -> onResult e = " + JSON.stringify(e));
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var a = [];
                    a.uid = this.mUID, a.type = e;
                    var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.ad + s.util.getUrlParams(a, "1.0.1");
                    this.mHttpCall.send(n, null, "get", "text"), u.LogUtil.log("reportData() -> str = " + n);
                }, e.prototype.initReturn = function() {
                    var e = h.default.uo.launch().query.pid;
                    null == e || void 0 === e || "" == e ? (this.mReturnAppid = "", this.mReturnUrl = "") : 8 == Number(e) ? (this.mReturnAppid = "",
                        this.mReturnUrl = "") : (this.mReturnAppid = e, this.mReturnUrl = "pages/index/index?");
                }, e.prototype.getOnOffReward1 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_reward_first" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).levelNum);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffReward2 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_reward_getstyle" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(n.default.app.mWX.mOnOff[t].value);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffReward3 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_reward_interval" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffRewardSkip = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_reward_skip" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).delay);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffAllControl = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_all" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(n.default.app.mWX.mOnOff[t].value);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffStartReward = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_start_reward" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(n.default.app.mWX.mOnOff[t].value);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffStartReward2 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_startreward_interval" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffStartReward3 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_startreward_firstappear" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).level);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffBoxReward2 = function() {
                    for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                        if ("of_boxreward_change" == n.default.app.mWX.mOnOff[t].key) {
                            e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                            break;
                        }
                    return e;
                }, e.prototype.getOnOffBoxReward = function() {
                    for (var e = [], t = 0, a = 0, i = 0; i < n.default.app.mWX.mOnOff.length; i++)
                        if ("of_box_reward" == n.default.app.mWX.mOnOff[i].key) {
                            t = Number(n.default.app.mWX.mOnOff[i].value), a = Number(JSON.parse(n.default.app.mWX.mOnOff[i].param).count),
                                e.push(t), e.push(a);
                            break;
                        }
                    return e;
                }, e.prototype.onLaunch = function(e, t) {


                    console.log("aaadfafasfasonLaunchonLaunchonLaunchonLaunchonLaunchdfas")
                    // void 0 === t && (t = !1);
                    // var a = h.default.uo.getUser(), i = {};
                    // Laya.Browser.onIOS ? i.platform = 2 : i.platform = 1, i.uid = h.default.uo.mWeUser.uid, 
                    // i.name = d.TsBase64.EncodeURI(a.nickName), i.avatar = d.TsBase64.EncodeURI(a.avatarUrl), 
                    // i.ver = p.ConfigUtil.mVersion, void 0 !== e.query.uid && (i.target = e.query.uid), 
                    // void 0 !== e.query.type && (i.type = e.query.type), void 0 !== e.query.id && (i.id = e.query.id);
                    // h.default.uo.server(r.wxCallBack.mIF.lauch, i, function(a) {
                    //     if (0 == a.code) {
                    //         if (console.log("用户的数据", a), n.default.app.mWX.getMediaType(e, a), Laya.Browser.window.sharedCanvas.width = Laya.stage.width, 
                    //         Laya.Browser.window.sharedCanvas.height = Laya.stage.height, n.default.app.mWX.mMarks[0] = Number(a.marks.mark), 
                    //         n.default.app.mWX.mMarks[1] = Number(a.marks.mark1), n.default.app.mWX.mMarks[2] = Number(a.marks.mark2), 
                    //         n.default.app.mWX.mMarks[3] = Number(a.marks.mark3), n.default.app.mWX.fhOnoff = Number(a.fh_onoff), 
                    //         console.log("开关", n.default.app.mWX.fhOnoff), n.default.app.mWX.mCards = Number(a.marks.cards), 
                    //         m.ShareConfig.sShareUrls = a.shareurl, n.default.app.mWX.mTaskInfo = a.task_info, 
                    //         n.default.app.mWX.mOnOff = a.on_off, n.default.app.mWX.mNowDay = a.nowday, n.default.app.adUtil.mCustomBannerAdList = a.games_ad, 
                    //         n.default.app.mWX.mCoinsNum = Number(a.coins), n.default.app.mWX.mWxAdUrl = a.wxadurl, 
                    //         n.default.app.mWX.mdtValues = a.dt_values, n.default.app.mWX.oddEvenTestModel = new y.OddEvenTestModel(a), 
                    //         void 0 != a.item_list && null != a.item_list && (n.default.app.mWX.mPropList = a.item_list), 
                    //         "0" != String(a.use_item) && (n.default.app.mWX.mUsingPropId = String(a.use_item)), 
                    //         void 0 != typeof a.start_reward && null != a.start_reward && a.start_reward.length > 0 && (n.default.app.mWX.mStartAward = a.start_reward), 
                    //         void 0 != a.user_data && null != a.user_data && a.user_data.length > 0 && (n.default.app.mWX.mUserData = a.user_data), 
                    //         "" != n.default.app.mWX.getUserDataByKey("knife_skin_id") && (g.default.skin_id = Number(n.default.app.mWX.getUserDataByKey("knife_skin_id"))), 
                    //         "" != n.default.app.mWX.getUserDataByKey("Level_num") && (n.default.app.Level_num = Number(n.default.app.mWX.getUserDataByKey("Level_num"))), 
                    //         n.default.app.mWX.skinId = "" == n.default.app.mWX.getUserDataByKey("new_reward_knife_id") ? 9 : Number(n.default.app.mWX.getUserDataByKey("new_reward_knife_id")), 
                    //         n.default.app.boxSkinId = n.default.app.mWX.skinId, console.log("sssk:", n.default.app.mWX.skinId), 
                    //         n.default.app.mWX.initUserMusicSoundOnOff(), n.default.app.mWX.mGamesBox = a.games_box, 
                    //         h.default.uo.mIsNewUser = a.nowday == a.regday ? 1 : 0, n.default.app.mWX.address_1(), 
                    //         "" == n.default.app.mWX.getUserDataByKey("first_share_from") ? (void 0 == h.default.uo.launch.query ? (h.default.uo.first_share_from = "", 
                    //         h.default.uo.sigh_id = "") : (h.default.uo.first_share_from = h.default.uo.launch.query.uid, 
                    //         h.default.uo.sigh_id = h.default.uo.launch.query.adid), n.default.app.mWX.setUserValue("first_share_from", h.default.uo.first_share_from), 
                    //         n.default.app.mWX.setUserValue("sigh_id", h.default.uo.sigh_id)) : (h.default.uo.first_share_from = n.default.app.mWX.getUserDataByKey("first_share_from"), 
                    //         h.default.uo.sigh_id = n.default.app.mWX.getUserDataByKey("sigh_id")), n.default.app.mWX.getIsNewDay(), 
                    //         n.default.app.isNewDay && (n.default.app.clickLikeArr = [], n.default.app.mWX.setUserValue("clickLikeArr", "0")), 
                    //         wx.postMessage({
                    //             type: "init",
                    //             width: Laya.stage.width,
                    //             height: Laya.stage.height
                    //         }), console.log("scsdsad0", n.default.app.mWX.IsOpenMoreFenfa()), 1 == n.default.app.mWX.IsOpenMoreFenfa()) {
                    //             var i = l.MoreGame.GetIndexRandomList(n.default.app.mWX.mGamesBox, 9);
                    //             for (n.default.app.mWX.moreFenFaCount = 0, r = 0; r < i.length; r++) {
                    //                 var o = i[r];
                    //                 n.default.app.mWX.moreFenFaCount = n.default.app.mWX.moreFenFaCount < JSON.parse(o.anim_config).millisecond_static.split(",").length ? JSON.parse(o.anim_config).millisecond_static.split(",").length : n.default.app.mWX.moreFenFaCount;
                    //             }
                    //             for (var r = n.default.app.mWX.moreFenFaCount; r > 1; r--) if (h.default.uo.getUserID() % r == 0) {
                    //                 n.default.app.mWX.moreFenFaNum = r, console.log("moreFenFaNum:", n.default.app.mWX.moreFenFaCount, n.default.app.mWX.moreFenFaNum);
                    //                 break;
                    //             }
                    //         } else n.default.app.mWX.moreFenFaNum = 0;
                    //         n.default.app.ChangeScene(), t || n.default.app.mWX.dealQuery(e, !0);
                    //     }
                    // });
                }, e.prototype.getIsNewDay = function() {
                    var e = Date.now(),
                        t = 0,
                        a = Laya.LocalStorage.getItem("lastLoginTime");
                    a && (t = Number(a)), this.isSameDay(e, t) ? (n.default.app.isNewDay = !1, u.LogUtil.log("=====和上次登录是同一天=====")) : (n.default.app.isNewDay = !0,
                        u.LogUtil.log("=====新的一天==========")), Laya.LocalStorage.setItem("lastLoginTime", String(e));
                }, e.prototype.isSameDay = function(e, t) {
                    var a = new Date(e),
                        i = new Date(t);
                    return a.getFullYear() == i.getFullYear() && a.getMonth() == i.getMonth() && a.getDate() == i.getDate();
                }, e.prototype.address_1 = function() {
                    if (this.is_address) {
                        this.is_address = !1;
                        wx.getSystemInfoSync();
                        var e = Laya.LocalStorage.getItem("firstEntryTime");
                        "" == e && (e = String(f.TimeUtil.getCurrTime()), Laya.LocalStorage.setItem("firstEntryTime", e));
                        var t = Laya.LocalStorage.getItem("lastEntryTime");
                        if ("" == t && (t = String(f.TimeUtil.getCurrTime()), Laya.LocalStorage.setItem("lastEntryTime", t)),
                            null != h.default.uo.mWeUser.uid) {
                            n.default.app.mWX.indexBpTotle("app_open", {});
                        }
                        var a = {
                            channel_type: 0,
                            share_from: void 0 !== h.default.uo.launch().query.uid ? h.default.uo.launch().query.uid : "0",
                            first_entry_time: e,
                            last_entry_time: t,
                            device_os_version: h.default.uo.mPhone.system,
                            device_type: h.default.uo.mPhone.model,
                            wechat_version: h.default.uo.mPhone.version
                        };
                        n.default.app.mWX.indexBpTotle("app_entry", a);
                    }
                }, e.prototype.dealQuery = function(e, t) {
                    void 0 === t && (t = !1), null != e.query.gift && void 0 !== e.query.gift ? e.query.id > 0 ? n.default.app.mWX.addCardForMe(e.query.id) : n.default.app.mWX.dealCards() : 8 == Number(e.query.type) ? void 0 !== e.shareTicket && "undefined" != e.shareTicket && e.shareTicket : e.query.id > 0 && (n.default.app.mWX.mrelayID = e.query.id);
                }, e.prototype.displayGameClub = function(e) {
                    null != n.default.app.mWX.gameClub && (e ? n.default.app.mWX.gameClub.show() : n.default.app.mWX.gameClub.hide());
                }, e.prototype.getOnOffByKey = function(e) {
                    if (0 == this.fhOnoff && "of_jump" != e) return !1;
                    for (var t = 0; t < this.mOnOff.length; t++)
                        if (this.mOnOff[t].key == e) return "0" != this.mOnOff[t].value;
                    return !1;
                }, e.prototype.isTodayCheck = function(e, t) {
                    for (var a = 1; a <= 7; a++)
                        if (Number(e["day_" + a]) == t) return !1;
                    return !0;
                }, e.prototype.updateLocalPropCount = function(e, t) {
                    for (var a = 0; a < n.default.app.mWX.mPropList.length; a++)
                        if (n.default.app.mWX.mPropList[a].id == e) {
                            n.default.app.mWX.mPropList[a].count = t;
                            break;
                        }
                }, e.prototype.updateLocalTaskStatus = function(e, t) {
                    for (var a = 0; a < this.mTaskInfo.length; a++)
                        if (this.mTaskInfo[a].id == e) {
                            this.mTaskInfo[a].give = t;
                            break;
                        }
                }, e.prototype.updateLocalTaskOverCount = function(e, t) {
                    for (var a = 0; a < this.mTaskInfo.length; a++)
                        if (this.mTaskInfo[a].id == e) {
                            this.mTaskInfo[a].over_count = t;
                            break;
                        }
                }, e.prototype.setUserValue = function(e, t, a, n) {
                    void 0 === a && (a = !1), void 0 === n && (n = null);
                    var o = this;
                    a && wx.showLoading({
                        title: "",
                        mask: !0,
                        success: function() {},
                        fail: function() {},
                        complete: function() {}
                    }), this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(i) {
                        0 == ("string" == typeof i ? s.util.getJSON(i) : s.util.getJSON(o.mHttpCall.data)).code && (o.updateUserDataByKey(e, t),
                            null != n && n()), a && wx.hideLoading(), o.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var r = [];
                    r.uid = this.mUID, r.dt_key = e, r.dt_value = t;
                    var l = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.SetUserValue + s.util.getUrlParams(r, "1.0.1");
                    this.mHttpCall.send(l, null, "get", "text");
                }, e.prototype.getUserDataByKey = function(e) {
                    if ("knife_skin_id" === e) {
                        return platform.getInstance().getStorageSync(e) || 10;
                    }
                    // else Level_num


                    // if (void 0 == this.mUserData || null == this.mUserData || 0 == this.mUserData.length) return "gold" == e || "exp" == e ? "0" : "";
                    // for (var t = 0, a = 0; a < this.mUserData.length; a++) {
                    //     if (this.mUserData[a].key == e) return this.mUserData[a].values;
                    //     t++;
                    // }
                    // return t == this.mUserData.length ? "gold" == e || "exp" == e ? "0" : "" : void 0;
                }, e.prototype.updateUserDataByKey = function(e, t) {
                    for (var a = 0, i = 0; i < this.mUserData.length; i++) this.mUserData[i].key == e ? this.mUserData[i].values = t : a++;
                    if (a == this.mUserData.length) {
                        var n = new Object();
                        n.key = e, n.values = t, this.mUserData.push(n);
                    }
                }, e.prototype.ChangeTCt = function(e, t, a, o) {
                    void 0 === a && (a = null);
                    var r = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                        var a = null;
                        0 == (a = "string" == typeof t ? s.util.getJSON(t) : s.util.getJSON(r.mHttpCall.data)).code && (n.default.app.mWX.updateLocalPropCount(String(e), a.new),
                                void 0 != o && null != o && o()), u.LogUtil.log("ChangeTCt() -> ret = " + JSON.stringify(a)),
                            r.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var l = [];
                    l.uid = this.mUID, l.tid = e, l.count = t;
                    var m = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.ChangeTCt + s.util.getUrlParams(l, "1.0.1");
                    this.mHttpCall.send(m, null, "get", "text"), u.LogUtil.log("ChangeTCt() str = " + m);
                }, e.prototype.getPropCount = function(e) {
                    var t = 0;
                    return n.default.app.mWX.mPropList.forEach(function(a) {
                        a.id != e || (t = Number(a.count));
                    }), t;
                }, e.prototype.getSpecificTaskIdByGoto = function(e) {
                    var t = "";
                    return n.default.app.mWX.mTaskInfo.forEach(function(a) {
                        if ("" != a.param) {
                            var i = JSON.parse(a.param);
                            "string" == typeof i.goto && i.goto == e && (t = a.id);
                        }
                    }), t;
                }, e.prototype.isTaskFinishByGoto = function(e) {
                    var t = !1;
                    return n.default.app.mWX.mTaskInfo.forEach(function(a) {
                        if ("" != a.param) {
                            var i = JSON.parse(a.param);
                            "string" == typeof i.goto && i.goto == e && a.over_count >= a.count && (t = !0);
                        }
                    }), t;
                }, e.prototype.getMediaType = function(e, t) {
                    var a = this,
                        i = (e.query.ald_media_id, e.query.ald_link_key);
                    console.log("query:", e.query), this.channel_id = i ? String(i) : "0";
                    var o = t.nowday == t.regday;
                    if (this.first_channel_id = "-1", o) {
                        (r = t.user_data).forEach(function(e) {
                            "first_channel_id" == e.key && (a.first_channel_id = String(e.values));
                        }), "-1" == this.first_channel_id && (this.first_channel_id = this.channel_id, n.default.app.mWX.setUserValue("first_channel_id", String(this.first_channel_id)));
                    } else {
                        var r = t.user_data;
                        r.forEach(function(e) {
                            "first_channel_id" == e.key && (a.first_channel_id = String(e.values));
                        }), "-1" == this.first_channel_id && (this.first_channel_id = "0", n.default.app.mWX.setUserValue("first_channel_id", String(this.first_channel_id)));
                    }
                }, e.prototype.isOwnSpecificProp = function(e) {
                    var t = 0;
                    return this.mPropList.forEach(function(a) {
                        a.id == e && Number(a.count) > 0 && (t = Number(a.count));
                    }), t;
                }, e.prototype.getOnOffValueByKey = function(e) {
                    for (var t = 0; t < this.mOnOff.length; t++)
                        if (this.mOnOff[t].key == e) return this.mOnOff[t].value;
                    return "0";
                }, e.prototype.itemTotle = function(e, t, a, n, o) {
                    void 0 === n && (n = ""), void 0 === o && (o = 1);
                    var r = this;
                    this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                        r.mHttpCall = null;
                    }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                    var l = [];
                    l.uid = this.mUID, l.useitem = e, l.usect = o, l.poskey = t, void 0 != a && null != a && (l.starttm = a),
                        "" != n && (l.other = n);
                    var u = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.ItemTotle + s.util.getUrlParams(l, "1.0.1");
                    this.mHttpCall.send(u, null, "get", "text");
                }, e.prototype.getWxAdOpen = function(e) {
                    var t = "";
                    return void 0 == n.default.app.mWX.mWxAdUrl || null == n.default.app.mWX.mWxAdUrl || 0 == n.default.app.mWX.mWxAdUrl.length ? t : (n.default.app.mWX.mWxAdUrl.forEach(function(a) {
                        a.id != e || (t = a.open);
                    }), t);
                }, e.prototype.getWxAdUnitIdById = function(e) {
                    var t = "";
                    return void 0 == n.default.app.mWX.mWxAdUrl || null == n.default.app.mWX.mWxAdUrl || 0 == n.default.app.mWX.mWxAdUrl.length ? t : (n.default.app.mWX.mWxAdUrl.forEach(function(a) {
                        a.id != e || "1" == a.open && (t = a.unitid);
                    }), t);
                }, e.prototype.getVideoRewardArr = function() {
                    var e = [];
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_v_reward" != t.key || (e = String(t.param).split(",").map(Number));
                    }), e;
                }, e.prototype.getVideoRewardByCount = function(e) {
                    var t = n.default.app.mWX.getVideoRewardArr();
                    return e < t.length ? t[e] : t[t.length - 1];
                }, e.prototype.getOnOffParamByKey = function(e) {
                    for (var t = "", a = 0; a < n.default.app.mWX.mOnOff.length; a++)
                        if (n.default.app.mWX.mOnOff[a].key == e) {
                            t = n.default.app.mWX.mOnOff[a].param;
                            break;
                        }
                    return t;
                }, e.prototype.getShareTimeByCount = function() {
                    var e = n.default.app.mWX.getOnOffParamByKey("of_share_time");
                    console.log("分享时间", e);
                    var t = e.split(",");
                    return n.default.app.mWX.mShareCount > 0 ? Number(t[t.length - 1]) / 1e3 : Number(t[0]) / 1e3;
                }, e.prototype.getRandomGames = function(e) {
                    if (n.default.app.mWX.mGamesBox.length < e) return n.default.app.mWX.mGamesBox;
                    for (var t = [].concat(n.default.app.mWX.mGamesBox), a = [], i = 0; i < e; i++) {
                        var o = Math.floor(Math.random() * (1 - t.length) + t.length),
                            r = t[o - 1];
                        a.push(r), t.splice(o - 1, 1);
                    }
                    return a;
                }, e.prototype.getStartAwardObject = function() {
                    if (0 == n.default.app.mWX.mStartAward.length) return null;
                    var e = n.default.app.mWX.mStartAward[0].reward;
                    return "" == JSON.parse(e).itemid ? null : JSON.parse(e);
                }, e.prototype.getItemNameByItemId = function(e) {
                    for (var t = "", a = 0; a < n.default.app.mWX.mPropList.length; a++)
                        if (n.default.app.mWX.mPropList[a].id == e) {
                            t = n.default.app.mWX.mPropList[a].name;
                            break;
                        }
                    return t;
                }, e.prototype.getItemByItemId = function(e) {
                    for (var t = "", a = 0; a < n.default.app.mWX.mPropList.length; a++)
                        if (n.default.app.mWX.mPropList[a].id == e) {
                            t = n.default.app.mWX.mPropList[a].name;
                            break;
                        }
                    return t;
                }, e.prototype.initPassAwardData = function() {
                    n.default.app.mWX.mPassAwardListData.splice(0, n.default.app.mWX.mPassAwardListData.length),
                        n.default.app.mWX.mPropList.forEach(function(e) {
                            "0" != e.gamebox && "2" == e.type && n.default.app.mWX.mPassAwardListData.push(e);
                        });
                }, e.prototype.getPassAwardDataByLevel = function(e) {
                    for (var t = null, a = 0; a < n.default.app.mWX.mPassAwardListData.length; a++) {
                        if ("string" != typeof n.default.app.mWX.mPassAwardListData[a].other) return;
                        var i = JSON.parse(n.default.app.mWX.mPassAwardListData[a].other);
                        e == Number(i.num) && (t = n.default.app.mWX.mPassAwardListData[a]);
                    }
                    return t;
                }, e.prototype.initUserMusicSoundOnOff = function() {
                    0 != n.default.app.mWX.mUserData.length && n.default.app.mWX.mUserData.forEach(function(e) {
                        e.key;
                    });
                }, e.prototype.getStartRewardArr = function() {
                    var e = 1;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_start" != t.key || (e = Number(t.value));
                    }), e;
                }, e.prototype.getDoubleCoinArr = function() {
                    var e = 1;
                    return n.default.app.mWX.mOnOff.forEach(function(t) {
                        "of_coins_double" != t.key || (e = Number(t.value));
                    }), e;
                }, e.prototype.GetBPUrl = function() {
                    var e = "";
                    return n.default.app.mWX.mdtValues.forEach(function(t) {
                        "dt_log_url" != t.key || (e = t.param);
                    }), console.log("获得埋点地址", e), e;
                }, e.prototype.indexBpTotle = function(e, t) {}, e;
            }();
        a.default = _;
    }, {
        "../Main": 14,
        "../script/MyLikeView": 33,
        "../script/ShopView": 36,
        "../util/ConfigUtil": 49,
        "../util/LogUtil": 50,
        "../util/ShareConfig": 51,
        "../util/TimeUtil": 53,
        "./Base64": 1,
        "./MoreGame": 6,
        "./OddEvenTestModel": 7,
        "./gameBox": 8,
        "./util": 9,
        "./wxCallBack": 10,
        "./wxCore": 11
    }],
    13: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./script/StartView"),
            n = e("./script/GameUI"),
            o = function() {
                function e() {}
                return e.init = function() {
                        var e = Laya.ClassUtils.regClass;
                        e("script/StartView.ts", i.default), e("script/GameUI.ts", n.default);
                    }, e.width = 750, e.height = 1334, e.scaleMode = "fixedwidth", e.screenMode = "none",
                    e.alignV = "top", e.alignH = "left", e.startScene = "page/StartView.scene", e.sceneRoot = "",
                    e.debug = !1, e.stat = !1, e.physicsDebug = !1, e.exportSceneToJson = !0, e;
            }();
        a.default = o, o.init();
    }, {
        "./script/GameUI": 30,
        "./script/StartView": 39
    }],
    14: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./GameConfig"),
            n = e("./script/data/foodLength"),
            o = e("./core/wxCore"),
            r = e("./core/wxMinPro"),
            s = e("./script/LoadingUI"),
            l = e("./util/ShareUtil"),
            p = function() {
                function e() {
                    var t = this;
                    this.shopView = null, this.resultView = null, this.LoadingView = null, this.getKnifeDialog = null,
                        this.clickAppId = "", this.clickGameId = 0, this.clickFromPage = "", this.adUtil = null,
                        this.wRankData = [], this.is_gamebox = !0, this.moregame = 0, this.is_share = !0,
                        this.Level_num = 1, this.clickLikeArr = [], this.baokuanlist = [], this.fakerxcxlist = [],
                        this.is_success = !1, this.playAni = !1, this.isOk = !1, this.loadingShow = !0,
                        this.boxcangetnum = 0, this.isStartReward = !0, this.boxSkinId = 0, this.boxSkinKeepId = 0,
                        this.boxChangeInterval = 0,

                        // this.URL = "https://tcdn.wanzhushipin.cn/xcx/games/tian_tianqc/res3/", 
                        this.scene_num = 0, e.app = this,

                        Laya3D.init(i.default.width, i.default.height);
                    Laya.stage.scaleMode = Laya.Stage.EXACTFIT;
                    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
                    Laya.stage.screenMode = i.default.screenMode,
                        Laya.URL.exportSceneToJson = i.default.exportSceneToJson, Laya.MouseManager.multiTouchEnabled = !1,
                        (i.default.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                        i.default.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                        i.default.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, e.app.mWX = new r.default();
                    // window.wx && null == o.default.uo && (new o.default(), o.default.uo.initWX(2));
                    var a = [{
                            url: "res/atlas/game.atlas"
                        },
                        {
                            url: "start/logo.png"
                        },
                        {
                            url: "bg/7.jpg"
                        }, {
                            url: "newknife/0.png"
                        }, {
                            url: "newknife/1.png"
                        }, {
                            url: "newknife/2.png"
                        }, {
                            url: "newknife/3.png"
                        }, {
                            url: "newknife/4.png"
                        }, {
                            url: "newknife/5.png"
                        }, {
                            url: "newknife/6.png"
                        }, {
                            url: "newknife/7.png"
                        }, {
                            url: "newknife/8.png"
                        }, {
                            url: "button/djs1.png"
                        }, {
                            url: "button/djs2.png"
                        }, {
                            url: "button/djs3.png"
                        }, {
                            url: "button/djs4.png"
                        }, {
                            url: "button/djs5.png"
                        }, {
                            url: "button/result_image_bg_3.png"
                        }
                    ];
                    Laya.loader.load(a, Laya.Handler.create(this, function() {
                        null == t.LoadingView && (t.loadingShow = !0, t.LoadingView = new s.default(), Laya.stage.addChild(t.LoadingView));
                    }));
                    Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                }
                return e.prototype.onVersionLoaded = function() {

                        if (platform.getInstance()) {
                            // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED,this,()=>{
                            //     platform.getInstance();
                            //     Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                            // })

                            // let o = new YYG.Options();
                            // o.gamedistributionID = "";
                            // o.gameNameId = "Perfect-Slices-Online";
                            // YYGSDK.__init__(YYG.ChannelType.YAD,o);
                            platform.getInstance().yadstartup("Perfect-Slices-Online", () => {
                                platform.getInstance();
                                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                            })
                        } else {
                            // YYGSDK.showInterstitial = 
                            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
                        }




                    },
                    e.prototype.onConfigLoaded = function() {
                        var t = this,
                            a = e.app.URL,
                            i = [{
                                url: "ani/bx1.png"
                            }, {
                                url: "ani/bx2.png"
                            }, {
                                url: "ani/bx3.png"
                            }, {
                                url: "ani/bx4.png"
                            }, {
                                url: "ani/bx5.png"
                            }, {
                                url: "ani/bx6.png"
                            }, {
                                url: "ani/bx7.png"
                            }, {
                                url: "res/level.json"
                            }, {
                                url: "res/shop.json"
                            }, {
                                url: "res/atlas/food.atlas"
                            }, {
                                url: "res/atlas/knife.atlas"
                            }, {
                                url: "res/atlas/start.atlas"
                            }, {
                                url: "res/atlas/shop.atlas"
                            }, {
                                url: "res/atlas/my_like.atlas"
                            }, {
                                url: "start/img_bg.png"
                            }, {
                                url: "start/logo.png"
                            }, {
                                url: "sound/btn_click.mp3"
                            }, {
                                url: "sound/speed1.mp3"
                            }, {
                                url: "sound/speed2.mp3"
                            }, {
                                url: "sound/speed3.mp3"
                            }, {
                                url: "sound/speed4.mp3"
                            }, {
                                url: "sound/speed5.mp3"
                            }, {
                                url: "sound/cut.mp3"
                            }];
                        Laya.loader.load(i, Laya.Handler.create(t, function(e) {
                            t.ChangeScene();
                        }));
                    }, e.prototype.ChangeScene = function() {
                        this.scene_num++, i.default.startScene && Laya.Scene.open(i.default.startScene);
                    }, e.prototype.onBtnMouseDown = function(e) {
                        e.scale(1.02, 1.02);
                    }, e.prototype.onBtnMouseOut = function(e) {
                        e.scale(1, 1);
                    }, e.prototype.subname = function(e, t) {
                        return e.length > t && (e = e.substr(0, t) + "..."), e;
                    }, e.app = null, e;
            }();
        a.default = p, new p(), new n.default();
    }, {
        "./GameConfig": 13,
        "./core/wxCore": 27,
        "./core/wxMinPro": 28,
        "./script/LoadingUI": 32,
        "./script/data/foodLength": 40,
        "./util/ShareUtil": 52
    }],
    15: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./../ui/layaMaxUI"),
            n = e("../script/MyLikeView2"),
            o = e("../Main"),
            r = e("./MoreGame"),
            s = e("./JumpObjConverter"),
            l = e("./gameBox"),
            p = e("./JumpAniCtl"),
            u = e("./wxCore"),
            m = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.barValue = 1410, t.timeIndex = 0, t.moveIndex = 1, t.isPress = !1, t.isMove = !1,
                        t.loopNight = [0, 0, 0, 0, 0, 0, 0, 0, 0], t.init(), t;
                }
                return __extends(t, e),
                    t.prototype.onShow = function(e, t) {
                        if (e) {
                            o.default.app.baokuanlist = [],
                                this.visible = !0,
                                this.isMove = !0, this.callback = t,
                                this.loopNight = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                            this.gameList.scrollBar.setScroll(0, this.barValue, 0),
                                this.addEvent();
                        } else
                            this.visible = !1,
                            this.isMove = !1,
                            o.default.app.mWX.likeLoop = !1,
                            this.callback && this.callback(),
                            this.removeEvent(), this.removeSelf(), this.destroy(!0);
                    }, t.prototype.addEvent = function() {
                        var e = this;
                        this.back.on(Laya.Event.CLICK, this, this.onBack),
                            this.btnStart.on(Laya.Event.CLICK, this, this.onBack),
                            Laya.timer.once(200, this, function() {
                                e.on(Laya.Event.MOUSE_DOWN, e, e.mouseHandler, [0]), e.on(Laya.Event.MOUSE_UP, e, e.mouseHandler, [1]);
                            });
                    }, t.prototype.removeEvent = function() {
                        this.back.off(Laya.Event.CLICK, this, this.onBack), this.btnStart.off(Laya.Event.CLICK, this, this.onBack);
                    }, t.prototype.init = function() {
                        this.gameList.array = platform.getInstance().getForgames();
                        console.log("this.gameList.array ", this.gameList.array);
                        this.myLikeView = new n.default(),
                            this.gameList.vScrollBarSkin = "",
                            this.gameList.renderHandler = new Laya.Handler(this, this.updataGameList),
                            Laya.timer.frameLoop(1, this, this.move);
                    }, t.prototype.onBack = function() {
                        this.onShow(!1, null);
                    }, t.prototype.loop = function() {
                        this.isPress || this.isMove || (this.timeIndex += 1e3, this.timeIndex > 2e3 && (this.isMove = !0,
                            this.timeIndex = 0, this.onMove()));
                    }, t.prototype.mouseHandler = function(e) {
                        0 == e ? this.isPress = !0 : 1 == e && (this.isPress = !1, this.isMove = !0, this.gameList.scrollBar.value = Math.floor(this.gameList.scrollBar.value));
                    }, t.prototype.onMove = function() {
                        console.log("moveIndex1:", this.moveIndex), this.moveIndex >= 0 && this.moveIndex <= 2 ? this.moveIndex = this.moveIndex + 1 : 3 == this.moveIndex ? this.moveIndex = -2 : -2 == this.moveIndex ? this.moveIndex = -1 : -1 == this.moveIndex && (this.moveIndex = 0),
                            console.log("moveIndex2:", this.moveIndex);
                    }, t.prototype.move = function() {
                        this.isMove && (this.isPress && (this.isMove = !1), this.gameList.scrollBar.value += 2 * this.moveIndex,
                            this.gameList.scrollBar.value >= this.barValue && (this.gameList.scrollBar.value = this.barValue,
                                this.moveIndex = -1), 0 == this.gameList.scrollBar.value && (this.gameList.scrollBar.value = 0,
                                this.moveIndex = 1));
                    },
                    t.prototype.updataGameList = function(e, t) {


                        var a = e.getChildByName("icon");
                        if (0 == this.loopNight[t]) {
                            this.loopNight[t] = 1;
                            var i = s.JumpObjConverter.instance.convert(e.dataSource);
                            if (!i) return;
                            var n = "";
                            n = 1 == o.default.app.mWX.oddEvenTestModel.isAniTest ? e.dataSource.big_btn_url : e.dataSource.static_big_btn_icon,
                                console.log("ooo2:", n), a.skin = "", Laya.timer.once(200, this, function() {
                                    o.default.app.mWX.likeLoop = !0;
                                    var t = e.dataSource.anim_config,
                                        r = 0;
                                    if (2 == o.default.app.mWX.moreFenFaNum) {
                                        (s = JSON.parse(t).group_static_big.split(",")).length > 1 && (r = Number(s[0]) + 1,
                                            n = n.replace("_1.", "_" + r + ".")), console.log("likeloop3", n, i.big_frame);
                                    } else if (3 == o.default.app.mWX.moreFenFaNum) {
                                        var s = JSON.parse(t).group_static_big.split(",");
                                        s.length > 2 && (r = Number(s[0]) + Number(s[1]) + 1, n = n.replace("_1.", "_" + r + ".")),
                                            console.log("likeloop333333", n, i.big_frame);
                                    }
                                    p.JumpAniCtl.instance.ani(a, n, i.big_frame, i.big_interval, i.millisecond_big, r);
                                });
                        }
                        e.offAll(Laya.Event.CLICK);
                        e.on(Laya.Event.CLICK, this, this.onShowGame, [e.dataSource.gameid]);
                    }, t.prototype.onShowGame = function(e) {
                        if (l.gameBox.isClickJump) {
                            var t = o.default.app.mWX.getMoreUrl(e);
                            if (null == t) return;
                            this.baokuan_gameid = e, this.myLikeView.onclick(t.appid, t.gameid, "baokuan");
                        }
                    }, t;
            }(i.ui.test.BaoKuanTuiJianUI);
        a.default = m;
    }, {
        "../Main": 14,
        "../script/MyLikeView2": 34,
        "./../ui/layaMaxUI": 47,
        "./JumpAniCtl": 19,
        "./JumpObjConverter": 20,
        "./MoreGame": 22,
        "./gameBox": 24,
        "./wxCore": 27
    }],
    16: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                e._b64tab = function() {
                    for (var t = {}, a = 0, i = e._b64chars.length; a < i; a++) t[e._b64chars.charAt(a)] = a;
                    return t;
                };
            }
            return e._cb_btou = function(e) {
                    switch (e.length) {
                        case 4:
                            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                            return String.fromCharCode(55296 + (t >>> 10)) + String.fromCharCode(56320 + (1023 & t));

                        case 3:
                            return String.fromCharCode((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

                        default:
                            return String.fromCharCode((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
                    }
                }, e._cb_decode = function(e) {
                    var t = e.length,
                        a = t % 4,
                        i = (t > 0 ? this._b64tab[e.charAt(0)] << 18 : 0) | (t > 1 ? this._b64tab[e.charAt(1)] << 12 : 0) | (t > 2 ? this._b64tab[e.charAt(2)] << 6 : 0) | (t > 3 ? this._b64tab[e.charAt(3)] : 0),
                        n = [String.fromCharCode(i >>> 16), String.fromCharCode(i >>> 8 & 255), String.fromCharCode(255 & i)];
                    return n.length -= [0, 0, 2, 1][a], n.join("");
                }, e._cb_encode = function(t) {
                    var a = [0, 2, 1][t.length % 3],
                        i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                    return [e._b64chars.charAt(i >>> 18), e._b64chars.charAt(i >>> 12 & 63), a >= 2 ? "=" : e._b64chars.charAt(i >>> 6 & 63), a >= 1 ? "=" : e._b64chars.charAt(63 & i)].join("");
                }, e._cb_utob = function(e) {
                    if (e.length < 2) {
                        return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? String.fromCharCode(192 | t >>> 6) + String.fromCharCode(128 | 63 & t) : String.fromCharCode(224 | t >>> 12 & 15) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
                    }
                    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                    return String.fromCharCode(240 | t >>> 18 & 7) + String.fromCharCode(128 | t >>> 12 & 63) + String.fromCharCode(128 | t >>> 6 & 63) + String.fromCharCode(128 | 63 & t);
                }, e._re_btou = function() {
                    return new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");
                }, e._atob = function(e) {
                    return e.replace(/[\s\S]{1,4}/g, this._cb_decode);
                }, e._btoa = function(e) {
                    return e.replace(/[\s\S]{1,3}/g, this._cb_encode);
                }, e._btou = function(e) {
                    return e.replace(this._re_btou, this._cb_btou);
                }, e._decode = function(e) {
                    var t = this,
                        a = String(e).replace(/[-_]/g, function(e) {
                            return "-" == e ? "+" : "/";
                        });
                    return console.log("1 = ", a), a = a.replace(/[^A-Za-z0-9\+\/]/g, ""), console.log("2 = ", a),
                        function(e) {
                            return t._btou(atob(e));
                        }(a);
                }, e._encode = function(e, t) {
                    var a = this;
                    void 0 === t && (t = !1);
                    var i = function(e) {
                        return a._btoa(a._utob(e));
                    };
                    return t ? i(String(e)).replace(/[+\/]/g, function(e) {
                        return "+" == e ? "-" : "_";
                    }).replace(/=/g, "") : i(String(e));
                }, e.EncodeURI = function(e) {
                    return this._encode(e, !0);
                }, e.FromBase64 = function(e) {
                    return this._decode(e);
                }, e.ToBase64 = function(e) {
                    return this._encode(e);
                }, e.stringToBytes = function(e) {
                    var t, a, i = new Array();
                    t = e.length;
                    for (var n = 0; n < t; n++)(a = e.charCodeAt(n)) >= 65536 && a <= 1114111 ? (i.push(a >> 18 & 7 | 240),
                        i.push(a >> 12 & 63 | 128), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : a >= 2048 && a <= 65535 ? (i.push(a >> 12 & 15 | 224),
                        i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : a >= 128 && a <= 2047 ? (i.push(a >> 6 & 31 | 192),
                        i.push(63 & a | 128)) : i.push(255 & a);
                    return i;
                }, e.byteToString = function(e) {
                    if ("string" == typeof e) return e;
                    for (var t = "", a = e, i = 0; i < a.length; i++) {
                        var n = a[i].toString(2),
                            o = n.match(/^1+?(?=0)/);
                        if (o && 8 == n.length) {
                            for (var r = o[0].length, s = a[i].toString(2).slice(7 - r), l = 1; l < r; l++) s += a[l + i].toString(2).slice(2);
                            t += String.fromCharCode(parseInt(s, 2)), i += r - 1;
                        } else t += String.fromCharCode(a[i]);
                    }
                    return t;
                }, e._utob = function(e) {
                    return e.replace(this._re_utob, this._cb_utob);
                }, e._b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e._fromCharCode = String.fromCharCode, e._re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                e;
        }();
        a.TsBase64 = i;
        var n = i.ToBase64("Typescript"),
            o = i.EncodeURI('Typescript"');
        console.log(n), console.log(o);
    }, {}],
    17: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./../ui/layaMaxUI"),
            n = e("./MoreGame"),
            o = e("../Main"),
            r = e("./gameBox"),
            s = e("../script/MyLikeView2"),
            l = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.ListData = [], t.showList = [], 2 * Laya.stage.width < Laya.stage.height && (t.topBox.height = 160,
                            t.closeBtn.y += 72, t.tips.y += 72, t.gameBViewBox.y += 72), t.zOrder = 99,
                        t.myLikeView = new s.default(), t.height = Laya.stage.height, t.gameList.renderHandler = new Laya.Handler(t, t.updateGameList),
                        t.gameBViewBox.vScrollBarSkin = "", t.gameBViewBox.height = Laya.stage.height - t.gameBViewBox.y,
                        t.gameBViewBox.vScrollBar.elasticBackTime = 200, t.gameBViewBox.vScrollBar.elasticDistance = 150,
                        t;
                }
                return __extends(t, e), t.prototype.onShow = function(e, t) {
                    if (e) {
                        this.visible = !0;
                        var a = this.getListData();
                        this.gameList.array = a, this.addEvent();
                    } else this.visible = !1, t && t();
                }, t.prototype.addEvent = function() {
                    this.closeBtn.on(Laya.Event.CLICK, this, this.onShow, [!1, null]);
                }, t.prototype.removeEvent = function() {
                    this.closeBtn.off(Laya.Event.CLICK, this, this.onShow);
                }, t.prototype.getListData = function() {
                    var e = n.MoreGame.GetIndexRandomList(o.default.app.mWX.mGamesBox, 9);
                    console.log("-- 列表页 初始九个白名单 --", e);
                    var t = [],
                        a = [],
                        i = [],
                        r = o.default.app.mWX.getUserDataByKey("clickLikeArr");
                    if (r && "0" != r) {
                        i = JSON.parse(r), console.log("-- 爆款页 clickLikeArr---", i);
                        for (p = 0; p < e.length; p++) {
                            var s = e[p]; -
                            1 == i.indexOf(s.gameid) ? a.push(s) : t.push(s);
                        }
                        console.log("-- 没有点击过的放前面1111 --", e, a, t);
                        for (p = 0; p < a.length; p++) {
                            l = a[p];
                            e[p] = l;
                        }
                        for (p = 0; p < t.length; p++) {
                            var l = t[p];
                            e[e.length - 1 - p] = l;
                        }
                        console.log("-- 没有点击过的放前面2222 --", e, a, t);
                        for (p = 0; p < e.length; p++) o.default.app.fakerxcxlist.push(e[p].appid);
                        return o.default.app.mWX.indexBpTotle("recom_show", {
                            game_show_list: o.default.app.fakerxcxlist,
                            position_type: "app_list"
                        }), e;
                    }
                    console.log("-- 不随机 --", e);
                    for (var p = 0; p < e.length; p++) o.default.app.fakerxcxlist.push(e[p].appid);
                    return o.default.app.mWX.indexBpTotle("recom_show", {
                        game_show_list: o.default.app.fakerxcxlist,
                        position_type: "app_list"
                    }), e;
                }, t.prototype.updateGameList = function(e, t) {
                    var a = e.getChildByName("gameIcon"),
                        i = e.getChildByName("gameName");
                    a.skin = e.dataSource.url_icon, i.text = e.dataSource.name, e.on(Laya.Event.CLICK, this, this.onShowGame, [e.dataSource.gameid]);
                }, t.prototype.onShowGame = function(e) {
                    if (r.gameBox.isClickJump) {
                        var t = o.default.app.mWX.getMoreUrl(e);
                        if (null == t) return;
                        this.xcx_gameid = e, this.myLikeView.onclick(t.appid, t.gameid, "fakerxcxlist");
                    }
                }, t;
            }(i.ui.test.FakerXCXListUI);
        a.FakerXCXListView = l;
    }, {
        "../Main": 14,
        "../script/MyLikeView2": 34,
        "./../ui/layaMaxUI": 47,
        "./MoreGame": 22,
        "./gameBox": 24
    }],
    18: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function(e) {
                function t(t, a, i, n, o) {
                    var r = e.call(this) || this;
                    return r.frames = [], r.timer = 0, r.index = 0, r.frame_number = 1, r.interval = [100],
                        r.showAniNum = 0, r.showAniArr = [], r.startFrame = 0, r.endFrame = 0, r.framesArr = [],
                        r.isChange = !1, r.playAniNum = 0, r.aniPlayTime = 0, r.changeAnitime = [3e3],
                        r.target = t, r.target.skin = "", r.frames = a, r.frame_number = a.length, r.interval = i,
                        r.framesArr = n, r.showAniArr = r.createAniArr(n), r.changeAnitime = o, r.getStartEnd(r.playAniNum),
                        r.set_index(r.startFrame), r;
                }
                return __extends(t, e), t.prototype.getStartEnd = function(e) {
                    0 == this.showAniArr[e] ? (this.startFrame = 0, this.endFrame = Number(this.framesArr[this.showAniArr[e]])) : (this.startFrame = Number(this.framesArr[this.showAniArr[e] - 1]),
                        this.endFrame = Number(this.framesArr[this.showAniArr[e]]));
                }, t.prototype.createAniArr = function(e) {
                    var t = [];
                    return e.forEach(function(e, a) {
                        t.push(a);
                    }), this.shuffleArray(t);
                }, t.prototype.shuffleArray = function(e) {
                    for (var t = -1, a = e.length, i = a - 1, n = a; ++t < n;) {
                        var o = t + Math.floor(Math.random() * (i - t + 1)),
                            r = e[o];
                        e[o] = e[t], e[t] = r;
                    }
                    return e.length = n, e;
                }, t.prototype.add_index = function() {
                    i.default.app.playAni && (this.index + 1 >= this.endFrame ? this.isChange ? (++this.playAniNum >= this.showAniArr.length && (this.playAniNum = 0),
                        this.getStartEnd(this.playAniNum), this.set_index(this.startFrame), this.isChange = !1) : this.set_index(this.startFrame) : this.set_index(this.index + 1));
                }, t.prototype.set_index = function(e) {
                    if (this.index = e, this.target)
                        if (this.target.skin) {
                            if (this.startFrame + 1 == this.endFrame && !this.isChange) return;
                            this.index < this.endFrame && (this.target.skin = this.frames[e]);
                        } else this.target.skin = this.frames[e];
                }, t.prototype.update = function() {
                    return i.default.app.mWX.likeLoop ? (this.timer += 50, (0 == i.default.app.mWX.oddEvenTestModel.isAniTest || 1 == i.default.app.mWX.oddEvenTestModel.isAniTest) && (this.aniPlayTime += 50,
                        this.aniPlayTime >= this.changeAnitime[0]) ? (this.aniPlayTime = 0, this.isChange = !0,
                        this.add_index(), void(this.timer = 0)) : void(this.timer >= this.interval[this.showAniArr[this.playAniNum]] && (this.add_index(),
                        this.timer = 0))) : (console.log("销毁jumpAni"), void this.event("die"));
                }, t;
            }(Laya.EventDispatcher);
        a.JumpAni = n;
    }, {
        "../Main": 14
    }],
    19: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./JumpAni"),
            n = e("../Main"),
            o = function() {
                function e() {
                    this.hasFrameArr = [], this.aniList = [], Laya.timer.loop(50, this, this.loop50);
                }
                return Object.defineProperty(e, "instance", {
                    get: function() {
                        return e._instance || (e._instance = new e()), e._instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.loop50 = function() {
                    for (var e = this.aniList.concat(), t = 0; t < e.length; t++) e[t].update();
                }, e.prototype.ani = function(e, t, a, o, r, s) {
                    var l = this,
                        p = 0,
                        u = [];
                    try {
                        a.forEach(function(e) {
                            p += Number(e), u.push(p);
                        });
                    } catch (e) {
                        console.log(a);
                    }
                    var m = [];
                    m.push(t);
                    var d = 2;
                    if (n.default.app.mWX.moreFenFaNum >= 2 && 0 != s) {
                        d = s, console.log("ii1:", d, p);
                        for (h = d; h < p + d; h++) {
                            f = t.replace("_" + d + ".", "_" + h + ".");
                            console.log("path2:", f, h), m.push(f);
                        }
                    } else {
                        console.log("ii2:", d, p);
                        for (var h = d; h <= p; h++) {
                            var f = t.replace("_1.", "_" + h + ".");
                            console.log("path1:", f, h), m.push(f);
                        }
                    }
                    this.hasFrameArr.indexOf(t) < 0 && Laya.loader.load(m, Laya.Handler.create(this, function() {
                        console.log("分发加载完成"), l.hasFrameArr.push(t), n.default.app.playAni = !0;
                    }), null, Laya.Loader.IMAGE, 4), e.skin = "";
                    var c = new i.JumpAni(e, m, o, u, r);
                    this.aniList.push(c), c.on("die", this, this.onJumpAniDie, [c]), console.log("问题所在 === 分发", a, t);
                }, e.prototype.onJumpAniDie = function(e) {
                    var t = this.aniList.indexOf(e);
                    t >= 0 && this.aniList.splice(t, 1);
                }, e;
            }();
        a.JumpAniCtl = o;
    }, {
        "../Main": 14,
        "./JumpAni": 18
    }],
    20: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function() {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function() {
                        return e._instance || (e._instance = new e()), e._instance;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.convert = function(e) {
                    var t = 0,
                        a = [],
                        n = [],
                        o = "",
                        r = 0,
                        s = [],
                        l = [],
                        p = "",
                        u = [],
                        m = [];
                    if (e.anim_config && "" != e.anim_config) {
                        var d = {};
                        try {
                            if (d = JSON.parse(e.anim_config), d.framelist = d.group_static.toString().split(","),
                                d.framebiglist = d.group_static_big.toString().split(","), d.frameone = d.frame_static.toString().split(","),
                                d.framebigone = d.frame_static_big.toString().split(","), d.millisecond = d.millisecond_static.toString().split(","),
                                d.millisecond_big = d.millisecond_static_big.toString().split(","), d.millisecond2 = d.millisecond2.toString().split(","),
                                d.millisecond_big2 = d.millisecond_big2.toString().split(","), d.millisecond3 = d.millisecond3.toString().split(","),
                                d.millisecond_big3 = d.millisecond_big3.toString().split(","), 1 == i.default.app.mWX.moreFenFaNum) d.framelist.splice(1, d.framelist.length - 1),
                                d.framebiglist.splice(1, d.framebiglist.length - 1), d.millisecond.splice(1, d.millisecond.length - 1),
                                d.millisecond_big.splice(1, d.millisecond_big.length - 1);
                            else if (i.default.app.mWX.moreFenFaNum >= 2) d.framelist.length > 1 && d.framelist.splice(0, d.framelist.length - 1),
                                d.framebiglist.length > 1 && d.framebiglist.splice(0, d.framebiglist.length - 1),
                                d.millisecond.length > 1 && d.millisecond.splice(0, d.framelist.length - 1), d.millisecond_big.length > 1 && d.millisecond_big.splice(0, d.framelist.length - 1);
                            else if (0 == i.default.app.mWX.moreFenFaNum) {
                                for (var h = 0, f = 0, c = 0; c < d.framelist.length; c++) h += Number(d.framelist[c]);
                                for (c = 0; c < d.framebiglist.length; c++) f += Number(d.framebiglist[c]);
                                d.framelist = [h], d.framebiglist = [f];
                            }
                            console.log("moreFenFaNum2:", i.default.app.mWX.moreFenFaNum, d.framelist, d.framebiglist, d.millisecond, d.millisecond_big);
                        } catch (e) {
                            return console.log(e), null;
                        }
                        var g = i.default.app.mWX.oddEvenTestModel;
                        if (0 == g.isAniTest || 2 == g.isAniTest) t = 2, a = d.framelist, n = d.millisecond,
                            o = e.static_icon, u = d.millisecond3;
                        else {
                            n = d.millisecond2, u = d.millisecond2, t = 1;
                            for (var y = [], _ = 0; _ < Number(d.frameone[0]); _++) y.push(1);
                            a = y, o = e.url_icon;
                        }
                        if (0 == g.isAniTest || 2 == g.isAniTest) r = 2, s = d.framebiglist, l = d.millisecond_big,
                            p = e.static_big_btn_icon, m = d.millisecond_big3;
                        else {
                            m = d.millisecond_big2, l = d.millisecond_big2, r = 1;
                            for (var y = [], _ = 0; _ < Number(d.framebigone[0]); _++) y.push(1);
                            s = y, p = e.big_btn_url;
                        }
                    } else t = 0, r = 0;
                    return {
                        small_type: t,
                        small_frame: a,
                        small_interval: n,
                        small_image: o,
                        millisecond: u,
                        big_type: r,
                        big_frame: s,
                        big_interval: l,
                        big_image: p,
                        millisecond_big: m
                    };
                }, e;
            }();
        a.JumpObjConverter = n;
    }, {
        "../Main": 14
    }],
    21: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.hexcase = 0, this.b64pad = "";
            }
            return e.prototype.hex_md5 = function(e) {
                return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
            }, e.prototype.b64_md5 = function(e) {
                return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
            }, e.prototype.any_md5 = function(e, t) {
                return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
            }, e.prototype.hex_hmac_md5 = function(e, t) {
                return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
            }, e.prototype.b64_hmac_md5 = function(e, t) {
                return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
            }, e.prototype.any_hmac_md5 = function(e, t, a) {
                return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), a);
            }, e.prototype.md5_vm_test = function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
            }, e.prototype.rstr_md5 = function(e) {
                return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
            }, e.prototype.rstr_hmac_md5 = function(e, t) {
                var a = this.rstr2binl(e);
                a.length > 16 && (a = this.binl_md5(a, 8 * e.length));
                for (var i = Array(16), n = Array(16), o = 0; o < 16; o++) i[o] = 909522486 ^ a[o],
                    n[o] = 1549556828 ^ a[o];
                var r = this.binl_md5(i.concat(this.rstr2binl(t)), 512 + 8 * t.length);
                return this.binl2rstr(this.binl_md5(n.concat(r), 640));
            }, e.prototype.rstr2hex = function(e) {
                try {
                    this.hexcase;
                } catch (e) {
                    this.hexcase = 0;
                }
                for (var t, a = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", n = 0; n < e.length; n++) t = e.charCodeAt(n),
                    i += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
                return i;
            }, e.prototype.rstr2b64 = function(e) {
                try {
                    this.b64pad;
                } catch (e) {
                    this.b64pad = "";
                }
                for (var t = "", a = e.length, i = 0; i < a; i += 3)
                    for (var n = e.charCodeAt(i) << 16 | (i + 1 < a ? e.charCodeAt(i + 1) << 8 : 0) | (i + 2 < a ? e.charCodeAt(i + 2) : 0), o = 0; o < 4; o++) 8 * i + 6 * o > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >>> 6 * (3 - o) & 63);
                return t;
            }, e.prototype.rstr2any = function(e, t) {
                var a, i, n, o, r, s = t.length,
                    l = Array(Math.ceil(e.length / 2));
                for (a = 0; a < l.length; a++) l[a] = e.charCodeAt(2 * a) << 8 | e.charCodeAt(2 * a + 1);
                var p = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
                    u = Array(p);
                for (i = 0; i < p; i++) {
                    for (r = Array(), o = 0, a = 0; a < l.length; a++) o = (o << 16) + l[a], o -= (n = Math.floor(o / s)) * s,
                        (r.length > 0 || n > 0) && (r[r.length] = n);
                    u[i] = o, l = r;
                }
                var m = "";
                for (a = u.length - 1; a >= 0; a--) m += t.charAt(u[a]);
                return m;
            }, e.prototype.str2rstr_utf8 = function(e) {
                for (var t, a, i = "", n = -1; ++n < e.length;) t = e.charCodeAt(n), a = n + 1 < e.length ? e.charCodeAt(n + 1) : 0,
                    55296 <= t && t <= 56319 && 56320 <= a && a <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & a),
                        n++), t <= 127 ? i += String.fromCharCode(t) : t <= 2047 ? i += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? i += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (i += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
                return i;
            }, e.prototype.str2rstr_utf16le = function(e) {
                for (var t = "", a = 0; a < e.length; a++) t += String.fromCharCode(255 & e.charCodeAt(a), e.charCodeAt(a) >>> 8 & 255);
                return t;
            }, e.prototype.str2rstr_utf16be = function(e) {
                for (var t = "", a = 0; a < e.length; a++) t += String.fromCharCode(e.charCodeAt(a) >>> 8 & 255, 255 & e.charCodeAt(a));
                return t;
            }, e.prototype.rstr2binl = function(e) {
                for (var t = Array(e.length >> 2), a = 0; a < t.length; a++) t[a] = 0;
                for (a = 0; a < 8 * e.length; a += 8) t[a >> 5] |= (255 & e.charCodeAt(a / 8)) << a % 32;
                return t;
            }, e.prototype.binl2rstr = function(e) {
                for (var t = "", a = 0; a < 32 * e.length; a += 8) t += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
                return t;
            }, e.prototype.binl_md5 = function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var a = 1732584193, i = -271733879, n = -1732584194, o = 271733878, r = 0; r < e.length; r += 16) {
                    var s = a,
                        l = i,
                        p = n,
                        u = o;
                    a = this.md5_ff(a, i, n, o, e[r + 0], 7, -680876936), o = this.md5_ff(o, a, i, n, e[r + 1], 12, -389564586),
                        n = this.md5_ff(n, o, a, i, e[r + 2], 17, 606105819), i = this.md5_ff(i, n, o, a, e[r + 3], 22, -1044525330),
                        a = this.md5_ff(a, i, n, o, e[r + 4], 7, -176418897), o = this.md5_ff(o, a, i, n, e[r + 5], 12, 1200080426),
                        n = this.md5_ff(n, o, a, i, e[r + 6], 17, -1473231341), i = this.md5_ff(i, n, o, a, e[r + 7], 22, -45705983),
                        a = this.md5_ff(a, i, n, o, e[r + 8], 7, 1770035416), o = this.md5_ff(o, a, i, n, e[r + 9], 12, -1958414417),
                        n = this.md5_ff(n, o, a, i, e[r + 10], 17, -42063), i = this.md5_ff(i, n, o, a, e[r + 11], 22, -1990404162),
                        a = this.md5_ff(a, i, n, o, e[r + 12], 7, 1804603682), o = this.md5_ff(o, a, i, n, e[r + 13], 12, -40341101),
                        n = this.md5_ff(n, o, a, i, e[r + 14], 17, -1502002290), i = this.md5_ff(i, n, o, a, e[r + 15], 22, 1236535329),
                        a = this.md5_gg(a, i, n, o, e[r + 1], 5, -165796510), o = this.md5_gg(o, a, i, n, e[r + 6], 9, -1069501632),
                        n = this.md5_gg(n, o, a, i, e[r + 11], 14, 643717713), i = this.md5_gg(i, n, o, a, e[r + 0], 20, -373897302),
                        a = this.md5_gg(a, i, n, o, e[r + 5], 5, -701558691), o = this.md5_gg(o, a, i, n, e[r + 10], 9, 38016083),
                        n = this.md5_gg(n, o, a, i, e[r + 15], 14, -660478335), i = this.md5_gg(i, n, o, a, e[r + 4], 20, -405537848),
                        a = this.md5_gg(a, i, n, o, e[r + 9], 5, 568446438), o = this.md5_gg(o, a, i, n, e[r + 14], 9, -1019803690),
                        n = this.md5_gg(n, o, a, i, e[r + 3], 14, -187363961), i = this.md5_gg(i, n, o, a, e[r + 8], 20, 1163531501),
                        a = this.md5_gg(a, i, n, o, e[r + 13], 5, -1444681467), o = this.md5_gg(o, a, i, n, e[r + 2], 9, -51403784),
                        n = this.md5_gg(n, o, a, i, e[r + 7], 14, 1735328473), i = this.md5_gg(i, n, o, a, e[r + 12], 20, -1926607734),
                        a = this.md5_hh(a, i, n, o, e[r + 5], 4, -378558), o = this.md5_hh(o, a, i, n, e[r + 8], 11, -2022574463),
                        n = this.md5_hh(n, o, a, i, e[r + 11], 16, 1839030562), i = this.md5_hh(i, n, o, a, e[r + 14], 23, -35309556),
                        a = this.md5_hh(a, i, n, o, e[r + 1], 4, -1530992060), o = this.md5_hh(o, a, i, n, e[r + 4], 11, 1272893353),
                        n = this.md5_hh(n, o, a, i, e[r + 7], 16, -155497632), i = this.md5_hh(i, n, o, a, e[r + 10], 23, -1094730640),
                        a = this.md5_hh(a, i, n, o, e[r + 13], 4, 681279174), o = this.md5_hh(o, a, i, n, e[r + 0], 11, -358537222),
                        n = this.md5_hh(n, o, a, i, e[r + 3], 16, -722521979), i = this.md5_hh(i, n, o, a, e[r + 6], 23, 76029189),
                        a = this.md5_hh(a, i, n, o, e[r + 9], 4, -640364487), o = this.md5_hh(o, a, i, n, e[r + 12], 11, -421815835),
                        n = this.md5_hh(n, o, a, i, e[r + 15], 16, 530742520), i = this.md5_hh(i, n, o, a, e[r + 2], 23, -995338651),
                        a = this.md5_ii(a, i, n, o, e[r + 0], 6, -198630844), o = this.md5_ii(o, a, i, n, e[r + 7], 10, 1126891415),
                        n = this.md5_ii(n, o, a, i, e[r + 14], 15, -1416354905), i = this.md5_ii(i, n, o, a, e[r + 5], 21, -57434055),
                        a = this.md5_ii(a, i, n, o, e[r + 12], 6, 1700485571), o = this.md5_ii(o, a, i, n, e[r + 3], 10, -1894986606),
                        n = this.md5_ii(n, o, a, i, e[r + 10], 15, -1051523), i = this.md5_ii(i, n, o, a, e[r + 1], 21, -2054922799),
                        a = this.md5_ii(a, i, n, o, e[r + 8], 6, 1873313359), o = this.md5_ii(o, a, i, n, e[r + 15], 10, -30611744),
                        n = this.md5_ii(n, o, a, i, e[r + 6], 15, -1560198380), i = this.md5_ii(i, n, o, a, e[r + 13], 21, 1309151649),
                        a = this.md5_ii(a, i, n, o, e[r + 4], 6, -145523070), o = this.md5_ii(o, a, i, n, e[r + 11], 10, -1120210379),
                        n = this.md5_ii(n, o, a, i, e[r + 2], 15, 718787259), i = this.md5_ii(i, n, o, a, e[r + 9], 21, -343485551),
                        a = this.safe_add(a, s), i = this.safe_add(i, l), n = this.safe_add(n, p), o = this.safe_add(o, u);
                }
                return [a, i, n, o];
            }, e.prototype.md5_cmn = function(e, t, a, i, n, o) {
                return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(i, o)), n), a);
            }, e.prototype.md5_ff = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t & a | ~t & i, e, t, n, o, r);
            }, e.prototype.md5_gg = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t & i | a & ~i, e, t, n, o, r);
            }, e.prototype.md5_hh = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(t ^ a ^ i, e, t, n, o, r);
            }, e.prototype.md5_ii = function(e, t, a, i, n, o, r) {
                return this.md5_cmn(a ^ (t | ~i), e, t, n, o, r);
            }, e.prototype.safe_add = function(e, t) {
                var a = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a;
            }, e.prototype.bit_rol = function(e, t) {
                return e << t | e >>> 32 - t;
            }, e;
        }();
        a.MD5 = i;
    }, {}],
    22: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.mWriteBox = ["wxf77fb880cddf362c", "wx4e24f1dbac6b54bb", "wxdd8d2e22b81eb6e7", "wx368efd3d253d9f9c", "wxd5c1f9da7d66191e", "wxd2c0911129978e05", "wx347553459e2b6490", "wx642d9c05ee59170a", "wx214d9b691e5b328b", "wxaa46e77919aec8d9"],
                e;
        }();
        a.WriteBoxList = i;
        var n = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    t.pos(0, 0), t.size(182, 250);
                    var a = new Laya.Image();
                    a.name = "mBack", a.anchorX = .5, a.anchorY = .5, a.pos(91, 75), a.size(150, 150),
                        t.addChild(a), a.skin = r.cdnface + "main/bk1.png";
                    var i = new Laya.Image();
                    i.name = "mBack2", i.anchorX = .5, i.anchorY = .5, i.pos(91, 75), i.size(150, 150),
                        t.addChild(i);
                    var n = new Laya.Label();
                    n.name = "GameName", n.color = "#000000", n.fontSize = 25, n.centerX = 0, n.y = 165,
                        t.addChild(n);
                    var o = new Laya.Label();
                    return o.name = "PlayNum", o.color = "#000000", o.fontSize = 18, o.centerX = 0,
                        o.y = 206, t.addChild(o), t;
                }
                return __extends(t, e), t;
            }(Laya.Box),
            o = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.initCode = function() {
                    this.mNoIcon = new Laya.Label(), this.mNoIcon.pos(10, 18), this.mNoIcon.size(5, 25),
                        this.mNoIcon.bgColor = "#FFA650", this.addChild(this.mNoIcon), this.mIcon = new Laya.Image(),
                        this.mIcon.pos(25, 12), this.mIcon.size(40, 40), this.addChild(this.mIcon), this.mName = new Laya.Label(),
                        this.mName.pos(30, 18), this.mName.size(180, 25), this.mName.color = "#000000",
                        this.mName.bold = !0, this.mName.fontSize = 25, this.addChild(this.mName), this.mList = new Laya.List(),
                        this.mList.pos(10, 70), this.mList.size(730, 230), this.mList.spaceX = 0, this.mList.itemRender = n,
                        this.addChild(this.mList);
                }, t;
            }(Laya.Image),
            r = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.mIconJumpData = null, t.mNextShowGroup = 0, t.mStartGroupY = 0, t.mShowGameAppid = "",
                        t.mGoGame = null, t.mWxMenuButtonRect = null, t.width = Laya.stage.width, t.height = Laya.stage.height,
                        t.x = Laya.stage.width, t;
                }
                return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.prototype.getMenuButtonTop_CenterPoint = function() {
                        var e = new Laya.Point(0, 0);
                        if (Laya.Browser.onMiniGame) {
                            if (t.mWxVer >= "2.1.0" && null == this.mWxMenuButtonRect && null != wx.getMenuButtonBoundingClientRect()) {
                                var a = wx.getMenuButtonBoundingClientRect();
                                null != a && NaN != a.height && void 0 != a.height && null != a.height && (this.mWxMenuButtonRect = a);
                            }
                            if (null != this.mWxMenuButtonRect) {
                                var i = this.mWxMenuButtonRect.height,
                                    n = this.mWxMenuButtonRect.top;
                                return e.x = n * Laya.stage.height / t.mPhone.screenHeight, e.y = i * Laya.stage.height / t.mPhone.screenHeight,
                                    e;
                            }
                        }
                        return e;
                    }, t.getJSON = function(e) {
                        if ("" == e || null == e) return {
                            code: -999
                        };
                        var t = e.indexOf("{", 0);
                        return e = e.substr(t, e.length - t), JSON.parse(e);
                    }, t.onBtnMouseDown = function(e) {
                        e.scale(1.05, 1.05);
                    }, t.onBtnMouseOut = function(e) {
                        e.scale(1, 1);
                    }, t.registImgBtnClick = function(e, t, a, i) {
                        void 0 === a && (a = null), void 0 === i && (i = !0), null == a && (a = this), i && (e.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMouseDown, [e]),
                                e.on(Laya.Event.MOUSE_UP, this, this.onBtnMouseOut, [e]), e.on(Laya.Event.MOUSE_OUT, this, this.onBtnMouseOut, [e])),
                            e.on(Laya.Event.CLICK, a, function(e) {
                                null != t && (null == t.args ? t.args = [e] : t.args.push(e), t.run());
                            });
                    }, t.InitServerListEx = function(e, a) {
                        if (t.mType = 2, t.mGameName = a, null == t.mSelf) {
                            if (Laya.Browser.onMiniGame && (t.mPhone = wx.getSystemInfoSync()), Laya.Browser.onMiniGame) {
                                (t.mPhone.model.indexOf("iPhone X") >= 0 || Number(t.mPhone.screenHeight) >= 812) && (t.iphoneX = !0),
                                t.mWxVer = t.mPhone.SDKVersion;
                            }
                            (t.mSelf = new t()).x = 2 == t.mType ? Laya.stage.width + 10 : -Laya.stage.width - 10,
                                t.mSelf.zOrder = 9, t.mSelf.visible = !1, t.mSelf.onInit_GoGame(), Laya.stage.addChild(t.mSelf),
                                t.mMoreList = e, t.InitData(), t.mSelf.onInit(), console.log("InitServerListEx...............");
                        }
                    }, t.InitData = function() {
                        t.mGroupList = [];
                        for (var e = null, a = 0; a < t.mMoreList.length; ++a) {
                            if (void 0 == t.mMoreList[a].groupid) return;
                            e != t.mMoreList[a].groupid && (t.mGroupList.push([]), e = t.mMoreList[a].groupid),
                                t.mGroupList[t.mGroupList.length - 1].push(t.mMoreList[a]);
                        }
                        console.log("InitGroup : ", t.mGroupList);
                    }, t.ShowList = function(e, a, i, n, o, r, s) {
                        if (t.mCloseHandler = o, t.mJumpHandle = s, i.length > 0 && (t.mJumpWrite = i),
                            console.log("MG : ", n, i, a), n.length > 0) {
                            for (var l = !1, p = 0; p < e.length; ++p) {
                                if ((u = (c = e[p]).appid.toUpperCase()) == (m = n.trim().toUpperCase())) {
                                    if (3 == c.jump_type) return console.log("MG : GoToJump_3", n), l = !0, void t.jumpToGame_3(c, function() {
                                        t.ShowList3(e, a, n, o, r);
                                    }, function() {
                                        null != t.mCloseHandler && t.mCloseHandler.run();
                                    });
                                    break;
                                }
                            }
                            if (console.log("MG : ", n, l), 0 == l) {
                                if (!Laya.Browser.onIOS)
                                    for (p = 0; p < i.length; ++p) {
                                        var u = i[p].toUpperCase(),
                                            m = n.trim().toUpperCase();
                                        if (u == m) {
                                            for (var d = {}, h = 0; h < e.length; ++h) {
                                                var f = e[h];
                                                if (f.appid.toUpperCase() == n.trim().toUpperCase()) {
                                                    d = f;
                                                    break;
                                                }
                                            }
                                            l = !0;
                                            var c = {};
                                            c.id = d.id, c.path = "", c.param = d.param, c.appid = "", c.name = "", c.box_appid = n,
                                                c.box_path = "pages/index/index?", console.log("MG : ToJump3 : ", c), t.jumpToGame_3(c, function() {
                                                    t.ShowList3(e, a, n, o, r);
                                                }, function() {
                                                    null != t.mCloseHandler && t.mCloseHandler.run();
                                                });
                                        }
                                    }
                                0 == l && t.ShowList3(e, a, n, o, r);
                            }
                        } else t.ShowList3(e, a, n, o, r);
                    }, t.ShowList3 = function(e, a, i, n, o) {
                        if (void 0 === o && (o = 9), Laya.Browser.onMiniGame && wx.showLoading({
                                title: "资源加载中",
                                mask: !0
                            }), null == t.mSelf ? e.length > 0 && t.InitServerListEx(e, a) : Laya.timer.once(300, t.mSelf, t.mSelf.latterLoadicon2, [], !0),
                            null != t.mSelf) {
                            t.iphoneX && (t.mSelf.mTitle.top = 60, t.mSelf.mPanel.top = t.mSelf.mTitle.top + 100);
                            var r = t.mSelf.getMenuButtonTop_CenterPoint();
                            r.x > 0 ? (t.mSelf.mTitle.top = r.x + r.y / 2 - t.mSelf.mTitle.height / 2, t.mSelf.mPanel.top = t.mSelf.mTitle.top + 100,
                                    console.log("use getMenuButtonTop_CanterPoint . ", r)) : console.log("no use getMenuButtonTop_CanterPoint . ", r),
                                t.mSelf.mShowGameAppid = i, t.mSelf.zOrder = o, t.mSelf.visible = !0, t.mSelf.ShowAllGames2(),
                                t.checkLoadIconCount();
                        }
                    }, t.checkLoadIconCount = function() {
                        t.latterRunShowTween();
                    }, t.latterRunShowTween = function() {
                        Laya.Browser.onMiniGame && wx.hideLoading(), Laya.timer.callLater(t.mSelf, function() {
                            2 == t.mType ? (t.mSelf.x = Laya.stage.width + 10, Laya.Tween.to(t.mSelf, {
                                x: 0
                            }, 350, null, new Laya.Handler(this, function() {
                                t.mSelf.ShowGameApp();
                            }))) : (t.mSelf.x = -Laya.stage.width - 10, Laya.Tween.to(t.mSelf, {
                                x: 0
                            }, 350, null, new Laya.Handler(this, function() {
                                t.mSelf.ShowGameApp();
                            })));
                        });
                    }, t.GetIndexList = function(e) {
                        for (var t = [], a = 0; a < e.length; ++a) 1 == Number(e[a].show_index) && String(e[a].url_btn).toString().length > 10 && String(e[a].url_result).toString().length > 10 && t.push(e[a]);
                        return t;
                    }, t.GetIndexRandom = function(e) {
                        var a = t.GetIndexList(e);
                        if (a.length > 0) {
                            var i = a[t.getRandom(0, a.length - 1)];
                            if (void 0 != i) return i;
                        }
                        return null;
                    }, t.GetIndexRandomList = function(e, a) {
                        var i = [],
                            n = t.GetIndexList(e);
                        if (n.length > 0)
                            for (; a > 0 && n.length > 0;) {
                                var o = n.splice(t.getRandom(0, n.length - 1), 1);
                                i.push(o[0]), a--;
                            }
                        return i;
                    }, t.CloseList = function() {
                        null != t.mSelf && (2 == t.mType ? Laya.Tween.to(t.mSelf, {
                            x: Laya.stage.width + 10
                        }, 420, null, new Laya.Handler(this, function() {
                            t.mSelf.visible = !1, null != t.mCloseHandler && (t.mCloseHandler.once = !0, t.mCloseHandler.run(),
                                t.mCloseHandler = null);
                        })) : Laya.Tween.to(t.mSelf, {
                            x: -Laya.stage.width - 10
                        }, 420, null, new Laya.Handler(this, function() {
                            t.mSelf.visible = !1, null != t.mCloseHandler && (t.mCloseHandler.once = !0, t.mCloseHandler.run(),
                                t.mCloseHandler = null);
                        })));
                    }, t.prototype.onInit_GoGame = function() {
                        var e = this;
                        if (null == this.mGoGame) {
                            this.mGoGame = new Laya.Image(), this.mGoGame.size(this.width, this.height), this.mGoGame.pos(0, 0);
                            var a = new Laya.Label();
                            a.left = 0, a.right = 0, a.top = 0, a.bottom = 0, a.bgColor = "#000000", a.alpha = .5,
                                this.mGoGame.addChild(a), a.on(Laya.Event.CLICK, a, function() {
                                    e.mGoGame.visible = !1;
                                });
                            var i = new Laya.Image();
                            i.name = "GameNameBack", i.size(550, 680), i.mouseEnabled = !0, i.mouseThrough = !1,
                                i.pos((this.width - i.width) / 2, (this.height - i.height) / 2), i.skin = t.cdnface + "main/bg.png",
                                this.mGoGame.addChild(i), a.on(Laya.Event.CLICK, a, function() {});
                            var n = new Laya.Image();
                            n.name = "StarBack", n.skin = t.cdnface + "main/popup_share_star.png", n.size(490, 271),
                                n.centerX = 0, n.y = 30, i.addChild(n), this.mIconMax = new Laya.Image(), this.mIconMax.name = "IconBack",
                                this.mIconMax.skin = t.cdnface + "main/bk2.png", this.mIconMax.size(180, 180), this.mIconMax.centerX = 0,
                                this.mIconMax.centerY = 15, n.addChild(this.mIconMax);
                            var o = new Laya.Image();
                            o.pos(0, 0), o.size(180, 180), o.skin = t.cdnface + "main/180s.png", this.mIconMax.addChild(o),
                                this.mIconName = new Laya.Label(), this.mIconName.size(490, 40), this.mIconName.centerX = 0,
                                this.mIconName.y = n.y + n.height + 10, this.mIconName.align = "center", this.mIconName.fontSize = 36,
                                this.mIconName.color = "#332E4D", this.mIconName.bold = !0, i.addChild(this.mIconName),
                                this.mIconTips = new Laya.Label(), this.mIconTips.size(470, 80), this.mIconTips.centerX = 0,
                                this.mIconTips.y = n.y + n.height + 70, this.mIconTips.align = "center", this.mIconTips.fontSize = 26,
                                this.mIconTips.color = "#A1A1B3", this.mIconTips.bold = !1, this.mIconTips.wordWrap = !0,
                                this.mIconTips.leading = 5, i.addChild(this.mIconTips), this.mIconGoGame = new Laya.Image(),
                                this.mIconGoGame.skin = t.cdnface + "main/popup_btn_begin.png", this.mIconGoGame.size(360, 80),
                                this.mIconGoGame.centerX = 0, this.mIconGoGame.y = this.mIconTips.y + this.mIconTips.height + 45,
                                i.addChild(this.mIconGoGame), this.mIconBottom = new Laya.Label(), this.mIconBottom.size(470, 80),
                                this.mIconBottom.centerX = 0, this.mIconBottom.y = this.mIconGoGame.y + this.mIconGoGame.height + 20,
                                this.mIconBottom.align = "center", this.mIconBottom.fontSize = 24, this.mIconBottom.color = "#8A91E6",
                                this.mIconBottom.text = "和好友一起玩吧", i.addChild(this.mIconBottom);
                            var r = new Laya.Image();
                            r.size(100, 100), r.right = 0, r.top = 0, t.registImgBtnClick(r, new Laya.Handler(this, function(t) {
                                t.stopPropagation(), e.mGoGame.visible = !1;
                            }));
                            var s = new Laya.Image();
                            s.name = "IconBack", s.skin = t.cdnface + "main/close.png", s.size(30, 30), s.right = 20,
                                s.top = 20, i.addChild(s), i.addChild(r), t.registImgBtnClick(this.mIconGoGame, new Laya.Handler(this, function(t) {
                                    t.stopPropagation(), e.jumpToGameFromData(e.mIconJumpData), e.mGoGame.visible = !1;
                                })), this.mGoGame.visible = !1, this.addChild(this.mGoGame);
                        }
                    }, t.prototype.onInit = function() {
                        if (0 == t.mMoreList.length) return t.mSelf.visible = !1, void console.log("No More GameList ... ");
                        this.mPanel.vScrollBarSkin = "", this.mPanel.hScrollBarSkin = void 0, this.mBack.skin = t.cdnface + "main/head_btn_back1.png",
                            this.mGameName.text = t.mGameName, t.registImgBtnClick(this.mBack, new Laya.Handler(this, function(e) {
                                e.stopPropagation(), t.CloseList();
                            })), t.registImgBtnClick(this.mBack2, new Laya.Handler(this, function(e) {
                                e.stopPropagation(), t.CloseList();
                            }));
                    }, t.prototype.AddOneGroupPage = function() {
                        if (this.mNextShowGroup < t.mGroupList.length) {
                            var e = new o();
                            e.initCode(), this.mPanel.addChild(e);
                            var a = t.mGroupList[this.mNextShowGroup];
                            if (e.y = this.mStartGroupY, e.x = 0, e.height = this.mPanel.height, this.init_page_game(e, a),
                                this.mStartGroupY += e.height, console.log("changeHandler : ", this.mPanel.vScrollBar.max, this.mNextShowGroup, t.mGroupList.length),
                                this.mNextShowGroup == t.mGroupList.length - 1) {
                                var i = new Laya.Label();
                                i.text = "别扯了，已经到底了...", i.size(470, 300), i.centerX = 0, i.y = e.y + e.height + 10,
                                    i.align = "center", i.fontSize = 24, i.color = "#8A91E6", this.mPanel.addChild(i);
                            }
                            if (++this.mNextShowGroup, e.y + e.height > 1500) return !1;
                        }
                        return !0;
                    }, t.prototype.ShowAllGames = function() {
                        if (0 == this.mNextShowGroup) {
                            for (this.mPanel.removeChildren(), this.mStartGroupY = 0, console.log("start : ", this.mNextShowGroup, t.mGroupList.length),
                                this.mNextShowGroup = 0; this.mNextShowGroup < t.mGroupList.length;) this.AddOneGroupPage();
                            this.mPanel.refresh();
                        }
                    }, t.prototype.ShowAllGames2 = function() {
                        0 == this.mNextShowGroup && (this.mPanel.removeChildren(), this.mStartGroupY = 0,
                            Laya.timer.once(200, this, this.ShowNextGroup));
                    }, t.prototype.ShowNextGroup = function() {
                        this.mNextShowGroup < t.mGroupList.length ? (this.AddOneGroupPage(), this.mPanel.refresh(),
                            Laya.timer.once(300, this, this.ShowNextGroup), console.log("show group : ", this.mNextShowGroup, t.mGroupList.length)) : console.log("group show over .");
                    }, t.prototype.ShowGameApp = function() {
                        this.mIconJumpData = null;
                        for (var e = 0; e < t.mMoreList.length; ++e) {
                            if (t.mMoreList[e].appid.trim().toUpperCase() == t.mSelf.mShowGameAppid.trim().toUpperCase()) {
                                this.mIconJumpData = t.mMoreList[e];
                                break;
                            }
                        }
                        null != this.mIconJumpData ? (this.mIconMax.skin = this.mIconJumpData.url_icon,
                            this.mIconName.text = this.mIconJumpData.name, this.mIconTips.text = this.mIconJumpData.msg,
                            this.mGoGame.visible = !0) : null != this.mGoGame && (this.mGoGame.visible = !1);
                    }, t.prototype.drawCircleRect = function(e, t, a, i, n, o, r, s, l) {
                        void 0 === s && (s = 0), void 0 === l && (l = "");
                        var p = [
                            ["moveTo", o, 0],
                            ["arcTo", i, 0, i, o, o],
                            ["arcTo", i, n, i - o, n, o],
                            ["arcTo", 0, n, 0, n - o, o],
                            ["arcTo", 0, 0, o, 0, o]
                        ];
                        s > 0 ? e.drawPath(t, a, p, {
                            fillStyle: r
                        }, {
                            strokeStyle: l,
                            lineWidth: s.toString()
                        }) : e.drawPath(t, a, p, {
                            fillStyle: r
                        });
                    }, t.prototype.init_page_game = function(e, a) {
                        e.mName.text = a[0].groupname;
                        var i = a[0].groupicon;
                        if (i.length > 10 ? (e.mNoIcon.visible = !1, e.mIcon.visible = !0, e.mIcon.skin = i,
                                e.mName.x = e.mIcon.x + e.mIcon.width + 10) : (e.mNoIcon.visible = !0, e.mIcon.visible = !1,
                                e.mName.x = e.mIcon.x), Laya.stage.width > Laya.stage.height) {
                            var n = Laya.stage.width;
                            1 == t.iphoneX && (n = Laya.stage.width - 60);
                            var o = Math.floor(n / 182);
                            e.width = Laya.stage.width, e.mList.width = 182 * o, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                            r = e.mList.x - e.mNoIcon.x;
                            e.mNoIcon.x += r, e.mIcon.x += r, e.mName.x += r, e.mList.repeatX = o, e.mList.repeatY = Math.ceil(a.length / o);
                        } else if (Laya.stage.width <= 728) {
                            e.mList.repeatX = 3, e.mList.repeatY = Math.ceil(a.length / 3), e.width = Laya.stage.width,
                                e.mList.width = 546, e.mList.x = (Laya.stage.width - e.mList.width) / 2;
                            var r = e.mList.x - e.mNoIcon.x;
                            e.mNoIcon.x += r, e.mIcon.x += r, e.mName.x += r;
                        } else e.mList.repeatX = 4, e.mList.repeatY = Math.ceil(a.length / 4);
                        e.height = 70 + 250 * e.mList.repeatY, e.mList.selectEnable = !0, e.mList.renderHandler = new Laya.Handler(this, this.onListRender),
                            e.mList.mouseHandler = new Laya.Handler(this, this.listmouse), e.mList.array = a;
                    }, t.getRandom = function(e, t) {
                        return Math.round(Math.random() * (t - e)) + e;
                    }, t.prototype.onListRender = function(e, a) {
                        var i = e.dataSource,
                            n = e.getChildByName("GameName"),
                            o = e.getChildByName("PlayNum"),
                            r = e.getChildByName("mBack2");
                        n.text = i.name;
                        var s = Number(i.base);
                        if (void 0 == i.basenum || 0 == Number(i.basenum)) {
                            var l = s - s / 10,
                                p = s + s / 10;
                            i.basenum = Math.floor(t.getRandom(l, p) / 1e4);
                        }
                        o.text = i.basenum + "万人在玩", t.mListSrcs.push([r, i.url_icon + "?t=" + i.updated_time]),
                            1 == t.mListSrcs.length && Laya.timer.once(300, this, this.latterLoadicon2, [], !0),
                            t.registImgBtnClick(r, null, this);
                    }, t.prototype.latterLoadicon2 = function() {
                        if (Laya.loader.retryNum = 10, (0 != t.mListSrcs.length || 0 != t.mListSrcs2.length) && 0 != t.mSelf.visible) {
                            var e = null,
                                a = "";
                            if (t.mListSrcs.length > 0) {
                                e = (n = t.mListSrcs.shift())[0], a = n[1], t.mListSrcs2.push([e, a]);
                            } else {
                                if (!(t.mReloadCount <= 1 && t.mListSrcs2.length > 0)) return;
                                t.mListSrcs = t.mListSrcs2, t.mListSrcs2 = [], t.mReloadCount++;
                                var i = t.mListSrcs.length;
                                console.log("reload count = ", i);
                                var n = t.mListSrcs.shift();
                                e = n[0], a = n[1], t.mListSrcs2.push([e, a]);
                            }
                            if (0 == e.numChildren) {
                                var o = new Laya.Image();
                                o.pos(0, 0), o.size(150, 150), o.skin = t.cdnface + "main/150s.png", e.addChild(o);
                            }
                            e.loadImage(a, new Laya.Handler(this, function() {
                                for (var e = [], i = 0; i < t.mListSrcs2.length; ++i) t.mListSrcs2[i][1] != a && e.push(t.mListSrcs2[i]);
                                t.mListSrcs2 = e, t.mLoadCount++, t.mSelf.latterLoadicon2(), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0);
                            })), Laya.timer.once(2e3, this, this.latterLoadicon2, [], !0);
                        }
                    }, t.prototype.latterLoadicon = function(e, a) {
                        if (Laya.loader.retryNum = 10, e.skin = a, e.size(150, 150), 0 == e.numChildren) {
                            var i = new Laya.Image();
                            i.pos(0, 0), i.size(150, 150), i.skin = t.cdnface + "main/150s.png", e.addChild(i);
                        }
                    }, t.prototype.listmouse = function(e, t) {
                        if (e.type == Laya.Event.CLICK) {
                            var a = e.currentTarget.dataSource;
                            "mBack2" == e.target.name && (e.stopPropagation(), this.jumpToGameFromData(a));
                        }
                    }, t.prototype.isJumpWriteList = function(e) {
                        for (var a = !1, i = 0; i < t.mJumpWrite.length; ++i) {
                            t.mJumpWrite[i].trim().toUpperCase() == e.trim().toUpperCase() && (a = !0);
                        }
                        return a;
                    }, t.prototype.jumpToGameFromData = function(e) {
                        if (null != e && Laya.Browser.onMiniGame) {
                            var a = e.path,
                                i = e.param,
                                n = e.appid,
                                o = n,
                                r = n.split("?");
                            2 == r.length && (o = r[0]);
                            var s = n.split("&");
                            2 == s.length && (o = s[0]);
                            var l = Number(e.jump_type),
                                p = "https://tcdn.wanzhushipin.cn/xcx/set/qrcode/" + o + ".jpg?t=" + e.updated_time;
                            if (void 0 != e.big_url && (p = e.big_url), console.log("list click : ", e, p),
                                a.length < 5 && (a = "pages/index/index"), Laya.Browser.onMiniGame)
                                if (t.mWxVer >= "2.2.0") {
                                    var u = function(a) {
                                            String(a.errMsg).indexOf(":fail cancel") <= 0 ? (wx.previewImage({
                                                urls: [p]
                                            }), console.log("跳转错误：显示二维码：", n, e.name, a.errMsg), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run())) : (console.log("用户取消：", n, e.name, a.errMsg), t.mJumpHandle && (t.mJumpHandle.args = [2, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run()));
                                        },
                                        m = function(a) {
                                            console.log("跳转成功", n, e.name, a), t.mJumpHandle && (t.mJumpHandle.args = [1, Number(e.id), l >= 2, !0],
                                                t.mJumpHandle.run());
                                        };
                                    if (this.isJumpWriteList(n)) return wx.navigateToMiniProgram({
                                        appId: n,
                                        path: a + "?" + i,
                                        fail: u,
                                        success: m
                                    }), void console.log("在列表中直接跳转：", n, e.name, a);
                                    if (0 == l) wx.previewImage({
                                        urls: [p],
                                        success: function(e) {
                                            console.log("预览图片成功");
                                        }
                                    }), console.log("二维码显示：", n, e.name, l), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), !1, !0],
                                        t.mJumpHandle.run());
                                    else if (1 == l) wx.navigateToMiniProgram({
                                        appId: n,
                                        path: a + "?" + i,
                                        fail: u,
                                        success: m
                                    }), console.log("直接跳转：", n, e.name, a + "?" + i);
                                    else if (l >= 2) {
                                        var d = String(e.box_appid);
                                        if (d.length < 12) wx.navigateToMiniProgram({
                                            appId: n,
                                            path: a + "?" + i,
                                            fail: u,
                                            success: m
                                        }), console.log("直接跳转：盒子appid错误", n, e.name, a + "?" + i, d);
                                        else {
                                            var h = String(e.box_path);
                                            h.length < 5 ? h = a.indexOf("?") < 0 ? a + "?" + e.param : a + e.param : h.indexOf("?") < 0 ? h += "?" + e.param : h += e.param,
                                                h.indexOf("target=") < 0 && (h += "&target=" + n), wx.navigateToMiniProgram({
                                                    appId: d,
                                                    path: h,
                                                    fail: u,
                                                    success: m
                                                }), console.log("盒子跳转：", n, e.name, h, d);
                                        }
                                    }
                                } else wx.previewImage({
                                        urls: [p],
                                        success: function(e) {
                                            console.log("预览图片成功");
                                        }
                                    }), t.mJumpHandle && (t.mJumpHandle.args = [3, Number(e.id), !1, !0], t.mJumpHandle.run()),
                                    console.log("版本不支持。显示二维码", n, e.name);
                            else console.log("请在微信中测试跳转：", n, e.name, a);
                        }
                    }, t.jumpToGame_3 = function(e, a, i) {
                        var n = e.path,
                            o = e.param,
                            r = e.appid,
                            s = String(e.box_appid);
                        n.length < 5 && (n = "pages/index/index"), 0 == o.indexOf("?") && o.substr(1);
                        var l = String(e.box_path);
                        l.length < 5 ? l = n.indexOf("?") < 0 ? n + "?" + o : n + o : l.indexOf("?") < 0 ? l += "?" + o : l += o,
                            l.indexOf("target=") < 0 && (l += "&target=" + r);
                        Laya.Browser.onMiniGame && wx.navigateToMiniProgram({
                            appId: s,
                            path: l,
                            success: function(a) {
                                console.log("跳转成功", r, e.name, a), null != i && i(), t.mJumpHandle && (t.mJumpHandle.args = [1, Number(e.id), !1, !1],
                                    t.mJumpHandle.run());
                            },
                            fail: function(n) {
                                String(n.errMsg).indexOf(":fail cancel") <= 0 ? (null != a && a(), t.mJumpHandle && (t.mJumpHandle.args = [0, Number(e.id), !1, !1],
                                    t.mJumpHandle.run())) : (console.log("用户取消", r, e.name, n.errMsg), null != i && i(),
                                    t.mJumpHandle && (t.mJumpHandle.args = [2, Number(e.id), !1, !1], t.mJumpHandle.run()));
                            }
                        }), console.log("直接盒子跳转：", r, e.name, l, s);
                    }, t.mSelf = null, t.mVer = "", t.mGameName = "", t.mJumpWrite = [], t.mWxVer = "",
                    t.mMoreList = [], t.mGroupList = [], t.mServerUrl = "", t.mType = 0, t.mPhone = {},
                    t.iphoneX = !1, t.cdnface = "https://tcdn.wanzhushipin.cn/xcx/more/", t.mListSrcs = [],
                    t.mListSrcs2 = [], t.mReloadCount = 0, t.mLoadCount = 0, t.uiView = {
                        type: "View",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            height: 1334
                        },
                        child: [{
                            type: "Label",
                            props: {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                bgColor: "#ffffff"
                            }
                        }, {
                            type: "Image",
                            props: {
                                var: "mTitle",
                                right: 0,
                                left: 0,
                                height: 100
                            },
                            child: [{
                                type: "Image",
                                props: {
                                    y: -61,
                                    x: 0,
                                    width: 166,
                                    var: "mBack2",
                                    height: 161
                                }
                            }, {
                                type: "Image",
                                props: {
                                    x: 20,
                                    width: 44,
                                    var: "mBack",
                                    height: 44,
                                    centerY: 0
                                }
                            }, {
                                type: "Label",
                                props: {
                                    y: 30,
                                    var: "mGameName",
                                    text: "神手游戏",
                                    fontSize: 40,
                                    color: "#332E4D",
                                    centerX: 0,
                                    bold: !0
                                }
                            }]
                        }, {
                            type: "Panel",
                            props: {
                                var: "mPanel",
                                top: 100,
                                right: 0,
                                left: 0,
                                bottom: 0
                            }
                        }]
                    }, t;
            }(Laya.View);
        a.MoreGame = r;
    }, {}],
    23: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function() {
                function e(e) {
                    this.IS_OPEN = !1, this.BOX_TEST = !1, this.GAME_NUM_TEST = !1, this.MULTI_ICON_TEST = !1,
                        this.isEven = !1, this.isAniTest = 0;
                    var t = Number(e.uid);
                    this.isEven = t % 2 == 0;
                    var a, n = 0;
                    i.default.app.mWX.mOnOff.forEach(function(e) {
                        "of_icon_type" == e.key && (n = Number(e.value), a = Number(JSON.parse(e.param).item));
                    }), 0 == n ? this.isAniTest = t % 3 : 1 == n && (this.isAniTest = a);
                }
                return Object.defineProperty(e.prototype, "isOpen", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.IS_OPEN;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isBoxTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.BOX_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isGameNumTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.GAME_NUM_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isMultiIconTest", {
                    get: function() {
                        return 1 == i.default.app.mWX.fhOnoff && this.MULTI_ICON_TEST;
                    },
                    enumerable: !0,
                    configurable: !0
                }), e;
            }();
        a.OddEvenTestModel = n;
    }, {
        "../Main": 14
    }],
    24: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./MoreGame"),
            n = e("../Main"),
            o = e("../script/MyLikeView2"),
            r = function() {
                function e() {}
                return e.showBoxPage = function(t, a, n, o) {
                    void 0 === o && (o = 0), e.showBefore() && i.MoreGame.ShowList(a, n, i.WriteBoxList.mWriteBox, t, new Laya.Handler(this, e.CloseBox), o, new Laya.Handler(this, e.JumpInfo));
                }, e.showBefore = function() {
                    return !0;
                }, e.CloseBox = function() {}, e.JumpInfo = function(t, a, r, s) {
                    if (console.log("跳转结果：", t, a, r, s), e.isClickJump = !0, 1 == t) {
                        console.log("-- 允许直跳后 --", n.default.app.clickAppId, n.default.app.clickGameId, n.default.app.clickFromPage);
                        for (f = 0; f < i.WriteBoxList.mWriteBox.length; ++f) {
                            if (n.default.app.clickAppId.toUpperCase() == i.WriteBoxList.mWriteBox[f].toUpperCase()) {
                                -1 == n.default.app.clickLikeArr.indexOf(n.default.app.clickGameId) && n.default.app.clickLikeArr.push(String(n.default.app.clickGameId));
                                var l = JSON.stringify(n.default.app.clickLikeArr);
                                n.default.app.mWX.setUserValue("clickLikeArr", l), console.log("-- 允许直跳后 本地保存 --", n.default.app.clickLikeArr);
                                break;
                            }
                        }
                    }
                    for (var p = 0, u = "", m = 0, d = 0, h = 1, f = 0; f < n.default.app.mWX.mGamesBox.length; ++f) Number(n.default.app.mWX.mGamesBox[f].id) == a && (p = Number(n.default.app.mWX.mGamesBox[f].gameid),
                        u = n.default.app.mWX.mGamesBox[f].name, m = Number(n.default.app.mWX.mGamesBox[f].jump_type),
                        d = Number(n.default.app.mWX.mGamesBox[f].appid), 1 == n.default.app.mWX.moreFenFaNum ? h = 1 : n.default.app.mWX.moreFenFaNum >= 1 ? h = JSON.parse(n.default.app.mWX.mGamesBox[f].anim_config).millisecond_static.split(",").length > 1 ? JSON.parse(n.default.app.mWX.mGamesBox[f].anim_config).millisecond_static.split(",").length : 1 : 0 == n.default.app.mWX.moreFenFaNum && (h = 0));
                    Laya.Browser.onIOS && (m = 1);
                    1 == e.isCallNavigation || 3 == e.isCallNavigation ? ("recom_icon_click", n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: [d],
                        position_type: "icon",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    })) : 2 == e.isCallNavigation || 4 == e.isCallNavigation || 5 == e.isCallNavigation || 6 == e.isCallNavigation || 7 == e.isCallNavigation || 9 == e.isCallNavigation ? ("recom_banner_click",
                        n.default.app.mWX.indexBpTotle("recom_click", {
                            game_show_list: o.default.showList,
                            position_type: "banner",
                            game_id: p,
                            jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                            is_success_direct: t,
                            gif_show: [u, h],
                            level: n.default.app.Level_num
                        })) : 8 == e.isCallNavigation ? n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.resultView ? n.default.app.resultView.result_showList : [],
                        position_type: "result_page",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    }) : 10 == e.isCallNavigation ? n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.baokuanlist,
                        position_type: "recommend_page",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    }) : 11 == e.isCallNavigation && n.default.app.mWX.indexBpTotle("recom_click", {
                        game_show_list: n.default.app.fakerxcxlist,
                        position_type: "app_list",
                        game_id: p,
                        jump_type: 1 == m ? "game" : 3 == m ? "box" : m,
                        is_success_direct: t,
                        gif_show: [u, h],
                        level: n.default.app.Level_num
                    });
                }, e.isCallNavigation = 0, e.isClickJump = !0, e;
            }();
        a.gameBox = r;
    }, {
        "../Main": 14,
        "../script/MyLikeView2": 34,
        "./MoreGame": 22
    }],
    25: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./wxCore"),
            n = e("../util/ConfigUtil"),
            o = function() {
                function e() {}
                return e.getArrayValueParam = function(e, t) {
                    if (null == e || typeof e != typeof []) return "";
                    for (var a = 0; a < e.length; ++a)
                        if (e[a].key == t) return e[a].param;
                    return "";
                }, e.getUrlParams = function(e, t) {
                    void 0 === t && (t = "1.0.1");
                    var a = !1,
                        o = new Array();
                    for (var r in e)
                        if ("string" == typeof e[r] || "number" == typeof e[r]) {
                            "tick" == r && (a = !0);
                            var s = r.toLocaleLowerCase();
                            e[s] = e[r], o.push(s);
                        }
                    if (0 == a) {
                        var l = new Date();
                        e.tick = Math.floor(l.getTime() / 1e3), o.push("tick");
                    }
                    o.sort(function(e, t) {
                        return e > t ? 1 : -1;
                    });
                    for (var p = "", u = 0; u < o.length; u++) p = p + o[u] + "=" + e[o[u]] + "&";
                    var m = "";
                    return m = null != n.ConfigUtil.mKeys[t] ? i.md5_hex.MD5(p + "key=" + n.ConfigUtil.mKeys[t]) : i.md5_hex.MD5(p + "key=wvkbfuhl"),
                        p + "key=" + m;
                }, e.getCDN = function() {
                    return "https://tcdn.wanzhushipin.cn/xcx/sf/";
                }, e.getJSON = function(e) {
                    if ("" == e || null == e) return {
                        code: -999
                    };
                    var t = e.indexOf("{", 0);
                    return e = e.substr(t, e.length - t), JSON.parse(e);
                }, e.getServer = function() {
                    return n.ConfigUtil.mURL;
                }, e;
            }();
        a.util = o;
    }, {
        "../util/ConfigUtil": 49,
        "./wxCore": 27
    }],
    26: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../util/ADUtil"),
            n = e("./wxMinPro"),
            o = e("./wxCore"),
            r = e("../Main"),
            s = e("../util/TimeUtil"),
            l = e("../util/ShareUtil"),
            p = function() {
                function e() {
                    this.tip = null;
                }
                return e.prototype.version = function() {
                    return "1.0.1";
                }, e.prototype.loginBtnPos = function() {
                    return 160;
                }, e.prototype.onBefore = function() {
                    return !1;
                }, e.prototype.onShow = function() {}, e.prototype.onReShow = function() {}, e.prototype.onLogin = function(e, t) {
                    return r.default.app.adUtil = new i.ADUtil(), r.default.app.mWX = new n.default(),
                        r.default.app.mWX.mUID = t.uid, r.default.app.mWX.mLaunch = o.default.uo.launch(),
                        r.default.app.mWX.onLaunch(o.default.uo.launch()), o.default.uo.initVideoAD(i.ADUtil.sDefaultVideoId),
                        r.default.app.mWX.initReturn(), !0;
                }, e.prototype.onEnterGame = function(e, t, a) {
                    console.log("123", e), console.log("234", t), console.log("345", a), null != r.default.app.mWX.mShareCallback && (l.ShareUtil.is_exit = !0,
                        "0" == r.default.app.mWX.getOnOffValueByKey("of_share_time") ? (r.default.app.mWX.mShareCallback(),
                            r.default.app.mWX.mShareCallback = null) : s.TimeUtil.getCurrTime() - r.default.app.mWX.mCallShareTime > r.default.app.mWX.getShareTimeByCount() ? (r.default.app.mWX.mShareCallback(),
                            r.default.app.mWX.mShareCallback = null, r.default.app.mWX.mShareCount++, r.default.app.mWX.mCallShareTime = 0) : r.default.app.is_share && Laya.timer.once(200, this, function() {
                            wx.showToast({
                                title: "分享到群生效",
                                icon: "none",
                                duration: 2e3,
                                false: function(e) {
                                    console.log(e);
                                },
                                success: function(e) {
                                    console.log(e);
                                }
                            });
                        }));
                }, e.prototype.onHideGame = function() {}, e.mIF = {
                    wxinfo: {
                        url: "1.0.1/qc/wxinfo?",
                        key: "1.0.1",
                        tips: "报告微信信息接口"
                    },
                    login: {
                        url: "1.0.1/qc/login?",
                        key: "1.0.1",
                        tips: "登录服务"
                    },
                    lauch: {
                        url: "1.0.1/qc/lauch?",
                        key: "1.0.1",
                        tips: "登录服务"
                    },
                    userinfo: {
                        url: "1.0.1/qc/userinfo?",
                        key: "1.0.1",
                        tips: "更新用户信息"
                    }
                }, e;
            }();
        a.wxCallBack = p;
    }, {
        "../Main": 14,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "../util/TimeUtil": 53,
        "./wxCore": 27,
        "./wxMinPro": 28
    }],
    27: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./wxCallBack"),
            n = e("./util"),
            o = e("./MD5"),
            r = e("./Base64"),
            s = e("../Main"),
            l = e("../util/TimeUtil"),
            p = function() {
                function e() {}
                return e.MD5 = function(e) {
                    return new o.MD5().hex_md5(e);
                }, e;
            }();
        a.md5_hex = p;
        var u = function() {
            function e() {
                this.version = "1.0.1", this.mLaunch = null, this.mWeUser = {}, this.mPhone = {},
                    this.mSDKVersion = "", this.iphoneX = !1, this.mCallBack = null, this.mHttpCall = null,
                    this.mLoginType = 1, this.mShowLogo = !0, this.btnLogin = null, this.zOrder = 123,
                    this.mFrist = !0, this.mInit = !1, this.mVideoAD = null, this.mNoVideo = !1, this.mIsNewUser = 0,
                    this.option123 = null, this.loginSession = null, this.first_share_from = null, this.sigh_id = null,
                    e.uo = this, console.log("wxcore.uo = " + e.uo), this.mCallBack = new i.wxCallBack();
            }
            return e.prototype.screenHeight = function() {
                return this.mPhone.screenHeight;
            }, e.prototype.IsXP = function() {
                return !!(Laya.Browser.onIOS && this.mPhone.screenWidth > 800);
            }, e.prototype.wxVersion = function() {
                return this.mSDKVersion;
            }, e.prototype.getUser = function() {
                return this.mWeUser;
            }, e.prototype.getUserID = function() {
                return Number(this.mWeUser.uid);
            }, e.prototype.phone = function() {
                return this.mPhone;
            }, e.prototype.launch = function() {
                return this.mLaunch;
            }, e.prototype.initWX = function(e, t, a) {
                void 0 === e && (e = 1), void 0 === t && (t = !0), void 0 === a && (a = 0), console.log("进入core"),
                    this.mPhone = wx.getSystemInfoSync();
                this.mPhone.model.indexOf("iPhone X") >= 0 && (this.iphoneX = !0), this.mSDKVersion = this.mPhone.SDKVersion;
                var i = wx.getLaunchOptionsSync();
                this.option123 = i.query;
                var n = {};
                if (n.query = i.query, n.scene = i.scene, n.shareTicket = i.shareTicket, n.isSticky = i.isSticky,
                    null != n.query.scene)
                    for (var o = decodeURIComponent(n.query.scene).split("&"), r = 0; r < o.length; r++) {
                        var s = o[r].split("=");
                        2 == s.length && (n.query[s[0]] = s[1]);
                    }
                this.mLaunch = n, this.mLoginType = e, this.mShowLogo = t, 1 == this.mCallBack.onBefore() && this.showLoading(),
                    Laya.timer.callLater(this, this.check);
            }, e.prototype.initWeb = function(e) {
                void 0 === e && (e = 0), 1 == this.mCallBack.onBefore() && this.showLoading();
            }, e.prototype.showLoading = function() {
                Laya.timer.callLater(this.mCallBack, this.mCallBack.onShow);
            }, e.prototype.clear = function() {}, e.prototype.showLoginBtn = function() {
                if (console.log("showLoginBtn"), null == this.btnLogin) {
                    this.btnLogin = wx.createUserInfoButton({
                        type: "image",
                        withCredentials: !1,
                        image: "",
                        style: {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        }
                    }), this.btnLogin.show(), console.log(this.btnLogin), this.btnLogin.onTap(function(t) {
                        void 0 !== t.userInfo ? (e.uo.btnLogin.destroy(), e.uo.initUser(t), e.uo.btnLogin = null) : wx.showToast({
                            title: "游戏需要您授权头像和用户名信息!",
                            icon: "success",
                            image: "",
                            duration: 2e3
                        });
                    });
                }
            }, e.prototype.check = function() {
                wx.checkSession({
                    success: function(t) {
                        console.log("checkSession ok"), e.uo.login();
                    },
                    fail: function(t) {
                        console.log("checkSession fail"), wx.removeStorageSync("user"), e.uo.login();
                    }
                });
            }, e.prototype.reLogin = function() {
                wx.removeStorageSync("user"), this.login();
            }, e.prototype.login = function() {
                var t = !0,
                    a = wx.getStorageSync("user");
                if ("object" == typeof a) {
                    var i = a.openid;
                    "" != i && null != i || (t = !1), ("" == a.uid || null == a.uid || Number(a.uid) < 1e4) && (t = !1);
                } else t = !1;
                t ? (e.uo.mWeUser = a, e.uo.checkCode("")) : wx.login({
                    success: function(t) {
                        e.uo.checkCode(t.code);
                    },
                    fail: function(t) {
                        console.log("login fail,try again"), Laya.timer.once(1e3, e.uo, e.uo.login);
                    }
                });
            }, e.prototype.checkCode = function(t) {
                var a = [];
                a.code = t, "" == t && (a.uid = e.uo.mWeUser.uid), void 0 !== this.mLaunch.query.uid && (a.master = this.mLaunch.query.uid),
                    void 0 !== this.mLaunch.query.agentid && (a.agentid = this.mLaunch.query.agentid),
                    void 0 !== this.mLaunch.query.adid && (a.adid = this.mLaunch.query.adid), a.ver = this.mCallBack.version(),
                    this.server(i.wxCallBack.mIF.login, a, function(t) {
                        if (console.log("用户登录返回数据", t), 0 == t.code) {
                            if (e.uo.loginSession = l.TimeUtil.getCurrTime(), null != e.uo.mWeUser && e.uo.mWeUser.uid == t.uid) {
                                if (e.uo.mWeUser.openid != t.openid) return void Laya.timer.once(100, e.uo, e.uo.reLogin);
                            } else e.uo.mWeUser = {}, e.uo.mWeUser.openid = t.openid, e.uo.mWeUser.uid = Number(t.uid);
                            1 == e.uo.mCallBack.onLogin(e.uo.mWeUser, t) ? e.uo.getUserInfo() : e.uo.init(),
                                console.log("openid", e.uo.mWeUser.openid, e.uo.mWeUser.uid);
                        } else Laya.timer.once(1e3, e.uo, e.uo.reLogin);
                    });
            }, e.prototype.getUserInfo = function() {
                if (2 == this.mLoginType) return e.uo.onEnter(null, this.mLaunch), void e.uo.init();
                wx.getUserInfo({
                    withCredentials: !1,
                    lang: "zh_CN",
                    success: function(t) {
                        console.log(t), e.uo.initUser(t);
                    },
                    fail: function(t) {
                        console.log(t), e.uo.mSDKVersion >= "2.0.1" ? (e.uo.showLoginBtn(), e.uo.mCallBack.onReShow()) : e.uo.wxAuthorize();
                    }
                });
            }, e.prototype.wxAuthorize = function() {
                wx.authorize({
                    scope: "scope.userInfo",
                    success: function(t) {
                        e.uo.getUserInfo();
                    },
                    fail: function(t) {
                        e.uo.openSeting();
                    }
                });
            }, e.prototype.openSeting = function() {
                var t = this;
                wx.showModal({
                    title: "提示",
                    content: "游戏需要您授权头像和用户名信息",
                    showCancel: !1,
                    cancelText: "取消",
                    confirmText: "确认",
                    success: function(a) {
                        wx.openSetting({
                            success: function(t) {
                                0 == t.authSetting["scope.userInfo"] ? e.uo.openSeting() : e.uo.getUserInfo();
                            },
                            fail: function(e) {
                                t.openSeting();
                            }
                        });
                    }
                });
            }, e.prototype.initUser = function(t) {
                var a = 0,
                    i = t.userInfo;
                console.log(i.avatarUrl, e.uo.mWeUser.avatarUrl, e.uo.mWeUser.nickName, i.nickName),
                    e.uo.mWeUser.nickName != i.nickName && (e.uo.mWeUser.nickName = i.nickName, a = 1);
                var n = i.avatarUrl;
                "0" == n.charAt(n.length - 1) && "/" == n.charAt(n.length - 2) && (n = n.substr(0, n.length - 2),
                        n += "/132"), e.uo.mWeUser.avatarUrl != n && (e.uo.mWeUser.avatarUrl = n, a = 1),
                    e.uo.mWeUser.gender = i.gender, e.uo.mWeUser.province = i.province, e.uo.mWeUser.city = i.city,
                    e.uo.mWeUser.country = i.country, 1 == a && e.uo.updateUserInfo(), wx.setStorageSync("user", e.uo.mWeUser),
                    e.uo.onEnter(null, this.mLaunch), e.uo.init();
            }, e.prototype.onEnter = function(e, t) {
                this.mCallBack.onEnterGame(this.mFrist, e, t), this.mFrist = !1;
            }, e.prototype.init = function() {
                0 == this.mInit && (s.default.app.mWX.displayGameClub(!0), wx.onShow(this.wxShow),
                    wx.onHide(this.wxHide), this.mInit = !0);
            }, e.prototype.wxShow = function(t) {
                console.log("默认隐藏"), console.log("达到"), console.log("进入:" + new Date().getTime()),
                    console.log(t);
                var a = {};
                if (a.query = t.query, a.scene = t.scene, a.shareTicket = t.shareTicket, a.isSticky = t.isSticky,
                    null != a.query.scene)
                    for (var i = decodeURIComponent(a.query.scene).split("&"), n = 0; n < i.length; n++) {
                        var o = i[n].split("=");
                        2 == o.length && (a.query[o[0]] = o[1]);
                    }
                if (1 == e.uo.mFrist) return e.uo.mLaunch = a, void e.uo.getUserInfo();
                var r = e.uo.mLaunch;
                e.uo.mLaunch = a, e.uo.onEnter(r, a);
            }, e.prototype.wxHide = function() {
                e.uo.mCallBack.onHideGame(), console.log("退出:" + new Date().getTime());
            }, e.prototype.updateUserInfo = function() {
                var t = {};
                t.uid = e.uo.mWeUser.uid, t.name = r.TsBase64.EncodeURI(this.mWeUser.nickName),
                    t.avatar = r.TsBase64.EncodeURI(this.mWeUser.avatarUrl), t.gender = e.uo.mWeUser.gender,
                    null != e.uo.mWeUser.province && "" != e.uo.mWeUser.province && (t.province = e.uo.mWeUser.province),
                    null != e.uo.mWeUser.city && "" != e.uo.mWeUser.city && (t.city = e.uo.mWeUser.city),
                    this.server(i.wxCallBack.mIF.userinfo, t, function(e) {
                        console.log("updateUserInfo..ok");
                    });
            }, e.prototype.server = function(t, a, i, o) {
                void 0 === o && (o = null), this.mHttpCall = new Laya.HttpRequest(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                    var a = null;
                    a = "string" == typeof t ? n.util.getJSON(t) : n.util.getJSON(e.uo.mHttpCall.data),
                        null != i && i(a), e.uo.mHttpCall = null;
                }), this.mHttpCall.once(Laya.Event.ERROR, this, function(t) {
                    null != o ? o() : e.uo.onHttpRequestError(t);
                });
                var r = n.util.getServer() + t.url + n.util.getUrlParams(a, t.key);
                this.mHttpCall.send(r, null, "get", "text");
            }, e.prototype.onHttpRequestError = function(e) {
                wx.hideLoading();
            }, e.prototype.initVideoAD = function(t) {
                "" != t ? null == this.mVideoAD && (this.mVideoAD = wx.createRewardedVideoAd({
                    adUnitId: t
                }), this.mVideoAD.load(), this.mVideoAD.onError(function(t) {
                    console.log(t), e.uo.mNoVideo = !0;
                })) : this.mNoVideo = !0;
            }, e.prototype.haveVideo = function() {
                return null != this.mVideoAD && 1 != this.mNoVideo;
            }, e.prototype.loadingVideo = function(t) {
                return null == this.mVideoAD || 1 == e.uo.mNoVideo ? (null != t && t(!1), !1) : (this.mVideoAD.load().then(function() {
                    null != t && t(!0);
                }).catch(function(e) {
                    console.log("没有拉到广告"), console.log(e.errMsg), null != t && t(!1);
                }), !0);
            }, e.prototype.showVideoAD = function(t) {
                return null == this.mVideoAD || 1 == e.uo.mNoVideo ? (null != t && t(!1), !1) : (e.uo.mVideoAD.show(),
                    this.mVideoAD.offClose(null), this.mVideoAD.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? null != t && t(!0) : null != t && t(!1);
                    }), !0);
            }, e.uo = null, e;
        }();
        a.default = u;
    }, {
        "../Main": 14,
        "../util/TimeUtil": 53,
        "./Base64": 16,
        "./MD5": 21,
        "./util": 25,
        "./wxCallBack": 26
    }],
    28: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = Laya.HttpRequest,
            n = e("../Main"),
            o = e("./gameBox"),
            r = e("./wxCallBack"),
            s = e("./util"),
            l = e("./MoreGame"),
            p = e("../util/ConfigUtil"),
            u = e("../util/LogUtil"),
            m = e("../util/ShareConfig"),
            d = e("./Base64"),
            h = e("./wxCore"),
            f = e("../util/TimeUtil"),
            c = e("../script/MyLikeView"),
            g = e("../script/ShopView"),
            y = e("./OddEvenTestModel"),
            _ = function() {
                function e() {
                    this.mUID = 0, this.mOnOff = [], this.likeLoop = !0, this.mCards = 0, this.mWeiXinVersion = "",
                        this.mADKeep = 0, this.mHttpCall = null, this.mLaunch = null, this.mSaveImage = "",
                        this.mMyRank = 0, this.mChallenge = null, this.mShareID = 0, this.mMarks = [0, 0, 0, 0],
                        this.fhOnoff = 0, this.mrelayID = 0, this.maxToolCards = 2, this.mToolCards = 0,
                        this.mReturnAppid = "", this.mReturnUrl = "", this.mTaskInfo = [], this.mCoinsNum = 0,
                        this.mPropList = [], this.mUsingPropId = "2001", this.mStartAward = [], this.mUserData = [],
                        this.mNowDay = 0, this.mWxAdUrl = [], this.mGamesBox = [], this.mShareCallback = null,
                        this.mShareIsNoCallback = null, this.mShareIsAgainCallback = null, this.mCallShareTime = 0,
                        this.mShareCount = 0, this.mPassAwardListData = [], this.mdtValues = null, this.skinId = 9,
                        this.moreFenFaNum = 1, this.moreFenFaCount = 0, this.mWxMenuButtonRect = null, this.rnt2 = {
                            x: 0,
                            y: 0,
                            left: 0,
                            top: 0,
                            right: 0,
                            height: 0
                        }, this.is_address = !0, this.channel_id = "0", this.first_channel_id = "0";
                }
                return e.prototype.rankMeassage = function(e) {
                        wx.postMessage({
                            type: "FriendRank",
                            show: 1,
                            level: 0,
                            info: h.default.uo.getUser(),
                            dir: ["none", "previous", "next"][e]
                        });
                    }, e.prototype.closeRankMeassage = function() {
                        wx.postMessage({
                            type: "FriendRank",
                            show: 0
                        });
                    }, e.prototype.ResultMeassage = function() {
                        wx.postMessage({
                            type: "result",
                            show: 1,
                            level: 0,
                            info: h.default.uo.getUser()
                        });
                    }, e.prototype.getItemListbytype = function(e) {
                        if (null != n.default.app.mWX.mPropList) {
                            for (var e = e, t = [], a = 0; a < n.default.app.mWX.mPropList.length; a++) Number(n.default.app.mWX.mPropList[a].type) == e && (t[t.length] = n.default.app.mWX.mPropList[a]);
                            return t;
                        }
                    }, e.prototype.IsOpenMoreFenfa = function() {
                        var e = 0;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_more_fenfa" != t.key || (e = Number(t.value));
                        }), e;
                    }, e.prototype.IsOpenBKYX = function() {
                        var e = 1;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_hotgame_end" != t.key || (e = Number(JSON.parse(t.param).open));
                        }), e;
                    }, e.prototype.IsOpenXCXList = function() {
                        var e = 1;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_fenfa_xcxlist" != t.key || (e = Number(t.value));
                        }), e;
                    }, e.prototype.BKYXNotShowList = function() {
                        var e;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_hotgame_notshow_list" != t.key || (e = JSON.parse(t.param).notshow);
                        }), e;
                    }, e.prototype.getItemList = function(e) {
                        if (void 0 === e && (e = 0), null != n.default.app.mWX.mPropList) {
                            for (var t = [], a = 0; a < n.default.app.mWX.mPropList.length; a++) 0 == e ? Number(n.default.app.mWX.mPropList[a].count) > 0 && (t[t.length] = n.default.app.mWX.mPropList[a]) : 0 == Number(n.default.app.mWX.mPropList[a].count) && Number(n.default.app.mWX.mPropList[a].id < 6001) && Number(3006 != n.default.app.mWX.mPropList[a].id) && (t[t.length] = n.default.app.mWX.mPropList[a]);
                            return t;
                        }
                    },
                    e.prototype.reportMark = function(e, t, a) {},
                    e.prototype.dealCards = function(e, t) {
                        if (void 0 === e && (e = null), void 0 === t && (t = null), 0 != this.mLaunch.query.gift) {
                            var a = this;
                            this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                                var t = null;
                                t = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(a.mHttpCall.data),
                                    u.LogUtil.log("dealCards() -> onResult ret = " + JSON.stringify(t)), t.code, a.mHttpCall = null;
                            }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                            var n = [];
                            n.uid = this.mUID, null != a.mLaunch.query.gift ? n.gift = Number(this.mLaunch.query.gift) : void 0 !== this.mLaunch.query.gift ? n.gift = Number(this.mLaunch.query.gift) : n.gift = 0,
                                null != t ? n.ticket = t : void 0 !== this.mLaunch.shareTicket && (n.ticket = this.mLaunch.shareTicket),
                                this.mLaunch.query.gift = 0;
                            var o = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.AddCard + s.util.getUrlParams(n, "1.0.1");
                            this.mHttpCall.send(o, null, "get", "text");
                        }
                    }, e.prototype.updateCards = function(e) {
                        void 0 === e && (e = !1);
                        var t = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(a) {
                            e && wx.hideLoading();
                            var i = null;
                            i = "string" == typeof a ? s.util.getJSON(a) : s.util.getJSON(t.mHttpCall.data),
                                u.LogUtil.log("updateCards() -> onResult ret = " + JSON.stringify(i)), 0 == i.code && (t.mCards = Number(i.cards)),
                                t.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var a = [];
                        a.uid = this.mUID, e && wx.showLoading({
                            title: "",
                            mask: !0,
                            success: function() {},
                            fail: function() {},
                            complete: function() {}
                        });
                        var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.querycards + s.util.getUrlParams(a);
                        this.mHttpCall.send(n, null, "get", "text");
                    }, e.prototype.addCardForMe = function(e) {
                        var t = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            var a = null;
                            a = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(t.mHttpCall.data),
                                u.LogUtil.log("addCardForMe() -> onResult ret = " + JSON.stringify(a)), 0 == a.code && (t.mCards < 2 && (t.mCards = t.mCards + 1),
                                    wx.showToast({
                                        title: "获得复活卡1张",
                                        icon: "success",
                                        image: "",
                                        duration: 2e3,
                                        success: function() {},
                                        fail: function() {},
                                        complete: function() {}
                                    })), t.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var a = [];
                        a.uid = t.mUID, a.id = e;
                        var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.AddMyCard + s.util.getUrlParams(a, "1.0.1");
                        this.mHttpCall.send(n, null, "get", "text");
                    }, e.prototype.showWorldRank = function(e) {
                        void 0 === e && (e = 0);
                        var t = this;
                        wx.showLoading({
                            title: "",
                            mask: !0,
                            success: function() {},
                            fail: function() {},
                            complete: function() {}
                        }), this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            var a = null;
                            if (a = "string" == typeof e ? s.util.getJSON(e) : s.util.getJSON(t.mHttpCall.data),
                                u.LogUtil.log("showWorldRank() -> onResult ret = " + JSON.stringify(a)), 0 == a.code) {
                                var i = Number(a.rank);
                                i > 0 && t.mMarks[0] > 0 && (console.log("MMRANK", i), t.mMyRank = i);
                                for (var o = n.default.app.wRankData, r = a.data, l = 0; l < r.length; l++) {
                                    var p = {};
                                    null == r[l].name ? p.name = "null" : (p.name = n.default.app.subname(d.TsBase64.FromBase64(r[l].name), 12),
                                        console.log(p.name));
                                    var m = d.TsBase64.FromBase64(r[l].avatar);
                                    "0" == m.charAt(m.length - 1) && "/" == m.charAt(m.length - 2) && (m = m.substr(0, m.length - 2),
                                            m += "/132"), p.avatar = m, p.mark = Math.floor(r[l].hismark), p.city = r[l].city,
                                        p.uid = r[l].uid, p.map1 = Math.floor(r[l].mark1), p.map2 = Math.floor(r[l].mark2),
                                        p.map3 = Math.floor(r[l].mark3), o.push(p);
                                }
                                for (l = 0; l < o.length; l++) o[l].rank = l + 1;
                                r.length, wx.hideLoading();
                            }
                            t.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var a = [];
                        a.uid = this.mUID, a.page = e;
                        var o = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.rank + s.util.getUrlParams(a);
                        this.mHttpCall.send(o, null, "get", "text"), u.LogUtil.log("showWorldRank() -> str = " + o);
                    }, e.prototype.onHttpRequestError = function(e) {
                        this.mHttpCall = null, console.log("onHttpRequestError:" + e);
                    }, e.prototype.initMoreGame = function(e, t) {
                        void 0 === t && (t = !1);
                        var a = l.MoreGame.GetIndexRandom(n.default.app.mWX.mGamesBox);
                        null != a ? (e.name = a.gameid, t ? (e.skin = a.url_btn, e.visible = !0) : e.skin = a.url_result) : (e.visible = !1,
                            e.skin = "");
                    }, e.prototype.initMoreGame1 = function(e, t) {
                        var a = l.MoreGame.GetIndexRandom(n.default.app.mWX.mGamesBox);
                        null != a ? (e.name = a.gameid, e.skin = a.url_icon, e.visible = !0, t.text = a.name) : (e.visible = !1,
                            e.skin = "");
                    }, e.prototype.getMoreUrl = function(e) {
                        for (var t = 0; t < this.mGamesBox.length; t++)
                            if (Number(e) == Number(this.mGamesBox[t].gameid)) return this.mGamesBox[t];
                    }, e.prototype.reportADHit = function(e) {
                        var t = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            t.mHttpCall = null, u.LogUtil.log("reportADHit() -> onResult e = " + JSON.stringify(e));
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var a = [];
                        a.uid = this.mUID, a.id = e;
                        var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.data + s.util.getUrlParams(a);
                        u.LogUtil.log("reportADHit() -> onResult str = " + n), this.mHttpCall.send(n, null, "get", "text");
                    }, e.prototype.showMoreGamePage = function(e, t) {
                        void 0 === t && (t = null);
                        var a = n.default.app.mWX.getMoreUrl(e.name);
                        null != a && (n.default.app.is_gamebox = !0, o.gameBox.showBoxPage(a.appid, n.default.app.mWX.mGamesBox, "天天切蔬菜3D"));
                    }, e.prototype.showMoreGamePage1 = function(e, t) {
                        void 0 === t && (t = null);
                        var a = n.default.app.mWX.getMoreUrl(e.name);
                        null != a && (n.default.app.is_gamebox = !0, n.default.app.moregame = 3, c.MyLikeView.from_page = t,
                            o.gameBox.showBoxPage(a.appid, n.default.app.mWX.mGamesBox, "天天切蔬菜3D"));
                    }, e.prototype.getAgentID = function() {
                        return 0;
                    }, e.prototype.initGameClub = function(e) {
                        h.default.uo.wxVersion() >= "2.0.3" && null == this.gameClub ? (console.log("创建游戏圈"),
                            this.gameClub = wx.createGameClubButton({
                                icon: "dark",
                                type: "image",
                                image: "gamebg/btn_bbs.png",
                                style: {
                                    right: 20,
                                    top: e,
                                    width: 30,
                                    height: 44
                                }
                            })) : console.log("不能创建游戏圈");
                    }, e.prototype.isInitGameClub = function() {
                        return null != this.gameClub && (n.default.app.mWX.displayGameClub(!0), !0);
                    }, e.prototype.getMenuButtonTop_CenterPoint = function() {
                        var e = new Laya.Point(0, 0),
                            t = !1;
                        if (Laya.Browser.onMiniGame) {
                            if (h.default.uo.wxVersion() >= "2.1.0" && null == this.mWxMenuButtonRect) {
                                var a = wx.getMenuButtonBoundingClientRect();
                                null != a ? NaN != a.height && void 0 != a.height && null != a.height && (this.mWxMenuButtonRect = a) : t = !0;
                            }
                            if (null != this.mWxMenuButtonRect) {
                                var i = this.mWxMenuButtonRect.height,
                                    n = this.dealTopValue(this.mWxMenuButtonRect.top);
                                this.rnt2.x = this.mWxMenuButtonRect.width * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                    this.rnt2.y = this.mWxMenuButtonRect.height * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                    this.rnt2.right = this.mWxMenuButtonRect.right, this.rnt2.height = this.mWxMenuButtonRect.height,
                                    console.log("mWxMenuButtonRect:", this.mWxMenuButtonRect, this.rnt2), e.x = n * Laya.stage.height / h.default.uo.mPhone.screenHeight,
                                    e.y = i * Laya.stage.height / h.default.uo.mPhone.screenHeight, t && (e.x = 77,
                                        e.y = .5);
                            }
                        }
                        return t && (e.x = 77, e.y = .5), e;
                    }, e.prototype.dealTopValue = function(e) {
                        return e > 0 ? e : Number(h.default.uo.phone().screenHeight) > 800 ? 40 : 10;
                    }, e.prototype.getMyMark = function() {
                        var e = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(t) {
                            wx.hideLoading();
                            var a = null;
                            a = "string" == typeof t ? s.util.getJSON(t) : s.util.getJSON(e.mHttpCall.data),
                                u.LogUtil.log("getMyMark() -> onResult ret = " + JSON.stringify(a)), 0 == a.code && (e.mMarks[0] = Number(a.mark.mark),
                                    wx.postMessage({
                                        type: "send",
                                        mark: e.mMarks[0],
                                        level: 0,
                                        best: 0,
                                        user: h.default.uo.getUser()
                                    })), e.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var t = [];
                        t.uid = this.mUID;
                        var a = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.mymark + s.util.getUrlParams(t, "1.0.1");
                        this.mHttpCall.send(a, null, "get", "text"), u.LogUtil.log("getMyMark() -> str = " + a);
                    }, e.prototype.reportData = function(e) {
                        var t = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            t.mHttpCall = null, u.LogUtil.log("reportData() -> onResult e = " + JSON.stringify(e));
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var a = [];
                        a.uid = this.mUID, a.type = e;
                        var n = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.ad + s.util.getUrlParams(a, "1.0.1");
                        this.mHttpCall.send(n, null, "get", "text"), u.LogUtil.log("reportData() -> str = " + n);
                    }, e.prototype.initReturn = function() {
                        var e = h.default.uo.launch().query.pid;
                        null == e || void 0 === e || "" == e ? (this.mReturnAppid = "", this.mReturnUrl = "") : 8 == Number(e) ? (this.mReturnAppid = "",
                            this.mReturnUrl = "") : (this.mReturnAppid = e, this.mReturnUrl = "pages/index/index?");
                    }, e.prototype.getOnOffReward1 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_reward_first" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).levelNum);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffReward2 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_reward_getstyle" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(n.default.app.mWX.mOnOff[t].value);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffReward3 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_reward_interval" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffRewardSkip = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_reward_skip" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).delay);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffAllControl = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_all" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(n.default.app.mWX.mOnOff[t].value);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffStartReward = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_start_reward" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(n.default.app.mWX.mOnOff[t].value);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffStartReward2 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_startreward_interval" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffStartReward3 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_startreward_firstappear" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).level);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffBoxReward2 = function() {
                        for (var e = 0, t = 0; t < n.default.app.mWX.mOnOff.length; t++)
                            if ("of_boxreward_change" == n.default.app.mWX.mOnOff[t].key) {
                                e = Number(JSON.parse(n.default.app.mWX.mOnOff[t].param).interval);
                                break;
                            }
                        return e;
                    }, e.prototype.getOnOffBoxReward = function() {
                        for (var e = [], t = 0, a = 0, i = 0; i < n.default.app.mWX.mOnOff.length; i++)
                            if ("of_box_reward" == n.default.app.mWX.mOnOff[i].key) {
                                t = Number(n.default.app.mWX.mOnOff[i].value), a = Number(JSON.parse(n.default.app.mWX.mOnOff[i].param).count),
                                    e.push(t), e.push(a);
                                break;
                            }
                        return e;
                    }, e.prototype.onLaunch = function(e, t) {


                        console.log("onLaunchonLaunchonLaunchonLaunchonLaunchonLaunch")
                        void 0 === t && (t = !1);
                        var a = h.default.uo.getUser(),
                            i = {};
                        Laya.Browser.onIOS ? i.platform = 2 : i.platform = 1, i.uid = h.default.uo.mWeUser.uid,
                            i.name = d.TsBase64.EncodeURI(a.nickName), i.avatar = d.TsBase64.EncodeURI(a.avatarUrl),
                            i.ver = p.ConfigUtil.mVersion, void 0 !== e.query.uid && (i.target = e.query.uid),
                            void 0 !== e.query.type && (i.type = e.query.type), void 0 !== e.query.id && (i.id = e.query.id),
                            h.default.uo.server(r.wxCallBack.mIF.lauch, i, function(a) {
                                if (0 == a.code) {
                                    if (console.log("用户的数据", a), n.default.app.mWX.getMediaType(e, a), Laya.Browser.window.sharedCanvas.width = Laya.stage.width,
                                        Laya.Browser.window.sharedCanvas.height = Laya.stage.height, n.default.app.mWX.mMarks[0] = Number(a.marks.mark),
                                        n.default.app.mWX.mMarks[1] = Number(a.marks.mark1), n.default.app.mWX.mMarks[2] = Number(a.marks.mark2),
                                        n.default.app.mWX.mMarks[3] = Number(a.marks.mark3), n.default.app.mWX.fhOnoff = Number(a.fh_onoff),
                                        console.log("开关", n.default.app.mWX.fhOnoff), n.default.app.mWX.mCards = Number(a.marks.cards),
                                        m.ShareConfig.sShareUrls = a.shareurl, n.default.app.mWX.mTaskInfo = a.task_info,
                                        n.default.app.mWX.mOnOff = a.on_off, n.default.app.mWX.mNowDay = a.nowday, n.default.app.adUtil.mCustomBannerAdList = a.games_ad,
                                        n.default.app.mWX.mCoinsNum = Number(a.coins), n.default.app.mWX.mWxAdUrl = a.wxadurl,
                                        n.default.app.mWX.mdtValues = a.dt_values, n.default.app.mWX.oddEvenTestModel = new y.OddEvenTestModel(a),
                                        void 0 != a.item_list && null != a.item_list && (n.default.app.mWX.mPropList = a.item_list),
                                        "0" != String(a.use_item) && (n.default.app.mWX.mUsingPropId = String(a.use_item)),
                                        void 0 != typeof a.start_reward && null != a.start_reward && a.start_reward.length > 0 && (n.default.app.mWX.mStartAward = a.start_reward),
                                        void 0 != a.user_data && null != a.user_data && a.user_data.length > 0 && (n.default.app.mWX.mUserData = a.user_data),
                                        "" != n.default.app.mWX.getUserDataByKey("knife_skin_id") && (
                                            g.default.skin_id = Number(n.default.app.mWX.getUserDataByKey("knife_skin_id"))),
                                        "" != n.default.app.mWX.getUserDataByKey("Level_num") && (n.default.app.Level_num = Number(n.default.app.mWX.getUserDataByKey("Level_num"))),
                                        n.default.app.mWX.skinId = "" == n.default.app.mWX.getUserDataByKey("new_reward_knife_id") ? 9 : Number(n.default.app.mWX.getUserDataByKey("new_reward_knife_id")),
                                        n.default.app.boxSkinId = n.default.app.mWX.skinId, console.log("sssk:", n.default.app.mWX.skinId),
                                        n.default.app.mWX.initUserMusicSoundOnOff(), n.default.app.mWX.mGamesBox = a.games_box,
                                        h.default.uo.mIsNewUser = a.nowday == a.regday ? 1 : 0, n.default.app.mWX.address_1(),
                                        "" == n.default.app.mWX.getUserDataByKey("first_share_from") ? (void 0 == h.default.uo.launch.query ? (h.default.uo.first_share_from = "",
                                                h.default.uo.sigh_id = "") : (h.default.uo.first_share_from = h.default.uo.launch.query.uid,
                                                h.default.uo.sigh_id = h.default.uo.launch.query.adid), n.default.app.mWX.setUserValue("first_share_from", h.default.uo.first_share_from),
                                            n.default.app.mWX.setUserValue("sigh_id", h.default.uo.sigh_id)) : (h.default.uo.first_share_from = n.default.app.mWX.getUserDataByKey("first_share_from"),
                                            h.default.uo.sigh_id = n.default.app.mWX.getUserDataByKey("sigh_id")), n.default.app.mWX.getIsNewDay(),
                                        n.default.app.isNewDay && (n.default.app.clickLikeArr = [], n.default.app.mWX.setUserValue("clickLikeArr", "0")),
                                        console.log("scsdsad0", n.default.app.mWX.IsOpenMoreFenfa()), 1 == n.default.app.mWX.IsOpenMoreFenfa()) {
                                        var i = l.MoreGame.GetIndexRandomList(n.default.app.mWX.mGamesBox, 9);
                                        for (n.default.app.mWX.moreFenFaCount = 0, r = 0; r < i.length; r++) {
                                            var o = i[r];
                                            n.default.app.mWX.moreFenFaCount = n.default.app.mWX.moreFenFaCount < JSON.parse(o.anim_config).millisecond_static.split(",").length ? JSON.parse(o.anim_config).millisecond_static.split(",").length : n.default.app.mWX.moreFenFaCount;
                                        }
                                        for (var r = n.default.app.mWX.moreFenFaCount; r > 1; r--)
                                            if (h.default.uo.getUserID() % r == 0) {
                                                n.default.app.mWX.moreFenFaNum = r, console.log("moreFenFaNum:", n.default.app.mWX.moreFenFaCount, n.default.app.mWX.moreFenFaNum);
                                                break;
                                            }
                                    } else n.default.app.mWX.moreFenFaNum = 0;
                                    n.default.app.ChangeScene(), t || n.default.app.mWX.dealQuery(e, !0);
                                }
                            });
                    }, e.prototype.getIsNewDay = function() {
                        var e = Date.now(),
                            t = 0,
                            a = Laya.LocalStorage.getItem("lastLoginTime");
                        a && (t = Number(a)), this.isSameDay(e, t) ? (n.default.app.isNewDay = !1, u.LogUtil.log("=====和上次登录是同一天=====")) : (n.default.app.isNewDay = !0,
                            u.LogUtil.log("=====新的一天==========")), Laya.LocalStorage.setItem("lastLoginTime", String(e));
                    }, e.prototype.isSameDay = function(e, t) {
                        var a = new Date(e),
                            i = new Date(t);
                        return a.getFullYear() == i.getFullYear() && a.getMonth() == i.getMonth() && a.getDate() == i.getDate();
                    }, e.prototype.address_1 = function() {
                        if (this.is_address) {
                            this.is_address = !1;
                            wx.getSystemInfoSync();
                            var e = Laya.LocalStorage.getItem("firstEntryTime");
                            "" == e && (e = String(f.TimeUtil.getCurrTime()), Laya.LocalStorage.setItem("firstEntryTime", e));
                            var t = Laya.LocalStorage.getItem("lastEntryTime");
                            if ("" == t && (t = String(f.TimeUtil.getCurrTime()), Laya.LocalStorage.setItem("lastEntryTime", t)),
                                null != h.default.uo.mWeUser.uid) {
                                n.default.app.mWX.indexBpTotle("app_open", {});
                            }
                            var a = {
                                channel_type: 0,
                                share_from: void 0 !== h.default.uo.launch().query.uid ? h.default.uo.launch().query.uid : "0",
                                first_entry_time: e,
                                last_entry_time: t,
                                device_os_version: h.default.uo.mPhone.system,
                                device_type: h.default.uo.mPhone.model,
                                wechat_version: h.default.uo.mPhone.version
                            };
                            n.default.app.mWX.indexBpTotle("app_entry", a);
                        }
                    }, e.prototype.dealQuery = function(e, t) {
                        void 0 === t && (t = !1), null != e.query.gift && void 0 !== e.query.gift ? e.query.id > 0 ? n.default.app.mWX.addCardForMe(e.query.id) : n.default.app.mWX.dealCards() : 8 == Number(e.query.type) ? void 0 !== e.shareTicket && "undefined" != e.shareTicket && e.shareTicket : e.query.id > 0 && (n.default.app.mWX.mrelayID = e.query.id);
                    }, e.prototype.displayGameClub = function(e) {
                        null != n.default.app.mWX.gameClub && (e ? n.default.app.mWX.gameClub.show() : n.default.app.mWX.gameClub.hide());
                    }, e.prototype.getOnOffByKey = function(e) {
                        if (0 == this.fhOnoff && "of_jump" != e) return !1;
                        for (var t = 0; t < this.mOnOff.length; t++)
                            if (this.mOnOff[t].key == e) return "0" != this.mOnOff[t].value;
                        return !1;
                    }, e.prototype.isTodayCheck = function(e, t) {
                        for (var a = 1; a <= 7; a++)
                            if (Number(e["day_" + a]) == t) return !1;
                        return !0;
                    }, e.prototype.updateLocalPropCount = function(e, t) {
                        for (var a = 0; a < n.default.app.mWX.mPropList.length; a++)
                            if (n.default.app.mWX.mPropList[a].id == e) {
                                n.default.app.mWX.mPropList[a].count = t;
                                break;
                            }
                    }, e.prototype.updateLocalTaskStatus = function(e, t) {
                        for (var a = 0; a < this.mTaskInfo.length; a++)
                            if (this.mTaskInfo[a].id == e) {
                                this.mTaskInfo[a].give = t;
                                break;
                            }
                    }, e.prototype.updateLocalTaskOverCount = function(e, t) {
                        for (var a = 0; a < this.mTaskInfo.length; a++)
                            if (this.mTaskInfo[a].id == e) {
                                this.mTaskInfo[a].over_count = t;
                                break;
                            }
                    }, e.prototype.setUserValue = function(e, t, a, n) {
                        platform.getInstance().setStorageSync(e, t);
                    }, e.prototype.getUserDataByKey = function(e) {

                        if (e == "gold") {
                            return platform.getInstance().getStorageSync(e) || 0;
                        }
                        if (e == "Level_num") {
                            return platform.getInstance().getStorageSync(e) || 1;
                        }


                        return platform.getInstance().getStorageSync(e) || "";
                    }, e.prototype.updateUserDataByKey = function(e, t) {
                        platform.getInstance().setStorageSync(e, t);
                    }, e.prototype.ChangeTCt = function(e, t, a, o) {}, e.prototype.getPropCount = function(e) {}, e.prototype.getSpecificTaskIdByGoto = function(e) {
                        var t = "";
                        return n.default.app.mWX.mTaskInfo.forEach(function(a) {
                            if ("" != a.param) {
                                var i = JSON.parse(a.param);
                                "string" == typeof i.goto && i.goto == e && (t = a.id);
                            }
                        }), t;
                    }, e.prototype.isTaskFinishByGoto = function(e) {
                        var t = !1;
                        return n.default.app.mWX.mTaskInfo.forEach(function(a) {
                            if ("" != a.param) {
                                var i = JSON.parse(a.param);
                                "string" == typeof i.goto && i.goto == e && a.over_count >= a.count && (t = !0);
                            }
                        }), t;
                    }, e.prototype.getMediaType = function(e, t) {
                        var a = this,
                            i = (e.query.ald_media_id, e.query.ald_link_key);
                        console.log("query:", e.query), this.channel_id = i ? String(i) : "0";
                        var o = t.nowday == t.regday;
                        if (this.first_channel_id = "-1", o) {
                            (r = t.user_data).forEach(function(e) {
                                "first_channel_id" == e.key && (a.first_channel_id = String(e.values));
                            }), "-1" == this.first_channel_id && (this.first_channel_id = this.channel_id, n.default.app.mWX.setUserValue("first_channel_id", String(this.first_channel_id)));
                        } else {
                            var r = t.user_data;
                            r.forEach(function(e) {
                                "first_channel_id" == e.key && (a.first_channel_id = String(e.values));
                            }), "-1" == this.first_channel_id && (this.first_channel_id = "0", n.default.app.mWX.setUserValue("first_channel_id", String(this.first_channel_id)));
                        }
                    }, e.prototype.isOwnSpecificProp = function(e) {
                        var t = 0;
                        return this.mPropList.forEach(function(a) {
                            a.id == e && Number(a.count) > 0 && (t = Number(a.count));
                        }), t;
                    }, e.prototype.getOnOffValueByKey = function(e) {
                        for (var t = 0; t < this.mOnOff.length; t++)
                            if (this.mOnOff[t].key == e) return this.mOnOff[t].value;
                        return "0";
                    }, e.prototype.itemTotle = function(e, t, a, n, o) {
                        void 0 === n && (n = ""), void 0 === o && (o = 1);
                        var r = this;
                        this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, function(e) {
                            r.mHttpCall = null;
                        }), this.mHttpCall.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                        var l = [];
                        l.uid = this.mUID, l.useitem = e, l.usect = o, l.poskey = t, void 0 != a && null != a && (l.starttm = a),
                            "" != n && (l.other = n);
                        var u = p.ConfigUtil.mURL + p.ConfigUtil.mCmd.ItemTotle + s.util.getUrlParams(l, "1.0.1");
                        this.mHttpCall.send(u, null, "get", "text");
                    }, e.prototype.getWxAdOpen = function(e) {
                        var t = "";
                        return void 0 == n.default.app.mWX.mWxAdUrl || null == n.default.app.mWX.mWxAdUrl || 0 == n.default.app.mWX.mWxAdUrl.length ? t : (n.default.app.mWX.mWxAdUrl.forEach(function(a) {
                            a.id != e || (t = a.open);
                        }), t);
                    }, e.prototype.getWxAdUnitIdById = function(e) {
                        var t = "";
                        return void 0 == n.default.app.mWX.mWxAdUrl || null == n.default.app.mWX.mWxAdUrl || 0 == n.default.app.mWX.mWxAdUrl.length ? t : (n.default.app.mWX.mWxAdUrl.forEach(function(a) {
                            a.id != e || "1" == a.open && (t = a.unitid);
                        }), t);
                    }, e.prototype.getVideoRewardArr = function() {
                        var e = [];
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_v_reward" != t.key || (e = String(t.param).split(",").map(Number));
                        }), e;
                    }, e.prototype.getVideoRewardByCount = function(e) {
                        var t = n.default.app.mWX.getVideoRewardArr();
                        return e < t.length ? t[e] : t[t.length - 1];
                    }, e.prototype.getOnOffParamByKey = function(e) {
                        for (var t = "", a = 0; a < n.default.app.mWX.mOnOff.length; a++)
                            if (n.default.app.mWX.mOnOff[a].key == e) {
                                t = n.default.app.mWX.mOnOff[a].param;
                                break;
                            }
                        return t;
                    }, e.prototype.getShareTimeByCount = function() {
                        var e = n.default.app.mWX.getOnOffParamByKey("of_share_time");
                        console.log("分享时间", e);
                        var t = e.split(",");
                        return n.default.app.mWX.mShareCount > 0 ? Number(t[t.length - 1]) / 1e3 : Number(t[0]) / 1e3;
                    }, e.prototype.getRandomGames = function(e) {
                        if (n.default.app.mWX.mGamesBox.length < e) return n.default.app.mWX.mGamesBox;
                        for (var t = [].concat(n.default.app.mWX.mGamesBox), a = [], i = 0; i < e; i++) {
                            var o = Math.floor(Math.random() * (1 - t.length) + t.length),
                                r = t[o - 1];
                            a.push(r), t.splice(o - 1, 1);
                        }
                        return a;
                    }, e.prototype.getStartAwardObject = function() {
                        if (0 == n.default.app.mWX.mStartAward.length) return null;
                        var e = n.default.app.mWX.mStartAward[0].reward;
                        return "" == JSON.parse(e).itemid ? null : JSON.parse(e);
                    }, e.prototype.getItemNameByItemId = function(e) {
                        for (var t = "", a = 0; a < n.default.app.mWX.mPropList.length; a++)
                            if (n.default.app.mWX.mPropList[a].id == e) {
                                t = n.default.app.mWX.mPropList[a].name;
                                break;
                            }
                        return t;
                    }, e.prototype.getItemByItemId = function(e) {
                        for (var t = "", a = 0; a < n.default.app.mWX.mPropList.length; a++)
                            if (n.default.app.mWX.mPropList[a].id == e) {
                                t = n.default.app.mWX.mPropList[a].name;
                                break;
                            }
                        return t;
                    }, e.prototype.initPassAwardData = function() {
                        n.default.app.mWX.mPassAwardListData.splice(0, n.default.app.mWX.mPassAwardListData.length),
                            n.default.app.mWX.mPropList.forEach(function(e) {
                                "0" != e.gamebox && "2" == e.type && n.default.app.mWX.mPassAwardListData.push(e);
                            });
                    }, e.prototype.getPassAwardDataByLevel = function(e) {
                        for (var t = null, a = 0; a < n.default.app.mWX.mPassAwardListData.length; a++) {
                            if ("string" != typeof n.default.app.mWX.mPassAwardListData[a].other) return;
                            var i = JSON.parse(n.default.app.mWX.mPassAwardListData[a].other);
                            e == Number(i.num) && (t = n.default.app.mWX.mPassAwardListData[a]);
                        }
                        return t;
                    }, e.prototype.initUserMusicSoundOnOff = function() {
                        0 != n.default.app.mWX.mUserData.length && n.default.app.mWX.mUserData.forEach(function(e) {
                            e.key;
                        });
                    }, e.prototype.getStartRewardArr = function() {
                        var e = 1;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_start" != t.key || (e = Number(t.value));
                        }), e;
                    }, e.prototype.getDoubleCoinArr = function() {
                        var e = 1;
                        return n.default.app.mWX.mOnOff.forEach(function(t) {
                            "of_coins_double" != t.key || (e = Number(t.value));
                        }), e;
                    }, e.prototype.GetBPUrl = function() {
                        var e = "";
                        return n.default.app.mWX.mdtValues.forEach(function(t) {
                            "dt_log_url" != t.key || (e = t.param);
                        }), console.log("获得埋点地址", e), e;
                    }, e.prototype.indexBpTotle = function(e, t) {
                        if (window.wx) {
                            this.mHttpCall = new i(), this.mHttpCall.once(Laya.Event.COMPLETE, this, this.onHttpRequestError),
                                t.uid = h.default.uo.mWeUser.uid, t.is_new = h.default.uo.mIsNewUser, t.session_id = h.default.uo.loginSession,
                                t.create_time = f.TimeUtil.getCurrTime(), t.channel_id = n.default.app.mWX.channel_id,
                                t.first_channel_id = n.default.app.mWX.first_channel_id;
                            var a = this.GetBPUrl() + "&keyname=" + e + "&clos=" + JSON.stringify(t) + "&platform=5&uid=" + n.default.app.mWX.mUID + "&now_time" + new Date().getTime();
                            console.log("埋点统计：", a), this.mHttpCall.send(a, null, "get", "text");
                        }
                    }, e;
            }();
        a.default = _;
    }, {
        "../Main": 14,
        "../script/MyLikeView": 33,
        "../script/ShopView": 36,
        "../util/ConfigUtil": 49,
        "../util/LogUtil": 50,
        "../util/ShareConfig": 51,
        "../util/TimeUtil": 53,
        "./Base64": 16,
        "./MoreGame": 22,
        "./OddEvenTestModel": 23,
        "./gameBox": 24,
        "./util": 25,
        "./wxCallBack": 26,
        "./wxCore": 27
    }],
    29: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./GameUI"),
            n = e("./gameObject/Food"),
            o = e("./gameObject/BoardBad"),
            r = e("./gameObject/BoardDie"),
            s = e("./gameObject/BoardSuccess"),
            l = e("./gameObject/PlayerCtrl"),
            p = e("../Main"),
            u = e("./SoundPlayMgr"),
            m = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.Cut = !1, t.Die = !1, t.nowScore = 0, t.CreateObj = [], t.CreateIndex = 0, t.isSuccess = !1,
                        t.speed = 1, t.__z = new Laya.Vector3(0, 0, 5), t.speedLineFlag = 0, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        t.instance = this;
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.prototype.createGameObject = function(e, t) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = 6), 0 == this.CreateObj.length) {
                            if (window.wx) a = Laya.loader.getRes(p.default.app.URL + "res/level.json");
                            else var a = Laya.loader.getRes("res/level.json");
                            void 0 == a["level" + p.default.app.Level_num] && (p.default.app.Level_num = 1),
                                this.CreateObj = a["level" + p.default.app.Level_num];
                        }
                        this.CreateObj[this.CreateIndex] || (this.CreateIndex = 0);
                        var l = this.CreateObj[this.CreateIndex].id;
                        i.default.app.txt_level.text = "" + p.default.app.Level_num;
                        var u = this.CreateObj[this.CreateIndex].type;
                        this.CreateIndex++, this.isSuccess && (l = "Success", u = 99);
                        var m = Laya.loader.getRes("Scenes/" + l + ".lh"),
                            d = Laya.Sprite3D.instantiate(m);

                        switch (Number(u)) {
                            case 1:
                                d.addComponent(n.default);
                                break;

                            case 2:
                                d.addComponent(o.default);
                                break;

                            case 3:
                                d.addComponent(r.default);
                                break;

                            case 99:
                                d.addComponent(s.default);
                                break;

                            default:
                                d.addComponent(n.default);
                        }
                        d.transform.position = Laya.Vector3._ZERO, d.transform.localPositionZ = e + t + .5,
                            i.default.app.ObjCreatPos.addChild(d);
                    }, t.prototype.createGameObject1 = function(e, t, a) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = 6), void 0 === a && (a = !1),
                            0 == this.CreateObj.length) {
                            if (window.wx) l = Laya.loader.getRes(p.default.app.URL + "res/level.json");
                            else var l = Laya.loader.getRes("res/level.json");
                            this.CreateObj = l.level1;
                        }
                        this.CreateObj[this.CreateIndex] || (this.CreateIndex = 0);
                        for (var u = 100, m = [], d = 0; d < this.CreateObj.length; d++) {
                            g = this.CreateObj[d];
                            if (a) {
                                if ("Board" == (y = this.CreateObj[d].id).split("_")[0]) continue;
                            }
                            u -= 100 * g.random;
                            var h = {};
                            h.index = d, h.random = u, m.push(h);
                        }
                        console.log(m);
                        for (var f = 100 * Math.random(), c = 0, d = 0; d < m.length; d++) {
                            var g;
                            if (f > (g = m[d]).random) {
                                c = d, console.log("index ", c);
                                break;
                            }
                        }
                        var y = this.CreateObj[c].id,
                            _ = this.CreateObj[c].type;
                        console.log(y), this.CreateIndex++, this.isSuccess && (y = "Success", _ = 99);
                        var v = Laya.loader.getRes("Scenes/" + y + ".lh"),
                            b = Laya.Sprite3D.instantiate(v);

                        switch (_) {
                            case 1:
                                b.addComponent(n.default);
                                break;

                            case 2:
                                b.addComponent(o.default);
                                break;

                            case 3:
                                b.addComponent(r.default);
                                break;

                            case 99:
                                b.addComponent(s.default);
                                break;

                            default:
                                b.addComponent(n.default);
                        }
                        b.transform.position = Laya.Vector3._ZERO, b.transform.localPositionZ = e + t + 2,
                            i.default.app.ObjCreatPos.addChild(b);
                    }, t.prototype.addScore = function() {
                        this.nowScore += 1, u.SoundPlayMgr.instance.playGSound("sound/cut"), l.default.instance.SpeedUp(),
                            i.default.app.txt_score.text = "" + this.nowScore,
                            0 != p.default.app.mWX.getOnOffBoxReward()[0] && (p.default.app.boxcangetnum += 1,
                                this.nowScore >= 100 ? (p.default.app.is_success = !0,
                                    this.isSuccess = !0) : this.updateSpeed());
                    }, t.prototype.updateSpeed = function() {
                        var e = this.nowScore / 100;
                        Laya.Tween.clearAll(i.default.app.pro), Laya.Tween.to(i.default.app.pro, {
                            width: 277 * e
                        }, 200);
                    }, t.prototype.setKnifeAlpha = function(e) {
                        i.default.app.player.getChildByName("Knife").meshRenderer.material.albedoColorA = e;
                    }, t.prototype.setBGPlane = function(e) {
                        void 0 === e && (e = "image/BG1.jpg");
                        var t = i.default.app.scene3D.getChildByName("Plane").meshRenderer.material;
                        Laya.Texture2D.load(e, Laya.Handler.create(this, function(e) {
                            t.albedoTexture = e;
                        }));
                    }, t.prototype.sceneClear = function() {
                        this.nowScore = 0, i.default.app.ObjCreatPos.destroyChildren(), this.CreateIndex = 0,
                            t.instance.isSuccess = !1;
                    }, t.prototype.showSpeedLine = function(e) {
                        var t = i.default.app.scene3D.getChildByName("SpeedLine");
                        0 == this.speedLineFlag && 5 == e ? (this.speedLineFlag = 1, t.particleSystem.play()) : 1 == this.speedLineFlag && (this.speedLineFlag = 0,
                            t.particleSystem.stop());
                    }, t.prototype.showSuccessEffect = function(e) {
                        var t = i.default.app.scene3D.getChildByName("SuccessEffect");
                        t.active = !!e;
                    }, t;
            }(Laya.Script);
        a.default = m;
    }, {
        "../Main": 14,
        "./GameUI": 30,
        "./SoundPlayMgr": 37,
        "./gameObject/BoardBad": 41,
        "./gameObject/BoardDie": 42,
        "./gameObject/BoardSuccess": 43,
        "./gameObject/Food": 44,
        "./gameObject/PlayerCtrl": 45
    }],
    30: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./../ui/layaMaxUI"),
            n = e("./gameObject/PlayerCtrl"),
            o = e("./GameManager"),
            r = e("./StartView"),
            s = e("../Main"),
            l = e("../core/wxCore"),
            p = e("./MyLikeView2"),
            u = e("./ShopView"),
            m = e("../util/ADUtil"),
            d = e("../util/ShareUtil"),
            h = e("./GetKnifeDialog"),
            f = e("../core/FakerXCXListView"),
            c = function(e) {
                function t() {
                    var a = e.call(this) || this;
                    a.id = 0, a.scene3D = null, a.boxAni = null, a.mMyLike = null, a.fenfaListView = null,
                        t.app = a, a.height = Laya.stage.height;
                    i = a;
                    Laya.loader.create(["Scenes/Cutmain.ls", "Scenes/Board_01.lh", "Scenes/Board_02.lh", "Scenes/Success.lh", "Scenes/Food_01.lh", "Scenes/Food_02.lh", "Scenes/Food_03.lh", "Scenes/Food_04.lh", "Scenes/Food_05.lh", "Scenes/Food_06.lh", "Scenes/Food_07.lh", "Scenes/Food_08.lh", "Scenes/Food_09.lh"], Laya.Handler.create(i, i.ScenesLoaded));
                    a.box_btnmore.visible = !1, a.box_btn.on(Laya.Event.MOUSE_DOWN, a, a.startCut),
                        a.box_btn.on(Laya.Event.MOUSE_UP, a, a.stopCut), a.btn_reborn.on(Laya.Event.CLICK, a, a.reborn),
                        a.btn_addGameObj.on(Laya.Event.CLICK, a, a.addObj), a.btn_reset.on(Laya.Event.CLICK, a, a.Scene3dReset),
                        a.v4.on(Laya.Event.CLICK, a, a.onBoxOpen), a.fenfaListBox.on(Laya.Event.CLICK, a, a.onShowFenFaList),

                        a.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("GAME", "LOGO");
                        })

                    a.showV(false), a.btn_speedLine.on(Laya.Event.CLICK, a, function() {
                        o.default.instance.showSpeedLine(1);
                    }), a.addComponent(o.default);
                    return a;
                }
                return __extends(t, e),
                    t.prototype.showV = function(e) {
                        if (e) {
                            this.cTips.visible = true;
                            if (this.v1.visible = !0, this.v2.visible = !0, this.v3.visible = !0, 1 == s.default.app.mWX.IsOpenXCXList() && 1 == s.default.app.mWX.fhOnoff) {
                                this.fenfaListBtn.visible = !0, this.fenfaListBox.visible = !0;
                                var a = s.default.app.mWX.getMenuButtonTop_CenterPoint();
                                0 != s.default.app.mWX.rnt2.x && 0 != s.default.app.mWX.rnt2.y && (this.fenfaListBtn.width = 3 * s.default.app.mWX.rnt2.height * (750 / l.default.uo.mPhone.screenWidth),
                                        this.fenfaListBtn.height = s.default.app.mWX.rnt2.height * (750 / l.default.uo.mPhone.screenWidth),
                                        this.fenfaListBox.width = this.fenfaListBtn.width + 40, this.fenfaListBox.height = this.fenfaListBox.height + 40),
                                    this.fenfaListBtn.y = a.x + a.y / 2 + this.fenfaListBtn.height / 2 + 5, this.fenfaListBtn.right = (l.default.uo.mPhone.screenWidth - s.default.app.mWX.rnt2.right) * (750 / l.default.uo.mPhone.screenWidth),
                                    this.fenfaListBox.y = a.x + a.y / 2 + this.fenfaListBtn.height / 2, this.fenfaListBox.x = this.fenfaListBtn.x - 20;
                            } else this.fenfaListBtn.visible = !1, this.fenfaListBox.visible = !1;
                        } else {
                            this.cTips.visible = false;
                            this.v1.visible = !1, this.v2.visible = !1, this.v3.visible = !1, this.v4.visible = !1,
                                this.fenfaListBtn.visible = !1, this.fenfaListBox.visible = !1;

                        }

                    },
                    t.prototype.boxPlayAni = function(e, a) {},
                    t.prototype.ScenesLoaded = function() {
                        console.log("bbbb");
                        this.scene3D = Laya.loader.getRes("Scenes/Cutmain.ls"),
                            Laya.Resource.destroyUnusedResources(),

                            this.box.addChild(this.scene3D),

                            this.visible = !0,
                            this.player = this.scene3D.getChildByName("Player"),
                            this.player.addComponent(n.default),
                            this.mainCamera = this.scene3D.getChildByName("MainCamera"),
                            this.ObjCreatPos = this.scene3D.getChildByName("CreatePoint"),
                            this.BG3D = this.scene3D.getChildByName("Plane"),
                            r.default.app.isStart = !0,
                            this.addObj(),
                            s.default.app.isOk = true,
                            this.onSkin(), this.onBGSkin(),
                            window.wx && (null == r.default.app.mMyLike ? (r.default.app.mMyLike = new p.default(),
                                r.default.app.mMyLike.centerX = 0, r.default.app.mMyLike.y = Laya.stage.height - r.default.app.mMyLike.height - 10,
                                r.default.app.mMyLike.onUpdata("home_page"), r.default.app.mMyLike.name = "home_page",
                                r.default.app.addChild(r.default.app.mMyLike)) : r.default.app.mMyLike.onUpdata("home_page"));
                    }, t.prototype.onBoxOpen = function() {
                        if (1 == s.default.app.mWX.getOnOffBoxReward()[0]) {
                            null == s.default.app.getKnifeDialog ? (s.default.app.getKnifeDialog = new h.default(),
                                Laya.stage.addChild(s.default.app.getKnifeDialog), s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD)) : s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD);
                        } else 2 == s.default.app.mWX.getOnOffBoxReward()[0] ? m.ADUtil.playVideo(function() {
                                null == s.default.app.getKnifeDialog ? (s.default.app.getKnifeDialog = new h.default(),
                                    Laya.stage.addChild(s.default.app.getKnifeDialog), s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD)) : s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD);
                            }, function() {
                                d.ShareUtil.shareProp(function() {
                                    null == s.default.app.getKnifeDialog ? (s.default.app.getKnifeDialog = new h.default(),
                                        Laya.stage.addChild(s.default.app.getKnifeDialog), s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD)) : s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD);
                                });
                            },
                            function() {}) : 3 == s.default.app.mWX.getOnOffBoxReward()[0] && d.ShareUtil.shareProp(function() {
                            s.default.app.mWX.indexBpTotle("icon_page", {
                                is_success: 1,
                                is_click: 1,
                                from_type: "share",
                                from_page: "box_award"
                            }), null == s.default.app.getKnifeDialog ? (s.default.app.getKnifeDialog = new h.default(),
                                Laya.stage.addChild(s.default.app.getKnifeDialog), s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD)) : s.default.app.getKnifeDialog.onShow(!0, h.default.BOX_REWARD);
                        });
                    }, t.prototype.onSkin = function() {
                        u.default.skin_id = Number(s.default.app.mWX.getUserDataByKey("knife_skin_id")) - 1;

                        var e = "";
                        console.log(u.default.skin_id + "  ++++++++++++++++++");
                        console.log(Number(s.default.app.mWX.getUserDataByKey("knife_skin_id")) + "  ++++++++++++++++++"); -
                        1 == u.default.skin_id ? e = "knife_0" :
                            0 == u.default.skin_id ? e = "Knife_last" :
                            // 10 == u.default.skin_id ? e = "knife_0" : 
                            10 == u.default.skin_id ? e = "knife_1" :
                            11 == u.default.skin_id ? e = "knife_2" :
                            12 == u.default.skin_id ? e = "knife_3" :
                            13 == u.default.skin_id ? e = "knife_4" :
                            14 == u.default.skin_id ? e = "knife_5" :
                            15 == u.default.skin_id ? e = "knife_6" :
                            16 == u.default.skin_id ? e = "knife_7" :
                            17 == u.default.skin_id ? e = "knife_8" :
                            1 == u.default.skin_id ? e = "knife_02" :
                            2 == u.default.skin_id ? e = "Knife_03" :
                            3 == u.default.skin_id ? e = "knife_04" :
                            4 == u.default.skin_id ? e = "knife_05" :
                            5 == u.default.skin_id ? e = "Knifes_06" :
                            6 == u.default.skin_id ? e = "Knifes_07" :
                            7 == u.default.skin_id ? e = "Knifes_08" :
                            8 == u.default.skin_id && (e = "Knifes_09");
                        var a = "Scenes/" + e + ".lh";

                        Laya.loader.create(a, Laya.Handler.create(t.app, function(e) {
                            if (e) {
                                var i = t.app.player.getChildByName("Knife"),
                                    n = Laya.loader.getRes(a);
                                i.meshFilter.sharedMesh = n.meshFilter.sharedMesh;
                                var o = n.meshRenderer.material.clone();
                                i.meshRenderer.material = o;
                            }
                        }));
                    }, t.prototype.onBGSkin = function() {
                        null != s.default.app.shopView && s.default.app.shopView.off(u.default.CHANGESKIN, t.app, t.app.onSkin);
                        var e = Math.floor(s.default.app.Level_num % 8);
                        7 == e && (e = 2);
                        var i = t.app.scene3D.getChildByName("Plane").meshRenderer.material;
                        Laya.Texture2D.load("bg/" + e + ".jpg", Laya.Handler.create(t.app, function(e) {
                            i.albedoTexture = e;
                        }));
                    }, t.prototype.startCut = function() {
                        this.cTips.visible = false;
                        n.default.instance.Cut();
                    }, t.prototype.stopCut = function() {
                        n.default.instance.StopCut();
                        this.cTips.visible = true;
                    }, t.prototype.reborn = function() {
                        n.default.instance.ResetKnife();
                    }, t.prototype.addObj = function() {
                        o.default.instance.createGameObject(0);
                    }, t.prototype.gameStart = function() {
                        o.default.instance.createGameObject(0);
                    }, t.prototype.Scene3dReset = function() {
                        Laya.timer.clear(this, this.gameStart),
                            o.default.instance.sceneClear();
                    }, t.prototype.onShowFenFaList = function() {
                        s.default.app.mWX.indexBpTotle("icon_page", {
                                is_success: 1,
                                is_click: 1,
                                from_type: "",
                                icon_type: "fake_exit",
                                from_page: "fake_exit"
                            }), console.log("this.fenfaListView:", this.fenfaListView),
                            this.fenfaListView || (this.fenfaListView = new f.FakerXCXListView(),
                                Laya.stage.addChild(this.fenfaListView), this.fenfaListView.zOrder = 999),
                            this.fenfaListView.onShow(!0, function() {});
                    }, t;
            }(i.ui.test.TestSceneUI);
        a.default = c;
    }, {
        "../Main": 14,
        "../core/FakerXCXListView": 17,
        "../core/wxCore": 27,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "./../ui/layaMaxUI": 47,
        "./GameManager": 29,
        "./GetKnifeDialog": 31,
        "./MyLikeView2": 34,
        "./ShopView": 36,
        "./StartView": 39,
        "./gameObject/PlayerCtrl": 45
    }],
    31: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("./MyLikeView2"),
            o = e("../Main"),
            r = e("./ResultView"),
            s = e("../util/ShareUtil"),
            l = e("../util/ADUtil"),
            p = e("./GameUI"),
            u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.id = 0, t.mMyLike = null, t.isLoop = !1, t.isChangeing = !1, t.ttype = "",
                        t.height = Laya.stage.height, t.init(), t;
                }
                return __extends(t, e), t.prototype.onShow = function(e, a) {
                        if (e) {
                            if (this.ttype = a, this.visible = !0, this.isChangeing = !1, this.RotateLight(),
                                this.initImg(), this.initSkip(), a == t.START_REWARD) {
                                this.bg.visible = !1, this.bg2.visible = !0, this.startReward.visible = !0, this.boxReward.visible = !1,
                                    this.endReward.visible = !1, this.mMyLike && (this.mMyLike.visible = !1);
                                i = {
                                    from_page: "start_award"
                                };
                                2 == o.default.app.mWX.getOnOffStartReward() ? this.knifebtn2.loadImage("button/get4.png") : this.knifebtn2.loadImage("button/get3.png"),
                                    o.default.app.mWX.indexBpTotle("start_award", i);
                            } else if (a == t.BOX_REWARD) {
                                this.bg.visible = !0, this.bg.alpha = 1, this.bg2.visible = !1, this.startReward.visible = !1,
                                    this.boxReward.visible = !0, this.endReward.visible = !1, this.mMyLike && (this.mMyLike.visible = !1);
                                i = {
                                    from_page: "box_award"
                                };
                                o.default.app.mWX.indexBpTotle("box_award", i);
                            } else if (a == t.END_REWARD) {
                                this.bg.alpha = 1, this.bg.visible = !0, this.bg2.visible = !1, this.startReward.visible = !1,
                                    this.boxReward.visible = !1, this.endReward.visible = !0;
                                var i = {
                                    from_page: "end_award"
                                };
                                2 == o.default.app.mWX.getOnOffReward2() ? this.knifebtn.loadImage("button/getbtn.png") : this.knifebtn.loadImage("button/getbtn1.png"),
                                    o.default.app.mWX.indexBpTotle("end_award", i), window.wx && (null == this.mMyLike ? (this.mMyLike = new n.default(),
                                        this.mMyLike.centerX = 0, this.mMyLike.y = 150, this.mMyLike.visible = !0, this.mMyLike.onUpdata("reward_page"),
                                        this.mMyLike.name = "reward_page", this.addChild(this.mMyLike)) : (this.mMyLike.visible = !0,
                                        this.mMyLike.onUpdata("reward_page")));
                            }
                        } else this.visible = !1, this.isLoop = !1,
                            a == t.START_REWARD || a == t.BOX_REWARD || a == t.END_REWARD && (console.log("likeLoopfalse4"),
                                o.default.app.mWX.likeLoop = !1, null == o.default.app.resultView && (o.default.app.resultView = new r.default("Win"),
                                    Laya.stage.addChild(o.default.app.resultView)));
                    }, t.prototype.init = function() {
                        this.knifebtn.on(Laya.Event.MOUSE_DOWN, this, this.getKnife), this.knifePass.on(Laya.Event.MOUSE_DOWN, this, this.passKnife),
                            this.knifebtn2.on(Laya.Event.MOUSE_DOWN, this, this.getKnife), this.knifePass2.on(Laya.Event.MOUSE_DOWN, this, this.passKnife),
                            this.knifebtn3.on(Laya.Event.MOUSE_DOWN, this, this.getKnife);

                    }, t.prototype.initSkip = function() {
                        var e = this;
                        this.ttype == t.START_REWARD ? this.knifePass2.visible = !0 : this.ttype == t.BOX_REWARD ? this.knifePass3.visible = !0 : this.ttype == t.END_REWARD && (this.knifePass.visible = !1,
                            Laya.timer.once(o.default.app.mWX.getOnOffRewardSkip(), this, function() {
                                e.knifePass.visible = !0;
                            }));
                    }, t.prototype.getKnife = function() {
                        var e = this;
                        if (this.ttype == t.START_REWARD)
                            if (1 == o.default.app.mWX.getOnOffStartReward()) {
                                a = {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "direct",
                                    from_page: "start_award"
                                };
                                o.default.app.mWX.indexBpTotle("icon_page", a), this.useSkin(), this.Dispose();
                            } else 2 == o.default.app.mWX.getOnOffStartReward() ? l.ADUtil.playVideo(function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "video",
                                    from_page: "start_award"
                                }), e.useSkin(), e.Dispose(), console.log("caonima");
                            }, function() {
                                s.ShareUtil.shareProp(function() {
                                    o.default.app.mWX.indexBpTotle("icon_page", {
                                        is_success: 1,
                                        is_click: 1,
                                        from_type: "share",
                                        from_page: "start_award"
                                    }), e.useSkin(), e.Dispose();
                                });
                            }, function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 0,
                                    is_click: 1,
                                    from_type: "video",
                                    from_page: "start_award"
                                }), wx.showToast({
                                    title: "未看完视频，无法领取奖励",
                                    icon: "none",
                                    image: "",
                                    duration: 2e3
                                });
                            }) : 3 == o.default.app.mWX.getOnOffStartReward() && s.ShareUtil.shareProp(function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "share",
                                    from_page: "start_award"
                                }), e.useSkin(), e.Dispose();
                            });
                        else if (this.ttype == t.BOX_REWARD) o.default.app.boxcangetnum = 0,
                            p.default.app.boxPlayAni(!1), p.default.app.id = 0, p.default.app.bg1.width = 0,
                            o.default.app.boxSkinKeepId = 0, o.default.app.boxChangeInterval = 0, 2 == o.default.app.mWX.getOnOffBoxReward()[0] ? (p.default.app.boxImg.scale(1, 1),
                                p.default.app.boxImg.skin = "button/black_box_2.png") : (p.default.app.boxImg.scale(1, 1),
                                p.default.app.boxImg.skin = "button/box_black.png"), this.useSkin(), this.Dispose();
                        else if (this.ttype == t.END_REWARD)
                            if (1 == o.default.app.mWX.getOnOffReward2()) {
                                var a = {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "direct",
                                    from_page: "end_award"
                                };
                                o.default.app.mWX.indexBpTotle("icon_page", a), this.useSkin(), this.Dispose();
                            } else 2 == o.default.app.mWX.getOnOffReward2() ? l.ADUtil.playVideo(function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "video",
                                    from_page: "end_award"
                                }), e.useSkin(), e.Dispose(), console.log("caonima");
                            }, function() {
                                s.ShareUtil.shareProp(function() {
                                    o.default.app.mWX.indexBpTotle("icon_page", {
                                        is_success: 1,
                                        is_click: 1,
                                        from_type: "share",
                                        from_page: "end_award"
                                    }), e.useSkin(), e.Dispose();
                                });
                            }, function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 0,
                                    is_click: 1,
                                    from_type: "video",
                                    from_page: "end_award"
                                }), wx.showToast({
                                    title: "未看完视频，无法领取奖励",
                                    icon: "none",
                                    image: "",
                                    duration: 2e3
                                });
                            }) : 3 == o.default.app.mWX.getOnOffReward2() && s.ShareUtil.shareProp(function() {
                                o.default.app.mWX.indexBpTotle("icon_page", {
                                    is_success: 1,
                                    is_click: 1,
                                    from_type: "share",
                                    from_page: "end_award"
                                }), e.useSkin(), e.Dispose();
                            });
                    }, t.prototype.useSkin = function() {
                        console.log("id:", String(this.id)), o.default.app.mWX.setUserValue("knife_skin_id", String(this.id)),
                            this.isChangeing = !0, this.onSkin(this.id), wx.showToast({
                                title: "领取成功",
                                icon: "none",
                                image: "",
                                duration: 2e3
                            });
                    }, t.prototype.passKnife = function() {
                        this.Dispose();
                    }, t.prototype.initImg = function() {
                        var e = this;
                        this.ttype == t.BOX_REWARD ? this.id = o.default.app.boxSkinId : (console.log("Main.app.mWX.skinId:", o.default.app.mWX.skinId),
                                this.id = Number(o.default.app.mWX.skinId + 1), this.id == Number(o.default.app.mWX.getUserDataByKey("knife_skin_id")) && (this.id += 1),
                                this.id == o.default.app.boxSkinId && (this.id += 1), this.id >= 19 && (this.id = 10)),
                            o.default.app.mWX.skinId = this.id, o.default.app.mWX.setUserValue("new_reward_knife_id", String(this.id)),
                            Laya.loader.load("newknife/" + Number(this.id - 10) + ".png", new Laya.Handler(this, function() {
                                console.log("skinId:", e.id, "newknife/" + Number(e.id - 10) + ".png"), e.ttype == t.START_REWARD ? e.knifeImg2.skin = "newknife/" + Number(e.id - 10) + ".png" : e.ttype == t.BOX_REWARD ? e.knifeImg3.skin = "newknife/" + Number(e.id - 10) + ".png" : e.ttype == t.END_REWARD && (e.knifeImg.skin = "newknife/" + Number(e.id - 10) + ".png");
                            }));
                    }, t.prototype.Dispose = function() {
                        this.onShow(!1, this.ttype);
                    }, t.prototype.onSkin = function(e) {
                        if (this.isChangeing) {
                            var t = e;
                            if (0 != t) {
                                console.log("xxx:", t);
                                var a = "";
                                10 == t ? a = "knife_0" : 11 == t ? a = "knife_1" : 12 == t ? a = "knife_2" : 13 == t ? a = "knife_3" : 14 == t ? a = "knife_4" : 15 == t ? a = "knife_5" : 16 == t ? a = "knife_6" : 17 == t ? a = "knife_7" : 18 == t && (a = "knife_8");
                                var i = "Scenes/" + a + ".lh";

                                Laya.loader.create(i, Laya.Handler.create(this, function(e) {
                                    if (e) {
                                        var t = p.default.app.player.getChildByName("Knife"),
                                            a = Laya.loader.getRes(i);
                                        t.meshFilter.sharedMesh = a.meshFilter.sharedMesh;
                                        var n = a.meshRenderer.material.clone();
                                        t.meshRenderer.material = n;
                                    }
                                }));
                            }
                        }
                    }, t.prototype.RotateLight = function() {
                        this.light3.rotation = 0, this.light2.rotation = 0, this.light.rotation = 0, this.isLoop = !0,
                            Laya.timer.loop(1, this, this.lRLight);
                    }, t.prototype.lRLight = function() {
                        this.isLoop && (this.ttype == t.START_REWARD ? this.light2.rotation += 1 : this.ttype == t.BOX_REWARD ? this.light3.rotation += 1 : this.ttype == t.END_REWARD && (this.light.rotation += 1));
                    }, t.START_REWARD = "START_REWARD", t.BOX_REWARD = "BOX_REWARD", t.END_REWARD = "END_REWARD",
                    t;
            }(i.ui.page.GetKnifeDialogUI);
        a.default = u;
    }, {
        "../Main": 14,
        "../ui/layaMaxUI": 47,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "./GameUI": 30,
        "./MyLikeView2": 34,
        "./ResultView": 35
    }],
    32: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });

        var i = e("../ui/layaMaxUI"),
            n = e("../Main"),
            o = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.xxx = 5, t;
                }
                return __extends(t, e), t.prototype.onEnable = function() {
                    this.inte();
                }, t.prototype.inte = function() {
                    this.pro.width = 25, this.zOrder = 999,
                        this.xxx = 20, this.precent.text = Math.floor(this.pro.width / 490 * 100) + "%",

                        this.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("LOADING", "LOGO");
                        })
                    Laya.timer.frameLoop(1, this, this.onProgress);
                }, t.prototype.onProgress = function() {
                    var e = this.pro.width;
                    e += this.xxx, this.precent.text = Math.floor(this.pro.width / 490 * 100) + "%",
                        n.default.app.scene_num >= 1 ? e >= 441 && (this.xxx = .3, e >= 490 && (e = 490),
                            n.default.app.isOk ? (Laya.timer.clear(this, this.onProgress), this.visible = !1,
                                Laya.timer.once(500, this, function() {
                                    n.default.app.loadingShow = !1;
                                })) : e >= 488 && (e = 488)) : e >= 441 && (e = 441), this.pro.width = e;
                }, t.prototype.onDisable = function() {}, t;
            }(i.ui.page.LoadingViewUI);
        a.default = o;
    }, {
        "../Main": 14,
        "../ui/layaMaxUI": 47
    }],
    33: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../Main"),
            o = e("../core/MoreGame"),
            r = e("../core/gameBox"),
            s = function(e) {
                function t() {
                    return e.call(this) || this;
                }
                return __extends(t, e), t.prototype.onUpdata = function(e) {
                    void 0 === e && (e = null);
                    var a = Number(6e3),
                        r = this.mPanel.width;
                    this.mMoveBack.removeChildren();
                    var s = o.MoreGame.GetIndexRandomList(n.default.app.mWX.mGamesBox, 9),
                        l = o.MoreGame.GetIndexList(n.default.app.mWX.mGamesBox);
                    if (void 0 != l && null != l) {
                        for (var p = 0; p < s.length; p++) t.list[p] = s[p].appid;
                        var u = {
                            game_show_list: t.list
                        };
                        n.default.app.mWX.indexBpTotle("recom_banner_show", u);
                        for (var m = 0, d = 0; d < s.length; ++d) {
                            var h = new i.ui.page.myLikeItemUI();
                            h.x = m, m += r / 4, h.centerY = 0;
                            var f = s[d].anim_config;
                            try {
                                var c = JSON.parse(f);
                                Number(c.frame), Number(c.millisecond);
                            } catch (e) {
                                0,
                                0;
                            }
                            h.game_name.text = s[d].name, h.game_icon.skin = s[d].big_btn_url, h.on(Laya.Event.CLICK, this, this.showMore2, [s[d], e]),
                                this.mMoveBack.addChild(h), this.mMoveBack.width = m + 10;
                        }
                        this.moveLikeGame(a, 300, 9);
                    }
                }, t.prototype.showMore2 = function(e, a) {
                    void 0 === a && (a = null), t.from_page = this.name, n.default.app.moregame = 2,
                        r.gameBox.showBoxPage(e.appid, n.default.app.mWX.mGamesBox, "天天切菜3D");
                }, t.prototype.moveLikeGame = function(e, t, a) {
                    function i() {
                        Laya.Tween.to(o.mMoveBack, {
                            x: 0
                        }, e, null, new Laya.Handler(o, n), t);
                    }

                    function n() {
                        Laya.Tween.to(o.mMoveBack, {
                            x: r
                        }, e, null, new Laya.Handler(o, i), t);
                    }
                    void 0 === a && (a = null);
                    var o = this,
                        r = -(o.mMoveBack.width - o.mPanel.width);
                    r >= 0 || a < 5 || (Laya.Tween.clearAll(o.mMoveBack), Laya.Tween.to(o.mMoveBack, {
                        x: r
                    }, e, null, new Laya.Handler(o, i)));
                }, t.list = {}, t.from_page = null, t;
            }(i.ui.page.myLikeViewUI);
        a.MyLikeView = s;
    }, {
        "../Main": 14,
        "../core/MoreGame": 22,
        "../core/gameBox": 24,
        "../ui/layaMaxUI": 47
    }],
    34: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../Core/util"),
            o = e("../Main"),
            r = e("../Core/MoreGame"),
            s = e("../Core/gameBox"),
            l = e("../Core/JumpObjConverter"),
            p = e("../Core/JumpAniCtl"),
            u = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.mCount = 0, t.mSpeed = 0, t.mStop = 0, t.mMoveCt = 0, t.IsSelectType = "",
                        t.isLoop = !1, t;
                }
                return __extends(t, e), t.prototype.onUpdata = function(e, a) {
                    void 0 === a && (a = !1);
                    var s = "";
                    switch (e) {
                        case "reward_page":
                            s = "reward_page", this.IsSelectType = "reward_page";
                            break;

                        case "revive_page":
                            s = "revive_page", this.IsSelectType = "revive_page";
                            break;

                        case "end_page":
                            s = "end_page", this.IsSelectType = "end_page";
                            break;

                        case "home_page":
                            s = "home_page", this.IsSelectType = "home_page";
                            break;

                        case "game_page":
                            s = "game_page", this.IsSelectType = "game_page";
                    }
                    if ("end_page" != this.IsSelectType) {
                        var u = n.util.getArrayValueParam(o.default.app.mWX.mOnOff, "of_like"),
                            m = JSON.parse(u);
                        this.mCount = Number(m.count), this.mSpeed = Number(m.speed), this.mStop = Number(m.stop),
                            this.mMoveCt = Number(m.move_ct);
                        this.mPanel.width;
                        this.mMoveBack.removeChildren(), this.stopMove();
                        var d = this.getListData();
                        t.showList = [];
                        var h = a ? 10 : 0;
                        (r.MoreGame.mPhone.screenHeight >= 745 || Laya.stage.height / 2 >= 745) && (h = 0);
                        for (var f = function(n) {
                                var s = new i.ui.like.myLikeItemUI();
                                s.x = h, a && (r.MoreGame.mPhone.screenHeight < 745 || Laya.stage.height / 2 < 745) && (console.log("xxx3", r.MoreGame.mPhone.screenHeight, Laya.stage.height / 2),
                                    s.width = 170 * .7, s.scaleX = .6, s.scaleY = .6), h += s.width, s.centerY = 0;
                                var u = d[n].anim_config;
                                try {
                                    var m = JSON.parse(u);
                                    Number(m.frame), Number(m.millisecond);
                                } catch (e) {
                                    0,
                                    0;
                                }
                                t.showList.push(d[n].appid), s.mGameName.text = "", console.log("games[i]"), console.log(d[n]);
                                var f = l.JumpObjConverter.instance.convert(d[n]);
                                if (!f) return "continue";
                                var g = "";
                                console.log("Main.app.mWX.oddEvenTestModel.isAniTest", o.default.app.mWX.oddEvenTestModel.isAniTest),
                                    g = 1 == o.default.app.mWX.oddEvenTestModel.isAniTest ? d[n].url_icon : d[n].static_icon,
                                    console.log("ooo1:", g), "gameBottom" == e ? (g = d[n].url_icon, s.mGameIcon.skin = g,
                                        o.default.app.mWX.likeLoop = !1) : (s.mGameIcon.skin = d[n].url_icon, Laya.timer.once(200, c, function() {
                                        console.log("likeloop2"), o.default.app.mWX.likeLoop = !0;
                                        var e = 0;
                                        if (2 == o.default.app.mWX.moreFenFaNum) {
                                            (t = JSON.parse(u).group_static.split(",")).length > 1 && (e = Number(t[0]) + 1,
                                                g = g.replace("_1.", "_" + e + ".")), console.log("likeloop2", g, f.small_frame);
                                        } else if (3 == o.default.app.mWX.moreFenFaNum) {
                                            var t = JSON.parse(u).group_static.split(",");
                                            t.length > 2 && (e = Number(t[0]) + Number(t[1]) + 1, g = g.replace("_1.", "_" + e + ".")),
                                                console.log("likeloop2222", g, f.small_frame);
                                        }
                                        console.log("likeloop3333333333", g, f.small_frame, e), p.JumpAniCtl.instance.ani(s.mGameIcon, g, f.small_frame, f.small_interval, f.millisecond, e);
                                    })), s.on(Laya.Event.CLICK, c, c.onclick, [d[n].appid, d[n].gameid, e]), c.mMoveBack.addChild(s);
                            }, c = this, g = 0; g < d.length && g < this.mCount; ++g) f(g);
                        this.mMoveBack.width = h, o.default.app.mWX.indexBpTotle("recom_show", {
                            game_show_list: t.showList,
                            position_type: "banner",
                            from_page: s
                        }), this.moveLikeGame();
                    }
                }, t.prototype.getListData = function() {
                    var e = r.MoreGame.GetIndexRandomList(o.default.app.mWX.mGamesBox, 9);
                    console.log("-- 猜你喜欢banner 初始九个白名单 --", e);
                    var t = {};
                    t.type = "big";
                    for (u = 0; u < e.length; u++) 1 == o.default.app.mWX.moreFenFaNum ? t["game_" + u] = [e[u].name, 1] : o.default.app.mWX.moreFenFaNum >= 2 ? t["game_" + u] = [e[u].name, JSON.parse(e[u].anim_config).millisecond_static.split(",").length > 1 ? JSON.parse(e[u].anim_config).millisecond_static.split(",").length : 1] : 0 == o.default.app.mWX.moreFenFaNum && (t["game_" + u] = [e[u].name, 0]);
                    o.default.app.mWX.indexBpTotle("gif_show", t);
                    var a = [],
                        i = [],
                        n = [],
                        s = o.default.app.mWX.getUserDataByKey("clickLikeArr");
                    if (!s || "0" == s) return console.log("-- clickLikeStr = null --", e), r.MoreGame.GetIndexRandomList(e, this.mCount);
                    n = JSON.parse(s), console.log("-- 猜你喜欢banner 初始clickLikeArr --", n);
                    for (u = 0; u < e.length; u++) {
                        var l = e[u]; -
                        1 == n.indexOf(l.gameid) ? i.push(l) : a.push(l);
                    }
                    if (i.length >= this.mCount) return console.log("-- noListData.length >= this.mCount --", i),
                        r.MoreGame.GetIndexRandomList(i, this.mCount);
                    if (i.length < this.mCount) {
                        for (var p = r.MoreGame.GetIndexRandomList(a, this.mCount - i.length), u = 0; u < p.length; u++) {
                            var m = p[u];
                            i.push(m);
                        }
                        return console.log("-- noListData.length < this.mCount --", i), r.MoreGame.GetIndexRandomList(i, this.mCount);
                    }
                }, t.prototype.setMoreJumpType = function(e, t) {
                    for (var a = 0; a < o.default.app.mWX.mGamesBox.length; ++a) Number(o.default.app.mWX.mGamesBox[a].gameid) == e && (o.default.app.mWX.mGamesBox[a].jump_type = t);
                }, t.prototype.getMoreJumpType = function(e) {
                    for (var t = 0; t < o.default.app.mWX.mGamesBox.length; ++t)
                        if (Number(o.default.app.mWX.mGamesBox[t].gameid) == e) return Number(o.default.app.mWX.mGamesBox[t].jump_type);
                    return 3;
                }, t.prototype.onclick = function(e, t, a) {
                    if (console.log("-- onclick123 --", e, t, a), s.gameBox.isClickJump) {
                        if (s.gameBox.isClickJump = !1, o.default.app.clickAppId = e, o.default.app.clickGameId = Number(t),
                            o.default.app.clickFromPage = String(a), !Laya.Browser.onIOS) {
                            console.log("-- onclick --", t + a);
                            var i = o.default.app.mWX.getUserDataByKey("clickLikeArr");
                            i && "0" != i && (o.default.app.clickLikeArr = JSON.parse(i)), console.log("猜你喜欢点击，", o.default.app.clickLikeArr),
                                o.default.app.clickLikeArr.length > 0 ? -1 == o.default.app.clickLikeArr.indexOf(t) ? this.changeGameid(e, t) : this.setMoreJumpType(t, 3) : this.changeGameid(e, t);
                        }
                        s.gameBox.isCallNavigation = "homeIcon" == a ? 1 : "homeBottom" == a ? 2 : "gameIcon" == a ? 3 : "revive" == a ? 4 : "arrowDead" == a ? 5 : "arrowSkin" == a ? 6 : "corpseSkin" == a ? 7 : "result" == a ? 8 : "baokuan" == a ? 10 : "fakerxcxlist" == a ? 11 : 9,
                            s.gameBox.showBoxPage(e, o.default.app.mWX.mGamesBox, "天天切菜3D");
                    }
                }, t.prototype.changeGameid = function(e, t) {
                    for (var a = 0; a < r.WriteBoxList.mWriteBox.length; ++a) {
                        if (e.toUpperCase() == r.WriteBoxList.mWriteBox[a].toUpperCase()) {
                            3 == this.getMoreJumpType(t) && this.setMoreJumpType(t, 1);
                            break;
                        }
                    }
                }, t.prototype.moveLikeGame = function() {
                    function e() {
                        var e = Math.abs(o),
                            a = Math.abs(o - n.mMoveBack.x) * n.mSpeed / e;
                        Laya.Tween.to(n.mMoveBack, {
                            x: o
                        }, a, null, new Laya.Handler(n, t), n.mStop);
                    }

                    function t() {
                        var t = Math.abs(o),
                            a = Math.abs(0 - n.mMoveBack.x) * n.mSpeed / t;
                        Laya.Tween.to(n.mMoveBack, {
                            x: 0
                        }, a, null, new Laya.Handler(n, e), n.mStop);
                    }

                    function a() {
                        for (var e = n.mMoveBack.numChildren, t = n.mMoveBack.getChildAt(0).width * n.mMoveCt, a = -(n.mMoveBack.width - n.mPanel.width), o = n.mMoveBack.x, r = 1; r < e; ++r) {
                            var s = o - t * r;
                            if (s < a && (s = a), r == e - 1 || s == a) {
                                Laya.Tween.to(n.mMoveBack, {
                                    x: s
                                }, n.mSpeed, null, new Laya.Handler(n, i), n.mStop * r + n.mSpeed * r);
                                break;
                            }
                            Laya.Tween.to(n.mMoveBack, {
                                x: s
                            }, n.mSpeed, null, null, n.mStop * r);
                        }
                    }

                    function i() {
                        for (var e = n.mMoveBack.numChildren, t = n.mMoveBack.getChildAt(0).width * n.mMoveCt, i = (n.mMoveBack.width,
                                n.mPanel.width, n.mMoveBack.x), o = 1; o < e; ++o) {
                            var r = i + t * o;
                            if (r > 0 && (r = 0), o == e - 1 || 0 == r) {
                                Laya.Tween.to(n.mMoveBack, {
                                    x: r
                                }, n.mSpeed, null, new Laya.Handler(n, a), n.mStop * o + n.mSpeed * o);
                                break;
                            }
                            Laya.Tween.to(n.mMoveBack, {
                                x: r
                            }, n.mSpeed, null, null, n.mStop * o);
                        }
                    }
                    var n = this,
                        o = -(n.mMoveBack.width - n.mPanel.width);
                    o >= 0 || (n.mMoveBack.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag), n.mMoveBack.on(Laya.Event.DRAG_MOVE, this, this.onDragMove),
                        n.mMoveBack.on(Laya.Event.DRAG_END, this, this.onDragEnd), 0 == n.mMoveCt ? n.mMoveBack.x >= 0 ? e() : t() : n.mMoveBack.x >= 0 ? a() : i());
                }, t.prototype.onStartDrag = function() {
                    var e = -(this.mMoveBack.width - this.mPanel.width);
                    if (!(e >= 0)) {
                        var t = new Laya.Rectangle(e, 0, Math.abs(e), 0);
                        console.log(t), this.mMoveBack.startDrag(t), this.mMoveBack.on(Laya.Event.DRAG_START, this, this.onDragStart);
                    }
                }, t.prototype.onDragStart = function(e) {
                    for (var t = 0; t < this.mMoveBack.numChildren; ++t) {
                        this.mMoveBack.getChildAt(t).mouseEnabled = !1;
                    }
                }, t.prototype.onDragMove = function() {
                    this.stopMove();
                }, t.prototype.onDragEnd = function() {
                    this.mMoveBack.off(Laya.Event.DRAG_START, this, this.onDragStart), this.mMoveBack.off(Laya.Event.MOUSE_DOWN, this, this.onStartDrag),
                        this.mMoveBack.off(Laya.Event.DRAG_MOVE, this, this.onDragMove), this.mMoveBack.off(Laya.Event.DRAG_END, this, this.onDragEnd);
                    for (var e = 0; e < this.mMoveBack.numChildren; ++e) {
                        this.mMoveBack.getChildAt(e).mouseEnabled = !0;
                    }
                    this.moveLikeGame();
                }, t.prototype.stopMove = function() {
                    Laya.Tween.clearAll(this.mMoveBack);
                }, t.prototype.closeViewAndFlash = function() {
                    this.isLoop = !1, console.log("likeLoopfalse3"), o.default.app.mWX.likeLoop = !1,
                        console.log("dudududuududduudud");
                }, t.showList = [], t.jumpCount = {}, t.clickDic = {}, t;
            }(i.ui.like.myLikeViewUI);
        a.default = u;
    }, {
        "../Core/JumpAniCtl": 3,
        "../Core/JumpObjConverter": 4,
        "../Core/MoreGame": 6,
        "../Core/gameBox": 8,
        "../Core/util": 9,
        "../Main": 14,
        "../ui/layaMaxUI": 47
    }],
    35: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../ui/layaMaxUI"),
            n = e("../Main"),
            o = e("../core/MoreGame"),
            r = e("./gameObject/PlayerCtrl"),
            s = e("../GameConfig"),
            l = e("./GameManager"),
            p = e("./GameUI"),
            u = e("../util/ShareUtil"),
            m = e("./SoundPlayMgr"),
            d = e("../core/JumpAniCtl"),
            h = e("../core/JumpObjConverter"),
            f = e("../core/gameBox"),
            c = e("./MyLikeView2"),
            g = e("../util/ADUtil"),
            y = e("../core/wxCore"),
            _ = e("../core/BaoKuanTuiJian"),
            v = function(e) {
                function t(t) {
                    var a = e.call(this) || this;
                    a.intType = 1e3,
                        a.numType = 1e3,
                        a.strType = "hello laya",
                        a.boolType = !0, a.type = null,
                        a.revive_num = 0, a.revive_big = 1,
                        a.reviveNum = 5,
                        a.reviveiMG = ["button/djs1.png", "button/djs2.png", "button/djs3.png", "button/djs4.png", "button/djs5.png"],
                        a.result_showList = new Array(),
                        a.isLoader = [0, 0, 0, 0, 0, 0],
                        a.isLoop = !1,
                        a.baokuanyouxi = null,
                        a.height = Laya.stage.height;
                    var i = n.default.app.mWX.getMenuButtonTop_CenterPoint();
                    return a.listBox.y = (Laya.stage.height - 1334) / 2 + 200,
                        a.txt_gold.text = n.default.app.mWX.getUserDataByKey("gold"),
                        a.type = t,
                        Laya.timer.once(200, a, function() {
                            a.yad.on(Laya.Event.MOUSE_DOWN, a, () => {
                                platform.getInstance().navigate("GAME", "LOGO");
                            });
                            a.btn_revive.on(Laya.Event.CLICK, a, a.onRevive),
                                a.btn_next.on(Laya.Event.CLICK, a, a.onNext, [5]),
                                a.btn_again.on(Laya.Event.CLICK, a, a.onAgain), a.btn_skip.on(Laya.Event.CLICK, a, a.onSkip);
                        }),
                        a.reviveNum = 5,
                        a.reviveiMG = ["button/djs1.png", "button/djs2.png", "button/djs3.png", "button/djs4.png", "button/djs5.png"],
                        a.daojishi.skin = a.reviveiMG[a.reviveNum - 1],
                        "Die" == a.type ? (
                            a.revive_num < a.revive_big ? (a.reviveBox.visible = !0, a.endBox.visible = !1,
                                0 == n.default.app.mWX.fhOnoff ? a.btn_revive.skin = "button/fuhuo1.png" :
                                1 == n.default.app.mWX.getOnOffAllControl() ? a.btn_revive.skin = "button/fuhuo2.png" : a.btn_revive.skin = "button/fuhuo1.png",
                                a.btn_skip.visible = !1,
                                Laya.timer.once(n.default.app.mWX.getOnOffRewardSkip(), a, function() {
                                    a.btn_skip.visible = !0;
                                }), a.isLoop = !0, Laya.timer.loop(1e3, a, function() {
                                    a.dsjLoop();
                                })) : a.toNewEnd()) : a.toNewEnd(),
                        a;
                }
                return __extends(t, e), t.prototype.dsjLoop = function() {
                        if (this.isLoop) {
                            if (this.reviveNum -= 1, 0 == this.reviveNum) return this.isLoop = !1, Laya.timer.clear(this, this.dsjLoop),
                                void this.toNewEnd();
                            this.daojishi.skin = this.reviveiMG[this.reviveNum - 1];
                        }
                    }, t.prototype.toNewEnd = function() {
                        var e = this;
                        this.toEnd();
                    }, t.prototype.toEnd = function() {
                        var e = this;
                        this.reviveBox.visible = !1,
                            this.endBox.visible = !0,
                            this.reviveNum = 0,


                            "Die" == this.type ? (this.title.skin = "button/fail.png", this.btn_next.visible = !1,
                                this.btn_again.visible = !1, n.default.app.isStartReward = !0,
                                Laya.timer.once(n.default.app.mWX.getOnOffRewardSkip(),
                                    this,
                                    function() {
                                        e.btn_again.visible = !0;
                                    })) : (
                                this.title.skin = "button/success.png",
                                this.btn_next.visible = !1, this.btn_again.visible = !1,
                                Laya.timer.once(n.default.app.mWX.getOnOffRewardSkip(), this, function() {
                                    e.btn_next.visible = !0;
                                }), n.default.app.Level_num++,
                                n.default.app.mWX.setUserValue("Level_num", "" + n.default.app.Level_num));
                        var t = [];
                        n.default.app.Level_num / 5 == 0 && ("" == n.default.app.mWX.getUserDataByKey("food_skin") ? (t = [0, 1, 2],
                            n.default.app.mWX.setUserValue("food_skin", JSON.stringify(t))) : ((t = JSON.parse(n.default.app.mWX.getUserDataByKey("food_skin")))[t.length + 1] = t.length,
                            n.default.app.mWX.setUserValue("food_skin", JSON.stringify(t))));
                        var a = {
                            is_level_complete: "Die" == this.type ? 0 : 1,
                            level: Number(n.default.app.Level_num - 1)
                        };
                        this.isLoader = [0, 0, 0, 0, 0, 0];

                    },
                    t.prototype.btnOff = function() {
                        this.btn_revive.off(Laya.Event.CLICK, this, this.onRevive), this.btn_next.off(Laya.Event.CLICK, this, this.onNext);
                    },
                    t.prototype.moreGame = function() {
                        this.gameList.array = platform.getInstance().getForgames();
                        this.gameList.renderHandler = new Laya.Handler(this, this.updataGameList);
                    },

                    t.prototype.updataGameList = function(e, t) {
                        e.offAll(Laya.Event.MOUSE_DOWN);
                        e.on(Laya.Event.MOUSE_DOWN, this, () => {
                            platform.getInstance().navigate("GAME", "MORE", e.dataSource.id);
                        });

                    }, t.prototype.onShowGame = function(e) {
                        if (f.gameBox.isClickJump) {
                            var t = n.default.app.mWX.getMoreUrl(e);
                            if (null == t) return;
                            this.result_gameid = e, this.mlike.onclick(t.appid, t.gameid, "result");
                        }
                    }, t.prototype.rotateIcon = function(e, t) {
                        e.rotation = -90, Laya.Tween.to(e, {
                            rotation: 0
                        }, 450, null, Laya.Handler.create(this, function() {
                            t.run();
                        }));
                    }, t.prototype.onEnable = function() {
                        this.moreGame();

                    }, t.prototype.onDisable = function() {
                        this.gameList.array = []
                    },
                    t.prototype.flyGold = function(e, t) {
                        var a = this;
                        void 0 === e && (e = null), this.btnOff();
                        var i = [],
                            o = 25;
                        Laya.stage.height > 1400 && (o = 90);
                        this.txt_gold.localToGlobal(Laya.Point.TEMP);
                        if ("Win" == this.type) {
                            for (var r = 0; r < 10; r++) {
                                i[r] = new Laya.Image(), i[r].skin = "start/img_gold.png", this.addChild(i[r]);
                                var s = 60 * Math.random();
                                i[r].pos(300 + s, 1038), Laya.Tween.to(i[r], {
                                    x: 30,
                                    y: o
                                }, 300, null, Laya.Handler.create(this, function() {
                                    a.txt_gold.text = Number(a.txt_gold.text) + t + "";
                                }), 80 * r);
                            }
                            Laya.timer.once(1500, this, function() {
                                n.default.app.mWX.setUserValue("gold", a.txt_gold.text);
                                for (var t = 0; t < i.length; t++) i[t].removeSelf(), i[t].destroy();
                                null != e && e();
                            });
                        } else {
                            for (var l = 0; l < i.length; l++) i[l].removeSelf(), i[l].destroy();
                            null != e && e();
                        }
                    }, t.prototype.onNext = function(e) {
                        var t = this;
                        platform.getInstance().showInterstitial(() => {
                            this.bkonNext(e);
                        });

                    }, t.prototype.onGold = function() {
                        var e = this;
                        0 == n.default.app.mWX.fhOnoff ? this.onNext(25) : 1 == n.default.app.mWX.getOnOffAllControl() ? g.ADUtil.playVideo(function() {
                                e.onNext(25);
                            }, function() {
                                u.ShareUtil.shareProp(function() {
                                    e.onNext(25);
                                });
                            },
                            function() {}
                        ) : 2 == n.default.app.mWX.getOnOffAllControl() && u.ShareUtil.shareProp(function() {
                            e.onNext(25);
                        });
                    },
                    t.prototype.onRevive = function() {
                        var e = this;
                        // this.isLoop = !1, 
                        platform.getInstance().showReward(() => {
                            console.log("revive++++++++++++?");
                            e.revive_num++, r.default.instance.ResetKnife(), e.onClose(!0);
                        });

                    }, t.prototype.onClear = function() {
                        this.onNext(5);
                    }, t.prototype.onAgain = function() {
                        var e = this;
                        if (n.default.app.mWX.likeLoop = !1, null == this.baokuanyouxi) {
                            var t = !1;
                            0 == n.default.app.mWX.IsOpenBKYX() ? 1 == y.default.uo.mIsNewUser && (t = !0) : 2 == n.default.app.mWX.IsOpenBKYX() && (t = !0),
                                t && n.default.app.mWX.BKYXNotShowList().indexOf(Number(n.default.app.Level_num - 1)) < 0 ? (this.baokuanyouxi = new _.default(),
                                    Laya.stage.addChild(this.baokuanyouxi), this.baokuanyouxi.zOrder = 99, this.baokuanyouxi.onShow(!0, function() {
                                        e.bkonAgain(), e.baokuanyouxi = null;
                                    })) : this.bkonAgain();
                        } else this.bkonAgain();
                    }, t.prototype.bkonAgain = function() {
                        l.default.instance.sceneClear(), l.default.instance.showSuccessEffect(!1), null != p.default.app.scene3D && (p.default.app.scene3D.removeSelf(),
                            p.default.app.scene3D = null), p.default.app.visible = !1, this.onClose(), Laya.Scene.open(s.default.startScene, !1);
                    }, t.prototype.bkonNext = function(e) {
                        var t = this;
                        this.flyGold(function() {
                            l.default.instance.sceneClear(), l.default.instance.showSuccessEffect(!1), null != p.default.app.scene3D && (p.default.app.scene3D.removeSelf(),
                                p.default.app.scene3D = null), p.default.app.visible = !1, t.onClose(), Laya.Scene.open(s.default.startScene, !1);
                        }, e);
                    }, t.prototype.onSkip = function() {
                        this.reviveNum > 0 && (this.reviveNum = 0, Laya.timer.clear(this, this.dsjLoop),
                            this.toNewEnd());
                    }, t.prototype.onClose = function(e) {
                        void 0 === e && (e = !1), Laya.timer.clear(this, this.dsjLoop),
                            e || (console.log("likeLoopfalse2"), n.default.app.mWX.likeLoop = !1), m.SoundPlayMgr.instance.playGSound("sound/btn_click");
                        n.default.app.mWX.indexBpTotle("back_home", {}), this.btn_revive.off(Laya.Event.CLICK, this, this.onRevive),
                            this.btn_next.off(Laya.Event.CLICK, this, this.onNext), n.default.app.resultView.removeSelf(),
                            n.default.app.resultView.destroy(), n.default.app.resultView = null;
                    }, t;
            }(i.ui.page.ResultViewUI);
        a.default = v;
    }, {
        "../GameConfig": 13,
        "../Main": 14,
        "../core/BaoKuanTuiJian": 15,
        "../core/JumpAniCtl": 19,
        "../core/JumpObjConverter": 20,
        "../core/MoreGame": 22,
        "../core/gameBox": 24,
        "../core/wxCore": 27,
        "../ui/layaMaxUI": 47,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "./GameManager": 29,
        "./GameUI": 30,
        "./MyLikeView2": 34,
        "./SoundPlayMgr": 37,
        "./gameObject/PlayerCtrl": 45
    }],
    36: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./../ui/layaMaxUI"),
            n = e("../Main"),
            o = e("../util/ShareUtil"),
            r = e("./SoundPlayMgr"),
            s = e("../util/ADUtil"),
            l = function(e) {
                function t(a) {
                    var i = e.call(this) || this;
                    i.intType = 1e3, i.numType = 1e3,
                        i.strType = "hello laya",
                        i.boolType = !0,
                        i.food = [], i.knife = [],
                        i.page_num = 0, i.type = null,
                        i.btn_gold_num = 6, i.isNoClick = !1,
                        i.zOrder = 999,
                        Laya.stage.height > 1400 && (i.bg.top = 150),
                        i.btn_close.on(Laya.Event.CLICK, i, i.onClose),
                        i.btn_right.visible = !1, i.btn_left.visible = !1,
                        i.btn_unlock.on(Laya.Event.CLICK, i, i.getNewSkin),
                        i.btn_gold.on(Laya.Event.CLICK, i, i.onGold), i.type = a,
                        i.txt_gold.text = n.default.app.mWX.getUserDataByKey("gold");
                    if ("food" == a) {
                        i.title.skin = "shop/img_title1.png",
                            i.data_skin = n.default.app.mWX.getUserDataByKey("food_skin") || "",
                            t.skin_id = Number(n.default.app.mWX.getUserDataByKey("food_skin_id"));
                        i.unlockNum.text = 300 + "";
                        if ("" == i.data_skin) {
                            i.data_skin = [1, 2, 3],
                                n.default.app.mWX.setUserValue("food_skin", JSON.stringify(i.data_skin)),
                                n.default.app.mWX.setUserValue("food_skin_id", "1");
                        } else {
                            i.data_skin = JSON.parse(n.default.app.mWX.getUserDataByKey("food_skin"));
                        }
                    } else {
                        i.unlockNum.text = 1000 + "";
                        i.title.skin = "shop/img_title2.png",
                            i.data_skin = n.default.app.mWX.getUserDataByKey("knife_skin") || "",
                            t.skin_id = Number(n.default.app.mWX.getUserDataByKey("knife_skin_id")),
                            "" == i.data_skin ? (i.data_skin = [1],
                                n.default.app.mWX.setUserValue("knife_skin", JSON.stringify(i.data_skin)),
                                n.default.app.mWX.setUserValue("knife_skin_id", "1")) :
                            i.data_skin = JSON.parse(n.default.app.mWX.getUserDataByKey("knife_skin"))
                    }
                    i.btn_gold.skin = "shop/btn_get1.png"
                    0 == i.food.length && i.updateMassage(a),
                        i.displayView();
                    return i;
                }
                return __extends(t, e),
                    t.prototype.onEnable = function() {},
                    t.prototype.onDisable = function() {},
                    t.prototype.displayView = function() {
                        "food" == this.type ? this.list.array = this.food : this.list.array = this.knife;
                        this.list.vScrollBarSkin = "";
                        if (this.data_skin.length == this.list.array.length) {
                            this.btn_unlock.visible = false;
                            this.btn_gold.x = 209;
                        }
                        this.list.renderHandler = new Laya.Handler(this, this.onListRender);
                    },
                    t.prototype.onListRender = function(e, a) {
                        var i = e.getChildByName("icon"),
                            n = e.getChildByName("iconName"),
                            o = e.getChildByName("select");
                        n.visible = false;
                        if ("food" == this.type) {
                            r = this.food;
                            this.img_level.skin = "shop/img_level1.png";
                        } else {
                            var r = this.knife;
                            0 == this.page_num ? this.img_level.skin = "shop/img_level1.png" :
                                1 == this.page_num ? this.img_level.skin = "shop/img_level2.png" :
                                2 == this.page_num && (this.img_level.skin = "shop/img_level3.png");
                        }
                        if (-1 == this.data_skin.indexOf(Number(e.dataSource.id))) {
                            i.skin = "shop/img_what.png"
                        } else {
                            i.skin = this.type + "/" + e.dataSource.name + ".png"
                        }

                        if ("food" == this.type) {

                        } else {
                            o.visible = a == (t.skin_id - 1);
                            if (o.visible) {
                                this.curKnife = e;
                            }
                            e.on(Laya.Event.CLICK, this, this.onBtnBox, [e]);
                        }

                    }, t.prototype.onBtnBox = function(e, a) {

                        if ("food" == this.type) {

                        } else {
                            if (-1 == this.data_skin.indexOf(Number(e.dataSource.id))) return;

                            if (this.curKnife) {
                                this.curKnife.getChildByName("select").visible = false;
                            }
                            e.getChildByName("select").visible = true;
                            this.curKnife = e;
                            n.default.app.mWX.setUserValue("knife_skin_id", "" + e.dataSource.id);
                        }
                    }, t.prototype.getNewSkin = function() {
                        var e = this;
                        if (this.data_skin.length == this.list.array.length) {
                            // platform.getInstance().showMsg("Item Already Owned");
                            platform.getInstance().prompt("Item Already Owned");
                            return "";
                        }
                        if (Number(this.txt_gold.text) >= Number(this.unlockNum.text)) {
                            if ("food" == this.type) {
                                var tt = this.data_skin[this.data_skin.length - 1];
                                this.data_skin[this.data_skin.length] = tt + 1;
                                t.skin_id = tt;
                                n.default.app.mWX.setUserValue("food_skin_id", "" + t.skin_id);
                                n.default.app.mWX.setUserValue("food_skin", JSON.stringify(this.data_skin));
                                this.list.refresh();
                                this.list.scrollTo(t.skin_id);
                            } else {

                                var a = [];
                                var k;
                                for (let i = 0; i < this.list.array.length; i++) {
                                    k = this.list.array[i].id;
                                    if (this.data_skin.indexOf(Number(k)) == -1) {
                                        a.push(k);
                                    }
                                }
                                if (0 == a.length) return;
                                var o = Math.floor(Math.random() * a.length);
                                this.data_skin[this.data_skin.length] = Number(a[o]),

                                    t.skin_id = Number(a[o]);
                                n.default.app.mWX.setUserValue("knife_skin_id", "" + t.skin_id);
                                n.default.app.mWX.setUserValue("knife_skin", JSON.stringify(this.data_skin)),
                                    e.data_skin = JSON.parse(n.default.app.mWX.getUserDataByKey("knife_skin"));

                                this.list.refresh();
                                this.list.scrollTo(t.skin_id);
                            }
                            if (this.data_skin.length == this.list.length) {
                                this.btn_unlock.visible = false;
                                this.btn_gold.x = 209;
                            }
                            var l = Number(this.txt_gold.text) - Number(this.unlockNum.text);
                            n.default.app.mWX.setUserValue("gold", "" + l);
                            this.txt_gold.text = "" + l;

                        } else {
                            // platform.getInstance().showMsg("Coin is not enough ");
                            platform.getInstance().prompt("Coin is not enough ");
                        };
                    }, t.prototype.changeSkin = function(e) {
                        var a = this;
                        if (t.skin_id != e) {
                            var i = this.list.getCell(e);
                            var r;
                            var o = i && i.getChildByName("select");
                            if (o) {
                                r = i.getChildByName("icon");
                                o.visible = true;
                            }
                            let sb = this.list.getCell(t.skin_id);
                            if (sb) {
                                sb.getChildByName("select").visible = !1;
                            }
                            r && (r.skin = this.type + "/" + s[e].name + ".png");
                        }
                    }, t.prototype.updateMassage = function(e) {
                        var t = Laya.loader.getRes("res/shop.json");
                        this.food = t.food, this.knife = t.knife;
                    }, t.prototype.onBtn = function(e) {
                        if (this.page_num = this.page_num + e, this.page_num < 0 && (this.page_num = 0),
                            "food" == this.type) {
                            this.list.array = this.food;
                            t = this.food.length / 9;
                        } else {
                            this.list.array = this.knife;
                            var t = this.knife.length / 9;
                        }
                        this.page_num >= t && (this.page_num = t - 1);
                    }, t.prototype.onGold = function() {


                        platform.getInstance().showReward(() => {
                            this.txt_gold.text = (Number(this.txt_gold.text) + 150).toString();
                            n.default.app.mWX.setUserValue("gold", this.txt_gold.text);

                        });

                    }, t.prototype.onClose = function() {
                        "food" != this.type && this.event(t.CHANGESKIN), n.default.app.shopView.removeSelf(),
                            n.default.app.shopView.destroy(), n.default.app.shopView = null;
                    }, t.skin_id = 0, t.CHANGESKIN = "CHANGESKIN", t;
            }(i.ui.page.ShopViewUI);
        a.default = l;
    }, {
        "../Main": 14,
        "../util/ADUtil": 48,
        "../util/ShareUtil": 52,
        "./../ui/layaMaxUI": 47,
        "./SoundPlayMgr": 37
    }],
    37: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = function() {
                function e() {
                    this.resUrl = "", this.soundUrl = "", this.mp3 = ".mp3", this._musicVolume = 1,
                        this._soundVolume = 1, this._soundMuted = !1, this._canPlayBallHit = !0, this._canPlayBowlHit = !0,
                        this._isPlayingStick = !1, Laya.Browser.onMiniGame && (this._wx = Laya.Browser.window.wx),
                        this.stickPlayTimeout();
                }
                return Object.defineProperty(e, "instance", {
                        get: function() {
                            return null == this._instance && (this._instance = new e()), this._instance;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.closeVoice = function() {
                        this._soundMuted = !0, this.stopSound(this.resUrl + "bgm1.mp3");
                    }, e.prototype.openVoice = function() {
                        this._soundMuted = !1, this.playBgMusic();
                    }, e.prototype.getUrl = function(e) {
                        return e;
                    }, e.prototype.stopSound = function(e) {
                        Laya.SoundManager.stopSound(this.getUrl(e));
                    }, e.prototype.playSound = function(e, t) {
                        0 == this._soundMuted && Laya.SoundManager.playSound(e, t);
                    }, e.prototype.playBgMusic = function(e) {
                        void 0 === e && (e = 1), this._soundMuted || Laya.SoundManager.playMusic(this.getUrl(this.resUrl + "bgm" + e + ".mp3"), 0);
                    }, e.prototype.playGSound = function(e) {
                        this.playSound(this.soundUrl + e + this.mp3);
                    }, e.prototype.stopAll = function() {
                        Laya.SoundManager.stopAll();
                    }, e.prototype.playClick = function() {
                        this.playGSound("ui_button_click");
                    }, e.prototype.playBack = function() {
                        this.playGSound("ui_back");
                    }, e.prototype.playPause = function() {
                        this.playGSound("ui_pause");
                    }, e.prototype.playStart = function() {
                        this.playGSound("ui_start");
                    }, e.prototype.playBallHit = function() {
                        this._canPlayBallHit && (this._canPlayBallHit = !1, Laya.timer.once(1e3, this, function() {
                            this._canPlayBallHit = !0;
                        }));
                    }, e.prototype.playTimeUp = function() {
                        this.playGSound("times_up");
                    }, e.prototype.playBowlHit = function() {
                        e.is_play && (Laya.timer.once(200, this, function() {
                            e.is_play = !1;
                        }), this.playGSound("glass_hit_intensity_2_01"));
                    }, e.prototype.playShapeClick = function() {
                        this.playGSound("Pop"), this._wx && this._wx.vibrateShort();
                    }, e.prototype.playStick = function() {
                        if (!this._isPlayingStick) {
                            this._isPlayingStick = !0;
                            var e = this.soundUrl + "ui_pause" + this.mp3;
                            Laya.SoundManager.playSound(this.getUrl(e), 1, Laya.Handler.create(this, function() {
                                this._isPlayingStick = !1;
                            })), Laya.SoundManager.setSoundVolume(.5, this.getUrl(e));
                        }
                    }, e.prototype.stickPlayTimeout = function() {
                        Laya.timer.loop(3e3, this, function() {
                            this._isPlayingStick = !1;
                        });
                    }, e.MUSIC_VOLUME = "MUSIC_VOLUME", e.SOUND_VOLUME = "SOUND_VOLUME", e.is_play = !1,
                    e;
            }();
        a.SoundPlayMgr = n;
    }, {
        "../Main": 14
    }],
    38: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./gameObject/Food"),
            n = e("./gameObject/BoardBad"),
            o = e("./gameObject/BoardDie"),
            r = e("./gameObject/BoardSuccess"),
            s = e("./StartView"),
            l = e("../Main"),
            p = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.CreateObj = [], t.CreateIndex = 0, t;
                }
                return __extends(t, e), Object.defineProperty(t, "instance", {
                        get: function() {
                            return null == this._instance && (this._instance = new t()), this._instance;
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.onAwake = function() {}, t.prototype.createGameObject = function(e, t) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = 6), 0 == this.CreateObj.length) {
                            if (window.wx) a = Laya.loader.getRes(l.default.app.URL + "res/level.json");
                            else var a = Laya.loader.getRes("res/level.json");
                            this.CreateObj = a.level1;
                        }
                        this.CreateObj[this.CreateIndex] || (this.CreateIndex = 0);
                        var p = this.CreateObj[this.CreateIndex].id,
                            u = this.CreateObj[this.CreateIndex].type;
                        this.CreateIndex++;
                        var m = Laya.loader.getRes("Scenes/" + p + ".lh"),
                            d = Laya.Sprite3D.instantiate(m);

                        switch (u) {
                            case 1:
                                d.addComponent(i.default);
                                break;

                            case 2:
                                d.addComponent(n.default);
                                break;

                            case 3:
                                d.addComponent(o.default);
                                break;

                            case 99:
                                d.addComponent(r.default);
                                break;

                            default:
                                d.addComponent(i.default);
                        }
                        d.transform.position = Laya.Vector3._ZERO, d.transform.localPositionZ = e + t + .5,
                            s.default.app.ObjCreatPos.addChild(d);
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.prototype.sceneClear = function() {
                        s.default.app.ObjCreatPos.destroyChildren(), this.CreateIndex = 0;
                    }, t;
            }(Laya.Script);
        a.default = p;
    }, {
        "../Main": 14,
        "./StartView": 39,
        "./gameObject/BoardBad": 41,
        "./gameObject/BoardDie": 42,
        "./gameObject/BoardSuccess": 43,
        "./gameObject/Food": 44
    }],
    39: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./../ui/layaMaxUI"),
            n = e("../Main"),
            o = e("./StartControl"),
            r = Laya.Event,
            s = e("./ShopView"),
            l = e("./SoundPlayMgr"),
            p = e("./MyLikeView2"),
            u = e("./GameUI"),
            m = e("./GetKnifeDialog"),
            d = function(e) {
                function t() {
                    var a = e.call(this) || this;
                    a.intType = 1e3, a.numType = 1e3, a.strType = "hello laya", a.boolType = !0,
                        a.scene3D = null, a.isStart = !1, a.mMyLike = null, a.isFirstToGame = 0, t.app = a,
                        a.height = Laya.stage.height
                    if (t.first) {
                        t.first = !1, a.isFirstToGame = 1, a.ScenesLoaded();

                    } else a.isFirstToGame = 2, a.ScenesLoaded();

                    // a.btn_food.on(Laya.Event.CLICK, a, a.onShop, [ "food" ]), 
                    // a.btn_food.on(r.MOUSE_DOWN, n.default.app, n.default.app.onBtnMouseDown, [ a.btn_food ]), 
                    // a.btn_food.on(r.MOUSE_OUT, n.default.app, n.default.app.onBtnMouseOut, [ a.btn_food ]), 
                    // a.btn_food.on(r.MOUSE_UP, n.default.app, n.default.app.onBtnMouseOut, [ a.btn_food ]), 
                    a.btn_knife.on(Laya.Event.CLICK, a, a.onShop, ["knife"]),
                        a.btn_knife.on(r.MOUSE_DOWN, n.default.app, n.default.app.onBtnMouseDown, [a.btn_knife]),
                        a.btn_knife.on(r.MOUSE_OUT, n.default.app, n.default.app.onBtnMouseOut, [a.btn_knife]),
                        a.btn_knife.on(r.MOUSE_UP, n.default.app, n.default.app.onBtnMouseOut, [a.btn_knife]);
                    a.yad.on(Laya.Event.MOUSE_DOWN, this, () => {
                        platform.getInstance().navigate("HOME", "LOGO");
                    })

                    n.default.app.Level_num = n.default.app.mWX.getUserDataByKey("Level_num")
                    return a;
                }
                return __extends(t, e), t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.prototype.ScenesLoaded = function() {
                        this.btn_start.on(Laya.Event.CLICK, this, this.onStart),
                            this.visible = !0, this.zOrder = 999,
                            this.isStart = !0, Laya.Scene.open("test/TestScene.scene", !1);
                    }, t.prototype.addObj = function() {
                        o.default.instance.createGameObject(0);
                    }, t.prototype.onStart = function() {

                        platform.getInstance().showInterstitial(() => {
                            if (!n.default.app.loadingShow) {
                                l.SoundPlayMgr.instance.playGSound("sound/btn_click"),
                                    this.clear();
                                n.default.app.mWX.indexBpTotle("start_button_click", {}),
                                    t.app.isStart = !1,
                                    u.default.app.showV(!0),
                                    0 != n.default.app.mWX.getOnOffStartReward() && (
                                        n.default.app.Level_num - n.default.app.mWX.getOnOffStartReward3()) % n.default.app.mWX.getOnOffStartReward2() == 0 && (null == n.default.app.getKnifeDialog ? (n.default.app.getKnifeDialog = new m.default(),
                                            Laya.stage.addChild(n.default.app.getKnifeDialog), n.default.app.getKnifeDialog.onShow(!0, m.default.START_REWARD)) :
                                        n.default.app.getKnifeDialog.onShow(!0, m.default.START_REWARD));
                            }
                        });

                    }, t.prototype.clear = function() {
                        this.visible = !1, console.log("likeLoopfalse1"), n.default.app.mWX.likeLoop = !1;
                    }, t.prototype.onShop = function(e) {
                        l.SoundPlayMgr.instance.playGSound("sound/btn_click"),
                            null == n.default.app.shopView && (
                                n.default.app.shopView = new s.default(e),
                                Laya.stage.addChild(n.default.app.shopView),
                                n.default.app.shopView.off(s.default.CHANGESKIN, u.default.app, u.default.app.onSkin),
                                n.default.app.shopView.on(s.default.CHANGESKIN, u.default.app, u.default.app.onSkin));
                    }, t.prototype.onSkin = function() {
                        var e = this;
                        if (0 != s.default.skin_id && (s.default.skin_id = Number(n.default.app.mWX.getUserDataByKey("knife_skin_id")),
                                0 != s.default.skin_id)) {
                            var t = "";
                            if (console.log("xxx2:", s.default.skin_id), 0 != s.default.skin_id) {
                                10 == s.default.skin_id ? t = "knife_0" : 11 == s.default.skin_id ? t = "knife_1" : 12 == s.default.skin_id ? t = "knife_2" : 13 == s.default.skin_id ? t = "knife_3" : 14 == s.default.skin_id ? t = "knife_4" : 15 == s.default.skin_id ? t = "knife_5" : 16 == s.default.skin_id ? t = "knife_6" : 17 == s.default.skin_id ? t = "knife_7" : 18 == s.default.skin_id ? t = "knife_8" : 1 == s.default.skin_id ? t = "knife_02" : 2 == s.default.skin_id ? t = "Knife_03" : 3 == s.default.skin_id ? t = "knife_04" : 4 == s.default.skin_id ? t = "knife_05" : 5 == s.default.skin_id ? t = "Knifes_06" : 6 == s.default.skin_id ? t = "Knifes_07" : 7 == s.default.skin_id ? t = "Knifes_08" : 8 == s.default.skin_id && (t = "Knifes_09");
                                var a = "Scenes/" + t + ".lh";

                                Laya.loader.create(a, Laya.Handler.create(this, function(t) {
                                    if (t) {
                                        var i = e.player.getChildByName("Knife"),
                                            n = Laya.loader.getRes(a);
                                        i.meshFilter.sharedMesh = n.meshFilter.sharedMesh;
                                        var o = n.meshRenderer.material.clone();
                                        i.meshRenderer.material = o;
                                    }
                                }));
                            }
                        }
                    }, t.prototype.onBGSkin = function() {
                        null != n.default.app.shopView && n.default.app.shopView.off(s.default.CHANGESKIN, this, this.onSkin);
                        var e = Math.floor(n.default.app.Level_num % 8);
                        7 == e && (e = 2);
                        var t = n.default.app.URL,
                            a = this.scene3D.getChildByName("Plane").meshRenderer.material;
                        Laya.Texture2D.load(t + "bg/" + e + ".jpg", Laya.Handler.create(this, function(e) {
                            a.albedoTexture = e;
                        }));
                    }, t.first = !0, t.data = null, t;
            }(i.ui.page.StartViewUI);
        a.default = d;
    }, {
        "../Main": 14,
        "./../ui/layaMaxUI": 47,
        "./GameUI": 30,
        "./GetKnifeDialog": 31,
        "./MyLikeView2": 34,
        "./ShopView": 36,
        "./SoundPlayMgr": 37,
        "./StartControl": 38
    }],
    40: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                this.length = {
                    Food_01: 5.5,
                    Food_02: 2,
                    Food_03: 3,
                    Food_04: 4,
                    Food_05: 5.5,
                    Food_06: 2,
                    Food_07: 5.5,
                    Food_08: 3,
                    Food_09: 5.5
                }, e.instance = this;
            }
            return e;
        }();
        a.default = i;
    }, {}],
    41: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../GameManager"),
            n = e("./PlayerCtrl"),
            o = e("../StartView"),
            r = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.shaked = !1, t.moveSpeed = new Laya.Vector3(0, 0, -.05), t._speed = new Laya.Vector3(0, 0, 0),
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {}, t.prototype.onEnable = function() {
                        var e = this;
                        this._owner = this.owner, this._trans = this._owner.transform, i.default.instance.isSuccess || Laya.timer.once(1e3, this, function() {
                            i.default.instance.createGameObject(e._trans.localPositionZ, 1);
                        }), Laya.timer.loop(10, this, this.foodMove);
                    }, t.prototype.onDisable = function() {
                        Laya.timer.clear(this, this.foodMove);
                    }, t.prototype.onUpdate = function() {},
                    t.prototype.foodMove = function() {
                        i.default.instance && (i.default.instance.Die && (i.default.instance.speed = 0),
                                Laya.Vector3.scale(this.moveSpeed, i.default.instance.speed, this._speed)), o.default.app.isStart && Laya.Vector3.scale(this.moveSpeed, 1, this._speed),
                            this._trans.translate(this._speed), this._trans.position.z <= -4 && (window.wx && wx.triggerGC(),
                                this._owner.removeSelf(), this._owner.destroyChildren(), this._owner.destroy(!0)),
                            o.default.app.isStart || this._trans.position.z >= 1.7 && this._trans.position.z <= 2.5 && i.default.instance.Cut && (
                                this.shaked || (n.default.instance.Shake(),
                                    this.shaked = !0));
                    }, t;
            }(Laya.Script3D);
        a.default = r;
    }, {
        "../GameManager": 29,
        "../StartView": 39,
        "./PlayerCtrl": 45
    }],
    42: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../GameManager"),
            n = e("./PlayerCtrl"),
            o = e("../StartView"),
            r = e("../../Main"),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.shaked = !1, t.moveSpeed = new Laya.Vector3(0, 0, -.05), t._speed = new Laya.Vector3(0, 0, 0),
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {}, t.prototype.onEnable = function() {
                        var e = this;
                        this._owner = this.owner, this._trans = this._owner.transform, Laya.timer.once(1e3, this, function() {
                            i.default.instance.createGameObject(e._trans.localPositionZ, 1);
                        }), Laya.timer.frameLoop(1, this, this.foodMove);
                    }, t.prototype.onDisable = function() {
                        Laya.timer.clear(this, this.foodMove);
                    }, t.prototype.onUpdate = function() {},


                    t.prototype.foodMove = function() {
                        i.default.instance && (i.default.instance.Die && (i.default.instance.speed = 0),
                                Laya.Vector3.scale(this.moveSpeed, i.default.instance.speed, this._speed)), o.default.app.isStart && Laya.Vector3.scale(this.moveSpeed, 1, this._speed),
                            this._trans.translate(this._speed), this._trans.position.z <= -4 && (window.wx && wx.triggerGC(),
                                this._owner.removeSelf(),
                                this._owner.destroyChildren(),
                                this._owner.destroy(!0));
                        if (o.default.app.isStar) {

                        } else {

                            if (this._trans.position.z >= 1.75 && this._trans.position.z <= 2.55) {
                                console.log("i.default.instance.Cut " + i.default.instance.Cut);
                                if (i.default.instance.Cut) {
                                    // &&  !r.default.app.is_success
                                    if (!this.shaked) {
                                        console.log("this.shaked", this.shaked)
                                        r.default.app.is_success = !1,
                                            n.default.instance.PlayerDie(), console.log("死了"), this.shaked = !0
                                    }
                                }

                            }
                        }
                        // o.default.app.isStart || this._trans.position.z >= 1.7 && this._trans.position.z <= 2.5 && i.default.instance.Cut &&
                        //  (

                        //     // this.shaked || r.default.app.is_success || ()


                        // );
                    }, t;
            }(Laya.Script3D);
        a.default = s;
    }, {
        "../../Main": 14,
        "../GameManager": 29,
        "../StartView": 39,
        "./PlayerCtrl": 45
    }],
    43: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../GameManager"),
            n = e("./PlayerCtrl"),
            o = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.shaked = !1, t.moveSpeed = new Laya.Vector3(0, 0, -.05), t._speed = new Laya.Vector3(0, 0, 0),
                        t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        this._owner = this.owner, this._trans = this._owner.transform, console.log("ZHENBAN!!!!!!!!!!!!");
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.prototype.onUpdate = function() {
                        this.foodMove();
                    }, t.prototype.foodMove = function() {
                        if (i.default.instance && Laya.Vector3.scale(this.moveSpeed, i.default.instance.speed, this._speed),
                            this._trans.position.z <= 2.5 && !this.shaked) return n.default.instance.PlayerWin(),
                            this.shaked = !0, void console.log("WINAAAAAAA");
                        this.shaked || this._trans.translate(this.moveSpeed);
                    }, t;
            }(Laya.Script3D);
        a.default = o;
    }, {
        "../GameManager": 29,
        "./PlayerCtrl": 45
    }],
    44: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./Slices"),
            n = e("../GameManager"),
            o = e("../data/foodLength"),
            r = e("../StartView"),
            s = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t._slices = [], t.created = !1, t.moveSpeed = new Laya.Vector3(0, 0, -.05), t._speed = new Laya.Vector3(0, 0, 0),
                        t._seted = !1, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                    this._owner = this.owner, this._trans = this._owner.transform;
                    var e = this._owner.getChildByName("Effect");
                    if (e)
                        for (var t = 0; t < e._children.length; t++) {
                            var a = e._children[t].addComponent(i.default);
                            this._slices.push(a);
                        }
                }, t.prototype.onEnable = function() {
                    Laya.timer.loop(10, this, this.foodMove);
                }, t.prototype.onDisable = function() {
                    Laya.timer.clear(this, this.foodMove);
                }, t.prototype.onUpdate = function() {
                    this.created || this._trans.localPositionZ <= 12 && (this.created = !0, n.default.instance.createGameObject(this._trans.localPositionZ, o.default.instance.length[this._owner.name]));
                }, t.prototype.foodMove = function() {
                    n.default.instance && (n.default.instance.Die && (n.default.instance.speed = 0),
                            Laya.Vector3.scale(this.moveSpeed, n.default.instance.speed, this._speed)), r.default.app.isStart && Laya.Vector3.scale(this.moveSpeed, 1, this._speed),
                        this._trans.translate(this._speed), this._trans.position.z <= -4 ? (this._owner.removeSelf(),
                            this._owner.destroyChildren(), this._owner.destroy(!0)) : this._trans.position.z <= 3 && this.setEffect();
                }, t.prototype.setEffect = function() {
                    this._seted || (this._seted = !0);
                }, t;
            }(Laya.Script3D);
        a.default = s;
    }, {
        "../GameManager": 29,
        "../StartView": 39,
        "../data/foodLength": 40,
        "./Slices": 46
    }],
    45: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../GameUI"),
            n = e("../GameManager"),
            o = e("../../Main"),
            r = e("../ResultView"),
            s = e("../SoundPlayMgr"),
            l = e("../GetKnifeDialog"),
            p = function(e) {
                function t() {
                    var a = e.call(this) || this;
                    return a.CutSpeed = 1, a.canPlayAni = !0, a.impulse = new Laya.Vector3(0, 0, -5),
                        a.isWin = !1, a.sound_level = 0, t.instance = a, a;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        this._owner = this.owner, this.PlayerAni = this._owner.getComponent(Laya.Animator),
                            this.shakeWave = this._owner.getChildByName("shake");
                    },

                    t.prototype.onTriggerEnter = function(e) {},
                    t.prototype.Cut = function() {
                        this._playAni("Cut", !0), this.canPlayAni && (n.default.instance.Cut = !0), Laya.timer.clear(this, this.SpeedDown);
                    },
                    t.prototype.StopCut = function() {
                        this._playAni("Idle"), n.default.instance.Cut = !1, this.PlayerAni.speed = this.CutSpeed,
                            Laya.timer.clear(this, this.SpeedUp), Laya.timer.loop(500, this, this.SpeedDown);
                    }, t.prototype.Shake = function() {
                        n.default.instance.Cut = !1, this._playAni("Shake", !1, !0), this.shakeWave.active = !0,
                            this.CutSpeed = 1, this.PlayerAni.speed = 7, Laya.timer.clear(this, this.SpeedUp);
                    }, t.prototype.PlayerDie = function() {
                        this.CutSpeed = 1, this.PlayerAni.speed = 1, o.default.app.is_success = !1, n.default.instance.Cut = !1,
                            this._playAni("Die", !1, !1, function() {
                                null == o.default.app.resultView && (o.default.app.resultView = new r.default("Die"),
                                    Laya.stage.addChild(o.default.app.resultView));
                            }), n.default.instance.Die = !0, n.default.instance.speed = 0;
                    },
                    t.prototype.PlayerWin = function() {
                        this.isWin = !0, this.CutSpeed = 1, this.PlayerAni.speed = 1, o.default.app.is_success = !1,
                            n.default.instance.Cut = !1, i.default.app.txt_score.text = "0", this._playAni("Win", !1, !1,
                                function() {
                                    0 != o.default.app.mWX.getOnOffReward2() ?
                                        o.default.app.Level_num == o.default.app.mWX.getOnOffReward1() ? null == o.default.app.getKnifeDialog ?
                                        (o.default.app.getKnifeDialog = new l.default(),
                                            Laya.stage.addChild(o.default.app.getKnifeDialog), o.default.app.getKnifeDialog.onShow(!0, l.default.END_REWARD)) : o.default.app.getKnifeDialog.onShow(!0, l.default.END_REWARD) : o.default.app.Level_num > o.default.app.mWX.getOnOffReward1() && (o.default.app.Level_num - o.default.app.mWX.getOnOffReward1()) % o.default.app.mWX.getOnOffReward3() == 0 ? null == o.default.app.getKnifeDialog ? (o.default.app.getKnifeDialog = new l.default(),
                                            Laya.stage.addChild(o.default.app.getKnifeDialog), o.default.app.getKnifeDialog.onShow(!0, l.default.END_REWARD)) : o.default.app.getKnifeDialog.onShow(!0, l.default.END_REWARD) : null == o.default.app.resultView && (o.default.app.resultView = new r.default("Win"),
                                            Laya.stage.addChild(o.default.app.resultView)) :
                                        null == o.default.app.resultView && (o.default.app.resultView = new r.default("Win"),
                                            Laya.stage.addChild(o.default.app.resultView));
                                }), console.log("play WIN!!!!!!!!!!!!!!!!!"), n.default.instance.Die = !0, n.default.instance.showSuccessEffect(!0);
                    }, t.prototype._playAni = function(e, t, a, i) {
                        void 0 === t && (t = !1), void 0 === a && (a = !1), void 0 === i && (i = null),
                            n.default.instance.Die || (this.canPlayAni && !t ? (Laya.timer.clear(this, this.checkAniComplete),
                                this.PlayerAni.play(e, 0, 0), a && (this.canPlayAni = !1, Laya.timer.frameLoop(16, this, this.checkAniComplete, [null])),
                                null != i && (Laya.timer.clear(this, this.checkAniComplete), Laya.timer.frameLoop(16, this, this.checkAniComplete, [i]))) : this.canPlayAni && t && (Laya.timer.clear(this, this.checkAniComplete),
                                this.PlayerAni.play(e)));
                    }, t.prototype.checkAniComplete = function(e) {
                        void 0 === e && (e = null), console.log(this.PlayerAni.getCurrentAnimatorPlayState().normalizedTime),
                            this.PlayerAni.getCurrentAnimatorPlayState().normalizedTime >= 1 && (null == e ? (this.PlayerAni.play("Idle", 0, 0),
                                this.canPlayAni = !0, Laya.timer.clear(this, this.checkAniComplete), this.shakeWave.active = !1) : (Laya.timer.clear(this, this.checkAniComplete),
                                e(), e = null));
                    }, t.prototype.SpeedUp = function() {

                        this.CutSpeed += .04,
                            this.CutSpeed > 5 && (this.CutSpeed = 5),
                            this.PlayerAni.speed = this.CutSpeed,
                            this.updateSpeed(1);

                    }, t.prototype.SpeedDown = function() {
                        this.CutSpeed -= .6, console.log("down:", this.CutSpeed), this.CutSpeed <= 1 && (this.CutSpeed = 0,
                            n.default.instance.speed = 1, Laya.timer.clear(this, this.SpeedDown)), this.updateSpeed(2);
                    }, t.prototype.ResetKnife = function() {
                        this.CutSpeed = 1, this.PlayerAni.speed = 1, n.default.instance.speed = 1, n.default.instance.Die = !1,
                            this._playAni("Idle"), n.default.instance.Cut = !1;
                    }, t.prototype.updateSpeed = function(e) {

                        var t = this.CutSpeed / 5,

                            a = Math.floor(this.CutSpeed / 1);
                        if (n.default.instance.speed = 1 + t,
                            Laya.Tween.clearAll(i.default.app.progress),
                            1 == e) Laya.Tween.to(i.default.app.progress, {
                            width: 219 * t
                        }, 200);
                        else {
                            if (1 == t) return void(i.default.app.progress.width = 219);
                            0 == this.CutSpeed && (this.CutSpeed = 1), Laya.Tween.to(i.default.app.progress, {
                                width: 219 * t
                            }, 1e3);
                        }
                        this.sound_level != a && 0 != a && (this.sound_level = a, s.SoundPlayMgr.instance.playGSound("sound/speed" + a)),
                            n.default.instance.showSpeedLine(a), i.default.app.lvlSpeed.text = "x " + a;
                    }, t;
            }(Laya.Script3D);
        a.default = p;
    }, {
        "../../Main": 14,
        "../GameManager": 29,
        "../GameUI": 30,
        "../GetKnifeDialog": 31,
        "../ResultView": 35,
        "../SoundPlayMgr": 37
    }],
    46: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../GameManager"),
            n = e("../StartView"),
            o = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.intType = 1e3, t.numType = 1e3, t.strType = "hello laya", t.boolType = !0,
                        t.impulse = new Laya.Vector3(3, -20, -5), t.iscuted = !1, t;
                }
                return __extends(t, e), t.prototype.onAwake = function() {
                        this._owner = this.owner, this._trans = this._owner.transform, this._rig = this._owner.getComponent(Laya.Rigidbody3D),
                            this._efect = this._owner.getChildByName("CutEffect"), this.OriPos = this._trans.localPosition.clone(),
                            this.OriRot = this._trans.rotation.clone();
                        var e = Math.random();
                        this.impulse = e >= .5 ? new Laya.Vector3(3, -15, -8) : new Laya.Vector3(-3, -15, -8);
                    }, t.prototype.onUpdate = function() {
                        n.default.app.isStart || this._trans.position.z >= 2.3 && this._trans.position.z <= 2.4 && i.default.instance.Cut && !i.default.instance.Die && this.Cuted();
                    }, t.prototype.Cuted = function() {
                        this.iscuted || (this.iscuted = !0, this._rig.isKinematic = !1, this._rig.applyImpulse(this.impulse),
                            i.default.instance.addScore(), this._efect.active = !0);
                    }, t.prototype.onEnable = function() {}, t.prototype.onDisable = function() {},
                    t.prototype._reset = function() {
                        this._trans.localPosition = this.OriPos.clone(), this._trans.rotation = this.OriRot.clone(),
                            this._rig.clearForces(), this._rig.linearVelocity = Laya.Vector3._ZERO, this._rig.angularVelocity = Laya.Vector3._ZERO,
                            this._rig.isKinematic = !0, this.iscuted = !1;
                    }, t;
            }(Laya.Script3D);
        a.default = o;
    }, {
        "../GameManager": 29,
        "../StartView": 39
    }],
    47: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = Laya.ClassUtils.regClass;
        ! function(e) {
            ! function(e) {
                var t = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 184,
                            height: 184
                        },
                        compId: 1,
                        child: [{
                            type: "Image",
                            props: {
                                width: 184,
                                height: 184,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 5,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 22.5,
                                    x: 22.5,
                                    width: 139,
                                    var: "mGameIcon",
                                    height: 139
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: 158,
                                    x: 4,
                                    width: 144,
                                    height: 40
                                },
                                compId: 11,
                                child: [{
                                    type: "Label",
                                    props: {
                                        y: 6,
                                        x: 0,
                                        width: 144,
                                        var: "mGameName",
                                        valign: "middle",
                                        text: "可可加分",
                                        height: 25,
                                        fontSize: 20,
                                        font: "SimSun",
                                        color: "#FFFFFF",
                                        bold: !0,
                                        align: "center"
                                    },
                                    compId: 12
                                }]
                            }, {
                                type: "Image",
                                props: {
                                    skin: "button/image_cainixihuan.png"
                                },
                                compId: 13
                            }]
                        }],
                        loadList: ["button/image_cainixihuan.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.myLikeItemUI = t, i("ui.like.myLikeItemUI", t);
                var a = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 750,
                            height: 200
                        },
                        compId: 1,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 750,
                                skin: "button/like_namebk.png",
                                height: 200
                            },
                            compId: 2,
                            child: [{
                                type: "Panel",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 750,
                                    var: "mPanel",
                                    height: 200
                                },
                                compId: 20,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 750,
                                        var: "mMoveBack",
                                        height: 200
                                    },
                                    compId: 22
                                }]
                            }]
                        }],
                        loadList: ["button/like_namebk.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.myLikeViewUI = a, i("ui.like.myLikeViewUI", a);
            }(e.like || (e.like = {}));
        }(a.ui || (a.ui = {})),
        function(e) {
            ! function(e) {
                var t = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            height: 1334
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                var: "bg",
                                top: 0,
                                skin: "button/bg.jpg",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 30
                        }, {
                            type: "Label",
                            props: {
                                var: "bg2",
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                bgColor: "#000000",
                                alpha: .7
                            },
                            compId: 57
                        }, {
                            type: "Box",
                            props: {
                                width: 801,
                                var: "endReward",
                                height: 805,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 28,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 400.5,
                                    x: 400.5,
                                    var: "light",
                                    skin: "button/light.png",
                                    rotation: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 3
                            }, {
                                type: "Image",
                                props: {
                                    y: 300,
                                    x: 300,
                                    width: 200,
                                    var: "knifeImg",
                                    height: 200
                                },
                                compId: 25
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 608,
                                    x: 245,
                                    var: "knifebtn",
                                    texture: "button/getbtn.png"
                                },
                                compId: 6
                            }, {
                                type: "Image",
                                props: {
                                    y: 746,
                                    x: 400,
                                    var: "knifePass",
                                    skin: "button/jump.png",
                                    label: "label",
                                    anchorX: .5
                                },
                                compId: 7
                            }, {
                                type: "Box",
                                props: {
                                    y: -234.5,
                                    x: 26.5
                                },
                                compId: 9,
                                child: [{
                                    type: "Sprite",
                                    props: {
                                        y: 552,
                                        x: 171,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 8
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 443,
                                        x: 257,
                                        width: 43.9,
                                        texture: "button/star.png",
                                        height: 77.9
                                    },
                                    compId: 17
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 639,
                                        x: 265,
                                        width: 25.3,
                                        texture: "button/star.png",
                                        height: 45.3
                                    },
                                    compId: 18
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 537,
                                        x: 442,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 19
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 575,
                                        x: 547,
                                        width: 39.2,
                                        texture: "button/star.png",
                                        height: 70.8
                                    },
                                    compId: 20
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 749,
                                        x: 482,
                                        width: 32.2,
                                        texture: "button/star.png"
                                    },
                                    compId: 21
                                }]
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 101,
                                    x: 276,
                                    texture: "button/happyget.png"
                                },
                                compId: 5
                            }]
                        }, {
                            type: "Box",
                            props: {
                                y: 265,
                                x: -25,
                                width: 801,
                                var: "startReward",
                                height: 805,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 31,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 347.5,
                                    x: 400.5,
                                    var: "light2",
                                    skin: "button/light.png",
                                    rotation: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 32
                            }, {
                                type: "Image",
                                props: {
                                    y: 247,
                                    x: 300,
                                    width: 200,
                                    var: "knifeImg2",
                                    height: 200
                                },
                                compId: 33
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 608,
                                    x: 243,
                                    var: "knifebtn2",
                                    texture: "button/get3.png"
                                },
                                compId: 34
                            }, {
                                type: "Image",
                                props: {
                                    y: 746,
                                    x: 400,
                                    var: "knifePass2",
                                    skin: "button/btn_skip_2.png",
                                    label: "label",
                                    anchorX: .5
                                },
                                compId: 35
                            }, {
                                type: "Box",
                                props: {
                                    y: -287.5,
                                    x: 26.5
                                },
                                compId: 36,
                                child: [{
                                    type: "Sprite",
                                    props: {
                                        y: 552,
                                        x: 171,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 37
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 443,
                                        x: 257,
                                        width: 43.9,
                                        texture: "button/star.png",
                                        height: 77.9
                                    },
                                    compId: 38
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 639,
                                        x: 265,
                                        width: 25.3,
                                        texture: "button/star.png",
                                        height: 45.3
                                    },
                                    compId: 39
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 537,
                                        x: 442,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 40
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 575,
                                        x: 547,
                                        width: 39.2,
                                        texture: "button/star.png",
                                        height: 70.8
                                    },
                                    compId: 41
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 749,
                                        x: 482,
                                        width: 32.2,
                                        texture: "button/star.png"
                                    },
                                    compId: 42
                                }]
                            }, {
                                type: "Sprite",
                                props: {
                                    y: -37,
                                    x: 143,
                                    texture: "button/title_try.png"
                                },
                                compId: 43
                            }]
                        }, {
                            type: "Box",
                            props: {
                                y: 265,
                                x: -25,
                                width: 801,
                                var: "boxReward",
                                height: 805,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 58,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 347.5,
                                    x: 400.5,
                                    var: "light3",
                                    skin: "button/light.png",
                                    rotation: 0,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 59
                            }, {
                                type: "Image",
                                props: {
                                    y: 247,
                                    x: 300,
                                    width: 200,
                                    var: "knifeImg3",
                                    height: 200
                                },
                                compId: 60
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 608,
                                    x: 338,
                                    var: "knifePass3",
                                    texture: "button/btn_get_txt_big.png"
                                },
                                compId: 61
                            }, {
                                type: "Image",
                                props: {
                                    y: -500,
                                    x: 25,
                                    width: 750,
                                    var: "knifebtn3",
                                    label: "label",
                                    height: 2e3
                                },
                                compId: 62
                            }, {
                                type: "Box",
                                props: {
                                    y: -287.5,
                                    x: 26.5
                                },
                                compId: 63,
                                child: [{
                                    type: "Sprite",
                                    props: {
                                        y: 552,
                                        x: 171,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 64
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 443,
                                        x: 257,
                                        width: 43.9,
                                        texture: "button/star.png",
                                        height: 77.9
                                    },
                                    compId: 65
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 639,
                                        x: 265,
                                        width: 25.3,
                                        texture: "button/star.png",
                                        height: 45.3
                                    },
                                    compId: 66
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 537,
                                        x: 442,
                                        width: 32.3,
                                        texture: "button/star.png",
                                        height: 58.1
                                    },
                                    compId: 67
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 575,
                                        x: 547,
                                        width: 39.2,
                                        texture: "button/star.png",
                                        height: 70.8
                                    },
                                    compId: 68
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 749,
                                        x: 482,
                                        width: 32.2,
                                        texture: "button/star.png"
                                    },
                                    compId: 69
                                }]
                            }, {
                                type: "Sprite",
                                props: {
                                    y: -37,
                                    x: 143,
                                    texture: "button/title_get.png"
                                },
                                compId: 70
                            }]
                        }],
                        loadList: ["button/bg.jpg", "button/light.png", "button/getbtn.png", "button/jump.png", "button/star.png", "button/happyget.png", "button/get3.png", "button/btn_skip_2.png", "button/title_try.png", "button/btn_get_txt_big.png", "button/title_get.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.GetKnifeDialogUI = t, i("ui.page.GetKnifeDialogUI", t);
                var a = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "Scene",
                        props: {
                            width: 750,
                            height: 1334
                        },
                        compId: 2,
                        child: [{
                                type: "Sprite",
                                props: {
                                    width: 750,
                                    var: "spr",
                                    height: 1334
                                },
                                compId: 3,
                                child: [{
                                    type: "Rect",
                                    props: {
                                        width: 750,
                                        name: "rect",
                                        lineWidth: 1,
                                        height: 2600,
                                        fillColor: "#9a9a9a"
                                    },
                                    compId: 4
                                }]
                            },
                            {
                                type: "Sprite",
                                props: {
                                    y: 0,
                                    x: 0,
                                    texture: "bg/7.jpg"
                                },
                                compId: 9
                            },
                            {
                                type: "Image",
                                props: {
                                    y: 200,
                                    var: "yad",
                                    centerX: 0,
                                    top: 20,
                                    anchorX: 0.5,
                                    skin: "game/yad.png",
                                },
                                compId: 500
                            },
                            {
                                type: "Image",
                                props: {
                                    centerY: -150,
                                    centerX: 0,
                                    skin: "start/logo.png"
                                },
                                compId: 5
                            }, {
                                type: "Image",
                                props: {
                                    width: 510,
                                    skin: "game/img_progressA.png",
                                    sizeGrid: "19,157,29,128",
                                    height: 58,
                                    centerX: 12,
                                    bottom: 300
                                },
                                compId: 6,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 7,
                                        x: 9,
                                        width: 490,
                                        var: "pro",
                                        skin: "game/img_progress_A.png",
                                        sizeGrid: "17,122,17,129",
                                        height: 38
                                    },
                                    compId: 7,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: -28,
                                            skin: "game/qz.png",
                                            right: -30
                                        },
                                        compId: 8
                                    }]
                                }, {
                                    type: "Label",
                                    props: {
                                        y: -21,
                                        x: 255,
                                        var: "precent",
                                        text: "95%",
                                        fontSize: 36,
                                        font: "Helvetica",
                                        color: "#ffffff",
                                        anchorY: .5,
                                        anchorX: .5
                                    },
                                    compId: 10
                                }]
                            }
                        ],
                        loadList: ["bg/7.jpg", "start/logo.png", "game/img_progressA.png", "game/img_progress_A.png", "game/qz.png"],
                        loadList3D: []
                    }, t;
                }(Laya.Scene);
                e.LoadingViewUI = a, i("ui.page.LoadingViewUI", a);
                var n = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 160,
                            height: 190
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                width: 140,
                                height: 180,
                                centerY: 0,
                                centerX: 0
                            },
                            compId: 3,
                            child: [{
                                type: "Image",
                                props: {
                                    y: -3,
                                    x: 0,
                                    width: 140,
                                    var: "game_icon",
                                    height: 185
                                },
                                compId: 4
                            }, {
                                type: "Image",
                                props: {
                                    width: 145,
                                    skin: "my_like/img_kpbg.png",
                                    sizeGrid: "3,3,3,3",
                                    height: 190,
                                    centerY: 1,
                                    centerX: 0
                                },
                                compId: 5
                            }]
                        }, {
                            type: "Label",
                            props: {
                                y: 157,
                                width: 180,
                                var: "game_name",
                                valign: "middle",
                                text: "采油小怪",
                                strokeColor: "#000000",
                                stroke: 2,
                                height: 28,
                                fontSize: 22,
                                color: "#FFFFFF",
                                centerX: 0,
                                align: "center"
                            },
                            compId: 6
                        }],
                        loadList: ["my_like/img_kpbg.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.myLikeItemUI = n, i("ui.page.myLikeItemUI", n);
                var o = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 750,
                            height: 210
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                x: 0,
                                width: 750,
                                skin: "my_like/img_bg.png",
                                height: 210,
                                centerY: 0
                            },
                            compId: 3,
                            child: [{
                                type: "Panel",
                                props: {
                                    y: 0,
                                    x: -1,
                                    width: 751,
                                    var: "mPanel",
                                    height: 210
                                },
                                compId: 4,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 752,
                                        var: "mMoveBack",
                                        height: 210
                                    },
                                    compId: 5
                                }]
                            }]
                        }],
                        loadList: ["my_like/img_bg.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.myLikeViewUI = o, i("ui.page.myLikeViewUI", o);
                var r = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            height: 1334
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                var: "bg",
                                top: 0,
                                skin: "button/bg.jpg",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 5,
                            child: [{
                                type: "Box",
                                props: {
                                    var: "endBox",
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 101,
                                child: [

                                    {
                                        type: "Image",
                                        props: {
                                            y: 200,
                                            var: "yad",
                                            right: 20,
                                            top: 20,
                                            anchorX: 0.5,
                                            skin: "game/yad.png",
                                        },
                                        compId: 500
                                    },
                                    {
                                        type: "Image",
                                        props: {
                                            y: 60,
                                            x: 40,
                                            var: "gbbb",
                                            skin: "start/img_write.png",
                                            anchorY: .5
                                        },
                                        compId: 76,
                                        child: [{
                                                type: "Label",
                                                props: {
                                                    y: 4,
                                                    x: 42,
                                                    width: 124,
                                                    var: "txt_gold",
                                                    text: "99999",
                                                    height: 30,
                                                    fontSize: 30,
                                                    color: "#000000",
                                                    align: "center"
                                                },
                                                compId: 77
                                            },
                                            {
                                                type: "Image",
                                                props: {
                                                    y: -11.5,
                                                    x: -19,
                                                    skin: "start/img_gold.png"
                                                },
                                                compId: 78
                                            }
                                        ]
                                    },
                                    {
                                        type: "Box",
                                        props: {
                                            y: 200,
                                            x: 14,
                                            width: 722,
                                            var: "listBox",
                                            height: 847
                                        },
                                        compId: 102,
                                        child: [{
                                                type: "Box",
                                                props: {
                                                    y: 0,
                                                    x: 261,
                                                    width: 200,
                                                    height: 50
                                                },
                                                compId: 45,
                                                child: [{
                                                    type: "Image",
                                                    props: {
                                                        y: 2,
                                                        x: 100,
                                                        var: "title",
                                                        skin: "button/fail.png",
                                                        centerX: 0,
                                                        bottom: 0,
                                                        anchorX: .5
                                                    },
                                                    compId: 7
                                                }]
                                            }, {
                                                type: "Button",
                                                props: {
                                                    y: 824,
                                                    x: 365,
                                                    width: 136,
                                                    var: "btn_next",
                                                    stateNum: 1,
                                                    skin: "button/next.png",
                                                    height: 44,
                                                    anchorY: .5,
                                                    anchorX: .5
                                                },
                                                compId: 75
                                            },
                                            {
                                                type: "List",
                                                props: {
                                                    y: 75,
                                                    width: 700,
                                                    height: 682,
                                                    centerX: 0,
                                                    var: "gameList",
                                                    spaceY: 20,
                                                    spaceX: 5,
                                                    repeatY: 3,
                                                    repeatX: 3,

                                                },
                                                compId: 90,
                                                child: [{
                                                    type: "Box",
                                                    props: {
                                                        width: 230,
                                                        renderType: "render",
                                                        height: 170,
                                                    },
                                                    compId: 89,
                                                    child: [{
                                                        type: "Image",
                                                        props: {
                                                            y: 5,
                                                            x: 15,
                                                            width: 198,
                                                            name: "thumb",
                                                            height: 148.5
                                                        },
                                                        compId: 88
                                                    }, {
                                                        type: "Image",
                                                        props: {
                                                            x: 0,
                                                            height: 170,
                                                            skin: "button/result_image_bg_3.png"
                                                        },
                                                        compId: 91
                                                    }]
                                                }]
                                            }, {
                                                type: "Image",
                                                props: {
                                                    y: 824,
                                                    x: 365,
                                                    var: "btn_again",
                                                    skin: "button/again.png",
                                                    anchorY: .5,
                                                    anchorX: .5
                                                },
                                                compId: 93
                                            }
                                        ]
                                    }
                                ]
                            }, {
                                type: "Box",
                                props: {
                                    y: 426,
                                    x: 218,
                                    var: "reviveBox"
                                },
                                compId: 99,
                                child: [

                                    {
                                        type: "Button",
                                        props: {
                                            y: 462,
                                            var: "btn_revive",
                                            stateNum: 1,
                                            skin: "button/fuhuo1.png"
                                        },
                                        compId: 44
                                    },
                                    {
                                        type: "Image",
                                        props: {
                                            y: 591,
                                            x: 98,
                                            var: "btn_skip",
                                            skin: "button/jump.png",
                                            label: "label"
                                        },
                                        compId: 94
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 142,
                                            x: 45,
                                            skin: "button/jidutiao2.png"
                                        },
                                        compId: 95,
                                        child: [{
                                            type: "Sprite",
                                            props: {
                                                texture: "button/jindutiao1.png"
                                            },
                                            compId: 96
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: 111,
                                                x: 111,
                                                var: "daojishi",
                                                skin: "button/djs1.png",
                                                anchorY: .5,
                                                anchorX: .5
                                            },
                                            compId: 98
                                        }]
                                    }, {
                                        type: "Sprite",
                                        props: {
                                            x: 42,
                                            texture: "button/isfuhuo.png"
                                        },
                                        compId: 97
                                    }
                                ]
                            }]
                        }],
                        loadList: ["button/bg.jpg", "start/img_write.png", "start/img_gold.png", "button/fail.png", "button/next.png", "button/result_image_bg_3.png", "button/again.png", "button/fuhuo1.png", "button/jump.png", "button/jidutiao2.png", "button/jindutiao1.png", "button/djs1.png", "button/isfuhuo.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.ResultViewUI = r, i("ui.page.ResultViewUI", r);
                var s = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 750,
                            top: 0,
                            right: 0,
                            left: 0,
                            height: 1334,
                            bottom: 0
                        },
                        compId: 2,
                        child: [{
                            type: "Image",
                            props: {
                                var: "bg",
                                top: 80,
                                skin: "shop/mask.png",
                                sizeGrid: "48,217,63,181",
                                right: 0,
                                left: 0,
                                bottom: 0
                            },
                            compId: 5,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 119,
                                    x: 702,
                                    var: "btn_close",
                                    skin: "shop/btn_close.png",
                                    label: "label"
                                },
                                compId: 6
                            }, {
                                type: "Image",
                                props: {
                                    y: 12,
                                    x: 108,
                                    var: "title",
                                    skin: "shop/img_title2.png"
                                },
                                compId: 7
                            }, {
                                type: "Image",
                                props: {
                                    x: 20,
                                    var: "btn_left",
                                    skin: "shop/btn_left.png",
                                    left: 20,
                                    label: "label",
                                    centerY: -40
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    x: 705,
                                    var: "btn_right",
                                    skin: "shop/btn_right.png",
                                    right: 20,
                                    label: "label",
                                    centerY: -40
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    x: 45,
                                    var: "btn_unlock",
                                    skin: "shop/btn_unlock.png",
                                    label: "label",
                                    centerY: 302
                                },
                                compId: 23,
                                child: [{
                                    type: "Label",
                                    props: {
                                        y: 36,
                                        x: 81,
                                        width: 93,
                                        var: "unlockNum",
                                        text: "2222",
                                        height: 24,
                                        fontSize: 32,
                                        color: "#FFE867",
                                        align: "center"
                                    },
                                    compId: 25
                                }]
                            }, {
                                type: "Image",
                                props: {
                                    x: 406,
                                    var: "btn_gold",
                                    skin: "shop/btn_get1.png",
                                    label: "label",
                                    centerY: 302
                                },
                                compId: 24,
                                child: [{
                                    type: "Label",
                                    props: {
                                        y: 34.5,
                                        x: 99,
                                        width: 66,
                                        var: "gainNum",
                                        text: "+150",
                                        height: 24,
                                        fontSize: 32,
                                        color: "#FFE867"
                                    },
                                    compId: 27
                                }]
                            }, {
                                type: "Panel",
                                props: {
                                    y: 176,
                                    x: 58,
                                    width: 634,
                                    height: 726,
                                    centerY: -88,
                                    centerX: 0
                                },
                                compId: 28,
                                child: [{
                                    type: "List",
                                    props: {
                                        x: -58,
                                        width: 634,
                                        var: "list",
                                        spaceY: 28,
                                        spaceX: 24,
                                        repeatY: 3,
                                        repeatX: 3,
                                        height: 648,
                                        centerY: 0,
                                        centerX: 0
                                    },
                                    compId: 10,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: -38,
                                            x: 271,
                                            var: "img_level",
                                            skin: "shop/img_level1.png",
                                            name: "img_level",
                                            visible: false
                                        },
                                        compId: 22
                                    }, {
                                        type: "Box",
                                        props: {
                                            y: 0,
                                            x: 0,
                                            width: 194,
                                            renderType: "render",
                                            height: 194
                                        },
                                        compId: 11,
                                        child: [{
                                            type: "Sprite",
                                            props: {
                                                y: 0,
                                                x: 0,
                                                width: 194,
                                                texture: "shop/iconBg.png",
                                                height: 194
                                            },
                                            compId: 14
                                        }, {
                                            type: "Image",
                                            props: {
                                                y: -3,
                                                x: 0,
                                                width: 194,
                                                var: "select",
                                                skin: "shop/img_select.png",
                                                name: "select",
                                                height: 194
                                            },
                                            compId: 19
                                        }, {
                                            type: "Image",
                                            props: {
                                                var: "icon",
                                                scaleY: .7,
                                                scaleX: .7,
                                                name: "icon",
                                                centerY: 0,
                                                centerX: 0
                                            },
                                            compId: 21
                                        }, {
                                            type: "Label",
                                            props: {
                                                y: 131,
                                                x: 37,
                                                var: "iconName",
                                                text: "物品名称",
                                                name: "iconName",
                                                fontSize: 30
                                            },
                                            compId: 20
                                        }]
                                    }]
                                }]
                            }, {
                                type: "Image",
                                props: {
                                    y: -57,
                                    x: 45,
                                    skin: "start/img_write.png"
                                },
                                compId: 44,
                                child: [{
                                    type: "Label",
                                    props: {
                                        y: 4,
                                        x: 42,
                                        width: 124,
                                        var: "txt_gold",
                                        text: "99999",
                                        height: 30,
                                        fontSize: 30,
                                        color: "#000000",
                                        align: "center"
                                    },
                                    compId: 43
                                }, {
                                    type: "Image",
                                    props: {
                                        y: -11.5,
                                        x: -19,
                                        skin: "start/img_gold.png"
                                    },
                                    compId: 45
                                }]
                            }]
                        }],
                        loadList: ["shop/mask.png", "shop/btn_close.png", "shop/img_title2.png", "shop/btn_left.png", "shop/btn_right.png", "shop/btn_unlock.png", "shop/btn_get1.png", "shop/img_level1.png", "shop/iconBg.png", "shop/img_select.png", "start/img_write.png", "start/img_gold.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.ShopViewUI = s, i("ui.page.ShopViewUI", s);
                var l = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "Scene",
                        props: {
                            width: 750,
                            runtime: "script/StartView.ts",
                            height: 1334
                        },
                        compId: 2,
                        child: [{
                                type: "Sprite",
                                props: {
                                    y: 0,
                                    x: 0
                                },
                                compId: 14
                            },
                            {
                                type: "Box",
                                props: {
                                    var: "box",
                                    top: 0,
                                    right: 0,
                                    left: 0,
                                    bottom: 0
                                },
                                compId: 11
                            },
                            {
                                type: "Image",
                                props: {
                                    var: "yad",
                                    skin: "game/yad.png",
                                    width: 160,
                                    height: 120,
                                    bottom: 20,
                                    left: 20,
                                },
                                compId: 500
                            },
                            {
                                type: "Sprite",
                                props: {
                                    y: 58,
                                    x: 52,
                                    texture: "start/logo.png"
                                },
                                compId: 8
                            },
                            {
                                type: "Image",
                                props: {
                                    y: 368,
                                    var: "btn_knife",
                                    skin: "start/btn_knife.png",
                                    left: 0,
                                    label: "label"
                                },
                                compId: 5
                            },
                            // {
                            //     type: "Image",
                            //     props: {
                            //         y: 539,
                            //         var: "btn_food",
                            //         skin: "start/btn_food.png",
                            //         left: 0,
                            //         label: "label"
                            //     },
                            //     compId: 4
                            // }, 
                            {
                                type: "Image",
                                props: {
                                    x: 0,
                                    var: "btn_start",
                                    skin: "start/img_bg.png",
                                    bottom: 350
                                },
                                compId: 7,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 24,
                                        x: 275,
                                        var: "img_start",
                                        skin: "start/btn_start.png",
                                        label: "label"
                                    },
                                    compId: 6
                                }]
                            }
                        ],
                        loadList: ["start/logo.png", "start/btn_knife.png", "start/btn_food.png", "start/img_bg.png", "start/btn_start.png"],
                        loadList3D: []
                    }, t;
                }(Laya.Scene);
                e.StartViewUI = l, i("ui.page.StartViewUI", l);
            }(e.page || (e.page = {}));
        }(a.ui || (a.ui = {})),
        function(e) {
            ! function(e) {
                var t = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "Scene",
                        props: {
                            width: 750,
                            height: 1334
                        },
                        compId: 2,
                        child: [{
                            type: "Label",
                            props: {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                bgColor: "#000000",
                                alpha: .9
                            },
                            compId: 3,
                            child: [{
                                type: "List",
                                props: {
                                    y: 174,
                                    x: 0,
                                    width: 750,
                                    var: "gameList",
                                    text: "label",
                                    spaceY: 38,
                                    spaceX: 38,
                                    repeatY: 5,
                                    repeatX: 2,
                                    height: 1120
                                },
                                compId: 4,
                                child: [{
                                    type: "Box",
                                    props: {
                                        y: 24,
                                        x: 23,
                                        renderType: "render"
                                    },
                                    compId: 5,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: 11,
                                            x: 12,
                                            width: 307,
                                            name: "icon",
                                            height: 410
                                        },
                                        compId: 9
                                    }, {
                                        type: "Image",
                                        props: {
                                            skin: "button/kuang1.png"
                                        },
                                        compId: 6
                                    }]
                                }]
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 74,
                                    x: 261,
                                    texture: "button/bkyx.png"
                                },
                                compId: 7
                            }, {
                                type: "Image",
                                props: {
                                    var: "back",
                                    top: 20,
                                    skin: "button/fhan.png"
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    y: 1162,
                                    x: 174,
                                    var: "btnStart",
                                    skin: "button/btn_start.png",
                                    label: "label",
                                    bottom: 40
                                },
                                compId: 10
                            }]
                        }],
                        loadList: ["button/kuang1.png", "button/bkyx.png", "button/fhan.png", "button/btn_start.png"],
                        loadList3D: []
                    }, t;
                }(Laya.Scene);
                e.BaoKuanTuiJianUI = t, i("ui.test.BaoKuanTuiJianUI", t);
                var a = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "View",
                        props: {
                            width: 750,
                            height: 1334
                        },
                        compId: 1,
                        child: [{
                            type: "Label",
                            props: {
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                                bgColor: "#FFFFFF"
                            },
                            compId: 9
                        }, {
                            type: "Label",
                            props: {
                                y: 0,
                                x: 0,
                                width: 750,
                                var: "topBox",
                                height: 88,
                                bgColor: "#F2F2F2"
                            },
                            compId: 16,
                            child: [{
                                type: "Label",
                                props: {
                                    width: 750,
                                    valign: "middle",
                                    text: "小程序",
                                    left: 0,
                                    height: 88,
                                    fontSize: 34,
                                    color: "#333333",
                                    bottom: 0,
                                    bold: !0,
                                    bgColor: "#F2F2F2",
                                    align: "center"
                                },
                                compId: 10,
                                child: [{
                                    type: "Box",
                                    props: {
                                        y: 642,
                                        x: 29,
                                        width: 50,
                                        var: "closeBtn",
                                        height: 50,
                                        centerY: 0
                                    },
                                    compId: 17,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: 11,
                                            x: 0,
                                            skin: "fenfa/btn_arrow_left.png"
                                        },
                                        compId: 8
                                    }]
                                }]
                            }]
                        }, {
                            type: "Label",
                            props: {
                                y: 88,
                                x: 40,
                                width: 710,
                                var: "tips",
                                valign: "middle",
                                text: "最近使用",
                                height: 80,
                                fontSize: 24,
                                color: "#999999",
                                align: "left"
                            },
                            compId: 12,
                            child: [{
                                type: "Image",
                                props: {
                                    skin: "fenfa/line.png",
                                    bottom: 0
                                },
                                compId: 13
                            }]
                        }, {
                            type: "Panel",
                            props: {
                                y: 168,
                                width: 750,
                                var: "gameBViewBox",
                                height: 700
                            },
                            compId: 6,
                            child: [{
                                type: "List",
                                props: {
                                    y: 0,
                                    x: 0,
                                    var: "gameList",
                                    repeatY: 9,
                                    repeatX: 1
                                },
                                compId: 2,
                                child: [{
                                    type: "Box",
                                    props: {
                                        width: 750,
                                        renderType: "render",
                                        height: 140
                                    },
                                    compId: 3,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            x: 40,
                                            width: 100,
                                            name: "gameIcon",
                                            height: 100,
                                            centerY: 0
                                        },
                                        compId: 4,
                                        child: [{
                                            type: "Image",
                                            props: {
                                                width: 104,
                                                skin: "fenfa/mask_icon.png",
                                                height: 104,
                                                centerY: 0,
                                                centerX: 0
                                            },
                                            compId: 11
                                        }]
                                    }, {
                                        type: "Label",
                                        props: {
                                            x: 180,
                                            text: "欢乐水杯",
                                            name: "gameName",
                                            fontSize: 32,
                                            color: "#333333",
                                            centerY: 0
                                        },
                                        compId: 5
                                    }, {
                                        type: "Image",
                                        props: {
                                            y: 139,
                                            width: 570,
                                            skin: "fenfa/line.png",
                                            right: 0,
                                            bottom: 0
                                        },
                                        compId: 14
                                    }]
                                }]
                            }]
                        }],
                        loadList: ["fenfa/btn_arrow_left.png", "fenfa/line.png", "fenfa/mask_icon.png"],
                        loadList3D: []
                    }, t;
                }(Laya.View);
                e.FakerXCXListUI = a, i("ui.test.FakerXCXListUI", a);
                var n = function(e) {
                    function t() {
                        return e.call(this) || this;
                    }
                    return __extends(t, e), t.prototype.createChildren = function() {
                        e.prototype.createChildren.call(this), this.createView(t.uiView);
                    }, t.uiView = {
                        type: "Scene",
                        props: {
                            width: 750,
                            runtime: "script/GameUI.ts",
                            positionVariance_0: 100,
                            maxPartices: 100,
                            height: 1334
                        },
                        compId: 1,
                        child: [{
                                type: "Sprite",
                                props: {
                                    y: 0,
                                    x: 0,
                                    var: "box"
                                },
                                compId: 198
                            },
                            {
                                type: "Image",
                                props: {
                                    y: 204,
                                    x: 0,
                                    var: "v1",
                                    skin: "game/img_progress.png"
                                },
                                compId: 192,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 73,
                                        x: 16,
                                        width: 0,
                                        var: "progress",
                                        skin: "game/img_progressBar.png",
                                        sizeGrid: "0,219,0,0"
                                    },
                                    compId: 193
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 67.5,
                                        x: 77.4765625,
                                        var: "lvlSpeed",
                                        text: "x 1",
                                        fontSize: 36
                                    },
                                    compId: 194
                                }]
                            }, {
                                type: "Image",
                                props: {
                                    y: 80,
                                    var: "v2",
                                    skin: "game/img_progressA.png",
                                    centerX: 0
                                },
                                compId: 195,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 7,
                                        x: 9,
                                        width: 0,
                                        var: "pro",
                                        skin: "game/img_progress_A.png"
                                    },
                                    compId: 196,
                                    child: [{
                                        type: "Image",
                                        props: {
                                            y: -28,
                                            skin: "game/qz.png",
                                            right: -30
                                        },
                                        compId: 197
                                    }]
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    y: 974.5,
                                    x: 50,
                                    var: "box_btnmore"
                                },
                                compId: 200,
                                child: [{
                                    type: "Button",
                                    props: {
                                        y: -.5,
                                        x: 426,
                                        width: 200,
                                        var: "btn_Cut",
                                        skin: "comp/button.png",
                                        labelSize: 35,
                                        label: "切",
                                        height: 60
                                    },
                                    compId: 20
                                }, {
                                    type: "Button",
                                    props: {
                                        y: 103.5,
                                        x: 421,
                                        width: 198,
                                        var: "btn_reborn",
                                        skin: "comp/button.png",
                                        name: "btn_reborn",
                                        labelSize: 30,
                                        label: "复活",
                                        height: 67
                                    },
                                    compId: 179
                                }, {
                                    type: "Button",
                                    props: {
                                        y: -.5,
                                        width: 138,
                                        var: "btn_addGameObj",
                                        skin: "comp/button.png",
                                        labelSize: 35,
                                        label: "上菜",
                                        height: 63
                                    },
                                    compId: 181
                                }, {
                                    type: "Button",
                                    props: {
                                        y: 114.5,
                                        width: 146,
                                        var: "btn_reset",
                                        skin: "comp/button.png",
                                        labelSize: 35,
                                        label: "重置",
                                        height: 45
                                    },
                                    compId: 185
                                }, {
                                    type: "Button",
                                    props: {
                                        y: 197.5,
                                        width: 243,
                                        var: "btn_speedLine",
                                        skin: "comp/button.png",
                                        labelSize: 35,
                                        label: "显示速度线",
                                        height: 75
                                    },
                                    compId: 199
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    var: "box_btn",
                                    top: 0,
                                    right: 0,
                                    left: 1,
                                    height: 2500
                                },
                                compId: 201
                            }, {
                                type: "Image",
                                props: {
                                    y: 432,
                                    x: 0,
                                    var: "v3",
                                    skin: "game/img_level.png"
                                },
                                compId: 203,
                                child: [{
                                    type: "Label",
                                    props: {
                                        y: 23,
                                        x: 14,
                                        width: 130,
                                        var: "txt_score",
                                        text: "0",
                                        height: 40,
                                        fontSize: 40,
                                        bold: !0,
                                        align: "center"
                                    },
                                    compId: 204
                                }, {
                                    type: "Sprite",
                                    props: {
                                        y: 71,
                                        x: 14,
                                        texture: "game/txt_gq.png"
                                    },
                                    compId: 205
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 71,
                                        x: 79,
                                        width: 69,
                                        var: "txt_level",
                                        text: "3",
                                        height: 27,
                                        fontSize: 25,
                                        color: "#5f5f5f",
                                        bold: !0,
                                        align: "left"
                                    },
                                    compId: 206
                                }]
                            }, {
                                type: "Image",
                                props: {
                                    y: 495,
                                    x: 671,
                                    width: 113,
                                    var: "v4",
                                    height: 130,
                                    anchorY: .5,
                                    anchorX: .5
                                },
                                compId: 208,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 58,
                                        x: 56,
                                        var: "bottomweapon",
                                        skin: "button/bgbottom2.png",
                                        anchorY: .5,
                                        anchorX: .5
                                    },
                                    compId: 216
                                }]
                            }, {
                                type: "Box",
                                props: {
                                    y: 78,
                                    x: 530,
                                    width: 220,
                                    visible: !1,
                                    var: "fenfaListBox",
                                    height: 111
                                },
                                compId: 220
                            },
                            {
                                type: "Image",
                                props: {
                                    var: "yad",
                                    skin: "game/yad.png",
                                    width: 160,
                                    height: 120,
                                    bottom: 20,
                                    left: 20,
                                },
                                compId: 500
                            },

                            {
                                type: "Image",
                                props: {
                                    var: "cTips",
                                    skin: "start/btn_start2.png",
                                    bottom: 400,
                                    centerX: 0
                                },
                                compId: 500
                            },

                            {
                                type: "Image",
                                props: {
                                    y: 78,
                                    x: 550,
                                    width: 180,
                                    visible: !1,
                                    var: "fenfaListBtn",
                                    skin: "fenfa/btn_quit.png",
                                    label: "label",
                                    height: 60
                                },
                                compId: 219
                            }
                        ],
                        loadList: ["game/img_progress.png", "game/img_progressBar.png", "game/img_progressA.png", "game/img_progress_A.png", "game/qz.png", "comp/button.png", "game/img_level.png", "game/txt_gq.png", "button/bgbottom2.png", "button/jindutiao.png", "button/jindutiaodi.png", "button/box_black.png", "button/icon_tv.png", "fenfa/btn_quit.png"],
                        loadList3D: []
                    }, t;
                }(Laya.Scene);
                e.TestSceneUI = n, i("ui.test.TestSceneUI", n);
            }(e.test || (e.test = {}));
        }(a.ui || (a.ui = {}));
    }, {}],
    48: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = e("../core/wxCore"),
            o = function() {
                function e() {
                    this.mBannerOffsetY = 80, this.adBanner = null, this.mIsInvokeRemoveCustomBannerAd = !1,
                        this.mCustomBanner = null, this.mCustomBannerAdList = [];
                }
                return e.playVideo = function(t, a, o) {
                        void 0 === a && (a = null), void 0 === o && (o = null), e.sIsPlayVideo || n.default.uo.loadingVideo(function(r) {
                            r ? (e.sIsPlayVideo = !0, n.default.uo.showVideoAD(function(a) {
                                a ? (e.sIsPlayVideo = !1, void 0 != t && null != t && (t(), i.default.app.mWX.reportData(1))) : (e.sIsPlayVideo = !1,
                                    null != o && o());
                            })) : (e.sIsPlayVideo = !1, null != a ? a() : wx.showToast({
                                title: "视频获取失败",
                                icon: "none",
                                image: "",
                                duration: 2e3
                            }));
                        });
                    }, e.prototype.showBannerAd = function(t, a) {}, e.prototype.hideBannerAd = function() {
                        this.removeCustomBannerAd(), void 0 != this.adBanner && null != this.adBanner && this.adBanner.hide();
                    }, e.prototype.addCustomBannerAd = function() {}, e.prototype.onCustomBannerClick = function(e, t, a, i, n) {
                        n.stopPropagation();
                    }, e.prototype.removeCustomBannerAd = function() {
                        this.mIsInvokeRemoveCustomBannerAd = !0, null != this.mCustomBanner && (this.mCustomBanner.visible = !1);
                    }, e.sDefaultBannerId = "adunit-27fe9c8dc68c00d7", e.sDefaultVideoId = "adunit-87eebd000394e641",
                    e.sIsPlayVideo = !1, e;
            }();
        a.ADUtil = o;
    }, {
        "../Main": 14,
        "../core/wxCore": 27
    }],
    49: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.mAdOn = !0, e.mSoundable = !0, e.mVersion = 1018, e.TAG = "qc", e.mScoreUnit = "分",
                e.mURL = "", e.mCmd = {
                    check: "1.0.1/" + e.TAG + "/check?",
                    login: "1.0.1/" + e.TAG + "/login?",
                    login2: "1.0.2/" + e.TAG + "/login2?",
                    challenge: "1.0.1/" + e.TAG + "/challenge?",
                    querycards: "1.0.1/" + e.TAG + "/querycards?",
                    rank: "1.0.1/" + e.TAG + "/rank?",
                    report: "1.0.1/" + e.TAG + "/report?",
                    AddCard: "1.0.1/" + e.TAG + "/addcard?",
                    AddMyCard: "1.0.1/" + e.TAG + "/AddMyCard?",
                    ad: "1.0.1/" + e.TAG + "/ad?",
                    mymark: "1.0.1/" + e.TAG + "/mymark?",
                    ItemTotle: "1.0.1/" + e.TAG + "/ItemTotle?",
                    SetUserValue: "1.0.1/" + e.TAG + "/SetUserValue?",
                    ChangeTCt: "1.0.1/" + e.TAG + "/ChangeTCt?"
                }, e.mKeys = {
                    "1.0.1": "d3dfa_af1745389b71e51cd363c0"
                }, e.mReportAdHitUrl = e.mURL + "1.0.1/" + e.TAG + "/data?", e.mBannerAdId = "",
                e.mVideoAdId = "", e.sMusicOnOff = !0, e.sSoundOnOff = !0, e.mIsNewUser = !1, e.sStartGameTime = 0,
                e.mLineColor = "#FF5572", e;
        }();
        a.ConfigUtil = i;
    }, {}],
    50: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("./ConfigUtil"),
            n = function() {
                function e() {}
                return e.log = function(e) {
                    console.log(i.ConfigUtil.TAG + ": " + e);
                }, e;
            }();
        a.LogUtil = n;
    }, {
        "./ConfigUtil": 49
    }],
    51: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.sShareUrls = [], e.mShareTitles = {
                shareApp: "我拥有的不仅是技巧，而是那99.99%的精准",
                shareGift: "我需要你的帮助，就差一点点，真的一点点！",
                shareGroupRank: "差之毫厘谬以千里，我们差点不是一点~",
                shareProp: "你帮我一点，我帮你一点，友谊不止一点点 ",
                share2Friend: "哼，跟我比精准？",
                shareRelay: "行百步半九十，不要让我的努力白费！",
                shareContinue: "不，这是错觉，我的精准不会错的！",
                shareToUsePropInStartAward: "看我水瓶里的水好漂亮啊，千万不能洒了！",
                shareToUsePropInPassAward: "看我获得的奖励，好漂亮的一瓶水啊！"
            }, e.mShareUrls = {
                shareApp: "share/share2.jpg",
                shareGift: "share/share1.png",
                shareGroupRank: "share/share2.png",
                shareProp: "share/share2.png",
                share2Friend: "share/share1.png",
                shareRelay: "share/share1.png",
                shareContinue: "share/share2.png",
                shareToUsePropInStartAward: "share/share1.png",
                shareToUsePropInPassAward: "share/share2.png"
            }, e.mShareIds = {
                shareApp: 1,
                shareGift: 8,
                shareGroupRank: 2,
                shareProp: 1,
                share2Friend: 4,
                shareRelay: 6,
                shareContinue: 3,
                shareToUsePropInStartAward: 12,
                shareToUsePropInPassAward: 12,
                shareToGetDoubleCoin: 13,
                shareToGetCoin: 11,
                shareToReborn: 13,
                shareToGetStartAward: 13
            }, e;
        }();
        a.ShareConfig = i;
    }, {}],
    52: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("../Main"),
            n = e("./ShareConfig"),
            o = e("./TimeUtil"),
            r = function() {
                function e() {}
                return e.getShareUrl = function(e, t) {
                    if (null != n.ShareConfig.sShareUrls)
                        for (var a = 0; a < n.ShareConfig.sShareUrls.length; a++)
                            if (Number(n.ShareConfig.sShareUrls[a].id) == e) {
                                var i = n.ShareConfig.sShareUrls[a].url;
                                if (null != i && i.length > 2) return i;
                                break;
                            }
                    return t;
                }, e.getShareTitle = function(e, t, a) {
                    if (void 0 === a && (a = []), null != n.ShareConfig.sShareUrls)
                        for (var i = 0; i < n.ShareConfig.sShareUrls.length; i++)
                            if (Number(n.ShareConfig.sShareUrls[i].id) == e) {
                                var o = n.ShareConfig.sShareUrls[i].title;
                                if (null != o && o.length > 2) {
                                    for (var r = 0; r < a.length; r++) o.indexOf("{" + r + "}") > -1 && (o = o.replace("{" + r + "}", String(a[r])));
                                    return o;
                                }
                                break;
                            }
                    return t;
                }, e.getShareTitleByKey = function(t, a) {
                    void 0 === a && (a = []);
                    for (var i = n.ShareConfig.mShareIds[t], o = n.ShareConfig.mShareTitles[t], r = 0; r < a.length; r++) o.indexOf("{" + r + "}") > -1 && (o = o.replace("{" + r + "}", String(a[r])));
                    return e.getShareTitle(i, o, a);
                }, e.getShareUrlByKey = function(t) {
                    var a = n.ShareConfig.mShareIds[t],
                        i = n.ShareConfig.mShareUrls[t];
                    return e.getShareUrl(a, i);
                }, e.shareApp = function() {}, e.shareGroupRank = function() {
                    var t = n.ShareConfig.mShareIds.shareGroupRank,
                        a = e.getShareTitleByKey("shareGroupRank"),
                        o = e.getShareUrlByKey("shareGroupRank");
                    e.is_exit = !1, i.default.app.mWX.mShareCallback = function() {}, wx.shareAppMessage({
                        title: a,
                        imageUrl: o,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=8&map=0&surl=" + t,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareProp = function(t) {
                    i.default.app.is_share = !0;
                    var a = n.ShareConfig.mShareIds.shareProp,
                        r = e.getShareTitleByKey("shareProp"),
                        s = e.getShareUrlByKey("shareProp");
                    e.is_exit = !1, i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), i.default.app.mWX.mShareCallback = function() {
                        t();
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        i.default.app.mWX.mShareIsNoCallback = null;
                    };
                    var l = t;
                    i.default.app.mWX.mShareIsAgainCallback = function() {
                        e.shareProp(l);
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "gift=" + i.default.app.mWX.mUID + "&uid=" + i.default.app.mWX.mUID + "&id=" + i.default.app.mWX.mShareID + "&score=0&client=0&type=0&surl=" + a,
                        success: function(e) {
                            i.default.app.mWX.reportADHit(String(a));
                        },
                        fail: function(e) {}
                    });
                }, e.share2Friend = function() {
                    var t = n.ShareConfig.mShareIds.share2Friend,
                        a = e.getShareTitleByKey("share2Friend"),
                        r = e.getShareUrlByKey("share2Friend");
                    i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), i.default.app.mWX.mShareCallback = function() {},
                        i.default.app.mWX.mShareIsNoCallback = function() {
                            i.default.app.mWX.mShareIsNoCallback = null;
                        }, i.default.app.mWX.mShareIsAgainCallback = function() {
                            e.share2Friend();
                        }, wx.shareAppMessage({
                            title: a,
                            imageUrl: r,
                            query: "gift=" + i.default.app.mWX.mUID + "&uid=" + i.default.app.mWX.mUID + "&id=0&score=0&client=0&type=0&surl=" + t,
                            success: function(e) {},
                            fail: function(e) {}
                        });
                }, e.shareRelay = function(t) {
                    var a = n.ShareConfig.mShareIds.shareRelay,
                        o = e.getShareTitleByKey("shareRelay"),
                        r = e.getShareUrlByKey("shareRelay");
                    e.is_exit = !1, wx.shareAppMessage({
                        title: o,
                        imageUrl: r,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=" + i.default.app.mWX.mShareID + "&score=" + t + "&client=0&type=2&surl=" + a,
                        success: function(e) {}
                    });
                }, e.shareGift = function(t) {
                    i.default.app.is_share = !0;
                    var a = n.ShareConfig.mShareIds.shareGift,
                        r = e.getShareTitleByKey("shareGift"),
                        s = e.getShareUrlByKey("shareGift");
                    e.is_exit = !1, i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), i.default.app.mWX.mShareCallback = function() {
                        i.default.app.mWX.indexBpTotle("icon_page", {
                            is_success: 1,
                            is_click: 1,
                            from_type: "share",
                            icon_type: 7,
                            reward_num: 50,
                            from_page: "scoreboard_page"
                        }), t();
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        i.default.app.mWX.indexBpTotle("icon_page", {
                            is_success: 0,
                            is_click: 1,
                            from_type: "share",
                            icon_type: 7,
                            reward_num: 50,
                            from_page: "scoreboard_page"
                        }), i.default.app.mWX.mShareIsNoCallback = null;
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=0&map=0&surl=" + a,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareContinue = function(t) {
                    i.default.app.is_share = !0;
                    var a = n.ShareConfig.mShareIds.shareContinue,
                        r = e.getShareTitleByKey("shareContinue"),
                        s = e.getShareUrlByKey("shareContinue");
                    e.is_exit = !1, i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), i.default.app.mWX.mShareCallback = function() {
                        t(!0);
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        t(!1);
                    };
                    var l = t;
                    i.default.app.mWX.mShareIsAgainCallback = function() {
                        t(!1), e.shareContinue(l);
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=0&map=0&surl=" + a,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareAward = function(t) {
                    i.default.app.is_share = !0;
                    var a = n.ShareConfig.mShareIds.shareToUsePropInStartAward,
                        r = e.getShareTitleByKey("shareToUsePropInStartAward"),
                        s = e.getShareUrlByKey("shareToUsePropInStartAward");
                    e.is_exit = !1, i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), i.default.app.mWX.mShareCallback = function() {
                        t(!0);
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        i.default.app.mWX.mShareIsNoCallback = null, t(!1);
                    };
                    var l = t;
                    i.default.app.mWX.mShareIsAgainCallback = function() {
                        e.shareAward(l);
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=0&map=0&surl=" + a,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareDoubleCoin = function(t, a) {
                    void 0 === a && (a = 0), i.default.app.is_share = !0;
                    n.ShareConfig.mShareIds.shareToGetDoubleCoin;
                    var r = e.getShareTitleByKey("shareToGetDoubleCoin"),
                        s = e.getShareUrlByKey("shareToGetDoubleCoin");
                    i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), e.is_exit = !1, i.default.app.mWX.mShareCallback = function() {
                        var e = {
                            is_success: 1,
                            is_click: 1,
                            from_type: "share",
                            icon_type: 9,
                            reward_num: a,
                            from_page: "scoreboard_page"
                        };
                        i.default.app.mWX.indexBpTotle("icon_page", e), t();
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        i.default.app.mWX.indexBpTotle("icon_page", {
                            is_success: 0,
                            is_click: 1,
                            from_type: "share",
                            icon_type: 9,
                            reward_num: 0,
                            from_page: "scoreboard_page"
                        }), i.default.app.mWX.mShareIsNoCallback = null;
                    };
                    var l = t;
                    i.default.app.mWX.mShareIsAgainCallback = function() {
                        e.shareDoubleCoin(l);
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareNowCoin = function(t) {
                    var a = n.ShareConfig.mShareIds.shareToGetCoin,
                        r = e.getShareTitleByKey("shareToGetCoin"),
                        s = e.getShareUrlByKey("shareToGetCoin");
                    i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), e.is_exit = !1, i.default.app.mWX.mShareCallback = function() {
                        t();
                    }, i.default.app.mWX.mShareIsNoCallback = function() {
                        i.default.app.mWX.mShareIsNoCallback = null;
                    };
                    var l = t;
                    i.default.app.mWX.mShareIsAgainCallback = function() {
                        e.shareNowCoin(l);
                    }, console.log("分享的ID", a), wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        success: function(e) {},
                        fail: function(e) {}
                    });
                }, e.shareToReborn = function(t) {
                    var a = n.ShareConfig.mShareIds.shareToReborn,
                        r = e.getShareTitleByKey("shareToReborn"),
                        s = e.getShareUrlByKey("shareToReborn");
                    i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), e.is_exit = !1, i.default.app.mWX.mShareCallback = function() {
                        t();
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=0&map=0&surl=" + a,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.shareToGetStartAward = function(t) {
                    var a = n.ShareConfig.mShareIds.shareToGetStartAward,
                        r = e.getShareTitleByKey("shareToGetStartAward"),
                        s = e.getShareUrlByKey("shareToGetStartAward");
                    i.default.app.mWX.mCallShareTime = o.TimeUtil.getCurrTime(), e.is_exit = !1, i.default.app.mWX.mShareCallback = function() {
                        t();
                    }, wx.shareAppMessage({
                        title: r,
                        imageUrl: s,
                        query: "uid=" + i.default.app.mWX.mUID + "&id=0&type=0&map=0&surl=" + a,
                        success: function(e) {},
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                }, e.is_exit = !0, e;
            }();
        a.ShareUtil = r;
    }, {
        "../Main": 14,
        "./ShareConfig": 51,
        "./TimeUtil": 53
    }],
    53: [function(e, t, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.getTimeBySecond = function(e) {
                var t = Math.round((e - 1800) / 3600),
                    a = Math.round((e - 30) / 60) % 60,
                    i = Math.floor(e % 60);
                return (t > 0 ? t > 9 ? String(t) : "0" + t : "00") + ":" + (a > 0 ? a > 9 ? String(a) : "0" + a : "00") + ":" + (i > 0 ? i > 9 ? String(i) : "0" + i : "00");
            }, e.getTodayFirstSecond = function() {
                var e = new Date();
                return e.setHours(0, 0, 0, 0), e.getTime() / 1e3;
            }, e.getCurrTime = function() {
                var e = new Date();
                return Math.floor(e.getTime() / 1e3);
            }, e;
        }();
        a.TimeUtil = i;
    }, {}]
}, {}, [14]);