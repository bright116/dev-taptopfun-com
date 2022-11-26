namespace BlockPuzzle {
    export class NewRecordEffect extends Phaser.Group {

        private readonly resultsWindow: WindowResults;

        protected stamp: Phaser.Sprite;

        constructor(results: WindowResults) {
            super(results.game, null);
            this.resultsWindow = results;

            this.stamp = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'newBestIcon0000'));
            this.stamp.anchor.set(0.5);

        }

        public show(delay: number){
            this.game.time.events.add(delay, () => this.playStampTween());
        }


        protected playStampTween() {
            this.visible = true;
            this.scale.set(2.5);
            this.alpha = 0.45;
            this.game.add.tween(this)
                .to({alpha: 1}, 250, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.scale)
                .to({x: 1, y: 1}, 250, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => {
                    this.parent.scale.set(0.95, 0.95);
                    this.game.add.tween(this.parent.scale)
                        .to({x: 1, y: 1}, 320, Phaser.Easing.Back.Out, true);
                    this.parent && this.parent.parent && this.parent.parent.addChildAt(new BestScoreReachedEffectEmitter(0,  -15, 120), 0);
            });
            this.game.time.events.add(160, () => SoundController.instance.playStampSound());
        }

    }
}