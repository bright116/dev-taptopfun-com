namespace BlockPuzzle {
    export class ButtonAchievements extends Phaser.Group {

        public readonly level: Level;

        public button: Phaser.Button;
        public exclamationMark: Phaser.Sprite;
        public achievementInformer: AchievementInformer;

        constructor(level: Level) {
            super(level.game, null);
            this.level = level;

            this.button = this.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonAchievements', 0, 0, 1, this.handleClick, this));

            this.exclamationMark = this.add(this.game.make.sprite(25, 22, Settings.GAME_ATLAS));
            this.exclamationMark.anchor.set(0.5);
            this.exclamationMark.animations.add('twerking', Phaser.Animation.generateFrameNames('achievementsNotification', 0, 99, '', 4))
                .play(60, true);
            this.exclamationMark.visible = AchievementsManager.instance.hasAvailableRewards();

            this.achievementInformer = this.add(new AchievementInformer(this));

            AchievementsManager.instance.onAchievementCompleted.add(this.handleAchievementCompleted, this);
        }


        destroy() {
            AchievementsManager.instance.onAchievementCompleted.remove(this.handleAchievementCompleted, this);
            super.destroy();
        }

        protected handleAchievementCompleted(achievementModel: AchievementModel) {
            this.achievementInformer.show(achievementModel);
            if(this.exclamationMark.visible == false) {
                this.exclamationMark.visible = true;
            }
        }

        public handleClick() {
            if(this.achievementInformer.active) {
                this.achievementInformer.hide();
            }
            this.exclamationMark.visible  = false;
            WindowManager.instance.showAchievements();
        }

        public resizePortrait() {
            this.achievementInformer.resizePortrait();
        }

        public resizeSquared() {
            this.achievementInformer.resizeSquared();
        }

        public resizeLandscape() {
            this.achievementInformer.resizeLandscape();
        }

        public setScale(value: number) {
            this.button["setScale"](value);
        }


    }
}