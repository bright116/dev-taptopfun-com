namespace BlockPuzzle {
    export class GameStateManager extends AbstractManager {

        private started: boolean = false;
        private finished: boolean = false;
        private paused: boolean = false;
        private reviveAvailable: boolean = true;
        private reviveUsed: boolean = false;

        private reviveTimer: number = 0;
        private resultsTimer: number = 0;


        constructor(level: Level) {
            super(level);

            this.reviveAvailable = true;

            this.level.eventManager.onBoardCreated.add(this.dispatchBoardCreated, this);
            this.level.eventManager.onMoveFinished.add(this.dispatchMoveFinished, this);
            this.level.eventManager.onPowerupUsageTimerExceeded.add(this.dispatchPowerupUsageTimerExceeded, this);
            this.level.eventManager.onPowerupApplied.add(this.dispatchPowerupApplied, this);
            this.level.eventManager.onReviveApplied.add(this.reviveApplied, this);
            this.level.eventManager.onReviveFailed.add(this.reviveFailed, this);
        }


        update() {
            super.update();

            if (this.reviveTimer > 0) {
                this.reviveTimer--;
                if (this.reviveTimer <= 0) {
                    this.reviveTimer = 0;
                    WindowManager.instance.showRevive();
                }
            }

            if (this.resultsTimer > 0) {
                this.resultsTimer--;
                if (this.resultsTimer <= 0) {
                    this.resultsTimer = 0;

                    Analytics.instance.finishLevel(ScoreManager.instance.getCurrentScores(), StarsManager.instance.getLastRoundStars(), this.reviveUsed ? 1 : 0, this.level.uiManager.powerupContainer.usedPowerups);
                    WindowManager.instance.showResults();
                }
            }
        }

        /**
         * PUBLIC
         */

        public isGameActive(): boolean {
            return this.started && !this.paused && !this.finished;
        }

        public isStarted(): boolean {
            return this.started;
        }

        public isPaused(): boolean {
            return this.paused;
        }

        public isFinished(): boolean {
            return this.finished;
        }

        /**
         * PRIVATE
         */

        private dispatchBoardCreated() {
            this.started = true;
        }

        private dispatchMoveFinished() {
            if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
                if (PowerupManager.instance.hasBoughtPowerups()) {
                    this.level.uiManager.powerupContainer.startCountdown();
                } else {
                    this.finishGame();
                }
            }
        }

        private dispatchPowerupUsageTimerExceeded() {
            if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
                this.finishGame();
            }
        }

        private dispatchPowerupApplied() {
            if (!this.finished) {
                if(!this.level.figureManager.isNextMovePossible()) {
                    if (PowerupManager.instance.hasBoughtPowerups()) {
                        this.level.uiManager.powerupContainer.startCountdown();
                    } else {
                        this.finishGame();
                    }
                }
            }
        }

        private finishGame() {
            this.finished = true;
            this.reviveAvailable = this.reviveAvailable && APIUtils.instance.hasRewardedVideo();
            if (this.reviveAvailable) {
                this.reviveAvailable = false;
                this.reviveTimer = Settings.REVIVE_WINDOW_TIMER;
                this.resultsTimer = 0;
                this.level.boardManager.getBoard().deactivate(200);
            } else {
                this.level.uiManager.levelFinished();
                this.reviveTimer = 0;
                this.resultsTimer = Settings.RESULTS_WINDOW_TIMER_WITHOUT_REVIVE;
                this.level.boardManager.getBoard().disposeBlocks(250, true);
            }
        }

        private reviveApplied() {
            Analytics.instance.updateLevelData({revives: 1});
            this.reviveUsed = true;
            this.finished = false;
            this.reviveTimer = 0;
            this.resultsTimer = 0;
            this.level.figureManager.regenerateFigures();
            this.level.boardManager.getBoard().activate();
        }

        private reviveFailed() {
            this.finished = true;
            this.reviveTimer = 0;
            this.resultsTimer = Settings.RESULTS_WINDOW_TIMER;
            this.level.boardManager.getBoard().disposeBlocks(250, false);
            this.level.uiManager.levelFinished();
        }


        /**
         * INHERITED
         */

        public resizeLandscape() {
        }

        public resizeSquared() {
        }

        public resizePortrait() {
        }

        destroy() {
            super.destroy();
        }


    }
}