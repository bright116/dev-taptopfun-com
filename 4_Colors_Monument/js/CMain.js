function CMain(oData) {
    var _bUpdate;
    var _iCurResource = 0;
    var RESOURCE_TO_LOAD = 0;
    var _iState = STATE_LOADING;
    var _oData;

    var _oPreloader;
    var _oMenu;
    var _oHelp;
    var _oGame;
    var _oSelectPlayers;

    var _aColors;

    this.initContainer = function () {
        s_oCanvas = document.getElementById("canvas");
        s_oStage = new createjs.Stage(s_oCanvas);
        s_oStage.preventSelection = true;
        createjs.Touch.enable(s_oStage, true);

        s_bMobile = isMobile();

        if (s_bMobile === false) {
            s_oStage.enableMouseOver(FPS);
        }

        s_iPrevTime = new Date().getTime();

        createjs.Ticker.addEventListener("tick", this._update);
        createjs.Ticker.framerate = FPS;

        if (navigator.userAgent.match(/Windows Phone/i)) {
            DISABLE_SOUND_MOBILE = true;
        }

        s_oSpriteLibrary = new CSpriteLibrary();


        //ADD PRELOADER
        _oPreloader = new CPreloader();

    };

    this.preloaderReady = function () {
        this._loadImages();
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            this._initSounds();
        }


        _bUpdate = true;
    };

    this.soundLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
    };

    this._initSounds = function () {
        Howler.mute(!s_bAudioActive);

        s_aSoundsInfo = new Array();
        s_aSoundsInfo.push({ path: './sounds/', filename: 'soundtrack', loop: true, volume: 1, ingamename: 'soundtrack' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'click', loop: false, volume: 1, ingamename: 'click' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'game_over', loop: false, volume: 1, ingamename: 'game_over' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'card_dealing', loop: false, volume: 1, ingamename: 'card_dealing' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'snap', loop: false, volume: 1, ingamename: 'snap' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'card', loop: false, volume: 1, ingamename: 'card' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'special_card', loop: false, volume: 1, ingamename: 'special_card' });
        s_aSoundsInfo.push({ path: './sounds/', filename: 'change_color', loop: false, volume: 1, ingamename: 'change_color' });

        RESOURCE_TO_LOAD += s_aSoundsInfo.length;

        s_aSounds = new Array();
        for (var i = 0; i < s_aSoundsInfo.length; i++) {
            this.tryToLoadSound(s_aSoundsInfo[i], false);
        }

    };

    this.tryToLoadSound = function (oSoundInfo, bDelay) {

        setTimeout(function () {
            s_aSounds[oSoundInfo.ingamename] = new Howl({
                src: [oSoundInfo.path + oSoundInfo.filename + '.mp3'],
                autoplay: false,
                preload: true,
                loop: oSoundInfo.loop,
                volume: oSoundInfo.volume,
                onload: s_oMain.soundLoaded,
                onloaderror: function (szId, szMsg) {
                    for (var i = 0; i < s_aSoundsInfo.length; i++) {
                        if (szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id) {
                            s_oMain.tryToLoadSound(s_aSoundsInfo[i], true);
                            break;
                        }
                    }
                },
                onplayerror: function (szId) {
                    for (var i = 0; i < s_aSoundsInfo.length; i++) {
                        if (szId === s_aSounds[s_aSoundsInfo[i].ingamename]._sounds[0]._id) {
                            s_aSounds[s_aSoundsInfo[i].ingamename].once('unlock', function () {
                                s_aSounds[s_aSoundsInfo[i].ingamename].play();
                                if (s_aSoundsInfo[i].ingamename === "soundtrack" && s_oGame !== null) {
                                    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
                                }
                            });
                            break;
                        }
                    }

                }
            });


        }, (bDelay ? 200 : 0));


    };

    this._loadImages = function () {
        _aColors = ["Red", "Green", "Blue", "Yellow"];
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("logo1", "./sprites/logo1.png");
        s_oSpriteLibrary.addSprite("logo2", "./sprites/logo2.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("credits_panel", "./sprites/credits_panel.png");
        s_oSpriteLibrary.addSprite("select_color_panel", "./sprites/select_color_panel.png");
        s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
        s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
        s_oSpriteLibrary.addSprite("but_yes_big", "./sprites/but_yes_big.png");
        s_oSpriteLibrary.addSprite("but_exit_big", "./sprites/but_exit_big.png");
        s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
        s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
        s_oSpriteLibrary.addSprite("but_uno", "./sprites/but_uno.png");

        s_oSpriteLibrary.addSprite("but_p2", "./sprites/but_p2.png");
        s_oSpriteLibrary.addSprite("but_p3", "./sprites/but_p3.png");
        s_oSpriteLibrary.addSprite("but_p4", "./sprites/but_p4.png");
        s_oSpriteLibrary.addSprite("but_red", "./sprites/but_red.png");
        s_oSpriteLibrary.addSprite("but_green", "./sprites/but_green.png");
        s_oSpriteLibrary.addSprite("but_blue", "./sprites/but_blue.png");
        s_oSpriteLibrary.addSprite("but_yellow", "./sprites/but_yellow.png");


        s_oSpriteLibrary.addSprite("stop_turn", "./sprites/stop_turn.png");

        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
        s_oSpriteLibrary.addSprite("bg_select_players", "./sprites/bg_select_players.jpg");

        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        s_oSpriteLibrary.addSprite("but_arrow", "./sprites/arrow.png");
        s_oSpriteLibrary.addSprite("but_skip", "./sprites/but_skip.png");


        s_oSpriteLibrary.addSprite("line_player", "./sprites/line_players.png");
        s_oSpriteLibrary.addSprite("cards", "./sprites/cards.png");
        s_oSpriteLibrary.addSprite("colors", "./sprites/colors.png");
        s_oSpriteLibrary.addSprite("draw_four_anim", "./sprites/draw_4.png");
        s_oSpriteLibrary.addSprite("draw_two_anim", "./sprites/draw_2.png");
        s_oSpriteLibrary.addSprite("stop_turn_anim", "./sprites/stop_turn.png");
        s_oSpriteLibrary.addSprite("clock_wise_anim", "./sprites/change_clockwise.png");
        s_oSpriteLibrary.addSprite("change_color", "./sprites/change_color.png");
        s_oSpriteLibrary.addSprite("cloud_uno", "./sprites/cloud.png");
        s_oSpriteLibrary.addSprite("finger", "./sprites/finger.png");
        s_oSpriteLibrary.addSprite("shuffle_anim", "./sprites/shuffle_anim.png");

        s_oSpriteLibrary.addSprite("but_next", "./sprites/but_next.png");
        s_oSpriteLibrary.addSprite("but_show", "./sprites/but_show.png");
        s_oSpriteLibrary.addSprite("score_icon", "./sprites/score_icon.png");
        s_oSpriteLibrary.addSprite("info_label", "./sprites/info_label.png");

        s_oSpriteLibrary.addSprite("cup_icon", "./sprites/cup_icon.png");

        s_oSpriteLibrary.addSprite("but_lang", "./sprites/but_lang.png");
        s_oSpriteLibrary.addSprite("logo_menu", "./sprites/logo_menu.png");

        RESOURCE_TO_LOAD += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites();
    };

    this._onImagesLoaded = function () {
        _iCurResource++;
        var iPerc = Math.floor(_iCurResource / RESOURCE_TO_LOAD * 100);
        _oPreloader.refreshLoader(iPerc);
    };

    this._onAllImagesLoaded = function () {

    };

    this.onRemovePreloader = function () {

        _oPreloader.unload();

        s_oSoundtrack = playSound("soundtrack", 1, true);

        this.gotoMenu();
    };

    this.gotoMenu = function () {
        _oMenu = new CMenu();
        _iState = STATE_MENU;
    };


    this.gotoSelectPlayers = function () {
        _oSelectPlayers = new CSelectPlayers();
        _iState = STATE_SELECT_PLAYERS;
    };

    this.gotoGame = function () {
        s_oGame = _oGame = new CGameSingle(_oData);
        _iState = STATE_GAME;
    };

    this.gotoGameMulti = function (iNumPlayers) {
        //s_bFirstGame = false;

        NUM_PLAYERS = iNumPlayers;

        s_oGame = _oGame = new CGameMulti(_oData);
        _iState = STATE_GAME;
    };

    this.gotoGameWithBot = function () {
        //s_bFirstGame = false;

        NUM_PLAYERS = 2;

        s_oGame = _oGame = new CGameSingleWithBot(_oData);
        _iState = STATE_GAME;
    };

    this.gotoHelp = function () {
        _oHelp = new CHelp();
        _iState = STATE_HELP;
    };

    this.stopUpdate = function () {

        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            Howler.mute(true);
        }

    };

    this.startUpdate = function () {
        if (DISABLE_SOUND_MOBILE === false || s_bMobile === false) {
            if (s_bAudioActive) {
                Howler.mute(false);
            }
        }

    };


    this._update = function (event) {
        if (_bUpdate === false) {
            return;
        }
        var iCurTime = new Date().getTime();
        s_iTimeElaps = iCurTime - s_iPrevTime;
        s_iCntTime += s_iTimeElaps;
        s_iCntFps++;
        s_iPrevTime = iCurTime;

        if (s_iCntTime >= 1000) {
            s_iCurFps = s_iCntFps;
            s_iCntTime -= 1000;
            s_iCntFps = 0;
        }

        if (_iState === STATE_GAME) {
            _oGame.update();
        }

        s_oStage.update(event);

    };

    s_oMain = this;


    _oData = oData;
    ENABLE_FULLSCREEN = oData.fullscreen;
    ENABLE_CHECK_ORIENTATION = oData.check_orientation;
    STARTING_NUM_CARDS = oData.starting_num_cards;
    s_bAudioActive = oData.audio_enable_on_startup;


    var iLang = navigator.language.split("-")[0];
    if (LANG_CODES[iLang] === undefined) {
        iLang = "en";
    }
    s_iCurLang = LANG_CODES[iLang];

    refreshLanguage();

    this.initContainer();
}
var s_bMobile;
var s_bAudioActive = true;
window["MusicState"] = true;
var s_iCntTime = 0;
var s_iTimeElaps = 0;
var s_iPrevTime = 0;
var s_iCntFps = 0;
var s_iCurFps = 0;
var s_bFullscreen = false;

var s_oDrawLayer;
var s_oStage;
var s_oMain;
var s_oSpriteLibrary;
var s_oSoundtrack = null;
var s_oCanvas;
var s_bFirstGame = true;
var s_aSounds;
var s_aSoundsInfo;
var s_oGame;

var s_iCurLang = LANG_EN;