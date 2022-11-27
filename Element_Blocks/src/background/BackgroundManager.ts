namespace BlockPuzzle {
    export class BackgroundManager extends Phaser.Group {
        private static _instance: BackgroundManager = null;
        public static get instance(): BackgroundManager {
            return BackgroundManager._instance ? BackgroundManager._instance : BackgroundManager._instance = new BackgroundManager();
        }

        protected container: Phaser.Group;
        protected windowBounds: WindowBounds;
        private containerWidth: number = CustomScaleManager.ORIGINAL_WIDTH;
        private containerHeight: number = CustomScaleManager.ORIGINAL_HEIGHT;

        protected leafs: Phaser.Sprite[] = [];
        protected topLeftContainer: Phaser.Group;
        protected topRightContainer: Phaser.Group;
        protected bottomLeftContainer: Phaser.Group;
        protected bottomRightContainer: Phaser.Group;

        private isInitialized: boolean = false;

        private readonly leafAnchors: Phaser.Point[] = [
            new Phaser.Point(1, 0.85),
            new Phaser.Point(0.9, 1),
            new Phaser.Point(0.93, 1),
            new Phaser.Point(0.05, 1),
            new Phaser.Point(0, 1),
            new Phaser.Point(0.0875, 0.98)
        ];

        constructor() {
            super(App.instance, null);
            App.instance.stage.addChildAt(this, 0);

            this.container = this.add(App.instance.make.group());
            this.topLeftContainer = this.container.add(App.instance.make.group());
            this.topRightContainer = this.container.add(App.instance.make.group());
            this.bottomLeftContainer = this.container.add(App.instance.make.group());
            this.bottomRightContainer = this.container.add(App.instance.make.group());

            this.resize();
        }

        protected buildChildren() {
            this.createLeaf(this.topLeftContainer, 1, -49.7, 3.1, -125.3009796142578, 1, -1);
            this.createLeaf(this.topLeftContainer, 4, -245.05, 42.25, 65.98316955566406);
            this.createLeaf(this.topLeftContainer, 5, -131.4, 19.85, 58.43214416503906);

            this.createLeaf(this.topRightContainer, 5, 138.2, -17.4, 107.98501586914063, 1, -1);
            this.createLeaf(this.topRightContainer, 2, 132, -39.6, -122.82777404785156);
            this.createLeaf(this.topRightContainer, 1, 76.55, -16.95, -49);
            this.createLeaf(this.topRightContainer, 4, 190.55, -50.05, -119.5193603515625);

            this.createLeaf(this.bottomLeftContainer, 5, -30.25, 100.15, -11.46099853515625);
            this.createLeaf(this.bottomLeftContainer, 4, -15.6, 159.1, -8.1023071289063);
            this.createLeaf(this.bottomLeftContainer, 6, -32.05, 113.05, 16.472152709960938);
            this.createLeaf(this.bottomLeftContainer, 1, -34.15, 66.85, 170.1315155029297, 1, -1);

            this.createLeaf(this.bottomRightContainer, 4, 100, 132.85, -32.889694213867188);
            this.createLeaf(this.bottomRightContainer, 3, 118.8, 137.6, -17.000503540039063);
            this.createLeaf(this.bottomRightContainer, 2, 123.6, 84.4, -46.802825927734375);
            this.createLeaf(this.bottomRightContainer, 1, 60.6, 61.8, 38.27931213378906);
        }


        private createLeaf(parentContainer: Phaser.Group, leafID: number, x: number, y: number, angle: number, scaleX: number = 1, scaleY: number = 1) {
            let leaf = parentContainer.add(App.instance.make.sprite(x, y, Settings.PRELOADER_ATLAS, 'leaf' + leafID +'0000'));
            leaf.anchor.set(this.leafAnchors[leafID - 1].x, this.leafAnchors[leafID - 1].y);
            leaf.scale.set(scaleX, scaleY);

            const angleDispersion: number = App.instance.rnd.realInRange(1, 3) * App.instance.rnd.sign();
            const duration: number = App.instance.rnd.integerInRange(2800, 5000);
            leaf.angle = angle + angleDispersion;
            leaf["shakeTween"] = App.instance.tweens.create(leaf).to({angle: angle - angleDispersion}, duration, Phaser.Easing.Sinusoidal.InOut, true, 0 , -1, true)
            App.instance.tweens.add(leaf["shakeTween"]);

            this.leafs.push(leaf);
        }

        public handleStateChanged() {
            if(this.isInitialized) {
                this.leafs.forEach(leaf => {
                    leaf["shakeTween"].pendingDelete = false;
                })
            }
        }

        public init() {

            this.buildChildren();
            this.isInitialized = true;
            this.resize();
        }


        resize() {
            if(this.isInitialized) {
                this.container.scale.set(CustomScaleManager.SCALE_X, CustomScaleManager.SCALE_Y);
                this.container.position.set(CustomScaleManager.WIDTH / 2 - this.containerWidth * CustomScaleManager.SCALE_X / 2, CustomScaleManager.HEIGHT / 2 - this.containerHeight *  CustomScaleManager.SCALE_Y / 2);
                this.windowBounds = this.windowBounds || new WindowBounds();
                this.windowBounds.set(-(CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2, (CustomScaleManager.WIDTH / CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (CustomScaleManager.HEIGHT / CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);

                this.topLeftContainer.position.copyFrom(this.windowBounds.getPosition(-0.06,-0.01));
                this.topLeftContainer.alpha = 0.8;

                this.topRightContainer.position.copyFrom(this.windowBounds.getPosition(1.03,-0.025));
                this.topRightContainer.alpha = 0.8;

                this.bottomLeftContainer.position.copyFrom(this.windowBounds.getPosition(-0.05,1));
                this.bottomLeftContainer.alpha = 0.9;

                this.bottomRightContainer.position.copyFrom(this.windowBounds.getPosition(1.04,1));
                this.bottomRightContainer.alpha = 0.9;
            }
        }
    }
}