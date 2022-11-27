namespace BlockPuzzle {
    export class LightningPowerup extends AbstractPowerup {

        constructor(powerupContainer: PowerupContainer) {
            super(powerupContainer, PowerupType.LIGHTNING);
        }

        protected getTargetCells(mainCell:Cell): Cell[] {
            if(mainCell) {
                return this.level.boardManager.getBoard().getCells().filter(cell => mainCell.hasBlock() && cell.hasBlock() && cell.getBlock().color == mainCell.getBlock().color);
            }
            return [];
        }

        protected canBeApplied(cell: Cell): boolean {
            return cell && cell.hasBlock();
        }

        protected applyPowerup(currentCell: Cell) {
            PowerupManager.instance.usePowerup(this.powerupType);

            APIUtils.instance.trackStatsChange('lightning_powerups_used', 1);

            const targetCells: Cell[] =  Phaser.ArrayUtils.shuffle(this.getTargetCells(currentCell));

            if(targetCells.length == 1) {
                this.level.boardManager.getBoard().effectsContainer.add(new LightningEffect(currentCell, currentCell).delayedStart(0));
                this.game.time.events.add( 50, () => this.level.figureManager.updateFiguresApplicability());
            } else {
                let delay: number = 0;
                let currentPortion: Cell[] = [currentCell];
                while(currentPortion) {
                    for (let cell of currentPortion) {
                        let nextPortion: Cell[] = this.getNextPortionOfCells(targetCells);
                        if(nextPortion) {
                            for(let nextCell of nextPortion) {
                                this.level.boardManager.getBoard().effectsContainer.add(new LightningEffect(cell, nextCell).delayedStart(delay));
                            }
                            delay += LightningEffect.TOTAL_FRAMES / LightningEffect.FPS * 1000 + Settings.LIGHTING_DELAY_BETWEEN_STRIKES;
                        }
                        currentPortion = nextPortion;
                    }
                }
                this.game.time.events.add(delay + 50, () => {
                    this.level.figureManager.updateFiguresApplicability();
                    this.level.eventManager.onPowerupApplied.dispatch(this.powerupType);
                });
            }

            this.deactivate();
        }

        private getNextPortionOfCells(cells: Cell[]): Cell[] {
            if(cells.length == 0) {
                return null;
            }
            if(cells.length <  Settings.LIGHTING_MIN_TARGETS) {
                return cells.splice(0, cells.length);
            }
            let cellsCount:number = Settings.LIGHTING_MIN_TARGETS + Math.floor(Math.random() * (Settings.LIGHTING_MAX_TARGETS + 1 - Settings.LIGHTING_MIN_TARGETS));
            return cells.splice(0, cellsCount > cells.length ? cells.length : cellsCount);
        }

    }
}