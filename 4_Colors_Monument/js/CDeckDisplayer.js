function CDeckDisplayer (iX,iY,oParentContainer,bHelpAnim){
    var _aCards;
    var _oContainer;
    var _bDisableInput;
    var _oFingerContainer;
    var _oParentContainer;
    var _oFinger;
    var _iIDTimeout;
   
    this._init = function(){
        _oParentContainer = oParentContainer;

        _aCards = new Array();
        _oContainer = new createjs.Container();
        _oContainer.x = iX;
        _oContainer.y = iY;
        _oContainer.on("mousedown",this.onDraw,this);
        _oParentContainer.addChild(_oContainer);
        
        if(bHelpAnim){
            _oFingerContainer = new createjs.Container();
            _oFingerContainer.x = iX;
            _oFingerContainer.y = iY;
            _oFingerContainer.visible = false;
            _oParentContainer.addChild(_oFingerContainer);

            var oSprite = s_oSpriteLibrary.getSprite("finger");
            var iWidth = oSprite.width/5;
            var iHeight = oSprite.height/2;
            var oData = {
                images: [oSprite],
                frames: {width: iWidth, height: iHeight, regX: iWidth/2, regY: iHeight/2},
                animations: {idle: {frames: [0,1,2,3,4,5,6,7,8,9], speed: 0.9}}
            };
            var oSpriteSheet = new createjs.SpriteSheet(oData);

            _oFinger = createSprite(oSpriteSheet,"idle", iWidth/2, iHeight/2, iWidth, iHeight);
            _oFinger.scaleX = 0.5;
            _oFinger.scaleY = 0.5;
            _oFinger.x = -100;
            _oFinger.y = -100;
            _oFingerContainer.addChild(_oFinger);
        }
        
        
        _bDisableInput = false;
        
    };
   
    this.initializeDeck = function(){
        var iTmpSum = 0;
        var iRank;
        var iUniqueID = 0;
        var szFotogram;
        for (var i=0;i<4;i++){
            for (var j=0;j<10;j++){
                iRank = j;
                szFotogram = i*13+iRank;
                //_aCards.push(new CCard(0,0,_oContainer,"card_"+i+"_"+j,iRank,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,szFotogram,iRank,i,iUniqueID++,0));
            }
        }
        for (var i=0;i<4;i++){
            for (var j=0;j<9;j++){
                iTmpSum = j+1;
                szFotogram = i*13+iTmpSum;
                //_aCards.push(new CCard(0,0,_oContainer,"card_"+i+"_"+iTmpSum,iTmpSum,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,szFotogram,iTmpSum,i,iUniqueID++,0));
            }
        }
        for (var i=0;i<4;i++){
            for (var j=0;j<2;j++){
                
                /*
                _aCards.push(new CCard(0,0,_oContainer,"card_"+i+"_10",10,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,"card_"+i+"_11",11,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,"card_"+i+"_12",12,i,iUniqueID++,0));
                */

                _aCards.push(new CCard(0,0,_oContainer,i*13+10,10,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,i*13+11,11,i,iUniqueID++,0));
                _aCards.push(new CCard(0,0,_oContainer,i*13+12,12,i,iUniqueID++,0));
            }
        }
        for (var i=0;i<4;i++){
            _aCards.push(new CCard(0,0,_oContainer,FOTOGRAM_COLOR,13,4,iUniqueID++,0));
            _aCards.push(new CCard(0,0,_oContainer,FOTOGRAM_DRAW_FOUR,14,4,iUniqueID++,0));
        }
    };
    
    this.initializeFromData = function(oData){
        var iRank;
        var iSuit;
        var iUniqueID = 0;
        for(var i=0; i<oData.length; i++){
            
            switch(oData[i]){
                case FOTOGRAM_COLOR:{
                        iRank = 13;
                        iSuit = 4;
                        break;
                }
                case FOTOGRAM_DRAW_FOUR:{
                        iRank = 14;
                        iSuit = 4;
                        break;
                }
                default:{
                        iRank = oData[i]%13;
                        iSuit = Math.floor( oData[i]/13 );
                        break;
                }
            }

            _aCards.push(new CCard(0,0,_oContainer,oData[i],iRank,iSuit,iUniqueID++));
        }
    };
    
    this.shuffle = function(){
        var j, x, i;
        for (i = _aCards.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = _aCards[i - 1];
            _aCards[i - 1] = _aCards[j];
            _aCards[j] = x;
        }
    };  
    
    this.clearCards = function(){
        for(var i=0; i<_aCards.length; i++){
            _aCards[i].unload();
        }
        
        _aCards = new Array();
    };
    
    this.moveContainer = function (iX,iY,iTime,iDelay){
        createjs.Tween.get(_oContainer).wait(iDelay).to({x:iX, y:iY}, iTime, createjs.Ease.linear);
    };
    
    this.takeFirstLastCard = function(){
        return _aCards.pop();
    };
  
    this.takeLastCard = function(){
        var oLastCard = _aCards.pop();
        return oLastCard;
    };

    this.getLastCard = function(){
        var oLastCard = _aCards[_aCards.length-1]; 
        return oLastCard;
    };
  
    this.getCardByIndex = function(index){
        var oSingleCard = _aCards[index];
        return oSingleCard;
    };
  
    this.removeCardByIndex = function(index){
        var aTmp = _aCards.splice(index,1);
        return aTmp;
    };
  
    this.pushCard = function(oCard){
        _aCards.push(oCard);
    };
    
    this.getContainer = function(){
        return _oContainer; 
    };

    this.getLength = function(){
        return _aCards.length;
    };

    this.onDraw = function(){
        if(_bDisableInput===false){
            s_oGame.onDraw(); 
        }
    };

    this.disableInputUsedCards = function(){ 
        _aCards[_aCards.length-1].offSetTurned();
    };

    this.disableInputDraw = function(){
        _bDisableInput = true;
    };

    this.enableInputDraw = function(){
       _bDisableInput = false; 
    };

    this.getIndexChild = function(){
        return s_oStage.getChildIndex(_oContainer); 
    };
  
    this.setChildDepth = function(iIndex){
        s_oStage.addChildAt(_oContainer,iIndex); 
    };
  
    this.getGlobalPosition = function(){
        return {x: _oContainer.x,y: _oContainer.y};
    };
  
    this.setOnTop = function(){
        _oParentContainer.addChildAt(_oContainer,_oParentContainer.numChildren);
    };
  
    this.setHelp = function(){
        _oParentContainer.setChildIndex(_oFingerContainer, _oParentContainer.numChildren-1);
        this.setPointer(true);
        _iIDTimeout = setTimeout(function(){ 
            _oFingerContainer.visible = true;
        },5000);
    };
  
    this.hideHelp = function(){
        clearTimeout(_iIDTimeout);
        _oFingerContainer.visible = false;
        this.setPointer(false);
    };
  
    this.setPointer = function(bVal){
        if (bVal){
            _oContainer.cursor = "pointer";
        }else{
            _oContainer.cursor = "default";
        }
    };
  
    this.addNewCardUnderTheDeck = function(aCards){
        for (var i=0; i<aCards.length; i++){
            _aCards.push(aCards[i]);
        } 
    };
  
    this.removeAllCardUnderTheDeck = function(){
        var aCards = new Array();
        for (var i=0;i<_aCards.length-1; i++){
            _aCards[i].unload();
            aCards.push(_aCards.shift());
            i--;
        }
        
        return aCards;
    };

    this._init();  
};
  