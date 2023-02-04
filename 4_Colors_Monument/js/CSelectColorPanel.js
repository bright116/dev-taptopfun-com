function CSelectColorPanel(iEffect){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oFade;
    var _oPanelContainer;
    var _oColorContainer;
    var _oParent=this;
    var _oButRed;
    var _oButGreen;
    var _oButBlue;
    var _oButYellow;
    var _oParent;
    
    var _pStartPanelPos;
    
    this._init = function(){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        if (iEffect===EFFECT_SELECT_COLOR){
            playSound("special_card", 0.5,false);
        }

        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        _oFade.alpha = 0;
        _oFade.on("mousedown",function(){});
        s_oStage.addChild(_oFade);
        
        new createjs.Tween.get(_oFade,{override:true}).to({alpha:0.7},500);
        
        _oPanelContainer = new createjs.Container();        
        s_oStage.addChild(_oPanelContainer);
        
        _oColorContainer = new createjs.Container();
        _oPanelContainer.addChild(_oColorContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite('select_color_panel');
        var oPanel = createBitmap(oSprite);        
        oPanel.regX = oSprite.width/2;
        oPanel.regY = oSprite.height/2;
        _oPanelContainer.addChildAt(oPanel,0);
        
        _oPanelContainer.x = CANVAS_WIDTH/2;
        _oPanelContainer.y = CANVAS_HEIGHT + oSprite.height/2;  
        _pStartPanelPos = {x: _oPanelContainer.x, y: _oPanelContainer.y};
        new createjs.Tween.get(_oPanelContainer,{override:true}).to({y:CANVAS_HEIGHT/2 - 40},600, createjs.Ease.backOut);

        var oTitle = new CTLText(_oPanelContainer, 
                    -250, -oSprite.height/2 + 10, 500, 110, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    TEXT_SELECT_COLOR,
                    true, true, true,
                    false );
                    
        
        
        _oColorContainer.y = _oPanelContainer.getBounds().height/5;
        
        var oSprite = s_oSpriteLibrary.getSprite('but_red');
        _oButRed = new CGfxButton(-190,-20,oSprite,_oColorContainer);
        _oButRed.addEventListener(ON_MOUSE_UP,function(){_oParent.onSelectColor(0),_oColorContainer;});
        
        oSprite = s_oSpriteLibrary.getSprite('but_green');
        _oButGreen = new CGfxButton(-65,-20,oSprite,_oColorContainer);
        _oButGreen.addEventListener(ON_MOUSE_UP,function(){_oParent.onSelectColor(1),_oColorContainer;});
        
        oSprite = s_oSpriteLibrary.getSprite('but_blue');
        _oButBlue = new CGfxButton(65,-20,oSprite,_oColorContainer);
        _oButBlue.addEventListener(ON_MOUSE_UP,function(){_oParent.onSelectColor(2),_oColorContainer;});
        
        oSprite = s_oSpriteLibrary.getSprite('but_yellow');
        _oButYellow = new CGfxButton(190,-20,oSprite,_oColorContainer);
        _oButYellow.addEventListener(ON_MOUSE_UP,function(){_oParent.onSelectColor(3),_oColorContainer;});
        
    };

    this.unload = function(){
        s_oStage.removeChild(_oFade);
        s_oStage.removeChild(_oPanelContainer);

        _oButRed.unload();
        _oButGreen.unload();
        _oButBlue.unload();
        _oButYellow.unload();

        _oFade.off("mousedown",function(){});
    };
 
    this.disableButtons = function(){
        _oButRed.setClickable(false);
        _oButGreen.setClickable(false);
        _oButBlue.setClickable(false);
        _oButYellow.setClickable(false);
    };
 
    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };

    this.onSelectColor = function(iIndex){
        new createjs.Tween.get(_oFade,{override:true}).to({alpha:0},500);
        new createjs.Tween.get(_oPanelContainer,{override:true}).to({y:_pStartPanelPos.y},400, createjs.Ease.backIn)

        _oParent.disableButtons();

        if(_aCbCompleted[ON_COLOR_SELECTED]){
            _aCbCompleted[ON_COLOR_SELECTED].call(_aCbOwner[ON_COLOR_SELECTED], iIndex, iEffect);
        }

    };

    _oParent = this;
    this._init();
    
    
};


