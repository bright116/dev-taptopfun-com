(function() {
    "use strict";
    class ScaleButton extends Laya.Script {
        constructor() {
            super(...arguments);
            this.scaleX = 1.1;
            this.scaleY = 1.1;
            this._originScaleX = 1;
            this._originScaleY = 1;
        }
        onAwake() {
            if (!this.owner) return;
            this._ownerSp = this.owner;
            if (this._ownerSp) {
                this._originScaleX = this._ownerSp.scaleX;
                this._originScaleY = this._ownerSp.scaleY;
            }
        }
        onMouseDown(event) {
            this._ownerSp.scale(this.scaleX, this.scaleX);
        }
        onMouseUp(event) {
            this._ownerSp.scale(this._originScaleX, this._originScaleY);
        }
        onMouseOut(event) {
            this._ownerSp.scale(this._originScaleX, this._originScaleY);
        }
    }
    var AdEvent;
    (function(AdEvent) {
        AdEvent["VideoLoaded"] = "VideoLoaded";
        AdEvent["VideoClosed"] = "VideoClosed";
        AdEvent["VideoError"] = "VideoError";
    })(AdEvent || (AdEvent = {}));
    var ExportAdEvent;
    (function(ExportAdEvent) {
        ExportAdEvent["NavigationFail"] = "NavigationFail";
        ExportAdEvent["ShowRecommend"] = "ShowRecommend";
    })(ExportAdEvent || (ExportAdEvent = {}));
    var AppEvent;
    (function(AppEvent) {
        AppEvent["OnShow"] = "OnShow";
    })(AppEvent || (AppEvent = {}));
    var GamePlayEvent;
    (function(GamePlayEvent) {
        GamePlayEvent["GetFreeGift"] = "GetFreeGift";
        GamePlayEvent["UpdateGold"] = "UpdateGold";
        GamePlayEvent["DisplayGameSceneAd"] = "DisplayGameSceneAd";
        GamePlayEvent["GameStart"] = "GameStart";
        GamePlayEvent["GameOver"] = "GameOver";
        GamePlayEvent["CloseInterstitialAd"] = "CloseInterstitialAd";
        GamePlayEvent["GameReset"] = "GameReset";
        GamePlayEvent["PlayerHit"] = "PlayerHit";
        GamePlayEvent["OpenPage"] = "OpenPage";
        GamePlayEvent["HidePage"] = "HidePage";
        GamePlayEvent["ObsChange"] = "ObsChange";
        GamePlayEvent["EnemyDeath"] = "EnemyDeath";
        GamePlayEvent["EnemyPass"] = "EnemyPass";
        GamePlayEvent["EnemyWin"] = "EnemyWin";
        GamePlayEvent["ShellBoom"] = "ShellBoom";
        GamePlayEvent["GameWin"] = "GameWin";
        GamePlayEvent["CreateEnemyHp"] = "CreateEnemyHp";
        GamePlayEvent["ChangeCar"] = "ChangeCar";
    })(GamePlayEvent || (GamePlayEvent = {}));
    class FreeGift extends Laya.Script {
        constructor() {
            super(...arguments);
            this.rewarded = 100;
            this._onComplete = null;
            this._onClickGetBtn = null;
            this._reduce = .001;
            this._increase = .05;
            this._target = 0;
            this._progress = 0;
            this._isComplete = false;
            this._closeDelay = 3e3;
        }
        onAwake() {
            super.onAwake();
            this.btn.on(Laya.Event.CLICK, this, this.onClickBtn);
            this.progressBar.value = 0;
            this._target = .1 + Math.random() * .03;
            console.log("target:", this._target);
            let config = gg.sdk.getCustomConf();
            if (config && config.freeGiftCloseDelay) this._closeDelay = config.freeGiftCloseDelay * 1e3;
            console.log("giftonawake");
        }
        init(onComplete, onClickGetBtn) {
            console.log("giftinit")
            this._onComplete = onComplete;
            this._onClickGetBtn = onClickGetBtn;
            gg.sdk.hideBanner();
            setTimeout(() => {
                gg.sdk.createFullScreenBannerAd(GameConfig.screenMode === "horizontal");
            }, 1200);
            this.complete()
            
        }
        onClickBtn(event) {
            this._onClickGetBtn && this._onClickGetBtn();
            this._progress += this._increase;
            if (this._progress >= this._target) this.complete();
        }
        onUpdate() {
            if (this._progress > 0) this._progress -= this._reduce;
            if (this._progress < 0) this._progress = 0;
            if (this.progressBar) this.progressBar.value = this._progress;
        }
        complete() {
            if (this._isComplete) return;
            this._isComplete = true;
            gg.sdk.showBanner(true);
            setTimeout(() => {
                this._onComplete && this._onComplete();
                gg.event.event(GamePlayEvent.GetFreeGift, this.rewarded);
                gg.sdk.hideBanner();
            }, 0);
        }
    }
    class SceneLayout extends Laya.Script {
        onAwake() {
            let scene = this.owner;
            scene.height = Laya.stage.height;
            scene.width = Laya.stage.width;
        }
    }
    class DialogLayout extends SceneLayout {
        onAwake() {
            let owner = this.owner;
            owner.on(Laya.Event.RESIZE, this, this.onResize);
            super.onAwake();
        }
        onResize() {
            this.centerDialog();
            Laya.Dialog.manager["_checkMask"]();
        }
        centerDialog() {
            let owner = this.owner;
            owner.x = Math.round((Laya.stage.width - owner.width >> 1) + owner.pivotX);
            owner.y = Math.round((Laya.stage.height - owner.height >> 1) + owner.pivotY);
        }
    }
    class BaseDialog extends DialogLayout {
        constructor() {
            super(...arguments);
            this.onClose = null;
        }
        onAwake() {
            super.onAwake();
        }
        closeDialog() {
            let dialog = this.owner;
            if (dialog) {
                gg.ui.closeDialog(this.owner);
            } else {
                this.owner.removeSelf();
            }
            this.onClose && this.onClose();
        }
    }
    class FreeGiftDialog extends BaseDialog {
        onAwake() {
            super.onAwake();
            this.freeGift = this.owner.getComponent(FreeGift);
            if (this.freeGift) {
                this.freeGift.init(() => {
                    this.closeDialog();
                }, () => {
                    this.onClickGetBtn();
                });
            }
        }
        onClickGetBtn() {}
        setReward(value) {
            if (this.freeGift) this.freeGift.rewarded = value;
        }
        getReward() {
            if (this.freeGift) return this.freeGift.rewarded;
            return 0;
        }
    }
    class FreeGiftFixCarDialog extends FreeGiftDialog {
        onClickGetBtn() {
            this.owner["ani1"].play(0, false);
        }
    }
    class ScrollList extends Laya.Script {
        constructor() {
            super(...arguments);
            this.speed = 10;
            this._ownerList = null;
            this._isScrolling = false;
            this._isForward = false;
            this._isStart = false;
        }
        checkListScroll() {
            let shouldScroll = false, box = this._ownerList.getCell(0);
            if (box) {
                let unitSize = {
                    width: box.width,
                    height: box.height
                };
                if (this._ownerList.width > this._ownerList.height) {
                    let otherDirCount = Math.round(this._ownerList.height / unitSize.height);
                    let rollCount = Math.ceil(this._ownerList.array.length / otherDirCount);
                    let total = (unitSize.width + this._ownerList.spaceX) * rollCount - this._ownerList.spaceX;
                    let offset = Math.round(total - this._ownerList.width);
                    shouldScroll = offset >= unitSize.width * .3;
                } else {
                    let otherDirCount = Math.round(this._ownerList.width / unitSize.width);
                    let rollCount = Math.ceil(this._ownerList.array.length / otherDirCount);
                    let total = (unitSize.height + this._ownerList.spaceY) * rollCount - this._ownerList.spaceY;
                    let offset = Math.round(total - this._ownerList.height);
                    shouldScroll = offset >= unitSize.height * .3;
                }
            }
            return shouldScroll;
        }
        startScroll() {
            if (this._isStart) return;
            this._isStart = true;
            this._ownerList = this.owner;
            this._ownerList.scrollBar.on("end", this, this.onScrollEnd);
            this._ownerList.scrollBar.on("start", this, this.onScrollStart);
            if (!this._ownerList || !this.checkListScroll()) return;
            Laya.timer.loop(1e3, this, this.onCheckRoll);
            setTimeout(() => {
                this.scrollList();
            }, 1500);
        }
        onScrollStart() {
            this._isScrolling = true;
        }
        onScrollEnd() {
            this._isScrolling = false;
        }
        onCheckRoll() {
            if (!this._isScrolling) {
                this.scrollList();
            }
        }
        scrollList() {
            if (this._ownerList && this._ownerList.scrollBar) {
                let val = this._isForward ? 0 : this._ownerList.scrollBar.max;
                let s = Math.abs(this._ownerList.scrollBar.value - val);
                let time = Math.round(s * 1e3 / this.speed);
                Laya.Tween.to(this._ownerList.scrollBar, {
                    value: val
                }, time, null, Laya.Handler.create(this, () => {
                    this._isForward = !this._isForward;
                    this.scrollList();
                }), 0, true);
                this._isScrolling = true;
            }
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    var ErrorCode;
    (function(ErrorCode) {
        ErrorCode[ErrorCode["TestExit"] = -101] = "TestExit";
        ErrorCode[ErrorCode["WXVersionTooOld"] = -99] = "WXVersionTooOld";
        ErrorCode[ErrorCode["ExitMiniGame"] = -98] = "ExitMiniGame";
        ErrorCode[ErrorCode["NoError"] = 1e3] = "NoError";
    })(ErrorCode || (ErrorCode = {}));
    var ExportAdType;
    (function(ExportAdType) {
        ExportAdType["Couplet"] = "couplet";
        ExportAdType["TryExport"] = "tryexport";
        ExportAdType["Recommend"] = "recommend";
    })(ExportAdType || (ExportAdType = {}));
    var StorageKey;
    (function(StorageKey) {
        StorageKey["ExportSuccess"] = "ExportSuccess";
    })(StorageKey || (StorageKey = {}));
    var EPlatformType;
    (function(EPlatformType) {
        EPlatformType[EPlatformType["web"] = 0] = "web";
        EPlatformType[EPlatformType["wx"] = 1] = "wx";
        EPlatformType[EPlatformType["vivo"] = 2] = "vivo";
        EPlatformType[EPlatformType["oppo"] = 3] = "oppo";
        EPlatformType[EPlatformType["qq"] = 4] = "qq";
    })(EPlatformType || (EPlatformType = {}));
    class ListItem extends Laya.Script {
        constructor() {
            super(...arguments);
            this.isTouch = false;
        }
        onAwake() {
            this.updateView();
        }
        onMouseDown(event) {
            this.isTouch = true;
        }
        onMouseUp(event) {
            if (this.isTouch) {
                this.isTouch = false;
                this.onTouch();
            }
        }
        onMouseOut(event) {
            if (this.isTouch) {
                this.isTouch = false;
                this.onTouch();
            }
        }
        onTouch() {}
        updateView() {}
        setData(data) {
            this.data = data;
            this.updateView();
        }
    }
    class ListRenderItem extends Laya.Box {
        constructor(width, height, url) {
            super();
            this.size(width, height);
            this.addView(url);
        }
        addView(url) {
            gg.res.loadScene(url).then(scene => {
                this._renderer = scene;
                this._renderer.size(this.width, this.height);
                let box = this._renderer.getChildByName("Box");
                if (box) box.pos(this.width * .5 + box.pivotX, this.height * .5 + box.pivotY);
                this.addChild(this._renderer);
                this.updateView();
            }).catch(() => {
                console.error(`${url} not found`);
            });
        }
        updateView() {
            if (!this._data || !this._renderer) return;
            let comp = this._renderer.getComponent(ListItem);
            if (comp) comp.setData(this._data);
        }
        setData(data) {
            if (data) {
                this._data = data;
            } else {
                this._data = this.dataSource;
            }
            this.updateView();
        }
    }
    class RecommendDialog extends BaseDialog {
        onAwake() {
            
            super.onAwake();
            this.closeBtn.once(Laya.Event.CLICK, this, this.onClickClose);
            this.backGameBtn.once(Laya.Event.CLICK, this, this.onClickClose);
            gg.sdk.hideBanner();
            if (gg.sdk.checkBannerFakeClickOpen()) {
                setTimeout(() => {
                    gg.sdk.showBanner();
                }, 2e3);
            }
            gg.event.on(AppEvent.OnShow, this, () => {
                this.initFriendList();
                this.initRecommendList();
            });
            this.initFriendList();
            this.initRecommendList();
            
        }
        initFriendList() {
            if (gg.ui.checkSceneIsHorizontal()) {
                this.friendList.visible = false;
                this.friendTitleSp.visible = false;
                return;
            }
            let exportData = gg.sdk.getExportAdData(ExportAdType.Recommend);
            if (!exportData) return;
            this.friendList.itemRender = FriendRenderItem;
            this.friendList.renderHandler = new Laya.Handler(this, (cell, index) => {
                cell.setData();
            });
            this.friendList.hScrollBarSkin = "";
            this.friendList.array = exportData;
            this.friendList.refresh();
            let comp = this.friendList.getComponent(ScrollList);
            comp && comp.startScroll();
        }
        initRecommendList() {
            let exportData = gg.sdk.getExportAdData(ExportAdType.Recommend);
            if (!exportData) return;
            let isSceneHorizontal = gg.ui.checkSceneIsHorizontal();
            this.recommendTitleImg.top = isSceneHorizontal ? 60 : 317;
            this.recommendList.top = isSceneHorizontal ? 60 + this.recommendTitleImg.height + 30 : 360;
            this.recommendList.repeatX = isSceneHorizontal ? -1 : 3;
            this.recommendList.repeatY = isSceneHorizontal ? 2 : -1;
            this.recommendList.spaceY = isSceneHorizontal ? 30 : 20;
            this.recommendList[`${isSceneHorizontal ? "h" : "v"}ScrollBarSkin`] = "";
            this.recommendList.itemRender = RecommendRenderItem;
            this.recommendList.array = exportData;
            this.recommendList.renderHandler = new Laya.Handler(this, (cell, index) => {
                cell.setData();
            });
            this.recommendList.refresh();
            let comp = this.recommendList.getComponent(ScrollList);
            comp && comp.startScroll();
        }
        onClickClose(event) {
            gg.sdk.hideBanner();
            this.closeDialog();
        }
    }
    class FriendRenderItem extends ListRenderItem {
        constructor() {
            super(132, 162, "res/prefabs/ExportRenderItem2.scene");
        }
    }
    class RecommendRenderItem extends ListRenderItem {
        constructor() {
            super(230, 280, "res/prefabs/ExportRenderItem.scene");
        }
    }
    const Locale = {
        LoadRes: "Loading...",
        LoadResFail: "加载失败，请稍后重试",
        NoVideoAd: "暂时没有激励广告",
        GetRewardSuccess: "Successfully To Get Award",
        GetRewardFail: "获取奖励失败",
        CurrentLevel: "第$0关",
        NoMoney: "Coin Needed!"
    };
    const GameId = "noviceparking";
    const PlatformGameName = "xxxxx";
    const GameName = "新手停车";
    const GamePublishDate = "20201023";
    const GameVersion = "1.0.5";
   // const RemoteUrls = [ `https://mini.gridsgame.com/minigames/uploads/${GameId}/`, `https://mini.gridsgame.com/minigames/uploads_test/${GameId}/` ];
    const RemoteUrls = [ ``, `` ];
    const QQRemoteUrl = ``;
   // const QQRemoteUrl = `https://mini.gridsgame.com/minigames/qq_uploads/${GameId}/`;
    const GlobalConfigUrl = "config_production.json";
    const GameConfigUrl = "game_conf_0928.json";
    const IsLoadRemoteRes = false;
    const IsDebugMode = false;
    const NativeFiles = [ "res/ui/local", "res/altas/res/ui/local", "res/animations", "res/dialogs", "res/prefabs", "res/scenes" ];
    var Components;
    (function(Components) {
        Components["ToastDialog"] = "res/dialogs/ToastDialog.scene";
        Components["RecommendDialog"] = "res/dialogs/RecommendDialog.scene";
        Components["TryExportDialog"] = "res/dialogs/TryExportDialog.scene";
        Components["FreeGiftBagDialog"] = "res/dialogs/FreeGiftBagDialog.scene";
        Components["FreeGiftFixCarDialog"] = "res/dialogs/FreeGiftFixCarDialog.scene";
        Components["FreeGiftFixEggDialog"] = "res/dialogs/FreeGiftEggDialog.scene";
        Components["SettleDialogH"] = "res/dialogs/SettleDialog.scene";
        Components["SettleDialogV"] = "res/dialogs/SettleDialog2.scene";
        Components["ShopDialog"] = "res/dialogs/ShopDialog.scene";
        Components["ShopDialog2"] = "res/dialogs/ShopDialog3.scene";
        Components["CoupletAd"] = "res/prefabs/CoupletAd.scene";
        Components["GameSceneAd"] = "res/prefabs/GameSceneAd.scene";
        Components["SettleAd"] = "res/prefabs/SettleAd.scene";
    })(Components || (Components = {}));
    class PreloadRes {
        static getD2Res() {
            return null;
        }
        static getD3Res() {
            let urls = [];
            let data = gg.data.getGameConf();
            let userData = gg.player.getData();
            urls.push("res/d3/scene_game/Conventional/scene_game.ls");
            urls.push("res/d3/shops/Conventional/scene_game.ls");
            for (let index = userData.level, nCount = 0; nCount <= 2; index++, nCount++) {
                if (index > data.maxLevel) index = 1;
                let url = `res/d3/checkpoint/checkpoint${index}/Conventional/scene_game.lh`;
                urls.push(url);
            }
            for (let index = 1; index <= data.carCount; index++) {
                let url = `res/d3/car/car${index}/Conventional/scene_game.lh`;
                urls.push(url);
            }
            return urls;
        }
        static getRes() {
            let res = {
                d2Res: this.getD2Res() || [],
                d3Res: this.getD3Res() || [],
                stage: 0
            };
            if (res.d2Res.length > 0) res.stage++;
            if (res.d3Res.length > 0) res.stage++;
            return res;
        }
    }
    var GetRewardTypes;
    (function(GetRewardTypes) {
        GetRewardTypes["AD"] = "ad";
        GetRewardTypes["Share"] = "share";
    })(GetRewardTypes || (GetRewardTypes = {}));
    var AdTypes;
    (function(AdTypes) {
        AdTypes["Video"] = "视频";
        AdTypes["Banner"] = "banner";
        AdTypes["Interstitial"] = "插屏";
        AdTypes["Custom"] = "原生";
        AdTypes["Grid"] = "格子";
    })(AdTypes || (AdTypes = {}));
    var LoginStateTypes;
    (function(LoginStateTypes) {
        LoginStateTypes["LoadConfig"] = "加载config";
        LoginStateTypes["LoadRes"] = "加载资源";
        LoginStateTypes["EnterGame"] = "进入主界面";
    })(LoginStateTypes || (LoginStateTypes = {}));
    var LevelStateTypes;
    (function(LevelStateTypes) {
        LevelStateTypes["Enter"] = "进入";
        LevelStateTypes["Pass"] = "通过";
        LevelStateTypes["Failed"] = "失败";
    })(LevelStateTypes || (LevelStateTypes = {}));
    var StateTypes;
    (function(StateTypes) {
        StateTypes["Success"] = "success";
        StateTypes["Failed"] = "failed";
    })(StateTypes || (StateTypes = {}));
    class GameLog {
        static getLaunchOpt() {
            if (!this._launchOptions) {
                let thePlatform = gg.sdk.getPlatform();
                if (thePlatform.getLaunchOptionsSync) this._launchOptions = thePlatform.getLaunchOptionsSync();
            }
            return this._launchOptions;
        }
        static login(state) {
            let launchOptions = this.getLaunchOpt();
            let data = {
                step: state,
                query: launchOptions && launchOptions.query || null
            };
            gg.log.log("login", data);
        }
        static level(currentLevel, state) {
            let data = {
                rank: currentLevel,
                action: state
            };
            gg.log.log("rank", data);
        }
        static doubleReward(type) {
            let data = {
                getType: type
            };
            gg.log.log("double", data);
        }
        static strength(type) {
            let data = {
                getType: type
            };
            gg.log.log("strength", data);
        }
        static page(pageName) {
            let data = {
                Interface: pageName
            };
            gg.log.log("visit", data);
        }
        static shop(product, cost, type) {
            let data = {
                commodity: product,
                shopType: type,
                cost: cost
            };
            gg.log.log("shop", data);
        }
        static ad(type, state) {
            let data = {
                type: type,
                action: state
            };
            gg.log.log("ad", data);
        }
    }
    class SettleDialog extends BaseDialog {
        init(data) {
            this._data = data;
        }
        onAwake() {
            super.onAwake();
            if (this._data) this.initView();
            this.addExportAds();
        }
        onEnable() {
            setTimeout(() => {
                gg.sdk.showBanner();
            }, 1200);
        }
        initView() {
           var gamelist= Gamecontroller.getInstance().getGamelist();
           platform.getInstance().initList(gamelist);
           this.owner.addChild(gamelist);
           gamelist.visible=true;
           gamelist.centerY=200;
           gamelist.scaleX=0.7;
           gamelist.scaleY=0.7;
            this.winNode.visible = this._data.isWin;
            this.getDoubleGoldBtn.visible = this._data.isWin;
            if (this._data.isWin) {
                setTimeout(() => {
                    this.getGoldBtn.visible = true;
                }, 1200);
            } else {
                this.getGoldBtn.visible = false;
            }
            this.loseNode.visible = !this._data.isWin;
            this.skipBtn.visible = !this._data.isWin && this._data.isSkip;
            if (!this._data.isWin) {
                setTimeout(() => {
                    this.continueBtn.visible = true;
                }, 1200);
            } else {
                this.continueBtn.visible = false;
            }
            let levelLbl = this[this._data.isWin ? "winNode" : "loseNode"].getChildByName("LevelLabel");
            if (levelLbl) levelLbl.changeText(Locale.CurrentLevel.replace("$0", this._data.currentLevel.toString()));
            let lbLvl = this["winNode"].getChildByName("Level");
            if (lbLvl) {
                let lbCurrent = lbLvl.getChildByName("CurrentLevelLbl");
                let lbNext = lbLvl.getChildByName("NextLevelLbl");
                lbCurrent.text = this._data.currentLevel.toString();
                lbNext.text = this._data.nextLevel.toString();

                if(this._data.nextLevel==26){
                    lbNext.text="End"
                }
            }
            if (this._data.isWin) {
                this.owner["ani1"].play(0, true);
            }
            this.continueBtn.on(Laya.Event.CLICK, this, this.onContinue);
            this.skipBtn.on(Laya.Event.CLICK, this, this.onSkip);
            this.getGoldBtn.on(Laya.Event.CLICK, this, this.onGetGold);
            this.getDoubleGoldBtn.on(Laya.Event.CLICK, this, this.onGetDoubleGold);
            if (this._data.isShowGuide) {
                setTimeout(() => {
                    if (this.guideMask) {
                        this.guideMask.visible = true;
                        this.guideHandNode.visible = true;
                        this.owner["ani2"].play(0, true);
                    }
                }, 1e3);
            }
        }
        addExportAds() {
            gg.res.loadScene(gg.ui.checkSceneIsHorizontal() ? Components.CoupletAd : Components.SettleAd).then(view => {
                if (view && this.adBox) this.adBox.addChild(view);
            });
        }
        onGetGold() {
            this.continue();
        }
        onGetDoubleGold() {
            this.getReward();
        }
        onSkip() {
            this.getReward();
        }
        onContinue() {
            this.continue();
        }
        closeDialog() {
            gg.sdk.hideBanner();
            super.closeDialog();
            if (this._data.isReloadGame && (this._data.isReloadGameWhenRecover == undefined || this._data.isReloadGameWhenRecover == true)) gg.ui.switchScene(gg.ui.getCurrentScene());
        }
        continue() {
            if (this._data.onContinue) this._data.onContinue();
            this.closeDialog();
        }
        getReward() {
            if (!this._data.onReward) return;
            platform.getInstance().showReward(()=>{
                this._data.onReward();

                this.closeDialog();
            })

        }
    }
    class ShopDialog extends BaseDialog {
        constructor() {
            super(...arguments);
            this.carNode = null;
            this.carLbl = null;
            this.btnPay = null;
            this.btnChoose = null;
            this.btnBack = null;
            this.hadMoney = null;
            this.payNeedMoney = null;
            this.btnBefore = null;
            this.btnNext = null;
            this.iconLock = null;
            this.storeScene = null;
            this.curCar = null;
            this.curCarId = 1;
            this.carList = {};
            this.curSceneCar = null;
            this.canLoadCar = true;
            this._point = null;
            this.defautScenePath = "res/d3/shops/Conventional/scene_game.ls";
            this.defautCarPath = "res/d3/car/car";
            this.choooseCallback = (() => {
                gg.event.event(GamePlayEvent.ChangeCar);
            });
        }
        onAwake() {
            super.onAwake();
            this.btnBack.on(Laya.Event.CLICK, this, this.onClickClose);
            this.btnBefore.on(Laya.Event.CLICK, this, () => {
                this.toforwad();
            });
            this.btnNext.on(Laya.Event.CLICK, this, () => {
                this.tonext();
            });
            this.btnPay.on(Laya.Event.CLICK, this, () => {
                this.pay();
            });
            this.btnChoose.on(Laya.Event.CLICK, this, () => {
                this.choose();
            });
            this.initShop();
        }
        onClickClose() {
            this.closeDialog();
            if (this.curCar) this.curCar.destroy();
            if (this.storeScene) this.storeScene.destroy();
        }
        initShop() {
            this.carList = gg.data.getGameConf().carList;
            this.curCarId = 1;
            this.hadMoney.text = gg.player.getData().gold + "";
            Laya.Scene3D.load(this.defautScenePath, Laya.Handler.create(null, s => {
                this.storeScene = s;
                this.carNode.addChild(this.storeScene);
                let shop = this.storeScene.getChildByName("shops");
                this._point = shop.getChildByName("birthplace");
                this.loadCarShow(this.curCarId);
            }));
        }
        loadCarShow(carid) {
            if (!this.canLoadCar) return;
            this.canLoadCar = false;
            if (this.curCar) {
                this.curCar.destroy();
            }
            if (this.curSceneCar) {
                this.curSceneCar.destroy();
            }
            if (this.checkHadCar()) {
                this.showNode(this.btnChoose);
                if (gg.player.getData().carId == carid) {
                    this.disableNode(this.btnChoose);
                    this.btnChoose.getChildByName("Label").text = "SELECTED";
                } else {
                    this.ableNode(this.btnChoose);
                    this.btnChoose.getChildByName("Label").text = "SELECT";
                }
                this.hideNode(this.btnPay);
                this.iconLock.visible = false;
            } else {
                this.hideNode(this.btnChoose);
                this.showNode(this.btnPay);
                this.iconLock.visible = true;
            }
            let carData = this.carList[this.curCarId];
            this.payNeedMoney.text = carData.money;
            Laya.Sprite3D.load(this.defautCarPath + this.curCarId + "/Conventional/scene_game.lh", Laya.Handler.create(null, sp => {
                this.canLoadCar = true;
                let obj = Laya.Sprite3D.instantiate(sp, this.storeScene, false, new Laya.Vector3(0, 0, 0));
                this.curSceneCar = obj;
                let car = obj.getChildAt(0);
                this.curCar = car;
                this.storeScene.addChild(car);
                car.transform.position = this._point.transform.position;
                car.transform.rotation = this._point.transform.rotation;
                let rid = car.getComponent(Laya.Rigidbody3D);
                if (rid) {
                    rid.destroy();
                }
                let temp = this.storeScene.getChildByName("scene_game");
                if (temp) {
                    temp.destroy();
                }
                let cameraNode = car.getChildByName("node_camera");
                if (cameraNode) {
                    cameraNode.active = false;
                }
            }));
        }
        checkHadCar() {
            let car = gg.player.getData().cars[this.curCarId];
            if (car) return true;
            if (car == 1) return true;
            return car;
        }
        pay() {
            let carData = this.carList[this.curCarId];
            if (carData && !this.checkHadCar()) {
                let player = gg.player.getData();
                let cmoney = player.gold;
                let needMoney = carData.money;
                if (cmoney >= needMoney) {
                    player.cars[this.curCarId] = carData;
                    player.gold = cmoney - needMoney;
                    gg.player.save();
                    GameLog.shop(this.curCarId.toString(), needMoney);
                    this.showNode(this.btnChoose);
                    this.hideNode(this.btnPay);
                    this.iconLock.visible = false;
                    this.hadMoney.text = player.gold + "";
                    this.ableNode(this.btnChoose);
                    this.btnChoose.getChildByName("Label").text = "SELECT";
                } else {
                    gg.ui.showToast(Locale.NoMoney);
                }
            }
        }
        choose() {
            let carData = this.carList[this.curCarId];
            if (carData && this.checkHadCar()) {
                gg.player.update("carId", this.curCarId);
                this.disableNode(this.btnChoose);
                this.btnChoose.getChildByName("Label").text = "SELECTED";
                this.choooseCallback();
            }
        }
        hideNode(node) {
            node.getChildByName("dis").visible = true;
            node.visible = false;
        }
        showNode(node) {
            node.getChildByName("dis").visible = false;
            node.visible = true;
        }
        disableNode(node) {
            node.getChildByName("dis").visible = true;
            node.active = false;
        }
        ableNode(node) {
            node.getChildByName("dis").visible = false;
            node.active = true;
        }
        close() {}
        toforwad() {
            if (this.curCarId <= 1) return;
            this.curCarId--;
            this.loadCarShow(this.curCarId);
        }
        tonext() {
            if (this.curCarId >= gg.data.getGameConf().carCount) return;
            this.curCarId++;
            this.loadCarShow(this.curCarId);
        }
    }
    class ToastDialog extends Laya.Script {
        constructor() {
            super(...arguments);
            this._content = null;
            this._completeCb = null;
            this._delayTime = 1e3;
            this._flyTime = 800;
            this._flyY = 100;
        }
        init(content, complete) {
            this._content = content;
            this._completeCb = complete;
        }
        onAwake() {
            this.contentLbl.text = this._content;
            setTimeout(() => {
                Laya.Tween.to(this.backgroundSp, {
                    y: this.backgroundSp.y - this._flyY,
                    alpha: 0
                }, this._flyTime, Laya.Ease.linearOut, Laya.Handler.create(this, () => {
                    this._completeCb && this._completeCb();
                }));
            }, this._delayTime);
            let text = this.contentLbl.textField;
            console.log(text.textWidth);
            this.backgroundSp.width = text.textWidth + 100;
            this.backgroundSp.height = text.textHeight + 50;
        }
    }
    class TryExportDialog extends BaseDialog {
        onAwake() {
            super.onAwake();
            this.closeBtn.once(Laya.Event.CLICK, this, this.onClickClose);
            this.backGameBtn.once(Laya.Event.CLICK, this, this.onClickClose);
            gg.sdk.hideBanner();
            if (gg.sdk.checkBannerFakeClickOpen()) {
                this._timeoutId = setTimeout(() => {
                    gg.sdk.showBanner();
                }, 2e3);
            }
            gg.event.on(AppEvent.OnShow, this, this.initExportList);
            this.initExportList();
        }
        initExportList() {
            let exportData = gg.sdk.getExportAdData(ExportAdType.TryExport);
            if (!exportData) return;
            let isHorizontal = gg.ui.checkSceneIsHorizontal();
            this.exportList.left = isHorizontal ? 10 : 30;
            this.exportList.repeatX = isHorizontal ? -1 : 2;
            this.exportList.repeatY = isHorizontal ? 2 : -1;
            this.exportList[`${isHorizontal ? "h" : "v"}ScrollBarSkin`] = "";
            this.exportList.itemRender = TryExportItem;
            this.exportList.renderHandler = new Laya.Handler(this, (cell, index) => {
                cell.setData();
            });
            this.exportList.array = exportData;
            this.exportList.refresh();
            let comp = this.exportList.getComponent(ScrollList);
            comp && comp.startScroll();
        }
        onClickClose(event) {
            clearTimeout(this._timeoutId);
            gg.sdk.hideBanner();
            this.closeDialog();
        }
    }
    class TryExportItem extends ListRenderItem {
        constructor() {
            let scaleRate = gg.ui.checkSceneIsHorizontal() ? 1.15 : 1.3;
            super(250 * scaleRate, 300 * scaleRate, "res/prefabs/ExportRenderItem.scene");
        }
    }
    class CoupletAd extends Laya.Script {
        onAwake() {
            this.addExportAds();
        }
        addExportAds() {
            if (!gg.sdk.checkExportAdTypeOpen(ExportAdType.TryExport)) return;
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 2; j++) {
                    gg.res.loadScene("res/prefabs/SideAd.scene").then(view => {
                        let owner = this[`${i == 0 ? "leftBox" : "rightBox"}${j}`];
                        if (owner) owner.addChild(view);
                    });
                }
            }
        }
    }
    class ExportItem extends ListItem {
        onTouch() {
            gg.sdk.getPlatform().navigateToMiniProgram(this.data, () => {
                if (this.data.type == ExportAdType.Recommend) return;
                gg.event.event(ExportAdEvent.NavigationFail);
            });
        }
        updateView() {
            if (!this.data) return;
            if (this.gameNameLbl) this.gameNameLbl.text = this.data.title;
            if (this.gamePicImg) this.gamePicImg.skin = this.data.image;
        }
    }
    class FlowAd extends Laya.Script {
        constructor() {
            super(...arguments);
            this._renderer = null;
            this._exportData = null;
            this._index = -1;
        }
        onAwake() {
            this._exportData = gg.sdk.getExportAdData(ExportAdType.Couplet);
            if (!this._exportData) return;
            this._renderer = this.owner.getComponent(ExportItem);
            Laya.timer.loop(4e3, this, this.updateExport);
            this.updateExport();
            this.owner["ani1"].play(0, false);
        }
        updateExport() {
            if (!this._exportData || !this._renderer) return;
            this.owner["ani1"].play(0, false);
            if (++this._index > this._exportData.length) this._index = 0;
            let data = this._exportData[this._index];
            this._renderer.setData(data);
        }
        onDisable() {
            Laya.timer.clearAll(this);
        }
    }
    class GameSceneAd extends Laya.Script {
        onAwake() {
            gg.event.on(AppEvent.OnShow, this, this.addExportAds);
            this.addExportAds();
        }
        addExportAds() {
            let exportData = gg.sdk.getExportAdData(ExportAdType.Couplet);
            if (exportData) {
                let isSceneHorizontal = gg.ui.checkSceneIsHorizontal();
                if (!isSceneHorizontal) {
                    this.bottomExporBox.visible = true;
                    let list = this.bottomExporBox.getChildByName("List");
                    list.itemRender = BottomExportItem;
                    list.renderHandler = new Laya.Handler(this, (cell, index) => {
                        cell.setData();
                    });
                    list.hScrollBarSkin = "";
                    list.array = exportData;
                    list.refresh();
                    let comp = list.getComponent(ScrollList);
                    comp && comp.startScroll();
                } else {
                    this.bottomExporBox.visible = false;
                }
                for (let i = 0, len = isSceneHorizontal ? 4 : 2; i < len; i++) {
                    gg.res.loadScene("res/prefabs/FlowAd.scene").then(item => {
                        let target = this[`flowExportBox${i}`];
                        if (target) item.size(target.width, target.height);
                        target.addChild(item);
                    });
                }
                if (isSceneHorizontal && gg.ui.checkIsIphoneX()) {
                    this.flowExportBox0.left += 30;
                    this.flowExportBox2.left += 30;
                }
            }
        }
        removeExportAds() {
            this.bottomExporBox.destroy();
            for (let i = 3; i >= 0; i--) {
                this[`flowExportBox${i}`].destroy();
            }
        }
    }
    class BottomExportItem extends ListRenderItem {
        constructor() {
            super(161, 200, "res/prefabs/ExportRenderItem3.scene");
        }
    }
    class SettleAd extends Laya.Script {
        onAwake() {
            gg.event.on(AppEvent.OnShow, this, this.initList);
            this.initList();
        }
        initList() {
            let data = gg.sdk.getExportAdData(ExportAdType.Couplet);
            if (!data) return;
            this.list.vScrollBarSkin = "";
            this.list.itemRender = SettleRenderItem;
            this.list.renderHandler = new Laya.Handler(this, (cell, index) => {
                cell.setData();
            });
            this.list.array = data;
            this.list.refresh();
            let comp = this.list.getComponent(ScrollList);
            comp && comp.startScroll();
        }
    }
    class SettleRenderItem extends ListRenderItem {
        constructor() {
            super(250 * .9, 300 * .9, "res/prefabs/ExportRenderItem.scene");
        }
    }
    class SideAd extends Laya.Script {
        onAwake() {
            gg.event.on(AppEvent.OnShow, this, this.initList);
            this.initList();
        }
        initList() {
            let data = gg.sdk.getExportAdData(ExportAdType.Couplet);
            if (!data) return;
            this.list.itemRender = SideExportRenderdItem;
            this.list.renderHandler = new Laya.Handler(this, (cell, index) => {
                cell.setData();
            });
            this.list.vScrollBarSkin = "";
            this.list.array = data;
            this.list.refresh();
            let comp = this.list.getComponent(ScrollList);
            comp && comp.startScroll();
        }
    }
    class SideExportRenderdItem extends ListRenderItem {
        constructor() {
            super(200 * .9, 200 * .9, "res/prefabs/ExportRenderItem4.scene");
        }
    }
    class GameScene extends SceneLayout {
        onAwake() {
            super.onAwake();
            this.owner.autoDestroyAtClosed = true;
            this.addExportAds();
            if (!gg.ui.isGameSceneLaunched) {
                gg.ui.isGameSceneLaunched = true;
                gg.sdk.createBannerAd(this.onBannerAdError.bind(this), this.onBannerAdLoaded.bind(this));
                setTimeout(() => {
                    gg.sdk.createVideoAd();
                }, 3e3);
                setTimeout(() => {
                    if (gg.sdk.checkInterstitialAdOpen()) {
                        gg.sdk.createInterstitialAd(null, () => {
                            this.onInterstitialAdClose();
                        }, () => {
                            this.onInterstitialAdError();
                        });
                    }
                }, 5e3);
                this.showRecommendExport(gg.sdk.checkShowVideoAdAfterLaunchOpen());
            }
            gg.event.on(GamePlayEvent.GameStart, this, this.onGameStart);
            gg.event.on(GamePlayEvent.GameOver, this, this.onGameOver);
            gg.event.on(GamePlayEvent.DisplayGameSceneAd, this, this.onDisplayExportAds);
            gg.event.on(AppEvent.OnShow, this, this.OnAppShow);
            gg.event.on(ExportAdEvent.NavigationFail, this, () => {
                this.showRecommendExport(false);
            });
            gg.event.on(AdEvent.VideoError, this, this.onVideoAdError);
            gg.event.on(AdEvent.VideoClosed, this, this.onVideoAdClose);
        }
        onInterstitialAdClose() {
            gg.event.event(GamePlayEvent.CloseInterstitialAd);
            GameLog.ad(AdTypes.Interstitial, StateTypes.Success);
        }
        onInterstitialAdError() {
            gg.event.event(GamePlayEvent.CloseInterstitialAd);
            GameLog.ad(AdTypes.Interstitial, StateTypes.Failed);
        }
        onVideoAdClose() {
            GameLog.ad(AdTypes.Video, StateTypes.Success);
        }
        onVideoAdError() {
            GameLog.ad(AdTypes.Video, StateTypes.Failed);
        }
        onBannerAdLoaded() {
            GameLog.ad(AdTypes.Banner, StateTypes.Success);
        }
        onBannerAdError() {
            GameLog.ad(AdTypes.Banner, StateTypes.Failed);
        }
        addExportAds() {
            gg.res.loadScene(Components.GameSceneAd).then(view => {
                if (view && this.adBox) this.adBox.addChild(view);
            });
        }
        removeExportAds() {
            if (this.adBox) this.adBox.removeChildren();
        }
        onDisplayExportAds(data) {
            if (!data) return;
            if (!data.isShow) {
                this.removeExportAds();
            } else {
                if (this.adBox.numChildren == 0) this.addExportAds();
            }
        }
        OnAppShow(data) {
            if (data && data.referrerInfo) {
                let items = gg.data.getStorage(StorageKey.ExportSuccess) || "";
                if (items.indexOf(data.referrerInfo.appId) < 0) {
                    items += `,${data.referrerInfo.appId}`;
                    gg.data.setStorage(StorageKey.ExportSuccess, items);
                }
            }
            this.showRecommendExport();
        }
        onGameStart() {
            this.removeExportAds();
        }
        onGameOver(data) {
            let delay = this.showTryExport() ? 100 : 0;
            setTimeout(() => {
                delay = this.showFreeGift(Components.FreeGiftFixCarDialog) ? delay + 100 : 0;
                setTimeout(() => {
                    this.showSettle(data);
                }, delay + 100);
            }, delay);
        }
        showSettle(data) {
            if (!data) return;
            gg.res.loadDialog(Components[`SettleDialog${gg.ui.checkSceneIsHorizontal() ? "H" : "V"}`]).then(dialog => {
                if (!dialog) return;
                let comp = dialog.getComponent(SettleDialog);
                if (comp) {
                    comp.init(data);
                }
                gg.ui.showDialog(dialog, true, true, true);
            });
        }
        showRecommendExport(isShowVideoAd = false) {
          // if (gg.sdk.checkExportAdTypeOpen(ExportAdType.Recommend)) {
          //     gg.ui.showDialogWithURL(Components.RecommendDialog, dialog => {
          //         if (dialog && isShowVideoAd) {
          //             let comp = dialog.getComponent(RecommendDialog);
          //             if (comp) {
          //                 comp.onClose = (() => {
          //                     gg.sdk.showVideoAd(data => {
          //                         this.showFreeGift(Components.FreeGiftBagDialog);
          //                     }, null);
          //                 });
          //             }
          //         }
          //     }, false, false, true);
          // }
        }
        showTryExport() {
            let isShow = gg.sdk.checkExportAdTypeOpen(ExportAdType.TryExport);
            if (isShow) {
               // gg.ui.showDialogWithURL(Components.TryExportDialog, null, true, true, true);
            }
            return isShow;
        }
        showFreeGift(url) {
            let isShow = gg.sdk.checkFreeGiftOpen();
            if (isShow) {
                gg.ui.showDialogWithURL(url, null, true, true, true);
            }
            return isShow;
        }
        onDestroy() {
            gg.event.offAllCaller(this);
            console.log("destroy");
        }
    }
    class ResMgr {
        constructor() {
            ResMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new ResMgr();
            }
            return this._instance;
        }
        setNativeFiles() {
            if (NativeFiles) {
                switch (gg.sdk.getPlatformType()) {
                  case EPlatformType.wx:
                    Laya.MiniAdpter.nativefiles = NativeFiles;
                    break;

                  case EPlatformType.vivo:
                    Laya.VVMiniAdapter.nativefiles = NativeFiles;
                    break;

                  case EPlatformType.oppo:
                    Laya.QGMiniAdapter.nativefiles = NativeFiles;
                    break;

                  case EPlatformType.qq:
                    Laya["QQMiniAdapter"].nativefiles = NativeFiles;
                    break;

                  default:
                    break;
                }
            }
        }
        setBasePath(resVersion) {
            if (!gg.sdk.iswx() && !IsLoadRemoteRes) return;
            let url = `${RemoteUrls[IsDebugMode ? 1 : 0]}${GameId}_res`;
            if (resVersion && resVersion.length > 0) url += "_" + resVersion;
            Laya.URL.basePath = `${url}/`;
            console.log("res url->", Laya.URL.basePath);
        }
        loadJSON(url) {
            return new Promise((resolve, reject) => {
                Laya.loader.load(url, Laya.Handler.create(this, data => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }), null, Laya.Loader.JSON);
            });
        }
        loadImage(url) {
            return new Promise((resolve, reject) => {
                Laya.loader.load(url, Laya.Handler.create(this, data => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }), null, Laya.Loader.IMAGE);
            });
        }
        loadAtlas(url) {
            return new Promise((resolve, reject) => {
                Laya.loader.load(url, Laya.Handler.create(this, data => {
                    if (data) {
                        resolve(data);
                    } else {
                        reject();
                    }
                }), null, Laya.Loader.ATLAS);
            });
        }
        loadScene(url) {
            return new Promise((resolve, reject) => {
                Laya.Scene.load(url, Laya.Handler.create(this, scene => {
                    !scene ? reject() : resolve(scene);
                }));
            });
        }
        loadDialog(url) {
            return new Promise((resolve, reject) => {
                Laya.Dialog.load(url, Laya.Handler.create(this, dialog => {
                    !dialog ? reject() : resolve(dialog);
                }));
            });
        }
        loadD3Res(url) {
            return new Promise((resolve, reject) => {
                Laya.loader.create(url, Laya.Handler.create(this, data => {
                    !data ? reject() : resolve(data);
                }));
            });
        }
        preloadD3Res(urls) {
            return new Promise((resolve, reject) => {
                Laya.loader.create(urls, Laya.Handler.create(this, isComplete => {
                    !isComplete ? reject() : resolve();
                }));
            });
        }
        clearRes(url) {
            Laya.loader.clearRes(url);
        }
        getRes(url) {
            return Laya.loader.getRes(url);
        }
    }
    class MRes extends Laya.Script {
        constructor() {
            super();
            this._vLevelPrefabs = null;
            this._gameScene = null;
            this._vCarPrefabs = null;
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new MRes();
            }
            return this._instance;
        }
        getGameScene() {
            return this._gameScene;
        }
        getCarPrefab(index) {
            return this._vCarPrefabs[index].clone();
        }
        getLevelPrefab(index) {
            this._loadLevel();
            let sprite = this._vLevelPrefabs[index].clone();
            return sprite;
        }
        initGameRes() {
            this._loadGameScene();
            this._loadCarPrefabs();
            this._loadLevelPrefabs();
        }
        _loadLevel() {
            let data = gg.data.getGameConf();
            let userData = gg.player.getData();
            for (let index = userData.level, nCount = 0; nCount <= 2; index++, nCount++) {
                if (index > data.maxLevel) index = 1;
                console.log("======================")
                console.log(index)
                if (!this._vLevelPrefabs[index]) {
                    let name = "checkpoint" + index;
                    let url = `res/d3/checkpoint/${name}/Conventional/scene_game.lh`;
                    Laya.loader.create(url, Laya.Handler.create(this, function(scene) {
                        let prefab = scene.getChildByName(name);
                        if (prefab) this._vLevelPrefabs[index] = prefab;
                    }));
                }
            }
        }
        clearLevel(index) {
            let name = "checkpoint" + index;
            let url = `res/d3/checkpoint/${name}/Conventional/scene_game.lh`;
            this._vLevelPrefabs[index] = null;
            Laya.loader.clearRes(url);
        }
        _loadGameScene() {
            let scene = ResMgr.getInstance().getRes("res/d3/scene_game/Conventional/scene_game.ls");
            this._gameScene = scene;
        }
        _loadLevelPrefabs() {
            let data = gg.data.getGameConf();
            let userData = gg.player.getData();
            this._vLevelPrefabs = [];
            for (let index = userData.level, nCount = 0; nCount <= 2; index++, nCount++) {
                if (index > data.maxLevel) index = 1;
                let name = "checkpoint" + index;
                let url = `res/d3/checkpoint/${name}/Conventional/scene_game.lh`;
                let scene = ResMgr.getInstance().getRes(url);
                let prefab = scene.getChildByName(name);
                if (prefab) this._vLevelPrefabs[index] = prefab;
            }
        }
        _loadCarPrefabs() {
            this._vCarPrefabs = [];
            let data = gg.data.getGameConf();
            for (let index = 1; index <= data.carCount; index++) {
                let name = "car" + index;
                let url = `res/d3/car/${name}/Conventional/scene_game.lh`;
                let scene = ResMgr.getInstance().getRes(url);
                let prefab = scene.getChildByName("mesh_" + name);
                this._vCarPrefabs[index] = prefab;
            }
        }
        onEnable() {}
        onDisable() {}
    }
    MRes._instance = null;
    var RoadDirectionType;
    (function(RoadDirectionType) {
        RoadDirectionType[RoadDirectionType["Right"] = 0] = "Right";
        RoadDirectionType[RoadDirectionType["Left"] = 1] = "Left";
        RoadDirectionType[RoadDirectionType["Up"] = 2] = "Up";
    })(RoadDirectionType || (RoadDirectionType = {}));
    var EConstUiPageType;
    (function(EConstUiPageType) {
        EConstUiPageType[EConstUiPageType["NONE"] = 0] = "NONE";
        EConstUiPageType[EConstUiPageType["HOME_PAGE"] = 1] = "HOME_PAGE";
        EConstUiPageType[EConstUiPageType["GAME_PAGE"] = 2] = "GAME_PAGE";
    })(EConstUiPageType || (EConstUiPageType = {}));
    var EConstMoveType;
    (function(EConstMoveType) {
        EConstMoveType[EConstMoveType["NONE"] = 0] = "NONE";
        EConstMoveType[EConstMoveType["FORWARD_DIR"] = 1] = "FORWARD_DIR";
        EConstMoveType[EConstMoveType["QUEEN_DIR"] = 2] = "QUEEN_DIR";
        EConstMoveType[EConstMoveType["LEFT_DIR"] = 10] = "LEFT_DIR";
        EConstMoveType[EConstMoveType["RIGHT_DIR"] = 11] = "RIGHT_DIR";
    })(EConstMoveType || (EConstMoveType = {}));
    var EConstCameraType;
    (function(EConstCameraType) {
        EConstCameraType[EConstCameraType["NONE"] = 0] = "NONE";
        EConstCameraType[EConstCameraType["FOLLOW_FORWARD"] = 1] = "FOLLOW_FORWARD";
        EConstCameraType[EConstCameraType["FOLLOW_GUEEN"] = 2] = "FOLLOW_GUEEN";
        EConstCameraType[EConstCameraType["CHANGE_FOEWARD"] = 3] = "CHANGE_FOEWARD";
        EConstCameraType[EConstCameraType["CHANGE_GUEEN"] = 4] = "CHANGE_GUEEN";
    })(EConstCameraType || (EConstCameraType = {}));
    var EConstBodyTag;
    (function(EConstBodyTag) {
        EConstBodyTag[EConstBodyTag["NONE"] = 0] = "NONE";
        EConstBodyTag[EConstBodyTag["BOX"] = 1] = "BOX";
        EConstBodyTag[EConstBodyTag["WALL"] = 2] = "WALL";
        EConstBodyTag[EConstBodyTag["CAR_BODY"] = 3] = "CAR_BODY";
        EConstBodyTag[EConstBodyTag["CAR_WHEEL"] = 4] = "CAR_WHEEL";
        EConstBodyTag[EConstBodyTag["ROAD"] = 5] = "ROAD";
        EConstBodyTag[EConstBodyTag["OBS"] = 6] = "OBS";
        EConstBodyTag[EConstBodyTag["OHTER"] = 7] = "OHTER";
    })(EConstBodyTag || (EConstBodyTag = {}));
    var EConstObsType;
    (function(EConstObsType) {
        EConstObsType[EConstObsType["NONE"] = 0] = "NONE";
        EConstObsType[EConstObsType["WALL"] = 1] = "WALL";
        EConstObsType[EConstObsType["CYLINDER"] = 2] = "CYLINDER";
        EConstObsType[EConstObsType["PILLAR"] = 3] = "PILLAR";
        EConstObsType[EConstObsType["POLE"] = 4] = "POLE";
        EConstObsType[EConstObsType["MOVE_WALL"] = 5] = "MOVE_WALL";
    })(EConstObsType || (EConstObsType = {}));
    var BodyType;
    (function(BodyType) {
        BodyType[BodyType["Box"] = 1001] = "Box";
        BodyType[BodyType["CarBody"] = 1002] = "CarBody";
        BodyType[BodyType["CarWheel"] = 1003] = "CarWheel";
        BodyType[BodyType["Road"] = 1004] = "Road";
        BodyType[BodyType["Fence"] = 1005] = "Fence";
        BodyType[BodyType["Terminal"] = 1006] = "Terminal";
        BodyType[BodyType["StaticObj"] = 1007] = "StaticObj";
        BodyType[BodyType["UnStaticObj"] = 1008] = "UnStaticObj";
    })(BodyType || (BodyType = {}));
    class PageBase {
        constructor() {
            this.pageView = null;
        }
        Show() {
            this._showPage();
            Laya.stage.addChild(this.pageView);
        }
        Hide() {
            this._hidePage();
            Laya.stage.removeChild(this.pageView);
        }
        onEnable() {}
        onDisable() {}
    }
    class MCamera {
        constructor() {
            this.maxView = null;
            this.camera = null;
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new MCamera();
            }
            return this._instance;
        }
        init(camera) {
            this.camera = camera;
        }
        move(dis) {
            let pos = new Laya.Vector3();
            Laya.Vector3.add(this.camera.transform.position, dis, pos);
            this.camera.transform.position = pos;
        }
        setTarget(sprite, followPoint = null) {
            let spritePoint = new Laya.Vector3(sprite.transform.position.x, sprite.transform.position.y, sprite.transform.position.z);
            let pos = new Laya.Vector3();
            this.camera.transform.localRotationEuler = new Laya.Vector3(0, 0, 0);
            if (followPoint) {
                this.camera.transform.position = new Laya.Vector3(followPoint.x, followPoint.y, followPoint.z);
            }
            this.camera.transform.lookAt(spritePoint, new Laya.Vector3(0, 1, 0));
        }
        follow(sprite, followPoint = null) {
            let spritePoint = new Laya.Vector3(sprite.transform.position.x, sprite.transform.position.y, sprite.transform.position.z);
            if (followPoint) {
                let pos = new Laya.Vector3();
                Laya.Vector3.lerp(this.camera.transform.position, followPoint, .1, pos);
                this.camera.transform.position = pos;
            }
            this.camera.transform.lookAt(spritePoint, new Laya.Vector3(0, 1, 0));
        }
        lookPoint(point) {
            this.camera.transform.lookAt(point, new Laya.Vector3(0, 1, 0));
            this.camera.transform.localRotationEulerX += 20;
        }
    }
    MCamera._instance = null;
    class ObsBase extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.sprite = null;
            this.cannonBody = null;
            this.bodyMesh = null;
        }
        init() {
            this.sprite = this.owner;
        }
        bodyAni() {}
        _layaTransfromToCannon(layaMesh, cannonBody) {
            if (!cannonBody || !layaMesh) return;
            cannonBody.position = new CANNON.Vec3(layaMesh.transform.position.x, layaMesh.transform.position.y, layaMesh.transform.position.z);
            cannonBody.quaternion = new CANNON.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
        }
    }
    class MoveWall extends ObsBase {
        constructor() {
            super(...arguments);
            this.wallType = 1;
            this.speed = 6;
            this.dis = 1;
        }
        init() {
            super.init();
        }
        _updateAni() {
            if (!this.cannonBody || !this.bodyMesh) return;
            if (!this.cannonBody["obsPlay"]) return;
            if (this.wallType == 1) {
                this.bodyMesh.transform.localPositionX += this.speed * .02;
                if (this.bodyMesh.transform.localPositionX >= this.dis) {
                    this.bodyMesh.transform.localPositionX = this.dis;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 2;
                    }.bind(this), 5e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            } else if (this.wallType == 2) {
                this.bodyMesh.transform.localPositionX -= this.speed * .02;
                if (this.bodyMesh.transform.localPositionX <= -20) {
                    this.bodyMesh.transform.localPositionX = -20;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 1;
                    }.bind(this), 5e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            }
        }
        onUpdate() {
            this._updateAni();
        }
    }
    class Pillar extends ObsBase {
        constructor() {
            super(...arguments);
            this.wallType = 2;
            this.speed = 3;
            this.maxY = 0;
            this.minY = -5.5;
        }
        init() {
            super.init();
        }
        _updateAni() {
            if (!this.cannonBody || !this.bodyMesh) return;
            if (!this.cannonBody["obsPlay"]) return;
            if (this.wallType == 1) {
                this.bodyMesh.transform.localPositionY += this.speed * .02;
                if (this.bodyMesh.transform.localPositionY >= this.maxY) {
                    this.bodyMesh.transform.localPositionY = this.maxY;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 2;
                    }.bind(this), 3e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            } else if (this.wallType == 2) {
                this.bodyMesh.transform.localPositionY -= this.speed * .02;
                if (this.bodyMesh.transform.localPositionY <= this.minY) {
                    this.bodyMesh.transform.localPositionY = this.minY;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 1;
                    }.bind(this), 6e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            }
        }
        onUpdate() {
            this._updateAni();
        }
    }
    class Pole extends ObsBase {
        constructor() {
            super(...arguments);
            this.anchorAni = null;
            this.wallType = 1;
            this.speed = 20;
            this.minZ = 0;
            this.maxZ = 90;
        }
        init() {
            super.init();
        }
        _updateAni() {
            if (!this.cannonBody || !this.bodyMesh) return;
            if (!this.cannonBody["obsPlay"]) return;
            if (this.wallType == 1) {
                this.anchorAni.transform.localRotationEulerZ += this.speed * .02;
                if (this.anchorAni.transform.localRotationEulerZ >= this.maxZ) {
                    this.anchorAni.transform.localRotationEulerZ = this.maxZ;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 2;
                    }.bind(this), 5e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            } else if (this.wallType == 2) {
                this.anchorAni.transform.localRotationEulerZ -= this.speed * .02;
                if (this.anchorAni.transform.localRotationEulerZ <= this.minZ) {
                    this.anchorAni.transform.localRotationEulerZ = this.minZ;
                    this.wallType = 3;
                    setTimeout(function() {
                        this.wallType = 1;
                    }.bind(this), 3e3);
                }
                this._layaTransfromToCannon(this.bodyMesh, this.cannonBody);
            }
        }
        onUpdate() {
            this._updateAni();
        }
    }
    const isDebug = false;
    class CannonControl extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.cannonWorld = null;
            this.gameScene = null;
            this.vLayaMesh = null;
            this._vCarWheelMeshs = [];
            this._carBodyCollider = null;
            this._vWheelCollider = [];
            this._vRoadCollider = [];
            this._obsCollider = [];
            this.vCannonBody = null;
            this.vehicle = null;
            this._carBody = null;
            this._vObsBody = null;
            this.bUpdateWorld = false;
            this._whellOption = {
                radius: .2,
                directionLocal: new CANNON.Vec3(0, 0, -1),
                suspensionStiffness: 30,
                suspensionRestLength: .2,
                maxSuspensionTravel: .3,
                frictionSlip: 1,
                dampingRelaxation: 3,
                dampingCompression: 5,
                maxSuspensionForce: 1e5,
                rollInfluence: 1,
                axleLocal: new CANNON.Vec3(0, 1, 0),
                chassisConnectionPointLocal: new CANNON.Vec3(1, 1, 0),
                customSlidingRotationalSpeed: -30,
                useCustomSlidingRotationalSpeed: true
            };
        }
        static get instance() {
            return this._instance;
        }
        initCannonWorld() {
            CannonControl._instance = this;
            this._createWorld();
        }
        _createWorld() {
            this.cannonWorld = new CANNON.World();
            this.cannonWorld.broadphase = new CANNON.SAPBroadphase(this.cannonWorld);
            this.cannonWorld.gravity.set(0, -10, 0);
            this.cannonWorld.defaultContactMaterial.friction = 0;
            this.vCannonBody = [];
            this.vLayaMesh = [];
            var groundMaterial = new CANNON.Material("groundMaterial");
            var wheelMaterial = new CANNON.Material("wheelMaterial");
            var wheelGroundContactMaterial = new CANNON.ContactMaterial(wheelMaterial, groundMaterial, {
                friction: 0,
                restitution: 0,
                contactEquationStiffness: 1e3
            });
            this.cannonWorld.addContactMaterial(wheelGroundContactMaterial);
        }
        cannonAddMaterial() {
            this.cannonWorld;
        }
        removeCar() {
            this.vehicle.removeFromWorld(this.cannonWorld);
            this._vCarWheelMeshs = [];
            this._carBody = null;
        }
        resetWorld() {
            this.bUpdateWorld = false;
            for (let index = 0; index < this.cannonWorld.bodies.length; index++) {
                let element = this.cannonWorld.bodies[index];
                element.sleep();
                this.cannonWorld.remove(element);
            }
            if (this._carBody) {
                this.cannonWorld.remove(this._carBody);
            }
            this._createWorld();
            if (this._vRoadCollider.length) {
                for (let index = 0; index < this._vRoadCollider.length; index++) {
                    let element = this._vRoadCollider[index];
                    element.removeSelf();
                    element.destroy();
                }
            }
            this.vCannonBody = [];
            this.vLayaMesh = [];
            this._vCarWheelMeshs = [];
            this._vRoadCollider = [];
            this._vWheelCollider = [];
            this.vehicle = null;
            this._carBody = null;
        }
        initCar(carMesh, carData = null) {
            let carBody = carMesh.getChildByName("mesh_car");
            let extent = carBody.meshRenderer.bounds.getExtent();
            let v3 = new CANNON.Vec3(extent.x * .9, extent.y * .8, extent.z * .7);
            let chassisShape = new CANNON.Box(v3);
            let mat = new CANNON.Material("wheelMaterial");
            mat.friction = 0;
            mat.restitution = .5;
            let chas = new CANNON.Body({
                mass: 3e3,
                material: mat
            });
            chas["tag"] = EConstBodyTag.CAR_BODY;
            chas.collisionResponse = true;
            chas.addShape(chassisShape);
            chas.position.set(carMesh.transform.position.x, carMesh.transform.position.y, carMesh.transform.position.z);
            let vehicleOptions = {
                chassisBody: chas
            };
            let vehicle = new CANNON.RaycastVehicle(vehicleOptions);
            vehicle.addToWorld(this.cannonWorld);
            this.cannonWorld.addBody(vehicle.chassisBody);
            this._layaTransfromToCannon(carBody, chas);
            this._relevanceLayaAddCannon(carBody, chas, EConstBodyTag.CAR_BODY);
            let vStrTmp = [ "forward_l", "forward_r", "back_door_l", "back_door_r" ];
            for (let index = 0; index < vStrTmp.length; index++) {
                let wheelMesh = carMesh.getChildByName(vStrTmp[index]);
                let wheelOptions = this._whellOption;
                let extent = wheelMesh.meshRenderer.bounds.getExtent();
                wheelOptions.radius = extent.x;
                let wheelLocalPos = new CANNON.Vec3(wheelMesh.transform.localPositionX, wheelMesh.transform.localPositionY, wheelMesh.transform.localPositionZ);
                wheelOptions.chassisConnectionPointLocal = wheelLocalPos;
                vehicle.addWheel(wheelOptions);
                this._vCarWheelMeshs.push(wheelMesh);
            }
            this.vehicle = vehicle;
            return vehicle;
        }
        updateWorld() {
            this.cannonWorld.step(.02);
            this._updateAllTransfrom();
        }
        layaMeshToCannonBody(layaMesh, tag) {
            let meshRotate = new Laya.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
            layaMesh.transform.rotation = new Laya.Quaternion(0, 0, 0, 0);
            let extent = layaMesh.meshRenderer.bounds.getExtent();
            let bodyOptions = {
                mass: 0,
                material: new CANNON.Material("groundMaterial")
            };
            let body = new CANNON.Body(bodyOptions);
            let vec3 = new CANNON.Vec3(extent.x, extent.y, extent.z);
            let shape = new CANNON.Box(vec3);
            body.addShape(shape);
            layaMesh.transform.rotation = meshRotate;
            this.vCannonBody.push(body);
            this.cannonWorld.addBody(body);
            this._layaTransfromToCannon(layaMesh, body);
            body["tag"] = tag;
            return body;
        }
        createBodyFromCannon(layaMesh, bodyType) {
            let obs = null;
            switch (bodyType) {
              case EConstObsType.WALL:
                this._createWall(layaMesh, EConstBodyTag.WALL);
                break;

              case EConstObsType.CYLINDER:
                this._createCylinder(layaMesh, EConstBodyTag.WALL);
                break;

              case EConstObsType.MOVE_WALL:
                obs = this._createMoveWall(layaMesh, EConstBodyTag.OBS);
                break;

              case EConstObsType.PILLAR:
                obs = this._createPillar(layaMesh, EConstBodyTag.OBS);
                break;

              case EConstObsType.POLE:
                obs = this._createPole(layaMesh, EConstBodyTag.OBS);
                break;

              default:
                break;
            }
            return obs;
        }
        _createWall(layaMesh, tag) {
            let body = this._createBoxBodyFromCannon(layaMesh, tag);
            this.vCannonBody.push(body);
        }
        _createCylinder(layaSprite, tag) {
            let cylind = layaSprite.getChildByName("body");
            let body = this._createCylinderBodyFromCannon(cylind, tag);
            this.vCannonBody.push(body);
        }
        _createMoveWall(sprite, tag) {
            let obs = sprite.addComponent(MoveWall);
            obs.init();
            let bodyMesh = sprite.getChildByName("body");
            let cannonBody = this._createBoxBodyFromCannon(bodyMesh, tag);
            obs.cannonBody = cannonBody;
            obs.bodyMesh = bodyMesh;
            cannonBody["obsPlay"] = true;
            return obs;
        }
        _createPillar(sprite, tag) {
            let obs = sprite.addComponent(Pillar);
            obs.init();
            let bodyMesh = sprite.getChildByName("body");
            let cannonBody = this._createCylinderBodyFromCannon(bodyMesh, tag);
            obs.cannonBody = cannonBody;
            obs.bodyMesh = bodyMesh;
            cannonBody["obsPlay"] = true;
            return obs;
        }
        _createPole(sprite, tag) {
            let obs = sprite.addComponent(Pole);
            obs.init();
            let anchor = sprite.getChildByName("anchor");
            let bodyMesh = anchor.getChildByName("body");
            obs.anchorAni = anchor;
            let cannonBody = this._createBoxBodyFromCannon(bodyMesh, tag);
            obs.cannonBody = cannonBody;
            obs.bodyMesh = bodyMesh;
            cannonBody["obsPlay"] = true;
            return obs;
        }
        _createBoxBodyFromCannon(layaMesh, tag) {
            let meshRotate = new Laya.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
            layaMesh.transform.rotation = new Laya.Quaternion(0, 0, 0, 0);
            let extent = layaMesh.meshRenderer.bounds.getExtent();
            let bodyOptions = {
                mass: 0,
                material: new CANNON.Material("groundMaterial")
            };
            let body = new CANNON.Body(bodyOptions);
            let vec3 = new CANNON.Vec3(extent.x, extent.y, extent.z);
            let shape = new CANNON.Box(vec3);
            body.addShape(shape);
            layaMesh.transform.rotation = meshRotate;
            this.cannonWorld.addBody(body);
            body["tag"] = tag;
            body["layaMesh"] = layaMesh;
            this._layaTransfromToCannon(layaMesh, body);
            if (isDebug) {
                this._createBoxMesh(extent);
            }
            return body;
        }
        _createCylinderBodyFromCannon(layaMesh, tag) {
            let meshRotate = new Laya.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
            layaMesh.transform.rotation = new Laya.Quaternion(0, 0, 0, 0);
            let extent = layaMesh.meshRenderer.bounds.getExtent();
            let bodyOptions = {
                mass: 0,
                material: new CANNON.Material("groundMaterial")
            };
            let body = new CANNON.Body(bodyOptions);
            let vec3 = new CANNON.Vec3(extent.x * .8, extent.y, extent.z * .8);
            let shape = new CANNON.Box(vec3);
            let cyl = new CANNON.Cylinder(extent.x, extent.x, extent.x, 3);
            body.addShape(shape);
            layaMesh.transform.rotation = meshRotate;
            this.cannonWorld.addBody(body);
            this._layaTransfromToCannon(layaMesh, body);
            body["tag"] = tag;
            body["layaMesh"] = layaMesh;
            return body;
        }
        _createBoxMesh(bounds) {
            let bodyCollider = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(bounds.x, bounds.y, bounds.z));
            this.gameScene.addChild(bodyCollider);
            return bodyCollider;
        }
        _relevanceLayaAddCannon(layaMesh, cannonBody, bodyType = EConstBodyTag.BOX) {
            cannonBody["layaMesh"] = layaMesh;
            layaMesh["cannonBody"] = cannonBody;
            if (EConstBodyTag.CAR_BODY == bodyType) {
                this._carBody = cannonBody;
                return;
            } else if (EConstBodyTag.CAR_WHEEL == bodyType) {
                return;
            }
            let index = this.vCannonBody.push(cannonBody);
            this.vLayaMesh.push(layaMesh);
            return index;
        }
        _layaTransfromToCannon(layaMesh, cannonBody) {
            if (!cannonBody || !layaMesh) return;
            cannonBody.position = new CANNON.Vec3(layaMesh.transform.position.x, layaMesh.transform.position.y, layaMesh.transform.position.z);
            cannonBody.quaternion = new CANNON.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
        }
        _cannonTransfromToLaya(cannonBody, layaMesh) {
            if (!cannonBody || !layaMesh) return;
            layaMesh.transform.position = new Laya.Vector3(cannonBody.position.x, cannonBody.position.y, cannonBody.position.z);
            layaMesh.transform.rotation = new Laya.Quaternion(cannonBody.quaternion.x, cannonBody.quaternion.y, cannonBody.quaternion.z, cannonBody.quaternion.w);
        }
        _updateAllTransfrom() {
            for (let index = 0; index < this.vCannonBody.length; index++) {
                let cannonBody = this.vCannonBody[index];
                let layaMesh = this.vLayaMesh[index];
                let collider = this._vRoadCollider[index];
            }
            if (this.vehicle) {
                for (let index = 0; index < this.vehicle.wheelInfos.length; index++) {
                    this.vehicle.updateWheelTransform(index);
                    let wheel = this.vehicle.wheelInfos[index];
                    let wheelTrans = wheel.worldTransform;
                    let layaMesh = this._vCarWheelMeshs[index];
                    let pos = new Laya.Vector3(wheelTrans.position.x, wheelTrans.position.y, wheelTrans.position.z);
                    let rotate = new Laya.Quaternion(wheelTrans.quaternion.x, wheelTrans.quaternion.y, wheelTrans.quaternion.z, wheelTrans.quaternion.w);
                    layaMesh.transform.position = pos;
                    layaMesh.transform.rotation = rotate;
                }
                let carBodyMesh = this._carBody["layaMesh"];
                this._cannonTransfromToLaya(this._carBody, carBodyMesh);
            }
        }
        onUpdate() {
            if (!this.bUpdateWorld) return;
            let dt = 20 / 1e3;
            this.cannonWorld.step(dt);
            this._updateAllTransfrom();
        }
    }
    CannonControl._instance = null;
    class BezierTools {
        static CreateBezierPoints(anchorpoints, pointsAmount) {
            var points = [];
            for (var i = 0; i < pointsAmount; i++) {
                var point = this.MultiPointBezier(anchorpoints, i / pointsAmount);
                points.push(point);
            }
            return points;
        }
        static MultiPointBezier(points, t) {
            let len = points.length;
            let x = 0, y = 0, z = 0;
            for (let i = 0; i < len; i++) {
                let point = points[i];
                x += point.x * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
                y += point.y * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
                z += point.z * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
            }
            return new Laya.Vector3(x, y, z);
        }
        static erxiangshi(start, end) {
            let cs = 1, bcs = 1;
            while (end > 0) {
                cs *= start;
                bcs *= end;
                start--;
                end--;
            }
            return cs / bcs;
        }
    }
    class Car extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.sprite = null;
            this.carBodyMesh = null;
            this.cannonBody = null;
            this.cannonVehicle = null;
            this.bCouldMove = false;
            this.bDeath = false;
            this.bStop = false;
            this._cameraGueen = null;
            this._cameraForward = null;
            this._nCameraType = EConstCameraType.FOLLOW_GUEEN;
            this._vCameraMovePath = null;
            this.vStrTmp = [ "forward_l", "forward_r", "back_door_l", "back_door_r" ];
            this._vCarWheelMeshs = [];
            this.rotateType = null;
            this.moveType = null;
            this._nRotate = 0;
            this._nMovePower = 5e3;
            this._nMaxMovePower = 1e3;
            this._nAddPower = 100;
            this._nBrekePower = 1e3;
            this._nAddRotate = 1;
            this._nMaxRotate = .8;
            this._nMaxMoveForce = 15;
            this._weaponBox = null;
        }
        init() {
            this.sprite = this.owner;
            this.carBodyMesh = this.sprite.getChildByName("mesh_car");
            this.bCouldMove = true;
            this._cameraGueen = this.carBodyMesh.getChildByName("camera_g");
            for (let index = 0; index < this.vStrTmp.length; index++) {
                let str = this.vStrTmp[index];
                let wheel = this.sprite.getChildByName(str);
                this._vCarWheelMeshs.push(wheel);
            }
            this.cannonVehicle = CannonControl.instance.initCar(this.sprite);
            this.cannonVehicle.chassisBody.addEventListener("collide", function(e) {
                if (e.body.tag == EConstBodyTag.WALL) {
                    this._death();
                    console.log("death");
                } else if (e.body.tag == EConstBodyTag.OBS) {
                    this._death();
                    console.log("death");
                    e.body.obsPlay = false;
                }
            }.bind(this));
        }
        setMoveType(value) {
            if (this.moveType == value) return;
            this.moveType = value;
        }
        getForward() {
            let dir = new Laya.Vector3();
            this.sprite.transform.getForward(dir);
            return dir;
        }
        setBodyEnler(enler) {
            this.cannonVehicle.chassisBody.quaternion.setFromEuler(enler.x, enler.y, enler.z);
        }
        setCannonBodyRotation(quaternion) {
            let quat = new CANNON.Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
            this.cannonVehicle.chassisBody.quaternion = quat;
        }
        setCannonBodyPos(position) {
            let pos = new CANNON.Vec3(position.x, position.y, position.z);
            this.cannonVehicle.chassisBody.position = pos;
        }
        clearCarSpeed() {
            this.cannonBody.velocity = new CANNON.Vec3(0, 0, 0);
        }
        setRotate(coef) {
            this._nRotate = this._nMaxRotate * coef;
        }
        _createCamereBzr(bForward) {
            let cameraPos = new Laya.Vector3();
            Laya.Vector3.transformV3ToV3(MCamera.instance.camera.transform.position, this.sprite.transform.localMatrix, cameraPos);
            let points = [];
            let point = new Laya.Vector3();
            point.x = cameraPos.x >= 0 ? 6 : -6;
            point.y = this._cameraGueen.transform.localPositionY;
            point.z = 0;
            points.push(this._cameraGueen.transform.localPosition);
            points.push(point);
            points.push(this._cameraForward.transform.localPosition);
            if (!bForward) {
                points.reverse();
            }
            this._vCameraMovePath = BezierTools.CreateBezierPoints(points, 30);
        }
        _updateCamera() {
            if (this._nCameraType == EConstCameraType.FOLLOW_GUEEN) {
                MCamera.instance.follow(this.carBodyMesh, new Laya.Vector3(this._cameraGueen.transform.position.x, this._cameraGueen.transform.position.y, this._cameraGueen.transform.position.z));
            } else if (this._nCameraType == EConstCameraType.FOLLOW_FORWARD) {
                MCamera.instance.follow(this.carBodyMesh, new Laya.Vector3(this._cameraForward.transform.position.x, this._cameraForward.transform.position.y, this._cameraForward.transform.position.z));
            }
            if (this._nCameraType >= 3) {
                if (!this._vCameraMovePath.length) {
                    if (EConstCameraType.CHANGE_FOEWARD == this._nCameraType) this._nCameraType = EConstCameraType.FOLLOW_FORWARD;
                    if (EConstCameraType.CHANGE_GUEEN == this._nCameraType) this._nCameraType = EConstCameraType.FOLLOW_GUEEN;
                    return;
                }
                let point = this._vCameraMovePath[0];
                let pos = new Laya.Vector3();
                Laya.Vector3.transformV3ToV3(point, this.carBodyMesh.transform.worldMatrix, pos);
                let dir = new Laya.Vector3();
                Laya.Vector3.subtract(pos, MCamera.instance.camera.transform.position, dir);
                let dis = Laya.Vector3.scalarLength(dir);
                if (dis < 13 * .017) {
                    this._vCameraMovePath.shift();
                }
                Laya.Vector3.normalize(dir, dir);
                let moveDir = new Laya.Vector3();
                Laya.Vector3.scale(dir, 10 * .017, moveDir);
                let cPos = new Laya.Vector3();
                Laya.Vector3.add(MCamera.instance.camera.transform.position, moveDir, cPos);
                MCamera.instance.camera.transform.position = cPos;
                MCamera.instance.lookPoint(this.carBodyMesh.transform.position);
            }
        }
        _death() {
            if (this.bDeath) return;
            setTimeout(function() {
                gg.event.event(GamePlayEvent.EnemyWin);
                this._bDeath = true;
            }.bind(this), 1e3);
        }
        _updatePower() {}
        _updataRotate() {
            if (EConstMoveType.LEFT_DIR == this.rotateType) {
                this._nRotate += this._nAddRotate * Laya.timer.delta / 1e3;
                if (this._nRotate > this._nMaxRotate) {
                    this._nRotate = this._nMaxRotate;
                }
            } else if (EConstMoveType.RIGHT_DIR == this.rotateType) {
                this._nRotate -= this._nAddRotate * Laya.timer.delta / 1e3;
                if (this._nRotate < -this._nMaxRotate) {
                    this._nRotate = -this._nMaxRotate;
                }
            } else {
                this._nRotate *= .9;
                if (Math.abs(this._nRotate) < .05) this._nRotate = 0;
            }
        }
        _move() {
            //move
            if (this.bDeath) {
                this.bStop = true;
            } else {
                if (this.carBodyMesh.transform.localRotationEulerX > 30 || this.carBodyMesh.transform.localRotationEulerX < -210) {
                    this._death();
                }
            }
            if (!this.bCouldMove) return;
            let speed = this.cannonVehicle.chassisBody.velocity.length();
            if (this.bStop && speed > .2) {
                this.cannonVehicle.setBrake(this._nBrekePower, 0);
                this.cannonVehicle.setBrake(this._nBrekePower, 1);
                this.cannonVehicle.setBrake(this._nBrekePower, 2);
                this.cannonVehicle.setBrake(this._nBrekePower, 3);
            } else {
                this.cannonVehicle.setBrake(0, 0);
                this.cannonVehicle.setBrake(0, 1);
                this.cannonVehicle.setBrake(0, 2);
                this.cannonVehicle.setBrake(0, 3);
                if (EConstMoveType.FORWARD_DIR == this.moveType) {
                    this.cannonVehicle.applyEngineForce(-this._nMovePower, 2);
                    this.cannonVehicle.applyEngineForce(-this._nMovePower, 3);
                } else if (EConstMoveType.QUEEN_DIR == this.moveType) {
                    this.cannonVehicle.applyEngineForce(this._nMovePower, 2);
                    this.cannonVehicle.applyEngineForce(this._nMovePower, 3);
                } else {
                    this.cannonVehicle.applyEngineForce(0, 2);
                    this.cannonVehicle.applyEngineForce(0, 3);
                    this.cannonVehicle.setBrake(50, 0);
                    this.cannonVehicle.setBrake(50, 1);
                    this.cannonVehicle.setBrake(50, 2);
                    this.cannonVehicle.setBrake(50, 3);
                }
            }
            this.cannonVehicle.setSteeringValue(this._nRotate, 0);
            this.cannonVehicle.setSteeringValue(this._nRotate, 1);
            this._updateCamera();
        }
        onCollisionEnter() {}
        onUpdate() {
            this._move();
        }
    }
    class End extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.sprite = null;
            this.pointA = null;
            this.pointB = null;
            this.pointC = null;
            this.pointD = null;
        }
        init() {
            this.sprite = this.owner;
            let p1 = this.sprite.getChildByName("p1");
            let p2 = this.sprite.getChildByName("p2");
            let p3 = this.sprite.getChildByName("p3");
            let p4 = this.sprite.getChildByName("p4");
            this.pointA = new Laya.Vector2(p1.transform.position.x, p1.transform.position.z);
            this.pointB = new Laya.Vector2(p2.transform.position.x, p2.transform.position.z);
            this.pointC = new Laya.Vector2(p3.transform.position.x, p3.transform.position.z);
            this.pointD = new Laya.Vector2(p4.transform.position.x, p4.transform.position.z);
        }
        isPointInBox(point) {
            let pos = this.sprite.transform.position;
            let A = this.pointA;
            let B = this.pointB;
            let C = this.pointC;
            let D = this.pointD;
            let a = (B.x - A.x) * (point.y - A.y) - (B.y - A.y) * (point.x - A.x);
            let b = (C.x - B.x) * (point.y - B.y) - (C.y - B.y) * (point.x - B.x);
            let c = (D.x - C.x) * (point.y - C.y) - (D.y - C.y) * (point.x - C.x);
            let d = (A.x - D.x) * (point.y - D.y) - (A.y - D.y) * (point.x - D.x);
            if (a > 0 && b > 0 && c > 0 && d > 0 || a < 0 && b < 0 && c < 0 && d < 0) return true;
            return false;
        }
    }
    class MoveRoad extends Laya.Script3D {
        constructor() {
            super(...arguments);
            this.sprite = null;
            this._vMovePath = null;
            this.cannonBody = null;
            this.moveMesh = null;
            this._couldMove = true;
            this._index = 0;
            this._speed = 3;
        }
        init() {
            this.sprite = this.owner;
            this.moveMesh = this.owner;
            this._vMovePath = [];
            for (let index = 0; index < this.sprite.numChildren; index++) {
                let name = "point" + index;
                let point = this.sprite.getChildByName(name);
                let pos = new Laya.Vector3(point.transform.position.x, point.transform.position.y, point.transform.position.z);
                this._vMovePath.push(pos);
            }
        }
        _move() {
            if (!this._couldMove) return;
            let point = this._vMovePath[this._index];
            if (point) {
                let dir = new Laya.Vector3();
                Laya.Vector3.subtract(point, this.sprite.transform.position, dir);
                let dis = Laya.Vector3.scalarLength(dir);
                Laya.Vector3.normalize(dir, dir);
                let moveDis = new Laya.Vector3();
                Laya.Vector3.scale(dir, this._speed * .02, moveDis);
                let pos = new Laya.Vector3();
                Laya.Vector3.add(this.sprite.transform.position, moveDis, pos);
                this.sprite.transform.position = pos;
                this._updateBody();
                if (dis <= this._speed * .02) {
                    if (this._index == 0 || this._index == this._vMovePath.length - 1) {
                        this._couldMove = false;
                        setTimeout(function() {
                            this._couldMove = true;
                        }.bind(this), 3e3);
                    }
                    this._index++;
                    if (this._index >= this._vMovePath.length) this._index = 0;
                }
            }
        }
        _updateBody() {
            this._layaTransfromToCannon(this.moveMesh, this.cannonBody);
        }
        _layaTransfromToCannon(layaMesh, cannonBody) {
            if (!cannonBody || !layaMesh) return;
            cannonBody.position = new CANNON.Vec3(layaMesh.transform.position.x, layaMesh.transform.position.y, layaMesh.transform.position.z);
            cannonBody.quaternion = new CANNON.Quaternion(layaMesh.transform.rotation.x, layaMesh.transform.rotation.y, layaMesh.transform.rotation.z, layaMesh.transform.rotation.w);
        }
        onUpdate() {
            this._move();
        }
    }
    class GameController extends Laya.Script3D {
        constructor() {
            super();
            this.gameScene = null;
            this.homeScene = null;
            this.bIsGame = null;
            this.levelSprite = null;
            this.levelData = null;
            this.meshEnd = null;
            this.vObsList = null;
            this.vResetPointList = null;
            this.nResetIndex = null;
            this.nLevel = null;
            this.userVehicle = null;
            this.userCar = null;
            this.userNode = null;
            this._isClickStart = false;
        }
        static get instance() {
            return this._instance;
        }
        init() {
            GameController._instance = this;
            this.gameScene = this.owner.scene;
            this._addLisenter();
            gg.event.event(GamePlayEvent.OpenPage, EConstUiPageType.HOME_PAGE);
            let data = gg.player.getData();
            let config = gg.data.getGameConf();
            if (data.level > config.maxLevel) {
                gg.player.getData().level = 1;
                gg.player.save();
            }
            this.nLevel = data.level;
            this.createLevel(this.nLevel);
        }
        async gameStart() {
            if (!gg.sdk.iswx()) {
                this._gameStart();
                return;
            }
            console.log("[debug] ad start ");
            if (this._isClickStart) return;
            this._isClickStart = true;
            if (gg.sdk.checkShowInterstitialAd(this.nLevel)) {
                let ok = await gg.sdk.showInterstitialAd();
                if (!ok) this._gameStart();
                console.log("插屏：", ok);
            } else if (gg.sdk.checkShowVideoAdWhenGameStart(this.nLevel)) {
                let cb = () => {
                    console.log("video close");
                    this._gameStart();
                };
                gg.sdk.showVideoAd(cb, cb);
            } else {
                this._gameStart();
            }
        }
        _gameStart() {
            this._isClickStart = false;
            gg.event.event(GamePlayEvent.OpenPage, EConstUiPageType.GAME_PAGE);
            GameLog.level(this.nLevel, LevelStateTypes.Enter);
            this.bIsGame = true;
            CannonControl.instance.bUpdateWorld = true;
        }
        onCloseInterstitialAd() {
            if (this._isClickStart) {
                console.log("[debug] ad closeEX ");
                this._gameStart();
            }
        }
        desLevel() {
            CannonControl.instance.resetWorld();
            if (this.levelSprite) {
                this.levelSprite.removeSelf();
                this.levelSprite.destroy();
                this.levelSprite = null;
            }
            this.userVehicle = null;
            this.userCar = null;
            this.meshEnd = null;
        }
        gameResert() {
            this.desLevel();
            let data = gg.player.getData();
            let config = gg.data.getGameConf();
            if (data.level > config.maxLevel) {
                gg.player.getData().level = 1;
                gg.player.save();
            }
            this.nLevel = data.level;
            this.createLevel(this.nLevel);
            gg.event.event(GamePlayEvent.OpenPage, EConstUiPageType.HOME_PAGE);
        }
        createLevel(index) {
            let level = MRes.instance.getLevelPrefab(index);
            let data = gg.data.getGameConf();
            let userData = gg.player.getData();
            this.gameScene.addChild(level);
            this.levelSprite = level;
            this.initLevel();
        }
        userReset() {
            if (!this.bIsGame) return;
        }
        _changeCar() {
            let point = this.vResetPointList[this.nResetIndex];
            if (point) {
                CannonControl.instance.removeCar();
                this.userNode.removeSelf();
                this.userNode.destroy();
                this.userNode = null;
                this.userCar = null;
                this.userVehicle = null;
                this._createCar(gg.player.getData().carId);
            }
        }
        initTestLevel() {}
        initLevel() {
            let roadNode = this.levelSprite.getChildByName("road");
            let wallNode = this.levelSprite.getChildByName("wall");
            let otherNode = this.levelSprite.getChildByName("other");
            let obsNode = this.levelSprite.getChildByName("obs");
            let pointNode = this.levelSprite.getChildByName("point");
            let moveNode = this.levelSprite.getChildByName("move");
            if (roadNode) {
                for (let index = 0; index < roadNode.numChildren; index++) {
                    let element = roadNode.getChildAt(index);
                    CannonControl.instance.layaMeshToCannonBody(element, EConstBodyTag.ROAD);
                }
            }
            if (wallNode) {
                for (let index = 0; index < wallNode.numChildren; index++) {
                    let element = wallNode.getChildAt(index);
                    if (element.name.indexOf("box") != -1) {
                        CannonControl.instance.createBodyFromCannon(element, EConstObsType.WALL);
                    }
                    if (element.name.indexOf("cylinder") != -1) {
                        CannonControl.instance.createBodyFromCannon(element, EConstObsType.CYLINDER);
                    }
                }
            }
            if (otherNode) {
                for (let index = 0; index < otherNode.numChildren; index++) {
                    let element = otherNode.getChildAt(index);
                    if (element.name.indexOf("end") != -1) {
                        let end = element.addComponent(End);
                        end.init();
                        this.meshEnd = end;
                    }
                }
            }
            if (obsNode) {
                this.vObsList = [];
                for (let index = 0; index < obsNode.numChildren; index++) {
                    let element = obsNode.getChildAt(index);
                    if (element.name.indexOf("pillar") != -1) {
                        let obs = CannonControl.instance.createBodyFromCannon(element, EConstObsType.PILLAR);
                        this.vObsList.push(obs);
                    }
                    if (element.name.indexOf("pole") != -1) {
                        let obs = CannonControl.instance.createBodyFromCannon(element, EConstObsType.POLE);
                        this.vObsList.push(obs);
                    }
                    if (element.name.indexOf("move_wall") != -1) {
                        let obs = CannonControl.instance.createBodyFromCannon(element, EConstObsType.MOVE_WALL);
                        this.vObsList.push(obs);
                    }
                }
            }
            if (moveNode) {
                for (let index = 0; index < moveNode.numChildren; index++) {
                    let element = moveNode.getChildAt(index);
                    let body = CannonControl.instance.layaMeshToCannonBody(element, EConstBodyTag.ROAD);
                    let mR = element.addComponent(MoveRoad);
                    mR.cannonBody = body;
                    mR.init();
                    body.material = new CANNON.Material("groundMaterial");
                }
            }
            if (pointNode) {
                let birthNode = pointNode.getChildByName("birthplace");
                this.vResetPointList = [];
                if (birthNode) {
                    this.vResetPointList[0] = birthNode;
                    this.nResetIndex = 0;
                    this._createCar(gg.player.getData().carId);
                }
            }
        }
        _createCar(index) {
            let point = this.vResetPointList[this.nResetIndex];
            this.userNode = MRes.instance.getCarPrefab(index);
            this.levelSprite.addChild(this.userNode);
            this.userNode.transform.position = point.transform.position;
            this.userCar = this.userNode.addComponent(Car);
            this.userCar.init();
            this.userVehicle = this.userCar.cannonVehicle;
            this.userCar.setCannonBodyRotation(point.transform.rotation);
            CannonControl.instance.updateWorld();
            let carbody = this.userNode.getChildByName("mesh_car");
            let cameraNode = carbody.getChildByName("camera_g");
            MCamera.instance.setTarget(carbody, new Laya.Vector3(cameraNode.transform.position.x, cameraNode.transform.position.y, cameraNode.transform.position.z));
        }
        _isWin() {
            if (!this.bIsGame) return;
            if (this.meshEnd && this.userCar) {
                for (let index = 0; index < this.userCar._vCarWheelMeshs.length; index++) {
                    let wheel = this.userCar._vCarWheelMeshs[index];
                    let point = new Laya.Vector2(wheel.transform.position.x, wheel.transform.position.z);
                    if (this.meshEnd.isPointInBox(point)) {
                        gg.event.event(GamePlayEvent.GameWin);
                    }
                }
            }
        }
        _addGold(num) {
            let gold = parseInt(num);
            if (gold) {
                let data = gg.player.getData();
                data.gold += num;
                gg.player.save();
                gg.event.event(GamePlayEvent.UpdateGold);
            }
        }
        _updateResetPoint() {}
        _gameWin() {
            if (!this.bIsGame) return;
            let onRewardCb = () => {
                this._addGold(300);
                this.gameResert();
            };
            let continueCB = () => {
                this._addGold(100);
                this.gameResert();
            };
            let conf = gg.data.getGameConf();
            let data = {
                isWin: true,
                isSkip: true,
                isReloadGame: true,
                currentLevel: this.nLevel,
                nextLevel: this.nLevel + 1,
                onReward: onRewardCb.bind(this),
                onContinue: continueCB.bind(this)
            };
            setTimeout(function() {
                gg.event.event(GamePlayEvent.GameOver, data);
            }, 500);
            GameLog.level(this.nLevel, true ? LevelStateTypes.Pass : LevelStateTypes.Failed);
            this._levelPass();
            this._gameOver();
        }
        _gameLow() {
            if (!this.bIsGame) return;
            let onRewardCb = () => {
                this._levelPass();
                this.gameResert();
            };
            let continueCB = () => {
                this.gameResert();
            };
            let conf = gg.data.getGameConf();
            let data = {
                isWin: false,
                isSkip: true,
                isReloadGame: true,
                currentLevel: this.nLevel,
                nextLevel: this.nLevel + 1,
                onReward: onRewardCb.bind(this),
                onContinue: continueCB.bind(this)
            };
            GameLog.level(this.nLevel, false ? LevelStateTypes.Pass : LevelStateTypes.Failed);
            gg.event.event(GamePlayEvent.GameOver, data);
            this._gameOver();
        }
        _levelPass() {
            MRes.instance.clearLevel(this.nLevel);
            gg.player.update("level", this.nLevel + 1, true);
        }
        _gameOver() {
            let conf = gg.data.getGameConf();
            this.userCar.bDeath = true;
            gg.event.event(GamePlayEvent.HidePage, EConstUiPageType.GAME_PAGE);
            this.bIsGame = false;
        }
        _addLisenter() {
            gg.event.on(GamePlayEvent.GameWin, this, this._gameWin);
            gg.event.on(GamePlayEvent.EnemyWin, this, this._gameLow);
            gg.event.on(GamePlayEvent.ChangeCar, this, this._changeCar);
            gg.event.on(GamePlayEvent.CloseInterstitialAd, this, this.onCloseInterstitialAd);
        }
        _onKeyDown(event) {
            let vehicle = this.userVehicle;
            vehicle.setBrake(0, 0);
            vehicle.setBrake(0, 1);
            vehicle.setBrake(0, 2);
            vehicle.setBrake(0, 3);
            switch (event.keyCode) {
              case Laya.Keyboard.W:
                this.userCar;
                this.userCar.moveType = EConstMoveType.FORWARD_DIR;
                break;

              case Laya.Keyboard.S:
                this.userCar.moveType = EConstMoveType.QUEEN_DIR;
                break;

              case Laya.Keyboard.A:
                this.userCar.rotateType = EConstMoveType.LEFT_DIR;
                break;

              case Laya.Keyboard.D:
                this.userCar.rotateType = EConstMoveType.RIGHT_DIR;
                break;
            }
        }
        _onKeyUp(event) {
            let vehicle = this.userVehicle;
            vehicle.setBrake(0, 0);
            vehicle.setBrake(0, 1);
            vehicle.setBrake(0, 2);
            vehicle.setBrake(0, 3);
            switch (event.keyCode) {
              case Laya.Keyboard.W:
                this.userCar.moveType = EConstMoveType.NONE;
                break;

              case Laya.Keyboard.S:
                this.userCar.moveType = EConstMoveType.NONE;
                break;

              case Laya.Keyboard.A:
                this.userCar.rotateType = EConstMoveType.NONE;
                break;

              case Laya.Keyboard.D:
                this.userCar.rotateType = EConstMoveType.NONE;
                break;
            }
        }
        onEnable() {}
        onDisable() {}
        onUpdate() {
            this._isWin();
            this._updateResetPoint();
        }
    }
    GameController._instance = null;
    class MTouch {
        constructor() {
            this.nTouchId = null;
            this.touchNode = null;
            this._touchLastPoint = null;
            this._startPoint = null;
            this._rocker = null;
            this._rockerForward = null;
            this._nRockMaxDis = 400;
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new MTouch();
            }
            return this._instance;
        }
        init(node, rocker) {
            this.touchNode = node;
            this._startPoint = new Laya.Vector2();
            this._startPoint.x = rocker.x;
            this._startPoint.y = rocker.y;
            this._rocker = rocker;
            this._nRockMaxDis = node.width / 2;
            this._rockerForward = new Laya.Vector2(0, -1);
            this.refreshRocker();
            this._addLisener();
        }
        refreshRocker() {
            console.log("rocker refresh ");
            this.nTouchId = null;
        }
        _addLisener() {
            this.touchNode.on(Laya.Event.MOUSE_DOWN, this, this._touchStart);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this._touchMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this._touchEnd);
            Laya.stage.on(Laya.Event.MOUSE_OUT, this, this._touchEnd);
            Laya.stage.on(Laya.Event.KEY_DOWN, this, this._keyDown);
            Laya.stage.on(Laya.Event.KEY_UP, this, this._keyUp);
        }
        _keyUp(event){
            switch (event.keyCode) {
                //left
              case 65:
                this.ad=null;
                this.turn=0;
                break;
              case 37:
                this.ad=null;
                this.turn=0;
                break; 
                
                
              case 68:
                this.ad=null;
                this.turn=0;
                break; 
              case 39:
                this.ad=null;
                this.turn=0;
                break;  
              case 87:
                  window.PageGame.moveType=0;
                  break;  
              case 38:
                  window.PageGame.moveType=0;
                  break; 
              case 83:
              window.PageGame.moveType=0;
                  break;
              case 40:
              window.PageGame.moveType=0;
                  break;   

               case 32:
               window.PageGame.bStop=false;
              default:
                break;
            }


        }
        _keyDown(event) {
            console.log(event.keyCode)
            switch (event.keyCode) {
                //left
              case 65:
                this.ad=1;
                this.turn=-1;
                
                break;
              case 37:
                this.ad=1;
                this.turn=-1;
                break;

              //right
              case 68:
                this.ad=1;
                this.turn=1;
                break; 
              case 39:
                this.ad=1;
                this.turn=1;
                break;   

              //forward
              case 87:
                  window.PageGame.moveType=1;
                  break;  
              case 38:
                  window.PageGame.moveType=1;
                break;  
              //back
              case 83:
                window.PageGame.moveType=2;
                  break;
              case 40:
                window.PageGame.moveType=2;
                  break;   
                  
              case 32:
                window.PageGame.bStop=true;
                break;


              default:
                break;
            }
        }
        _touchStart(event) {
            console.log("[debug] touch start");
            if (!GameController.instance.bIsGame) {
                console.log("[debug] touch start false");
                return;
            }
            if (this.nTouchId !== null) {
                console.log("[debug] touch start id");
                return;
            }
            this.nTouchId = event.touchId;
            this._touchLastPoint = new Laya.Vector2(event.stageX, event.stageY);
        }
        _touchMove(event) {
            if (this.nTouchId !== event.touchId) return;
            let lastDir = new Laya.Vector2(this._touchLastPoint.x - this._startPoint.x, this._touchLastPoint.y - this._startPoint.y);
            let nowDir = new Laya.Vector2(event.stageX - this._startPoint.x, event.stageY - this._startPoint.y);
            let touchDir = new Laya.Vector2(event.stageX - this._touchLastPoint.x, event.stageY - this._touchLastPoint.y);
            let touchDis = Laya.Vector2.scalarLength(touchDir);
            Laya.Vector2.normalize(lastDir, lastDir);
            Laya.Vector2.normalize(nowDir, nowDir);
            if (touchDis < 2) return;
            let dot = Laya.Vector2. dot(lastDir, nowDir);
            let angle = Math.acos(dot);
            let fork = lastDir.x * nowDir.y - lastDir.y * nowDir.x;
            let rotate = angle * 180 / Math.PI;
            let n = 0;
            if (fork > 0) {
                n = 1;
            } else if (fork < 0) {
                n = -1;
            }
            this._rocker.rotation += rotate * n;
            if (this._rocker.rotation > 360) {
                this._rocker.rotation = 360;
            }
            if (this._rocker.rotation < -360) {
                this._rocker.rotation = -360;
            }
            this._touchLastPoint.x = event.stageX;
            this._touchLastPoint.y = event.stageY;
        }
        updateUi() {
            if ((this.nTouchId === null)&&(this.ad==null)) {
                
                this._rocker.rotation *= .9;
                if (Math.abs(this._rocker.rotation) < 1) this._rocker.rotation = 0;
            }

            if(this.turn==-1){
                this._rocker.rotation-=10;
            }
            if(this.turn==1){
                this._rocker.rotation+=10;
            }





            if (this._rocker.rotation > 360) {
                this._rocker.rotation = 360;
            }
            if (this._rocker.rotation < -360) {
                this._rocker.rotation = -360;
            }

        }
        _touchEnd(event) {
            if (this.nTouchId !== event.touchId) return;
            this.nTouchId = null;
        }
    }
    MTouch._instance = null;
    class PageGame extends PageBase {
        constructor() {
            super();
            this.moveType = EConstMoveType.NONE;
            
            this.rotateType = EConstMoveType.NONE;
            this.bStop = false;
            this._bShow = false;
            this._imgDir = null;
            this._lbLvl = null;
            this._stopSize = new Laya.Vector2(144, 112);
            this._size = null;
            window.PageGame=this;
        }
        Init(page) {
            
            this.pageView = page;
            page.width = Laya.stage.width;
            page.height = Laya.stage.height;
            page.zOrder = -1;
            let btnUp = page.getChildByName("btn_forward");
            let btnDown = page.getChildByName("btn_queen");
            this._imgDir = page.getChildByName("btn_dir");
            let btnTouch = page.getChildByName("btn_touch");
            MTouch.instance.init(btnTouch, this._imgDir);
            this._btnOn(btnUp, EConstMoveType.FORWARD_DIR);
            this._btnOn(btnDown, EConstMoveType.QUEEN_DIR);
            let btnStop = page.getChildByName("btn_stop");
            btnStop.on(Laya.Event.MOUSE_DOWN, this, this._btnStopDown);
            btnStop.on(Laya.Event.MOUSE_UP, this, this._btnStopUp);
            btnStop.on(Laya.Event.MOUSE_OUT, this, this._btnStopUp);
            let lvBg = page.getChildByName("lvl_bg");
            this._lbLvl = lvBg.getChildByName("lb_lvl");
            Laya.timer.frameLoop(1, this, this._btnDir);
        }
        _btnOn(btn, type) {
            btn.on(Laya.Event.MOUSE_DOWN, this, this._btnDown, [ type ]);
            btn.on(Laya.Event.MOUSE_UP, this, this._btnUp, [ type ]);
            btn.on(Laya.Event.MOUSE_OUT, this, this._btnUp, [ type ]);
        }
        _btnStopDown(event) {
            let sprite = event.target;
            let img = sprite.getChildAt(0);
            img.width = this._stopSize.x * 1.2;
            img.height = this._stopSize.y * 1.2;
            this.bStop = true;
        }
        _btnStopUp(event) {
            let sprite = event.target;
            let img = sprite.getChildAt(0);
            img.width = this._stopSize.x;
            img.height = this._stopSize.y;
            this.bStop = false;
        }
        _btnReset() {
            GameController.instance.userReset();
        }
        _refreshPage() {}
        _setPower() {}
        _btnDown(args, event) {
            console.log(args);
            let sprite = event.target;
            if (args < 10) {
                if (this.moveType) return;
                let img = sprite.getChildAt(0);
                this._size = new Laya.Vector2(img.width, img.height);
                img.width = this._size.x * 1.2;
                img.height = this._size.y * 1.2;
                this.moveType = args;
                return;
            }
            if (this.rotateType) return;
            let img = sprite.getChildAt(0);
            this._size = new Laya.Vector2(img.width, img.height);
            img.width = this._size.x * 1.2;
            img.height = this._size.y * 1.2;
            this.rotateType = args;
            return;
        }
        _btnUp(args, event) {
            let sprite = event.target;
            if (args < 10) {
                if (this.moveType != args) return;
                this.moveType = EConstMoveType.NONE;
                let img = sprite.getChildAt(0);
                img.width = this._size.x;
                img.height = this._size.y;
                return;
            }
            if (this.rotateType != args) return;
            let img = sprite.getChildAt(0);
            img.width = this._size.x;
            img.height = this._size.y;
            this.rotateType = EConstMoveType.NONE;
            return;
        }
        _btnDir() {
            if (!this._bShow) return;
            MTouch.instance.updateUi();
            let coef = this._imgDir.rotation / -360;
            GameController.instance.userCar.setMoveType(this.moveType);
            GameController.instance.userCar.setRotate(coef);
            GameController.instance.userCar.bStop = this.bStop;
        }
        _showPage() {
            this._lbLvl.text = "Level: " + gg.player.getData().level;
            this._imgDir.rotation = 0;
            this._bShow = true;
        }
        _hidePage() {
            this._bShow = false;
        }
    }
    class PageStart extends PageBase {
        constructor() {
            super();
            this._lbLvl = null;
            this.lbGold = null;
        }
        Init(page) {
            this.pageView = page;
            page.width = Laya.stage.width;
            page.height = Laya.stage.height;
            page.zOrder = -1;
            let btnStart = page.getChildByName("btn_start");
            btnStart.on(Laya.Event.CLICK, this, this._btnStart);
            let btnShop = page.getChildByName("btn_shop");
            btnShop.on(Laya.Event.CLICK, this, this._btnShop);
            let bgGold = page.getChildByName("gold_bg");
            this.lbGold = bgGold.getChildByName("lb_gold");
            let lvBg = page.getChildByName("lvl_bg");
            this._lbLvl = lvBg.getChildByName("lb_lvl");
            gg.event.on(GamePlayEvent.UpdateGold, this, this._refreshGold);
        }
        _btnShop() {
            gg.ui.showDialogWithURL(Components.ShopDialog2, null, false);
        }
        _btnStart() {
            platform.getInstance().showInterstitial(()=>{
                console.log("start")
                GameController.instance.gameStart();
                this.Hide();
            })

        }
        _refreshGold() {
            this.lbGold.text = "" + gg.player.getData().gold;
        }
        _showPage() {
            this._lbLvl.text = "Level: " + gg.player.getData().level;
            this._refreshGold();
        }
        _hidePage() {}
        onEnable() {}
        onDisable() {}
    }
    class MUi {
        constructor() {
            this._vPageView = null;
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new MUi();
            }
            return this._instance;
        }
        Init() {
            this._vPageView = [];
            this._addListener();
        }
        OpenPage(pageType) {
            let page = this._vPageView[pageType];
            if (page) {
                page.Show();
            } else {
                this._loadPage(pageType);
            }
        }
        _loadPage(pageType) {
            switch (pageType) {
              case EConstUiPageType.GAME_PAGE:
                {
                    Laya.Scene.load("res/prefabs/uiPages/PageGame.scene", Laya.Handler.create(this, function(scene) {
                        if (!scene) return;
                        let page = new PageGame();
                        this._vPageView[EConstUiPageType.GAME_PAGE] = page;
                        page.Init(scene);
                        page.Show();
                    }));
                }
                break;

              case EConstUiPageType.HOME_PAGE:
                {
                    Laya.Scene.load("res/prefabs/uiPages/PageHome.scene", Laya.Handler.create(this, function(scene) {
                        if (!scene) return;
                        let page = new PageStart();
                        window.page=page;
                        this._vPageView[EConstUiPageType.HOME_PAGE] = page;
                        page.Init(scene);
                        page.Show();
                    }));
                }
                break;

              default:
                break;
            }
        }
        HidePage(pageType) {
            this._vPageView[pageType].Hide();
        }
        _addListener() {
            gg.event.on(GamePlayEvent.OpenPage, this, this.OpenPage);
            gg.event.on(GamePlayEvent.HidePage, this, this.HidePage);
        }
    }
    MUi._instance = null;
    class GamePlay extends Laya.Script {
        constructor() {
            super(...arguments);
            this._level = 1;
            this._isClickStart = false;
        }
        onAwake() {
            this.gameInit();
        }
        onClickShop() {
            gg.ui.showDialogWithURL(Components.ShopDialog2, null, false);
        }
        onClickStart() {
            gg.event.event(GamePlayEvent.GameStart);
        }
        onCloseInterstitialAd() {
            if (this._isClickStart) this.gameStart();
        }
        async checkStart() {
            if (gg.sdk.checkShowInterstitialAd(this._level)) {
                let ok = await gg.sdk.showInterstitialAd();
                if (!ok) this.gameStart();
                console.log("插屏：", ok);
            } else if (gg.sdk.checkShowVideoAdWhenGameStart(this._level)) {
                let cb = () => {
                    console.log("video close");
                    this.gameStart();
                };
                gg.sdk.showVideoAd(cb, cb);
            } else {
                this.gameStart();
            }
        }
        gameStart() {
            gg.event.event(GamePlayEvent.GameStart);
            GameLog.level(this._level, LevelStateTypes.Enter);
        }
        onClickOver() {
            this.gameOver(Math.random() > .5);
        }
        gameInit() {
            if (GamePlay.bGameInit) return;
            GamePlay.bGameInit = true;
            MRes.instance.initGameRes();
            MUi.instance.Init();
            let scene = MRes.instance.getGameScene();
            Laya.stage.addChild(scene);
            scene.zOrder = -10;
            let gameNode = new Laya.Sprite3D();
            scene.addChild(gameNode);
            let camera = scene.getChildByName("main_camera");
            MCamera.instance.init(camera);
            let cannonCtrl = gameNode.addComponent(CannonControl);
            cannonCtrl.initCannonWorld();
            cannonCtrl.gameScene = scene;
            let gameCtrl = gameNode.addComponent(GameController);
            gameCtrl.init();
        }
        gameOver(iswin) {
            let conf = gg.data.getGameConf();
            let data = {
                isWin: iswin,
                isSkip: true,
                isReloadGame: true,
                currentLevel: 2,
                nextLevel: 3,
                onReward: null,
                onContinue: null
            };
            gg.event.event(GamePlayEvent.GameOver, data);
            GameLog.level(this._level, iswin ? LevelStateTypes.Pass : LevelStateTypes.Failed);
        }
        onDestroy() {
            console.log("destory");
        }
    }
    GamePlay.bGameInit = false;
    class UIMgr {
        constructor() {
            this._currentScene = null;
            this._dialogQueue = [];
            this._showingDialogs = [];
            this._isGameSceneLaunched = false;
            UIMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new UIMgr();
            }
            return this._instance;
        }
        showDialog(dialog, showEffect = true, inQueue = false, isSingle = true) {
            if (isSingle && this.hasDialog(dialog)) return;
            dialog.isShowEffect = showEffect;
            if (this._showingDialogs.length > 0 && inQueue) {
                this._dialogQueue.push(dialog);
            } else {
                this._showingDialogs.push(dialog);
                Laya.Dialog.manager.open(dialog, false, showEffect);
            }
            return dialog;
        }
        showDialogWithURL(url, onComplete, showEffect = true, inQueue = false, isSingle = true) {
            gg.res.loadDialog(url).then(dialog => {
                this.showDialog(dialog, showEffect, inQueue, isSingle);
                onComplete && onComplete(dialog);
            });
        }
        closeDialog(dialog) {
            if (dialog) {
                dialog.close();
            }
            for (let i = this._showingDialogs.length - 1; i >= 0; i--) {
                if (this._showingDialogs[i] === dialog) {
                    this._showingDialogs.splice(i, 1);
                    break;
                }
            }
            if (this._showingDialogs.length < 1) {
                let nextDialog = this._dialogQueue.shift();
                if (nextDialog) {
                    Laya.Dialog.manager.open(nextDialog, false, nextDialog.isShowEffect);
                }
            }
        }
        switchScene(scene, closeOther = true, complete = null, params = null) {
            if (this._currentScene === scene) {
                this.closeScene(scene);
            }
            this._currentScene = scene;
            Laya.Scene.open(scene, closeOther, params, complete);
            console.log("open scene:", scene);
        }
        closeScene(scene) {
            if (scene) Laya.Scene.close(typeof scene === "string" ? scene : scene.url);
        }
        getCurrentScene() {
            return this._currentScene;
        }
        getShowingDialogCount() {
            return this._showingDialogs.length;
        }
        hasDialog(dialog) {
            let target = typeof dialog === "string" ? dialog : dialog.url, isShowed = false;
            for (let i = this._showingDialogs.length - 1; i >= 0; i--) {
                const dialog = this._showingDialogs[i];
                if (dialog && dialog.url == target) {
                    isShowed = true;
                    break;
                }
            }
            return isShowed;
        }
        showToast(msg, url = Components.ToastDialog) {
            gg.res.loadDialog(url).then(dialog => {
                let comp = dialog.getComponent(ToastDialog);
                comp.init(msg, () => {
                    dialog.destroy();
                });
                Laya.Dialog.manager.open(dialog, false, true);
            }).catch(() => {
                console.log(`can not load ${url}`);
            });
        }
        showParticle(src, parent = null) {
            let res = Laya.loader.getRes(src);
            if (!res) return null;
            let part = new Laya.Particle2D(res);
            part.zOrder = 15;
            if (parent) {
                parent.addChild(part);
            } else {
                Laya.stage.addChild(part);
            }
            return part;
        }
        removeParticle(part) {
            if (part && part.parent) {
                part.emitter.stop();
                part.parent.removeChild(part);
            }
        }
        checkIsIphoneX() {
            let isIphoneX = false;
            if (this.checkSceneIsHorizontal()) {
                isIphoneX = Laya.Browser.clientWidth / Laya.Browser.clientHeight > 2;
            } else {
                isIphoneX = Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2;
            }
            return isIphoneX;
        }
        checkSceneIsHorizontal() {
            return GameConfig.screenMode == "horizontal";
        }
        get isGameSceneLaunched() {
            return this._isGameSceneLaunched;
        }
        set isGameSceneLaunched(value) {
            this._isGameSceneLaunched = value;
        }
    }
    class WebPlatform {
        constructor() {
            this.name = "web";
        }
        async login() {
            return {
                ip: "",
                addr: [],
                openid: "testwebopenid"
            };
        }
        showWarning(errCode) {
            console.warn("err:", errCode);
        }
        showToast(str) {
            alert(str);
        }
        getLaunchOptionsSync() {
            return null;
        }
        setStorage(key, value) {
            let data = null;
            if (typeof value === "object") {
                data = JSON.stringify(value);
            } else {
                data = value;
            }
            localStorage.setItem(key, data);
        }
        getStorage(key) {
            let value = localStorage.getItem(key), data = null;
            try {
                data = JSON.parse(value);
            } catch (error) {
                data = value;
            }
            return data;
        }
        navigateToMiniProgram(obj, onFail, onSuccess, onComplete) {
            if (!obj) return;
            let exportPic = null, imageData = obj.image.split("/");
            if (imageData.length > 0) {
                let image = imageData.pop();
                exportPic = image.split("?")[0];
            }
            let data = {
                appId: obj.appid,
                appName: obj.title,
                appVendor: obj.appVendor,
                path: obj.path,
                type: obj.type,
                extraData: {
                    sourceAppName: "",
                    sourceAppVendor: "格子游戏",
                    exportPic: exportPic
                }
            };
            console.log("export:", data);
            let items = this.getStorage(StorageKey.ExportSuccess) || "";
            items += `,${obj.appid}`;
            this.setStorage(StorageKey.ExportSuccess, items);
        }
    }
    class MathUtil {
        static randomSection(from, to) {
            return Math.random() * (to - from) + from;
        }
        static randomItem(items) {
            if (!items) return null;
            let index = Math.round(this.randomSection(1, items.length));
            return items[index - 1];
        }
        static checkProbability(rate, weight) {
            let rand = Math.random() * weight;
            return rand <= rate;
        }
    }
    const ggsdk = window["ggsdk"];
    class WxPlatform {
        constructor(appName) {
            this.name = "wx";
            this._isVideoAdDidLoad = false;
            this._isVideoAdDidShow = false;
            this._isVideoAdWillShow = false;
            this._videoAd = null;
            this._loadBannerError = false;
            this._bannerData = null;
            this._bannerStyle = null;
            this._banners = null;
            this._bannerPool = null;
            this._createBannerOffset = 0;
            this._switchBannerTimer = -1;
            this._isBannerShowed = false;
            this._fullscreenBanners = null;
            this._appName = appName;
        }
        onShow(callback) {
            wx.onShow(callback);
        }
        login(isDebug) {
            return new Promise((resolve, reject) => {
                if (isDebug === true) {
                    ggsdk.setServerUrl("");
                    //ggsdk.setServerUrl("http://192.168.50.230:4001/");
                }
                ggsdk.login({
                    success: res => {
                        resolve(res);
                    },
                    fail: err => {
                        reject({
                            ip: "",
                            addr: [],
                            openid: "testwebopenid"
                        });
                    },
                    complete: () => {}
                });
            });
        }
        showWarning(errCode) {
            if (errCode === ErrorCode.WXVersionTooOld) {
                wx.showToast({
                    title: "为了更好的游戏体验，建议您升级微信版本",
                    icon: "none"
                });
            } else if (errCode === ErrorCode.ExitMiniGame) {
                wx.showModal({
                    title: "温馨提示",
                    content: "配置文件加载失败，请重新启动游戏",
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            wx.exitMiniProgram();
                        }
                    }
                });
            } else if (errCode === ErrorCode.TestExit) {
                wx.showModal({
                    title: "温馨提示",
                    content: "已清空数据，请重新启动游戏",
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            wx.exitMiniProgram();
                        }
                    }
                });
            }
        }
        showToast(str) {
            wx.showToast({
                title: str,
                icon: "none"
            });
        }
        showShareModal(content, success, cancel) {
            wx.showModal({
                title: "系统提示",
                content: content,
                showCancel: true,
                confirmText: "分享到群",
                success: res => {
                    if (res && res.confirm === true) {
                        success && success();
                    } else if (res && res.cancel === true) {
                        cancel && cancel();
                    }
                }
            });
        }
        getLaunchOptionsSync() {
            return wx.getLaunchOptionsSync();
        }
        navigateToMiniProgram(obj, onFail, onSuccess, onComplete) {
            if (!obj) return;
            let exportPic = null, imageData = obj.image.split("/");
            if (imageData.length > 0) {
                let image = imageData.pop();
                exportPic = image.split("?")[0];
            }
            let data = {
                appId: obj.appid,
                appName: obj.title,
                appVendor: obj.appVendor,
                path: obj.path,
                type: obj.type,
                extraData: {
                    sourceAppName: this._appName,
                    sourceAppVendor: "格子游戏",
                    exportPic: exportPic
                },
                success: res => {
                    let items = this.getStorage(StorageKey.ExportSuccess) || "";
                    if (items.indexOf(obj.appid) < 0) {
                        items += `,${obj.appid}`;
                        gg.data.setStorage(StorageKey.ExportSuccess, items);
                    }
                    onSuccess && onSuccess(res);
                },
                fail: err => {
                    onFail && onFail();
                    return false;
                },
                complete: () => {
                    onComplete && onComplete();
                }
            };
            ggsdk.navigateToMiniProgram(data);
            console.log("navigate to ->", data);
        }
        vibrate(long, callback) {
            if (long) {
                wx.vibrateLong({
                    success: () => {
                        callback && callback({
                            success: true
                        });
                    },
                    fail: () => {
                        callback && callback({
                            success: false
                        });
                    },
                    complete: () => {}
                });
            } else {
                wx.vibrateShort({
                    success: () => {
                        callback && callback({
                            success: true
                        });
                    },
                    fail: () => {
                        callback && callback({
                            success: false
                        });
                    },
                    complete: () => {}
                });
            }
        }
        createVideoAd(videoAdData, onLoad, onClose, onError) {
            if (!videoAdData) return;
            if (!this._videoAd) {
                this._videoAd = ggsdk.createRewardedVideoAd({
                    adUnitId: videoAdData.id,
                    onClose: res => {
                        this._isVideoAdWillShow = false;
                        this._isVideoAdDidShow = true;
                        this._isVideoAdDidLoad = false;
                        onClose && onClose(res);
                    },
                    onLoad: res => {
                        this._isVideoAdDidLoad = true;
                        if (this._isVideoAdWillShow) {
                            this._isVideoAdWillShow = false;
                            ggsdk.showRewardedVideoAd();
                        }
                        onLoad && onLoad(res);
                    },
                    onError: err => {
                        this._isVideoAdWillShow = false;
                        this._isVideoAdDidShow = false;
                        this._isVideoAdDidLoad = false;
                        onError && onError(err);
                    }
                });
            }
        }
        showVideoAd() {
            if (!this._videoAd || this._isVideoAdWillShow) return false;
            this._isVideoAdWillShow = true;
            if (!this._isVideoAdDidLoad) {
                ggsdk.loadRewardedVideoAd();
            } else {
                this._isVideoAdDidShow = false;
                ggsdk.showRewardedVideoAd();
            }
            return true;
        }
        createBannerAd(data, style, onError, onLoad) {
            if (!data) return;
            this._onBannerError = onError;
            this._onBannerLoaded = onLoad;
            this._bannerData = data;
            this._bannerStyle = style;
            this._bannerPool = [];
            this.loadBanner();
        }
        loadBanner() {
            let bannerCount = this._bannerData.banner.length;
            if (this._bannerData.switchCount < 1 || bannerCount < 1) return;
            if (!this._banners) {
                this._banners = [];
            }
            if (!this._loadBannerError) {
                let startIndex = this._createBannerOffset == bannerCount ? 0 : this._createBannerOffset;
                let endIndex = Math.min(startIndex + this._bannerData.switchCount, bannerCount);
                this._createBannerOffset = endIndex;
                for (let i = startIndex; i < endIndex; i++) {
                    if (this._loadBannerError) break;
                    console.log(this._bannerData.banner[i].id);
                    let banner = ggsdk.createBannerAd({
                        adUnitId: this._bannerData.banner[i].id,
                        style: this._bannerStyle,
                        onLoad: res => {
                            this._onBannerLoaded && this._onBannerLoaded();
                        },
                        onError: err => {
                            if (err.errCode > 1002) this._loadBannerError = true;
                            this._onBannerError && this._onBannerError();
                            console.log("banner onerror:", err);
                        },
                        onResize: res => {}
                    });
                    this._banners.push(banner);
                }
            }
            let lackCount = this._bannerData.switchCount - this._banners.length;
            while (lackCount > 0) {
                lackCount--;
                let banner = this._bannerPool.pop();
                if (banner) {
                    this._banners.push(banner);
                }
            }
            for (let i = this._bannerPool.length - 1; i >= 0; i--) {
                this._bannerPool[i].destroy();
            }
            this._bannerPool = [];
            console.log("load banners->", this._banners);
        }
        showBanner(isFullScreen) {
            if (isFullScreen == true) {
                this.showFullScreenBanner();
                return;
            }
            if (!this._banners || this._isBannerShowed) return;
            clearInterval(this._switchBannerTimer);
            const bannerAd = this._banners[this._banners.length - 1];
            if (bannerAd) {
                bannerAd.show();
                console.log("show banner->", bannerAd.adUnitId);
            } else {
                console.log("show banner-> not found");
            }
            this._isBannerShowed = true;
            this._switchBannerTimer = setInterval(() => {
                this.updateBanner();
            }, this._bannerData.switchTime * 1e3);
        }
        updateBanner() {
            if (!this._isBannerShowed || !this._banners) return;
            const removedBannerAd = this._banners.pop();
            if (removedBannerAd) {
                removedBannerAd.hide();
                this._bannerPool.push(removedBannerAd);
                console.log("remove banner:", removedBannerAd.adUnitId);
            }
            const bannerAd = this._banners[this._banners.length - 1];
            if (bannerAd) {
                bannerAd.show();
                console.log("show banner->", bannerAd.adUnitId);
            } else {
                this.loadBanner();
            }
        }
        hideBanner() {
            this.hideFullScreenBanner();
            if (!this._banners) return;
            clearInterval(this._switchBannerTimer);
            this._isBannerShowed = false;
            const bannerAd = this._banners[this._banners.length - 1];
            bannerAd && bannerAd.hide();
        }
        createFullScreenBannerAd(data, isLandscape) {
            if (this._fullscreenBanners && this._fullscreenBanners.length > 0) return;
            if (!this._bannerData) this._bannerData = data;
            if (!this._bannerData) return;
            this._fullscreenBanners = [];
            let {screenWidth: screenWidth, screenHeight: screenHeight} = this.getSystemInfo(), bannerCount = 1, minTop = 104, bannerRealHeight = 0;
            for (let i = 0; i < bannerCount; i++) {
                const bannerData = MathUtil.randomItem(this._bannerData.banner);
                const bid = bannerData.id;
                let banner = ggsdk.createBannerAd({
                    adUnitId: bid,
                    style: {
                        left: 0,
                        top: screenHeight - minTop,
                        width: screenWidth
                    },
                    onLoad: res => {
                        console.log("banner onloaded:", res);
                        if (bannerRealHeight == 0) {
                            bannerRealHeight = banner.style.realHeight;
                        }
                        if (bannerRealHeight != 0 && this._fullscreenBanners.length == bannerCount) {
                            if (this._fullscreenBanners.length == bannerCount) {
                                for (let i = 0; i < bannerCount; i++) {
                                    let item = this._fullscreenBanners[i];
                                    if (item) {
                                        item.style.top = screenHeight - (i + 1) * bannerRealHeight;
                                    }
                                }
                            }
                        }
                        this._onBannerLoaded && this._onBannerLoaded();
                    },
                    onError: err => {
                        this._onBannerError && this._onBannerError();
                        console.log("banner onerror:", err);
                    },
                    onResize: res => {}
                });
                this._fullscreenBanners.push(banner);
            }
        }
        showFullScreenBanner() {
            if (this._fullscreenBanners) {
                for (let i = this._fullscreenBanners.length - 1; i >= 0; i--) {
                    let banner = this._fullscreenBanners[i];
                    if (banner) {
                        banner.show();
                    }
                }
            }
        }
        hideFullScreenBanner() {
            if (this._fullscreenBanners) {
                for (let i = this._fullscreenBanners.length - 1; i >= 0; i--) {
                    let banner = this._fullscreenBanners[i];
                    if (banner) banner.hide();
                }
            }
        }
        createInterstitialAd(obj, onLoad, onClose, onError) {
            if (this._interstitialAd) this._interstitialAd.destroy();
            this._interstitialAd = ggsdk.createInterstitialAd({
                adUnitId: obj.id,
                onClose: res => {
                    Laya.timer.once(5e3, this, () => {
                        this.createInterstitialAd(gg.sdk.getInterstitialAdData(), onLoad, onClose, onError);
                    });
                    onClose && onClose(res);
                },
                onLoad: res => {
                    onLoad && onLoad(res);
                },
                onError: err => {
                    onError && onError(err);
                }
            });
        }
        showInterstitialAd() {
            return new Promise((resolve, reject) => {
                if (!this._interstitialAd) resolve(false);
                this._interstitialAd.show().then(() => {
                    resolve(true);
                }).catch(err => {
                    resolve(false);
                });
            });
        }
        report(eventType, data) {
            ggsdk.report(eventType.toString(), data);
        }
        setStorage(key, value) {
            wx && wx.setStorageSync(key, value);
        }
        getStorage(key) {
            let value = wx && wx.getStorageSync(key);
            return value;
        }
        getSystemInfo() {
            return wx && wx.getSystemInfoSync();
        }
        getLaunchInfo() {
            return wx && wx.getLaunchOptionsSync();
        }
        createVideo(obj) {
            return wx && wx.createVideo(obj);
        }
        requestSubscribeMessage(obj) {
            return wx && wx.requestSubscribeMessage(obj);
        }
        createUserInfoButton(obj) {
            return wx && wx.createUserInfoButton(obj);
        }
        getSetting(withSubscriptions) {
            return new Promise((resole, reject) => {
                wx.getSetting && wx.getSetting({
                    withSubscriptions: withSubscriptions,
                    success(res) {
                        resole(res);
                    },
                    fail() {
                        reject();
                    },
                    complete() {}
                });
                !wx.getSetting && reject();
            });
        }
    }
    class CHttpRequest {
        constructor() {}
        static send(url, data, onResult, method, responseType, headers) {
            if (method === void 0) {
                method = "get";
            }
            if (responseType === void 0) {
                responseType = "text";
            }
            let hr = new Laya.HttpRequest();
            if (onResult) {
                hr.once(Laya.Event.ERROR, null, CHttpRequest.onResponse, [ onResult, Laya.Event.ERROR, hr ]);
                hr.once(Laya.Event.COMPLETE, null, CHttpRequest.onResponse, [ onResult, Laya.Event.COMPLETE, hr ]);
            }
            hr.send(url, data, method, responseType);
        }
        static onResponse(callback, evt, hr, data) {
            console.debug("HttpRequest response:", hr.http.status, data);
            callback.runWith([ data, evt ]);
            if (evt === Laya.Event.ERROR || evt === Laya.Event.COMPLETE) {
                callback.recover();
                if (hr.http.onabort) {
                    Laya.timer.clear(hr.http, hr.http.onabort);
                }
                hr.off(Laya.Event.COMPLETE, null, CHttpRequest.onResponse, true);
                hr.off(Laya.Event.ERROR, null, CHttpRequest.onResponse, true);
            }
        }
    }
    const reqMap = {
        10001: "/login",
        10002: "/api/levels",
        10003: "/api/levels/update",
        10006: "/api/users/auth",
        10008: "/api/addresses",
        10009: "/api/addresses/update",
        10010: "/api/toys/take",
        10011: "/api/orders/confirm",
        10012: "/api/orders/current",
        10013: "/api/friends",
        10014: "/api/skins",
        10015: "/api/skins/buy",
        10016: "/api/toys",
        10017: "/api/toys/buy",
        10018: "/api/powers/recover",
        10019: "/api/users/sync",
        10020: "/api/levels/start",
        10021: "/api/lucky/update",
        10022: "/api/lucky/notice",
        10023: "/api/lucky",
        10024: "/api/users/sub",
        10025: "/api/users/mygames",
        //10026: "/mygames"
        10026: ""
    };
    const errCodeMap = {
        1001: "登录过程中发生了错误",
        1002: "参数错误，检测参数是否漏传、错传",
        1003: "调用微信登录接口时返回错误",
        1004: "没有找到参数 uid 对应的用户，检测 uid 是否错传",
        1005: "登录过期，需要重新登录之后再发送其他请求",
        1006: "体力不足，关卡结算时扣体力，开始关卡之前客户端应该判断体力是否够用",
        1007: "订单未找到",
        1008: "创建用户时发生错误",
        1009: "关卡表数据错误",
        1010: "更新关卡时发生错误",
        1011: "已经拥有某个皮肤，重复购买",
        1012: "皮肤表数据错误",
        1013: "金币不足",
        1014: "零件不足",
        1015: "玩具表数据错误",
        1016: "已经拥有某个玩具，重复购买",
        1017: "没有可领取的玩具",
        1018: "订单已确认",
        1019: "订单未达到包邮条件无法确认"
    };
    class CReqProto {
        constructor() {}
        static reqProto(param) {
            return new Promise(function(resolve, reject) {
                let proto = reqMap[param.proto];
               // console.log("发送协议:", `${CReqProto.mDomain}${proto}`, "传递参数:", JSON.stringify(param.reqData));
                CHttpRequest.send(`${CReqProto.mDomain}${proto}`, param.reqData, Laya.Handler.create(null, (respData, evtType) => {
                    if (respData.errMsg || evtType === "error") {
                        if (evtType === "error") {
                            //console.error(`协议${CReqProto.mDomain}${proto}请求失败 msg:`, respData);
                        } else {
                           // console.error(`协议${CReqProto.mDomain}${proto}请求失败 msg:`, errCodeMap[respData.errCode] || respData.errMsg, "  errCode:", respData.errCode);
                        }
                        reject(respData);
                    } else {
                        resolve(respData);
                        console.log("收到协议:", `${CReqProto.mDomain}${proto}`);
                    }
                }), "post", "json");
            });
        }
        static reqLoginProto(param) {
            return CReqProto.reqProto({
                proto: 10001,
                reqData: param
            });
        }
        static reqGetMyGamesProto(param) {
            return CReqProto.reqProto({
                proto: 10025,
                reqData: param
            });
        }
        static reqGetOtherMyGamesProto(param) {
            
            return CReqProto.reqProto({
                proto: 10026,
                reqData: param
            });
        }
    }
    CReqProto.mDomain = "";
    //CReqProto.mDomain = "http://192.168.50.230:4001";
    class VvPlatform {
        constructor(appName) {
            this.sessionId = null;
            this.logUrl = "";
            //this.logUrl = "https://log.gridsgame.com/";
            this._isFirst = true;
            this._isStartTime = false;
            this.name = "vv";
            this.mErrorCount = 0;
            this._isBannerShow = false;
            this._isCreateBanner = false;
            this._canShowBanner = false;
            this._bannerStyle = null;
            this._isShowVideo = false;
            this._appName = appName;
            this.sessionId = this.genuid(1);
        }
        onShow(callback) {
            qg.onShow(callback);
        }
        genuid(num = 8) {
            let s = "";
            for (let i = 0; i < num; i++) {
                s += Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return s;
        }
        login(isDebug) {
            return new Promise((resolve, reject) => {
                qg.login({
                    success: res => {
                        CReqProto.reqLoginProto({
                            code: res.code,
                            gameName: PlatformGameName
                        }).then(data => {
                            resolve(data);
                        }).catch(err => {
                            console.log("login error:", err);
                            reject({
                                ip: "",
                                addr: [],
                                openid: "testwebopenid"
                            });
                        });
                    },
                    fail: () => {
                        reject({
                            ip: "",
                            addr: [],
                            openid: "testwebopenid"
                        });
                    },
                    complete: () => {}
                });
            });
        }
        showWarning(errCode) {
            if (errCode === ErrorCode.ExitMiniGame) {
                qg.showModal({
                    title: "温馨提示",
                    content: "配置文件加载失败，请重新启动游戏",
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            qg.exitApplication();
                        }
                    }
                });
            } else if (errCode === ErrorCode.TestExit) {
                qg.showModal({
                    title: "温馨提示",
                    content: "已清空数据，请重新启动游戏",
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            qg.exitApplication();
                        }
                    }
                });
            }
        }
        showToast(str) {
            qg.showToast({
                title: str,
                icon: "none"
            });
        }
        showShareModal(content, success, cancel) {
            qg.showModal({
                title: "系统提示",
                content: content,
                showCancel: true,
                confirmText: "分享到群",
                success: res => {
                    if (res && res.confirm === true) {
                        success && success();
                    } else if (res && res.cancel === true) {
                        cancel && cancel();
                    }
                }
            });
        }
        getLaunchOptionsSync() {
            return qg.getLaunchOptionsSync();
        }
        navigateToMiniProgram(obj, onFail, onSuccess, onComplete) {
            if (!obj) return;
            let exportPic = null, imageData = obj.image.split("/");
            if (imageData.length > 0) {
                let image = imageData.pop();
                exportPic = image.split("?")[0];
            }
            let data = {
                appId: obj.appid,
                pkgName: obj.title,
                appVendor: obj.appVendor,
                path: obj.path,
                type: obj.type,
                extraData: {
                    sourceAppName: this._appName,
                    sourceAppVendor: "格子游戏",
                    exportPic: exportPic
                },
                success: res => {
                    let items = this.getStorage(StorageKey.ExportSuccess) || "";
                    items += `,${obj.appid}`;
                    this.setStorage(StorageKey.ExportSuccess, items);
                    onSuccess && onSuccess(res);
                },
                fail: () => {
                    onFail && onFail();
                    return false;
                },
                complete: () => {
                    onComplete && onComplete();
                }
            };
            qg.navigateToMiniProgram(data);
            console.log("navigate to ->", data);
        }
        vibrate(long, callback) {
            if (long) {
                qg.vibrateLong({
                    success: () => {
                        callback && callback({
                            success: true
                        });
                    },
                    fail: () => {
                        callback && callback({
                            success: false
                        });
                    },
                    complete: () => {}
                });
            } else {
                qg.vibrateShort({
                    success: () => {
                        callback && callback({
                            success: true
                        });
                    },
                    fail: () => {
                        callback && callback({
                            success: false
                        });
                    },
                    complete: () => {}
                });
            }
        }
        createBannerAd(data, style, onError, onLoad, bShow) {
            if (onError) {
                this._onBannerError = onError;
            }
            if (onLoad) {
                this._onBannerLoaded = onLoad;
            }
            if (style) {
                this._bannerStyle = style;
            }
            if (data) {
                this._bannerData = data;
            } else {
                console.error("banner数据有误");
                return;
            }
            let obj = {
                posId: "1",
                adUnitId: "1",
                style: null
            };
            let index = Math.floor(Math.random() * this._bannerData.banner.length);
            obj.posId = this._bannerData.banner[index].id;
            obj.adUnitId = this._bannerData.banner[index].id;
            if (style) {
                obj.style = this._bannerStyle;
            }
            if (this._isFirst && bShow !== 0) {
                if (this._isStartTime) {
                    return;
                }
                this._isStartTime = true;
                Laya.timer.once(1 * 60 * 1e3, this, this.createBannerAd, [ data, null, null, null, 0 ]);
                return;
            }
            console.log("创建banner");
            this._isFirst = false;
            let bannerAd = qg.createBannerAd(obj);
            bShow && bannerAd.show();
            this._isBannerShow = bShow;
            this.mBannerAd = bannerAd;
            let This = this;
            bannerAd.onError(function(err) {
                console.error("bannerAd创建失败:", err);
                ++This.mErrorCount;
                if (This.mErrorCount > 3) {
                    This.mErrorCount = 0;
                    This._onBannerError && This._onBannerError();
                    return;
                }
                This.createBannerAd(data, null);
            });
            bannerAd.onClose && bannerAd.onClose(function() {
                This._isBannerShow = false;
            });
            bannerAd.onHide && bannerAd.onHide(function() {
                This._isBannerShow = false;
            });
            bannerAd.onLoad(function() {
                This._onBannerLoaded && This._onBannerLoaded();
            });
        }
        showBanner(obj) {
            console.log("显示banner");
            if (this._isBannerShow) {
                return;
            }
            if (!this.mBannerAd) {
                this.createBannerAd(this._bannerData, null, null, null, true);
                return;
            }
            this._isBannerShow = true;
            this.mBannerAd.show();
        }
        hideBanner() {
            console.log("hidebanner");
            if (!this.mBannerAd || !this._isBannerShow) {
                return;
            }
            this._isBannerShow = false;
            this.mBannerAd.hide();
        }
        createVideoAd(obj, onLoad, onClose, onError, bShow) {
            if (obj && !obj.id && !bShow) {
                console.error("广告单元id有误");
                return;
            }
            if (onClose) {
                this._videoSuccessFun = onClose;
            }
            if (onError) {
                this._videoFailFun = onError;
            }
            console.log("创建激励视频");
            let This = this;
            this._isShowVideo = bShow;
            let videoAd = this.mRewardedVideoAd;
            if (!videoAd) {
                let tmp = {};
                tmp.posId = obj.id;
                tmp.adUnitId = obj.id;
                videoAd = qg.createRewardedVideoAd(tmp);
                if (Laya.Browser.onQGMiniGame) {
                    videoAd.load();
                }
                const loadFun = function() {
                    This.mRewardedVideoAd = videoAd;
                    console.log("激励视频加载成功");
                    if (This._isShowVideo) {
                        Laya.SoundManager.musicMuted = true;
                        videoAd.show();
                    }
                };
                videoAd.onLoad(loadFun);
                const failFun = function(err) {
                    This._isShowVideo = false;
                    console.log("激励视频广告出错", err);
                    This._videoFailFun && This._videoFailFun();
                };
                videoAd.onError(failFun);
                const fun = function(res) {
                    This._isShowVideo = false;
                    Laya.SoundManager.musicMuted = false;
                    This._videoSuccessFun && This._videoSuccessFun(res);
                };
                videoAd.onClose(fun);
            } else {
                videoAd.load();
            }
        }
        showVideoAd() {
            let videoAd = this.mRewardedVideoAd;
            if (!videoAd) {
                return false;
            }
            Laya.SoundManager.musicMuted = true;
            console.log("显示激励视频");
            this.createVideoAd(null, null, null, null, true);
            return true;
        }
        createInterstitialAd(obj, onLoad, onClose, onError) {
            if (!obj) return;
            this._InterstitialAdData = obj;
            return;
            console.log("创建插屏广告");
            this._interstitialAd = qg.createInterstitialAd({
                adUnitId: obj.id,
                posId: obj.id
            });
        }
        showInterstitialAd() {
            return new Promise((resolve, reject) => {
                const obj = this._InterstitialAdData;
                if (!obj) resolve(false);
                this._interstitialAd = qg.createInterstitialAd({
                    adUnitId: obj.id,
                    posId: obj.id
                });
                this._interstitialAd.show().then(() => {
                    console.log("插屏广告显示");
                    resolve(true);
                }).catch(err => {
                    console.log("插屏广告展示失败", JSON.stringify(err));
                    resolve(false);
                });
            });
        }
        isWx() {
            return false;
        }
        isVv() {
            return true;
        }
        createVideo(obj) {}
        requestSubscribeMessage(obj) {}
        createUserInfoButton(obj) {}
        getSetting(withSubscriptions) {
            return new Promise((resole, reject) => {
                reject();
            });
        }
        registerUpdateEvents() {
            qg.onUpdateReady(function(index) {
                if (index === 1) {
                    qg.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，请重启应用",
                        showCancel: false,
                        success: function(res) {
                            if (res.confirm) {
                                qg.applyUpdate();
                            }
                        }
                    });
                }
            });
        }
        report(eventType, data, cb) {
            console.log("report:", eventType);
            this.send(this.logUrl + "report", {
                method: "POST",
                data: {
                    ...data,
                    ggsdkevent: eventType.toString()
                }
            }, cb);
        }
        send(url, data, cb) {
            const sysInfo = this.getSystemInfo();
            const launchOpt = this.getLaunchInfo();
            qg.request({
                url: `${this.logUrl}report`,
                method: "POST",
                data: {
                    ...data,
                    openid: null,
                    guid: null,
                    ggsdkversion: null,
                    ggsdkuid: null,
                    sessionId: this.sessionId,
                    sysInfo: sysInfo,
                    launchOpt: launchOpt,
                    appName: this._appName
                },
                success: res => {
                    cb && cb(null, res);
                },
                fail: err => {
                    cb && cb(err || "fail");
                },
                complete: () => {}
            });
        }
        getSystemInfo() {
            return qg.getSystemInfoSync && qg.getSystemInfoSync();
        }
        getLaunchInfo() {
            return qg.getLaunchOptionsSync && qg.getLaunchOptionsSync();
        }
        setStorage(key, value) {
            let result = qg.setStorageSync({
                key: key,
                value: value
            });
            console.log("setStorageSync " + result);
        }
        getStorage(key) {
            let value = qg.getStorageSync({
                key: key
            });
            
            return value;
        }
    }
    class OpPlatform extends VvPlatform {
        constructor(appName) {
            super(appName);
            this.name = "op";
        }
        isVv() {
            return false;
        }
        setStorage(key, value) {
            if (typeof value === "object") {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, value);
            }
        }
        getStorage(key) {
            let data = localStorage.getItem(key);
            try {
                return JSON.parse(data) || data;
            } catch (error) {
                return data;
            }
        }
    }
    const qq = Laya.Browser.window.qq;
    class QqPlatform extends VvPlatform {
        constructor(appName) {
            super(appName);
            this.name = "vv";
            this.mErrorCount = 0;
            this._isBannerShow = false;
            this._blockErrCount = 0;
            this._isShowInterstitialAd = false;
            window["qg"] = qq;
        }
        createBannerAd(data, style, onError, onLoad, bShow) {
            if (onError) {
                this._onBannerError = onError;
            }
            if (onLoad) {
                this._onBannerLoaded = onLoad;
            }
            if (data) {
                this._bannerData = data;
            } else {
                console.error("banner数据有误");
                return;
            }
            let obj = {
                posId: "1",
                adUnitId: "1",
                style: null
            };
            let index = Math.floor(Math.random() * this._bannerData.banner.length);
            obj.adUnitId = this._bannerData.banner[index].id;
            obj.style = {
                width: 320,
                left: 0,
                top: 0,
                height: 100
            };
            console.log("创建banner");
            let bannerAd = qq.createBannerAd(obj);
            bannerAd.onResize(size => {
                console.log("Resize后正式宽高:", size.width, size.height);
                const info = this.getSystemInfo();
                bannerAd.style.top = info.screenHeight - size.height;
                bannerAd.style.left = info.screenWidth / 2 - size.width / 2;
                bShow && bannerAd.show().then(() => {
                    console.log("bannerAd show ok");
                }).catch(res => {
                    console.log("bannerAd show error", res);
                });
            });
            this._isBannerShow = bShow;
            this.mBannerAd = bannerAd;
            let This = this;
            bannerAd.onError(function(err) {
                console.error("bannerAd创建失败:", err);
                ++This.mErrorCount;
                if (This.mErrorCount > 3) {
                    This.mErrorCount = 0;
                    This._onBannerError && This._onBannerError();
                    return;
                }
                This.createBannerAd(data, null);
            });
            bannerAd.onClose && bannerAd.onClose(function() {
                This._isBannerShow = false;
            });
            bannerAd.onHide && bannerAd.onHide(function() {
                This._isBannerShow = false;
            });
            bannerAd.onLoad(function() {
                This._onBannerLoaded && This._onBannerLoaded();
            });
        }
        showBanner(obj) {
            console.log("显示banner");
            if (this._isBannerShow) {
                return;
            }
            if (!this.mBannerAd) {
                this.createBannerAd(this._bannerData, null, null, null, true);
                return;
            }
            this._isBannerShow = true;
            this.mBannerAd.show();
        }
        hideBanner() {
            console.log("hidebanner");
            if (!this.mBannerAd || !this._isBannerShow) {
                return;
            }
            this._isBannerShow = false;
            this.mBannerAd.hide();
        }
        createVideoAd(obj, onLoad, onClose, onError, bShow) {
            if (obj && !obj.id && !bShow) {
                console.error("广告单元id有误");
                return;
            }
            if (onClose) {
                this._videoSuccessFun = onClose;
            }
            if (onError) {
                this._videoFailFun = onError;
            }
            if (onLoad) {
                this._videoLoadFun = onLoad;
            }
            console.log("创建激励视频");
            let This = this;
            let videoAd = this.mRewardedVideoAd;
            if (!videoAd) {
                videoAd = qq.createRewardedVideoAd({
                    adUnitId: obj.id
                });
                if (Laya.Browser.onQGMiniGame || Laya.Browser.onQQMiniGame) {
                    videoAd.load().then(e => {
                        if (bShow) {
                            Laya.SoundManager.musicMuted = true;
                            videoAd.show();
                        }
                        this._videoLoadFun && this._videoLoadFun();
                    }).catch(err => {
                        console.log(err);
                    });
                }
                const loadFun = function() {
                    This.mRewardedVideoAd = videoAd;
                    console.log("激励视频加载成功");
                };
                videoAd.onLoad(loadFun);
                const failFun = function(err) {
                    console.log("激励视频广告出错", err);
                    This._videoFailFun && This._videoFailFun();
                };
                videoAd.onError(failFun);
                const fun = function(res) {
                    Laya.SoundManager.musicMuted = false;
                    This._videoSuccessFun && This._videoSuccessFun(res);
                };
                videoAd.onClose(fun);
            } else {
                videoAd.load().then(() => {
                    this._videoLoadFun && this._videoLoadFun();
                    if (bShow) {
                        Laya.SoundManager.musicMuted = true;
                        videoAd.show();
                    }
                }).catch(err => {
                    console.log("激励视频load广告出错", err);
                });
            }
        }
        showVideoAd() {
            let videoAd = this.mRewardedVideoAd;
            if (!videoAd) {
                return false;
            }
            Laya.SoundManager.musicMuted = true;
            console.log("显示激励视频");
            this.createVideoAd(null, null, null, null, true);
            return true;
        }
        createInterstitialAd(obj, onLoad, onClose, onError) {
            if (!obj) return;
            console.log("创建插屏广告");
            const interstitialAd = qq.createInterstitialAd({
                adUnitId: obj.id
            });
            interstitialAd.load().then(() => {
                this._InterstitialAdData = obj;
                onLoad && onLoad();
                if (this._isShowInterstitialAd) {
                    this.showInterstitialAd();
                }
            }).catch(err => {
                console.error("load插屏广告Fail:", err);
                onError && onError();
            });
            interstitialAd.onClose(() => {
                onClose && onClose();
            });
        }
        showInterstitialAd() {
            this._isShowInterstitialAd = true;
            return new Promise((resolve, reject) => {
                const obj = this._InterstitialAdData;
                if (!obj) resolve(false);
                this._isShowInterstitialAd = false;
                this._interstitialAd.show().then(() => {
                    console.log("插屏广告显示");
                    resolve(true);
                }).catch(err => {
                    console.log("插屏广告展示失败", JSON.stringify(err));
                    resolve(false);
                });
            });
        }
        isWx() {
            return false;
        }
        isVv() {
            return false;
        }
        createAppBox(obj) {
            obj.adUnitId = obj.id;
            this._appBoxData = obj;
            return new Promise((resolve, reject) => {
                const appBox = qq.createAppBox(obj);
                appBox.load().then(() => {
                    this._appBox = appBox;
                    resolve();
                }).catch(err => {
                    reject();
                    console.error("createAppBox:", err);
                });
            });
        }
        showAppBox() {
            if (!this._appBox) {
                if (this._appBoxData) {
                    this.createAppBox(this._appBoxData).then(() => {
                        this._appBox.show();
                    });
                }
                return;
            }
            this._appBox.show();
        }
        createBlockAd(obj, pos) {
            if (!qq.createBlockAd) {
                return;
            }
            const info = this.getSystemInfo();
            const tmp = {
                adUnitId: obj.id,
                size: 1,
                orientation: "landscape",
                style: {
                    width: 320,
                    left: 100,
                    top: info.screenHeight / Laya.stage.height * pos.y,
                    height: 100
                }
            };
            const blockAd = qq.createBlockAd(tmp);
            blockAd.onError(err => {
                console.log("createBlockAd Err", err);
                if (++this._blockErrCount >= 3) {
                    this._blockErrCount = 0;
                    return;
                }
                this.createBlockAd(obj, pos);
            });
            blockAd.onResize(size => {
                console.log("Resize后正式宽高:", size.width, size.height);
                blockAd.style.top = info.screenHeight / Laya.stage.designHeight * pos.y;
                blockAd.style.left = info.screenWidth / Laya.stage.designWidth * pos.x;
            });
            blockAd.onLoad(() => {
                this._blockAd = blockAd;
                blockAd.show();
            });
        }
        showBlockAd() {
            if (!this._blockAd) {
                return;
            }
            this._blockAd.show();
        }
        hideBlockAd() {
            this._blockAd && this._blockAd.hide();
        }
        createVideo(obj) {}
        requestSubscribeMessage(obj) {}
        createUserInfoButton(obj) {}
        getSetting(withSubscriptions) {
            return new Promise((resole, reject) => {
                reject();
            });
        }
        registerUpdateEvents() {
            const updateManager = qq.getUpdateManager();
            updateManager.onUpdateReady(function() {
                qq.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，请重启应用",
                    showCancel: false,
                    success: function(res) {
                        if (res.confirm) {
                            updateManager.applyUpdate();
                        }
                    }
                });
            });
            updateManager.onUpdateFailed(function() {
                console.warn("新版本下载失败");
            });
        }
        setStorage(key, value) {
            qq.setStorageSync(key, value);
        }
        getStorage(key) {
            let value = qq.getStorageSync(key);
            return value;
        }
    }
    class MiniGame {
        constructor() {
            this._inited = false;
            this._configData = null;
            this._loginData = null;
            this._platform = null;
            this._appName = null;
            MiniGame._instnce = this;
        }
        static getInstance() {
            if (!this._instnce) {
                this._instnce = new MiniGame();
            }
            return this._instnce;
        }
        async init(appName, version, configUrl, isDebug = false) {
            this._appName = appName;
            this._inited = true;
            //CReqProto.mDomain = IsDebugMode ? "http://192.168.50.230:4001" : "https://toy.9dwork.com";
            CReqProto.mDomain = IsDebugMode ? "" : "";
            if (GameId !== "xexcavatortoys") {
                CReqProto.mDomain = "";
               // CReqProto.mDomain = "https://minigame.gridsgame.com";
            }
            window["ggsdk"] && window["ggsdk"].setServerUrl(CReqProto.mDomain);
            return new Promise((resolve, reject) => {
                Promise.all([ this.getPlatform().login(isDebug), this.loadConfig(configUrl, version, isDebug) ]).then(values => {
                    console.log("mini game init done ->", values);
                    const loginData = values[0];
                    if (loginData) {
                        this._loginData = loginData;
                        if (GameId === "xexcavatortoys") {
                            CReqProto.reqGetMyGamesProto({
                                uid: loginData.openid,
                                guid: loginData.guid
                            }).then(data => {
                                this._myPlayGames = data;
                                const configData = values[1];
                                if (configData) {
                                    this.setChange(configData, version);
                                    resolve(configData);
                                } else {
                                    console.error("load config fail");
                                    reject();
                                }
                            }).catch(err => {
                               // console.error("reqGetMyGamesProto err:", err);
                                const configData = values[1];
                                if (configData) {
                                    this.setChange(configData, version);
                                    resolve(configData);
                                } else {
                                    console.error("load config fail");
                                    reject();
                                }
                            });
                        } else {
                            let name = "";
                            if (Laya.Browser.onMiniGame) {
                                name = GameId;
                            } else {
                                name = PlatformGameName;
                            }
                            const configData = values[1];
                                if (configData) {
                                    this.setChange(configData, version);
                                    resolve(configData);
                                } else {
                                    console.error("load config fail");
                                    reject();
                                }
                        }
                    } else {
                        console.log("login fail");
                        reject();
                    }
                }).catch(reason => {
                    console.log("mini-game init fail:", reason);
                    reject();
                });
            });
        }
        setChange(configData, version) {
            let data = configData.ordinary;
            let isSpecial = version == configData.version;
            if (!isSpecial) {
                if (this._loginData && this._loginData.addr) {
                    for (let i = this._loginData.addr.length - 1; i >= 0; i--) {
                        if (configData.cities.indexOf(this._loginData.addr[i]) > -1) {
                            isSpecial = true;
                            break;
                        }
                    }
                }
            }
            if (isSpecial) {
                for (const key in configData.special) {
                    if (configData.special.hasOwnProperty(key)) {
                        const element = configData.special[key];
                        data[key] = element;
                    }
                }
            }
            this._configData = data;
            console.log("player config -> \n", this._configData);
        }
        loadConfig(url, version, isDebug) {
            url += "?r=" + version + "_" + (!isDebug ? Math.floor(Date.now() / (5 * 60 * 1e3)) : Math.random());
            return new Promise((resolve, reject) => {
                if (!url) reject();
                const maxReloadCount = 3;
                let xhr = new XMLHttpRequest(), reloadCount = 0, startLoad = () => {
                    console.log("--------------------xhr--------------------")
                    console.log(url);
                    xhr.open("GET", url);
                    xhr.send();
                };
                xhr.timeout = 8e3;
                xhr.ontimeout = (event => {
                    console.error(event);
                    if (++reloadCount < maxReloadCount) {
                        startLoad && startLoad();
                    } else {
                        reject(null);
                    }
                });
                xhr.onerror = (event => {
                    console.error(event);
                    if (++reloadCount < maxReloadCount) {
                        startLoad && startLoad();
                    } else {
                        reject(null);
                    }
                });
                xhr.onreadystatechange = (event => {
                    if (xhr.readyState === XMLHttpRequest.DONE && (String(url).indexOf("http") != 0 || xhr.status === 200)) {
                       resolve(JSON.parse(xhr.responseText));
                    } else if (xhr.status >= 400) {
                        if (++reloadCount < maxReloadCount) {
                            startLoad && startLoad();
                        } else {
                            reject(null);
                        }
                    }
                });
                startLoad();
            });
        }
        getPlatform() {
            if (!this._platform && this._inited) {
                if (Laya.Browser.onVVMiniGame) {
                    this._platformType = EPlatformType.vivo;
                    console.log("当前小游戏平台：vivo");
                    this._platform = new VvPlatform(this._appName);
                } else if (Laya.Browser.onQQMiniGame) {
                    console.log("当前小游戏平台：qq");
                    this._platformType = EPlatformType.qq;
                    this._platform = new QqPlatform(this._appName);
                } else if (Laya.Browser.onQGMiniGame) {
                    console.log("当前小游戏平台：oppo");
                    this._platformType = EPlatformType.oppo;
                    this._platform = new OpPlatform(this._appName);
                } else if (typeof wx === "undefined") {
                    this._platformType = EPlatformType.web;
                    this._platform = new WebPlatform();
                    console.log("");
                } else {
                    this._platformType = EPlatformType.wx;
                    this._platform = new WxPlatform(this._appName);
                    console.log("当前小游戏平台：Wx");
                }
            }
            return this._platform;
        }
        iswx() {
            return typeof wx !== "undefined";
        }
        getLoginData() {
            return this._loginData;
        }
        getConfig() {
            return this._configData;
        }
        getCustomConf() {
            if (this._configData) {
                return this._configData.customData;
            }
            return null;
        }
        checkBannerAdOpen() {
            const banner = this.getBannerByPlatform();
            if (this._configData && this._configData.bannerSwitch.count > 0 && banner && banner.length > 0) {
                return true;
            }
            return false;
        }
        getBannerByPlatform() {
            let data;
            switch (this._platformType) {
              case EPlatformType.wx:
                data = this._configData.adData.banner;
                break;

              case EPlatformType.vivo:
                data = this._configData.adData.vivobanner;
                break;

              case EPlatformType.oppo:
                data = this._configData.adData.oppobanner;
                break;

              case EPlatformType.qq:
                data = this._configData.adData.qqbanner;
                break;

              default:
                break;
            }
            return data;
        }
        getBannerAdData() {
            if (this.checkBannerAdOpen()) {
                return {
                    banner: this.getBannerByPlatform(),
                    switchCount: this._configData.bannerSwitch.count,
                    switchTime: this._configData.bannerSwitch.time
                };
            }
            return null;
        }
        checkVideoAdOpen() {
            const data = this.getVideoByPlatform();
            if (this._configData && data && data.length > 0) {
                return true;
            }
            return false;
        }
        getVideoByPlatform() {
            let data;
            switch (this._platformType) {
              case EPlatformType.wx:
                data = this._configData.adData.video;
                break;

              case EPlatformType.vivo:
                data = this._configData.adData.vivovideo;
                break;

              case EPlatformType.oppo:
                data = this._configData.adData.oppovideo;
                break;

              case EPlatformType.qq:
                data = this._configData.adData.qqvideo;
                break;

              default:
                break;
            }
            return data;
        }
        getPlatformType() {
            return this._platformType;
        }
        getVideoAdData() {
            const data = this.getVideoByPlatform();
            if (this.checkVideoAdOpen()) {
                return data[0];
            }
            return null;
        }
        checkInterstitialAdOpen() {
            if (this._configData) {
                return this._configData["switch"] && true == this._configData["switch"].showInterstitialAd;
            }
            return false;
        }
        checkBlockAdOpen() {
            if (this._configData) {
                return this._configData["switch"] && true == this._configData["switch"].showBlockAd;
            }
            return false;
        }
        checkBoxAdOpen() {
            if (this._configData) {
                return this._configData["switch"] && true == this._configData["switch"].showBoxAd;
            }
            return false;
        }
        getBlockAd() {
            if (this.checkBlockAdOpen()) {
                let list = this._configData.adData.qqblock;
                if (list && list.length > 0) {
                    return MathUtil.randomItem(list);
                }
            }
            return null;
        }
        getAppBox() {
            if (this.checkBoxAdOpen()) {
                let list = this._configData.adData.qqbox;
                if (list && list.length > 0) {
                    return MathUtil.randomItem(list);
                }
            }
            return null;
        }
        getInterstitialAdByPlatform() {
            let data;
            switch (this._platformType) {
              case EPlatformType.wx:
                data = this._configData.adData.interstitial;
                break;

              case EPlatformType.vivo:
                data = this._configData.adData.vivointerstitial;
                break;

              case EPlatformType.oppo:
                data = this._configData.adData.oppointerstitial;
                break;

              case EPlatformType.qq:
                data = this._configData.adData.qqinterstitial;
                break;

              default:
                break;
            }
            return data;
        }
        getInterstitialAdData() {
            if (this.checkInterstitialAdOpen()) {
                let list = this.getInterstitialAdByPlatform();
                if (list && list.length > 0) {
                    return MathUtil.randomItem(list);
                }
            }
            return null;
        }
        checkExportAdOpen() {
            if (typeof this._isExportAdOpen === "undefined") {
                if (this._configData) {
                    let isOpen = this._configData["switch"] && true == this._configData["switch"].showExportAd;
                    if (isOpen) {
                        const thePlatform = this.getPlatform();
                        let launchInfo = thePlatform.getLaunchInfo && thePlatform.getLaunchInfo();
                        console.log(launchInfo);
                        let adid = launchInfo && launchInfo.query.adid || null;
                        console.log("adid", adid);
                        if (adid) {
                            let screening = this._configData.customData.screening || [];
                            if (screening.indexOf(adid) != -1) isOpen = false;
                        }
                    }
                    this._isExportAdOpen = isOpen;
                } else {
                    this._isExportAdOpen = false;
                }
            }
            return this._isExportAdOpen;
        }
        checkExportAdTypeOpen(type) {
            if (this.checkExportAdOpen()) {
                return this._configData["export"][type] && this._configData["export"][type]["items"] && this._configData["export"][type]["items"].length > 0;
            }
            return false;
        }
        getExportAdData(type) {
        //    if (this.checkExportAdTypeOpen(type)) {
        //        let data = [], appList = [ ...this._configData.appList ], exportData = this._configData["export"][type];
        //        let successExports = this.getPlatform().getStorage(StorageKey.ExportSuccess);
        //        if (successExports) {
        //            let exportList = successExports.split(",");
        //            for (let i = appList.length - 1; i >= 0; i--) {
        //                if (exportList.indexOf(appList[i].appid) != -1) {
        //                    appList.splice(i, 1);
        //                }
        //            }
        //        }
        //        for (let i = appList.length - 1; i >= 0; i--) {
        //            const index = this._myPlayGames && this._myPlayGames.games && this._myPlayGames.games.findIndex(value => {
        //                return value.appid === appList[i].appid;
        //            });
        //            if (index != -1 && typeof index === "number") {
        //                appList.splice(i, 1);
        //            }
        //        }
        //        let exportAppCount = appList.length;
        //        for (let i = exportData.items.length - 1; i >= 0; i--) {
        //            const item = exportData.items[i];
        //            for (let j = 0; j < exportAppCount; j++) {
        //                const app = appList[j];
        //                if (app.gid != item) continue;
        //                let appData = {
        //                    ...app
        //                };
        //                appData.type = type;
        //                data.push(appData);
        //            }
        //        }
        //        data = data.sort((a, b) => {
        //            if (a.weight > b.weight) return -1;
        //            if (a.weight < b.weight) return 1;
        //            return 0;
        //        });
        //        data = data.slice(0, Math.min(data.length, exportData.displayCount));
        //        data = data.sort((a, b) => Math.random() > .5 ? 1 : -1);
        //        console.log("获取导出类型数据");
        //        return data;
        //    }
        //    return null;
        }
        checkBannerFakeClickOpen() {
            if (this._configData) {
                return this._configData["switch"] && this._configData["switch"].bannerFakeClick == true;
            }
            return false;
        }
        checkFreeGiftOpen() {
            if (this._configData) {
                return this._configData["switch"] && this._configData["switch"].freeGift == true;
            }
            return false;
        }
        checkShowVideoAdAfterLaunchOpen() {
            if (this._configData) {
                return this._configData["switch"] && this._configData["switch"].showVideoAdAfterLaunch == true;
            }
            return false;
        }
        checkShowVideoAdWhenGameStart(level) {
            if (this._configData && this._configData["switch"] && this._configData["switch"].showVideoAdWhenGameStart == true) {
                let levels = this._configData.customData.showVideoAdWhenGameStartLevel;
                if (levels && levels.indexOf(level) != -1) {
                    return true;
                }
            }
            return false;
        }
        createAppBox() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            return thePlatform.createAppBox && thePlatform.createAppBox(this.getAppBox());
        }
        showAppBox() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.showAppBox && thePlatform.showAppBox();
        }
        hideAppBox() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.hideAppBox && thePlatform.hideAppBox();
        }
        createBlockAd(pos) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.createBlockAd && thePlatform.createBlockAd(this.getBlockAd(), pos);
        }
        showBlockAd() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.showBlockAd && thePlatform.showBlockAd();
        }
        hideBlockAd() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.hideBlockAd && thePlatform.hideBlockAd();
        }
        createVideoAd(onLoad, onClose, onError) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.createVideoAd && thePlatform.createVideoAd(this.getVideoAdData(), onLoad, onClose, onError);
        }
        showVideoAd() {
            if (this.iswx()) {
                const thePlatform = this.getPlatform();
                if (thePlatform.showVideoAd) {
                    return thePlatform.showVideoAd();
                }
            }
            return false;
        }
        createBannerAd(style, onError, onLoad) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.createBannerAd && thePlatform.createBannerAd(this.getBannerAdData(), style, onError, onLoad);
        }
        createFullScreenBannerAd(isLandscape = true) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.createFullScreenBannerAd && thePlatform.createFullScreenBannerAd(this.getBannerAdData(), isLandscape);
        }
        showBanner(isFullScreen = false) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.showBanner && thePlatform.showBanner(isFullScreen);
        }
        hideBanner() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.hideBanner && thePlatform.hideBanner();
        }
        createInterstitialAd(onLoad, onClose, onError) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform["createInterstitialAd"] && thePlatform["createInterstitialAd"](this.getInterstitialAdData(), onLoad, onClose, onError);
        }
        checkShowInterstitialAd(level) {
            if (this.checkInterstitialAdOpen()) {
                let levels = this._configData.customData.showInterstitialAdLevel;
                if (levels && levels.indexOf(level) != -1) {
                    return true;
                }
            }
            return false;
        }
        async showInterstitialAd() {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            if (thePlatform.showInterstitialAd) {
                try {
                    let ok = await thePlatform.showInterstitialAd();
                    return ok;
                } catch (err) {
                    return false;
                }
            } else {
                return false;
            }
        }
        report(eventType, data) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.report && thePlatform.report(eventType, data);
        }
        trackTA(eventType, data) {
            if (!this.iswx()) return;
            window["ggsdk"] && window["ggsdk"].trackTA(eventType, data);
        }
        calcBottomBannerSize(width = 300) {
            if (!this.getPlatform().getSystemInfo) {
                return;
            }
            let sysinfo = this.getPlatform().getSystemInfo();
            if (!sysinfo) {
                return;
            }
            let deviceWidth = sysinfo["windowWidth"];
            let deviceHeight = sysinfo["windowHeight"];
            let designPixWidth = 1334;
            let designPixHeight = 750;
            let bannerWidth = width * deviceWidth / designPixWidth;
            let minDeviceWidth = 300;
            if (bannerWidth < minDeviceWidth) bannerWidth = minDeviceWidth;
            let xpos = (deviceWidth - bannerWidth) / 2;
            let minYpos = 105;
            let ypos = minYpos;
            if (sysinfo.model.indexOf("iPhone X") != -1 || sysinfo.model.indexOf("iPhone 11") != -1) {
                console.log("iphone x..");
                ypos += 20;
            }
            return {
                left: xpos,
                width: bannerWidth,
                top: deviceHeight - ypos
            };
        }
    }
    class SDKMgr {
        constructor() {
            this._onVideoAdClosed = null;
            this._onVideoAdError = null;
            this._isShowVideoAd = false;
            SDKMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) this._instance = new SDKMgr();
            return this._instance;
        }
        init() {
            if (this._sdk) return null;
            this._sdk = MiniGame.getInstance();
            let confURL = GlobalConfigUrl;
            if ((this.iswx() || IsLoadRemoteRes) && !Laya.Browser.onQQMiniGame) confURL = RemoteUrls[IsDebugMode ? 1 : 0] + confURL;
            if (Laya.Browser.onQQMiniGame) {
                confURL = QQRemoteUrl + confURL;
            }
            return new Promise((resolve, reject) => {
                this._sdk.init(GameName, `${GamePublishDate}.${GameVersion.split(".").join("")}`, confURL, IsDebugMode).then(conf => {
                    resolve();
                }).catch(() => {
                    reject();
                });
            });
        }
        iswx() {
            return typeof wx !== "undefined";
        }
        getLoginData() {
            if (this._sdk) return this._sdk.getLoginData();
            return null;
        }
        getCustomConf() {
            if (this._sdk) return this._sdk.getCustomConf();
            return null;
        }
        checkBannerAdOpen() {
            if (this._sdk) return this._sdk.checkBannerAdOpen();
            return false;
        }
        getBannerAdData() {
            if (this._sdk) return this._sdk.getBannerAdData();
            return null;
        }
        checkVideoAdOpen() {
            if (this._sdk) return this._sdk.checkVideoAdOpen();
            return false;
        }
        getVideoAdData() {
            if (this._sdk) return this._sdk.getVideoAdData();
            return null;
        }
        checkInterstitialAdOpen() {
            if (this._sdk) return this._sdk.checkInterstitialAdOpen();
            return null;
        }
        getInterstitialAdData() {
            if (this._sdk) return this._sdk.getInterstitialAdData();
            return null;
        }
        createInterstitialAd(onLoad, onClose, onError) {
            if (this._sdk) this._sdk.createInterstitialAd(onLoad, onClose, onError);
        }
        checkShowInterstitialAd(level) {
            if (this._sdk) return this._sdk.checkShowInterstitialAd(level);
            return false;
        }
        async showInterstitialAd() {
            if (this._sdk) {
                let ok = await this._sdk.showInterstitialAd();
                return ok;
            }
            return false;
        }
        checkExportAdOpen() {
            if (this._sdk) return this._sdk.checkExportAdOpen();
            return false;
        }
        checkExportAdTypeOpen(type) {
            if (this._sdk) return this._sdk.checkExportAdTypeOpen(type);
            return false;
        }
        getExportAdData(type) {
            if (this._sdk) return this._sdk.getExportAdData(type);
            return null;
        }
        checkBannerFakeClickOpen() {
            if (this._sdk) return this._sdk.checkBannerFakeClickOpen();
            return false;
        }
        checkFreeGiftOpen() {
            if (this._sdk) return this._sdk.checkFreeGiftOpen();
            return false;
        }
        checkShowVideoAdAfterLaunchOpen() {
            if (this._sdk) return this._sdk.checkShowVideoAdAfterLaunchOpen();
            return false;
        }
        checkShowVideoAdWhenGameStart(level) {
            if (this._sdk) return this._sdk.checkShowVideoAdWhenGameStart(level);
            return false;
        }
        createVideoAd() {
            if (this._sdk) {
                if (this._sdk.checkVideoAdOpen()) {
                    this._sdk.createVideoAd(this.onRewardedVideoAdLoaded.bind(this), this.onRewardedVideoAdClosed.bind(this), this.onRewardedVideoAdError.bind(this));
                }
            }
        }
        onRewardedVideoAdLoaded(data) {
            gg.event.event(AdEvent.VideoLoaded);
        }
        onRewardedVideoAdClosed(data) {
            gg.event.event(AdEvent.VideoClosed, data);
            if (this._isShowVideoAd) {
                this._isShowVideoAd = false;
                if (this._onVideoAdClosed) this._onVideoAdClosed(data);
                this._onVideoAdClosed = null;
                this._onVideoAdError = null;
            }
        }
        onRewardedVideoAdError(data) {
            gg.event.event(AdEvent.VideoError, data);
            if (this._isShowVideoAd) {
                this._isShowVideoAd = false;
                if (this._onVideoAdError) this._onVideoAdError(data);
                this._onVideoAdClosed = null;
                this._onVideoAdError = null;
            }
        }
        showVideoAd(onClosed, onError) {
            if (this._isShowVideoAd) return;
            if (this._sdk && this._sdk.showVideoAd()) {
                this._isShowVideoAd = true;
                this._onVideoAdError = onError;
                this._onVideoAdClosed = onClosed;
                return;
            }
            if (onError) onError();
        }
        createBannerAd(onError, onLoad, width) {
            if (this._sdk) {
                if (this._sdk.checkBannerAdOpen()) {
                    this._sdk.createBannerAd(this._sdk.calcBottomBannerSize(width || 300), onError, onLoad);
                }
            }
        }
        createFullScreenBannerAd(isLandscape = true) {
            if (this._sdk) {
                if (this._sdk.checkBannerAdOpen()) {
                    this._sdk.createFullScreenBannerAd(isLandscape);
                }
            }
        }
        showBanner(isFullScreen = false) {
            if (this._sdk) this._sdk.showBanner(isFullScreen);
        }
        hideBanner() {
            if (this._sdk) this._sdk.hideBanner();
        }
        report(eventType, data) {
            if (this._sdk) this._sdk.report(eventType, data);
        }
        trackTA(eventType, data) {
            if (this._sdk) this._sdk.trackTA(eventType, data);
        }
        getPlatform() {
            if (this._sdk) return this._sdk.getPlatform();
            return null;
        }
        getPlatformType() {
            if (this._sdk) return this._sdk.getPlatformType();
            return null;
        }
        createBlockAd(pos) {
            if (this._sdk) return this._sdk.createBlockAd(pos);
        }
        createAppBox() {
            if (this._sdk) return this._sdk.createAppBox();
        }
        showBlockAd() {
            if (this._sdk) return this._sdk.showBlockAd();
        }
        showAppBox() {
            if (this._sdk) return this._sdk.showAppBox();
        }
        hideBlockAd() {
            if (this._sdk) return this._sdk.hideBlockAd();
        }
        hideAppBox() {
            if (this._sdk) return this._sdk.hideAppBox();
        }
    }
    class DataMgr {
        //datamgr
        constructor() {
            DataMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) this._instance = new DataMgr();
            return this._instance;
        }
        getGameConf() {
            return this._gameConf;
        }
        init() {
            return new Promise((resolve, reject) => {
                if (!GameConfigUrl || GameConfigUrl.length == 0) return resolve();
                let url = `${GameId}_conf/${GameConfigUrl}`;
                url += "?r=" + GamePublishDate + "." + GameVersion + "_" + (!IsDebugMode ? Math.floor(Date.now() / (5 * 60 * 1e3)) : Math.random());
                if ((gg.sdk.iswx() || IsLoadRemoteRes) && !Laya.Browser.onQQMiniGame) url = `${RemoteUrls[IsDebugMode ? 1 : 0]}${url}`;
                if (Laya.Browser.onQQMiniGame) url = `${QQRemoteUrl}${url}`;
                console.log("game consfig:", url);
                gg.res.loadJSON(url).then(data => {
                    this._gameConf = data;
                    resolve();
                }).catch(() => {
                    console.error("fail to load game config...");
                    reject();
                });
            });
        }
        setStorage(key, value) {
            let platform = gg.sdk.getPlatform();
            if (platform) {
                platform.setStorage(key, value);
            }
        }
        getStorage(key) {
            
            
            let platform = gg.sdk.getPlatform();
            console.log("<=============storage===============>");
            console.log(key);
            console.log(platform.getStorage(key))
            if (platform) {
                return platform.getStorage(key);
            }

            return null;
        }
    }
    class PlayerModel {
        constructor() {
            this.level = 1;
            this.gold = 0;
            this.money = 1e3;
            this.carId = 1;
            this.cars = {
                1: {}
            };
        }
    }
    class PlayerMgr {
        constructor() {
            this._data = null;
            this._storageKey = GameId;
            PlayerMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) this._instance = new PlayerMgr();
            return this._instance;
        }
        init() {
            if (this._data) return;
            let data = gg.data.getStorage(this._storageKey);
            if (data) {
                this._data = data;
            } else {
                let player = new PlayerModel();
                this._data = player;
                this.save();
            }
        }
        save() {
            if (this._data) gg.data.setStorage(this._storageKey, this._data);
        }
        getData() {
            return this._data;
        }
        update(key, value, isFlush = true) {
            if (this._data && this._data.hasOwnProperty(key)) {
                if (this._data[key] != value) {
                    this._data[key] = value;
                    if (isFlush) this.save();
                }
            }
        }
    }
    class SoundMgr {
        constructor() {
            SoundMgr._isntance = this;
        }
        static getInstance() {
            if (!this._isntance) this._isntance = new SoundMgr();
            return this._isntance;
        }
    }
    class LogMgr {
        constructor() {
            LogMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) this._instance = new LogMgr();
            return this._instance;
        }
        createReportData(logType) {
            let data = {};
            data["logType"] = logType;
            data["additional"] = null;
            data["gameVersion"] = `${GamePublishDate}_${GameVersion}`;
            let loginData = gg.sdk.getLoginData();
            data["isNew"] = loginData.isNew || false;
            data["channel"] = loginData.channel || null;
            let thePlatform = gg.sdk.getPlatform();
            if (thePlatform.getLaunchOptionsSync) {
                let launchOptions = thePlatform.getLaunchOptionsSync();
                if (launchOptions && launchOptions.query) data["additional"] = launchOptions.query.additional;
            }
            return data;
        }
        report(data) {
            if (!data) return;
            gg.sdk.report(data.logType, data);
            console.log("[Log] ", data);
        }
        log(event, param) {
            let data = this.createReportData(event);
            if (param) {
                for (const key in param) {
                    if (!Object.prototype.hasOwnProperty.call(data, key)) {
                        data[key] = param[key];
                    }
                }
            }
            this.report(data);
        }
    }
    class InitMgr {
        constructor() {
            this._inited = false;
            InitMgr._instance = this;
        }
        static getInstance() {
            if (!this._instance) this._instance = new InitMgr();
            return this._instance;
        }
        init() {
            if (this._inited) return;
            this._inited = true;
            const gg = {};
            window["gg"] = gg;
            gg.event = new Laya.EventDispatcher();
            gg.ui = UIMgr.getInstance();
            gg.sdk = SDKMgr.getInstance();
            gg.res = ResMgr.getInstance();
            gg.data = DataMgr.getInstance();
            gg.player = PlayerMgr.getInstance();
            gg.sound = SoundMgr.getInstance();
            gg.log = LogMgr.getInstance();
            return new Promise((resolve, reject) => {
                Promise.all([ gg.sdk.init(), gg.data.init() ]).then(datas => {
                    let conf = gg.data.getGameConf(), resVersion = "";
                    if (conf && conf.resVersion) {
                        resVersion = conf.resVersion;
                    }
                    gg.res.setBasePath(conf.resVersion);
                    gg.res.setNativeFiles();
                    gg.player.init();
                    if (gg.sdk.iswx()) {
                        gg.sdk.getPlatform().onShow(data => {
                            gg.event.event(AppEvent.OnShow, data);
                        });
                    }
                    resolve();
                }).catch(err => {
                    console.error("err:", err);
                    gg.sdk.getPlatform().showWarning(ErrorCode.ExitMiniGame);
                    reject();
                });
            });
        }
    }
    class LoginScene extends SceneLayout {
        constructor() {
            super(...arguments);
            this._isResLoading = false;
            this._preloadResStages = 0;
            this._loadedResStage = 0;
        }
        onAwake() {
            super.onAwake();
            this.owner.autoDestroyAtClosed = true;
            this.versionLbl.text = `v${GameVersion}`;
            this.progressBar.value = 0;
            this.tipsLbl.text = Locale.LoadRes;
            InitMgr.getInstance().init().then(() => {
                GameLog.login(LoginStateTypes.LoadConfig);
                this.loadRes();
            });
        }
        loadRes() {
            GameLog.login(LoginStateTypes.LoadRes);
            let preloadRes = PreloadRes.getRes();
            this._preloadResStages = preloadRes.stage;
            if (this._preloadResStages == 0) {
                setTimeout(() => {
                    this.checkLoadResOver();
                }, 1e3);
            } else {
                Laya.loader.once(Laya.Event.ERROR, this, this.onLoadResError);
                if (preloadRes.d2Res.length > 0) Laya.loader.load(preloadRes.d2Res, Laya.Handler.create(this, this.onLoad2DResOver));
                if (preloadRes.d3Res.length > 0) Laya.loader.create(preloadRes.d3Res, Laya.Handler.create(this, this.onLoad3DResOver));
                console.log("preload res count:", this._preloadResStages);
            }
            this._isResLoading = true;
        }
        onLoadResError(message) {
            if (this.tipsLbl && !this.tipsLbl.destroyed) {
                this.tipsLbl.text = Locale.LoadResFail;
            }
            console.error("Load Res Error: ", message);
        }
        onLoad2DResOver() {
            this.checkLoadResOver();
        }
        onLoad3DResOver() {
            this.checkLoadResOver();
        }
        checkLoadResOver() {
            if (++this._loadedResStage < this._preloadResStages) return;
            this.progressBar.value = 1;
            this._isResLoading = true;
            this.enterGame();
        }
        onLateUpdate() {
            if (!this._isResLoading) return;
            let progress = this.progressBar.value + Laya.timer.delta * .001 * .6;
            this.progressBar.value = progress;
            if (progress > 1) progress = 1;
            this.progressBar.value = progress;
        }
        enterGame() {
            gg.ui.switchScene("res/scenes/GameScene.scene", false, Laya.Handler.create(this, scene => {
                if (!scene) {
                    if (this.tipsLbl) this.tipsLbl.text = Locale.LoadResFail;
                    return;
                }
                scene.visible = false;
                setTimeout(() => {
                    gg.ui.closeScene(this.owner);
                    scene.visible = true;
                    GameLog.login(LoginStateTypes.EnterGame);
                }, 1500);
            }));
        }
    }
    class GameConfig {
        constructor() {}
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("components/ui/ScaleButton.ts", ScaleButton);
            reg("components/ui/FreeGift.ts", FreeGift);
            reg("components/dialog/FreeGiftDialog.ts", FreeGiftDialog);
            reg("components/dialog/FreeGiftFixCarDialog.ts", FreeGiftFixCarDialog);
            reg("components/ui/ScrollList.ts", ScrollList);
            reg("components/dialog/RecommendDialog.ts", RecommendDialog);
            reg("components/dialog/SettleDialog.ts", SettleDialog);
            reg("components/dialog/ShopDialog.ts", ShopDialog);
            reg("components/dialog/ToastDialog.ts", ToastDialog);
            reg("components/dialog/TryExportDialog.ts", TryExportDialog);
            reg("components/ui/CoupletAd.ts", CoupletAd);
            reg("components/ui/ExportItem.ts", ExportItem);
            reg("components/ui/FlowAd.ts", FlowAd);
            reg("components/ui/GameSceneAd.ts", GameSceneAd);
            reg("components/ui/SettleAd.ts", SettleAd);
            reg("components/ui/SideAd.ts", SideAd);
            reg("components/scenes/GameScene.ts", GameScene);
            reg("gamePlay/GamePlay.ts", GamePlay);
            reg("components/scenes/LoginScene.ts", LoginScene);
        }
    }
    GameConfig.width = 1334;
    GameConfig.height = 750;
    GameConfig.scaleMode = "fixedheight";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "res/scenes/LoginScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    class Main {
        constructor() {
            //console.log(GameConfig.width, GameConfig.height);
            if (window["Laya3D"]) Laya3D.init(1334, 750); else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = "showall";
            Laya.stage.screenMode = "none";
            Laya.stage.alignV = "middle";
            Laya.stage.alignH = "center";
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat) Laya.Stat.show();
            //Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            platform.getInstance().cargamesstartup("Fish-Parking",()=>{
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
                var picCar=platform.getInstance().createLogo();
                picCar.right=0;
                
                var btnAdd=new Laya.Label();
                Laya.stage.addChild(btnAdd);
                btnAdd.text="ADD"
                btnAdd.fontSize=50;
                btnAdd.centerY=-200;
                btnAdd.centerX=0;
                btnAdd.color="#FFFFFF";
                btnAdd.on(Laya.Event.MOUSE_DOWN,this,()=>{
                    var a=DataMgr.getInstance().getStorage("noviceparking");
                    console.log(a)
                    a.gold+=100000;
                    a.level+=1;
                    DataMgr.getInstance().setStorage("noviceparking",a);
                    window.page._refreshGold();

                })

                btnAdd.visible = false


                
  })
        }
        onVersionLoaded() {
         Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();
})();

console.log = console.warn = function(){}