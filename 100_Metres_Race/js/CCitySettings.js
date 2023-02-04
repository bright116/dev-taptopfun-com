function CCitySettings(){
    
    var _aCityName = new Array();                     //strings  (cityes name)
    var _aRewards = new Array();                      //objects  (money earned)
    var _aRewardTaken = new Array();                  //boolean  (did I take a reward?)
    var _aTimeSpent = new Array();                    //integers, in ms
    var _aRewardEarned = new Array();                 //integers ( 0 - 2 )
    var _aValueToAddInEachLevelToCPU = new Array();   //objects  (spd & stamina to add)
    var _aArrivalsPosition = new Array();
    
    this._init = function(){
        this.initCityName();
        this.initRewards();
        this.initRewardTaken();
        this.initTimeSpent();
        this.initRewardEarned();
        this.initValueToAddInEachLevelToCPU();
        this.initArrivalsPosition();
        
        
    };
    
    this.initCityName = function(){
        for(var i=0;i<10;i++){
            _aCityName.push(CITY_NAME[i]);
        }
        
    };
    
    this.initRewards = function(){
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 100, second: 50, third: 25});
        _aRewards.push({first: 125, second: 75, third: 50});
        _aRewards.push({first: 150, second: 100, third: 75});
    };
    
    this.initRewardTaken = function(){
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
        _aRewardTaken.push(false);
    };
    
    this.initTimeSpent = function(){
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
        _aTimeSpent.push(null);
    };
    
    this.initRewardEarned = function(){
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
        _aRewardEarned.push(null);
    };
    
    this.initValueToAddInEachLevelToCPU = function(){
        _aValueToAddInEachLevelToCPU.push({speed: 0,   energy: 0});
        _aValueToAddInEachLevelToCPU.push({speed: 0.2, energy: 2});
        _aValueToAddInEachLevelToCPU.push({speed: 0.4, energy: 4});
        _aValueToAddInEachLevelToCPU.push({speed: 0.6, energy: 6});
        _aValueToAddInEachLevelToCPU.push({speed: 0.8, energy: 8});
        _aValueToAddInEachLevelToCPU.push({speed: 1,   energy: 10});
        _aValueToAddInEachLevelToCPU.push({speed: 1.2, energy: 12});
        _aValueToAddInEachLevelToCPU.push({speed: 1.4, energy: 14});
        _aValueToAddInEachLevelToCPU.push({speed: 1.6, energy: 16});
        _aValueToAddInEachLevelToCPU.push({speed: 1.8, energy: 18});
    };
    
    this.initArrivalsPosition = function(){
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
        _aArrivalsPosition.push([{player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}, {player: 0, position: -1}]);
    };
    
    this.addCitiesStorage = function(){
        localStorage.setItem("RewardTaken", JSON.stringify(_aRewardTaken));
        localStorage.setItem("TimeSpent", JSON.stringify(_aTimeSpent));
        localStorage.setItem("RewardEarned", JSON.stringify(_aRewardEarned));
        localStorage.setItem("ArrivalsPosition", JSON.stringify(_aArrivalsPosition));
    };
    
    this.removeCitiesStorage = function(){
        _aRewardTaken = [];
        _aTimeSpent = [];
        _aRewardEarned = [];
        _aArrivalsPosition = [];
        
        this.initRewardTaken();
        this.initTimeSpent();
        this.initRewardEarned();
        this.initArrivalsPosition();
        
        localStorage.removeItem("RewardTaken");
        localStorage.removeItem("TimeSpent");
        localStorage.removeItem("RewardEarned");
        localStorage.removeItem("ArrivalsPosition");
    };
    
    this.getCitiesStorage = function(){
        _aRewardTaken = JSON.parse(localStorage.getItem("RewardTaken"));
        _aTimeSpent = JSON.parse(localStorage.getItem("TimeSpent"));
        _aRewardEarned = JSON.parse(localStorage.getItem("RewardEarned"));
        _aArrivalsPosition = JSON.parse(localStorage.getItem("ArrivalsPosition"));
    };
    
    this.getLevel = function(iLevel){
        return(iLevel);
    };
    
    this.getNumLevels = function(){
        return _aCityName.length;
    };
    
    this.getCityName = function(iLevel){
        return _aCityName[iLevel];
    };
    
    this.getRewards = function(iLevel){
        return _aRewards[iLevel];
    };
    
    this.getValuesToAdd = function(iLevel){
        return _aValueToAddInEachLevelToCPU[iLevel];
    };
    
    this.setRewardTaken = function(iLevel, iPlace){
        if(_aRewardTaken[iLevel]){
            return;
        }
        _aRewardTaken[iLevel] = true;
        switch(iPlace){
            case 0:
                _aRewardEarned[iLevel] = _aRewards[iLevel].first;
                break;
            case 1:
                _aRewardEarned[iLevel] = _aRewards[iLevel].second;
                break;
            case 2:
                _aRewardEarned[iLevel] = _aRewards[iLevel].third;
                break;
        }
        s_iPlayerMoney += _aRewardEarned[iLevel];
    };
    
    this.setPlayersArrivals = function(iLevel, aArrivals){
        _aArrivalsPosition[iLevel] = aArrivals;
    };
    
    this.getPlayersArrivals = function(){
        return _aArrivalsPosition;
    };
    
    this.getRewardTaken = function(iLevel){
        if(_aRewardTaken[iLevel]){
            return _aRewardEarned[iLevel];
        }else{
            return 0;
        }
    };
    
    this.getMedal = function(iLevel){
        if(_aRewardEarned[iLevel] === _aRewards[iLevel].first){
            return "gold";
        }else if(_aRewardEarned[iLevel] === _aRewards[iLevel].second){
            return "silver";
        }else if(_aRewardEarned[iLevel] === _aRewards[iLevel].third){
            return "bronze";
        }
        return null;
    };
    
    this.setTimeSpent = function(iLevel, iTime){
        _aTimeSpent[iLevel] = iTime;
    };
    
    this.getTimeSpent = function(iLevel){
        return _aTimeSpent[iLevel];
    };
            
    this.unload = function(){
        _aCityName = [];
        _aRewards = [];
        _aRewardTaken = [];
        _aTimeSpent = [];
        _aRewardEarned = [];
        _aValueToAddInEachLevelToCPU = [];
        _aArrivalsPosition = [];
    };
    
    this._init();
}
