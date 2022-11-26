///<reference path="AbstractUIScrollbar.ts"/>
namespace BlockPuzzle {
    export class MusicControlScrollbar extends AbstractUIScrollbar {

        public initValue() {
            this.setInitialValue(SoundController.instance.getMusicVolume());
        }

        protected buildIcon() {
            this.icon = this.add(this.game.make.sprite(-100, -5, Settings.GAME_ATLAS, 'musicControlIcon0000'));
            this.icon.anchor.set(0.5);
        }

        protected dispatchValueChanged(value: number, skipAnalytics: boolean) {
            this.icon.frameName = this.value === 0 ? 'musicControlIcon0001' : 'musicControlIcon0000';
            SoundController.instance.setMusicVolume(value);
            if (Settings.ENABLE_API && !skipAnalytics) {
                (<any>window).famobi_analytics.trackEvent((<any>window).famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: Phaser.Math.roundTo(SoundController.instance.getMusicVolume(), -2),
                    sfxVolume: Phaser.Math.roundTo(SoundController.instance.getSFXVolume(), -2)
                });
            }
        }

    }
}