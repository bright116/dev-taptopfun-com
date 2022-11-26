namespace BlockPuzzle {
    export abstract class AbstractUIScrollbar extends Phaser.Group {

        protected value: number;
        protected prevValue: number = 0.5;

        protected scrollerContainer: Phaser.Group;
        protected pad: Phaser.Sprite;
        protected bar: Phaser.Sprite;
        protected barMask: Phaser.Graphics;
        protected slider: Phaser.Sprite;
        protected shadow: Phaser.Sprite;
        protected icon: Phaser.Sprite;

        private sliderDx: number = 0;

        constructor() {
            super(App.instance);

            this.buildChildren();
            this.initValue();
        }

        protected buildChildren() {
            this.buildScrollerContainer();
            this.buildPad();
            this.buildBar();
            this.buildSlider();
            this.buildShadow();
            this.buildIcon();
            this.addIconListeners();
        }


        protected setInitialValue(value: number) {
            this.setValue(value, true);
            this.prevValue = this.value;
        }

        protected buildScrollerContainer() {
            this.scrollerContainer = this.add(this.game.make.group());
            this.scrollerContainer.position.set(58, 0);
        }

        protected buildPad() {
            this.pad = this.scrollerContainer.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'musicControlPad0000'));
            this.pad.anchor.set(0.5);
        }

        protected buildShadow() {
            this.shadow = this.scrollerContainer.add(this.game.make.sprite(-100, -3, Settings.GAME_ATLAS, 'controlBarShadow0000'));
            this.shadow.anchor.set(0.5);
        }

        protected buildBar() {
            this.bar = this.scrollerContainer.add(this.game.make.sprite(0, 0, Settings.GAME_ATLAS, 'musicControlBar0000'));
            this.bar.anchor.set(0.5);

            this.barMask = this.scrollerContainer.add(this.game.make.graphics(-this.pad.width / 2, 0));
            this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.pad.width, 40).endFill();

            this.bar.mask = this.barMask;
        }

        protected buildSlider() {
            this.slider = this.scrollerContainer.add(this.game.make.sprite(this.sliderDx, 0, Settings.GAME_ATLAS, 'musicControlSlider0000'));
            this.slider.anchor.set(0.2, 0.5);
            this.slider.hitArea = new Phaser.Rectangle(-60, -60, 120, 120);

            this.slider.inputEnabled = true;
            this.slider.input.allowVerticalDrag = false;
            this.slider.input.enableDrag(false, false, false, 0, new Phaser.Rectangle(-this.pad.width / 2 +  this.sliderDx, -this.slider.height, this.pad.width - this.sliderDx, this.slider.height  * 2));
            this.slider.events.onDragUpdate.add(this.handleSliderDrag, this);
            this.slider.events.onDragStop.add(this.handleSliderDrag, this);
        }

        protected updateBarMask() {
            this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.slider.x + this.pad.width / 2 + 20, 40).endFill();
        }

        protected handleSliderDrag() {
            const value: number = this.slider.x / (this.pad.width - this.sliderDx - this.slider.width) + 0.5;
            this.setValue(Phaser.Math.clamp(value, 0, 1))
        }

        protected addIconListeners() {
            this.icon.inputEnabled = true;
            this.icon.events.onInputDown.add(this.handleIconClicked, this);
        }

        protected handleIconClicked() {
             if(this.value == 0) {
                 this.setValue(this.prevValue);
             } else {
                 this.prevValue = this.value;
                 this.setValue(0);
             }
        }

        protected setValue(value: number, skipAnalytics: boolean = false) {
            this.value = value;
            this.slider.x = (value - 0.5) *  (this.pad.width - this.sliderDx - this.slider.width);
            this.updateBarMask();
            this.dispatchValueChanged(value, skipAnalytics);
        }


        protected abstract dispatchValueChanged(value: number, skipAnalytics: boolean);

        protected abstract buildIcon();

        protected abstract initValue();

    }
}