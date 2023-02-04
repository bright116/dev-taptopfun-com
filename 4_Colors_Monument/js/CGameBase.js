function CGameBase(oData){
    this._iCounterDraw;
    this._oInterface;

    this._oParent;
    
    this._oDeck;
    this._aPlayersHand;
    this._oUsedCards;
    this._oTurnManager;

    this._iCurrentColor;
    this._bUNO;
    this._bEndGame;
    this._oAnimation;
    this._iCurPlayer;
    this._iNextPlayer;
    this._oFinger;
    this._oFade;
    this._oDecksContainer;
    this._oHandsContainer;
    this._oCardsContainer;

    this._oAIManager;
    this._oUnoController;
    this._oSummaryPanel;
    
    this._init();
    
};


CGameBase.prototype._init = function(){
    this._bUNO = false;
    this._bEndGame = false;
    
    this._iCounterDraw = 0;
    
    this._oTurnManager = new CTurnManager(); 

    this._oAnimation = new CAnimation();

    var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_game'));
    s_oStage.addChild(oBg); 

    this._oUnoController = new CUnoController();  
   
    this._oInterface = new CInterface();

    this._oCardsContainer = new createjs.Container();
   
    this._oHandsContainer = new createjs.Container();
    
    this._oPanelContainer = new createjs.Container();
    
    this._oDecksContainer = new createjs.Container();
    
    var aTextPlayers = new Array();
    aTextPlayers[0] = TEXT_PLAYER_1;
    aTextPlayers[1] = TEXT_PLAYER_2;
    aTextPlayers[2] = TEXT_PLAYER_3;
    aTextPlayers[3] = TEXT_PLAYER_4;
    
    this._aPlayersHand = new Array();
    for (var i=0;i<NUM_PLAYERS;i++){
        var iOffsetX =0;
        var iOffsetY =0;
        if (HAND_POS["num_player_"+NUM_PLAYERS][i].x===CANVAS_WIDTH/2){
            iOffsetX = CARD_WIDTH/2;
        }else{
            iOffsetY = CARD_HEIGHT/4;
        }
        this._aPlayersHand[i] = new CHandDisplayer(iOffsetX,iOffsetY,HAND_POS["num_player_"+NUM_PLAYERS][i].x,HAND_POS["num_player_"+NUM_PLAYERS][i].y,i,this._oHandsContainer,aTextPlayers[i],HAND_POS["num_player_"+NUM_PLAYERS][i].side);
    }

    this._oCardsContainer.addChild(this._oDecksContainer);
    this._oCardsContainer.addChild(this._oHandsContainer);
    s_oStage.addChild(this._oCardsContainer);

    s_oStage.addChild(this._oPanelContainer);

    this._oSummaryPanel = new CSummaryPanel(this._oPanelContainer);
    this._oSummaryPanel.addEventListener(ON_CHECK, this._onCheck, this);
    
    this._oMsgBox = new CMsgBox(this._oPanelContainer);
    
    this._oDeck = new CDeckDisplayer(CANVAS_WIDTH/2,CANVAS_HEIGHT/2,this._oDecksContainer, true);
    this._oUsedCards = new CDeckDisplayer((CANVAS_WIDTH/2)+CARD_WIDTH,CANVAS_HEIGHT/2,this._oDecksContainer, false);
    this._oUsedCards.disableInputDraw();

    this.setOffTurn();

    this._oAIManager = new CAIManager();

    setVolume("soundtrack",SOUNDTRACK_VOLUME_IN_GAME);
};

CGameBase.prototype.reset = function(){
    this._iCounterDraw = 0;

    this._oTurnManager.setFirstPlayerToBegin();
    this._oTurnManager.resetClockWise();
    
    this._oDeck.clearCards();
    
    this._oUsedCards.clearCards();
    this._oUsedCards.disableInputDraw();
    
    for(var i=0; i<this._aPlayersHand.length; i++){
        this._aPlayersHand[i].clearCards();
        this._aPlayersHand[i].refreshScore();
    }
    
    this._oSummaryPanel.reset();
    
    this.setOffTurn();
};

