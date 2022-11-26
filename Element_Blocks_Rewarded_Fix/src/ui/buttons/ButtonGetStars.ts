namespace BlockPuzzle {
    export class ButtonGetStars extends Phaser.Group {

        public button: Phaser.Button;
        public numStarsText: BitmapTextField;
        public isActive: boolean = false;
        public starsAmount: number = Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT;

        constructor() {
            super(App.instance, null);

            this.button = this.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonGetStars', 0, 0, 1, this.getStarsClicked, this));

            this.numStarsText = this.add(new BitmapTextField('+' + this.starsAmount,  Settings.GAME_ATLAS, 'Gold', 0.42, 0.5, 0.5, 1));
            this.numStarsText.position.set(-20, 3);

            this.visible = false;
            this.isActive = false;
        }

        protected getStarsClicked() {
            if(Settings.ENABLE_API) {
                if(APIUtils.instance.hasRewardedVideo()) {
                    Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
                    APIUtils.instance.showRewardedVideo(() => this.giveReward());
                }
            } else {
                Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
                this.giveReward();
            }

        }

        private giveReward() {
            StarsManager.instance.pickupStars(this.starsAmount);
            this.starsAmount += Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP;
            this.numStarsText.changeText('+' + this.starsAmount, true);
            this.hide();
        }

        public activate() {
            this.isActive = true;
            this.visible = true;
            this.button.inputEnabled = true;
        }

        public hide() {
            this.isActive = false;
            this.visible = false;
        }

        update() {
            super.update();

            if(!this.isActive && Settings.GET_STARS_BUTTON_ENABLED && Settings.ENABLE_API && +new Date().getTime() - Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP > Settings.GET_STARS_BUTTON_COOLDOWN * 1000) {
                if(APIUtils.instance.hasRewardedVideo()) {
                   this.activate();
                }
            }
        }
    }
}