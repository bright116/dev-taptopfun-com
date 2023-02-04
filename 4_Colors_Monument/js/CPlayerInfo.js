function CPlayerInfo(iX, iY, oParentContainer, szName){
    var _szName;
    
    var _iOffsetX;
    var _iOffsetY;
    var _iWidth;
    var _iHeight;
    var _iTextWidth;
    var _iTextHeight;
    
    var _oContainer;
    var _oTextContainer;
    var _oLinePlayer;
    var _oPlayerText;
    var _oScoreText;
    var _oScoreIcon;
    
    this._init = function(iX, iY, oParentContainer, szName){
        _szName = szName;
        
        _iOffsetX = 10;
        _iOffsetY = 10;
        
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);
        
        _oTextContainer = new createjs.Container();
        _oContainer.addChild(_oTextContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite("line_player");
        _iWidth = oSprite.width/2;
        _iHeight = oSprite.height;
        var oData = {
            images: [oSprite],
            frames: {width: _iWidth, height: _iHeight, regX: _iWidth/2, regY: _iHeight/2},
            animations: {
                off: [0],
                on: [1],
                idle:{frames: [0,1], speed: 0.1}
            }
        };
        
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oLinePlayer = createSprite(oSpriteSheet,"off",_iWidth/2, _iHeight/2, _iWidth, _iHeight);
        _oLinePlayer.stop();
        _oContainer.addChild(_oLinePlayer);
        

        _iTextHeight = 40;
        _iTextWidth = 340;
        _oPlayerText = new CTLText(_oTextContainer, 
                    0, 0, _iTextWidth, _iTextHeight, 
                    30, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    _szName,
                    true, true, false,
                    false );

        var oSprite = s_oSpriteLibrary.getSprite('score_icon');
        _oScoreIcon = createBitmap(oSprite);
        _oScoreIcon.regX = oSprite.width/2;
        _oScoreIcon.regY = oSprite.height/2;
        _oTextContainer.addChild(_oScoreIcon);

       
        var iTextWidth = 100;
        _oScoreText = new CTLText(_oTextContainer, 
                    0, 0, iTextWidth, _iTextHeight, 
                    30, "left", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    "0",
                    true, true, false,
                    false );

    };

    this.unload = function(){
        oParentContainer.removeChild(_oContainer);
    };

    this.highlight = function(){
        _oLinePlayer.gotoAndStop("on");
        
        _oTextContainer.alpha = 1;
        var iTime = 1500;
        createjs.Tween.get(_oPlayerText.getText(), {override:true, loop:true}).to({alpha:0}, iTime/3, createjs.Ease.cubicIn).
                to({alpha:1}, iTime/3, createjs.Ease.cubicOut).wait(iTime/3);
    };

    this.enable = function(){
        _oLinePlayer.gotoAndStop("on");
        _oPlayerText.setAlpha( 1 );
        
        _oTextContainer.alpha = 1;
        createjs.Tween.removeTweens(_oPlayerText.getText());
    };

    this.disable = function(){
        _oLinePlayer.gotoAndStop("off");
        _oPlayerText.setAlpha( 1 );
        
        _oTextContainer.alpha = 0.15;
        createjs.Tween.removeTweens(_oPlayerText.getText());
    };

    this.setScore = function(iScore){
        _oScoreText.refreshText( iScore );
    };

    this.setName = function(szName){
        _oPlayerText.refreshText( szName );
    };

    this.setPosition = function(iX, iY, iSide){
        _oContainer.x = iX;
        _oContainer.y = iY;

        switch(iSide){
            case BOTTOM:{
                    this._setBottom();
                    break;
            }
            case TOP:{
                    this._setTop();
                    break;
            }
            case LEFT:{
                    this._setLeft();
                    break;
            }
            case RIGHT:{
                    this._setRight();
                    break;
            }
        }
    };

    this._setBottom = function(){
        this._setNormalDir();
        
        _oContainer.rotation = 0;
    };
    
    this._setTop = function(){
        this._setInverseDir();
        
        _oContainer.rotation = 0;
    };
    
    this._setLeft = function(){
        this._setNormalDir();
        
        _oContainer.rotation = 90;
    };
    
    this._setRight = function(){
        this._setInverseDir();
        
        _oContainer.rotation = 90;
    };

    this._setNormalDir = function(){
        _oPlayerText.setAlign( "left" );
        _oPlayerText.setPos(-_iWidth/2 + _iOffsetX, -_iTextHeight);
        
        _oScoreIcon.x = _iWidth/2 - _iOffsetX - _oScoreIcon.getBounds().width/2;
        _oScoreIcon.y = _oPlayerText.getY() +_iTextHeight/2 -2;

        _oScoreText.setAlign( "right" );
        _oScoreText.setPos(_oScoreIcon.x - _oScoreIcon.getBounds().width/2 - 2, _oPlayerText.getY());
    };

    this._setInverseDir = function(){
        _oPlayerText.setAlign( "right" );
        _oPlayerText.setPos(_iWidth/2 - _iOffsetX, 4);
        
        _oScoreIcon.x =  -_iWidth/2 + _iOffsetX + _oScoreIcon.getBounds().width/2;
        _oScoreIcon.y = _oPlayerText.getY() +_iTextHeight/2 -2;
        
        _oScoreText.setAlign( "left" );
        _oScoreText.setPos(_oScoreIcon.x + _oScoreIcon.getBounds().width/2 + 2, _oPlayerText.getY());
    };

    this.getTextScorePos = function(){
        return {x: _oContainer.x + _oScoreText.getX(), y: _oContainer.y + _oScoreText.getY()};
    };

    this.setNameColor = function(szColor){
        _oPlayerText.setColor(szColor);
    };

    this._init(iX, iY, oParentContainer, szName);
    
}


