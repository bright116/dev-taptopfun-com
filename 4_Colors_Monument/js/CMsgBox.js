function CMsgBox(oParentContainer){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oFade;
    var _oGroup;
    var _oBg;
    var _oMsgText;
    var _oButHome;
    
    
    this._init = function(oParentContainer){
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
        
        var iTextX = CANVAS_WIDTH/2;
        var iTextY = CANVAS_HEIGHT/2 - 50;
        var iWidth = 500;
        var iHeight = 150;
        _oMsgText = new CTLText(_oGroup, 
                    iTextX-iWidth/2, iTextY-iHeight/2, iWidth, iHeight, 
                    50, "center", "#fff", PRIMARY_FONT, 1,
                    0, 0,
                    " ",
                    true, true, true,
                    false );
        
        var iY = 170;
        var oSprite = s_oSpriteLibrary.getSprite("but_home");
        _oButHome = new CGfxButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2+iY,oSprite,_oGroup);
        _oButHome.addEventListener(ON_MOUSE_DOWN,this._onExit, this);
        
    };
    
    this.unload = function(){
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
    
    this.show = function(szText){
        playSound("game_over",1,false);
        
        _oGroup.visible = true;
        
        _oMsgText.refreshText(szText.toUpperCase());
        
        createjs.Tween.get(_oFade).to({alpha:0.7},500);
        createjs.Tween.get(_oGroup).to({alpha:1 }, 500);
    };
    
    this._onExit = function(){      
        if(_aCbCompleted[ON_HOME]){
           _aCbCompleted[ON_HOME].call(_aCbOwner[ON_HOME]);
        }
    };
    
    this.isShown = function(){
        return _oGroup.visible;
    };
    
    this._init(oParentContainer);    
}


