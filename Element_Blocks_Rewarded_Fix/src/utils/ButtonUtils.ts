namespace BlockPuzzle {
    export class ButtonUtils {
        public static createButton(atlasName:string, spriteName:string, x:number, y:number, callback:Function, callbackContext:any): Phaser.Button {
            let button:Phaser.Button = new Phaser.Button(App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0001', spriteName + '0000', spriteName + '0002', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }

        public static createOneFrameButton(atlasName:string, spriteName:string, x:number, y:number, callback:Function, callbackContext:any): Phaser.Button {
            let button:Phaser.Button = new Phaser.Button(App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }

        public static createSimpleButton(atlasName:string, spriteName:string, x:number, y:number, startScale:number, callback:Function, callbackContext:any, playClickSound: boolean = true): Phaser.Button {
            let button:Phaser.Button = new Phaser.Button(App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.scale.set(startScale);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = false;

            button["overTween"] = App.instance.add.tween(button.scale).to({x: startScale * 1.05, y: startScale * 1.05}, 100);
            button["outTween"] = App.instance.add.tween(button.scale).to({x: startScale, y: startScale}, 100);
            button["downTween"] = App.instance.add.tween(button.scale).to({x: startScale *  0.95, y: startScale *  0.95}, 50).to({x:startScale, y:startScale}, 50);
            button.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
            button.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
            button.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);
            if(playClickSound) {
                button.events.onInputDown.add(() => SoundController.instance.playClickSound(), 0);
            }

            button["setScale"] = function(value) {
                button.scale.set(value);
                button["overTween"] = App.instance.add.tween(button.scale).to({x: value * 1.05, y: value * 1.05}, 100);
                button["outTween"] = App.instance.add.tween(button.scale).to({x: value, y: value}, 100);
                button["downTween"] = App.instance.add.tween(button.scale).to({x: value *  0.95, y: value *  0.95}, 50).to({x:value, y:value}, 50);
            };

            return button;
        }

        public static mouseOverHandler(caller:any) {
            caller["overTween"].start();
        }

        public static mouseOutHandler(caller:any) {
            caller["outTween"].start();
        }

        public static mouseDownHandler(caller:any) {
            caller["downTween"].start();
        }
    }
}