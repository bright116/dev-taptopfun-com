namespace BlockPuzzle {
    export class TextUtils {

        public static getText(text: string, x: number, y: number, fontSize: number, color: string, fontFamily: string = Settings.DEFAULT_FONT_FAMILY, fontWidth: string = null): Phaser.Text {
            let textField: Phaser.Text = new Phaser.Text(App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(0.5, 0.5);
            return textField;
        }

        public static getBitmapText(text: string, x: number, y: number, fontSize: number, color: number = 0xFFFFFF, family: string = Settings.DEFAULT_FONT_FAMILY): Phaser.BitmapText {
            let textField: Phaser.BitmapText = new Phaser.BitmapText(App.instance, x, y, family, text, fontSize, "center");
            textField.anchor.setTo(0.5, 0.5);
            textField.tint = color;
            return textField;
        }

        public static getShadowText(text: string, x: number, y: number, fontSize: number, color: string, shadowColor: string = "#000000", shadowX: number = 0, shadowY: number = 2, anchorX: number = 0.5, anchorY: number = 0.5, fontFamily: string = Settings.DEFAULT_FONT_FAMILY, fontWidth: string = null): Phaser.Text {
            let textField: Phaser.Text = new Phaser.Text(App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(anchorX, anchorY);
            textField.setShadow(shadowX, shadowY, shadowColor, 0);
            return textField;
        }

        public static getStyledText(text: string, x: number, y: number, fontSize: number, color: string, strokeColor: string, strokeThinkness: number = 4, fontFamily: string = Settings.DEFAULT_FONT_FAMILY, fontWidth: string = null): Phaser.Text {
            let textField: Phaser.Text = new Phaser.Text(App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                stroke: strokeColor,
                strokeThickness: strokeThinkness,
                align: "center"
            });
            textField.setShadow(0, 2, strokeColor, 0);
            textField.anchor.set(0.5, 0.5);
            return textField;
        }

        public static convertMSToHumanTime(milliseconds: number): string {
            let seconds: number = Math.floor(milliseconds / 1000);
            let minutes: number = Math.floor(seconds / 60);
            let restSeconds: number = seconds - minutes * 60;

            return (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }

        public static convertMSToMSS(milliseconds: number): string {
            let seconds: number = Math.floor(milliseconds / 1000);
            let minutes: number = Math.floor(seconds / 60);
            let restSeconds: number = seconds - minutes * 60;

            return minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }

        public static normalizeTime(seconds: number): string {
            let restSeconds: number = seconds;
            let hours: number = Math.floor(restSeconds / 3600);
            restSeconds %= 3600;
            let minutes: number = Math.floor(restSeconds / 60);
            restSeconds %= 60;

            return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }

    }
}