CGameBase.prototype.getFirstHand = function(){
    var _oCard = this._oDeck.takeLastCard();
    var iThisTurn = this._oTurnManager.getTurn();
    var oHandGlobalPos = this._aPlayersHand[iThisTurn].getContainerPos();
    var oCardPos = this._aPlayersHand[iThisTurn].getPosNewCard();
    var oDeckGlobalPos = this._oDeck.getGlobalPosition();
    _oCard.setOnTop();
    
    this._oCardsContainer.addChildAt(this._oDecksContainer,this._oCardsContainer.numChildren);
    this._oDeck.setOnTop();

    var iRot = this._getCardRotation(iThisTurn);
    
    _oCard.moveCardFirstHand((oHandGlobalPos.x+oCardPos.x)-(oDeckGlobalPos.x),(oHandGlobalPos.y+oCardPos.y)-(oDeckGlobalPos.y),iRot, 250); 
};

CGameBase.prototype.onCardDealed = function(oCard){
    var iThisTurn = this._oTurnManager.getTurn();
    var iRot = this._getCardRotation(iThisTurn);

    this._aPlayersHand[iThisTurn].pushCard(
        new CCard(  
                    this._aPlayersHand[iThisTurn].getPosNewCard().x,
                    this._aPlayersHand[iThisTurn].getPosNewCard().y,
                    this._aPlayersHand[iThisTurn].getContainer(),
                    oCard.getFotogram(),
                    oCard.getRank(),
                    oCard.getSuit(),
                    oCard.getUniqueID(),
                    iRot
                )
    ); 
    
    oCard.unload(); 
    
    var oNewCard = this._aPlayersHand[iThisTurn].getLastCard();
    this._aPlayersHand[iThisTurn].centerContainer();
    if (this.canCardBeShown(iThisTurn)){
        oNewCard.showCard();
    }
    
    this._oTurnManager.nextTurn();

    if (!this.matchCanStart()){
        this.getFirstHand();
    }else{
        this._oCardsContainer.addChildAt(this._oDecksContainer,this._oCardsContainer);
        this._oDeck.setOnTop();
        oCard = this._oDeck.takeFirstLastCard();
        oCard.moveFirstLastCard(CARD_WIDTH,0,600);
    }
};

CGameBase.prototype.onFirstLastCardDealed = function (oCard){
    //console.log("START GAME")

    this._oUsedCards.pushCard(new CCard(0,0,this._oUsedCards.getContainer(),oCard.getFotogram(),oCard.getRank(),oCard.getSuit(),oCard.getUniqueID(),0));
    oCard.unload();
    var oNewCard = this._oUsedCards.getLastCard();
    oNewCard.showCardNoInput();
    this._oDeck.moveContainer(CANVAS_WIDTH/2-(CARD_WIDTH/2),CANVAS_HEIGHT/2,400);
    this._oUsedCards.moveContainer(CANVAS_WIDTH/2+CARD_WIDTH/2,CANVAS_HEIGHT/2,400);
    this._iCurrentColor = this._oUsedCards.getLastCard().getSuit();
    this._oInterface.refreshColor(this._iCurrentColor);
    
    //this._oTurnManager.setFirstPlayerToBegin();
    this._iCurPlayer = this._oTurnManager.getTurn();
    this._iNextPlayer = this._oTurnManager.getNextPlayer();

    this._aPlayersHand[this._iCurPlayer].setOnTurn();

    this._oUsedCards.disableInputUsedCards();
    
    this._onFirstTurnStart();
};

CGameBase.prototype._onFirstTurnStart = function(){    
    this._oTurnManager.prevTurn();
    this._iCurPlayer = this._oTurnManager.getTurn();
    this._iNextPlayer = this._oTurnManager.getNextPlayer();

    this.setOffTurn();

    var oNewCard = this._oUsedCards.getLastCard();
    this._checkFirstCardEffect(oNewCard.getEffect());    
};

