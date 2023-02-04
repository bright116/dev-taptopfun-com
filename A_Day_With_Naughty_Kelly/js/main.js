var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,

   shutterOn:[true],

   d_array:[1,1,1,1,1,1],

    tool1X:[208,190,177,172,174,180,190,204,227,254,278,299,318,336,339,331,320,
296,275,252,228,292,209,206,208,236,235,260,284,257,227,206,212,241,
222,236,259,272,294,312,312,305,284,254,283],
     
    tool1Y:[275,291,318,344,371,393,422,438,452,456,451,436,422,403,377,352,331,
326,307,292,281,308,300,326,352,313,339,328,344,360,369,380,409,401,
392,428,419,430,417,400,377,355,371,385,396],  

//      tool1X:[280,259,241,212,236,256,275,305,331,350,348,334,316,296,272,259,281,294,313,331,326,
// 313,304,289,270,248,225,206,192,177,185,187,193,216,214,216,206,214,227,248,270,292,
// 308,289,241,256,235,241,265,273],
     
//      tool1Y:[256,268,286,296,315,332,345,353,363,366,339,320,299,281,294,310,329,315,329,390,409,
// 425,440,444,457,456,449,428,406,384,361,340,320,337,320,356,377,400,416,428,424,411,
// 387,371,350,369,377,395,401,390],  


 tool2X:[229,229,224,226,218,220,212,206,197,195,189,182,183,176,
274,270,275,275,285,289,297,304,308,318,314,323,323,327],
     
 tool2Y:[356,345,345,335,337,326,331,328,335,326,333,333,345,345,
352,341,343,328,333,322,329,322,329,329,335,337,349,345],

// tool2X:[150,160,175,190,202,208,211,216,213,206,197,184,174,161,152,149,142,
// 267,264,264,271,278,292,302,313,325,336,335,325,325,316,305,297,284,273,273],
     
//     tool2Y:[273,259,250,253,261,273,287,277,266,253,245,242,242,247,250,261,266,
// 281,271,259,250,240,239,238,243,253,264,273,278,264,254,249,249,250,261,274],

    tool3X:[171,184,187,196,208,214,222,209,193,200,288,296,315,329,344,345,337,326,313,307,305,310,323,329,225],
     
    tool3Y:[387,404,420,433,417,396,380,380,377,396,390,379,377,372,377,396,404,424,435,422,408,392,403,390,392],

//   tool3X:[166,139,152,152,161,168,184,190,195,211,224,222,209,192,172,152,172,158,
// 190,299,292,299,307,323,340,358,355,355,345,334,315,308,305,324,336,315,323,315,337],
     
//     tool3Y:[347,316,334,352,364,385,371,358,344,326,318,304,304,308,307,304,336,316,
// 324,339,326,312,305,307,304,304,320,339,358,372,388,371,355,355,337,339,332,321,321],

     tool4X:[208,201,199,188,188,175,174,171,267,278,281,287,302,297,305,291,174,185,192],

   tool4Y:[309,302,309,304,311,311,314,322,311,301,312,307,309,308,309,304,315,307,302],


   // tool4X:[139,146,149,156,161,163,171,173,178,183,191,257,263,275,268,282,271],

   // tool4Y:[232,225,228,222,225,214,218,223,223,221,226,226,218,221,226,219,214],

   tool5X:[202,216,223,236,247,263,277,290,299,280,268,256,240,222],
     
   tool5Y:[404,411,419,422,430,426,422,408,401,407,408,415,408,407],

   // tool5X:[182,193,169,181,197,215,211,224,228,231,244,266,279,294,304,247,264,280,250,273],
     
   // tool5Y:[342,343,335,350,357,348,366,375,350,366,375,371,360,346,341,346,345,341,358,355],


      tool6X:[281,299,313,323,316,301,285,222,219,209,198,187,188,201],
     
      tool6Y:[354,354,352,345,330,329,336,356,345,330,335,346,357,354],

      //   tool6X:[150,164,158,184,200,208,177,161,188,270,281,294,318,326,329,312,286,305],
     
      // tool6Y:[276,256,265,252,262,283,268,286,284,281,262,246,248,259,270,278,275,262],

  tool7X:[178,188,202,216,229,226,273,280,288,305,316,325],

    tool7Y:[350,335,332,330,357,342,350,338,328,325,329,338],
   

    // tool7X:[151,160,177,194,207,213,266,268,286,301,316,325,337],

    // tool7Y:[268,255,245,250,262,281,278,266,247,242,245,251,266],

    // tool7X:[337,344,324,335,319,324,326,308,310,315,299,303,291,289,283,278,278,273,305,
    //  296,230,227,218,225,211,212,202,198,209,191,195,181,188,175,172,166,177,159],
     
    // tool7Y:[289,282,283,271,278,269,266,280,271,262,273,266,278,271,285,278,290,294,257,
    //  264,298,289,287,276,278,269,271,264,264,271,276,266,262,274,273,283,285,283],

     tool8X:[181,198,204,201,187,171,215,305,306,311,322,340,342,344,328,320,299,212,294,313],
     
    tool8Y:[397,394,407,426,415,390,391,397,419,433,422,412,401,384,383,398,446,416,409,380],

    //  tool8X:[140,144,146,153,162,182,190,190,177,158,163,164,176,312,328,346,355,358,355,348,336,326,312,312,316,334],
     
    // tool8Y:[318,336,350,366,378,372,355,334,327,317,337,359,348,342,329,319,308,322,338,351,363,381,393,371,351,343],

     tool9X:[222,211,200,185,177,272,280,289,292,192],
     
     tool9Y:[313,308,310,308,316,312,307,305,308,310],
   


  tool10X:[285,278,263,252,233,221,232,247,271,213],

    tool10Y:[408,422,426,432,429,416,412,409,408,407],


    tool11X:[209,192,187,175,174,168,177,185,197,216,239,261,281,299,322,337,
342,335,320,298,273,250,223,216,236,204,233,267,259,306,306,313,
298,278,253,226,212,202,204,228,235,253,282,274,254],
     
    tool11Y:[270,291,318,342,376,360,394,415,428,442,453,456,450,440,422,397,
373,356,332,322,308,298,290,314,315,339,338,338,326,347,369,394,
411,422,422,416,398,370,353,363,384,395,391,366,361],

 tool12X:[209,192,187,175,174,168,177,185,197,216,239,261,281,299,322,337,
342,335,320,298,273,250,223,216,236,204,233,267,259,306,306,313,
298,278,253,226,212,202,204,228,235,253,282,274,254],
     
    tool12Y:[270,291,318,342,376,360,394,415,428,442,453,456,450,440,422,397,
373,356,332,322,308,298,290,314,315,339,338,338,326,347,369,394,
411,422,422,416,398,370,353,363,384,395,391,366,361],

tool13X:[209,192,187,175,174,168,177,185,197,216,239,261,281,299,322,337,
342,335,320,298,273,250,223,216,236,204,233,267,259,306,306,313,
298,278,253,226,212,202,204,228,235,253,282,274,254],
     
    tool13Y:[270,291,318,342,376,360,394,415,428,442,453,456,450,440,422,397,
373,356,332,322,308,298,290,314,315,339,338,338,326,347,369,394,
411,422,422,416,398,370,353,363,384,395,391,366,361],

   


    // tool11X:[344,349,353,350,343,327,307,283,262,239,216,193,174,160,148,140,144,143,155,167,
    // 187,196,189,172,170,177,165,188,206,233,264,292,292,319,317,331,324,324,324,231,
    // 258,283,303,208,198,195,211,221,230,216,260,284,307,245,279,268,235,236,267,257,
    // 302,292,222,216,238,246,274,268,260],
     
    // tool11Y:[266,292,320,342,365,385,398,406,410,408,399,390,376,351,328,304,278,251,228,202,
    // 180,207,232,254,287,319,308,344,365,379,384,367,390,347,370,324,304,280,253,349,
    // 358,342,318,328,299,272,253,228,206,185,212,223,235,234,248,237,268,252,270,256,
    // 271,295,297,278,322,295,309,299,333],

    // tool12X:[344,349,353,350,343,327,307,283,262,239,216,193,174,160,148,140,144,143,155,167,
    // 187,196,189,172,170,177,165,188,206,233,264,292,292,319,317,331,324,324,324,231,
    // 258,283,303,208,198,195,211,221,230,216,260,284,307,245,279,268,235,236,267,257,
    // 302,292,222,216,238,246,274,268,260],
     
    // tool12Y:[266,292,320,342,365,385,398,406,410,408,399,390,376,351,328,304,278,251,228,202,
    // 180,207,232,254,287,319,308,344,365,379,384,367,390,347,370,324,304,280,253,349,
    // 358,342,318,328,299,272,253,228,206,185,212,223,235,234,248,237,268,252,270,256,
    // 271,295,297,278,322,295,309,299,333],

    //  tool13X:[344,349,353,350,343,327,307,283,262,239,216,193,174,160,148,140,144,143,155,167,
    // 187,196,189,172,170,177,165,188,206,233,264,292,292,319,317,331,324,324,324,231,
    // 258,283,303,208,198,195,211,221,230,216,260,284,307,245,279,268,235,236,267,257,
    // 302,292,222,216,238,246,274,268,260],
     
    // tool13Y:[266,292,320,342,365,385,398,406,410,408,399,390,376,351,328,304,278,251,228,202,
    // 180,207,232,254,287,319,308,344,365,379,384,367,390,347,370,324,304,280,253,349,
    // 358,342,318,328,299,272,253,228,206,185,212,223,235,234,248,237,268,252,270,256,
    // 271,295,297,278,322,295,309,299,333],

    tool14X:[315,320,327,333,338,340,339,338,333,324,329,322,322,321,321,327,333,329,333,330,326,319,320],
     
    tool14Y:[481,476,476,477,481,486,491,496,500,503,504,496,491,486,483,485,485,489,491,494,498,485,490],

    tool15X:[238,238,241,243,243],
     
    tool15Y:[195,190,187,193,197],

    tool16X:[148,154,162,162,165,164,160,154,155,153,157,160],
     
    tool16Y:[324,320,319,325,332,338,339,339,335,332,327,333],

    tool17X:[252,257,262,264,264,265,267,262,257,257,255,259,259,262],
     
    tool17Y:[524,522,521,519,524,531,537,540,541,537,532,527,535,531],

    tool18X:[312,317,325,327,329,324,317,316,321,322],
     
    tool18Y:[532,532,532,536,542,545,542,537,537,541],

/////////////
    tool19X:[238,238,241,243,243],
     
    tool19Y:[195,190,187,193,197],

    tool20X:[148,154,162,162,165,164,160,154,155,153,157,160],
     
    tool20Y:[324,320,319,325,332,338,339,339,335,332,327,333],

    tool21X:[252,257,262,264,264,265,267,262,257,257,255,259,259,262],
     
    tool21Y:[524,522,521,519,524,531,537,540,541,537,532,527,535,531],

    tool22X:[312,317,325,327,329,324,317,316,321,322],
     
    tool22Y:[532,532,532,536,542,545,542,537,537,541],

};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#b8175f';
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.refresh();
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.renderer.renderSession.roundPixels = true;

            game.scale.setResizeCallback(this.gameResized, this);

            game.load.image('loading', 'assets/prebar.png');
	    game.load.image('prelogo', 'assets/prebg_logo.png');
            game.load.image('barover', 'assets/barover.png');
            
                         game.load.image('Go','assets/Go.png');

           
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');

            this.prelogo.inputEnabled = true
            this.prelogo.input.useHandCursor = true;
            this.prelogo.events.onInputUp.add(this.openLink, this);
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',123,116,2);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);
             game.load.spritesheet('t_timer','assets/t_timer.png',160,160,60);
             game.load.spritesheet('arrow', 'assets/arrow.png',66,89,13);

            ///////////btns_assets
             
             for (i=1; i<=5; i++) {
             	
             game.load.image('btn'+i, 'assets/btns/btn'+i+'.png');

             }

            ///////////dressup_assets

             game.load.image('d_bg', 'assets/dressup/d_bg.jpg');

             game.load.image('d_head1', 'assets/dressup/d_head1.png');
             game.load.image('d_head2', 'assets/dressup/d_head2.png');
             game.load.image('d_head3', 'assets/dressup/d_head3.png');
             game.load.image('d_body', 'assets/dressup/d_body.png');
             game.load.image('d_panel', 'assets/dressup/d_panel.png');
             game.load.image('default_hair', 'assets/dressup/default_hair.png');
             game.load.image('d_backdress11', 'assets/dressup/d_backdress11.png');
             game.load.image('d_dress11', 'assets/dressup/d_dress11.png');
             game.load.image('d_shoe11', 'assets/dressup/d_shoe11.png');
             game.load.image('d_hair1', 'assets/dressup/d_hair1.png');
         

               for (i=1; i<=6; i++) {
             	
             game.load.image('d_backdress'+i, 'assets/dressup/d_backdress'+i+'.png');
             game.load.image('d_dress'+i, 'assets/dressup/d_dress'+i+'.png');

             if (i<=6) {

             game.load.image('d_earing'+i, 'assets/dressup/d_earing'+i+'.png');
             // game.load.image('d_hair'+i, 'assets/dressup/d_hair'+i+'.png');
             // game.load.image('d_bair'+i, 'assets/dressup/d_bair'+i+'.png');
             game.load.image('d_neckles'+i, 'assets/dressup/d_neckles'+i+'.png');
             game.load.image('d_shoe'+i, 'assets/dressup/d_shoe'+i+'.png');

             // game.load.image('h1crow1000'+i, 'assets/dressup/crown1/h1crow1000'+i+'.png');
             // game.load.image('h2crow1000'+i, 'assets/dressup/crown2/h2crow1000'+i+'.png');
             // game.load.image('h3crow1000'+i, 'assets/dressup/crown3/h3crow1000'+i+'.png');
             // game.load.image('h4crow1000'+i, 'assets/dressup/crown4/h4crow1000'+i+'.png');
             // game.load.image('h5crow1000'+i, 'assets/dressup/crown5/h5crow1000'+i+'.png');
             // game.load.image('h6crow1000'+i, 'assets/dressup/crown6/h6crow1000'+i+'.png');
             game.load.image('d1_crown'+i, 'assets/dressup/d1_crown'+i+'.png');

             game.load.image('icon'+i, 'assets/dressup/icon'+i+'.png');

            // if (i<=5) {

            //  game.load.image('d_shoe'+i, 'assets/dressup/d_shoe'+i+'.png');

            //  } 
          
             }

             }

////////////////////////////////////

  ///////////meakup1_assets

             game.load.image('meak_bg', 'assets/meakup1/meak_bg.jpg');

             game.load.image('color_box', 'assets/meakup1/color_box.png');
             game.load.image('color_btool', 'assets/meakup1/color_btool.png');
             game.load.image('face_powder', 'assets/meakup1/face_powder.png');
             game.load.image('face_ptool', 'assets/meakup1/face_ptool.png');
             game.load.image('mascara_btl', 'assets/meakup1/mascara_btl.png');
             game.load.image('mascara_btool', 'assets/meakup1/mascara_btool.png');

             game.load.image('meak_blus1', 'assets/meakup1/meak_blus1.png');
             game.load.image('meak_blus2', 'assets/meakup1/meak_blus2.png');

             game.load.image('meak_body', 'assets/meakup1/meak_body.png');
             game.load.image('meak_dress', 'assets/meakup1/meak_dress.png');
             game.load.image('meak_eyebrow0001', 'assets/meakup1/meak_eyebrow0001.png');
             game.load.image('meak_eyebrow0002', 'assets/meakup1/meak_eyebrow0002.png');
             game.load.image('meak_eyebrow0003', 'assets/meakup1/meak_eyebrow0003.png');

             game.load.image('meak_eyeshade0001', 'assets/meakup1/meak_eyeshade0001.png');
             game.load.image('meak_eyeshade0002', 'assets/meakup1/meak_eyeshade0002.png');

             game.load.image('meak_fp', 'assets/meakup1/meak_fp.png');
             game.load.image('meak_hair', 'assets/meakup1/meak_hair.png');
             game.load.image('meak_bhair', 'assets/meakup1/meak_bhair.png');
             game.load.image('meak_head', 'assets/meakup1/meak_head.png');
             game.load.image('meak_lens', 'assets/meakup1/meak_lens.png');
             game.load.image('meak_mascara0001', 'assets/meakup1/meak_mascara0001.png');
             game.load.image('meak_mascara0002', 'assets/meakup1/meak_mascara0002.png');
             game.load.image('meak_panel', 'assets/meakup1/meak_panel.png');
             game.load.image('meak_remover', 'assets/meakup1/meak_remover.png');
             game.load.image('meak_white', 'assets/meakup1/meak_white.png');
             game.load.image('spanch', 'assets/meakup1/spanch.png');

             game.load.image('bulash_p', 'assets/meakup1/bulash_p.png');
             game.load.image('meak_blush', 'assets/meakup1/meak_blush.png');
             game.load.image('meak_lipstick', 'assets/meakup1/meak_lipstick.png');
             game.load.image('meak_pencil', 'assets/meakup1/meak_pencil.png');

             game.load.image('towal1', 'assets/meakup1/towal1.png');
             game.load.image('towal2', 'assets/meakup1/towal2.png');
             game.load.image('meak_water1', 'assets/meakup1/meak_water1.png');

            game.load.spritesheet('shawer_amtn','assets/meakup1/shawer_amtn.png',146,125,8);


             for (i=1; i<=5; i++) {

             game.load.image('meak_lip'+i, 'assets/meakup1/meak_lip'+i+'.png');
            
             }

  ///////////meakup1/red_circle /_assets

             game.load.image('blus_red1', 'assets/meakup1/red_circle/blus_red1.png');
             game.load.image('blus_red2', 'assets/meakup1/red_circle/blus_red2.png');
             game.load.image('eye_red', 'assets/meakup1/red_circle/eye_red.png');
             game.load.image('eyebrow_red', 'assets/meakup1/red_circle/eyebrow_red.png');
             game.load.image('face_red', 'assets/meakup1/red_circle/face_red.png');
             game.load.image('lipstick_red', 'assets/meakup1/red_circle/lipstick_red.png');

//////////////intro_assets

             game.load.image('i_bg', 'assets/intro/i_bg.jpg');
             game.load.image('barbie_pto', 'assets/intro/barbie_pto.png');
             game.load.image('teresa_pto', 'assets/intro/teresa_pto.png');

             game.load.image('phone', 'assets/intro/phone.png');

             game.load.image('barbie_pto_pop10001', 'assets/intro/barbie_pto_pop10001.png');
             game.load.image('barbie_pto_pop10002', 'assets/intro/barbie_pto_pop10002.png');
             game.load.image('teresa_pop10001', 'assets/intro/teresa_pop10001.png');
             game.load.image('teresa_pop10002', 'assets/intro/teresa_pop10002.png');


        for (i =1; i<=6; i++) {

             game.load.image('barbiepop1000'+i, 'assets/intro/barbiepop1000'+i+'.png');
             game.load.image('kellypop1000'+i, 'assets/intro/kellypop1000'+i+'.png');
   
         }

////////////final_assets

             game.load.image('r_bg', 'assets/final/r_bg.jpg');

             game.load.image('barbie', 'assets/final/barbie.png');
             game.load.image('title', 'assets/final/title.png');
             game.load.image('ctoy', 'assets/final/ctoy.png');

             game.load.image('titlebg', 'assets/final/titlebg.png');


////////////surgery_assets

             game.load.image('sur_bg', 'assets/surgery/sur_bg.jpg');

             game.load.image('bandaid', 'assets/surgery/bandaid.png');
             game.load.image('bandplt', 'assets/surgery/bandplt.png');

             game.load.image('btts10001', 'assets/surgery/btts10001.png');
             game.load.image('btts10002', 'assets/surgery/btts10002.png');

             game.load.image('ice_cube', 'assets/surgery/ice_cube.png');
             game.load.image('iceplt', 'assets/surgery/iceplt.png');
             game.load.image('k_ral1', 'assets/surgery/k_ral1.png');
             game.load.image('k_ral2', 'assets/surgery/k_ral2.png');

             game.load.image('kirach1', 'assets/surgery/kirach1.png');
             game.load.image('kirach2', 'assets/surgery/kirach2.png');

             game.load.image('sur_eye1', 'assets/surgery/sur_eye1.png');
             game.load.image('sur_eye2', 'assets/surgery/sur_eye2.png');

             game.load.image('sur_eyebrow', 'assets/surgery/sur_eyebrow.png');
             game.load.image('sur_katti', 'assets/surgery/sur_katti.png');
             game.load.image('sur_lip1', 'assets/surgery/sur_lip1.png');
             game.load.image('sur_lip2', 'assets/surgery/sur_lip2.png');

             game.load.image('sur_tool10001', 'assets/surgery/sur_tool10001.png');
             game.load.image('sur_tool10002', 'assets/surgery/sur_tool10002.png');

             game.load.image('surbhair', 'assets/surgery/surbhair.png');
             game.load.image('surfhair', 'assets/surgery/surfhair.png');

             game.load.image('surbody', 'assets/surgery/surbody.png');
             game.load.image('surhand', 'assets/surgery/surhand.png');

             game.load.image('surhead', 'assets/surgery/surhead.png');
             game.load.image('cry', 'assets/surgery/cry.png');
             game.load.image('sur_round', 'assets/surgery/sur_round.png');

             game.load.spritesheet('btts_cream', 'assets/surgery/btts_cream.png',65,230,10);
             game.load.spritesheet('sur_toolcream', 'assets/surgery/sur_toolcream.png',136,219,9);
             game.load.spritesheet('usi_amtn', 'assets/surgery/usi_amtn.png',214,75,5);

