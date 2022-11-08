function i() {
    this.setDebug = function (e) {
        t = e;
    }, this.d = function () {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.debug.apply(console, arguments);
        } catch (e) { }
    }, this.i = function () {
        try {
            if (t) try {
                "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.info.apply(console, arguments);
            } catch (e) { }
        } catch (e) { }
    }, this.e = function () {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
        } catch (e) { }
    }, this.w = function () {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.warn.apply(console, arguments);
        } catch (e) { }
    }, this.v = function () {
        if (t) try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.log.apply(console, arguments);
        } catch (e) { }
    }, this.t = function () {
        if (t) try {
            console.table.apply(console, arguments);
        } catch (e) { }
    }, this.tip = function () {
        try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.log.apply(console, arguments);
        } catch (e) { }
    }, this.tip_w = function (e) {
        try {
            console.log("%c " + n + e, "background:red; padding: 4px; padding-right: 8px; border-radius: 4px; color: #fff;");
        } catch (e) { }
    }, this.err = function () {
        try {
            "string" == typeof arguments[0] && (arguments[0] = n + arguments[0]), console.error.apply(console, arguments);
        } catch (e) { }
    };
}

function o() {
    var e = {};
    this.useOpenid = function () {
        return !!e.useOpenid;
    }, this.useSwanid = function () {
        return !!e.useSwanid;
    }, this.autoGetOpenid = function () {
        return !!e.autoGetOpenid;
    }, this.appKey = function () {
        return e.appKey;
    }, this.uploadUserInfo = function () {
        return e.uploadUserInfo;
    }, this.enableVerify = function () {
        return e.enableVerify;
    }, this.set = function (t) {
        e = t;
    }, this.get = function () {
        return e;
    }, this.setItem = function (t, n) {
        e[t] = n;
    }, this.getItem = function (t) {
        return e[t];
    };
}

function u() {
    this.listeners = {}, this.maxListener = 50;
}

function p(e, t) {
    function n() {
        this.constructor = e;
    }
    f(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n());
}

function S() {
    var e = !1, t = null, n = [];
    this.addPageStart = function (n) {
        n && !e && (t = {
            ts: Date.now(),
            path: n,
            page_name: n
        }, e = !0);
    }, this.addPageEnd = function (i) {
        e && i && t && i === t.page_name && (i = Date.now() - t.ts, t.duration = Math.abs(i),
            n.push(t), t = null, e = !1);
    }, this.get = function () {
        return n;
    }, this.getCurrentPage = function () {
        return t;
    }, this.clear = function () {
        n.length = 0;
    };
}

function E() {
    return function (e) {
        var t, n = [];
        for (t in e) "_um_ssrc" !== t && "_um_sts" !== t && n.push(t + "=" + e[t]);
        return n.join("&");
    }(I);
}

function w() {
    return {
        add: function (e, t) {
            a().v("share origin: %o", e);
            var n = {
                title: e && e.title,
                path: e && e.path && e.path.split("?")[0],
                _um_sts: Date.now()
            };
            n.path && 1 < n.path.length && v.startsWith(n.path, "/") && (n.path = v.trimStart(n.path, "/"));
            var i = e.path || "", r = y().getId();
            if (r) {
                var o = N.split(","), s = (o = o.filter(function (e) {
                    return 0 < e.length;
                })).indexOf(r);
                0 <= s && (o = o.slice(0, s)), o.length < 3 && o.push(r), r = o.join(","), -1 !== i.indexOf("?") ? i += "&_um_ssrc=" + r : i += "?_um_ssrc=" + r,
                    i += "&_um_sts=" + (o = Date.now()), t ? (t = (t = E()) ? t + "&_um_ssrc=" + r + "&_um_sts=" + o : "_um_ssrc=" + r + "&_um_sts=" + o,
                        e.query = e.query ? e.query + "&_um_ssrc=" + r + "&_um_sts=" + o : t) : e.path = i,
                    n._um_ssrc = r, n._um_sts = o;
            }
            return A.push(n), a().v("share: %o", e), e;
        },
        setShareSource: function (e) {
            N = e;
        },
        clear: function () {
            A.length = 0;
        },
        get: function () {
            return A;
        }
    };
}

function P() {
    this.load = function (e) {
        U ? (l.removeStorage(k), e()) : (k = "um_cache_" + s().appKey(), l.getStorage(k, function (t) {
            U = D.parse(t) || {}, b = !0, l.removeStorage(k), e();
        }));
    }, this.save = function () {
        U && l.setStorage(k, D.stringify(U));
    }, this.set = function (e, t) {
        U && (U[e] = t);
    }, this.get = function (e) {
        return (U || {})[e];
    }, this.remove = function (e) {
        U && U[e] && delete U[e];
    }, this.getAll = function () {
        return U;
    }, this.clear = function () {
        U = null;
    }, this.has = function (e) {
        return !!this.get(e);
    }, this.isLoaded = function () {
        return b;
    };
}

function K() {
    if (x.length) {
        var e = L().get(j);
        (function (e) {
            var t, n = 0;
            for (t in e) Array.isArray(e[t]) && (n += e[t].length);
            return n;
        })(e) + x.length <= G && (e = q(e, x), L().set(j, e));
    }
}

function q(e, t) {
    var n = (e = e || {})[M];
    return Array.isArray(n) && n.length ? e[M] = n.concat(t) : e[M] = [].concat(t),
        e;
}

function Q() {
    var e = !1, t = {};
    return {
        init: function () {
            !function (e) {
                var n = L().get(d.IMPRINT);
                n && (t.imprint = n), t.device_type = "Phone", t.sdk_version = d.IMPL_VERSION, t.appkey = s().appKey(),
                    l.getDeviceInfo(function (e) {
                        t.device_info = e || "";
                    }), n = l.getAppInfoSync(), t.appid = n.appId, t.app_env = n.appEnv, t.app_version = n.appVersion,
                    l.getSystemInfo(function (n) {
                        l.getNetworkInfo(function (i) {
                            i = function (e, t) {
                                var n = {}, i = (t = t || {}).networkType;
                                "none" === i && (i = "unknown");
                                var r = (e = e || {}).model || "", o = e.platform || "", a = e.brand || "", t = a.toLowerCase();
                                switch (n.sdk_type = l.getSdkType(), n.platform = l.getPlatform(), n.platform_sdk_version = e.platformSDKVersion,
                                n.platform_version = e.platformVersion, n.resolution = e.resolution, n.pixel_ratio = e.pixelRatio,
                                n.os = o, n.font_size_setting = e.fontSizeSetting, n.device_model = r, n.device_brand = a,
                                n.device_manufacturer = t, n.device_manuid = r, n.device_name = r, n.os_version = e.OSVersion,
                                n.language = e.language, i = i ? i.toLowerCase() : "") {
                                    case J:
                                        n.access_subtype = "LTE", n.access = "4G";
                                        break;

                                    case W:
                                        n.access_subtype = "CDMA", n.access = "3G";
                                        break;

                                    case Y:
                                        n.access_subtype = "GRPS", n.access = "2G";
                                        break;

                                    default:
                                        n.access = i, delete n.access_subtype;
                                }
                                return n;
                            }(n, i), v.assign(t, i), function () {
                                var e = [];
                                e.push({
                                    name: "设备型号",
                                    value: t.device_model
                                }), e.push({
                                    name: "设备生产商",
                                    value: t.device_brand
                                }), e.push({
                                    name: "os版本号",
                                    value: t.os_version
                                }), e.push({
                                    name: "网络类型",
                                    value: t.access
                                }), e.push({
                                    name: "运营商",
                                    value: t.access_subtype
                                }), e.push({
                                    name: "分辨率",
                                    value: t.resolution
                                }), e.push({
                                    name: "pixelRatio",
                                    value: t.pixel_ratio
                                });
                                for (var n = "", i = 0; i < e.length; i++) {
                                    var r = e[i];
                                    n += r.name + ": " + r.value + "; ";
                                }
                                a().v("调试辅助信息: ", n);
                            }(), e && e();
                        });
                    });
            }(function () {
                e = !0;
            });
        },
        isLoaded: function () {
            return e;
        },
        get: function () {
            return t;
        },
        getRealtimeFields: function () {
            var e = {};
            return X.forEach(function (n) {
                e[n] = t[n];
            }), e;
        },
        setIdTracking: function (e) {
            this.setItem("id_tracking", e);
        },
        setIdType: function (e) {
            this.setItem("id_type", e);
        },
        setAppVersion: function (e) {
            this.setItem("app_version", e);
        },
        setSuperProperty: function (e) {
            t.sp || (t.sp = {}), t.sp.isv = e;
        },
        getSuperProperty: function () {
            return t && t.sp ? t.sp.isv : "";
        },
        setItem: function (e, n) {
            t[e] = n;
        },
        getItem: function (e) {
            return t[e];
        }
    };
}

