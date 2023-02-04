function CTurnManager (){
    var _bClockWise;

    var _iNextPlayer;
    var _iThisTurn;  
    var _iStartingPlayer;
    
    var _oTurnList;
    
    this.init = function (){
        _bClockWise = true;
        
        var aIndexPlayerList = new Array();
        for(var i=0; i<NUM_PLAYERS; i++){
            aIndexPlayerList.push(i);
        }
        
        _oTurnList = new CircularList(aIndexPlayerList);
        
        _iStartingPlayer = _oTurnList.current();
        _iThisTurn = _oTurnList.current();
        _iNextPlayer = _oTurnList.getNext();

        s_oTurnManager = this;
    };
    
    this.changeClockWise = function (){
        if (_bClockWise===true){
            _bClockWise=false;
        }else{
            _bClockWise=true;
        }
    };
    
    this.nextTurn = function(){
        if (_bClockWise===true){
            _oTurnList.next();
            _iThisTurn = _oTurnList.current();
            _iNextPlayer = _oTurnList.getNext();
        }else {
            _oTurnList.prev();
            _iThisTurn = _oTurnList.current();
            _iNextPlayer = _oTurnList.getPrev();
        }
    };

    this.prevTurn = function(){
        //console.trace("prevTurn:"+_iThisTurn)
        if (_bClockWise===true){
            _oTurnList.prev();
            _iThisTurn = _oTurnList.current();
            _iNextPlayer = _oTurnList.getNext();
        }else{
            _oTurnList.next();
            _iThisTurn = _oTurnList.current();
            _iNextPlayer = _oTurnList.getPrev();
        }
    };

    this.setTurn = function (iTurn){
        _oTurnList.setCurrent(iTurn);
        _iThisTurn = _oTurnList.current();
        if (_bClockWise===true){
            _iNextPlayer = _oTurnList.getNext();
        }else {
            _iNextPlayer = _oTurnList.getPrev();
        }
    };
    
    this.setFirstPlayerToBegin = function(){
        do{
            _iStartingPlayer++;
            if(_iStartingPlayer === NUM_PLAYERS){
                _iStartingPlayer = 0;
            }  
        }while(_oTurnList.setCurrent(_iStartingPlayer) === null)


        this.setTurn(_iStartingPlayer);
    };
    
    this.getFirstPlayerToBegin = function(){
        return _iStartingPlayer;
    };
    
    this.resetClockWise = function(){
        _bClockWise = true;
    };
    
    this.resetFirstPlayer = function(){
        _iStartingPlayer = -1;
    };
    
    this.getTurn = function(){
        return _iThisTurn;
    };
    
    this.getNextPlayer= function(){
        return _iNextPlayer;
    };
    
    this.getClockWise = function (){
        return _bClockWise;
    };
    
    this.removePlayer = function(iPlayerIndex){
        if(iPlayerIndex === _iThisTurn){
            //IF YOU ARE REMOVING CURRENT INDEX, WE NEED TO SET A NEW CURRENT, BEFORE REMOVING
            //console.log("_bClockWise:"+_bClockWise)
            if(_bClockWise){
                this.prevTurn();
            }else {
                this.nextTurn();
            }
            _oTurnList.removeElement(iPlayerIndex);
        }else {
            _oTurnList.removeElement(iPlayerIndex);
            //console.log("_iThisTurn:"+_iThisTurn)
            var iIndex = _oTurnList.setCurrent(_iThisTurn);
        }
    };
    
    this.init();
};

s_oTurnManager = null;
