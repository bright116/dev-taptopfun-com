function CFormatText (iX, iY, szText, szColor, oParentContainer, szGlow, iSize){
    
    var _szText;
    
    var _oTextOutline;
    var _oText;
    var _oTextContainer;
    
    var _oSlideText;
    
    var _oParent;
    
    this._init = function(iX, iY, szText, szColor, oParentContainer, szGlow, iSize){    
        
        _szText = szText;
        
        _oTextContainer = new createjs.Container();
        _oTextContainer.x = iX;
        _oTextContainer.y = iY;
        oParentContainer.addChild(_oTextContainer);
        
        var iDim = iSize;
        
        var szFontTag = iDim + "px";

        _oTextOutline = new createjs.Text();
        _oTextOutline.text = _szText;
        _oTextOutline.font = "bold "+szFontTag+ " "+ FONT;
        _oTextOutline.color = szGlow;
        _oTextOutline.textAlign = "center";
        _oTextOutline.textBaseline = "middle";
        _oTextOutline.lineWidth = 600;
        _oTextOutline.outline = 4;

        _oText = new createjs.Text();
        _oText.text = _szText;
        _oText.font = "bold "+szFontTag+" " + FONT;
        _oText.color = szColor;
        _oText.textAlign = "center";
        _oText.textBaseline = "middle";
        _oText.lineWidth = 600;
        _oTextContainer.addChild(_oText);
       
    };
 
    this.unload = function(){
        oParentContainer.removeChild(_oTextContainer);
    };

    this.disableOutline = function(){
        _oTextContainer.removeChild(_oTextOutline);
    };
    
    this.setVisible = function(bVal){
        _oTextContainer.visible = bVal;
    };
    
    this.isVisible = function(){
        return _oTextContainer.visible;
    };

    this.setOutline = function(iVal){
        _oTextOutline.outline = iVal;
    };

    this.setShadow = function(bVal){
        if(!bVal){
            _oTextOutline.shadow = null;
        } else {
            _oTextOutline.shadow = new createjs.Shadow("#333333", 2, 2, 6);
        }
    };

    this.setAlign = function(szType){
        _oTextOutline.textAlign = szType;
        _oText.textAlign = szType;
    };

    this.setWidth = function(iWidth){
        _oTextOutline.lineWidth = iWidth;
        _oText.lineWidth = iWidth;
    };

    this.setText = function(szText){
        _oText.text = szText;
        _oTextOutline.text = szText;
    };

    this.setColor= function(szColor, szColorOutline){
        _oText.color = szColor;
        _oTextOutline.color = szColorOutline;
    };

    this.setFont = function(szFont){
        var szFontTag = iSize + "px";
        
        _oText.font = "bold "+szFontTag+ " "+ szFont;
        _oTextOutline.font = "bold "+szFontTag+ " "+ szFont;
        
    };

    this.getText = function(){
        return _oTextContainer;
    };
    
    this.setPos = function(iY){
        _oTextContainer.y = iY;
    };
    
    this.getPos = function(){
        return {x: _oTextContainer.x,  y: _oTextContainer.y};
    };
    
    this.playText = function(){      
        
        _oSlideText = "";
        
        this.setText("");
        this._slideText(0);
        
    };
    
    this._slideText = function(iIndex){
        
        _oSlideText += szText[iIndex];
        
        this.setText(_oSlideText);
        if(iIndex < szText.length-1){
            setTimeout(function(){_oParent._slideText(iIndex+1);}, 40);
        }  
    };
    
    this.setPosition = function(iXPos,iYPos){
         _oTextContainer.x = iXPos;
         _oTextContainer.y = iYPos;
    };
    
    _oParent = this;
    
    this._init(iX, iY, szText, szColor, oParentContainer, szGlow, iSize);
    
}