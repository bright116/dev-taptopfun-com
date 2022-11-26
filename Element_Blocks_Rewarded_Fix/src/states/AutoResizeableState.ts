namespace BlockPuzzle {
    export abstract class AutoResizeableState extends Phaser.State {

        public isInitialized: boolean;
        public containerWidth: number;
        public containerHeight: number;
        public originalBounds: WindowBounds;
        public windowBounds: WindowBounds;
        public container: Phaser.Group;


        init(containerWidth: number = CustomScaleManager.ORIGINAL_WIDTH, containerHeight: number = CustomScaleManager.ORIGINAL_HEIGHT) {
            super.init();
            this.isInitialized = false;
            this.containerWidth = containerWidth;
            this.containerHeight = containerHeight;
            this.container = this.add.existing(this.game.make.group(null));

            this.originalBounds = new WindowBounds();
            this.originalBounds.set(0, CustomScaleManager.ORIGINAL_WIDTH, 0, CustomScaleManager.ORIGINAL_HEIGHT);

            this.resize();
        }

        create() {
            this.isInitialized = true;
        }


        public addChild(child: any): any {
            return this.container.add(child);
        }

        public getInputPosition(): Phaser.Point {
            return new Phaser.Point((this.game.input.activePointer.x - this.container.x) / CustomScaleManager.SCALE_X, (this.game.input.activePointer.y - this.container.y) / CustomScaleManager.SCALE_Y);
        }

        public translateInputPosition(pointer: Phaser.Pointer): Phaser.Point {
            return new Phaser.Point((pointer.x - this.container.x) / CustomScaleManager.SCALE_X, (pointer.y - this.container.y) / CustomScaleManager.SCALE_Y);

        }

        resize(width: number = 0, height: number = 0) {
            this.container.scale.set(CustomScaleManager.SCALE_X, CustomScaleManager.SCALE_Y);
            this.container.position.set(CustomScaleManager.WIDTH / 2 - this.containerWidth * CustomScaleManager.SCALE_X / 2, CustomScaleManager.HEIGHT / 2 - this.containerHeight *  CustomScaleManager.SCALE_Y / 2);

            this.windowBounds = this.windowBounds || new WindowBounds();
            this.windowBounds.set(-(CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2, (CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
        }

        shutdown() {
            this.container.destroy();
            this.container = null;
        }

    }

    export class WindowBounds {
        public left: number;
        public right: number;
        public top: number;
        public down: number;
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;

        constructor() {
            this.set(0,0,0,0);
        }

        public set(left: number, right: number, top: number, down: number) {
            this.left = left;
            this.right = right;
            this.top = top;
            this.down = down;
            this.x = left;
            this.y = top;
            this.width = right - left;
            this.height = down - top;
            this.centerX = (right + left) / 2;
            this.centerY = (down + top) / 2;
        }


        public getPosition(rx: number, ry: number, dx: number = 0, dy: number = 0): Phaser.Point {
            return new Phaser.Point(this.left + rx * this.width + dx, this.top + ry * this.height + dy);
        }

        public getBounds(left: number, right: number, top: number, down: number): BoundsRectangle {
            return {minX: this.left + left * this.width, maxX: this.left + right * this.width, minY: this.top + top * this.height, maxY: this.top + down * this.height};
        }
    }
}
