window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, t) {
    "use strict";
    class i {
        constructor(e, i, n, s, a) {
            this.adUnitId = e, this.isLoad = !1, this.isShow = !1, this.showEd = !1, this.isWait = i, 
            this.left = n ? n * window.screen.availWidth / t.stage.width : 0, this.bottom = s ? s * window.screen.availHeight / t.stage.height : 0, 
            this.loadFunc = a, this.initBanner();
            var r = this;
            this.loadTime = setTimeout(function() {
                console.log("加载超时"), r.destroy();
            }, 1e4), this.showTime = "";
        }
        initBanner() {
            if (window.wx && window.wx.createBannerAd) {
                console.log("进入banner初始化" + this.adUnitId);
                var e = this;
                null == this.bannerAd && (this.bannerAd = wx.createBannerAd({
                    adUnitId: e.adUnitId,
                    style: {
                        left: 0,
                        top: window.screen.availHeight - 150,
                        width: 300
                    }
                })), this.bannerAd ? (this.bannerAd.onLoad(function() {
                    e.isLoad = !0, e.loadTime && clearTimeout(e.loadTime), e.loadFunc && e.loadFunc(), 
                    e.isWait || e.show();
                }), this.bannerAd.onError(function(t) {
                    console.error("Banner err:", t), n.Instance.inErr(), e.destroy();
                }), this.bannerAd.onResize(this.onResize.bind(this))) : console.error("Banner 创建失败???环境？");
            } else console.log("环境异常,无法创建");
        }
        onResize(e) {
            this.realSize = {
                w: e.width,
                h: e.height
            };
        }
        getOffsetY() {
            return 750 * window.screen.availHeight > 1600 * window.screen.availWidth ? 15 * window.screen.availHeight * 750 / 1600 / window.screen.availWidth : 0;
        }
        show(e) {
            if (null != this.bannerAd && this.isLoad) {
                this.isShow = !0;
                var t = this;
                e ? this.updateTouchPos() : this.updatePosition(), this.bannerAd.show().then(function() {
                    var e = zs.laya.platform.ADConfig.zs_full_screen_banner_time ? 1e3 * zs.laya.platform.ADConfig.zs_full_screen_banner_time : 0;
                    t.showTime = setTimeout(function() {
                        t.showEd = !0;
                    }, Math.max(2e3, e));
                });
            }
        }
        updateTouchPos() {
            this.bannerAd && this.realSize && null != t.stage.mouseY && null != t.stage.mouseX && (this.bannerAd.style.top = t.stage.mouseY * window.screen.availHeight / t.stage.height - this.realSize.h / 2);
        }
        updatePosition() {
            this.bannerAd && this.realSize && (this.bannerAd.style.left = this.left ? this.left : (window.screen.availWidth - this.realSize.w) / 2, 
            this.bannerAd.style.top = window.screen.availHeight - this.realSize.h - this.bottom - this.getOffsetY() / 2);
        }
        hide() {
            this.isShow = !1, this.isWait = !0, this.bannerAd && this.bannerAd.hide(), this.showTime && clearTimeout(this.showTime);
        }
        destroy() {
            this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null, this.adUnitId = null, 
            this.isLoad = null, this.isShow = null, this.showEd = null, this.isWait = null, 
            this.left = null, this.bottom = null, this.loadTime = null, this.showTime && clearTimeout(this.showTime), 
            this.showTime = null;
        }
        updateY(e) {
            this.bannerAd && this.realSize && (this.bannerAd.style.top = e * window.screen.availHeight / t.stage.height);
        }
        updateX(e) {
            this.bannerAd && this.realSize && (this.bannerAd.style.left = e * window.screen.availWidth / t.stage.width);
        }
    }
    class n {
        constructor() {
            this.wxbannerArray = [], this.bannerIds = [], this.isWait = !1, this.left = 0, this.bottom = 0, 
            this.lastFreshTime = 0, this.length = 0, this.inErrTime = !1, this.errTimer = null, 
            this.createNum = 0;
            var e = this;
            setInterval(function() {
                let t = new Date().getTime();
                !e.isWait && e.lastFreshTime && zs.laya.platform.ADConfig.zs_banner_refresh_time && t - e.lastFreshTime > zs.laya.platform.ADConfig.zs_banner_refresh_time && (console.log("自动刷新"), 
                e.updateBanner(e.isWait, e.left, e.bottom, e.length));
            }, 1e3);
        }
        inErr() {
            this.errTimer && clearTimeout(this.errTimer), this.inErrTime = !0;
            var e = this;
            this.errTimer = setTimeout(function() {
                e.inErrTime = !1;
            }, 3e4);
        }
        setAdUnitId(...e) {
            this.bannerIds = e, this.checkNull();
        }
        checkNull() {
            this.bannerIds || (this.bannerIds = []);
            for (let e = this.bannerIds.length - 1; e >= 0; e--) this.bannerIds[e] && this.bannerIds[e].length || this.bannerIds.splice(e, 1);
        }
        updateBanner(e, t, i, n) {

        }
        createBanner() {
            if (this.inErrTime && console.log("处于报错状态取消创建"), !this.createNum || this.createNum <= 0 || this.inErrTime) return;
            let e = new i(this.bannerIds[Math.floor(Math.random() * this.bannerIds.length)], this.isWait, this.left, this.bottom, this.createBanner);
            this.wxbannerArray.push(e), this.createNum--;
        }
        showBanner(e, t, i) {
            var n = 0;
            i = i ? Math.min(this.bannerIds.length, i) : 1;
            for (let s = 0; s < this.wxbannerArray.length; s++) {
                let a = this.wxbannerArray[s];
                if (a.isLoad && !a.showEd && !a.isShow && (a.left = e || 0, a.bottom = t || 0, a.show(), 
                ++n >= i)) return;
            }
            for (let i = 0; i < this.wxbannerArray.length; i++) {
                let n = this.wxbannerArray[i];
                if (n.isLoad && !n.isShow) return n.left = e || 0, n.bottom = t || 0, void n.show();
            }
            console.log("不存在加载完并且没有正在展示的banner");
        }
        toTouch() {
            let e = 0;
            for (let t = 0; t < this.wxbannerArray.length; t++) {
                let i = this.wxbannerArray[t];
                i.isLoad && i.isShow && (i.updateTouchPos(), e++);
            }
            0 == e && console.log("没有正在展示的banner");
        }
        updatePos() {
            let e = 0;
            for (let t = 0; t < this.wxbannerArray.length; t++) {
                let i = this.wxbannerArray[t];
                i.isLoad && i.isShow && (i.updatePosition(), e++);
            }
            0 == e && console.log("没有正在展示的banner");
        }
        hideAll() {
            for (let e = 0; e < this.wxbannerArray.length; e++) {
                this.wxbannerArray[e].hide();
            }
            this.isWait = !0;
        }
    }
    n.Instance = new n(), e.WxBanner = i, e.WxBannerMgr = n;
}(window.zs.laya.banner = window.zs.laya.banner || {}, Laya);