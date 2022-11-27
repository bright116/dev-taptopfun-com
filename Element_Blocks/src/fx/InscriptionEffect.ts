namespace BlockPuzzle {
    export class InscriptionEffect extends Phaser.Group {

        private inscriptionLevel: InscriptionLevel;

        public sprite: Phaser.Sprite;

        constructor(inscriptionLevel: InscriptionLevel, x: number, y: number) {
            super(App.instance, null);
            this.inscriptionLevel = inscriptionLevel;

            this.game.camera.shake(0.0058, 200);

            this.position.set(x, Math.max(y, -120) + 40);

            this.sprite = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'inscription' + this.inscriptionLevel + '0000'));
            this.sprite.anchor.set(0.5, 1);

            this.sprite.alpha = 0;
            this.sprite.scale.set(0);

            this.game.add.tween(this.sprite)
                .to({alpha: 1}, 420, Phaser.Easing.Sinusoidal.Out, false)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, false)
                .to({alpha: 0}, 650, Phaser.Easing.Sinusoidal.In, false)
                .start()
                .onComplete.add(() => this.destroy());

            this.game.add.tween(this.sprite)
                .to({y: -120}, 350, Phaser.Easing.Sinusoidal.Out, false)
                .to({y: -140}, 800, Phaser.Easing.Linear.None, false)
                .start();

            this.game.add.tween(this.sprite.scale)
                .to({x: 1, y: 1}, 420, this.amplifiedBackOut, false)
                .to({x: 1.25, y: 1.25}, 850, Phaser.Easing.Sinusoidal.In, false, 50)
                .start();

            SoundController.instance.playInscriptionSound(inscriptionLevel);

            if(this.inscriptionLevel == InscriptionLevel.GREAT) {
                AchievementsManager.instance.addValue(AchievementType.TOTAL_GREATS, 1);
            }
        }

        private amplifiedBackOut(k) {
            let s = 0.70158;
            return --k * k * ( ( s + 1 ) * k + s ) + 1;
        }

    }
}