namespace BlockPuzzle {
    export class ResultsMultiplierBar extends Phaser.Group {

        public readonly results: WindowResults;

        protected contentContainer: Phaser.Group;
        protected padGrayscale: Phaser.Sprite;
        protected padGold: Phaser.Sprite;
        protected textFieldGold: BitmapTextField;
        protected textFieldGrayscale: BitmapTextField;

        protected progressMask: Phaser.Graphics;

        private readonly padHeight: number = 70;

        private storedMultiplierValue: number = 1;
        private storedProgressValue: number = 0;

        constructor(results: WindowResults) {
            super(results.game);
            this.results = results;

            this.buildChildren();
        }

        protected buildChildren() {
            this.contentContainer = this.add(this.game.make.group());

            this.padGrayscale = this.contentContainer.add(this.game.make.sprite(0, 0, Settings.ANIMATION_ATLAS, 'multiplierPadGrey0000'));
            this.padGrayscale.anchor.set(0.5);
            this.padGrayscale.scale.set(0.75);

            this.textFieldGrayscale = this.contentContainer.add(new BitmapTextField('x' + this.storedMultiplierValue, Settings.GAME_ATLAS, 'MultiplierGrey', 1.1, 0.5, 0.5, -2));
            this.textFieldGrayscale.position.set(0, 0);

            this.padGold = this.contentContainer.add(this.game.make.sprite(0, 0, Settings.ANIMATION_ATLAS, 'multiplierPad0000'));
            this.padGold.anchor.set(0.5);
            this.padGold.scale.set(0.75);

            this.textFieldGold = this.contentContainer.add(new BitmapTextField('x' + this.storedMultiplierValue, Settings.GAME_ATLAS, 'Multiplier', 1.1, 0.5, 0.5, -2));
            this.textFieldGold.position.set(0, 0);

            this.progressMask = this.contentContainer.add(this.game.make.graphics(0, this.padHeight / 2));
            this.progressMask.beginFill(0, 0.5).drawRect(-this.padGold.width / 2, 0, this.padGold.width, this.padGold.height).endFill();

            this.padGold.mask = this.progressMask;
            this.textFieldGold.mask = this.progressMask;
        }

        public setValue(multiplier: number, progress: number) {
            this.updateMultiplierTexts(multiplier);

            this.game.add.tween(this.progressMask)
                .to({y: -1 + (0.5 - progress) * this.padHeight}, 800, Phaser.Easing.Sinusoidal.Out, true, 650);

            this.textFieldGrayscale.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);
            this.textFieldGold.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);

            this.storedMultiplierValue = multiplier;
            this.storedProgressValue = progress;
        }

        private updateMultiplierTexts(multiplier: number) {
            this.textFieldGrayscale.changeText('x' + multiplier);
            this.textFieldGold.changeText('x' + multiplier);
        }

    }
}