namespace BlockPuzzle {
    export class TutorialManager extends AbstractManager {

        private tutorialHand: Phaser.Sprite;
        private isManualTutorialActive: boolean = Settings.TUTORIAL_COMPLETED;
        private isInitialized: boolean = false;

        private activeFigure: Figure = null;

        constructor(level: Level) {
            super(level);

            this.buildContent();

            this.level.eventManager.onBoardCreated.add(this.handleBoardCreated, this);
            this.level.eventManager.onMoveFinished.add(this.handleFigurePlaced, this);
            this.level.eventManager.onRoundFinished.add(this.handleRoundFinished, this);
            this.visible = false;
        }

        public start() {
            this.isInitialized = true;
        }

        resizeLandscape() {
            this.startHandAnimation();
        }

        resizeSquared() {
            this.startHandAnimation();
        }

        resizePortrait() {
            this.startHandAnimation();
        }

        update() {
            super.update();
        }


        public getActiveFigure(): Figure {
            return this.activeFigure;
        }

        public restartTutorial() {
            this.isManualTutorialActive = true;
            Settings.TUTORIAL_COMPLETED = false;
            this.startHandAnimation();
        }

        /**
         * PRIVATE
         */

        private buildContent() {
            this.tutorialHand = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'tutorialHand0000'));
            this.tutorialHand.anchor.set(0.4, 0);
            this.visible = false;
        }

        private startHandAnimation() {
            if (this.isInitialized && !Settings.TUTORIAL_COMPLETED) {

                const board: Board = this.level.boardManager.getBoard();
                this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));

                this.visible = true;
                const currentFigure: Figure = this.level.figureManager.getFigures().slice().filter(f => !!f).sort((a, b) => a.getModel().numCells() - b.getModel().numCells())[0];
                if (currentFigure) {
                    this.activeFigure = currentFigure;
                    const figureLocalPosition: PIXI.Point = this.toLocal(currentFigure.getView().position, currentFigure.getView().parent);

                    let targetCell: Cell = this.level.boardManager.getBoard().getCellAt(currentFigure.getModel().posX, currentFigure.getModel().posY);
                    if(!targetCell) {
                        const figurePosition: FigurePosition = this.level.serviceManager.figureService.getRandomPositionForFigure(currentFigure, board.getModel());
                        if(figurePosition) {
                            currentFigure.getModel().posX = figurePosition.x;
                            currentFigure.getModel().posY = figurePosition.y;
                            targetCell =  this.level.boardManager.getBoard().getCellAt(figurePosition.x, figurePosition.y);
                        } else {
                            this.finishTutorial();
                            return;
                        }
                    }
                    const targetCellLocalPosition: PIXI.Point = this.toLocal(targetCell.position, targetCell.parent);

                    this.game.tweens.removeFrom(this.tutorialHand);
                    this.tutorialHand.position.set(figureLocalPosition.x, figureLocalPosition.y);
                    this.tutorialHand.alpha = 0;

                    /* tweens */
                    const preparingTween: Phaser.Tween = this.game.add.tween(this.tutorialHand)
                        .to({alpha: 1, x: figureLocalPosition.x, y: figureLocalPosition.y}, 500, Phaser.Easing.Sinusoidal.Out, false);

                    const movingTween: Phaser.Tween = this.game.add.tween(this.tutorialHand)
                        .to({
                            x: targetCellLocalPosition.x + (currentFigure.getModel().getCenterX() - 0.5) * Settings.CELL_WIDTH * board.getScale(),
                            y: targetCellLocalPosition.y  + (currentFigure.getModel().getCenterY() - 0.5) * Settings.CELL_HEIGHT * board.getScale()
                        }, 1200, Phaser.Easing.Sinusoidal.InOut, false, 0, 0, false);

                    const finishingTween: Phaser.Tween = this.game.add.tween(this.tutorialHand)
                        .to({alpha: 0}, 750, Phaser.Easing.Exponential.In, false);

                    const returningTween: Phaser.Tween = this.game.add.tween(this.tutorialHand)
                        .to({x: figureLocalPosition.x, y: figureLocalPosition.y}, 10, Phaser.Easing.Linear.None, false);

                    preparingTween.onComplete.add(() => this.tutorialHand.frameName = 'tutorialHand0001');
                    finishingTween.onStart.add(() => this.tutorialHand.frameName = 'tutorialHand0000');

                    preparingTween.chain(movingTween);
                    movingTween.chain(finishingTween);
                    finishingTween.chain(returningTween);
                    returningTween.chain(preparingTween);

                    preparingTween.start();

                    currentFigure.getModel().getCells().forEach(cell => board.getCellAt(targetCell.posX + cell.x, targetCell.posY + cell.y).showHighlighting(currentFigure.color, true));
                } else {
                    this.activeFigure = null;
                }
            }
        }

        private handleFigurePlaced() {
            if (this.isInitialized && Settings.TUTORIAL_COMPLETED) {
                return;
            }
            /* remove all tutorial highlightings */
            this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));

            if (this.isManualTutorialActive) {
                return this.finishTutorial();
            }

            /* show next figure */
            this.startHandAnimation();
        }

        private handleRoundFinished() {
            this.finishTutorial();
        }


        private finishTutorial() {
            if(!Settings.TUTORIAL_COMPLETED) {
                this.visible = false;
                this.activeFigure = null;
                Settings.TUTORIAL_COMPLETED = true;
                LocalStorageController.instance.save();
                if(Settings.ENABLE_API) {
                    window["famobi_analytics"].trackEvent(
                        "EVENT_TUTORIALCOMPLETED"
                    )
                }
                this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));
            }
        }


        /**
         * EVENT LISTENERS
         */

        private handleBoardCreated() {
            this.isInitialized = true;
            this.startHandAnimation();
        }
    }
}