////////////////jump_scean

             game.load.image('kelly_01', 'assets/jump_scean/kelly_01.png');
             game.load.image('kelly_02', 'assets/jump_scean/kelly_02.png');
             game.load.image('kelly_insury', 'assets/jump_scean/kelly_insury.png');

             game.load.spritesheet('jump1amtn', 'assets/jump_scean/jump1amtn.png',242,559,24);
             game.load.spritesheet('jump2amtn', 'assets/jump_scean/jump2amtn.png',243,557,15);
             game.load.spritesheet('jump3amtn', 'assets/jump_scean/jump3amtn.png',470,666,7);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

             for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }
               game.load.image('Tump_frame','assets/Tump_frame.png');
             
             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               this.progress.visible = false;
               game.load.onFileComplete.removeAll();
               //AAAAAA
               // game.state.start('final_screen');

            this.Go = game.add.sprite(game.world.width/2.05,game.world.height/1.65,'Go');
            this.Go.anchor.setTo(0.5);
            this.Go.scale.setTo(0);
            this.Go.inputEnabled = true;
            this.Go.input.useHandCursor = true;
            this.Go.events.onInputDown.add(function(){
                 if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               // Main.music.resume();
            };
               Main.music.play();

               game.state.start('title');


            },this);
               game.add.tween(this.Go.scale).to({x:1,y:1},800,Phaser.Easing.Bounce.Out,true); 

             
            }
   },

  openLink:function()
{
   YYGSDK.navigate("loading","logo");
},
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
      
        this.d_bg = game.add.sprite(0,0,'d_bg');

        this.barbie = game.add.sprite(185,400,'barbie');
        this.barbie.anchor.setTo(0.5);

   /////////////////////////////////////////////////////////////////////////////////////////////   

      // this.kelly_02=game.add.sprite(335,480,'kelly_02');
      // this.kelly_02.anchor.setTo(0.5);
      // this.kelly_02.scale.setTo(0.8);

   /////////////////////////////////////////////////////////////////////////////////////////////   


        this.kellygrp=game.add.group();
        this.kellygrp.scale.setTo(0.7);
        this.kellygrp.x=210;
        this.kellygrp.y=250;

   ///////////////////////////////////////////////////////////////////////////////////////////// 

        this.d_backdress1 = game.add.sprite(186,293,'d_backdress'+Main.d_array[1]);
        this.d_backdress1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_backdress1);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);


        this.d_shoe1 = game.add.sprite(186,300,'d_shoe'+Main.d_array[2]);
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe1);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=227;
        this.headgrp.y=270;

        this.d_head3 = game.add.sprite(170,130,'d_head3');
        // this.d_head3 = game.add.sprite(113,65,'d_head3');
        this.d_head3.anchor.setTo(0.5);
        this.kellygrp.add(this.d_head3);
        this.headgrp.add(this.d_head3);

        this.d_dress1 = game.add.sprite(186,293,'d_dress'+Main.d_array[1]);
        this.d_dress1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress1);


         this.d_neckles1 = game.add.sprite(203,321,'d_neckles'+Main.d_array[3]);
        this.d_neckles1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_neckles1);

        this.d_hair1 = game.add.sprite(180,139.6,'d_hair1');
        this.d_hair1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_hair1);
        this.headgrp.add(this.d_hair1);

      
        this.d_earing1 = game.add.sprite(179,332,'d_earing'+Main.d_array[4]);
        this.d_earing1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_earing1);
        this.headgrp.add(this.d_earing1);

        this.d_earing11 = game.add.sprite(85,332,'d_earing'+Main.d_array[4]);
        this.d_earing11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_earing11);
        this.headgrp.add(this.d_earing11);

        this.d1_crown1 = game.add.sprite(190,305,'d1_crown'+Main.d_array[5]);
        this.d1_crown1.anchor.setTo(0.5);
        this.kellygrp.add(this.d1_crown1);
        this.headgrp.add(this.d1_crown1);

     
   /////////////////////////////////////////////////////////////////////////////////////////////   

 
        this.title = game.add.sprite(252,680,'title');
        this.title.anchor.setTo(0.5);

        game.add.tween(this.title.scale).to({x:1.02,y:0.98},400,Phaser.Easing.Linear.Out,true,0,-1).yoyo(300,true);


   /////////////////////////////////////////////////////////////////////////////////////////////     
        
         this.morebtn = game.add.sprite(65,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(440,730,'btn3');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0.7);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("menu","logo");
},
moreLink:function(){
   YYGSDK.navigate("menu","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
   MyShowAD('intro');   
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){

      this.i_bg = game.add.sprite(0,0,'i_bg');

      this.phone = game.add.sprite(325,455,'phone');
      this.phone.anchor.setTo(0.5);

////////

     this.teresagrp1=game.add.group();

      this.teresa_pto = game.add.sprite(150,550,'teresa_pto');
      this.teresa_pto.anchor.setTo(0.5);
      this.teresa_pto.scale.setTo(0);
      this.teresagrp1.add(this.teresa_pto);

      this.teresa_pop10001 = game.add.sprite(298,550,'teresa_pop10001');
      this.teresa_pop10001.anchor.setTo(0.5);
      this.teresa_pop10001.scale.setTo(0);
      this.teresagrp1.add(this.teresa_pop10001);

////////////
     this.barbiegrp1=game.add.group();

      this.barbie_pto = game.add.sprite(350,550,'barbie_pto');
      this.barbie_pto.anchor.setTo(0.5);
      this.barbie_pto.scale.setTo(0);
      this.barbiegrp1.add(this.barbie_pto);

      this.barbie_pto_pop10001 = game.add.sprite(200,558,'barbie_pto_pop10001');
      this.barbie_pto_pop10001.anchor.setTo(0.5);
      this.barbie_pto_pop10001.scale.setTo(0);
      this.barbiegrp1.add(this.barbie_pto_pop10001);

///////////
     this.teresagrp2=game.add.group();

      this.teresa_pto1 = game.add.sprite(150,550,'teresa_pto');
      this.teresa_pto1.anchor.setTo(0.5);
      this.teresa_pto1.scale.setTo(0);
      this.teresagrp2.add(this.teresa_pto1);

      this.teresa_pop10002 = game.add.sprite(298,550,'teresa_pop10002');
      this.teresa_pop10002.anchor.setTo(0.5);
      this.teresa_pop10002.scale.setTo(0);
      this.teresagrp2.add(this.teresa_pop10002);

//////////
     this.barbiegrp2=game.add.group();

      this.barbie_pto1 = game.add.sprite(355,550,'barbie_pto');
      this.barbie_pto1.anchor.setTo(0.5);
      this.barbie_pto1.scale.setTo(0);
      this.barbiegrp2.add(this.barbie_pto1);

      this.barbie_pto_pop10002 = game.add.sprite(210,550,'barbie_pto_pop10002');
      this.barbie_pto_pop10002.anchor.setTo(0.5);
      this.barbie_pto_pop10002.scale.setTo(0);
      this.barbiegrp2.add(this.barbie_pto_pop10002);
//////////////////

        this.p_1 = game.add.graphics(87,182);
        this.p_1.beginFill(0x666666,0);
        this.p_1.drawRect(0,0,330,455);
        this.teresagrp1.mask=this.p_1;
//////////////////

        this.p_2 = game.add.graphics(87,182);
        this.p_2.beginFill(0x666666,0);
        this.p_2.drawRect(0,0,330,455);
        this.barbiegrp1.mask=this.p_2;
//////////////////

        this.p_3 = game.add.graphics(87,182);
        this.p_3.beginFill(0x666666,0);
        this.p_3.drawRect(0,0,330,455);
        this.teresagrp2.mask=this.p_3;
//////////////////

        this.p_4 = game.add.graphics(87,182);
        this.p_4.beginFill(0x666666,0);
        this.p_4.drawRect(0,0,330,455);
        this.barbiegrp2.mask=this.p_4;

//////////////////



         this.morebtn = game.add.sprite(60,735,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(440,735,'btn5');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.teresa_pto.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.teresa_pop10001.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.teresagrp1).to({y:-100},1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.barbie_pto.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true,200).onComplete.add(function(){
         game.add.tween(this.barbie_pto_pop10001.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.teresagrp1).to({y:-200},1500, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.barbiegrp1).to({y:-100},1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.teresa_pto1.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.teresa_pop10002.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.teresagrp1).to({y:-280},1500, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.barbiegrp1).to({y:-180},1500, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.teresagrp2).to({y:-80},1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700, Phaser.Easing.Quadratic.Out, true,300);

         // game.add.tween(this.barbie_pto.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true,200).onComplete.add(function(){
         // game.add.tween(this.barbie_pto_pop10001.scale).to({x:1,y:1},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         // game.add.tween(this.teresagrp1).to({y:-150},1200, Phaser.Easing.Quadratic.Out, true);
         // game.add.tween(this.barbiegrp1).to({y:-150},1200, Phaser.Easing.Quadratic.Out, true);
         // game.add.tween(this.teresagrp2).to({y:-150},1200, Phaser.Easing.Quadratic.Out, true);
         // game.add.tween(this.barbiegrp2).to({y:-60},1200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         // },this);
         // },this);
         // },this);

         },this);
         },this);
         },this);

         },this);
         },this);
         },this);

         },this);
         },this);
         },this);
         },this);
        }
      
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringPopUp3, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.playbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},
enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
    MyShowAD('first_pop');   
         });
   	
   },
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Main.first_pop = function(){}

Main.first_pop.prototype = {
    create:function(){

        this.r_bg = game.add.sprite(0,0,'r_bg');

        this.ctoy = game.add.sprite(60,224,'ctoy');
        this.ctoy.anchor.setTo(0.5);
        this.ctoy.scale.setTo(0.96);

        this.barbie = game.add.sprite(170,440,'barbie');
        this.barbie.anchor.setTo(0.5);

        // this.kelly_02 = game.add.sprite(350,500,'kelly_02');
        // this.kelly_02.anchor.setTo(0.5);
        // this.kelly_02.scale.setTo(0.9);


        this.kellygrp=game.add.group();
        this.kellygrp.x=200;
        this.kellygrp.scale.setTo(0.75);
        this.kellygrp.y=300;

        this.meak_bhair = game.add.sprite(180,145,'meak_bhair');
        this.meak_bhair.anchor.setTo(0.5);
        this.meak_bhair.scale.setTo(0.32);
        this.kellygrp.add(this.meak_bhair);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.d_shoe11 = game.add.sprite(186,300,'d_shoe11');
        this.d_shoe11.anchor.setTo(0.5);
        this.d_shoe11.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe11);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=225;
        this.headgrp.y=325;

        this.d_head1 = game.add.sprite(113,65,'d_head1');
        this.kellygrp.add(this.d_head1);
        this.headgrp.add(this.d_head1);

        this.d_dress11 = game.add.sprite(186,293,'d_dress11');
        this.d_dress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress11);
 
        this.meak_hair = game.add.sprite(180,140,'meak_hair');
        this.meak_hair.anchor.setTo(0.5);
        this.meak_hair.scale.setTo(0.44);
        this.kellygrp.add(this.meak_hair);
        this.headgrp.add(this.meak_hair);

////////////////////////     

        this.barbiepop10001 = game.add.sprite(300,130,'barbiepop10001');
        this.barbiepop10001.anchor.setTo(0.5);     
        // this.barbiepop10001.scale.setTo(0.8);     
        this.barbiepop10001.scale.setTo(0);

        this.kellypop10001 = game.add.sprite(336,220,'kellypop10001');
        this.kellypop10001.anchor.setTo(0.5);     
        // this.kellypop10001.scale.setTo(0.);          
        this.kellypop10001.scale.setTo(0);   


        
        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.kellypop10001.scale).to({x:0.9,y:0.9},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.kellypop10001.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
         game.add.tween(this.barbiepop10001.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.barbiepop10001.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
         game.add.tween(this.barbie).to({x:-300},1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700, Phaser.Easing.Quadratic.Out, true,200);
          
         },this);
         },this);
         },this);
         },this);
         },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('jump_scean1');
         });
   
   },
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////jump_scean1

Main.jump_scean1 = function(){}

Main.jump_scean1.prototype = {
    create:function(){

        this.r_bg = game.add.sprite(0,0,'r_bg');

        this.ctoy = game.add.sprite(60,224,'ctoy');
        this.ctoy.anchor.setTo(0.5);
        this.ctoy.scale.setTo(0.96);

        this.jump1amtn = game.add.sprite(130,445,'jump1amtn');
        this.jump1amtn.anchor.setTo(0.5);
        this.jump1amtn.scale.setTo(0.9);
        // this.jump1amtn.visible=false;
        this.jump1amtn.animations.frame=14;

        this.jump2amtn = game.add.sprite(130,430,'jump2amtn');
        this.jump2amtn.anchor.setTo(0.5);
        this.jump2amtn.scale.setTo(0.9);
        // this.jump2amtn.animations.frame=0;
        this.jump2amtn.visible=false;

        this.jump3amtn = game.add.sprite(205,450,'jump3amtn');
        this.jump3amtn.anchor.setTo(0.5);
        this.jump3amtn.scale.setTo(0.9);
        // this.jump3amtn.animations.frame=6;
        this.jump3amtn.visible=false;

        this.kelly_insury = game.add.sprite(113,428,'kelly_insury');
        this.kelly_insury.anchor.setTo(0.5);
        this.kelly_insury.scale.setTo(0.35);
        this.kelly_insury.rotation=-0.2;
        this.kelly_insury.visible=false;

        this.barbie = game.add.sprite(650,440,'barbie');
        // this.barbie = game.add.sprite(260,440,'barbie');
        this.barbie.anchor.setTo(0.5);
        this.barbie.scale.setTo(0.9);
        this.barbie.scale.x*=-1;

        this.barbiepop10002=game.add.sprite(390,180,'barbiepop10002');
        this.barbiepop10002.anchor.setTo(0.5);
        // this.barbiepop10002.scale.setTo(0.8);
        this.barbiepop10002.scale.setTo(0);

        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

          game.time.events.add(500,function(){
            this.jump1amtn.animations.add('jump1amtn',[14,15,16,17,18,19,20,21,22,23]);
            this.jump1amtn.animations.play('jump1amtn',8,false).onComplete.add(function(){
            this.jump1amtn.visible=false;

            this.jump2amtn.visible=true;
            this.jump2amtn.animations.add('jump2amtn',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
            this.jump2amtn.animations.play('jump2amtn',10,false).onComplete.add(function(){
            this.jump2amtn.visible=false;

            this.jump3amtn.visible=true;
            this.jump3amtn.animations.add('jump3amtn',[1,2,3,4,5,5,5,5,6]);
            this.jump3amtn.animations.play('jump3amtn',8,false).onComplete.add(function(){
            this.jump3amtn.animations.frame=6;
              this.kelly_insury.visible=true;
         game.add.tween(this.barbie).to({x:260},1200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.barbiepop10002.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.barbiepop10002.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){

         game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700, Phaser.Easing.Quadratic.Out, true,200);


          },this);
          },this);
          },this);
          },this);
          },this);
          },this);
          },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('surgery');
         });
   
   },
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////surgery


Main.surgery = function(){}

