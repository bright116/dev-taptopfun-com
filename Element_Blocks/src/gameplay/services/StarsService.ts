namespace BlockPuzzle {
    export class StarsService extends AbstractService {

        private currentStarGenerationProbability: number = 0;

        constructor(serviceManager: ServiceManager) {
            super(serviceManager);
            this.currentStarGenerationProbability = Settings.BASIC_STAR_GENERATION_PROBABILITY;

            this.level.eventManager.onLinesDestroyed.add(this.dispatchLinesDestroyed, this);
            this.level.eventManager.onMoveFinished.add(this.dispatchMoveFinished, this);
        }


        private dispatchMoveFinished(numMoves: number) {
            if(numMoves < Settings.SKIP_STARS_GENERATION_FOR_FIRST_X_MOVES) {
                return;
            }
            if(Math.random() < this.currentStarGenerationProbability) {
                if(this.level.boardManager.getBoard().getNumStarsOnTheBoard() < Settings.MAX_STARS_ON_BOARD_SIMULTANEOUSLY) {
                    this.currentStarGenerationProbability = Settings.BASIC_STAR_GENERATION_PROBABILITY;
                    this.generateRandomStar(Settings.STAR_GENERATION_DELAY);
                    if(Math.random() < Settings.ADDITIONAL_SECOND_STAR_GENERATION_PROBABILITY) {
                        this.generateRandomStar(Settings.STAR_GENERATION_DELAY * 1.5);
                    }
                }
            } else {
                this.currentStarGenerationProbability = Phaser.Math.clamp(this.currentStarGenerationProbability + Settings.BASIC_STAR_GENERATION_PROBABILITY_STEP, 0, Settings.MAX_STAR_GENERATING_PROBABILITY);
            }
        }

        private dispatchLinesDestroyed(destroyedLines: number) {
            // if(destroyedLines >= 2) {
            //     const additionalMultilineProbability: number = Math.max(0, destroyedLines - 1) * Settings.ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES;
            //     if(Math.random() < additionalMultilineProbability) {
            //         this.currentStarGenerationProbability = Settings.BASIC_STAR_GENERATION_PROBABILITY;
            //         this.generateRandomStar(Settings.STAR_GENERATION_DELAY);
            //     }
            // }
        }

        private generateRandomStar(delay: number) {
            App.instance.time.events.add(delay, () => {
                if(this.level.gameStateManager.isGameActive()) {
                    const availableCells: Cell[] = this.level.boardManager.getBoard().getCells().filter(cell => cell && !cell.isEmpty() && !cell.getBlock().hasStar());
                    if(availableCells.length > 0) {
                        Phaser.ArrayUtils.getRandomItem(availableCells).getBlock().addStar(this.level);
                    }
                }
            });

        }

    }
}