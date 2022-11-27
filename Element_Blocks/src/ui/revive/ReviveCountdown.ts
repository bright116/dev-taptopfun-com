namespace BlockPuzzle {
    export class ReviveCountdown extends Phaser.Group {

        private readonly windowRevive: WindowRevive;

        private circle: Phaser.Sprite;
        private heart: Phaser.Sprite;
        private circleMask: Phaser.Graphics;
        private timeLeftText: Phaser.Text;

        private countdownActive: boolean = false;

        private startAngle: number = 270;
        private endAngle: number = -90 - 0.000001;
        private currentStep: {value: number} = {value: 0};

        constructor(windowRevive: WindowRevive) {
            super(windowRevive.game, null);
            this.windowRevive = windowRevive;

            this.circle = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'reviveCircle0000'));
            this.circle.anchor.set(0.5);

            this.circleMask = this.add(this.game.make.graphics(-1, -3));
            this.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill()
            this.circle.mask = this.circleMask;

            this.heart = this.add(this.game.make.sprite(0, -25, Settings.GAME_ATLAS, 'iconRevive0000'));
            this.heart.anchor.set(0.5);

            this.timeLeftText = this.add(TextUtils.getText('9...', 0, 70, 65, '#FF5E40'));
        }

        update() {
            super.update();

            if(this.isActive()) {
                const secondsLeft: number = Math.ceil((1 - this.currentStep.value) * 10);
                this.timeLeftText.setText('' + TextUtils.convertMSToMSS(secondsLeft * 1000));
                this.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill()
            }
        }

        public startCountdown() {
            SoundController.instance.chokeMusicVolume(400);

            this.resetCountdown();
            this.circle.visible = true;
            this.circle.alpha = 1;
            this.heart.visible = true;
            this.timeLeftText.visible = true;
            this.countdownActive = true;
            this.game.add.tween(this.currentStep)
                .to({value: 1}, Settings.REVIVE_TIMER_DURATION, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.stopCountdown, this);

            this.heart.scale.set(0);
            this.game.add.tween(this.heart.scale)
                .to({x: 1, y: 1}, 600, Phaser.Easing.Back.Out, true)
                .onComplete.add(() =>  this.startHeartbeatAnimation());
        }

        private startHeartbeatAnimation() {
            this.game.tweens.removeFrom(this.heart.scale);
            this.heart.scale.set(1);
            const heartbeatTween: Phaser.Tween = this.game.add.tween(this.heart.scale)
                .to({x: 1.1, y: 1.1}, 100, Phaser.Easing.Sinusoidal.In, false, 0)
                .to({x: 1, y: 1}, 310, Phaser.Easing.Sinusoidal.Out, false)
                .to({x: 1.1, y: 1.1}, 100, Phaser.Easing.Sinusoidal.In, false, 25)
                .to({x: 1, y: 1}, 140, Phaser.Easing.Sinusoidal.Out, false)
                .to({x: 1, y: 1}, 650, Phaser.Easing.Sinusoidal.Out, false)
                .start()
                .repeatAll(-1);
            heartbeatTween.onLoop.add(() => SoundController.instance.playHeartBeatSound());
            heartbeatTween.onStart.add(() => SoundController.instance.playHeartBeatSound());
        }

        protected stopCountdown() {
            this.resetCountdown();
            this.windowRevive.reviveFailed(true);
        }

        public animateDisappearing(delay: number) {
            SoundController.instance.restoreMusicVolume(600);

            this.game.add.tween(this)
                .to({alpha: 0}, 200, Phaser.Easing.Linear.None, true, delay + 50)
                .onComplete.add(() => {
                    this.heart.visible = false;
                    this.timeLeftText.visible = false;
            });
            this.game.add.tween(this.scale)
                .to({x: 0.6, y: 0.6}, 200, Phaser.Easing.Back.In, true, delay + 50);

            this.game.add.tween(this.circle)
                .to({alpha: 0}, 200, Phaser.Easing.Sinusoidal.In, true, delay)
                .onComplete.add(() => this.circle.visible = false);
        }

        public resetCountdown() {
            this.game.tweens.removeFrom(this.currentStep);
            this.game.tweens.removeFrom(this.heart.scale);
            this.game.tweens.removeFrom(this.timeLeftText.scale);
            this.game.tweens.removeFrom(this.circle);
            this.timeLeftText.scale.set(1);
            this.heart.scale.set(1);
            this.currentStep.value = 0;
            this.countdownActive = false;
            this.circle.visible = false;
            this.circle.alpha = 1;
            this.circleMask.clear();
        }

        public isActive() : boolean {
            return this.countdownActive;
        }

    }
}