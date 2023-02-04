function CPreloader(){
    var _iMaskWidth;
	var _iMaskHeight;
    var _oLoadingText;
    var _oProgressBar;
    var _oMaskPreloader;
    var _oFade;
    var _oContainer;
    
    this._init = function(){
       s_oSpriteLibrary.init( this._onImagesLoaded,this._onAllImagesLoaded, this );
       s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");
       s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");
       s_oSpriteLibrary.addSprite("sitelogo","./sprites/sitelogo.png");
       s_oSpriteLibrary.loadSprites();
       
       _oContainer = new createjs.Container();
       s_oStage.addChild(_oContainer); 
    };
    
    this.unload = function(){
	_oContainer.removeAllChildren();

		if(_ositelogo!=null){
			_ositelogo.unload();
			_ositelogo = null;
		}
    };
    
    this.hide = function(){
        var oParent = this;
        setTimeout(function(){createjs.Tween.get(_oFade).to({alpha:1}, 500).call(function(){oParent.unload();s_oMain.gotoMenu();}); }, 1000);
    };
    
    this._onImagesLoaded = function(){
        
    };
    
    this._onAllImagesLoaded = function(){
        this.attachSprites();
        
        s_oMain.preloaderReady();
    };
    
    this.attachSprites = function(){
        
        var oBg = createBitmap(s_oSpriteLibrary.getSprite('bg_menu'));
        _oContainer.addChild(oBg);
       
        var oSprite = s_oSpriteLibrary.getSprite('progress_bar');
       _oProgressBar  = createBitmap(oSprite);
       _oProgressBar.x = CANVAS_WIDTH/2 - (oSprite.width/2);
       _oProgressBar.y = CANVAS_HEIGHT - 180;
       _oContainer.addChild(_oProgressBar);
       
       _iMaskWidth = oSprite.width;
       _iMaskHeight = oSprite.height;
       _oMaskPreloader = new createjs.Shape();
       _oMaskPreloader.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oProgressBar.x, _oProgressBar.y, 1,_iMaskHeight);
	   
       _oContainer.addChild(_oMaskPreloader);
       
       _oProgressBar.mask = _oMaskPreloader;
       
       _oLoadingText = new createjs.Text("","30px Arial", "#fff");
       _oLoadingText.x = CANVAS_WIDTH/2;
       _oLoadingText.y = CANVAS_HEIGHT - 200;
       _oLoadingText.shadow = new createjs.Shadow("#000", 2, 2, 2);
       _oLoadingText.textBaseline = "alphabetic";
       _oLoadingText.textAlign = "center";
       _oContainer.addChild(_oLoadingText);
       _oFade = new createjs.Shape();
       _oFade.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
       _oFade.alpha = 0;
        
        _oContainer.addChild(_oFade);

        var oSprite = s_oSpriteLibrary.getSprite('sitelogo');
        _ositelogo = new CTextButton((CANVAS_WIDTH/2),CANVAS_HEIGHT - 80,oSprite,' ',"blackplotan","#ffffff",130);
        _ositelogo.addEventListener(ON_MOUSE_UP, this._onSiteLogoRelease, this);
    };
    
    this._onSiteLogoRelease = function(){
		CreateLinksInGame('100-Metres-Race','pregame','logo');
    };

    this.refreshLoader = function(iPerc){
        _oLoadingText.text = iPerc+"%";
        
        
        _oMaskPreloader.graphics.clear();
        var iNewMaskWidth = Math.floor((iPerc*_iMaskWidth)/100);
        _oMaskPreloader.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(_oProgressBar.x, _oProgressBar.y, iNewMaskWidth,_iMaskHeight);
    };
    
    this._init();   
}