Main.surgery.prototype = {
    create:function(){

       this.nrdrag=false;
       this.srdrag=false;
       this.wrdrag=false;

        this.sur_bg = game.add.sprite(0,0,'sur_bg');

        this.surkellygrp=game.add.group();

        this.surbhair= game.add.sprite(210,230,'surbhair');
        this.surbhair.anchor.setTo(0.5);
        this.surkellygrp.add(this.surbhair);

        this.surbody= game.add.sprite(252,464,'surbody');
        this.surbody.anchor.setTo(0.5);
        this.surkellygrp.add(this.surbody);

        this.surhead= game.add.sprite(219,216,'surhead');
        this.surhead.anchor.setTo(0.5);
        this.surkellygrp.add(this.surhead);

        this.sur_eyebrow= game.add.sprite(212,202,'sur_eyebrow');
        this.sur_eyebrow.anchor.setTo(0.5);
        this.surkellygrp.add(this.sur_eyebrow);

        this.sur_eye1= game.add.sprite(190,216,'sur_eye1');
        this.sur_eye1.anchor.setTo(0.5);
        this.surkellygrp.add(this.sur_eye1);

        this.sur_eye2= game.add.sprite(237,216,'sur_eye2');
        this.sur_eye2.anchor.setTo(0.5);
        this.surkellygrp.add(this.sur_eye2);

        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.5);
        // this.mcir.drawRect(0,0,504,800);
       
        this.cry1= game.add.sprite(200,230,'cry');
        this.cry1.anchor.setTo(0.5);
        this.surkellygrp.add(this.cry1);

        this.cry2= game.add.sprite(225,229.4,'cry');
        this.cry2.anchor.setTo(0.5);
        this.surkellygrp.add(this.cry2);

        this.sur_lip2= game.add.sprite(215,250,'sur_lip2');
        this.sur_lip2.anchor.setTo(0.5);
        this.sur_lip2.visible=false;
        this.surkellygrp.add(this.sur_lip2);

        this.sur_lip1= game.add.sprite(215,244,'sur_lip1');
        this.sur_lip1.anchor.setTo(0.5);
        this.surkellygrp.add(this.sur_lip1);

        this.surfhair= game.add.sprite(208,222,'surfhair');
        this.surfhair.anchor.setTo(0.5);
        this.surkellygrp.add(this.surfhair);

        this.kirach2= game.add.sprite(240,195,'kirach2');
        this.kirach2.anchor.setTo(0.5);
        this.kirach2.scale.setTo(0.5);
        this.surkellygrp.add(this.kirach2);

        this.kirach22= game.add.sprite(157,330,'kirach2');
        this.kirach22.anchor.setTo(0.5);
        this.surkellygrp.add(this.kirach22);

        this.kirach23= game.add.sprite(260,530,'kirach2');
        this.kirach23.anchor.setTo(0.5);
        this.surkellygrp.add(this.kirach23);

        this.sur_katti= game.add.sprite(327,494,'sur_katti');
        this.sur_katti.anchor.setTo(0.5);
        this.surkellygrp.add(this.sur_katti);

        this.kirach1= game.add.sprite(322,540,'kirach1');
        this.kirach1.anchor.setTo(0.5);
        this.surkellygrp.add(this.kirach1);

        this.k_ral1= game.add.sprite(160,370,'k_ral1');
        this.k_ral1.anchor.setTo(0.5);
        this.k_ral1.scale.setTo(0.7);
        this.surkellygrp.add(this.k_ral1);

        this.k_ral11= game.add.sprite(260,570,'k_ral1');
        this.k_ral11.anchor.setTo(0.5);
        this.k_ral11.scale.setTo(0.9);
        this.surkellygrp.add(this.k_ral11);
       
        this.k_ral2= game.add.sprite(315,580,'k_ral2');
        this.k_ral2.anchor.setTo(0.5);
        this.k_ral2.rotation=1.4;
        this.surkellygrp.add(this.k_ral2);

        this.surhand= game.add.sprite(275,318,'surhand');
        this.surhand.anchor.setTo(0.5);
        this.surkellygrp.add(this.surhand);

  //////////////////////////////////////////////////////////////////////////////////////////////      

        this.meak_panel1= game.add.sprite(252,740,'meak_panel');
        this.meak_panel1.anchor.setTo(0.5);
        this.meak_panel1.scale.setTo(0.9);

        this.iceplt= game.add.sprite(90,690,'iceplt');
        this.iceplt.anchor.setTo(0.5);
        // this.iceplt.inputEnabled=true;
        // this.iceplt.input.useHandCursor=true;
        this.iceplt.events.onInputDown.add(function(){
        this.iceplt.inputEnabled=false;
        this.arrow1.visible=false;
        game.world.bringToTop(this.ice_cube);
        this.nrdrag=true;
        this.sur_round1.visible=true;

        },this);

        this.ice_cube= game.add.sprite(90,690,'ice_cube');
        this.ice_cube.anchor.setTo(0.5);

        this.hitGroup14 = game.add.group();
          for(var i=0; i<=Main.tool14X.length-1; i++)
              {
          this["hitCircle_n"+i] = game.add.graphics(Main.tool14X[i],Main.tool14Y[i]);
          this["hitCircle_n"+i].beginFill(0x000000,0);
          this["hitCircle_n"+i].drawCircle(0,0,10);
          this["hitCircle_n"+i].id = i;
          this.hitGroup14.add(this["hitCircle_n"+i]);
          game.physics.arcade.enable([this["hitCircle_n"+i]]);
          this["hitCircle_n"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe14 = game.add.group();
          // this.circle14 = game.add.graphics(0,0);
          // this.circle14.beginFill(0x000000,0);
          // this.circleGroupe14.add(this.circle14);
          // this.eyebrow10002.mask = this.circle14;

          this.cragCircla14 = game.add.graphics(0,0);
          this.cragCircla14.beginFill(0x000000, 0);
          this.cragCircla14.drawCircle(0,0,10);
          this.cragCircla14.endFill();

          this.hitSpritea14_cnt = 0;

          game.physics.arcade.enable([this.cragCircla14]);  
          this.cragCircla14.body.collideWorldBounds = true;
          this.cragCircla14.body.onCollide = new Phaser.Signal();
          this.cragCircla14.body.onCollide.add(this.hitSprite14, this);


////////////////////////////////////


        this.sur_tool10001= game.add.sprite(190,700,'sur_tool10001');
        this.sur_tool10001.anchor.setTo(0.5);
        this.sur_tool10001.scale.setTo(0.85);
        this.sur_tool10001.rotation=1.6;
        // this.sur_tool10001.inputEnabled=true;
        // this.sur_tool10001.input.useHandCursor=true;
        this.sur_tool10001.events.onInputDown.add(function(){
         this.arrow2.visible=false;
         this.arrow3.visible=true;
        this.sur_tool10001.inputEnabled=false;
        game.world.bringToTop(this.sur_tool10001);
        this.ordrag=true;
        this.sur_toolcream.inputEnabled=true;
        this.sur_toolcream.input.useHandCursor=true;
        this.sur_toolcream.input.pixelperfactClick=true;
        this.sur_toolcream.input.pixelperfactOver=true;

        },this);

        this.sur_toolcream= game.add.sprite(290,630,'sur_toolcream');
        this.sur_toolcream.anchor.setTo(0.5);
        // this.sur_toolcream.inputEnabled=true;
        // this.sur_toolcream.input.useHandCursor=true;
        // this.sur_toolcream.input.pixelperfactClick=true;
        // this.sur_toolcream.input.pixelperfactOver=true;
        this.sur_toolcream.events.onInputDown.add(function(){
         this.arrow3.visible=false;
        this.sur_toolcream.inputEnabled=false;
        this.sur_tool10001.visible=false;
        this.sur_toolcream.animations.add('sur_toolcream',[0,1,2,3,4,5,6,,7,8]);
        this.sur_toolcream.animations.play('sur_toolcream',10,false).onComplete.add(function(){
        this.sur_toolcream.animations.frame=8;
        this.sur_tool10001.loadTexture('sur_tool10002');
        this.sur_tool10001.visible=true;
        this.cragCircla15.visible=true;
        this.sur_round2.visible=true;

        },this);
        },this);

         this.hitGroup15 = game.add.group();
          for(var i=0; i<=Main.tool15X.length-1; i++)
              {
          this["hitCircle_o"+i] = game.add.graphics(Main.tool15X[i],Main.tool15Y[i]);
          this["hitCircle_o"+i].beginFill(0x000000,0);
          this["hitCircle_o"+i].drawCircle(0,0,10);
          this["hitCircle_o"+i].id = i;
          this.hitGroup15.add(this["hitCircle_o"+i]);
          game.physics.arcade.enable([this["hitCircle_o"+i]]);
          this["hitCircle_o"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe15 = game.add.group();
          // this.circle15 = game.add.graphics(0,0);
          // this.circle15.beginFill(0x000000,0);
          // this.circleGroupe15.add(this.circle15);
          // this.eyebrow10002.mask = this.circle15;

          this.cragCircla15 = game.add.graphics(0,0);
          this.cragCircla15.beginFill(0x000000, 0);
          this.cragCircla15.drawCircle(0,0,10);
          this.cragCircla15.endFill();
          this.cragCircla15.visible=false;

          this.hitSpritea15_cnt = 0;

          game.physics.arcade.enable([this.cragCircla15]);  
          this.cragCircla15.body.collideWorldBounds = true;
          this.cragCircla15.body.onCollide = new Phaser.Signal();
          this.cragCircla15.body.onCollide.add(this.hitSprite15, this);

        /////////////
          this.hitGroup16 = game.add.group();
          for(var i=0; i<=Main.tool16X.length-1; i++)
              {
          this["hitCircle_p"+i] = game.add.graphics(Main.tool16X[i],Main.tool16Y[i]);
          this["hitCircle_p"+i].beginFill(0x000000,0);
          this["hitCircle_p"+i].drawCircle(0,0,10);
          this["hitCircle_p"+i].id = i;
          this.hitGroup16.add(this["hitCircle_p"+i]);
          game.physics.arcade.enable([this["hitCircle_p"+i]]);
          this["hitCircle_p"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe16 = game.add.group();
          // this.circle16 = game.add.graphics(0,0);
          // this.circle16.beginFill(0x000000,0);
          // this.circleGroupe16.add(this.circle16);
          // this.eyebrow10002.mask = this.circle16;

          this.cragCircla16 = game.add.graphics(0,0);
          this.cragCircla16.beginFill(0x000000, 0);
          this.cragCircla16.drawCircle(0,0,10);
          this.cragCircla16.endFill();
          this.cragCircla16.visible=false;

          this.hitSpritea16_cnt = 0;

          game.physics.arcade.enable([this.cragCircla16]);  
          this.cragCircla16.body.collideWorldBounds = true;
          this.cragCircla16.body.onCollide = new Phaser.Signal();
          this.cragCircla16.body.onCollide.add(this.hitSprite16, this);

      ///////////////

        this.hitGroup17 = game.add.group();
          for(var i=0; i<=Main.tool17X.length-1; i++)
              {
          this["hitCircle_q"+i] = game.add.graphics(Main.tool17X[i],Main.tool17Y[i]);
          this["hitCircle_q"+i].beginFill(0x000000,0);
          this["hitCircle_q"+i].drawCircle(0,0,10);
          this["hitCircle_q"+i].id = i;
          this.hitGroup17.add(this["hitCircle_q"+i]);
          game.physics.arcade.enable([this["hitCircle_q"+i]]);
          this["hitCircle_q"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe17 = game.add.group();
          // this.circle17 = game.add.graphics(0,0);
          // this.circle17.beginFill(0x000000,0);
          // this.circleGroupe17.add(this.circle17);
          // this.eyebrow10002.mask = this.circle17;

          this.cragCircla17 = game.add.graphics(0,0);
          this.cragCircla17.beginFill(0x000000, 0);
          this.cragCircla17.drawCircle(0,0,10);
          this.cragCircla17.endFill();
          this.cragCircla17.visible=false;

          this.hitSpritea17_cnt = 0;

          game.physics.arcade.enable([this.cragCircla17]);  
          this.cragCircla17.body.collideWorldBounds = true;
          this.cragCircla17.body.onCollide = new Phaser.Signal();
          this.cragCircla17.body.onCollide.add(this.hitSprite17, this);

////////////
          this.hitGroup18 = game.add.group();
          for(var i=0; i<=Main.tool18X.length-1; i++)
              {
          this["hitCircle_r"+i] = game.add.graphics(Main.tool18X[i],Main.tool18Y[i]);
          this["hitCircle_r"+i].beginFill(0x000000,0);
          this["hitCircle_r"+i].drawCircle(0,0,10);
          this["hitCircle_r"+i].id = i;
          this.hitGroup18.add(this["hitCircle_r"+i]);
          game.physics.arcade.enable([this["hitCircle_r"+i]]);
          this["hitCircle_r"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe18 = game.add.group();
          // this.circle18 = game.add.graphics(0,0);
          // this.circle18.beginFill(0x000000,0);
          // this.circleGroupe18.add(this.circle18);
          // this.eyebrow10002.mask = this.circle18;

          this.cragCircla18 = game.add.graphics(0,0);
          this.cragCircla18.beginFill(0x000000, 0);
          this.cragCircla18.drawCircle(0,0,10);
          this.cragCircla18.endFill();
          this.cragCircla18.visible=false;

          this.hitSpritea18_cnt = 0;

          game.physics.arcade.enable([this.cragCircla18]);  
          this.cragCircla18.body.collideWorldBounds = true;
          this.cragCircla18.body.onCollide = new Phaser.Signal();
          this.cragCircla18.body.onCollide.add(this.hitSprite18, this);



////////////////////////////////////


        this.btts10001= game.add.sprite(380,700,'btts10001');
        this.btts10001.anchor.setTo(0.5);
        this.btts10001.scale.setTo(0.9);
        this.btts10001.rotation=1.9;
        // this.btts10001.inputEnabled=true;
        // this.btts10001.input.useHandCursor=true;
        this.btts10001.events.onInputDown.add(function(){
        this.btts10001.inputEnabled=false;
         this.arrow4.visible=false;
         this.arrow5.visible=true;
        game.world.bringToTop(this.btts10001);
        this.srdrag=true;
       
        this.btts_cream.inputEnabled=true;
        this.btts_cream.input.useHandCursor=true;
        this.btts_cream.input.pixelperfactClick=true;
        this.btts_cream.input.pixelperfactOver=true;

        },this);

        this.btts_cream= game.add.sprite(440,650,'btts_cream');
        this.btts_cream.anchor.setTo(0.5);
        this.btts_cream.scale.setTo(0.95);
        // this.btts_cream.inputEnabled=true;
        // this.btts_cream.input.useHandCursor=true;
        // this.btts_cream.input.pixelperfactClick=true;
        // this.btts_cream.input.pixelperfactOver=true;
        this.btts_cream.events.onInputDown.add(function(){
         this.arrow5.visible=false;
        this.btts10001.visible=false;
        this.btts_cream.inputEnabled=false;
        this.btts_cream.animations.add('btts_cream',[2,3,4,5,6,7,8,9]);
        this.btts_cream.animations.play('btts_cream',10,false).onComplete.add(function(){
        this.btts_cream.animations.frame=9;
        this.btts10001.visible=true;
        this.btts10001.loadTexture('btts10002');
        this.cragCircla19.visible=true;
          this.sur_round2.visible=true;

        },this);
        },this);

          this.hitGroup19 = game.add.group();
          for(var i=0; i<=Main.tool19X.length-1; i++)
              {
          this["hitCircle_s"+i] = game.add.graphics(Main.tool19X[i],Main.tool19Y[i]);
          this["hitCircle_s"+i].beginFill(0x000000,0);
          this["hitCircle_s"+i].drawCircle(0,0,10);
          this["hitCircle_s"+i].id = i;
          this.hitGroup19.add(this["hitCircle_s"+i]);
          game.physics.arcade.enable([this["hitCircle_s"+i]]);
          this["hitCircle_s"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe19 = game.add.group();
          // this.circle19 = game.add.graphics(0,0);
          // this.circle19.beginFill(0x000000,0);
          // this.circleGroupe19.add(this.circle19);
          // this.eyebrow10002.mask = this.circle19;

          this.cragCircla19 = game.add.graphics(0,0);
          this.cragCircla19.beginFill(0x000000, 0);
          this.cragCircla19.drawCircle(0,0,10);
          this.cragCircla19.endFill();
          this.cragCircla19.visible=false;

          this.hitSpritea19_cnt = 0;

          game.physics.arcade.enable([this.cragCircla19]);  
          this.cragCircla19.body.collideWorldBounds = true;
          this.cragCircla19.body.onCollide = new Phaser.Signal();
          this.cragCircla19.body.onCollide.add(this.hitSprite19, this);

    /////////

         this.hitGroup20 = game.add.group();
          for(var i=0; i<=Main.tool20X.length-1; i++)
              {
          this["hitCircle_t"+i] = game.add.graphics(Main.tool20X[i],Main.tool20Y[i]);
          this["hitCircle_t"+i].beginFill(0x000000,0);
          this["hitCircle_t"+i].drawCircle(0,0,10);
          this["hitCircle_t"+i].id = i;
          this.hitGroup20.add(this["hitCircle_t"+i]);
          game.physics.arcade.enable([this["hitCircle_t"+i]]);
          this["hitCircle_t"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe20 = game.add.group();
          // this.circle20 = game.add.graphics(0,0);
          // this.circle20.beginFill(0x000000,0);
          // this.circleGroupe20.add(this.circle20);
          // this.eyebrow10002.mask = this.circle20;

          this.cragCircla20 = game.add.graphics(0,0);
          this.cragCircla20.beginFill(0x000000, 0);
          this.cragCircla20.drawCircle(0,0,10);
          this.cragCircla20.endFill();
          this.cragCircla20.visible=false;

          this.hitSpritea20_cnt = 0;

          game.physics.arcade.enable([this.cragCircla20]);  
          this.cragCircla20.body.collideWorldBounds = true;
          this.cragCircla20.body.onCollide = new Phaser.Signal();
          this.cragCircla20.body.onCollide.add(this.hitSprite20, this);

     /////////////

         this.hitGroup21 = game.add.group();
          for(var i=0; i<=Main.tool21X.length-1; i++)
              {
          this["hitCircle_u"+i] = game.add.graphics(Main.tool21X[i],Main.tool21Y[i]);
          this["hitCircle_u"+i].beginFill(0x000000,0);
          this["hitCircle_u"+i].drawCircle(0,0,10);
          this["hitCircle_u"+i].id = i;
          this.hitGroup21.add(this["hitCircle_u"+i]);
          game.physics.arcade.enable([this["hitCircle_u"+i]]);
          this["hitCircle_u"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe21 = game.add.group();
          // this.circle21 = game.add.graphics(0,0);
          // this.circle21.beginFill(0x000000,0);
          // this.circleGroupe21.add(this.circle21);
          // this.eyebrow10002.mask = this.circle21;

          this.cragCircla21 = game.add.graphics(0,0);
          this.cragCircla21.beginFill(0x000000, 0);
          this.cragCircla21.drawCircle(0,0,10);
          this.cragCircla21.endFill();
          this.cragCircla21.visible=false;

          this.hitSpritea21_cnt = 0;

          game.physics.arcade.enable([this.cragCircla21]);  
          this.cragCircla21.body.collideWorldBounds = true;
          this.cragCircla21.body.onCollide = new Phaser.Signal();
          this.cragCircla21.body.onCollide.add(this.hitSprite21, this);

     ///////////
        this.hitGroup22 = game.add.group();
          for(var i=0; i<=Main.tool22X.length-1; i++)
              {
          this["hitCircle_v"+i] = game.add.graphics(Main.tool22X[i],Main.tool22Y[i]);
          this["hitCircle_v"+i].beginFill(0x000000,0);
          this["hitCircle_v"+i].drawCircle(0,0,10);
          this["hitCircle_v"+i].id = i;
          this.hitGroup22.add(this["hitCircle_v"+i]);
          game.physics.arcade.enable([this["hitCircle_v"+i]]);
          this["hitCircle_v"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe22 = game.add.group();
          // this.circle22 = game.add.graphics(0,0);
          // this.circle22.beginFill(0x000000,0);
          // this.circleGroupe22.add(this.circle22);
          // this.eyebrow10002.mask = this.circle22;

          this.cragCircla22 = game.add.graphics(0,0);
          this.cragCircla22.beginFill(0x000000, 0);
          this.cragCircla22.drawCircle(0,0,10);
          this.cragCircla22.endFill();
          this.cragCircla22.visible=false;

          this.hitSpritea22_cnt = 0;

          game.physics.arcade.enable([this.cragCircla22]);  
          this.cragCircla22.body.collideWorldBounds = true;
          this.cragCircla22.body.onCollide = new Phaser.Signal();
          this.cragCircla22.body.onCollide.add(this.hitSprite22, this);

  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

      this.t_timer= game.add.sprite(-200,140,'t_timer');
      // this.t_timer= game.add.sprite(80,140,'t_timer');
      this.t_timer.anchor.setTo(0.5);
      this.t_timer.scale.setTo(0.8);


      this.bandaid1= game.add.sprite(161,360,'bandaid');
      this.bandaid1.anchor.setTo(0.5);
      this.bandaid1.scale.setTo(0.2);
      this.bandaid1.rotation=1.6;
      this.bandaid1.visible=false;

      this.bandaid2= game.add.sprite(263,570,'bandaid');
      this.bandaid2.anchor.setTo(0.5);
      this.bandaid2.scale.setTo(0.2);
      this.bandaid2.rotation=1.6;
      this.bandaid2.visible=false;

      this.bandaid3= game.add.sprite(313,580,'bandaid');
      this.bandaid3.anchor.setTo(0.5);
      this.bandaid3.scale.setTo(0.2);
      this.bandaid3.rotation=1.9;
      this.bandaid3.visible=false;

     
        this.bandplt= game.add.sprite(-600,700,'bandplt');
        // this.bandplt= game.add.sprite(150,700,'bandplt');
        this.bandplt.anchor.setTo(0.5);
        this.bandplt.scale.setTo(0.9);
        // this.bandplt.inputEnabled=true;
        // this.bandplt.input.useHandCursor=true;
        this.bandplt.events.onInputDown.add(function(){
         this.arrow6.visible=false;
        this.bandplt.inputEnabled=false;
        game.world.bringToTop(this.bandaid);
        this.wrdrag=true;
        this.bandaid.visible=true;

          this.sur_round6.visible=true;
        this.b_1.inputEnabled=true;
        this.b_1.input.useHandCursor=true;

        },this);
//////////////////////////////

        this.bandaid= game.add.sprite(150,700,'bandaid');
        this.bandaid.anchor.setTo(0.5);
        this.bandaid.scale.setTo(0.28);
        this.bandaid.rotation=0.2;
        this.bandaid.visible=false;


        this.b_1 = game.add.graphics(140,348);
        this.b_1.beginFill(0x666666,0);
        this.b_1.drawRect(0,0,40,40);
        // this.b_1.inputEnabled=true;
        // this.b_1.input.useHandCursor=true;
        this.b_1.events.onInputDown.add(function(){
          this.sur_round6.visible=false;

        this.b_1.inputEnabled=false;
          this.bandaid1.visible=true;

          this.sur_round7.visible=true;
        this.b_2.inputEnabled=true;
        this.b_2.input.useHandCursor=true;

        },this);
//////////////////////////////

        this.b_2 = game.add.graphics(240,548);
        this.b_2.beginFill(0x666666,0);
        this.b_2.drawRect(0,0,40,40);
        // this.b_2.inputEnabled=true;
        // this.b_2.input.useHandCursor=true;
        this.b_2.events.onInputDown.add(function(){
          this.sur_round7.visible=false;
        this.b_2.inputEnabled=false;
         this.bandaid2.visible=true;

          this.sur_round8.visible=true;
        this.b_3.inputEnabled=true;
        this.b_3.input.useHandCursor=true;

        },this);

//////////////////////////////
        this.b_3 = game.add.graphics(293,560);
        this.b_3.beginFill(0x666666,0);
        this.b_3.drawRect(0,0,40,40);
        // this.b_3.inputEnabled=true;
        // this.b_3.input.useHandCursor=true;
        this.b_3.events.onInputDown.add(function(){
          this.sur_round8.visible=false;
        this.b_3.inputEnabled=false;
        this.bandaid3.visible=true;
        this.wrdrag=false;
        this.bandaid.visible=false;
        this.k_ral1.visible=false;
        this.k_ral11.visible=false;
        this.k_ral2.visible=false;
       game.add.tween(this.t_timer).to({x:80},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.t_timer.animations.add('t_timer');
        this.t_timer.animations.play('t_timer',10,false).onComplete.add(function(){
       game.add.tween(this.t_timer).to({x:-200},1000,Phaser.Easing.Quadratic.Out,true,100).onComplete.add(function(){

       game.add.tween(this.bandaid1).to({alpha:0},600,Phaser.Easing.Quadratic.Out,true);
       game.add.tween(this.bandaid2).to({alpha:0},600,Phaser.Easing.Quadratic.Out,true);
       game.add.tween(this.bandaid3).to({alpha:0},600,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         this.arrow7.visible=true;
        this.usi_amtn.inputEnabled=true;
        this.usi_amtn.input.useHandCursor=true;
        this.usi_amtn.input.enableDrag();

       },this);
       },this);
       },this);
       },this);
       },this);


    /////////////////////////////////////////////////////////////////////////////////////////////////////////    

        this.usi_amtn1= game.add.sprite(100,360,'usi_amtn');
        this.usi_amtn1.anchor.setTo(0.5);
        this.usi_amtn1.scale.setTo(0.7);
        this.usi_amtn1.scale.x*=-1;
        this.usi_amtn1.rotation=-0.6;
        this.usi_amtn1.visible=false;

        this.usi_amtn= game.add.sprite(-600,740,'usi_amtn');
        // this.usi_amtn= game.add.sprite(290,740,'usi_amtn');
        this.usi_amtn.anchor.setTo(0.5);
        this.usi_amtn.scale.setTo(0.85);
        // this.usi_amtn.inputEnabled=true;
        // this.usi_amtn.input.useHandCursor=true;
        // this.usi_amtn.input.enableDrag();
        this.usi_amtn.events.onInputDown.add(function(){
        game.world.bringToTop(this.usi_amtn);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.musicButton);
        game.world.bringToTop(this.logoVar);
         this.arrow7.visible=false;
        this.sur_round9.visible=true;


        },this);
        this.usi_amtn.events.onInputUp.add(function(){
      if((game.input.activePointer.x>150 && game.input.activePointer.x<350 && game.input.activePointer.y>300  && game.input.activePointer.y<500)){
        this.sur_round9.visible=false;
        this.usi_amtn.inputEnabled=false;
        this.usi_amtn.visible=false;
        this.usi_amtn1.visible=true;
        this.usi_amtn1.animations.add('usi_amtn1',[0,1,2,3,4]);
        this.usi_amtn1.animations.play('usi_amtn1',8,false).onComplete.add(function(){
        this.usi_amtn.animations.frame=4;
        this.usi_amtn.x=100;
        this.usi_amtn.y=360;
        this.usi_amtn1.visible=false;
        this.usi_amtn.visible=true;
        game.add.tween(this.usi_amtn).to({x:290,y:740},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.sur_lip1.visible=false;
        this.cry1.visible=false;
        this.cry2.visible=false;
        this.sur_lip2.visible=true;
        game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700,Phaser.Easing.Quadratic.Out,true,300);

        },this);
        },this);

        }

       else{
       game.add.tween(this.usi_amtn).to({x:290,y:740},700,Phaser.Easing.Quadratic.Out,true);
         this.arrow7.visible=true;
         this.sur_round9.visible=false;

        }
        },this);


  ///////////////////////////////////////////////////////////////////////////////

   this.sur_round1=game.add.sprite(330,496,'sur_round');
   this.sur_round1.anchor.setTo(0.5);
   this.sur_round1.scale.setTo(0.7);
   this.sur_round1.visible=false;

   this.sur_round2=game.add.sprite(240,195,'sur_round');
   this.sur_round2.anchor.setTo(0.5);
   this.sur_round2.scale.setTo(0.6);
   this.sur_round2.visible=false;

   this.sur_round3=game.add.sprite(160,328,'sur_round');
   this.sur_round3.anchor.setTo(0.5);
   this.sur_round3.scale.setTo(0.65);
   this.sur_round3.visible=false;

   this.sur_round4=game.add.sprite(260,530,'sur_round');
   this.sur_round4.anchor.setTo(0.5);
   this.sur_round4.scale.setTo(0.65);
   this.sur_round4.visible=false;

   this.sur_round5=game.add.sprite(320,536,'sur_round');
   this.sur_round5.anchor.setTo(0.5);
   this.sur_round5.scale.setTo(0.65);
   this.sur_round5.visible=false;

   this.sur_round6=game.add.sprite(160,365,'sur_round');
   this.sur_round6.anchor.setTo(0.5);
   this.sur_round6.scale.setTo(0.65);
   this.sur_round6.visible=false;

   this.sur_round7=game.add.sprite(260,565,'sur_round');
   this.sur_round7.anchor.setTo(0.5);
   this.sur_round7.scale.setTo(0.65);
   this.sur_round7.visible=false;
  
   this.sur_round8=game.add.sprite(314,580,'sur_round');
   this.sur_round8.anchor.setTo(0.5);
   this.sur_round8.scale.setTo(0.65);
   this.sur_round8.visible=false;

   this.sur_round9=game.add.sprite(160,360,'sur_round');
   this.sur_round9.anchor.setTo(0.5);
   this.sur_round9.scale.setTo(0.9);
   this.sur_round9.visible=false;


  ///////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////

       // this.mcnt1=0;
       //  this.mcir = game.add.graphics(0,0);
       //  this.mcir.beginFill(0x666666,0.1);
       //  this.mcir.drawRect(0,0,504,800);
       //  this.mcir.inputEnabled=true;
       //  this.mcir.events.onInputDown.add(function(){
       //    this.mcnt1++;
       //    this['xcnt'+this.mcnt1]=game.input.activePointer.x;
       //    this['ycnt'+this.mcnt1]=game.input.activePointer.y;
       //  this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
       //  this.mcir.beginFill(0x000000,0.5);
       //  this.mcir.drawCircle(0,0,10);
       //  console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
       //  // console.log(this['ycnt'+this.mcnt1]);
       //  },this);

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        
         this.morebtn = game.add.sprite(70,560,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(435,560,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
  ///////////////////////////////////////////////////////////////////////////////////////////// 

  this.arrowgp = game.add.group();

    ////////////////    1   2   3   4   5   6   7                    8   9  10   11  12  13 14  15  16   17  18  19  20  21
        
         var arro2x = [95, 190,290,380,440,160,286,                 360,125,250,350,370,380,450,250,40, 300 ,44 ,75 ,280,385];
         var arro2y = [630,590,610,610,580,590,683,                 340,300,170,100,200,320,440,230,440,295 ,462,442,620,295];

         for(i=1;i<=35;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          }
         if(i==2){
          this['arrow'+i].visible=false;
          }
           if(i==3){
          this['arrow'+i].visible=false;
          }
           if(i==4){
          this['arrow'+i].visible=false;
          }
             if(i==5){
          this['arrow'+i].visible=false;
          }
       ///////////
          if(i==6){
          this['arrow'+i].visible=false;
          } 

           if(i==7){
          this['arrow'+i].visible=false;
          }   
           
          this.arrowgp.add(this['arrow'+i]);
          
         }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////      
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

           this.arrow1.visible=true;
           this.iceplt.inputEnabled=true;
           this.iceplt.input.useHandCursor=true;
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },

///////////////////////////////////// hitsprite ///////////////////////////////////////////////////

          hitSprite14:function(sprite1, sprite2){
          // console.log(this.hitSpritea14_cnt);
          sprite2.kill();
          this.hitSpritea14_cnt ++


          game.add.tween(this.sur_katti).to({alpha:0.5},1800,Phaser.Easing.Quadratic.Out,true);
            
          if (this.hitSpritea14_cnt >=23) { 

      game.add.tween(this.sur_katti).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.sur_round1.visible=false;
      this.sur_katti.visible=false;
      this.nrdrag=false;
      game.add.tween(this.ice_cube).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         this.arrow2.visible=true;
         this.sur_tool10001.inputEnabled=true;
         this.sur_tool10001.input.useHandCursor=true;

      },this);
      },this);
   
        }
            // this.circle14.drawCircle(Main.tool14X[sprite2.id],Main.tool14Y[sprite2.id],10);

        }, 
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
 hitSprite15:function(sprite1, sprite2){
          // console.log(this.hitSpritea15_cnt);
          sprite2.kill();
          this.hitSpritea15_cnt ++
        this.sur_round2.visible=false;
            
          if (this.hitSpritea15_cnt >=5) {  
          game.add.tween(this.kirach2).to({alpha:0.5},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

          this.sur_round3.visible=true;
          this.cragCircla16.visible=true;


        },this);
        }
            // this.circle15.drawCircle(Main.tool15X[sprite2.id],Main.tool15Y[sprite2.id],10);

        }, 

///////////////////////////////////// hitsprite ///////////////////////////////////////////////////

      hitSprite16:function(sprite1, sprite2){
          // console.log(this.hitSpritea16_cnt);
          sprite2.kill();
          this.hitSpritea16_cnt ++
          this.sur_round3.visible=false;
            
          if (this.hitSpritea16_cnt >=12) { 
         game.add.tween(this.kirach22).to({alpha:0.5},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sur_round4.visible=true;
          this.cragCircla17.visible=true;

        },this); 
   
        }
            // this.circle16.drawCircle(Main.tool16X[sprite2.id],Main.tool16Y[sprite2.id],10);

        }, 

///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
 hitSprite17:function(sprite1, sprite2){
          // console.log(this.hitSpritea17_cnt);
          sprite2.kill();
          this.hitSpritea17_cnt ++
          this.sur_round4.visible=false;
            
          if (this.hitSpritea17_cnt >=14) {  
          game.add.tween(this.kirach23).to({alpha:0.5},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sur_round5.visible=true;
          this.cragCircla18.visible=true;


        },this);
        }
            // this.circle17.drawCircle(Main.tool17X[sprite2.id],Main.tool17Y[sprite2.id],10);

        }, 
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
   hitSprite18:function(sprite1, sprite2){
          // console.log(this.hitSpritea18_cnt);
          sprite2.kill();
          this.hitSpritea18_cnt ++
          this.sur_round5.visible=false;
            
          if (this.hitSpritea18_cnt >=10) {
        game.add.tween(this.kirach1).to({alpha:0.5},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.ordrag=false;
        game.add.tween(this.sur_tool10001).to({x:190,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         this.arrow4.visible=true;
           this.btts10001.inputEnabled=true;
           this.btts10001.input.useHandCursor=true;

        },this);  
        },this);  
   
        }
            // this.circle18.drawCircle(Main.tool18X[sprite2.id],Main.tool18Y[sprite2.id],10);

        }, 
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
 hitSprite19:function(sprite1, sprite2){
          // console.log(this.hitSpritea15_cnt);
          sprite2.kill();
          this.hitSpritea19_cnt ++
            
          this.sur_round2.visible=false;
          if (this.hitSpritea19_cnt >=5) {  
          game.add.tween(this.kirach2).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        
          this.sur_round3.visible=true;
          this.cragCircla20.visible=true;

        },this);
        }
            // this.circle15.drawCircle(Main.tool15X[sprite2.id],Main.tool15Y[sprite2.id],10);

        }, 
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
hitSprite20:function(sprite1, sprite2){
          // console.log(this.hitSpritea20_cnt);
          sprite2.kill();
          this.hitSpritea20_cnt ++
          this.sur_round3.visible=false;
            
          if (this.hitSpritea20_cnt >=12) {  
         game.add.tween(this.kirach22).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sur_round4.visible=true;
          this.cragCircla21.visible=true;

        },this); 
   
        }
            // this.circle20.drawCircle(Main.tool20X[sprite2.id],Main.tool20Y[sprite2.id],10);

        }, 

///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
   hitSprite21:function(sprite1, sprite2){
          // console.log(this.hitSpritea21_cnt);
          sprite2.kill();
          this.hitSpritea21_cnt ++
          this.sur_round4.visible=false;
            
          if (this.hitSpritea21_cnt >=14) { 
            game.add.tween(this.kirach23).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.sur_round5.visible=true;
          this.cragCircla22.visible=true;

        },this); 
   
        }
            // this.circle21.drawCircle(Main.tool21X[sprite2.id],Main.tool21Y[sprite2.id],10);

        }, 

