///<reference path="abstract/CloseableWindow.ts"/>
namespace BlockPuzzle {

    export class WindowSettings extends CloseableWindow {

        protected controlsContainer: Phaser.Group;
        protected musicControl: MusicControlScrollbar;
        protected sfxControl: SFXControlScrollbar;
        protected buttonRestart: Phaser.Button;
        protected publisherLogo: PublisherLogo;

        constructor(windowManager: WindowManager) {
            super(windowManager, WindowHeadingBackplateType.SILVER, 'iconHeadingSettings', Settings.WINDOW_BACKGROUND_ALPHA);
        }


        protected buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.sfxControl = this.controlsContainer.add(new SFXControlScrollbar());
            this.musicControl = this.controlsContainer.add(new MusicControlScrollbar());
            this.sfxControl.position.set(-25, -70);
            this.musicControl.position.set(-25, 70);
            this.buttonRestart = this.contentContainer.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1.12, this.restartClicked, this));
            this.publisherLogo = this.contentContainer.add(new PublisherLogo(0, 0));
        }


        protected resizeContent() {
            super.resizeContent();
            this.sfxControl.position.set(-25, -70);
            this.musicControl.position.set(-25, 70);
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.53);
            this.buttonRestart.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.76);
            this.publisherLogo.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.92);
        }

        protected onCloseClicked() {
            LocalStorageController.instance.save();
        }

        protected tutorialClicked() {
            this.hide();
            if(this.game.state.getCurrentState() instanceof Level) {
                (this.game.state.getCurrentState() as Level).tutorialManager.restartTutorial();
            }
        }

        protected restartClicked() {
            TransitionScreen.instance.changeState('Level');
        }

        public animateAppearing() {
            this.sfxControl.initValue();
            this.musicControl.initValue();

            this.sfxControl.alpha = 0;
            this.game.add.tween(this.sfxControl)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 200);
            this.sfxControl.scale.set(0.6);
            this.game.add.tween(this.sfxControl.scale)
                .to({x: 1, y: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 200);

            this.musicControl.alpha = 0;
            this.game.add.tween(this.musicControl)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 250);
            this.musicControl.scale.set(0.6);
            this.game.add.tween(this.musicControl.scale)
                .to({x: 1, y: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 250);

            this.buttonRestart.alpha = 0;
            this.game.add.tween(this.buttonRestart)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
            this.buttonRestart.scale.set(0.6);
            this.game.add.tween(this.buttonRestart.scale)
                .to({x: 1.12, y: 1.12}, 250, Phaser.Easing.Sinusoidal.Out, true, 350);

            this.publisherLogo.alpha = 0;
            this.game.add.tween(this.publisherLogo)
                .to({alpha: 1}, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
            this.publisherLogo.scale.set(0.28);
            this.game.add.tween(this.publisherLogo.scale)
                .to({x: 0.45, y: 0.45}, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
        }

        public animateDisappearing(delay: number, onClosedCallback: Function) {
            super.animateDisappearing(delay, onClosedCallback);

            this.game.add.tween(this.sfxControl)
                .to({alpha: 0, x: '-150'}, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);

            this.game.add.tween(this.musicControl)
                .to({alpha: 0, x: '+150'}, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);

            this.game.tweens.removeFrom(this.buttonRestart);
            this.game.add.tween(this.buttonRestart)
                .to({y: '100', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay + 100);

            this.game.tweens.removeFrom(this.publisherLogo);
            this.game.add.tween(this.publisherLogo)
                .to({y: '100', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay + 50);

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.controlsContainer, false);
            this.game.tweens.removeFrom(this.controlsContainer.scale, false);
            this.game.tweens.removeFrom(this.buttonRestart, false);
            this.game.tweens.removeFrom(this.sfxControl, false);
            this.game.tweens.removeFrom(this.musicControl, false);
            this.game.tweens.removeFrom(this.publisherLogo, false);
        }

    }
}