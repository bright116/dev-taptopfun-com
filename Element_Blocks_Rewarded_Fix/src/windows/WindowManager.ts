namespace BlockPuzzle {
    export class WindowManager {

        private static _instance: WindowManager = null;
        public static get instance(): WindowManager {
            return WindowManager._instance ? WindowManager._instance : WindowManager._instance = new WindowManager();
        }
        public containerWidth: number = CustomScaleManager.ORIGINAL_WIDTH;
        public containerHeight: number = CustomScaleManager.ORIGINAL_HEIGHT;
        private container: Phaser.Group;
        public windowBounds: WindowBounds;
        public isInitialized: boolean = false;

        public settings: WindowSettings;
        public results: WindowResults;
        public revive: WindowRevive;
        public shop: WindowShop;
        public achievements: WindowAchievements;


        public init() {
            this.container = App.instance.stage.add(App.instance.make.group());

            this.settings = this.container.add(new WindowSettings(this));
            this.results = this.container.add(new WindowResults(this));
            this.revive = this.container.add(new WindowRevive(this));
            this.shop = this.container.add(new WindowShop(this));
            this.achievements = this.container.add(new WindowAchievements(this));

            this.isInitialized = true;
            this.resize();
        }

        public resize() {
            if (this.isInitialized) {
                this.container.scale.set(CustomScaleManager.SCALE_X, CustomScaleManager.SCALE_Y);
                this.container.position.set(CustomScaleManager.WIDTH / 2 - this.containerWidth * CustomScaleManager.SCALE_X / 2, CustomScaleManager.HEIGHT / 2 - this.containerHeight *  CustomScaleManager.SCALE_Y / 2);
                this.windowBounds = this.windowBounds || new WindowBounds();
                this.windowBounds.set(-(CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2, (CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);

                this.settings.resize();
                this.results.resize();
                this.revive.resize();
                this.shop.resize();
                this.achievements.resize();
            }
        }

        public hasOpenedWindows(): boolean {
            return this.settings.visible || this.shop.visible || this.achievements.visible || this.revive.visible || this.results.visible;
        }

        public showSettings() {
            this.settings.show();
        }

        public showResults() {
            this.results.show();
        }

        public showRevive() {
            this.revive.show();
        }

        public showShop(powerupType: PowerupType) {
            this.shop.setPowerupType(powerupType);
            this.shop.show();
        }

        public showAchievements() {
            this.achievements.show();
        }

        public hideAll() {
            this.settings.hide();
            this.results.hide();
            this.revive.hide();
            this.shop.hide();
            this.achievements.hide();
        }
    }
}