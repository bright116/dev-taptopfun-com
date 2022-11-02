window.zs = window.zs || {}, window.zs.laya = window.zs.laya || {}, function(e, t) {
    "use strict";
    class s extends t.Script {
        constructor() {
            super(), this.loadingVal = null, this.loadingBar = null, this.loadingMask = null;
        }
        onAwake() {
            this.loadingVal = this.owner.getChildByName("loadingVal"), this.loadingMask = this.owner.getChildByName("loadingMask"), 
            this.loadingBar = this.loadingMask.getChildByName("loadingBar");
        }
        onEnable() {
            this.onLoadingUpdate(.01), t.stage.on(s.EVENT_UI_PROGRESS_UPDATE, this, this.onLoadingUpdate);
        }
        onDisable() {
            t.stage.off(s.EVENT_UI_PROGRESS_UPDATE, this, this.onLoadingUpdate);
        }
        onLoadingUpdate(e) {
            this.loadingBar && this.loadingMask && (this.loadingMask.width = this.loadingBar.width * e), 
            this.loadingVal && (this.loadingVal.text = Math.floor(100 * e) + "%");
        }
    }
    s.EVENT_UI_PROGRESS_UPDATE = "UI_PROGRESS_UPDATE", t.ILaya.regClass(s), t.ClassUtils.regClass("zs.laya.ui.Loading", s), 
    t.ClassUtils.regClass("zs.laya.ui.LoadingBar", s), t.ClassUtils.regClass("Zhise.LoadingBar", s);
    class i extends t.Script {
        constructor() {
            super(), this.callback = null, this.confirmBtn = null;
        }
        initMsgBox(e) {
            this.callback = e;
        }
        onAwake() {
            this.confirmBtn = this.owner.getChildByName("confirmBtn");
        }
        onEnable() {
            this.confirmBtn.on(t.Event.CLICK, this, this.onClickConfirm);
        }
        onDisable() {
            this.confirmBtn.off(t.Event.CLICK, this, this.onClickConfirm);
        }
        onClickConfirm() {
            this.callback && (this.callback.run(), this.callback = null);
        }
    }
    t.ILaya.regClass(i), t.ClassUtils.regClass("zs.laya.ui.MsgBox", i), t.ClassUtils.regClass("zs.laya.ui.MsgBoxComp", i), 
    t.ClassUtils.regClass("Zhise.MsgBoxComp", i);
    class a extends t.Script {
        constructor() {
            super();
        }
        onClick() {
            var e = zs.laya.game.AppMain;
            t.SoundManager.playSound(e.appConfig.soundClick), zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.gameStartEvt(e.playerInfo.user_id)), 
            t.stage.event(zs.laya.game.EventId.GAME_PREPARE);
        }
    }
    t.ILaya.regClass(a), t.ClassUtils.regClass("zs.laya.ui.StartBtn", a), t.ClassUtils.regClass("Zhise.StartBtn", a);
    class o extends t.Script {
        constructor() {
            super();
        }
        onClick() {
            t.SoundManager.playSound(zs.laya.game.AppMain.appConfig.soundClick), zs.laya.game.UIService.showStore();
        }
    }
    t.ILaya.regClass(o), t.ClassUtils.regClass("zs.laya.ui.StoreBtn", o), t.ClassUtils.regClass("Zhise.StoreBtn", o);
    class n extends t.Script {
        constructor() {
            super(), this.statusClip = null;
        }
        onAwake() {
            this.statusClip = this.owner.getChildByName("replayBtn");
        }
        onEnable() {
            this.owner.mouseEnabled = !0, this.freshBtnState();
        }
        onClick() {
            t.SoundManager.playSound(zs.laya.game.AppMain.appConfig.soundClick), this.owner.mouseEnabled = !1, 
            0 == this.statusClip.index ? zs.laya.sdk.SdkService.playVideo(t.Handler.create(this, function() {
                console.log("toRelive"), zs.laya.platform.ADConfig.updateVideoRevive(), this.relive(), 
                console.log("toRelive2");
            }), t.Handler.create(this, function() {
                this.owner.mouseEnabled = !0, this.freshBtnState();
            }), t.Handler.create(this, function() {
                this.freshBtnState(), zs.laya.game.UIService.showToast("今日视频观看次数已用尽");
            })) : 1 == this.statusClip.index ? (t.stage.once(zs.laya.sdk.DeviceService.EVENT_ON_SHOW, this, function(e) {
                Date.now() - e > 3e3 ? (zs.laya.platform.ADConfig.updateShareRevive(), t.stage.event(zs.laya.game.EventId.GAME_RELIVE), 
                this.relive()) : (this.freshBtnState(), zs.laya.game.UIService.showToast("分享失败"));
            }, [ Date.now() ]), zs.laya.sdk.SdkService.openShare(zs.laya.platform.ADConfig.zs_share_title, zs.laya.platform.ADConfig.zs_share_image)) : 2 == this.statusClip.index ? this.relive() : this.onContinue();
        }
        freshBtnState() {
            this.owner.mouseEnabled = !0;
            var e = zs.laya.game.AppMain.appConfig.useWebAdApi;
            zs.laya.game.AppMain.ReliveChance <= 0 ? this.statusClip.index = 3 : e && zs.laya.platform.ADConfig.enableClickRevive() ? this.statusClip.index = 2 : e && zs.laya.platform.ADConfig.enableVideoRevive() && zs.laya.sdk.SdkService.isVideoEnable() ? this.statusClip.index = 0 : e && zs.laya.platform.ADConfig.enableShareRevive() ? this.statusClip.index = 1 : this.statusClip.index = 3;
        }
        relive() {
            t.stage.timerOnce(100, this, function() {
                t.stage.event(zs.laya.game.EventId.GAME_RELIVE), this.onRelive();
            });
        }
        onContinue() {
            t.stage.event(zs.laya.game.EventId.GAME_OVER);
        }
        onRelive() {}
    }
    t.ILaya.regClass(n), t.ClassUtils.regClass("zs.laya.ui.ReplayBtn", n), t.ClassUtils.regClass("Zhise.ReplayBtn", n);
    class l extends t.Script {
        constructor() {
            super();
        }
        onEnable() {
            this.owner.mouseEnabled = !0;
        }
        onClick() {
            t.SoundManager.playSound(zs.laya.game.AppMain.appConfig.soundClick), this.owner.mouseEnabled = !1, 
            t.stage.event(zs.laya.game.EventId.GAME_OVER);
        }
    }
    t.ILaya.regClass(l), t.ClassUtils.regClass("zs.laya.ui.AwardBtn", l), t.ClassUtils.regClass("Zhise.AwardBtn", l);
    class h extends l {
        constructor() {
            super();
        }
        onClick() {
            t.SoundManager.playSound(zs.laya.game.AppMain.appConfig.soundClick), this.owner.mouseEnabled = !1, 
            zs.laya.sdk.SdkService.playVideo(t.Handler.create(this, function() {
                this.onExtraAward(), t.stage.event(zs.laya.game.EventId.GAME_OVER);
            }), t.Handler.create(this, function() {
                this.owner.mouseEnabled = !0;
            }), t.Handler.create(this, function() {
                this.owner.mouseEnabled = !0, zs.laya.game.UIService.showToast("今日视频观看次数已用尽");
            }));
        }
        onExtraAward() {}
    }
    t.ILaya.regClass(h), t.ClassUtils.regClass("zs.laya.ui.ExtraAwardBtn", h), t.ClassUtils.regClass("Zhise.ExtraAwardBtn", h);
    class r extends l {
        constructor() {
            super();
        }
        onClick() {
            zs.laya.game.AppMain.autoStartNext = !1, super.onClick();
        }
    }
    t.ILaya.regClass(r), t.ClassUtils.regClass("zs.laya.ui.Award2HomeBtn", r), t.ClassUtils.regClass("Zhise.Award2HomeBtn", r);
    class d extends l {
        constructor() {
            super();
        }
        onClick() {
            zs.laya.game.AppMain.autoStartNext = !0, super.onClick();
        }
    }
    t.ILaya.regClass(d), t.ClassUtils.regClass("zs.laya.ui.Award2NextBtn", d), t.ClassUtils.regClass("Zhise.Award2NextBtn", d);
    class g extends zs.laya.base.ZhiSeView {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.owner.getChildByName("middleUI").getChildByName("loadingBar").addComponent(s);
        }
    }
    t.ILaya.regClass(g), t.ClassUtils.regClass("zs.laya.ui.LoadingView", g), t.ClassUtils.regClass("Zhise.LoadingView", g);
    class c extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.storeBtn = null, this.startBtn = null;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("topUI");
            e && (this.storeBtn = e.getChildByName("storeBtn"), this.startBtn = e.getChildByName("startBtn"));
            var t = this.owner.getChildByName("middleUI");
            t && (this.storeBtn = this.storeBtn || t.getChildByName("storeBtn"), this.startBtn = this.startBtn || t.getChildByName("startBtn"));
            var s = this.owner.getChildByName("bottomUI");
            s && (this.storeBtn = this.storeBtn || s.getChildByName("storeBtn"), this.startBtn = this.startBtn || s.getChildByName("startBtn"));
            var i = this.owner.getChildByName("leftUI");
            i && (this.storeBtn = this.storeBtn || i.getChildByName("storeBtn"));
            var n = this.owner.getChildByName("rightUI");
            n && (this.storeBtn = this.storeBtn || n.getChildByName("storeBtn")), this.storeBtn && this.storeBtn.addComponent(o), 
            this.startBtn && this.startBtn.addComponent(a);
        }
    }
    t.ILaya.regClass(c), t.ClassUtils.regClass("zs.laya.ui.HomeView", c), t.ClassUtils.regClass("Zhise.HomeView", c);
    class y extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.replayBox = null, this.jumpBtn = null;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("topUI");
            e && (this.replayBox = e.getChildByName("replayBox"), this.jumpBtn = e.getChildByName("jumpByShareBtn"));
            var t = this.owner.getChildByName("middleUI");
            t && (this.replayBox = this.replayBox || t.getChildByName("replayBox"), this.jumpBtn = this.jumpBtn || t.getChildByName("jumpByShareBtn"));
            var s = this.owner.getChildByName("bottomUI");
            s && (this.replayBox = this.replayBox || s.getChildByName("replayBox"), this.jumpBtn = this.jumpBtn || s.getChildByName("jumpByShareBtn")), 
            this.replayBox && this.replayBox.addComponent(n), this.jumpBtn && this.jumpBtn.addComponent(l);
        }
    }
    t.ILaya.regClass(y), t.ClassUtils.regClass("zs.laya.ui.ReliveView", y), t.ClassUtils.regClass("Zhise.ReliveView", y);
    class B extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.nextBtn = null, this.homeBtn = null;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("topUI");
            e && (this.homeBtn = e.getChildByName("homeBtn"), this.nextBtn = e.getChildByName("nextBtn"));
            var t = this.owner.getChildByName("middleUI");
            t && (this.homeBtn = this.homeBtn || t.getChildByName("homeBtn"), this.nextBtn = this.nextBtn || t.getChildByName("nextBtn"));
            var s = this.owner.getChildByName("bottomUI");
            s && (this.homeBtn = this.homeBtn || s.getChildByName("homeBtn"), this.nextBtn = this.nextBtn || s.getChildByName("nextBtn")), 
            this.homeBtn && this.homeBtn.addComponent(r), this.nextBtn && this.nextBtn.addComponent(d);
        }
    }
    t.ILaya.regClass(B), t.ClassUtils.regClass("zs.laya.ui.WinView", B), t.ClassUtils.regClass("Zhise.WinView", B);
    class p extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.callback = null, this.content = null, this.confirmBtn = null;
        }
        initView(e) {
            super.initView(e), this.content.text = e.content, this.callback = e.callback;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("middleUI");
            this.content = e.getChildByName("content"), this.confirmBtn = e.getChildByName("confirmBtn"), 
            this.confirmBtn.on(t.Event.CLICK, this, this.onClickConfirm);
        }
        onDestroy() {
            this.confirmBtn.off(t.Event.CLICK, this, this.onClickConfirm);
        }
        onClickConfirm() {
            this.callback && (this.callback.run(), this.callback = null), this.owner.close(), 
            t.SoundManager.playSound(zs.laya.game.AppMain.appConfig.soundClick);
        }
    }
    t.ILaya.regClass(p), t.ClassUtils.regClass("zs.laya.ui.MsgBoxView", p), t.ClassUtils.regClass("Zhise.MsgBoxView", p);
    class C {
        constructor() {}
    }
    C.LOCK = 0, C.UNLOCK = 1, C.USE = 2, t.ILaya.regClass(C), t.ClassUtils.regClass("zs.laya.ui.StoreItemState", C), 
    t.ClassUtils.regClass("Zhise.StoreItemState", C);
    class m extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.goldNumLabel = null, this.closeBtn = null, this.typeTab = null, this.pageList = null, 
            this.goodsList = null, this.prePageBtn = null, this.nextPageBtn = null, this.goldUnlockBtn = null, 
            this.videoUnlockBtn = null, this.buyOrUseCd = !1, this.selectItemType = 0, this.selectItemIdx = -1, 
            this.storeItemsDic = null;
        }
        onEnable() {
            super.onEnable(), t.stage.on(zs.laya.game.EventId.STORECFG_UPDATE, this, this.onUpdateStorePage);
        }
        onDisable() {
            super.onDisable(), t.stage.off(zs.laya.game.EventId.STORECFG_UPDATE, this, this.onUpdateStorePage), 
            this.closeBtn.off(t.Event.CLICK, this, this.closeStore), this.goldUnlockBtn && this.goldUnlockBtn.off(t.Event.CLICK, this, this.unlockItemByGold), 
            this.videoUnlockBtn && this.videoUnlockBtn.off(t.Event.CLICK, this, this.unlockItemByVideo), 
            this.prePageBtn && this.prePageBtn.off(t.Event.CLICK, this, this.prePage), this.nextPageBtn && this.nextPageBtn.off(t.Event.CLICK, this, this.nextPage);
        }
        onStart() {
            super.onStart();
            var e = this.owner.getChildByName("topUI");
            this.goldNumLabel = e.getChildByName("goldNum"), this.closeBtn = e.getChildByName("closeBtn");
            var s = this.owner.getChildByName("middleUI");
            this.closeBtn || (this.closeBtn = s.getChildByName("closeBtn")), this.prePageBtn = s.getChildByName("prePageBtn"), 
            this.nextPageBtn = s.getChildByName("nextPageBtn"), this.typeTab = s.getChildByName("typeTab"), 
            this.pageList = s.getChildByName("pageList"), this.goodsList = s.getChildByName("goodsList"), 
            this.goldUnlockBtn = s.getChildByName("goldUnlockBtn"), this.videoUnlockBtn = s.getChildByName("videoUnlockBtn"), 
            this.closeBtn.on(t.Event.CLICK, this, this.closeStore), this.prePageBtn && this.prePageBtn.on(t.Event.CLICK, this, this.prePage), 
            this.nextPageBtn && this.nextPageBtn.on(t.Event.CLICK, this, this.nextPage), this.goldNumLabel.text = zs.laya.game.AppMain.playerInfo.gold.toString(), 
            this.typeTab.selectHandler = t.Handler.create(this, this.onSwitchType, null, !1), 
            this.typeTab.selectedIndex = 0, this.goodsList.renderHandler = t.Handler.create(this, this.onRenderItem, null, !1), 
            this.goodsList.selectHandler = t.Handler.create(this, this.onSelectItem, null, !1), 
            this.goodsList.hScrollBarSkin = "", this.goodsList.scrollBar.changeHandler = t.Handler.create(this, this.onScrollChanged, null, !1), 
            this.pageList && (this.pageList.renderHandler = t.Handler.create(this, this.onRenderPageTag, null, !1)), 
            this.goldUnlockBtn && (this.goldUnlockBtn.on(t.Event.CLICK, this, this.unlockItemByGold), 
            this.goldUnlockBtn.visible = !1), this.videoUnlockBtn && (this.videoUnlockBtn.on(t.Event.CLICK, this, this.unlockItemByVideo), 
            this.videoUnlockBtn.visible = !1), this.onUpdateStorePage();
        }
        onUpdateStorePage() {
            zs.laya.game.AppMain.storeItemsDic && (this.storeItemsDic = zs.laya.game.AppMain.storeItemsDic, 
            this.onSwitchType(this.typeTab.selectedIndex));
        }
        onSwitchType(e) {
            if (-1 != e) {
                var s = this.storeItemsDic[e], i = this.goodsList.repeatY * this.goodsList.repeatX;
                if (this.totalPage = Math.ceil(s.length / i), this.nextPageBtn) for (var a = i - s.length % i, o = 0; a < i && o < a; o++) s.push(null);
                if (this.goodsList.array = s, this.goodsList.selectedIndex = -1, this.goodsList.scrollTo(0), 
                this.goodsList.page = 0, this.totalPage > 1 ? this.nextPageBtn && (this.nextPageBtn.visible = !0) : this.nextPageBtn && (this.nextPageBtn.visible = !1), 
                this.prePageBtn && (this.prePageBtn.visible = !1), this.pageList) {
                    var n = [];
                    for (o = 0; o < this.totalPage; o++) n.push(o);
                    this.pageList.array = n, this.pageList.selectedIndex = this.goodsList.page;
                }
                t.stage.event(zs.laya.game.EventId.STORE_SWITCH_TAB, e);
            }
        }
        prePage() {
            if (this.goodsList.page > 0) {
                var e = this.goodsList.page - 1;
                this.prePageBtn && (this.prePageBtn.visible = e > 0), this.nextPageBtn && (this.nextPageBtn.visible = e < this.totalPage - 1), 
                this.goodsList.scrollTo(e * this.goodsList.repeatX * this.goodsList.repeatY), this.goodsList.page = e, 
                this.pageList && (this.pageList.selectedIndex = this.goodsList.page);
            }
        }
        nextPage() {
            if (this.goodsList.page < this.totalPage - 1) {
                var e = this.goodsList.page + 1;
                this.prePageBtn && (this.prePageBtn.visible = e > 0), this.nextPageBtn && (this.nextPageBtn.visible = e < this.totalPage - 1), 
                this.goodsList.scrollTo(e * this.goodsList.repeatX * this.goodsList.repeatY), this.goodsList.page = e, 
                this.pageList && (this.pageList.selectedIndex = this.goodsList.page);
            }
        }
        unlockItemByGold() {
            var e = this.goodsList.array[this.goodsList.selectedIndex];
            if (zs.laya.game.AppMain.playerInfo.goods_ids) if (this.goldUnlockBtn.gray) zs.laya.game.UIService.showToast("当前金币不足！"); else {
                var s = zs.laya.game.AppMain.playerInfo.goods_id;
                if (s) for (var i = s[e.goods_type], a = 0; a < this.goodsList.array.length; a++) if (this.goodsList.array[a] && this.goodsList.array[a].goods_id == i) {
                    var o = this.goodsList.array[a];
                    o.status = C.UNLOCK, o.time = Date.now(), console.log(i + "  将原使用的道具设置为解锁：" + o.goods_id), 
                    this.goodsList.setItem(a, o);
                    break;
                }
                e.status = C.USE, this.goodsList.setItem(this.goodsList.selectedIndex, e), zs.laya.game.WebService.requestUnlockGoodsByGold({
                    goods_type: e.goods_type,
                    goods_id: e.goods_id,
                    gold: e.gold
                }), this.goldUnlockBtn && (this.goldUnlockBtn.visible = !1), t.stage.event(zs.laya.game.EventId.STORE_ITEM_UNLOCKED, [ e ]), 
                t.stage.event(zs.laya.game.EventId.STORE_USE_ITEM, [ e ]);
            } else console.log("************** error playerInfo no have goods_ids");
        }
        unlockItemByVideo() {
            if (!this.buyOrUseCd && !this.videoUnlockBtn.gray) {
                this.buyOrUseCd = !0;
                var e = this.goodsList.array[this.goodsList.selectedIndex];
                zs.laya.sdk.SdkService.playVideo(t.Handler.create(this, function() {
                    if (this.buyOrUseCd = !1, e.video_num && (e.video_now += 1, this.goodsList.setItem(this.goodsList.selectedIndex, e)), 
                    zs.laya.game.AppMain.playerInfo.goods_ids) {
                        var s = !e.video_num || e.video_num && e.video_now >= e.video_num;
                        if (s) {
                            var i = zs.laya.game.AppMain.playerInfo.goods_id;
                            if (i) for (var a = i[e.goods_type], o = 0; o < this.goodsList.array.length; o++) if (this.goodsList.array[o] && this.goodsList.array[o].goods_id == a) {
                                var n = this.goodsList.array[o];
                                n.status = C.UNLOCK, n.time = Date.now(), console.log(a + "  将原使用的道具设置为解锁：" + n.goods_id), 
                                this.goodsList.setItem(o, n);
                                break;
                            }
                            e.status = C.USE, this.goodsList.setItem(this.goodsList.selectedIndex, e);
                        }
                        zs.laya.game.WebService.requestUnlockGoodsByVideo({
                            goods_type: e.goods_type,
                            goods_id: e.goods_id,
                            isUnlock: s
                        }), s && (t.stage.event(zs.laya.game.EventId.STORE_ITEM_UNLOCKED, [ e ]), t.stage.event(zs.laya.game.EventId.STORE_USE_ITEM, [ e ]), 
                        this.videoUnlockBtn && (this.videoUnlockBtn.visible = !1));
                    } else console.log("************** error playerInfo no have goods_ids");
                }), t.Handler.create(this, function() {
                    this.buyOrUseCd = !1;
                }), t.Handler.create(this, function() {
                    zs.laya.game.UIService.showToast("今日视频观看次数已用尽"), this.buyOrUseCd = !1;
                }));
            }
        }
        onSelectItem(e) {
            console.log("SelectItem:" + e);
            var s = this.goodsList.array[e];
            if (s) {
                if (this.selectItemIdx = e, this.selectItemType = s.goods_type, s.status == C.UNLOCK) {
                    var i = zs.laya.game.AppMain.playerInfo.goods_id;
                    if (i) for (var a = i[s.goods_type], o = 0; o < this.goodsList.array.length; o++) if (this.goodsList.array[o] && this.goodsList.array[o].goods_id == a) {
                        var n = this.goodsList.array[o];
                        n.status = C.UNLOCK, this.goodsList.setItem(o, n);
                        break;
                    }
                    s.status = C.USE, zs.laya.game.WebService.requestEquipItem({
                        goods_type: s.goods_type,
                        goods_id: s.goods_id
                    }), t.stage.event(zs.laya.game.EventId.STORE_USE_ITEM, [ s ]), this.goldUnlockBtn && (this.goldUnlockBtn.visible = !1), 
                    this.videoUnlockBtn && (this.videoUnlockBtn.visible = !1);
                } else s.status == C.LOCK ? 2 == s.buy_type ? (this.goldUnlockBtn && (this.goldUnlockBtn.visible = !0, 
                this.goldUnlockBtn.getChildByName("price").text = s.gold.toString(), this.goldUnlockBtn.gray = s.gold > zs.laya.game.AppMain.playerInfo.gold), 
                this.videoUnlockBtn && (this.videoUnlockBtn.visible = !1)) : 3 == s.buy_type && (this.goldUnlockBtn && (this.goldUnlockBtn.visible = !1), 
                this.videoUnlockBtn && (this.videoUnlockBtn.visible = !0, this.videoUnlockBtn.gray = !zs.laya.sdk.SdkService.isVideoEnable())) : (this.goldUnlockBtn && (this.goldUnlockBtn.visible = !1), 
                this.videoUnlockBtn && (this.videoUnlockBtn.visible = !1));
                this.goodsList.setItem(this.selectItemIdx, s);
            }
        }
        onRenderItem(e, t) {
            var s = this.goodsList.array[t];
            if (null == s) return e.getChildByName("bg").index = 0, e.getChildByName("jumpTag").visible = !1, 
            void (e.getChildByName("icon").visible = !1);
            s.status == C.LOCK ? e.getChildByName("bg").index = 1 : s.status == C.USE ? e.getChildByName("bg").index = 2 : e.getChildByName("bg").index = 0, 
            this.selectItemType == s.goods_type && this.selectItemIdx == t ? e.getChildByName("jumpTag").visible = !0 : e.getChildByName("jumpTag").visible = !1, 
            e.getChildByName("icon").visible = !0, e.getChildByName("icon").skin = zs.laya.game.AppMain.appConfig.storeCfg.typeMap[s.goods_type] + s.goods_icon + ".png";
        }
        onRenderPageTag(e, t) {
            e.index = t == this.pageList.selectedIndex ? 1 : 0;
        }
        onScrollChanged(e) {
            if (null != this.goodsList.array) {
                var t = Math.floor(this.goodsList.startIndex / this.goodsList.repeatX);
                this.prePageBtn && (this.prePageBtn.visible = t > 0), this.nextPageBtn && (this.nextPageBtn.visible = t < this.totalPage - 1), 
                this.pageList && (this.pageList.selectedIndex = t);
            }
        }
        closeStore() {
            this.owner.close();
        }
    }
    t.ILaya.regClass(m), t.ClassUtils.regClass("zs.laya.ui.StorePage", m), t.ClassUtils.regClass("Zhise.StorePage", m);
    class u extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.goodsIcon = null, this.tryoutBtn = null, this.passBtn = null, this.selectBg = null, 
            this.select = null, this.selectGoods = null, this.isSelectVideo = !0;
        }
        onAwake() {
            super.onAwake();
            var e = this.owner.getChildByName("middleUI");
            e && (this.goodsIcon = e.getChildByName("icon"), this.tryoutBtn = e.getChildByName("tryoutBtn"), 
            this.passBtn = e.getChildByName("passBtn"), this.selectBg = e.getChildByName("selectBg"), 
            this.select = e.getChildByName("select"));
            var t = this.owner.getChildByName("bottomUI");
            t && (this.tryoutBtn = this.tryoutBtn || t.getChildByName("tryoutBtn"), this.passBtn = this.passBtn || t.getChildByName("passBtn"), 
            this.selectBg = this.selectBg || t.getChildByName("selectBg"), this.select = this.select || t.getChildByName("select"));
        }
        onEnable() {
            super.onEnable(), this.tryoutBtn.mouseEnabled = !0, this.passBtn.mouseEnabled = !0, 
            this.passBtn && this.passBtn.on(t.Event.CLICK, this, this.onClose), this.tryoutBtn && this.tryoutBtn.on(t.Event.CLICK, this, this.onVideoHandler), 
            this.isSelectVideo = !0, zs.laya.platform.ADConfig.zs_more_reward_swich ? (this.selectBg && (this.selectBg.visible = !0), 
            this.select && (this.select.visible = this.isSelectVideo), this.selectBg && this.selectBg.on(t.Event.CLICK, this, this.onSelectHandler), 
            this.tryoutBtn.index = 1) : (this.selectBg && (this.selectBg.visible = !1), this.select && (this.select.visible = !1), 
            this.tryoutBtn.index = 0), t.stage.on(zs.laya.game.EventId.STORECFG_UPDATE, this, this.onRandomSelect), 
            this.onRandomSelect();
        }
        onDisable() {
            super.onDisable(), this.passBtn && this.passBtn.off(t.Event.CLICK, this, this.onClose), 
            this.tryoutBtn && this.tryoutBtn.off(t.Event.CLICK, this, this.onVideoHandler), 
            zs.laya.platform.ADConfig.zs_more_reward_swich && this.selectBg && this.selectBg.off(t.Event.CLICK, this, this.onSelectHandler), 
            t.stage.off(zs.laya.game.EventId.STORECFG_UPDATE, this, this.onRandomSelect);
        }
        onRandomSelect() {
            if (zs.laya.game.AppMain.storeItemsDic) {
                var e = zs.laya.game.AppMain.storeItemsDic;
                this.randomArr = [];
                var t = zs.laya.game.AppMain.playerInfo.goods_ids;
                for (var s in e) for (var i = e[s], a = 0; a < i.length; a++) {
                    var o = i[a];
                    o && (t[o.goods_type] ? t[o.goods_type].indexOf(o.goods_id) < 0 && o.is_push && this.randomArr.push(o) : o.is_push && this.randomArr.push(o));
                }
                if (0 == this.randomArr.length) this.onClose(); else {
                    var n = Math.floor(this.randomArr.length * Math.random());
                    this.selectGoods = this.randomArr[n], this.goodsIcon && (this.goodsIcon.skin = zs.laya.game.AppMain.appConfig.storeCfg.typeMap[this.selectGoods.goods_type] + this.selectGoods.goods_icon + ".png");
                }
            }
        }
        onSelectHandler() {
            this.isSelectVideo = !this.isSelectVideo, this.select && (this.select.visible = this.isSelectVideo);
        }
        onVideoHandler() {
            this.tryoutBtn.mouseEnabled = !1, this.passBtn.mouseEnabled = !1, zs.laya.platform.ADConfig.zs_more_reward_swich ? this.isSelectVideo ? this.playVideo() : this.onClose() : this.playVideo();
        }
        playVideo() {
            zs.laya.SdkService.playVideo(t.Handler.create(this, function() {
                this.tryoutBtn.mouseEnabled = !0, this.passBtn.mouseEnabled = !0, zs.laya.game.WebService.requestUnlockGoodsByVideo({
                    goods_type: this.selectGoods.goods_type,
                    goods_id: this.selectGoods.goods_id,
                    isUnlock: unlock
                }), t.stage.event(zs.laya.game.EventId.STORE_ITEM_UNLOCKED, [ this.selectGoods ]), 
                t.stage.event(zs.laya.game.EventId.STORE_USE_ITEM, [ this.selectGoods ]), this.onClose();
            }), t.Handler.create(this, function() {
                this.tryoutBtn.mouseEnabled = !0, this.passBtn.mouseEnabled = !0;
            }), t.Handler.create(this, function() {
                t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, "视频观看次数已用完");
            }));
        }
        onClose() {
            this.owner.close();
        }
    }
    t.ILaya.regClass(u), t.ClassUtils.regClass("zs.laya.ui.SampleSackView", u), t.ClassUtils.regClass("Zhise.SampleSackView", u);
    class v extends u {
        playVideo() {
            zs.laya.SdkService.playVideo(t.Handler.create(this, function() {
                this.tryoutBtn.mouseEnabled = !0, this.passBtn.mouseEnabled = !0, t.stage.event(zs.laya.game.EventId.STORE_USE_ITEM, [ this.selectGoods ]), 
                this.onClose();
            }), t.Handler.create(this, function() {
                this.tryoutBtn.mouseEnabled = !0, this.passBtn.mouseEnabled = !0;
            }), t.Handler.create(this, function() {
                t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, "视频观看次数已用完");
            }));
        }
    }
    t.ILaya.regClass(v), t.ClassUtils.regClass("zs.laya.ui.PushView", v), t.ClassUtils.regClass("Zhise.PushView", v);
    e.LoadingBar = s, e.MsgBoxComp = i, e.StartBtn = a, e.StoreBtn = o, e.ReplayBtn = n, 
    e.AwardBtn = l, e.ExtraAwardBtn = h, e.Award2HomeBtn = r, e.Award2NextBtn = d, e.MsgBoxView = p, 
    e.LoadingView = g, e.HomeView = c, e.ReliveView = y, e.WinView = B, e.StorePage = m, 
    e.SampleSackView = u, e.PushView = v, e.TreasureView = class extends zs.laya.base.ZhiSeView {
        constructor() {
            super(), this.bSelectVideo = !0, this.keyNum = 3, this.rewardArr = [], this.selectArr = [], 
            this.bAddKey = !1;
        }
        onEnable() {
            super.onEnable();
        }
        onDisable() {
            super.onDisable(), this.backBtn && this.backBtn.off(t.Event.CLICK, this, this.onBackHandler), 
            this.btnGetReward && this.btnGetReward.off(t.Event.CLICK, this, this.onGetKeyHandler);
        }
        initView(e) {
            this.initUI(), this.initEvent(), this.keyNum = 3, this.selectArr = [];
            let t, s = e;
            if (!s) return console.error("no luckbox config!! please check !", s), this.onBackHandler();
            let i, a = [];
            for (let e = 0; e < s.length; e++) a.push(e);
            this.rewardArr = [];
            for (let e = 0; e < s.length; e++) {
                let e = a[t = Math.floor(Math.random() * a.length)];
                a.splice(t, 1), i = s[e], this.rewardArr.push(i);
            }
            this.boxList.array = this.rewardArr, this.updateUI();
        }
        onSwithSelect() {
            this.bSelectVideo = !this.bSelectVideo, this.updateUI();
        }
        initUI() {
            var e = this.owner.getChildByName("middleUI");
            e && (this.backBtn = e.getChildByName("backBtn"), this.boxList = e.getChildByName("boxList"), 
            this.keyBox = e.getChildByName("boxKey"), this.videoBox = e.getChildByName("videoBox"), 
            this.lblCurKey = this.keyBox.getChildByName("lblCurKey"), this.videoCheck = this.videoBox.getChildByName("videoCheck"), 
            this.btnGetReward = this.videoBox.getChildByName("btnGetReward"));
        }
        initEvent() {
            this.backBtn && this.backBtn.on(t.Event.CLICK, this, this.onBackHandler), this.btnGetReward && this.btnGetReward.on(t.Event.CLICK, this, this.onGetKeyHandler), 
            this.videoCheck && this.videoCheck.on(t.Event.CLICK, this, this.onSwithSelect), 
            this.boxList && (this.boxList.selectEnable = !0, this.boxList.selectHandler = t.Handler.create(this, this.boxSelectHandler, null, !1), 
            this.boxList.renderHandler = t.Handler.create(this, this.boxRenderHandler, null, !1));
        }
        updateUI() {
            this.updateSwitchBox(), this.updateBoxVisible(), this.updateKeyNum();
        }
        updateSwitchBox() {
            this.videoCheck.selected = this.bSelectVideo;
        }
        updateBoxVisible() {
            var e = this.keyNum <= 0;
            this.keyBox.visible = !e, this.videoBox.visible = e && !this.bAddKey;
        }
        updateKeyNum() {
            this.lblCurKey.text = this.keyNum.toString();
        }
        boxSelectHandler(e) {
            let s = this.boxList.getCell(e), i = this.rewardArr[e];
            if (i) {
                if (this.boxList.selectedIndex = -1, 1 == i.unlocking_mode) {
                    if (this.keyNum <= 0) return void t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, "钥匙不足");
                    this.keyNum--, s.getChildByName("lock").visible = !1, s.getChildByName("rewordBox").visible = !0, 
                    s.mouseEnabled = !1, this.selectArr.push(e), console.log("gold num is :", i.reward_num), 
                    this.addCoin(i.reward_num);
                } else this.boxList.mouseEnabled = !1, zs.laya.sdk.SdkService.playVideo(t.Handler.create(this, function() {
                    this.boxList.mouseEnabled = !0, s.getChildByName("lock").visible = !1, s.getChildByName("rewordBox").visible = !0, 
                    s.mouseEnabled = !1, this.selectArr.push(e), this.addCoin(i.reward_num);
                }), t.Handler.create(this, function() {
                    this.boxList.mouseEnabled = !0;
                }), t.Handler.create(this, function() {
                    this.boxList.mouseEnabled = !0, t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, "视频观看次数已用完");
                }));
                this.boxList.refresh(), this.updateUI();
            }
        }
        addCoin(e) {
            zs.laya.game.AppMain.playerInfo.gold += Number(e), zs.laya.game.WebService.updatePlayerInfo({
                gold: zs.laya.game.AppMain.playerInfo.gold
            }), t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, `获得${e}金币`);
        }
        boxRenderHandler(e, t) {
            let s = e.getChildByName("lock");
            s.visible = !0;
            let i = this.rewardArr[t];
            s.getChildByName("video").visible = 1 != i.unlocking_mode;
            let a = e.getChildByName("rewordBox");
            a.getChildByName("goldLabel").text = i.reward_num, this.selectArr.indexOf(t) >= 0 ? (s.visible = !1, 
            a.visible = !0) : a.visible = !1;
        }
        onBackHandler() {
            this.owner.destroy();
        }
        onGetKeyHandler() {
            this.bSelectVideo ? zs.laya.sdk.SdkService.playVideo(t.Handler.create(this, function() {
                this.keyNum = 3, this.bAddKey = !0, this.updateUI();
            }), t.Handler.create(this, function() {}), t.Handler.create(this, function() {
                t.stage.event(zs.laya.game.EventId.UI_TOAST_MESSAGE, "视频观看次数已用完");
            })) : this.onBackHandler();
        }
    }, e.StoreItemState = C;
}(window.zs.laya.ui = window.zs.laya.ui || {}, Laya);