namespace BlockPuzzle {
    export abstract class AbstractPowerup extends Phaser.Group {

        public readonly powerupContainer: PowerupContainer;
        public readonly level: Level;

        public readonly powerupType: PowerupType;
        public dragging: boolean = false;

        protected available: boolean = false;

        private countdownActive: boolean = false;
        private startAngle: number = 270;
        private endAngle: number = -90 - 0.000001;
        private currentStep: { value: number } = {value: 0};

        protected countdownBar: Phaser.Sprite;
        protected countdownMask: Phaser.Graphics;
        protected pad: Phaser.Sprite;
        protected icon: Phaser.Sprite;
        protected mark: Phaser.Sprite;
        protected tutorialHand: Phaser.Sprite;


        protected iconDelta: { x: number, y: number } = {x: 0, y: 0};

        protected constructor(powerupContainer: PowerupContainer, powerupType: PowerupType) {
            super(powerupContainer.game, null);
            this.powerupContainer = powerupContainer;
            this.level = powerupContainer.level;
            this.powerupType = powerupType;
            this.available = PowerupManager.instance.isBought(this.powerupType);

            this.buildContent();
            this.addListeners();
        }

        protected buildContent() {
            this.countdownBar = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'itemPad0001'));
            this.countdownBar.anchor.set(0.5);
            this.countdownBar.alpha = 0;

            this.countdownMask = this.add(this.game.make.graphics(-1, -3));
            this.countdownMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 60, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill()
            this.countdownBar.mask = this.countdownMask;

