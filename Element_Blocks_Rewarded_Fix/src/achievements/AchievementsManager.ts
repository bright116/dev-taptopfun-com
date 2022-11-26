namespace BlockPuzzle {
    export class AchievementsManager {
        private static _instance: AchievementsManager = null;
        public static get instance(): AchievementsManager {
            return AchievementsManager._instance ? AchievementsManager._instance :
                AchievementsManager._instance = new AchievementsManager();
        }

        private achievementModels: AchievementModel[];
        public onAchievementCompleted: Phaser.Signal;

        constructor() {
            this.onAchievementCompleted = new Phaser.Signal();

            this.achievementModels = [
                {
                    key: AchievementType.TOTAL_SCORES,
                    name: 'Total scores reached',
                    currentValue: 0,
                    requiredValues: [35000, 105000, 225000],
                    rewards: [20, 31, 52],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.TOTAL_STARS,
                    name: 'Total stars picked up',
                    currentValue: 0,
                    requiredValues: [50, 180, 365],
                    rewards: [23, 34, 55],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.TOTAL_LEVEL_UPS,
                    name: 'Level-ups collected',
                    currentValue: 0,
                    requiredValues: [25, 75, 150],
                    rewards: [26, 37, 58],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.TOTAL_GREATS,
                    name: 'Great inscriptions appeared',
                    currentValue: 0,
                    requiredValues: [5, 30, 60],
                    rewards: [8, 19, 40],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.BOMB_EXPLOSIONS,
                    name: 'Bomb explosions',
                    currentValue: 0,
                    requiredValues: [5, 20, 75],
                    rewards: [17, 28, 49],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.LINES_DESTROYED,
                    name: 'Destroyed lines',
                    currentValue: 0,
                    requiredValues: [240, 720, 1600],
                    rewards: [14, 25, 46],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.BLOCKS_PLACED,
                    name: 'Blocks placed at the board',
                    currentValue: 0,
                    requiredValues: [1600, 6400, 15000],
                    rewards: [11, 22, 43],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.FIRE_BLOCKS_DESTROYED,
                    name: 'Red blocks destroyed',
                    currentValue: 0,
                    requiredValues: [350, 1050, 2250],
                    rewards: [17, 28, 49],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: AchievementType.BEST_SCORE_REACHED,
                    name: 'Best score reached',
                    currentValue: 0,
                    requiredValues: [6000, 10000, 16000],
                    rewards: [5, 16, 37],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                }
            ];
        }

        public loadAchievementsState(states: AchievementState[]) {
            states.forEach(state => {
                const model: AchievementModel = this.getAchievementModel(state.key);
                if(model) {
                    model.currentValue = state.currentValue;
                    model.achieved = state.achieved.slice();
                    model.rewardClaimed = state.rewardClaimed.slice();
                }
            });
        }

        public getAchievementsStates(): AchievementState[] {
            return this.achievementModels.map(model => {
                return {key: model.key, currentValue: model.currentValue, achieved: model.achieved.slice(), rewardClaimed: model.rewardClaimed.slice()}
            });
        }

        public saveMedalsState() {
            LocalStorageController.instance.save();
        }

        public getAchievementModel(key: AchievementType): AchievementModel {
            return this.achievementModels.find(medal => medal.key == key);
        }

        public addValue(key: AchievementType, value: number, save: boolean = true) {
            const model: AchievementModel = this.getAchievementModel(key);
            if (model) {
                const prevLevel: number = AchievementsManager.getAchievementLevel(model);
                model.currentValue += value;
                const currentLevel: number = AchievementsManager.getAchievementLevel(model);
                if (currentLevel > prevLevel) {
                    this.onAchievementCompleted.dispatch(model);
                    SoundController.instance.playAchievementClaimedSound();
                }
                if (save) {
                    this.saveMedalsState();
                }
            }
        }

        public setValue(key: AchievementType, value: number, save: boolean = true) {
            const model: AchievementModel = this.getAchievementModel(key);
            if (model && value > model.currentValue) {
                const prevLevel: number = AchievementsManager.getAchievementLevel(model);
                model.currentValue = value;
                const currentLevel: number = AchievementsManager.getAchievementLevel(model);
                if (currentLevel > prevLevel) {
                    this.onAchievementCompleted.dispatch(model);
                    SoundController.instance.playAchievementClaimedSound();
                }
                if (save) {
                    this.saveMedalsState();
                }
            }
        }

        public hasAvailableRewards(): boolean {
            let rewardAvailable: boolean = false;
            this.achievementModels.forEach(model => {
                if(model.currentValue >= model.requiredValues[0] && !model.rewardClaimed[0]) {
                    rewardAvailable = true;
                } else if(model.currentValue >= model.requiredValues[1] && !model.rewardClaimed[1]) {
                    rewardAvailable = true;
                } else if(model.currentValue >= model.requiredValues[2] && !model.rewardClaimed[2]) {
                    rewardAvailable = true;
                }
            });
            return rewardAvailable;
        }


        /**
         * STATIC
         */

        public static getAchievementLevel(model: AchievementModel): number {
            return model.currentValue >= model.requiredValues[2] ? 3 : model.currentValue >= model.requiredValues[1] ? 2 : model.currentValue >= model.requiredValues[0] ? 1 : 0;
        }

    }
}