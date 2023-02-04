function CMenu() {
    var _oBg;
    var _oButPlay;
    var _oFade;
    var _oAudioToggle;
    var _oCreditsBut;
    var _oButLang;

    var _pStartPosCredits;
    var _pStartPosAudio;
    var _pStartPosFullscreen;
    var _pStartPosLang;

    var _oButFullscreen;
    var _fRequestFullScreen = null;
    var _fCancelFullScreen = null;

    var _iIdTimeout;

    this._init = function () {
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);


        var oSprite = s_oSpriteLibrary.getSprite('but_play');
        _oButPlay = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 250, oSprite, s_oStage);
        _oButPlay.addEventListener(ON_MOUSE_UP, this._onButLocalRelease, this);

        var logo1 = s_oSpriteLibrary.getSprite('logo1');
        _btnlogo1 = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 100, logo1, s_oStage);
        _btnlogo1.addEventListener(ON_MOUSE_UP, this._onbtnlogo1Click, this);


        var oSpriteLang = s_oSpriteLibrary.getSprite("but_lang");

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = { x: CANVAS_WIDTH - (oSprite.height / 2) - 10, y: (oSprite.height / 2) + 10 };
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

        // if (_fRequestFullScreen && screenfull.isEnabled){
        //     oSprite = s_oSpriteLibrary.getSprite("but_fullscreen");
        //     _pStartPosFullscreen = {x: _pStartPosCredits.x + oSprite.width/2, y: _pStartPosCredits.y};   
        //     _oButFullscreen = new CToggle(_pStartPosFullscreen.x,_pStartPosFullscreen.y,oSprite,s_bFullscreen,s_oStage);
        //     _oButFullscreen.addEventListener(ON_MOUSE_UP,this._onFullscreen,this);
        // }

        var oSprite = s_oSpriteLibrary.getSprite('logo_menu')
        var oLogo = createBitmap(oSprite);
        oLogo.regX = oSprite.width / 2;
        oLogo.regY = oSprite.height / 2;
        oLogo.x = CANVAS_WIDTH / 2;
        oLogo.y = CANVAS_HEIGHT / 2 - 100;
        oLogo.scale = 0.1;
        s_oStage.addChild(oLogo);

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        s_oStage.addChild(_oFade);

        createjs.Tween.get(_oFade).to({ alpha: 0 }, 1000, createjs.Ease.cubicOut).call(function () { _oFade.visible = false; });
        createjs.Tween.get(oLogo).to({ scale: 1 }, 1000, createjs.Ease.elasticOut);

        if (s_oSoundtrack !== null) {
            setVolume("soundtrack", 1);
        }

        this.refreshButtonPos();
    };

    this.unload = function () {
        _oButPlay.unload();

        _oFade.visible = false;

        // _oCreditsBut.unload();
        _oButLang.unload();

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }

        // if (_fRequestFullScreen && screenfull.isEnabled) {
        //     _oButFullscreen.unload();
        // }

        s_oStage.removeAllChildren();

        s_oMenu = null;
    };

    this.refreshButtonPos = function () {
        // _oCreditsBut.setPosition(_pStartPosCredits.x + s_iOffsetX,s_iOffsetY + _pStartPosCredits.y);
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            _oAudioToggle.setPosition(_pStartPosAudio.x - s_iOffsetX, s_iOffsetY + _pStartPosAudio.y);
        }

        // if (_fRequestFullScreen && screenfull.isEnabled) {
        //     _oButFullscreen.setPosition(_pStartPosFullscreen.x + s_iOffsetX, _pStartPosFullscreen.y + s_iOffsetY);
        // }

        _oButLang.setPosition(_pStartPosLang.x - s_iOffsetX, _pStartPosLang.y + s_iOffsetY);
    };

    // this.resetFullscreenBut = function () {
    //     if (_fRequestFullScreen && screenfull.isEnabled) {
    //         _oButFullscreen.setActive(s_bFullscreen);
    //     }
    // };

    this._onFullscreen = function () {
        if (s_bFullscreen) {
            _fCancelFullScreen.call(window.document);
        } else {
            _fRequestFullScreen.call(window.document.documentElement);
        }

        sizeHandler();
    };

    this._onAudioToggle = function () {
        console.log("before " + s_bAudioActive)

        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
        window["MusicState"] = s_bAudioActive;
        console.log("after" + s_bAudioActive)
    };

    this._onCreditsBut = function () {
        new CCreditsPanel();
    };

    this._onChangeLang = function (iLang) {
        s_iCurLang = iLang;
        refreshLanguage();
    };
    this._onbtnlogo1Click = function () {
        console.log("navigate");
        YYGGames.navigate("game", "logo");
    }

    this._onButLocalRelease = function () {
        // console.log("this");

        console.log("请求插屏广告");
        
        // 展示插屏广告
        HUHU_showInterstitialAd();
    
        // 继续游戏
        console.log("afterAD " + s_bAudioActive);

        if (window["MusicState"])
            Howler.mute(false);

        s_oMenu.unload();

        $(s_oMain).trigger("start_session");
        s_oMain.gotoSelectPlayers();
        return;
        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         console.log("beforeAD");
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         console.log("afterAD " + s_bAudioActive);

        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         s_oMenu.unload();

        //         $(s_oMain).trigger("start_session");
        //         s_oMain.gotoSelectPlayers();
        //     }
        // })
    };

    s_oMenu = this;

    this._init();
}

var s_oMenu = null;