            this.pad = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'itemPad0000'));
            this.pad.anchor.set(0.5);

            this.icon = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'icon' + this.powerupType + '0000'));
            this.icon.anchor.set(0.5);

            this.mark = this.add(this.game.make.sprite(28, -26, Settings.GAME_ATLAS, this.isAvailable() ? 'okaySign0000' : 'plusSign0000'));
            this.mark.anchor.set(0.5);

            this.tutorialHand = this.add(this.game.make.sprite(-4, 0, Settings.GAME_ATLAS, 'tutorialHand0000'));
            this.tutorialHand.anchor.set(0, 0);
            this.tutorialHand.scale.set(0.5);
            this.tutorialHand.angle = -24;
            this.tutorialHand.visible = false;

            this.animateAppearing();

            if (PowerupManager.instance.isBought(this.powerupType)) {
                this.activate();
            }
        }

        protected addListeners() {
            PowerupManager.instance.onPowerupBought.add(this.handlePowerupBought, this);

            this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this, 999);

            this.pad.inputEnabled = true;
            this.pad.input.pixelPerfectClick = true;
            this.pad.input.pixelPerfectAlpha = 1;
            this.pad.events.onInputDown.add(this.handleInputDown, this);
            this.pad.events.onInputUp.add(this.handleInputUp, this);
        }

        protected animateAppearing() {
            this.visible = true;

            this.icon.scale.set(1);
            this.icon.position.set(0, 0);

            this.icon.visible = true;

            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({x: 1, y: 1}, 240, Phaser.Easing.Circular.Out, true, 0);

            this.game.tweens.removeFrom(this, false);
            this.alpha = 0;
            this.y = 35;
            this.game.add.tween(this)
                .to({alpha: 1, y: 0}, 240, Phaser.Easing.Linear.None, true);
        }

        protected handleInputDown(sprite, pointer: Phaser.Pointer) {
            if (!this.isAvailable()) {
                this.displayShop();
                return;
            }
            this.dragging = true;
            if (this.parent) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }

            this.game.tweens.removeFrom(this.iconDelta);
            this.iconDelta.x = 0;
            this.iconDelta.y = 0;
            this.game.add.tween(this.iconDelta)
                .to(this.level.serviceManager.layoutService.getPowerupDraggingDelta(), 80, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.icon.scale);
            this.icon.scale.set(1);
            this.game.add.tween(this.icon.scale)
                .to({x: 1.5, y: 1.5}, 80, Phaser.Easing.Linear.None, true);

            this.game.tweens.removeFrom(this.mark.scale);
            this.game.add.tween(this.mark.scale)
                .to({x: 0, y: 0}, 60, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.mark);
            this.game.add.tween(this.mark)
                .to({alpha: 0}, 60, Phaser.Easing.Linear.None, true);

            this.powerupContainer.pauseCountdowns();
        }

        protected handleInputUp(sprite, pointer: Phaser.Pointer) {
            if (!this.isAvailable()) {
                return;
            }
            const currentCell: Cell = this.getCurrentCell();
            if (this.canBeApplied(currentCell)) {
                this.applyPowerup(currentCell);
            } else {
                this.game.tweens.removeFrom(this.icon.scale);
                this.icon.scale.set(1);
                this.game.add.tween(this.icon.scale)
                    .to({x: 1, y: 1}, 100, Phaser.Easing.Linear.None, true);
                this.game.tweens.removeFrom(this.icon);
                this.game.add.tween(this.icon)
                    .to({x: 0, y: 0}, 100, Phaser.Easing.Linear.None, true);
            }
            this.dragging = false;
            this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged([]);

            this.game.tweens.removeFrom(this.mark.scale);
            this.game.add.tween(this.mark.scale)
                .to({x: 1, y: 1}, 60, Phaser.Easing.Linear.None, true);

            this.game.tweens.removeFrom(this.mark);
            this.game.add.tween(this.mark)
                .to({alpha: 1}, 60, Phaser.Easing.Linear.None, true);

            this.powerupContainer.resumeCountdowns();
        }

        update() {
            super.update();

            if (this.countdownActive) {
                if (!WindowManager.instance.hasOpenedWindows() && !this.powerupContainer.hasDraggingPowerups()) {
                    this.currentStep.value += this.game.time.elapsedMS / Settings.POWERUP_USAGE_COUNTDOWN_WHEN_NO_MOVES_LEFT;
                    if (this.currentStep.value > 1) {
                        this.currentStep.value = 0;
                        this.countdownFinished();
                    }
                }
                this.countdownMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 70, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill()
            }

            if (this.level.gameStateManager.isGameActive() && this.dragging) {
                const {x, y} = this.toLocal(this.game.input.activePointer.position, this.game.world);
                this.icon.position.set(x + this.iconDelta.x, y + this.iconDelta.y);

                this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged(this.getTargetCells(this.getCurrentCell()));
            } else {
                this.updateView();
            }
        }

        public pauseCountdown() {
            if(this.countdownActive) {
                this.game.add.tween(this.tutorialHand)
                    .to({alpha: 0}, 70, Phaser.Easing.Linear.None, true);

                this.game.add.tween(this.countdownBar)
                    .to({alpha: 0}, 80, Phaser.Easing.Linear.None, true);
            }
        }

        public resumeCountdown() {
            if(this.countdownActive) {
                this.game.add.tween(this.tutorialHand)
                    .to({alpha: 1}, 70, Phaser.Easing.Linear.None, true);

                this.game.add.tween(this.countdownBar)
                    .to({alpha: 1}, 70, Phaser.Easing.Linear.None, true);
            }
        }

        public isAvailable(): boolean {
            return this.available;
        }

        public mayBeBought(): boolean {
            return (PowerupManager.instance.getPrice(this.powerupType) <= StarsManager.instance.getStarsAmount());
        }

        public updateView() {
            if (!PowerupManager.instance.isBought(this.powerupType)) {
                this.icon.frameName = 'icon' + this.powerupType + '0000';
                this.mark.visible = true;
                this.mark.frameName = 'plusSign0000';
            } else {
                this.mark.visible = true;
                this.mark.frameName = 'okaySign0000';
            }
        }

        public activate() {
            this.available = true;

            this.icon.scale.set(1);
            this.icon.position.set(0, 0);

            this.icon.visible = true;
            this.mark.frameName = 'okaySign0000';
        }

        public deactivate() {
            if (this.isAvailable()) {
                this.available = false;

                this.game.tweens.removeFrom(this.icon.scale);
                this.icon.scale.set(0);
                this.icon.position.set(0, 0);

                this.mark.frameName = 'plusSign0000';

                this.game.add.tween(this.icon.scale)
                    .to({x: 1, y: 1}, 180, Phaser.Easing.Sinusoidal.Out, true);
            }
        }

        public startCountdown() {
            if (this.isAvailable()) {
                this.resetCountdown();
                this.showTutorialHand();
                this.countdownBar.visible = true;
                this.countdownBar.alpha = 1;
                this.countdownActive = true;
            }
        }

        private countdownFinished() {
            this.resetCountdown();
            this.level.eventManager.onPowerupUsageTimerExceeded.dispatch();

            this.hideTutorialHand();
        }

        private hideTutorialHand() {
            this.game.tweens.removeFrom(this.tutorialHand);
            this.game.add.tween(this.tutorialHand)
                .to({alpha: 0}, 250, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => this.tutorialHand.visible = false);
        }

        private showTutorialHand() {
            this.game.tweens.removeFrom(this.tutorialHand);
            this.tutorialHand.visible = true;
            this.game.add.tween(this.tutorialHand)
                .to({alpha: 1}, 250, Phaser.Easing.Linear.None, true);

            this.game.add.tween(this.tutorialHand)
                .to({x: '-6', y: '-6'}, 300, Phaser.Easing.Linear.None, true, 0, -1, true);
        }

        private handlePowerupApplied() {
            this.resetCountdown();
            this.hideTutorialHand();
        }

        public resetCountdown() {
            this.game.tweens.removeFrom(this.currentStep);
            this.game.tweens.removeFrom(this.countdownBar);
            this.currentStep.value = 0;
            this.countdownActive = false;
            this.countdownBar.visible = false;
            this.countdownBar.alpha = 1;
            this.countdownMask.clear();
        }

        public displayShop() {
            WindowManager.instance.showShop(this.powerupType);
        }

        protected getCurrentCell(): Cell {
            const boardLocalPosition: PIXI.Point = this.level.boardManager.getBoard().cellsContainer.toLocal(this.icon.position, this);
            return this.level.boardManager.getBoard().getCellUnderPoint(boardLocalPosition);
        }

        protected handlePowerupBought(powerupType: PowerupType) {
            if (powerupType === this.powerupType && !this.isAvailable()) {
                this.activate();
                this.powerupContainer.updatePowerups();
            }
        }

        protected abstract getTargetCells(mainCell: Cell): Cell[];

        protected abstract canBeApplied(cell: Cell): boolean;

        protected abstract applyPowerup(cell: Cell);


        destroy() {
            PowerupManager.instance.onPowerupBought.remove(this.handlePowerupBought, this);
            super.destroy();
        }

    }
}