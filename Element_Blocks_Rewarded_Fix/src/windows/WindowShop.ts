///<reference path="abstract/CloseableWindow.ts"/>
namespace BlockPuzzle {
    export class WindowShop extends CloseableWindow {

        protected itemsMap: Map<PowerupType, ShopItem>;
        protected currentItem: ShopItem;
        protected itemsContainer: Phaser.Group;
        protected buttonContinue: Phaser.Button;
        public starsCounter: ShopStarsCounter;

        constructor(windowManager: WindowManager) {
            super(windowManager, WindowHeadingBackplateType.SILVER, 'iconHeadingShop', Settings.WINDOW_BACKGROUND_ALPHA);
        }

        protected buildContent() {
            this.itemsContainer = this.contentContainer.add(this.game.make.group());
            this.itemsMap = new Map<PowerupType, ShopItem>();
            this.itemsMap.set(PowerupType.BOMB, this.itemsContainer.add(new ShopItem(this, PowerupType.BOMB)));
            this.itemsMap.set(PowerupType.LIGHTNING, this.itemsContainer.add(new ShopItem(this, PowerupType.LIGHTNING)));

            this.buttonContinue = this.contentContainer.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonContinue', 0, 0, 1, this.continueClicked, this));
            this.starsCounter = this.contentContainer.add(new ShopStarsCounter(this));

            this.windowHeading.visible = false;
            this.buttonContinue.visible = false;
        }

        protected resizeContent() {
            super.resizeContent();
            this.itemsContainer.position.set(-22, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.54);
            this.buttonContinue.position.set(-5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
            this.starsCounter.position.set(-28 * CustomScaleManager.UPSCALE_FACTOR, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.2);
            this.starsCounter.scale.set(CustomScaleManager.UPSCALE_FACTOR);
            if (this.currentItem) {
                this.currentItem.scale.set(CustomScaleManager.UPSCALE_FACTOR);
            }
        }

        public setPowerupType(powerupType: PowerupType) {
            this.itemsMap.forEach(item => item.visible = item.powerupType == powerupType);
            this.currentItem = this.itemsMap.get(powerupType);
        }

        public show() {
            super.show();

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SHOP);
            }

            this.starsCounter.visible = true;
            this.updateData();
        }

        public updateData() {
            this.starsCounter.setStarsAmount(StarsManager.instance.getStarsAmount());
            this.currentItem.show();
        }

        public powerupBought() {
            this.starsCounter.setStarsAmount(StarsManager.instance.getStarsAmount());
            this.closeClicked();
        }

        public animateAppearing(delay: number) {
            this.currentItem.alpha = 0;
            this.game.add.tween(this.currentItem)
                .to({alpha: 1}, 200, Phaser.Easing.Sinusoidal.Out, true, 200);
            this.currentItem.scale.set(0.6);
            this.game.add.tween(this.currentItem.scale)
                .to({
                    x: CustomScaleManager.UPSCALE_FACTOR,
                    y: CustomScaleManager.UPSCALE_FACTOR
                }, 240, Phaser.Easing.Back.Out, true, 200);

            this.game.tweens.removeFrom(this.starsCounter);
            this.starsCounter.alpha = 1;
            this.game.add.tween(this.starsCounter)
                .from({y: '-60', alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, delay);

            this.buttonContinue.inputEnabled = true;
            this.game.tweens.removeFrom(this.buttonContinue);
            this.buttonContinue.alpha = 1;
            this.game.add.tween(this.buttonContinue)
                .from({y: '70', alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 50);
        }

        public animateDisappearing(delay: number, onClosedCallback: Function) {
            super.animateDisappearing(delay, onClosedCallback);

            this.game.add.tween(this.currentItem)
                .to({alpha: 0}, 160, Phaser.Easing.Sinusoidal.InOut, true, delay);

            this.game.tweens.removeFrom(this.starsCounter);
            this.game.add.tween(this.starsCounter)
                .to({y: '-60', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay);

            this.buttonContinue.inputEnabled = false;
            this.game.tweens.removeFrom(this.buttonContinue);
            this.game.add.tween(this.buttonContinue)
                .to({y: '100', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay);

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.itemsContainer, false);
            this.game.tweens.removeFrom(this.itemsContainer.scale, false);
            this.game.tweens.removeFrom(this.buttonContinue, false);
            this.game.tweens.removeFrom(this.starsCounter, false);
            this.game.tweens.removeFrom(this.starsCounter.scale, false);
            if (this.currentItem) {
                this.game.tweens.removeFrom(this.currentItem, false);
                this.game.tweens.removeFrom(this.currentItem.scale, false);
            }
        }

        /**
         * INPUT HANDLERS
         */


        protected onCloseClicked() {

        }

        protected continueClicked() {
            this.animateDisappearing(0, () => {
            })
        }
    }
}