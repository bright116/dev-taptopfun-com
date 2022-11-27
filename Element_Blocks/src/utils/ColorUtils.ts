namespace BlockPuzzle {
    export class ColorUtils {

        public static tweenTint(spriteToTween: Phaser.Sprite, startColor: number, endColor: number, duration: number): void {
            let colorBlend = {step: 0};

            App.instance.add.tween(colorBlend).to({step: 100}, duration, Phaser.Easing.Linear.None, true)
                .onUpdateCallback(() => {
                    spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
                })
                .onComplete.add(() => spriteToTween.tint = endColor);
        };

        public static bounceTint(spriteToTween: Phaser.Sprite, startColor: number, endColor: number, duration: number): void {
            let colorBlend = {step: 10};

            App.instance.add.tween(colorBlend).to({step: 100}, duration, Phaser.Easing.Bounce.Out, true)
                .onUpdateCallback(() => {
                    spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
                })
                .onComplete.add(() => spriteToTween.tint = endColor);
        };
    }
}