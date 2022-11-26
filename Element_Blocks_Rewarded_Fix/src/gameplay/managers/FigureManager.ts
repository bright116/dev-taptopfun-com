namespace BlockPuzzle {
    export class FigureManager extends AbstractManager {

        protected readonly figureService: FigureService;
        protected figuresContainer: Phaser.Group;
        protected figures: Figure[] = [];
        protected activeFigure: Figure = null;
        protected activeFigurePointerDelta: Phaser.Point = null;

        private currentMistakeStep: number = 0;
        private currentMistakeProbability: number = 0;
        private mistakeImmunityCounter: number = 0;

        private initialFigureScale: number = 1;
        private readonly initialFigurePositions: Phaser.Point[] = [
            new Phaser.Point(0, 0),
            new Phaser.Point(0, 0),
            new Phaser.Point(0, 0)
        ];

        constructor(level: Level) {
            super(level);
            this.figureService = this.level.serviceManager.figureService;
            this.currentMistakeStep = Settings.MISTAKE_PROBABILITY_BASIC_STEP;
            this.mistakeImmunityCounter = this.game.rnd.integerInRange(Settings.MISTAKE_IMMUNITY_MIN_MOVES, Settings.MISTAKE_IMMUNITY_MAX_MOVES);

            this.buildContent();
            this.resize();
        }

        protected buildContent() {
            this.figuresContainer = this.add(this.game.make.group());
            this.createFigures(false);
        }

        private getPointerLocalPosition(): Phaser.Point {
            const {x, y} = this.figuresContainer.toLocal(this.game.input.activePointer.position, this.game.world);
            return new Phaser.Point(x, y);
        }

        private getFigureInitialPosition(figure: Figure): Phaser.Point {
            return this.initialFigurePositions[figure.barIndex];
        }

        private getFiguresLeft(): number {
            return this.figures.filter(figure => figure != null).length;
        }

        private createFigures(enableMistakes: boolean) {
            const generatedFigureModels: FigureModel[] = this.figureService.getNextFiguresSet(this.level.boardManager.getBoard().getModel());
            if(enableMistakes && Settings.TUTORIAL_COMPLETED) {
                if(this.level.dataManager.numMoves > this.mistakeImmunityCounter) {
                    // console.log("Mistake probability: " + Phaser.Math.roundTo(this.currentMistakeProbability * 100, -1) + "%,  step ", Phaser.Math.roundTo(this.currentMistakeStep * 100, -3) + ' speed ' +  Phaser.Math.roundTo(this.level.dataManager.getMistakeProbabilityStepSpeed() * 100, -3));
                    this.currentMistakeStep = Phaser.Math.clamp(this.currentMistakeStep + this.level.dataManager.getMistakeProbabilityStepSpeed(), 0, this.level.dataManager.getMaxMistakeProbabilityStep());
                    this.currentMistakeProbability += this.currentMistakeStep;
                    if(Math.random() < this.currentMistakeProbability) {
                        console.log("Random figure generated with probability of " + Phaser.Math.roundTo(this.currentMistakeProbability * 100, -1) + '%');
                        generatedFigureModels[Math.floor(Math.random() * generatedFigureModels.length)] = this.figureService.getRandomFigureModel();
                        this.currentMistakeProbability = 0;
                        this.currentMistakeStep *= (Settings.DIFFICULTY_FACTOR - 1) * 0.05;
                    }

                }
            }
            generatedFigureModels.forEach((model, index) =>
                this.addFigure(new Figure(this, model, this.figureService.getRandomColor(), index), (index + 1) * Settings.FIGURE_APPEARING_DELAY + 100));
            this.alignFigures();
        }

        /**
         * INHERITED
         */

        update() {
            super.update();

            if (this.activeFigure) {
                this.activeFigure.position.copyFrom(this.getPointerLocalPosition().subtract(this.activeFigurePointerDelta.x, this.activeFigurePointerDelta.y));
                this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(this.activeFigure);
            } else {
                this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(null);
            }
        }

        resizeLandscape() {
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth: number = Math.min(availableBounds.width / (6), availableBounds.height / (3 * 6));
            const figureScale: number = targetCellWidth / Settings.CELL_WIDTH;

            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set(0, (index - 1) * targetCellWidth * 6));
            this.initialFigureScale = figureScale;

            this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
            this.alignFigures();
        }


        resizeSquared() {
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth: number = Math.min(availableBounds.width / (6), availableBounds.height / (3 * 6));
            const figureScale: number = targetCellWidth / Settings.CELL_WIDTH;

            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set(0, (index - 1) * targetCellWidth * 6));
            this.initialFigureScale = figureScale;

            this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
            this.alignFigures();
        }

        resizePortrait() {
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth: number = Math.min(availableBounds.width / (3 * 6), availableBounds.height / (6));
            const figureScale: number = targetCellWidth / Settings.CELL_WIDTH;

            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set((index - 1) * targetCellWidth * 6, 0));
            this.initialFigureScale = figureScale;

            this.figuresContainer.position.set(availableBounds.x, availableBounds.y - availableBounds.height * 0.05);
            this.alignFigures();
        }

        private getOriginalBounds(): Phaser.Rectangle {
            const bounds: PIXI.Rectangle = this.figuresContainer.getBounds(this.figuresContainer.parent);
            this.add(this.game.make.graphics(bounds.x, bounds.y).beginFill(0xFFFFFF, 0.5).drawRect(0, 0, bounds.width, bounds.height).endFill());
            return new Phaser.Rectangle(bounds.x, bounds.y, bounds.width, bounds.height);
        }

        private alignFigures() {
            this.figures.forEach(figure => {
                if (figure) {
                    this.game.tweens.removeFrom(figure, false);
                    figure.scale.set(this.initialFigureScale / Settings.DEFAULT_FIGURE_SCALE);
                    figure.position.copyFrom(this.getFigureInitialPosition(figure));
                }
            });
        }

        /**
         * PUBLIC
         */

        public getFigures(): Figure[] {
            return this.figures;
        }

        public addFigure(figure: Figure, delay: number) {
            this.figures[figure.barIndex] = this.figuresContainer.add(figure);
            figure.position.copyFrom(this.getFigureInitialPosition(figure));
            figure.playAppearingTween(delay);
        }

        public removeFigure(figure: Figure) {
            if (this.figures.indexOf(figure) != -1) {
                this.figures[this.figures.indexOf(figure)] = null;
                figure.destroy();
            }

            if (this.getFiguresLeft() == 0) {
                this.level.eventManager.onRoundFinished.dispatch();
                this.createFigures(true);
            }
        }

        public regenerateFigures() {
            for(let i: number = 0; i < this.figures.length; i++) {
                if(this.figures[i]) {
                    this.figures[i].dispose();
                }
                this.figures[i] = null;
            }
            this.createFigures(false);
        }

        public isNextMovePossible(): boolean {
            const figures: Figure[] = this.figures.filter(figure => !!figure).sort((a,b) => a.getModel().numCells() - b.getModel().numCells());
            let applicableFiguresAmount: number = 0;

            this.figures.forEach(figure =>  {
                 if(figure) {
                     const isApplicable: boolean = this.figureService.hasAvailableSpaceForFigure(figure, this.level.boardManager.getBoard().getModel());
                     figure.setApplicable(isApplicable);
                     if(isApplicable) {
                         applicableFiguresAmount += 1;
                     }
                }
            });
            return applicableFiguresAmount > 0;
        }

        public updateFiguresApplicability() {
            this.figures.forEach(figure => figure && figure.setApplicable(this.figureService.hasAvailableSpaceForFigure(figure, this.level.boardManager.getBoard().getModel())));
        }

        public handleFigureInputDown(figure: Figure) {
            if (this.level.gameStateManager.isGameActive() && !this.activeFigure && figure.figureState == FigureState.INACTIVE) {
                if(!Settings.TUTORIAL_COMPLETED && this.level.tutorialManager.getActiveFigure() != figure) {
                    return;
                }
                this.activeFigure = figure;
                this.activeFigure.pickUp();
                this.activeFigurePointerDelta = this.getPointerLocalPosition().subtract(this.activeFigure.x, this.activeFigure.y);
            }
        }

        public handleFigureInputUp(figure: Figure) {
            if (this.level.gameStateManager.isGameActive() && this.activeFigure && this.activeFigure == figure) {
                if (this.level.boardManager.getBoard().placeFigure(figure)) {
                    /* figure placed succesfully */
                    //
                    // const scoresEffectPosition: PIXI.Point = this.level.boardManager.getBoard().cellsContainer.toLocal(figure.getView().parent.toGlobal(figure.getView().position), this.game.world);
                    // this.level.serviceManager.inscriptionsService.displayScoresEffect(figure.getModel().numCells(), scoresEffectPosition.x, scoresEffectPosition.y - 60);

                    AchievementsManager.instance.addValue(AchievementType.BLOCKS_PLACED, figure.getModel().numCells());
                    this.activeFigure.putDown();
                    this.removeFigure(this.activeFigure);
                    this.level.dataManager.moveFinished();
                } else {
                    const returnDuration: number = Settings.FIGURE_PICK_UP_TWEEN_DURATION;
                    this.game.add.tween(this.activeFigure)
                        .to({
                            x: this.getFigureInitialPosition(figure).x,
                            y: this.getFigureInitialPosition(figure).y
                        }, returnDuration, Phaser.Easing.Linear.None, true);
                    this.activeFigure.release();
                }
            }
            this.activeFigure = null;
            this.activeFigurePointerDelta = null;
        }
    }
}