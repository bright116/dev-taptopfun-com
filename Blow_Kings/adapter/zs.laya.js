window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, s) {
    "use strict";
    class i {
        constructor() {}
        static compareVersion(t, s) {
            t = t.split("."), s = s.split(".");
            for (var i = Math.max(t.length, s.length); t.length < i; ) t.push("0");
            for (;s.length < i; ) s.push("0");
            for (var e = 0; e < i; e++) {
                var h = parseInt(t[e]), r = parseInt(s[e]);
                if (h > r) return 1;
                if (h < r) return -1;
            }
            return 0;
        }
        static isToday(t) {
            var s = new Date(Date.now()), i = new Date(t);
            return s.getFullYear() == i.getFullYear() && s.getMonth() == i.getMonth() && s.getDate() == i.getDate();
        }
        static random(t, s) {
            return Math.random() * (s - t) + t << 0;
        }
        static IsNumber(t) {
            return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t));
        }
        static number2String4(t) {
            var s = t.toString();
            return "0000".slice(0, -s.length) + s;
        }
        static number2String3(t) {
            var s = t.toString();
            return "000".slice(0, -s.length) + s;
        }
        static number2String2(t) {
            var s = t.toString();
            return "00".slice(0, -s.length) + s;
        }
        static array2UrlStrArgs(t) {
            if (!t || 0 == t.length) return "";
            if (1 == t.length) return t[0];
            for (var s = t[0] + "=" + t[1], i = 2; i + 1 < t.length; i += 2) s += "&" + t[i] + "=" + t[i + 1];
            return s;
        }
        static object2UrlStrArgs(t) {
            if (t) {
                var s = "";
                for (var i in t) t.hasOwnProperty(i) && (s += i + "=" + t[i] + "&");
                return s.substr(0, s.length - 1);
            }
            return "";
        }
        static hex_md5(t) {
            return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static b64_md5(t) {
            return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static str_md5(t) {
            return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static hex_hmac_md5(t, s) {
            return this.binl2hex(this.core_hmac_md5(t, s));
        }
        static b64_hmac_md5(t, s) {
            return this.binl2b64(this.core_hmac_md5(t, s));
        }
        static str_hmac_md5(t, s) {
            return this.binl2str(this.core_hmac_md5(t, s));
        }
        static hex_md5(t) {
            return this.binl2hex(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static b64_md5(t) {
            return this.binl2b64(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static str_md5(t) {
            return this.binl2str(this.core_md5(this.str2binl(t), t.length * this.chrsz));
        }
        static hex_hmac_md5(t, s) {
            return this.binl2hex(this.core_hmac_md5(t, s));
        }
        static b64_hmac_md5(t, s) {
            return this.binl2b64(this.core_hmac_md5(t, s));
        }
        static str_hmac_md5(t, s) {
            return this.binl2str(this.core_hmac_md5(t, s));
        }
        static core_md5(t, s) {
            t[s >> 5] |= 128 << s % 32, t[14 + (s + 64 >>> 9 << 4)] = s;
            for (var i = 1732584193, e = -271733879, h = -1732584194, r = 271733878, a = 0; a < t.length; a += 16) {
                var n = i, l = e, d = h, o = r;
                i = this.md5_ff(i, e, h, r, t[a + 0], 7, -680876936), r = this.md5_ff(r, i, e, h, t[a + 1], 12, -389564586), 
                h = this.md5_ff(h, r, i, e, t[a + 2], 17, 606105819), e = this.md5_ff(e, h, r, i, t[a + 3], 22, -1044525330), 
                i = this.md5_ff(i, e, h, r, t[a + 4], 7, -176418897), r = this.md5_ff(r, i, e, h, t[a + 5], 12, 1200080426), 
                h = this.md5_ff(h, r, i, e, t[a + 6], 17, -1473231341), e = this.md5_ff(e, h, r, i, t[a + 7], 22, -45705983), 
                i = this.md5_ff(i, e, h, r, t[a + 8], 7, 1770035416), r = this.md5_ff(r, i, e, h, t[a + 9], 12, -1958414417), 
                h = this.md5_ff(h, r, i, e, t[a + 10], 17, -42063), e = this.md5_ff(e, h, r, i, t[a + 11], 22, -1990404162), 
                i = this.md5_ff(i, e, h, r, t[a + 12], 7, 1804603682), r = this.md5_ff(r, i, e, h, t[a + 13], 12, -40341101), 
                h = this.md5_ff(h, r, i, e, t[a + 14], 17, -1502002290), e = this.md5_ff(e, h, r, i, t[a + 15], 22, 1236535329), 
                i = this.md5_gg(i, e, h, r, t[a + 1], 5, -165796510), r = this.md5_gg(r, i, e, h, t[a + 6], 9, -1069501632), 
                h = this.md5_gg(h, r, i, e, t[a + 11], 14, 643717713), e = this.md5_gg(e, h, r, i, t[a + 0], 20, -373897302), 
                i = this.md5_gg(i, e, h, r, t[a + 5], 5, -701558691), r = this.md5_gg(r, i, e, h, t[a + 10], 9, 38016083), 
                h = this.md5_gg(h, r, i, e, t[a + 15], 14, -660478335), e = this.md5_gg(e, h, r, i, t[a + 4], 20, -405537848), 
                i = this.md5_gg(i, e, h, r, t[a + 9], 5, 568446438), r = this.md5_gg(r, i, e, h, t[a + 14], 9, -1019803690), 
                h = this.md5_gg(h, r, i, e, t[a + 3], 14, -187363961), e = this.md5_gg(e, h, r, i, t[a + 8], 20, 1163531501), 
                i = this.md5_gg(i, e, h, r, t[a + 13], 5, -1444681467), r = this.md5_gg(r, i, e, h, t[a + 2], 9, -51403784), 
                h = this.md5_gg(h, r, i, e, t[a + 7], 14, 1735328473), e = this.md5_gg(e, h, r, i, t[a + 12], 20, -1926607734), 
                i = this.md5_hh(i, e, h, r, t[a + 5], 4, -378558), r = this.md5_hh(r, i, e, h, t[a + 8], 11, -2022574463), 
                h = this.md5_hh(h, r, i, e, t[a + 11], 16, 1839030562), e = this.md5_hh(e, h, r, i, t[a + 14], 23, -35309556), 
                i = this.md5_hh(i, e, h, r, t[a + 1], 4, -1530992060), r = this.md5_hh(r, i, e, h, t[a + 4], 11, 1272893353), 
                h = this.md5_hh(h, r, i, e, t[a + 7], 16, -155497632), e = this.md5_hh(e, h, r, i, t[a + 10], 23, -1094730640), 
                i = this.md5_hh(i, e, h, r, t[a + 13], 4, 681279174), r = this.md5_hh(r, i, e, h, t[a + 0], 11, -358537222), 
                h = this.md5_hh(h, r, i, e, t[a + 3], 16, -722521979), e = this.md5_hh(e, h, r, i, t[a + 6], 23, 76029189), 
                i = this.md5_hh(i, e, h, r, t[a + 9], 4, -640364487), r = this.md5_hh(r, i, e, h, t[a + 12], 11, -421815835), 
                h = this.md5_hh(h, r, i, e, t[a + 15], 16, 530742520), e = this.md5_hh(e, h, r, i, t[a + 2], 23, -995338651), 
                i = this.md5_ii(i, e, h, r, t[a + 0], 6, -198630844), r = this.md5_ii(r, i, e, h, t[a + 7], 10, 1126891415), 
                h = this.md5_ii(h, r, i, e, t[a + 14], 15, -1416354905), e = this.md5_ii(e, h, r, i, t[a + 5], 21, -57434055), 
                i = this.md5_ii(i, e, h, r, t[a + 12], 6, 1700485571), r = this.md5_ii(r, i, e, h, t[a + 3], 10, -1894986606), 
                h = this.md5_ii(h, r, i, e, t[a + 10], 15, -1051523), e = this.md5_ii(e, h, r, i, t[a + 1], 21, -2054922799), 
                i = this.md5_ii(i, e, h, r, t[a + 8], 6, 1873313359), r = this.md5_ii(r, i, e, h, t[a + 15], 10, -30611744), 
                h = this.md5_ii(h, r, i, e, t[a + 6], 15, -1560198380), e = this.md5_ii(e, h, r, i, t[a + 13], 21, 1309151649), 
                i = this.md5_ii(i, e, h, r, t[a + 4], 6, -145523070), r = this.md5_ii(r, i, e, h, t[a + 11], 10, -1120210379), 
                h = this.md5_ii(h, r, i, e, t[a + 2], 15, 718787259), e = this.md5_ii(e, h, r, i, t[a + 9], 21, -343485551), 
                i = this.safe_add(i, n), e = this.safe_add(e, l), h = this.safe_add(h, d), r = this.safe_add(r, o);
            }
            return Array(i, e, h, r);
        }
        static md5_cmn(t, s, i, e, h, r) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(s, t), this.safe_add(e, r)), h), i);
        }
        static md5_ff(t, s, i, e, h, r, a) {
            return this.md5_cmn(s & i | ~s & e, t, s, h, r, a);
        }
        static md5_gg(t, s, i, e, h, r, a) {
            return this.md5_cmn(s & e | i & ~e, t, s, h, r, a);
        }
        static md5_hh(t, s, i, e, h, r, a) {
            return this.md5_cmn(s ^ i ^ e, t, s, h, r, a);
        }
        static md5_ii(t, s, i, e, h, r, a) {
            return this.md5_cmn(i ^ (s | ~e), t, s, h, r, a);
        }
        static core_hmac_md5(t, s) {
            var i = this.str2binl(t);
            i.length > 16 && (i = this.core_md5(i, t.length * this.chrsz));
            for (var e = Array(16), h = Array(16), r = 0; r < 16; r++) e[r] = 909522486 ^ i[r], 
            h[r] = 1549556828 ^ i[r];
            var a = this.core_md5(e.concat(this.str2binl(s)), 512 + s.length * this.chrsz);
            return this.core_md5(h.concat(a), 640);
        }
        static safe_add(t, s) {
            var i = (65535 & t) + (65535 & s);
            return (t >> 16) + (s >> 16) + (i >> 16) << 16 | 65535 & i;
        }
        static bit_rol(t, s) {
            return t << s | t >>> 32 - s;
        }
        static str2binl(t) {
            for (var s = Array(), i = (1 << this.chrsz) - 1, e = 0; e < t.length * this.chrsz; e += this.chrsz) s[e >> 5] |= (t.charCodeAt(e / this.chrsz) & i) << e % 32;
            return s;
        }
        static binl2str(t) {
            for (var s = "", i = (1 << this.chrsz) - 1, e = 0; e < 32 * t.length; e += this.chrsz) s += String.fromCharCode(t[e >> 5] >>> e % 32 & i);
            return s;
        }
        static binl2hex(t) {
            for (var s = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", e = 0; e < 4 * t.length; e++) i += s.charAt(t[e >> 2] >> e % 4 * 8 + 4 & 15) + s.charAt(t[e >> 2] >> e % 4 * 8 & 15);
            return i;
        }
        static binl2b64(t) {
            for (var s = "", i = 0; i < 4 * t.length; i += 3) for (var e = (t[i >> 2] >> i % 4 * 8 & 255) << 16 | (t[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, h = 0; h < 4; h++) 8 * i + 6 * h > 32 * t.length ? s += this.b64pad : s += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e >> 6 * (3 - h) & 63);
            return s;
        }
    }
    i.hexcase = 0, i.b64pad = "", i.chrsz = 8, s.ILaya.regClass(i), s.ClassUtils.regClass("zs.laya.MiscUtils", i), 
    s.ClassUtils.regClass("Zhise.MiscUtils", i);
    class e {
        constructor() {}
        static getArgsSign(t, s) {
            for (var i = Object.keys(t).sort(), e = "", h = 0; h < i.length; h++) e += i[h] + "=" + t[i[h]];
            return s && (e += s), zs.laya.MiscUtils.hex_md5(e).toLowerCase();
        }
        static xhrPost(t, i) {
            if (0 != zs.laya.sdk.DeviceService.IsNetValid()) {
                if (null == e.xhrRequestList[t]) {
                    e.xhrRequestList[t] = Date.now();
                    var h = zs.laya.MiscUtils.object2UrlStrArgs(i), r = new s.HttpRequest();
                    r.http.timeout = 1e4, r.once(s.Event.ERROR, this, this.onXHRError, [ t, i ]), r.once(s.Event.COMPLETE, this, this.onXHRCompleted, [ t, i ]), 
                    r.send(t, h, "post", "text");
                }
            } else s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, h, null ]);
        }
        static xhrPostWithSign(t, i, h) {
            if (0 != zs.laya.sdk.DeviceService.IsNetValid()) {
                if (null == e.xhrRequestList[t]) {
                    e.xhrRequestList[t] = Date.now(), i.sign = this.getArgsSign(i, h);
                    var r = zs.laya.MiscUtils.object2UrlStrArgs(i), a = new s.HttpRequest();
                    a.http.timeout = 1e4, a.once(s.Event.ERROR, this, this.onXHRError, [ t, i ]), a.once(s.Event.COMPLETE, this, this.onXHRCompleted, [ t, i ]), 
                    a.send(t, r, "post", "text");
                }
            } else s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, r, null ]);
        }
        static xhrPostWithSignAndHeader(t, i, h, r) {
            if (0 != zs.laya.sdk.DeviceService.IsNetValid()) {
                if (null == e.xhrRequestList[t]) {
                    e.xhrRequestList[t] = Date.now(), i.sign = this.getArgsSign(i, h);
                    for (var a = [ "Content-Type", "application/x-www-form-urlencoded" ], n = Object.keys(r), l = 0; l < n.length; l++) a.push(n[l]), 
                    a.push(r[n[l]]);
                    var d = zs.laya.MiscUtils.object2UrlStrArgs(i), o = new s.HttpRequest();
                    o.http.timeout = 1e4, o.once(s.Event.ERROR, this, this.onXHRError, [ t, i ]), o.once(s.Event.COMPLETE, this, this.onXHRCompleted, [ t, i ]), 
                    o.send(t, d, "post", "text", a);
                }
            } else s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, null ]);
        }
        static onXHRError(t, i, h) {
            e.xhrRequestList[t] = null, console.error("onXHRError:" + t + ",params:" + JSON.stringify(i) + ",response:" + h), 
            s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, h ]);
        }
        static onXHRCompleted(t, i, h) {
            e.xhrRequestList[t] = null;
            var r = JSON.parse(h);
            if (r.code) {
                if (200 != r.code) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, r.msg ]);
                if (null == r.data) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, "登陆失败，数据体为空" ]);
                if (1 != r.data.status) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, r.data.msg ]);
            } else {
                if (!r.ret) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, r.msg ]);
                if (200 != r.ret) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, r.msg ]);
                if (null == r.data) return void s.stage.event(this.NET_XHR_RESPONSE, [ 0, t, i, "登陆失败，数据体为空" ]);
            }
            s.stage.event(this.NET_XHR_RESPONSE, [ 1, t, i, r ]);
        }
    }
    e.NET_XHR_RESPONSE = "NET_XHR_RESPONSE", e.xhrRequestList = {}, s.ILaya.regClass(e), 
    s.ClassUtils.regClass("zs.laya.XHRUtils", e), s.ClassUtils.regClass("Zhise.XHRUtils", e);
    class h {
        constructor() {}
        static requestLoginByCode(t, s) {
            var i = s || {};
            i.code = t, i.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSign(this.WebApiMap.login, i, this.RequestSign) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, i), 
            console.log(this.WebApiMap.login));
        }
        static requestLoginByUserId(t, s) {
            var i = s || {};
            i.user_id = t, i.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.login, i, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.login, i), 
            console.log(this.WebApiMap.login));
        }
        static requestBaseCfg(t) {
            var s = t || {};
            this.UseWebApi && (this.RequestSign, zs.laya.XHRUtils.xhrPost(this.WebApiMap.gameCfg, s), 
            console.log(this.WebApiMap.gameCfg));
        }
        static updatePlayerInfo(t) {
            var s = t || {};
            s.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.updateInfo, s, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.updateInfo, s));
        }
        static updateVideoLog(t) {
            var s = t || {};
            s.timestamp = Date.now(), this.UseWebApi && (this.RequestSign ? zs.laya.XHRUtils.xhrPostWithSignAndHeader(this.WebApiMap.logVideo, s, this.RequestSign, this.RequestHeader) : zs.laya.XHRUtils.xhrPost(this.WebApiMap.logVideo, s), 
            console.log(this.WebApiMap.logVideo));
        }
    }
    h.WebApiMap = null, h.RequestHeader = {}, h.RequestSign = null, h.UseWebApi = !0, 
    s.ILaya.regClass(h), s.ClassUtils.regClass("zs.laya.game.WebService", h), s.ClassUtils.regClass("Zhise.WebService", h), 
    t.XHRUtils = e, t.MiscUtils = i, t.WebService = h;
}(window.zs.laya, Laya);