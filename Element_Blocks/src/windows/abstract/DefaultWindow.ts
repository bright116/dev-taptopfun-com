///<reference path="AbstractWindow.ts"/>
namespace BlockPuzzle {
    export abstract class DefaultWindow extends AbstractWindow {

        protected contentContainer: Phaser.Group;
        protected windowHeading: WindowHeading;

        private headingBackplateType: WindowHeadingBackplateType;
        private headingIconFrameName: string;

        constructor(windowManager: WindowManager, headingBackplateType: WindowHeadingBackplateType, headingIconFrameName: string, backgroundAlpha: number) {
            super(windowManager, backgroundAlpha);

            this.headingBackplateType = headingBackplateType;
            this.headingIconFrameName = headingIconFrameName;

            /* create basic elements */
            this.buildWindowBase();
            this.buildAdditionalElements();
            this.buildContent();



        }

        private buildWindowBase() {
            this.contentContainer = this.add(this.game.make.group());
            this.windowHeading = this.contentContainer.add(new WindowHeading(this.headingIconFrameName, this.headingBackplateType));
        }

        protected buildAdditionalElements() {

        }


        protected abstract buildContent();


        protected resizeContent() {
            this.contentContainer.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.top);
            this.contentContainer.scale.set(Math.min(1, this.windowManager.windowBounds.height / CustomScaleManager.ORIGINAL_HEIGHT));

            this.windowHeading.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.001);
        }

        public show() {
            super.show();

            this.resetTweens();
            this.background.alpha = 0;
            this.game.add.tween(this.background)
                .to({alpha: this.backgroundAlpha}, 300, Phaser.Easing.Circular.Out, true, 0);

            this.windowHeading.animateAppearing(150);

            this.animateAppearing(200);
        }

        protected abstract animateAppearing(delay: number);

        protected resetTweens() {
            this.windowHeading.resetTweens();
        }

        public hide() {
            this.resetTweens();
            super.hide();
        }

    }
}