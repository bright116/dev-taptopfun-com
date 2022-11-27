namespace BlockPuzzle {
    export class ScoresEffect extends Phaser.Group {

        public level: Level;
        public scores: number;

        private readonly targetScale: number = 1.0;

        private scoresText: BitmapTextField;
        private appearingTween: Phaser.Tween;
        private disappearingTween: Phaser.Tween;

        constructor(level: Level, scores: number, x: number, y: number, delay: number) {
            super(level.game);
            this.level = level;
            this.scores = scores;

            const parentGroup: Phaser.Group = (App.instance.state.getCurrentState() as Level).uiManager.multiplierBar;
            const startingPosition: PIXI.Point = parentGroup.toLocal(new Phaser.Point(x, y), this.level.boardManager.getBoard().cellsContainer);
            const targetPosition: PIXI.Point = new PIXI.Point(0, 0);

            this.position.set(startingPosition.x, startingPosition.y);
            parentGroup.addAt(this, 0);

            this.buildContent();
            this.animateContentA(delay, targetPosition);
        }

        private buildContent() {
            this.scoresText = this.add(new BitmapTextField('+' + this.scores, Settings.GAME_ATLAS, 'Gold', 1, 0.5, 0.5, 1));
        }

        private animateContentA(delay: number, targetPosition: PIXI.Point) {
            //appearing tween
            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({
                    x: this.targetScale,
                    y: this.targetScale
                }, 300, Phaser.Easing.Back.Out, true, delay);

            //tween appearing position
            this.appearingTween = this.game.add.tween(this.scoresText)
                .to({y: this.scoresText.y - 80}, 350, Phaser.Easing.Back.Out, true, delay);

            this.disappearingTween = this.game.add.tween(this)
                .to({alpha: 0.0, y: this.y - 70}, 750, Phaser.Easing.Cubic.In, false);
            this.disappearingTween.onStart.add(() => {

            });
            this.disappearingTween.onComplete.add(() => this.destroy());

            this.game.time.events.add(delay, () =>
            this.parent.addChildAt(new FlyingParticlesEmitter(this.level, this.scores, new PIXI.Point(this.x, this.y - 80), new Phaser.Point(targetPosition.x, targetPosition.y)), 0)
        );

            //chain tweens
            this.appearingTween.chain(this.disappearingTween);
        }

        destroy() {
            super.destroy();
            this.level = null;
            this.scoresText = null;
            this.appearingTween = null;
            this.disappearingTween = null;
        }


    }
}
