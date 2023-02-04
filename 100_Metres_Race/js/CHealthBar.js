function CHealthBar(){
    var _iMaskWidth;
    var _iMaskHeight;
    var _iPerc = 100;
    
    var _oHealthBarContainer;
    var _oHealthBar;
    var _oHealthMask;
    var _pHealthBarContainerPos = {x: CANVAS_WIDTH/2+170, y: CANVAS_HEIGHT-110};
    var _pHealthBarPos = {x: _pHealthBarContainerPos.x - 4, y: _pHealthBarContainerPos.y  + 30};

    this.init = function(){
        var oHealthSprite = s_oSpriteLibrary.getSprite('health');
        _oHealthBar  = createBitmap(oHealthSprite);
        _oHealthBar.x = _pHealthBarPos.x;
        _oHealthBar.y = _pHealthBarPos.y;
        _oHealthBar.regX = oHealthSprite.width;
        _oHealthBar.alpha = 0.9;
        s_oStage.addChild(_oHealthBar);
        
        _iMaskWidth = oHealthSprite.width;
        _iMaskHeight = oHealthSprite.height-6;
        
        _oHealthMask = new createjs.Shape();
        _oHealthMask.graphics.beginFill("rgba(0,255,255,1)").drawRect(_oHealthBar.x-_iMaskWidth, _oHealthBar.y, _iMaskWidth, _iMaskHeight+3);
        s_oStage.addChild(_oHealthMask);
        
        var oHealthSprite = s_oSpriteLibrary.getSprite('energy_bar');
        _oHealthBarContainer  = createBitmap(oHealthSprite);
        _oHealthBarContainer.x = _pHealthBarContainerPos.x;
        _oHealthBarContainer.y = _pHealthBarContainerPos.y;
        _oHealthBarContainer.regX = oHealthSprite.width;
        s_oStage.addChild(_oHealthBarContainer);
       
        _oHealthBar.mask = _oHealthMask;
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };  
        
    this.refreshMask = function(iPerc){
        _iPerc = iPerc;
        _oHealthMask.graphics.clear();
        var iNewMaskWidth = Math.floor((_iPerc*_iMaskWidth)/100);
        _oHealthMask.graphics.beginFill("rgba(0,255,255,0.01)").drawRect(_oHealthBar.x-_iMaskWidth, _oHealthBar.y+3, iNewMaskWidth, _iMaskHeight);
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oHealthBar.y = _pHealthBarPos.y - iNewY;
        _oHealthBarContainer.y = _pHealthBarContainerPos.y - iNewY;
        this.refreshMask(_iPerc);
    };
    
    s_oHealthBar = this;
    
    this.init();
}

var s_oHealthBar = null;