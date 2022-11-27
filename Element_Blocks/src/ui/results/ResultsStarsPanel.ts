namespace BlockPuzzle {
    export class ResultsStarsPanel extends Phaser.Group {

        protected readonly results: WindowResults;

        protected pad: Phaser.Sprite;
        protected textField: BitmapTextField;
        protected icon: Phaser.Sprite;

        constructor(results: WindowResults) {
            super(results.game, null);
            this.results = results;

            this.scale.set(1.25);
            this.buildContent();
        }

        protected buildContent() {
            this.pad = this.add(this.game.make.sprite(10, 0, Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);

            this.textField = this.add(new BitmapTextField('0',  Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(100, 0);

            this.icon = this.add(this.game.make.sprite(10, 0, Settings.GAME_ATLAS, 'resultsIconStar0000'));
            this.icon.anchor.set(0.5);
        }

        protected show(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string = '', rightValuePrefix: string = '', delay: number, textTweenDelay: number, tweenTextDuration: number) {
            this.resetTweens();

            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);

            this.animateAppearing(delay);
        }

        public tweenTexts(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string, rightValuePrefix: string, textTweenDelay: number, tweenTextDuration: number) {
            this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
        }

        protected animateAppearing(delay: number) {
            this.icon.scale.set(0.5);
            this.game.add.tween(this.icon.scale)
                .to({x: 1, y: 1}, 350, Phaser.Easing.Back.Out, true, delay + 100);
            this.icon.alpha = 0;
            this.game.add.tween(this.icon)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);

            this.pad.scale.x = 0;
            this.game.add.tween(this.pad.scale)
                .to({x: 1.3}, 450, Phaser.Easing.Back.Out, true, delay + 150);

            this.textField.visible = false;
            this.textField.scale.set(0.5);
            this.game.add.tween(this.textField.scale)
                .to({x: 0.72, y: 0.72}, 450, Phaser.Easing.Back.Out, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);

            this.textField.visible = false;
            this.textField.alpha = 0;
            this.game.add.tween(this.textField)
                .to({alpha: 1}, 500, Phaser.Easing.Linear.None, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);
        }

        protected resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
            this.game.tweens.removeFrom(this.pad.scale);
            this.game.tweens.removeFrom(this.textField);
            this.game.tweens.removeFrom(this.textField.scale);

            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.pad.scale.set(1.3);
            this.textField.scale.set(1);
            this.textField.visible = true;
        }

        public showPanel(delay: number, textTweenDelay: number, duration: number) {
            this.show(0, Math.max(0, StarsManager.instance.getStarsAmount()), 0, 0, '', '', delay, delay + textTweenDelay, duration);
        }
    }
}