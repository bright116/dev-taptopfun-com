window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(t, e) {
    "use strict";
    class i extends e.Script {
        constructor() {
            super();
        }
        static setUserID(t, e) {
            i.user_id = t, i.is_new = e;
        }
        static initCFG(t) {
            this.platformCfg = t, this.adViewUrl = {
                screenAd: "view/ad/FullAd_4.scene",
                floatAd: "view/ad/FloatAd.scene",
                listAd: "view/ad/FullAd.scene",
                knockEggAd: "view/ad/KnockEgg.scene",
                challenge: "view/ad/ChallengePage.scene"
            }, this.adViewScript = {
                screenAd: I,
                floatAd: S,
                listAd: k,
                knockEggAd: D,
                challenge: y
            }, this.currentView = "";
        }
        static initSoundUrl(t, e) {
            this.openSound = t, this.clickSound = e;
        }
        static initGameAd() {
            zs.laya.sdk.SdkService.initVideoAd(a.zs_video_adunit), zs.laya.sdk.SdkService.initInsertAd(a.zs_full_screen_adunit, null), 
            zs.laya.sdk.SdkService.initCustomeAd(a.adUnitId1, a.adUnitId2, a.adUnitId3, a.adUnitId4, a.adUnitId5), 
            zs.laya.banner.WxBannerMgr.Instance.setAdUnitId(a.zs_banner_rotate_id1, a.zs_banner_rotate_id2, a.zs_banner_rotate_id3);
        }
        static enterGamePopup(t) {
            a.zs_jump_switch && a.isPublicVersion() && a.zs_Fakerjump && a.zs_game_star_jump_switch ? (i.showListAd(), 
            e.stage.on(i.UI_VIEW_CLOSED, i, i.checkEnter, [ t ])) : t && t.run();
        }
        static checkEnter(t, s) {
            "FullAd" == s && (i.showScreenAd(), e.stage.on(i.UI_VIEW_CLOSED, i, i.enterOver, [ t ]), 
            e.stage.off(i.UI_VIEW_CLOSED, i, i.checkEnter));
        }
        static enterOver(t, s) {
            "FullAd_4" == s && (t && t.run(), e.stage.off(i.UI_VIEW_CLOSED, i, i.enterOver));
        }
        static onGameFaildPopUp(t) {
            a.isBeforeGameAccount() ? (e.stage.on(i.UI_VIEW_CLOSED, null, i.onHideExportView, [ 0, t ]), 
            i.showListAd()) : e.stage.event(i.OPEN_FAILED_VIEW, [ t ]);
        }
        static onGameWinPopUp(t) {
            a.isBeforeGameAccount() ? (i.showListAd({
                isShowVideo: !0
            }), e.stage.on(i.UI_VIEW_CLOSED, null, i.onHideExportView, [ 1, t ])) : e.stage.event(i.OPEN_WIN_VIEW, [ t ]);
        }
        static onHideExportView(t, s, n) {
            if ("FullAd" == n) 0 == t ? e.stage.event(i.OPEN_FAILED_VIEW, [ s ]) : 1 == t && e.stage.event(i.OPEN_WIN_VIEW, [ s ]), 
            e.stage.off(i.UI_VIEW_CLOSED, null, i.onHideExportView); else if (("FullAd_1" == n || "FullAd_4" == n) && 2 == t && s.viewName == n) {
                e.stage.event(i.GAME_RESET_START), e.stage.off(i.UI_VIEW_CLOSED, null, i.onHideExportView);
                var r = !!s.isBackHome && s.isBackHome;
                a.isPublicVersion() && a.zs_switch && a.zs_auto_pop_ups_switch && r && i.showHomeFloatAd();
            }
        }
        static onGameOverPopUp(t) {
            if (a.isAfterGameAccount()) {
                var s = i.adViewUrl.screenAd;
                s = s.substring(s.lastIndexOf("/") + 1, s.lastIndexOf(".")), e.stage.on(i.UI_VIEW_CLOSED, null, i.onHideExportView, [ 2, {
                    viewName: s,
                    isBackHome: t.isBackHome
                } ]), i.showScreenAd(t);
            } else e.stage.event(i.GAME_RESET_START);
            zs.laya.platform.ADConfig.updateGameNum();
        }
        static showInsertAd() {
            if (a.zs_full_screen_ad_enable) {
                var t = e.LocalStorage.getItem("zs_full_screen_ad_time_stamp");
                if (null == t || "" == t || 0 == s.isToday(Number(t))) {
                    zs.laya.sdk.SdkService.loadInsertAd(e.Handler.create(null, function() {
                        zs.laya.sdk.SdkService.showInsertAd(null), e.LocalStorage.setItem("zs_full_screen_ad_time_stamp", Date.now().toString());
                    }), null);
                }
            }
        }
        static onExportJumpCancel() {
            a.zs_jump_switch && a.isPublicVersion() && a.zs_full_screen_jump && a.zs_slide_jump_switch && i.showScreenAd();
        }
        static initView(t, i, s) {
            if (t instanceof e.View && (t._gameData = s, i)) {
                var a = t.getComponent(i);
                null == a && (a = t.addComponent(i)), a.initView && a.initView(s);
            }
        }
        static showScreenAd(t) {
            this.currentView != this.adViewUrl.screenAd && (null != this.adViewUrl.screenAd ? (this.currentView = this.adViewUrl.screenAd, 
            e.Scene.open(this.adViewUrl.screenAd, !1, t, e.Handler.create(this, function(e) {
                this.initView(e, this.adViewScript.screenAd, t);
            })), e.SoundManager.playSound(this.openSound)) : console.error("showScreenAd error"));
        }
        static hideScreenAd() {
            null != this.adViewUrl.screenAd && (this.currentView = "", e.Scene.close(this.adViewUrl.screenAd));
        }
        static showListAd(t) {
            this.currentView != this.adViewUrl.listAd && (null != this.adViewUrl.listAd ? (this.currentView = this.adViewUrl.listAd, 
            e.Scene.open(this.adViewUrl.listAd, !1, t, e.Handler.create(this, function(i) {
                "view/ad/FullAd.scene" == this.adViewUrl.listAd && t && t.isShowVideo && e.timer.once(zs.laya.platform.ADConfig.zs_Video_Display_Time, this, () => {
                    zs.laya.platform.ADConfig.isPublicVersion() && zs.laya.platform.ADConfig.zs_switch && zs.laya.platform.ADConfig.zs_Screen_video_switch > 0 && (zs.laya.sdk.SdkService.playVideo(e.Handler.create(this, () => {
                        console.log("全屏界面视频完成");
                    }), e.Handler.create(this, () => {
                        console.log("全屏界面视频中断");
                    }), e.Handler.create(this, () => {
                        console.log("暂未拉取到全屏界面视频");
                    })), zs.laya.platform.ADConfig.zs_Screen_video_switch -= 1);
                }), this.initView(i, this.adViewScript.listAd, t);
            })), e.SoundManager.playSound(this.openSound)) : console.error("showListAd error"));
        }
        static hideListAd() {
            null != this.adViewUrl.listAd && (this.currentView = "", e.Scene.close(this.adViewUrl.listAd));
        }
        static showHomeFloatAd(t) {
            this.currentView != this.adViewUrl.floatAd && (null != this.adViewUrl.floatAd ? (this.currentView = this.adViewUrl.floatAd, 
            e.Scene.open(this.adViewUrl.floatAd, !1, t, e.Handler.create(this, function(e) {
                this.initView(e, this.adViewScript.floatAd, t);
            })), e.SoundManager.playSound(this.openSound)) : console.error("showHomeFloatAd error"));
        }
        static hideHomeFloatAd() {
            null != this.adViewUrl.floatAd && (this.currentView = "", e.Scene.close(this.adViewUrl.floatAd));
        }
        static showKnockEggView(t) {
            this.currentView != this.adViewUrl.knockEggAd && (null != this.adViewUrl.knockEggAd ? (this.currentView = this.adViewUrl.knockEggAd, 
            e.Scene.open(this.adViewUrl.knockEggAd, !1, t, e.Handler.create(this, function(i) {
                zs.laya.platform.ADConfig.isPublicVersion() && zs.laya.platform.ADConfig.zs_switch && zs.laya.platform.ADConfig.zs_Screen_video_switch > 0 && e.timer.once(zs.laya.platform.ADConfig.zs_Video_Display_Time, this, () => {
                    zs.laya.sdk.SdkService.playVideo(e.Handler.create(this, () => {
                        console.log("全屏界面视频完成");
                    }), e.Handler.create(this, () => {
                        console.log("全屏界面视频中断");
                    }), e.Handler.create(this, () => {
                        console.log("暂未拉取到全屏界面视频");
                    })), zs.laya.platform.ADConfig.zs_Screen_video_switch -= 1;
                }), this.initView(i, this.adViewScript.knockEggAd, t);
            }))) : console.error("knockEggAd error"));
        }
        static hideKnockEggAd() {
            null != this.adViewUrl.knockEggAd && (this.currentView = "", e.Scene.close(this.adViewUrl.knockEggAd));
        }
        static showChallengeView(t) {
            this.currentView != this.adViewUrl.challenge && (null != this.adViewUrl.challenge ? (this.currentView = this.adViewUrl.challenge, 
            e.Scene.open(this.adViewUrl.challenge, !1, t, e.Handler.create(this, function(e) {
                this.initView(e, this.adViewScript.challenge, t);
            }))) : console.error("challenge error"));
        }
        static hideKnockEggAd() {
            null != this.adViewUrl.challenge && (this.currentView = "", e.Scene.close(this.adViewUrl.challenge));
        }
    }
    i.platformCfg = null, i.user_id = 1, i.is_new = 1, i.APP_SHOW = "DEVICE_ON_SHOW", 
    i.APP_HIDE = "DEVICE_ON_HIDE", i.AD_CONFIIG_LOADED = "AD_CONFIIG_LOADED", i.UI_VIEW_OPENED = "UI_VIEW_OPENED", 
    i.UI_VIEW_CLOSED = "UI_VIEW_CLOSED", i.OPEN_WIN_VIEW = "OPEN_WIN_VIEW", i.OPEN_FAILED_VIEW = "OPEN_FAILED_VIEW", 
    i.GAME_RESET_START = "GAME_RESET_START", i.EGG_GET_AWARD = "EGG_GET_AWARD", e.ILaya.regClass(i), 
    e.ClassUtils.regClass("zs.laya.platform.PlatformMgr", i), e.ClassUtils.regClass("Zhise.PlatformMgr", i);
    class s {
        static compareVersion(t, e) {
            t = t.split("."), e = e.split(".");
            for (var i = Math.max(t.length, e.length); t.length < i; ) t.push("0");
            for (;e.length < i; ) e.push("0");
            for (var s = 0; s < i; s++) {
                var a = parseInt(t[s]), n = parseInt(e[s]);
                if (a > n) return 1;
                if (a < n) return -1;
            }
            return 0;
        }
        static isToday(t) {
            var e = new Date(Date.now()), i = new Date(t);
            return e.getFullYear() == i.getFullYear() && e.getMonth() == i.getMonth() && e.getDate() == i.getDate();
        }
        static random(t, e) {
            return Math.random() * (e - t) + t << 0;
        }
        static IsNumber(t) {
            return !(!/^\d+(\.\d+)?$/.test(t) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(t));
        }
    }
    class a {
        constructor() {
            this.current_version = "1.0";
        }
        static initAdSetting(t, i) {
            this.current_version = t, this.response = i;
            var n = i.zs_banner_system ? String(i.zs_banner_system).toUpperCase() : null;
            this.zs_version = i.zs_number ? i.zs_number : "0.0";
            var r = !n || !e.Browser.onMobile || !(-1 != n.indexOf("ANDROID") && e.Browser.onAndroid || -1 != n.indexOf("IOS") && !e.Browser.onAndroid);
            this.zs_switch = 1 == i.zs_switch && r && this.isPublicVersion(), this.egg_switch = 1 == i.zs_switch && this.isPublicVersion(), 
            this.zs_video_adunit = i.zs_video_adunit, this.zs_banner_adunit = i.zs_banner_adunit, 
            this.zs_full_screen_adunit = i.zs_full_screen_adunit, this.zs_full_screen_ad_enable = 1 == i.zs_full_screen_ad, 
            this.zs_banner_text_time = i.zs_banner_text_time ? Number(i.zs_banner_text_time) : 1e3, 
            this.zs_banner_banner_time = i.zs_banner_banner_time ? Number(i.zs_banner_banner_time) : 1e3, 
            this.zs_banner_refresh_time = i.zs_banner_refresh_time ? Number(i.zs_banner_refresh_time) : 1e3, 
            this.zs_banner_move_time = i.zs_banner_move_time ? Number(i.zs_banner_move_time) : 1e3, 
            this.zs_banner_vertical_enable = 1 == i.zs_banner_vertical_enable, this.zs_banner_horizontal_enable = 1 == i.zs_banner_horizontal_enable, 
            this.zs_share_title = i.zs_share_title, this.zs_share_image = i.zs_share_img, this.zs_shield_gdt_export = 1 == i.zs_shield_gdt_export, 
            this.zs_jump_switch = 1 == i.zs_jump_switch && (0 == zs.laya.sdk.ZSReportSdk.Instance.isFromLink() || this.zs_shield_gdt_export), 
            this.zs_revive_type = i.zs_revive_type, this.zs_revive_click_num = i.zs_revive_click_num, 
            this.zs_revive_video_num = i.zs_revive_video_num, this.zs_revive_share_num = i.zs_revive_share_num, 
            this.zs_full_screen_jump = 1 == i.zs_full_screen_jump, this.zs_history_list_jump = 1 == i.zs_history_list_jump, 
            this.zs_finish_jump = 1 == i.zs_finish_jump, this.repair_click_num = this.zs_click_award_percent = i.zs_click_award_percent || [ .3, .7 ], 
            this.zs_click_award_back = i.zs_click_award_back ? Number(i.zs_click_award_back) : .00423, 
            this.zs_click_award_num = s.IsNumber(i.zs_click_award_num) ? i.zs_click_award_num : i.zs_click_award_num || 0, 
            this.zs_click_award_add = i.zs_click_award_add || .1, this.zs_ready_click_num = s.IsNumber(i.zs_ready_click_num) ? i.zs_ready_click_num : i.zs_ready_click_num || 0, 
            this.zs_revive_countdown = i.zs_revive_countdown ? Number(i.zs_revive_countdown) : 10, 
            this.zs_jump_style = i.zs_jump_style ? Number(i.zs_jump_style) : 0, this.zs_banner_rotate_id1 = i.zs_banner_rotate_id1, 
            this.zs_banner_rotate_id2 = i.zs_banner_rotate_id2, this.zs_banner_rotate_id3 = i.zs_banner_rotate_id3, 
            this.zs_click_award_system = i.zs_click_award_system, this.zs_banner_show_number = this.getNumberVal(i.zs_banner_show_number, 2), 
            this.zs_full_screen_rotate = 1 == this.getNumberVal(i.zs_full_screen_rotate, 0), 
            this.zs_unmiss_text_time = this.getNumberVal(i.zs_unmiss_text_time, 0), this.zs_button_delay_time = this.getNumberVal(i.zs_button_delay_time, 2e3), 
            this.zs_button_delay_switch = 1 == this.getNumberVal(i.zs_button_delay_switch, 0), 
            this.zs_game_banner_show_switch = 1 == this.getNumberVal(i.zs_game_banner_show_switch, 0), 
            this.zs_before_finsh_jump_switch = 1 == this.getNumberVal(i.zs_before_finsh_jump_switch, 0), 
            this.zs_slide_jump_switch = 1 == this.getNumberVal(i.zs_slide_jump_switch, 0), this.zs_auto_pop_ups_switch = 1 == this.getNumberVal(i.zs_slide_jump_switch, 0), 
            this.zs_show_share_num = i.zs_show_share_num ? i.zs_show_share_num : 0, this.zs_start_game_video_switch = 1 == i.zs_start_game_video_switch, 
            this.zs_auto_pop_ups_switch = 1 == this.getNumberVal(i.zs_auto_pop_ups_switch, 0), 
            this.zs_auto_full_screen_jump_switch = 1 == i.zs_auto_full_screen_jump_switch, this.zs_auto_jump_switch = 1 == i.zs_auto_jump_switch, 
            this.zs_friends_playing_switch = 1 == i.zs_friends_playing_switch, this.zs_reminder_switch = 1 == i.zs_reminder_switch, 
            this.zs_finish_switch = 1 == i.zs_finish_switch, this.zs_false_news_switch = 1 == i.zs_false_news_switch, 
            this.zs_Fakerjump = 1 == i.zs_Fakerjump, this.zs_full_screen_banner_time = Number(i.zs_full_screen_banner_time) ? Number(i.zs_full_screen_banner_time) : 0, 
            this.zs_game_star_jump_switch = 1 == i.zs_game_star_jump_switch && this.zs_switch, 
            this.zs_Screen_video_switch = Number(i.zs_Screen_video_switch) ? Number(i.zs_Screen_video_switch) : 0, 
            this.zs_Video_Display_Time = Number(i.zs_Video_Display_Time) ? Number(i.zs_Video_Display_Time) : 0, 
            this.adUnitId1 = i.zs_native_adunit, this.adUnitId2 = i.zs_native_adunit2, this.adUnitId3 = i.zs_native_adunit3, 
            this.adUnitId4 = i.zs_native_adunit4, this.adUnitId5 = i.zs_native_adunit5, "undefined" != typeof wx && wx.onShareAppMessage(function() {
                return {
                    title: a.zs_share_title,
                    imageUrl: a.zs_share_image
                };
            }), this.initOpenAwardNum();
        }
        static getNumberVal(t, e) {
            return e = s.IsNumber(e) ? Number(e) : 0, s.IsNumber(t) ? Number(t) : e;
        }
        static initOpenAwardNum() {
            this.open_award_num = e.LocalStorage.getItem(window.zs.wx.appId + "open_award_num") || 0;
            var t = e.LocalStorage.getItem(window.zs.wx.appId + "open_award_num_time_stamp");
            null != t && "" != t && 0 != s.isToday(Number(t)) || (e.LocalStorage.setItem(window.zs.wx.appId + "open_award_num_time_stamp", Date.now().toString()), 
            e.LocalStorage.setItem(window.zs.wx.appId + "open_award_num", 0), e.LocalStorage.setItem(window.zs.wx.appId + "open_ready_num", 0), 
            e.LocalStorage.setItem("open_recorder_num", 0));
        }
        static updateGameNum() {
            this.gameNum = e.LocalStorage.getItem(window.zs.wx.appId + "day_game_num") || 0, 
            this.gameNum += 1, e.LocalStorage.setItem(window.zs.wx.appId + "day_game_num", this.gameNum);
            var t = e.LocalStorage.getItem(window.zs.wx.appId + "game_num_time_stamp");
            null != t && "" != t && 0 != s.isToday(Number(t)) || (e.LocalStorage.setItem(window.zs.wx.appId + "game_num_time_stamp", Date.now().toString()), 
            e.LocalStorage.setItem(window.zs.wx.appId + "day_game_num", this.gameNum = 0));
        }
        static isPublicVersion() {
            return a.current_version != a.zs_version;
        }
        static isOpenEgg(t, i) {
            if (console.log("进入砸金蛋配置" + this.egg_switch), !this.egg_switch) return !1;
            if (this.zs_click_award_system) {
                var a = this.zs_click_award_system.trim().toLowerCase();
                if ("android" == a && e.Browser.onAndroid) return !1;
                if ("ios" == a && e.Browser.onIOS) return !1;
            }
            if (this.zs_click_award_since && this.zs_click_award_since > 0) {
                let t = e.LocalStorage.getItem(window.zs.wx.appId + "day_game_num");
                if (console.debug("当前局数" + t, this.zs_click_award_since + "局后开启砸金蛋"), !t || Number(t) < this.zs_click_award_since) return !1;
            }
            let n = 1 == i ? this.zs_ready_click_num : this.zs_click_award_num;
            if (s.IsNumber(n)) {
                let t = 0 == i ? e.LocalStorage.getItem(window.zs.wx.appId + "open_ready_num") : 1 == i ? e.LocalStorage.getItem(window.zs.wx.appId + "open_award_num") : 0;
                if (console.debug("type" + i, "限制:" + n, "已:" + t), console.log("type" + i, "限制:" + n, "已:" + t), 
                -1 == n) return !0;
                if (Number(n) > Number(t)) return !0;
            }
            if (console.debug("限制:" + n), console.log("限制:" + n), n && n.length > 0) {
                if (1 == n.length && -1 == n[0]) return !0;
                if (-1 != n.indexOf(t)) return !0;
            }
            return !1;
        }
        static isShareRecorder(t) {
            if (e.Browser.onIOS) return !1;
            if (s.IsNumber(a.zs_show_share_num)) {
                if (-1 == a.zs_show_share_num) return !0;
                var i = e.LocalStorage.getItem("open_recorder_num") || 0;
                if (Number(a.zs_show_share_num) > Number(i)) return !0;
            }
            if (this.zs_show_share_num && this.zs_show_share_num.length > 0) {
                if (1 == this.zs_show_share_num.length && -1 == this.zs_show_share_num[0]) return !0;
                if (-1 != (this.zs_show_share_num.indexOf("[") >= 0 ? JSON.parse(this.zs_show_share_num) : this.zs_show_share_num.split(",")).indexOf(t)) return !0;
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
        static isReviveTypeEnable(t) {
            if (0 == this[t]) return !1;
            if (-1 == this[t]) return !0;
            var i = e.LocalStorage.getItem(t + "_time_stamp");
            if (null == i || "" == i || 0 == s.isToday(Number(i))) return !0;
            var a = e.LocalStorage.getItem(t);
            return (null == a || "" == a ? 0 : Number(a)) < this[t];
        }
        static updateReviveTypeInfo(t) {
            e.LocalStorage.setItem(t + "_time_stamp", Date.now().toString());
            var i = e.LocalStorage.getItem(t), s = null == i || "" == i ? 0 : Number(i);
            s++, e.LocalStorage.setItem(t, s.toString());
        }
        static isBeforeGameAccount() {
            return a.isPublicVersion() && a.zs_jump_switch && a.zs_before_finsh_jump_switch;
        }
        static isAfterGameAccount() {
            return a.isPublicVersion() && a.zs_jump_switch && a.zs_full_screen_jump;
        }
    }
    a.response = null, a.zs_share_title = "", a.zs_share_image = "", a.zs_switch = !1, 
    a.zs_version = "1.0.0", a.zs_video_adunit = "", a.zs_banner_adunit = "", a.zs_banner_rotate_id1 = "", 
    a.zs_banner_rotate_id2 = "", a.zs_banner_rotate_id3 = "", a.zs_full_screen_adunit = "", 
    a.zs_full_screen_ad_enable = !1, a.zs_banner_text_time = 0, a.zs_banner_banner_time = 0, 
    a.zs_banner_refresh_time = 0, a.zs_banner_move_time = 500, a.zs_banner_vertical_enable = !1, 
    a.zs_banner_horizontal_enable = !1, a.zs_jump_switch = !1, a.zs_revive_type = 0, 
    a.zs_revive_click_num = 0, a.zs_revive_video_num = 0, a.zs_revive_share_num = 0, 
    a.zs_continue_auto_share = !1, a.zs_full_screen_jump = !1, a.zs_history_list_jump = !1, 
    a.zs_finish_jump = !1, a.zs_revive_countdown = 10, a.zs_jump_style = 1, a.zs_shield_gdt_export = !0, 
    a.zs_full_screen_rotate = !1, a.zs_button_delay_switch = !1, a.zs_button_delay_time = 2e3, 
    a.zs_game_banner_show_switch = !0, a.zs_before_finsh_jump_switch = !1, a.zs_slide_jump_swich = !1, 
    a.zs_auto_pop_ups_switch = !0, a.zs_start_game_video_switch = !1, a.zs_auto_full_screen_jump_switch = !1, 
    a.zs_auto_jump_switch = !1, a.zs_friends_playing_switch = !1, a.zs_reminder_switch = !1, 
    a.zs_finish_switch = !1, a.zs_false_news_switch = !1, a.zs_game_star_jump_switch = !1, 
    a.zs_Fakerjump = !1, a.zs_Screen_video_switch = 0, a.zs_Video_Display_Time = 0, 
    e.ILaya.regClass(a), e.ClassUtils.regClass("zs.laya.platform.ADConfig", a), e.ClassUtils.regClass("Zhise.ADConfig", a);
    class n extends e.Script {
        constructor() {
            super(), this.adType = null, this.autoScroll = !1, this.scrollDir = n.SCROLL_NONE, 
            this.dragSleep = 5e3, this.scrollSpeed = 1, this.waitTime = 1e3, this.passedTime = 0, 
            this.inAutoScroll = !1, this.adData = [], this.iosFilterAppIds = [], this.list = null, 
            this.hotIds = [], this.maxNum = null, this.isDataUpdate = !1, this.touchIndex = -1, 
            this.isRandomSelect = !1, this.changeValue = 0, this.unitValue = 0, this.isEnd = !1, 
            this.isClockPendulum = !1, this.notJumpFull = !1, this.bFixHeigt = !1, this.position = "error";
        }
        requestAdData(t, e, i, s, a, r, l, o, h) {
            this.adType = t, this.autoScroll = e, this.scrollDir = i, this.iosFilterAppIds = s || [], 
            this.maxNum = r, this.notJumpFull = h, this.isRandomSelect = l, this.isClockPendulum = o, 
            this.position = a, this.scrollDir == n.SCROLL_VERTICAL ? this.list.vScrollBarSkin = "" : this.scrollDir == n.SCROLL_HORIZONTAL && (this.list.hScrollBarSkin = "");
            var d = this;
            zs.laya.sdk.ZSReportSdk.loadAd(function(t) {
                if (d.list) {
                    d.adData = t[d.adType.toString()], d.allData = {};
                    for (let t = 0; t < d.adData.length; t++) d.allData[d.adData[t].app_title] || (d.allData[d.adData[t].app_title] = []), 
                    d.allData[d.adData[t].app_title].push(d.adData[t]);
                    d.initHotIds(), d.freshAdList();
                }
            });
        }
        reloadData() {
            this.adData.sort(() => Math.random() > .5 ? 1 : -1), this.list.array = this.adData;
        }
        refreshSingleItem(t) {
            var e = Math.floor(Math.random() * this.adData.length);
            if (this.adData.length > 1 && e == t) return this.refreshSingleItem(t);
            console.log("新的随机数是：", e);
            var i = this.adData[e], s = this.adData[t];
            i && (this.list.setItem(t, i), this.list.setItem(e, s));
        }
        checkChange(t) {
            var i = this.adData[t].app_title, s = e.LocalStorage.getItem("CheckDatas");
            try {
                (s = JSON.parse(s)) || (s = {});
            } catch (t) {
                s = {};
            }
            !this.allData[i] || this.allData[i].length <= 1 || (s[i] || (s[i] = {
                cur: 0
            }), s[i].cur++, this.adData[t] = this.allData[i][s[i].cur % this.allData[i].length], 
            this.list.setItem(t, this.adData[t]), e.LocalStorage.setItem("CheckDatas", JSON.stringify(s)));
        }
        checkData() {
            var t = e.LocalStorage.getItem("CheckDatas");
            try {
                (t = JSON.parse(t)) || (t = {});
            } catch (e) {
                t = {};
            }
            for (let e = 0; e < this.adData.length; e++) t[this.adData[e].app_title] || (t[this.adData[e].app_title] = {
                cur: 0
            });
            this.adData = [];
            for (let e in t) this.allData[e] && this.adData.push(this.allData[e][t[e].cur % this.allData[e].length]);
        }
        freshAdList() {
            var t = this;
            if (this.adData = this.adData.filter(function(i) {
                return e.Browser.onAndroid || -1 == t.iosFilterAppIds.indexOf(i.appid);
            }), this.checkData(), null != this.maxNum) if (this.adData.length < this.maxNum) for (;this.adData.length < this.maxNum; ) this.adData.push(this.adData[Math.floor(Math.random() * this.adData.length)]); else if (this.adData.length > this.maxNum) for (;this.adData.length > this.maxNum; ) this.adData.splice(Math.floor(Math.random() * this.adData.length), 1);
            this.reloadData();
            var i = 0, s = this.list.getCell(0);
            if (s) {
                if (this.scrollDir == n.SCROLL_VERTICAL) {
                    if (i = Math.ceil(this.list.array.length / this.list.repeatX), console.log("行数：", i), 
                    this.unitValue = (s.height + this.list.spaceY) / (i * s.height + this.list.spaceY * (i - 1) - this.list.height) * this.list.scrollBar.max, 
                    this.bFixHeigt) {
                        var a = s.height * i + this.list.spaceY * (i - 1);
                        this.list.height = a;
                    }
                } else this.scrollDir == n.SCROLL_HORIZONTAL && (i = Math.ceil(this.list.array.length / this.list.repeatY), 
                this.unitValue = (s.width + this.list.spaceX) / (i * s.width + this.list.spaceX * (i - 1) - this.list.width) * this.list.scrollBar.max);
                console.log("单元value" + this.unitValue), this.autoScroll && e.stage.frameOnce(1, this, this.startAutoScrollAd);
            }
        }
        initHotIds() {
            for (var t = Math.random() < .5 ? 3 : 4, e = Math.floor(this.adData.length / t), i = 0; i < t; i++) this.hotIds.push(Math.floor(e * Math.random()) + i * e);
        }
        startAutoScrollAd() {
            this.list && (this.inAutoScroll = !0);
        }
        onItemRender(t, e) {
            var i = this.list.array[e];
            if (i) {
                if (s = t.getChildByName("icon")) {
                    s.loadImage(i.app_icon, null);
                    let t = s.getChildByName("mask");
                    t && (t.width = s.width, t.height = s.height);
                } else {
                    var s, a = t.getChildByName("iconBox");
                    if (a) (s = a.getChildByName("icon")) && (s.skin = i.app_icon);
                }
                var n = t.getChildByName("name");
                n && (n.text = i.app_title);
                var r = t.getChildByName("desc");
                r && (r.text = i.app_desc);
                var l = t.getChildByName("people");
                if (l) {
                    var o = Math.floor(980 * Math.random() + 6);
                    l.text = `${o / 10}万人在玩`;
                }
                if (1 != this.isDataUpdate) {
                    var h = t.getChildByName("titleBg");
                    h && (h.index = Math.floor(h.clipY * Math.random()));
                    var d = t.getChildByName("tag");
                    if (d) this.hotIds.indexOf(e) > 0 ? (d.visible = !0, d.index = Math.floor(d.clipY * Math.random())) : d.visible = !1; else {
                        var c = t.getChildByName("hot"), u = t.getChildByName("new");
                        c && (c.visible = !1), u && (u.visible = !1), this.hotIds.indexOf(e) > 0 && (c && u ? Math.random() < .5 ? c.visible = !0 : u.visible = !0 : c && !u ? c.visible = !0 : u && !c && (u.visible = !0));
                    }
                }
            } else t.visible = !1;
        }
        onTouchEnd(t) {
            this.list && this.list.array && (a.zs_slide_jump_switch && this.isRandomSelect && -1 == this.touchIndex && (this.touchIndex = Math.floor(Math.random() * this.list.array.length), 
            console.log("RandomSelect:" + this.touchIndex + " data list length:" + this.list.array.length)), 
            this.onSelectAd(this.touchIndex), this.touchIndex = -1);
        }
        onMouseAd(t, i) {
            t.type == e.Event.MOUSE_DOWN && (this.touchIndex = i);
        }
        onSelectAd(t) {
            if (null != t && -1 != t && this.list && this.list.array) {
                var s = this.list.array[t], a = this;
                a.isDataUpdate = !0, zs.laya.sdk.ZSReportSdk.navigate2Mini(s, i.user_id, function() {
                    e.stage.event(n.EVENT_NAVIGATE_SUCCESS);
                }, function() {
                    e.stage.event(n.EVENT_NAVIGATE_FAILED), a.notJumpFull || i.onExportJumpCancel();
                }, function() {
                    a.list.selectedIndex = -1, a.checkChange(t), e.stage.event(n.EVENT_NAVIGATE_COMPLETED);
                }, {
                    position: this.position
                });
            }
        }
        params2String(t) {
            for (var e = t[0] + "=" + t[1], i = 2; i < t.length; i += 2) e += "&" + t[i] + "=" + t[i + 1];
            return e;
        }
        onDragStateChanged(t) {
            this.inAutoScroll = !1, this.autoScroll && 0 == t && (this.passedTime = 0);
        }
        onAwake() {
            this.list = this.owner, this.list.selectEnable = !0, this.list.renderHandler = e.Handler.create(this, this.onItemRender, null, !1), 
            this.list.mouseHandler = e.Handler.create(this, this.onMouseAd, null, !1);
        }
        onEnable() {
            this.owner.on(e.Event.MOUSE_UP, this, this.onTouchEnd), this.list.on(e.Event.MOUSE_UP, this, this.onDragStateChanged, [ 0 ]), 
            this.list.on(e.Event.MOUSE_OUT, this, this.onDragStateChanged, [ 0 ]), this.list.on(e.Event.MOUSE_DOWN, this, this.onDragStateChanged, [ 1 ]);
        }
        onDisable() {
            this.owner.off(e.Event.MOUSE_UP, this, this.onTouchEnd), this.list.off(e.Event.MOUSE_UP, this, this.onDragStateChanged), 
            this.list.off(e.Event.MOUSE_OUT, this, this.onDragStateChanged), this.list.off(e.Event.MOUSE_DOWN, this, this.onDragStateChanged);
        }
        onUpdate() {
            if (this.autoScroll && 1 == this.inAutoScroll && this.list && this.list.scrollBar && this.list.scrollBar.max) {
                if (this.list.scrollBar.value >= this.list.scrollBar.max ? (this.list.scrollBar.value = this.list.scrollBar.max, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0) : this.list.scrollBar.value <= 0 && (this.list.scrollBar.value = 0, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0), this.list.scrollBar.value += this.scrollSpeed, 
                !this.unitValue || !this.isClockPendulum) return;
                this.isEnd = this.isEnd && 0 != this.changeValue, this.changeValue += Math.abs(this.scrollSpeed), 
                (this.changeValue >= this.unitValue || this.isEnd) && (this.autoScroll = !1, this.isEnd = !1, 
                this.changeValue = 0, e.timer.once(this.waitTime, this, function() {
                    this.autoScroll = !0;
                }));
            }
            this.autoScroll && 0 == this.inAutoScroll && (this.passedTime += e.timer.delta, 
            this.passedTime > this.dragSleep && this.startAutoScrollAd());
        }
        setFixHeight(t) {
            this.bFixHeigt = t;
        }
    }
    n.EVENT_NAVIGATE_SUCCESS = "NAVIGATE_SUCCESS", n.EVENT_NAVIGATE_FAILED = "NAVIGATE_FAILED", 
    n.EVENT_NAVIGATE_COMPLETED = "NAVIGATE_COMPLETED", n.SCROLL_NONE = 0, n.SCROLL_VERTICAL = 1, 
    n.SCROLL_HORIZONTAL = 2, e.ILaya.regClass(n), e.ClassUtils.regClass("zs.laya.platform.AdList", n), 
    e.ClassUtils.regClass("Zhise.AdList", n);
    class r extends n {
        constructor() {
            super();
        }
        onItemRender(t, e) {
            var i = this.list.array[e];
            if (i) {
                if (1 != this.isDataUpdate) {
                    var s = t.getChildByName("icon");
                    s && (6 != e ? (s.visible = !0, s.loadImage(i.app_icon, null)) : s.visible = !1);
                    var a = t.getChildByName("name");
                    a && (a.text = 6 != e ? i.app_title : "");
                    var n = t.getChildByName("desc");
                    n && (n.text = 6 != e ? i.app_desc : "");
                    var r = t.getChildByName("arrow");
                    r && (r.visible = 6 == e, 6 == e ? (r.visible = !0, r.index = i.arrowIdx ? i.arrowIdx : 0) : r.visible = !1);
                }
            } else t.visible = !1;
        }
        onSelectAd(t) {
            if (-1 != t) {
                var s = this.list.array[t];
                if (6 == t) return null == s.arrowIdx || 0 == s.arrowIdx ? (s.arrowIdx = 1, this.owner.event(r.EVENT_AD_SWITCH_SHOW)) : (s.arrowIdx = 0, 
                this.owner.event(r.EVENT_AD_SWITCH_HIDE)), void (this.list.selectedIndex = -1);
                var a = this;
                a.isDataUpdate = !0, zs.laya.sdk.ZSReportSdk.navigate2Mini(s, i.user_id, function() {
                    e.stage.event(n.EVENT_NAVIGATE_SUCCESS);
                }, function() {
                    e.stage.event(n.EVENT_NAVIGATE_FAILED), i.onExportJumpCancel();
                }, function() {
                    a.list.selectedIndex = -1, e.stage.event(n.EVENT_NAVIGATE_COMPLETED);
                }, {
                    position: n.position
                });
            }
        }
    }
    r.EVENT_AD_SWITCH_SHOW = "EVENT_AD_SWITCH_SHOW", r.EVENT_AD_SWITCH_HIDE = "EVENT_AD_SWITCH_HIDE", 
    e.ILaya.regClass(r), e.ClassUtils.regClass("zs.laya.platform.AdList2", r), e.ClassUtils.regClass("Zhise.AdList2", r);
    class l extends e.Script {
        constructor() {
            super(), this.args = null, this.adView = null, this.monitorOtherPageOpen = !1, this.visibleArr = null;
        }
        onEnable() {
            null == this.adView && e.stage.on(i.AD_CONFIIG_LOADED, this, this.onStart);
        }
        onDisable() {
            null == this.adView && e.stage.off(i.AD_CONFIIG_LOADED, this, this.onStart), this.monitorOtherPageOpen && (e.stage.off(i.UI_VIEW_OPENED, this, this.onViewOpened), 
            e.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed));
        }
        onDestroy() {
            if (null != this.adView) {
                for (var t = 0; t < this.adView.length; t++) null != this.adView[t] && this.adView[t].destroy();
                this.adView = null;
            }
        }
        onStart() {
            if (!this.adView && 0 != a.zs_jump_switch && 0 != a.isPublicVersion()) {
                var t = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                if (this.args = i.platformCfg.exportGameCfg[t], this.args) {
                    this.monitorOtherPageOpen = !1;
                    for (var s = 0; s < this.args.length; s++) {
                        (null == (n = this.args[s]).checkKey || a[n.checkKey]) && (this.monitorOtherPageOpen = this.monitorOtherPageOpen || n.isHide);
                    }
                    this.monitorOtherPageOpen && (e.stage.on(i.UI_VIEW_OPENED, this, this.onViewOpened), 
                    e.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed)), this.adView = [];
                    for (s = 0; s < this.args.length; s++) {
                        var n;
                        if ((n = this.args[s]).readonly) this.adView.push(null); else {
                            if (null == n.checkKey || a[n.checkKey]) {
                                n.delayTime ? e.timer.once(n.delayTime, this, () => {
                                    e.loader.create(n.viewUrl, e.Handler.create(this, this.onPrefabReady), null, e.Loader.PREFAB);
                                }) : e.loader.create(n.viewUrl, e.Handler.create(this, this.onPrefabReady), null, e.Loader.PREFAB);
                                break;
                            }
                            this.adView.push(null);
                        }
                    }
                }
            }
        }
        onPrefabReady(t) {
            if (!this.destroyed) {
                var i = this.args[this.adView.length], s = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                if (this.findChildByPath(i.parentRoot)) {
                    var n = this.getViewScript(i.scriptType);
                    if (null != n) {
                        var r = t.create();
                        this.findChildByPath(i.parentRoot).addChild(r), r.pos(i.x, i.y);
                        var l = r.getComponent(n);
                        if (null == l && (l = r.addComponent(n)), i.adType && l.initView(i), this.adView.push(r), 
                        this.adView.length < this.args.length) {
                            var o = this.args[this.adView.length];
                            o.readonly ? this.adView.push(null) : null == o.checkKey || a[o.checkKey] ? e.loader.create(o.viewUrl, e.Handler.create(this, this.onPrefabReady), null, e.Loader.PREFAB) : this.adView.push(null);
                        }
                    } else console.log(s + " page" + i.viewUrl + " scriptType is null");
                } else console.log(s + " page parentRoot " + i.parentRoot + " is null");
            }
        }
        getViewScript(t) {
            switch (t) {
              case "ExportScrollH":
                return o;

              case "ExportScrollV":
                return h;

              case "ExportScrollNone":
                return d;

              case "ShakeExportBox":
                return u;

              case "InviteBtn":
                return g;

              case "FakeExitBtn":
                return _;

              case "FloatExportBtn":
                return m;

              case "ScreenExportBtn":
                return p;

              case "ExportLeftPop":
                return w;

              case "ExportRightPop":
                return f;

              case "ExportLeftFlyBox":
                return C;

              case "ExportKnock":
                return v;

              case "InviteBox":
                return A;
            }
        }
        onViewOpened(t) {
            if (t && this.adView) {
                this.visibleArr = [];
                for (var e = 0; e < this.adView.length; e++) null != this.adView[e] && this.args[e].isHide && (this.visibleArr[e] = this.adView[e].visible, 
                this.adView[e].visible = !1);
            }
        }
        onViewClosed(t) {
            if (t && this.adView) {
                if (!this.visibleArr) return;
                for (var e = 0; e < this.adView.length; e++) null != this.adView[e] && this.args[e].isHide && this.visibleArr[e] && (this.adView[e].visible = this.visibleArr[e]);
            }
        }
        findChildByPath(t) {
            for (var e = t.split("/"), i = this.owner, s = 0; s < e.length; s++) i = i.getChildByName(e[s]);
            return i;
        }
    }
    e.ILaya.regClass(l), e.ClassUtils.regClass("zs.laya.platform.ExportGameCtrl", l), 
    e.ClassUtils.regClass("Zhise.ExportGameCtrl", l);
    class o extends e.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(t) {
            this.adList = this.owner.getChildByName("adList").addComponent(n);
            var e = i.platformCfg;
            this.adList.requestAdData(t.adType, !0, n.SCROLL_HORIZONTAL, e.iosFilterAppIds, t.position, null, !1, t.isClockPendulum);
        }
    }
    e.ILaya.regClass(o), e.ClassUtils.regClass("zs.laya.platform.ExportScrollH", o), 
    e.ClassUtils.regClass("Zhise.ExportScrollH", o);
    class h extends e.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(t) {
            this.adList = this.owner.getChildByName("adList").addComponent(n);
            var e = i.platformCfg;
            this.adList.requestAdData(t.adType, !0, n.SCROLL_VERTICAL, e.iosFilterAppIds, t.position, null, !1, t.isClockPendulum);
        }
    }
    e.ILaya.regClass(h), e.ClassUtils.regClass("zs.laya.platform.ExportScrollV", h), 
    e.ClassUtils.regClass("Zhise.ExportScrollV", h);
    class d extends e.Script {
        constructor() {
            super(), this.adList = null;
        }
        initView(t) {
            this.adList = this.owner.getChildByName("adList").addComponent(n);
            var e = i.platformCfg;
            this.adList.requestAdData(t.adType, !1, n.SCROLL_NONE, e.iosFilterAppIds, t.position, null, !1, t.isClockPendulum);
        }
    }
    e.ILaya.regClass(d), e.ClassUtils.regClass("zs.laya.platform.ExportScrollNone", d), 
    e.ClassUtils.regClass("Zhise.ExportScrollNone", d);
    class c extends e.Script {
        constructor() {
            super(), this.list = null, this.delayAnimTime = 1e3, this.animIntervalTime = 1500, 
            this.animDuaration = 500, this.adIdx = 0, this.rotOffset = 20, this.loopTime = 8, 
            this.currentAdData = null, this.adDataArr = null, this.subAnimDuaration = 0, this.maxNum = 4;
        }
        initAd(t) {
            this.adDataArr = t, this.allData = {};
            for (let t = 0; t < this.adDataArr.length; t++) this.allData[this.adDataArr[t].app_title] || (this.allData[this.adDataArr[t].app_title] = []), 
            this.allData[this.adDataArr[t].app_title].push(this.adDataArr[t]);
            this.checkData(), this.adIdx %= this.adDataArr.length, this.onItemRender(this.adDataArr[this.adIdx]), 
            this.owner.timerLoop(this.delayAnimTime + this.animIntervalTime, this, this.freshAdItems);
        }
        checkChange(t) {
            var i = this.adDataArr[t].app_title, s = e.LocalStorage.getItem("CheckDatas");
            try {
                (s = JSON.parse(s)) || (s = {});
            } catch (t) {
                s = {};
            }
            !this.allData[i] || this.allData[i].length <= 1 || (s[i] || (s[i] = {
                cur: 0
            }), s[i].cur++, this.adDataArr[t] = this.allData[i][s[i].cur % this.allData[i].length], 
            this.onItemRender(this.adDataArr[t]), e.LocalStorage.setItem("CheckDatas", JSON.stringify(s)));
        }
        checkData() {
            var t = e.LocalStorage.getItem("CheckDatas");
            try {
                (t = JSON.parse(t)) || (t = {});
            } catch (e) {
                t = {};
            }
            for (let e = 0; e < this.adDataArr.length; e++) t[this.adDataArr[e].app_title] || (t[this.adDataArr[e].app_title] = {
                cur: 0
            });
            this.adDataArr = [];
            for (let e in t) this.allData[e] && this.adDataArr.push(this.allData[e][t[e].cur % this.allData[e].length]);
        }
        freshAdItems() {
            this.adIdx += this.maxNum, this.adIdx %= this.adDataArr.length, this.onItemRender(this.adDataArr[this.adIdx]), 
            this.playShakeAnim(0);
        }
        playShakeAnim(t) {
            if (!(t >= this.loopTime)) {
                var i = this.owner;
                switch (t % this.loopTime) {
                  case 0:
                    e.Tween.to(i, {
                        rotation: this.rotOffset
                    }, this.subAnimDuaration, e.Ease.linearNone, e.Handler.create(this, this.playShakeAnim, [ t + 1 ]));
                    break;

                  case 1:
                    e.Tween.to(i, {
                        rotation: 0
                    }, this.subAnimDuaration, e.Ease.linearNone, e.Handler.create(this, this.playShakeAnim, [ t + 1 ]));
                    break;

                  case 2:
                    e.Tween.to(i, {
                        rotation: this.rotOffset
                    }, this.subAnimDuaration, e.Ease.linearNone, e.Handler.create(this, this.playShakeAnim, [ t + 1 ]));
                    break;

                  case 3:
                    e.Tween.to(i, {
                        rotation: 0
                    }, this.subAnimDuaration, e.Ease.linearNone, e.Handler.create(this, this.playShakeAnim, [ t + 1 ]));
                }
            }
        }
        onItemRender(t) {
            if (null != t) {
                this.currentAdData = t, this.owner.visible = !0;
                var e = this.owner, i = e.getChildByName("icon");
                i && i.loadImage(t.app_icon, null);
                var s = e.getChildByName("name");
                s && (s.text = t.app_title);
                var a = e.getChildByName("desc");
                a && (a.text = t.app_desc);
            } else null == this.currentAdData && (this.owner.visible = !1);
        }
        onClick() {
            var t = this, s = this.adDataArr[t.adIdx];
            zs.laya.sdk.ZSReportSdk.navigate2Mini(s, i.user_id, function() {
                e.stage.event(n.EVENT_NAVIGATE_SUCCESS);
            }, function() {
                e.stage.event(n.EVENT_NAVIGATE_FAILED), i.onExportJumpCancel();
            }, function() {
                t.checkChange(t.adIdx);
            }, {
                position: "首页浮动导出"
            });
        }
        onStart() {
            this.subAnimDuaration = this.animDuaration / this.loopTime, console.log("this.subAnimDuaration", this.subAnimDuaration);
        }
    }
    e.ILaya.regClass(c), e.ClassUtils.regClass("zs.laya.platform.ShakeExportIcon", c), 
    e.ClassUtils.regClass("Zhise.ShakeExportIcon", c);
    class u extends e.Script {
        constructor() {
            super(), this.adType = 0, this.iconScriptArr = [];
        }
        initView(t) {
            this.adType = t.adType;
            for (var e = t.maxNum ? t.maxNum : this.owner.numChildren, i = 0; i < e; i++) {
                var s = this.owner.getChildAt(i).addComponent(c);
                s.adIdx = i, s.maxNum = e, this.iconScriptArr.push(s);
            }
            for (;this.owner.numChildren > e; ) this.owner.getChildAt(this.owner.numChildren - 1).removeSelf();
            this.requestAdData();
        }
        requestAdData() {
            var t = this;
            zs.laya.sdk.ZSReportSdk.loadAd(function(i) {
                var s = i[t.adType.toString()];
                s = s.filter(function(t) {
                    return e.Browser.onAndroid || "wx48820730357d81a6" != t.appid && "wxc136d75bfc63107c" != t.appid;
                });
                for (var a = 0; a < t.iconScriptArr.length; a++) {
                    t.iconScriptArr[a].initAd(s);
                }
            });
        }
    }
    e.ILaya.regClass(u), e.ClassUtils.regClass("zs.laya.platform.ShakeExportBox", u), 
    e.ClassUtils.regClass("Zhise.ShakeExportBox", u);
    class _ extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = a.zs_jump_switch && a.isPublicVersion() && a.zs_history_list_jump;
        }
        onClick() {
            e.SoundManager.playSound(i.soundClick), this.owner.mouseEnabled = !1, i.showListAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    e.ILaya.regClass(_), e.ClassUtils.regClass("zs.laya.platform.FakeExitBtn", _), e.ClassUtils.regClass("Zhise.FakeExitBtn", _);
    class m extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = a.zs_jump_switch && a.isPublicVersion() && a.zs_history_list_jump;
        }
        onClick() {
            e.SoundManager.playSound(i.soundClick), this.owner.mouseEnabled = !1, i.showHomeFloatAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    e.ILaya.regClass(m), e.ClassUtils.regClass("zs.laya.platform.FloatExportBtn", m), 
    e.ClassUtils.regClass("Zhise.FloatExportBtn", m);
    class p extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.mouseEnabled = !0, this.owner.visible = a.zs_jump_switch && a.isPublicVersion() && a.zs_history_list_jump;
        }
        onClick() {
            e.SoundManager.playSound(i.soundClick), this.owner.mouseEnabled = !1, i.showScreenAd(), 
            this.owner.mouseEnabled = !0;
        }
    }
    e.ILaya.regClass(p), e.ClassUtils.regClass("zs.laya.platform.ScreenExportBtn", p), 
    e.ClassUtils.regClass("Zhise.ScreenExportBtn", p);
    class g extends e.Script {
        constructor() {
            super();
        }
        onClick() {
            console.log("openInvite"), e.SoundManager.playSound(i.soundClick), zs.laya.sdk.SdkService.openShare(zs.laya.platform.ADConfig.zs_share_title, zs.laya.platform.ADConfig.zs_share_image);
        }
    }
    e.ILaya.regClass(g), e.ClassUtils.regClass("zs.laya.platform.InviteBtn", g), e.ClassUtils.regClass("Zhise.InviteBtn", g);
    class w extends e.Script {
        constructor() {
            super(), this.srcX = 0, this.adList = null, this.adCheckBox = null, this.isGameEndShow = !1;
        }
        initView(t) {
            this.srcX = this.owner.x, this.adList = this.owner.getChildByName("adList").addComponent(n), 
            this.adCheckBox = this.owner.getChildByName("adCheckBox"), this.adCheckBox.on(e.Event.CLICK, this, this.updateFloatPos);
            var s = i.platformCfg;
            this.adList.requestAdData(t.adType, !0, n.SCROLL_VERTICAL, s.iosFilterAppIds, t.position, null, !1, !0), 
            a.zs_switch && !w.firstEnter && (this.adCheckBox.selected = !0, this.updateFloatPos()), 
            w.firstEnter && (w.firstEnter = !1);
        }
        onDestroy() {
            this.adCheckBox.off(e.Event.CLICK, this, this.updateFloatPos);
        }
        updateFloatPos() {
            zs.laya.sdk.SdkService.hideUserInfoButton(), this.adCheckBox.mouseEnabled = !1, 
            this.adCheckBox.selected ? e.Tween.to(this.owner, {
                x: 0
            }, 500, null, e.Handler.create(this, this.onTweenCompleted)) : (e.Tween.to(this.owner, {
                x: this.srcX
            }, 500, null, e.Handler.create(this, this.onTweenCompleted)), this.isGameEndShow && e.stage.event("CLOSE_LEFTPOP"));
        }
        onTweenCompleted() {
            this.adCheckBox.mouseEnabled = !0, 0 == this.adCheckBox.selected && zs.laya.sdk.SdkService.showUserInfoButton();
        }
    }
    w.firstEnter = !0, e.ILaya.regClass(w), e.ClassUtils.regClass("zs.laya.platform.ExportLeftPop", w), 
    e.ClassUtils.regClass("Zhise.ExportLeftPop", w);
    class f extends e.Script {
        constructor() {
            super(), this.adFrame = null, this.adList = null;
        }
        initView(t) {
            this.adFrame = this.owner.getChildByName("adFrame"), this.adList = this.owner.getChildByName("adList").addComponent(r);
            var e = i.platformCfg;
            this.adList.requestAdData(t.adType, !1, n.SCROLL_NONE, e.iosFilterAppIds, t.position, 9), 
            this.adList.owner.on(r.EVENT_AD_SWITCH_HIDE, this, this.onAdHide), this.adList.owner.on(r.EVENT_AD_SWITCH_SHOW, this, this.onAdShow);
        }
        onAdHide() {
            this.adList.owner.mouseEnabled = !1, e.Tween.to(this.owner, {
                x: -150
            }, 500, null, e.Handler.create(this, this.onTweenCompleted));
        }
        onAdShow() {
            this.adList.owner.mouseEnabled = !1, e.Tween.to(this.owner, {
                x: -450
            }, 500, null, e.Handler.create(this, this.onTweenCompleted));
        }
        onTweenCompleted() {
            this.adList.owner.mouseEnabled = !0;
        }
    }
    e.ILaya.regClass(f), e.ClassUtils.regClass("zs.laya.platform.ExportRightPop", f), 
    e.ClassUtils.regClass("Zhise.ExportRightPop", f);
    class C extends e.Script {
        constructor() {
            super(), this.isClick = !1, this.adData = [], this.unData = [], this.showNum = 0;
        }
        initView(t) {
            if (a.zs_jump_switch && a.isPublicVersion()) {
                this.showNum = this.owner.numChildren;
                for (var i = this, s = 0; s < this.showNum; s++) {
                    var n = this.owner.getChildByName("ad_" + s);
                    n && e.Tween.from(n, {
                        rotation: 360,
                        x: n.x - 500
                    }, 700, null, e.Handler.create(this, function() {
                        i.isClick = !0;
                    }));
                }
                var r = t.adType.toString();
                zs.laya.sdk.ZSReportSdk.loadAd(function(t) {
                    i.adData = t[r], i.freshAdBox();
                });
            } else this.owner.visible = !1;
        }
        freshAdBox() {
            var t = i.platformCfg;
            if (this.adData = this.adData.filter(function(i) {
                return e.Browser.onAndroid || -1 == t.iosFilterAppIds.indexOf(i.appid);
            }), this.adData.length < this.showNum) for (;this.adData.length < this.showNum; ) this.adData.push(this.adData[Math.floor(Math.random() * this.adData.length)]); else if (this.adData.length > this.showNum) for (;this.adData.length > this.showNum; ) {
                var s = this.adData.splice(Math.floor(Math.random() * this.adData.length), 1);
                this.unData.push(s[0]);
            }
            for (var a = 0; a < this.showNum; a++) {
                var n = this.adData[a];
                if (n) {
                    var r = this.owner.getChildByName("ad_" + a);
                    if (r) {
                        var l = r.getChildByName("icon");
                        l && l.loadImage(n.app_icon, null);
                        var o = r.getChildByName("name");
                        o && (o.text = n.app_title);
                        var h = r.getChildByName("titleBg");
                        h && (h.index = Math.floor(h.clipY * Math.random()));
                        var d = r.getChildByName("tag");
                        d && (a < 2 ? (d.visible = !0, d.index = Math.floor(d.clipY * Math.random())) : d.visible = !1), 
                        r.on(e.Event.CLICK, this, this.onBoxClick, [ a ]);
                    }
                }
            }
        }
        onBoxClick(t) {
            if (this.isClick && (zs.laya.sdk.ZSReportSdk.navigate2Mini(this.adData[t], i.user_id, function() {
                e.stage.event(n.EVENT_NAVIGATE_SUCCESS);
            }, function() {
                e.stage.event(n.EVENT_NAVIGATE_FAILED), zs.laya.platform.ADConfig.zs_switch && zs.laya.platform.ADConfig.zs_reminder_switch && e.Scene.open("view/ad/ChallengePage.scene", !1);
            }, function() {}, {
                position: "结算页导出"
            }), this.unData.length > 0)) {
                var s = this.unData.splice(Math.floor(Math.random() * this.unData.length), 1);
                this.unData.push(this.adData.splice(t, 1, s[0])[0]);
                var a = this.owner.getChildByName("ad_" + t), r = this.adData[t];
                if (!r) return;
                if (a) {
                    var l = a.getChildByName("icon");
                    l && l.loadImage(r.app_icon, null);
                    var o = a.getChildByName("name");
                    o && (o.text = r.app_title);
                    var h = a.getChildByName("titleBg");
                    h && (h.index = Math.floor(h.clipY * Math.random()));
                    var d = a.getChildByName("tag");
                    d && (t < 2 ? (d.visible = !0, d.index = Math.floor(d.clipY * Math.random())) : d.visible = !1);
                }
            }
        }
    }
    e.ILaya.regClass(C), e.ClassUtils.regClass("zs.laya.platform.ExportLeftFlyBox", C), 
    e.ClassUtils.regClass("Zhise.ExportLeftFlyBox", C);
    class v extends e.Script {
        constructor() {
            super(), this.adType = "promotion", this.iconScriptArr = [], this.adData = null, 
            this.allData = {}, this.maxLength = 6, this.adList = null, this.knockAni = null, 
            this.knockAniBox = null, this.posX = 0, this.posY = 0, this.knockIndex = 0;
        }
        onAwake() {
            super.onAwake(), this.knockAni = this.owner.ani_knock, this.adList = this.owner.getChildByName("adList"), 
            this.knockAniBox = this.owner.getChildByName("box_ani"), this.knockAniBox.visible = !1, 
            this.adList.selectEnable = !0, this.adList.visible = zs.laya.platform.ADConfig.isPublicVersion();
        }
        onEnable() {
            super.onEnable(), this.initEvent(), this.initData(), this.knockAni.on(e.Event.COMPLETE, this, this.onAniComplete), 
            this.startKnock();
        }
        initView(t) {
            this.adType = t.adType.toString();
        }
        initEvent() {
            this.adList.renderHandler = e.Handler.create(this, this.onItemRender, null, !1), 
            this.adList.mouseHandler = e.Handler.create(this, this.onMouseAd, null, !1);
        }
        onItemRender(t, e) {
            var i = this.adList.array[e];
            this.refreshItemByDate(t, i);
        }
        onMouseAd(t, i) {
            "click" == t.type && zs.laya.sdk.ZSReportSdk.navigate2Mini(this.adData[i], zs.laya.game.AppMain.playerInfo.user_id, () => {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_SUCCESS);
            }, () => {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_CANCEL);
            }, () => {
                this.checkChange(i);
            });
        }
        refreshItemByDate(t, e) {
            var i = t.getChildByName("icon"), s = t.getChildByName("name");
            i.loadImage(e.app_icon), s.changeText(e.app_title);
        }
        checkChange(t) {
            var i = this.adData[t].app_title, s = e.LocalStorage.getItem("CheckDatas");
            try {
                (s = JSON.parse(s)) || (s = {});
            } catch (t) {
                s = {};
            }
            !this.allData[i] || this.allData[i].length <= 1 || (s[i] || (s[i] = {
                cur: 0
            }), s[i].cur++, this.adData[t] = this.allData[i][s[i].cur % this.allData[i].length], 
            this.adList.setItem(t, this.adData[t]), e.LocalStorage.setItem("CheckDatas", JSON.stringify(s)));
        }
        initData() {
            let t = this;
            zs.laya.sdk.ZSReportSdk.loadAd(e => {
                this.adData = e[this.adType.toString()], t.allData = {};
                for (let e = 0; e < t.adData.length; e++) t.allData[t.adData[e].app_title] || (t.allData[t.adData[e].app_title] = []), 
                t.allData[t.adData[e].app_title].push(t.adData[e]);
                this.checkData(), this.updateItem();
            });
        }
        checkData() {
            var t = e.LocalStorage.getItem("CheckDatas");
            try {
                (t = JSON.parse(t)) || (t = {});
            } catch (e) {
                t = {};
            }
            for (let e = 0; e < this.adData.length; e++) t[this.adData[e].app_title] || (t[this.adData[e].app_title] = {
                cur: 0
            });
            this.adData = [];
            for (let e in t) this.allData[e] && this.adData.push(this.allData[e][t[e].cur % this.allData[e].length]);
        }
        updateItem() {
            var t = [];
            this.adData.sort(() => Math.random() > .5 ? 1 : -1);
            for (let e = 0; e < this.maxLength; e++) t.push(this.adData[e]);
            this.adList.array = t;
        }
        startKnock() {
            e.timer.once(1e3, this, this.knockExportIcon, null, !1);
        }
        knockExportIcon() {
            var t = Math.floor(Math.random() * this.adList.array.length);
            this.knockIndex = t;
            var i, s = this.adList.getCell(t);
            s.mouseEnabled = !1, i = e.Point.create().setTo(s.width / 2, s.height / 2), i = s.localToGlobal(i);
            var a = this.owner.globalToLocal(i);
            this.posX = a.x, this.posY = a.y, this.knockAniBox.pos(a.x, a.y - 27), this.knockAniBox.visible = !0, 
            this.knockAni.play(0, !1), e.timer.once(5e3, this, this.knockExportIcon, null, !1);
        }
        onAniComplete() {
            this.knockAniBox.visible = !1;
            var t = this.adList.getCell(this.knockIndex);
            this.playScaleEff(t);
        }
        playScaleEff(t) {
            e.Tween.to(t, {
                scaleX: 0,
                scaleY: 0
            }, 500, e.Ease.bounceIn, e.Handler.create(this, () => {
                this.refreshSingleItem(this.knockIndex), e.Tween.to(t, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, e.Ease.bounceIn, e.Handler.create(this, () => {
                    t.mouseEnabled = !0;
                }));
            }));
        }
        refreshSingleItem(t) {
            var e = this.adData.filter(t => !this.adList.array.some(e => t.app_id === e.app_id)), i = e[Math.floor(Math.random() * e.length)];
            this.adList.setItem(t, i);
        }
    }
    e.ILaya.regClass(v), e.ClassUtils.regClass("zs.laya.platform.ExportKnock", v), e.ClassUtils.regClass("Zhise.ExportKnock", v);
    class A extends e.Script {
        constructor() {
            super(), this.lab_name = null, this.lab_invite = null, this.img_bg = null, this.adData = null, 
            this.jsonUrl = null, this.jsonData = [], this.isShow = !1;
        }
        initView(t) {
            this.owner.visible = !1;
            let i = this;
            zs.laya.platform.ADConfig.zs_switch && zs.laya.platform.ADConfig.zs_false_news_switch ? (this.jsonUrl = t && t.jsonUrl && t.jsonUrl.toString(), 
            this.jsonUrl ? e.loader.load(this.jsonUrl, e.Handler.create(this, function(s) {
                for (let t = 0; t < s.length; t++) this.jsonData.push(s[t]);
                zs.laya.sdk.ZSReportSdk.loadAd(function(s) {
                    var a = s[t && t.adType ? t.adType : "promotion"];
                    a = a.filter(function(t) {
                        return e.Browser.onAndroid || "wx48820730357d81a6" != t.appid && "wxc136d75bfc63107c" != t.appid;
                    }), i.adData = a[Math.floor(Math.random() * a.length)], !i.isShow && i.jsonData.length > 0 ? (i.isShow = !0, 
                    i.initUI()) : this.owner.destroy();
                });
            })) : this.owner.destroy()) : this.owner.destroy();
        }
        onAwake() {
            this.lab_name = this.owner.getChildByName("lab_name"), this.lab_invite = this.owner.getChildByName("lab_invite"), 
            this.img_bg = this.owner.getChildByName("img_bg");
        }
        initUI() {
            this.owner.visible = !0;
            let t = this.jsonData[Math.floor(Math.random() * this.jsonData.length)];
            this.lab_name.text = t.nickname, this.lab_invite.text = "邀请您一起玩   " + this.adData.app_title, 
            this.img_bg.on(e.Event.CLICK, this, this.onBgClick), this.owner.y = 0 - this.owner.height, 
            this.owner.centerX = 0, e.SoundManager.playSound("sound/getChat.mp3"), zs.laya.sdk.DeviceService.VibrateShort(), 
            e.Tween.to(this.owner, {
                y: 100
            }, 500);
        }
        onBgClick() {
            zs.laya.sdk.ZSReportSdk.navigate2Mini(this.adData, zs.laya.game.AppMain.playerInfo.user_id, function() {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_SUCCESS);
            }, function() {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_CANCEL), zs.laya.platform.ADConfig.zs_switch && zs.laya.platform.ADConfig.zs_reminder_switch && i.showChallengeView();
            }, function() {}), e.Tween.to(this.owner, {
                y: 0 - this.owner.height
            }, 500);
        }
    }
    e.ILaya.regClass(A), e.ClassUtils.regClass("zs.laya.platform.InviteBox", A), e.ClassUtils.regClass("Zhise.InviteBox", A);
    class y extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.btn_suc = null, this.btn_fail = null, this.img_icon = null, this.img_avater = null, 
            this.lab_invite = null, this.lab_name = null, this.lab_appName = null, this.adData = null, 
            this.jsonData = [], this.jsonUrl = null, this.isShow = !1;
        }
        onAwake() {
            super.onAwake();
            let t = this.owner.getChildByName("middleUI");
            t && (this.btn_suc = t.getChildByName("btn_suc"), this.btn_fail = t.getChildByName("btn_fail"), 
            this.img_icon = t.getChildByName("img_icon"), this.img_avater = t.getChildByName("img_avater"), 
            this.lab_invite = t.getChildByName("lab_invite"), this.lab_name = t.getChildByName("lab_name"), 
            this.lab_appName = t.getChildByName("lab_appName"));
        }
        onStart() {
            super.onStart();
        }
        initView(t) {
            var s = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf(".")), a = i.platformCfg.exportGameCfg[s];
            this.jsonUrl = a && a[0] && a[0].jsonUrl && a[0].jsonUrl.toString() || "config/nickname.json", 
            this.jsonUrl ? e.loader.load(this.jsonUrl, e.Handler.create(this, function(t) {
                for (let e = 0; e < t.length; e++) this.jsonData.push(t[e]);
                this.owner.visible = !1;
                let i = this;
                zs.laya.sdk.ZSReportSdk.loadAd(function(t) {
                    var s = t.promotion;
                    s = s.filter(function(t) {
                        return e.Browser.onAndroid || "wx48820730357d81a6" != t.appid && "wxc136d75bfc63107c" != t.appid;
                    }), i.adData = s[Math.floor(Math.random() * s.length)];
                }), !i.isShow && i.jsonData.length > 0 ? (i.isShow = !0, i.initUI()) : this.owner.destroy();
            })) : this.owner.destroy();
        }
        initUI() {
            this.owner.visible = !0;
            let t = this.jsonData[Math.floor(Math.random() * this.jsonData.length)];
            this.lab_name.text = t.nickname, this.lab_invite.text = '您的好友"' + this.checkStr(t.nickname) + '"向您发起挑战:', 
            this.lab_appName.text = this.adData.app_title, this.img_avater.skin = t.avatar, 
            this.img_icon.skin = this.adData.app_icon, this.btn_suc.on(e.Event.CLICK, this, this.onSucClick), 
            this.btn_fail.on(e.Event.CLICK, this, this.closeView);
        }
        checkStr(t) {
            return t.length >= 7 && (t = t.substring(0, 5) + "..."), t;
        }
        onSucClick() {
            this.owner.close(), zs.laya.sdk.ZSReportSdk.navigate2Mini(this.adData, zs.laya.game.AppMain.playerInfo.user_id, function() {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_SUCCESS);
            }, function() {
                e.stage.event(zs.laya.game.EventId.APP_JUMP_CANCEL);
            }, function() {});
        }
        closeView() {
            this.owner.close();
        }
    }
    e.ILaya.regClass(y), e.ClassUtils.regClass("zs.laya.platform.ChallengeView", y), 
    e.ClassUtils.regClass("Zhise.ChallengeView", y);
    class S extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.adList = null, this.closeBtn = null;
        }
        onAwake() {
            super.onAwake();
            var t, i = this.owner.getChildByName("topUI");
            i && (t = i.getChildByName("adList"), this.closeBtn = i.getChildByName("closeBtn"));
            var s = this.owner.getChildByName("middleUI");
            s && (t = t || s.getChildByName("adList"), this.closeBtn = this.closeBtn || s.getChildByName("closeBtn"));
            var a = this.owner.getChildByName("bottomUI");
            a && (this.closeBtn = this.closeBtn || a.getChildByName("closeBtn")), this.adList = t.addComponent(n), 
            this.closeBtn.on(e.Event.CLICK, this, this.closeView);
        }
        onDestroy() {
            this.closeBtn.off(e.Event.CLICK, this, this.closeView);
        }
        onStart() {
            var t = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf(".")), e = i.platformCfg.exportGameCfg[t], s = i.platformCfg;
            this.adList.requestAdData(e ? e[0].adType : "promotion", !1, n.SCROLL_NONE, s.iosFilterAppIds, e[0].position, 9);
        }
        closeView() {
            e.SoundManager.playSound(i.soundClick), i.currentView = "", this.owner.close();
        }
    }
    e.ILaya.regClass(S), e.ClassUtils.regClass("zs.laya.platform.HomeFloatAdView", S), 
    e.ClassUtils.regClass("Zhise.HomeFloatAdView", S);
    class E extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.headAdList = null, this.mainAdList = null, this.closeBtn = null, this.fakeExitBtn = null, 
            this.firstClick = !1, this.isOpenBanner = !1;
        }
        onAwake() {
            super.onAwake();
            var t, s, a = this.owner.getChildByName("topUI");
            a && (t = a.getChildByName("headAdList"), s = a.getChildByName("mainAdList"), this.closeBtn = a.getChildByName("closeBtn"), 
            this.continueBtn = a.getChildByName("continueBtn"), this.fakeExitBtn = a.getChildByName("fakeExitBtn"));
            var r = this.owner.getChildByName("middleUI");
            r && (t = t || r.getChildByName("headAdList"), s = s || r.getChildByName("mainAdList"), 
            this.closeBtn = this.closeBtn || r.getChildByName("closeBtn"), this.continueBtn = this.continueBtn || r.getChildByName("continueBtn"), 
            this.fakeExitBtn = this.fakeExitBtn || r.getChildByName("fakeExitBtn"));
            var l = this.owner.getChildByName("bottomUI");
            l && (this.continueBtn = this.continueBtn || l.getChildByName("continueBtn")), t && (this.headAdList = t.addComponent(n)), 
            s && (this.mainAdList = s.addComponent(n)), this.closeBtn && this.closeBtn.on(e.Event.CLICK, this, this.closeView), 
            this.fakeExitBtn && this.fakeExitBtn.on(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.once(e.Event.CLICK, this, this.onContinue), 
            e.stage.on(i.APP_HIDE, this, this.onAppHide), e.stage.on(i.APP_SHOW, this, this.onAppShow);
        }
        onDestroy() {
            this.closeBtn && this.closeBtn.off(e.Event.CLICK, this, this.closeView), this.fakeExitBtn && this.fakeExitBtn.off(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.onContinue), 
            this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.closeView), e.stage.off(i.APP_HIDE, this, this.onAppHide), 
            e.stage.off(i.APP_SHOW, this, this.onAppShow);
        }
        onEnable() {
            super.onEnable();
            var t = i.platformCfg.bannerCfg;
            if (t) {
                var e = t[this.viewName];
                if (e) {
                    var s = e.showData;
                    if (s) {
                        if (s.sign || 0 == s.sign || 0 == s.sign) {
                            var a = zs.laya.banner.WxBannerMgr.Instance.adUnitIdData.length;
                            this.bannerGroup = zs.laya.banner.WxBannerMgr.Instance.getBannerGroup(a <= 1 ? 0 : s.sign), 
                            this.bannerGroup && this.bannerGroup.hide();
                        }
                        var n = s.moveType;
                        1 == n && (this.bannerMoveType = n);
                    } else console.error("==============initBannerGroup===============", e.showData);
                }
            }
        }
        onStart() {
            super.onStart(), this.isOpenBanner = !1, this.firstClick = !1;
            var t = i.platformCfg.exportGameCfg[this.viewName], s = t ? t[0].adType : "promotion", r = i.platformCfg;
            this.headAdList && this.headAdList.requestAdData(s, !0, n.SCROLL_HORIZONTAL, r.iosFilterAppIds, null, !1, !1, !0), 
            this.mainAdList && this.mainAdList.requestAdData(s, !0, n.SCROLL_VERTICAL, r.iosFilterAppIds, null, !0, !1, !0), 
            e.timer.once(400, this, function() {
                if (this.mainAdList && this.mainAdList.adData.length && a.zs_switch && a.zs_auto_jump_switch) {
                    let t = Math.floor(Math.random() * this.mainAdList.adData.length);
                    this.mainAdList.onSelectAd(t);
                }
            });
        }
        onAppShow() {
            this.isOpenBanner && this.bannerGroup && this.bannerGroup.hide();
        }
        onAppHide() {
            this.isOpenBanner = !0;
        }
        onContinue() {
            if (a.zs_switch) {
                if (!this.firstClick) {
                    this.firstClick = !0;
                    var t = this;
                    setTimeout(function() {
                        t.bannerGroup && t.bannerGroup.updateBottonTouch(), t.bannerGroup && t.bannerGroup.show();
                    }, 500), setTimeout(function() {
                        t.bannerGroup && t.bannerGroup.hide(), t.continueBtn && t.continueBtn.on(e.Event.CLICK, t, t.closeView);
                    }, 1e3);
                }
            } else this.closeView();
        }
        closeView() {
            e.SoundManager.playSound(i.soundClick), i.currentView = "", this.owner.close();
        }
        onOpenListAd() {
            e.SoundManager.playSound(i.soundClick), i.showListAd();
        }
    }
    e.ILaya.regClass(E), e.ClassUtils.regClass("zs.laya.platform.FullScreeAdView", E), 
    e.ClassUtils.regClass("Zhise.FullScreeAdView", E);
    class I extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.headAdList = null, this.mainAdList = null, this.closeBtn = null, this.fakeExitBtn = null, 
            this.firstClick = !1, this.isOpenBanner = !1, this.dragSleep = 5e3, this.scrollSpeed = 1, 
            this.waitTime = 1e3, this.inAutoScroll = !1, this.changeValue = 0, this.unitValue = 0, 
            this.isEnd = !1, this.head = null, this.main = null, this.aniFinger = null;
        }
        onAwake() {
            super.onAwake();
            var t = this.owner.getChildByName("topUI");
            t && (this.headAdList = t.getChildByName("headAdList"), this.mainAdList = t.getChildByName("mainAdList"), 
            this.closeBtn = t.getChildByName("closeBtn"), this.continueBtn = t.getChildByName("continueBtn"), 
            this.fakeExitBtn = t.getChildByName("fakeExitBtn"), this.aniFinger = t.getChildByName("aniFinger"));
            var i = this.owner.getChildByName("bottomUI");
            i && (this.headAdList = this.headAdList || i.getChildByName("headAdList"), this.mainAdList = this.mainAdList || i.getChildByName("mainAdList"), 
            this.closeBtn = this.closeBtn || i.getChildByName("closeBtn"), this.continueBtn = this.continueBtn || i.getChildByName("continueBtn"), 
            this.fakeExitBtn = this.fakeExitBtn || i.getChildByName("fakeExitBtn")), this.closeBtn && this.closeBtn.on(e.Event.CLICK, this, this.closeView), 
            this.fakeExitBtn && this.fakeExitBtn.on(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.on(e.Event.CLICK, this, this.onContinue), this.headAdList.renderHandler = e.Handler.create(this, this.onItemRender, [ this.headAdList ], !1), 
            this.mainAdList.renderHandler = e.Handler.create(this, this.onItemRender, [ this.mainAdList ], !1), 
            this.headAdList.mouseEnabled = !0, this.mainAdList.mouseEnabled = !0, this.headAdList.mouseHandler = e.Handler.create(this, this.onSelectAd, [ this.headAdList ], !1), 
            this.mainAdList.mouseHandler = e.Handler.create(this, this.onSelectAd, [ this.mainAdList ], !1), 
            this.mainAdList.vScrollBarSkin = "";
        }
        initData() {
            var t = this;
            zs.laya.sdk.ZSReportSdk.loadAd(function(e) {
                t.adData = e[t.adType.toString()], t.allData = {};
                for (let e = 0; e < t.adData.length; e++) t.allData[t.adData[e].app_title] || (t.allData[t.adData[e].app_title] = []), 
                t.allData[t.adData[e].app_title].push(t.adData[e]);
                t.freshAdList();
            });
        }
        checkChange(t, i) {
            var s = i.array[t], a = s.app_title, n = e.LocalStorage.getItem("CheckDatas");
            try {
                (n = JSON.parse(n)) || (n = {});
            } catch (t) {
                n = {};
            }
            !this.allData[a] || this.allData[a].length <= 1 || (n[a] || (n[a] = {
                cur: 0
            }), n[a].cur++, s = this.allData[a][n[a].cur % this.allData[a].length], i.setItem(t, s), 
            e.LocalStorage.setItem("CheckDatas", JSON.stringify(n)));
        }
        checkData() {
            var t = e.LocalStorage.getItem("CheckDatas");
            try {
                (t = JSON.parse(t)) || (t = {});
            } catch (e) {
                t = {};
            }
            for (let e = 0; e < this.adData.length; e++) t[this.adData[e].app_title] || (t[this.adData[e].app_title] = {
                cur: 0
            });
            this.adData = [];
            for (let e in t) this.allData[e] && this.adData.push(this.allData[e][t[e].cur % this.allData[e].length]);
        }
        freshAdList() {
            this.checkData(), this.initRankData();
            for (var t = [], i = 0; i < 3; i++) this.adData[i] && t.push(this.adData[i]);
            this.headAdList.array = t;
            var s = [];
            if (this.adData.length > 3) for (i = 3; i < this.adData.length; i++) s.push(this.adData[i]);
            this.mainAdList.array = s;
            var a, n = this.mainAdList.getCell(0);
            n && (a = Math.ceil(this.mainAdList.array.length / this.mainAdList.repeatY), this.unitValue = (n.width + this.mainAdList.spaceX) / (a * n.width + this.mainAdList.spaceX * (a - 1) - this.mainAdList.width) * this.mainAdList.scrollBar.max, 
            console.log("单元value" + this.unitValue), e.stage.frameOnce(1, this, this.startAutoScrollAd));
        }
        initRankData() {
            for (var t = 0, e = 0; e < this.adData.length; e++) {
                if ((t = Math.floor(Math.random() * this.adData.length)) == e) continue;
                let i = this.adData[e];
                this.adData[e] = this.adData[t], this.adData[t] = i;
            }
            let i = 180;
            for (e = 0; e < this.adData.length; e++) this.adData[e].rank = e + 1, this.adData[e].rank = 1 == this.adData[e].rank ? 2 : 2 == this.adData[e].rank ? 1 : this.adData[e].rank, 
            t = i * (.6 + .4 * Math.random()), i = t += (i - t) * Math.random() * .3, t = t > 10 ? 10 * Math.floor(t / 10) + "万" : t > 1 ? Math.floor(t) + "万" : 1e3 * Math.floor(10 * t), 
            0 == e && this.adData[1] ? this.adData[1].playerNum = t : 1 == e ? this.adData[0].playerNum = t : this.adData[e].playerNum = t, 
            console.log("rank随机用户数量" + t);
        }
        onDestroy() {
            this.closeBtn && this.closeBtn.off(e.Event.CLICK, this, this.closeView), this.fakeExitBtn && this.fakeExitBtn.off(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.onContinue), 
            this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.closeView);
        }
        onEnable() {
            super.onEnable();
        }
        onStart() {
            super.onStart(), this.isOpenBanner = !1, this.firstClick = !1;
            var t = i.platformCfg.exportGameCfg[this.viewName];
            this.adType = t ? t[0].adType : "promotion";
            this.initData(), this.showFingerEff();
        }
        showBtn() {
            this.continueBtn.visible = !0;
            var t = this;
            t.showTimer && clearTimeout(t.showTimer), e.stage.off(zs.laya.platform.PlatformMgr.APP_JUMP_CANCEL, t, t.showBtn), 
            this.continueBtn.mouseEnabled = !1, a.zs_banner_vertical_enable && a.zs_switch ? e.Tween.from(this.continueBtn, {
                alpha: .3
            }, 800, null, e.Handler.create(t, function() {
                e.timer.once(zs.laya.platform.ADConfig.zs_banner_banner_time, t, function() {
                    zs.laya.banner.WxBannerMgr.Instance.showBanner();
                }), e.timer.once(zs.laya.platform.ADConfig.zs_banner_text_time, t, function() {
                    e.Tween.to(t.continueBtn, {
                        y: t.continueBtn.y - 280
                    }, zs.laya.platform.ADConfig.zs_banner_move_time, null, e.Handler.create(t, function() {
                        t.continueBtn.mouseEnabled = !0;
                    }));
                });
            })) : (this.continueBtn.y = this.continueBtn.y - 280, this.continueBtn.mouseEnabled = !0);
        }
        onAppShow() {
            this.isOpenBanner && this.bannerGroup && this.bannerGroup.hide();
        }
        onAppHide() {
            this.isOpenBanner = !0;
        }
        startAutoScrollAd() {
            this.mainAdList && (this.inAutoScroll = !0);
        }
        onItemRender(t, e, i) {
            if (t) {
                var s = t.array[i];
                if (s) {
                    if (a = e.getChildByName("icon")) a.skin = s.app_icon; else {
                        var a, n = e.getChildByName("iconBox");
                        if (n) (a = n.getChildByName("icon")) && (a.skin = s.app_icon);
                    }
                    var r = e.getChildByName("name");
                    r && (r.text = s.app_title);
                    var l = e.getChildByName("desc");
                    l && (l.text = s.app_desc);
                    var o = e.getChildByName("titleBg");
                    o && (o.index = Math.floor(o.clipY * Math.random()));
                    var h = e.getChildByName("playerNum");
                    h && s.playerNum && (h.text = s.playerNum + "人正在玩");
                    var d = e.getChildByName("rank");
                    d && s.rank && (d.text = s.rank);
                    var c = e.getChildByName("rankImg");
                    c && s.rank && (c.skin = "ad/img_Corner_" + s.rank + ".png");
                    var u = e.getChildByName("rankBg");
                    u && s.rank && (u.skin = "ad/img_rankBg_" + s.rank + ".png", 1 == s.rank && (e.y -= 68));
                } else e.visible = !1;
            }
        }
        onSelectAd(t, s, a) {
            if (s.type == e.Event.MOUSE_DOWN && null != a && -1 != a && t && t.array) {
                var r = t.array[a], l = this;
                l.isDataUpdate = !0, console.log("点击了"), zs.laya.sdk.ZSReportSdk.navigate2Mini(r, i.user_id, function() {
                    e.stage.event(n.EVENT_NAVIGATE_SUCCESS);
                }, function() {
                    e.stage.event(n.EVENT_NAVIGATE_FAILED);
                }, function() {
                    e.stage.event(n.EVENT_NAVIGATE_COMPLETED), l.checkChange(a, t);
                });
            }
        }
        onUpdate() {
            if (1 == this.inAutoScroll && this.mainAdList && this.mainAdList.scrollBar && this.mainAdList.scrollBar.max) {
                if (this.mainAdList.scrollBar.value >= this.mainAdList.scrollBar.max ? (this.mainAdList.scrollBar.value = this.mainAdList.scrollBar.max, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0) : this.mainAdList.scrollBar.value <= 0 && (this.mainAdList.scrollBar.value = 0, 
                this.scrollSpeed = 0 - this.scrollSpeed, this.isEnd = !0), this.mainAdList.scrollBar.value += this.scrollSpeed, 
                !this.unitValue) return;
                this.isEnd = this.isEnd && 0 != this.changeValue, this.changeValue += Math.abs(this.scrollSpeed), 
                (this.changeValue >= this.unitValue || this.isEnd) && (this.autoScroll = !1, this.isEnd = !1, 
                this.changeValue = 0, e.timer.once(this.waitTime, this, function() {
                    this.autoScroll = !0;
                }));
            }
            this.autoScroll && 0 == this.inAutoScroll && (this.passedTime += e.timer.delta, 
            this.passedTime > this.dragSleep && this.startAutoScrollAd());
        }
        onContinue() {
            if (a.zs_switch && a.zs_banner_vertical_enable) {
                if (!this.firstClick) {
                    this.firstClick = !0;
                    var t = this, i = zs.laya.banner.WxBannerMgr.Instance;
                    return i.hideAll(), setTimeout(function() {
                        i.showBanner();
                    }, zs.laya.platform.ADConfig.zs_banner_banner_time), void setTimeout(function() {
                        e.Tween.to(t.continueBtn, {
                            y: t.continueBtn.y - 250
                        }, zs.laya.platform.ADConfig.zs_banner_move_time, e.Ease.linearNone, e.Handler.create(t, () => {
                            t.continueBtn.on(e.Event.CLICK, t, t.closeView);
                        }));
                    }, zs.laya.platform.ADConfig.zs_banner_text_time);
                }
            } else this.closeView();
        }
        closeView() {
            e.SoundManager.playSound(i.soundClick), i.currentView = "", this.owner.close();
        }
        showFingerEff() {
            if (this.aniFinger) {
                this.aniFinger.visible = !0, this.aniFinger.play();
                var t = Math.random() * e.stage.width / 2 + e.stage.width / 4, i = Math.random() * e.stage.height / 2 + e.stage.height / 4;
                this.aniFinger.pos(t, i), e.timer.once(4e3, this, this.showFingerEff);
            }
        }
    }
    class k extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.headAdList = null, this.mainAdList = null, this.closeBtn = null, this.fakeExitBtn = null, 
            this.firstClick = !1, this.isOpenBanner = !1, this.autoScroll = !0, this.inAutoScroll = !1, 
            this.scrollSpeed = 1, this.isEnd = !1, this.passedTime = 0, this.dragSleep = 5e3, 
            this.scrollBar = null, this.list = null, this.aniFinger = null;
        }
        onAwake() {
            super.onAwake();
            var t, s, a, r = this.owner.getChildByName("topUI");
            r && (r.vScrollBarSkin = "", this.list = r, this.scrollBar = r.vScrollBar, t = r.getChildByName("headAdList"), 
            s = r.getChildByName("mainAdList"), a = r.getChildByName("RecentPlayList"), this.closeBtn = r.getChildByName("closeBtn"), 
            this.continueBtn = r.getChildByName("continueBtn"), this.fakeExitBtn = r.getChildByName("fakeExitBtn"), 
            this.aniFinger = r.getChildByName("aniFinger"));
            var l = this.owner.getChildByName("middleUI");
            l && (t = t || l.getChildByName("headAdList"), s = s || l.getChildByName("mainAdList"), 
            this.closeBtn = this.closeBtn || l.getChildByName("closeBtn"), this.continueBtn = this.continueBtn || l.getChildByName("continueBtn"), 
            this.fakeExitBtn = this.fakeExitBtn || l.getChildByName("fakeExitBtn"));
            var o = this.owner.getChildByName("bottomUI");
            o && (this.continueBtn = this.continueBtn || o.getChildByName("continueBtn")), t && (this.headAdList = t.addComponent(n)), 
            s && (this.mainAdList = s.addComponent(n)), a && (this.recentPlay = a.addComponent(n)), 
            this.closeBtn && this.closeBtn.on(e.Event.CLICK, this, this.closeView), this.fakeExitBtn && this.fakeExitBtn.on(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.once(e.Event.CLICK, this, this.onContinue), 
            this.list.on(e.Event.MOUSE_UP, this, this.onDragStateChanged, [ 0 ]), this.list.on(e.Event.MOUSE_OUT, this, this.onDragStateChanged, [ 0 ]), 
            this.list.on(e.Event.MOUSE_DOWN, this, this.onDragStateChanged, [ 1 ]), e.stage.on(i.APP_HIDE, this, this.onAppHide), 
            e.stage.on(i.APP_SHOW, this, this.onAppShow);
        }
        onDestroy() {
            this.closeBtn && this.closeBtn.off(e.Event.CLICK, this, this.closeView), this.fakeExitBtn && this.fakeExitBtn.off(e.Event.CLICK, this, this.onOpenListAd), 
            this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.closeView), this.continueBtn && this.continueBtn.off(e.Event.CLICK, this, this.closeView), 
            e.stage.off(i.APP_HIDE, this, this.onAppHide), e.stage.off(i.APP_SHOW, this, this.onAppShow), 
            this.list.off(e.Event.MOUSE_UP, this, this.onDragStateChanged), this.list.off(e.Event.MOUSE_OUT, this, this.onDragStateChanged), 
            this.list.off(e.Event.MOUSE_DOWN, this, this.onDragStateChanged);
        }
        onDragStateChanged(t) {
            this.inAutoScroll = !1, this.autoScroll && 0 == t && (this.passedTime = 0);
        }
        onEnable() {
            super.onEnable();
        }
        onStart() {
            super.onStart(), this.isOpenBanner = !1, this.firstClick = !1;
            var t = i.platformCfg.exportGameCfg[this.viewName], s = t ? t[0].adType : "promotion", r = i.platformCfg;
            this.headAdList && this.headAdList.requestAdData(s, !0, n.SCROLL_HORIZONTAL, r.iosFilterAppIds, t[0].position, null, !1, !1, !0), 
            this.mainAdList && (this.mainAdList.setFixHeight(!0), this.mainAdList.requestAdData(s, !1, n.SCROLL_VERTICAL, r.iosFilterAppIds, t[0].position, null, !0, !1, !0), 
            e.timer.once(3e3, this, this.startAutoScrollAd)), this.recentPlay && this.recentPlay.requestAdData(s, !0, n.SCROLL_NONE, r.iosFilterAppIds, t[0].position, null, !1, !1, !0), 
            e.timer.once(400, this, function() {
                if (this.mainAdList && this.mainAdList.adData.length && a.zs_switch && a.zs_auto_jump_switch) {
                    let t = Math.floor(Math.random() * this.mainAdList.adData.length);
                    this.mainAdList.onSelectAd(t);
                }
            }), this.showFingerEff();
        }
        showFingerEff() {
            this.aniFinger.visible = !0, this.aniFinger.play();
            var t = Math.random() * e.stage.width / 2 + e.stage.width / 4, i = Math.random() * e.stage.height / 2 + e.stage.height / 4;
            i += this.scrollBar.value, this.aniFinger.pos(t, i), e.timer.once(4e3, this, this.showFingerEff);
        }
        onAppShow() {
            this.isOpenBanner && this.bannerGroup && this.bannerGroup.hide();
        }
        onAppHide() {
            this.isOpenBanner = !0;
        }
        onContinue() {
            if (a.zs_switch && a.zs_banner_vertical_enable) {
                if (!this.firstClick) {
                    this.firstClick = !0;
                    var t = this, i = zs.laya.banner.WxBannerMgr.Instance;
                    return i.hideAll(), setTimeout(function() {
                        i.showBanner();
                    }, a.zs_banner_banner_time), void setTimeout(function() {
                        e.Tween.to(t.continueBtn, {
                            y: t.continueBtn.y - 250
                        }, a.zs_banner_move_time, e.Ease.linearNone, e.Handler.create(t, () => {
                            t.continueBtn.on(e.Event.CLICK, t, t.closeView);
                        }));
                    }, a.zs_banner_text_time);
                }
            } else this.closeView();
        }
        closeView() {
            e.SoundManager.playSound(i.soundClick), i.currentView = "", this.owner.close();
        }
        onOpenListAd() {
            e.SoundManager.playSound(i.soundClick), i.showListAd();
        }
        startAutoScrollAd() {
            this.mainAdList && (this.inAutoScroll = !0);
        }
        onUpdate() {
            var t = this.scrollBar;
            if (this.autoScroll && 1 == this.inAutoScroll && this.mainAdList && t && t.max) {
                if (t.value >= t.max ? (t.value = t.max, this.scrollSpeed = 0 - this.scrollSpeed, 
                this.isEnd = !0) : t.value <= 0 && (t.value = 0, this.scrollSpeed = 0 - this.scrollSpeed, 
                this.isEnd = !0), t.value += this.scrollSpeed, !this.unitValue || !this.isClockPendulum) return;
                this.isEnd = this.isEnd && 0 != this.changeValue, this.changeValue += Math.abs(this.scrollSpeed), 
                (this.changeValue >= this.unitValue || this.isEnd) && (this.autoScroll = !1, this.isEnd = !1, 
                this.changeValue = 0, e.timer.once(this.waitTime, this, function() {
                    this.autoScroll = !0;
                }));
            }
            this.autoScroll && 0 == this.inAutoScroll && (this.passedTime += e.timer.delta, 
            this.passedTime > this.dragSleep && this.startAutoScrollAd());
        }
    }
    class b extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.adList = null, this.closeBtn = null;
        }
        onAwake() {
            super.onAwake();
            var t = this.owner.getChildByName("topUI");
            this.adList = t.getChildByName("adList").addComponent(n), this.closeBtn = t.getChildByName("topFrame").getChildByName("closeBtn"), 
            this.closeBtn.on(e.Event.CLICK, this, this.closeView);
            var i = this.owner.getChildByName("bottomUI").getChildByName("bottomImg");
            if (i) {
                var s = i.getChildByName("backHomeBtn");
                s && s.on(e.Event.CLICK, this, this.closeView);
                var a = i.getChildByName("continueBtn");
                a && a.on(e.Event.CLICK, this, this.closeView);
            }
        }
        onDestroy() {
            this.closeBtn.off(e.Event.CLICK, this, this.closeView);
        }
        onStart() {
            var t = i.platformCfg.exportGameCfg[this.viewName], e = i.platformCfg;
            this.adList.requestAdData(t ? t[0].adType : "promotion", !1, n.SCROLL_VERTICAL, e.iosFilterAppIds, t[0].position, null, !0);
        }
        closeView() {
            e.SoundManager.playSound(i.soundClick), i.currentView = "", this.owner.close();
        }
    }
    e.ILaya.regClass(b), e.ClassUtils.regClass("zs.laya.platform.ListAdView", b), e.ClassUtils.regClass("Zhise.ListAdView", b);
    class D extends zs.laya.base.ZhiSeView {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.initData();
            var t = this.owner.getChildByName("bottomUI");
            t && (this.btn_repair = t.getChildByName("eggBtn"));
            var s = this.owner.getChildByName("middleUI");
            this.eggUI = s.getChildByName("eggUI"), this.eggUI && (this.btn_repair || (this.btn_repair = this.eggUI.getChildByName("eggBtn")), 
            this.progressBar = this.eggUI.getChildByName("loading_1"), this.progressWidth = this.progressBar.bitmap.width, 
            this.progressHeight = this.progressBar.bitmap.height), this.bannerMoveType = 0, 
            this.initCfg(), e.stage.on(i.APP_HIDE, this, this.onAppHide), e.stage.on(i.APP_SHOW, this, this.onAppShow), 
            this.btn_repair && (this.btn_repair.on(e.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.on(e.Event.MOUSE_UP, this, this.clickHammer)), this.hammerAni = this.owner.knockAni;
        }
        initCfg() {
            this.knockEggCfg = e.loader.getRes("config/KnockEggCfg.json"), this.awardDelay = 1e3, 
            this.closeDelay = 1e3, this.knockEggCfg && (s.IsNumber(this.knockEggCfg.awardDelay) && (this.awardDelay = Number(this.knockEggCfg.awardDelay)), 
            s.IsNumber(this.knockEggCfg.closeDelay) && (this.closeDelay = Number(this.knockEggCfg.closeDelay)));
        }
        isShowAward() {
            return this.knockEggCfg && this.knockEggCfg.isShowAward;
        }
        onTouchStart(t) {
            this.lastMouseX = e.stage.mouseX, this.lastMouseY = e.stage.mouseY;
        }
        initData() {
            this.btn_repair = null, this.progressBar = null, this.hammerAni = null, this.egg = null, 
            this.touchNode = null, this.repairProgress = 0, this.click_add_percent = .14, this.isOpenAd = !1, 
            this.repair_click_num = [ .3, .7 ], this.showBannerRange = 1, this.isGetAward = !1, 
            this.callback = null;
        }
        onEnable() {
            super.onEnable(), this.initRepair();
        }
        onDisable() {
            super.onDisable();
        }
        onDestroy() {
            this.removeEvent(), super.onDestroy();
        }
        removeEvent() {
            e.timer.clear(this, this.cutBack), e.stage.off(i.APP_HIDE, this, this.onAppHide), 
            e.stage.off(i.APP_SHOW, this, this.onAppShow), this.btn_repair && (this.btn_repair.off(e.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.off(e.Event.MOUSE_UP, this, this.clickHammer));
        }
        onAppHide() {
            this.isOpenAd && (this.btn_repair && (this.btn_repair.off(e.Event.MOUSE_DOWN, this, this.onTouchStart), 
            this.btn_repair.off(e.Event.MOUSE_UP, this, this.clickHammer)), this.isOpenAd = !0, 
            e.timer.clear(this, this.resetIsOpenAd), e.timer.clear(this, this.cutBack), this.isShowAward() || this.onFinish());
        }
        initBannerGroup() {
            var t = i.platformCfg.bannerCfg;
            if (t) {
                var e = t[this.viewName];
                if (e) {
                    var s = e.showData;
                    if (s) {
                        if (s.sign || 0 == s.sign || 0 == s.sign) {
                            var a = zs.laya.banner.WxBannerMgr.Instance.adUnitIdData.length;
                            this.bannerGroup = zs.laya.banner.WxBannerMgr.Instance.getBannerGroup(a <= 1 ? 0 : s.sign), 
                            this.bannerGroup && this.bannerGroup.hide();
                        }
                        var n = s.moveType;
                        1 == n && (this.bannerMoveType = n);
                    } else console.error("==============initBannerGroup===============", e.showData);
                }
            }
        }
        onAppShow() {
            this.isOpenAd && (this.bannerGroup && this.bannerGroup.hide(), this.isShowAward() && this.onFinish());
        }
        initRepair() {
            this.isGetAward = !1, e.timer.loop(20, this, this.cutBack), a.zs_click_award_percent.indexOf("[") >= 0 ? this.repair_click_num = JSON.parse(a.zs_click_award_percent) : this.repair_click_num = a.zs_click_award_percent.split(","), 
            this.click_add_percent = a.zs_click_award_add, this.zs_click_award_back = a.zs_click_award_back, 
            this.click_add_percent = .01 * s.random(.9 * this.click_add_percent * 100, 1.1 * this.click_add_percent * 100), 
            console.log("===============repair_click_num=====================", this.repair_click_num), 
            this.showBannerRange = .01 * s.random(100 * Number(this.repair_click_num[0]), 100 * Number(this.repair_click_num[1]));
        }
        setCloseCallback(t) {
            this.callback = t;
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
                    zs.laya.banner.WxBannerMgr.Instance.showBanner(), e.timer.once(500, this, function() {
                        e.Tween.to(this.btn_repair, {
                            y: this.btn_repair.y - 250
                        }, 500);
                    });
                }
            } else this.updateRepairPorgress(this.repairProgress + this.click_add_percent), 
            this.bannerGroup && this.bannerGroup.hide(), e.timer.clear(this, this.cutBack), 
            e.timer.clear(this, this.resetIsOpenAd), this.onFinish();
        }
        resetIsOpenAd() {
            this.isOpenAd = !1;
        }
        onFinish() {
            if (!this.isGetAward) {
                var t = e.LocalStorage.getItem(window.zs.wx.appId + "open_award_num") || 0;
                e.LocalStorage.setItem(window.zs.wx.appId + "open_award_num", Number(t) + 1), this.isGetAward = !0, 
                e.timer.once(this.awardDelay, this, function() {
                    e.stage.event(i.EGG_GET_AWARD);
                }), e.timer.once(Math.max(this.closeDelay, this.awardDelay + 40), this, this.onClose);
            }
        }
        onClose() {
            console.log("====================关闭金蛋=================="), this.callback && this.callback(), 
            this.bannerGroup && this.bannerGroup.hide(), i.currentView = "", this.owner.close();
        }
        updateRepairPorgress(t) {
            this.repairProgress = Math.min(1, Math.max(0, t)), this.progressWidth < this.progressHeight ? this.progressBar && (this.progressBar.height = this.progressBar.clipHeight = Math.max(1, this.progressHeight * this.repairProgress)) : this.progressBar && (this.progressBar.width = Math.max(1, this.progressWidth * this.repairProgress));
        }
        cutBack() {
            this.repairProgress -= this.zs_click_award_back, this.updateRepairPorgress(this.repairProgress);
        }
    }
    e.ILaya.regClass(D), e.ClassUtils.regClass("zs.laya.platform.KnockEggView", D), 
    e.ClassUtils.regClass("Zhise.KnockEggView", D);
    class z extends e.Script {
        constructor() {
            super(), this.args = null, this.adView = null;
        }
        onDestroy() {
            if (this.adView) {
                var t = this.getViewScript(this.args.scriptType);
                null == t && (t = B);
                var e = this.adView.getComponent(t);
                e && e.releaseView(), this.adView.removeSelf(), this.adView = null;
            }
        }
        onStart() {
            if (this.adView) this.adView.visible = !0; else if (!(zs.laya.sdk.ZSReportSdk.Instance && zs.laya.sdk.ZSReportSdk.Instance.isFromLink() && 0 == zs.laya.sdk.ZSReportSdk.Instance.isExportValid() || 0 == a.zs_jump_switch || 0 == a.isPublicVersion())) {
                var t = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf("."));
                this.args = i.platformCfg.nativeAdCfg[t], this.args && e.loader.create(this.args.viewUrl, e.Handler.create(this, this.onPrefabReady), null, e.Loader.PREFAB);
            }
        }
        onPrefabReady(t) {
            if (!this.destroyed) if (this.owner.getChildByName(this.args.parentRoot)) {
                this.adView = t.create(), this.owner.getChildByName(this.args.parentRoot).addChild(this.adView), 
                this.adView.x = this.args.x, this.adView.y = this.args.y;
                var e = this.getViewScript(this.args.scriptType);
                null == e && (e = B);
                var i = this.adView.getComponent(e);
                null == i && (i = this.adView.addComponent(e)), i.initView(this.args);
            } else console.log(viewName + " page parentRoot " + this.args.parentRoot + " is null");
        }
        getViewScript(t) {
            switch (t) {
              case "NativeIconAdView":
                return B;

              case "NativeGridAdView":
                return N;
            }
        }
    }
    e.ILaya.regClass(z), e.ClassUtils.regClass("zs.laya.platform.NativeAdsCtrl", z), 
    e.ClassUtils.regClass("Zhise.NativeAdsCtrl", z);
    class B extends e.Script {
        constructor() {
            super(), this.gameIcon = null, this.config = null, this.maskViewNum = 0, this.iconReady = !1;
        }
        initView(t) {
            this.config = t, this.maskViewNum = 0, this.iconReady = !1;
            for (var s = e.stage.getChildByName("root"), a = s.numChildren - 1; a >= 0; a--) {
                var n = s.getChildAt(a);
                n.zOrder && n.zOrder > this.owner.zOrder && this.maskViewNum++, console.log("stage:" + n.name);
            }
            e.stage.on(i.UI_VIEW_OPENED, this, this.onViewOpened), e.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed);
        }
        onStart() {
            var t = [], e = "undefined" != typeof wx;
            if (0 != e) {
                var i = wx.getSystemInfoSync();
                if (e = s.compareVersion(i.SDKVersion, "2.8.2") >= 0, this.owner.visible = e, 0 != e && (this.updateIconStyle(t, i), 
                0 != t.length && (console.log(t), this.gameIcon = wx.createGameIcon({
                    adUnitId: a.response[this.config.idKey],
                    count: t.length,
                    style: t
                }), this.gameIcon))) {
                    console.log("load gameIcon");
                    var n = this;
                    this.gameIcon.onError(function(t) {
                        console.error(t), n.gameIcon = null;
                    }), this.gameIcon.load(), this.gameIcon.onLoad(function() {
                        console.log("gameIcon loaded"), n.iconReady = !0, 0 == n.maskViewNum && n.owner.visible && n.gameIcon.show();
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
        updateIconStyle(t, i) {
            var s = this.owner.getChildByName("container");
            if (null != s) for (var a = 0; a < s.numChildren; a++) {
                const r = s.getChildAt(a);
                r.visible = !1;
                var n = this.owner.localToGlobal(new e.Point(r.x, r.y), !0);
                t.push({
                    appNameHidden: !0,
                    color: "white",
                    borderWidth: 1,
                    borderColor: "white",
                    top: n.y / e.stage.height * i.windowHeight,
                    left: n.x / e.stage.width * i.windowWidth,
                    size: r.width / e.stage.width * i.windowWidth
                });
            }
        }
        releaseView() {
            this.maskViewNum = -1, e.stage.off(i.UI_VIEW_OPENED, this, this.onViewOpened), e.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed), 
            this.gameIcon && (this.gameIcon.destroy(), this.gameIcon = null);
        }
        onViewOpened(t, e) {
            e.zOrder > this.owner.zOrder && this.maskViewNum++, 0 != this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.hide();
        }
        onViewClosed(t, e) {
            e.zOrder > this.owner.zOrder && this.maskViewNum--, 0 == this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.show();
        }
    }
    e.ILaya.regClass(B), e.ClassUtils.regClass("zs.laya.platform.NativeIconAdView", B), 
    e.ClassUtils.regClass("Zhise.NativeIconAdView", B);
    class N extends e.Script {
        constructor() {
            super(), this.gameIcon = null, this.config = null, this.maskViewNum = 0, this.iconReady = !1;
        }
        initView(t) {
            this.config = t, this.maskViewNum = 0, this.iconReady = !1;
            for (var s = e.stage.getChildByName("root"), a = s.numChildren - 1; a >= 0; a--) {
                var n = s.getChildAt(a);
                n.zOrder && n.zOrder > this.owner.zOrder && this.maskViewNum++, console.log("stage:" + n.name);
            }
            e.stage.on(i.UI_VIEW_OPENED, this, this.onViewOpened), e.stage.on(i.UI_VIEW_CLOSED, this, this.onViewClosed);
        }
        onStart() {
            var t = "undefined" != typeof wx;
            if (0 != t) {
                var e = wx.getSystemInfoSync();
                if (t = s.compareVersion(e.SDKVersion, "2.8.0") >= 0, this.owner.visible = t, 0 != t) {
                    var i = this.updateIconStyle(e);
                    if (!this.gameIcon) {
                        if (this.gameIcon = wx.createCustomAd({
                            adUnitId: a.response[this.config.idKey]
                        }), !this.gameIcon) return void console.error("创建原生广告失败");
                        var n = this;
                        this.gameIcon.onError(function(t) {
                            console.error(t), n.gameIcon = null;
                        }), this.gameIcon.onLoad(function() {
                            console.log("gameIcon loaded"), n.iconReady = !0, 0 == n.maskViewNum && n.owner.visible && n.gameIcon.show();
                        });
                    }
                    console.log("宽高", i.left, i.top), this.gameIcon.left = i.left, this.gameIcon.top = i.top;
                }
            }
        }
        onEnable() {
            this.gameIcon && this.gameIcon.show();
        }
        onDisable() {
            console.log("原生广告onDisable"), this.gameIcon && (console.log("原生广告隐藏了"), this.gameIcon.hide());
        }
        updateIconStyle(t) {
            var i = this.owner;
            if (null == i) return;
            const s = i.getChildAt(0);
            s.visible = !1;
            var a = s.localToGlobal(new e.Point(0, 0), !0);
            return console.log("样式：", a), {
                appNameHidden: !0,
                color: "white",
                borderWidth: 1,
                borderColor: "white",
                top: a.y / e.stage.height * t.windowHeight,
                left: a.x / e.stage.width * t.windowWidth
            };
        }
        releaseView() {
            this.maskViewNum = -1, e.stage.off(i.UI_VIEW_OPENED, this, this.onViewOpened), e.stage.off(i.UI_VIEW_CLOSED, this, this.onViewClosed), 
            this.gameIcon && (this.gameIcon.destroy(), this.gameIcon = null);
        }
        onViewOpened(t, e) {
            e.zOrder > this.owner.zOrder && this.maskViewNum++, 0 != this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.hide();
        }
        onViewClosed(t, e) {
            e.zOrder > this.owner.zOrder && this.maskViewNum--, 0 == this.maskViewNum && this.gameIcon && this.iconReady && this.gameIcon.show();
        }
    }
    e.ILaya.regClass(N), e.ClassUtils.regClass("zs.laya.platform.NativeGridAdView", N), 
    e.ClassUtils.regClass("Zhise.NativeGridAdView", N);
    class V extends e.Script {
        constructor() {
            super();
        }
        onAwake() {
            if (1 == a.isPublicVersion()) {
                var t = this.owner.url.substring(this.owner.url.lastIndexOf("/") + 1, this.owner.url.lastIndexOf(".")), e = i.platformCfg.mistakenlyTouchCfg[t];
                if (e) for (var s = 0; s < e.length; s++) {
                    const t = e[s], i = this.findChildByPath(t.path);
                    var n = i.x, r = i.y;
                    if (a.zs_switch && a.zs_banner_vertical_enable) {
                        var l = t.showType || "move";
                        "move" == l && a.zs_banner_vertical_enable ? (i.mouseEnabled = !1, i.x += t.offsetX, 
                        i.y += t.offsetY, this.owner.timerOnce(a.zs_banner_text_time, this, this.moveBack, [ n, r, a.zs_banner_move_time, i ], !1)) : "delay" == l && a.zs_button_delay_switch ? (i.mouseEnabled = !1, 
                        i.visible = !1, this.owner.timerOnce(a.zs_button_delay_time, this, this.showObj, [ i ], !1)) : a.zs_unmiss_text_time > 0 && (i.mouseEnabled = !1, 
                        i.visible = !1, this.owner.timerOnce(a.zs_unmiss_text_time, this, this.showObj, [ i ], !1));
                    }
                }
            }
        }
        moveBack(t, i, s, a) {
            e.Tween.to(a, {
                x: t,
                y: i
            }, s, null, e.Handler.create(this, this.activeObj, [ a ]));
        }
        activeObj(t) {
            t.mouseEnabled = !0;
        }
        showObj(t) {
            t.visible = !0, t.mouseEnabled = !0;
        }
        findChildByPath(t) {
            for (var e = t.split("/"), i = this.owner, s = 0; s < e.length; s++) i = i.getChildByName(e[s]);
            return i;
        }
    }
    e.ILaya.regClass(V), e.ClassUtils.regClass("zs.laya.platform.MistakenlyTouchCtrl", V), 
    e.ClassUtils.regClass("Zhise.MistakenlyTouchCtrl", V);
    class L extends e.Script {
        constructor() {
            super();
        }
        onDestroy() {
            e.stage.off(i.UI_VIEW_OPENED, this, this.hideNative), zs.laya.sdk.SdkService.hideCustomAd();
        }
        onEnable() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
            var t = i.platformCfg.customAdCfg[this.viewName];
            if (t) {
                for (let e = 0; e < t.length; e++) t[e].checkKey && !a[t[e].checkKey] || zs.laya.sdk.SdkService.checkCustomAd(t[e].left, t[e].right, t[e].top, t[e].bottom, t[e].id, t[e].direct, t[e].num, t[e].scale, t[e].centerX, t[e].centerY);
                e.stage.off(i.UI_VIEW_OPENED, this, this.hideNative), e.stage.once(i.UI_VIEW_OPENED, this, this.hideNative);
            }
        }
        hideNative() {
            zs.laya.sdk.SdkService.hideCustomAd();
        }
    }
    e.ILaya.regClass(L), e.ClassUtils.regClass("zs.laya.platform.CustomAdCtrl", L), 
    e.ClassUtils.regClass("Zhise.CustomAdCtrl", L);
    class x extends e.Script {
        onEnable() {
            e.timer.frameOnce(1, this, this.checkBanner);
        }
        checkBanner() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
            var t = i.platformCfg.bannerCfg, e = zs.laya.banner.WxBannerMgr.Instance;
            if (this.owner.on(zs.laya.platform.PlatformMgr.UI_VIEW_OPENED, this, this.clearDelay), 
            e.hideAll(), t) {
                var s = t[this.viewName];
                if (s) {
                    var n = s.showData;
                    if (n) {
                        if (!(!n.checkKey || n.checkKey && a[n.checkKey]) || null != n.checkKey && !a.isPublicVersion()) return void (e.isWait = !0);
                        e.updateBanner(n.isDelay || n.unAutoShow, n.pos, n.length, n.checkInit, n.isPoint), 
                        n.isDelay && a.zs_banner_banner_time && (this.delayTime = setTimeout(function() {
                            e.showBanner(n.pos, n.length, n.isPoint);
                        }, a.zs_banner_banner_time));
                    } else e.isWait = !0;
                } else e.isWait = !0;
            }
        }
        clearDelay() {
            this.delayTime && clearTimeout(this.delayTime);
        }
        onDisable() {
            this.viewName = this.owner.url, this.viewName = this.viewName.substring(this.viewName.lastIndexOf("/") + 1, this.viewName.lastIndexOf("."));
            var t = i.platformCfg.bannerCfg;
            (zs.laya.banner.WxBannerMgr.Instance.hideAll(), t) && (t[this.viewName] && this.delayTime && clearTimeout(this.delayTime));
            e.timer.clearAll(this);
        }
    }
    e.ILaya.regClass(x), e.ClassUtils.regClass("zs.laya.platform.BannerCtrl", x), e.ClassUtils.regClass("Zhise.BannerCtrl", x), 
    t.PlatformMgr = i, t.MathUtils = s, t.ADConfig = a, t.ExportGameCtrl = l, t.NativeAdsCtrl = z, 
    t.MistakenlyTouchCtrl = V, t.BannerCtrl = x, t.AdList = n, t.FullScreeAdView_Rank = I, 
    t.CustomAdCtrl = L, t.ExportLeftPop = w, t.KnockEggView = D;
}(window.zs.laya.platform = window.zs.laya.platform || {}, Laya);