function ne() {
    return {
        resume: function (e) {
            var t = !1;
            ee = ee || L().get(d.CURRENT_SESSION);
            var n = new Date();
            return $ = n.getTime(), !ee || !ee.end_time || $ - ee.end_time > d.SESSION_INTERVAL ? (t = !0,
                function (e) {
                    try {
                        var t = (ee || {}).options || {}, n = v.assign({}, function (e) {
                            var t, n = {};
                            for (t in e) 0 === t.indexOf("_um_") && (n[t] = e[t]);
                            return a().v("query: ", e), a().v("_um_params: ", n), n;
                        }(e.query));
                        n.path = e.path || t.path, n.scene = e.scene ? l.getPlatform() + "_" + e.scene : t.scene,
                            (t = e.referrerInfo) && (n.referrerAppId = t.appId), a().v("session options: ", n),
                            (t = n[d.UM_SSRC]) && T().setShareSource(t), t = Date.now(), ee = {
                                id: v.getRandomStr(10) + t,
                                start_time: t,
                                options: n
                            };
                    } catch (e) {
                        a().e("生成新session失败: ", e);
                    }
                }(e), a().v("开始新的session(%s): ", ee.id, ee)) : a().v("延续上一次session(%s): %s ", ee.id, n.toLocaleTimeString(), ee),
                t;
        },
        pause: function () {
            !function () {
                if (ee) {
                    var e = new Date();
                    ee.end_time = e.getTime(), "number" != typeof ee.duration && (ee.duration = 0),
                        ee.duration = ee.end_time - $, L().set(d.CURRENT_SESSION, ee), a().v("退出会话(%s): %s ", ee.id, e.toLocaleTimeString(), ee);
                }
            }();
        },
        getCurrentSessionId: function () {
            return (ee || {}).id;
        },
        getCurrentSession: function () {
            return ee;
        },
        cloneCurrentSession: function () {
            return v.clone(ee);
        }
    };
}

function ie(e) {
    var t = null;
    switch (e) {
        case B.HALF_SESSION:
            t = function () {
                var e = null, t = te().cloneCurrentSession();
                return t && (e = {
                    header: {
                        st: "1"
                    },
                    analytics: {
                        sessions: [t]
                    }
                }), e;
            }();
            break;

        case B.CLOSE_SESSION:
            t = function () {
                var e = null, t = {}, n = te().cloneCurrentSession();
                if (n) {
                    var i = m().get(), r = T().get();
                    Array.isArray(i) && i.length && (n.pages = v.clone(i)), Array.isArray(r) && r.length && (n.shares = v.clone(r)),
                        m().clear(), T().clear(), t.sessions = [n];
                }
                return (n = F().getEkvs()) && (t.ekvs = v.clone(n), F().clear()), (t.sessions || t.ekvs) && (e = {
                    analytics: t
                }), e;
            }();
            break;

        case B.EKV:
            t = function () {
                var e = null, t = F().getEkvs();
                return t && (e = {
                    analytics: {
                        ekvs: v.clone(t)
                    }
                }, F().clear()), e;
            }();
    }
    return t;
}

function ae(e) {
    return {
        h: function (e, t) {
            var n = ue(e, t);
            return e && e.id_tracking && (n[t.id_tracking || "id_tracking"] = ue(e.id_tracking, se)),
                n;
        }(e.header, oe),
        a: function (e, t) {
            var n = {};
            if (e) for (var i in e) e[i] && (n[t[i]] = e[i]);
            return n;
        }(e.analytics, re)
    };
}

function ue(e, t) {
    var n, i = {};
    for (n in e) t[n] ? i[t[n]] = e[n] : i[n] = e[n];
    return i;
}

function fe(e) {
    if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? ye(192 | t >>> 6) + ye(128 | 63 & t) : ye(224 | t >>> 12 & 15) + ye(128 | t >>> 6 & 63) + ye(128 | 63 & t);
    var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
    return ye(240 | t >>> 18 & 7) + ye(128 | t >>> 12 & 63) + ye(128 | t >>> 6 & 63) + ye(128 | 63 & t);
}

function pe(e) {
    var t = [0, 2, 1][e.length % 3], e = e.charCodeAt(0) << 16 | (1 < e.length ? e.charCodeAt(1) : 0) << 8 | (2 < e.length ? e.charCodeAt(2) : 0);
    return [ve.charAt(e >>> 18), ve.charAt(e >>> 12 & 63), 2 <= t ? "=" : ve.charAt(e >>> 6 & 63), 1 <= t ? "=" : ve.charAt(63 & e)].join("");
}

function le(e) {
    return e.replace(me, fe).replace(/[\s\S]{1,3}/g, pe);
}

function de(e) {
    switch (e.length) {
        case 4:
            var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
            return ye(55296 + (t >>> 10)) + ye(56320 + (1023 & t));

        case 3:
            return ye((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));

        default:
            return ye((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1));
    }
}

function he(e) {
    var t = e.length, n = t % 4, e = (0 < t ? _e[e.charAt(0)] << 18 : 0) | (1 < t ? _e[e.charAt(1)] << 12 : 0) | (2 < t ? _e[e.charAt(2)] << 6 : 0) | (3 < t ? _e[e.charAt(3)] : 0);
    return (e = [ye(e >>> 16), ye(e >>> 8 & 255), ye(255 & e)]).length -= [0, 0, 2, 1][n],
        e.join("");
}

function ge(e) {
    return e.replace(/[\s\S]{1,4}/g, he).replace(Se, de);
}

