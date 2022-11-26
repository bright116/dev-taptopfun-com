namespace BlockPuzzle {
    export class RenderUtils {
        public static detectRenderMode():number {
            const isIE:boolean = window.navigator.userAgent.indexOf('MSIE ') > 0 || window.navigator.userAgent.indexOf('Trident/') > 0;
            const isFirefox:boolean = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            const isIPhone: boolean = window.navigator.userAgent.indexOf('iPhone ') > -1;
            return isIE || isFirefox || isIPhone ? Phaser.CANVAS : Phaser.AUTO;
        }
    }
}