var WxAdManager = {
    Default: {
        gridAd1: null,
        gridAd2: null,
        gridAd3: null,
        listCustomAd1: null,
        listCustomAd2: null,
        videoAd: null,
        interstitialAd: null,
        gameBanner: null,
        banner_show_error: !1,
        gameGrid: null,
        grid_show_error: !1,
        squareCustomAd: null,
        squareCustomAd1: null,
        customAdShowError: !1,
        customAdShowError1: !1,
        squareShowTimes: 0,
        showSquareCustomAd(s) {
            this.hideBottomAd(), this.squareShowTimes % 2 == 0 ? 0 == this.customAdShowError ? this.showSquareAd(s) : this.showSquareAd1(s) : 0 == this.customAdShowError1 ? this.showSquareAd1(s) : this.showSquareAd(s);
        },
        showSquareAd(s) {
            let o = this;
            if (webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1") {
                if (null == this.squareCustomAd) {
                    var t = s;
                    this.squareCustomAd = wx.createCustomAd({
                        adUnitId: webuzzCommon.squareCustomAdIdList[0],
                        adIntervals: 30,
                        style: {
                            left: 0,
                            top: t,
                            fixed: !0
                        }
                    }), this.squareCustomAd.onError(s => {
                        console.log(s), o.customAdShowError = !0, o.squareCustomAd = null;
                    }), this.squareCustomAd.onClose(() => {
                        console.log("原生模板广告关闭"), o.customAdShowError = !0, o.squareCustomAd = null;
                    });
                }
                this.squareCustomAd && 0 == this.squareCustomAd.isShow() && this.squareCustomAd.show().then(() => {
                    console.log("矩阵格子广告显示"), webuzzUtils.Defalut.sendEvent("格子广告显示", {
                        index: 5
                    }), o.customAdShowError = !1, o.squareShowTimes += 1;
                }).catch(s => {
                    console.log("矩阵格子广告显示出错:"), console.log(s), o.customAdShowError = !0, o.squareCustomAd = null, 
                    o.showInterstitialAd();
                });
            }
        },
        showSquareAd1(s) {
            let o = this;
            if (webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1") {
                if (null == this.squareCustomAd1) {
                    var t = s;
                    this.squareCustomAd1 = wx.createCustomAd({
                        adUnitId: webuzzCommon.squareCustomAdIdList[1],
                        adIntervals: 30,
                        style: {
                            left: 0,
                            top: t,
                            fixed: !0
                        }
                    }), this.squareCustomAd1.onError(s => {
                        console.log(s), o.customAdShowError1 = !0, o.squareCustomAd1 = null;
                    }), this.squareCustomAd1.onClose(() => {
                        console.log("原生模板广告关闭"), o.customAdShowError1 = !0, o.squareCustomAd1 = null;
                    });
                }
                this.squareCustomAd1 && 0 == this.squareCustomAd1.isShow() && this.squareCustomAd1.show().then(() => {
                    console.log("矩阵格子广告1显示"), webuzzUtils.Defalut.sendEvent("格子广告显示", {
                        index: 5
                    }), o.customAdShowError1 = !1, o.squareShowTimes += 1;
                }).catch(s => {
                    console.log("矩阵格子广告1显示出错:"), console.log(s), o.customAdShowError1 = !0, o.squareCustomAd1 = null, 
                    o.showInterstitialAd();
                });
            }
        },
        loadSquareCustomAd1(s) {
            let o = this;
            if (webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1" && null == this.squareCustomAd1) {
                var t = s;
                this.squareCustomAd1 = wx.createCustomAd({
                    adUnitId: webuzzCommon.squareCustomAdIdList[1],
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: t,
                        fixed: !0
                    }
                }), this.squareCustomAd1.onError(s => {
                    console.log(s), o.customAdShowError1 = !0, o.squareCustomAd1 = null;
                }), this.squareCustomAd1.onClose(() => {
                    console.log("原生模板广告关闭"), o.customAdShowError1 = !0, o.squareCustomAd1 = null;
                });
            }
        },
        loadSquareCustomAd(s) {
            let o = this;
            if (webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1" && null == this.squareCustomAd) {
                var t = s;
                this.squareCustomAd = wx.createCustomAd({
                    adUnitId: webuzzCommon.squareCustomAdIdList[0],
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: t,
                        fixed: !0
                    }
                }), this.squareCustomAd.onError(s => {
                    console.log(s), o.customAdShowError = !0, o.squareCustomAd = null;
                }), this.squareCustomAd.onClose(() => {
                    console.log("原生模板广告关闭"), o.customAdShowError = !0, o.squareCustomAd = null;
                }), this.squareCustomAd.onLoad(() => {
                    o.loadSquareCustomAd1(s);
                });
            }
        },
        hideSquareCustomAd() {
            let s = this;
            this.squareCustomAd && s.squareCustomAd.isShow() && (this.squareCustomAd.hide(), 
            setTimeout(() => {
                s.squareCustomAd && s.squareCustomAd.isShow() && s.squareCustomAd.hide();
            }, 100), console.log("squareCustomAd hide.")), this.squareCustomAd1 && s.squareCustomAd1.isShow() && (this.squareCustomAd1.hide(), 
            setTimeout(() => {
                s.squareCustomAd1 && s.squareCustomAd1.isShow() && s.squareCustomAd1.hide();
            }, 100), console.log("squareCustomAd1 hide."));
        },
        showBanner() {
            if (wx) {
                var s = this;
                if (null == this.gameBanner) {
                    let o = webuzzCommon.systemInfo, t = o.screenWidth, e = o.screenHeight;
                    this.gameBanner = wx.createBannerAd({
                        adUnitId: webuzzCommon.banner_id,
                        adIntervals: 30,
                        style: {
                            left: 0,
                            top: 0,
                            width: t
                        }
                    }), this.gameBanner.onResize(o => {
                        s.gameBanner.style.top = e - o.height - 4, s.gameGrid && 0 != s.gameGrid.isShow() || s.gameBanner.show().then(() => {
                            console.log("banner show."), s.banner_show_error = !1, webuzzUtils.Defalut.sendEvent("Banner广告展示", {
                                from: "game"
                            }), s.hideBottomGrid();
                        }).catch(o => {
                            console.log("banner show error: ", o), s.gameBanner = null, s.banner_show_error = !0;
                        });
                    }), this.gameBanner.onError(o => {
                        console.log("banner error: ", o), s.gameBanner = null, s.banner_show_error = !0;
                    });
                }
                this.gameGrid && 0 != this.gameGrid.isShow() || this.gameBanner.show().then(() => {
                    console.log("banner show."), s.banner_show_error = !1, webuzzUtils.Defalut.sendEvent("Banner广告展示", {
                        from: "game"
                    }), s.hideBottomGrid();
                }).catch(o => {
                    console.log("banner show error: ", o), s.gameBanner = null, s.banner_show_error = !0;
                });
            }
        },
        hideBanner() {
            this.gameBanner && (this.gameBanner.hide(), console.log("bottom banner hide."));
        },
        showBottomGrid() {
            if (!wx) return;
            var s = this;
            let o = webuzzCommon.systemInfo;
            if (o.SDKVersion && o.SDKVersion >= "2.11.1") {
                if (null == this.gameGrid) {
                    console.log("bottom grid load:------------ ");
                    let e = o.screenWidth, i = o.screenHeight;
                    var t = 0;
                    e > 288 && (t = (e - 288) / 2), this.gameGrid = wx.createCustomAd({
                        adUnitId: webuzzCommon.grid_id,
                        adIntervals: 30,
                        style: {
                            left: t,
                            top: i - 100,
                            width: e
                        }
                    }), this.gameGrid.onError(o => {
                        console.log("bottom grid error: ", o), s.gameGrid = null, s.grid_show_error = !0;
                    }), this.gameGrid.onClose(() => {
                        console.log("bottom grid close."), s.gameGrid = null, s.grid_show_error = !0;
                    });
                }
                this.gameGrid && 0 == this.gameGrid.isShow() && this.gameGrid.show().then(() => {
                    console.log("bottom grid show."), s.grid_show_error = !1, webuzzUtils.Defalut.sendEvent("格子广告显示", {
                        index: 3
                    }), s.hideBanner();
                }).catch(o => {
                    console.log('"bottom grid show err:', o), s.gameGrid = null, s.grid_show_error = !0;
                });
            }
        },
        hideBottomGrid() {
            this.gameGrid && (console.log("bottom grid hide."), this.gameGrid.hide());
        },
        showBottomAd() {
            0 == this.grid_show_error ? this.showBottomGrid() : 0 == this.banner_show_error ? this.showBanner() : this.showBottomGrid();
        },
        hideBottomAd() {
            this.hideBanner(), this.hideBottomGrid();
        },
        showTwoGridAds(s, o, t, e) {
            0 != ("function" == typeof wx.createCustomAd) && (null == this.gridAd1 && (this.gridAd1 = wx.createCustomAd({
                adUnitId: webuzzCommon.gridAdIdList[0],
                adIntervals: 30,
                style: {
                    left: s,
                    top: o,
                    fixed: !1
                }
            })), null == this.gridAd2 && (this.gridAd2 = wx.createCustomAd({
                adUnitId: webuzzCommon.gridAdIdList[2],
                adIntervals: 30,
                style: {
                    left: t,
                    top: e,
                    fixed: !1
                }
            })), this.gridAd1 && 0 == this.gridAd1.isShow() && this.gridAd1.show().then(() => {
                webuzzUtils.Defalut.sendEvent("格子广告显示", {
                    index: 2
                });
            }).catch(s => {}), this.gridAd2 && 0 == this.gridAd2.isShow() && this.gridAd2.show().then(() => {
                webuzzUtils.Defalut.sendEvent("格子广告显示", {
                    index: 3
                });
            }).catch(s => {}));
        },
        hideTwoGridAds() {
            this.gridAd1 && this.gridAd1.hide(), this.gridAd2 && this.gridAd2.hide();
        },
        showOneGridAd(s, o) {
            var t = "function" == typeof wx.createCustomAd;
            0 != t && (null == this.gridAd3 && t && (this.gridAd3 = wx.createCustomAd({
                adUnitId: webuzzCommon.gridAdIdList[2],
                adIntervals: 30,
                style: {
                    left: s,
                    top: o,
                    fixed: !1
                }
            })), this.gridAd3 && 0 == this.gridAd3.isShow() && this.gridAd3.show().then(() => {
                webuzzUtils.Defalut.sendEvent("格子广告显示", {
                    index: 1
                });
            }).catch(s => {}));
        },
        hideOneGridAd() {
            this.gridAd3 && this.gridAd3.hide();
        },
        showListCustomAds(s, o, t, e) {
            let i = this;
            webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1" && (null == this.listCustomAd1 && (this.listCustomAd1 = wx.createCustomAd({
                adUnitId: webuzzCommon.listCustomAdIdList[0],
                adIntervals: 30,
                style: {
                    left: s,
                    top: o,
                    fixed: !0
                }
            }), this.listCustomAd1.onError(s => {
                console.log(s);
            }), this.listCustomAd1.onClose(() => {
                console.log("单列格子广告1关闭"), i.listCustomAd1 = null;
            })), this.listCustomAd1 && 0 == this.listCustomAd1.isShow() && this.listCustomAd1.show().then(() => {
                webuzzUtils.Defalut.log("单列格子广告1显示"), webuzzUtils.Defalut.sendEvent("格子广告显示", {
                    index: 4
                });
            }).catch(s => {
                webuzzUtils.Defalut.log("单列格子广告1显示出错:"), webuzzUtils.Defalut.log(s);
            }), null == this.listCustomAd2 && (this.listCustomAd2 = wx.createCustomAd({
                adUnitId: webuzzCommon.listCustomAdIdList[1],
                adIntervals: 30,
                style: {
                    left: t,
                    top: e,
                    fixed: !0
                }
            }), this.listCustomAd2.onError(s => {
                console.log(s);
            }), this.listCustomAd2.onClose(() => {
                console.log("单列格子广告2关闭"), i.listCustomAd2 = null;
            })), this.listCustomAd2 && 0 == this.listCustomAd2.isShow() && this.listCustomAd2.show().then(() => {
                webuzzUtils.Defalut.log("单列格子广告2显示"), webuzzUtils.Defalut.sendEvent("格子广告显示", {
                    index: 5
                });
            }).catch(s => {
                webuzzUtils.Defalut.log("单列格子广告2显示出错:"), webuzzUtils.Defalut.log(s);
            }));
        },
        loadListCustomAds(s, o, t, e) {
            let i = this;
            webuzzCommon.systemInfo.SDKVersion && webuzzCommon.systemInfo.SDKVersion >= "2.11.1" && (null == this.listCustomAd1 && (this.listCustomAd1 = wx.createCustomAd({
                adUnitId: webuzzCommon.listCustomAdIdList[0],
                adIntervals: 30,
                style: {
                    left: s,
                    top: o,
                    fixed: !0
                }
            }), this.listCustomAd1.onError(s => {
                console.log(s);
            }), this.listCustomAd1.onClose(() => {
                console.log("单列格子广告1关闭"), i.listCustomAd1 = null;
            })), null == this.listCustomAd2 && (this.listCustomAd2 = wx.createCustomAd({
                adUnitId: webuzzCommon.listCustomAdIdList[1],
                adIntervals: 30,
                style: {
                    left: t,
                    top: e,
                    fixed: !0
                }
            }), this.listCustomAd2.onError(s => {
                console.log(s);
            }), this.listCustomAd2.onClose(() => {
                console.log("单列格子广告2关闭"), i.listCustomAd2 = null;
            })));
        },
        hideListCustomAds() {
            this.listCustomAd1 && this.listCustomAd1.hide(), this.listCustomAd2 && this.listCustomAd2.hide();
        },
        showInterstitialAd() {
            wx.createInterstitialAd && (this.interstitialAd = wx.createInterstitialAd({
                adUnitId: webuzzCommon.interstitialAdId
            }), this.interstitialAd && (this.interstitialAd.show().then(s => {
                webuzzUtils.Defalut.sendEvent("插屏广告显示");
            }), this.interstitialAd.onClose(s => {})));
        },
        hideInterstitialAd() {
            this.interstitialAd = null;
        },
        showVideoAd(s) {
            this.videoAd = wx.createRewardedVideoAd({
                adUnitId: webuzzCommon.videoAdId
            }), this.videoAd.offClose(), this.videoAd.offError(), this.videoAd.load().then(() => {
                this.videoAd.show().then(() => {});
            }), this.videoAd.onError(o => {
                this.videoAd.offClose(), this.videoAd.offError(), webuzzUtils.Defalut.log("video error"), 
                webuzzUtils.Defalut.log(o), s(0);
            }), this.videoAd.onClose(o => {
                this.videoAd.offClose(), this.videoAd.offError(), o && o.isEnded || void 0 === o ? (webuzzUtils.Defalut.sendEvent("看完视频", {
                    from: "tip"
                }), s(1)) : s(2);
            });
        }
    }
};

window.WxAdManager = WxAdManager;