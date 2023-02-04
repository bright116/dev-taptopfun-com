function CMobileControls(){
    
    var _pStartPosButtonLeft = {x: 100, y: CANVAS_HEIGHT-150};
    var _oButMovementLeft;
    var _pStartPosButtonRight = {x: CANVAS_WIDTH - 100, y: CANVAS_HEIGHT-150};
    var _oButMovementRight;
    var _oButMovementRight;
    
    this.init = function(){
        
        var oSprite = s_oSpriteLibrary.getSprite('left_button');
        _oButMovementLeft = new CGfxButton(_pStartPosButtonLeft.x, _pStartPosButtonLeft.y, oSprite, s_oStage);
        _oButMovementLeft.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onButtonDown, this, LEFT_DIR);

        var oSprite = s_oSpriteLibrary.getSprite('right_button');
        _oButMovementRight = new CGfxButton(_pStartPosButtonRight.x, _pStartPosButtonRight.y, oSprite, s_oStage);
        _oButMovementRight.addEventListenerWithParams(ON_MOUSE_DOWN, s_oGame.onButtonDown, this, RIGHT_DIR);
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.spawnButtonForBar = function(){
        _oButMovementLeft.setVisible(false);
        _oButMovementRight.setVisible(false);
    };
    
    this.hideButtonForBar = function(){
        _oButMovementLeft.setVisible(true);
        _oButMovementRight.setVisible(true);
    };
    
    this.hideButtons = function(){
        _oButMovementLeft.setVisible(false);
        _oButMovementRight.setVisible(false);
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        
        _oButMovementLeft.setPosition(_pStartPosButtonLeft.x + iNewX,_pStartPosButtonLeft.y);
        _oButMovementRight.setPosition(_pStartPosButtonRight.x - iNewX,_pStartPosButtonRight.y);
        
    };
    
    this.unload = function(){
        _oButMovementLeft.unload();
        _oButMovementRight.unload();
    };
    
    s_oMobileControls = this;
    
    this.init();
}

var s_oMobileControls = null;