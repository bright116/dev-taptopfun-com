window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, i) {
    "use strict";
    class s {
        constructor() {
            this._instance = null;
        }
        static initSDK() {
            this._instance = window.zsSdk, this._instance && this._instance.init();
        }
        static destroySDK() {
            this._instance = null;
        }
        static login(t, i) {
            this._instance ? this._instance.login(t, i) : i && i.runWith({
                code: 1,
                desc: "web login"
            });
        }
        static loadSubpackage(t, i, s, e) {
            return this._instance ? this._instance.loadSubpackage(t, i, s, e) : (s && s.run(), 
            !1);
        }
        static initVideoAd(t) {
            this._instance && this._instance.initVideoAD && this._instance.initVideoAD(t);
        }
        static playVideo(t, e, a) {
            this._instance ? (i.stage.event(s.EVENT_AD_VIDEO_PLAY), this._instance.playVideo(i.Handler.create(null, function() {
                i.stage.event(s.EVENT_AD_VIDEO_CLOSED), t && t.run(), n.statisticsGDT(2);
            }, null, !1), i.Handler.create(null, function() {
                i.stage.event(s.EVENT_AD_VIDEO_CLOSED), e && e.run();
            }, null, !1), i.Handler.create(null, function(t) {
                i.stage.event(s.EVENT_AD_VIDEO_CLOSED), a && a.runWith(t);
            }, null, !1))) : t && t.run();
        }
        static isVideoEnable() {
            return !!this._instance && this._instance.isVideoEnable();
        }
        static createUserInfoButton(t, i) {
            this._instance ? this._instance.createUserInfoButton(t, i) : i && i.runWith(null);
        }
        static hideUserInfoButton() {
            this._instance && this._instance.hideUserInfoButton();
        }
        static showUserInfoButton() {
            this._instance && this._instance.showUserInfoButton();
        }
        static destroyUserInfoButton() {
            this._instance && this._instance.destroyUserInfoButton();
        }
        static openShare(t, i) {
            this._instance ? this._instance.openShare(t, i) : console.log("share:" + t + ",img:" + i);
        }
        static initInsertAd(t, i) {
            this._instance && (this._instance.initInsertAd ? this._instance.initInsertAd(t, i) : this._instance.initFullScreenAD && this._instance.initFullScreenAD(t, i));
        }
        static loadInsertAd(t, i) {
            this._instance ? this._instance.loadInsertAd ? this._instance.loadInsertAd(t, i) : this._instance.loadFullScreenAD && this._instance.loadFullScreenAD(t, i) : i && i.runWith("null");
        }
        static showInsertAd(t) {
            this._instance ? this._instance.showInsertAd ? this._instance.showInsertAd(t) : this._instance.showFullScreenAD && this._instance.showFullScreenAD(t) : (t && t.runWith("not in wx"), 
            console.log("showFullScreenAD:" + Date.now()));
        }
        static setUserCloudStorage(t, i, s, e) {
            if (this._instance) return this._instance.setUserCloudStorage(t, i, s, e);
            i && i.runWith(null);
        }
        static playSound(t, s, e) {
            this._instance ? this._instance.playSound(t, s, e) : i.SoundManager.playSound(t, s ? 0 : 1, e);
        }
        static stopSound(t) {
            this._instance ? this._instance.stopSound(t) : i.SoundManager.stopSound(t);
        }
        static pauseSound(t) {
            this._instance ? this._instance.pauseSound(t) : i.SoundManager.stopSound(t);
        }
        static recordClip(t, i) {
            this._instance && this._instance.recordClip(t, i);
        }
        static startRecorder() {
            this._instance && this._instance.startRecorder();
        }
        static stopRecorder() {
            this._instance && this._instance.stopRecorder();
        }
        static pauseRecorder() {
            this._instance && this._instance.pauseRecorder();
        }
        static resumeRecorder() {
            this._instance && this._instance.resumeRecorder();
        }
        static createRecorderShareButton(t) {
            this._instance && this._instance.createRecorderShareButton(t);
        }
        static hideRecorderShareButton() {
            this._instance && this._instance.hideRecorderShareButton();
        }
        static canShareRecorder() {
            return !!this._instance && this._instance.canShareRecorder();
        }
        static initCustomeAd(t, i, s, e, n, a, c) {
            this._instance && this._instance.initCustomeAd(t, i, s, e, n, a, c);
        }
        static checkCustomAd(t, i, s, e, n, a, c, o, r, d, h) {
            this._instance && this._instance.checkCustomAd(t, i, s, e, n, a, c, o, r, d, h);
        }
        static hideCustomAd() {
            this._instance && this._instance.hideCustomAd();
        }
    }
    s._instance = null, s.EVENT_AD_VIDEO_PLAY = "EVENT_AD_VIDEO_PLAY", s.EVENT_AD_VIDEO_CLOSED = "EVENT_AD_VIDEO_CLOSED", 
    i.ILaya.regClass(s), i.ClassUtils.regClass("zs.laya.sdk.SdkService", s), i.ClassUtils.regClass("Zhise.SdkService", s);
    class e {
        constructor() {}
        static initDevice() {
            e.device = window.zsDevice, e.device && (e.device.init(), e.device.onShow(i.Handler.create(null, function(t) {
                i.stage.event(e.EVENT_ON_SHOW, t);
            }, null, !1)), e.device.onHide(i.Handler.create(null, function() {
                i.stage.event(e.EVENT_ON_HIDE);
            }, null, !1)));
        }
        static statusBarHeight() {
            return this.device ? this.device.statusBarHeight() : 0;
        }
        static screenWidth() {
            return this.device ? this.device.screenWidth() : i.stage.width;
        }
        static screenHeight() {
            return this.device ? this.device.screenHeight() : i.stage.height;
        }
        static VibrateShort() {
            this.device ? this.device.vibrateShort() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(500) : console.log("vibrateShort");
        }
        static VibrateLong() {
            this.device ? this.device.vibrateLong() : "undefined" != typeof navigator && "vibrate" in navigator ? navigator.vibrate(1e3) : console.log("VibrateLong");
        }
        static IsNetValid() {
            return this.device ? this.device.isNetValid() : navigator.onLine;
        }
    }
    e.device = null, e.EVENT_ON_RESUME = "DEVICE_ON_RESUME", e.EVENT_ON_HIDE = "DEVICE_ON_HIDE", 
    e.EVENT_ON_SHOW = "DEVICE_ON_SHOW", i.ILaya.regClass(e), i.ClassUtils.regClass("zs.laya.sdk.DeviceService", e), 
    i.ClassUtils.regClass("Zhise.DeviceService", e);
    class n {
        constructor() {}
        static loadConfig(t, i) {
            this.Instance.loadConfig(t, i);
        }
        static init(t, i) {
            this.Instance.init(t, i);
        }
        static sendVideoLog() {
            this.Instance.sendVideoLog();
        }
        static loadAd(t) {
            this.Instance.loadAd(t);
        }
        static navigate2Mini(t, i, s, e, n, a) {
            this.Instance.navigate2Mini(t, i, s, e, n, a);
        }
        static statisticsGDT(t) {
            this.Instance.statisticsGDT(t);
        }
        static get Instance() {
            return this.initialized || (this.initialized = !0, zs.reportSdk ? this.instance = zs.reportSdk : this.instance = {
                loadConfig: function(t, i) {
                    i && i(), console.log("zs.sdk is undefined");
                },
                init: function(t, i) {
                    console.log("zs.sdk.init"), console.log("zs.sdk is undefined");
                },
                sendVideoLog: function() {
                    console.log("zs.sdk.sendVideoLog"), console.log("zs.sdk is undefined");
                },
                loadAd: function(t) {
                    t && t({
                        promotion: [],
                        indexLeft: [],
                        endPage: [],
                        backAd: []
                    }), console.log("zs.sdk is undefined");
                },
                navigate2Mini: function(t, i, s, e, n) {
                    e && e(), n && n(), console.log("zs.sdk is undefined");
                },
                statisticsGDT: function(t) {
                    console.log("zs.sdk.statisticsGDT"), console.log("zs.sdk is undefined");
                }
            }), this.instance;
        }
    }
    n.instance = null, n.initialized = !1, i.ClassUtils.regClass("zs.laya.sdk.ZSReportSdk", n), 
    t.SdkService = s, t.DeviceService = e, t.ZSReportSdk = n;
}(window.zs.laya.sdk = window.zs.laya.sdk || {}, Laya);