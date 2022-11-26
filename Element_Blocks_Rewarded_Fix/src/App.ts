///<reference path="scale/CustomScaleManager.ts"/>
///<reference path="utils/RenderUtils.ts"/>
///<reference path="Settings.ts"/>
namespace BlockPuzzle {
    export class App extends Phaser.Game {
        public static instance: App;

        public static gameConfig = {
            width: CustomScaleManager.ORIGINAL_WIDTH,
            height: CustomScaleManager.ORIGINAL_HEIGHT,
            renderer: RenderUtils.detectRenderMode(),
            transparent: true,
            enableDebug: false
        };

        constructor() {
            super(App.gameConfig);

            App.instance = this;

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Level', Level, false);

            this.state.start('Boot');
        }

        public navigateToSponsor() {
            if(Settings.ENABLE_API) {
                (<any>window).famobi.moreGamesLink();
            }
        }

        public pauseGame() {
            SoundController.instance.pauseAudio();
            this.paused = true;
            console.log('pausing game...');
        }

        public unpauseGame(force: boolean = false) {
            if (isPageVisible && (!adIsShowing || force)) {
                this.paused = false;
                SoundController.instance.resumeAudio();
                console.log('resuming game...');
            } else {
                console.log('resuming game is not allowed now because ads are displaying or page isn\'t visible...');
            }
        }
    }
}
var game;
var isPageVisible: boolean = true;
var adIsShowing: boolean = false;

//famobi pause/resume requests
window['famobi_onPauseRequested'] = function () {
    adIsShowing = true;
    if (game) {
        game.pauseGame();
    }
};

window['famobi_onResumeRequested'] = function () {
    adIsShowing = false;
    if (game) {
        game.unpauseGame();
    }
};

//visiblity
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}

function handleVisibilityChange() {
    if (document[hidden]) {
        isPageVisible = false;
        if (game && !adIsShowing) game.pauseGame();
    } else {
        isPageVisible = true;
        if (game && !adIsShowing) game.unpauseGame();
    }
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("Browser doesn't support the Page Visibility API.");
} else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

