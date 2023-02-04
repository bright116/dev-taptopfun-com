function CSummaryPanel(oParentContainer){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _szWinColor;
    
    var _aRankInfo;
    
    var _oFade;
    var _oBg;
    var _oGroup;
    
    var _oMsgText;
    var _oMatchScoreText;
    var _oLeaderboardContainer;
    var _oCup;
    
    var _oButHome;
    var _oButShow;
    var _oButNext;
    var _oParent;
    
    this._init = function(){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        oParentContainer.addChild(_oFade);

        _oGroup = new createjs.Container();
        _oGroup.alpha = 0;
        _oGroup.visible=false;
        oParentContainer.addChild(_oGroup);

        var oSprite = s_oSpriteLibrary.getSprite('msg_box');
        _oBg = createBitmap(oSprite);
        var oBgInfo = _oBg.getBounds();
        _oBg.regX = oBgInfo.width/2;
        _oBg.regY = oBgInfo.height/2;
        _oBg.x = CANVAS_WIDTH/2;
        _oBg.y = CANVAS_HEIGHT/2;
        _oGroup.addChild(_oBg);

        _oLeaderboardContainer = new createjs.Container();
        _oLeaderboardContainer.x = _oBg.x;
        _oLeaderboardContainer.y = _oBg.y-10;
        _oGroup.addChild(_oLeaderboardContainer);

        var iNum = NUM_PLAYERS;
        var iHeight = 40*iNum;
        _aRankInfo = new Array();
        for(var i=0; i<iNum; i++){
            _aRankInfo[i] = new CPlayerInfo(0, 0, _oLeaderboardContainer, "szPlayerName");
            _aRankInfo[i].setPosition(0, -iHeight/2 + i*(iHeight/(iNum-1)), BOTTOM)
        }

        _szWinColor = "#35bd1b";
        _oMatchScoreText = new createjs.Text(0," 30px "+PRIMARY_FONT, _szWinColor);
        _oMatchScoreText.textBaseline = "middle";
        _oLeaderboardContainer.addChild(_oMatchScoreText);

        var iTextX = CANVAS_WIDTH/2;
        var iTextY = CANVAS_HEIGHT/2 - 185;
        var iWidth = 500;
        var iHeight = 150;
        _oMsgText = new CTLText(_oGroup, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SUMMARY,
                    true, true, true,
                    false );

        
        
        var oSprite = s_oSpriteLibrary.getSprite('cup_icon');
        _oCup = createBitmap(oSprite);
        _oCup.regX = oSprite.width/2;
        _oCup.regY = oSprite.height/2;
        _oCup.x = -300;
        _oCup.y = _aRankInfo[0].getTextScorePos().y;
        _oCup.visible = false;
        _oLeaderboardContainer.addChild(_oCup);
                    

        var iY = 170;

        oSprite = s_oSpriteLibrary.getSprite("but_home");
        _oButHome = new CGfxButton(CANVAS_WIDTH/2-180,CANVAS_HEIGHT/2+iY,oSprite,_oGroup);
        _oButHome.addEventListener(ON_MOUSE_DOWN,this._onExit, this);
        
        oSprite = s_oSpriteLibrary.getSprite("but_show");
        _oButShow = new CGfxButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2+iY,oSprite,_oGroup);
        _oButShow.addEventListener(ON_MOUSE_DOWN,this._onShow, this);
        
        oSprite = s_oSpriteLibrary.getSprite("but_next");
        _oButNext = new CGfxButton(CANVAS_WIDTH/2+180,CANVAS_HEIGHT/2+iY,oSprite,_oGroup);
        _oButNext.addEventListener(ON_MOUSE_DOWN,this._onNext, this);
        _oButNext.pulseAnimation();
        
        
    };
    
    this.unload = function(){
        _oButNext.unload();
        _oButShow.unload();
        _oButHome.unload();
        
        _oFade.removeAllEventListeners();
        _oGroup.removeAllEventListeners();
        
        oParentContainer.removeChild(_oFade);
        oParentContainer.removeChild(_oGroup);
    };
    
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.setAndShow = function(aData, iWinnerIndex, iMatchScore){
        for(var i=0; i<_aRankInfo.length; i++){
            _aRankInfo[i].setName(aData[i].name);
            _aRankInfo[i].setScore(aData[i].score + " /" +GAME_SCORE_WIN);
            
            if(aData[i].index === iWinnerIndex){
                var oPos = _aRankInfo[i].getTextScorePos();
                _oMatchScoreText.x = oPos.x + 46;
                _oMatchScoreText.y = oPos.y + 18;
                _oMatchScoreText.text = "(+"+iMatchScore+")";
                
                _aRankInfo[i].highlight();
            };
            
        };
        
       
        playSound("game_over",1,false);
        
        _oGroup.visible = true;
        
        createjs.Tween.get(_oFade).to({alpha:0.7},500);
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500);
    };
    
    this.reset = function(){
        _oGroup.visible = false;
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        
        _oCup.visible = false;
        
        _oMsgText.setY(CANVAS_HEIGHT/2 - 185 - 75);
        _oMsgText.refreshText(TEXT_SUMMARY);
        _oLeaderboardContainer.visible = true;
        
        _oButHome.setX(CANVAS_WIDTH/2-180);
        _oButShow.setX(CANVAS_WIDTH/2);
        _oButNext.setX(CANVAS_WIDTH/2+180);
        
        _oButHome.setVisible(true);
        _oButShow.setVisible(true);
        _oButNext.setVisible(true);

        var oSprite = s_oSpriteLibrary.getSprite('but_next');
        _oButNext.setImage(oSprite);

        for(var i=0; i<_aRankInfo.length; i++){
            _aRankInfo[i].enable();
            _aRankInfo[i].setNameColor("#FFF");
        };
    };
    
    this.show = function(){
        _oGroup.visible = true;
        
        _oFade.alpha = 0.7;
        _oFade.removeAllEventListeners();
        _oFade.on("mousedown",function(){});
    };
    
    this.hide = function(){
        _oGroup.visible = false;
        
        _oFade.alpha = 0.01;
        _oFade.removeAllEventListeners();
        _oFade.on("mousedown", this.show, this);
    };
    
    this.waitingMode = function(){
        _oGroup.visible = true;
        _oGroup.alpha = 1;
        _oFade.alpha = 0.7;
        
        _oLeaderboardContainer.visible = false;
        
        _oMsgText.refreshText(TEXT_WAIT_OPPONENT);
        _oMsgText.setY(CANVAS_HEIGHT/2 - 50 - 75);

        _oButHome.setX(CANVAS_WIDTH/2-100);
        _oButNext.setVisible(false);
        _oButShow.setX(CANVAS_WIDTH/2+100);
        //_oButShow.setVisible(false);
    };
    
    this.playerQuitMode = function(szText){
        _oGroup.visible = true;
        _oGroup.alpha = 1;
        _oFade.alpha = 0.7;
        
        _oMsgText.refreshText(szText.toUpperCase());

        _oButHome.setX(CANVAS_WIDTH/2-100);
        _oButNext.setVisible(false);
        _oButShow.setX(CANVAS_WIDTH/2+100);
    };
    
    this.endMode = function(szText){
        _oMsgText.refreshText(szText.toUpperCase());

        var oSprite = s_oSpriteLibrary.getSprite('but_restart');
        _oButNext.setImage(oSprite);

        _aRankInfo[0].setNameColor(_szWinColor);
        
        _oCup.visible = true;
        

    };
    
    this.isShown = function(){
        return _oGroup.visible;
    };
    
    this.stopTweens = function(){
        createjs.Tween.removeTweens(_oFade);
        createjs.Tween.removeTweens(_oGroup);
    };
    
    this._onExit = function(){  
        _oParent.stopTweens();
        
        if(_aCbCompleted[ON_HOME]){
           _aCbCompleted[ON_HOME].call(_aCbOwner[ON_HOME]);
        }
    };
    
    this._onShow = function(){
        _oParent.stopTweens();
        
        if(_aCbCompleted[ON_CHECK]){
           _aCbCompleted[ON_CHECK].call(_aCbOwner[ON_CHECK]);
        }
    };
    
    this._onNext = function(){
        _oParent.stopTweens();
        
        if(_aCbCompleted[ON_NEXT]){
           _aCbCompleted[ON_NEXT].call(_aCbOwner[ON_NEXT]);
        }
    };
    
    this._init();
    
    _oParent = this;
    return this;
}
