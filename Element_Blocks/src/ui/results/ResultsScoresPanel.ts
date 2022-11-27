namespace BlockPuzzle {
    export class ResultsScoresPanel extends Phaser.Group {

        protected readonly results: WindowResults;

        protected pad: Phaser.Sprite;
        protected textField: BitmapTextField;
        protected icon: Phaser.Sprite;

        protected highscoreGroup: Phaser.Group;
        protected highscoreIcon: Phaser.Sprite;
        protected highscoreText: BitmapTextField;

        protected lastHighscoreValue: number;

        constructor(results: WindowResults) {
            super(results.game, null);
            this.results = results;

            this.scale.set(1.25);
            this.buildContent();
        }

        protected buildContent() {
            this.pad = this.add(this.game.make.sprite(12, 0, Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);

            this.textField = this.add(new BitmapTextField('0',  Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(102, 0);

            this.highscoreGroup = this.add(this.game.make.group());
            this.highscoreGroup.position.set(106, 37);

            this.highscoreIcon = this.highscoreGroup.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'topScoreCrown0000'));
            this.highscoreIcon.anchor.set(1, 0.5);

            this.highscoreText = this.highscoreGroup.add(new BitmapTextField('0',  Settings.GAME_ATLAS, 'Gold', 0.42, 0, 0.5, 1));
            this.highscoreText.position.set(0, 1);

            this.icon = this.add(this.game.make.sprite(5, 10, Settings.GAME_ATLAS, 'resultsIconCup0000'));
            this.icon.anchor.set(0.5);
        }

        protected show(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string = '', rightValuePrefix: string = '', delay: number, textTweenDelay: number, tweenTextDuration: number) {
            this.resetTweens();

            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);

            this.animateAppearing(delay);
        }

        public tweenTexts(leftValueInitial: number, leftValueTarget: number, rightValueInitial: number, rightValueTarget: number, leftValuePrefix: string, rightValuePrefix: string, textTweenDelay: number, tweenTextDuration: number) {
            this.highscoreText.changeText('' + rightValueInitial);

            this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
            this.highscoreText.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
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

            this.highscoreGroup.visible = false;
            this.highscoreGroup.alpha = 0;
            this.game.add.tween(this.highscoreGroup)
                .to({alpha: 1}, 300, Phaser.Easing.Sinusoidal.Out, true, delay + 400)
                .onStart.add(() => this.highscoreGroup.visible = true);

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
            this.game.tweens.removeFrom(this.highscoreGroup);

            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.pad.scale.set(1.3);
            this.textField.scale.set(1);
            this.textField.visible = true;
            this.highscoreGroup.alpha = 1;
            this.highscoreGroup.visible = true;
        }


        public showPanel(delay: number, textTweenDelay: number, duration: number, bestScoresReached: boolean) {
            this.show(0, ScoreManager.instance.getCurrentScores(), bestScoresReached ? ScoreManager.instance.getPrevMaxScores() : ScoreManager.instance.getMaxScores(), ScoreManager.instance.getMaxScores(), '', '', delay, delay + textTweenDelay, duration);
        }

        update() {
            if(this.highscoreGroup.visible) {
                let textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
                this.highscoreIcon.x = -textFieldWidth / 2 - 2;
                this.highscoreText.x = -textFieldWidth / 2;
            }
        }

    }
}