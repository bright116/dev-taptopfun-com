window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, s) {
    "use strict";
    class r {
        constructor(e, s) {
            this.initData(), this.adUnitId = e, this.adIntervals = s, this.canShowBannerAd = this.isCanShowBannerAd();
        }
        initData() {
            this.baseSize = {
                w: 750,
                h: 1334
            }, this.bannerAd = null, this.adUnitId = null, this.showType = r.BOTTOM_RIGHT, this.showMode = r.MODE_BOTTOM_TOUCH, 
            this.exposureSize = {
                w: 1,
                h: 1
            }, this.errorReLoadTimes = 3, this.reLoadDelay = 500, this.realSize = {
                w: 1,
                h: 1
            }, this.showTimes = 0, this.showExposureTimes = 0, this.preStyle = {
                left: 0,
                top: 0,
                width: 1,
                height: 1
            };
        }
        setBaseSize(e, s) {
            this.baseSize.w = e, this.baseSize.h = s;
        }
        setShowType(e) {
            this.showType = e;
        }
        setShowMode(e) {
            this.showMode = e;
        }
        setExposureSize(e, s) {
            this.exposureSize.w = e, this.exposureSize.h = s;
        }
        setBannerRect(e, s, r, t) {
            this.preStyle.top = e, this.preStyle.left = s, this.preStyle.width = r, this.preStyle.height = t;
        }
        createBanner() {
            if (this.canShowBannerAd) {
                var e = window.screen.availHeight, s = window.screen.availWidth / this.baseSize.w, r = e / this.baseSize.h, t = this.preStyle.top * r, i = this.preStyle.height * r, n = this.preStyle.left * s, h = this.preStyle.width * s;
                if (console.log("=============createBanner start...:=============", this.adUnitId, t, n, h), 
                null == this.bannerAd && (this.bannerAd = wx.createBannerAd({
                    adUnitId: this.adUnitId,
                    adIntervals: this.adIntervals,
                    style: {
                        left: n,
                        top: t,
                        width: h,
                        height: i
                    }
                })), !this.bannerAd) return console.error("Banner 创建失败!", this.bannerAd), void (this.errorReLoadTimes > 0 && (this.errorReLoadTimes--, 
                setTimeout(function() {
                    this.createBanner();
                }, this.reLoadDelay)));
                this.showTimes = 0, this.showExposureTimes = 0, this.bannerAd.onError(function(e) {
                    console.error("Banner err:", e), this.errorReLoadTimes > 0 && (this.errorReLoadTimes--, 
                    setTimeout(function() {
                        this.createBanner();
                    }, this.reLoadDelay));
                }), this.bannerAd.onResize(this.onResize.bind(this));
            }
        }
        onResize(e) {
            switch (this.realSize = {
                w: e.width,
                h: e.height
            }, this.showMode) {
              case r.MODE_NONE:
                this.updatePosition();
                break;

              case r.MODE_EXPOSURE:
                this.updateExposure();
                break;

              case r.MODE_BOTTOM_TOUCH:
                this.updateBottonTouch();
            }
        }
        getOffsetY() {
            return 750 * window.screen.availHeight > 1600 * window.screen.availWidth ? 15 * window.screen.availHeight * 750 / 1600 / window.screen.availWidth : 0;
        }
        show() {
            null != this.adUnitId && (null == this.bannerAd && this.createBanner(), this.showMode = r.MODE_BOTTOM_TOUCH, 
            this.bannerAd && this.bannerAd.show(), this.showTimes++);
        }
        updateBottonTouch() {
            this.bannerAd && this.realSize && (this.bannerAd.style.left = .5 * (window.screen.availWidth - this.realSize.w), 
            this.bannerAd.style.top = window.screen.availHeight - this.realSize.h - this.getOffsetY());
        }
        updatePosition() {
            this.bannerAd && this.realSize && (this.bannerAd.style.left = .5 * (window.screen.availWidth - this.realSize.w), 
            this.bannerAd.style.top = window.screen.availHeight - this.realSize.h);
        }
        updateExposure() {
            if (this.bannerAd && this.realSize) {
                var e = this.bannerAd.style.left, s = this.bannerAd.style.top;
                switch (this.showType) {
                  case r.TOP_LEFT:
                    e = -this.realSize.w + this.exposureSize.w, s = -this.realSize.h + this.exposureSize.h;
                    break;

                  case r.TOP_RIGHT:
                    e = window.screen.availWidth - this.exposureSize.w, s = -this.realSize.h + this.exposureSize.h;
                    break;

                  case r.BOTTOM_LEFT:
                    e = -this.realSize.w + this.exposureSize.w, s = window.screen.availHeight - this.exposureSize.h;
                    break;

                  case r.BOTTOM_RIGHT:
                    e = window.screen.availWidth - this.exposureSize.w, s = window.screen.availHeight - this.exposureSize.h;
                }
                e != this.bannerAd.style.left && (this.bannerAd.style.left = e), s != this.bannerAd.style.top && (this.bannerAd.style.top = s), 
                console.log("更新曝光广告位置：", e, s);
            }
        }
        showExposure(e, s, t) {
            null != this.adUnitId && (null == this.bannerAd && (console.log("更新广告不存在！重新创建！"), 
            this.createBanner()), this.bannerAd && (this.showType = e || e == r.NONE ? e : this.showType, 
            this.showMode = r.MODE_EXPOSURE, this.exposureSize.w = s || 0 == s ? s : this.exposureSize.w, 
            this.exposureSize.h = t || 0 == t ? t : this.exposureSize.h, this.updateExposure(), 
            this.bannerAd && this.bannerAd.show(), this.showExposureTimes++, console.log("显示曝光广告！")));
        }
        compareVersion(e, s) {
            e = e.split("."), s = s.split(".");
            for (var r = Math.max(e.length, s.length); e.length < r; ) e.push("0");
            for (;s.length < r; ) s.push("0");
            for (var t = 0; t < r; t++) {
                var i = parseInt(e[t]), n = parseInt(s[t]);
                if (i > n) return 1;
                if (i < n) return -1;
            }
            return 0;
        }
        hide() {
            this.bannerAd && this.bannerAd.hide();
        }
        isCanShowBannerAd() {
            var e = !1;
            if (window.wx) {
                var s = wx.getSystemInfoSync().SDKVersion;
                -1 == this.compareVersion(s, "2.0.4") ? console.log("=====版本不够2.0.4，视频广告不能用") : e = !0;
            }
            return e;
        }
        updateY(e) {
            if (this.bannerAd && this.realSize) {
                var r = .5 * this.realSize.h, t = window.screen.availHeight / s.stage.height;
                this.bannerAd.style.top = e * t - r, this.bannerAd.style.left = .5 * (window.screen.availWidth - this.realSize.w), 
                console.log("更新广告Y坐标:", e);
            } else console.log("更新广告不存在！");
        }
        destroy() {
            this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null;
        }
    }
    r.NONE = 0, r.HCENTER = 1, r.VCENTER = 2, r.LEFT = 4, r.RIGHT = 8, r.TOP = 16, r.TOP_LEFT = 20, 
    r.TOP_RIGHT = 24, r.TOP_HCENTER = 17, r.VCENTER_LEFT = 6, r.VCENTER_RIGHT = 10, 
    r.VCENTER_HCENTER = 3, r.BOTTOM_LEFT = 36, r.BOTTOM_RIGHT = 40, r.BOTTEOM_HCENTER = 33, 
    r.MODE_NONE = 0, r.MODE_EXPOSURE = 1, r.MODE_BOTTOM_TOUCH = 2;
    class t {
        constructor(e, s) {
            this.initData(), this.bannerArray = e, this.autoChange = s, this.bannerIds = [];
            for (var r = 0; r < e.length; r++) this.bannerIds[r] = r;
            this.curShowId = zs.laya.MiscUtils.random(0, this.bannerArray.length), this.isChanged = !0;
        }
        initData() {
            this.bannerArray = [], this.autoChange = !1, this.curShowId = -1, this.bannerIds = [], 
            this.exposureType = [], this.showExposureIds = [], this.isChanged = !1, this.isLockHide = !1, 
            this.showCountRefresh = zs.laya.platform.ADConfig.zs_banner_show_number;
        }
        onAppShow() {
            console.log("======================== onAppShow start ========================================="), 
            s.stage.off(zs.laya.platform.PlatformMgr.APP_SHOW, this, this.onAppShow), this.show(), 
            console.log("======================== onAppShow end =========================================");
        }
        onAppHide() {
            if (console.log("======================== onAppHide start ========================================="), 
            !(this.curShowId >= this.bannerArray.length)) {
                s.stage.off(zs.laya.platform.PlatformMgr.APP_HIDE, this, this.onAppHide), s.stage.on(zs.laya.platform.PlatformMgr.APP_SHOW, this, this.onAppShow);
                var e = this.bannerArray[this.curShowId];
                e.destroy(), e.createBanner(), this.isChanged = !1, this.curShowBanner = null, console.log("======================== onAppHide end =========================================");
            }
        }
        lockHide() {
            this.isLockHide = !0, this.curShowBanner && (this.hide(), this.getCurrentShowBanner());
        }
        hideResume() {
            this.isLockHide = !1, this.curShowBanner && (this.updateBottonTouch(), this.show());
        }
        lockHideExposure() {
            for (var e = 0; e < this.showExposureIds.length; e++) {
                const r = this.showExposureIds[e];
                var s = this.bannerArray[r];
                s && s.hide();
            }
        }
        hideResumeExposure() {
            for (var e = 0; e < this.showExposureIds.length; e++) {
                const r = this.showExposureIds[e];
                var s = this.bannerArray[r];
                s && s.showExposure(this.exposureType[e]);
            }
        }
        getCurrentShowBanner() {
            return this.curShowId >= this.bannerArray.length ? null : this.curShowBanner ? this.curShowBanner : (this.autoChange && !this.isChanged && this.changeBanner(), 
            this.curShowBanner = this.bannerArray[this.curShowId]);
        }
        changeBanner() {
            this.isChanged = !0;
            var e = this.curShowId;
            this.curShowId = (this.curShowId + 1) % this.bannerArray.length, this.bannerArray[this.curShowId] && this.bannerArray[this.curShowId].updateBottonTouch(), 
            this.bannerArray[this.curShowId] && this.bannerArray[this.curShowId].hide();
            var s = this.showExposureIds.indexOf(this.curShowId);
            if (-1 != s) if (e != this.curShowId) {
                this.showExposureIds[s] = e;
                var r = this.bannerArray[e];
                r && r.showExposure(this.exposureType[s]);
            } else this.showExposureIds.splice(s, 1), this.exposureType.slice(s, 1);
        }
        show() {
            var e = this.getCurrentShowBanner();
            e && !this.isLockHide && (s.stage.on(zs.laya.platform.PlatformMgr.APP_HIDE, this, this.onAppHide), 
            e.show());
        }
        updateY(e) {
            var s = this.getCurrentShowBanner();
            s && s.updateY(e);
        }
        updateBottonTouch() {
            var e = this.getCurrentShowBanner();
            e && (e ? e.updateBottonTouch() : console.log("======================== updateBottonTouch is error ========================================="));
        }
        showExposure(e) {
            console.log("======================== wxbannerGroup showExposure", e, "start=========================================");
            var s = this.bannerIds.concat();
            this.curShowBanner && this.remove(s, this.curShowId);
            for (var r = 0; r < this.showExposureIds.length; r++) {
                const e = this.showExposureIds[r];
                this.remove(s, e);
            }
            if (s.length > 0) {
                var t = s[zs.laya.MiscUtils.random(0, s.length)], i = this.showExposureIds.length;
                this.showExposureIds[i] = t, this.exposureType[i] = e;
                var n = this.bannerArray[t];
                n ? n.showExposure(e) : console.error("======================== wxbannerGroup showExposure wxBanner  is error", t, this.bannerIds, s, e, "end=========================================");
            }
            console.log("======================== wxbannerGroup showExposure", e, "end=========================================");
        }
        remove(e, s) {
            var r = e.indexOf(s);
            -1 != r && e.splice(r, 1);
        }
        hide() {
            if (s.stage.off(zs.laya.platform.PlatformMgr.APP_HIDE, this, this.onAppHide), s.stage.off(zs.laya.platform.PlatformMgr.APP_SHOW, this, this.onAppShow), 
            !(this.curShowId >= this.bannerArray.length)) {
                var e = this.bannerArray[this.curShowId];
                e && e.hide(), this.isChanged = !1, this.curShowBanner = null;
            }
        }
        hideExposure() {
            if (this.showExposureIds || 0 != this.showExposureIds.length) {
                for (var e = 0; e < this.showExposureIds.length; e++) {
                    const r = this.showExposureIds[e];
                    var s = this.bannerArray[r];
                    s && s.hide();
                }
                this.showExposureIds = [], this.exposureType = [];
            } else console.log("not have exposure banner is show!");
        }
        hideAll() {
            this.hide(), this.hideExposure();
        }
        destroy() {
            for (var e = 0; e < this.bannerArray.length; e++) {
                const s = this.bannerArray[e];
                s && s.destroy();
            }
            this.curShowBanner = null;
        }
    }
    class i {
        constructor() {
            this.bannerAdExposureList = [], this.adUnitIdData = [], this.wxbannerArray = [], 
            this.bannerIds = [], this.bannerGroupArray = [];
        }
        setAdUnitId(...e) {
            this.adUnitIdData = [];
            for (var s = 0; s < e.length; s++) e[s] && (this.adUnitIdData[s] = {
                adUnitId: e[s]
            });
        }
        initBannerGroupBySign(e, s, i = !1, n = !1) {
            if (e = Number(e), this.bannerGroupArray[e]) {
                console.log("=============banner 组已经存在！===========");
                var h = this.bannerGroupArray[e].getCurrentShowBanner();
                if (!h) return;
                h.showTimes >= this.bannerGroupArray[e].showCountRefresh && (h.destroy(), h.createBanner(), 
                console.log("次数到了，刷新"));
            } else {
                if (s = s || this.bannerIds.length, s = this.adUnitIdData.length <= 1 ? this.adUnitIdData.length : s, 
                n || this.bannerIds.length < s) {
                    this.bannerIds = [];
                    for (var a = 0; a < this.adUnitIdData.length; a++) this.bannerIds[a] = a;
                }
                var o = [];
                for (a = 0; a < s; a++) {
                    var d = this.bannerIds.splice(zs.laya.MiscUtils.random(0, this.bannerIds.length), 1)[0];
                    o[a] = new r(this.adUnitIdData[d].adUnitId), o[a].createBanner();
                }
                console.log("创建Banner组", e), this.bannerGroupArray[e] = new t(o, i);
            }
        }
        lockHide() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.lockHide();
            }
        }
        hideResume() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.hideResume();
            }
        }
        lockHideExposure() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.lockHideExposure();
            }
        }
        hideResumeExposure() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.hideResumeExposure();
            }
        }
        getBannerGroup(e) {
            var s = this.bannerGroupArray[e];
            return s || console.error("bannerGroup is error", s), this.bannerGroupArray[e];
        }
        hideBySign(...e) {
            for (var s = 0; s < e.length; s++) {
                var r = this.bannerGroupArray[e[s]];
                r && r.hide();
            }
        }
        hideExposureBySign(...e) {
            for (var s = 0; s < e.length; s++) {
                var r = this.bannerGroupArray[e[s]];
                r && r.hideExposure();
            }
        }
        hideAllBySign(...e) {
            for (var s = 0; s < e.length; s++) {
                var r = this.bannerGroupArray[e[s]];
                r && r.hideAll();
            }
        }
        hideAllShow() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.hide();
            }
        }
        hideAll() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.hideAll();
            }
        }
        destoryAll() {
            for (var e = this.bannerGroupArray.length - 1; e >= 0; e--) {
                var s = this.bannerGroupArray[e];
                s && s.destroy();
            }
        }
    }
    i.Instance = new i(), e.WxBanner = r, e.WxBannerGroup = t, e.WxBannerMgr = i;
}(window.zs.laya.banner = window.zs.laya.banner || {}, Laya);