///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
 hitSprite22:function(sprite1, sprite2){
          // console.log(this.hitSpritea22_cnt);
          sprite2.kill();
          this.hitSpritea22_cnt ++
          this.sur_round5.visible=false;
            
          if (this.hitSpritea22_cnt >=10) {  
              game.add.tween(this.kirach1).to({alpha:0},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          this.srdrag=false;
        game.add.tween(this.btts10001).to({x:380,y:700},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

                 game.add.tween(this.iceplt).to({y:900},1000,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.sur_tool10001).to({y:900},1000,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.sur_toolcream).to({y:900},1000,Phaser.Easing.Quadratic.Out,true);
              game.add.tween(this.btts10001).to({y:900},1000,Phaser.Easing.Quadratic.Out,true);
             game.add.tween(this.btts_cream).to({y:900},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

             game.add.tween(this.bandplt).to({x:150},1000,Phaser.Easing.Quadratic.Out,true);
             game.add.tween(this.usi_amtn).to({x:290},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

                     this.arrow6.visible=true;
                     this.bandplt.inputEnabled=true;
                     this.bandplt.input.useHandCursor=true;

        },this);  
        },this);  
        },this);  
        },this);  
   
        }
            // this.circle22.drawCircle(Main.tool22X[sprite2.id],Main.tool22Y[sprite2.id],10);

        }, 


///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////
///////////////////////////////////// hitsprite ///////////////////////////////////////////////////

changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

 update:function(){

// console.log(game.input.activePointer.x+':::::'+game.input.activePointer.y);

//////////////////////////// drags /////////////////////////////////////////////////////////////////// 

        if(this.nrdrag) {

              this.ice_cube.x = game.input.activePointer.x;
              this.ice_cube.y = game.input.activePointer.y; 

              this.cragCircla14.x = this.game.input.activePointer.x;
              this.cragCircla14.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool14X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla14, this['hitCircle_n'+i]);
                }
            }
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
 if(this.ordrag) {

              this.sur_tool10001.x = game.input.activePointer.x;
              this.sur_tool10001.y = game.input.activePointer.y+50;

              this.cragCircla15.x = this.game.input.activePointer.x;
              this.cragCircla15.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool15X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla15, this['hitCircle_o'+i]);
                }
            }
////////
        this.cragCircla16.x = this.game.input.activePointer.x;
        this.cragCircla16.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool16X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla16, this['hitCircle_p'+i]);
                }
///////
              this.cragCircla17.x = this.game.input.activePointer.x;
              this.cragCircla17.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool17X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla17, this['hitCircle_q'+i]);
                }
/////////
             this.cragCircla18.x = this.game.input.activePointer.x;
              this.cragCircla18.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool18X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla18, this['hitCircle_r'+i]);
                }

//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 

  if(this.srdrag) {

      this.btts10001.x = game.input.activePointer.x;
      this.btts10001.y = game.input.activePointer.y+50;

      this.cragCircla19.x = this.game.input.activePointer.x;
      this.cragCircla19.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool19X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla19, this['hitCircle_s'+i]);
                }
            }
    ////////////////
              this.cragCircla20.x = this.game.input.activePointer.x;
              this.cragCircla20.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool20X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla20, this['hitCircle_t'+i]);
                } 
    ////////////////
            this.cragCircla21.x = this.game.input.activePointer.x;
            this.cragCircla21.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool21X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla21, this['hitCircle_u'+i]);
                }
    ////////////////
      this.cragCircla22.x = this.game.input.activePointer.x;
              this.cragCircla22.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool22X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla22, this['hitCircle_v'+i]);
                }
    ////////////////
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 

  if(this.wrdrag) {

    this.bandaid.x = game.input.activePointer.x;
    this.bandaid.y = game.input.activePointer.y;

  }

//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 
//////////////////////////// drags /////////////////////////////////////////////////////////////////// 


},


openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('surgry_pop');
         });
   
   },
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////find_objectpop

// Main.find_objectpop = function(){}

// Main.find_objectpop.prototype = {
//     create:function(){

//         this.sur_bg = game.add.sprite(0,0,'sur_bg');

//         this.barbie = game.add.sprite(170,440,'barbie');
//         this.barbie.anchor.setTo(0.5);

//         this.kelly_02 = game.add.sprite(340,490,'kelly_02');
//         this.kelly_02.anchor.setTo(0.5);
//         this.kelly_02.scale.setTo(0.55);

//         this.barbiepop10003 = game.add.sprite(300,130,'barbiepop10003');
//         this.barbiepop10003.anchor.setTo(0.5);     
//         // this.barbiepop10003.scale.setTo(0.8);     
//         this.barbiepop10003.scale.setTo(0);

//         this.kellypop10006 = game.add.sprite(336,220,'kellypop10006');
//         this.kellypop10006.anchor.setTo(0.5);     
//         // this.kellypop10006.scale.setTo(0.8);          
//         this.kellypop10006.scale.setTo(0);          
        
        
//          this.morebtn = game.add.sprite(85,730,'btn4');
//          this.morebtn.anchor.setTo(0.5);
//          this.morebtn.scale.setTo(0.7);
//          this.morebtn.inputEnabled = true;
//          this.morebtn.input.useHandCursor = true;
//          this.morebtn.events.onInputUp.add(this.moreLink, this);
//          this.morebtn.events.onInputOver.add(this.btnOver, this);
//          this.morebtn.events.onInputOut.add(this.btnOut, this);

//          this.playbtn = game.add.sprite(430,730,'btn2');
//          this.playbtn.anchor.setTo(0.5);
//          this.playbtn.scale.setTo(0);
//          this.playbtn.inputEnabled = true;
//          this.playbtn.input.useHandCursor = true;
//          this.playbtn.events.onInputUp.add(this.enterRoom, this);
//          this.playbtn.events.onInputOver.add(this.btnOver, this);
//          this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
//       if (Main.shutterOn[0]) {
//          this.shutter = game.add.sprite(0,0,'titlebg');
//          game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          game.add.tween(this.barbiepop10003.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          game.add.tween(this.barbiepop10003.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
//          game.add.tween(this.kellypop10006.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//          game.add.tween(this.kellypop10006.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
//          game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700, Phaser.Easing.Quadratic.Out, true,300);
          
//          },this);
//          },this);
//          },this);
//          },this);
//          },this);
//         }
        
        
//          this.logoVar = game.add.sprite(5, 5, 'logo');
//          this.logoVar.scale.setTo(0.8);
//          this.logoVar.inputEnabled = true
//          this.logoVar.input.useHandCursor = true;
//          this.logoVar.events.onInputUp.add(this.openLink, this);
         
//          this.musicButton = game.add.sprite(424,5,"soundicon");
//          this.musicButton.scale.setTo(0.7);
//          this.musicButton.inputEnabled = true
//          this.musicButton.input.useHandCursor = true;
//          this.musicButton.events.onInputUp.add(this.changemusic, this);
//          if (!game.sound.mute) {
//                this.musicButton.frame = 0;
//             }else{
//                this.musicButton.frame = 1;
//             }
//         },
// changemusic:function()
//          {
//             if (!game.sound.mute) {
//                this.musicButton.frame = 1;
//                game.sound.mute = true;
//             }else{
//                this.musicButton.frame = 0;
//                game.sound.mute = false;
//             };
//          },
// openLink:function()
// {
//    YYGSDK.navigate("game","logo");
// },
// moreLink:function(){
//    YYGSDK.navigate("game","morebutton");
// },
// btnOver:function(items){
//   items.scale.setTo(items.scale.x+0.05);
//       effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
//    effectVar.anchor.setTo(0.5);
//    effectVar.scale.setTo(2);
//    effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
//    effectVar.animations.play('glitter', 30, false);
//    },
// btnOut:function(items){
//      items.scale.setTo(items.scale.x-0.05);

//    },
// removeGlitter:function(evt){
//       evt.kill(); 
//       },
//       enterRoom:function(){
//    game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
//    MyShowAD('elsaScreen');
//          });
   
//    },
// }




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////surgry_pop

Main.surgry_pop = function(){}

Main.surgry_pop.prototype = {
    create:function(){

        this.sur_bg = game.add.sprite(0,0,'sur_bg');

        this.barbie = game.add.sprite(170,440,'barbie');
        this.barbie.anchor.setTo(0.5);

        // this.kelly_02 = game.add.sprite(340,515,'kelly_02');
        // this.kelly_02.anchor.setTo(0.5);
        // this.kelly_02.scale.setTo(0.9);


        this.kellygrp=game.add.group();
        this.kellygrp.x=200;
        this.kellygrp.scale.setTo(0.75);
        this.kellygrp.y=300;

        this.meak_bhair = game.add.sprite(180,145,'meak_bhair');
        this.meak_bhair.anchor.setTo(0.5);
        this.meak_bhair.scale.setTo(0.32);
        this.kellygrp.add(this.meak_bhair);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.d_shoe11 = game.add.sprite(186,300,'d_shoe11');
        this.d_shoe11.anchor.setTo(0.5);
        this.d_shoe11.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe11);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=225;
        this.headgrp.y=325;

        this.d_head1 = game.add.sprite(113,65,'d_head1');
        this.kellygrp.add(this.d_head1);
        this.headgrp.add(this.d_head1);

        this.d_dress11 = game.add.sprite(186,293,'d_dress11');
        this.d_dress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress11);
 
        this.meak_hair = game.add.sprite(180,140,'meak_hair');
        this.meak_hair.anchor.setTo(0.5);
        this.meak_hair.scale.setTo(0.44);
        this.kellygrp.add(this.meak_hair);
        this.headgrp.add(this.meak_hair);





/////////////////////

        this.barbiepop10003 = game.add.sprite(300,130,'barbiepop10003');
        this.barbiepop10003.anchor.setTo(0.5);     
        // this.barbiepop10003.scale.setTo(0.8);     
        this.barbiepop10003.scale.setTo(0);

        this.kellypop10006 = game.add.sprite(336,220,'kellypop10006');
        this.kellypop10006.anchor.setTo(0.5);     
        // this.kellypop10006.scale.setTo(0.8);          
        this.kellypop10006.scale.setTo(0);          
        
        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.7);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.barbiepop10003.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.barbiepop10003.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
         game.add.tween(this.kellypop10006.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.kellypop10006.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
         game.add.tween(this.playbtn.scale).to({x:0.7,y:0.7},700, Phaser.Easing.Quadratic.Out, true,300);
          
         },this);
         },this);
         },this);
         },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('meakup1');
         });
   
   },
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////meakup1

Main.meakup1 = function(){}

