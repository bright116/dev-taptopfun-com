///<reference path="DefaultWindow.ts"/>
namespace BlockPuzzle {
    export abstract class CloseableWindow extends DefaultWindow {

        protected buttonClose: ButtonCloseWindow;

        constructor(windowManager: WindowManager, headingBackplateType: WindowHeadingBackplateType, headingIconFrameName: string, backgroundAlpha: number) {
            super(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha);
        }

        protected buildAdditionalElements() {
            this.buttonClose = this.add(new ButtonCloseWindow(this, this.closeClicked, this));
        }

        protected resizeContent() {
            super.resizeContent();
            this.buttonClose.resize(-75, 75);
        }

        public show() {
            super.show();

            this.buttonClose.alpha = 1;
            this.buttonClose.scale.set(0);
            this.game.add.tween(this.buttonClose.scale)
                .to({x: 1, y: 1}, 350, Phaser.Easing.Back.Out, true, 300);
        }

        public animateDisappearing(delay: number, onClosedCallback: Function = null) {
            this.windowHeading.animateDisappearing(delay);

            this.game.tweens.removeFrom(this.buttonClose);
            this.game.add.tween(this.buttonClose)
                .to({y: '-100', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay);

            this.game.tweens.removeFrom(this.background);
            this.game.add.tween(this.background)
                .to({alpha: 0}, 300, Phaser.Easing.Circular.In, true, delay + 100)
                .onComplete.add(() => {
                    if(onClosedCallback) onClosedCallback();
                    this.hide();
            });
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.buttonClose, false);
            this.game.tweens.removeFrom(this.buttonClose.scale, false);
        }

        protected closeClicked() {
            this.onCloseClicked();
            this.animateDisappearing(0);
        }

        protected abstract onCloseClicked();
    }
}