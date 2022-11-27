namespace BlockPuzzle {
    export class InscriptionsService extends AbstractService {

        constructor(serviceManager: ServiceManager) {
            super(serviceManager);

            this.level.eventManager.onLinesDestroyed.add(this.dispatchLinesDestroyed, this);
        }

        private dispatchLinesDestroyed(destroyedLines: number, cellPositions: CellPosition[]) {
            if(destroyedLines >= 2) {
                let px: number = cellPositions.reduce((accumulator, current) => accumulator += current.x, 0) / cellPositions.length;
                let py: number = cellPositions.reduce((accumulator, current) => accumulator += current.y, 0) / cellPositions.length;

                let targetCellPosition: Phaser.Point = this.level.boardManager.getBoard().getCellAt(Math.floor(px), Math.floor(py)).position;
                this.displayInscription(destroyedLines, targetCellPosition.x, targetCellPosition.y);
            }
        }

        private displayInscription(inscriptionPower: number, x: number, y: number) {
            let inscriptionLevel: InscriptionLevel = InscriptionLevel.AWESOME;
            switch (inscriptionPower) {
                case 2:
                    inscriptionLevel = InscriptionLevel.GOOD;
                    break;
                case 3:
                    inscriptionLevel = InscriptionLevel.GREAT;
                    break;
                case 4:
                    inscriptionLevel = InscriptionLevel.EXCELLENT;
                    break;
                case 5:
                    inscriptionLevel = InscriptionLevel.AWESOME;
                    break;
            }

            let insription: InscriptionEffect = this.level.boardManager.getBoard().effectsContainer.add(new InscriptionEffect(inscriptionLevel, x, y));
        }

        public displayScoresEffect(scores: number, x: number, y: number) {
            new ScoresEffect(this.level, scores * ScoreManager.instance.getMultiplier(), x, Math.max(y, -150), 50);
            ScoreManager.instance.addScores(scores);
        }
    }
}