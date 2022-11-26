namespace BlockPuzzle {
    export class FlyingParticlesEmitter extends Phaser.Particles.Arcade.Emitter {

        private readonly particleSpeed: number = 1200;
        private readonly particlefrequency: number = 17;
        protected level: Level;
        protected points: number;

        public distance: number;
        public duration: number;

        constructor(level: Level, points: number, startPosition: PIXI.Point, targetPosition: Phaser.Point) {
            super(level.game, startPosition.x, startPosition.y, 250);
            this.level = level;
            this.points = points;

            this.distance = Phaser.Math.distance(targetPosition.x, targetPosition.y, startPosition.x, startPosition.y);
            this.duration = this.distance / this.particleSpeed * 1000;

            this.makeParticles(Settings.ANIMATION_ATLAS, ['particleMultiplier10000','particleMultiplier20000', 'particleMultiplier30000']);

            this.width = 25;
            this.height = 25;

            this.minParticleScale = 0.8;
            this.maxParticleScale = 1.3;
            this.gravity.setTo(0, 200);
            this.setYSpeed(-25, 25);
            this.setXSpeed(-25, 25);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 370, Phaser.Easing.Quintic.In);
            // this.autoScale = true;
            // this.setScale(1.3, 0.8, 1.3, 0.8, 600, Phaser.Easing.Sinusoidal.InOut);

            this.flow(600, this.particlefrequency, 2, this.duration / this.particlefrequency  * 3);

            this.game.add.tween(this)
                .to({x: targetPosition.x, y: targetPosition.y}, this.duration, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.addPoints, this);

            this.game.time.events.add(this.duration + 1600, () => this.destroy());

        }

        public addPoints() {
            this.on = false;
            this.width = 45;
            this.height = 45;
            this.setYSpeed(-120, 120);
            this.setXSpeed(-120, 120);
            this.setAlpha(1, 0, 300, Phaser.Easing.Quintic.In);
            this.setScale(1, 0.3, 1, 0.3, 280, Phaser.Easing.Sinusoidal.InOut);
            this.start(false, 300, 10, 12);
        }
    }
}