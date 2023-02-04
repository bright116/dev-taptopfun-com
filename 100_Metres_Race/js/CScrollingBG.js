function CScrollingBg(oContainer){
    var _aScrollingBg = new Array();

    var _aArrivalPosition;
    
    var _vDirection = new CVector2(0, 1);
    
    var _oContainer = oContainer;
    
    this._init = function(){
        var oSpriteTile = s_oSpriteLibrary.getSprite('track_0');
        _aScrollingBg[0] = createBitmap(oSpriteTile);
        _aScrollingBg[0].scaleX = _aScrollingBg[0].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[0]); 
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_1');
        _aScrollingBg[1] = createBitmap(oSpriteTile);
        _aScrollingBg[1].y = -CANVAS_HEIGHT;
        _aScrollingBg[1].scaleX = _aScrollingBg[1].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[1]); 
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_2');
        _aScrollingBg[2] = createBitmap(oSpriteTile);
        _aScrollingBg[2].x = CANVAS_WIDTH;
        _aScrollingBg[2].scaleX = _aScrollingBg[2].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[2]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_3');
        _aScrollingBg[3] = createBitmap(oSpriteTile);
        _aScrollingBg[3].x = CANVAS_WIDTH;
        _aScrollingBg[3].y = -CANVAS_HEIGHT;
        _aScrollingBg[3].scaleX = _aScrollingBg[3].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[3]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_4');
        _aScrollingBg[4] = createBitmap(oSpriteTile);
        _aScrollingBg[4].x = CANVAS_WIDTH*2;
        _aScrollingBg[4].scaleX = _aScrollingBg[4].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[4]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_5');
        _aScrollingBg[5] = createBitmap(oSpriteTile);
        _aScrollingBg[5].x = CANVAS_WIDTH*2;
        _aScrollingBg[5].y = -CANVAS_HEIGHT;
        _aScrollingBg[5].scaleX = _aScrollingBg[5].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[5]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_6');
        _aScrollingBg[6] = createBitmap(oSpriteTile);
        _aScrollingBg[6].x = CANVAS_WIDTH*2;
        _aScrollingBg[6].y = -CANVAS_HEIGHT*2;
        _aScrollingBg[6].scaleX = _aScrollingBg[6].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[6]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_7');
        _aScrollingBg[7] = createBitmap(oSpriteTile);
        _aScrollingBg[7].x = CANVAS_WIDTH*3;
        _aScrollingBg[7].y = -CANVAS_HEIGHT;
        _aScrollingBg[7].scaleX = _aScrollingBg[7].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[7]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_8');
        _aScrollingBg[8] = createBitmap(oSpriteTile);
        _aScrollingBg[8].x = CANVAS_WIDTH*3;
        _aScrollingBg[8].y = -CANVAS_HEIGHT*2;
        _aScrollingBg[8].scaleX = _aScrollingBg[8].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[8]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_9');
        _aScrollingBg[9] = createBitmap(oSpriteTile);
        _aScrollingBg[9].x = CANVAS_WIDTH*4;
        _aScrollingBg[9].y = -CANVAS_HEIGHT;
        _aScrollingBg[9].scaleX = _aScrollingBg[9].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[9]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_10');
        _aScrollingBg[10] = createBitmap(oSpriteTile);
        _aScrollingBg[10].x = CANVAS_WIDTH*4;
        _aScrollingBg[10].y = -CANVAS_HEIGHT*2;
        _aScrollingBg[10].scaleX = _aScrollingBg[10].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[10]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_11');
        _aScrollingBg[11] = createBitmap(oSpriteTile);
        _aScrollingBg[11].x = CANVAS_WIDTH*4;
        _aScrollingBg[11].y = -CANVAS_HEIGHT * 3;
        _aScrollingBg[11].scaleX = _aScrollingBg[11].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[11]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_12');
        _aScrollingBg[12] = createBitmap(oSpriteTile);
        _aScrollingBg[12].x = CANVAS_WIDTH*5;
        _aScrollingBg[12].y = -CANVAS_HEIGHT*2;
        _aScrollingBg[12].scaleX = _aScrollingBg[12].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[12]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_13');
        _aScrollingBg[13] = createBitmap(oSpriteTile);
        _aScrollingBg[13].x = CANVAS_WIDTH*5;
        _aScrollingBg[13].y = -CANVAS_HEIGHT*3;
        _aScrollingBg[13].scaleX = _aScrollingBg[13].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[13]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_14');
        _aScrollingBg[14] = createBitmap(oSpriteTile);
        _aScrollingBg[14].x = CANVAS_WIDTH*5;
        _aScrollingBg[14].y = -CANVAS_HEIGHT*4;
        _aScrollingBg[14].scaleX = _aScrollingBg[14].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[14]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_15');
        _aScrollingBg[15] = createBitmap(oSpriteTile);
        _aScrollingBg[15].x = CANVAS_WIDTH*6;
        _aScrollingBg[15].y = -CANVAS_HEIGHT*2;
        _aScrollingBg[15].scaleX = _aScrollingBg[15].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[15]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_16');
        _aScrollingBg[16] = createBitmap(oSpriteTile);
        _aScrollingBg[16].x = CANVAS_WIDTH*6;
        _aScrollingBg[16].y = -CANVAS_HEIGHT*3;
        _aScrollingBg[16].scaleX = _aScrollingBg[16].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[16]);
        
        oSpriteTile = s_oSpriteLibrary.getSprite('track_17');
        _aScrollingBg[17] = createBitmap(oSpriteTile);
        _aScrollingBg[17].x = CANVAS_WIDTH*6;
        _aScrollingBg[17].y = -CANVAS_HEIGHT*4;
        _aScrollingBg[17].scaleX = _aScrollingBg[17].scaleY = s_iScale;
        _oContainer.addChild(_aScrollingBg[17]);
        
        var iAngle = (-76) * (Math.PI  /180);
        rotateVector2D(iAngle, _vDirection);
    };
    
    this.setArrivalPositions = function(aArrivalPositions){
        _aArrivalPosition = aArrivalPositions;/*
        for(var i=0; i < _aArrivalPosition.length; i++){
            _aShapeArrival.push(new createjs.Shape());
            _aShapeArrival[i].graphics.beginFill("#000000").drawRect(_aArrivalPosition[i].x, _aArrivalPosition[i].y, 10, 10);
            _aShapeArrival[i].alpha = 0.5;
            s_oStage.addChild(_aShapeArrival[i]);
        }*/
    };
    
    this.changeDir = function(){
        var iAngle = (180) * (Math.PI  /180);
        rotateVector2D(iAngle, _vDirection);
    };
    
    this.move = function(iSpeed){  
        _oContainer.x += (iSpeed * _vDirection.getX());
        _oContainer.y += (iSpeed * _vDirection.getY());
        
        for(var i=0; i < _aArrivalPosition.length; i++){
            _aArrivalPosition[i].x += (iSpeed * _vDirection.getX());
            _aArrivalPosition[i].y += (iSpeed * _vDirection.getY());
        }
        
        
    };
    
    this.getArrivalPositions = function(i){
        var vVectorApp = new CVector2(_aArrivalPosition[i].x, _aArrivalPosition[i].y)
        return vVectorApp;
    };
    
    this.getDirectionVector = function(){
        return _vDirection;
    };
    
    this._init();
}