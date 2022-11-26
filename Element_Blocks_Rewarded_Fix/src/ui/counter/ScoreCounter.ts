namespace BlockPuzzle {
    export class ScoreCounter extends AbstractUICounter {

        protected lastScoreValue: number = 0;
        protected lastHighscoreValue: number = ScoreManager.instance.getMaxScores();

        protected highscoreGroup: Phaser.Group;
        protected highscoreIcon: Phaser.Sprite;
        protected highscoreText: BitmapTextField;

        protected buildChildren() {
            this.pad = this.add(this.game.make.sprite(12, 0, Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);

            this.icon = this.add(this.game.make.sprite(5, 0, Settings.GAME_ATLAS, 'uiIconCup0000'));
            this.icon.anchor.set(0.5);
            this.icon.visible = false;

            this.textField = this.add(new BitmapTextField('0',  Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(100, 0);

            this.highscoreGroup = this.add(this.game.make.group());
            this.highscoreGroup.position.set(106, 37);

            this.lastHighscoreValue = ScoreManager.instance.getMaxScores();

            this.highscoreIcon = this.highscoreGroup.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'topScoreCrown0000'));
            this.highscoreIcon.anchor.set(1, 0.5);

            this.highscoreText = this.highscoreGroup.add(new BitmapTextField('' + this.lastHighscoreValue,  Settings.GAME_ATLAS, 'Gold', 0.42, 0, 0.5, 1));
            this.highscoreText.position.set(0, 1);

            ScoreManager.instance.onScoreChanges.add(this.dispatchScoreChanged, this);
        }

        protected dispatchScoreChanged(scores: number) {
            if(this.lastScoreValue != scores) {
                const duration: number = Phaser.Math.clamp(50 * Math.pow(Math.abs(scores - this.lastScoreValue), 0.5), 250, 1000);
                this.textField.tweenText(this.lastScoreValue, scores, duration, 0);
                this.lastScoreValue = scores;
                this.tweenIcon(duration);

                const currentHighscores: number = Math.max(ScoreManager.instance.getMaxScores(), scores);
                if(this.lastHighscoreValue < currentHighscores) {
                    this.highscoreText.tweenText(this.lastHighscoreValue, currentHighscores, duration, 0);
                    this.lastHighscoreValue = currentHighscores;
                }
            }
        }

        update() {
            if(this.highscoreGroup.visible) {
                let textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
                this.highscoreIcon.x = -textFieldWidth / 2 - 2;
                this.highscoreText.x = -textFieldWidth / 2;
            }
        }

        destroy() {
            ScoreManager.instance.onScoreChanges.remove(this.dispatchScoreChanged, this);
            super.destroy();
        }
    }
}