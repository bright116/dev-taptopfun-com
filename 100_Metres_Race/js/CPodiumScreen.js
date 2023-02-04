function CPodiumScreen(iLevel){
    
    var _iLevel = iLevel;
    var _iScore = 0;
    var _iPlayerRunner;
    
    var _oBg;
    var _oGroup;
    var _oButRestart;
    var _oButRestartPos;
    
    var _aRunnersInLane = new Array();
    var _aPlayersArrivals = s_oCityInfos.getPlayersArrivals();
    var _aPlacePoints = [100, 50, 25, 10, 9, 8, 7, 6];
    var _aPlayerOrderByScore = [0, 1, 2, 3, 4, 5, 6, 7];
    var _aPlayersPos = [{ x: CANVAS_WIDTH/2-215, y: CANVAS_HEIGHT/2-80 }, { x: CANVAS_WIDTH/2-322, y: CANVAS_HEIGHT/2-56 },{ x: CANVAS_WIDTH/2-108, y: CANVAS_HEIGHT/2-30 }];
        
    this._init = function(){
        this.getRunnerInLane();
        this.addScoreToPlayers();
        this.findBestRunners();
        
        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        
        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_podium'));
        _oGroup.addChild(_oBg);
        
        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("rgba(0,0,0,0.6)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _oGroup.addChild(oFade);
        
        var oPodium = createBitmap(s_oSpriteLibrary.getSprite('podium'));
        oPodium.x = 298;
        oPodium.y = 348;
        _oGroup.addChild(oPodium);
        
        var oBestPlayer = createBitmap(s_oSpriteLibrary.getSprite('final_score'));
        oBestPlayer.x = CANVAS_WIDTH/2;
        oBestPlayer.y = CANVAS_HEIGHT/2-150;
        _oGroup.addChild(oBestPlayer);

        
        s_oStage.addChild(_oGroup);
        var oSprite = s_oSpriteLibrary.getSprite('but_restart');
        _oButRestartPos = {x: (CANVAS_WIDTH/2+150), y: CANVAS_HEIGHT-160};
        _oButRestart = new CGfxButton(_oButRestartPos.x, _oButRestartPos.y, oSprite,_oGroup);
        _oButRestart.addEventListener(ON_MOUSE_UP, this._onContinue, this);
        
        for(var i=0; i < 3; i++){
            
            var oSprite = s_oSpriteLibrary.getSprite("runner_"+_aPlayerOrderByScore[i]+"_pose")
            
            var oBestPlayer = createBitmap(oSprite);
            oBestPlayer.x = _aPlayersPos[i].x;
            oBestPlayer.y = _aPlayersPos[i].y;
            oBestPlayer.regX = oSprite.width/2;
            oBestPlayer.regY = oSprite.height/2;
            oBestPlayer.scaleX = oBestPlayer.scaleY = 0.85;
            s_oStage.addChild(oBestPlayer);
        }
        for(var i=0; i < _aPlayerOrderByScore.length; i++){
            if(_aPlayerOrderByScore[i] === s_iTeamSelected){
                var oText = new createjs.Text((i+1)+TEXT_POSITION," 30px "+FONT, "#ffffff");
                oText.x = CANVAS_WIDTH/2+180;
                oText.y = CANVAS_HEIGHT/2-90;
                oText.textAlign = "center";
                oText.textBaseline = "alphabetic";
                s_oStage.addChild(oText);
                
                var oText = new createjs.Text(TEXT_SCORE+_iScore," 30px "+FONT, "#ffffff");
                oText.x = CANVAS_WIDTH/2+20;
                oText.y = CANVAS_HEIGHT/2-23;
                oText.textAlign = "left";
                oText.textBaseline = "alphabetic";
                s_oStage.addChild(oText);
            }
        }
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
        
    this.show = function(){
        
        _oGroup.visible = true;
        
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500).call(function() {});
        
        $(s_oMain).trigger("share_event",_iScore);
        $(s_oMain).trigger("save_score",[_iScore]);
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
    
    this.findBestRunners = function(){
        var aApp = new Array();
        
        for (var i=0; i < s_aRunnersScore.length; i++) {
            aApp[i] = s_aRunnersScore[i];
        }
        
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < aApp.length; i++) {
                if (aApp[i] < aApp[i+1]) {
                    var temp = aApp[i];
                    aApp[i] = aApp[i+1];
                    aApp[i+1] = temp;
                    
                    var tempPlayerOrder = _aPlayerOrderByScore[i];
                    _aPlayerOrderByScore[i] = _aPlayerOrderByScore[i+1];
                    _aPlayerOrderByScore[i+1] = tempPlayerOrder;
                    
                    swapped = true;
                }
            }
        } while (swapped);
        
    };
    
    this._onContinue = function(){
        s_oStage.removeChild(_oGroup);
        _oButRestart.unload();
        
        s_oGame.onExit();
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButRestart.setPosition(_oButRestartPos.x,_oButRestartPos.y - iNewY);
    };
    
    this._init();
    
    return this;
}
