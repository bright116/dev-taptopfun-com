namespace BlockPuzzle {
    export class ButtonClaimReward extends Phaser.Group {

        public achievementPanel: AchievementPanel;

        protected container: Phaser.Group;

        protected backplate: Phaser.Sprite;
        protected rewardText: BitmapTextField;


        constructor(panel: AchievementPanel, reward: string, initialScale: number, actionHandler: Function, actionHandlerContext: any) {
            super(panel.game);
            this.achievementPanel = panel;

            this.container = this.add(this.game.make.group());

            /* backplate */
            this.backplate = this.container.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'buttonClaim0000'));
            this.backplate.anchor.setTo(0.5, 0.5);
            this.backplate.inputEnabled = true;
            this.backplate.events.onInputUp.add(actionHandler, actionHandlerContext);

            this.backplate["overTween"] = App.instance.add.tween(this.container.scale).to({x: 1.05, y: 1.05}, 100);
            this.backplate["outTween"] = App.instance.add.tween(this.container.scale).to({x: 1, y: 1 }, 100);
            this.backplate["downTween"] = App.instance.add.tween(this.container.scale).to({x: 0.95, y: 0.95}, 50).to({x: 1, y: 1}, 50);
            this.backplate.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
            this.backplate.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
            this.backplate.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);
            this.backplate.events.onInputDown.add(() => SoundController.instance.playRewardClaimedSound(), this);

            /* price text */
            this.rewardText = this.add(new BitmapTextField(reward,  Settings.GAME_ATLAS, 'Gold', 0.55, 0.5, 0.5, 1));
            this.rewardText.position.set(-17, -3);
        }

        public updateView(rewardText: string) {
            this.rewardText.changeText(rewardText);
            this.game.tweens.removeFrom(this.scale);
            this.scale.set(1);
            this.game.add.tween(this.scale)
                .to({x:1.04, y: 1.04}, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
        }
    }
}