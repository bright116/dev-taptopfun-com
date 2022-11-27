namespace BlockPuzzle {
    export class LightningEffect extends Phaser.Sprite {

        public static LIGHTING_FRAMES: number = 15;
        public static DISAPPEARING_FRAMES: number = 13;
        public static TOTAL_FRAMES: number = LightningEffect.LIGHTING_FRAMES + LightningEffect.DISAPPEARING_FRAMES;
        public static FPS: number = 180;

        private blinkAnimation: Phaser.Animation;
        private endAnimation: Phaser.Animation;

        private initialCellPosition: Phaser.Point;
        private targetCellPosition: Phaser.Point;
        private targetCell: Cell;

        constructor(initialCell: Cell, targetCell: Cell) {
            super(App.instance, targetCell.x, targetCell.y, Settings.GAME_ATLAS, 'lighting0000');
            this.anchor.set(0.5, 0);
            this.initialCellPosition = initialCell.position.clone();
            this.targetCellPosition = targetCell.position.clone();
            this.targetCell = targetCell;

            this.update();

            this.blinkAnimation = this.animations.add('blinkAnimation', Phaser.Animation.generateFrameNames('lighting', 0, LightningEffect.LIGHTING_FRAMES - 1, '', 4));
            this.endAnimation = this.animations.add('endAnimation', Phaser.Animation.generateFrameNames('lightingEnd', 0, LightningEffect.DISAPPEARING_FRAMES - 1, '', 4));
        }

        public delayedStart(delay: number): LightningEffect {
            this.visible = false;
            this.game.time.events.add(delay, () => {
                if (this.targetCell) {
                    this.startAnimations();
                } else {
                    this.destroy();
                }
            });
            return this;
        }

        private startAnimations() {
            SoundController.instance.playLightningSound();
            this.visible = true;
            this.blinkAnimation.play(LightningEffect.FPS, false, false);
            this.blinkAnimation.onComplete.add(() => {
                this.endAnimation.play(LightningEffect.FPS, false, false);
                this.endAnimation.onComplete.add(() => {
                    this.destroy();
                });
                this.scale.set(1, 1);
            });
            if (this.targetCell) {
                ScoreManager.instance.addScores(5);
                this.targetCell.destroyBlock(35);
            }
        }

        update() {
            super.update();
            const length: number = Phaser.Math.distance(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y);
            if (this.targetCell) {
                this.targetCellPosition.copyFrom(this.targetCell.position);
                this.scale.set(1, Math.max(0.5, length / 130));
                if (length == 0) {
                    this.anchor.set(0.5); /* hit the same block */
                }
            } else if (length < 120) {
                this.scale.set(1, length / 130);
            }

            this.position.copyFrom(this.targetCellPosition);
            this.rotation = Phaser.Math.angleBetween(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y) - Math.PI / 2;
        }

        destroy() {
            super.destroy();
            this.blinkAnimation = null;
            this.endAnimation = null;
        }
    }
}