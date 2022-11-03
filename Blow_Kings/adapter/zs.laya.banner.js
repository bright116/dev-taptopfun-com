window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, n) {
    "use strict";
    class i {
        constructor(e, n, i, t, s) {
            this.adUnitId = e, this.isLoad = !1, this.isShow = !1, this.pos = n, this.size = i, 
            this.realSize = null, this.mgr = s, this.showLong = 0, this.empty = t, this.initBanner();
            var h = this;
            this.loadTime = setTimeout(function() {
                console.log("加载超时"), h.mgr.clearBanner(h.bannerIndex), h.inErr = !0;
            }, 1e4), this.showTime = new Date().getTime(), this.birthTime = 0, this.inErr = !1;
        }
        get liveTime() {
            return this.birthTime ? new Date().getTime() - this.birthTime : 0;
        }
        get showEd() {
            var e = Number(zs.laya.platform.ADConfig.zs_banner_show_number) || 0;
            return e = Math.max(e, 5e3), this.showLong > e;
        }
        initBanner() {
            if (window.wx && window.wx.createBannerAd) {
                console.log("进入banner初始化" + this.adUnitId);
                var e = this;
                if (null == this.bannerAd) {
                    var n = s(this.pos, this.realSize ? this.realSize.w : 300, this.realSize ? this.realSize.h : 104, this.empty);
                    this.bannerAd = wx.createBannerAd({
                        adUnitId: e.adUnitId,
                        style: {
                            left: n.left,
                            top: n.top,
                            width: 300
                        }
                    });
                }
                this.bannerAd ? (this.bannerAd.onLoad(function() {
                    e.mgr.noBanner = !1, e.isLoad = !0, e.loadTime && clearTimeout(e.loadTime), e.birthTime = new Date().getTime();
                }), this.bannerAd.onError(function(n) {
                    console.error("Banner err: " + e.bannerIndex, n), e.loadTime && clearTimeout(e.loadTime), 
                    e.mgr.clearBanner(e.bannerIndex), e.inErr = !0;
                }), this.bannerAd.onResize(this.onResize.bind(this))) : console.error("Banner 创建失败???环境？");
            } else console.log("环境异常,无法创建");
        }
        onResize(e) {
            this.realSize = {
                w: e.width,
                h: e.height
            };
        }
        show() {
            if (null != this.bannerAd && !this.inErr) {
                var e = this;
                this.isShow = !0, this.updateSize(), this.updatePosition(), this.bannerAd.show().then(() => {
                    console.warn("banner标号" + e.bannerIndex + "展示成功,当前已展示时间" + e.showLong), e.showTime = new Date().getTime();
                });
            }
        }
        updatePosition() {
            if (this.bannerAd && this.realSize) {
                var e = s(this.pos, this.realSize ? this.realSize.w : 300, this.realSize ? this.realSize.h : 104, this.empty);
                this.bannerAd.style.left = e.left, this.bannerAd.style.top = e.top;
            }
        }
        updateSize() {
            this.bannerAd && this.size && (null != this.size.width && (this.bannerAd.style.width = this.size.width), 
            null != this.size.height && (this.bannerAd.style.height = this.size.height));
        }
        hide() {
            this.bannerAd && this.bannerAd.hide(), this.showTime && (this.showLong += new Date().getTime() - this.showTime), 
            this.showTime = null, this.isShow && console.warn("banner标号" + this.bannerIndex + "调用隐藏,当前已展示时间" + this.showLong), 
            this.isShow = !1;
        }
        destroy() {
            this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null, this.adUnitId = null, 
            this.isLoad = null, this.isShow = null, this.loadTimer && clearTimeout(this.loadTimer), 
            this.pos = null, this.showLong = null, this.birthTime = null, this.loadTimer = null, 
            this.showTime = null, this.inErr = null;
        }
    }
    class t {
        static get Instance() {
            return null == this._inst && (this._inst = new t()), this._inst;
        }
        constructor() {
            this.wxbanner, this.emptyBanner, this.bannerIds = [], this.pos = {}, this.refreshTimer = null, 
            this.inErrTime = !1, this.noBanner = !1, this.errTimer = null, this.idIndex = 0;
        }
        setAdUnitId(...e) {
            let n = [];
            for (;e.length > 0; ) {
                let i = e.shift();
                null != i && "" != i && n.push(i);
            }
            n.sort((e, n) => Math.random() > .5), this.bannerIds = n, this.initBanner();
        }
        getBannerId() {
            var e, n = this.bannerIds.length;
            return n > 0 && (e = this.bannerIds[this.idIndex], this.idIndex += 1, this.idIndex >= n && (this.idIndex = 0)), 
            e;
        }
        clearBanner(e) {
            0 == e ? this.wxbanner && (this.wxbanner.destroy(), this.wxbanner = null) : this.emptyBanner && (this.emptyBanner.destroy(), 
            this.emptyBanner = null, this.inErrTime = !0, setTimeout(() => {
                this.inErrTime = !1;
            }, 3e4));
        }
        checkBanner() {
            if (console.log("接收banner刷新事件"), this.wxbanner && this.wxbanner.isShow) {
                this.wxbanner && this.wxbanner.destroy(), this.wxbanner = null;
                var e = this.getBannerId();
                e && (this.wxbanner = new i(e, this.pos, this.size, !1, this), this.wxbanner.bannerIndex = 0, 
                this.wxbanner.show());
            }
        }
        initBanner() {
            if (!this.bannerIds) return void console.log("未设置bannerID");
            if (!this.bannerIds.length || this.bannerIds.length <= 1) return void console.log("bannerID呢？？？");
            this.wxbanner && this.wxbanner.destroy();
            var e = this.getBannerId();
            e && (this.wxbanner = new i(e, this.pos, this.size, !1, this), this.wxbanner.bannerIndex = 0), 
            n.stage.on("TOUCH_BANNER_AD", this, this.checkBanner), this.emptyBanner && this.emptyBanner.destroy();
            var t = this.getBannerId();
            t && (this.emptyBanner = new i(t, this.pos, this.size, !0, this), this.emptyBanner.bannerIndex = 1, 
            this.emptyBanner.show());
            var s = Number(zs.laya.platform.ADConfig.zs_banner_refresh_time) || 1e4;
            let h = this;
            this.refreshTimer = setInterval(() => {
                h.refreshBanner();
            }, s);
        }
        refreshBanner() {
            if (this.inErrTime) console.log("出现banner报错, 暂停刷新"); else {
                this.emptyBanner && this.emptyBanner.destroy(), this.emptyBanner = null;
                var e = this.getBannerId();
                if (e) {
                    var n = new i(e, this.pos, this.size, !0, this);
                    this.emptyBanner = n, this.emptyBanner.bannerIndex = 1, this.emptyBanner.show();
                }
            }
        }
        showBanner(e) {
            let n = this.wxbanner;
            if (n) n.pos = e, n.show(), console.log("显示banner"); else {
                var t = this.getBannerId();
                t && (this.wxbanner = new i(t, this.pos, this.size, !1, this), this.wxbanner.bannerIndex = 0, 
                this.wxbanner.show());
            }
        }
        hideAll() {
            let e = this.wxbanner;
            e && e.isShow && (e.hide(), console.log("隐藏banner"));
        }
    }
    var s = function(e, i, t, s) {
        if (!i || !t) return {
            left: 0,
            top: 0
        };
        let h = 10 - i, r = 10 - t;
        if (!s) {
            let s = window.screen.availWidth / n.stage.width, a = window.screen.availHeight / n.stage.height;
            h = e ? null != e.left ? e.left * s : null != e.right ? (n.stage.width - e.right) * s - i : null != e.centerX ? (n.stage.width / 2 + e.centerX) * s - i / 2 : (window.screen.availWidth - i) / 2 : (window.screen.availWidth - i) / 2, 
            r = e ? null != e.top ? e.top * a : null != e.bottom ? (n.stage.height - e.bottom) * a - t : null != e.centerY ? (n.stage.height / 2 + e.centerY) * a - t / 2 : window.screen.availHeight - t : window.screen.availHeight - t;
        }
        return {
            left: h,
            top: r
        };
    };
    e.WxBanner = i, e.WxBannerMgr = t;
}(window.zs.laya.banner = window.zs.laya.banner || {}, Laya);