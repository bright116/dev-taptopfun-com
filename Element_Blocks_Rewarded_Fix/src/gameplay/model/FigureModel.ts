namespace BlockPuzzle {
    export class FigureModel {

        protected cells: CellModel[];

        private figureWidth: number = 0;
        private figureHeight: number = 0;
        private centerX: number = 0;
        private centerY: number = 0;

        public posX: number;
        public posY: number;

        constructor(cells: FigurePreset) {
            this.cells = cells.slice();

            this.normalizeCells();
        }

        protected normalizeCells() {
            if (!this.cells || this.cells.length === 0) {
                return;
            }

            const minX: number = this.cells.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX;
            const minY: number = this.cells.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY;

            this.cells.forEach(cellModel => cellModel.subtract(minX, minY));

            /* calculate figure width & height (measured in cells) */
            this.figureWidth = this.cells.reduce((prev, cell) => prev.posX >= cell.posX ? prev : cell).posX - this.cells.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX + 1;
            this.figureHeight = this.cells.reduce((prev, cell) => prev.posY >= cell.posY ? prev : cell).posY - this.cells.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY + 1;

            this.centerX = this.figureWidth / 2;
            this.centerY = this.figureHeight / 2;
        }

        /**
         * PUBLIC
         */

        public setPosition(posX: number, posY: number): FigureModel {
            this.posX = posX;
            this.posY = posY;
            return this;
        }

        public getCells(): CellModel[] {
            return this.cells;
        }

        public numCells(): number {
            return this.getCells().length;
        }

        public getWidth(): number {
            return this.figureWidth;
        }

        public getHeight(): number {
            return this.figureHeight;
        }

        public getCenterX(): number {
            return this.centerX;
        }

        public getCenterY(): number {
            return this.centerY;
        }

        public clone(): FigureModel {
            return new FigureModel(this.getCells().map(cell => new CellModel(cell.posX, cell.posY)));
        }
    }
}