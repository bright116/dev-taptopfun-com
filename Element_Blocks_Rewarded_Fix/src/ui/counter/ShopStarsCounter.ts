namespace BlockPuzzle {
    export class ShopStarsCounter extends Phaser.Group {

        public readonly windowShop: WindowShop;

        protected contentContainer: Phaser.Group;
        protected icon: Phaser.Sprite;
        protected textField: BitmapTextField;
        protected errorSmile: Phaser.Sprite;

        constructor(windowShop: WindowShop) {
            super(windowShop.game, null);
            this.windowShop = windowShop;

            this.buildChildren();
        }

        protected buildChildren() {
            this.contentContainer = this.add(this.game.make.group());
            this.contentContainer.scale.set(1.25);

            this.icon = this.contentContainer.add(this.game.make.sprite(1, 0, Settings.GAME_ATLAS, 'uiIconStar0000'));
            this.icon.anchor.set(0.5);
            this.icon.scale.set(0.9);

            this.textField = this.contentContainer.add(new BitmapTextField('0', Settings.GAME_ATLAS, 'Gold', 0.67, 0, 0.5, 1));
            this.textField.position.set(40, 3);

            this.errorSmile = this.add(this.game.make.sprite(135, 5, Settings.GAME_ATLAS, 'errorSmile0000'));
            this.errorSmile.anchor.set(0.5);
            this.errorSmile.alpha = 0;

            this.updateStarsAmount(StarsManager.instance.getStarsAmount());

            StarsManager.instance.onStarsAmountChanged.add(this.updateStarsAmount, this);
        }

        private dispatchStarAdded(starsAmount: number) {
            this.updateStarsAmount(starsAmount);
        }

        public setStarsAmount(value: number) {
            this.textField.changeText('' + value, true);
        }

        private updateStarsAmount(starsAmount: number) {
            this.game.tweens.removeFrom(this.textField.scale);
            this.textField.changeText('' + starsAmount);
            this.textField.scale.set(0);
            this.game.add.tween(this.textField.scale)
                .to({x: 0.6, y: 0.6}, 190, Phaser.Easing.Back.Out, true);
        }


        public displayError() {
            this.game.tweens.removeFrom(this.errorSmile);
            this.game.tweens.removeFrom(this.errorSmile.scale);
            this.errorSmile.alpha = 0;
            this.errorSmile.x = this.textField.x + this.textField.getLocalBounds().width * this.textField.scale.x + 80;
            this.errorSmile.y = 20;
            this.errorSmile.scale.set(0);
            this.game.add.tween(this.errorSmile)
                .to({alpha: 0.9}, 120, Phaser.Easing.Sinusoidal.In, false)
                .to({alpha: 0}, 700, Phaser.Easing.Quintic.In, false)
                .start();
            this.game.add.tween(this.errorSmile)
                .to({y: 2}, 180, Phaser.Easing.Sinusoidal.In, false)
                .to({y: -30}, 700, Phaser.Easing.Linear.None, false)
                .start();

            this.game.add.tween(this.errorSmile.scale)
                .to({x: 1.5, y: 1.5}, 240, Phaser.Easing.Elastic.Out, false)
                .to({x: 1.65, y: 1.65}, 550, Phaser.Easing.Quadratic.In, false)
                .start();

        }
    }
}