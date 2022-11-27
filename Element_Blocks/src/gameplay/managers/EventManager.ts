namespace BlockPuzzle {
    export class EventManager extends AbstractManager {

        public onBoardCreated: Phaser.Signal;
        public onRoundFinished: Phaser.Signal;
        public onMoveFinished: Phaser.Signal;
        public onReviveApplied: Phaser.Signal;
        public onReviveFailed: Phaser.Signal;
        public onLinesDestroyed: Phaser.Signal;
        public onPowerupUsageTimerExceeded: Phaser.Signal;
        public onPowerupApplied: Phaser.Signal;

        constructor(level: Level) {
            super(level);

            this.buildSignals();
        }

        protected buildSignals() {
            this.onBoardCreated = new Phaser.Signal();
            this.onRoundFinished = new Phaser.Signal();
            this.onMoveFinished = new Phaser.Signal();
            this.onReviveApplied = new Phaser.Signal();
            this.onReviveFailed = new Phaser.Signal();
            this.onLinesDestroyed = new Phaser.Signal();
            this.onPowerupUsageTimerExceeded = new Phaser.Signal();
            this.onPowerupApplied = new Phaser.Signal();
        }


        /**
         * INHERITED
         */

        public resizeLandscape() {

        }

        public resizeSquared() {

        }

        public resizePortrait() {

        }

        destroy() {
            this.onBoardCreated.dispose();
            this.onRoundFinished.dispose();
            this.onMoveFinished.dispose();
            this.onReviveApplied.dispose();
            this.onReviveFailed.dispose();
            this.onLinesDestroyed.dispose();
            this.onPowerupUsageTimerExceeded.dispose();
            this.onPowerupApplied.dispose();

            super.destroy();
        }


    }
}