namespace BlockPuzzle {
    export class FigureView extends Phaser.Group {

        public readonly figure: Figure;
        public readonly level: Level;

        public isReady: boolean = false;
        protected blocks: Block[];

        public readonly viewDeltaX: number;
        public readonly viewDeltaY: number;

        constructor(figure: Figure, figureModel: FigureModel) {
            super(figure.game);
            this.figure = figure;
            this.level = figure.level;
            this.viewDeltaX = -this.figure.figureWidth / 2 + 0.5;
            this.viewDeltaY = -this.figure.figureHeight / 2 + 0.5;

            this.createBlocks(figureModel);
            this.tweenScale(Settings.DEFAULT_FIGURE_SCALE, false, 0);
        }

        protected createBlocks(figureModel: FigureModel) {
            this.blocks = figureModel.getCells().map(cellModel => this.add(new Block(cellModel, this.figure.color)));
        }

        protected alignBlocks() {
            this.blocks.forEach(block =>
                block.position.set(
                    (block.posX + this.viewDeltaX) * Settings.CELL_WIDTH,
                    (block.posY + this.viewDeltaY) * Settings.CELL_HEIGHT
                )
            );
        }

        /**
         * PUBLIC
         */

        public getBlocks(): Block[] {
            return this.blocks;
        }

        public getFirstBlock(): Block {
            return this.blocks[0];
        }

        public playAppearingTween(delay: number) {
            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({x: 1, y: 1}, Settings.FIGURE_APPEARING_DURATION, Phaser.Easing.Back.Out, true, delay)
                .onComplete.add(() => this.isReady = true);
        }

        public tweenScale(scale: number, keepOriginalPosition: boolean, duration: number, scaleMultiplier: number = 1) {
            const targetScale: number = scale * scaleMultiplier;
            const noScale: number = 1 * scaleMultiplier;
            this.blocks.forEach(block => {
                this.game.tweens.removeFrom(block, false);
                this.game.tweens.removeFrom(block.scale, false);
                if(duration > 0) {
                    this.game.add.tween(block.scale)
                        .to({x: targetScale, y: targetScale}, duration, Phaser.Easing.Sinusoidal.In, true);
                    this.game.add.tween(block)
                        .to({
                            x: (block.posX + this.viewDeltaX) * Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale),
                            y: (block.posY + this.viewDeltaY) * Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale)
                        }, duration, Phaser.Easing.Sinusoidal.In, true);
                } else {
                    block.scale.set(targetScale);
                    block.position.set(
                        (block.posX + this.viewDeltaX) * Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale),
                        (block.posY + this.viewDeltaY) * Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale)
                    )
                }
            });
        }
    }
}