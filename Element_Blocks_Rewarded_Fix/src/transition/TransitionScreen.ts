namespace BlockPuzzle {
    export class TransitionScreen extends Phaser.Group {

        private background: Phaser.Sprite;
        private targetStateName: string;
        private callback: Function;

        public isInitialized: boolean = false;

        private static _instance: TransitionScreen = null;
        public static get instance(): TransitionScreen {
            return TransitionScreen._instance ? TransitionScreen._instance : TransitionScreen._instance = new TransitionScreen();
        }

        constructor() {
            super(App.instance, null);
        }

        private buildChildren() {
            this.background = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'transitionSquare0000'));
            this.background.anchor.set(0.5);
            this.background.alpha = 0.01;
            this.background.inputEnabled = true;
            this.background.events.onInputDown.add(() => console.log('Transition Screen: input locked'));
        }

        public init() {
            this.isInitialized = true;
            this.buildChildren();
        }

        public resize() {
            if (this.isInitialized) {
                this.position.set(this.game.world.centerX, this.game.world.centerY);
                this.background.width = this.game.width + 100;
                this.background.height = this.game.height + 100;
            }
        }

        public changeState(newState: string, callback: Function = null) {
            this.targetStateName = newState;
            this.callback = callback;
            this.show();
        }

        private show() {
            this.game.stage.addChild(this);
            this.visible = true;

            this.resize();

            this.game.add.tween(this.background)
                .to({alpha: 1}, 140, Phaser.Easing.Quadratic.Out, true)
                .onComplete.add(this.close, this);
        }

        private close() {
            if (this.targetStateName) {
                this.game.state.start(this.targetStateName, true, false);
                WindowManager.instance.hideAll();
            }

            if (this.callback) {
                this.callback();
                this.callback = null;
            }

            this.proceedClosing();
        }

        private proceedClosing() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            } else {
                this.game.stage.addChild(this);
            }

            setTimeout(() => {
                this.game.add.tween(this.background)
                    .to({alpha: 0}, 120, Phaser.Easing.Linear.None, true)
                    .onComplete.add(this.onTransitionFinished, this);
            }, 20);

            setTimeout(() => {
                this.onTransitionFinished();
            }, 400);
        }

        private onTransitionFinished() {
            this.hide();
        }

        private hide() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.removeChild(this);
            }
            this.visible = false;
        }


    }
}