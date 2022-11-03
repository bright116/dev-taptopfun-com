var n, e, t;

n = window.zs.wx, e = function() {
    var e = {}, t = n.adApiUrl, o = function(n, e) {
        return n << e | n >>> 32 - e;
    }, i = function(n, e) {
        var t, o, i, a, r;
        return i = 2147483648 & n, a = 2147483648 & e, r = (1073741823 & n) + (1073741823 & e), 
        (t = 1073741824 & n) & (o = 1073741824 & e) ? 2147483648 ^ r ^ i ^ a : t | o ? 1073741824 & r ? 3221225472 ^ r ^ i ^ a : 1073741824 ^ r ^ i ^ a : r ^ i ^ a;
    }, a = function(n, e, t, a, r, s, u) {
        return n = i(n, i(i(function(n, e, t) {
            return n & e | ~n & t;
        }(e, t, a), r), u)), i(o(n, s), e);
    }, r = function(n, e, t, a, r, s, u) {
        return n = i(n, i(i(function(n, e, t) {
            return n & t | e & ~t;
        }(e, t, a), r), u)), i(o(n, s), e);
    }, s = function(n, e, t, a, r, s, u) {
        return n = i(n, i(i(function(n, e, t) {
            return n ^ e ^ t;
        }(e, t, a), r), u)), i(o(n, s), e);
    }, u = function(n, e, t, a, r, s, u) {
        return n = i(n, i(i(function(n, e, t) {
            return e ^ (n | ~t);
        }(e, t, a), r), u)), i(o(n, s), e);
    }, c = function(n) {
        var e, t = "", o = "";
        for (e = 0; e <= 3; e++) t += (o = "0" + (n >>> 8 * e & 255).toString(16)).substr(o.length - 2, 2);
        return t;
    }, l = function(n) {
        var e, t, o, l, p, d, f, g, h, m = Array();
        for (m = function(n) {
            for (var e, t = n.length, o = t + 8, i = 16 * ((o - o % 64) / 64 + 1), a = Array(i - 1), r = 0, s = 0; s < t; ) r = s % 4 * 8, 
            a[e = (s - s % 4) / 4] = a[e] | n.charCodeAt(s) << r, s++;
            return r = s % 4 * 8, a[e = (s - s % 4) / 4] = a[e] | 128 << r, a[i - 2] = t << 3, 
            a[i - 1] = t >>> 29, a;
        }(n = function(n) {
            n = n.replace(/\x0d\x0a/g, "\n");
            for (var e = "", t = 0; t < n.length; t++) {
                var o = n.charCodeAt(t);
                o < 128 ? e += String.fromCharCode(o) : o > 127 && o < 2048 ? (e += String.fromCharCode(o >> 6 | 192), 
                e += String.fromCharCode(63 & o | 128)) : (e += String.fromCharCode(o >> 12 | 224), 
                e += String.fromCharCode(o >> 6 & 63 | 128), e += String.fromCharCode(63 & o | 128));
            }
            return e;
        }(n)), d = 1732584193, f = 4023233417, g = 2562383102, h = 271733878, e = 0; e < m.length; e += 16) t = d, 
        o = f, l = g, p = h, d = a(d, f, g, h, m[e + 0], 7, 3614090360), h = a(h, d, f, g, m[e + 1], 12, 3905402710), 
        g = a(g, h, d, f, m[e + 2], 17, 606105819), f = a(f, g, h, d, m[e + 3], 22, 3250441966), 
        d = a(d, f, g, h, m[e + 4], 7, 4118548399), h = a(h, d, f, g, m[e + 5], 12, 1200080426), 
        g = a(g, h, d, f, m[e + 6], 17, 2821735955), f = a(f, g, h, d, m[e + 7], 22, 4249261313), 
        d = a(d, f, g, h, m[e + 8], 7, 1770035416), h = a(h, d, f, g, m[e + 9], 12, 2336552879), 
        g = a(g, h, d, f, m[e + 10], 17, 4294925233), f = a(f, g, h, d, m[e + 11], 22, 2304563134), 
        d = a(d, f, g, h, m[e + 12], 7, 1804603682), h = a(h, d, f, g, m[e + 13], 12, 4254626195), 
        g = a(g, h, d, f, m[e + 14], 17, 2792965006), f = a(f, g, h, d, m[e + 15], 22, 1236535329), 
        d = r(d, f, g, h, m[e + 1], 5, 4129170786), h = r(h, d, f, g, m[e + 6], 9, 3225465664), 
        g = r(g, h, d, f, m[e + 11], 14, 643717713), f = r(f, g, h, d, m[e + 0], 20, 3921069994), 
        d = r(d, f, g, h, m[e + 5], 5, 3593408605), h = r(h, d, f, g, m[e + 10], 9, 38016083), 
        g = r(g, h, d, f, m[e + 15], 14, 3634488961), f = r(f, g, h, d, m[e + 4], 20, 3889429448), 
        d = r(d, f, g, h, m[e + 9], 5, 568446438), h = r(h, d, f, g, m[e + 14], 9, 3275163606), 
        g = r(g, h, d, f, m[e + 3], 14, 4107603335), f = r(f, g, h, d, m[e + 8], 20, 1163531501), 
        d = r(d, f, g, h, m[e + 13], 5, 2850285829), h = r(h, d, f, g, m[e + 2], 9, 4243563512), 
        g = r(g, h, d, f, m[e + 7], 14, 1735328473), f = r(f, g, h, d, m[e + 12], 20, 2368359562), 
        d = s(d, f, g, h, m[e + 5], 4, 4294588738), h = s(h, d, f, g, m[e + 8], 11, 2272392833), 
        g = s(g, h, d, f, m[e + 11], 16, 1839030562), f = s(f, g, h, d, m[e + 14], 23, 4259657740), 
        d = s(d, f, g, h, m[e + 1], 4, 2763975236), h = s(h, d, f, g, m[e + 4], 11, 1272893353), 
        g = s(g, h, d, f, m[e + 7], 16, 4139469664), f = s(f, g, h, d, m[e + 10], 23, 3200236656), 
        d = s(d, f, g, h, m[e + 13], 4, 681279174), h = s(h, d, f, g, m[e + 0], 11, 3936430074), 
        g = s(g, h, d, f, m[e + 3], 16, 3572445317), f = s(f, g, h, d, m[e + 6], 23, 76029189), 
        d = s(d, f, g, h, m[e + 9], 4, 3654602809), h = s(h, d, f, g, m[e + 12], 11, 3873151461), 
        g = s(g, h, d, f, m[e + 15], 16, 530742520), f = s(f, g, h, d, m[e + 2], 23, 3299628645), 
        d = u(d, f, g, h, m[e + 0], 6, 4096336452), h = u(h, d, f, g, m[e + 7], 10, 1126891415), 
        g = u(g, h, d, f, m[e + 14], 15, 2878612391), f = u(f, g, h, d, m[e + 5], 21, 4237533241), 
        d = u(d, f, g, h, m[e + 12], 6, 1700485571), h = u(h, d, f, g, m[e + 3], 10, 2399980690), 
        g = u(g, h, d, f, m[e + 10], 15, 4293915773), f = u(f, g, h, d, m[e + 1], 21, 2240044497), 
        d = u(d, f, g, h, m[e + 8], 6, 1873313359), h = u(h, d, f, g, m[e + 15], 10, 4264355552), 
        g = u(g, h, d, f, m[e + 6], 15, 2734768916), f = u(f, g, h, d, m[e + 13], 21, 1309151649), 
        d = u(d, f, g, h, m[e + 4], 6, 4149444226), h = u(h, d, f, g, m[e + 11], 10, 3174756917), 
        g = u(g, h, d, f, m[e + 2], 15, 718787259), f = u(f, g, h, d, m[e + 9], 21, 3951481745), 
        d = i(d, t), f = i(f, o), g = i(g, l), h = i(h, p);
        return (c(d) + c(f) + c(g) + c(h)).toLowerCase();
    }, p = function(e, t) {
        t = t || !0;
        for (var o = Object.keys(e).sort(), i = "", a = 0; a < o.length; a++) i += o[a] + ":" + e[o[a]];
        t && (i += n.secret);
        var r = l(i);
        return r.toLowerCase();
    }, d = function(n, e, t, o, i, a) {
        if ("undefined" == typeof wx) {
            var r = new XMLHttpRequest();
            r.onreadystatechange = function() {
                if (4 == r.readyState) {
                    var n = r.responseText;
                    if (r.status >= 200 && r.status < 400) {
                        var e = {};
                        try {
                            e = JSON.parse(n);
                        } catch (e) {
                            console.error("json parse error ", n), i && i(e);
                        }
                        o && o(e);
                    } else console.error("error ", n), i && i(n);
                }
            }, r.timeout = 3e3, r.ontimeout = function(n) {
                console.error("error ", n), i && i(n);
            }, r.open(t, n, !0), "POST" == t ? (r.open("POST", n), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
            r.send(function(n) {
                var e = [];
                for (var t in n) e.push(t + "=" + n[t]);
                return e.join("&");
            }(e))) : r.send();
        } else wx.request({
            url: n,
            data: e,
            header: {
                "content-type": "application/json"
            },
            method: t,
            success: function(n) {
                o && o(n.data);
            },
            fail: function(n) {
                i && i(n);
            },
            complete: function(n) {
                a && a(n);
            }
        });
    }, f = function(n, t) {
        e.zsStorage = e.zsStorage || {}, e.zsStorage[n] = t;
    }, g = function(n) {
        return e.zsStorage = e.zsStorage || {}, e.zsStorage[n];
    }, h = function(n, e) {
        if (e) {
            var t = g(n + "_time");
            return null == t || Date.now() - Number(t) < e ? g(n) : null;
        }
        return g(n);
    }, m = function(n, e) {
        if (e) {
            var t = g(n + "_time");
            return null == t || new Date(t).toDateString() !== new Date().toDateString() ? g(n) : null;
        }
        return g(n);
    }, I = function(n, e) {
        f(n, e), f(n + "_time", Date.now());
    }, C = function(n) {
        return "function" == typeof n;
    }, _ = function(t, o, i) {
        if ("3" == t.app_type) {
            var a = g(t.appid);
            f(t.appid, null == a ? 1 : Number(a) + 1);
        }
        var r, s, u, c, l, h;
        "undefined" != typeof wx && (r = t.app_id, s = o, u = Math.round(new Date().getTime() / 1e3).toString(), 
        c = {
            user_id: s,
            from_id: n.appId,
            to_id: r,
            timestamp: u,
            scene: e.launchInfo && e.launchInfo.scene ? e.launchInfo.scene : 0,
            zhise: e.launchInfo && e.launchInfo.query && e.launchInfo.query.zhise ? e.launchInfo.query.zhise : ""
        }, l = p(c), h = Object.assign({}, c, {
            sign: l
        }), d("https://zsad.zxmn2018.com/api/appad_new/collect", h, "POST", function() {}, function() {
            console.log("appad_new/collect fail");
        }, function() {
            console.log("appad_new/collect complete");
        }), function(t) {
            if (n.uploadLog) if (null != e.userId) {
                var o = {
                    appid: n.appId,
                    from_appid: e.srcAppId,
                    to_appid: t,
                    user_id: e.userId
                };
                d("https://zsad.zxmn2018.com/api/jump_log/app_to", o, "POST", function() {}, function() {
                    console.log('jump_log/app_to" fail');
                }, function() {
                    console.log('jump_log/app_to" complete');
                });
            } else console.error("userId is null");
        }(t.appid), e.statisticsGDT(3));
    };
    e.userId = null, e.platformId = null, e.srcAppId = "", e.launchScene = "", e.adJumpNum = null, 
    e.adJumpAppId = null, e.isEnableExportAdLinkId = "0", e.init = function(t, o) {
        if (console.log("zsAdSdk.init"), this.userId = t, this.platformId = o, "undefined" == typeof wx) this.launchScene = 1038, 
        this.srcAppId = ""; else {
            var i = wx.getLaunchOptionsSync();
            this.launchScene = i.scene ? i.scene : "", this.srcAppId = i.referrerInfo && i.referrerInfo.appId ? i.referrerInfo.appId : "";
        }
        !function() {
            if (n.uploadLog) if (null != e.userId) {
                var t = {
                    appid: n.appId,
                    from_appid: e.srcAppId,
                    user_id: e.userId,
                    scene: e.launchScene
                };
                d("https://zsad.zxmn2018.com/api/jump_log/app_from", t, "POST", function() {}, function() {
                    console.log('jump_log/app_from" fail');
                }, function() {
                    console.log('jump_log/app_from" complete');
                });
            } else console.error("userId is null");
        }(), e.statisticsGDT(1);
    }, e.sendVideoLog = function() {
        if (n.uploadLog) if (null != this.userId) {
            var e = {
                appid: n.appId,
                from_appid: this.srcAppId,
                user_id: this.userId
            };
            d("https://zsad.zxmn2018.com/api/jump_log/app_video", e, "POST", function() {}, function() {
                console.log('jump_log/app_video" fail');
            }, function() {
                console.log('jump_log/app_video" complete');
            });
        } else console.error("userId is null");
    }, e.cfgCbList = [], e.inCfgRequest = !1, e.loadConfig = function(o, i) {
        var a = t, r = Math.round(new Date().getTime() / 1e3).toString(), s = 0;
        if ("undefined" != typeof wx) {
            var u = wx.getLaunchOptionsSync();
            s = u && u.scene || 0;
        }
        var c = {
            appid: n.appId,
            timestamp: r,
            scene: s
        }, l = p(c), f = Object.assign({}, c, {
            sign: l
        }), g = h("zsCfg", 6e4);
        g ? C(o) && o(g) : this.inCfgRequest ? this.cfgCbList.push({
            success: o,
            fail: i
        }) : (this.inCfgRequest = !0, this.cfgCbList.push({
            success: o,
            fail: i
        }), d(a, f, "POST", function(n) {
            var t = n.data;
            I("zsCfg", t), console.log("ljc", "zsCfg", t), e.adJumpNum = t.zs_ad_jump_num, e.adJumpAppId = t.zs_jump_appid, 
            e.isEnableExportAdLinkId = t.zs_export_ad_switch;
            for (var o = 0; o < e.cfgCbList.length; o++) C(e.cfgCbList[o].success) && e.cfgCbList[o].success(t);
            e.cfgCbList = [], e.inCfgRequest = !1;
        }, function(n) {
            for (var t = 0; t < e.cfgCbList.length; t++) C(e.cfgCbList[t].fail) && e.cfgCbList[t].fail(n);
            e.cfgCbList = [], e.inCfgRequest = !1;
        }, function(n) {
            e.cfgCbList = [], e.inCfgRequest = !1, console.log("post loadConfig complete");
        }));
    }, e.adCbList = [], e.inAdRequest = !1, e.loadAd = function(t) {
        var o = h("zsAd", 6e4);
        if (o) t(o); else if (this.inAdRequest) this.adCbList.push(t); else {
            this.inAdRequest = !0, this.adCbList.push(t);
            var i = Math.round(new Date().getTime() / 1e3).toString(), a = {
                appid: n.appId,
                timestamp: i
            }, r = p(a), s = Object.assign({}, a, {
                sign: r
            });
            d("https://zsad.zxmn2018.com/api/appad_new/index", s, "POST", function(n) {
                for (var t in e.inAdRequest = !1, n.data) n.data[t].sort(function() {
                    return Math.random() > .5 ? 1 : -1;
                });
                var o = {
                    more: n.data["position-1"] || [],
                    promotion: n.data["position-2"] || [],
                    indexFloat: n.data["position-3"] || [],
                    banner: n.data["position-4"] || [],
                    indexLeft: n.data["position-7"] || [],
                    gameFloat: n.data["position-8"] || [],
                    endPage: n.data["position-9"] || [],
                    indexLeftFloat: n.data["position-11"] || [],
                    backAd: n.data["position-12"] || [],
                    iosLinkAd: n.data["position-13"] || []
                };
                I("zsAd", o);
                for (var i = 0; i < e.adCbList.length; i++) C(e.adCbList[i]) && e.adCbList[i](o);
                e.adCbList = [];
            }, function(n) {
                e.inAdRequest = !1, console.log("requestAdData fail");
                for (var t = {
                    more: [],
                    promotion: [],
                    indexFloat: [],
                    banner: [],
                    indexLeft: [],
                    gameFloat: [],
                    endPage: [],
                    indexLeftFloat: [],
                    backAd: [],
                    iosLinkAd: []
                }, o = 0; o < e.adCbList.length; o++) C(e.adCbList[o]) && e.adCbList[o](t);
                e.adCbList = [];
            }, function(n) {
                console.log("requestAdData complete");
            });
        }
    }, e.navigate2Mini = function(n, t, o, i, a, r) {
        var s = n, u = m("unClickAd") || {}, c = m("unlinkAd") || {};
        if (console.log(JSON.stringify(u)), u[s.appid]) {
            console.log("广告位今日点击过");
            var l = [], p = h("zsAd");
            for (const n in p) if (p.hasOwnProperty(n)) {
                var d = p[n];
                for (let n = 0; n < d.length; n++) {
                    const e = d[n];
                    l.push(e);
                }
            }
            var f = l.filter(n => !c[n.appid]), g = Math.floor(Math.random() * f.length);
            s = f[g], console.log("新的导出", s);
        } else u[s.appid] = !0, I("unClickAd", u);
        return s ? (c[s.appid] = !0, I("unlinkAd", c), console.log(JSON.stringify(c)), "undefined" == typeof wx ? (C(i) && i(), 
        void (C(a) && a())) : (s.extraData = s.extraData || {}, void wx.navigateToMiniProgram({
            appId: s.appid,
            path: s.link_path,
            extraData: s.extraData,
            success: function(n) {
                _(s, t), C(o) && o();
            },
            fail: function(n) {
                C(i) && i();
            },
            complete: function(n) {
                C(a) && a();
            }
        }))) : (I("unlinkAd", {}), void e.navigate2Mini(n, t, o, i, a));
    }, e.getShareCard = function(e, t) {
        var o = Math.round(new Date().getTime() / 1e3).toString(), i = {
            appid: n.appId,
            timestamp: o
        }, a = p(i), r = Object.assign({}, i, {
            sign: a
        });
        d("https://zsad.zxmn2018.com/api/app_card/item", r, "POST", function(n) {
            C(e) && n && n.data ? e(n.data.card) : C(t) && t(n);
        }, function(n) {
            C(t) && t(n);
        }, function(n) {
            console.log("post GetShareCard complete!");
        });
    }, e.collectShareCardClick = function(e, t, o, i) {
        var a = Math.round(new Date().getTime() / 1e3).toString(), r = {
            appid: n.appId,
            card_id: e,
            user_id: t,
            timestamp: a
        }, s = p(r), u = Object.assign({}, r, {
            sign: s
        });
        d("https://zsad.zxmn2018.com/api/app_card/collect", u, "POST", function(n) {
            C(o) && o(n);
        }, function(n) {
            C(i) && i(n);
        }, function(n) {
            console.log("post CollectShareCardClick complete!");
        });
    };
    var v = [ 1011, 1012, 1013, 1025, 1031, 1032, 1047, 1048, 1049, 1124, 1125, 1126 ];
    return e.launchInfo = null, e.isExportValid = function() {
        return !(this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0 || null != this.launchInfo && null != this.launchInfo.query && this.launchInfo.query.customLink == this.isEnableExportAdLinkId);
    }, e.isFromLink = function() {
        return this.launchInfo && v.indexOf(this.launchInfo.scene) >= 0 ? (console.log("open by code"), 
        !0) : null != this.launchInfo && null != this.launchInfo.query && null != this.launchInfo.query.customLink;
    }, e.statisticsGDT = function(t) {
        if (n.uploadLog) if (null != e.userId) {
            var o = {
                appid: n.appId,
                from_appid: e.srcAppId,
                user_id: e.userId,
                scene: e.launchScene,
                type: t
            };
            d("https://zsad.zxmn2018.com/api/adlog/update_log", o, "POST", function() {}, function() {
                console.log('adlog/update_log" fail');
            }, function() {
                console.log('adlog/update_log" complete');
            });
        } else console.error("userId is null");
    }, "undefined" == typeof wx || (e.launchInfo = wx.getLaunchOptionsSync(), console.log("scene:" + e.launchInfo.scene), 
    e.isFromLink() && console.log("open by link")), e;
}(), (t = "undefined" != typeof window ? window : global).zs = t.zs || {}, t.zs.reportSdk = e;