///<reference path="abstract/CloseableWindow.ts"/>
namespace BlockPuzzle {

    export class WindowRevive extends CloseableWindow {

        protected controlsContainer: Phaser.Group;
        protected reviveCountdown: ReviveCountdown;
        protected buttonWatchVideo: Phaser.Button;

        private isActive: boolean = false;

        constructor(windowManager: WindowManager) {
            super(windowManager, WindowHeadingBackplateType.SILVER, 'iconHeadingRevive', Settings.WINDOW_BACKGROUND_ALPHA);
        }


        protected buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.reviveCountdown = this.controlsContainer.add(new ReviveCountdown(this));
            this.reviveCountdown.position.set(0, 0);
            this.buttonWatchVideo = this.contentContainer.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonRevive', 0, 0, 1.35, this.watchVideoClicked, this));
        }


        protected resizeContent() {
            super.resizeContent();
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55);
            this.buttonWatchVideo.position.set(10, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
        }

        public show() {
            super.show();

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_BONUS);
            }

            this.reviveCountdown.startCountdown();
        }

        public hide() {
            this.reviveCountdown.resetCountdown();
            super.hide();
        }

        protected onCloseClicked() {
            this.reviveFailed(false);
        }

        protected watchVideoClicked() {
            APIUtils.instance.showRewardedVideo(() => this.reviveSucceed());
        }

        public reviveSucceed() {
            if(!this.isActive) {
                return;
            }
            this.animateDisappearing(0, () => {
                if (this.game.state.getCurrentState() instanceof Level) {
                    (this.game.state.getCurrentState() as Level).eventManager.onReviveApplied.dispatch();
                }
            });
        }

        public reviveFailed(disappear: boolean) {
            if(!this.isActive) {
                return;
            }
            if (disappear) {
                this.animateDisappearing(30, null);
            }
            if (this.game.state.getCurrentState() instanceof Level) {
                (this.game.state.getCurrentState() as Level).eventManager.onReviveFailed.dispatch();
            }
        }

        public animateAppearing(delay: number) {
            this.isActive = true;

            this.reviveCountdown.alpha = 0;
            this.game.add.tween(this.reviveCountdown)
                .to({alpha: 1}, 350, Phaser.Easing.Linear.None, true, delay + 130);
            this.reviveCountdown.scale.set(0.6);
            this.game.add.tween(this.reviveCountdown.scale)
                .to({x: 1, y: 1}, 350, Phaser.Easing.Back.Out, true, delay + 130);

            this.buttonWatchVideo.inputEnabled = true;
            this.game.tweens.removeFrom(this.buttonWatchVideo);
            this.buttonWatchVideo.alpha = 1;
            this.game.add.tween(this.buttonWatchVideo)
                .from({y: '70', alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 200);
        }

        public animateDisappearing(delay: number, onClosedCallback: Function) {
            this.isActive = false;

            super.animateDisappearing(delay, onClosedCallback);
            this.reviveCountdown.animateDisappearing(delay);

            this.buttonWatchVideo.inputEnabled = false;
            this.game.tweens.removeFrom(this.buttonWatchVideo);
            this.game.add.tween(this.buttonWatchVideo)
                .to({y: '100', alpha: 0}, 250, Phaser.Easing.Sinusoidal.In, true, delay);

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.controlsContainer, false);
            this.game.tweens.removeFrom(this.controlsContainer.scale, false);
            this.game.tweens.removeFrom(this.reviveCountdown, false);
            this.game.tweens.removeFrom(this.reviveCountdown.scale, false);
            this.game.tweens.removeFrom(this.buttonWatchVideo, false);
        }

    }
}