function Oe(e, t, n, i) {
    z.instance().setIdType(y().getIdType()), z.instance().setIdTracking(y().getIdTracking());
    (r = y().getUserId()) && e.analytics && (e.analytics.active_user = {
        puid: r,
        provider: y().getProvider()
    }), r = v.clone(z.instance().get()), e.header = v.assign(r, e.header, {
        ts: Date.now(),
        testToken: ce,
        traceId: v.getRandomStr(10) + Date.now() + v.getRandomStr(9)
    });
    var r = ae(e), o = D.stringify(r), r = {
        url: d.LOG_URL,
        method: "POST",
        data: Ie.encode(o),
        success: function (i) {
            var r = i.code || i.status || i.statusCode;
            200 === r || 413 === r ? (a().i("数据发送成功: ", e, o), function (e) {
                e && (z.instance().setItem(d.IMPRINT, e), Ee.set(e), Ee.save(), a().v("imprint: ", Ee.getImpObj()),
                    Ee.getItem("ttn_invalid") && (ce = ""));
            }((i.data || {}).imprint), "function" == typeof t && t(i)) : (a().w("数据发送失败: ", o),
                "function" == typeof n && n());
        },
        fail: function (e) {
            a().w("超时: ", o), "function" == typeof n && n();
        },
        complete: function () {
            "function" == typeof i && i();
        }
    };
    l.request(v.assign(r, {
        header: {
            "Content-Type": r = l.getSdkType() + "/json",
            "Msg-Type": r
        }
    }));
}

function Ae(e) {
    var t = e, n = [];
    this.enqueue = function (e) {
        "number" == typeof t && this.size() >= t && this.dequeue(), n.push(e);
    }, this.dequeue = function () {
        return n.shift();
    }, this.front = function () {
        return n[0];
    }, this.isEmpty = function () {
        return 0 === n.length;
    }, this.clear = function () {
        n.length = 0;
    }, this.size = function () {
        return n.length;
    }, this.items = function () {
        return n;
    }, this.print = function () {
        console.log(n.toString());
    };
}

function Ue(e) {
    var t = Re.front();
    t ? Oe(t, function () {
        Re.dequeue(), Ue(e);
    }, function () {
        var t = Re.dequeue();
        t && !t.noCache && we.push(t), Ue(e);
    }) : (we.forEach(function (e) {
        Re.enqueue(e);
    }), we.length = 0, e());
}

function be(e) {
    y().getId() ? Te ? a().i("队列正在发送中") : (Te = !0, Ue(function () {
        Te = !1, "function" == typeof e && e();
    })) : (a().i("获取id标识失败，暂缓发送"), "function" == typeof e && e());
}

function De() {
    this.send = function (e, t, n) {
        e ? this.add(e, t, function () {
            be(n);
        }) : be(n);
    }, this.add = function (e, t, n) {
        !function e(t, n, i) {
            if (z.instance().isLoaded()) {
                n = n || {};
                var r = ie(t);
                if (r) {
                    var o = z.instance().getRealtimeFields();
                    r.header = v.assign({}, r.header, o), r.noCache = n.noCache, Re.enqueue(r);
                }
                "function" == typeof i && i();
            } else setTimeout(function () {
                e(t, n, i);
            }, 100);
        }(e, t, n);
    }, this.load = function () {
        var e = L().get(d.REQUESTS);
        e && e.length && e.forEach(function (e) {
            Re.enqueue(e);
        }), L().remove(d.REQUESTS);
    }, this.save = function () {
        L().set(d.REQUESTS, v.clone(Re.items())), Re.clear();
    };
}

function Ce() {
    this.update = function () {
        l.getUserInfo(function (e) {
            if (e) {
                var t = L().get(d.USER_INFO);
                t && v.deepEqual(e, t) || function (e, t) {
                    var n = s().appKey(), i = l.getSdkType(), r = y().getId(), o = y().getIdType();
                    n && i && r && o && (o = {
                        ak: s().appKey(),
                        sdt: l.getSdkType(),
                        uin: e.nickName,
                        uia: e.avatar,
                        uig: e.gender,
                        uit: e.country,
                        uip: e.province,
                        uic: e.city,
                        uil: e.language,
                        id: y().getId(),
                        it: y().getIdType()
                    }, o = JSON.stringify(o), o = Ie.encode(o), l.request({
                        url: d.USERINFO_URL,
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: "ui=" + o,
                        success: function (n) {
                            a().v("用户信息上传成功: ", e), t && t(n && n.data && 200 === n.data.code);
                        },
                        fail: function () {
                            a().e("用户信息上传失败: ", e), t && t(!1);
                        }
                    }));
                }(e, function (t) {
                    t && L().set(d.USER_INFO, e);
                });
            }
        });
    };
}

function Me(e, t) {
    this.id = e, this.ts = Date.now();
    var n = typeof t;
    if ("string" == n && t) this[e] = t; else if ("object" == n) for (var i in t) !{}.hasOwnProperty.call(t, i) || (this[i] = t[i]);
}

