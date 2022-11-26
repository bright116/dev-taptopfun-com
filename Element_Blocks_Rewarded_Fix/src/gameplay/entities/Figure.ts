namespace BlockPuzzle {
    export class Figure extends Phaser.Group {

        public readonly figureManager: FigureManager;
        public readonly board: Board;
        public readonly level: Level;

        protected inputHandler: Phaser.Sprite;
        protected figureView: FigureView;
        protected figureModel: FigureModel;

        public figureState: FigureState;
        public barIndex: number;
        public color: BlockColor;
        public posX: number;
        public posY: number;
        public figureWidth: number = 0;
        public figureHeight: number = 0;
        public applicable: boolean = true;

        constructor(figureManager: FigureManager, figureModel: FigureModel, color: BlockColor, barIndex: number) {
            super(figureManager.game);
            this.figureManager = figureManager;
            this.level = this.figureManager.level;
            this.board = this.level.boardManager.getBoard();

            this.figureModel = figureModel;
            this.figureState = FigureState.INACTIVE;
            this.color = color;
            this.barIndex = barIndex;
            this.figureWidth = figureModel.getWidth();
            this.figureHeight = figureModel.getHeight();

            this.figureView = this.add(new FigureView(this, figureModel));

            /* input handler */
            this.inputHandler = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'blackSquare0000'));
            this.inputHandler.anchor.set(0.5);
            this.inputHandler.inputEnabled = true;
            this.inputHandler.width = 5 * Settings.CELL_WIDTH * Settings.DEFAULT_FIGURE_SCALE;
            this.inputHandler.height = 5 * Settings.CELL_HEIGHT * Settings.DEFAULT_FIGURE_SCALE;
            this.inputHandler.alpha = 0;
            this.inputHandler.events.onInputDown.add(this.handleInputDown, this);
            this.inputHandler.events.onInputUp.add(this.handleInputUp, this);
        }

        /**
         * PUBLIC
         */

        public setPosition(posX: number, posY: number) {
            this.posX = posX;
            this.posY = posY;
        }

        public getView(): FigureView {
            return this.figureView;
        }

        public getModel(): FigureModel {
            return this.figureModel;
        }

        public playAppearingTween(delay: number) {
            this.figureView.playAppearingTween(delay);
        }

        public pickUp() {
            this.figureState = FigureState.DRAGGING;
            if (this.parent) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }
            this.game.add.tween(this.figureView)
                .to(this.level.serviceManager.layoutService.getFigureDraggingDelta(this.barIndex), Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Circular.Out, true);
            this.figureView.tweenScale(Settings.DRAGGING_FIGURE_SCALE, true, Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.25, 1 / this.scale.x * this.board.getScale());
            this.figureView.getBlocks().forEach(block => block.enableGlow(Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.5));
            SoundController.instance.playFigurePickupSound();
        }

        public putDown() {
            this.figureState = FigureState.PLACED;
            this.figureView.getBlocks().forEach(block => block.disableGlow(Settings.FIGURE_PICK_UP_TWEEN_DURATION / 2));
            SoundController.instance.playFigurePlaceSound();
        }

        public release() {
            this.figureState = FigureState.INACTIVE;
            this.game.add.tween(this.figureView)
                .to({x: 0, y: 0}, Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true);
            this.figureView.tweenScale(Settings.DEFAULT_FIGURE_SCALE, false, Settings.FIGURE_PICK_UP_TWEEN_DURATION);
            this.figureView.getBlocks().forEach(block => block.disableGlow(Settings.FIGURE_PICK_UP_TWEEN_DURATION));
            SoundController.instance.playFigureFailSound();
        }

        public dispose() {
            this.game.add.tween(this.figureView)
                .to(this.level.serviceManager.layoutService.getFigureDisposingTweenParams(), Settings.FIGURE_DISPOSING_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true)
                .onComplete.add(() => this.destroy());
        }

        public setApplicable(value: boolean) {
            if(value != this.applicable) {
                this.applicable = value;
                this.game.tweens.removeFrom(this, false);
                this.game.add.tween(this)
                    .to({alpha: value ? 1 : Settings.NOT_APPLICABLE_FIGURE_APLHA}, 350, Phaser.Easing.Linear.None, true, 450);
            }
        }

        /**
         * INPUT HANDLERS
         */

        protected handleInputDown() {
            if (this.figureView.isReady) {
                this.figureManager.handleFigureInputDown(this);
            }
        }

        protected handleInputUp() {
            if (this.figureView.isReady) {
                this.figureManager.handleFigureInputUp(this);
            }
        }

        /**
         * DESTROY
         */

        destroy() {
            this.inputHandler.events.onInputDown.remove(this.handleInputDown, this);
            this.inputHandler.events.onInputUp.remove(this.handleInputUp, this);
            super.destroy();

            this.figureView = null;
            this.inputHandler = null;
        }
    }
}