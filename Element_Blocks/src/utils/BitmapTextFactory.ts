namespace BlockPuzzle {
    export class BitmapTextFactory {

        public static getLetter(textKey: string, atlasKey: string, letterKey: string, letterFrame: number): Phaser.Sprite {
            let spriteName: string = null;
            switch (letterKey) {
                case '0':
                    spriteName = 'text' + textKey + '_' + '0' + '000' + letterFrame;
                    break;
                case '1':
                    spriteName = 'text' + textKey + '_' + '1' + '000' + letterFrame;
                    break;
                case '2':
                    spriteName = 'text' + textKey + '_' + '2' + '000' + letterFrame;
                    break;
                case '3':
                    spriteName = 'text' + textKey + '_' + '3' + '000' + letterFrame;
                    break;
                case '4':
                    spriteName = 'text' + textKey + '_' + '4' + '000' + letterFrame;
                    break;
                case '5':
                    spriteName = 'text' + textKey + '_' + '5' + '000' + letterFrame;
                    break;
                case '6':
                    spriteName = 'text' + textKey + '_' + '6' + '000' + letterFrame;
                    break;
                case '7':
                    spriteName = 'text' + textKey + '_' + '7' + '000' + letterFrame;
                    break;
                case '8':
                    spriteName = 'text' + textKey + '_' + '8' + '000' + letterFrame;
                    break;
                case '9':
                    spriteName = 'text' + textKey + '_' + '9' + '000' + letterFrame;
                    break;
                case '.':
                    spriteName = 'text' + textKey + '_' + 'point' + '000' + letterFrame;
                    break;
                case '+':
                    spriteName = 'text' + textKey + '_' + 'plus' + '000' + letterFrame;
                    break;
                case '*':
                    spriteName = 'text' + textKey + '_' + 'multiply' + '000' + letterFrame;
                    break;
                case '=':
                    spriteName = 'text' + textKey + '_' + 'equals' + '000' + letterFrame;
                    break;
                case '%':
                    spriteName = 'text' + textKey + '_' + 'percent' + '000' + letterFrame;
                    break;
                case 'a':
                    spriteName = 'text' + textKey + '_' + 'a' + '000' + letterFrame;
                    break;
                case 'b':
                    spriteName = 'text' + textKey + '_' + 'b' + '000' + letterFrame;
                    break;
                case 'c':
                    spriteName = 'text' + textKey + '_' + 'c' + '000' + letterFrame;
                    break;
                case 'd':
                    spriteName = 'text' + textKey + '_' + 'd' + '000' + letterFrame;
                    break;
                case 'e':
                    spriteName = 'text' + textKey + '_' + 'e' + '000' + letterFrame;
                    break;
                case 'f':
                    spriteName = 'text' + textKey + '_' + 'f' + '000' + letterFrame;
                    break;
                case 'g':
                    spriteName = 'text' + textKey + '_' + 'g' + '000' + letterFrame;
                    break;
                case 'h':
                    spriteName = 'text' + textKey + '_' + 'h' + '000' + letterFrame;
                    break;
                case 'i':
                    spriteName = 'text' + textKey + '_' + 'i' + '000' + letterFrame;
                    break;
                case 'j':
                    spriteName = 'text' + textKey + '_' + 'j' + '000' + letterFrame;
                    break;
                case 'k':
                    spriteName = 'text' + textKey + '_' + 'k' + '000' + letterFrame;
                    break;
                case 'l':
                    spriteName = 'text' + textKey + '_' + 'l' + '000' + letterFrame;
                    break;
                case 'm':
                    spriteName = 'text' + textKey + '_' + 'm' + '000' + letterFrame;
                    break;
                case 'n':
                    spriteName = 'text' + textKey + '_' + 'n' + '000' + letterFrame;
                    break;
                case 'o':
                    spriteName = 'text' + textKey + '_' + 'o' + '000' + letterFrame;
                    break;
                case 'p':
                    spriteName = 'text' + textKey + '_' + 'p' + '000' + letterFrame;
                    break;
                case 'q':
                    spriteName = 'text' + textKey + '_' + 'q' + '000' + letterFrame;
                    break;
                case 'r':
                    spriteName = 'text' + textKey + '_' + 'r' + '000' + letterFrame;
                    break;
                case 's':
                    spriteName = 'text' + textKey + '_' + 's' + '000' + letterFrame;
                    break;
                case 't':
                    spriteName = 'text' + textKey + '_' + 't' + '000' + letterFrame;
                    break;
                case 'u':
                    spriteName = 'text' + textKey + '_' + 'u' + '000' + letterFrame;
                    break;
                case 'v':
                    spriteName = 'text' + textKey + '_' + 'v' + '000' + letterFrame;
                    break;
                case 'w':
                    spriteName = 'text' + textKey + '_' + 'w' + '000' + letterFrame;
                    break;
                case 'x':
                    spriteName = 'text' + textKey + '_' + 'x' + '000' + letterFrame;
                    break;
                case 'y':
                    spriteName = 'text' + textKey + '_' + 'y' + '000' + letterFrame;
                    break;
                case 'z':
                    spriteName = 'text' + textKey + '_' + 'z' + '000' + letterFrame;
                    break;
                case '/':
                    spriteName = 'text' + textKey + '_' + 'slash' + '000' + letterFrame;
                    break;
                case ' ':
                    spriteName = 'text' + textKey + '_' + 'z' + '000' + letterFrame;
                    break;
                case '_':
                    spriteName = 'text' + textKey + '_' + 'point' + '000' + letterFrame;
                    break;
                case '?':
                    spriteName = 'text' + textKey + '_' + 'question' + '000' + letterFrame;
                    break;
            }

            if (!spriteName) {
                return null;
            }

            let sprite: Phaser.Sprite = new Phaser.Sprite(App.instance, 0, 0, atlasKey, spriteName);
            sprite.anchor.setTo(0, 0);
            sprite.alpha = letterKey === ' ' || letterKey == '_' ? 0 : 1;
            sprite.scale.x = letterKey === '_' ? 0.5 : 1;
            return sprite;
        }
    }
}