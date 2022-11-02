window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, a) {
    "use strict";
    class e extends a.Script {
        constructor() {
            super(), this.active = !1, this.topUI = null, this.middleUI = null, this.bottomUI = null, 
            this.leftFloatUI = null, this.rightFloatUI = null, this.fullUI = null, this.applyStatusBar = !0, 
            this.isFull = !0, this.vLayout = e.VERTICAL_MIDDLE, this.hLayout = e.HORIZONTAL_CENTER;
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
            this.topUI && (this.topUI.top = this.applyStatusBar ? zs.laya.sdk.DeviceService.statusBarHeight() * a.stage.height / zs.laya.sdk.DeviceService.screenHeight() : 0, 
            this.topUI.centerX = 0), this.middleUI && (this.middleUI.centerY = 0, this.middleUI.centerX = 0), 
            this.bottomUI && (this.bottomUI.bottom = 0, this.bottomUI.centerX = 0), this.leftFloatUI && (this.leftFloatUI.left = 0, 
            this.leftFloatUI.centerY = 0), this.rightFloatUI && (this.rightFloatUI.left = a.stage.width, 
            this.rightFloatUI.centerY = 0), this.fullUI && (this.fullUI.top = -10, this.fullUI.bottom = -10, 
            this.fullUI.left = -10, this.fullUI.right = -10);
        }
    }
    e.VERTICAL_TOP = 0, e.VERTICAL_MIDDLE = 1, e.VERTICAL_BOTTOM = 2, e.HORIZONTAL_LEFT = 0, 
    e.HORIZONTAL_CENTER = 1, e.HORIZONTAL_RIGHT = 2, a.ILaya.regClass(e), a.ClassUtils.regClass("zs.laya.base.Layout", e), 
    a.ClassUtils.regClass("Zhise.Layout", e);
    class s extends a.Script {
        constructor() {
            super(), this.viewName = "";
        }
        onAwake() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
        }
        onEnable() {
            a.stage.event(s.EVENT_UI_VIEW_OPENED, [ this.viewName, this.owner ]);
        }
        onDisable() {
            a.stage.event(s.EVENT_UI_VIEW_CLOSED, [ this.viewName, this.owner ]);
        }
    }
    s.EVENT_UI_VIEW_CLOSED = "UI_VIEW_CLOSED", s.EVENT_UI_VIEW_OPENED = "UI_VIEW_OPENED", 
    a.ILaya.regClass(s), a.ClassUtils.regClass("zs.laya.base.BaseView", s), a.ClassUtils.regClass("Zhise.BaseView", s);
    class i extends s {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            var t = this.owner.addComponent(e);
            zs.laya.game.AppMain.appConfig.platformType && "wx" != zs.laya.game.AppMain.appConfig.platformType ? t.initLayout(!0) : t.initLayout(!1);
        }
        onEnable() {
            super.onEnable();
        }
        initView(t) {
            if (zs.laya.game.AppMain.appConfig.useWebAdApi) {
                var a = zs.laya.platform.PlatformMgr.platformCfg;
                if (a) {
                    a.bannerCfg && (this.owner.getComponent(zs.laya.platform.BannerCtrl) || this.owner.addComponent(zs.laya.platform.BannerCtrl));
                    var e = a.customAdCfg;
                    e && e[this.viewName] && (this.owner.getComponent(zs.laya.platform.CustomAdCtrl) || this.owner.addComponent(zs.laya.platform.CustomAdCtrl));
                    var s = a.exportGameCfg;
                    s && s[this.viewName] && (this.owner.getComponent(zs.laya.platform.ExportGameCtrl) || this.owner.addComponent(zs.laya.platform.ExportGameCtrl));
                    var i = a.nativeAdCfg;
                    i && i[this.viewName] && 0 != i[this.viewName].auto && (this.owner.getComponent(zs.laya.platform.NativeAdsCtrl) || this.owner.addComponent(zs.laya.platform.NativeAdsCtrl));
                    var l = a.mistakenlyTouchCfg;
                    l && l[this.viewName] && (this.owner.getComponent(zs.laya.platform.MistakenlyTouchCtrl) || this.owner.addComponent(zs.laya.platform.MistakenlyTouchCtrl));
                }
            }
        }
    }
    a.ILaya.regClass(i), a.ClassUtils.regClass("zs.laya.base.ZhiSeView", i), a.ClassUtils.regClass("Zhise.View", i), 
    t.Layout = e, t.BaseView = s, t.ZhiSeView = i;
}(window.zs.laya.base = window.zs.laya.base || {}, Laya);