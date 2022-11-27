namespace BlockPuzzle {
    export class Board extends Phaser.Group {

        public readonly boardManager: BoardManager;
        public readonly level: Level;

        public cellsContainer: Phaser.Group;
        public fieldCoverSprite: Phaser.Image;
        public blocksContainer: Phaser.Group;
        public explosionsContainer: Phaser.Group;
        public effectsContainer: Phaser.Group;
        public readonly numRows: number;
        public readonly numCols: number;
        protected cells: Cell[];
        private active: boolean = true;

        protected targetCells: Cell[];

        constructor(boardManager: BoardManager, rows: number, cols: number) {
            super(boardManager.game);
            this.boardManager = boardManager;
            this.level = boardManager.level;
            this.numRows = rows;
            this.numCols = cols;

            this.buildCells();
            this.alignCells();
            this.animateAppearing();
        }

        protected buildCells() {
            this.cells = [];
            this.cellsContainer = this.add(this.game.make.group());
            this.fieldCoverSprite = this.add(this.game.make.image(0, 0, 'field-cover'));
            this.fieldCoverSprite.anchor.set(0.5);
            this.blocksContainer = this.add(this.game.make.group());
            this.explosionsContainer = this.add(this.game.make.group());
            this.effectsContainer = this.add(this.game.make.group());

            for (let i: number = 0; i < this.numRows * this.numCols; i++) {
                let row: number = Math.floor(i / this.numCols);
                let column: number = i % this.numCols;
                this.cells.push(this.cellsContainer.add(new Cell(this, column, row)));
            }
        }

        protected alignCells() {
            this.cells.forEach(cell => cell.position.set(
                cell.posX - this.numCols / 2 + 0.5,
                cell.posY - this.numRows / 2 + 0.5
            ).multiply(Settings.CELL_WIDTH, Settings.CELL_HEIGHT));
        }

        protected animateAppearing() {
            let cell: Cell = null;
            for (let i: number = 0; i < this.numCols; i++) {
                for (let j: number = 0; j < this.numRows; j++) {
                    cell = this.getCellAt(i, j);
                    cell.scale.set(0);
                    this.game.add.tween(cell.scale)
                        .to({x: 1, y: 1}, 120, Phaser.Easing.Quadratic.Out, true, (i + j) * 20 + 100);
                }
            }
            this.game.time.events.add((this.numCols + this.numRows) * 20 + 100, () => this.level.eventManager.onBoardCreated.dispatch());
        }

        protected findClosestCell(point: Phaser.Point): Cell {
            let closestCell: Cell = null;
            this.getCells().forEach(cell => {
                if (Math.abs(cell.x - point.x) <= Settings.CELL_WIDTH / 2 && Math.abs(cell.y - point.y) <= Settings.CELL_HEIGHT / 2) {
                    closestCell = cell;
                }
            });
            return closestCell;
        }


        /**
         * PUBLIC
         */


        public isActive(): boolean {
            return this.active;
        }

        public getScale(): number {
            return this.scale.x;
        }

        public getCells(): Cell[] {
            return this.cells;
        }

        public getNotEmptyCells() {
            return this.getCells().filter(cell => !this.isEmpty(cell));
        }

        public getEmptyCells() {
            return this.getCells().filter(cell => this.isEmpty(cell));
        }

        public getCellAt(posX: number, posY: number): Cell {
            return (posX < 0 || posX >= this.numCols || posY < 0 || posY >= this.numRows) ? null : this.cells[posY * this.numRows + posX] || null;
        }

        public isEmpty(cell: Cell): boolean {
            return cell && cell.isEmpty();
        }

        public activate() {
            if (!this.isActive()) {
                this.active = true;
                SoundController.instance.playReviveSound();
                Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.getBlock().activate(index * 7));
            }
        }

        public deactivate(delay: number) {
            if (this.isActive()) {
                this.active = false;
                SoundController.instance.playLoseSound();
                Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.getBlock().deactivate(delay + index * 10));
            }
        }

        public disposeBlocks(delay: number, deactivateBeforeDisposing: boolean) {
            if (deactivateBeforeDisposing) {
                this.active = false;
                SoundController.instance.playLoseSound();
            }
            Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.disposeBlock(delay + index * 8, deactivateBeforeDisposing));
        }

        public dispatchFigureIsBeingDragged(figure: Figure) {
            this.getCells().forEach(cell => cell.resetView(false));

            /* find target cells where figure will be placed */
            this.targetCells = this.getTargetCellsFor(figure);

            if (this.targetCells && figure) {
                /* and highlight them */
                this.targetCells.forEach(cell => cell.showHighlighting(figure.color, false));

                /* highlight potentially filled lines and rows */
                const model: BoardModel = this.getModel();
                this.targetCells.forEach(cell => model.setCellStateAt(CellModelState.CELL_NEW, cell.posX, cell.posY));
                const cellsToClear: CellPosition[] = model.findCellsToClear();
                cellsToClear.forEach(cellPos => this.getCellAt(cellPos.x, cellPos.y).showHighlighting(figure.color, false));
            }
        }

        public dispatchPowerupIsBeingDragged(targetCells: Cell[]) {
            this.getCells().forEach(cell => cell.resetAlphaHighlighting());

            if (targetCells && targetCells.length > 0) {
                /* set alpha to all the cells*/
                this.getCells().forEach(cell => cell.applyAlphaHighlighting(true));

                /* remove alpha filter from target cells */
                targetCells.forEach(cell => cell.applyAlphaHighlighting(false));
            }
        }

        public placeFigure(figure: Figure): boolean {
            if (figure) {
                this.targetCells = this.getTargetCellsFor(figure);
                if (this.targetCells) {
                    this.targetCells.forEach((cell, index) => cell.placeBlock(figure.getView().getBlocks()[index]));
                    this.clearFilledRowsAndColumns(this.targetCells, figure);
                    this.targetCells = null;
                    return true;
                }
            }
            return false;
        }

        public getTargetCellsFor(figure: Figure): Cell[] {
            if (figure) {
                const baseBlock: Block = figure.getView().getFirstBlock();
                const figureLocalPosition: PIXI.Point = this.cellsContainer.toLocal(figure.getView().position, figure);
                const targetLocalPosition: Phaser.Point = new Phaser.Point(figureLocalPosition.x + baseBlock.x, figureLocalPosition.y + baseBlock.y);
                const baseCell: Cell = this.findClosestCell(targetLocalPosition);
                if (baseCell) {
                    let localCells: Cell[] = figure.getView().getBlocks().map(block => this.getCellAt(baseCell.posX + block.posX - baseBlock.posX, baseCell.posY + block.posY - baseBlock.posY));
                    if (localCells.every(cell => this.isEmpty(cell))) {
                        if(!Settings.TUTORIAL_COMPLETED) {
                            if(localCells.every(cell => !!figure.getModel().getCells().find(modelCell => cell.posX == (modelCell.posX + figure.getModel().posX) && cell.posY == (modelCell.posY + figure.getModel().posY)))) {
                                return localCells;
                            } else {
                                return null;
                            }
                        } else {
                            return localCells;
                        }
                    }
                }
            }
            return null;
        }

        public getCellUnderPoint(localPoint: PIXI.Point) {
            return this.level.boardManager.getBoard().getCells().find(cell => Math.abs(cell.x - localPoint.x) < Settings.CELL_WIDTH / 2 && Math.abs(cell.y - localPoint.y) < Settings.CELL_HEIGHT / 2) || null;
        }

        public getNumStarsOnTheBoard(): number {
            return this.getNotEmptyCells().reduce((sum, cell) => sum + (cell.getBlock().hasStar() ? 1 : 0), 0);
        }

        public clearFilledRowsAndColumns(targetCells: Cell[], figure: Figure): number {
            let cellsToClear: Cell[] = [];
            let numLines: number = 0;

            //check rows
            for (let i: number = 0; i < this.numRows; i++) {
                if (this.isRowFilled(i)) {
                    numLines++;
                    cellsToClear = ArrayUtils.uniteArrays(cellsToClear, this.getRow(i));
                }
            }
            //check columns
            for (let i: number = 0; i < this.numCols; i++) {
                if (this.isColumnFilled(i)) {
                    numLines++;
                    cellsToClear = ArrayUtils.uniteArrays(cellsToClear, this.getColumn(i));
                }
            }

            if (cellsToClear.length > 0) {
                this.level.dataManager.dispatchLinesDestroyed(numLines, cellsToClear.map(cell => {
                    return {x: cell.posX, y: cell.posY}
                }));

                if (Settings.SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS) {
                    cellsToClear.forEach(cell => cell.getBlock().setColor(figure.color));
                }
                const scores: number = numLines * (numLines + 1) / 2 * Settings.BASIC_LINE_DESTROYING_REWARD + figure.getModel().numCells();
                const explosionStartingPosition: CellPosition = this.findExplosionStartingPosition(cellsToClear, targetCells, Settings.PICK_RANDOM_EXPLOSION_STARTING_POINT);
                const scoresEffectPosition: Phaser.Point = this.level.boardManager.getBoard().getCellAt(explosionStartingPosition.x, explosionStartingPosition.y).position;
                this.level.serviceManager.inscriptionsService.displayScoresEffect(scores, scoresEffectPosition.x, scoresEffectPosition.y);

                cellsToClear.forEach(cell => cell.destroyBlock(Settings.BLOCK_DESTROY_ANIMATION_DELAY * Math.max(Math.abs(cell.posX - explosionStartingPosition.x), Math.abs(cell.posY - explosionStartingPosition.y))));
                SoundController.instance.playNextLineDestroyingSound(numLines);
                AchievementsManager.instance.addValue(AchievementType.LINES_DESTROYED, numLines);
                APIUtils.instance.trackStatsChange('lines_removed', numLines);
            } else {
                const scoresEffectPosition: PIXI.Point = this.level.boardManager.getBoard().cellsContainer.toLocal(figure.getView().parent.toGlobal(figure.getView().position), this.game.world);
                this.level.serviceManager.inscriptionsService.displayScoresEffect(figure.getModel().numCells(), scoresEffectPosition.x, scoresEffectPosition.y - 60);
            }
            return numLines;
        }

        private isRowFilled(rowIndex): boolean {
            return this.getRow(rowIndex).every(cell => cell.isEmpty() == false);
        }

        private isColumnFilled(columnIndex): boolean {
            return this.getColumn(columnIndex).every(cell => cell.isEmpty() == false);
        }

        private getRow(rowIndex: number): Cell[] {
            return this.getCells().filter(cell => cell.posX == rowIndex);
        }

        private getColumn(colIndex: number): Cell[] {
            return this.getCells().filter(cell => cell.posY == colIndex);
        }

        private findExplosionStartingPosition(explodingCells: Cell[], targetCells: Cell[], pickRandom: boolean): CellPosition {
            let targetCellsToExplode: Cell[] = explodingCells.filter(cell => targetCells.indexOf(cell) != -1);
            if (targetCellsToExplode.length == 0) {
                /* if there are no target cells among exploding ones, which is basically impossible, but who knows :\ */
                targetCellsToExplode = explodingCells.slice();
            }
            /* find the epicenter of an explosion */
            if (pickRandom) {
                let {posX, posY} = Phaser.ArrayUtils.getRandomItem(targetCellsToExplode);
                return {x: posX, y: posY};
            } else {
                const minX: number = targetCellsToExplode.reduce((min, cell) => Math.min(min, cell.posX), Number.MAX_SAFE_INTEGER);
                const maxX: number = targetCellsToExplode.reduce((max, cell) => Math.max(max, cell.posX), 0);
                const minY: number = targetCellsToExplode.reduce((min, cell) => Math.min(min, cell.posY), Number.MAX_SAFE_INTEGER);
                const maxY: number = targetCellsToExplode.reduce((max, cell) => Math.max(max, cell.posY), 0);

                return {x: (minX + maxX) / 2, y: (minY + maxY) / 2};
            }
        }

        public getModel(): BoardModel {
            return new BoardModel(this.numCols, this.numRows).parseFromBoard(this);
        }

    }
}