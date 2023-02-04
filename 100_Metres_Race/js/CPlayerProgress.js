function CPlayerProgress(){
    
    var _aSpeedPrices = [100, 150, 200, 250];
    var _oSpeedPricesText;
    var _aEnergyPrices = [50, 75, 100, 125];
    var _oEnergyPricesText;
    
    var _oBarSpeedShape;
    var _aBarSpeedOff  = new Array();
    var _aBarSpeedOn   = new Array();
    var _oBarSpeedPosStart = {x: CANVAS_WIDTH/2-135, y: 175};
            
    var _oBarEnergyShape;
    var _aBarEnergyOff = new Array();
    var _aBarEnergyOn  = new Array();
    var _oBarEnergyPosStart = {x: CANVAS_WIDTH/2+165, y: 175};
    
    var _iPlayerMoney = s_iPlayerMoney;
    
    var _szCityName;
    var _iTime;
    var _iReward; 
   
    
    var _oMoneyText;
    
    var _oMedalPos = {x: CANVAS_WIDTH/2-200, y: 222};
    var _oMoneyText;
    
    var _oCityTextPos = {x: CANVAS_WIDTH/2-120, y: 235};
    var _oCityText;
    
    var _oRewardTextPos = {x: CANVAS_WIDTH/2-265, y: 235};
    var _oRewardText;
    
    var _oTimerTextPos = {x: CANVAS_WIDTH/2+200, y: 236};
    var _oTimerText;
    
    var _pStartPosExit;
    var _pStartPosAudio;
    
    var _pStartPosContinue;
    var _oButContinue;
    var _oButExit;
    var _oAudioToggle;
    
    this._init = function(){
        
        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_select_team'));
        s_oStage.addChild(oBg);      
        
        var oFade = new createjs.Shape();
        oFade.graphics.beginFill("rgba(0,0,0,0.6)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(oFade);
        
        var oSprite = s_oSpriteLibrary.getSprite('upgrade_panel');
        var oBox = createBitmap(oSprite);
        oBox.x = CANVAS_WIDTH/2;
        oBox.y = CANVAS_HEIGHT/2;
        oBox.regX = oSprite.width/2;
        oBox.regY = oSprite.height/2;
        s_oStage.addChild(oBox);
        
        var oUpgradeText = new createjs.Text(TEXT_UPGRADE," 20px "+FONT, "#ffffff");
        oUpgradeText.x = CANVAS_WIDTH/2-180;
        oUpgradeText.y = 75;
        oUpgradeText.textAlign = "left";
        oUpgradeText.textBaseline = "alphabetic";
        s_oStage.addChild(oUpgradeText);
        
        _oBarSpeedShape = new createjs.Shape();
        _oBarSpeedShape.graphics.beginFill("#000000").drawRect(_oBarSpeedPosStart.x-165, _oBarSpeedPosStart.y-60, 285, 90);
        _oBarSpeedShape.alpha = 0.01;
        _oBarSpeedShape.on("mousedown", this.tryingToBuySpeed);
        _oBarSpeedShape.cursor = "pointer";
        s_oStage.addChild(_oBarSpeedShape);
            
        _oBarEnergyShape = new createjs.Shape();
        _oBarEnergyShape.graphics.beginFill("#000000").drawRect(_oBarEnergyPosStart.x-160, _oBarEnergyPosStart.y-60, 285, 90);
        _oBarEnergyShape.alpha = 0.01;
        _oBarEnergyShape.on("mousedown", this.tryingToBuyEnergy);
        _oBarEnergyShape.cursor = "pointer";
        s_oStage.addChild(_oBarEnergyShape);
        
        var oBuyText = new createjs.Text(TEXT_BUY," 20px "+FONT, "#ffffff");
        oBuyText.x = CANVAS_WIDTH/2-275;
        oBuyText.y = 175;
        oBuyText.textAlign = "left";
        oBuyText.textBaseline = "alphabetic";
        s_oStage.addChild(oBuyText);
        
        var oBuyText = new createjs.Text(TEXT_BUY," 20px "+FONT, "#ffffff");
        oBuyText.x = CANVAS_WIDTH/2+30;
        oBuyText.y = 175;
        oBuyText.textAlign = "left";
        oBuyText.textBaseline = "alphabetic";
        s_oStage.addChild(oBuyText);
        
        for(var i=0; i < NUM_POWER_UP_AVAILABLE; i++){
            _aBarSpeedOff.push(createBitmap(s_oSpriteLibrary.getSprite('bar-1')));
            _aBarSpeedOff[i].x = _oBarSpeedPosStart.x;
            _aBarSpeedOff[i].y = _oBarSpeedPosStart.y;
            s_oStage.addChild(_aBarSpeedOff[i]);
            
            _aBarSpeedOn.push(createBitmap(s_oSpriteLibrary.getSprite('bar-2')));
            _aBarSpeedOn[i].x = _oBarSpeedPosStart.x;
            _aBarSpeedOn[i].y = _oBarSpeedPosStart.y;
            _aBarSpeedOn[i].visible = false;
            s_oStage.addChild(_aBarSpeedOn[i]);
            
            _oSpeedPricesText = new createjs.Text(_aSpeedPrices[i]+TEXT_CURRENCY," 10px "+FONT, "#ffffff");
            _oSpeedPricesText.x = _oBarSpeedPosStart.x+50;
            _oSpeedPricesText.y = _oBarSpeedPosStart.y+11;
            _oSpeedPricesText.textAlign = "center";
            _oSpeedPricesText.textBaseline = "alphabetic";
            s_oStage.addChild(_oSpeedPricesText);

            _aBarEnergyOff.push(createBitmap(s_oSpriteLibrary.getSprite('bar-1')));
            _aBarEnergyOff[i].x = _oBarEnergyPosStart.x;
            _aBarEnergyOff[i].y = _oBarEnergyPosStart.y;
            s_oStage.addChild(_aBarEnergyOff[i]);
            
            _aBarEnergyOn.push(createBitmap(s_oSpriteLibrary.getSprite('bar-2')));
            _aBarEnergyOn[i].x = _oBarEnergyPosStart.x;
            _aBarEnergyOn[i].y = _oBarEnergyPosStart.y;
            _aBarEnergyOn[i].visible = false;
            s_oStage.addChild(_aBarEnergyOn[i]);
            
            _oEnergyPricesText = new createjs.Text(_aEnergyPrices[i] + TEXT_CURRENCY,"10px "+FONT, "#ffffff");
            _oEnergyPricesText.x = _oBarEnergyPosStart.x + 50;
            _oEnergyPricesText.y = _oBarEnergyPosStart.y + 11;
            _oEnergyPricesText.textAlign = "center";
            _oEnergyPricesText.textBaseline = "alphabetic";
            s_oStage.addChild(_oEnergyPricesText);
            
            _oBarSpeedPosStart.y -= 15;
            _oBarEnergyPosStart.y -= 15;
        }
        
        for(var i = 0; i < s_iSpeedBought; i++){
            this.makeVisibleSpeedBought(i);
        }
        
        for(var i = 0; i < s_iEnergyBought; i++){
            this.makeVisibleEnergyBought(i);
        }
        
        _oMoneyText = new createjs.Text(TEXT_MONEY+": "+_iPlayerMoney+TEXT_CURRENCY," 20px "+FONT, "#ffffff");
        _oMoneyText.x = CANVAS_WIDTH/2-180;
        _oMoneyText.y = 106;
        _oMoneyText.textAlign = "left";
        _oMoneyText.textBaseline = "alphabetic";
        s_oStage.addChild(_oMoneyText);
        
        for( var i=0; i < s_oCityInfos.getNumLevels(); i++){
            _szCityName = s_oCityInfos.getCityName(i);
            _iTime = formatTime(s_oCityInfos.getTimeSpent(i));
            _iReward = s_oCityInfos.getRewardTaken(i);
            var szMedal = s_oCityInfos.getMedal(i);
            
            _oRewardText = new createjs.Text(_iReward+TEXT_CURRENCY," 15px "+FONT, "#ffffff");
            _oRewardText.x = _oRewardTextPos.x;
            _oRewardText.y = _oRewardTextPos.y;
            _oRewardText.textAlign = "center";
            _oRewardText.textBaseline = "alphabetic";
            s_oStage.addChild(_oRewardText);
            
            if(szMedal){
                var oSprite = createBitmap(s_oSpriteLibrary.getSprite(szMedal+'_medal'));
                oSprite.x = _oMedalPos.x;
                oSprite.y = _oMedalPos.y;
                oSprite.scaleX = 0.6;
                oSprite.scaleY = 0.6;
                s_oStage.addChild(oSprite);
            }
            
            _oCityText = new createjs.Text(_szCityName," 15px "+FONT, "#ffffff");
            _oCityText.x = _oCityTextPos.x;
            _oCityText.y = _oCityTextPos.y;
            _oCityText.textAlign = "left";
            _oCityText.textBaseline = "alphabetic";
            s_oStage.addChild(_oCityText);

            _oTimerText = new createjs.Text(_iTime," 15px "+FONT, "#ffffff");
            _oTimerText.x = _oTimerTextPos.x;
            _oTimerText.y = _oTimerTextPos.y;
            _oTimerText.textAlign = "left";
            _oTimerText.textBaseline = "alphabetic";
            s_oStage.addChild(_oTimerText);
            
            _oCityTextPos.y += 37;
            _oMedalPos.y += 37;
            _oRewardTextPos.y += 37;
            _oTimerTextPos.y += 37;
        }
        
        var oSprite = s_oSpriteLibrary.getSprite('but_continue_small');
        _pStartPosContinue = {x: (CANVAS_WIDTH/2+340), y: CANVAS_HEIGHT-91};
        _oButContinue = new CGfxButton( _pStartPosContinue.x, _pStartPosContinue.y, oSprite, s_oStage );
        _oButContinue.addEventListener(ON_MOUSE_UP, this._onButNextRelease, this);
        
        var oSprite = s_oSpriteLibrary.getSprite('but_exit');
        _pStartPosExit = {x: CANVAS_WIDTH - (oSprite.height/2)- 10, y: (oSprite.height/2) + 10};
        _oButExit = new CGfxButton(_pStartPosExit.x, _pStartPosExit.y, oSprite, s_oStage);
        _oButExit.addEventListener(ON_MOUSE_UP, this._onExit, this);

        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            var oExitX = CANVAS_WIDTH - (oSprite.width/2)- 90;
            _pStartPosAudio = {x: oExitX, y: (oSprite.height/2) + 10};
            var oSprite = s_oSpriteLibrary.getSprite('audio_icon');
            _oAudioToggle = new CToggle(_pStartPosAudio.x,_pStartPosAudio.y,oSprite,s_bAudioActive);
            _oAudioToggle.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);          
        }
        
        this.refreshButtonPos(s_iOffsetX,s_iOffsetY);
    };
    
    this.refreshButtonPos = function(iNewX,iNewY){
        _oButExit.setPosition(_pStartPosExit.x - iNewX,iNewY + _pStartPosExit.y);
        if(DISABLE_SOUND_MOBILE === false || s_bMobile === false){
            _oAudioToggle.setPosition(_pStartPosAudio.x - iNewX,iNewY + _pStartPosAudio.y);
        } 
    };
    
    this.makeVisibleSpeedBought = function(i){
        _aBarSpeedOff[i].visible = false;
        _aBarSpeedOn[i].visible = true;
    };
    
    this.makeVisibleEnergyBought = function(i){
        _aBarEnergyOff[i].visible = false;
        _aBarEnergyOn[i].visible = true;
    };
    
    this.tryingToBuySpeed = function(){
        if(s_iSpeedBought < NUM_POWER_UP_AVAILABLE){
            if(s_iPlayerMoney >= _aSpeedPrices[s_iSpeedBought]){
                s_oPlayerProgress.makeVisibleSpeedBought(s_iSpeedBought);
                s_iSpeedAdder += PLAYER_MAX_SPEED_ADDER;
                s_iPlayerMoney -= _aSpeedPrices[s_iSpeedBought];
                s_oPlayerProgress.refreshMoneyCurrency();
                s_iSpeedBought++;
                
                localStorage.setItem("Money", s_iPlayerMoney);
                localStorage.setItem("SpeedBought", s_iSpeedBought);
                localStorage.setItem("SpeedAdder", s_iSpeedAdder);
                if(s_iSpeedBought < NUM_POWER_UP_AVAILABLE){
                    playSound("click",0.5,0);
                }
            }
        }
    };
    
    this.tryingToBuyEnergy = function(){
        if(s_iEnergyBought < NUM_POWER_UP_AVAILABLE){
            if(s_iPlayerMoney >= _aEnergyPrices[s_iEnergyBought]){
                s_oPlayerProgress.makeVisibleEnergyBought(s_iEnergyBought);
                s_iEnergyAdder += PLAYER_ENERGY_ADDER;
                s_iPlayerMoney -= _aEnergyPrices[s_iEnergyBought];
                s_oPlayerProgress.refreshMoneyCurrency();
                s_iEnergyBought++;
                
                localStorage.setItem("Money", s_iPlayerMoney);
                localStorage.setItem("EnergyBought", s_iEnergyBought);
                localStorage.setItem("EnergyAdder", s_iEnergyAdder);
                if(s_iEnergyBought < NUM_POWER_UP_AVAILABLE){
                    playSound("upgrade",1,0);
                }
            }
        }
    };
    
    this.refreshMoneyCurrency = function(){
        _oMoneyText.text = "Money:           "+s_iPlayerMoney+TEXT_CURRENCY;
    };
        
    this._onButNextRelease = function(){
        this.unload();
        s_oMain.gotoSelectLevel(_iPlayerMoney);
    };
    
    this._onExit = function(){
        s_oMain.gotoMenu();  
        $(s_oMain).trigger("end_session");
    };
    
    this._onAudioToggle = function(){
        createjs.Sound.setMute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive;
    };
    
    this.unload = function(){
        s_oStage.removeAllChildren();
        _oButContinue.unload();
        s_oPlayerProgress = null;
    };
    
    s_oPlayerProgress = this;
    
    this._init();
}

var s_oPlayerProgress = null;
