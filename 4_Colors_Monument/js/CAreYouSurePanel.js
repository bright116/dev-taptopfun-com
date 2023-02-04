function CAreYouSurePanel(oFunction) {

    var _oButYes;
    var _oButNo;
    var _oFade;
    var _oPanelContainer;
    var _oParent;

    var _pStartPanelPos;

    this._init = function (oFunction) {
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown", function () { });
        s_oStage.addChild(_oFade);

        new createjs.Tween.get(_oFade).to({ alpha: 0.7 }, 500);

        _oPanelContainer = new createjs.Container();
        s_oStage.addChildAt(_oPanelContainer, s_oStage.numChildren);

        var oSprite = s_oSpriteLibrary.getSprite('credits_panel');
        var oPanel = createBitmap(oSprite);
        oPanel.regX = oSprite.width / 2;
        oPanel.regY = oSprite.height / 2;
        _oPanelContainer.addChild(oPanel);

        _oPanelContainer.x = CANVAS_WIDTH / 2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height / 2;
        _pStartPanelPos = { x: _oPanelContainer.x, y: _oPanelContainer.y };
        new createjs.Tween.get(_oPanelContainer).to({ y: CANVAS_HEIGHT / 2 - 40 }, 500, createjs.Ease.quartIn).call(function () {/*createjs.Ticker.paused = true;*/ });

        var oTitleStroke = new CTLText(_oPanelContainer,
            -250, -130, 500, 150,
            50, "center", "#000000", PRIMARY_FONT, 1,
            0, 0,
            TEXT_ARE_SURE,
            true, true, true,
            false);


        oTitleStroke.setOutline(5);


        var oTitle = new CTLText(_oPanelContainer,
            -250, -130, 500, 150,
            50, "center", "#fff", PRIMARY_FONT, 1,
            0, 0,
            TEXT_ARE_SURE,
            true, true, true,
            false);

        _oButYes = new CGfxButton(110, 80, s_oSpriteLibrary.getSprite('but_yes_big'), _oPanelContainer);
        _oButYes.addEventListener(ON_MOUSE_UP, this._onButYes, this);

        _oButNo = new CGfxButton(-110, 80, s_oSpriteLibrary.getSprite('but_exit_big'), _oPanelContainer);
        _oButNo.addEventListener(ON_MOUSE_UP, this._onButNo, this);

    };

    this._onButYes = function () {

        // YYGGames.showInterstitial({
        //     beforeShowAd: () => {
        //         Howler.mute(true);
        //     },
        //     afterShowAd: () => {
        //         if (window["MusicState"])
        //             Howler.mute(false);

        //         console.log("yes");
        //         _oButNo.setClickable(false);
        //         _oButYes.setClickable(false);

        //         new createjs.Tween.get(_oFade).to({ alpha: 0 }, 500);
        //         new createjs.Tween.get(_oPanelContainer).to({ y: _pStartPanelPos.y }, 400, createjs.Ease.backIn).call(function () {
        //             oFunction();

        //             _oParent.unload();

        //         });
        //     }
        // })
        // 展示插屏广告
        HUHU_showInterstitialAd();

        // 继续游戏
        if (window["MusicState"])
        Howler.mute(false);

    console.log("yes");
    _oButNo.setClickable(false);
    _oButYes.setClickable(false);

    new createjs.Tween.get(_oFade).to({ alpha: 0 }, 500);
    new createjs.Tween.get(_oPanelContainer).to({ y: _pStartPanelPos.y }, 400, createjs.Ease.backIn).call(function () {
        oFunction();

        _oParent.unload();

    });
        return;


    };

    this._onButNo = function () {
        YYGGames.showInterstitial({
            beforeShowAd: () => {
                Howler.mute(true);
            },
            afterShowAd: () => {
                if (window["MusicState"])
                    Howler.mute(false);

                console.log("no");
                //createjs.Ticker.paused = false;
                _oButNo.setClickable(false);
                _oButYes.setClickable(false);

                new createjs.Tween.get(_oFade).to({ alpha: 0 }, 500);
                new createjs.Tween.get(_oPanelContainer).to({ y: _pStartPanelPos.y }, 400, createjs.Ease.backIn).call(function () {
                    _oParent.unload();
                });
            }
        })

    };

    this.unload = function () {
        _oButNo.unload();
        _oButYes.unload();

        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oFade.off("mousedown", function () { });
    };

    _oParent = this;
    this._init(oFunction);
}

