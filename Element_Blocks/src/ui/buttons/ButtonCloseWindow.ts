namespace BlockPuzzle {
    export class ButtonCloseWindow extends Phaser.Group {

        public parentWindow: AbstractWindow;
        public container: Phaser.Group;
        public button: Phaser.Button;

        constructor(parentWindow: AbstractWindow, actionHandler: Function, actionHandlerContext: any) {
            super(parentWindow.game);
            this.parentWindow = parentWindow;

            this.container = this.add(this.game.make.group());
            this.button = this.container.add(ButtonUtils.createSimpleButton(Settings.GAME_ATLAS, 'buttonClose', 0, 0, 1, actionHandler, actionHandlerContext));
        }

        public resize(dx: number, dy: number) {
            this.position.set(this.parentWindow.windowManager.windowBounds.right + dx, this.parentWindow.windowManager.windowBounds.top + dy);
        }

    }
}