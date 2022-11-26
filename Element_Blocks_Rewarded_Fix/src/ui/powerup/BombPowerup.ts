namespace BlockPuzzle {
    export class BombPowerup extends AbstractPowerup {

        constructor(powerupContainer: PowerupContainer) {
            super(powerupContainer, PowerupType.BOMB);
        }

        protected getTargetCells(mainCell: Cell): Cell[] {
            if (mainCell) {
                return this.level.boardManager.getBoard().getCells().filter(cell => Math.abs(cell.posX - mainCell.posX) <= 1 && Math.abs(cell.posY - mainCell.posY) <= 1);
            }
            return [];
        }

        protected canBeApplied(cell: Cell): boolean {
            return cell && this.getTargetCells(cell).some(targetCell => targetCell.hasBlock());
        }

        protected applyPowerup(currentCell: Cell) {
            PowerupManager.instance.usePowerup(this.powerupType);
            APIUtils.instance.trackStatsChange('bomb_powerups_used', 1);
            AchievementsManager.instance.addValue(AchievementType.BOMB_EXPLOSIONS, 1);
            this.getTargetCells(currentCell).forEach(cell => cell.destroyBlock(0));
            this.level.boardManager.getBoard().effectsContainer.add(new ExplosionEffect(currentCell.x, currentCell.y));
            this.level.figureManager.updateFiguresApplicability();
            this.deactivate();
            this.level.eventManager.onPowerupApplied.dispatch(this.powerupType);
        }

    }
}