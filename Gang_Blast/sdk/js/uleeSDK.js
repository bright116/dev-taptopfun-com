var _classCallCheck2 = arequire("../../@babel/runtime/helpers/classCallCheck");

var _createClass2 = arequire("../../@babel/runtime/helpers/createClass");

window.uleeSDK = function(e) {
    "use strict";
    return e.getIns = new (/* */ function() {
        function _class() {
            _classCallCheck2(this, _class);
        }
        _createClass2(_class, [ {
            key: "initSDK",
            value: function initSDK() {
                console.log("=======init sdk========"), Laya ? (this.pf = window.qg || window.wx || window.tt || window.qq, 
                this.box = new Laya.Box(), this.box.left = 0, this.box.right = 0, this.box.top = 0, 
                this.box.bottom = 0, this.box.mouseThrough = !0, Laya.stage.addChild(this.box), 
                this._ui = {}, window.uleeSDK = uleeSDK.getIns, this.initData(), this.isInit = !0, 
                this._openUI("sdk/homeUI.json", "MainUI", this.box)) : console.log("LAYA未初始化");
            }
        }, {
            key: "onShow",
            value: function onShow(e) {
                this.pf && this.pf.onShow(function(i) {
                    if (window.qg) qg.onUpdateReady(function(e) {
                        1 == e && qg.applyUpdate();
                    }); else if (window.wx && wx.getUpdateManager && "function" == typeof wx.getUpdateManager) {
                        var t = new wx.getUpdateManager();
                        t.onCheckForUpdate(function(e) {
                            e.hasUpdate && (t.onUpdateReady(function() {
                                t && t.applyUpdate();
                            }), t.onUpdateFailed(function() {}));
                        });
                    }
                    e && e(i);
                });
            }
        }, {
            key: "onHide",
            value: function onHide(e) {
                this.pf && this.pf.onHide(function(i) {
                    console.log("切换后台"), window.qg || window.wx && this.showBannerTime && new Date().getTime() - this.showBannerTime < 1e3 && (this.clickBannerTimes++, 
                    this.clickBannerTimes > 2 && (this.serverAdConfig.touchMistake = 0), console.log("点击Banner")), 
                    e && e(i);
                });
            }
        }, {
            key: "initData",
            value: function initData() {
                this.data = {
                    diamond: 0,
                    energy: 1,
                    gold: 0,
                    todayEnterTime: new Date().getTime(),
                    freeTL: !1,
                    videoTimes: 0,
                    vibration: !0
                }, uleeTools._getStorage(function(e) {
                    uleeTools._copyFrom(this.data, e), this._save(), console.log("SDK数据", this.data);
                }.bind(this)), this.oneEnergy = 1, this.maxEnergy = uleeConfig.maxTL, this.addEnergy = uleeConfig.addTL, 
                this.addGold = uleeConfig.addGold, this.isFirstIn = !0, this._compareTime(this.getData("todayEnterTime")) && (this.setData("freeTL", !1), 
                this.setData("videoTimes", 0), this.setData("todayEnterTime", new Date().getTime()), 
                console.log("新的一天")), window.wx && (this.user = {}, this.systemInfo = wx.getSystemInfoSync(), 
                this.launchOpt = wx.getLaunchOptionsSync(), this.clickBannerTimes = 0, -1 !== this.systemInfo.system.toLowerCase().indexOf("ios") ? this.systemInfo.os = "ios" : this.systemInfo.os = "android", 
                this.login()), this.onShow(), this.onHide(), this.getAdConfig(), this.getRecommendDatas(), 
                this.getServerConfigs();
            }
        }, {
            key: "setData",
            value: function setData(e, i) {
                this.data[e] = i, this._save();
            }
        }, {
            key: "getData",
            value: function getData(e) {
                return this.data[e];
            }
        }, {
            key: "addGoldNum",
            value: function addGoldNum(e, i) {
                var t = this.mainUI.addGold(e);
                i && i(t);
            }
        }, {
            key: "creazyClick",
            value: function creazyClick(e, i, t) {
                if (1 == this.serverConfig.touchMistake) {
                    var n = Math.random();
                    console.log("狂点", n), n < .2 && (this.showAD(!0, e, i), Laya.timer.once(1500, this, function() {
                        this.showAD(!1);
                    }), t && t());
                }
            }
        }, {
            key: "_save",
            value: function _save() {
                var e = {};
                uleeTools._copyForm2(e, this.data), uleeTools._setStorage(e);
            }
        }, {
            key: "_compareTime",
            value: function _compareTime(e, i) {
                if (i) i = i.getTime(); else {
                    var t = new Date();
                    i = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                }
                if (e < i) return !0;
            }
        }, {
            key: "_openUI",
            value: function _openUI(e, i, t, n) {
                if (this.isInit) {
                    if (this._ui[i]) return;
                    Laya.loader.create(e, Laya.Handler.create(this, function(e) {
                        if (!e) return;
                        var s = new (Laya.ClassUtils.getClass(i))();
                        s.createView(e), s.onOpened(n), t == this.box && (this.mainUI = s), t.addChild(s), 
                        s.name = i, this._ui[i] = s;
                    }));
                } else console.log("LAYA未初始化");
            }
        }, {
            key: "showMainUI",
            value: function showMainUI(e) {
                this.mainUI.showUI(!0), this.isFirstIn || "wx" != uleeConfig.plat || this.showDrawer();
            }
        }, {
            key: "hideMainUI",
            value: function hideMainUI() {
                this.mainUI.showUI(!1);
            }
        }, {
            key: "startGame",
            value: function startGame(e) {
                1 == this.serverConfig.forceVideo ? uleeSDK.showVideo(function() {
                    this.mainUI.startGame(e), this.serverConfig.forceVideo = 0;
                }.bind(this), function() {
                    this.mainUI.startGame(e), this.serverConfig.forceVideo = 0;
                }.bind(this)) : this.mainUI.startGame(e);
            }
        }, {
            key: "openAddEnergy",
            value: function openAddEnergy(e, i) {
                this._openUI("sdk/addEnergy.json", "AddEnergyUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "openAddGold",
            value: function openAddGold(e, i) {
                this._openUI("sdk/addGold.json", "AddGoldUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "openLucky",
            value: function openLucky(e, i) {
                this._openUI("sdk/luckyUI.json", "LuckyUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "openChest",
            value: function openChest(e, i) {
                this._openUI("sdk/chestUI.json", "ChestUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "showDrawer",
            value: function showDrawer(e, i) {
                this._openUI("sdk/drawerUI.json", "DrawerUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                }), this._ui.DrawerUI && this._ui.DrawerUI.switchDrawer(!0);
            }
        }, {
            key: "showSettlement",
            value: function showSettlement(e, i, t) {
                this._openUI("sdk/settleMentUI.json", "SettlementUI", this.mainUI.box_page, {
                    bannerY: e,
                    style: i,
                    callback: t
                });
            }
        }, {
            key: "showRecommend",
            value: function showRecommend(e, i) {
                "wx" == uleeConfig.plat ? this._openUI("sdk/recommendUI.json", "RecommendUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                }) : e && e();
            }
        }, {
            key: "hideSettlement",
            value: function hideSettlement(e) {
                this._ui.SettlementUI && this._ui.SettlementUI.doClose(), e && "wx" == uleeConfig.plat && this.showFullScreen();
            }
        }, {
            key: "openShareVideo",
            value: function openShareVideo(e, i) {
                this._openUI("sdk/shareVideoUI.json", "ShareVideoUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "showCouplet",
            value: function showCouplet(e, i) {
                this.isFirstIn || "wx" != uleeConfig.plat || this._openUI("sdk/coupletUI.json", "CoupletUI", this.mainUI.box_page, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "hideCouplet",
            value: function hideCouplet() {
                this._ui.CoupletUI && this._ui.CoupletUI.doClose();
            }
        }, {
            key: "showFullScreen",
            value: function showFullScreen(e, i) {
                "wx" == uleeConfig.plat && this._openUI("sdk/fullScreenUI.json", "FullScreenUI", this.mainUI.box_page1, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "showMoreGame",
            value: function showMoreGame(e, i) {
                "wx" == uleeConfig.plat ? this._openUI("sdk/moreGameUI.json", "MoreGameUI", this.mainUI.box_page1, {
                    callback: e,
                    style: i
                }) : "oppo" == uleeConfig.plat ? this.showGamePortalAd() : uleeConfig.plat;
            }
        }, {
            key: "showCreazyClick",
            value: function showCreazyClick(e, i) {
                this._openUI("sdk/creazyClick1.json", "CreazyClickUI", this.mainUI.box_page1, {
                    callback: e,
                    style: i
                });
            }
        }, {
            key: "readyBanner",
            value: function readyBanner() {
                if (this.pf && (this.curBanner && (this.curBanner.destroy(), this.curBanner = null), 
                window.wx && this.adBannerIds)) {
                    var e = this.pf.createBannerAd({
                        adUnitId: this.adBannerIds[this.bannerIndex],
                        adIntervals: 30,
                        style: {
                            top: 0,
                            left: 0,
                            width: Laya.Browser.width
                        }
                    });
                    this.bannerIndex++, this.bannerIndex >= this.adBannerIds.length && (this.bannerIndex = 1), 
                    this.curBanner = e, e.onLoad(function() {
                        console.log("banner广告加载完毕"), e.isReady = !0, e.hide();
                    }.bind(this)), e.onError(function(e) {
                        console.log(e, "bannerAd Error!!!");
                    }), e.onResize(function(e) {
                        this.curBanner.style.left = (Laya.Browser.clientWidth - Math.ceil(e.width)) / 2, 
                        this.curBanner.style.top = 1 - Math.ceil(e.height);
                    }.bind(this));
                }
            }
        }, {
            key: "createHideBanner",
            value: function createHideBanner() {
                if (!this.hideBanner && this.adBannerIds.length > 0 && 1 != this.bannerIndex) {
                    var e = this.pf.createBannerAd({
                        adUnitId: this.adBannerIds[0],
                        adIntervals: 30,
                        style: {
                            top: 0,
                            left: 0,
                            width: Laya.Browser.width
                        }
                    });
                    this.hideBanner = e, e.onLoad(function() {
                        console.log("banner2广告加载完毕"), e.show();
                    }.bind(this)), e.onError(function(e) {
                        console.log(e, "bannerAd Error!!!");
                    }), e.onResize(function(i) {
                        e.style.left = Math.ceil(i.width) - 1, e.style.top = 1 - Math.ceil(i.height);
                    }.bind(this));
                }
            }
        }, {
            key: "showAD",
            value: function showAD(e, i, t) {
                if (this.pf) e ? window.qg ? (this.curBanner = this.pf.createBannerAd({
                    adUnitId: this.adBannerIds[this.bannerIndex],
                    adIntervals: 30,
                    style: {
                        width: Laya.Browser.width
                    }
                }), this.curBanner.onLoad(function() {
                    console.log("banner广告加载完毕");
                }), this.curBanner.onError(function(e) {
                    console.log(e, "bannerAd Error!!!");
                }), this.curBanner.onResize(function(e) {}), this.curBanner.show()) : window.wx && this.curBanner && this.curBanner.isReady && (this.curBanner.show(), 
                this.showBannerTime = new Date().getTime(), this.curBanner.style.left = i ? i * Laya.Browser.clientWidth / Laya.stage.width : (Laya.Browser.clientWidth - Math.ceil(this.curBanner.style.realWidth)) / 2, 
                this.curBanner.style.top = t ? t * Laya.Browser.clientHeight / Laya.stage.height : Laya.Browser.clientHeight - Math.ceil(this.curBanner.style.realHeight)) : window.qg ? this.curBanner && (this.curBanner.destroy(), 
                this.curBanner = null, console.log("移除Banner")) : this.readyBanner(); else if (e) {
                    if (this.curBanner) return void console.log("banner已经存在");
                    this.curBanner = new Laya.Sprite(), this.curBanner.x = i || 0, this.curBanner.y = t || Laya.stage.height - 200, 
                    this.curBanner.graphics.drawRect(0, 0, Laya.stage.width, 200, "#ffff00");
                    var _e = new Laya.Label();
                    _e.text = "此处是模拟Banner", _e.fontSize = 40, this.curBanner.addChild(_e), this.curBanner.size(Laya.stage.width, 200), 
                    this.mainUI.addChild(this.curBanner), this.curBanner.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                        console.log("点击到模拟Banner"), e.stopPropagation(), this.curBanner.destroy(), this.curBanner = null;
                    });
                } else this.curBanner && (this.curBanner.destroy(), this.curBanner = null, console.log("销毁模拟Banner"));
            }
        }, {
            key: "readyVideo",
            value: function readyVideo() {
                if (this.pf) {
                    if (this.videoId = this.adVideoIds[this.videoIndex], "vivo" == uleeConfig.plat) var e = this.pf.createRewardedVideoAd({
                        posId: this.videoId
                    }); else e = this.pf.createRewardedVideoAd({
                        adUnitId: this.videoId
                    });
                    this.videoAd = e, this.videoAd.onLoad(function() {
                        this.videoAd.isVideoADLoad = !0, console.log("视频加载完成");
                    }.bind(this)), this.videoAd.onError(function(e) {
                        console.log(e, "videoAd Error!!!");
                    }.bind(this)), this.videoAd.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? (this.setData("videoTimes", this.getData("videoTimes") + 1), 
                        this.videoComplete && this.videoComplete(), this.videoComplete = null) : (this.videoFail && this.videoFail(), 
                        this.videoFail = null), this.videoAd.isVideoADLoad = !1, this.videoAd.load();
                    }.bind(this)), this.videoAd.load();
                }
            }
        }, {
            key: "showVideo",
            value: function showVideo(e, i) {
                if (!this.pf) {
                    this.curVideo = new Laya.Sprite(), this.curVideo.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#ffff00");
                    var t = new Laya.Label();
                    t.text = "点击模拟视频成功", t.fontSize = 40, t.x = 100, t.y = 200;
                    var n = new Laya.Label();
                    return n.text = "点击模拟视频失败", n.fontSize = 40, n.x = 100, n.y = 400, this.curVideo.addChild(t), 
                    this.curVideo.addChild(n), this.curVideo.size(Laya.stage.width, Laya.stage.height), 
                    this.mainUI.addChild(this.curVideo), this.curVideo.on(Laya.Event.MOUSE_DOWN, this, function(e) {}), 
                    t.on(Laya.Event.MOUSE_DOWN, this, function(i) {
                        console.log("模拟视频成功"), i.stopPropagation(), this.curVideo.destroy(), this.setData("videoTimes", this.getData("videoTimes") + 1), 
                        e && e();
                    }), void n.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                        console.log("模拟视频失败"), e.stopPropagation(), this.curVideo.destroy(), i && i();
                    });
                }
                this.videoComplete = e, this.videoFail = i, this.videoAd && this.videoAd.isVideoADLoad ? this.videoAd.show() : (this.videoFail && this.videoFail(), 
                uleeTools.prompt("视频未加载，请稍后再试"));
            }
        }, {
            key: "showInterstitialAD",
            value: function showInterstitialAD(i) {
                if (this.interstitialAD && (this.interstitialAD.destroy(), this.interstitialAD = null), 
                this.interstitialAD = this.adInterstitialsIds[this.InterAdIndex], "vivo" == uleeConfig.plat) var t = this.pf.createInterstitialAd({
                    posId: this.interstitialAD
                }); else t = this.pf.createInterstitialAd({
                    adUnitId: this.interstitialAD
                });
                this.interstitialAD = t, "wx" == uleeConfig.plat && this.interstitialAD.load().then(function(e) {
                    console.log("插屏广告:", e);
                }).catch(function(e) {
                    console.log("插屏广告:", e);
                }), this.interstitialAD.onLoad(function() {
                    e.interstitialAD.show(), i && i();
                }), this.interstitialAD.onError(function(e) {
                    console.log("插屏广告:", e);
                });
            }
        }, {
            key: "readyNativeAd",
            value: function readyNativeAd() {
                if (this.pf) if (this.nativeAdTime && "vivo" == uleeConfig.plat && new Date().getTime() - self.nativeAdTime < 3e3) console.log("原生请求时间间隔过短，不请求"); else {
                    if (this.nativeAdTime = new Date().getTime(), "oppo" == uleeConfig.plat && this.nativeAd) {
                        if (!this.nativeAd.isShow) return;
                        this.nativeAd.destroy();
                    }
                    this.nativeAd = this.pf.createNativeAd({
                        posId: this.nativeId
                    }), this.nativeInfo = null, this.nativeAd.load(), this.nativeAd.onLoad(function(e) {
                        console.log("原生广告预加载", e.adList[0]), this.nativeInfo = e.adList[0], this.nativeAd.offLoad();
                    }.bind(this)), this.nativeAd.onError(function(e) {
                        console.error("原生广告失败：", e), this.nativeAd.isShow = !0;
                    }.bind(this));
                }
            }
        }, {
            key: "getNativeAd",
            value: function getNativeAd() {
                if (this.nativeInfo) return this.nativeAd.reportAdShow({
                    adId: this.nativeInfo.adId
                }), this.nativeAd.isShow = !0, this.nativeInfo;
                this.readyNativeAd();
            }
        }, {
            key: "reportClick",
            value: function reportClick() {
                this.nativeInfo && (this.nativeAd.reportAdClick({
                    adId: this.nativeInfo.adId
                }), this.isClickNative = !0);
            }
        }, {
            key: "showGamePortalAd",
            value: function showGamePortalAd() {
                if (console.log("显示互推盒子"), window.qg && qg.getSystemInfoSync().platformVersionCode >= 1076) {
                    if (this.gamePortalAd) return void this.gamePortalAd.show();
                    this.gamePortalAd = qg.createGamePortalAd({
                        adUnitId: uleeConfig.boxId
                    }), this.gamePortalAd.onLoad(function() {
                        console.log("九宫格广告显示加载成功"), this.gamePortalAd.show().then(function() {
                            console.log("九宫格show success");
                        }).catch(function(e) {
                            console.log("九宫格显示:" + e.errCode + "," + e.errMsg);
                        });
                    }.bind(this)), this.gamePortalAd.onError(function(e) {
                        console.log("九宫格广告显示失败", e);
                    }), this.gamePortalAd.onClose(function() {
                        console.log("互推盒子九宫格广告关闭"), this.gamePortalAd.destroy(), this.gamePortalAd = null;
                    }.bind(this)), this.gamePortalAd.load(), this.PortalAdTime = new Date().getTime();
                } else console.log("快应用平台版本号低于1076，暂不支持互推盒子相关 API");
            }
        }, {
            key: "showBoxBanner",
            value: function showBoxBanner(e) {
                window.qg && qg.createBoxBannerAd ? (this.boxBannerAd = qg.createBoxBannerAd({
                    posId: this.adGeziIds[this.geziAdIndex]
                }), this.boxBannerAd.onError(function(e) {
                    console.log("盒子横幅广告加载失败", e);
                }), this.boxBannerAd.show().then(function() {
                    console.log("显示互推成功"), self.showAD(!1);
                }), console.log("显示互推"), this.boxBannerAd.onClose(function() {
                    console.log("close boxbanner"), e && e();
                })) : console.log("暂不支持互推盒子相关 API");
            }
        }, {
            key: "closeBoxBanner",
            value: function closeBoxBanner() {
                this.boxBannerAd && (this.boxBannerAd.destroy(), this.boxBannerAd = null);
            }
        }, {
            key: "startVibrate",
            value: function startVibrate(e) {
                this.getData("vibration") && this.pf && (e ? this.pf.vibrateLong() : this.pf.vibrateShort());
            }
        }, {
            key: "setVibrate",
            value: function setVibrate(e) {
                this.setData("vibration", e);
            }
        }, {
            key: "jumpToApp",
            value: function jumpToApp(e, i) {
                if (window.wx) {
                    var t = function() {
                        console.log("jumpToApp complete");
                    }.bind(this), n = function() {
                        i && i(!0), this.recordJumpTo(e);
                    }.bind(this);
                    wx.navigateToMiniProgram({
                        appId: e.appid,
                        path: e.path,
                        extraData: e.param,
                        success: n,
                        fail: function fail(e) {
                            i && i(!1, e);
                        },
                        complete: t
                    });
                }
            }
        }, {
            key: "request",
            value: function request(e, i, t) {
                if (window.wx) wx.request({
                    url: uleeConfig.server + "/gameApi/" + e,
                    data: i,
                    header: {
                        "client-ver": uleeConfig.gameVersion,
                        "client-os": this.systemInfo.os
                    },
                    method: "POST",
                    success: function success(e) {
                        200 == (e = e.data).code ? t && t(e.data) : console.log("[ulee-wxsdk] code fail", e);
                    },
                    fail: function fail(e) {
                        console.log("[ulee-wxsdk] code fail", e);
                    },
                    complete: function complete(e) {}
                }); else {
                    var n = new XMLHttpRequest();
                    n.onload = function(e) {
                        console.log("请求返回：", e), 200 == (e = e.data).code ? t && t(e.data) : console.log("[ulee-wxsdk] code fail", e);
                    }, n.onerror = function() {
                        console.log("请求错误");
                    }, n.open("POST", "https://ulee.net.cn/", !0), n.send(i);
                }
            }
        }, {
            key: "login",
            value: function login() {
                window.wx && wx.login({
                    success: function(e) {
                        this.request("login", {
                            appid: uleeConfig.appId,
                            launchOpt: this.launchOpt,
                            code: e.code,
                            os: this.systemInfo.os
                        }, function(e) {
                            this.user.loginSuccess = !0, this.user.userId = e.uid || "", this.user.openId = e.openid || "", 
                            this.user.avatar = e.avatarUrl || "", this.user.nickname = e.nickName || "", this.user.gender = e.gender || 0, 
                            this.user.regtime = e.regtime || 0, this.user.isTodayReg = this._compareTime(e.regtime), 
                            this.getShareInfoFromServer(), console.log("[ulee-wxsdk] code-login succ", this.user);
                        }.bind(this));
                    }.bind(this),
                    fail: function fail(e) {
                        console.log("[mt-wxsdk] wx.login fail", e);
                    }
                });
            }
        }, {
            key: "getShareInfoFromServer",
            value: function getShareInfoFromServer() {
                this.request("getShareConfig", {
                    appid: uleeConfig.appId
                }, function(e) {});
            }
        }, {
            key: "getAdConfig",
            value: function getAdConfig() {
                console.log("获取广告配置"), window.wx ? this.request("getAdList", {
                    appid: uleeConfig.appId
                }, function(e) {
                    var i = e;
                    var t = [], n = [], s = [], o = [], a = {};
                    var d;
                    this.serverAdConfig || (this.serverAdConfig = {});
                    for (var _e2 = 0; _e2 < i.length; _e2++) {
                        switch (d = i[_e2], this.serverAdConfig[d.id] = d.adid, a[d.adid] = d.adid, d.type) {
                          case 1:
                            t.push(d.adid);
                            break;

                          case 2:
                            n.push(d.adid);
                            break;

                          case 3:
                            s.push(d.adid);
                            break;

                          case 4:
                            o.push(d.adid);
                        }
                    }
                    this.adBannerIds = t, this.bannerIndex = uleeTools.random(0, this.adBannerIds.length - 1), 
                    this.adVideoIds = n, this.videoIndex = uleeTools.random(0, this.adVideoIds.length - 1), 
                    this.adInterstitialsIds = s, this.InterAdIndex = uleeTools.random(0, this.adInterstitialsIds.length - 1), 
                    this.adGeziIds = o, this.geziAdIndex = uleeTools.random(0, this.adInterstitialsIds.length - 1), 
                    this.adConfigs = a, console.log("广告ids:", this.adConfigs), Laya.timer.once(2e3, this, this.createHideBanner), 
                    this.readyBanner(), this.readyVideo();
                }.bind(this)) : window.qg && (this.nativeId = uleeConfig.nativeId, this.isClickNative = !1, 
                this.adBannerIds = [ uleeConfig.bannerId ], this.bannerIndex = 0, this.adVideoIds = [ uleeConfig.videoId ], 
                this.videoIndex = 0, this.adGeziIds = [ uleeConfig.boxId ], this.geziAdIndex = 0, 
                this.readyNativeAd(), this.readyBanner(), this.readyVideo());
            }
        }, {
            key: "getServerConfigs",
            value: function getServerConfigs() {
                this.serverConfig = {}, window.wx && this.request("getGameConfig", {
                    appid: uleeConfig.appId
                }, function(e) {
                    e ? (this.serverConfig = e, console.log("开关", e), this.serverConfig.version == uleeConfig.gameVersion && (console.log("该版本为屏蔽版本，开关设置屏蔽"), 
                    this.serverConfig.touchMistake = 0, this.serverConfig.forceVideo = 0)) : console.log("为获取后台开关数据");
                }.bind(this));
            }
        }, {
            key: "getRecommendDatas",
            value: function getRecommendDatas(e) {
                this.recommendDatas = [], window.wx && this.request("getRecommends", {
                    appid: uleeConfig.appId
                }, function(e) {
                    this.recommendDatas = e.sort(function(e, i) {
                        return e.sortNo - i.sortNo;
                    });
                    for (var i = 0; i < this.recommendDatas.length; i++) {
                        this.recommendDatas[i].icon = uleeConfig.server + this.recommendDatas[i].icon, this.recommendDatas[i].content = uleeTools.random(20, 100) + "万人在玩";
                    }
                    console.log("导出", this.recommendDatas);
                }.bind(this));
            }
        }, {
            key: "recordJumpTo",
            value: function recordJumpTo(e) {
                this.request("jumpTo", {
                    openid: this.user.openId,
                    appid: uleeConfig.appId,
                    to: e.appId,
                    location: e.location || -1
                }, function(e) {
                    console.log("[ulee-wxsdk] report navigate succ", e);
                });
            }
        } ]);
        return _class;
    }())(), e;
}({});