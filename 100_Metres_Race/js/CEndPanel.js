function CEndPanel(aInfos, iLevel){
    
    var _iLevel = iLevel;
    var _iScore = 0;
    var _iPlayerRunner;
    
    var _oScoreMode;
    var _oScoreText;
    
    var _oBg;
    var _oGroup;
    var _oButRestart;
    var _oButRestartPos;
    var _oFade;
    
    var _aInfos = aInfos;
    var _aPlayersArrivals = s_oCityInfos.getPlayersArrivals();
    var _aRunnersInLane = new Array();
    var _aPlacePoints = [100, 50, 25, 10, 9, 8, 7, 6];
    
    this._init = function(){
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        s_oStage.addChild(_oGroup);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("rgba(0,0,0,0.6)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oFade.on("click",function(){});
        _oGroup.addChild(_oFade);
        
        var oSprite = s_oSpriteLibrary.getSprite('result_panel');
        _oBg = createBitmap(oSprite);
        _oBg.x = CANVAS_WIDTH/2;
        _oBg.y = CANVAS_HEIGHT/2;
        _oBg.regX = oSprite.width/2;
        _oBg.regY = oSprite.height/2;
        _oGroup.addChild(_oBg);
                
        _oScoreMode = new createjs.Text(TEXT_DISCIPLINE," 20px "+FONT, "#ffffff");
        _oScoreMode.x = 500;
        _oScoreMode.y = 160;
        _oScoreMode.textAlign = "left";
        _oScoreMode.textBaseline = "alphabetic";
        _oGroup.addChild(_oScoreMode);
                
        _oScoreText = new createjs.Text(TEXT_RESULT," 22px "+FONT, "#ffffff");
        _oScoreText.x = 500;
        _oScoreText.y = 190;
        _oScoreText.textAlign = "left";
        _oScoreText.textBaseline = "alphabetic";
        _oGroup.addChild(_oScoreText);
        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_continue_small');
        _oButRestartPos = {x: (CANVAS_WIDTH/2+340), y: CANVAS_HEIGHT-172};
        _oButRestart = new CGfxButton(_oButRestartPos.x, _oButRestartPos.y, oSprite,_oGroup);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onContinue, this);
                
        this.getRunnerInLane();
        this.addScoreToPlayers();
    };
        
    this.show = function(){
        
        var iX = 450;
        var iY = 210; 
        for(var i=0; i < _aPlayersArrivals[_iLevel].length; i++){ 
            var oSprite = createBitmap(s_oSpriteLibrary.getSprite("flag_"+_aPlayersArrivals[_iLevel][i].player));
            oSprite.x = iX;
            oSprite.y = iY;
            _oGroup.addChild(oSprite);
            
            iX += 118;
            iY += 17;
            
            var oPosition = new createjs.Text(i+1," 20px "+FONT, "#ffffff");
            oPosition.x = iX - 155;
            oPosition.y = iY;
            oPosition.textAlign = "left";
            oPosition.textBaseline = "alphabetic";
            _oGroup.addChild(oPosition);
            
            var oTeamText = new createjs.Text(_aInfos[i].name," 20px "+FONT, "#ffffff");
            oTeamText.x = iX;
            oTeamText.y = iY;
            oTeamText.textAlign = "left";
            oTeamText.textBaseline = "alphabetic";
            _oGroup.addChild(oTeamText);
            
            iX += 305;
            
            var oTimeText = new createjs.Text(_aInfos[i].time," 20px "+FONT, "#ffffff");
            oTimeText.x = iX;
            oTimeText.y = iY;
            oTimeText.textAlign = "left";
            oTimeText.textBaseline = "alphabetic";
            _oGroup.addChild(oTimeText);
            
            iX = 450;
            iY += 20;
        }
        
        _oGroup.visible = true;
        
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {});
        
        $(s_oMain).trigger("save_score",_iScore);
        
        //LOCAL STORAGE        
        localStorage.setItem("LevelReached", s_iLevelReached);
        localStorage.setItem("Money", s_iPlayerMoney);
        localStorage.setItem("SpeedBought", s_iSpeedBought);
        localStorage.setItem("EnergyBought", s_iEnergyBought);
        localStorage.setItem("SpeedAdder", s_iSpeedAdder);
        localStorage.setItem("EnergyAdder", s_iEnergyAdder);
        localStorage.setItem("TeamSelected", s_iTeamSelected);
        localStorage.setItem("TeamSelectedSprite", s_szTeamSelectedSprite);
        localStorage.setItem("Scores",  JSON.stringify(s_aRunnersScore));
        s_oCityInfos.addCitiesStorage();
    };
    
    this.getRunnerInLane = function(){
        for(var i=0; i < _aPlayersArrivals[0].length; i++){
            _aRunnersInLane.push(PLAYER_NAME_AND_SPRITE[_aPlayersArrivals[_iLevel][i].player].sprite);
            if(_aRunnersInLane[i] === s_iTeamSelected){
                _iPlayerRunner = i;
            }
        }
    };
    
    this.addScoreToPlayers = function(){  
        
        for(var j=0; j < _aPlayersArrivals[_iLevel].length; j++){
            s_aRunnersScore[_aPlayersArrivals[_iLevel][j].player] += _aPlacePoints[_aPlayersArrivals[_iLevel][j].position];
        }
        
        _iScore = s_aRunnersScore[_aPlayersArrivals[_iLevel][_iPlayerRunner].player];
    };
    
    this._onContinue = function(){
        playSound("click",0.5,0);
        s_oStage.removeChild(_oGroup);
        _oButRestart.unload();
        _oFade.off("click",function(){});
        
        s_oGame.onContinue();
    };
    
    this._init();
    
    return this;
}
