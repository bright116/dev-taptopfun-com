namespace BlockPuzzle {
    export class BitmapTextField extends Phaser.Group {

        private valueHolder = {value: 0, targetValue: 0};
        public textValue: string;
        public textScale: number;
        public pivotX: number = 0.5;
        public pivotY: number = 0.5;
        public atlasKey: string = "";
        public styleKey: string = "";
        public letterSpacing: number = 0;
        public letterFrame: number = 0;
        public tintValue: number = 0;

        private internalScale: number = 1;

        constructor(textValue: string, atlasKey: string, styleKey: string, textScale: number = 1, pivotX: number = 0.5, pivotY: number = 0.5, letterSpacing: number = 0, letterFrame: number = 0, tintValue: number = 0xFFFFFF) {
            super(App.instance);
            this.atlasKey = atlasKey;
            this.styleKey = styleKey;
            this.letterSpacing = letterSpacing;
            this.letterFrame = letterFrame;
            this.textScale = textScale;
            this.pivotX = pivotX;
            this.pivotY = pivotY;
            this.tintValue = tintValue;

            this.changeText(textValue);
        }

        public changeText(textValue: string, force: boolean = false) {
            if (!force && this.textValue == textValue) {
                return;
            }
            this.textValue = textValue;
            this.removeAll(true);
            this.scale.set(1);


            for (let i: number = 0; i < textValue.length; i++) {
                let sprite: Phaser.Sprite = BitmapTextFactory.getLetter(this.styleKey, this.atlasKey, textValue.charAt(i), this.letterFrame);
                if (sprite) {
                    sprite.x = this.width + (i > 0 ?  this.letterSpacing : 0);
                    sprite.anchor.set(0, 0.5);
                    this.add(sprite);
                } else {
                    console.warn(`BitmapTextFactory.getSprite - letter '${textValue.charAt(i)}' not found in spritesheet`);
                }
            }

            const currentWidth: number = this.width;
            const currentHeight: number = this.height;
            this.children.forEach(child => child.position.set(child.x - this.pivotX * currentWidth, child.y - (this.pivotY - 0.5) * currentHeight));
            this.children.forEach(child => (<any>child).tint = this.tintValue);
            this.scale.set(this.textScale * this.internalScale);
        }

        public setColor(value: number) {
            this.tintValue = value;
            this.children.forEach(child => (<any>child).tint = this.tintValue);
        }

        public tweenText(initialValue: number, targetValue: number, duration: number, delay: number) {
            this.game.tweens.removeFrom(this.valueHolder);
            this.valueHolder.value = initialValue;
            this.valueHolder.targetValue = targetValue;
            this.game.add.tween(this.valueHolder)
                .to({value: targetValue}, duration, Phaser.Easing.Linear.None, true, delay)
                .onUpdateCallback(() => this.changeText('' + Math.floor(this.valueHolder.value)))
                .onComplete.add(() => this.changeText('' + Math.floor(this.valueHolder.targetValue)))
        }

        public tweenTextAdvanced(preffix: string, initialValue: number, targetValue: number, duration: number, delay: number, playCountingSound: boolean = false, countingSoundStates: string[] = ['Level']) {
            this.changeText('' + Math.floor(initialValue));
            if(initialValue == targetValue) {
                return;
            }
            let valueHolder = {value: initialValue};
            let textTween: Phaser.Tween = this.game.add.tween(valueHolder)
                .to({value: targetValue}, duration, Phaser.Easing.Linear.None, true, delay);
            textTween.onStart.add(() => {
                if (playCountingSound && countingSoundStates.indexOf(this.game.state.getCurrentState().key) != -1) {
                    SoundController.instance.startCountingSound();
                }
            });
            textTween.onUpdateCallback(() => this.changeText(preffix + Math.floor(valueHolder.value)));
            textTween.onComplete.add(() => {
                this.changeText( preffix + Math.floor(valueHolder.value));
                if (playCountingSound) {
                    SoundController.instance.stopCountingSound();
                }
            });
        }


    }
}