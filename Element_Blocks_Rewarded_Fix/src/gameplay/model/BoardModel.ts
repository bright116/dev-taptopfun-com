namespace BlockPuzzle {
    export class BoardModel {

        public readonly numRows: number;
        public readonly numCols: number;

        public cleanedCells: number = 0;

        public cells: CellModelState[][];

        constructor(numCols: number, numRows: number) {
            this.numCols = numCols;
            this.numRows = numRows;
        }

        public parseFromBoard(board: Board): BoardModel {
            this.cells = [];
            for (let i: number = 0; i < this.numCols; i++) {
                this.cells[i] = [];
                for (let j: number = 0; j < this.numRows; j++) {
                    this.cells[i][j] = CellModelState.CELL_EMPTY;
                }
            }
            for (let cell of board.getCells()) {
                this.cells[cell.posX][cell.posY] = cell.isEmpty() ? CellModelState.CELL_EMPTY : CellModelState.CELL_BUSY;
            }
            return this;
        }

        public getCopy(): BoardModel {
            return new BoardModel(this.numCols, this.numRows).copyFrom(this);
        }

        public copyFrom(another: BoardModel): BoardModel {
            this.cleanedCells = another.cleanedCells;
            this.cells = another.cells.map(col => col.slice());
            return this;
        }

        public getCellStateAt(x: number, y: number): CellModelState {
            return (x >= 0 && x < this.numCols && y >= 0 && y < this.numRows) ? this.cells[x][y] : null;
        }

        public setCellStateAt(state: CellModelState, x: number, y: number) {
            if (x >= 0 && x < this.numCols && y >= 0 && y < this.numRows) {
                this.cells[x][y] = state
            }
        }

        public placeFigure(preset: FigurePreset, position: FigurePosition) {
            if (this.couldBePlaced(preset, position)) {
                preset.forEach(cellModel => this.setCellStateAt(CellModelState.CELL_BUSY, position.x + cellModel.x, position.y + cellModel.y));
                this.clearFilledRowsAndColumns();
            }
        }

        public couldBePlaced(figure: FigurePreset, position: FigurePosition): boolean {
            return figure.map(cellModel => this.getCellStateAt(position.x + cellModel.x, position.y + cellModel.y)).every(cellStatus => cellStatus == CellModelState.CELL_EMPTY);
        }

        public print() {
            console.log(this.cells.map((col, colIdx) =>
                col.map((item, rowIdx) => this.cells[rowIdx][colIdx])
            ));
        }

        public equals(another: BoardModel): boolean {
            if (this.numRows != another.numRows || this.numCols != another.numCols) {
                return false;
            }
            for (let i: number = 0; i < this.numCols; i++) {
                for (let j: number = 0; j < this.numRows; j++) {
                    if (this.cells[i][j] != another.getCellStateAt(i, j)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public findCellsToClear(): CellPosition[] {
            let cellsToClear: CellPosition[] = [];

            //check rows
            for (let i: number = 0; i < this.numRows; i++) {
                if (this.isRowFilled(i)) {
                    cellsToClear = ArrayUtils.uniteArrays(cellsToClear, this.getRowModel(i));
                }
            }
            //check columns
            for (let i: number = 0; i < this.numCols; i++) {
                if (this.isColumnFilled(i)) {
                    cellsToClear = ArrayUtils.uniteArrays(cellsToClear, this.getColumnModel(i));
                }
            }

            return cellsToClear;
        }

        /**
         * PRIVATE
         */

        private clearFilledRowsAndColumns() {
            this.findCellsToClear().forEach(cell => {
                if (this.getCellStateAt(cell.x, cell.y) != CellModelState.CELL_EMPTY) {
                    this.cleanedCells += 1;
                    this.setCellStateAt(CellModelState.CELL_EMPTY, cell.x, cell.y)
                }
            });
        }

        private isRowFilled(rowIndex): boolean {
            return this.getRow(rowIndex).every(cellState => cellState != CellModelState.CELL_EMPTY);
        }

        private isColumnFilled(columnIndex): boolean {
            return this.getColumn(columnIndex).every(cellState => cellState != CellModelState.CELL_EMPTY);
        }

        private getRow(rowIndex: number): CellModelState[] {
            return this.cells.map(column => column[rowIndex]);
        }

        private getColumn(colIndex: number): CellModelState[] {
            return this.cells[colIndex].slice();
        }

        private getRowModel(rowIndex: number): CellPosition[] {
            return this.cells.map((column, colIdx) => {
                return {x: colIdx, y: rowIndex};
            });
        }

        private getColumnModel(colIndex: number): CellPosition[] {
            return this.cells[colIndex].map((value, rowIdx) => {
                return {x: colIndex, y: rowIdx}
            });
        }

    }
}