function xe() {
    var e = !1, t = !1, n = 0;
    this.init = function (t) {
        a().v("sdk version: " + d.IMPL_VERSION), e ? a().v("Lib重复实例化") : L().load(function () {
            a().v("cache初始化成功: ", L().getAll()), y().setUseOpenid && y().setUseOpenid(s().useOpenid()),
                y().init(function () {
                    z.instance().init(), a().v("Header初始化成功");
                }), e = !0, "function" == typeof t && t(), a().tip("SDK集成成功");
        });
    }, this.resume = function (n) {
        if (e && !t) {
            a().v("showOptions: ", n);
            var i;
            t = !0, s().enableVerify() && n && n.query && (i = n.query._ttn, ce = i || ce),
                this._resume(n);
        }
    }, this._resume = function (e) {
        ke().load();
        var t = te().resume(e), e = te().getCurrentSessionId();
        F().setSessionId(e), t && ke().add(B.HALF_SESSION, {}, function () {
            y().setUseOpenid && y().setUseOpenid(s().useOpenid()), s().useOpenid() && s().autoGetOpenid() && !y().getId() ? (a().v("get id async"),
                function e(t, n) {
                    y().getId() || t <= 0 || y().getOpenIdAsync(s().appKey(), function (i) {
                        i ? (a().v("获取id成功"), ke().send()) : (a().v("获取openid失败,启动重试,剩余可用次数", t - 1), setTimeout(function () {
                            e(t - 1, n);
                        }, n));
                    });
                }(10, 3e3)) : (a().v("session auto send"), ke().send());
        });
    }, this.pause = function (i) {
        e && (t = !1, n = 0, te().pause(), s().uploadUserInfo() && Pe().update(), ke().send(B.CLOSE_SESSION, {}, function () {
            ke().save(), L().save(), a().v("cache save success"), "function" == typeof i && i();
        }));
    }, this.setOpenid = function (e) {
        a().v("setOpenId: %s", e), y().setOpenid(e), ke().send();
    }, this.setUnionid = function (e) {
        a().v("setUnionid: %s", e), y().setUnionid(e);
    }, this.setUserid = function (e, t) {
        a().v("setUserid: %s", e, t), y().setUserid(e, t);
    }, this.setAnonymousid = function (e) {
        a().v("setAnonymousId: %s", e), y().setAnonymousid(e), ke().send();
    }, this.setAppVersion = function (e) {
        e && "string" != typeof e ? a().w("setAppVersion方法只接受字符串类型参数") : z.instance().setAppVersion(e);
    }, this.setAlipayUserid = function (e) {
        e && "string" != typeof e ? a().w("setAlipayUserid方法只接受字符串类型参数") : (a().v("setAlipayUserid: %s", e),
            y().setAlipayUserid(e));
    }, this.setSuperProperty = function (e) {
        if (e && "string" != typeof e) a().w("超级属性只支持字符串类型"); else {
            var t = this;
            z.instance().getSuperProperty() !== e && (z.instance().setSuperProperty(e), t.pause(function () {
                t.resume();
            }));
        }
    }, this.trackEvent = function (t, i) {
        if (e && (a().v("event: ", t, i), function (e, t) {
            if (e && "string" == typeof e) {
                var n = ["id", "ts", "du"], i = {};
                if (n.forEach(function (e) {
                    i[e] = 1;
                }), i[e]) a().e("eventId不能与以下保留字冲突: " + n.join(",")); else if (e.length > d.MAX_EVENTID_LENGTH) a().e("The maximum length of event id shall not exceed " + d.MAX_EVENTID_LENGTH); else {
                    if (!t || "object" == typeof t && !Array.isArray(t) || "string" == typeof t) {
                        if ("object" == typeof t) {
                            var r, o = 0;
                            for (r in t) if ({}.hasOwnProperty.call(t, r)) {
                                if (r.length > d.MAX_PROPERTY_KEY_LENGTH) return void a().e("The maximum length of property key shall not exceed " + d.MAX_PROPERTY_KEY_LENGTH);
                                if (o >= d.MAX_PROPERTY_KEYS_COUNT) return void a().e("The maximum count of properties shall not exceed " + d.MAX_PROPERTY_KEYS_COUNT);
                                if (i[r]) return void a().e("属性中的key不能与以下保留字冲突: " + n.join(","));
                                o += 1;
                            }
                        }
                        return 1;
                    }
                    a().e("please check trackEvent properties. properties should be string or object(not include Array)");
                }
            } else a().e('please check trackEvent id. id should be "string" and not null');
        }(t, i))) {
            var r = new Me(t, i);
            F().addEvent(r);
            var o = !!ce, t = o ? 0 : d.EVENT_SEND_DEFAULT_INTERVAL;
            r = i = Date.now(), t = t, ("number" != typeof n || "number" != typeof t || n <= 0 || t < r - n) && (n = i,
                ke().send(B.EKV, {
                    noCache: o
                }, function () { }));
        }
    }, this.trackShare = function (t) {
        if (e) {
            try {
                -1 < l.getSdkType().indexOf("game") ? (t = T().add(t, !0), a().v("shareQuery: ", t)) : (t = T().add(t, !1),
                    a().v("sharePath: ", t.path));
            } catch (t) {
                a().v("shareAppMessage: ", t);
            }
            return t;
        }
    }, this.trackPageStart = function (t) {
        e && m().addPageStart(t);
    }, this.trackPageEnd = function (t) {
        e && m().addPageEnd(t);
    }, this.onShareAppMessage = function (e) {
        var t = this;
        l.onShareAppMessage(function () {
            return t.trackShare(e());
        });
    }, this.shareAppMessage = function (e) {
        this.trackShare(e), l.shareAppMessage(e);
    };
}

function je() { }

function Ke(e, t) {
    e >= Ge.length || t ? (t && function () {
        var e = "";//https://umini.shujupie.com
        d.LOG_URL = d.LOG_URL.replace(e, Ge[Fe]), d.GET_OPENID_URL = d.GET_OPENID_URL.replace(e, Ge[Fe]),
            d.USERINFO_URL = d.USERINFO_URL.replace(e, Ge[Fe]);
    }(), t && a().v("命中可用服务", Ge[Fe]), t || a().tip_w("未命中可用服务")) : l.request({
        url: Ge[e] + "/uminiprogram_logs/ckdh",
        success: function (t) {
            200 === (t.code || t.status || t.statusCode) && t.data && 200 === t.data.code ? Ke((Fe = e) + 1, !0) : Ke(e + 1, !1);
        },
        fail: function () {
            Ke(e + 1, !1);
        }
    });
}

function Xe(e) {
    a().v("开始构建 fetch body"), l.getSystemInfo(function (t) {
        l.getNetworkInfo(function (n) {
            n = (n = (n = n || {}).networkType) === Ye.MOBILE_NETWORK_NONE ? "unknown" : n.toUpperCase(),
                Be.access = n, function (e, t) {
                    var n = e.brand || "";
                    Be.deviceType = "Phone", Be.sdkVersion = Ye.SDK_VERSION, Be.appkey = s().appKey(),
                        Be.sdkType = l.getSdkType(), Be.umid = y().getId(), e && (Be.language = e.language || "",
                            Be.os = e.OS, Be.osVersion = e.OSVersion, Be.deviceName = e.deviceName, Be.platformVersion = e.platformVersion,
                            Be.platformSdkVersion = e.platformSDKVersion, Be.deviceBrand = n, e = e.resolution.split("*"),
                            We.isArray(e) && (Be.resolutionHeight = Number(e[0]), Be.resolutionWidth = Number(e[1]))),
                        function (e) {
                            e && (Be.installTime = e.install_datetime && Date.parse(e.install_datetime), Be.scene = e.install_scene,
                                Be.channel = e.install_channel, Be.campaign = e.install_campaign);
                        }(Ee.getImpObj()), t && t(Be);
                }(t, e);
        });
    });
}

function et(e) {
    e && We.each(e, function (e) {
        ze[e.k] = e;
    });
}

function tt() {
    var e = this;
    this.STORAGE_NAME = null, c.on(c.messageType.CONFIG_LOADED, function (t) {
        a().v("云配初始化开始..."), e.init(t);
    });
}

function dt(e) {
    var t, n = {};
    for (t in e) {
        var i = e[t];
        if ("object" == typeof i) for (var r in i) n[t + it + r] = i[r]; else n[t] = i;
    }
    return n;
}

