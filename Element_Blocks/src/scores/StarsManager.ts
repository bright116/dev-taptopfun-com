namespace BlockPuzzle {
    export class StarsManager {
        private static _instance: StarsManager = null;
        public static get instance(): StarsManager {
            return StarsManager._instance ? StarsManager._instance : StarsManager._instance = new StarsManager();
        }

        private numStars: number = 0;
        private lastRoundStars: number = 0;
        public readonly onStarAdded: Phaser.Signal;
        public readonly onStarsAmountChanged: Phaser.Signal;

        constructor() {
            this.onStarAdded = new Phaser.Signal();
            this.onStarsAmountChanged = new Phaser.Signal();
        }

        public reset() {
            this.lastRoundStars = 0;
        }

        public getLastRoundStars() {
            return this.lastRoundStars;
        }

        public getStarsAmount(): number {
            return this.numStars;
        }

        public setStarsAmount(value: number, save: boolean = true) {
            this.numStars = value;
            this.onStarsAmountChanged.dispatch(this.getStarsAmount());
            if(save) {
                LocalStorageController.instance.save();
            }
        }

        public addBonusStars(amount: number) {
            this.setStarsAmount(this.getStarsAmount() + amount);
            this.lastRoundStars += amount;
            AchievementsManager.instance.addValue(AchievementType.TOTAL_STARS, amount);
            APIUtils.instance.trackStatsChange('stars_picked_up', amount);
            Analytics.instance.updateLevelData({stars: this.getStarsAmount()});

        }

        public pickupStars(amount: number, silent: boolean = false) {
            this.setStarsAmount(this.getStarsAmount() + amount);
            if(!silent) {
                this.lastRoundStars += amount;
            }
            AchievementsManager.instance.addValue(AchievementType.TOTAL_STARS, amount);
            APIUtils.instance.trackStatsChange('stars_picked_up', amount);
            Analytics.instance.updateLevelData({stars: this.getStarsAmount()});
            this.onStarAdded.dispatch(this.getStarsAmount());
            LocalStorageController.instance.save();
        }

        /**
         * LISTENERS
         */

        public removeListeners() {

        }


    }
}