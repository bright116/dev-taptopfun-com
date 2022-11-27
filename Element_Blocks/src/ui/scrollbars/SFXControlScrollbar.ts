///<reference path="AbstractUIScrollbar.ts"/>
namespace BlockPuzzle {
    export class SFXControlScrollbar extends AbstractUIScrollbar {

        public initValue() {
            this.setInitialValue(SoundController.instance.getSFXVolume());
        }

        protected buildIcon() {
            this.icon = this.add(this.game.make.sprite(-100, -5, Settings.GAME_ATLAS, 'sfxControlIcon0000'));
            this.icon.anchor.set(0.5);
        }


        protected dispatchValueChanged(value: number, skipAnalytics: boolean) {
            this.icon.frameName = this.value === 0 ? 'sfxControlIcon0001' : 'sfxControlIcon0000';
            SoundController.instance.setSFXVolume(value);
            if (Settings.ENABLE_API && !skipAnalytics) {
                (<any>window).famobi_analytics.trackEvent((<any>window).famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: Phaser.Math.roundTo(SoundController.instance.getMusicVolume(), -2),
                    sfxVolume: Phaser.Math.roundTo(SoundController.instance.getSFXVolume(), -2)
                });
            }
        }
    }
}