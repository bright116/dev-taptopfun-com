function CInterface(){
    
    var _oAudioToggle;
    var _oButExit;
    var _oButInfo;
    
    var _pStartPosExit;
    var _pStartPosInfo;
    var _pStartPosAudio;
    
    var _aArrivalPanels = new Array();
    var _aArrivalPanelPosition;
    var _iPositionArrived = 0;
    
    var _bClickable = false;
    
    var _oTimeBg;
    var _oTimeBgPos = {x: 10, y: 15};
    var _oTime;
    var _oTimePos = {x: 24, y: 60};
    
    this._init = function(){ 
        var oExitX;        
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.width/2)- 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_info');
        _pStartPosInfo = {x: CANVAS_WIDTH - (oSprite.width/2)- 90, y: (oSprite.height/2) + 10};
        _oButInfo = new CGfxButton(_pStartPosInfo.x, _pStartPosInfo.y, oSprite, s_oStage);
        _oButInfo.addEventListener(ON_MOUSE_UP, this._onInfo, this);
        
        oExitX = CANVAS_WIDTH - (oSprite.width/2)- 170;
        _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
        
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
        
        _oTimeBg = createBitmap(s_oSpriteLibrary.getSprite('time_panel'));
        _oTimeBg.x = _oTimeBgPos.x;
        _oTimeBg.y = _oTimeBgPos.y;
        s_oStage.addChild(_oTimeBg);
        
        _oTime = new createjs.Text("00:00:000"," 34px "+FONT_2, "#fff");
        _oTime.x = _oTimePos.x;
        _oTime.y = _oTimePos.y;
        _oTime.textAlign = "left";
        _oTime.textBaseline = "alphabetic";
        s_oStage.addChild(_oTime);

        var oSprite = s_oSpriteLibrary.getSprite('sitelogo2');
        _ositelogo = new CTextButton(CANVAS_WIDTH-460,40,oSprite,' ',"blackplotan","#ffffff",130);
        _ositelogo.addEventListener(ON_MOUSE_UP, this._onSiteLogo2Release, this);
        
        _aArrivalPanelPosition = [{x: CANVAS_WIDTH-250, y: 100}, {x: CANVAS_WIDTH-250, y: 150}, {x: CANVAS_WIDTH-250, y: 200}, {x: CANVAS_WIDTH-250, y: 250}, {x: CANVAS_WIDTH-250, y: 300}, {x: CANVAS_WIDTH-250, y: 350}, {x: CANVAS_WIDTH-250, y: 400}, {x: CANVAS_WIDTH-250, y: 450}];
        for(var i=0; i < NUM_RUNNERS; i++){
            _aArrivalPanels.push(new CArrivalPanel(CANVAS_WIDTH,_aArrivalPanelPosition[i].y,s_oStage));
        }
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    this._onSiteLogo2Release = function(){
		CreateLinksInGame('100-Metres-Race','game','logo');
    };
    
    this.addArrivalPanel = function(oInfos){
        _aArrivalPanels[_iPositionArrived].show(CANVAS_WIDTH - s_iOffsetX - 250,oInfos,_iPositionArrived+1);
        
        _iPositionArrived++;
    };
    
    this.unloadArrivalPanel = function(){
        for(var i=0; i < _aArrivalPanels.length; i++){
            _aArrivalPanels[i].hide(CANVAS_WIDTH+250);
        }
    };
    
    this.refreshTime = function(iValue){
        _oTime.text = iValue;
    };
    
    this.unload = function(){
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.unload();
            _oAudioToggle = null;
        }
        
        _oButExit.unload();
        _oButInfo.unload();
        
        s_oInterface = null;
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        _oButInfo.setPosition(_pStartPosInfo.x - iNewX,iNewY + _pStartPosInfo.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        }     
        _oTime.x = _oTimePos.x + iNewX;
        _oTime.y = _oTimePos.y + iNewY;
        _oTimeBg.x = _oTimeBgPos.x + iNewX;
        _oTimeBg.y = _oTimeBgPos.y + iNewY;
        
        for(var i=0; i < NUM_RUNNERS; i++){
            _aArrivalPanels[i].refreshButtonPos(iNewX,iNewY);
        }
    };
    
    this.setGUIClickable = function(){
        _bClickable = true;
    };
    
    this._onButRestartRelease = function(){
        s_oGame.restartGame();
    };
    
    this.onExitFromHelp = function(){
        _oHelpPanel.unload();
    };
    
    this._onAudioToggle = function(){
        if(!_bClickable){
            _oAudioToggle.setActive(true);
            return;
        }
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this._onInfo = function(){
        if(!_bClickable){
            return;
        }
        s_oGame.onInfo();  
    };
    
    this._onExit = function(){
        if(!_bClickable){
            return;
        }
        s_oGame.onExitMessage();  
    };
    
    s_oInterface = this;
    
    this._init();
    
    return this;
}

var s_oInterface = null;