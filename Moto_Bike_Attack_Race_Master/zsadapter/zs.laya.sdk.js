window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, s) {
    "use strict";
    class i {
        constructor() {
            this.sdkService = null;
        }
        static initSDK() {
            this.sdkService = window.zsSdk, this.sdkService && this.sdkService.init();
        }
        static destroySDK() {
            this.sdkService = null;
        }
        static login(e, s) {
            this.sdkService ? this.sdkService.login(e, s) : s && s.runWith({
                code: 1,
                desc: "web login"
            });
        }
        static loadSubpackage(e, s, i, t) {
            return !!this.sdkService && this.sdkService.loadSubpackage(e, s, i, t);
        }
        static initVideoAd(e) {
            this.sdkService && this.sdkService.initVideoAD && this.sdkService.initVideoAD(e);
        }
        static playVideo(e, t, r) {
            this.sdkService ? (s.stage.event(i.EVENT_AD_VIDEO_PLAY), this.sdkService.playVideo(s.Handler.create(null, function() {
                s.stage.event(i.EVENT_AD_VIDEO_CLOSED), e && e.run();
            }, null, !1), s.Handler.create(null, function() {
                s.stage.event(i.EVENT_AD_VIDEO_CLOSED), t && t.run();
            }, null, !1), s.Handler.create(null, function(e) {
                s.stage.event(i.EVENT_AD_VIDEO_CLOSED), r && r.runWith(e);
            }, null, !1))) : e && e.run();
        }
        static isVideoEnable() {
            return !!this.sdkService && this.sdkService.isVideoEnable();
        }
        static createUserInfoButton(e, s) {
            this.sdkService ? this.sdkService.createUserInfoButton(e, s) : s && s.runWith(null);
        }
        static hideUserInfoButton() {
            this.sdkService && this.sdkService.hideUserInfoButton();
        }
        static showUserInfoButton() {
            this.sdkService && this.sdkService.showUserInfoButton();
        }
        static destroyUserInfoButton() {
            this.sdkService && this.sdkService.destroyUserInfoButton();
        }
        static openShare(e, s) {
            this.sdkService ? this.sdkService.openShare(e, s) : console.log("share:" + e + ",img:" + s);
        }
        static initInsertAd(e, s) {
            this.sdkService && (this.sdkService.initInsertAd ? this.sdkService.initInsertAd(e, s) : this.sdkService.initFullScreenAD && this.sdkService.initFullScreenAD(e, s));
        }
        static loadInsertAd(e, s) {
            this.sdkService ? this.sdkService.loadInsertAd ? this.sdkService.loadInsertAd(e, s) : this.sdkService.loadFullScreenAD && this.sdkService.loadFullScreenAD(e, s) : s && s.runWith("null");
        }
        static showInsertAd(e) {
            this.sdkService ? this.sdkService.showInsertAd ? this.sdkService.showInsertAd(e) : this.sdkService.loadFullScreenAD && this.sdkService.showFullScreenAD(e) : (e && e.runWith("not in wx"), 
            console.log("showFullScreenAD:" + Date.now()));
        }
        static setUserCloudStorage(e, s, i, t) {
            if (this.sdkService) return this.sdkService.setUserCloudStorage(e, s, i, t);
            s && s.runWith(null);
        }
        static playSound(e, i, t) {
            this.sdkService ? this.sdkService.playSound(e, i, t) : s.SoundManager.playSound(e, i ? 0 : 1, t);
        }
        static stopSound(e) {
            this.sdkService ? this.sdkService.stopSound(e) : s.SoundManager.stopSound(e);
        }
    }
    i.sdkService = null, i.EVENT_AD_VIDEO_PLAY = "EVENT_AD_VIDEO_PLAY", i.EVENT_AD_VIDEO_CLOSED = "EVENT_AD_VIDEO_CLOSED", 
    s.ILaya.regClass(i), s.ClassUtils.regClass("zs.laya.sdk.SdkService", i), s.ClassUtils.regClass("Zhise.SdkService", i), 
    e.SdkService = i;
}(window.zs.laya.sdk = window.zs.laya.sdk || {}, Laya);