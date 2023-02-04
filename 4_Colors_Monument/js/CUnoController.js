function CUnoController(){
    var _aCbCompleted;
    var _aCbOwner;
    
    var _oAlertText;
    var _oContainer;
    var _oButUno;
    var _oParent;

    this._init = function(){
        _aCbCompleted=new Array();
        _aCbOwner =new Array();
        
        _oContainer = new createjs.Container();
        _oContainer.visible = false;
        s_oStage.addChild(_oContainer);
        
        var oSprite = s_oSpriteLibrary.getSprite("but_uno");
        var pStartPosButUno = {x:(CANVAS_WIDTH/2)+222,y:(CANVAS_HEIGHT/2)+70};
        _oButUno = new CGfxButton(pStartPosButUno.x,pStartPosButUno.y,oSprite,_oContainer);
        _oButUno.addEventListener(ON_MOUSE_UP,this._onButUno,this);
        
        _oAlertText = new CTLText(_oContainer, 
            CANVAS_WIDTH/2+280, CANVAS_HEIGHT/2, 200, 150, 
            50, "center", "#fff", PRIMARY_FONT, 1,
            0, 0,
            sprintf(TEXT_ALERT_1, NUM_PENALTY_CARDS),
            true, true, true,
            false );

        _oAlertText.setAlpha(0);  
    };
    
    this.unload = function(){
        _oButUno.unload();
    };

    this.addEventListener = function( iEvent,cbCompleted, cbOwner ){
        _aCbCompleted[iEvent]=cbCompleted;
        _aCbOwner[iEvent] = cbOwner; 
    };
    
    this.setVisible = function(bVal){
        _oContainer.visible = bVal;
    };
    
    this.check = function(iEffect){
        //_oParent._triggerEffect(iEffect);
        //return;
        
        if (s_oGame.getbUNO()===true){
            setTimeout(function(){
                if (s_oGame.getbUNO()===true){
                    _oParent._triggerPenality();
                }else{
                    _oParent._triggerEffect(iEffect);
                }
            },2000);
        }else{
            _oParent._triggerEffect(iEffect);
        }
    };
    
    this._triggerPenality = function (){
        if(_aCbCompleted[ON_APPLY_PENALITY]){
            _aCbCompleted[ON_APPLY_PENALITY].call(_aCbOwner[ON_APPLY_PENALITY]);
        }
    };
    
    this._triggerEffect = function(iEffect){  
        if(_aCbCompleted[ON_APPLY_EFFECT]){
            _aCbCompleted[ON_APPLY_EFFECT].call(_aCbOwner[ON_APPLY_EFFECT], iEffect);
        }
    };
    
    this._onButUno = function (){
        if(_aCbCompleted[ON_UNO_CLICK]){
            _aCbCompleted[ON_UNO_CLICK].call(_aCbOwner[ON_UNO_CLICK]);
        }
    };
    
    this.showAlertMsg = function(szMsg){
        _oAlertText.refreshText(szMsg);
        
        createjs.Tween.get(_oAlertText.getText()).to({alpha: 1},400).wait(4000).to({alpha: 0},400).call(function(){
            _oButUno.removeAnimation();
        });
    };
    
    this.unoAnimation = function(){
        _oButUno.trembleAnimation();  
    };
    
    _oParent = this;
    
    this._init();
    
}


