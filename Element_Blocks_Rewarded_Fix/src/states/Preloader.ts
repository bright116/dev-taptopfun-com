namespace BlockPuzzle {
    export class Preloader extends AutoResizeableState {

        private preloadContainer: Phaser.Group;
        private backScreen: Phaser.Sprite;
        private logo: Phaser.Sprite;
        private preloadPad: Phaser.Sprite;
        private preloadBar: Phaser.Sprite;
        private preloadText: BitmapTextField;
        private versionText: Phaser.Text;
        private copyrightText: Phaser.Text;

        preload() {
            super.preload(this.game);

            this.buildChildren();
            this.preloadContent();

            this.resize(this.game.width, this.game.height);
        }

        protected buildChildren() {
            BackgroundManager.instance.init();

            this.game.state.onStateChange.add(this.handleStateChanged, this);

            this.preloadContainer = this.addChild(this.game.make.group());

            this.backScreen = this.game.world.addAt(this.game.make.sprite(0, 0, Settings.PRELOADER_ATLAS, 'blackSquare0000'), 0);
            this.backScreen.position.set(-50, -50);
            this.backScreen.width = 2400;
            this.backScreen.height = 2400;
            this.backScreen.alpha = 0.7;

            this.logo = this.addChild(this.game.make.sprite(0, 0, Settings.PRELOADER_ATLAS, 'logo0000'));
            this.logo.anchor.setTo(0.5);

            this.preloadPad = this.preloadContainer.add(this.game.make.sprite(0, 0, Settings.PRELOADER_ATLAS, 'preloaderBack0000'));
            this.preloadPad.anchor.setTo(0.5);

            this.preloadBar = this.preloadContainer.add(this.game.make.sprite(  -314 / 2, -2, Settings.PRELOADER_ATLAS));
            this.preloadBar.animations.add('cycle', Phaser.Animation.generateFrameNames('preloadBar', 0, 9, '', 4)).play(45, true);
            this.preloadBar.anchor.setTo(0, 0.5);
            this.load.setPreloadSprite(this.preloadBar);

            this.versionText = this.addChild(TextUtils.getText('v' + Settings.GAME_VERSION, 0, 0, 12, "#ffffff"));
            this.copyrightText = this.addChild(TextUtils.getText('© Famobi', 0, 0, 12, "#ffffff", 'Russo One'));
            this.copyrightText.anchor.set(1, 1);

            this.preloadText = this.preloadContainer.add(new BitmapTextField("0%", Settings.PRELOADER_ATLAS, "Gold", 1, 0.5, 0.5, 1));
            this.preloadText.position.set(0, 65);

            this.game.load.onFileComplete.add(this.onFileComplete, this);
            this.game.load.onLoadComplete.add(this.onLoadingComplete, this);

            this.isInitialized = true;
        }

        protected preloadContent() {
            for (let soundName of SoundController.instance.getSoundNames()) {
                this.game.load.audio(soundName, ['sound/mp3/' + soundName + '.mp3', 'sound/m4a/' + soundName + '.m4a', 'sound/ogg/' + soundName + '.ogg']);
            }
            if(Settings.ENABLE_API) {
                this.game.load.image('more_games', Settings.RELEASE_BUILD ? (<any>window).famobi.getMoreGamesButtonImage() : 'img/more-games.png');
            }
            this.game.load.atlasJSONArray(Settings.GAME_ATLAS, 'img/' + Settings.GAME_ATLAS + '.png', 'img/' + Settings.GAME_ATLAS + '.json');
            this.game.load.atlasJSONArray(Settings.ANIMATION_ATLAS, 'img/' + Settings.ANIMATION_ATLAS + '.png', 'img/' + Settings.ANIMATION_ATLAS + '.json');
            this.game.load.image('field-cover', 'img/field-cover.png');
            this.game.load.spritesheet('explosionA', 'img/18.png', 256, 256, 40);
            this.game.load.spritesheet('explosionB', 'img/22.png', 256, 256, 40);
        }


        create() {
            super.create();
        }

        resize(width: number, height: number) {
            super.resize(width, height);
            if(this.isInitialized) {
                this.backScreen.width = this.windowBounds.width * CustomScaleManager.SCALE_X + 100;
                this.backScreen.height = this.windowBounds.height * CustomScaleManager.SCALE_X + 100;
                this.preloadContainer.position.copyFrom(this.windowBounds.getPosition(0.5, 0.58));
                this.versionText.position.set(this.windowBounds.left + 25, this.windowBounds.down - 16);
                this.copyrightText.position.set(this.windowBounds.right - 5, this.windowBounds.down - 1);
                this.logo.position.copyFrom(this.windowBounds.getPosition(0.5, 0.24));
            }
        }


        private handleStateChanged() {
            BackgroundManager.instance.handleStateChanged();
        }

        private onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            this.preloadText.changeText(Math.round(progress) + "%");
        }

        private onLoadingComplete() {
            WindowManager.instance.init();
            TransitionScreen.instance.init();
            LocalStorageController.instance.loadSave();
            SoundController.instance.init();
            if (SoundController.instance.isDecodingSupported()) {
                this.game.sound.setDecodedCallback(SoundController.instance.getSFXNames(), this.onSoundsDecoded, this);
            } else {
                this.onSoundsDecoded();
            }
        }

        private onSoundsDecoded() {
            SoundController.instance.startMusic();
            this.preloadText.changeText("100%");
            TransitionScreen.instance.changeState("Level");
        }
    }
}