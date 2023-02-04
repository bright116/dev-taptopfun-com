function CAIManager(){
    var _oParent;
    
    this._init = function(){
        
    };
    
    this.unload = function(){
        
    };
    
    this.onSelectColorCpu = function(iPlayer){
        var oPlayerHand = s_oGame.getPlayersHand(iPlayer);

        var oTmpCard;
        var aColor = new Array();
        aColor[0] = {iColor: 0, iPoints: 0};
        aColor[1] = {iColor: 1, iPoints: 0};
        aColor[2] = {iColor: 2, iPoints: 0};
        aColor[3] = {iColor: 3, iPoints: 0};

        for (var i=0;i<oPlayerHand.getLength();i++){
            oTmpCard = oPlayerHand.getCardByIndex(i);
            for (var j=0;j<aColor.length;j++){
                if (oTmpCard.getSuit()===j){
                    aColor[j].iPoints++;
                }
            }
        }
        aColor.sort(function(a,b){
            return parseFloat(b.iPoints) - parseFloat(a.iPoints);
        });

        return aColor[0].iColor;
    };
    
    this.selectACard = function(iPlayer){
        //console.log("onSelectACardCpu")
        
        var oPlayerHand = s_oGame.getPlayersHand(iPlayer);
        var iCurColor = s_oGame.getCurColor();
        var oCurCard = s_oGame.getLastCard();
        
        var aBestCards = new Array();
        for (var i=0;i<oPlayerHand.getLength();i++){
            if(oPlayerHand.getCardByIndex(i).getSuit()!==4&&(oPlayerHand.getCardByIndex(i).getRank()===oCurCard.getRank()||oPlayerHand.getCardByIndex(i).getSuit() === iCurColor)){
                if(oPlayerHand.getCardByIndex(i).getRank()===12){
                    aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 6});
                }else if (oPlayerHand.getCardByIndex(i).getRank()===10){
                    aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 5});
                }else if (oPlayerHand.getCardByIndex(i).getRank()===11){
                    aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 4});
                }else{
                    aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 3});
                }
            }else if(oPlayerHand.getCardByIndex(i).getFotogram()===FOTOGRAM_COLOR){
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 2});
            }else if(oPlayerHand.getCardByIndex(i).getFotogram()===FOTOGRAM_DRAW_FOUR){
                aBestCards.push({oCard: oPlayerHand.getCardByIndex(i), iValue: 1});
            }
        }
        if (aBestCards.length===0){
            s_oGame.drawCards(iPlayer,1,1000,DRAW_TYPE_NORMAL);
        }else{
            aBestCards.sort(function(a,b){
                return parseFloat(b.iValue) - parseFloat(a.iValue);
            });

            s_oGame.cpuPlayCard(aBestCards[0].oCard);
        }
    };

    _oParent = this;
    this._init();
}


