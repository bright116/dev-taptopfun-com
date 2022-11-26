namespace BlockPuzzle {
    export class Block extends Phaser.Group {

        public posX: number;
        public posY: number;
        public color: BlockColor;
        public temporalColor: BlockColor;
        protected starred: boolean = false;
        protected active: boolean = true;

        protected block: Phaser.Sprite;
        protected blockStarred: BlockStarredView;
        protected blockGrayscale: Phaser.Sprite;
        protected glow: Phaser.Sprite;

        constructor(cellModel: CellModel, color: BlockColor) {
            super(App.instance, null);

            this.posX = cellModel.posX;
            this.posY = cellModel.posY;

            this.glow = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'blockGlow000' + color));
            this.glow.anchor.set(0.5);
            this.glow.alpha = 0;
            this.glow.visible = false;

            this.block = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'block000' + color));
            this.block.anchor.set(0.5);

            this.blockGrayscale = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'blockGrey000' + color));
            this.blockGrayscale.anchor.set(0.5);
            this.blockGrayscale.visible = false;
            this.blockGrayscale.alpha = 0;

            this.setColor(color);
        }

        public addStar(level: Level) {
            if (!this.starred) {
                this.starred = true;
                this.block.visible = false;
                this.blockStarred = this.blockStarred || this.add(new BlockStarredView(this.color));
                this.blockStarred.startAppearingTween(level.boardManager.getBoard().effectsContainer, this);
            }
        }

        public hasStar(): boolean {
            return this.starred;
        }

        public setColor(color: BlockColor) {
            this.color = color;
            this.block.frameName = 'block000' + this.color;
            this.glow.frameName = 'blockGlow000' + this.color;
            if (this.blockStarred) {
                this.blockStarred.setColor(this.color);
            }
            this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
        }

        public setTemporalColor(color: BlockColor) {
            this.temporalColor = color;
            this.block.frameName = 'block000' + this.temporalColor;
            this.glow.frameName = 'blockGlow000' + this.temporalColor;
            if (this.blockStarred) {
                this.blockStarred.setColor(this.temporalColor);
            }
            this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
        }

        public applyTemporalColor() {
            if (this.temporalColor) {
                this.setColor(this.temporalColor);
            }
        }

        public activate(delay: number) {
            this.active = true;
            this.block.visible = true;
            if (this.hasStar()) {
                this.blockStarred.visible = true;
                this.blockStarred.alpha = 1;
                this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
            }
            this.game.add.tween(this.blockGrayscale)
                .to({alpha: 0}, Settings.BLOCK_ACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
        }

        public deactivate(delay: number) {
            this.active = false;
            this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
            this.blockGrayscale.visible = true;
            this.blockGrayscale.alpha = 0;
            this.game.add.tween(this.blockGrayscale)
                .to({alpha: 1}, Settings.BLOCK_DEACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay)
                .onComplete.add(() => {
                this.block.visible = false;
                if (this.hasStar()) {
                    this.blockStarred.visible = false;
                    this.blockStarred.alpha = 0;
                }
            });
        }

        public dispose(delay: number) {
            const deltaY: number = (8 - this.posY) + 1;
            const targetY: number = deltaY * Settings.CELL_HEIGHT;
            const targetX: number = Math.floor(this.game.rnd.integerInRange(20, 60));
            const fallingDistanceY: number = targetY;
            const fallingDuration: number = 250 + deltaY * 45;

            this.game.add.tween(this)
                .to({x: targetX.toString()}, fallingDuration, Phaser.Easing.Sinusoidal.In, true, delay);
            this.game.add.tween(this)
                .to({alpha: 0}, fallingDuration, Phaser.Easing.Exponential.In, true, delay);
            this.game.add.tween(this)
                .to({y: '+' + fallingDistanceY}, fallingDuration, Phaser.Easing.Back.In, true, delay);
        }

        public enableGlow(duration: number) {
            this.game.tweens.removeFrom(this.glow);
            this.glow.visible = true;
            this.glow.alpha = 0;
            this.game.add.tween(this.glow)
                .to({alpha: 0.6}, duration, Phaser.Easing.Sinusoidal.InOut, true);
        }

        public disableGlow(duration: number) {
            this.game.tweens.removeFrom(this.glow);
            this.game.add.tween(this.glow)
                .to({alpha: 0}, duration, Phaser.Easing.Sinusoidal.Out, true)
                .onComplete.add(() => this.glow.visible = false);
        }

        public animateDestroying(effectsContainer: Phaser.Group, delay: number) {
            effectsContainer.add(new BlockDestroyingEffect(this.color, this.x, this.y, delay));

            this.game.add.tween(this.scale)
                .to({x: 0.5, y: 0.5}, Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
            this.game.add.tween(this)
                .to({alpha: 0}, Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay)
                .onComplete.add(() => {
                    if(this.color == BlockColor.RED) {
                        AchievementsManager.instance.addValue(AchievementType.FIRE_BLOCKS_DESTROYED, 1);
                    }
                    this.destroy();
            });

            if (this.hasStar() && this.blockStarred) {
                this.blockStarred.pickupStar(delay);
            }
        }
    }
}