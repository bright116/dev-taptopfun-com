var conf = window.zs.wx, reportSdk = function () {
    var n = {}, e = conf.adApiUrl, t = function (n, e) {
        return n << e | n >>> 32 - e;
    }, o = function (n, e) {
        var t, o, i, a, r;
        return i = 2147483648 & n, a = 2147483648 & e, r = (1073741823 & n) + (1073741823 & e),
            (t = 1073741824 & n) & (o = 1073741824 & e) ? 2147483648 ^ r ^ i ^ a : t | o ? 1073741824 & r ? 3221225472 ^ r ^ i ^ a : 1073741824 ^ r ^ i ^ a : r ^ i ^ a;
    }, i = function (n, e, i, a, r, s, u) {
        return n = o(n, o(o(function (n, e, t) {
            return n & e | ~n & t;
        }(e, i, a), r), u)), o(t(n, s), e);
    }, a = function (n, e, i, a, r, s, u) {
        return n = o(n, o(o(function (n, e, t) {
            return n & t | e & ~t;
        }(e, i, a), r), u)), o(t(n, s), e);
    }, r = function (n, e, i, a, r, s, u) {
        return n = o(n, o(o(function (n, e, t) {
            return n ^ e ^ t;
        }(e, i, a), r), u)), o(t(n, s), e);
    }, s = function (n, e, i, a, r, s, u) {
        return n = o(n, o(o(function (n, e, t) {
            return e ^ (n | ~t);
        }(e, i, a), r), u)), o(t(n, s), e);
    }, u = function (n) {
        var e, t = "", o = "";
        for (e = 0; e <= 3; e++) t += (o = "0" + (n >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
        return t;
    }, c = function (n) {
        var e, t, c, l, p, d, f, g, h, m = Array();
        for (m = function (n) {
            for (var e, t = n.length, o = t + 8, i = 16 * ((o - o % 64) / 64 + 1), a = Array(i - 1), r = 0, s = 0; s < t;) r = s % 4 * 8,
                a[e = (s - s % 4) / 4] = a[e] | n.charCodeAt(s) << r, s++;
            return r = s % 4 * 8, a[e = (s - s % 4) / 4] = a[e] | 128 << r, a[i - 2] = t << 3,
                a[i - 1] = t >>> 29, a;
        }(n = function (n) {
            n = n.replace(/\x0d\x0a/g, "\n");
            for (var e = "", t = 0; t < n.length; t++) {
                var o = n.charCodeAt(t);
                o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192),
                    e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224),
                        e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128));
            }
            return e;
        }(n)), d = 1732584193, f = 4023233417, g = 2562383102, h = 271733878, e = 0; e < m.length; e += 16) t = d,
            c = f, l = g, p = h, d = i(d, f, g, h, m[e + 0], 7, 3614090360), h = i(h, d, f, g, m[e + 1], 12, 3905402710),
            g = i(g, h, d, f, m[e + 2], 17, 606105819), f = i(f, g, h, d, m[e + 3], 22, 3250441966),
            d = i(d, f, g, h, m[e + 4], 7, 4118548399), h = i(h, d, f, g, m[e + 5], 12, 1200080426),
            g = i(g, h, d, f, m[e + 6], 17, 2821735955), f = i(f, g, h, d, m[e + 7], 22, 4249261313),
            d = i(d, f, g, h, m[e + 8], 7, 1770035416), h = i(h, d, f, g, m[e + 9], 12, 2336552879),
            g = i(g, h, d, f, m[e + 10], 17, 4294925233), f = i(f, g, h, d, m[e + 11], 22, 2304563134),
            d = i(d, f, g, h, m[e + 12], 7, 1804603682), h = i(h, d, f, g, m[e + 13], 12, 4254626195),
            g = i(g, h, d, f, m[e + 14], 17, 2792965006), f = i(f, g, h, d, m[e + 15], 22, 1236535329),
            d = a(d, f, g, h, m[e + 1], 5, 4129170786), h = a(h, d, f, g, m[e + 6], 9, 3225465664),
            g = a(g, h, d, f, m[e + 11], 14, 643717713), f = a(f, g, h, d, m[e + 0], 20, 3921069994),
            d = a(d, f, g, h, m[e + 5], 5, 3593408605), h = a(h, d, f, g, m[e + 10], 9, 38016083),
            g = a(g, h, d, f, m[e + 15], 14, 3634488961), f = a(f, g, h, d, m[e + 4], 20, 3889429448),
            d = a(d, f, g, h, m[e + 9], 5, 568446438), h = a(h, d, f, g, m[e + 14], 9, 3275163606),
            g = a(g, h, d, f, m[e + 3], 14, 4107603335), f = a(f, g, h, d, m[e + 8], 20, 1163531501),
            d = a(d, f, g, h, m[e + 13], 5, 2850285829), h = a(h, d, f, g, m[e + 2], 9, 4243563512),
            g = a(g, h, d, f, m[e + 7], 14, 1735328473), f = a(f, g, h, d, m[e + 12], 20, 2368359562),
            d = r(d, f, g, h, m[e + 5], 4, 4294588738), h = r(h, d, f, g, m[e + 8], 11, 2272392833),
            g = r(g, h, d, f, m[e + 11], 16, 1839030562), f = r(f, g, h, d, m[e + 14], 23, 4259657740),
            d = r(d, f, g, h, m[e + 1], 4, 2763975236), h = r(h, d, f, g, m[e + 4], 11, 1272893353),
            g = r(g, h, d, f, m[e + 7], 16, 4139469664), f = r(f, g, h, d, m[e + 10], 23, 3200236656),
            d = r(d, f, g, h, m[e + 13], 4, 681279174), h = r(h, d, f, g, m[e + 0], 11, 3936430074),
            g = r(g, h, d, f, m[e + 3], 16, 3572445317), f = r(f, g, h, d, m[e + 6], 23, 76029189),
            d = r(d, f, g, h, m[e + 9], 4, 3654602809), h = r(h, d, f, g, m[e + 12], 11, 3873151461),
            g = r(g, h, d, f, m[e + 15], 16, 530742520), f = r(f, g, h, d, m[e + 2], 23, 3299628645),
            d = s(d, f, g, h, m[e + 0], 6, 4096336452), h = s(h, d, f, g, m[e + 7], 10, 1126891415),
            g = s(g, h, d, f, m[e + 14], 15, 2878612391), f = s(f, g, h, d, m[e + 5], 21, 4237533241),
            d = s(d, f, g, h, m[e + 12], 6, 1700485571), h = s(h, d, f, g, m[e + 3], 10, 2399980690),
            g = s(g, h, d, f, m[e + 10], 15, 4293915773), f = s(f, g, h, d, m[e + 1], 21, 2240044497),
            d = s(d, f, g, h, m[e + 8], 6, 1873313359), h = s(h, d, f, g, m[e + 15], 10, 4264355552),
            g = s(g, h, d, f, m[e + 6], 15, 2734768916), f = s(f, g, h, d, m[e + 13], 21, 1309151649),
            d = s(d, f, g, h, m[e + 4], 6, 4149444226), h = s(h, d, f, g, m[e + 11], 10, 3174756917),
            g = s(g, h, d, f, m[e + 2], 15, 718787259), f = s(f, g, h, d, m[e + 9], 21, 3951481745),
            d = o(d, t), f = o(f, c), g = o(g, l), h = o(h, p);
        return (u(d) + u(f) + u(g) + u(h)).toLowerCase();
    }, l = function (n, e) {
        e = e || !0;
        for (var t = Object.keys(n).sort(), o = "", i = 0; i < t.length; i++) o += t[i] + ":" + n[t[i]];
        e && (o += conf.secret);
        var a = c(o);
        return a = a.toLowerCase();
    }, p = function (n, e, t, o, i, a) {

    }, d = function (e, t) {
        n.zsStorage = n.zsStorage || {}, n.zsStorage[e] = t;
    }, f = function (e) {
        return n.zsStorage = n.zsStorage || {}, n.zsStorage[e];
    }, g = function (n, e) {
        if (e) {
            var t = f(n + "_time");
            return null == t || Date.now() - Number(t) < e ? f(n) : null;
        }
        return f(n);
    }, h = function (n, e) {
        if (e) {
            var t = f(n + "_time");
            return null == t || new Date(t).toDateString() !== new Date().toDateString() ? f(n) : null;
        }
        return f(n);
    }, m = function (n, e) {
        d(n, e), d(n + "_time", Date.now());
    }, I = function (n) {
        return "function" == typeof n;
    }, C = function (e, t, o) {
        if ("3" == e.app_type) {
            var i = f(e.appid);
            d(e.appid, null == i ? 1 : Number(i) + 1);
        }
        var a, r, s, u, c, g;
        "undefined" != typeof wx && (a = e.app_id, r = t, s = Math.round(new Date().getTime() / 1e3).toString(),
            u = {
                user_id: r,
                from_id: conf.appId,
                to_id: a,
                timestamp: s,
                scene: n.launchInfo && n.launchInfo.scene ? n.launchInfo.scene : 0,
                zhise: n.launchInfo && n.launchInfo.query && n.launchInfo.query.zhise ? n.launchInfo.query.zhise : ""
            }, c = l(u), g = Object.assign({}, u, {
                sign: c
            }), n.statisticsGDT(3));
    };
    n.userId = null, n.platformId = null, n.srcAppId = "", n.launchScene = "", n.adJumpNum = null,
        n.adJumpAppId = null, n.isEnableExportAdLinkId = "0", n.init = function (e, t) {
            if (console.log("zsAdSdk.init"), this.userId = e, this.platformId = t, "undefined" == typeof wx) this.launchScene = 1038,
                this.srcAppId = ""; else {
                var o = wx.getLaunchOptionsSync();
                this.launchScene = o.scene ? o.scene : "", this.srcAppId = o.referrerInfo && o.referrerInfo.appId ? o.referrerInfo.appId : "";
            }
            n.statisticsGDT(1);
        }, n.sendVideoLog = function () {

        }, n.cfgCbList = [], n.inCfgRequest = !1, n.loadConfig = function (t, o) {
            var i = e, a = Math.round(new Date().getTime() / 1e3).toString(), r = 0;
            if ("undefined" != typeof wx) {
                var s = wx.getLaunchOptionsSync();
                r = s && s.scene || 0;
            }
            var u = {
                appid: conf.appId,
                timestamp: a,
                scene: r
            }, c = l(u), d = Object.assign({}, u, {
                sign: c
            }), f = g("zsCfg", 6e4);
            f ? I(t) && t(f) : this.inCfgRequest ? this.cfgCbList.push({
                success: t,
                fail: o
            }) : (this.inCfgRequest = !0, this.cfgCbList.push({
                success: t,
                fail: o
            }), p(i, d, "POST", function (e) {
                var t = e.data;
                m("zsCfg", t), console.log("ljc", "zsCfg", t), n.adJumpNum = t.zs_ad_jump_num, n.adJumpAppId = t.zs_jump_appid,
                    n.isEnableExportAdLinkId = t.zs_export_ad_switch;
                for (var o = 0; o < n.cfgCbList.length; o++) I(n.cfgCbList[o].success) && n.cfgCbList[o].success(t);
                n.cfgCbList = [], n.inCfgRequest = !1;
            }, function (e) {
                for (var t = 0; t < n.cfgCbList.length; t++) I(n.cfgCbList[t].fail) && n.cfgCbList[t].fail(e);
                n.cfgCbList = [], n.inCfgRequest = !1;
            }, function (e) {
                n.cfgCbList = [], n.inCfgRequest = !1, console.log("post loadConfig complete");
            }));
        }, n.adCbList = [], n.inAdRequest = !1, n.loadAd = function (e) {
            var t = g("zsAd", 6e4);
            if (t) e(t); else if (this.inAdRequest) this.adCbList.push(e); else {
                this.inAdRequest = !0, this.adCbList.push(e);
                var o = Math.round(new Date().getTime() / 1e3).toString(), i = {
                    appid: conf.appId,
                    timestamp: o
                }, a = l(i), r = Object.assign({}, i, {
                    sign: a
                });

            }
        }, n.navigate2Mini = function (e, t, o, i, a, r) {
            var s = e, u = h("unClickAd") || {}, c = h("unlinkAd") || {};
            if (console.log(JSON.stringify(u)), u[s.appid]) {
                console.log("广告位今日点击过");
                var l = [], p = g("zsAd");
                for (const n in p) if (p.hasOwnProperty(n)) {
                    var d = p[n];
                    for (let n = 0; n < d.length; n++) {
                        const e = d[n];
                        l.push(e);
                    }
                }
                var f = l.filter(n => !c[n.appid]), v = Math.floor(Math.random() * f.length);
                s = f[v], console.log("新的导出", s);
            } else u[s.appid] = !0, m("unClickAd", u);
            return s ? (c[s.appid] = !0, m("unlinkAd", c), console.log(JSON.stringify(c)), "undefined" == typeof wx ? (I(i) && i(),
                void (I(a) && a())) : (s.extraData = s.extraData || {}, void wx.navigateToMiniProgram({
                    appId: s.appid,
                    path: s.link_path,
                    extraData: s.extraData,
                    success: function (n) {
                        C(s, t), I(o) && o();
                    },
                    fail: function (n) {
                        I(i) && i();
                    },
                    complete: function (n) {
                        I(a) && a();
                    }
                }))) : (m("unlinkAd", {}), void n.navigate2Mini(e, t, o, i, a));
        }, n.getShareCard = function (n, e) {
            var t = Math.round(new Date().getTime() / 1e3).toString(), o = {
                appid: conf.appId,
                timestamp: t
            }, i = l(o), a = Object.assign({}, o, {
                sign: i
            });
        }, n.collectShareCardClick = function (n, e, t, o) {
            var i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                appid: conf.appId,
                card_id: n,
                user_id: e,
                timestamp: i
            }, r = l(a), s = Object.assign({}, a, {
                sign: r
            });
        };
    var v = [1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126];
    n.launchInfo = null, n.isExportValid = function () {
        return !(this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0) && (null == this.launchInfo || null == this.launchInfo.query || this.launchInfo.query.customLink != this.isEnableExportAdLinkId);
    }, n.isFromLink = function () {
        return this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"),
            !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
    }, n.statisticsGDT = function (e) {

    };
    return "undefined" == typeof wx || (n.launchInfo = wx.getLaunchOptionsSync(), console.log("scene:" + n.launchInfo.scene),
        n.isFromLink() && console.log("open by link")), n;
}(), theEnv = "undefined" != typeof window ? window : global;

theEnv.zs = theEnv.zs || {}, theEnv.zs.reportSdk = reportSdk;