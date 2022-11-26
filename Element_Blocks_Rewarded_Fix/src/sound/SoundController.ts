namespace BlockPuzzle {
    export class SoundController {
        private static _instance: SoundController = null;
        public static get instance(): SoundController {
            return SoundController._instance ? SoundController._instance :
                SoundController._instance = new SoundController();
        }

        private soundNames: string[];
        private melodyNames: string[];
        private mainTheme: Phaser.Sound;
        private countingSound: Phaser.Sound;
        private currentMusicVolume: number = Settings.MUSIC_ENABLED_BY_DEFAULT ? 0.4 : 0;
        private currentSFXVolume: number = 0.5;

        private currentBlockDestroyingSoundIndex: number = 0;
        private debouncedSoundsTimestamps: Map<String, number>;
        private hadBeenMutedBeforePauseTriggered: boolean = false;


        constructor() {
            this.debouncedSoundsTimestamps = new Map<String, number>();

            this.melodyNames = ["melody"];

            this.soundNames = [
                "click",
                "error",
                "counting",
                "panel",
                "panelUp",
                "figureTap",
                "figureRelease",
                "figureFail",
                "starAppear",
                "starReceived",
                "good",
                "great",
                "excellent",
                "awesome",
                "buying",
                "match1",
                "match2",
                "match3",
                "match4",
                "match5",
                "match6",
                "match7",
                "block",
                "revive",
                "lose",
                "stamp",
                "heartbeat",
                "levelUp",
                "reward",
                "achievement",
                "fire",
                "bomb",
                "lighting"
            ];
        }

        public isDecodingSupported(): boolean {
            return App.instance.sound.usingWebAudio;
        }

        public getSFXNames(): string[] {
            return this.soundNames;
        }

        public getSoundNames(): string[] {
            return this.melodyNames.slice().concat(this.soundNames);
        }

        /**
         * MUSIC
         */

        public init() {

        }

        public startMusic() {
            this.mainTheme = App.instance.sound.play('melody', this.currentMusicVolume, true);
        }

        /**
         * PAUSE/RESUME SOUND
         */


        public pauseAudio() {
            this.hadBeenMutedBeforePauseTriggered = App.instance.sound.mute;
            App.instance.sound.mute = true;
        }

        public resumeAudio() {
            App.instance.sound.mute = this.hadBeenMutedBeforePauseTriggered;
        }

        public addSuspendedContextRestoreHandler() {
            if('ontouchstart' in window && App.instance.sound.usingWebAudio) {
                console.log("Adding context resume handler...");
                document.querySelector('canvas').addEventListener('touchstart', function() {
                    if(App.instance.sound.context.state === 'suspended') {
                        console.log('Resuming suspended context...');
                        App.instance.sound.context.resume().then(() => {
                            console.log('Playback resumed successfully');
                        });
                    }
                });
            }
        }

        public getMusicVolume(): number {
            return this.currentMusicVolume;
        }

        public setMusicVolume(value: number) {
            this.currentMusicVolume = Phaser.Math.clamp(value, 0, 1);
            if (this.mainTheme && this.mainTheme.isPlaying) {
                this.mainTheme.volume = this.currentMusicVolume;
            }
        }

        public getSFXVolume(): number {
            return this.currentSFXVolume;
        }

        public setSFXVolume(value: number) {
            this.currentSFXVolume = Phaser.Math.clamp(value, 0, 1);
        }


        /**
         * SOUNDS
         */

        public playClickSound() {
            this.playSound('click');
        }

        public playPanelMovementSound() {
            this.playSound('panel');
        }

        public playPanelUpMovementSound() {
            this.playSound('panelUp');
        }

        public playFigurePickupSound() {
            this.playSound('figureTap');
        }

        public playFigurePlaceSound() {
            this.playSound('figureRelease');
        }

        public playFigureFailSound() {
            this.playSound('figureFail');
        }

        public playStarAppearSound() {
            this.playSound('starAppear');
        }

        public playStarReceivedSound() {
            this.playSound('starReceived');
        }

        public playBuyingSound() {
            this.playSound('buying');
        }

        public playBlockSound() {
            this.playSound('block', 0.8);
        }

        public playReviveSound() {
            this.playSound('revive', 0.6);
        }

        public playStampSound() {
            this.playSound('stamp');
        }

        public playErrorSound() {
            this.playSound('error');
        }

        public playLoseSound() {
            App.instance.time.events.add(70, () => this.playSound('lose', 0.7));
        }

        public playHeartBeatSound() {
            this.playSound('heartbeat', 1);
        }

        public playlevelUpSound() {
            this.playSound('levelUp', 0.5);
        }

        public playAchievementClaimedSound() {
            this.playSound('achievement', 0.8);
        }

        public playRewardClaimedSound() {
            this.playSound('reward', 0.8);
        }

        public playExplosionSound() {
            this.playSound('bomb', 0.8);
            this.playSound('fire', 0.8);
        }

        public playLightningSound() {
            this.playSound('lighting', 0.8);
        }

        public playNextLineDestroyingSound(numLines: number) {
            this.playSound('match' + ((this.currentBlockDestroyingSoundIndex++ % 7) + 1));
            this.playSound('block');
            if (numLines > 1) {
                App.instance.time.events.add(100, () => this.playSound('block'));
            }
        }

        public playInscriptionSound(inscriptionLevel: InscriptionLevel) {
            switch (inscriptionLevel) {
                case InscriptionLevel.GOOD:
                    this.playSound('good', 0.6);
                    break;

                case InscriptionLevel.GREAT:
                    this.playSound('great', 0.6);
                    break;

                case InscriptionLevel.AWESOME:
                    this.playSound('awesome', 0.6);
                    break;

                case InscriptionLevel.EXCELLENT:
                    this.playSound('excellent', 0.6);
                    break;
            }
        }

        protected playSound(key: string, volume: number = 0.5, loop: boolean = false) {
            if (App.instance.sound.usingWebAudio && App.instance.sound.context.state === 'suspended') {
                //skip this sound
            } else {
                App.instance.sound.play(key, volume * this.currentSFXVolume, loop);
            }
        }

        /**
         * COUNTING
         */


        public startCountingSound() {
            if (this.countingSound) {
                this.stopCountingSound();
            }
            this.countingSound = App.instance.add.sound('counting', 0.55, true);
            this.countingSound.play();
        }

        public stopCountingSound() {
            if (this.countingSound) {
                if (this.countingSound.isPlaying) {
                    this.countingSound.stop();
                }
                this.countingSound.destroy();
            }
            this.countingSound = null;
        }


        /**
         * PRIVATE
         */

        private debounceSound(key: string, volume: number, interval: number) {
            const currentTime: number = new Date().getTime();
            const lastTimestamp: number = this.debouncedSoundsTimestamps.get(key) || 0;
            if (currentTime - lastTimestamp >= interval) {
                this.playSound(key, volume, false);
                this.debouncedSoundsTimestamps.set(key, currentTime);
            }
        }

        /**
         * MUSIC
         */

        public chokeMusicVolume(duration: number = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.currentMusicVolume > 0 ? Math.min(0.1, this.currentMusicVolume / 3) : 0);
            }
        }

        public restoreMusicVolume(duration: number = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.currentMusicVolume);
            }
        }

    }
}