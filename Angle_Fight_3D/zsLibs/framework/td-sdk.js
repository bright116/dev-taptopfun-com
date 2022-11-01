var _interopRequireDefault = requirea("../../@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(requirea("../../@babel/runtime/helpers/typeof"));

window.TDCORE = function() {
    var e = zs.td.appKey, n = zs.td.appName, o = zs.td.versionName || "", i = zs.td.versionName || "", a = zs.td.channel, r = "";// https://h5.udrig.com/app/v1
    window.sessionStorage || (window.sessionStorage = {}, sessionStorage.setItem = function(e, t) {
        sessionStorage[e] = t;
    }, sessionStorage.getItem = function(e) {
        return sessionStorage[e];
    }, sessionStorage.removeItem = function(e) {
        sessionStorage[e] && delete sessionStorage[e];
    }), sessionStorage.clear && sessionStorage.clear(), function() {
        "use strict";
        var s = "function" == typeof Symbol && "symbol" == (0, _typeof2.default)(Symbol.iterator) ? function(e) {
            return (0, _typeof2.default)(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0, 
            _typeof2.default)(e);
        }, c = function(t) {
            var n, o, i = 0, a = t.document, r = /^(?:text|application)\/javascript/i, c = /^(?:text|application)\/xml/i, d = "application/json", l = "text/html", u = /^\s*$/, p = function e(i) {
                var a = A({}, i || {});
                for (n in e.settings) {
                    void 0 === a[n] && (a[n] = e.settings[n]);
                }
                (f = a).global && 0 == p.active++ && S(f), a.crossDomain || (a.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(a.url) && RegExp.$2 != t.location.host);
                var s = a.dataType;
                i = /=\?/.test(a.url);
                if ("jsonp" == s || i) return i || (a.url = P(a.url, "callback=?")), e.JSONP(a);
                a.url || (a.url = t.location.toString()), D(a);
                var g, f = a.accepts[s], m = (i = {}, /^([\w-]+:)\/\//.test(a.url) ? RegExp.$1 : t.location.protocol), v = e.settings.xhr();
                for (o in a.crossDomain || (i["X-Requested-With"] = "XMLHttpRequest"), f && (-1 < (i.Accept = f).indexOf(",") && (f = f.split(",", 2)[0]), 
                v.overrideMimeType && v.overrideMimeType(f)), (a.contentType || a.data && "GET" != a.type.toUpperCase()) && (i["Content-Type"] = a.contentType || "application/x-www-form-urlencoded"), 
                a.headers = A(i, a.headers || {}), v.onreadystatechange = function() {
                    if (4 == v.readyState) {
                        clearTimeout(g);
                        var e, t = !1;
                        if (200 <= v.status && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == m) {
                            s = s || (n = v.getResponseHeader("content-type")) && (n == l ? "html" : n == d ? "json" : r.test(n) ? "script" : c.test(n) && "xml") || "text", 
                            e = v.responseText;
                            try {
                                "script" == s ? (0, eval)(e) : "xml" == s ? e = v.responseXML : "json" == s && (e = u.test(e) ? null : JSON.parse(e));
                            } catch (e) {
                                t = e;
                            }
                            t ? h(t, "parsererror", v, a) : T(e, v, a);
                        } else h(null, "error", v, a);
                    }
                    var n;
                }, i = !("async" in a) || a.async, v.open(a.type, a.url, i), a.headers) {
                    v.setRequestHeader(o, a.headers[o]);
                }
                return !1 === function(e, t) {
                    var n = t.context;
                    if (!1 === t.beforeSend.call(n, e, t) || !1 === S(t)) return !1;
                    S(t);
                }(v, a) ? (v.abort(), !1) : (0 < a.timeout && (g = setTimeout(function() {
                    v.onreadystatechange = w, v.abort(), h(null, "timeout", v, a);
                }, a.timeout)))
                //, v.send(a.data || null), v);
            };
            function S(e) {
                if (e.global) return !0;
            }
            function T(e, t, n) {
                var o = n.context, i = "success";
                n.success.call(o, e, i, t), S(n), y(i, t, n);
            }
            function h(e, t, n, o) {
                var i = o.context;
                o.error.call(i, n, t, e), S(o), y(t, n, o);
            }
            function y(e, t, n) {
                var o = n.context;
                n.complete.call(o, t, e), S(n), (n = n).global && !--p.active && S(n);
            }
            function w() {}
            function P(e, t) {
                return (e + "&" + t).replace(/[&?]{1,2}/, "?");
            }
            function D(e) {
                var t, n;
                "object" === s(e.data) && (e.data = (t = e.data, (n = []).add = function(e, t) {
                    this.push(g(e) + "=" + g(t));
                }, function e(t, n, o, i) {
                    var a = "array" == typeof n;
                    for (var r in n) {
                        var c = n[r];
                        i && (r = o ? i : i + "[" + (a ? "" : r) + "]"), !i && a ? t.add(c.name, c.value) : (o ? "array" == typeof c : "object" === (void 0 === c ? "undefined" : s(c))) ? e(t, c, o, r) : t.add(r, c);
                    }
                }(n, t, void 0), n.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = P(e.url, e.data));
            }
            p.active = 0, p.JSONP = function(e) {
                if (!("type" in e)) return p(e);
                var n, o = "jsonp" + ++i, r = a.createElement("script"), s = {
                    abort: function abort() {
                        o in t && (t[o] = w), y("abort", s, e);
                    }
                }, c = a.getElementsByTagName("head")[0] || a.documentElement;
                return e.error && (r.onerror = function() {
                    s.abort(), e.error();
                }), t[o] = function(i) {
                    clearTimeout(n), delete t[o], T(i, s, e);
                }, D(e), r.src = e.url.replace(/=\?/, "=" + o), c.insertBefore(r, c.firstChild), 
                0 < e.timeout && (n = setTimeout(function() {
                    s.abort(), y("timeout", s, e);
                }, e.timeout)), s;
            }, p.settings = {
                type: "GET",
                beforeSend: w,
                success: w,
                error: w,
                complete: w,
                context: null,
                global: !0,
                xhr: function xhr() {
                    return new t.XMLHttpRequest();
                },
                accepts: {
                    script: "text/javascript, application/javascript",
                    json: d,
                    xml: "application/xml, text/xml",
                    html: l,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0
            }, p.get = function(e, t) {
                return p({
                    url: e,
                    success: t
                });
            }, p.post = function(e, t, n, o) {
                return "function" == typeof t && (o = o || n, n = t, t = null), p({
                    type: "POST",
                    url: e,
                    data: t,
                    success: n,
                    dataType: o
                });
            }, p.getJSON = function(e, t) {
                return p({
                    url: e,
                    success: t,
                    dataType: "json"
                });
            };
            var g = encodeURIComponent;
            function A(e) {
                return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                    for (n in t) {
                        void 0 !== t[n] && (e[n] = t[n]);
                    }
                }), e;
            }
            return {
                ajax: p
            };
        }(window), d = {
            deviceId: "",
            appkey: e || "",
            appProfile: {
                versionName: o || "",
                versionCode: i || "",
                initTime: "",
                sdkVersion: "H5+APP+v1.0.5",
                partner: ""
            },
            deviceProfile: {
                pixel: "",
                language: navigator.language,
                timezone: new Date().getTimezoneOffset() / 60 * -1
            },
            msgs: []
        }, l = {
            type: 2,
            data: {
                id: "",
                start: 0,
                duration: 0
            }
        }, u = {}, p = new Date().getTime(), g = function g(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
        };
        function t(e, t, n) {
            if (void 0 === t) {
                var o = null;
                if (document.cookie && "" != document.cookie) for (var i = document.cookie.split(";"), a = 0; a < i.length; a++) {
                    var r = i[a];
                    if (r.substring(0, e.length + 1) == e + "=") {
                        o = decodeURIComponent(r.substring(e.length + 1));
                        break;
                    }
                }
                return o;
            }
            n = n || {}, null === t && (t = "", n.expires = -1);
            var s = "";
            n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (d = new Date()).setTime(d.getTime() + 24 * n.expires * 60 * 60 * 1e3) : d = n.expires, 
            s = "; expires=" + d.toUTCString());
            var c = n.path ? "; path=" + n.path : "", d = n.domain ? "; domain=" + n.domain : "";
            n = n.secure ? "; secure" : "";
            document.cookie = [ e, "=", encodeURIComponent(t), s, c, d, n ].join("");
        }
        u.localStorage = {
            add: function add(e, t) {
                this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t);
            },
            get: function get(e) {
                return this.getLocalStorage(e) || this._getCookie(e);
            },
            create: function create() {
                t("__TD_LOCAL") || (this._addCookie(""), window.localStorage);
            },
            addCookie: function addCookie(e, t) {
                if (!window.localStorage) {
                    this.create();
                    var n = this.cookieList();
                    n[e] = t;
                    var o, i = [];
                    for (o in n) {
                        i.push(o + "=" + n[o]);
                    }
                    this._addCookie(i.join(";"));
                }
            },
            _setCookie: function _setCookie() {
                this.cookieList(), t("__TD_LOCAL", "", {
                    expires: 1095,
                    path: "/",
                    domain: location.hostname
                });
            },
            _addCookie: function _addCookie(e) {
                t("__TD_LOCAL", e, {
                    expires: 1095,
                    path: "/",
                    domain: location.hostname
                });
            },
            _getCookie: function _getCookie(e) {
                var t = this.cookieList();
                if (t && t[e]) return t[e];
            },
            delCookie: function delCookie(e) {},
            cookieList: function cookieList() {
                var e = t("__TD_LOCAL");
                return this.format(e);
            },
            addLocalStorage: function addLocalStorage(e, t) {
                window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.setItem("__TD_" + e, t) : localStorage.setItem("__TD_" + e, t));
            },
            delLocalStorage: function delLocalStorage(e) {
                window.localStorage && localStorage.removeItem("__TD_" + e);
            },
            getLocalStorage: function getLocalStorage(e) {
                if (window.localStorage) return "sessionId" == e && window.sessionStorage ? sessionStorage.getItem("__TD_" + e) : localStorage.getItem("__TD_" + e);
            },
            format: function format(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split(";"), o = n.length, i = 0; i < o; i++) {
                    var a = n[i].split("=");
                    2 == a.length && (t[a[0]] = a[1]);
                }
                return t;
            }
        }, u.sessionStorage = {
            add: function add(e, t) {
                window.sessionStorage && sessionStorage.setItem("__TD_" + e, t);
            },
            get: function get(e) {
                return sessionStorage.getItem("__TD_" + e);
            },
            remove: function remove(e) {
                sessionStorage.removeItem("__TD_" + e);
            }
        };
        var f, v, I, E, _, x = !0, O = !1;
        function m() {
            this.url = r, this.opts = {}, this.requestArray = new Array();
        }
        m.prototype = {
            getAjax: function getAjax(e, t, n, o, i) {
                var a, r, s;
                a = {
                    url: this.url,
                    type: "POST",
                    param: JSON.stringify(n),
                    success: o
                }, 0 < navigator.userAgent.indexOf("MSIE 9.0") ? "MSIE6.0" == (r = navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) || "MSIE7.0" == r ? alert("no support IE6,IE7") : window.XDomainRequest && ((s = new XDomainRequest()) ? (a.error && "function" == typeof a.error && (s.onerror = function() {
                    a.error();
                }), a.timeout && "function" == typeof a.timeout && (s.ontimeout = function() {
                    a.timeout();
                }), a.success && "function" == typeof a.success && (s.onload = function() {
                    a.dataType ? "json" == a.dataType.toLowerCase() && a.success(JSON.parse(s.responseText)) : a.success(s.responseText);
                }), s.open(a.type, a.url), s.send(a.param)) : alert("Failed to create XDomainRequest")) : x ? (b.add("td-unique", "true"), 
                x = !1, f = c.ajax({
                    type: e,
                    url: t,
                    data: JSON.stringify(n),
                    dataType: "text",
                    success: o,
                    error: i,
                    complete: function complete() {
                        x = !(f = void 0), O && (C.getAjax(), O = !1), b.delLocalStorage("td-unique");
                    }
                })) : O = !0;
            },
            set: function set(e, t, n) {
                this.opts = e, this.send(t, n);
            },
            send: function send(e, t) {
                this.getAjax("post", this.url, this.opts, e, t);
            }
        }, (v = window).TDBASE = v.TDBASE || {}, TDBASE.cacheName = "cacheList", TDBASE.unique = function(e) {
            e.sort();
            for (var t = [ e[0] ], n = 1; n < e.length; n++) {
                e[n] !== t[t.length - 1] && t.push(e[n]);
            }
            return t;
        }, TDBASE.getArgs = function() {
            return {};
        }, TDBASE.getCommon = function(e) {
            var t = b.get("appkey") ? b.get("appkey") : d.appkey;
            e = {
                deviceId: d.deviceId,
                appkey: t,
                appProfile: d.appProfile,
                deviceProfile: d.deviceProfile,
                msgs: e.msg
            };
            return d.appContext && (e.appContext = d.appContext), e;
        }, TDBASE.getCommonMsg = function(e, t, n, o, i, a) {
            return {
                type: 2,
                data: {
                    id: e,
                    start: t,
                    status: n,
                    duration: o || 0,
                    pages: a ? [ a ] : [],
                    events: i || []
                }
            };
        }, TDBASE.addSessionStart = function(e, t) {
            b.add("lastSession", JSON.stringify({
                id: l.data.id,
                start: l.data.start
            })), n = (n = b.get("td-hold-event")) && JSON.parse(n);
            var n = TDBASE.getCommonMsg(l.data.id, l.data.start, t, e, n);
            TDBASE.addMsg(n), b.delLocalStorage("td-hold-event");
        }, TDBASE.equal = function(e, t) {
            if ((void 0 === e ? "undefined" : s(e)) != (void 0 === t ? "undefined" : s(t))) return !1;
            if (s(e.length) != s(t.length)) return !1;
            var n = !0, o = [], i = [];
            for (a in e) {
                "count" === a || "start" === a || o.push(a);
            }
            for (a in t) {
                "count" === a || "start" === a || i.push(a);
            }
            if (o.length != i.length) return !1;
            for (var a = 0, r = i.length; a < r; a++) {
                o.push(i[a]);
            }
            var c = TDBASE.unique(o);
            for (a = 0, r = c.length; a < r; a++) {
                if (!(c[a] in e && c[a] in t)) return !1;
                if ("object" == s(e[c[a]]) && "object" == s(t[c[a]])) n = TDBASE.equal(e[c[a]], t[c[a]]); else if (e[c[a]] !== t[c[a]]) return !1;
            }
            return n;
        }, TDBASE.addGenre = function(e, t, n) {
            if (b.get("sessionMsg")) {
                n && n(e);
                var o = (n = JSON.parse(b.get("sessionMsg"))).msg[n.msg.length - 1].data[t];
                if ("events" !== t) o.push(e), b.add("sessionMsg", JSON.stringify(n)); else {
                    if (0 != o.length) {
                        for (var i = !1, a = 0; a < o.length; a++) {
                            if (TDBASE.equal(o[a], e)) {
                                i = !0, o[a].count += 1, o[a].start = e.start;
                                break;
                            }
                        }
                        i || o.push(e);
                    } else o.push(e);
                    b.add("sessionMsg", JSON.stringify(n));
                }
            }
        }, TDBASE.lealSet = function(e) {
            b.add("leavetime", e), b.add("leaveSession", parseInt((e - k.get("SessionStart")) / 1e3));
        }, TDBASE.addMsg = function(e) {
            var t;
            b.get("sessionMsg") ? ((t = JSON.parse(b.get("sessionMsg"))).msg.push(e), b.add("sessionMsg", JSON.stringify(t))) : b.add("sessionMsg", JSON.stringify({
                msg: [ e ]
            }));
        }, (I = {
            autoTrack: !0,
            currentPage: null,
            pageStartTime: 0,
            ref: "",
            logoutCalled: !1,
            init: function init() {
                for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                    var n = e[t].getAttribute("td-autoTrack");
                    if ("false" === n || !1 === n) {
                        I.autoTrack = !1;
                        break;
                    }
                }
                g(window, "pagehide", I.pageLogout), g(window, "beforeunload", I.pageLogout), window.TDAPP = window.TDAPP || {}, 
                window.TDAPP.onPage = I.onPage, I.autoTrack && (I.currentPage = window.location.href, 
                I.ref = document.referrer);
            },
            onPage: function onPage(e) {
                I.pageLogout("force"), I.ref = I.currentPage, I.currentPage = e, I.pageStartTime = new Date().getTime();
            },
            pageLogout: function pageLogout(e) {
                if ("force" !== e) {
                    if (I.logoutCalled) return;
                    I.logoutCalled = !0;
                }
                var t = null, n = 0, o = null;
                if (I.autoTrack) t = I.currentPage || window.location.href, n = I.pageStartTime || p, 
                o = I.ref || document.referrer; else {
                    if (!I.currentPage) return;
                    t = I.currentPage, n = I.pageStartTime, o = I.ref || document.referrer;
                }
                var i = new Date().getTime();
                TDBASE.lealSet(i), TDBASE.addGenre({
                    name: t,
                    start: n,
                    duration: parseInt((i - n) / 1e3),
                    refer: o
                }, "pages"), "force" === e && C.getAjax();
            }
        }).init(), E = {
            init: function init() {
                try {
                    var e = u.localStorage.get("profile");
                    e && (e = JSON.parse(e), e = E._transform(e), d.appContext = d.appContext || {}, 
                    d.appContext.account = e);
                } catch (e) {
                    console.error(e);
                }
            },
            _transform: function _transform(e) {
                return (e = JSON.parse(JSON.stringify(e))).accountId = e.profileId, e.type = e.profileType, 
                delete e.profileType, delete e.profileId, e;
            },
            login: function login(e) {
                E._event(e, "login");
            },
            register: function register(e) {
                E._event(e, "register");
            },
            _event: function _event(e, t) {
                var n;
                e.profileId || /0{1}/.test(e.profileId) ? "number" != typeof e.profileType || e.profileType != e.profileType || e.profileType < -1 || 6 < e.profileType && e.profileType < 11 || 20 < e.profileType ? console.warn("请上传正确的profileType") : ((n = E._transform(e)).type = TDAPP.ProfileType[e.profileType] || "", 
                e.profileType = n.type, d.appContext = d.appContext || {}, d.appContext.account = n, 
                N.setProfile(n, t), u.localStorage.add("profile", JSON.stringify(e))) : console.warn("profileId为必填字段！");
            }
        }, window.TDAPP = window.TDAPP || {}, window.TDAPP.login = E.login, window.TDAPP.register = E.register, 
        window.TDAPP.ProfileType = {
            0: "ANONYMOUS",
            1: "REGISTERED",
            2: "SINA_WEIBO",
            3: "QQ",
            4: "QQ_WEIBO",
            5: "ND91",
            6: "WEIXIN",
            11: "TYPE1",
            12: "TYPE2",
            13: "TYPE3",
            14: "TYPE4",
            15: "TYPE5",
            16: "TYPE6",
            17: "TYPE7",
            18: "TYPE8",
            19: "TYPE9",
            20: "TYPE10"
        }, E.init(), _ = {
            isObject: function isObject(e) {
                return e && "object" === (void 0 === e ? "undefined" : s(e));
            },
            isStrNotEmpty: function isStrNotEmpty(e) {
                return e || /0{1}/.test(e);
            },
            isNumber: function isNumber(e) {
                return "number" == typeof e && e == e;
            },
            isCurrencyTypeAvailabal: function isCurrencyTypeAvailabal(e) {
                return e && "string" == typeof e && 3 === e.length;
            },
            _checkParam: function _checkParam(e) {
                return _.isObject(e) ? _.isStrNotEmpty(e.orderId) ? _.isNumber(e.amount) ? !!_.isCurrencyTypeAvailabal(e.currencyType) || (console.warn("请输入正确的currencyType!"), 
                !1) : (console.warn("请输入正确的amount!"), !1) : (console.warn("请输入正确的orderId!"), !1) : (console.warn("请输入正确的参数!"), 
                !1);
            },
            onPlaceOrder: function onPlaceOrder(e) {
                _._checkParam(e) && (e = {
                    count: 1,
                    start: new Date().getTime(),
                    domain: "iap",
                    id: "placeOrder",
                    params: e
                }, N._saveAndFetch(e));
            },
            onOrderPaySucc: function onOrderPaySucc(e) {
                _._checkParam(e) && ((e = JSON.parse(JSON.stringify(e))).paymentType && _.isStrNotEmpty(e.paymentType) && (e.payType = e.paymentType), 
                delete e.paymentType, e = {
                    count: 1,
                    start: new Date().getTime(),
                    domain: "iap",
                    id: "pay",
                    params: e
                }, N._saveAndFetch(e));
            },
            onCancelOrder: function onCancelOrder(e) {
                _._checkParam(e) && (e = {
                    count: 1,
                    start: new Date().getTime(),
                    domain: "iap",
                    id: "cancelOrder",
                    params: e
                }, N._saveAndFetch(e));
            }
        }, window.TDAPP = window.TDAPP || {}, window.TDAPP.onPlaceOrder = _.onPlaceOrder, 
        window.TDAPP.onOrderPaySucc = _.onOrderPaySucc, window.TDAPP.onCancelOrder = _.onCancelOrder;
        var b = u.localStorage, k = u.sessionStorage, C = {
            timedif: void 0,
            state: 1,
            deviceId: 0,
            sessionId: 0,
            local: [],
            sendInit: 0,
            set: function set() {
                try {
                    this.setDeviceId(), this.setSession(), this.setSessionTime(), this.setInitTime(), 
                    this.setPartner(), this.setResolution(), this.addlastSession(), this.getAjax(1);
                } catch (e) {
                    console.log(e);
                }
            },
            setDeviceId: function setDeviceId() {
                var e = a ? a.toUpperCase() : "ZS";
                if (b.get("deviceId")) this.deviceId = b.get("deviceId") + "-" + e; else {
                    this.sendInit = 1;
                    for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), n = [], o = t.length, i = 0; i < 16; i++) {
                        n[i] = t[0 | Math.random() * o];
                    }
                    this.deviceId = n.join(""), b.add("deviceId", this.deviceId), this.deviceId = this.deviceId + "-" + e;
                }
                d.deviceId = this.deviceId;
            },
            setSession: function setSession() {
                var e, t;
                if (k.get("sessionId") && b.get("appkey") == d.appkey ? t = k.get("sessionId") : (e = new Date().getTime(), 
                t = -1 < this.deviceId.indexOf("-") ? this.deviceId.split("-")[0] + e : this.deviceId + e, 
                this.sendInit = 0 == this.sendInit ? 2 : this.sendInit, k.add("sessionId", t)), 
                0 < 32 - t.length) for (var n = 0, o = 32 - t.length; n < o; n++) {
                    t += "0";
                }
                32 - t.length < 0 && (t = t.substring(0, 32)), l.data.id = this.sessionId = t;
            },
            setSessionTime: function setSessionTime() {
                var e = new Date().getTime();
                k.get("SessionStart") && b.get("appkey") == d.appkey ? e = k.get("SessionStart") : k.add("SessionStart", e), 
                l.data.start = parseInt(e);
            },
            setInitTime: function setInitTime() {
                b.get("initTime") ? d.appProfile.initTime = parseInt(b.get("initTime")) : (d.appProfile.initTime = p, 
                b.add("initTime", p));
            },
            setPartner: function setPartner() {
                var e = k.get("td_channel"), t = a;
                n && "" != n && (t += "-" + n), e ? d.appProfile.partner = e : null != t && (k.add("td_channel", t), 
                d.appProfile.partner = t);
            },
            setResolution: function setResolution() {
                var e = [ window.screen.width, window.screen.height ];
                window.devicePixelRatio && e.push(window.devicePixelRatio), d.deviceProfile.pixel = e.join("*");
            },
            addlastSession: function addlastSession() {
                var e = b.get("lastSession");
                void 0 === e && (b.delLocalStorage("sessionMsg"), b.delLocalStorage("lastSession")), 
                e ? (e = JSON.parse(e)).id != l.data.id && (e = TDBASE.getCommonMsg(e.id, e.start, 3, parseInt(b.get("leaveSession"))), 
                TDBASE.addMsg(e), this.timedif = parseInt((l.data.start - b.get("leavetime")) / 1e3), 
                b.get("appkey") && b.get("appkey") != d.appkey || (TDBASE.addSessionStart(this.timedif, 1), 
                this.addAppInitEvent())) : (TDBASE.addSessionStart(0, 1), this.addAppInitEvent());
            },
            addAppInitEvent: function addAppInitEvent() {
                var e;
                0 != this.sendInit && (e = {
                    id: "init",
                    domain: "app",
                    start: p || new Date().getTime(),
                    count: 1,
                    params: {
                        first: !0
                    }
                }, 2 == this.sendInit && (e.params.first = !1), TDBASE.addGenre(e, "events"));
            },
            checkSession: function checkSession() {
                var e = JSON.parse(b.get("sessionMsg"));
                var t = !1;
                for (var _n = 0, _o = e.msg.length; _n < _o; _n++) {
                    if (e.msg[_n].data.events.length > 0) {
                        t = !0;
                        break;
                    }
                }
                t && setTimeout(function() {
                    C.getAjax();
                }, 500);
            },
            getAjax: function getAjax(e) {
                var t = this, n = new m();
                localStorage.getItem("__TD_sessionMsg") || TDBASE.addSessionStart(0, 2);
                var o, i = JSON.parse(b.get("sessionMsg")), a = TDBASE.getCommon(i), r = localStorage.getItem("__TD_td-init-event");
                !r || (o = a.msgs[a.msgs.length - 1]) && (i = o.data.events, o.data.events = i.concat(JSON.parse(r))), 
                b.delLocalStorage("td-init-event");
                for (var s = [], c = 0; c < a.msgs.length; c++) {
                    var l = a.msgs[c];
                    (2 !== l.data.status || l.data.pages && 0 !== l.data.pages.length || l.data.events && 0 !== l.data.events.length) && s.push(l);
                }
                0 !== s.length && (a.msgs = s, b.get("appkey") && b.get("appkey") != d.appkey ? n.set(a, function(e) {
                    console.log("td reported!"), b.delLocalStorage("sessionMsg"), d.appProfile.initTime = p, 
                    b.add("initTime", p), TDBASE.addSessionStart(0, 1), t.addAppInitEvent(), t.getAjax();
                }, function(e) {
                    console.log(e);
                }) : n.set(a, function(e) {
                    console.log("td reported!"), b.delLocalStorage("sessionMsg"), TDBASE.addSessionStart(0, 2), 
                    C.checkSession();
                }, function(e) {
                    console.log(e);
                }), b.add("appkey", d.appkey));
            }
        };
        C.set();
        var N = {
            set: function set(e, t, n, o) {
                var i;
                if (console.log("td report:", e), e || /0{1}/.test(e)) {
                    if (0 < arguments.length) try {
                        var a = {
                            count: 1,
                            start: new Date().getTime()
                        };
                        if (null != e && (a.id = "string" != typeof e ? JSON.stringify(e) : e), a.label = null != t ? "string" != typeof t ? JSON.stringify(t) : t : "", 
                        null != n && ("object" != (void 0 === (i = n) ? "undefined" : s(i)) || "[object object]" != Object.prototype.toString.call(i).toLowerCase() || i.length || (a.params = n)), 
                        o && "smart" === o) a.type = "smart"; else if (void 0 !== o) {
                            if ("number" != typeof o || isNaN(o)) return void console.error("value只能为number");
                            a.value = o;
                        }
                        N._saveAndFetch(a);
                    } catch (e) {}
                } else console.warn("event  Id为必填字段！");
            },
            setProfile: function setProfile(e, t) {
                e = {
                    count: 1,
                    start: new Date().getTime(),
                    domain: "account",
                    id: t,
                    params: e
                }, N._saveAndFetch(e);
            },
            _saveAndFetch: function _saveAndFetch(e) {
                f ? TDBASE.addGenre(e, "events", function(e) {
                    var t = b.get("td-hold-event"), n = [];
                    if (n.push(e), t) {
                        t = JSON.parse(t);
                        for (var o = 0; o < t.length; o++) {
                            if (TDBASE.equal(t[o], e)) {
                                t[o].count += 1, t[o].start = e.start;
                                break;
                            }
                        }
                        b.add("td-hold-event", JSON.stringify(t));
                    } else b.add("td-hold-event", JSON.stringify(n));
                }) : (TDBASE.addGenre(e, "events"), setTimeout(function() {
                    C.getAjax();
                }, 500));
            },
            unload: function unload() {
                try {
                    C.getAjax();
                } catch (e) {}
            }
        };
        window.TDAPP = window.TDAPP || {}, window.TDAPP.onEvent = N.set;
    }();
};