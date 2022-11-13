window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, s) {
    "use strict";
    class t extends s.Script {
        constructor() {
            super();
        }
        static initCFG(e) {
            this.platformCfg = e, this.adViewUrl = {
                screenAd: "view/ad/FullAd_1.scene",
                floatAd: "view/ad/FloatAd.scene",
                listAd: "view/ad/FullAd.scene",
                knockEggAd: "view/ad/KnockEgg.scene"
            }, this.adViewScript = {
                screenAd: A,
                floatAd: v,
                listAd: A,
                knockEggAd: E
            }, this.currentView = "", "undefined" != typeof wx && wx.onShareAppMessage(function() {
                return {
                    title: i.zs_share_title,
                    imageUrl: i.zs_share_image
                };
            });
        }
        static initUser(e) {
            this.userId = e;
        }
        static initSoundUrl(e, s) {
            this.openSound = e, this.clickSound = s;
        }
        static initGameAd() {
            zs.laya.sdk.SdkService.initVideoAd(i.zs_video_adunit), zs.laya.sdk.SdkService.initInsertAd(i.zs_full_screen_adunit, null);
        }
        static enterGamePopup() {}
        static onGameFaildPopUp(e) {
            i.isBeforeGameAccount() ? (s.stage.on(t.UI_VIEW_CLOSED, null, t.onHideExportView, [ 0, e ]), 
            t.showListAd()) : s.stage.event(t.OPEN_FAILED_VIEW, [ e ]);
        }
        static onGameWinPopUp(e) {
            i.isBeforeGameAccount() ? (t.showListAd(), s.stage.on(t.UI_VIEW_CLOSED, null, t.onHideExportView, [ 1, e ])) : s.stage.event(t.OPEN_WIN_VIEW, [ e ]);
        }
        static onHideExportView(e, a, n) {
            if (n.indexOf("FullAd") >= 0 || n.indexOf("FloatAd") >= 0 || n.indexOf("ListAd")) {
                if (0 == e) s.stage.event(t.OPEN_FAILED_VIEW, [ a ]); else if (1 == e) s.stage.event(t.OPEN_WIN_VIEW, [ a ]); else if (2 == e) {
                    if (a != n) return;
                    s.stage.event(t.GAME_RESET_START), i.zs_switch && i.zs_auto_pop_ups_switch && t.showHomeFloatAd();
                }
                s.stage.off(t.UI_VIEW_CLOSED, null, t.onHideExportView);
            }
        }
        static onGameOverPopUp() {
            if (i.isAfterGameAccount()) {
                var e = t.adViewUrl.screenAd;
                e = e.substring(e.lastIndexOf("/") + 1, e.lastIndexOf(".")), s.stage.on(t.UI_VIEW_CLOSED, null, t.onHideExportView, [ 2, e ]), 
                t.showScreenAd();
            } else s.stage.event(t.GAME_RESET_START);
        }
        static showInsertAd() {
            if (i.zs_full_screen_ad_enable) {
                var e = s.LocalStorage.getItem("zs_full_screen_ad_time_stamp");
                if (null == e || "" == e || 0 == zs.laya.MiscUtils.isToday(Number(e))) {
                    var t = this;
                    zs.laya.sdk.SdkService.loadInsertAd(s.Handler.create(null, function() {
                        t.gameState == GameState.STATE_UNBEGIN && (zs.laya.sdk.SdkService.showInsertAd(null), 
                        s.LocalStorage.setItem("zs_full_screen_ad_time_stamp", Date.now().toString()));
                    }), null);
                }
            }
        }
        static onExportJumpCancel() {
            i.zs_jump_switch && i.isPublicVersion() && i.zs_full_screen_jump && i.zs_slide_jump_switch && t.showScreenAd();
        }
        static initView(e, t, i) {
            if (e instanceof s.View && (e._gameData = i, t)) {
                var a = e.getComponent(t);
                null == a && (a = e.addComponent(t)), a.initView && a.initView(i);
            }
        }
        static showScreenAd(e) {
            this.currentView != this.adViewUrl.screenAd && (null != this.adViewUrl.screenAd ? (this.currentView = this.adViewUrl.screenAd, 
            s.Scene.open(this.adViewUrl.screenAd, !1, e, s.Handler.create(this, function(s) {
                this.initView(s, this.adViewScript.screenAd, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showScreenAd error"));
        }
        static hideScreenAd() {
            null != this.adViewUrl.screenAd && (this.currentView = "", s.Scene.close(this.adViewUrl.screenAd));
        }
        static showListAd(e) {
            this.currentView != this.adViewUrl.listAd && (null != this.adViewUrl.listAd ? (this.currentView = this.adViewUrl.listAd, 
            s.Scene.open(this.adViewUrl.listAd, !1, e, s.Handler.create(this, function(s) {
                this.initView(s, this.adViewScript.listAd, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showListAd error"));
        }
        static hideListAd() {
            null != this.adViewUrl.listAd && (this.currentView = "", s.Scene.close(this.adViewUrl.listAd));
        }
        static showHomeFloatAd(e) {
            this.currentView != this.adViewUrl.floatAd && (null != this.adViewUrl.floatAd ? (this.currentView = this.adViewUrl.floatAd, 
            s.Scene.open(this.adViewUrl.floatAd, !1, e, s.Handler.create(this, function(s) {
                this.initView(s, this.adViewScript.floatAd, e);
            })), s.SoundManager.playSound(this.openSound)) : console.error("showHomeFloatAd error"));
        }
        static hideHomeFloatAd() {
            null != this.adViewUrl.floatAd && (this.currentView = "", s.Scene.close(this.adViewUrl.floatAd));
        }
        static showKnockEggView(e) {
            this.currentView != this.adViewUrl.knockEggAd && (null != this.adViewUrl.knockEggAd ? (this.currentView = this.adViewUrl.knockEggAd, 
            s.Scene.open(this.adViewUrl.knockEggAd, !1, e, s.Handler.create(this, function(s) {
                this.initView(s, this.adViewScript.knockEggAd, e);
            }))) : console.error("knockEggAd error"));
        }
        static hideKnockEggAd() {
            null != this.adViewUrl.knockEggAd && (this.currentView = "", s.Scene.close(this.adViewUrl.knockEggAd));
        }
    }
    t.platformCfg = null, t.user_id = 1, t.APP_SHOW = "DEVICE_ON_SHOW", t.APP_HIDE = "DEVICE_ON_HIDE", 
    t.AD_CONFIIG_LOADED = "AD_CONFIIG_LOADED", t.UI_VIEW_OPENED = "UI_VIEW_OPENED", 
    t.UI_VIEW_CLOSED = "UI_VIEW_CLOSED", t.OPEN_WIN_VIEW = "OPEN_WIN_VIEW", t.OPEN_FAILED_VIEW = "OPEN_FAILED_VIEW", 
    t.GAME_RESET_START = "GAME_RESET_START", t.EGG_GET_AWARD = "EGG_GET_AWARD", s.ILaya.regClass(t), 
    s.ClassUtils.regClass("zs.laya.platform.PlatformMgr", t), s.ClassUtils.regClass("Zhise.PlatformMgr", t);
    class i {
        constructor() {
            this.current_version = "1.0";
        }
        static initAdSetting(e, t) {
            this.current_version = e, this.response = t;
            var i = t.zs_banner_system ? String(t.zs_banner_system).toUpperCase() : null;
            this.zs_version = t.zs_number ? t.zs_number : "0.0";
            var a = !i || !s.Browser.onMobile || !(-1 != i.indexOf("ANDROID") && s.Browser.onAndroid || -1 != i.indexOf("IOS") && !s.Browser.onAndroid);
            this.zs_switch = 1 == t.zs_switch && a && this.isPublicVersion(), this.egg_switch = 1 == t.zs_switch && this.isPublicVersion(), 
            this.zs_video_adunit = t.zs_video_adunit, this.zs_banner_adunit = t.zs_banner_adunit, 
            this.zs_full_screen_adunit = t.zs_full_screen_adunit, this.zs_full_screen_ad_enable = 1 == t.zs_full_screen_ad, 
            this.zs_banner_text_time = t.zs_banner_text_time ? Number(t.zs_banner_text_time) : 1e3, 
            this.zs_banner_banner_time = t.zs_banner_banner_time ? Number(t.zs_banner_banner_time) : 1e3, 
            this.zs_banner_refresh_time = t.zs_banner_refresh_time ? Number(t.zs_banner_refresh_time) : 1e3, 
            this.zs_banner_move_time = t.zs_banner_move_time ? Number(t.zs_banner_move_time) : 1e3, 
            this.zs_banner_vertical_enable = 1 == t.zs_banner_vertical_enable, this.zs_banner_horizontal_enable = 1 == t.zs_banner_horizontal_enable, 
            this.zs_share_title = t.zs_share_title, this.zs_share_image = t.zs_share_img, this.zs_shield_gdt_export = 1 == t.zs_shield_gdt_export, 
            this.zs_jump_switch = 1 == t.zs_jump_switch && (0 == zs.laya.zsapp.zsAppSdk.Instance.isFromLink() || this.zs_shield_gdt_export), 
            this.zs_revive_type = t.zs_revive_type, this.zs_revive_click_num = t.zs_revive_click_num, 
            this.zs_revive_video_num = t.zs_revive_video_num, this.zs_revive_share_num = t.zs_revive_share_num, 
            this.zs_full_screen_jump = 1 == t.zs_full_screen_jump, this.zs_history_list_jump = 1 == t.zs_history_list_jump, 
            this.zs_finish_jump = 1 == t.zs_finish_jump, this.repair_click_num = this.zs_click_award_percent = t.zs_click_award_percent || [ .3, .7 ], 
            this.zs_click_award_back = t.zs_click_award_back ? Number(t.zs_click_award_back) : .00423, 
            this.zs_click_award_num = zs.laya.MiscUtils.IsNumber(t.zs_click_award_num) ? t.zs_click_award_num : t.zs_click_award_num || 0, 
            this.zs_click_award_add = t.zs_click_award_add || .1, this.zs_revive_countdown = t.zs_revive_countdown ? Number(t.zs_revive_countdown) : 10, 
            this.zs_jump_style = t.zs_jump_style ? Number(t.zs_jump_style) : 0, this.zs_banner_rotate_id1 = t.zs_banner_rotate_id1, 
            this.zs_banner_rotate_id2 = t.zs_banner_rotate_id2, this.zs_banner_rotate_id3 = t.zs_banner_rotate_id3, 
            this.zs_click_award_system = t.zs_click_award_system, this.zs_banner_show_number = this.getNumberVal(t.zs_banner_show_number, 2), 
            this.zs_full_screen_rotate = 1 == this.getNumberVal(t.zs_full_screen_rotate, 0), 
            this.zs_unmiss_text_time = this.getNumberVal(t.zs_unmiss_text_time, 0), this.zs_button_delay_time = this.getNumberVal(t.zs_button_delay_time, 2e3), 
            this.zs_button_delay_switch = 1 == this.getNumberVal(t.zs_button_delay_switch, 0), 
            this.zs_game_banner_show_switch = 1 == this.getNumberVal(t.zs_game_banner_show_switch, 0), 
            this.zs_before_finsh_jump_switch = 1 == this.getNumberVal(t.zs_before_finsh_jump_switch, 0), 
            this.zs_slide_jump_switch = 1 == this.getNumberVal(t.zs_slide_jump_switch, 0), this.zs_auto_pop_ups_switch = 1 == this.getNumberVal(t.zs_slide_jump_switch, 0), 
            this.initOpenAwardNum();
        }
        static getNumberVal(e, s) {
            return s = zs.laya.MiscUtils.IsNumber(s) ? Number(s) : 0, zs.laya.MiscUtils.IsNumber(e) ? Number(e) : s;
        }
        static initOpenAwardNum() {
            this.open_award_num = s.LocalStorage.getItem("open_award_num") || 0, i.openEggTimes = 0;
            var e = s.LocalStorage.getItem("open_award_num_time_stamp");
            null != e && "" != e && 0 != zs.laya.MiscUtils.isToday(Number(e)) || (s.LocalStorage.setItem("open_award_num_time_stamp", Date.now().toString()), 
            s.LocalStorage.setItem("open_award_num", this.open_award_num = 0));
        }
        static isPublicVersion() {
            return i.current_version != i.zs_version;
        }
        static isOpenEgg(e) {
            if (!i.egg_switch) return !1;
            if (i.openEggTimes && i.openEggTimes > 0) return !1;
            if (i.zs_click_award_system) {
                var t = i.zs_click_award_system.trim().toLowerCase();
                if ("android" == t && s.Browser.onAndroid) return !1;
                if ("ios" == t && s.Browser.onIOS) return !1;
            }
            if (zs.laya.MiscUtils.IsNumber(i.zs_click_award_num)) {
                if (-1 == i.zs_click_award_num) return !0;
                var a = s.LocalStorage.getItem("open_award_num") || 0;
                if (Number(i.zs_click_award_num) > Number(a)) return !0;
            }
            if (i.zs_click_award_num && i.zs_click_award_num.length > 0) {
                if (1 == i.zs_click_award_num.length && -1 == i.zs_click_award_num[0]) return !0;
                if (-1 != i.zs_click_award_num.indexOf(e)) return !0;
            }
            return !1;
        }
        static enableClickRevive() {
            return this.isReviveTypeEnable("zs_revive_click_num");
        }
        static updateClickRevive() {
            this.updateReviveTypeInfo("zs_revive_click_num");
        }
        static enableVideoRevive() {
            return this.isReviveTypeEnable("zs_revive_video_num");
        }
        static updateVideoRevive() {
            this.updateReviveTypeInfo("zs_revive_video_num");
        }
        static enableShareRevive() {
            return this.isReviveTypeEnable("zs_revive_share_num");
        }
        static updateShareRevive() {
            this.updateReviveTypeInfo("zs_revive_share_num");
        }
        static isReviveTypeEnable(e) {
            if (0 == this[e]) return !1;
            if (-1 == this[e]) return !0;
            var t = s.LocalStorage.getItem(e + "_time_stamp");
            if (null == t || "" == t || 0 == zs.laya.MiscUtils.isToday(Number(t))) return !0;
            var i = s.LocalStorage.getItem(e);
            return (null == i || "" == i ? 0 : Number(i)) < this[e];
        }
        static updateReviveTypeInfo(e) {
            s.LocalStorage.setItem(e + "_time_stamp", Date.now().toString());
            var t = s.LocalStorage.getItem(e), i = null == t || "" == t ? 0 : Number(t);
            i++, s.LocalStorage.setItem(e, i.toString());
        }
        static isBeforeGameAccount() {
            return i.zs_jump_switch && i.zs_before_finsh_jump_switch;
        }
        static isAfterGameAccount() {
            return i.zs_jump_switch && i.zs_full_screen_jump;
        }
    }
    i.response = null, i.zs_share_title = "", i.zs_share_image = "", i.zs_switch = !1, 
    i.zs_version = "1.0.0", i.zs_video_adunit = "", i.zs_banner_adunit = "", i.zs_banner_rotate_id1 = "", 
    i.zs_banner_rotate_id2 = "", i.zs_banner_rotate_id3 = "", i.zs_full_screen_adunit = "", 
    i.zs_full_screen_ad_enable = !1, i.zs_banner_text_time = 0, i.zs_banner_banner_time = 0, 
    i.zs_banner_refresh_time = 0, i.zs_banner_move_time = 500, i.zs_banner_vertical_enable = !1, 
    i.zs_banner_horizontal_enable = !1, i.zs_jump_switch = !1, i.zs_revive_type = 0, 
    i.zs_revive_click_num = 0, i.zs_revive_video_num = 0, i.zs_revive_share_num = 0, 
    i.zs_continue_auto_share = !1, i.zs_full_screen_jump = !1, i.zs_history_list_jump = !1, 
    i.zs_finish_jump = !1, i.zs_revive_countdown = 10, i.zs_jump_style = 1, i.zs_shield_gdt_export = !0, 
    i.zs_full_screen_rotate = !1, i.zs_button_delay_switch = !1, i.zs_button_delay_time = 2e3, 
    i.zs_game_banner_show_switch = !0, i.zs_before_finsh_jump_switch = !1, i.zs_slide_jump_swich = !1, 
    i.zs_auto_pop_ups_switch = !0, s.ILaya.regClass(i), s.ClassUtils.regClass("zs.laya.platform.ADConfig", i), 
    s.ClassUtils.regClass("Zhise.ADConfig", i);
    class a extends s.Script {
        constructor() {
            super(), this.userId = null, this.adType = null, this.autoScroll = !1, this.scrollDir = a.SCROLL_NONE, 
            this.dragSleep = 5e3, this.scrollSpeed = 1, this.waitTime = 1e3, this.passedTime = 0, 
            this.inAutoScroll = !1, this.adData = [], this.iosFilterAppIds = [], this.list = null, 
            this.hotIds = [], this.maxNum = null, this.isDataUpdate = !1, this.touchIndex = -1, 
            this.isRandomSelect = !1, this.changeValue = 0, this.unitValue = 0, this.isEnd = !1, 
            this.isClockPendulum = !1, this.position = "error";
        }
        requestAdData(e, s, t, i, n, r, o, l) {
            this.userId = zs.laya.platform.PlatformMgr.user_id, this.adType = e, this.autoScroll = s, 
            this.scrollDir = t, this.iosFilterAppIds = i || [], this.maxNum = r, this.isRandomSelect = o, 
            this.isClockPendulum = l, this.position = n, this.scrollDir == a.SCROLL_VERTICAL ? this.list.vScrollBarSkin = "" : this.scrollDir == a.SCROLL_HORIZONTAL && (this.list.hScrollBarSkin = "");
            var h = this;
            zs.laya.zsapp.zsAppSdk.loadAd(function(e) {
                h.list && (h.adData = e[h.adType.toString()], h.initHotIds(), h.freshAdList());
            });
        }
        freshAdList() {
            var e = this;
            if (this.adData = this.adData.filter(function(t) {
                return s.Browser.onAndroid || -1 == e.iosFilterAppIds.indexOf(t.appid);
            }), null != this.maxNum) if (this.adData.length < this.maxNum) for (;this.adData.length < this.maxNum; ) this.adData.push(this.adData[Math.floor(Math.random() * this.adData.length)]); else if (this.adData.length > this.maxNum) for (;this.adData.length > this.maxNum; ) this.adData.splice(Math.floor(Math.random() * this.adData.length), 1);
            this.list.array = this.adData;
            var t = 0, i = this.list.getCell(0);
            i && (this.scrollDir == a.SCROLL_VERTICAL ? (t = Math.ceil(this.list.array.length / this.list.repeatX), 
            this.unitValue = (i.height + this.list.spaceY) / (t * i.height + this.list.spaceY * (t - 1) - this.list.height) * this.list.scrollBar.max) : this.scrollDir == a.SCROLL_HORIZONTAL && (t = Math.ceil(this.list.array.length / this.list.repeatY), 
            this.unitValue = (i.width + this.list.spaceX) / (t * i.width + this.list.spaceX * (t - 1) - this.list.width) * this.list.scrollBar.max), 
            console.log("单元value" + this.unitValue), this.autoScroll && s.stage.frameOnce(1, this, this.startAutoScrollAd));
        }
        initHotIds() {
            for (var e = Math.random() < .5 ? 3 : 4, s = Math.floor(this.adData.length / e), t = 0; t < e; t++) this.hotIds.push(Math.floor(s * Math.random()) + t * s);
        }
        startAutoScrollAd() {
            this.list && (this.inAutoScroll = !0);
        }
        onItemRender(e, s) {
        }
        onTouchEnd(e) {
            this.list && this.list.array && (i.zs_slide_jump_switch && this.isRandomSelect && -1 == this.touchIndex && (this.touchIndex = Math.floor(Math.random() * this.list.array.length), 
            console.log("RandomSelect:" + this.touchIndex + " data list length:" + this.list.array.length)), 
            this.onSelectAd(this.touchIndex), this.touchIndex = -1);
        }
        onMouseAd(e, t) {
            e.type == s.Event.MOUSE_DOWN && (this.touchIndex = t);
        }
        onSelectAd(e) {
            if (null != e && -1 != e && this.list && this.list.array) {
                var i = this.list.array[e], n = this;
                n.isDataUpdate = !0, zs.laya.zsapp.zsAppSdk.navigate2Mini(i, t.userId, function() {
                    s.stage.event(a.EVENT_NAVIGATE_SUCCESS);
                }, function() {
                    s.stage.event(a.EVENT_NAVIGATE_FAILED);
                }, function() {
                    n.list.selectedIndex = -1, s.stage.event(a.EVENT_NAVIGATE_COMPLETED);
                }, {
                    position: this.position
                });
            }
        }
        params2String(e) {
            for (var s = e[0] + "=" + e[1], t = 2; t < e.length; t += 2) s += "&" + e[t] + "=" + e[t + 1];
            return s;
        }
        onDragStateChanged(e) {
            this.inAutoScroll = !1, this.autoScroll && 0 == e && (this.passedTime = 0);
        }
        onAwake() {
            this.list = this.owner, this.list.selectEnable = !0, this.list.renderHandler = s.Handler.create(this, this.onItemRender, null, !1), 
            this.list.mouseHandler = s.Handler.create(this, this.onMouseAd, null, !1);
        }
        onEnable() {
            this.owner.on(s.Event.MOUSE_UP, this, this.onTouchEnd), this.list.on(s.Event.MOUSE_UP, this, this.onDragStateChanged, [ 0 ]), 
            this.list.on(s.Event.MOUSE_OUT, this, this.onDragStateChanged, [ 0 ]), this.list.on(s.Event.MOUSE_DOWN, this, this.onDragStateChanged, [ 1 ]);
        }
        onDisable() {
            this.owner.off(s.Event.MOUSE_UP, this, this.onTouchEnd), this.list.off(s.Event.MOUSE_UP, this, this.onDragStateChanged), 
            this.list.off(s.Event.MOUSE_OUT, this, this.onDragStateChanged), this.list.off(s.Event.MOUSE_DOWN, this, this.onDragStateChanged);
        }
        onUpdate() {
            if (this.autoScroll && 1 == this.inAutoScroll && this.list && this.list.scrollBar && this.list.scrollBar.max) {
                if (this.list.scrollBar.value >= this.list.scrollBar.max ? (this.list.scrollBar.value = this.list.scrollBar.max, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0) : this.list.scrollBar.value <= 0 && (this.list.scrollBar.value = 0, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0), this.list.scrollBar.value += this.scrollSpeed, 
                !this.unitValue || !this.isClockPendulum) return;
                this.isEnd = this.isEnd && 0 != this.changeValue, this.changeValue += Math.abs(this.scrollSpeed), 
                (this.changeValue >= this.unitValue || this.isEnd) && (this.autoScroll = !1, this.isEnd = !1, 
                this.changeValue = 0, s.timer.once(this.waitTime, this, function() {
                    this.autoScroll = !0;
                }));
            }
            this.autoScroll && 0 == this.inAutoScroll && (this.passedTime += s.timer.delta, 
            this.passedTime > this.dragSleep && this.startAutoScrollAd());
        }
    }
    a.EVENT_NAVIGATE_SUCCESS = "NAVIGATE_SUCCESS", a.EVENT_NAVIGATE_FAILED = "NAVIGATE_FAILED", 
    a.EVENT_NAVIGATE_COMPLETED = "NAVIGATE_COMPLETED", a.SCROLL_NONE = 0, a.SCROLL_VERTICAL = 1, 
    a.SCROLL_HORIZONTAL = 2, s.ILaya.regClass(a), s.ClassUtils.regClass("zs.laya.platform.AdList", a), 
    s.ClassUtils.regClass("Zhise.AdList", a);
    class n extends a {
        constructor() {
            super();
        }
        onItemRender(e, s) {
        }
        onSelectAd(e) {
            if (-1 != e) {
                var i = this.list.array[e];
                if (6 == e) return null == i.arrowIdx || 0 == i.arrowIdx ? (i.arrowIdx = 1, this.owner.event(n.EVENT_AD_SWITCH_SHOW)) : (i.arrowIdx = 0, 
                this.owner.event(n.EVENT_AD_SWITCH_HIDE)), void (this.list.selectedIndex = -1);
                var r = this;
                r.isDataUpdate = !0, zs.laya.zsapp.zsAppSdk.navigate2Mini(i, t.userId, function() {
                    s.stage.event(a.EVENT_NAVIGATE_SUCCESS);
                }, function() {
                    s.stage.event(a.EVENT_NAVIGATE_FAILED);
                }, function() {
                    r.list.selectedIndex = -1, s.stage.event(a.EVENT_NAVIGATE_COMPLETED);
                }, {
                    position: a.position
                });
            }
        }
    }
    n.EVENT_AD_SWITCH_SHOW = "EVENT_AD_SWITCH_SHOW", n.EVENT_AD_SWITCH_HIDE = "EVENT_AD_SWITCH_HIDE", 
    s.ILaya.regClass(n), s.ClassUtils.regClass("zs.laya.platform.AdList2", n), s.ClassUtils.regClass("Zhise.AdList2", n);
    class r extends s.Script {
        constructor() {
            super(), this.args = null, this.adView = null, this.monitorOtherPageOpen = !1, this.visibleArr = null;
        }
        onEnable() {
            null == this.adView && s.stage.on(t.AD_CONFIIG_LOADED, this, this.onStart);
        }
        onDisable() {
            null == this.adView && s.stage.off(t.AD_CONFIIG_LOADED, this, this.onStart), this.monitorOtherPageOpen && (s.stage.off(t.UI_VIEW_OPENED, this, this.onViewOpened), 
            s.stage.off(t.UI_VIEW_CLOSED, this, this.onViewClosed));
        }
        onDestroy() {
            if (null != this.adView) {
                for (var e = 0; e < this.adView.length; e++) null != this.adView[e] && this.adView[e].destroy();
                this.adView = null;
            }
        }
        onStart() {
            if (!this.adView && 0 != i.zs_jump_switch && 0 != i.isPublicVersion()) {
                var e = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                if (this.args = t.platformCfg.exportGameCfg[e], this.args) {
                    this.monitorOtherPageOpen = !1;
                    for (var a = 0; a < this.args.length; a++) {
                        (null == (n = this.args[a]).checkKey || i[n.checkKey]) && (this.monitorOtherPageOpen = this.monitorOtherPageOpen || n.isHide);
                    }
                    this.monitorOtherPageOpen && (s.stage.on(t.UI_VIEW_OPENED, this, this.onViewOpened), 
                    s.stage.on(t.UI_VIEW_CLOSED, this, this.onViewClosed)), this.adView = [];
                    for (a = 0; a < this.args.length; a++) {
                        var n;
                        if ((n = this.args[a]).readonly) this.adView.push(null); else {
                            if (null == n.checkKey || i[n.checkKey]) {
                                s.loader.create(n.viewUrl, s.Handler.create(this, this.onPrefabReady), null, s.Loader.PREFAB);
                                break;
                            }
                            this.adView.push(null);
                        }
                    }
                }
            }
        }
        onPrefabReady(e) {
            if (!this.destroyed) {
                var t = this.args[this.adView.length], a = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                if (this.owner.getChildByName(t.parentRoot)) {
                    var n = this.getViewScript(t.scriptType);
                    if (null != n) {
                        var r = e.create();
                        this.owner.getChildByName(t.parentRoot).addChild(r), r.pos(t.x, t.y);
                        var o = r.getComponent(n);
                        if (null == o && (o = r.addComponent(n)), t.adType && o.initView(t), this.adView.push(r), 
                        this.adView.length < this.args.length) {
                            var l = this.args[this.adView.length];
                            l.readonly ? this.adView.push(null) : null == l.checkKey || i[l.checkKey] ? s.loader.create(l.viewUrl, s.Handler.create(this, this.onPrefabReady), null, s.Loader.PREFAB) : this.adView.push(null);
                        }
                    } else console.log(a + " page" + t.viewUrl + " scriptType is null");
                } else console.log(a + " page parentRoot " + t.parentRoot + " is null");
            }
        }
        getViewScript(e) {
            switch (e) {
              case "ExportScrollH":
                return o;

              case "ExportScrollV":
                return l;

              case "ExportScrollNone":
                return h;

              case "ShakeExportBox":
                return c;

              case "RankBtn":
                return g;

              case "InviteBtn":
                return m;

              case "FakeExitBtn":
                return u;

              case "FloatExportBtn":
                return _;

              case "ScreenExportBtn":
                return p;

              case "ExportLeftPop":
                return w;

              case "ExportRightPop":
                return f;

              case "ExportLeftFlyBox":
                return C;
            }
        }
        onViewOpened(e) {
            if (e && this.adView) {
                this.visibleArr = [];
                for (var s = 0; s < this.adView.length; s++) null != this.adView[s] && this.args[s].isHide && (this.visibleArr[s] = this.adView[s].visible, 
                this.adView[s].visible = !1);
            }
        }
        onViewClosed(e) {
            if (e && this.adView) {
                if (!this.visibleArr) return;
                for (var s = 0; s < this.adView.length; s++) null != this.adView[s] && this.args[s].isHide && this.visibleArr[s] && (this.adView[s].visible = this.visibleArr[s]);
            }
        }
    }
    s.ILaya.regClass(r), s.ClassUtils.regClass("zs.laya.platform.ExportGameCtrl", r), 
    s.ClassUtils.regClass("Zhise.ExportGameCtrl", r);
    class o extends s.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(e) {
            this.adList = this.owner.getChildByName("adList").addComponent(a);
            var s = t.platformCfg;
            this.adList.requestAdData(e.adType, !0, a.SCROLL_HORIZONTAL, s.iosFilterAppIds, e.position, null, !1, e.isClockPendulum);
        }
    }
    s.ILaya.regClass(o), s.ClassUtils.regClass("zs.laya.platform.ExportScrollH", o), 
    s.ClassUtils.regClass("Zhise.ExportScrollH", o);
    class l extends s.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(e) {
            this.adList = this.owner.getChildByName("adList").addComponent(a);
            var s = t.platformCfg;
            this.adList.requestAdData(e.adType, !0, a.SCROLL_VERTICAL, s.iosFilterAppIds, e.position, null, !1, e.isClockPendulum);
        }
    }
    s.ILaya.regClass(l), s.ClassUtils.regClass("zs.laya.platform.ExportScrollV", l), 
    s.ClassUtils.regClass("Zhise.ExportScrollV", l);
    class h extends s.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(e) {
            this.adList = this.owner.getChildByName("adList").addComponent(a);
            var s = t.platformCfg;
            this.adList.requestAdData(e.adType, !1, a.SCROLL_NONE, s.iosFilterAppIds, e.position, null, !1, e.isClockPendulum);
        }
    }
    s.ILaya.regClass(h), s.ClassUtils.regClass("zs.laya.platform.ExportScrollNone", h), 
    s.ClassUtils.regClass("Zhise.ExportScrollNone", h);
    class d extends s.Script {
        constructor() {
            super(), this.list = null, this.delayAnimTime = 1e3, this.animIntervalTime = 4e3, 
            this.animDuaration = 500, this.adIdx = 0, this.rotOffset = 10, this.loopTime = 2, 
            this.currentAdData = null, this.adDataArr = null, this.subAnimDuaration = 0, this.maxNum = 4;
        }
        initAd(e) {
            this.adDataArr = e, this.adIdx %= e.length, this.onItemRender(e[this.adIdx]), this.owner.timerLoop(this.delayAnimTime + this.animIntervalTime, this, this.freshAdItems);
        }
        freshAdItems() {
            this.adIdx += this.maxNum, this.adIdx %= this.adDataArr.length, this.onItemRender(this.adDataArr[this.adIdx]), 
            this.playShakeAnim(0);
        }
        playShakeAnim(e) {
            if (!(e / this.maxNum >= this.loopTime)) {
                var t = this.owner;
                switch (e % this.maxNum) {
                  case 0:
                    s.Tween.to(t, {
                        rotation: this.rotOffset
                    }, this.subAnimDuaration, s.Ease.linearNone, s.Handler.create(this, this.playShakeAnim, [ e + 1 ]));
                    break;

                  case 1:
                    s.Tween.to(t, {
                        rotation: 0
                    }, this.subAnimDuaration, s.Ease.linearNone, s.Handler.create(this, this.playShakeAnim, [ e + 1 ]));
                    break;

                  case 2:
                    s.Tween.to(t, {
                        rotation: this.rotOffset
                    }, this.subAnimDuaration, s.Ease.linearNone, s.Handler.create(this, this.playShakeAnim, [ e + 1 ]));
                    break;

                  case 3:
                    s.Tween.to(t, {
                        rotation: 0
                    }, this.subAnimDuaration, s.Ease.linearNone, s.Handler.create(this, this.playShakeAnim, [ e + 1 ]));
                }
            }
        }
        onItemRender(e) {
            if (null != e) {
                this.currentAdData = e, this.owner.visible = !0;
                var s = this.owner, t = s.getChildByName("icon");
                t && t.loadImage(e.app_icon, null);
                var i = s.getChildByName("name");
                i && (i.text = e.app_title);
                var a = s.getChildByName("desc");
                a && (a.text = e.app_desc);
            } else null == this.currentAdData && (this.owner.visible = !1);
        }
        onClick() {
            null != this.currentAdData && zs.laya.zsapp.zsAppSdk.navigate2Mini(this.currentAdData, zs.laya.platform.PlatformMgr.user_id, function() {
                s.stage.event(a.EVENT_NAVIGATE_SUCCESS);
            }, function() {
                s.stage.event(a.EVENT_NAVIGATE_FAILED);
            }, function() {}, {
                position: "index_float"
            });
        }
        onStart() {
            this.subAnimDuaration = this.animDuaration / (this.maxNum * this.loopTime);
        }
    }
    s.ILaya.regClass(d), s.ClassUtils.regClass("zs.laya.platform.ShakeExportIcon", d), 
    s.ClassUtils.regClass("Zhise.ShakeExportIcon", d);
    class c extends s.Script {
        constructor() {
            super(), this.adType = 0, this.iconScriptArr = [];
        }
        initView(e) {
            this.adType = e.adType;
            for (var s = this.owner.numChildren, t = 0; t < s; t++) {
                var i = this.owner.getChildAt(t).addComponent(d);
                i.adIdx = t, i.maxNum = s, this.iconScriptArr.push(i);
            }
            this.requestAdData();
        }
        requestAdData() {
            var e = this;
            zs.laya.zsapp.zsAppSdk.loadAd(function(t) {
                var i = t[e.adType.toString()];
                i = i.filter(function(e) {
                    return s.Browser.onAndroid || "wx48820730357d81a6" != e.appid && "wxc136d75bfc63107c" != e.appid;
                });
                for (var a = 0; a < e.iconScriptArr.length; a++) {
                    e.iconScriptArr[a].initAd(i);
                }
            });
        }
    }
    s.ILaya.regClass(c), s.ClassUtils.regClass("zs.laya.platform.ShakeExportBox", c), 
    s.ClassUtils.regClass("Zhise.ShakeExportBox", c);
    class u extends s.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = i.zs_jump_switch && i.isPublicVersion() && i.zs_history_list_jump;
        }
        onClick() {
            s.SoundManager.playSound(t.soundClick), this.owner.mouseEnabled = !1, t.showListAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    s.ILaya.regClass(u), s.ClassUtils.regClass("zs.laya.platform.FakeExitBtn", u), s.ClassUtils.regClass("Zhise.FakeExitBtn", u);
    class _ extends s.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = i.zs_jump_switch && i.isPublicVersion() && i.zs_history_list_jump;
        }
        onClick() {
            s.SoundManager.playSound(t.soundClick), this.owner.mouseEnabled = !1, t.showHomeFloatAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    s.ILaya.regClass(_), s.ClassUtils.regClass("zs.laya.platform.FloatExportBtn", _), 
    s.ClassUtils.regClass("Zhise.FloatExportBtn", _);
    class p extends s.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = i.zs_jump_switch && i.isPublicVersion() && i.zs_history_list_jump;
        }
        onClick() {
            s.SoundManager.playSound(t.soundClick), this.owner.mouseEnabled = !1, t.showScreenAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    s.ILaya.regClass(p), s.ClassUtils.regClass("zs.laya.platform.ScreenExportBtn", p), 
    s.ClassUtils.regClass("Zhise.ScreenExportBtn", p);
    class m extends s.Script {
        constructor() {
            super();
        }
        onClick() {
            console.log("openInvite"), s.SoundManager.playSound(t.soundClick), zs.laya.sdk.SdkService.openShare(zs.laya.platform.ADConfig.zs_share_title, zs.laya.platform.ADConfig.zs_share_image);
        }
    }
    s.ILaya.regClass(m), s.ClassUtils.regClass("zs.laya.platform.InviteBtn", m), s.ClassUtils.regClass("Zhise.InviteBtn", m);
    class g extends s.Script {
        constructor() {
            super();
        }
        onEnable() {
            zs.laya.sdk.SdkService.showUserInfoButton();
        }
        onDisable() {
            zs.laya.sdk.SdkService.hideUserInfoButton();
        }
        onAwake() {
            var e = this.owner, t = this.owner.parent, i = new s.Rectangle();
            i.x = (e.x + +t.x) / s.stage.width, i.y = (e.y + t.y) / s.stage.height, i.width = e.width / s.stage.width, 
            i.height = e.height / s.stage.height, zs.laya.sdk.SdkService.createUserInfoButton(i, s.Handler.create(this, this.openRank, null, !1)), 
            zs.laya.sdk.SdkService.showUserInfoButton();
        }
        onDestroy() {
            zs.laya.sdk.SdkService.hideUserInfoButton(), zs.laya.sdk.SdkService.destroyUserInfoButton();
        }
        openRank(e) {
            s.SoundManager.playSound(t.soundClick), console.log("openRank"), e && null != e.rawData && (t.showRank(), 
            zs.laya.sdk.SdkService.hideUserInfoButton());
        }
    }
    s.ILaya.regClass(g), s.ClassUtils.regClass("zs.laya.platform.RankBtn", g), s.ClassUtils.regClass("Zhise.RankBtn", g);
    class w extends s.Script {
        constructor() {
            super(), this.srcX = 0, this.adList = null, this.adCheckBox = null;
        }
        initView(e) {
            this.srcX = this.owner.x, this.adList = this.owner.getChildByName("adList").addComponent(a), 
            this.adCheckBox = this.owner.getChildByName("adCheckBox"), this.adCheckBox.on(s.Event.CLICK, this, this.updateFloatPos);
            var i = t.platformCfg;
            this.adList.requestAdData(e.adType, !0, a.SCROLL_NONE, i.iosFilterAppIds, e.position);
        }
        onDestroy() {
            this.adCheckBox.off(s.Event.CLICK, this, this.updateFloatPos);
        }
        updateFloatPos() {
            zs.laya.sdk.SdkService.hideUserInfoButton(), this.adCheckBox.mouseEnabled = !1, 
            this.adCheckBox.selected ? s.Tween.to(this.owner, {
                x: 0
            }, 500, null, s.Handler.create(this, this.onTweenCompleted)) : s.Tween.to(this.owner, {
                x: this.srcX
            }, 500, null, s.Handler.create(this, this.onTweenCompleted));
        }
        onTweenCompleted() {
            this.adCheckBox.mouseEnabled = !0, 0 == this.adCheckBox.selected && zs.laya.sdk.SdkService.showUserInfoButton();
        }
    }
    s.ILaya.regClass(w), s.ClassUtils.regClass("zs.laya.platform.ExportLeftPop", w), 
    s.ClassUtils.regClass("Zhise.ExportLeftPop", w);
    class f extends s.Script {
        constructor() {
            super(), this.adFrame = null, this.adList = null;
        }
        initView(e) {
            this.adFrame = this.owner.getChildByName("adFrame"), this.adList = this.owner.getChildByName("adList").addComponent(n);
            var s = t.platformCfg;
            this.adList.requestAdData(e.adType, !1, a.SCROLL_NONE, s.iosFilterAppIds, e.position, 9), 
            this.adList.owner.on(n.EVENT_AD_SWITCH_HIDE, this, this.onAdHide), this.adList.owner.on(n.EVENT_AD_SWITCH_SHOW, this, this.onAdShow);
        }
        onAdHide() {
            this.adList.owner.mouseEnabled = !1, s.Tween.to(this.owner, {
                x: -150
            }, 500, null, s.Handler.create(this, this.onTweenCompleted));
        }
        onAdShow() {
            this.adList.owner.mouseEnabled = !1, s.Tween.to(this.owner, {
                x: -450
            }, 500, null, s.Handler.create(this, this.onTweenCompleted));
        }
        onTweenCompleted() {
            this.adList.owner.mouseEnabled = !0;
        }
    }
    s.ILaya.regClass(f), s.ClassUtils.regClass("zs.laya.platform.ExportRightPop", f), 
    s.ClassUtils.regClass("Zhise.ExportRightPop", f);
    class C extends s.Script {
        constructor() {
            super(), this.isClick = !1, this.adData = [], this.unData = [], this.showNum = 0;
        }
        initView(e) {
            if (i.zs_jump_switch && i.isPublicVersion()) {
                this.showNum = this.owner.numChildren;
                for (var t = this, a = 0; a < this.showNum; a++) {
                    var n = this.owner.getChildByName("ad_" + a);
                    n && s.Tween.from(n, {
                        rotation: 360,
                        x: n.x - 500
                    }, 700, null, s.Handler.create(this, function() {
                        t.isClick = !0;
                    }));
                }
                var r = e.adType.toString();
                zs.laya.zsapp.zsAppSdk.loadAd(function(e) {
                    t.adData = e[r], t.freshAdBox();
                });
            } else this.owner.visible = !1;
        }
        freshAdBox() {
            var e = t.platformCfg;
            if (this.adData = this.adData.filter(function(t) {
                return s.Browser.onAndroid || -1 == e.iosFilterAppIds.indexOf(t.appid);
            }), this.adData.length < this.showNum) for (;this.adData.length < this.showNum; ) this.adData.push(this.adData[Math.floor(Math.random() * this.adData.length)]); else if (this.adData.length > this.showNum) for (;this.adData.length > this.showNum; ) {
                var i = this.adData.splice(Math.floor(Math.random() * this.adData.length), 1);
                this.unData.push(i[0]);
            }
            for (var a = 0; a < this.showNum; a++) {
                var n = this.adData[a];
                if (n) {
                    var r = this.owner.getChildByName("ad_" + a);
                    if (r) {
                        var o = r.getChildByName("icon");
                        o && o.loadImage(n.app_icon, null);
                        var l = r.getChildByName("name");
                        l && (l.text = n.app_title);
                        var h = r.getChildByName("titleBg");
                        h && (h.index = Math.floor(h.clipY * Math.random()));
                        var d = r.getChildByName("tag");
                        d && (a < 2 ? (d.visible = !0, d.index = Math.floor(d.clipY * Math.random())) : d.visible = !1), 
                        r.on(s.Event.CLICK, this, this.onBoxClick, [ a ]);
                    }
                }
            }
        }
        onBoxClick(e) {
            if (this.isClick && (zs.laya.zsapp.zsAppSdk.navigate2Mini(this.adData[e], t.userId, function() {
                s.stage.event(a.EVENT_NAVIGATE_SUCCESS);
            }, function() {
                s.stage.event(a.EVENT_NAVIGATE_FAILED);
            }, function() {}, {
                position: "game_over"
            }), this.unData.length > 0)) {
                var i = this.unData.splice(Math.floor(Math.random() * this.unData.length), 1);
                this.unData.push(this.adData.splice(e, 1, i[0])[0]);
                var n = this.owner.getChildByName("ad_" + e), r = this.adData[e];
                if (!r) return;
                if (n) {
                    var o = n.getChildByName("icon");
                    o && o.loadImage(r.app_icon, null);
                    var l = n.getChildByName("name");
                    l && (l.text = r.app_title);
                    var h = n.getChildByName("titleBg");
                    h && (h.index = Math.floor(h.clipY * Math.random()));
                    var d = n.getChildByName("tag");
                    d && (e < 2 ? (d.visible = !0, d.index = Math.floor(d.clipY * Math.random())) : d.visible = !1);
                }
            }
        }
    }
    s.ILaya.regClass(C), s.ClassUtils.regClass("zs.laya.platform.ExportLeftFlyBox", C), 
    s.ClassUtils.regClass("Zhise.ExportLeftFlyBox", C);
    class v extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.adList = null, this.closeBtn = null;
        }
        onAwake() {
            super.onAwake();
            var e, t = this.owner.getChildByName("topUI");
            t && (e = t.getChildByName("adList"), this.closeBtn = t.getChildByName("closeBtn"));
            var i = this.owner.getChildByName("middleUI");
            i && (e = e || i.getChildByName("adList"), this.closeBtn = this.closeBtn || i.getChildByName("closeBtn"));
            var n = this.owner.getChildByName("bottomUI");
            n && (this.closeBtn = this.closeBtn || n.getChildByName("closeBtn")), this.adList = e.addComponent(a), 
            this.closeBtn.on(s.Event.CLICK, this, this.closeView);
        }
        onDestroy() {
            this.closeBtn.off(s.Event.CLICK, this, this.closeView);
        }
        onStart() {
            var e = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf(".")), s = t.platformCfg.exportGameCfg[e], i = t.platformCfg;
            this.adList.requestAdData(s ? s[0].adType : "promotion", !1, a.SCROLL_NONE, i.iosFilterAppIds, s[0].position, 9);
        }
        closeView() {
            s.SoundManager.playSound(t.soundClick), t.currentView = "", this.owner.close();
        }
    }
    s.ILaya.regClass(v), s.ClassUtils.regClass("zs.laya.platform.HomeFloatAdView", v), 
    s.ClassUtils.regClass("Zhise.HomeFloatAdView", v);
    class A extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.headAdList = null, this.mainAdList = null, this.closeBtn = null, this.fakeExitBtn = null, 
            this.firstClick = !1, this.isOpenBanner = !1;
        }
        onAwake() {
            super.onAwake();
            var e, i, n = this.owner.getChildByName("topUI");
            n && (e = n.getChildByName("headAdList"), i = n.getChildByName("mainAdList"), this.closeBtn = n.getChildByName("closeBtn"), 
            this.continueBtn = n.getChildByName("continueBtn"), this.fakeExitBtn = n.getChildByName("fakeExitBtn"));
            var r = this.owner.getChildByName("middleUI");
            r && (e = e || r.getChildByName("headAdList"), i = i || r.getChildByName("mainAdList"), 
            this.closeBtn = this.closeBtn || r.getChildByName("closeBtn"), this.continueBtn = this.continueBtn || r.getChildByName("continueBtn"), 
            this.fakeExitBtn = this.fakeExitBtn || r.getChildByName("fakeExitBtn")), e && (this.headAdList = e.addComponent(a)), 
            i && (this.mainAdList = i.addComponent(a)), this.closeBtn && this.closeBtn.on(s.Event.CLICK, this, this.closeView), 
            this.fakeExitBtn && this.fakeExitBtn.on(s.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.on(s.Event.CLICK, this, this.onContinue), s.stage.on(t.APP_HIDE, this, this.onAppHide), 
            s.stage.on(t.APP_SHOW, this, this.onAppShow);
        }
        onDestroy() {
            this.closeBtn && this.closeBtn.off(s.Event.CLICK, this, this.closeView), this.fakeExitBtn && this.fakeExitBtn.off(s.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.off(s.Event.CLICK, this, this.onContinue), 
            s.stage.off(t.APP_HIDE, this, this.onAppHide), s.stage.off(t.APP_SHOW, this, this.onAppShow);
        }
        onEnable() {
            super.onEnable();
            var e = t.platformCfg.bannerCfg;
            if (e) {
                var s = e[this.viewName];
                if (s) {
                    var i = s.showData;
                    if (i) {
                        (i.sign || 0 == i.sign || 0 == i.sign) && (this.bannerGroup = zs.laya.banner.WxBannerMgr.Instance.getBannerGroup(i.sign), 
                        this.bannerGroup && this.bannerGroup.hide());
                        var a = i.moveType;
                        1 == a && (this.bannerMoveType = a);
                    } else console.error("==============initBannerGroup===============", s.showData);
                }
            }
        }
        onStart() {
            super.onStart(), this.isOpenBanner = !1, this.firstClick = !1;
            var e = t.platformCfg.exportGameCfg[this.viewName], s = e ? e[0].adType : "promotion", i = t.platformCfg;
            this.headAdList && this.headAdList.requestAdData(s, !0, a.SCROLL_HORIZONTAL, i.iosFilterAppIds, e[0].position), 
            this.mainAdList && this.mainAdList.requestAdData(s, !0, a.SCROLL_VERTICAL, i.iosFilterAppIds, e[0].position, null, !0, !1);
        }
        onAppShow() {
            this.isOpenBanner && this.bannerGroup && this.bannerGroup.hide();
        }
        onAppHide() {
            this.isOpenBanner = !0;
        }
        onContinue() {
            if (!i.zs_switch || this.firstClick) this.closeView(); else if (this.firstClick = !0, 
            this.bannerGroup) {
                var e = this;
                setTimeout(function() {
                    e.bannerGroup.updateBottonTouch(), e.bannerGroup.show();
                }, 500), setTimeout(function() {
                    e.bannerGroup.hide();
                }, 1500);
            }
        }
        closeView() {
            s.SoundManager.playSound(t.soundClick), t.currentView = "", this.owner.close();
        }
        onOpenListAd() {
            s.SoundManager.playSound(t.soundClick), t.showListAd();
        }
    }
    s.ILaya.regClass(A), s.ClassUtils.regClass("zs.laya.platform.FullScreeAdView", A), 
    s.ClassUtils.regClass("Zhise.FullScreeAdView", A);
    class y extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.adList = null, this.closeBtn = null;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("topUI");
            this.adList = e.getChildByName("adList").addComponent(a), this.closeBtn = e.getChildByName("topFrame").getChildByName("closeBtn"), 
            this.closeBtn.on(s.Event.CLICK, this, this.closeView);
            var t = this.owner.getChildByName("bottomUI").getChildByName("bottomImg");
            if (t) {
                var i = t.getChildByName("backHomeBtn");
                i && i.on(s.Event.CLICK, this, this.closeView);
                var n = t.getChildByName("continueBtn");
                n && n.on(s.Event.CLICK, this, this.closeView);
            }
        }
        onDestroy() {
            this.closeBtn.off(s.Event.CLICK, this, this.closeView);
        }
        onStart() {
            var e = t.platformCfg.exportGameCfg[this.viewName], s = t.platformCfg;
            this.adList.requestAdData(e ? e[0].adType : "promotion", !1, a.SCROLL_VERTICAL, s.iosFilterAppIds, e.position, null, !0);
        }
        closeView() {
            s.SoundManager.playSound(t.soundClick), t.currentView = "", this.owner.close();
        }
    }
    s.ILaya.regClass(y), s.ClassUtils.regClass("zs.laya.platform.ListAdView", y), s.ClassUtils.regClass("Zhise.ListAdView", y);
    class E extends zs.laya.base.ZhiSeView {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.initData();
            var e = this.owner.getChildByName("bottomUI");
            e && (this.btn_repair = e.getChildByName("eggBtn"));
            var i = this.owner.getChildByName("middleUI");
            this.eggUI = i.getChildByName("eggUI"), this.eggUI && (this.btn_repair || (this.btn_repair = this.eggUI.getChildByName("eggBtn")), 
            this.progressBar = this.eggUI.getChildByName("loading_1"), this.progressWidth = this.progressBar.bitmap.width, 
            this.progressHeight = this.progressBar.bitmap.height), this.bannerMoveType = 0, 
            this.initCfg(), s.stage.on(t.APP_HIDE, this, this.onAppHide), s.stage.on(t.APP_SHOW, this, this.onAppShow), 
            this.btn_repair && (this.btn_repair.on(s.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.on(s.Event.MOUSE_UP, this, this.clickHammer)), this.hammerAni = this.owner.knockAni;
        }
        initCfg() {
            this.knockEggCfg = s.loader.getRes("config/KnockEggCfg.json"), this.awardDelay = 1e3, 
            this.closeDelay = 1e3, this.knockEggCfg && (zs.laya.MiscUtils.IsNumber(this.knockEggCfg.awardDelay) && (this.awardDelay = Number(this.knockEggCfg.awardDelay)), 
            zs.laya.MiscUtils.IsNumber(this.knockEggCfg.closeDelay) && (this.closeDelay = Number(this.knockEggCfg.closeDelay)));
        }
        isShowAward() {
            return this.knockEggCfg && this.knockEggCfg.isShowAward;
        }
        onTouchStart(e) {
            this.lastMouseX = s.stage.mouseX, this.lastMouseY = s.stage.mouseY;
        }
        initData() {
            this.btn_repair = null, this.progressBar = null, this.hammerAni = null, this.egg = null, 
            this.touchNode = null, this.repairProgress = 0, this.click_add_percent = .14, this.isOpenAd = !1, 
            this.repair_click_num = [ .3, .7 ], this.showBannerRange = 1, this.isGetAward = !1, 
            this.callback = null;
        }
        onEnable() {
            super.onEnable(), this.initBannerGroup(), this.initRepair();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            this.removeEvent(), super.onDestroy();
        }
        removeEvent() {
            s.timer.clear(this, this.cutBack), s.stage.off(t.APP_HIDE, this, this.onAppHide), 
            s.stage.off(t.APP_SHOW, this, this.onAppShow), this.btn_repair && (this.btn_repair.off(s.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.off(s.Event.MOUSE_UP, this, this.clickHammer));
        }
        onAppHide() {
            this.isOpenAd && (this.btn_repair && (this.btn_repair.off(s.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.off(s.Event.MOUSE_UP, this, this.clickHammer)), this.isOpenAd = !0, 
            s.timer.clear(this, this.resetIsOpenAd), s.timer.clear(this, this.cutBack), this.isShowAward() || this.onFinish());
        }
        initBannerGroup() {
            var e = t.platformCfg.bannerCfg;
            if (e) {
                var s = e[this.viewName];
                if (s) {
                    var i = s.showData;
                    if (i) {
                        (i.sign || 0 == i.sign || 0 == i.sign) && (this.bannerGroup = zs.laya.banner.WxBannerMgr.Instance.getBannerGroup(i.sign), 
                        this.bannerGroup && this.bannerGroup.hide());
                        var a = i.moveType;
                        1 == a && (this.bannerMoveType = a);
                    } else console.error("==============initBannerGroup===============", s.showData);
                }
            }
        }
        onAppShow() {
            this.isOpenAd && (this.bannerGroup && this.bannerGroup.hide(), this.isShowAward() && this.onFinish());
        }
        initRepair() {
            this.isGetAward = !1, i.openEggTimes = zs.laya.MiscUtils.IsNumber(i.openEggTimes) ? Number(i.openEggTimes) + 1 : 1, 
            s.timer.loop(20, this, this.cutBack), i.zs_click_award_percent.indexOf("[") >= 0 ? this.repair_click_num = JSON.parse(i.zs_click_award_percent) : this.repair_click_num = i.zs_click_award_percent.split(","), 
            this.click_add_percent = i.zs_click_award_add, this.zs_click_award_back = i.zs_click_award_back, 
            this.click_add_percent = .01 * zs.laya.MiscUtils.random(.9 * this.click_add_percent * 100, 1.1 * this.click_add_percent * 100), 
            console.log("===============repair_click_num=====================", this.repair_click_num), 
            this.showBannerRange = .01 * zs.laya.MiscUtils.random(100 * Number(this.repair_click_num[0]), 100 * Number(this.repair_click_num[1]));
        }
        setCloseCallback(e) {
            this.callback = e;
        }
        clickHammer() {
            if (this.repairProgress + this.click_add_percent <= 1) {
                if (this.updateRepairPorgress(this.repairProgress + this.click_add_percent), this.hammerAni && this.hammerAni.play(0, !1), 
                this.repairProgress >= this.showBannerRange && !this.isOpenAd) {
                    switch (this.isOpenAd = !0, this.bannerMoveType) {
                      case 1:
                        this.bannerGroup && this.bannerGroup.updateY(this.lastMouseY);
                        break;

                      default:
                        this.bannerGroup && this.bannerGroup.updateBottonTouch();
                    }
                    this.bannerGroup && this.bannerGroup.show(), s.timer.once(800, this, this.resetIsOpenAd), 
                    s.timer.once(800, this, function() {
                        this.initBannerGroup(), this.bannerGroup && this.bannerGroup.hide();
                    });
                }
            } else this.updateRepairPorgress(this.repairProgress + this.click_add_percent), 
            this.bannerGroup && this.bannerGroup.hide(), s.timer.clear(this, this.cutBack), 
            s.timer.clear(this, this.resetIsOpenAd), this.onFinish();
        }
        resetIsOpenAd() {
            this.isOpenAd = !1;
        }
        onFinish() {
            if (!this.isGetAward) {
                var e = s.LocalStorage.getItem("open_award_num") || 0;
                s.LocalStorage.setItem("open_award_num", Number(e) + 1), this.isGetAward = !0, s.timer.once(this.awardDelay, this, function() {
                    s.stage.event(t.EGG_GET_AWARD);
                }), s.timer.once(Math.max(this.closeDelay, this.awardDelay + 40), this, this.onClose);
            }
        }
        onClose() {
            console.log("====================关闭金蛋=================="), this.callback && this.callback(), 
            this.bannerGroup && this.bannerGroup.hide(), t.currentView = "", this.owner.close();
        }
        updateRepairPorgress(e) {
            this.repairProgress = Math.min(1, Math.max(0, e)), this.progressWidth < this.progressHeight ? this.progressBar && (this.progressBar.height = this.progressBar.clipHeight = Math.max(1, this.progressHeight * this.repairProgress)) : this.progressBar && (this.progressBar.width = Math.max(1, this.progressWidth * this.repairProgress));
        }
        cutBack() {
            this.repairProgress -= this.zs_click_award_back, this.updateRepairPorgress(this.repairProgress);
        }
    }
    s.ILaya.regClass(E), s.ClassUtils.regClass("zs.laya.platform.KnockEggView", E), 
    s.ClassUtils.regClass("Zhise.KnockEggView", E);
    class S extends zs.laya.base.ZhiSeView {
        constructor() {
            S.__super.call(this), this.closeBtn = null, this.openView = null;
        }
        onAwake() {
            super.onAwake(), this.openView = this.owner.getChildByName("fullUI"), this.closeBtn = this.owner.getChildByName("closeBtn");
        }
        onEnable() {
            zs.laya.sdk.SdkService.hideUserInfoButton();
        }
        onDisable() {
            zs.laya.sdk.SdkService.showUserInfoButton();
        }
        onStart() {}
        onDestroy() {
            this.closeBtn && this.closeBtn.off(s.Event.CLICK, this, this.closeRank);
        }
        closeRank() {
            s.Browser.onMiniGame && this.openView.postMsg(new zs.laya.opendata.MainScopeMsg(zs.laya.opendata.EventDefine.CloseRank)), 
            t.hideRank(), s.SoundManager.playSound(t.soundClick);
        }
        onRankDataReady(e, s, t, i) {}
    }
    S.AtlasURL = "res/atlas/rankUI.atlas", s.ILaya.regClass(S), s.ClassUtils.regClass("zs.laya.platform.RankView", S), 
    s.ClassUtils.regClass("Zhise.RankView", S);
    class I extends s.Script {
        constructor() {
            super(), this.args = null, this.adView = null;
        }
        onDestroy() {
            if (this.adView) {
                var e = this.getViewScript(this.args.scriptType);
                null == e && (e = b);
                var s = this.adView.getComponent(e);
                s && s.releaseView(), this.adView.removeSelf(), this.adView = null;
            }
        }
        onStart() {
            if (this.adView) this.adView.visible = !0; else if (!(zs.laya.zsapp.zsAppSdk.Instance && zs.laya.zsapp.zsAppSdk.Instance.isFromLink() && 0 == zs.laya.zsapp.zsAppSdk.Instance.isExportValid() || 0 == i.zs_jump_switch || 0 == i.isPublicVersion())) {
                var e = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                this.args = t.platformCfg.nativeAdCfg[e], this.args && s.loader.create(this.args.viewUrl, s.Handler.create(this, this.onPrefabReady), null, s.Loader.PREFAB);
            }
        }
        onPrefabReady(e) {
            if (!this.destroyed) if (this.owner.getChildByName(this.args.parentRoot)) {
                this.adView = e.create(), this.owner.getChildByName(this.args.parentRoot).addChild(this.adView), 
                this.adView.x = this.args.x, this.adView.y = this.args.y;
                var s = this.getViewScript(this.args.scriptType);
                null == s && (s = b);
                var t = this.adView.getComponent(s);
                null == t && (t = this.adView.addComponent(s)), t.initView(this.args);
            } else console.log(viewName + " page parentRoot " + this.args.parentRoot + " is null");
        }
        getViewScript(e) {
            switch (e) {
              case "NativeIconAdView":
                return b;
            }
        }
    }
    s.ILaya.regClass(I), s.ClassUtils.regClass("zs.laya.platform.NativeAdsCtrl", I), 
    s.ClassUtils.regClass("Zhise.NativeAdsCtrl", I);
    class b extends s.Script {
        constructor() {
            super(), this.gameIcon = null, this.config = null, this.maskViewNum = 0, this.iconReady = !1;
        }
        initView(e) {
            this.config = e, this.maskViewNum = 0, this.iconReady = !1;
            for (var i = s.stage.getChildByName("root"), a = i.numChildren - 1; a >= 0; a--) {
                var n = i.getChildAt(a);
                n.zOrder && n.zOrder > this.owner.zOrder && this.maskViewNum++, console.log("stage:" + n.name);
            }
            s.stage.on(t.UI_VIEW_OPENED, this, this.onViewOpened), s.stage.on(t.UI_VIEW_CLOSED, this, this.onViewClosed);
        }
        onStart() {
            var e = [], s = "undefined" != typeof wx;
            if (0 != s) {
                var t = wx.getSystemInfoSync();
                if (s = zs.laya.MiscUtils.compareVersion(t.SDKVersion, "2.8.2") >= 0, this.owner.visible = s, 
                0 != s && (this.updateIconStyle(e, t), 0 != e.length && (console.log(e), this.gameIcon = wx.createGameIcon({
                    adUnitId: i.response[this.config.idKey],
                    count: e.length,
                    style: e
                }), this.gameIcon))) {
                    console.log("load gameIcon");
                    var a = this;
                    this.gameIcon.onError(function(e) {
                        console.error(e), a.gameIcon = null;
                    }), this.gameIcon.load(), this.gameIcon.onLoad(function() {
                        console.log("gameIcon loaded"), a.iconReady = !0, 0 == a.maskViewNum && a.owner.visible && a.gameIcon.show();
                    });
                }
            }
        }
        onEnable() {
            this.gameIcon && this.gameIcon.show();
        }
        onDisable() {
            this.gameIcon && this.gameIcon.hide();
        }
        updateIconStyle(e, t) {
            var i = this.owner.getChildByName("container");
            if (null != i) for (var a = 0; a < i.numChildren; a++) {
                const r = i.getChildAt(a);
                r.visible = !1;
                var n = this.owner.localToGlobal(new s.Point(r.x, r.y), !0);
                e.push({
                    appNameHidden: !0,
                    color: "white",
                    borderWidth: 1,
                    borderColor: "white",
                    top: n.y / s.stage.height * t.windowHeight,
                    left: n.x / s.stage.width * t.windowWidth,
                    size: r.width / s.stage.width * t.windowWidth
                });
            }
        }
        releaseView() {
            this.maskViewNum = -1, s.stage.off(t.UI_VIEW_OPENED, this, this.onViewOpened), s.stage.off(t.UI_VIEW_CLOSED, this, this.onViewClosed), 
            this.gameIcon && (this.gameIcon.destroy(), this.gameIcon = null);
        }
        onViewOpened(e, s) {
            s.zOrder > this.owner.zOrder && this.maskViewNum++, 0 != this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.hide();
        }
        onViewClosed(e, s) {
            s.zOrder > this.owner.zOrder && this.maskViewNum--, 0 == this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.show();
        }
    }
    s.ILaya.regClass(b), s.ClassUtils.regClass("zs.laya.platform.NativeIconAdView", b), 
    s.ClassUtils.regClass("Zhise.NativeIconAdView", b);
    class z extends s.Script {
        constructor() {
            super();
        }
        onAwake() {
            if (1 == i.isPublicVersion()) {
                var e = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf(".")), s = t.platformCfg.mistakenlyTouchCfg[e];
                if (s) for (var a = 0; a < s.length; a++) {
                    const e = s[a], t = this.findChildByPath(e.path);
                    var n = t.x, r = t.y;
                    if (i.zs_switch) {
                        var o = e.showType || "move";
                        "move" == o && i.zs_banner_vertical_enable ? (t.mouseEnabled = !1, t.x += e.offsetX, 
                        t.y += e.offsetY, this.owner.timerOnce(i.zs_banner_text_time, this, this.moveBack, [ n, r, i.zs_banner_move_time, t ], !1)) : "delay" == o && i.zs_button_delay_switch ? (t.mouseEnabled = !1, 
                        t.visible = !1, this.owner.timerOnce(i.zs_button_delay_time, this, this.showObj, [ t ], !1)) : i.zs_unmiss_text_time > 0 && (t.mouseEnabled = !1, 
                        t.visible = !1, this.owner.timerOnce(i.zs_unmiss_text_time, this, this.showObj, [ t ], !1));
                    }
                }
            }
        }
        moveBack(e, t, i, a) {
            s.Tween.to(a, {
                x: e,
                y: t
            }, i, null, s.Handler.create(this, this.activeObj, [ a ]));
        }
        activeObj(e) {
            e.mouseEnabled = !0;
        }
        showObj(e) {
            e.visible = !0, e.mouseEnabled = !0;
        }
        findChildByPath(e) {
            for (var s = e.split("/"), t = this.owner, i = 0; i < s.length; i++) t = t.getChildByName(s[i]);
            return t;
        }
    }
    s.ILaya.regClass(z), s.ClassUtils.regClass("zs.laya.platform.MistakenlyTouchCtrl", z), 
    s.ClassUtils.regClass("Zhise.MistakenlyTouchCtrl", z);
    class k extends s.Script {
        onEnable() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
            var e = t.platformCfg.bannerCfg, a = zs.laya.banner.WxBannerMgr.Instance;
            if (e) {
                var n = e[this.viewName];
                if (n) {
                    var r = n.initGroupArr;
                    if (r) {
                        console.log("setAdUnitId:", i.zs_banner_rotate_id1, i.zs_banner_rotate_id2, i.zs_banner_rotate_id3), 
                        a.setAdUnitId(i.zs_banner_rotate_id1, i.zs_banner_rotate_id2, i.zs_banner_rotate_id3);
                        for (var o = a.adUnitIdData.length, l = 0; l < r.length; l++) {
                            const e = r[l];
                            a.initBannerGroupBySign(o <= 1 ? 0 : e.sign, e.length, e.autoChange, e.isReset);
                        }
                    }
                    o = a.adUnitIdData.length;
                    console.log("==================", this.viewName, "bannercfg:", o, "=================", n);
                    var h = n.showData;
                    if (h) if (a.hideAllShow(), (!h.checkKey || h.checkKey && i[h.checkKey]) && !h.unAutoShow && (h.sign || 0 == h.sign || 0 == h.sign)) {
                        var d = a.getBannerGroup(o <= 1 ? 0 : h.sign);
                        h.isDelay && i.zs_banner_banner_time ? s.timer.once(i.zs_banner_banner_time, this, this.showBanner, [ d ]) : this.showBanner(d);
                    }
                    var c = n.exposureData;
                    if (c && o > 1) {
                        if (1 == n.pageType) {
                            if (!i.zs_full_screen_rotate) return;
                            a.lockHideExposure();
                        }
                        if (c.sign || 0 == c.sign || 0 == c.sign) {
                            d = a.getBannerGroup(c.sign);
                            var u = c.anchorArr;
                            if (u) for (l = 0; l < u.length; l++) {
                                const e = u[l];
                                d && d.showExposure(zs.laya.banner.WxBanner[e]);
                            }
                        }
                    }
                    n.lockHide && a.lockHide();
                }
            }
        }
        showBanner(e) {
            e && e.updateBottonTouch(), e && e.show();
        }
        onDisable() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
            var e = t.platformCfg.bannerCfg, i = zs.laya.banner.WxBannerMgr.Instance;
            if (e) {
                var a = e[this.viewName], n = i.adUnitIdData.length;
                if (a) {
                    var r = a.showData;
                    if (r) if (r.sign || 0 == r.sign || 0 == r.sign) s.timer.clear(this, this.showBanner), 
                    (l = i.getBannerGroup(n <= 1 ? 0 : r.sign)) && l.hide();
                    var o = a.exposureData;
                    if (o && n > 1) {
                        var l;
                        if (1 == a.pageType) {
                            if (!zs.laya.platform.ADConfig.zs_full_screen_rotate) return;
                            i.hideResumeExposure();
                        }
                        if (o.sign || 0 == o.sign || 0 == o.sign) (l = i.getBannerGroup(o.sign)) && l.hideExposure();
                    }
                    a.lockHide && i.hideResume();
                }
            }
        }
    }
    s.ILaya.regClass(k), s.ClassUtils.regClass("zs.laya.platform.BannerCtrl", k), s.ClassUtils.regClass("Zhise.BannerCtrl", k), 
    e.PlatformMgr = t, e.ADConfig = i, e.ExportGameCtrl = r, e.NativeAdsCtrl = I, e.MistakenlyTouchCtrl = z, 
    e.BannerCtrl = k;
}(window.zs.laya.platform = window.zs.laya.platform || {}, Laya);