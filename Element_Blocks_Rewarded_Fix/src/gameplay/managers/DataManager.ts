namespace BlockPuzzle {
    export class DataManager extends AbstractManager {

        public numMoves: number = 0;

        constructor(level: Level) {
            super(level);

            this.initData();
        }

        protected initData() {
            this.numMoves = 0;
        }


        /**
         * PUBLIC
         */

        public moveFinished() {
            this.numMoves++;
            this.level.eventManager.onMoveFinished.dispatch(this.numMoves);
        }

        public dispatchLinesDestroyed(destroyedLines: number, cellPositions: CellPosition[]) {
            this.level.eventManager.onLinesDestroyed.dispatch(destroyedLines, cellPositions);
        }

        public getMaxMistakeProbability(): number {
            return Phaser.Math.clamp(Settings.MISTAKE_MAX_PROBABILITY + Settings.MISTAKE_MAX_PROBABILITY * (Settings.DIFFICULTY_FACTOR - 1) * 0.2 + this.numMoves * 0.001, 0, 0.4);
        }

        public getMaxMistakeProbabilityStep(): number {
            return this.getMaxMistakeProbability() / 5;
        }

        public getMistakeProbabilityStepSpeed(): number {
            return Settings.MISTAKE_PROBABILITY_STEP_SPEED + Settings.MISTAKE_PROBABILITY_STEP_SPEED * (Settings.DIFFICULTY_FACTOR - 1) * 0.15;
        }


        /**
         * PRIVATE
         */


        /**
         * INHERITED
         */

        public resizeLandscape() {

        }

        public resizeSquared() {

        }

        public resizePortrait() {

        }
    }
}