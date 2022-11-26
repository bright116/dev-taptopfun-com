namespace BlockPuzzle {
    export class AchievementInformer extends Phaser.Group {

        public readonly achievementsButton: ButtonAchievements;
        public readonly level: Level;

        public active: boolean = false;

        private container: Phaser.Group;

        private informerPad: Phaser.Sprite;
        private achievementSprite: Phaser.Sprite;
        private badgesSprite: Phaser.Sprite;

        private visibilityTimer: number = 0;
        private targetY: number = -100;

        constructor(achievementsButton: ButtonAchievements) {
            super(achievementsButton.game);
            this.achievementsButton = achievementsButton;
            this.level = achievementsButton.level;

            this.buildChildren();
        }

        protected buildChildren() {
            this.container = this.add(this.game.make.group());
            this.container.position.set(0, -100);

            this.informerPad = this.container.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'achievementInformerPad0000'));
            this.informerPad.anchor.set(0.5);
            this.informerPad.alpha = 0.75;

            this.informerPad.inputEnabled = true;
            this.informerPad.events.onInputDown.add(this.openAchievements, this);

            this.achievementSprite = this.container.add(this.game.make.sprite(0, -5, Settings.GAME_ATLAS, 'achievement10000'));
            this.achievementSprite.anchor.set(0.5);

            this.badgesSprite = this.container.add(this.game.make.sprite(40, 30, Settings.GAME_ATLAS, 'achievementBadges0000'));
            this.badgesSprite.anchor.set(0.5);

            this.visible = false;
        }

        public show(achievementModel: AchievementModel) {
            this.game.tweens.removeFrom(this.container.scale, false);
            this.game.tweens.removeFrom(this.container, false);

            this.game.tweens.removeFrom(this.achievementSprite);
            this.game.tweens.removeFrom(this.achievementSprite.scale);

            this.game.tweens.removeFrom(this.badgesSprite);
            this.game.tweens.removeFrom(this.badgesSprite.scale);

            this.visible = true;
            this.active = true;
            this.visibilityTimer = Settings.ACHIEVEMENT_INFORMER_VISIBILITY_DURATION;

            this.container.y = 0;
            this.container.alpha = 0;
            this.game.add.tween(this.container)
                .to({alpha: 1}, 250, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.container)
                .to({y: this.targetY}, 280, Phaser.Easing.Back.Out, true);
            this.container.scale.set(0.6);
            this.game.add.tween(this.container.scale)
                .to({x: 1, y: 1}, 280, Phaser.Easing.Sinusoidal.Out, true);

            this.achievementSprite.scale.set(0);
            this.game.add.tween(this.achievementSprite.scale)
                .to({x: 0.7, y: 0.7}, 270, Phaser.Easing.Back.Out, true, 30);

            this.achievementSprite.y = -3;
            this.game.add.tween(this.achievementSprite)
                .to({y: -7}, 350, Phaser.Easing.Sinusoidal.InOut, true, 180, -1, true);


            this.badgesSprite.alpha = 0;
            this.game.add.tween(this.badgesSprite)
                .to({alpha: 1}, 160, Phaser.Easing.Sinusoidal.In, true, 100);
            this.badgesSprite.scale.set(0);
            this.game.add.tween(this.badgesSprite.scale)
                .to({x: 1, y: 1}, 200, Phaser.Easing.Back.Out, true, 100);

            this.achievementSprite.frameName = 'achievement' + achievementModel.key + '0000';
            this.badgesSprite.frameName =  'achievementBadges000' + Phaser.Math.clamp(AchievementsManager.getAchievementLevel(achievementModel) - 1, 0, 2);
        }

        public hide() {
            this.active = false;
            this.game.tweens.removeFrom(this.container.scale, false);
            this.game.tweens.removeFrom(this.container, false);

            this.game.add.tween(this.container)
                .to({alpha: 0}, 150, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.container)
                .to({y: 0}, 220, Phaser.Easing.Sinusoidal.Out, true);
            this.game.add.tween(this.container.scale)
                .to({x: 0.5, y: 0.5}, 150, Phaser.Easing.Back.Out, true)
                .onComplete.add(() => this.visible = false);
        }

        private openAchievements() {
            this.achievementsButton.handleClick();
        }


        public resizeLandscape() {
            this.targetY = 110;
            this.game.add.tween(this.container)
                .to({y: this.targetY}, 50, Phaser.Easing.Sinusoidal.Out, true);
        }

        public resizeSquared() {
            this.targetY = 110;
            this.game.add.tween(this.container)
                .to({y: this.targetY}, 50, Phaser.Easing.Sinusoidal.Out, true);
        }

        public resizePortrait() {
            this.targetY = -110;
            this.game.add.tween(this.container)
                .to({y: this.targetY}, 50, Phaser.Easing.Sinusoidal.Out, true);
        }

        update() {
            if(this.visible && this.active) {
                if(this.visibilityTimer > 0) {
                    this.visibilityTimer-= this.game.time.elapsedMS;
                    if(this.visibilityTimer <= 0) {
                        this.hide();
                    }
                }
            }
        }

    }
}