///<reference path="abstract/CloseableWindow.ts"/>
namespace BlockPuzzle {
    export class WindowAchievements extends CloseableWindow {

        protected itemsContainer: Phaser.Group;
        protected achievementPanels: Map<AchievementType, AchievementPanel>;

        constructor(windowManager: WindowManager) {
            super(windowManager, WindowHeadingBackplateType.SILVER, 'iconHeadingAchievements', Settings.WINDOW_BACKGROUND_ALPHA);

            StarsManager.instance.onStarAdded.add(this.handleStarAdded, this);
        }

        protected buildContent() {
            this.itemsContainer = this.contentContainer.add(this.game.make.group());
            this.achievementPanels = new Map<AchievementType, AchievementPanel>();

            Object.keys(AchievementType).filter(value => !isNaN(+value)).map(value => +value).forEach(key => {
                this.achievementPanels.set(key, this.itemsContainer.add(new AchievementPanel(this, key, ((key - 1) % 3 - 1) * 185, (Math.floor((key - 1) / 3) - 1) * 200)));
            })
        }

        protected resizeContent() {
            super.resizeContent();
            this.itemsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55 + 90);
        }

        protected updateAchievementPanels() {
            this.achievementPanels.forEach(panel => panel.updateView());
        }

        public show() {
            super.show();

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_OTHER, "ACHIEVEMENTS");
            }

            this.updateAchievementPanels();
        }


        public animateAppearing(delay: number) {
            this.achievementPanels.forEach((panel, key) => {
                panel.alpha = 1;
                this.game.add.tween(panel)
                    .from({alpha: 0, y: '-50'}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);
                panel.scale.set(0.8);
                this.game.add.tween(panel.scale)
                    .to({x: 1, y: 1}, 250, Phaser.Easing.Back.Out, true, delay + key * 25);
            });
        }

        public animateDisappearing(delay: number, onClosedCallback: Function) {
            super.animateDisappearing(delay, onClosedCallback);

            this.achievementPanels.forEach((panel, key) => {
                this.game.add.tween(panel)
                    .to({alpha: 0}, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);
                this.game.add.tween(panel.scale)
                    .to({x: 0.55, y: 0.55}, 250, Phaser.Easing.Back.In, true, delay + key * 25);
            });

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }

        protected resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.itemsContainer, false);
            this.game.tweens.removeFrom(this.itemsContainer.scale, false);
        }

        /**
         * INPUT HANDLERS
         */

        private handleStarAdded() {
            if(this.achievementPanels) {
                const totalStarsAchievement: AchievementPanel = this.achievementPanels.get(AchievementType.TOTAL_STARS);
                if(totalStarsAchievement) {
                    totalStarsAchievement.updateView();
                }
            }
        }

        protected onCloseClicked() {

        }

        protected continueClicked() {
            this.animateDisappearing(0, () => {})
        }


    }
}