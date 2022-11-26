namespace BlockPuzzle {
    export class PowerupManager {
        private static _instance: PowerupManager = null;
        public static get instance(): PowerupManager {
            return PowerupManager._instance ? PowerupManager._instance : PowerupManager._instance = new PowerupManager();
        }

        private powerupStates: Map<PowerupType, boolean>;
        private powerupPrices: Map<PowerupType, number>;
        private powerupPriceSteps: Map<PowerupType, number>;

        public onPowerupBought: Phaser.Signal;

        constructor() {
            this.onPowerupBought = new Phaser.Signal();

            this.powerupStates = new Map<PowerupType, boolean>();
            this.powerupStates.set(PowerupType.BOMB, false);
            this.powerupStates.set(PowerupType.LIGHTNING,  false);

            this.powerupPrices = new Map<PowerupType, number>();
            this.powerupPrices.set(PowerupType.BOMB, Settings.BOMB_PRICE);
            this.powerupPrices.set(PowerupType.LIGHTNING, Settings.LIGHTNING_PRICE);

            this.powerupPriceSteps = new Map<PowerupType, number>();
            this.powerupPriceSteps.set(PowerupType.BOMB, Settings.BOMB_PRICE_STEP);
            this.powerupPriceSteps.set(PowerupType.LIGHTNING, Settings.LIGHTNING_PRICE_STEP);
        }

        public setInitialState(powerupType: PowerupType, value: boolean) {
            this.powerupStates.set(powerupType, value);
        }

        public isBought(powerupType: PowerupType): boolean {
            return this.powerupStates.get(powerupType) || false;
        }

        public resetPrices() {
            this.powerupPrices.set(PowerupType.BOMB, Settings.BOMB_PRICE);
            this.powerupPrices.set(PowerupType.LIGHTNING, Settings.LIGHTNING_PRICE);
        }

        public buy(powerupType: PowerupType) {
            this.powerupStates.set(powerupType, true);
            StarsManager.instance.setStarsAmount(StarsManager.instance.getStarsAmount() - this.getPrice(powerupType));
            this.onPowerupBought.dispatch(powerupType);
            LocalStorageController.instance.save();
            this.powerupPrices.set(powerupType, this.powerupPrices.get(powerupType) + this.powerupPriceSteps.get(powerupType));
        }

        public usePowerup(powerupType: PowerupType) {
            this.powerupStates.set(powerupType, false);
            LocalStorageController.instance.save();
        }

        public getPrice(powerupType: PowerupType): number {
            return this.powerupPrices.get(powerupType) || Number.MAX_SAFE_INTEGER;
        }

        public hasUnboughtPowerups(): boolean {
            let hasAvailablePowerups: boolean = false;
            this.powerupStates.forEach((state, key) => {
                if (!state ) {
                    hasAvailablePowerups = true;
                }
            });
            return hasAvailablePowerups;
        }

        public hasBoughtPowerups(): boolean {
            let hasBoughtPowerups: boolean = false;
            this.powerupStates.forEach((state, key) => {
                if (state) {
                    hasBoughtPowerups = true;
                }
            });
            return hasBoughtPowerups;
        }
    }
}