Main.meakup1.prototype = {
    create:function(){

        this.meak_bg = game.add.sprite(0,0,'meak_bg');

        this.makeup1group=game.add.group();
        this.makeup1group.scale.setTo(0.8);
        this.makeup1group.x=60;
        this.makeup1group.y=130;

        this.meak_bhair = game.add.sprite(278,292,'meak_bhair');
        this.meak_bhair.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_bhair);

        this.meak_body = game.add.sprite(250,850,'meak_body');
        this.meak_body.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_body);

        this.meak_dress = game.add.sprite(260,887,'meak_dress');
        this.meak_dress.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_dress);

        this.meak_head = game.add.sprite(255,269,'meak_head');
        this.meak_head.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_head);

        this.meak_fp = game.add.sprite(255,270,'meak_fp');
        this.meak_fp.anchor.setTo(0.5);
        this.meak_fp.visible=false
        this.makeup1group.add(this.meak_fp);

        this.meak_eyeshade0001 = game.add.sprite(244,278,'meak_eyeshade0001');
        this.meak_eyeshade0001 .anchor.setTo(0.5);
        this.meak_eyeshade0001 .visible=false;
        this.makeup1group.add(this.meak_eyeshade0001);

        this.meak_white = game.add.sprite(241,272,'meak_white');
        this.meak_white.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_white);

        this.meak_lens = game.add.sprite(237,271,'meak_lens');
        this.meak_lens.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_lens);

        this.meak_mascara0001 = game.add.sprite(241,267,'meak_mascara0001');
        this.meak_mascara0001.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_mascara0001);

        this.meak_eyebrow0002 = game.add.sprite(230,232,'meak_eyebrow0002');
        this.meak_eyebrow0002.anchor.setTo(0.5);
        this.meak_eyebrow0002.visible=false;
        this.makeup1group.add(this.meak_eyebrow0002);

        this.meak_eyebrow0001 = game.add.sprite(230,232,'meak_eyebrow0001');
        this.meak_eyebrow0001.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_eyebrow0001);

        this.meak_blus1 = game.add.sprite(251,343,'meak_blus1');
        this.meak_blus1.anchor.setTo(0.5);
        this.meak_blus1.visible=false;
        this.makeup1group.add(this.meak_blus1);

        this.meak_lip1 = game.add.sprite(242,360,'meak_lip1');
        this.meak_lip1.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_lip1);

        this.meak_lip5 = game.add.sprite(242,356,'meak_lip5');
        this.meak_lip5.anchor.setTo(0.5);
        this.meak_lip5.visible=false;
        this.makeup1group.add(this.meak_lip5);

        this.face_red = game.add.sprite(250,280,'face_red');
        this.face_red.anchor.setTo(0.5);
        this.face_red.visible=false
        this.makeup1group.add(this.face_red);

        this.eye_red = game.add.sprite(240,260,'eye_red');
        this.eye_red.anchor.setTo(0.5);
        this.eye_red.rotation=-0.03;
        this.eye_red .visible=false;
        this.makeup1group.add(this.eye_red);

        this.eyebrow_red = game.add.sprite(227,225,'eyebrow_red');
        this.eyebrow_red.anchor.setTo(0.5);
        this.eyebrow_red.visible=false;
        this.makeup1group.add(this.eyebrow_red);

        this.lipstick_red = game.add.sprite(242,368,'lipstick_red');
        this.lipstick_red.anchor.setTo(0.5);
        this.lipstick_red.rotation=-0.02;
        this.lipstick_red.visible=false;
        this.makeup1group.add(this.lipstick_red);

        this.blus_red1 = game.add.sprite(323,348,'blus_red1');
        this.blus_red1.anchor.setTo(0.5);
        this.blus_red1.rotation=-0.4;
        this.blus_red1.visible=false;
        this.makeup1group.add(this.blus_red1);

        this.blus_red2 = game.add.sprite(180,348,'blus_red2');
        this.blus_red2.anchor.setTo(0.5);
        this.blus_red2.rotation=0.3;
        this.blus_red2.visible=false;
        this.makeup1group.add(this.blus_red2);
       
        this.meak_hair = game.add.sprite(278,292,'meak_hair');
         this.meak_hair.anchor.setTo(0.5);
        this.makeup1group.add(this.meak_hair);



    /////////////////////////    

        this.meak_panel = game.add.sprite(250,700,'meak_panel');
        this.meak_panel.anchor.setTo(0.5);

        this.face_powder = game.add.sprite(60,650,'face_powder');
        this.face_powder.anchor.setTo(0.5);
        this.face_powder.scale.setTo(0.8);

        this.face_ptool = game.add.sprite(77,670,'face_ptool');
        this.face_ptool.anchor.setTo(0.5);
        // this.face_ptool.scale.setTo(0.7);
        // this.face_ptool.rotation=-1.5;
        // this.face_ptool.inputEnabled=true;
        // this.face_ptool.input.useHandCursor=true;
        this.face_ptool.events.onInputDown.add(function(){
        this.arrow1.visible=false;
        game.world.bringToTop(this.face_ptool);
        this.ardrag=true;
        this.face_ptool.inputEnabled=false;
         this.face_red.visible=true;

        },this);

        this.hitGroup1 = game.add.group();
          for(var i=0; i<=Main.tool1X.length-1; i++)
              {
          this["hitCircle_a"+i] = game.add.graphics(Main.tool1X[i],Main.tool1Y[i]);
          this["hitCircle_a"+i].beginFill(0x000000,0);
          this["hitCircle_a"+i].drawCircle(0,0,40);
          this["hitCircle_a"+i].id = i;
          this.hitGroup1.add(this["hitCircle_a"+i]);
          game.physics.arcade.enable([this["hitCircle_a"+i]]);
          this["hitCircle_a"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroup1 = game.add.group();
          this.circle1 = game.add.graphics(0,0);
          this.circle1.beginFill(0x000000,0);
          this.circleGroup1.add(this.circle1);
          this.meak_fp.mask = this.circle1;

          this.cragCircla1 = game.add.graphics(0,0);
          this.cragCircla1.beginFill(0x000000, 0);
          this.cragCircla1.drawCircle(0,0,40);
          this.cragCircla1.endFill();

          this.hitSpritea1_cnt = 0;

          game.physics.arcade.enable([this.cragCircla1]);  
          this.cragCircla1.body.collideWorldBounds = true;
          this.cragCircla1.body.onCollide = new Phaser.Signal();
          this.cragCircla1.body.onCollide.add(this.hitSprite1, this);



//////////////////////////////////////


        this.color_box = game.add.sprite(185,650,'color_box');
        this.color_box.anchor.setTo(0.5);
        this.color_box.scale.setTo(0.75);
        // this.color_box.inputEnabled=true;
        // this.color_box.input.useHandCursor=true;
        this.color_box.events.onInputDown.add(function(){
          this.arrow2.visible=false;
        this.color_btool.rotation=-1;
        this.brdrag=true;
       game.world.bringToTop(this.color_btool);
        this.color_box.inputEnabled=false;
        this.eye_red.visible=true;

        },this);

        this.color_btool = game.add.sprite(190,670,'color_btool');
        this.color_btool.anchor.setTo(0.5);
        this.color_btool.scale.setTo(0.75);

        this.hitGroup2 = game.add.group();
          for(var i=0; i<=Main.tool2X.length-1; i++)
              {
          this["hitCircle_b"+i] = game.add.graphics(Main.tool2X[i],Main.tool2Y[i]);
          this["hitCircle_b"+i].beginFill(0x000000,0);
          this["hitCircle_b"+i].drawCircle(0,0,20);
          this["hitCircle_b"+i].id = i;
          this.hitGroup2.add(this["hitCircle_b"+i]);
          game.physics.arcade.enable([this["hitCircle_b"+i]]);
          this["hitCircle_b"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroup2 = game.add.group();
          this.circle2 = game.add.graphics(0,0);
          this.circle2.beginFill(0x000000,0);
          this.circleGroup2.add(this.circle2);
          this.meak_eyeshade0001.mask = this.circle2;

          this.cragCircla2 = game.add.graphics(0,0);
          this.cragCircla2.beginFill(0x000000, 0);
          this.cragCircla2.drawCircle(0,0,20);
          this.cragCircla2.endFill();

          this.hitSpritea2_cnt = 0;

          game.physics.arcade.enable([this.cragCircla2]);  
          this.cragCircla2.body.collideWorldBounds = true;
          this.cragCircla2.body.onCollide = new Phaser.Signal();
          this.cragCircla2.body.onCollide.add(this.hitSprite2, this);

///////////////////////////////////////////////

        this.bulash_p = game.add.sprite(300,650,'bulash_p');
        this.bulash_p.anchor.setTo(0.5);
        this.bulash_p.scale.setTo(0.8);

        this.meak_blush = game.add.sprite(340,670,'meak_blush');
        this.meak_blush.anchor.setTo(0.5);
        this.meak_blush.scale.setTo(0.4);
        // this.meak_blush.inputEnabled=true;
        // this.meak_blush.input.useHandCursor=true;
        this.meak_blush.events.onInputDown.add(function(){
         	  this.arrow3.visible=false;
        this.crdrag=true;
         	  game.world.bringToTop(this.meak_blush);
        this.meak_blush.inputEnabled=false;
        this.blus_red1.visible=true;
        this.blus_red2.visible=true;

        },this);

        this.hitGroup3 = game.add.group();
          for(var i=0; i<=Main.tool3X.length-1; i++)
              {
          this["hitCircle_c"+i] = game.add.graphics(Main.tool3X[i],Main.tool3Y[i]);
          this["hitCircle_c"+i].beginFill(0x000000,0);
          this["hitCircle_c"+i].drawCircle(0,0,30);
          this["hitCircle_c"+i].id = i;
          this.hitGroup3.add(this["hitCircle_c"+i]);
          game.physics.arcade.enable([this["hitCircle_c"+i]]);
          this["hitCircle_c"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroup3 = game.add.group();
          this.circle3 = game.add.graphics(0,0);
          this.circle3.beginFill(0x000000,0);
          this.circleGroup3.add(this.circle3);
          this.meak_blus1.mask = this.circle3;

          this.cragCircla3 = game.add.graphics(0,0);
          this.cragCircla3.beginFill(0x000000, 0);
          this.cragCircla3.drawCircle(0,0,30);
          this.cragCircla3.endFill();

          this.hitSpritea3_cnt = 0;

          game.physics.arcade.enable([this.cragCircla3]);  
          this.cragCircla3.body.collideWorldBounds = true;
          this.cragCircla3.body.onCollide = new Phaser.Signal();
          this.cragCircla3.body.onCollide.add(this.hitSprite3, this);

  //////////////////////////////////////////////////////////////////////////////////////        

        this.meak_pencil = game.add.sprite(400,660,'meak_pencil');
        this.meak_pencil.anchor.setTo(0.5);
        this.meak_pencil.scale.setTo(0.35);
        // this.meak_pencil.inputEnabled=true;
        // this.meak_pencil.input.useHandCursor=true;
        this.meak_pencil.events.onInputDown.add(function(){
         	  this.arrow4.visible=false;
        this.drdrag=true;
        this.meak_pencil.inputEnabled=false;
         	  game.world.bringToTop(this.meak_pencil);
        this.eyebrow_red.visible=true;

        },this);

         this.hitGroup4 = game.add.group();
          for(var i=0; i<=Main.tool4X.length-1; i++)
              {
          this["hitCircle_d"+i] = game.add.graphics(Main.tool4X[i],Main.tool4Y[i]);
          this["hitCircle_d"+i].beginFill(0x000000,0);
          this["hitCircle_d"+i].drawCircle(0,0,20);
          this["hitCircle_d"+i].id = i;
          this.hitGroup4.add(this["hitCircle_d"+i]);
          game.physics.arcade.enable([this["hitCircle_d"+i]]);
          this["hitCircle_d"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroup4 = game.add.group();
          this.circle4 = game.add.graphics(0,0);
          this.circle4.beginFill(0x000000,0);
          this.circleGroup4.add(this.circle4);
          this.meak_eyebrow0002.mask = this.circle4;

          this.cragCircla4 = game.add.graphics(0,0);
          this.cragCircla4.beginFill(0x000000, 0);
          this.cragCircla4.drawCircle(0,0,20);
          this.cragCircla4.endFill();

          this.hitSpritea4_cnt = 0;

          game.physics.arcade.enable([this.cragCircla4]);  
          this.cragCircla4.body.collideWorldBounds = true;
          this.cragCircla4.body.onCollide = new Phaser.Signal();
          this.cragCircla4.body.onCollide.add(this.hitSprite4, this);

///////////////////////////////////////////////////////////////////////

        this.meak_lipstick = game.add.sprite(450,660,'meak_lipstick');
        this.meak_lipstick.anchor.setTo(0.5);
        this.meak_lipstick.scale.setTo(0.45);
        // this.meak_lipstick.inputEnabled=true;
        // this.meak_lipstick.input.useHandCursor=true;
        this.meak_lipstick.events.onInputDown.add(function(){
         	  this.arrow5.visible=false;
        this.erdrag=true;
        this.meak_lipstick.inputEnabled=false;
        game.world.bringToTop(this.meak_lipstick);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.logoVar);
        game.world.bringToTop(this.musicButton);
        this.lipstick_red.visible=true;

        },this);

        this.hitGroup5 = game.add.group();
          for(var i=0; i<=Main.tool5X.length-1; i++)
              {
          this["hitCircle_e"+i] = game.add.graphics(Main.tool5X[i],Main.tool5Y[i]);
          this["hitCircle_e"+i].beginFill(0x000000,0);
          this["hitCircle_e"+i].drawCircle(0,0,30);
          this["hitCircle_e"+i].id = i;
          this.hitGroup5.add(this["hitCircle_e"+i]);
          game.physics.arcade.enable([this["hitCircle_e"+i]]);
          this["hitCircle_e"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe = game.add.group();
          this.circle5 = game.add.graphics(0,0);
          this.circle5.beginFill(0x000000,0);
          this.circleGroupe.add(this.circle5);
          this.meak_lip5.mask = this.circle5;

          this.cragCircla5 = game.add.graphics(0,0);
          this.cragCircla5.beginFill(0x000000, 0);
          this.cragCircla5.drawCircle(0,0,30);
          this.cragCircla5.endFill();

          this.hitSpritea5_cnt = 0;

          game.physics.arcade.enable([this.cragCircla5]);  
          this.cragCircla5.body.collideWorldBounds = true;
          this.cragCircla5.body.onCollide = new Phaser.Signal();
          this.cragCircla5.body.onCollide.add(this.hitSprite5, this);

    /////////////////////////red_cicle   
   ////////////////////// ///////////////// ///////////////////// /////////////////////////////  

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,40);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // // console.log(this['ycnt'+this.mcnt1]);
        // },this);

   ////////////////////// ///////////////// ///////////////////// /////////////////////////////   
   ////////////////////// ///////////////// ///////////////////// ///////////////////////////// 

         this.morebtn = game.add.sprite(85,500,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,500,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
  ///////////////////////////////////////////////////////////////////////////////////////////////////

    this.arrowgp = game.add.group();

    ////////////////     1  2   3   4   5            6   7   8   9  10   11  12  13 14  15  16   17  18  19  20  21
        
         var arro2x = [80, 180,340,400,450,         160,150,360,125,250,350,370,380,450,250,40, 300 ,44 ,75 ,280,385];
         var arro2y = [570,580,590,550,560,         350,210,340,300,170,100,200,320,440,230,440,295 ,462,442,620,295];

         for(i=1;i<=35;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          }
         if(i==2){
          this['arrow'+i].visible=false;
          }
           if(i==3){
          this['arrow'+i].visible=false;
          }
           if(i==4){
          this['arrow'+i].visible=false;
          }
             if(i==5){
          this['arrow'+i].visible=false;
          }
           
          this.arrowgp.add(this['arrow'+i]);
          
         }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////      
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	  this.arrow1.visible=true;
         	  this.face_ptool.inputEnabled=true;
              this.face_ptool.input.useHandCursor=true;
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
////////////////////////// hitsprite ////////////////////////////////////////////////////////////

   hitSprite1:function(sprite1, sprite2){
          // console.log(this.hitSpritea1_cnt);
          sprite2.kill();
          this.hitSpritea1_cnt ++
         this.face_red.visible=false;

          this.meak_fp.visible=true;
            
          if (this.hitSpritea1_cnt >=45) {  
          // if (this.hitSpritea1_cnt >=50) {  
          	this.ardrag=false;
         game.add.tween(this.face_ptool).to({x:77,y:670},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         	this.arrow2.visible=true;
         	this.color_box.inputEnabled=true;
        this.color_box.input.useHandCursor=true;
  
         },this);
		    }
            this.circle1.drawCircle(Main.tool1X[sprite2.id],Main.tool1Y[sprite2.id],40);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
  hitSprite2:function(sprite1, sprite2){
          // console.log(this.hitSpritea2_cnt);
          sprite2.kill();
          this.hitSpritea2_cnt ++
          this.meak_eyeshade0001.visible=true;
        this.eye_red.visible=false;
            
          if (this.hitSpritea2_cnt >=28) { 
          	this.brdrag=false;
          	this.color_btool.rotation=0;
           game.add.tween(this.color_btool).to({x:190,y:670},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         	this.arrow3.visible=true;
           	 this.meak_blush.inputEnabled=true;
            this.meak_blush.input.useHandCursor=true;
  
         },this); 
   
		    }
            this.circle2.drawCircle(Main.tool2X[sprite2.id],Main.tool2Y[sprite2.id],20);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
hitSprite3:function(sprite1, sprite2){
          // console.log(this.hitSpritea3_cnt);
          sprite2.kill();
          this.hitSpritea3_cnt ++
          this.blus_red1.visible=false;
          this.blus_red2.visible=false;

          this.meak_blus1.visible=true;
            
          if (this.hitSpritea3_cnt >=25) {
          this.crdrag=false;  
          	 game.add.tween(this.meak_blush).to({x:340,y:670},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         	this.arrow4.visible=true;
          	 	this.meak_pencil.inputEnabled=true;
        this.meak_pencil.input.useHandCursor=true;
  
         },this); 
   
		    }
            this.circle3.drawCircle(Main.tool3X[sprite2.id],Main.tool3Y[sprite2.id],30);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
 hitSprite4:function(sprite1, sprite2){
          // console.log(this.hitSpritea4_cnt);
          sprite2.kill();
          this.hitSpritea4_cnt ++
        this.eyebrow_red.visible=false;
          this.meak_eyebrow0002.visible=true;
            
          if (this.hitSpritea4_cnt >=19) {  
          this.meak_eyebrow0001.visible=false;
          	  this.drdrag=false;  
          	 game.add.tween(this.meak_pencil).to({x:400,y:660},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

         	this.arrow5.visible=true;
          	 	this.meak_lipstick.inputEnabled=true;
                 this.meak_lipstick.input.useHandCursor=true;
  
         },this); 
   
		    }
            this.circle4.drawCircle(Main.tool4X[sprite2.id],Main.tool4Y[sprite2.id],20);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
  hitSprite5:function(sprite1, sprite2){
          // console.log(this.hitSpritea5_cnt);
          sprite2.kill();
          this.hitSpritea5_cnt ++
      
        this.lipstick_red.visible=false;
          this.meak_lip5.visible=true;

          if (this.hitSpritea5_cnt >=14) {  
          // this.meak_lip1.visible=false;
          	  this.erdrag=false;
           game.add.tween(this.meak_lipstick).to({x:450,y:660},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){

           game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},700,Phaser.Easing.Quadratic.Out,true);
  
            },this); 
   
		    }
            this.circle5.drawCircle(Main.tool5X[sprite2.id],Main.tool5Y[sprite2.id],30);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////

 update:function(){

// console.log(game.input.activePointer.x+':::::'+game.input.activePointer.y);
	
///////////////////// drag /////////////////////////////////////////////////////
 if(this.ardrag) {

              this.face_ptool.x = game.input.activePointer.x;
              this.face_ptool.y = game.input.activePointer.y+50;

              this.cragCircla1.x = this.game.input.activePointer.x;
              this.cragCircla1.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool1X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla1, this['hitCircle_a'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
    if(this.brdrag) {

              this.color_btool.x = game.input.activePointer.x-5;
              this.color_btool.y = game.input.activePointer.y+38;

              this.cragCircla2.x = this.game.input.activePointer.x;
              this.cragCircla2.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool2X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla2, this['hitCircle_b'+i]);
                }
            }
///////////////////// drag /////////////////////////////////////////////////////
 if(this.crdrag) {

              this.meak_blush.x = game.input.activePointer.x;
              this.meak_blush.y = game.input.activePointer.y+50;

              this.cragCircla3.x = this.game.input.activePointer.x;
              this.cragCircla3.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool3X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla3, this['hitCircle_c'+i]);
                }
            }
///////////////////// drag /////////////////////////////////////////////////////
 if(this.drdrag) {

              this.meak_pencil.x = game.input.activePointer.x;
              this.meak_pencil.y = game.input.activePointer.y+79;

              this.cragCircla4.x = this.game.input.activePointer.x;
              this.cragCircla4.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool4X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla4, this['hitCircle_d'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
  if(this.erdrag) {

              this.meak_lipstick.x = game.input.activePointer.x;
              this.meak_lipstick.y = game.input.activePointer.y+50;

              this.cragCircla5.x = this.game.input.activePointer.x;
              this.cragCircla5.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool5X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla5, this['hitCircle_e'+i]);
                }
            }
///////////////////// drag /////////////////////////////////////////////////////
///////////////////// drag /////////////////////////////////////////////////////
///////////////////// drag /////////////////////////////////////////////////////

},

openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('dressup_popup1');
         });
   
   },
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////dressup_popup1

Main.dressup_popup1 = function(){}

Main.dressup_popup1.prototype = {
    create:function(){
        this.meak_bg = game.add.sprite(0,0,'meak_bg');

        this.barbie = game.add.sprite(160,400,'barbie');
        this.barbie.anchor.setTo(0.5);

   /////////////////////////////////////////////////////////////////////////////////////////////   
   
       this.kellygrp=game.add.group();
        this.kellygrp.scale.setTo(0.7);
        this.kellygrp.x=220;
        this.kellygrp.y=270;

        this.d_backdress11 = game.add.sprite(186,293,'d_backdress11');
        this.d_backdress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_backdress11);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.d_shoe1 = game.add.sprite(186,300,'d_shoe1');
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe1);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=237;
        this.headgrp.y=288;

        this.d_head2 = game.add.sprite(113,65,'d_head2');
        this.kellygrp.add(this.d_head2);
        this.headgrp.add(this.d_head2);

        this.d_dress11 = game.add.sprite(186,293,'d_dress11');
        this.d_dress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress11);

        // this.d_head2 = game.add.sprite(113,65,'d_head2');
        // this.kellygrp.add(this.d_head2);

        this.d_hair1 = game.add.sprite(180,139.6,'d_hair1');
        this.d_hair1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_hair1);
        this.headgrp.add(this.d_hair1);

