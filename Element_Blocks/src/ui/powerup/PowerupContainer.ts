namespace BlockPuzzle {
    export class PowerupContainer extends Phaser.Group {

        public readonly uiManager: UIManager;
        public readonly level: Level;

        public usedPowerups: any[] = [];

        protected bombPowerup: AbstractPowerup;
        protected lightningPowerup: AbstractPowerup;

        constructor(uiManager: UIManager) {
            super(uiManager.game, null);
            this.uiManager = uiManager;
            this.level = uiManager.level;

            this.buildContent();
        }

        protected buildContent() {
            this.lightningPowerup = this.add(new LightningPowerup(this));
            this.lightningPowerup.position.set(0, 45);

            this.bombPowerup = this.add(new BombPowerup(this));
            this.bombPowerup.position.set(0, -45);

            this.updatePowerups();

            this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this);
        }

        public updatePowerups() {
            this.game.time.events.add(20, () => this.resize());
        }

        public hidePowerups() {
            this.game.add.tween(this.bombPowerup)
                .to({y: '+50', alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, 0)
                .onComplete.add(() => this.bombPowerup.visible = false);

            this.game.add.tween(this.lightningPowerup)
                .to({y: '+50', alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, 50)
                .onComplete.add(() => this.lightningPowerup.visible = false);
        }

        public startCountdown() {
            this.bombPowerup.startCountdown();
            this.lightningPowerup.startCountdown();
        }

        public pauseCountdowns() {
            this.bombPowerup.pauseCountdown();
            this.lightningPowerup.pauseCountdown();
        }

        public resumeCountdowns() {
            this.bombPowerup.resumeCountdown();
            this.lightningPowerup.resumeCountdown();
        }

        public hasDraggingPowerups(): boolean {
            return this.lightningPowerup.dragging || this.bombPowerup.dragging;
        }

        public resize() {
            if (CustomScaleManager.isPortrait()) {
                this.resizePortrait();
            } else if (CustomScaleManager.isSquared()) {
                this.resizeSquared();
            } else if (CustomScaleManager.isLandscape()) {
                this.resizeLandscape();
            }
        }

        private resizeLandscape() {
            const powerupContainerBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
            this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
            this.scale.set(Math.max(Math.min(powerupContainerBounds.width * 0.6 / 200, 1.4), 1));
            this.bombPowerup.position.set(-48, 0);
            this.lightningPowerup.position.set(48, 0);
        }

        private resizePortrait() {
            const powerupContainerBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();

            this.scale.set(Math.max(1, Math.min(powerupContainerBounds.height / 90, 1.35)));
            this.position.set(powerupContainerBounds.x, Math.min(powerupContainerBounds.y, powerupContainerBounds.y + powerupContainerBounds.height / 2 - 48 * this.scale.y));

            this.bombPowerup.position.set(-47, 0);
            this.lightningPowerup.position.set(47, 0);
        }

        private resizeSquared() {
            const powerupContainerBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
            this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
            this.scale.set(1 / (Math.pow(CustomScaleManager.UPSCALE_FACTOR, 0.5)));
            this.bombPowerup.position.set(-48, 0);
            this.lightningPowerup.position.set(48, 0);
        }

        private handlePowerupApplied(powerupType: PowerupType) {
            Analytics.instance.updateLevelData({powerups: [powerupType]});
            this.usedPowerups.push(powerupType);
        }
    }
}