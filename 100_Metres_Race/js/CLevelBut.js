function CLevelBut(iXPos,iYPos,oSprite,bActive, Level, oCityName, oCityReward){
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _aButton = new Array();
    var _aParams = [];
    var _oButton;
    
    var _oRewardText1;
    var _oRewardText2;
    var _oRewardText3;
    var _oTextContainer;
    this._init = function(iXPos,iYPos,oSprite,bActive){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        
        _oTextContainer = new createjs.Container();
        _oTextContainer.x = iXPos;
        _oTextContainer.y = iYPos;
        s_oStage.addChild(_oTextContainer);
        
        var oData = {   
                        images: [oSprite], 
                        // width, height & registration point of each sprite
                        frames: {width: oSprite.width/2, height: oSprite.height, regX: (oSprite.width/2)/2, regY: oSprite.height/2}, 
                        animations: {state_true:[0],state_false:[1]}
                   };
                   
        var oSpriteSheet = new createjs.SpriteSheet(oData);
         
        _bActive = bActive;
        _oButton = createSprite(oSpriteSheet, "state_"+_bActive,(oSprite.width/2)/2,oSprite.height/2,oSprite.width/2,oSprite.height);
         
        _oButton.mouseEnabled = bActive;
        _oButton.x = 0;
        _oButton.y = 0; 
        _oButton.cursor = "pointer";
        _oButton.stop();
        
        _oTextContainer.addChild(_oButton);
        _aButton.push(_oButton);
        
        var oLevelText = new createjs.Text(oCityName," 13px "+FONT, "#ffffff");
        oLevelText.x = iXPos;
        oLevelText.y = iYPos-70;
        oLevelText.textAlign = "center";
        oLevelText.textBaseline = "alphabetic";
        oLevelText.lineWidth = 200;
        s_oStage.addChild(oLevelText);
        
        _oRewardText1 = new createjs.Text(oCityReward.first+TEXT_CURRENCY," 20px "+FONT, "#fff");
        _oRewardText1.x = 8;
        _oRewardText1.y = -40;
        _oRewardText1.textAlign = "center";
        _oRewardText1.textBaseline = "middle";
        _oRewardText1.lineWidth = 200;
        _oTextContainer.addChild(_oRewardText1);
        
        _oRewardText2 = new createjs.Text(oCityReward.second+TEXT_CURRENCY," 20px "+FONT, "#fff");
        _oRewardText2.x = 8;
        _oRewardText2.y = _oRewardText1.y+35;
        _oRewardText2.textAlign = "center";
        _oRewardText2.textBaseline = "middle";
        _oRewardText2.lineWidth = 200;
        _oTextContainer.addChild(_oRewardText2);
        
        _oRewardText3 = new createjs.Text(oCityReward.third+TEXT_CURRENCY," 20px "+FONT, "#fff");
        _oRewardText3.x = 8;
        _oRewardText3.y = _oRewardText1.y+70;
        _oRewardText3.textAlign = "center";
        _oRewardText3.textBaseline = "middle";
        _oRewardText3.lineWidth = 200;
        _oTextContainer.addChild(_oRewardText3);
        
        this._initListener();
    };
    
    this.scaleText = function(){
        _oTextContainer.scaleY = 0.9;
    };
    
    this.unload = function(){
       _oButton.off("mousedown", this.buttonDown);
       _oButton.off("pressup" , this.buttonRelease);
	   
       s_oStage.removeChild(_oButton);
    };
    
    this._initListener = function(){
       _oButton.on("mousedown", this.buttonDown);
       _oButton.on("pressup" , this.buttonRelease);      
    };
    
    this.viewBut = function(oButton){
        s_oStage.addChild(oButton);
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.addEventListenerWithParams = function(iEvent,cbCompleted, cbOwner,aParams){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };
    
    this.ifClickable = function(){
        if(_oButton.mouseEnabled === true){
            return 1;
        }
        return 0;
    };
    
    this.setActive = function(iLevel, bActive){
        _bActive = bActive;
        _aButton[iLevel].gotoAndStop("state_"+_bActive);
        _aButton[iLevel].mouseEnabled = true;
    };
    
    this.buttonRelease = function(){
        _oTextContainer.scaleX = 1;
        _oTextContainer.scaleY = 1;

        playSound("press_button",1,0);
        
        
        _bActive = !_bActive;
        _oButton.gotoAndStop("state_"+_bActive);

        if(_aCbCompleted[ON_MOUSE_UP]){
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP],_aParams);
        }
    };
    
    this.buttonDown = function(){
        _oTextContainer.scaleX = 0.9;
        _oTextContainer.scaleY = 0.9;

       if(_aCbCompleted[ON_MOUSE_DOWN]){
           _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN],_aParams);
       }
    };
    
    this.setPosition = function(iXPos,iYPos){
        _oButton.x = iXPos;
        _oButton.y = iYPos;
    };
    
    this.setVisible = function(bVisible){
        _oButton.visible = bVisible;
    };
    
    this._init(iXPos,iYPos,oSprite,bActive);
}