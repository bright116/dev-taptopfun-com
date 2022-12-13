var webuzzSDK = {
    init() {
        console.log("webuzz sdk version:", webuzzCommon.SDK_VERSION), webuzzCommon.systemInfo = wx.getSystemInfoSync(), 
        webuzzUtils.Defalut.log(webuzzCommon.systemInfo), webuzzCommon.scaleX = webuzzCommon.systemInfo.screenWidth / webuzzCommon.stageWidth, 
        webuzzCommon.stageHeight = webuzzCommon.systemInfo.screenHeight / webuzzCommon.scaleX, 
        webuzzUtils.Defalut.log("获取游戏缓存信息"), webuzzUtils.Defalut.getWxStorageData(), webuzzUtils.Defalut.log("用户登录"), 
        webuzzUtils.Defalut.getUserInfo();
    },
    pay(e) {
        WxAdManager.Default.showVideoAd(e);
    },
    loadSquareCustomAd(e) {
        WxAdManager.Default.loadSquareCustomAd(e);
    },
    showSquareCustomAd(e) {
        WxAdManager.Default.showSquareCustomAd(e);
    },
    hideSquareCustomAd() {
        WxAdManager.Default.hideSquareCustomAd();
    },
    showBottomAd() {
        WxAdManager.Default.showBottomAd();
    },
    hideBottomAd() {
        WxAdManager.Default.hideBottomAd();
    },
    showTwoGridAds(e, t, o, a) {
        WxAdManager.Default.showTwoGridAds(e, t, o, a);
    },
    hideTwoGridAds() {
        WxAdManager.Default.hideTwoGridAds();
    },
    showOneGridAd(e, t) {
        WxAdManager.Default.showOneGridAd(e, t);
    },
    hideOneGridAd() {
        WxAdManager.Default.hideOneGridAd();
    },
    showListCustomAds(e, t, o, a) {
        WxAdManager.Default.showListCustomAds(e, t, o, a);
    },
    loadListCustomAds(e, t, o, a) {
        WxAdManager.Default.loadListCustomAds(e, t, o, a);
    },
    hideListCustomAds() {
        WxAdManager.Default.hideListCustomAds();
    },
    showInterstitialAd() {
        WxAdManager.Default.showInterstitialAd();
    },
    endLevelGame(e) {
        webuzzUtils.Defalut.sendEvent("下一关展示", {
            level: e
        });
    }
};

window.webuzzSDK = webuzzSDK;