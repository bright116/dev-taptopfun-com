var _interopRequireDefault = require("../../@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("../../@babel/runtime/helpers/classCallCheck"));

window.zs = window.zs || {}, window.zs.platform = window.zs.platform || {},
    function (e) {
        var o = window.platform0,
            t = ["share", "userInfoHide", "userInfoShow", "userInfoDestroy", "initVideo", "isVideoEnable", "initInsert", "loadInsert", "createBanner", "initBanner", "checkBanner", "clearDelayBanner", "showBanner", "updateBanner", "hideBanner", "recorderStart", "recorderStop", "recorderPause", "recorderResume", "recorderCreate", "recorderHide", "canShareRecorder", "statusBarHeight", "screenWidth", "screenHeight", "vibrate", "isNetValid", "addEventShow", "addEventHide", "recorderClip", "recorderShare", "showFavoriteGuide", "setDefaultShare", "updateReviveTypeInfo", "setNativeLastShowTime", "initNativeAd", "sendReqAdShowReport", "sendReqAdClickReport", "initGamePortalAd", "showToast", "getLaunchOptions", "getScene", "showInsertAd", "initBannerId", "showOnePixelBanner", "showShareMenu", "openShare", "getReadSetting", "playSound", "initAppBox", "showAppBox", "checkBlockAd", "showBlockAd", "hideBlockAd", "destroyInsertAd", "pauseSound", "getAdPos"], n = ["login", "getLoginParams", "request", "playVideo", "setCloudStorage", "getCloudStorage", "userInfoCreate", "navigateToOther", "loadSubpackage", "getUserInfo", "openAwemeUserProfile", "checkFollowAwemeState", "loadNativeAd", "isBeforeGameAccount", "getAdReporteStatus", "showGamePortalAd", "hasDesktopIcon", "createDesktopIcon", "getNetworkType", "shareRecorderVideo", "showMoreGamesModalSimple"];
        var r = function r() {
            (0, _classCallCheck2.default)(this, r);
        };
        var a = function a() {
            (0, _classCallCheck2.default)(this, a);
        };
        e.init = function () {
            o && o.init();
            for (var _e in o) {
                var _t = o[_e];
                null != _t && "function" == typeof _t && (n.indexOf(_e) >= 0 ? r[_e] = o[_e] : a[_e] = o[_e]);
            }
            var _loop = function _loop(_e2, _o) {
                var o = t[_e2];
                null == a[o] && (a[o] = function () {
                    return zs.log.debug("Sync方法 " + o + " 在当前平台不存在", "Platform"), null;
                });
            };
            for (var _e2 = 0, _o = t.length; _e2 < _o; _e2++) {
                _loop(_e2, _o);
            }
            var _loop2 = function _loop2(_e3, _o2) {
                var o = n[_e3];
                null == r[o] && (r[o] = function () {
                    return new Promise(function (e, t) {
                        zs.log.debug("Async方法 " + o + " 在当前平台不存在", "Platform"), t();
                    });
                });
            };
            for (var _e3 = 0, _o2 = n.length; _e3 < _o2; _e3++) {
                _loop2(_e3, _o2);
            }
        }, e.initAds = function () {
            o && o.initAds();
        }, e.proxy = o, e.async = r, e.sync = a;
    }(window.zs.platform = window.zs.platform || {});