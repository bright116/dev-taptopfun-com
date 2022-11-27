///<reference path="../enum/LayoutType.ts"/>
namespace BlockPuzzle {
    export class CustomScaleManager {
        private static PORTRAIT_RATIO: number = 720 / 960;
        private static LANDSCAPE_RATIO: number = 1366 / 960;

        public static ORIGINAL_WIDTH: number = 640;
        public static ORIGINAL_HEIGHT: number = 960;
        public static WIDTH: number = 640;
        public static HEIGHT: number = 960;
        public static LAYOUT: LayoutType = LayoutType.PORTRAIT;
        public static SCALE_X: number = 1;
        public static SCALE_Y: number = 1;
        public static UPSCALE_FACTOR: number = 1;

        public static ORIGINAL_RATIO: number = CustomScaleManager.ORIGINAL_WIDTH / CustomScaleManager.ORIGINAL_HEIGHT;

        public static update(width: number, height: number) {
            this.WIDTH = width;
            this.HEIGHT = height;
            const screenRatio: number = this.getScreenRatio();

            if(screenRatio <= this.PORTRAIT_RATIO) {
                /* fully portrait */
                this.LAYOUT = LayoutType.PORTRAIT;
                this.SCALE_X = this.SCALE_Y = width / this.ORIGINAL_WIDTH;
                this.UPSCALE_FACTOR = 1;
            } else if(screenRatio >= this.LANDSCAPE_RATIO) {
                /* fully landscape */
                this.LAYOUT = LayoutType.LANDSCAPE;
                this.UPSCALE_FACTOR = App.instance.device.desktop ? 1 : Math.pow(screenRatio / this.ORIGINAL_RATIO, 0.35);
                this.SCALE_X = this.SCALE_Y = height / this.ORIGINAL_HEIGHT * this.UPSCALE_FACTOR;
            } else {
                /* quite squared */
                this.LAYOUT = LayoutType.SQUARED;
                this.UPSCALE_FACTOR = App.instance.device.desktop ? 1 : Math.pow(screenRatio / this.ORIGINAL_RATIO, 0.55);
                this.SCALE_X = this.SCALE_Y = height / this.ORIGINAL_HEIGHT * this.UPSCALE_FACTOR;
            }

            if (App.instance.scale.scaleMode != Phaser.ScaleManager.RESIZE) {
                App.instance.state.getCurrentState().resize(App.instance.width, App.instance.height);
            }

            BackgroundManager.instance.resize();
            WindowManager.instance.resize();
            TransitionScreen.instance.resize();
        }

        public static getLayout(): LayoutType {
            return this.LAYOUT;
        }

        public static isLandscape(): boolean {
            return this.getLayout() === LayoutType.LANDSCAPE;
        }

        public static isPortrait(): boolean {
            return this.getLayout() === LayoutType.PORTRAIT;
        }

        public static isSquared(): boolean {
            return this.getLayout() === LayoutType.SQUARED;
        }

        public static getScaleMode(): number {
            return Settings.USE_HIGH_RESOLUTION_SCALING ? Phaser.ScaleManager.USER_SCALE : Phaser.ScaleManager.RESIZE;
        }

        public static getPixelRatio(): number {
            return App.instance.device.desktop || !Settings.USE_HIGH_RESOLUTION_SCALING ? 1 : Math.min(App.instance.device.pixelRatio, Settings.PIXEL_RATIO_MAX_THRESHOLD);
        }

        public static getScreenRatio(): number {
            return this.WIDTH / this.HEIGHT;
        }
    }
}