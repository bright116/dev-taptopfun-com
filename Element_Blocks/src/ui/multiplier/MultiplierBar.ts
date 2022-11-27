namespace BlockPuzzle {
    export class MultiplierBar extends Phaser.Group {

        public readonly uiManager: UIManager;
        public readonly level: Level;

        protected contentContainer: Phaser.Group;
        protected padGrayscale: Phaser.Sprite;
        protected padWhite: Phaser.Sprite;
        protected padGold: Phaser.Sprite;
        protected textFieldGold: BitmapTextField;
        protected textFieldGrayscale: BitmapTextField;

        protected progressMask: Phaser.Graphics;

        private readonly padHeight: number = 70;

        private storedMultiplierValue: number = 1;
        private storedProgressValue: number = 0;

        constructor(uiManager: UIManager) {
            super(uiManager.game);
            this.uiManager = uiManager;
            this.level = uiManager.level;

            this.buildChildren();

            ScoreManager.instance.onMultiplierChanges.add(this.handleMultiplierChange, this);
        }

        protected buildChildren() {
            this.contentContainer = this.add(this.game.make.group());

            this.padGrayscale = this.contentContainer.add(this.game.make.sprite(0, 0, Settings.ANIMATION_ATLAS, 'multiplierPadGrey0000'));
            this.padGrayscale.anchor.set(0.5);
            this.padGrayscale.scale.set(0.75);

            this.textFieldGrayscale = this.contentContainer.add(new BitmapTextField('x' + this.storedMultiplierValue, Settings.GAME_ATLAS,'MultiplierGrey', 1.1, 0.5, 0.5, -2));
            this.textFieldGrayscale.position.set(0, 0);

            this.padGold = this.contentContainer.add(this.game.make.sprite(0, 0, Settings.ANIMATION_ATLAS, 'multiplierPad0000'));
            this.padGold.anchor.set(0.5);
            this.padGold.scale.set(0.75);

            this.padWhite = this.contentContainer.add(this.game.make.sprite(0, 0, Settings.ANIMATION_ATLAS, 'multiplierPadWhite0000'));
            this.padWhite.anchor.set(0.5);
            this.padWhite.alpha = 0;
            this.padWhite.scale.set(0.75);

            this.textFieldGold = this.contentContainer.add(new BitmapTextField('x' + this.storedMultiplierValue, Settings.GAME_ATLAS, 'Multiplier', 1.1, 0.5, 0.5, -2));
            this.textFieldGold.position.set(0, 0);

            this.progressMask = this.contentContainer.add(this.game.make.graphics(0, this.padHeight / 2));
            this.progressMask.beginFill(0, 0.5).drawRect(-this.padGold.width / 2, 0, this.padGold.width, this.padGold.height).endFill();

            this.padGold.mask = this.progressMask;
            this.textFieldGold.mask = this.progressMask;
        }

        private handleMultiplierChange(multiplier: number, progress: number) {
            if (this.storedMultiplierValue == multiplier) {
                this.game.add.tween(this.progressMask)
                    .to({y: -1 + (0.5 - progress) * this.padHeight}, 500, Phaser.Easing.Sinusoidal.Out, true);
                this.game.tweens.removeFrom(this.padWhite);
                this.game.add.tween(this.padWhite)
                    .to({alpha: 0.5}, 250, Phaser.Easing.Linear.None, false)
                    .to({alpha: 0.0}, 250, Phaser.Easing.Linear.None, false)
                    .start();
            } else if (multiplier > this.storedMultiplierValue) {
                AchievementsManager.instance.addValue(AchievementType.TOTAL_LEVEL_UPS, multiplier - this.storedMultiplierValue);
                SoundController.instance.playlevelUpSound();
                const totalDuration: number = 500;
                const fillingDuration: number = Phaser.Math.clamp(1 - this.storedProgressValue, 0.1, 0.8) * totalDuration;
                this.game.add.tween(this.progressMask)
                    .to({y: -1 + (0.5 - 1) * this.padHeight}, fillingDuration, Phaser.Easing.Sinusoidal.Out, false)
                    .to({y: -1 + (0.5) * this.padHeight}, 1, Phaser.Easing.Sinusoidal.Out, false)
                    .to({y: -1 + (0.5 - progress) * this.padHeight}, totalDuration - fillingDuration + 1, Phaser.Easing.Sinusoidal.Out, false)
                    .start();
                this.game.time.events.add(fillingDuration, () => this.updateMultiplierTexts(multiplier));
                this.game.tweens.removeFrom(this.padWhite);
                this.game.add.tween(this.padWhite)
                    .to({alpha: 0.6}, fillingDuration, Phaser.Easing.Linear.None, false)
                    .to({alpha: 0}, totalDuration - fillingDuration, Phaser.Easing.Linear.None, false)
                    .start();
            }

            this.storedMultiplierValue = multiplier;
            this.storedProgressValue = progress;
        }

        private updateMultiplierTexts(multiplier: number) {
            this.textFieldGrayscale.changeText('x' + multiplier);
            this.textFieldGold.changeText('x' + multiplier);
        }

    }
}