/////////////////////////////////////////////////////////////////////////////////////////////////////

       this.kellypop10005 = game.add.sprite(320,200,'kellypop10005');
       this.kellypop10005.anchor.setTo(0.5);
       // this.kellypop10005.scale.setTo(0.8);
       this.kellypop10005.scale.setTo(0);

       this.barbiepop10004 = game.add.sprite(280,110,'barbiepop10004');
       this.barbiepop10004.anchor.setTo(0.5);
       // this.barbiepop10004.scale.setTo(0.8);
       this.barbiepop10004.scale.setTo(0);


/////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.75);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

             game.add.tween(this.kellypop10005.scale).to({x:0.8,y:0.8}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
             game.add.tween(this.kellypop10005.scale).to({x:0,y:0}, 700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
             game.add.tween(this.barbiepop10004.scale).to({x:0.8,y:0.8}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
             game.add.tween(this.barbiepop10004.scale).to({x:0,y:0}, 700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
         game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},700, Phaser.Easing.Quadratic.Out,true,200);
          
         },this);
         },this);
         },this);
         },this);

         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('makeup_remove');
         });
   
   },
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////makeup_remove

Main.makeup_remove = function(){}

Main.makeup_remove.prototype = {
    create:function(){

        this.krdrag=false;


        this.meak_bg = game.add.sprite(0,0,'meak_bg');

        this.makeremovegrp=game.add.group();
        this.makeremovegrp.scale.setTo(0.8);
        this.makeremovegrp.x=60;
        this.makeremovegrp.y=130;

        this.meak_bhair = game.add.sprite(278,292,'meak_bhair');
        this.meak_bhair.anchor.setTo(0.5);
        this.makeremovegrp.add(this.meak_bhair);

        this.meak_body = game.add.sprite(250,850,'meak_body');
        this.meak_body.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_body);

        this.meak_dress = game.add.sprite(260,887,'meak_dress');
        this.meak_dress.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_dress);

        this.meak_head = game.add.sprite(255,269,'meak_head');
        this.meak_head.anchor.setTo(0.5);
        this.makeremovegrp.add(this.meak_head);

        this.meak_fp = game.add.sprite(255,270,'meak_fp');
        this.meak_fp.anchor.setTo(0.5);
        // this.meak_fp.visible=false
         this.makeremovegrp.add(this.meak_fp);

        this.meak_eyeshade0001 = game.add.sprite(244,278,'meak_eyeshade0001');
        this.meak_eyeshade0001 .anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_eyeshade0001);

        this.meak_white = game.add.sprite(241,272,'meak_white');
        this.meak_white.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_white);

        this.meak_lens = game.add.sprite(237,271,'meak_lens');
        this.meak_lens.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_lens);

        this.meak_mascara0001 = game.add.sprite(241,267,'meak_mascara0001');
        this.meak_mascara0001.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_mascara0001);

        this.meak_eyebrow0002 = game.add.sprite(230,232,'meak_eyebrow0002');
        this.meak_eyebrow0002.anchor.setTo(0.5);
        // this.meak_eyebrow0002.visible=false;
         this.makeremovegrp.add(this.meak_eyebrow0002);

        this.meak_eyebrow0001 = game.add.sprite(230,232,'meak_eyebrow0001');
        this.meak_eyebrow0001.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_eyebrow0001);

        this.meak_blus1 = game.add.sprite(252,342,'meak_blus1');
        this.meak_blus1.anchor.setTo(0.5);
        // this.meak_blus1.visible=false;
         this.makeremovegrp.add(this.meak_blus1);

         this.meak_lip1 = game.add.sprite(242,360,'meak_lip1');
        this.meak_lip1.anchor.setTo(0.5);
         this.makeremovegrp.add(this.meak_lip1);

        this.meak_lip5 = game.add.sprite(242,356,'meak_lip5');
        this.meak_lip5.anchor.setTo(0.5);
        // this.meak_lip5.visible=false;
         this.makeremovegrp.add(this.meak_lip5);

        this.face_red = game.add.sprite(250,280,'face_red');
        this.face_red.anchor.setTo(0.5);
        this.face_red.visible=false
         this.makeremovegrp.add(this.face_red);

        this.meak_water1 = game.add.sprite(250,275,'meak_water1');
        this.meak_water1.anchor.setTo(0.5);
        this.meak_water1.visible=false;
        this.makeremovegrp.add(this.meak_water1);

        this.face_red = game.add.sprite(250,280,'face_red');
        this.face_red.anchor.setTo(0.5);
        this.face_red.visible=false
        this.makeremovegrp.add(this.face_red);

        this.meak_hair = game.add.sprite(278,292,'meak_hair');
        this.meak_hair.anchor.setTo(0.5);
        this.makeremovegrp.add(this.meak_hair);

    /////////////////////////    

        this.meak_panel = game.add.sprite(250,700,'meak_panel');
        this.meak_panel.anchor.setTo(0.5);

        this.meak_remover = game.add.sprite(85,650,'meak_remover');
        this.meak_remover.anchor.setTo(0.5);
        this.meak_remover.scale.setTo(0.9);
        // this.meak_remover.inputEnabled=true;
        // this.meak_remover.input.useHandCursor=true;
        this.meak_remover.events.onInputDown.add(function(){
        this.meak_remover.inputEnabled=false;
        this.arrow4.visible=false
        this.face_red.visible=true
        this.cragCircla11.visible=true;

        },this);

        this.spanch = game.add.sprite(200,650,'spanch');
        this.spanch.anchor.setTo(0.5);
        this.spanch.scale.setTo(0.9);
        // this.spanch.inputEnabled=true;
        // this.spanch.input.useHandCursor=true;
        this.spanch.events.onInputDown.add(function(){
        game.world.bringToTop(this.spanch);
            this.arrow1.visible=false;
        this.krdrag=true;
        this.spanch.inputEnabled=false;
        this.arrow4.visible=true

        this.meak_remover.inputEnabled=true;
        this.meak_remover.input.useHandCursor=true;

        },this);

         this.hitGroup11 = game.add.group();
          for(var i=0; i<=Main.tool11X.length-1; i++)
              {
          this["hitCircle_k"+i] = game.add.graphics(Main.tool11X[i],Main.tool11Y[i]);
          this["hitCircle_k"+i].beginFill(0x000000,0);
          this["hitCircle_k"+i].drawCircle(0,0,40);
          this["hitCircle_k"+i].id = i;
          this.hitGroup11.add(this["hitCircle_k"+i]);
          game.physics.arcade.enable([this["hitCircle_k"+i]]);
          this["hitCircle_k"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe11 = game.add.group();
          // this.circle11 = game.add.graphics(0,0);
          // this.circle11.beginFill(0x000000,0);
          // this.circleGroupe11.add(this.circle11);
          // this.eyebrow10002.mask = this.circle11;

          this.cragCircla11 = game.add.graphics(0,0);
          this.cragCircla11.beginFill(0x000000, 0);
          this.cragCircla11.drawCircle(0,0,40);
          this.cragCircla11.endFill();
          this.cragCircla11.visible=false;

          this.hitSpritea11_cnt = 0;

          game.physics.arcade.enable([this.cragCircla11]);  
          this.cragCircla11.body.collideWorldBounds = true;
          this.cragCircla11.body.onCollide = new Phaser.Signal();
          this.cragCircla11.body.onCollide.add(this.hitSprite11, this);


//////////////////////

        this.shawer_amtn = game.add.sprite(230,650,'shawer_amtn');
        this.shawer_amtn.anchor.setTo(0.5);
        // this.shawer_amtn.inputEnabled=true;
        // this.shawer_amtn.input.useHandCursor=true;
        this.shawer_amtn.events.onInputDown.add(function(){
        game.world.bringToTop(this.shawer_amtn);
           this.arrow2.visible=false;
        this.lrdrag=true;
        this.shawer_amtn.inputEnabled=false;
        this.face_red.visible=true

        },this);

         this.hitGroup12 = game.add.group();
          for(var i=0; i<=Main.tool12X.length-1; i++)
              {
          this["hitCircle_l"+i] = game.add.graphics(Main.tool12X[i],Main.tool12Y[i]);
          this["hitCircle_l"+i].beginFill(0x000000,0);
          this["hitCircle_l"+i].drawCircle(0,0,40);
          this["hitCircle_l"+i].id = i;
          this.hitGroup12.add(this["hitCircle_l"+i]);
          game.physics.arcade.enable([this["hitCircle_l"+i]]);
          this["hitCircle_l"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe12 = game.add.group();
          this.circle12 = game.add.graphics(0,0);
          this.circle12.beginFill(0x000000,0);
          this.circleGroupe12.add(this.circle12);
          this.meak_water1.mask = this.circle12;

          this.cragCircla12 = game.add.graphics(0,0);
          this.cragCircla12.beginFill(0x000000, 0);
          this.cragCircla12.drawCircle(0,0,40);
          this.cragCircla12.endFill();

          this.hitSpritea12_cnt = 0;

          game.physics.arcade.enable([this.cragCircla12]);  
          this.cragCircla12.body.collideWorldBounds = true;
          this.cragCircla12.body.onCollide = new Phaser.Signal();
          this.cragCircla12.body.onCollide.add(this.hitSprite12, this);

//////////////////////

        this.towal1 = game.add.sprite(410,650,'towal1');
        this.towal1.anchor.setTo(0.5);
        this.towal1.scale.setTo(0.24);
        // this.towal1.inputEnabled=true;
        // this.towal1.input.useHandCursor=true;
        this.towal1.events.onInputDown.add(function(){
            this.arrow3.visible=false;
        game.world.bringToTop(this.towal1);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.musicButton);
        game.world.bringToTop(this.logoVar);
        this.mrdrag=true;
        this.towal1.loadTexture('towal2');
        this.towal1.inputEnabled=false;
        this.face_red.visible=true

        },this);

        this.hitGroup13 = game.add.group();
          for(var i=0; i<=Main.tool13X.length-1; i++)
              {
          this["hitCircle_m"+i] = game.add.graphics(Main.tool13X[i],Main.tool13Y[i]);
          this["hitCircle_m"+i].beginFill(0x000000,0);
          this["hitCircle_m"+i].drawCircle(0,0,40);
          this["hitCircle_m"+i].id = i;
          this.hitGroup13.add(this["hitCircle_m"+i]);
          game.physics.arcade.enable([this["hitCircle_m"+i]]);
          this["hitCircle_m"+i].body.collideWorldBounds = true;
                }
         
          // this.circleGroupe13 = game.add.group();
          // this.circle13 = game.add.graphics(0,0);
          // this.circle13.beginFill(0x000000,0);
          // this.circleGroupe13.add(this.circle13);
          // this.eyebrow10002.mask = this.circle13;

          this.cragCircla13 = game.add.graphics(0,0);
          this.cragCircla13.beginFill(0x000000, 0);
          this.cragCircla13.drawCircle(0,0,40);
          this.cragCircla13.endFill();

          this.hitSpritea13_cnt = 0;

          game.physics.arcade.enable([this.cragCircla13]);  
          this.cragCircla13.body.collideWorldBounds = true;
          this.cragCircla13.body.onCollide = new Phaser.Signal();
          this.cragCircla13.body.onCollide.add(this.hitSprite13, this);

       


   ////////////////////// ///////////////// ///////////////////// /////////////////////////////  

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,40);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // // console.log(this['ycnt'+this.mcnt1]);
        // },this);

   ////////////////////// ///////////////// ///////////////////// /////////////////////////////   
   ////////////////////// ///////////////// ///////////////////// ///////////////////////////// 

         this.morebtn = game.add.sprite(85,500,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,500,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
  ///////////////////////////////////////////////////////////////////////////////////////////////////

    this.arrowgp = game.add.group();

    ////////////////     1  2   3         4     5   6   7   8   9  10   11  12  13 14  15  16   17  18  19  20  21
        
         var arro2x = [210,290,400,      80,  450,160,150,360,125,250,350,370,380,450,250,40, 300 ,44 ,75 ,280,385];
         var arro2y = [560,546,580,      560,  560,350,210,340,300,170,100,200,320,440,230,440,295 ,462,442,620,295];

         for(i=1;i<=35;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          }
         if(i==2){
          this['arrow'+i].visible=false;
          }
           if(i==3){
          this['arrow'+i].visible=false;
          }

          if(i==4){
          this['arrow'+i].visible=false;
          }
           
          this.arrowgp.add(this['arrow'+i]);
          
         }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

            this.arrow1.visible=true;
            this.spanch.inputEnabled=true;
           this.spanch.input.useHandCursor=true;

         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
hitSprite11:function(sprite1, sprite2){
          // console.log(this.hitSpritea11_cnt);
          sprite2.kill();
          this.hitSpritea11_cnt ++
        this.face_red.visible=false

          this.meak_lip1.visible=true;
          this.meak_eyebrow0001.visible=true;

                   game.add.tween(this.meak_fp).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.meak_eyeshade0001).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.meak_eyebrow0002).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.meak_blus1).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);
                 game.add.tween(this.meak_lip5).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);
            
          if (this.hitSpritea11_cnt >=45) {
                  game.add.tween(this.meak_fp).to({alpha:0},1500, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.meak_eyeshade0001).to({alpha:0},1500, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.meak_eyebrow0002).to({alpha:0},1500, Phaser.Easing.Quadratic.Out, true);
                game.add.tween(this.meak_blus1).to({alpha:0},1500, Phaser.Easing.Quadratic.Out, true);
                 game.add.tween(this.meak_lip5).to({alpha:0},1500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
            this.krdrag=false;
                 game.add.tween(this.spanch).to({x:200,y:650},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

          this.meak_fp.visible=false
          this.meak_eyeshade0001.visible=false
          this.meak_eyebrow0002.visible=false
          this.meak_blus1.visible=false
          this.meak_lip5.visible=false  

           this.arrow2.visible=true;
           this.shawer_amtn.inputEnabled=true;
           this.shawer_amtn.input.useHandCursor=true;

      },this);
      },this);
   
        }
            // this.circle11.drawCircle(Main.tool11X[sprite2.id],Main.tool11Y[sprite2.id],40);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////

 hitSprite12:function(sprite1, sprite2){
          // console.log(this.hitSpritea12_cnt);
          sprite2.kill();
          this.hitSpritea12_cnt ++

        this.face_red.visible=false

          this.shawer_amtn.animations.add('shawer_amtn',[1,2,3,4,5,6,7]);
          this.shawer_amtn.animations.play('shawer_amtn',10,true);

          this.meak_water1.visible=true;
            
          if (this.hitSpritea12_cnt >=45) { 
            this.shawer_amtn.animations.stop();
            this.shawer_amtn.animations.frame=0;
          this.lrdrag=false; 
          game.add.tween(this.shawer_amtn).to({x:230,y:650},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

            this.arrow3.visible=true;
            this.towal1.inputEnabled=true;
            this.towal1.input.useHandCursor=true;
       
          },this);
   
        }
            this.circle12.drawCircle(Main.tool12X[sprite2.id],Main.tool12Y[sprite2.id],40);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
hitSprite13:function(sprite1, sprite2){
          // console.log(this.hitSpritea13_cnt);
          sprite2.kill();
          this.hitSpritea13_cnt ++
        this.face_red.visible=false

        game.add.tween(this.meak_water1).to({alpha:0.5},1500, Phaser.Easing.Quadratic.Out, true);

          if (this.hitSpritea13_cnt >=45) { 
        game.add.tween(this.meak_water1).to({alpha:0},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.meak_water1.visible=false;
          this.mrdrag=false; 
          this.towal1.loadTexture('towal1');
          game.add.tween(this.towal1).to({x:410,y:650},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

          game.add.tween(this.playbtn.scale).to({x:0.8,y:.8},700, Phaser.Easing.Quadratic.Out, true,200);
       
          },this); 
          },this); 
   
        }
            // this.circle13.drawCircle(Main.tool13X[sprite2.id],Main.tool13Y[sprite2.id],40);

        }, 
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////

 update:function(){

// console.log(game.input.activePointer.x+':::::'+game.input.activePointer.y);
  
///////////////////// drag /////////////////////////////////////////////////////
 if(this.krdrag) {

              this.spanch.x = game.input.activePointer.x;
              this.spanch.y = game.input.activePointer.y+40;

              this.cragCircla11.x = this.game.input.activePointer.x;
              this.cragCircla11.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool11X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla11, this['hitCircle_k'+i]);
                }
            }


///////////////////// drag /////////////////////////////////////////////////////
   if(this.lrdrag) {

          this.shawer_amtn.x = game.input.activePointer.x-40;
          this.shawer_amtn.y = game.input.activePointer.y+50;

          this.cragCircla12.x = this.game.input.activePointer.x-30;
          this.cragCircla12.y = this.game.input.activePointer.y+30;
     
       for(var i=0;i<=Main.tool12X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla12, this['hitCircle_l'+i]);
                }
            }
///////////////////// drag /////////////////////////////////////////////////////
  if(this.mrdrag) {

              this.towal1.x = game.input.activePointer.x;
              this.towal1.y = game.input.activePointer.y+50;

              this.cragCircla13.x = this.game.input.activePointer.x;
              this.cragCircla13.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool13X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla13, this['hitCircle_m'+i]);
                }
            }


///////////////////// drag /////////////////////////////////////////////////////
///////////////////// drag /////////////////////////////////////////////////////

},

openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('meakup2');
         });
   
   },
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////meakup2

Main.meakup2 = function(){}

