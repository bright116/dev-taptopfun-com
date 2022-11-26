namespace BlockPuzzle {
    export class BlockDestroyingEffect extends Phaser.Sprite {

        protected anim: Phaser.Animation;

        constructor(color: BlockColor, x: number, y: number, delay: number) {
            super(App.instance, x, y, Settings.ANIMATION_ATLAS);
            this.anchor.set(0.5, 0.24);

            this.anim = this.animations.add('destroying', Phaser.Animation.generateFrameNames('blockDestroyingAnim' + color, 0, 35, '', 4));

            this.visible = false;
            this.game.time.events.add(delay, () => {
                this.visible = true;
                this.anim.play(62, false, true);
            })
        }
    }
}