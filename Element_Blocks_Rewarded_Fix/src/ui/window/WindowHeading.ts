namespace BlockPuzzle {
    export class WindowHeading extends Phaser.Group {

        protected plate: Phaser.Sprite;
        protected container: Phaser.Group;
        protected icon: Phaser.Sprite;

        protected backplateType: WindowHeadingBackplateType;
        protected iconFrameName: string;

        constructor(iconFrameName: string, backplateType: WindowHeadingBackplateType) {
            super(App.instance);

            this.iconFrameName = iconFrameName;
            this.backplateType = backplateType;

            this.buildContent();
        }

        protected buildContent() {
            this.container = this.add(this.game.make.group());

            this.plate = this.container.add(this.game.make.sprite(0, -5, Settings.GAME_ATLAS, 'windowHeadingBackplate000' + this.backplateType ));
            this.plate.anchor.set(0.5, 0);

            this.icon = this.container.add(this.game.make.sprite(0, 316, Settings.GAME_ATLAS, this.iconFrameName + '0000'));
            this.icon.anchor.set(0.5);
        }

        public animateAppearing(delay: number) {
            this.game.tweens.removeFrom(this.container);

            this.container.y = -450;
            this.game.add.tween(this.container)
                .to({y: -100}, 350, Phaser.Easing.Back.Out, true, delay)
                .onStart.add(() => SoundController.instance.playPanelMovementSound());

            this.icon.alpha = 0;
            this.icon.scale.set(0.6);
            this.game.add.tween(this.icon)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.game.add.tween(this.icon.scale)
                .to({x: 1, y: 1}, 300, Phaser.Easing.Back.Out, true, delay);
        }

        public animateDisappearing(delay: number) {
            this.game.tweens.removeFrom(this.container);
            this.game.add.tween(this.container)
                .to({y: -450}, 350, Phaser.Easing.Back.In, true, delay)
                .onStart.add(() => SoundController.instance.playPanelUpMovementSound());
        }

        public resetTweens() {
            this.game.tweens.removeFrom(this.container);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
        }

    }
}