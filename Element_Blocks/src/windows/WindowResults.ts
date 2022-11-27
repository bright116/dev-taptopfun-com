///<reference path="abstract/CloseableWindow.ts"/>
namespace BlockPuzzle {
    export class WindowResults extends DefaultWindow {

        protected controlsContainer: Phaser.Group;
        protected buttonRestart: Phaser.Button;
        protected scoresPanel: ResultsScoresPanel;
        protected starsPanel: ResultsStarsPanel;
        protected doubleStarsButton: DoubleStarsButton;
        protected recordEffect: NewRecordEffect;

        constructor(windowManager: WindowManager) {
            super(windowManager, WindowHeadingBackplateType.GOLD, 'iconHeadingVictory', Settings.WINDOW_BACKGROUND_ALPHA);
        }

        protected buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.scoresPanel = this.controlsContainer.add(new ResultsScoresPanel(this));
            this.starsPanel = this.controlsContainer.add(new ResultsStarsPanel(this));
            this.doubleStarsButton = this.controlsContainer.add(new DoubleStarsButton(this));
            this.recordEffect = this.controlsContainer.add(new NewRecordEffect(this));
            this.scoresPanel.position.set(-80, -70);
            this.starsPanel.position.set(-80, 70);
            this.doubleStarsButton.position.set(200, 160);
            this.recordEffect.position.set(205, -63);

            this.buttonRestart = this.contentContainer.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1.35, this.restartClicked, this));
        }

        protected showButtons() {
            this.buttonRestart.visible = true;
            this.buttonRestart.alpha = 0;
            this.game.add.tween(this.buttonRestart)
                .to({alpha: 1}, 350, Phaser.Easing.Linear.None, true, 1000);
        }


        protected animateAppearing() {
            const currentScores: number = ScoreManager.instance.getCurrentScores();
            const lastRoundStars: number = StarsManager.instance.getLastRoundStars();

            const scoresTweenDuration: number = currentScores > 0 ? Phaser.Math.clamp(Math.pow(currentScores, 0.9), 450, 1500) : 0;
            const starsTweenDuration: number = lastRoundStars > 0 ? Phaser.Math.clamp(Math.pow(lastRoundStars, 0.85) * 75, 50, 1000) : 0;

            const bestScoreReached: boolean = ScoreManager.instance.updateMaxScores(ScoreManager.instance.getCurrentScores());

            /* API & ANALYTICS */

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_GAMERESULT);

                setTimeout(() => {
                    Promise.all([
                        window["famobi_analytics"].trackEvent(
                            "EVENT_LEVELFAIL",
                            {
                                levelName: '',
                                reason: 'dead'
                            }
                        ),
                        window["famobi_analytics"].trackEvent(
                            "EVENT_TOTALSCORE",
                            {
                                totalScore: currentScores
                            }
                        )
                    ]).then(() => this.showButtons(), () => this.showButtons());
                }, 500);
            } else {
                this.showButtons();
            }


            /* END ANALYTICS */

            this.buttonRestart.visible = false;

            this.scoresPanel.showPanel(200, 800, scoresTweenDuration, bestScoreReached);
            this.starsPanel.showPanel(400, 800 + 250, starsTweenDuration);
            if(APIUtils.instance.hasRewardedVideo()) {
                this.doubleStarsButton.visible = true;
                this.doubleStarsButton.show(1400, Settings.RESULTS_DOUBLE_STARS_REWARD);
            } else {
                this.doubleStarsButton.visible = false;
            }

            if (bestScoreReached) {
                this.recordEffect.show(800 + scoresTweenDuration + starsTweenDuration);
            }
        }

        public addBonusStars(amount: number) {
            StarsManager.instance.addBonusStars(amount);
            this.starsPanel.tweenTexts(StarsManager.instance.getStarsAmount() - amount, StarsManager.instance.getStarsAmount(), StarsManager.instance.getStarsAmount() - amount, StarsManager.instance.getStarsAmount(), '', '', 50, Phaser.Math.clamp(amount * 75, 200, 1200));
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.buttonRestart);
            this.game.tweens.removeFrom(this.buttonRestart.scale);
            this.game.tweens.removeFrom(this.controlsContainer.scale);
            this.recordEffect.visible = false;
        }

        protected resizeContent() {
            super.resizeContent();
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.5);
            this.buttonRestart.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
        }

        public hide() {
            SoundController.instance.stopCountingSound();
            super.hide();
        }

        protected restartClicked() {
            SoundController.instance.stopCountingSound();
            TransitionScreen.instance.changeState('Level');
        };
    }
}