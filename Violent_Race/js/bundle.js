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
    var VideoAdEvent;
    (function(VideoAdEvent) {
        VideoAdEvent["Loaded"] = "Loaded";
        VideoAdEvent["Closed"] = "Closed";
        VideoAdEvent["Error"] = "Error";
    })(VideoAdEvent || (VideoAdEvent = {}));
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
        GamePlayEvent["GameStart"] = "GameStart";
        GamePlayEvent["GameOver"] = "GameOver";
        GamePlayEvent["TrunRight"] = "TrunRight";
        GamePlayEvent["TrunLeft"] = "TrunLeft";
        GamePlayEvent["TurnOver"] = "TurnOver";
        GamePlayEvent["GoPo"] = "GoPo";
        GamePlayEvent["CarCrash"] = "CarCrash";
        GamePlayEvent["CarDrop"] = "CarDrop";
        GamePlayEvent["OpenRebornPoint"] = "OpenRebornPoint";
        GamePlayEvent["ArriveTerminal"] = "ArriveTerminal";
        GamePlayEvent["ReLoad"] = "ReLoad";
        GamePlayEvent["CarCrashUI"] = "CarCrashUI";
        GamePlayEvent["ReLoadScene"] = "ReLoadScene";
        GamePlayEvent["Failed"] = "Failed";
        GamePlayEvent["CarSpeedUp"] = "CarSpeedUp";
        GamePlayEvent["CarSlower"] = "CarSlower";
        GamePlayEvent["CameraMove"] = "CameraMove";
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
        }
        onAwake() {
            super.onAwake();
            this.btn.on(Laya.Event.CLICK, this, this.onClickBtn);
            this.progressBar.value = 0;
            this._target = .1 + Math.random() * .03;
            console.log("target:", this._target);
        }
        init(onComplete, onClickGetBtn) {
            this._onComplete = onComplete;
            this._onClickGetBtn = onClickGetBtn;
            gg.sdk.hideBanner();
            gg.sdk.createFullScreenBannerAd(GameConfig.screenMode === "horizontal");
        }
        onClickBtn(event) {
            this._progress += this._increase;
            this._onClickGetBtn && this._onClickGetBtn();
        }
        onUpdate() {
            if (this._isComplete) return;
            if (this._progress > 0) this._progress -= this._reduce;
            if (this._progress < 0) this._progress = 0;
            if (this.progressBar) this.progressBar.value = this._progress;
            if (this._progress >= this._target) this.complete();
        }
        complete() {
            if (this._isComplete) return;
            this._isComplete = true;
            gg.sdk.showBanner(true);
            gg.event.event(GamePlayEvent.GetFreeGift, this.rewarded);
            setTimeout(() => {
                this._onComplete && this._onComplete();
                gg.sdk.hideBanner();
            }, 1200);
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
    var ExportType;
    (function(ExportType) {
        ExportType["Couplet"] = "couplet";
        ExportType["TryExport"] = "tryexport";
        ExportType["Recommend"] = "recommend";
    })(ExportType || (ExportType = {}));
    var StorageKey;
    (function(StorageKey) {
        StorageKey["ExportSuccess"] = "ExportSuccess";
    })(StorageKey || (StorageKey = {}));
    class ListItem extends Laya.Script {
        onAwake() {
            this.updateView();
        }
        onClick(event) {}
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
                this._timeoutId = setTimeout(() => {
                    gg.sdk.showBanner();
                }, 2e3);
            }
            this.initFriendList();
            this.initRecommendList();
        }
        initFriendList() {
            if (gg.ui.checkSceneIsHorizontal()) {
                this.friendList.visible = false;
                this.friendTitleSp.visible = false;
                return;
            }
            let exportData = gg.sdk.getExportData(ExportType.Recommend);
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
            let exportData = gg.sdk.getExportData(ExportType.Recommend);
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
            clearTimeout(this._timeoutId);
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
        GetRewardSuccess: "Successed to get the reward",
        GetRewardFail: "Failed to get the reward",
        CurrentLevel: "Level $0",
        NoMoney: "There is not enough money"
    };
    const GameId = "smashcarplus";
    const GameName = "爆裂赛车";
    const GamePublishDate = "20200727";
    const GameVersion = "1.2.6";
    const RemoteUrl = `https://mini.gridsgame.com/minigames/uploads/${GameId}/`;
    const GlobalConfigUrl = "config_production.json";
    const GameConfigUrl = "game_conf.json";
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
        Components["CoupletAd"] = "res/prefabs/CoupletAd.scene";
        Components["GameSceneAd"] = "res/prefabs/GameSceneAd.scene";
        Components["SettleAd"] = "res/prefabs/SettleAd.scene";
        Components["CrashPage"] = "res/prefabs/CrashPage.scene";
    })(Components || (Components = {}));
    const PreloadRes = {
        "2d": [],
        "3d": [ "res/d3/scene_game/Conventional/scene_game.ls", "res/d3/checkpoint/checkpoint1/Conventional/scene_game.lh", "res/d3/car/car_1/Conventional/scene_game.lh", "res/d3/fx/fx_boom/Conventional/scene_game.lh", "res/d3/fx/fx_confetti/Conventional/scene_game.lh" ]
    };
    class SettleDialog extends BaseDialog {
        init(data) {
            this._data = data;
        }
        onAwake() {
            super.onAwake();
            if (this._data) this.initView();
            this.addExportAds();
            platform.getInstance().addGameList()
           
        }
        onEnable() {
            setTimeout(() => {
                gg.sdk.showBanner();
            }, 1200);
        }
        initView() {
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
            this.Congratulations.visible = false
            this.skipBtn.visible = !this._data.isWin && this._data.isSkip;
            if (!this._data.isWin) {
                setTimeout(() => {
                    this.continueBtn.visible = true;
                    this.Congratulations.visible = false
                }, 1200);
            } else {
                this.continueBtn.visible = false;
                this.Congratulations.visible = true
            }
            let levelLbl = this[this._data.isWin ? "winNode" : "loseNode"].getChildByName("LevelLabel");
            if (levelLbl) 
            
            
            
            
            levelLbl.changeText(Locale.CurrentLevel.replace("$0", this._data.currentLevel.toString()));
            console.log("this._data.currentLevel",this._data.currentLevel)
            
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
        
            if(gg.data.getStorage("smashcarplus").level >= 20)
            {
                this.skipBtn.visible = false
            }


        }
        addExportAds() {
            // gg.res.loadScene(gg.ui.checkSceneIsHorizontal() ? Components.CoupletAd : Components.SettleAd).then(view => {
            //     if (view && this.adBox) this.adBox.addChild(view);
            // });
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
            platform.getInstance().removeGameList()
        }
        getReward() {
            // if (!this._data.onReward) return;
            // gg.sdk.showVideoAd(data => {
            //     if (data && data.isEnded) {
            //         if (this._data.onReward) 
            platform.getInstance().removeGameList()

            platform.getInstance(). showReward(()=>{
                this._data.onReward();
                gg.ui.showToast(Locale.GetRewardSuccess);
                        // setTimeout(() => {
                            this.closeDialog();
            })

        //             }, 1e3);
        //         } else {
        //             gg.ui.showToast(Locale.GetRewardFail);
        //         }
        //     }, error => {
        //         gg.ui.showToast(Locale.NoVideoAd);
        //     });
         }
    }
    class ShopDialog extends BaseDialog {
        constructor() {
            super(...arguments);
            this.uiNode = null;
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
            this.curCarId = 0;
            this.carList = {};
            this.curSceneCar = null;
            this.canLoadCar = true;
        }
        onAwake() {
            super.onAwake();
            this.initData();
            this.btnBack.on(Laya.Event.CLICK, this, () => {
                gg.event.event(GamePlayEvent.ReLoadScene);
                this.close();
            });
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
        }
        initData() {
            this.carList = gg.data.getGameConf().cars;
            this.curCarId = 1;
            this.hadMoney.text = gg.player.getData().money + "";
            
            
            
            Laya.Scene3D.load("res/d3/car3rd/Conventional/car3rd.ls", Laya.Handler.create(null, s => {
                Laya.stage.addChild(s);
                this.storeScene = s;
                this.carNode.addChild(this.storeScene);
                let scamera = this.storeScene.getChildByName("node_camera");
                scamera.transform.translate(new Laya.Vector3(0, .8, 0), false);
                this.uiNode.visible = true;
                this.loadCarShow(1);
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
                    this.btnChoose.getChildByName("Label").text = "Selected";
                } else {
                    this.ableNode(this.btnChoose);
                    this.btnChoose.getChildByName("Label").text = "Select";
                }
                this.hideNode(this.btnPay);
                this.iconLock.visible = false;
            } else {
                this.hideNode(this.btnChoose);
                this.showNode(this.btnPay);
                this.iconLock.visible = true;
            }
            let carData = this.carList[this.curCarId];
            console.log("cardata",this.carList)
            this.carList[1].money = 100;
            this.carList[2].money = 600
            this.carList[5].money = 1200
            this.carList[6].money = 2000
            this.carList[7].money = 3000
            this.carList[8].money = 4000
            this.carList[9].money = 5000
            this.carList[10].money = 6000
            this.payNeedMoney.text = carData.money;



            
            Laya.Sprite3D.load("res/d3/car/car_" + carid + "/Conventional/scene_game.lh", Laya.Handler.create(null, sp => {
                this.canLoadCar = true;
                let obj = Laya.Sprite3D.instantiate(sp, this.storeScene, false, new Laya.Vector3(0, 0, 0));
                this.curSceneCar = obj;
                let car = obj.getChildAt(0);
                this.curCar = car;
                this.curCar.transform.translate(new Laya.Vector3(-5, 0, -5), false);
                this.storeScene.addChild(car);
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
            let car = gg.player.getData().car[this.curCarId];
            if (car) return true;
            if (car == 1) return true;
            return car;
        }
        pay() {
            let carData = this.carList[this.curCarId];

            console.log("cardata",carData)
            if (carData && !this.checkHadCar()) {
                let player = gg.player.getData();
                let cmoney = player.money;
                let needMoney = carData.money;
                if (cmoney >= needMoney) {
                    player.car[this.curCarId] = carData;
                    player.money = cmoney - needMoney;
                    gg.player.save();
                    this.showNode(this.btnChoose);
                    this.hideNode(this.btnPay);
                    this.iconLock.visible = false;
                    this.hadMoney.text = player.money + "";
                    this.ableNode(this.btnChoose);
                    this.btnChoose.getChildByName("Label").text = "Select";
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
                this.btnChoose.getChildByName("Label").text = "Selected";




               
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
        close() {
            this.closeDialog();
            if (this.curCar) this.curCar.destroy();
            if (this.storeScene) this.storeScene.destroy();
        }
        toforwad() {
            if (this.curCarId <= 1) return;
            this.curCarId--;
            if(this.curCarId == 3||this.curCarId == 4)
            {
                this.curCarId = 2
            }
            this.loadCarShow(this.curCarId);


 
        }
        tonext() {
            if (this.curCarId >= 10) return;
            this.curCarId++;
            if(this.curCarId == 3||this.curCarId == 4)
            {
                this.curCarId = 5
            }
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
            this.initExportList();
        }
        initExportList() {
            let exportData = gg.sdk.getExportData(ExportType.TryExport);
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
            if (!gg.sdk.checkExportTypeOpen(ExportType.TryExport)) return;
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
        onClick(event) {
            gg.sdk.getPlatform().navigateToMiniProgram(this.data, () => {
                if (this.data.type == ExportType.Recommend) return;
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
            this._exportData = gg.sdk.getExportData(ExportType.Couplet);
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
            this.addExportAds();
        }
        addExportAds() {
            let exportData = gg.sdk.getExportData(ExportType.Couplet);
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
            let data = gg.sdk.getExportData(ExportType.Couplet);
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
            let data = gg.sdk.getExportData(ExportType.Couplet);
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
    class FlowAni extends Laya.Script {
        constructor() {
            super(...arguments);
            this.interval = 600;
            this.isLoop = true;
            this.isAutoPlay = true;
            this._ani = null;
        }
        onAwake() {
            let target = this.owner;
            if (!target) return;
            let angleL = 16, angleR = -16, time = 80, time2 = 60;
            this._ani = Laya.TimeLine.to(target, {
                rotation: angleR
            }, time, null, this.interval).to(target, {
                rotation: 0
            }, time).to(target, {
                rotation: angleL
            }, time).to(target, {
                rotation: 0
            }, time).to(target, {
                rotation: angleR + 6
            }, time2).to(target, {
                rotation: 0
            }, time2).to(target, {
                rotation: angleL - 6
            }, time2).to(target, {
                rotation: 0
            }, time2);
            if (this.isAutoPlay) {
                setTimeout(() => {
                    this.play();
                }, 1e3);
            }
        }
        play() {
            if (this._ani) this._ani.play(0, this.isLoop);
        }
        stop() {
            if (this._ani) {
                this._ani.pause();
                this._ani.reset();
            }
        }
        onDestroy() {
            if (this._ani) this._ani.destroy();
        }
    }
    class GameScene extends SceneLayout {
        onAwake() {
            super.onAwake();
            this.owner.autoDestroyAtClosed = true;
            this.addExportAds();
            if (!gg.ui.isGameSceneLaunched) {
                gg.ui.isGameSceneLaunched = true;
                gg.sdk.createBannerAd();
                this.showRecommendExport(gg.sdk.checkShowVideoAdAfterLaunchOpen());
            }
            setTimeout(() => {
                gg.sdk.createVideoAd();
            }, 3e3);
            gg.event.on(GamePlayEvent.GameStart, this, this.onGameStart);
            gg.event.on(GamePlayEvent.GameOver, this, this.onGameOver);
            gg.event.on(AppEvent.OnShow, this, this.OnAppShow);
            gg.event.on(ExportAdEvent.NavigationFail, this, () => {
                this.showRecommendExport(false);
            });

            
            
        }
        addExportAds() {
            // gg.res.loadScene(Components.GameSceneAd).then(view => {
            //     if (view && this.adBox) this.adBox.addChild(view);
            // });
        }
        removeExportAds() {
            // if (this.adBox) this.adBox.removeChildren();
        }
        OnAppShow() {
            //this.showRecommendExport();
        }
        onGameStart() {
            this.removeExportAds();
        }
        onGameOver(data) {
            this.showTryExport();
           // this.showFreeGift(Components.FreeGiftFixCarDialog);
            this.showSettle(data);
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
            // if (gg.sdk.checkExportTypeOpen(ExportType.Recommend)) {
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
            // if (gg.sdk.checkExportTypeOpen(ExportType.TryExport)) {
            //     gg.ui.showDialogWithURL(Components.TryExportDialog, null, true, true, true);
            // }
        }
        showFreeGift(url) {
            if (gg.sdk.checkFreeGiftOpen()) {
                gg.ui.showDialogWithURL(url, null, true, true, true);
            }
        }
        onDestroy() {
            gg.event.offAllCaller(this);
            console.log("destroy");
        }
    }
    var EventType;
    (function(EventType) {
        EventType[EventType["TrunRight"] = 0] = "TrunRight";
        EventType[EventType["TrunLeft"] = 1] = "TrunLeft";
        EventType[EventType["TurnOver"] = 2] = "TurnOver";
        EventType[EventType["GoPo"] = 3] = "GoPo";
        EventType[EventType["CarLeft"] = 4] = "CarLeft";
        EventType[EventType["CarRight"] = 5] = "CarRight";
        EventType[EventType["CarSlower"] = 6] = "CarSlower";
        EventType[EventType["CarSpeedUp"] = 7] = "CarSpeedUp";
        EventType[EventType["CarCrash"] = 8] = "CarCrash";
        EventType[EventType["CarDrop"] = 9] = "CarDrop";
        EventType[EventType["OpenRebornPoint"] = 10] = "OpenRebornPoint";
        EventType[EventType["ArriveTerminal"] = 11] = "ArriveTerminal";
        EventType[EventType["ReLoad"] = 12] = "ReLoad";
        EventType[EventType["CarCrashUI"] = 13] = "CarCrashUI";
        EventType[EventType["ReloadScene"] = 14] = "ReloadScene";
        EventType[EventType["GameStart"] = 15] = "GameStart";
        EventType[EventType["Failed"] = 16] = "Failed";
        EventType[EventType["CameraMove"] = 17] = "CameraMove";
    })(EventType || (EventType = {}));
    var CameraMoveType;
    (function(CameraMoveType) {
        CameraMoveType[CameraMoveType["Left"] = 0] = "Left";
        CameraMoveType[CameraMoveType["LeftRecover"] = 1] = "LeftRecover";
        CameraMoveType[CameraMoveType["Right"] = 2] = "Right";
        CameraMoveType[CameraMoveType["RightRecover"] = 3] = "RightRecover";
        CameraMoveType[CameraMoveType["LeftRight"] = 4] = "LeftRight";
        CameraMoveType[CameraMoveType["LeftLeft"] = 5] = "LeftLeft";
        CameraMoveType[CameraMoveType["RightRight"] = 6] = "RightRight";
        CameraMoveType[CameraMoveType["RightLineLeft"] = 7] = "RightLineLeft";
        CameraMoveType[CameraMoveType["LeftRightLine"] = 8] = "LeftRightLine";
        CameraMoveType[CameraMoveType["RightLeft"] = 9] = "RightLeft";
    })(CameraMoveType || (CameraMoveType = {}));
    var RoadDirectionType;
    (function(RoadDirectionType) {
        RoadDirectionType[RoadDirectionType["Right"] = 0] = "Right";
        RoadDirectionType[RoadDirectionType["Left"] = 1] = "Left";
        RoadDirectionType[RoadDirectionType["Up"] = 2] = "Up";
    })(RoadDirectionType || (RoadDirectionType = {}));
    var CarControlType;
    (function(CarControlType) {
        CarControlType[CarControlType["Left"] = 0] = "Left";
        CarControlType[CarControlType["Right"] = 1] = "Right";
        CarControlType[CarControlType["Slower"] = 2] = "Slower";
        CarControlType[CarControlType["SpeedUp"] = 3] = "SpeedUp";
    })(CarControlType || (CarControlType = {}));
    var CollsionTag;
    (function(CollsionTag) {
        CollsionTag[CollsionTag["Road"] = 0] = "Road";
        CollsionTag[CollsionTag["WDOver"] = 1] = "WDOver";
        CollsionTag[CollsionTag["CarCrashOver"] = 100] = "CarCrashOver";
        CollsionTag[CollsionTag["CarDrop"] = 101] = "CarDrop";
        CollsionTag[CollsionTag["Reborn1"] = 1001] = "Reborn1";
        CollsionTag[CollsionTag["Success"] = 2001] = "Success";
    })(CollsionTag || (CollsionTag = {}));
    var CameraDir;
    (function(CameraDir) {
        CameraDir[CameraDir["Right"] = 0] = "Right";
        CameraDir[CameraDir["Left"] = 1] = "Left";
        CameraDir[CameraDir["Forward"] = 2] = "Forward";
    })(CameraDir || (CameraDir = {}));
    var RoadType;
    (function(RoadType) {
        RoadType[RoadType["Line"] = 0] = "Line";
        RoadType[RoadType["TurnLeft"] = 1] = "TurnLeft";
        RoadType[RoadType["TurnRight"] = 2] = "TurnRight";
        RoadType[RoadType["Up"] = 3] = "Up";
        RoadType[RoadType["Down"] = 4] = "Down";
    })(RoadType || (RoadType = {}));
    var OriginDir;
    (function(OriginDir) {
        OriginDir[OriginDir["Up"] = 1] = "Up";
        OriginDir[OriginDir["Down"] = 2] = "Down";
        OriginDir[OriginDir["Left"] = 3] = "Left";
        OriginDir[OriginDir["Right"] = 4] = "Right";
    })(OriginDir || (OriginDir = {}));
    class Tools {
        static WorldToScreen2(camera, point) {
            var pointA = this.InverseTransformPoint(camera.transform, point);
            var distance = pointA.z;
            var out = new Laya.Vector3();
            camera.viewport.project(point, camera.projectionViewMatrix, out);
            var value = new Laya.Vector3(out.x / Laya.stage.clientScaleX, out.y / Laya.stage.clientScaleY, distance);
            return value;
        }
        static ScreenToWorld(camera, point) {
            var halfFOV = camera.fieldOfView * .5 * Math.PI / 180;
            let height = point.z * Math.tan(halfFOV);
            let width = height * camera.aspectRatio;
            let lowerLeft = this.GetLowerLeft(camera.transform, point.z, width, height);
            let v = this.GetScreenScale(width, height);
            var value = new Laya.Vector3();
            var lowerLeftA = this.InverseTransformPoint(camera.transform, lowerLeft);
            value = new Laya.Vector3(-point.x / v.x, point.y / v.y, 0);
            Laya.Vector3.add(lowerLeftA, value, value);
            value = this.TransformPoint(camera.transform, value);
            return value;
        }
        static GetScreenScale(width, height) {
            var v = new Laya.Vector3();
            v.x = Laya.stage.width / width / 2;
            v.y = Laya.stage.height / height / 2;
            return v;
        }
        static GetLowerLeft(transform, distance, width, height) {
            var lowerLeft = new Laya.Vector3();
            var right = new Laya.Vector3();
            transform.getRight(right);
            Laya.Vector3.normalize(right, right);
            var xx = new Laya.Vector3(right.x * width, right.y * width, right.z * width);
            Laya.Vector3.add(transform.position, xx, lowerLeft);
            var up = new Laya.Vector3();
            transform.getUp(up);
            Laya.Vector3.normalize(up, up);
            var yy = new Laya.Vector3(up.x * height, up.y * height, up.z * height);
            Laya.Vector3.subtract(lowerLeft, yy, lowerLeft);
            var forward = new Laya.Vector3();
            transform.getForward(forward);
            Laya.Vector3.normalize(forward, forward);
            var zz = new Laya.Vector3(forward.x * distance, forward.y * distance, forward.z * distance);
            Laya.Vector3.subtract(lowerLeft, zz, lowerLeft);
            return lowerLeft;
        }
        static InverseTransformPoint(origin, point) {
            var xx = new Laya.Vector3();
            origin.getRight(xx);
            var yy = new Laya.Vector3();
            origin.getUp(yy);
            var zz = new Laya.Vector3();
            origin.getForward(zz);
            var zz1 = new Laya.Vector3(-zz.x, -zz.y, -zz.z);
            var x = this.ProjectDistance(point, origin.position, xx);
            var y = this.ProjectDistance(point, origin.position, yy);
            var z = this.ProjectDistance(point, origin.position, zz1);
            var value = new Laya.Vector3(x, y, z);
            return value;
        }
        static TransformPoint(origin, point) {
            var value = new Laya.Vector3();
            Laya.Vector3.transformQuat(point, origin.rotation, value);
            Laya.Vector3.add(value, origin.position, value);
            return value;
        }
        static ProjectDistance(A, C, B) {
            var CA = new Laya.Vector3();
            Laya.Vector3.subtract(A, C, CA);
            var angle = this.Angle2(CA, B) * Math.PI / 180;
            var distance = Laya.Vector3.distance(A, C);
            distance *= Math.cos(angle);
            return distance;
        }
        static Angle2(ma, mb) {
            var v1 = ma.x * mb.x + ma.y * mb.y + ma.z * mb.z;
            var ma_val = Math.sqrt(ma.x * ma.x + ma.y * ma.y + ma.z * ma.z);
            var mb_val = Math.sqrt(mb.x * mb.x + mb.y * mb.y + mb.z * mb.z);
            var cosM = v1 / (ma_val * mb_val);
            if (cosM < -1) cosM = -1;
            if (cosM > 1) cosM = 1;
            var angleAMB = Math.acos(cosM) * 180 / Math.PI;
            return angleAMB;
        }
        static anmtPlay(t, callback, finish) {
            var p = {
                value: 0
            };
            let tw = Laya.Tween.to(p, {
                value: 1,
                update: new Laya.Handler(this, () => {
                    callback && callback(p.value);
                })
            }, t * 1e3, Laya.Ease.cubicInOut, new Laya.Handler(this, () => {
                finish && finish(tw);
            }));
        }
    }
    class BezierTools {
        static CreateBezierPoints(anchorpoints, pointsAmount, remark, dir) {
            var points = [];
            for (var i = 0; i < pointsAmount; i++) {
                var point = this.MultiPointBezier(anchorpoints, i / pointsAmount, remark, dir);
                points.push(point);
            }
            return points;
        }
        static MultiPointBezier(points, t, remark, dir) {
            let len = points.length;
            let x = 0, y = 0, z = 0;
            for (let i = 0; i < len; i++) {
                let point = points[i];
                x += point.x * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
                y += point.y * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
                z += point.z * Math.pow(1 - t, len - 1 - i) * Math.pow(t, i) * this.erxiangshi(len - 1, i);
            }
            return {
                x: x,
                y: y,
                z: z,
                remark: remark,
                dir: dir
            };
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
    class CarList {}
    CarList.points = {
        1: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 230 ] ],
                    lenght: 230,
                    dir: 1
                }
            },
            reborn: [ 180 ]
        },
        2: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 10 ] ],
                    lenght: 10,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 10 ], [ 101, 0, 116 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 106 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 116 ], [ 180, 0, 116 ] ],
                    lenght: 80,
                    dir: 4
                }
            },
            reborn: [ 270 ]
        },
        3: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 50 ], [ -101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ -101, 0, 152 ], [ -290, 0, 152 ] ],
                    lenght: 190,
                    dir: 3
                }
            },
            reborn: [ 141, 520 ]
        },
        4: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 430 ] ],
                    lenght: 430,
                    dir: 1
                }
            },
            reborn: [ 200, 555 ]
        },
        5: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 252 ], [ 180, 0, 252 ] ],
                    lenght: 80,
                    dir: 4
                }
            },
            reborn: [ 161, 600 ]
        },
        6: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 250 ] ],
                    lenght: 250,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 250 ], [ -101, 0, 352 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 342 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ -101, 0, 352 ], [ -180, 0, 352 ] ],
                    lenght: 80,
                    dir: 3
                }
            },
            reborn: [ 177, 672 ]
        },
        7: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 150 ], [ -101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 242 ],
                    dir: 1
                }
            },
            reborn: [ 150, 349 ]
        },
        8: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 150 ], [ -101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 2,
                    point: [ [ -101, 0, 252 ], [ -202, 0, 330 ] ],
                    lenght: 160,
                    mpoint: [ -192, 0, 262 ],
                    dir: 3
                }
            },
            reborn: [ 180, 710 ]
        },
        9: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 50 ], [ -101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ -101, 0, 152 ], [ -380, 0, 152 ] ],
                    lenght: 280,
                    dir: 3
                }
            },
            reborn: [ 150, 580 ]
        },
        10: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 630 ] ],
                    lenght: 630,
                    dir: 1
                }
            },
            reborn: [ 265, 530, 830 ]
        },
        11: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 250 ] ],
                    lenght: 250,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 250 ], [ -101, 0, 352 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 342 ],
                    dir: 1
                },
                3: {
                    type: 2,
                    point: [ [ -101, 0, 352 ], [ -205, 0, 452 ] ],
                    lenght: 160,
                    mpoint: [ -195, 0, 362 ],
                    dir: 3
                },
                4: {
                    type: 2,
                    point: [ [ -205, 0, 452 ], [ -100, 0, 560 ] ],
                    lenght: 160,
                    mpoint: [ -195, 0, 550 ],
                    dir: 1
                }
            },
            reborn: [ 200, 640, 1288, 1340 ]
        },
        12: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 430 ] ],
                    lenght: 430,
                    dir: 1
                }
            },
            reborn: [ 190, 530 ]
        },
        13: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 252 ], [ 202, 0, 252 ] ],
                    lenght: 100,
                    dir: 4
                },
                4: {
                    type: 1,
                    point: [ [ 202, 0, 252 ], [ 305, 0, 352 ] ],
                    lenght: 160,
                    mpoint: [ 293, 0, 262 ],
                    dir: 4
                }
            },
            reborn: [ 124, 604, 701 ]
        },
        14: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 530 ] ],
                    lenght: 530,
                    dir: 1
                }
            },
            reborn: [ 213, 514 ]
        },
        15: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 50 ], [ 101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 1,
                    point: [ [ 101, 0, 152 ], [ 205, 0, 254 ] ],
                    lenght: 160,
                    mpoint: [ 196, 0, 162 ],
                    dir: 4
                },
                4: {
                    type: 1,
                    point: [ [ 205, 0, 254 ], [ 101, 0, 360 ] ],
                    lenght: 160,
                    mpoint: [ 198, 0, 342 ],
                    dir: 1
                }
            },
            reborn: [ 192, 764 ]
        },
        16: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 50 ], [ 101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 152 ], [ 420, 0, 152 ] ],
                    lenght: 380,
                    dir: 4
                }
            },
            reborn: [ 150, 725 ]
        },
        17: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 50 ], [ -101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 2,
                    point: [ [ -101, 0, 152 ], [ -205, 0, 254 ] ],
                    lenght: 160,
                    mpoint: [ -195, 0, 162 ],
                    dir: 3
                },
                4: {
                    type: 0,
                    point: [ [ -205, 0, 254 ], [ -205, 0, 333 ] ],
                    lenght: 80,
                    dir: 1
                }
            },
            reborn: [ 215, 434, 784 ]
        },
        18: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 252 ], [ 280, 0, 252 ] ],
                    lenght: 180,
                    dir: 4
                }
            },
            reborn: [ 150, 457, 816 ]
        },
        19: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 150 ], [ -101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 2,
                    point: [ [ -101, 0, 252 ], [ -202, 0, 330 ] ],
                    lenght: 160,
                    mpoint: [ -192, 0, 262 ],
                    dir: 3
                }
            },
            reborn: [ 100, 584, 717 ]
        },
        20: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 430 ] ],
                    lenght: 430,
                    dir: 1
                }
            },
            reborn: [ 231, 539 ]
        },
        21: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 630 ] ],
                    lenght: 630,
                    dir: 1
                }
            },
            reborn: [ 231, 611, 880 ]
        },
        22: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 1,
                    point: [ [ 101, 0, 252 ], [ 205, 0, 354 ] ],
                    lenght: 160,
                    mpoint: [ 196, 0, 262 ],
                    dir: 4
                }
            },
            reborn: [ 154, 547, 706 ]
        },
        23: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 50 ], [ 101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 152 ], [ 420, 0, 152 ] ],
                    lenght: 380,
                    dir: 4
                }
            },
            reborn: [ 164, 725 ]
        },
        24: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 50 ], [ -101, 0, 152 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 142 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ -101, 0, 152 ], [ -380, 0, 152 ] ],
                    lenght: 280,
                    dir: 3
                }
            },
            reborn: [ 220, 560 ]
        },
        25: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 250 ] ],
                    lenght: 250,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 250 ], [ -101, 0, 352 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 342 ],
                    dir: 1
                },
                3: {
                    type: 2,
                    point: [ [ -101, 0, 352 ], [ -205, 0, 452 ] ],
                    lenght: 160,
                    mpoint: [ -195, 0, 362 ],
                    dir: 3
                },
                4: {
                    type: 2,
                    point: [ [ -205, 0, 452 ], [ -100, 0, 560 ] ],
                    lenght: 160,
                    mpoint: [ -195, 0, 550 ],
                    dir: 1
                }
            },
            reborn: [ 220, 600, 1126, 1307 ]
        },
        26: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 450 ] ],
                    lenght: 450,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 450 ], [ 101, 0, 552 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 542 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 552 ], [ 280, 0, 552 ] ],
                    lenght: 180,
                    dir: 4
                }
            },
            reborn: [ 131, 500, 734, 1358 ]
        },
        27: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 1,
                    point: [ [ 0, 0, 150 ], [ -101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ -10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ -101, 0, 252 ], [ -180, 0, 252 ] ],
                    lenght: 80,
                    dir: 3
                }
            },
            reborn: [ 145, 452 ]
        },
        28: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 0,
                    point: [ [ 101, 0, 252 ], [ 280, 0, 252 ] ],
                    lenght: 180,
                    dir: 4
                }
            },
            reborn: [ 160, 734 ]
        },
        29: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 150 ] ],
                    lenght: 150,
                    dir: 1
                },
                2: {
                    type: 2,
                    point: [ [ 0, 0, 150 ], [ 101, 0, 252 ] ],
                    lenght: 160,
                    mpoint: [ 10, 0, 242 ],
                    dir: 1
                },
                3: {
                    type: 1,
                    point: [ [ 101, 0, 252 ], [ 205, 0, 354 ] ],
                    lenght: 160,
                    mpoint: [ 196, 0, 262 ],
                    dir: 4
                },
                4: {
                    type: 1,
                    point: [ [ 205, 0, 354 ], [ 101, 0, 455 ] ],
                    lenght: 160,
                    mpoint: [ 198, 0, 448 ],
                    dir: 1
                },
                5: {
                    type: 0,
                    point: [ [ 101, 0, 455 ], [ 20, 0, 455 ] ],
                    lenght: 80,
                    dir: 3
                }
            },
            reborn: [ 182, 538, 700, 1223, 1350 ]
        },
        30: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 630 ] ],
                    lenght: 630,
                    dir: 1
                }
            },
            reborn: [ 152, 422, 780, 970 ]
        },
        100: {
            road: {
                1: {
                    type: 0,
                    point: [ [ 0, 0, 0 ], [ 0, 0, 50 ] ],
                    lenght: 50,
                    dir: 1
                },
                2: {
                    type: 3,
                    point: [ [ 0, 0, 50 ], [ 0, 26, 146 ] ],
                    lenght: 100,
                    dir: 1
                },
                3: {
                    type: 4,
                    point: [ [ 0, 26, 146 ], [ 0, 0, 242 ] ],
                    lenght: 100,
                    dir: 1
                },
                4: {
                    type: 0,
                    point: [ [ 0, 0, 242 ], [ 0, 0, 342 ] ],
                    lenght: 100,
                    dir: 1
                },
                5: {
                    type: 3,
                    point: [ [ 0, 0, 342 ], [ 0, 26, 438 ] ],
                    lenght: 100,
                    dir: 1
                },
                6: {
                    type: 0,
                    point: [ [ 0, 26, 438 ], [ 0, 26, 538 ] ],
                    lenght: 100,
                    dir: 1
                },
                7: {
                    type: 2,
                    point: [ [ 0, 26, 538 ], [ 101, 26, 641 ] ],
                    lenght: 160,
                    mpoint: [ 10, 26, 631 ],
                    dir: 3
                },
                8: {
                    type: 3,
                    point: [ [ 102, 26, 641 ], [ 198, 51.7, 641 ] ],
                    lenght: 100,
                    dir: 4
                },
                9: {
                    type: 0,
                    point: [ [ 198, 51.7, 641 ], [ 270, 51.7, 641 ] ],
                    lenght: 100,
                    dir: 4
                }
            },
            reborn: [ 180 ]
        }
    };
    class PointOperate {
        static genLinePoints(x, y, z, nx, ny, nz, pointCount, dir, type) {
            let points = [];
            let point1 = new Laya.Vector3(x, y, z);
            let point3 = new Laya.Vector3(nx, ny, nz);
            points.push(point1);
            points.push(point3);
            let array = BezierTools.CreateBezierPoints(points, pointCount, type, dir);
            return array;
        }
        static loadPoints(dataObj, aiSide) {
            let points = CarList.points[gg.player.getData().level];
            if (!points) return;
            let wdCount = dataObj.CurWdCount;
            let all = [];
            let road = points.road;
            let offx = 0;
            let offy = 0;
            let offz = 0;
            let offnx = 0;
            let offny = 0;
            let offnz = 0;
            let distance = aiSide == 1 ? 4 : -4;
            for (const key in road) {
                if (road.hasOwnProperty(key)) {
                    const p = road[key];
                    let p0 = p.point[0];
                    let p1 = p.point[1];
                    switch (p.type) {
                      case RoadType.Line:
                        let pArr = [];
                        if (dataObj.isAI) {
                            switch (p.dir) {
                              case OriginDir.Up:
                                offx = offnx = distance;
                                break;

                              case OriginDir.Down:
                                offx = offnx = -distance;
                                break;

                              case OriginDir.Left:
                                offz = offnz = distance;
                                break;

                              case OriginDir.Right:
                                offz = offnz = -distance;

                              default:
                                break;
                            }
                        }
                        pArr = this.genLinePoints(p0[0] + offx, p0[1], p0[2] + offz, p1[0] + offnx, p1[1], p1[2] + offnz, Math.floor(dataObj.CurCountPer * p.lenght), p.dir, p.type);
                        all = all.concat(pArr);
                        break;

                      case RoadType.TurnLeft:
                        let mp = p.mpoint;
                        if (dataObj.isAI) {
                            switch (p.dir) {
                              case OriginDir.Up:
                                offx = distance;
                                offnz = distance;
                                break;

                              case OriginDir.Down:
                                offx = -distance;
                                offnz = -distance;
                                break;

                              case OriginDir.Left:
                                offz = distance;
                                offnx = -distance;
                                mp[0] = mp[0] + offnx * 2;
                                break;

                              case OriginDir.Right:
                                offz = -distance;
                                offnx = distance;

                              default:
                                break;
                            }
                        }
                        let pl = this.genPoints(p0[0] + offx, p0[1], p0[2] + offz, p1[0] + offnx, p1[1], p1[2] + offnz, wdCount, p.type, mp, p.dir);
                        all = all.concat(pl);
                        break;

                      case RoadType.TurnRight:
                        let mpr = p.mpoint;
                        if (dataObj.isAI) {
                            switch (p.dir) {
                              case OriginDir.Up:
                                offx = distance;
                                offnz = -distance;
                                break;

                              case OriginDir.Down:
                                offx = -distance;
                                offnz = distance;
                                break;

                              case OriginDir.Left:
                                offz = distance;
                                offnx = -distance;
                                break;

                              case OriginDir.Right:
                                offz = -distance;
                                offnx = distance;

                              default:
                                break;
                            }
                        }
                        let pr = this.genPoints(p0[0] + offx, p0[1], p0[2] + offz, p1[0] + offnx, p1[1], p1[2] + offnz, wdCount, p.type, mpr, p.dir);
                        all = all.concat(pr);
                        break;

                      case RoadType.Up:
                      case RoadType.Down:
                        {
                            if (dataObj.isAI) {
                                switch (p.dir) {
                                  case OriginDir.Up:
                                    offx = offnx = distance;
                                    break;

                                  case OriginDir.Down:
                                    offx = offnx = -distance;
                                    break;

                                  case OriginDir.Left:
                                    offz = offnz = distance;
                                    break;

                                  case OriginDir.Right:
                                    offz = offnz = -distance;

                                  default:
                                    break;
                                }
                            }
                            let pr = this.genLinePoints(p0[0] + offx, p0[1], p0[2] + offz, p1[0] + offnx, p1[1], p1[2] + offnz, Math.floor(dataObj.CurCountPer * p.lenght), p.dir, p.type);
                            all = all.concat(pr);
                            break;
                        }

                      default:
                        break;
                    }
                }
            }
            return all;
        }
        static genPoints(x, y, z, nx, ny, nz, pointCount, roadType, mdPoint, dir) {
            let points = [];
            let point1 = new Laya.Vector3(x, y, z);
            let point2 = new Laya.Vector3(mdPoint[0], mdPoint[1], mdPoint[2]);
            let point3 = new Laya.Vector3(nx, ny, nz);
            points.push(point1);
            points.push(point2);
            points.push(point3);
            let array = BezierTools.CreateBezierPoints(points, pointCount, roadType, dir);
            return array;
        }
        static moveToPoint(dataObj, isReborn) {
            if (dataObj.loopIndex > dataObj.roadPoints.length - 1) {
                Laya.timer.clearAll(this);
                dataObj.isPause = true;
            } else {
                let p = dataObj.roadPoints[dataObj.loopIndex];
                let n_x = p.x;
                let n_y = p.y;
                let n_z = p.z;
                let nextRoadType = p.remark;
                if (!dataObj.isAI) {
                    if ((nextRoadType != dataObj.curRoadType || p.dir != dataObj.curOriginDir) && dataObj.curRoadType != null) {
                        if (dataObj.curRoadType == RoadType.Line && nextRoadType == RoadType.TurnRight) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.Right);
                        }
                        if (dataObj.curRoadType == RoadType.TurnRight && nextRoadType == RoadType.Line) {
                            switch (dataObj.curOriginDir) {
                              case OriginDir.Up:
                                gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.RightRecover);
                                break;

                              case OriginDir.Left:
                                gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.LeftRightLine);
                                break;

                              default:
                                break;
                            }
                        }
                        if (dataObj.curRoadType == RoadType.Line && nextRoadType == RoadType.TurnLeft) {
                            switch (p.dir) {
                              case OriginDir.Up:
                                gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.Left);
                                break;

                              case OriginDir.Right:
                                gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.RightLineLeft);

                              default:
                                break;
                            }
                        }
                        if (dataObj.curRoadType == RoadType.TurnLeft && nextRoadType == RoadType.Line) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.LeftRecover);
                        }
                        if (dataObj.curRoadType == RoadType.TurnLeft && nextRoadType == RoadType.TurnRight) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.LeftRight);
                        }
                        if (dataObj.curRoadType == RoadType.TurnLeft && nextRoadType == RoadType.TurnLeft && p.dir != dataObj.curOriginDir) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.LeftLeft);
                        }
                        if (dataObj.curRoadType == RoadType.TurnRight && nextRoadType == RoadType.TurnRight && p.dir != dataObj.curOriginDir) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.RightRight);
                        }
                        if (dataObj.curRoadType == RoadType.TurnRight && nextRoadType == RoadType.TurnLeft) {
                            gg.event.event(GamePlayEvent.CameraMove, CameraMoveType.RightLeft);
                        }
                    }
                }
                dataObj.curRoadType = p.remark;
                dataObj.curOriginDir = p.dir;
                if (dataObj.curRoadType == RoadType.TurnLeft || dataObj.curRoadType == RoadType.TurnRight) {
                    if (!isReborn) {
                        let flag = 1;
                        if (dataObj.curRoadType == RoadType.TurnLeft) {
                            flag = 1;
                        }
                        if (dataObj.curRoadType == RoadType.TurnRight) {
                            flag = -1;
                        }
                        dataObj.wdIndex++;
                        dataObj.car.transform.rotate(new Laya.Vector3(0, flag * 90 / dataObj.CurWdCount, 0), false, false);
                        dataObj.deadIndex = dataObj.loopIndex;
                        if (dataObj.wdIndex >= dataObj.CurWdCount) {
                            dataObj.wdIndex = 0;
                        }
                    }
                } else {
                    dataObj.wdIndex = 0;
                }
                if (p.remark == RoadType.Up || p.remark == RoadType.Down) {
                    let obj = dataObj.car.getChildAt(0);
                    if (p.remark == RoadType.Up) obj.transform.localRotationEulerX = -15;
                    if (p.remark == RoadType.Down) obj.transform.localRotationEulerX = 15;
                } else {}
                dataObj.car.transform.position = new Laya.Vector3(-n_x, dataObj.car.transform.position.y, n_z);
                if (!dataObj.isAI) {}
                dataObj.loopIndex++;
            }
        }
        static getTheAngle(dataObj, index) {
            let point = dataObj.roadPoints[index];
            switch (point.dir) {
              case OriginDir.Up:
                dataObj.car.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                switch (point.remark) {
                  case RoadType.Line:
                    break;

                  case RoadType.TurnLeft:
                    let wd = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wd;
                    console.log("弯道走过指数:" + wd);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, 90 * wd / dataObj.CurWdCount, 0), false, false);
                    break;

                  case RoadType.TurnRight:
                    let wdr = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wdr;
                    console.log("弯道走过指数:" + wdr);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, -90 * wdr / dataObj.CurWdCount, 0), false, false);
                    break;

                  default:
                    break;
                }
                break;

              case OriginDir.Down:
                dataObj.car.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                dataObj.car.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
                break;

              case OriginDir.Left:
                dataObj.car.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                dataObj.car.transform.rotate(new Laya.Vector3(0, 90, 0), false, false);
                switch (point.remark) {
                  case RoadType.Line:
                    break;

                  case RoadType.TurnLeft:
                    let wd = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wd;
                    console.log("弯道走过指数:" + wd);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, 90 * wd / dataObj.CurWdCount, 0), false, false);
                    break;

                  case RoadType.TurnRight:
                    let wdr = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wdr;
                    console.log("弯道走过指数:" + wdr);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, -90 * wdr / dataObj.CurWdCount, 0), false, false);
                    break;

                  default:
                    break;
                }
                break;

              case OriginDir.Right:
                dataObj.car.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                dataObj.car.transform.rotate(new Laya.Vector3(0, -90, 0), false, false);
                switch (point.remark) {
                  case RoadType.Line:
                    break;

                  case RoadType.TurnLeft:
                    let wd = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wd;
                    console.log("弯道走过指数:" + wd);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, 90 * wd / dataObj.CurWdCount, 0), false, false);
                    break;

                  case RoadType.TurnRight:
                    let wdr = dataObj.wdIndex - (dataObj.deadIndex - dataObj.rebornIndex);
                    dataObj.wdIndex = wdr;
                    console.log("弯道走过指数:" + wdr);
                    dataObj.car.transform.rotate(new Laya.Vector3(0, -90 * wdr / dataObj.CurWdCount, 0), false, false);
                    break;

                  default:
                    break;
                }
                break;

              default:
                break;
            }
        }
        static getTheRebornPoint(dataObj) {
            let pointsArr = CarList.points[gg.player.getData().level];
            if (pointsArr.reborn.lenght == 1) return pointsArr.reborn[0];
            let pnt = null;
            for (let i = 0; i < pointsArr.reborn.length; i++) {
                const p = pointsArr.reborn[i];
                if (dataObj.loopIndex > p) {
                    pnt = p;
                }
            }
            return pnt;
        }
    }
    class CarContrl extends Laya.Script3D {
        constructor() {
            super();
            this.car = null;
            this.carId = 0;
            this.camera = null;
            this.secCamera = null;
            this.cameraNode = null;
            this.hideNode = null;
            this.v0 = null;
            this.vt = null;
            this.t = null;
            this.isPressW = false;
            this.isPressS = false;
            this.isPressA = false;
            this.isPressD = false;
            this.isMoving = false;
            this.defaultFlag = .01;
            this.defaultAddSpeed = .02;
            this.changeAngle = 0;
            this.allDistance = 0;
            this.perdis = 0;
            this.turnRightNow = false;
            this.turnLeftNow = false;
            this.turnUpNow = false;
            this.isAlive = true;
            this.rebornPoint = new Laya.Vector3(0, 0, 0);
            this.rebornRotation = new Laya.Quaternion(0, 0, 0, 1);
            this.curDir = CameraDir.Forward;
            this.curDirQut = new Laya.Quaternion(0, 0, 0, 1);
            this.turnAroundSpreed = .41;
            this.isFollow = false;
            this.isInWD = false;
            this.isAutoCorrect = false;
            this.tw = null;
            this.isShake = false;
            this.maxSpeed = 0;
            this.isDrop = false;
            this.isRoration = false;
            this.dropTime = 0;
            this.isFollowCamera = false;
            this.carBodyStatus = 0;
            this.wdOverPoint = new Laya.Vector3(0, 0, 0);
            this.wdOverRotation = new Laya.Quaternion(0, 0, 0, 1);
            this.roadPoints = [];
            this.loopIndex = 0;
            this.deadIndex = 0;
            this.rebornIndex = 0;
            this.isPause = true;
            this.wdIndex = 0;
            this.curRoadType = null;
            this.curRoadId = 0;
            this.isAI = false;
            this.CurWdCount = 0;
            this.CurCountPer = 0;
            this.isSuccess = false;
            this.cameraStatus = 0;
            this.cameraOffX = 0;
            this.cameraOffY = 2;
            this.cameraOffZ = -8;
            this.cameraAngle = 0;
            this.maxAngle = 2.5;
            this.curOriginDir = OriginDir.Up;
            this._isCarCrash = false;
            this.WdCount = 400;
            this.CountPer = 2;
            this.isOver = false;
            gg.event.on(GamePlayEvent.TurnOver, this, d => {
                let wd_data = d;
            });
            gg.event.on(GamePlayEvent.GoPo, this, v => {
                this.turnUpNow = true;
            });
            gg.event.on(GamePlayEvent.CarSpeedUp, this, dd => {
                if (this.isAI) return;
                if (dd.carid != this.carId) return;
                if (!this.isAlive) return;
                this.isPressW = dd.value;
                this.isPause = !dd.value;
                if (this.isPressW) {
                    this.carSpeedUpShake();
                } else {
                    this.carSpeedUpRecover();
                }
            });
            gg.event.on(GamePlayEvent.CarSlower, this, v => {
                if (!this.isAlive) return;
                this.carBrakeShake();
                this.isPressS = v;
                if (v) {
                    this.lightOn();
                } else {
                    this.lightOff();
                }
                if (this.isPressS) {
                    this.carBrakeShake();
                } else {
                    this.carBrakeShakeRecover();
                }
            });
            gg.event.on(GamePlayEvent.CarCrash, this, d => {
                if (d.carid != this.carId) return;
                this.carCrash();
            });
            gg.event.on(GamePlayEvent.CarDrop, this, d => {
                this.isDrop = true;
                this.carDrop();
            });
            gg.event.on(GamePlayEvent.OpenRebornPoint, this, d => {
                if (d.carid != this.carId) return;
                this.rebornRotation = d.rotation;
                this.rebornPoint = d.position;
            });
            gg.event.on(GamePlayEvent.ArriveTerminal, this, d => {
                this.isAlive = false;
                this.isPause = true;
                if (d.carid != this.carId) {
                    if (this.isSuccess == true) return;
                    if (this.isOver == true) return;
                    gg.event.event(GamePlayEvent.Failed, null);
                    this.isOver = true;
                } else {
                    if (this.isOver == true) return;
                    this.isSuccess = true;
                    gg.event.event(GamePlayEvent.ReLoad, null);
                    this.isOver = true;
                }
            });
            gg.event.on(GamePlayEvent.CameraMove, this, type => {
                let sOffX = .4, sOffY = .1, sOffZ = 0;
                let eOffX = .25, eOffY = .08, eOffZ = .138;
                switch (type) {
                  case CameraMoveType.Left:
                    this.cameraStatus = 1;
                    this.cameraRotate(-sOffX, sOffY, sOffZ, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  case CameraMoveType.LeftRecover:
                    this.cameraStatus = 1;
                    this.cameraRotate(eOffX, -eOffY, eOffZ, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  case CameraMoveType.Right:
                    this.cameraStatus = 1;
                    this.cameraRotate(sOffX, sOffY, sOffZ, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  case CameraMoveType.RightRecover:
                    this.cameraStatus = 1;
                    this.cameraRotate(-eOffX, -eOffY, eOffZ, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  case CameraMoveType.LeftRight:
                    this.cameraStatus = 1;
                    this.cameraRotate(eOffX, -eOffY, eOffZ, () => {
                        this.cameraRotate(sOffZ, sOffY, -sOffX, () => {
                            this.cameraStatus = 0;
                        });
                    });
                    break;

                  case CameraMoveType.LeftLeft:
                    this.cameraStatus = 1;
                    this.cameraRotate(-eOffX, -eOffY, eOffZ, () => {
                        this.cameraRotate(-sOffX, sOffY, sOffZ, () => {
                            this.cameraStatus = 0;
                        });
                    });
                    break;

                  case CameraMoveType.RightRight:
                    this.cameraStatus = 1;
                    this.cameraRotate(eOffX, -eOffY, eOffZ, () => {
                        this.cameraRotate(sOffX, sOffY, sOffZ, () => {
                            this.cameraStatus = 0;
                        });
                    });
                    break;

                  case CameraMoveType.RightLineLeft:
                    this.cameraStatus = 1;
                    this.cameraRotate(sOffZ, sOffY, -sOffX, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  case CameraMoveType.RightLeft:
                    this.cameraStatus = 1;
                    this.cameraRotate(-eOffX, -eOffY, eOffZ, () => {
                        this.cameraRotate(sOffZ, sOffY, -sOffX, () => {
                            this.cameraStatus = 0;
                        });
                    });
                    break;

                  case CameraMoveType.LeftRightLine:
                    this.cameraRotate(eOffZ - .03, -eOffY, eOffX, () => {
                        this.cameraStatus = 0;
                    });
                    break;

                  default:
                    break;
                }
            });
        }
        onAwake() {
            this.t = 0;
            this.v0 = 0;
            let cars = gg.data.getGameConf().cars;
            this.maxSpeed = cars[gg.player.getData().carId].speed;
        }
        onStart() {
            if (this.isAI) {
                this.CurWdCount = 1e3;
                this.CurCountPer = 5;
            } else {
                this.CurWdCount = this.WdCount;
                this.CurCountPer = this.CountPer;
            }
            this.showLerp();
            this.lightOff();
        }
        setSlowDown(isPress) {
            if (!this.isAlive) return;
            if (isPress) {
                this.carBodyStatus = 2;
                this.carBrakeShake();
            } else {
                this.carBodyStatus = 0;
                this.carBrakeShakeRecover();
            }
            this.isPressS = isPress;
            if (isPress) {
                this.lightOn();
            } else {
                this.lightOff();
            }
        }
        setSpeedUp(isPress) {
            if (!this.isAlive) return;
            if (isPress) {
                this.carBodyStatus = 1;
                this.carSpeedUpShake();
            } else {
                this.carBodyStatus = 0;
                this.carSpeedUpRecover();
            }
            this.isPressW = isPress;
        }
        setTurnLeft(isPress) {
            if (!this.isAlive) return;
            this.isPressA = isPress;
        }
        setTurnRight(isPress) {
            if (!this.isAlive) return;
            this.isPressD = isPress;
        }
        onUpdate() {
            if (this.cameraNode && this.cameraStatus == 0) {
                this.cameraFollow(.5);
            }
            if (!this.isPause) {
                PointOperate.moveToPoint(this);
            }
            if (this.isPause) {
                this.lightOn();
            } else {
                this.lightOff();
            }
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
        onLateUpdate() {}
        correctWheel() {
            let wl = this.car.getChildByName("wheelFather_FL");
            let wr = this.car.getChildByName("wheelFather_FR");
            let hwl = this.car.getChildByName("Car_" + this.carId + "_RL");
            let hwr = this.car.getChildByName("Car_" + this.carId + "_RR");
            wl.transform.rotation = this.car.transform.rotation;
            wr.transform.rotation = this.car.transform.rotation;
            hwl.transform.rotation = this.car.transform.rotation;
            hwr.transform.rotation = this.car.transform.rotation;
        }
        moveForward(distance) {
            let v = new Laya.Vector3();
            v.x = v.y = 0;
            v.z = distance;
            this.car.transform.translate(v);
        }
        showLerp() {
            this.roadPoints = PointOperate.loadPoints(this, 1);
        }
        moveForwardObj(obj) {
            let v = new Laya.Vector3();
            v.x = v.y = 0;
            v.z = -this.defaultFlag * this.vt;
            obj.transform.translate(v);
        }
        cameraFollow(rate) {
            var cameraPos = this.camera.transform.position;
            var newX = this.lerp(cameraPos.x, this.car.transform.position.x, rate);
            var newY = this.lerp(cameraPos.y, this.car.transform.position.y, rate);
            var newZ = this.lerp(cameraPos.z, this.car.transform.position.z, rate);
            this.camera.transform.localPosition = new Laya.Vector3(newX + this.cameraOffX, newY + this.cameraOffY, newZ + this.cameraOffZ);
            this.camera.transform.lookAt(this.car.transform.position, new Laya.Vector3(0, 1, 0));
        }
        cameraRotate(offx, offy, offz, callback) {
            Tools.anmtPlay(1, () => {
                this.cameraOffX += offx;
                this.cameraOffY += offy;
                this.cameraOffZ += offz;
                let rate = .5;
                if(this.camera)
                {
                    var cameraPos = this.camera.transform.position;
                    var newX = this.lerp(cameraPos.x, this.car.transform.position.x, rate);
                    var newY = this.lerp(cameraPos.y, this.car.transform.position.y, rate);
                    var newZ = this.lerp(cameraPos.z, this.car.transform.position.z, rate);
                    this.camera.transform.localPosition = new Laya.Vector3(newX + this.cameraOffX, newY + this.cameraOffY, newZ + this.cameraOffZ);
                    this.camera.transform.lookAt(this.car.transform.position, new Laya.Vector3(0, 1, 0));
                }
                


            }, () => {
                callback && callback();
            });
        }
        calAngle() {
            let angle = this.car.transform.rotation.y * 90 / .7;
            return angle;
        }
        Calculate(a, b, c) {
            let d_a = Laya.Vector3.distance(b, c);
            let d_b = Laya.Vector3.distance(a, c);
            let d_c = Laya.Vector3.distance(a, b);
            let angleA = Math.acos((d_b * d_b + d_c * d_c - d_a * d_a) / (2 * d_b * d_c)) * 180 / Math.PI;
            let angleB = Math.acos((d_a * d_a + d_c * d_c - d_b * d_b) / (2 * d_a * d_c)) * 180 / Math.PI;
            let angleC = Math.acos((d_a * d_a + d_b * d_b - d_c * d_c) / (2 * d_a * d_b)) * 180 / Math.PI;
            console.log(angleA + " " + angleB + " " + angleC);
        }
        GetLocalForward(startPoint, angle, distance = 10) {
            let localForward = new Laya.Vector3();
            let radian = angle * Math.PI / 180;
            localForward.x = startPoint.x + distance * Math.sin(radian);
            localForward.y = startPoint.y;
            localForward.z = startPoint.z + distance * Math.cos(radian);
            return localForward;
        }
        moveCamera() {
            let v = new Laya.Vector3();
            v.x = 0;
            v.y = 0;
            v.z = -this.defaultFlag * this.vt;
            this.camera.transform.translate(v);
        }
        moveRight(distance) {
            let v = new Laya.Vector3();
            v.z = v.y = 0;
            v.x = distance / 10;
            this.car.transform.translate(v);
        }
        moveCar() {
            let v = new Laya.Vector3();
            let x = 0, y = 0, z = 0;
            v.x = x;
            v.z = this.defaultFlag * this.vt;
            v.y = y;
            this.car.transform.translate(v);
        }
        calSpeed() {
            let asp = this.defaultAddSpeed;
            if (this.isPressW) {
                this.vt = this.vt + asp * this.t;
            } else {
                this.vt = this.vt - 4 * asp * this.t;
            }
            if (this.isPressS) {
                this.vt = this.vt - 4 * asp * this.t;
            }
            if (this.vt >= this.maxSpeed) this.vt = this.maxSpeed;
            if (this.vt <= 0) this.vt = 0;
        }
        trunRightAngle() {
            if (this.turnRightNow) {}
            return this.turnRightNow;
        }
        trunLeftAngle() {
            if (this.turnLeftNow) {}
            return this.turnLeftNow;
        }
        setCamera(val, speed) {
            if (this.isAutoCorrect) {
                return;
            }
            this.isAutoCorrect = true;
            var countdown = {
                value: 0
            };
            let ryOffset = this.car.transform.rotation.y + this.cameraNode.transform.rotation.y;
            console.log("-------");
            console.log(this.car.transform.rotation.y);
            console.log(this.cameraNode.transform.rotation.y);
            console.log("相差:" + ryOffset);
            console.log("-------");
            let tvale = val * Math.abs(ryOffset) / 15;
            if (this.tw) {
                Laya.Tween.clear(this.tw);
                console.log("清除之前动画");
            }
            this.tw = Laya.Tween.to(countdown, {
                value: 1,
                update: new Laya.Handler(this, () => {
                    if (this.cameraNode.transform) {
                        this.cameraNode.transform.rotate(new Laya.Vector3(0, tvale, 0), false, true);
                    }
                })
            }, speed * 1e3, Laya.Ease.cubicInOut, new Laya.Handler(this, () => {
                this.isAutoCorrect = false;
            }));
        }
        cameraTween() {
            let _r = this.camera.transform.rotation;
            Laya.Tween.to(this.camera.transform.rotation, {
                x: 190
            }, 500);
        }
        goPo() {
            if (this.turnUpNow) {
                this.moveCar();
            }
        }
        carCrash() {
            if (!this.isAlive) return;
            this.isAlive = false;
            this.isPressW = false;
            this.isPause = true;
            this.vt = 0;
            if(this.car)
            {
                let shader = this.car.getChildByName("car_shadow");
            }
           
            Laya.timer.once(3e3, this, () => {
                if (this.isAlive) return;
                if (this.isAI) {
                    this.carReborn();
                }
            });
            if (!this.isAI) {
                Laya.Sprite3D.load("res/d3/fx/fx_boom/Conventional/scene_game.lh", Laya.Handler.create(null, anmt => {
                    this.car.addChild(anmt);
                    Laya.timer.once(500, this, () => {
                        anmt.destroy();
                        this._carCrash();
                    });
                }));
            }
        }
        carDrop() {
           
            if (!this.isAlive) return;
            this.isAlive = false;
            this.isRoration = true;
            if(this.car)
            {
                let shader = this.car.getChildByName("car_shadow");
            }
    
            Laya.timer.once(5e3, this, () => {
                if (this.isAlive) return;
            });
            Laya.timer.once(2e3, this, () => {
                
                this._carCrash();
            });
        }
        _carCrash() {
            gg.ui.showDialogWithURL(Components.CrashPage, dialog => {
                Laya.updateTimer.pause()



                platform.getInstance().addGameList1()
                let btn_faster = dialog.getChildByName("btn_restart");
                this.setBtnEvent(null, btn_faster, () => {
                   
                  

                    platform.getInstance().showReward(()=>{
                        this.carReborn();
                        gg.ui.closeDialog(dialog);
                        Laya.updateTimer.resume()
                        platform.getInstance().removeGameList1()
                    })
                    
                });
                let btn_next = dialog.getChildByName("btn_next");




                this.setBtnEvent(null, btn_next, () => {
                    console.log("skip")
                    // gg.sdk.showVideoAd(data => {
                        // if (data && data.isEnded) {
                            // gg.ui.showToast(Locale.GetRewardSuccess);
                            // setTimeout(() => {
                                // gg.ui.closeDialog(dialog);
                    //         }, 1e3);
                    //     } else {
                    //         gg.ui.showToast(Locale.GetRewardFail);
                    //     }
                    // }, error => {
                    //     gg.ui.showToast(Locale.NoVideoAd);
                    // });
                    Laya.updateTimer.resume()
                    gg.ui.closeScene("res/scenes/GameScene.scene")
                    gg.ui.closeDialog(dialog)
                     gg.ui.switchScene("res/scenes/GameScene.scene", false, null,null)
                     platform.getInstance().removeGameList1()
                });
            }, true);
        }
        setBtnEvent(ui, btn, clickback, anmt) {
            let btn_faster = btn;
            btn_faster.on(Laya.Event.MOUSE_DOWN, this, () => {
                clickback && clickback(ui);
            });
        }
        carReborn() {
            if (this.isAlive) return;
            this.isDrop = false;
            this.isRoration = false;
            this.rebornIndex = PointOperate.getTheRebornPoint(this);
            this.loopIndex = this.rebornIndex;
            PointOperate.moveToPoint(this, true);
            PointOperate.getTheAngle(this, this.rebornIndex);
            Laya.timer.once(100, this, () => {
                this.vt = 0;
                this.isAlive = true;
                this.turnLeftNow = false;
                this.turnRightNow = false;
                this.isPressA = false;
                this.isPressD = false;
                this.isPressS = false;
                this.isPressW = false;
                if (this.isInWD) {
                    if (this.turnLeftNow) {
                        this.turnLeftNow = true;
                        this.turnRightNow = false;
                    }
                    if (this.turnRightNow) {
                        this.turnLeftNow = false;
                        this.turnRightNow = true;
                    }
                }
                let shader = this.car.getChildByName("car_shadow");
                shader.active = true;
            });
        }
        cameraDirTurn(toTurnDir) {
            let curDirQut = null;
            switch (this.curDir) {
              case CameraDir.Forward:
                switch (toTurnDir) {
                  case CameraDir.Forward:
                    this.curDirQut = new Laya.Quaternion(0, 0, 0, 1);
                    this.curDir = CameraDir.Forward;
                    break;

                  case CameraDir.Right:
                    this.curDirQut = new Laya.Quaternion(0, -.707, 0, .707);
                    this.curDir = CameraDir.Right;
                    break;

                  case CameraDir.Left:
                    this.curDirQut = new Laya.Quaternion(0, .707, 0, .707);
                    this.curDir = CameraDir.Left;
                    break;

                  default:
                    break;
                }
                break;

              case CameraDir.Left:
                switch (toTurnDir) {
                  case CameraDir.Forward:
                    this.curDirQut = new Laya.Quaternion(0, .707, 0, -.707);
                    this.curDir = CameraDir.Left;
                    break;

                  case CameraDir.Right:
                    this.curDirQut = new Laya.Quaternion(0, 0, 0, 1);
                    this.curDir = CameraDir.Forward;
                    break;

                  default:
                    break;
                }
                break;

              case CameraDir.Right:
                switch (toTurnDir) {
                  case CameraDir.Forward:
                    this.curDirQut = new Laya.Quaternion(0, .707, 0, .707);
                    this.curDir = CameraDir.Right;
                    break;

                  case CameraDir.Left:
                    this.curDirQut = new Laya.Quaternion(0, 0, 0, 1);
                    this.curDir = CameraDir.Forward;
                    break;

                  default:
                    break;
                }
                break;

              default:
                break;
            }
            return this.curDirQut;
        }
        carSpeedUpShake() {
            this.isShake = true;
            let carId = this.carId;
            let curEulerX = this.car.getChildByName("Car_" + carId).transform.localRotationEulerX;
            Tools.anmtPlay(.5, v => {
                let vv = -v * this.maxAngle;
                if (this.isPressW && curEulerX > vv) {
                    this.car.getChildByName("Car_" + carId).transform.localRotationEulerX = vv;
                }
            }, () => {});
        }
        carSpeedUpRecover(callback) {
            let carId = this.carId;
            let curEulerX = this.car.getChildByName("Car_" + carId).transform.localRotationEulerX;
            Tools.anmtPlay(.5, v => {
                let vv = (1 - v) * curEulerX;
                this.car.getChildByName("Car_" + carId).transform.localRotationEulerX = vv;
            }, () => {
                callback && callback();
            });
        }
        carBrakeShake() {
            this.isShake = true;
            let carId = this.carId;
            let curEulerX = this.car.getChildByName("Car_" + carId).transform.localRotationEulerX;
            if (curEulerX < 0) {
                let carId = this.carId;
                let curEulerX = this.car.getChildByName("Car_" + carId).transform.localRotationEulerX;
                Tools.anmtPlay(.2, v => {
                    let vv = (1 - v) * curEulerX;
                    this.car.getChildByName("Car_" + carId).transform.localRotationEulerX = vv;
                }, () => {
                    this.carBrakeShake();
                });
            } else {
                Tools.anmtPlay(.3, v => {
                    let vv = -v * this.maxAngle;
                    if (this.isPressS && -curEulerX > vv) {
                        this.car.getChildByName("Car_" + carId).transform.localRotationEulerX = -vv;
                    }
                }, () => {});
            }
        }
        carBrakeShakeRecover() {
            this.isShake = true;
            let carId = this.carId;
            let curEulerX = this.car.getChildByName("Car_" + carId).transform.localRotationEulerX;
            Tools.anmtPlay(.3, v => {
                let vv = (1 - v) * curEulerX;
                vv = -vv;
                this.car.getChildByName("Car_" + carId).transform.localRotationEulerX = -vv;
            }, () => {});
        }
        anmtPlay(t, callback, finish) {
            var p = {
                value: 0
            };
            Laya.Tween.to(p, {
                value: 1,
                update: new Laya.Handler(this, () => {
                    callback && callback();
                })
            }, t * 1e3, Laya.Ease.cubicInOut, new Laya.Handler(this, () => {
                finish && finish();
            }));
        }
        lerp(from, to, dt) {
            if (dt <= 0) {
                return from;
            } else if (dt >= 1) {
                return to;
            }
            return dt * to + (1 - dt) * from;
        }
        lightOn() {
            if (this.car) {
                let ll = this.car.getChildByName("Car_" + this.carId).getChildByName("Taillights_1");
                ll.active = false;
                let lr = this.car.getChildByName("Car_" + this.carId).getChildByName("Taillights_2");
                lr.active = true;
            }
        }
        lightOff() {
            if (this.car) {
                let ll = this.car.getChildByName("Car_" + this.carId).getChildByName("Taillights_1");
                ll.active = true;
                let lr = this.car.getChildByName("Car_" + this.carId).getChildByName("Taillights_2");
                lr.active = false;
            }
        }
        goUp() {
            let wl = this.car.getChildByName("wheelFather_FL");
            let wr = this.car.getChildByName("wheelFather_FR");
            wl.transform.translate(new Laya.Vector3(0, 10, 0));
            wr.transform.translate(new Laya.Vector3(0, 10, 0));
        }
        goDown() {
            let wl = this.car.getChildByName("wheelFather_FL");
            let wr = this.car.getChildByName("wheelFather_FR");
            wl.transform.translate(new Laya.Vector3(0, -10, 0));
            wr.transform.translate(new Laya.Vector3(0, -10, 0));
        }
        hideWheel() {
            let wl = this.car.getChildByName("wheelFather_FL");
            let wr = this.car.getChildByName("wheelFather_FR");
            wl.active = false;
            wr.active = false;
        }
        showWheel() {
            let wl = this.car.getChildByName("wheelFather_FL");
            let wr = this.car.getChildByName("wheelFather_FR");
            wl.active = true;
            wr.active = true;
        }
    }
    class AiControl extends Laya.Script {
        constructor() {
            super();
            this.car = null;
            this.carId = 0;
            this.roadPoints = [];
            this.loopIndex = 0;
            this.deadIndex = 0;
            this.rebornIndex = 0;
            this.isPause = true;
            this.wdIndex = 0;
            this.curRoadType = null;
            this.curRoadId = 0;
            this.isAI = false;
            this.CurWdCount = 0;
            this.CurCountPer = 0;
            this.aiCarSide = 1;
            this.curOriginDir = null;
        }
        onStart() {
            this.isAI = true;
            let rdm = Math.floor(Math.random() * 6 + 4);
            if (rdm <= 4) rdm = 4;
            if (rdm >= 6) rdm = 6;
            rdm = 3;
            this.CurWdCount = rdm * 200;
            this.CurCountPer = rdm;
            this.roadPoints = PointOperate.loadPoints(this, this.aiCarSide);
            PointOperate.moveToPoint(this, false);
            gg.event.on(GamePlayEvent.CarCrash, this, d => {
                if (d.carid != this.carId) return;
                if (this.isPause) return;
                this.carCrash();
            });
            gg.event.on(GamePlayEvent.GameStart, this, d => {
                this.isPause = false;
            });
        }
        onUpdate() {
            if (!this.isPause && this.loopIndex < this.roadPoints.length) {
                PointOperate.moveToPoint(this, false);
            }
        }
        onDestroy() {
            gg.event.offAllCaller(this);
        }
        carCrash() {
            this.isPause = true;
            Laya.Sprite3D.load("res/d3/fx/fx_boom/Conventional/scene_game.lh", Laya.Handler.create(null, anmt => {
                this.car.addChild(anmt);
                Laya.timer.once(1e3, this, () => {
                    anmt.destroy();
                    this.carReborn();
                });
            }));
        }
        carReborn() {
            this.isPause = false;
            this.rebornIndex = PointOperate.getTheRebornPoint(this);
            this.loopIndex = this.rebornIndex;
            PointOperate.moveToPoint(this, true);
            PointOperate.getTheAngle(this, this.rebornIndex);
        }
    }
    class TriggerCollisionScript extends Laya.Script3D {
        constructor() {
            super();
            this.curWdType = null;
        }
        onTriggerEnter(other) {
            let car = other.owner;
            let script = null;
            if (car.AI) {
                script = car.getComponent(AiControl);
            } else {
                script = car.getComponent(CarContrl);
            }
            if (!script) {
                script = {};
                script.carId = car.carId;
            }
            let self = this.owner;
            switch (self.tag) {
              case CollsionTag.WDOver:
                Laya.timer.once(280, this, () => {
                    if (this.owner.parent.name == "road_right") {
                        let rd = {
                            value: true,
                            carid: script.carId
                        };
                        gg.event.event(GamePlayEvent.TrunRight, rd);
                    }
                    if (this.owner.parent.name == "road_left") {
                        let rl = {
                            value: true,
                            carid: script.carId
                        };
                        gg.event.event(GamePlayEvent.TrunLeft, rl);
                    }
                    let d = {
                        rotation: self.parent.transform.rotation,
                        position: self.transform.position,
                        carid: script.carId
                    };
                    gg.event.event(GamePlayEvent.TurnOver, d);
                });
                break;

              case CollsionTag.Reborn1:
                console.log("复活点");
                let dd = {
                    rotation: self.parent.transform.rotation,
                    position: self.transform.position,
                    carid: script.carId
                };
                gg.event.event(GamePlayEvent.OpenRebornPoint, dd);
                break;

              case CollsionTag.CarCrashOver:
                let ddc = {
                    carid: script.carId
                };
                gg.event.event(GamePlayEvent.CarCrash, ddc);
                break;

              case CollsionTag.Success:
                let ddcs = {
                    carid: script.carId
                };
                gg.event.event(GamePlayEvent.ArriveTerminal, ddcs);
                break;

              default:
                break;
            }
        }
        onTriggerStay(other) {}
        onTriggerExit(other) {
            let self = this.owner;
            switch (self.tag) {
              case CollsionTag.CarDrop:
                gg.event.event(GamePlayEvent.CarDrop, null);
                break;
            }
        }
        onCollisionEnter(collision) {
            let car = collision.other.owner;
            let script = null;
            if (car.AI) {
                script = car.getComponent(AiControl);
            } else {
                script = car.getComponent(CarContrl);
            }
            if (!script) {
                script = {};
                script.carId = car.carId;
            }
            let self = this.owner;
            if (this.owner.name == "road_left" || this.owner.name == "road_right") {
                switch (self.tag) {
                  case RoadDirectionType.Right:
                    let rd = {
                        value: true,
                        carid: script.carId
                    };
                    gg.event.event(GamePlayEvent.TrunRight, rd);
                    this.curWdType = self.tag;
                    break;

                  case RoadDirectionType.Left:
                    let rl = {
                        value: true,
                        carid: script.carId
                    };
                    gg.event.event(GamePlayEvent.TrunLeft, rl);
                    this.curWdType = self.tag;
                    break;

                  default:
                    break;
                }
            }
            console.log("碰撞进入");
        }
        onCollisionStay(collision) {}
        onCollisionExit(collision) {
            let self = this.owner;
            switch (self.tag) {
              case CollsionTag.Road:
                break;
            }
            console.log("碰撞离开");
        }
        resetCanCollion() {}
    }
    class GamePlay extends Laya.Script {
        constructor() {
            super(...arguments);
            this.gameNode = null;
            this.roundCamera = false;
            this.roundAngle = 160;
            this.curLevel = 0;
            this.nextRoad = null;
            this.canMove = false;
            this.cameraIsDown = false;
            this.showControlUI = false;
            this.isReload = false;
            this.AiCarList = {};
            this.countdownnum = 3
        }
        onAwake() {
            this.levelBox.visible = true;
            this.touchPanel.visible = false;
            this.curLevel = gg.player.getData().level;
            this.currentLevelLbl.text = this.curLevel + "";
            this.nextLevelLbl.text = this.curLevel + 1 + "";
            if(this.curLevel>=20)
            {
                this.nextLevelLbl.text = "END"
            }
           
            this.gameStartBtn.on(Laya.Event.CLICK, this, this.onClickStart);
            this.shopBtn.on(Laya.Event.CLICK, this, this.onClickShop);
             this.CountDown.visible = false;
            this.gameNode = new Laya.Box();
            this.gameNode.zOrder = -1;
            Laya.stage.addChild(this.gameNode);
            this.initLoad();
            this.addGamePlayEvent();
            setTimeout(() => {
                this.preloadRoad(this.curLevel + 1);
            }, 2e3);
            this.createBtnEvent(this.touchPanel, GamePlayEvent.CarSpeedUp);
           
   
            let data = gg.data.getStorage("smashcarplus")

            console.log("self",self.LevelList)
      //this.LevelList.visible= false
         this.LevelList.dataSource=[]
            let dataSource = []
            for (let i = 0 ; i < 20 ; i++)
            {
                let data = null;
                data = {
                    LevelBg:{skin:"res/ui/local/sprites/square_gray_1.png"},
                   
                    LevelNum:{
                        
                        text:i+1,
                         color:"#ffffff",
                        // color:"#000000"
                        
                    }
                }
                dataSource.push(data)
            }
    
            this.index = data.level-1
            this.LevelList.dataSource = dataSource
            console.log("datadata",data.maxlevel)
            for(let i = 0 ; i < 20 ; i ++)
            {
                 if(i <= data.maxlevel-1)
                 {
                    this.LevelList.dataSource[i].LevelBg.skin = "res/ui/local/sprites/square_yellow.png"
                    console.log(i)
                 }
            }


                this.LevelList.dataSource[data.level-1].LevelNum.color = "#000000"


            this.LevelList.selectEnable = true;
            this.LevelList.selectHandler = new Laya.Handler(this, this.onClickList);;
            
console.log("this.LevelList.dataSource",this.LevelList.dataSource)
this.gameLevelLbl.text = "Level " + this.curLevel
        
        }
        onClickList(index){
            console.log("index",index)
            console.log("thisindex",this.index)
            let data = gg.data.getStorage("smashcarplus")
            console.log("data",data)

            if(index<=data.maxlevel-1)
            {
                if(this.index!=index)
                {
                    this.LevelList.dataSource[this.index].LevelNum.color = "#ffffff"
                }
                this.index = index
                this.LevelList.dataSource[index].LevelNum.color = "#000000"
            
              
                //设置关卡
                
                data.level = index+1;
                gg.data.setStorage("smashcarplus",data)

              
             //  this. initLoad()
             gg.player.update("level", index +1);
             console.log("1111111111111",index+1)
                this.curLevel = index +1
                gg.event.event(GamePlayEvent.ReLoadScene);
                this.currentLevelLbl.text = this.curLevel
                this.nextLevelLbl.text = this.curLevel + 1 + "";
                if(this.curLevel>=20)
                {
                    this.nextLevelLbl.text = "END"
                }
            }

            this.gameLevelLbl.text = "Level " + this.curLevel



        }
     

        createBtnEvent(node, type) {
            let btn_faster = node;
            btn_faster.on(Laya.Event.MOUSE_DOWN, this, () => {
                let dd = {
                    value: true,
                    carid: gg.player.getData().carId
                };
                gg.event.event(type, dd);
            });
            btn_faster.on(Laya.Event.MOUSE_UP, this, () => {
                let du = {
                    value: false,
                    carid: gg.player.getData().carId
                };
                gg.event.event(type, du);
            });
        }
        addGamePlayEvent() {
            gg.event.offAllCaller(this);
            gg.event.once(GamePlayEvent.ReLoad, this, v => {
                this.gameOver(true);
            });
            gg.event.once(GamePlayEvent.CarCrashUI, this, v => {
                this.gameOver(false);
            });
            gg.event.once(GamePlayEvent.Failed, this, v => {
                this.gameOver(false);
            });
            gg.event.on(GamePlayEvent.ReLoadScene, this, v => {
                this.initLoad();
            });
        }
        onClickShop() {
            gg.ui.showDialogWithURL(Components.ShopDialog, null, false);
        }
        onClickStart() {
            platform.getInstance().showInterstitial(()=>{

                this.LevelList.visible = false
                this.levelBox.visible = false;
                this.gameStartBtn.visible = false;
                this.shopBtn.visible = false;
       
                Laya.timer.loop(1000, this, ()=>{
                    this.CountDown.visible = true
                    this.CountDown.text =this.countdownnum;
                    this.countdownnum--
                    
                    console.log(this.countdownnum)
                    if(this.countdownnum <=-1)
                    {
                     this.CountDown.visible = false
                     gg.event.event(GamePlayEvent.GameStart);
                     this.roundCamera = true;
                     this.touchPanel.visible = true;
    
                    }
    
               })

            })



            
        }
        changeCamera() {
            if (!this.cameraIsDown) {
                this.cameraIsDown = true;
                this.cameraNode.transform.rotate(new Laya.Vector3(-10, 0, 0), true, false);
            } else {
                this.cameraIsDown = false;
                this.cameraNode.transform.rotate(new Laya.Vector3(10, 0, 0), true, false);
            }
        }
        initLoad() {
            if (this.curScene) {


                this.curRoad.destroy();
                this.curCar.destroy();
                this.curScene.destroy();
                this.cameraNode.destroy();

                //Laya.Resource.destroyUnusedResources();
                console.log("reload")
                if (this.AiCarList) {
                    for (const key in this.AiCarList) {
                        if (Object.prototype.hasOwnProperty.call(this.AiCarList, key)) {
                            const element = this.AiCarList[key];
                            this.AiCarList[key].destroy();
                        }
                    }
                }
            }




            this.initScene(this.curLevel, () => {});
        }
        preloadRoad(level) {
            gg.res.preloadD3Res([ "res/d3/checkpoint/checkpoint" + level + "/Conventional/scene_game.lh" ]);
        }
        gameOver(iswin) {
            let conf = gg.data.getGameConf();
            let data = {
                isWin: iswin,
                isSkip: true,
                isReloadGame: true,
                onReward: null,
                onContinue: null,
                currentLevel: this.curLevel,
                nextLevel: this.curLevel == conf.maxLevel ? this.curLevel : this.curLevel + 1
            };
            if (!iswin) {

                data.onReward = (() => {
                    this.levelUp();
                });
                data.onContinue = (() => {});
                gg.event.event(GamePlayEvent.GameOver, data);
            } else {
                this.levelUp();
                data.gold = conf.perLevelGetMoney;
                data.onReward = (() => {
                    this.getReward(conf.perLevelGetMoney * 3);
                });
                data.onContinue = (() => {
                    this.getReward(conf.perLevelGetMoney);
                });
                Laya.Sprite3D.load("res/d3/fx/fx_confetti/Conventional/scene_game.lh", Laya.Handler.create(null, anmt => {
                    this.curCar.addChild(anmt);
                    Laya.timer.once(2e3, this, () => {
                        if (anmt) {
                            anmt.destroy();
                            gg.event.event(GamePlayEvent.GameOver, data);
                        }
                    });
                }));
            }
        }
        getReward(money) {
            const data = gg.player.getData();
            if (data) {
                gg.player.update("money", data.money + money);
            }
        }
        levelUp() {
            const data = gg.player.getData()
            let level = data.level
            console.log("data",data)
            if (data) {
                if(data.level+1<=20)
                {
                    gg.player.update("level", data.level + 1);
                    if(level == data.maxlevel)
                    {
                        gg.player.update("maxlevel", data.maxlevel + 1);
                    }
                }

                
            }

            console.log("data",data)

        }
        onDestroy() {
            console.log("destory");
            this.clearAll();
        }
        initScene(level, callback) {
            Laya.Scene3D.load("res/d3/scene_game/Conventional/scene_game.ls", Laya.Handler.create(this, scene => {
                this.curScene = scene;
                this.gameNode.addChild(scene);
                this.addKinematicSphere(level, callback);
                
            }));
        }
        addKinematicSphere(level, callback) {


            Laya.Sprite3D.load("res/d3/checkpoint/checkpoint" + level + "/Conventional/scene_game.lh", Laya.Handler.create(null, sp1 => {
                let l = this.curScene.addChild(sp1);
                this.curRoad = l;
                this.getAllWd(l);
                this.getAllZaw(l);
                this.setTerminal(l);
                this.addCar(callback);


                if (!this.isReload) {
                    this.addAiCar(3, 1, 2);
                    this.addAiCar(4, 2, 1);
                }
            }));



        }
        loadRoad(r) {
            let l = this.curScene.addChild(r);
            this.curRoad = l;
            this.getAllWd(l);
            this.getAllZaw(l);
            this.setTerminal(l);
            this.addCar();
        }
        addCar(callback) {


            Laya.Sprite3D.load("res/d3/car/car_" + gg.player.getData().carId + "/Conventional/scene_game.lh", Laya.Handler.create(null, sp => {
                let obj = this.curScene.addChild(sp);
                let car = obj.getChildAt(0);
                let s = car.addComponent(CarContrl);
                s.car = car;
                s.carId = gg.player.getData().carId;
                this.cameraNode = car.getChildByName("node_camera");
                s.cameraNode = this.cameraNode;
                let curcmr = this.cameraNode.getChildAt(0);
                console.log("curcmr",curcmr)



                s.camera = curcmr;
                curcmr.active = true;
                curcmr.transform.rotation.y = 0;
                
                car.parent.addChild(this.cameraNode);
                curcmr.transform.rotate(new Laya.Vector3(0, 180, 0), false, false);
                curcmr.transform.position = new Laya.Vector3(0, 0, 0);
                this.curCar = car;
                this.curCar.transform.position = new Laya.Vector3(0, 0, 0);
                this.curCar.transform.rotation = new Laya.Quaternion(0, 0, 0, 1);
                let clr = car.getComponent(Laya.Rigidbody3D);
                if (clr) {
                    clr.destroy();
                }

   
                   var  character=car.addComponent(Laya.CharacterController);

             
                    var sphereShape = new Laya.CapsuleColliderShape(1, 3.4);
                    sphereShape.localOffset = new Laya.Vector3(0, 1.7, 0);
                    character.colliderShape = sphereShape;
                    callback && callback();


                    

            }));
        }
        addAiCar(carid, side, flag) {
            Laya.loader.create("res/d3/car/car_" + carid + "/Conventional/scene_game.lh", Laya.Handler.create(null, sp => {
                let new_car = Laya.Sprite3D.instantiate(sp.getChildAt(0));
                let obj = this.curScene.addChild(new_car);
                let car = obj;
                this.AiCarList[carid] = car;
                let script = car.addComponent(AiControl);
                car.carId = carid;
                script.car = car;
                script.isAI = true;
                script.carId = carid;
                script.aiCarSide = side;
                let cameraNode = car.getChildByName("node_camera");
                if (cameraNode) {
                    cameraNode.destroy();
                }
                let clr = car.getComponent(Laya.Rigidbody3D);
                if (clr) {
                    clr.destroy();
                }

                var character=car.addComponent(Laya.CharacterController);
                var sphereShape = new Laya.CapsuleColliderShape(1, 3.4);
                sphereShape.localOffset = new Laya.Vector3(0, 1.7, 0);
                character.colliderShape = sphereShape;
            }));
        }
        setObstaclesCollide(obstacles) {
            let allzaw = this.getAllChildByName(obstacles, "mechanism1");
            for (let i = 0; i < allzaw.length; i++) {
                const zaw = allzaw[i];
                let zaw_yz_1 = zaw.getChildByName("mesh_mechanism1_1");
                zaw_yz_1.tag = CollsionTag.CarCrashOver;
                this.setClliderTrigger(zaw_yz_1);
                let re = zaw.getChildByName("revive");
                re.tag = CollsionTag.Reborn1;
                this.setClliderTrigger(re);
            }
        }
        setDoorObstaclesCollide(obstacles, name, zawName) {
            let allzaw = this.getAllChildByName(obstacles, name);
            for (let i = 0; i < allzaw.length; i++) {
                const zaw = allzaw[i];
                let zaw_yz_1 = zaw.getChildByName("mesh_" + zawName + "_1");
                zaw_yz_1.tag = CollsionTag.CarCrashOver;
                this.setClliderTrigger(zaw_yz_1);
                let zaw2 = zaw.getChildByName("mesh_" + zawName + "_2");
                zaw2.tag = CollsionTag.CarCrashOver;
                this.setClliderTrigger(zaw2);
                let red = zaw.getChildByName("mesh_mechanism2_red");
                let green = zaw.getChildByName("mesh_mechanism2_green");
                let yellow = zaw.getChildByName("mesh_mechanism2_yellow");
                red.active = true;
                green.active = false;
                yellow.active = false;
                this.controlLight(red, green, yellow);
                let re = zaw.getChildByName("revive");
                re.tag = CollsionTag.Reborn1;
                this.setClliderTrigger(re);
            }
        }
        setTerminal(obstacles) {
            let zaw = obstacles.getChildAt(0).getChildByName("end");
            if (zaw) {
                zaw.tag = CollsionTag.Success;
                this.setClliderTrigger(zaw);
            }
        }
        setZmObstaclesCollide(obstacles) {
            let allzaw = this.getAllChildByName(obstacles, "mechanism3");
            for (let i = 0; i < allzaw.length; i++) {
                const zaw = allzaw[i];
                let zaw_yz_1 = zaw.getChildByName("mesh_mechanism3_1");
                zaw_yz_1.tag = CollsionTag.CarCrashOver;
                this.setClliderTrigger(zaw_yz_1);
                let re = zaw.getChildByName("revive");
                re.tag = CollsionTag.Reborn1;
                this.setClliderTrigger(re);
            }
        }
        setSimpleCollide(obstacles, name, zawName) {
            let allzaw = this.getAllChildByName(obstacles, name);
            for (let i = 0; i < allzaw.length; i++) {
                const zaw = allzaw[i];
                let zaw_yz_1 = zaw.getChildByName(zawName);
                zaw_yz_1.tag = CollsionTag.CarCrashOver;
                this.setClliderTrigger(zaw_yz_1);
                let re = zaw.getChildByName("revive");
                re.tag = CollsionTag.Reborn1;
                this.setClliderTrigger(re);
            }
        }
        controlLight(red, green, yellow) {
            Laya.timer.once(500, this, () => {
                red.active = false;
                green.active = true;
                yellow.active = false;
            });
            Laya.timer.once(3300, this, () => {
                red.active = false;
                green.active = false;
                yellow.active = true;
            });
            Laya.timer.once(4200, this, () => {
                red.active = true;
                green.active = false;
                yellow.active = false;
            });
            Laya.timer.once(4600, this, () => {
                this.controlLight(red, green, yellow);
            });
        }
        setClliderTrigger(obj, isTrig) {
            let cll = obj.getComponent(Laya.PhysicsCollider);
            if (!cll) return;
            if (isTrig == false) {} else {
                cll.isTrigger = true;
            }
            let script = cll.owner.addComponent(TriggerCollisionScript);
            script.kinematicSprite = this.curCar;
        }
        createRoadCollide(road, childname, tag) {
            let wdr = road.getChildAt(0).getChildByName(childname);
            wdr.tag = tag;
            var script = wdr.addComponent(TriggerCollisionScript);
            script.kinematicSprite = this.curCar;
            let re = wdr.getChildByName("pass");
            if (re) {
                re.tag = CollsionTag.WDOver;
                this.setClliderTrigger(re);
            }
        }
        receaveRealShadow(scene3d) {
            var childLength = scene3d.numChildren;
            for (var i = 0; i < childLength; i++) {
                var childSprite = scene3d.getChildAt(i);
                if (childSprite instanceof Laya.MeshSprite3D) {
                    childSprite.meshRenderer.receiveShadow = true;
                    childSprite.meshRenderer.castShadow = true;
                } else if (childSprite instanceof Laya.SpotLight) {
                    childSprite.shadowMode = Laya.ShadowMode.Hard;
                    childSprite.shadowDistance = 3;
                    childSprite.shadowResolution = 512;
                    childSprite.shadowDepthBias = 1;
                }
            }
            return;
        }
        onUpdate() {}
        clearAll() {
            gg.event.offAllCaller(this);
            if (this.curScene) {
                this.curRoad.destroy();
                this.curCar.destroy();
                this.curScene.destroy();
                this.cameraNode.destroy();
            }
            if (this.gameNode) this.gameNode.destroy();
        }
        getAllChildByName(root, name) {
            let obj = [];
            let r = root.getChildAt(0);
            for (let i = 0; i < r.numChildren; i++) {
                const child = r.getChildAt(i);
                if (child.name == name) {
                    obj.push(child);
                }
            }
            return obj;
        }
        getAllWd(root) {
            let l_wd = this.getAllChildByName(root, "road_left");
            for (let i = 0; i < l_wd.length; i++) {
                const childl = l_wd[i];
                this.createWdRoad(childl, "road_left", RoadDirectionType.Left);
            }
            let r_wd = this.getAllChildByName(root, "road_right");
            for (let i = 0; i < r_wd.length; i++) {
                const childr = r_wd[i];
                this.createWdRoad(childr, "road_right", RoadDirectionType.Right);
            }
        }
        createWdRoad(wd, childname, tag) {
            let wdr = wd;
            wdr.tag = tag;
            var script = wdr.addComponent(TriggerCollisionScript);
            script.kinematicSprite = this.curCar;
            let re = wdr.getChildByName("pass");
            if (re) {
                re.tag = CollsionTag.WDOver;
                this.setClliderTrigger(re);
            }
            let fall = wdr.getChildByName("fall");
            if (fall) {
                fall.tag = CollsionTag.CarDrop;
                this.setClliderTrigger(fall);
            }
        }
        getAllZaw(root) {
            this.setObstaclesCollide(root);
            this.setSimpleCollide(root, "mechanism1_1", "mesh_mechanism1_1");
            this.setDoorObstaclesCollide(root, "mechanism2", "mechanism2");
            this.setDoorObstaclesCollide(root, "mechanism2_1", "mechanism2");
            this.setZmObstaclesCollide(root);
            this.setSimpleCollide(root, "mechanism3_1", "mesh_mechanism3_1");
            this.setSimpleCollide(root, "mechanism4", "mesh_mechanism4_1");
            this.setSimpleCollide(root, "mechanism4_1", "mesh_mechanism4_1");
            this.setSimpleCollide(root, "mechanism5", "mesh_mechanism5_1");
            this.setSimpleCollide(root, "mechanism5_1", "mesh_mechanism5_1");
            this.setSimpleCollide(root, "mechanism6", "mesh_mechanism6_1");
            this.setSimpleCollide(root, "mechanism6_1", "mesh_mechanism6_1");
            this.setSimpleCollide(root, "mechanism7", "mesh_mechanism7_1_2");
            this.setSimpleCollide(root, "mechanism7", "mesh_mechanism7_2_2");
            this.setSimpleCollide(root, "mechanism7", "mesh_mechanism7_3_2");
            this.setSimpleCollide(root, "mechanism7", "mesh_mechanism7_4_2");
            this.setSimpleCollide(root, "mechanism7", "mesh_mechanism7_5_2");
            this.setSimpleCollide(root, "mechanism8", "mesh_mechanism8_1");
            this.setSimpleCollide(root, "mechanism8", "mesh_mechanism8_2");
            this.setSimpleCollide(root, "mechanism8", "mesh_mechanism8_3");
            this.setSimpleCollide(root, "mechanism9", "mesh_mechanism9_1");
            this.setSimpleCollide(root, "mechanism9", "mesh_mechanism9_3");
            this.setSimpleCollide(root, "mechanism9", "mesh_mechanism9_5");
            this.setSimpleCollide(root, "mechanism9", "mesh_mechanism9_7");
            this.setSimpleCollide(root, "mechanism9", "mesh_mechanism9_9");
            this.setSimpleCollide(root, "mechanism10", "mesh_mechanism10_1");
            this.setSimpleCollide(root, "mechanism11", "mesh_mechanism11_1");
            this.setSimpleCollide(root, "mechanism11", "mesh_mechanism11_2");
            this.setSimpleCollide(root, "mechanism12", "mesh_mechanism12_1");
            this.setSimpleCollide(root, "mechanism12", "mesh_mechanism12_2");
            this.setSimpleCollide(root, "mechanism12", "mesh_mechanism12_3");
            this.setSimpleCollide(root, "mechanism13", "mesh_mechanism13_1");
            this.setSimpleCollide(root, "mechanism14", "mesh_mechanism14_1");
            this.setSimpleCollide(root, "mechanism14", "mesh_mechanism14_2");
            this.setSimpleCollide(root, "mechanism15", "mesh_mechanism15_1");
        }
    }
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
            return Laya.Browser.clientHeight / Laya.Browser.clientWidth > 2;
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
            console.log("存储数据")
        }
        getStorage(key) {
            let value = localStorage.getItem(key), data = null;
            if (typeof value === "string" && (value[0] === "{" && value[value.length - 1] === "}")) {
                try {
                    data = JSON.parse(value);
                } catch (error) {
                    data = value;
                }
            } else {
                let num = parseFloat(value);
                if (!isNaN(num)) data = num;
            }
            console.log("获取数据")
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
    const ggsdk = window["ggsdk"];
    class WxPlatform {
        constructor(appName) {
            this.name = "wx";
            this._fixBannerId = 0;
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
                    resolve({
                        ip: "",
                        addr: [],
                        openid: "testwebopenid"
                    });
                }
                ggsdk.login({
                    success: res => {
                        resolve(res);
                    },
                    fail: err => {
                        reject();
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
        async navigateToMiniProgram(obj, onFail, onSuccess, onComplete) {
            if (typeof wx.navigateToMiniProgram !== "function") {
                return;
            }
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
                    items += `,${obj.appid}`;
                    this.setStorage(StorageKey.ExportSuccess, items);
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
        createBannerAd(data, style) {
            if (!data) return;
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
                            console.log("onLoad check Banner: " + res);
                        },
                        onError: err => {
                            if (err.errCode > 1002) this._loadBannerError = true;
                            console.log("banner onerror:", err);
                        },
                        onResize: res => {
                            console.log("onResize check Banner: " + res);
                        }
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
            if (!this._bannerData) this._bannerData = data;
            if (!this._bannerData) return;
            this.hideFullScreenBanner();
            let {screenWidth: screenWidth, screenHeight: screenHeight} = this.getSystemInfo(), bannerCount = isLandscape ? 2 : 1, minTop = 104, bannerRealHeight = 0;
            for (let i = 0; i < bannerCount; i++) {
                const bannerAd = this._banners[0];
                console.log("XXXX" + bannerAd);
                let bid;
                if (bannerAd) {
                    console.log(bannerAd);
                    bid = bannerAd.adUnitId;
                }
                if (!bid) {
                    bid = this._bannerData.banner[i].id;
                }
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
                    },
                    onError: err => {
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
                    if (banner) {
                        banner.hide();
                        banner.destroy();
                    }
                }
            }
            this._fullscreenBanners = [];
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
            return new Promise((resolve, reject) => {
                Promise.all([ this.getPlatform().login(isDebug), this.loadConfig(configUrl, version, isDebug) ]).then(values => {
                    console.log("mini game init done ->", values);
                    const loginData = values[0];
                    if (loginData) {
                        this._loginData = loginData;
                    } else {
                        console.log("login fail");
                        reject();
                    }
                    const configData = values[1];
                    if (configData) {
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
                        resolve(configData);
                    } else {
                        console.error("load config fail");
                        reject();
                    }
                }).catch(reason => {
                    console.log("mini-game init fail:", reason);
                    reject();
                });
            });
        }
        loadConfig(url, version, isDebug) {
            url += "?r=" + version + "_" + (!isDebug ? Math.floor(Date.now() / (5 * 60 * 1e3)) : Math.random());
            return new Promise((resolve, reject) => {
                if (!url) reject();
                const maxReloadCount = 3;
                let xhr = new XMLHttpRequest(), reloadCount = 0, startLoad = () => {
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
                if (typeof wx === "undefined") {
                    this._platform = new WebPlatform();
                } else {
                    this._platform = new WxPlatform(this._appName);
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
                return this._configData.custom;
            }
            return null;
        }
        checkBannerAdOpen() {
            if (this._configData && this._configData.bannerSwitch.count > 0 && this._configData.adData.banner.length > 0) {
                return true;
            }
            return false;
        }
        getBannerAdData() {
            if (this.checkBannerAdOpen()) {
                return {
                    banner: this._configData.adData.banner,
                    switchCount: this._configData.bannerSwitch.count,
                    switchTime: this._configData.bannerSwitch.time
                };
            }
            return null;
        }
        checkVideoAdOpen() {
            if (this._configData && this._configData.adData.video.length > 0) {
                return true;
            }
            return false;
        }
        getVideoAdData() {
            if (this.checkVideoAdOpen()) {
                return this._configData.adData.video[0];
            }
            return null;
        }
        checkExportOpen() {
            if (this._configData) {
                return this._configData["export"] && Object.keys(this._configData["export"]).length > 0;
            }
            return false;
        }
        checkExportTypeOpen(type) {
            if (this.checkExportOpen()) {
                return this._configData["export"][type] && this._configData["export"][type]["items"] && this._configData["export"][type]["items"].length > 0;
            }
            return false;
        }
        getExportData(type) {
            if (this.checkExportTypeOpen(type)) {
                let data = [], appList = [ ...this._configData.appList ], exportData = this._configData["export"][type];
                let successExports = this.getPlatform().getStorage(StorageKey.ExportSuccess);
                if (successExports) {
                    let exportList = successExports.split(",");
                    for (let i = appList.length - 1; i >= 0; i--) {
                        if (exportList.indexOf(appList[i].appid) != -1) {
                            appList.splice(i, 1);
                        }
                    }
                }
                let exportAppCount = appList.length;
                for (let i = exportData.items.length - 1; i >= 0; i--) {
                    const item = exportData.items[i];
                    for (let j = 0; j < exportAppCount; j++) {
                        const app = appList[j];
                        if (app.gid != item) continue;
                        let appData = {
                            ...app
                        };
                        appData.type = type;
                        data.push(appData);
                    }
                }
                data = data.sort((a, b) => {
                    if (a.weight > b.weight) return -1;
                    if (a.weight < b.weight) return 1;
                    return 0;
                });
                data = data.slice(0, Math.min(data.length, exportData.displayCount));
                data = data.sort((a, b) => Math.random() > .5 ? 1 : -1);
                return data;
            }
            return null;
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
        createBannerAd(style) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.createBannerAd && thePlatform.createBannerAd(this.getBannerAdData(), style);
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
        report(eventType, data) {
            if (!this.iswx()) return;
            const thePlatform = this.getPlatform();
            thePlatform.report && thePlatform.report(eventType, data);
        }
        trackTA(eventType, data) {
            if (!this.iswx()) return;
            window["ggsdk"] && window["ggsdk"].trackTA(eventType, data);
        }
        calcBottomBannerSize(width = 300, isIphoneX = false) {
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
            if (isIphoneX) {
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
            if (this.iswx() || IsLoadRemoteRes) confURL = RemoteUrl + confURL;
            return new Promise((resolve, reject) => {
                this._sdk.init(GameName, `${GamePublishDate}.${GameVersion.split(",").join()}`, confURL, IsDebugMode).then(conf => {
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
        checkExportOpen() {
            if (this._sdk) return this._sdk.checkExportOpen();
            return false;
        }
        checkExportTypeOpen(type) {
            if (this._sdk) return this._sdk.checkExportTypeOpen(type);
            return false;
        }
        getExportData(type) {
            if (this._sdk) return this._sdk.getExportData(type);
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
        createVideoAd() {
            if (this._sdk) {
                if (this._sdk.checkVideoAdOpen()) {
                    this._sdk.createVideoAd(this.onRewardedVideoAdLoaded.bind(this), this.onRewardedVideoAdClosed.bind(this), this.onRewardedVideoAdError.bind(this));
                }
            }
        }
        onRewardedVideoAdLoaded(data) {
            gg.event.event(VideoAdEvent.Loaded);
        }
        onRewardedVideoAdClosed(data) {
            gg.event.event(VideoAdEvent.Closed, data);
            if (this._isShowVideoAd) {
                this._isShowVideoAd = false;
                if (this._onVideoAdClosed) this._onVideoAdClosed(data);
                this._onVideoAdClosed = null;
                this._onVideoAdError = null;
            }
        }
        onRewardedVideoAdError(data) {
            gg.event.event(VideoAdEvent.Error, data);
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
        createBannerAd(width) {
            if (this._sdk) {
                if (this._sdk.checkVideoAdOpen()) {
                    this._sdk.createBannerAd(this._sdk.calcBottomBannerSize(width || 300, gg.ui.checkIsIphoneX()));
                }
            }
        }
        createFullScreenBannerAd(isLandscape = true) {
            if (this._sdk) {
                if (this._sdk.checkVideoAdOpen()) {
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
            if (gg.sdk.iswx() && NativeFiles) {
                Laya.MiniAdpter.nativefiles = NativeFiles;
            }
        }
        setBasePath(resVersion) {
            if (!gg.sdk.iswx() && !IsLoadRemoteRes) return;
            let url = `${RemoteUrl}${GameId}_res`;
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
    class DataMgr {
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
                if (gg.sdk.iswx() || IsLoadRemoteRes) url = `${RemoteUrl}${url}`;
                console.log("game config:", url);
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
            if (platform) {
                return platform.getStorage(key);
            }
            return null;
        }
    }
    class PlayerModel {
        constructor() {
            this.level = 0;
            this.car = {};
            this.carId = 0;
            this.money = 0;
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
                player.level = 1;
                player.carId = 1;
                player.car[1] = 1;
                player.money = 0;
                player.maxlevel = 1
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
                        gg.sdk.getPlatform().onShow(() => {
                            gg.event.event(AppEvent.OnShow);
                        });
                    }
                    resolve();
                }).catch(() => {
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
            this._totalResCount = 0;
            this._loadedResCount = 0;
        }
        onAwake() {
            super.onAwake();
            this.owner.autoDestroyAtClosed = true;
            this.versionLbl.text = ``;
            this.progressBar.value = 0;
            this.tipsLbl.text = Locale.LoadRes;
            InitMgr.getInstance().init().then(() => {
                this.loadRes();
            });
        }
        loadRes() {
            this._isResLoading = true;
            if (PreloadRes) {
                Laya.loader.once(Laya.Event.ERROR, this, this.onLoadResError);
                let res2d = PreloadRes["2d"] || [], res3d = PreloadRes["3d"] || [];
                if (res2d.length > 0) this._totalResCount++;
                if (res3d.length > 0) this._totalResCount++;
                if (res2d.length > 0) Laya.loader.load(res2d, Laya.Handler.create(this, this.onLoad2DResOver));
                if (res3d.length > 0) Laya.loader.create(res3d, Laya.Handler.create(this, this.onLoad3DResOver));
                console.log("preload res count:", this._totalResCount);
            }
            if (this._totalResCount == 0) {
                setTimeout(() => {
                    this.checkLoadResOver();
                }, 1e3);
            }
        }
        onLoadResError(message) {
            console.error("Load Res Error: ", message);
        }
        onLoad2DResOver() {
            this.checkLoadResOver();
        }
        onLoad3DResOver() {
            this.checkLoadResOver();
        }
        checkLoadResOver() {
            if (++this._loadedResCount < this._totalResCount) return;
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
            platform.getInstance().cargamesstartup("Violent-Race",()=>{
                var yad = platform.getInstance().createLogo()
                yad.bottom = 0;
                yad.right  = 0;

            })
            gg.ui.switchScene("res/scenes/GameScene.scene", false, Laya.Handler.create(this, scene => {
                if (!scene) {
                    this.tipsLbl.changeText(Locale.LoadResFail);
                    return;
                }
                scene.visible = false;
                setTimeout(() => {
                    gg.ui.closeScene(this.owner);
                    scene.visible = true;
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
            reg("components/effect/FlowAni.ts", FlowAni);
            reg("components/scenes/GameScene.ts", GameScene);
            reg("gamePlay/GamePlay.ts", GamePlay);
            reg("components/scenes/LoginScene.ts", LoginScene);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "exactfit";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "res/scenes/LoginScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    class Main {
        constructor() {
            if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height); else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat) Laya.Stat.show();
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
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
//# sourceMappingURL=bundle.js.map
console.log = console.warn = function(){}