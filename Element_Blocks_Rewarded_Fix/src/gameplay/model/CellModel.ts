namespace BlockPuzzle {
    export class CellModel extends Phaser.Point {

        constructor(posX: number, posY: number) {
            super(posX, posY);
        }


        public getCopy(): CellModel {
            return new CellModel(this.posX, this.posY);
        }

        /* getters & setters */
        get posX(): number {
            return this.x;
        }

        set posX(value: number) {
            this.x = value;
        }

        get posY(): number {
            return this.y;
        }

        set posY(value: number) {
            this.y = value;
        }
    }
}