namespace BlockPuzzle {
    export class BoardManager extends AbstractManager {

        protected board: Board;

        constructor(level: Level) {
            super(level);

            this.board = this.add(new Board(this, Settings.BOARD_ROWS, Settings.BOARD_COLS));
        }

        public getBoard(): Board {
            return this.board;
        }

        resizeLandscape() {
            this.fillAvailableSpace();
        }

        resizeSquared() {
            this.fillAvailableSpace();
        }

        resizePortrait() {
            this.fillAvailableSpace();
        }

        private getOriginalBounds(includePadding: boolean): Phaser.Rectangle {
            const boardWidth: number = (this.getBoard().numCols + (includePadding ? 0.5 : 0)) * Settings.CELL_WIDTH;
            const boardHeight: number = (this.getBoard().numRows + (includePadding ? 0.5 : 0)) * Settings.CELL_HEIGHT;
            return new Phaser.Rectangle(-boardWidth / 2, -boardHeight / 2, boardWidth, boardHeight);
        }

        public getBoardBounds(targetCoordinateSpace: Phaser.Group, includePadding: boolean = true): Phaser.Rectangle {
            const originalBounds: Phaser.Rectangle = this.getOriginalBounds(includePadding);
            const topLeft: PIXI.Point = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x, originalBounds.y), this.level.boardManager.getBoard().cellsContainer);
            const bottomRight:  PIXI.Point = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x + originalBounds.width, originalBounds.y + originalBounds.height), this.level.boardManager.getBoard().cellsContainer);
            return new Phaser.Rectangle(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
        }

        protected fillAvailableSpace() {
            const boardBoundsRect: Phaser.Rectangle = this.getOriginalBounds(true);
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableBoardBounds();
            /* update position and scale */
            this.board.position.set(availableBounds.x, availableBounds.y);
            this.board.scale.set(Math.min(availableBounds.width / boardBoundsRect.width, availableBounds.height / boardBoundsRect.height));
        }
    }
}