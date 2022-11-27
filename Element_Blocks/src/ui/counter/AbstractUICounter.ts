namespace BlockPuzzle {
    export abstract class AbstractUICounter extends Phaser.Group {

        public readonly uiManager: UIManager;
        public readonly level: Level;

        protected pad: Phaser.Sprite;
        protected icon: Phaser.Sprite;
        protected textField: BitmapTextField;

        constructor(uiManager: UIManager) {
            super(uiManager.game, null);
            this.uiManager = uiManager;
            this.level = uiManager.level;

            this.buildChildren();
        }

        protected abstract buildChildren();

        protected tweenIcon(duration: number) {
            if (duration < 400) {
                this.game.add.tween(this.icon.scale)
                    .to({x: 1.075, y: 1.075}, 100, Phaser.Easing.Sinusoidal.Out, false)
                    .to({x: 1.0, y: 1.0}, 240, Phaser.Easing.Sinusoidal.In, false)
                    .start();
            } else {
                this.game.add.tween(this.icon.scale)
                    .to({x: 1.13, y: 1.13}, .25 * duration, Phaser.Easing.Sinusoidal.Out, false)
                    .to({x: 1.15, y: 1.15}, 0.1 * duration, Phaser.Easing.Sinusoidal.In, false)
                    .to({x: 1.0, y: 1.0}, 0.65 * duration, Phaser.Easing.Sinusoidal.In, false)
                    .start();
            }
        }
    }
}