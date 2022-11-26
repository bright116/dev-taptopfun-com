namespace BlockPuzzle {
    export class StarPickingUpEffect extends Phaser.Particles.Arcade.Emitter {

        protected starSprite: Phaser.Sprite;
        private readonly particleSpeed: number = 750;
        private readonly particleFrequency: number = 8;

        constructor(block: BlockStarredView) {
            super(App.instance, 0, 0, 250);

            const parentGroup: Phaser.Group = (App.instance.state.getCurrentState() as Level).uiManager.starsCounter;
            const startingPosition: PIXI.Point = parentGroup.toLocal(block.star.position, block);
            const targetPosition: PIXI.Point = new PIXI.Point(0, 0);
            const distance: number = Phaser.Math.clamp(Math.pow(Phaser.Math.distance(targetPosition.x, targetPosition.y, startingPosition.x, startingPosition.y), 0.5) * 20, 330, 700);
            const duration: number = distance / this.particleSpeed * 1000;

            /* emitter */
            parentGroup.addAt(this, 0);
            this.x = startingPosition.x;
            this.y = startingPosition.y;
            this.makeParticles(Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000']);
            this.width = 30;
            this.height = 30;
            this.minParticleScale = 0.7;
            this.maxParticleScale = 1.5;
            this.gravity.setTo(0, -100);
            this.setYSpeed(-100, 100);
            this.setXSpeed(-100, 100);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);
            this.autoScale = true;
            this.setScale(1, 0.3, 1, 0.3, 500, Phaser.Easing.Sinusoidal.InOut);


            this.game.add.tween(this)
                .to({x: targetPosition.x}, duration, Phaser.Easing.Back.In, true);
            this.game.add.tween(this)
                .to({y: targetPosition.y}, duration, Phaser.Easing.Sinusoidal.In, true)
                .onComplete.add(this.finalizeTween, this);

            this.start(false, 600, this.particleFrequency, duration / this.particleFrequency);

            this.game.time.events.add(duration + 1600, () => this.destroy());


            /* star sprite */
            this.starSprite = parentGroup.addAt(block.star, 1);
            this.starSprite.position.set(startingPosition.x, startingPosition.y);
            this.game.add.tween(this.starSprite)
                .to({x: targetPosition.x}, duration, Phaser.Easing.Back.In, true);
            this.game.add.tween(this.starSprite)
                .to({
                    y: targetPosition.y,
                    angle: startingPosition.x < targetPosition.x ? '-373' : '+347'
                }, duration, Phaser.Easing.Sinusoidal.In, true);
        }

        protected finalizeTween() {
            this.starSprite.destroy();

            this.on = false;
            this.width = 45;
            this.height = 45;
            this.setYSpeed(-140, 140);
            this.setXSpeed(-140, 140);
            this.setAlpha(1, 0, 480, Phaser.Easing.Quintic.In);
            this.setScale(1.2, 0.3, 1.2, 0.3, 540, Phaser.Easing.Sinusoidal.InOut);
            this.start(false, 580, 10, 12);

            StarsManager.instance.pickupStars(1);
        }

    }
}