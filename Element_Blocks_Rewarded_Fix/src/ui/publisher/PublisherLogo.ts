namespace BlockPuzzle {
    export class PublisherLogo extends Phaser.Sprite {

        constructor(x: number, y: number) {
            super(App.instance, x, y, 'more_games');
            this.anchor.set(0.5);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.publisherLogoClicked, this);
        }

        protected publisherLogoClicked() {
            App.instance.navigateToSponsor();
        }
    }
}
