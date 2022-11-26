namespace src {
    import App = BlockPuzzle.App;
    import Settings = BlockPuzzle.Settings;

    export class TutorialManager {
        private static _instance: TutorialManager = null;
        public static get instance(): TutorialManager {
            return TutorialManager._instance ? TutorialManager._instance :
                TutorialManager._instance = new TutorialManager();
        }

        private tutorialHand: Phaser.Sprite;

        constructor() {

        }

        init() {
            this.tutorialHand = App.instance.make.sprite(0, 0, Settings.GAME_ATLAS, 'tutorialHand0000');
        }
    }
}