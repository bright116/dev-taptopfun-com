namespace BlockPuzzle {
    export class BestScoreReachedEffectEmitter extends Phaser.Particles.Arcade.Emitter {

        constructor(x: number, y: number, maxParticles: number) {
            super(App.instance, x, y, maxParticles);

            this.width = CustomScaleManager.ORIGINAL_WIDTH;
            this.height = 30;

            this.minParticleScale = 1;
            this.maxParticleScale = 1.4;
            this.makeParticles(Settings.ANIMATION_ATLAS, ['particleStar10000','particleStar20000', 'particleStar30000'], maxParticles);
            this.gravity.set(0, 1200);
            this.setYSpeed(-100, 700);
            this.autoAlpha = true;
            this.setAlpha(1, 0.0, 1800, Phaser.Easing.Quadratic.In);


            this.flow(3500, 5, 6, maxParticles, false);
        }
    }
}