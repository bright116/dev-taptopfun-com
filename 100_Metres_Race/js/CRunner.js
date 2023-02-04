function CRunner(iX, iY, oParentContainer, iLane, bIsPlayer, oTeamInfos,  iMaxSpeed, iMinSpeed, iEnergy, iResistenceStep, iOccurrenceRun){
    var _bArrived = false;
    var _iSpeed = 0;
    var _iTimeElaps = 0;
    var _iCurrentAnimation = 0;  
    var _iLane = iLane;
    var _iMaxSpeed = iMaxSpeed;
    var _iMinSpeed = iMinSpeed;
    var _iEnergy = iEnergy;
    var _iMaxEnergy = _iEnergy;
    var _iResistenceStep = iResistenceStep;
    var _iOccurrenceRun = iOccurrenceRun;
        
    var _szTeamName = oTeamInfos.name;
    var _iNationalitySprite = oTeamInfos.sprite;
    
    var _oPlayerSpriteUsed;

    var _oCursor = null;
    
    var _bIsPlayer = bIsPlayer;
    var _bCanMove = true;
    
    var _vDirection = new CVector2(0, 1);
    var _vPlayerPos = new CVector2();
    
    var _oContainer = oParentContainer;
    
    this._init = function(){
        this.createRunner();
    };
    
    this.createRunner = function(){
        var oPlayerSprite = s_oSpriteLibrary.getSprite("runner_"+_iNationalitySprite);
        
        var oData = {   
            images: [oPlayerSprite], 
            framerate: 15,
            // width, height & registration point of each sprite
            frames: {width: PLAYER_WIDTH, height: PLAYER_HEIGHT, regX: PLAYER_WIDTH/2, regY: PLAYER_HEIGHT/2}, 
            animations: {position:[0,10,false],starting:[11, 39,false],run:[40,45,"run"],ending:[46,56]}
        };
        var oPlayerSpritesheet = new createjs.SpriteSheet(oData);        

        _oPlayerSpriteUsed = new createjs.Sprite(oPlayerSpritesheet, "position");
        _oPlayerSpriteUsed.addEventListener("animationend",this._onAnimationEnd);
        _oPlayerSpriteUsed.x = iX;
        _oPlayerSpriteUsed.y = iY;
        _oPlayerSpriteUsed.currentAnimationFrame = 0;
        _oContainer.addChild(_oPlayerSpriteUsed);
        
        _iCurrentAnimation = ANIMATION_POSITION;
        _oPlayerSpriteUsed.stop();
        var iAngle = (104) * (Math.PI/180);
        rotateVector2D(iAngle, _vDirection); 
        
        if(_bIsPlayer){
            _oCursor = createBitmap(s_oSpriteLibrary.getSprite("arrow_bar"));
            _oCursor.x = _oPlayerSpriteUsed.x + 40;
            _oCursor.y = _oPlayerSpriteUsed.y-60;
            _oCursor.scaleX = 0.4;
            _oCursor.scaleY = 0.4;
            s_oStage.addChild(_oCursor);
            this._cursorAnimationDown();
        }
    };
    
    this.stopAnimation = function(){
        _oPlayerSpriteUsed.stop();
    };
    
    this.playAnimation = function(){
        _oPlayerSpriteUsed.play();
    };
    
    this.changeAnimation = function(szAnimation){
        _oPlayerSpriteUsed.gotoAndPlay(szAnimation);
        _iCurrentAnimation = szAnimation;
        
        if(_iCurrentAnimation === ANIMATION_STARTING){
            if(_bIsPlayer){
                this._stopCursorAnim();
                
                var iNewY = _oPlayerSpriteUsed.y-80 ;
                createjs.Tween.get(_oCursor).to({y:iNewY }, 500).call(function() {_oParent._cursorAnimationDown();});           
            }
        }
    };
    
    this.checkDistance = function(vPositionToCheck){
        var iDistance = this.distance2(_vPlayerPos, vPositionToCheck)/100;

        if( iDistance < DIST_FROM_ARRIVAL  && _iCurrentAnimation === ANIMATION_RUNNING){
            //RACE OVER
            if(_bArrived === false){
                _bArrived = true;
                
                this.changeAnimation(ANIMATION_ENDING);
                s_oGame.addInArrayPlayerArrived(_iLane, _szTeamName);
                if(_oCursor !== null){
                    createjs.Tween.removeTweens(_oCursor);
                    s_oStage.removeChild(_oCursor);
                }
            }
        }

    };

    this._onAnimationEnd = function(){
        if(_iCurrentAnimation === ANIMATION_STARTING){
            _oParent.showRunningAnimation();
        }
    };
    
    this.showRunningAnimation = function(){

        _iCurrentAnimation = ANIMATION_RUNNING;
        
        _oPlayerSpriteUsed.gotoAndPlay(ANIMATION_RUNNING);
        if(_bIsPlayer){
            _vPlayerPos.set(_oPlayerSpriteUsed.x, _oPlayerSpriteUsed.y);
        }
    };
    
    this._stopCursorAnim = function(){
        createjs.Tween.removeTweens(_oCursor);
    };
    
    this._cursorAnimationDown = function(){
        createjs.Tween.get(_oCursor).to({y:_oCursor.y+10 }, 500).call(function() {_oParent._cursorAnimationUp();});
    };
    
    this._cursorAnimationUp = function(){
        createjs.Tween.get(_oCursor).to({y:_oCursor.y-10 }, 500).call(function() {_oParent._cursorAnimationDown();});
    };

    this.distance2 = function( v1, v2 ){
        return ( (v2.getX()-v1.getX())*(v2.getX()-v1.getX()) ) + ( (v2.getY()-v1.getY())*(v2.getY()-v1.getY()) );
    };
    
    this.move = function(){
        if(!_bCanMove){
            return;
        }
        
        _oPlayerSpriteUsed.x += (_iSpeed * _vDirection.getX());
        _oPlayerSpriteUsed.y += (_iSpeed * _vDirection.getY());
        _vPlayerPos.set(_oPlayerSpriteUsed.x, _oPlayerSpriteUsed.y);
    };
    
    this.movementAffectedByPlayer = function(iSpeed, vDirectionPlayer){  
        if(!_bIsPlayer){
            _oPlayerSpriteUsed.x += (iSpeed * vDirectionPlayer.getX());
            _oPlayerSpriteUsed.y += (iSpeed * vDirectionPlayer.getY());
        } 
    };
    
    this.addSpeed = function(){

        if(!_bCanMove){
            return;
        }
        
        if(_iEnergy >= 0){
            _iEnergy -= _iResistenceStep;
            
            var iAmountSpeed = MODIFIER_SPEED_ADDER * (_iEnergy/_iMaxEnergy);
            
            if(iAmountSpeed < _iResistenceStep){
                iAmountSpeed = _iResistenceStep;
            }
            
            _iSpeed += iAmountSpeed;
            
            
            if( _iSpeed >= _iMaxSpeed ){
                _iSpeed = _iMaxSpeed;
            }else if(_iSpeed <= _iMinSpeed){
                _iSpeed = _iMinSpeed;
            }

        }
    };
    
    this.changeDirection = function(){
        var iAngle = (180) * (Math.PI  /180);
        rotateVector2D(iAngle, _vDirection);
    };
    
    this.decreaseSpeed = function(){
        if(!_bCanMove){
            return;
        }
        _iSpeed -= SPEED_DECELERATION;
        if( _iSpeed <= _iMinSpeed ){
            _iSpeed = _iMinSpeed;
        }
    };
    
    this.increaseEnergy = function(){
        if(_iEnergy < _iMaxEnergy){
            _iEnergy += ENERGY_INCREASE;
        }
    };
    
    this.getEnergyProportion = function(){
        return _iEnergy/_iMaxEnergy;
    };
    
    this.getOccurrenceRun = function(){
        return _iOccurrenceRun;
    };
    
    this.getInfos = function(){
        return {sprite: _iNationalitySprite, nationality: _szTeamName};
    };
    
    this.getSpeed = function(){
        return _iSpeed;
    };
    
    this.isArrived = function(){
        return _bArrived;
    };
    
    this.getEnergy = function(){
        return _iEnergy;
    };
    
    this.unload = function(){
        _oPlayerSpriteUsed = null;
        _oContainer.removeAllChildren();
    };
    /*
    this.update = function(){
        _iTimeElaps += s_iTimeElaps;
        if(_iTimeElaps > iOccurrenceRun){
            _iTimeElaps = 0;
            this.addSpeed();
            this.move();
        }
    };*/
    
    var _oParent = this;
    
    this._init();
    
}