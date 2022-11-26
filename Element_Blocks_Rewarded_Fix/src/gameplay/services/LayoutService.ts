namespace BlockPuzzle {
    export class LayoutService extends AbstractService {

        public getFigureDraggingDelta(figureBarIndex: number): object {
            return App.instance.device.desktop ? {x: 0, y: 0} : CustomScaleManager.isPortrait() ? {x: 0, y: Settings.FIGURE_VIEW_DRAGGING_DELTA} : {x: Settings.FIGURE_VIEW_DRAGGING_DELTA, y: -30 * (figureBarIndex)};
        }

        public getPowerupDraggingDelta(): object {
            return App.instance.device.desktop ? {x: 0, y: 0} : CustomScaleManager.isPortrait() ? {x: 0, y: Settings.POWERUP_DRAGGING_DELTA} : {x: 0, y: Settings.POWERUP_DRAGGING_DELTA};
        }

        public getAvailableBoardBounds(): Phaser.Rectangle {
            if(CustomScaleManager.isPortrait()) {
                const {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 1, 0.12, 0.75);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isSquared()) {
                const {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 0.75, 0.15, 1);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isLandscape()) {
                const {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0.2, 0.8, 0, 1);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }

        public getAvailableFiguresPanelBounds(): Phaser.Rectangle {
            if(CustomScaleManager.isPortrait()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 1, 0.75, 0.94);
                let bounds: PIXI.Rectangle = this.level.boardManager.getBoardBounds(this.level.container);
                let availableHeight: number = this.level.boardManager.getBoardBounds(this.level.container).width * 5 / 15;
                minY = this.level.boardManager.getBoardBounds(this.level.container, false).bottom;
                return new Phaser.Rectangle((minX + maxX) / 2, minY + availableHeight / 2, maxX - minX, availableHeight);
            } else if(CustomScaleManager.isSquared()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0.75, 1, 0.15, 0.87);
                minX = this.level.boardManager.getBoardBounds(this.level.container).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isLandscape()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0.8, 1, 0.16, 1);
                minX = this.level.boardManager.getBoardBounds(this.level.container).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }

        public getAvailableUIContainerBounds(): Phaser.Rectangle {
            if(CustomScaleManager.isPortrait()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 1, 0, 0.15);
                maxY = this.level.boardManager.getBoardBounds(this.level.container).top;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isSquared()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 1, 0, 0.15);
                maxY = this.level.boardManager.getBoardBounds(this.level.container).top;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isLandscape()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 0.2, 0.25, 0.72);
                maxX = this.level.boardManager.getBoardBounds(this.level.container).left;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }

        public getFigureDisposingTweenParams(): object {
            return CustomScaleManager.isPortrait() ? {y: '+75', alpha: 0} : {x: '+75', alpha: 0};
        }

        public getAvailablePowerupsContainerBounds(): Phaser.Rectangle {
            if(CustomScaleManager.isPortrait()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 1, 0.9, 1);
                minY = this.getAvailableFiguresPanelBounds().y + this.getAvailableFiguresPanelBounds().height / 2;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
                // minY = this.level.boardManager.getBoardBounds(this.level.container).bottom;
                // return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isSquared()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0.8, 1, 0.86, 0.95);
                minX = this.level.boardManager.getBoardBounds(this.level.container, false).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            } else if(CustomScaleManager.isLandscape()) {
                let {minX, maxX, minY, maxY} = this.level.windowBounds.getBounds(0, 0.2, 0.86, 0.94);
                maxX = this.level.boardManager.getBoardBounds(this.level.container, false).left;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }
    }
}