CGameBase.prototype.cpuPlayCard = function(oParent){
    var iThisTurn = this._iCurPlayer;
    var oHandGlobalPos =this._aPlayersHand[iThisTurn].getContainerPos();
    var oUsedCardsGlobalPos = this._oUsedCards.getGlobalPosition();
    this._oCardsContainer.addChildAt(this._oHandsContainer,this._oCardsContainer.numChildren);
    this._aPlayersHand[iThisTurn].setOnTop();
    oParent.moveCard((oUsedCardsGlobalPos.x-oHandGlobalPos.x),oUsedCardsGlobalPos.y-oHandGlobalPos.y,0,400,1000);
    this._oDeck.setChildDepth(2);
    this._oUsedCards.setChildDepth(2);
    oParent.showCard(1000);
};

CGameBase.prototype.checkUno = function(iEffect){
    var iThisTurn = this._oTurnManager.getTurn();
    
    if (this._aPlayersHand[iThisTurn].getLength()===1){
        this._bUNO = true;
    }
    
    this._oUnoController.check(iEffect);    
};

CGameBase.prototype.setUNO = function (bVal){
    this._bUNO = bVal;
};

CGameBase.prototype.applyPenality = function(){
    this._bUNO = false;
    this.drawCards(this._iCurPlayer,NUM_PENALTY_CARDS,0,DRAW_TYPE_PENALITY); 
};

CGameBase.prototype._checkEffect = function(iEffect){
    switch(iEffect){
        case EFFECT_SELECT_COLOR:{
                this._applySelectColor();

                break;
        }
        case EFFECT_DRAW_FOUR:{
                this._applyDrawFourEffect();
                
                break;
        }
        case EFFECT_STOP:{
                this._applyStopTurn();
                
                break;
        }
        case EFFECT_INVERT_TURN:{
                this._applyInvertTurn();
                
                break;
        }
        case EFFECT_DRAW_TWO_COLORED:{        
                this._applyDrawTwoColored();

                break;
        }
        default:{
                //EFFECT_NORMAL_CARD
                this._applyNormalCardEffect();
                
                break;
        }
    }
};

CGameBase.prototype.onDraw = function(){
    var bCheck = true;
    var oTmpCard;
    
    var iPlayerID = 0;    

    if (this._oUsedCards.getLength()!==0&&this._iCurPlayer=== iPlayerID){
        for (var i=0;i<this._aPlayersHand[iPlayerID].getLength();i++){
            oTmpCard = this._aPlayersHand[iPlayerID].getCardByIndex(i);
            if(this.cardMatchTheWaste(oTmpCard)){
                bCheck = false;
            }
        }

        if(bCheck===true){
            this._oDeck.disableInputDraw();
            this._oDeck.hideHelp();
            
            this.drawCards(iPlayerID,1,0,DRAW_TYPE_NORMAL);
        }
    }
};

