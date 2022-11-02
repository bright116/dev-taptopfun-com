window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, i) {
    "use strict";
    class n {
        constructor(e, i, n, t, s) {
            this.adUnitId = e, this.isLoad = !1, this.isShow = !1, this.isWait = i, this.pos = n, 
            this.loadFunc = t, this.isPoint = s, this.showLong = 0, this.initBanner();
            var r = this;
            this.loadTime = setTimeout(function() {
                console.log("加载超时"), r.destroy();
            }, 1e4), this.showTime = "", this.birthTime = 0, this.inErr = !1;
        }
        get liveTime() {
            return this.birthTime ? new Date().getTime() - this.birthTime : 0;
        }
        get showEd() {
            var e = zs.laya.platform.ADConfig.zs_banner_show_number, i = e || 0;
            return i = Math.max(i, 5e3), this.showLong > i;
        }
        initBanner() {
            if (window.wx && window.wx.createBannerAd) {
                console.log("进入banner初始化" + this.adUnitId);
                var e = this;
                if (null == this.bannerAd) {
                    var i = s(this.pos, t.Instance.realSize ? t.Instance.realSize.w : 300, t.Instance.realSize ? t.Instance.realSize.h : 104, this, this.isPoint);
                    this.bannerAd = wx.createBannerAd({
                        adUnitId: e.adUnitId,
                        style: {
                            left: i.left,
                            top: i.top,
                            width: 300
                        }
                    });
                }
                this.bannerAd ? (this.bannerAd.onLoad(function() {
                    e.isLoad = !0, e.loadTime && clearTimeout(e.loadTime), e.loadFunc && e.loadFunc(), 
                    e.birthTime = new Date().getTime(), e.isWait || e.show();
                }), this.bannerAd.onError(function(i) {
                    console.error("Banner err:", i), t.Instance.inErr(), e.inErr = !0, e.isWait = !0;
                }), this.bannerAd.onResize(this.onResize.bind(this))) : console.error("Banner 创建失败???环境？");
            } else console.log("环境异常,无法创建");
        }
        onResize(e) {
            t.Instance.realSize = {
                w: e.width,
                h: e.height
            };
        }
        getOffsetY() {
            return 750 * window.screen.availHeight > 1600 * window.screen.availWidth ? 15 * window.screen.availHeight * 750 / 1600 / window.screen.availWidth : 0;
        }
        show() {
            if (null != this.bannerAd && this.isLoad && !this.inErr) {
                this.isShow = !0, this.isWait = !1;
                var e = this;
                this.updatePosition(), this.bannerAd.show().then(function() {
                    console.warn("banner标号" + e.bannerIndex + "展示成功,当前已展示时间" + e.showLong), e.showTime = new Date().getTime(), 
                    e.isWait && e.hide();
                });
            }
        }
        updateTouchPos() {
            this.bannerAd && t.Instance.realSize && null != i.stage.mouseY && null != i.stage.mouseX && (this.bannerAd.style.top = i.stage.mouseY * window.screen.availHeight / i.stage.height - t.Instance.realSize.h / 2);
        }
        updatePosition() {
            if (this.bannerAd && t.Instance.realSize) {
                var e = s(this.pos, t.Instance.realSize ? t.Instance.realSize.w : 300, t.Instance.realSize ? t.Instance.realSize.h : 104, this.isPoint);
                this.bannerAd.style.left = e.left, this.bannerAd.style.top = e.top;
            }
        }
        hide() {
            this.isPoint = !1, this.isWait = !0, this.bannerAd && this.bannerAd.hide(), this.showTime && (this.showLong += new Date().getTime() - this.showTime), 
            this.showTime = null, this.isShow && console.warn("banner标号" + this.bannerIndex + "调用隐藏,当前已展示时间" + this.showLong), 
            this.isShow = !1;
        }
        destroy() {
            this.bannerAd && this.bannerAd.destroy(), this.bannerAd = null, this.adUnitId = null, 
            this.isLoad = null, this.isShow = null, this.isWait = null, this.loadTimer && clearTimeout(this.loadTimer), 
            this.pos = null, this.loadFunc = null, this.showLong = null, this.birthTime = null, 
            this.loadTimer = null, this.showTime = null, this.inErr = null, this.isPoint = null;
        }
        updateY(e) {
            this.bannerAd && t.Instance.realSize && (this.bannerAd.style.top = e * window.screen.availHeight / i.stage.height);
        }
        updateX(e) {
            this.bannerAd && t.Instance.realSize && (this.bannerAd.style.left = e * window.screen.availWidth / i.stage.width);
        }
    }
    class t {
        constructor() {
            this.wxbannerArray = [], this.bannerIds = [], this.isWait = !1, this.pos = {}, this.lastFreshTime = 0, 
            this.length = 0, this.inErrTime = !1, this.errTimer = null, this.createNum = 0, 
            this.bannerIndex = 0, this.checkInit = !1, this.idCdArr = [], this.realSize = null;
            var e = this;
            setInterval(function() {
                let i = new Date().getTime();
                var n = zs.laya.platform.ADConfig.zs_banner_refresh_time;
                !e.isWait && e.lastFreshTime && n && i - e.lastFreshTime > n && (console.log("自动刷新"), 
                e.updateBanner(e.isWait, e.pos, e.length, e.checkInit, e.isPoint));
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
        updateBanner(e, i, n, t, s) {
            if (!this.bannerIds) return void console.log("未设置bannerID");
            if (!this.bannerIds.length) return void console.log("bannerID呢？？？");
            this.hideAll(), this.lastFreshTime = new Date().getTime(), this.isWait = e, this.pos = i, 
            this.length = n ? Math.min(this.bannerIds.length, n) : 1, this.checkInit = t, this.isPoint = s;
            var r = 0;
            let a = 0;
            for (let e = this.wxbannerArray.length - 1; e >= 0; e--) {
                let i = this.wxbannerArray[e];
                if (i.inErr ? i.destroy() : this.wxbannerArray.length > 5 && i.showEd && i.liveTime > 3e4 && (console.log("banner" + i.bannerIndex + "生存时长超30s并已展示时长" + i.showLong), 
                i.destroy()), i.bannerAd) if (i.isLoad) {
                    if (i.isLoad && !i.showEd && !i.isShow && (console.log("存在加载完成但未展示的banner"), this.isWait || this.showBanner(this.pos, 1, this.isPoint), 
                    ++r >= this.length)) return;
                } else a++; else console.log("banner已销毁"), this.wxbannerArray.splice(e, 1);
            }
            return a >= this.length || this.inErrTime ? (console.log("当前拉取中大于配置次或者出现banner报错,暂停拉取"), 
            void (this.isWait || this.showBanner(this.pos, this.length - r, this.isPoint))) : t ? (this.createNum = this.length - r, 
            void this.createBanner()) : (console.error("checkInit为false，不创建banner"), void (this.isWait || this.showBanner(this.pos, this.length - r, this.isPoint)));
        }
        createBanner() {
            if (this.inErrTime && console.log("处于报错状态取消创建"), !this.createNum || this.createNum <= 0 || this.inErrTime) return;
            let e = Math.floor(Math.random() * this.bannerIds.length), i = new n(this.bannerIds[e], this.isWait, this.pos, this.createBanner, this.isPoint);
            i.bannerIndex = this.bannerIndex, this.bannerIndex++, this.wxbannerArray.push(i), 
            this.createNum--;
        }
        showBanner(e, i, n) {
            var t = 0;
            i = i ? Math.min(this.bannerIds.length, i) : 1, this.isWait = !1;
            for (let s = 0; s < this.wxbannerArray.length; s++) {
                let r = this.wxbannerArray[s];
                if (r.isLoad && !r.showEd && !r.isShow && (r.pos = e, r.isPoint = n, r.show(), ++t >= i)) return;
            }
            let s = null;
            for (let e = 0; e < this.wxbannerArray.length; e++) {
                let i = this.wxbannerArray[e];
                i.isLoad && !i.isShow && (!s || i.showLong < s.showLong) && (s = i);
            }
            s && (s.pos = e, s.isPoint = n, s.show()), !s && console.log("不存在加载完并且没有正在展示的banner");
        }
        toTouch() {
            let e = 0;
            for (let i = 0; i < this.wxbannerArray.length; i++) {
                let n = this.wxbannerArray[i];
                n.isLoad && n.isShow && (n.updateTouchPos(), e++);
            }
            0 == e && console.log("没有正在展示的banner");
        }
        updatePos() {
            let e = 0;
            for (let i = 0; i < this.wxbannerArray.length; i++) {
                let n = this.wxbannerArray[i];
                n.isLoad && n.isShow && (n.updatePosition(), e++);
            }
            0 == e && console.log("没有正在展示的banner");
        }
        hideAll() {
            for (let e = 0; e < this.wxbannerArray.length; e++) {
                this.wxbannerArray[e].hide();
            }
            this.isWait = !0, this.isPoint = !1;
        }
    }
    t.Instance = new t();
    var s = function(e, n, t, s) {
        if (!n || !t) return console.log("????干嘛吖！！！"), {
            left: 0,
            top: 0
        };
        let r = window.screen.availWidth / i.stage.width, a = window.screen.availHeight / i.stage.height, h = 1 - n, o = 1 - t;
        return s || (h = e ? null != e.left ? e.left * r : null != e.right ? (i.stage.width - e.right) * r - n : null != e.centerX ? (i.stage.width / 2 + e.centerX) * r - n / 2 : (window.screen.availWidth - n) / 2 : (window.screen.availWidth - n) / 2, 
        o = e ? null != e.top ? e.top * a : null != e.bottom ? (i.stage.height - e.bottom) * a - t : null != e.centerY ? (i.stage.height / 2 + e.centerY) * a - t / 2 : window.screen.availHeight - t : window.screen.availHeight - t), 
        {
            left: h,
            top: o
        };
    };
    e.WxBanner = n, e.WxBannerMgr = t;
}(window.zs.laya.banner = window.zs.laya.banner || {}, Laya);