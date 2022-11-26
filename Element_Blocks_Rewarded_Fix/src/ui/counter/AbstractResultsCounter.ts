namespace BlockPuzzle {
    export abstract class AbstractResultsCounter extends Phaser.Group {

        protected readonly results: WindowResults;

        protected padLeft: Phaser.Sprite;
        protected padRight: Phaser.Sprite;

        protected textFieldLeft: BitmapTextField;
        protected textFieldRight: BitmapTextField;

        protected icon: Phaser.Sprite;

        constructor(results: WindowResults, iconFrameName) {
            super(results.game, null);
            this.results = results;

            this.buildContent();
            this.buildIcon(iconFrameName);
        }

        protected buildContent() {
            this.padLeft = this.add(this.game.make.sprite(5, 0, Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.padLeft.anchor.set(0, 0.5);
            this.padLeft.scale.x = -1;

            this.padRight = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.padRight.anchor.set(0, 0.5);

            this.textFieldLeft = this.add(new BitmapTextField('0', Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.textFieldLeft.position.set(-90, 0);

            this.textFieldRight = this.add(new BitmapTextField('0', Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.textFieldRight.position.set(107, 0);
        }

        protected buildIcon(frameName: string) {
            this.icon = this.add(this.game.make.sprite(10, 0, Settings.GAME_ATLAS, frameName + '0000'));
            this.icon.anchor.set(0.5);
        }

        protected show(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string = '', rightValuePrefix: string = '', delay: number, textTweenDelay: number, tweenTextDuration: number) {
            this.resetTweens();

            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);

            this.animateAppearing(delay);
        }

        public tweenTexts(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string, rightValuePrefix: string, textTweenDelay: number, tweenTextDuration: number) {
            this.textFieldLeft.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
            this.textFieldRight.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
        }

        protected animateAppearing(delay: number) {
            this.icon.scale.set(0.5);
            this.game.add.tween(this.icon.scale)
                .to({x: 1, y: 1}, 350, Phaser.Easing.Back.Out, true, delay + 100);
            this.icon.alpha = 0;
            this.game.add.tween(this.icon)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);

            this.padLeft.scale.x = 0;
            this.game.add.tween(this.padLeft.scale)
                .to({x: -1}, 450, Phaser.Easing.Back.Out, true, delay + 150);

            this.padRight.scale.x = 0;
            this.game.add.tween(this.padRight.scale)
                .to({x: 1}, 450, Phaser.Easing.Back.Out, true, delay + 150);

            this.textFieldLeft.visible = false;
            this.textFieldLeft.scale.set(0.5);
            this.game.add.tween(this.textFieldLeft.scale)
                .to({x: 0.75, y: 0.75}, 450, Phaser.Easing.Back.Out, true, delay + 250)
                .onStart.add(() => this.textFieldLeft.visible = true);

            this.textFieldRight.visible = false;
            this.textFieldRight.scale.set(0.5);
            this.game.add.tween(this.textFieldRight.scale)
                .to({x: 0.75, y: 0.75}, 450, Phaser.Easing.Back.Out, true, delay + 330)
                .onStart.add(() => this.textFieldRight.visible = true);

            this.textFieldLeft.visible = false;
            this.textFieldLeft.alpha = 0;
            this.game.add.tween(this.textFieldLeft)
                .to({alpha: 1}, 500, Phaser.Easing.Linear.None, true, delay + 250)
                .onStart.add(() => this.textFieldLeft.visible = true);

            this.textFieldRight.visible = false;
            this.textFieldRight.alpha = 0;
            this.game.add.tween(this.textFieldRight)
                .to({alpha: 1}, 500, Phaser.Easing.Linear.None, true, delay + 330)
                .onStart.add(() => this.textFieldRight.visible = true);
        }

        protected resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
            this.game.tweens.removeFrom(this.padLeft.scale);
            this.game.tweens.removeFrom(this.padRight.scale);
            this.game.tweens.removeFrom(this.textFieldLeft);
            this.game.tweens.removeFrom(this.textFieldLeft.scale);
            this.game.tweens.removeFrom(this.textFieldRight);
            this.game.tweens.removeFrom(this.textFieldRight.scale);

            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.padLeft.scale.set(-1);
            this.padRight.scale.set(1);
            this.textFieldLeft.scale.set(0.75);
            this.textFieldRight.scale.set(0.75);
            this.textFieldLeft.visible = true;
            this.textFieldRight.visible = true;
        }

    }
}