///<reference path="../Settings.ts"/>
namespace BlockPuzzle {
    import Sound = Phaser.Sound;

    export class LocalStorageController {
        private static _instance: LocalStorageController;
        public static get instance(): LocalStorageController {
            return LocalStorageController._instance ? LocalStorageController._instance
                : LocalStorageController._instance = new LocalStorageController();
        }

        private isLocalStorageSupported: boolean = false;
        public data: Object = null;

        private currentLocalStorage: any = null;

        private static readonly STORAGE_NAME = Settings.LOCAL_STORAGE_KEY;

        constructor() {
            this.currentLocalStorage = Settings.ENABLE_API ? window["famobi"].localStorage : window.localStorage;

            this.data = {
                "maxScore": 0,
                "numStars": 0,
                "bombBought": false,
                "lightningBought": false,
                "achievements": null,
                "tutorialCompleted": false,
                "sfxVolume": 0.5,
                "musicVolume": 0.5
            };
        }

        public getMaxScores(): number {
            return this.data["maxScore"];
        }

        public getNumStars(): number {
            return this.data["numStars"];
        }

        public getSFXVolume(): number {
            return this.data["sfxVolume"];
        }

        public getMusicVolume(): number {
            return this.data["musicVolume"];
        }

        public isBombBought(): boolean {
            return this.data["bombBought"];
        }

        public isLightningBought(): boolean {
            return this.data["lightningBought"];
        }

        public isTutorialCompleted(): boolean {
            return this.data["tutorialCompleted"];
        }

        public getAchievementsStates(): AchievementState[] {
            return this.data["achievements"] || [];
        }

        public save(): void {
            this.data["maxScore"] = ScoreManager.instance.getMaxScores();
            this.data["numStars"] = StarsManager.instance.getStarsAmount();
            this.data["achievements"] = AchievementsManager.instance.getAchievementsStates();
            this.data["bombBought"] = PowerupManager.instance.isBought(PowerupType.BOMB);
            this.data["lightningBought"] = PowerupManager.instance.isBought(PowerupType.LIGHTNING);
            this.data["tutorialCompleted"] = Settings.TUTORIAL_COMPLETED;
            this.data["sfxVolume"] = SoundController.instance.getSFXVolume();
            this.data["musicVolume"] = SoundController.instance.getMusicVolume();

            if (this.isLocalStorageSupported) {
                this.currentLocalStorage.setItem(LocalStorageController.STORAGE_NAME, JSON.stringify(this.data));
            }
        }

        private checkLocalStorageSupported(): void {
            try {
                this.isLocalStorageSupported = "localStorage" in window && window["localStorage"] !== null;
            }
            catch (e) {
                this.isLocalStorageSupported = false;
            }
        }

        public loadSave() {
            this.checkLocalStorageSupported();

            if (this.isLocalStorageSupported) {
                if (this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME)) {
                    this.data = JSON.parse(this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME));
                } else {
                    this.currentLocalStorage.setItem(LocalStorageController.STORAGE_NAME, JSON.stringify(this.data));
                }
            }
            this.finalizeLoading();
        }

        private finalizeLoading() {
            SoundController.instance.setSFXVolume(this.getSFXVolume());
            SoundController.instance.setMusicVolume(this.getMusicVolume());
            Settings.TUTORIAL_COMPLETED = LocalStorageController.instance.isTutorialCompleted();
            ScoreManager.instance.setMaxScores(LocalStorageController.instance.getMaxScores());
            StarsManager.instance.setStarsAmount(LocalStorageController.instance.getNumStars(), false);
            AchievementsManager.instance.loadAchievementsState(LocalStorageController.instance.getAchievementsStates());
            PowerupManager.instance.setInitialState(PowerupType.BOMB, LocalStorageController.instance.isBombBought());
            PowerupManager.instance.setInitialState(PowerupType.LIGHTNING, LocalStorageController.instance.isLightningBought());
        }
    }
}