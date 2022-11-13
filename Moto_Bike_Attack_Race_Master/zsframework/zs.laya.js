window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, e) {
    "use strict";
    class s {
        constructor() {}
        static compareVersion(t, e) {
            t = t.split("."), e = e.split(".");
            for (var s = Math.max(t.length, e.length); t.length < s; ) t.push("0");
            for (;e.length < s; ) e.push("0");
            for (var i = 0; i < s; i++) {
                var r = parseInt(t[i]), a = parseInt(e[i]);
                if (r > a) return 1;
                if (r < a) return -1;
            }
            return 0;
        }
        static isToday(t) {
            var e = new Date(Date.now()), s = new Date(t);
            return e.getFullYear() == s.getFullYear() && e.getMonth() == s.getMonth() && e.getDate() == s.getDate();
        }
        static random(t, e) {
            return Math.random() * (e - t) + t << 0;
        }
        static IsNumber(t) {
            return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t));
        }
        static number2String4(t) {
            var e = t.toString();
            return "0000".slice(0, -e.length) + e;
        }
        static number2String3(t) {
            var e = t.toString();
            return "000".slice(0, -e.length) + e;
        }
        static number2String2(t) {
            var e = t.toString();
            return "00".slice(0, -e.length) + e;
        }
        static array2UrlStrArgs(t) {
            if (!t || 0 == t.length) return "";
            if (1 == t.length) return t[0];
            for (var e = t[0] + "=" + t[1], s = 2; s + 1 < t.length; s += 2) e += "&" + t[s] + "=" + t[s + 1];
            return e;
        }
        static object2UrlStrArgs(t) {
            if (t) {
                var e = "";
                for (var s in t) t.hasOwnProperty(s) && (e += s + "=" + t[s] + "&");
                return e.substr(0, e.length - 1);
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
        static hex_hmac_md5(t, e) {
            return this.binl2hex(this.core_hmac_md5(t, e));
        }
        static b64_hmac_md5(t, e) {
            return this.binl2b64(this.core_hmac_md5(t, e));
        }
        static str_hmac_md5(t, e) {
            return this.binl2str(this.core_hmac_md5(t, e));
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
        static hex_hmac_md5(t, e) {
            return this.binl2hex(this.core_hmac_md5(t, e));
        }
        static b64_hmac_md5(t, e) {
            return this.binl2b64(this.core_hmac_md5(t, e));
        }
        static str_hmac_md5(t, e) {
            return this.binl2str(this.core_hmac_md5(t, e));
        }
        static core_md5(t, e) {
            t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var s = 1732584193, i = -271733879, r = -1732584194, a = 271733878, n = 0; n < t.length; n += 16) {
                var l = s, o = i, h = r, c = a;
                s = this.md5_ff(s, i, r, a, t[n + 0], 7, -680876936), a = this.md5_ff(a, s, i, r, t[n + 1], 12, -389564586), 
                r = this.md5_ff(r, a, s, i, t[n + 2], 17, 606105819), i = this.md5_ff(i, r, a, s, t[n + 3], 22, -1044525330), 
                s = this.md5_ff(s, i, r, a, t[n + 4], 7, -176418897), a = this.md5_ff(a, s, i, r, t[n + 5], 12, 1200080426), 
                r = this.md5_ff(r, a, s, i, t[n + 6], 17, -1473231341), i = this.md5_ff(i, r, a, s, t[n + 7], 22, -45705983), 
                s = this.md5_ff(s, i, r, a, t[n + 8], 7, 1770035416), a = this.md5_ff(a, s, i, r, t[n + 9], 12, -1958414417), 
                r = this.md5_ff(r, a, s, i, t[n + 10], 17, -42063), i = this.md5_ff(i, r, a, s, t[n + 11], 22, -1990404162), 
                s = this.md5_ff(s, i, r, a, t[n + 12], 7, 1804603682), a = this.md5_ff(a, s, i, r, t[n + 13], 12, -40341101), 
                r = this.md5_ff(r, a, s, i, t[n + 14], 17, -1502002290), i = this.md5_ff(i, r, a, s, t[n + 15], 22, 1236535329), 
                s = this.md5_gg(s, i, r, a, t[n + 1], 5, -165796510), a = this.md5_gg(a, s, i, r, t[n + 6], 9, -1069501632), 
                r = this.md5_gg(r, a, s, i, t[n + 11], 14, 643717713), i = this.md5_gg(i, r, a, s, t[n + 0], 20, -373897302), 
                s = this.md5_gg(s, i, r, a, t[n + 5], 5, -701558691), a = this.md5_gg(a, s, i, r, t[n + 10], 9, 38016083), 
                r = this.md5_gg(r, a, s, i, t[n + 15], 14, -660478335), i = this.md5_gg(i, r, a, s, t[n + 4], 20, -405537848), 
                s = this.md5_gg(s, i, r, a, t[n + 9], 5, 568446438), a = this.md5_gg(a, s, i, r, t[n + 14], 9, -1019803690), 
                r = this.md5_gg(r, a, s, i, t[n + 3], 14, -187363961), i = this.md5_gg(i, r, a, s, t[n + 8], 20, 1163531501), 
                s = this.md5_gg(s, i, r, a, t[n + 13], 5, -1444681467), a = this.md5_gg(a, s, i, r, t[n + 2], 9, -51403784), 
                r = this.md5_gg(r, a, s, i, t[n + 7], 14, 1735328473), i = this.md5_gg(i, r, a, s, t[n + 12], 20, -1926607734), 
                s = this.md5_hh(s, i, r, a, t[n + 5], 4, -378558), a = this.md5_hh(a, s, i, r, t[n + 8], 11, -2022574463), 
                r = this.md5_hh(r, a, s, i, t[n + 11], 16, 1839030562), i = this.md5_hh(i, r, a, s, t[n + 14], 23, -35309556), 
                s = this.md5_hh(s, i, r, a, t[n + 1], 4, -1530992060), a = this.md5_hh(a, s, i, r, t[n + 4], 11, 1272893353), 
                r = this.md5_hh(r, a, s, i, t[n + 7], 16, -155497632), i = this.md5_hh(i, r, a, s, t[n + 10], 23, -1094730640), 
                s = this.md5_hh(s, i, r, a, t[n + 13], 4, 681279174), a = this.md5_hh(a, s, i, r, t[n + 0], 11, -358537222), 
                r = this.md5_hh(r, a, s, i, t[n + 3], 16, -722521979), i = this.md5_hh(i, r, a, s, t[n + 6], 23, 76029189), 
                s = this.md5_hh(s, i, r, a, t[n + 9], 4, -640364487), a = this.md5_hh(a, s, i, r, t[n + 12], 11, -421815835), 
                r = this.md5_hh(r, a, s, i, t[n + 15], 16, 530742520), i = this.md5_hh(i, r, a, s, t[n + 2], 23, -995338651), 
                s = this.md5_ii(s, i, r, a, t[n + 0], 6, -198630844), a = this.md5_ii(a, s, i, r, t[n + 7], 10, 1126891415), 
                r = this.md5_ii(r, a, s, i, t[n + 14], 15, -1416354905), i = this.md5_ii(i, r, a, s, t[n + 5], 21, -57434055), 
                s = this.md5_ii(s, i, r, a, t[n + 12], 6, 1700485571), a = this.md5_ii(a, s, i, r, t[n + 3], 10, -1894986606), 
                r = this.md5_ii(r, a, s, i, t[n + 10], 15, -1051523), i = this.md5_ii(i, r, a, s, t[n + 1], 21, -2054922799), 
                s = this.md5_ii(s, i, r, a, t[n + 8], 6, 1873313359), a = this.md5_ii(a, s, i, r, t[n + 15], 10, -30611744), 
                r = this.md5_ii(r, a, s, i, t[n + 6], 15, -1560198380), i = this.md5_ii(i, r, a, s, t[n + 13], 21, 1309151649), 
                s = this.md5_ii(s, i, r, a, t[n + 4], 6, -145523070), a = this.md5_ii(a, s, i, r, t[n + 11], 10, -1120210379), 
                r = this.md5_ii(r, a, s, i, t[n + 2], 15, 718787259), i = this.md5_ii(i, r, a, s, t[n + 9], 21, -343485551), 
                s = this.safe_add(s, l), i = this.safe_add(i, o), r = this.safe_add(r, h), a = this.safe_add(a, c);
            }
            return Array(s, i, r, a);
        }
        static md5_cmn(t, e, s, i, r, a) {
            return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(i, a)), r), s);
        }
        static md5_ff(t, e, s, i, r, a, n) {
            return this.md5_cmn(e & s | ~e & i, t, e, r, a, n);
        }
        static md5_gg(t, e, s, i, r, a, n) {
            return this.md5_cmn(e & i | s & ~i, t, e, r, a, n);
        }
        static md5_hh(t, e, s, i, r, a, n) {
            return this.md5_cmn(e ^ s ^ i, t, e, r, a, n);
        }
        static md5_ii(t, e, s, i, r, a, n) {
            return this.md5_cmn(s ^ (e | ~i), t, e, r, a, n);
        }
        static core_hmac_md5(t, e) {
            var s = this.str2binl(t);
            s.length > 16 && (s = this.core_md5(s, t.length * this.chrsz));
            for (var i = Array(16), r = Array(16), a = 0; a < 16; a++) i[a] = 909522486 ^ s[a], 
            r[a] = 1549556828 ^ s[a];
            var n = this.core_md5(i.concat(this.str2binl(e)), 512 + e.length * this.chrsz);
            return this.core_md5(r.concat(n), 640);
        }
        static safe_add(t, e) {
            var s = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (s >> 16) << 16 | 65535 & s;
        }
        static bit_rol(t, e) {
            return t << e | t >>> 32 - e;
        }
        static str2binl(t) {
            for (var e = Array(), s = (1 << this.chrsz) - 1, i = 0; i < t.length * this.chrsz; i += this.chrsz) e[i >> 5] |= (t.charCodeAt(i / this.chrsz) & s) << i % 32;
            return e;
        }
        static binl2str(t) {
            for (var e = "", s = (1 << this.chrsz) - 1, i = 0; i < 32 * t.length; i += this.chrsz) e += String.fromCharCode(t[i >> 5] >>> i % 32 & s);
            return e;
        }
        static binl2hex(t) {
            for (var e = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", s = "", i = 0; i < 4 * t.length; i++) s += e.charAt(t[i >> 2] >> i % 4 * 8 + 4 & 15) + e.charAt(t[i >> 2] >> i % 4 * 8 & 15);
            return s;
        }
        static binl2b64(t) {
            for (var e = "", s = 0; s < 4 * t.length; s += 3) for (var i = (t[s >> 2] >> s % 4 * 8 & 255) << 16 | (t[s + 1 >> 2] >> (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >> 2] >> (s + 2) % 4 * 8 & 255, r = 0; r < 4; r++) 8 * s + 6 * r > 32 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - r) & 63);
            return e;
        }
    }
    s.hexcase = 0, s.b64pad = "", s.chrsz = 8, e.ILaya.regClass(s), e.ClassUtils.regClass("zs.laya.MiscUtils", s), 
    e.ClassUtils.regClass("Zhise.MiscUtils", s);
    class i {
        constructor() {}
        static getArgsSign(t, e) {
            for (var s = Object.keys(t).sort(), i = "", r = 0; r < s.length; r++) i += s[r] + "=" + t[s[r]];
            return e && (i += e), zs.laya.MiscUtils.hex_md5(i).toLowerCase();
        }
        static xhrPost(t, s) {
            if (0 != zs.laya.DeviceService.IsNetValid()) {
                if (null == i.xhrRequestList[t]) {
                    i.xhrRequestList[t] = Date.now();
                    var r = zs.laya.MiscUtils.object2UrlStrArgs(s), a = new e.HttpRequest();
                    a.http.timeout = 1e4, a.once(e.Event.ERROR, this, this.onXHRError, [ t, s ]), a.once(e.Event.COMPLETE, this, this.onXHRCompleted, [ t, s ]), 
                    a.send(t, r, "post", "text");
                }
            } else e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, r, null ]);
        }
        static xhrPostWithSign(t, s, r) {
            if (0 != zs.laya.DeviceService.IsNetValid()) {
                if (null == i.xhrRequestList[t]) {
                    i.xhrRequestList[t] = Date.now(), s.sign = this.getArgsSign(s, r);
                    var a = zs.laya.MiscUtils.object2UrlStrArgs(s), n = new e.HttpRequest();
                    n.http.timeout = 1e4, n.once(e.Event.ERROR, this, this.onXHRError, [ t, s ]), n.once(e.Event.COMPLETE, this, this.onXHRCompleted, [ t, s ]), 
                    n.send(t, a, "post", "text");
                }
            } else e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, a, null ]);
        }
        static xhrPostWithSignAndHeader(t, s, r, a) {
            if (0 != zs.laya.DeviceService.IsNetValid()) {
                if (null == i.xhrRequestList[t]) {
                    i.xhrRequestList[t] = Date.now(), s.sign = this.getArgsSign(s, r);
                    for (var n = [ "Content-Type", "application/x-www-form-urlencoded" ], l = Object.keys(a), o = 0; o < l.length; o++) n.push(l[o]), 
                    n.push(a[l[o]]);
                    var h = zs.laya.MiscUtils.object2UrlStrArgs(s), c = new e.HttpRequest();
                    c.http.timeout = 1e4, c.once(e.Event.ERROR, this, this.onXHRError, [ t, s ]), c.once(e.Event.COMPLETE, this, this.onXHRCompleted, [ t, s ]), 
                    c.send(t, h, "post", "text", n);
                }
            } else e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, null ]);
        }
        static onXHRError(t, s, r) {
            i.xhrRequestList[t] = null, console.log("onXHRError:" + t + ",params:" + JSON.stringify(s) + ",response:" + r), 
            e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, r ]);
        }
        static onXHRCompleted(t, s, r) {
            i.xhrRequestList[t] = null;
            var a = JSON.parse(r);
            if (a.code) {
                if (200 != a.code) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, a.msg ]);
                if (null == a.data) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, "登陆失败，数据体为空" ]);
                if (1 != a.data.status) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, a.data.msg ]);
            } else {
                if (!a.ret) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, a.msg ]);
                if (200 != a.ret) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, a.msg ]);
                if (null == a.data) return void e.stage.event(this.NET_XHR_RESPONSE, [ 0, t, s, "登陆失败，数据体为空" ]);
            }
            e.stage.event(this.NET_XHR_RESPONSE, [ 1, t, s, a ]);
        }
    }
    i.NET_XHR_RESPONSE = "NET_XHR_RESPONSE", i.xhrRequestList = {}, e.ILaya.regClass(i), 
    e.ClassUtils.regClass("zs.laya.XHRUtils", i), e.ClassUtils.regClass("Zhise.XHRUtils", i);
    class r {
        constructor() {}
        static setStorageSync(t, e) {
            this.localStorage[t] = e;
        }
        static getStorageSync(t) {
            return this.localStorage[t];
        }
        static clearStorageSync(t) {
            delete this.localStorage[t];
        }
        static clearCache(t) {
            this.clearStorageSync(t), this.clearStorageSync(t + "_time");
        }
        static getCache(t, e) {
            if (e) {
                var s = this.getStorageSync(t + "_time");
                return null == s || Date.now() < s + Number(e) ? this.getStorageSync(t) : null;
            }
            return this.getStorageSync(t);
        }
        static setCache(t, e) {
            this.setStorageSync(t, e), this.setStorageSync(t + "_time", Date.now());
        }
    }
    r.localStorage = {}, e.ILaya.regClass(r), e.ClassUtils.regClass("zs.laya.DataCache", r), 
    e.ClassUtils.regClass("Zhise.DataCache", r);
    class a extends e.Script {
        constructor() {
            super();
        }
        static Get3dResUrl(t) {
            return this.threeDResRootPath + t;
        }
        static Get3dPrefabUrl(t) {
            return this.threeDResRootPath + t + ".lh";
        }
        static Get3dSceneUrl(t) {
            return this.threeDResRootPath + t + ".ls";
        }
        static CurScene3dUrl() {
            return this.curScene3d ? this.curScene3d.zs_res_url : null;
        }
        static LoadRes() {}
        static LoadResAsyn(t, e, s) {}
        static LoadSprite3d(t) {
            return e.loader.getRes(this.Get3dPrefabUrl(t));
        }
        static LoadSpriteAsyn(t, s, i) {
            var r = this.Get3dPrefabUrl(t), a = e.loader.getRes(r);
            if (a) return i && i.runWith(1), void (s && s.runWith(a));
            e.loader.create(r, e.Handler.create(null, function(t) {
                s && s.runWith(t);
            }), i);
        }
        static LoadScene3d(t) {
            var s = this.curScene3d;
            this.curScene3d = null;
            var i = null != s ? s.zs_res_url : null;
            return s && (s.removeSelf(), s.destroy(), s = null), this.curScene3d = e.loader.getRes(this.Get3dSceneUrl(t)), 
            this.curScene3d && (this.curScene3d.zs_res_url = t), i && this.unloadSceneRes(i), 
            this.curScene3d;
        }
        static LoadScene3dAsyn(t, s, i) {
            this.curDownloadSceneUrl != t && e.loader.cancelLoadByUrl(this.curDownloadSceneUrl), 
            this.curDownloadSceneUrl = null;
            var r = this.curScene3d;
            this.curScene3d = null;
            var a = null != r ? r.zs_res_url : null;
            r && (r.removeSelf(), r.destroy(), r = null, e.loader.clearRes(a));
            var n = this.Get3dSceneUrl(t);
            if (this.curScene3d = e.loader.getRes(n), this.curScene3d) return this.curScene3d.zs_res_url = t, 
            a && this.unloadSceneRes(a), i && i.runWith(1), s && s.runWith(this.curScene3d), 
            this.curScene3d;
            this.curDownloadSceneUrl = n;
            var l = this;
            return e.loader.create(n, e.Handler.create(null, function(e) {
                l.curDownloadSceneUrl = null, l.curScene3d = e, l.curScene3d && (l.curScene3d.zs_res_url = t), 
                a && l.unloadSceneRes(a), s && s.runWith(l.curScene3d);
            }), i), null;
        }
        static unloadSceneRes(t) {
            e.loader.load(this.Get3dResUrl(t + ".json"), e.Handler.create(this, this.DestroyScene3dRes, [ this.Get3dResUrl(t + ".json") ]));
        }
        static printSceneDependences(t) {
            e.loader.load(this.Get3dResUrl(t + ".json"), e.Handler.create(this, this.printScene3dRes, [ this.Get3dResUrl(t + ".json") ]));
        }
        static printScene3dRes(t) {
            var s = e.loader.getRes(t);
            if (null != s) for (var i = {}, r = s.length - 1; r > -1; r--) {
                var a = this.Get3dResUrl(s[r]), n = e.loader.getRes(a);
                null == n || (i[a] = n.referenceCount);
            }
        }
        static DestroyScene3dRes(t) {
            var s = e.loader.getRes(t);
            if (null != s) for (var i = s.length - 1; i > -1; i--) {
                var r = this.Get3dResUrl(s[i]), a = e.loader.getRes(r);
                null == a || a.referenceCount > 0 || (a.destroy(), e.loader.clearRes(r));
            }
        }
    }
    a.curScene3d = null, a.curDownloadSceneUrl = null, a.threeDResRootPath = "3dres/Conventional/", 
    e.ILaya.regClass(a), e.ClassUtils.regClass("zs.laya.Resource", a), e.ClassUtils.regClass("zs.laya.ZSResource", a), 
    e.ClassUtils.regClass("Zhise.Resource", a);
    class n extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            n.device = window.zsDevice, n.device && (n.device.init(), n.device.onShow(e.Handler.create(null, function(t) {
                e.stage.event(n.EVENT_ON_SHOW, t);
            }, null, !1)), n.device.onHide(e.Handler.create(null, function() {
                e.stage.event(n.EVENT_ON_HIDE);
            }, null, !1)));
        }
        onDestroy() {
            n.device = null;
        }
        static statusBarHeight() {
            return this.device ? this.device.statusBarHeight() : 0;
        }
        static screenWidth() {
            return this.device ? this.device.screenWidth() : e.stage.width;
        }
        static screenHeight() {
            return this.device ? this.device.screenHeight() : e.stage.height;
        }
        static VibrateShort() {
        }
        static VibrateLong() {
        }
        static IsNetValid() {
            return this.device ? this.device.isNetValid() : navigator.onLine;
        }
    }
    n.device = null, n.EVENT_ON_RESUME = "DEVICE_ON_RESUME", n.EVENT_ON_HIDE = "DEVICE_ON_HIDE", 
    n.EVENT_ON_SHOW = "DEVICE_ON_SHOW", e.ILaya.regClass(n), e.ClassUtils.regClass("zs.laya.DeviceService", n), 
    e.ClassUtils.regClass("Zhise.DeviceService", n);
    class l extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            e.stage.on(n.EVENT_ON_SHOW, this, this.onAppShow), e.stage.on(n.EVENT_ON_HIDE, this, this.onAppHide);
        }
        onDestroy() {
            e.stage.off(n.EVENT_ON_SHOW, this, this.onAppShow), e.stage.off(n.EVENT_ON_HIDE, this, this.onAppHide);
        }
        onAppShow() {
            l.playMusic(l.curMusic);
        }
        onAppHide() {
            l.stopMusic();
        }
        static playMusic(t) {
            null != t && (l.curMusic == t && l.bgPlaying || (l.curMusic = t, l.bgPlaying = !0, 
            e.SoundManager.stopMusic(), e.SoundManager.playMusic(l.curMusic, 0)));
        }
        static stopMusic() {
            console.log("======================================================"), e.SoundManager.stopAll(), 
            e.SoundManager.stopMusic(), l.bgPlaying = !1;
        }
    }
    l.curMusic = null, l.bgPlaying = !1, e.ILaya.regClass(l), e.ClassUtils.regClass("zs.laya.SoundService", l), 
    e.ClassUtils.regClass("Zhise.SoundService", l);
    class o extends e.Script {
        constructor() {
            super(), this.poolStatus = {}, this.recoverArr = [];
        }
        clearCache() {
            var t = this;
            for (var s in this.recoverArr.forEach(function(s) {
                s.__InPool || (t.poolStatus[s._zs_sign] || (t.poolStatus[s._zs_sign] = {}), t.poolStatus[s._zs_sign].free ? t.poolStatus[s._zs_sign].free += 1 : t.poolStatus[s._zs_sign].free = 1, 
                e.Pool.recover(s._zs_sign, s));
            }), this.recoverArr.splice(0, this.recoverArr.length), console.log("ObjectPool.poolStatus:" + JSON.stringify(this.poolStatus)), 
            this.poolStatus) this.poolStatus.hasOwnProperty(s) && e.Pool.clearBySign(s);
            this.poolStatus = {};
        }
        recoverSprite3d(t, s) {
            if (t.removeSelf(), null != t._zs_sign) if (s) {
                if (t.__InPool) return;
                this.poolStatus[t._zs_sign] || (this.poolStatus[t._zs_sign] = {}), this.poolStatus[t._zs_sign].free ? this.poolStatus[t._zs_sign].free += 1 : this.poolStatus[t._zs_sign].free = 1, 
                e.Pool.recover(t._zs_sign, t);
            } else this.recoverArr.push(t);
        }
        getEmptySprite3d(t) {
            var s = t;
            this.poolStatus[s] ? this.poolStatus[s].total += 1 : (this.poolStatus[s] = {}, this.poolStatus[s].total = 1);
            var i = this;
            return e.Pool.getItemByCreateFun(s, function() {
                return i.createEmptySprite3d(t);
            });
        }
        createEmptySprite3d(t) {
            var s = new e.Sprite3D();
            return s._zs_sign = t, s;
        }
        getSprite3d(t, s) {
            var i = s || t.url;
            this.poolStatus[i] ? this.poolStatus[i].total += 1 : (this.poolStatus[i] = {}, this.poolStatus[i].total = 1);
            var r = this;
            return e.Pool.getItemByCreateFun(i, function() {
                return r.createSprite3d(t, i);
            });
        }
        createSprite3d(t, s) {
            var i = e.Sprite3D.instantiate(t, null, !1, e.Vector3._ZERO.clone());
            return i._zs_sign = s, i;
        }
        onAwake() {
            o.sInstance = this;
        }
        onDestroy() {
            o.sInstance = null;
        }
        onLateUpdate() {
            if (0 != this.recoverArr.length) {
                var t = this;
                this.recoverArr.forEach(function(s) {
                    s.__InPool || (t.poolStatus[s._zs_sign].free ? t.poolStatus[s._zs_sign].free += 1 : t.poolStatus[s._zs_sign].free = 1, 
                    e.Pool.recover(s._zs_sign, s));
                }), this.recoverArr.splice(0, this.recoverArr.length);
            }
        }
        static ClearCache() {
            this.sInstance.clearCache();
        }
        static RecoverSprite3d(t, e) {
            this.sInstance.recoverSprite3d(t, e);
        }
        static GetEmptySprite3d(t) {
            return this.sInstance.getEmptySprite3d(t);
        }
        static GetSprite3d(t, e) {
            return this.sInstance.getSprite3d(t, e);
        }
    }
    o.sInstance = null, e.ILaya.regClass(o), e.ClassUtils.regClass("zs.laya.ObjectPool", o), 
    e.ClassUtils.regClass("Zhise.ObjectPool", o);
    class h {
        constructor(t, s, i, r, a, n, l) {
            this.customId = t, this.sign = s, this.duaration = i, this.parent = r, null != a && (this.isWorldSpace = a, 
            this.position = n ? n.clone() : null, this.rotation = l ? l.clone() : null), this.createTime = e.timer.currTimer;
        }
    }
    class c extends e.Script {
        constructor() {
            super(), this.effectWaitingList = [], this.recoverArr = [];
        }
        static CreateEffect(t, e, s, i, r, a, n, l) {
            this.sInstance.createEffect(t, e, s, i, r, a, n, l);
        }
        onAwake() {
            c.sInstance = this;
        }
        onDestroy() {
            c.sInstance = null;
        }
        createEffect(t, e, s, i, r, a, n, l) {
            var o = new h(t, e, s, i, r, a, n);
            o.effectScript = l, this.effectWaitingList.push(o), 1 == this.effectWaitingList.length && this.instanceEffectDelay(2);
        }
        instanceEffectDelay(t) {
            e.timer.frameOnce(t, this, this.instanceEffect, [ t ]);
        }
        instanceEffect(t) {
            var s = this.effectWaitingList.shift();
            e.timer.currTimer - s.createTime > s.duaration ? this.effectWaitingList.length > 0 && this.instanceEffectDelay(t) : (zs.laya.Resource.LoadSpriteAsyn(s.sign, e.Handler.create(this, this.onEffectReady, [ s ])), 
            this.effectWaitingList.length > 0 && this.instanceEffectDelay(t));
        }
        onEffectReady(t, s) {
            if (!(e.timer.currTimer - t.createTime > t.duaration)) {
                var i = zs.laya.ObjectPool.GetSprite3d(s);
                if (null != i && !t.parent.destroyed && null != t.parent.parent) {
                    t.parent.addChild(i), i.name = t.customId, null == t.isWorldSpace || (t.isWorldSpace ? (!t.position || (i.transform.position = t.position), 
                    !t.rotation || (i.transform.rotation = t.rotation)) : (!t.position || (i.transform.localPosition = t.position), 
                    !t.rotation || (i.transform.localRotation = t.rotation)));
                    var r = i.getComponent(d);
                    null == r && (r = i.addComponent(d)), r.delay = t.duaration;
                }
            }
        }
    }
    c.sInstance = null, e.ILaya.regClass(c), e.ClassUtils.regClass("zs.laya.EffectFactory", c), 
    e.ClassUtils.regClass("Zhise.EffectFactory", c);
    class d extends e.Script3D {
        constructor() {
            super(), this.delay = Number.MAX_VALUE;
        }
        cleanNode() {
            o.RecoverSprite3d(this.owner);
        }
        onUpdate() {
            this.delay < 0 || (this.delay -= e.timer.delta, this.delay <= 0 && (this.delay = Number.MAX_VALUE, 
            zs.laya.ObjectPool.RecoverSprite3d(this.owner)));
        }
        onDestroy() {
            this.delay = null;
        }
    }
    e.ILaya.regClass(d), e.ClassUtils.regClass("zs.laya.EffectScript3d", d), e.ClassUtils.regClass("Zhise.EffectScript3d", d);
    class u extends e.Script3D {
        constructor() {
            super(), this.listener = null;
        }
        static Init(t, e) {
            var s = t.getComponent(u);
            s || (s = t.addComponent(u)), s.listener = e;
        }
        onTriggerEnter(t) {
            null != this.listener && this.listener.zsTriggerEnter && this.listener.zsTriggerEnter(this, t);
        }
        onTriggerExit(t) {
            null != this.listener && this.listener.zsTriggerExit && this.listener.zsTriggerExit(this, t);
        }
        onTriggerStay(t) {
            null != this.listener && this.listener.zsTriggerStay && this.listener.zsTriggerStay(this, t);
        }
        onDestroy() {
            this.listener = null;
        }
    }
    e.ILaya.regClass(u), e.ClassUtils.regClass("zs.laya.TriggerScript3d", u), e.ClassUtils.regClass("Zhise.TriggerScript3d", u);
    class g extends e.Script3D {
        constructor() {
            super(), this.loadedCb = null, this.sign = null, this.sprite = null, this.sleep = !0;
        }
        static init(t, e, s) {
            var i = t.getComponent(g);
            null == i && (i = t.addComponent(g)), i.sign = e, i.loadedCb = s, i.sleep = !1, 
            i.sprite && zs.laya.ObjectPool.RecoverSprite3d(i.sprite, !0);
        }
        static release(t) {
            var e = t.getComponent(g);
            e && (e.sleep = !0);
        }
        onSpriteReady(t, e) {
            console.log("onSpriteReady:" + t), this.sleep || this.owner.parent && (this.sprite = zs.laya.ObjectPool.GetSprite3d(e, null));
        }
        onLateUpdate() {
            if (this.sign && (zs.laya.Resource.LoadSpriteAsyn(this.sign, e.Handler.create(this, this.onSpriteReady, [ this.sign ])), 
            this.sign = null), this.sprite) {
                this.owner.parent.addChild(this.sprite);
                var t = this.owner;
                this.sprite.transform.position = t.transform.position.clone(), this.sprite.transform.rotationEuler = t.transform.rotationEuler.clone(), 
                this.sprite.transform.localScale = t.transform.localScale.clone(), this.loadedCb && (this.loadedCb.runWith(this.sprite), 
                this.loadedCb = null), this.sprite = null, zs.laya.ObjectPool.RecoverSprite3d(t);
            }
        }
    }
    e.ILaya.regClass(g), e.ClassUtils.regClass("zs.laya.Sprite3dAgent", g), e.ClassUtils.regClass("Zhise.Sprite3dAgent", g);
    class S extends e.Script3D {
        constructor() {
            super(), this.delay = Number.MAX_VALUE;
        }
        static delayRecover(t, e) {
            var s = t.getComponent(S);
            null == s && (s = t.addComponent(S)), s.delay = e;
        }
        cleanNode() {
            o.RecoverSprite3d(this.owner);
        }
        onUpdate() {
            this.delay < 0 || (this.delay -= e.timer.delta, this.delay <= 0 && (this.delay = Number.MAX_VALUE, 
            zs.laya.ObjectPool.RecoverSprite3d(this.owner)));
        }
        onDisable() {
            this.delay = Number.MAX_VALUE;
        }
        onDestroy() {
            this.delay = null;
        }
    }
    e.ILaya.regClass(S), e.ClassUtils.regClass("zs.laya.Sprite3dRecover", S), e.ClassUtils.regClass("Zhise.Sprite3dRecover", S);
    class _ extends e.AnimatorStateScript {
        constructor() {
            super(), this.stateName = "", this.animator = null, this.listener = null, this.onEnter = null, 
            this.onExit = null;
        }
        static setListener(t, e, s, i, r) {
            var a = t.getControllerLayer(0).getAnimatorState(e);
            if (null != a) {
                var n = a.getScript(_);
                null == n && (n = a.addScript(_)), n.stateName = e, n.animator = t, n.listener = s, 
                n.onEnter = i, n.onExit = r;
            }
        }
        static init(t, e, s) {
            var i = t.getControllerLayer(0).getAnimatorState(e);
            if (null != i) {
                var r = i.getScript(_);
                null == r && (r = i.addScript(_)), r.stateName = e, r.animator = t, r.listener = s, 
                r.onEnter = null, r.onExit = null;
            }
        }
        static remove(t, e) {
            var s = t.getControllerLayer(0).getAnimatorState(e);
            if (null != s) {
                var i = s.getScript(_);
                null != i && (i.stateName = null, i.animator = null, i.listener = null, i.onEnter = null, 
                i.onExit = null);
            }
        }
        onStateEnter() {
            this.listener && this.onEnter && this.onEnter.call(this.listener, this.stateName, this.animator), 
            this.listener && this.listener.zsAnimStateEnter && this.listener.zsAnimStateEnter(this.stateName, this.animator);
        }
        onStateExit() {
            this.listener && this.onExit && this.onExit.call(this.listener, this.stateName, this.animator), 
            this.listener && this.listener.zsAnimStateExit && this.listener.zsAnimStateExit(this.stateName, this.animator);
        }
    }
    e.ILaya.regClass(_), e.ClassUtils.regClass("zs.laya.AnimStateListener", _), e.ClassUtils.regClass("Zhise.AnimStateListener", _), 
    t.DataCache = r, t.XHRUtils = i, t.MiscUtils = s, t.Resource = a, t.DeviceService = n, 
    t.SoundService = l, t.ObjectPool = o, t.EffectScript3d = d, t.EffectFactory = c, 
    t.TriggerScript3d = u, t.Sprite3dAgent = g, t.Sprite3dRecover = S, t.AnimStateListener = _;
}(window.zs.laya, Laya);