Main.meakup2.prototype = {
    create:function(){

          	this.frdrag=false;
          	this.grdrag=false;
          	this.hrdrag=false;
          	this.irdrag=false;
          	this.jrdrag=false;


        this.meak_bg = game.add.sprite(0,0,'meak_bg');

        this.meakup2group=game.add.group();
        this.meakup2group.scale.setTo(0.8);
        this.meakup2group.x=60;
        this.meakup2group.y=130;


        this.meak_bhair = game.add.sprite(278,292,'meak_bhair');
        this.meak_bhair.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_bhair);

        this.meak_body = game.add.sprite(250,850,'meak_body');
        this.meak_body.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_body);

        this.meak_dress = game.add.sprite(260,887,'meak_dress');
        this.meak_dress.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_dress);

        this.meak_head = game.add.sprite(255,269,'meak_head');
        this.meak_head.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_head);
      
        this.meak_eyeshade0002= game.add.sprite(238,265,'meak_eyeshade0002');
        this.meak_eyeshade0002.anchor.setTo(0.5);
        this.meak_eyeshade0002.visible=false;
        this.meakup2group.add(this.meak_eyeshade0002);

        this.meak_white = game.add.sprite(241,272,'meak_white');
        this.meak_white.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_white);

        this.meak_lens = game.add.sprite(239,269,'meak_lens');
        this.meak_lens.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_lens);

        this.meak_mascara0001 = game.add.sprite(241,266,'meak_mascara0001');
        this.meak_mascara0001.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_mascara0001);
       
        this.meak_mascara0002 = game.add.sprite(241,266,'meak_mascara0002');
        this.meak_mascara0002.anchor.setTo(0.5);
        this.meak_mascara0002.visible=false;
        this.meakup2group.add(this.meak_mascara0002);

        this.meak_eyebrow0003 = game.add.sprite(236,232,'meak_eyebrow0003');
        this.meak_eyebrow0003.anchor.setTo(0.5);
        this.meak_eyebrow0003.visible=false;
        this.meakup2group.add(this.meak_eyebrow0003);

        this.meak_eyebrow0001 = game.add.sprite(240,232,'meak_eyebrow0001');
        this.meak_eyebrow0001.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_eyebrow0001);

        this.meak_blus2 = game.add.sprite(235,330,'meak_blus2');
        this.meak_blus2.anchor.setTo(0.5);
        this.meak_blus2.visible=false; 
        this.meakup2group.add(this.meak_blus2);

        this.meak_lip1 = game.add.sprite(242,360,'meak_lip1');
        this.meak_lip1.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_lip1);

        this.meak_lip4 = game.add.sprite(242,360,'meak_lip4');
        this.meak_lip4.anchor.setTo(0.5);
        this.meak_lip4.visible=false;
        this.meakup2group.add(this.meak_lip4);

        this.face_red = game.add.sprite(250,280,'face_red');
        this.face_red.anchor.setTo(0.5);
        this.face_red.visible=false
        this.meakup2group.add(this.face_red);

        this.eye_red = game.add.sprite(240,260,'eye_red');
        this.eye_red.anchor.setTo(0.5);
        this.eye_red.rotation=-0.03;
        this.eye_red .visible=false;
        this.meakup2group.add(this.eye_red);

        this.eyebrow_red = game.add.sprite(227,225,'eyebrow_red');
        this.eyebrow_red.anchor.setTo(0.5);
        this.eyebrow_red.visible=false;
        this.meakup2group.add(this.eyebrow_red);

        this.lipstick_red = game.add.sprite(242,368,'lipstick_red');
        this.lipstick_red.anchor.setTo(0.5);
        this.lipstick_red.rotation=-0.02;
        this.lipstick_red.visible=false;
        this.meakup2group.add(this.lipstick_red);

        this.blus_red1 = game.add.sprite(323,348,'blus_red1');
        this.blus_red1.anchor.setTo(0.5);
        this.blus_red1.rotation=-0.4;
        this.blus_red1.visible=false;
        this.meakup2group.add(this.blus_red1);

        this.blus_red2 = game.add.sprite(180,348,'blus_red2');
        this.blus_red2.anchor.setTo(0.5);
        this.blus_red2.rotation=0.3;
        this.blus_red2.visible=false;
        this.meakup2group.add(this.blus_red2);

        this.meak_hair = game.add.sprite(278,292,'meak_hair');
        this.meak_hair.anchor.setTo(0.5);
        this.meakup2group.add(this.meak_hair);

    /////////////////////////    

        this.meak_panel = game.add.sprite(250,700,'meak_panel');
        this.meak_panel.anchor.setTo(0.5);

        this.mascara_btl = game.add.sprite(45,660,'mascara_btl');
        this.mascara_btl.anchor.setTo(0.5);
        this.mascara_btl.scale.setTo(0.8);

        this.mascara_btool = game.add.sprite(80,650,'mascara_btool');
        this.mascara_btool.anchor.setTo(0.5);
        this.mascara_btool.scale.setTo(0.7);
        // this.mascara_btool.inputEnabled=true;
        // this.mascara_btool.input.useHandCursor=true;
        this.mascara_btool.events.onInputDown.add(function(){
         	 this.arrow1.visible=false;
        this.mascara_btool.inputEnabled=false;
        game.world.bringToTop(this.mascara_btool);
        this.frdrag=true;
        this.eye_red .visible=true;

        },this);

          this.hitGroup6 = game.add.group();
          for(var i=0; i<=Main.tool6X.length-1; i++)
              {
          this["hitCircle_f"+i] = game.add.graphics(Main.tool6X[i],Main.tool6Y[i]);
          this["hitCircle_f"+i].beginFill(0x000000,0);
          this["hitCircle_f"+i].drawCircle(0,0,30);
          this["hitCircle_f"+i].id = i;
          this.hitGroup6.add(this["hitCircle_f"+i]);
          game.physics.arcade.enable([this["hitCircle_f"+i]]);
          this["hitCircle_f"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe = game.add.group();
          this.circle6 = game.add.graphics(0,0);
          this.circle6.beginFill(0x000000,0);
          this.circleGroupe.add(this.circle6);
          this.meak_mascara0002.mask = this.circle6;

          this.cragCircla6 = game.add.graphics(0,0);
          this.cragCircla6.beginFill(0x000000, 0);
          this.cragCircla6.drawCircle(0,0,30);
          this.cragCircla6.endFill();

          this.hitSpritea6_cnt = 0;

          game.physics.arcade.enable([this.cragCircla6]);  
          this.cragCircla6.body.collideWorldBounds = true;
          this.cragCircla6.body.onCollide = new Phaser.Signal();
          this.cragCircla6.body.onCollide.add(this.hitSprite6, this);
///////////////////////////////
       
        this.color_box = game.add.sprite(185,650,'color_box');
        this.color_box.anchor.setTo(0.5);
        this.color_box.scale.setTo(0.75);
        // this.color_box.inputEnabled=true;
        // this.color_box.input.useHandCursor=true;
        this.color_box.events.onInputDown.add(function(){
        this.arrow2.visible=false;
        this.color_box.inputEnabled=false;
        this.color_btool1.rotation=-1;
        game.world.bringToTop(this.color_btool1);
        this.grdrag=true;
        this.eye_red .visible=true;

        },this);

        this.color_btool1 = game.add.sprite(190,670,'color_btool');
        this.color_btool1.anchor.setTo(0.5);
        this.color_btool1.scale.setTo(0.75);

          this.hitGroup7 = game.add.group();
          for(var i=0; i<=Main.tool7X.length-1; i++)
              {
          this["hitCircle_g"+i] = game.add.graphics(Main.tool7X[i],Main.tool7Y[i]);
          this["hitCircle_g"+i].beginFill(0x000000,0);
          this["hitCircle_g"+i].drawCircle(0,0,30);
          this["hitCircle_g"+i].id = i;
          this.hitGroup7.add(this["hitCircle_g"+i]);
          game.physics.arcade.enable([this["hitCircle_g"+i]]);
          this["hitCircle_g"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe7 = game.add.group();
          this.circle7 = game.add.graphics(0,0);
          this.circle7.beginFill(0x000000,0);
          this.circleGroupe7.add(this.circle7);
          this.meak_eyeshade0002.mask = this.circle7;

          this.cragCircla7 = game.add.graphics(0,0);
          this.cragCircla7.beginFill(0x000000, 0);
          this.cragCircla7.drawCircle(0,0,30);
          this.cragCircla7.endFill();

          this.hitSpritea7_cnt = 0;

          game.physics.arcade.enable([this.cragCircla7]);  
          this.cragCircla7.body.collideWorldBounds = true;
          this.cragCircla7.body.onCollide = new Phaser.Signal();
          this.cragCircla7.body.onCollide.add(this.hitSprite7, this);

///////////////////////////////
       
        this.bulash_p = game.add.sprite(300,650,'bulash_p');
        this.bulash_p.anchor.setTo(0.5);
        this.bulash_p.scale.setTo(0.8);

        this.meak_blush1 = game.add.sprite(340,670,'meak_blush');
        this.meak_blush1.anchor.setTo(0.5);
        this.meak_blush1.scale.setTo(0.4);
        // this.meak_blush1.inputEnabled=true;
        // this.meak_blush1.input.useHandCursor=true;
        this.meak_blush1.events.onInputDown.add(function(){
         	 this.arrow3.visible=false;
        this.meak_blush1.inputEnabled=false;
        game.world.bringToTop(this.meak_blush1);
        this.hrdrag=true;
        this.blus_red1.visible=true;
        this.blus_red2.visible=true;

        },this);

         this.hitGroup8 = game.add.group();
          for(var i=0; i<=Main.tool8X.length-1; i++)
              {
          this["hitCircle_h"+i] = game.add.graphics(Main.tool8X[i],Main.tool8Y[i]);
          this["hitCircle_h"+i].beginFill(0x000000,0);
          this["hitCircle_h"+i].drawCircle(0,0,30);
          this["hitCircle_h"+i].id = i;
          this.hitGroup8.add(this["hitCircle_h"+i]);
          game.physics.arcade.enable([this["hitCircle_h"+i]]);
          this["hitCircle_h"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe8 = game.add.group();
          this.circle8 = game.add.graphics(0,0);
          this.circle8.beginFill(0x000000,0);
          this.circleGroupe8.add(this.circle8);
          this.meak_blus2.mask = this.circle8;

          this.cragCircla8 = game.add.graphics(0,0);
          this.cragCircla8.beginFill(0x000000, 0);
          this.cragCircla8.drawCircle(0,0,30);
          this.cragCircla8.endFill();

          this.hitSpritea8_cnt = 0;

          game.physics.arcade.enable([this.cragCircla8]);  
          this.cragCircla8.body.collideWorldBounds = true;
          this.cragCircla8.body.onCollide = new Phaser.Signal();
          this.cragCircla8.body.onCollide.add(this.hitSprite8, this);

 //////////////////////////////////////////      
        this.meak_pencil1 = game.add.sprite(400,660,'meak_pencil');
        this.meak_pencil1.anchor.setTo(0.5);
        this.meak_pencil1.scale.setTo(0.35);
        // this.meak_pencil1.inputEnabled=true;
        // this.meak_pencil1.input.useHandCursor=true;
        this.meak_pencil1.events.onInputDown.add(function(){
         	 this.arrow4.visible=false;
        this.meak_pencil1.inputEnabled=false;
        game.world.bringToTop(this.meak_pencil1);
        this.irdrag=true;
        this.eyebrow_red.visible=true;


        },this);

         this.hitGroup9 = game.add.group();
          for(var i=0; i<=Main.tool9X.length-1; i++)
              {
          this["hitCircle_i"+i] = game.add.graphics(Main.tool9X[i],Main.tool9Y[i]);
          this["hitCircle_i"+i].beginFill(0x000000,0);
          this["hitCircle_i"+i].drawCircle(0,0,20);
          this["hitCircle_i"+i].id = i;
          this.hitGroup9.add(this["hitCircle_i"+i]);
          game.physics.arcade.enable([this["hitCircle_i"+i]]);
          this["hitCircle_i"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe9 = game.add.group();
          this.circle9 = game.add.graphics(0,0);
          this.circle9.beginFill(0x000000,0);
          this.circleGroupe9.add(this.circle9);
          this.meak_eyebrow0003.mask = this.circle9;

          this.cragCircla9 = game.add.graphics(0,0);
          this.cragCircla9.beginFill(0x000000, 0);
          this.cragCircla9.drawCircle(0,0,20);
          this.cragCircla9.endFill();

          this.hitSpritea9_cnt = 0;

          game.physics.arcade.enable([this.cragCircla9]);  
          this.cragCircla9.body.collideWorldBounds = true;
          this.cragCircla9.body.onCollide = new Phaser.Signal();
          this.cragCircla9.body.onCollide.add(this.hitSprite9, this);
      
////////////////////////
        this.meak_lipstick1 = game.add.sprite(450,660,'meak_lipstick');
        this.meak_lipstick1.anchor.setTo(0.5);
        this.meak_lipstick1.scale.setTo(0.45);
        // this.meak_lipstick1.inputEnabled=true;
        // this.meak_lipstick1.input.useHandCursor=true;
        this.meak_lipstick1.events.onInputDown.add(function(){
         	 this.arrow5.visible=false;

        this.meak_lipstick1.inputEnabled=false;
        game.world.bringToTop(this.meak_lipstick1);
        game.world.bringToTop(this.shutter);
        game.world.bringToTop(this.logoVar);
        game.world.bringToTop(this.musicButton);
        this.jrdrag=true;
        this.lipstick_red.visible=true;

        },this);


          this.hitGroup10 = game.add.group();
          for(var i=0; i<=Main.tool10X.length-1; i++)
              {
          this["hitCircle_j"+i] = game.add.graphics(Main.tool10X[i],Main.tool10Y[i]);
          this["hitCircle_j"+i].beginFill(0x000000,0);
          this["hitCircle_j"+i].drawCircle(0,0,30);
          this["hitCircle_j"+i].id = i;
          this.hitGroup10.add(this["hitCircle_j"+i]);
          game.physics.arcade.enable([this["hitCircle_j"+i]]);
          this["hitCircle_j"+i].body.collideWorldBounds = true;
                }
         
          this.circleGroupe10 = game.add.group();
          this.circle10 = game.add.graphics(0,0);
          this.circle10.beginFill(0x000000,0);
          this.circleGroupe10.add(this.circle10);
          this.meak_lip4.mask = this.circle10;

          this.cragCircla10 = game.add.graphics(0,0);
          this.cragCircla10.beginFill(0x000000, 0);
          this.cragCircla10.drawCircle(0,0,30);
          this.cragCircla10.endFill();

          this.hitSpritea10_cnt = 0;

          game.physics.arcade.enable([this.cragCircla10]);  
          this.cragCircla10.body.collideWorldBounds = true;
          this.cragCircla10.body.onCollide = new Phaser.Signal();
          this.cragCircla10.body.onCollide.add(this.hitSprite10, this);

      //////////////////////////////////////////////////////////////////////
     

   ////////////////////// ///////////////// ///////////////////// /////////////////////////////  

        // this.mcnt1=0;
        // this.mcir = game.add.graphics(0,0);
        // this.mcir.beginFill(0x666666,0.1);
        // this.mcir.drawRect(0,0,504,800);
        // this.mcir.inputEnabled=true;
        // this.mcir.events.onInputDown.add(function(){
        //   this.mcnt1++;
        //   this['xcnt'+this.mcnt1]=game.input.activePointer.x;
        //   this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        // this.mcir = game.add.graphics(game.input.activePointer.x,game.input.activePointer.y);
        // this.mcir.beginFill(0x000000,0.5);
        // this.mcir.drawCircle(0,0,20);
        // console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        // // console.log(this['ycnt'+this.mcnt1]);
        // },this);



   ////////////////////// ///////////////// ///////////////////// /////////////////////////////   
   ////////////////////// ///////////////// ///////////////////// ///////////////////////////// 

         this.morebtn = game.add.sprite(85,500,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,500,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
  ///////////////////////////////////////////////////////////////////////////////////////////////////

    this.arrowgp = game.add.group();

    ////////////////     1  2   3   4   5            6   7   8   9  10   11  12  13 14  15  16   17  18  19  20  21
        
         var arro2x = [80, 180,340,400,450,         160,150,360,125,250,350,370,380,450,250,40, 300 ,44 ,75 ,280,385];
         var arro2y = [570,580,590,550,560,         350,210,340,300,170,100,200,320,440,230,440,295 ,462,442,620,295];

         for(i=1;i<=35;i++){
          this['arrow'+i] = game.add.sprite(arro2x[i-1],arro2y[i-1],'arrow');
          this['arrow'+i].anchor.setTo(0.5);
          this['arrow'+i].animations.add('arrow');
          this['arrow'+i].animations.play('arrow',20,true);
          this['arrow'+i].visible=false;
          if(i==1){
          this['arrow'+i].visible=false;
          }
         if(i==2){
          this['arrow'+i].visible=false;
          }
           if(i==3){
          this['arrow'+i].visible=false;
          }
           if(i==4){
          this['arrow'+i].visible=false;
          }
             if(i==5){
          this['arrow'+i].visible=false;
          }
           
          this.arrowgp.add(this['arrow'+i]);
          
         }

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////      
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	   this.arrow1.visible=true;
         	   this.mascara_btool.inputEnabled=true;
               this.mascara_btool.input.useHandCursor=true;
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
   hitSprite6:function(sprite1, sprite2){
          // console.log(this.hitSpritea6_cnt);
          sprite2.kill();
          this.hitSpritea6_cnt ++
          this.meak_mascara0002.visible=true;
        this.eye_red .visible=false;

            
          if (this.hitSpritea6_cnt >=14) {  
          this.meak_mascara0001.visible=false;
          	this.frdrag=false;
         game.add.tween(this.mascara_btool).to({x:80,y:650},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	  this.arrow2.visible=true;
         	  this.color_box.inputEnabled=true;
             this.color_box.input.useHandCursor=true;

         },this);
   
		    }
            this.circle6.drawCircle(Main.tool6X[sprite2.id],Main.tool6Y[sprite2.id],30);

        }, 
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
         hitSprite7:function(sprite1, sprite2){
          // console.log(this.hitSpritea7_cnt);
          sprite2.kill();
          this.hitSpritea7_cnt ++
          this.meak_eyeshade0002.visible=true;
        this.eye_red .visible=false;

          if (this.hitSpritea7_cnt >=12) { 
          	this.grdrag=false;
          	this.color_btool1.rotation=0;
         game.add.tween(this.color_btool1).to({x:190,y:670}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	 this.arrow3.visible=true;
             this.meak_blush1.inputEnabled=true;
             this.meak_blush1.input.useHandCursor=true;

         },this); 
   
		    }
            this.circle7.drawCircle(Main.tool7X[sprite2.id],Main.tool7Y[sprite2.id],30);

        }, 
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
 hitSprite8:function(sprite1, sprite2){
          // console.log(this.hitSpritea8_cnt);
          sprite2.kill();
          this.hitSpritea8_cnt ++

           this.blus_red1.visible=false;
           this.blus_red2.visible=false;
          this.meak_blus2.visible=true;
            
          if (this.hitSpritea8_cnt >=20) { 
          	this.hrdrag=false;
       game.add.tween(this.meak_blush1).to({x:340,y:670},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	 this.arrow4.visible=true;
       	 this.meak_pencil1.inputEnabled=true;
        this.meak_pencil1.input.useHandCursor=true;

         },this); 
    
   
		    }
            this.circle8.drawCircle(Main.tool8X[sprite2.id],Main.tool8Y[sprite2.id],30);

        }, 
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
  hitSprite9:function(sprite1, sprite2){
          // console.log(this.hitSpritea9_cnt);
          sprite2.kill();
          this.hitSpritea9_cnt ++
        this.eyebrow_red.visible=false;

          this.meak_eyebrow0003.visible=true;
            
          if (this.hitSpritea9_cnt >=10) {  
          	   this.meak_eyebrow0001.visible=false;
          	   this.irdrag=false;
          game.add.tween(this.meak_pencil1).to({x:400,y:660},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         	 this.arrow5.visible=true;
          	this.meak_lipstick1.inputEnabled=true;
           this.meak_lipstick1.input.useHandCursor=true;

         },this); 
   
		    }
            this.circle9.drawCircle(Main.tool9X[sprite2.id],Main.tool9Y[sprite2.id],20);

        }, 
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
hitSprite10:function(sprite1, sprite2){
          // console.log(this.hitSpritea10_cnt);
          sprite2.kill();
          this.hitSpritea10_cnt ++

          this.lipstick_red.visible=false;
          this.meak_lip4.visible=true;
            
          if (this.hitSpritea10_cnt >=10) {  
           this.meak_lip1.visible=false;
           this.jrdrag=false;
          game.add.tween(this.meak_lipstick1).to({x:450,y:660},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

          game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true,300);

         },this); 


		    }
            this.circle10.drawCircle(Main.tool10X[sprite2.id],Main.tool10Y[sprite2.id],30);

        }, 

////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////
////////////////////////// hitsprite ////////////////////////////////////////////////////////////

 update:function(){

// console.log(game.input.activePointer.x+':::::'+game.input.activePointer.y);
	
///////////////////// drag /////////////////////////////////////////////////////
    if(this.frdrag) {

              this.mascara_btool.x = game.input.activePointer.x;
              this.mascara_btool.y = game.input.activePointer.y+50;

              this.cragCircla6.x = this.game.input.activePointer.x;
              this.cragCircla6.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool6X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla6, this['hitCircle_f'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
  if(this.grdrag) {

              this.color_btool1.x = game.input.activePointer.x-5;
              this.color_btool1.y = game.input.activePointer.y+38;

              this.cragCircla7.x = this.game.input.activePointer.x;
              this.cragCircla7.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool7X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla7, this['hitCircle_g'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
 if(this.hrdrag) {

              this.meak_blush1.x = game.input.activePointer.x;
              this.meak_blush1.y = game.input.activePointer.y+50;

              this.cragCircla8.x = this.game.input.activePointer.x;
              this.cragCircla8.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool8X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla8, this['hitCircle_h'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
 if(this.irdrag) {

              this.meak_pencil1.x = game.input.activePointer.x;
              this.meak_pencil1.y = game.input.activePointer.y+79;

              this.cragCircla9.x = this.game.input.activePointer.x;
              this.cragCircla9.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool9X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla9, this['hitCircle_i'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////


        if(this.jrdrag) {

              this.meak_lipstick1.x = game.input.activePointer.x;
              this.meak_lipstick1.y = game.input.activePointer.y+50;

              this.cragCircla10.x = this.game.input.activePointer.x;
              this.cragCircla10.y = this.game.input.activePointer.y;
     
       for(var i=0;i<=Main.tool10X.length;i++)
                {
      game.physics.arcade.collide(this.cragCircla10, this['hitCircle_j'+i]);
                }
            }

///////////////////// drag /////////////////////////////////////////////////////
///////////////////// drag /////////////////////////////////////////////////////

},

openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('dressup_popup2');
         });
   
   },
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////dressup_popup2

Main.dressup_popup2 = function(){}

Main.dressup_popup2.prototype = {
    create:function(){
        this.meak_bg = game.add.sprite(0,0,'meak_bg');

        this.barbie = game.add.sprite(160,400,'barbie');
        this.barbie.anchor.setTo(0.5);

   /////////////////////////////////////////////////////////////////////////////////////////////   
   
        this.kellygrp=game.add.group();
        this.kellygrp.scale.setTo(0.7);
        this.kellygrp.x=220;
        this.kellygrp.y=270;

        this.d_backdress11 = game.add.sprite(186,293,'d_backdress11');
        this.d_backdress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_backdress11);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=236;
        this.headgrp.y=286;

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.d_shoe1 = game.add.sprite(186,300,'d_shoe1');
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe1);

        this.d_head3 = game.add.sprite(113,65,'d_head3');
        this.kellygrp.add(this.d_head3);
        this.headgrp.add(this.d_head3);

        this.d_dress11 = game.add.sprite(186,293,'d_dress11');
        this.d_dress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress11);

        this.d_head3 = game.add.sprite(113,65,'d_head3');
        this.kellygrp.add(this.d_head3);
        this.headgrp.add(this.d_head3);

        this.d_hair1 = game.add.sprite(180,139.6,'d_hair1');
        this.d_hair1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_hair1);
        this.headgrp.add(this.d_hair1);

/////////////////////////////////////////////////////////////////////////////////////////////////////

       this.kellypop10002 = game.add.sprite(320,200,'kellypop10002');
       this.kellypop10002.anchor.setTo(0.5);
       // this.kellypop10002.scale.setTo(0.8);
       this.kellypop10002.scale.setTo(0);

       this.barbiepop10005 = game.add.sprite(280,110,'barbiepop10005');
       this.barbiepop10005.anchor.setTo(0.5);
       // this.barbiepop10005.scale.setTo(0.8);
       this.barbiepop10005.scale.setTo(0);


/////////////////////////////////////////////////////////////////////////////////////////////////////
        
        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.75);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

      game.add.tween(this.kellypop10002.scale).to({x:0.8,y:0.8}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
      game.add.tween(this.kellypop10002.scale).to({x:0,y:0}, 700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){
      game.add.tween(this.barbiepop10005.scale).to({x:0.8,y:0.8}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
      game.add.tween(this.barbiepop10005.scale).to({x:0,y:0}, 700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){

         game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},700, Phaser.Easing.Quadratic.Out,true,200);
          
         },this);
         },this);
         },this);
         },this);

         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('dressup');
         });
   
   },
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////dressup

