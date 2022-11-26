namespace BlockPuzzle {
    export class AchievementPanel extends Phaser.Group {

        public readonly windowAchievements: WindowAchievements;

        protected icon: Phaser.Sprite;
        protected progressBarContainer: Phaser.Group;
        protected progressPad: Phaser.Sprite;
        protected progressBar: Phaser.Sprite;
        protected progressBarMask: Phaser.Graphics;
        protected progressText: Phaser.Text;
        protected maxText: Phaser.Sprite;
        protected badges: Phaser.Sprite;
        protected buttonClaimReward: ButtonClaimReward;

        private currentReward: number = 0;

        public achievementKey: AchievementType;

        constructor(windowAcheivements: WindowAchievements, achievementKey: AchievementType, x: number, y: number) {
            super(windowAcheivements.game);
            this.windowAchievements = windowAcheivements;
            this.achievementKey = achievementKey;
            this.position.set(x, y);

            this.buildContent();
        }

        public updateView() {
            const achievementModel: AchievementModel = AchievementsManager.instance.getAchievementModel(this.achievementKey);
            const currentLevel: number = AchievementsManager.getAchievementLevel(achievementModel);

            const currentValue: number = currentLevel > 0 ? currentLevel < 3 ? achievementModel.currentValue - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.currentValue;
            const displayedValue: number = currentLevel > 0 ? currentLevel < 3 ?  achievementModel.currentValue : achievementModel.requiredValues[2] : achievementModel.currentValue;
            const targetValue: number = currentLevel > 0 ? currentLevel < 3 ? achievementModel.requiredValues[currentLevel] - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.requiredValues[0];
            const displayTargetValue: number = currentLevel > 0 ? currentLevel < 3 ?  achievementModel.requiredValues[currentLevel] : achievementModel.requiredValues[2]  : achievementModel.requiredValues[0] ;
            const currentProgress: number = currentLevel < 3 ? currentValue / targetValue : 1;

            this.buttonClaimReward.visible = false;
            this.progressBarContainer.visible = true;
            this.badges.visible = achievementModel.rewardClaimed[0] || achievementModel.rewardClaimed[1] || achievementModel.rewardClaimed[2];
            this.badges.frameName =  achievementModel.rewardClaimed[2]  ? 'achievementBadges0002' :  achievementModel.rewardClaimed[1] ?  'achievementBadges0001' : 'achievementBadges0000';

            /* update icon */
            this.icon.frameName = 'achievement' +  this.achievementKey + '000' + (currentLevel > 0 ? '0' : '1');

            /* update bar */
            this.progressBarMask.x = this.progressBar.x - (1 - currentProgress) * this.progressBar.width;

            /* update text */
            if(currentLevel < 3) {
                this.progressBarContainer.visible = true;
                this.maxText.visible = false;
                this.progressText.setText(`${displayedValue}/${displayTargetValue}`);
            } else {
                this.progressBarContainer.visible = false;
                this.maxText.visible = true;
            }

            /* show/hide claim button */
            if(achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[0];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            } else if(achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[1];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            } else if(achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[2];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            }
        }


        private buildContent() {
            this.icon = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'achievement' + this.achievementKey + '0000'));
            this.icon.anchor.set(0.5);

            this.progressBarContainer = this.add(this.game.make.group());
            this.progressBarContainer.position.set(0, 85);

            this.progressPad = this.progressBarContainer.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'achievementProgressPad0000'));
            this.progressPad.anchor.set(0.5);

            this.progressBar = this.progressBarContainer.add(this.game.make.sprite(-this.progressPad.width / 2 + 5, -2, Settings.GAME_ATLAS, 'achievementProgressBar0000'));
            this.progressBar.anchor.set(0, 0.5);

            this.progressBarMask = this.progressBarContainer.add(this.game.make.graphics(this.progressBar.x, this.progressBar.y - this.progressBar.height / 2));
            this.progressBarMask.beginFill(0xFFFFFF, 0.5).drawRect(0, 0, this.progressBar.width, this.progressBar.height).endFill();
            this.progressBar.mask = this.progressBarMask;

            this.progressText = this.progressBarContainer.add(TextUtils.getText('0/1000', 0, 1, 19, '#DAFFF4'));

            this.maxText = this.add(this.game.make.sprite(0, 80, Settings.GAME_ATLAS, 'achievementMax0000'));
            this.maxText.anchor.set(0.5);

            this.badges = this.add(this.game.make.sprite(68, 46, Settings.GAME_ATLAS, 'achievementBadges0000'));
            this.badges.anchor.set(0.5);

            this.buttonClaimReward = this.add(new ButtonClaimReward(this, '+89', 1, this.claimRewardClicked, this));
            this.buttonClaimReward.position.set(3, 85);
        }

        protected claimRewardClicked() {
            StarsManager.instance.pickupStars(this.currentReward, true);
            this.currentReward = 0;

            const achievementModel: AchievementModel = AchievementsManager.instance.getAchievementModel(this.achievementKey);
            const currentLevel: number = AchievementsManager.getAchievementLevel(achievementModel);

            if(achievementModel) {
                if(achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
                    achievementModel.rewardClaimed[0] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({x: 1, y: 1}, 300, Phaser.Easing.Back.Out, true, 0);
                } else if(achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
                    achievementModel.rewardClaimed[1] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({x: 1, y: 1}, 300, Phaser.Easing.Back.Out, true, 0);
                } else if(achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
                    achievementModel.rewardClaimed[2] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({x: 1, y: 1}, 300, Phaser.Easing.Back.Out, true, 0);
                }
                LocalStorageController.instance.save();
            }
            this.updateView();
        }
    }
}