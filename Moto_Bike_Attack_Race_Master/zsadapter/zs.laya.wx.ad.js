var conf = window.zs.wx, sdk = function() {
    var n = {}, t = conf.adApiUrl, e = function(n, t) {
        return n << t | n >>> 32 - t;
    }, o = function(n, t) {
        var e, o, i, a, r;
        return i = 2147483648 & n, a = 2147483648 & t, r = (1073741823 & n) + (1073741823 & t), 
        (e = 1073741824 & n) & (o = 1073741824 & t) ? 2147483648 ^ r ^ i ^ a : e | o ? 1073741824 & r ? 3221225472 ^ r ^ i ^ a : 1073741824 ^ r ^ i ^ a : r ^ i ^ a;
    }, i = function(n, t, i, a, r, s, u) {
        return n = o(n, o(o(function(n, t, e) {
            return n & t | ~n & e;
        }(t, i, a), r), u)), o(e(n, s), t);
    }, a = function(n, t, i, a, r, s, u) {
        return n = o(n, o(o(function(n, t, e) {
            return n & e | t & ~e;
        }(t, i, a), r), u)), o(e(n, s), t);
    }, r = function(n, t, i, a, r, s, u) {
        return n = o(n, o(o(function(n, t, e) {
            return n ^ t ^ e;
        }(t, i, a), r), u)), o(e(n, s), t);
    }, s = function(n, t, i, a, r, s, u) {
        return n = o(n, o(o(function(n, t, e) {
            return t ^ (n | ~e);
        }(t, i, a), r), u)), o(e(n, s), t);
    }, u = function(n) {
        var t, e = "", o = "";
        for (t = 0; t <= 3; t++) e += (o = "0" + (n >>> 8 * t & 255).toString(16)).substr(o.length - 2, 2);
        return e;
    }, c = function(n) {
        var t, e, c, l, p, d, f, g, h, m = Array();
        for (m = function(n) {
            for (var t, e = n.length, o = e + 8, i = 16 * ((o - o % 64) / 64 + 1), a = Array(i - 1), r = 0, s = 0; s < e; ) r = s % 4 * 8, 
            a[t = (s - s % 4) / 4] = a[t] | n.charCodeAt(s) << r, s++;
            return r = s % 4 * 8, a[t = (s - s % 4) / 4] = a[t] | 128 << r, a[i - 2] = e << 3, 
            a[i - 1] = e >>> 29, a;
        }(n = function(n) {
            n = n.replace(/\x0d\x0a/g, "\n");
            for (var t = "", e = 0; e < n.length; e++) {
                var o = n.charCodeAt(e);
                o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), 
                t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), 
                t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128));
            }
            return t;
        }(n)), d = 1732584193, f = 4023233417, g = 2562383102, h = 271733878, t = 0; t < m.length; t += 16) e = d, 
        c = f, l = g, p = h, d = i(d, f, g, h, m[t + 0], 7, 3614090360), h = i(h, d, f, g, m[t + 1], 12, 3905402710), 
        g = i(g, h, d, f, m[t + 2], 17, 606105819), f = i(f, g, h, d, m[t + 3], 22, 3250441966), 
        d = i(d, f, g, h, m[t + 4], 7, 4118548399), h = i(h, d, f, g, m[t + 5], 12, 1200080426), 
        g = i(g, h, d, f, m[t + 6], 17, 2821735955), f = i(f, g, h, d, m[t + 7], 22, 4249261313), 
        d = i(d, f, g, h, m[t + 8], 7, 1770035416), h = i(h, d, f, g, m[t + 9], 12, 2336552879), 
        g = i(g, h, d, f, m[t + 10], 17, 4294925233), f = i(f, g, h, d, m[t + 11], 22, 2304563134), 
        d = i(d, f, g, h, m[t + 12], 7, 1804603682), h = i(h, d, f, g, m[t + 13], 12, 4254626195), 
        g = i(g, h, d, f, m[t + 14], 17, 2792965006), f = i(f, g, h, d, m[t + 15], 22, 1236535329), 
        d = a(d, f, g, h, m[t + 1], 5, 4129170786), h = a(h, d, f, g, m[t + 6], 9, 3225465664), 
        g = a(g, h, d, f, m[t + 11], 14, 643717713), f = a(f, g, h, d, m[t + 0], 20, 3921069994), 
        d = a(d, f, g, h, m[t + 5], 5, 3593408605), h = a(h, d, f, g, m[t + 10], 9, 38016083), 
        g = a(g, h, d, f, m[t + 15], 14, 3634488961), f = a(f, g, h, d, m[t + 4], 20, 3889429448), 
        d = a(d, f, g, h, m[t + 9], 5, 568446438), h = a(h, d, f, g, m[t + 14], 9, 3275163606), 
        g = a(g, h, d, f, m[t + 3], 14, 4107603335), f = a(f, g, h, d, m[t + 8], 20, 1163531501), 
        d = a(d, f, g, h, m[t + 13], 5, 2850285829), h = a(h, d, f, g, m[t + 2], 9, 4243563512), 
        g = a(g, h, d, f, m[t + 7], 14, 1735328473), f = a(f, g, h, d, m[t + 12], 20, 2368359562), 
        d = r(d, f, g, h, m[t + 5], 4, 4294588738), h = r(h, d, f, g, m[t + 8], 11, 2272392833), 
        g = r(g, h, d, f, m[t + 11], 16, 1839030562), f = r(f, g, h, d, m[t + 14], 23, 4259657740), 
        d = r(d, f, g, h, m[t + 1], 4, 2763975236), h = r(h, d, f, g, m[t + 4], 11, 1272893353), 
        g = r(g, h, d, f, m[t + 7], 16, 4139469664), f = r(f, g, h, d, m[t + 10], 23, 3200236656), 
        d = r(d, f, g, h, m[t + 13], 4, 681279174), h = r(h, d, f, g, m[t + 0], 11, 3936430074), 
        g = r(g, h, d, f, m[t + 3], 16, 3572445317), f = r(f, g, h, d, m[t + 6], 23, 76029189), 
        d = r(d, f, g, h, m[t + 9], 4, 3654602809), h = r(h, d, f, g, m[t + 12], 11, 3873151461), 
        g = r(g, h, d, f, m[t + 15], 16, 530742520), f = r(f, g, h, d, m[t + 2], 23, 3299628645), 
        d = s(d, f, g, h, m[t + 0], 6, 4096336452), h = s(h, d, f, g, m[t + 7], 10, 1126891415), 
        g = s(g, h, d, f, m[t + 14], 15, 2878612391), f = s(f, g, h, d, m[t + 5], 21, 4237533241), 
        d = s(d, f, g, h, m[t + 12], 6, 1700485571), h = s(h, d, f, g, m[t + 3], 10, 2399980690), 
        g = s(g, h, d, f, m[t + 10], 15, 4293915773), f = s(f, g, h, d, m[t + 1], 21, 2240044497), 
        d = s(d, f, g, h, m[t + 8], 6, 1873313359), h = s(h, d, f, g, m[t + 15], 10, 4264355552), 
        g = s(g, h, d, f, m[t + 6], 15, 2734768916), f = s(f, g, h, d, m[t + 13], 21, 1309151649), 
        d = s(d, f, g, h, m[t + 4], 6, 4149444226), h = s(h, d, f, g, m[t + 11], 10, 3174756917), 
        g = s(g, h, d, f, m[t + 2], 15, 718787259), f = s(f, g, h, d, m[t + 9], 21, 3951481745), 
        d = o(d, e), f = o(f, c), g = o(g, l), h = o(h, p);
        return (u(d) + u(f) + u(g) + u(h)).toLowerCase();
    }, l = function(n, t) {
        t = t || !0;
        for (var e = Object.keys(n).sort(), o = "", i = 0; i < e.length; i++) o += e[i] + ":" + n[e[i]];
        t && (o += conf.secret);
        var a = c(o);
        return a = a.toLowerCase();
    }, p = function(n) {
        var t = m("zsAd");
        switch (n) {
          case "1":
            return t.more;

          case "2":
            return t.promotion;

          case "3":
            return t.indexFloat;

          case "7":
            return t.indexLeft;

          case "8":
            return t.gameFloat;

          case "9":
            return t.endPage;

          case "11":
            return t.indexLeftFloat;

          case "12":
            return t.backAd;

          case "13":
            return t.iosLinkAd;
        }
        return null;
    }, d = function(n, t) {
        var e = p(n);
        if (null == e) return console.error("custom link is null"), null;
        for (var o = 0; o < e.length; o++) if (e[o].appid == t) return e[o];
    }, f = function(n, t, e, o, i, a) {
    }, g = function(t, e) {
        n.zsStorage = n.zsStorage || {}, n.zsStorage[t] = e;
    }, h = function(t) {
        return n.zsStorage = n.zsStorage || {}, n.zsStorage[t];
    }, m = function(n, t) {
        if (t) {
            var e = h(n + "_time");
            return null == e || Date.now() - Number(e) < t ? h(n) : null;
        }
        return h(n);
    }, C = function(n, t) {
        g(n, t), g(n + "_time", Date.now());
    }, I = function(n) {
        return "function" == typeof n;
    }, _ = function(t, e, o) {
    };
    n.userId = null, n.platformId = null, n.srcAppId = "", n.launchScene = "", n.adJumpNum = null, 
    n.adJumpAppId = null, n.isEnableExportAdLinkId = "0", 
    n.init = function(t, e) {
    }, n.sendVideoLog = function() {
    }, n.cfgCbList = [], n.inCfgRequest = !1, n.loadConfig = function(e, o) {
        var i = t, a = Math.round(new Date().getTime() / 1e3).toString(), r = {
            appid: conf.appId,
            timestamp: a
        }, s = l(r), u = Object.assign({}, r, {
            sign: s
        }), c = m("zsCfg", 6e4);
        c ? I(e) && e(c) : this.inCfgRequest ? this.cfgCbList.push({
            success: e,
            fail: o
        }) : (this.inCfgRequest = !0, this.cfgCbList.push({
            success: e,
            fail: o
        }), f(i, u, "POST", function(t) {
            var e = t.data;
            C("zsCfg", e), n.adJumpNum = e.zs_ad_jump_num, n.adJumpAppId = e.zs_jump_appid, 
            n.isEnableExportAdLinkId = e.zs_export_ad_switch;
            for (var o = 0; o < n.cfgCbList.length; o++) I(n.cfgCbList[o].success) && n.cfgCbList[o].success(e);
            n.cfgCbList = [], n.inCfgRequest = !1;
        }, function(t) {
            for (var e = 0; e < n.cfgCbList.length; e++) I(n.cfgCbList[e].fail) && n.cfgCbList[e].fail(t);
            n.cfgCbList = [], n.inCfgRequest = !1;
        }, function(t) {
            n.cfgCbList = [], n.inCfgRequest = !1, console.log("post loadConfig complete");
        }));
    }, n.adCbList = [], n.inAdRequest = !1, 
    n.loadAd = function(t) {
    }, n.navigate2Mini = function(n, t, e, o, i, a) {
        var r = n;
        if (null != this.adJumpNum && "3" == r.app_type) try {
            var s = h(r.appid);
            if (s = null != s ? Number(s) : 0, console.log(r.appid + ":" + s + "," + this.adJumpNum), 
            Number(s) + 1 >= this.adJumpNum) {
                if (1 == this.platformId) {
                    var u = m("zsAd");
                    if (u.iosLinkAd.length > 0) {
                        var c = u.iosLinkAd[Math.floor(u.iosLinkAd.length * Math.random())];
                        console.log("jump:" + JSON.stringify(c)), r = d(r.position_type, c.appid);
                    } else this.adJumpAppId ? (console.log("jump:" + this.adJumpAppId), r = d(r.position_type, this.adJumpAppId)) : console.log("jump self");
                } else console.log("jump link in Android"), r = function(n) {
                    var t = p(n);
                    if (null == t) return console.error("box is null"), null;
                    for (var e = 0; e < t.length; e++) if ("4" == t[e].app_type) return t[e];
                    return console.error("box is null"), null;
                }(r.position_type);
                null == r && (r = n);
            }
        } catch (n) {
            console.error(n);
        }
        if ("undefined" == typeof wx) return I(o) && o(), void (I(i) && i());
        r.extraData = r.extraData || {}, wx.navigateToMiniProgram({
            appId: r.appid,
            path: r.link_path,
            extraData: r.extraData,
            success: function(n) {
                _(r, t, a), I(e) && e();
            },
            fail: function(n) {
                I(o) && o();
            },
            complete: function(n) {
                I(i) && i();
            }
        });
    }, n.getShareCard = function(n, t) {
    }, n.collectShareCardClick = function(n, t, e, o) {
    };
    var v = [ 1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126 ];
    n.launchInfo = null, n.isExportValid = function() {
        return !(this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0) && (null == this.launchInfo || null == this.launchInfo.query || this.launchInfo.query.customLink != this.isEnableExportAdLinkId);
    }, n.isFromLink = function() {
        return this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
        !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
    };
    return "undefined" == typeof wx || (n.launchInfo = wx.getLaunchOptionsSync(), console.log("scene:" + n.launchInfo.scene), 
    n.isFromLink() && console.log("open by link")), n;
}(), theEnv = "undefined" != typeof window ? window : global;

theEnv.zs = theEnv.zs || {}, theEnv.zs.sdk = sdk;