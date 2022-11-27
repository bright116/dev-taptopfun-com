namespace BlockPuzzle {
    export class Boot extends Phaser.State {

        init() {
            this.game.scale.scaleMode = CustomScaleManager.getScaleMode();
            this.game.scale.fullScreenScaleMode = CustomScaleManager.getScaleMode();

            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            if (this.game.device.android) {
                this.game.input.mouse.enabled = !this.game.device.mspointer;
            }

            this.game.scale.setResizeCallback(this.resizeCallback, this);
            this.game.scale.onSizeChange.add(this.sizeChanged, this);

            this.stage.disableVisibilityChange = true;

            Analytics.instance.initUser();

            SoundController.instance.addSuspendedContextRestoreHandler();
        }

        preload() {
            this.game.load.atlasJSONArray(Settings.PRELOADER_ATLAS, 'img/' + Settings.PRELOADER_ATLAS + '.png', 'img/' + Settings.PRELOADER_ATLAS + '.json');
            this.game.load.image('famobi-logo', 'img/famobi-logo.png');
            this.game.load.json('l10n', 'lang/texts.json');
        }

        create() {
            this.input.maxPointers = 1;

            if (this.game.device.desktop) {
                this.game.canvas.oncontextmenu = function (e) {
                    e.preventDefault();
                }
            }
            LocalizationManager.init(this.game.cache.getJSON('l10n'));
            this.game.state.start('Preloader', true, false);
        }

        resizeCallback(scaleManager: Phaser.ScaleManager, parentBounds: Phaser.Rectangle) {
            if (CustomScaleManager.getScaleMode() == Phaser.ScaleManager.USER_SCALE) {
                if (this.game.width != window.innerWidth * CustomScaleManager.getPixelRatio() || this.game.height != window.innerHeight * CustomScaleManager.getPixelRatio()) {
                    scaleManager.setGameSize(window.innerWidth * CustomScaleManager.getPixelRatio(), window.innerHeight * CustomScaleManager.getPixelRatio());
                    scaleManager.setUserScale(1 / CustomScaleManager.getPixelRatio(), 1 / CustomScaleManager.getPixelRatio());
                }
            }
        }

        sizeChanged(scaleManager: Phaser.ScaleManager, w: number, h: number) {
            const windowDimensions: Phaser.Rectangle =
                (this.game.device.android
                    && window["visualViewport"]
                    && window["visualViewport"].width
                    && window["visualViewport"].height)
                    ? new Phaser.Rectangle(0, 0, Math.min(w, window["visualViewport"].width), Math.min(h, window["visualViewport"].height))
                    : new Phaser.Rectangle(0, 0, window.innerWidth, window.innerHeight);

            CustomScaleManager.update(windowDimensions.width * CustomScaleManager.getPixelRatio(), windowDimensions.height * CustomScaleManager.getPixelRatio());
        }


    }
}
