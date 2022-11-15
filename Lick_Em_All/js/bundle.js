!function () {
    "use strict";
    class e { }
    e.ryw_state = 0, e.ryw_gameid = 1123, e.ryw_serverUrl = "", //https://javaapi.renyouwangluo.cn
        e.ryw_Login = "/api/user/login", e.ryw_SaveGameData = "/api/user/game/data/write",
        e.ryw_GetUser = "/api/user/game/data/read", e.ryw_IpBlock = "/api/user/ip/select",
        e.ryw_reportExport = "/api/share/getwaibuad", e.ryw_reportImport = "/api/share/getzjadml",
        e.ryw_getuserip = "/api/user/ip", e.ryw_signin = "/api/user/sign", e.ryw_getServerTime = "/api/share/gettime",
        e.ryw_userScanCode = "/api/user/scan/code", e.ryw_ttReportLaunchChannel = "";//https://javareport.renyouwangluo.cn/api/data/tt/report
    var t, r = Laya.EventDispatcher;
    class i {
        ryw_dispatch(e, t) {
            i.ryw_eventDispatcher.event(e, t);
        }
        ryw_regEvemt(e, t, r, n) {
            i.ryw_eventDispatcher.on(e, t, r, null == n ? null : [n]);
        }
        ryw_regOnceEvent(e, t, r, n) {
            i.ryw_eventDispatcher.once(e, t, r, null == n ? null : [n]);
        }
        ryw_removeEvent(e, t, r, n) {
            i.ryw_eventDispatcher.off(e, t, r);
        }
    }
    i.ryw_eventDispatcher = new r(), i.ryw_instance = new i(), function (e) {
        e[e.ryw_None = 0] = "ryw_None", e[e.ryw_App_CloseFirstLoadingView = 500] = "ryw_App_CloseFirstLoadingView",
            e[e.ryw_AD_OnShareAdFail = 501] = "ryw_AD_OnShareAdFail", e[e.ryw_Login_Msg = 1] = "ryw_Login_Msg",
            e[e.ryw_Game_OnViewOpen = 600] = "ryw_Game_OnViewOpen", e[e.ryw_Game_OnViewClose = 601] = "ryw_Game_OnViewClose",
            e[e.ryw_Game_OnUserMoneyChange = 701] = "ryw_Game_OnUserMoneyChange", e[e.ryw_Game_OnUserCrystalChange = 702] = "ryw_Game_OnUserCrystalChange",
            e[e.Game_OnUserUnlockedStore = 703] = "Game_OnUserUnlockedStore", e[e.ryw_Game_OnLevelStart = 1e3] = "ryw_Game_OnLevelStart",
            e[e.ryw_Game_OnLevelComplate = 1001] = "ryw_Game_OnLevelComplate", e[e.ryw_AD_WudianBanner_LoadComplete = 2217] = "ryw_AD_WudianBanner_LoadComplete",
            e[e.ryw_AD_WudianBanner_Show = 2218] = "ryw_AD_WudianBanner_Show", e[e.ryw_AD_WudianBanner_Hide = 2219] = "ryw_AD_WudianBanner_Hide",
            e[e.ryw_AD_WudianBanner_PreLoad = 2220] = "ryw_AD_WudianBanner_PreLoad", e[e.ryw_App_OnUpdateIpBlockState = 2221] = "ryw_App_OnUpdateIpBlockState",
            e[e.ryw_Umeng_csryw = 2230] = "ryw_Umeng_csryw", e[e.ryw_PlatformLoginState = 2997] = "ryw_PlatformLoginState",
            e[e.ryw_NetLoginState = 2998] = "ryw_NetLoginState", e[e.ryw_NetUserDataState = 2999] = "ryw_NetUserDataState",
            e[e.Move = 10017] = "Move", e[e.DownMove = 11001] = "DownMove", e[e.MoveUp = 11002] = "MoveUp",
            e[e.OnStarGame = 11009] = "OnStarGame", e[e.OnMoseDwon = 11010] = "OnMoseDwon",
            e[e.OnMoseUp = 11011] = "OnMoseUp", e[e.EatFood = 11012] = "EatFood", e[e.KaiXin = 11013] = "KaiXin",
            e[e.Exin = 11014] = "Exin", e[e.Idle = 11015] = "Idle", e[e.Choice_Mode = 11016] = "Choice_Mode",
            e[e.Game_Over = 11017] = "Game_Over", e[e.Crazy_Click = 11018] = "Crazy_Click",
            e[e.Player_Distance = 11019] = "Player_Distance", e[e.Ai_Distance = 11020] = "Ai_Distance",
            e[e.Player_Die = 11021] = "Player_Die", e[e.Hunger_Value = 11022] = "Hunger_Value",
            e[e.Add_Hunger_Value = 11023] = "Add_Hunger_Value", e[e.Sub_Vitality = 11024] = "Sub_Vitality";
    }(t || (t = {}));
    class n extends Laya.Script {
        static get ryw_isLogin() {
            return "" != n.ryw_code || "" != n.ryw_token;
        }
        static ryw_getSaveData() {
            return JSON.stringify(n.ryw__gameData);
        }
        static ryw_testInitUser() {
            n.ryw__gameData.levelNum = 1, n.ryw__gameData.moneyNum = 6e3, n.ryw__gameData.crystalNum = 1e4,
                n.ryw__gameData.unlockedItem = [0], n.ryw__gameData.usedItem = 0, n.ryw__gameData.gameMode = 1,
                n.ryw__gameData.tiliNum = -1, n.ryw__gameData.leaveMainUITime = 0;
        }
        static ryw_initiUser(e) {
            if (e && 0 != e) {
                if (console.log("====user_data=============>>", e), n.ryw__gameData.levelNum = e.levelNum,
                    n.ryw__gameData.moneyNum = e.moneyNum, n.ryw__gameData.crystalNum = e.crystalNum,
                    n.ryw__gameData.tiliNum = e.tiliNum, n.ryw__gameData.gameMode = 1, n.ryw__gameData.leaveMainUITime = e.leaveMainUITime,
                    null == e.tiliNum && (n.ryw__gameData.tiliNum = -1), null != e.unlockedItem) {
                    let t = e.unlockedItem;
                    for (let e = 0; e < t.length; ++e) n.ryw__gameData.unlockedItem.push(t[e]);
                }
                null != e.usedItem && (n.ryw__gameData.usedItem = e.usedItem), null == e.leaveMainUITime && (n.ryw__gameData.leaveMainUITime = 0);
            }
        }
        static ryw_setLeveNum(e) {
            n.ryw__gameData.levelNum = e, n.ryw__gameData.levelNum < 1 && (n.ryw__gameData.levelNum = 1);
        }
        static ryw_getLeveNum() {
            return n.ryw__gameData.levelNum < 1 && (n.ryw__gameData.levelNum = 1), n.ryw__gameData.levelNum;
        }
        static ryw_setTiLiTime(e) {
            n.ryw__gameData.tiliTime = e;
            ye.ryw_getInstance().ryw_saveGameData()
        }
        static ryw_getTiLiTime() {
            return n.ryw__gameData.tiliTime || 0;
        }
        static ryw_addMoney(e) {
            e = Math.ceil(e);
            var r = n.ryw__gameData.moneyNum;
            n.ryw__gameData.moneyNum += e, i.ryw_instance.ryw_dispatch(t.ryw_Game_OnUserMoneyChange, {
                curr: n.ryw__gameData.moneyNum,
                last: r
            });
        }
        static ryw_subMoney(e) {
            e = Math.ceil(e);
            var r = n.ryw__gameData.moneyNum;
            n.ryw__gameData.moneyNum -= e, n.ryw__gameData.moneyNum < 0 && (n.ryw__gameData.moneyNum = 0),
                i.ryw_instance.ryw_dispatch(t.ryw_Game_OnUserMoneyChange, {
                    curr: n.ryw__gameData.moneyNum,
                    last: r
                });
        }
        static ryw_getMoney() {
            return n.ryw__gameData.moneyNum;
        }
        static ryw_addCrystal(e) {
            e = Math.ceil(e);
            var r = n.ryw__gameData.crystalNum;
            n.ryw__gameData.crystalNum += e, i.ryw_instance.ryw_dispatch(t.ryw_Game_OnUserCrystalChange, {
                curr: n.ryw__gameData.crystalNum,
                last: r
            });
        }
        static ryw_subCrystal(e) {
            e = Math.ceil(e);
            var r = n.ryw__gameData.crystalNum;
            n.ryw__gameData.crystalNum -= e, n.ryw__gameData.crystalNum < 0 && (n.ryw__gameData.crystalNum = 0),
                i.ryw_instance.ryw_dispatch(t.ryw_Game_OnUserCrystalChange, {
                    curr: n.ryw__gameData.crystalNum,
                    last: r
                });
        }
        static ryw_getCrystal() {
            return n.ryw__gameData.crystalNum;
        }
        static getItemUnlocked() {
            let e = new Array();
            for (let t = 0; t < n.ryw__gameData.unlockedItem.length; ++t) e.push(n.ryw__gameData.unlockedItem[t]);
            return e;
        }
        static itemIsUnlocked(e) {
            for (let t = 0; t < n.ryw__gameData.unlockedItem.length; ++t) if (n.ryw__gameData.unlockedItem[t] == e) return !0;
            return !1;
        }
        static unlockItem(e) {
            n.itemIsUnlocked(e) ? console.log("商店重复解锁 id : ", e) : (n.ryw__gameData.unlockedItem.push(e),
                i.ryw_instance.ryw_dispatch(t.Game_OnUserUnlockedStore, {
                    unlocked: e
                }));
        }
        static get curUsedItem() {
            return n.ryw__gameData.usedItem;
        }
        static set curUsedItem(e) {
            n.ryw__gameData.usedItem = e;
        }
        static setGameMode(e) {
            n.ryw__gameData.gameMode = e;
        }
        static getGameMode() {
            return n.ryw__gameData.gameMode;
        }
        static ryw_addTili(e, t) {
            n.ryw__gameData.tiliNum += e, n.ryw__gameData.tiliNum > 99 && (n.ryw__gameData.tiliNum = 99);
        }
        static ryw_subTili(ee) {
            if (n.ryw__gameData.tiliNum == D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality) {
                n.ryw_setTiLiTime(Date.now());
            }
            n.ryw__gameData.tiliNum -= ee, n.ryw__gameData.tiliNum < 0 && (n.ryw__gameData.tiliNum = 0);
        }
        static ryw_getTili() {
            return n.ryw__gameData.tiliNum;
        }
        static chackTiLi() {
            if (!ye.ryw_getInstance()) {
                return;
            }
            let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
            let timerRes = ye.ryw_getInstance().timerRes
            if (n.ryw_getTili() < e) {
                let x = Date.now() - n.ryw_getTiLiTime();
                let til = Math.floor(x / 1000 / timerRes);
                if (til > 0) {
                    if (n.ryw_getTili() + til >= e) {
                        n.ryw_addTili(e - n.ryw_getTili(), e);
                    } else {
                        n.ryw_addTili(til, e);
                        n.ryw_setTiLiTime(n.ryw_getTiLiTime() + til * timerRes);
                    }
                }
            }
        }

        static ryw_setTili(e) {
            n.ryw__gameData.tiliNum = e;
        }
        static getLeaveMainUITime() {
            return n.ryw__gameData.leaveMainUITime;
        }
        static setLeaveMainUITime(e) {
            n.ryw__gameData.leaveMainUITime = e;
        }
    }
    n.ryw_code = "", n.ryw_openId = "", n.ryw_token = null, n.ryw_nickName = "", n.ryw_gender = 0,
        n.ryw__gameData = JSON.parse(localStorage.getItem("Lick-Em-All-AllData")) || new class {
            constructor() {
                this.levelNum = 1, this.moneyNum = 0, this.crystalNum = 0, this.unlockedItem = [0], this.tiliTime = 0;
                this.usedItem = 0, this.gameMode = 1, this.tiliNum = 10, this.leaveMainUITime = 0;
            }
        }();
    var a, o, w, y, _, h, c, g, u, m = m || function (e, t) {
        let r = {
            lib: null,
            enc: null,
            algo: null
        }, i = r.lib = {
            Base: null,
            WordArray: null,
            BufferedBlockAlgorithm: null,
            Hasher: null
        }, n = function () { }, a = i.Base = {
            extend: function (e) {
                n.prototype = this;
                var t = new n();
                return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments);
                }), t.init.prototype = t, t.$super = this, t;
            },
            create: function () {
                var e = this.extend();
                return e.init.apply(e, arguments), e;
            },
            init: function () { },
            mixIn: function (e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function () {
                return this.init.prototype.extend(this);
            }
        }, s = i.WordArray = a.extend({
            init: function (e, t) {
                e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
            },
            toString: function (e) {
                return (e || w).stringify(this);
            },
            concat: function (e) {
                var t = this.words, r = e.words, i = this.sigBytes;
                if (e = e.sigBytes, this.clamp(), i % 4) for (var n = 0; n < e; n++) t[i + n >>> 2] |= (r[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 24 - (i + n) % 4 * 8; else if (65535 < r.length) for (n = 0; n < e; n += 4) t[i + n >>> 2] = r[n >>> 2]; else t.push.apply(t, r);
                return this.sigBytes += e, this;
            },
            clamp: function () {
                var t = this.words, r = this.sigBytes;
                t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, t.length = e.ceil(r / 4);
            },
            clone: function () {
                var e = a.clone.call(this);
                return e.words = this.words.slice(0), e;
            },
            random: function (t) {
                for (var r = [], i = 0; i < t; i += 4) r.push(4294967296 * e.random() | 0);
                return new s.init(r, t);
            }
        }), o = r.enc = {
            Hex: null,
            Latin1: null,
            Utf8: null
        }, w = o.Hex = {
            stringify: function (e) {
                var t = e.words;
                e = e.sigBytes;
                for (var r = [], i = 0; i < e; i++) {
                    var n = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push((n >>> 4).toString(16)), r.push((15 & n).toString(16));
                }
                return r.join("");
            },
            parse: function (e) {
                for (var t = e.length, r = [], i = 0; i < t; i += 2) r[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new s.init(r, t / 2);
            }
        }, y = o.Latin1 = {
            stringify: function (e) {
                var t = e.words;
                e = e.sigBytes;
                for (var r = [], i = 0; i < e; i++) r.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
                return r.join("");
            },
            parse: function (e) {
                for (var t = e.length, r = [], i = 0; i < t; i++) r[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                return new s.init(r, t);
            }
        }, _ = o.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(y.stringify(e)));
                } catch (e) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (e) {
                return y.parse(unescape(encodeURIComponent(e)));
            }
        }, l = i.BufferedBlockAlgorithm = a.extend({
            reset: function () {
                this._data = new s.init(), this._nDataBytes = 0;
            },
            _append: function (e) {
                "string" == typeof e && (e = _.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
            },
            _process: function (t) {
                var r = this._data, i = r.words, n = r.sigBytes, a = this.blockSize, o = n / (4 * a);
                if (t = (o = t ? e.ceil(o) : e.max((0 | o) - this._minBufferSize, 0)) * a, n = e.min(4 * t, n),
                    t) {
                    for (var w = 0; w < t; w += a) this._doProcessBlock(i, w);
                    w = i.splice(0, t), r.sigBytes -= n;
                }
                return new s.init(w, n);
            },
            clone: function () {
                var e = a.clone.call(this);
                return e._data = this._data.clone(), e;
            },
            _minBufferSize: 0
        });
        i.Hasher = l.extend({
            cfg: a.extend(null),
            init: function (e) {
                this.cfg = this.cfg.extend(e), this.reset();
            },
            reset: function () {
                l.reset.call(this), this._doReset();
            },
            update: function (e) {
                return this._append(e), this._process(), this;
            },
            finalize: function (e) {
                return e && this._append(e), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function (e) {
                return function (t, r) {
                    return new e.init(r).finalize(t);
                };
            },
            _createHmacHelper: function (e) {
                return function (t, r) {
                    return new h.HMAC.init(e, r).finalize(t);
                };
            }
        });
        var h = r.algo = {
            HMAC: null
        };
        return r;
    }(Math);
    o = (a = m).lib.WordArray, a.enc.Base64 = {
        stringify: function (e) {
            var t = e.words, r = e.sigBytes, i = this._map;
            e.clamp(), e = [];
            for (var n = 0; n < r; n += 3) for (var a = (t[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (t[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | t[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, s = 0; 4 > s && n + .75 * s < r; s++) e.push(i.charAt(a >>> 6 * (3 - s) & 63));
            if (t = i.charAt(64)) for (; e.length % 4;) e.push(t);
            return e.join("");
        },
        parse: function (e) {
            var t = e.length, r = this._map, i = r.charAt(64);
            i && -1 != (i = e.indexOf(i)) && (t = i);
            var n = 0, a = 0;
            for (i = []; a < t; a++) if (a % 4) {
                var s = r.indexOf(e.charAt(a - 1)) << a % 4 * 2, w = r.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                i[n >>> 2] |= (s | w) << 24 - n % 4 * 8, n++;
            }
            return o.create(i, n);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }, function (e) {
        function p(e, t, r, i, n, a, s) {
            return ((e = e + (t & r | ~t & i) + n + s) << a | e >>> 32 - a) + t;
        }
        function d(e, t, r, i, n, a, s) {
            return ((e = e + (t & i | r & ~i) + n + s) << a | e >>> 32 - a) + t;
        }
        function l(e, t, r, i, n, a, s) {
            return ((e = e + (t ^ r ^ i) + n + s) << a | e >>> 32 - a) + t;
        }
        function s(e, t, r, i, n, a, s) {
            return ((e = e + (r ^ (t | ~i)) + n + s) << a | e >>> 32 - a) + t;
        }
        for (var t = m, r = (n = t.lib).WordArray, i = n.Hasher, n = t.algo, a = [], o = 0; 64 > o; o++) a[o] = 4294967296 * e.abs(e.sin(o + 1)) | 0;
        n = n.MD5 = i.extend({
            _doReset: function () {
                this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
            },
            _doProcessBlock: function (e, t) {
                for (let i = 0; 16 > i; i++) {
                    var r = e[n = t + i];
                    e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                }
                var i = this._hash.words, n = e[t + 0], o = (r = e[t + 1], e[t + 2]), w = e[t + 3], y = e[t + 4], _ = e[t + 5], h = e[t + 6], c = e[t + 7], g = e[t + 8], u = e[t + 9], m = e[t + 10], f = e[t + 11], B = e[t + 12], S = e[t + 13], L = e[t + 14], v = e[t + 15], C = p(C = i[0], T = i[1], k = i[2], A = i[3], n, 7, a[0]), A = p(A, C, T, k, r, 12, a[1]), k = p(k, A, C, T, o, 17, a[2]), T = p(T, k, A, C, w, 22, a[3]);
                C = p(C, T, k, A, y, 7, a[4]), A = p(A, C, T, k, _, 12, a[5]), k = p(k, A, C, T, h, 17, a[6]),
                    T = p(T, k, A, C, c, 22, a[7]), C = p(C, T, k, A, g, 7, a[8]), A = p(A, C, T, k, u, 12, a[9]),
                    k = p(k, A, C, T, m, 17, a[10]), T = p(T, k, A, C, f, 22, a[11]), C = p(C, T, k, A, B, 7, a[12]),
                    A = p(A, C, T, k, S, 12, a[13]), k = p(k, A, C, T, L, 17, a[14]), C = d(C, T = p(T, k, A, C, v, 22, a[15]), k, A, r, 5, a[16]),
                    A = d(A, C, T, k, h, 9, a[17]), k = d(k, A, C, T, f, 14, a[18]), T = d(T, k, A, C, n, 20, a[19]),
                    C = d(C, T, k, A, _, 5, a[20]), A = d(A, C, T, k, m, 9, a[21]), k = d(k, A, C, T, v, 14, a[22]),
                    T = d(T, k, A, C, y, 20, a[23]), C = d(C, T, k, A, u, 5, a[24]), A = d(A, C, T, k, L, 9, a[25]),
                    k = d(k, A, C, T, w, 14, a[26]), T = d(T, k, A, C, g, 20, a[27]), C = d(C, T, k, A, S, 5, a[28]),
                    A = d(A, C, T, k, o, 9, a[29]), k = d(k, A, C, T, c, 14, a[30]), C = l(C, T = d(T, k, A, C, B, 20, a[31]), k, A, _, 4, a[32]),
                    A = l(A, C, T, k, g, 11, a[33]), k = l(k, A, C, T, f, 16, a[34]), T = l(T, k, A, C, L, 23, a[35]),
                    C = l(C, T, k, A, r, 4, a[36]), A = l(A, C, T, k, y, 11, a[37]), k = l(k, A, C, T, c, 16, a[38]),
                    T = l(T, k, A, C, m, 23, a[39]), C = l(C, T, k, A, S, 4, a[40]), A = l(A, C, T, k, n, 11, a[41]),
                    k = l(k, A, C, T, w, 16, a[42]), T = l(T, k, A, C, h, 23, a[43]), C = l(C, T, k, A, u, 4, a[44]),
                    A = l(A, C, T, k, B, 11, a[45]), k = l(k, A, C, T, v, 16, a[46]), C = s(C, T = l(T, k, A, C, o, 23, a[47]), k, A, n, 6, a[48]),
                    A = s(A, C, T, k, c, 10, a[49]), k = s(k, A, C, T, L, 15, a[50]), T = s(T, k, A, C, _, 21, a[51]),
                    C = s(C, T, k, A, B, 6, a[52]), A = s(A, C, T, k, w, 10, a[53]), k = s(k, A, C, T, m, 15, a[54]),
                    T = s(T, k, A, C, r, 21, a[55]), C = s(C, T, k, A, g, 6, a[56]), A = s(A, C, T, k, v, 10, a[57]),
                    k = s(k, A, C, T, h, 15, a[58]), T = s(T, k, A, C, S, 21, a[59]), C = s(C, T, k, A, y, 6, a[60]),
                    A = s(A, C, T, k, f, 10, a[61]), k = s(k, A, C, T, o, 15, a[62]), T = s(T, k, A, C, u, 21, a[63]);
                i[0] = i[0] + C | 0, i[1] = i[1] + T | 0, i[2] = i[2] + k | 0, i[3] = i[3] + A | 0;
            },
            _doFinalize: function () {
                var t = this._data, r = t.words, i = 8 * this._nDataBytes, n = 8 * t.sigBytes;
                r[n >>> 5] |= 128 << 24 - n % 32;
                var a = e.floor(i / 4294967296);
                for (r[15 + (n + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                    r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                    t.sigBytes = 4 * (r.length + 1), this._process(), r = (t = this._hash).words, i = 0; 4 > i; i++) n = r[i],
                        r[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                return t;
            },
            clone: function () {
                var e = i.clone.call(this);
                return e._hash = this._hash.clone(), e;
            }
        }), t.MD5 = i._createHelper(n), t.HmacMD5 = i._createHmacHelper(n);
    }(Math), function () {
        var e, t = m, r = (e = t.lib).Base, i = e.WordArray, n = (e = t.algo).EvpKDF = r.extend({
            cfg: r.extend({
                keySize: 4,
                hasher: e.MD5,
                iterations: 1
            }),
            init: function (e) {
                this.cfg = this.cfg.extend(e);
            },
            compute: function (e, t) {
                for (var r = (o = this.cfg).hasher.create(), n = i.create(), a = n.words, s = o.keySize, o = o.iterations; a.length < s;) {
                    w && r.update(w);
                    var w = r.update(e).finalize(t);
                    r.reset();
                    for (var y = 1; y < o; y++) w = r.finalize(w), r.reset();
                    n.concat(w);
                }
                return n.sigBytes = 4 * s, n;
            }
        });
        t.EvpKDF = function (e, t, r) {
            return n.create(r).compute(e, t);
        };
    }(), m.lib.Cipher || function (e) {
        var t = (c = m).lib, r = t.Base, i = t.WordArray, n = t.BufferedBlockAlgorithm, a = c.enc.Base64, s = c.algo.EvpKDF, o = t.Cipher = n.extend({
            cfg: r.extend(),
            createEncryptor: function (e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t);
            },
            createDecryptor: function (e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t);
            },
            init: function (e, t, r) {
                this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset();
            },
            reset: function () {
                n.reset.call(this), this._doReset();
            },
            process: function (e) {
                return this._append(e), this._process();
            },
            finalize: function (e) {
                return e && this._append(e), this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (e) {
                return {
                    encrypt: function (t, r, i) {
                        return ("string" == typeof r ? d : h).encrypt(e, t, r, i);
                    },
                    decrypt: function (t, r, i) {
                        return ("string" == typeof r ? d : h).decrypt(e, t, r, i);
                    }
                };
            }
        });
        t.StreamCipher = o.extend({
            _doFinalize: function () {
                return this._process(!0);
            },
            blockSize: 1
        });
        var w = c.mode = {}, y = function (e, t, r) {
            var i = this._iv;
            i ? this._iv = void 0 : i = this._prevBlock;
            for (var n = 0; n < r; n++) e[t + n] ^= i[n];
        }, _ = (t.BlockCipherMode = r.extend({
            createEncryptor: function (e, t) {
                return this.Encryptor.create(e, t);
            },
            createDecryptor: function (e, t) {
                return this.Decryptor.create(e, t);
            },
            init: function (e, t) {
                this._cipher = e, this._iv = t;
            }
        })).extend();
        _.Encryptor = _.extend({
            processBlock: function (e, t) {
                var r = this._cipher, i = r.blockSize;
                y.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i);
            }
        }), _.Decryptor = _.extend({
            processBlock: function (e, t) {
                var r = this._cipher, i = r.blockSize, n = e.slice(t, t + i);
                r.decryptBlock(e, t), y.call(this, e, t, i), this._prevBlock = n;
            }
        }), w = w.CBC = _, _ = (c.pad = {
            Pkcs7: null
        }).Pkcs7 = {
            pad: function (e, t) {
                for (var r, n = (r = (r = 4 * t) - e.sigBytes % r) << 24 | r << 16 | r << 8 | r, a = [], s = 0; s < r; s += 4) a.push(n);
                r = i.create(a, r), e.concat(r);
            },
            unpad: function (e) {
                e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2];
            }
        }, t.BlockCipher = o.extend({
            cfg: o.cfg.extend({
                mode: w,
                padding: _
            }),
            reset: function () {
                o.reset.call(this);
                var e = (t = this.cfg).iv, t = t.mode;
                if (this._xformMode == this._ENC_XFORM_MODE) var r = t.createEncryptor; else r = t.createDecryptor,
                    this._minBufferSize = 1;
                this._mode = r.call(t, this, e && e.words);
            },
            _doProcessBlock: function (e, t) {
                this._mode.processBlock(e, t);
            },
            _doFinalize: function () {
                var e = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    e.pad(this._data, this.blockSize);
                    var t = this._process(!0);
                } else t = this._process(!0), e.unpad(t);
                return t;
            },
            blockSize: 4
        });
        var l = t.CipherParams = r.extend({
            init: function (e) {
                this.mixIn(e);
            },
            toString: function (e) {
                return (e || this.formatter).stringify(this);
            }
        }), h = (w = (c.format = {
            OpenSSL: null
        }).OpenSSL = {
            stringify: function (e) {
                var t = e.ciphertext;
                return ((e = e.salt) ? i.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(a);
            },
            parse: function (e) {
                var t = (e = a.parse(e)).words;
                if (1398893684 == t[0] && 1701076831 == t[1]) {
                    var r = i.create(t.slice(2, 4));
                    t.splice(0, 4), e.sigBytes -= 16;
                }
                return l.create({
                    ciphertext: e,
                    salt: r
                });
            }
        }, t.SerializableCipher = r.extend({
            cfg: r.extend({
                format: w
            }),
            encrypt: function (e, t, r, i) {
                i = this.cfg.extend(i);
                var n = e.createEncryptor(r, i);
                return t = n.finalize(t), n = n.cfg, l.create({
                    ciphertext: t,
                    key: r,
                    iv: n.iv,
                    algorithm: e,
                    mode: n.mode,
                    padding: n.padding,
                    blockSize: e.blockSize,
                    formatter: i.format
                });
            },
            decrypt: function (e, t, r, i) {
                return i = this.cfg.extend(i), t = this._parse(t, i.format), e.createDecryptor(r, i).finalize(t.ciphertext);
            },
            _parse: function (e, t) {
                return "string" == typeof e ? t.parse(e, this) : e;
            }
        })), c = (c.kdf = {
            OpenSSL: null
        }).OpenSSL = {
            execute: function (e, t, r, n) {
                return n || (n = i.random(8)), e = s.create({
                    keySize: t + r
                }).compute(e, n), r = i.create(e.words.slice(t), 4 * r), e.sigBytes = 4 * t, l.create({
                    key: e,
                    iv: r,
                    salt: n
                });
            }
        }, d = t.PasswordBasedCipher = h.extend({
            cfg: h.cfg.extend({
                kdf: c
            }),
            encrypt: function (e, t, r, i) {
                return r = (i = this.cfg.extend(i)).kdf.execute(r, e.keySize, e.ivSize), i.iv = r.iv,
                    (e = h.encrypt.call(this, e, t, r.key, i)).mixIn(r), e;
            },
            decrypt: function (e, t, r, i) {
                return i = this.cfg.extend(i), t = this._parse(t, i.format), r = i.kdf.execute(r, e.keySize, e.ivSize, t.salt),
                    i.iv = r.iv, h.decrypt.call(this, e, t, r.key, i);
            }
        });
    }(), function () {
        for (var e = m, t = e.lib.BlockCipher, r = e.algo, i = [], n = [], a = [], s = [], o = [], w = [], y = [], _ = [], l = [], h = [], c = [], d = 0; 256 > d; d++) c[d] = 128 > d ? d << 1 : d << 1 ^ 283;
        var g = 0, p = 0;
        for (d = 0; 256 > d; d++) {
            var u = (u = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4) >>> 8 ^ 255 & u ^ 99;
            i[g] = u, n[u] = g;
            var f = c[g], B = c[f], S = c[B], L = 257 * c[u] ^ 16843008 * u;
            a[g] = L << 24 | L >>> 8, s[g] = L << 16 | L >>> 16, o[g] = L << 8 | L >>> 24, w[g] = L,
                L = 16843009 * S ^ 65537 * B ^ 257 * f ^ 16843008 * g, y[u] = L << 24 | L >>> 8,
                _[u] = L << 16 | L >>> 16, l[u] = L << 8 | L >>> 24, h[u] = L, g ? (g = f ^ c[c[c[S ^ f]]],
                    p ^= c[c[p]]) : g = p = 1;
        }
        var v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        r = r.AES = t.extend({
            _doReset: function () {
                for (var e = (r = this._key).words, t = r.sigBytes / 4, r = 4 * ((this._nRounds = t + 6) + 1), n = this._keySchedule = [], a = 0; a < r; a++) if (a < t) n[a] = e[a]; else {
                    var s = n[a - 1];
                    a % t ? 6 < t && 4 == a % t && (s = i[s >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s]) : (s = i[(s = s << 8 | s >>> 24) >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & s],
                        s ^= v[a / t | 0] << 24), n[a] = n[a - t] ^ s;
                }
                for (e = this._invKeySchedule = [], t = 0; t < r; t++) a = r - t, s = t % 4 ? n[a] : n[a - 4],
                    e[t] = 4 > t || 4 >= a ? s : y[i[s >>> 24]] ^ _[i[s >>> 16 & 255]] ^ l[i[s >>> 8 & 255]] ^ h[i[255 & s]];
            },
            encryptBlock: function (e, t) {
                this._doCryptBlock(e, t, this._keySchedule, a, s, o, w, i);
            },
            decryptBlock: function (e, t) {
                var r = e[t + 1];
                e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, y, _, l, h, n),
                    r = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = r;
            },
            _doCryptBlock: function (e, t, r, i, n, a, s, o) {
                for (var w = this._nRounds, y = e[t] ^ r[0], _ = e[t + 1] ^ r[1], l = e[t + 2] ^ r[2], h = e[t + 3] ^ r[3], c = 4, d = 1; d < w; d++) {
                    var g = i[y >>> 24] ^ n[_ >>> 16 & 255] ^ a[l >>> 8 & 255] ^ s[255 & h] ^ r[c++], p = i[_ >>> 24] ^ n[l >>> 16 & 255] ^ a[h >>> 8 & 255] ^ s[255 & y] ^ r[c++], u = i[l >>> 24] ^ n[h >>> 16 & 255] ^ a[y >>> 8 & 255] ^ s[255 & _] ^ r[c++];
                    h = i[h >>> 24] ^ n[y >>> 16 & 255] ^ a[_ >>> 8 & 255] ^ s[255 & l] ^ r[c++], y = g,
                        _ = p, l = u;
                }
                g = (o[y >>> 24] << 24 | o[_ >>> 16 & 255] << 16 | o[l >>> 8 & 255] << 8 | o[255 & h]) ^ r[c++],
                    p = (o[_ >>> 24] << 24 | o[l >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & y]) ^ r[c++],
                    u = (o[l >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[y >>> 8 & 255] << 8 | o[255 & _]) ^ r[c++],
                    h = (o[h >>> 24] << 24 | o[y >>> 16 & 255] << 16 | o[_ >>> 8 & 255] << 8 | o[255 & l]) ^ r[c++],
                    e[t] = g, e[t + 1] = p, e[t + 2] = u, e[t + 3] = h;
            },
            keySize: 8
        });
        e.AES = t._createHelper(r);
    }();
    class f {
        static ryw_encrypt(e) {
            let t = m;
            var r = t.enc.Utf8.parse(f.ryw_KEY), i = t.enc.Utf8.parse(f.ryw_IV);
            return t.AES.encrypt(e, r, {
                iv: i,
                mode: t.mode.CBC,
                padding: t.pad.Pkcs7
            }).toString();
        }
        static ryw_decrypt(e) {
            let t = m;
            var r = t.enc.Utf8.parse(f.ryw_KEY), i = t.enc.Utf8.parse(f.ryw_IV);
            return t.AES.decrypt(e, r, {
                iv: i,
                padding: t.pad.Pkcs7
            }).toString(t.enc.Utf8);
        }
    }
    f.ryw_KEY = "b#63fFJ6AvkK3YT*", f.ryw_IV = "J$f4DU%sNL73M&Go";
    class B { }
    B.ryw_AppID = "wxde667b799bf8fc56", B.ryw_ResServer = "", //https://oss.renyouwangluo.cn/tdcj
        B.ryw_LocalTestReServer = "", //https://oss.renyouwangluo.cn/tdcj
        B.ryw_Versions = "1.0.0",
        B.onTTMiniGame = !1, B.ryw_GameName = "舔到抽筋", B.showLoadingLogo = !1, B.UseRYSDK = !0,
        B.subResDirs = ["subRes"];
    class S {
        constructor() {
            this.ryw_meth = "post", this.ryw_url = "", this.ryw_onSuccess = null, this.ryw_onFail = null,
                this.ryw_data = {};
        }
    }
    class L {
        static request(t) {
            // t.ryw_url.indexOf("https://") > -1 || t.ryw_url.indexOf("http://") > -1 ? t.ryw_url = t.ryw_url : t.ryw_url = e.ryw_serverUrl + t.ryw_url;
            // var r = new Laya.HttpRequest();
            // r.once(Laya.Event.COMPLETE, L, e => {
            //     console.log(e, "http Success"), t.ryw_onSuccess && t.ryw_onSuccess(e), t.ryw_onSuccess = null,
            //         t = null;
            // }), r.once(Laya.Event.ERROR, L, e => {
            //     console.log(e, "http fail"), t.ryw_onFail && t.ryw_onFail(e), t.ryw_onFail = null,
            //         t = null;
            // });
            // JSON.stringify(t.ryw_data);
            // Laya.Browser.onMiniGame || B.onTTMiniGame ? t.ryw_data.code = n.ryw_code : Laya.Browser.onQGMiniGame ? t.ryw_data.oppotoken = n.ryw_code : (Laya.Browser.onQQMiniGame,
            //     t.ryw_data.code = n.ryw_code);
            // var i = "time=" + String(Date.now()), a = ["Content-Type", "application/json", "state", e.ryw_state, "gameid", e.ryw_gameid, "sign", f.ryw_encrypt(i)];
            // n.ryw_token && (a.push("token"), a.push(n.ryw_token)), console.log(JSON.stringify(t.ryw_data)),
            //     r.send(t.ryw_url, JSON.stringify(t.ryw_data), t.ryw_meth, "json", a);
        }
        static ryw_login(t, r) {
            var i = new S();
            i.ryw_url = e.ryw_Login, i.ryw_onSuccess = t, i.ryw_onFail = r, L.request(i);
        }
        static ryw_userScanCode(t, r, i) {
            var n = new S();
            n.ryw_url = e.ryw_userScanCode, n.ryw_onSuccess = r, n.ryw_onFail = i, n.ryw_data.code = t.code,
                n.ryw_data.state = t.state, n.ryw_data.gameId = t.gameId, n.ryw_data.type = t.type,
                n.ryw_data.scan = t.scan, L.request(n);
        }
        static ryw_saveGameData(t, r, i) {
            var n = new S();
            n.ryw_url = e.ryw_SaveGameData, n.ryw_data.gameData = t, n.ryw_onSuccess = r, n.ryw_onFail = i,
                L.request(n);
        }
        static ryw_getGameData(t, r) {
            var i = new S();
            i.ryw_url = e.ryw_GetUser, i.ryw_onSuccess = t, i.ryw_onFail = r, L.request(i);
        }
        static ryw_GetIpBlock(t, r) {
            if (-1 != e.ryw_gameid) {
                var i = new S();
                i.ryw_url = e.ryw_IpBlock, i.ryw_onSuccess = t, i.ryw_onFail = r, L.request(i);
            }
        }
        static ryw_reportExport(t, r, i, n) {
            var a = new S();
            a.ryw_url = e.ryw_reportExport, a.ryw_data.wbappid = t, a.ryw_data.game_name = r,
                a.ryw_onSuccess = i, a.ryw_onFail = n, L.request(a);
        }
        static ryw_reportImport(t, r, i, n) {
            var a = new S();
            a.ryw_url = e.ryw_reportImport, a.ryw_data.wbappid = t, a.ryw_data.channel = r,
                a.ryw_onSuccess = i, a.ryw_onFail = n, L.request(a);
        }
        static ryw_Getuserip(t, r) {
            var i = new S();
            i.ryw_url = e.ryw_getuserip, i.ryw_onSuccess = t, i.ryw_onFail = r, L.request(i);
        }
        static SignIn(t, r) {
            var i = new S();
            i.ryw_url = e.ryw_signin, i.ryw_onSuccess = t, i.ryw_onFail = r, i.ryw_data.type = 1,
                L.request(i);
        }
        static GetSignIn(t, r) {
            var i = new S();
            i.ryw_url = e.ryw_signin, i.ryw_onSuccess = t, i.ryw_onFail = r, i.ryw_data.type = 0,
                L.request(i);
        }
        static reportTTLaunchChannel(t, r, i, n, a) {
            var s = new S();
            s.ryw_url = e.ryw_ttReportLaunchChannel, s.ryw_onSuccess = n, s.ryw_onFail = a,
                s.ryw_data.ak = t, s.ryw_data.bid = i, s.ryw_data.cd = r, L.request(s);
        }
    }
    class v {
        constructor() {
            this.ryw_version = "", this.ryw_banner = 0, this.ryw_wudian = 0, this.ryw_isDebug = 0,
                this.ryw_isNetWorkGame = 1, this.wudianAvailableTime = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 0,
                    20: 0,
                    21: 0,
                    22: 0,
                    23: 0
                }, this.homePageExportTimeControl = {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0,
                    13: 0,
                    14: 0,
                    15: 0,
                    16: 0,
                    17: 0,
                    18: 0,
                    19: 0,
                    20: 0,
                    21: 0,
                    22: 0,
                    23: 0
                }, this.ryw_mailiang = 1, this.ryw_mailianglist = new Array(), this.ryw_mailiangSceneList = new Array(),
                this.ryw_wxWuDianBanners = new Array(), this.ryw_recreateBannerIDList = new Array(),
                this.ryw_bannerRecreateTime = 5, this.ryw_kuangdianjiange = 0, this.ryw_btnMoveTimer = 1,
                this.ryw_bannerMoveTimer = .5, this.ryw_bannerFreshTimer = 200, this.ryw_bannerCreateFailNum = 3,
                this.ryw_bannerTodayBannerMax = 10, this.ryw_adSwitch = 1, this.ryw_wudianSceneList = new Array(),
                this.ryw_continueBtnDelayTime = 2, this.ryw_bannerShowTime = 30, this.fakeBtn = 0,
                this.wudianRewardBanner = 0, this.ryw_popAd = 0, this.ryw_continueBanner = 0, this.ryw_continueBannerShowTime = 2,
                this.ryw_continueBannerHideTime = 2, this.ryw_oppocfg = new k(), this.ryw_qqcfg = new T(),
                this.ryw_ttcfg = new I(), this.ryw_vivocfg = new b(), this.ryw_wxcfg = new A(),
                this.tt2cfg = new V(), this.ryw_gameConfig = new C();
        }
        get homePageIsOpen() {
            return console.log(this.homePageExportTimeControl), console.log(new Date().getHours()),
                console.log(Number(this.homePageExportTimeControl["" + new Date().getHours()])),
                console.log("homePageIsOpen" + (1 == Number(this.homePageExportTimeControl["" + new Date().getHours()]))),
                1 == Number(this.homePageExportTimeControl["" + new Date().getHours()]);
        }
        get wudianTimeAvaliable() {
            return 1 == this.wudianAvailableTime[new Date().getHours()];
        }
    }
    class C {
        constructor() {
            this.ryw_maxVitality = 10, this.ryw_addVitality = 5;
        }
    }
    class A {
        constructor() {
            this.ryw_kuangdian = 1, this.ryw_kuangdianBanner = 0, this.ryw_kuangdianLevelSpcacing = 0,
                this.ryw_ForceSkip = 0, this.ryw_SlideSkip = 0, this.ryw_tc_ForceSkip = 0, this.ryw_tc_SlideSkip = 0,
                this.ryw_phb_ForceSkip = 0, this.ryw_phb_SlideSkip = 0, this.ryw_tc_continueBanner = 0,
                this.ryw_MainPop = 0, this.ryw_hyrw_ForceSkip = 0, this.ryw_hyrw_SlideSkip = 0,
                this.ryw_hyrw_continueBanner = 0, this.ryw_handShow = 1, this.ryw_firstOpen = 0,
                this.ryw_startVideo = 0, this.ryw_mainBackBtn = 1, this.ryw_mainMoreBtn = 1, this.ryw_mainItemBtn = 1,
                this.ryw_mainExportShow = 0, this.ryw_isJumpHotPlay = 0, this.ryw_moreGameShowLevel = 0,
                this.ryw_setUserScan = 0;
        }
    }
    class k {
        constructor() {
            this.ryw_yuansheng = 100, this.ryw_yuanshengSwitch = 1, this.ryw_addToDesktop = 0,
                this.ryw_oppoversions = "", this.ryw_btnShowTimer = 0, this.ryw_indexAdSwitch = 0,
                this.ryw_endAdSwitch = 0, this.ryw_yuansheng2 = 100, this.ryw_yuanshengSwitch2 = 1;
        }
    }
    class T {
        constructor() {
            this.ryw_kuangdianBanner = 0, this.ryw_kuangdianBox = 0, this.ryw_box = 0, this.ryw_weiyi = 0,
                this.ryw_qqversions = "";
        }
    }
    class I {
        constructor() {
            this.ryw_moreGameSwitch = 0, this.ryw_kuangdianBanner = 0, this.ryw_luping = 0,
                this.ryw_ttversions = "";
        }
    }
    class V {
        constructor() {
            this.startSwitch = 0, this.signInSwitch = 0, this.getSwitch = 0, this.useSwitch = 0,
                this.reliveSwitch = 0, this.screenCapSwitch = 0, this.boxSwitch = 0;
        }
    }
    class b {
        constructor() {
            this.ryw_yuanshengSwitch = 1, this.ryw_yuansheng = 100, this.ryw_yuanshengSwitch2 = 1,
                this.ryw_yuansheng2 = 100, this.ryw_chapingSwitch = 1, this.ryw_chaping = 100, this.ryw_addToDesktop = 1,
                this.ryw_vivoversions = "", this.btnShowTimer = 1;
        }
    }
    class D {
        constructor() {
            this.ryw__data = new Array();
        }
        static ryw_getInstance() {
            return null == D.ryw__instance && (D.ryw__instance = D.ryw_load()), D.ryw__instance;
        }
        static ryw_load() {
            var e = new D(), t = Laya.loader.getRes("json/appswitch.json");
            if (t) {
                for (var r = 0; r < t.length; ++r) {
                    var i = t[r], n = new v();
                    n.ryw_version = String(i.version), n.ryw_banner = Number(i.banner), n.ryw_wudian = Number(i.wudian),
                        n.ryw_isDebug = Number(i.debuginfo), n.ryw_isNetWorkGame = Number(i.netWorkgame),
                        n.wudianAvailableTime = Object(i.wudianTime), n.homePageExportTimeControl = Object(i.homePageExportTimeControl),
                        n.ryw_mailiang = Number(i.mailiang);
                    var a = i.mailianglist;
                    if (null != a) for (var s = 0; s < a.length; ++s) {
                        var o = Number(a[s]);
                        n.ryw_mailianglist.push(o);
                    }
                    var w = i.mailiangScenelist;
                    if (null != w) for (s = 0; s < w.length; ++s) {
                        var y = Number(w[s]);
                        n.ryw_mailiangSceneList.push(y);
                    }
                    var _ = i.wxwudianbanners;
                    if (null != _) for (s = 0; s < _.length; ++s) {
                        let e = String(_[s]);
                        n.ryw_wxWuDianBanners.push(e);
                    }
                    var l = i.recreateBannerIDList;
                    if (null != l) for (s = 0; s < l.length; ++s) {
                        let e = String(l[s]);
                        n.ryw_recreateBannerIDList.push(e);
                    }
                    n.wudianRewardBanner = null != i.wudianRewardBanner ? Number(i.wudianRewardBanner) : n.wudianRewardBanner,
                        n.ryw_bannerRecreateTime = null != i.bannerRecreateTime ? Number(i.bannerRecreateTime) : n.ryw_bannerRecreateTime,
                        n.ryw_kuangdianjiange = null != i.kuangdianjiange ? Number(i.kuangdianjiange) : n.ryw_kuangdianjiange,
                        n.ryw_btnMoveTimer = Number(i.btnMoveTimer), n.ryw_bannerMoveTimer = Number(i.bannerMoveTimer),
                        n.ryw_bannerCreateFailNum = Number(i.createFailNum), n.ryw_bannerFreshTimer = Number(i.bannerFreshTimer),
                        n.ryw_bannerTodayBannerMax = Number(i.todayBannerMax), n.ryw_adSwitch = Number(i.adSwitch);
                    var h = i.wudianSceneList;
                    if (null != h) for (s = 0; s < h.length; ++s) {
                        var c = Number(h[s]);
                        n.ryw_wudianSceneList.push(c);
                    }
                    if (n.ryw_continueBtnDelayTime = Number(i.continueBtnDelayTime), n.ryw_bannerShowTime = Number(i.bannerShowTime),
                        n.fakeBtn = null != i.fakeBtn ? Number(i.fakeBtn) : n.fakeBtn, n.ryw_popAd = null != i.popAd ? Number(i.popAd) : n.ryw_popAd,
                        n.ryw_continueBanner = null != i.continueBanner ? Number(i.continueBanner) : n.ryw_continueBanner,
                        n.ryw_continueBannerShowTime = null != i.continueBannerShowTime ? Number(i.continueBannerShowTime) : n.ryw_continueBannerShowTime,
                        n.ryw_continueBannerHideTime = null != i.continueBannerHideTime ? Number(i.continueBannerHideTime) : n.ryw_continueBannerHideTime,
                        null != i.oppocfg) {
                        let e = i.oppocfg;
                        n.ryw_oppocfg.ryw_yuansheng = Number(e.yuansheng), n.ryw_oppocfg.ryw_yuanshengSwitch = Number(e.yuanshengSwitch),
                            n.ryw_oppocfg.ryw_addToDesktop = Number(e.addToDesktop), n.ryw_oppocfg.ryw_oppoversions = String(e.oppoversions),
                            n.ryw_oppocfg.ryw_btnShowTimer = Number(e.btnShowTimer), n.ryw_oppocfg.ryw_indexAdSwitch = Number(e.indexAdSwitch),
                            n.ryw_oppocfg.ryw_endAdSwitch = Number(e.endAdSwitch), n.ryw_oppocfg.ryw_yuansheng2 = null != e.yuansheng2 ? Number(e.yuansheng2) : n.ryw_oppocfg.ryw_yuansheng2,
                            n.ryw_oppocfg.ryw_yuanshengSwitch2 = null != e.yuanshengSwitch2 ? Number(e.yuanshengSwitch2) : n.ryw_oppocfg.ryw_yuanshengSwitch2;
                    }
                    if (null != i.qqcfg) {
                        let e = i.qqcfg;
                        n.ryw_qqcfg.ryw_kuangdianBanner = Number(e.kuangdianBanner), n.ryw_qqcfg.ryw_kuangdianBox = Number(e.kuangdianBox),
                            n.ryw_qqcfg.ryw_box = Number(e.box), n.ryw_qqcfg.ryw_weiyi = Number(e.weiyi), n.ryw_qqcfg.ryw_qqversions = String(e.qqversions);
                    }
                    if (null != i.ttcfg) {
                        let e = i.ttcfg;
                        n.ryw_ttcfg.ryw_moreGameSwitch = Number(e.moreGameSwitch), n.ryw_ttcfg.ryw_kuangdianBanner = Number(e.kuangdianBanner),
                            n.ryw_ttcfg.ryw_luping = Number(e.luping), n.ryw_ttcfg.ryw_ttversions = String(e.ttversions);
                    }
                    if (null != i.tt2cfg) {
                        let e = i.tt2cfg;
                        n.tt2cfg.startSwitch = Number(e.startSwitch), n.tt2cfg.signInSwitch = Number(e.signInSwitch),
                            n.tt2cfg.getSwitch = Number(e.getSwitch), n.tt2cfg.useSwitch = Number(e.useSwitch),
                            n.tt2cfg.reliveSwitch = Number(e.reliveSwitch), n.tt2cfg.screenCapSwitch = Number(e.screenCapSwitch),
                            n.tt2cfg.boxSwitch = Number(e.boxSwitch);
                    }
                    if (null != i.vivocfg) {
                        let e = i.vivocfg;
                        n.ryw_vivocfg.ryw_yuanshengSwitch = Number(e.yuanshengSwitch), n.ryw_vivocfg.ryw_yuansheng = Number(e.yuansheng),
                            n.ryw_vivocfg.ryw_yuanshengSwitch2 = Number(e.yuanshengSwitch2), n.ryw_vivocfg.ryw_yuansheng2 = Number(e.yuansheng2),
                            n.ryw_vivocfg.ryw_chapingSwitch = Number(e.chapingSwitch), n.ryw_vivocfg.ryw_chaping = Number(e.chaping),
                            n.ryw_vivocfg.ryw_addToDesktop = Number(e.addToDesktop), n.ryw_vivocfg.ryw_vivoversions = String(e.vivoversions),
                            n.ryw_vivocfg.btnShowTimer = Number(e.btnShowTimer);
                    }
                    if (null != i.wxcfg) {
                        let e = i.wxcfg;
                        n.ryw_wxcfg.ryw_kuangdian = Number(e.kuangdian), n.ryw_wxcfg.ryw_kuangdianBanner = Number(e.kuangdianBanner),
                            n.ryw_wxcfg.ryw_kuangdianLevelSpcacing = Number(e.kuangdianLevelSpcacing), n.ryw_wxcfg.ryw_ForceSkip = Number(e.ForceSkip),
                            n.ryw_wxcfg.ryw_SlideSkip = Number(e.SlideSkip), n.ryw_wxcfg.ryw_tc_ForceSkip = Number(e.tc_ForceSkip),
                            n.ryw_wxcfg.ryw_tc_SlideSkip = Number(e.tc_SlideSkip), n.ryw_wxcfg.ryw_phb_ForceSkip = Number(e.phb_ForceSkip),
                            n.ryw_wxcfg.ryw_phb_SlideSkip = Number(e.phb_SlideSkip), n.ryw_wxcfg.ryw_tc_continueBanner = Number(e.tc_continueBanner),
                            n.ryw_wxcfg.ryw_MainPop = Number(e.MainPop), n.ryw_wxcfg.ryw_hyrw_ForceSkip = Number(e.hyrw_ForceSkip),
                            n.ryw_wxcfg.ryw_hyrw_SlideSkip = Number(e.hyrw_SlideSkip), n.ryw_wxcfg.ryw_hyrw_continueBanner = Number(e.hyrw_continueBanner),
                            n.ryw_wxcfg.ryw_handShow = Number(e.handShow), n.ryw_wxcfg.ryw_firstOpen = Number(e.firstOpen),
                            n.ryw_wxcfg.ryw_startVideo = Number(e.startVideo), n.ryw_wxcfg.ryw_mainBackBtn = Number(e.mainBackBtn),
                            n.ryw_wxcfg.ryw_mainMoreBtn = Number(e.mainMoreBtn), n.ryw_wxcfg.ryw_mainItemBtn = Number(e.mainItemBtn),
                            n.ryw_wxcfg.ryw_mainExportShow = Number(e.mainExportShow), n.ryw_wxcfg.ryw_isJumpHotPlay = Number(e.isJumpHotPlay),
                            n.ryw_wxcfg.ryw_moreGameShowLevel = Number(e.moreGameShowLevel), n.ryw_wxcfg.ryw_setUserScan = Number(e.setUserScan),
                            console.log("获得Appswitch.json :" + JSON.stringify(e));
                    }
                    e.ryw__data.push(n);
                }
                return e;
            }
            return e.ryw__data.push(new v()), e;
        }
        ryw_getAppSwitchData() {
            return this.ryw__data[0];
        }
    }
    class E {
        static ryw_wxLogin(e, t) {
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.login({
                success: t => {
                    if (t.code) {
                        let r = t.code;
                        e(r), console.log("登陆成功,获取到code : " + r);
                    }
                }
            });
        }
        static ryw_onRewardedVideoAdLoad() {
            console.log("激励视频 广告加载完成");
        }
        static ryw_onRewardedVideoAdError(e) {
            console.log("激励视频 广告加载失败" + e), E.ryw__onRewardedVideoAdFailed && E.ryw__onRewardedVideoAdFailed();
        }
        static ryw_onRewardedVideoAdClose(e) {
            e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), E.ryw__onRewardedVideoAdClose && E.ryw__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                E.ryw__onRewardedVideoAdClose && E.ryw__onRewardedVideoAdClose(!1));
        }
        static ryw_regRewardedVideoAdEvent(e) {
            e.onLoad(E.ryw_onRewardedVideoAdLoad), e.onError(E.ryw_onRewardedVideoAdError),
                e.onClose(E.ryw_onRewardedVideoAdClose), E.ryw__isRegRewardedVideoAdEvent = !0;
        }
        static ryw_showRewardedVideoAd(e, t) {
            platform.getInstance().showReward(() => {
                e && e(!0);
            }, () => {
                t && t(!0);
            })
        }
        static ryw_navigateToMiniProgram(e, t, r, i, n) {
            Laya.Browser.onMiniGame && (console.log("跳转游戏： " + e), Laya.Browser.window.wx.navigateToMiniProgram({
                appId: e,
                path: t,
                extraData: {
                    foo: "bar"
                },
                envVersion: "release",
                success(e) {
                    r && r(e);
                },
                fail(e) {
                    i && i(e);
                },
                complete(e) {
                    n && n(e);
                }
            }));
        }
        static ryw_share(e, t, r) {
            Laya.Browser.onMiniGame && (E.ryw__onShow = (() => {
                Laya.Browser.window.wx.offShow(E.ryw__onShow), E.ryw__onShow = null;
                Date.now(), this.ryw__lastShareTime;
                e && (Date.now() - this.ryw__lastShareTime > 2e3 ? e(!0) : e(!1));
            }), Laya.Browser.window.wx.onShow(E.ryw__onShow), E.ryw__lastShareTime = Date.now(),
                Laya.Browser.window.wx.shareAppMessage({
                    title: t,
                    imageUrl: r
                }));
        }
        static ryw_showInterstitialAd(e, t) {
            if (Laya.Browser.onMiniGame) {
                var r = Laya.Browser.window.wx.createInterstitialAd({
                    adUnitId: E.ryw_InsAdUnitId
                });
                r.onLoad(() => {
                    console.log("插屏广告 加载完成"), r.show().catch(e => {
                        console.log("插屏广告 显示失败 ：" + e), t && t();
                    });
                }), r.onError(e => {
                    console.log("插屏广告 加载失败" + e), t && t();
                }), r.onClose(() => {
                    console.log("插屏广告 关闭"), e && e();
                });
            } else e();
        }
        static ryw_getLaunchOptionsSync() {
            if (Laya.Browser.onMiniGame) {
                let e = Laya.Browser.window.wx.getLaunchOptionsSync();
                console.log("场景值 " + e.scene);
                let t = JSON.stringify(e.query);
                console.log("Query参数 " + t);
                let r = e.query.key;
                return console.log("Query参数：key " + r), console.log("ShareTicket " + e.shareTicket),
                    console.log("ReferrerInfo.appId " + e.referrerInfo.appId), console.log("ReferrerInfo.extraData " + e.referrerInfo.extraData),
                    e;
            }
            return {
                scene: 1001,
                query: "",
                shareTicket: "",
                appId: "",
                extraData: ""
            };
        }
        static ryw_SetShareMenu(e, t, r, i, n) {
            Laya.Browser.onMiniGame && (console.log("小游戏设置转发按钮"), Laya.Browser.window.wx.showShareMenu({
                withShareTicket: !1,
                success: r,
                fail: i,
                complete: n
            }), Laya.Browser.window.wx.onShareAppMessage(function () {
                return {
                    title: e,
                    imageUrl: t
                };
            }));
        }
        static ryw_checkUpdate() {
            if (Laya.Browser.onMiniGame) {
                var e = Laya.Browser.window.wx.getUpdateManager();
                e.onCheckForUpdate(function (e) {
                    console.log("是否需要更新 : ", e.hasUpdate);
                }), e.onUpdateReady(function () {
                    Laya.Browser.window.wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启小游戏？",
                        success: function (t) {
                            t.confirm && e.applyUpdate();
                        }
                    });
                }), e.onUpdateFailed(function () {
                    console.log("新版本下载失败!!!");
                });
            }
        }
        static tryShowWXCrazyClick(e, t, r, i) {
            if (!N.ryw_WudianFlag || 1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner) return void (i && i());
            let n = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianLevelSpcacing;
            if (0 != n) {
                0 == E._crazyClickShowCounter % n ? Laya.timer.once(3300, this, function () {
                    R.ryw_instance.ryw_openView(w.ryw_WXCrazyClick, {
                        Complete: t,
                        titel: e
                    }, e => {
                        r && r();
                    });
                }) : i && i(), ++E._crazyClickShowCounter;
            } else Laya.timer.once(3300, this, function () {
                R.ryw_instance.ryw_openView(w.ryw_WXCrazyClick, {
                    Complete: t,
                    titel: e
                }, e => {
                    r && r();
                });
            });
        }
    }
    E.ryw_adUnitId = "adunit-34eb7092cc7ab967", E.ryw_bannerAdUnitId = "adunit-ddfa85bf4306713f",
        E.ryw_InsAdUnitId = "adunit-440e21cc02c0d282", E.GameRecorder = new class {
            constructor() {
                this._recorder = null;
            }
            get recorder() {
                return this._recorder;
            }
            start() {
                null != this.recorder && this.recorder.start();
            }
            stop() {
                null != this.recorder && this.recorder.stop();
            }
            pause() {
                null != this.recorder && this.recorder.pause();
            }
            resume() {
                null != this.recorder && this.recorder.resume();
            }
            abort() {
                null != this.recorder && this.recorder.abort();
            }
            showShareBtn() {
                null != this.recorder && Laya.Browser.window.wx.createGameRecorderShareButton({
                    style: {
                        left: 10,
                        top: 150,
                        height: 50,
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 16,
                        borderRadius: 4,
                        iconMarginRight: 16,
                        paddingLeft: 1,
                        paddingRight: 30
                    },
                    image: "button.jpg",
                    text: "自定义文案",
                    icon: "icon.jpg",
                    share: {
                        query: "a=1&b=2",
                        bgm: "walkin.mp3",
                        timeRange: [[0, 1e3], [2e3, 3e3]],
                        title: {
                            template: "default.score",
                            data: {
                                score: 6500
                            }
                        },
                        button: {
                            template: "default.enter"
                        }
                    }
                });
            }
        }(), E.ryw__isRegRewardedVideoAdEvent = !1, E.ryw__onRewardedVideoAdFailed = null,
        E.ryw__onRewardedVideoAdClose = null, E.ryw__onShow = null, E.ryw__lastShareTime = 0,
        E._crazyClickShowCounter = 0;
    class x {
        static ryw_Login(e, t) {
            Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.login({
                success: t => {
                    if (t.code) {
                        let r = t.code;
                        e(r), console.log("登陆成功,获取到code : " + r);
                    }
                }
            });
        }
        static ryw_onRewardedVideoAdLoad() {
            console.log("激励视频 广告加载完成");
        }
        static ryw_onRewardedVideoAdError(e) {
            console.log("激励视频 广告加载失败" + e), x.ryw__onRewardedVideoAdFailed && x.ryw__onRewardedVideoAdFailed();
        }
        static ryw_onRewardedVideoAdClose(e) {
            e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), x.ryw__onRewardedVideoAdClose && x.ryw__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                x.ryw__onRewardedVideoAdClose && x.ryw__onRewardedVideoAdClose(!1));
        }
        static ryw_regRewardedVideoAdEvent(e) {
            e.onLoad(x.ryw_onRewardedVideoAdLoad), e.onError(x.ryw_onRewardedVideoAdError),
                e.onClose(x.ryw_onRewardedVideoAdClose), x.ryw__isRegRewardedVideoAdEvent = !0;
        }
        static ryw_showRewardedVideoAd(e, t) {
            platform.getInstance().showReward(() => {
                e && e(!0);
            }, () => {
                t && t(!0);
            })
        }
        static ryw_navigateToMiniProgram(e, t, r, i, n) {
            Laya.Browser.onQQMiniGame && (console.log("跳转游戏： " + e), Laya.Browser.window.qq.navigateToMiniProgram({
                appId: e,
                path: t,
                extraData: {
                    foo: "bar"
                },
                envVersion: "release",
                success(e) {
                    r && r(e);
                },
                fail(e) {
                    i && i(e);
                },
                complete(e) {
                    n && n(e);
                }
            }));
        }
        static ryw_share(e, t, r) {
            Laya.Browser.onQQMiniGame && (x.ryw__onShow = (() => {
                Laya.Browser.window.qq.offShow(x.ryw__onShow), x.ryw__onShow = null;
                Date.now(), this.ryw__lastShareTime;
                e && (Date.now() - this.ryw__lastShareTime > 2e3 ? e(!0) : e(!1));
            }), Laya.Browser.window.qq.onShow(x.ryw__onShow), x.ryw__lastShareTime = Date.now(),
                Laya.Browser.window.qq.shareAppMessage({
                    title: t,
                    imageUrl: r
                }));
        }
        static ryw_showInterstitialAd(e, t) {
            if (Laya.Browser.onQQMiniGame) {
                var r = Laya.Browser.window.qq.createInterstitialAd({
                    adUnitId: x.ryw_InsAdUnitId
                });
                let i = () => {
                    console.log("插屏广告 加载完成"), r.show().catch(e => {
                        console.log("插屏广告 显示失败 ：" + e), r.offLoad(i), r.offError(n), r.offClose(a), r.destroy(),
                            t && t();
                    });
                };
                r.onLoad(i);
                let n = e => {
                    console.log("插屏广告 加载失败" + e), r.offLoad(i), r.offError(n), r.offClose(a), r.destroy(),
                        t && t();
                };
                r.onError(n);
                let a = () => {
                    console.log("插屏广告 关闭"), r.offLoad(i), r.offError(n), r.offClose(a), r.destroy(),
                        e && e();
                };
                r.onClose(a);
            } else e();
        }
        static ryw_LoadAppBoxAd(e, t) {
            Laya.Browser.onQQMiniGame ? (x.ryw_mAppboxAd = Laya.Browser.window.qq.createAppBox({
                adUnitId: x.ryw_AppBoxId
            }), x.ryw_mAppboxAd.load().then(() => {
                console.log("盒子广告 加载完成");
            }), x.ryw_mAppboxAd.onError(e => {
                console.log("盒子广告 加载失败" + e), t && t();
            }), x.ryw_onBoxAdClose = (() => {
                console.log("盒子广告 关闭"), e && e();
            }), x.ryw_mAppboxAd.onClose(x.ryw_onBoxAdClose)) : e();
        }
        static ryw_showAppBoxAd(e, t) {
            x.ryw_mAppboxAd ? (console.log("显示盒子广告"), x.ryw_mAppboxAd.offClose(x.ryw_onBoxAdClose),
                x.ryw_onBoxAdClose = (() => {
                    console.log("盒子广告 关闭"), t && t();
                }), x.ryw_mAppboxAd.onClose(x.ryw_onBoxAdClose), x.ryw_mAppboxAd.show().catch(t => {
                    console.log("盒子广告 显示失败 ：" + t), e && e();
                })) : x.ryw_LoadAppBoxAd(t, e);
        }
        static ryw_getLaunchOptionsSync() {
            if (Laya.Browser.onQQMiniGame) {
                let e = Laya.Browser.window.qq.getLaunchOptionsSync();
                console.log("场景值 " + e.scene);
                let t = JSON.stringify(e.query);
                console.log("Query参数 " + t);
                let r = e.query.key;
                return console.log("Query参数：key " + r), console.log("ShareTicket " + e.shareTicket),
                    console.log("ReferrerInfo.appId " + e.referrerInfo.appId), console.log("ReferrerInfo.extraData " + e.referrerInfo.extraData),
                    e;
            }
            return {
                scene: 1001,
                query: "",
                shareTicket: "",
                appId: "",
                extraData: ""
            };
        }
        static ryw_SetShareMenu(e, t, r, i, n) {
            Laya.Browser.onQQMiniGame && (console.log("小游戏设置转发按钮"), Laya.Browser.window.qq.showShareMenu({
                withShareTicket: !1,
                success: r,
                fail: i,
                complete: n
            }), Laya.Browser.window.qq.onShareAppMessage(function () {
                return {
                    title: e,
                    imageUrl: t
                };
            }));
        }
        static showQQCreazyClick(e, t, r) {
            let i = x.ryw_getLaunchOptionsSync().scene, n = !0, a = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
            for (let e = 0; e < a.length; ++e) {
                i == a[e] && (n = !1);
            }
            let s = N.ryw_GetIpBlocked(), o = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian, y = D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_kuangdianBanner;
            B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_qqversions && s && n && 1 == o && 1 == y ? R.ryw_instance.ryw_openView(w.ryw_QQCrazyClickView, e, () => {
                null != t && t();
            }) : null != r && r();
        }
        static showQQCreazyClick2(e, t, r) {
            let i = x.ryw_getLaunchOptionsSync().scene, n = !0, a = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
            for (let e = 0; e < a.length; ++e) {
                i == a[e] && (n = !1);
            }
            let s = N.ryw_GetIpBlocked(), o = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian, y = D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_kuangdianBox;
            B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_qqversions && s && n && 1 == o && 1 == y ? R.ryw_instance.ryw_openView(w.ryw_QQCrazyClickView2, e, () => {
                null != t && t();
            }) : null != r && r();
        }
        static ryw_showAppBlockAd(e, t = 150, r = "landscape") {
            if (!Laya.Browser.onQQMiniGame) return;
            if (!Laya.Browser.window.qq.createBlockAd) return;
            if (x.ryw_isAppBlockAdLoading) return;
            if (x.ryw_isAppBlockAdLoading = !0, isNaN(x.ryw_screenWidth)) try {
                let t = Laya.Browser.window.qq.getSystemInfoSync();
                x.ryw_screenWidth = t.windowWidth, x.ryw_screenHeight = t.windowHeight, x.ryw_pixelRatio = t.pixelRatio,
                    x.ryw_isIos = "ios" == t.platform, x.ryw_skdVersion = t.SDKVersion, x.ryw_screenWidth *= x.ryw_isIos ? 1 : x.ryw_pixelRatio,
                    x.ryw_screenHeight *= x.ryw_isIos ? 1 : x.ryw_pixelRatio, console.log("getSystemInfoSync ==> ", t.SDKVersion);
            } catch (t) {
                return void (e && e());
            }
            let i = x.ryw_skdVersion.split(".").map(e => parseInt(e)), n = x.ryw_supportSDKVersion.split(".").map(e => parseInt(e)), a = !0;
            for (let e = 0; e < i.length; e++) if (i[e] < n[e]) {
                a = !1;
                break;
            }
            if (!a) return;
            console.log("ryw_QQMiniGameAPI.showAppBlockAd ", t), x.ryw_destroyAppBlockAd(),
                x.ryw_onFail = e;
            let s = x.ryw_isIos ? 32 / x.ryw_pixelRatio : 32, o = Math.max(s, t / (x.ryw_isIos ? x.ryw_pixelRatio : 1)), w = x.ryw_screenWidth / 2;
            w = s, x.ryw_mAppBlockAd = Laya.Browser.window.qq.createBlockAd({
                adUnitId: x.ryw_blockAdArray[Math.floor(Math.random() * x.ryw_blockAdArray.length)],
                style: {
                    left: w,
                    top: o
                },
                size: x.ryw_AppBlockSize,
                orientation: r
            }), x.ryw_mAppBlockAd.onError(x.ryw_appBlockADError), x.ryw_mAppBlockAd.show().catch(t => {
                console.log("积木广告 显示失败 ：" + JSON.stringify(t)), e && e();
            }), x.ryw_isAppBlockAdLoading = !1;
        }
        static ryw_appBlockADResize(e) {
            if (!x.ryw_mAppBlockAd.style) return;
            let t = e.width, r = (e.height, (x.ryw_screenWidth - t) / 2);
            x.ryw_mAppBlockAd.style.left = r;
        }
        static ryw_appBlockADError(e) {
            console.log("积木广告  加载失败 ", JSON.stringify(e)), x.ryw_onFail && x.ryw_onFail();
        }
        static ryw_destroyAppBlockAd() {
            Laya.Browser.onQQMiniGame && x.ryw_mAppBlockAd && (console.log("ryw_QQMiniGameAPI.destroyAppBlockAd"),
                x.ryw_mAppBlockAd.offResize(x.ryw_appBlockADResize), x.ryw_mAppBlockAd.offError(x.ryw_appBlockADError),
                x.ryw_mAppBlockAd.hide(), x.ryw_mAppBlockAd.destroy(), x.ryw_mAppBlockAd = null);
        }
    }
    x.ryw_adUnitId = "", x.ryw_bannerAdUnitId = "", x.ryw_InsAdUnitId = "", x.ryw_AppBoxId = "",
        x.ryw_blockAdArray = [], x.ryw_AppBlockStyle = {
            left: 120,
            top: 200
        }, x.ryw_AppBlockSize = 5, x.ryw_AppBlockOrientation = "landscape", x.ryw__isRegRewardedVideoAdEvent = !1,
        x.ryw__onRewardedVideoAdFailed = null, x.ryw__onRewardedVideoAdClose = null, x.ryw__onShow = null,
        x.ryw__lastShareTime = 0, x.ryw_mAppboxAd = null, x.ryw_onBoxAdClose = null, x.ryw_mAppBlockAd = null,
        x.ryw_screenWidth = NaN, x.ryw_isAppBlockAdLoading = !1, x.ryw_supportSDKVersion = "1.15.0";
    class M {
        static ryw_ttLogin(e, t) {
            B.onTTMiniGame && (Laya.Browser.window.tt.login({
                force: !1,
                success: r => {
                    console.log("登陆成功1");
                    let i = r.code;
                    i ? e(i) : (console.log("用户没有登陆，采用临时code"), t());
                },
                fail: () => {
                    console.log("登陆失败1"), t();
                }
            }), M.ryw_initRecord());
        }
        static ryw_onRewardedVideoAdLoad() {
            console.log("激励视频 广告加载完成");
        }
        static ryw_onRewardedVideoAdError(e) {
            console.log("激励视频 广告加载失败" + e), M.ryw__onRewardedVideoAdFailed && M.ryw__onRewardedVideoAdFailed();
        }
        static ryw_onRewardedVideoAdClose(e) {
            e && e.isEnded || null == e ? (console.log("激励视频 已完整观看"), M.ryw__onRewardedVideoAdClose && M.ryw__onRewardedVideoAdClose(!0)) : (console.log("激励视频 未完整观看"),
                M.ryw__onRewardedVideoAdClose && M.ryw__onRewardedVideoAdClose(!1));
        }
        static ryw_regRewardedVideoAdEvent(e) {
            e.onLoad(M.ryw_onRewardedVideoAdLoad), e.onError(M.ryw_onRewardedVideoAdError),
                e.onClose(M.ryw_onRewardedVideoAdClose), M.ryw__isRegRewardedVideoAdEvent = !0;
        }
        static ryw_showRewardedVideoAd(e, t) {
            platform.getInstance().showReward(() => {
                e && e(!0);
            }, () => {
                t && t(!0);
            })
        }
        static ryw_initRecord() {
            M.ryw_record = Laya.Browser.window.tt.getGameRecorderManager(), null != M.ryw_record && (M.ryw_record.onStart(e => {
                console.log("录屏开始"), M.ryw_recordRes = "";
            }), M.ryw_record.onStop(e => {
                console.log("录屏结束"), M.ryw_recordRes = e.videoPath;
            }));
        }
        static ryw_startRecord(e = 300) {
            B.onTTMiniGame && M.ryw_record.start({
                duration: e
            });
        }
        static ryw_stopRecord() {
            B.onTTMiniGame && M.ryw_record.stop();
        }
        static ryw_shareRecord(e = null, t = null) {
            B.onTTMiniGame && ("" != M.ryw_recordRes ? window.tt.shareAppMessage({
                channel: "video",
                extra: {
                    videoPath: M.ryw_recordRes,
                    videoTopics: [B.ryw_GameName]
                },
                success() {
                    null != e && e(), console.log("分享视频成功");
                },
                fail(e) {
                    console.log("分享视频失败"), null != t && t();
                }
            }) : (null != t && t(), console.log("分享视频为空")));
        }
        static ryw_share(e = null) {
            B.onTTMiniGame && window.tt.shareAppMessage({
                templateId: M.ryw__templateId,
                success() {
                    null != e && e();
                },
                fail() {
                    console.log("分享失败");
                }
            });
        }
        static ryw_showBanner() {
            if (B.onTTMiniGame && !(M.ryw_bannerAdUnitId.length <= 0)) {
                if (!M.ryw__banner) {
                    let e = Laya.Browser.window.tt.getSystemInfoSync();
                    M.ryw__banner = Laya.Browser.window.tt.createBannerAd({
                        adUnitId: M.ryw_bannerAdUnitId,
                        adIntervals: 30,
                        style: {
                            width: 150,
                            top: e.windowHeight - 84.375
                        }
                    }), M.ryw__banner.onResize(t => {
                        console.log(t.width, t.height), M.ryw__banner.style.top = e.windowHeight - t.height,
                            M.ryw__banner.style.left = (e.windowWidth - t.width) / 2;
                    });
                }
                M.ryw__banner.show();
            }
        }
        static ryw_hideBanner() {
            null != M.ryw__banner && M.ryw__banner.hide();
        }
        static ryw_showMoreGamesModal(e, t) {
            "ios" !== Laya.Browser.window.tt.getSystemInfoSync().platform ? Laya.Browser.window.tt.showMoreGamesModal({
                appLaunchOptions: [{
                    appId: B.ryw_AppID,
                    query: "foo=bar&baz=qux",
                    extraData: {}
                }],
                success(t) {
                    console.log("success", t.errMsg), e && e();
                },
                fail(e) {
                    console.log("fail", e.errMsg), t && t();
                }
            }) : t && t();
        }
        static autoOpenSignInView(e, t) {
            L.GetSignIn(r => {
                let i = 1, n = 1;
                r.data && (i = r.data.is_sign, n = r.data.sign_day_num), 0 == i ? null == t || 0 == t ? R.ryw_instance.ryw_openView(w.ryw_TTSignInView, null, () => {
                    e(!0);
                }) : 1 == t && R.ryw_instance.ryw_openView(w.ryw_TT2SignIn, null, () => {
                    e(!0);
                }) : e(!1);
            }, () => {
                e(!1);
            });
        }
        static getLaunchOptionsSync() {
            if (B.onTTMiniGame) {
                let e = Laya.Browser.window.tt.getLaunchOptionsSync();
                console.log("obj ", e), console.log("场景值 " + e.scene);
                let t = JSON.stringify(e.query);
                console.log("Query参数 " + t);
                let r = e.query.key;
                return console.log("Query参数：key " + r), e;
            }
            return {
                scene: 1001,
                query: ""
            };
        }
    }
    M.ryw_adUnitId = "", M.ryw_bannerAdUnitId = "", M.ryw_InsAdUnitId = "", M.ryw__templateId = "",
        M.ryw_recordRes = "", M.ryw__banner = null, M.ryw__isRegRewardedVideoAdEvent = !1,
        M.ryw__onRewardedVideoAdFailed = null, M.ryw__onRewardedVideoAdClose = null;
    class N {
        static ryw_IpBlockFlag() {
            return N.ryw__ipBlockFlag;
        }
        static ryw_UpdateIpBlockState() {
            L.ryw_GetIpBlock(function (e) {
                console.log("调用IpBlock接口成功,结果为:", e), N.ryw__ipBlockFlag = e.code, i.ryw_instance.ryw_dispatch(t.ryw_App_OnUpdateIpBlockState, {
                    ipBlockFlag: N.ryw__ipBlockFlag
                });
            }, null);
        }
        static ryw_GetIpBlocked() {
            return 0 == N.ryw__ipBlockFlag;
        }
        static ryw_GetEntryScene() {
            return 1006 == E.ryw_getLaunchOptionsSync().scene;
        }
        static ryw_IsSwitchOpen() {
            let e = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian, t = D.ryw_getInstance().ryw_getAppSwitchData().wudianTimeAvaliable;
            return console.log("误点Flag状态: ", "总开关:", e, "打开时间", t), e && t;
        }
        static get ryw_WudianFlag() {
            let e = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian, t = D.ryw_getInstance().ryw_getAppSwitchData().wudianTimeAvaliable, r = 0 == this.ryw__ipBlockFlag, i = null;
            Laya.Browser.onMiniGame ? i = E.ryw_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame ? i = x.ryw_getLaunchOptionsSync().scene : B.onTTMiniGame && (i = M.getLaunchOptionsSync().scene,
                e = !0, t = !0);
            let n = !0;
            for (var a = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList, s = 0; s < a.length; ++s) {
                i == a[s] && (n = !1);
            }
            return console.log("误点Flag状态: ", "总开关:", e, "场景进入", n, "IP未被屏蔽", r, "打开时间", t),
                e && n && r && t;
        }
        static get ryw_NoTimeWudianFlag() {
            let e = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian, t = null;
            Laya.Browser.onMiniGame ? t = E.ryw_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (t = x.ryw_getLaunchOptionsSync().scene);
            let r = !0;
            for (var i = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList, n = 0; n < i.length; ++n) {
                t == i[n] && (r = !1);
            }
            let a = 0 == N.ryw__ipBlockFlag;
            return console.log("误点Flag状态: ", "总开关:", e, "场景进入", r, "IP未被屏蔽"), e && r && a;
        }
        static get ryw_isEnterBySerach() {
            let e = null;
            Laya.Browser.onMiniGame ? e = E.ryw_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (e = x.ryw_getLaunchOptionsSync().scene);
            let t = !0;
            for (var r = [1011, 1012, 1013, 1047, 1017], i = 0; i < r.length; ++i) {
                e == r[i] && (t = !1);
            }
            return console.log("场景进入", t), t;
        }
    }
    N.ryw__ipBlockFlag = -1, function (e) {
        e.ryw_None = "", e.ryw_TipLogin = "View/Login.json", e.ryw_TipsView = "View/TipsView.json",
            e.ryw_ClickGetPrize = "View/ClickGetPrize.json", e.ryw_MainView = "View/Template/MainViewTemplate.json",
            e.ryw_MiniGameView = "View/Template/MiniGameViewTemplate.json", e.ryw_RewardView = "View/Template/RewardViewTemplate.json",
            e.ryw_InGameView = "View/Template/InGameViewTemplate.json", e.ryw_GameWinView = "View/Template/GameWinViewTemplate.json",
            e.ryw_GameFailView = "View/Template/GameFailViewTemplate.json", e.ryw_ExportView = "View/Template/ExportViewTemplate.json",
            e.ryw_Export2View = "View/Template/Export2ViewTemplate.json", e.ryw_Export3View = "View/Template/Export3ViewTemplate.json",
            e.ryw_WXCrazyClick = "View/Template/WXCrazyClick.json", e.ryw_OPPONativeView = "View/Template/OPPONativeViewTemplate.json",
            e.ryw_QQCrazyClickView = "View/Template/QQ/QQCrazyClick.json", e.ryw_QQCrazyClickView2 = "View/Template/QQ/QQCrazyClick2.json",
            e.ryw_TTStoreView = "View/Template/TT/TTStore.json", e.ryw_TTSignInView = "View/Template/TT/TTSignIn.json",
            e.ryw_TTRewardView = "View/Template/TT/TTReward.json", e.ryw_TTCrazyClick = "View/Template/TT/TTCrazyClick.json",
            e.ryw_TTGameFailViewTemplate = "View/Template/TT/TTGameFailViewTemplate.json", e.ryw_TTGameWinViewTemplate = "View/Template/TT/TTGameWinViewTemplate.json",
            e.ryw_TTMainViewTemplate = "View/Template/TT/TTMainViewTemplate.json", e.ryw_TTMoreReward = "View/Template/TT/TTMoreReward.json",
            e.ryw_TTResurrection = "View/Template/TT/TTResurrection.json", e.ryw_TTReward = "View/Template/TT/TTReward.json",
            e.ryw_TTSignIn = "View/Template/TT/TTSignIn.json", e.ryw_TTSkinTips = "View/Template/TT/TTSkinTips.json",
            e.ryw_TTStore = "View/Template/TT/TTStore.json", e.VVNativeView1 = "View/Template/VV/VVNativeView1Template.json",
            e.VVNativeView2 = "View/Template/VV/VVNativeView2Template.json", e.ryw_TT2Export = "View/Template/TT2/TT2Export.json",
            e.ryw_TT2GameFail = "View/Template/TT2/TT2GameFail.json", e.ryw_TT2GameWin = "View/Template/TT2/TT2GameWin.json",
            e.ryw_TT2Main = "View/Template/TT2/TT2Main.json", e.ryw_TT2Relive = "View/Template/TT2/TT2Relive.json",
            e.ryw_TT2MoreReward = "View/Template/TT2/TT2MoreReward.json", e.ryw_TT2ShareRecord = "View/Template/TT2/TT2ShareRecord.json",
            e.ryw_TT2SignIn = "View/Template/TT2/TT2SignIn.json", e.ryw_TT2StartTry = "View/Template/TT2/TT2StartTry.json",
            e.ryw_TT2Reward = "View/Template/TT2/TT2Reward.json", e.OPPOGameWin = "View/Template/OPPO/OPPOGameWin.json",
            e.OPPOGameFail = "View/Template/OPPO/OPPOGameFail.json", e.OPPOInGame = "View/Template/OPPO/OPPOInGame.json",
            e.OPPOMain = "View/Template/OPPO/OPPOMain.json", e.OPPOReward = "View/Template/OPPO/OPPOReward.json",
            e.WXGameFail = "View/Template/WX/WXGameFailViewTemplate.json", e.WXGameWin = "View/Template/WX/WXGameWinViewTemplate.json",
            e.WXInGame = "View/Template/WX/WXInGameViewTemplate.json", e.WXMain = "View/Template/WX/WXMainViewTemplate.json",
            e.WXExport = "View/Template/WX/WXExportViewTemplate.json", e.WXExport2 = "View/Template/WX/WXExport2ViewTemplate.json",
            e.DebugInfo = "View/DebugInfo.json", e.GameView = "subRes/Views/GameView.json",
            e.GameWin = "subRes/Views/GameWin.json", e.BuZuView = "subRes/Views/BuZuView.json",
            e.TreasureBoxView = "subRes/Views/TreasureBoxView.json", e.ResurgenceView = "subRes/Views/ResurgenceView.json";
    }(w || (w = {}));
    class R {
        constructor() {
            this.ryw__views = {}, this.ryw__loadingList = new Array();
        }
        ryw_openView(e, t, r) {
            if (this.ryw__views[e]) {
                let i = this.ryw__views[e]._components, n = null;
                if (i) for (let e = 0; e < i.length; e++) {
                    const r = i[e];
                    if (r._viewBase) {
                        (n = r).ryw_openView(t);
                        break;
                    }
                }
                r && r(n);
            } else {
                for (let t = 0; t < this.ryw__loadingList.length; ++t) {
                    let r = this.ryw__loadingList[t];
                    if (r == e) return void console.log("界面 : " + String(r) + " 正在加载中，请不要重复加载");
                }
                var i = String(e), n = this;
                this.ryw__loadingList.push(e), Laya.Scene.load(i, Laya.Handler.create(this, function (i) {
                    Laya.stage.addChild(i);
                    var a = i;
                    n.ryw__views[e] = a;
                    let s = i._components, o = null;
                    if (s) for (let r = 0; r < s.length; r++) {
                        const i = s[r];
                        if (i._viewBase) {
                            o = i, i._viewDef = e, o.ryw_openView(t);
                            break;
                        }
                    }
                    for (let t = 0; t < n.ryw__loadingList.length; ++t) {
                        if (n.ryw__loadingList[t] == e) {
                            n.ryw__loadingList.splice(t, 1);
                            break;
                        }
                    }
                    r && r(o);
                }));
            }
        }
        ryw_closeView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let r = t._components;
                if (r) for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    if (t._viewBase) {
                        t.onClose();
                        break;
                    }
                }
                t.removeSelf(), t.destroy(), this.ryw__views[e] = null;
            }
        }
        ryw_ShowView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let e = t._components;
                if (e) for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (r._viewBase) {
                        r.ryw_show();
                        break;
                    }
                }
            }
        }
        ryw_hideView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let e = t._components;
                if (e) for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (r._viewBase) {
                        r.ryw_hide();
                        break;
                    }
                }
            }
        }
        ryw_getView(e) {
            return this.ryw__views[e];
        }
        ryw_showTips(e) {
            this.ryw_openView(w.ryw_TipsView, e);
        }
        tryShowPopAd(e) {
            1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_popAd && N.ryw_WudianFlag ? R.ryw_instance.ryw_openView(w.WXExport, null, t => {
                null != e && e(t);
            }) : null != e && e(null);
        }
    }
    R.ryw_instance = new R();
    class G {
        static preloadBanner() { }
        static show(e) {
            let t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxWuDianBanners;
            D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerTodayBannerMax;
            if (e = t[Math.floor(Math.random() * t.length)], Laya.Browser.onQQMiniGame && null != e) {
                let t = Laya.Browser.window.qq.getSystemInfoSync(), r = t.screenWidth, i = t.screenHeight, n = Laya.Browser.window.qq.createBannerAd({
                    adUnitId: e,
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: (Laya.stage.height - 240) / Laya.stage.height * i,
                        width: r
                    }
                });
                if (n) {
                    let t = this;
                    G.ryw__onLoad = (r => {
                        console.log("CachedQQBanner 广告 加载完成", e), console.log(r), t.ryw__isHide ? (n.offLoad(G.ryw__onLoad),
                            n.offError(G.ryw__onError), n.destroy()) : n.show();
                    }), n.onLoad(G.ryw__onLoad), G.ryw__onError = (t => {
                        console.log("CachedQQBanner 广告 加载失败", e), console.log(t), n.offLoad(G.ryw__onLoad),
                            n.offError(G.ryw__onError), n.destroy();
                    }), n.onError(G.ryw__onError), G.ryw__curBanner = n;
                }
            }
            G.ryw__isHide = !1;
        }
        static hide() {
            G.ryw__isHide = !0, Laya.timer.clearAll(G), null != G.ryw__curBanner && (G.ryw__curBanner.hide(),
                G.ryw__curBanner.offLoad(G.ryw__onLoad), G.ryw__curBanner.offError(G.ryw__onError),
                G.ryw__curBanner.destroy(), G.ryw__curBanner = null, console.log("CachedQQBanner 广告隐藏"));
        }
        static changeShow() {
            null != G.ryw__curBanner && (G.ryw__curBanner.hide(), G.ryw__curBanner = null),
                G.show();
        }
        static clear() { }
    }
    G.ryw__curBanner = null, G.ryw__onLoad = null, G.ryw__onError = null, G.ryw__isHide = !0;
    class O {
        static ryw_Lerp(e, t, r) {
            return e == t ? t : e > t ? (i = e - r) <= t ? t : i : e < t ? (i = e + r) >= t ? t : i : void 0;
            var i;
        }
        static ryw_lerpEulerAngle(e, t, r) {
            return e = (e = e % 360) >= 0 ? e : 360 + e, t = (t = t % 360) >= 0 ? t : 360 + t,
                Math.abs(t - e) > 180 && (e < t ? t -= 360 : e > t && (t += 360)), O.ryw_Lerp(e, t, r);
        }
        static ryw_getRotationByDir(e) {
            var t = (e.x * O.ryw_poinDown.x + e.y * O.ryw_poinDown.y) / (e.distance(0, 0) * O.ryw_poinDown.distance(0, 0)), r = Math.acos(t) / (2 * Math.PI) * 360;
            return e.x < 0 && (r = -r), r;
        }
        static ryw_getRotationByDirOn3DSpace(e) {
            var t = (e.x * O.ryw_poinUp.x + e.y * O.ryw_poinUp.y) / (e.distance(0, 0) * O.ryw_poinUp.distance(0, 0)), r = Math.acos(t) / (2 * Math.PI) * 360;
            return e.x < 0 && (r += 2 * (180 - r)), r;
        }
        static ryw_getDirByRotation(e) {
            var t = (e - 90) * Math.PI / 180, r = Math.cos(t), i = Math.sin(t), n = new Laya.Point(r, i);
            return n.normalize(), n;
        }
        static ryw_getDirDirAngle(e, t) {
            var r = (e.x * t.x + e.y * t.y) / (e.distance(0, 0) * t.distance(0, 0));
            return Math.acos(r) / (2 * Math.PI) * 360;
        }
        static ryw_getDirScalarLength(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        static ryw_setSpOnParentCenter(e) {
            if (null != e.parent) {
                var t = e.parent, r = 0, i = (i = 0) - e.width / 2 * e.scaleX + t.width / 2;
                r = r - e.height / 2 * e.scaleY + t.height / 2;
                e.x = i, e.y = r;
            }
        }
        static ryw_getPointToLineDistance(e, t, r, i) {
            var n = new Laya.Point(e - r.x, t - r.y), a = new Laya.Point(e - i.x, t - i.y), s = new Laya.Point(i.x - r.y, i.y - r.y), o = s.x * n.x + s.y * n.y;
            if (o <= 0) return n.distance(0, 0);
            if (s.x * a.x + s.y * a.y <= 0) return a.distance(0, 0);
            var w = n.distance(0, 0), y = o / (w * s.distance(0, 0)), _ = Math.acos(y);
            return Math.sin(_) * w;
        }
        static ryw_isIphoneX() {
            return !!Laya.Browser.onIPhone && (2436 == Laya.Browser.width && 1125 == Laya.Browser.height || 2436 == Laya.Browser.height && 1125 == Laya.Browser.width);
        }
        static ryw_isIphone() {
            return Laya.Browser.onIPhone;
        }
        static ryw_getChild(e, t) {
            for (var r = 0; r < e.numChildren; ++r) {
                var i = e.getChildAt(r);
                if (i.name == t) return i;
                var n = O.ryw_getChild(i, t);
                if (n) return n;
            }
            return null;
        }
        static ryw_forEachChild(e, t) {
            for (let r = 0; r < e.numChildren; ++r) {
                let i = e.getChildAt(r);
                t(i), O.ryw_forEachChild(i, t);
            }
        }
        static LerpNumber(e, t, r) {
            return e + r * (t - e);
        }
        static Vector3Angle(e, t, r = 1) {
            e = e.clone(), Laya.Vector3.normalize(e, e), t = t.clone(), Laya.Vector3.normalize(t, t);
            var i = Laya.Vector3.dot(e, t);
            i = Math.max(-1, Math.min(1, i)), O.isZero(i) && (i = 0);
            let n = Math.acos(i) * (180 / Math.PI);
            var a = new Laya.Vector3();
            switch (Laya.Vector3.cross(e, t, a), r) {
                case 0:
                    a.x < 0 && (n *= -1);
                    break;

                case 1:
                    a.y < 0 && (n *= -1);
                    break;

                case 2:
                    a.z < 0 && (n *= -1);
                    break;

                default:
                    a.y < 0 && (n *= -1);
            }
            return O.isZeroByValue(n, .1) ? 0 : n;
        }
        static TransformPoint(e, t, r) {
            let i = e.worldMatrix;
            Laya.Vector3.transformV3ToV3(t, i, r);
        }
        static InverseTransformPoint(e, t, r) {
            let i = new Laya.Matrix4x4();
            e.worldMatrix.invert(i), Laya.Vector3.transformV3ToV3(t, i, r);
        }
        static QuaternionEuler(e, t, r, i) {
            let n = 180 / Math.PI;
            Laya.Quaternion.createFromYawPitchRoll(t / n, e / n, r / n, i);
        }
        static QuaternionVector3(e, t, r) {
            var i = new Laya.Matrix4x4();
            return Laya.Matrix4x4.createFromQuaternion(e, i), Laya.Vector3.transformV3ToV3(t, i, r),
                r;
        }
        static FromToRotation(e, t, r) {
            Laya.Vector3.normalize(e, e), Laya.Vector3.normalize(t, t);
            var i = Laya.Vector3.dot(e, t);
            if (i >= 1) return new Laya.Quaternion();
            if (i < 1e-6 - 1) {
                var n = new Laya.Vector3();
                Laya.Vector3.cross(new Laya.Vector3(1, 0, 0), e, n), O.isVectorZeroLength(n), Laya.Vector3.cross(new Laya.Vector3(0, 1, 0), e, n),
                    Laya.Vector3.normalize(n, n), Laya.Quaternion.createFromAxisAngle(n, 180, r);
            } else {
                var a = Math.sqrt(2 * (1 + i)), s = 1 / a, o = new Laya.Vector3();
                Laya.Vector3.cross(e, t, o), r.x = o.x * s, r.y = o.y * s, r.z = o.z * s, r.w = .5 * a,
                    r.normalize(r);
            }
            return r;
        }
        static isVectorZeroLength(e) {
            return e.x * e.x + e.y * e.y + e.z * e.z < 1e-12;
        }
        static isZero(e) {
            return Math.abs(e) < 1e-6;
        }
        static isZeroByValue(e, t) {
            return Math.abs(e) < t;
        }
        static VectorZere(e) {
            e.x = O.isZero(e.x) ? 0 : e.x, e.y = O.isZero(e.y) ? 0 : e.y, e.z = O.isZero(e.z) ? 0 : e.z;
        }
        static QuaternionNorm(e, t) {
            var r = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z, i = 1 / Math.sqrt(r);
            t.x = e.x * i, t.y = e.y * i, t.z = e.z * i, t.w = e.w * i;
        }
        static Sign(e) {
            return e >= 0 ? 1 : -1;
        }
        static Clamp01(e) {
            return e < 0 ? 0 : e > 1 ? 1 : e;
        }
        static Clamp(e, t, r) {
            return e < t ? t : e > r ? r : e;
        }
        static FindChild(e, t) {
            let r = t.split("/");
            for (let i = 0; i < r.length; i++) if (t = r[i], null == (e = e.getChildByName(t))) return null;
            return e;
        }
        static getRandomInt(e, t) {
            var r = t - e, i = Math.random();
            return e + Math.round(i * r);
        }
        static GetArrDifference(e, t) {
            return e.concat(t).filter(function (e, t, r) {
                return r.indexOf(e) === r.lastIndexOf(e);
            });
        }
        static checkVersions() {
            let e = B.ryw_Versions;
            return null === e || "" === e || (B.onTTMiniGame ? e === D.ryw_getInstance().ryw_getAppSwitchData().ryw_ttcfg.ryw_ttversions : Laya.Browser.onQGMiniGame ? e === D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_oppoversions : Laya.Browser.onQQMiniGame ? e === D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_qqversions : Laya.Browser.onMiniGame ? e === D.ryw_getInstance().ryw_getAppSwitchData().ryw_version : !Laya.Browser.onVVMiniGame || e === D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_vivoversions);
        }
        static openCastShadow(e) {
            O.ryw_forEachChild(e, e => {
                e instanceof Laya.MeshSprite3D ? (e.meshRenderer.receiveShadow = !0, e.meshRenderer.castShadow = !0) : e instanceof Laya.SkinnedMeshSprite3D && (e.skinnedMeshRenderer.receiveShadow = !0,
                    e.skinnedMeshRenderer.castShadow = !0);
            });
        }
        static openReceiveShadow(e) {
            O.ryw_forEachChild(e, e => {
                e instanceof Laya.MeshSprite3D ? (e.meshRenderer.receiveShadow = !0, e.meshRenderer.castShadow = !1) : e instanceof Laya.SkinnedMeshSprite3D && (e.skinnedMeshRenderer.receiveShadow = !0,
                    e.skinnedMeshRenderer.castShadow = !1);
            });
        }
        static getRandomInt2(e, t) {
            let r = Math.random() * (t - e + 1) + e;
            return Math.floor(r);
        }
        static getVersions() {
            return B.onTTMiniGame ? D.ryw_getInstance().ryw_getAppSwitchData().ryw_ttcfg.ryw_ttversions : Laya.Browser.onQGMiniGame ? D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_oppoversions : Laya.Browser.onQQMiniGame ? D.ryw_getInstance().ryw_getAppSwitchData().ryw_qqcfg.ryw_qqversions : Laya.Browser.onMiniGame ? D.ryw_getInstance().ryw_getAppSwitchData().ryw_version : Laya.Browser.onVVMiniGame ? D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_vivoversions : "未获得远端版本号";
        }
    }
    function isIViewStateListener(e) {
        return null != e.onViewShow && "function" == typeof e.onViewShow && null != e.onViewHide && "function" == typeof e.onViewHide;
    }
    O.ryw_OriginStageWidth = 1334, O.ryw_OriginStageHeight = 750, O.ryw_grayscaleMat = [.3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0],
        O.ryw_grayscaleFilter = new Laya.ColorFilter(O.ryw_grayscaleMat), O.ryw_poinDown = new Laya.Point(0, -1),
        O.ryw_poinUp = new Laya.Point(0, 1);
    class F extends Laya.Script {
        constructor() {
            super(...arguments), this.ryw_onCloseEvent = null, this.ryw_onOpenEvent = null,
                this._viewBase = !0, this._viewDef = w.ryw_None, this._data = {};
        }
        get ryw_View() {
            return this.owner;
        }
        onAwake() {
            this.ryw_View.autoDestroyAtClosed = !0;
        }
        onEnable() {
            this.ryw_addEvent();
        }
        onDisable() {
            this.ryw_removeEvent();
        }
        onDestroy() {
            this.ryw_removeEvent();
        }
        ryw_openView(e) {
            this._data = e, this.ryw_show(), i.ryw_instance.ryw_dispatch(t.ryw_Game_OnViewOpen, {
                view: this._viewDef
            }), this.ryw_onOpenEvent && this.ryw_onOpenEvent();
        }
        ryw_addEvent() { }
        ryw_removeEvent() {
            Laya.timer.clearAll(this);
        }
        ryw_closeView() {
            R.ryw_instance.ryw_closeView(this._viewDef);
        }
        ryw_hide() {
            this.ryw_View.visible = !1, this.onHide(), O.ryw_forEachChild(this.owner, e => {
                let t = e._components;
                if (t) for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    isIViewStateListener(r) && r.onViewHide(this);
                }
            });
        }
        ryw_show() {
            this.ryw_View.visible = !0, this.onShow(), O.ryw_forEachChild(this.owner, e => {
                let t = e._components;
                if (t) for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    isIViewStateListener(r) && r.onViewShow(this);
                }
            });
        }
        ryw_viewIsHide() {
            return this.ryw_View.visible;
        }
        onHide() { }
        onShow() { }
        onClose() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this), i.ryw_instance.ryw_dispatch(t.ryw_Game_OnViewClose, {
                view: this._viewDef
            }), this.ryw_onCloseEvent && this.ryw_onCloseEvent();
        }
    }
    class H {
        static get ryw_BannerInstance() {
            return H.ryw__banner;
        }
        static ryw_Login(e, t) {
            Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.login({
                success: t => {
                    let r = t.data.token;
                    for (var i in e(r), console.log("OPPO 登陆成功,获取到 token : " + r), t) console.log(i, t[i]);
                },
                fail: e => {
                    for (var t in console.log("OPPO 登陆失败", e), e) console.log(t, e[t]);
                }
            });
        }
        static ryw_initAdService(e, t, r) {
            Laya.Browser.window.qg.initAdService({
                appId: B.ryw_AppID,
                isDebug: !1,
                success: function (t) {
                    console.log("oppo initAdService success"), e && e(t);
                },
                fail: function (e) {
                    console.log("oppo initAdService fail: ", e.code, e.msg), t && t(e);
                },
                complete: function (e) {
                    console.log("oppo initAdService complete"), r && r(e);
                }
            });
        }
        static ryw_showRewardedVideoAd(e, t) {
            platform.getInstance().showReward(() => {
                e && e(!0);
            }, () => {
                t && t(!0);
            })
        }
        static ryw_navigateToMiniProgram(e, t, r, i, n, a) {
            if (Laya.Browser.onQGMiniGame) {
                console.log("OPPO 跳转游戏： " + e), L.ryw_reportExport(e, t, e => {
                    1 == e.code ? console.log("OPPO 导出上报成功") : console.log("OPPO 导出上报失败", e.msg);
                }, e => {
                    for (var t in console.log("OPPO 导出上报失败"), e) console.log(t, e[t]);
                });
                let a = Date.now();
                for (; Date.now() - a <= 500;);
                Laya.Browser.window.qg.navigateToMiniGame({
                    pkgName: e,
                    path: r,
                    extraData: {
                        from: B.ryw_AppID
                    },
                    envVersion: "release",
                    success(e) {
                        i && i(e);
                    },
                    fail(e) {
                        n && n(e);
                    }
                });
            }
        }
        static ryw_showInterstitialAd(e, t) {
            if (Laya.Browser.onQGMiniGame) {
                var r = qg.createInsertAd({
                    posId: H.ryw_InsAdUnitId
                });
                r.load(), r.onLoad(() => {
                    console.log("插屏广告加载完成"), r.show();
                }), r.onShow(() => {
                    console.log("插屏广告显示成功");
                }), r.onError(e => {
                    console.log("插屏广告拉取失败", e), r.destroy(), t && t();
                });
            } else e();
        }
        static ryw_showBannaer() {
            if (H.ryw__banner) H.ryw__banner.show(); else {
                var e = qg.createBannerAd({
                    posId: H.ryw_bannerAdUnitId
                });
                e.show(), H.ryw__banner = e;
            }
        }
        static ryw_hideBanner() {
            H.ryw__banner && H.ryw__banner.hide();
        }
        static ryw_destroyBanner() {
            H.ryw__banner && H.ryw__banner.destroy(), H.ryw__banner = null;
        }
        static ryw_getLaunchOptionsSync() {
            let e = {
                query: "",
                referrerInfo: {
                    package: "",
                    extraData: {
                        appid: ""
                    }
                }
            };
            if (Laya.Browser.onQGMiniGame) {
                var t = Laya.Browser.window.qg.getLaunchOptionsSync();
                return null != t && "" != t ? e = t : console.log("没有启动设置！！！"), e;
            }
            return e;
        }
        static ryw_share(e, t, r) {
            e(!1);
        }
        static ryw_createDesktopIcon(e, t) {
            Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.hasShortcutInstalled({
                success: function (r) {
                    0 == r ? Laya.Browser.window.qg.installShortcut({
                        success: function () {
                            e && e();
                        },
                        fail: function (e) {
                            for (var r in t && t(), console.log("创建桌面图标失败！！！！", e), e) console.log(r, e);
                        },
                        complete: function () { }
                    }) : (console.log("桌面图标已存在！！！！"), t && t());
                },
                fail: function (e) {
                    for (var r in t && t(), console.log("判断桌面图标是否存在失败！！！", e), e) console.log(r, e);
                },
                complete: function () { }
            }) : t && t();
        }
        static ryw_hasShortcutInstalled(e, t) {
            Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.hasShortcutInstalled({
                success: function (t) {
                    0 == t ? (console.log("桌面图标不存在！！！！"), e && e(!1)) : (console.log("桌面图标已存在！！！！"),
                        e && e(!0));
                },
                fail: function (e) {
                    for (var r in t && t(), console.log("判断桌面图标是否存在失败！！！", e), e) console.log(r, e);
                },
                complete: function () { }
            });
        }
        static ryw_autoPopCreateDestopIcon(e, t) {
            if (!Laya.Browser.onQGMiniGame) return void (null != t && t());
            Math.floor(100 * Math.random()) <= D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_addToDesktop ? H.ryw_createDesktopIcon(e, t) : null != t && t();
        }
        static ryw_showNativeAd(e, t) {
            Laya.Browser.onQGMiniGame && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_yuanshengSwitch ? R.ryw_instance.ryw_openView(w.ryw_OPPONativeView, null, t => {
                null != e && e(t);
            }) : null != t && t();
        }
    }
    H.ryw_adUnitId = "", H.ryw_bannerAdUnitId = "", H.ryw_InsAdUnitId = "", H.ryw_OpenScreenAdUnitId = "",
        H.ryw_NativeAdId = "", H.ryw__banner = null;
    class P extends F {
        constructor() {
            super(...arguments), this.ryw__nativeAd = null, this.ryw__curAdItem = null;
        }
        static LoadCahcedNativeAd() {
            P._cachedNativeAd && (P._cachedNativeAd.destroy(), P._cachedNativeAd = null), P._cachedAdItem = null,
                P._cachedNativeAd = qg.createNativeAd({
                    posId: H.ryw_NativeAdId
                }), P._cachedNativeAd.load(), ++P._tryLoadCount, console.log("缓存 原生广告 开始加载"), P._cachedNativeAd.onLoad(e => {
                    console.log("缓存 原生广告 加载成功：", e);
                    for (var t = e.adList, r = 0; r < t.length; ++r) {
                        var i = t[r];
                        for (var n in console.log("缓存 原生广告 数据：", r), i) console.log(n, i[n]);
                    }
                    if (P._cachedAdItem = t[Math.floor(Math.random() * t.length)], null != P._cachedAdItem) {
                        for (r = 0; r < P._cachedAdItem.imgUrlList.length; ++r) console.log("缓存 原生广告 imgUrlList : ", r + " ", P._cachedAdItem.imgUrlList[r]);
                        let e = P._cachedAdItem.imgUrlList;
                        for (let t = 0; t < e.length; ++t) {
                            let r = e[t];
                            if (P._cachedimgUrl = r, null != P._cachedimgUrl && "" != P._cachedimgUrl) break;
                        }
                        null != P._cachedimgUrl && "" != P._cachedimgUrl ? console.log("缓存 原生广告  加载图片", P._cachedimgUrl) : (console.log("缓存 原生广告 加载失败 imgulr is : ", P._cachedimgUrl),
                            P._cachedNativeAd.destroy(), P._cachedNativeAd = null, Laya.timer.once(2500, this, () => {
                                P.LoadCahcedNativeAd();
                            }));
                    }
                }), P._cachedNativeAd.onError(e => {
                    for (var t in console.log("缓存 原生广告 加载失败：", e), e) console.log(t, e[t]);
                    P._cachedNativeAd.destroy(), P._cachedNativeAd = null, Laya.timer.once(5e3, this, () => {
                        P.LoadCahcedNativeAd();
                    });
                });
        }
        onAwake() {
            this.ryw__centerZone = this.owner.getChildByName("CenterZone"), this.ryw__display = this.ryw__centerZone.getChildByName("Display"),
                this.ryw__okBtn = this.ryw__centerZone.getChildByName("OkBtn"), this.ryw__closeBtn = this.ryw__centerZone.getChildByName("CloseBtn"),
                this.ryw__bg = this.owner.getChildByName("BG");
        }
        onEnable() {
            super.onEnable(), this.ryw__bg.height = Laya.stage.height, this.ryw__closeBtn.visible = !1,
                Laya.timer.once(D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_btnShowTimer, this, () => {
                    this.ryw__closeBtn.visible = !0;
                });
        }
        ryw_openView(e) {
            super.ryw_openView(e), null != e && e.useCache && null != P._cachedNativeAd ? this.showCached() : this.ryw_loadAd();
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__okBtn.on(Laya.Event.CLICK, this, this.ryw_onOkBtn),
                this.ryw__closeBtn.on(Laya.Event.CLICK, this, this.ryw_onCloseBtn), this.ryw__display.on(Laya.Event.CLICK, this, this.ryw_onDisplayClick);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__okBtn.off(Laya.Event.CLICK, this, this.ryw_onOkBtn),
                this.ryw__closeBtn.off(Laya.Event.CLICK, this, this.ryw_onCloseBtn), this.ryw__display.off(Laya.Event.CLICK, this, this.ryw_onDisplayClick);
        }
        showCached() {
            if (null != P._cachedNativeAd) {
                let e = this;
                e.ryw__curAdItem = P._cachedAdItem, e.ryw__display.loadImage(P._cachedimgUrl), e.ryw__nativeAd.reportAdShow({
                    adId: e.ryw__curAdItem.adId
                }), e.ryw__centerZone.visible = !0, console.log("显示 缓存 加载图片", P._cachedimgUrl);
            }
        }
        ryw_loadAd() {
            var e = this;
            N.ryw_GetIpBlocked() ? Laya.Browser.onQGMiniGame && (this.ryw__nativeAd && (this.ryw__nativeAd.destroy(),
                this.ryw__nativeAd = null), this.ryw__curAdItem = null, this.ryw__nativeAd = qg.createNativeAd({
                    posId: H.ryw_NativeAdId
                }), this.ryw__nativeAd.load(), this.ryw__nativeAd.onLoad(t => {
                    console.log("原生广告加载成功：", t);
                    for (var r = t.adList, i = 0; i < r.length; ++i) {
                        var n = r[i];
                        for (var a in console.log("原生广告数据：", i), n) console.log(a, n[a]);
                    }
                    if (e.ryw__curAdItem = r[Math.floor(Math.random() * r.length)], null != e.ryw__curAdItem) {
                        for (i = 0; i < e.ryw__curAdItem.imgUrlList.length; ++i) console.log("imgUrlList : ", i + " ", e.ryw__curAdItem.imgUrlList[i]);
                        var s = e.ryw__curAdItem.imgUrlList[Math.floor(Math.random() * e.ryw__curAdItem.imgUrlList.length)];
                        null != s ? (e.ryw__display.loadImage(s), e.ryw__nativeAd.reportAdShow({
                            adId: e.ryw__curAdItem.adId
                        }), e.ryw__centerZone.visible = !0, console.log("加载图片", s)) : (console.log("原生广告加载失败 imgulr is : ", s),
                            e.ryw_closeView());
                    }
                }), this.ryw__nativeAd.onError(t => {
                    for (var r in console.log("原生广告加载失败：", t), t) console.log(r, t[r]);
                    e.ryw_closeView();
                }), this.ryw__centerZone.visible = !1) : e.ryw_closeView();
        }
        ryw_onCloseBtn() {
            this.ryw_closeView();
        }
        ryw_onOkBtn() {
            100 * Math.random() <= D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_yuansheng && (console.log("进入变态广告"),
                this.ryw_onDisplayClick()), this.ryw_closeView();
        }
        ryw_onDisplayClick() {
            null != this.ryw__nativeAd && null != this.ryw__curAdItem && (console.log("点击上报！！！"),
                this.ryw__nativeAd.reportAdClick({
                    adId: this.ryw__curAdItem.adId
                }));
        }
        onDestroy() {
            super.onDestroy(), Laya.Browser.onQGMiniGame && (this.ryw__nativeAd && this.ryw__nativeAd.destroy(),
                this.ryw__nativeAd = null, this.ryw__curAdItem = null);
        }
    }
    P._cachedNativeAd = null, P._cachedAdItem = null, P._cachedimgUrl = null, P._tryLoadCount = 5;
    class U {
        constructor() {
            this.ryw__enabled = !0;
        }
        get ryw_Enabled() {
            return this.ryw__enabled;
        }
        set ryw_Enabled(e) {
            e || this.ryw_stopBGM(), this.ryw__enabled = e;
        }
        ryw_getSoundUrl(e) {
            return U.ryw_soundResPath + e + ".mp3";
        }
        ryw_playSound(e) {
            if (this.ryw__enabled) {
                var t = this.ryw_getSoundUrl(e);
                if (Laya.Browser.onMiniGame) {
                    var r = Laya.Pool.getItem(e);
                    null == r && ((r = wx.createInnerAudioContext()).src = U.ryw_soundResPath + e + ".mp3",
                        r.onEnded(() => {
                            Laya.Pool.recover(e, r), r.offEnded();
                        })), r.play();
                } else Laya.SoundManager.playSound(t, 1);
            }
        }
        ryw_playBGM(e) {
            if (!this.ryw__enabled) return;
            let t = this.ryw_getSoundUrl(e);
            Laya.Browser.onMiniGame ? (this.ryw_bgm || (this.ryw_bgm = wx.createInnerAudioContext()),
                this.ryw_bgm.pause(), this.ryw_bgm.src = t, this.ryw_bgm.loop = !0, this.ryw_bgm.play()) : Laya.SoundManager.playMusic(t, 0);
        }
        ryw_stopBGM() {
            // Laya.Browser.onMiniGame ? this.ryw_bgm && this.ryw_bgm.pause() : Laya.SoundManager.stopMusic();
        }
    }
    U.ryw_soundResPath = "subRes/sound/", U.ryw_instance = new U();
    class W {
        static ryw_vibrateShort() {
            W.ryw_isEnable && (B.onTTMiniGame ? Laya.Browser.window.tt.vibrateShort() : Laya.Browser.onMiniGame ? Laya.Browser.window.wx.vibrateShort() : Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame ? Laya.Browser.window.qg.vibrateShort() : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateShort());
        }
        static ryw_vibrateLong() {
            W.ryw_isEnable && (B.onTTMiniGame ? Laya.Browser.window.tt.vibrateLong() : Laya.Browser.onMiniGame ? Laya.Browser.window.wx.vibrateLong() : Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame ? Laya.Browser.window.qg.vibrateLong() : Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateLong());
        }
        static ryw_vibrate(e) {
            if (W.ryw_isEnable) if (B.onTTMiniGame) {
                let t = e / 15, r = 0, i = {
                    count: t,
                    index: r
                };
                Laya.timer.loop(16, i, function () {
                    W.ryw_vibrateShort(), ++r > t && Laya.timer.clearAll(i);
                });
            } else if (Laya.Browser.onMiniGame) {
                let t = e / 15, r = 0, i = {
                    count: t,
                    index: r
                };
                Laya.timer.loop(16, i, function () {
                    W.ryw_vibrateShort(), ++r > t && Laya.timer.clearAll(i);
                });
            } else if (Laya.Browser.onQGMiniGame) {
                let t = e / 20, r = 0, i = {
                    count: t,
                    index: r
                };
                Laya.timer.loop(21, i, function () {
                    W.ryw_vibrateShort(), ++r > t && Laya.timer.clearAll(i);
                });
            } else if (Laya.Browser.onQQMiniGame) {
                let t = e / 20, r = 0, i = {
                    count: t,
                    index: r
                };
                Laya.timer.loop(21, i, function () {
                    W.ryw_vibrateShort(), ++r > t && Laya.timer.clearAll(i);
                });
            }
        }
    }
    W.ryw_isEnable = !0;
    class z extends Laya.Script3D {
        constructor() {
            super(...arguments), this.foodId = 0;
        }
        setFoodId(e) {
            this.foodId = e;
        }
        getFoodId() {
            return this.foodId;
        }
    }
    !function (e) {
        e[e.bgm = 0] = "bgm", e[e.dg = 1] = "dg", e[e.ex = 2] = "ex", e[e.tian = 3] = "tian",
            e[e.win = 4] = "win";
    }(y || (y = {}));
    class q extends Laya.Script3D {
        constructor() {
            super(...arguments), this.player = null, this.speed = .008, this.speedFactor = 1,
                this.tian = null, this.camera = null, this.isdown = !1, this.headani = null, this.tongue = null,
                this.tongueani = null, this.tongueMin = 2.8, this.tongueMax = 4.1, this.tianNode = null,
                this.curTianEff = null, this.curTian = "", this.feelEff = null, this.nauseEff = null,
                this.jiasuEff = null, this.penhuoEff = null, this.huohuaEff = null, this.face = null,
                this.redFace = null, this.efftime = 1, this.efftimezon = 1, this.qidian = new Laya.Vector3(),
                this.gamestata = 0, this.curHungerValue = 50, this.subValue = 0, this.isEatLajiao = !1,
                this.curIsLick = !1, this.playerDie = !1, this.eatFoodId = 0, this.oldFoodId = 0;
        }
        onAwake() {
            this.player = this.owner, this.tian = this.owner.getChildByName("tian");
            var e = this.owner.getChildByName("player");
            this.tianNode = e.getChildByName("tianNode"), this.camera = e.getChildByName("Camera001"),
                this.headani = e.getChildByName("hm_tou").getComponent(Laya.Animator), this.tongue = e.getChildByName("hm_tongue"),
                this.tongueani = this.tongue.getComponent(Laya.Animator), this.headani.crossFade("idle", .1),
                this.tongueani.crossFade("shut", .1), this.feelEff = e.getChildByName("ef_kaixin"),
                this.nauseEff = e.getChildByName("ef_exin"), this.jiasuEff = e.getChildByName("ef_jiasu"),
                this.penhuoEff = e.getChildByName("ef_penhuo"), this.huohuaEff = e.getChildByName("ef_huohua"),
                this.feelEff.active = !1, this.nauseEff.active = !1, this.jiasuEff.active = !1,
                this.penhuoEff.active = !1, this.huohuaEff.active = !1, this.face = e.getChildByName("hm_tou").getChildByName("HEAD_0"),
                this.redFace = e.getChildByName("hm_tou").getChildByName("HEAD_3"), this.redFace.active = !1,
                this.qidian = this.player.transform.position.clone(), this.npcMnum = 0, this.gamestata = 0,
                this.hideTianEff();
        }
        onEnable() {
            i.ryw_instance.ryw_regEvemt(t.OnStarGame, this, this.OnStarGame), i.ryw_instance.ryw_regEvemt(t.OnMoseDwon, this, this.OnMoseDwon),
                i.ryw_instance.ryw_regEvemt(t.OnMoseUp, this, this.OnMoseUp), i.ryw_instance.ryw_regEvemt(t.Crazy_Click, this, this.onCrazyClick),
                i.ryw_instance.ryw_regEvemt(t.Add_Hunger_Value, this, this.addHungerValue);
        }
        onDisable() {
            i.ryw_instance.ryw_removeEvent(t.OnStarGame, this, this.OnStarGame), i.ryw_instance.ryw_removeEvent(t.OnMoseDwon, this, this.OnMoseDwon),
                i.ryw_instance.ryw_removeEvent(t.OnMoseUp, this, this.OnMoseUp), i.ryw_instance.ryw_removeEvent(t.Crazy_Click, this, this.onCrazyClick),
                i.ryw_instance.ryw_removeEvent(t.Add_Hunger_Value, this, this.addHungerValue);
        }
        onUpdate() {
            if (!this.playerDie && 1 == ne.Getinstance().gameState) {
                if (1 != this.gamestata && 2 != this.gamestata || (this.efftime -= .01, this.efftime < 0 && this.GoIdel()),
                    3 == this.gamestata) return;
                var e = new Laya.Vector3();
                if (Laya.Vector3.subtract(ne.Getinstance().winpoint, this.player.transform.position, e),
                    Laya.Vector3.normalize(e, e), this.player.transform.position = new Laya.Vector3(this.player.transform.position.x, this.player.transform.position.y, this.player.transform.position.z + e.z * this.speed * this.speedFactor),
                    ne.Getinstance().MoveNpc(e.z * this.speed * this.speedFactor), Laya.Vector3.distance(ne.Getinstance().winpoint, this.player.transform.position) < 1) ne.Getinstance().gameState = 2,
                        Laya.timer.once(1e3, this, () => {
                            ne.Getinstance().OnGameOver();
                        }), i.ryw_instance.ryw_dispatch(t.Player_Distance, 16.28), Laya.timer.clear(this, this.hungerValue),
                        this.jiasuEff.active = !1; else {
                    var r = Laya.Vector3.distance(ne.Getinstance()._eatend, this.player.transform.position);
                    i.ryw_instance.ryw_dispatch(t.Player_Distance, r);
                }
                this.curHungerValue - this.subValue <= 0 && (this.playerDie = !0, i.ryw_instance.ryw_dispatch(t.Player_Die)),
                    i.ryw_instance.ryw_dispatch(t.Hunger_Value, this.curHungerValue - this.subValue),
                    this.HeadDownRay();
            }
        }
        OnMoseDwon() {
            if (!this.playerDie && 3 != this.gamestata) {
                this.speed = .016, this.isdown = !0, this.tongueani.crossFade("open", .1);
                var e = this;
                Laya.timer.once(600, this, function () {
                    e.isdown && e.tongueani.crossFade("idle_2", .2);
                }), U.ryw_instance.ryw_playSound(y[3]);
            }
        }
        OnMoseUp() {
            this.playerDie || this.isdown && (this.hideTianEff(), this.curIsLick = !1, this.speed = .008,
                this.isdown = !1, this.tongueani.crossFade("shut", .1), i.ryw_instance.ryw_dispatch(t.Idle),
                this.oldFoodId = this.eatFoodId);
        }
        OnStarGame() {
            console.log("开始游戏--------------"), ne.Getinstance().gameState = 1, this.GoIdel(),
                Laya.timer.loop(1e3, this, this.hungerValue);
        }
        hungerValue() {
            this.playerDie || (this.subValue = this.subValue + 3, this.curHungerValue - this.subValue > 0 && (this.curHungerValue - this.subValue >= 50 ? (this.speedFactor = 1.3,
                this.jiasuEff.active = !0) : (this.speedFactor = .8, this.jiasuEff.active = !1)));
        }
        addHungerValue() {
            this.curHungerValue = 50, this.subValue = 0, this.speed = .008, this.speedFactor = 1.2,
                this.playerDie = !1;
        }
        GoIdel() {
            if (this.feelEff.active = !1, this.nauseEff.active = !1, this.huohuaEff.active = !1,
                2 == this.gamestata) {
                this.headani.crossFade("hui", .1);
                var e = this;
                Laya.timer.once(400, this, function () {
                    e.headani.crossFade("idle", .4);
                });
            } else this.headani.crossFade("idle", .4);
            this.curIsLick = !1, this.gamestata = 0, i.ryw_instance.ryw_dispatch(t.Idle);
        }
        EatGood() {
            this.oldFoodId != this.eatFoodId && (this.curHungerValue += 10, i.ryw_instance.ryw_dispatch(t.EatFood, 10)),
                this.tongue.transform.localScaleX < this.tongueMax && (this.tongue.transform.localScaleX += .005),
                this.efftime = this.efftimezon, this.nauseEff.active = !1, this.huohuaEff.active = !1,
                this.feelEff.active = !1, this.feelEff.active = !0, 1 != this.gamestata && (U.ryw_instance.ryw_playSound(y[1]),
                    this.gamestata = 1, W.ryw_vibrateShort(), this.headani.crossFade("happy", .1), i.ryw_instance.ryw_dispatch(t.KaiXin));
        }
        EatBad() {
            this.oldFoodId != this.eatFoodId && (this.curHungerValue = this.curHungerValue - 10,
                i.ryw_instance.ryw_dispatch(t.EatFood, -10)), this.curHungerValue <= 0 && (this.curHungerValue = 0),
                this.tongue.transform.localScaleX > this.tongueMin && (this.tongue.transform.localScaleX -= .005),
                this.efftime = this.efftimezon, this.feelEff.active = !1, this.isEatLajiao ? (this.huohuaEff.active = !1,
                    this.huohuaEff.active = !0) : (this.nauseEff.active = !1, this.nauseEff.active = !0),
                2 != this.gamestata && (this.gamestata = 2, W.ryw_vibrateShort(), U.ryw_instance.ryw_playSound(y[2]),
                    this.headani.crossFade("nausea", .2), i.ryw_instance.ryw_dispatch(t.Exin));
        }
        EatIce() {
            if (this.hideTianEff(), this.isdown = !1, this.oldFoodId != this.eatFoodId && (this.curHungerValue = this.curHungerValue - 10,
                i.ryw_instance.ryw_dispatch(t.EatFood, -10)), this.curHungerValue <= 0 && (this.curHungerValue = 0),
                this.tongue.transform.localScaleX > this.tongueMin && (this.tongue.transform.localScaleX -= .005),
                3 != this.gamestata) {
                this.gamestata = 3, W.ryw_vibrateShort(), U.ryw_instance.ryw_playSound(y[2]), this.headani.crossFade("tianbing", 1e-4),
                    this.tongueani.crossFade("tianbing", 1e-4);
                var e = this;
                Laya.timer.once(1e3, this, function () {
                    e.GoIdel(), e.tongueani.crossFade("shut", .4);
                });
            }
        }
        eatLajiao() {
            this.face.active = !1, this.redFace.active = !0, this.penhuoEff.active = !0, Laya.timer.once(1e3, this, () => {
                this.face.active = !0, this.redFace.active = !1, this.penhuoEff.active = !1;
            });
        }
        HeadDownRay() {
            var e = new Laya.Ray(this.tian.transform.position.clone(), new Laya.Vector3(0, -1, 0)), t = new Array();
            if (ne.Getinstance().Scene.physicsSimulation.rayCastAll(e, t, 30), t.length > 0) for (let e = 0; e < t.length; e++) {
                var r = t[e].collider;
                if (this.isdown) {
                    if (!this.curIsLick) if (this.showTianEff(r.owner.name), this.eatFoodId = r.owner.getComponent(z).getFoodId(),
                        0 == this.GetFoorFlag(r.owner.name)) this.EatGood(), this.curIsLick = !0; else if (1 == this.GetFoorFlag(r.owner.name)) this.EatBad(),
                            this.curIsLick = !0; else if (2 == this.GetFoorFlag(r.owner.name)) return this.EatIce(),
                                void (this.curIsLick = !0);
                    var i = r.owner.getChildAt(0).getChildAt(0).meshRenderer.material;
                    i.hideFlag = !0;
                    var n = t[e].point.z;
                    i.hidePosZ = n;
                }
            } else this.curIsLick = !1, this.curTianEff && (this.curTianEff.active = !1), this.isdown ? this.speed = .016 : this.speed = .008,
                this.curTian = "";
        }
        GetFoorFlag(e) {
            var t = 0;
            switch (e) {
                case "dangao0":
                case "dangao1":
                case "dangao2":
                case "dangao3":
                case "dangao4":
                case "dangao5":
                    t = 0;
                    break;

                case "shi":
                case "lajiao":
                    t = 1;
                    break;

                case "ice":
                case "xianrenzhang":
                    t = 2;
            }
            return t;
        }
        hideTianEff() {
            for (let e = 0; e < this.tianNode.numChildren; e++) {
                this.tianNode.getChildAt(e).active = !1;
            }
            this.curTianEff && (this.curTianEff = null), this.curTian = "";
        }
        showTianEff(e) {
            this.curTian != e && (this.curTian = e, ne.Getinstance().NpcEmoticon(e), this.isEatLajiao = !1,
                "dangao0" == e || "dangao1" == e || "dangao3" == e || "dangao6" == e ? this.curTianEff = this.tianNode.getChildByName("ef_tian_cake") : "dangao2" == e ? this.curTianEff = this.tianNode.getChildByName("ef_tian_mb") : "dangao4" == e ? this.curTianEff = this.tianNode.getChildByName("ef_tian_qkl") : "dangao5" == e ? this.curTianEff = this.tianNode.getChildByName("ef_tian_ttq") : "shi" == e ? this.curTianEff = this.tianNode.getChildByName("ef_tian_shi") : "lajiao" == e ? (this.isEatLajiao = !0,
                    this.curTianEff = this.tianNode.getChildByName("ef_tian_lajiao"), this.eatLajiao()) : "xianrenzhang" == e && (this.curTianEff = this.tianNode.getChildByName("ef_tian_xrz")),
                this.curTianEff && (this.curTianEff.active = !0));
        }
        onCrazyClick() {
            Laya.timer.clearAll(this), this.tongueani.speed = 3, this.tongueani.play("crazy");
            var e = this;
            Laya.timer.once(600, this, function () {
                e.tongueani.speed = 1, e.tongueani.crossFade("idle_2", .2);
            });
        }
    }
    !function (e) {
        e[e.bgm = 0] = "bgm", e[e.dg = 1] = "dg", e[e.ex = 2] = "ex", e[e.tian = 3] = "tian",
            e[e.win = 4] = "win";
    }(_ || (_ = {}));
    class Q extends Laya.Script3D {
        constructor() {
            super(...arguments), this.player = null, this.speed = .007, this.tian = null, this.isdown = !1,
                this.headani = null, this.tongue = null, this.tongueani = null, this.tongueMin = 2.8,
                this.tongueMax = 4.1, this.tianNode = null, this.curTianEff = null, this.curTian = "",
                this.feelEff = null, this.nauseEff = null, this.penhuoEff = null, this.huohuaEff = null,
                this.face = null, this.redFace = null, this.efftime = 1, this.efftimezon = 1, this.gamestata = 0,
                this.eating = !1, this.isEatIce = !1, this.isEatGood = !1, this.isEatBad = !1, this.playerDie = !1,
                this.isEatLajiao = !1;
        }
        onAwake() {
            this.player = this.owner, this.tian = this.owner.getChildByName("tian");
            var e = this.owner.getChildByName("player");
            this.tianNode = e.getChildByName("tianNode"), this.headani = e.getChildByName("hm_tou").getComponent(Laya.Animator),
                this.tongue = e.getChildByName("hm_tongue"), this.tongueani = this.tongue.getComponent(Laya.Animator),
                this.headani.crossFade("idle", .1), this.tongueani.crossFade("shut", .1), this.feelEff = e.getChildByName("ef_kaixin"),
                this.nauseEff = e.getChildByName("ef_exin"), this.penhuoEff = e.getChildByName("ef_penhuo"),
                this.huohuaEff = e.getChildByName("ef_huohua"), this.feelEff.active = !1, this.nauseEff.active = !1,
                this.penhuoEff.active = !1, this.huohuaEff.active = !1, this.face = e.getChildByName("hm_tou").getChildByName("HEAD_0"),
                this.redFace = e.getChildByName("hm_tou").getChildByName("HEAD_3"), this.redFace.active = !1,
                this.gamestata = 0, this.hideTianEff();
        }
        onEnable() {
            i.ryw_instance.ryw_regEvemt(t.OnStarGame, this, this.OnStarGame), i.ryw_instance.ryw_regEvemt(t.Player_Die, this, this.playerIsDie),
                i.ryw_instance.ryw_regEvemt(t.Add_Hunger_Value, this, this.addHungerValue);
        }
        onDisable() {
            i.ryw_instance.ryw_removeEvent(t.OnStarGame, this, this.OnStarGame), i.ryw_instance.ryw_removeEvent(t.Player_Die, this, this.playerIsDie),
                i.ryw_instance.ryw_removeEvent(t.Add_Hunger_Value, this, this.addHungerValue);
        }
        onUpdate() {
            if (!this.playerDie && !ne.Getinstance().AiIsWin && 1 == ne.Getinstance().gameState) {
                if (1 != this.gamestata && 2 != this.gamestata || (this.efftime -= .01, this.efftime < 0 && this.GoIdel()),
                    3 == this.gamestata) return;
                var e = new Laya.Vector3();
                if (Laya.Vector3.subtract(ne.Getinstance().winpointAI, this.player.transform.position, e),
                    Laya.Vector3.normalize(e, e),
                    this.player.transform.position = new Laya.Vector3(this.player.transform.position.x, this.player.transform.position.y,
                        this.player.transform.position.z + e.z * this.speed),
                    Laya.Vector3.distance(ne.Getinstance().winpointAI, this.player.transform.position) < 1) this.hideTianEff(),
                        ne.Getinstance().AiIsWin = !0, i.ryw_instance.ryw_dispatch(t.Ai_Distance, 16.28);
                else {
                    var r = Laya.Vector3.distance(ne.Getinstance()._eatend, this.player.transform.position);
                    i.ryw_instance.ryw_dispatch(t.Ai_Distance, r);
                }
                this.HeadDownRay();
            }
        }
        playerIsDie() {
            this.playerDie = !0;
        }
        addHungerValue() {
            this.playerDie = !1;
        }
        OnMoseDwon() {
            if (3 != this.gamestata) {
                this.speed = .015, this.isdown = !0, this.tongueani.crossFade("open", .1);
                var e = this;
                Laya.timer.once(600, this, function () {
                    e.isdown && e.tongueani.crossFade("idle_2", .2);
                }), U.ryw_instance.ryw_playSound(_[3]);
            }
        }
        OnMoseUp() {
            this.isdown && (this.hideTianEff(), this.speed = .007, this.isdown = !1, this.tongueani.crossFade("shut", .1),
                this.curTian = "");
        }
        OnStarGame() {
            ne.Getinstance().gameState = 1, this.GoIdel();
        }
        GoIdel() {
            if (this.feelEff.active = !1, this.nauseEff.active = !1, this.huohuaEff.active = !1,
                2 == this.gamestata) {
                this.headani.crossFade("hui", .1);
                var e = this;
                Laya.timer.once(400, this, function () {
                    e.headani.crossFade("idle", .4);
                });
            } else this.headani.crossFade("idle", .4);
            this.gamestata = 0;
        }
        EatGood() {
            this.tongue.transform.localScaleX < this.tongueMax && (this.tongue.transform.localScaleX += .005),
                this.efftime = this.efftimezon, this.nauseEff.active = !1, this.huohuaEff.active = !1,
                this.feelEff.active = !1, this.feelEff.active = !0, 1 != this.gamestata && (U.ryw_instance.ryw_playSound(_[1]),
                    this.gamestata = 1, this.headani.crossFade("happy", .1));
        }
        EatBad() {
            this.tongue.transform.localScaleX > this.tongueMin && (this.tongue.transform.localScaleX -= .005),
                this.efftime = this.efftimezon, this.feelEff.active = !1, this.isEatLajiao ? (this.huohuaEff.active = !1,
                    this.huohuaEff.active = !0) : (this.nauseEff.active = !1, this.nauseEff.active = !0),
                2 != this.gamestata && (this.gamestata = 2, U.ryw_instance.ryw_playSound(_[2]),
                    this.headani.crossFade("nausea", .2));
        }
        EatIce() {
            if (this.eating = !0, this.isdown = !1, this.tongue.transform.localScaleX > this.tongueMin && (this.tongue.transform.localScaleX -= .005),
                3 != this.gamestata) {
                this.gamestata = 3, this.hideTianEff(), U.ryw_instance.ryw_playSound(_[2]), this.headani.crossFade("tianbing", 1e-4),
                    this.tongueani.crossFade("tianbing", 1e-4);
                var e = this;
                Laya.timer.once(1e3, this, function () {
                    e.GoIdel(), e.tongueani.crossFade("shut", .4), this.eating = !1;
                });
            }
        }
        HeadDownRay() {
            var e = new Laya.Ray(this.tian.transform.position.clone(), new Laya.Vector3(0, -1, 0)), t = new Array();
            if (ne.Getinstance().Scene.physicsSimulation.rayCastAll(e, t, 30), t.length > 0) {
                let e = O.getRandomInt(0, 9);
                for (let a = 0; a < t.length; a++) {
                    var r = t[a].collider;
                    if (!this.isdown) if (0 == this.GetFoorFlag(r.owner.name)) this.showTianEff(r.owner.name),
                        this.OnMoseDwon(), this.EatGood(), this.eating = !0; else if (1 == this.GetFoorFlag(r.owner.name)) e < 3 &&
                            !this.eating && (this.showTianEff(r.owner.name),
                                this.OnMoseDwon(), this.EatBad()), this.eating = !0;
                    else if (2 == this.GetFoorFlag(r.owner.name)) return e < 3 && !this.eating && (this.showTianEff(r.owner.name),
                        this.OnMoseDwon(), this.EatIce()), void (this.eating = !0);
                    if (this.isdown) {
                        var i = r.owner.getChildAt(0).getChildAt(0).meshRenderer.material;
                        i.hideFlag = !0;
                        var n = t[a].point.z;
                        i.hidePosZ = n;
                    }
                }
            } else this.isdown && (this.OnMoseUp(), this.eating = !1);
        }
        GetFoorFlag(e) {
            var t = 0;
            switch (e) {
                case "dangao0":
                case "dangao1":
                case "dangao2":
                case "dangao3":
                case "dangao4":
                case "dangao5":
                    t = 0;
                    break;

                case "shi":
                case "lajiao":
                    t = 1;
                    break;

                case "ice":
                case "xianrenzhang":
                    t = 2;
            }
            return t;
        }
        hideTianEff() {
            for (let e = 0; e < this.tianNode.numChildren; e++) {
                this.tianNode.getChildAt(e).active = !1;
            }
            this.curTianEff && (this.curTianEff = null), this.curTian = "";
        }
        showTianEff(e) {
            this.curTian != e && (this.curTian = e, this.isEatLajiao = !1, "dangao0" == e || "dangao1" == e || "dangao3" == e || "dangao6" == e ?
                (this.speed = .015,
                    this.curTianEff = this.tianNode.getChildByName("ef_tian_cake")) :
                "dangao2" == e ? (this.speed = .015,
                    this.curTianEff = this.tianNode.getChildByName("ef_tian_mb")) :
                    "dangao4" == e ? (this.speed = .015,
                        this.curTianEff = this.tianNode.getChildByName("ef_tian_qkl")) :
                        "dangao5" == e ? (this.speed = .015,
                            this.curTianEff = this.tianNode.getChildByName("ef_tian_ttq")) :
                            "shi" == e ? (this.speed = .007,
                                this.curTianEff = this.tianNode.getChildByName("ef_tian_shi")) : "lajiao" == e ? (this.isEatLajiao = !0,
                                    this.speed = .007, this.eatLajiao(), this.curTianEff = this.tianNode.getChildByName("ef_tian_lajiao")) :
                                "xianrenzhang" == e && (this.speed = .007,
                                    this.curTianEff = this.tianNode.getChildByName("ef_tian_xrz")), this.curTianEff && (this.curTianEff.active = !0));
        }
        eatLajiao() {
            this.face.active = !1, this.redFace.active = !0, this.penhuoEff.active = !0, Laya.timer.once(1e3, this, () => {
                this.face.active = !0, this.redFace.active = !1, this.penhuoEff.active = !1;
            });
        }
    }
    !function (e) {
        e.ReportAdClickSuccess_csryw = "ReportAdClickSuccess", e.ReportAdClickFail_csryw = "ReportAdClickFail",
            e.ReportLaunchOptions_csryw = "ReportLaunchOptions", e.Event_LVInto = "Event_LVInto",
            e.GameEventLVFinish_csyrw = "Event_LVFinish", e.ryw_ReportAdClickSuccess = "ReportAdClickSuccess",
            e.ryw_ReportAdClickFail = "ReportAdClickFail", e.ryw_ReportAdClickStart = "ReportAdClickStart",
            e.ryw_ReportLaunchOptions = "ReportLaunchOptions", e.ryw_LogReportInfo = "LogReportInfo",
            e.ryw_LogReportError = "LogReportError", e.ryw_LoginReportInfo = "LoginReportInfo",
            e.ryw_GameEventLVInto = "Event_LVInto", e.ryw_GameEventLVFinish = "Event_LVFinish",
            e.ryw_Event_Commerce = "Event_Commerce", e.ryw_Event_Custom = "Event_Custom";
    }(h || (h = {}));
    class X {
        static ryw_sendEvent(e, r) {
            Laya.Browser.onMiniGame && X.ryw_uma_trackEvent(e, r), i.ryw_instance.ryw_dispatch(t.ryw_Umeng_csryw, {
                event: e
            });
        }
        static sendGameEventLvInto_csryw(e, t) {
            X.sendEvent_csryw(h.Event_LVInto, {
                level: e,
                mode: t
            });
        }
        static ryw_sendGameEventLvInto(e) {
            X.ryw_sendEvent(h.ryw_GameEventLVInto, {
                level: e
            });
        }
        static sendGameEventLvFinish_csryw(e, t, r) {
            X.sendEvent_csryw(h.GameEventLVFinish_csyrw, {
                level: e,
                status: t ? "win" : "lose",
                duration: r
            });
        }
        static sendEvent_csryw(e, t) {
            Laya.Browser.onMiniGame && X.ryw_uma_trackEvent(e, t);
        }
        static ryw_sendGameEventLvFinish(e, t, r, i) {
            let n = "win";
            t || (n = "lose");
            let a = {};
            if (a.level = e, a.status = n, a.duration = r, i) for (const e in i) if (Object.prototype.hasOwnProperty.call(i, e)) {
                const t = i[e];
                "status" == e ? t && (a.status = "home") : a[e] = t;
            }
            X.ryw_sendEvent(h.ryw_GameEventLVFinish, a);
        }
        static ryw_sendEvent_Commerce(e) {
            X.ryw_sendEvent(h.ryw_Event_Commerce, e);
        }
        static ryw_sendEvent_Custom(e) {
            X.ryw_sendEvent(h.ryw_Event_Custom, e);
        }
        static ryw_sendReportLaunchOptions(e, t, r) {
            X.ryw_sendEvent(h.ryw_ReportLaunchOptions, {
                scene: e,
                dqip: t,
                ipxq: r
            });
        }
        static ryw_sendReportAdClickStart(e, t) {
            X.ryw_sendEvent(h.ryw_ReportAdClickStart, {
                title: e,
                appid: String(t)
            });
        }
        static ryw_sendReportAdClickSuccess(e, t) {
            X.ryw_sendEvent(h.ryw_ReportAdClickSuccess, {
                title: e,
                appid: String(t)
            });
        }
        static ryw_sendReportAdClickFail(e, t) {
            X.ryw_sendEvent(h.ryw_ReportAdClickFail, {
                title: e,
                appid: String(t)
            });
        }
        static ryw_sendLogReportInfo(e) {
            X.ryw_sendEvent(h.ryw_LogReportInfo, {
                info: e
            });
        }
        static ryw_sendLogReportError(e) {
            X.ryw_sendEvent(h.ryw_LogReportError, {
                info: e
            });
        }
        static ryw_sendLoginReportInfo(e, t, r) {
            X.ryw_sendEvent(h.ryw_LoginReportInfo, {
                type: e,
                state: t,
                info: r
            });
        }
        static ryw_uma_trackEvent(e, t) {
            Laya.Browser.onMiniGame && (Laya.Browser.window.wx.uma ? Laya.Browser.window.wx.uma.trackEvent(e, t) : console.error("统计事件 无友盟"));
        }
    }
    !function (e) {
        e[e.PageEvent = 0] = "PageEvent", e[e.ADEvent = 100] = "ADEvent";
    }(c || (c = {})), function (e) {
        e[e.SHOW_HALL = 0] = "SHOW_HALL", e[e.SHOW_MORE = 1] = "SHOW_MORE", e[e.SHOW_RESULT = 2] = "SHOW_RESULT",
            e[e.SHOW_CRAZY = 3] = "SHOW_CRAZY", e[e.SHOW_EXPORT = 4] = "SHOW_EXPORT", e[e.SHOW_HOTPLAY = 5] = "SHOW_HOTPLAY",
            e[e.SHOW_RANKING = 6] = "SHOW_RANKING", e[e.SHOW_GAME = 7] = "SHOW_GAME";
    }(g || (g = {})), function (e) {
        e[e.HIDE_ALL_AD = 100] = "HIDE_ALL_AD", e[e.SHOW_BANNER = 101] = "SHOW_BANNER",
            e[e.HIDE_BANNER = 102] = "HIDE_BANNER", e[e.GAME_START_BEFORE = 103] = "GAME_START_BEFORE",
            e[e.CONTINUE = 104] = "CONTINUE", e[e.SET_FINISH_CALL = 105] = "SET_FINISH_CALL";
    }(u || (u = {}));
    var j, K, Z, Y, J, $, ee, te, re = Laya.EventDispatcher;
    class ie {
        static get ryw_instance() {
            return null == ie._ryw_instance && (ie._ryw_instance = new ie()), ie._ryw_instance;
        }
        ryw_dispatch(e, t) {
            ie.ryw_eventDispatcher.event("AD_" + e, t);
        }
        ryw_regEvent(e, t, r, i) {
            ie.ryw_eventDispatcher.on("AD_" + e, r, t, null == i ? null : [i]);
        }
        ryw_regOnceEvent(e, t, r, i) {
            ie.ryw_eventDispatcher.once("AD_" + e, r, t, null == i ? null : [i]);
        }
        ryw_removeEvent(e, t, r, i) {
            ie.ryw_eventDispatcher.off("AD_" + e, r, t);
        }
    }
    ie.ryw_eventDispatcher = new re(), ie._ryw_instance = null;
    class ne extends Laya.Script3D {
        constructor() {
            super(...arguments), this.Scene = null, this.Player = null, this.PlayerAI = null,
                this.playerNode = null, this.aiNode = null, this.wan_crazy = null, this._eatstar = new Laya.Vector3(),
                this._eatstarAI = new Laya.Vector3(), this._eatend = new Laya.Vector3(), this._eatendAI = new Laya.Vector3(),
                this._winpoint = new Laya.Vector3(), this._winpointAI = new Laya.Vector3(), this.goodfood = new Array(),
                this.badfood = new Array(), this.icePiece = null, this.lianNpc = null, this.AiIsWin = !1,
                this.curMode = 1, this.curBadNum = 0, this.EmoticonInfo1 = ["New Material 5.lmat", "New Material 6.lmat", "New Material 9.lmat", "New Material 10.lmat", "New Material 11.lmat", "New Material 12.lmat", "New Material 13.lmat"],
                this.EmoticonInfo2 = ["New Material 7.lmat", "New Material 8.lmat"];
        }
        static Getinstance() {
            return null == this.instance && (this.instance = new ne()), this.instance;
        }
        get winpoint() {
            return this._winpoint;
        }
        get winpointAI() {
            return this._winpointAI;
        }
        LoadGame(e) {
            let t = this;
            if (t.Scene) {
                for (let e = 0; e < t.goodfood.length; e++) t.goodfood[e].removeSelf();
                t.goodfood = [];
                for (let e = 0; e < t.badfood.length; e++) t.badfood[e].removeSelf();
                t.badfood = [], Laya.timer.clearAll(this.Scene), t.Scene.destroy(!0), t.Scene = null;
            }
            Laya.Scene3D.load("subRes/LayaScene_DOMO/Conventional/LevelScene.ls", Laya.Handler.create(this, r => {
                t.Scene = r, this.gameState = 0, Laya.stage.addChild(t.Scene),
                    t.playerNode = t.Scene.getChildByName("PlayerNode"),
                    t.aiNode = t.Scene.getChildByName("AINode"),
                    t.Player = t.playerNode.getChildByName("hm_tq"),
                    t.Player.addComponent(q),
                    t._winpoint = t.playerNode.getChildByName("win").transform.position.clone(),
                    t._eatstar = t.playerNode.getChildByName("eatstar").transform.position.clone(),
                    t._eatend = t.playerNode.getChildByName("eatend").transform.position.clone(),
                    t.PlayerAI = this.aiNode.getChildByName("hm_tq"),
                    t.PlayerAI.addComponent(Q),
                    t._winpointAI = t.aiNode.getChildByName("win").transform.position.clone(),
                    t._eatstarAI = t.aiNode.getChildByName("eatstar").transform.position.clone(),
                    t._eatendAI = t.aiNode.getChildByName("eatend").transform.position.clone(),
                    t.wan_crazy = t.playerNode.getChildByName("wan"), t.wan_crazy.active = !1,
                    t.lianNpc = t.playerNode.getChildByName("npc"),
                    t.lianNpc.active = !1;
                var i = t.playerNode.getChildByName("cj"), n = t.aiNode.getChildByName("cj");
                this.GetFood(),
                    e && e();
                var a = t.Scene.getChildByName("Directional Light");
                a.shadowMode = Laya.ShadowMode.SoftLow, a.shadowDistance = 200, a.shadowResolution = 2048,
                    a.shadowCascadesMode = Laya.ShadowCascadesMode.FourCascades, O.openCastShadow(t.Player),
                    O.openCastShadow(i), O.openCastShadow(t.PlayerAI), O.openCastShadow(n), this.AiIsWin = !1;
            }));
        }
        choiceMode(e) {
            this.aiNode.active = 2 == e, this.curMode = e, this.lianNpc.active = 1 == e;
        }
        GetFood() {
            if (0 == this.goodfood.length) {
                let t = this.Scene.getChildByName("eatgood");
                for (let r = 0; r < t.numChildren; r++) {
                    var e = t.getChildAt(r);
                    this.goodfood.push(e);
                }
                let r = this.Scene.getChildByName("eatbad");
                for (let t = 0; t < r.numChildren; t++) {
                    e = r.getChildAt(t);
                    this.badfood.push(e);
                }
                this.icePiece = this.Scene.getChildByName("ice"), this.RandownFood();
            }
        }
        RandownFood() {
            var e = this._eatend.z - this._eatstar.z - 1, t = 0;
            for (let w = 0; w < e; w++) {
                var r = 100 * Math.random(), i = null, n = null, a = this._eatstar.z + w + t, s = this._eatstarAI.z + w + t;
                if (this.curBadNum > 1 && (r = 50), r < 55) {
                    var o = O.getRandomInt(0, this.goodfood.length - 1);
                    14 == w && 3 == o && (o = Math.floor(2 * Math.random())), i = Laya.Sprite3D.instantiate(this.goodfood[o], this.playerNode),
                        n = Laya.Sprite3D.instantiate(this.goodfood[o], this.aiNode), i.transform.position = new Laya.Vector3(this._eatstar.x, this._eatstar.y, a),
                        n.transform.position = new Laya.Vector3(this._eatstarAI.x, this._eatstarAI.y, s),
                        3 == o && w++, 4 == o && (t += .2), this.curBadNum = 0;
                } else if (55 <= r && r < 80) {
                    o = O.getRandomInt(0, this.badfood.length - 1);
                    (i = Laya.Sprite3D.instantiate(this.badfood[o], this.playerNode)).transform.position = new Laya.Vector3(this._eatstar.x, this._eatstar.y, a),
                        (n = Laya.Sprite3D.instantiate(this.badfood[o], this.aiNode)).transform.position = new Laya.Vector3(this._eatstarAI.x, this._eatstarAI.y, s),
                        this.curBadNum++;
                } else if (80 <= r && r < 90) (i = Laya.Sprite3D.instantiate(this.icePiece, this.playerNode)).transform.position = new Laya.Vector3(this._eatstar.x, this._eatstar.y, a),
                    (n = Laya.Sprite3D.instantiate(this.icePiece, this.aiNode)).transform.position = new Laya.Vector3(this._eatstarAI.x, this._eatstarAI.y, s),
                    this.curBadNum++; else {
                    let e = this.Scene.getChildByName("xianrenzhang");
                    (i = Laya.Sprite3D.instantiate(e, this.playerNode)).transform.position = new Laya.Vector3(this._eatstar.x, this._eatstar.y, a),
                        (n = Laya.Sprite3D.instantiate(e, this.aiNode)).transform.position = new Laya.Vector3(this._eatstarAI.x, this._eatstarAI.y, s),
                        this.curBadNum++;
                }
                if ("dangao3" == i.name || "dangao4" == i.name) for (let e = 0; e < i.numChildren; e++) i.getChildAt(e).addComponent(z).setFoodId(10 * w + 100 + e); else i.addComponent(z).setFoodId(w);
                O.openCastShadow(i), O.openCastShadow(n);
            }
        }
        OnGameOver() {
            U.ryw_instance.ryw_stopBGM(), i.ryw_instance.ryw_dispatch(t.Game_Over), 1 == this.curMode ? (this.wanAni(),
                X.sendGameEventLvFinish_csryw(n.ryw_getLeveNum().toString(), !0, 1)) : ne.Getinstance().AiIsWin ? (X.sendGameEventLvFinish_csryw(n.ryw_getLeveNum().toString(), !1, 1),
                    R.ryw_instance.ryw_closeView(w.GameView), ie.ryw_instance.ryw_dispatch(g.SHOW_RESULT, {
                        isShow: !0,
                        isWin: !1
                    })) : (X.sendGameEventLvFinish_csryw(n.ryw_getLeveNum().toString(), !0, 1), this.wanAni());
        }
        wanAni() {
            this.wan_crazy.active = !0, this.wan_crazy.transform.localPositionZ = 21.8, Laya.Tween.to(this.wan_crazy.transform, {
                localPositionZ: 19.8
            }, 800), this.wan_crazy.getChildByName("shanguang").active = !1, this.wan_crazy.getChildByName("saoguang").active = !1;
        }
        hideCake() {
            this.wan_crazy.getChildByName("pr_wan1").active = !1, this.wan_crazy.getChildByName("shanguang").active = !0,
                this.wan_crazy.getChildByName("saoguang").active = !0, U.ryw_instance.ryw_playSound("tianganjing"),
                Laya.timer.once(2e3, this, () => {
                    R.ryw_instance.ryw_closeView(w.GameView), ie.ryw_instance.ryw_dispatch(g.SHOW_RESULT, {
                        isShow: !0,
                        isWin: !0
                    });
                });
        }
        MoveNpc(e) {
            this.lianNpc.transform.position = new Laya.Vector3(this.lianNpc.transform.position.x, this.lianNpc.transform.position.y, this.lianNpc.transform.position.z + e);
        }
        NpcEmoticon(e) {
            let t = this.lianNpc.getChildByName("Quad1"), r = this.EmoticonInfo1[0];
            "dangao" == e || "dangao1" == e || "dangao2" == e || "dangao3" == e || "dangao4" == e || "dangao5" == e || "dangao6" == e ? r = this.EmoticonInfo1[O.getRandomInt(0, 6)] : "shi" == e ? r = this.EmoticonInfo2[O.getRandomInt(0, 1)] : "lajiao" == e ? r = this.EmoticonInfo2[O.getRandomInt(0, 1)] : "xianrenzhang" == e && (r = this.EmoticonInfo2[O.getRandomInt(0, 1)]);
            let i = "subRes/LayaScene_DOMO/Conventional/Assets/Materials/M_npc1/" + r;
            Laya.Material.load(i, Laya.Handler.create(this, function (e) {
                t.meshRenderer.material = e;
            }));
        }
    }
    ne.instance = null, function (e) {
        e[e.Left_Top = 0] = "Left_Top", e[e.Left_Center = 1] = "Left_Center", e[e.Left_Bottom = 2] = "Left_Bottom",
            e[e.Center_Top = 3] = "Center_Top", e[e.Center_Center = 4] = "Center_Center", e[e.Center_Bottom = 5] = "Center_Bottom",
            e[e.Right_Top = 6] = "Right_Top", e[e.Right_Center = 7] = "Right_Center", e[e.Right_Bottom = 8] = "Right_Bottom";
    }(j || (j = {}));
    class ae {
        constructor(e) {
            this.ryw__banner = null, this._showTime_csryw = 0, this._resetMax = 3, this._resetNumber = 0,
                this._auto = !0, this._offsetX = 0, this._offsetY = 0, this._showTime_csryw = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerFreshTimer,
                this.ryw__banner = e;
        }
        get ryw_banner() {
            return this.ryw__banner;
        }
        set ryw_banner(e) {
            this.ryw__banner = e;
        }
        get ryw_auto() {
            return this._auto;
        }
        set ryw_auto(e) {
            this._auto = e;
        }
        ryw_startTime() {
            setTimeout(() => {
                this.ryw_refresh();
            }, 1e3 * this._showTime_csryw);
        }
        ryw_getPos() {
            let e = Laya.Browser.window.wx.getSystemInfoSync(), t = this.ryw__banner.style, r = t.realHeight, i = t.realWidth;
            isNaN(r) && (r = 100);
            let n, a = 0;
            switch (this._pos) {
                case j.Center_Top:
                    n = (e.screenWidth - i) / 2, a = 0;
                    break;

                case j.Center_Center:
                    n = (e.screenWidth - i) / 2, a = (e.screenHeight - r) / 2;
                    break;

                case j.Center_Bottom:
                    n = (e.screenWidth - i) / 2, a = e.screenHeight - r;
                    break;

                case j.Left_Top:
                    n = 0, a = 0;
                    break;

                case j.Left_Center:
                    n = 0, a = (e.screenHeight - r) / 2;
                    break;

                case j.Left_Bottom:
                    n = 0, a = e.screenHeight - r;
                    break;

                case j.Right_Top:
                    n = e.screenWidth - i, a = 0;
                    break;

                case j.Right_Center:
                    n = e.screenWidth - i, a = (e.screenHeight - r) / 2;
                    break;

                case j.Right_Bottom:
                    n = e.screenWidth - i, a = e.screenHeight - r;
            }
            return console.log(n, a), {
                left: n,
                top: a
            };
        }
        ryw_show(e = j.Center_Bottom, t = 0, r = 0) {
            if (null != this.ryw__banner) {
                this._pos = e, this._offsetX = t, this._offsetY = r;
                let i = this.ryw_getPos();
                this.ryw__banner.style.left = i.left + t, this.ryw__banner.style.top = i.top + r,
                    this.ryw__banner.show(), this.ryw_startTime();
            }
        }
        ryw_hide() {
            null != this.ryw__banner && (this.ryw__banner.hide(), console.log("Banner 隐藏"));
        }
        ryw_destory() {
            null != this.ryw__banner && (this.ryw__banner.destroy(), this.ryw__banner = null,
                console.log("Banner 销毁"));
        }
        ryw_refresh() {
            null != this.ryw__banner && (this.ryw_hide(), this.ryw_destory()), this.ryw_auto && N.ryw_WudianFlag && (this.ryw__banner = se.ryw_getBanner(),
                console.log("Banner 更新", this.ryw__banner), this.ryw_show(this._pos, this._offsetX, this._offsetY));
        }
    }
    class se {
        static ryw_init() {
            // if (!Laya.Browser.onMiniGame) return;
            // let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxWuDianBanners;
            // for (let t = 0; t < e.length; ++t) this._bannerIds_csryw.push(e[t]);
            // this.bannerMax = this._bannerIds_csryw.length;
            // let t = 1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerRecreateTime;
            // setInterval(() => {
            //     if (this.bannerCnt < this.bannerMax) {
            //         let e = se.ryw__createBannerAd();
            //         this._banners_csryw.push(e);
            //     }
            // }, t);
            // let r = se.ryw__createBannerAd();
            // this._banners_csryw.push(r);
        }
        static ryw__createBannerAd() {
            // console.log("banner 创建");
            // let e = this.ryw_getRandomBannerID, t = this.ryw_createBanner_csryw(e), r = new ae(t);
            // return this.bannerCnt++, r;
        }
        static ryw_createBanner_csryw(e) {
            // if (!Laya.Browser.onMiniGame) return;
            // let t = Laya.Browser.window.wx.getSystemInfoSync(), r = (t.screenWidth - 300) / 2, i = t.screenHeight - 100, n = Laya.Browser.window.wx.createBannerAd({
            //     adUnitId: e,
            //     adIntervals: 30,
            //     style: {
            //         left: r,
            //         top: i,
            //         width: 300
            //     }
            // });
            // return n.onLoad(() => {
            //     console.log("Banner 加载完成", e);
            // }), n.onError(t => {
            //     console.log("Banner 加载失败", e, JSON.stringify(t));
            // }), n;
        }
        static get ryw_getRandomBannerID() {
            // return this._bannerIds_csryw[Math.floor(Math.random() * this._bannerIds_csryw.length)];
        }
        static ryw_getBanner() {
            // let e, t = this._banners_csryw.shift();
            // if (t) e = t.ryw_banner, this.bannerCnt--; else {
            //     let t = this.ryw_getRandomBannerID;
            //     e = this.ryw_createBanner_csryw(t);
            // }
            // return console.log("获得banner..."), e;
        }
        static ryw_showBanner(e = j.Center_Bottom, t = 0, r = 0) {
            // console.log("显示banner"), Laya.Browser.onMiniGame && (this.currBanner && this.currBanner.ryw_hide(),
            //     this.currBanner = this._banners_csryw.shift(), this.currBanner && (this.bannerCnt--,
            //         this.currBanner.ryw_show(e, t, r)));
        }
        static ryw_hideBanner() {
            // console.log("隐藏banner"), Laya.Browser.onMiniGame && this.currBanner && (this.currBanner.ryw_auto = !1,
            //     this.currBanner.ryw_hide(), this.currBanner.ryw_destory(), this.currBanner = null);
        }
    }
    se._bannerIds_csryw = new Array(), se._banners_csryw = new Array(), se.currBanner = null,
        se.bannerMax = 0, se.bannerCnt = 0, function (e) {
            e[e.ryw_None = 0] = "ryw_None", e.ryw_CrazyView = "WXTemplate/CrazyView.json", e.ryw_ExportView = "WXTemplate/ExportView.json",
                e.ryw_GameView = "WXTemplate/GameView2.json", e.ryw_HotPlayView = "WXTemplate/HotPlayView.json",
                e.ryw_HallView = "WXTemplate/HallView.json", e.ryw_MoreView = "WXTemplate/MoreView.json",
                e.ryw_RankingView = "WXTemplate/RankingView.json", e.ryw_ResultView = "WXTemplate/ResultView.json";
        }(K || (K = {}));
    class oe {
        constructor() {
            this.ryw__views = {}, this.ryw__loadingList = new Array();
        }
        ryw_openView(e, t, r) {
            if (console.log("openView:" + e), this.ryw__views[e]) {
                let i = this.ryw__views[e]._components, n = null;
                if (i) for (let e = 0; e < i.length; e++) {
                    const r = i[e];
                    if (r._viewBase) {
                        (n = r).ryw_openView(t);
                        break;
                    }
                }
                r && r(n);
            } else {
                for (let t = 0; t < this.ryw__loadingList.length; ++t) {
                    let r = this.ryw__loadingList[t];
                    if (r == e) return void console.log("界面 : " + String(r) + " 正在加载中，请不要重复加载");
                }
                var i = String(e), n = this;
                this.ryw__loadingList.push(e), console.log("Laya.Scene.load ： " + i), Laya.Scene.load(i, Laya.Handler.create(this, function (a) {
                    console.log("viewUrl ： " + i), Laya.stage.addChild(a);
                    var s = a;
                    n.ryw__views[e] = s;
                    let o = a._components, w = null;
                    if (o) for (let r = 0; r < o.length; r++) {
                        const i = o[r];
                        if (i._viewBase) {
                            w = i, i._PageDef = e, w.ryw_openView(t);
                            break;
                        }
                    }
                    for (let t = 0; t < n.ryw__loadingList.length; ++t) {
                        if (n.ryw__loadingList[t] == e) {
                            n.ryw__loadingList.splice(t, 1);
                            break;
                        }
                    }
                    r && r(w);
                }));
            }
        }
        ryw_closeView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let r = t._components;
                if (r) for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    if (t._viewBase) {
                        t.onClose();
                        break;
                    }
                }
                t.removeSelf(), t.destroy(), this.ryw__views[e] = null;
            }
        }
        ryw_ShowView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let e = t._components;
                if (e) for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (r._viewBase) {
                        r.ryw_show();
                        break;
                    }
                }
            }
        }
        ryw_hideView(e) {
            var t = this.ryw__views[e];
            if (t) {
                let e = t._components;
                if (e) for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    if (r._viewBase) {
                        r.ryw_hide();
                        break;
                    }
                }
            }
        }
        ryw_getView(e) {
            return this.ryw__views[e];
        }
    }
    oe.ryw_instance = new oe();
    class we {
        constructor() {
            this.isFirstInGame = !0, this.isRestart = !1, this.isJumpOk = !0, this.FinishCallBack = null,
                null != we._ryw_instance && console.error("单例不能重复初始化...");
        }
        static get ryw_instance() {
            return null == this._ryw_instance && (we._ryw_instance = new we()), we._ryw_instance;
        }
        ryw_setFinishCall(e) {
            this.FinishCallBack = e;
        }
        ryw_finished() {
            console.log("游戏初始化."), we.ryw_instance.isRestart = !1, we.ryw_instance.isJumpOk = !0;
            let e = this;
            this.FinishCallBack && this.FinishCallBack(), setTimeout(() => {
                e.FinishCallBack = null;
            }, 100);
        }
        ryw_checkVerstion() {
            return B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version;
        }
        ryw_register() {
            console.log("注册跳转失败事件...");
            let e = we.ryw_instance;
            i.ryw_instance.ryw_regEvemt(t.ryw_AD_OnShareAdFail, e, e.ryw_onADCancel), ie.ryw_instance.ryw_regEvent(g.SHOW_HALL, e.ryw_showHall, e),
                ie.ryw_instance.ryw_regEvent(g.SHOW_CRAZY, e.ryw_showCrazy, e), ie.ryw_instance.ryw_regEvent(g.SHOW_MORE, e.ryw_showMore, e),
                ie.ryw_instance.ryw_regEvent(g.SHOW_RESULT, e.ryw_showResult, e), ie.ryw_instance.ryw_regEvent(g.SHOW_RANKING, e.ryw_showRanking, e),
                ie.ryw_instance.ryw_regEvent(g.SHOW_GAME, e.ryw_showGame, e), ie.ryw_instance.ryw_regEvent(g.SHOW_EXPORT, e.ryw_showExport, e),
                ie.ryw_instance.ryw_regEvent(g.SHOW_HOTPLAY, e.ryw_showHotPlay, e), ie.ryw_instance.ryw_regEvent(u.SHOW_BANNER, e.ryw_showWXBanner, e),
                ie.ryw_instance.ryw_regEvent(u.HIDE_BANNER, e.ryw_hideWXBanner, e), ie.ryw_instance.ryw_regEvent(u.CONTINUE, e.ryw_finished, e),
                ie.ryw_instance.ryw_regEvent(u.SET_FINISH_CALL, e.ryw_setFinishCall, e);
        }
        ryw_showCrazy(e) {
            this.ryw_hideWXBanner(), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_CrazyView, e) : oe.ryw_instance.ryw_closeView(K.ryw_CrazyView);
        }
        ryw_showMore(e) {
            this.ryw_hideWXBanner(), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_MoreView, e) : oe.ryw_instance.ryw_closeView(K.ryw_MoreView);
        }
        ryw_showResult(e) {
            this.ryw_hideWXBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, !1), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_ResultView, e.isWin) : oe.ryw_instance.ryw_closeView(K.ryw_ResultView);
        }
        ryw_showRanking(e) {
            this.ryw_hideWXBanner(), console.log(JSON.stringify(e)), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_RankingView, e) : oe.ryw_instance.ryw_closeView(K.ryw_RankingView);
        }
        ryw_showGame(e = !0) {
            this.ryw_hideWXBanner(), console.log("showGame.. ", e), e ? oe.ryw_instance.ryw_openView(K.ryw_GameView) : oe.ryw_instance.ryw_closeView(K.ryw_GameView);
        }
        ryw_showExport(e) {
            this.ryw_hideWXBanner(), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_ExportView, e, e.completed) : oe.ryw_instance.ryw_closeView(K.ryw_ExportView);
        }
        ryw_showHotPlay(e) {
            console.log("打开好友热玩...", JSON.stringify(e)), this.ryw_hideWXBanner(), e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_HotPlayView, e) : oe.ryw_instance.ryw_closeView(K.ryw_HotPlayView);
        }
        ryw_showWXBanner() {
            se.ryw_showBanner(j.Center_Bottom, 0, -30);
        }
        ryw_hideWXBanner() {
            se.ryw_hideBanner();
        }
        ryw_onADCancel() {
            console.log("onADCancel:" + we.ryw_instance.isJumpOk, N.ryw_WudianFlag, we.ryw_instance.ryw_checkVerstion(), 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_isJumpHotPlay),
                we.ryw_instance.isJumpOk && N.ryw_WudianFlag && we.ryw_instance.ryw_checkVerstion() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_isJumpHotPlay && (we.ryw_instance.ryw_showHotPlay({
                    isShow: !0,
                    SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                    ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
                }), we.ryw_instance.ryw_hideWXBanner());
        }
        ryw_showHall(e) {
            console.log("showHall", e.isShow),
                e.isShow ? oe.ryw_instance.ryw_openView(K.ryw_HallView, e) : oe.ryw_instance.ryw_closeView(K.ryw_HallView);
        }
    }
    we._ryw_instance = null;
    class ye extends Laya.Script {
        constructor() {
            super(), this.entryTime = 0, this.countDown = 0, ye.ryw__instance = this;
            this.bTime = false;
            this.timerRes = 300;
        }
        static ryw_getInstance() {
            return ye.ryw__instance;
        }
        onAwake() {
            we.ryw_instance.ryw_register(), E.ryw_SetShareMenu("", "", () => { }, () => { }, () => { }),
                this.ryw_reportLaunchOptions()
        }
        onStart() {
            i.ryw_instance.ryw_regEvemt(t.Sub_Vitality, this, this.subVitality), this.ryw_preCreateGame();
        }
        ryw_preCreateGame() {
            if (we.ryw_instance.ryw_register(), -1 == n.ryw_getTili()) {
                let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
                n.ryw_addTili(e, e), ye.ryw_getInstance().ryw_saveGameData();
            }
            // this.refreshPhysical()
            //     , 
            ne.Getinstance().LoadGame(() => {
                platform.getInstance().yadstartup("Lick-Em-All", () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Lick-em-all-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Lick-em-all-musicState")) : false;
                    i.ryw_instance.ryw_dispatch(t.ryw_App_CloseFirstLoadingView),
                        U.ryw_instance.ryw_playBGM("bgm"),
                        R.ryw_instance.ryw_openView(w.ryw_MainView);
                })
            });
        }
        refreshPhysical() {
            if (0 == n.getLeaveMainUITime()) return;
            n.ryw_getTili() < 0 && n.ryw_setTili(0);
            let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality,
                t = new Date().getTime(), r = Math.floor(t / 1e3) - Math.floor(n.getLeaveMainUITime() / 1e3), i = Math.floor(r / 300);
            i > 0 && n.ryw_addTili(i, e);
        }
        ryw_saveGameData() {
            localStorage.setItem("Lick-Em-All-AllData", n.ryw_getSaveData());
        }
        ryw_reportLaunchOptions() {
            L.ryw_Getuserip(e => {
                if (1 == e.code) {
                    console.log("获取玩家ip,地区成功 ：", e.data.dqip, e.data.ipxq);
                    let t = null;
                    Laya.Browser.onMiniGame ? t = E.ryw_getLaunchOptionsSync() : Laya.Browser.onQQMiniGame && (t = x.ryw_getLaunchOptionsSync()),
                        null != t && X.ryw_sendReportLaunchOptions(t.scene, e.data.dqip, e.data.ipxq);
                }
            }, e => {
                console.log("获取玩家ip,地区失败");
                let t = null;
                null != t && X.ryw_sendReportLaunchOptions(t.scene, "", "");
            });
        }
        subVitality() {
            // if (this.bTime) {
            //     return;
            // }
            // countDown
            // let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
            // let timerRes = ye.ryw_getInstance().timerRes
            // if (n.ryw_getTili() < e) {
            //     let x = Date.now() - n.ryw_getTiLiTime();
            //     let til = Math.floor(x % timerRes);
            //     if (n.ryw_getTili() + til > e) {
            //         n.ryw_addTili(e - n.ryw_getTili(), e);
            //     } else {
            //         n.ryw_addTili(til, e);
            //         n.ryw_setTiLiTime(n.ryw_getTiLiTime() + til * timerRes);
            //         Laya.timer.loop(1e3, this, this.updateTime)
            //     }
            // }
        }
        updateTime() {
            // this.bTime = true;
            // if (this.countDown--, this.countDown <= 0) {
            //     let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
            //     this.addVitality(e), n.ryw_getTili() < e && (this.countDown = ye.ryw_getInstance().timerRes, this.subVitality());
            // }
        }
        addVitality(e) {
            // this.bTime = false
            // Laya.timer.clear(this, this.updateTime), n.ryw_addTili(1, e), ye.ryw_getInstance().ryw_saveGameData();
        }
    }
    ye.ryw__instance = null;
    class _e extends Laya.Script {
        constructor() {
            super(), this.ryw_useSound = !0;
        }
        onAwake() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, this.ryw_onDown), this.owner.on(Laya.Event.MOUSE_UP, this, this.ryw_onUp),
                this.owner.on(Laya.Event.MOUSE_OUT, this, this.ryw_onUp);
        }
        onDisable() {
            this.owner.offAll(), Laya.Tween.clearAll(this);
        }
        ryw_onDown() {
            Laya.Tween.to(this.owner, {
                scaleX: .9,
                scaleY: .9
            }, 50), this.ryw_useSound && U.ryw_instance.ryw_playSound("tian1");
        }
        ryw_onUp() {
            Laya.Tween.to(this.owner, {
                scaleX: 1,
                scaleY: 1
            }, 50);
        }
    }
    class le extends F {
        constructor() {
            super(...arguments), this.ryw_levelInfo = null, this.eatflag = !1, this.distanceInfo = null,
                this.hungerInfo = null, this.disBar = null, this.hungerBar1 = null, this.hungerBar2 = null,
                this.tiliBg = null, this.videoBtn = null, this.noThanks = null, this.videoTips = null,
                this.ryw_crazyZone = null, this.ryw_clickBar = null, this.ryw_totalClickTimer = 15,
                this.ryw_needClickTime = 10, this.ryw_bannerClickTime = Math.floor(5 * Math.random()) + 2,
                this.gameState = 0, this.maxDis = 16.28, this.curHungerValue = 50, this.isTween = !1,
                this.ryw_banner = null, this.ryw_ading = !1;
        }
        onAwake() {
            super.onAwake(), this.levelNum = O.FindChild(this.owner, "CenterZone/LevelInfo/LevelNum"),
                this.getmoney = this.owner.getChildByName("getmoney"), this.addimg = this.getmoney.getChildByName("add"),
                this.subimg = this.getmoney.getChildByName("sub"), this.getmoneyText1 = this.addimg.getChildByName("LevelNum"),
                this.getmoneyText2 = this.subimg.getChildByName("LevelNum"), this.ryw_levelInfo = this.owner.getChildByName("CenterZone").getChildByName("LevelInfo"),
                this.distanceInfo = this.owner.getChildByName("CenterZone").getChildByName("DistanceInfo"),
                this.disBar = this.distanceInfo.getChildByName("ClickBar").getChildByName("disBar"),
                this.manSp = this.distanceInfo.getChildByName("ClickBar").getChildByName("man"),
                this.womanSp = this.distanceInfo.getChildByName("ClickBar").getChildByName("woman"),
                this.hungerInfo = this.owner.getChildByName("CenterZone").getChildByName("HungerInfo"),
                this.hungerBar1 = this.hungerInfo.getChildByName("ClickBar").getChildByName("hungerBar1"),
                this.hungerBar2 = this.hungerInfo.getChildByName("ClickBar").getChildByName("hungerBar2"),
                this.tiliBg = this.owner.getChildByName("CenterZone").getChildByName("tiliBg"),
                this.videoBtn = this.tiliBg.getChildByName("videoBtn"), this.noThanks = this.tiliBg.getChildByName("noThanks"),
                this.tiliBg.visible = !1, this.videoTips = this.ryw_View.getChildByName("videoTips"),
                this.videoTips.visible = !1, this.ryw_crazyZone = this.ryw_View.getChildByName("CrazyZone"),
                this.ryw_crazyZone.visible = !1, this.ryw_click_Btn = this.ryw_crazyZone.getChildByName("crazyBtn"),
                this.ryw_arrow_Img = this.ryw_click_Btn.getChildByName("Arrow_Img"),
                this.ryw_clickBar = this.ryw_crazyZone.getChildByName("ClickBar").getChildByName("ClickBar"),
                this.ryw_crazyZone.getChildByName("ClickBar").visible = false,
                this.ryw_clickBarOriginalWidth = this.ryw_clickBar.width, this.ryw_clickBar.width = .1,
                this.ryw_clickTime = 0, this.ryw_totalClickTime = 0, this.disBarMaxWidth = this.disBar.width,
                this.hungerBarMaxWidth = this.hungerBar1.width, this.disBar.width = 1, this.hungerBar1.width = .5 * this.hungerBarMaxWidth,
                this.hungerBar2.width = .5 * this.hungerBarMaxWidth, this.hungerBar2.visible = !1,
                this.womanSp.visible = 2 == n.getGameMode();
        }
        onShow() {
            super.onShow(), this.levelNum.value = n.ryw_getLeveNum().toString(), this.ryw_levelInfo.visible = 1 == n.getGameMode();
        }
        onUpdate() {
            if (2 == this.gameState) {
                this.ryw_arrowUp ? (this.ryw_arrow_Img.top += Laya.timer.delta / 5, this.ryw_arrow_Img.top > -140 && (this.ryw_arrowUp = !1))
                    : (this.ryw_arrow_Img.top -= Laya.timer.delta / 5,
                        this.ryw_arrow_Img.top < -180 && (this.ryw_arrowUp = !0));
                let e = 2 + this.ryw_clickBar.width / this.ryw_clickBarOriginalWidth * 4;
                // this.ryw_clickBar.width >= e && (this.ryw_clickBar.width -= e),
                //     this.ryw_clickBar.width / this.ryw_clickBarOriginalWidth + .1 < this.ryw_clickTime / this.ryw_needClickTime && this.ryw_clickTime--;
            }
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw_click_Btn.on(Laya.Event.CLICK, this, this.ButtonClicked),
                this.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), this.noThanks.on(Laya.Event.CLICK, this, this.onNoThanks),
                i.ryw_instance.ryw_regEvemt(t.EatFood, this, this.EatFood), i.ryw_instance.ryw_regEvemt(t.ryw_AD_OnShareAdFail, this, this.onShareAdFail),
                i.ryw_instance.ryw_regEvemt(t.Game_Over, this, this.gameOver), i.ryw_instance.ryw_regEvemt(t.Player_Distance, this, this.setDistanceBar),
                i.ryw_instance.ryw_regEvemt(t.Ai_Distance, this, this.setAiBar), i.ryw_instance.ryw_regEvemt(t.Player_Die, this, this.showAddHungerValue),
                i.ryw_instance.ryw_regEvemt(t.Hunger_Value, this, this.setHungerBar);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), U.ryw_instance.ryw_stopBGM(), this.ryw_click_Btn.off(Laya.Event.CLICK, this, this.ButtonClicked),
                this.videoBtn.off(Laya.Event.CLICK, this, this.onVideoBtn), this.noThanks.off(Laya.Event.CLICK, this, this.onNoThanks),
                i.ryw_instance.ryw_removeEvent(t.EatFood, this, this.EatFood), i.ryw_instance.ryw_removeEvent(t.ryw_AD_OnShareAdFail, this, this.onShareAdFail),
                i.ryw_instance.ryw_removeEvent(t.Game_Over, this, this.gameOver), i.ryw_instance.ryw_removeEvent(t.Player_Distance, this, this.setDistanceBar),
                i.ryw_instance.ryw_removeEvent(t.Ai_Distance, this, this.setAiBar), i.ryw_instance.ryw_removeEvent(t.Player_Die, this, this.showAddHungerValue),
                i.ryw_instance.ryw_removeEvent(t.Hunger_Value, this, this.setHungerBar);
        }
        gameOver() {
            this.gameState = 2, ne.Getinstance().AiIsWin || (se.ryw_hideBanner(), this.ryw_crazyZone.visible = !0,
                this.distanceInfo.visible = !1, this.hungerInfo.visible = !1);
        }
        onStageMouseDown() {
            2 != this.gameState && 3 != this.gameState && i.ryw_instance.ryw_dispatch(t.OnMoseDwon);
        }
        onStageMouseUp() {
            2 != this.gameState && 3 != this.gameState && i.ryw_instance.ryw_dispatch(t.OnMoseUp);
        }
        EatFood(e) {
            if (!this.eatflag) {
                e < 0 ? (this.subimg.visible = !0, this.addimg.visible = !1) : (this.subimg.visible = !1,
                    this.addimg.visible = !0), e = Math.abs(e), this.getmoneyText1.value = "" + e, this.getmoneyText2.value = "" + e,
                    this.eatflag = !0, this.getmoney.x = 580;
                var t = Laya.stage.height / 2;
                this.getmoney.y = t - 100;
                var r = this;
                Laya.Tween.to(this.getmoney, {
                    y: t - 350
                }, 500, Laya.Ease.backOut, Laya.Handler.create(this, function () {
                    r.getmoney.x = 1e3, r.getmoney.y = 1e3, r.eatflag = !1;
                }));
            }
        }
        ButtonClicked() {
            if (this.ryw_clickTime++, this.ryw_totalClickTime++, i.ryw_instance.ryw_dispatch(t.Crazy_Click, this.ryw_clickTime),
                this.ryw_clickTime > this.ryw_needClickTime && (this.ryw_clickTime = this.ryw_needClickTime),
                this.ryw_clickTime >= this.ryw_bannerClickTime) {
                // if (this.ryw_clickTime >= this.ryw_needClickTime && (this.ryw_clickTime = this.ryw_needClickTime - 1),
                //     this.ryw_bannerClicked) return;
                // this.ryw_bannerClicked = !0, N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_ShowBanner(),
                //     Laya.timer.once(2e3, this, function () {
                this.ryw_BannerClicked();
                // });
            } else this.ryw_totalClickTime > this.ryw_totalClickTimer && (N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_ShowBanner(),
                this.ryw_BannerClicked());
            let e = this.ryw_clickTime / this.ryw_needClickTime * this.ryw_clickBarOriginalWidth;
            this.ryw_clickBar.width = e;
        }
        ryw_BannerClicked() {
            i.ryw_instance.ryw_dispatch(t.ryw_AD_WudianBanner_Hide), this.ryw_bannerClicked = !0,
                this.ryw_clickTime = this.ryw_needClickTime, this.ryw_clickBar.width = this.ryw_clickBarOriginalWidth,
                this.ryw_click_Btn.visible = !1, this.gameState = 3, ne.Getinstance().hideCake();
        }
        ryw_ShowBanner() {
            // se.ryw_showBanner(j.Center_Bottom, 0, -30);
        }
        onDestroy() {
            se.ryw_hideBanner();
        }
        setDistanceBar(e) {
            let t = this.maxDis - e;
            this.disBar.width = t > 0 ? this.disBarMaxWidth * (t / this.maxDis) : this.disBarMaxWidth,
                this.manSp.x = this.disBar.width + 10;
        }
        setAiBar(e) {
            let t = this.maxDis - e;
            this.womanSp.x = t > 0 ? this.disBarMaxWidth * (t / this.maxDis) + 10 : this.disBarMaxWidth;
        }
        setHungerBar(e) {
            if (this.curHungerValue != e) {
                this.curHungerValue = e, e <= 0 && (this.curHungerValue = 0, this.showAddHungerValue());
                let t = e / 100;
                t < 1 && t > 0 ? (this.hungerBar1.width = this.hungerBarMaxWidth * t, this.hungerBar2.width = this.hungerBarMaxWidth * t) : t > 1 ? (this.hungerBar1.width = this.hungerBarMaxWidth,
                    this.hungerBar2.width = this.hungerBarMaxWidth) : (this.hungerBar1.width = .1, this.hungerBar1.width = .1),
                    this.hungerBar1.visible = this.curHungerValue >= 30, this.hungerBar2.visible = this.curHungerValue < 30,
                    0 == this.curHungerValue || this.curHungerValue >= 50 ? (Laya.Tween.clearAll(this.hungerBar2),
                        this.isTween = !1) : this.curHungerValue > 0 && this.curHungerValue <= 30 && (this.isTween || (this.isTween = !0,
                            this.hungerBar2.alpha = 1, this.hungerBarAni(1)));
            }
        }
        hungerBarAni(e) {
            e = 1 == e ? .1 : 1, Laya.Tween.to(this.hungerBar2, {
                alpha: e
            }, 200, null, Laya.Handler.create(this, () => {
                this.hungerBarAni(e);
            }));
        }
        showAddHungerValue() {
            this.tiliBg.visible = !0;
        }
        onVideoBtn() {
            if (this.ryw_ading) return;
            U.ryw_instance.ryw_stopBGM(), this.ryw_ading = !0, Laya.timer.once(1000, this, () => {
                this && this.ryw_ading && (this.ryw_ading = !1);
            });
            let e = this;
            E.ryw_showRewardedVideoAd(r => {
                e.ryw_ading = !1, r ? (this.tiliBg.visible = !1, this.setHungerBar(50), i.ryw_instance.ryw_dispatch(t.Add_Hunger_Value)) : this.showVideoTips("未完整观看视频")
                // ,U.ryw_instance.ryw_playBGM("bgm");
            }, () => {
                e.ryw_ading = !1//, U.ryw_instance.ryw_playBGM("bgm");
            });
        }
        onNoThanks() {
            this.ryw_ading || (this.tiliBg.visible = !1, U.ryw_instance.ryw_stopBGM(), i.ryw_instance.ryw_dispatch(t.Game_Over),
                X.sendGameEventLvFinish_csryw(n.ryw_getLeveNum().toString(), !1, 1), R.ryw_instance.ryw_closeView(w.GameView),
                ie.ryw_instance.ryw_dispatch(g.SHOW_RESULT, {
                    isShow: !0,
                    isWin: !1
                }));
        }
        showVideoTips(e) {
            Laya.timer.clearAll(this), this.videoTips.visible = !0, this.videoTips.getChildByName("str").text = e,
                Laya.timer.once(2500, this, () => {
                    this.videoTips.visible = !1;
                });
        }
        onShareAdFail() {
            R.ryw_instance.ryw_openView(w.ryw_ExportView);
        }
    }
    class he {
        constructor() {
            this.ryw__cached = {};
        }
        ryw_getAD(e, t, r) {
            r = null == r || r;
            let i = this, n = {
                adv_key: e,
                success: e => {
                    if (console.log("获取到广告数据 RYAD:", e), 200 == e.code) {
                        let n = e.result.list;
                        1 == r && i.ryw_sortDatas(n), t(n);
                    } else t(null);
                },
                fail: e => {
                    t(null);
                },
                complete: e => { }
            };
            null != de.ryw_Instance.rysdk ? de.ryw_Instance.rysdk.ry_GetAdv(n) : t(null);
        }
        ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array();
            for (; r.length > 0;) if (1 == r.length) {
                let e = r[0], n = !1, a = t[e];
                for (let t = 0; t < i.length; ++t) {
                    let r = i[t], s = i[t + 1];
                    if (null != s) {
                        if (r.appid != e && s.appid != e) {
                            let e = a.shift();
                            if (null != e) {
                                let r = i.slice(0, t + 1), n = i.slice(t + 1, i.length);
                                (i = r).push(e);
                                for (let e = 0; e < n.length; ++e) i.push(n[e]);
                            }
                            n = !0;
                            break;
                        }
                    } else if (r.appid != e) {
                        let e = a.shift();
                        if (null != e) {
                            let r = i.slice(0, t + 1), n = i.slice(t + 1, i.length);
                            (i = r).push(e);
                            for (let e = 0; e < n.length; ++e) i.push(n[e]);
                        }
                        n = !0;
                        break;
                    }
                }
                (!n || a.length <= 0) && r.splice(0, 1);
            } else for (let e = 0; e < r.length; ++e) {
                let n = t[r[e]], a = n.shift();
                i.push(a), n.length <= 0 && (r.splice(e, 1), --e);
            }
            return i;
        }
    }
    !function (e) {
        e.RYSTAT_E_INIT = "init", e.RYSTAT_E_LOGIN = "login", e.RYSTAT_E_ENTRY_SOURCE = "entrysource",
            e.RYSTAT_E_CLICK_AD = "clickad", e.RYSTAT_E_CLICK_ALLOW = "clickad";
    }(Z || (Z = {}));
    class ce {
        SendEvent(e, t, r, i) {
            null != de.ryw_Instance.rysdk && null != de.ryw_Instance.rysdk.ry_SendEvent && de.ryw_Instance.rysdk.ry_SendEvent(e, t, null, r, i);
        }
        reportInitFail() {
            null != de.ryw_Instance.rysdk && null != de.ryw_Instance.rysdk.ry_ReportFail && de.ryw_Instance.rysdk.ry_ReportFail();
        }
        reportInit() {
            let e = 0, t = () => {
                console.log("init 上报成功!!");
            }, r = () => {
                console.log("init 上报失败!!"), e >= 10 ? (console.log("init 上报重试次数超过 10次，放弃上报"), this.reportInitFail()) : (++e,
                    Laya.timer.once(5e3, this, () => {
                        this.SendEvent(Z.RYSTAT_E_INIT, null, t, r), console.log("init 第 " + e + " 次重新上报");
                    }));
            };
            this.SendEvent(Z.RYSTAT_E_INIT, null, t, r);
        }
        reportLogin() {
            this.SendEvent(Z.RYSTAT_E_LOGIN);
        }
        reportEntrySource() {
            this.SendEvent(Z.RYSTAT_E_ENTRY_SOURCE);
        }
        reportClickAd(e) {
            this.SendEvent(Z.RYSTAT_E_CLICK_AD, {
                adv_id: e,
                timelog: Date.now(),
                type: 0
            });
        }
        reportClickAdAllow(e) {
            this.SendEvent(Z.RYSTAT_E_CLICK_ALLOW, {
                adv_id: e,
                timelog: Date.now(),
                type: 1
            });
        }
    }
    class de {
        constructor() {
            this.ryw__ad = null, this.ryw__stat = null, this.ryw__rysdk = null;
        }
        static get ryw_Instance() {
            return null == de.ryw__instance && console.error("请先调用 RYSDK.init() 对RYSDK进行初始化！！！！！！"),
                de.ryw__instance;
        }
        static ryw_init(e) {
            if (null != de.ryw__instance) return void console.error("请不要重复初始化 RYSDK ！！！！！！");
            let t = new de();
            t.ryw__ad = new he(), t.ryw__stat = new ce(), de.ryw__instance = t, null != Laya.Browser.window.rysdk && (Laya.Browser.window.rysdk.ry_init(),
                de.ryw__instance.ryw__rysdk = Laya.Browser.window.rysdk, de.ryw_Instance.ryw_STAT.reportInit(),
                de.ryw_Instance.ryw_STAT.reportLogin());
        }
        get ryw_AD() {
            return this.ryw__ad;
        }
        get ryw_STAT() {
            return this.ryw__stat;
        }
        get rysdk() {
            return this.ryw__rysdk;
        }
    }
    de.ryw__instance = null;
    class ge {
        static ryw_refreshAd(e) {
            ge.ryw_getAdPosData(t => {
                1 == t.code ? (console.log("获取分享广告数据成功"), ge.ryw__adPosition = t.result, e && e(!0)) : (console.log("获取分享广告数据失败 ： " + t.msg),
                    e && e(!1));
            }, t => {
                console.log("获取分享广告数据失败"), e && e(!1);
            });
        }
        static ryw_getADVs(e, t, r, i, n) {
            if (ge.ryw_isNeedShowAd()) {
                r = null == r ? ge.ryw_UseRandomAdPos : r, i = null == i || i, r && (e = ge.ryw_getRandomADPosID());
                var a = ge.ryw__adv[e];
                if (a) i && (a = null == n ? this.ryw_sortDatas(a) : n(a)), t(a); else {
                    var s = this;
                    B.UseRYSDK ? de.ryw_Instance.ryw_AD.ryw_getAD(e, r => {
                        if (console.log("获取到广告数据 ShareAd：", r), null != r) {
                            if (ge.ryw__adv[e] = r, (a = ge.ryw__adv[e]) && O.ryw_isIphone()) for (var n = 0; n < a.length; ++n) for (var s = a[n], o = 0; o < ge.ryw__iphoneIgnoreAppIds.length; ++o) if (s.appid == ge.ryw__iphoneIgnoreAppIds[o]) {
                                a.splice(n, 1), --n;
                                break;
                            }
                            a && i && (a = ge.ryw_sortDatas(a)), t && t(a);
                        } else t && t(null);
                    }, i) : ge.ryw_getADVData(e, r => {
                        if (1 == r.code) {
                            if (ge.ryw__adv[e] = r.result, (a = ge.ryw__adv[e]) && O.ryw_isIphone()) for (var o = 0; o < a.length; ++o) for (var w = a[o], y = 0; y < ge.ryw__iphoneIgnoreAppIds.length; ++y) if (w.appid == ge.ryw__iphoneIgnoreAppIds[y]) {
                                a.splice(o, 1), --o;
                                break;
                            }
                            a && i && (a = null == n ? s.ryw_sortDatas(a) : n(a)), t && t(a);
                        } else t && t(null);
                    }, e => {
                        t && t(null);
                    });
                }
            } else t(null);
        }
        static ryw_reportUserClick(e) {
            ge.ryw_reqUserClick(e, e => {
                1 == e.code ? console.log("点击广告上报成功") : console.log("点击广告上报失败");
            }, e => {
                console.log("点击广告上报失败");
            });
        }
        static ryw_getRandomADPosID() {
            return ge.ryw_AdLocationids[Math.floor(Math.random() * ge.ryw_AdLocationids.length)];
        }
        static ryw_request(e) {
            // e.ryw_url.indexOf("https://") > -1 || e.ryw_url.indexOf("http://") > -1 ? e.ryw_url = e.ryw_url : e.ryw_url = ge.ryw_mainUrl + e.ryw_url;
            // var t = new Laya.HttpRequest();
            // if (t.once(Laya.Event.COMPLETE, ge, t => {
            //     console.log(t, "http Success"), t = JSON.parse(t), e.ryw_onSuccess && e.ryw_onSuccess(t),
            //         e.ryw_onSuccess = null, e = null;
            // }), t.once(Laya.Event.ERROR, ge, t => {
            //     console.log(t, "http fail"), e.ryw_onFail && e.ryw_onFail(t), e.ryw_onFail = null,
            //         e = null;
            // }), "get" == e.ryw_meth) {
            //     var r = "";
            //     for (const t of Object.keys(e.ryw_data)) {
            //         r += t + "=" + e.ryw_data[t] + "&";
            //     }
            //     e.ryw_url = e.ryw_url + "?" + r;
            //     var i = ["versions", B.ryw_Versions];
            //     t.send(e.ryw_url, null, e.ryw_meth, null, i);
            // } else {
            //     r = "";
            //     for (const t of Object.keys(e.ryw_data)) {
            //         r += t + "=" + e.ryw_data[t] + "&";
            //     }
            //     r += "ts=" + String(Date.now()) + "&";
            //     i = ["Content-Type", "application/x-www-form-urlencoded", "versions", B.ryw_Versions];
            //     t.send(e.ryw_url, r, e.ryw_meth, null, i);
            // }
        }
        static ryw_getAdPosData(e, t) {
            var r = new S();
            r.ryw_url = ge.ryw_getAdPostion, r.ryw_onSuccess = e, r.ryw_onFail = t, r.ryw_data.softid = B.ryw_AppID,
                r.ryw_meth = "get", ge.ryw_request(r);
        }
        static ryw_reqUserClick(e, t, r) {
            var i = new S();
            i.ryw_url = ge.ryw_userClick, i.ryw_onSuccess = t, i.ryw_onFail = r, i.ryw_data.softid = B.ryw_AppID,
                i.ryw_data.uid = n.ryw_openId, i.ryw_data.advid = e, ge.ryw_request(i);
        }
        static ryw_getADVData(e, t, r) {
            var i = new S();
            i.ryw_url = ge.ryw_getAdv, i.ryw_onSuccess = t, i.ryw_onFail = r, i.ryw_data.softid = B.ryw_AppID,
                i.ryw_data.locationid = e, i.ryw_data.preview = 0, ge.ryw_request(i);
        }
        static ryw_RandomJump(e = 1) {
            if (console.log("随机跳转,rate：" + e), e > 1 && (e /= 100), Math.random() <= e) {
                var r = ge.ryw_LoopAdLocationID, n = [ge.ryw_LoopAdLocationID, ge.ryw_InsertAdLocationID, ge.ryw_BannerAdLocationID, ge.ryw_AniAdLocationID];
                if (ge.ryw_UseRandomAdPos) for (var a = 0; a < ge.ryw_AdLocationids.length; ++a) n.push(ge.ryw_AdLocationids[a]);
                r = n[Math.floor(Math.random() * n.length)];
                ge.ryw_getADVs(r, function (e) {
                    if (e) {
                        let r = e[Math.floor(e.length * Math.random())];
                        console.log("跳转游戏： " + r.title), X.ryw_sendReportAdClickStart(r.title, r.appid),
                            E.ryw_navigateToMiniProgram(r.appid, r.url, e => {
                                console.log("跳转成功"), ge.ryw_reportUserClick(r.appid), X.ryw_sendReportAdClickSuccess(r.title, r.appid);
                            }, e => {
                                console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail), "navigateToMiniProgram:fail cancel" == e.errMsg && (console.log("用户取消跳转"),
                                    X.ryw_sendReportAdClickFail(r.title, r.appid));
                            }, e => {
                                console.log("跳转完成");
                            });
                    }
                }, !0);
            }
        }
        static ryw_isNeedShowAd() {
            if (0 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_adSwitch) return !1;
            if (Laya.Browser.onQGMiniGame && D.ryw_getInstance().ryw_getAppSwitchData().ryw_oppocfg.ryw_oppoversions != B.ryw_Versions) return !1;
            if (B.onTTMiniGame) {
                let e = String(M.getLaunchOptionsSync().scene).search("02");
                if (Laya.Browser.onIPhone && 0 == e) return !1;
            }
            var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_mailiang, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_mailianglist, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_mailiangSceneList;
            if (1 == e) {
                var i = null, n = null;
                if (Laya.Browser.onMiniGame ? (i = E.ryw_getLaunchOptionsSync().query.chid, n = E.ryw_getLaunchOptionsSync().scene) : Laya.Browser.onQQMiniGame && (i = x.ryw_getLaunchOptionsSync().query.chid,
                    n = x.ryw_getLaunchOptionsSync().scene), null != i && null != t && t.length > 0) for (var a = 0; a < t.length; ++a) if (i == t[a]) return !1;
                if (null != n && null != r && r.length > 0) for (a = 0; a < r.length; ++a) if (n == r[a]) return !1;
            }
            return !0;
        }
        static ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array(), n = [];
            for (; r.length > 0;) {
                let e = !0;
                for (let a = 0; a < r.length; ++a) {
                    let s = r[a], o = !0;
                    for (let e = 0; e < n.length; ++e) {
                        if (n[e] == s) {
                            o = !1;
                            break;
                        }
                    }
                    if (o) {
                        e = !1;
                        let o = t[s].shift();
                        if (i.push(o), n.push(s), n.length > 3 && n.shift(), t[s].length <= 0) {
                            r.splice(a, 1), --a;
                            continue;
                        }
                    }
                }
                if (e) {
                    for (let e = 0; e < r.length; ++e) {
                        let a = r[e], s = !0, o = t[a];
                        n.splice(0);
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            for (let e = 0; e < i.length; ++e) {
                                n.push(null == i[e - 2] ? null : i[e - 2].appid), n.push(null == i[e - 1] ? null : i[e - 1].appid),
                                    n.push(null == i[e] ? null : i[e].appid), n.push(null == i[e + 1] ? null : i[e + 1].appid),
                                    n.push(null == i[e + 2] ? null : i[e + 2].appid);
                                for (let e = 0; e < n.length; ++e) {
                                    let t = n[e];
                                    if (null != t && t == a) {
                                        s = !1;
                                        break;
                                    }
                                }
                                if (s && null != t) {
                                    let r = i.slice(0, e + 1), n = i.slice(e + 1, i.length);
                                    (i = r).push(t);
                                    for (let e = 0; e < n.length; ++e) i.push(n[e]);
                                }
                            }
                        }
                    }
                    break;
                }
                for (let e = 0; e < r.length; ++e) {
                    let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                    r[i] = t, r[e] = n;
                }
            }
            return i;
        }
    }
    ge.ryw_mainUrl = "",//https://swwww.mrkzx.cn
        ge.ryw_getAdPostion = "/v1.1/api/getAdPosition.html",
        ge.ryw_getAdv = "/v1.1/api/getAdv.html", ge.ryw_userClick = "/v1.1/api/userclick.html",
        ge.ryw_LoopAdLocationID = "4a52326e595fb0aac33df302cec28a59", ge.ryw_BannerAdLocationID = "ec961979c620567b5745e44c6a598a67",
        ge.ryw_InsertAdLocationID = "", ge.ryw_AniAdLocationID = "5ad75527d97bf1bfe348adf6f1bd4031",
        ge.ryw_HistoryLocationID = "", ge.ryw_MoreGameLocationID = "95f90cf20023d0aea8ca65cbedd16f1d",
        ge.ryw_UseRandomAdPos = !1, ge.ryw_AdLocationids = ["4a52326e595fb0aac33df302cec28a59"],
        ge.ryw__adPosition = {}, ge.ryw__adv = {}, ge.ryw__iphoneIgnoreAppIds = ["wx2d2acce3c45f4ddf", "wxeb93c1298ec7c62b"];
    class pe {
        static get BannerInstance() {
            return this._banner;
        }
        static Login(e, t) {
            Laya.Browser.window.qg.getSystemInfoSync().platformVersionCode >= 1053 ? (console.log("vivo 开始登陆 >= 1053"),
                Laya.Browser.window.qg.login().then(r => {
                    if (r.data.token) {
                        let t = r.data.token;
                        e(t, !0), console.log("vivo 登陆成功,获取到 token : " + t);
                    } else console.log("登录失败 res.data.token 为 null"), t();
                }, e => {
                    console.log("登录失败" + JSON.stringify(e)), t();
                })) : (console.log("vivo 开始登陆 < 1053"), Laya.Browser.window.qg.authorize({
                    type: "token",
                    success: function (r) {
                        Laya.Browser.window.qg.getProfile({
                            token: r.accessToken,
                            success: function (t) {
                                console.log("openid获取成功", t.openid), e(t.openid, !1);
                            },
                            fail: function (e, r) {
                                console.log("获取openid失败 : " + r), t();
                            }
                        });
                    },
                    fail: function (e, r) {
                        console.log("登录失败" + r), t();
                    }
                }));
        }
        static showDialog(e, t, r, i, n, a) {
            Laya.Browser.window.qg.showDialog({
                title: e,
                message: t,
                buttons: r,
                success: function (e) {
                    console.log("handling callback"), i();
                },
                cancel: function () {
                    console.log("handling cancel"), n();
                },
                fail: function (e, t) {
                    console.log(`handling fail, code = ${t}`), a();
                }
            });
        }
        static createRewardedVideoAd() {
            Laya.Browser.onVVMiniGame && (pe.rewardedAd = Laya.Browser.window.qg.createRewardedVideoAd({
                posId: pe.adUnitId,
                style: {}
            }), pe.rewardedAd.onError(e => {
                switch (e.errCode) {
                    case -3:
                        console.log("激励广告加载失败---调用太频繁", JSON.stringify(e));
                        break;

                    case -4:
                        console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(e));
                        break;

                    case 30008:
                        break;

                    default:
                        console.log("激励广告展示失败"), console.log(JSON.stringify(e));
                }
            }));
        }
        static showRewardedVideoAd(e, t) {
            if (Laya.Browser.onVVMiniGame) {
                if (U.ryw_instance.ryw_stopBGM(), console.log("---------------------------------- VIVOAPI.rewardedAd:", pe.rewardedAd + ",VIVOAPI.rewardedAdNum:", pe.rewardedAdNum),
                    0 == pe.rewardedAdNum) pe.createRewardedVideoAd(); else {
                    let e = pe.rewardedAd.load();
                    e && e.catch(e => {
                        console.log("激励广告load失败" + JSON.stringify(e)), t();
                    });
                }
                pe.rewardedAdNum = 1, console.log("近来showRewardedVideoAd"), pe.rewardedAd.onLoad(() => {
                    let e = pe.rewardedAd.show();
                    e && e.then(() => {
                        console.log("激励广告展示成功");
                    }).catch(e => {
                        console.log("激励广告展示失败" + JSON.stringify(e)), t();
                    });
                }), pe.rewardedAd.onClose(t => {
                    t && t.isEnded ? (console.log("正常播放结束，可以下发游戏奖励"), e(!0)) : (console.log("播放中途退出，不下发游戏奖励"),
                        e(!1));
                });
            }
        }
        static showBannerAd() {
            if (Laya.Browser.onVVMiniGame) {
                console.log("===========bannerAd showBanerAd");
                var e = Laya.Browser.window.qg.getSystemInfoSync();
                e.screenWidth, e.screenHeight;
                this.mBannerAd = qg.createBannerAd({
                    posId: pe.bannerAdUnitId,
                    style: {}
                });
                let t = this.mBannerAd.show();
                t && t.then(() => {
                    console.log("banner广告展示成功");
                }).catch(e => {
                    switch (e.code) {
                        case 30003:
                            console.log("新用户7天内不能曝光Banner，请将手机时间调整为7天后，退出游戏重新进入");
                            break;

                        case 30009:
                            console.log("10秒内调用广告次数超过1次，10秒后再调用");
                            break;

                        case 30002:
                            console.log("加载广告失败，重新加载广告");
                            break;

                        default:
                            console.log("banner广告展示失败"), console.log(JSON.stringify(e));
                    }
                }), this.mBannerAd.onError(function (e) {
                    console.log("Banner广告加载失败111:" + JSON.stringify(e));
                });
            }
        }
        static hideBannerAd() {
            this.mBannerAd ? (console.log("===========bannerAd 隐藏"), this.mBannerAd.hide(),
                this.mBannerAd.destroy(), this.mBannerAd = null) : console.log("===========bannerAd 为空");
        }
        static navigateToMiniProgram(e, t, r, i, n) {
            Laya.Browser.onVVMiniGame && (console.log("vivo 跳转游戏： " + e), Laya.Browser.window.qg.navigateToMiniGame({
                pkgName: e,
                path: t,
                extraData: {
                    from: B.ryw_AppID
                },
                envVersion: "release",
                success(e) {
                    r && r(e);
                },
                fail(e) {
                    i && i(e);
                },
                complete(e) {
                    n && n(e);
                }
            }));
        }
        static showInterstitialAd(e, t) {
            if (Laya.Browser.onVVMiniGame) {
                var r = Laya.Browser.window.qg.createInterstitialAd({
                    posId: pe.InsAdUnitId
                });
                r.onLoad(() => {
                    console.log("插屏广告加载完成");
                }), r.onClose(() => {
                    e && e();
                }), r.onError(e => {
                    console.log("插屏广告拉取失败", JSON.stringify(e)), t && t();
                }), r.show().then(() => {
                    console.log("插屏广告显示成功");
                }).catch(e => {
                    t && t();
                });
            } else e && e();
        }
        static getLaunchOptionsSync() {
            return {};
        }
        static share(e) {
            Laya.Browser.onVVMiniGame && Laya.Browser.window.qg.share({
                success() {
                    null != e && e(!0), Laya.Browser.window.qg.showToast({
                        message: "分享成功"
                    });
                },
                fail(e, t) {
                    Laya.Browser.window.qg.showToast({
                        message: "分享失败"
                    });
                },
                cancel() {
                    Laya.Browser.window.qg.showToast({
                        message: "分享失败"
                    });
                },
                complete() { }
            });
        }
        static createDesktopIcon(e, t) {
            Laya.Browser.onVVMiniGame ? Laya.Browser.window.qg.hasShortcutInstalled({
                success: function (r) {
                    0 == r ? Laya.Browser.window.qg.installShortcut({
                        success: function () {
                            e && e();
                        },
                        fail: function (e) {
                            for (var r in t && t(), console.log("创建桌面图标失败！！！！", e), e) console.log(r, e);
                        },
                        complete: function () { }
                    }) : (console.log("桌面图标已存在！！！！"), t && t());
                },
                fail: function (e) {
                    for (var r in t && t(), console.log("判断桌面图标是否存在失败！！！", e), e) console.log(r, e);
                },
                complete: function () { }
            }) : t && t();
        }
        static ryw_hasShortcutInstalled(e, t) {
            Laya.Browser.onVVMiniGame && Laya.Browser.window.qg.hasShortcutInstalled({
                success: function (t) {
                    0 == t ? (console.log("桌面图标不存在！！！！"), e && e(!1)) : (console.log("桌面图标已存在！！！！"),
                        e && e(!0));
                },
                fail: function (e) {
                    for (var r in t && t(), console.log("判断桌面图标是否存在失败！！！", e), e) console.log(r, e);
                },
                complete: function () { }
            });
        }
        static showNativeAd(e, t, r) {
            1 == r ? pe.tryShowNativeAd1(e, t) : 2 == r && pe.tryShowNativeAd2(e, t);
        }
        static tryShowNativeAd1(e, t) {
            if (!Laya.Browser.onVVMiniGame) return void (null != t && t());
            let r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_yuanshengSwitch, i = D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_vivoversions;
            1 == r && i == B.ryw_Versions ? R.ryw_instance.ryw_openView(w.VVNativeView1, null, t => {
                null != e && e();
            }) : null != t && t();
        }
        static tryShowNativeAd2(e, t) {
            if (!Laya.Browser.onVVMiniGame) return void (null != t && t());
            let r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_yuanshengSwitch2, i = D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_vivoversions;
            1 == r && i == B.ryw_Versions ? R.ryw_instance.ryw_openView(w.VVNativeView2, null, t => {
                null != e && e();
            }) : null != t && t();
        }
        static tryPopCreateDestopIcon(e, t) {
            Laya.Browser.onVVMiniGame && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_addToDesktop ? pe.createDesktopIcon(e, t) : null != t && t();
        }
        static tryShowInsAd(e, t) {
            if (1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_chapingSwitch) {
                100 * Math.random() <= D.ryw_getInstance().ryw_getAppSwitchData().ryw_vivocfg.ryw_chaping ? pe.showInterstitialAd(() => {
                    e && e();
                }, () => {
                    t && t();
                }) : t && t();
            } else t && t();
        }
    }
    pe.adUnitId = "", pe.bannerAdUnitId = "", pe.nativeAdId = "", pe.InsAdUnitId = "",
        pe.rewardedAd = null, pe.rewardedAdNum = 0, pe._banner = null, pe.mBannerAd = null;
    class ue extends Laya.Script {
        constructor() {
            super(...arguments), this.ryw_AdPosID = -10086, this.ryw__datas = [], this.ryw__data = null;
        }
        get ryw_Sprite() {
            return this.owner;
        }
        get ryw_Data() {
            return this.ryw__data;
        }
        ryw_refresh(e) {
            let t = this;
            ge.ryw_getADVs(this.ryw_AdPosID, r => {
                null != r && (t.ryw__datas = r, t.ryw__data = t.ryw__datas[Math.floor(Math.random() * r.length)],
                    null != e && e());
            }, !1);
        }
        ryw_navigateToMiniProgram(e) {
            var r = null == e ? this.ryw__data : e;
            r && (console.log("跳转游戏： " + r.title), Laya.Browser.onMiniGame ? (B.UseRYSDK && de.ryw_Instance.ryw_STAT.reportClickAd(r.id),
                X.ryw_sendReportAdClickStart(r.title, r.appid), E.ryw_navigateToMiniProgram(r.appid, r.url, e => {
                    console.log("跳转成功"), ge.ryw_reportUserClick(r.appid), X.ryw_sendReportAdClickSuccess(r.title, r.appid),
                        B.UseRYSDK && de.ryw_Instance.ryw_STAT.reportClickAdAllow(r.id);
                }, e => {
                    console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail), "navigateToMiniProgram:fail cancel" == e.errMsg && (console.log("用户取消跳转"),
                        X.ryw_sendReportAdClickFail(r.title, r.appid));
                }, e => {
                    console.log("跳转完成");
                })) : Laya.Browser.onQGMiniGame ? H.ryw_navigateToMiniProgram(r.appid, r.title, r.url, e => {
                    console.log("跳转成功"), ge.ryw_reportUserClick(r.appid);
                }, e => {
                    console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail);
                }, e => {
                    console.log("跳转完成");
                }) : Laya.Browser.onQQMiniGame ? x.ryw_navigateToMiniProgram(r.appid, r.url, e => {
                    console.log("跳转成功"), ge.ryw_reportUserClick(r.appid);
                }, e => {
                    console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail);
                }, e => {
                    console.log("跳转完成");
                }) : Laya.Browser.onVVMiniGame ? pe.navigateToMiniProgram(r.appid, r.url, e => {
                    console.log("跳转成功"), ge.ryw_reportUserClick(r.appid);
                }, e => {
                    console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail);
                }, e => {
                    console.log("跳转完成");
                }) : B.onTTMiniGame && M.ryw_showMoreGamesModal(() => {
                    console.log("跳转成功"), ge.ryw_reportUserClick(r.appid);
                }, () => {
                    console.log("跳转失败"), i.ryw_instance.ryw_dispatch(t.ryw_AD_OnShareAdFail);
                }));
        }
        ryw_show() {
            this.ryw_Sprite.visible = !0;
        }
        ryw_hide() {
            this.ryw_Sprite.visible = !1;
        }
        ryw_autoScrollText(e) {
            if (e.overflow != Laya.Text.SCROLL) return;
            let t = !0, r = 0;
            Laya.timer.frameLoop(1, e, () => {
                let i = Laya.timer.delta / 1e3 * 10;
                (r += i) >= e.textWidth / 2 && (t = !t, r = 0), t ? e.scrollX += i : e.scrollX -= i;
            });
        }
    }
    class me extends ue {
        constructor() {
            super(...arguments), this.ryw__originW = 170, this.ryw__originH = 170, this.tiao = null,
                this.red = null, this.handAni = null, this.template = null;
        }
        onAwake() {
            if (this.ryw__displaySp = this.owner.getChildByName("Display"), null == this.ryw__displaySp) {
                let e = this.owner.getChildByName("CircleDisplay");
                e && (this.ryw__displaySp = e.getChildByName("Display"));
            }
            this.ryw__originW = this.ryw__displaySp.width, this.ryw__originH = this.ryw__displaySp.height,
                this.ryw__disText = this.owner.getChildByName("TitelText"), this.ryw__disText.overflow = Laya.Text.SCROLL,
                this.ryw__disText.text = "", this.tiao = this.owner.getChildByName("Tiao"), this.setTiaoSpr(),
                this.red = this.owner.getChildByName("red"), this.red && (this.red.visible = !1),
                this.randomBg();
        }
        randomBg() {
            let e = this.owner.getChildByName("colors");
            if (e) {
                let t = Math.floor(Math.random() * e.numChildren);
                for (let r = 0; r < e.numChildren; r++) {
                    const i = e.getChildAt(r);
                    i.visible = t == r;
                }
            }
        }
        onStart() {
            this.ryw_autoScrollText(this.ryw__disText);
        }
        onEnable() {
            this.ryw_Sprite.on(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onDisable() {
            this.ryw_Sprite.off(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        ryw_onClickAd() {
            this.ryw_navigateToMiniProgram();
        }
        ryw_setData(e) {
            if (this.ryw__data = e, null != this.ryw__data) {
                let e = this;
                this.ryw__displaySp.loadImage(this.ryw__data.logo, Laya.Handler.create(this, function () {
                    e.ryw__displaySp.destroyed || (e.ryw__displaySp.width = e.ryw__originW, e.ryw__displaySp.height = e.ryw__originH);
                }));
                let t = String(this.ryw__data.title);
                this.ryw__disText.text = t;
            }
        }
        setTiaoSpr() {
            if (!this.tiao) return;
            let e = "KRQ/di" + O.getRandomInt(1, 6) + ".png";
            this.tiao.loadImage(e);
        }
        initHand() {
            let e = this;
            Laya.loader.load("ClickGetPrize/NewProject.png", Laya.Handler.create(this, t => {
                Laya.loader.load("ClickGetPrize/NewProject.sk", Laya.Handler.create(this, r => {
                    console.log("texture", t), console.log("bytes", r), e.template = new Laya.Templet(),
                        e.template.parseData(t, r), e.handAni = e.template.buildArmature(), e.ryw_Sprite.addChild(e.handAni),
                        e.handAni.x = e.ryw__originW / 2, e.handAni.y = e.ryw__originH / 2, e.handAni.scaleX = .8,
                        e.handAni.scaleY = .8, e.handAni.play(0, !0), e.handAni.visible = !1;
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
            }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
        }
        setHandState(e) {
            this.handAni && (this.handAni.visible = e);
        }
        setRedState(e) {
            this.red && (this.red.visible = e);
        }
    }
    class fe extends ue {
        constructor() {
            super(...arguments), this.ryw_isEnable = !0, this.ryw_useMovePause = !0, this.ryw_useLocalRandom = !0,
                this.ryw_useRandom = !0, this.ryw_sortDatas = null, this.isHandTip = !1, this.ryw__scrollForward = !0,
                this.ryw__cellSize = new Laya.Point(), this.IsMOUSE_MOVE = !1, this.ryw_SlideSkip = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_SlideSkip,
                this.ryw_ForceSkip = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_ForceSkip;
        }
        get ryw_Clip() {
            return this.owner;
        }
        setParam(e) {
            e && (this.ryw_SlideSkip = e.SlideSkip, this.ryw_ForceSkip = e.ForceSkip);
        }
        onAwake() {
            this.ryw_AdPosID = ge.ryw_LoopAdLocationID, this.ryw__list = this.owner.getChildByName("List"),
                this.ryw__list.renderHandler = Laya.Handler.create(this, this.ryw_onListRender, null, !1),
                this.ryw__list.hScrollBarSkin = "", this.ryw__list.on(Laya.Event.MOUSE_MOVE, this, this.MOUSE_MOVE),
                this.ryw__list.on(Laya.Event.MOUSE_OUT, this, this.MOUSE_OUT);
        }
        MOUSE_MOVE() {
            this.IsMOUSE_MOVE = !0;
        }
        MOUSE_OUT() {
            if (this.IsMOUSE_MOVE && (this.IsMOUSE_MOVE = !1, 1 == this.ryw_SlideSkip && N.ryw_WudianFlag && this.ryw__list.array && this.ryw__list.array.length > 0)) {
                var e = Math.floor(Math.random() * this.ryw__list.array.length), t = this.ryw__list.array[e];
                this.ryw_navigateToMiniProgram(t);
            }
        }
        onStart() {
            let e = this;
            this.ryw__list.width = e.ryw_Clip.width, this.ryw__list.height = e.ryw_Clip.height,
                e.ryw_refresh(() => {
                    if (null != e.ryw__list.cells && e.ryw__list.cells.length > 0) {
                        let i = e.ryw__list.cells[0];
                        if (e.ryw__cellSize.x = i.width, e.ryw__cellSize.y = i.height, e.ryw_useMovePause && setTimeout(() => {
                            e.ryw__list.scrollBar && (e.ryw__list.scrollBar.value = 0, e.ryw_move());
                        }, 2e3), e.isHandTip && e.initCellHand(), 1 == e.ryw_ForceSkip && N.ryw_WudianFlag) {
                            var t = Math.floor(Math.random() * e.ryw__list.array.length), r = e.ryw__list.array[t];
                            e.ryw_navigateToMiniProgram(r);
                        }
                        e.setRedState();
                    }
                });
        }
        randClick() {
            if (this.ryw__list && this.ryw__list.array && this.ryw__list.array.length > 0) {
                var e = Math.floor(Math.random() * this.ryw__list.array.length), t = this.ryw__list.array[e];
                this.ryw_navigateToMiniProgram(t);
            }
        }
        ryw_refresh(e) {
            if (!this.ryw_isEnable) return void (null != e && e());
            let t = this;
            console.log("1----------轮播广告id:", this.ryw_AdPosID), ge.ryw_getADVs(this.ryw_AdPosID, r => {
                null != r && r.length > 0 ? (t.ryw__datas = r, t.ryw__list.array = t.ryw__datas,
                    null == t.ryw_Sprite || t.ryw_Sprite.destroyed || (t.ryw_Sprite.visible = !0), null != e && e()) : null == t.ryw_Sprite || t.ryw_Sprite.destroyed || (t.ryw_Sprite.visible = !1);
            }, this.ryw_useRandom, this.ryw_useLocalRandom, this.ryw_sortDatas);
        }
        ryw_onListRender(e, t) {
            var r = this.ryw__list.array[t];
            e.getComponent(me).ryw_setData(r);
        }
        ryw_move() {
            let e = this.ryw__cellSize.x + this.ryw__list.spaceX, t = 0;
            if (this.ryw__scrollForward ? t = this.ryw__list.scrollBar.value % e : (e *= -1,
                t = (this.ryw__list.scrollBar.max - this.ryw__list.scrollBar.value) % e * -1), this.ryw__list.scrollBar) {
                this.ryw__list.scrollBar.stopScroll();
                let r = e;
                0 != t && (r = 2 * e - t);
                let i = this;
                Laya.Tween.to(i.ryw__list.scrollBar, {
                    value: i.ryw__list.scrollBar.value + r
                }, 1e3, null, Laya.Handler.create(i, () => { })), Laya.timer.once(1010, i, () => {
                    i.ryw__list.scrollBar.value >= i.ryw__list.scrollBar.max ? i.ryw__scrollForward = !1 : i.ryw__list.scrollBar.value <= 0 && (i.ryw__scrollForward = !0),
                        Laya.timer.once(3e3, i, () => {
                            i.ryw__list.scrollBar && i.ryw_move();
                        });
                });
            }
        }
        onUpdate() {
            this.ryw_useMovePause || (this.ryw__scrollForward ? (this.ryw__list.scrollBar.value += 100 * Laya.timer.delta / 1e3,
                this.ryw__list.scrollBar.value >= this.ryw__list.scrollBar.max && (this.ryw__scrollForward = !1)) : (this.ryw__list.scrollBar.value -= 100 * Laya.timer.delta / 1e3,
                    this.ryw__list.scrollBar.value <= 0 && (this.ryw__scrollForward = !0)));
        }
        initCellHand() {
            let e = this;
            for (let t = 0; t < e.ryw__list.cells.length; t++) {
                e.ryw__list.cells[t].getComponent(me).initHand();
            }
        }
        setHandState() {
            if (!this.isHandTip || this.ryw__list.cells.length < 1) return;
            let e = O.getRandomInt(0, this.ryw__list.cells.length - 1);
            console.log("当前手势动画的位置索引：", e + "/当前单元格的数量：" + this.ryw__list.cells.length);
            for (let t = 0; t < this.ryw__list.cells.length; t++) {
                let r = this.ryw__list.cells[t].getComponent(me);
                t == e ? r.setHandState(!0) : r.setHandState(!1);
            }
        }
        setRedState() {
            if (this.ryw__list.cells.length < 1) return;
            let e = this.ryw__list.cells.length / 2 - 2, t = this.ryw__list.cells.length / 2 + 2, r = [];
            for (; r.length < 4;) {
                let i = O.getRandomInt(e, t);
                i < 0 ? i = 0 : i >= this.ryw__list.cells.length && (i = this.ryw__list.cells.length / 2 - 1),
                    r.push(i);
            }
            for (let e = 0; e < this.ryw__list.cells.length; e++) {
                let t = this.ryw__list.cells[e].getComponent(me);
                r.indexOf(e) > -1 ? t.setRedState(!0) : t.setRedState(!1);
            }
        }
    }
    class Be extends fe {
        onAwake() {
            super.onAwake(), this.ryw__list.vScrollBarSkin = "";
        }
        ryw_move() {
            let e = this.ryw__cellSize.y + this.ryw__list.spaceY, t = 0;
            if (this.ryw__scrollForward ? t = this.ryw__list.scrollBar.value % e : (e *= -1,
                t = (this.ryw__list.scrollBar.max - this.ryw__list.scrollBar.value) % e * -1), this.ryw__list.scrollBar) {
                this.ryw__list.scrollBar.stopScroll();
                let r = e;
                0 != t && (r = 2 * e - t);
                let i = this;
                Laya.Tween.to(i.ryw__list.scrollBar, {
                    value: i.ryw__list.scrollBar.value + r
                }, 1e3, null, Laya.Handler.create(i, () => { })), Laya.timer.once(1010, i, () => {
                    i.ryw__list.scrollBar.value >= i.ryw__list.scrollBar.max ? i.ryw__scrollForward = !1 : i.ryw__list.scrollBar.value <= 0 && (i.ryw__scrollForward = !0),
                        Laya.timer.once(3e3, i, () => {
                            i.ryw__list.scrollBar && i.ryw_move();
                        });
                });
            }
        }
    }
    class Se {
        constructor(e) {
            this.ryw__id = null, this.ryw__banner = null, this.ryw__createTime = 0, this.ryw__destroyed = !1,
                this.ryw__error = null, this.ryw__loading = !1, this.ryw__retryCount = 0, this.ryw__bannerTotalShowTime = 0,
                this.ryw__lastShowTime = 0, this.ryw__id = e;
        }
        get ryw_Id() {
            return this.ryw__id;
        }
        get ryw_CreateTime() {
            return this.ryw__createTime;
        }
        get ryw_Destroyed() {
            return this.ryw__destroyed;
        }
        get ryw_isReady() {
            return null != this.ryw__banner;
        }
        get ryw_isError() {
            return null != this.ryw__error;
        }
        get ryw_Error() {
            return this.ryw__error;
        }
        get ryw_Loading() {
            return this.ryw__loading;
        }
        get ryw_RetryCount() {
            return this.ryw__retryCount;
        }
        get ryw_BannerTotalShowTime() {
            return this.ryw__bannerTotalShowTime;
        }
        ryw_show() {
            if (this.ryw_isReady) {
                this.ryw__banner.hide();
                let e = Laya.Browser.window.wx.getSystemInfoSync(), t = e.screenWidth, r = e.screenHeight, i = (new Laya.Point(0, 0),
                    t / 2 - 300 / 2), n = r - 130;
                this.ryw__banner.style.left = i, this.ryw__banner.style.top = n, this.ryw__lastShowTime = Laya.timer.currTimer,
                    this.ryw__banner.show();
            }
        }
        ryw_hide() {
            this.ryw_isReady && (this.ryw__banner.hide(), this.ryw__bannerTotalShowTime += Laya.timer.currTimer - this.ryw__lastShowTime);
        }
        ryw_destroy() {
            this.ryw__destroyed ? console.log("BannerAd 已经被销毁") : this.ryw__loading ? console.log("BannerAd 正在加载中，无法进行销毁") : (null != this.ryw__banner && this.ryw__banner.destroy(),
                this.ryw__banner = null, this.ryw__destroyed = !0);
        }
        ryw_retry(e) {
            if (this.ryw__destroyed) return void console.log("BannerAd 已被销毁，无法重试");
            if (this.ryw_isReady) return void console.log("BannerAd 已创建成功，无需重试");
            if (this.ryw__loading) return void console.log("BannerAd 正在创建中");
            if (this.ryw__retryCount >= Se.ryw_MAX_RETRY_COUNT) return void console.log("此 BannerAd 重试次数已达最大");
            let t = this;
            this.ryw__create(r => {
                null != e && e(r), ++t.ryw__retryCount;
            });
        }
        ryw__create(e) {
            if (!Laya.Browser.onMiniGame) return void (null != e && e(!1));
            let t = null;
            if (Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx.createBannerAd({
                adUnitId: this.ryw__id,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 300
                }
            }) : Laya.Browser.onQQMiniGame && (t = Laya.Browser.window.qq.createBannerAd({
                adUnitId: this.ryw__id,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 300
                }
            })), null != t) {
                let r = this;
                this.ryw__loading = !0, t.onLoad(i => {
                    console.log("BannderAd 加载完成", r.ryw__id, i), r.ryw__banner = t, r.ryw__createTime = Laya.timer.currTimer,
                        r.ryw__loading = !1, null != e && e(!0);
                }), t.onError(i => {
                    console.log("BannderAd 加载失败", r.ryw__id, i), r.ryw__error = i, r.ryw__loading = !1,
                        t.destroy(), null != e && e(!1);
                });
            }
        }
    }
    Se.ryw_MAX_RETRY_COUNT = 3;
    class Le {
        constructor(e) {
            this.ryw__id = null, this.ryw__gridAd = null, this.ryw__createTime = 0, this.ryw__destroyed = !1,
                this.ryw__error = null, this.ryw__loading = !1, this.ryw__id = e;
        }
        get ryw_CreateTime() {
            return this.ryw__createTime;
        }
        get ryw_Destroyed() {
            return this.ryw__destroyed;
        }
        get ryw_isReady() {
            return null != this.ryw__gridAd;
        }
        get ryw_isError() {
            return null != this.ryw__error;
        }
        get ryw_Error() {
            return this.ryw__error;
        }
        get ryw_Loading() {
            return this.ryw__loading;
        }
        ryw_show() {
            this.ryw_isReady && this.ryw__gridAd.show();
        }
        ryw_hide() {
            this.ryw_isReady && this.ryw__gridAd.hide();
        }
        ryw_destroy() {
            this.ryw__destroyed ? console.log("GridAD 已经被销毁") : this.ryw__loading ? console.log("GridAD 正在加载中，无法进行销毁") : (null != this.ryw__gridAd && this.ryw__gridAd.destroy(),
                this.ryw__gridAd = null, this.ryw__destroyed = !0);
        }
        ryw_retry(e) {
            if (this.ryw__destroyed) return void console.log("GridAD 已被销毁，无法重试");
            if (this.ryw_isReady) return void console.log("GridAD 已创建成功，无需重试");
            if (this.ryw__loading) return void console.log("GridAD 正在创建中");
            this.ryw__create(t => {
                null != e && e(t);
            });
        }
        ryw__create(e) {
            if (!Laya.Browser.onMiniGame) return void (null != e && e(!1));
            let t = Laya.Browser.window.wx.createGridAd({
                adUnitId: this.ryw__id,
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 300,
                    height: 150
                }
            });
            if (null != t) {
                let r = this;
                this.ryw__loading = !0, t.onLoad(i => {
                    console.log("GridAD 加载完成", r.ryw__id, i), r.ryw__gridAd = t, r.ryw__createTime = Laya.timer.currTimer,
                        r.ryw__loading = !1, null != e && e(!0);
                }), t.onError(i => {
                    console.log("GridAD 加载失败", r.ryw__id, i), r.ryw__error = i, r.ryw__loading = !1,
                        t.destroy(), null != e && e(!1);
                });
            }
        }
    }
    class ve {
        static ryw_init() {
            if (ve.ryw__inited) return;
            let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxWuDianBanners;
            for (let t = 0; t < e.length; ++t) ve.ryw__bannerIds.push(e[t]);
            for (let t = 0; t < ve.ryw__bannerIds.length; ++t) {
                ve.ryw__bannerIds[t];
                ve.ryw__bannerIds[t] = e[Math.floor(Math.random() * e.length)];
            }
            ve.ryw__createBannerAd();
            let t = 1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerCreateFailNum;
            Laya.timer.loop(t, ve, () => {
                ve.ryw__checkBannerAd(), ve.ryw__createBannerAd();
            }), ve.ryw__inited = !0;
        }
        static ryw_getBanner(e) {
            let t = [], r = [];
            for (let e = 0; e < ve.ryw__banners.length; ++e) {
                let i = ve.ryw__banners[e];
                i.ryw_Destroyed || (i.ryw_isReady ? t.push(i) : r.push(i));
            }
            ve.ryw__curBannerGetIndex >= t.length && (ve.ryw__curBannerGetIndex = 0);
            let i = t[ve.ryw__curBannerGetIndex];
            ++ve.ryw__curBannerGetIndex, null != i ? e(i) : (null == (i = ve.ryw__createBannerAd()) && (i = ve.ryw__banners[Math.floor(Math.random() * ve.ryw__banners.length)]),
                null == i ? e(null) : i.ryw_retry(t => {
                    e(t ? i : null);
                }));
        }
        static ryw__createBannerAd() {
            if (ve.ryw__curBannerCreateIndex >= ve.ryw__bannerIds.length) return null;
            let e = new Se(ve.ryw__bannerIds[ve.ryw__curBannerCreateIndex]);
            return ve.ryw__banners.push(e), e.ryw_retry(), ++ve.ryw__curBannerCreateIndex, e;
        }
        static ryw__checkBannerAd() {
            let e = [], t = [];
            for (let r = 0; r < ve.ryw__banners.length; ++r) {
                let i = ve.ryw__banners[r];
                i.ryw_Destroyed || (i.ryw_isReady ? e.push(i) : t.push(i));
            }
            for (let t = 0; t < ve.ryw__banners.length; ++t) {
                let r = ve.ryw__banners[t], i = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerShowTime;
                r.ryw_isReady ? e.length >= 2 && r.ryw_BannerTotalShowTime >= 1e3 * i && (console.log("BannerAd 展示时间超过限制，销毁 : ", r.ryw_Id),
                    r.ryw_destroy()) : r.ryw_RetryCount >= Se.ryw_MAX_RETRY_COUNT ? (console.log("BannerAd 超过重试次数，销毁 : ", r.ryw_Id),
                        r.ryw_destroy()) : r.ryw_retry();
            }
        }
        static ryw_getBoxAd(e) {
            if (ve.ryw__wxGridAd.ryw_isReady) e(ve.ryw__wxGridAd); else {
                let t = ve.ryw__wxGridAd;
                t.ryw_retry(r => {
                    e(r ? t : null);
                });
            }
        }
        static ryw__createGirdAd() {
            if (null != ve.ryw__wxGridAd) return;
            let e = new Le("");
            e.ryw_retry(), ve.ryw__wxGridAd = e;
        }
    }
    ve.ryw__inited = !1, ve.ryw__bannerIds = new Array(), ve.ryw__banners = new Array(),
        ve.ryw__curBannerCreateIndex = 0, ve.ryw__curBannerGetIndex = 0, ve.ryw__wxGridAd = null;
    class Ce extends F {
        constructor() {
            super(...arguments), this.ryw__historyBtn = null, this.ryw__topZone = null;
        }
        get ryw_HistoryBtn() {
            return null == this.ryw__historyBtn && (this.ryw__historyBtn = this.ryw_TopZone.getChildByName("HistoryBtn")),
                this.ryw__historyBtn;
        }
        get ryw_TopZone() {
            return null == this.ryw__topZone && (this.ryw__topZone = this.ryw_View.getChildByName("TopZone")),
                this.ryw__topZone;
        }
        onAwake() { }
        ryw_addEvent() {
            super.ryw_addEvent(), i.ryw_instance.ryw_regEvemt(t.ryw_App_OnUpdateIpBlockState, this, this.onUpdateIpBlockState);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), i.ryw_instance.ryw_removeEvent(t.ryw_App_OnUpdateIpBlockState, this, this.onUpdateIpBlockState);
        }
        ryw_onHistoryBtn() {
            let e = this;
            R.ryw_instance.ryw_openView(w.ryw_MiniGameView, null, t => {
                e.ryw_hide(), t.ryw_onCloseEvent = (() => {
                    null == e.ryw_View || e.ryw_View.destroyed || e.ryw_show();
                });
            });
        }
        get isShowHistoryBtn() {
            let e;
            Laya.Browser.onMiniGame ? e = E.ryw_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (e = x.ryw_getLaunchOptionsSync().scene);
            let t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
            for (let i = 0; i < r.length; ++i) {
                e == r[i] && (t = !1);
            }
            return !(Laya.Browser.onQGMiniGame || !t || !N.ryw_GetIpBlocked() || 0 == D.ryw_getInstance().ryw_getAppSwitchData().fakeBtn);
        }
        onUpdateIpBlockState(e) { }
    }
    class Ae extends Ce {
        onAwake() { }
        ryw_addEvent() {
            super.ryw_addEvent();
        }
        ryw_removeEvent() {
            super.ryw_removeEvent();
        }
        ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array(), n = [];
            for (; r.length > 0;) {
                let e = !0;
                for (let a = 0; a < r.length; ++a) {
                    let s = r[a], o = !0;
                    for (let e = 0; e < n.length; ++e) {
                        if (n[e] == s) {
                            o = !1;
                            break;
                        }
                    }
                    if (o) {
                        e = !1;
                        let o = t[s].shift();
                        if (i.push(o), n.push(s), n.length > 3 && n.shift(), t[s].length <= 0) {
                            r.splice(a, 1), --a;
                            continue;
                        }
                    }
                }
                if (e) {
                    for (let e = 0; e < r.length; ++e) {
                        let a = r[e], s = !0, o = t[a];
                        n.splice(0);
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            for (let e = 0; e < i.length; ++e) {
                                n.push(null == i[e - 2] ? null : i[e - 2].appid), n.push(null == i[e - 1] ? null : i[e - 1].appid),
                                    n.push(null == i[e] ? null : i[e].appid), n.push(null == i[e + 1] ? null : i[e + 1].appid),
                                    n.push(null == i[e + 2] ? null : i[e + 2].appid);
                                for (let e = 0; e < n.length; ++e) {
                                    let t = n[e];
                                    if (null != t && t == a) {
                                        s = !1;
                                        break;
                                    }
                                }
                                if (s && null != t) {
                                    let r = i.slice(0, e + 1), n = i.slice(e + 1, i.length);
                                    (i = r).push(t);
                                    for (let e = 0; e < n.length; ++e) i.push(n[e]);
                                }
                            }
                        }
                    }
                    break;
                }
                for (let e = 0; e < r.length; ++e) {
                    let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                    r[i] = t, r[e] = n;
                }
            }
            return i;
        }
    }
    class ke extends Ae {
        constructor() {
            super(...arguments), this.ryw__continueBtn = null, this.ryw__krqVLoopAd = null,
                this.ryw__KRQ_VLoopAd = null, this._isCanClose = !1, this._banner = null, this.isWuDian = !1,
                this.handAni = null, this.template = null;
        }
        onAwake() {
            super.onAwake(), this.ryw__krqVLoopAd = this.ryw_View.getChildByName("KRQ_VLoopAd").getComponent(Be),
                this.ryw__krqVLoopAd.ryw_useLocalRandom = !0, this.ryw__krqVLoopAd.ryw_useRandom = !1,
                this.ryw__krqVLoopAd.ryw_useMovePause = !1, this.ryw__krqVLoopAd.ryw_sortDatas = this.ryw_sortDatas,
                this.ryw__continueBtn = this.ryw_View.getChildByName("ContinueBtn");
            let e = this, t = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner;
            N.ryw_WudianFlag || t || (e._isCanClose = !0), this.ryw__KRQ_VLoopAd = this.ryw_View.getChildByName("KRQ_VLoopAd"),
                O.ryw_isIphoneX() && (this.ryw__KRQ_VLoopAd.top = this.ryw__KRQ_VLoopAd.top + 75);
        }
        onStart() {
            this.ryw__krqVLoopAd.ryw_AdPosID = ge.ryw_MoreGameLocationID, super.onStart();
        }
        setRedTip() {
            let e = this;
            e.ryw__krqVLoopAd.setRedState(), Laya.timer.loop(2e3, e, () => {
                e.ryw__krqVLoopAd.setRedState();
            });
        }
        ryw_openView(e) {
            super.ryw_openView(e);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__continueBtn.on(Laya.Event.CLICK, this, this.ryw_onContinueBtn),
                i.ryw_instance.ryw_regEvemt(t.ryw_AD_OnShareAdFail, this, this.onShareAdFail);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__continueBtn.off(Laya.Event.CLICK, this, this.ryw_onContinueBtn),
                i.ryw_instance.ryw_removeEvent(t.ryw_AD_OnShareAdFail, this, this.onShareAdFail);
        }
        onShareAdFail() { }
        hideBanner() {
            let e = this;
            null != e._banner && e._banner.ryw_hide(), e._banner = null;
        }
        ShowBanner() {
            let e = this;
            ve.ryw_getBanner(t => {
                null != e._banner && e._banner.ryw_hide(), e._banner = t, null != e._banner ? e._banner.ryw_show() : this._isCanClose = !0;
            });
        }
        onDestroy() {
            null != this._banner && this._banner.ryw_hide(), this._banner = null;
        }
        ryw_onContinueBtn() {
            if (this.setWuDian(), !this._isCanClose) return;
            let e = this, t = () => {
                R.ryw_instance.ryw_openView(w.WXExport), e.ryw_closeView();
            };
            R.ryw_instance.tryShowPopAd(e => {
                null != e ? e.ryw_onCloseEvent = (() => {
                    t();
                }) : t();
            });
        }
        setWuDian() {
            if (this.isWuDian) return;
            this.isWuDian = !0;
            let e = this, t = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner, r = 1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, i = 1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime;
            N.ryw_WudianFlag && t ? Laya.timer.once(r, e, () => {
                e.ShowBanner(), Laya.timer.once(i, e, () => {
                    e._isCanClose = !0, null != e._banner && e._banner.ryw_hide(), e._banner = null;
                });
            }) : (e.ryw__continueBtn.visible = !0, e._isCanClose = !0);
        }
        ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array(), n = [];
            for (; r.length > 0;) {
                let e = !0;
                for (let a = 0; a < r.length; ++a) {
                    let s = r[a], o = !0;
                    for (let e = 0; e < n.length; ++e) {
                        if (n[e] == s) {
                            o = !1;
                            break;
                        }
                    }
                    if (o) {
                        e = !1;
                        let o = t[s].shift();
                        if (i.push(o), n.push(s), n.length > 3 && n.shift(), t[s].length <= 0) {
                            r.splice(a, 1), --a;
                            continue;
                        }
                    }
                }
                if (e) {
                    for (let e = 0; e < r.length; ++e) {
                        let a = r[e], s = !0, o = t[a];
                        n.splice(0);
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            for (let e = 0; e < i.length; ++e) {
                                n.push(null == i[e - 2] ? null : i[e - 2].appid), n.push(null == i[e - 1] ? null : i[e - 1].appid),
                                    n.push(null == i[e] ? null : i[e].appid), n.push(null == i[e + 1] ? null : i[e + 1].appid),
                                    n.push(null == i[e + 2] ? null : i[e + 2].appid);
                                for (let e = 0; e < n.length; ++e) {
                                    let t = n[e];
                                    if (null != t && t == a) {
                                        s = !1;
                                        break;
                                    }
                                }
                                if (s && null != t) {
                                    let r = i.slice(0, e + 1), n = i.slice(e + 1, i.length);
                                    (i = r).push(t);
                                    for (let e = 0; e < n.length; ++e) i.push(n[e]);
                                }
                            }
                        }
                    }
                    break;
                }
                for (let e = 0; e < r.length; ++e) {
                    let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                    r[i] = t, r[e] = n;
                }
            }
            return i;
        }
    }
    class Te extends Ae {
        constructor() {
            super(...arguments), this.ryw__continueBtn = null, this.ryw__krqVLoopAd = null,
                this.ryw__KRQ_VLoopAd = null, this._isCanClose = !1, this._banner = null, this.isNormalOpen = !1,
                this.isWuDian = !1, this.handAni = null, this.template = null, this.isFailEnter = !1;
        }
        onAwake() {
            super.onAwake(), this.ryw__krqVLoopAd = this.ryw_View.getChildByName("KRQ_VLoopAd").getComponent(fe),
                this.ryw__krqVLoopAd.ryw_useLocalRandom = !0, this.ryw__krqVLoopAd.ryw_useRandom = !0,
                this.ryw__krqVLoopAd.ryw_useMovePause = !1, this.ryw__krqVLoopAd.ryw_sortDatas = this.ryw_sortDatas,
                this.ryw__continueBtn = this.ryw_View.getChildByName("ContinueBtn");
            let e = this, t = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner;
            N.ryw_WudianFlag || t || (e._isCanClose = !0), this.ryw__KRQ_VLoopAd = this.ryw_View.getChildByName("KRQ_VLoopAd"),
                O.ryw_isIphoneX() && (this.ryw__KRQ_VLoopAd.top = this.ryw__KRQ_VLoopAd.top + 75);
        }
        onStart() {
            this.ryw__krqVLoopAd.ryw_AdPosID = ge.ryw_MoreGameLocationID, super.onStart(), Laya.timer.loop(1e4, this, () => {
                this.ryw__krqVLoopAd.ryw_refresh();
            }), Laya.timer.once(300, this, () => {
                this.setRedTip();
            });
        }
        setRedTip() {
            let e = this;
            e.ryw__krqVLoopAd.setRedState(), Laya.timer.loop(2e3, e, () => {
                e.ryw__krqVLoopAd.setRedState();
            });
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.isFailEnter = !1, "FailEnter" == e && (this.isFailEnter = !0);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__continueBtn.on(Laya.Event.CLICK, this, this.ryw_onContinueBtn);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__continueBtn.off(Laya.Event.CLICK, this, this.ryw_onContinueBtn);
        }
        ShowBanner() {
            let e = this;
            ve.ryw_getBanner(t => {
                null != e._banner && e._banner.ryw_hide(), e._banner = t, null != e._banner ? e._banner.ryw_show() : this._isCanClose = !0,
                    this.isShowHistoryBtn && (e.ryw_HistoryBtn.visible = !0);
            });
        }
        onDestroy() {
            null != this._banner && this._banner.ryw_hide(), this._banner = null;
        }
        ryw_onContinueBtn() {
            if (this.setWuDian(), !this._isCanClose) return;
            console.log("当前导出页打开方式this.isFailEnter：", this.isFailEnter), this.isFailEnter ? (R.ryw_instance.ryw_openView(w.WXExport2),
                R.ryw_instance.ryw_closeView(w.WXExport)) : (ne.Getinstance().LoadGame(() => {
                    R.ryw_instance.ryw_openView(w.ryw_MainView);
                }), R.ryw_instance.ryw_closeView(w.WXExport));
        }
        setWuDian() {
            if (this.isWuDian) return;
            this.isWuDian = !0;
            let e = this, t = 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner, r = (D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBtnDelayTime,
                1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime), i = 1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime;
            N.ryw_WudianFlag && t ? Laya.timer.once(r, e, () => {
                e.ShowBanner(), Laya.timer.once(i, e, () => {
                    e._isCanClose = !0, null != e._banner && e._banner.ryw_hide(), e._banner = null;
                });
            }) : (e.ryw__continueBtn.visible = !0, e._isCanClose = !0);
        }
        ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array(), n = [];
            for (; r.length > 0;) {
                let e = !0;
                for (let a = 0; a < r.length; ++a) {
                    let s = r[a], o = !0;
                    for (let e = 0; e < n.length; ++e) {
                        if (n[e] == s) {
                            o = !1;
                            break;
                        }
                    }
                    if (o) {
                        e = !1;
                        let o = t[s].shift();
                        if (i.push(o), n.push(s), n.length > 3 && n.shift(), t[s].length <= 0) {
                            r.splice(a, 1), --a;
                            continue;
                        }
                    }
                }
                if (e) {
                    for (let e = 0; e < r.length; ++e) {
                        let a = r[e], s = !0, o = t[a];
                        n.splice(0);
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            for (let e = 0; e < i.length; ++e) {
                                n.push(null == i[e - 2] ? null : i[e - 2].appid), n.push(null == i[e - 1] ? null : i[e - 1].appid),
                                    n.push(null == i[e] ? null : i[e].appid), n.push(null == i[e + 1] ? null : i[e + 1].appid),
                                    n.push(null == i[e + 2] ? null : i[e + 2].appid);
                                for (let e = 0; e < n.length; ++e) {
                                    let t = n[e];
                                    if (null != t && t == a) {
                                        s = !1;
                                        break;
                                    }
                                }
                                if (s && null != t) {
                                    let r = i.slice(0, e + 1), n = i.slice(e + 1, i.length);
                                    (i = r).push(t);
                                    for (let e = 0; e < n.length; ++e) i.push(n[e]);
                                }
                            }
                        }
                    }
                    break;
                }
                for (let e = 0; e < r.length; ++e) {
                    let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                    r[i] = t, r[e] = n;
                }
            }
            return i;
        }
    }
    class Ie extends Laya.Script {
        constructor() {
            super(), this.ryw_useSound = !0, this.srcScaleX = 1, this.srcScaleY = 1, this.dstScaleX = 1,
                this.dstScaleY = 1;
        }
        onAwake() {
            let e = this.owner;
            e.scaleX && (this.srcScaleX = e.scaleX), e.scaleY && (this.srcScaleY = e.scaleY),
                this.dstScaleX = this.srcScaleX - .1, this.dstScaleY = this.srcScaleY - .1, this.owner.on(Laya.Event.MOUSE_DOWN, this, this.ryw_onDown),
                this.owner.on(Laya.Event.MOUSE_UP, this, this.ryw_onUp), this.owner.on(Laya.Event.MOUSE_OUT, this, this.ryw_onUp);
        }
        onDisable() {
            this.owner.offAll(), Laya.Tween.clearAll(this);
        }
        ryw_onDown() {
            Laya.Tween.to(this.owner, {
                scaleX: this.dstScaleX,
                scaleY: this.dstScaleY
            }, 50), this.ryw_useSound && U.ryw_instance.ryw_playSound("anniu");
        }
        ryw_onUp() {
            Laya.Tween.to(this.owner, {
                scaleX: this.srcScaleX,
                scaleY: this.srcScaleY
            }, 50);
        }
    }
    class Ve extends Laya.Script {
        constructor() {
            super(...arguments), this.ryw__aniSprites = [], this.ryw__aniSpriteOriginPos = [];
        }
        onAwake() {
            for (let e = 0; e < this.owner.numChildren; ++e) {
                let t = this.owner.getChildAt(e);
                t.alpha = 0, this.ryw__aniSprites.push(t), this.ryw__aniSpriteOriginPos.push(new Laya.Point(t.x, t.y));
            }
        }
        ryw_playAni() {
            if (B.showLoadingLogo) for (let e = 0; e < this.ryw__aniSprites.length; ++e) this.ryw__aniSprites[e].visible = !1; else for (let e = 0; e < this.ryw__aniSprites.length; ++e) {
                let t = e == this.ryw__aniSprites.length - 1, r = this.ryw__aniSprites[e], i = this.ryw__aniSpriteOriginPos[e];
                r.alpha = 0, r.y += i.y + 50;
                let n = this;
                Laya.Tween.to(r, {
                    y: i.y,
                    alpha: 1
                }, 450, Laya.Ease.elasticOut, Laya.Handler.create(this, () => {
                    t && Laya.timer.once(300, n, () => {
                        n.ryw_playAni();
                    });
                }), 80 * e);
            }
        }
    }
    class be extends F {//loading
        constructor() {
            super(...arguments), this.ryw__processWidth = 0;
        }
        onAwake() {
            this.ryw__bg = this.owner.getChildByName("Bg"), this.ryw__bottomZone = this.ryw__bg.getChildByName("BottomZone"),
                this.ryw__processBarBg = this.ryw__bottomZone.getChildByName("processBarBg"), this.ryw__processBar = this.ryw__processBarBg.getChildByName("processBar"),
                this.ryw__processWidth = this.ryw__processBar.width,
                this.ryw__singleGame = this.ryw__bottomZone.getChildByName("singleGame"), this.ryw_SingleGame(!1);
            this.owner.zOrder = 20;
        }
        ryw_SingleGame(e) {
            this.ryw__singleGame.active = e;
        }
        onStart() { }
        onEnable() {
            super.onEnable();
        }
        ryw_addEvent() {
            super.ryw_addEvent();
        }
        ryw_removeEvent() {
            super.ryw_removeEvent();
        }
        onUpdate() {
            this.ryw__bg.width = Laya.stage.width, this.ryw__bg.height = Laya.stage.height;
        }
        ryw_setProcess(e) {
            e < 0 && (e = 0), e > 1 && (e = 1);
            var t = this.ryw__processWidth * e;
            t < 1 && (t = 1), this.ryw__processBar.width = t;
        }
    }
    class De extends F {
        onAwake() {
            super.onAwake(), this.ryw_Alert = this.owner.getChildByName("BackGround").getChildByName("Alert"),
                this.ryw_FailLogin = this.ryw_Alert.getChildByName("FailLogin"), this.ryw_ServerMsg = this.ryw_Alert.getChildByName("ServerMsg"),
                this.ryw_RestartLogin = this.ryw_Alert.getChildByName("RestartLogin"), this.ryw_Line = this.ryw_Alert.getChildByName("MiddleLine"),
                this.setMode(), this.ryw_Alert.scale(0, 0);
        }
        ryw_openView(e = {}) {
            super.ryw_openView(e);
            let t = "";
            console.log("ryw_openView", JSON.stringify(e)), t = e.msg ? e.msg : "你的网络开小差了，请重新登录！",
                this.ryw_ServerMsg.text = t;
        }
        setMode() {
            Laya.Browser.onAndroid ? (this.ryw_FailLogin.visible = !1, this.ryw_Line.visible = !1,
                this.ryw_RestartLogin.x = this.ryw_FailLogin.x + this.ryw_RestartLogin.width / 2) : (this.ryw_FailLogin.visible = !0,
                    this.ryw_Line.visible = !0, this.ryw_RestartLogin.x = this.ryw_FailLogin.x + this.ryw_RestartLogin.width);
        }
        onStart() {
            this.openAni();
        }
        openAni() {
            Laya.Tween.to(this.ryw_Alert, {
                scaleX: 1,
                scaleY: 1
            }, 250, Laya.Ease.linearIn);
        }
        closeAni(e) {
            Laya.Tween.to(this.ryw_Alert, {
                scaleX: 0,
                scaleY: 0
            }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, e));
        }
        ryw_addEvent() {
            this.ryw_FailLogin.on(Laya.Event.CLICK, this, this.ryw_loginFail), this.ryw_RestartLogin.on(Laya.Event.CLICK, this, this.ryw_loginRestart);
        }
        ryw_removeEvent() {
            this.ryw_FailLogin.off(Laya.Event.CLICK, this, this.ryw_loginFail), this.ryw_RestartLogin.off(Laya.Event.CLICK, this, this.ryw_loginRestart);
        }
        ryw_loginFail() {
            console.log("Fail"), this.closeAni(() => {
                this.ryw_closeView(), i.ryw_instance.ryw_dispatch(t.ryw_Login_Msg, {
                    msg: -1
                });
            });
        }
        ryw_loginRestart() {
            console.log("Restart"), this.closeAni(() => {
                this.ryw_closeView(), i.ryw_instance.ryw_dispatch(t.ryw_Login_Msg, {
                    msg: 0
                });
            });
        }
    }
    class Ee extends ue {
        constructor() {
            super(...arguments), this.ryw__originW = 170, this.ryw__originH = 170;
        }
        onAwake() {
            this.ryw__displaySp = this.owner.getChildByName("Display"), this.ryw__originW = this.ryw__displaySp.width,
                this.ryw__originH = this.ryw__displaySp.height, this.ryw__disText = this.owner.getChildByName("TitelText"),
                this.ryw__disText.overflow = Laya.Text.SCROLL, this.ryw__disText.text = "";
        }
        onStart() {
            this.ryw_autoScrollText(this.ryw__disText);
        }
        onEnable() {
            this.ryw_Sprite.on(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onDisable() {
            this.ryw_Sprite.off(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        ryw_onClickAd() {
            this.ryw_navigateToMiniProgram();
        }
        ryw_setData(e) {
            if (this.ryw__data = e, null != this.ryw__data) {
                let e = this;
                this.ryw__displaySp.loadImage(this.ryw__data.logo, Laya.Handler.create(this, function () {
                    e.ryw__displaySp.destroyed || (e.ryw__displaySp.width = e.ryw__originW, e.ryw__displaySp.height = e.ryw__originH);
                }));
                let t = String(this.ryw__data.title);
                this.ryw__disText.text = t;
            }
        }
    }
    class xe extends ue {
        constructor() {
            super(...arguments), this.ryw_isEnable = !0, this.ryw_useMovePause = !0, this.ryw_useLocalRandom = !0,
                this.ryw_useRandom = !1, this.ryw_sortDatas = null, this.ryw__scrollForward = !0,
                this.ryw__cellSize = new Laya.Point();
        }
        get ryw_Clip() {
            return this.owner;
        }
        onAwake() {
            this.ryw_AdPosID = ge.ryw_LoopAdLocationID, this.ryw__list = this.owner.getChildByName("List"),
                this.ryw__list.renderHandler = Laya.Handler.create(this, this.ryw_onListRender, null, !1),
                this.ryw__list.hScrollBarSkin = "";
        }
        onStart() {
            let e = this;
            this.ryw__list.width = e.ryw_Clip.width, this.ryw__list.height = e.ryw_Clip.height,
                e.ryw_refresh(() => {
                    if (null != e.ryw__list.cells && e.ryw__list.cells.length > 0) {
                        let t = e.ryw__list.cells[0];
                        e.ryw__cellSize.x = t.width, e.ryw__cellSize.y = t.height, e.ryw_useMovePause && setTimeout(() => {
                            e.ryw__list.scrollBar && (e.ryw__list.scrollBar.value = 0, e.ryw_move());
                        }, 2e3);
                    }
                });
        }
        ryw_refresh(e) {
            if (!this.ryw_isEnable) return void (null != e && e());
            let t = this;
            ge.ryw_getADVs(this.ryw_AdPosID, r => {
                console.log(this.ryw_AdPosID, "拿到的广告：", r), null != r && r.length > 0 ? (t.ryw__datas = r,
                    t.ryw__list.array = t.ryw__datas, null == t.ryw_Sprite || t.ryw_Sprite.destroyed || (t.ryw_Sprite.visible = !0),
                    null != e && e()) : null == t.ryw_Sprite || t.ryw_Sprite.destroyed || (t.ryw_Sprite.visible = !1);
            }, this.ryw_useRandom, this.ryw_useLocalRandom, this.ryw_sortDatas);
        }
        ryw_onListRender(e, t) {
            var r = this.ryw__list.array[t];
            e.getComponent(Ee).ryw_setData(r);
        }
        ryw_move() {
            let e = this.ryw__cellSize.x + this.ryw__list.spaceX, t = 0;
            if (this.ryw__scrollForward ? t = this.ryw__list.scrollBar.value % e : (e *= -1,
                t = (this.ryw__list.scrollBar.max - this.ryw__list.scrollBar.value) % e * -1), this.ryw__list.scrollBar) {
                this.ryw__list.scrollBar.stopScroll();
                let r = e;
                0 != t && (r = 2 * e - t);
                let i = this;
                Laya.Tween.to(i.ryw__list.scrollBar, {
                    value: i.ryw__list.scrollBar.value + r
                }, 1e3, null, Laya.Handler.create(i, () => { })), Laya.timer.once(1010, i, () => {
                    i.ryw__list.scrollBar.value >= i.ryw__list.scrollBar.max ? i.ryw__scrollForward = !1 : i.ryw__list.scrollBar.value <= 0 && (i.ryw__scrollForward = !0),
                        Laya.timer.once(3e3, i, () => {
                            i.ryw__list.scrollBar && i.ryw_move();
                        });
                });
            }
        }
        onUpdate() {
            this.ryw_useMovePause || (this.ryw__scrollForward ? (this.ryw__list.scrollBar.value += 100 * Laya.timer.delta / 1e3,
                this.ryw__list.scrollBar.value >= this.ryw__list.scrollBar.max && (this.ryw__scrollForward = !1)) : (this.ryw__list.scrollBar.value -= 100 * Laya.timer.delta / 1e3,
                    this.ryw__list.scrollBar.value <= 0 && (this.ryw__scrollForward = !0)));
        }
    }
    class Me extends ue {
        constructor() {
            super(...arguments), this.ryw__wxBanner = null, this.ryw__onLoad = null, this.ryw__onError = null,
                this.ryw__onResize = null, this.ryw__isCreating = !1, this.ryw__isDestroyed = !1,
                this.ryw__isHide = !1;
        }
        get ryw_Clip() {
            return this.owner;
        }
        onAwake() {
            this.ryw_AdPosID = ge.ryw_BannerAdLocationID;
        }
        onStart() {
            this.ryw_refresh();
        }
        onEnable() {
            this.ryw_Sprite.on(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onDisable() {
            this.ryw_Sprite.off(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        ryw_onClickAd() {
            this.ryw_navigateToMiniProgram();
        }
        ryw_refresh(e) {
            if (this.ryw__isDestroyed) return;
            if (1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_banner) {
                if (this.ryw_refreshWXBanner(), Laya.Browser.onQQMiniGame && N.ryw_GetIpBlocked()) {
                    let e = x.ryw_getLaunchOptionsSync().scene, t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
                    for (let i = 0; i < r.length; ++i) {
                        e == r[i] && (t = !1);
                    }
                    if (t) {
                        let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerRecreateTime;
                        Laya.timer.loop(1e3 * e, this, this.ryw_refreshWXBanner);
                    }
                }
            } else if (this.ryw_refreshBanner(), Laya.Browser.onQQMiniGame && N.ryw_GetIpBlocked()) {
                let e = x.ryw_getLaunchOptionsSync().scene, t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
                for (let i = 0; i < r.length; ++i) {
                    e == r[i] && (t = !1);
                }
                if (t) {
                    let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerRecreateTime;
                    Laya.timer.loop(1e3 * e, this, this.ryw_refreshWXBanner);
                }
            }
        }
        ryw_refreshBanner() {
            null != this.ryw_Sprite && this.ryw_Sprite.visible && (this.ryw__isCreating || this.ryw__isDestroyed || (this.ryw__isCreating = !0,
                super.ryw_refresh(() => {
                    if (null != this.ryw__data) {
                        let e = this;
                        this.ryw_Sprite.loadImage(this.ryw__data.logo, Laya.Handler.create(this, function () {
                            null == e.ryw_Sprite || e.ryw_Sprite.destroyed || (e.ryw_Sprite.width = 600, e.ryw_Sprite.height = 205);
                        }));
                    }
                    this.ryw__isCreating = !1;
                })));
        }
        ryw_refreshWXBanner() {
            if (!Laya.Browser.onMiniGame && !Laya.Browser.onQQMiniGame || null == this.ryw_Sprite || this.ryw_Sprite.destroyed || !this.ryw_Sprite.visible) return Laya.timer.clearAll(this),
                void this.ryw_clearWXBaner();
            if (this.ryw__isCreating || this.ryw__isDestroyed || this.ryw__isHide) return;
            this.ryw_clearWXBaner();
            let e = this, t = null;
            Laya.Browser.onMiniGame ? t = Laya.Browser.window.wx.getSystemInfoSync() : Laya.Browser.onQQMiniGame && (t = Laya.Browser.window.qq.getSystemInfoSync());
            let r = t.screenWidth, i = t.screenHeight, n = this.ryw_Sprite.localToGlobal(new Laya.Point(0, 0)), a = (r * (e.ryw_Sprite.width / Laya.stage.width) - 300) / 2, s = n.x / Laya.stage.width * r + a, o = n.y / Laya.stage.height * i;
            if (Laya.Browser.onMiniGame) {
                e.ryw__isCreating = !0;
                let t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_recreateBannerIDList, r = t[Math.floor(Math.random() * t.length)];
                null == r && (r = E.ryw_bannerAdUnitId), this.ryw__wxBanner = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: r,
                    adIntervals: 30,
                    style: {
                        left: s,
                        top: o,
                        width: 300
                    }
                }), null != e.ryw__wxBanner ? (e.ryw__wxBanner.onLoad(t => {
                    console.log("KRQ  WXBanner广告 加载完成 : ", r), console.log(t), e.ryw__isCreating = !1,
                        e.ryw__isDestroyed || null == e.ryw__wxBanner || e.ryw__isHide ? e.ryw_clearWXBaner() : e.ryw__wxBanner.show();
                }), e.ryw__wxBanner.onError(t => {
                    console.log("KRQ WXBanner广告 加载失败 : ", r), console.log(t), e.ryw__isCreating = !1,
                        e.ryw_clearWXBaner(), e.ryw__isDestroyed || e.ryw__isHide || e.ryw_refreshBanner();
                }), e.ryw__wxBanner.onResize(e => { })) : e.ryw_refreshBanner();
            } else if (Laya.Browser.onQQMiniGame) {
                e.ryw__isCreating = !0;
                let t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_recreateBannerIDList, r = t[Math.floor(Math.random() * t.length)];
                null == r && (r = x.ryw_bannerAdUnitId), e.ryw__wxBanner = Laya.Browser.window.qq.createBannerAd({
                    adUnitId: r,
                    adIntervals: 30,
                    style: {
                        left: s,
                        top: o,
                        width: 300
                    }
                }), null != e.ryw__wxBanner ? (e.ryw__onLoad = (t => {
                    console.log("KRQ QQBanner广告 加载完成 : ", r), console.log(t), e.ryw__isCreating = !1,
                        e.ryw__isDestroyed || null == e.ryw__wxBanner || e.ryw__isHide ? e.ryw_clearWXBaner() : e.ryw__wxBanner.show();
                }), e.ryw__wxBanner.onLoad(e.ryw__onLoad), e.ryw__onError = (t => {
                    console.log("KRQ QQBanner广告 加载失败 : ", r), console.log(t), e.ryw__isCreating = !1,
                        e.ryw_clearWXBaner(), e.ryw__isDestroyed || null == e.ryw__wxBanner || e.ryw__isHide || e.ryw_refreshBanner();
                }), e.ryw__wxBanner.onError(e.ryw__onError), e.ryw__onResize = (e => { }), e.ryw__wxBanner.onResize(e.ryw__onResize)) : e.ryw_refreshBanner();
            }
        }
        ryw_clearWXBaner() {
            this.ryw__wxBanner && (this.ryw__wxBanner.hide(), this.ryw__wxBanner.offLoad(this.ryw__onLoad),
                this.ryw__wxBanner.offError(this.ryw__onError), this.ryw__wxBanner.offResize(this.ryw__onResize),
                this.ryw__wxBanner.destroy()), this.ryw__wxBanner = null;
        }
        onViewShow() {
            if (this.ryw__isHide = !1, 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_banner) {
                if (null == this.ryw__wxBanner && (this.ryw_refreshWXBanner(), Laya.Browser.onQQMiniGame && N.ryw_GetIpBlocked())) {
                    let e = x.ryw_getLaunchOptionsSync().scene, t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
                    for (let i = 0; i < r.length; ++i) {
                        e == r[i] && (t = !1);
                    }
                    if (t) {
                        let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerRecreateTime;
                        Laya.timer.loop(1e3 * e, this, this.ryw_refreshWXBanner);
                    }
                }
            } else if (this.ryw_refreshBanner(), Laya.Browser.onQQMiniGame && N.ryw_GetIpBlocked()) {
                let e = x.ryw_getLaunchOptionsSync().scene, t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
                for (let i = 0; i < r.length; ++i) {
                    e == r[i] && (t = !1);
                }
                if (t) {
                    let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerRecreateTime;
                    Laya.timer.loop(1e3 * e, this, this.ryw_refreshWXBanner);
                }
            }
        }
        onViewHide() {
            this.ryw_clearWXBaner(), Laya.timer.clearAll(this), this.ryw__isHide = !0;
        }
        onDestroy() {
            this.ryw_clearWXBaner(), Laya.timer.clearAll(this), this.ryw__isDestroyed = !0;
        }
        ryw_show() {
            super.ryw_show(), this.onViewShow();
        }
        ryw_hide() {
            super.ryw_hide(), this.onViewHide();
        }
    }
    class Ne extends Me {
        ryw_refresh(e) {
            if (!this.ryw_needShow()) return this.ryw_Sprite.visible = !1, void (null != e && e());
            1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_banner ? this.ryw_refreshWXBanner() : super.ryw_refresh(() => {
                this.ryw_refreshBanner(), null != e && e();
            });
        }
        onViewShow() {
            this.ryw__isHide = !1, this.ryw_needShow() && super.onViewShow();
        }
        ryw_needShow() {
            let e = null;
            Laya.Browser.onMiniGame ? e = E.ryw_getLaunchOptionsSync().scene : Laya.Browser.onQQMiniGame && (e = x.ryw_getLaunchOptionsSync().scene);
            let t = !0, r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudianSceneList;
            for (let i = 0; i < r.length; ++i) {
                e == r[i] && (t = !1);
            }
            return N.ryw_GetIpBlocked() && t;
        }
    }
    class Re extends Laya.Script {
        constructor() {
            super(...arguments), this.ryw_onShow = null, this.ryw_onHide = null;
        }
        get ryw_Sprite() {
            return this.owner;
        }
        ryw_show() {
            this.ryw_Sprite.visible = !0, null != this.ryw_onShow && this.ryw_onShow();
        }
        ryw_hide() {
            this.ryw_Sprite.visible = !1, null != this.ryw_onHide && this.ryw_onHide();
        }
    }
    class Ge extends ue {
        constructor() {
            super(...arguments), this.ryw__icon = null, this.ryw__text = null, this.ryw__mark = null;
        }
        onAwake() {
            this.ryw__icon = this.ryw_Sprite.getChildByName("Icon"), this.ryw__text = this.ryw_Sprite.getChildByName("Text"),
                this.ryw__text.overflow = Laya.Text.SCROLL, this.ryw__text.text = "", this.ryw__mark = this.ryw_Sprite.getChildByName("Mark"),
                this.ryw__mark.visible = !1;
        }
        onStart() {
            this.ryw_autoScrollText(this.ryw__text);
        }
        onEnable() {
            this.ryw_Sprite.on(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onDisable() {
            this.ryw_Sprite.off(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        ryw_onClickAd() {
            this.ryw_navigateToMiniProgram();
        }
        ryw_setData(e, t) {
            if (this.ryw__data = e, null != this.ryw__data) {
                var r = this;
                this.ryw__icon.loadImage(this.ryw__data.logo, Laya.Handler.create(this, function () {
                    r.ryw__icon.destroyed || (r.ryw__icon.width = 100, r.ryw__icon.height = 100);
                }));
                var i = String(this.ryw__data.title);
                this.ryw__text.text = i, this.ryw__mark.visible = t;
            }
        }
    }
    class Oe extends ue {
        constructor() {
            super(...arguments), this.ryw_OnBackBtnClick = null, this.ryw__topZone = null, this.ryw__backBtn = null,
                this.ryw__startList = new Array();
        }
        onAwake() {
            this.ryw_AdPosID = ge.ryw_HistoryLocationID, this.ryw__topZone = this.ryw_Sprite.getChildByName("TopZone"),
                this.ryw__backBtn = this.ryw__topZone.getChildByName("BackBtn"), this.ryw__list = this.ryw_Sprite.getChildByName("List"),
                this.ryw__list.renderHandler = Laya.Handler.create(this, this.ryw_onListRender, null, !1),
                this.ryw__list.vScrollBarSkin = "";
        }
        onStart() {
            this.ryw_refresh();
        }
        onEnable() {
            this.ryw__backBtn.on(Laya.Event.CLICK, this, this.ryw_onBackBtn);
        }
        onDisable() {
            this.ryw__backBtn.off(Laya.Event.CLICK, this, this.ryw_onBackBtn);
        }
        ryw_refresh(e) {
            let t = this;
            ge.ryw_getADVs(this.ryw_AdPosID, e => {
                if (null != e) {
                    t.ryw__datas = e, t.ryw__startList.splice(0);
                    for (let e = 0; e < t.ryw__datas.length; ++e) t.ryw__startList.push(!1);
                    let r = Math.floor(.33 * t.ryw__startList.length);
                    for (; r > 0;) {
                        let e = Math.floor(Math.random() * t.ryw__startList.length);
                        0 == t.ryw__startList[e] && (t.ryw__startList[e] = !0, --r);
                    }
                    t.ryw__list.array = t.ryw__datas;
                }
            }, !1);
        }
        ryw_onListRender(e, t) {
            let r = this.ryw__list.array[t], i = this.ryw__startList[t];
            e.getComponent(Ge).ryw_setData(r, i);
        }
        ryw_onBackBtn() {
            this.ryw_hide(), null != this.ryw_OnBackBtnClick && this.ryw_OnBackBtnClick();
        }
        ryw_show() {
            super.ryw_show(), this.ryw_refresh();
        }
    }
    !function (e) {
        e[e.Normal = 0] = "Normal", e[e.NoLoopAd = 1] = "NoLoopAd", e[e.NoBannerAd = 2] = "NoBannerAd";
    }(Y || (Y = {}));
    class Fe extends Re {
        constructor() {
            super(...arguments), this.ryw__bottomZone = null, this.ryw__krqHistory = null;
        }
        onAwake() {
            this.ryw__krqHistory = this.ryw_Sprite.getChildByName("KRQ_History").getComponent(Oe);
            Laya.stage.width, Laya.stage.height;
            this.ryw__krqHistory.ryw_OnBackBtnClick = (() => { });
        }
        onEnable() { }
        onDisable() { }
    }
    !function (e) {
        e[e.Normal = 0] = "Normal", e[e.NoLoopAd = 1] = "NoLoopAd", e[e.NoBannerAd = 2] = "NoBannerAd";
    }(J || (J = {}));
    class He extends Ce {
        constructor() {
            super(...arguments), this.ryw__centerZone = null, this.ryw__krqMain = null;
        }
        onAwake() {
            super.onAwake(), this.ryw__centerZone = this.ryw_View.getChildByName("CenterZone"),
                this.ryw__krqMain = this.ryw_View.getChildByName("KRQ_Main").getComponent(Fe), Laya.stage.width / Laya.stage.height < .5 ? O.ryw_isIphoneX() && (this.ryw__centerZone.top = this.ryw__centerZone.top + 75) : (this.ryw__centerZone.top = this.ryw__centerZone.top - 200,
                    O.ryw_isIphoneX() && (this.ryw__centerZone.top = this.ryw__centerZone.top + 75));
        }
        ryw_openView(e) {
            if (super.ryw_openView(e), null != e && null != e.showType) {
                e.showType;
            }
        }
        onStart() {
            super.onStart();
        }
        ryw_addEvent() {
            super.ryw_addEvent();
        }
        ryw_removeEvent() {
            super.ryw_removeEvent();
        }
    }
    !function (e) {
        e[e.bgm = 0] = "bgm", e[e.dg = 1] = "dg", e[e.ex = 2] = "ex", e[e.tian = 3] = "tian",
            e[e.win = 4] = "win";
    }($ || ($ = {}));
    class Pe extends Ce {
        constructor() {
            super(...arguments), this.ryw_centerZone = null, this.ryw_mainZone = null, this.ryw_startBtn = null,
                this.ryw_AddZone = null, this.ryw_levelNum = null, this.ryw_moneyNum = null, this.singleBtn = null,
                this.doubleBtn = null, this.tiliBg = null, this.videoBtn = null, this.noThanks = null,
                this.addTiliBtn = null, this.videoTips = null, this.ryw_ading = !1, this.countDown = 0;
        }
        onAwake() {
            super.onAwake(), this.ryw_mainZone = this.ryw_View.getChildByName("MainZone"), this.ryw_AddZone = this.ryw_View.getChildByName("AddZone"),
                this.TiliNum = this.ryw_mainZone.getChildByName("TiliInfo").getChildByName("TiliNum"),
                this.time = this.ryw_mainZone.getChildByName("TiliInfo").getChildByName("time"),
                this.singleBtn = this.ryw_mainZone.getChildByName("singleBtn"),
                this.doubleBtn = this.ryw_mainZone.getChildByName("doubleBtn"),
                this.tiliBg = this.ryw_mainZone.getChildByName("tiliBg"),
                this.videoBtn = this.tiliBg.getChildByName("videoBtn"),
                this.noThanks = this.tiliBg.getChildByName("noThanks"),
                this.addTiliBtn = this.ryw_mainZone.getChildByName("TiliInfo").getChildByName("addTili"),
                this.ryw_AddZone.visible = !1, this.time.text = "", this.tiliBg.visible = !1,
                this.tiliBg.getChildByName("tili").getChildByName("tilizhi").text = "+ " + D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_addVitality,
                this.ryw_centerZone = this.ryw_View.getChildByName("CenterZone"),
                this.ryw_centerZone.visible = !1,
                this.ryw_startBtn = this.ryw_centerZone.getChildByName("StartBtn"),
                this.ryw_levelNum = this.ryw_centerZone.getChildByName("LevelInfo").getChildByName("LevelNum"),
                this.ryw_moneyNum = this.ryw_centerZone.getChildByName("money").getChildAt(0),
                this.videoTips = this.ryw_View.getChildByName("videoTips"),
                this.btn_music = this.ryw_mainZone.getChildByName("btn_music"),
                this.videoTips.visible = !1,
                this.ryw_moneyNum.value = n.ryw_getMoney() + "",
                U.ryw_instance.ryw_playBGM($[0]);
            this.btn_music.skin = window.WebAudioEngine.pause ? "myUI/btn_sound_off.png" : "myUI/btn_sound_on.png";
        }
        onStart() {
            super.onStart(),
                this.refreshPhysical();
            Laya.timer.loop(1e3, this, this.refreshPhysical),
                this.ryw_moneyNum.value = String(n.ryw_getMoney()),
                this.ryw_levelNum.value = String(n.ryw_getLeveNum()),
                this.TiliNum.text = String(n.ryw_getTili())
            // , we.ryw_instance.ryw_showHall({
            //     isShow: !0,
            //     SlideSkip: 1,
            //     ForceSkip: 0
            // });
        }
        ryw_addEvent() {
            super.ryw_addEvent(), Laya.timer.clearAll(this), this.ryw_startBtn.on(Laya.Event.CLICK, this, this.ryw_onStartBtn),
                this.singleBtn.on(Laya.Event.CLICK, this, this.onSingleBtn), this.doubleBtn.on(Laya.Event.CLICK, this, this.onDoubleBtn),
                this.videoBtn.on(Laya.Event.CLICK, this, this.onVideoBtn), this.noThanks.on(Laya.Event.CLICK, this, this.onNoThanks),
                this.addTiliBtn.on(Laya.Event.CLICK, this, this.onAddTiliBtn), i.ryw_instance.ryw_regEvemt(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
            this.btn_music.on(Laya.Event.CLICK, this, this.changeMusic);
        }
        onUpdate() {
            super.onUpdate();
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw_startBtn.off(Laya.Event.CLICK, this, this.ryw_onStartBtn),
                this.singleBtn.off(Laya.Event.CLICK, this, this.onSingleBtn), this.doubleBtn.off(Laya.Event.CLICK, this, this.onDoubleBtn),
                this.videoBtn.off(Laya.Event.CLICK, this, this.onVideoBtn), this.noThanks.off(Laya.Event.CLICK, this, this.onNoThanks),
                this.addTiliBtn.off(Laya.Event.CLICK, this, this.onAddTiliBtn), i.ryw_instance.ryw_removeEvent(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
            this.btn_music.off(Laya.Event.CLICK, this, this.changeMusic);
        }
        changeMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this.btn_music.skin = window.WebAudioEngine.pause ? "myUI/btn_sound_off.png" : "myUI/btn_sound_on.png";
            Laya.LocalStorage.setItem("Lick-em-all-musicState", JSON.stringify(window.WebAudioEngine.pause));
        }
        onSingleBtn() {
            platform.getInstance().showInterstitial(() => {
                n.ryw_getTili() > 0 ? this.choiceMode(1) : this.tiliBg.visible = !0;
            });

        }
        onDoubleBtn() {
            platform.getInstance().showInterstitial(() => {
                n.ryw_getTili() > 0 ? this.choiceMode(2) : this.tiliBg.visible = !0;
            });

        }
        choiceMode(e) {
            oe.ryw_instance.ryw_closeView(K.ryw_HallView), this.ryw_centerZone.visible = !0,
                this.ryw_mainZone.visible = !1, this.ryw_centerZone.getChildByName("LevelInfo").visible = 1 == e,
                n.ryw_subTili(1), i.ryw_instance.ryw_dispatch(t.Sub_Vitality), n.setGameMode(e),
                ne.Getinstance().choiceMode(e);
            let r = new Date().getTime();
            n.setLeaveMainUITime(r), this.ryw_onStartBtn();
        }
        ryw_onStartBtn() {
            this.StarGame();
        }
        StarGame() {
            ye.ryw_getInstance().ryw_saveGameData(),
                i.ryw_instance.ryw_dispatch(t.OnStarGame), R.ryw_instance.ryw_openView(w.GameView),
                ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, !0), R.ryw_instance.ryw_closeView(w.ryw_MainView);
        }
        ryw_onUserMoneyChange(e) {
            let t = e.curr;
            this.ryw_moneyNum.value = String(t);
        }
        onShareAdFail() { }
        onVideoBtn() {
            if (this.ryw_ading) return;
            U.ryw_instance.ryw_stopBGM(), this.ryw_ading = !0, Laya.timer.once(1000, this, () => {
                this && this.ryw_ading && (this.ryw_ading = !1);
            });
            let e = this;
            E.ryw_showRewardedVideoAd(t => {
                if (e.ryw_ading = !1, t) {
                    this.tiliBg.visible = !1;
                    let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_addVitality,
                        t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
                    n.ryw_addTili(e, t), ye.ryw_getInstance().ryw_saveGameData(), this.TiliNum.text = String(n.ryw_getTili());
                } else this.showVideoTips("未完整观看视频");
                //U.ryw_instance.ryw_playBGM("bgm");
            }, () => {
                e.ryw_ading = !1//, U.ryw_instance.ryw_playBGM("bgm");
            });
        }
        onNoThanks() {
            this.ryw_ading || (this.tiliBg.visible = !1);
        }
        onAddTiliBtn() {
            this.ryw_ading || (this.tiliBg.visible = !0);
        }
        showVideoTips(e) {
            Laya.timer.clearAll(this), this.videoTips.visible = !0, this.videoTips.getChildByName("str").text = e,
                Laya.timer.once(2500, this, () => {
                    this.videoTips.visible = !1;
                });
        }
        refreshPhysical() {
            // if (this.countDown = n.ryw_getTiLiTime(), this.countDown > 0) {
            //     let e = this.formatTime(this.countDown);
            //     this.time.text = e, Laya.timer.loop(1e3, this, this.updateTime);
            // } else this.time.text = "";
            let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
            let timerRes = ye.ryw_getInstance().timerRes
            if (n.ryw_getTili() < e) {
                let x = Date.now() - n.ryw_getTiLiTime();
                let til = Math.floor(x / 1000 / timerRes);
                if (til > 0) {
                    if (n.ryw_getTili() + til >= e) {
                        n.ryw_addTili(e - n.ryw_getTili(), e);
                        this.TiliNum.text = String(n.ryw_getTili());
                        this.time.text = "";
                    } else {
                        n.ryw_addTili(til, e);
                        n.ryw_setTiLiTime(n.ryw_getTiLiTime() + til * timerRes);
                        this.TiliNum.text = String(n.ryw_getTili());
                        let ee = this.formatTime(timerRes - x / 1000);
                        this.time.text = ee
                    }
                } else {
                    let ee = this.formatTime(timerRes - x / 1000);
                    this.time.text = ee;
                }
            } else {
                this.time.text = "";
            }
        }
        // updateTime() {
        //     if (this.countDown--, this.countDown > 0) {
        //         let e = this.formatTime(this.countDown);
        //         this.time.text = e;
        //     } else Laya.timer.clear(this, this.updateTime), this.time.text = "", this.refreshPhysical(),
        //         this.TiliNum.text = String(n.ryw_getTili());
        // }
        formatTime(e) {
            let t = "", r = e / 60, i = e - 60 * (r = parseInt(r + ""));
            return t += r > 9 ? r + ":" : "0" + r + ":", t += (i = parseInt(i + "")) > 9 ? i : "0" + i;
        }
    }
    class Ue extends Ce {
        constructor() {
            super(...arguments), this.ryw__centerZone = null, this.ryw__rewardBtn = null, this.ryw__skipBtn = null;
        }
        onAwake() {
            super.onAwake(), this.ryw__centerZone = this.ryw_View.getChildByName("CenterZone"),
                this.ryw__rewardBtn = this.ryw__centerZone.getChildByName("RewradBtn"), this.ryw__skipBtn = this.ryw__centerZone.getChildByName("SkipBtn");
        }
        onStart() {
            super.onStart();
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__rewardBtn.on(Laya.Event.CLICK, this, this.ryw_onRewardBtn),
                this.ryw__skipBtn.on(Laya.Event.CLICK, this, this.ryw_onSkipBtn);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__rewardBtn.off(Laya.Event.CLICK, this, this.ryw_onRewardBtn),
                this.ryw__skipBtn.off(Laya.Event.CLICK, this, this.ryw_onSkipBtn);
        }
        ryw_onRewardBtn() { }
        ryw_onSkipBtn() { }
    }
    class We extends Ce {
        onAwake() {
            super.onAwake();
        }
        ryw_addEvent() {
            super.ryw_addEvent();
        }
        ryw_removeEvent() {
            super.ryw_removeEvent();
        }
        ryw_sortDatas(e) {
            if (null == e || 0 == e.length) return [];
            let t = {}, r = new Array();
            for (let i = 0; i < e.length; ++i) {
                let n = e[i];
                null == t[n.appid] ? (t[n.appid] = new Array(), t[n.appid].push(n), r.push(n.appid)) : t[n.appid].push(n);
            }
            for (let e = 0; e < r.length; ++e) {
                let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                r[i] = t, r[e] = n;
            }
            for (let e = 0; e < r.length; ++e) {
                let i = t[r[e]];
                for (let e = 0; e < i.length; ++e) {
                    let t = i[e], r = Math.floor(Math.random() * i.length), n = i[r];
                    i[r] = t, i[e] = n;
                }
            }
            let i = new Array(), n = [];
            for (; r.length > 0;) {
                let e = !0;
                for (let a = 0; a < r.length; ++a) {
                    let s = r[a], o = !0;
                    for (let e = 0; e < n.length; ++e) {
                        if (n[e] == s) {
                            o = !1;
                            break;
                        }
                    }
                    if (o) {
                        e = !1;
                        let o = t[s].shift();
                        if (i.push(o), n.push(s), n.length > 3 && n.shift(), t[s].length <= 0) {
                            r.splice(a, 1), --a;
                            continue;
                        }
                    }
                }
                if (e) {
                    for (let e = 0; e < r.length; ++e) {
                        let a = r[e], s = !0, o = t[a];
                        n.splice(0);
                        for (let e = 0; e < o.length; ++e) {
                            let t = o[e];
                            for (let e = 0; e < i.length; ++e) {
                                n.push(null == i[e - 2] ? null : i[e - 2].appid), n.push(null == i[e - 1] ? null : i[e - 1].appid),
                                    n.push(null == i[e] ? null : i[e].appid), n.push(null == i[e + 1] ? null : i[e + 1].appid),
                                    n.push(null == i[e + 2] ? null : i[e + 2].appid);
                                for (let e = 0; e < n.length; ++e) {
                                    let t = n[e];
                                    if (null != t && t == a) {
                                        s = !1;
                                        break;
                                    }
                                }
                                if (s && null != t) {
                                    let r = i.slice(0, e + 1), n = i.slice(e + 1, i.length);
                                    (i = r).push(t);
                                    for (let e = 0; e < n.length; ++e) i.push(n[e]);
                                }
                            }
                        }
                    }
                    break;
                }
                for (let e = 0; e < r.length; ++e) {
                    let t = r[e], i = Math.floor(Math.random() * r.length), n = r[i];
                    r[i] = t, r[e] = n;
                }
            }
            return i;
        }
    }
    class ze extends ue {
        constructor() {
            super(...arguments), this.ryw__originW = 300, this.ryw__originH = 300, this.useRandom = ge.ryw_UseRandomAdPos,
                this.localuseRandom = !0;
        }
        onAwake() {
            this.ryw_AdPosID = ge.ryw_LoopAdLocationID, this.ryw__display = this.ryw_Sprite.getChildByName("Display"),
                this.ryw__text = this.ryw_Sprite.getChildByName("Text"), this.ryw__text.overflow = Laya.Text.SCROLL,
                this.ryw__text.text = "";
        }
        onEnable() {
            this.ryw_Sprite.on(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onDisable() {
            this.ryw_Sprite.off(Laya.Event.CLICK, this, this.ryw_onClickAd);
        }
        onStart() {
            this.ryw_autoScrollText(this.ryw__text), this.ryw_refresh();
        }
        ryw_refresh(e) {
            let t = this;
            ge.ryw_getADVs(this.ryw_AdPosID, r => {
                if (null != r) {
                    if (t.ryw__datas = r, t.ryw_Sprite && !t.ryw_Sprite.destroyed) {
                        for (let e = 0; e < t.ryw__datas.length; ++e) {
                            let r = !1, i = t.ryw__datas[e];
                            for (let e = 0; e < ze.ryw__repeatCheckList.length; ++e) {
                                if (ze.ryw__repeatCheckList[e] == i.appid) {
                                    r = !0;
                                    break;
                                }
                            }
                            if (!r) {
                                t.ryw_clearRepeat(), t.ryw__data = i;
                                break;
                            }
                        }
                        if (null == t.ryw__data && (t.ryw__data = t.ryw__datas[Math.floor(Math.random() * r.length)]),
                            null != t.ryw__data) {
                            t.ryw__display.loadImage(t.ryw__data.logo, Laya.Handler.create(t, function () {
                                null == t.ryw_Sprite || t.ryw_Sprite.destroy || (t.ryw_Sprite.visible = !0, e && e());
                            }));
                            var i = t.ryw__data.title;
                            t.ryw__text.text = i;
                            let r = !1;
                            for (let e = 0; e < ze.ryw__repeatCheckList.length; ++e) {
                                if (ze.ryw__repeatCheckList[e] == t.ryw__data.appid) {
                                    r = !0;
                                    break;
                                }
                            }
                            r || ze.ryw__repeatCheckList.push(t.ryw__data.appid);
                        } else null == t.ryw_Sprite || t.ryw_Sprite.destroy || (t.ryw_Sprite.visible = !1),
                            e && e();
                    }
                } else null == t.ryw_Sprite || t.ryw_Sprite.destroy || (t.ryw_Sprite.visible = !1),
                    e && e();
            }, this.useRandom, this.localuseRandom);
        }
        ryw_hide() {
            this.ryw_Sprite.visible = !1, this.ryw_clearRepeat();
        }
        ryw_clearRepeat() {
            if (null != this.ryw__data) for (let e = 0; e < ze.ryw__repeatCheckList.length; ++e) {
                if (ze.ryw__repeatCheckList[e] == this.ryw__data.appid) {
                    ze.ryw__repeatCheckList.splice(e, 1);
                    break;
                }
            }
        }
        ryw_onClickAd() {
            this.ryw_navigateToMiniProgram(), this.ryw_refresh();
        }
        onDestroy() {
            this.ryw_clearRepeat();
        }
    }
    ze.ryw__repeatCheckList = new Array();
    class qe extends ze {
        constructor() {
            super(...arguments), this._originX = null;
        }
        onAwake() {
            super.onAwake(), this._originX = this.ryw_Sprite.x, this.ryw_Sprite.x -= Laya.stage.width;
        }
        ryw_playAni(e) {
            let t = this._originX, r = t - Laya.stage.width;
            this.ryw_Sprite.x = r, Laya.Tween.to(this.ryw_Sprite, {
                rotation: 360
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.ryw_Sprite.rotation = 0;
            })), Laya.Tween.to(this.ryw_Sprite, {
                x: t
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.ryw_Sprite.x = t, null != e && e();
            }));
        }
    }
    class Qe extends qe {
        constructor() {
            super(...arguments), this._originX = null, this.normalPos = new Laya.Vector2(0, 0);
        }
        onAwake() {
            super.onAwake(), this.normalPos.x = this.ryw_Sprite.x, this.normalPos.y = this.ryw_Sprite.y,
                this._originX = this.ryw_Sprite.x, this.ryw_Sprite.x -= Laya.stage.width;
        }
        getPos() {
            return this.normalPos;
        }
        ryw_playAni(e) {
            let t = this._originX, r = t - Laya.stage.width;
            this.ryw_Sprite.x = r, Laya.Tween.to(this.ryw_Sprite, {
                rotation: 360
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.ryw_Sprite.rotation = 0;
            })), Laya.Tween.to(this.ryw_Sprite, {
                x: t
            }, 500, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                this.ryw_Sprite.x = t, null != e && e();
            }));
        }
    }
    class Xe extends We {
        constructor() {
            super(...arguments), this.ryw__centerZone = null, this.ryw__backBtn = null, this.ryw__continueBtn = null,
                this.ryw__rollSingleAds = new Array(), this.ryw__clickTag = !1, this.ryw__clickTimingTag = !1,
                this.ryw__krqVLoopAd = null, this.ryw__banner = null, this.ryw__moneyNum = null,
                this.handPosArr = [], this.isVideo = !1, this.coinNum = 0, this.ryw__moneyzon = null;
        }
        onAwake() {
            super.onAwake(), this.isgame = !1, this.ryw__centerZone = this.ryw_View.getChildByName("CenterZone"),
                this.btnCtl = this.ryw_View.getChildByName("BtnCtl"), this.ryw__krqVLoopAd = this.ryw__centerZone.getChildByName("KRQ_VLoopAd").getComponent(Be),
                this.ryw__krqVLoopAd.ryw_useLocalRandom = !0, this.ryw__krqVLoopAd.ryw_useRandom = !1,
                this.ryw__krqVLoopAd.ryw_useMovePause = !1, this.ryw__krqVLoopAd.ryw_sortDatas = this.ryw_sortDatas,
                this.keyarr = this.ryw_TopZone.getChildByName("key");
            for (let e = 0; e < this.ryw__centerZone.numChildren; ++e) {
                let t = this.ryw__centerZone.getChildAt(e).getComponent(Qe);
                if (null == t) continue;
                let r = t.getPos();
                this.handPosArr.push(r), this.ryw__rollSingleAds.push(t);
            }
            N.ryw_WudianFlag && (this.ryw_HistoryBtn.visible = !1), this.ryw__moneyNum = this.ryw_TopZone.getChildByName("MoneyInfo").getChildByName("MoneyNum"),
                this.ryw__backBtn = this.btnCtl.getChildByName("BackBtn"), this.ryw__continueBtn = this.btnCtl.getChildByName("ContinueBtn"),
                this.ryw__videoBtn = this.btnCtl.getChildByName("VideoBtn");
        }
        onStart() {
            super.onStart();
            let e = D.ryw_getInstance().ryw_getAppSwitchData().wudianRewardBanner;
            console.log("当前屏幕高度：", Laya.stage.height), N.ryw_WudianFlag && e ? this.btnCtl.bottom = 100 : (console.log("没有误点"),
                this.btnCtl.bottom = 300);
            for (let e = 0; e < this.ryw__rollSingleAds.length; ++e) {
                let t = this.ryw__rollSingleAds[e];
                Laya.timer.once(150, this, () => {
                    t.ryw_playAni();
                });
            }
            this.coinNum = 10 * n.ryw_getLeveNum() + 20, this.ryw__moneyNum.value = String(this.coinNum),
                this.ryw_onUserMoneyChange();
        }
        ryw_onUserMoneyChange() {
            this.ryw__moneyNum.value = n.ryw_getMoney().toString();
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__backBtn.on(Laya.Event.CLICK, this, this.ryw_onBackBtn),
                this.ryw__continueBtn.on(Laya.Event.CLICK, this, this.ryw_onContinueBtn), this.ryw__videoBtn.on(Laya.Event.CLICK, this, this.onClickVideo),
                i.ryw_instance.ryw_regEvemt(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__backBtn.off(Laya.Event.CLICK, this, this.ryw_onBackBtn),
                this.ryw__continueBtn.off(Laya.Event.CLICK, this, this.ryw_onContinueBtn), this.ryw__videoBtn.off(Laya.Event.CLICK, this, this.onClickVideo),
                i.ryw_instance.ryw_removeEvent(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
        }
        ryw_onBackBtn() {
            if (console.log("ryw_onBackBtn"), this.ryw__clickTag || !N.ryw_WudianFlag) console.log("ryw_onBackBtn 1"),
                this.onCloseView(); else {
                if (!this.ryw__clickTimingTag) {
                    this.ryw__clickTimingTag = !0;
                    var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
                    Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
                }
            }
        }
        ryw_onContinueBtn() {
            if (console.log("ryw_onContinueBtn"), this.ryw__clickTag || !N.ryw_WudianFlag) console.log("ryw_onContinueBtn 1"),
                this.GoGame(); else {
                if (!this.ryw__clickTimingTag) {
                    this.ryw__clickTimingTag = !0;
                    var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
                    Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
                }
            }
        }
        ryw_BannerUp() {
            let e = this;
            ve.ryw_getBanner(t => {
                null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__banner = t, null != e.ryw__banner && e.ryw__banner.ryw_show(),
                    this.isShowHistoryBtn && (e.ryw_HistoryBtn.visible = !0);
            });
        }
        ryw_BtnUp() {
            this.ryw__clickTag = !0, this.btnCtl.bottom = 300;
        }
        onDestroy() {
            null != this.ryw__banner && this.ryw__banner.ryw_hide(), this.ryw__banner = null;
        }
        ryw_onHistoryBtn() {
            let e = this;
            R.ryw_instance.ryw_openView(w.ryw_MiniGameView, null, t => {
                e.ryw_hide(), null != e.ryw__banner && e.ryw__banner.ryw_hide(), t.ryw_onCloseEvent = (() => {
                    null == e.ryw_View || e.ryw_View.destroyed || (e.ryw_show(), null != e.ryw__banner && e.ryw__banner.ryw_show());
                });
            });
        }
        GoGame() {
            if (0 == this.isgame) {
                this.isgame = !0;
                this.onCloseView(), this.ryw_closeView(), R.ryw_instance.ryw_openView(w.WXExport2);
            }
        }
        onShareAdFail() {
            this.hideBanner(), R.ryw_instance.ryw_openView(w.WXExport);
        }
        onClickVideo() {
            this.isVideo || (this.isVideo = !0, Laya.timer.once(1000, this, () => {
                this && this.isVideo && (this.isVideo = !1);
            }), E.ryw_showRewardedVideoAd(e => {
                this.isVideo = !1, 1 == e && (n.ryw_addMoney(3 * this.coinNum), this.GoGame());
            }, e => {
                this.isVideo = !1;
            }));
        }
        onCloseView() {
            console.log("fail page onClose "), this.hideBanner(), this.ryw_hide(), this.ryw_onCloseEvent && this.ryw_onCloseEvent();
        }
        hideBanner() {
            let e = this;
            null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__banner = null;
        }
    }
    class je extends We {
        constructor() {
            super(...arguments), this.ryw__centerZone = null, this.ryw__continueBtn = null,
                this.ryw__rollSingleAds = new Array(), this.ryw__clickTag = !1, this.ryw__clickTimingTag = !1,
                this.ryw__krqVLoopAd = null, this.ryw__banner = null, this.ryw__moneyNum = null,
                this.handPosArr = [], this.isVideo = !1, this.coinNum = 0;
        }
        onAwake() {
            super.onAwake(), this.isgame = !1, this.ryw__centerZone = this.ryw_View.getChildByName("CenterZone"),
                this.btnCtl = this.owner.getChildByName("BtnCtl"), this.ryw__krqVLoopAd = this.ryw__centerZone.getChildByName("KRQ_VLoopAd").getComponent(Be),
                this.ryw__krqVLoopAd.ryw_useLocalRandom = !0, this.ryw__krqVLoopAd.ryw_useRandom = !1,
                this.ryw__krqVLoopAd.ryw_useMovePause = !1, this.ryw__krqVLoopAd.ryw_sortDatas = this.ryw_sortDatas;
            for (let e = 0; e < this.ryw__centerZone.numChildren; ++e) {
                let t = this.ryw__centerZone.getChildAt(e).getComponent(Qe);
                if (null == t) continue;
                let r = t.getPos();
                this.handPosArr.push(r), this.ryw__rollSingleAds.push(t);
            }
            N.ryw_WudianFlag && (this.ryw_HistoryBtn.visible = !1), this.ryw__moneyNum = this.ryw_TopZone.getChildByName("MoneyInfo").getChildByName("MoneyNum"),
                this.ryw__continueBtn = this.btnCtl.getChildByName("ContinueBtn"), this.ryw__videoBtn = this.btnCtl.getChildByName("VideoBtn"),
                this.ryw_onUserMoneyChange();
        }
        onStart() {
            super.onStart();
            let e = D.ryw_getInstance().ryw_getAppSwitchData().wudianRewardBanner;
            N.ryw_WudianFlag && e ? this.btnCtl.bottom = 100 : this.ryw_BtnUp();
            for (let e = 0; e < this.ryw__rollSingleAds.length; ++e) {
                let t = this.ryw__rollSingleAds[e];
                Laya.timer.once(150, this, () => {
                    t.ryw_playAni();
                });
            }
            this.coinNum = 20 * (n.ryw_getLeveNum() - 1) + 100, this.ryw__moneyNum.value = String(this.coinNum);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), this.ryw__continueBtn.on(Laya.Event.CLICK, this, this.ryw_onNextBtn),
                this.ryw__videoBtn.on(Laya.Event.CLICK, this, this.onClickVideo), i.ryw_instance.ryw_regEvemt(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), this.ryw__continueBtn.off(Laya.Event.CLICK, this, this.ryw_onNextBtn),
                this.ryw__videoBtn.off(Laya.Event.CLICK, this, this.onClickVideo), i.ryw_instance.ryw_removeEvent(t.ryw_Game_OnUserMoneyChange, this, this.ryw_onUserMoneyChange);
        }
        ryw_onBackBtn() {
            if (this.ryw__clickTag || !N.ryw_WudianFlag) console.log("ryw_onBackBtn???????"),
                this.onCloseView(); else {
                if (!this.ryw__clickTimingTag) {
                    this.ryw__clickTimingTag = !0;
                    var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
                    Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
                }
            }
        }
        ryw_onNextBtn() {
            if (this.ryw__clickTag || !N.ryw_WudianFlag) console.log("ryw_onNextBtn???????"),
                n.ryw_addMoney(this.coinNum), this.GoGame(); else {
                if (!this.ryw__clickTimingTag) {
                    this.ryw__clickTimingTag = !0;
                    var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
                    Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
                }
            }
        }
        ryw_BannerUp() {
            let e = this;
            console.log("显示banner广告："), ve.ryw_getBanner(t => {
                null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__banner = t, null != e.ryw__banner && e.ryw__banner.ryw_show(),
                    this.isShowHistoryBtn;
            });
        }
        ryw_BtnUp() {
            this.ryw__clickTag = !0, this.btnCtl.bottom = 300;
        }
        onDestroy() {
            null != this.ryw__banner && this.ryw__banner.ryw_hide(), this.ryw__banner = null;
        }
        ryw_onHistoryBtn() {
            let e = this;
            R.ryw_instance.ryw_openView(w.ryw_MiniGameView, null, t => {
                e.ryw_hide(), null != e.ryw__banner && e.ryw__banner.ryw_hide(), t.ryw_onCloseEvent = (() => {
                    null == e.ryw_View || e.ryw_View.destroyed || (e.ryw_show(), null != e.ryw__banner && e.ryw__banner.ryw_show());
                });
            });
        }
        onShareAdFail() {
            this.hideBanner(), R.ryw_instance.ryw_openView(w.WXExport);
        }
        GoGame() {
            if (0 == this.isgame) {
                this.isgame = !0;
                var e = this;
                Laya.timer.once(500, this, function () {
                    e.onCloseView(), e.ryw_closeView(), R.ryw_instance.ryw_openView(w.WXExport2);
                });
            }
        }
        onClickVideo() {
            this.isVideo || (this.isVideo = !0, Laya.timer.once(1000, this, () => {
                this && this.isVideo && (this.isVideo = !1);
            }), E.ryw_showRewardedVideoAd(e => {
                this.isVideo = !1, 1 == e && (n.ryw_addMoney(3 * this.coinNum), this.GoGame());
            }, e => {
                this.isVideo = !1;
            }));
        }
        ryw_onUserMoneyChange() {
            this.ryw__moneyNum.value = n.ryw_getMoney().toString();
        }
        onCloseView() {
            this.hideBanner(), this.ryw_hide(), this.ryw_onCloseEvent && this.ryw_onCloseEvent();
        }
        hideBanner() {
            let e = this;
            null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__banner = null;
        }
    }
    class Ke extends F {
        constructor() {
            super(...arguments), this.ryw__clickBar = null, this.ryw__totalClickTimer = 15,
                this.ryw__needClickTime = 10, this.ryw__bannerClickTime = Math.floor(5 * Math.random()) + 2,
                this.ryw__template = null, this.ryw__banner = null;
        }
        onAwake() {
            this.ryw__click_Btn = this.owner.getChildByName("Click_Btn"), this.ryw__click_Btn.on(Laya.Event.CLICK, this, this.ButtonClicked),
                this.ryw__arrow_Img = this.ryw__click_Btn.getChildByName("Arrow_Img"), this.ryw__getPrize_View = this.owner.getChildByName("GetPrize_View"),
                this.ryw__prizeCount_Text = this.ryw__getPrize_View.getChildByName("PrizeCount_Text"),
                this.ryw__confirm_Btn = this.ryw__getPrize_View.getChildByName("Confirm_Btn"), this.ryw__getPrize_View.visible = !1,
                this.ryw__clickBar = this.owner.getChildByName("ClickBar").getChildByName("ClickBar"),
                this.ryw__clickBarOriginalWidth = this.ryw__clickBar.width, this.ryw__clickBar.width = 0,
                this.ryw__clickTime = 0, this.ryw__totalClickTime = 0;
            let e = this;
            Laya.loader.load("ClickGetPrize/quanji.png", Laya.Handler.create(this, t => {
                Laya.loader.load("ClickGetPrize/quanji.sk", Laya.Handler.create(this, r => {
                    console.log("texture", t), console.log("bytes", r), e.ryw__template = new Laya.Templet(),
                        e.ryw__template.parseData(t, r), e.ryw_drgon = e.ryw__template.buildArmature(),
                        e.owner.addChild(e.ryw_drgon), e.ryw_drgon.x = 375, e.ryw_drgon.y = 610, e.ryw_drgon.scaleX = 2,
                        e.ryw_drgon.scaleY = 2, e.ryw_drgon.parent.setChildIndex(e.ryw_drgon, 1), e.ryw_drgon.play(0, !0),
                        console.log("quanji 加载完成!!!!", e.ryw__template);
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
            }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), Laya.stage.off(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        onUpdate() {
            this.ryw__arrowUp ? (this.ryw__arrow_Img.top += Laya.timer.delta / 5, this.ryw__arrow_Img.top > -140 && (this.ryw__arrowUp = !1)) :
                (this.ryw__arrow_Img.top -= Laya.timer.delta / 5,
                    this.ryw__arrow_Img.top < -180 && (this.ryw__arrowUp = !0));
            let e = 2 + this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth * 4;
            this.ryw__clickBar.width >= e && (this.ryw__clickBar.width -= e),
                this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth + .1 < this.ryw__clickTime / this.ryw__needClickTime && this.ryw__clickTime--;
        }
        ryw_openView(e) {
            this.ryw__compeletFunction = e.Complete, this.ryw__titel = e.titel, super.ryw_openView(e);
        }
        ryw_OpenPrizeWindow() {
            let e = this;
            this.ryw__prizeCount_Text.text = this.ryw__titel, this.ryw__getPrize_View.visible = !0,
                this.ryw__confirm_Btn.once(Laya.Event.CLICK, this, function () {
                    null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__compeletFunction && e.ryw__compeletFunction(),
                        e.ryw_closeView();
                });
        }
        ryw_ShowBanner() {
            let e = this;
            ve.ryw_getBanner(t => {
                null != e.ryw__banner && e.ryw__banner.ryw_hide(), e.ryw__banner = t, null != e.ryw__banner && e.ryw__banner.ryw_show();
            });
        }
        ButtonClicked() {
            if (this.ryw__clickTime++, this.ryw__totalClickTime++, null != this.ryw_drgon && (this.ryw_drgon.play(1, !1),
                this.ryw_drgon.once(Laya.Event.STOPPED, this, () => {
                    this.ryw_drgon.play(0, !0);
                })), this.ryw__clickTime > this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime),
                this.ryw__clickTime >= this.ryw__bannerClickTime) {
                if (this.ryw__clickTime >= this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime - 1),
                    this.ryw__bannerClicked) return;
                this.ryw__bannerClicked = !0, N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_ShowBanner(),
                    Laya.timer.once(2e3, this, function () {
                        this.ryw_BannerClicked();
                    });
            } else this.ryw__totalClickTime > this.ryw__totalClickTimer && (N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_ShowBanner(),
                this.ryw_BannerClicked());
            let e = this.ryw__clickTime / this.ryw__needClickTime * this.ryw__clickBarOriginalWidth;
            this.ryw__clickBar.width = e;
        }
        ryw_BannerClicked() {
            i.ryw_instance.ryw_dispatch(t.ryw_AD_WudianBanner_Hide), this.ryw__bannerClicked = !0,
                this.ryw__clickTime = this.ryw__needClickTime, this.ryw__clickBar.width = this.ryw__clickBarOriginalWidth,
                this.ryw__click_Btn.visible = !1, this.ryw_OpenPrizeWindow();
        }
        onDestroy() {
            null != this.ryw__banner && this.ryw__banner.ryw_hide();
        }
        onFocusChange() {
            null != this.ryw_drgon && this.ryw_drgon.play(0, !0);
        }
    }
    class Ze extends F {
        constructor() {
            super();
        }
        onAwake() {
            this.ryw__bg = this.owner.getChildByName("Bg"), this.ryw__bg.x = Laya.stage.width / 2 - this.ryw__bg.width / 2,
                this.ryw__tipsText = this.ryw__bg.getChildByName("Text");
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.ryw_setTipsMsg(e), Laya.timer.clearAll(this);
            var t = this;
            Laya.timer.once(3e3, this, function () {
                t.ryw_closeView();
            });
        }
        ryw_setTipsMsg(e) {
            this.ryw__tipsText.text = e;
        }
    }
    class Ye extends F {
        onAwake() {
            super.onAwake();
        }
        ryw_showBanner() {
            ie.ryw_instance.ryw_dispatch(u.SHOW_BANNER);
        }
        ryw_hideBanner() {
            ie.ryw_instance.ryw_dispatch(u.HIDE_BANNER);
        }
        ryw_onHide() {
            this.ryw_hideBanner();
        }
        ryw_closeView() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this), oe.ryw_instance.ryw_closeView(this._PageDef),
                this.ryw_onCloseEvent && this.ryw_onCloseEvent();
        }
        onDestroy() {
            this.ryw_hideBanner();
        }
        ryw_openView(e) {
            this._data = e, this.ryw_show(), this.ryw_onOpenEvent && this.ryw_onOpenEvent();
        }
    }
    class Je extends Ye {
        constructor() {
            super(...arguments), this.ryw__clickBar = null, this.ryw__totalClickTimer = 15,
                this.ryw__needClickTime = 10, this.ryw__bannerClickTime = Math.floor(5 * Math.random()) + 2,
                this.ryw__template = null;
        }
        onAwake() {
            this.ryw__click_Btn = this.owner.getChildByName("Click_Btn"), this.ryw__click_Btn.on(Laya.Event.CLICK, this, this.ButtonClicked),
                this.ryw__arrow_Img = this.ryw__click_Btn.getChildByName("Arrow_Img"), this.ryw__getPrize_View = this.owner.getChildByName("GetPrize_View"),
                this.ryw__prizeCount_Text = this.ryw__getPrize_View.getChildByName("PrizeCount_Text"),
                this.ryw__confirm_Btn = this.ryw__getPrize_View.getChildByName("Confirm_Btn"), this.ryw__getPrize_View.visible = !1,
                this.ryw__clickBar = this.owner.getChildByName("ClickBar").getChildByName("ClickBar"),
                this.ryw__clickBarOriginalWidth = this.ryw__clickBar.width, this.ryw__clickBar.width = 0,
                this.ryw__clickTime = 0, this.ryw__totalClickTime = 0;
            let e = this;
            Laya.loader.load("ClickGetPrize/quanji.png", Laya.Handler.create(this, t => {
                Laya.loader.load("ClickGetPrize/quanji.sk", Laya.Handler.create(this, r => {
                    console.log("texture", t), console.log("bytes", r), e.ryw__template = new Laya.Templet(),
                        e.ryw__template.parseData(t, r), e.ryw_drgon = e.ryw__template.buildArmature(),
                        e.owner.addChild(e.ryw_drgon), e.ryw_drgon.x = 375, e.ryw_drgon.y = 610, e.ryw_drgon.scaleX = 2,
                        e.ryw_drgon.scaleY = 2, e.ryw_drgon.parent.setChildIndex(e.ryw_drgon, 1), e.ryw_drgon.play(0, !0),
                        console.log("quanji 加载完成!!!!", e.ryw__template);
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
            }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), Laya.stage.off(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        onUpdate() {
            this.ryw__arrowUp ? (this.ryw__arrow_Img.top += Laya.timer.delta / 5, this.ryw__arrow_Img.top > -140 && (this.ryw__arrowUp = !1)) : (this.ryw__arrow_Img.top -= Laya.timer.delta / 5,
                this.ryw__arrow_Img.top < -180 && (this.ryw__arrowUp = !0));
            let e = 2 + this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth * 4;
            this.ryw__clickBar.width >= e && (this.ryw__clickBar.width -= e),
                this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth + .1 < this.ryw__clickTime / this.ryw__needClickTime && this.ryw__clickTime--;
        }
        ryw_openView(e) {
            this.ryw__compeletFunction = e.Complete, this.ryw__titel = e.titel, super.ryw_openView(e);
        }
        ryw_OpenPrizeWindow() {
            let e = this;
            this.ryw__prizeCount_Text.text = this.ryw__titel, this.ryw__getPrize_View.visible = !0,
                this.ryw__confirm_Btn.once(Laya.Event.CLICK, this, function () {
                    console.log("touch....close"), e.ryw_hideBanner(), e.ryw__compeletFunction && e.ryw__compeletFunction(),
                        e.ryw_closeView();
                });
        }
        ButtonClicked() {
            if (this.ryw__clickTime++, this.ryw__totalClickTime++, null != this.ryw_drgon && (this.ryw_drgon.play(1, !1),
                this.ryw_drgon.once(Laya.Event.STOPPED, this, () => {
                    this.ryw_drgon.play(0, !0);
                })), this.ryw__clickTime > this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime),
                this.ryw__clickTime >= this.ryw__bannerClickTime) {
                if (this.ryw__clickTime >= this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime - 1),
                    this.ryw__bannerClicked) return;
                this.ryw__bannerClicked = !0, N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_showBanner(),
                    Laya.timer.once(2e3, this, function () {
                        this.ryw_BannerClicked();
                    });
            } else this.ryw__totalClickTime > this.ryw__totalClickTimer && (N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_showBanner(),
                this.ryw_BannerClicked());
            let e = this.ryw__clickTime / this.ryw__needClickTime * this.ryw__clickBarOriginalWidth;
            this.ryw__clickBar.width = e;
        }
        ryw_BannerClicked() {
            i.ryw_instance.ryw_dispatch(t.ryw_AD_WudianBanner_Hide), this.ryw__bannerClicked = !0,
                this.ryw__clickTime = this.ryw__needClickTime, this.ryw__clickBar.width = this.ryw__clickBarOriginalWidth,
                this.ryw__click_Btn.visible = !1, this.ryw_OpenPrizeWindow();
        }
        onDestroy() {
            this.ryw_hideBanner();
        }
        onFocusChange() {
            null != this.ryw_drgon && this.ryw_drgon.play(0, !0);
        }
    }
    class $e extends Ye {
        constructor() {
            super(...arguments), this.continueBtn = null, this._isCanClose = !1, this.ryw_hand = null,
                this.isContinueClick = !1;
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.visible = !1, this.continueBtn.on("click", this, this.onContinueBtnClicked),
                N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_handShow && Laya.loader.load("ClickGetPrize/NewProject.png", Laya.Handler.create(this, e => {
                    Laya.loader.load("ClickGetPrize/NewProject.sk", Laya.Handler.create(this, t => {
                        this.ryw_hand = new Laya.Templet(), this.ryw_hand.parseData(e, t);
                        let r = this.ryw_hand.buildArmature();
                        this.owner.addChild(r), r.x = 360, r.y = 617, r.play(0, !0), console.log("手指动画 加载完成!!!!", this.ryw_hand);
                    }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0), Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBtnDelayTime, this, () => {
                    this.continueBtn.visible = !0;
                });
        }
        onContinueBtnClicked() {
            let e = this;
            this.isContinueClick || (we.ryw_instance.isJumpOk = !1, this.isContinueClick = !0,
                N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, e, () => {
                    e.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, e, () => {
                        e._isCanClose = !0, e.ryw_hideBanner();
                    });
                }) : (e._isCanClose = !0, we.ryw_instance.isJumpOk = !0, e.ryw_hideBanner())), this._isCanClose && (this.ryw_closeView(),
                    this._data && this._data.closeCallFun && this._data.closeCallFun());
        }
    }
    class et extends Ye {
        onAwake() {
            super.onAwake(), console.log("加载了 ryw_GameView..."), this.ryw_showBanner();
        }
        onDestroy() {
            this.ryw_hideBanner();
        }
    }
    !function (e) {
        e[e.otherToRanking = 0] = "otherToRanking", e[e.resultToRanking = 1] = "resultToRanking";
    }(ee || (ee = {}));
    class tt extends Ye {
        constructor() {
            super(...arguments), this.backBtn = null, this.continueBtn = null, this.loopAD = null,
                this._isCanClose = !1, this._pageType = null, this.isContinueClick = !1;
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.on("click", this, this.onContinueClicked),
                this.backBtn.on("click", this, this.onBackClicked);
        }
        ryw_openView(e) {
            switch (super.ryw_openView(e), this._pageType = e.pageType, this.loopSrc = this.loopAD.getComponent(Be),
            console.log(this.loopSrc), this.loopSrc.setParam(e), e.pageType) {
                case ee.otherToRanking:
                    this.continueBtn.getChildByName("Text").text = "试玩一下";
                    break;

                case ee.resultToRanking:
                    this.continueBtn.getChildByName("Text").text = "继续游戏", D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ? this.backBtn.visible = !0 : this.backBtn.visible = !1;
            }
        }
        onContinueClicked() {
            switch (console.log(this._pageType), this._pageType) {
                case ee.otherToRanking:
                    console.log("随机弹出广告"), this.loopSrc.randClick();
                    break;

                case ee.resultToRanking:
                    let e = this;
                    if (this.isContinueClick || (this.isContinueClick = !0, we.ryw_instance.isJumpOk = !1,
                        N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, e, () => {
                            e.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, e, () => {
                                e._isCanClose = !0, e.ryw_hideBanner();
                            });
                        }) : (e._isCanClose = !0, we.ryw_instance.isJumpOk = !0, this.ryw_hideBanner())),
                        !this._isCanClose) return;
                    this.ryw_hideBanner(), this.ryw_closeView();
                    let t, r = 0;
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian && B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version && (t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                        r = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip), ie.ryw_instance.ryw_dispatch(g.SHOW_EXPORT, {
                            isShow: !0,
                            closeCallFun: () => {
                                console.log("可以重新开始"), we.ryw_instance.isRestart = !0, ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                                    isShow: !0,
                                    SlideSkip: t,
                                    ForceSkip: r
                                });
                            }
                        });
            }
        }
        onBackClicked() {
            switch (this.ryw_hideBanner(), this._pageType) {
                case ee.otherToRanking:
                    this.ryw_closeView(), console.log("关闭当前页面");
                    break;

                case ee.resultToRanking:
                    console.log("不关闭,打开热玩");
                    let e, t = 0;
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian && B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version && (e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                        t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip), ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                            isShow: !0,
                            SlideSkip: e,
                            ForceSkip: t
                        });
            }
        }
    }
    class rt extends Ye {
        constructor() {
            super(...arguments), this.loopAD = null, this.groupAD = null, this.rankBtn = null,
                this.backBtn = null, this.moreBtn = null, this.startBtn = null, this.labelMoney = null,
                this.labelLevel = null, this.onStartFinishFunc = null;
        }
        ryw_openView(e) {
            console.log("i‘m coming.."), super.ryw_openView(e), this.loopSrc = this.loopAD.getComponent(fe),
                this.loopSrc.setParam(e);
        }
        onAwake() {
            console.log("show main....onAwake"), ie.ryw_instance.ryw_regEvent(u.GAME_START_BEFORE, this.onStartBefore_csryw, this),
                this.startBtn.on("click", this, this.ryw_onStartClicked), this.backBtn.on("click", this, this.ryw_onBackClicked),
                this.moreBtn.on("click", this, this.ryw_MoreClicked), this.rankBtn.on("click", this, this.ryw_onRankClicked),
                this.labelMoney.getChildByName(this.labelMoney.name).text = "" + n.ryw_getMoney(),
                this.labelLevel.getChildByName(this.labelLevel.name).text = "" + n.ryw_getLeveNum(),
                console.log(N.ryw_WudianFlag, O.checkVersions()), N.ryw_WudianFlag && O.checkVersions() ? (console.log(D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn),
                    console.log(D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainMoreBtn),
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ? this.backBtn.visible = !0 : this.backBtn.visible = !1,
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainMoreBtn > 0 ? this.moreBtn.visible = !0 : this.moreBtn.visible = !1,
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainItemBtn > 0 ? this.rankBtn.visible = !0 : this.rankBtn.visible = !1,
                    1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainExportShow && (this.loopAD.visible = !1,
                        this.groupAD.visible = !1), we.ryw_instance.isFirstInGame && (we.ryw_instance.isFirstInGame = !1),
                    0 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_moreGameShowLevel && n.ryw_getLeveNum() >= D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_moreGameShowLevel && (console.log("init more game."),
                        Laya.timer.once(1e3, this, () => {
                            ie.ryw_instance.ryw_dispatch(g.SHOW_MORE, {
                                isShow: !0,
                                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip,
                                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_ForceSkip
                            });
                        }))) : (this.backBtn.visible = !1, this.moreBtn.visible = !1, this.rankBtn.visible = !1,
                            this.groupAD.visible = !1, this.loopAD.top = -500, console.log("close loop ...src")),
                this.ryw_showBanner();
        }
        ryw_onBackClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                isShow: !0,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
            });
        }
        ryw_MoreClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_MORE, {
                isShow: !0,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_ForceSkip
            });
        }
        ryw_onRankClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_RANKING, {
                isShow: !0,
                pageType: ee.otherToRanking,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_ForceSkip
            });
        }
        addEvent_csryw() {
            i.ryw_instance.ryw_regEvemt(t.ryw_Game_OnUserMoneyChange, this, this.onUserMoneyChange_csryw);
        }
        removeEvent_csryw() {
            i.ryw_instance.ryw_removeEvent(t.ryw_Game_OnUserMoneyChange, this, this.onUserMoneyChange_csryw),
                ie.ryw_instance.ryw_removeEvent(u.GAME_START_BEFORE, this.onStartBefore_csryw, this),
                console.log("关闭开始之前事件");
        }
        onDestroy() {
            this.removeEvent_csryw();
        }
        onUserMoneyChange_csryw(e) {
            let t = e.curr;
            e.last;
            this.labelMoney.getChildByName(this.labelMoney.name).text = "" + t;
        }
        onStartBefore_csryw(e) {
            this.onStartFinishFunc = e, console.log("开始游戏前"), this.ryw_onStartClicked();
        }
        ryw_onStartClicked() {
            N.ryw_WudianFlag && O.checkVersions() && D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_startVideo > 0 ? (console.log("激励视频开始播放。"),
                E.ryw_showRewardedVideoAd(e => {
                    this.showCrazy();
                }, () => {
                    this.showCrazy();
                })) : this.showCrazy();
        }
        showCrazy() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_HALL, {
                isShow: !1
            }), N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdian && n.ryw_getLeveNum() % D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianLevelSpcacing == 0 ? ie.ryw_instance.ryw_dispatch(g.SHOW_CRAZY, {
                isShow: !0,
                Complete: () => {
                    this.onStartFinishFunc && this.onStartFinishFunc(), ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, {
                        isShow: !0,
                        ForceSkip: 0,
                        SlideSkip: 1
                    });
                },
                titel: "一股神秘力量"
            }) : (console.log("调用开始完成！！！"), this.onStartFinishFunc && this.onStartFinishFunc(),
                ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, {
                    isShow: !0,
                    ForceSkip: 0,
                    SlideSkip: 1
                }));
        }
    }
    class it extends Ye {
        constructor() {
            super(...arguments), this.continueBtn = null, this.loopAD = null, this._isCanClose = !1,
                this.ryw_hand = null;
        }
        ryw_openView(e) {
            super.ryw_openView(e), console.log("hotplay .open..."), this.loopSrc = this.loopAD.getComponent(Be),
                this.loopSrc.setParam(e);
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.visible = !1, this.continueBtn.on("click", this, this.onContinueBtnClicked),
                Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBtnDelayTime, this, () => {
                    this.continueBtn.visible = !0, we.ryw_instance.isJumpOk = !1, N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, this, () => {
                        this.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, this, () => {
                            this._isCanClose = !0, this.ryw_hideBanner();
                        });
                    }) : (this._isCanClose = !0, we.ryw_instance.isJumpOk = !0, this.ryw_hideBanner());
                }), N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_handShow && Laya.loader.load("ClickGetPrize/NewProject.png", Laya.Handler.create(this, e => {
                    Laya.loader.load("ClickGetPrize/NewProject.sk", Laya.Handler.create(this, t => {
                        this.ryw_hand = new Laya.Templet(), this.ryw_hand.parseData(e, t);
                        let r = this.ryw_hand.buildArmature();
                        this.owner.addChild(r), r.x = 360, r.y = 617, r.play(0, !0), console.log("手指动画 加载完成!!!!", this.ryw_hand);
                    }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
        }
        onContinueBtnClicked() {
            this._isCanClose && (this.ryw_closeView(), we.ryw_instance.isRestart && (we.ryw_instance.isRestart = !1,
                ie.ryw_instance.ryw_dispatch(u.CONTINUE), console.log("游戏初始化."), ne.Getinstance().LoadGame(() => {
                    R.ryw_instance.ryw_openView(w.ryw_MainView);
                })));
        }
    }
    class nt extends Laya.Script {
        onAwake() {
            var e = Laya.stage.width / nt.baseWidth;
            this.owner.scale(e, e);
        }
    }
    nt.baseWidth = 750, nt.baseHeight = 1334;
    class at extends Ye {
        constructor() {
            super(...arguments), this.loopAD = null, this.close = null, this.isClickedContinueBtn = !1,
                this.isStartAction = !1;
        }
        onAwake() {
            super.onAwake();
        }
        onStart() {
            this.close = this.owner.getChildByName("CloseBtn"), this.close.on("click", this, this.onContinueClicked);
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.loopSrc = this.loopAD.getComponent(Be), console.log(this.loopSrc),
                this.loopSrc.setParam(e);
        }
        execAction() {
            this.isStartAction = !0;
            var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
            Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
        }
        ryw_BannerUp() {
            this.ryw_showBanner(), we.ryw_instance.isJumpOk = !0;
        }
        ryw_BtnUp() {
            this.close.bottom += 260, this.isClickedContinueBtn = !0;
        }
        onContinueClicked() {
            N.ryw_WudianFlag && O.checkVersions() ? this.isClickedContinueBtn ? (console.log("close result View..."),
                this.ryw_closeView()) : this.isStartAction || (we.ryw_instance.isJumpOk = !1, this.isStartAction = !0,
                    this.execAction()) : this.ryw_closeView();
        }
    }
    class st extends Ye {
        constructor() {
            super(...arguments), this.ryw__clickBar = null, this.ryw__totalClickTimer = 15,
                this.ryw__needClickTime = 10, this.ryw__bannerClickTime = Math.floor(5 * Math.random()) + 2,
                this.ryw__template = null;
        }
        onAwake() {
            this.ryw__click_Btn = this.owner.getChildByName("Click_Btn"), this.ryw__click_Btn.on(Laya.Event.CLICK, this, this.ButtonClicked),
                this.ryw__arrow_Img = this.ryw__click_Btn.getChildByName("Arrow_Img"), this.ryw__getPrize_View = this.owner.getChildByName("GetPrize_View"),
                this.ryw__prizeCount_Text = this.ryw__getPrize_View.getChildByName("PrizeCount_Text"),
                this.ryw__confirm_Btn = this.ryw__getPrize_View.getChildByName("Confirm_Btn"), this.ryw__getPrize_View.visible = !1,
                this.ryw__clickBar = this.owner.getChildByName("ClickBar").getChildByName("ClickBar"),
                this.ryw__clickBarOriginalWidth = this.ryw__clickBar.width, this.ryw__clickBar.width = 0,
                this.ryw__clickTime = 0, this.ryw__totalClickTime = 0;
            let e = this;
            Laya.loader.load("ClickGetPrize/quanji.png", Laya.Handler.create(this, t => {
                Laya.loader.load("ClickGetPrize/quanji.sk", Laya.Handler.create(this, r => {
                    console.log("texture", t), console.log("bytes", r), e.ryw__template = new Laya.Templet(),
                        e.ryw__template.parseData(t, r), e.ryw_drgon = e.ryw__template.buildArmature(),
                        e.owner.addChild(e.ryw_drgon), e.ryw_drgon.x = 375, e.ryw_drgon.y = 610, e.ryw_drgon.scaleX = 2,
                        e.ryw_drgon.scaleY = 2, e.ryw_drgon.parent.setChildIndex(e.ryw_drgon, 1), e.ryw_drgon.play(0, !0),
                        console.log("quanji 加载完成!!!!", e.ryw__template);
                }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
            }), Laya.Handler.create(this, () => { }), "", 0, !1, "", !0);
        }
        ryw_addEvent() {
            super.ryw_addEvent(), Laya.stage.on(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        ryw_removeEvent() {
            super.ryw_removeEvent(), Laya.stage.off(Laya.Event.FOCUS_CHANGE, this, this.onFocusChange);
        }
        onUpdate() {
            this.ryw__arrowUp ? (this.ryw__arrow_Img.top += Laya.timer.delta / 5, this.ryw__arrow_Img.top > -140 && (this.ryw__arrowUp = !1)) : (this.ryw__arrow_Img.top -= Laya.timer.delta / 5,
                this.ryw__arrow_Img.top < -180 && (this.ryw__arrowUp = !0));
            let e = 2 + this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth * 4;
            this.ryw__clickBar.width >= e && (this.ryw__clickBar.width -= e),
                this.ryw__clickBar.width / this.ryw__clickBarOriginalWidth + .1 < this.ryw__clickTime / this.ryw__needClickTime && this.ryw__clickTime--;
        }
        ryw_openView(e) {
            this.ryw__compeletFunction = e.Complete, this.ryw__titel = e.titel, super.ryw_openView(e);
        }
        ryw_OpenPrizeWindow() {
            let e = this;
            this.ryw__prizeCount_Text.text = this.ryw__titel, this.ryw__getPrize_View.visible = !0,
                this.ryw__confirm_Btn.once(Laya.Event.CLICK, this, function () {
                    console.log("touch....close"), e.ryw_hideBanner(), e.ryw__compeletFunction && e.ryw__compeletFunction(),
                        e.ryw_closeView();
                });
        }
        ButtonClicked() {
            if (this.ryw__clickTime++, this.ryw__totalClickTime++, null != this.ryw_drgon && (this.ryw_drgon.play(1, !1),
                this.ryw_drgon.once(Laya.Event.STOPPED, this, () => {
                    this.ryw_drgon.play(0, !0);
                })), this.ryw__clickTime > this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime),
                this.ryw__clickTime >= this.ryw__bannerClickTime) {
                if (this.ryw__clickTime >= this.ryw__needClickTime && (this.ryw__clickTime = this.ryw__needClickTime - 1),
                    this.ryw__bannerClicked) return;
                this.ryw__bannerClicked = !0, N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_showBanner(),
                    Laya.timer.once(2e3, this, function () {
                        this.ryw_BannerClicked();
                    });
            } else this.ryw__totalClickTime > this.ryw__totalClickTimer && (N.ryw_WudianFlag && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianBanner && this.ryw_showBanner(),
                this.ryw_BannerClicked());
            let e = this.ryw__clickTime / this.ryw__needClickTime * this.ryw__clickBarOriginalWidth;
            this.ryw__clickBar.width = e;
        }
        ryw_BannerClicked() {
            i.ryw_instance.ryw_dispatch(t.ryw_AD_WudianBanner_Hide), this.ryw__bannerClicked = !0,
                this.ryw__clickTime = this.ryw__needClickTime, this.ryw__clickBar.width = this.ryw__clickBarOriginalWidth,
                this.ryw__click_Btn.visible = !1, this.ryw_OpenPrizeWindow();
        }
        onDestroy() {
            this.ryw_hideBanner();
        }
        onFocusChange() {
            null != this.ryw_drgon && this.ryw_drgon.play(0, !0);
        }
    }
    class ot extends Ye {
        constructor() {
            super(...arguments), this.continueBtn = null, this.hand = null, this._isCanClose = !1,
                this.isContinueClick = !1;
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.visible = !1, this.continueBtn.on("click", this, this.onContinueBtnClicked),
                1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_handShow ? this.hand.visible = !0 : this.hand.visible = !1,
                Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBtnDelayTime, this, () => {
                    this.continueBtn.visible = !0;
                });
        }
        onContinueBtnClicked() {
            let e = this;
            this.isContinueClick || (we.ryw_instance.isJumpOk = !1, this.isContinueClick = !0,
                N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, e, () => {
                    e.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, e, () => {
                        e._isCanClose = !0, e.ryw_hideBanner();
                    });
                }) : e._isCanClose = !0), this._isCanClose && (this.ryw_closeView(), this._data && this._data.closeCallFun && this._data.closeCallFun());
        }
    }
    class wt extends Ye {
        constructor() {
            super(...arguments), this.loopAD = null;
        }
        onAwake() {
            this.loopAD.visible = !1, super.onAwake(), console.log("加载了 ryw_GameView..."), this.ryw_showBanner();
        }
        onDestroy() {
            this.ryw_hideBanner();
        }
    }
    !function (e) {
        e[e.otherToRanking = 0] = "otherToRanking", e[e.resultToRanking = 1] = "resultToRanking";
    }(te || (te = {}));
    class yt extends Ye {
        constructor() {
            super(...arguments), this.backBtn = null, this.continueBtn = null, this.loopAD = null,
                this._isCanClose = !1, this._pageType = null, this.isContinueClick = !1;
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.on("click", this, this.onContinueClicked),
                this.backBtn.on("click", this, this.onBackClicked);
        }
        ryw_openView(e) {
            switch (super.ryw_openView(e), this._pageType = e.pageType, this.loopSrc = this.loopAD.getComponent(Be),
            console.log(this.loopSrc), this.loopSrc.setParam(e), e.pageType) {
                case te.otherToRanking:
                    this.continueBtn.getChildByName("Text").text = "试玩一下";
                    break;

                case te.resultToRanking:
                    this.continueBtn.getChildByName("Text").text = "继续游戏", D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ? this.backBtn.visible = !0 : this.backBtn.visible = !1;
            }
        }
        onContinueClicked() {
            switch (console.log(this._pageType), this._pageType) {
                case te.otherToRanking:
                    console.log("随机弹出广告"), this.loopSrc.randClick();
                    break;

                case te.resultToRanking:
                    let e = this;
                    if (this.isContinueClick || (this.isContinueClick = !0, we.ryw_instance.isJumpOk = !1,
                        N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, e, () => {
                            e.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, e, () => {
                                e._isCanClose = !0, e.ryw_hideBanner();
                            });
                        }) : e._isCanClose = !0), !this._isCanClose) return;
                    this.ryw_hideBanner(), this.ryw_closeView(), ie.ryw_instance.ryw_dispatch(g.SHOW_EXPORT, {
                        isShow: !0,
                        closeCallFun: () => {
                            console.log("可以重新开始"), we.ryw_instance.isRestart = !0, ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                                isShow: !0,
                                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
                            });
                        }
                    });
            }
        }
        onBackClicked() {
            switch (this.ryw_hideBanner(), this._pageType) {
                case te.otherToRanking:
                    this.ryw_closeView(), console.log("关闭当前页面");
                    break;

                case te.resultToRanking:
                    console.log("不关闭,打开热玩"), ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                        isShow: !0,
                        SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                        ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
                    });
            }
        }
    }
    class _t extends Ye {
        constructor() {
            super(...arguments), this.loopAD = null, this.groupAD = null, this.rankBtn = null,
                this.backBtn = null, this.moreBtn = null, this.startBtn = null, this.labelMoney = null,
                this.labelLevel = null;
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.loopSrc = this.loopAD.getComponent(fe), this.loopSrc.setParam(e);
        }
        onAwake() {
            ie.ryw_instance.ryw_regEvent(u.GAME_START_BEFORE, this.onStartBefore_csryw, this),
                this.startBtn.on("click", this, this.ryw_onStartClicked), this.backBtn.on("click", this, this.ryw_onBackClicked),
                this.moreBtn.on("click", this, this.ryw_MoreClicked), this.rankBtn.on("click", this, this.ryw_onRankClicked),
                this.labelMoney.getChildByName(this.labelMoney.name).text = "" + n.ryw_getMoney(),
                this.labelLevel.getChildByName(this.labelLevel.name).text = "" + n.ryw_getLeveNum(),
                console.log(N.ryw_WudianFlag, O.checkVersions()), N.ryw_WudianFlag && O.checkVersions() ? (console.log(D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn),
                    console.log(D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainMoreBtn),
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ? this.backBtn.visible = !0 : this.backBtn.visible = !1,
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainMoreBtn > 0 ? this.moreBtn.visible = !0 : this.moreBtn.visible = !1,
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainItemBtn > 0 ? this.rankBtn.visible = !0 : this.rankBtn.visible = !1,
                    console.log("ly+++++++++++++++++++++++++++++++", D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainExportShow),
                    1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainExportShow && (this.loopAD.top = -500,
                        this.groupAD.visible = !1), we.ryw_instance.isFirstInGame && (we.ryw_instance.isFirstInGame = !1),
                    D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_moreGameShowLevel >= n.ryw_getLeveNum() - 1 && ie.ryw_instance.ryw_dispatch(g.SHOW_MORE, {
                        isShow: !0,
                        SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip,
                        ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip
                    })) : (console.log("ly===================================="), this.backBtn.visible = !1,
                        this.moreBtn.visible = !1, this.rankBtn.visible = !1, this.loopAD.top = -500, this.groupAD.visible = !1),
                this.ryw_showBanner();
        }
        ryw_onBackClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                isShow: !0,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
            });
        }
        ryw_MoreClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_MORE, {
                isShow: !0,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_tc_SlideSkip
            });
        }
        ryw_onRankClicked() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_RANKING, {
                isShow: !0,
                pageType: te.otherToRanking,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_ForceSkip
            });
        }
        addEvent_csryw() {
            i.ryw_instance.ryw_regEvemt(t.ryw_Game_OnUserMoneyChange, this, this.onUserMoneyChange_csryw);
        }
        removeEvent_csryw() {
            i.ryw_instance.ryw_removeEvent(t.ryw_Game_OnUserMoneyChange, this, this.onUserMoneyChange_csryw);
        }
        onUserMoneyChange_csryw(e) {
            let t = e.curr;
            e.last;
            this.labelMoney.getChildByName(this.labelMoney.name).text = "" + t;
        }
        onStartBefore_csryw() {
            this.ryw_onStartClicked();
        }
        ryw_onStartClicked() {
            N.ryw_WudianFlag && O.checkVersions() && D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_startVideo > 0 ? E.ryw_showRewardedVideoAd(e => {
                this.showCrazy();
            }, () => {
                this.showCrazy();
            }) : this.showCrazy();
        }
        showCrazy() {
            this.ryw_hideBanner(), ie.ryw_instance.ryw_dispatch(g.SHOW_HALL, {
                isShow: !1
            }), N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdian && n.ryw_getLeveNum() % D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_kuangdianLevelSpcacing == 0 ? ie.ryw_instance.ryw_dispatch(g.SHOW_CRAZY, {
                isShow: !0,
                Complete: () => {
                    R.ryw_instance.ryw_openView(w.GameView), ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, !0);
                },
                titel: "一股神秘力量"
            }) : (R.ryw_instance.ryw_openView(w.GameView), ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, !0));
        }
    }
    class lt extends Ye {
        constructor() {
            super(...arguments), this.continueBtn = null, this.loopAD = null, this.hand = null,
                this._isCanClose = !1;
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.loopSrc = this.loopAD.getComponent(Be), this.loopSrc.setParam(e);
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), this.continueBtn.visible = !1, this.continueBtn.on("click", this, this.onContinueBtnClicked),
                Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBtnDelayTime, this, () => {
                    this.continueBtn.visible = !0, we.ryw_instance.isJumpOk = !1, N.ryw_WudianFlag && O.checkVersions() && 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBanner ? Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerShowTime, this, () => {
                        this.ryw_showBanner(), we.ryw_instance.isJumpOk = !0, Laya.timer.once(1e3 * D.ryw_getInstance().ryw_getAppSwitchData().ryw_continueBannerHideTime, this, () => {
                            this._isCanClose = !0, this.ryw_hideBanner();
                        });
                    }) : this._isCanClose = !0;
                }), 1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_handShow ? this.hand.visible = !0 : this.hand.visible = !1;
        }
        onContinueBtnClicked() {
            this._isCanClose && (this.ryw_closeView(), we.ryw_instance.isRestart && (we.ryw_instance.isRestart = !1,
                console.log("游戏初始化."), ne.Getinstance().LoadGame(() => {
                    R.ryw_instance.ryw_openView(w.ryw_MainView);
                })));
        }
    }
    class ht extends Ye {
        constructor() {
            super(...arguments), this.continueBtn = null, this.loopAD = null, this.isClickedContinueBtn = !1,
                this.isStartAction = !1;
        }
        onAwake() {
            super.onAwake(), this.continueBtn.on("click", this, this.onContinueClicked);
        }
        ryw_openView(e) {
            super.ryw_openView(e), this.loopSrc = this.loopAD.getComponent(Be), console.log(this.loopSrc),
                this.loopSrc.setParam(e);
        }
        execAction() {
            this.isStartAction = !0;
            var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
            Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
        }
        ryw_BannerUp() {
            this.ryw_showBanner(), we.ryw_instance.isJumpOk = !0;
        }
        ryw_BtnUp() {
            this.continueBtn.y -= 260, this.isClickedContinueBtn = !0;
        }
        onContinueClicked() {
            N.ryw_WudianFlag && O.checkVersions() ? this.isClickedContinueBtn ? (console.log("close result View..."),
                this.ryw_closeView()) : (we.ryw_instance.isJumpOk = !1, this.isStartAction || (this.isStartAction = !0,
                    this.execAction())) : this.ryw_closeView();
        }
    }
    class ct extends Laya.Script {
        constructor() {
            super(...arguments), this.rotate = 3;
        }
        onUpdate() {
            this.owner.rotation += this.rotate;
        }
    }
    class dt extends Laya.Script {
        onAwake() {
            for (let e = 0; e < this.owner.numChildren; e++) {
                const t = this.owner.getChildAt(e);
                this.runAction(t);
            }
        }
        randomRed(e) { }
        runAction(e) {
            let t = Math.floor(Math.random() * e.getChildByName("colors").numChildren);
            for (let r = 0; r < e.getChildByName("colors").numChildren; r++) {
                e.getChildByName("colors").getChildAt(r).visible = t == r;
            }
            e.getChildByName("red").visible = Math.random() > .5, Laya.Tween.to(e, {
                rotation: -8
            }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    rotation: 0
                }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                    Laya.Tween.to(e, {
                        rotation: 8
                    }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                        Laya.Tween.to(e, {
                            rotation: -15
                        }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                            Laya.Tween.to(e, {
                                rotation: 0
                            }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                Laya.Tween.to(e, {
                                    rotation: 15
                                }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                    Laya.Tween.to(e, {
                                        rotation: -5
                                    }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                        Laya.Tween.to(e, {
                                            rotation: 0
                                        }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                            Laya.Tween.to(e, {
                                                rotation: 5
                                            }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                                Laya.Tween.to(e, {
                                                    rotation: 0
                                                }, 50, Laya.Ease.linearNone, Laya.Handler.create(this, () => {
                                                    Laya.timer.once(500, this, () => {
                                                        e.getComponent(qe).ryw_refresh(), Laya.timer.once(3e3, this, () => {
                                                            this.runAction(e);
                                                        });
                                                    });
                                                }));
                                            }));
                                        }));
                                    }));
                                }));
                            }));
                        }));
                    }));
                }));
            }));
        }
    }
    class gt extends Ye {
        constructor() {
            super(...arguments), this.winSp = null, this.loseSp = null, this.backBtn = null,
                this.continueBtn = null, this.isWin = null, this.isClickedContinueBtn = !1, this.isStartAction = !1;
        }
        ryw_openView(e) {
            this.isWin = e, this.isWin ? (this.winSp.visible = !0, this.loseSp.visible = !1) : (this.winSp.visible = !1,
                this.loseSp.visible = !0);
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(), D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ?
                this.backBtn.active = !0 : this.backBtn.active = !1,
                this.continueBtn.on("click", this, this.onContinueClicked), this.backBtn.on("click", this, this.onBackClicked);
        }
        execAction() {
            this.isStartAction = !0;
            var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
            Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
        }
        ryw_BannerUp() {
            this.ryw_showBanner();
        }
        ryw_BtnUp() {
            this.continueBtn.y -= 260, this.isClickedContinueBtn = !0;
        }
        onContinueClicked(e, t, r) {
            N.ryw_WudianFlag && O.checkVersions() ? this.isClickedContinueBtn ? (console.log("close result View..."),
                this.ryw_closeView()) : this.isStartAction || (this.isStartAction = !0, this.execAction()) : this.ryw_closeView();
        }
        onBackClicked(e, t, r) {
            ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                isShow: !0,
                SlideSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                ForceSkip: D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip
            });
        }
        ryw_closeView() {
            super.ryw_closeView();
        }
    }
    class pt extends Laya.Script {
        onAwake() {
            for (let e = 0; e < this.owner.numChildren; e++) {
                let t = this.owner.getChildAt(e).getComponent(Qe);
                t.ryw_AdPosID = ge.ryw_AniAdLocationID, console.log("top3: onAwake " + t.ryw_AdPosID),
                    t.useRandom = !1;
            }
        }
        onStart() {
            for (let e = 0; e < this.owner.numChildren; e++) {
                let t = this.owner.getChildAt(e).getComponent(Qe);
                t.ryw_AdPosID = ge.ryw_AniAdLocationID, t.ryw_refresh(), console.log("top3: onStart " + t.ryw_AdPosID);
            }
        }
    }
    class ut extends Ye {
        constructor() {
            super(...arguments), this.winSp = null, this.loseSp = null, this.backBtn = null,
                this.continueBtn = null, this.isWin = null, this.isClickedContinueBtn = !1, this.isStartAction = !1;
            this.ryw_ading = false;
        }
        ryw_openView(e) {
            this.isWin = e, this.isWin ?
                (this.winNext.visible = this.winSp.visible = !0,
                    this.failNext.visible = this.loseSp.visible = !1,
                    n.ryw_setLeveNum(n.ryw_getLeveNum() + 1), ye.ryw_getInstance().ryw_saveGameData()) :
                (this.winNext.visible = this.winSp.visible = !1,
                    this.failNext.visible = this.loseSp.visible = !0);
            this.tiliBox.visible = false;
            this.ryw_ading = false;
            if (n.getGameMode() == 2) {
                this.winNext.visible = this.failNext.visible = false;
                this.continueBtn.left = 274;
            } else {
                this.continueBtn.left = 106;
            }
        }
        onAwake() {
            super.onAwake(), this.ryw_hideBanner(),
                D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_mainBackBtn > 0 ? this.backBtn.active = !0 : this.backBtn.active = !1,
                this.continueBtn.on("click", this, this.onContinueClicked),
                this.backBtn.on("click", this, this.onBackClicked);
            this.winNext = this.owner.getChildByName("winNext");
            this.failNext = this.owner.getChildByName("failNext");
            this.tiliBox = this.owner.getChildByName("tiliBox");
            this.noThanks = this.tiliBox.getChildByName("tiliBg").getChildByName("noThanks");
            this.tiliBox.getChildByName("tiliBg").getChildByName("tili").getChildByName("tilizhi").text = "+ " + D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_addVitality,
                this.tiliBox.visible = false;
            this.winNext.on("click", this, this.ryw_closeViewAndStart);
            this.failNext.on("click", this, this.ryw_closeViewAndStart);
            this.noThanks.on("click", this, this.onNoThanks);
            this.tiliBox.getChildByName("tiliBg").getChildByName("videoBtn").on("click", this, this.onVideoBtn);
            platform.getInstance().initList(this.owner.getChildByName("list_showList"));
        }
        onNoThanks() {
            this.ryw_ading || (this.tiliBox.visible = !1);
        }
        onVideoBtn() {
            if (this.ryw_ading) return;
            U.ryw_instance.ryw_stopBGM(), this.ryw_ading = !0, Laya.timer.once(1000, this, () => {
                this && this.ryw_ading && (this.ryw_ading = !1);
            });
            let e = this;
            E.ryw_showRewardedVideoAd(t => {
                if (e.ryw_ading = !1, t) {
                    this.tiliBox.visible = !1;
                    let e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_addVitality,
                        t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_gameConfig.ryw_maxVitality;
                    n.ryw_addTili(e, t), ye.ryw_getInstance().ryw_saveGameData();
                } else this.showVideoTips("未完整观看视频");
                //U.ryw_instance.ryw_playBGM("bgm");
            }, () => {
                e.ryw_ading = !1//, U.ryw_instance.ryw_playBGM("bgm");
            });
        }
        ryw_closeViewAndStart() {
            let e, tt = 0;
            n.ryw_getTili() > 0 ? (D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian && B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version &&
                (e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_SlideSkip,
                    tt = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_ForceSkip), console.log("游戏初始化."),
                ne.Getinstance().LoadGame(() => {
                    n.ryw_subTili(1), i.ryw_instance.ryw_dispatch(t.Sub_Vitality),
                        n.setGameMode(n.getGameMode()),
                        ne.Getinstance().choiceMode(n.getGameMode());
                    let r = new Date().getTime();
                    n.setLeaveMainUITime(r)
                        , ye.ryw_getInstance().ryw_saveGameData(),
                        Laya.timer.frameOnce(10, Laya.stage, () => {
                            i.ryw_instance.ryw_dispatch(t.OnStarGame),
                                R.ryw_instance.ryw_openView(w.GameView),
                                ie.ryw_instance.ryw_dispatch(g.SHOW_GAME, !0);
                        })

                }), super.ryw_closeView()) : this.tiliBox.visible = !0;

        }
        execAction() {
            this.isStartAction = !0;
            var e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_btnMoveTimer, t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_bannerMoveTimer;
            Laya.timer.once(1e3 * t, this, this.ryw_BannerUp), Laya.timer.once(1e3 * e, this, this.ryw_BtnUp);
        }
        ryw_BannerUp() {
            this.ryw_showBanner();
        }
        ryw_BtnUp() {
            this.continueBtn.bottom += 260, this.isClickedContinueBtn = !0;
        }
        onContinueClicked(e, t, r) {
            N.ryw_WudianFlag && O.checkVersions() ? this.isClickedContinueBtn ? (console.log("close result View..."),
                this.ryw_closeView()) : this.isStartAction || (this.isStartAction = !0, this.execAction()) : this.ryw_closeView();
        }
        onBackClicked(e, t, r) {
            let i, n = 0;
            D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian && B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version && (i = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_SlideSkip,
                n = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_hyrw_ForceSkip), ie.ryw_instance.ryw_dispatch(g.SHOW_HOTPLAY, {
                    isShow: !0,
                    SlideSkip: i,
                    ForceSkip: n
                });
        }
        ryw_closeView() {
            let e, t = 0;
            D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian && B.ryw_Versions == D.ryw_getInstance().ryw_getAppSwitchData().ryw_version &&
                (e = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_SlideSkip,
                    t = D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_phb_ForceSkip),
                console.log("游戏初始化."), ne.Getinstance().LoadGame(() => {
                    R.ryw_instance.ryw_openView(w.ryw_MainView);
                }), super.ryw_closeView();
        }
    }
    class mt {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("Mgr/GameMgr.ts", ye), e("View/ButtonCrazy.ts", _e), e("MyScr/GameUI/GameView.ts", le),
                e("View/WXTemplate/WX_KRQ_LoopAdBox.ts", me), e("View/WXTemplate/WX_KRQ_VLoopAd.ts", Be),
                e("View/TemplateViews/WXExport2ViewTemplate.ts", ke), e("View/TemplateViews/WXExprotViewTemplate.ts", Te),
                e("View/ButtonAnim.ts", Ie), e("View/LoadingView/LogoAni.ts", Ve), e("View/LoadingView/LoadingView.ts", be),
                e("View/Login/LoginAlert.ts", De), e("KRQ/Com/KRQ_LoopAd/KRQ_LoopAdBox.ts", Ee),
                e("KRQ/Com/KRQ_LoopAd/KRQ_HLoopAd.ts", xe), e("KRQ/Com/KRQ_GamingBanner.ts", Ne),
                e("KRQ/ViewCom/KRQ_Main.ts", Fe), e("KRQ/Com/KRQ_History/KRQ_HistoryBox.ts", Ge),
                e("KRQ/Com/KRQ_History/KRQ_History.ts", Oe), e("View/TemplateViews/InGame/InGameViewTemplate.ts", He),
                e("View/TemplateViews/Main/MainViewTemplate.ts", Pe), e("KRQ/Com/KRQ_Banner.ts", Me),
                e("View/TemplateViews/Reward/RewardViewTemplate.ts", Ue), e("View/WXTemplate/GameFail/WXGameFailViewTemplate.ts", Xe),
                e("View/WXTemplate/GameWin/WXGameWinViewTemplate.ts", je), e("View/TemplateViews/WXCrazyClick/WXCrazyClick.ts", Ke),
                e("View/TipsView/TipsView.ts", Ze), e("Platform/weixin/pages/CrazyView.ts", Je),
                e("Platform/weixin/pages/ExportView.ts", $e), e("KRQ/Com/KRQ_RollSingleAd.ts", qe),
                e("Platform/weixin/pages/GameView2.ts", et), e("View/WXTemplate/WX_KRQ_HLoopAd.ts", fe),
                e("Platform/weixin/pages/HallView.ts", rt), e("Platform/weixin/pages/HotPlayView.ts", it),
                e("View/Common/ViewAutoScaleByW.ts", nt), e("Platform/weixin/pages/MoreView.ts", at),
                e("Platform/weixin/pages/ryw_CrazyView.ts", st), e("Platform/weixin/pages/ryw_ExportView.ts", ot),
                e("Platform/weixin/pages/ryw_GameView.ts", wt), e("Platform/weixin/pages/ryw_HallView.ts", _t),
                e("Platform/weixin/pages/ryw_HotPlayView.ts", lt), e("Platform/weixin/pages/ryw_MoreView.ts", ht),
                e("Platform/weixin/components/AutoRotaion.ts", ct), e("Platform/weixin/pages/ryw_RankingView.ts", yt),
                e("Platform/weixin/components/SingleExportGroup.ts", dt), e("Platform/weixin/pages/ryw_ResultView.ts", gt),
                e("View/WXTemplate/WX_KRQ_RollSingleAd.ts", Qe), e("Platform/weixin/components/Top3.ts", pt),
                e("Platform/weixin/pages/RankingView.ts", tt), e("Platform/weixin/pages/ResultView.ts", ut);
        }
    }
    mt.width = 750, mt.height = 1334, mt.scaleMode = "exactfit", mt.screenMode = "none",
        mt.alignV = "middle", mt.alignH = "center", mt.startScene = "GameMain.scene", mt.sceneRoot = "",
        mt.debug = !1, mt.stat = !1, mt.physicsDebug = !1, mt.exportSceneToJson = !0, mt.init();
    var ft, Bt = Laya.ClassUtils.regClass;
    !function (e) {
        !function (e) {
            class t extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                "x": 0,
                "type": "Scene",
                "selectedBox": 8,
                "selecteID": 10,
                "searchKey": "Scene",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 27,
                "loadList3D": [
                ],
                "loadList": [
                    "Loading/jz_5.png",
                    "Loading/jz_4.png",
                    "Loading/jz_3.png",
                    "Loading/ziyuanjiazaizhong.png",
                    "Loading/jiazaidunhao.png",
                    "Loading/ren.png",
                    "Loading/you.png",
                    "Loading/wan.png",
                    "Loading/R.png",
                    "Loading/Y.png",
                    "Loading/W.png",
                    "Loading/jiangkangyouxigonggao.png",
                    "Loading/jz_1.png"],
                "label": "Scene",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "Loading/jz_5.png", "sizeGrid": "3,3,2,3", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 24,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Clip",
                        "searchKey": "Clip,Bg",
                        "props": { "y": 0, "x": 1, "width": 750, "name": "Bg", "height": 1334 },
                        "nodeParent": 2,
                        "label": "Bg",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 6,
                        "child": [
                            {
                                "x": 30,
                                "type": "Clip",
                                "searchKey": "Clip,BottomZone",
                                "props": { "right": 0, "name": "BottomZone", "left": 0, "bottom": 100 },
                                "nodeParent": 6,
                                "label": "BottomZone",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 23,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Clip",
                                        "searchKey": "Clip,processBarBg",
                                        "props": { "x": 376, "width": 615, "skin": "Loading/jz_4.png", "pivotY": 22, "pivotX": 308, "name": "processBarBg", "height": 44, "bottom": 150 },
                                        "nodeParent": 23,
                                        "label": "processBarBg",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 8,
                                        "child": [
                                            {
                                                "x": 60,
                                                "type": "Clip",
                                                "searchKey": "Clip,processBar",
                                                "props": { "width": 594, "skin": "Loading/jz_3.png", "pivotY": 13, "name": "processBar", "left": 11, "height": 26, "bottom": 11 },
                                                "nodeParent": 8,
                                                "label": "processBar",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 5,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "x": 60,
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": -24, "x": 308, "texture": "Loading/ziyuanjiazaizhong.png", "pivotY": 12, "pivotX": 72 },
                                                "nodeParent": 8,
                                                "label": "Sprite",
                                                "isOpen": true,
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 10,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 493, "x": 375, "width": 558, "pivotY": 53, "pivotX": 279, "height": 105 },
                                        "nodeParent": 23,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 22,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Text",
                                        "searchKey": "Text,singleGame",
                                        "props": { "y": 410, "x": 296, "runtime": "laya.display.Text", "name": "singleGame", "fontSize": 20, "color": "#6f84a5" },
                                        "nodeParent": 23,
                                        "label": "singleGame",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 25,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 130, "x": 61, "texture": "Loading/jz_1.png" },
                                "nodeParent": 6,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 26,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Script",
                        "switchAble": true,
                        "source": "src/View/LoadingView/LoadingView.ts",
                        "searchKey": "Script,LoadingView",
                        "removeAble": true,
                        "props": { "y": 0, "x": 0, "runtime": "View/LoadingView/LoadingView.ts" },
                        "nodeParent": 2,
                        "label": "LoadingView",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.LoadingUI = t, Bt("ui.View.LoadingUI", t);
        }(e.View || (e.View = {}));
    }(ft || (ft = {}));
    class St {
        static ryw_init() {
            if (1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_isDebug) return;
            console.log("初始化Debug.");
            let e = new Laya.Box();
            e.size(100, 60), e.pos(0, 0), e.on("click", this, () => {
                this.ryw_isOpen || (console.log(this.ryw_cnt++), this.ryw_cnt > 10 && (this.ryw_isOpen = !0,
                    this.ryw_openList()));
            }), e.top = 0, e.left = 0, e.zOrder = this.ryw_zorder, Laya.stage.addChild(e), i.ryw_instance.ryw_regEvemt(t.ryw_Umeng_csryw, this, e => {
                let t = e.event;
                this.ryw_debugUmengInfoList[t] ? this.ryw_debugUmengInfoList[t] = this.ryw_debugUmengInfoList[t] + 1 : this.ryw_debugUmengInfoList[t] = 1;
            });
        }
        static ryw_openList() {
            Laya.Scene.load(w.DebugInfo, Laya.Handler.create(this, function (e) {
                Laya.stage.addChildAt(e, Laya.stage.numChildren), this.ryw_page = e, this.ryw_initInfo();
            }));
        }
        static ryw_showTip(e, t = 2e3) {
            1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_isDebug && (this.ryw_tip.text = e,
                this.ryw_alert.visible = !0, setTimeout(() => {
                    this.ryw_alert.visible = !1;
                }, t));
        }
        static ryw_initInfo() {
            console.log("初始化debug...");
            let e = this.ryw_page.getChildByName("Debug").getChildByName("List");
            e.renderHandler = Laya.Handler.create(this, this.ryw_onListRender, null, !1), e.vScrollBarSkin = "",
                e.array = [], this.ryw_alist = e, this.ryw_alert = this.ryw_page.getChildByName("Alert"),
                this.ryw_tip = this.ryw_alert.getChildByName("Text"), this.ryw_alert.visible = !1,
                this.ryw_page.getChildByName("CloseDebugBtn").on("click", this, () => {
                    console.log("关闭"), this.ryw_page.destroy(), this.ryw_page = null, this.ryw_isOpen = !1;
                }), this.ryw_addFrameNormalInfo();
        }
        static ryw_addFrameNormalInfo() {
            this.ryw_setData("[本地平台版本]:" + B.ryw_Versions), this.ryw_setData("[远端平台版本]:" + O.getVersions()),
                this.ryw_setData("[平台版本号]:" + (O.checkVersions() ? "匹配" : "不匹配")), this.ryw_setData("[游戏名称]:" + B.ryw_GameName),
                this.ryw_setData("[AppID]:" + B.ryw_AppID), this.ryw_setData("[误点总开关 wudian]:" + (0 == Number(D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian) ? "开启" : "关闭")),
                this.ryw_setData("[IP]:" + (N.ryw_GetIpBlocked() ? "屏蔽" : "未屏蔽")), this.ryw_setData("[误点时间]:" + (D.ryw_getInstance().ryw_getAppSwitchData().wudianTimeAvaliable ? "开启" : "关闭")),
                this.ryw_setData("[误点最终结果 误点Flag]:" + (N.ryw_WudianFlag ? "有误点" : "没有误点")), this.ryw_setData("友盟统计开始:");
            for (const e in this.ryw_debugUmengInfoList) if (Object.prototype.hasOwnProperty.call(this.ryw_debugUmengInfoList, e)) {
                let t = "事件：" + e + ",次数: " + this.ryw_debugUmengInfoList[e];
                this.ryw_setData(t);
            }
            this.ryw_setData("友盟统计结束!");
            for (let e = 0; e < this.ryw_otherInfoList.length; e++) {
                const t = this.ryw_otherInfoList[e];
                this.ryw_setData(t);
            }
            this.ryw_alist.refresh();
        }
        static ryw_addOtherInfoList(e) {
            this.ryw_otherInfoList.push(e);
        }
        static ryw_setData(e, t = !1) {
            1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_isDebug && (this.ryw_alist.array.push(e),
                t && this.ryw_refresh());
        }
        static ryw_refresh() {
            this.ryw_alist.refresh();
        }
        static ryw_onListRender(e, t) {
            var r = this.ryw_alist.array[t];
            e.getChildByName("Text").text = r;
        }
    }
    St.ryw_zorder = 999999999, St.ryw_cnt = 0, St.ryw_isOpen = !1, St.ryw_debugUmengInfoList = {},
        St.ryw_otherInfoList = [];
    class Lt {
        constructor() {
            this.videoId = [];
        }
        loadSubPackage(e, t, r, i, n) { }
        loadVideo() { }
        playVideo(e, t, r, i, n) { }
    }
    class vt extends Lt {
        constructor() {
            super(...arguments), this.ctx = Laya.Browser.window.wx, this.videoInstance = null;
        }
        loadSubPackage(e, t, r, i, n) {
            this.ctx.loadSubpackage({
                name: e,
                success: e => {
                    t && t.call(n, e);
                },
                fail: e => {
                    r && r.call(n, e);
                }
            }).onProgressUpdate(e => {
                i && i.call(n, e);
            });
        }
        loadVideo() {
            let e = Laya.Browser.window.wx.createRewardedVideoAd({
                adUnitId: this.videoId[0]
            });
            this.videoInstance || (e.onLoad(e => {
                console.log("激励视频 加载成功", e);
            }), e.onError(e => {
                console.log("激励视频 出错", e), this.videoFailCall && (this.videoCaller ? this.videoFailCall.call(this.videoCaller) : this.videoFailCall());
            }), e.onClose(e => {
                !e || e.isEnded ? (console.log("激励视频 已完整观看"), this.videoFinishCall && (this.videoCaller ? this.videoFinishCall.call(this.videoCaller) : this.videoFinishCall())) : (console.log("激励视频 未完整观看"),
                    this.videoForceCloseCall && (this.videoCaller ? this.videoForceCloseCall.call(this.videoCaller) : this.videoForceCloseCall()));
            })), this.videoInstance = e;
        }
        playVideo(e, t, r, i, n) {
            this.videoFinishCall = e, this.videoForceCloseCall = t, this.videoFailCall = r,
                this.videoCaller = i, n ? (this.videoInstance = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: n
                }), this.videoInstance.load().then(() => {
                    this.showVideo();
                })) : this.showVideo();
        }
        showVideo() {
            this.videoInstance && this.videoInstance.show().catch(e => {
                this.videoInstance.load().then(() => this.videoInstance.show());
            });
        }
    }
    class Ct {
        constructor() {
            Laya.Browser.onMiniGame ? this.api = new vt() : this.api = new Lt();
        }
        static get instance() {
            return null == Ct._instance && (Ct._instance = new Ct()), Ct._instance;
        }
        init(e) {
            this.api.videoId = e.slice(0), this.api.loadVideo();
        }
        loadSubPackage(e, t, r, i, n) {
            this.api.loadSubPackage(e, t, r, i, n);
        }
        loadSubPackages(e, t, r, i, n, a, s = 0) {
            if (s == e.length) return void (n && n.call(this));
            this.api.loadSubPackage(e[s], o => {
                t && t.call(a, o), s++, this.loadSubPackages(e, t, r, i, n, a, s);
            }, o => {
                r && r.call(a, o), Laya.timer.once(500, this, () => {
                    this.loadSubPackages(e, t, r, i, n, a, s);
                });
            }, i, this);
        }
        playVideo(e, t, r, i, n) {
            this.api.playVideo(e, t, r, i, n);
        }
    }
    new class {
        constructor() {
            this._loadingUI = null, this._loadingView = null, this._preLoadRes = new Array(),
                window.Laya3D ? Laya3D.init(mt.width, mt.height) : Laya.init(mt.width, mt.height, Laya.WebGL),
                Laya.stage.scaleMode = mt.scaleMode, Laya.stage.screenMode = mt.screenMode, Laya.stage.alignV = mt.alignV,
                Laya.stage.alignH = mt.alignH, Laya.URL.exportSceneToJson = mt.exportSceneToJson,
                N.ryw_UpdateIpBlockState(),
                B.ryw_ResServer = B.ryw_LocalTestReServer,
                B.UseRYSDK = !1, i.ryw_instance.ryw_regEvemt(t.ryw_Login_Msg, this, this.LoginMsg);
            window.yad = platform.getInstance().createLogo();
            window.yad.centerX = 0;
            window.yad.bottom = 0;
            Laya.timer.loop(1000, n, n.chackTiLi);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION),
                console.log("Main.ts line:63 active version.json");

        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        LoginMsg(e) {
            console.log("LoginMsg:", e), i.ryw_instance.ryw_dispatch(t.ryw_PlatformLoginState, {
                state: 1,
                info: "平台登录失败"
            }), X.ryw_sendLoginReportInfo("平台登录", 1, "平台登录失败," + e.msg),
                n.ryw_initiUser(null), mt.startScene && Laya.Scene.open(mt.startScene, !1, Laya.Handler.create(this, function () { }))
        }
        onConfigLoaded() {
            Laya.URL.customFormat = (e => {
                if (e.indexOf("subRes1") > -1) {
                    let t = "/", r = e.split(t), i = r[0] + t + r[1] + t;
                    e = e.replace(i, "subRes3/LayaScene_level/Conventional/" + r[1] + t);
                }
                return e;
            }), Laya.loader.maxLoader = 50, this.initLoadingView();
            var e = [{
                url: "json/appswitch.json",
                type: Laya.Loader.JSON
            }], r = this;
            Laya.loader.load(e, Laya.Handler.create(this, () => {
                r.setUserScan(), r.loadRes();
            })), i.ryw_instance.ryw_regOnceEvent(t.ryw_App_CloseFirstLoadingView, this, this.closeloadingUI);
        }
        initLoadingView() {
            this._loadingUI = new ft.View.LoadingUI(), Laya.stage.addChild(this._loadingUI),
                this._loadingUI.width = Laya.stage.width, this._loadingUI.height = Laya.stage.height,
                this._loadingView = this._loadingUI.getComponent(be), this._loadingView.ryw_setProcess(0);
        }
        postResToOpenDataContext(e) {
            Laya.Browser.onMiniGame ? (console.log("开始透传资源数据到开放域"), Laya.loader.load(["openRes/Rank.atlas"], Laya.Handler.create(null, function () {
                Laya.MiniAdpter.sendAtlasToOpenDataContext("openRes/Rank.atlas"), console.log("透传资源数据到开放域  完毕！！！"),
                    e && e();
            }))) : e && e();
        }
        preLoad() { }
        loadRes() {
            St.ryw_init(), 1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_isNetWorkGame ? this._loadingView.ryw_SingleGame(!0) : this._loadingView.ryw_SingleGame(!1),
                this.preLoad();
            var e = this._preLoadRes, t = this;
            t.onLoadResComplate();
        }
        ryw_toSingleGame() {
            if (1 != D.ryw_getInstance().ryw_getAppSwitchData().ryw_isNetWorkGame) {
                let e = localStorage.getItem("Lick-Em-All-AllData");
                return e ? n.ryw_initiUser(JSON.parse(e)) : n.ryw_initiUser(null), n.ryw_token = "",
                    n.ryw_openId = "", mt.startScene && Laya.Scene.open(mt.startScene, !1, Laya.Handler.create(this, function () { })),
                    !0;
            }
            return !1;
        }
        setUserScan() {
            Laya.Browser.onMiniGame && (1 == D.ryw_getInstance().ryw_getAppSwitchData().ryw_wxcfg.ryw_setUserScan ? E.ryw_wxLogin(function (t) {
                console.log("扫码功能:开始请求UserScan...");
                let r = N.ryw_isEnterBySerach;
                console.log("扫码功能:当前状态EnterBySerach......" + r), n.ryw_code = t, r ? (St.ryw_addOtherInfoList("扫码功能:正常进入，拉取记录"),
                    console.log("扫码功能:正常进入，拉取记录"), L.ryw_userScanCode({
                        code: t,
                        state: e.ryw_state,
                        gameid: e.ryw_gameid,
                        type: 1,
                        scan: 0
                    }, e => {
                        console.log("扫码功能:获取接口" + JSON.stringify(e)), null != e.data && (console.log("扫码功能:result.data" + e.data),
                            e.data > 0 && (console.log("扫码功能:正常进入，拉取记录，屏蔽扫码人员"), St.ryw_addOtherInfoList("扫码功能:正常进入，拉取记录，屏蔽扫码人员"),
                                D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian = 0));
                    }, e => {
                        console.log("扫码功能:获取失败send pack fail");
                    })) : (console.log("扫码功能:扫码进入的，发送记录"), St.ryw_addOtherInfoList("扫码功能:扫码进入的，发送记录"),
                        L.ryw_userScanCode({
                            code: t,
                            state: e.ryw_state,
                            gameid: e.ryw_gameid,
                            type: 0,
                            scan: 1
                        }, () => {
                            console.log("扫码功能:发送成功send pack success");
                        }, () => {
                            console.log("扫码功能:发送失败send pack fail");
                        }), D.ryw_getInstance().ryw_getAppSwitchData().ryw_wudian = 0);
            }, null) : (console.log("扫码功能:没有启动"), St.ryw_addOtherInfoList("扫码功能:没有启动")));
        }
        onLoadResComplate() {
            i.ryw_instance.ryw_dispatch(t.ryw_Login_Msg, {
                msg: -1
            });
        }
        closeloadingUI() {
            this._loadingUI && !this._loadingUI.destroyed && this._loadingUI.destroy();
        }
    }();
}();