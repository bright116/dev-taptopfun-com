namespace BlockPuzzle {
    export abstract class AbstractManager extends Phaser.Group {

        public readonly level: Level;

        constructor(level: Level) {
            super(level.game);
            this.level = level;
        }

        public resize(){
            switch (CustomScaleManager.getLayout()) {
                case LayoutType.PORTRAIT:
                    this.resizePortrait();
                    break;
                case LayoutType.SQUARED:
                    this.resizeSquared();
                    break;
                case LayoutType.LANDSCAPE:
                    this.resizeLandscape();
                    break;
            }
        }

        abstract resizePortrait();
        abstract resizeSquared();
        abstract resizeLandscape();

    }
}