if (Laya.Browser.window.wx) {
    var e, t, r, n = "[UMENG] -- ", a = (t = !1, function () {
        return null === e && (e = new i()), e;
    }), s = (r = e = null, function () {
        return r = r || new o();
    });
    u.prototype.addListener = u.prototype.on = function (e, t) {
        var n = this.listeners;
        n[e] && n[e].length >= this.maxListener ? console.error("监听器的最大数量是%d,您已超出限制", this.maxListener) : n[e] instanceof Array ? -1 === n[e].indexOf(t) && n[e].push(t) : n[e] = [].concat(t);
    }, u.prototype.emit = function (e) {
        var t = Array.prototype.slice.call(arguments);
        t.shift();
        var n = this.listeners;
        n[e] instanceof Array && n[e].forEach(function (e) {
            e.apply(null, t);
        });
    }, u.prototype.listeners = function (e) {
        return this.listeners[e];
    }, u.prototype.setMaxListeners = function (e) {
        this.maxListener = e;
    }, u.prototype.removeListener = function (e, t) {
        var n = this.listeners;
        0 <= (t = (n[e] || []).indexOf(t)) && n[e].splice(t, 1);
    }, u.prototype.removeAllListener = function (e) {
        this.listeners[e] = [];
    }, u.prototype.once = function (e, t) {
        var n = this;
        this.on(e, function i() {
            var r = Array.prototype.slice.call(arguments);
            t.apply(null, r), n.removeListener(e, i);
        });
    };
    var c = new u();
    c.messageType = {
        CONFIG_LOADED: 0,
        UMA_LIB_INITED: 1
    };
    var h, g, O, A, N, R, k, U, b, C, M, x, V, H, Z, $, ee, Ne, Te, we, Re, Le, f = function (e, t) {
        return (f = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t;
        } || function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    }, l = new (function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return p(t, e), t.prototype.getSdkType = function () {
            return "wxgamemp";
        }, t;
    }(function () {
        function e() { }
        return e.prototype.setStorage = function (e, t, n) {
            wx.setStorage({
                key: e,
                data: t,
                success: function () {
                    "function" == typeof n && n(!0);
                },
                fail: function () {
                    "function" == typeof n && n(!1);
                }
            });
        }, e.prototype.getStorage = function (e, t) {
            wx.getStorage({
                key: e,
                success: function (e) {
                    "function" == typeof t && t(e.data);
                },
                fail: function (n) {
                    a().w(e + ": " + n.errMsg), "function" == typeof t && t();
                }
            });
        }, e.prototype.removeStorage = function (e, t) {
            wx.removeStorage({
                key: e,
                success: function () {
                    "function" == typeof t && t(!0);
                },
                fail: function () {
                    "function" == typeof t && t(!1);
                }
            });
        }, e.prototype.getSystemInfo = function (e) {
            wx.getSystemInfo({
                success: function (t) {
                    var n = {
                        model: t.model,
                        brand: t.brand,
                        pixelRatio: t.pixelRatio,
                        screenWidth: t.screenWidth,
                        screenHeight: t.screenHeight,
                        fontSizeSetting: t.fontSizeSetting,
                        platform: t.platform,
                        platformVersion: t.version,
                        platformSDKVersion: t.SDKVersion,
                        language: t.language,
                        deviceName: t.model,
                        OSVersion: t.system,
                        resolution: ""
                    }, i = t.system.split(" ");
                    Array.isArray(i) && (n.OS = i[0]), i = Math.round(t.screenWidth * t.pixelRatio),
                        t = Math.round(t.screenHeight * t.pixelRatio), n.resolution = t < i ? i + "*" + t : t + "*" + i,
                        "function" == typeof e && e(n);
                },
                fail: function () {
                    "function" == typeof e && e();
                }
            });
        }, e.prototype.getDeviceInfo = function (e) {
            "function" == typeof e && e("");
        }, e.prototype.checkNetworkAvailable = function (e) {
            wx.getNetworkType({
                success: function (t) {
                    "function" == typeof e && e(t && "none" !== t.networkType);
                },
                fail: function () {
                    "function" == typeof e && e(!1);
                }
            });
        }, e.prototype.getNetworkInfo = function (e) {
            wx.getNetworkType({
                success: function (t) {
                    "function" == typeof e && e({
                        networkAvailable: "none" !== t.networkType,
                        networkType: t.networkType
                    });
                },
                fail: function () {
                    "function" == typeof e && e();
                }
            });
        }, e.prototype.getDeviceId = function (e) {
            e("");
        }, e.prototype.getAdvertisingId = function (e) {
            "function" == typeof e && e("");
        }, e.prototype.onNetworkStatusChange = function (e) {
            wx.onNetworkStatusChange(function (t) {
                "function" == typeof e && e(t.isConnected);
            });
        }, e.prototype.request = function (e) {
            var t = e.success, n = e.fail, i = !1, r = null;
            e.success = function (e) {
                i || (r && clearTimeout(r), "function" == typeof t && t(e));
            }, e.fail = function () {
                i || (r && clearTimeout(r), "function" == typeof n && n(!1));
            }, wx.request(e), r = setTimeout(function () {
                r && clearTimeout(r), i = !0, "function" == typeof n && n(i);
            }, e.timeout || 5e3);
        }, e.prototype.getSdkType = function () {
            return "wxmp";
        }, e.prototype.getPlatform = function () {
            return "wx";
        }, e.prototype.getUserInfo = function (e) {
            var t = {
                fail: function () {
                    e && e();
                },
                success: function (t) {
                    t && t.userInfo && (t = t.userInfo, e && e({
                        avatar: t.avatarUrl,
                        nickName: t.nickName,
                        gender: t.gender,
                        country: t.country,
                        province: t.province,
                        city: t.city,
                        language: t.language
                    }));
                }
            };
            try {
                wx.getSetting({
                    success: function (e) {
                        e.authSetting["scope.userInfo"] && wx.getUserInfo(t);
                    },
                    fail: function () {
                        e();
                    }
                });
            } catch (e) {
                a.e("getUserInfo error", e);
            }
        }, e.prototype.getAppInfoSync = function () {
            if (wx.getAccountInfoSync) {
                var e = wx.getAccountInfoSync();
                return {
                    appId: (e = e && e.miniProgram ? e.miniProgram : {}).appId,
                    appEnv: e.envVersion,
                    appVersion: e.version
                };
            }
            return {};
        }, e.prototype.onShareAppMessage = function (e) {
            wx.onShareAppMessage(e);
        }, e.prototype.shareAppMessage = function (e) {
            wx.shareAppMessage(e);
        }, e;
    }()))(), d = {
        SESSION_INTERVAL: 3e4,
        LOG_URL: "",// "https://umini.shujupie.com/wxm_logs",
        GET_OPENID_URL: "",// "https://umini.shujupie.com/uminiprogram_logs/wx/getuut",
        USERINFO_URL: "",// "https://umini.shujupie.com/uminiprogram_logs/comm/uif",
        DEVICE_INFO_KEY: "device_info",
        ADVERTISING_ID: "mobile_ad_id",
        ANDROID_ID: "android_id",
        CURRENT_SESSION: "current_session",
        SESSION_PAUSE_TIME: "session_pause_time",
        EVENT_SEND_DEFAULT_INTERVAL: 15e3,
        EVENT_LAST_SEND_TIME: "last_send_time",
        MAX_EVENTID_LENGTH: 128,
        MAX_PROPERTY_KEY_LENGTH: 256,
        MAX_PROPERTY_KEYS_COUNT: 100,
        REPORT_POLICY: "report_policy",
        REPORT_INTERVAL_TIME: "report_interval_time",
        REPORT_POLICY_START_SEND: "1",
        REPORT_POLICY_INTERVAL: "6",
        IMPRINT: "imprint",
        SEED_VERSION: "1.0.0",
        IMPL_VERSION: "2.5.2",
        ALIPAY_AVAILABLE_VERSION: "10.1.52",
        SHARE_PATH: "um_share_path",
        SHARES: "shares",
        REQUESTS: "requests",
        UUID: "um_uuid",
        UUID_SUFFIX: "ud",
        OPENID: "um_od",
        UNIONID: "um_unid",
        ALIPAYID: "um_alipayid",
        USERID: "um_userid",
        PROVIDER: "um_provider",
        SWANID: "um_swanid",
        ANONYMOUSID: "um_anonymousid",
        LAUNCH_OPTIONS: "LAUNCH_OPTIONS",
        UM_SSRC: "_um_ssrc",
        USER_INFO: "user_info",
        IS_ALIYUN: !1,
        ALIYUN_URL: "serverless.huoban.youmeng.network.forward"
    }, v = {
        isNumber: function (e) {
            return !Number.isNaN(parseInt(e, 10));
        },
        compareVersion: function (e, t) {
            for (var n = String(e).split("."), i = String(t).split("."), r = 0; r < Math.max(n.length, i.length); r++) {
                var o = parseInt(n[r] || 0, 10), a = parseInt(i[r] || 0, 10);
                if (a < o) return 1;
                if (o < a) return -1;
            }
            return 0;
        },
        getRandomStr: function (e) {
            for (var t = "", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], i = 0; i < Number(e); i++) t += n[Math.round(Math.random() * (n.length - 1))];
            return t;
        },
        clone: function (e) {
            return JSON.parse(JSON.stringify(e));
        },
        startsWith: function (e, t) {
            return !(!e || !t || 0 === t.length || t.length > e.length) && e.substr(0, t.length) === t;
        },
        endsWith: function (e, t) {
            return !(!t || 0 === e.length || t.length > e.length) && e.substring(e.length - t.length) === t;
        },
        assign: function (e) {
            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (i) for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
            }
            return t;
        },
        deepEqual: function e(t, n) {
            if (t === n) return !0;
            if (t && "object" == typeof t && n && "object" == typeof n) {
                if (Object.keys(t).length !== Object.keys(n).length) return !1;
                for (var i in t) {
                    if (Object.prototype.hasOwnProperty.call(n, i)) return !1;
                    if (!e(t[i], n[i])) return !1;
                }
                return !0;
            }
            return !1;
        },
        trimStart: function (e, t) {
            return e ? ("string" == typeof t && t.length ? (t = new RegExp("^" + t + "*"), e = e.replace(t, "")) : e = e.replace(/^s*/, ""),
                e) : "";
        },
        trimEnd: function (e, t) {
            if (!e) return "";
            var n, i;
            if ("string" == typeof t && t.length) {
                for (n = new RegExp(t), i = e.length; n.test(e.charAt(i));) --i;
                return e.slice(0, i + 1);
            }
            for (n = /s/, i = e.length - 1; n.test(e.charAt(i));) --i;
            return e.slice(0, i + 1);
        },
        isFunction: function (e) {
            return "function" == typeof e;
        }
    }, _ = function (e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return p(t, e), t.prototype.getOpenIdAsync = function (e, t) {
            var n = this;
            wx.login({
                success: function (i) {
                    i.code ? l.request({
                        url: d.GET_OPENID_URL,
                        method: "GET",
                        data: {
                            key: e,
                            code: i.code
                        },
                        success: function (e) {
                            if (e && 200 === e.statusCode && e.data && e.data.data) return e = e.data.data,
                                n.setOpenid(e.oid), n.setUnionid(e.uid), t && t(!0);
                            t && t();
                        },
                        fail: function (e) {
                            a().v("wx request failed...", e), t && t();
                        }
                    }) : t && t();
                },
                fail: function () {
                    t && t();
                }
            });
        }, t;
    }(function (e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._openid = "", t._unionid = "", t._useOpenid = !1, t;
        }
        return p(t, e), t.prototype.initID = function (e) {
            var t = this;
            t._idType = t._useOpenid ? "openid" : "uuid", a().v("id type: ", t._idType), l.getStorage(d.UNIONID, function (e) {
                t._unionid = e;
            }), this._useOpenid ? l.getStorage(d.OPENID, function (n) {
                t._openid = n, e && e();
            }) : e && e();
        }, t.prototype.setUseOpenid = function (e) {
            this._useOpenid = e;
        }, t.prototype.setOpenid = function (e) {
            !this._openid && e && (this._openid = e, l.setStorage(d.OPENID, e));
        }, t.prototype.setUnionid = function (e) {
            !this._unionid && e && (this._unionid = e, l.setStorage(d.UNIONID, e));
        }, t.prototype.getIdTracking = function () {
            var t = e.prototype.getIdTracking.call(this);
            return this._openid && (t.openid = this._openid), this._unionid && (t.unionid = this._unionid),
                this._userid && (t.userid = this._userid), t;
        }, t.prototype.getId = function () {
            return this._useOpenid ? this._openid : this._uuid;
        }, t;
    }(function () {
        function e() {
            this._uuid = "", this._userid = "", this._provider = "", this._idType = "";
        }
        return e.prototype.createUUID = function () {
            return v.getRandomStr(10) + Date.now() + v.getRandomStr(7) + d.UUID_SUFFIX;
        }, e.prototype.initUUID = function (e) {
            var t = this;
            l.getStorage(d.UUID, function (n) {
                n ? t._uuid = n : (t._uuid = t.createUUID(), l.setStorage(d.UUID, t._uuid)), e && e(n);
            });
        }, e.prototype.initUserid = function () {
            var e = this;
            l.getStorage(d.USERID, function (t) {
                !e._userid && t && (e._userid = t, a().v("userId is ", t));
            }), l.getStorage(d.PROVIDER, function (t) {
                !e._provider && t && (e._provider = t, a().v("provider is ", t));
            });
        }, e.prototype.init = function (e) {
            var t = this;
            t.initUUID(function () {
                t.initUserid(), t.initID(e);
            });
        }, e.prototype.setUserid = function (e, t) {
            !this._userid && e && (this._userid = e, this._provider = t, l.setStorage(d.USERID, e),
                l.setStorage(d.PROVIDER, t));
        }, e.prototype.getUserId = function () {
            return this._userid;
        }, e.prototype.getProvider = function () {
            return this._provider;
        }, e.prototype.getIdType = function () {
            return this._idType;
        }, e.prototype.getIdTracking = function () {
            var e = {};
            return this._uuid && (e.uuid = this._uuid), this._userid && (e.userid = this._userid),
                e;
        }, e;
    }())), y = function () {
        return h = h || new _();
    }, m = function () {
        return g = g || new S();
    }, I = {}, T = function () {
        return O = O || new w();
    }, D = {
        stringify: function (e) {
            if (e) try {
                return JSON.stringify(e);
            } catch (e) { }
            return "";
        },
        parse: function (e) {
            if (e) try {
                return JSON.parse(e);
            } catch (e) { }
            return null;
        },
        parseToArray: function (e) {
            if (e) try {
                return JSON.parse(e);
            } catch (e) { }
            return [];
        }
    }, L = (b = !(A = []), function () {
        return R = R || new P();
    }), j = "ekvs", G = 1e4, F = (x = [], V = [], function () {
        return C = C || {
            addEvent: function (e) {
                M ? (x.unshift(e), 1 < x.length && (K(), x.length = 0)) : (a().w("session id is null: ", M),
                    V.unshift(e));
            },
            setSessionId: function (e) {
                if (M = e, a().v("setSessionId: ", M), Array.isArray(V) && V.length && M) {
                    for (var t = 0; t < V.length; t++) this.addEvent(V[t]);
                    V.length = 0;
                }
            },
            getEkvs: function () {
                var e = L().get(j);
                return x && x.length && (e = q(e, x)), e;
            },
            clear: function () {
                L().remove(j), x.length = 0;
            }
        };
    }), Y = "2g", W = "3g", J = "4g", B = {
        HALF_SESSION: "half_session",
        CLOSE_SESSION: "close_session",
        EKV: "ekv",
        ENTER_PAGE: "enter_page",
        LEAVE_PAGE: "leave_page"
    }, X = ["access", "access_subtype"], z = {
        instance: function () {
            return H = H || Q();
        }
    }, te = (ee = $ = Z = H = U = R = O = g = h = null, function () {
        return Z = Z || ne();
    }), re = {
        sessions: "sn",
        ekvs: "e",
        active_user: "active_user"
    }, oe = {
        sdk_type: "sdt",
        access: "ac",
        access_subtype: "acs",
        device_model: "dm",
        language: "lang",
        device_type: "dt",
        device_manufacturer: "dmf",
        device_name: "dn",
        platform_version: "pv",
        id_type: "it",
        font_size_setting: "fss",
        os_version: "ov",
        device_manuid: "did",
        platform_sdk_version: "psv",
        device_brand: "db",
        appkey: "ak",
        _id: "id",
        id_tracking: "itr",
        imprint: "imp",
        sdk_version: "sv",
        resolution: "rl",
        testToken: "ttn"
    }, se = {
        uuid: "ud",
        unionid: "und",
        openid: "od",
        anonymousid: "nd",
        alipay_id: "ad",
        device_id: "dd",
        userid: "puid"
    }, ce = k = N = "", ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _e = function (e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) t[e.charAt(n)] = n;
        return t;
    }(ve), ye = String.fromCharCode, me = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, Se = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g"), Ie = {
        encode: function (e, t) {
            return t ? le(String(e)).replace(/[+\/]/g, function (e) {
                return "+" == e ? "-" : "_";
            }).replace(/=/g, "") : le(String(e));
        },
        decode: function (e) {
            return ge(String(e).replace(/[-_]/g, function (e) {
                return "-" == e ? "+" : "/";
            }).replace(/[^A-Za-z0-9\+\/]/g, ""));
        }
    }, Ee = new function () {
        var e = "", t = this;
        this.set = function (t) {
            e = t;
        }, this.get = function () {
            return e;
        }, this.getImpObj = function () {
            return D.parse(Ie.decode(e));
        }, this.getItem = function (e) {
            var n = t.getImpObj();
            return n && n[e] || "";
        }, this.load = function () {
            e = L().get(d.IMPRINT);
        }, this.save = function () {
            e && L().set(d.IMPRINT, e);
        };
    }(), ke = (Ne = null, Te = !1, we = [], Re = new Ae(50), function () {
        return Ne = Ne || new De();
    }), Pe = (Le = null, function () {
        return Le = Le || new Ce();
    }), Ve = [];
    je.prototype = {
        createMethod: function (e, t, n) {
            try {
                e[t] = n && n[t] ? function () {
                    return n[t].apply(n, arguments);
                } : function () {
                    Ve.push([t, [].slice.call(arguments)]);
                };
            } catch (e) {
                a().v("create method errror: ", e);
            }
        },
        installApi: function (e, t) {
            try {
                for (var n = "resume,pause,trackEvent,trackPageStart,trackPageEnd,trackShare,setUserid,setOpenid,setUnionid,onShareAppMessage,shareAppMessage".split(","), i = 0, r = n.length; i < r; i++) this.createMethod(e, n[i], t);
                if (t) for (i = 0, r = Ve.length; i < r; i++) {
                    var o = Ve[i];
                    try {
                        t[o[0]].apply(t, o[1]);
                    } catch (e) {
                        a().v("impl[v[0]].apply error: ", o[0], e);
                    }
                }
            } catch (e) {
                a().v("install api errror: ", e);
            }
        }
    };
    var Ge = [""],//https://umini.shujupie.com", "https://ulogs.umeng.com
        Fe = 0;
    !function (e) {
        setTimeout(function () {
            Ke(0, !1);
        }, e);
    }(3e3);
    var qe = new je(), He = {
        _inited: !1,
        _log: a(),
        use: function (e, t) {
            return e && v.isFunction(e.install) ? e.install(He, t) : v.isFunction(e) && e(He, t),
                He;
        },
        messager: c,
        init: function (e) {
            if (this._inited) a().v("已经实例过，请避免重复初始化"); else if (e) if (e.appKey) {
                "boolean" != typeof e.useOpenid && (e.useOpenid = !0), s().set(e), a().setDebug(e.debug),
                    this._inited = !0;
                var t = this;
                c.emit(c.messageType.CONFIG_LOADED, e);
                try {
                    var n = new xe();
                    a().v("成功创建Lib对象"), n.init(function () {
                        a().v("Lib对象初始化成功"), qe.installApi(t, n), a().v("安装Lib接口成功"), c.emit(c.messageType.UMA_LIB_INITED, e);
                    });
                } catch (e) {
                    a().w("创建Lib对象异常: " + e);
                }
            } else a().err("请确保传入正确的appkey"); else a().err("请正确设置相关信息！");
        }
    };
    try {
        qe.installApi(He, null);
    } catch (e) {
        a().w("uma赋值异常: ", e);
    }
    var Ye = {
        FETCH_URL: "",// "https://ucc.umeng.com/v1/mini/fetch",
        ABLOG_URL: "",// "https://pslog.umeng.com/mini_ablog",
        SDK_VERSION: "2.5.2",
        MOBILE_NETWORK_NONE: "none",
        MOBILE_NETWORK_2G: "2g",
        MOBILE_NETWORK_3G: "3g",
        MOBILE_NETWORK_4G: "4g",
        MOBILE_NETWORK_5G: "5g",
        MOBILE_NETWORK_WIFI: "wifi",
        IMPRINT: "imprint"
    }, We = {}, Je = Array.isArray;
    We.isArray = Je || function (e) {
        return "[object Array]" === toString.call(e);
    }, We.isObject = function (e) {
        return e === Object(e) && !We.isArray(e);
    }, We.isEmptyObject = function (e) {
        if (We.isObject(e)) {
            for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
            return !0;
        }
        return !1;
    }, We.isUndefined = function (e) {
        return void 0 === e;
    }, We.isString = function (e) {
        return "[object String]" === toString.call(e);
    }, We.isDate = function (e) {
        return "[object Date]" === toString.call(e);
    }, We.isNumber = function (e) {
        return "[object Number]" === toString.call(e);
    }, We.each = function (e, t, n) {
        if (null != e) {
            var i = {}, r = Array.prototype.forEach;
            if (r && e.forEach === r) e.forEach(t, n); else if (e.length === +e.length) {
                for (var o = 0, a = e.length; o < a; o++) if (o in e && t.call(n, e[o], o, e) === i) return;
            } else for (var s in e) if (hasOwnProperty.call(e, s) && t.call(n, e[s], s, e) === i) return;
        }
    }, We.buildQuery = function (e, t) {
        var n, i, r = [];
        return void 0 === t && (t = "&"), We.each(e, function (e, t) {
            n = encodeURIComponent(e.toString()), i = encodeURIComponent(t), r[r.length] = i + "=" + n;
        }), r.join(t);
    }, We.JSONDecode = function (e) {
        if (e) {
            try {
                return JSON.parse(e);
            } catch (e) {
                console.error("JSONDecode error", e);
            }
            return null;
        }
    }, We.JSONEncode = function (e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            console.error("JSONEncode error", e);
        }
    };
    var Be = Object.create(null), ze = Object.create(null), Qe = null, Ze = !1, $e = {
        minFetchIntervalSeconds: 43200
    };
    tt.prototype = {
        setDefaultValues: function (e) {
            Ze && We.isObject(e) && We.each(e, function (e, t) {
                ze[t] && ze[t].v || (ze[t] = {
                    v: e
                });
            });
        },
        getValue: function (e) {
            a().v("从配置项中读取 value, 当前配置为: ", ze), a().v("待读取的 key : ", e);
            try {
                if (!Ze) return;
                var t = ze[e] || {};
                return a().v("读取相应配置ing..., 结果为: ", t), We.isNumber(t.e) && We.isNumber(t.g) && (a().v("读取到相应配置, 开始数据上报..."),
                    function (e) {
                        var t = {
                            appkey: s().appKey(),
                            sdkType: l.getSdkType(),
                            expId: e && e.e,
                            groupId: e && e.g,
                            clientTs: Date.now(),
                            key: e && e.k,
                            value: e && e.v,
                            umid: y().getId()
                        };
                        try {
                            l.request({
                                url: Ye.ABLOG_URL,
                                method: "POST",
                                data: [t],
                                success: function (e) {
                                    e && 200 === e.statusCode ? a().v("上传数据成功", t) : a().w("ablog 请求成功, 返回结果异常 ", e);
                                },
                                fail: function (e) {
                                    a().w("ablog 请求数据错误 ", t, e);
                                }
                            });
                        } catch (e) {
                            a().w("urequest 调用错误", e);
                        }
                    }(t)), t.v;
            } catch (t) {
                a().w("getValue error, key: ", e);
            }
        },
        active: function (e) {
            try {
                if (!Ze) return;
                var t, n;
                e && e.params && (t = e.params), e && e.callback && (n = e.callback), a().v("激活配置项: ", t),
                    t ? (a().v("本地已缓存的配置项: ", ze), et(t), a().v("合并后的配置项: ", ze), n && n(ze), a().v("active 结束")) : (a().v("配置项为空!! 读取本地配置..."),
                        l.getStorage(this.STORAGE_NAME, function (e) {
                            e ? (et((e = We.JSONDecode(e) || {}).params), a().v("当前本地配置项为: ", ze), n && n(ze),
                                a().v("active 结束")) : a().v("当前本地配置项为空, 退出激活");
                        }));
            } catch (e) {
                a().w("SDK active 错误", e);
            }
        },
        init: function (e) {
            e.appKey && (Qe = e.appKey, this.STORAGE_NAME = "um_remote_config_{{" + Qe + "}}"),
                Qe ? Ze ? a().w("SDK 已经初始化, 请避免重复初始化") : (Ze = !0, this.setOptions(e), this.active()) : a().err("请检查您的小程序 appKey, appKey 不能为空");
        },
        setOptions: function (e) {
            We.isObject(e) && (e = e.minFetchIntervalSeconds, We.isNumber(e) && ($e.minFetchIntervalSeconds = Math.max(e, 5)));
        },
        fetch: function (e) {
            if (Ze && this.STORAGE_NAME) {
                var t, n;
                e && e.active && (t = e.active), e && e.callback && (n = e.callback);
                var i = this;
                l.getStorage(this.STORAGE_NAME, function (e) {
                    a().v("开始读缓存 data is ", e), (e = We.JSONDecode(e) || {}).params && e.ts && Date.now() - e.ts < 1e3 * $e.minFetchIntervalSeconds ? (a().v("缓存数据存在, 并且本次触发时间距离上次fetch触发时间未超过 fetch 时间间隔, 无需 fetch"),
                        n && n(e.params)) : Xe(function (e) {
                            a().v("缓存数据不存在, 构建 fetch body :", e);
                            try {
                                l.request({
                                    url: Ye.FETCH_URL,
                                    method: "POST",
                                    data: e,
                                    success: function (e) {
                                        if (e && 200 === e.statusCode && e.data && e.data.cc) {
                                            a().v("fetch 请求成功, 响应数据: ", e.data);
                                            var r = Object.create(null);
                                            We.each(e.data.cc, function (e) {
                                                r[e.k] = e;
                                            });
                                            var o = {
                                                ts: Date.now(),
                                                params: r
                                            };
                                            a().v("开始缓存 fetch 请求的云配置结果..."), l.setStorage(i.STORAGE_NAME, We.JSONEncode(o), function (e) {
                                                a().v("缓存云配置成功, 缓存数据为: ", o), a().v("缓存云配置成功, 成功消息为: ", e), a().v("云配拉取数据是否自动激活: ", t),
                                                    e && t && (a().v("激活云配置..."), i.active({
                                                        params: r,
                                                        callback: n
                                                    }));
                                            });
                                        } else a().w("fetch 请求成功,返回结果异常 ", e.data), n && n();
                                    },
                                    fail: function (t) {
                                        a().w("fetch请求数据错误 ", e, t), n && n();
                                    }
                                });
                            } catch (e) {
                                a().w("urequest调用错误", e);
                            }
                        });
                });
            }
        }
    };
    var nt = {
        install: function (e, t) {
            return e.rc || (e.rc = new tt()), e.messager.on(e.messager.messageType.CONFIG_LOADED, function () {
                e._log.v("plugin rc installed");
            }), e.rc;
        }
    }, it = ".", rt = "_um", ot = "revenue", st = "stage", at = "level", ut = "running", ct = "end", ft = "init", pt = "set", lt = [rt, st, "start"].join(it);
    Je = {
        install: function (e, t) {
            e.revenue = function (t) {
                e.trackEvent([rt, ot, t.group].join(it), dt(t));
            };
            var n = 0;
            return e.stage = {
                onStart: function (t) {
                    n = Date.now(), e.trackEvent(lt, dt(t));
                },
                onEnd: function (t) {
                    "number" != typeof t._um_sdu && (t._um_sdu = 0 !== n ? Date.now() - n : 0), e.trackEvent([rt, st, ct, t.event].join(it), dt(t));
                },
                onRunning: function (t) {
                    e.trackEvent([rt, st, ut, t.event].join(it), dt(t));
                }
            }, e.level = {
                onInitLevel: function (t) {
                    e.trackEvent([rt, at, ft].join(it), dt(t));
                },
                onSetLevel: function (t) {
                    e.trackEvent([rt, at, pt].join(it), dt(t));
                }
            }, e.messager.on(e.messager.messageType.CONFIG_LOADED, function () {
                e._log.v("plugin game_ext installed");
            }), e;
        }
    }, wx.onShow(function (e) {
        a().v("game onShow: ", e), t = e.query, I = t;
        var t;
        He.resume(e, !0);
    }), wx.onHide(function () {
        a().v("game onHide"), He.pause();
    });
    var ht = He.init;
    He.init = function (e) {
        e && e.useOpenid && (a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"),
            a().tip_w("您选择了使用openid进行统计，请确保使用setOpenid回传openid或通过设置autoGetOpenid为true，并在友盟后台设置secret由友盟帮您获取"),
            a().tip_w("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")),
            ht.call(He, e);
    }, He.use(nt), He.use(Je), wx.uma = He, module.exports = He;
}