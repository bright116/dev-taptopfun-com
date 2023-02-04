function CPanelTutorial() {

    var _oContainer;
    var _oPanel;
    var _oButNext;
    var _oButBack;
    var _oButSkip;
    var logo1;
    var _iCurrentPage;
    var _oContainerPage;

    this.init = function () {
        _oContainerPage = new createjs.Container();
        _iCurrentPage = 0;

        _oContainer = new createjs.Container();
        _oContainer.x = CANVAS_WIDTH / 2;
        _oContainer.y = CANVAS_HEIGHT / 2;
        _oPanel = new createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        _oPanel.regX = 796 / 2;
        _oPanel.regY = 517 / 2;
        _oPanel.alpha = 0.8;
        _oContainer.addChild(_oPanel);
        s_oStage.addChild(_oContainer);

        _oButNext = new CGfxButton(_oContainer.getBounds().width / 2 - 50, 0, s_oSpriteLibrary.getSprite("but_arrow"), _oContainer);
        _oButNext.addEventListener(ON_MOUSE_DOWN, this.onButNext, this);

        var oSprite = s_oSpriteLibrary.getSprite("but_arrow");
        _oButBack = new CGfxButton(-(_oContainer.getBounds().width / 2 - 50), 0, oSprite, _oContainer);
        _oButBack.addEventListener(ON_MOUSE_DOWN, this.onButBack, this);
        _oButBack.getButtonImage().rotation = 180;

        _oButSkip = new CGfxButton(_oContainer.getBounds().width / 2 - 53, _oContainer.getBounds().height / 2 - 53, s_oSpriteLibrary.getSprite("but_skip"), _oContainer);
        _oButSkip.addEventListener(ON_MOUSE_DOWN, this.onButSkip, this);
        this.loadPage(_iCurrentPage);

        // logo1 = new CGfxButton(0, 500, s_oSpriteLibrary.getSprite("logo1"),
        //     _oContainer);
        // logo1.addEventListener(ON_MOUSE_DOWN, () => {
        //     console.log("navigate");
        //     YYGGames.navigate("game", "logo");
        // }, this);

    };

    this.loadPage = function (iPage) {
        var oText;
        var oExampleCard;
        switch (iPage) {


            case 0:
                _oButBack.setVisible(false);
                oText = new CTLText(_oContainerPage,
                    -300, -200, 600, 50,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    TEXT_WELCOME,
                    true, true, true,
                    false);

                oText = new CTLText(_oContainerPage,
                    -80, -120, 300, 240,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL1, GAME_SCORE_WIN),
                    true, true, true,
                    false);


                oExampleCard = new CCard(-215, 0, _oContainerPage, "card_1_7", 0, 0);
                oExampleCard.setAnimTutorial("tutorial");
                _oContainer.addChild(_oContainerPage);
                break;


            case 1:
                _oButBack.setVisible(true);
                oText = new CTLText(_oContainerPage,
                    -80, -120, 300, 240,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL2, CARD_SCORE[12]),
                    true, true, true,
                    false);



                oExampleCard = new CCard(-215, 0, _oContainerPage, "card_0_12", 0, 0);
                oExampleCard.setAnimTutorial("draw2tutorial");
                break;


            case 2:
                oText = new CTLText(_oContainerPage,
                    -80, -105, 300, 210,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL3, CARD_SCORE[10]),
                    true, true, true,
                    false);


                oExampleCard = new CCard(-215, 0, _oContainerPage, "card_1_7", 0, 0);
                oExampleCard.setAnimTutorial("stopTurnTutorial");
                break;


            case 3:
                oText = new CTLText(_oContainerPage,
                    -80, -105, 300, 210,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL4, CARD_SCORE[11]),
                    true, true, true,
                    false);


                oExampleCard = new CCard(-215, 0, _oContainerPage, "card_1_7", 0, 0);
                oExampleCard.setAnimTutorial("changeClockWiseTutorial");
                break;


            case 4:
                oText = new CTLText(_oContainerPage,
                    -80, -120, 300, 240,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL5, CARD_SCORE[13]),
                    true, true, true,
                    false);


                oExampleCard = new CCard(-215, 0, _oContainerPage, FOTOGRAM_COLOR, 0, 0);
                oExampleCard.instantShow();
                break;


            case 5:
                _oButNext.setVisible(true);
                oText = new CTLText(_oContainerPage,
                    -80, -120, 300, 240,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL6, CARD_SCORE[14]),
                    true, true, true,
                    false);


                oExampleCard = new CCard(-215, 0, _oContainerPage, FOTOGRAM_DRAW_FOUR, 0, 0);
                oExampleCard.instantShow();
                break;


            case 6:
                _oButNext.setVisible(false);
                oText = new CTLText(_oContainerPage,
                    -80, -120, 300, 240,
                    50, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_TUTORIAL7, NUM_PENALTY_CARDS),
                    true, true, true,
                    false);



                oExampleCard = new createBitmap(s_oSpriteLibrary.getSprite("but_uno"));
                oExampleCard.regX = 100 / 2;
                oExampleCard.regY = 101 / 2;
                oExampleCard.x = -215;
                oExampleCard.scaleX = 1.5;
                oExampleCard.scaleY = 1.5;
                _oContainerPage.addChild(oExampleCard);
                break;
        }
    };

    this.onButNext = function () {
        _iCurrentPage++;
        _oContainerPage.removeAllChildren();
        this.loadPage(_iCurrentPage);
    };

    this.onButBack = function () {
        _iCurrentPage--;
        _oContainerPage.removeAllChildren();
        this.loadPage(_iCurrentPage);
    };

    this.onButSkip = function () {
        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         s_oStage.removeChild(_oContainer);
        //         s_oGame._startGame();
        //     }
        // })

        // 展示插屏广告
        HUHU_showInterstitialAd();

        // 继续游戏
        if (window["MusicState"])
        Howler.mute(false);

        s_oStage.removeChild(_oContainer);
        s_oGame._startGame();
        return;

    };

    this.init();
}