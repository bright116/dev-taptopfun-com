window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, e) {
    "use strict";
    class s extends e.Script {
        constructor() {
            super(), this.active = !1, this.topUI = null, this.middleUI = null, this.bottomUI = null, 
            this.leftFloatUI = null, this.rightFloatUI = null, this.fullUI = null, this.applyStatusBar = !0, 
            this.isFull = !0, this.vLayout = s.VERTICAL_MIDDLE, this.hLayout = s.HORIZONTAL_CENTER;
        }
        initLayout(t) {
            this.applyStatusBar = t, this.applyLayout();
        }
        onAwake() {
            this.topUI = this.owner.getChildByName("topUI"), this.middleUI = this.owner.getChildByName("middleUI"), 
            this.bottomUI = this.owner.getChildByName("bottomUI"), this.leftFloatUI = this.owner.getChildByName("leftFloatUI"), 
            this.rightFloatUI = this.owner.getChildByName("rightFloatUI"), this.fullUI = this.owner.getChildByName("fullUI");
        }
        onEnable() {
            this.applyLayout();
        }
        onDisable() {}
        applyLayout() {
            var t = this.owner;
            this.isFull ? (t.top = 0, t.bottom = 0, t.left = 0, t.right = 0) : (0 == this.vLayout ? t.top = 0 : 1 == this.vLayout ? t.centerY = 0 : t.bottom = 0, 
            0 == this.hLayout ? t.left = 0 : 1 == this.hLayout ? t.centerX = 0 : t.right = 0), 
            this.topUI && (this.topUI.top = this.applyStatusBar ? zs.laya.sdk.DeviceService.statusBarHeight() * e.stage.height / zs.laya.sdk.DeviceService.screenHeight() : 0, 
            this.topUI.centerX = 0), this.middleUI && (this.middleUI.centerY = 0, this.middleUI.centerX = 0), 
            this.bottomUI && (this.bottomUI.bottom = 0, this.bottomUI.centerX = 0), this.leftFloatUI && (this.leftFloatUI.left = 0, 
            this.leftFloatUI.centerY = 0), this.rightFloatUI && (this.rightFloatUI.left = e.stage.width, 
            this.rightFloatUI.centerY = 0), this.fullUI && (this.fullUI.top = -2, this.fullUI.bottom = -2, 
            this.fullUI.left = -2, this.fullUI.right = -2);
        }
    }
    s.VERTICAL_TOP = 0, s.VERTICAL_MIDDLE = 1, s.VERTICAL_BOTTOM = 2, s.HORIZONTAL_LEFT = 0, 
    s.HORIZONTAL_CENTER = 1, s.HORIZONTAL_RIGHT = 2, e.ILaya.regClass(s), e.ClassUtils.regClass("zs.laya.base.Layout", s), 
    e.ClassUtils.regClass("Zhise.Layout", s);
    class a extends e.Script {
        constructor() {
            super(), this.viewName = "";
        }
        onAwake() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
        }
        onEnable() {
            e.stage.event(a.EVENT_UI_VIEW_OPENED, [ this.viewName, this.owner ]);
        }
        onDisable() {
            e.stage.event(a.EVENT_UI_VIEW_CLOSED, [ this.viewName, this.owner ]);
        }
    }
    a.EVENT_UI_VIEW_CLOSED = "UI_VIEW_CLOSED", a.EVENT_UI_VIEW_OPENED = "UI_VIEW_OPENED", 
    e.ILaya.regClass(a), e.ClassUtils.regClass("zs.laya.base.BaseView", a), e.ClassUtils.regClass("Zhise.BaseView", a);
    class i extends a {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.owner.addComponent(s).initLayout(!1);
        }
        onEnable() {
            super.onEnable();
            var t = zs.laya.platform.PlatformMgr.platformCfg;
            if (t) {
                t.bannerCfg && (this.owner.getComponent(zs.laya.platform.BannerCtrl) || this.owner.addComponent(zs.laya.platform.BannerCtrl));
                var e = t.customAdCfg;
                if (e && e[this.viewName] && zs.laya.platform.CustomAdCtrl) {
                    let t = this.owner.getComponent(zs.laya.platform.CustomAdCtrl);
                    t ? t && t.onEnable() : this.owner.addComponent(zs.laya.platform.CustomAdCtrl);
                }
                var s = t.exportGameCfg;
                s && s[this.viewName] && (this.owner.getComponent(zs.laya.platform.ExportGameCtrl) || this.owner.addComponent(zs.laya.platform.ExportGameCtrl));
                var a = t.nativeAdCfg;
                a && a[this.viewName] && 0 != a[this.viewName].auto && (this.owner.getComponent(zs.laya.platform.NativeAdsCtrl) || this.owner.addComponent(zs.laya.platform.NativeAdsCtrl));
                var i = t.mistakenlyTouchCfg;
                i && i[this.viewName] && (this.owner.getComponent(zs.laya.platform.MistakenlyTouchCtrl) || this.owner.addComponent(zs.laya.platform.MistakenlyTouchCtrl));
            }
        }
        initView(t) {}
    }
    e.ILaya.regClass(i), e.ClassUtils.regClass("zs.laya.base.ZhiSeView", i), e.ClassUtils.regClass("Zhise.View", i), 
    t.Layout = s, t.BaseView = a, t.ZhiSeView = i;
}(window.zs.laya.base = window.zs.laya.base || {}, Laya);