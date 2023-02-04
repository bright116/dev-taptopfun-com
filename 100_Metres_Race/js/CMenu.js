function CMenu(){
    var _oBg;
    var _oButPlay;
    var _oButContinue = null;
    var _oButInfo;
    var _oFade;
    var _oAudioToggle;
    var _oVariousHelp = null;
    
    var _pStartPosAudio;
    var _pStartPosPlay;
    var _pStartPosContinue;
    var _pStartPosInfo;
    
    this._init = function(){
        if( localStorage.getItem("LevelReached") === null || localStorage.getItem("SpeedBought") === null || localStorage.getItem("EnergyBought") === null || localStorage.getItem("SpeedAdder") === null || localStorage.getItem("TeamSelectedSprite") === null || localStorage.getItem("TeamSelected") === null || s_iLevelReached >= s_oCityInfos.getNumLevels()){            
            this.removeLocalStorage();
        }else{
            s_iLevelReached = parseInt(localStorage.getItem("LevelReached"));
            s_iPlayerMoney = parseInt(localStorage.getItem("Money"));
            s_iSpeedBought = parseInt(localStorage.getItem("SpeedBought"));
            s_iEnergyBought = parseInt(localStorage.getItem("EnergyBought"));
            s_iSpeedAdder = parseInt(parseInt(localStorage.getItem("SpeedAdder")));
            s_iEnergyAdder = parseInt(localStorage.getItem("EnergyAdder"));
            s_iTeamSelected = parseInt(localStorage.getItem("TeamSelected"));
            s_szTeamSelectedSprite = localStorage.getItem("TeamSelectedSprite");
            s_aRunnersScore = JSON.parse(localStorage.getItem("Scores"));
            s_oCityInfos.getCitiesStorage();
        }

        _oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        s_oStage.addChild(_oBg);
        
        if(s_iLevelReached < 2){
            var oSprite = s_oSpriteLibrary.getSprite('but_play');
            _pStartPosPlay = {x: (CANVAS_WIDTH/2), y: CANVAS_HEIGHT -110};
            _oButPlay = new CGfxButton(_pStartPosPlay.x,_pStartPosPlay.y,oSprite,s_oStage);
            _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
        }else{
            var oSprite = s_oSpriteLibrary.getSprite('but_play');
            _pStartPosPlay = {x: (CANVAS_WIDTH/2-200), y: CANVAS_HEIGHT -110};
            _oButPlay = new CGfxButton(_pStartPosPlay.x,_pStartPosPlay.y,oSprite,s_oStage);
            _oButPlay.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
            
            var oSprite = s_oSpriteLibrary.getSprite('but_continue');
            _pStartPosContinue = {x: (CANVAS_WIDTH/2+200), y: CANVAS_HEIGHT -110};
            _oButContinue = new CGfxButton(_pStartPosContinue.x,_pStartPosContinue.y,oSprite,s_oStage);
            _oButContinue.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this);
        }
        
        var oSprite = s_oSpriteLibrary.getSprite('but_credits');
        _pStartPosInfo = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10}; 
        _oButInfo = new CGfxButton(_pStartPosInfo.x,_pStartPosInfo.y,oSprite,s_oStage);
        _oButInfo.addEventListener(ON_MOUSE_UP, this._onCredits, this);
     
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _pStartPosAudio = {x: CANVAS_WIDTH - (oSprite.height/2)- 90, y: (oSprite.height/2) + 10};            
            _oAudioToggle = new CToggle(_pStartPosAudio.x, _pStartPosAudio.y, oSprite, s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);   
            
            if(s_oSoundtrack === null){
                s_oSoundtrack = playSound("soundtrack",1,-1);
            }
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        
        s_oStage.addChild(_oFade);
        
        createjs.Tween.get(_oFade).to({alpha:0}, 1000).call(function(){_oFade.visible = false;}); 

        var oSprite = s_oSpriteLibrary.getSprite('sitelogo');
        _ositelogo = new CTextButton((CANVAS_WIDTH/2)+400,CANVAS_HEIGHT - 120,oSprite,' ',"blackplotan","#ffffff",130);
        _ositelogo.addEventListener(ON_MOUSE_UP, this._onSiteLogoRelease, this); 
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this._onSiteLogoRelease = function(){
		CreateLinksInGame('100-Metres-Race','pregame','logo');
    };
	
    this.unload = function(){
        _oButPlay.unload(); 
        _oButPlay = null;
        _oFade.visible = false;
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        if(_oVariousHelp !== null){
            _oVariousHelp.unload();
            _oVariousHelp = null;
        }
            
        s_oStage.removeChild(_oBg);
        _oBg = null;
        s_oMenu = null;
    };
    
    this.removeLocalStorage = function(){
        s_iLevelReached = 1;
        s_iPlayerMoney = 0;
        s_iSpeedBought = 0;
        s_iEnergyBought = 0;
        s_iSpeedAdder = 0;
        s_iEnergyAdder = 0;
        s_iTeamSelected = 0;
        s_szTeamSelectedSprite = "runner_0";
        s_aRunnersScore = [0, 0, 0, 0, 0, 0, 0, 0];
            
        s_oCityInfos.removeCitiesStorage();
        localStorage.removeItem("LevelReached");
        localStorage.removeItem("Money");
        localStorage.removeItem("SpeedBought");
        localStorage.removeItem("EnergyBought");
        localStorage.removeItem("SpeedAdder");
        localStorage.removeItem("EnergyAdder");
        localStorage.removeItem("TeamSelected");
        localStorage.removeItem("TeamSelectedSprite");
        localStorage.removeItem("Scores");
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }
        _oButPlay.setPosition(_pStartPosPlay.x,_pStartPosPlay.y - iNewY);
        if(_oButContinue){
            _oButContinue.setPosition(_pStartPosContinue.x,_pStartPosContinue.y - iNewY);
        }
        _oButInfo.setPosition(_pStartPosInfo.x - iNewX,iNewY + _pStartPosInfo.y);
    };
    
    this._onAudioToggle = function(){
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onCredits = function(){
        new CCreditsPanel();
    };
    
    this._onButPlayRelease = function(){
        $(s_oMain).trigger("start_session");
        
        if(s_iLevelReached < 2){
            this.unload();
            s_oMain.gotoTeamSelect();
        }else{
            if(_oVariousHelp === null){
                _oVariousHelp = new CVariousHelp(TEXT_ON_CAREER_RESET, CONFIRMATION_ON_CAREER_RESET);
            }
        }
    };
    
    this._onButContinueRelease = function(){
        $(s_oMain).trigger("start_session");
        this.unload();
        
        s_oMain.gotoSelectLevel();
        
    };
    
    this.unloadVariousHelp = function(){
        _oVariousHelp.unload();
        _oVariousHelp = null;
    };
    
    this.onContinue = function(){
        this.removeLocalStorage();
        this.unload();
        s_oMain.gotoTeamSelect();
    };
    
	
    s_oMenu = this;
    
    if(s_oCityInfos !== null){
        s_oCityInfos.unload();
        s_oCityInfos = null;
    }
        s_oCityInfos = new CCitySettings();
    
    this._init();
}

var s_oMenu = null;