CGameBase.prototype._checkNumberCardsToDraw = function(iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    this._iCounterDraw = iNumberOfCards;
    switch(iDrawType){
        case DRAW_TYPE_PENALITY:{
                this.drawCardsTween(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
                break;
        }
        case DRAW_TYPE_DRAW2_COLORED:{
                s_oCAnimation.drawTwoAnim(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
                break;
        }
        case DRAW_TYPE_DRAW4:{
                s_oCAnimation.drawFourAnim(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
                break;
        }
        default:{
                this.drawCardsTween(iIndexPlayer,iNumberOfCards,iDelay,iDrawType); 
                break;
        }
    }

};

CGameBase.prototype.drawCardsTween = function(iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    this._oCardsContainer.addChildAt(this._oDecksContainer,this._oCardsContainer.numChildren);
    this._oDeck.setOnTop();
    
    this._aPlayersHand[iIndexPlayer].organizeHand();
    
    var oHandGlobalPos = this._aPlayersHand[iIndexPlayer].getContainerPos();
    var oCardPos = this._aPlayersHand[iIndexPlayer].getPosNewCard();
    var oDeckGlobalPos = this._oDeck.getGlobalPosition();

    var oParent = this;

    var oCard = this._oDeck.takeLastCard();
    oCard.setOnTop();

    var iFinalPosX = (oHandGlobalPos.x+oCardPos.x)-(oDeckGlobalPos.x);
    var iFinalPosY = (oHandGlobalPos.y+oCardPos.y)-(oDeckGlobalPos.y);

    var iRot = this._getCardRotation(iIndexPlayer);
    var iTime = 400;

    createjs.Tween.get(oCard.getSprite()).wait(iDelay).to({x: iFinalPosX, y: iFinalPosY, rotation:iRot},iTime,createjs.Ease.cubicOut).call(function(){
        oParent._aPlayersHand[iIndexPlayer].pushCard(
            new CCard(  oParent._aPlayersHand[iIndexPlayer].getPosNewCard().x,
                        oParent._aPlayersHand[iIndexPlayer].getPosNewCard().y,
                        oParent._aPlayersHand[iIndexPlayer].getContainer(),
                        oCard.getFotogram(),oCard.getRank(),oCard.getSuit(),oCard.getUniqueID(),
                        iRot)
                    );
        oCard.unload();

        var oNewCard = oParent._aPlayersHand[iIndexPlayer].getLastCard();
        if (oParent.canCardBeShown(iIndexPlayer)){
            oNewCard.showCard();
        }else{
            playSound("card",1,false);
        }
        oParent._aPlayersHand[iIndexPlayer].centerContainer();

        oParent.checkForMoreDraws(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);

    }); 
};

        
CGameBase.prototype.checkForMoreDraws = function(iIndexPlayer,iNumberOfCards,iDelay,iDrawType){
    var oParent = this;
    
    if (oParent._oDeck.getLength()===0){
        //console.log("shuffleCards:")
        oParent.shuffleCards(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
    }else {
        //console.log("MORECARDS:"+iIndexPlayer)
        oParent._iCounterDraw--;
        if (oParent._iCounterDraw>0){
            oParent.drawCardsTween(iIndexPlayer,iNumberOfCards,iDelay,iDrawType);
        }else{

            oParent._onAllCardsDrawCompleted(iIndexPlayer,iDrawType);
        }    
    }
};

CGameBase.prototype._checkEffectAfterDrawCompleted = function(iIndexPlayer,iDrawType){
    switch(iDrawType){
        case DRAW_TYPE_PENALITY:{
                ///PENALITY DRAW
                this.applyEffectOnCard(this._oUsedCards.getLastCard().getEffect());
                break;
        }
        case DRAW_TYPE_DRAW2_COLORED:{
                this._oTurnManager.nextTurn();
                this._notifyChangeTurn();
                break;
        }
        case DRAW_TYPE_DRAW4:{
                this._oTurnManager.nextTurn();
                this._notifyChangeTurn();
                break;
        }
        default:{
                //IMPLICIT NORMAL DRAW
                this._checkIfCanStillPlayTheTurn(iIndexPlayer);
                break;
        }
    }
};

CGameBase.prototype.onInputPlayer = function(iPlayer){
    for (var i=0;i<this._aPlayersHand[iPlayer].getLength();i++){
        this._aPlayersHand[iPlayer].getCardByIndex(i).onSetTurned();
    }
};

CGameBase.prototype.offInputPlayer = function(iPlayer){
    for (var i=0;i<this._aPlayersHand[iPlayer].getLength();i++){
        this._aPlayersHand[iPlayer].getCardByIndex(i).offSetTurned();
    }
};

CGameBase.prototype.setOffTurn = function(){
    for (var i=0;i<NUM_PLAYERS;i++){
        this._aPlayersHand[i].setOffTurn(i);
        
        this.offInputPlayer(i);
    } 
};

CGameBase.prototype.prevTurn = function(){
    this._oTurnManager.prevTurn();
};

CGameBase.prototype.getPlayerTurn = function(){
    return this._iCurPlayer; 
};

CGameBase.prototype.getbUNO = function(){
    return this._bUNO; 
};

CGameBase.prototype.cardCanBePlayed = function(oCard, iPlayer){
    var bCanBePlayed = false;
    if(oCard.getFotogram()===FOTOGRAM_DRAW_FOUR){
        var bAvailableCard = false;
        for (var i=0;i<this._aPlayersHand[iPlayer].getLength();i++){
            var oPlayerCard = this._aPlayersHand[iPlayer].getCardByIndex(i);
            if(oPlayerCard.getFotogram()!==FOTOGRAM_DRAW_FOUR){
                if(oPlayerCard.getRank()===this._oUsedCards.getLastCard().getRank()||oPlayerCard.getSuit()===this._iCurrentColor||oPlayerCard.getFotogram()===FOTOGRAM_COLOR){
                    bAvailableCard = true;
                    break;
                }
            }
        }
        
        bCanBePlayed = !bAvailableCard;
        
    }else {
        if(oCard.getFotogram()===FOTOGRAM_COLOR){
            bCanBePlayed = true;
        }else {
            bCanBePlayed = this.cardMatchTheWaste(oCard);
        }
    }
    
    return bCanBePlayed;
};

CGameBase.prototype.cardMatchTheWaste = function(oCard){
    var bMatch = false;
    if(oCard.getRank()===this._oUsedCards.getLastCard().getRank()||oCard.getSuit()===this._iCurrentColor||oCard.getFotogram()===FOTOGRAM_COLOR||oCard.getFotogram()===FOTOGRAM_DRAW_FOUR){
        bMatch = true;
    }
    return bMatch;
};

CGameBase.prototype.playerCanPlay = function(iPlayer){
    var bCanPlay = false;
    
    for (var i=0;i<this._aPlayersHand[iPlayer].getLength();i++){
        var oCard = this._aPlayersHand[iPlayer].getCardByIndex(i);
        if(this.cardMatchTheWaste(oCard)){
            bCanPlay = true;
            break;
        }
    }
    
    return bCanPlay;
};

CGameBase.prototype._getCardRotation = function(iTurn){
    var iRot = 0;
    var iSide = this._aPlayersHand[iTurn].getSide();
    
    //console.log(iSide)
    
    switch( iSide){
            case BOTTOM:{
                    iRot = 0;
                    break;
            }
            case LEFT:{
                    iRot = 90;
                    break;
            }
            case TOP:{
                    iRot = 180;
                    break;
            }
            case RIGHT:{
                    iRot = -90;
                    break;
            }

        }
        
    return iRot;
};

CGameBase.prototype.shuffle = function(aCards){
    var j, x, i;
    for (i = aCards.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = aCards[i - 1];
        aCards[i - 1] = aCards[j];
        aCards[j] = x;
    }
};      

CGameBase.prototype.unload = function(){   
    this._oUnoController.unload();
    this._oInterface.unload();
    this._oSummaryPanel.unload();
    this._oMsgBox.unload();

    createjs.Tween.removeAllTweens();
    s_oStage.removeAllChildren();
};

CGameBase.prototype.gameOver = function(iWinnerIndex){
    this.setOffTurn();
    
    this._showAllPlayersCards();
    this._showAllPlayersMatchScore();

    var iMatchScore = this._calculateMatchScore();
    
    var iWinnerPrevScore = this._aPlayersHand[iWinnerIndex].getScore();
    var iWinnerNewScore = iWinnerPrevScore + iMatchScore;
    
    this._aPlayersHand[iWinnerIndex].setOnTurn();
    this._aPlayersHand[iWinnerIndex].setScore(iWinnerNewScore);
    
    var aData = this._getPlayersRank();
    this._oSummaryPanel.setAndShow(aData, iWinnerIndex, iMatchScore);
    
    if(iWinnerNewScore >= GAME_SCORE_WIN){
        //console.log("GAME END");
        this._bEndGame = true;
        this._oSummaryPanel.endMode( sprintf(TEXT_PLAYER_WON, this._aPlayersHand[iWinnerIndex].getName()) );
        
        $(s_oMain).trigger("share_event", iWinnerNewScore);
    }

};

CGameBase.prototype.checkWinner = function(){
    var iWinner = null;
    
    for(var i=0; i<this._aPlayersHand.length; i++){
        if(this._aPlayersHand[i].getLength()===0){
            iWinner = i;
            break;
        }
    }

    return iWinner;
};

CGameBase.prototype._calculateMatchScore = function(){
    var iMatchScore = 0;
    for(var i=0; i<this._aPlayersHand.length; i++){
        iMatchScore += this._aPlayersHand[i].calculateHandScore();
    };
    return iMatchScore;
};

CGameBase.prototype._showAllPlayersCards = function(){
    for(var i=0; i<this._aPlayersHand.length; i++){
        if(this._aPlayersHand[i].getSide() !== BOTTOM){
            this._aPlayersHand[i].showAllCards();
        }
    };
};

CGameBase.prototype._showAllPlayersMatchScore = function(){
    for(var i=0; i<this._aPlayersHand.length; i++){
        var iMatchScore = this._aPlayersHand[i].calculateHandScore();
        if(this._aPlayersHand[i].getLength() > 0){
            this._aPlayersHand[i].showHandScore(sprintf(TEXT_PTS_TO_WINNER,iMatchScore));
        }else {
            this._aPlayersHand[i].showHandScore(TEXT_WINNER);
        }
    };
};

CGameBase.prototype._getPlayersRank = function(){
    var aData = new Array();
    for(var i=0; i<this._aPlayersHand.length; i++){
        var szName = this._aPlayersHand[i].getName();
        var iScore = this._aPlayersHand[i].getScore();
        aData.push( {name: szName, score: iScore, index:i} );
    };
    
    aData.sort((a, b) => (a.score > b.score) ? -1 : 1);
    
    return aData;
};

CGameBase.prototype.matchCanStart = function(){
    var bStart = false;
    var iPlayerReadyCont = 0;
    for(var i=0; i<this._aPlayersHand.length; i++){
        if(this._aPlayersHand[i].getLength()===STARTING_NUM_CARDS){
            iPlayerReadyCont++;
        }
    }
    
    if(iPlayerReadyCont === NUM_PLAYERS){
        bStart = true;
    }
    
    return bStart;
};

CGameBase.prototype._checkUnoNotify = function(bPenality, iPlayerID, iGuiltyPlayer){
    if(bPenality){
        var bIsTheGuiltyPlayer = iGuiltyPlayer === iPlayerID;
        var szMsg;
        if(bIsTheGuiltyPlayer){
            szMsg = sprintf(TEXT_ALERT_1, NUM_PENALTY_CARDS);
            this._oUnoController.unoAnimation();
        } else {
            var szName = this._aPlayersHand[iGuiltyPlayer].getName().toUpperCase();
            szMsg = sprintf(TEXT_ALERT_2, szName, NUM_PENALTY_CARDS);
        }

        this._oUnoController.showAlertMsg(szMsg);
    }
};

CGameBase.prototype.canCardBeShown = function(iIndexPlayer){
    return this._aPlayersHand[iIndexPlayer].getSide() === BOTTOM || DEBUG_SHOW_CARDS;
};

CGameBase.prototype.getPlayersHand = function(iPlayer){
    return this._aPlayersHand[iPlayer];
};

CGameBase.prototype.getCurColor = function(iPlayer){
    return this._iCurrentColor;
};

CGameBase.prototype.getLastCard = function(iPlayer){
    return  this._oUsedCards.getLastCard();
};

CGameBase.prototype.update = function(){
    
};

/////END GAME FUNCTIONS
CGameBase.prototype._onCheck = function(){
    this._oSummaryPanel.hide();
};






