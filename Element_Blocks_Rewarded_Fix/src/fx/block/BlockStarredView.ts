namespace BlockPuzzle {
    export class BlockStarredView extends Phaser.Group {

        public block: Phaser.Sprite;
        public star: Phaser.Sprite;
        public shining: Phaser.Sprite;
        public shadow: Phaser.Sprite;

        constructor(color: BlockColor) {
            super(App.instance, null);

            this.buildChildren(color);
        }

        private buildChildren(color: BlockColor) {
            this.block = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'blockStarred000' + color));
            this.block.anchor.set(0.5);

            this.star = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'star0000'));
            this.star.anchor.set(0.5);

            this.shining = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'starShining0000'));
            this.shining.anchor.set(0.5);
            this.shining.alpha = 0;

            this.shadow = this.add(this.game.make.sprite(-2, -2, Settings.GAME_ATLAS, 'starShadow0000'));
            this.shadow.anchor.set(0.5);
        }

        protected startShining() {
            this.game.tweens.removeFrom(this.shining);
            this.shining.alpha = 0.0;
            this.game.add.tween(this.shining)
                .to({alpha: 1}, Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);

            this.game.tweens.removeFrom(this.star.scale);
            this.star.scale.set(0.9);
            this.game.add.tween(this.star.scale)
                .to({x: 1, y: 1}, Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);
        }

        public setColor(color: BlockColor) {
            this.block.frameName = 'blockStarred000' + color;
        }

        public startAppearingTween(initialParent: Phaser.Group, targetBlock: Block) {
            const initialParentPosition: PIXI.Point = initialParent.toLocal(this.position, this.parent);
            this.position.set(initialParentPosition.x, initialParentPosition.y);
            initialParent.add(this);

            this.game.time.events.add(70, () =>  SoundController.instance.playStarAppearSound());

            this.game.tweens.removeFrom(this.block);
            this.block.alpha = 0;
            this.game.add.tween(this.block)
                .to({alpha: 1}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.35, Phaser.Easing.Linear.None, true);

            this.shining.alpha = 0;
            this.shadow.alpha = 0;
            this.game.add.tween(this.shadow)
                .to({alpha: 1}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.2, Phaser.Easing.Sinusoidal.In, true, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.8);

            this.game.tweens.removeFrom(this.star);
            this.star.alpha = 0.5;
            this.game.add.tween(this.star)
                .to({alpha: 1}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.7, Phaser.Easing.Quadratic.Out, true);
            this.star.angle = -45;
            this.game.add.tween(this.star)
                .to({angle: 0}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false)
                .start();

            this.game.tweens.removeFrom(this.star.scale);
            this.star.scale.set(5);
            this.game.add.tween(this.star.scale)
                .to({x: 0.8, y: 0.8}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false)
                .to({x: 0.9, y: 0.9}, Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.1, Phaser.Easing.Sinusoidal.In, false)
                .start()
                .onComplete.add(() => {
                    this.position.set(0, 0);
                    targetBlock.add(this);
                    this.startShining();
            });
        }

        public destroy() {
            super.destroy();
        }

        public pickupStar(delay: number) {
            this.game.time.events.add(delay, () => {
                  new StarPickingUpEffect( this );
            });
        }
    }
}