namespace BlockPuzzle {
    export class ExplosionEffect extends Phaser.Group {

        private explosionA: Phaser.Sprite;
        private explosionB: Phaser.Sprite;

        constructor(x: number, y: number) {
            super(App.instance, null);

            this.position.set(x, y);

            this.explosionA = this.add(this.game.make.sprite(0, 0, 'explosionA'));
            this.explosionA.anchor.set(0.5);
            this.explosionA.scale.set(1.2);
            this.explosionA.angle = Math.random() * 360;
            this.explosionA.animations.add('boom');
            this.explosionA.animations.play('boom', 120, false, true);

            this.explosionB = this.add(this.game.make.sprite(0, 0, 'explosionB'));
            this.explosionB.anchor.set(0.5);
            this.explosionB.scale.set(1.3);
            this.explosionB.angle = Math.random() * 360;
            this.explosionB.animations.add('boom');
            this.explosionB.animations.play('boom', 60, false, true);

            this.game.camera.shake(0.0035, 350);

            SoundController.instance.playExplosionSound();
        }
    }
}