///<reference path="AutoResizeableState.ts"/>
namespace BlockPuzzle {
    export class Level extends AutoResizeableState {

        public eventManager: EventManager;
        public dataManager: DataManager;
        public serviceManager: ServiceManager;
        public gameStateManager: GameStateManager;
        public boardManager: BoardManager;
        public figureManager: FigureManager;
        public uiManager: UIManager;
        public tutorialManager: TutorialManager;

        create() {

            ScoreManager.instance.reset();
            ScoreManager.instance.startRound();
            StarsManager.instance.reset();
            PowerupManager.instance.resetPrices();

            Analytics.instance.startLevel();

            if (Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
                if (!Settings.TUTORIAL_COMPLETED) {
                    window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_TUTORIAL);
                }
            }

            Analytics.instance.startLevel();

            this.createChildren();

            this.resize(this.game.width, this.game.height);
        }


        protected createChildren() {
            super.create();

            this.eventManager = this.addChild(new EventManager(this));
            this.dataManager = this.addChild(new DataManager(this));
            this.serviceManager = this.addChild(new ServiceManager(this));
            this.gameStateManager = this.addChild(new GameStateManager(this));
            this.boardManager = this.addChild(new BoardManager(this));
            this.figureManager = this.addChild(new FigureManager(this));
            this.uiManager = this.addChild(new UIManager(this));
            this.tutorialManager = this.addChild(new TutorialManager(this));

            this.resize(this.game.width, this.game.height);
        }

        resize(w: number, h: number) {
            super.resize(w, h);
            if (this.isInitialized) {
                this.eventManager.resize();
                this.dataManager.resize();
                this.gameStateManager.resize();
                this.serviceManager.resize();
                this.boardManager.resize();
                this.figureManager.resize();
                this.uiManager.resize();
                this.tutorialManager.resize();
            }
        }

        shutdown() {
            ScoreManager.instance.removeListeners();
            StarsManager.instance.removeListeners();

            this.eventManager.destroy();
            this.eventManager = null;

            this.dataManager.destroy();
            this.dataManager = null;

            this.gameStateManager.destroy();
            this.gameStateManager = null;

            this.serviceManager.destroy();
            this.serviceManager = null;

            this.figureManager.destroy();
            this.figureManager = null;

            this.boardManager.destroy();
            this.boardManager = null;

            this.uiManager.destroy();
            this.uiManager = null;

            this.tutorialManager.destroy();
            this.tutorialManager = null;

            super.shutdown();
        }


    }
}
