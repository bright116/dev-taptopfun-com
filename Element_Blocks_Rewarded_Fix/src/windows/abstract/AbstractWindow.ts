namespace BlockPuzzle {
    export abstract class AbstractWindow extends Phaser.Group {

        public windowManager: WindowManager;

        protected background: Phaser.Sprite;
        protected backgroundAlpha: number = Settings.WINDOW_BACKGROUND_ALPHA;

        constructor(windowManager, backgroundAlpha: number = Settings.WINDOW_BACKGROUND_ALPHA) {
            super(App.instance, null);
            this.windowManager = windowManager;
            this.backgroundAlpha = backgroundAlpha;
            this.visible = false;

            this.buildBackground();
        }

        protected buildBackground() {
            this.background = this.add(this.game.make.sprite(-50, -50, Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.anchor.set(0.5);
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.background.alpha = this.backgroundAlpha;
            this.background.inputEnabled = true;

            this.inputEnableChildren = true;
        }

        public resize() {
            this.position.set(0, 0);

            this.background.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.centerY);
            this.background.width = this.windowManager.windowBounds.width + 100;
            this.background.height = this.windowManager.windowBounds.height + 100;

            this.resizeContent();
        }

        protected abstract resizeContent();


        public show() {
            this.visible = true;
            this.resize();
        }

        public hide() {
            this.visible = false;
        }

        protected lockUpButtons(...args: Phaser.Button[]) {
            for (let i: number = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = false;
            }
        }

        protected unlockButtons(...args: Phaser.Button[]) {
            for (let i: number = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = true;
            }
        }

        destroy() {
            super.destroy();
            this.background = null;
        }
    }
}