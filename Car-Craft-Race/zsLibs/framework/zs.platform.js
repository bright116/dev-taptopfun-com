!function () {
    var _classCallCheck2 = require("../../runtime/helpers/classCallCheck");

    window.zs = window.zs || {}, window.zs.platform = window.zs.platform || {},
        function (e) {
            "use strict";
            var r = window.platform0, n = ["share", "userInfoHide", "userInfoShow", "userInfoDestroy", "initVideo", "isVideoEnable", "initInsert", "loadInsert", "hasBanner", "nextBanner", "createBanner", "initBanner", "checkBanner", "clearDelayBanner", "showBanner", "updateBanner", "hideBanner", "recorderStart", "recorderStop", "recorderPause", "recorderResume", "recorderCreate", "recorderHide", "canShareRecorder", "statusBarHeight", "screenWidth", "screenHeight", "vibrate", "isNetValid", "addEventShow", "addEventHide", "recorderClip", "recorderShare", "showFavoriteGuide", "setDefaultShare", "updateReviveTypeInfo", "setNativeLastShowTime", "initNativeAd", "sendReqAdShowReport", "sendReqAdClickReport", "reportNativeAdClick", "initGamePortalAd", "showToast", "getLaunchOptions", "getScene", "showInsertAd", "initBannerId", "showOnePixelBanner", "showShareMenu", "openShare", "getReadSetting", "playSound", "initAppBox", "showAppBox", "checkBlockAd", "showBlockAd", "hideBlockAd", "destroyInsertAd", "pauseSound", "getAdPos", "showCustomAd", "hideCustomAd", "hideGamePortalAd"], o = ["login", "getLoginParams", "playVideo", "setCloudStorage", "getCloudStorage", "userInfoCreate", "navigateToOther", "loadSubpackage", "getUserInfo", "openAwemeUserProfile", "checkFollowAwemeState", "loadNativeAd", "isBeforeGameAccount", "getAdReporteStatus", "showGamePortalAd", "hasDesktopIcon", "createDesktopIcon", "getNetworkType", "shareRecorderVideo", "showMoreGamesModalSimple", "showInterstitialAd"];
            var t = function t() {
                _classCallCheck2(this, t);
            };
            var a = function a() {
                _classCallCheck2(this, a);
            };
            e.init = function () {
                r && r.init();
                for (var _e in r) {
                    var _n = r[_e];
                    null != _n && "function" == typeof _n && (o.indexOf(_e) >= 0 ? t[_e] = r[_e] : a[_e] = r[_e]);
                }
                var _loop = function _loop(_e2, _r) {
                    var r = n[_e2];
                    if (null == a[r]) switch (r) {
                        default:
                            a[r] = function () {
                                return zs.log.debug("Sync方法 " + r + " 在当前平台不存在", "Platform"), null;
                            };
                    }
                };
                for (var _e2 = 0, _r = n.length; _e2 < _r; _e2++) {
                    _loop(_e2, _r);
                }
                var _loop2 = function _loop2(_e3, _r2) {
                    var r = o[_e3];
                    if (null == t[r]) switch (r) {
                        case "playVideo":
                            t[r] = function () {
                                return new Promise(function (e, n) {
                                    zs.log.debug("Async方法 " + r + " 在当前平台不存在", "Platform"), e(!0);
                                });
                            };
                            break;

                        default:
                            t[r] = function () {
                                return new Promise(function (e, n) {
                                    zs.log.debug("Async方法 " + r + " 在当前平台不存在", "Platform"), n();
                                });
                            };
                    }
                };
                for (var _e3 = 0, _r2 = o.length; _e3 < _r2; _e3++) {
                    _loop2(_e3, _r2);
                }
            }, e.initAds = function (e) {
                r && r.initAds(e);
            }, e.proxy = r, e.async = t, e.sync = a;
        }(window.zs.platform = window.zs.platform || {});
}()