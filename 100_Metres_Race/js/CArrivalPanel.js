function CArrivalPanel(iX,iY,oParentContainer){
    var _pStartPos;
    var _oPositionText;
    var _oNameText;
    var _oLaneText;
    var _oTimeText;
    
    var _oContainer;
    var _oParentContainer;
    
    this._init = function(){
        _pStartPos = {x:iX,y:iY};
        
        _oContainer = new createjs.Container();
        _oContainer.x = _pStartPos.x;
        _oContainer.y = _pStartPos.y;
        _oContainer.visible = false;
        _oParentContainer.addChild(_oContainer);

        var oBg = createBitmap(s_oSpriteLibrary.getSprite('arrival_panel'));
        _oContainer.addChild(oBg);
        
        
        _oPositionText = new createjs.Text(""," 15px "+FONT, "#ffffff");
        _oPositionText.x = 10;
        _oPositionText.y = 20;
        _oPositionText.textAlign = "left";
        _oPositionText.textBaseline = "alphabetic";
        _oContainer.addChild(_oPositionText);
        
        _oNameText = new createjs.Text(""," 12px "+FONT, "#ffffff");
        _oNameText.x = 10;
        _oNameText.y = 38;
        _oNameText.textAlign = "left";
        _oNameText.textBaseline = "alphabetic";
        _oContainer.addChild(_oNameText);
        
        _oLaneText = new createjs.Text(TEXT_LANE+": "," 15px "+FONT, "#ffffff");
        _oLaneText.x = 230;
        _oLaneText.y = 20;
        _oLaneText.textAlign = "right";
        _oLaneText.textBaseline = "alphabetic";
        _oContainer.addChild(_oLaneText);
        
        _oTimeText = new createjs.Text(""," 15px "+FONT, "#ffffff");
        _oTimeText.x = 230;
        _oTimeText.y = 40;
        _oTimeText.textAlign = "right";
        _oTimeText.textBaseline = "alphabetic";
        _oContainer.addChild(_oTimeText);

    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(_oContainer.visible){
            _oContainer.x = _pStartPos.x-iNewX;
            _oContainer.y = _pStartPos.y+iNewY;
        }
    };
    
    this.show = function(iXToArrive,oInfos,iPosition){
        var szPosition = "";
        switch(iPosition){
            case 1:
                szPosition = iPosition+"st";
                break;
            case 2:
                szPosition = iPosition+"nd";
                break;
            case 3:
                szPosition = iPosition+"rd";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                szPosition = iPosition+"th";
                break;
                
        }
        
        var iLane = oInfos.lane+1;
        var szName = oInfos.name;
        var iArrivalTime = oInfos.time;

        _oPositionText.text = szPosition;
        _oLaneText.text = TEXT_LANE+": "+iLane;
        _oNameText.text = szName;
        _oTimeText.text = iArrivalTime;
        
        _oContainer.visible = true;
        createjs.Tween.get(_oContainer).to({x: iXToArrive }, 100, createjs.Ease.quadInOut).call(function(){_pStartPos = {x:_oContainer.x,y:_oContainer.y};});
    };
    
    this.hide = function(iX){
        createjs.Tween.get(_oContainer).to({x: iX }, 300, createjs.Ease.quadInOut).call(function() {_oContainer.visible = false;});
    };
    
    this.getX = function(){
        return _oContainer.x;
    };
    
    this.getY = function(){
        return _oContainer.y;
    };
    
    _oParentContainer = oParentContainer;
    
    this._init();
}