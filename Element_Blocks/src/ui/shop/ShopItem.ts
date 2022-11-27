namespace BlockPuzzle {
    export class ShopItem extends Phaser.Group {

        private readonly windowShop: WindowShop;

        public readonly powerupType: PowerupType;

        protected pad: Phaser.Sprite;
        protected icon: Phaser.Sprite;
        protected priceText: BitmapTextField;
        protected priceStar: Phaser.Sprite;
        protected buttonBuy: Phaser.Button;
        protected boughtMark: Phaser.Sprite;


        constructor(windowShop: WindowShop, powerupType: PowerupType) {
            super(windowShop.game, null);
            this.windowShop = windowShop;
            this.powerupType = powerupType;

            this.buildContent();
        }

        protected buildContent() {
            this.scale.set(1.2);

            this.pad = this.add(this.game.make.sprite(-10, 0, Settings.GAME_ATLAS, 'shopPricePadBig0000'));
            this.pad.anchor.set(0.5);
            this.pad.inputEnabled = true;
            this.pad.events.onInputDown.add(this.buyClicked, this);

            this.icon = this.add(this.game.make.sprite(-88, -10, Settings.GAME_ATLAS, 'icon' + this.powerupType + '0000'));
            this.icon.anchor.set(0.5);
            this.icon.scale.set(1.2);

            this.priceStar = this.add(this.game.make.sprite(50, -3, Settings.GAME_ATLAS, 'iconStarShopBig0000'));
            this.priceStar.anchor.set(0.5);

            this.priceText = this.add(new BitmapTextField('' + PowerupManager.instance.getPrice(this.powerupType), Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.priceText.position.set(-16, -2);

            this.buttonBuy = this.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonBuyBig', 130, -5, 1, this.buyClicked, this, false));

            this.boughtMark = this.add(this.game.make.sprite(115, -5, Settings.GAME_ATLAS, 'boughtMarkBig0000'));
            this.boughtMark.anchor.set(0.5);
            this.boughtMark.scale.set(0.75);
            this.boughtMark.visible = false;
        }

        public show() {
            this.boughtMark.visible = false;

            this.pad.frameName = 'shopPricePadBig0000';
            this.icon.x = -88;
            this.priceText.visible = true;
            this.priceStar.visible = true;
            this.buttonBuy.visible = this.buttonBuy.inputEnabled = true;

            this.priceStar.frameName = 'iconStarShopBig0000';
            this.icon.frameName = 'icon' + this.powerupType + '0000';
            this.priceText.styleKey = "Gold";
            this.priceText.changeText('' + PowerupManager.instance.getPrice(this.powerupType), true);
        }

        protected buyClicked() {
            if (StarsManager.instance.getStarsAmount() >= PowerupManager.instance.getPrice(this.powerupType)) {
                this.buttonBuy.inputEnabled = false;
                this.buttonBuy.visible = false;
                this.boughtMark.visible = true;
                this.game.tweens.removeFrom(this.boughtMark.scale);
                this.boughtMark.scale.set(0.2);
                this.game.add.tween(this.boughtMark.scale)
                    .to({x: 0.75, y: 0.75}, 50, Phaser.Easing.Sinusoidal.Out, true);
                SoundController.instance.playBuyingSound();
                PowerupManager.instance.buy(this.powerupType);
                this.windowShop.powerupBought();
            } else {
                this.displayError();
            }
        }

        private displayError() {
            this.windowShop.starsCounter.displayError();

            ColorUtils.bounceTint(this.priceStar, 0xFF0000, 0xFFFFFF, 350);
            this.priceText.children.forEach(c =>
                ColorUtils.bounceTint(c as Phaser.Sprite, 0xFF0000, 0xFFFFFF, 350));

            SoundController.instance.playErrorSound();
        }
    }
}