function CHandDisplayer (iOffsetX,iOffsetY,iX,iY,iPlayerID,oParentContainer,szPlayerName,iSide){
    var _bDisposed;
    
    var _iOffsetX;
    var _iOffsetY;
    var _iSide;
    var _aCards;
    var _oContainer;
    var _oPlayerInfo;
    var _oSummaryScore;
    var _oCloudUno;
    var _oParentContainer;
    
    var _iScore;
    var _szPlayerName;
    var _iPlayerID;
    
    this.init = function (){
        _bDisposed = false;
        
        _szPlayerName = szPlayerName;
        
        _iScore = 0;
        _iPlayerID = iPlayerID;
        
        _aCards = new Array();
        _oContainer = new createjs.Container();
        
        _oParentContainer = oParentContainer;
        _oParentContainer.addChild(_oContainer);
        

        _oPlayerInfo = new CPlayerInfo(iX, iY, _oParentContainer, szPlayerName);
        _oSummaryScore = new CInfoLabel(iX, iY, _oParentContainer);
        _oSummaryScore.setVisible(false);
       
        var oSprite = s_oSpriteLibrary.getSprite("cloud_uno");
        var oData = {
            images: [oSprite],
            frames: {width: 261, height: 194, regX: 130.5, regY: 97},
            animations: {cloud1: [0], cloud2: [1]}
        };
        var oSpriteSheet = new createjs.SpriteSheet(oData);
        _oCloudUno = new createjs.Sprite(oSpriteSheet,"cloud1");
        _oCloudUno.alpha = 0;
        _oCloudUno.scaleX = 0.1;
        _oCloudUno.scaleY = 0.1;
      
        this.setPosition(iOffsetX,iOffsetY,iX,iY,iSide);
        
    };
    
    this.setPosition = function(iNewOffsetX,iNewOffsetY,iNewX,iNewY,iSide){
        _iOffsetX = iNewOffsetX;
        _iOffsetY = iNewOffsetY;
        _oContainer.x = iNewX;
        _oContainer.y = iNewY;
        _iSide = iSide;
        
        _oSummaryScore.setPosition(_oContainer.x,_oContainer.y,_iSide);
        
        var oInfoPos;
        switch(_iSide){
            case BOTTOM:{
                    oInfoPos = {x: _oContainer.x, y: _oContainer.y - 140};
                    break;
            }
            case TOP:{
                    _iOffsetX = -iNewOffsetX;
                    oInfoPos = {x: _oContainer.x, y: _oContainer.y + 140};
                    break;
            }
            case LEFT:{
                    oInfoPos = {x: _oContainer.x +140, y: _oContainer.y};
                    _oSummaryScore.setPosition(_oContainer.x+20,_oContainer.y,_iSide);
                    break;
            }
            case RIGHT:{
                    _iOffsetY = -iNewOffsetY;
                    oInfoPos = {x: _oContainer.x -140, y: _oContainer.y};
                    _oSummaryScore.setPosition(_oContainer.x-20,_oContainer.y,_iSide);
                    break;
            }
        }
        
        _oPlayerInfo.setPosition(oInfoPos.x,oInfoPos.y,_iSide);
        
        
    };
    
    this.clearCards = function(){
        for(var i=0; i<_aCards.length; i++){
            _aCards[i].unload();
        }
        
        _aCards = new Array();
    };
    
    this.getGlobalPosition = function(){
        var oGlobalPosition;
        var oCardsInfoX = 0;
        var oCardsInfoY = 0;
        for (var i=0;i<_aCards.length;i++){
            if (_iOffsetX!==0){
                oCardsInfoX += CARD_WIDTH/2;
            }else{
                oCardsInfoY += CARD_HEIGHT/2;
            }
        }
        oGlobalPosition = {x: _oContainer.x + oCardsInfoX, y: _oContainer.y + oCardsInfoY};
        return oGlobalPosition;
    };
    
    this.getContainerPos = function(){
        return  {x: _oContainer.x, y: _oContainer.y};
    };
    
    this.getCardPositionByIndex = function(index){
        var oCardInfo = _aCards[index].getPos();
        return {x: oCardInfo.x,y: oCardInfo.y};
    };
    
    this.searchIndexCard = function (CCard){
        for (var i=0;i<_aCards.length;i++){
            if (CCard===_aCards[i]){
                return i;
            }
        } 
    };
    
    this.removeCardByIndex = function(index){
        var aTmp = _aCards.splice(index,1);
        return aTmp;
    };
    
    this.getPosNewCard = function(){
        var iNewOffsetX = this.getDynamicOffset(_iOffsetX);
        var iNewOffsetY = this.getDynamicOffset(_iOffsetY);

        return {x: _aCards.length*iNewOffsetX, y: _aCards.length*iNewOffsetY}; 
    };
    
    this.pushCard = function(oCard){
        _aCards.push(oCard);
        if (_iOffsetY===0&&_oContainer.y>CANVAS_HEIGHT/2){
            _aCards[_aCards.length-1].getCardSprite().on("mouseover",this.onMouseOver);
        }
    };
    
    this.getContainer = function(){
        return _oContainer; 
    };
  
    this.getLastCard = function(){
        return _aCards[_aCards.length-1]; 
    };
  
    this.getLength = function(){
        return _aCards.length;
    };
  
    this.centerContainer = function(){
        var oHandInfo;
        oHandInfo = _oContainer.getBounds();
        
        var iOffsetX = - (oHandInfo.width / 2) + (CARD_WIDTH / 2);
        if(_iSide === TOP){
            iOffsetX = (oHandInfo.width / 2) - (CARD_WIDTH / 2);
        }
        var iOffsetY = - (oHandInfo.height / 2) + (CARD_WIDTH/ 2);
        
        if(_iSide === RIGHT){
            iOffsetY = (oHandInfo.height / 2) - (CARD_WIDTH/ 2);
        }
        
        if (_iOffsetX !== 0) {
            createjs.Tween.get(_oContainer).to({x: CANVAS_WIDTH / 2 + iOffsetX }, 300, createjs.Ease.linear);
        } else {
            createjs.Tween.get(_oContainer).to({y: CANVAS_HEIGHT / 2 + iOffsetY - 40}, 300, createjs.Ease.linear);
        }
    };
  
    this.setOnTop = function(){
        _oParentContainer.addChildAt(_oContainer,_oParentContainer.numChildren); 
    };
  
    this.setChildDepth = function(iIndex){
        if (iIndex>_oContainer.s_oStage.numChild-1){
            iIndex = _oContainer.s_oStage.numChild-1;
        }
        s_oStage.addChildAt(iIndex); 
    };
  
    this.getContainerInfo = function(){
        return _oContainer.getBounds(); 
    }; 
  
    
    this.getCardByIndex = function(index){
        var oSingleCard = _aCards[index];
        return oSingleCard;
    };
  
    this.organizeHand = function(iParent){
        var iOffsetIncrease;
        var oParent = this;
        
        
        //console.log("iNewOffset:"+iNewOffset)
        if (_iOffsetX!==0){
            for (var i=0;i<_aCards.length;i++){
                var iNewOffset = this.getDynamicOffset(_iOffsetX);
                iOffsetIncrease = iNewOffset * i;
                createjs.Tween.get(_aCards[i].getSprite()).to({x: iOffsetIncrease},300, createjs.Ease.linear).call(oParent.centerContainer);
            }

        }else{
            for (var i=0;i<_aCards.length;i++){
                var iNewOffset = this.getDynamicOffset(_iOffsetY);
                iOffsetIncrease = iNewOffset * i;
                createjs.Tween.get(_aCards[i].getSprite()).to({y: iOffsetIncrease},300, createjs.Ease.linear).call(function(){oParent.centerContainer();});
            }        
        }
    };
  
    this.getDynamicOffset = function(iStartOffset){
        var iNewOffset = iStartOffset;
        if(_aCards.length>6){
            iNewOffset = linearFunction(_aCards.length, 7, 20, iStartOffset, iStartOffset*0.55);
        }
        
        return iNewOffset;
    };
  
    this.setOnTurn = function(){
        _oPlayerInfo.highlight();
    };

    this.setOffTurn = function (){
        _oPlayerInfo.disable();
    };

    this.checkUno = function(){
        if (_aCards.length===1){
            this.setOnTop();
            if (_iOffsetX!==0){
                if (_oContainer.y<CANVAS_HEIGHT/2){
                    _oCloudUno.gotoAndStop("cloud2");
                    _oCloudUno.x = (CANVAS_WIDTH/2)-270;
                    _oCloudUno.y = (CANVAS_HEIGHT/2)-300;
               }else{
                    _oCloudUno.gotoAndStop("cloud1");
                    _oCloudUno.x = (CANVAS_WIDTH/2)+300;
                    _oCloudUno.y = (CANVAS_HEIGHT/2)+100;
               }
            }else{
                if (_oContainer.x<CANVAS_WIDTH/2){
                    _oCloudUno.gotoAndStop("cloud1");
                    _oCloudUno.x = (CANVAS_WIDTH/2)-350;
                    _oCloudUno.y = (CANVAS_HEIGHT/2)-30;
                }else{
                    _oCloudUno.gotoAndStop("cloud2");
                    _oCloudUno.x = (CANVAS_WIDTH/2)+350;
                    _oCloudUno.y = (CANVAS_HEIGHT/2)-200;
                }
            }
            s_oStage.addChild(_oCloudUno);
            new createjs.Tween.get(_oCloudUno).to({alpha: 1, scaleX: 1, scaleY:1},300, createjs.Ease.bounceOut).wait(1500).to({ scaleX: 0.1, scaleY: 0.1},300, createjs.Ease.cubicIn).to({alpha: 0},20).call(function(){s_oStage.removeChild(_oCloudUno);});
        }
    };
   
    this.onMouseOver = function(evt){
        if(!s_bMobile){
            evt.target.cursor = "pointer";
        }   
    };
    
    this.showAllCards = function(){
        for(var i=0; i<_aCards.length; i++){
            _aCards[i].showCard();
        }
    };
    
    this.changeName = function(szName){
        _szPlayerName = szName;
        _oPlayerInfo.setName(szName);
    };
    
    this.refreshScore = function(){
        _oPlayerInfo.setScore(_iScore);
        _oSummaryScore.setVisible(false);
    };
    
    this.getCardByUniqueID = function(iUniqueID){
        for(var i=0; i<_aCards.length; i++){
            if(_aCards[i].getUniqueID() === iUniqueID){
                return _aCards[i];
            }
        }
    };
    
    this.getPlayerID = function(){
        return _iPlayerID;
    };
    
    this.getName = function(){
        return _szPlayerName;
    };
    
    this.getSide = function(){
        return _iSide; 
    };
    
    this.getScore = function(){
        return _iScore;
    };
    
    this.setScore = function(iScore){
        _iScore = iScore;
    };
    
    this.showHandScore = function(szText){
        _oSummaryScore.setVisible(true);
        _oSummaryScore.setTextScore(szText);
        _oSummaryScore.setOnTop();
    };
    
    this.hideMsgBox = function(){
        _oSummaryScore.setVisible(false);
        _oSummaryScore.setTextScore("");
    };
    
    this.calculateHandScore = function(){
        var iScore = 0;
        for(var i=0; i<_aCards.length; i++){
            var iCardRank = _aCards[i].getRank();
            iScore += CARD_SCORE[iCardRank];
        };
        return iScore;
    };
    
    this.getAllCards = function(){
        return _aCards;
    };
    
    this.stopAllAnim = function(){
        for(var i=0; i<_aCards.length; i++){
            _aCards[i].stopAllAnim();
        }
    };
    
    this.dispose = function(iX, iY){
        _bDisposed = true;
        
        var iNumCards = _aCards.length;
        
        for(var i=0; i<_aCards.length; i++){
            _aCards[i].dispose(iX, iY, 0, 400,0).then(()=>{
                //console.log("card_disposed");
                iNumCards--;
                if(iNumCards === 0){
                    this.clearCards();
                }
            });
        }
        
        this.showHandScore(TEXT_PLAYER_QUIT);
        _oSummaryScore.stopAnim();
    };
    
    this.isDisposed = function(){
        return _bDisposed;
    };
    
    this.init();
}