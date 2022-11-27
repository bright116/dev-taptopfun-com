namespace BlockPuzzle {
    export class ExplodingEffectEmitter extends Phaser.Particles.Arcade.Emitter {

        private readonly particlefrequency: number = 12;

        constructor(targetPosition: PIXI.Point) {
            super(App.instance, targetPosition.x, targetPosition.y, 100);

            this.makeParticles(Settings.ANIMATION_ATLAS, ['particleStar10000','particleStar20000', 'particleStar30000']);

            this.width = 40;
            this.height = 40;

            this.minParticleScale = 1.0;
            this.maxParticleScale = 2.5;
            this.gravity.setTo(0, 0);
            this.setYSpeed(-130, 130);
            this.setXSpeed(-130, 130);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);
            this.autoScale = true;
            this.setScale(2, 0.6, 2, 0.6, 500, Phaser.Easing.Sinusoidal.InOut);

            this.start(false, 600, this.particlefrequency, 100 / this.particlefrequency);

            this.game.time.events.add(1600, () => this.destroy());
        }
    }
}