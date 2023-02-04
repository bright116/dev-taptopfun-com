function CShowNationalityInLane(aRunnersInfo,oParentContainer){
    
    var _aRunnersInfo = aRunnersInfo;
    
    var _oContainer;
    var _oParentContainer;
    
    var _aRunnerNationalityPos = [{x:446, y: 228}, {x:496, y: 252}, {x:547, y:276 }, {x:598, y: 300}, {x:649, y: 324}, {x:700, y: 348}, {x:751, y: 372}, {x:804, y: 396}];
    var _oRunnerNationality;
    
    this._init = function(){
        
        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);
        
        for( var i=0; i < _aRunnersInfo.length; i++){
            
            var oSprite = s_oSpriteLibrary.getSprite("flag_runner_"+_aRunnersInfo[i].sprite+"_game")
            _oRunnerNationality = createBitmap(oSprite);
            _oRunnerNationality.x = _aRunnerNationalityPos[i].x;
            _oRunnerNationality.y = _aRunnerNationalityPos[i].y;
            _oContainer.addChild(_oRunnerNationality);
            
        }
    };
    
    this._onButNextRelease = function(){
        s_oGame.enableMovement();
        this.unload();
    };
    
    this.unload = function(){
        createjs.Tween.get(_oContainer).to({alpha:0 }, 500).call(function() {_oParentContainer.removeChild(_oContainer);});        
    };
    
    s_oShowLevelInfos = this;
    _oParentContainer = oParentContainer;
    
    this._init();
}

var s_oShowLevelInfos = null;