Main.dressup = function(){}

Main.dressup.prototype = {
    create:function(){

    	this.d1_arr=[0,0,0,0,0];

        this.d_bg = game.add.sprite(0,0,'d_bg');

        this.kellygrp=game.add.group();
        this.kellygrp.x=60;
        this.kellygrp.y=100;

        this.d_backdress1 = game.add.sprite(186,293,'d_backdress'+Main.d_array[1]);
        this.d_backdress1.anchor.setTo(0.5);
        this.d_backdress1.visible=false;
        this.kellygrp.add(this.d_backdress1);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.dressup_headgrp=game.add.group();
        this.dressup_headgrp.scale.setTo(0.85);
        this.dressup_headgrp.x=80;
        // this.dressup_headgrp.x=10;
        this.dressup_headgrp.y=130;
        // this.dressup_headgrp.y=8;
        // this.kellygrp.add(this.dressup_headgrp);

        this.d_shoe11 = game.add.sprite(186,300,'d_shoe11');
        this.d_shoe11.anchor.setTo(0.5);
        this.d_shoe11.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe11);


        this.d_shoe1 = game.add.sprite(186,300,'d_shoe'+Main.d_array[2]);
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.8);
        this.d_shoe1.visible=false;
        this.kellygrp.add(this.d_shoe1);

        this.d_head3 = game.add.sprite(113.8,65,'d_head3');
        this.dressup_headgrp.add(this.d_head3);
        // this.kellygrp.add(this.d_head3);

        this.d_dress1 = game.add.sprite(186,293,'d_dress'+Main.d_array[1]);
        this.d_dress1.anchor.setTo(0.5);
        this.d_dress1.visible=false;
        this.kellygrp.add(this.d_dress1);

        this.d_dress11 = game.add.sprite(186,293,'d_dress11');
        this.d_dress11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress11);

         this.d_neckles1 = game.add.sprite(203,321,'d_neckles'+Main.d_array[3]);
        this.d_neckles1.anchor.setTo(0.5);
        this.d_neckles1.alpha=0;
        this.kellygrp.add(this.d_neckles1);

        this.d_hair1 = game.add.sprite(180,139,'d_hair1');
        // this.d_hair1 = game.add.sprite(180,139.6,'d_hair1');
        this.d_hair1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_hair1);
        this.dressup_headgrp.add(this.d_hair1);
      
        this.d_earing1 = game.add.sprite(179,332,'d_earing'+Main.d_array[4]);
        this.d_earing1.anchor.setTo(0.5);
        this.d_earing1.alpha=0;
        this.kellygrp.add(this.d_earing1);
        this.dressup_headgrp.add(this.d_earing1);

        this.d_earing11 = game.add.sprite(85,332,'d_earing'+Main.d_array[4]);
        this.d_earing11.anchor.setTo(0.5);
        this.d_earing11.alpha=0;
        this.kellygrp.add(this.d_earing11);
        this.dressup_headgrp.add(this.d_earing11);

        this.d1_crown1 = game.add.sprite(190,305,'d1_crown'+Main.d_array[5]);
        this.d1_crown1.anchor.setTo(0.5);
        this.d1_crown1.alpha=0;
        this.kellygrp.add(this.d1_crown1);
        this.dressup_headgrp.add(this.d1_crown1);

       
     
////////////////////////////////////////////////////////////////////////////////

      this.d_pgroup=game.add.group();
      this.d_pgroup.y=20;

      this.d_panel=game.add.sprite(640,350,'d_panel');
      this.d_panel.anchor.setTo(0.5);
      this.d_panel.scale.setTo(0.8);
      this.d_pgroup.add(this.d_panel);

    
//////////////

     this.cnt2=0;
      this.icon2=game.add.sprite(452,135,'icon2');
      // this.icon2=game.add.sprite(452,235,'icon2');
      this.icon2.anchor.setTo(0.5);
      this.icon2.inputEnabled=true;
      this.icon2.input.useHandCursor=true;
      this.icon2.events.onInputOver.add(this.btnOver,this);
      this.icon2.events.onInputOut.add(this.btnOut,this);
      this.icon2.events.onInputDown.add(function(){
      this.d_backdress1.visible=true;
      this.d_dress1.visible=true;
      this.d_dress11.visible=false;
      this.cnt2++
      this.d_backdress1.loadTexture('d_backdress'+this.cnt2);
      this.d_dress1.loadTexture('d_dress'+this.cnt2);
      Main.d_array[1]=this.cnt2;
      if(this.cnt2==6){
      	this.cnt2=0;
      }
       
       this.d1_arr[0]=1;
       if(this.d1_arr.indexOf(0)<0){
        game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},400,Phaser.Easing.Bounce.Out,true);
        }
        effectssd = game.add.sprite(220,370,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
        evt.destroy();
         },this);

        },this);
      this.d_pgroup.add(this.icon2);

/////////////////////

      this.cnt3=0;
      this.icon3=game.add.sprite(452,235,'icon3');
      // this.icon3=game.add.sprite(452,335,'icon3');
      this.icon3.anchor.setTo(0.5);
      this.icon3.inputEnabled=true;
      this.icon3.input.useHandCursor=true;
      this.icon3.events.onInputOver.add(this.btnOver,this);
      this.icon3.events.onInputOut.add(this.btnOut,this);
      this.icon3.events.onInputDown.add(function(){
      this.cnt3++
        this.d_shoe11.visible=false;
        this.d_shoe1.visible=true;
      this.d_shoe1.loadTexture('d_shoe'+this.cnt3);
      Main.d_array[2]=this.cnt3;
      if(this.cnt3==6){
      	this.cnt3=0;
      }
       
       this.d1_arr[1]=1;
       if(this.d1_arr.indexOf(0)<0){
        game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},400,Phaser.Easing.Bounce.Out,true);
        }
        effectssd = game.add.sprite(220,630,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
        evt.destroy();
         },this);

        },this);
      this.d_pgroup.add(this.icon3);

///////////////////////
      this.cnt4=0;
      this.icon4=game.add.sprite(452,335,'icon4');
      // this.icon4=game.add.sprite(452,435,'icon4');
      this.icon4.anchor.setTo(0.5);
      this.icon4.inputEnabled=true;
      this.icon4.input.useHandCursor=true;
      this.icon4.events.onInputOver.add(this.btnOver,this);
      this.icon4.events.onInputOut.add(this.btnOut,this);
      this.icon4.events.onInputDown.add(function(){
      this.d_earing1.alpha=1;
      this.d_earing11.alpha=1;
      // this.d_earing11.alpha=1;
      this.cnt4++
      this.d_earing1.loadTexture('d_earing'+this.cnt4);
      this.d_earing11.loadTexture('d_earing'+this.cnt4);
      // this.d_earing11.loadTexture('d_earing'+this.cnt4);
      Main.d_array[4]=this.cnt4;
      if(this.cnt4==6){
      	this.cnt4=0;
      }
       
       this.d1_arr[2]=1;
       if(this.d1_arr.indexOf(0)<0){
        game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},400,Phaser.Easing.Bounce.Out,true);
        }
        effectssd = game.add.sprite(220,220,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
        evt.destroy();
         },this);

        },this);
      this.d_pgroup.add(this.icon4);

///////////////////////

      this.cnt5=0;
      this.icon5=game.add.sprite(452,435,'icon5');
      // this.icon5=game.add.sprite(452,535,'icon5');
      this.icon5.anchor.setTo(0.5);
      this.icon5.inputEnabled=true;
      this.icon5.input.useHandCursor=true;
      this.icon5.events.onInputOver.add(this.btnOver,this);
      this.icon5.events.onInputOut.add(this.btnOut,this);
      this.icon5.events.onInputDown.add(function(){
        this.d_neckles1.alpha=1;
      this.cnt5++
      this.d_neckles1.loadTexture('d_neckles'+this.cnt5);
      Main.d_array[3]=this.cnt5;
      if(this.cnt5==6){
      	this.cnt5=0;
      }
       
       this.d1_arr[3]=1;
       if(this.d1_arr.indexOf(0)<0){
        game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},400,Phaser.Easing.Bounce.Out,true);
        }
        effectssd = game.add.sprite(220,270,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
        evt.destroy();
         },this);

        },this);
      this.d_pgroup.add(this.icon5);

///////////////////////

      this.cnt6=0;
      this.icon6=game.add.sprite(452,535,'icon6');
      // this.icon6=game.add.sprite(452,635,'icon6');
      this.icon6.anchor.setTo(0.5);
      this.icon6.inputEnabled=true;
      this.icon6.input.useHandCursor=true;
      this.icon6.events.onInputOver.add(this.btnOver,this);
      this.icon6.events.onInputOut.add(this.btnOut,this);
      this.icon6.events.onInputDown.add(function(){
        // this.h1crow10001.alpha=1;
        this.d1_crown1.alpha=1;
        // this.h2crow10001.alpha=1;
        // this.h3crow10001.alpha=1;
        // this.h4crow10001.alpha=1;
        // this.h5crow10001.alpha=1;
        // this.h6crow10001.alpha=1;
      this.cnt6++
      // this.h1crow10001.loadTexture('h1crow1000'+this.cnt6);
      this.d1_crown1.loadTexture('d1_crown'+this.cnt6);
      // this.h3crow10001.loadTexture('h3crow1000'+this.cnt6);
      // this.h4crow10001.loadTexture('h4crow1000'+this.cnt6);
      // this.h5crow10001.loadTexture('h5crow1000'+this.cnt6);
      // this.h6crow10001.loadTexture('h6crow1000'+this.cnt6);
      Main.d_array[5]=this.cnt6;
      if(this.cnt6==6){
      	this.cnt6=0;
      }

   // if (Main.d_array[0]==1) {
   //    	this.h1crow10001.visible=true;
   //    	this.h2crow10001.visible=false;
   //    	this.h3crow10001.visible=false;
   //    	this.h4crow10001.visible=false;
   //    	this.h5crow10001.visible=false;
   //    	this.h6crow10001.visible=false;
   //    }

   //      if (Main.d_array[0]==2) {
   //    	this.h1crow10001.visible=false;
   //    	this.h2crow10001.visible=true;
   //    	this.h3crow10001.visible=false;
   //    	this.h4crow10001.visible=false;
   //    	this.h5crow10001.visible=false;
   //    	this.h6crow10001.visible=false;
   //    }

   //      if (Main.d_array[0]==3) {
   //    	this.h1crow10001.visible=false;
   //    	this.h2crow10001.visible=false;
   //    	this.h3crow10001.visible=true;
   //    	this.h4crow10001.visible=false;
   //    	this.h5crow10001.visible=false;
   //    	this.h6crow10001.visible=false;
   //    }

   //     if (Main.d_array[0]==4) {
   //    	this.h1crow10001.visible=false;
   //    	this.h2crow10001.visible=false;
   //    	this.h3crow10001.visible=false;
   //    	this.h4crow10001.visible=true;
   //    	this.h5crow10001.visible=false;
   //    	this.h6crow10001.visible=false;
   //    }

   //      if (Main.d_array[0]==5) {
   //    	this.h1crow10001.visible=false;
   //    	this.h2crow10001.visible=false;
   //    	this.h3crow10001.visible=false;
   //    	this.h4crow10001.visible=false;
   //    	this.h5crow10001.visible=true;
   //    	this.h6crow10001.visible=false;
   //    }

   //      if (Main.d_array[0]==6) {
   //    	this.h1crow10001.visible=false;
   //    	this.h2crow10001.visible=false;
   //    	this.h3crow10001.visible=false;
   //    	this.h4crow10001.visible=false;
   //    	this.h5crow10001.visible=false;
   //    	this.h6crow10001.visible=true;
   //    }

       
       this.d1_arr[4]=1;
       if(this.d1_arr.indexOf(0)<0){
        game.add.tween(this.playbtn.scale).to({x:0.75,y:0.75},400,Phaser.Easing.Bounce.Out,true);
        }
        effectssd = game.add.sprite(220,180,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
        evt.destroy();
         },this);

        },this);
      this.d_pgroup.add(this.icon6);


////////////////////////////////////////////////////////////////////////////////

         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.75);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(400,730,'btn2');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(410,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('final_screen');
   // game.state.start('final_screen');
         });
   
   },
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////mmmmmmmmmmmmmmmmmm

Main.menu = function(){}

Main.menu.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0,0,'introbg');
        this.levelGroup.add(this.introbg);
        
        
         this.morebtn = game.add.sprite(85,730,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
        
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   YYGSDK.navigate("game","logo");
},
moreLink:function(){
   YYGSDK.navigate("game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   MyShowAD('elsaScreen');
         });
   
   },
}

// ffffffffff

Main.final_screen = function(){}

Main.final_screen.prototype = {
    create:function(){

        this.d_bg = game.add.sprite(0,0,'d_bg');

        this.barbie = game.add.sprite(-260,400,'barbie');
        // this.barbie = game.add.sprite(160,400,'barbie');
        this.barbie.anchor.setTo(0.5);

   ///////////////////////////////////////////////////////////////////////////////////////////// 

        this.kellygrp=game.add.group();
        this.kellygrp.scale.setTo(0.7);
        this.kellygrp.x=200;
        this.kellygrp.y=260;

        this.d_backdress1 = game.add.sprite(186,293,'d_backdress'+Main.d_array[1]);
        this.d_backdress1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_backdress1);

        this.d_body = game.add.sprite(0,0,'d_body');
        this.kellygrp.add(this.d_body);

        this.dressup_headgrp=game.add.group();
        this.dressup_headgrp.scale.setTo(0.7);
        this.dressup_headgrp.x=10;
        this.dressup_headgrp.y=8;
        this.kellygrp.add(this.dressup_headgrp);

        this.d_shoe1 = game.add.sprite(186,300,'d_shoe'+Main.d_array[2]);
        this.d_shoe1.anchor.setTo(0.5);
        this.d_shoe1.scale.setTo(0.8);
        this.kellygrp.add(this.d_shoe1);

        this.headgrp=game.add.group();
        this.headgrp.scale.setTo(0.6);
        this.headgrp.x=217;
        this.headgrp.y=276;

        this.d_head3 = game.add.sprite(113,65,'d_head3');
        this.dressup_headgrp.add(this.d_head3);
        this.kellygrp.add(this.d_head3);
        this.headgrp.add(this.d_head3);

        this.d_dress1 = game.add.sprite(186,293,'d_dress'+Main.d_array[1]);
        this.d_dress1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_dress1);


        this.d_neckles1 = game.add.sprite(203,321,'d_neckles'+Main.d_array[3]);
        this.d_neckles1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_neckles1);

        this.d_hair1 = game.add.sprite(180,139.6,'d_hair1');
        this.d_hair1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_hair1);
        this.headgrp.add(this.d_hair1);

      
        this.d_earing1 = game.add.sprite(179,332,'d_earing'+Main.d_array[4]);
        this.d_earing1.anchor.setTo(0.5);
        this.kellygrp.add(this.d_earing1);
        this.headgrp.add(this.d_earing1);

        this.d_earing11 = game.add.sprite(85,332,'d_earing'+Main.d_array[4]);
        this.d_earing11.anchor.setTo(0.5);
        this.kellygrp.add(this.d_earing11);
        this.headgrp.add(this.d_earing11);

        this.d1_crown1 = game.add.sprite(190,305,'d1_crown'+Main.d_array[5]);
        this.d1_crown1.anchor.setTo(0.5);
        this.kellygrp.add(this.d1_crown1);
        this.headgrp.add(this.d1_crown1);

   /////////////////////////////////////////////////////////////////////////////////////////////     
   /////////////////////////////////////////////////////////////////////////////////////////////  

       this.kellypop10003 = game.add.sprite(320,200,'kellypop10003');
       this.kellypop10003.anchor.setTo(0.5);
       // this.kellypop10003.scale.setTo(0.8);
       this.kellypop10003.scale.setTo(0);

       this.barbiepop10006 = game.add.sprite(280,110,'barbiepop10006');
       this.barbiepop10006.anchor.setTo(0.5);
       // this.barbiepop10006.scale.setTo(0.8);
       this.barbiepop10006.scale.setTo(0);

       this.kellypop10004 = game.add.sprite(320,200,'kellypop10004');
       this.kellypop10004.anchor.setTo(0.5);
       // this.kellypop10004.scale.setTo(0.8);
       this.kellypop10004.scale.setTo(0);


   /////////////////////////////////////////////////////////////////////////////////////////////     
   /////////////////////////////////////////////////////////////////////////////////////////////     
        
        
         this.morebtn = game.add.sprite(85,730,'btn4');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.74);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);

         this.playbtn = game.add.sprite(430,730,'btn1');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         
            this.thumbGroup=game.add.group();
            game.load.crossOrigin='*';
            this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(167, 652, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true
            this.thumbVar.input.useHandCursor = true;
            this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(165, 650, 'Tump_frame'); 
            this.thumbVar.height=this.thumbframeVar.height-2;
            this.thumbVar.width=this.thumbframeVar.width-2;
            this.thumbGroup.add(this.thumbVar);
            this.thumbGroup.add(this.thumbframeVar);
            this.thumbGroup.y=150;
         
      
      if (Main.shutterOn[0]) {
         this.shutter = game.add.sprite(0,0,'titlebg');
         game.add.tween(this.shutter).to({y:-850}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){

         game.add.tween(this.barbie).to({x:160},1200, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.kellypop10003.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.kellypop10003.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){

         game.add.tween(this.barbiepop10006.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true,50).onComplete.add(function(){
         game.add.tween(this.barbiepop10006.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){

         game.add.tween(this.kellypop10004.scale).to({x:0.8,y:0.8},700, Phaser.Easing.Quadratic.Out, true,50).onComplete.add(function(){
         game.add.tween(this.kellypop10004.scale).to({x:0,y:0},700, Phaser.Easing.Quadratic.Out, true,3800).onComplete.add(function(){

          game.add.tween(this.thumbGroup).to({y:0},700,Phaser.Easing.Quadratic.Out,true);
          game.add.tween(this.playbtn.scale).to({x:0.74,y:0.74},700,Phaser.Easing.Quadratic.Out,true);

         },this);
         },this);
         },this);
         },this);
         },this);
         },this);
         },this);
         },this);
        }
        
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(424,5,"soundicon");
         this.musicButton.scale.setTo(0.7);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
thumbLink:function()
{
   YYGSDK.navigate("gameover","thumb",RelatedGames[this.randomId]['id']);
},       
openLink:function()
{
   YYGSDK.navigate("gameover","logo");
},
moreLink:function()
{
   YYGSDK.navigate("gameover","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
   game.add.tween(this.shutter).to({y:0}, 2000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   Main.d_array=[1,1,1,1,1,1];

   MyShowAD('intro');
       });
   
   },
}

function MyShowAD(state){
  Main.music.pause();
   // 展示插屏广告
   HUHU_showInterstitialAd();

   // 继续游戏
   game.state.start(state);Main.music.resume();
   return;
//   YYGSDK.adsManager.request(YYG.TYPE.INTERSTITIAL,YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();}),YYG.EventHandler.create(this,()=>{game.state.start(state);Main.music.resume();})); 
}



game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('jump_scean1', Main.jump_scean1);
game.state.add('surgery', Main.surgery);
game.state.add('first_pop', Main.first_pop);
game.state.add('surgry_pop', Main.surgry_pop);
game.state.add('meakup1', Main.meakup1);
game.state.add('makeup_remove', Main.makeup_remove);
game.state.add('meakup2', Main.meakup2);
game.state.add('dressup_popup1', Main.dressup_popup1);
game.state.add('dressup_popup2', Main.dressup_popup2);
game.state.add('dressup', Main.dressup);
game.state.add('final_screen', Main.final_screen);

game.state.start('boot');