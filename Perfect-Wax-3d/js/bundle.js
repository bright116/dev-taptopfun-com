!function () {
    "use strict";
    class t extends Laya.Scene {
        onAwake() {
            this.height = Laya.stage.height, this.init();
        }
        init() { }
    }
    class e {
        static GetPlayerData() {
            let t;
            if (t = Laya.LocalStorage.getJSON("PlayerData")) return t;
            {
                let e = JSON.stringify(this.newData);
                return t = JSON.parse(e), Laya.LocalStorage.setJSON("PlayerData", t), t;
            }
        }
        static CheckPlayerData(t) {
            if (!t.ver || t.ver != this.newData.ver) {
                let t = JSON.stringify(this.newData), e = JSON.parse(t);
                this.SavePlayerData(e);
            }
        }
        static SavePlayerData(t) {
            Laya.LocalStorage.setJSON("PlayerData", t);
        }
        static clearPlayerData() {
            Laya.LocalStorage.clear();
        }
    }
    e.newData = {
        ver: "1.0.5",
        grade: 1,
        coin: 1e3,
        nowColor: 1,
        nowBoard: 1,
        nowHead: 0,
        activeBoard: [!0, !1, !1, !1],
        activeHead: [!0, !1, !1, !1, !1, !1, !1, !1]
    };
    class a extends Laya.Script {
        onAwake() {
            this.icon = this.owner.getChildAt(0), this.toScale(this.owner, 1, 1.1, 500, !0, !0),
                this.initData(), Laya.timer.loop(3e3, this, this.initData);
        }
        initData() {
            var t = this.getRandomIndex(), e = u.instance.navDataArr[t];
            e && (this.icon.skin = e.icon, this.icon.off(Laya.Event.CLICK, this, this.navCB),
                this.icon.on(Laya.Event.CLICK, this, this.navCB, [t]));
        }
        getRandomIndex() {
            return Math.floor(Math.random() * u.instance.navDataArr.length);
        }
        navCB(t) {
            console.log("click id:", t), u.instance.NavigateApp(t, () => {
                console.log("cancel"), Laya.timer.scale = 1;
            }), Laya.Browser.onWeiXin && (Laya.timer.scale = 0);
        }
        toRotaion(t, e, a, n = !1, i = !1) {
            var s = t.rotation;
            function rotate2() {
                Laya.Tween.to(t, {
                    rotation: -e
                }, 2 * a, null, Laya.Handler.create(this, rotate3));
            }
            function rotate3() {
                Laya.Tween.to(t, {
                    rotation: e
                }, 2 * a, null, Laya.Handler.create(this, rotate2));
            }
            function rotate4() {
                Laya.Tween.to(t, {
                    rotation: s
                }, a);
            }
            !function () {
                if (n) var s = new Laya.Handler(this, rotate2); else if (i) var s = new Laya.Handler(this, rotate4);
                Laya.Tween.to(t, {
                    rotation: e
                }, a, null, s);
            }();
        }
        toScale(t, e, a, n, i, s = !1, o = null) {
            if (t) {
                var r = null;
                t.scale(e, e), scale1();
            }
            function scale1() {
                r = s || i ? new Laya.Handler(this, scale2) : null, Laya.Tween.to(t, {
                    scaleX: a,
                    scaleY: a
                }, n, o, r);
            }
            function scale2() {
                r = s ? new Laya.Handler(this, scale1) : null, Laya.Tween.to(t, {
                    scaleX: e,
                    scaleY: e
                }, n, o, r);
            }
        }
    }
    class n {
        constructor() {
            this.dataConfig = u.instance.dataConfig;
        }
        static get Instance() {
            return n._instance || (n._instance = new n()), n._instance;
        }
        setLevel(t, e) {
            this.storageData = t, this.storageKey = e;
        }
        get Level() {
            return this.storageData[this.storageKey];
        }
        get isOpenWuChu() {
            return this.dataConfig.is_allow_area && this.allowScene && this.Level >= this.dataConfig.front_pass_gate && this.Level < this.dataConfig.front_wuchu_finish_gate;
        }
        get isOpenExport() {
            return this.dataConfig.front_all_export_switch && this.dataConfig.is_allow_export && this.allowScene;
        }
        get isShowExportMoreBtn() {
            return this.dataConfig.front_all_export_switch && this.dataConfig.front_jingxi_export_switch;
        }
        get isShowExportOfficialBtn() {
            return this.isOpenExport && this.Level >= this.dataConfig.front_game_number_official;
        }
        navClick(t) {
            console.log("click id:", t), u.instance.NavigateApp(t, () => { });
        }
        getRandomIndex() {
            return Math.floor(Math.random() * u.instance.navDataArr.length);
        }
        get getRandom0To100() {
            return 100 * Math.random();
        }
        missTouch(t, e = 300) {
            if (this.isOpenWuChu && t && _.isAdOn) {
                this.missTouchBtn = t, i.Instance.hideBanner(), t.bottom = 90;
                var a = this.dataConfig.front_banner_appear, n = this.dataConfig.front_button_up;
                Laya.timer.once(a, t, () => {
                    i.Instance.showBanner(), Laya.Tween.to(t, {
                        bottom: e
                    }, n);
                });
            }
        }
        clearMissTouch(t) {
            Laya.timer.clearAll(t);
        }
        getTitle(t, e = !0) {
            let a = u.instance.navDataArr;
            return null == a[t] ? " " : e && a[t].subtitle && "" != a[t].subtitle ? a[t].subtitle : a[t].title;
        }
        get allowScene() {
            if (Laya.Browser.onWeiXin) {
                var t = wx.getLaunchOptionsSync();
                console.log("当前场景：", t.scene);
                var e = !0;
                let a = this.dataConfig.front_wuchu_scene;
                if (null == a && (e = !0), -1 == a.search("|")) {
                    e = parseInt(a) != t.scene;
                }
                let n = a.split("|");
                for (let a = 0; a < n.length; a++) {
                    parseInt(n[a]) == t.scene && (e = !1);
                }
                return e;
            }
            return !0;
        }
        createTimeTag() {
            if (this.dataConfig.front_time_tag_switch) {
                let t = new Laya.Scene();
                Laya.stage.addChild(t), t.size(Laya.stage.width, Laya.stage.height);
                let e = new Laya.Label();
                t.addChild(e), e.bold = !0, e.fontSize = 20, e.color = "#ffffff", e.top = 0, e.right = 0,
                    this.fcTime = e, t.zOrder = 100, this.updateTime(), Laya.timer.loop(1e3, this, this.updateTime);
            }
        }
        updateTime() {
            let t = new Date(), e = t.getMonth() + 1, a = t.getDate(), n = t.getHours(), i = t.getMinutes(), s = e < 10 ? "0" + e : e.toString(), o = a < 10 ? "0" + a : a.toString(), r = n < 10 ? "0" + n : n.toString(), h = i < 10 ? "0" + i : i.toString();
            this.fcTime.text = "V" + this.switch(h) + this.switch(r) + this.switch(o) + this.switch(s) + "-" + this.Level;
        }
        switch(t) {
            let e = "";
            for (let a = t.length - 1; a >= 0; a--) e += t[a];
            return e;
        }
        loadHomePage(t) {
            this.isOpenExport && this.dataConfig.front_homepage_ad_switch ? u.instance.openScene(o.SCENE_RECOMMENDUI, !1, {
                isHomePage: !0
            }, () => {
                u.instance.openScene(o.SCENE_FULLGAMEUI, !1, {
                    isHomePage: !0
                }, () => {
                    t && t();
                });
            }) : t && t(), this.isOpenWuChu && (this.getRandom0To100 < this.dataConfig.front_homepage_video_chance ? (this.dataConfig.front_homepage_video_chance = 0,
                s.Instance.showVideoAd(!0)) : this.dataConfig.front_wx_ad_switch && s.Instance.createInterAd(!0)),
                this.createTimeTag();
        }
        showInterAd() {
            this.isOpenWuChu && this.dataConfig.front_wx_ad_switch && s.Instance.createInterAd(!0);
        }
        showDuilianIcon(t, e = 200) {
            if (this.isOpenExport && this.dataConfig.front_duilian_export_switch) {
                this.duilianItems = [];
                let a = this.dataConfig.front_duilian_icon_number, i = 2 * a, s = [].concat(u.instance.navDataArr);
                s = u.instance.shuffleArr(s).slice(0, i);
                for (let i = 0; i < a; i++) for (let a = 0; a < 2; a++) {
                    let o = s.shift();
                    if (o) {
                        let s = this.createDuilianIcon();
                        t.addChild(s), s.pos(0 == a ? 5 + s.width / 2 : Laya.stage.width - s.width / 2 - 5, e + 200 * i);
                        let r = s.getChildAt(0), h = s.getChildAt(1);
                        r.skin = o.icon;
                        let l = u.instance.navDataArr.indexOf(o);
                        h.text = this.getTitle(l), s.off(Laya.Event.CLICK, s.parent, n.Instance.navClick, [l]),
                            s.on(Laya.Event.CLICK, s.parent, n.Instance.navClick, [l]), this.duilianItems.push(s);
                    }
                }
                this.setDuilianRedPoint(), this.showDuilianTween();
            }
        }
        clickStartGame(t) {
            Laya.timer.clear(this, this.showDuilianTween), _.isAdOn && this.isOpenWuChu && this.getRandom0To100 < this.dataConfig.front_start_game_chance && this.dataConfig.front_start_video_number > 0 ? (this.dataConfig.front_start_video_number--,
                console.log("开始游戏"), Laya.Browser.onWeiXin ? s.Instance.showVideoAd(!1, () => {
                    this.showFirstBox(t);
                }) : this.showFirstBox(t)) : this.showFirstBox(t), this.dataConfig.front_dangezi_switch && s.Instance.createGameCustomAd();
        }
        showGameFinishExport(t) {
            this.dataConfig.front_all_export_switch ? u.instance.openScene(o.SCENE_RECOMMENDUI, !1, null, () => {
                u.instance.openScene(o.SCENE_FULLGAMEUI, !1, null, () => {
                    n.Instance.showSecondBox(t);
                });
            }) : t && t();
        }
        showSettlement(t, e = 300, a = !0, n = 600) {
            t && (this.missTouchBtn = t, this.btnBottom = e), this.showSettlementExportUI(a, n),
                this.settlementAutoNavigateApp();
        }
        closeSettlement(t) {
            this.missTouchBtn && (this.clearMissTouch(this.missTouchBtn), this.missTouchBtn = null),
                this.showSettlementExportUI(!1), this.dataConfig.front_all_export_switch && this.getRandom0To100 < this.dataConfig.front_jiesuan_next_export_chance ? u.instance.openScene(o.SCENE_RECOMMENDUI, !1, null, () => {
                    u.instance.openScene(o.SCENE_FULLGAMEUI, !1, null, () => {
                        t && t();
                    });
                }) : t && t();
        }
        wuchuBtn(t, e, a, n) {
            let s = this.Level;
            (t == o.SCENE_FULLGAMEUI && s >= this.dataConfig.front_wuchu_wanghong_gate || t == o.SCENE_RECOMMENDUI && s >= this.dataConfig.front_wuchu_remen_gate) && !e && this.isOpenWuChu && !i.Instance.isLoadBannerError && _.isAdOn ? (Laya.timer.once(20, this, () => {
                i.Instance.hideBanner();
            }), u.instance.addClickEvent(a, a.parent, () => {
                a.offAllCaller(a.parent), Laya.timer.once(this.dataConfig.front_banner_show_time, this, () => {
                    i.Instance.showBanner(), Laya.timer.once(this.dataConfig.front_banner_hide_time, this, () => {
                        i.Instance.hideBanner(), u.instance.addClickEvent(a, a.parent, n, null, !0);
                    });
                });
            }, null, !0)) : (a.bottom = 300, i.Instance.showBanner(), u.instance.addClickEvent(a, a.parent, n, null, !0));
        }
        showFullGameUI(t) {
            this.dataConfig.front_all_export_switch && u.instance.openScene(o.SCENE_FULLGAMEUI, !1, null, () => {
                t && t();
            });
        }
        showRecommendUI(t) {
            this.dataConfig.front_all_export_switch && u.instance.openScene(o.SCENE_RECOMMENDUI, !1, null, () => {
                t && t();
            });
        }
        wanghongAutoNavigateApp(t) {
            this.isOpenExport && (t && this.getRandom0To100 < this.dataConfig.front_start_wanghong_chance || !t && this.getRandom0To100 < this.dataConfig.front_inside_wanghong_chance) && u.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("网红爆款自动跳转取消");
            }, () => {
                console.log("网红爆款自动跳转成功");
            });
        }
        remenAutoNavigateApp(t) {
            this.isOpenExport && (t && this.getRandom0To100 < this.dataConfig.front_start_remen_chance || !t && this.getRandom0To100 < this.dataConfig.front_inside_remen_chance) && u.instance.NavigateApp(this.getRandomIndex(), () => {
                console.log("热门推荐自动跳转取消");
            }, () => {
                console.log("热门推荐自动跳转成功");
            });
        }
        settlementAutoNavigateApp() {
            this.isOpenExport && this.getRandom0To100 < this.dataConfig.front_jiesuan_tiaozhuan_chance ? u.instance.NavigateApp(this.getRandomIndex(), t => {
                t ? u.instance.openScene(o.SCENE_RECOMMENDUI, !1, null, () => {
                    this.missTouch(this.missTouchBtn, this.btnBottom);
                }) : this.missTouch(this.missTouchBtn, this.btnBottom);
            }, () => { }) : this.missTouch(this.missTouchBtn, this.btnBottom);
        }
        showSettlementExportUI(t, e = 600) {
            if (this.dataConfig.front_all_export_switch) {
                var a = u.instance.screenOrientation == r.PORTRAIT ? o.SCENE_FINISHGAMEUI : o.SCENE_FINISH2GAMEUI;
                t ? u.instance.openScene(a, !1, {
                    posY: e
                }, () => { }, B.instance.scene) : u.instance.closeScene(a);
            }
        }
        createDuilianIcon(t = "JJExportRes/ex (11).png") {
            let e = new Laya.Image(t);
            e.size(150, 150), e.pivot(75, 75);
            let a = new Laya.Image(t);
            a.size(140, 140), e.addChild(a), a.centerX = 0, a.centerY = 0;
            let n = new Laya.Image(t);
            n.size(140, 140), a.mask = n;
            let i = new Laya.Label();
            return i.size(150, 38), i.bold = !0, i.fontSize = 25, i.align = "center", i.valign = "middle",
                i.stroke = 2, i.strokeColor = "#ffffff", e.addChild(i), i.y = 150, e;
        }
        setDuilianRedPoint() {
            let t = u.instance.shuffleArr([].concat(this.duilianItems)).splice(0, this.duilianItems.length / 2);
            for (var e = 0; e < t.length; e++) {
                let a = new Laya.Image("JJExportRes/mt_hd_1.png");
                t[e].addChild(a), a.pos(128, 0);
            }
        }
        showDuilianTween() {
            let t = u.instance.shuffleArr([].concat(this.duilianItems)).splice(0, this.duilianItems.length / 2);
            for (var e = 0; e < t.length; e++) {
                let a = t[e];
                a.rotation = 0, u.instance.toRotaion(a, 20, 150, !1, !0, () => {
                    a.rotation = 0, u.instance.toRotaion(a, -20, 150, !1, !0, () => {
                        a.rotation = 0, u.instance.toRotaion(a, 10, 50, !1, !0, () => {
                            a.rotation = 0, u.instance.toRotaion(a, -10, 50, !1, !0);
                        });
                    });
                });
            }
            Laya.timer.once(5e3, this, this.showDuilianTween);
        }
        createGameIcon(t, e, n) {
            let i = new Laya.Image();
            i.skin = e, i.size(112, 151), i.pivot(56, 75), i.top = t;
            let s = new Laya.Image();
            return s.skin = e, i.addChild(s), s.size(103, 103), s.pos(5.5, 6), n ? this.gameIconScene = n : (this.gameIconScene = new Laya.Scene(),
                Laya.stage.addChild(this.gameIconScene), this.gameIconScene.zOrder = 20, this.gameIconScene.size(Laya.stage.width, Laya.stage.height),
                this.gameIconScene.mouseThrough = !0), this.gameIconScene.addChild(i), i.addComponent(a),
                i;
        }
        showGameIcon(t = !0, e = 30, a = 120, n = "JJExportRes/tips_bg.png", i) {
            this.dataConfig.front_all_export_switch && this.dataConfig.front_freetips_switch && (this.gameIconScene ? this.gameIconScene.visible = !0 : this.gameIcon = this.createGameIcon(a, n, i),
                t ? (this.gameIcon.left = -200, Laya.timer.once(1500, this, () => {
                    Laya.Tween.to(this.gameIcon, {
                        left: e
                    }, 500);
                })) : (this.gameIcon.right = -200, Laya.timer.once(1500, this, () => {
                    Laya.Tween.to(this.gameIcon, {
                        right: e
                    }, 500);
                })));
        }
        hideGameIcon() {
            this.gameIconScene && (this.gameIcon.visible = !1);
        }
        showFirstBox(t) {
            _.isAdOn && !i.Instance.isLoadBannerError && this.isOpenWuChu && this.Level >= this.dataConfig.front_first_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? u.instance.openScene(o.SCENE_BOX2, !1, null, () => {
                t && t();
            }) : t && t();
        }
        showSecondBox(t) {
            _.isAdOn && !i.Instance.isLoadBannerError && this.isOpenWuChu && this.Level >= this.dataConfig.front_second_box_gate && this.getRandom0To100 < this.dataConfig.front_box_chance ? u.instance.openScene(o.SCENE_BOX3, !1, null, () => {
                t && t();
            }) : t && t();
        }
    }
    class i {
        constructor() {
            this.showTime = 0, this.bannerColors = ["#ff0000", "#00ff00"], this.bannerIndex = 0;
        }
        static get Instance() {
            return i._instance || (i._instance = new i()), i._instance;
        }
        get sysInfo() {
            return this._sysInfo || (this._sysInfo = wx.getSystemInfoSync()), this._sysInfo;
        }
        initAd() {
            this.bannerIds = ["adunit-f50a8c5d1161a5f0"], n.Instance.isOpenWuChu ? this.changeTime = u.instance.dataConfig.front_banner_change_time : this.changeTime = 3e4;
        }
        loadBanner() {
            if (!Laya.Browser.onWeiXin) return;
            if (this.isLoading) return;
            this.isLoading = !0, this.currentBanner && (this.currentBanner.destroy(), this.currentBanner = null,
                console.log("destroy banner"));
            let t = this.sysInfo, e = this.bannerIds[0], a = wx.createBannerAd({
                adUnitId: e,
                style: {
                    top: .8 * t.screenHeight,
                    width: 300,
                    left: t.screenWidth / 2 - 150
                }
            });
            a.onLoad(() => {
                console.log("create banner success"), i.Instance.currentBanner = a, i.Instance.isLoading = !1,
                    i.Instance.isLoadBannerError = !1, i.Instance.isloadAndShow && (i.Instance.isloadAndShow = !1,
                        i.Instance.showBanner(), console.log("create and show"));
            }), a.onError(t => {
                console.log("create banner error", t), i.Instance.isLoading = !1, i.Instance.isLoadBannerError = !0,
                    u.instance.eventDispatcher.event("Hide_Clear_View");
            }), a.onResize(e => {
                let n = a.style.realHeight + .1;
                t.model.startsWith("iPhone X") && (n += 40 / Laya.Browser.height * W.height), a.style.top = t.screenHeight - n;
            });
        }
        showBanner() {
            //     if (!this.isShowBanner) {
            //         if (this.isShowBanner = !0, Laya.Browser.onWeiXin) {
            //             if (!this.currentBanner) return this.isShowBanner = !1, this.isloadAndShow = !0,
            //                 void this.loadBanner();
            //             this.currentBanner.show(), this.setBannerTop(0);
            //         } else this.showVirtualBanner();
            //         if (console.log("show banner"), this.currentTimer) t = this.changeTime - this.showTime; else {
            //             this.showTime = 0;
            //             var t = this.changeTime;
            //         }
            //         Laya.timer.once(t, this, this.showNextBanner), this.currentTimer = new Date().getTime();
            //     }
        }
        hideBanner() {
            // if (this.isloadAndShow = !1, this.isShowBanner) {
            //     if (this.isShowBanner = !1, Laya.Browser.onWeiXin) {
            //         if (!this.currentBanner) return;
            //         this.currentBanner.hide();
            //     } else this.hideVirtualBanner();
            //     if (console.log("hide banner"), this.currentTimer) {
            //         let t = new Date().getTime() - this.currentTimer;
            //         this.showTime += t, console.log("Banner剩余展示时间", this.changeTime - this.showTime);
            //     }
            //     Laya.timer.clear(this, this.showNextBanner);
            // }
        }
        showNextBanner() {
            this.isShowBanner = !1, Laya.Browser.onWeiXin ? (this.currentBanner.destroy(), this.currentBanner = null) : (this.bannerIndex++,
                this.bannerIndex > 1 && (this.bannerIndex = 0)), this.currentTimer = null, this.showBanner(),
                console.log("显示下一个banner");
        }
        setBannerTop(t) {
            if (!this.currentBanner) return;
            let e = this.sysInfo, a = this.currentBanner, n = a.style.realHeight + .1;
            e.model.startsWith("iPhone X") && (n += 40 / Laya.Browser.height * W.height), a.style.top = e.screenHeight - n + t;
        }
        showVirtualBanner() {
            // if (!this.bannerImage) {
            //     var t = new Laya.Scene();
            //     Laya.stage.addChild(t), t.zOrder = 20, t.mouseThrough = !0, t.size(Laya.stage.width, Laya.stage.height),
            //         this.bannerImage = new Laya.Panel(), t.addChild(this.bannerImage), this.bannerImage.centerX = 0,
            //         this.bannerImage.bottom = 0, this.bannerImage.size(525, 200), this.bannerImage.on(Laya.Event.CLICK, this, () => {
            //             u.instance.eventDispatcher.event("wx_awake_event");
            //         });
            // }
            // this.bannerImage.bgColor = this.bannerColors[0 + this.bannerIndex], this.bannerImage.visible = !0;
        }
        hideVirtualBanner() {
            // this.bannerImage && (this.bannerImage.visible = !1);
        }
    }
    class s {
        static get Instance() {
            return s._instance || (s._instance = new s()), s._instance;
        }
        set bannerLoadError(t) { }
        get bannerLoadError() {
            return i.Instance.isLoadBannerError;
        }
        init() {
            Laya.Browser.onWeiXin && (this.sysInfo = wx.getSystemInfoSync(), this.videoId = "adunit-b469ba88607b62b3",
                this.interId = "adunit-e1249517f84adb63", this.gridId = "adunit-610625d0b63b7194");
        }
        loadVideoAd() {
            if (Laya.Browser.onWeiXin) {
                var t, e = this;
                null != (t = this.videoAd) && (t.offLoad(onLoadVideo), t.offError(onErrorVideo),
                    t.offClose(onCloseVideo)), (t = wx.createRewardedVideoAd({
                        adUnitId: e.videoId
                    })).onLoad(onLoadVideo), t.onError(onErrorVideo), t.onClose(onCloseVideo), this.videoAd = t,
                    t.load(), console.log("加载视频，ID：", t);
            }
            function onLoadVideo() {
                console.log("video 加载成功"), e.existVideoAd = !0, e.isForceShowVideo ? (e.isForceShowVideo = !1,
                    e.showVideoAd(!1, e.closeVideoCB)) : e.closeVideoCB && (e.closeVideoCB(!1), e.closeVideoCB = null);
            }
            function onErrorVideo(t) {
                console.error("video 加载错误", t), e.existVideoAd = !1, e.closeVideoCB && (e.closeVideoCB(!1),
                    e.closeVideoCB = null);
            }
            function onCloseVideo(t) {
                let a = !!(t && t.isEnded || void 0 === t);
                e.closeVideoCB && (e.closeVideoCB(a), e.closeVideoCB = null);
            }
        }
        showVideoAd(t = !1, e) {
            if (Laya.Browser.onWeiXin) {
                if (this.closeVideoCB = e, !this.videoAd) return this.isForceShowVideo = !0, void this.loadVideoAd();
                if (!this.existVideoAd) return this.isForceShowVideo = t, void this.videoAd.load();
                if (Laya.Browser.onWeiXin) {
                    var a = this.videoAd;
                    a.show().then(() => { }).catch(t => {
                        a.load().then(() => a.show());
                    });
                }
            }
        }
        createInterAd(t) {
            Laya.Browser.onWeiXin && (this.interAd ? this.showInterAd() : (this.interAd = wx.createInterstitialAd({
                adUnitId: this.interId
            }), this.interAd.onLoad(() => {
                console.log("插屏广告加载成功"), t && this.showInterAd();
            }), this.interAd.onError(t => {
                console.error("插屏广告加载失败"), this.interAd = null;
            })));
        }
        showInterAd() {
            this.interAd && this.interAd.show();
        }
        createGameCustomAd() {
            if (Laya.Browser.onWeiXin && !this.gameGridAd) {
                this.gameGridAd = [];
                for (let t = 0; t < 2; t++) {
                    let e = this.getGridPos(t, 120 * (Math.floor(t / 2) + 1)), a = wx.createCustomAd({
                        adUnitId: this.gridId,
                        adIntervals: 30,
                        style: e
                    });
                    this.gameGridAd.push(a), a.onLoad(() => {
                        a.show();
                    });
                }
            }
        }
        getGridPos(t, e = 120) {
            let a = {
                width: 20,
                height: 20
            };
            return t % 2 == 0 ? (a.left = 20, a.top = e) : (a.left = this.sysInfo.windowWidth - 90,
                a.top = e), a;
        }
    }
    var o, r, h, l, c, d, m, g, f;
    !function (t) {
        t.SCENE_RECOMMENDUI = "JJExport/RecommendUI.scene", t.SCENE_FULLGAMEUI = "JJExport/FullGameUI.scene",
            t.SCENE_FINISHGAMEUI = "JJExport/FinishGameUI.scene", t.SCENE_FINISH2GAMEUI = "JJExport/Finish2GameUI.scene",
            t.SCENE_BOX1 = "JJExport/Box1.scene", t.SCENE_BOX2 = "JJExport/Box2.scene", t.SCENE_BOX3 = "JJExport/Box3.scene";
    }(o || (o = {})), function (t) {
        t.PORTRAIT = "portrait", t.LANDSCAPE = "landscape";
    }(r || (r = {}));
    class u {
        constructor() {
            this.screenOrientation = r.PORTRAIT, this.eventDispatcher = new Laya.EventDispatcher(),
                this.navDataArr = [], this.closeCBScenes = [], this.dataConfig = {
                    is_allow_area: !1,
                    is_allow_export: !1,
                    front_wuchu_scene: "1001|1002",
                    front_pass_gate: 1,
                    front_wuchu_finish_gate: 5,
                    front_time_tag_switch: !1,
                    front_share_number: 1,
                    front_all_export_switch: !1,
                    front_homepage_ad_switch: !1,
                    front_start_remen_chance: 100,
                    front_start_wanghong_chance: 100,
                    front_duilian_export_switch: !1,
                    front_duilian_icon_number: 4,
                    front_jingxi_export_switch: !1,
                    front_inside_remen_chance: 100,
                    front_inside_wanghong_chance: 100,
                    front_jiesuan_tiaozhuan_chance: 100,
                    front_jiesuan_next_export_chance: 0,
                    front_freetips_switch: !1,
                    front_randompaly_start_level: 1,
                    front_game_number_official: 1,
                    front_first_box_gate: 1,
                    front_second_box_gate: 1,
                    front_box_chance: 100,
                    front_progress_bar_return: .006,
                    front_progress_bar_reduce: 6,
                    front_box_clicks: [2, 8],
                    front_is_box_force: !1,
                    front_banner_show_time: 1e3,
                    front_banner_hide_time: 1e3,
                    front_wuchu_wanghong_gate: 1,
                    front_wuchu_remen_gate: 1,
                    front_banner_appear: 1e3,
                    front_button_up: 1e3,
                    front_banner_ids: [],
                    front_create_banner_num: 2,
                    front_banner_change_time: 3e3,
                    front_banner_refresh_num: 2,
                    front_banner_number: 8,
                    front_banner_switch: !1,
                    front_homepage_video_chance: 0,
                    front_start_game_chance: 0,
                    front_start_video_number: 1,
                    front_top_gezi_gate: 1,
                    front_gezi_number: 4,
                    front_wx_ad_switch: !1,
                    front_dangezi_switch: !1,
                    front_report_event_point_switch: !1,
                    show_shield_appids: []
                };
        }
        static get instance() {
            return this._instance || (this._instance = new u()), this._instance;
        }
        set shareCount(t) {
            this.dataConfig.front_share_number = t;
        }
        get shareCount() {
            return this.dataConfig.front_share_number;
        }
        set shareContext(t) {
            this.shareConfig = t;
        }
        get shareContext() {
            return this.shareConfig;
        }
        initJJ(t, e = r.PORTRAIT) {
            this.screenOrientation = e,
                this.regisiterWxCallback(),
                s.Instance.init(),
                Laya.Browser.window.JJGetGameConfigAdShare().then(e => {
                    console.log("获取游戏配置：", e.data.config), this.updateDataConfig(e.data.config), console.log("获取导出配置：", e.data.ad),
                        this.updateNavData(e.data.ad), console.log("获取分享配置：", e.data.share);
                    var a = e.data.share[0];
                    if (a && (this.shareContext = {
                        title: a.share_content,
                        imageUrl: a.share_img,
                        id: a.id
                    }), Laya.Browser.onWeiXin) {
                        this.JJOnShareAppMessage(this.shareContext);
                        let t = this.dataConfig, e = t.show_shield_appids;
                        if (console.log("白名单列表", e), e.length > 0) {
                            var n = wx.getLaunchOptionsSync();
                            console.log("你的appid：", n.referrerInfo.appId), n.referrerInfo && -1 != e.indexOf(n.referrerInfo.appId) ? (t.front_homepage_ad_switch = !0,
                                t.front_pass_gate = 1, t.is_allow_export = !0, t.is_allow_area = !0, console.log("你是白名单")) : console.log("你不是白名单");
                        }
                    }
                    u.instance.eventDispatcher.on("wx_awake_event", this, this.refreshData), this.refreshData(),
                        i.Instance.initAd(), t && t(!0);
                }, () => {
                    t && t(!1);
                }), this.showShareMenuWithTicket(!0);
        }
        openScene(t, e = !1, a, n = (() => { }), i, s) {
            Laya.Scene.open(t, e, a, Laya.Handler.create(this, t => {
                i ? i.addChild(t) : Laya.stage.addChild(t), s && s(), n && this.closeCBScenes.push({
                    scene: t,
                    closeCB: n
                });
            }));
        }
        closeScene(t) {
            if (t instanceof Laya.Scene) {
                let e = this.closeCBScenes.filter(e => e.scene === t);
                if (e && e.length > 0) {
                    let t = e[0];
                    t.closeCB(), this.closeCBScenes.splice(this.closeCBScenes.indexOf(t), 1);
                }
                Laya.Scene.destroy(t.url);
            } else Laya.Scene.destroy(t);
        }
        NavigateApp(t, e, a) {
            if (0 != this.navDataArr.length) if (console.log("跳转", this.navDataArr[t].appid),
                Laya.Browser.onWeiXin) {
                var n = this;
                wx.JJNavigateToMiniProgram(() => ({
                    appId: n.navDataArr[t].appid,
                    path: n.navDataArr[t].path,
                    id: n.navDataArr[t].id
                })).then(t => {
                    console.log("success"), a && a(t);
                }, t => {
                    console.log("fail", t), -1 != t.errMsg.indexOf("cancel") ? e && e(!0) : e && e(!1);
                });
            } else e && e(!1);
        }
        getTitle(t, e = !0) {
            return null == t ? " " : e && t.subtitle && "" != t.subtitle ? t.subtitle : t.title;
        }
        updateDataConfig(t) {
            var e = t.data;
            this.dataConfig.is_allow_area = t.is_allow_area, this.dataConfig.is_allow_export = t.is_allow_export,
                this.dataConfig.front_wuchu_scene = t.front_wuchu_scene;
            for (let t in e) this.dataConfig[t] = e[t].config_val;
            console.log(this.dataConfig);
        }
        updateNavData(t) {
            this.navDataArr = [];
            for (var e = 0; e < t.length; e++) {
                var a = t[e], n = new y();
                n.appid = a.channel_game_appid, n.title = a.channel_game_name, n.path = a.path,
                    n.subtitle = a.originality.copywriting, n.icon = a.originality.material, n.id = a.originality.id,
                    this.navDataArr.push(n);
            }
        }
        get allowScene() {
            if (Laya.Browser.onWeiXin) {
                var t = wx.getLaunchOptionsSync();
                console.log("当前场景：", t.scene);
                var e = !0;
                let a = u.instance.dataConfig.front_wuchu_scene;
                if (null == a && (e = !0), -1 == a.search("|")) {
                    e = parseInt(a) != t.scene;
                }
                let n = a.split("|");
                for (let a = 0; a < n.length; a++) {
                    parseInt(n[a]) == t.scene && (e = !1);
                }
                return e;
            }
            return !0;
        }
        shuffleArr(t) {
            let e = t.length;
            for (; e;) {
                let a = Math.floor(Math.random() * e--);
                [t[a], t[e]] = [t[e], t[a]];
            }
            return t;
        }
        addClickEvent(t, e, a, n, i) {
            if (t.offAllCaller(e), t instanceof Laya.Button && !i) {
                let i = t => {
                    a && a.call(e, t);
                };
                t.on(Laya.Event.CLICK, e, i, [n]);
            } else {
                let i = 60, s = t.scaleX, o = t.scaleY, r = .9, h = !1, l = e => {
                    h = !0, Laya.Tween.to(t, {
                        scaleX: r,
                        scaleY: r
                    }, i);
                };
                t.on(Laya.Event.MOUSE_DOWN, e, l, [n]);
                let c = n => {
                    0 != h && (h = !1, Laya.Tween.to(t, {
                        scaleX: s,
                        scaleY: o
                    }, i), a && a.call(e, n));
                };
                t.on(Laya.Event.MOUSE_UP, e, c, [n]);
                let d = e => {
                    Laya.Tween.to(t, {
                        scaleX: s,
                        scaleY: o
                    }, i);
                };
                t.on(Laya.Event.MOUSE_OUT, e, d, [n]);
            }
        }
        toRotaion(t, e, a, n = !1, i = !1, s) {
            if (t && !t.destroyed) {
                var o = t.rotation;
                !function () {
                    if (n) var s = new Laya.Handler(this, rotate2); else if (i) var s = new Laya.Handler(this, rotate4);
                    Laya.Tween.to(t, {
                        rotation: e
                    }, a, null, s);
                }();
            }
            function rotate2() {
                t && !t.destroyed && Laya.Tween.to(t, {
                    rotation: -e
                }, 2 * a, null, Laya.Handler.create(this, rotate3));
            }
            function rotate3() {
                t && !t.destroyed && Laya.Tween.to(t, {
                    rotation: e
                }, 2 * a, null, Laya.Handler.create(this, rotate2));
            }
            function rotate4() {
                t && !t.destroyed && Laya.Tween.to(t, {
                    rotation: o
                }, a, null, Laya.Handler.create(this, () => {
                    s && s();
                }));
            }
        }
        rewardClick(t, e, a) {
            this.rewardCallback = t, this.cancelCallback = e, Laya.Browser.onWeiXin ? a || 0 == this.shareCount ? s.Instance.showVideoAd(!1, a => {
                a ? t() : e && e();
            }) : this.shareGame(e => {
                e ? (t(), this.shareCount -= 1, Laya.LocalStorage.setItem("shareCount", JSON.stringify(this.shareCount))) : this.showModal(this.shareFailContext);
            }) : this.rewardCallback();
        }
        get shareFailContext() {
            return ["请分享到活跃的群！", "请分享到不同群！", "请分享给好友！", "请分享给20人以上的群！"][Math.floor(4 * Math.random())];
        }
        showModal(t) {
            if (Laya.Browser.onWeiXin) {
                var e = this;
                wx.showModal({
                    title: "提示",
                    content: t,
                    showCancel: !0,
                    confirmText: "重新分享",
                    success(t) {
                        t.confirm ? (console.log("点击确定"), e.shareGame(e.rewardCallback)) : t.cancel && (console.log("点击取消"),
                            e.cancelCallback && e.cancelCallback());
                    }
                });
            }
        }
        shareGame(t) {
            if (Laya.Browser.onWeiXin) {
                console.log("分享游戏");
                var e = u.instance.shareContext;
                this.JJShareAppMessage(e, t);
            }
        }
        regisiterWxCallback() {
            Laya.Browser.onWeiXin && (wx.offShow(this.onShowEvent), wx.onShow(this.onShowEvent),
                wx.offHide(this.onHideEvent), wx.onHide(this.onHideEvent));
        }
        onShowEvent(t) {
            u.instance.eventDispatcher.event("wx_awake_event");
        }
        onHideEvent(t) {
            u.instance.eventDispatcher.event("wx_sleep_event");
        }
        showShareMenuWithTicket(t) {
            Laya.Browser.onWeiXin && wx.showShareMenu({
                withShareTicket: t,
                success: function () { },
                fail: function () { },
                complete: function () { }
            });
        }
        regisiterWXShareCallback() {
            if (Laya.Browser.onWeiXin) {
                var t = this.shareContext;
                wx.onShareAppMessage(function () {
                    return console.log("用户点击了转发按钮"), {
                        title: t.title,
                        imageUrl: t.image,
                        query: "share_id=1",
                        success: function (t) { },
                        fail: function () { }
                    };
                });
            }
        }
        JJSendEvent(t, e) {
            console.log("埋点：", t), this.dataConfig.front_report_event_point_switch && Laya.Browser.onWeiXin && wx.JJSendEvent(() => ({
                name: t,
                param: e
            }));
        }
        JJBannerAdShowCount() {
            Laya.Browser.onWeiXin && wx.JJBannerAdShowCount(() => ({
                adUnitId: "",
                adUnitName: "banner",
                pageName: "all"
            }));
        }
        JJSendVideoAdCount(t, e) {
            Laya.Browser.onWeiXin && wx.JJSendVideoAdCount(() => ({
                adUnitId: s.Instance.videoId,
                adUnitName: e,
                isEnded: t
            }));
        }
        JJShareAppMessage(t, e) {
            wx.JJShareAppMessage(() => ({
                title: t.title,
                imageUrl: t.imageUrl,
                id: t.id
            })).then(t => {
                e(t);
            });
        }
        JJOnShareAppMessage(t) {
            wx.JJOnShareAppMessage(() => ({
                title: t.title,
                imageUrl: t.imageUrl,
                id: t.id
            }));
        }
        refreshData() {
            let t = Laya.LocalStorage.getItem("dayTime");
            if (t) var e = Number(JSON.parse(t)); else e = (new Date().getTime() - 864e5) / 864e5,
                Laya.LocalStorage.setItem("dayTime", JSON.stringify(e));
            var a = Math.floor(new Date().getTime() / 864e5);
            e != a ? (console.log("刷新缓存数据"), Laya.LocalStorage.setItem("shareCount", JSON.stringify(this.dataConfig.front_share_number)),
                Laya.LocalStorage.setItem("dayTime", JSON.stringify(a))) : this.dataConfig.front_share_number = JSON.parse(Laya.LocalStorage.getItem("shareCount"));
        }
    }
    class y { }
    !function (t) {
        t.BGM = "Bgm", t.CLICK = "Click", t.Eyes = "Eyes", t.FinishLight = "FinishLight",
            t.Hair = "Hair", t.Hairy3Sec = "Hairy3Sec", t.Metal = "Metal";
    }(h || (h = {}));
    class p {
        constructor() {
            for (var t in this._pathRoot = "res/Sounds/", this._soundCtx = {}, this._soundFile = [],
                h) {
                let e = h[t];
                this._soundFile.push(e);
            }
            console.log(this._soundFile), this.init();
        }
        init() {
            let t = this._pathRoot, e = "", a = this._soundFile, n = this._soundFile.length;
            for (let i = 0; i < n; ++i) {
                e = a[i];
                let n = new Laya.SoundChannel();
                n.url = t + e + ".mp3", -1 != e.indexOf("PoliceSiren") && (n.loops = 0), Laya.SoundManager.addChannel(n),
                    this._soundCtx[e] = !0;
            }
            Laya.loader.load(["res/Sounds/Bgm.mp3"], Laya.Handler.create(this, () => {
                // this.playMusic("Bgm");
            })), w.backAwakeEvent(this, () => {
                // this.playMusic("Bgm");
            }), Laya.SoundManager.autoReleaseSound = !1;
            if (Boolean(Laya.LocalStorage.getItem("perfect-wax-3d-musicState"))) {
                window.WebAudioEngine.pause = !Boolean(Laya.LocalStorage.getItem("perfect-wax-3d-musicState"));
            } else {
                Laya.LocalStorage.setItem("perfect-wax-3d-musicState", false)
                window.WebAudioEngine.pause = false;
            }

        }
        play(t) {
            this._soundCtx[t] && window.WebAudioEngine.playSound(this._pathRoot + t + ".mp3");
        }
        playLoop(t) {
            this._soundCtx[t] && window.WebAudioEngine.playSound(this._pathRoot + t + ".mp3", 0);
        }
        stop(t) {
            this._soundCtx[t] && window.WebAudioEngine.stopSound(this._pathRoot + t + ".mp3");
        }
        playMusic(t) {
            // Laya.SoundManager.stopMusic(),
            t ? (window.WebAudioEngine.playMusic(this._pathRoot + t + ".mp3", 0),
                this.currentMusic = t) : window.WebAudioEngine.playMusic(this._pathRoot + this.currentMusic + ".mp3", 0);
        }
        stopMusic() {
            window.WebAudioEngine.stopMusic();
        }
    }
    !function (t) {
        t.start = "touchStart", t.move = "touchMove", t.end = "touchEnd";
    }(l || (l = {}));
    class L extends Laya.Script {
        onMouseDown(t) {
            w.sendEvent("touchStart", [t]);
        }
        onMouseMove(t) {
            w.sendEvent("touchMove", [t]);
        }
        onMouseUp(t) {
            w.sendEvent("touchEnd", [t]);
        }
    }
    class C {
        constructor() {
            this.tween = new Laya.Tween(), this.tweens = [];
        }
        getTimeByFrame(t) {
            return Math.round(10 * t);
        }
        toTween(t, e, a, n, i = !0, s) {
            this.target = t, this.isLocal = i;
            var o = {}, r = {};
            if (e.pos) {
                var h = i ? t.transform.localPosition.clone() : t.transform.position.clone();
                o.posX = h.x, o.posY = h.y, o.posZ = h.z, r.posX = e.pos.x, r.posY = e.pos.y, r.posZ = e.pos.z;
            }
            if (e.rot) {
                var l = i ? t.transform.localRotationEuler.clone() : t.transform.rotationEuler.clone();
                o.rotX = l.x, o.rotY = l.y, o.rotZ = l.z, r.rotX = e.rot.x, r.rotY = e.rot.y, r.rotZ = e.rot.z;
            }
            if (e.sca) {
                var c = t.transform.getWorldLossyScale().clone();
                o.scaX = c.x, o.scaY = c.y, o.scaZ = c.z, r.scaX = e.sca.x, r.scaY = e.sca.y, r.scaZ = e.sca.z;
            }
            return o.range = 0, r.range = 1, this.tween.to(o, {
                posX: r.posX,
                posY: r.posY,
                posZ: r.posZ,
                rotX: r.rotX,
                rotY: r.rotY,
                rotZ: r.rotZ,
                scaX: r.scaX,
                scaY: r.scaY,
                scaZ: r.scaZ,
                range: r.range
            }, a, null, Laya.Handler.create(this, () => {
                n && n();
                var t = this.tweens.shift();
                t && this.toTween(this.target, t.value, t.time, t.completeFun, t.isLocal, t.update);
            })), this.tween.update = new Laya.Handler(this, () => {
                e.pos && (i ? t.transform.localPosition = new Laya.Vector3(o.posX, o.posY, o.posZ) : t.transform.position = new Laya.Vector3(o.posX, o.posY, o.posZ)),
                    e.rot && (i ? t.transform.localRotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ) : t.transform.rotationEuler = new Laya.Vector3(o.rotX, o.rotY, o.rotZ)),
                    e.sca && t.transform.setWorldLossyScale(new Laya.Vector3(o.scaX, o.scaY, o.scaZ)),
                    s && s(o.range);
            }), this;
        }
        clearTween(t) {
            this.tweens = [], this.tween.clear(), this.target && t && (t.pos && (this.isLocal ? this.target.transform.localPosition = new Laya.Vector3(t.pos.x, t.pos.y, t.pos.z) : this.target.transform.position = new Laya.Vector3(t.pos.x, t.pos.y, t.pos.z)),
                t.rot && (this.target.transform.rotationEuler = new Laya.Vector3(t.rot.x, t.rot.y, t.rot.z)),
                t.sca && this.target.transform.setWorldLossyScale(new Laya.Vector3(t.sca.x, t.sca.y, t.sca.z)));
        }
        then(t, e, a, n = !0, i) {
            return this.tweens.push({
                value: t,
                time: e,
                completeFun: a,
                isLocal: n,
                update: i
            }), this;
        }
    }
    class w {
        static loadScene(t, e = 0, a = (() => { }), n = null) {
            t && Laya.Scene.open(t, !1, n, Laya.Handler.create(this, t => {
                Laya.stage.addChild(t), t.zOrder = e, a();
            }));
        }
        static TouchOn(t, e, a, n) {
            w.onEvent(l.start, n, t), w.onEvent(l.move, n, e), w.onEvent(l.end, n, a);
        }
        static TouchOff(t, e, a, n) {
            w.offEvent(l.start, n, t), w.offEvent(l.move, n, e), w.offEvent(l.end, n, a);
        }
        static buttonInit(t, e, a) {
            t.offAllCaller(e);
            t.on(Laya.Event.CLICK, e, t => {
                _.soundController.play(h.CLICK), a && a.call(e, t);
            });
        }
        static imageButtonInit(t, e, a, n) {
            t.offAllCaller(e);
            t.on(Laya.Event.MOUSE_UP, e, t => {
                _.soundController.play(h.CLICK), a && a.call(e, t);
            }, [n]);
        }
        static gameButtonOn(t, e, a, n) {
            t.offAllCaller(e), t.on(Laya.Event.MOUSE_DOWN, e, a), t.on(Laya.Event.MOUSE_UP, e, n),
                t.on(Laya.Event.MOUSE_OUT, e, n);
        }
        static Vector3Add(t, e) {
            let a = new Laya.Vector3();
            return Laya.Vector3.add(t, e, a), a;
        }
        static Vector3Reduce(t, e) {
            let a = new Laya.Vector3(), n = w.Vector3Axis(e, -1);
            return a = this.Vector3Add(t, n);
        }
        static Vector2Add(t, e) {
            return new Laya.Vector2(t.x + e.x, t.y + e.y);
        }
        static Vector2Reduce(t, e) {
            return new Laya.Vector2(t.x - e.x, t.y - e.y);
        }
        static Vector2Scale(t) {
            return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2));
        }
        static getTransformForward(t) {
            let e = new Laya.Vector3();
            return t.getForward(e), e.x *= -1, e.y *= -1, e.z *= -1, e;
        }
        static getTransformUp(t) {
            let e = new Laya.Vector3();
            return t.getUp(e), e;
        }
        static getTransformRight(t) {
            let e = new Laya.Vector3();
            return t.getRight(e), e;
        }
        static Vector3Axis(t, e) {
            let a = t.clone();
            return a.x *= e, a.y *= e, a.z *= e, a;
        }
        static setTransRotEulerY(t, e) {
            let a = t.localRotationEuler.clone();
            a.y = e, t.localRotationEuler = a;
        }
        static setTransRotEulerX(t, e) {
            let a = t.localRotationEuler.clone();
            a.x = e, t.localRotationEuler = a;
        }
        static setTransRotEulerZ(t, e) {
            let a = t.localRotationEuler.clone();
            a.z = e, t.localRotationEuler = a;
        }
        static getRandomInArray(t) {
            if (t.length) {
                let e = Math.random() * t.length;
                return t[e = Math.floor(e)];
            }
            return console.log("传入错误参数,返回空"), null;
        }
        static takeRandomInArray(t) {
            if (t.length) {
                let e = Math.random() * t.length, a = t[e = Math.floor(e)];
                return t.splice(e, 1), a;
            }
            return console.log("传入错误参数,返回空"), null;
        }
        static randomArray(t) {
            let e = new Array(t.length), a = e.length;
            for (let n = 0; n < a; n++) {
                let a = this.takeRandomInArray(t);
                e[n] = a;
            }
            return e;
        }
        static getSpritePosBySprite3DPoint(t, e = new Laya.Vector2(0, 0)) {
            var a = t.transform.position.clone(), n = new Laya.Vector4();
            _.mainCam.viewport.project(a, _.mainCam.projectionViewMatrix, n);
            var i = new Laya.Vector2(n.x / Laya.stage.clientScaleX, n.y / Laya.stage.clientScaleY);
            return i.x += e.x, i.y += e.y, new Laya.Point(i.x, i.y);
        }
        static coinCollectAnim(t, e, a, n, i = 15, s = null) {
            for (var o = i, r = 0; r < i; r++) {
                let i = Laya.Pool.getItemByClass("coin", Laya.Image);
                i.skin = t, i.x = e.x, i.y = e.y, i.scale(.8, .8), n.addChild(i);
                let r = 300 + 100 * Math.random() - 50;
                Laya.Tween.to(i, {
                    x: i.x + 250 * Math.random() - 125,
                    y: i.y + 250 * Math.random() - 125
                }, r), Laya.timer.once(r + 50, this, function () {
                    Laya.Tween.to(i, {
                        x: a.x,
                        y: a.y
                    }, 400, null, new Laya.Handler(this, function () {
                        n.removeChild(i), Laya.Pool.recover("coin", i), 0 == --o && s && s(n);
                    }));
                });
            }
        }
        static coinCollectAnimAni(t, e, a, n, i = 15, s = null) {
            for (var o = i, r = 0; r < i; r++) {
                let i = Laya.Pool.getItemByClass("coinAnim", Laya.Clip);
                i.skin = t.skin, i.index = t.index, i.clipX = t.clipX, i.clipY = t.clipY, i.autoPlay = t.autoPlay,
                    i.x = e.x, i.y = e.y, i.scale(.8, .8), n.addChild(i);
                let r = 300 + 100 * Math.random() - 50;
                Laya.Tween.to(i, {
                    x: i.x + 250 * Math.random() - 125,
                    y: i.y + 250 * Math.random() - 125
                }, r), Laya.timer.once(r + 50, this, function () {
                    Laya.Tween.to(i, {
                        x: a.x,
                        y: a.y
                    }, 400, null, new Laya.Handler(this, function () {
                        n.removeChild(i), Laya.Pool.recover("coinAnim", i), 0 == --o && s && s(n);
                    }));
                });
            }
        }
        static numberTo(t, e, a) {
            return t < e ? t += a : t > e && (t -= a), Math.abs(e - t) < a && (t = e), t;
        }
        static findNodeByName(t, e) {
            let a = null, n = t => {
                for (let i = 0; i < t.numChildren; i++) {
                    if (t.getChildAt(i).name == e) return void (a = t.getChildAt(i));
                    n(t.getChildAt(i));
                }
            };
            return n(t), a;
        }
        static objectShake(t, e = 1, a = .7) {
            var n = e, i = 1, s = t.transform.localPosition.clone();
            Laya.timer.frameLoop(1, this, function updateShake() {
                if (n > 0) {
                    var e = new Laya.Vector3();
                    Laya.Vector3.scale((o = Math.random() > .5 ? Math.random() : -Math.random(), r = Math.random() > .5 ? Math.random() : -Math.random(),
                        new Laya.Vector3(o, r, 0)), a, e), Laya.Vector3.add(s, e, e), t.transform.localPosition = e,
                        n -= .02 * i;
                } else n = 0, t.transform.localPosition = s, Laya.timer.clear(this, updateShake);
                var o, r;
            });
        }
        static objectScaleTips(t) {
            let e = new C(), a = t.transform.localScale.clone(), n = w.Vector3Axis(a, .8), i = w.Vector3Axis(a, 1.2);
            e.toTween(t, {
                sca: n
            }, 50).then({
                sca: i
            }, 50).then({
                sca: a
            }, 50);
        }
        static vibrateShort() {
            Laya.Browser.onWeiXin && wx.vibrateShort({
                success: function () { },
                fail: function () { },
                complete: function () { }
            });
        }
        static vibrateLong() {
            Laya.Browser.onWeiXin && wx.vibrateLong({
                success: function () { },
                fail: function () { },
                complete: function () { }
            });
        }
        static delayCall(t, e) {
            setTimeout(() => {
                t();
            }, e);
        }
        static RotateWithAxis(t, e, a, n) {
            let i = new Laya.Vector3(), s = Laya.Vector3.distance(t, e), o = new Laya.Vector3();
            Laya.Vector3.subtract(t, e, o), Laya.Vector3.normalize(o, o);
            let r = new Laya.Quaternion();
            return Laya.Vector3.normalize(a, a), Laya.Quaternion.createFromAxisAngle(a, n * Math.PI / 180, r),
                Laya.Vector3.transformQuat(o, r, o), Laya.Vector3.scale(o, s, o), Laya.Vector3.add(e, o, i),
                i;
        }
        static initEvent() {
            this.event = new Laya.EventDispatcher();
        }
        static onEvent(t, e, a, n = null) {
            this.event.on(t, e, a, n);
        }
        static offEvent(t, e, a) {
            this.event.off(t, e, a);
        }
        static sendEvent(t, e = null) {
            this.event.event(t, e);
        }
        static backAwakeEvent(t, e) {
            u.instance.eventDispatcher.on("wx_awake_event", t, e);
        }
        static loadAndPlayAnim(t, e, a, n, i = !1) {
            let s = new Laya.Animation();
            s.loadAnimation(t, Laya.Handler.create(this, () => {
                e.addChild(s), s.x = a, s.y = n, s.play(0, i);
            }));
        }
        static loadJsonFile(t, e) {
            Laya.loader.load(t, Laya.Handler.create(this, a => {
                var n = Laya.loader.getRes(t);
                e(n);
            }), null, Laya.Loader.JSON);
        }
        static loadSubpackage(t, e, a) {
            if (Laya.Browser.onWeiXin) {
                wx.loadSubpackage({
                    name: t,
                    success: function (n) {
                        console.log("分包加载成功：", t), a.call(n, e, !0);
                    },
                    fail: function (n) {
                        console.error("分包加载失败：", t), a.call(n, e, !1);
                    }
                }).onProgressUpdate(t => {
                    console.log(t, "分包================");
                });
            }
        }
        static loadSubpackagesSync(t, e, a) {
            for (var n = t.length, i = 0; i < n; i++) this.loadSubpackage(t[i], e, (t, i) => {
                i && 0 == --n && (console.log("全部分包加载完成"), a.call(this, e, !0));
            });
        }
        static loadSubpackages(t, e, a) {
            var n = t.length;
            !function loadSubpackage() {
                var i = t[n - 1];
                null != i ? this.loadSubpackage(i, e, (t, e) => {
                    e && (n--, loadSubpackage());
                }) : (console.log("全部分包加载完成"), 0 == n ? a.call(this, e, !0) : a.call(this, e, !1));
            }();
        }
        static getCurrentTime() {
            return Math.floor(Date.parse(new Date().toString()) / 1e3);
        }
        static faceToast(t, e, a, n) {
            let i = new Laya.Image(t);
            i.anchorX = .5, i.anchorY = .5, i.size(100, 100), e.addChild(i), i.x = a.x, i.y = a.y,
                Laya.Tween.to(i, {
                    x: n.x,
                    y: n.y
                }, 1e3, Laya.Ease.strongOut), Laya.timer.once(3e3, this, () => {
                    i && !i.destroyed && i.destroy();
                });
        }
    }
    class v { }
    v.CHANGE_COIN_EVENT = "CoinChange", v.WX_ONAWAKE = "wx_awake_event", function (t) {
        t.LOADING = "Loading.scene", t.STARTMENU = "StartMenu.scene", t.STAGEUI = "StageUI.scene",
            t.ENDMENU = "EndMenu.scene", t.SHOP = "Shop.scene", t.STAGELOADING = "StageLoading.scene";
    }(c || (c = {})), function (t) {
        t.HAPPY1 = "other/face/Face_01.png", t.HAPPY2 = "other/face/Face_02.png", t.HAPPY3 = "other/face/Face_03.png",
            t.HAPPY4 = "other/face/Face_04.png", t.HAPPY5 = "other/face/Face_05.png", t.SAD1 = "other/face/Face_06.png",
            t.SAD2 = "other/face/Face_07.png", t.SAD3 = "other/face/Face_08.png";
    }(d || (d = {}));
    class _ {
        static addGrade() {
            let t = e.GetPlayerData();
            t.grade++, t.grade > 99 && (t.grade = 99), e.SavePlayerData(t);
        }
        static readGrade() {
            let t = e.GetPlayerData();
            return parseInt(t.grade);
        }
        static addCoin(t) {
            let a = e.GetPlayerData();
            a.coin += t, e.SavePlayerData(a), w.sendEvent(v.CHANGE_COIN_EVENT);
        }
        static readCoin() {
            let t = e.GetPlayerData();
            return parseInt(t.coin);
        }
    }
    _.isPure = !1, _.isAdOn = !0, _.nowScene = 0, _.NPC = [], _.camOffset = new Laya.Vector3(0, 4, -11),
        _.usingPrefabs = [], _.isSuccess = !1, _.endCoin = 0;
    class S {
        static init() {
            this.ISeeYou_Launch();
        }
        static ISeeYou_Launch() {
            if (!Laya.Browser.onWeiXin) return;
            let t = u.instance.dataConfig.show_shield_appids;
            var e = wx.getLaunchOptionsSync();
            let a = !1;
            if (t.length > 0) for (let n = 0; n < t.length; n++) {
                if (e.referrerInfo && e.referrerInfo.appId == t[n]) {
                    console.log("这是VIP客户"), a = !0;
                    break;
                }
            }
            a && (u.instance.dataConfig.front_homepage_ad_switch = !0, u.instance.dataConfig.front_pass_gate = 1,
                u.instance.dataConfig.is_allow_area = !0, u.instance.dataConfig.is_allow_export = !0);
        }
        static navClick(t) {
            console.log("click id:", t), u.instance.NavigateApp(t, () => { });
        }
        static FirstIn(t) {
            n.Instance.loadHomePage(t);
        }
        static StartMenuIn(t, e, a, s, o) {
            n.Instance.showDuilianIcon(t, 300), a && a.set_visible(n.Instance.isShowExportMoreBtn),
                i.Instance.showBanner(), n.Instance.showInterAd();
        }
        static StartMenuOut(t) {
            i.Instance.hideBanner(), n.Instance.clickStartGame(t);
        }
        static StageIn(t, e, a, s) {
            a && a.set_visible(n.Instance.isShowExportOfficialBtn), n.Instance.showGameIcon(!0, 0, 600),
                setTimeout(() => {
                    u.instance.dataConfig.front_banner_switch ? i.Instance.showBanner() : i.Instance.hideBanner();
                }, 1e3);
        }
        static StageOut(t) {
            n.Instance.hideGameIcon(), n.Instance.showGameFinishExport(() => {
                t();
            });
        }
        static EndIn(t, e) {
            // i.Instance.showBanner(), n.Instance.showSettlement(e, 268, !0, 600);
        }
        static EndOut(t) {
            // i.Instance.hideBanner(), n.Instance.closeSettlement(t);
        }
        static ShareInit() {
            // if (Laya.Browser.onWeiXin) {
            //     wx.showShareMenu({
            //         withShareTicket: !0,
            //         success: function () { },
            //         fail: function () { },
            //         complete: function () { }
            //     });
            //     if (Laya.Browser.onWeiXin) {
            //         var t = u.instance.shareContext;
            //         wx.onShareAppMessage(function () {
            //             return console.log("用户点击了转发按钮"), {
            //                 title: t.title,
            //                 imageUrl: t.image,
            //                 query: "share_id=1",
            //                 success: function (t) { },
            //                 fail: function () { }
            //             };
            //         });
            //     }
            // }
        }
        static showToast(t, e = 3) {
            // e *= 1e3, Laya.Browser.onWeiXin ? wx.showToast({
            //     title: t,
            //     duration: e,
            //     icon: "none",
            //     success: function () { },
            //     fail: function () { },
            //     complete: function () { },
            //     image: "",
            //     mask: !1
            // }) : console.log(t);
        }
    }
    class I extends Laya.Script {
        constructor() {
            super(...arguments), this.offset = new Laya.Vector3(0, 0, 0), this.offsetXmin = 0,
                this.offsetXmax = 0, this.speed = 1;
        }
        onAwake() {
            I.instance = this, this.offset.x = (this.offsetXmax - this.offsetXmin) / 2 + this.offsetXmin,
                this.self = this.owner, this.target = _.camPoint;
            let t = this.target.transform.position.clone();
            this.self.transform.position = w.Vector3Add(t, this.offset);
        }
        init() { }
        onUpdate() {
            if (this.target = _.camPoint, this.target) {
                let t = this.target.transform.position.clone(), e = this.self.transform.position.clone(), a = w.Vector3Reduce(e, t);
                a.x < this.offsetXmin ? a.x = this.offsetXmin : a.x > this.offsetXmax ? a.x = this.offsetXmax : 0 == this.offsetXmin && 0 == this.offsetXmax && (a.x = this.offset.x),
                    a.y = this.offset.y, a.z = this.offset.z;
                let n = w.Vector3Add(t, a), i = new Laya.Vector3();
                Laya.Vector3.lerp(e, n, .5 * this.speed, i), this.self.transform.position = i;
                let s = this.target.transform.rotationEuler.clone(), o = this.self.transform.rotationEuler.clone(), r = new Laya.Vector3();
                Laya.Vector3.lerp(o, s, .5 * this.speed, r), this.self.transform.rotationEuler = r;
            }
        }
        GoPointRightNow(t) {
            _.camPoint = t, this.self.transform.position = t.transform.position.clone(), this.self.transform.rotation = t.transform.rotation.clone();
        }
    }
    !function (t) {
        t.Idle = "idle", t.Side = "side", t.Move = "move", t.JumpOff = "jumpoff";
    }(m || (m = {}));
    class x {
        static playAnim(t, e, a = 0) {
            t.play(e, 0, a);
        }
        static FadeIn(t, e) {
            t.crossFade(e, .2, 0, 0);
        }
        static getClipNormalize(t, e) {
            if (t.getControllerLayer(0).getCurrentPlayState().animatorState.name == e) {
                return t.getControllerLayer(0).getCurrentPlayState().normalizedTime;
            }
            return null;
        }
    }
    !function (t) {
        t.Road_1 = "Road_1", t.Hand_1 = "Hand_1", t.Hand_2 = "Hand_2", t.Hand_3 = "Hand_3",
            t.Foot_1 = "Foot_1", t.Foot_2 = "Foot_2", t.Nose_1 = "Nose_1", t.Chaeta = "Chaeta",
            t.Plate_1 = "Plate_1", t.Eye_1 = "Eye_1", t.Mouth_1 = "Mouth_1";
    }(g || (g = {}));
    class E {
        static Init() {
            Laya.timer.clearAll(this), this.ArrayInit(), _.chaetaController.init(), _.collider.ColliderInit(),
                _.collider.enable = !1, this.startRoad = _.scene3D.getChildByName("Start"), this.endRoad = _.scene3D.getChildByName("End"),
                this.stageThings = _.scene3D.getChildByName("Stage"), this.loadStageConfigs();
        }
        static ArrayInit() {
            for (let t = 0; t < _.usingPrefabs.length; t++) _.usingPrefabs[t] && !_.usingPrefabs[t].destroyed && _.usingPrefabs[t].destroy();
        }
        static loadStageConfigs() {
            w.loadJsonFile("res/Stages/StagesConfig.json", t => {
                this.StageBorn(t), this.EndStageBorn();
            });
        }
        static StageBorn(t) {
            let e, a = _.readGrade(), n = [];
            if (a < 5) n = (e = t[a - 1]).stages; else {
                let e = JSON.stringify(t[4]), a = JSON.stringify(t[5]), i = JSON.parse(e), s = JSON.parse(a);
                console.log("关卡set长度", i.stages.length, s.stages.length);
                for (let t = 0; t < 5; t++) n.push(w.takeRandomInArray(i.stages));
                for (let t = 0; t < 3; t++) n.push(w.takeRandomInArray(s.stages));
                n = w.randomArray(n);
            }
            let i = new Laya.Vector3(0, 0, 20), s = this.startPos.clone();
            for (let t = 0; t < n.length; t++) {
                this.roadId = t;
                let e = n[t].stage, a = s.clone(), o = this.BornLocalObj(new Laya.Sprite3D(n[t].name), a, new Laya.Vector3(0, 0, 0), this.stageThings);
                this.oneRoadChaeta = 0;
                for (let t = 0; t <= e.length; t++) if (t == e.length) {
                    let t = w.findNodeByName(_.prefabs, g.Road_1), e = new Laya.Vector3(0, 0, 10), a = new Laya.Vector3(0, 0, 0);
                    this.BornLocalObj(t, e, a, o);
                    switch (g.Road_1) {
                        case g.Road_1:
                            s.z += 10, i.z += 10;
                            break;

                        default:
                            console.log("关卡生成了个bug");
                    }
                } else {
                    let a = w.findNodeByName(_.prefabs, e[t].name), n = new Laya.Vector3();
                    n.x = Number(e[t].position.x), n.y = Number(e[t].position.y), n.z = Number(e[t].position.z);
                    let r = new Laya.Vector3();
                    r.x = Number(e[t].rotation.x), r.y = Number(e[t].rotation.y), r.z = Number(e[t].rotation.z);
                    let h = this.BornLocalObj(a, n, r, o);
                    switch (e[t].name) {
                        case g.Road_1:
                            s.z += 10, i.z += 10;
                            break;

                        case g.Hand_1:
                            this.Hand1Deal(h);
                            break;

                        case g.Hand_2:
                            this.Hand2Deal(h);
                            break;

                        case g.Hand_3:
                            this.Hand3Deal(h);
                            break;

                        case g.Foot_1:
                            this.Foot1Deal(h);
                            break;

                        case g.Foot_2:
                            this.Foot2Deal(h);
                            break;

                        case g.Nose_1:
                            this.Nose1Deal(h);
                            break;

                        case g.Eye_1:
                            this.EyeDeal(h);
                            break;

                        case g.Plate_1:
                            this.PlateDeal(h);
                            break;

                        case g.Mouth_1:
                            this.MouthDeal(h);
                            break;

                        default:
                            console.log("关卡生成了个bug");
                    }
                }
                _.collider.ChaetaMax[t] = this.oneRoadChaeta;
            }
            this.endRoad.transform.position = i, console.log(_.collider.ChaetaMax);
        }
        static EndStageBorn() {
            this.PlayerInit(), this.HeadHairInit();
        }
        static PlayerInit() {
            _.player.transform.position = this.startRoad.transform.position.clone(), _.camPoint = _.camNormalPoint,
                _.camNormalPoint.transform.position.x = 0, _.mainCam.getComponent(I) || _.mainCam.addComponent(I),
                _.mainCam.getComponent(I).speed = 1, _.model.getChildByName("PolePoint").transform.localRotationEuler = _.poleStartPoint,
                _.player.getChildByName("Shadow").getChildByName("PolePoint").transform.localRotationEuler = _.poleShadowStartPoint;
            let t = E.endRoad.getChildByName("Head_1").getComponent(Laya.Animator);
            t.speed = 1, x.playAnim(t, "HeadIdle"), _.model.getChildByName("SparkFX").particleSystem.emission.emissionRate = 0;
        }
        static HeadHairInit() {
            let t = E.endRoad.getChildByName("Head_1");
            t.getChildByName("FinishLightFX").active = !1;
            for (let e = 0; e < t.numChildren - 2; e++) t.getChildAt(e).active = !1;
        }
        static Hand1Deal(t) {
            let e = new Laya.Vector3(.2, 1, -.5);
            for (let a = 0; a < 15; a++) for (let n = 0; n < 5; n++) {
                let i = e.clone();
                i.x -= .2 * n + (.05 * Math.random() - .05), i.y = .2 * Math.random() + .8, i.z += .2 * a + (.15 * Math.random() - .15),
                    this.BornChaeta(i, t);
            }
        }
        static Hand2Deal(t) {
            let e = new Laya.Vector3(.2, 1, -.5);
            for (let a = 0; a < 30; a++) for (let n = 0; n < 5; n++) {
                let i = e.clone();
                i.x -= .2 * n + (.05 * Math.random() - .05), i.y = .2 * Math.random() + .8, i.z += .2 * a + (.15 * Math.random() - .15),
                    this.BornChaeta(i, t);
            }
        }
        static Hand3Deal(t) {
            let e = new Laya.Vector3(.2, 1, -.5);
            for (let a = 0; a < 60; a++) for (let n = 0; n < 5; n++) {
                let i = e.clone();
                i.x -= .2 * n + (.05 * Math.random() - .05), i.y = .2 * Math.random() + .8, i.z += .2 * a + (.15 * Math.random() - .15),
                    this.BornChaeta(i, t);
            }
        }
        static Foot1Deal(t) {
            let e = new Laya.Vector3(.7, 1.5, 0);
            for (let a = 0; a < 15; a++) for (let n = 0; n < 5; n++) {
                let i = e.clone();
                i.x -= .2 * n + (.05 * Math.random() - .05), i.y = .2 * Math.random() + 1.3 - .01 * a,
                    i.z += .2 * a + (.15 * Math.random() - .15), this.BornChaeta(i, t);
            }
        }
        static Foot2Deal(t) {
            let e = new Laya.Vector3(.7, 1.5, -1);
            for (let a = 0; a < 30; a++) for (let n = 0; n < 5; n++) {
                let i = e.clone();
                i.x -= .2 * n + (.05 * Math.random() - .05), i.y = .2 * Math.random() + 1.4 - .005 * a,
                    i.z += .2 * a + (.15 * Math.random() - .15), this.BornChaeta(i, t);
            }
        }
        static Nose1Deal(t) {
            for (let e = 2; e < t.numChildren - 1; e++) {
                let a = t.getChildAt(e);
                this.oneRoadChaeta++, _.chaetaController.addComp(a, this.roadId), _.collider.Chaeta.push(a),
                    _.usingPrefabs.push(a);
            }
        }
        static BornChaeta(t, e) {
            let a = w.findNodeByName(_.prefabs, g.Chaeta), n = this.BornLocalObj(a, t, new Laya.Vector3(0, 0, 0), e);
            n.transform.localRotationEuler = new Laya.Vector3(10 * Math.random(), 10 * Math.random(), 10 * Math.random()),
                _.chaetaController.addComp(n, this.roadId), _.collider.Chaeta.push(n), this.oneRoadChaeta++;
        }
        static EyeDeal(t) {
            _.collider.Eye.push(t);
        }
        static MouthDeal(t) {
            _.collider.Mouth.push(t);
        }
        static PlateDeal(t) {
            _.collider.Plate.push(t);
        }
        static BornObj(t, e = new Laya.Vector3(0, 0, 0), a = new Laya.Vector3(0, 0, 0)) {
            let n = t.clone();
            return n && (_.scene3D.addChild(n), n.transform.position = e, n.transform.rotationEuler = a,
                _.usingPrefabs.push(n)), n;
        }
        static BornLocalObj(t, e = new Laya.Vector3(0, 0, 0), a = new Laya.Vector3(0, 0, 0), n) {
            let i = t.clone();
            return i && (n.addChild(i), i.transform.localPosition = e, i.transform.localRotationEuler = a,
                _.usingPrefabs.push(i)), i;
        }
    }
    E.startPos = new Laya.Vector3(0, 0, 0);
    class B extends t {
        init() {
            B.instance = this, _.nowScene = 3, _.isPure || this.restartButton.on(Laya.Event.CLICK, this, this.restartGame),
                //  S.EndIn(null, this.restartButton),
                this.Success.set_visible(_.isSuccess),
                this.Fail.set_visible(!_.isSuccess),
                this.setSkin(_.isSuccess);
            platform.getInstance().initList(this.ADList);
        }
        setSkin(e) {
            if (e)
                this.restartButton.skin = "endMenu/js_btn_1.png";
            else
                this.restartButton.skin = "endMenu/js_btn_2.png";
        }
        restartGame() {
            platform.getInstance().showInterstitial(() => {
                _.isSuccess && _.addGrade(),
                    E.Init(), Laya.Scene.destroy(c.ENDMENU), w.loadScene(c.STARTMENU);
                // S.EndOut(() => {
                //     E.Init(), Laya.Scene.destroy(c.ENDMENU), w.loadScene(c.STARTMENU);
                // });
            })
        }
    }
    class b extends Laya.Scene {
        onAwake() {
            this.size(Laya.stage.width, Laya.stage.height), this.bg && this.bg.size(Laya.stage.width, Laya.stage.height);
        }
        onClosed() {
            Laya.timer.clearAll(this), i.Instance.hideBanner();
        }
    }
    class A extends b {
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (i.Instance.showBanner(),
                Laya.timer.once(2500, this, () => {
                    this.isforce ? (i.Instance.isLoadBannerError && this.onCloseEvent(), i.Instance.hideBanner()) : this.onCloseEvent();
                }));
        }
        reFreshUI() {
            this.pressBar.value > u.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= u.instance.dataConfig.front_progress_bar_return),
                this.imgAlpha.alpha = 2 * this.pressBar.value;
        }
        initUI() {
            this.pressBar.value = 0, this.btnPress.on(Laya.Event.CLICK, this, this.onPress),
                Laya.timer.frameLoop(1, this, this.reFreshUI);
            var t = Number(u.instance.dataConfig.front_box_clicks[0]), e = Number(u.instance.dataConfig.front_box_clicks[1]);
            this.needClick = Math.floor(Math.random() * (e - u.instance.dataConfig.front_progress_bar_reduce - t + 1)) + t,
                this.addProgerss = 1 / e, console.log("点击数：", this.needClick), this.isforce = u.instance.dataConfig.front_is_box_force;
        }
        initEvent() {
            u.instance.eventDispatcher.on("wx_awake_event", this, this.onCloseEvent), i.Instance.isLoadBannerError || u.instance.eventDispatcher.on("hide_box_scene", this, () => {
                u.instance.eventDispatcher.offAll("hide_box_scene"), this.onCloseEvent();
            });
        }
        onOpened() {
            i.Instance.hideBanner(), Laya.timer.frameOnce(1, this, () => {
                i.Instance.isLoadBannerError && this.onCloseEvent();
            }), this.initUI(), this.initEvent();
        }
        onCloseEvent() {
            u.instance.closeScene(this);
        }
    }
    class D extends b {
        constructor() {
            super(...arguments), this.fingerDir = .01, this.effectCD = 1e3;
        }
        onOpened() {
            i.Instance.hideBanner(), i.Instance.isLoadBannerError && this.onCloseEvent(), this.initUI(),
                this.initEvent();
        }
        initUI() {
            this.pressBar.value = 0, this.btnPress.on(Laya.Event.CLICK, this, this.onPress),
                Laya.timer.frameLoop(1, this, this.reFreshUI);
            var t = Number(u.instance.dataConfig.front_box_clicks[0]), e = Number(u.instance.dataConfig.front_box_clicks[1]);
            this.needClick = Math.floor(Math.random() * (e - u.instance.dataConfig.front_progress_bar_reduce - t + 1)) + t,
                this.addProgerss = 1 / e, console.log("点击数：", this.needClick), this.isforce = u.instance.dataConfig.front_is_box_force,
                _.box3D.active = !0, I.instance.GoPointRightNow(_.camBoxPoint);
            let a = _.box3D.getChildByName("Head_1"), n = a.getChildByName("Hair_4").getChildByName("Player (1)");
            this.pole = n.getChildByName("Model").getChildByName("PolePoint").getChildByName("Pole"),
                this.headAnim = a.getComponent(Laya.Animator), x.playAnim(this.headAnim, "HeadSmileBox", 0),
                this.headAnim.speed = .01, this.poleValue(0);
        }
        initEvent() {
            u.instance.eventDispatcher.on("wx_awake_event", this, this.onCloseEvent), i.Instance.isLoadBannerError || u.instance.eventDispatcher.on("hide_box_scene", this, () => {
                u.instance.eventDispatcher.offAll("hide_box_scene"), this.onCloseEvent();
            });
        }
        reFreshUI() {
            this.pressBar.value > u.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= u.instance.dataConfig.front_progress_bar_return),
                x.playAnim(this.headAnim, "HeadSmileBox", this.pressBar.value), this.poleValue(this.pressBar.value);
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (i.Instance.showBanner(),
                Laya.timer.once(2500, this, () => {
                    this.isforce ? (i.Instance.isLoadBannerError && this.onCloseEvent(), i.Instance.hideBanner()) : this.onCloseEvent();
                }));
        }
        onCloseEvent() {
            _.addCoin(100), S.showToast("获得100金币"), I.instance.GoPointRightNow(_.camNormalPoint),
                _.box3D.active = !1, u.instance.closeScene(this);
        }
        poleValue(t) {
            let e = 0 + Math.floor(89 * t);
            for (let t = 0; t < 89; t++) t > 0 && (this.pole.getChildAt(t).active = t <= e);
        }
        effectOn(t = !0) {
            this.pole.getChildByName("EndEffect").particleSystem.emission.emissionRate = t ? 10 : 0,
                t && Laya.timer.once(this.effectCD, this, this.effectEnd);
        }
        effectEnd() {
            this.effectOn(!1);
        }
    }
    class M extends b {
        constructor() {
            super(...arguments), this.boxX = 127.5, this.boxY = 121, this.chestState = 0;
        }
        onPress() {
            this.pressBar.value += this.addProgerss, Laya.Tween.to(this.btnPress, {
                scaleX: .7,
                scaleY: .7
            }, 110, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnPress, {
                    scaleX: 1,
                    scaleY: 1
                }, 110, null);
            })), console.log("前", this.pressBar.value, this.addProgerss, this.needClick), this.pressBar.value >= this.needClick * this.addProgerss && (i.Instance.showBanner(),
                Laya.timer.once(2500, this, () => {
                    this.isforce ? (i.Instance.isLoadBannerError && this.onCloseEvent(), i.Instance.hideBanner()) : this.onCloseEvent();
                })), this.chestHit();
        }
        reFreshUI() {
            this.pressBar.value > u.instance.dataConfig.front_progress_bar_return && (this.pressBar.value -= u.instance.dataConfig.front_progress_bar_return),
                this.light.rotation += 1;
        }
        initUI() {
            this.pressBar.value = 0, this.btnPress.on(Laya.Event.CLICK, this, this.onPress),
                Laya.timer.frameLoop(1, this, this.reFreshUI);
            var t = Number(u.instance.dataConfig.front_box_clicks[0]), e = Number(u.instance.dataConfig.front_box_clicks[1]);
            this.needClick = Math.floor(Math.random() * (e - u.instance.dataConfig.front_progress_bar_reduce - t + 1)) + t,
                this.addProgerss = 1 / e, console.log("点击数：", this.needClick), this.isforce = u.instance.dataConfig.front_is_box_force,
                this.chestInit();
        }
        initEvent() {
            u.instance.eventDispatcher.on("wx_awake_event", this, this.onCloseEvent), i.Instance.isLoadBannerError || u.instance.eventDispatcher.on("hide_box_scene", this, () => {
                u.instance.eventDispatcher.offAll("hide_box_scene"), this.onCloseEvent();
            });
        }
        onOpened() {
            i.Instance.hideBanner(), i.Instance.isLoadBannerError && this.onCloseEvent(), this.initUI(),
                this.initEvent();
        }
        onCloseEvent() {
            u.instance.eventDispatcher.off("wx_awake_event", this, this.onCloseEvent), u.instance.eventDispatcher.offAll("hide_box_scene"),
                this.btnPress.off(Laya.Event.CLICK, this, this.onPress), this.chestOpen(), _.addCoin(100),
                S.showToast("获得100金币"), setTimeout(() => {
                    u.instance.closeScene(this);
                }, 1e3);
        }
        chestInit() {
            Laya.loader.load(["res/atlas/JJExportRes/box3/bx_idle.atlas", "res/atlas/JJExportRes/box3/bx_hit.atlas", "res/atlas/JJExportRes/box3/bx_open.atlas", "res/atlas/JJExportRes/box3/bx_hit/bx_hit_fx.atlas"], Laya.Handler.create(this, () => {
                this.chestIdle();
            }));
        }
        chestDestroy() {
            this.chestTimer && clearTimeout(this.chestTimer);
            let t = this.imgGift.getChildAt(0);
            t && t.destroy();
        }
        chestIdle() {
            this.chestDestroy(), w.loadAndPlayAnim("JJExport/Anim/Box3Idle.ani", this.imgGift, this.boxX, this.boxY, !0);
        }
        chestHit() {
            this.chestDestroy(), w.loadAndPlayAnim("JJExport/Anim/Box3Hit.ani", this.imgGift, this.boxX, this.boxY),
                this.chestTimer = setTimeout(() => {
                    this.chestIdle();
                }, 400);
        }
        chestOpen() {
            this.chestDestroy(), w.loadAndPlayAnim("JJExport/Anim/Box3Open.ani", this.imgGift, this.boxX, this.boxY);
        }
    }
    class P extends b {
        constructor() {
            super(...arguments), this.navData1 = [], this.scrollDir1 = 1, this.navData2 = [],
                this.scrollDir2 = 1;
        }
        onOpened(t) {
            super.onOpened(t), this.initList1(), this.initList2();
        }
        initList1() {
            this.navList1.x = 0, this.navData1 = [].concat(u.instance.navDataArr), this.navData1 = u.instance.shuffleArr(this.navData1),
                this.navList1.vScrollBarSkin = "", this.navList1.repeatX = 2, this.navList1.repeatY = this.navData1.length / 2,
                this.navList1.array = this.navData1, this.navList1.renderHandler = Laya.Handler.create(this, this.onListRender1, null, !1),
                this.navList1.mouseHandler = new Laya.Handler(this, this.mouseHandler1), this.scrollLoop1();
        }
        mouseHandler1(t, e) {
            Laya.timer.clear(this, this.scrollLoop1), Laya.timer.once(1e3, this, this.scrollLoop1);
        }
        scrollLoop1() {
            Laya.timer.once(1e3, this, () => {
                let t = Math.floor(this.navList1.startIndex);
                1 == this.scrollDir1 ? (t += 2) >= this.navData1.length - 6 && (t--, this.scrollDir1 = -this.scrollDir1) : (t -= 2) < 0 && (this.scrollDir1 = -this.scrollDir1),
                    this.navList1.tweenTo(t, 1e3, Laya.Handler.create(this, this.scrollLoop1));
            });
        }
        onListRender1(t, e) {
            if (!(e >= this.navList1.array.length)) {
                var a = t.getChildByName("item"), n = a.getChildByName("icon"), i = a.getChildByName("name");
                n.skin = this.navData1[e].icon, i.text = u.instance.getTitle(this.navData1[e]),
                    a.off(Laya.Event.CLICK, this, this.navCB, [this.navData1, e]), a.on(Laya.Event.CLICK, this, this.navCB, [this.navData1, e]);
            }
        }
        initList2() {
            this.navList2.x = this.width - 335, this.navData2 = [].concat(u.instance.navDataArr),
                this.navData2 = u.instance.shuffleArr(this.navData2), this.navList2.vScrollBarSkin = "",
                this.navList2.repeatX = 2, this.navList2.repeatY = this.navData2.length / 2, this.navList2.array = this.navData2,
                this.navList2.renderHandler = Laya.Handler.create(this, this.onListRender2, null, !1),
                this.navList2.mouseHandler = new Laya.Handler(this, this.mouseHandler2), this.scrollLoop2();
        }
        mouseHandler2(t, e) {
            Laya.timer.clear(this, this.scrollLoop2), Laya.timer.once(1e3, this, this.scrollLoop2);
        }
        scrollLoop2() {
            Laya.timer.once(1e3, this, () => {
                let t = Math.floor(this.navList2.startIndex);
                1 == this.scrollDir2 ? (t += 2) >= this.navData2.length - 6 && (t--, this.scrollDir2 = -this.scrollDir2) : (t -= 2) < 0 && (this.scrollDir2 = -this.scrollDir2),
                    this.navList2.tweenTo(t, 1e3, Laya.Handler.create(this, this.scrollLoop2));
            });
        }
        onListRender2(t, e) {
            if (!(e >= this.navList2.array.length)) {
                var a = t.getChildByName("item"), n = a.getChildByName("icon"), i = a.getChildByName("name");
                n.skin = this.navData2[e].icon, i.text = u.instance.getTitle(this.navData2[e]),
                    a.off(Laya.Event.CLICK, this, this.navCB, [this.navData2, e]), a.on(Laya.Event.CLICK, this, this.navCB, [this.navData2, e]);
            }
        }
        navCB(t, e) {
            console.log("click id:", e), e = u.instance.navDataArr.indexOf(t[e]), u.instance.NavigateApp(e, () => { });
        }
    }
    class N extends b {
        constructor() {
            super(...arguments), this.navData = [], this.tweenIndex = [];
        }
        onOpened(t) {
            t && t.posY && (this.navList.y = t.posY), this.initList();
        }
        updateNavData() {
            this.navData = [].concat(u.instance.shuffleArr(u.instance.navDataArr)).slice(0, 6);
            let t = [0, 1, 2, 3, 4, 5], e = [w.takeRandomInArray(t), w.takeRandomInArray(t), w.takeRandomInArray(t)];
            this.tweenIndex = e, this.navList.array = this.navData;
        }
        initList() {
            this.navData = [].concat(u.instance.shuffleArr(u.instance.navDataArr)).slice(0, 6);
            let t = [0, 1, 2, 3, 4, 5], e = [w.takeRandomInArray(t), w.takeRandomInArray(t), w.takeRandomInArray(t)];
            this.tweenIndex = e, this.navList.vScrollBarSkin = "", this.navList.repeatX = 3,
                this.navList.repeatY = 2, this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1);
            let a = [0, 1, 2, 3, 4, 5], n = [w.takeRandomInArray(a), w.takeRandomInArray(a)];
            for (let t = 0; t < 2; t++) {
                var i = n[t], s = this.navList.cells[i];
                let e;
                switch (t) {
                    case 0:
                        e = this.imgFinger1;
                        break;

                    case 1:
                        e = this.imgFinger2;
                }
                s.addChild(e), e.pos(s.width / 1.5, s.height / 1.5);
            }
            Laya.timer.clear(this, this.fingerAnim1), Laya.timer.clear(this, this.fingerAnim2),
                Laya.timer.loop(1e3, this, this.fingerAnim1), Laya.timer.loop(1e3, this, this.fingerAnim2);
        }
        fingerAnim1() {
            if (!this.isPlayFinger1) {
                this.isPlayFinger1 = !0, u.instance.toRotaion(this.imgFinger1, -30, 100, !1, !0, () => {
                    this.isPlayFinger1 = !1;
                });
            }
        }
        fingerAnim2() {
            if (!this.isPlayFinger2) {
                this.isPlayFinger2 = !0, u.instance.toRotaion(this.imgFinger1, -30, 100, !1, !0, () => {
                    this.isPlayFinger2 = !1;
                });
            }
        }
        onListRender(t, e) {
            if (!(e >= this.navList.array.length)) {
                var a = t.getChildByName("item");
                a.getChildByName("icon").skin = this.navData[e].icon, e = u.instance.navDataArr.indexOf(this.navData[e]),
                    a.off(Laya.Event.CLICK, this, this.navCB, [e]), a.on(Laya.Event.CLICK, this, this.navCB, [e]),
                    a.rotation = 0;
                for (let t = 0; t < this.tweenIndex.length; t++) if (e == this.tweenIndex[t]) {
                    this.tween(a);
                    break;
                }
            }
        }
        navCB(t) {
            console.log("click id:", t), u.instance.NavigateApp(t, () => {
                n.Instance.showFullGameUI(() => {
                    i.Instance.showBanner();
                });
            }, () => { }), this.updateNavData();
        }
        tween(t) {
            u.instance.toRotaion(t, 20, 500, !1, !0, () => {
                u.instance.toRotaion(t, -20, 500, !1, !0, () => {
                    this.updateNavData();
                });
            });
        }
    }
    class T extends b {
        constructor() {
            super(...arguments), this.navData = [], this.scrollDir = 1, this.hotArr = [], this.fingerArr = [];
        }
        onOpened(t) {
            i.Instance.hideBanner(), this._init();
            var e = t && t.isHomePage;
            n.Instance.wanghongAutoNavigateApp(e), n.Instance.wuchuBtn(this.url, e, this.btnClose, this.onCloseClick);
        }
        onClosed() {
            super.onClosed();
        }
        _init() {
            !n.Instance.isOpenWuChu || n.Instance.Level < u.instance.dataConfig.front_randompaly_start_level ? this.btnRandomPlay.visible = !1 : this.btnRandomPlay.on(Laya.Event.CLICK, this, this.randomNav),
                this.getHotRandArr(), this.getFingerRandArr(), this.initList();
        }
        getHotRandArr() {
            let t = u.instance.navDataArr.length, e = [];
            for (var a = 0; a < t; a++) e.push(a);
            e = u.instance.shuffleArr(e), this.hotArr = e.slice(0, Math.round(.2 * t));
        }
        getFingerRandArr() {
            let t = u.instance.navDataArr.length, e = [];
            for (var a = 0; a < t; a++) -1 == this.hotArr.indexOf(a) && e.push(a);
            e = u.instance.shuffleArr(e), this.fingerArr = e.slice(0, Math.round(.2 * t));
        }
        initList() {
            this.navData = [].concat(u.instance.navDataArr), this.navData = u.instance.shuffleArr(this.navData),
                u.instance.screenOrientation == r.LANDSCAPE ? (this.navList.hScrollBarSkin = "",
                    this.navList.repeatY = 2, this.navList.repeatX = Math.floor(this.navData.length / 2),
                    this.navList.height = 562, this.navList.width = Laya.stage.width, this.navList.spaceX = 20,
                    this.navList.spaceY = 20, this.navList.centerX = 0, this.navList.y = 138) : (this.navList.vScrollBarSkin = "",
                        this.navList.repeatX = 3, this.navList.repeatY = Math.floor(this.navData.length / 3),
                        this.navList.width = 717, this.navList.height = Laya.stage.displayHeight - 434,
                        this.navList.spaceX = 30, this.navList.spaceY = 25, this.navList.centerX = 0, this.navList.y = 138),
                this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                    Laya.timer.frameLoop(1, this, this.scrollLoop);
                });
        }
        mouseHandler(t, e) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let t = this.navList.scrollBar;
            t.value += this.scrollDir, (t.value >= t.max || t.value <= 0) && (this.scrollDir = -this.scrollDir,
                this.againScroll());
        }
        onListRender(t, e) {
            if (!(e >= this.navList.array.length)) {
                var a = t.getChildByName("item"), n = a.getChildByName("icon"), i = a.getChildByName("name"), s = a.getChildByName("hot"), o = a.getChildByName("color"), r = a.getChildByName("imgFinger");
                o.skin = "JJExportRes/" + (Math.floor(e % 9) + 1) + ".png", n.skin = this.navData[e].icon,
                    i.text = u.instance.getTitle(this.navData[e]), s.visible = -1 != this.hotArr.indexOf(e),
                    r.visible = -1 != this.fingerArr.indexOf(e), r.visible && (Laya.timer.clear(r, this.fingerAnim),
                        Laya.timer.loop(500, r, this.fingerAnim, [r])), a.off(Laya.Event.CLICK, this, this.navCB, [e]),
                    a.on(Laya.Event.CLICK, this, this.navCB, [e]);
            }
        }
        navCB(t) {
            console.log("click id:", t), t = u.instance.navDataArr.indexOf(this.navData[t]),
                u.instance.NavigateApp(t, () => { }, () => { });
        }
        randomNav() {
            var t = Math.floor(Math.random() * this.navData.length);
            console.log("click id:", t), u.instance.NavigateApp(t, null, () => { });
        }
        onCloseClick() {
            u.instance.closeScene(this);
        }
        fingerAnim(t) {
            u.instance.toRotaion(t, -30, 100, !1, !0);
        }
    }
    class R extends b {
        constructor() {
            super(...arguments), this.navData = [], this.fingerArr = [], this.scrollDir = 1;
        }
        onOpened(t) {
            i.Instance.hideBanner(), this.initList();
            var e = t && t.isHomePage;
            n.Instance.remenAutoNavigateApp(e), n.Instance.wuchuBtn(this.url, e, this.btnClose, this.closeCB);
        }
        onClosed() {
            super.onClosed();
        }
        getFingerRandArr() {
            let t = u.instance.navDataArr.length, e = [];
            for (var a = 0; a < t; a++) e.push(a);
            e = u.instance.shuffleArr(e), this.fingerArr = e.slice(0, Math.round(.3 * t));
        }
        initList() {
            this.getFingerRandArr(), this.navData = [].concat(u.instance.navDataArr), this.navData = u.instance.shuffleArr(this.navData),
                u.instance.screenOrientation == r.LANDSCAPE ? (this.navList.hScrollBarSkin = "",
                    this.navList.repeatY = 2, this.navList.repeatX = Math.floor(this.navData.length / 2),
                    this.navList.height = 650, this.navList.width = Laya.stage.width, this.navList.spaceX = 0,
                    this.navList.spaceY = 0, this.navList.centerX = 0, this.navList.y = 90) : (this.navList.vScrollBarSkin = "",
                        this.navList.repeatX = 2, this.navList.repeatY = Math.floor(this.navData.length / 2),
                        this.navList.array = this.navData, this.navList.width = 634, this.navList.height = Laya.stage.displayHeight - 337,
                        this.navList.spaceX = 70, this.navList.spaceY = 30, this.navList.centerX = 0, this.navList.y = 100),
                this.navList.array = this.navData, this.navList.renderHandler = Laya.Handler.create(this, this.onListRender, null, !1),
                this.navList.mouseHandler = new Laya.Handler(this, this.mouseHandler), Laya.timer.once(1e3, this, () => {
                    Laya.timer.frameLoop(1, this, this.scrollLoop);
                });
        }
        mouseHandler(t, e) {
            this.againScroll();
        }
        againScroll() {
            Laya.timer.clear(this, this.scrollLoop), Laya.timer.once(1e3, this, () => {
                Laya.timer.frameLoop(1, this, this.scrollLoop);
            });
        }
        scrollLoop() {
            let t = this.navList.scrollBar;
            t.value += this.scrollDir, (t.value >= t.max || t.value <= 0) && (this.scrollDir = -this.scrollDir,
                this.againScroll());
        }
        onListRender(t, e) {
            if (!(e >= this.navList.array.length)) {
                u.instance.screenOrientation == r.PORTRAIT && t.scale(1, 1);
                var a = t.getChildByName("item"), n = a.getChildByName("icon"), i = a.getChildByName("name"), s = a.getChildByName("imgFinger");
                s.visible = -1 != this.fingerArr.indexOf(e), s.visible && (Laya.timer.clear(s, this.fingerAnim),
                    Laya.timer.loop(500, s, this.fingerAnim, [s])), n.skin = this.navData[e].icon,
                    i.text = u.instance.getTitle(this.navData[e]), a.off(Laya.Event.CLICK, this, this.navCB, [e]),
                    a.on(Laya.Event.CLICK, this, this.navCB, [e]);
            }
        }
        navCB(t) {
            console.log("click id:", t), t = u.instance.navDataArr.indexOf(this.navData[t]),
                u.instance.NavigateApp(t, () => { }, () => { });
        }
        onContinueClick() {
            var t = Math.floor(Math.random() * this.navData.length);
            console.log("click id:", t), u.instance.NavigateApp(t, null, () => { });
        }
        closeCB() {
            u.instance.closeScene(this);
        }
        fingerAnim(t) {
            u.instance.toRotaion(t, -30, 100, !1, !0);
        }
    }
    class V extends Laya.Script {
        constructor() {
            super(...arguments), this.axis = 0, this.horizontal = 0, this.forwardSpeed = 1.4,
                this.targetHorizontal = 0, this.inHorizontal = 0, this.horizontalSensity = .1, this.forwardSensity = .15,
                this.wayAxis = 0;
        }
        onEnable() {
            this.init();
        }
        init() {
            this.player = _.player, Laya.timer.frameLoop(1, this, this.timeUpdate);
        }
        onUpdate() {
            let t = _.player.transform.localPosition.clone();
            t.z = this.axis, _.player.transform.localPosition = t;
            let e = _.model.transform.localPosition.clone();
            e.x = -7 * this.horizontal, _.model.transform.localPosition = e;
            let a = _.player.getChildByName("Shadow"), n = a.transform.localPosition.clone();
            n.x = -7 * this.horizontal, a.transform.localPosition = n;
            let i = _.camPoint.transform.localPosition.clone();
            i.x = -6 * this.horizontal, _.camPoint.transform.localPosition = i;
            let s = _.model.getChildByName("PolePoint"), o = _.player.getChildByName("Shadow").getChildByName("PolePoint"), r = 13 * this.wayAxis;
            r > 1 ? r = 1 : r < -1 && (r = -1), w.setTransRotEulerY(s.transform, 30 * -r), o.transform.rotation = s.transform.rotation.clone(),
                H.instance.isStart && _.collider.ColliderUpdate();
            let h = 40 + 20 * H.instance.playerNowRoadId;
            _.player.transform.position.z > h && H.instance.playerNowRoadId++;
        }
        checkWay(t) {
            let e = !1;
            return this.targetHorizontal = this.inHorizontal + t, this.targetHorizontal > .5 ? (this.targetHorizontal = .5,
                this.checkOut(), e = !0) : this.targetHorizontal < -.5 && (this.targetHorizontal = -.5,
                    this.checkOut(), e = !0), e;
        }
        checkOut() {
            this.inHorizontal = this.targetHorizontal;
        }
        timeUpdate() {
            this.axis += this.forwardSpeed * this.forwardSensity, this.wayAxis = this.targetHorizontal - this.horizontal,
                this.horizontal += this.wayAxis * this.horizontalSensity;
        }
        Hit() {
            this.forwardSpeed = -3, Laya.timer.frameLoop(1, this, this.HitUpdate);
        }
        HitUpdate() {
            this.forwardSpeed += .04, this.forwardSpeed >= .2 && (Laya.timer.clear(this, this.HitUpdate),
                this.destroy());
        }
        onDisable() { }
    }
    class O extends Laya.Script {
        constructor() {
            super(...arguments), this.isInit = !1, this.isUpdatetingOn = !1, this.isGaming = !1,
                this.isBall = !1, this.boardOffset = 0, this.isPressed = !1, this.orignal = 0;
        }
        onEnable() {
            this.init();
        }
        onDestroy() { }
        init() {
            this.isInit || (O.instance = this, Laya.timer.frameLoop(1, this, this.timeUpdate));
        }
        gameStart() {
            this.isGaming = !0, this.isUpdatetingOn = !0, _.player.getComponent(V) || _.player.addComponent(V),
                w.TouchOn(this.onMouseDown, this.onMouseMove, this.onMouseUp, this), console.log("玩家Update开始");
        }
        gameSuccessEnd() {
            this.isGaming = !1, w.TouchOff(this.onMouseDown, this.onMouseMove, this.onMouseUp, this),
                _.camPoint = _.camEndPoint, _.mainCam.getComponent(I).speed = .1, _.isSuccess = !0;
        }
        gameSuccessAnim() {
            _.player.getComponent(V).destroy();
            let t = _.model.getChildByName("PolePoint"),
                e = _.player.getChildByName("Shadow").getChildByName("PolePoint"),
                a = new C(), n = E.endRoad.getChildByName("Head_1"),
                i = "Hair_";
            //     s = (_.readGrade() - 1) % 5 + 1;
            // i += s.toString();
            // let o = n.getChildByName(i),
            //     r = o.getChildByName("HairPos");
            // o.active = !0,
            //     o.getChildByName("HairPos").active = !1;
            let l = n.getComponent(Laya.Animator);
            x.playAnim(l, "HeadSmile");
            let c = .25 * _.collider.Chaeta.length,
                d = H.instance.stageCollectChaeta / c;
            console.log("ddddddddddddddddd" + d)
            if (d < 0.6) {
                window.WebAudioEngine.stopSound("res/Sounds/Bgm.mp3");
                _.soundController.play(h.Eyes)
                this.isGaming = !1,
                    this.isUpdatetingOn = !1,
                    w.TouchOff(this.onMouseDown,
                        this.onMouseMove, this.onMouseUp, this),
                    H.instance.GameEnd(),
                    _.isSuccess = !1;
                return;
            }
            else {
                s = (_.readGrade() - 1) % 5 + 1;
                i += s.toString();
                let o = n.getChildByName(i),
                    r = o.getChildByName("HairPos");
                o.active = !0,
                    o.getChildByName("HairPos").active = !1;
                d >= 1 && (d = 1), Laya.timer.once(10, this, () => {
                    let i = t.transform.localRotationEuler.clone(), c = r.transform.position.clone();
                    t.transform.lookAt(c, new Laya.Vector3(0, 1, 0));
                    let m = t.transform.localRotationEuler.clone();
                    t.transform.localRotationEuler = i, o.getComponent(Laya.Animator).speed = 1, a.toTween(t, {
                        rot: m
                    }, 1e3, () => {
                        window.WebAudioEngine.stopSound("res/Sounds/Bgm.mp3");
                        _.soundController.play(h.Hairy3Sec), o.getChildByName("HairPos").active = !0;
                        let a = !1;
                        Laya.timer.frameLoop(1, this, () => {
                            if (a) return;
                            let i = r.transform.position.clone();
                            t.transform.localRotationEuler = _.poleStartPoint, t.transform.lookAt(i, new Laya.Vector3(0, 1, 0)),
                                e.transform.localRotationEuler = _.poleShadowStartPoint, e.transform.rotation = t.transform.rotation.clone();
                            let c = o.getComponent(Laya.Animator), m = c.getControllerLayer(0).getCurrentPlayState().normalizedTime, g = ((m %= 1) - .166) / (.833 - .166);
                            if (g >= d) {
                                g = d, o.getChildByName("HairPos").active = !1;
                                let t = 500;
                                d >= 1 ? (n.getChildByName("FinishLightFX").active = !0, _.soundController.play(h.FinishLight), t = 1e3)
                                    : (_.soundController.stop(h.Hairy3Sec), console.log("ddddddddddddddddd" + d), t = 1),
                                    Laya.timer.once(t, this, () => {
                                        l.speed = 0, c.speed = .01;
                                        let t = "Hair" + s.toString();
                                        x.playAnim(c, t, d), Laya.timer.once(10, this, () => {
                                            Laya.timer.clearAll(this), H.instance.GameEnd();
                                        });
                                    }), a = !0;
                            }
                            let f = Math.floor(H.instance.stageCollectChaeta * g / d), u = H.instance.stageCollectChaeta, y = u - f;
                            for (let t = u - 1; t >= y; t--) {
                                let e = _.chaetaController.mycomp[t], a = _.chaetaController.comp[e];
                                i.x += .04 * Math.random() - .02, i.y += .04 * Math.random() - .02, i.z += .04 * Math.random() - .02,
                                    a.outAnim(i);
                            }
                        });
                    }, !0, () => {
                        e.transform.rotation = t.transform.rotation.clone();
                    });
                });
            }

        }
        gameFailEnd() {
            this.isGaming = !1,
                this.isUpdatetingOn = !1,
                _.player.getComponent(V).Hit(),
                w.TouchOff(this.onMouseDown,
                    this.onMouseMove, this.onMouseUp, this),
                H.instance.GameEnd(),
                _.isSuccess = !1;
        }
        onUpdate() {
            this.isUpdatetingOn && _.chaetaController.update();
        }
        ChaetaUpdate() {
            this.isUpdatetingOn && _.chaetaController.update();
        }
        timeUpdate() {
            if (this.isUpdatetingOn) if (this.isGaming) _.player.transform.position.z > E.endRoad.transform.position.z && this.gameSuccessEnd(); else {
                if (_.player.getComponent(V)) if (_.player.transform.position.z < E.endRoad.transform.position.z + 15) {
                    let t = _.player.getComponent(V).targetHorizontal, e = .01;
                    Math.abs(t) <= e ? _.player.getComponent(V).targetHorizontal = 0 : t > e ? _.player.getComponent(V).targetHorizontal -= e : t < -e && (_.player.getComponent(V).targetHorizontal += e);
                } else this.gameSuccessAnim();
            }
        }
        onMouseDown(t) {
            this.isPressed = !0, this.isGaming && (this.orignal = t.stageX / Laya.stage.width,
                _.player.getComponent(V).checkOut());
        }
        onMouseMove(t) {
            if (this.isGaming && this.isPressed) {
                let e = t.stageX / Laya.stage.width - this.orignal;
                _.player.getComponent(V).checkWay(2 * e) && (this.orignal = t.stageX / Laya.stage.width);
            }
        }
        onMouseUp(t) {
            this.isPressed = !1, this.isGaming && _.player.getComponent(V).checkOut();
        }
        onDisable() { }
    }
    class H extends t {
        constructor() {
            super(...arguments), this.isStart = !1, this.isSuccess = !0, this.stageCollectCoin = 0,
                this.stageCollectChaeta = 0, this.myChaeta = [], this.playerNowRoadId = 0, this.totarialWay = 3,
                this.isVibrating = !1, this.isSounding = !1, this.isReducing = !1, this.reduceCD = 10,
                this.isMetalSounding = !1, this.isPlate = !1;
        }
        init() {
            H.instance = this, this.update = this.getComponent(O), _.isPure || S.StageIn(null, null, null, null),
                _.nowScene = 2, this.ValueInit(), this.GameInit(), this.TotarialOn();
        }
        ValueInit() {
            e.GetPlayerData().grade;
        }
        TotarialOn() {
            this.totarialUI.set_visible(!0), w.TouchOn(this.TotarialEnd, () => { }, () => { }, this),
                Laya.timer.frameLoop(1, this, this.TotarialUpdate);
        }
        TotarialUpdate() {
            let t = this.totarialUI.getChildByName("finger");
            t.x += this.totarialWay, t.x >= 400 ? this.totarialWay = -3 : t.x <= 50 && (this.totarialWay = 3);
        }
        TotarialEnd() {
            this.GameStart(), Laya.timer.clear(this, this.TotarialUpdate), w.TouchOff(this.TotarialEnd, () => { }, () => { }, this),
                this.totarialUI.set_visible(!1);
        }
        GameInit() {
            this.gradeValue.value = _.readGrade().toString();
        }
        GameStart() {
            this.isStart = !0, this.update.gameStart();
        }
        GameEnd() {
            this.isStart = !1, _.isSuccess = this.isSuccess, setTimeout(() => {
                _.endCoin = this.stageCollectCoin, S.StageOut(() => {
                    Laya.Scene.destroy(c.STAGEUI), w.loadScene(c.ENDMENU);
                });
            }, 2e3);
        }
        AddCoin() {
            console.log("增加金币"), this.stageCollectCoin++;
        }
        AddChaeta(t) {
            this.stageCollectChaeta++, this.myChaeta.push(t);
        }
        AddCheataEffect() {
            this.isVibrating || (this.isVibrating = !0, w.vibrateShort(), Laya.timer.once(10, this, () => {
                this.isVibrating = !1;
            })), this.isSounding || (_.soundController.play(h.Hair), this.isSounding = !0, Laya.timer.once(100, this, () => {
                this.isSounding = !1;
            }));
        }
        ReduceChaeta() {
            if (!this.isReducing) {
                this.isReducing = !0, Laya.timer.once(this.reduceCD, this, this.ReduceChaetaDo);
                let t, e = 10, a = this.myChaeta.length;
                for (let n = t = this.myChaeta.length < e ? 0 : this.myChaeta.length - e; n < a; n++) {
                    let t = _.model.transform.position.clone();
                    t.y += 1, t.x += 1 * Math.random() - .5, t.z += 1 * Math.random() - .5;
                    let e = _.chaetaController.mycomp[n];
                    _.chaetaController.comp[e].hit(t);
                }
                let n = [], i = [];
                for (let e = 0; e < t; e++) {
                    n.push(this.myChaeta[e]);
                    let t = _.chaetaController.mycomp[e];
                    i.push(t);
                }
                _.chaetaController.mycomp = i, this.myChaeta = n, this.stageCollectChaeta -= e,
                    this.stageCollectChaeta < 0 && (this.stageCollectChaeta = 0), console.log("减少毛发"),
                    this.isPlate ? this.isMetalSounding || (this.isMetalSounding = !0, _.soundController.play(h.Metal)) : this.isMetalSounding = !1;
            }
        }
        ReduceChaetaDo() {
            this.isReducing = !1;
        }
        PlateEffectSwitch(t) {
            _.model.getChildByName("SparkFX").particleSystem.emission.emissionRate = t ? 50 : 0,
                this.isPlate = t;
        }
    }
    class k {
        constructor() {
            this.enable = !1, this.rubbishPos = new Laya.Vector3(-1e3, -1e3, -1e3), this.Chaeta = [],
                this.ChaetaMax = [0, 0, 0, 0, 0, 0], this.Eye = [], this.Mouth = [], this.Plate = [],
                this.ColliderInit();
        }
        ColliderInit() {
            this.enable = !0, this.ArrayInit(), this.ChaetaMax = [0, 0, 0, 0, 0, 0];
        }
        ArrayInit() {
            this.Eye = [], this.Mouth = [], this.Plate = [], this.Chaeta = [];
        }
        ColliderUpdate() {
            if (this.enable) {
                let t = 0, e = 0;
                for (let a = 0; a <= H.instance.playerNowRoadId; a++) a >= 1 && (t += this.ChaetaMax[a - 1]),
                    a != this.ChaetaMax.length && (e += this.ChaetaMax[a]);
                for (let a = t; a < e; a++) {
                    let t = _.chaetaController.comp[a];
                    t && t.colliderActive && this.NormalBoxCheck_2D(_.model.transform.position.clone(), 1.2, .4, this.Chaeta[a].transform.position.clone(), 0, 0) && t.hitDo();
                }
                for (let t = 0; t < this.Eye.length; t++) if (this.NormalBoxCheck_2D(_.model.transform.position.clone(), 1.2, .4, this.Eye[t].transform.position.clone(), 2, 1.75)) return void this.EyeHitEvent();
                for (let t = 0; t < this.Mouth.length; t++) this.NormalBoxCheck_2D(_.model.transform.position.clone(), .4, .4, this.Mouth[t].transform.position.clone(), .5, .5) && this.MouthHitEvent();
                let a = !1;
                for (let t = 0; t < this.Plate.length; t++) this.NormalBoxCheck_2D(_.model.transform.position.clone(), 1.2, .4, this.Plate[t].transform.position.clone(), 1.3, 1.9) && (a = !0);
                a ? this.PlateHitEvent() : H.instance.PlateEffectSwitch(!1);
            }
        }
        EyeHitEvent() {
            console.log("碰到眼墙了"), O.instance.gameFailEnd(), this.enable = !1,
                window.WebAudioEngine.stopSound("res/Sounds/Bgm.mp3");
            _.soundController.play(h.Eyes),
                _.camShake.vibrateShort(_.mainCam), w.vibrateLong();
        }
        PlateHitEvent() {
            console.log("碰到钉子了"), H.instance.ReduceChaeta(), w.vibrateShort(), H.instance.PlateEffectSwitch(!0);
        }
        MouthHitEvent() {
            console.log("碰到嘴巴了"), w.vibrateShort(), H.instance.ReduceChaeta();
        }
        NormalBoxCheck_2D(t, e, a, n, i, s) {
            let o = Math.abs(n.x - t.x), r = Math.abs(n.z - t.z);
            return o < e + i && r < a + s;
        }
    }
    class U {
        constructor() {
            this.fxs = [], this.init();
        }
        init() { }
        cleanFxs() {
            for (let t = 0; t < this.fxs.length; t++) this.fxs[t].destroy();
        }
        BornFx(t, e) {
            let a = e.clone();
            return _.scene3D.addChild(a), a.transform.position = t, this.fxs.push(a), a;
        }
        BornFxOnly(t, e) {
            let a = e.clone();
            return _.scene3D.addChild(a), a.transform.position = t, a;
        }
    }
    !function (t) {
        t[t.idle = 0] = "idle", t[t.go = 1] = "go", t[t.in = 2] = "in", t[t.out = 3] = "out",
            t[t.hit = 4] = "hit";
    }(f || (f = {}));
    class G {
        constructor(t, e, a) {
            this.state = f.idle, this.isVibrateCdDelay = !1, this.vibrateCdTime = 100, this.colliderActive = !0,
                this.count = 0, this.endCount = 30, this.posZ = -.1, this.inTargetLocalSca = new Laya.Vector3(.3, .6, .3),
                this.inNowCount = 0, this.inTargetCount = 30, this.isEnd = !1, this.endNowcount = 0,
                this.endFinalCount = 30, this.hitNowCount = 0, this.hitFinalCount = 120, this.owner = t,
                this.id = e, this.roadId = a;
        }
        vibrateShort() {
            this.isVibrateCdDelay || (this.isVibrateCdDelay = !0, w.vibrateShort(), Laya.timer.once(this.vibrateCdTime, this, () => {
                this.isVibrateCdDelay = !1;
            }));
        }
        hitDo() {
            this.colliderActive = !1;
            let t = this.owner, e = t.transform.position.clone();
            _.player.addChild(t), t.transform.position = e, e.x += .2 * Math.random() - .1,
                e.y += .5 + .3 * Math.random(), e.z += .2 * Math.random() - .1, this.pos1 = e;
            let a = new Laya.Vector3(360 * Math.random() - 180, 360 * Math.random() - 180, 360 * Math.random() - 180);
            this.rot1 = a, this.offset2 = new Laya.Vector3(.1 * Math.random() - .05, 1 + .3 * Math.random(), .1 * Math.random() - .05),
                this.rotOffset2 = new Laya.Vector3(30 * Math.random() - 15, 30 * Math.random() - 15, 30 * Math.random() - 15),
                this.state = f.go, H.instance.AddCheataEffect();
        }
        goUpdate() {
            let t = _.grapPoint.transform.position, e = _.grapPoint.transform.rotationEuler.clone(), a = new Laya.Vector3(.6, .9, .6);
            t = w.Vector3Add(this.offset2, t);
            let n = this.owner, i = n.transform.position.clone(), s = n.transform.rotationEuler.clone(), o = n.transform.localScale.clone();
            if (e = w.Vector3Add(this.rotOffset2, s), this.count == this.endCount && _.model.addChild(this.owner),
                this.count >= this.endCount) {
                if (_.collider.NormalBoxCheck_2D(t, .2, .2, i, 0, 0)) {
                    H.instance.AddChaeta(n), _.chaetaController.addMyComp(this.id), _.grapPoint.parent.addChild(n),
                        n.transform.position = i;
                    let t = Math.random(), e = .18, a = .2 * Math.random() - .1, s = 90 * Math.random() - 45, o = 90 * Math.random() - 45, r = 90;
                    t > .5 ? (e = .01 * Math.random() - .005 + .18, r = 80 + 20 * Math.random()) : (e = .01 * Math.random() - .005 - .18,
                        r = -80 - 20 * Math.random());
                    let h = H.instance.stageCollectChaeta % 500;
                    return this.inTargetLocalPos = new Laya.Vector3(e, h / 500 * 2.8 + .01, a), this.inTargetLocalRot = new Laya.Vector3(s, o, r),
                        void (this.state = f.in);
                }
                let r = new Laya.Vector3();
                Laya.Vector3.lerp(i, t, .2, r), n.transform.position = r;
                let h = new Laya.Vector3();
                Laya.Vector3.lerp(s, e, .1, h), n.transform.rotationEuler = h;
                let l = new Laya.Vector3();
                Laya.Vector3.lerp(o, a, .1, l), n.transform.localScale = l;
            } else {
                let t = new Laya.Vector3();
                Laya.Vector3.lerp(i, this.pos1, .2, t), n.transform.position = t;
                let e = new Laya.Vector3();
                Laya.Vector3.lerp(s, this.rot1, .1, e), n.transform.rotationEuler = e;
            }
            this.count++;
        }
        inUpdate() {
            let t = this.inTargetLocalPos, e = this.inTargetLocalRot, a = this.inTargetLocalSca, n = this.owner, i = n.transform.localPosition.clone(), s = n.transform.localRotationEuler.clone(), o = n.transform.localScale.clone(), r = new Laya.Vector3();
            Laya.Vector3.lerp(i, t, .1, r), n.transform.localPosition = r;
            let h = new Laya.Vector3();
            Laya.Vector3.lerp(s, e, .1, h), n.transform.localRotationEuler = h;
            let l = new Laya.Vector3();
            Laya.Vector3.lerp(o, a, .1, l), n.transform.localScale = l, this.inNowCount >= this.inTargetCount ? this.state = f.idle : this.inNowCount++;
        }
        outAnim(t) {
            this.isEnd || (this.outTargetPos = t, this.outTargetRot = new Laya.Vector3(360 * Math.random(), 360 * Math.random(), 360 * Math.random()),
                this.outTargetSca = new Laya.Vector3(1, 1.5, 1), this.state = f.out, this.isEnd = !0);
        }
        outUpdate() {
            let t = this.outTargetPos, e = this.outTargetRot, a = this.outTargetSca, n = this.owner, i = n.transform.position.clone(), s = n.transform.localRotationEuler.clone(), o = n.transform.localScale.clone();
            Laya.Vector3.lerp(i, t, .07, i), n.transform.position = i, Laya.Vector3.lerp(s, e, .01, s),
                n.transform.localRotationEuler = s, Laya.Vector3.lerp(o, a, .1, o), n.transform.localScale = o,
                this.endNowcount++ >= this.endFinalCount && (this.state = f.idle, n.active = !1);
        }
        hit(t) {
            Laya.timer.clear(this, this.inUpdate);
            let e = this.owner;
            e.transform.position = t, _.scene3D.addChild(e), this.state = f.hit;
        }
        hitUpdate() {
            let t = this.owner, e = t.transform.position.clone();
            t.transform.localScale = new Laya.Vector3(1, 1, 1), this.hitNowCount >= 10 && (e.y -= .05),
                t.transform.position = e, this.hitNowCount >= this.hitFinalCount ? (this.state = f.idle,
                    t.active = !1) : this.hitNowCount++;
        }
    }
    class X {
        constructor() {
            this.comp = [], this.mycomp = [];
        }
        init() {
            this.comp = [], this.mycomp = [];
        }
        update() {
            for (let t = 0; t < _.collider.Chaeta.length; t++) {
                let e = this.comp[t];
                switch (e.state) {
                    case f.idle:
                        break;

                    case f.go:
                        0, e.goUpdate();
                        break;

                    case f.hit:
                        0, e.hitUpdate();
                        break;

                    case f.in:
                        0, e.inUpdate();
                        break;

                    case f.out:
                        0, e.outUpdate();
                }
            }
        }
        addComp(t, e) {
            this.comp.push(new G(t, this.comp.length, e));
        }
        addMyComp(t) {
            this.mycomp.push(t);
        }
    }
    class F {
        vibrateShort(t) {
            w.objectShake(t, .1, .25);
        }
    }
    class J extends t {
        constructor() {
            super(...arguments), this.SceneDone = !1, this.PrefabsDone = !1, this.isLoading = !0;
        }
        init() {
            platform.getInstance().createLogo(),
                window.yad.bottom = 0,
                window.yad.left = 0,
                window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });

            platform.getInstance().showSplash();
            platform.getInstance().yadstartup("Perfect-Wax-3d", () => {
                if (this.initLoading(), this.updateLoading(0), Laya.Browser.onWeiXin) {
                    let t = () => {
                        w.loadSubpackagesSync(["res"], this, (e, a) => {
                            a ? e.init1() : t();
                        });
                    };
                    t();
                } else this.init1();

            })

        }
        init1() {
            this.updateLoading(.25);
            let t = _.isPure, a = e.GetPlayerData();
            e.CheckPlayerData(a), a = e.GetPlayerData(), console.log("玩家存档信息：", a), S.ShareInit(),
                t ? this.initGame() : (n.Instance.setLevel(e.GetPlayerData(), "grade"), u.instance.initJJ(() => {
                    this.initGame();
                }, r.PORTRAIT));
        }
        initGame() {
            this.updateLoading(.5), console.log("加载声音"), _.soundController = new p(), console.log("进入Loading界面"),
                console.log("开始加载场景");
            this.PrefabsDone = !0, Laya.Scene3D.load("res/LayaScene_main/Conventional/main.ls", Laya.Handler.create(this, this.onComplete)),
                w.initEvent();
        }
        StartGame() {
            if (this.SceneDone && this.PrefabsDone) {
                this.updateLoading(1);
                platform.getInstance().hideSplash();
                let t = () => {
                    console.log("打开游戏场景"), Laya.stage.addChild(_.scene3D), console.log("初始化场景信息"), this.SceneInit(),
                        platform.getInstance().showBanner();
                    platform.getInstance().hideSplash();
                    E.Init(), _.isPure ? (Laya.Scene.destroy(c.LOADING), w.loadScene(c.STARTMENU, 0)) : S.FirstIn(() => {
                        Laya.Scene.destroy(c.LOADING), w.loadScene(c.STARTMENU, 0);
                    });
                };
                setTimeout(() => {
                    t();
                }, 500);
            }
        }
        SceneInit() {
            _.player = _.scene3D.getChildByName("Player"), _.model = _.player.getChildByName("Model"),
                _.mainCam = _.scene3D.getChildByName("Main Camera"), _.prefabs = _.scene3D.getChildByName("Prefabs"),
                _.grapPoint = w.findNodeByName(_.model, "GrapPoint"), _.endPoint = w.findNodeByName(_.model, "EndPoint"),
                _.collider = new k(), _.fxController = new U(), _.chaetaController = new X(), _.camShake = new F(),
                _.box3D = _.scene3D.getChildByName("Box3D"), _.camNormalPoint = _.player.getChildByName("CamNormalPoint"),
                _.camEndPoint = _.player.getChildByName("CamEndPoint"), _.camBoxPoint = _.box3D.getChildByName("CamBoxPoint"),
                w.setTransRotEulerX(_.camNormalPoint.transform, -15), w.setTransRotEulerY(_.camNormalPoint.transform, 180),
                w.setTransRotEulerX(_.camEndPoint.transform, -10), w.setTransRotEulerY(_.camEndPoint.transform, 180),
                w.setTransRotEulerX(_.camBoxPoint.transform, -10), w.setTransRotEulerY(_.camBoxPoint.transform, 180),
                _.camPoint = _.camNormalPoint;
            let t = _.scene3D, e = _.model.getChildByName("PolePoint"), a = _.player.getChildByName("Shadow").getChildByName("PolePoint");
            _.poleStartPoint = e.transform.localRotationEuler.clone(), _.poleShadowStartPoint = a.transform.localRotationEuler.clone(),
                _.mainCam.enableHDR = !1;
            let n = t.getChildByName("Directional Light");
            n.shadowMode = Laya.ShadowMode.Hard, n.shadowDistance = 100, n.shadowResolution = 512,
                n.shadowStrength = .3, n.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades;
        }
        initLoading() { }
        updateLoading(t) {
            this.bar.value = t;
        }
        exitLoading() {
            Laya.Tween.clearTween(this.tween), this.isLoading = !1;
        }
        onComplete(t) {
            this.updateLoading(.75), _.scene3D = t, _.prefabs = _.scene3D.getChildByName("Prefabs"),
                this.SceneDone = !0, console.log("场景加载完成"), this.StartGame();
        }
        onPrefabsComplete(t) {
            this.updateLoading(.75), _.fxs = t.getChildByName("Fx"), this.PrefabsDone = !0,
                console.log("额外道具加载完成"), this.StartGame();
        }
    }
    class z extends t {
        init() {
            _.nowScene = 1, this.zOrder = 1, _.fxController.cleanFxs(), this.ButtonInit(), this.ValueInit(),
                this.ShakeMoreGame(), S.StartMenuIn(this.scene, null, this.moreGameButton, null, null);
            this.soundBtn.on(Laya.Event.CLICK, this, this.SoundBtnOn);
            this.InitSoundBtnUI()
        }
        InitSoundBtnUI() {
            this.soundBtnOn.visible = !window.WebAudioEngine.pause;
            this.soundBtnOff.visible = window.WebAudioEngine.pause;
        }
        SoundBtnOn() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            Laya.LocalStorage.setItem("perfect-wax-3d-musicState", window.WebAudioEngine.pause)
            this.InitSoundBtnUI();
        }
        ValueInit() {
            this.gradeValue.value = _.readGrade().toString();
        }
        ButtonInit() {
            w.buttonInit(this.startButton, this, this.StartGame), w.buttonInit(this.moreGameButton, this, this.MoreGame);
        }
        StartGame() {
            platform.getInstance().showInterstitial(() => {
                window.WebAudioEngine.playSound("res/Sounds/Bgm.mp3", 1)
                this.ShakeMoreGameEnd(), _.isPure ? (_.collider.enable = !0, Laya.Scene.destroy(c.STARTMENU),
                    w.loadScene(c.STAGEUI)) : (Laya.Scene.destroy(c.STARTMENU), S.StartMenuOut(() => {
                        _.collider.enable = !0, w.loadScene(c.STAGEUI);
                    }));
            })
        }
        MoreGame() {
            w.loadScene(o.SCENE_FULLGAMEUI, 200);
        }
        ShakeMoreGame() {
            this.cb1 = (() => {
                this.moreGameButton.rotation = 0, this.moreGameTween = Laya.Tween.to(this.moreGameButton, {
                    rotation: -10
                }, 250), this.moreGameTimer = setTimeout(() => {
                    this.cb2();
                }, 250);
            }), this.cb2 = (() => {
                this.moreGameButton.rotation = -10, this.moreGameTween = Laya.Tween.to(this.moreGameButton, {
                    rotation: 10
                }, 500), this.moreGameTimer = setTimeout(() => {
                    this.cb3();
                }, 500);
            }), this.cb3 = (() => {
                this.moreGameButton.rotation = 10, this.moreGameTween = Laya.Tween.to(this.moreGameButton, {
                    rotation: 0
                }, 250), this.moreGameTimer = setTimeout(() => {
                    this.cb4();
                }, 250);
            }), this.cb4 = (() => {
                this.moreGameButton.rotation = 0, this.moreGameTimer = setTimeout(() => {
                    this.cb1();
                }, 1e3);
            }), this.cb1();
        }
        ShakeMoreGameEnd() {
            this.moreGameTween.clear(), clearTimeout(this.moreGameTimer);
        }
    }
    class W {
        constructor() { }
        static init() {
            var t = Laya.ClassUtils.regClass;
            t("scripts/EndMenu.ts", B), t("JJExport/View/Box1.ts", A), t("JJExport/View/Box2.ts", D),
                t("JJExport/View/Box3.ts", M), t("JJExport/View/Finish2ExportUI.ts", P), t("JJExport/View/FinishExportUI.ts", N),
                t("JJExport/View/FullExportUI.ts", T), t("JJExport/View/RecommendExportUI.ts", R),
                t("scripts/Loading.ts", J), t("scripts/Stage.ts", H), t("scripts/mods/TouchScan.ts", L),
                t("scripts/StageUpdate.ts", O), t("scripts/StartMenu.ts", z);
        }
    }
    W.width = 750, W.height = 1334, W.scaleMode = "showall", W.screenMode = "none",
        W.alignV = "middle", W.alignH = "center", W.startScene = "Loading.scene", W.sceneRoot = "",
        W.debug = !1, W.stat = !1, W.physicsDebug = !1, W.exportSceneToJson = !0, W.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(W.width, W.height) : Laya.init(W.width, W.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = W.scaleMode, Laya.stage.screenMode = W.screenMode, Laya.stage.alignV = W.alignV,
                Laya.stage.alignH = W.alignH, Laya.URL.exportSceneToJson = W.exportSceneToJson,
                (W.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                W.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), W.stat && Laya.Stat.show(),
                Laya.alertGlobalError(!0),

                //     platform.getInstance().createlogo(),
                //     window.yad.top = 0;
                // window.yad.right = 0;
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.Scene.open(c.LOADING);
        }
    }();
}();