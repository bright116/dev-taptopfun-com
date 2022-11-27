///<reference path="../../Types.ts"/>
namespace BlockPuzzle {

    export class FigureService extends AbstractService {

        private prevColor: BlockColor = null;

        protected readonly figurePresets: FigurePreset[] = [
            this.normalizeCells([
                new CellModel(1, 1)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(1, 0)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(1, 0),
                new CellModel(2, 0)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1),
                new CellModel(0, 2)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(1, 0),
                new CellModel(0, 1)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1),
                new CellModel(1, 1),
                new CellModel(2, 1)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1),
                new CellModel(0, 2),
                new CellModel(0, 3)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1),
                new CellModel(1, 0),
                new CellModel(1, 1)
            ]),
            this.normalizeCells([
                new CellModel(1, 0),
                new CellModel(0, 1),
                new CellModel(1, 1),
                new CellModel(2, 1)
            ]),
            this.normalizeCells([
                new CellModel(1, 0),
                new CellModel(2, 0),
                new CellModel(0, 1),
                new CellModel(1, 1)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(1, 0),
                new CellModel(2, 0),
                new CellModel(3, 0),
                new CellModel(4, 0)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(1, 0),
                new CellModel(2, 0),
                new CellModel(2, 1),
                new CellModel(2, 2)
            ]),
            this.normalizeCells([
                new CellModel(0, 0),
                new CellModel(0, 1),
                new CellModel(0, 2),
                new CellModel(1, 0),
                new CellModel(1, 1),
                new CellModel(1, 2),
                new CellModel(2, 0),
                new CellModel(2, 1),
                new CellModel(2, 2)
            ])
        ];

        private readonly tutorialPlacements: FigurePlacement[] = [
            {
                preset: this.normalizeCells([
                    new CellModel(0, 0),
                    new CellModel(0, 1),
                    new CellModel(1, 1),
                    new CellModel(2, 1)
                ]), position: {x: 2, y: 3}
            },
            {
                preset: this.normalizeCells([
                    new CellModel(0, 0),
                    new CellModel(0, 1),
                    new CellModel(1, 0),
                    new CellModel(1, 1)
                ]), position: {x: 0, y: 3}
            },
            {
                preset: this.normalizeCells([
                    new CellModel(0, 0),
                    new CellModel(0, 1),
                    new CellModel(0, 2),
                    new CellModel(1, 0),
                    new CellModel(1, 1),
                    new CellModel(1, 2),
                    new CellModel(2, 0),
                    new CellModel(2, 1),
                    new CellModel(2, 2)
                ]), position: {x: 5, y: 2}
            }
        ];


        private iterations: number = 0;

        private normalizeCells(preset: FigurePreset): FigurePreset {
            const minX: number = preset.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX;
            const minY: number = preset.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY;
            preset.forEach(cellModel => cellModel.subtract(minX, minY));
            return preset;
        }

        public getRandomFigureModel(): FigureModel {
            return new FigureModel(this.getCopy(Phaser.ArrayUtils.getRandomItem(this.figurePresets)));
        }

        public getRandomColor(): BlockColor {
            this.prevColor = Phaser.ArrayUtils.getRandomItem(Object.keys(BlockColor).map(key => BlockColor[key]).filter(value => typeof value === "number" && value != this.prevColor));
            return this.prevColor;
        }

        public getRandomPositionForFigure(figure: Figure, boardModel: BoardModel): FigurePosition {
            return Phaser.ArrayUtils.getRandomItem(this.findFigurePositions(figure.getModel().getCells(), boardModel, 1)) || null;
        }

        public hasAvailableSpaceForFigure(figure: Figure, boardModel: BoardModel): boolean {
            let positions: FigurePosition[] = this.findFigurePositions(figure.getModel().getCells(), boardModel, 1);
            return positions.length > 0;
        }


        /*
         * VARIANT 1
         */

        public getNextFiguresSet(boardModel: BoardModel): FigureModel[] {
            if (!Settings.TUTORIAL_COMPLETED) {
                return this.tutorialPlacements.map(placement => new FigureModel(this.getCopy(placement.preset)).setPosition(placement.position.x, placement.position.y));
            }

            this.iterations = 0;
            let results: Array<Array<{ preset: FigurePreset, position: FigurePosition, cleanedCells: number }>> = [];
            this.findFigurePositionsRecursive(boardModel, [], results);
            results.sort((a, b) => b.reduce((sum, elem) => sum + elem.preset.length, 0) - a.reduce((sum, elem) => sum + elem.preset.length, 0));

            if (results.length > 0) {
                return Phaser.ArrayUtils.shuffle(ArrayUtils.getRandomItem(results, Settings.RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR).map(result => new FigureModel(result.preset)));
            } else {
                return Phaser.ArrayUtils.shuffle([this.getRandomFigureModel(), this.getRandomFigureModel(), this.getRandomFigureModel()]);
            }
        }

        private findFigurePositionsRecursive(boardModel: BoardModel, placedFigures: Array<{ preset: FigurePreset, position: FigurePosition, cleanedCells: number }>, resultsArray: Array<Array<{ preset: FigurePreset, position: FigurePosition }>>) {
            let possiblePlaces: Array<{ figurePreset: FigurePreset, figurePositions: FigurePosition[] }> = this.findAppropriateFigurePresetsForBoard(boardModel, true);
            if (possiblePlaces.length > 0) {
                if (resultsArray.length > 0) {
                    //return;
                    /* optimization */
                    possiblePlaces = [Phaser.ArrayUtils.getRandomItem(possiblePlaces)];
                }

                for (let place of possiblePlaces) {
                    for (let figurePosition of place.figurePositions) {
                        this.iterations++;
                        if (placedFigures.length == 2) {
                            resultsArray.push(placedFigures.slice().concat({
                                preset: place.figurePreset,
                                position: figurePosition,
                                cleanedCells: boardModel.cleanedCells
                            }));
                        } else {
                            let boardCopy: BoardModel = boardModel.getCopy();
                            boardCopy.placeFigure(place.figurePreset, figurePosition);
                            this.findFigurePositionsRecursive(boardCopy, placedFigures.slice().concat({
                                preset: place.figurePreset,
                                position: figurePosition,
                                cleanedCells: boardCopy.cleanedCells
                            }), resultsArray);
                        }
                    }
                }
            }
        }


        public findAppropriateFigurePresetsForBoard(boardModel: BoardModel, shuffleResults: boolean): Array<{ figurePreset: FigurePreset, figurePositions: FigurePosition[] }> {
            const possibleCases: Array<{ figurePreset: FigurePreset, figurePositions: FigurePosition[] }> = [];
            for (let preset of Phaser.ArrayUtils.shuffle(this.figurePresets.slice())) {
                possibleCases.push({
                    figurePreset: preset,
                    figurePositions: this.findFigurePositions(preset, boardModel, Settings.GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE)
                });
            }
            return shuffleResults ? Phaser.ArrayUtils.shuffle(possibleCases) : possibleCases;
        }

        /**
         * PRIVATE
         */

        private findFiguresAtPosition(position: FigurePosition, boardModel: BoardModel): FigurePreset[] {
            let presets: FigurePreset[] = [];
            for (let preset of this.figurePresets) {
                if (boardModel.couldBePlaced(preset, position)) {
                    presets.push(preset);
                }
            }
            return presets;
        }

        private findFigurePositions(preset: FigurePreset, boardModel: BoardModel, limitPositionsCount: number): FigurePosition[] {
            let positions: FigurePosition[] = [];
            for (let px of Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])) {
                for (let py of Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])) {
                    if (boardModel.couldBePlaced(preset, {x: px, y: py})) {
                        positions.push({x: px, y: py});
                        if (positions.length >= limitPositionsCount) {
                            return positions;
                        }
                    }
                }
            }
            return positions;
        }

        private getCopy(figurePreset: FigurePreset): FigurePreset {
            return figurePreset.map(cellModel => cellModel.getCopy());
        }

    }
}