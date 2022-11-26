namespace BlockPuzzle {
    export class DoubleStarsButton extends Phaser.Group {

        private readonly results: WindowResults;

        protected pad: Phaser.Sprite;
        protected buttonContainer: Phaser.Group;
        protected buttonDoubleStars: Phaser.Button;
        protected textField: BitmapTextField;

        private starsAmount: number = 0;

        public isActive: boolean = true;

        constructor(results: WindowResults) {
            super(results.game, null);
            this.results = results;

            this.buildContent();
        }

        protected buildContent() {
            this.pad = this.add(this.game.make.sprite(10, 0, Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set( -0.8, 0.9);

            this.textField = this.add(new BitmapTextField('+12', Settings.GAME_ATLAS, 'Gold', 0.7, 0.5, 0.5, 1));
            this.textField.position.set(-82, 0);

            this.buttonContainer = this.add(this.game.make.group());
            this.buttonDoubleStars = this.buttonContainer.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonRewardedVideoSmall', 0, 0, 1, this.doubleStarsClicked, this));
        }

        protected doubleStarsClicked() {
            if(this.isActive) {
                APIUtils.instance.showRewardedVideo(() =>  this.collapse());
            }
        }

        public show(delay: number, starsAmount: number) {
            this.resetTweens();
            this.scale.set(1.2);

            this.isActive = true;
            this.starsAmount = starsAmount;
            this.textField.changeText('+' + starsAmount);

            this.buttonContainer.scale.set(0.5);
            this.game.add.tween(this.buttonContainer.scale)
                .to({x: 1.2, y: 1.2}, 300, Phaser.Easing.Back.Out, true, delay + 100);
            this.buttonContainer.alpha = 0;
            this.game.add.tween(this.buttonContainer)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);

            this.pad.scale.x = 0;
            this.game.add.tween(this.pad.scale)
                .to({x: -0.8}, 250, Phaser.Easing.Back.Out, true, delay + 100);

            this.textField.visible = false;
            this.textField.scale.set(0.2);
            this.game.add.tween(this.textField.scale)
                .to({x: 0.7, y: 0.7}, 300, Phaser.Easing.Back.Out, true, delay + 200)
                .onStart.add(() => this.textField.visible = true);
        }

        protected collapse() {
            this.resetTweens();

            this.isActive = false;

            this.results.addBonusStars(this.starsAmount);
            this.starsAmount = 0;

            this.game.add.tween(this.textField)
                .to({alpha: 0}, 120, Phaser.Easing.Linear.None, true);

            this.game.add.tween(this.textField.scale)
                .to({x: 0, y: 0}, 120, Phaser.Easing.Back.In, true);

            this.game.add.tween(this.pad.scale)
                .to({x: 0}, 200, Phaser.Easing.Sinusoidal.In, true, 0);

            this.game.add.tween(this.buttonContainer.scale)
                .to({x: 0, y: 0}, 200, Phaser.Easing.Back.In, true, 100)
                .onComplete.add(() => this.buttonContainer.visible = false);
        }

        private resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.textField);
            this.game.tweens.removeFrom(this.textField.scale);
            this.game.tweens.removeFrom(this.pad);
            this.game.tweens.removeFrom(this.pad.scale);
            this.game.tweens.removeFrom(this.buttonContainer, false);
            this.game.tweens.removeFrom(this.buttonContainer.scale, false);

            this.textField.alpha = 1;
            this.textField.visible = true;
            this.textField.scale.set(0.7);
            this.pad.scale.set(-0.8, 0.9);
            this.buttonContainer.scale.set(1);
            this.buttonContainer.visible = true;
        }
    }
}