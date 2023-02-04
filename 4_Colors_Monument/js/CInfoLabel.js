function CInfoLabel(iX, iY, oParentContainer){
    var _oContainer;
    var _oText;
    
    this._init = function(iX, iY, oParentContainer){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        oParentContainer.addChild(_oContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('info_label');
        var oLabel = createBitmap(oSprite);
        oLabel.regX = oSprite.width/2;
        oLabel.regY = oSprite.height/2;
        _oContainer.addChild(oLabel);
        
        
        var iTextX = 0;
        var iTextY = 0;
        var iWidth = oSprite.width-20;
        var iHeight = 80;
        _oText = new CTLText(_oContainer, 
                    iTextX - iWidth/2, iTextY - iHeight/2, iWidth, iHeight, 
                    30, "center", "#fff", PRIMARY_FONT, 1.2,
                    0, 0,
                    sprintf(TEXT_PTS_TO_WINNER,0),
                    true, true, true,
                    false );
        
        this.pulseAnimation();
        
    };
    
    this.setOnTop = function(){
        oParentContainer.setChildIndex(_oContainer,oParentContainer.numChildren-1);
    };
    
    this.setPosition = function(iX, iY, iSide){
        _oContainer.x = iX;
        _oContainer.y = iY;
        
        //SWITCH ON iSide TO CHOOSE DIFFERENT BEHAVIOUR
    };
    
    this.setTextScore = function(szText){
        _oText.refreshText( szText );
    };
    
    this.setVisible = function(bVal){
        _oContainer.visible = bVal;
        if(bVal){
            this.pulseAnimation();
        }else{
            createjs.Tween.removeTweens(_oContainer);
        }
    };
    
    this.pulseAnimation = function () {
        createjs.Tween.get(_oContainer, {loop: -1}).to({scaleX: 0.9, scaleY: 0.9}, 850, createjs.Ease.quadOut).to({scaleX: 1, scaleY: 1}, 650, createjs.Ease.quadIn);
    };
    
    this._init(iX, iY, oParentContainer);
}


