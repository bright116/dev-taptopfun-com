function CSelectPlayers() {
    var _oButP2;
    var _oButP3;
    var _oButP4;
    var _oButLang;

    var _pStartPosButP2;
    var _pStartPosButP3;
    var _pStartPosButP4;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosExit;
    var _pStartPosLang;

    var _oSelectPlayerText;
    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;
    var _oAudioToggle;
    var _oButExit;

    this._init = function () {
        var oBg = createBitmap(s_oSpriteLibrary.getSprite("bg_select_players"));
        s_oStage.addChild(oBg);

        var oSpriteP2 = s_oSpriteLibrary.getSprite('but_p2');
        _pStartPosButP2 = { x: (oSpriteP2.height / 2) - 10, y: (oSpriteP2.height / 2) };
        _oButP2 = new CGfxButton((CANVAS_WIDTH / 2) - 450, CANVAS_HEIGHT - 500, oSpriteP2, s_oStage);
        _oButP2.addEventListener(ON_MOUSE_UP, this._onButP2, this);

        var oSpriteP3 = s_oSpriteLibrary.getSprite('but_p3');
        _pStartPosButP3 = { x: (oSpriteP3.height / 2) - 10, y: (oSpriteP3.height / 2) };
        _oButP3 = new CGfxButton((CANVAS_WIDTH / 2) + 10, CANVAS_HEIGHT - 500, oSpriteP3, s_oStage);
        _oButP3.addEventListener(ON_MOUSE_UP, this._onButP3, this);

        var oSpriteP4 = s_oSpriteLibrary.getSprite('but_p4');
        _pStartPosButP4 = { x: (oSpriteP4.height / 2) - 10, y: (oSpriteP4.height / 2) };
        _oButP4 = new CGfxButton((CANVAS_WIDTH / 2) + 450, CANVAS_HEIGHT - 500, oSpriteP4, s_oStage);
        _oButP4.addEventListener(ON_MOUSE_UP, this._onButP4, this);

        var logo2 = s_oSpriteLibrary.getSprite('logo2');

        _logo2 = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 150, logo2, s_oStage);
        _logo2.addEventListener(ON_MOUSE_UP, () => {
            console.log("navigate");
            YYGGames.navigate("game", "logo");
        }, this);


        _oSelectPlayerText = new CTLText(s_oStage,
            CANVAS_WIDTH / 2 - 500, 300, 1000, 150,
            50, "center", "#fff", PRIMARY_FONT, 1,
            0, 0,
            TEXT_SELECT_PLAYERS,
            true, true, true,
            false);


        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = { x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10 };
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        var oExitX = CANVAS_WIDTH - (oSprite.width / 2) - 100;
        _pStartPosAudio = { x: oExitX, y: (oSprite.height / 2) + 10 };

        var oSpriteLang = s_oSpriteLibrary.getSprite("but_lang");
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive, s_oStage);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);

            _pStartPosLang = { x: _pStartPosAudio.x - (oSpriteLang.width / NUM_LANGUAGES) - 10, y: _pStartPosAudio.y - 6 };
        } else {
            _pStartPosLang = { x: CANVAS_WIDTH - (oSprite.width / 4) - 10, y: (oSprite.height / 2) + 10 };
        }

        _oButLang = new CButLang(_pStartPosLang.x, _pStartPosLang.y, NUM_LANGUAGES, s_iCurLang, oSpriteLang, s_oStage);
        _oButLang.addEventListener(ON_SELECT_LANG, this._onChangeLang, this);

        var doc = window.document;
        var docEl = doc.documentElement;
        _fRequestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        _fCancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (ENABLE_FULLSCREEN === false) {
            _fRequestFullScreen = false;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            oSprite = s_oSpriteLibrary.getSprite("but_fullscreen")
            _pStartPosFullscreen = { x: oSprite.width / 4 + 10, y: (oSprite.height / 2) + 10 };
            _oButFullscreen = new CToggle(_pStartPosFullscreen.x, _pStartPosFullscreen.y, oSprite, s_bFullscreen, s_oStage);
            _oButFullscreen.addEventListener(ON_MOUSE_UP, this._onFullscreen, this);
        }

        this.refreshButtonPos();
    };

    this._onButP2 = function () {

        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         NUM_PLAYERS = 2;
        //         this.unload();
        //         $(s_oMain).trigger("select_players", 2);
        //         s_oMain.gotoGame();
        //     }
        // })
        // 展示插屏广告
        HUHU_showInterstitialAd();

        // 继续游戏
        if (window["MusicState"])
            Howler.mute(false);

        NUM_PLAYERS = 2;
        this.unload();
        $(s_oMain).trigger("select_players", 2);
        s_oMain.gotoGame();
        return;

    };

    this._onButP3 = function () {

        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         NUM_PLAYERS = 3;
        //         this.unload();
        //         $(s_oMain).trigger("select_players", 3);
        //         s_oMain.gotoGame();
        //     }
        // })

                // 展示插屏广告
                HUHU_showInterstitialAd();
    
                // 继续游戏
                if (window["MusicState"])
                    Howler.mute(false);

                NUM_PLAYERS = 3;
                this.unload();
                $(s_oMain).trigger("select_players", 3);
                s_oMain.gotoGame();
                return;

    };

    this._onButP4 = function () {
        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         NUM_PLAYERS = 4;
        //         this.unload();
        //         $(s_oMain).trigger("select_players", 4);
        //         s_oMain.gotoGame();
        //     }
        // })
        // 展示插屏广告
        HUHU_showInterstitialAd();

        // 继续游戏
        if (window["MusicState"])
        Howler.mute(false);

    NUM_PLAYERS = 4;
    this.unload();
    $(s_oMain).trigger("select_players", 4);
    s_oMain.gotoGame();
        return;

    };

    this.unload = function () {
        _oButLang.unload();
        _oButExit.unload();
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.unload();
        }

        _oButP2.unload();
        _oButP3.unload();
        _oButP4.unload();

        s_oStage.removeAllChildren();

        s_oSelectPlayers = null;
    };

    this.refreshButtonPos = function () {
        _oButExit.setPosition(_pStartPosExit.x - s_iOffsetX, s_iOffsetY + _pStartPosExit.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        }

        _oButLang.setPosition(_pStartPosLang.x - s_iOffsetX, _pStartPosLang.y + s_iOffsetY);
    };

    this.resetFullscreenBut = function () {
        if (_fRequestFullScreen && screenfull.isEnabled) {
            _oButFullscreen.setActive(s_bFullscreen);
        }
    };

    this._onFullscreen = function () {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    this._onExit = function () {

        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         this.unload();
        //         s_oMain.gotoMenu();
        //     }
        // })
        // 展示插屏广告
        HUHU_showInterstitialAd();

        // 继续游戏
        if (window["MusicState"])
        Howler.mute(false);

        this.unload();
        s_oMain.gotoMenu();
        return;
    };

    this._onChangeLang = function (iLang) {
        s_iCurLang = iLang;
        refreshLanguage();

        _oSelectPlayerText.refreshText(TEXT_SELECT_PLAYERS);
    };

    this._onAudioToggle = function () {

        console.log("before " + s_bAudioActive)
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
        window["MusicState"] = s_bAudioActive;
        console.log("after " + s_bAudioActive)
    };

    s_oSelectPlayers = this;
    this._init();
};


var s_oSelectPlayers = null;