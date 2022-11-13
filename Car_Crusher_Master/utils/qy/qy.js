function _typeof2(e) {
    return Object.prototype.toString(e).slice(8, -1).toLowerCase();
}

var tjconf, qy = {};

window.qy = qy, window.wx ? qy.init = function() {
    console.log("start to load qy sdk..."), tjconf = window;
    var e, i = "1.0.0", a = tjconf, r = "", s = {}, u = "", f = "", h = 0, p = "", d = Date.now(), l = 0, y = "", _ = "", w = "", v = !0, g = function() {
        var e = "";
        try {
            e = wx.getStorageSync("h_stat_uuid"), wx.setStorageSync("h_ifo", !0);
        } catch (t) {
            e = "uuid_getstoragesync";
        }
        if (e) r = !1; else {
            e = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                }
                return e() + e() + e() + e() + e() + e() + e() + e();
            }(), r = !0;
            try {
                wx.setStorageSync("h_stat_uuid", e);
            } catch (e) {
                wx.setStorageSync("h_stat_uuid", "uuid_getstoragesync");
            }
        }
        return e;
    }(), m = "https://api.game.hnquyou.com/api", S = "https://api.game.hnquyou.com/api", x = wx.getLaunchOptionsSync(), k = (Date.now(), 
    Math.floor(1e7 * Math.random()), Date.now(), Math.floor(1e7 * Math.random()), [ "h_SendEvent", "h_OnShareAppMessage", "h_ShareAppMessage", "h_SendSession", "h_SendOpenid", "h_GetAdv", "h_ClickAd", "h_ToMinProgram", "h_GetAdvList", "h_GetAdvListPlat", "h_GetAppFlowAdList", , "h_JudgeRegion" ]);
    function n() {
        return new Promise(function(e, t) {
            wx.login({
                success: function(t) {
                    w = t.code, e("");
                }
            });
        });
    }
    function isArray(e) {
        return !!e && "array" === Object.prototype.toString.call(e).toLowerCase().slice(8, -1);
    }
    function saveStro(e, t) {
        var n = wx.getStorageSync("h_event_info");
        n ? isArray(n[t]) ? n[t].push(e) : n[t] = [ e ] : (n = {})[t] = [ e ], wx.setStorageSync("h_event_info", n);
    }
    function reportStro() {
        var e = wx.getStorageSync("h_event_info");
        if (e) for (var t in e) if (e.hasOwnProperty(t)) {
            var i = e[t];
            if (isArray(i)) for (;i.length > 0; ) {
                var c = i.pop();
                n().then(function() {
                    o(c, t, !0, !0);
                });
            }
        }
        wx.setStorageSync("h_event_info", e);
    }
    function o(n, c, s, d) {
        function t() {
            return new Promise(function(t, i) {
                var c = wx.getStorageSync("tjxx");
                if (void 0 !== c.openid) for (s in c) n[s] = c[s];
                if ("" == n.cd) t(""); else {
                    p++;
                    wx.request({
                        url: m + "/NewReport/report.html",
                        data: n,
                        header: {
                            se: u || "",
                            op: f || "",
                            img: _ || "",
                            au: tjconf.company
                        },
                        method: "POST",
                        success: function(i) {
                            wx.setStorageSync("tjxx", i.data), clearTimeout(e), !0, void 0 !== i.data.rtime && parseInt(i.data.rtime) > 0 ? e = setTimeout(function() {
                                o(n, t, 2);
                            }, 1e3 * parseInt(i.data.rtime)) : void 0 !== c.rtime && parseInt(c.rtime) > 0 && (e = setTimeout(function() {
                                o(n, t, 2);
                            }, 1e3 * parseInt(c.rtime))), i.data.Status && 200 == i.data.Status || saveStro(n, n.ev);
                        },
                        fail: function() {
                            !0, void 0 !== c.rtime && parseInt(c.rtime) > 0 && (clearTimeout(e), e = setTimeout(function() {
                                o(n, t, 2);
                            }, 1e3 * parseInt(c.rtime))), saveStro(n, n.ev);
                        }
                    });
                }
            });
        }
        n.cd = w, n.rq_c = p, n.ifo = r, n.ak = a.app_key, n.uu = g, n.v = i, n.st = Date.now(), 
        n.ev = c, n.wsr = x, n.ufo = function(e) {
            if (void 0 === e || "" === e) return "";
            var t = {};
            for (var n in e) "rawData" != n && "errMsg" != n && (t[n] = e[n]);
            return t;
        }(n.ufo), n.ec = h, d || reportStro(), void 0 === s ? wx.Queue.push(t) : t();
    }
    function c(e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t;
    }
    "" === a.app_key && console.error("请在配置文件(qy-config.js)中填写您的app_key"), a.app_key = a.app_key.replace(/\s/g, ""), 
    wx.Queue = new function() {
        var e = this;
        this.concurrency = 200, this.queue = [], this.tasks = [], this.activeCount = 0, 
        this.push = function(t) {
            this.tasks.push(new Promise(function(n, o) {
                var i = function() {
                    e.activeCount++, t().then(function(e) {
                        n(e);
                    }).then(function() {
                        e.next();
                    });
                };
                e.activeCount < e.concurrency ? i() : e.queue.push(i);
            }));
        }, this.all = function() {
            return Promise.all(this.tasks);
        }, this.next = function() {
            e.activeCount--, e.queue.length > 0 && e.queue.shift()();
        };
    }(), wx.Queue.all(), Promise.all([ n(), new Promise(function(e, t) {
        wx.getNetworkType({
            success: function(t) {
                e(t);
            },
            fail: function() {
                e("");
            }
        });
    }), new Promise(function(e, t) {
        a.getLocation ? wx.getLocation({
            success: function(t) {
                e(t);
            },
            fail: function() {
                e("");
            }
        }) : wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userLocation"] ? (wx.getLocation({
                    success: function(t) {
                        e(t);
                    },
                    fail: function() {
                        e("");
                    }
                }), e("")) : e("");
            },
            fail: function() {
                e("");
            }
        });
    }) ]).then(function(e) {
        "" !== e[2] ? (s.lat = e[2].latitude || "", s.lng = e[2].longitude || "", s.spd = e[2].speed || "") : (s.lat = "", 
        s.lng = "", s.spd = ""), "" !== e[1] ? s.nt = e[1].networkType || "" : s.nt = "";
        var t = c(s);
        "" !== e[0] && (t.ufo = e[0], y = e[0]), o(t, "init");
    }), wx.onShow(function(e) {
        p = 0, x = e, l = Date.now(), v || ("" + Date.now() + Math.floor(1e7 * Math.random()), 
        r = !1, wx.setStorageSync("h_ifo", !1)), v = !1;
        var t = c(s), n = c(s);
        t.sm = l - d, e.query && e.query.h_share_src && e.shareTicket && "1044" === e.scene ? (n.tp = "h_share_click", 
        new Promise(function(e, t) {
            "1044" == x.scene ? wx.getShareInfo({
                shareTicket: x.shareTicket,
                success: function(t) {
                    e(t);
                },
                fail: function() {
                    e("");
                }
            }) : e("");
        }).then(function(e) {
            n.ct = e, o(n, "event");
        })) : e.query && e.query.h_share_src && (n.tp = "h_share_click", n.ct = "1", o(n, "event")), 
        o(t, "show");
    }), wx.onHide(function() {
        var e = c(s);
        e.dr = Date.now() - l, "" === y ? wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        e.ufo = t, y = t, _ = function(e) {
                            for (var t = "", n = 0; n < e.length; n++) e[n].length > t.length && (t = e[n]);
                            return t;
                        }(t.userInfo.avatarUrl.split("/")), o(e, "hide");
                    }
                }) : o(e, "hide");
            }
        }) : o(e, "hide");
    }), wx.onError(function(e) {
        var t = c(s);
        t.tp = "h_error_message", t.ct = e, h++, o(t, "event");
    });
    for (var q = {
        h_SendEvent: function(e, t, n) {
            var i = c(s);
            "" !== e && "string" == typeof e && e.length <= 255 ? (i.tp = e, "string" == typeof t && t.length <= 255 ? (i.ct = String(t), 
            o(i, "event", n)) : "object" == (void 0 === t ? "undefined" : _typeof2(t)) ? (JSON.stringify(t).length >= 255 && console.error("自定义事件参数不能超过255个字符"), 
            i.ct = JSON.stringify(t), o(i, "event", n)) : void 0 === t || "" === t ? o(i, "event", n) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符")) : console.error("事件名称必须为String类型且不能超过255个字符");
        },
        h_OnShareAppMessage: function(e) {
            wx.updateShareMenu({
                withShareTicket: !0,
                complete: function() {
                    wx.onShareAppMessage(function() {
                        var t = e(), n = "", i = "";
                        n = void 0 !== t.success ? t.success : "", i = void 0 !== t.fail ? t.fail : "";
                        var a;
                        a = void 0 !== x.query.h_share_src ? void 0 !== t.query ? (x.query.h_share_src.indexOf(g), 
                        t.query + "&h_share_src=" + x.query.h_share_src + "," + g) : (x.query.h_share_src.indexOf(g), 
                        "h_share_src=" + x.query.h_share_src + "," + g) : void 0 !== t.query ? t.query + "&h_share_src=" + g : "h_share_src=" + g;
                        var r = c(s);
                        return t.query = a, r.ct = t, r.tp = "h_share_chain", o(r, "event"), t.success = function(e) {
                            r.tp = "h_share_status", o(r, "event"), "" !== n && n(e);
                        }, t.fail = function(e) {
                            r.tp = "h_share_fail", o(r, "event"), "" !== i && i(e);
                        }, t;
                    });
                }
            });
        },
        h_ShareAppMessage: function(e) {
            var t = e, n = "", i = "";
            n = void 0 !== t.success ? t.success : "", i = void 0 !== t.fail ? t.fail : "";
            var a;
            a = void 0 !== x.query.h_share_src ? void 0 !== t.query ? (x.query.h_share_src.indexOf(g), 
            t.query + "&h_share_src=" + x.query.h_share_src + "," + g) : (x.query.h_share_src.indexOf(g), 
            "h_share_src=" + x.query.h_share_src + "," + g) : void 0 !== t.query ? t.query + "&h_share_src=" + g : "h_share_src=" + g, 
            t.query = a;
            var r = c(s);
            r.ct = t, r.tp = "h_share_chain", o(r, "event"), t.success = function(e) {
                r.tp = "h_share_status", o(r, "event"), "" !== n && n(e);
            }, t.fail = function(e) {
                r.tp = "h_share_fail", o(r, "event"), "" !== i && i(e);
            }, wx.updateShareMenu({
                withShareTicket: !0,
                complete: function() {
                    wx.shareAppMessage(t);
                }
            });
        },
        h_SendSession: function(e) {
            if ("" !== e && e) {
                var t = c(s);
                t.tp = "session", t.ct = "session", u = e, "" === y ? wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] ? wx.getUserInfo({
                            success: function(e) {
                                t.ufo = e, o(t, "event");
                            }
                        }) : o(t, "event");
                    }
                }) : (t.ufo = y, "" !== y && (t.gid = ""), o(t, "event"));
            } else console.error("请传入从后台获取的session_key");
        },
        h_SendOpenid: function(e) {
            if ("" !== e && e) {
                f = e;
                var t = c(s);
                t.tp = "openid", t.ct = "openid", o(t, "event");
            } else console.error("openID不能为空");
        },
        h_ClickAd: function(e, t) {
            if (e) {
                var o = wx.getStorageSync("tjxx"), i = Date.now(), c = 0;
                o && "object" === _typeof2(o) && 200 === o.Status && (c = o.Result.uid ? o.Result.uid : c), 
                n().then(function() {
                    wx.h_SendEvent("clickad", {
                        adv_id: e,
                        timelog: i,
                        type: t
                    }, 1);
                });
            }
        },
        h_ToMinProgram: function(e) {
            var t = e, n = "", o = "";
            function reportClick(e) {
                "function" == typeof wx.h_ClickAd && t && "object" === _typeof2(t) && t.adv_id && wx.h_ClickAd(t.adv_id, e);
            }
            n = void 0 !== t.success ? t.success : "", o = void 0 !== t.fail ? t.fail : "", 
            t.success = function(e) {
                reportClick(1), "function" == typeof n && n(e);
            }, t.fail = function(e) {
                reportClick(2), "function" == typeof o && o(e);
            }, wx && wx.navigateToMiniProgram && (reportClick(0), wx.navigateToMiniProgram(t));
        },
        h_GetAdv: function(e) {
            var t = Date.now(), n = e && "object" === _typeof2(e) ? e : {}, o = n.adv_key ? n.adv_key : "";
            wx.request({
                url: m + "/Sw/getAdvByIndex.html",
                data: {
                    key: o,
                    timelog: t,
                    sign: hex_md5("key:" + o + "timelog:" + t)
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    au: tjconf.company
                },
                success: function(e) {
                    "function" == typeof n.success && n.success(e.data);
                },
                fail: function(e) {
                    "function" == typeof n.fail && n.fail(e.data);
                },
                complete: function(e) {
                    "function" == typeof n.complete && n.complete(e.data);
                }
            });
        },
        h_GetAdvList: function(e) {
            var t = Date.now(), n = e && "object" === _typeof2(e) ? e : {}, o = n.adv_key ? n.adv_key : "";
            wx.request({
                url: m + "/api/Sw/getAllAdvByIndex.html",
                data: {
                    key: o,
                    timelog: t,
                    sign: hex_md5("key:" + o + "timelog:" + t)
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    au: tjconf.company
                },
                success: function(e) {
                    "function" == typeof n.success && n.success(e.data);
                },
                fail: function(e) {
                    "function" == typeof n.fail && n.fail(e.data);
                },
                complete: function(e) {
                    "function" == typeof n.complete && n.complete(e.data);
                }
            });
        },
        h_GetAdvListPlat: function(e) {
            var t = Date.now(), n = "object" === _typeof2(e) ? e : {}, o = n.adv_key ? n.adv_key : "";
            console.log("测试：", o);
            var i = 0, c = wx.getSystemInfoSync();
            c && (-1 !== c.platform.toLowerCase().indexOf("ios") ? i = 2 : -1 !== c.platform.toLowerCase().indexOf("and") && (i = 1)), 
            wx.request({
                url: m + "/api/Sw/getAllAdvByIndexPlat.html",
                data: {
                    key: o,
                    timelog: t,
                    platform: i,
                    sign: hex_md5("key:" + o + "platform:" + i + "timelog:" + t)
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    appid: tjconf.app_key,
                    au: tjconf.company
                },
                success: function(e) {
                    "function" == typeof n.success && n.success(e.data);
                },
                fail: function(e) {
                    "function" == typeof n.fail && n.fail(e.data);
                },
                complete: function(e) {
                    "function" == typeof n.complete && n.complete(e.data);
                }
            });
        },
        h_GetAppFlowAdList: function(e) {
            var t = Date.now(), n = e && "object" === _typeof2(e) ? e : {};
            cos, wx.request({
                url: S + "/Sw/getAppFlowAdList.html",
                data: {
                    appid: tjconf.app_key,
                    timelog: t,
                    sign: hex_md5("appid:" + tjconf.app_key + "timelog:" + t)
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    au: tjconf.company
                },
                success: function(e) {
                    "function" == typeof n.success && n.success(e.data);
                },
                fail: function(e) {
                    "function" == typeof n.fail && n.fail(e.data);
                },
                complete: function(e) {
                    "function" == typeof n.complete && n.complete(e.data);
                }
            });
        },
        h_JudgeRegion: function(e) {
            var t = e && "object" === _typeof2(e) ? e : {};
            wx.request({
                url: S + "/Product/judgeRegion.html",
                data: {
                    appid: tjconf.app_key,
                    scene: e.scene
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    au: tjconf.company
                },
                success: function(e) {
                    "function" == typeof t.success && t.success(e.data);
                },
                fail: function(e) {
                    "function" == typeof t.fail && t.fail(e.data);
                },
                complete: function(e) {
                    "function" == typeof t.complete && t.complete(e.data);
                }
            });
        }
    }, j = 0; j < k.length; j++) !function(e, t) {
        Object.defineProperty(wx, e, {
            value: t,
            writable: !1,
            enumerable: !0,
            configurable: !0
        });
    }(k[j], q[k[j]]);
    try {
        var A = wx.getSystemInfoSync();
        s.br = A.brand || "", s.md = A.model, s.pr = A.pixelRatio, s.sw = A.screenWidth, 
        s.sh = A.screenHeight, s.ww = A.windowWidth, s.wh = A.windowHeight, s.lang = A.language, 
        s.wv = A.version, s.sv = A.system, s.wvv = A.platform, s.fs = A.fontSizeSetting, 
        s.wsdk = A.SDKVersion, s.bh = A.benchmarkLevel || "", s.bt = A.battery || "", s.wf = A.wifiSignal || "", 
        s.lng = "", s.lat = "", s.nt = "", s.spd = "", s.ufo = "";
    } catch (e) {}
} : qy.init = function() {
    console.log("qy sdk not support on windows platform....");
};