function CGame(oData,  iLevel){
    var _iLevel = iLevel;
    var _iTimeMaxToMove = 200;
    var _iTimeBetweenPress = 0;
    var _iRaceTime = 0;
    var _iPlayerLane = 3;

    var _iNationalitySelected = s_iTeamSelected;
    var _iPlayerPositionArrive = 0;
    
    var _bCanStart = false;
    var _bUpdate = false;
    var _bLeft = false;
    var _bRight = false;
    
    var _oLevelInfos;
    var _oInterface;
    var _oEnergyBar;
    var _oMobileControls;
    var _oVariousHelp = null;
    var _oEndPanel = null;
    var _oParent;

    var _oBackgrounds;
    var _oBGContainer;
    var _oContainerRunner;
    var _aRunners = new Array();
    
    var _aRunnersTeam = [TEAM_0, TEAM_1, TEAM_2, TEAM_3, TEAM_4, TEAM_5, TEAM_6, TEAM_7];
    var _aRunnersPosition = [{x: 404, y: 228}, {x: 452, y: 255}, {x: 504, y: 279}, {x: 556, y: 304}, {x: 608, y: 327}, {x: 657, y: 353}, {x: 709, y: 376}, {x: 758, y: 402}];
    var _aRunnersArrivalPosition = [{x: 8106, y: -1640}, {x: 8154, y: -1616}, {x: 8202, y: -1592}, {x:8250 , y: -1568}, {x: 8298, y:-1544}, {x: 8346, y: -1520}, {x: 8394, y: -1496}, {x: 8442, y: -1472}];

    var _aRunnersArrived = new Array();
    var _aRunnersArrivalOrder = new Array();
    var _aTeamPerLane = new Array();
    
    this._init = function(){
        $(s_oMain).trigger("start_level", _iLevel);
        playSound("crowd",1,-1);
        setVolume(s_oSoundtrack, 0);

            
        _oBGContainer = new createjs.Container();
        s_oStage.addChild(_oBGContainer);
        
        _oBackgrounds = new CScrollingBg(_oBGContainer);
        _oBackgrounds.setArrivalPositions(_aRunnersArrivalPosition);


        var _oPlayerNationality = _aRunnersTeam[_iNationalitySelected];
        _aRunnersTeam[_iNationalitySelected] = null;
                
        _oContainerRunner = new createjs.Container() ;
        s_oStage.addChild( _oContainerRunner );        
                
        for( var i=0; i < NUM_RUNNERS; i++ ){
            if(i !== _iPlayerLane){
                
                if(_aRunnersTeam[i] !== null){
                    _aTeamPerLane.push(_aRunnersTeam[i]);
                    _aRunnersTeam[i] = null;
                }else{
                    if(i === NUM_RUNNERS-1){
                        _aTeamPerLane.push(_aRunnersTeam[_iPlayerLane]);
                        _aRunnersTeam[_iPlayerLane] = null;
                    }else{
                        _aTeamPerLane.push(_aRunnersTeam[i+1]);
                        _aRunnersTeam[i+1] = null;
                    }
                }
                
                var iMaxSpeed       = ENEMY_MAX_SPEED[i]+s_iSpeedAdder;
                var iMinSpeed       = ENEMY_MIN_SPEED[i];
                var iEnergy         = ENEMY_ENERGY[i]+s_iEnergyAdder;
                var iResistenceStep = ENEMY_RESISTENCE_STEP[i];
                var iOccurrenceRun = ENEMY_OCCURRENCE_RUN[i];
                
                
                
                _aRunners.push( new CRunner(_aRunnersPosition[i].x, _aRunnersPosition[i].y, _oContainerRunner, i, false, PLAYER_NAME_AND_SPRITE[_aTeamPerLane[_aTeamPerLane.length-1]],  iMaxSpeed, iMinSpeed, iEnergy, iResistenceStep, iOccurrenceRun ) );
            }else{          // THIS IS THE PLAYER
                _aTeamPerLane.push(_oPlayerNationality);
                
                var iMaxSpeed       = PLAYER_MAX_SPEED+s_iSpeedAdder;
                var iMinSpeed       = PLAYER_MIN_SPEED;
                var iEnergy         = PLAYER_ENERGY+s_iEnergyAdder;
                var iResistenceStep = PLAYER_RESISTENCE_STEP;
                var iOccurrenceRun = 0;
                
                _aRunners.push( new CRunner(_aRunnersPosition[i].x, _aRunnersPosition[i].y,_oContainerRunner, i, true, PLAYER_NAME_AND_SPRITE[_aTeamPerLane[_aTeamPerLane.length-1]],  iMaxSpeed, iMinSpeed, iEnergy, iResistenceStep, iOccurrenceRun ) );
            }
        }
        
        _oInterface = new CInterface();
        _oEnergyBar = new CHealthBar();
        
        DIST_FROM_ARRIVAL = 30;
        if(!s_bMobile){
            document.onkeydown = this.onKeyDown;
        }else{
            _oMobileControls = new CMobileControls();
        }

        this.enableMovement();
    };
    
    this.enableMovement = function(){
        
        var aPlayerInfos = new Array();
        for(var i=0; i < NUM_RUNNERS; i++){
            aPlayerInfos.push(_aRunners[i].getInfos());
        }
        
        _oLevelInfos = new CShowNationalityInLane(aPlayerInfos,_oBGContainer);
        _oVariousHelp = new CVariousHelp(TEXT_START_MOVEMENT, WAIT_FOR_GAME_START);
    };
    
    this.startGame = function(){
        if(_bCanStart){
            _bUpdate = true;
            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].playAnimation();
            }
            return;
        }
        
        _bCanStart = true;
        _oInterface.setGUIClickable();
        
        setTimeout(function(){s_oGame.prepareRunners();},2000);
    };
    
    this.prepareRunners = function(){
        playSound("prepare_runner",1,0);
        for(var i = 0; i < NUM_RUNNERS; i++){
            _aRunners[i].playAnimation();
        }
        
        setTimeout(function(){s_oGame.startRunners();},1500);
    };
    
    this.startRunners = function(){
        playSound("start_race",1,0);
        playSound("crowd_cheers",1,0);
        for(var i = 0; i < NUM_RUNNERS; i++){
            _aRunners[i].changeAnimation(ANIMATION_STARTING);
        }
        
        if(_oLevelInfos){
            _oLevelInfos.unload();
            _oLevelInfos = null;
        }
        
        _bUpdate = true;
    };
    
    this.onKeyDown = function(evt){
        if(!_bUpdate){
            return;
        }
        
        if(!evt){ 
            evt = window.event; 
        } 
        
        if( evt.keyCode === LEFT_DIR ) { //left
            _bLeft = true;
        }else if( evt.keyCode === RIGHT_DIR) { //right
            _bRight = true; 
        }
        
        if(_bLeft && _bRight){
            _aRunners[_iPlayerLane].addSpeed();
        }
        
        evt.preventDefault();
        return false;
    };
    
    this.onButtonDown = function(iButtonPressed){
        
        if(_oVariousHelp !== null){
            _oParent.unloadVariousHelp();
            _oLevelInfos.unload();
            _oLevelInfos = null;
            _bCanStart = true;
            _oInterface.setGUIClickable();
        }
        
        if(!_bUpdate){
            return;
        }
        
        if( iButtonPressed === LEFT_DIR ) { //left
            _bLeft = true;    
   
        }else if( iButtonPressed === RIGHT_DIR ) { //right
            _bRight = true;

        }
        
        if(_bLeft && _bRight){
            _aRunners[_iPlayerLane].addSpeed();
        }
        
    };

    this.moveRunnersWithBG = function(iPlayerSpeed){
        _oBackgrounds.move(iPlayerSpeed);//player selected movement         
        
        var iPlayerDirection = _oBackgrounds.getDirectionVector();
        for( var i=0; i < NUM_RUNNERS; i++ ){
            _aRunners[i].movementAffectedByPlayer(iPlayerSpeed, iPlayerDirection);
        }
    };
    
    this.moveEnemies = function(){
        for( var i=0; i < NUM_RUNNERS; i++ ){
            if( i !== _iPlayerLane){
                if(_aRunners[i].isArrived() === false){
                    var iRand = Math.random();
                    if(iRand > _aRunners[i].getOccurrenceRun()*_aRunners[i].getEnergyProportion()){
                        _aRunners[i].addSpeed();
                    }
                }
                
                _aRunners[i].move();
            }
            _aRunners[i].decreaseSpeed();
            _aRunners[i].increaseEnergy();
        }
    };
    
    this.checkIfIsElapsedTooMuchTimeBetweenPress = function(){
        _iTimeBetweenPress += s_iTimeElaps;

        if(_iTimeBetweenPress > _iTimeMaxToMove){
            _iTimeBetweenPress = 0;
        }else if(_bLeft && _bRight){
            _bLeft = false;
            _bRight = false;
            _iTimeBetweenPress = 0;
        }
        
    };
    
    this.checkDistanceFromArrivalPoint = function(){
        for(var i = 0; i < NUM_RUNNERS; i++){
            _aRunners[i].checkDistance(_oBackgrounds.getArrivalPositions(i));
        }
    };
    
    this.addInArrayPlayerArrived = function(iLane, szName){
        _aRunnersArrived.push({lane: iLane, name: szName, time: formatTime(_iRaceTime)});
        if(_aRunnersArrived.length === 1){
            playSound("crowd_arrival",1,0);
        }
        var aRunnerArrivedLength = _aRunnersArrived.length-1;
        _aRunnersArrivalOrder.push({player: _aTeamPerLane[iLane], position: aRunnerArrivedLength});
        
        _oInterface.addArrivalPanel(_aRunnersArrived[aRunnerArrivedLength]);
        if(iLane === _iPlayerLane && aRunnerArrivedLength+1 <= 3){
            _iPlayerPositionArrive = aRunnerArrivedLength;
            s_oCityInfos.setRewardTaken(_iLevel, _iPlayerPositionArrive);
        }else if(iLane === _iPlayerLane){
            _iPlayerPositionArrive = aRunnerArrivedLength;
        }
        
        if(iLane === _iPlayerLane && s_oCityInfos.getTimeSpent(_iLevel) !== null){
            if(s_oCityInfos.getTimeSpent(_iLevel) > _iRaceTime){
                s_oCityInfos.setTimeSpent(_iLevel, _iRaceTime);
            }
        }else if(iLane === _iPlayerLane){
            s_oCityInfos.setTimeSpent(_iLevel, _iRaceTime);
        }
        
        if(_aRunnersArrived.length === NUM_RUNNERS){
            s_oCityInfos.setPlayersArrivals(_iLevel, _aRunnersArrivalOrder);
            setTimeout(this.gameOver(), 1000);
        }
    };
    
    this.changeBGsDirection = function(){
        _oBackgrounds.changeDir();
    };
    
    this.unloadVariousHelp = function(iHelpType){
        _oVariousHelp.unload();
        _oVariousHelp = null;
        if(iHelpType === CONFIRMATION_ON_EXIT){
            _bCanStart = true;
            
            _bUpdate = true;

            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].playAnimation();
            }
            
        }

        _oInterface.setGUIClickable();
    };
    
    this.unload = function(){
        if(s_bMobile){
            _oMobileControls.unload();
        }else{
            document.onkeydown = null;
        }
        
        createjs.Sound.stop();
        s_oSoundtrack = playSound("soundtrack",1,-1);
        _oInterface.unload();

        createjs.Tween.removeAllTweens();
        s_oStage.removeAllChildren(); 
    };
    
    this.onInfo = function(){
        if(_bUpdate){
            _oVariousHelp = new CVariousHelp(TEXT_START_MOVEMENT, WAIT_FOR_GAME_START);
            _bUpdate = false;
            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].stopAnimation();
            }
        }
    };
    
    this.onInfoExit = function(){
        _oVariousHelp.unload();
        _oVariousHelp = null;
        if(_bCanStart){
            _bUpdate = true;
        
            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].playAnimation();
            }
        }
    };
    
    this.onExitMessage = function(){
        if(_oVariousHelp === null && _bUpdate){
            _oVariousHelp = new CVariousHelp(TEXT_ON_EXIT, CONFIRMATION_ON_EXIT);
            _bUpdate = false;
            _bCanStart = false;
            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].stopAnimation();
            }
        }
    };
    
    this.onExit = function(){
        $(s_oMain).trigger("end_level");
        console.log("请求插屏广告");

        // 展示插屏广告
        HUHU_showInterstitialAd();
        $(s_oMain).trigger("end_session");
        
        
        this.unload();
        s_oMain.gotoMenu();
        
        $(s_oMain).trigger("restart");
    };
    
    this.onContinue = function(){
        $(s_oMain).trigger("end_level");
        console.log("请求插屏广告");

        // 展示插屏广告
        HUHU_showInterstitialAd();
        $(s_oMain).trigger("show_interlevel_ad");
        
        this.unload();
        s_oMain.gotoPlayerProgress();
    };

    this.gameOver = function(){  

        if(_iPlayerPositionArrive < 3){
            if(s_iLevelReached < _iLevel+2){
                s_iLevelReached = _iLevel+2;
            }
        }

        setTimeout(function(){
            if(_oMobileControls){
                _oMobileControls.hideButtons();
            }
            _oInterface.unloadArrivalPanel();
            _bUpdate = false;
            _bCanStart = false;
            //STOP ALL RUNNERS ANIMATIONS
            for(var i = 0; i < NUM_RUNNERS; i++){
                _aRunners[i].stopAnimation();
            }
        }, 500);
        if(_iLevel < s_oCityInfos.getNumLevels()-1){
            _oEndPanel = CEndPanel(_aRunnersArrived, _iLevel);
            _oEndPanel.show();
        }else{
            setVolume(s_oSoundtrack, 1);
            _oEndPanel = new CPodiumScreen(_iLevel); 
            _oEndPanel.show();
        }
    };
    
    this.update = function(){
        if(_bUpdate){
            if(_aRunners[_iPlayerLane].isArrived() === false){
                var iPlayerSpeed = _aRunners[_iPlayerLane].getSpeed();
                this.moveRunnersWithBG(iPlayerSpeed);            
            }else{
                _aRunners[_iPlayerLane].move();
            }
            
            _iRaceTime += s_iTimeElaps;
            _oInterface.refreshTime(formatTime(_iRaceTime));

            this.moveEnemies(); /*
            for(var i=0;i<_aRunners.length;i++){
                if(i !== _iPlayerLane){
                    _aRunners[i].update();
                }
                _aRunners[i].decreaseSpeed();
                _aRunners[i].increaseEnergy();
            }*/
            
            _oEnergyBar.refreshMask(_aRunners[_iPlayerLane].getEnergy());
            
            this.checkIfIsElapsedTooMuchTimeBetweenPress();
            this.checkDistanceFromArrivalPoint();
        }
        
    };

    PLAYER_MAX_SPEED                = oData.player_max_speed;
    PLAYER_MIN_SPEED                = oData.player_min_speed;
    PLAYER_ENERGY                   = oData.player_energy;
    PLAYER_RESISTENCE_STEP          = oData.player_resistence_step;
    PLAYER_MAX_SPEED_ADDER          = oData.player_max_speed_adder;
    PLAYER_ENERGY_ADDER             = oData.player_energy_adder;
    PLAYER_NAME_AND_SPRITE          = [{name: TEXT_TEAM_0, sprite: 0}, {name: TEXT_TEAM_1, sprite: 1},
                                      {name: TEXT_TEAM_2, sprite: 2}, {name: TEXT_TEAM_3, sprite: 3},
                                      {name: TEXT_TEAM_4, sprite: 4}, {name: TEXT_TEAM_5, sprite: 5},
                                      {name: TEXT_TEAM_6, sprite: 6}, {name: TEXT_TEAM_7, sprite: 7}];
    
    s_oGame=this;
    
    _oParent=this;
    this._init();
}

var s_oGame;
