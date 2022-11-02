! function() {
    "use strict";
    class e {
        static getInstance() {
            return this._instance || (this._instance = new this()), this._instance;
        }
        on(e, t) {
            Laya.stage.on(e, this, t);
        }
    }
    e._instance = null;
    class t extends e {
        constructor() {
            super(...arguments), this.m_tableMap = {}, this.m_init = !1, this.m_callback = null;
        }
        checkInit(e) {
            this.m_init ? e() : this.m_callback = e;
        }
        initGameTable(e) {
            for (let t in e) this.registerTable(Laya.loader.getRes(e[t].url), e[t].name);
            this.m_init = !0, this.m_callback && this.m_callback();
        }
        registerTable(e, t) {
            this.m_tableMap[t] || (this.m_tableMap[t] = e);
        }
        getTable(e) {
            return this.m_tableMap[e];
        }
        getTableData(e, t) {
            return this.m_tableMap[e] ? this.m_tableMap[e][t] : null;
        }
    }
    const i = "_musicVolume_",
        s = "_soundVolume_";
    class a {
        static get GlobalTable() {
            return t.getInstance();
        }
        static Init() {
            return !a._init && (this.RandomUtils.initRandomSeed(), this.Music.setMusicPath("music/"),
                a._init = !0, !0);
        }
        static checkInit(e) {
            a.GlobalTable.checkInit(() => {
                e();
            });
        }
    }
    a._init = !1, a.UIManager = null, a.GameData = null, a.GameLogic = null, a.RandomUtils = class extends e {
        constructor() {
            super(...arguments), this.m_aryRandomSeed = [], this.m_nSeedMax = 1e6;
        }
        initRandomSeed() {
            for (var e = 0; e < this.m_nSeedMax; ++e) this.m_aryRandomSeed.push(e);
            for (e = 0; e < this.m_nSeedMax; ++e) {
                var t = Math.floor(Math.random() * this.m_nSeedMax),
                    i = this.m_aryRandomSeed[t];
                this.m_aryRandomSeed[t] = this.m_aryRandomSeed[e], this.m_aryRandomSeed[e] = i;
            }
        }
        limit(e, t) {
            if (e != Math.min(e, t)) {
                var i = t;
                t = e, e = i;
            }
            var s = t - e,
                a = Math.floor(Math.random() * this.m_nSeedMax),
                n = this.m_aryRandomSeed[a];
            return this.m_aryRandomSeed[a] = this.m_aryRandomSeed[0], this.m_aryRandomSeed[0] = n,
                e + this.m_aryRandomSeed[0] / this.m_nSeedMax * s;
        }
        limitInteger(e, t) {
            return Math.round(this.limit(e, t));
        }
        randomArray(e, t) {
            var i = [];
            if ((t = t || 1) >= e.length) i = e;
            else
                for (var s = 0; s < t && i.length < t; ++s) {
                    var a = this.limitInteger(s, e.length - 1),
                        n = e[a];
                    e[a] = e[s], e[s] = n, i.push(e[s]);
                }
            return i;
        }
        shuffleArray(e) {
            var t, i = 0,
                s = [];
            for (var a in e) t = this.limitInteger(0, i++), s[i - 1] = s[t], s[t] = e[a];
            return s;
        }
    }.getInstance(), a.Music = class extends e {
        constructor() {
            super(...arguments), this._resPath = "", this._soundVolume = .5, this._musicVolume = .5;
        }
        setMusicPath(e) {
            Laya.SoundManager.autoStopMusic = !0, this._resPath = e, this.loadMusicSetting();
        }
        playMusic(e) {
            Laya.SoundManager.playMusic(`${this._resPath}${e}.mp3`, 0);
        }
        playSound(e) {
            0 != this._soundVolume && Laya.SoundManager.playSound(`${this._resPath}${e}.mp3`, 1);
        }
        playButtonAudio(e) {
            if (!this._resPath) return;
            let t = "ui_click";
            switch (e) {
                case "cancel":
                    t = "ui_cancel";
                    break;

                case "sel":
                    t = "ui_sel";
            }
            t && this.playSound(t);
        }
        playSoundByOgg(e) {
            0 != this._soundVolume && Laya.SoundManager.playSound(`${this._resPath}${e}.ogg`, 1);
        }
        loadMusicSetting() {
            this._musicVolume = parseFloat(Laya.LocalStorage.getItem(i) || "0.5"), this._soundVolume = parseFloat(Laya.LocalStorage.getItem(s) || "0.5"),
                Laya.SoundManager.setMusicVolume(this._musicVolume), Laya.SoundManager.setSoundVolume(this._soundVolume);
        }
        setMusicVolume(e) {
            this._musicVolume !== e && (this._musicVolume = e, Laya.LocalStorage.setItem(i, `${this._musicVolume}`),
                Laya.SoundManager.setMusicVolume(this._musicVolume));
        }
        getMusicVolume() {
            return this._musicVolume;
        }
        setSoundVolume(e) {
            this._soundVolume !== e && (this._soundVolume = e, Laya.LocalStorage.setItem(s, `${this._soundVolume}`),
                Laya.SoundManager.setSoundVolume(this._soundVolume));
        }
        getSoundVolume() {
            return this._soundVolume;
        }
    }.getInstance();
    for (var n = ["json/StaticShape.json", "json/StaticTaste.json", "json/StaticLevel.json"], o = [], l = 0; l < n.length; l++) {
        var r = n[l],
            h = r.split("/")[1].split(".")[0];
        o.push({
            name: h,
            url: r
        });
    }
    var d = {
            groups: n,
            resources: o
        },
        c = {
            groups: ["scene/Conventional/game.ls", "scene/Conventional/Cylinder01.lh", "scene/Conventional/Cylinder02.lh", "scene/Conventional/Cylinder03.lh", "scene/Conventional/Cylinder04.lh", "scene/Conventional/Cylinder05.lh", "scene/Conventional/Cream_6.lh", "scene/Conventional/Cream_12.lh", "scene/Conventional/Cream_18.lh"]
        };
    const u = {
            MATRIX: 1,
            WX: 2,
            GAME: 3,
            SWITCH: 4
        },
        m = {
            Type_Zero: 0,
            Type_One: 1
        },
        p = {
            BottomBanner_CloseBtn: "_bottomBannerCloseBtnHide",
            BottomBanner_Name: "_bottomBannerNameHide",
            MoreGame_Name: "_moreGameNameHide",
            SlideWindow_Name: "_slideWindowNameHide",
            FullScreen_Name: "_fullScrennNameHide",
            SmallWall_Name: "_smallWallNameHide",
            MainPush_Name: "_mainPushNameHide"
        },
        y = {
            TYPE_FULL_MATRIX: 1,
            TYPE_RECENTLY_USED: 2,
            TYPE_FULL_MIXBANNER: 3
        },
        g = {
            UI_ZORDER_ONE: 1e3,
            UI_ZORDER_TWO: 999,
            UI_ZORDER_THREE: 998
        },
        w = 2,
        L = 3,
        I = {
            MAIN: 1,
            FLOAT: 2,
            MATRIX: 3,
            GUESS: 4,
            MORE: 5,
            GAME: 6,
            OFFLINE: 7,
            BUY_Screen: 8,
            BUY_BOX: 9,
            SMALL_MATRIX_WALL: 10,
            FULL_MATRIX_SCRENN: 11,
            CUSTOM_COMPONENT: 9999
        },
        f = 1,
        S = 2,
        C = 3,
        x = 4,
        _ = 5,
        b = 6,
        v = 7,
        T = 8,
        B = 9,
        M = 10,
        U = 1002,
        A = 8001,
        k = 11001,
        D = {
            Youzi_BottomBanner: 1,
            Youzi_GameBanner: 2,
            Youzi_GuessLike: 3,
            Youzi_MainPush: 4,
            Youzi_MoreGame: 5,
            Youzi_OffLine: 6,
            Youzi_SlideWindow: 7,
            Youzi_SmallWall: 8,
            Youzi_Full: 9
        };
    var G, E = {
        SdkVersion: "laya2.0-v6.6.5",
        resVersion: "1.00.00",
        debug: !1,
        appid: "",
        channelId: 1002,
        bannnerDatas: [],
        itemListDatas: [],
        hotListDatas: [],
        moreDatas: [],
        matrixBannerDatas: [],
        fullMatrixScreenDatas: [],
        mainRecDatas: [],
        buyListDatas: [],
        gameBannerDatas: [],
        offlineBannerDatas: [],
        allBeRecommendGames: {},
        toutiaoMoreGames: [],
        clickGameYouziUIId: 0,
        _userinfo: {
            uid: "",
            gender: 0,
            type: 1
        },
        _platform: 1,
        _isDataLoaded: !1,
        _isLoadFinish: !1,
        _requestErrorCbs: [],
        _loadedCallBacks: [],
        _bannerType: u.MATRIX,
        _fullScreenType: 0,
        _banerShowSwitchInterval: 10,
        _bannerCreateInterval: 20,
        _pageOpen: 1,
        _bannerSwitchs: [],
        _provinceAllow: 1,
        _mainRecAmount: 1,
        _bottomBannerScrollType: m.Type_Zero,
        _bottomBannerCloseBtnHide: !0,
        _bottomBannerNameHide: !1,
        _moreGameNameHide: !1,
        _slideWindowNameHide: !1,
        _fullScrennNameHide: !1,
        _smallWallNameHide: !1,
        _mainPushNameHide: !1,
        _mainPushScale: 1.2,
        _gameIndexArrLength: 1,
        _gameIndexArr: [],
        isInit: !1,
        logObj: {},
        logCount: 0,
        openFullScreenNavigate: !1,
        createGamePageCall: null,
        gamePageCloseCall: null,
        navigateToMiniCall: null,
        aspectRatio: 0,
        init(e, t, i) {
            this.isInit || (Laya.Browser.onIOS ? this._platform = L : Laya.Browser.onAndroid && (this._platform = w),
                console.log("中心化初始化 SdkVersion", this.SdkVersion, e, t, i), this.isInit = !0, this.appid = e || "",
                this.resVersion = t || "1.00.00", this.channelId = i, setInterval(() => {
                    this.logCount > 0 && this.logCount < 15 && this.exposureLogMerge();
                }, 1e4), this._loadUid(), this._loadData(this._initBannerShow.bind(this)), this.channelId != U && this.channelId != k || this._wxLaunch());
        },
        _wxLaunch() {
            if (!Laya.Browser.window.wx) return;
            if (!Laya.Browser.window.wx.getLaunchOptionsSync) return;
            var e = this;
            let t = Laya.Browser.window.wx.getLaunchOptionsSync();
            this._loadUid(), this.checkUserIsImported(t), t.referrerInfo && t.referrerInfo.appId && t.referrerInfo.extraData && t.referrerInfo.extraData.boxAppid && t.referrerInfo.extraData.orgAppid ? this.sendJumpToOpen(t.referrerInfo.extraData.orgAppid, t.referrerInfo.extraData.boxAppid, t.referrerInfo.extraData.locationIndex ? t.referrerInfo.extraData.locationIndex : I.CUSTOM_COMPONENT) : this.openGameInitLog(),
                Laya.Browser.window.wx.onShow(function(t) {
                    e._wxOnShow(t);
                });
        },
        _wxOnShow(e) {
            console.log("wx onShow--------------"), this.checkUserIsImported(e), e.referrerInfo && e.referrerInfo.extraData && e.referrerInfo.extraData.boxAppid && e.referrerInfo.extraData.orgAppid && this.sendJumpToOpen(e.referrerInfo.extraData.orgAppid, e.referrerInfo.extraData.boxAppid, e.referrerInfo.extraData.locationIndex ? e.referrerInfo.extraData.locationIndex : I.CUSTOM_COMPONENT);
        },
        checkUserIsImported(e) {
            (e.referrerInfo && e.referrerInfo.adChannelId && e.referrerInfo.adSubChannelId || e.query && e.query.adChannelId && e.query.adSubChannelId) && (this._userinfo.type = 2),
            (e.referrerInfo && e.referrerInfo.leuokShareIn || e.query && e.query.leuokShareIn) && (this._userinfo.type = 3);
            var t = !1;
            e.referrerInfo && e.referrerInfo.extraData && (e.referrerInfo.extraData.YouziFixUID && e.referrerInfo.extraData.YouziFixUID.trim().length > 0 ? (t = !0,
                this._userinfo.uid = e.referrerInfo.extraData.YouziFixUID) : e.referrerInfo.extraData.YouziUID && e.referrerInfo.extraData.YouziUID.trim().length > 0 && (t = !0,
                this._userinfo.uid = e.referrerInfo.extraData.YouziUID)), e.query && e.query.extraData && e.query.extraData.YouziUID && (t = !0,
                this._userinfo.uid = e.query.YouziUID), t && localStorage.setItem("YOUZI_UID", this._userinfo.uid);
        },
        _loadData(e) {
            if (this.channelId == k) {
                let e = Laya.Browser.window.tt.getSystemInfoSync();
                if (this.compareToutiaoVersion(e.SDKVersion, "1.33.0") < 0 || Laya.Browser.onIOS) return;
            }
            var t = this;
            let i = {
                    appid: t.appid,
                    channelId: t.channelId,
                    languageType: 1,
                    uid: t._userinfo.uid,
                    version: t.resVersion
                },
                s = function() {
                    console.log("中心化数据异常"), t._isLoadFinish = !1, t._isDataLoaded = !1;
                    for (let e = 0; e < t._requestErrorCbs.length; e++) {
                        const i = t._requestErrorCbs[e];
                        i && i();
                    }
                };
            var a = function(i) {
                let s = JSON.parse(JSON.stringify(i));
                if (console.log("中心化数据OK", s), i && i.info && i.info.swith && 1 == i.info.swith) {
                    t._bottomBannerCloseBtnHide = t.jsonHasKey(i.info, "bottomBannerCloseBtnHide") ? i.info.bottomBannerCloseBtnHide : t._bottomBannerCloseBtnHide,
                        t._bottomBannerNameHide = t.jsonHasKey(i.info, "bottomBannerNameHide") ? i.info.bottomBannerNameHide : t._bottomBannerNameHide,
                        t._mainPushNameHide = t.jsonHasKey(i.info, "mainPushNameHide") ? i.info.mainPushNameHide : t._mainPushNameHide,
                        t._mainRecAmount = t.jsonHasKey(i.info, "mainRecAmount") ? i.info.mainRecAmount : 3,
                        t._fullScreenType = t.jsonHasKey(i.info, "screenType") ? i.info.screenType : 0,
                        t._bottomBannerScrollType = t.jsonHasKey(i.info, "bottomBannerScrollType") ? i.info.bottomBannerScrollType : m.Type_Zero,
                        t._mainPushScale = t.jsonHasKey(i.info, "mainPushScale") > 0 ? i.info.mainPushScale : 1.2,
                        t._moreGameNameHide = t.jsonHasKey(i.info, "moreGameNameHide") ? i.info.moreGameNameHide : t._moreGameNameHide,
                        t._slideWindowNameHide = t.jsonHasKey(i.info, "slideWindowNameHide") ? i.info.slideWindowNameHide : t._slideWindowNameHide,
                        t._fullScrennNameHide = t.jsonHasKey(i.info, "fullScrennNameHide") ? i.info.fullScrennNameHide : t._fullScrennNameHide,
                        t._smallWallNameHide = t.jsonHasKey(i.info, "smallWallNameHide") ? i.info.smallWallNameHide : t._smallWallNameHide,
                        t._pageOpen = i.info.status, t._bannerType = i.info.bannerSwith, t._banerShowSwitchInterval = i.info.bannerAutoInterval,
                        t._bannerCreateInterval = i.info.wxBannerRefresh, t._provinceAllow = i.info.provinceAllow;
                    let e = function(e, t) {
                            return t.weight - e.weight;
                        },
                        s = function(i) {
                            return i = i.sort(e), i = t._clearArrIndex(i), i = t._removeItemByTestPeriod(i);
                        };
                    for (let e = 0; e < i.info.recommendListBos.length; e++) {
                        var a = i.info.recommendListBos[e];
                        switch (a.contentBos.forEach(e => {
                            t.allBeRecommendGames.hasOwnProperty.call({}, e.appid) || (t.allBeRecommendGames[e.appid] = Object.assign({}, e));
                        }), console.log("allBeRecommendGames:" + t.allBeRecommendGames), a.type) {
                            case f:
                                t.bannnerDatas = s(a.contentBos);
                                break;

                            case S:
                                t.itemListDatas = s(a.contentBos);
                                break;

                            case C:
                                t.hotListDatas = s(a.contentBos);
                                break;

                            case T:
                                t.moreDatas = s(a.contentBos);
                                break;

                            case B:
                                t.matrixBannerDatas = s(a.contentBos);
                                break;

                            case x:
                                t.mainRecDatas = s(a.contentBos);
                                break;

                            case _:
                                t.gameBannerDatas = s(a.contentBos);
                                break;

                            case b:
                                t.offlineBannerDatas = s(a.contentBos);
                                break;

                            case v:
                                t.buyListDatas = s(a.contentBos);
                                break;

                            case M:
                                t.fullMatrixScreenDatas = s(a.contentBos);
                                break;

                            default:
                                console.log("无此中心化数据类型", a.type);
                        }
                    }
                }
                t.channelId == k && t.setTouTiaoMoreGames(t.moreDatas), t._isDataLoaded = !0, t._isLoadFinish = !0,
                    e && e(i);
                for (let e = 0; e < t._loadedCallBacks.length; e++) {
                    const i = t._loadedCallBacks[e];
                    i && i();
                }
                t._bannerType == u.SWITCH && (t.refreshBannerSwitch(), setInterval(t.refreshBannerSwitch.bind(t), 1e3 * t._banerShowSwitchInterval));
            };
            t.channelId == U ? (console.log("userInfo 调用开始"), t._getWxUserInfo(function() {
                console.log("请求开始"), t._request("POST", i, t._url(), a, s);
            })) : t._request("POST", i, t._url(), a, s);
        },
        _clearArrIndex(e) {
            let t = [];
            for (let i = 0; i < e.length; i++) {
                const s = e[i];
                this._pushData(s.hide) && t.push(s);
            }
            let i = [];
            for (let e = 0; e < t.length; e++) {
                const s = t[e];
                this._pushDataBySexual(s.gender) && i.push(s);
            }
            return i;
        },
        _request(e, t, i, s, a) {
            var n = new XMLHttpRequest();
            n.onreadystatechange = function() {
                if (4 == n.readyState)
                    if (n.status >= 200 && n.status < 400)
                        if ("" != n.responseText) {
                            var e = JSON.parse(n.responseText);
                            s && s(e);
                        } else s && s({});
                else a && a();
            }, n.open(e, i, !0), n.setRequestHeader("content-type", "application/json"), n.send(JSON.stringify(t));
        },
        _loadUid() {
            try {
                let e = function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" == e ? t : 3 & t | 8).toString(16);
                        });
                    },
                    t = localStorage.getItem("YOUZI_UID");
                t && t.trim().length > 0 ? this._userinfo.uid = t : (this._userinfo.uid = e(), localStorage.setItem("YOUZI_UID", this._userinfo.uid));
            } catch (e) {
                this._userinfo.uid = "10001";
            }
        },
        _removeItemByTestPeriod(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if (1 != i.testPeriod && 3 != i.testPeriod || 0 != i.showLimit) {
                    if (2 == i.testPeriod) {
                        var s = localStorage.getItem(i.appid);
                        s && "CPACPS" == s && (e.splice(t, 1), t--);
                    }
                } else {
                    var a = localStorage.getItem(i.appid);
                    if (a && "navigated" == a) continue;
                    e.splice(t, 1), t--;
                }
            }
            return e;
        },
        _url() {
            return this.debug ? "https://test.gw.leuok.com/gl-ms-mini-recommend/recommend/show" : "https://gw.lightlygame.com/gl-ms-mini-recommend/recommend/show";
        },
        _pushData(e) {
            let t = !1;
            switch (e) {
                case 1:
                    t = !0;
                    break;

                case 2:
                    this._platform == w && (t = !0);
                    break;

                case 3:
                    this._platform == L && (t = !0);
                    break;

                default:
                    t = !1;
            }
            return t;
        },
        _pushDataBySexual(e) {
            let t = !1;
            switch (e) {
                case 0:
                    t = !0;
                    break;

                case 1:
                    1 == this._userinfo.gender && (t = !0);
                    break;

                case 2:
                    2 == this._userinfo.gender && (t = !0);
                    break;

                default:
                    t = !1;
            }
            return t;
        },
        _getWxUserInfo(e) {
            var t = this;
            Laya.Browser.window.wx && Laya.Browser.window.wx.getUserInfo ? (console.log("userInfo 调用 start"),
                Laya.Browser.window.wx.getUserInfo({
                    success(i) {
                        t._userinfo.gender = i.userInfo.gender, console.log("userInfo 成功回调请求"), e();
                    },
                    fail(t) {
                        console.log("userInfo 失败回调请求"), e();
                    }
                }), console.log("userInfo 调用 end")) : e();
        },
        _loadTexture(e, t) {},
        fullScreenRandomNavigate() {
            if (this.openFullScreenNavigate && this.mainRecDatas.length > 0) {
                var e = this.getRandomElementFromArray(this.mainRecDatas);
                this.switchStartOtherGame(e, null);
            }
        },
        startOtherGame(e, t) {
            1 == e.jumpShowPage ? this.gamePageStartOtherGame(e, t) : this.switchStartOtherGame(e, t);
        },
        gamePageStartOtherGame(e, t) {
            if (this.channelId != k)
                if (this.createGamePageCall) {
                    let i = this,
                        s = function() {
                            let s = setTimeout(function() {
                                i.switchStartOtherGame(e, t), clearTimeout(s);
                            }, 1500);
                        };
                    this.createGamePageCall(e, {
                        gamePageComplete: s
                    });
                } else this.switchStartOtherGame(e, t);
            else this.switchStartOtherGame(e, t);
        },
        switchStartOtherGame(e, t) {
            switch (this.channelId) {
                case U:
                    1 == e.codeJump ? this.wxPreviewImage(e.chopencode || e.vopencode || e.hopencode, e, t) : this.navigateToOtherGame(e, t);
                    break;

                case k:
                    this.showTouTiaoMoreGamesModal(e, t);
                    break;

                case A:
                    this.navigateToOppoMiniGame(e, t);
                    break;

                default:
                    t && t(!1), this.notifyNavigateFailUIId();
            }
        },
        openGameInitLog() {
            var e = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                t = {
                    logType: "login",
                    channelId: this.channelId,
                    orgAppid: this.appid,
                    uid: this._userinfo.uid,
                    dt: e,
                    sdkVersion: this.SdkVersion
                };
            this.logNavigate(t, function() {
                console.log("log event send YouziSdk init success");
            });
        },
        sendExposureLog(e, t) {
            e ? (this.logCount++, t = t || I.CUSTOM_COMPONENT, this.logObj.hasOwnProperty(t) || (this.logObj[t] = ""),
                this.logObj[t] += e.appid + ",", this.logCount >= 15 && this.exposureLogMerge()) : console.warn("发送曝光日志时,data不存在", e, t);
        },
        exposureLogMerge() {
            let e = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                t = this.logObj;
            this.logObj = {}, this.logCount = 0, Object.keys(t).forEach(i => {
                let s = {
                    logType: "exposure",
                    channelId: this.channelId,
                    orgAppid: this.appid,
                    uid: this._userinfo.uid,
                    languageType: 1,
                    jumpAppid: t[i].slice(0, -1),
                    locationIndex: Number(i),
                    recommendType: 1,
                    screenId: 1,
                    dt: e,
                    sdkVersion: this.SdkVersion
                };
                this.logNavigate(s, function(e) {});
            });
        },
        showTouTiaoMoreGamesModal(e, t) {
            let i = this;
            Laya.Browser.window.tt.onNavigateToMiniProgram(function(e) {}), Laya.Browser.window.tt.showMoreGamesModal({
                appLaunchOptions: this.toutiaoMoreGames,
                success(s) {
                    i.sendGameToGame(e), t && t(!0), console.log("toutiao moregame show success");
                },
                fail(e) {
                    t && t(!1), console.log("toutiao moregame show fail");
                }
            }), Laya.Browser.window.tt.onMoreGamesModalClose(function(e) {});
        },
        setTouTiaoMoreGames(e) {
            e.forEach(e => {
                let t = {
                    togame: e.appid,
                    boxAppid: e.boxAppId,
                    orgAppid: this.appid,
                    YouziUID: this.uid,
                    YouziFixUID: this._userinfo.uid,
                    userType: this._userinfo.type,
                    locationIndex: e.locationIndex ? e.locationIndex : I.CUSTOM_COMPONENT
                };
                this.extraDataLianYun(e, t), this.toutiaoMoreGames.push({
                    appId: e.appid,
                    extraData: t
                });
            });
        },
        navigateToOppoMiniGame(e, t) {
            if (this.debug) console.log("oppo小游戏跳转成功");
            else {
                let i = this;
                console.log("---------\x3e1", e.pkgName);
                let s = e.pkgName.replace(/\s*/g, "");
                console.log("---------\x3e2", s), Laya.Browser.window.qg.navigateToMiniGame({
                    pkgName: s,
                    success: function() {
                        i.sendGameToGame(e), i.closeGamePage(), t && t(!0), console.log("oppo小游戏跳转成功");
                    },
                    fail: function(e) {
                        i.closeGamePage(), i.notifyNavigateFailUIId(), t && t(!1), console.log("oppo小游戏跳转失败：", JSON.stringify(e));
                    }
                });
            }
        },
        extraDataLianYun(e, t) {
            if (e.miniGameArgs && "" != e.miniGameArgs) {
                let i = JSON.parse(e.miniGameArgs),
                    s = Object.keys(i)[0];
                if ("togame" == s || "boxAppid" == s || "orgAppid" == s) return void console.log("联运附加key值冲突");
                t[s] = i[s];
            }
        },
        navigateToOtherGame(e, t) {
            if (!Laya.Browser.window.wx) return t && t(!1), void this.notifyNavigateFailUIId();
            if (!Laya.Browser.window.wx.navigateToMiniProgram) return;
            var i = this;
            let s = e.appid,
                a = !1,
                n = "leuokNull";
            e.boxAppId && "" != e.boxAppId && (a = !0, n = s = e.boxAppId);
            let o = {
                    togame: e.appid,
                    boxAppid: n,
                    orgAppid: i.appid,
                    YouziUID: i.uid,
                    YouziFixUID: i._userinfo.uid,
                    userType: i._userinfo.type,
                    locationIndex: e.locationIndex ? e.locationIndex : I.CUSTOM_COMPONENT
                },
                l = null;
            e.miniProgramArgs && "" != e.miniProgramArgs && (l = e.miniProgramArgs), (e.anChannelId || e.ioChannelId) && (l = null != l ? l + "&anChannelId=" + e.anChannelId + "&ioChannelId=" + e.ioChannelId : "?anChannelId=" + e.anChannelId + "&ioChannelId=" + e.ioChannelId),
                console.log("mimiProgramPath:" + l), i.extraDataLianYun(e, o), console.log("extraData" + JSON.stringify(o)),
                Laya.Browser.window.wx.navigateToMiniProgram({
                    appId: s,
                    path: l,
                    extraData: o,
                    success(s) {
                        i.closeGamePage(), a ? i.sendGameToBox(e) : i.sendGameToGame(e), a = !1, t && t(!0),
                            console.log("navigateToMiniProgram success"), e.testPeriod && "1" == e.testPeriod ? localStorage.setItem(e.appid, "navigated") : "2" == e.testPeriod && localStorage.setItem(e.appid, "CPACPS");
                    },
                    fail(e) {
                        t && t(!1), i.notifyNavigateFailUIId(), i.closeGamePage(), console.log("navigateToMiniProgram fail", e);
                    }
                });
        },
        notifyNavigateFailUIId() {
            switch (this.clickGameYouziUIId) {
                case D.Youzi_MainPush:
                case D.Youzi_BottomBanner:
                case D.Youzi_GuessLike:
                    this.navigateToMiniCall && this.navigateToMiniCall(this.clickGameYouziUIId), this.clickGameYouziUIId = 0;
                    break;

                default:
                    console.log("不需要取消");
            }
        },
        closeGamePage() {
            this.gamePageCloseCall && (this.gamePageCloseCall(), this.gamePageCloseCall = null);
        },
        sendJumpToOpen(e, t, i = 1) {
            let s = "jump2open";
            "leuokNull" == t && (s = "app2open", t = "");
            let a = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                n = {
                    logType: s,
                    userType: this._userinfo.type,
                    channelId: this.channelId,
                    orgAppid: e,
                    boxAppid: t,
                    uid: this._userinfo.uid,
                    languageType: 1,
                    jumpAppid: this.appid,
                    locationIndex: i || I.CUSTOM_COMPONENT,
                    recommendType: 1,
                    screenId: 1,
                    dt: a,
                    sdkVersion: this.SdkVersion
                };
            console.log(n), this.logNavigate(n, function(e) {
                console.log("log event sendJumpToOpen success---");
            });
        },
        sendGameToGame(e) {
            let t = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                i = {
                    logType: "app2app",
                    userType: this._userinfo.type,
                    channelId: this.channelId,
                    orgAppid: this.appid,
                    uid: this._userinfo.uid,
                    languageType: 1,
                    jumpAppid: e.appid,
                    locationIndex: e.locationIndex ? e.locationIndex : I.CUSTOM_COMPONENT,
                    recommendType: e.type,
                    screenId: 1,
                    dt: t,
                    sdkVersion: this.SdkVersion
                };
            console.log(i), this.logNavigate(i, function(e) {
                console.log("log event success---");
            });
        },
        sendGameToBox(e) {
            let t = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                i = {
                    logType: "jump2box",
                    userType: this._userinfo.type,
                    channelId: this.channelId,
                    orgAppid: this.appid,
                    uid: this._userinfo.uid,
                    languageType: 1,
                    boxAppid: e.boxAppId,
                    jumpAppid: e.appid,
                    locationIndex: e.locationIndex ? e.locationIndex : I.CUSTOM_COMPONENT,
                    recommendType: e.type,
                    screenId: 1,
                    dt: t,
                    sdkVersion: this.SdkVersion
                };
            console.log(i), this.logNavigate(i, function(e) {
                console.log("log event success---");
            });
        },
        wxPreviewImage(e, t, i) {
            let s = this;
            Laya.Browser.window.wx.previewImage({
                current: e,
                urls: [e],
                success: function() {
                    i && i(!0), s.sendGameByQrcode(t);
                },
                fail: function() {
                    i && i(!1);
                }
            });
        },
        sendGameByQrcode(e) {
            let t = this.YouziDateFtt("yyyy-MM-dd hh:mm:ss", new Date()),
                i = {
                    logType: "showcode",
                    userType: this._userinfo.type,
                    channelId: this.channelId,
                    orgAppid: this.appid,
                    uid: this._userinfo.uid,
                    languageType: 1,
                    jumpAppid: e.appid,
                    locationIndex: e.locationIndex ? e.locationIndex : I.CUSTOM_COMPONENT,
                    recommendType: e.type,
                    screenId: 1,
                    dt: t,
                    sdkVersion: this.SdkVersion
                };
            console.log(i), this.logNavigate(i, function(e) {
                console.log("log event success---");
            });
        },
        logNavigate(e, t) {
            console.log("send log---\x3e" + e), this.debug || this._request("POST", e, "https://bi.log.lightlygame.com/recommend/", t);
        },
        YouziDateFtt(e, t) {
            var i = {
                "M+": t.getMonth() + 1,
                "d+": t.getDate(),
                "h+": t.getHours(),
                "m+": t.getMinutes(),
                "s+": t.getSeconds(),
                "q+": Math.floor((t.getMonth() + 3) / 3),
                S: t.getMilliseconds()
            };
            for (var s in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                    i) new RegExp("(" + s + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
            return e;
        },
        getDatasByBIType(e) {
            return 1 == e ? this.mainRecDatas : 2 == e ? this.hotListDatas : 3 === e || 4 == e ? this.matrixBannerDatas : 5 === e || 10 === e ? this.moreDatas : 6 == e ? this.gameBannerDatas : 7 == e ? this.offlineBannerDatas : 8 == e || 9 == e ? this.buyListDatas : (console.error("未找到中心化数据 locationIndex", e), []);
        },
        _initBannerShow() {
            if (this._bannerType == u.MATRIX || this._bannerType == u.GAME || this._bannerType == u.WX)
                for (let e = 0; e < this._bannerSwitchs.length; e++) {
                    const t = this._bannerSwitchs[e];
                    if (t.destroyed) {
                        if (this._bannerSwitchs.splice(e, 1), e--, this._bannerSwitchs.length <= 0) break;
                    } else t && t.bannerType == this._bannerType ? t.showBanner() : t && t.hideBanner();
                } else if (this._bannerType == u.SWITCH)
                    for (let e = 0; e < this._bannerSwitchs.length; e++) {
                        const t = this._bannerSwitchs[e];
                        t && t.bannerType == u.MATRIX ? t.showBanner() : t && t.hideBanner();
                    }
        },
        getMultiMainAmount(e) {
            return e >= this._mainRecAmount ? this._mainRecAmount >= this.mainRecDatas.length ? [this.mainRecDatas.length, !1] : [this._mainRecAmount, !0] : e >= this.mainRecDatas.length ? [this.mainRecDatas.length, !1] : [e, !0];
        },
        getGamesIndex(e, t) {
            if (0 == this._gameIndexArr.length) {
                this._gameIndexArrLength = e;
                for (let t = 0; t < e; t++) this._gameIndexArr.push(t);
            } else if (e != this._gameIndexArrLength) {
                this._gameIndexArrLength = e;
                for (let t = 0; t < e; t++) this._gameIndexArr.push(t);
            }
            if (e <= t) return this._gameIndexArr; {
                let i, s;
                for (; e;) s = Math.floor(Math.random() * e--), i = this._gameIndexArr[e], this._gameIndexArr[e] = this._gameIndexArr[s],
                    this._gameIndexArr[s] = i;
                return this._gameIndexArr.slice(0, t);
            }
        },
        getRandomArrayElements(e, t) {
            for (var i, s, a = e.length; a;) s = Math.floor(Math.random() * a--), i = e[a],
                e[a] = e[s], e[s] = i;
            return e.slice(0, t);
        },
        getRandomElementFromArray: e => e[Math.floor(Math.random() * e.length)],
        addBanner(e) {
            this._destroyUnuseWxBanner(e), this._bannerSwitchs.push(e), this._isDataLoaded && this._initBannerShow();
        },
        refreshBannerSwitch() {
            this.curBannerType || (this.curBannerType = u.WX), this.curBannerType = this.curBannerType == u.WX ? u.MATRIX : u.WX;
            for (let e = 0; e < this._bannerSwitchs.length; e++) {
                let t = this._bannerSwitchs[e];
                t && t.bannerType == this.curBannerType ? t.showBanner() : t && t.hideBanner();
            }
        },
        _destroyUnuseWxBanner(e) {
            if (e.bannerType == u.WX)
                for (let e = 0; e < this._bannerSwitchs.length; e++) {
                    let t = this._bannerSwitchs[e];
                    if (t && t.bannerType == u.WX) return t.destroySelf(), void this._bannerSwitchs.splice(e, 1);
                }
        },
        _checkExposureInview(e, t, i, s, a) {},
        getDataByAppId(e) {
            let t = this._getDataByAppid(this.mainRecDatas, e);
            return t || (t = this._getDataByAppid(this.hotListDatas, e)), t || (t = this._getDataByAppid(this.buyListDatas, e)),
                t;
        },
        getDataFromAllGameObj(e) {
            return this.allBeRecommendGames[e];
        },
        _getDataByAppid(e, t) {
            for (let i = 0; i < e.length; i++)
                if (e[i].appid == t) return e[i];
            return null;
        },
        scrollviewAction(e, t, i) {},
        miscClampf(e, t, i) {
            if (t > i) {
                var s = t;
                t = i, i = s;
            }
            return e < t ? t : e < i ? e : i;
        },
        BI_AppOnce(e) {
            let t = this.getBI();
            t && t.leuok && t.leuok.appOnce(e);
        },
        BI_Action(e) {
            let t = this.getBI();
            t && t.leuok && t.leuok.action(e);
        },
        BI_WXBannerError(e) {
            let t = this.getBI();
            t && t.leuok && t.leuok.error(e);
        },
        getBI: () => void 0 !== Laya.Browser.window.wx ? Laya.Browser.window.wx : void 0 !== Laya.Browser.window.BK ? Laya.Browser.window.BK : void 0 !== Laya.Browser.window.qg ? Laya.Browser.window.qg : "undefined" != typeof window ? window : void 0,
        youziLog(e, t) {
            this.debug && console.log(e, t);
        },
        readFile(e, t) {
            Laya.Browser.window.wx && Laya.Browser.window.wx.getFileSystemManager().readFile({
                filePath: e,
                encoding: "utf-8",
                success: function(e) {
                    t(e.data), console.log("----\x3ereadFile success:", e.data);
                },
                fail: function(e) {
                    console.log("----\x3ereadFile fail:", e.errMsg);
                }
            });
        },
        writeFile(e, t) {
            Laya.Browser.window.wx && Laya.Browser.window.wx.getFileSystemManager().writeFile({
                filePath: e,
                data: t,
                encoding: "utf-8",
                success: function() {
                    console.log("-----\x3ewrite file success");
                },
                fail: function(e) {
                    console.log("-----\x3ewrite file fail:", e.errMsg);
                }
            });
        },
        getAspectRatio() {
            return this.aspectRatio;
        },
        jsonHasKey: (e, t) => e.hasOwnProperty(t),
        getDataLoaded() {
            return this._isDataLoaded;
        },
        getBottomCloseBtnHide() {
            return this._bottomBannerCloseBtnHide;
        },
        getBottomNameHide() {
            return this._bottomBannerNameHide;
        },
        getMainNameHide() {
            return this._mainPushNameHide;
        },
        getMainNameHideScale() {
            return this._mainPushScale;
        },
        setPropertiesValue(e, t) {
            this[e] = t;
        },
        getPropertiesValue(e) {
            return this[e];
        },
        openFullNavigate(e) {
            this.openFullScreenNavigate = e;
        },
        getOpenFullNavigate() {
            return this.openFullScreenNavigate;
        },
        getIsVertical: () => !(Laya.stage.width > Laya.stage.height),
        dataNullReset(e) {
            this[e].length <= 0 && (this[e] = this.moreDatas);
        },
        compareToutiaoVersion(e, t) {
            e = e.split("."), t = t.split(".");
            const i = Math.max(e.length, t.length);
            for (; e.length < i;) e.push("0");
            for (; t.length < i;) t.push("0");
            for (let s = 0; s < i; s++) {
                const i = parseInt(e[s]),
                    a = parseInt(t[s]);
                if (i > a) return 1;
                if (i < a) return -1;
            }
            return 0;
        }
    };
    ! function(e) {
        ! function(e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                type: "View",
                props: {
                    width: 720,
                    visible: !0,
                    name: "YouziBottomView",
                    height: 170
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        visible: !1,
                        var: "BannerBottomUI",
                        sizeGrid: "12,10,0,10",
                        height: 170
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "bannerBottomBg",
                            skin: "youziTexture/two_round_corner.png",
                            sizeGrid: "10,12,5,12",
                            height: 170
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 37.5,
                            x: 14,
                            skin: "youziTexture/txt_hotgame_v.png",
                            name: "bannerTitle"
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            y: 20,
                            x: 47,
                            width: 670,
                            var: "bottomList",
                            spaceY: 5,
                            spaceX: 24,
                            repeatY: 1,
                            repeatX: 4,
                            height: 150
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 110,
                                renderType: "render",
                                name: "render",
                                height: 150
                            },
                            compId: 7,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 110,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 110
                                },
                                compId: 13
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 110,
                                    name: "icon",
                                    height: 110
                                },
                                compId: 8
                            }, {
                                type: "Label",
                                props: {
                                    y: 130,
                                    x: 55,
                                    name: "namelab",
                                    fontSize: 20,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 9
                            }]
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 5.5,
                            x: 685,
                            width: 32,
                            var: "closeBtn",
                            stateNum: 1,
                            skin: "youziTexture/youzi_bottom_close.png",
                            height: 32
                        },
                        compId: 14
                    }]
                }],
                loadList: ["youziTexture/two_round_corner.png", "youziTexture/txt_hotgame_v.png", "youziTexture/youzi_bottom_close.png"],
                loadList3D: []
            }, e.Youzi_BottomBannerUI = t;
            class i extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "Scene",
                props: {
                    width: 720,
                    name: "YouziFullMixBanner",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        var: "FullMixBannerUI",
                        height: 1280
                    },
                    compId: 39,
                    child: [{
                        type: "Image",
                        props: {
                            y: -560,
                            x: -240,
                            width: 1200,
                            var: "MaskBg",
                            skin: "youziTexture/youzi_black.png",
                            sizeGrid: "3,3,3,3",
                            mouseEnabled: !1,
                            height: 2400
                        },
                        compId: 18
                    }, {
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "LineAndLabel",
                            mouseEnabled: !1,
                            height: 1280
                        },
                        compId: 22,
                        child: [{
                            type: "Line",
                            props: {
                                y: 122,
                                x: 63,
                                toY: 0,
                                toX: 200,
                                lineWidth: 2,
                                lineColor: "#ffffff"
                            },
                            compId: 21
                        }, {
                            type: "Line",
                            props: {
                                y: 121,
                                x: 455,
                                toY: 0,
                                toX: 200,
                                lineWidth: 2,
                                lineColor: "#ffffff"
                            },
                            compId: 30
                        }, {
                            type: "Line",
                            props: {
                                y: 363,
                                x: 30,
                                toY: 0,
                                toX: 221.4,
                                lineWidth: 2,
                                lineColor: "#ffffff"
                            },
                            compId: 32
                        }, {
                            type: "Line",
                            props: {
                                y: 363,
                                x: 463,
                                toY: 0,
                                toX: 221.4,
                                lineWidth: 2,
                                lineColor: "#ffffff"
                            },
                            compId: 33
                        }, {
                            type: "Box",
                            props: {
                                y: 80,
                                x: 260,
                                width: 200,
                                var: "Box_Label",
                                height: 320
                            },
                            compId: 42,
                            child: [{
                                type: "Label",
                                props: {
                                    y: 28,
                                    x: 36,
                                    valign: "middle",
                                    text: "好友在玩",
                                    overflow: "hidden",
                                    fontSize: 32,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 31
                            }, {
                                type: "Label",
                                props: {
                                    y: 269,
                                    x: 36,
                                    valign: "middle",
                                    text: "热门推荐",
                                    fontSize: 32,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 34
                            }]
                        }]
                    }, {
                        type: "Button",
                        props: {
                            y: 62,
                            x: 61,
                            width: 87,
                            var: "CloseBtn",
                            mouseEnabled: !0,
                            height: 37
                        },
                        compId: 37,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 32,
                                skin: "youziTexture/fanhui.png",
                                height: 30
                            },
                            compId: 36
                        }, {
                            type: "Label",
                            props: {
                                y: 10,
                                x: 41.5,
                                visible: !0,
                                valign: "middle",
                                text: "返回",
                                fontSize: 20,
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 35
                        }]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 162,
                            x: 40,
                            width: 640,
                            var: "BannerUI",
                            height: 140
                        },
                        compId: 3,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 640,
                                skin: "youziTexture/bg_small_wall.png",
                                sizeGrid: "11,13,13,11",
                                height: 140
                            },
                            compId: 5
                        }, {
                            type: "List",
                            props: {
                                y: 10,
                                x: 0,
                                width: 640,
                                var: "BannerUIList",
                                spaceX: 15,
                                repeatY: 1,
                                repeatX: 4,
                                height: 120
                            },
                            compId: 6,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 0,
                                    x: 12,
                                    width: 120,
                                    renderType: "render",
                                    name: "render",
                                    height: 120
                                },
                                compId: 7,
                                child: [{
                                    type: "Animation",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 120,
                                        name: "iconAnima",
                                        height: 120
                                    },
                                    compId: 38
                                }, {
                                    type: "Image",
                                    props: {
                                        width: 120,
                                        name: "icon",
                                        height: 120
                                    },
                                    compId: 8
                                }]
                            }]
                        }]
                    }, {
                        type: "Sprite",
                        props: {
                            y: 408,
                            x: 18,
                            width: 685,
                            var: "MixListUI",
                            height: 720
                        },
                        compId: 4,
                        child: [{
                            type: "List",
                            props: {
                                width: 685,
                                var: "MixList",
                                spaceY: 18,
                                spaceX: 18,
                                repeatY: 3,
                                repeatX: 3,
                                height: 720
                            },
                            compId: 9,
                            child: [{
                                type: "Box",
                                props: {
                                    y: 0,
                                    x: 10,
                                    width: 210,
                                    renderType: "render",
                                    name: "render",
                                    height: 210
                                },
                                compId: 11,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 0,
                                        x: 0,
                                        width: 210,
                                        skin: "youziTexture/icon_bg.png",
                                        sizeGrid: "5,5,5,5",
                                        name: "boxBg",
                                        height: 210
                                    },
                                    compId: 12
                                }, {
                                    type: "Animation",
                                    props: {
                                        y: 5,
                                        x: 5,
                                        width: 200,
                                        name: "iconAnima",
                                        height: 200
                                    },
                                    compId: 13
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 5,
                                        x: 5,
                                        width: 200,
                                        name: "icon",
                                        height: 200
                                    },
                                    compId: 14
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 159,
                                        x: 5,
                                        width: 200,
                                        skin: "youziTexture/blank.png",
                                        sizeGrid: "0,0,0,0",
                                        name: "namelabBG",
                                        height: 46
                                    },
                                    compId: 15
                                }, {
                                    type: "Image",
                                    props: {
                                        y: 10,
                                        x: 140,
                                        width: 65,
                                        skin: "youziTexture/youzi_hotgame.png",
                                        name: "redhit",
                                        height: 30
                                    },
                                    compId: 16
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 159,
                                        x: 5,
                                        width: 200,
                                        valign: "middle",
                                        overflow: "hidden",
                                        name: "namelab",
                                        height: 46,
                                        fontSize: 24,
                                        color: "#ffffff",
                                        align: "center"
                                    },
                                    compId: 17
                                }]
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/youzi_black.png", "youziTexture/fanhui.png", "youziTexture/bg_small_wall.png", "youziTexture/icon_bg.png", "youziTexture/blank.png", "youziTexture/youzi_hotgame.png"],
                loadList3D: []
            }, e.Youzi_FullMixBannerUI = i;
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    width: 720,
                    name: "YouziFullScreen",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: -560,
                        x: -240,
                        width: 1200,
                        var: "BG",
                        skin: "youziTexture/youzi_black.png",
                        sizeGrid: "5,5,5,5",
                        mouseEnabled: !1,
                        height: 2400
                    },
                    compId: 3
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        visible: !1,
                        var: "FullScreenUI",
                        height: 1280
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            y: 57.5,
                            x: 258,
                            skin: "youziTexture/youzi_full_title.png",
                            name: "title"
                        },
                        compId: 13
                    }, {
                        type: "Button",
                        props: {
                            y: 57.5,
                            x: 42,
                            var: "closeFullScreen",
                            stateNum: 1,
                            skin: "youziTexture/fanhui.png",
                            gray: !0
                        },
                        compId: 10
                    }, {
                        type: "List",
                        props: {
                            y: 140,
                            x: 17.5,
                            width: 685,
                            var: "FullScreenList",
                            spaceY: 18,
                            spaceX: 18,
                            repeatY: 4,
                            repeatX: 3,
                            height: 1e3
                        },
                        compId: 4,
                        child: [{
                            type: "Box",
                            props: {
                                x: 10,
                                width: 210,
                                renderType: "render",
                                name: "render",
                                height: 210
                            },
                            compId: 6,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 210,
                                    skin: "youziTexture/icon_bg.png",
                                    sizeGrid: "5,5,5,5",
                                    name: "boxBg",
                                    height: 210
                                },
                                compId: 14
                            }, {
                                type: "Animation",
                                props: {
                                    y: 5,
                                    x: 5,
                                    width: 200,
                                    name: "iconAnima",
                                    height: 200
                                },
                                compId: 12
                            }, {
                                type: "Image",
                                props: {
                                    y: 5,
                                    x: 5,
                                    width: 200,
                                    name: "icon",
                                    height: 200
                                },
                                compId: 7
                            }, {
                                type: "Image",
                                props: {
                                    y: 159,
                                    x: 5,
                                    width: 200,
                                    skin: "youziTexture/blank.png",
                                    sizeGrid: "0,0,0,0",
                                    name: "namelabBG",
                                    height: 46
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    y: 10,
                                    x: 140,
                                    width: 65,
                                    skin: "youziTexture/youzi_hotgame.png",
                                    name: "redhit",
                                    height: 30
                                },
                                compId: 11
                            }, {
                                type: "Label",
                                props: {
                                    y: 159,
                                    x: 5,
                                    width: 200,
                                    valign: "middle",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 46,
                                    fontSize: 24,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 8
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/youzi_black.png", "youziTexture/youzi_full_title.png", "youziTexture/fanhui.png", "youziTexture/icon_bg.png", "youziTexture/blank.png", "youziTexture/youzi_hotgame.png"],
                loadList3D: []
            }, e.Youzi_FullScreenUI = s;
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                type: "View",
                props: {
                    width: 1280,
                    height: 720
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: -240,
                        x: -560,
                        width: 2400,
                        var: "BG",
                        skin: "youziTexture/youzi_black.png",
                        sizeGrid: "5,5,5,5",
                        mouseEnabled: !1,
                        height: 1200
                    },
                    compId: 4
                }, {
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 1280,
                        visible: !1,
                        var: "FullScreenUI",
                        height: 720
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 464,
                            x: 63,
                            width: 204,
                            skin: "youziTexture/youzi_full_title.png",
                            rotation: -90,
                            name: "title",
                            height: 59
                        },
                        compId: 14
                    }, {
                        type: "Button",
                        props: {
                            y: 657,
                            x: 63,
                            width: 49,
                            var: "closeFullScreen",
                            stateNum: 1,
                            skin: "youziTexture/fanhui.png",
                            rotation: -90,
                            height: 43,
                            gray: !0
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            y: 20,
                            x: 165,
                            width: 1e3,
                            var: "FullScreenList",
                            spaceY: 16,
                            spaceX: 18,
                            repeatY: 3,
                            repeatX: 4,
                            height: 680
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 220,
                                x: 0,
                                width: 210,
                                rotation: -90,
                                renderType: "render",
                                name: "render",
                                height: 210
                            },
                            compId: 7,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 210,
                                    skin: "youziTexture/icon_bg.png",
                                    sizeGrid: "5,5,5,5",
                                    height: 210
                                },
                                compId: 13
                            }, {
                                type: "Animation",
                                props: {
                                    y: 5,
                                    x: 5,
                                    width: 200,
                                    name: "iconAnima",
                                    height: 200
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    y: 5,
                                    x: 5,
                                    width: 200,
                                    name: "icon",
                                    height: 200
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    y: 159,
                                    x: 5,
                                    width: 200,
                                    skin: "youziTexture/blank.png",
                                    height: 46
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: 5,
                                    x: 140,
                                    width: 65,
                                    skin: "youziTexture/youzi_hotgame.png",
                                    name: "redhit",
                                    height: 30
                                },
                                compId: 11
                            }, {
                                type: "Label",
                                props: {
                                    y: 159,
                                    x: 5,
                                    width: 200,
                                    valign: "middle",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 46,
                                    fontSize: 24,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 12
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/youzi_black.png", "youziTexture/youzi_full_title.png", "youziTexture/fanhui.png", "youziTexture/icon_bg.png", "youziTexture/blank.png", "youziTexture/youzi_hotgame.png"],
                loadList3D: []
            }, e.Youzi_FullScreenHUI = a;
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 640,
                    visible: !1,
                    name: "YouziGameBanner",
                    height: 170
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        y: 0,
                        x: 0,
                        width: 640,
                        visible: !0,
                        var: "GameBannerList",
                        spaceY: 5,
                        spaceX: 5,
                        repeatY: 1,
                        repeatX: 1,
                        height: 170
                    },
                    compId: 10,
                    child: [{
                        type: "Box",
                        props: {
                            y: 1,
                            x: 0,
                            width: 640,
                            renderType: "render",
                            name: "render",
                            height: 170
                        },
                        compId: 11,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 640,
                                name: "icon",
                                height: 170
                            },
                            compId: 12
                        }]
                    }]
                }],
                loadList: [],
                loadList3D: []
            }, e.Youzi_GameBannerViewUI = n;
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView);
                }
            }
            o.uiView = {
                type: "View",
                props: {
                    width: 464,
                    name: "YouziGuessLikeView",
                    height: 124
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 464,
                        visible: !1,
                        var: "guessUI",
                        height: 124
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 464,
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "10,10,10,10",
                            name: "guessLikeBg",
                            height: 124
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 15,
                            x: 28,
                            skin: "youziTexture/txt_guesslike_v.png",
                            name: "guessTitle"
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            y: 19,
                            x: 87,
                            width: 369,
                            var: "guesslist",
                            spaceX: 18,
                            repeatY: 1,
                            repeatX: 3,
                            height: 90
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 90,
                                renderType: "render",
                                name: "render",
                                height: 90
                            },
                            compId: 7,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 90,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 90
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 90,
                                    name: "icon",
                                    height: 90
                                },
                                compId: 8
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_v.png"],
                loadList3D: []
            }, e.Youzi_GuessLikeUI = o;
            class l extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(l.uiView);
                }
            }
            l.uiView = {
                type: "View",
                props: {
                    x: 0,
                    width: 124,
                    renderType: "render",
                    name: "YouziGuessLikeViewH",
                    height: 464
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 124,
                        visible: !1,
                        var: "guessUI",
                        height: 464,
                        drawCallOptimize: !0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 124,
                            var: "guessLikeBg",
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "8,8,8,8",
                            scaleX: 1,
                            rotation: 0,
                            height: 464
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 30,
                            x: 12,
                            width: 100,
                            var: "title",
                            skin: "youziTexture/txt_guesslike_h.png",
                            rotation: 0,
                            height: 26
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            y: 289,
                            x: 17,
                            width: 90,
                            var: "guesslist",
                            spaceY: 18,
                            rotation: 0,
                            repeatY: 3,
                            repeatX: 1,
                            pivotY: 210,
                            height: 385,
                            disabled: !1
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 90,
                                name: "render",
                                height: 90
                            },
                            compId: 7,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 90,
                                    name: "iconAnima",
                                    height: 90
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 90,
                                    name: "icon",
                                    height: 90
                                },
                                compId: 8
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png"],
                loadList3D: []
            }, e.Youzi_GuessLikeHUI = l;
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(r.uiView);
                }
            }
            r.uiView = {
                type: "View",
                props: {
                    width: 102,
                    visible: !1,
                    name: "YouziMainPushView",
                    mouseEnabled: !0,
                    height: 124
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        width: 160,
                        visible: !1,
                        var: "btnMainRecBg",
                        pivotX: 80,
                        height: 140,
                        centerX: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 51,
                            width: 160,
                            var: "iconBg",
                            skin: "youziTexture/icon_bg.png",
                            sizeGrid: "5,5,5,5",
                            pivotX: 80,
                            height: 140
                        },
                        compId: 8
                    }, {
                        type: "Button",
                        props: {
                            y: 0,
                            x: 51,
                            width: 160,
                            visible: !0,
                            var: "btnMainRec",
                            stateNum: 1,
                            pivotX: 80,
                            height: 120,
                            cacheAs: "none"
                        },
                        compId: 4,
                        child: [{
                            type: "Animation",
                            props: {
                                y: 0,
                                x: 45,
                                width: 92,
                                visible: !1,
                                var: "mainAnima",
                                pivotX: 46,
                                height: 90
                            },
                            compId: 7
                        }, {
                            type: "Text",
                            props: {
                                y: 120,
                                centerX: 0,
                                width: 160,
                                var: "slogan",
                                valign: "middle",
                                pivotY: 0,
                                pivotX: 0,
                                overflow: "hidden",
                                height: 1,
                                fontSize: 18,
                                bold: !0,
                                align: "center",
                                runtime: "laya.display.Text"
                            },
                            compId: 5
                        }]
                    }]
                }],
                loadList: ["youziTexture/icon_bg.png"],
                loadList3D: []
            }, e.Youzi_MainPushUI = r;
            class h extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView);
                }
            }
            h.uiView = {
                type: "View",
                props: {
                    y: 0,
                    x: 0,
                    width: 720,
                    visible: !1,
                    name: "YouziMoreGameView",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: -560,
                        x: -240,
                        width: 1200,
                        var: "maskBG",
                        skin: "youziTexture/blank.png",
                        height: 2400
                    },
                    compId: 34
                }, {
                    type: "Sprite",
                    props: {
                        y: 200,
                        x: 95,
                        width: 530,
                        visible: !1,
                        var: "MoreGameUI",
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        height: 880
                    },
                    compId: 12,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 530,
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "8,8,8,8",
                            name: "panel",
                            height: 880
                        },
                        compId: 14
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 103,
                            skin: "youziTexture/main_title.png",
                            name: "title"
                        },
                        compId: 15
                    }, {
                        type: "Button",
                        props: {
                            y: -11,
                            x: 498,
                            width: 42,
                            var: "moreGameCloseBtn",
                            stateNum: 1,
                            skin: "youziTexture/close_button.png",
                            labelSize: 26,
                            labelPadding: "-50",
                            height: 46
                        },
                        compId: 16
                    }, {
                        type: "List",
                        props: {
                            y: 59,
                            x: 25,
                            width: 480,
                            var: "moreGameList",
                            spaceY: 12,
                            spaceX: 28,
                            repeatY: 4,
                            repeatX: 3,
                            height: 820
                        },
                        compId: 17,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 140,
                                renderType: "render",
                                name: "render",
                                height: 180
                            },
                            compId: 18,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 140,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 140
                                },
                                compId: 33
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 140,
                                    name: "icon",
                                    height: 140
                                },
                                compId: 31
                            }, {
                                type: "Label",
                                props: {
                                    y: 166,
                                    x: 70,
                                    width: 140,
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 30,
                                    fontSize: 26,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 20
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png"],
                loadList3D: []
            }, e.Youzi_MoreGameUI = h;
            class d extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(d.uiView);
                }
            }
            d.uiView = {
                type: "View",
                props: {
                    width: 1280,
                    visible: !1,
                    name: "YouziMoreGameH",
                    height: 720
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: -240,
                        x: -560,
                        width: 2400,
                        var: "maskBG",
                        skin: "youziTexture/blank.png",
                        height: 1200
                    },
                    compId: 13
                }, {
                    type: "Sprite",
                    props: {
                        y: 60,
                        x: 376,
                        width: 528,
                        visible: !1,
                        var: "MoreGameUI",
                        pivotY: 0,
                        pivotX: 0,
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        height: 600,
                        drawCallOptimize: !0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 528,
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "8,8,8,8",
                            pivotX: 0,
                            name: "panel",
                            height: 600,
                            cacheAs: "none"
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 113,
                            skin: "youziTexture/main_title.png",
                            name: "title"
                        },
                        compId: 6
                    }, {
                        type: "Button",
                        props: {
                            y: -8,
                            x: 497,
                            var: "moreGameCloseBtn",
                            stateNum: 1,
                            skin: "youziTexture/close_button.png",
                            labelSize: 26,
                            labelPadding: "-50",
                            cacheAs: "none"
                        },
                        compId: 7
                    }, {
                        type: "List",
                        props: {
                            y: 70,
                            x: 31,
                            width: 466,
                            var: "moreGameList",
                            spaceY: 10,
                            spaceX: 45,
                            repeatY: 3,
                            repeatX: 3,
                            height: 530
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 120,
                                renderType: "render",
                                name: "render",
                                height: 153
                            },
                            compId: 9,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 120,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 120
                                },
                                compId: 12
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 120,
                                    name: "icon",
                                    height: 120
                                },
                                compId: 10
                            }, {
                                type: "Label",
                                props: {
                                    y: 142,
                                    x: 60,
                                    width: 120,
                                    valign: "middle",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 22,
                                    fontSize: 22,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 11
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/main_title.png", "youziTexture/close_button.png"],
                loadList3D: []
            }, e.Youzi_MoreGameHUI = d;
            class c extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(c.uiView);
                }
            }
            c.uiView = {
                type: "View",
                props: {
                    width: 720,
                    name: "YouziOffLineView",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Button",
                    props: {
                        width: 1e3,
                        var: "OffLineMask",
                        stateNum: 1,
                        skin: "youziTexture/blank.png",
                        mouseEnabled: !0,
                        height: 1900,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Sprite",
                    props: {
                        y: 506,
                        x: 96,
                        width: 528,
                        visible: !1,
                        var: "OffLineUI",
                        mouseEnabled: !0,
                        height: 268
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 528,
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "9,9,9,9",
                            name: "OffLineBg",
                            height: 268
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 25,
                            x: 209,
                            width: 110,
                            skin: "youziTexture/txt_guesslike_h.png",
                            name: "offlineTitle",
                            height: 30
                        },
                        compId: 12
                    }, {
                        type: "Button",
                        props: {
                            y: -22,
                            x: 496,
                            width: 42,
                            var: "OffLineCloseButton",
                            stateNum: 1,
                            skin: "youziTexture/close_button.png",
                            height: 46
                        },
                        compId: 11
                    }, {
                        type: "List",
                        props: {
                            y: 72,
                            x: 29,
                            width: 470,
                            var: "OffLineList",
                            spaceX: 25,
                            repeatY: 1,
                            repeatX: 2,
                            height: 180
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 140,
                                renderType: "render",
                                name: "render",
                                height: 180
                            },
                            compId: 7,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 140,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 140
                                },
                                compId: 13
                            }, {
                                type: "Image",
                                props: {
                                    x: 0,
                                    width: 140,
                                    name: "icon",
                                    height: 140
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    y: -14,
                                    x: 126,
                                    visible: !1,
                                    skin: "youziTexture/redhit.png",
                                    name: "redhit",
                                    cacheAs: "bitmap"
                                },
                                compId: 9
                            }, {
                                type: "Label",
                                props: {
                                    y: 150,
                                    width: 140,
                                    valign: "middle",
                                    text: "弹弹欢乐球",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 30,
                                    fontSize: 24,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 10
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_OffLineUI = c;
            class u extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(u.uiView);
                }
            }
            u.uiView = {
                type: "View",
                props: {
                    width: 1280,
                    name: "YouziOffLineHView",
                    height: 720
                },
                compId: 2,
                child: [{
                    type: "Button",
                    props: {
                        width: 1900,
                        var: "OffLineMask",
                        stateNum: 1,
                        skin: "youziTexture/blank.png",
                        mouseThrough: !1,
                        height: 1e3,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Sprite",
                    props: {
                        y: 180,
                        x: 320,
                        width: 640,
                        visible: !1,
                        var: "OffLineUI",
                        mouseThrough: !0,
                        mouseEnabled: !0,
                        height: 360,
                        drawCallOptimize: !0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 640,
                            skin: "youziTexture/full_round_corner.png",
                            sizeGrid: "8,8,8,8",
                            name: "OffLineBg",
                            height: 360
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 37,
                            x: 255,
                            width: 130,
                            skin: "youziTexture/txt_guesslike_h.png",
                            name: "title",
                            height: 32
                        },
                        compId: 6
                    }, {
                        type: "Button",
                        props: {
                            y: -9,
                            x: 609,
                            var: "OffLineCloseButton",
                            stateNum: 1,
                            skin: "youziTexture/close_button.png"
                        },
                        compId: 7
                    }, {
                        type: "List",
                        props: {
                            y: 101,
                            x: 0,
                            width: 640,
                            var: "OffLineList",
                            repeatY: 1,
                            repeatX: 2,
                            height: 210
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                y: 15,
                                x: 25,
                                width: 180,
                                renderType: "render",
                                name: "render",
                                height: 180
                            },
                            compId: 9,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 15,
                                    width: 150,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 150
                                },
                                compId: 13
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 15,
                                    width: 150,
                                    name: "icon",
                                    height: 150
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: -14,
                                    x: 151,
                                    visible: !1,
                                    skin: "youziTexture/redhit.png",
                                    name: "redhit",
                                    cacheAs: "bitmap"
                                },
                                compId: 11
                            }, {
                                type: "Label",
                                props: {
                                    y: 160,
                                    width: 180,
                                    text: "弹弹欢乐球",
                                    name: "namelab",
                                    height: 30,
                                    fontSize: 30,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 12
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/blank.png", "youziTexture/full_round_corner.png", "youziTexture/txt_guesslike_h.png", "youziTexture/close_button.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_OffLineHUI = u;
            class m extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(m.uiView);
                }
            }
            m.uiView = {
                type: "View",
                props: {
                    width: 720,
                    name: "YouziRecentlyUsed",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 720,
                        var: "RecentlyUsedUI",
                        height: 1280
                    },
                    compId: 23,
                    child: [{
                        type: "Image",
                        props: {
                            y: -478.5,
                            x: -180,
                            width: 1200,
                            var: "GameListBG",
                            skin: "youziTexture/icon_bg.png",
                            sizeGrid: "5,5,5,5",
                            mouseEnabled: !1,
                            height: 2400
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "TitleBg",
                            skin: "youziTexture/youzi_graybg.png",
                            sizeGrid: "5,5,5,5",
                            height: 100
                        },
                        compId: 3
                    }, {
                        type: "Image",
                        props: {
                            y: 34,
                            x: 23,
                            width: 40,
                            var: "CloseBtn",
                            skin: "youziTexture/youzi_leftarrow.png",
                            height: 40
                        },
                        compId: 25
                    }, {
                        type: "Label",
                        props: {
                            y: 24,
                            x: 300,
                            width: 120,
                            var: "TitleLabel",
                            valign: "middle",
                            text: "小游戏",
                            stroke: 1,
                            height: 60,
                            fontSize: 32,
                            color: "#000000",
                            align: "center"
                        },
                        compId: 5
                    }, {
                        type: "Label",
                        props: {
                            y: 101,
                            x: 16,
                            width: 704,
                            var: "TitleUsed",
                            valign: "middle",
                            text: "最近使用",
                            strokeColor: "#aa9f9f",
                            stroke: .7,
                            height: 59,
                            fontSize: 24,
                            color: "#aa9f9f",
                            align: "left"
                        },
                        compId: 6,
                        child: [{
                            type: "Line",
                            props: {
                                y: 57,
                                x: 0,
                                toY: 0,
                                toX: 704,
                                lineWidth: 1.5,
                                lineColor: "#c6c6c6"
                            },
                            compId: 21
                        }]
                    }, {
                        type: "List",
                        props: {
                            y: 162,
                            x: 40,
                            width: 680,
                            var: "RecentlyUsedList",
                            spaceY: 20,
                            repeatY: 9,
                            repeatX: 1,
                            height: 1119
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                width: 680,
                                renderType: "render",
                                name: "render",
                                height: 100
                            },
                            compId: 10,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 100,
                                    name: "iconAnima",
                                    height: 100
                                },
                                compId: 14
                            }, {
                                type: "Image",
                                props: {
                                    width: 100,
                                    name: "icon",
                                    height: 100
                                },
                                compId: 12
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 100,
                                    skin: "youziTexture/youzi_circlemask.png",
                                    name: "maskBG",
                                    height: 100
                                },
                                compId: 29
                            }, {
                                type: "Image",
                                props: {
                                    y: 29,
                                    x: 557,
                                    width: 40,
                                    skin: "youziTexture/youzi_hitstar.png",
                                    name: "redhit",
                                    height: 39
                                },
                                compId: 22
                            }, {
                                type: "Label",
                                props: {
                                    y: 31,
                                    x: 135.5,
                                    width: 409,
                                    valign: "bottom",
                                    text: "弹弹欢乐球",
                                    overflow: "scroll",
                                    name: "namelab",
                                    height: 35,
                                    fontSize: 28,
                                    align: "left"
                                },
                                compId: 13
                            }, {
                                type: "Line",
                                props: {
                                    y: 100,
                                    x: 135,
                                    toY: 0,
                                    toX: 545,
                                    lineWidth: 1.5,
                                    lineColor: "#bbbbbb"
                                },
                                compId: 11
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/icon_bg.png", "youziTexture/youzi_graybg.png", "youziTexture/youzi_leftarrow.png", "youziTexture/youzi_circlemask.png", "youziTexture/youzi_hitstar.png"],
                loadList3D: []
            }, e.Youzi_RecentlyUsedUI = m;
            class p extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(p.uiView);
                }
            }
            p.uiView = {
                type: "View",
                props: {
                    width: 720,
                    name: "YouziScreenPage",
                    height: 1280
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        x: 0,
                        width: 720,
                        var: "LuoDi",
                        height: 1280
                    },
                    compId: 9,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "BG",
                            skin: "youziTexture/icon_bg.png",
                            sizeGrid: "6,6,6,6",
                            height: 1280
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 823,
                            x: 211,
                            var: "luoDiBtn",
                            skin: "youziTexture/box_start.png"
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 490,
                            x: 210,
                            width: 300,
                            var: "Small",
                            height: 300
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "Big",
                            height: 1280
                        },
                        compId: 7
                    }, {
                        type: "Button",
                        props: {
                            y: 0,
                            x: 0,
                            width: 720,
                            var: "PageBtn",
                            height: 1280
                        },
                        compId: 8
                    }]
                }],
                loadList: ["youziTexture/icon_bg.png", "youziTexture/box_start.png"],
                loadList3D: []
            }, e.Youzi_ScreenPageUI = p;
            class y extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(y.uiView);
                }
            }
            y.uiView = {
                type: "View",
                props: {
                    width: 250,
                    name: "YouziSlideBanner",
                    height: 806
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 250,
                        visible: !1,
                        var: "SlideBannerUI",
                        mouseEnabled: !0,
                        height: 806
                    },
                    compId: 3,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 250,
                            var: "SlideBannerBg",
                            height: 806
                        },
                        compId: 4,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 200,
                                var: "slideBgLeft",
                                skin: "youziTexture/full_round_corner.png",
                                sizeGrid: "9,9,9,9",
                                height: 806
                            },
                            compId: 5
                        }, {
                            type: "Button",
                            props: {
                                x: 200,
                                width: 42,
                                var: "btnSLideClose",
                                stateNum: 1,
                                skin: "youziTexture/slide_bg_mid.png",
                                sizeGrid: "0,40,0,4",
                                height: 164,
                                centerY: 0
                            },
                            compId: 7
                        }]
                    }, {
                        type: "List",
                        props: {
                            y: 8,
                            x: 32,
                            width: 150,
                            var: "SlideBannerList",
                            spaceY: 5,
                            spaceX: 0,
                            repeatY: 4,
                            repeatX: 1,
                            height: 790
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 130,
                                renderType: "render",
                                name: "render",
                                height: 180
                            },
                            compId: 9,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 130,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 130
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 130,
                                    name: "icon",
                                    height: 130
                                },
                                compId: 11
                            }, {
                                type: "Image",
                                props: {
                                    y: -2,
                                    x: 116,
                                    skin: "youziTexture/redhit.png",
                                    name: "markImg"
                                },
                                compId: 12
                            }, {
                                type: "Label",
                                props: {
                                    y: 164,
                                    x: 65,
                                    width: 130,
                                    valign: "middle",
                                    name: "namelab",
                                    height: 26,
                                    fontSize: 26,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 13
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/full_round_corner.png", "youziTexture/slide_bg_mid.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_SlideBannerUI = y;
            class g extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(g.uiView);
                }
            }
            g.uiView = {
                type: "View",
                props: {
                    width: 536,
                    visible: !1,
                    name: "YouziSlideView",
                    height: 802
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 536,
                        visible: !1,
                        var: "SlideWindowUI",
                        mouseEnabled: !0,
                        height: 802
                    },
                    compId: 14,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 534,
                            var: "slideBg",
                            height: 802
                        },
                        compId: 26,
                        child: [{
                            type: "Image",
                            props: {
                                y: 0,
                                x: 0,
                                width: 497,
                                skin: "youziTexture/full_round_corner.png",
                                sizeGrid: "9,9,9,9",
                                name: "slideBgLeft",
                                height: 802
                            },
                            compId: 16
                        }, {
                            type: "Image",
                            props: {
                                y: 319,
                                x: 497,
                                width: 42,
                                skin: "youziTexture/slide_bg_mid.png",
                                sizeGrid: "0,40,0,4",
                                name: "slideBtn",
                                mouseEnabled: !1,
                                height: 164
                            },
                            compId: 18
                        }, {
                            type: "Button",
                            props: {
                                y: 359.5,
                                x: 495,
                                width: 44,
                                var: "btnSLideClose",
                                stateNum: 1,
                                height: 83
                            },
                            compId: 24
                        }]
                    }, {
                        type: "List",
                        props: {
                            y: 11,
                            x: 34,
                            width: 463,
                            var: "slideList",
                            spaceY: 5,
                            spaceX: 26,
                            repeatY: 4,
                            repeatX: 3,
                            height: 790
                        },
                        compId: 19,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 130,
                                renderType: "render",
                                name: "render",
                                height: 180
                            },
                            compId: 20,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 130,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 130
                                },
                                compId: 27
                            }, {
                                type: "Image",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 130,
                                    name: "icon",
                                    height: 130
                                },
                                compId: 21
                            }, {
                                type: "Image",
                                props: {
                                    y: -2,
                                    x: 116,
                                    skin: "youziTexture/redhit.png",
                                    name: "markImg"
                                },
                                compId: 22
                            }, {
                                type: "Label",
                                props: {
                                    y: 164,
                                    x: 65,
                                    width: 130,
                                    valign: "middle",
                                    name: "namelab",
                                    height: 26,
                                    fontSize: 26,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 23
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/full_round_corner.png", "youziTexture/slide_bg_mid.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_SlideWindowUI = g;
            class w extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(w.uiView);
                }
            }
            w.uiView = {
                type: "View",
                props: {
                    width: 600,
                    visible: !1,
                    name: "YouziSlideWindowViewH",
                    height: 614
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 600,
                        visible: !1,
                        var: "SlideWindowUI",
                        height: 614,
                        drawCallOptimize: !0
                    },
                    compId: 3,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 0,
                            x: 0,
                            width: 600,
                            var: "slideBg",
                            height: 614
                        },
                        compId: 13,
                        child: [{
                            type: "Image",
                            props: {
                                y: 225,
                                x: 566,
                                width: 33,
                                skin: "youziTexture/slide_bg_mid.png",
                                sizeGrid: "0,40,0,4",
                                name: "slideBgMiddle",
                                height: 164
                            },
                            compId: 5
                        }, {
                            type: "Image",
                            props: {
                                y: 0,
                                x: -71,
                                width: 640,
                                skin: "youziTexture/full_round_corner.png",
                                sizeGrid: "10,10,10,10",
                                name: "zhezhao",
                                height: 614
                            },
                            compId: 6
                        }, {
                            type: "Button",
                            props: {
                                y: 265,
                                x: 569,
                                width: 31,
                                var: "btnSLideClose",
                                stateNum: 1,
                                height: 80
                            },
                            compId: 12
                        }]
                    }, {
                        type: "List",
                        props: {
                            y: 0,
                            x: 67,
                            width: 485,
                            var: "slideList",
                            spaceY: 1,
                            spaceX: 40,
                            repeatY: 3,
                            repeatX: 3,
                            height: 614
                        },
                        compId: 7,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 130,
                                renderType: "render",
                                name: "render",
                                height: 190
                            },
                            compId: 8,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 20,
                                    x: 0,
                                    width: 130,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 130
                                },
                                compId: 14
                            }, {
                                type: "Image",
                                props: {
                                    y: 20,
                                    x: 0,
                                    width: 130,
                                    name: "icon",
                                    height: 130
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    y: 6,
                                    x: 116,
                                    skin: "youziTexture/redhit.png",
                                    name: "markImg",
                                    cacheAs: "none"
                                },
                                compId: 10
                            }, {
                                type: "Label",
                                props: {
                                    y: 177,
                                    x: 65,
                                    width: 130,
                                    valign: "bottom",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 24,
                                    fontSize: 22,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 11
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/slide_bg_mid.png", "youziTexture/full_round_corner.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_SlideWindowHUI = w;
            class L extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(L.uiView);
                }
            }
            L.uiView = {
                type: "View",
                props: {
                    width: 600,
                    visible: !1,
                    name: "YouziSmallWallView",
                    height: 414
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 600,
                        visible: !1,
                        var: "SmallWallUI",
                        pivotY: 0,
                        pivotX: 0,
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        height: 414
                    },
                    compId: 4,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 600,
                            skin: "youziTexture/bg_small_wall.png",
                            sizeGrid: "38,42,38,42",
                            pivotX: 0,
                            name: "panel",
                            height: 414
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: 7,
                            x: 110,
                            skin: "youziTexture/txt_small_wall.png",
                            name: "title"
                        },
                        compId: 6
                    }, {
                        type: "List",
                        props: {
                            y: 56,
                            x: 17,
                            width: 568,
                            var: "smallWallList",
                            spaceY: 10,
                            spaceX: 25,
                            repeatY: 1,
                            repeatX: 4,
                            height: 350
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 120,
                                renderType: "render",
                                name: "render",
                                height: 172
                            },
                            compId: 9,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 120,
                                    visible: !1,
                                    name: "iconAnima",
                                    height: 120
                                },
                                compId: 13
                            }, {
                                type: "Image",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 120,
                                    name: "icon",
                                    height: 120
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 104,
                                    visible: !1,
                                    skin: "youziTexture/redhit.png",
                                    name: "redhit"
                                },
                                compId: 12
                            }, {
                                type: "Label",
                                props: {
                                    y: 152,
                                    x: 60,
                                    width: 120,
                                    valign: "middle",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 30,
                                    fontSize: 22,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 11
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_SmallWallUI = L;
            class I extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(I.uiView);
                }
            }
            I.uiView = {
                type: "View",
                props: {
                    width: 750,
                    name: "YouziSmallWallViewH",
                    height: 414
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 750,
                        visible: !1,
                        var: "SmallWallUIH",
                        pivotY: 0,
                        pivotX: 0,
                        mouseThrough: !1,
                        mouseEnabled: !0,
                        height: 414
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            width: 750,
                            skin: "youziTexture/bg_small_wall.png",
                            sizeGrid: "38,42,38,42",
                            pivotX: 0,
                            name: "panel",
                            height: 414
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            y: 9,
                            x: 177.5,
                            skin: "youziTexture/txt_small_wall.png",
                            name: "title"
                        },
                        compId: 5
                    }, {
                        type: "List",
                        props: {
                            y: 56,
                            x: 17,
                            width: 720,
                            var: "smallWallListH",
                            spaceY: 10,
                            spaceX: 25,
                            repeatY: 1,
                            repeatX: 5,
                            height: 350
                        },
                        compId: 6,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 120,
                                renderType: "render",
                                name: "render",
                                height: 172
                            },
                            compId: 7,
                            child: [{
                                type: "Animation",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 120,
                                    name: "iconAnima",
                                    height: 120
                                },
                                compId: 11
                            }, {
                                type: "Image",
                                props: {
                                    y: 12,
                                    x: 0,
                                    width: 120,
                                    name: "icon",
                                    height: 120
                                },
                                compId: 8
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 104,
                                    visible: !1,
                                    skin: "youziTexture/redhit.png",
                                    name: "redhit"
                                },
                                compId: 9
                            }, {
                                type: "Label",
                                props: {
                                    y: 152,
                                    x: 60,
                                    width: 120,
                                    valign: "middle",
                                    overflow: "hidden",
                                    name: "namelab",
                                    height: 30,
                                    fontSize: 22,
                                    color: "#ffffff",
                                    anchorY: .5,
                                    anchorX: .5,
                                    align: "center"
                                },
                                compId: 10
                            }]
                        }]
                    }]
                }],
                loadList: ["youziTexture/bg_small_wall.png", "youziTexture/txt_small_wall.png", "youziTexture/redhit.png"],
                loadList3D: []
            }, e.Youzi_SmallWallHUI = I;
        }(e.youzi || (e.youzi = {}));
    }(G || (G = {}));
    var z = {};
    class R {
        constructor(e, t) {
            this.atlasPngUrl = null, this.animaPlaySpeed = 100, (e || e > 120) && (R.unitAtlasPngWidth = e),
                (t || t > 120) && (R.unitAtlasPngHeight = t);
        }
        createAnimation(e, t) {
            this.atlasPngUrl = e, z.hasOwnProperty(this.atlasPngUrl) ? t(z[this.atlasPngUrl]) : this.loadAnimaRes(t);
        }
        loadAnimaRes(e) {
            Laya.loader.load(this.atlasPngUrl, new Laya.Handler(this, this.atlasPngRect, [e]), null, Laya.Loader.IMAGE);
        }
        atlasPngRect(e, t) {
            for (var i = [], s = 0; s < 4; s++)
                for (var a = 0; a < 4; a++) {
                    var n = Laya.Texture.createFromTexture(t, a * R.unitAtlasPngWidth, s * R.unitAtlasPngHeight, R.unitAtlasPngWidth, R.unitAtlasPngHeight),
                        o = new Laya.Graphics();
                    o.drawTexture(n), i.push(o);
                }
            var l = new Laya.Animation();
            l.frames = i, l.interval = this.animaPlaySpeed, z[this.atlasPngUrl] = l, e(l);
        }
    }
    R.unitAtlasPngWidth = 120, R.unitAtlasPngHeight = 120;
    class H extends G.youzi.Youzi_MainPushUI {
        constructor(e) {
            super(), this.mainRecDatas = [], this.mainRecItemExposure = {}, this.angel = 0,
                this.curMainRecIdx = 0, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.leftTween = null, this.rightTween = null, this.startTimer = !0,
                this.initCustomParams(e),
                this.visible = !1, this.btnMainRecBg.visible = !1;
        }
        initCustomParams(e) {
            e && (this.x = e.hasOwnProperty("x") ? e.x : 0, this.y = e.hasOwnProperty("y") ? e.y : 0,
                this.scaleX = e.hasOwnProperty("scaleX") ? e.scaleX : 1, this.scaleY = e.hasOwnProperty("scaleY") ? e.scaleX : 1);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            this.initShow();
        }
        initShow() {
            if (this.mainRecDatas = E.mainRecDatas, this.mainRecDatas.length > 0) {
                if (E.getMainNameHide()) {
                    this.slogan.visible = !1, this.iconBg.visible = !1;
                    let e = E.getMainNameHideScale();
                    this.btnMainRecBg.scale(e, e);
                }
                this.btnMainRec.on(Laya.Event.CLICK, this, this.onBtnMainRecClicked), this.visible = !0,
                    this.btnMainRecBg.visible = !0, this.btnMainRecBg.rotation = 10, this.addMainAnimaOrImage(),
                    E.sendExposureLog(this.mainRecDatas[0], I.MAIN), this.mainRecItemExposure[this.mainRecDatas[0].appid] = 1,
                    this.notifyUIComplete(D.Youzi_MainPush, {
                        complete: !0
                    }), this.startTimerLoop();
            }
        }
        startTimerLoop() {
            this.startTimer && (this.startTimer = !1, this.mainRecDatas.length > 1 && Laya.timer.loop(5e3, this, this.updateMainRec),
                this.mainPushRotationAction());
        }
        clearTimerLoop() {
            this.btnMainRecBg.rotation = 10, this.startTimer = !0, this.mainRecDatas.length > 1 && Laya.timer.clear(this, this.updateMainRec),
                this.leftTween && Laya.Tween.clear(this.leftTween), this.rightTween && Laya.Tween.clear(this.rightTween);
        }
        mainPushRotationAction() {
            this.rotatotionRight();
        }
        rotatotionRight() {
            this.rightTween = Laya.Tween.to(this.btnMainRecBg, {
                rotation: -10
            }, 2e3, null, new Laya.Handler(this, this.rotationLeft));
        }
        rotationLeft(e) {
            this.leftTween = Laya.Tween.to(this.btnMainRecBg, {
                rotation: 10
            }, 2e3, null, new Laya.Handler(this, this.rotatotionRight));
        }
        updateMainRec() {
            this.curMainRecIdx = this.curMainRecIdx + 1 >= this.mainRecDatas.length ? 0 : this.curMainRecIdx + 1,
                this.addMainAnimaOrImage(), this.mainRecItemExposure[this.mainRecDatas[this.curMainRecIdx].appid] || (E.sendExposureLog(this.mainRecDatas[this.curMainRecIdx], I.MAIN),
                    this.mainRecItemExposure[this.mainRecDatas[this.curMainRecIdx].appid] = 1);
        }
        addMainAnimaOrImage() {
            if ("" != this.mainRecDatas[this.curMainRecIdx].title || null != this.mainRecDatas[this.curMainRecIdx].title ? this.slogan.text = this.mainRecDatas[this.curMainRecIdx].title : "" == this.mainRecDatas[this.curMainRecIdx].slogan && null == this.mainRecDatas[this.curMainRecIdx].slogan || (this.slogan.text = this.mainRecDatas[this.curMainRecIdx].slogan),
                1 == this.mainRecDatas[this.curMainRecIdx].dynamicType && this.mainRecDatas[this.curMainRecIdx].dynamicIcon) {
                var e = this;
                this.mainAnima.scale(.75, .75), new R().createAnimation(this.mainRecDatas[this.curMainRecIdx].dynamicIcon, function(t) {
                    e.mainAnima.frames = t.frames, e.mainAnima.interval = t.interval, e.mainAnima.visible = !0,
                        e.mainAnima.play();
                });
            } else this.mainAnima.visible = !1, this.btnMainRec.skin = this.mainRecDatas[this.curMainRecIdx].iconImg;
        }
        onBtnMainRecClicked() {
            E.clickGameYouziUIId = D.Youzi_MainPush;
            var e = this.mainRecDatas[this.curMainRecIdx];
            e.locationIndex = I.MAIN, E.startOtherGame(e, null), this.updateMainRec();
        }
    }
    class O {
        static getInstance() {
            return this.instance || (this.instance = new O()), this.instance;
        }
        createItemLabel(e, t, i) {
            e.text = t;
        }
        createItemImage(e, t) {
            e.skin = t;
        }
        createAltasPngAnima(e, t) {
            new R().createAnimation(t, function(t) {
                e.frames = t.frames, e.interval = t.interval, e.play();
            });
        }
        createYouziListItemScale(e, t, i, s, a, n, o) {
            e.scale(n, o), this.createYouziListItem(e, t, i, s, a);
        }
        createYouziListItem(e, t, i, s, a) {
            var n = e.getChildByName(t),
                o = e.getChildByName(i);
            s && (e.getChildByName(s).text = a.title);
            if (1 == a.dynamicType && a.dynamicIcon) {
                let e = o.width / 120;
                e = Number(e.toFixed(2)), o.scale(e, e), o.visible = !0, n.visible = !1, new R().createAnimation(a.dynamicIcon, function(e) {
                    o.frames = e.frames, o.interval = e.interval, o.play();
                });
            } else o.visible = !1, n.visible = !0, n.skin = a.iconImg;
        }
    }
    O.instance = null;
    class W extends G.youzi.Youzi_BottomBannerUI {
        constructor(e, t) {
            super(), this.namelabLabel = "namelab", this.listItemScale = {
                    x: 1,
                    y: 1
                }, this.bannerType = u.MATRIX, this.bannerBottomItemExposure = {}, this.isOffSwitch = !1,
                this.uiCompleteCallCopy = null, this.uiStateCallCopy = null, this.stopAction = !1,
                this.curFront = !0, this.curBack = !1, this.isClick = !1, this.endCompletHandler = null,
                this.startCompleteHandler = null, this.dur = 10, this.scaleUI = 1, this.visible = !1,
                this.BannerBottomUI.visible = !1, this.bottomList.hScrollBarSkin = "", this.isOffSwitch = e,
                this.designWHAdapter(), this.initCustomParams(t);
        }
        designWHAdapter() {
            Laya.stage.designWidth < Laya.stage.designHeight ? 720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720,
                this.scale(this.scaleUI, this.scaleUI)) : 720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                this.scale(this.scaleUI, this.scaleUI));
        }
        initCustomParams(e) {
            e ? (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null,
                this.x = e.hasOwnProperty("x") ? e.x : Laya.stage.width / 2 - this.BannerBottomUI.width / 2,
                this.y = e.hasOwnProperty("y") ? e.y : Laya.stage.height - this.BannerBottomUI.height) : this.pos(Laya.stage.width / 2 - this.BannerBottomUI.width / 2, Laya.stage.height - this.BannerBottomUI.height);
        }
        setYouziPosition(e, t) {
            this.pos(e, t);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("matrixBannerDatas"), this.closeBtn.on(Laya.Event.CLICK, this, this.hideBanner),
                E.matrixBannerDatas.length <= 0 || (this.loadBottomList(), this.isOffSwitch || E.addBanner(this));
        }
        loadBottomList() {
            E.getBottomNameHide() && (this.namelabLabel = null, this.listItemScale.x = 1.2,
                    this.listItemScale.y = 1.2, this.bottomList.spaceX = 45), E.getBottomCloseBtnHide() && (this.closeBtn.visible = !1),
                this.bottomList.array = E.matrixBannerDatas, this.bottomList.renderHandler = new Laya.Handler(this, this.onListRender),
                this.bottomList.mouseHandler = new Laya.Handler(this, this.onBannerItemMouseEvent),
                this.bottomList.on(Laya.Event.MOUSE_UP, this, this.scrollMoveUp), this.notifyUIComplete(D.Youzi_BottomBanner, {
                    complete: !0
                }), this.dur = E.matrixBannerDatas.length ? 5e3 * (E.matrixBannerDatas.length - 5) : 5e3,
                this.bottomlistAutoScroll();
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItemScale(e, "icon", "iconAnima", this.namelabLabel, E.matrixBannerDatas[t], this.listItemScale.x, this.listItemScale.y),
                t == this.bottomList.length - 1 && E.getPropertiesValue("_bottomBannerScrollType") == m.Type_One && this.listTweenEndForeverCall(),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.BannerBottomUI.visible && (this.bannerBottomItemExposure[E.matrixBannerDatas[e].appid] || (E.sendExposureLog(E.matrixBannerDatas[e], I.MATRIX),
                this.bannerBottomItemExposure[E.matrixBannerDatas[e].appid] = 1));
        }
        onBannerItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的bottombanner索引：" + t), E.clickGameYouziUIId = D.Youzi_BottomBanner;
                    var i = E.matrixBannerDatas[t];
                    i.locationIndex = I.MATRIX, E.startOtherGame(i, this.startOtherCall.bind(this));
                }
            } else e.type;
        }
        scrollMoveUp() {
            Laya.timer.frameOnce(300, this, this.starBottomBannerAction);
        }
        startOtherCall(e) {
            this.isClick = !1, this.starBottomBannerAction();
        }
        stopBottomBannerAcion() {
            this.bottomList.scrollBar.stopScroll(), this.bottomList.scrollTo(0), this.stopAction = !0;
        }
        starBottomBannerAction() {
            this.stopAction = !1, this.bottomlistAutoScroll();
        }
        bottomlistAutoScroll() {
            switch (E.getPropertiesValue("_bottomBannerScrollType")) {
                case m.Type_Zero:
                    this.goAndBackTween();
                    break;

                case m.Type_One:
                    this.listTweenEndForever();
                    break;

                default:
                    this.goAndBackTween();
            }
        }
        listTweenEndForever() {
            this.bottomList.length <= 5 || this.stopAction || this.bottomList.tweenTo(this.bottomList.length - 1, this.dur);
        }
        listTweenEndForeverCall() {
            this.bottomList.scrollTo(0), this.listTweenEndForever();
        }
        goAndBackTween() {
            this.bottomList.length <= 5 || (this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart());
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.bottomList.tweenTo(this.bottomList.length - 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.bottomList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        showBanner() {
            this.isOffSwitch || this && (this.visible = !0, this.BannerBottomUI.visible = !0,
                this.notifyUIState(D.Youzi_BottomBanner, !0), this.stopAction && this.starBottomBannerAction());
        }
        hideBanner() {
            this && (this.stopBottomBannerAcion(), this.visible = !1, this.BannerBottomUI.visible = !1,
                this.notifyUIState(D.Youzi_BottomBanner, !1));
        }
        destroySelf() {
            this && this.removeSelf();
        }
    }
    const P = {
        BOTTOM: 1,
        TOP: 2
    };
    class F {
        constructor(e, t = null, i = null, s = !1, a = !1) {
            this.isLoadOk = !1, this.adUnitId = null, this.posType = 1, this.offset = {
                    x: 0,
                    y: 0
                }, this.bannerType = u.WX, this.isShowBanner = !1, this.isOffSwitch = !1, this.isOffSwitchSelf = !1,
                this.bannerAd = null, this.refreshTimer = null, this.adUnitId = e, this.posType = t || 1,
                this.offset = i || {
                    x: 0,
                    y: 0
                }, this.isOffSwitch = s, this.isOffSwitchSelf = a, this.initShow();
        }
        initShow() {
            this.isLoadOk = E.getDataLoaded(), this.isLoadOk ? this.freshShow() : E._loadedCallBacks.push(this.freshShow.bind(this));
        }
        freshShow() {
            this.createWXBanner(), this.isOffSwitch || (E.addBanner(this), this._autoSwitchSelf());
        }
        createWXBanner() {
            if (Laya.Browser.window.wx && Laya.Browser.window.wx.createBannerAd) {
                var e = this,
                    t = Laya.Browser.window.wx.getSystemInfoSync().screenWidth,
                    i = Laya.Browser.window.wx.getSystemInfoSync().screenHeight,
                    s = Laya.stage.designWidth,
                    a = Laya.stage.designHeight,
                    n = t / s * 100 + (i - t / s * a) / 2,
                    o = e.bannerAd;
                e.bannerAd = Laya.Browser.window.wx.createBannerAd({
                    adUnitId: this.adUnitId,
                    style: {
                        left: this.offset.x,
                        top: this.offset.y,
                        width: t
                    }
                });
                var l = !1;
                e.bannerAd.onResize(function(s) {
                    if (!l) {
                        if (e.bannerAd.style.realHeight > n) {
                            l = !0;
                            var a = t * n / e.bannerAd.style.realHeight;
                            a = E.miscClampf(a, 300, 9999), e.bannerAd.style.width = a, e.bannerAd.style.top = i - e.bannerAd.style.realHeight * (a / e.bannerAd.style.realWidth) + e.offset.y,
                                e.bannerAd.style.left = (t - e.bannerAd.style.width) / 2 + e.offset.x;
                        } else e.bannerAd.style.top = i - e.bannerAd.style.realHeight + e.offset.y, i / t > 2 && (e.bannerAd.style.top = e.bannerAd.style.top - 34 + e.offset.y);
                        e.posType == P.TOP && (e.bannerAd.style.left = (t - e.bannerAd.style.width) / 2 + e.offset.x,
                            e.bannerAd.style.top = e.offset.y, i / t > 2 ? e.bannerAd.style.top += 76 : t / i > 2 && (e.bannerAd.style.top += 76));
                    }
                }), e.bannerAd.onLoad(function(t) {
                    o && (o.hide(), o.destroy()), e.isShowBanner ? e.bannerAd.show() : e.bannerAd.hide();
                }), e.bannerAd.onError(function(e) {
                    console.warn("微信banner广告出错", e);
                });
            }
        }
        showBanner() {
            this.isOffSwitch || (this.isShowBanner = !0, this.bannerAd && this.bannerAd.show());
        }
        hideBanner() {
            this.isShowBanner = !1, this.bannerAd && this.bannerAd.hide();
        }
        destroySelf() {
            this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null), this.refreshTimer && (clearInterval(this.refreshTimer),
                this.refreshTimer = null), this.isShowBanner = !1;
        }
        switchBannerNow() {
            this.isOffSwitch || (this.refreshTimer && (clearInterval(this.refreshTimer), this.refreshTimer = null),
                this.createWXBanner(), this._autoSwitchSelf());
        }
        _autoSwitchSelf() {
            if (!this.isOffSwitch && !this.isOffSwitchSelf) {
                var e = this;
                this.refreshTimer = setInterval(function() {
                    e.createWXBanner();
                }, 1e3 * E._bannerCreateInterval);
            }
        }
    }
    class Y extends G.youzi.Youzi_GameBannerViewUI {
        constructor(e, t) {
            super(), this.isOffSwitch = !1, this.bannerType = u.GAME, this.switchTime = 5, this.gameBannerItemExposure = {},
                this.startSwitchIndex = 0, this.isHide = !1, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.pos(Laya.stage.width / 2 - this.GameBannerList.width / 2, Laya.stage.height - this.GameBannerList.height),
                this.visible = !1, this.GameBannerList.hScrollBarSkin = "", this.isOffSwitch = e,
                this.switchTime = t < 5 ? 5 : t, this.switchTime *= 1e3;
        }
        setYouziPosition(e, t) {
            this.pos(e, t);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("gameBannerDatas"), E.gameBannerDatas.length <= 0 || (this.loadGameBannerList(),
                this.creatGameBannerTimerLoop(), this.isOffSwitch || E.addBanner(this));
        }
        loadGameBannerList() {
            this.GameBannerList.repeatX = E.gameBannerDatas.length;
            for (var e = [], t = 0; t < E.gameBannerDatas.length; t++) e.push({
                infoData: E.gameBannerDatas[t]
            });
            this.GameBannerList.mouseHandler = new Laya.Handler(this, this.onGameBannerItemMouseEvent),
                this.GameBannerList.dataSource = e;
            for (var i = 0; t < E.gameBannerDatas.length; i++) {
                this.GameBannerList.getCell(i).getChildByName("icon").skin = E.gameBannerDatas[i].bannerImg;
            }
            this.notifyUIComplete(D.Youzi_GameBanner, {
                complete: !0
            });
        }
        creatGameBannerTimerLoop() {
            Laya.timer.loop(this.switchTime, this, this.updateGameBaner);
        }
        clearGameBannerTimerLoop() {
            Laya.timer.clear(this, this.updateGameBaner);
        }
        updateGameBaner(e) {
            E.gameBannerDatas.length <= 1 ? this.checkExposure() : (this.startSwitchIndex = this.GameBannerList.startIndex + 1,
                this.GameBannerList.scrollTo(this.startSwitchIndex >= this.GameBannerList.length ? 0 : this.startSwitchIndex),
                this.checkExposure());
        }
        checkExposure() {
            if (this.visible) {
                var e = E.gameBannerDatas[this.startSwitchIndex];
                this.gameBannerItemExposure[e.appid] || (this.gameBannerItemExposure[e.appid] = 1,
                    E.sendExposureLog(e, I.GAME));
            }
        }
        onGameBannerItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的gamebannerlist索引：" + t);
                var i = E.gameBannerDatas[t];
                i.locationIndex = I.GAME, i.type = 5, E.clickGameYouziUIId = D.Youzi_GameBanner,
                    E.startOtherGame(i, null);
            } else e.type;
        }
        showBanner() {
            this && (this.visible = !0, this.isHide && (this.isHide = !1, this.creatGameBannerTimerLoop()),
                this.notifyUIState(D.Youzi_GameBanner, !0));
        }
        hideBanner() {
            this && (this.isHide = !0, this.visible = !1, this.clearGameBannerTimerLoop(), this.notifyUIState(D.Youzi_GameBanner, !1));
        }
        destroySelf() {
            this && this.removeSelf();
        }
    }
    class N extends G.youzi.Youzi_MainPushUI {
        constructor(e) {
            super(), this.mainRecData = null, this.mainRecItemExposure = {}, this.angel = 0,
                this.curMainRecIdx = 0, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.leftTween = null, this.rightTween = null, this.startTimer = !0,
                this.mainRecData = e,
                this.visible = !1, this.btnMainRecBg.visible = !1;
        }
        setYouziPosition(e, t) {
            this.centerX = NaN, this.centerY = NaN, this.pos(e, t);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            this.initShow();
        }
        initShow() {
            if (this.mainRecData) {
                this.btnMainRec.on(Laya.Event.MOUSE_DOWN, this, this.onBtnMainRecClicked);
                this.visible = true;
                this.btnMainRecBg.visible = true;
                this.btnMainRecBg.rotation = 10
                this.addMainAnimaOrImage();
                this.startTimerLoop()
            }
        }
        startTimerLoop() {
            this.startTimer && (this.startTimer = !1, this.mainPushRotationAction());
        }
        clearTimerLoop() {
            this.btnMainRecBg.rotation = 10, this.startTimer = !0, this.leftTween && Laya.Tween.clear(this.leftTween),
                this.rightTween && Laya.Tween.clear(this.rightTween);
        }
        mainPushRotationAction() {
            this.rotatotionRight();
        }
        rotatotionRight() {
            this.rightTween = Laya.Tween.to(this.btnMainRecBg, {
                rotation: -10
            }, 2e3, null, new Laya.Handler(this, this.rotationLeft));
        }
        rotationLeft(e) {
            this.leftTween = Laya.Tween.to(this.btnMainRecBg, {
                rotation: 10
            }, 2e3, null, new Laya.Handler(this, this.rotatotionRight));
        }
        updateMainRecMultiple(e) {
            this.mainRecData = e, this.addMainAnimaOrImage(), this.mainRecItemExposure[e.appid] || (E.sendExposureLog(e, I.MAIN),
                this.mainRecItemExposure[e.appid] = 1);
        }
        addMainAnimaOrImage() {
            this.mainAnima.visible = !1,
                this.btnMainRec.skin = this.mainRecData.thumb;
            this.slogan.text = this.mainRecData.name;
        }
        onBtnMainRecClicked() {
            platform.getInstance().navigate("GAME", "MORE", this.mainRecData.id)
        }
    }
    class V {
        constructor(e) {
            this.multipleAmount = 1, this.isUpdateMainPush = !1, this.multipleMainPushObj = [],
                this.paramsJsonArray = [], this.randomData = [], this.startTimerMulti = !0, this.paramsJsonArray = e,
                this.initShow();
        }
        initShow() {
            this.creatYouziMultipleMainPush()
        }
        creatYouziMultipleMainPush() {
            this.multipleAmount = this.paramsJsonArray.length;
            let forgames = platform.getInstance().getForgames();
            for (let i = 0; i < this.multipleAmount; i++) {
                this.randomData.push(forgames[i]);
            }


            for (var t = 0; t < this.randomData.length; t++) {
                var i = new N(this.randomData[t]);
                var s = this.paramsJsonArray[t];
                i.x = s.x;
                i.y = s.y;
                s.parentNode.addChild(i);
                // this.paramsJsonArray[t] && (s.hasOwnProperty("parentNode") ? (i.x = s.hasOwnProperty("x") ? s.x : 0, 
                // i.y = s.hasOwnProperty("y") ? s.y : 0, i.scaleX = s.hasOwnProperty("scaleX") ? s.scaleX : 1, 
                // i.scaleY = s.hasOwnProperty("scaleY") ? s.scaleY : 1, s.parentNode.addChild(i), 
                // this.multipleMainPushObj.push(i)) : console.log("多主推数组参数下标" + t + "中父节点为空"));
            }
            this.startChangeTimeLoop();
        }
        startChangeTimeLoop() {
            if (this.startTimerMulti) {
                this.startTimerMulti = !1, this.isUpdateMainPush && Laya.timer.loop(5e3, this, this.updateMultipleMainPush);
                for (var e = 0; e < this.multipleMainPushObj.length; e++) this.multipleMainPushObj[e].startTimerLoop();
            }
        }
        stopChangeTimeLoop() {
            this.isUpdateMainPush && Laya.timer.clear(this, this.updateMultipleMainPush);
            for (var e = 0; e < this.multipleMainPushObj.length; e++) this.multipleMainPushObj[e].clearTimerLoop();
            this.startTimerMulti = !0;
        }
        updateMultipleMainPush() {
            this.randomData = E.getGamesIndex(E.mainRecDatas.length, this.multipleAmount);
            for (var e = 0; e < this.multipleMainPushObj.length; e++) this.multipleMainPushObj[e].updateMainRecMultiple(E.mainRecDatas[this.randomData[e]]);
        }
    }
    class X extends G.youzi.Youzi_RecentlyUsedUI {
        constructor(e) {
            super(), this.recentlyUsedExposure = {}, this.hw = 0, this.breaki = 9, this.curFront = !0,
                this.curBack = !1, this.stopAction = !1, this.isClick = !1, this.dur = 5e3, this.endCompletHandler = null,
                this.startCompleteHandler = null, this.uiStateCallCopy = null, this.scaleUI = 1,
                this.listMoveSpeed = 80, this.visible = !1, this.RecentlyUsedList.visible = !1,
                this.RecentlyUsedList.vScrollBarSkin = "", console.log("YouziRecentlyUsed"), this.designWHAdapter(),
                this.scale(0, 0), this.pivot(this.width / 2, this.height / 2), this.pos(Laya.stage.width / 2, this.height / 2),
                this.initCustomParams(e), this.CloseBtn.on(Laya.Event.CLICK, this, this.closeRecentlyUsed);
        }
        designWHAdapter() {
            "full" == Laya.stage.scaleMode ? (this.scaleUI = Laya.stage.width / this.width,
                    this.RecentlyUsedUI.scale(this.scaleUI, this.scaleUI), this.width = Laya.stage.width,
                    this.height = Laya.stage.height) : (Laya.stage.designWidth != this.width && (this.scaleUI = Laya.stage.designWidth / this.width,
                        this.RecentlyUsedUI.scale(this.scaleUI, this.scaleUI), this.width = Laya.stage.designWidth),
                    Laya.stage.designHeight != this.height && (this.height = Laya.stage.designHeight,
                        this.RecentlyUsedList.height = this.RecentlyUsedList.height + (Laya.stage.designHeight - 1280))),
                E.getAspectRatio() > 1.9 && (this.RecentlyUsedList.repeatY = 10, this.RecentlyUsedList.height += 240,
                    this.breaki = 10, this.height += 240, this.RecentlyUsedUI.y += 100);
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null);
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("fullMatrixScreenDatas"), E.fullMatrixScreenDatas.length > 0 ? (this.dur = 130 * (E.fullMatrixScreenDatas.length + 1) / this.listMoveSpeed * 1e3,
                this.RecentlyUsedList.array = E.fullMatrixScreenDatas, this.RecentlyUsedList.mouseHandler = new Laya.Handler(this, this.onItemClick),
                this.RecentlyUsedList.renderHandler = new Laya.Handler(this, this.onListRender)) : E.youziLog("全屏落地页类型2:", "无数据");
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", "namelab", E.fullMatrixScreenDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && (this.recentlyUsedExposure[E.fullMatrixScreenDatas[e].appid] || (E.sendExposureLog(E.fullMatrixScreenDatas[e], I.FULL_MATRIX_SCRENN),
                this.recentlyUsedExposure[E.fullMatrixScreenDatas[e].appid] = 1));
        }
        showRecentlyUsed() {
            E.fullMatrixScreenDatas.length <= 0 ? E.youziLog("全屏落地页类型2:", "无数据") : this && this.parent && (this.zOrder = g.UI_ZORDER_TWO,
                this.visible = !0, Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.quadIn, Laya.Handler.create(this, this.showActionFinish)));
        }
        showActionFinish() {
            this.notifyUIState(D.Youzi_Full, !0), E.fullScreenRandomNavigate(), Laya.timer.once(3e3, this, this.starFullListAction),
                this.RecentlyUsedList.visible = !0;
        }
        closeRecentlyUsed() {
            Laya.Tween.to(this, {
                scaleX: 0,
                scaleY: 0
            }, 500, Laya.Ease.quadOut, Laya.Handler.create(this, this.closeActionFinish));
        }
        closeActionFinish() {
            this.zOrder = 0, this.visible = !1, this.RecentlyUsedList.visible = !1, this.stopFullListAcion(),
                this.recentlyUsedExposure = {}, this.notifyUIState(D.Youzi_Full, !1);
        }
        stopFullListAcion() {
            this.stopAction = !0;
        }
        starFullListAction() {
            this.fullScreenListAutoScroll();
        }
        fullScreenListAutoScroll() {
            this.visible && (this.RecentlyUsedList.length <= this.breaki + 1 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.RecentlyUsedList.tweenTo(this.RecentlyUsedList.length - this.RecentlyUsedList.repeatY, this.dur, this.endCompletHandler)),
                console.log("kkkk:", this.RecentlyUsedList.length - this.RecentlyUsedList.repeatY),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.RecentlyUsedList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onItemClick(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的全屏落地页索引：" + t);
                var i = E.fullMatrixScreenDatas[t];
                i.locationIndex = I.FULL_MATRIX_SCRENN, E.clickGameYouziUIId = D.Youzi_Full, E.startOtherGame(i, null);
            } else e.type;
        }
        checkExposure() {
            if (this.visible)
                for (var e = 0; e < E.fullMatrixScreenDatas.length; e++) {
                    if (e > this.breaki) {
                        console.log("break i:" + e);
                        break;
                    }
                    var t = E.fullMatrixScreenDatas[e];
                    this.recentlyUsedExposure[t.appid] || (this.recentlyUsedExposure[t.appid] = 1, E.sendExposureLog(t, I.FULL_MATRIX_SCRENN));
                }
        }
    }
    class K extends G.youzi.Youzi_FullMixBannerUI {
        constructor(e) {
            super(), this.mixnamelabLabel = "namelab", this.isCreate = !1, this.bannerItemReport = {},
                this.mixListItemReport = {}, this.uiScale = 1, this.durBanner = 5e3, this.bannerStop = !1,
                this.bannerScrollLeft = !0, this.bannerScrollRight = !1, this.bannerScrollRightHandler = null,
                this.bannerScrollLeftHandler = null, this.durMixFull = 5e3, this.mixFullStop = !1,
                this.fullScrollTop = !0, this.fullScrollBottom = !1, this.fullScrollBottomHandler = null,
                this.fullScrollTopHandler = null, this.mixFullBreak = 11, this.fullRow = 2, this.fullColumm = 3,
                this.uiStateCallCopy = null, this.visible = !1, this.Box_Label.visible = !1, this.BannerUI.visible = !1,
                this.MixList.visible = !1, this.MixListUI.visible = !1, this.CloseBtn.visible = !1,
                this.BannerUIList.hScrollBarSkin = "", this.MixList.vScrollBarSkin = "", this.designWHAdapter(),
                this.pivot(this.width / 2, this.height / 2), this.pos(Laya.stage.width / 2, this.height / 2),
                this.initCustomParams(e), this.scale(0, 0);
        }
        designWHAdapter() {
            "full" == Laya.stage.scaleMode ? (this.FullMixBannerUI.scale(Laya.stage.width / this.width, Laya.stage.width / this.width),
                this.width = Laya.stage.width, this.height = Laya.stage.height) : (Laya.stage.designWidth != this.width && (this.uiScale = Laya.stage.designWidth / this.width,
                    this.FullMixBannerUI.scale(this.uiScale, this.uiScale), this.width = Laya.stage.designWidth),
                Laya.stage.designHeight != this.height && (this.MaskBg.scaleY = Laya.stage.designHeight / this.height,
                    this.height = Laya.stage.designHeight)), E.getAspectRatio() > 1.9 && (this.MixList.repeatY = 4,
                this.MixListUI.height += 220, this.MixList.height += 220, this.mixFullBreak = 14);
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null);
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            this.CloseBtn.on(Laya.Event.CLICK, this, this.closeFullMixBanner), this.createMixBanner(),
                this.createMixListUI();
        }
        createMixBanner() {
            E.dataNullReset("matrixBannerDatas"), E.matrixBannerDatas.length > 0 ? (this.BannerUI.visible = !0,
                this.durBanner = E.matrixBannerDatas.length > 5 ? 5500 * (E.matrixBannerDatas.length - 5) : 5e3,
                this.BannerUIList.array = E.matrixBannerDatas, this.BannerUIList.mouseHandler = new Laya.Handler(this, this.bannerItemClick),
                this.BannerUIList.renderHandler = new Laya.Handler(this, this.bannerListItemRender)) : E.youziLog("YouziMixBanner:", "矩阵banner 无数据");
        }
        bannerListItemRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", null, E.matrixBannerDatas[t]),
                this.checkBannerSendExpsureLog(t);
        }
        checkBannerSendExpsureLog(e) {
            this.BannerUI.visible && (this.bannerItemReport[E.matrixBannerDatas[e].appid] || (E.sendExposureLog(E.matrixBannerDatas[e], I.FULL_MATRIX_SCRENN),
                this.bannerItemReport[E.matrixBannerDatas[e].appid] = 1));
        }
        createMixListUI() {
            E.dataNullReset("fullMatrixScreenDatas"), E.getPropertiesValue(p.FullScreen_Name) && (this.mixnamelabLabel = null),
                E.fullMatrixScreenDatas.length > 0 ? (this.durMixFull = E.fullMatrixScreenDatas.length > this.mixFullBreak ? 4e3 * (E.fullMatrixScreenDatas.length - this.mixFullBreak) : 5e3,
                    this.fullColumm = this.MixList.repeatX, this.fullRow = this.MixList.repeatY, this.MixList.array = E.fullMatrixScreenDatas,
                    this.MixList.mouseHandler = new Laya.Handler(this, this.mixFullItemClick), this.MixList.renderHandler = new Laya.Handler(this, this.mixListItemRender)) : E.youziLog("YouziMixBanner:", "矩阵落地页类型3 无数据");
        }
        mixListItemRender(e, t) {
            0 == E.fullMatrixScreenDatas[t].hotred && (e.getChildByName("redhit").visible = !1);
            this.mixnamelabLabel || (e.getChildByName("namelabBG").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.mixnamelabLabel, E.fullMatrixScreenDatas[t]),
                this.checkFullSendExpsureLog(t);
        }
        checkFullSendExpsureLog(e) {
            this.MixListUI.visible && (this.mixListItemReport[E.fullMatrixScreenDatas[e].appid] || (E.sendExposureLog(E.fullMatrixScreenDatas[e], I.FULL_MATRIX_SCRENN),
                this.mixListItemReport[E.fullMatrixScreenDatas[e].appid] = 1));
        }
        showFullMixBanner() {
            (E.fullMatrixScreenDatas.length > 0 || E.matrixBannerDatas.length > 0) && this && this.parent && (this.visible = !0,
                this.zOrder = g.UI_ZORDER_TWO, Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.quintIn, Laya.Handler.create(this, this.showActionFinish)));
        }
        showActionFinish() {
            this.MixListUI.visible = !0, this.MixList.visible = !0, this.Box_Label.visible = !0,
                this.notifyUIState(D.Youzi_Full, !0), E.fullScreenRandomNavigate(), Laya.timer.once(3e3, this, this.showCloseBtn);
        }
        showCloseBtn() {
            this.CloseBtn.visible = !0, this.startBannerScrollAction(), this.startMixFullScrollAction();
        }
        closeFullMixBanner() {
            Laya.Tween.to(this, {
                scaleX: 0,
                scaleY: 0
            }, 500, Laya.Ease.quadOut, Laya.Handler.create(this, this.closeActionFinish));
        }
        closeActionFinish() {
            this.visible = !1, this.CloseBtn.visible = !1, this.MixListUI.visible = !1, this.MixList.visible = !1,
                this.Box_Label.visible = !1, this.zOrder = 0, this.notifyUIState(D.Youzi_Full, !1),
                this.stopBannerScrollAction(), this.stopMixFullScrollAction(), this.bannerItemReport = {},
                this.mixListItemReport = {};
        }
        stopBannerScrollAction() {
            this.bannerStop = !0;
        }
        startBannerScrollAction() {
            this.bannerAutoScroll();
        }
        bannerAutoScroll() {
            this.BannerUIList.length <= 5 || (this.bannerStop = !1, this.bannerScrollLeft && !this.bannerScrollRight ? this.bannerListTweenToRight() : this.bannerScrollRight && !this.bannerScrollLeft && this.bannerListTweenToLeft());
        }
        bannerListTweenToRight() {
            this.bannerStop || (this.bannerScrollLeftHandler = new Laya.Handler(this, this.bannerListTweenToLeft, null, !0),
                    this.BannerUIList.tweenTo(this.BannerUIList.length - 1, this.durBanner, this.bannerScrollLeftHandler)),
                this.bannerScrollLeft = !0, this.bannerScrollRight = !1;
        }
        bannerListTweenToLeft() {
            this.bannerStop || (this.bannerScrollRightHandler = new Laya.Handler(this, this.bannerListTweenToRight, null, !0),
                    this.BannerUIList.tweenTo(0, this.durBanner, this.bannerScrollRightHandler)), this.bannerScrollLeft = !1,
                this.bannerScrollRight = !0;
        }
        stopMixFullScrollAction() {
            this.mixFullStop = !0;
        }
        startMixFullScrollAction() {
            this.fullScroolAutoAction();
        }
        fullScroolAutoAction() {
            this.MixList.length <= this.mixFullBreak + 1 || (this.mixFullStop = !1, this.fullScrollTop && !this.fullScrollBottom ? this.fullListTweenToBottom() : this.fullScrollBottom && !this.fullScrollTop && this.fullListTweenToTop());
        }
        fullListTweenToBottom() {
            this.mixFullStop || (this.fullScrollBottomHandler = new Laya.Handler(this, this.fullListTweenToTop, null, !0),
                    this.MixList.tweenTo(this.MixList.length - this.fullColumm * this.fullRow + 1, this.durMixFull, this.fullScrollBottomHandler),
                    console.log("kkkL:", this.MixList.length - this.fullColumm * this.fullRow + 1)),
                this.fullScrollTop = !0, this.fullScrollBottom = !1;
        }
        fullListTweenToTop() {
            this.mixFullStop || (this.fullScrollTopHandler = new Laya.Handler(this, this.fullListTweenToBottom, null, !0),
                    this.MixList.tweenTo(0, this.durMixFull, this.fullScrollTopHandler)), this.fullScrollTop = !1,
                this.fullScrollBottom = !0;
        }
        bannerItemClick(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的mix banner索引：" + t);
                var i = E.matrixBannerDatas[t];
                i.locationIndex = I.FULL_MATRIX_SCRENN, E.clickGameYouziUIId = D.Youzi_Full, E.startOtherGame(i, null);
            } else e.type;
        }
        mixFullItemClick(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的全屏落地页3索引：" + t);
                var i = E.fullMatrixScreenDatas[t];
                i.locationIndex = I.FULL_MATRIX_SCRENN, E.clickGameYouziUIId = D.Youzi_Full, E.startOtherGame(i, null);
            } else e.type;
        }
    }
    class j extends G.youzi.Youzi_ScreenPageUI {
        constructor(e, t) {
            super(), this.gamePageData = null, this.gamePageUrl = null, this.notifyComplete = null,
                this.uiStateCallCopy = null, this.gamePageData = e, this.gamePageUrl = e.newPush,
                this.luoDiBtn.visible = !1, this.Small.visible = !1, this.designWHAdapter(), this.initParams(t),
                E.setPropertiesValue("gamePageCloseCall", this.closeGamePage.bind(this)), Laya.stage.addChild(this);
        }
        designWHAdapter() {
            E.getIsVertical() ? Laya.Browser.clientHeight / Laya.Browser.clientWidth > 1.9 && this.Big.scale(1, 1.23) : (this.width = 1280,
                this.height = 720, this.LuoDi.rotation = -90, this.LuoDi.pos(0, this.LuoDi.width),
                Laya.Browser.clientWidth / Laya.Browser.clientHeight > 1.9 && this.Big.scale(1, 1.23));
        }
        initParams(e) {
            this.notifyComplete = E.jsonHasKey(e, "gamePageComplete") ? e.gamePageComplete : null;
        }
        notifyFunc(e) {
            this.notifyComplete && (this.notifyComplete(e), this.notifyComplete = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUiState(e) {
            this.uiStateCallCopy && this.uiStateCallCopy(e);
        }
        onAwake() {
            this.gamePageUrl ? (Laya.loader.load(this.gamePageUrl, Laya.Handler.create(this, this.onLoadComplete), null, Laya.Loader.IMAGE),
                Laya.loader.on(Laya.Event.ERROR, this, this.onLoadError)) : this.onLoadError();
        }
        onLoadComplete(e) {
            e && (this.zOrder = g.UI_ZORDER_ONE, this.Big.texture = Laya.Loader.getRes(this.gamePageUrl),
                this.notifyUiState(1), this.notifyFunc(1));
        }
        onLoadError() {
            this.closeGamePage();
        }
        closeGamePage() {
            this.notifyUiState(0), this.notifyFunc(0), this.zOrder = 0, E.setPropertiesValue("gamePageCloseCall", null),
                this.visible = !1, this.removeSelf();
        }
    }
    class q extends G.youzi.Youzi_SlideBannerUI {
        constructor(e, t) {
            super(), this.namelabLabel = "namelab", this.slideItemExposure = {}, this.uiCompleteCallCopy = null,
                this.uiStateCallCopy = null, this.slideButton = null, this.showFirst = !1, this.isLeft = !1,
                this.stopAction = !1, this.moveDistance = this.width, this.scaleUI = 1, this.dur = 5e3,
                this.listMoveSpeed = 80, this.isLeft = e, this.visible = !1, this.SlideBannerUI.visible = !1,
                this.SlideBannerList.vScrollBarSkin = "", e ? this.left = -this.width : (this.right = -this.width,
                    this.SlideBannerBg.scaleX = -1, this.SlideBannerBg.pos(this.SlideBannerBg.width, this.SlideBannerBg.y),
                    this.SlideBannerList.pos(80, this.SlideBannerList.y)), this.designWHAdapter(), this.initCustomParams(t),
                this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow);
        }
        designWHAdapter() {
            E.getIsVertical() ? 720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720,
                    this.scale(this.scaleUI, this.scaleUI)) : (this.height = 614, this.SlideBannerUI.height = 614,
                    this.SlideBannerBg.height = 614, this.slideBgLeft.height = 614, this.SlideBannerList.height = 600,
                    720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                        this.scale(this.scaleUI, this.scaleUI))), this.y = Laya.stage.height / 2 - this.height * this.scaleUI / 2,
                this.moveDistance = this.width * this.scaleUI;
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null,
                e.hasOwnProperty("y") && (this.y = e.y), e.hasOwnProperty("scaleY") && (this.scaleY = e.scaleY),
                e.hasOwnProperty("scaleX") && (this.scaleX = e.scaleX, this.moveDistance = this.width * e.scaleX));
        }
        setSlideButton(e) {
            this.slideButton = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        slideBtnVisible(e) {
            this.slideButton && (this.slideButton.visible = e);
        }
        showSlideWindow() {
            if (E.hotListDatas.length <= 0) console.log("抽屉没有数据");
            else if (!this.SlideBannerUI.visible) {
                this.visible = !0, this.SlideBannerUI.visible = !0, this.slideBtnVisible(!1);
                let e = this,
                    t = function() {
                        e.startListTween(), e.notifyUIState(D.Youzi_SlideWindow, !0), e.showFirst || (e.showFirst = !0,
                            e.checkExposure());
                    };
                this.slideWindowActionShow(t);
            }
        }
        slideWindowActionShow(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e));
        }
        closeSlideWindow() {
            let e = this;
            this.slideWindowActionClose(function() {
                e.stopListTween(), e.visible = !1, e.SlideBannerUI.visible = !1, e.btnSLideClose.visible = !0,
                    e.slideBtnVisible(!0), e.notifyUIState(D.Youzi_SlideWindow, !1);
            }), e.btnSLideClose.visible = !1;
        }
        slideWindowActionClose(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: -this.moveDistance
            }, 500, Laya.Ease.quadOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: -this.moveDistance
            }, 500, Laya.Ease.quadOut, Laya.Handler.create(this, e));
        }
        initShow() {
            E.dataNullReset("hotListDatas"), E.getPropertiesValue(p.SlideWindow_Name) && (this.namelabLabel = null,
                this.SlideBannerList.spaceY = -15), E.hotListDatas.length > 0 && (this.slideButton && (this.slideButton.visible = !0),
                this.dur = 155 * (E.hotListDatas.length + 1) / this.listMoveSpeed * 1e3, this.SlideBannerList.array = E.hotListDatas,
                this.SlideBannerList.renderHandler = new Laya.Handler(this, this.onListRender),
                this.SlideBannerList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent),
                this.SlideBannerList.on(Laya.Event.MOUSE_UP, this, this.scrollMoveUp));
        }
        onListRender(e, t) {
            0 == E.hotListDatas[t].hotred && (e.getChildByName("markImg").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.hotListDatas[t]),
                t == this.SlideBannerList.length - 1 && this.listTweenEndForeverCall(), this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.SlideBannerUI.visible && (this.slideItemExposure[E.hotListDatas[e].appid] || (E.sendExposureLog(E.hotListDatas[e], I.FLOAT),
                this.slideItemExposure[E.hotListDatas[e].appid] = 1));
        }
        scrollMoveUp() {
            this.stopAction = !0, this.SlideBannerList.scrollBar.stopScroll(), Laya.timer.frameOnce(300, this, this.startListTween);
        }
        stopListTween() {
            this.SlideBannerList.scrollBar.stopScroll(), this.SlideBannerList.scrollTo(0), this.stopAction = !0;
        }
        startListTween() {
            this.stopAction = !1, this.listTweenEndForever();
        }
        listTweenEndForever() {
            this.SlideBannerList.length <= 5 || this.stopAction || this.SlideBannerList.tweenTo(this.SlideBannerList.length - 1, this.dur);
        }
        listTweenEndForeverCall() {
            this.SlideBannerList.scrollTo(0), this.listTweenEndForever();
        }
        onslideListItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的抽屉索引：" + t);
                var i = E.hotListDatas[t];
                if (i.locationIndex = I.FLOAT, E.clickGameYouziUIId = D.Youzi_SlideWindow, E.startOtherGame(i, null),
                    1 == i.hotred) this.SlideBannerList.getCell(t).getChildByName("markImg").visible = !1;
            } else e.type;
        }
        checkExposure() {
            if (this.SlideBannerUI.visible)
                for (var e = 0; e < E.hotListDatas.length && !(e > 5); e++) {
                    var t = E.hotListDatas[e];
                    this.slideItemExposure[t.appid] || (this.slideItemExposure[t.appid] = 1, E.sendExposureLog(t, I.FLOAT));
                }
        }
    }
    class $ extends G.youzi.Youzi_MoreGameUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.mainItemExposure = {}, this.fisrtShow = !1,
                this.isCreate = !1, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.moreBtn = null, this.curFront = !0, this.curBack = !1, this.stopAction = !1,
                this.isClick = !1, this.dur = 5e3, this.endCompletHandler = null, this.startCompleteHandler = null,
                this.scaleMoreGameUI = 1, this.isAddToStage = !1, this.designWHAdapter(), this.initCustomParams(e),
                this.visible = !1, this.MoreGameUI.visible = !1, this.moreGameList.vScrollBarSkin = "",
                this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);
        }
        designWHAdapter() {
            Laya.stage.designWidth != this.width && (this.scaleMoreGameUI = Laya.stage.designWidth / this.width,
                this.MoreGameUI.scale(this.scaleMoreGameUI, this.scaleMoreGameUI), this.maskBG.scale(this.scaleMoreGameUI, this.scaleMoreGameUI),
                this.width = Laya.stage.designWidth), Laya.stage.designHeight != this.height && (this.maskBG.scaleY = Laya.stage.designHeight / this.height,
                this.height = Laya.stage.designHeight);
        }
        initCustomParams(e) {
            e ? (this.MoreGameUI.x = e.hasOwnProperty("x") ? e.x : (Laya.stage.width - this.MoreGameUI.width * this.scaleMoreGameUI) / 2,
                this.MoreGameUI.y = e.hasOwnProperty("y") ? e.y : (Laya.stage.height - this.MoreGameUI.height * this.scaleMoreGameUI) / 2,
                this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null) : this.MoreGameUI.pos((Laya.stage.width - this.MoreGameUI.width * this.scaleMoreGameUI) / 2, (Laya.stage.height - this.MoreGameUI.height * this.scaleMoreGameUI) / 2);
        }
        setAddToStage(e) {
            this.isAddToStage = e;
        }
        setMoreGameBtn(e) {
            this.moreBtn = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        showMoreGameUI() {
            this.isCreate && !this.visible && (this.isAddToStage && (this.zOrder = g.UI_ZORDER_THREE),
                this.visible = !0, this.MoreGameUI.visible = !0, this.starMoreGameAction(), this.notifyUIState(D.Youzi_MoreGame, !0),
                this.checkExposure());
        }
        onBtnCloseClicked() {
            this.stopMoreGameAcion(), this.visible = !1, this.MoreGameUI.visible = !1, this.mainItemExposure = {},
                this.notifyUIState(D.Youzi_MoreGame, !1), this.isAddToStage && (this.zOrder = 0);
        }
        initShow() {
            E.getPropertiesValue(p.MoreGame_Name) && (this.namelabLabel = null, this.moreGameList.spaceY = -15),
                E.moreDatas.length > 0 && (this.moreBtn && (this.moreBtn.visible = !0), this.moreGameList.array = E.moreDatas,
                    this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender), this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent),
                    this.isCreate = !0, this.notifyUIComplete(D.Youzi_MoreGame, {
                        complete: !0
                    }), this.dur = E.moreDatas.length > 12 ? 5e3 * (E.moreDatas.length - 12) : 5e3);
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.moreDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.MoreGameUI.visible && (this.mainItemExposure[E.moreDatas[e].appid] || (E.sendExposureLog(E.moreDatas[e], I.MORE),
                this.mainItemExposure[E.moreDatas[e].appid] = 1));
        }
        stopMoreGameAcion() {
            this.stopAction = !0;
        }
        starMoreGameAction() {
            this.moreGameListAutoScroll();
        }
        moreGameListAutoScroll() {
            this.MoreGameUI.visible && (this.moreGameList.length <= 15 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.moreGameList.tweenTo(this.moreGameList.length - 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.moreGameList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        moreGameListMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的更多游戏索引：" + t);
                    var i = E.moreDatas[t];
                    i.locationIndex = I.MORE, E.clickGameYouziUIId = D.Youzi_MoreGame, E.startOtherGame(i, this.startOtherCall.bind(this));
                }
            } else e.type;
        }
        startOtherCall() {
            this.isClick = !1, this.starMoreGameAction();
        }
        checkExposure() {
            if (this.MoreGameUI.visible)
                for (var e = 0; e < E.moreDatas.length && !(e > 14); e++) {
                    var t = E.moreDatas[e];
                    this.mainItemExposure[t.appid] || (this.mainItemExposure[t.appid] = 1, E.sendExposureLog(t, I.MORE));
                }
        }
    }
    class J extends G.youzi.Youzi_SlideWindowUI {
        constructor(e, t) {
            super(), this.namelabLabel = "namelab", this.slideItemExposure = {}, this.uiCompleteCallCopy = null,
                this.uiStateCallCopy = null, this.slideButton = null, this.slideMask = null, this.showFirst = !1,
                this.isLeft = !1, this.isAddStage = !1, this.moveDistance = this.width, this.scaleUI = 1,
                this.isLeft = e, this.visible = !1, this.SlideWindowUI.visible = !1, this.slideList.vScrollBarSkin = "",
                e ? this.left = -this.width : (this.right = -this.width, this.slideBg.scaleX = -1,
                    this.slideBg.pos(this.slideBg.width, this.slideBg.y), this.slideList.pos(2 * this.slideList.x, this.slideList.y)),
                this.designWHAdapter(), this.initCustomParams(t), this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow);
        }
        designWHAdapter() {
            720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720, this.scale(this.scaleUI, this.scaleUI)),
                this.y = Laya.stage.height / 2 - this.height * this.scaleUI / 2, this.moveDistance = this.width * this.scaleUI;
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null,
                e.hasOwnProperty("y") && (this.y = e.y), e.hasOwnProperty("scaleY") && (this.scaleY = e.scaleY),
                e.hasOwnProperty("scaleX") && (this.scaleX = e.scaleX, this.moveDistance = this.width * e.scaleX));
        }
        setAddToStage(e) {
            this.isAddStage = e;
        }
        setSlideButton(e) {
            this.slideButton = e;
        }
        setSlideMask(e) {
            this.slideMask = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        showSlideBtnAndHideSlideMask() {
            this.slideButton && (this.slideButton.visible = !0), this.slideMask && (this.slideMask.visible = !1);
        }
        hideSlideBtnAndShowSlideMask() {
            this.slideButton && (this.slideButton.visible = !1), this.slideMask && (this.slideMask.visible = !0);
        }
        showSlideWindow() {
            if (E.hotListDatas.length <= 0) console.log("抽屉没有数据");
            else if (this.isAddStage && (this.slideMask.zOrder = g.UI_ZORDER_THREE - 1,
                    this.zOrder = g.UI_ZORDER_THREE), !this.SlideWindowUI.visible) {
                this.visible = !0, this.SlideWindowUI.visible = !0, this.hideSlideBtnAndShowSlideMask();
                var e = this;
                this.slideWindowActionShow(function() {
                    e.notifyUIState(D.Youzi_SlideWindow, !0), e.showFirst || (e.showFirst = !0, e.checkExposure());
                });
            }
        }
        slideWindowActionShow(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e));
        }
        closeSlideWindow() {
            if (E.hotListDatas.length <= 0) console.log("抽屉没有数据");
            else {
                var e = this;
                this.slideWindowActionClose(function() {
                    e.visible = !1, e.SlideWindowUI.visible = !1, e.btnSLideClose.visible = !0, e.showSlideBtnAndHideSlideMask(),
                        e.isAddStage && (e.slideMask.zOrder = 0, e.zOrder = 0), e.notifyUIState(D.Youzi_SlideWindow, !1);
                }), e.btnSLideClose.visible = !1;
            }
        }
        slideWindowActionClose(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: -this.moveDistance
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: -this.moveDistance
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e));
        }
        initShow() {
            E.dataNullReset("hotListDatas"), E.getPropertiesValue(p.SlideWindow_Name) && (this.namelabLabel = null,
                this.slideList.spaceY = -15), E.hotListDatas.length > 0 && (this.slideButton && (this.slideButton.visible = !0),
                this.slideList.array = E.hotListDatas, this.slideList.renderHandler = new Laya.Handler(this, this.onListRender),
                this.slideList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent));
        }
        onListRender(e, t) {
            0 == E.hotListDatas[t].hotred && (e.getChildByName("markImg").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.hotListDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.SlideWindowUI.visible && (this.slideItemExposure[E.hotListDatas[e].appid] || (E.sendExposureLog(E.hotListDatas[e], I.FLOAT),
                this.slideItemExposure[E.hotListDatas[e].appid] = 1));
        }
        onslideListItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的抽屉索引：" + t);
                var i = E.hotListDatas[t];
                if (i.locationIndex = I.FLOAT, E.clickGameYouziUIId = D.Youzi_SlideWindow, E.startOtherGame(i, null),
                    1 == i.hotred) this.slideList.getCell(t).getChildByName("markImg").visible = !1;
            } else e.type;
        }
        checkExposure() {
            if (this.SlideWindowUI.visible)
                for (var e = 0; e < E.hotListDatas.length && !(e > 14); e++) {
                    var t = E.hotListDatas[e];
                    this.slideItemExposure[t.appid] || (this.slideItemExposure[t.appid] = 1, E.sendExposureLog(t, I.FLOAT));
                }
        }
    }
    class Z extends G.youzi.Youzi_GuessLikeUI {
        constructor(e) {
            super(), this.guessAnyItemExposure = {}, this.firstShow = !1, this.uiCompleteCallCopy = null,
                this.uiStateCallCopy = null, this.curFront = !0, this.curBack = !1, this.stopAction = !1,
                this.isClick = !1, this.endCompletHandler = null, this.startCompleteHandler = null,
                this.dur = 5e3, this.scaleUI = 1, this.visible = !1, this.guessUI.visible = !1,
                this.guesslist.hScrollBarSkin = "", this.designWHAdapter(), this.initCustomParams(e);
        }
        designWHAdapter() {
            720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720, this.scale(this.scaleUI, this.scaleUI));
        }
        initCustomParams(e) {
            e && (this.x = e.hasOwnProperty("x") ? e.x : 0, this.y = e.hasOwnProperty("y") ? e.y : 0);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("matrixBannerDatas"), E.matrixBannerDatas.length <= 0 || (this.guesslist.dataSource = E.matrixBannerDatas,
                this.guesslist.mouseHandler = new Laya.Handler(this, this.onGuessLikeItemMouseEvent),
                this.guesslist.renderHandler = new Laya.Handler(this, this.onListRender), this.visible = !0,
                this.guessUI.visible = !0, this.notifyUIComplete(D.Youzi_GuessLike, {
                    complete: !0
                }), this.notifyUIState(D.Youzi_GuessLike, !0), this.dur = E.matrixBannerDatas.length > 5 ? 5e3 * (E.matrixBannerDatas.length - 5) : 5e3,
                this.starGuessLikeAction());
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", null, E.matrixBannerDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.guessUI.visible && (this.guessAnyItemExposure[E.matrixBannerDatas[e].appid] || (E.sendExposureLog(E.matrixBannerDatas[e], I.GUESS),
                this.guessAnyItemExposure[E.matrixBannerDatas[e].appid] = 1));
        }
        stopGuessLikeAcion() {
            this.stopAction = !0;
        }
        starGuessLikeAction() {
            this.guessAnylistAutoScroll();
        }
        guessAnylistAutoScroll() {
            this.guessUI.visible && (this.guesslist.length <= 5 || (this.stopAction = !1, this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.guesslist.tweenTo(this.guesslist.length - 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.guesslist.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onGuessLikeItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的guesslike索引：" + t), E.clickGameYouziUIId = D.Youzi_GuessLike;
                    var i = E.matrixBannerDatas[t];
                    i.locationIndex = I.GUESS, E.startOtherGame(i, this.startOtherCall.bind(this));
                }
            } else e.type;
        }
        startOtherCall(e) {
            this.isClick = !1, this.starGuessLikeAction();
        }
    }
    class Q extends G.youzi.Youzi_SmallWallUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.redHitHide = [], this.smallWallItemExposure = {},
                this.smallWallItemExposureCount = 0, this.curFront = !0, this.curBack = !1, this.stopAction = !1,
                this.isClick = !1, this.dur = 5e3, this.scaleUI = 1, this.endCompletHandler = null,
                this.startCompleteHandler = null, this.visible = !1, this.SmallWallUI.visible = !1,
                this.smallWallList.vScrollBarSkin = "", this.designWHAdapter(), this.initCustomParams(e);
        }
        designWHAdapter() {
            720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720, this.scale(this.scaleUI, this.scaleUI));
        }
        initCustomParams(e) {
            e && (this.x = e.hasOwnProperty("x") ? e.x : 0, this.y = e.hasOwnProperty("y") ? e.y : 0);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.getPropertiesValue(p.SmallWall_Name) && (this.namelabLabel = null, this.smallWallList.repeatY = 2,
                this.smallWallList.spaceY = -25), E.moreDatas.length > 0 && (this.smallWallList.array = E.moreDatas,
                this.smallWallList.renderHandler = new Laya.Handler(this, this.onListRender), this.smallWallList.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent),
                this.visible = !0, this.SmallWallUI.visible = !0, this.dur = E.moreDatas.length > 8 ? 5e3 * (E.moreDatas.length - 8) : 5e3,
                this.starSmallWallAction());
        }
        scrollBarListen() {
            this.starSmallWallAction();
        }
        onListRender(e, t) {
            1 == E.moreDatas[t].hotred && (e.getChildByName("redhit").visible = !0);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.moreDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.SmallWallUI.visible && (this.smallWallItemExposure[E.moreDatas[e].appid] || (E.sendExposureLog(E.moreDatas[e], I.SMALL_MATRIX_WALL),
                this.smallWallItemExposure[E.moreDatas[e].appid] = 1));
        }
        stopSmallWallAcion() {
            this.stopAction = !0;
        }
        starSmallWallAction() {
            this.smallWallListAutoScroll();
        }
        smallWallListAutoScroll() {
            this.SmallWallUI.visible && (this.smallWallList.length <= 8 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.smallWallList.tweenTo(this.smallWallList.length - 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.smallWallList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onSmallWallListItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的大家都在玩儿索引：" + t);
                    var i = E.moreDatas[t];
                    if (i.locationIndex = I.SMALL_MATRIX_WALL, E.clickGameYouziUIId = D.Youzi_SmallWall,
                        E.startOtherGame(i, this.startOtherCall.bind(this)), 1 == i.hotred) this.smallWallList.getCell(t).getChildByName("redhit").visible = !1;
                }
            } else e.type;
        }
        startOtherCall(e) {
            this.isClick = !1, this.starSmallWallAction();
        }
    }
    class ee extends G.youzi.Youzi_OffLineUI {
        constructor() {
            super(), this.offLineGameShow = [], this.offLineGameDatas = [], this.offLineCreateComplete = !1,
                this.isSendLog = !0, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.hideOffLineGameTimes = 0, this.scaleUI = 1, this.OffLineUI.pos(Laya.stage.width / 2 - this.OffLineUI.width / 2, Laya.stage.height / 2 - this.OffLineUI.height / 2),
                this.visible = !1, this.OffLineUI.visible = !1, this.designWHAdapter(), this.OffLineCloseButton.on(Laya.Event.CLICK, this, this.onBtnOffLineClose);
        }
        designWHAdapter() {
            720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720, this.OffLineUI.scale(this.scaleUI, this.scaleUI),
                this.OffLineMask.scale(this.scaleUI, this.scaleUI)), E.getAspectRatio() > 1.9 && (this.OffLineMask.scaleY = 2);
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            this.offLineGameDatas = E.offlineBannerDatas, this.wxOnShow(), this.wxOnHide();
        }
        wxOnShow() {
            var e = this;
            Laya.Browser.window.wx && Laya.Browser.window.wx.onShow(function(t) {
                var i = Math.floor(new Date().getTime() - e.hideOffLineGameTimes);
                if (Math.floor(i / 1e3) >= 8 && e.offLineCreateComplete && (e.visible = !0, e.OffLineUI.visible = !0,
                        e.zOrder = g.UI_ZORDER_ONE, e.notifyUIState(D.Youzi_OffLine, !0), e.isSendLog))
                    for (var s = 0; s < e.offLineGameShow.length; s++) E.sendExposureLog(e.offLineGameShow[s], I.OFFLINE),
                        s == e.offLineGameShow.length && (e.isSendLog = !1);
            });
        }
        wxOnHide() {
            var e = this;
            Laya.Browser.window.wx && Laya.Browser.window.wx.onHide(function() {
                e.hideOffLineGameTimes = new Date().getTime(), e.offLineGameDatas.length > 0 && !e.offLineCreateComplete && e.createOffLineDialog();
            });
        }
        createOffLineDialog() {
            if (this.offLineGameDatas.length <= 0) console.log("离线推荐没有数据");
            else {
                for (var e = [], t = 0; t < this.offLineGameDatas.length && !(t >= 3); t++) {
                    var i = this.offLineGameDatas[t];
                    e.push({
                        namelab: i.title
                    });
                }
                switch (e.length) {
                    case 1:
                        this.OffLineList.width = 140, this.OffLineList.x = 194;
                        break;

                    case 2:
                        this.OffLineList.width = 305, this.OffLineList.x = 111.5;
                }
                this.OffLineList.mouseHandler = new Laya.Handler(this, this.onOffLinelistItemMouseEvent),
                    this.OffLineList.dataSource = e;
                for (var s = 0; s < this.offLineGameDatas.length; s++) {
                    if (1 == this.offLineGameDatas[s].dynamicType && this.offLineGameDatas[s].dynamicIcon) {
                        var a = this.OffLineList.getCell(s).getChildByName("iconAnima");
                        a.scale(1.16, 1.16), new R().createAnimation(this.offLineGameDatas[s].dynamicIcon, function(e) {
                            a.frames = e.frames, a.interval = e.interval, a.visible = !0, a.play();
                        });
                    } else {
                        this.OffLineList.getCell(s).getChildByName("icon").skin = this.offLineGameDatas[s].iconImg;
                    }
                    if (1 == this.offLineGameDatas[s].hotred) this.OffLineList.getCell(s).getChildByName("redhit").visible = !0;
                    if (this.offLineGameShow.push(this.offLineGameDatas[s]), ++s >= e.length) {
                        this.offLineCreateComplete = !0;
                        break;
                    }
                }
                this.notifyUIComplete(D.Youzi_OffLine, {
                    complete: !0
                });
            }
        }
        onBtnOffLineClose() {
            this.visible = !1, this.OffLineUI.visible = !1, this.zOrder = 0, this.notifyUIState(D.Youzi_OffLine, !1);
        }
        onOffLinelistItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的hotlist索引：" + t);
                var i = this.offLineGameDatas[t];
                if (i.locationIndex = I.OFFLINE, i.type = 3, 1 == i.hotred) this.OffLineList.getCell(t).getChildByName("icon").getChildByName("redhit").visible = !1;
                E.clickGameYouziUIId = D.Youzi_OffLine, E.startOtherGame(i, null);
            } else "mouseover" == e.type || e.type;
        }
    }
    class te extends G.youzi.Youzi_FullScreenUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.fullScreenExposure = {}, this.breaki = 14,
                this.curFront = !0, this.curBack = !1, this.stopAction = !1, this.isClick = !1,
                this.dur = 5e3, this.endCompletHandler = null, this.startCompleteHandler = null,
                this.FullScreenUIScale = 1, this.uiStateCallCopy = null, this.column = 3, this.row = 4,
                this.visible = !1, this.FullScreenUI.visible = !1, this.FullScreenList.visible = !1,
                this.FullScreenList.vScrollBarSkin = "", this.designWHAdapter(), this.initCustomParams(e),
                this.scale(0, 0), this.pivot(this.width / 2, this.height / 2), this.pos(Laya.stage.width / 2, this.height / 2),
                this.closeFullScreen.on(Laya.Event.CLICK, this, this.onCloseFullScreen);
        }
        designWHAdapter() {
            "full" == Laya.stage.scaleMode ? (this.FullScreenUIScale = Laya.stage.width / this.width,
                this.FullScreenUI.scale(this.FullScreenUIScale, this.FullScreenUIScale), this.width = Laya.stage.width,
                this.height = Laya.stage.height) : (Laya.stage.designWidth != this.width && (this.FullScreenUIScale = Laya.stage.designWidth / this.width,
                this.FullScreenUI.scale(this.FullScreenUIScale, this.FullScreenUIScale), this.BG.scaleX = this.FullScreenUIScale,
                this.width = Laya.stage.designWidth), Laya.stage.designHeight != this.height && (this.BG.scaleY = Laya.stage.designHeight / this.height,
                this.height = Laya.stage.designHeight)), E.getAspectRatio() > 1.9 && (this.BG.scaleY = 2,
                this.height += 300, this.FullScreenUI.height += 300, this.FullScreenList.repeatY = 5,
                this.FullScreenList.height += 300, this.breaki = 17);
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null);
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("fullMatrixScreenDatas"), E.getPropertiesValue(p.FullScreen_Name) && (this.namelabLabel = null),
                E.fullMatrixScreenDatas.length > 0 ? (this.column = this.FullScreenList.repeatX,
                    this.row = this.FullScreenList.repeatY, this.dur = E.fullMatrixScreenDatas.length > this.breaki + 1 ? 5e3 * (E.fullMatrixScreenDatas.length - this.breaki) : 5e3,
                    this.FullScreenList.array = E.fullMatrixScreenDatas, this.FullScreenList.mouseHandler = new Laya.Handler(this, this.onItemClick),
                    this.FullScreenList.renderHandler = new Laya.Handler(this, this.onListRender)) : (this.destroy(),
                    console.log("全屏落地页无数据"));
        }
        onListRender(e, t) {
            0 == E.fullMatrixScreenDatas[t].hotred && (e.getChildByName("redhit").visible = !1);
            this.namelabLabel || (e.getChildByName("namelabBG").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.fullMatrixScreenDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.FullScreenUI.visible && (this.fullScreenExposure[E.fullMatrixScreenDatas[e].appid] || (E.sendExposureLog(E.fullMatrixScreenDatas[e], I.FULL_MATRIX_SCRENN),
                this.fullScreenExposure[E.fullMatrixScreenDatas[e].appid] = 1));
        }
        showFullScreen() {
            E.fullMatrixScreenDatas.length <= 0 ? console.log("全屏落地页无数据不展示") : this && this.parent && (this.zOrder = g.UI_ZORDER_TWO,
                this.visible = !0, Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.quadIn, Laya.Handler.create(this, this.showActionFinsh)));
        }
        showActionFinsh() {
            this.notifyUIState(D.Youzi_Full, !0), E.fullScreenRandomNavigate(), Laya.timer.once(3e3, this, this.starFullListAction),
                this.FullScreenUI.visible = !0, this.FullScreenList.visible = !0;
        }
        onCloseFullScreen() {
            this.stopFullListAcion(), Laya.Tween.to(this, {
                scaleX: 0,
                scaleY: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, this.closeActionFinsh));
        }
        closeActionFinsh() {
            this.zOrder = 0, this.visible = !1, this.FullScreenUI.visible = !1, this.FullScreenList.visible = !1,
                this.fullScreenExposure = {}, this.notifyUIState(D.Youzi_Full, !1);
        }
        stopFullListAcion() {
            this.stopAction = !0;
        }
        starFullListAction() {
            this.fullScreenListAutoScroll();
        }
        fullScreenListAutoScroll() {
            this.FullScreenUI.visible && (this.FullScreenList.length <= this.breaki + 1 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.FullScreenList.tweenTo(this.FullScreenList.length - this.column * this.row + 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.FullScreenList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onItemClick(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的全屏落地页索引：" + t);
                var i = E.fullMatrixScreenDatas[t];
                i.locationIndex = I.FULL_MATRIX_SCRENN, E.clickGameYouziUIId = D.Youzi_Full, E.startOtherGame(i, null);
            } else e.type;
        }
        checkExposure() {
            if (this.FullScreenUI.visible)
                for (var e = 0; e < E.fullMatrixScreenDatas.length; e++) {
                    if (e > this.breaki) {
                        console.log("break i:" + e);
                        break;
                    }
                    var t = E.fullMatrixScreenDatas[e];
                    this.fullScreenExposure[t.appid] || (this.fullScreenExposure[t.appid] = 1, E.sendExposureLog(t, I.FULL_MATRIX_SCRENN));
                }
        }
    }
    class ie extends G.youzi.Youzi_GuessLikeHUI {
        constructor(e) {
            super(), this.guessData = [], this.guessAnyItemExposure = {}, this.firstShow = !1,
                this.uiCompleteCallCopy = null, this.uiStateCallCopy = null, this.curFront = !0,
                this.curBack = !1, this.stopAction = !1, this.isClick = !1, this.dur = 5e3, this.endCompletHandler = null,
                this.startCompleteHandler = null, this.dataOrder = 1, this.scaleUI = 1, this.guessLikeUiType = 0,
                this.listTweenType = 0, this.visible = !1, this.guessUI.visible = !1, this.guesslist.vScrollBarSkin = "",
                this.designWHAdapter(), this.initCustomParams(e);
        }
        designWHAdapter() {
            E.getIsVertical() ? 720 != Laya.stage.designWidth && (this.scaleUI = Laya.stage.designWidth / 720,
                this.scale(this.scaleUI, this.scaleUI)) : 720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                this.scale(this.scaleUI, this.scaleUI));
        }
        initCustomParams(e) {
            e && (this.x = e.hasOwnProperty("x") ? e.x : 0, this.y = e.hasOwnProperty("y") ? e.y : 0,
                this.dataOrder = e.hasOwnProperty("dataOrder") ? e.dataOrder : 1, this.guessLikeUiType = e.hasOwnProperty("guessLikeUiType") ? e.guessLikeUiType : 0,
                this.listTweenType = e.hasOwnProperty("listTweenType") ? e.listTweenType : 0, 1 == this.guessLikeUiType && this.doubleGuessUI(e));
        }
        doubleGuessUI(e) {
            e.hasOwnProperty("bgVisible") && (this.guessLikeBg.visible = e.bgVisible), this.guessLikeBg.height += 55,
                this.title.visible = !1, this.guesslist.y -= 64, this.guesslist.height += 100, this.guesslist.repeatY = 4;
        }
        setYouziPosition(e, t) {
            this.pos(e, t);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("matrixBannerDatas"), E.matrixBannerDatas.length <= 0 || (1 == this.guessLikeUiType && (this.guessData = E.matrixBannerDatas.slice(0),
                    2 == this.dataOrder && this.guessData.reverse()), this.guesslist.array = this.guessData,
                this.guesslist.renderHandler = new Laya.Handler(this, this.onListRender), this.guesslist.mouseHandler = new Laya.Handler(this, this.onGuessLikeItemMouseEvent),
                this.guesslist.on(Laya.Event.MOUSE_UP, this, this.scrollMoveUp), this.visible = !0,
                this.guessUI.visible = !0, this.notifyUIComplete(D.Youzi_GuessLike, {
                    complete: !0
                }), this.notifyUIState(D.Youzi_GuessLike, !0), this.dur = this.guessData.length > 5 ? 5e3 * (this.guessData.length - 5) : 5e3,
                2 != this.guessLikeUiType && this.starGuessLikeHAction());
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", null, this.guessData[t]),
                t == this.guesslist.length - 1 && 1 == this.listTweenType && this.listTweenEndForeverCall(),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.guessUI.visible && (this.guessAnyItemExposure[this.guessData[e].appid] || (E.sendExposureLog(this.guessData[e], I.GUESS),
                this.guessAnyItemExposure[this.guessData[e].appid] = 1));
        }
        scrollMoveUp() {
            this.guesslist.scrollBar.stopScroll(), Laya.timer.frameOnce(300, this, this.starGuessLikeHAction);
        }
        stopGuessLikeHAcion() {
            this.guesslist.scrollBar.stopScroll(), this.guesslist.scrollTo(0), this.stopAction = !0;
        }
        starGuessLikeHAction() {
            this.stopAction = !1, this.guessAnylistHAutoScroll();
        }
        guessAnylistHAutoScroll() {
            0 == this.listTweenType ? this.goAndBackTween() : 1 == this.listTweenType && this.listTweenEndForever();
        }
        listTweenEndForever() {
            this.guesslist.length <= 5 || this.stopAction || this.guesslist.tweenTo(this.guesslist.length - 1, this.dur);
        }
        listTweenEndForeverCall() {
            this.guesslist.scrollTo(0), this.listTweenEndForever();
        }
        goAndBackTween() {
            this.guesslist.length <= 5 || (this.stopAction = !1, this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart());
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.guesslist.tweenTo(this.guesslist.length - this.guesslist.repeatY, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.guesslist.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onGuessLikeItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的guesslikeh索引：" + t);
                    var i = this.guessData[t];
                    2 == this.guessLikeUiType ? (i.locationIndex = I.FLOAT, E.clickGameYouziUIId = D.Youzi_SlideWindow) : (i.locationIndex = I.GUESS,
                        E.clickGameYouziUIId = D.Youzi_GuessLike), E.startOtherGame(i, this.startOtherCall.bind(this));
                }
            } else e.type;
        }
        startOtherCall(e) {
            this.isClick = !1, Laya.timer.once(1e3, this, this.starGuessLikeHAction);
        }
    }
    class se extends G.youzi.Youzi_MoreGameHUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.mainItemHExposure = {}, this.isAddToStage = !1,
                this.fisrtShow = !1, this.isCreate = !1, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.moreBtn = null, this.curFront = !0, this.curBack = !1, this.stopAction = !1,
                this.isClick = !1, this.dur = 5e3, this.scaleMoreGameUIH = 1, this.designWHAdapter(),
                this.initCustomParams(e), this.visible = !1, this.MoreGameUI.visible = !1, this.moreGameList.vScrollBarSkin = "",
                this.moreGameCloseBtn.on(Laya.Event.CLICK, this, this.onBtnCloseClicked);
        }
        designWHAdapter() {
            Laya.stage.designHeight != this.height && (this.scaleMoreGameUIH = Laya.stage.designHeight / this.height,
                this.MoreGameUI.scale(this.scaleMoreGameUIH, this.scaleMoreGameUIH), this.maskBG.scale(this.scaleMoreGameUIH, this.scaleMoreGameUIH),
                this.height = Laya.stage.designHeight), Laya.stage.designWidth != this.width && (this.maskBG.scaleX = Laya.stage.designWidth / this.width,
                this.width = Laya.stage.designWidth);
        }
        initCustomParams(e) {
            e ? (this.MoreGameUI.x = e.hasOwnProperty("x") ? e.x : (Laya.stage.width - this.MoreGameUI.width * this.scaleMoreGameUIH) / 2,
                this.MoreGameUI.y = e.hasOwnProperty("y") ? e.y : (Laya.stage.height - this.MoreGameUI.height * this.scaleMoreGameUIH) / 2,
                this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null) : this.MoreGameUI.pos((Laya.stage.width - this.MoreGameUI.width * this.scaleMoreGameUIH) / 2, (Laya.stage.height - this.MoreGameUI.height * this.scaleMoreGameUIH) / 2);
        }
        setAddToStage(e) {
            this.isAddToStage = e;
        }
        setMoreGameBtn(e) {
            this.moreBtn = e;
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        showMoreGameUI() {
            this.isCreate && !this.visible && (this.isAddToStage && (this.zOrder = g.UI_ZORDER_THREE),
                this.visible = !0, this.moreGameList.mouseThrough = !1, this.MoreGameUI.visible = !0,
                this.notifyUIState(D.Youzi_MoreGame, !0), this.starMoreGameAction(), this.fisrtShow || (this.fisrtShow = !0,
                    this.checkExposure()));
        }
        onBtnCloseClicked() {
            this.stopMoreGameAcion(), this.visible = !1, this.moreGameList.mouseThrough = !0,
                this.MoreGameUI.visible = !1, this.notifyUIState(D.Youzi_MoreGame, !1), this.isAddToStage && (this.zOrder = 0);
        }
        initShow() {
            E.getPropertiesValue(p.MoreGame_Name) && (this.namelabLabel = null, this.moreGameList.spaceY = -15),
                E.moreDatas.length > 0 && (this.moreBtn && (this.moreBtn.visible = !0), this.moreGameList.array = E.moreDatas,
                    this.moreGameList.renderHandler = new Laya.Handler(this, this.onListRender), this.moreGameList.mouseHandler = new Laya.Handler(this, this.moreGameListMouseEvent),
                    this.isCreate = !0, this.dur = E.moreDatas.length > 12 ? 5e3 * (E.moreDatas.length - 12) : 5e3);
        }
        onListRender(e, t) {
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.moreDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.MoreGameUI.visible && (this.mainItemHExposure[E.moreDatas[e].appid] || (E.sendExposureLog(E.moreDatas[e], I.MORE),
                this.mainItemHExposure[E.moreDatas[e].appid] = 1));
        }
        stopMoreGameAcion() {
            this.stopAction = !0;
        }
        starMoreGameAction() {
            this.moreGameListAutoScroll();
        }
        moreGameListAutoScroll() {
            this.MoreGameUI.visible && (this.moreGameList.length <= 12 || (this.stopAction = !1,
                this.dur = 5e3 * (E.moreDatas.length - 12), this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            if (!this.stopAction) {
                var e = new Laya.Handler(this, this.listTweenToStart, null, !0);
                this.moreGameList.tweenTo(this.moreGameList.length - 1, this.dur, e);
            }
            this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            if (!this.stopAction) {
                var e = new Laya.Handler(this, this.listTweenToEnd, null, !0);
                this.moreGameList.tweenTo(0, this.dur, e);
            }
            this.curFront = !1, this.curBack = !0;
        }
        moreGameListMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的moreGameH索引：" + t);
                    var i = E.moreDatas[t];
                    i.locationIndex = I.MORE, E.clickGameYouziUIId = D.Youzi_MoreGame, E.startOtherGame(i, this.startOtherCall.bind(this));
                }
            } else e.type;
        }
        startOtherCall() {
            this.isClick = !1, this.starMoreGameAction();
        }
        checkExposure() {
            if (this.MoreGameUI.visible)
                for (var e = 0; e < E.moreDatas.length && !(e >= 11); e++) {
                    var t = E.moreDatas[e];
                    this.mainItemHExposure[t.appid] || (this.mainItemHExposure[t.appid] = 1, E.sendExposureLog(t, I.MORE));
                }
        }
    }
    class ae extends G.youzi.Youzi_OffLineHUI {
        constructor() {
            super(), this.offLineGameShow = [], this.offLineGameDatas = [], this.offLineCreateComplete = !1,
                this.isSendLog = !0, this.uiCompleteCallCopy = null, this.uiStateCallCopy = null,
                this.hideOffLineGameTimes = 0, this.scaleUI = 1, this.OffLineUI.pos(Laya.stage.width / 2 - this.OffLineUI.width / 2, Laya.stage.height / 2 - this.OffLineUI.height / 2),
                this.visible = !1, this.OffLineUI.visible = !1, this.designWHAdapter(), this.OffLineCloseButton.on(Laya.Event.CLICK, this, this.onBtnOffLineClose);
        }
        designWHAdapter() {
            720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                    this.OffLineUI.scale(this.scaleUI, this.scaleUI), this.OffLineMask.scale(this.scaleUI, this.scaleUI)),
                E.getAspectRatio() > 1.9 && (this.OffLineMask.scaleX = 2);
        }
        setUICompleteCall(e) {
            this.uiCompleteCallCopy = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            this.offLineGameDatas = E.offlineBannerDatas, this.wxOnShow(), this.wxOnHide();
        }
        wxOnShow() {
            var e = this;
            Laya.Browser.window.wx && Laya.Browser.window.wx.onShow(function(t) {
                var i = Math.floor(new Date().getTime() - e.hideOffLineGameTimes);
                if (Math.floor(i / 1e3) >= 8 && e.offLineCreateComplete && (e.zOrder = g.UI_ZORDER_ONE,
                        e.visible = !0, e.OffLineUI.visible = !0, e.notifyUIState(D.Youzi_OffLine, !0),
                        e.isSendLog))
                    for (var s = 0; s < e.offLineGameShow.length; s++) E.sendExposureLog(e.offLineGameShow[s], I.OFFLINE),
                        s == e.offLineGameShow.length && (e.isSendLog = !1);
            });
        }
        wxOnHide() {
            var e = this;
            Laya.Browser.window.wx && Laya.Browser.window.wx.onHide(function() {
                e.hideOffLineGameTimes = new Date().getTime(), e.offLineGameDatas.length > 0 && !e.offLineCreateComplete && e.createOffLineDialog();
            });
        }
        createOffLineDialog() {
            if (this.offLineGameDatas.length <= 0) console.log("离线推荐没有数据");
            else {
                for (var e = [], t = 0; t < this.offLineGameDatas.length && !(t >= 3); t++) {
                    var i = this.offLineGameDatas[t];
                    e.push({
                        infoData: i,
                        namelab: i.title
                    });
                }
                var s = 0;
                switch (e.length) {
                    case 1:
                        s = 205;
                        break;

                    case 2:
                        s = 85, this.OffLineList.spaceX = 50;
                        break;

                    default:
                        s = 8, this.OffLineList.spaceX = 15;
                }
                this.OffLineList.x = s, this.OffLineList.mouseHandler = new Laya.Handler(this, this.onOffLinelistItemMouseEvent),
                    this.OffLineList.dataSource = e;
                for (var a = 0; a < this.offLineGameDatas.length; a++) {
                    if (1 == this.offLineGameDatas[a].dynamicType && this.offLineGameDatas[a].dynamicIcon) {
                        var n = this.OffLineList.getCell(a).getChildByName("iconAnima");
                        n.scale(1.16, 1.16), new R().createAnimation(this.offLineGameDatas[a].dynamicIcon, function(e) {
                            n.frames = e.frames, n.interval = e.interval, n.visible = !0, n.play();
                        });
                    } else {
                        this.OffLineList.getCell(a).getChildByName("icon").skin = this.offLineGameDatas[a].iconImg;
                    }
                    if (1 == this.offLineGameDatas[a].hotred) this.OffLineList.getCell(a).getChildByName("redhit").visible = !0;
                    if (this.offLineGameShow.push(this.offLineGameDatas[a]), ++a >= e.length) {
                        this.offLineCreateComplete = !0;
                        break;
                    }
                }
                this.notifyUIComplete(D.Youzi_OffLine, {
                    complete: !0
                });
            }
        }
        onBtnOffLineClose() {
            this.visible = !1, this.OffLineUI.visible = !1, this.zOrder = 0, this.notifyUIState(D.Youzi_OffLine, !1);
        }
        onOffLinelistItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的hotlist索引：" + t);
                var i = this.offLineGameDatas[t];
                if (i.locationIndex = I.OFFLINE, i.type = 3, 1 == i.hotred) this.OffLineList.getCell(t).getChildByName("icon").getChildByName("redhit").visible = !1;
                E.clickGameYouziUIId = D.Youzi_OffLine, E.startOtherGame(i, null);
            } else "mouseover" == e.type || e.type;
        }
    }
    class ne extends G.youzi.Youzi_SlideWindowHUI {
        constructor(e, t) {
            super(), this.namelabLabel = "namelab", this.slideItemExposure = {}, this.uiCompleteCallCopy = null,
                this.uiStateCallCopy = null, this.slideButton = null, this.slideMask = null, this.showFirst = !1,
                this.acitonPianYi = 0, this.isLeft = !1, this.isAddStage = !1, this.moveDistance = this.width,
                this.scaleUI = 1, this.visible = !1, this.SlideWindowUI.visible = !1, this.slideList.vScrollBarSkin = "",
                this.isLeft = e, this.btnSLideClose.on(Laya.Event.CLICK, this, this.closeSlideWindow),
                E.getAspectRatio() >= 1.9 && (this.acitonPianYi = 20), e ? this.left = -this.width : (this.right = -this.width,
                    this.slideBg.scaleX = -1, this.slideBg.pos(this.slideBg.width, this.slideBg.y),
                    this.slideList.pos(this.slideList.x, this.slideList.y)), this.designWHAdapter(),
                this.initCustomParams(t);
        }
        designWHAdapter() {
            720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                    this.scale(this.scaleUI, this.scaleUI)), this.y = Laya.stage.height / 2 - this.height * this.scaleUI / 2,
                this.moveDistance = this.width * this.scaleUI;
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null,
                e.hasOwnProperty("y") && (this.y = e.y), e.hasOwnProperty("scaleY") && (this.scaleY = e.scaleY),
                e.hasOwnProperty("scaleX") && (this.scaleX = e.scaleX, this.moveDistance = this.width * e.scaleX));
        }
        setAddToStage(e) {
            this.isAddStage = e;
        }
        setSlideButton(e) {
            this.slideButton = e;
        }
        setSlideMask(e) {
            this.slideMask = e;
        }
        notifyUIComplete(e, t) {
            this.uiCompleteCallCopy && this.uiCompleteCallCopy(e, t);
        }
        offUICompleteCall() {
            this.uiCompleteCallCopy && (this.uiCompleteCallCopy = null);
        }
        setUIStateCall(e) {
            this.uiStateCallCopy = e;
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        offUIStateCall() {
            this.uiStateCallCopy && (this.uiStateCallCopy = null);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        showSlideBtnAndHideSlideMask() {
            this.slideButton && (this.slideButton.visible = !0), this.slideMask && (this.slideMask.visible = !1);
        }
        hideSlideBtnAndShowSlideMask() {
            this.slideButton && (this.slideButton.visible = !1), this.slideMask && (this.slideMask.visible = !0);
        }
        showSlideWindow() {
            if (E.hotListDatas.length <= 0) console.log("抽屉没有数据");
            else if (this.isAddStage && (this.slideMask.zOrder = g.UI_ZORDER_THREE - 1,
                    this.zOrder = g.UI_ZORDER_THREE), !this.SlideWindowUI.visible) {
                this.visible = !0, this.SlideWindowUI.visible = !0, this.hideSlideBtnAndShowSlideMask();
                var e = this;
                this.slideWindowActionShow(function() {
                    e.notifyUIState(D.Youzi_SlideWindow, !0), e.showFirst || (e.showFirst = !0, e.checkExposure());
                });
            }
        }
        slideWindowActionShow(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: this.acitonPianYi
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: this.acitonPianYi
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e));
        }
        closeSlideWindow() {
            if (E.hotListDatas.length <= 0) console.log("抽屉没有数据");
            else {
                var e = this;
                this.slideWindowActionClose(function() {
                    e.notifyUIState(D.Youzi_SlideWindow, !1), e.visible = !1, e.SlideWindowUI.visible = !1,
                        e.btnSLideClose.visible = !0, e.showSlideBtnAndHideSlideMask(), e.isAddStage && (e.slideMask.zOrder = 0,
                            e.zOrder = 0);
                }), e.btnSLideClose.visible = !1;
            }
        }
        slideWindowActionClose(e) {
            this.isLeft ? Laya.Tween.to(this, {
                left: -this.moveDistance
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e)) : Laya.Tween.to(this, {
                right: -this.moveDistance
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, e));
        }
        initShow() {
            E.dataNullReset("hotListDatas"), E.getPropertiesValue(p.SlideWindow_Name) && (this.namelabLabel = null,
                this.slideList.spaceY = -25), E.hotListDatas.length > 0 && (this.slideButton && (this.slideButton.visible = !0),
                this.slideList.array = E.hotListDatas, this.slideList.renderHandler = new Laya.Handler(this, this.onListRender),
                this.slideList.mouseHandler = new Laya.Handler(this, this.onslideListItemMouseEvent));
        }
        onListRender(e, t) {
            0 == E.hotListDatas[t].hotred && (e.getChildByName("markImg").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.hotListDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.SlideWindowUI.visible && (this.slideItemExposure[E.hotListDatas[e].appid] || (E.sendExposureLog(E.hotListDatas[e], I.FLOAT),
                this.slideItemExposure[E.hotListDatas[e].appid] = 1));
        }
        onslideListItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的slideh索引：" + t);
                var i = E.hotListDatas[t];
                if (i.locationIndex = I.FLOAT, E.clickGameYouziUIId = D.Youzi_SlideWindow, E.startOtherGame(i, null),
                    1 == i.hotred) this.slideList.getCell(t).getChildByName("markImg").visible = !1;
            } else e.type;
        }
        checkExposure() {
            if (this.SlideWindowUI.visible)
                for (var e = 0; e < E.hotListDatas.length && !(e > 11); e++) {
                    var t = E.hotListDatas[e];
                    this.slideItemExposure[t.appid] || (this.slideItemExposure[t.appid] = 1, E.sendExposureLog(t, I.FLOAT));
                }
        }
    }
    class oe extends G.youzi.Youzi_SmallWallHUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.smallWallHItemExposure = {}, this.smallWallHItemExposureCount = 0,
                this.curFront = !0, this.curBack = !1, this.stopAction = !1, this.isClick = !1,
                this.dur = 5e3, this.scaleUI = 1, this.endCompletHandler = null, this.startCompleteHandler = null,
                this.visible = !1, this.SmallWallUIH.visible = !1, this.smallWallListH.vScrollBarSkin = "",
                this.designWHAdapter(), this.initCustomParams(e);
        }
        designWHAdapter() {
            720 != Laya.stage.designHeight && (this.scaleUI = Laya.stage.designHeight / 720,
                this.scale(this.scaleUI, this.scaleUI));
        }
        initCustomParams(e) {
            e && (this.x = e.hasOwnProperty("x") ? e.x : 0, this.y = e.hasOwnProperty("y") ? e.y : 0);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.getPropertiesValue(p.SmallWall_Name) && (this.namelabLabel = null, this.smallWallListH.repeatY = 2,
                this.smallWallListH.spaceY = -25), E.moreDatas.length > 0 && (this.smallWallListH.renderHandler = new Laya.Handler(this, this.onListRender),
                this.smallWallListH.array = E.moreDatas, this.smallWallListH.mouseHandler = new Laya.Handler(this, this.onSmallWallListItemMouseEvent),
                this.visible = !0, this.SmallWallUIH.visible = !0, this.dur = E.moreDatas.length > 8 ? 5e3 * (E.moreDatas.length - 8) : 5e3,
                this.starSmallWallAction());
        }
        onListRender(e, t) {
            1 == E.moreDatas[t].hotred && (e.getChildByName("redhit").visible = !0);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.moreDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.visible && this.SmallWallUIH.visible && (this.smallWallHItemExposure[E.moreDatas[e].appid] || (E.sendExposureLog(E.moreDatas[e], I.SMALL_MATRIX_WALL),
                this.smallWallHItemExposure[E.moreDatas[e].appid] = 1));
        }
        stopSmallWallAcion() {
            this.stopAction = !0;
        }
        starSmallWallAction() {
            this.smallWallListAutoScroll();
        }
        smallWallListAutoScroll() {
            this.SmallWallUIH.visible && (this.smallWallListH.length <= 8 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.smallWallListH.tweenTo(this.smallWallListH.length - 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.smallWallListH.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onSmallWallListItemMouseEvent(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                if (!this.isClick) {
                    this.isClick = !0, console.log("当前选择的大家都在玩儿索引：" + t);
                    var i = E.moreDatas[t];
                    if (i.locationIndex = I.SMALL_MATRIX_WALL, E.clickGameYouziUIId = D.Youzi_SmallWall,
                        E.startOtherGame(i, this.startOtherCall.bind(this)), 1 == i.hotred) this.smallWallListH.getCell(t).getChildByName("redhit").visible = !1;
                }
            } else e.type;
        }
        startOtherCall(e) {
            this.isClick = !1, this.starSmallWallAction();
        }
    }
    class le extends G.youzi.Youzi_FullScreenHUI {
        constructor(e) {
            super(), this.namelabLabel = "namelab", this.fullScreenExposure = {}, this.FullScreenUIScale = 1,
                this.breaki = 14, this.curFront = !0, this.curBack = !1, this.stopAction = !1, this.isClick = !1,
                this.dur = 5e3, this.endCompletHandler = null, this.startCompleteHandler = null,
                this.uiStateCallCopy = null, this.column = 3, this.row = 4, this.visible = !1, this.FullScreenUI.visible = !1,
                this.FullScreenList.hScrollBarSkin = "", this.designWHAdapter(), this.initCustomParams(e),
                this.scale(0, 0), this.pivot(this.width / 2, this.height / 2), this.pos(this.width / 2, Laya.stage.designHeight / 2),
                this.closeFullScreen.on(Laya.Event.CLICK, this, this.onCloseFullScreen);
        }
        designWHAdapter() {
            Laya.stage.designHeight != this.height && (this.FullScreenUIScale = Laya.stage.designHeight / this.height,
                this.FullScreenUI.scale(this.FullScreenUIScale, this.FullScreenUIScale), this.BG.scaleY = this.FullScreenUIScale,
                this.height = Laya.stage.designHeight), Laya.stage.designWidth != this.width && (this.BG.scaleX = Laya.stage.designWidth / this.width,
                this.width = Laya.stage.designWidth), E.getAspectRatio() > 1.9 && (this.BG.scaleX = 2,
                this.width += 300, this.FullScreenUI.width += 300, this.FullScreenList.repeatX = 5,
                this.FullScreenList.width += 300, this.breaki = 17);
        }
        initCustomParams(e) {
            e && (this.uiStateCallCopy = e.hasOwnProperty("uiStateCall") ? e.uiStateCall : null);
        }
        notifyUIState(e, t) {
            this.uiStateCallCopy && this.uiStateCallCopy(e, t);
        }
        onAwake() {
            E.getDataLoaded() ? this.initShow() : E._loadedCallBacks.push(this.initShow.bind(this));
        }
        initShow() {
            E.dataNullReset("fullMatrixScreenDatas"), E.getPropertiesValue(p.FullScreen_Name) && (this.namelabLabel = null),
                E.fullMatrixScreenDatas.length > 0 ? (this.dur = E.fullMatrixScreenDatas.length > this.breaki + 1 ? 5e3 * (E.fullMatrixScreenDatas.length - this.breaki - 1) : 5e3,
                    this.column = this.FullScreenList.repeatX, this.row = this.FullScreenList.repeatY,
                    this.FullScreenList.array = E.fullMatrixScreenDatas, this.FullScreenList.mouseHandler = new Laya.Handler(this, this.onItemClick),
                    this.FullScreenList.renderHandler = new Laya.Handler(this, this.onListRender)) : console.log("全屏落地页无数据");
        }
        onListRender(e, t) {
            0 == E.fullMatrixScreenDatas[t].hotred && (e.getChildByName("redhit").visible = !1);
            this.namelabLabel || (e.getChildByName("namelabBG").visible = !1);
            O.getInstance().createYouziListItem(e, "icon", "iconAnima", this.namelabLabel, E.fullMatrixScreenDatas[t]),
                this.checkSendExpsureLog(t);
        }
        checkSendExpsureLog(e) {
            this.FullScreenUI.visible && (this.fullScreenExposure[E.fullMatrixScreenDatas[e].appid] || (E.sendExposureLog(E.fullMatrixScreenDatas[e], I.FULL_MATRIX_SCRENN),
                this.fullScreenExposure[E.fullMatrixScreenDatas[e].appid] = 1));
        }
        showFullScreen() {
            E.fullMatrixScreenDatas.length <= 0 ? console.log("全屏落地页无数据不展示") : this && this.parent && (this.zOrder = g.UI_ZORDER_TWO,
                this.visible = !0, this.FullScreenUI.visible = !0, Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.quadIn, Laya.Handler.create(this, this.showActionFinsh)));
        }
        showActionFinsh() {
            this.notifyUIState(D.Youzi_Full, !0), E.fullScreenRandomNavigate(), Laya.timer.once(3e3, this, this.starFullListAction);
        }
        onCloseFullScreen() {
            this.stopFullListAcion(), Laya.Tween.to(this, {
                scaleX: 0,
                scaleY: 0
            }, 500, Laya.Ease.quadInOut, Laya.Handler.create(this, this.closeActionFinsh));
        }
        closeActionFinsh() {
            this.zOrder = 0, this.visible = !1, this.FullScreenUI.visible = !1, this.fullScreenExposure = {},
                this.notifyUIState(D.Youzi_Full, !1);
        }
        stopFullListAcion() {
            this.stopAction = !0;
        }
        starFullListAction() {
            this.fullScreenListAutoScroll();
        }
        fullScreenListAutoScroll() {
            this.FullScreenUI.visible && (this.FullScreenList.length <= this.breaki + 1 || (this.stopAction = !1,
                this.curFront && !this.curBack ? this.listTweenToEnd() : !this.curFront && this.curBack && this.listTweenToStart()));
        }
        listTweenToEnd() {
            this.stopAction || (this.endCompletHandler = new Laya.Handler(this, this.listTweenToStart, null, !0),
                    this.FullScreenList.tweenTo(this.FullScreenList.length - this.column * this.row + 1, this.dur, this.endCompletHandler)),
                this.curFront = !0, this.curBack = !1;
        }
        listTweenToStart() {
            this.stopAction || (this.startCompleteHandler = new Laya.Handler(this, this.listTweenToEnd, null, !0),
                    this.FullScreenList.tweenTo(0, this.dur, this.startCompleteHandler)), this.curFront = !1,
                this.curBack = !0;
        }
        onItemClick(e, t) {
            if ("mousedown" == e.type);
            else if ("mouseup" == e.type) {
                console.log("当前选择的全屏落地页索引：" + t);
                var i = E.fullMatrixScreenDatas[t];
                i.locationIndex = I.FULL_MATRIX_SCRENN, E.clickGameYouziUIId = D.Youzi_Full, E.startOtherGame(i, null);
            } else e.type;
        }
        checkExposure() {
            if (this.FullScreenUI.visible)
                for (var e = 0; e < E.fullMatrixScreenDatas.length && !(e > this.breaki); e++) {
                    var t = E.fullMatrixScreenDatas[e];
                    this.fullScreenExposure[t.appid] || (this.fullScreenExposure[t.appid] = 1, E.sendExposureLog(t, I.FULL_MATRIX_SCRENN));
                }
        }
    }
    const re = {
        Test: 1002,
        WeChat: 1002,
        OppoMiniGame: 8001,
        TouTiao: 11001
    };
    class he {
        constructor() {
            this.gamePageCallTemp = null, this.fullScreenMatrixNode = null, this.fullScreenMatrix = null,
                this.fullScreenMatrixH = null, this.recentlyUsedScreen = null, this.fullMixBanner = null,
                this.vertical = !0, this.hw = 0, this.tempMoreGameUI = null, this.tempSlideWindowUI = null,
                this.slideWindowMask = null, this.tempMoreGameUIH = null, this.tempSlideWindowUIH = null,
                this.slideWindowMaskH = null, this.offLineTemp = null;
        }
        static getInstance() {
            return null == this.instance && (this.instance = new he()), this.instance;
        }
        youziDebug(e) {
            E.setPropertiesValue("debug", e);
        }
        openFullAutoNavigate(e) {
            E.openFullNavigate(e);
        }
        setGameNameHide(e, t) {
            E.setPropertiesValue(e, t);
        }
        initYouzi(e, t, i) {
            E.setPropertiesValue("createGamePageCall", this.createYouziGamePage.bind(this)),
                this.getAspectRatio(), E.init(e, t, i);
        }
        getAspectRatio() {
            0 == this.hw && (Laya.stage.width > Laya.stage.height ? (this.vertical = !1, this.hw = Laya.Browser.width / Laya.Browser.height) : this.hw = Laya.Browser.height / Laya.Browser.width),
                E.setPropertiesValue("aspectRatio", this.hw);
        }
        createYouziGamePage(e, t) {
            new j(e, t).setUIStateCall(this.gamePageCallTemp);
        }
        registerNavigateToMiniCall(e) {
            E.setPropertiesValue("navigateToMiniCall", e);
        }
        offNavigateToMimiCall() {
            E.setPropertiesValue("navigateToMiniCall", null);
        }
        registerGamePageCall(e) {
            this.gamePageCallTemp = e;
        }
        offGamePageCall() {
            this.gamePageCallTemp = null;
        }
        createMoreGameButton(e, t, i) {
            // var s = null;
            // i || (i = {}), (s = i.hasOwnProperty("btnUrl") ? new Laya.Button(i.btnUrl) : new Laya.Button("youziTexture/btn-entrance-nogift.png")).visible = !1, 
            // s.mouseEnabled = !0, s.stateNum = 1, s.width = i.hasOwnProperty("width") ? i.width : 119, 
            // s.height = i.hasOwnProperty("height") ? i.height : 119;
            // var a = i.hasOwnProperty("x") ? i.x : 0, n = i.hasOwnProperty("y") ? i.y : 0;
            // return s.pos(a, n), e.addChild(s), t && (s.dataSource = 1), s;
        }
        showMoreGameUI(e) {
            e && e.showMoreGameUI();
        }
        createMoreGameUIToStage(e, t) {
            // return this.tempMoreGameUI || (this.tempMoreGameUI = new $(t), this.tempMoreGameUI.setAddToStage(!0), 
            // this.tempMoreGameUI.setMoreGameBtn(e), Laya.stage.addChild(this.tempMoreGameUI)), 
            // e && 1 == e.dataSource && e.on(Laya.Event.CLICK, this, this.showMoreGameUI, [ this.tempMoreGameUI ]), 
            // this.tempMoreGameUI;
        }
        createMoreGameUIHToStage(e, t) {
            // return this.tempMoreGameUIH || (this.tempMoreGameUIH = new se(t), this.tempMoreGameUIH.setAddToStage(!0), 
            // this.tempMoreGameUIH.setMoreGameBtn(e), Laya.stage.addChild(this.tempMoreGameUIH)), 
            // e && 1 == e.dataSource && e.on(Laya.Event.CLICK, this, this.showMoreGameUI, [ this.tempMoreGameUIH ]), 
            // this.tempMoreGameUIH;
        }
        createMoreGameUI(e, t, i) {
            var s = new $(i);
            return s.setMoreGameBtn(t), t && 1 == t.dataSource && t.on(Laya.Event.CLICK, this, this.showMoreGameUI, [s]),
                e.addChild(s), s;
        }
        createMoreGameUIH(e, t, i) {
            var s = new se(i);
            return s.setMoreGameBtn(t), t && 1 == t.dataSource && t.on(Laya.Event.CLICK, this, this.showMoreGameUI, [s]),
                e.addChild(s), s;
        }
        createSlideButton(e, t, i, s) {
            // var a = new Laya.Button("youziTexture/btn_slide.png");
            // a.mouseEnabled = !0, a.stateNum = 1, s || (s = {}), a.visible = !1, a.width = s.hasOwnProperty("width") ? s.width : 80, 
            // a.height = s.hasOwnProperty("height") ? s.width : 74;
            // var n = 0, o = s.hasOwnProperty("y") ? s.y : Laya.stage.height / 2;
            // return t ? (a.scaleX = -1, n = s.hasOwnProperty("x") ? s.x : a.width) : n = s.hasOwnProperty("x") ? s.x : Laya.stage.width - a.width, 
            // a.pos(n, o), e.addChild(a), i && (a.dataSource = 1), a;
        }
        showSlideWindowUI(e, t) {
            t && (t.setSlideButton(e), t.showSlideWindow());
        }
        createSlideWindowToStage(e, t, i) {}
        createSlideWindowHToStage(e, t, i) {}
        createSlideWindowUI(e, t, i, s) {}
        createSlideWindowUIH(e, t, i, s) {}
        createSlideBanner(e, t, i, s) {}
        createCacheSlideWindowMask() {}
        createSlideWindowMask() {}
        createBottomBanner(e, t, i) {}
        bottomBannerActionStopOrStart(e, t) {
            t && (e ? t.stopBottomBannerAcion() : t.starBottomBannerAction());
        }
        createGuessLike(e, t) {}
        createGuessLikeH(e, t) {}
        guessLikeListTweenStopOrStart(e, t, i) {
            t && (e ? t.stopGuessLikeAcion() : t.starGuessLikeAction()), i && (e ? i.stopGuessLikeHAcion() : i.starGuessLikeHAction());
        }
        createMainPush(e, t) {
            var i = new H(t);
            return e.addChild(i), i;
        }
        mainPushActionStopOrStart(e, t) {
            e ? t.clearTimerLoop() : t.startTimerLoop();
        }
        createMultiMainPush(e) {
            return new V(e);
        }
        stopOrStartMultiMainPush(e, t) {
            t && (e ? t.stopChangeTimeLoop() : t.startChangeTimeLoop());
        }
        createOffline(e) {
            this.offLineTemp || (this.offLineTemp = new ee(), this.offLineTemp.setUIStateCall(e),
                Laya.stage.addChild(this.offLineTemp));
        }
        createOfflineH(e) {
            this.offLineTemp || (this.offLineTemp = new ae(), this.offLineTemp.setUIStateCall(e),
                Laya.stage.addChild(this.offLineTemp));
        }
        createYouzi_WechatBanner(e, t = null, i = null, s = !1, a = !1) {
            return new F(e, t, i, s, a);
        }
        createYouzi_GameBanner(e, t, i) {
            var s = new Y(e, t);
            return i && s.setYouziPosition(i.x, i.y), s;
        }
        createYouziSmallWall(e, t) {
            var i = new Q(t);
            return e.addChild(i), i;
        }
        smallWallActionStopOrStart(e, t) {
            t && (e ? t.stopSmallWallAcion() : t.starSmallWallAction());
        }
        createYouziSmallWallH(e, t) {
            var i = new oe(t);
            return e.addChild(i), i;
        }
        smallWallHActionStopOrStart(e, t) {
            t && (e ? t.stopSmallWallAcion() : t.starSmallWallAction());
        }
        showFullMatrixAutoType(e) {
            E.getDataLoaded() ? this.fullScreenAutoCreate(e) : E._loadedCallBacks.push(this.fullScreenAutoCreate.bind(this, null, [e]));
        }
        fullScreenAutoCreate(e) {
            switch (e && e.hasOwnProperty("fullScreenType") ? e.fullScreenType : E._fullScreenType) {
                case y.TYPE_FULL_MATRIX:
                    this.showFullScreenMatrix(e);
                    break;

                case y.TYPE_RECENTLY_USED:
                    this.showFullRecentlyUsed(e);
                    break;

                case y.TYPE_FULL_MIXBANNER:
                    this.showFullMixBannerScreen(e);
                    break;

                default:
            }
        }
        showFullScreenMatrix(e) {
            this.fullScreenMatrix ? this.vertical ? this.fullScreenMatrix.showFullScreen() : this.fullScreenMatrixH.showFullScreen() : this.vertical ? (this.fullScreenMatrix = new te(e),
                this.fullScreenMatrixNode = Laya.stage.addChild(this.fullScreenMatrix), this.fullScreenMatrix.showFullScreen()) : (this.fullScreenMatrixH = new le(e),
                this.fullScreenMatrixNode = Laya.stage.addChild(this.fullScreenMatrixH), this.fullScreenMatrixH.showFullScreen());
        }
        showFullRecentlyUsed(e) {
            this.recentlyUsedScreen ? this.recentlyUsedScreen.showRecentlyUsed() : (this.recentlyUsedScreen = new X(e),
                Laya.stage.addChild(this.recentlyUsedScreen), this.recentlyUsedScreen.showRecentlyUsed());
        }
        showFullMixBannerScreen(e) {
            this.fullMixBanner ? this.fullMixBanner.showFullMixBanner() : (this.fullMixBanner = new K(e),
                Laya.stage.addChild(this.fullMixBanner), this.fullMixBanner.showFullMixBanner());
        }
    }
    he.instance = null;
    class de extends e {
        onInit() {
            he.getInstance().initYouzi("wx1012fa06ee4c6a6e", "1.00.23", re.Test), this.onInitEvent(),
                he.getInstance().registerNavigateToMiniCall(e => {
                    e !== D.Youzi_MainPush && e !== D.Youzi_SlideWindow || this.showFullMatrix();
                }), this.biEventStat(10);
        }
        login(e) {
            e && e();
        }
        getUserInfo(e) {
            e && e();
        }
        share() {}
        openOtherGame(e, t) {
            t(!0);
        }
        showQRcord(e, t) {
            t(!0);
        }
        sendMsgToSub(e, t) {}
        onExitMiniGame() {}
        onBannerAd(e = !0) {}
        onVideoAd(e, t = 0) {
            e(!0);
        }
        showInsertAd(e = null, t = 0) {
            this.showFullMatrix();
        }
        onInitEvent() {}
        biEventStat(e) {}
        biActionStat(e) {}
        biADError(e, t) {}
        biLevelStat(e, t) {}
        onStartRecord() {}
        onStopRecord(e) {
            e(!0);
        }
        onPause() {}
        onResume() {}
        adLogin() {}
        onMainPush(e) {
            he.getInstance().createMainPush(e, {
                x: 100,
                y: 200
            });
        }
        onMultiMainPush(e) {
            he.getInstance().createMultiMainPush(e);
        }
        onBottomBanner(e) {
            he.getInstance().createBottomBanner(e, !1, {
                x: 0,
                y: 900
            });
        }
        onShowFullMatrix() {
            he.getInstance().showFullMatrixAutoType({
                uiStateCall: function(e, t) {}
            });
        }
        onSlideWindowUI() {
            // let e = he.getInstance().createSlideButton(Laya.stage, !0, !0, {
            //     x: 74,
            //     y: 800,
            //     width: 80,
            //     height: 74
            // });
            // this.m_SlideWindow = he.getInstance().createSlideWindowUI(Laya.stage, e, !0, {
            //     uiStateCall: (e, t) => {}
            // });
        }
        showSlideWindow(e) {}
        showFullMatrix() {
            he.getInstance().showFullMatrixAutoType();
        }
    }
    var ce = class extends de {
        constructor() {
            super(...arguments), this.m_BannerAd = null, this.m_VideoAd = null, this.m_InterstitialAd = null;
        }
        onInit() {
            he.getInstance().registerNavigateToMiniCall(e => {
                e !== D.Youzi_MainPush && e !== D.Youzi_SlideWindow || this.showFullMatrix();
            });
        }
        login(e) {}
        getUserInfo(e) {}
        share() {}
        sendMsgToSub(e, t) {}
        showShareMenu() {}
        checkUpdate() {}
        openOtherGame(e, t) {}
        showQRcord(e, t) {}
        onBannerAd(e = !0) {}
        onVideoAd(e, t = 0) {}
        showInsertAd(e = null, t = 0) {}
        onInitEvent() {}
        adLogin() {}
        biEventStat(e) {}
        biActionStat(e) {}
        biADError(e, t) {}
        biLevelStat(e, t) {}
        onExitMiniGame() {}
    }.getInstance();
    class ue extends Laya.Script {
        constructor() {
            super(...arguments), this.openScene = "", this.m_curLoadNum = 0, this.m_totalLoadNum = 3;
        }
        onAwake() {
            a.Init(), this.openScene = "Main.scene", Laya.loader.retryNum = 0,
                platform.getInstance().yadstartup("Ice-Cream-Inc", () => {

                    let yad = new Laya.Image();
                    yad.skin = "common/yad.png";
                    yad.zOrder = 1e3;
                    yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                        platform.getInstance().navigate("GAME", "LOGO")
                    });
                    yad.left = 10;
                    yad.bottom = 10;
                    Laya.stage.addChild(yad);
                    this.loadSceneFile();
                });
        }
        onStart() {}
        loadSceneFile() {
            var e = 0;
            Laya.Scene.load(this.openScene, Laya.Handler.create(this, () => {
                this.m_curLoadNum += 1 - e, this.m_curLoadNum = Math.ceil(this.m_curLoadNum), this.loadJsonFile();
            }), Laya.Handler.create(this, t => {
                t = Math.floor(100 * t) / 100, this.m_curLoadNum += t - e, e = t;
            }));
        }
        loadJsonFile() {
            var e = 0;
            Laya.loader.load(d.groups, Laya.Handler.create(this, () => {
                this.m_curLoadNum += 1 - e, this.m_curLoadNum = Math.ceil(this.m_curLoadNum), this.loadResFile(),
                    a.GlobalTable.initGameTable(d.resources);
            }), Laya.Handler.create(this, t => {
                t = Math.floor(100 * t) / 100, this.m_curLoadNum += t - e, e = t;
            }), Laya.Loader.JSON);
        }
        loadResFile() {
            var e = 0;
            Laya.loader.create(c.groups, Laya.Handler.create(this, () => {
                this.m_curLoadNum += 1 - e, this.m_curLoadNum = Math.ceil(this.m_curLoadNum);
            }), Laya.Handler.create(this, t => {
                t = Math.floor(100 * t) / 100, this.m_curLoadNum += t - e, e = t;
            }));
        }
        onUpdate() {
            let e = Laya.timer.delta / 1e3,
                t = this.m_curLoadNum / this.m_totalLoadNum;
            this.percent.text = Math.floor(100 * t) + "%", this.progress.value < t && (this.progress.value += e,
                this.progress.value > t && (this.progress.value = t)), this.progress.value >= 1 && (Laya.Scene.open(this.openScene, !0, null, Laya.Handler.create(this, e => {
                e.zOrder = 1;
            })), ce.biEventStat(12));
        }
    }
    const me = {
            WT_Normal: 0,
            WT_Fixed: 1,
            WT_PopUp: 2,
            WT_Tips: 3
        },
        pe = {
            WST_None: 0,
            WST_HideOther: 1
        },
        ye = {
            MessageBoxUI: "prefabs/common/MessageBox",
            AwaitUI: "prefabs/common/Await",
            TipsUI: "prefabs/common/Tips.prefab",
            RevolveUI: "prefabs/common/Revolve"
        };
    class ge extends Laya.Script {
        constructor() {
            super(...arguments), this.windowID = 0, this.windowType = me.WT_PopUp, this.showType = pe.WST_None,
                this._bIsLoad = !1;
        }
        onInit() {
            a.UIManager.addWindowInControl(this);
        }
        onAwake() {
            this._bIsLoad = !0;
        }
        on(e, t) {
            this.owner.on(e, this, t);
        }
        showWindow() {
            this.owner.active || (this.owner.visible = !0);
        }
        hideWindow() {
            this.owner.visible && (this.owner.visible = !1);
        }
        onBackCallback() {}
        onPanelCallback() {
            a.UIManager.hideWindow(this.windowID);
        }
        onCloseCallback() {
            a.UIManager.hideWindow(this.windowID);
        }
    }
    class we extends Laya.Script {
        constructor() {
            super(...arguments), this.windowAry = [], this.allWindows = [], this.showWindows = [],
                this.UI_Normal = null, this.UI_Fixed = null, this.UI_Popup = null, this.UI_Tips = null,
                this._Init = !1, this._InitCallback = [], this.isEmitEvent = !1, this.bLayerCount = 1,
                this._loadYesNo = {};
        }
        onAwake() {
            a.UIManager = this, this.isEmitEvent = !0, this.UI_Normal || (this.UI_Normal = new Laya.View(),
                    this.UI_Normal.name = "UI_Normal", this.UI_Normal.top = 0, this.UI_Normal.bottom = 0,
                    this.UI_Normal.left = 0, this.UI_Normal.right = 0, this.UI_Normal.mouseThrough = !0,
                    this.owner.addChild(this.UI_Normal)), this.UI_Fixed || (this.UI_Fixed = new Laya.View(),
                    this.UI_Fixed.name = "UI_Fixed", this.UI_Fixed.top = 0, this.UI_Fixed.bottom = 0,
                    this.UI_Fixed.left = 0, this.UI_Fixed.right = 0, this.UI_Fixed.mouseThrough = !0,
                    this.owner.addChild(this.UI_Fixed)), this.UI_Popup || (this.UI_Popup = new Laya.View(),
                    this.UI_Popup.name = "UI_Popup", this.UI_Popup.top = 0, this.UI_Popup.bottom = 0,
                    this.UI_Popup.left = 0, this.UI_Popup.right = 0, this.UI_Popup.mouseThrough = !0,
                    this.owner.addChild(this.UI_Popup)), this.UI_Tips || (this.UI_Tips = new Laya.View(),
                    this.UI_Tips.name = "UI_Tips", this.UI_Tips.top = 0, this.UI_Tips.bottom = 0, this.UI_Tips.left = 0,
                    this.UI_Tips.right = 0, this.UI_Tips.mouseThrough = !0, this.owner.addChild(this.UI_Tips)),
                this._loadYesNo = {};
        }
        onStart() {
            for (var e in this.bLayerCount = 1, this.windowAry)
                if (this.windowAry[e]) {
                    var t = this.windowAry[e].getComponent(Laya.Script);
                    t && t.onInit();
                }
            if (this._Init = !0, this._InitCallback.length > 0)
                for (var e in this._InitCallback) this._InitCallback[e]();
        }
        onInit(e) {
            this._Init ? e() : this._InitCallback.push(e);
        }
        setEmitEventEnabled(e) {
            "boolean" == typeof e && this.isEmitEvent !== e && (this.isEmitEvent = e);
        }
        addWindowInControl(e) {
            if (!this.getWindow(e.windowID)) {
                this.allWindows[e.windowID] = e;
                var t = this.UI_Normal;
                e.windowType == me.WT_Fixed ? t = this.UI_Fixed : e.windowType == me.WT_PopUp ? t = this.UI_Popup : e.windowType == me.WT_Tips && (t = this.UI_Tips),
                    t.addChild(e.owner), e.owner.visible && e.windowType != me.WT_Tips && this.showWindows && (this.showWindows[e.windowID] = e);
            }
        }
        getWindow(e) {
            return this.allWindows[e] ? this.allWindows[e] : null;
        }
        checkWindow(e, t) {
            this.allWindows[e] ? "function" == typeof t && t(this.allWindows[e]) : this._loadYesNo[e] ? console.warn("重复添加不做处理id:" + e) : (this._loadYesNo[e] = {
                key: e,
                value: 1
            }, Laya.loader.load(e, Laya.Handler.create(this, () => {
                var i = Laya.loader.getRes(e).create().getComponent(ge);
                i.onInit(), "function" == typeof t && t(i);
            })));
        }
        getShowWindow(e) {
            return this.showWindows[e];
        }
        showWindow(e, t = null) {
            this.checkWindow(e, i => {
                i && (i.showType == pe.WST_HideOther && this.hideAllWindows(e), i.windowType != me.WT_Tips && this.showWindows && (this.showWindows[e] = i),
                    this.adjustBaseWindowDepth(i), i.showWindow(), "function" == typeof t && t(i));
            });
        }
        hideWindow(e) {
            var t = this.getWindow(e);
            t && (t.hideWindow(), this.showWindows[e] && (this.showWindows[e] = null));
        }
        hideAllWindows(e = null) {
            for (var t in this.showWindows) t != e && this.showWindows[t] && this.showWindows[t].hideWindow();
            this.showWindows = [];
        }
        adjustBaseWindowDepth(e) {
            var t = e.owner.parent;
            t && t.setChildIndex(e.owner, t.numChildren - 1);
        }
        getBLayerCount() {
            return this.bLayerCount;
        }
        on(e, t) {
            Laya.stage.on(e, null, t);
        }
        emit(e, t = null) {
            for (var i in this.allWindows) this.allWindows[i].owner.event(e, t);
            Laya.stage.event(e, t);
        }
        addTips(e) {
            this.checkWindow(ye.TipsUI, t => {
                t.addTips(e), t.showWindow();
            });
        }
    }
    const Le = {
            WI_HomeView: "prefabs/HomeView.prefab",
            WI_GameView: "prefabs/GameView.prefab",
            WI_GameEndView: "prefabs/GameEndView.prefab",
            WI_PausedView: "prefabs/PausedView.prefab"
        },
        Ie = (new Laya.Color(193, 255, 97), new Laya.Color(133, 96, 77), new Laya.Color(92, 253, 193),
            .08),
        fe = .8,
        Se = "scene/Conventional/Cream_12.lh";
    class Ce {
        static genColorTexture(e) {
            if (!this.gColorTexture.hasOwnProperty(e)) {
                let t = Laya.ColorUtils.create(e),
                    i = new Laya.Texture2D(1, 1, Laya.Texture2D.FORMAT_R8G8B8A8, !0, !0),
                    s = new Uint8Array(4);
                s[0] = Math.floor(255 * t.arrColor[0]), s[1] = Math.floor(255 * t.arrColor[1]),
                    s[2] = Math.floor(255 * t.arrColor[2]), s[3] = Math.floor(255 * t.arrColor[3]),
                    i.setPixels(s), this.gColorTexture[e] = i;
            }
            return this.gColorTexture[e];
        }
        static getStringLength(e) {
            var t = 0,
                i = 0,
                s = 0;
            let a = e.length;
            for (let n = 0; n < a; n++) e.charCodeAt(n) > 255 ? (t += 2, i++) : (t++, s++);
            return {
                length: t,
                z: i,
                e: s
            };
        }
        static dateFormat(e, t) {
            var i = {
                "M+": e.getMonth() + 1,
                "d+": e.getDate(),
                "h+": e.getHours(),
                "m+": e.getMinutes(),
                "s+": e.getSeconds(),
                "q+": Math.floor((e.getMonth() + 3) / 3),
                S: e.getMilliseconds()
            };
            for (var s in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))),
                    i) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
            return t;
        }
        static changeLayer(e, t) {
            e.layer = t;
            for (let i = 0; i < e.numChildren; ++i) this.changeLayer(e.getChildAt(i), t);
        }
    }
    Ce.gColorTexture = {};
    class xe extends Laya.Script {
        constructor() {
            super(...arguments), this.m_fTarget = null, this.m_isMove = !1, this.m_isRotate = !1,
                this.m_fAngled = 0, this.m_fAngularSpeed = 120;
        }
        onAwake() {
            this.m_mySprite = this.owner, this.m_myBody = this.m_mySprite.getChildAt(0);
        }
        onInit(e, t, i, s, a, n) {
            this.setPosition(e), this.setModelColor(t, i, s), this.m_fTarget = a, this.setRotation(new Laya.Vector3(0, 0, 0)),
                this.m_isMove = !0, this.m_isRotate = !1, this.m_fAngled = n;
        }
        onCreamMove() {
            this.m_isRotate = !0;
            let e = (this.m_mySprite.transform.position.y - this.m_fTarget.position.y) / fe;
            this.m_fAngularSpeed = Math.abs(this.m_fTarget.rotation - this.m_fAngled) / e;
        }
        setPosition(e) {
            this.m_mySprite.transform.localPosition = e;
        }
        setRotation(e) {
            this.m_mySprite.transform.localRotationEuler = e;
        }
        setModelColor(e, t, i) {
            if (this.m_myBody) {
                let s = new Laya.BlinnPhongMaterial();
                s.albedoTexture = Ce.genColorTexture(e), s.albedoIntensity = 1.15, s.specularColor = new Laya.Vector4(0, 0, 0, 1),
                    s.shininess = .01, this.m_myBody.getChildAt(0).meshRenderer.material = s;
                let a = new Laya.BlinnPhongMaterial();
                a.albedoTexture = Ce.genColorTexture(t), a.albedoIntensity = 1.15, a.specularColor = new Laya.Vector4(0, 0, 0, 1),
                    a.shininess = .01, this.m_myBody.getChildAt(1).meshRenderer.material = a, this.m_myBody.transform.localRotationEuler = new Laya.Vector3(0, 60 * i + 10, 0);
            }
        }
        onUpdate() {
            if (this.m_isMove)
                if (this.m_mySprite.transform.position.y > this.m_fTarget.position.y) {
                    var e = Laya.timer.delta / 1e3;
                    let t = this.m_mySprite.transform.position.clone();
                    t.y -= fe * e, this.m_isRotate && (this.m_fAngled -= this.m_fAngularSpeed * e % 360,
                            this.m_fAngled < this.m_fTarget.rotation && (this.m_fAngled = this.m_fTarget.rotation),
                            t.x = this.m_fTarget.radius * Math.sin(this.m_fAngled * Math.PI / 180), t.z = this.m_fTarget.radius * Math.cos(this.m_fAngled * Math.PI / 180)),
                        this.m_mySprite.transform.position = t;
                } else {
                    let e = this.m_mySprite.transform.position.clone();
                    e.y = this.m_fTarget.position.y, this.m_mySprite.transform.position = e, this.m_isMove = !1,
                        this.setRotation(new Laya.Vector3(0, this.m_fTarget.rotation, 90)), a.UIManager.emit("onCreamEnd");
                }
        }
        onRecover() {
            this.m_isMove = !1, Laya.Pool.recover("creamSprite", this.owner), this.owner.parent.removeChild(this.owner);
        }
    }
    class _e extends e {
        constructor() {
            super(...arguments), this.m_aryActionBars = [], this.m_aryCream = [], this.m_fAngled = -180,
                this.m_fAngularSpeed = 120, this.m_fAroundRadius = .8, this.m_aryColor = [], this.m_aryPath = [],
                this.m_curLayer = 0, this.m_arySelect = [], this.m_nCreateTimer = 0, this.m_bIsMove = !1,
                this.m_bIsRotation = !1;
        }
        init() {
            this.on("onGameStart", this.onGameStart), this.on("onGameEnd", this.onGameEnd),
                this.on("onBtnDown", this.onBtnDown), this.on("onBtnUp", this.onBtnUp), this.on("onCreamEnd", this.onCreamEnd),
                this.onOpenGameScene();
        }
        onGameStart() {
            this.onGameClear();
            let e = a.GameData.getLevelCfg();
            if (!e) return void a.UIManager.addTips("获取关卡信息错误!");
            this.m_aryColor = [];
            for (let t in e.taste) this.m_aryColor.push(a.GlobalTable.getTableData("StaticTaste", e.taste[t]));
            this.m_aryPath = a.GlobalTable.getTableData("StaticShape", e.shape), this.calcRadius(),
                this.setCreamColor();
            let t = `scene/Conventional/Cylinder0${e.cylinder}.lh`;
            this.setCylinderModel(t);
            var i = this.m_MachineModel.transform.position.y;
            this.m_MachineModel.transform.position = new Laya.Vector3(0, i, this.m_fAroundRadius),
                this.m_bIsMove = !1, this.m_bIsRotation = !1;
        }
        onGameEnd() {
            this.m_arySelect = [], this.m_bIsMove = !1, this.m_bIsRotation = !1;
            for (let e in this.m_aryActionBars) this.m_aryActionBars[e].transform.rotation = new Laya.Quaternion(0, 0, 0);
        }
        onGameClear() {
            for (let e in this.m_aryCream) this.m_aryCream[e].onRecover();
            this.m_aryCream = [], this.m_arySelect = [], this.m_curLayer = -1, this.m_fAngled = 0,
                this.m_nCreateTimer = Ie;
            for (let e in this.m_aryActionBars) this.m_aryActionBars[e].transform.rotation = new Laya.Quaternion(0, 0, 0);
        }
        onUpdate() {
            var e = Laya.timer.delta / 1e3;
            if (this.m_arySelect.length) {
                if (this.m_bIsMove) {
                    this.m_fAngled -= this.m_fAngularSpeed * e % 360;
                    var t = this.m_fAroundRadius * Math.sin(this.m_fAngled * Math.PI / 180),
                        i = this.m_fAroundRadius * Math.cos(this.m_fAngled * Math.PI / 180),
                        s = this.m_MachineModel.transform.position.y;
                    this.m_MachineModel.transform.position = new Laya.Vector3(t, s, i);
                }
                this.m_nCreateTimer >= Ie && (this.m_nCreateTimer -= Ie, this.createCreamSprite()),
                    this.m_nCreateTimer += e;
            }
        }
        onOpenGameScene() {
            this.m_Scene3d = Laya.Scene.root.addChild(Laya.Loader.getRes("scene/Conventional/game.ls")),
                this.m_Scene3d.enableFog = !1, this.m_MachineModel = this.m_Scene3d.getChildByName("Machine");
            for (let e = 0; e < 3; ++e) this.m_aryActionBars.push(this.m_MachineModel.getChildByName(`Cylinder${e}`));
        }
        getChildByName(e) {
            return this.m_Scene3d.getChildByName(e);
        }
        setCreamColor() {
            for (let e = 0; e < 3; ++e) {
                let t = new Laya.BlinnPhongMaterial();
                t.albedoTexture = Ce.genColorTexture(this.m_aryColor[e].color), t.albedoIntensity = 1.15,
                    t.specularColor = new Laya.Vector4(0, 0, 0, 1), t.shininess = .01, this.m_aryActionBars[e].meshRenderer.material = t;
            }
        }
        calcRadius() {
            let e = a.GameData.getCurPreview(this.m_aryCream.length);
            if (!e) return;
            if (this.m_fAroundRadius = e.radius, e.layer == this.m_curLayer) return;
            this.m_curLayer = e.layer;
            Math.PI, this.m_fAroundRadius;
            let t = Math.PI / 3;
            this.m_fAngularSpeed = t / (Math.PI * this.m_fAroundRadius / 180);
        }
        setCylinderModel(e) {
            this.m_CylinderModel && this.m_Scene3d.removeChild(this.m_CylinderModel);
            let t = Laya.Loader.getRes(e);
            this.m_CylinderModel = this.m_Scene3d.addChild(t.clone()), this.m_CylinderModel.transform.position = new Laya.Vector3(0, 0, 0);
        }
        createCreamSprite() {
            let e = a.GameData.getCurPreview(this.m_aryCream.length);
            if (!e) return void a.UIManager.emit("onGameEnd");
            let t = this.m_aryColor[this.m_arySelect[0]].color,
                i = this.m_aryColor[this.m_arySelect[0]].color;
            this.m_arySelect.length > 1 && (i = this.m_aryColor[this.m_arySelect[1]].color);
            let s = Laya.Pool.getItem("creamSprite");
            if (s) this.m_Scene3d.addChild(s);
            else {
                let e = Laya.Loader.getRes(Se);
                s = this.m_Scene3d.addChild(e.clone());
            }
            let n = s.getComponent(xe);
            n || (n = s.addComponent(xe));
            let o = this.m_MachineModel.transform.position.clone();
            o.y -= .3, n.onInit(o, t, i, this.m_aryCream.length % 6, e, this.m_fAngled), this.m_bIsRotation && n.onCreamMove(),
                this.m_aryCream.push(n), this.calcRadius(), this.m_aryCream.length >= 30 && !this.m_bIsMove && (this.m_bIsMove = !0,
                    this.onCreamEnd()), a.GameData.addLevelSprite({
                    colorL: t,
                    colorR: i,
                    position: e.position,
                    rotation: e.rotation
                }), a.UIManager.emit("GameProgress"), a.Music.playSound("ice"), a.GameData.getCurPreview(this.m_aryCream.length) || a.UIManager.emit("onGameEnd");
        }
        onCreamEnd() {
            if (!this.m_bIsRotation)
                for (let e in this.m_aryCream) this.m_aryCream[e].onCreamMove();
            this.m_bIsRotation = !0;
        }
        onBtnDown(e) {
            if (this.m_arySelect.length >= 2) return !1;
            for (let t in this.m_arySelect)
                if (this.m_arySelect[t] == e) return !1;
            this.m_arySelect.push(e);
            let t = new Laya.Quaternion();
            return Laya.Quaternion.createFromAxisAngle(new Laya.Vector3(1, 0, 0), -10, t), this.m_aryActionBars[e].transform.rotation = t, !0;
        }
        onBtnUp(e) {
            for (let t in this.m_arySelect)
                if (this.m_arySelect[t] == e) return this.m_arySelect.splice(parseInt(t)),
                    this.m_aryActionBars[e].transform.rotation = new Laya.Quaternion(0, 0, 0), !0;
            return !1;
        }
        setRotation(e) {}
    }
    class be extends Laya.Script {
        constructor() {
            super(...arguments), this.m_curVersion = "v1.0.0 Alpha1", this.m_nCurLevel = 0,
                this.m_aryLevel = [], this.m_aryPreview = [], this.m_arySprite = [], this.m_curScore = 0;
        }
        get Level() {
            return this.m_nCurLevel;
        }
        onAwake() {
            super.onAwake(), a.GameData = this, a.GameLogic = _e.getInstance(), this.loadGameData(),
                a.Music.playMusic("bg");
        }
        onStart() {
            super.onStart(), a.GameLogic.init(), a.UIManager.hideAllWindows(), a.UIManager.showWindow(Le.WI_HomeView, e => {
                e.onUpdateView();
            });
        }
        onUpdate() {
            a.GameLogic.onUpdate();
        }
        loadGameData() {
            let e = Laya.LocalStorage.getItem("IceCreamData");
            if (e && "" != e) {
                var t = JSON.parse(e);
                this.m_nCurLevel = t.curLevel || 0, this.m_aryLevel = t.aryLevel || [];
            } else this.saveGameData();
        }
        saveGameData() {
            let e = {
                curLevel: this.m_nCurLevel,
                aryLevel: this.m_aryLevel
            };
            Laya.LocalStorage.setItem("IceCreamData", JSON.stringify(e));
        }
        onGameStart() {
            let e = {
                1: 13,
                2: 16,
                3: 19,
                4: 21,
                5: 23,
                6: 25,
                7: 27,
                8: 29
            };
            e[this.m_nCurLevel + 1] && ce.biEventStat(e[this.m_nCurLevel + 1]), this.getAryPreview();
        }
        onGameEnd() {
            let e = {
                1: 14,
                2: 17,
                3: 20,
                4: 22,
                5: 24,
                6: 26,
                7: 28,
                8: 30
            };
            e[this.m_nCurLevel + 1] && ce.biEventStat(e[this.m_nCurLevel + 1]), this.m_aryLevel.push({
                level: this.m_nCurLevel,
                score: this.getScore(),
                time: Date.now()
            }), this.m_nCurLevel++, this.saveGameData(), this.onGameClear();
        }
        onGamePrev() {
            this.onGameClear(), this.m_nCurLevel = Math.max(0, this.m_nCurLevel - 1), this.saveGameData();
        }
        onGameClear() {
            this.m_aryPreview = [], this.m_arySprite = [], this.m_curScore = 0;
        }
        getLevelCfg() {
            let e = a.GlobalTable.getTable("StaticLevel").length;
            return a.GlobalTable.getTableData("StaticLevel", `${this.m_nCurLevel % e}`);
        }
        getAryPreview() {
            if (!this.m_aryPreview.length) {
                let s = this.getLevelCfg(),
                    n = [];
                for (let e in s.taste) n.push(a.GlobalTable.getTableData("StaticTaste", s.taste[e]));
                let o = a.GlobalTable.getTableData("StaticShape", s.shape),
                    l = 0;
                for (let s = 0; s < o.length; ++s) {
                    let a = o[s].radius / 100,
                        r = this.calcLayerTotal(a),
                        h = 0;
                    o[s + 1] && (h = o[s + 1].radius / 100);
                    let d = (a - h) / r,
                        c = .15 / r,
                        u = n[o[s].colorL].color,
                        m = n[o[s].colorR].color;
                    for (let n = 0; n < r; n += 1) {
                        let o = a - d * n;
                        var e = o * Math.sin(l * Math.PI / 180),
                            t = .15 * s + c * n,
                            i = o * Math.cos(l * Math.PI / 180);
                        this.m_aryPreview.push({
                            layer: s,
                            radius: o,
                            colorL: u,
                            colorR: m,
                            position: new Laya.Vector3(e, t, i),
                            rotation: l
                        }), l += -360 / r;
                    }
                }
            }
            return this.m_aryPreview;
        }
        getCurPreview(e) {
            return this.m_aryPreview[e];
        }
        calcLayerTotal(e) {
            let t = 360 / (Math.PI / 3 / (Math.PI * e / 180));
            return Math.ceil(t / Ie) + 3;
        }
        addLevelSprite(e) {
            let t = this.getCurPreview(this.m_arySprite.length);
            if (t) {
                let i = 0;
                t.colorL == e.colorL ? (i = 1, t.colorR == e.colorR && (i = 2)) : t.colorL == e.colorR ? (i = 1,
                    t.colorR == e.colorL && (i = 2)) : t.colorR == e.colorL ? (i = 1, t.colorL == e.colorR && (i = 2)) : t.colorR == e.colorR && (i = 1,
                    t.colorL == e.colorL && (i = 2)), this.m_curScore += i;
            }
            this.m_arySprite.push(e);
        }
        getLevelSprite() {
            return this.m_arySprite;
        }
        getProgress() {
            return this.m_arySprite.length / this.m_aryPreview.length;
        }
        getScore() {
            let e = Math.floor(this.m_curScore / (2 * this.m_aryPreview.length) * 100);
            return e >= 97 ? 100 : e;
        }
    }
    const ve = {
        WT_Normal: 0,
        WT_Fixed: 1,
        WT_PopUp: 2,
        WT_Tips: 3
    };
    class Te extends Laya.Script {
        constructor() {
            super(...arguments), this.modelScale = .4, this.m_aryCream = [], this.m_bIsRotate = !1;
        }
        onAwake() {
            this.m_SpriteImg = this.owner;
        }
        onUpdate() {
            if (this.m_bIsRotate && this.m_CylinderModel) {
                var e = Laya.timer.delta / 1e3;
                this.m_CylinderModel.transform.rotate(new Laya.Vector3(0, .5 * -e, 0));
            }
        }
        onInitScene(e, t, i) {
            e.renderTarget = new Laya.RenderTexture(512, 512), e.clearColor = null, e.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
                e.cullingMask = Math.pow(2, 9);
            var s = new Laya.Texture(e.renderTarget, Laya.Texture.DEF_UV);
            this.m_SpriteImg.graphics.drawTexture(s);
            let a = `scene/Conventional/Cylinder0${i.cylinder}.lh`;
            this.m_CylinderModel && t.removeChild(this.m_CylinderModel);
            let n = Laya.Loader.getRes(a);
            this.m_CylinderModel = t.addChild(n.clone()), Ce.changeLayer(this.m_CylinderModel, t.layer);
            let o = new Laya.Vector3(0, 0, 0);
            this.m_CylinderModel.transform.position = o;
        }
        onInitPreview(e, t, i = !1) {
            this.m_Scene3d || this.onOpenGameScene();
            for (let e in this.m_aryCream) this.m_aryCream[e].onRecover();
            let s = a.GlobalTable.getTableData("StaticShape", e.shape);
            this.m_aryCream = [];
            let n = `scene/Conventional/Cylinder0${e.cylinder}.lh`;
            this.setCylinderModel(n);
            for (let e = 0; e < t.length; ++e) {
                let a = t[e].rotation % 360;
                (i || t[e].layer == s.length - 1 || -45 >= a && a >= -235) && this.createCreamSprite(t[e].colorL, t[e].colorR, t[e].position, t[e].rotation);
            }
            let o = new Laya.Quaternion();
            Laya.Quaternion.createFromAxisAngle(new Laya.Vector3(0, 1, 0), -180, o), this.m_CylinderModel.transform.rotation = o,
                this.m_bIsRotate = i;
        }
        onRecover() {
            for (let e in this.m_aryCream) this.m_aryCream[e].onRecover();
            this.m_aryCream = [];
        }
        onOpenGameScene() {
            this.m_Scene3d = new Laya.Scene3D(), this.m_SpriteImg.addChild(this.m_Scene3d),
                this.m_Camera = this.m_Scene3d.addChild(new Laya.Camera(0, .3, 1e3)), this.m_Camera.transform.translate(new Laya.Vector3(5, -10, 1)),
                this.m_Camera.transform.rotate(new Laya.Vector3(0, 0, 0), !1, !1), this.m_Camera.clearColor = null,
                this.m_Camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY, this.m_Camera.orthographic = !0,
                this.m_Camera.orthographicVerticalSize = 10;
            var e = new Laya.DirectionLight();
            this.m_Scene3d.addChild(e), e.transform.rotationEuler = new Laya.Vector3(-62, -38, -38),
                e.color = new Laya.Vector3(.9245283, .8689258, .5538448), e.intensity = 1;
        }
        setCylinderModel(e) {
            this.m_CylinderModel && this.m_Scene3d.removeChild(this.m_CylinderModel);
            let t = Laya.Loader.getRes(e);
            this.m_CylinderModel = this.m_Scene3d.addChild(t.clone()), this.m_CylinderModel.transform.setWorldLossyScale(new Laya.Vector3(this.modelScale, this.modelScale, this.modelScale));
            let i = this.m_SpriteImg.localToGlobal(new Laya.Point(this.m_SpriteImg.width / 2, this.m_SpriteImg.height / 2)),
                s = new Laya.Vector3(i.x, i.y, 0);
            var a = new Laya.Vector3(0, 0, 0);
            this.m_Camera.convertScreenCoordToOrthographicCoord(s, a), this.m_CylinderModel.transform.position = a;
        }
        createCreamSprite(e, t, i, s) {
            let a = Laya.Pool.getItem("creamSprite");
            if (a) this.m_CylinderModel.addChild(a);
            else {
                let e = Laya.Loader.getRes(Se);
                a = this.m_CylinderModel.addChild(e.clone());
            }
            let n = a.getComponent(xe);
            n || (n = a.addComponent(xe)), n.setPosition(i), n.setModelColor(e, t, this.m_aryCream.length % 6),
                n.setRotation(new Laya.Vector3(0, s, 90)), this.m_aryCream.push(n);
        }
    }
    class Be extends ge {
        constructor() {
            super(), this.btnAry = [], this.btnTestAry = [], this.btnColorAry = [], this.btnLabelAry = [],
                this.m_aryColor = [], this.m_arySelect = [], this.m_aryTouch = {}, this.m_bIsGameEnd = !1;
        }
        onInit() {
            this.windowID = Le.WI_GameView, this.windowType = ve.WT_Fixed, super.onInit();
        }
        onAwake() {
            super.onAwake(),
                this.on("onGameStart", this.onGameStart),
                this.on("onGameEnd", this.onGameEnd),
                this.on("GameProgress", this.onGameProgress),
                this.btnReset.on(Laya.Event.CLICK, this, this.onClickReset),
                this.btnTestAry[0].on(Laya.Event.CLICK, this, this.onClickTest1), this.btnTestAry[1].on(Laya.Event.CLICK, this, this.onClickTest2),


                this.m_IcePreview = this.spriteImg.getComponent(Te);
            let e = new Laya.Templet();

            this.guide.visible = false;
            e.on(Laya.Event.COMPLETE, this, () => {
                this.m_Armature = e.buildArmature(0), this.m_Armature.pos(360, 960), this.m_Armature.scale(1.5, 1.5),
                    this.m_Armature.active = !1, this.owner.addChild(this.m_Armature), this.m_Armature.on(Laya.Event.STOPPED, this, () => {
                        this.m_Armature.active = !1;
                    });
            }), e.on(Laya.Event.ERROR, this, () => {}), e.loadAni("ske/caidai.sk");

        }
        onEnable() {
            this.listenKeyboard();
        }

        onDisable() {
            Laya.stage.off(Laya.Event.KEY_DOWN, this, this.keyDown);
            Laya.stage.off(Laya.Event.KEY_UP, this, this.keyUp);
        }


        keyDown(e) {
            if (this.owner.visible === false) return;
            let t = e.keyCode;
            t >= 49 && t <= 51 && this.onBtnDown(t - 49);
        }

        keyUp(e) {
            if (this.owner.visible === false) return;
            let t = e.keyCode;
            t >= 49 && t <= 51 && this.onBtnUp(t - 49);
        }

        listenKeyboard() {
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this.keyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this.keyUp);
        }

        // ondis
        onStart() {
            let e = [{
                parentNode: this.owner,
                x: 80,
                y: 300
            }, {
                parentNode: this.owner,
                x: 600,
                y: 300
            }];
            ce.onMultiMainPush(e);
        }
        onUpdate() {}
        onGameStart() {
            a.GameData.onGameStart(),
                this.onGameClear();
            let e = a.GameData.getLevelCfg();
            if (e) {
                if (e.shape === 1) {
                    this.guide.visible = true;
                    if (Laya.Browser.onMobile) {
                        this.guide.text = "Press the number 1";
                    } else {
                        this.guide.text = "Press the number 1 on the keyboard";
                    }
                } else if (e.shape === 2) {
                    this.guide.visible = true;
                    this.guide.text = "Press the number 2 and 3 at the same time";
                } else {
                    this.guide.text = "";
                    this.guide.visible = false;
                }

                this.levelLabel.text = `${a.GameData.Level + 1}`, this.progress.value = 0;
                for (let e in this.starAry) this.starAry[e].visible = !1;
                this.m_aryColor = [];
                for (let t in e.taste) this.m_aryColor.push(a.GlobalTable.getTableData("StaticTaste", e.taste[t]));
                this.setCreamColor(), this.owner.height = Laya.stage.height, this.m_IcePreview.onInitPreview(e, a.GameData.getAryPreview()),
                    this.m_bIsGameEnd = !1;
            }
        }
        onGameEnd() {
            this.m_bIsGameEnd = true, this.progress.value = 1;
            for (let e in this.btnAry) this.btnAry[e].scale(1, 1);
            this.m_Armature.active = !0, this.m_Armature.play(0, !1), setTimeout(() => {
                a.GameLogic.onGameClear(), a.UIManager.showWindow(Le.WI_GameEndView, e => {
                    e.onUpdateView();
                }), a.UIManager.hideWindow(this.windowID);
            }, 2e3);
        }
        onGameProgress() {
            this.progress.value = a.GameData.getProgress(), a.GameData.getScore() > 29 && (this.starAry[0].visible = !0),
                a.GameData.getScore() > 59 && (this.starAry[1].visible = !0), a.GameData.getScore() > 90 && (this.starAry[2].visible = !0);
        }
        onGameClear() {
            for (let e in this.btnAry) this.btnAry[e].scale(1, 1);
            this.m_arySelect = [], this.m_aryTouch = {};
        }
        setCreamColor() {
            for (let e = 0; e < 3; ++e) this.btnColorAry[e].graphics.clear(),
                this.btnColorAry[e].graphics.drawCircle(52, 52, 52, this.m_aryColor[e].color),
                this.btnLabelAry[e].text = this.m_aryColor[e].taste;
        }
        onMouseDown(e) {
            if (!(this.m_bIsGameEnd || this.m_arySelect.length >= 2))
                for (let t in this.btnAry) e.target == this.btnAry[t] && this.onBtnDown(parseInt(t)) && (this.m_aryTouch[`${e.touchId}`] = {
                    index: parseInt(t)
                }, a.Music.playButtonAudio("click"));
        }
        onMouseUp(e) {
            this.m_aryTouch[`${e.touchId}`] && !this.onBtnUp(this.m_aryTouch[`${e.touchId}`].index) || (this.m_aryTouch[`${e.touchId}`] = null);
        }

        onBtnDown(e) {
            if (this.m_bIsGameEnd) return !1;
            if (this.m_arySelect.length >= 2) return !1;
            for (let t in this.m_arySelect)
                if (this.m_arySelect[t] == e) return !1;
            return this.m_arySelect.push(e), a.UIManager.emit("onBtnDown", e), Laya.Tween.to(this.btnAry[e], {
                scaleX: .85,
                scaleY: .85
            }, 100), !0;
        }
        onBtnUp(e) {
            for (let t in this.m_arySelect)
                if (this.m_arySelect[t] == e) return this.m_arySelect.splice(parseInt(t)),
                    a.UIManager.emit("onBtnUp", e), Laya.Tween.to(this.btnAry[e], {
                        scaleX: 1,
                        scaleY: 1
                    }, 100), !0;
            return !1;
        }
        onClickReset() {
            a.Music.playButtonAudio("click"), a.UIManager.showWindow(Le.WI_PausedView);
        }
        onClickTest1() {
            a.GameLogic.setRotation(new Laya.Vector3(0, 0, 90));
        }
        onClickTest2() {
            a.GameLogic.setRotation(new Laya.Vector3(0, 0, 0));
        }
        onClickClose() {
            a.Music.playButtonAudio("click"), ce.onShowFullMatrix();
        }
    }
    class Me extends Laya.Button {
        constructor() {
            super(), this.scaleTime = 100, this.originScale = 0, this.targetScale = 0, this.anchorX = this.anchorY = .5,
                this.on(Laya.Event.MOUSE_DOWN, this, this.scaleBig), this.on(Laya.Event.MOUSE_UP, this, this.scaleSmal),
                this.on(Laya.Event.MOUSE_OUT, this, this.scaleSmal);
        }
        onAwake() {
            super.onAwake(), this.originScale = this.scaleX, this.targetScale = this.scaleX - .15;
        }
        scaleBig() {
            Laya.Tween.to(this, {
                scaleX: this.targetScale,
                scaleY: this.targetScale
            }, this.scaleTime);
        }
        scaleSmal() {
            Laya.Tween.to(this, {
                scaleX: this.originScale,
                scaleY: this.originScale
            }, this.scaleTime);
        }
    }
    class Ue extends ge {
        onInit() {
            this.windowID = Le.WI_HomeView,
                this.windowType = ve.WT_PopUp,
                super.onInit();
        }
        onAwake() {
            super.onAwake(),
                this.btnStart.on(Laya.Event.CLICK, this, this.onClickStart),
                this.musicBtn.on(Laya.Event.CLICK, this, this.onClickMusic),
                this.btnNext.on(Laya.Event.CLICK, this, this.onClickNext),
                this.m_IcePreview = this.spriteImg.getComponent(Te),
                this.btnNext.visible = !1;
        }
        onStart() {
            let e = [{
                parentNode: this.owner,
                x: 90,
                y: 400
            }, {
                parentNode: this.owner,
                x: 90,
                y: 650
            }, {
                parentNode: this.owner,
                x: 580,
                y: 400
            }, {
                parentNode: this.owner,
                x: 580,
                y: 650
            }];
            ce.onMultiMainPush(e);
        }
        onUpdateView() {
            let e = a.GameData.getLevelCfg();
            e ? (this.m_IcePreview.onInitPreview(e, a.GameData.getAryPreview(), !0), a.Music.getMusicVolume() ? this.musicBtn.selected = !0 : this.musicBtn.selected = !1,
                this.levelLabel.text = `Level ${a.GameData.Level + 1}`, ce.onBannerAd()) : a.UIManager.addTips("获取关卡信息错误!");
        }
        onClickStart() {
            platform.getInstance().showInterstitial(() => {
                window.focus();
                console.log("Laya.stage.focus", Laya.stage.focus);
                a.Music.playButtonAudio("click"), this.m_IcePreview.onRecover(), a.UIManager.emit("onGameStart"),
                    a.UIManager.hideWindow(this.windowID), a.UIManager.showWindow(Le.WI_GameView), ce.showSlideWindow(!0),
                    setTimeout(() => {
                        ce.showSlideWindow(!1);
                    }, 2e3);
            });

        }
        onClickMusic() {
            a.Music.playButtonAudio("click"), this.musicBtn.selected ? (a.Music.setMusicVolume(.5),
                a.Music.setSoundVolume(.5)) : (a.Music.setMusicVolume(0), a.Music.setSoundVolume(0));
        }
        onClickNext() {
            a.Music.playButtonAudio("click"), a.GameData.onGameEnd(), this.onUpdateView();
        }
        onClickClose() {
            a.Music.playButtonAudio("click"), ce.onShowFullMatrix();
        }
        onClickShare() {
            a.Music.playButtonAudio("click"), ce.share();
        }
    }
    class Ae extends ge {
        constructor() {
            super(...arguments), this.spriteImg = [], this.m_IcePreview = [], this.m_curNum = 0,
                this.m_totalNum = 0;
        }
        onInit() {
            this.windowID = Le.WI_GameEndView, this.windowType = ve.WT_PopUp, super.onInit();
        }
        onAwake() {
            super.onAwake(),
                this.btnStart.on(Laya.Event.CLICK, this, this.onClickStart),
                this.btnVideo.on(Laya.Event.CLICK, this, this.onClickVideo),
                this.btnRestart.on(Laya.Event.CLICK, this, this.onClickRestart);
            for (let e in this.spriteImg) this.m_IcePreview[e] = this.spriteImg[e].getComponent(Te);
        }
        onStart() {}
        onUpdate() {
            if (this.m_curNum < this.m_totalNum) {
                let e = Laya.timer.delta / 1e3;
                this.m_curNum += 75 * e, this.m_curNum > this.m_totalNum && (this.m_curNum = this.m_totalNum);
                this.m_curNum, this.m_totalNum;
                this.percent.text = `Finished ${Math.floor(this.m_curNum)}%`, this.progress.value = this.m_curNum / 100,
                    this.m_curNum > 29 && (this.starAry[0].visible = !0), this.m_curNum > 59 && (this.starAry[1].visible = !0),
                    this.m_curNum > 90 && (this.starAry[2].visible = !0);
            }
        }
        onUpdateView() {
            let e = a.GameData.getLevelCfg();
            if (e) {
                this.m_IcePreview[0].onInitPreview(e, a.GameData.getAryPreview()), this.m_IcePreview[1].onInitPreview(e, a.GameData.getLevelSprite()),
                    this.m_curNum = 0, this.m_totalNum = a.GameData.getScore(), this.percent.text = "Finished 0%",
                    this.progress.value = 0;
                for (let e in this.starAry) this.starAry[e].visible = !1;

                if (this.m_totalNum < 60) {
                    this.btnRestart.visible = !0,
                        this.btnStart.visible = !1,
                        this.btnVideo.visible = !1,
                        ce.biLevelStat(3, a.GameData.Level)
                } else {
                    this.btnRestart.visible = !1,
                        this.btnStart.visible = !0,
                        this.btnVideo.visible = !0,
                        ce.biLevelStat(2, a.GameData.Level),
                        a.GameData.onGameEnd()
                }
            }
        }
        onClickVideo() {
            a.Music.playButtonAudio("click");
            platform.getInstance().showReward(() => {
                window.focus();
                a.GameData.onGamePrev(), this.m_IcePreview[0].onRecover(), this.m_IcePreview[1].onRecover(),
                    a.UIManager.emit("onGameStart"), a.UIManager.hideWindow(this.windowID), a.UIManager.showWindow(Le.WI_GameView)
            })
        }
        onClickStart() {
            platform.getInstance().showInterstitial(() => {
                a.Music.playButtonAudio("click"), a.GameData.onGameClear(), this.m_IcePreview[0].onRecover(),
                    this.m_IcePreview[1].onRecover(), a.UIManager.emit("onGameStart"), a.UIManager.hideWindow(this.windowID),
                    a.UIManager.showWindow(Le.WI_GameView);
            });

        }
        onClickRestart() {
            platform.getInstance().showInterstitial(() => {
                a.Music.playButtonAudio("click"), a.GameData.onGameClear(), this.m_IcePreview[0].onRecover(),
                    this.m_IcePreview[1].onRecover(), a.UIManager.emit("onGameStart"), a.UIManager.hideWindow(this.windowID),
                    a.UIManager.showWindow(Le.WI_GameView);
            });

        }
        onClickShare() {
            a.Music.playButtonAudio("click"), ce.share();
        }
    }
    class ke extends ge {
        onInit() {
            this.windowID = Le.WI_PausedView, this.windowType = ve.WT_PopUp, super.onInit();
        }
        onAwake() {
            super.onAwake(),
                this.btnHome.on(Laya.Event.CLICK, this, this.onClickHome),
                this.btnContinue.on(Laya.Event.CLICK, this, this.onClickContinue);
            this.btnRestart.on(Laya.Event.CLICK, this, this.onClickRestart);
        }
        onClickHome() {
            a.Music.playButtonAudio("click"), a.GameData.onGameClear(), a.UIManager.hideWindow(this.windowID),
                a.UIManager.showWindow(Le.WI_HomeView, e => {
                    e.onUpdateView();
                });
        }
        onClickContinue() {
            a.Music.playButtonAudio("click"), a.UIManager.hideWindow(this.windowID);
        }
        onClickRestart() {
            a.Music.playButtonAudio("click"), a.GameData.onGameClear(), a.UIManager.emit("onGameStart"),
                a.UIManager.hideWindow(this.windowID), a.UIManager.showWindow(Le.WI_GameView);
        }
    }
    class De extends Laya.Script {
        constructor() {
            super(...arguments), this.m_Label = null;
        }
        setMsg(e) {
            this.m_Label.text = e;
            let t = Ce.getStringLength(e),
                i = t.z + t.e / 2 + 2,
                s = this.owner;
            s.width = Math.max(270, 40 * i), s.pos(Laya.stage.width / 2 - s.width / 2, Laya.stage.height / 2),
                s.visible = !0, Laya.Tween.from(this.owner, {
                    alpha: 0
                }, 200), Laya.Tween.to(this.owner, {
                    y: Laya.stage.height / 2 - 200
                }, 1e3, null, Laya.Handler.create(this, () => {
                    s.visible = !1;
                }));
        }
    }
    class Ge extends ge {
        constructor() {
            super(...arguments), this.m_aryCachedTips = [], this.m_nMaxTipsNum = 50, this.m_nTipsIdx = -1;
        }
        onInit() {
            this.windowID = ye.TipsUI, this.windowType = me.WT_Tips, super.onInit();
        }
        checkPrefab(e) {
            let t = "prefabs/common/TipsItem.prefab";
            Laya.loader.load(t, Laya.Handler.create(this, () => {
                this._TipsItem = Laya.loader.getRes(t), "function" == typeof e && e();
            }));
        }
        getTipsNode() {
            if (this.m_nTipsIdx = (this.m_nTipsIdx + 1) % this.m_nMaxTipsNum, !this.m_aryCachedTips[this.m_nTipsIdx]) {
                let e = this._TipsItem.create();
                this.owner.addChild(e), this.m_aryCachedTips.push(e);
            }
            return this.m_aryCachedTips[this.m_nTipsIdx];
        }
        addTips(e) {
            this.checkPrefab(() => {
                this.getTipsNode().getComponent(De).setMsg(e);
            });
        }
    }
    class Ee {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("UI/loadingView.ts", ue), e("Core/UIModule/UIManager.ts", we), e("Game/GameData.ts", be),
                e("UI/GameView.ts", Be), e("Core/UIModule/Common/btnRunTime.ts", Me), e("UI/IcePreview.ts", Te),
                e("UI/HomeView.ts", Ue), e("UI/GameEndView.ts", Ae), e("UI/PausedView.ts", ke),
                e("Core/UIModule/Common/UITips.ts", Ge), e("Core/UIModule/Common/TipsItem.ts", De);
        }
    }
    Ee.width = 720, Ee.height = 1280, Ee.scaleMode = "exactfit", Ee.screenMode = "vertical",
        Ee.alignV = "middle", Ee.alignH = "center", Ee.startScene = "Loading.scene", Ee.sceneRoot = "",
        Ee.debug = !1, Ee.stat = !1, Ee.physicsDebug = !1, Ee.exportSceneToJson = !0, Ee.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(Ee.width, Ee.height) : Laya.init(Ee.width, Ee.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = Ee.scaleMode,
                Laya.stage.alignV = Ee.alignV,
                Laya.stage.alignH = Ee.alignH, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW, Laya.URL.exportSceneToJson = Ee.exportSceneToJson,
                (Ee.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                Ee.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), Ee.stat && Laya.Stat.show(),
                Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION),
                ce.onInit();
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Ee.startScene && Laya.Scene.open(Ee.startScene);
        }
    }();
}();