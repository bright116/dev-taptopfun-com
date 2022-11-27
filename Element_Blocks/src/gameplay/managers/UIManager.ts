namespace BlockPuzzle {
    export class UIManager extends AbstractManager {

        protected topContainer: Phaser.Group;
        protected buttonAchievements: ButtonAchievements;
        protected buttonSettings: Phaser.Button;
        public scoreCounter: ScoreCounter;
        public starsCounter: StarsCounter;
        public multiplierBar: MultiplierBar;
        public powerupContainer: PowerupContainer;
        public famobiLogo: Phaser.Image;
        public copyrightText: Phaser.Text;

        constructor(level: Level) {
            super(level);

            this.buildContent();
        }

        protected buildContent() {
            this.famobiLogo = this.add(this.game.make.image(0, 0, 'famobi-logo'));
            this.famobiLogo.anchor.set(1, 1);
            this.famobiLogo.scale.set(0.2);
            this.famobiLogo.alpha = 0.85;

            this.copyrightText = this.add(TextUtils.getText('© Famobi', 0, 0, 28, '#FFFFFF', 'Russo One'));
            this.copyrightText.alpha = 0.85;

            this.buttonAchievements = this.add(new ButtonAchievements(this.level));
            this.buttonSettings = this.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonSettings', 0, 0, 1, this.settingsClicked, this,));
            this.topContainer = this.add(this.game.make.group());
            this.scoreCounter = this.topContainer.add(new ScoreCounter(this));
            this.starsCounter = this.topContainer.add(new StarsCounter(this));
            this.multiplierBar = this.topContainer.add(new MultiplierBar(this));
            this.powerupContainer = this.add(new PowerupContainer(this));
        }

        resizeLandscape() {
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();

            this.buttonAchievements.position.set(this.level.windowBounds.left + availableBounds.width / 2, this.level.windowBounds.top + 70);
            this.buttonSettings.position.set(this.level.windowBounds.right -  availableBounds.width / 2, this.level.windowBounds.top + 65);
            this.scoreCounter.position.set(-65, -50);
            this.multiplierBar.position.set(-65, -50);
            this.starsCounter.position.set(-65, 50);

            this.buttonAchievements["setScale"](1.18);
            this.buttonSettings["setScale"](1.18);

            this.topContainer.position.set(availableBounds.x, availableBounds.y);
            this.topContainer.scale.set(Math.min(1.25, availableBounds.width / this.topContainer.getLocalBounds().width));

            this.famobiLogo.visible = false
            this.famobiLogo.anchor.set(1, 1);
            this.famobiLogo.position.copyFrom(this.level.windowBounds.getPosition(1, 1, 3, 3));

            this.copyrightText.anchor.set(1, 1);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 1, -5, 0));

            this.buttonAchievements.resizeLandscape();
            this.powerupContainer.resize();
        }

        resizeSquared() {
            this.buttonAchievements.position.set(this.level.windowBounds.left + 95, this.level.windowBounds.top + 60);
            this.buttonSettings.position.set(this.level.windowBounds.right - 88, this.level.windowBounds.top + 60);
            this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 55));
            this.topContainer.scale.set(0.95);
            this.scoreCounter.position.set(-this.level.windowBounds.width * 0.22, 0);
            this.multiplierBar.position.set(-this.level.windowBounds.width * 0.22, 0);
            this.starsCounter.position.set(this.level.windowBounds.width * 0.06, 0);

            this.buttonAchievements["setScale"](1.1);
            this.buttonSettings["setScale"](1.1);

            this.buttonAchievements.resizeSquared();
            this.powerupContainer.resize();

            this.copyrightText.anchor.set(1, 1);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 1, -5, 0));

            this.famobiLogo.visible = false;
        }

        resizePortrait() {
            const availableBounds: Phaser.Rectangle = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();

            this.buttonAchievements.position.set(this.level.windowBounds.left + 65, this.level.windowBounds.down - 65);
            this.buttonSettings.position.set(this.level.windowBounds.right - 65, this.level.windowBounds.down - 65);
            this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 0))
            this.topContainer.y = availableBounds.y;
            this.topContainer.scale.set(1);
            this.scoreCounter.position.set(-this.level.windowBounds.width * 0.3, 0);
            this.multiplierBar.position.set(-this.level.windowBounds.width * 0.3, 0);
            this.starsCounter.position.set(this.level.windowBounds.width * 0.1, 0);

            this.buttonAchievements["setScale"](1.1);
            this.buttonSettings["setScale"](1.1);

            this.buttonAchievements.resizePortrait();
            this.powerupContainer.resize();

            this.famobiLogo.visible = false;
            this.famobiLogo.anchor.set(1, 0);
            this.famobiLogo.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -3, -1));

            this.copyrightText.anchor.set(1, 0);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -5, 1));
        }

        public levelFinished() {
            this.powerupContainer.hidePowerups();
        }


        /**
         * EVENT LISTENERS
         */

        protected settingsClicked() {
            if(Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SETTINGS);
            }
            WindowManager.instance.showSettings();
        }
    }
}