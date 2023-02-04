function CPrintInfosOnPanel(iX, iY, oInfos, iPosition){
    
    var _iPosition = iPosition+1;
    var _szPosition;
    var _iLane = oInfos.lane+1;
    var _szName = oInfos.name;
    var _iArrivalTime = oInfos.time;
    
    var _oContainer;
    
    this.init = function(){
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oContainer.alpha = 0;
        s_oStage.addChild(_oContainer);
        
        switch(_iPosition){
            case 1:
                _szPosition = _iPosition+"st";
                break;
            case 2:
                _szPosition = _iPosition+"nd";
                break;
            case 3:
                _szPosition = _iPosition+"rd";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                _szPosition = _iPosition+"th";
                break;
                
        }
        var oPositionText = new createjs.Text(_szPosition," 15px "+FONT, "#ffffff");
        oPositionText.x = 10;
        oPositionText.y = 20;
        oPositionText.textAlign = "left";
        oPositionText.textBaseline = "alphabetic";
        _oContainer.addChild(oPositionText);
        
        var oNameText = new createjs.Text(_szName," 12px "+FONT, "#ffffff");
        oNameText.x = 10;
        oNameText.y = 38;
        oNameText.textAlign = "left";
        oNameText.textBaseline = "alphabetic";
        _oContainer.addChild(oNameText);
        
        var oLaneText = new createjs.Text(TEXT_LANE+": "+_iLane," 15px "+FONT, "#ffffff");
        oLaneText.x = 230;
        oLaneText.y = 20;
        oLaneText.textAlign = "right";
        oLaneText.textBaseline = "alphabetic";
        _oContainer.addChild(oLaneText);
        
        var oTimeText = new createjs.Text(_iArrivalTime," 15px "+FONT, "#ffffff");
        oTimeText.x = 230;
        oTimeText.y = 40;
        oTimeText.textAlign = "right";
        oTimeText.textBaseline = "alphabetic";
        _oContainer.addChild(oTimeText);
        createjs.Tween.get(_oContainer).to({alpha: 1 }, 400, createjs.Ease.quadInOut).call(function() { });
    };
    
    this.setPos = function(iNewX, iNewY){
        _oContainer.x = iNewX;
        _oContainer.y = iNewY;
    };
    
    this.unload = function(){
        createjs.Tween.get(_oContainer).to({alpha: 0 }, 400, createjs.Ease.quadInOut).call(function() { 
            s_oStage.removeChild(_oContainer);
        });
        
    };
    
    this.init();
}