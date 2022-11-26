namespace BlockPuzzle {
    export class StarsCounter extends AbstractUICounter {

        protected buttonGetStars: ButtonGetStars;

        protected buildChildren() {
            this.pad = this.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);

            this.icon = this.add(this.game.make.sprite(5, 0, Settings.GAME_ATLAS, 'uiIconStar0000'));
            this.icon.anchor.set(0.5);

            this.textField = this.add(new BitmapTextField('0',  Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(95, 0);

            this.buttonGetStars = this.add(new ButtonGetStars());
            this.buttonGetStars.position.set(124, 44);

            this.updateStarsAmount(StarsManager.instance.getStarsAmount());

            StarsManager.instance.onStarAdded.add(this.dispatchStarAdded, this);
            StarsManager.instance.onStarsAmountChanged.add(this.updateStarsAmount, this);
        }


        private playStarIncreasingTween() {
            SoundController.instance.playStarReceivedSound();

            this.game.add.tween(this.textField.scale)
                .to({x: 1.3 / 2, y: 1.3 / 2}, 140, Phaser.Easing.Sinusoidal.Out, true, 0, 0, true);

            this.game.add.tween(this.icon.scale)
                .to({x: 1.45, y: 1.45}, 80, Phaser.Easing.Sinusoidal.Out, false)
                .to({x: 0.87, y: 0.87}, 200, Phaser.Easing.Sinusoidal.In, false)
                .to({x: 1, y: 1}, 60, Phaser.Easing.Sinusoidal.Out, false)
                .start();
        }

        private dispatchStarAdded(starsAmount: number) {
            this.updateStarsAmount(starsAmount);
            this.playStarIncreasingTween();
        }

        private updateStarsAmount(starsAmount: number) {
            this.textField.changeText('' + starsAmount);
        }

        destroy() {
            StarsManager.instance.onStarAdded.remove(this.dispatchStarAdded, this);
            StarsManager.instance.onStarsAmountChanged.remove(this.updateStarsAmount, this);
            super.destroy();
        }
    }
}