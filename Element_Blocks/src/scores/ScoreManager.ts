namespace BlockPuzzle {
    export class ScoreManager {
        private static _instance: ScoreManager = null;
        public static get instance(): ScoreManager {
            return ScoreManager._instance ? ScoreManager._instance : ScoreManager._instance = new ScoreManager();
        }

        private currentMultiplier: number = 1;
        private maxScores: number = 0;
        private prevMaxScores: number = 0;
        private currentScore: number = 0;
        private lastRoundScores: number = 0;
        private roundNumber: number = 0;

        public readonly onScoreChanges: Phaser.Signal;
        public readonly onMultiplierChanges: Phaser.Signal;

        constructor() {
            this.onScoreChanges = new Phaser.Signal();
            this.onMultiplierChanges = new Phaser.Signal();
        }

        public reset() {
            this.currentScore = 0;
            this.currentMultiplier = 1;
        }

        public getCurrentScores(): number {
            return ~~this.currentScore;
        }

        public addScores(value: number) {
            this.lastRoundScores = value * this.getMultiplier();
            this.currentScore += this.lastRoundScores;
            if(value != 0) {
                this.currentMultiplier = this.calculateMultiplier();
                this.onScoreChanges.dispatch(this.getCurrentScores());
                this.onMultiplierChanges.dispatch(this.getMultiplier(), this.getMultiplierProgress());
                AchievementsManager.instance.addValue(AchievementType.TOTAL_SCORES, this.lastRoundScores);
                AchievementsManager.instance.setValue(AchievementType.BEST_SCORE_REACHED, this.getCurrentScores());
                Analytics.instance.updateLevelData({score: this.getCurrentScores()});
                APIUtils.instance.trackStats('best_scores',  this.getCurrentScores(), true);
            }
        }

        public startRound() {
            this.roundNumber++;
        }

        public getRoundNumber(): number {
            return this.roundNumber;
        }

        public isFirstRound(): boolean {
            return this.roundNumber <= 1;
        }

        /**
         * MULTIPLIER
         */

        private calculateMultiplier() {
            const scores: number = this.getCurrentScores();
            for(let i: number = 0; i < Settings.MULTIPLIER_MILESTONES.length; i++) {
                if(Settings.MULTIPLIER_MILESTONES[i] > scores) {
                    return i + 1;
                }
            }
            return Settings.MULTIPLIER_MILESTONES.length;
        }

        public getMultiplier(): number {
            return this.currentMultiplier;
        }

        public getMultiplierProgress(): number {
            if(this.currentMultiplier >= 2) {
                return (this.getCurrentScores() -  Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]) / (Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1] -  Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]);
            } else {
                return this.getCurrentScores() / Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1];
            }
        }

        /**
         * MAX SCORES
         */

        public getMaxScores(): number {
            return this.maxScores;
        }

        public getPrevMaxScores(): number {
            return this.prevMaxScores;
        }

        public setMaxScores(value: number) {
            this.maxScores = Math.max(this.maxScores, value);
            this.prevMaxScores = this.maxScores;
        }

        public updateMaxScores(currentScores: number): boolean {
            if(currentScores > this.maxScores) {
                this.prevMaxScores = this.maxScores;
                this.maxScores = currentScores;
                LocalStorageController.instance.save();
                return true;
            }
            return false;
        }

        /**
         * LISTENERS
         */

        public removeListeners() {
            this.onScoreChanges.removeAll();
            this.onMultiplierChanges.removeAll();
        }


    }
}