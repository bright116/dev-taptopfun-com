var BlockPuzzle;
(function (BlockPuzzle) {
    let LayoutType;
    (function (LayoutType) {
        LayoutType[LayoutType["PORTRAIT"] = 0] = "PORTRAIT";
        LayoutType[LayoutType["SQUARED"] = 1] = "SQUARED";
        LayoutType[LayoutType["LANDSCAPE"] = 2] = "LANDSCAPE";
    })(LayoutType = BlockPuzzle.LayoutType || (BlockPuzzle.LayoutType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="../enum/LayoutType.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class CustomScaleManager {
        static update(width, height) {
            this.WIDTH = width;
            this.HEIGHT = height;
            const screenRatio = this.getScreenRatio();
            if (screenRatio <= this.PORTRAIT_RATIO) {
                /* fully portrait */
                this.LAYOUT = BlockPuzzle.LayoutType.PORTRAIT;
                this.SCALE_X = this.SCALE_Y = width / this.ORIGINAL_WIDTH;
                this.UPSCALE_FACTOR = 1;
            }
            else if (screenRatio >= this.LANDSCAPE_RATIO) {
                /* fully landscape */
                this.LAYOUT = BlockPuzzle.LayoutType.LANDSCAPE;
                this.UPSCALE_FACTOR = BlockPuzzle.App.instance.device.desktop ? 1 : Math.pow(screenRatio / this.ORIGINAL_RATIO, 0.35);
                this.SCALE_X = this.SCALE_Y = height / this.ORIGINAL_HEIGHT * this.UPSCALE_FACTOR;
            }
            else {
                /* quite squared */
                this.LAYOUT = BlockPuzzle.LayoutType.SQUARED;
                this.UPSCALE_FACTOR = BlockPuzzle.App.instance.device.desktop ? 1 : Math.pow(screenRatio / this.ORIGINAL_RATIO, 0.55);
                this.SCALE_X = this.SCALE_Y = height / this.ORIGINAL_HEIGHT * this.UPSCALE_FACTOR;
            }
            if (BlockPuzzle.App.instance.scale.scaleMode != Phaser.ScaleManager.RESIZE) {
                BlockPuzzle.App.instance.state.getCurrentState().resize(BlockPuzzle.App.instance.width, BlockPuzzle.App.instance.height);
            }
            BlockPuzzle.BackgroundManager.instance.resize();
            BlockPuzzle.WindowManager.instance.resize();
            BlockPuzzle.TransitionScreen.instance.resize();
        }
        static getLayout() {
            return this.LAYOUT;
        }
        static isLandscape() {
            return this.getLayout() === BlockPuzzle.LayoutType.LANDSCAPE;
        }
        static isPortrait() {
            return this.getLayout() === BlockPuzzle.LayoutType.PORTRAIT;
        }
        static isSquared() {
            return this.getLayout() === BlockPuzzle.LayoutType.SQUARED;
        }
        static getScaleMode() {
            return BlockPuzzle.Settings.USE_HIGH_RESOLUTION_SCALING ? Phaser.ScaleManager.USER_SCALE : Phaser.ScaleManager.RESIZE;
        }
        static getPixelRatio() {
            return BlockPuzzle.App.instance.device.desktop || !BlockPuzzle.Settings.USE_HIGH_RESOLUTION_SCALING ? 1 : Math.min(BlockPuzzle.App.instance.device.pixelRatio, BlockPuzzle.Settings.PIXEL_RATIO_MAX_THRESHOLD);
        }
        static getScreenRatio() {
            return this.WIDTH / this.HEIGHT;
        }
    }
    CustomScaleManager.PORTRAIT_RATIO = 720 / 960;
    CustomScaleManager.LANDSCAPE_RATIO = 1366 / 960;
    CustomScaleManager.ORIGINAL_WIDTH = 640;
    CustomScaleManager.ORIGINAL_HEIGHT = 960;
    CustomScaleManager.WIDTH = 640;
    CustomScaleManager.HEIGHT = 960;
    CustomScaleManager.LAYOUT = BlockPuzzle.LayoutType.PORTRAIT;
    CustomScaleManager.SCALE_X = 1;
    CustomScaleManager.SCALE_Y = 1;
    CustomScaleManager.UPSCALE_FACTOR = 1;
    CustomScaleManager.ORIGINAL_RATIO = CustomScaleManager.ORIGINAL_WIDTH / CustomScaleManager.ORIGINAL_HEIGHT;
    BlockPuzzle.CustomScaleManager = CustomScaleManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class RenderUtils {
        static detectRenderMode() {
            const isIE = window.navigator.userAgent.indexOf('MSIE ') > 0 || window.navigator.userAgent.indexOf('Trident/') > 0;
            const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            const isIPhone = window.navigator.userAgent.indexOf('iPhone ') > -1;
            return isIE || isFirefox || isIPhone ? Phaser.CANVAS : Phaser.AUTO;
        }
    }
    BlockPuzzle.RenderUtils = RenderUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Settings {
    }
    //SCALING
    Settings.USE_HIGH_RESOLUTION_SCALING = true;
    Settings.PIXEL_RATIO_MAX_THRESHOLD = 3;
    //FONTS
    Settings.DEFAULT_FONT_FAMILY = 'Kanit';
    //WINDOWS
    Settings.WINDOW_BACKGROUND_ALPHA = 0.975;
    Settings.REVIVE_WINDOW_TIMER = 60;
    Settings.RESULTS_WINDOW_TIMER = 85;
    Settings.RESULTS_WINDOW_TIMER_WITHOUT_REVIVE = 110;
    //ATLASES
    Settings.PRELOADER_ATLAS = 'preloader';
    Settings.GAME_ATLAS = 'assets';
    Settings.ANIMATION_ATLAS = 'animations';
    //BOARD
    Settings.BOARD_ROWS = 8;
    Settings.BOARD_COLS = 8;
    Settings.CELL_WIDTH = 75;
    Settings.CELL_HEIGHT = Settings.CELL_WIDTH;
    Settings.FIGURE_VIEW_DRAGGING_DELTA = -160;
    Settings.FIGURE_VIEW_SPACING = 5;
    //FIGURES
    Settings.DEFAULT_FIGURE_SCALE = 0.4;
    Settings.DRAGGING_FIGURE_SCALE = 0.88;
    Settings.FINAL_FIGURE_SCALE = 1.0;
    Settings.FIGURE_APPEARING_DURATION = 350;
    Settings.FIGURE_APPEARING_DELAY = 120;
    Settings.FIGURE_RETURNING_SPEED = 2000;
    Settings.FIGURE_PICK_UP_TWEEN_DURATION = 70;
    Settings.FIGURE_DISPOSING_TWEEN_DURATION = 250;
    Settings.NOT_APPLICABLE_FIGURE_APLHA = 0.475;
    //BLOCKS
    Settings.BLOCK_DESTROY_ANIMATION_DELAY = 65;
    Settings.BLOCK_DISAPPEARING_DURATION = 180;
    Settings.PICK_RANDOM_EXPLOSION_STARTING_POINT = true;
    Settings.SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS = true;
    Settings.STAR_SHINING_TWEEN_DURATION = 1400; //ms
    Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION = 750; //ms
    Settings.BLOCK_DEACTIVATION_TWEEN_DURATION = 400;
    Settings.BLOCK_ACTIVATION_TWEEN_DURATION = 250;
    //DIFFICULTY
    Settings.DIFFICULTY_FACTOR = difficulty_level;
    //POWERUPS
    Settings.POWERUP_USAGE_COUNTDOWN_WHEN_NO_MOVES_LEFT = 6 * 1000; // milliseconds
    Settings.BOMB_PRICE = bomb_powerup_basic_price;
    Settings.BOMB_PRICE_STEP = bomb_powerup_price_step;
    Settings.LIGHTNING_PRICE = lightning_powerup_basic_price;
    Settings.LIGHTNING_PRICE_STEP = lightning_powerup_price_step;
    Settings.POWERUP_HIGHLIGHTING_ALPHA = 0.3;
    Settings.POWERUP_DRAGGING_DELTA = -100;
    Settings.LIGHTING_DELAY_BETWEEN_STRIKES = 8;
    Settings.LIGHTING_MIN_TARGETS = 3;
    Settings.LIGHTING_MAX_TARGETS = 5;
    //REVIVE
    Settings.REVIVE_TIMER_DURATION = 10500;
    //SCORES
    Settings.BASIC_LINE_DESTROYING_REWARD = 10;
    //SCORES MULTIPLIER
    Settings.MULTIPLIER_MILESTONES = [100, 500, 3000, 14400, 72000, 340000, 1500000, 6000000, 20000000, 100000000];
    //FIGURE GENERATOR
    Settings.GENERATE_MAX_FIGURES_PER_ITERATION = 25;
    Settings.GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE = 1;
    Settings.RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR = 1.85;
    Settings.MISTAKE_PROBABILITY_BASIC_STEP = 0.025;
    Settings.MISTAKE_PROBABILITY_STEP_SPEED = 0.005;
    Settings.MISTAKE_MAX_PROBABILITY = 0.1;
    Settings.MISTAKE_IMMUNITY_MIN_MOVES = 5;
    Settings.MISTAKE_IMMUNITY_MAX_MOVES = 10;
    //STARS GENERATOR
    Settings.SKIP_STARS_GENERATION_FOR_FIRST_X_MOVES = 5;
    Settings.BASIC_STAR_GENERATION_PROBABILITY = 0.02;
    Settings.BASIC_STAR_GENERATION_PROBABILITY_STEP = 0.0065;
    Settings.ADDITIONAL_SECOND_STAR_GENERATION_PROBABILITY = 0.01;
    Settings.ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES = 0.02;
    Settings.MAX_STAR_GENERATING_PROBABILITY = 0.3;
    Settings.STAR_GENERATION_DELAY = 1000;
    Settings.MAX_STARS_ON_BOARD_SIMULTANEOUSLY = 3;
    //RESULTS REWARD
    Settings.RESULTS_DOUBLE_STARS_REWARD = results_watch_video_reward;
    //GET STARS BUTTON
    Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = 0;
    Settings.GET_STARS_BUTTON_COOLDOWN = get_stars_button_cooldown; // seconds
    Settings.GET_STARS_BUTTON_ENABLED = get_stars_button_cooldown > 0;
    Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT = get_stars_button_basic_reward; //stars
    Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP = get_stars_button_reward_step; //stars
    //ACHIEVEMENT_INFORMER
    Settings.ACHIEVEMENT_INFORMER_VISIBILITY_DURATION = 5 * 1000; //milliseconds
    //TUTORIAL
    Settings.TUTORIAL_COMPLETED = false;
    //SETTINGS
    Settings.GAME_VERSION = "3";
    Settings.ENABLE_API = true;
    Settings.RELEASE_BUILD = true;
    Settings.MUSIC_ENABLED_BY_DEFAULT = true;
    Settings.LOCAL_STORAGE_KEY = 'Element_Blocks' + Settings.GAME_VERSION;
    BlockPuzzle.Settings = Settings;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="scale/CustomScaleManager.ts"/>
///<reference path="utils/RenderUtils.ts"/>
///<reference path="Settings.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class App extends Phaser.Game {
        constructor() {
            super(App.gameConfig);
            App.instance = this;
            this.state.add('Boot', BlockPuzzle.Boot, false);
            this.state.add('Preloader', BlockPuzzle.Preloader, false);
            this.state.add('Level', BlockPuzzle.Level, false);
            this.state.start('Boot');
        }
        navigateToSponsor() {
            if (BlockPuzzle.Settings.ENABLE_API) {
                window.famobi.moreGamesLink();
            }
        }
        pauseGame() {
            BlockPuzzle.SoundController.instance.pauseAudio();
            this.paused = true;
            console.log('pausing game...');
        }
        unpauseGame(force = false) {
            if (isPageVisible && (!adIsShowing || force)) {
                this.paused = false;
                BlockPuzzle.SoundController.instance.resumeAudio();
                console.log('resuming game...');
            }
            else {
                console.log('resuming game is not allowed now because ads are displaying or page isn\'t visible...');
            }
        }
    }
    App.gameConfig = {
        width: BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH,
        height: BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT,
        renderer: BlockPuzzle.RenderUtils.detectRenderMode(),
        transparent: true,
        enableDebug: false
    };
    BlockPuzzle.App = App;
})(BlockPuzzle || (BlockPuzzle = {}));
var game;
var isPageVisible = true;
var adIsShowing = false;
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
}
else if (typeof document["msHidden"] !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
}
else if (typeof document["webkitHidden"] !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
    if (document[hidden]) {
        isPageVisible = false;
        if (game && !adIsShowing)
            game.pauseGame();
    }
    else {
        isPageVisible = true;
        if (game && !adIsShowing)
            game.unpauseGame();
    }
}
// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
    console.log("Browser doesn't support the Page Visibility API.");
}
else {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
var BlockPuzzle;
(function (BlockPuzzle) {
    class AchievementsManager {
        constructor() {
            this.onAchievementCompleted = new Phaser.Signal();
            this.achievementModels = [
                {
                    key: BlockPuzzle.AchievementType.TOTAL_SCORES,
                    name: 'Total scores reached',
                    currentValue: 0,
                    requiredValues: [35000, 105000, 225000],
                    rewards: [20, 31, 52],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.TOTAL_STARS,
                    name: 'Total stars picked up',
                    currentValue: 0,
                    requiredValues: [50, 180, 365],
                    rewards: [23, 34, 55],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.TOTAL_LEVEL_UPS,
                    name: 'Level-ups collected',
                    currentValue: 0,
                    requiredValues: [25, 75, 150],
                    rewards: [26, 37, 58],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.TOTAL_GREATS,
                    name: 'Great inscriptions appeared',
                    currentValue: 0,
                    requiredValues: [5, 30, 60],
                    rewards: [8, 19, 40],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.BOMB_EXPLOSIONS,
                    name: 'Bomb explosions',
                    currentValue: 0,
                    requiredValues: [5, 20, 75],
                    rewards: [17, 28, 49],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.LINES_DESTROYED,
                    name: 'Destroyed lines',
                    currentValue: 0,
                    requiredValues: [240, 720, 1600],
                    rewards: [14, 25, 46],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.BLOCKS_PLACED,
                    name: 'Blocks placed at the board',
                    currentValue: 0,
                    requiredValues: [1600, 6400, 15000],
                    rewards: [11, 22, 43],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.FIRE_BLOCKS_DESTROYED,
                    name: 'Red blocks destroyed',
                    currentValue: 0,
                    requiredValues: [350, 1050, 2250],
                    rewards: [17, 28, 49],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                },
                {
                    key: BlockPuzzle.AchievementType.BEST_SCORE_REACHED,
                    name: 'Best score reached',
                    currentValue: 0,
                    requiredValues: [6000, 10000, 16000],
                    rewards: [5, 16, 37],
                    achieved: [false, false, false],
                    rewardClaimed: [false, false, false]
                }
            ];
        }
        static get instance() {
            return AchievementsManager._instance ? AchievementsManager._instance :
                AchievementsManager._instance = new AchievementsManager();
        }
        loadAchievementsState(states) {
            states.forEach(state => {
                const model = this.getAchievementModel(state.key);
                if (model) {
                    model.currentValue = state.currentValue;
                    model.achieved = state.achieved.slice();
                    model.rewardClaimed = state.rewardClaimed.slice();
                }
            });
        }
        getAchievementsStates() {
            return this.achievementModels.map(model => {
                return { key: model.key, currentValue: model.currentValue, achieved: model.achieved.slice(), rewardClaimed: model.rewardClaimed.slice() };
            });
        }
        saveMedalsState() {
            BlockPuzzle.LocalStorageController.instance.save();
        }
        getAchievementModel(key) {
            return this.achievementModels.find(medal => medal.key == key);
        }
        addValue(key, value, save = true) {
            const model = this.getAchievementModel(key);
            if (model) {
                const prevLevel = AchievementsManager.getAchievementLevel(model);
                model.currentValue += value;
                const currentLevel = AchievementsManager.getAchievementLevel(model);
                if (currentLevel > prevLevel) {
                    this.onAchievementCompleted.dispatch(model);
                    BlockPuzzle.SoundController.instance.playAchievementClaimedSound();
                }
                if (save) {
                    this.saveMedalsState();
                }
            }
        }
        setValue(key, value, save = true) {
            const model = this.getAchievementModel(key);
            if (model && value > model.currentValue) {
                const prevLevel = AchievementsManager.getAchievementLevel(model);
                model.currentValue = value;
                const currentLevel = AchievementsManager.getAchievementLevel(model);
                if (currentLevel > prevLevel) {
                    this.onAchievementCompleted.dispatch(model);
                    BlockPuzzle.SoundController.instance.playAchievementClaimedSound();
                }
                if (save) {
                    this.saveMedalsState();
                }
            }
        }
        hasAvailableRewards() {
            let rewardAvailable = false;
            this.achievementModels.forEach(model => {
                if (model.currentValue >= model.requiredValues[0] && !model.rewardClaimed[0]) {
                    rewardAvailable = true;
                }
                else if (model.currentValue >= model.requiredValues[1] && !model.rewardClaimed[1]) {
                    rewardAvailable = true;
                }
                else if (model.currentValue >= model.requiredValues[2] && !model.rewardClaimed[2]) {
                    rewardAvailable = true;
                }
            });
            return rewardAvailable;
        }
        /**
         * STATIC
         */
        static getAchievementLevel(model) {
            return model.currentValue >= model.requiredValues[2] ? 3 : model.currentValue >= model.requiredValues[1] ? 2 : model.currentValue >= model.requiredValues[0] ? 1 : 0;
        }
    }
    AchievementsManager._instance = null;
    BlockPuzzle.AchievementsManager = AchievementsManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class APIUtils {
        static get instance() {
            return APIUtils._instance ? APIUtils._instance :
                APIUtils._instance = new APIUtils();
        }
        isRewardedVideoFeatureEnabled() {
            return !!enable_rewarded_videos;
        }
        hasRewardedVideo() {
            if (BlockPuzzle.Settings.ENABLE_API && this.isRewardedVideoFeatureEnabled() && window["famobi"].hasRewardedAd)
                return window["famobi"].hasRewardedAd();
            else
                return false;
        }
        showRewardedVideo(callback) {
            if (BlockPuzzle.Settings.ENABLE_API && this.isRewardedVideoFeatureEnabled()) {
                window.famobi.rewardedAd(callback);
            }
            else {
                callback();
            }
        }
        /* Tracking stats */
        trackStats(key, value, incrementOnly = false) {
            const currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
            const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
            const oldValue = trackableStats[key] || 0;
            if (incrementOnly && value <= oldValue) {
                return;
            }
            trackableStats[key] = value;
            currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));
            if (window.famobi_analytics && window.famobi_analytics.trackStats) {
                window.famobi_analytics.trackStats(key, value);
            }
        }
        ;
        trackStatsChange(key, delta) {
            const currentLocalStorage = (window.famobi && window.famobi.localStorage) ? window.famobi.localStorage : window.localStorage;
            const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
            trackableStats[key] = (trackableStats[key] || 0) + delta;
            currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));
            if (window.famobi_analytics && window.famobi_analytics.trackStats) {
                window.famobi_analytics.trackStats(key, trackableStats[key]);
            }
        }
        ;
        showAds(callback, timeout = 0) {
            if (BlockPuzzle.Settings.ENABLE_API) {
                if (timeout == 0) {
                    window.famobi.showAd(callback);
                }
                else {
                    setTimeout(function () {
                        window.famobi.showAd(callback);
                    }, timeout);
                }
            }
            else {
                callback();
            }
        }
    }
    APIUtils._instance = null;
    BlockPuzzle.APIUtils = APIUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Analytics {
        static get instance() {
            return Analytics._instance ? Analytics._instance :
                Analytics._instance = new Analytics();
        }
        initUser() {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let data = JSON.parse(this.response).data;
                    let uid = data.uid;
                    let splitTests = data.splitTests;
                    Analytics.initialized = true;
                    Analytics.USER_ID = uid;
                    console.log('UID #', uid);
                }
            };
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/user", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
            xhttp.send(JSON.stringify({ 'locale': (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator["userLanguage"] || navigator.language || navigator["browserLanguage"] || 'en' }));
        }
        startLevel() {
            if (!Analytics.initialized) {
                return;
            }
            let data = {
                'level': 1
            };
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/start", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID);
            xhttp.send(JSON.stringify(data));
        }
        finishLevel(score, stars, revives, powerups) {
            if (!Analytics.initialized) {
                return;
            }
            var data = {
                'success': false,
                'score': score,
                'stars': stars,
                'revives': revives,
                'powerups': powerups
            };
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/end", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID);
            xhttp.send(JSON.stringify(data));
        }
        updateLevelData(params) {
            if (!Analytics.initialized) {
                return;
            }
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/update", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID);
            xhttp.send(JSON.stringify(params));
        }
    }
    Analytics._instance = null;
    Analytics.USER_ID = undefined;
    Analytics.initialized = false;
    BlockPuzzle.Analytics = Analytics;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BackgroundManager extends Phaser.Group {
        constructor() {
            super(BlockPuzzle.App.instance, null);
            this.containerWidth = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
            this.containerHeight = BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT;
            this.leafs = [];
            this.isInitialized = false;
            this.leafAnchors = [
                new Phaser.Point(1, 0.85),
                new Phaser.Point(0.9, 1),
                new Phaser.Point(0.93, 1),
                new Phaser.Point(0.05, 1),
                new Phaser.Point(0, 1),
                new Phaser.Point(0.0875, 0.98)
            ];
            BlockPuzzle.App.instance.stage.addChildAt(this, 0);
            this.container = this.add(BlockPuzzle.App.instance.make.group());
            this.topLeftContainer = this.container.add(BlockPuzzle.App.instance.make.group());
            this.topRightContainer = this.container.add(BlockPuzzle.App.instance.make.group());
            this.bottomLeftContainer = this.container.add(BlockPuzzle.App.instance.make.group());
            this.bottomRightContainer = this.container.add(BlockPuzzle.App.instance.make.group());
            this.resize();
        }
        static get instance() {
            return BackgroundManager._instance ? BackgroundManager._instance : BackgroundManager._instance = new BackgroundManager();
        }
        buildChildren() {
            this.createLeaf(this.topLeftContainer, 1, -49.7, 3.1, -125.3009796142578, 1, -1);
            this.createLeaf(this.topLeftContainer, 4, -245.05, 42.25, 65.98316955566406);
            this.createLeaf(this.topLeftContainer, 5, -131.4, 19.85, 58.43214416503906);
            this.createLeaf(this.topRightContainer, 5, 138.2, -17.4, 107.98501586914063, 1, -1);
            this.createLeaf(this.topRightContainer, 2, 132, -39.6, -122.82777404785156);
            this.createLeaf(this.topRightContainer, 1, 76.55, -16.95, -49);
            this.createLeaf(this.topRightContainer, 4, 190.55, -50.05, -119.5193603515625);
            this.createLeaf(this.bottomLeftContainer, 5, -30.25, 100.15, -11.46099853515625);
            this.createLeaf(this.bottomLeftContainer, 4, -15.6, 159.1, -8.1023071289063);
            this.createLeaf(this.bottomLeftContainer, 6, -32.05, 113.05, 16.472152709960938);
            this.createLeaf(this.bottomLeftContainer, 1, -34.15, 66.85, 170.1315155029297, 1, -1);
            this.createLeaf(this.bottomRightContainer, 4, 100, 132.85, -32.889694213867188);
            this.createLeaf(this.bottomRightContainer, 3, 118.8, 137.6, -17.000503540039063);
            this.createLeaf(this.bottomRightContainer, 2, 123.6, 84.4, -46.802825927734375);
            this.createLeaf(this.bottomRightContainer, 1, 60.6, 61.8, 38.27931213378906);
        }
        createLeaf(parentContainer, leafID, x, y, angle, scaleX = 1, scaleY = 1) {
            let leaf = parentContainer.add(BlockPuzzle.App.instance.make.sprite(x, y, BlockPuzzle.Settings.PRELOADER_ATLAS, 'leaf' + leafID + '0000'));
            leaf.anchor.set(this.leafAnchors[leafID - 1].x, this.leafAnchors[leafID - 1].y);
            leaf.scale.set(scaleX, scaleY);
            const angleDispersion = BlockPuzzle.App.instance.rnd.realInRange(1, 3) * BlockPuzzle.App.instance.rnd.sign();
            const duration = BlockPuzzle.App.instance.rnd.integerInRange(2800, 5000);
            leaf.angle = angle + angleDispersion;
            leaf["shakeTween"] = BlockPuzzle.App.instance.tweens.create(leaf).to({ angle: angle - angleDispersion }, duration, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
            BlockPuzzle.App.instance.tweens.add(leaf["shakeTween"]);
            this.leafs.push(leaf);
        }
        handleStateChanged() {
            if (this.isInitialized) {
                this.leafs.forEach(leaf => {
                    leaf["shakeTween"].pendingDelete = false;
                });
            }
        }
        init() {
            this.buildChildren();
            this.isInitialized = true;
            this.resize();
        }
        resize() {
            if (this.isInitialized) {
                this.container.scale.set(BlockPuzzle.CustomScaleManager.SCALE_X, BlockPuzzle.CustomScaleManager.SCALE_Y);
                this.container.position.set(BlockPuzzle.CustomScaleManager.WIDTH / 2 - this.containerWidth * BlockPuzzle.CustomScaleManager.SCALE_X / 2, BlockPuzzle.CustomScaleManager.HEIGHT / 2 - this.containerHeight * BlockPuzzle.CustomScaleManager.SCALE_Y / 2);
                this.windowBounds = this.windowBounds || new BlockPuzzle.WindowBounds();
                this.windowBounds.set(-(BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2, (BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
                this.topLeftContainer.position.copyFrom(this.windowBounds.getPosition(-0.06, -0.01));
                this.topLeftContainer.alpha = 0.8;
                this.topRightContainer.position.copyFrom(this.windowBounds.getPosition(1.03, -0.025));
                this.topRightContainer.alpha = 0.8;
                this.bottomLeftContainer.position.copyFrom(this.windowBounds.getPosition(-0.05, 1));
                this.bottomLeftContainer.alpha = 0.9;
                this.bottomRightContainer.position.copyFrom(this.windowBounds.getPosition(1.04, 1));
                this.bottomRightContainer.alpha = 0.9;
            }
        }
    }
    BackgroundManager._instance = null;
    BlockPuzzle.BackgroundManager = BackgroundManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let AchievementType;
    (function (AchievementType) {
        AchievementType[AchievementType["TOTAL_SCORES"] = 1] = "TOTAL_SCORES";
        AchievementType[AchievementType["TOTAL_STARS"] = 2] = "TOTAL_STARS";
        AchievementType[AchievementType["TOTAL_LEVEL_UPS"] = 3] = "TOTAL_LEVEL_UPS";
        AchievementType[AchievementType["TOTAL_GREATS"] = 4] = "TOTAL_GREATS";
        AchievementType[AchievementType["BOMB_EXPLOSIONS"] = 5] = "BOMB_EXPLOSIONS";
        AchievementType[AchievementType["LINES_DESTROYED"] = 6] = "LINES_DESTROYED";
        AchievementType[AchievementType["BLOCKS_PLACED"] = 7] = "BLOCKS_PLACED";
        AchievementType[AchievementType["FIRE_BLOCKS_DESTROYED"] = 8] = "FIRE_BLOCKS_DESTROYED";
        AchievementType[AchievementType["BEST_SCORE_REACHED"] = 9] = "BEST_SCORE_REACHED";
    })(AchievementType = BlockPuzzle.AchievementType || (BlockPuzzle.AchievementType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let BlockColor;
    (function (BlockColor) {
        BlockColor[BlockColor["RED"] = 0] = "RED";
        BlockColor[BlockColor["GREEN"] = 1] = "GREEN";
        BlockColor[BlockColor["YELLOW"] = 2] = "YELLOW";
        BlockColor[BlockColor["BLUE"] = 3] = "BLUE";
        BlockColor[BlockColor["ORANGE"] = 4] = "ORANGE";
        BlockColor[BlockColor["WHITE"] = 5] = "WHITE";
        BlockColor[BlockColor["PURPLE"] = 6] = "PURPLE";
    })(BlockColor = BlockPuzzle.BlockColor || (BlockPuzzle.BlockColor = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let CellModelState;
    (function (CellModelState) {
        CellModelState[CellModelState["CELL_EMPTY"] = 0] = "CELL_EMPTY";
        CellModelState[CellModelState["CELL_BUSY"] = 1] = "CELL_BUSY";
        CellModelState[CellModelState["CELL_NEW"] = 2] = "CELL_NEW";
    })(CellModelState = BlockPuzzle.CellModelState || (BlockPuzzle.CellModelState = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let FigureState;
    (function (FigureState) {
        FigureState[FigureState["INACTIVE"] = 0] = "INACTIVE";
        FigureState[FigureState["DRAGGING"] = 1] = "DRAGGING";
        FigureState[FigureState["PLACED"] = 2] = "PLACED";
    })(FigureState = BlockPuzzle.FigureState || (BlockPuzzle.FigureState = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let InscriptionLevel;
    (function (InscriptionLevel) {
        InscriptionLevel["GOOD"] = "Good";
        InscriptionLevel["GREAT"] = "Great";
        InscriptionLevel["EXCELLENT"] = "Excellent";
        InscriptionLevel["AWESOME"] = "Awesome";
    })(InscriptionLevel = BlockPuzzle.InscriptionLevel || (BlockPuzzle.InscriptionLevel = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let PowerupType;
    (function (PowerupType) {
        PowerupType["BOMB"] = "Bomb";
        PowerupType["LIGHTNING"] = "Lightning";
    })(PowerupType = BlockPuzzle.PowerupType || (BlockPuzzle.PowerupType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    let WindowHeadingBackplateType;
    (function (WindowHeadingBackplateType) {
        WindowHeadingBackplateType[WindowHeadingBackplateType["SILVER"] = 0] = "SILVER";
        WindowHeadingBackplateType[WindowHeadingBackplateType["GOLD"] = 1] = "GOLD";
    })(WindowHeadingBackplateType = BlockPuzzle.WindowHeadingBackplateType || (BlockPuzzle.WindowHeadingBackplateType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BestScoreReachedEffectEmitter extends Phaser.Particles.Arcade.Emitter {
        constructor(x, y, maxParticles) {
            super(BlockPuzzle.App.instance, x, y, maxParticles);
            this.width = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
            this.height = 30;
            this.minParticleScale = 1;
            this.maxParticleScale = 1.4;
            this.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000'], maxParticles);
            this.gravity.set(0, 1200);
            this.setYSpeed(-100, 700);
            this.autoAlpha = true;
            this.setAlpha(1, 0.0, 1800, Phaser.Easing.Quadratic.In);
            this.flow(3500, 5, 6, maxParticles, false);
        }
    }
    BlockPuzzle.BestScoreReachedEffectEmitter = BestScoreReachedEffectEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ExplodingEffectEmitter extends Phaser.Particles.Arcade.Emitter {
        constructor(targetPosition) {
            super(BlockPuzzle.App.instance, targetPosition.x, targetPosition.y, 100);
            this.particlefrequency = 12;
            this.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000']);
            this.width = 40;
            this.height = 40;
            this.minParticleScale = 1.0;
            this.maxParticleScale = 2.5;
            this.gravity.setTo(0, 0);
            this.setYSpeed(-130, 130);
            this.setXSpeed(-130, 130);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);
            this.autoScale = true;
            this.setScale(2, 0.6, 2, 0.6, 500, Phaser.Easing.Sinusoidal.InOut);
            this.start(false, 600, this.particlefrequency, 100 / this.particlefrequency);
            this.game.time.events.add(1600, () => this.destroy());
        }
    }
    BlockPuzzle.ExplodingEffectEmitter = ExplodingEffectEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class FlyingParticlesEmitter extends Phaser.Particles.Arcade.Emitter {
        constructor(level, points, startPosition, targetPosition) {
            super(level.game, startPosition.x, startPosition.y, 250);
            this.particleSpeed = 1200;
            this.particlefrequency = 17;
            this.level = level;
            this.points = points;
            this.distance = Phaser.Math.distance(targetPosition.x, targetPosition.y, startPosition.x, startPosition.y);
            this.duration = this.distance / this.particleSpeed * 1000;
            this.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleMultiplier10000', 'particleMultiplier20000', 'particleMultiplier30000']);
            this.width = 25;
            this.height = 25;
            this.minParticleScale = 0.8;
            this.maxParticleScale = 1.3;
            this.gravity.setTo(0, 200);
            this.setYSpeed(-25, 25);
            this.setXSpeed(-25, 25);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 370, Phaser.Easing.Quintic.In);
            // this.autoScale = true;
            // this.setScale(1.3, 0.8, 1.3, 0.8, 600, Phaser.Easing.Sinusoidal.InOut);
            this.flow(600, this.particlefrequency, 2, this.duration / this.particlefrequency * 3);
            this.game.add.tween(this)
                .to({ x: targetPosition.x, y: targetPosition.y }, this.duration, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.addPoints, this);
            this.game.time.events.add(this.duration + 1600, () => this.destroy());
        }
        addPoints() {
            this.on = false;
            this.width = 45;
            this.height = 45;
            this.setYSpeed(-120, 120);
            this.setXSpeed(-120, 120);
            this.setAlpha(1, 0, 300, Phaser.Easing.Quintic.In);
            this.setScale(1, 0.3, 1, 0.3, 280, Phaser.Easing.Sinusoidal.InOut);
            this.start(false, 300, 10, 12);
        }
    }
    BlockPuzzle.FlyingParticlesEmitter = FlyingParticlesEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class InscriptionEffect extends Phaser.Group {
        constructor(inscriptionLevel, x, y) {
            super(BlockPuzzle.App.instance, null);
            this.inscriptionLevel = inscriptionLevel;
            this.game.camera.shake(0.0058, 200);
            this.position.set(x, Math.max(y, -120) + 40);
            this.sprite = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'inscription' + this.inscriptionLevel + '0000'));
            this.sprite.anchor.set(0.5, 1);
            this.sprite.alpha = 0;
            this.sprite.scale.set(0);
            this.game.add.tween(this.sprite)
                .to({ alpha: 1 }, 420, Phaser.Easing.Sinusoidal.Out, false)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, false)
                .to({ alpha: 0 }, 650, Phaser.Easing.Sinusoidal.In, false)
                .start()
                .onComplete.add(() => this.destroy());
            this.game.add.tween(this.sprite)
                .to({ y: -120 }, 350, Phaser.Easing.Sinusoidal.Out, false)
                .to({ y: -140 }, 800, Phaser.Easing.Linear.None, false)
                .start();
            this.game.add.tween(this.sprite.scale)
                .to({ x: 1, y: 1 }, 420, this.amplifiedBackOut, false)
                .to({ x: 1.25, y: 1.25 }, 850, Phaser.Easing.Sinusoidal.In, false, 50)
                .start();
            BlockPuzzle.SoundController.instance.playInscriptionSound(inscriptionLevel);
            if (this.inscriptionLevel == BlockPuzzle.InscriptionLevel.GREAT) {
                BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_GREATS, 1);
            }
        }
        amplifiedBackOut(k) {
            let s = 0.70158;
            return --k * k * ((s + 1) * k + s) + 1;
        }
    }
    BlockPuzzle.InscriptionEffect = InscriptionEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class StarPickingUpEffect extends Phaser.Particles.Arcade.Emitter {
        constructor(block) {
            super(BlockPuzzle.App.instance, 0, 0, 250);
            this.particleSpeed = 750;
            this.particleFrequency = 8;
            const parentGroup = BlockPuzzle.App.instance.state.getCurrentState().uiManager.starsCounter;
            const startingPosition = parentGroup.toLocal(block.star.position, block);
            const targetPosition = new PIXI.Point(0, 0);
            const distance = Phaser.Math.clamp(Math.pow(Phaser.Math.distance(targetPosition.x, targetPosition.y, startingPosition.x, startingPosition.y), 0.5) * 20, 330, 700);
            const duration = distance / this.particleSpeed * 1000;
            /* emitter */
            parentGroup.addAt(this, 0);
            this.x = startingPosition.x;
            this.y = startingPosition.y;
            this.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000']);
            this.width = 30;
            this.height = 30;
            this.minParticleScale = 0.7;
            this.maxParticleScale = 1.5;
            this.gravity.setTo(0, -100);
            this.setYSpeed(-100, 100);
            this.setXSpeed(-100, 100);
            this.minRotation = 0;
            this.maxRotation = 0;
            this.autoAlpha = true;
            this.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);
            this.autoScale = true;
            this.setScale(1, 0.3, 1, 0.3, 500, Phaser.Easing.Sinusoidal.InOut);
            this.game.add.tween(this)
                .to({ x: targetPosition.x }, duration, Phaser.Easing.Back.In, true);
            this.game.add.tween(this)
                .to({ y: targetPosition.y }, duration, Phaser.Easing.Sinusoidal.In, true)
                .onComplete.add(this.finalizeTween, this);
            this.start(false, 600, this.particleFrequency, duration / this.particleFrequency);
            this.game.time.events.add(duration + 1600, () => this.destroy());
            /* star sprite */
            this.starSprite = parentGroup.addAt(block.star, 1);
            this.starSprite.position.set(startingPosition.x, startingPosition.y);
            this.game.add.tween(this.starSprite)
                .to({ x: targetPosition.x }, duration, Phaser.Easing.Back.In, true);
            this.game.add.tween(this.starSprite)
                .to({
                y: targetPosition.y,
                angle: startingPosition.x < targetPosition.x ? '-373' : '+347'
            }, duration, Phaser.Easing.Sinusoidal.In, true);
        }
        finalizeTween() {
            this.starSprite.destroy();
            this.on = false;
            this.width = 45;
            this.height = 45;
            this.setYSpeed(-140, 140);
            this.setXSpeed(-140, 140);
            this.setAlpha(1, 0, 480, Phaser.Easing.Quintic.In);
            this.setScale(1.2, 0.3, 1.2, 0.3, 540, Phaser.Easing.Sinusoidal.InOut);
            this.start(false, 580, 10, 12);
            BlockPuzzle.StarsManager.instance.pickupStars(1);
        }
    }
    BlockPuzzle.StarPickingUpEffect = StarPickingUpEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BlockStarredView extends Phaser.Group {
        constructor(color) {
            super(BlockPuzzle.App.instance, null);
            this.buildChildren(color);
        }
        buildChildren(color) {
            this.block = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blockStarred000' + color));
            this.block.anchor.set(0.5);
            this.star = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'star0000'));
            this.star.anchor.set(0.5);
            this.shining = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'starShining0000'));
            this.shining.anchor.set(0.5);
            this.shining.alpha = 0;
            this.shadow = this.add(this.game.make.sprite(-2, -2, BlockPuzzle.Settings.GAME_ATLAS, 'starShadow0000'));
            this.shadow.anchor.set(0.5);
        }
        startShining() {
            this.game.tweens.removeFrom(this.shining);
            this.shining.alpha = 0.0;
            this.game.add.tween(this.shining)
                .to({ alpha: 1 }, BlockPuzzle.Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);
            this.game.tweens.removeFrom(this.star.scale);
            this.star.scale.set(0.9);
            this.game.add.tween(this.star.scale)
                .to({ x: 1, y: 1 }, BlockPuzzle.Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);
        }
        setColor(color) {
            this.block.frameName = 'blockStarred000' + color;
        }
        startAppearingTween(initialParent, targetBlock) {
            const initialParentPosition = initialParent.toLocal(this.position, this.parent);
            this.position.set(initialParentPosition.x, initialParentPosition.y);
            initialParent.add(this);
            this.game.time.events.add(70, () => BlockPuzzle.SoundController.instance.playStarAppearSound());
            this.game.tweens.removeFrom(this.block);
            this.block.alpha = 0;
            this.game.add.tween(this.block)
                .to({ alpha: 1 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.35, Phaser.Easing.Linear.None, true);
            this.shining.alpha = 0;
            this.shadow.alpha = 0;
            this.game.add.tween(this.shadow)
                .to({ alpha: 1 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.2, Phaser.Easing.Sinusoidal.In, true, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.8);
            this.game.tweens.removeFrom(this.star);
            this.star.alpha = 0.5;
            this.game.add.tween(this.star)
                .to({ alpha: 1 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.7, Phaser.Easing.Quadratic.Out, true);
            this.star.angle = -45;
            this.game.add.tween(this.star)
                .to({ angle: 0 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false)
                .start();
            this.game.tweens.removeFrom(this.star.scale);
            this.star.scale.set(5);
            this.game.add.tween(this.star.scale)
                .to({ x: 0.8, y: 0.8 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false)
                .to({ x: 0.9, y: 0.9 }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.1, Phaser.Easing.Sinusoidal.In, false)
                .start()
                .onComplete.add(() => {
                this.position.set(0, 0);
                targetBlock.add(this);
                this.startShining();
            });
        }
        destroy() {
            super.destroy();
        }
        pickupStar(delay) {
            this.game.time.events.add(delay, () => {
                new BlockPuzzle.StarPickingUpEffect(this);
            });
        }
    }
    BlockPuzzle.BlockStarredView = BlockStarredView;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ExplosionEffect extends Phaser.Group {
        constructor(x, y) {
            super(BlockPuzzle.App.instance, null);
            this.position.set(x, y);
            this.explosionA = this.add(this.game.make.sprite(0, 0, 'explosionA'));
            this.explosionA.anchor.set(0.5);
            this.explosionA.scale.set(1.2);
            this.explosionA.angle = Math.random() * 360;
            this.explosionA.animations.add('boom');
            this.explosionA.animations.play('boom', 120, false, true);
            this.explosionB = this.add(this.game.make.sprite(0, 0, 'explosionB'));
            this.explosionB.anchor.set(0.5);
            this.explosionB.scale.set(1.3);
            this.explosionB.angle = Math.random() * 360;
            this.explosionB.animations.add('boom');
            this.explosionB.animations.play('boom', 60, false, true);
            this.game.camera.shake(0.0035, 350);
            BlockPuzzle.SoundController.instance.playExplosionSound();
        }
    }
    BlockPuzzle.ExplosionEffect = ExplosionEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class LightningEffect extends Phaser.Sprite {
        constructor(initialCell, targetCell) {
            super(BlockPuzzle.App.instance, targetCell.x, targetCell.y, BlockPuzzle.Settings.GAME_ATLAS, 'lighting0000');
            this.anchor.set(0.5, 0);
            this.initialCellPosition = initialCell.position.clone();
            this.targetCellPosition = targetCell.position.clone();
            this.targetCell = targetCell;
            this.update();
            this.blinkAnimation = this.animations.add('blinkAnimation', Phaser.Animation.generateFrameNames('lighting', 0, LightningEffect.LIGHTING_FRAMES - 1, '', 4));
            this.endAnimation = this.animations.add('endAnimation', Phaser.Animation.generateFrameNames('lightingEnd', 0, LightningEffect.DISAPPEARING_FRAMES - 1, '', 4));
        }
        delayedStart(delay) {
            this.visible = false;
            this.game.time.events.add(delay, () => {
                if (this.targetCell) {
                    this.startAnimations();
                }
                else {
                    this.destroy();
                }
            });
            return this;
        }
        startAnimations() {
            BlockPuzzle.SoundController.instance.playLightningSound();
            this.visible = true;
            this.blinkAnimation.play(LightningEffect.FPS, false, false);
            this.blinkAnimation.onComplete.add(() => {
                this.endAnimation.play(LightningEffect.FPS, false, false);
                this.endAnimation.onComplete.add(() => {
                    this.destroy();
                });
                this.scale.set(1, 1);
            });
            if (this.targetCell) {
                BlockPuzzle.ScoreManager.instance.addScores(5);
                this.targetCell.destroyBlock(35);
            }
        }
        update() {
            super.update();
            const length = Phaser.Math.distance(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y);
            if (this.targetCell) {
                this.targetCellPosition.copyFrom(this.targetCell.position);
                this.scale.set(1, Math.max(0.5, length / 130));
                if (length == 0) {
                    this.anchor.set(0.5); /* hit the same block */
                }
            }
            else if (length < 120) {
                this.scale.set(1, length / 130);
            }
            this.position.copyFrom(this.targetCellPosition);
            this.rotation = Phaser.Math.angleBetween(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y) - Math.PI / 2;
        }
        destroy() {
            super.destroy();
            this.blinkAnimation = null;
            this.endAnimation = null;
        }
    }
    LightningEffect.LIGHTING_FRAMES = 15;
    LightningEffect.DISAPPEARING_FRAMES = 13;
    LightningEffect.TOTAL_FRAMES = LightningEffect.LIGHTING_FRAMES + LightningEffect.DISAPPEARING_FRAMES;
    LightningEffect.FPS = 180;
    BlockPuzzle.LightningEffect = LightningEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ScoresEffect extends Phaser.Group {
        constructor(level, scores, x, y, delay) {
            super(level.game);
            this.targetScale = 1.0;
            this.level = level;
            this.scores = scores;
            const parentGroup = BlockPuzzle.App.instance.state.getCurrentState().uiManager.multiplierBar;
            const startingPosition = parentGroup.toLocal(new Phaser.Point(x, y), this.level.boardManager.getBoard().cellsContainer);
            const targetPosition = new PIXI.Point(0, 0);
            this.position.set(startingPosition.x, startingPosition.y);
            parentGroup.addAt(this, 0);
            this.buildContent();
            this.animateContentA(delay, targetPosition);
        }
        buildContent() {
            this.scoresText = this.add(new BlockPuzzle.BitmapTextField('+' + this.scores, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 1, 0.5, 0.5, 1));
        }
        animateContentA(delay, targetPosition) {
            //appearing tween
            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({
                x: this.targetScale,
                y: this.targetScale
            }, 300, Phaser.Easing.Back.Out, true, delay);
            //tween appearing position
            this.appearingTween = this.game.add.tween(this.scoresText)
                .to({ y: this.scoresText.y - 80 }, 350, Phaser.Easing.Back.Out, true, delay);
            this.disappearingTween = this.game.add.tween(this)
                .to({ alpha: 0.0, y: this.y - 70 }, 750, Phaser.Easing.Cubic.In, false);
            this.disappearingTween.onStart.add(() => {
            });
            this.disappearingTween.onComplete.add(() => this.destroy());
            this.game.time.events.add(delay, () => this.parent.addChildAt(new BlockPuzzle.FlyingParticlesEmitter(this.level, this.scores, new PIXI.Point(this.x, this.y - 80), new Phaser.Point(targetPosition.x, targetPosition.y)), 0));
            //chain tweens
            this.appearingTween.chain(this.disappearingTween);
        }
        destroy() {
            super.destroy();
            this.level = null;
            this.scoresText = null;
            this.appearingTween = null;
            this.disappearingTween = null;
        }
    }
    BlockPuzzle.ScoresEffect = ScoresEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BlockDestroyingEffect extends Phaser.Sprite {
        constructor(color, x, y, delay) {
            super(BlockPuzzle.App.instance, x, y, BlockPuzzle.Settings.ANIMATION_ATLAS);
            this.anchor.set(0.5, 0.24);
            this.anim = this.animations.add('destroying', Phaser.Animation.generateFrameNames('blockDestroyingAnim' + color, 0, 35, '', 4));
            this.visible = false;
            this.game.time.events.add(delay, () => {
                this.visible = true;
                this.anim.play(62, false, true);
            });
        }
    }
    BlockPuzzle.BlockDestroyingEffect = BlockDestroyingEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Block extends Phaser.Group {
        constructor(cellModel, color) {
            super(BlockPuzzle.App.instance, null);
            this.starred = false;
            this.active = true;
            this.posX = cellModel.posX;
            this.posY = cellModel.posY;
            this.glow = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blockGlow000' + color));
            this.glow.anchor.set(0.5);
            this.glow.alpha = 0;
            this.glow.visible = false;
            this.block = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'block000' + color));
            this.block.anchor.set(0.5);
            this.blockGrayscale = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blockGrey000' + color));
            this.blockGrayscale.anchor.set(0.5);
            this.blockGrayscale.visible = false;
            this.blockGrayscale.alpha = 0;
            this.setColor(color);
        }
        addStar(level) {
            if (!this.starred) {
                this.starred = true;
                this.block.visible = false;
                this.blockStarred = this.blockStarred || this.add(new BlockPuzzle.BlockStarredView(this.color));
                this.blockStarred.startAppearingTween(level.boardManager.getBoard().effectsContainer, this);
            }
        }
        hasStar() {
            return this.starred;
        }
        setColor(color) {
            this.color = color;
            this.block.frameName = 'block000' + this.color;
            this.glow.frameName = 'blockGlow000' + this.color;
            if (this.blockStarred) {
                this.blockStarred.setColor(this.color);
            }
            this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
        }
        setTemporalColor(color) {
            this.temporalColor = color;
            this.block.frameName = 'block000' + this.temporalColor;
            this.glow.frameName = 'blockGlow000' + this.temporalColor;
            if (this.blockStarred) {
                this.blockStarred.setColor(this.temporalColor);
            }
            this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
        }
        applyTemporalColor() {
            if (this.temporalColor) {
                this.setColor(this.temporalColor);
            }
        }
        activate(delay) {
            this.active = true;
            this.block.visible = true;
            if (this.hasStar()) {
                this.blockStarred.visible = true;
                this.blockStarred.alpha = 1;
                this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
            }
            this.game.add.tween(this.blockGrayscale)
                .to({ alpha: 0 }, BlockPuzzle.Settings.BLOCK_ACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
        }
        deactivate(delay) {
            this.active = false;
            this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
            this.blockGrayscale.visible = true;
            this.blockGrayscale.alpha = 0;
            this.game.add.tween(this.blockGrayscale)
                .to({ alpha: 1 }, BlockPuzzle.Settings.BLOCK_DEACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay)
                .onComplete.add(() => {
                this.block.visible = false;
                if (this.hasStar()) {
                    this.blockStarred.visible = false;
                    this.blockStarred.alpha = 0;
                }
            });
        }
        dispose(delay) {
            const deltaY = (8 - this.posY) + 1;
            const targetY = deltaY * BlockPuzzle.Settings.CELL_HEIGHT;
            const targetX = Math.floor(this.game.rnd.integerInRange(20, 60));
            const fallingDistanceY = targetY;
            const fallingDuration = 250 + deltaY * 45;
            this.game.add.tween(this)
                .to({ x: targetX.toString() }, fallingDuration, Phaser.Easing.Sinusoidal.In, true, delay);
            this.game.add.tween(this)
                .to({ alpha: 0 }, fallingDuration, Phaser.Easing.Exponential.In, true, delay);
            this.game.add.tween(this)
                .to({ y: '+' + fallingDistanceY }, fallingDuration, Phaser.Easing.Back.In, true, delay);
        }
        enableGlow(duration) {
            this.game.tweens.removeFrom(this.glow);
            this.glow.visible = true;
            this.glow.alpha = 0;
            this.game.add.tween(this.glow)
                .to({ alpha: 0.6 }, duration, Phaser.Easing.Sinusoidal.InOut, true);
        }
        disableGlow(duration) {
            this.game.tweens.removeFrom(this.glow);
            this.game.add.tween(this.glow)
                .to({ alpha: 0 }, duration, Phaser.Easing.Sinusoidal.Out, true)
                .onComplete.add(() => this.glow.visible = false);
        }
        animateDestroying(effectsContainer, delay) {
            effectsContainer.add(new BlockPuzzle.BlockDestroyingEffect(this.color, this.x, this.y, delay));
            this.game.add.tween(this.scale)
                .to({ x: 0.5, y: 0.5 }, BlockPuzzle.Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
            this.game.add.tween(this)
                .to({ alpha: 0 }, BlockPuzzle.Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay)
                .onComplete.add(() => {
                if (this.color == BlockPuzzle.BlockColor.RED) {
                    BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.FIRE_BLOCKS_DESTROYED, 1);
                }
                this.destroy();
            });
            if (this.hasStar() && this.blockStarred) {
                this.blockStarred.pickupStar(delay);
            }
        }
    }
    BlockPuzzle.Block = Block;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Board extends Phaser.Group {
        constructor(boardManager, rows, cols) {
            super(boardManager.game);
            this.active = true;
            this.boardManager = boardManager;
            this.level = boardManager.level;
            this.numRows = rows;
            this.numCols = cols;
            this.buildCells();
            this.alignCells();
            this.animateAppearing();
        }
        buildCells() {
            this.cells = [];
            this.cellsContainer = this.add(this.game.make.group());
            this.fieldCoverSprite = this.add(this.game.make.image(0, 0, 'field-cover'));
            this.fieldCoverSprite.anchor.set(0.5);
            this.blocksContainer = this.add(this.game.make.group());
            this.explosionsContainer = this.add(this.game.make.group());
            this.effectsContainer = this.add(this.game.make.group());
            for (let i = 0; i < this.numRows * this.numCols; i++) {
                let row = Math.floor(i / this.numCols);
                let column = i % this.numCols;
                this.cells.push(this.cellsContainer.add(new BlockPuzzle.Cell(this, column, row)));
            }
        }
        alignCells() {
            this.cells.forEach(cell => cell.position.set(cell.posX - this.numCols / 2 + 0.5, cell.posY - this.numRows / 2 + 0.5).multiply(BlockPuzzle.Settings.CELL_WIDTH, BlockPuzzle.Settings.CELL_HEIGHT));
        }
        animateAppearing() {
            let cell = null;
            for (let i = 0; i < this.numCols; i++) {
                for (let j = 0; j < this.numRows; j++) {
                    cell = this.getCellAt(i, j);
                    cell.scale.set(0);
                    this.game.add.tween(cell.scale)
                        .to({ x: 1, y: 1 }, 120, Phaser.Easing.Quadratic.Out, true, (i + j) * 20 + 100);
                }
            }
            this.game.time.events.add((this.numCols + this.numRows) * 20 + 100, () => this.level.eventManager.onBoardCreated.dispatch());
        }
        findClosestCell(point) {
            let closestCell = null;
            this.getCells().forEach(cell => {
                if (Math.abs(cell.x - point.x) <= BlockPuzzle.Settings.CELL_WIDTH / 2 && Math.abs(cell.y - point.y) <= BlockPuzzle.Settings.CELL_HEIGHT / 2) {
                    closestCell = cell;
                }
            });
            return closestCell;
        }
        /**
         * PUBLIC
         */
        isActive() {
            return this.active;
        }
        getScale() {
            return this.scale.x;
        }
        getCells() {
            return this.cells;
        }
        getNotEmptyCells() {
            return this.getCells().filter(cell => !this.isEmpty(cell));
        }
        getEmptyCells() {
            return this.getCells().filter(cell => this.isEmpty(cell));
        }
        getCellAt(posX, posY) {
            return (posX < 0 || posX >= this.numCols || posY < 0 || posY >= this.numRows) ? null : this.cells[posY * this.numRows + posX] || null;
        }
        isEmpty(cell) {
            return cell && cell.isEmpty();
        }
        activate() {
            if (!this.isActive()) {
                this.active = true;
                BlockPuzzle.SoundController.instance.playReviveSound();
                Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.getBlock().activate(index * 7));
            }
        }
        deactivate(delay) {
            if (this.isActive()) {
                this.active = false;
                BlockPuzzle.SoundController.instance.playLoseSound();
                Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.getBlock().deactivate(delay + index * 10));
            }
        }
        disposeBlocks(delay, deactivateBeforeDisposing) {
            if (deactivateBeforeDisposing) {
                this.active = false;
                BlockPuzzle.SoundController.instance.playLoseSound();
            }
            Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach((cell, index) => cell.disposeBlock(delay + index * 8, deactivateBeforeDisposing));
        }
        dispatchFigureIsBeingDragged(figure) {
            this.getCells().forEach(cell => cell.resetView(false));
            /* find target cells where figure will be placed */
            this.targetCells = this.getTargetCellsFor(figure);
            if (this.targetCells && figure) {
                /* and highlight them */
                this.targetCells.forEach(cell => cell.showHighlighting(figure.color, false));
                /* highlight potentially filled lines and rows */
                const model = this.getModel();
                this.targetCells.forEach(cell => model.setCellStateAt(BlockPuzzle.CellModelState.CELL_NEW, cell.posX, cell.posY));
                const cellsToClear = model.findCellsToClear();
                cellsToClear.forEach(cellPos => this.getCellAt(cellPos.x, cellPos.y).showHighlighting(figure.color, false));
            }
        }
        dispatchPowerupIsBeingDragged(targetCells) {
            this.getCells().forEach(cell => cell.resetAlphaHighlighting());
            if (targetCells && targetCells.length > 0) {
                /* set alpha to all the cells*/
                this.getCells().forEach(cell => cell.applyAlphaHighlighting(true));
                /* remove alpha filter from target cells */
                targetCells.forEach(cell => cell.applyAlphaHighlighting(false));
            }
        }
        placeFigure(figure) {
            if (figure) {
                this.targetCells = this.getTargetCellsFor(figure);
                if (this.targetCells) {
                    this.targetCells.forEach((cell, index) => cell.placeBlock(figure.getView().getBlocks()[index]));
                    this.clearFilledRowsAndColumns(this.targetCells, figure);
                    this.targetCells = null;
                    return true;
                }
            }
            return false;
        }
        getTargetCellsFor(figure) {
            if (figure) {
                const baseBlock = figure.getView().getFirstBlock();
                const figureLocalPosition = this.cellsContainer.toLocal(figure.getView().position, figure);
                const targetLocalPosition = new Phaser.Point(figureLocalPosition.x + baseBlock.x, figureLocalPosition.y + baseBlock.y);
                const baseCell = this.findClosestCell(targetLocalPosition);
                if (baseCell) {
                    let localCells = figure.getView().getBlocks().map(block => this.getCellAt(baseCell.posX + block.posX - baseBlock.posX, baseCell.posY + block.posY - baseBlock.posY));
                    if (localCells.every(cell => this.isEmpty(cell))) {
                        if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                            if (localCells.every(cell => !!figure.getModel().getCells().find(modelCell => cell.posX == (modelCell.posX + figure.getModel().posX) && cell.posY == (modelCell.posY + figure.getModel().posY)))) {
                                return localCells;
                            }
                            else {
                                return null;
                            }
                        }
                        else {
                            return localCells;
                        }
                    }
                }
            }
            return null;
        }
        getCellUnderPoint(localPoint) {
            return this.level.boardManager.getBoard().getCells().find(cell => Math.abs(cell.x - localPoint.x) < BlockPuzzle.Settings.CELL_WIDTH / 2 && Math.abs(cell.y - localPoint.y) < BlockPuzzle.Settings.CELL_HEIGHT / 2) || null;
        }
        getNumStarsOnTheBoard() {
            return this.getNotEmptyCells().reduce((sum, cell) => sum + (cell.getBlock().hasStar() ? 1 : 0), 0);
        }
        clearFilledRowsAndColumns(targetCells, figure) {
            let cellsToClear = [];
            let numLines = 0;
            //check rows
            for (let i = 0; i < this.numRows; i++) {
                if (this.isRowFilled(i)) {
                    numLines++;
                    cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getRow(i));
                }
            }
            //check columns
            for (let i = 0; i < this.numCols; i++) {
                if (this.isColumnFilled(i)) {
                    numLines++;
                    cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getColumn(i));
                }
            }
            if (cellsToClear.length > 0) {
                this.level.dataManager.dispatchLinesDestroyed(numLines, cellsToClear.map(cell => {
                    return { x: cell.posX, y: cell.posY };
                }));
                if (BlockPuzzle.Settings.SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS) {
                    cellsToClear.forEach(cell => cell.getBlock().setColor(figure.color));
                }
                const scores = numLines * (numLines + 1) / 2 * BlockPuzzle.Settings.BASIC_LINE_DESTROYING_REWARD + figure.getModel().numCells();
                const explosionStartingPosition = this.findExplosionStartingPosition(cellsToClear, targetCells, BlockPuzzle.Settings.PICK_RANDOM_EXPLOSION_STARTING_POINT);
                const scoresEffectPosition = this.level.boardManager.getBoard().getCellAt(explosionStartingPosition.x, explosionStartingPosition.y).position;
                this.level.serviceManager.inscriptionsService.displayScoresEffect(scores, scoresEffectPosition.x, scoresEffectPosition.y);
                cellsToClear.forEach(cell => cell.destroyBlock(BlockPuzzle.Settings.BLOCK_DESTROY_ANIMATION_DELAY * Math.max(Math.abs(cell.posX - explosionStartingPosition.x), Math.abs(cell.posY - explosionStartingPosition.y))));
                BlockPuzzle.SoundController.instance.playNextLineDestroyingSound(numLines);
                BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.LINES_DESTROYED, numLines);
                BlockPuzzle.APIUtils.instance.trackStatsChange('lines_removed', numLines);
            }
            else {
                const scoresEffectPosition = this.level.boardManager.getBoard().cellsContainer.toLocal(figure.getView().parent.toGlobal(figure.getView().position), this.game.world);
                this.level.serviceManager.inscriptionsService.displayScoresEffect(figure.getModel().numCells(), scoresEffectPosition.x, scoresEffectPosition.y - 60);
            }
            return numLines;
        }
        isRowFilled(rowIndex) {
            return this.getRow(rowIndex).every(cell => cell.isEmpty() == false);
        }
        isColumnFilled(columnIndex) {
            return this.getColumn(columnIndex).every(cell => cell.isEmpty() == false);
        }
        getRow(rowIndex) {
            return this.getCells().filter(cell => cell.posX == rowIndex);
        }
        getColumn(colIndex) {
            return this.getCells().filter(cell => cell.posY == colIndex);
        }
        findExplosionStartingPosition(explodingCells, targetCells, pickRandom) {
            let targetCellsToExplode = explodingCells.filter(cell => targetCells.indexOf(cell) != -1);
            if (targetCellsToExplode.length == 0) {
                /* if there are no target cells among exploding ones, which is basically impossible, but who knows :\ */
                targetCellsToExplode = explodingCells.slice();
            }
            /* find the epicenter of an explosion */
            if (pickRandom) {
                let { posX, posY } = Phaser.ArrayUtils.getRandomItem(targetCellsToExplode);
                return { x: posX, y: posY };
            }
            else {
                const minX = targetCellsToExplode.reduce((min, cell) => Math.min(min, cell.posX), Number.MAX_SAFE_INTEGER);
                const maxX = targetCellsToExplode.reduce((max, cell) => Math.max(max, cell.posX), 0);
                const minY = targetCellsToExplode.reduce((min, cell) => Math.min(min, cell.posY), Number.MAX_SAFE_INTEGER);
                const maxY = targetCellsToExplode.reduce((max, cell) => Math.max(max, cell.posY), 0);
                return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
            }
        }
        getModel() {
            return new BlockPuzzle.BoardModel(this.numCols, this.numRows).parseFromBoard(this);
        }
    }
    BlockPuzzle.Board = Board;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Cell extends Phaser.Group {
        constructor(board, posX, posY) {
            super(board.game);
            this.forceHighlighting = false;
            this.board = board;
            this.boardManager = board.boardManager;
            this.level = this.boardManager.level;
            this.posX = posX;
            this.posY = posY;
            this.buildContent();
        }
        buildContent() {
            this.cellSprite = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'cell000' + Math.floor(Math.random() * 3)));
            this.cellSprite.anchor.set(0.5);
            this.highlightSprite = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'block0000'));
            this.highlightSprite.anchor.set(0.5);
            this.highlightSprite.alpha = 0.5;
            this.highlightSprite.visible = false;
            this.block = null;
        }
        equalsTo(anotherCell) {
            return this.posX === anotherCell.posX && this.posY === anotherCell.posY;
        }
        isEmpty() {
            return this.block == null;
        }
        hasBlock() {
            return !this.isEmpty();
        }
        getBlock() {
            return this.block;
        }
        disposeBlock(delay, deactivateBeforeDisposing) {
            if (this.hasBlock()) {
                if (deactivateBeforeDisposing) {
                    this.getBlock().deactivate(delay);
                    this.getBlock().dispose(delay + BlockPuzzle.Settings.BLOCK_DEACTIVATION_TWEEN_DURATION);
                }
                else {
                    this.getBlock().dispose(delay);
                }
                this.block = null;
            }
        }
        placeBlock(block) {
            const blockLocalPosition = this.board.blocksContainer.toLocal(block.position, block.parent);
            this.block = this.board.blocksContainer.add(block);
            this.block.posX = this.posX;
            this.block.posY = this.posY;
            this.block.position.set(blockLocalPosition.x, blockLocalPosition.y);
            this.game.tweens.removeFrom(this.block, false);
            this.game.tweens.removeFrom(this.block.scale);
            this.game.add.tween(this.block)
                .to({ x: this.x, y: this.y }, 130, Phaser.Easing.Circular.Out, true, 0);
            this.game.add.tween(this.block.scale)
                .to({ x: 1, y: 1 }, 120, Phaser.Easing.Cubic.In, true, 0);
            BlockPuzzle.APIUtils.instance.trackStatsChange('total_blocks_placed', 1);
            BlockPuzzle.APIUtils.instance.trackStatsChange(`${BlockPuzzle.BlockColor[block.color].toLowerCase()}_blocks_placed`, 1);
        }
        destroyBlock(delay) {
            if (this.block) {
                BlockPuzzle.APIUtils.instance.trackStatsChange('total_blocks_destroyed', 1);
                BlockPuzzle.APIUtils.instance.trackStatsChange(`${BlockPuzzle.BlockColor[this.block.color].toLowerCase()}_blocks_destroyed`, 1);
                this.block.animateDestroying(this.board.explosionsContainer, delay);
                this.block = null;
            }
        }
        applyAlphaHighlighting(value) {
            if (this.hasBlock()) {
                this.getBlock().alpha = value ? BlockPuzzle.Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
            }
            else {
                this.alpha = value ? BlockPuzzle.Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
            }
        }
        resetAlphaHighlighting() {
            if (this.hasBlock()) {
                this.getBlock().alpha = 1;
            }
            this.alpha = 1;
        }
        showHighlighting(color, forced) {
            if (forced) {
                this.forceHighlighting = true;
            }
            if (this.isEmpty()) {
                this.highlightSprite.frameName = 'block000' + color;
                this.highlightSprite.visible = true;
            }
            else {
                this.block.setTemporalColor(color);
            }
        }
        resetView(force) {
            if (force) {
                this.forceHighlighting = false;
            }
            if (!this.forceHighlighting) {
                this.highlightSprite.visible = false;
            }
            if (!this.isEmpty()) {
                this.block.setColor(this.block.color);
            }
        }
    }
    BlockPuzzle.Cell = Cell;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Figure extends Phaser.Group {
        constructor(figureManager, figureModel, color, barIndex) {
            super(figureManager.game);
            this.figureWidth = 0;
            this.figureHeight = 0;
            this.applicable = true;
            this.figureManager = figureManager;
            this.level = this.figureManager.level;
            this.board = this.level.boardManager.getBoard();
            this.figureModel = figureModel;
            this.figureState = BlockPuzzle.FigureState.INACTIVE;
            this.color = color;
            this.barIndex = barIndex;
            this.figureWidth = figureModel.getWidth();
            this.figureHeight = figureModel.getHeight();
            this.figureView = this.add(new BlockPuzzle.FigureView(this, figureModel));
            /* input handler */
            this.inputHandler = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.inputHandler.anchor.set(0.5);
            this.inputHandler.inputEnabled = true;
            this.inputHandler.width = 5 * BlockPuzzle.Settings.CELL_WIDTH * BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE;
            this.inputHandler.height = 5 * BlockPuzzle.Settings.CELL_HEIGHT * BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE;
            this.inputHandler.alpha = 0;
            this.inputHandler.events.onInputDown.add(this.handleInputDown, this);
            this.inputHandler.events.onInputUp.add(this.handleInputUp, this);
        }
        /**
         * PUBLIC
         */
        setPosition(posX, posY) {
            this.posX = posX;
            this.posY = posY;
        }
        getView() {
            return this.figureView;
        }
        getModel() {
            return this.figureModel;
        }
        playAppearingTween(delay) {
            this.figureView.playAppearingTween(delay);
        }
        pickUp() {
            this.figureState = BlockPuzzle.FigureState.DRAGGING;
            if (this.parent) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }
            this.game.add.tween(this.figureView)
                .to(this.level.serviceManager.layoutService.getFigureDraggingDelta(this.barIndex), BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Circular.Out, true);
            this.figureView.tweenScale(BlockPuzzle.Settings.DRAGGING_FIGURE_SCALE, true, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.25, 1 / this.scale.x * this.board.getScale());
            this.figureView.getBlocks().forEach(block => block.enableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.5));
            BlockPuzzle.SoundController.instance.playFigurePickupSound();
        }
        putDown() {
            this.figureState = BlockPuzzle.FigureState.PLACED;
            this.figureView.getBlocks().forEach(block => block.disableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION / 2));
            BlockPuzzle.SoundController.instance.playFigurePlaceSound();
        }
        release() {
            this.figureState = BlockPuzzle.FigureState.INACTIVE;
            this.game.add.tween(this.figureView)
                .to({ x: 0, y: 0 }, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true);
            this.figureView.tweenScale(BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE, false, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION);
            this.figureView.getBlocks().forEach(block => block.disableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION));
            BlockPuzzle.SoundController.instance.playFigureFailSound();
        }
        dispose() {
            this.game.add.tween(this.figureView)
                .to(this.level.serviceManager.layoutService.getFigureDisposingTweenParams(), BlockPuzzle.Settings.FIGURE_DISPOSING_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true)
                .onComplete.add(() => this.destroy());
        }
        setApplicable(value) {
            if (value != this.applicable) {
                this.applicable = value;
                this.game.tweens.removeFrom(this, false);
                this.game.add.tween(this)
                    .to({ alpha: value ? 1 : BlockPuzzle.Settings.NOT_APPLICABLE_FIGURE_APLHA }, 350, Phaser.Easing.Linear.None, true, 450);
            }
        }
        /**
         * INPUT HANDLERS
         */
        handleInputDown() {
            if (this.figureView.isReady) {
                this.figureManager.handleFigureInputDown(this);
            }
        }
        handleInputUp() {
            if (this.figureView.isReady) {
                this.figureManager.handleFigureInputUp(this);
            }
        }
        /**
         * DESTROY
         */
        destroy() {
            this.inputHandler.events.onInputDown.remove(this.handleInputDown, this);
            this.inputHandler.events.onInputUp.remove(this.handleInputUp, this);
            super.destroy();
            this.figureView = null;
            this.inputHandler = null;
        }
    }
    BlockPuzzle.Figure = Figure;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractManager extends Phaser.Group {
        constructor(level) {
            super(level.game);
            this.level = level;
        }
        resize() {
            switch (BlockPuzzle.CustomScaleManager.getLayout()) {
                case BlockPuzzle.LayoutType.PORTRAIT:
                    this.resizePortrait();
                    break;
                case BlockPuzzle.LayoutType.SQUARED:
                    this.resizeSquared();
                    break;
                case BlockPuzzle.LayoutType.LANDSCAPE:
                    this.resizeLandscape();
                    break;
            }
        }
    }
    BlockPuzzle.AbstractManager = AbstractManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BoardManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.board = this.add(new BlockPuzzle.Board(this, BlockPuzzle.Settings.BOARD_ROWS, BlockPuzzle.Settings.BOARD_COLS));
        }
        getBoard() {
            return this.board;
        }
        resizeLandscape() {
            this.fillAvailableSpace();
        }
        resizeSquared() {
            this.fillAvailableSpace();
        }
        resizePortrait() {
            this.fillAvailableSpace();
        }
        getOriginalBounds(includePadding) {
            const boardWidth = (this.getBoard().numCols + (includePadding ? 0.5 : 0)) * BlockPuzzle.Settings.CELL_WIDTH;
            const boardHeight = (this.getBoard().numRows + (includePadding ? 0.5 : 0)) * BlockPuzzle.Settings.CELL_HEIGHT;
            return new Phaser.Rectangle(-boardWidth / 2, -boardHeight / 2, boardWidth, boardHeight);
        }
        getBoardBounds(targetCoordinateSpace, includePadding = true) {
            const originalBounds = this.getOriginalBounds(includePadding);
            const topLeft = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x, originalBounds.y), this.level.boardManager.getBoard().cellsContainer);
            const bottomRight = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x + originalBounds.width, originalBounds.y + originalBounds.height), this.level.boardManager.getBoard().cellsContainer);
            return new Phaser.Rectangle(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
        }
        fillAvailableSpace() {
            const boardBoundsRect = this.getOriginalBounds(true);
            const availableBounds = this.level.serviceManager.layoutService.getAvailableBoardBounds();
            /* update position and scale */
            this.board.position.set(availableBounds.x, availableBounds.y);
            this.board.scale.set(Math.min(availableBounds.width / boardBoundsRect.width, availableBounds.height / boardBoundsRect.height));
        }
    }
    BlockPuzzle.BoardManager = BoardManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class DataManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.numMoves = 0;
            this.initData();
        }
        initData() {
            this.numMoves = 0;
        }
        /**
         * PUBLIC
         */
        moveFinished() {
            this.numMoves++;
            this.level.eventManager.onMoveFinished.dispatch(this.numMoves);
        }
        dispatchLinesDestroyed(destroyedLines, cellPositions) {
            this.level.eventManager.onLinesDestroyed.dispatch(destroyedLines, cellPositions);
        }
        getMaxMistakeProbability() {
            return Phaser.Math.clamp(BlockPuzzle.Settings.MISTAKE_MAX_PROBABILITY + BlockPuzzle.Settings.MISTAKE_MAX_PROBABILITY * (BlockPuzzle.Settings.DIFFICULTY_FACTOR - 1) * 0.2 + this.numMoves * 0.001, 0, 0.4);
        }
        getMaxMistakeProbabilityStep() {
            return this.getMaxMistakeProbability() / 5;
        }
        getMistakeProbabilityStepSpeed() {
            return BlockPuzzle.Settings.MISTAKE_PROBABILITY_STEP_SPEED + BlockPuzzle.Settings.MISTAKE_PROBABILITY_STEP_SPEED * (BlockPuzzle.Settings.DIFFICULTY_FACTOR - 1) * 0.15;
        }
        /**
         * PRIVATE
         */
        /**
         * INHERITED
         */
        resizeLandscape() {
        }
        resizeSquared() {
        }
        resizePortrait() {
        }
    }
    BlockPuzzle.DataManager = DataManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class EventManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.buildSignals();
        }
        buildSignals() {
            this.onBoardCreated = new Phaser.Signal();
            this.onRoundFinished = new Phaser.Signal();
            this.onMoveFinished = new Phaser.Signal();
            this.onReviveApplied = new Phaser.Signal();
            this.onReviveFailed = new Phaser.Signal();
            this.onLinesDestroyed = new Phaser.Signal();
            this.onPowerupUsageTimerExceeded = new Phaser.Signal();
            this.onPowerupApplied = new Phaser.Signal();
        }
        /**
         * INHERITED
         */
        resizeLandscape() {
        }
        resizeSquared() {
        }
        resizePortrait() {
        }
        destroy() {
            this.onBoardCreated.dispose();
            this.onRoundFinished.dispose();
            this.onMoveFinished.dispose();
            this.onReviveApplied.dispose();
            this.onReviveFailed.dispose();
            this.onLinesDestroyed.dispose();
            this.onPowerupUsageTimerExceeded.dispose();
            this.onPowerupApplied.dispose();
            super.destroy();
        }
    }
    BlockPuzzle.EventManager = EventManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class FigureManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.figures = [];
            this.activeFigure = null;
            this.activeFigurePointerDelta = null;
            this.currentMistakeStep = 0;
            this.currentMistakeProbability = 0;
            this.mistakeImmunityCounter = 0;
            this.initialFigureScale = 1;
            this.initialFigurePositions = [
                new Phaser.Point(0, 0),
                new Phaser.Point(0, 0),
                new Phaser.Point(0, 0)
            ];
            this.figureService = this.level.serviceManager.figureService;
            this.currentMistakeStep = BlockPuzzle.Settings.MISTAKE_PROBABILITY_BASIC_STEP;
            this.mistakeImmunityCounter = this.game.rnd.integerInRange(BlockPuzzle.Settings.MISTAKE_IMMUNITY_MIN_MOVES, BlockPuzzle.Settings.MISTAKE_IMMUNITY_MAX_MOVES);
            this.buildContent();
            this.resize();
        }
        buildContent() {
            this.figuresContainer = this.add(this.game.make.group());
            this.createFigures(false);
        }
        getPointerLocalPosition() {
            const { x, y } = this.figuresContainer.toLocal(this.game.input.activePointer.position, this.game.world);
            return new Phaser.Point(x, y);
        }
        getFigureInitialPosition(figure) {
            return this.initialFigurePositions[figure.barIndex];
        }
        getFiguresLeft() {
            return this.figures.filter(figure => figure != null).length;
        }
        createFigures(enableMistakes) {
            const generatedFigureModels = this.figureService.getNextFiguresSet(this.level.boardManager.getBoard().getModel());
            if (enableMistakes && BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                if (this.level.dataManager.numMoves > this.mistakeImmunityCounter) {
                    // console.log("Mistake probability: " + Phaser.Math.roundTo(this.currentMistakeProbability * 100, -1) + "%,  step ", Phaser.Math.roundTo(this.currentMistakeStep * 100, -3) + ' speed ' +  Phaser.Math.roundTo(this.level.dataManager.getMistakeProbabilityStepSpeed() * 100, -3));
                    this.currentMistakeStep = Phaser.Math.clamp(this.currentMistakeStep + this.level.dataManager.getMistakeProbabilityStepSpeed(), 0, this.level.dataManager.getMaxMistakeProbabilityStep());
                    this.currentMistakeProbability += this.currentMistakeStep;
                    if (Math.random() < this.currentMistakeProbability) {
                        console.log("Random figure generated with probability of " + Phaser.Math.roundTo(this.currentMistakeProbability * 100, -1) + '%');
                        generatedFigureModels[Math.floor(Math.random() * generatedFigureModels.length)] = this.figureService.getRandomFigureModel();
                        this.currentMistakeProbability = 0;
                        this.currentMistakeStep *= (BlockPuzzle.Settings.DIFFICULTY_FACTOR - 1) * 0.05;
                    }
                }
            }
            generatedFigureModels.forEach((model, index) => this.addFigure(new BlockPuzzle.Figure(this, model, this.figureService.getRandomColor(), index), (index + 1) * BlockPuzzle.Settings.FIGURE_APPEARING_DELAY + 100));
            this.alignFigures();
        }
        /**
         * INHERITED
         */
        update() {
            super.update();
            if (this.activeFigure) {
                this.activeFigure.position.copyFrom(this.getPointerLocalPosition().subtract(this.activeFigurePointerDelta.x, this.activeFigurePointerDelta.y));
                this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(this.activeFigure);
            }
            else {
                this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(null);
            }
        }
        resizeLandscape() {
            const availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth = Math.min(availableBounds.width / (6), availableBounds.height / (3 * 6));
            const figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set(0, (index - 1) * targetCellWidth * 6));
            this.initialFigureScale = figureScale;
            this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
            this.alignFigures();
        }
        resizeSquared() {
            const availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth = Math.min(availableBounds.width / (6), availableBounds.height / (3 * 6));
            const figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set(0, (index - 1) * targetCellWidth * 6));
            this.initialFigureScale = figureScale;
            this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
            this.alignFigures();
        }
        resizePortrait() {
            const availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
            const targetCellWidth = Math.min(availableBounds.width / (3 * 6), availableBounds.height / (6));
            const figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
            /* remember initial positions and scale */
            this.initialFigurePositions.forEach((position, index) => position.set((index - 1) * targetCellWidth * 6, 0));
            this.initialFigureScale = figureScale;
            this.figuresContainer.position.set(availableBounds.x, availableBounds.y - availableBounds.height * 0.05);
            this.alignFigures();
        }
        getOriginalBounds() {
            const bounds = this.figuresContainer.getBounds(this.figuresContainer.parent);
            this.add(this.game.make.graphics(bounds.x, bounds.y).beginFill(0xFFFFFF, 0.5).drawRect(0, 0, bounds.width, bounds.height).endFill());
            return new Phaser.Rectangle(bounds.x, bounds.y, bounds.width, bounds.height);
        }
        alignFigures() {
            this.figures.forEach(figure => {
                if (figure) {
                    this.game.tweens.removeFrom(figure, false);
                    figure.scale.set(this.initialFigureScale / BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE);
                    figure.position.copyFrom(this.getFigureInitialPosition(figure));
                }
            });
        }
        /**
         * PUBLIC
         */
        getFigures() {
            return this.figures;
        }
        addFigure(figure, delay) {
            this.figures[figure.barIndex] = this.figuresContainer.add(figure);
            figure.position.copyFrom(this.getFigureInitialPosition(figure));
            figure.playAppearingTween(delay);
        }
        removeFigure(figure) {
            if (this.figures.indexOf(figure) != -1) {
                this.figures[this.figures.indexOf(figure)] = null;
                figure.destroy();
            }
            if (this.getFiguresLeft() == 0) {
                this.level.eventManager.onRoundFinished.dispatch();
                this.createFigures(true);
            }
        }
        regenerateFigures() {
            for (let i = 0; i < this.figures.length; i++) {
                if (this.figures[i]) {
                    this.figures[i].dispose();
                }
                this.figures[i] = null;
            }
            this.createFigures(false);
        }
        isNextMovePossible() {
            const figures = this.figures.filter(figure => !!figure).sort((a, b) => a.getModel().numCells() - b.getModel().numCells());
            let applicableFiguresAmount = 0;
            this.figures.forEach(figure => {
                if (figure) {
                    const isApplicable = this.figureService.hasAvailableSpaceForFigure(figure, this.level.boardManager.getBoard().getModel());
                    figure.setApplicable(isApplicable);
                    if (isApplicable) {
                        applicableFiguresAmount += 1;
                    }
                }
            });
            return applicableFiguresAmount > 0;
        }
        updateFiguresApplicability() {
            this.figures.forEach(figure => figure && figure.setApplicable(this.figureService.hasAvailableSpaceForFigure(figure, this.level.boardManager.getBoard().getModel())));
        }
        handleFigureInputDown(figure) {
            if (this.level.gameStateManager.isGameActive() && !this.activeFigure && figure.figureState == BlockPuzzle.FigureState.INACTIVE) {
                if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED && this.level.tutorialManager.getActiveFigure() != figure) {
                    return;
                }
                this.activeFigure = figure;
                this.activeFigure.pickUp();
                this.activeFigurePointerDelta = this.getPointerLocalPosition().subtract(this.activeFigure.x, this.activeFigure.y);
            }
        }
        handleFigureInputUp(figure) {
            if (this.level.gameStateManager.isGameActive() && this.activeFigure && this.activeFigure == figure) {
                if (this.level.boardManager.getBoard().placeFigure(figure)) {
                    /* figure placed succesfully */
                    //
                    // const scoresEffectPosition: PIXI.Point = this.level.boardManager.getBoard().cellsContainer.toLocal(figure.getView().parent.toGlobal(figure.getView().position), this.game.world);
                    // this.level.serviceManager.inscriptionsService.displayScoresEffect(figure.getModel().numCells(), scoresEffectPosition.x, scoresEffectPosition.y - 60);
                    BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.BLOCKS_PLACED, figure.getModel().numCells());
                    this.activeFigure.putDown();
                    this.removeFigure(this.activeFigure);
                    this.level.dataManager.moveFinished();
                }
                else {
                    const returnDuration = BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION;
                    this.game.add.tween(this.activeFigure)
                        .to({
                        x: this.getFigureInitialPosition(figure).x,
                        y: this.getFigureInitialPosition(figure).y
                    }, returnDuration, Phaser.Easing.Linear.None, true);
                    this.activeFigure.release();
                }
            }
            this.activeFigure = null;
            this.activeFigurePointerDelta = null;
        }
    }
    BlockPuzzle.FigureManager = FigureManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class GameStateManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.started = false;
            this.finished = false;
            this.paused = false;
            this.reviveAvailable = true;
            this.reviveUsed = false;
            this.reviveTimer = 0;
            this.resultsTimer = 0;
            this.reviveAvailable = true;
            this.level.eventManager.onBoardCreated.add(this.dispatchBoardCreated, this);
            this.level.eventManager.onMoveFinished.add(this.dispatchMoveFinished, this);
            this.level.eventManager.onPowerupUsageTimerExceeded.add(this.dispatchPowerupUsageTimerExceeded, this);
            this.level.eventManager.onPowerupApplied.add(this.dispatchPowerupApplied, this);
            this.level.eventManager.onReviveApplied.add(this.reviveApplied, this);
            this.level.eventManager.onReviveFailed.add(this.reviveFailed, this);
        }
        update() {
            super.update();
            if (this.reviveTimer > 0) {
                this.reviveTimer--;
                if (this.reviveTimer <= 0) {
                    this.reviveTimer = 0;
                    BlockPuzzle.WindowManager.instance.showRevive();
                }
            }
            if (this.resultsTimer > 0) {
                this.resultsTimer--;
                if (this.resultsTimer <= 0) {
                    this.resultsTimer = 0;
                    BlockPuzzle.Analytics.instance.finishLevel(BlockPuzzle.ScoreManager.instance.getCurrentScores(), BlockPuzzle.StarsManager.instance.getLastRoundStars(), this.reviveUsed ? 1 : 0, this.level.uiManager.powerupContainer.usedPowerups);
                    BlockPuzzle.WindowManager.instance.showResults();
                }
            }
        }
        /**
         * PUBLIC
         */
        isGameActive() {
            return this.started && !this.paused && !this.finished;
        }
        isStarted() {
            return this.started;
        }
        isPaused() {
            return this.paused;
        }
        isFinished() {
            return this.finished;
        }
        /**
         * PRIVATE
         */
        dispatchBoardCreated() {
            this.started = true;
        }
        dispatchMoveFinished() {
            if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
                if (BlockPuzzle.PowerupManager.instance.hasBoughtPowerups()) {
                    this.level.uiManager.powerupContainer.startCountdown();
                }
                else {
                    this.finishGame();
                }
            }
        }
        dispatchPowerupUsageTimerExceeded() {
            if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
                this.finishGame();
            }
        }
        dispatchPowerupApplied() {
            if (!this.finished) {
                if (!this.level.figureManager.isNextMovePossible()) {
                    if (BlockPuzzle.PowerupManager.instance.hasBoughtPowerups()) {
                        this.level.uiManager.powerupContainer.startCountdown();
                    }
                    else {
                        this.finishGame();
                    }
                }
            }
        }
        finishGame() {
            this.finished = true;
            this.reviveAvailable = this.reviveAvailable && BlockPuzzle.APIUtils.instance.hasRewardedVideo();
            if (this.reviveAvailable) {
                this.reviveAvailable = false;
                this.reviveTimer = BlockPuzzle.Settings.REVIVE_WINDOW_TIMER;
                this.resultsTimer = 0;
                this.level.boardManager.getBoard().deactivate(200);
            }
            else {
                this.level.uiManager.levelFinished();
                this.reviveTimer = 0;
                this.resultsTimer = BlockPuzzle.Settings.RESULTS_WINDOW_TIMER_WITHOUT_REVIVE;
                this.level.boardManager.getBoard().disposeBlocks(250, true);
            }
        }
        reviveApplied() {
            BlockPuzzle.Analytics.instance.updateLevelData({ revives: 1 });
            this.reviveUsed = true;
            this.finished = false;
            this.reviveTimer = 0;
            this.resultsTimer = 0;
            this.level.figureManager.regenerateFigures();
            this.level.boardManager.getBoard().activate();
        }
        reviveFailed() {
            this.finished = true;
            this.reviveTimer = 0;
            this.resultsTimer = BlockPuzzle.Settings.RESULTS_WINDOW_TIMER;
            this.level.boardManager.getBoard().disposeBlocks(250, false);
            this.level.uiManager.levelFinished();
        }
        /**
         * INHERITED
         */
        resizeLandscape() {
        }
        resizeSquared() {
        }
        resizePortrait() {
        }
        destroy() {
            super.destroy();
        }
    }
    BlockPuzzle.GameStateManager = GameStateManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ServiceManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.initServices();
        }
        initServices() {
            this.layoutService = new BlockPuzzle.LayoutService(this);
            this.figureService = new BlockPuzzle.FigureService(this);
            this.starsService = new BlockPuzzle.StarsService(this);
            this.inscriptionsService = new BlockPuzzle.InscriptionsService(this);
        }
        /**
         * INHERITED
         */
        resizeLandscape() {
        }
        resizeSquared() {
        }
        resizePortrait() {
        }
    }
    BlockPuzzle.ServiceManager = ServiceManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class TutorialManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.isManualTutorialActive = BlockPuzzle.Settings.TUTORIAL_COMPLETED;
            this.isInitialized = false;
            this.activeFigure = null;
            this.buildContent();
            this.level.eventManager.onBoardCreated.add(this.handleBoardCreated, this);
            this.level.eventManager.onMoveFinished.add(this.handleFigurePlaced, this);
            this.level.eventManager.onRoundFinished.add(this.handleRoundFinished, this);
            this.visible = false;
        }
        start() {
            this.isInitialized = true;
        }
        resizeLandscape() {
            this.startHandAnimation();
        }
        resizeSquared() {
            this.startHandAnimation();
        }
        resizePortrait() {
            this.startHandAnimation();
        }
        update() {
            super.update();
        }
        getActiveFigure() {
            return this.activeFigure;
        }
        restartTutorial() {
            this.isManualTutorialActive = true;
            BlockPuzzle.Settings.TUTORIAL_COMPLETED = false;
            this.startHandAnimation();
        }
        /**
         * PRIVATE
         */
        buildContent() {
            this.tutorialHand = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'tutorialHand0000'));
            this.tutorialHand.anchor.set(0.4, 0);
            this.visible = false;
        }
        startHandAnimation() {
            if (this.isInitialized && !BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                const board = this.level.boardManager.getBoard();
                this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));
                this.visible = true;
                const currentFigure = this.level.figureManager.getFigures().slice().filter(f => !!f).sort((a, b) => a.getModel().numCells() - b.getModel().numCells())[0];
                if (currentFigure) {
                    this.activeFigure = currentFigure;
                    const figureLocalPosition = this.toLocal(currentFigure.getView().position, currentFigure.getView().parent);
                    let targetCell = this.level.boardManager.getBoard().getCellAt(currentFigure.getModel().posX, currentFigure.getModel().posY);
                    if (!targetCell) {
                        const figurePosition = this.level.serviceManager.figureService.getRandomPositionForFigure(currentFigure, board.getModel());
                        if (figurePosition) {
                            currentFigure.getModel().posX = figurePosition.x;
                            currentFigure.getModel().posY = figurePosition.y;
                            targetCell = this.level.boardManager.getBoard().getCellAt(figurePosition.x, figurePosition.y);
                        }
                        else {
                            this.finishTutorial();
                            return;
                        }
                    }
                    const targetCellLocalPosition = this.toLocal(targetCell.position, targetCell.parent);
                    this.game.tweens.removeFrom(this.tutorialHand);
                    this.tutorialHand.position.set(figureLocalPosition.x, figureLocalPosition.y);
                    this.tutorialHand.alpha = 0;
                    /* tweens */
                    const preparingTween = this.game.add.tween(this.tutorialHand)
                        .to({ alpha: 1, x: figureLocalPosition.x, y: figureLocalPosition.y }, 500, Phaser.Easing.Sinusoidal.Out, false);
                    const movingTween = this.game.add.tween(this.tutorialHand)
                        .to({
                        x: targetCellLocalPosition.x + (currentFigure.getModel().getCenterX() - 0.5) * BlockPuzzle.Settings.CELL_WIDTH * board.getScale(),
                        y: targetCellLocalPosition.y + (currentFigure.getModel().getCenterY() - 0.5) * BlockPuzzle.Settings.CELL_HEIGHT * board.getScale()
                    }, 1200, Phaser.Easing.Sinusoidal.InOut, false, 0, 0, false);
                    const finishingTween = this.game.add.tween(this.tutorialHand)
                        .to({ alpha: 0 }, 750, Phaser.Easing.Exponential.In, false);
                    const returningTween = this.game.add.tween(this.tutorialHand)
                        .to({ x: figureLocalPosition.x, y: figureLocalPosition.y }, 10, Phaser.Easing.Linear.None, false);
                    preparingTween.onComplete.add(() => this.tutorialHand.frameName = 'tutorialHand0001');
                    finishingTween.onStart.add(() => this.tutorialHand.frameName = 'tutorialHand0000');
                    preparingTween.chain(movingTween);
                    movingTween.chain(finishingTween);
                    finishingTween.chain(returningTween);
                    returningTween.chain(preparingTween);
                    preparingTween.start();
                    currentFigure.getModel().getCells().forEach(cell => board.getCellAt(targetCell.posX + cell.x, targetCell.posY + cell.y).showHighlighting(currentFigure.color, true));
                }
                else {
                    this.activeFigure = null;
                }
            }
        }
        handleFigurePlaced() {
            if (this.isInitialized && BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                return;
            }
            /* remove all tutorial highlightings */
            this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));
            if (this.isManualTutorialActive) {
                return this.finishTutorial();
            }
            /* show next figure */
            this.startHandAnimation();
        }
        handleRoundFinished() {
            this.finishTutorial();
        }
        finishTutorial() {
            if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                this.visible = false;
                this.activeFigure = null;
                BlockPuzzle.Settings.TUTORIAL_COMPLETED = true;
                BlockPuzzle.LocalStorageController.instance.save();
                if (BlockPuzzle.Settings.ENABLE_API) {
                    window["famobi_analytics"].trackEvent("EVENT_TUTORIALCOMPLETED");
                }
                this.level.boardManager.getBoard().getCells().forEach(cell => cell.resetView(true));
            }
        }
        /**
         * EVENT LISTENERS
         */
        handleBoardCreated() {
            this.isInitialized = true;
            this.startHandAnimation();
        }
    }
    BlockPuzzle.TutorialManager = TutorialManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class UIManager extends BlockPuzzle.AbstractManager {
        constructor(level) {
            super(level);
            this.buildContent();
        }
        buildContent() {
            this.famobiLogo = this.add(this.game.make.image(0, 0, 'famobi-logo'));
            this.famobiLogo.anchor.set(1, 1);
            this.famobiLogo.scale.set(0.2);
            this.famobiLogo.alpha = 0.85;
            this.copyrightText = this.add(BlockPuzzle.TextUtils.getText('© Famobi', 0, 0, 28, '#FFFFFF', 'Russo One'));
            this.copyrightText.alpha = 0.85;
            this.buttonAchievements = this.add(new BlockPuzzle.ButtonAchievements(this.level));
            this.buttonSettings = this.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonSettings', 0, 0, 1, this.settingsClicked, this));
            this.topContainer = this.add(this.game.make.group());
            this.scoreCounter = this.topContainer.add(new BlockPuzzle.ScoreCounter(this));
            this.starsCounter = this.topContainer.add(new BlockPuzzle.StarsCounter(this));
            this.multiplierBar = this.topContainer.add(new BlockPuzzle.MultiplierBar(this));
            this.powerupContainer = this.add(new BlockPuzzle.PowerupContainer(this));
        }
        resizeLandscape() {
            const availableBounds = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();
            this.buttonAchievements.position.set(this.level.windowBounds.left + availableBounds.width / 2, this.level.windowBounds.top + 70);
            this.buttonSettings.position.set(this.level.windowBounds.right - availableBounds.width / 2, this.level.windowBounds.top + 65);
            this.scoreCounter.position.set(-65, -50);
            this.multiplierBar.position.set(-65, -50);
            this.starsCounter.position.set(-65, 50);
            this.buttonAchievements["setScale"](1.18);
            this.buttonSettings["setScale"](1.18);
            this.topContainer.position.set(availableBounds.x, availableBounds.y);
            this.topContainer.scale.set(Math.min(1.25, availableBounds.width / this.topContainer.getLocalBounds().width));
            this.famobiLogo.visible = false;
            this.famobiLogo.anchor.set(1, 1);
            this.famobiLogo.position.copyFrom(this.level.windowBounds.getPosition(1, 1, 3, 3));
            this.copyrightText.anchor.set(1, 1);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 1, -5, 0));
            this.buttonAchievements.resizeLandscape();
            this.powerupContainer.resize();
        }
        resizeSquared() {
            this.buttonAchievements.position.set(this.level.windowBounds.left + 95, this.level.windowBounds.top + 60);
            this.buttonSettings.position.set(this.level.windowBounds.right - 88, this.level.windowBounds.top + 60);
            this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 55));
            this.topContainer.scale.set(0.95);
            this.scoreCounter.position.set(-this.level.windowBounds.width * 0.22, 0);
            this.multiplierBar.position.set(-this.level.windowBounds.width * 0.22, 0);
            this.starsCounter.position.set(this.level.windowBounds.width * 0.06, 0);
            this.buttonAchievements["setScale"](1.1);
            this.buttonSettings["setScale"](1.1);
            this.buttonAchievements.resizeSquared();
            this.powerupContainer.resize();
            this.copyrightText.anchor.set(1, 1);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 1, -5, 0));
            this.famobiLogo.visible = false;
        }
        resizePortrait() {
            const availableBounds = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();
            this.buttonAchievements.position.set(this.level.windowBounds.left + 65, this.level.windowBounds.down - 65);
            this.buttonSettings.position.set(this.level.windowBounds.right - 65, this.level.windowBounds.down - 65);
            this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 0));
            this.topContainer.y = availableBounds.y;
            this.topContainer.scale.set(1);
            this.scoreCounter.position.set(-this.level.windowBounds.width * 0.3, 0);
            this.multiplierBar.position.set(-this.level.windowBounds.width * 0.3, 0);
            this.starsCounter.position.set(this.level.windowBounds.width * 0.1, 0);
            this.buttonAchievements["setScale"](1.1);
            this.buttonSettings["setScale"](1.1);
            this.buttonAchievements.resizePortrait();
            this.powerupContainer.resize();
            this.famobiLogo.visible = false;
            this.famobiLogo.anchor.set(1, 0);
            this.famobiLogo.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -3, -1));
            this.copyrightText.anchor.set(1, 0);
            this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -5, 1));
        }
        levelFinished() {
            this.powerupContainer.hidePowerups();
        }
        /**
         * EVENT LISTENERS
         */
        settingsClicked() {
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SETTINGS);
            }
            BlockPuzzle.WindowManager.instance.showSettings();
        }
    }
    BlockPuzzle.UIManager = UIManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BoardModel {
        constructor(numCols, numRows) {
            this.cleanedCells = 0;
            this.numCols = numCols;
            this.numRows = numRows;
        }
        parseFromBoard(board) {
            this.cells = [];
            for (let i = 0; i < this.numCols; i++) {
                this.cells[i] = [];
                for (let j = 0; j < this.numRows; j++) {
                    this.cells[i][j] = BlockPuzzle.CellModelState.CELL_EMPTY;
                }
            }
            for (let cell of board.getCells()) {
                this.cells[cell.posX][cell.posY] = cell.isEmpty() ? BlockPuzzle.CellModelState.CELL_EMPTY : BlockPuzzle.CellModelState.CELL_BUSY;
            }
            return this;
        }
        getCopy() {
            return new BoardModel(this.numCols, this.numRows).copyFrom(this);
        }
        copyFrom(another) {
            this.cleanedCells = another.cleanedCells;
            this.cells = another.cells.map(col => col.slice());
            return this;
        }
        getCellStateAt(x, y) {
            return (x >= 0 && x < this.numCols && y >= 0 && y < this.numRows) ? this.cells[x][y] : null;
        }
        setCellStateAt(state, x, y) {
            if (x >= 0 && x < this.numCols && y >= 0 && y < this.numRows) {
                this.cells[x][y] = state;
            }
        }
        placeFigure(preset, position) {
            if (this.couldBePlaced(preset, position)) {
                preset.forEach(cellModel => this.setCellStateAt(BlockPuzzle.CellModelState.CELL_BUSY, position.x + cellModel.x, position.y + cellModel.y));
                this.clearFilledRowsAndColumns();
            }
        }
        couldBePlaced(figure, position) {
            return figure.map(cellModel => this.getCellStateAt(position.x + cellModel.x, position.y + cellModel.y)).every(cellStatus => cellStatus == BlockPuzzle.CellModelState.CELL_EMPTY);
        }
        print() {
            console.log(this.cells.map((col, colIdx) => col.map((item, rowIdx) => this.cells[rowIdx][colIdx])));
        }
        equals(another) {
            if (this.numRows != another.numRows || this.numCols != another.numCols) {
                return false;
            }
            for (let i = 0; i < this.numCols; i++) {
                for (let j = 0; j < this.numRows; j++) {
                    if (this.cells[i][j] != another.getCellStateAt(i, j)) {
                        return false;
                    }
                }
            }
            return true;
        }
        findCellsToClear() {
            let cellsToClear = [];
            //check rows
            for (let i = 0; i < this.numRows; i++) {
                if (this.isRowFilled(i)) {
                    cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getRowModel(i));
                }
            }
            //check columns
            for (let i = 0; i < this.numCols; i++) {
                if (this.isColumnFilled(i)) {
                    cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getColumnModel(i));
                }
            }
            return cellsToClear;
        }
        /**
         * PRIVATE
         */
        clearFilledRowsAndColumns() {
            this.findCellsToClear().forEach(cell => {
                if (this.getCellStateAt(cell.x, cell.y) != BlockPuzzle.CellModelState.CELL_EMPTY) {
                    this.cleanedCells += 1;
                    this.setCellStateAt(BlockPuzzle.CellModelState.CELL_EMPTY, cell.x, cell.y);
                }
            });
        }
        isRowFilled(rowIndex) {
            return this.getRow(rowIndex).every(cellState => cellState != BlockPuzzle.CellModelState.CELL_EMPTY);
        }
        isColumnFilled(columnIndex) {
            return this.getColumn(columnIndex).every(cellState => cellState != BlockPuzzle.CellModelState.CELL_EMPTY);
        }
        getRow(rowIndex) {
            return this.cells.map(column => column[rowIndex]);
        }
        getColumn(colIndex) {
            return this.cells[colIndex].slice();
        }
        getRowModel(rowIndex) {
            return this.cells.map((column, colIdx) => {
                return { x: colIdx, y: rowIndex };
            });
        }
        getColumnModel(colIndex) {
            return this.cells[colIndex].map((value, rowIdx) => {
                return { x: colIndex, y: rowIdx };
            });
        }
    }
    BlockPuzzle.BoardModel = BoardModel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class CellModel extends Phaser.Point {
        constructor(posX, posY) {
            super(posX, posY);
        }
        getCopy() {
            return new CellModel(this.posX, this.posY);
        }
        /* getters & setters */
        get posX() {
            return this.x;
        }
        set posX(value) {
            this.x = value;
        }
        get posY() {
            return this.y;
        }
        set posY(value) {
            this.y = value;
        }
    }
    BlockPuzzle.CellModel = CellModel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class FigureModel {
        constructor(cells) {
            this.figureWidth = 0;
            this.figureHeight = 0;
            this.centerX = 0;
            this.centerY = 0;
            this.cells = cells.slice();
            this.normalizeCells();
        }
        normalizeCells() {
            if (!this.cells || this.cells.length === 0) {
                return;
            }
            const minX = this.cells.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX;
            const minY = this.cells.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY;
            this.cells.forEach(cellModel => cellModel.subtract(minX, minY));
            /* calculate figure width & height (measured in cells) */
            this.figureWidth = this.cells.reduce((prev, cell) => prev.posX >= cell.posX ? prev : cell).posX - this.cells.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX + 1;
            this.figureHeight = this.cells.reduce((prev, cell) => prev.posY >= cell.posY ? prev : cell).posY - this.cells.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY + 1;
            this.centerX = this.figureWidth / 2;
            this.centerY = this.figureHeight / 2;
        }
        /**
         * PUBLIC
         */
        setPosition(posX, posY) {
            this.posX = posX;
            this.posY = posY;
            return this;
        }
        getCells() {
            return this.cells;
        }
        numCells() {
            return this.getCells().length;
        }
        getWidth() {
            return this.figureWidth;
        }
        getHeight() {
            return this.figureHeight;
        }
        getCenterX() {
            return this.centerX;
        }
        getCenterY() {
            return this.centerY;
        }
        clone() {
            return new FigureModel(this.getCells().map(cell => new BlockPuzzle.CellModel(cell.posX, cell.posY)));
        }
    }
    BlockPuzzle.FigureModel = FigureModel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractService {
        constructor(serviceManager) {
            this.serviceManager = serviceManager;
            this.level = serviceManager.level;
        }
    }
    BlockPuzzle.AbstractService = AbstractService;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="../../Types.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class FigureService extends BlockPuzzle.AbstractService {
        constructor() {
            super(...arguments);
            this.prevColor = null;
            this.figurePresets = [
                this.normalizeCells([
                    new BlockPuzzle.CellModel(1, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(1, 0)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(2, 0)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(0, 2)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(0, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(1, 1),
                    new BlockPuzzle.CellModel(2, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(0, 2),
                    new BlockPuzzle.CellModel(0, 3)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(1, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(1, 1),
                    new BlockPuzzle.CellModel(2, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(2, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(1, 1)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(2, 0),
                    new BlockPuzzle.CellModel(3, 0),
                    new BlockPuzzle.CellModel(4, 0)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(2, 0),
                    new BlockPuzzle.CellModel(2, 1),
                    new BlockPuzzle.CellModel(2, 2)
                ]),
                this.normalizeCells([
                    new BlockPuzzle.CellModel(0, 0),
                    new BlockPuzzle.CellModel(0, 1),
                    new BlockPuzzle.CellModel(0, 2),
                    new BlockPuzzle.CellModel(1, 0),
                    new BlockPuzzle.CellModel(1, 1),
                    new BlockPuzzle.CellModel(1, 2),
                    new BlockPuzzle.CellModel(2, 0),
                    new BlockPuzzle.CellModel(2, 1),
                    new BlockPuzzle.CellModel(2, 2)
                ])
            ];
            this.tutorialPlacements = [
                {
                    preset: this.normalizeCells([
                        new BlockPuzzle.CellModel(0, 0),
                        new BlockPuzzle.CellModel(0, 1),
                        new BlockPuzzle.CellModel(1, 1),
                        new BlockPuzzle.CellModel(2, 1)
                    ]), position: { x: 2, y: 3 }
                },
                {
                    preset: this.normalizeCells([
                        new BlockPuzzle.CellModel(0, 0),
                        new BlockPuzzle.CellModel(0, 1),
                        new BlockPuzzle.CellModel(1, 0),
                        new BlockPuzzle.CellModel(1, 1)
                    ]), position: { x: 0, y: 3 }
                },
                {
                    preset: this.normalizeCells([
                        new BlockPuzzle.CellModel(0, 0),
                        new BlockPuzzle.CellModel(0, 1),
                        new BlockPuzzle.CellModel(0, 2),
                        new BlockPuzzle.CellModel(1, 0),
                        new BlockPuzzle.CellModel(1, 1),
                        new BlockPuzzle.CellModel(1, 2),
                        new BlockPuzzle.CellModel(2, 0),
                        new BlockPuzzle.CellModel(2, 1),
                        new BlockPuzzle.CellModel(2, 2)
                    ]), position: { x: 5, y: 2 }
                }
            ];
            this.iterations = 0;
        }
        normalizeCells(preset) {
            const minX = preset.reduce((prev, cell) => prev.posX <= cell.posX ? prev : cell).posX;
            const minY = preset.reduce((prev, cell) => prev.posY <= cell.posY ? prev : cell).posY;
            preset.forEach(cellModel => cellModel.subtract(minX, minY));
            return preset;
        }
        getRandomFigureModel() {
            return new BlockPuzzle.FigureModel(this.getCopy(Phaser.ArrayUtils.getRandomItem(this.figurePresets)));
        }
        getRandomColor() {
            this.prevColor = Phaser.ArrayUtils.getRandomItem(Object.keys(BlockPuzzle.BlockColor).map(key => BlockPuzzle.BlockColor[key]).filter(value => typeof value === "number" && value != this.prevColor));
            return this.prevColor;
        }
        getRandomPositionForFigure(figure, boardModel) {
            return Phaser.ArrayUtils.getRandomItem(this.findFigurePositions(figure.getModel().getCells(), boardModel, 1)) || null;
        }
        hasAvailableSpaceForFigure(figure, boardModel) {
            let positions = this.findFigurePositions(figure.getModel().getCells(), boardModel, 1);
            return positions.length > 0;
        }
        /*
         * VARIANT 1
         */
        getNextFiguresSet(boardModel) {
            if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                return this.tutorialPlacements.map(placement => new BlockPuzzle.FigureModel(this.getCopy(placement.preset)).setPosition(placement.position.x, placement.position.y));
            }
            this.iterations = 0;
            let results = [];
            this.findFigurePositionsRecursive(boardModel, [], results);
            results.sort((a, b) => b.reduce((sum, elem) => sum + elem.preset.length, 0) - a.reduce((sum, elem) => sum + elem.preset.length, 0));
            if (results.length > 0) {
                return Phaser.ArrayUtils.shuffle(BlockPuzzle.ArrayUtils.getRandomItem(results, BlockPuzzle.Settings.RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR).map(result => new BlockPuzzle.FigureModel(result.preset)));
            }
            else {
                return Phaser.ArrayUtils.shuffle([this.getRandomFigureModel(), this.getRandomFigureModel(), this.getRandomFigureModel()]);
            }
        }
        findFigurePositionsRecursive(boardModel, placedFigures, resultsArray) {
            let possiblePlaces = this.findAppropriateFigurePresetsForBoard(boardModel, true);
            if (possiblePlaces.length > 0) {
                if (resultsArray.length > 0) {
                    //return;
                    /* optimization */
                    possiblePlaces = [Phaser.ArrayUtils.getRandomItem(possiblePlaces)];
                }
                for (let place of possiblePlaces) {
                    for (let figurePosition of place.figurePositions) {
                        this.iterations++;
                        if (placedFigures.length == 2) {
                            resultsArray.push(placedFigures.slice().concat({
                                preset: place.figurePreset,
                                position: figurePosition,
                                cleanedCells: boardModel.cleanedCells
                            }));
                        }
                        else {
                            let boardCopy = boardModel.getCopy();
                            boardCopy.placeFigure(place.figurePreset, figurePosition);
                            this.findFigurePositionsRecursive(boardCopy, placedFigures.slice().concat({
                                preset: place.figurePreset,
                                position: figurePosition,
                                cleanedCells: boardCopy.cleanedCells
                            }), resultsArray);
                        }
                    }
                }
            }
        }
        findAppropriateFigurePresetsForBoard(boardModel, shuffleResults) {
            const possibleCases = [];
            for (let preset of Phaser.ArrayUtils.shuffle(this.figurePresets.slice())) {
                possibleCases.push({
                    figurePreset: preset,
                    figurePositions: this.findFigurePositions(preset, boardModel, BlockPuzzle.Settings.GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE)
                });
            }
            return shuffleResults ? Phaser.ArrayUtils.shuffle(possibleCases) : possibleCases;
        }
        /**
         * PRIVATE
         */
        findFiguresAtPosition(position, boardModel) {
            let presets = [];
            for (let preset of this.figurePresets) {
                if (boardModel.couldBePlaced(preset, position)) {
                    presets.push(preset);
                }
            }
            return presets;
        }
        findFigurePositions(preset, boardModel, limitPositionsCount) {
            let positions = [];
            for (let px of Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])) {
                for (let py of Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])) {
                    if (boardModel.couldBePlaced(preset, { x: px, y: py })) {
                        positions.push({ x: px, y: py });
                        if (positions.length >= limitPositionsCount) {
                            return positions;
                        }
                    }
                }
            }
            return positions;
        }
        getCopy(figurePreset) {
            return figurePreset.map(cellModel => cellModel.getCopy());
        }
    }
    BlockPuzzle.FigureService = FigureService;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class InscriptionsService extends BlockPuzzle.AbstractService {
        constructor(serviceManager) {
            super(serviceManager);
            this.level.eventManager.onLinesDestroyed.add(this.dispatchLinesDestroyed, this);
        }
        dispatchLinesDestroyed(destroyedLines, cellPositions) {
            if (destroyedLines >= 2) {
                let px = cellPositions.reduce((accumulator, current) => accumulator += current.x, 0) / cellPositions.length;
                let py = cellPositions.reduce((accumulator, current) => accumulator += current.y, 0) / cellPositions.length;
                let targetCellPosition = this.level.boardManager.getBoard().getCellAt(Math.floor(px), Math.floor(py)).position;
                this.displayInscription(destroyedLines, targetCellPosition.x, targetCellPosition.y);
            }
        }
        displayInscription(inscriptionPower, x, y) {
            let inscriptionLevel = BlockPuzzle.InscriptionLevel.AWESOME;
            switch (inscriptionPower) {
                case 2:
                    inscriptionLevel = BlockPuzzle.InscriptionLevel.GOOD;
                    break;
                case 3:
                    inscriptionLevel = BlockPuzzle.InscriptionLevel.GREAT;
                    break;
                case 4:
                    inscriptionLevel = BlockPuzzle.InscriptionLevel.EXCELLENT;
                    break;
                case 5:
                    inscriptionLevel = BlockPuzzle.InscriptionLevel.AWESOME;
                    break;
            }
            let insription = this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.InscriptionEffect(inscriptionLevel, x, y));
        }
        displayScoresEffect(scores, x, y) {
            new BlockPuzzle.ScoresEffect(this.level, scores * BlockPuzzle.ScoreManager.instance.getMultiplier(), x, Math.max(y, -150), 50);
            BlockPuzzle.ScoreManager.instance.addScores(scores);
        }
    }
    BlockPuzzle.InscriptionsService = InscriptionsService;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class LayoutService extends BlockPuzzle.AbstractService {
        getFigureDraggingDelta(figureBarIndex) {
            return BlockPuzzle.App.instance.device.desktop ? { x: 0, y: 0 } : BlockPuzzle.CustomScaleManager.isPortrait() ? { x: 0, y: BlockPuzzle.Settings.FIGURE_VIEW_DRAGGING_DELTA } : { x: BlockPuzzle.Settings.FIGURE_VIEW_DRAGGING_DELTA, y: -30 * (figureBarIndex) };
        }
        getPowerupDraggingDelta() {
            return BlockPuzzle.App.instance.device.desktop ? { x: 0, y: 0 } : BlockPuzzle.CustomScaleManager.isPortrait() ? { x: 0, y: BlockPuzzle.Settings.POWERUP_DRAGGING_DELTA } : { x: 0, y: BlockPuzzle.Settings.POWERUP_DRAGGING_DELTA };
        }
        getAvailableBoardBounds() {
            if (BlockPuzzle.CustomScaleManager.isPortrait()) {
                const { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 1, 0.12, 0.75);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isSquared()) {
                const { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 0.75, 0.15, 1);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
                const { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0.2, 0.8, 0, 1);
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }
        getAvailableFiguresPanelBounds() {
            if (BlockPuzzle.CustomScaleManager.isPortrait()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 1, 0.75, 0.94);
                let bounds = this.level.boardManager.getBoardBounds(this.level.container);
                let availableHeight = this.level.boardManager.getBoardBounds(this.level.container).width * 5 / 15;
                minY = this.level.boardManager.getBoardBounds(this.level.container, false).bottom;
                return new Phaser.Rectangle((minX + maxX) / 2, minY + availableHeight / 2, maxX - minX, availableHeight);
            }
            else if (BlockPuzzle.CustomScaleManager.isSquared()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0.75, 1, 0.15, 0.87);
                minX = this.level.boardManager.getBoardBounds(this.level.container).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0.8, 1, 0.16, 1);
                minX = this.level.boardManager.getBoardBounds(this.level.container).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }
        getAvailableUIContainerBounds() {
            if (BlockPuzzle.CustomScaleManager.isPortrait()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 1, 0, 0.15);
                maxY = this.level.boardManager.getBoardBounds(this.level.container).top;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isSquared()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 1, 0, 0.15);
                maxY = this.level.boardManager.getBoardBounds(this.level.container).top;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 0.2, 0.25, 0.72);
                maxX = this.level.boardManager.getBoardBounds(this.level.container).left;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }
        getFigureDisposingTweenParams() {
            return BlockPuzzle.CustomScaleManager.isPortrait() ? { y: '+75', alpha: 0 } : { x: '+75', alpha: 0 };
        }
        getAvailablePowerupsContainerBounds() {
            if (BlockPuzzle.CustomScaleManager.isPortrait()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 1, 0.9, 1);
                minY = this.getAvailableFiguresPanelBounds().y + this.getAvailableFiguresPanelBounds().height / 2;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
                // minY = this.level.boardManager.getBoardBounds(this.level.container).bottom;
                // return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isSquared()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0.8, 1, 0.86, 0.95);
                minX = this.level.boardManager.getBoardBounds(this.level.container, false).right;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
            else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
                let { minX, maxX, minY, maxY } = this.level.windowBounds.getBounds(0, 0.2, 0.86, 0.94);
                maxX = this.level.boardManager.getBoardBounds(this.level.container, false).left;
                return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
            }
        }
    }
    BlockPuzzle.LayoutService = LayoutService;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class StarsService extends BlockPuzzle.AbstractService {
        constructor(serviceManager) {
            super(serviceManager);
            this.currentStarGenerationProbability = 0;
            this.currentStarGenerationProbability = BlockPuzzle.Settings.BASIC_STAR_GENERATION_PROBABILITY;
            this.level.eventManager.onLinesDestroyed.add(this.dispatchLinesDestroyed, this);
            this.level.eventManager.onMoveFinished.add(this.dispatchMoveFinished, this);
        }
        dispatchMoveFinished(numMoves) {
            if (numMoves < BlockPuzzle.Settings.SKIP_STARS_GENERATION_FOR_FIRST_X_MOVES) {
                return;
            }
            if (Math.random() < this.currentStarGenerationProbability) {
                if (this.level.boardManager.getBoard().getNumStarsOnTheBoard() < BlockPuzzle.Settings.MAX_STARS_ON_BOARD_SIMULTANEOUSLY) {
                    this.currentStarGenerationProbability = BlockPuzzle.Settings.BASIC_STAR_GENERATION_PROBABILITY;
                    this.generateRandomStar(BlockPuzzle.Settings.STAR_GENERATION_DELAY);
                    if (Math.random() < BlockPuzzle.Settings.ADDITIONAL_SECOND_STAR_GENERATION_PROBABILITY) {
                        this.generateRandomStar(BlockPuzzle.Settings.STAR_GENERATION_DELAY * 1.5);
                    }
                }
            }
            else {
                this.currentStarGenerationProbability = Phaser.Math.clamp(this.currentStarGenerationProbability + BlockPuzzle.Settings.BASIC_STAR_GENERATION_PROBABILITY_STEP, 0, BlockPuzzle.Settings.MAX_STAR_GENERATING_PROBABILITY);
            }
        }
        dispatchLinesDestroyed(destroyedLines) {
            // if(destroyedLines >= 2) {
            //     const additionalMultilineProbability: number = Math.max(0, destroyedLines - 1) * Settings.ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES;
            //     if(Math.random() < additionalMultilineProbability) {
            //         this.currentStarGenerationProbability = Settings.BASIC_STAR_GENERATION_PROBABILITY;
            //         this.generateRandomStar(Settings.STAR_GENERATION_DELAY);
            //     }
            // }
        }
        generateRandomStar(delay) {
            BlockPuzzle.App.instance.time.events.add(delay, () => {
                if (this.level.gameStateManager.isGameActive()) {
                    const availableCells = this.level.boardManager.getBoard().getCells().filter(cell => cell && !cell.isEmpty() && !cell.getBlock().hasStar());
                    if (availableCells.length > 0) {
                        Phaser.ArrayUtils.getRandomItem(availableCells).getBlock().addStar(this.level);
                    }
                }
            });
        }
    }
    BlockPuzzle.StarsService = StarsService;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class FigureView extends Phaser.Group {
        constructor(figure, figureModel) {
            super(figure.game);
            this.isReady = false;
            this.figure = figure;
            this.level = figure.level;
            this.viewDeltaX = -this.figure.figureWidth / 2 + 0.5;
            this.viewDeltaY = -this.figure.figureHeight / 2 + 0.5;
            this.createBlocks(figureModel);
            this.tweenScale(BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE, false, 0);
        }
        createBlocks(figureModel) {
            this.blocks = figureModel.getCells().map(cellModel => this.add(new BlockPuzzle.Block(cellModel, this.figure.color)));
        }
        alignBlocks() {
            this.blocks.forEach(block => block.position.set((block.posX + this.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH, (block.posY + this.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT));
        }
        /**
         * PUBLIC
         */
        getBlocks() {
            return this.blocks;
        }
        getFirstBlock() {
            return this.blocks[0];
        }
        playAppearingTween(delay) {
            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({ x: 1, y: 1 }, BlockPuzzle.Settings.FIGURE_APPEARING_DURATION, Phaser.Easing.Back.Out, true, delay)
                .onComplete.add(() => this.isReady = true);
        }
        tweenScale(scale, keepOriginalPosition, duration, scaleMultiplier = 1) {
            const targetScale = scale * scaleMultiplier;
            const noScale = 1 * scaleMultiplier;
            this.blocks.forEach(block => {
                this.game.tweens.removeFrom(block, false);
                this.game.tweens.removeFrom(block.scale, false);
                if (duration > 0) {
                    this.game.add.tween(block.scale)
                        .to({ x: targetScale, y: targetScale }, duration, Phaser.Easing.Sinusoidal.In, true);
                    this.game.add.tween(block)
                        .to({
                        x: (block.posX + this.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale),
                        y: (block.posY + this.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale)
                    }, duration, Phaser.Easing.Sinusoidal.In, true);
                }
                else {
                    block.scale.set(targetScale);
                    block.position.set((block.posX + this.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale), (block.posY + this.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale));
                }
            });
        }
    }
    BlockPuzzle.FigureView = FigureView;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class PowerupManager {
        constructor() {
            this.onPowerupBought = new Phaser.Signal();
            this.powerupStates = new Map();
            this.powerupStates.set(BlockPuzzle.PowerupType.BOMB, false);
            this.powerupStates.set(BlockPuzzle.PowerupType.LIGHTNING, false);
            this.powerupPrices = new Map();
            this.powerupPrices.set(BlockPuzzle.PowerupType.BOMB, BlockPuzzle.Settings.BOMB_PRICE);
            this.powerupPrices.set(BlockPuzzle.PowerupType.LIGHTNING, BlockPuzzle.Settings.LIGHTNING_PRICE);
            this.powerupPriceSteps = new Map();
            this.powerupPriceSteps.set(BlockPuzzle.PowerupType.BOMB, BlockPuzzle.Settings.BOMB_PRICE_STEP);
            this.powerupPriceSteps.set(BlockPuzzle.PowerupType.LIGHTNING, BlockPuzzle.Settings.LIGHTNING_PRICE_STEP);
        }
        static get instance() {
            return PowerupManager._instance ? PowerupManager._instance : PowerupManager._instance = new PowerupManager();
        }
        setInitialState(powerupType, value) {
            this.powerupStates.set(powerupType, value);
        }
        isBought(powerupType) {
            return this.powerupStates.get(powerupType) || false;
        }
        resetPrices() {
            this.powerupPrices.set(BlockPuzzle.PowerupType.BOMB, BlockPuzzle.Settings.BOMB_PRICE);
            this.powerupPrices.set(BlockPuzzle.PowerupType.LIGHTNING, BlockPuzzle.Settings.LIGHTNING_PRICE);
        }
        buy(powerupType) {
            this.powerupStates.set(powerupType, true);
            BlockPuzzle.StarsManager.instance.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount() - this.getPrice(powerupType));
            this.onPowerupBought.dispatch(powerupType);
            BlockPuzzle.LocalStorageController.instance.save();
            this.powerupPrices.set(powerupType, this.powerupPrices.get(powerupType) + this.powerupPriceSteps.get(powerupType));
        }
        usePowerup(powerupType) {
            this.powerupStates.set(powerupType, false);
            BlockPuzzle.LocalStorageController.instance.save();
        }
        getPrice(powerupType) {
            return this.powerupPrices.get(powerupType) || Number.MAX_SAFE_INTEGER;
        }
        hasUnboughtPowerups() {
            let hasAvailablePowerups = false;
            this.powerupStates.forEach((state, key) => {
                if (!state) {
                    hasAvailablePowerups = true;
                }
            });
            return hasAvailablePowerups;
        }
        hasBoughtPowerups() {
            let hasBoughtPowerups = false;
            this.powerupStates.forEach((state, key) => {
                if (state) {
                    hasBoughtPowerups = true;
                }
            });
            return hasBoughtPowerups;
        }
    }
    PowerupManager._instance = null;
    BlockPuzzle.PowerupManager = PowerupManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ScoreManager {
        constructor() {
            this.currentMultiplier = 1;
            this.maxScores = 0;
            this.prevMaxScores = 0;
            this.currentScore = 0;
            this.lastRoundScores = 0;
            this.roundNumber = 0;
            this.onScoreChanges = new Phaser.Signal();
            this.onMultiplierChanges = new Phaser.Signal();
        }
        static get instance() {
            return ScoreManager._instance ? ScoreManager._instance : ScoreManager._instance = new ScoreManager();
        }
        reset() {
            this.currentScore = 0;
            this.currentMultiplier = 1;
        }
        getCurrentScores() {
            return ~~this.currentScore;
        }
        addScores(value) {
            this.lastRoundScores = value * this.getMultiplier();
            this.currentScore += this.lastRoundScores;
            if (value != 0) {
                this.currentMultiplier = this.calculateMultiplier();
                this.onScoreChanges.dispatch(this.getCurrentScores());
                this.onMultiplierChanges.dispatch(this.getMultiplier(), this.getMultiplierProgress());
                BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_SCORES, this.lastRoundScores);
                BlockPuzzle.AchievementsManager.instance.setValue(BlockPuzzle.AchievementType.BEST_SCORE_REACHED, this.getCurrentScores());
                BlockPuzzle.Analytics.instance.updateLevelData({ score: this.getCurrentScores() });
                BlockPuzzle.APIUtils.instance.trackStats('best_scores', this.getCurrentScores(), true);
            }
        }
        startRound() {
            this.roundNumber++;
        }
        getRoundNumber() {
            return this.roundNumber;
        }
        isFirstRound() {
            return this.roundNumber <= 1;
        }
        /**
         * MULTIPLIER
         */
        calculateMultiplier() {
            const scores = this.getCurrentScores();
            for (let i = 0; i < BlockPuzzle.Settings.MULTIPLIER_MILESTONES.length; i++) {
                if (BlockPuzzle.Settings.MULTIPLIER_MILESTONES[i] > scores) {
                    return i + 1;
                }
            }
            return BlockPuzzle.Settings.MULTIPLIER_MILESTONES.length;
        }
        getMultiplier() {
            return this.currentMultiplier;
        }
        getMultiplierProgress() {
            if (this.currentMultiplier >= 2) {
                return (this.getCurrentScores() - BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]) / (BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1] - BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]);
            }
            else {
                return this.getCurrentScores() / BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1];
            }
        }
        /**
         * MAX SCORES
         */
        getMaxScores() {
            return this.maxScores;
        }
        getPrevMaxScores() {
            return this.prevMaxScores;
        }
        setMaxScores(value) {
            this.maxScores = Math.max(this.maxScores, value);
            this.prevMaxScores = this.maxScores;
        }
        updateMaxScores(currentScores) {
            if (currentScores > this.maxScores) {
                this.prevMaxScores = this.maxScores;
                this.maxScores = currentScores;
                BlockPuzzle.LocalStorageController.instance.save();
                return true;
            }
            return false;
        }
        /**
         * LISTENERS
         */
        removeListeners() {
            this.onScoreChanges.removeAll();
            this.onMultiplierChanges.removeAll();
        }
    }
    ScoreManager._instance = null;
    BlockPuzzle.ScoreManager = ScoreManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class StarsManager {
        constructor() {
            this.numStars = 0;
            this.lastRoundStars = 0;
            this.onStarAdded = new Phaser.Signal();
            this.onStarsAmountChanged = new Phaser.Signal();
        }
        static get instance() {
            return StarsManager._instance ? StarsManager._instance : StarsManager._instance = new StarsManager();
        }
        reset() {
            this.lastRoundStars = 0;
        }
        getLastRoundStars() {
            return this.lastRoundStars;
        }
        getStarsAmount() {
            return this.numStars;
        }
        setStarsAmount(value, save = true) {
            this.numStars = value;
            this.onStarsAmountChanged.dispatch(this.getStarsAmount());
            if (save) {
                BlockPuzzle.LocalStorageController.instance.save();
            }
        }
        addBonusStars(amount) {
            this.setStarsAmount(this.getStarsAmount() + amount);
            this.lastRoundStars += amount;
            BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_STARS, amount);
            BlockPuzzle.APIUtils.instance.trackStatsChange('stars_picked_up', amount);
            BlockPuzzle.Analytics.instance.updateLevelData({ stars: this.getStarsAmount() });
        }
        pickupStars(amount, silent = false) {
            this.setStarsAmount(this.getStarsAmount() + amount);
            if (!silent) {
                this.lastRoundStars += amount;
            }
            BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_STARS, amount);
            BlockPuzzle.APIUtils.instance.trackStatsChange('stars_picked_up', amount);
            BlockPuzzle.Analytics.instance.updateLevelData({ stars: this.getStarsAmount() });
            this.onStarAdded.dispatch(this.getStarsAmount());
            BlockPuzzle.LocalStorageController.instance.save();
        }
        /**
         * LISTENERS
         */
        removeListeners() {
        }
    }
    StarsManager._instance = null;
    BlockPuzzle.StarsManager = StarsManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class SoundController {
        constructor() {
            this.currentMusicVolume = BlockPuzzle.Settings.MUSIC_ENABLED_BY_DEFAULT ? 0.4 : 0;
            this.currentSFXVolume = 0.5;
            this.currentBlockDestroyingSoundIndex = 0;
            this.hadBeenMutedBeforePauseTriggered = false;
            this.debouncedSoundsTimestamps = new Map();
            this.melodyNames = ["melody"];
            this.soundNames = [
                "click",
                "error",
                "counting",
                "panel",
                "panelUp",
                "figureTap",
                "figureRelease",
                "figureFail",
                "starAppear",
                "starReceived",
                "good",
                "great",
                "excellent",
                "awesome",
                "buying",
                "match1",
                "match2",
                "match3",
                "match4",
                "match5",
                "match6",
                "match7",
                "block",
                "revive",
                "lose",
                "stamp",
                "heartbeat",
                "levelUp",
                "reward",
                "achievement",
                "fire",
                "bomb",
                "lighting"
            ];
        }
        static get instance() {
            return SoundController._instance ? SoundController._instance :
                SoundController._instance = new SoundController();
        }
        isDecodingSupported() {
            return BlockPuzzle.App.instance.sound.usingWebAudio;
        }
        getSFXNames() {
            return this.soundNames;
        }
        getSoundNames() {
            return this.melodyNames.slice().concat(this.soundNames);
        }
        /**
         * MUSIC
         */
        init() {
        }
        startMusic() {
            this.mainTheme = BlockPuzzle.App.instance.sound.play('melody', this.currentMusicVolume, true);
        }
        /**
         * PAUSE/RESUME SOUND
         */
        pauseAudio() {
            this.hadBeenMutedBeforePauseTriggered = BlockPuzzle.App.instance.sound.mute;
            BlockPuzzle.App.instance.sound.mute = true;
        }
        resumeAudio() {
            BlockPuzzle.App.instance.sound.mute = this.hadBeenMutedBeforePauseTriggered;
        }
        addSuspendedContextRestoreHandler() {
            if ('ontouchstart' in window && BlockPuzzle.App.instance.sound.usingWebAudio) {
                console.log("Adding context resume handler...");
                document.querySelector('canvas').addEventListener('touchstart', function () {
                    if (BlockPuzzle.App.instance.sound.context.state === 'suspended') {
                        console.log('Resuming suspended context...');
                        BlockPuzzle.App.instance.sound.context.resume().then(() => {
                            console.log('Playback resumed successfully');
                        });
                    }
                });
            }
        }
        getMusicVolume() {
            return this.currentMusicVolume;
        }
        setMusicVolume(value) {
            this.currentMusicVolume = Phaser.Math.clamp(value, 0, 1);
            if (this.mainTheme && this.mainTheme.isPlaying) {
                this.mainTheme.volume = this.currentMusicVolume;
            }
        }
        getSFXVolume() {
            return this.currentSFXVolume;
        }
        setSFXVolume(value) {
            this.currentSFXVolume = Phaser.Math.clamp(value, 0, 1);
        }
        /**
         * SOUNDS
         */
        playClickSound() {
            this.playSound('click');
        }
        playPanelMovementSound() {
            this.playSound('panel');
        }
        playPanelUpMovementSound() {
            this.playSound('panelUp');
        }
        playFigurePickupSound() {
            this.playSound('figureTap');
        }
        playFigurePlaceSound() {
            this.playSound('figureRelease');
        }
        playFigureFailSound() {
            this.playSound('figureFail');
        }
        playStarAppearSound() {
            this.playSound('starAppear');
        }
        playStarReceivedSound() {
            this.playSound('starReceived');
        }
        playBuyingSound() {
            this.playSound('buying');
        }
        playBlockSound() {
            this.playSound('block', 0.8);
        }
        playReviveSound() {
            this.playSound('revive', 0.6);
        }
        playStampSound() {
            this.playSound('stamp');
        }
        playErrorSound() {
            this.playSound('error');
        }
        playLoseSound() {
            BlockPuzzle.App.instance.time.events.add(70, () => this.playSound('lose', 0.7));
        }
        playHeartBeatSound() {
            this.playSound('heartbeat', 1);
        }
        playlevelUpSound() {
            this.playSound('levelUp', 0.5);
        }
        playAchievementClaimedSound() {
            this.playSound('achievement', 0.8);
        }
        playRewardClaimedSound() {
            this.playSound('reward', 0.8);
        }
        playExplosionSound() {
            this.playSound('bomb', 0.8);
            this.playSound('fire', 0.8);
        }
        playLightningSound() {
            this.playSound('lighting', 0.8);
        }
        playNextLineDestroyingSound(numLines) {
            this.playSound('match' + ((this.currentBlockDestroyingSoundIndex++ % 7) + 1));
            this.playSound('block');
            if (numLines > 1) {
                BlockPuzzle.App.instance.time.events.add(100, () => this.playSound('block'));
            }
        }
        playInscriptionSound(inscriptionLevel) {
            switch (inscriptionLevel) {
                case BlockPuzzle.InscriptionLevel.GOOD:
                    this.playSound('good', 0.6);
                    break;
                case BlockPuzzle.InscriptionLevel.GREAT:
                    this.playSound('great', 0.6);
                    break;
                case BlockPuzzle.InscriptionLevel.AWESOME:
                    this.playSound('awesome', 0.6);
                    break;
                case BlockPuzzle.InscriptionLevel.EXCELLENT:
                    this.playSound('excellent', 0.6);
                    break;
            }
        }
        playSound(key, volume = 0.5, loop = false) {
            if (BlockPuzzle.App.instance.sound.usingWebAudio && BlockPuzzle.App.instance.sound.context.state === 'suspended') {
                //skip this sound
            }
            else {
                BlockPuzzle.App.instance.sound.play(key, volume * this.currentSFXVolume, loop);
            }
        }
        /**
         * COUNTING
         */
        startCountingSound() {
            if (this.countingSound) {
                this.stopCountingSound();
            }
            this.countingSound = BlockPuzzle.App.instance.add.sound('counting', 0.55, true);
            this.countingSound.play();
        }
        stopCountingSound() {
            if (this.countingSound) {
                if (this.countingSound.isPlaying) {
                    this.countingSound.stop();
                }
                this.countingSound.destroy();
            }
            this.countingSound = null;
        }
        /**
         * PRIVATE
         */
        debounceSound(key, volume, interval) {
            const currentTime = new Date().getTime();
            const lastTimestamp = this.debouncedSoundsTimestamps.get(key) || 0;
            if (currentTime - lastTimestamp >= interval) {
                this.playSound(key, volume, false);
                this.debouncedSoundsTimestamps.set(key, currentTime);
            }
        }
        /**
         * MUSIC
         */
        chokeMusicVolume(duration = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.currentMusicVolume > 0 ? Math.min(0.1, this.currentMusicVolume / 3) : 0);
            }
        }
        restoreMusicVolume(duration = 500) {
            if (this.mainTheme) {
                this.mainTheme.fadeTo(duration, this.currentMusicVolume);
            }
        }
    }
    SoundController._instance = null;
    BlockPuzzle.SoundController = SoundController;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AutoResizeableState extends Phaser.State {
        init(containerWidth = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH, containerHeight = BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT) {
            super.init();
            this.isInitialized = false;
            this.containerWidth = containerWidth;
            this.containerHeight = containerHeight;
            this.container = this.add.existing(this.game.make.group(null));
            this.originalBounds = new WindowBounds();
            this.originalBounds.set(0, BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH, 0, BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT);
            this.resize();
        }
        create() {
            this.isInitialized = true;
        }
        addChild(child) {
            return this.container.add(child);
        }
        getInputPosition() {
            return new Phaser.Point((this.game.input.activePointer.x - this.container.x) / BlockPuzzle.CustomScaleManager.SCALE_X, (this.game.input.activePointer.y - this.container.y) / BlockPuzzle.CustomScaleManager.SCALE_Y);
        }
        translateInputPosition(pointer) {
            return new Phaser.Point((pointer.x - this.container.x) / BlockPuzzle.CustomScaleManager.SCALE_X, (pointer.y - this.container.y) / BlockPuzzle.CustomScaleManager.SCALE_Y);
        }
        resize(width = 0, height = 0) {
            this.container.scale.set(BlockPuzzle.CustomScaleManager.SCALE_X, BlockPuzzle.CustomScaleManager.SCALE_Y);
            this.container.position.set(BlockPuzzle.CustomScaleManager.WIDTH / 2 - this.containerWidth * BlockPuzzle.CustomScaleManager.SCALE_X / 2, BlockPuzzle.CustomScaleManager.HEIGHT / 2 - this.containerHeight * BlockPuzzle.CustomScaleManager.SCALE_Y / 2);
            this.windowBounds = this.windowBounds || new WindowBounds();
            this.windowBounds.set(-(BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2, (BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
        }
        shutdown() {
            this.container.destroy();
            this.container = null;
        }
    }
    BlockPuzzle.AutoResizeableState = AutoResizeableState;
    class WindowBounds {
        constructor() {
            this.set(0, 0, 0, 0);
        }
        set(left, right, top, down) {
            this.left = left;
            this.right = right;
            this.top = top;
            this.down = down;
            this.x = left;
            this.y = top;
            this.width = right - left;
            this.height = down - top;
            this.centerX = (right + left) / 2;
            this.centerY = (down + top) / 2;
        }
        getPosition(rx, ry, dx = 0, dy = 0) {
            return new Phaser.Point(this.left + rx * this.width + dx, this.top + ry * this.height + dy);
        }
        getBounds(left, right, top, down) {
            return { minX: this.left + left * this.width, maxX: this.left + right * this.width, minY: this.top + top * this.height, maxY: this.top + down * this.height };
        }
    }
    BlockPuzzle.WindowBounds = WindowBounds;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Boot extends Phaser.State {
        init() {
            this.game.scale.scaleMode = BlockPuzzle.CustomScaleManager.getScaleMode();
            this.game.scale.fullScreenScaleMode = BlockPuzzle.CustomScaleManager.getScaleMode();
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            if (this.game.device.android) {
                this.game.input.mouse.enabled = !this.game.device.mspointer;
            }
            this.game.scale.setResizeCallback(this.resizeCallback, this);
            this.game.scale.onSizeChange.add(this.sizeChanged, this);
            this.stage.disableVisibilityChange = true;
            BlockPuzzle.Analytics.instance.initUser();
            BlockPuzzle.SoundController.instance.addSuspendedContextRestoreHandler();
        }
        preload() {
            this.game.load.atlasJSONArray(BlockPuzzle.Settings.PRELOADER_ATLAS, 'img/' + BlockPuzzle.Settings.PRELOADER_ATLAS + '.png', 'img/' + BlockPuzzle.Settings.PRELOADER_ATLAS + '.json');
            this.game.load.image('famobi-logo', 'img/famobi-logo.png');
            this.game.load.json('l10n', 'lang/texts.json');
        }
        create() {
            this.input.maxPointers = 1;
            if (this.game.device.desktop) {
                this.game.canvas.oncontextmenu = function (e) {
                    e.preventDefault();
                };
            }
            BlockPuzzle.LocalizationManager.init(this.game.cache.getJSON('l10n'));
            this.game.state.start('Preloader', true, false);
        }
        resizeCallback(scaleManager, parentBounds) {
            if (BlockPuzzle.CustomScaleManager.getScaleMode() == Phaser.ScaleManager.USER_SCALE) {
                if (this.game.width != window.innerWidth * BlockPuzzle.CustomScaleManager.getPixelRatio() || this.game.height != window.innerHeight * BlockPuzzle.CustomScaleManager.getPixelRatio()) {
                    scaleManager.setGameSize(window.innerWidth * BlockPuzzle.CustomScaleManager.getPixelRatio(), window.innerHeight * BlockPuzzle.CustomScaleManager.getPixelRatio());
                    scaleManager.setUserScale(1 / BlockPuzzle.CustomScaleManager.getPixelRatio(), 1 / BlockPuzzle.CustomScaleManager.getPixelRatio());
                }
            }
        }
        sizeChanged(scaleManager, w, h) {
            const windowDimensions = (this.game.device.android
                && window["visualViewport"]
                && window["visualViewport"].width
                && window["visualViewport"].height)
                ? new Phaser.Rectangle(0, 0, Math.min(w, window["visualViewport"].width), Math.min(h, window["visualViewport"].height))
                : new Phaser.Rectangle(0, 0, window.innerWidth, window.innerHeight);
            BlockPuzzle.CustomScaleManager.update(windowDimensions.width * BlockPuzzle.CustomScaleManager.getPixelRatio(), windowDimensions.height * BlockPuzzle.CustomScaleManager.getPixelRatio());
        }
    }
    BlockPuzzle.Boot = Boot;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="AutoResizeableState.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class Level extends BlockPuzzle.AutoResizeableState {
        create() {
            BlockPuzzle.ScoreManager.instance.reset();
            BlockPuzzle.ScoreManager.instance.startRound();
            BlockPuzzle.StarsManager.instance.reset();
            BlockPuzzle.PowerupManager.instance.resetPrices();
            BlockPuzzle.Analytics.instance.startLevel();
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
                if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                    window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_TUTORIAL);
                }
            }
            BlockPuzzle.Analytics.instance.startLevel();
            this.createChildren();
            this.resize(this.game.width, this.game.height);
        }
        createChildren() {
            super.create();
            this.eventManager = this.addChild(new BlockPuzzle.EventManager(this));
            this.dataManager = this.addChild(new BlockPuzzle.DataManager(this));
            this.serviceManager = this.addChild(new BlockPuzzle.ServiceManager(this));
            this.gameStateManager = this.addChild(new BlockPuzzle.GameStateManager(this));
            this.boardManager = this.addChild(new BlockPuzzle.BoardManager(this));
            this.figureManager = this.addChild(new BlockPuzzle.FigureManager(this));
            this.uiManager = this.addChild(new BlockPuzzle.UIManager(this));
            this.tutorialManager = this.addChild(new BlockPuzzle.TutorialManager(this));
            this.resize(this.game.width, this.game.height);
        }
        resize(w, h) {
            super.resize(w, h);
            if (this.isInitialized) {
                this.eventManager.resize();
                this.dataManager.resize();
                this.gameStateManager.resize();
                this.serviceManager.resize();
                this.boardManager.resize();
                this.figureManager.resize();
                this.uiManager.resize();
                this.tutorialManager.resize();
            }
        }
        shutdown() {
            BlockPuzzle.ScoreManager.instance.removeListeners();
            BlockPuzzle.StarsManager.instance.removeListeners();
            this.eventManager.destroy();
            this.eventManager = null;
            this.dataManager.destroy();
            this.dataManager = null;
            this.gameStateManager.destroy();
            this.gameStateManager = null;
            this.serviceManager.destroy();
            this.serviceManager = null;
            this.figureManager.destroy();
            this.figureManager = null;
            this.boardManager.destroy();
            this.boardManager = null;
            this.uiManager.destroy();
            this.uiManager = null;
            this.tutorialManager.destroy();
            this.tutorialManager = null;
            super.shutdown();
        }
    }
    BlockPuzzle.Level = Level;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class Preloader extends BlockPuzzle.AutoResizeableState {
        preload() {
            super.preload(this.game);
            this.buildChildren();
            this.preloadContent();
            this.resize(this.game.width, this.game.height);
        }
        buildChildren() {
            BlockPuzzle.BackgroundManager.instance.init();
            this.game.state.onStateChange.add(this.handleStateChanged, this);
            this.preloadContainer = this.addChild(this.game.make.group());
            this.backScreen = this.game.world.addAt(this.game.make.sprite(0, 0, BlockPuzzle.Settings.PRELOADER_ATLAS, 'blackSquare0000'), 0);
            this.backScreen.position.set(-50, -50);
            this.backScreen.width = 2400;
            this.backScreen.height = 2400;
            this.backScreen.alpha = 0.7;
            this.logo = this.addChild(this.game.make.sprite(0, 0, BlockPuzzle.Settings.PRELOADER_ATLAS, 'logo0000'));
            this.logo.anchor.setTo(0.5);
            this.preloadPad = this.preloadContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.PRELOADER_ATLAS, 'preloaderBack0000'));
            this.preloadPad.anchor.setTo(0.5);
            this.preloadBar = this.preloadContainer.add(this.game.make.sprite(-314 / 2, -2, BlockPuzzle.Settings.PRELOADER_ATLAS));
            this.preloadBar.animations.add('cycle', Phaser.Animation.generateFrameNames('preloadBar', 0, 9, '', 4)).play(45, true);
            this.preloadBar.anchor.setTo(0, 0.5);
            this.load.setPreloadSprite(this.preloadBar);
            this.versionText = this.addChild(BlockPuzzle.TextUtils.getText('v' + BlockPuzzle.Settings.GAME_VERSION, 0, 0, 12, "#ffffff"));
            this.copyrightText = this.addChild(BlockPuzzle.TextUtils.getText('© Famobi', 0, 0, 12, "#ffffff", 'Russo One'));
            this.copyrightText.anchor.set(1, 1);
            this.preloadText = this.preloadContainer.add(new BlockPuzzle.BitmapTextField("0%", BlockPuzzle.Settings.PRELOADER_ATLAS, "Gold", 1, 0.5, 0.5, 1));
            this.preloadText.position.set(0, 65);
            this.game.load.onFileComplete.add(this.onFileComplete, this);
            this.game.load.onLoadComplete.add(this.onLoadingComplete, this);
            this.isInitialized = true;
        }
        preloadContent() {
            for (let soundName of BlockPuzzle.SoundController.instance.getSoundNames()) {
                this.game.load.audio(soundName, ['sound/mp3/' + soundName + '.mp3', 'sound/m4a/' + soundName + '.m4a', 'sound/ogg/' + soundName + '.ogg']);
            }
            if (BlockPuzzle.Settings.ENABLE_API) {
                this.game.load.image('more_games', BlockPuzzle.Settings.RELEASE_BUILD ? window.famobi.getMoreGamesButtonImage() : 'img/more-games.png');
            }
            this.game.load.atlasJSONArray(BlockPuzzle.Settings.GAME_ATLAS, 'img/' + BlockPuzzle.Settings.GAME_ATLAS + '.png', 'img/' + BlockPuzzle.Settings.GAME_ATLAS + '.json');
            this.game.load.atlasJSONArray(BlockPuzzle.Settings.ANIMATION_ATLAS, 'img/' + BlockPuzzle.Settings.ANIMATION_ATLAS + '.png', 'img/' + BlockPuzzle.Settings.ANIMATION_ATLAS + '.json');
            this.game.load.image('field-cover', 'img/field-cover.png');
            this.game.load.spritesheet('explosionA', 'img/18.png', 256, 256, 40);
            this.game.load.spritesheet('explosionB', 'img/22.png', 256, 256, 40);
        }
        create() {
            super.create();
        }
        resize(width, height) {
            super.resize(width, height);
            if (this.isInitialized) {
                this.backScreen.width = this.windowBounds.width * BlockPuzzle.CustomScaleManager.SCALE_X + 100;
                this.backScreen.height = this.windowBounds.height * BlockPuzzle.CustomScaleManager.SCALE_X + 100;
                this.preloadContainer.position.copyFrom(this.windowBounds.getPosition(0.5, 0.58));
                this.versionText.position.set(this.windowBounds.left + 25, this.windowBounds.down - 16);
                this.copyrightText.position.set(this.windowBounds.right - 5, this.windowBounds.down - 1);
                this.logo.position.copyFrom(this.windowBounds.getPosition(0.5, 0.24));
            }
        }
        handleStateChanged() {
            BlockPuzzle.BackgroundManager.instance.handleStateChanged();
        }
        onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            this.preloadText.changeText(Math.round(progress) + "%");
        }
        onLoadingComplete() {
            BlockPuzzle.WindowManager.instance.init();
            BlockPuzzle.TransitionScreen.instance.init();
            BlockPuzzle.LocalStorageController.instance.loadSave();
            BlockPuzzle.SoundController.instance.init();
            if (BlockPuzzle.SoundController.instance.isDecodingSupported()) {
                this.game.sound.setDecodedCallback(BlockPuzzle.SoundController.instance.getSFXNames(), this.onSoundsDecoded, this);
            }
            else {
                this.onSoundsDecoded();
            }
        }
        onSoundsDecoded() {
            BlockPuzzle.SoundController.instance.startMusic();
            this.preloadText.changeText("100%");
            BlockPuzzle.TransitionScreen.instance.changeState("Level");
        }
    }
    BlockPuzzle.Preloader = Preloader;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BitmapTextField extends Phaser.Group {
        constructor(textValue, atlasKey, styleKey, textScale = 1, pivotX = 0.5, pivotY = 0.5, letterSpacing = 0, letterFrame = 0, tintValue = 0xFFFFFF) {
            super(BlockPuzzle.App.instance);
            this.valueHolder = { value: 0, targetValue: 0 };
            this.pivotX = 0.5;
            this.pivotY = 0.5;
            this.atlasKey = "";
            this.styleKey = "";
            this.letterSpacing = 0;
            this.letterFrame = 0;
            this.tintValue = 0;
            this.internalScale = 1;
            this.atlasKey = atlasKey;
            this.styleKey = styleKey;
            this.letterSpacing = letterSpacing;
            this.letterFrame = letterFrame;
            this.textScale = textScale;
            this.pivotX = pivotX;
            this.pivotY = pivotY;
            this.tintValue = tintValue;
            this.changeText(textValue);
        }
        changeText(textValue, force = false) {
            if (!force && this.textValue == textValue) {
                return;
            }
            this.textValue = textValue;
            this.removeAll(true);
            this.scale.set(1);
            for (let i = 0; i < textValue.length; i++) {
                let sprite = BlockPuzzle.BitmapTextFactory.getLetter(this.styleKey, this.atlasKey, textValue.charAt(i), this.letterFrame);
                if (sprite) {
                    sprite.x = this.width + (i > 0 ? this.letterSpacing : 0);
                    sprite.anchor.set(0, 0.5);
                    this.add(sprite);
                }
                else {
                    console.warn(`BitmapTextFactory.getSprite - letter '${textValue.charAt(i)}' not found in spritesheet`);
                }
            }
            const currentWidth = this.width;
            const currentHeight = this.height;
            this.children.forEach(child => child.position.set(child.x - this.pivotX * currentWidth, child.y - (this.pivotY - 0.5) * currentHeight));
            this.children.forEach(child => child.tint = this.tintValue);
            this.scale.set(this.textScale * this.internalScale);
        }
        setColor(value) {
            this.tintValue = value;
            this.children.forEach(child => child.tint = this.tintValue);
        }
        tweenText(initialValue, targetValue, duration, delay) {
            this.game.tweens.removeFrom(this.valueHolder);
            this.valueHolder.value = initialValue;
            this.valueHolder.targetValue = targetValue;
            this.game.add.tween(this.valueHolder)
                .to({ value: targetValue }, duration, Phaser.Easing.Linear.None, true, delay)
                .onUpdateCallback(() => this.changeText('' + Math.floor(this.valueHolder.value)))
                .onComplete.add(() => this.changeText('' + Math.floor(this.valueHolder.targetValue)));
        }
        tweenTextAdvanced(preffix, initialValue, targetValue, duration, delay, playCountingSound = false, countingSoundStates = ['Level']) {
            this.changeText('' + Math.floor(initialValue));
            if (initialValue == targetValue) {
                return;
            }
            let valueHolder = { value: initialValue };
            let textTween = this.game.add.tween(valueHolder)
                .to({ value: targetValue }, duration, Phaser.Easing.Linear.None, true, delay);
            textTween.onStart.add(() => {
                if (playCountingSound && countingSoundStates.indexOf(this.game.state.getCurrentState().key) != -1) {
                    BlockPuzzle.SoundController.instance.startCountingSound();
                }
            });
            textTween.onUpdateCallback(() => this.changeText(preffix + Math.floor(valueHolder.value)));
            textTween.onComplete.add(() => {
                this.changeText(preffix + Math.floor(valueHolder.value));
                if (playCountingSound) {
                    BlockPuzzle.SoundController.instance.stopCountingSound();
                }
            });
        }
    }
    BlockPuzzle.BitmapTextField = BitmapTextField;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class TransitionScreen extends Phaser.Group {
        constructor() {
            super(BlockPuzzle.App.instance, null);
            this.isInitialized = false;
        }
        static get instance() {
            return TransitionScreen._instance ? TransitionScreen._instance : TransitionScreen._instance = new TransitionScreen();
        }
        buildChildren() {
            this.background = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'transitionSquare0000'));
            this.background.anchor.set(0.5);
            this.background.alpha = 0.01;
            this.background.inputEnabled = true;
            this.background.events.onInputDown.add(() => console.log('Transition Screen: input locked'));
        }
        init() {
            this.isInitialized = true;
            this.buildChildren();
        }
        resize() {
            if (this.isInitialized) {
                this.position.set(this.game.world.centerX, this.game.world.centerY);
                this.background.width = this.game.width + 100;
                this.background.height = this.game.height + 100;
            }
        }
        changeState(newState, callback = null) {
            this.targetStateName = newState;
            this.callback = callback;
            this.show();
        }
        show() {
            this.game.stage.addChild(this);
            this.visible = true;
            this.resize();
            this.game.add.tween(this.background)
                .to({ alpha: 1 }, 140, Phaser.Easing.Quadratic.Out, true)
                .onComplete.add(this.close, this);
        }
        close() {
            if (this.targetStateName) {
                this.game.state.start(this.targetStateName, true, false);
                BlockPuzzle.WindowManager.instance.hideAll();
            }
            if (this.callback) {
                this.callback();
                this.callback = null;
            }
            this.proceedClosing();
        }
        proceedClosing() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }
            else {
                this.game.stage.addChild(this);
            }
            setTimeout(() => {
                this.game.add.tween(this.background)
                    .to({ alpha: 0 }, 120, Phaser.Easing.Linear.None, true)
                    .onComplete.add(this.onTransitionFinished, this);
            }, 20);
            setTimeout(() => {
                this.onTransitionFinished();
            }, 400);
        }
        onTransitionFinished() {
            this.hide();
        }
        hide() {
            if (this.parent && this.parent.getChildIndex(this) > -1) {
                this.parent.removeChild(this);
            }
            this.visible = false;
        }
    }
    TransitionScreen._instance = null;
    BlockPuzzle.TransitionScreen = TransitionScreen;
})(BlockPuzzle || (BlockPuzzle = {}));
var src;
(function (src) {
    var App = BlockPuzzle.App;
    var Settings = BlockPuzzle.Settings;
    class TutorialManager {
        constructor() {
        }
        static get instance() {
            return TutorialManager._instance ? TutorialManager._instance :
                TutorialManager._instance = new TutorialManager();
        }
        init() {
            this.tutorialHand = App.instance.make.sprite(0, 0, Settings.GAME_ATLAS, 'tutorialHand0000');
        }
    }
    TutorialManager._instance = null;
    src.TutorialManager = TutorialManager;
})(src || (src = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AchievementInformer extends Phaser.Group {
        constructor(achievementsButton) {
            super(achievementsButton.game);
            this.active = false;
            this.visibilityTimer = 0;
            this.targetY = -100;
            this.achievementsButton = achievementsButton;
            this.level = achievementsButton.level;
            this.buildChildren();
        }
        buildChildren() {
            this.container = this.add(this.game.make.group());
            this.container.position.set(0, -100);
            this.informerPad = this.container.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'achievementInformerPad0000'));
            this.informerPad.anchor.set(0.5);
            this.informerPad.alpha = 0.75;
            this.informerPad.inputEnabled = true;
            this.informerPad.events.onInputDown.add(this.openAchievements, this);
            this.achievementSprite = this.container.add(this.game.make.sprite(0, -5, BlockPuzzle.Settings.GAME_ATLAS, 'achievement10000'));
            this.achievementSprite.anchor.set(0.5);
            this.badgesSprite = this.container.add(this.game.make.sprite(40, 30, BlockPuzzle.Settings.GAME_ATLAS, 'achievementBadges0000'));
            this.badgesSprite.anchor.set(0.5);
            this.visible = false;
        }
        show(achievementModel) {
            this.game.tweens.removeFrom(this.container.scale, false);
            this.game.tweens.removeFrom(this.container, false);
            this.game.tweens.removeFrom(this.achievementSprite);
            this.game.tweens.removeFrom(this.achievementSprite.scale);
            this.game.tweens.removeFrom(this.badgesSprite);
            this.game.tweens.removeFrom(this.badgesSprite.scale);
            this.visible = true;
            this.active = true;
            this.visibilityTimer = BlockPuzzle.Settings.ACHIEVEMENT_INFORMER_VISIBILITY_DURATION;
            this.container.y = 0;
            this.container.alpha = 0;
            this.game.add.tween(this.container)
                .to({ alpha: 1 }, 250, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.container)
                .to({ y: this.targetY }, 280, Phaser.Easing.Back.Out, true);
            this.container.scale.set(0.6);
            this.game.add.tween(this.container.scale)
                .to({ x: 1, y: 1 }, 280, Phaser.Easing.Sinusoidal.Out, true);
            this.achievementSprite.scale.set(0);
            this.game.add.tween(this.achievementSprite.scale)
                .to({ x: 0.7, y: 0.7 }, 270, Phaser.Easing.Back.Out, true, 30);
            this.achievementSprite.y = -3;
            this.game.add.tween(this.achievementSprite)
                .to({ y: -7 }, 350, Phaser.Easing.Sinusoidal.InOut, true, 180, -1, true);
            this.badgesSprite.alpha = 0;
            this.game.add.tween(this.badgesSprite)
                .to({ alpha: 1 }, 160, Phaser.Easing.Sinusoidal.In, true, 100);
            this.badgesSprite.scale.set(0);
            this.game.add.tween(this.badgesSprite.scale)
                .to({ x: 1, y: 1 }, 200, Phaser.Easing.Back.Out, true, 100);
            this.achievementSprite.frameName = 'achievement' + achievementModel.key + '0000';
            this.badgesSprite.frameName = 'achievementBadges000' + Phaser.Math.clamp(BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel) - 1, 0, 2);
        }
        hide() {
            this.active = false;
            this.game.tweens.removeFrom(this.container.scale, false);
            this.game.tweens.removeFrom(this.container, false);
            this.game.add.tween(this.container)
                .to({ alpha: 0 }, 150, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.container)
                .to({ y: 0 }, 220, Phaser.Easing.Sinusoidal.Out, true);
            this.game.add.tween(this.container.scale)
                .to({ x: 0.5, y: 0.5 }, 150, Phaser.Easing.Back.Out, true)
                .onComplete.add(() => this.visible = false);
        }
        openAchievements() {
            this.achievementsButton.handleClick();
        }
        resizeLandscape() {
            this.targetY = 110;
            this.game.add.tween(this.container)
                .to({ y: this.targetY }, 50, Phaser.Easing.Sinusoidal.Out, true);
        }
        resizeSquared() {
            this.targetY = 110;
            this.game.add.tween(this.container)
                .to({ y: this.targetY }, 50, Phaser.Easing.Sinusoidal.Out, true);
        }
        resizePortrait() {
            this.targetY = -110;
            this.game.add.tween(this.container)
                .to({ y: this.targetY }, 50, Phaser.Easing.Sinusoidal.Out, true);
        }
        update() {
            if (this.visible && this.active) {
                if (this.visibilityTimer > 0) {
                    this.visibilityTimer -= this.game.time.elapsedMS;
                    if (this.visibilityTimer <= 0) {
                        this.hide();
                    }
                }
            }
        }
    }
    BlockPuzzle.AchievementInformer = AchievementInformer;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AchievementPanel extends Phaser.Group {
        constructor(windowAcheivements, achievementKey, x, y) {
            super(windowAcheivements.game);
            this.currentReward = 0;
            this.windowAchievements = windowAcheivements;
            this.achievementKey = achievementKey;
            this.position.set(x, y);
            this.buildContent();
        }
        updateView() {
            const achievementModel = BlockPuzzle.AchievementsManager.instance.getAchievementModel(this.achievementKey);
            const currentLevel = BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel);
            const currentValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.currentValue - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.currentValue;
            const displayedValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.currentValue : achievementModel.requiredValues[2] : achievementModel.currentValue;
            const targetValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.requiredValues[currentLevel] - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.requiredValues[0];
            const displayTargetValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.requiredValues[currentLevel] : achievementModel.requiredValues[2] : achievementModel.requiredValues[0];
            const currentProgress = currentLevel < 3 ? currentValue / targetValue : 1;
            this.buttonClaimReward.visible = false;
            this.progressBarContainer.visible = true;
            this.badges.visible = achievementModel.rewardClaimed[0] || achievementModel.rewardClaimed[1] || achievementModel.rewardClaimed[2];
            this.badges.frameName = achievementModel.rewardClaimed[2] ? 'achievementBadges0002' : achievementModel.rewardClaimed[1] ? 'achievementBadges0001' : 'achievementBadges0000';
            /* update icon */
            this.icon.frameName = 'achievement' + this.achievementKey + '000' + (currentLevel > 0 ? '0' : '1');
            /* update bar */
            this.progressBarMask.x = this.progressBar.x - (1 - currentProgress) * this.progressBar.width;
            /* update text */
            if (currentLevel < 3) {
                this.progressBarContainer.visible = true;
                this.maxText.visible = false;
                this.progressText.setText(`${displayedValue}/${displayTargetValue}`);
            }
            else {
                this.progressBarContainer.visible = false;
                this.maxText.visible = true;
            }
            /* show/hide claim button */
            if (achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[0];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            }
            else if (achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[1];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            }
            else if (achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
                this.buttonClaimReward.visible = true;
                this.progressBarContainer.visible = false;
                this.currentReward = achievementModel.rewards[2];
                this.buttonClaimReward.updateView('+' + this.currentReward);
            }
        }
        buildContent() {
            this.icon = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'achievement' + this.achievementKey + '0000'));
            this.icon.anchor.set(0.5);
            this.progressBarContainer = this.add(this.game.make.group());
            this.progressBarContainer.position.set(0, 85);
            this.progressPad = this.progressBarContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'achievementProgressPad0000'));
            this.progressPad.anchor.set(0.5);
            this.progressBar = this.progressBarContainer.add(this.game.make.sprite(-this.progressPad.width / 2 + 5, -2, BlockPuzzle.Settings.GAME_ATLAS, 'achievementProgressBar0000'));
            this.progressBar.anchor.set(0, 0.5);
            this.progressBarMask = this.progressBarContainer.add(this.game.make.graphics(this.progressBar.x, this.progressBar.y - this.progressBar.height / 2));
            this.progressBarMask.beginFill(0xFFFFFF, 0.5).drawRect(0, 0, this.progressBar.width, this.progressBar.height).endFill();
            this.progressBar.mask = this.progressBarMask;
            this.progressText = this.progressBarContainer.add(BlockPuzzle.TextUtils.getText('0/1000', 0, 1, 19, '#DAFFF4'));
            this.maxText = this.add(this.game.make.sprite(0, 80, BlockPuzzle.Settings.GAME_ATLAS, 'achievementMax0000'));
            this.maxText.anchor.set(0.5);
            this.badges = this.add(this.game.make.sprite(68, 46, BlockPuzzle.Settings.GAME_ATLAS, 'achievementBadges0000'));
            this.badges.anchor.set(0.5);
            this.buttonClaimReward = this.add(new BlockPuzzle.ButtonClaimReward(this, '+89', 1, this.claimRewardClicked, this));
            this.buttonClaimReward.position.set(3, 85);
        }
        claimRewardClicked() {
            BlockPuzzle.StarsManager.instance.pickupStars(this.currentReward, true);
            this.currentReward = 0;
            const achievementModel = BlockPuzzle.AchievementsManager.instance.getAchievementModel(this.achievementKey);
            const currentLevel = BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel);
            if (achievementModel) {
                if (achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
                    achievementModel.rewardClaimed[0] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({ x: 1, y: 1 }, 300, Phaser.Easing.Back.Out, true, 0);
                }
                else if (achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
                    achievementModel.rewardClaimed[1] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({ x: 1, y: 1 }, 300, Phaser.Easing.Back.Out, true, 0);
                }
                else if (achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
                    achievementModel.rewardClaimed[2] = true;
                    this.badges.scale.set(0);
                    this.game.add.tween(this.badges.scale)
                        .to({ x: 1, y: 1 }, 300, Phaser.Easing.Back.Out, true, 0);
                }
                BlockPuzzle.LocalStorageController.instance.save();
            }
            this.updateView();
        }
    }
    BlockPuzzle.AchievementPanel = AchievementPanel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ButtonClaimReward extends Phaser.Group {
        constructor(panel, reward, initialScale, actionHandler, actionHandlerContext) {
            super(panel.game);
            this.achievementPanel = panel;
            this.container = this.add(this.game.make.group());
            /* backplate */
            this.backplate = this.container.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'buttonClaim0000'));
            this.backplate.anchor.setTo(0.5, 0.5);
            this.backplate.inputEnabled = true;
            this.backplate.events.onInputUp.add(actionHandler, actionHandlerContext);
            this.backplate["overTween"] = BlockPuzzle.App.instance.add.tween(this.container.scale).to({ x: 1.05, y: 1.05 }, 100);
            this.backplate["outTween"] = BlockPuzzle.App.instance.add.tween(this.container.scale).to({ x: 1, y: 1 }, 100);
            this.backplate["downTween"] = BlockPuzzle.App.instance.add.tween(this.container.scale).to({ x: 0.95, y: 0.95 }, 50).to({ x: 1, y: 1 }, 50);
            this.backplate.events.onInputOver.add(BlockPuzzle.ButtonUtils.mouseOverHandler, this, 0);
            this.backplate.events.onInputOut.add(BlockPuzzle.ButtonUtils.mouseOutHandler, this, 0);
            this.backplate.events.onInputDown.add(BlockPuzzle.ButtonUtils.mouseDownHandler, this, 0);
            this.backplate.events.onInputDown.add(() => BlockPuzzle.SoundController.instance.playRewardClaimedSound(), this);
            /* price text */
            this.rewardText = this.add(new BlockPuzzle.BitmapTextField(reward, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.55, 0.5, 0.5, 1));
            this.rewardText.position.set(-17, -3);
        }
        updateView(rewardText) {
            this.rewardText.changeText(rewardText);
            this.game.tweens.removeFrom(this.scale);
            this.scale.set(1);
            this.game.add.tween(this.scale)
                .to({ x: 1.04, y: 1.04 }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
        }
    }
    BlockPuzzle.ButtonClaimReward = ButtonClaimReward;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ButtonAchievements extends Phaser.Group {
        constructor(level) {
            super(level.game, null);
            this.level = level;
            this.button = this.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonAchievements', 0, 0, 1, this.handleClick, this));
            this.exclamationMark = this.add(this.game.make.sprite(25, 22, BlockPuzzle.Settings.GAME_ATLAS));
            this.exclamationMark.anchor.set(0.5);
            this.exclamationMark.animations.add('twerking', Phaser.Animation.generateFrameNames('achievementsNotification', 0, 99, '', 4))
                .play(60, true);
            this.exclamationMark.visible = BlockPuzzle.AchievementsManager.instance.hasAvailableRewards();
            this.achievementInformer = this.add(new BlockPuzzle.AchievementInformer(this));
            BlockPuzzle.AchievementsManager.instance.onAchievementCompleted.add(this.handleAchievementCompleted, this);
        }
        destroy() {
            BlockPuzzle.AchievementsManager.instance.onAchievementCompleted.remove(this.handleAchievementCompleted, this);
            super.destroy();
        }
        handleAchievementCompleted(achievementModel) {
            this.achievementInformer.show(achievementModel);
            if (this.exclamationMark.visible == false) {
                this.exclamationMark.visible = true;
            }
        }
        handleClick() {
            if (this.achievementInformer.active) {
                this.achievementInformer.hide();
            }
            this.exclamationMark.visible = false;
            BlockPuzzle.WindowManager.instance.showAchievements();
        }
        resizePortrait() {
            this.achievementInformer.resizePortrait();
        }
        resizeSquared() {
            this.achievementInformer.resizeSquared();
        }
        resizeLandscape() {
            this.achievementInformer.resizeLandscape();
        }
        setScale(value) {
            this.button["setScale"](value);
        }
    }
    BlockPuzzle.ButtonAchievements = ButtonAchievements;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ButtonCloseWindow extends Phaser.Group {
        constructor(parentWindow, actionHandler, actionHandlerContext) {
            super(parentWindow.game);
            this.parentWindow = parentWindow;
            this.container = this.add(this.game.make.group());
            this.button = this.container.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonClose', 0, 0, 1, actionHandler, actionHandlerContext));
        }
        resize(dx, dy) {
            this.position.set(this.parentWindow.windowManager.windowBounds.right + dx, this.parentWindow.windowManager.windowBounds.top + dy);
        }
    }
    BlockPuzzle.ButtonCloseWindow = ButtonCloseWindow;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ButtonGetStars extends Phaser.Group {
        constructor() {
            super(BlockPuzzle.App.instance, null);
            this.isActive = false;
            this.starsAmount = BlockPuzzle.Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT;
            this.button = this.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonGetStars', 0, 0, 1, this.getStarsClicked, this));
            this.numStarsText = this.add(new BlockPuzzle.BitmapTextField('+' + this.starsAmount, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.42, 0.5, 0.5, 1));
            this.numStarsText.position.set(-20, 3);
            this.visible = false;
            this.isActive = false;
        }
        getStarsClicked() {
            if (BlockPuzzle.Settings.ENABLE_API) {
                if (BlockPuzzle.APIUtils.instance.hasRewardedVideo()) {
                    BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
                    BlockPuzzle.APIUtils.instance.showRewardedVideo(() => this.giveReward());
                }
            }
            else {
                BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
                this.giveReward();
            }
        }
        giveReward() {
            BlockPuzzle.StarsManager.instance.pickupStars(this.starsAmount);
            this.starsAmount += BlockPuzzle.Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP;
            this.numStarsText.changeText('+' + this.starsAmount, true);
            this.hide();
        }
        activate() {
            this.isActive = true;
            this.visible = true;
            this.button.inputEnabled = true;
        }
        hide() {
            this.isActive = false;
            this.visible = false;
        }
        update() {
            super.update();
            if (!this.isActive && BlockPuzzle.Settings.GET_STARS_BUTTON_ENABLED && BlockPuzzle.Settings.ENABLE_API && +new Date().getTime() - BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP > BlockPuzzle.Settings.GET_STARS_BUTTON_COOLDOWN * 1000) {
                if (BlockPuzzle.APIUtils.instance.hasRewardedVideo()) {
                    this.activate();
                }
            }
        }
    }
    BlockPuzzle.ButtonGetStars = ButtonGetStars;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractResultsCounter extends Phaser.Group {
        constructor(results, iconFrameName) {
            super(results.game, null);
            this.results = results;
            this.buildContent();
            this.buildIcon(iconFrameName);
        }
        buildContent() {
            this.padLeft = this.add(this.game.make.sprite(5, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.padLeft.anchor.set(0, 0.5);
            this.padLeft.scale.x = -1;
            this.padRight = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.padRight.anchor.set(0, 0.5);
            this.textFieldLeft = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.textFieldLeft.position.set(-90, 0);
            this.textFieldRight = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.textFieldRight.position.set(107, 0);
        }
        buildIcon(frameName) {
            this.icon = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, frameName + '0000'));
            this.icon.anchor.set(0.5);
        }
        show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix = '', rightValuePrefix = '', delay, textTweenDelay, tweenTextDuration) {
            this.resetTweens();
            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
            this.animateAppearing(delay);
        }
        tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
            this.textFieldLeft.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
            this.textFieldRight.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
        }
        animateAppearing(delay) {
            this.icon.scale.set(0.5);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay + 100);
            this.icon.alpha = 0;
            this.game.add.tween(this.icon)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.padLeft.scale.x = 0;
            this.game.add.tween(this.padLeft.scale)
                .to({ x: -1 }, 450, Phaser.Easing.Back.Out, true, delay + 150);
            this.padRight.scale.x = 0;
            this.game.add.tween(this.padRight.scale)
                .to({ x: 1 }, 450, Phaser.Easing.Back.Out, true, delay + 150);
            this.textFieldLeft.visible = false;
            this.textFieldLeft.scale.set(0.5);
            this.game.add.tween(this.textFieldLeft.scale)
                .to({ x: 0.75, y: 0.75 }, 450, Phaser.Easing.Back.Out, true, delay + 250)
                .onStart.add(() => this.textFieldLeft.visible = true);
            this.textFieldRight.visible = false;
            this.textFieldRight.scale.set(0.5);
            this.game.add.tween(this.textFieldRight.scale)
                .to({ x: 0.75, y: 0.75 }, 450, Phaser.Easing.Back.Out, true, delay + 330)
                .onStart.add(() => this.textFieldRight.visible = true);
            this.textFieldLeft.visible = false;
            this.textFieldLeft.alpha = 0;
            this.game.add.tween(this.textFieldLeft)
                .to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, delay + 250)
                .onStart.add(() => this.textFieldLeft.visible = true);
            this.textFieldRight.visible = false;
            this.textFieldRight.alpha = 0;
            this.game.add.tween(this.textFieldRight)
                .to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, delay + 330)
                .onStart.add(() => this.textFieldRight.visible = true);
        }
        resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
            this.game.tweens.removeFrom(this.padLeft.scale);
            this.game.tweens.removeFrom(this.padRight.scale);
            this.game.tweens.removeFrom(this.textFieldLeft);
            this.game.tweens.removeFrom(this.textFieldLeft.scale);
            this.game.tweens.removeFrom(this.textFieldRight);
            this.game.tweens.removeFrom(this.textFieldRight.scale);
            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.padLeft.scale.set(-1);
            this.padRight.scale.set(1);
            this.textFieldLeft.scale.set(0.75);
            this.textFieldRight.scale.set(0.75);
            this.textFieldLeft.visible = true;
            this.textFieldRight.visible = true;
        }
    }
    BlockPuzzle.AbstractResultsCounter = AbstractResultsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractUICounter extends Phaser.Group {
        constructor(uiManager) {
            super(uiManager.game, null);
            this.uiManager = uiManager;
            this.level = uiManager.level;
            this.buildChildren();
        }
        tweenIcon(duration) {
            if (duration < 400) {
                this.game.add.tween(this.icon.scale)
                    .to({ x: 1.075, y: 1.075 }, 100, Phaser.Easing.Sinusoidal.Out, false)
                    .to({ x: 1.0, y: 1.0 }, 240, Phaser.Easing.Sinusoidal.In, false)
                    .start();
            }
            else {
                this.game.add.tween(this.icon.scale)
                    .to({ x: 1.13, y: 1.13 }, .25 * duration, Phaser.Easing.Sinusoidal.Out, false)
                    .to({ x: 1.15, y: 1.15 }, 0.1 * duration, Phaser.Easing.Sinusoidal.In, false)
                    .to({ x: 1.0, y: 1.0 }, 0.65 * duration, Phaser.Easing.Sinusoidal.In, false)
                    .start();
            }
        }
    }
    BlockPuzzle.AbstractUICounter = AbstractUICounter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class DoubleStarsButton extends Phaser.Group {
        constructor(results) {
            super(results.game, null);
            this.starsAmount = 0;
            this.isActive = true;
            this.results = results;
            this.buildContent();
        }
        buildContent() {
            this.pad = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsScorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(-0.8, 0.9);
            this.textField = this.add(new BlockPuzzle.BitmapTextField('+12', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.7, 0.5, 0.5, 1));
            this.textField.position.set(-82, 0);
            this.buttonContainer = this.add(this.game.make.group());
            this.buttonDoubleStars = this.buttonContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRewardedVideoSmall', 0, 0, 1, this.doubleStarsClicked, this));
        }
        doubleStarsClicked() {
            if (this.isActive) {
                BlockPuzzle.APIUtils.instance.showRewardedVideo(() => this.collapse());
            }
        }
        show(delay, starsAmount) {
            this.resetTweens();
            this.scale.set(1.2);
            this.isActive = true;
            this.starsAmount = starsAmount;
            this.textField.changeText('+' + starsAmount);
            this.buttonContainer.scale.set(0.5);
            this.game.add.tween(this.buttonContainer.scale)
                .to({ x: 1.2, y: 1.2 }, 300, Phaser.Easing.Back.Out, true, delay + 100);
            this.buttonContainer.alpha = 0;
            this.game.add.tween(this.buttonContainer)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.pad.scale.x = 0;
            this.game.add.tween(this.pad.scale)
                .to({ x: -0.8 }, 250, Phaser.Easing.Back.Out, true, delay + 100);
            this.textField.visible = false;
            this.textField.scale.set(0.2);
            this.game.add.tween(this.textField.scale)
                .to({ x: 0.7, y: 0.7 }, 300, Phaser.Easing.Back.Out, true, delay + 200)
                .onStart.add(() => this.textField.visible = true);
        }
        collapse() {
            this.resetTweens();
            this.isActive = false;
            this.results.addBonusStars(this.starsAmount);
            this.starsAmount = 0;
            this.game.add.tween(this.textField)
                .to({ alpha: 0 }, 120, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.textField.scale)
                .to({ x: 0, y: 0 }, 120, Phaser.Easing.Back.In, true);
            this.game.add.tween(this.pad.scale)
                .to({ x: 0 }, 200, Phaser.Easing.Sinusoidal.In, true, 0);
            this.game.add.tween(this.buttonContainer.scale)
                .to({ x: 0, y: 0 }, 200, Phaser.Easing.Back.In, true, 100)
                .onComplete.add(() => this.buttonContainer.visible = false);
        }
        resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.textField);
            this.game.tweens.removeFrom(this.textField.scale);
            this.game.tweens.removeFrom(this.pad);
            this.game.tweens.removeFrom(this.pad.scale);
            this.game.tweens.removeFrom(this.buttonContainer, false);
            this.game.tweens.removeFrom(this.buttonContainer.scale, false);
            this.textField.alpha = 1;
            this.textField.visible = true;
            this.textField.scale.set(0.7);
            this.pad.scale.set(-0.8, 0.9);
            this.buttonContainer.scale.set(1);
            this.buttonContainer.visible = true;
        }
    }
    BlockPuzzle.DoubleStarsButton = DoubleStarsButton;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ScoreCounter extends BlockPuzzle.AbstractUICounter {
        constructor() {
            super(...arguments);
            this.lastScoreValue = 0;
            this.lastHighscoreValue = BlockPuzzle.ScoreManager.instance.getMaxScores();
        }
        buildChildren() {
            this.pad = this.add(this.game.make.sprite(12, 0, BlockPuzzle.Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);
            this.icon = this.add(this.game.make.sprite(5, 0, BlockPuzzle.Settings.GAME_ATLAS, 'uiIconCup0000'));
            this.icon.anchor.set(0.5);
            this.icon.visible = false;
            this.textField = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(100, 0);
            this.highscoreGroup = this.add(this.game.make.group());
            this.highscoreGroup.position.set(106, 37);
            this.lastHighscoreValue = BlockPuzzle.ScoreManager.instance.getMaxScores();
            this.highscoreIcon = this.highscoreGroup.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'topScoreCrown0000'));
            this.highscoreIcon.anchor.set(1, 0.5);
            this.highscoreText = this.highscoreGroup.add(new BlockPuzzle.BitmapTextField('' + this.lastHighscoreValue, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.42, 0, 0.5, 1));
            this.highscoreText.position.set(0, 1);
            BlockPuzzle.ScoreManager.instance.onScoreChanges.add(this.dispatchScoreChanged, this);
        }
        dispatchScoreChanged(scores) {
            if (this.lastScoreValue != scores) {
                const duration = Phaser.Math.clamp(50 * Math.pow(Math.abs(scores - this.lastScoreValue), 0.5), 250, 1000);
                this.textField.tweenText(this.lastScoreValue, scores, duration, 0);
                this.lastScoreValue = scores;
                this.tweenIcon(duration);
                const currentHighscores = Math.max(BlockPuzzle.ScoreManager.instance.getMaxScores(), scores);
                if (this.lastHighscoreValue < currentHighscores) {
                    this.highscoreText.tweenText(this.lastHighscoreValue, currentHighscores, duration, 0);
                    this.lastHighscoreValue = currentHighscores;
                }
            }
        }
        update() {
            if (this.highscoreGroup.visible) {
                let textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
                this.highscoreIcon.x = -textFieldWidth / 2 - 2;
                this.highscoreText.x = -textFieldWidth / 2;
            }
        }
        destroy() {
            BlockPuzzle.ScoreManager.instance.onScoreChanges.remove(this.dispatchScoreChanged, this);
            super.destroy();
        }
    }
    BlockPuzzle.ScoreCounter = ScoreCounter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ShopStarsCounter extends Phaser.Group {
        constructor(windowShop) {
            super(windowShop.game, null);
            this.windowShop = windowShop;
            this.buildChildren();
        }
        buildChildren() {
            this.contentContainer = this.add(this.game.make.group());
            this.contentContainer.scale.set(1.25);
            this.icon = this.contentContainer.add(this.game.make.sprite(1, 0, BlockPuzzle.Settings.GAME_ATLAS, 'uiIconStar0000'));
            this.icon.anchor.set(0.5);
            this.icon.scale.set(0.9);
            this.textField = this.contentContainer.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.67, 0, 0.5, 1));
            this.textField.position.set(40, 3);
            this.errorSmile = this.add(this.game.make.sprite(135, 5, BlockPuzzle.Settings.GAME_ATLAS, 'errorSmile0000'));
            this.errorSmile.anchor.set(0.5);
            this.errorSmile.alpha = 0;
            this.updateStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
            BlockPuzzle.StarsManager.instance.onStarsAmountChanged.add(this.updateStarsAmount, this);
        }
        dispatchStarAdded(starsAmount) {
            this.updateStarsAmount(starsAmount);
        }
        setStarsAmount(value) {
            this.textField.changeText('' + value, true);
        }
        updateStarsAmount(starsAmount) {
            this.game.tweens.removeFrom(this.textField.scale);
            this.textField.changeText('' + starsAmount);
            this.textField.scale.set(0);
            this.game.add.tween(this.textField.scale)
                .to({ x: 0.6, y: 0.6 }, 190, Phaser.Easing.Back.Out, true);
        }
        displayError() {
            this.game.tweens.removeFrom(this.errorSmile);
            this.game.tweens.removeFrom(this.errorSmile.scale);
            this.errorSmile.alpha = 0;
            this.errorSmile.x = this.textField.x + this.textField.getLocalBounds().width * this.textField.scale.x + 80;
            this.errorSmile.y = 20;
            this.errorSmile.scale.set(0);
            this.game.add.tween(this.errorSmile)
                .to({ alpha: 0.9 }, 120, Phaser.Easing.Sinusoidal.In, false)
                .to({ alpha: 0 }, 700, Phaser.Easing.Quintic.In, false)
                .start();
            this.game.add.tween(this.errorSmile)
                .to({ y: 2 }, 180, Phaser.Easing.Sinusoidal.In, false)
                .to({ y: -30 }, 700, Phaser.Easing.Linear.None, false)
                .start();
            this.game.add.tween(this.errorSmile.scale)
                .to({ x: 1.5, y: 1.5 }, 240, Phaser.Easing.Elastic.Out, false)
                .to({ x: 1.65, y: 1.65 }, 550, Phaser.Easing.Quadratic.In, false)
                .start();
        }
    }
    BlockPuzzle.ShopStarsCounter = ShopStarsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class StarsCounter extends BlockPuzzle.AbstractUICounter {
        buildChildren() {
            this.pad = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);
            this.icon = this.add(this.game.make.sprite(5, 0, BlockPuzzle.Settings.GAME_ATLAS, 'uiIconStar0000'));
            this.icon.anchor.set(0.5);
            this.textField = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(95, 0);
            this.buttonGetStars = this.add(new BlockPuzzle.ButtonGetStars());
            this.buttonGetStars.position.set(124, 44);
            this.updateStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
            BlockPuzzle.StarsManager.instance.onStarAdded.add(this.dispatchStarAdded, this);
            BlockPuzzle.StarsManager.instance.onStarsAmountChanged.add(this.updateStarsAmount, this);
        }
        playStarIncreasingTween() {
            BlockPuzzle.SoundController.instance.playStarReceivedSound();
            this.game.add.tween(this.textField.scale)
                .to({ x: 1.3 / 2, y: 1.3 / 2 }, 140, Phaser.Easing.Sinusoidal.Out, true, 0, 0, true);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1.45, y: 1.45 }, 80, Phaser.Easing.Sinusoidal.Out, false)
                .to({ x: 0.87, y: 0.87 }, 200, Phaser.Easing.Sinusoidal.In, false)
                .to({ x: 1, y: 1 }, 60, Phaser.Easing.Sinusoidal.Out, false)
                .start();
        }
        dispatchStarAdded(starsAmount) {
            this.updateStarsAmount(starsAmount);
            this.playStarIncreasingTween();
        }
        updateStarsAmount(starsAmount) {
            this.textField.changeText('' + starsAmount);
        }
        destroy() {
            BlockPuzzle.StarsManager.instance.onStarAdded.remove(this.dispatchStarAdded, this);
            BlockPuzzle.StarsManager.instance.onStarsAmountChanged.remove(this.updateStarsAmount, this);
            super.destroy();
        }
    }
    BlockPuzzle.StarsCounter = StarsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class MultiplierBar extends Phaser.Group {
        constructor(uiManager) {
            super(uiManager.game);
            this.padHeight = 70;
            this.storedMultiplierValue = 1;
            this.storedProgressValue = 0;
            this.uiManager = uiManager;
            this.level = uiManager.level;
            this.buildChildren();
            BlockPuzzle.ScoreManager.instance.onMultiplierChanges.add(this.handleMultiplierChange, this);
        }
        buildChildren() {
            this.contentContainer = this.add(this.game.make.group());
            this.padGrayscale = this.contentContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.ANIMATION_ATLAS, 'multiplierPadGrey0000'));
            this.padGrayscale.anchor.set(0.5);
            this.padGrayscale.scale.set(0.75);
            this.textFieldGrayscale = this.contentContainer.add(new BlockPuzzle.BitmapTextField('x' + this.storedMultiplierValue, BlockPuzzle.Settings.GAME_ATLAS, 'MultiplierGrey', 1.1, 0.5, 0.5, -2));
            this.textFieldGrayscale.position.set(0, 0);
            this.padGold = this.contentContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.ANIMATION_ATLAS, 'multiplierPad0000'));
            this.padGold.anchor.set(0.5);
            this.padGold.scale.set(0.75);
            this.padWhite = this.contentContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.ANIMATION_ATLAS, 'multiplierPadWhite0000'));
            this.padWhite.anchor.set(0.5);
            this.padWhite.alpha = 0;
            this.padWhite.scale.set(0.75);
            this.textFieldGold = this.contentContainer.add(new BlockPuzzle.BitmapTextField('x' + this.storedMultiplierValue, BlockPuzzle.Settings.GAME_ATLAS, 'Multiplier', 1.1, 0.5, 0.5, -2));
            this.textFieldGold.position.set(0, 0);
            this.progressMask = this.contentContainer.add(this.game.make.graphics(0, this.padHeight / 2));
            this.progressMask.beginFill(0, 0.5).drawRect(-this.padGold.width / 2, 0, this.padGold.width, this.padGold.height).endFill();
            this.padGold.mask = this.progressMask;
            this.textFieldGold.mask = this.progressMask;
        }
        handleMultiplierChange(multiplier, progress) {
            if (this.storedMultiplierValue == multiplier) {
                this.game.add.tween(this.progressMask)
                    .to({ y: -1 + (0.5 - progress) * this.padHeight }, 500, Phaser.Easing.Sinusoidal.Out, true);
                this.game.tweens.removeFrom(this.padWhite);
                this.game.add.tween(this.padWhite)
                    .to({ alpha: 0.5 }, 250, Phaser.Easing.Linear.None, false)
                    .to({ alpha: 0.0 }, 250, Phaser.Easing.Linear.None, false)
                    .start();
            }
            else if (multiplier > this.storedMultiplierValue) {
                BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_LEVEL_UPS, multiplier - this.storedMultiplierValue);
                BlockPuzzle.SoundController.instance.playlevelUpSound();
                const totalDuration = 500;
                const fillingDuration = Phaser.Math.clamp(1 - this.storedProgressValue, 0.1, 0.8) * totalDuration;
                this.game.add.tween(this.progressMask)
                    .to({ y: -1 + (0.5 - 1) * this.padHeight }, fillingDuration, Phaser.Easing.Sinusoidal.Out, false)
                    .to({ y: -1 + (0.5) * this.padHeight }, 1, Phaser.Easing.Sinusoidal.Out, false)
                    .to({ y: -1 + (0.5 - progress) * this.padHeight }, totalDuration - fillingDuration + 1, Phaser.Easing.Sinusoidal.Out, false)
                    .start();
                this.game.time.events.add(fillingDuration, () => this.updateMultiplierTexts(multiplier));
                this.game.tweens.removeFrom(this.padWhite);
                this.game.add.tween(this.padWhite)
                    .to({ alpha: 0.6 }, fillingDuration, Phaser.Easing.Linear.None, false)
                    .to({ alpha: 0 }, totalDuration - fillingDuration, Phaser.Easing.Linear.None, false)
                    .start();
            }
            this.storedMultiplierValue = multiplier;
            this.storedProgressValue = progress;
        }
        updateMultiplierTexts(multiplier) {
            this.textFieldGrayscale.changeText('x' + multiplier);
            this.textFieldGold.changeText('x' + multiplier);
        }
    }
    BlockPuzzle.MultiplierBar = MultiplierBar;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ResultsMultiplierBar extends Phaser.Group {
        constructor(results) {
            super(results.game);
            this.padHeight = 70;
            this.storedMultiplierValue = 1;
            this.storedProgressValue = 0;
            this.results = results;
            this.buildChildren();
        }
        buildChildren() {
            this.contentContainer = this.add(this.game.make.group());
            this.padGrayscale = this.contentContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.ANIMATION_ATLAS, 'multiplierPadGrey0000'));
            this.padGrayscale.anchor.set(0.5);
            this.padGrayscale.scale.set(0.75);
            this.textFieldGrayscale = this.contentContainer.add(new BlockPuzzle.BitmapTextField('x' + this.storedMultiplierValue, BlockPuzzle.Settings.GAME_ATLAS, 'MultiplierGrey', 1.1, 0.5, 0.5, -2));
            this.textFieldGrayscale.position.set(0, 0);
            this.padGold = this.contentContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.ANIMATION_ATLAS, 'multiplierPad0000'));
            this.padGold.anchor.set(0.5);
            this.padGold.scale.set(0.75);
            this.textFieldGold = this.contentContainer.add(new BlockPuzzle.BitmapTextField('x' + this.storedMultiplierValue, BlockPuzzle.Settings.GAME_ATLAS, 'Multiplier', 1.1, 0.5, 0.5, -2));
            this.textFieldGold.position.set(0, 0);
            this.progressMask = this.contentContainer.add(this.game.make.graphics(0, this.padHeight / 2));
            this.progressMask.beginFill(0, 0.5).drawRect(-this.padGold.width / 2, 0, this.padGold.width, this.padGold.height).endFill();
            this.padGold.mask = this.progressMask;
            this.textFieldGold.mask = this.progressMask;
        }
        setValue(multiplier, progress) {
            this.updateMultiplierTexts(multiplier);
            this.game.add.tween(this.progressMask)
                .to({ y: -1 + (0.5 - progress) * this.padHeight }, 800, Phaser.Easing.Sinusoidal.Out, true, 650);
            this.textFieldGrayscale.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);
            this.textFieldGold.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);
            this.storedMultiplierValue = multiplier;
            this.storedProgressValue = progress;
        }
        updateMultiplierTexts(multiplier) {
            this.textFieldGrayscale.changeText('x' + multiplier);
            this.textFieldGold.changeText('x' + multiplier);
        }
    }
    BlockPuzzle.ResultsMultiplierBar = ResultsMultiplierBar;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractPowerup extends Phaser.Group {
        constructor(powerupContainer, powerupType) {
            super(powerupContainer.game, null);
            this.dragging = false;
            this.available = false;
            this.countdownActive = false;
            this.startAngle = 270;
            this.endAngle = -90 - 0.000001;
            this.currentStep = { value: 0 };
            this.iconDelta = { x: 0, y: 0 };
            this.powerupContainer = powerupContainer;
            this.level = powerupContainer.level;
            this.powerupType = powerupType;
            this.available = BlockPuzzle.PowerupManager.instance.isBought(this.powerupType);
            this.buildContent();
            this.addListeners();
        }
        buildContent() {
            this.countdownBar = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'itemPad0001'));
            this.countdownBar.anchor.set(0.5);
            this.countdownBar.alpha = 0;
            this.countdownMask = this.add(this.game.make.graphics(-1, -3));
            this.countdownMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 60, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill();
            this.countdownBar.mask = this.countdownMask;
            this.pad = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'itemPad0000'));
            this.pad.anchor.set(0.5);
            this.icon = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'icon' + this.powerupType + '0000'));
            this.icon.anchor.set(0.5);
            this.mark = this.add(this.game.make.sprite(28, -26, BlockPuzzle.Settings.GAME_ATLAS, this.isAvailable() ? 'okaySign0000' : 'plusSign0000'));
            this.mark.anchor.set(0.5);
            this.tutorialHand = this.add(this.game.make.sprite(-4, 0, BlockPuzzle.Settings.GAME_ATLAS, 'tutorialHand0000'));
            this.tutorialHand.anchor.set(0, 0);
            this.tutorialHand.scale.set(0.5);
            this.tutorialHand.angle = -24;
            this.tutorialHand.visible = false;
            this.animateAppearing();
            if (BlockPuzzle.PowerupManager.instance.isBought(this.powerupType)) {
                this.activate();
            }
        }
        addListeners() {
            BlockPuzzle.PowerupManager.instance.onPowerupBought.add(this.handlePowerupBought, this);
            this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this, 999);
            this.pad.inputEnabled = true;
            this.pad.input.pixelPerfectClick = true;
            this.pad.input.pixelPerfectAlpha = 1;
            this.pad.events.onInputDown.add(this.handleInputDown, this);
            this.pad.events.onInputUp.add(this.handleInputUp, this);
        }
        animateAppearing() {
            this.visible = true;
            this.icon.scale.set(1);
            this.icon.position.set(0, 0);
            this.icon.visible = true;
            this.scale.set(0);
            this.game.add.tween(this.scale)
                .to({ x: 1, y: 1 }, 240, Phaser.Easing.Circular.Out, true, 0);
            this.game.tweens.removeFrom(this, false);
            this.alpha = 0;
            this.y = 35;
            this.game.add.tween(this)
                .to({ alpha: 1, y: 0 }, 240, Phaser.Easing.Linear.None, true);
        }
        handleInputDown(sprite, pointer) {
            if (!this.isAvailable()) {
                this.displayShop();
                return;
            }
            this.dragging = true;
            if (this.parent) {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }
            this.game.tweens.removeFrom(this.iconDelta);
            this.iconDelta.x = 0;
            this.iconDelta.y = 0;
            this.game.add.tween(this.iconDelta)
                .to(this.level.serviceManager.layoutService.getPowerupDraggingDelta(), 80, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.icon.scale);
            this.icon.scale.set(1);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1.5, y: 1.5 }, 80, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.mark.scale);
            this.game.add.tween(this.mark.scale)
                .to({ x: 0, y: 0 }, 60, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.mark);
            this.game.add.tween(this.mark)
                .to({ alpha: 0 }, 60, Phaser.Easing.Linear.None, true);
            this.powerupContainer.pauseCountdowns();
        }
        handleInputUp(sprite, pointer) {
            if (!this.isAvailable()) {
                return;
            }
            const currentCell = this.getCurrentCell();
            if (this.canBeApplied(currentCell)) {
                this.applyPowerup(currentCell);
            }
            else {
                this.game.tweens.removeFrom(this.icon.scale);
                this.icon.scale.set(1);
                this.game.add.tween(this.icon.scale)
                    .to({ x: 1, y: 1 }, 100, Phaser.Easing.Linear.None, true);
                this.game.tweens.removeFrom(this.icon);
                this.game.add.tween(this.icon)
                    .to({ x: 0, y: 0 }, 100, Phaser.Easing.Linear.None, true);
            }
            this.dragging = false;
            this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged([]);
            this.game.tweens.removeFrom(this.mark.scale);
            this.game.add.tween(this.mark.scale)
                .to({ x: 1, y: 1 }, 60, Phaser.Easing.Linear.None, true);
            this.game.tweens.removeFrom(this.mark);
            this.game.add.tween(this.mark)
                .to({ alpha: 1 }, 60, Phaser.Easing.Linear.None, true);
            this.powerupContainer.resumeCountdowns();
        }
        update() {
            super.update();
            if (this.countdownActive) {
                if (!BlockPuzzle.WindowManager.instance.hasOpenedWindows() && !this.powerupContainer.hasDraggingPowerups()) {
                    this.currentStep.value += this.game.time.elapsedMS / BlockPuzzle.Settings.POWERUP_USAGE_COUNTDOWN_WHEN_NO_MOVES_LEFT;
                    if (this.currentStep.value > 1) {
                        this.currentStep.value = 0;
                        this.countdownFinished();
                    }
                }
                this.countdownMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 70, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill();
            }
            if (this.level.gameStateManager.isGameActive() && this.dragging) {
                const { x, y } = this.toLocal(this.game.input.activePointer.position, this.game.world);
                this.icon.position.set(x + this.iconDelta.x, y + this.iconDelta.y);
                this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged(this.getTargetCells(this.getCurrentCell()));
            }
            else {
                this.updateView();
            }
        }
        pauseCountdown() {
            if (this.countdownActive) {
                this.game.add.tween(this.tutorialHand)
                    .to({ alpha: 0 }, 70, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.countdownBar)
                    .to({ alpha: 0 }, 80, Phaser.Easing.Linear.None, true);
            }
        }
        resumeCountdown() {
            if (this.countdownActive) {
                this.game.add.tween(this.tutorialHand)
                    .to({ alpha: 1 }, 70, Phaser.Easing.Linear.None, true);
                this.game.add.tween(this.countdownBar)
                    .to({ alpha: 1 }, 70, Phaser.Easing.Linear.None, true);
            }
        }
        isAvailable() {
            return this.available;
        }
        mayBeBought() {
            return (BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType) <= BlockPuzzle.StarsManager.instance.getStarsAmount());
        }
        updateView() {
            if (!BlockPuzzle.PowerupManager.instance.isBought(this.powerupType)) {
                this.icon.frameName = 'icon' + this.powerupType + '0000';
                this.mark.visible = true;
                this.mark.frameName = 'plusSign0000';
            }
            else {
                this.mark.visible = true;
                this.mark.frameName = 'okaySign0000';
            }
        }
        activate() {
            this.available = true;
            this.icon.scale.set(1);
            this.icon.position.set(0, 0);
            this.icon.visible = true;
            this.mark.frameName = 'okaySign0000';
        }
        deactivate() {
            if (this.isAvailable()) {
                this.available = false;
                this.game.tweens.removeFrom(this.icon.scale);
                this.icon.scale.set(0);
                this.icon.position.set(0, 0);
                this.mark.frameName = 'plusSign0000';
                this.game.add.tween(this.icon.scale)
                    .to({ x: 1, y: 1 }, 180, Phaser.Easing.Sinusoidal.Out, true);
            }
        }
        startCountdown() {
            if (this.isAvailable()) {
                this.resetCountdown();
                this.showTutorialHand();
                this.countdownBar.visible = true;
                this.countdownBar.alpha = 1;
                this.countdownActive = true;
            }
        }
        countdownFinished() {
            this.resetCountdown();
            this.level.eventManager.onPowerupUsageTimerExceeded.dispatch();
            this.hideTutorialHand();
        }
        hideTutorialHand() {
            this.game.tweens.removeFrom(this.tutorialHand);
            this.game.add.tween(this.tutorialHand)
                .to({ alpha: 0 }, 250, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => this.tutorialHand.visible = false);
        }
        showTutorialHand() {
            this.game.tweens.removeFrom(this.tutorialHand);
            this.tutorialHand.visible = true;
            this.game.add.tween(this.tutorialHand)
                .to({ alpha: 1 }, 250, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.tutorialHand)
                .to({ x: '-6', y: '-6' }, 300, Phaser.Easing.Linear.None, true, 0, -1, true);
        }
        handlePowerupApplied() {
            this.resetCountdown();
            this.hideTutorialHand();
        }
        resetCountdown() {
            this.game.tweens.removeFrom(this.currentStep);
            this.game.tweens.removeFrom(this.countdownBar);
            this.currentStep.value = 0;
            this.countdownActive = false;
            this.countdownBar.visible = false;
            this.countdownBar.alpha = 1;
            this.countdownMask.clear();
        }
        displayShop() {
            BlockPuzzle.WindowManager.instance.showShop(this.powerupType);
        }
        getCurrentCell() {
            const boardLocalPosition = this.level.boardManager.getBoard().cellsContainer.toLocal(this.icon.position, this);
            return this.level.boardManager.getBoard().getCellUnderPoint(boardLocalPosition);
        }
        handlePowerupBought(powerupType) {
            if (powerupType === this.powerupType && !this.isAvailable()) {
                this.activate();
                this.powerupContainer.updatePowerups();
            }
        }
        destroy() {
            BlockPuzzle.PowerupManager.instance.onPowerupBought.remove(this.handlePowerupBought, this);
            super.destroy();
        }
    }
    BlockPuzzle.AbstractPowerup = AbstractPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BombPowerup extends BlockPuzzle.AbstractPowerup {
        constructor(powerupContainer) {
            super(powerupContainer, BlockPuzzle.PowerupType.BOMB);
        }
        getTargetCells(mainCell) {
            if (mainCell) {
                return this.level.boardManager.getBoard().getCells().filter(cell => Math.abs(cell.posX - mainCell.posX) <= 1 && Math.abs(cell.posY - mainCell.posY) <= 1);
            }
            return [];
        }
        canBeApplied(cell) {
            return cell && this.getTargetCells(cell).some(targetCell => targetCell.hasBlock());
        }
        applyPowerup(currentCell) {
            BlockPuzzle.PowerupManager.instance.usePowerup(this.powerupType);
            BlockPuzzle.APIUtils.instance.trackStatsChange('bomb_powerups_used', 1);
            BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.BOMB_EXPLOSIONS, 1);
            this.getTargetCells(currentCell).forEach(cell => cell.destroyBlock(0));
            this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.ExplosionEffect(currentCell.x, currentCell.y));
            this.level.figureManager.updateFiguresApplicability();
            this.deactivate();
            this.level.eventManager.onPowerupApplied.dispatch(this.powerupType);
        }
    }
    BlockPuzzle.BombPowerup = BombPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class LightningPowerup extends BlockPuzzle.AbstractPowerup {
        constructor(powerupContainer) {
            super(powerupContainer, BlockPuzzle.PowerupType.LIGHTNING);
        }
        getTargetCells(mainCell) {
            if (mainCell) {
                return this.level.boardManager.getBoard().getCells().filter(cell => mainCell.hasBlock() && cell.hasBlock() && cell.getBlock().color == mainCell.getBlock().color);
            }
            return [];
        }
        canBeApplied(cell) {
            return cell && cell.hasBlock();
        }
        applyPowerup(currentCell) {
            BlockPuzzle.PowerupManager.instance.usePowerup(this.powerupType);
            BlockPuzzle.APIUtils.instance.trackStatsChange('lightning_powerups_used', 1);
            const targetCells = Phaser.ArrayUtils.shuffle(this.getTargetCells(currentCell));
            if (targetCells.length == 1) {
                this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.LightningEffect(currentCell, currentCell).delayedStart(0));
                this.game.time.events.add(50, () => this.level.figureManager.updateFiguresApplicability());
            }
            else {
                let delay = 0;
                let currentPortion = [currentCell];
                while (currentPortion) {
                    for (let cell of currentPortion) {
                        let nextPortion = this.getNextPortionOfCells(targetCells);
                        if (nextPortion) {
                            for (let nextCell of nextPortion) {
                                this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.LightningEffect(cell, nextCell).delayedStart(delay));
                            }
                            delay += BlockPuzzle.LightningEffect.TOTAL_FRAMES / BlockPuzzle.LightningEffect.FPS * 1000 + BlockPuzzle.Settings.LIGHTING_DELAY_BETWEEN_STRIKES;
                        }
                        currentPortion = nextPortion;
                    }
                }
                this.game.time.events.add(delay + 50, () => {
                    this.level.figureManager.updateFiguresApplicability();
                    this.level.eventManager.onPowerupApplied.dispatch(this.powerupType);
                });
            }
            this.deactivate();
        }
        getNextPortionOfCells(cells) {
            if (cells.length == 0) {
                return null;
            }
            if (cells.length < BlockPuzzle.Settings.LIGHTING_MIN_TARGETS) {
                return cells.splice(0, cells.length);
            }
            let cellsCount = BlockPuzzle.Settings.LIGHTING_MIN_TARGETS + Math.floor(Math.random() * (BlockPuzzle.Settings.LIGHTING_MAX_TARGETS + 1 - BlockPuzzle.Settings.LIGHTING_MIN_TARGETS));
            return cells.splice(0, cellsCount > cells.length ? cells.length : cellsCount);
        }
    }
    BlockPuzzle.LightningPowerup = LightningPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class PowerupContainer extends Phaser.Group {
        constructor(uiManager) {
            super(uiManager.game, null);
            this.usedPowerups = [];
            this.uiManager = uiManager;
            this.level = uiManager.level;
            this.buildContent();
        }
        buildContent() {
            this.lightningPowerup = this.add(new BlockPuzzle.LightningPowerup(this));
            this.lightningPowerup.position.set(0, 45);
            this.bombPowerup = this.add(new BlockPuzzle.BombPowerup(this));
            this.bombPowerup.position.set(0, -45);
            this.updatePowerups();
            this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this);
        }
        updatePowerups() {
            this.game.time.events.add(20, () => this.resize());
        }
        hidePowerups() {
            this.game.add.tween(this.bombPowerup)
                .to({ y: '+50', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, 0)
                .onComplete.add(() => this.bombPowerup.visible = false);
            this.game.add.tween(this.lightningPowerup)
                .to({ y: '+50', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, 50)
                .onComplete.add(() => this.lightningPowerup.visible = false);
        }
        startCountdown() {
            this.bombPowerup.startCountdown();
            this.lightningPowerup.startCountdown();
        }
        pauseCountdowns() {
            this.bombPowerup.pauseCountdown();
            this.lightningPowerup.pauseCountdown();
        }
        resumeCountdowns() {
            this.bombPowerup.resumeCountdown();
            this.lightningPowerup.resumeCountdown();
        }
        hasDraggingPowerups() {
            return this.lightningPowerup.dragging || this.bombPowerup.dragging;
        }
        resize() {
            if (BlockPuzzle.CustomScaleManager.isPortrait()) {
                this.resizePortrait();
            }
            else if (BlockPuzzle.CustomScaleManager.isSquared()) {
                this.resizeSquared();
            }
            else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
                this.resizeLandscape();
            }
        }
        resizeLandscape() {
            const powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
            this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
            this.scale.set(Math.max(Math.min(powerupContainerBounds.width * 0.6 / 200, 1.4), 1));
            this.bombPowerup.position.set(-48, 0);
            this.lightningPowerup.position.set(48, 0);
        }
        resizePortrait() {
            const powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
            this.scale.set(Math.max(1, Math.min(powerupContainerBounds.height / 90, 1.35)));
            this.position.set(powerupContainerBounds.x, Math.min(powerupContainerBounds.y, powerupContainerBounds.y + powerupContainerBounds.height / 2 - 48 * this.scale.y));
            this.bombPowerup.position.set(-47, 0);
            this.lightningPowerup.position.set(47, 0);
        }
        resizeSquared() {
            const powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
            this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
            this.scale.set(1 / (Math.pow(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR, 0.5)));
            this.bombPowerup.position.set(-48, 0);
            this.lightningPowerup.position.set(48, 0);
        }
        handlePowerupApplied(powerupType) {
            BlockPuzzle.Analytics.instance.updateLevelData({ powerups: [powerupType] });
            this.usedPowerups.push(powerupType);
        }
    }
    BlockPuzzle.PowerupContainer = PowerupContainer;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class PublisherLogo extends Phaser.Sprite {
        constructor(x, y) {
            super(BlockPuzzle.App.instance, x, y, 'more_games');
            this.anchor.set(0.5);
            this.inputEnabled = true;
            this.events.onInputDown.add(this.publisherLogoClicked, this);
        }
        publisherLogoClicked() {
            BlockPuzzle.App.instance.navigateToSponsor();
        }
    }
    BlockPuzzle.PublisherLogo = PublisherLogo;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class NewRecordEffect extends Phaser.Group {
        constructor(results) {
            super(results.game, null);
            this.resultsWindow = results;
            this.stamp = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'newBestIcon0000'));
            this.stamp.anchor.set(0.5);
        }
        show(delay) {
            this.game.time.events.add(delay, () => this.playStampTween());
        }
        playStampTween() {
            this.visible = true;
            this.scale.set(2.5);
            this.alpha = 0.45;
            this.game.add.tween(this)
                .to({ alpha: 1 }, 250, Phaser.Easing.Linear.None, true);
            this.game.add.tween(this.scale)
                .to({ x: 1, y: 1 }, 250, Phaser.Easing.Linear.None, true)
                .onComplete.add(() => {
                this.parent.scale.set(0.95, 0.95);
                this.game.add.tween(this.parent.scale)
                    .to({ x: 1, y: 1 }, 320, Phaser.Easing.Back.Out, true);
                this.parent && this.parent.parent && this.parent.parent.addChildAt(new BlockPuzzle.BestScoreReachedEffectEmitter(0, -15, 120), 0);
            });
            this.game.time.events.add(160, () => BlockPuzzle.SoundController.instance.playStampSound());
        }
    }
    BlockPuzzle.NewRecordEffect = NewRecordEffect;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ResultsScoresPanel extends Phaser.Group {
        constructor(results) {
            super(results.game, null);
            this.results = results;
            this.scale.set(1.25);
            this.buildContent();
        }
        buildContent() {
            this.pad = this.add(this.game.make.sprite(12, 0, BlockPuzzle.Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);
            this.textField = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(102, 0);
            this.highscoreGroup = this.add(this.game.make.group());
            this.highscoreGroup.position.set(106, 37);
            this.highscoreIcon = this.highscoreGroup.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'topScoreCrown0000'));
            this.highscoreIcon.anchor.set(1, 0.5);
            this.highscoreText = this.highscoreGroup.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.42, 0, 0.5, 1));
            this.highscoreText.position.set(0, 1);
            this.icon = this.add(this.game.make.sprite(5, 10, BlockPuzzle.Settings.GAME_ATLAS, 'resultsIconCup0000'));
            this.icon.anchor.set(0.5);
        }
        show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix = '', rightValuePrefix = '', delay, textTweenDelay, tweenTextDuration) {
            this.resetTweens();
            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
            this.animateAppearing(delay);
        }
        tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
            this.highscoreText.changeText('' + rightValueInitial);
            this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
            this.highscoreText.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
        }
        animateAppearing(delay) {
            this.icon.scale.set(0.5);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay + 100);
            this.icon.alpha = 0;
            this.game.add.tween(this.icon)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.pad.scale.x = 0;
            this.game.add.tween(this.pad.scale)
                .to({ x: 1.3 }, 450, Phaser.Easing.Back.Out, true, delay + 150);
            this.textField.visible = false;
            this.textField.scale.set(0.5);
            this.game.add.tween(this.textField.scale)
                .to({ x: 0.72, y: 0.72 }, 450, Phaser.Easing.Back.Out, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);
            this.highscoreGroup.visible = false;
            this.highscoreGroup.alpha = 0;
            this.game.add.tween(this.highscoreGroup)
                .to({ alpha: 1 }, 300, Phaser.Easing.Sinusoidal.Out, true, delay + 400)
                .onStart.add(() => this.highscoreGroup.visible = true);
            this.textField.visible = false;
            this.textField.alpha = 0;
            this.game.add.tween(this.textField)
                .to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);
        }
        resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
            this.game.tweens.removeFrom(this.pad.scale);
            this.game.tweens.removeFrom(this.textField);
            this.game.tweens.removeFrom(this.textField.scale);
            this.game.tweens.removeFrom(this.highscoreGroup);
            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.pad.scale.set(1.3);
            this.textField.scale.set(1);
            this.textField.visible = true;
            this.highscoreGroup.alpha = 1;
            this.highscoreGroup.visible = true;
        }
        showPanel(delay, textTweenDelay, duration, bestScoresReached) {
            this.show(0, BlockPuzzle.ScoreManager.instance.getCurrentScores(), bestScoresReached ? BlockPuzzle.ScoreManager.instance.getPrevMaxScores() : BlockPuzzle.ScoreManager.instance.getMaxScores(), BlockPuzzle.ScoreManager.instance.getMaxScores(), '', '', delay, delay + textTweenDelay, duration);
        }
        update() {
            if (this.highscoreGroup.visible) {
                let textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
                this.highscoreIcon.x = -textFieldWidth / 2 - 2;
                this.highscoreText.x = -textFieldWidth / 2;
            }
        }
    }
    BlockPuzzle.ResultsScoresPanel = ResultsScoresPanel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ResultsStarsPanel extends Phaser.Group {
        constructor(results) {
            super(results.game, null);
            this.results = results;
            this.scale.set(1.25);
            this.buildContent();
        }
        buildContent() {
            this.pad = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'scorePad0000'));
            this.pad.anchor.set(0, 0.5);
            this.pad.scale.set(1.3);
            this.textField = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
            this.textField.position.set(100, 0);
            this.icon = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsIconStar0000'));
            this.icon.anchor.set(0.5);
        }
        show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix = '', rightValuePrefix = '', delay, textTweenDelay, tweenTextDuration) {
            this.resetTweens();
            this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
            this.animateAppearing(delay);
        }
        tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
            this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
        }
        animateAppearing(delay) {
            this.icon.scale.set(0.5);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay + 100);
            this.icon.alpha = 0;
            this.game.add.tween(this.icon)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.pad.scale.x = 0;
            this.game.add.tween(this.pad.scale)
                .to({ x: 1.3 }, 450, Phaser.Easing.Back.Out, true, delay + 150);
            this.textField.visible = false;
            this.textField.scale.set(0.5);
            this.game.add.tween(this.textField.scale)
                .to({ x: 0.72, y: 0.72 }, 450, Phaser.Easing.Back.Out, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);
            this.textField.visible = false;
            this.textField.alpha = 0;
            this.game.add.tween(this.textField)
                .to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, delay + 250)
                .onStart.add(() => this.textField.visible = true);
        }
        resetTweens() {
            this.game.tweens.removeFrom(this.alpha);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
            this.game.tweens.removeFrom(this.pad.scale);
            this.game.tweens.removeFrom(this.textField);
            this.game.tweens.removeFrom(this.textField.scale);
            this.icon.scale.set(1);
            this.icon.alpha = 1;
            this.pad.scale.set(1.3);
            this.textField.scale.set(1);
            this.textField.visible = true;
        }
        showPanel(delay, textTweenDelay, duration) {
            this.show(0, Math.max(0, BlockPuzzle.StarsManager.instance.getStarsAmount()), 0, 0, '', '', delay, delay + textTweenDelay, duration);
        }
    }
    BlockPuzzle.ResultsStarsPanel = ResultsStarsPanel;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ReviveCountdown extends Phaser.Group {
        constructor(windowRevive) {
            super(windowRevive.game, null);
            this.countdownActive = false;
            this.startAngle = 270;
            this.endAngle = -90 - 0.000001;
            this.currentStep = { value: 0 };
            this.windowRevive = windowRevive;
            this.circle = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'reviveCircle0000'));
            this.circle.anchor.set(0.5);
            this.circleMask = this.add(this.game.make.graphics(-1, -3));
            this.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill();
            this.circle.mask = this.circleMask;
            this.heart = this.add(this.game.make.sprite(0, -25, BlockPuzzle.Settings.GAME_ATLAS, 'iconRevive0000'));
            this.heart.anchor.set(0.5);
            this.timeLeftText = this.add(BlockPuzzle.TextUtils.getText('9...', 0, 70, 65, '#FF5E40'));
        }
        update() {
            super.update();
            if (this.isActive()) {
                const secondsLeft = Math.ceil((1 - this.currentStep.value) * 10);
                this.timeLeftText.setText('' + BlockPuzzle.TextUtils.convertMSToMSS(secondsLeft * 1000));
                this.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill();
            }
        }
        startCountdown() {
            BlockPuzzle.SoundController.instance.chokeMusicVolume(400);
            this.resetCountdown();
            this.circle.visible = true;
            this.circle.alpha = 1;
            this.heart.visible = true;
            this.timeLeftText.visible = true;
            this.countdownActive = true;
            this.game.add.tween(this.currentStep)
                .to({ value: 1 }, BlockPuzzle.Settings.REVIVE_TIMER_DURATION, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.stopCountdown, this);
            this.heart.scale.set(0);
            this.game.add.tween(this.heart.scale)
                .to({ x: 1, y: 1 }, 600, Phaser.Easing.Back.Out, true)
                .onComplete.add(() => this.startHeartbeatAnimation());
        }
        startHeartbeatAnimation() {
            this.game.tweens.removeFrom(this.heart.scale);
            this.heart.scale.set(1);
            const heartbeatTween = this.game.add.tween(this.heart.scale)
                .to({ x: 1.1, y: 1.1 }, 100, Phaser.Easing.Sinusoidal.In, false, 0)
                .to({ x: 1, y: 1 }, 310, Phaser.Easing.Sinusoidal.Out, false)
                .to({ x: 1.1, y: 1.1 }, 100, Phaser.Easing.Sinusoidal.In, false, 25)
                .to({ x: 1, y: 1 }, 140, Phaser.Easing.Sinusoidal.Out, false)
                .to({ x: 1, y: 1 }, 650, Phaser.Easing.Sinusoidal.Out, false)
                .start()
                .repeatAll(-1);
            heartbeatTween.onLoop.add(() => BlockPuzzle.SoundController.instance.playHeartBeatSound());
            heartbeatTween.onStart.add(() => BlockPuzzle.SoundController.instance.playHeartBeatSound());
        }
        stopCountdown() {
            this.resetCountdown();
            this.windowRevive.reviveFailed(true);
        }
        animateDisappearing(delay) {
            BlockPuzzle.SoundController.instance.restoreMusicVolume(600);
            this.game.add.tween(this)
                .to({ alpha: 0 }, 200, Phaser.Easing.Linear.None, true, delay + 50)
                .onComplete.add(() => {
                this.heart.visible = false;
                this.timeLeftText.visible = false;
            });
            this.game.add.tween(this.scale)
                .to({ x: 0.6, y: 0.6 }, 200, Phaser.Easing.Back.In, true, delay + 50);
            this.game.add.tween(this.circle)
                .to({ alpha: 0 }, 200, Phaser.Easing.Sinusoidal.In, true, delay)
                .onComplete.add(() => this.circle.visible = false);
        }
        resetCountdown() {
            this.game.tweens.removeFrom(this.currentStep);
            this.game.tweens.removeFrom(this.heart.scale);
            this.game.tweens.removeFrom(this.timeLeftText.scale);
            this.game.tweens.removeFrom(this.circle);
            this.timeLeftText.scale.set(1);
            this.heart.scale.set(1);
            this.currentStep.value = 0;
            this.countdownActive = false;
            this.circle.visible = false;
            this.circle.alpha = 1;
            this.circleMask.clear();
        }
        isActive() {
            return this.countdownActive;
        }
    }
    BlockPuzzle.ReviveCountdown = ReviveCountdown;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractUIScrollbar extends Phaser.Group {
        constructor() {
            super(BlockPuzzle.App.instance);
            this.prevValue = 0.5;
            this.sliderDx = 0;
            this.buildChildren();
            this.initValue();
        }
        buildChildren() {
            this.buildScrollerContainer();
            this.buildPad();
            this.buildBar();
            this.buildSlider();
            this.buildShadow();
            this.buildIcon();
            this.addIconListeners();
        }
        setInitialValue(value) {
            this.setValue(value, true);
            this.prevValue = this.value;
        }
        buildScrollerContainer() {
            this.scrollerContainer = this.add(this.game.make.group());
            this.scrollerContainer.position.set(58, 0);
        }
        buildPad() {
            this.pad = this.scrollerContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlPad0000'));
            this.pad.anchor.set(0.5);
        }
        buildShadow() {
            this.shadow = this.scrollerContainer.add(this.game.make.sprite(-100, -3, BlockPuzzle.Settings.GAME_ATLAS, 'controlBarShadow0000'));
            this.shadow.anchor.set(0.5);
        }
        buildBar() {
            this.bar = this.scrollerContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlBar0000'));
            this.bar.anchor.set(0.5);
            this.barMask = this.scrollerContainer.add(this.game.make.graphics(-this.pad.width / 2, 0));
            this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.pad.width, 40).endFill();
            this.bar.mask = this.barMask;
        }
        buildSlider() {
            this.slider = this.scrollerContainer.add(this.game.make.sprite(this.sliderDx, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlSlider0000'));
            this.slider.anchor.set(0.2, 0.5);
            this.slider.hitArea = new Phaser.Rectangle(-60, -60, 120, 120);
            this.slider.inputEnabled = true;
            this.slider.input.allowVerticalDrag = false;
            this.slider.input.enableDrag(false, false, false, 0, new Phaser.Rectangle(-this.pad.width / 2 + this.sliderDx, -this.slider.height, this.pad.width - this.sliderDx, this.slider.height * 2));
            this.slider.events.onDragUpdate.add(this.handleSliderDrag, this);
            this.slider.events.onDragStop.add(this.handleSliderDrag, this);
        }
        updateBarMask() {
            this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.slider.x + this.pad.width / 2 + 20, 40).endFill();
        }
        handleSliderDrag() {
            const value = this.slider.x / (this.pad.width - this.sliderDx - this.slider.width) + 0.5;
            this.setValue(Phaser.Math.clamp(value, 0, 1));
        }
        addIconListeners() {
            this.icon.inputEnabled = true;
            this.icon.events.onInputDown.add(this.handleIconClicked, this);
        }
        handleIconClicked() {
            if (this.value == 0) {
                this.setValue(this.prevValue);
            }
            else {
                this.prevValue = this.value;
                this.setValue(0);
            }
        }
        setValue(value, skipAnalytics = false) {
            this.value = value;
            this.slider.x = (value - 0.5) * (this.pad.width - this.sliderDx - this.slider.width);
            this.updateBarMask();
            this.dispatchValueChanged(value, skipAnalytics);
        }
    }
    BlockPuzzle.AbstractUIScrollbar = AbstractUIScrollbar;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="AbstractUIScrollbar.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class MusicControlScrollbar extends BlockPuzzle.AbstractUIScrollbar {
        initValue() {
            this.setInitialValue(BlockPuzzle.SoundController.instance.getMusicVolume());
        }
        buildIcon() {
            this.icon = this.add(this.game.make.sprite(-100, -5, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlIcon0000'));
            this.icon.anchor.set(0.5);
        }
        dispatchValueChanged(value, skipAnalytics) {
            this.icon.frameName = this.value === 0 ? 'musicControlIcon0001' : 'musicControlIcon0000';
            BlockPuzzle.SoundController.instance.setMusicVolume(value);
            if (BlockPuzzle.Settings.ENABLE_API && !skipAnalytics) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getMusicVolume(), -2),
                    sfxVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getSFXVolume(), -2)
                });
            }
        }
    }
    BlockPuzzle.MusicControlScrollbar = MusicControlScrollbar;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="AbstractUIScrollbar.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class SFXControlScrollbar extends BlockPuzzle.AbstractUIScrollbar {
        initValue() {
            this.setInitialValue(BlockPuzzle.SoundController.instance.getSFXVolume());
        }
        buildIcon() {
            this.icon = this.add(this.game.make.sprite(-100, -5, BlockPuzzle.Settings.GAME_ATLAS, 'sfxControlIcon0000'));
            this.icon.anchor.set(0.5);
        }
        dispatchValueChanged(value, skipAnalytics) {
            this.icon.frameName = this.value === 0 ? 'sfxControlIcon0001' : 'sfxControlIcon0000';
            BlockPuzzle.SoundController.instance.setSFXVolume(value);
            if (BlockPuzzle.Settings.ENABLE_API && !skipAnalytics) {
                window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
                    bgmVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getMusicVolume(), -2),
                    sfxVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getSFXVolume(), -2)
                });
            }
        }
    }
    BlockPuzzle.SFXControlScrollbar = SFXControlScrollbar;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ShopItem extends Phaser.Group {
        constructor(windowShop, powerupType) {
            super(windowShop.game, null);
            this.windowShop = windowShop;
            this.powerupType = powerupType;
            this.buildContent();
        }
        buildContent() {
            this.scale.set(1.2);
            this.pad = this.add(this.game.make.sprite(-10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'shopPricePadBig0000'));
            this.pad.anchor.set(0.5);
            this.pad.inputEnabled = true;
            this.pad.events.onInputDown.add(this.buyClicked, this);
            this.icon = this.add(this.game.make.sprite(-88, -10, BlockPuzzle.Settings.GAME_ATLAS, 'icon' + this.powerupType + '0000'));
            this.icon.anchor.set(0.5);
            this.icon.scale.set(1.2);
            this.priceStar = this.add(this.game.make.sprite(50, -3, BlockPuzzle.Settings.GAME_ATLAS, 'iconStarShopBig0000'));
            this.priceStar.anchor.set(0.5);
            this.priceText = this.add(new BlockPuzzle.BitmapTextField('' + BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType), BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.75, 0.5, 0.5, 1));
            this.priceText.position.set(-16, -2);
            this.buttonBuy = this.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonBuyBig', 130, -5, 1, this.buyClicked, this, false));
            this.boughtMark = this.add(this.game.make.sprite(115, -5, BlockPuzzle.Settings.GAME_ATLAS, 'boughtMarkBig0000'));
            this.boughtMark.anchor.set(0.5);
            this.boughtMark.scale.set(0.75);
            this.boughtMark.visible = false;
        }
        show() {
            this.boughtMark.visible = false;
            this.pad.frameName = 'shopPricePadBig0000';
            this.icon.x = -88;
            this.priceText.visible = true;
            this.priceStar.visible = true;
            this.buttonBuy.visible = this.buttonBuy.inputEnabled = true;
            this.priceStar.frameName = 'iconStarShopBig0000';
            this.icon.frameName = 'icon' + this.powerupType + '0000';
            this.priceText.styleKey = "Gold";
            this.priceText.changeText('' + BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType), true);
        }
        buyClicked() {
            if (BlockPuzzle.StarsManager.instance.getStarsAmount() >= BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType)) {
                this.buttonBuy.inputEnabled = false;
                this.buttonBuy.visible = false;
                this.boughtMark.visible = true;
                this.game.tweens.removeFrom(this.boughtMark.scale);
                this.boughtMark.scale.set(0.2);
                this.game.add.tween(this.boughtMark.scale)
                    .to({ x: 0.75, y: 0.75 }, 50, Phaser.Easing.Sinusoidal.Out, true);
                BlockPuzzle.SoundController.instance.playBuyingSound();
                BlockPuzzle.PowerupManager.instance.buy(this.powerupType);
                this.windowShop.powerupBought();
            }
            else {
                this.displayError();
            }
        }
        displayError() {
            this.windowShop.starsCounter.displayError();
            BlockPuzzle.ColorUtils.bounceTint(this.priceStar, 0xFF0000, 0xFFFFFF, 350);
            this.priceText.children.forEach(c => BlockPuzzle.ColorUtils.bounceTint(c, 0xFF0000, 0xFFFFFF, 350));
            BlockPuzzle.SoundController.instance.playErrorSound();
        }
    }
    BlockPuzzle.ShopItem = ShopItem;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowHeading extends Phaser.Group {
        constructor(iconFrameName, backplateType) {
            super(BlockPuzzle.App.instance);
            this.iconFrameName = iconFrameName;
            this.backplateType = backplateType;
            this.buildContent();
        }
        buildContent() {
            this.container = this.add(this.game.make.group());
            this.plate = this.container.add(this.game.make.sprite(0, -5, BlockPuzzle.Settings.GAME_ATLAS, 'windowHeadingBackplate000' + this.backplateType));
            this.plate.anchor.set(0.5, 0);
            this.icon = this.container.add(this.game.make.sprite(0, 316, BlockPuzzle.Settings.GAME_ATLAS, this.iconFrameName + '0000'));
            this.icon.anchor.set(0.5);
        }
        animateAppearing(delay) {
            this.game.tweens.removeFrom(this.container);
            this.container.y = -450;
            this.game.add.tween(this.container)
                .to({ y: -100 }, 350, Phaser.Easing.Back.Out, true, delay)
                .onStart.add(() => BlockPuzzle.SoundController.instance.playPanelMovementSound());
            this.icon.alpha = 0;
            this.icon.scale.set(0.6);
            this.game.add.tween(this.icon)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
            this.game.add.tween(this.icon.scale)
                .to({ x: 1, y: 1 }, 300, Phaser.Easing.Back.Out, true, delay);
        }
        animateDisappearing(delay) {
            this.game.tweens.removeFrom(this.container);
            this.game.add.tween(this.container)
                .to({ y: -450 }, 350, Phaser.Easing.Back.In, true, delay)
                .onStart.add(() => BlockPuzzle.SoundController.instance.playPanelUpMovementSound());
        }
        resetTweens() {
            this.game.tweens.removeFrom(this.container);
            this.game.tweens.removeFrom(this.icon);
            this.game.tweens.removeFrom(this.icon.scale);
        }
    }
    BlockPuzzle.WindowHeading = WindowHeading;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ArrayUtils {
        static uniteArrays(sourceArray, targetArray) {
            return sourceArray.concat(targetArray.filter(targetElem => sourceArray.indexOf(targetElem) === -1));
        }
        static getRandomItem(array, compressionFactor) {
            const randomIndex = Math.floor(array.length * Math.pow(Math.random(), compressionFactor));
            return array[randomIndex];
        }
    }
    BlockPuzzle.ArrayUtils = ArrayUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class BitmapTextFactory {
        static getLetter(textKey, atlasKey, letterKey, letterFrame) {
            let spriteName = null;
            switch (letterKey) {
                case '0':
                    spriteName = 'text' + textKey + '_' + '0' + '000' + letterFrame;
                    break;
                case '1':
                    spriteName = 'text' + textKey + '_' + '1' + '000' + letterFrame;
                    break;
                case '2':
                    spriteName = 'text' + textKey + '_' + '2' + '000' + letterFrame;
                    break;
                case '3':
                    spriteName = 'text' + textKey + '_' + '3' + '000' + letterFrame;
                    break;
                case '4':
                    spriteName = 'text' + textKey + '_' + '4' + '000' + letterFrame;
                    break;
                case '5':
                    spriteName = 'text' + textKey + '_' + '5' + '000' + letterFrame;
                    break;
                case '6':
                    spriteName = 'text' + textKey + '_' + '6' + '000' + letterFrame;
                    break;
                case '7':
                    spriteName = 'text' + textKey + '_' + '7' + '000' + letterFrame;
                    break;
                case '8':
                    spriteName = 'text' + textKey + '_' + '8' + '000' + letterFrame;
                    break;
                case '9':
                    spriteName = 'text' + textKey + '_' + '9' + '000' + letterFrame;
                    break;
                case '.':
                    spriteName = 'text' + textKey + '_' + 'point' + '000' + letterFrame;
                    break;
                case '+':
                    spriteName = 'text' + textKey + '_' + 'plus' + '000' + letterFrame;
                    break;
                case '*':
                    spriteName = 'text' + textKey + '_' + 'multiply' + '000' + letterFrame;
                    break;
                case '=':
                    spriteName = 'text' + textKey + '_' + 'equals' + '000' + letterFrame;
                    break;
                case '%':
                    spriteName = 'text' + textKey + '_' + 'percent' + '000' + letterFrame;
                    break;
                case 'a':
                    spriteName = 'text' + textKey + '_' + 'a' + '000' + letterFrame;
                    break;
                case 'b':
                    spriteName = 'text' + textKey + '_' + 'b' + '000' + letterFrame;
                    break;
                case 'c':
                    spriteName = 'text' + textKey + '_' + 'c' + '000' + letterFrame;
                    break;
                case 'd':
                    spriteName = 'text' + textKey + '_' + 'd' + '000' + letterFrame;
                    break;
                case 'e':
                    spriteName = 'text' + textKey + '_' + 'e' + '000' + letterFrame;
                    break;
                case 'f':
                    spriteName = 'text' + textKey + '_' + 'f' + '000' + letterFrame;
                    break;
                case 'g':
                    spriteName = 'text' + textKey + '_' + 'g' + '000' + letterFrame;
                    break;
                case 'h':
                    spriteName = 'text' + textKey + '_' + 'h' + '000' + letterFrame;
                    break;
                case 'i':
                    spriteName = 'text' + textKey + '_' + 'i' + '000' + letterFrame;
                    break;
                case 'j':
                    spriteName = 'text' + textKey + '_' + 'j' + '000' + letterFrame;
                    break;
                case 'k':
                    spriteName = 'text' + textKey + '_' + 'k' + '000' + letterFrame;
                    break;
                case 'l':
                    spriteName = 'text' + textKey + '_' + 'l' + '000' + letterFrame;
                    break;
                case 'm':
                    spriteName = 'text' + textKey + '_' + 'm' + '000' + letterFrame;
                    break;
                case 'n':
                    spriteName = 'text' + textKey + '_' + 'n' + '000' + letterFrame;
                    break;
                case 'o':
                    spriteName = 'text' + textKey + '_' + 'o' + '000' + letterFrame;
                    break;
                case 'p':
                    spriteName = 'text' + textKey + '_' + 'p' + '000' + letterFrame;
                    break;
                case 'q':
                    spriteName = 'text' + textKey + '_' + 'q' + '000' + letterFrame;
                    break;
                case 'r':
                    spriteName = 'text' + textKey + '_' + 'r' + '000' + letterFrame;
                    break;
                case 's':
                    spriteName = 'text' + textKey + '_' + 's' + '000' + letterFrame;
                    break;
                case 't':
                    spriteName = 'text' + textKey + '_' + 't' + '000' + letterFrame;
                    break;
                case 'u':
                    spriteName = 'text' + textKey + '_' + 'u' + '000' + letterFrame;
                    break;
                case 'v':
                    spriteName = 'text' + textKey + '_' + 'v' + '000' + letterFrame;
                    break;
                case 'w':
                    spriteName = 'text' + textKey + '_' + 'w' + '000' + letterFrame;
                    break;
                case 'x':
                    spriteName = 'text' + textKey + '_' + 'x' + '000' + letterFrame;
                    break;
                case 'y':
                    spriteName = 'text' + textKey + '_' + 'y' + '000' + letterFrame;
                    break;
                case 'z':
                    spriteName = 'text' + textKey + '_' + 'z' + '000' + letterFrame;
                    break;
                case '/':
                    spriteName = 'text' + textKey + '_' + 'slash' + '000' + letterFrame;
                    break;
                case ' ':
                    spriteName = 'text' + textKey + '_' + 'z' + '000' + letterFrame;
                    break;
                case '_':
                    spriteName = 'text' + textKey + '_' + 'point' + '000' + letterFrame;
                    break;
                case '?':
                    spriteName = 'text' + textKey + '_' + 'question' + '000' + letterFrame;
                    break;
            }
            if (!spriteName) {
                return null;
            }
            let sprite = new Phaser.Sprite(BlockPuzzle.App.instance, 0, 0, atlasKey, spriteName);
            sprite.anchor.setTo(0, 0);
            sprite.alpha = letterKey === ' ' || letterKey == '_' ? 0 : 1;
            sprite.scale.x = letterKey === '_' ? 0.5 : 1;
            return sprite;
        }
    }
    BlockPuzzle.BitmapTextFactory = BitmapTextFactory;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ButtonUtils {
        static createButton(atlasName, spriteName, x, y, callback, callbackContext) {
            let button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0001', spriteName + '0000', spriteName + '0002', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }
        static createOneFrameButton(atlasName, spriteName, x, y, callback, callbackContext) {
            let button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = true;
            return button;
        }
        static createSimpleButton(atlasName, spriteName, x, y, startScale, callback, callbackContext, playClickSound = true) {
            let button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
            button.anchor.setTo(0.5, 0.5);
            button.scale.set(startScale);
            button.input.pixelPerfectClick = true;
            button.input.pixelPerfectAlpha = 1;
            button.input.useHandCursor = false;
            button["overTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: startScale * 1.05, y: startScale * 1.05 }, 100);
            button["outTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: startScale, y: startScale }, 100);
            button["downTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: startScale * 0.95, y: startScale * 0.95 }, 50).to({ x: startScale, y: startScale }, 50);
            button.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
            button.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
            button.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);
            if (playClickSound) {
                button.events.onInputDown.add(() => BlockPuzzle.SoundController.instance.playClickSound(), 0);
            }
            button["setScale"] = function (value) {
                button.scale.set(value);
                button["overTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: value * 1.05, y: value * 1.05 }, 100);
                button["outTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: value, y: value }, 100);
                button["downTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({ x: value * 0.95, y: value * 0.95 }, 50).to({ x: value, y: value }, 50);
            };
            return button;
        }
        static mouseOverHandler(caller) {
            caller["overTween"].start();
        }
        static mouseOutHandler(caller) {
            caller["outTween"].start();
        }
        static mouseDownHandler(caller) {
            caller["downTween"].start();
        }
    }
    BlockPuzzle.ButtonUtils = ButtonUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class ColorUtils {
        static tweenTint(spriteToTween, startColor, endColor, duration) {
            let colorBlend = { step: 0 };
            BlockPuzzle.App.instance.add.tween(colorBlend).to({ step: 100 }, duration, Phaser.Easing.Linear.None, true)
                .onUpdateCallback(() => {
                spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
            })
                .onComplete.add(() => spriteToTween.tint = endColor);
        }
        ;
        static bounceTint(spriteToTween, startColor, endColor, duration) {
            let colorBlend = { step: 10 };
            BlockPuzzle.App.instance.add.tween(colorBlend).to({ step: 100 }, duration, Phaser.Easing.Bounce.Out, true)
                .onUpdateCallback(() => {
                spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
            })
                .onComplete.add(() => spriteToTween.tint = endColor);
        }
        ;
    }
    BlockPuzzle.ColorUtils = ColorUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="../Settings.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class LocalStorageController {
        constructor() {
            this.isLocalStorageSupported = false;
            this.data = null;
            this.currentLocalStorage = null;
            this.currentLocalStorage = BlockPuzzle.Settings.ENABLE_API ? window["famobi"].localStorage : window.localStorage;
            this.data = {
                "maxScore": 0,
                "numStars": 0,
                "bombBought": false,
                "lightningBought": false,
                "achievements": null,
                "tutorialCompleted": false,
                "sfxVolume": 0.5,
                "musicVolume": 0.5
            };
        }
        static get instance() {
            return LocalStorageController._instance ? LocalStorageController._instance
                : LocalStorageController._instance = new LocalStorageController();
        }
        getMaxScores() {
            return this.data["maxScore"];
        }
        getNumStars() {
            return this.data["numStars"];
        }
        getSFXVolume() {
            return this.data["sfxVolume"];
        }
        getMusicVolume() {
            return this.data["musicVolume"];
        }
        isBombBought() {
            return this.data["bombBought"];
        }
        isLightningBought() {
            return this.data["lightningBought"];
        }
        isTutorialCompleted() {
            return this.data["tutorialCompleted"];
        }
        getAchievementsStates() {
            return this.data["achievements"] || [];
        }
        save() {
            this.data["maxScore"] = BlockPuzzle.ScoreManager.instance.getMaxScores();
            this.data["numStars"] = BlockPuzzle.StarsManager.instance.getStarsAmount();
            this.data["achievements"] = BlockPuzzle.AchievementsManager.instance.getAchievementsStates();
            this.data["bombBought"] = BlockPuzzle.PowerupManager.instance.isBought(BlockPuzzle.PowerupType.BOMB);
            this.data["lightningBought"] = BlockPuzzle.PowerupManager.instance.isBought(BlockPuzzle.PowerupType.LIGHTNING);
            this.data["tutorialCompleted"] = BlockPuzzle.Settings.TUTORIAL_COMPLETED;
            this.data["sfxVolume"] = BlockPuzzle.SoundController.instance.getSFXVolume();
            this.data["musicVolume"] = BlockPuzzle.SoundController.instance.getMusicVolume();
            if (this.isLocalStorageSupported) {
                this.currentLocalStorage.setItem(LocalStorageController.STORAGE_NAME, JSON.stringify(this.data));
            }
        }
        checkLocalStorageSupported() {
            try {
                this.isLocalStorageSupported = "localStorage" in window && window["localStorage"] !== null;
            }
            catch (e) {
                this.isLocalStorageSupported = false;
            }
        }
        loadSave() {
            this.checkLocalStorageSupported();
            if (this.isLocalStorageSupported) {
                if (this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME)) {
                    this.data = JSON.parse(this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME));
                }
                else {
                    this.currentLocalStorage.setItem(LocalStorageController.STORAGE_NAME, JSON.stringify(this.data));
                }
            }
            this.finalizeLoading();
        }
        finalizeLoading() {
            BlockPuzzle.SoundController.instance.setSFXVolume(this.getSFXVolume());
            BlockPuzzle.SoundController.instance.setMusicVolume(this.getMusicVolume());
            BlockPuzzle.Settings.TUTORIAL_COMPLETED = LocalStorageController.instance.isTutorialCompleted();
            BlockPuzzle.ScoreManager.instance.setMaxScores(LocalStorageController.instance.getMaxScores());
            BlockPuzzle.StarsManager.instance.setStarsAmount(LocalStorageController.instance.getNumStars(), false);
            BlockPuzzle.AchievementsManager.instance.loadAchievementsState(LocalStorageController.instance.getAchievementsStates());
            BlockPuzzle.PowerupManager.instance.setInitialState(BlockPuzzle.PowerupType.BOMB, LocalStorageController.instance.isBombBought());
            BlockPuzzle.PowerupManager.instance.setInitialState(BlockPuzzle.PowerupType.LIGHTNING, LocalStorageController.instance.isLightningBought());
        }
    }
    LocalStorageController.STORAGE_NAME = BlockPuzzle.Settings.LOCAL_STORAGE_KEY;
    BlockPuzzle.LocalStorageController = LocalStorageController;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class LocalizationManager {
        static init(jsonFile) {
            LocalizationManager.texts = jsonFile;
        }
        static getText(key) {
            return LocalizationManager.texts[key] ? LocalizationManager.texts[key] : "NO_TEXT";
        }
    }
    BlockPuzzle.LocalizationManager = LocalizationManager;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class TextUtils {
        static getText(text, x, y, fontSize, color, fontFamily = BlockPuzzle.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(0.5, 0.5);
            return textField;
        }
        static getBitmapText(text, x, y, fontSize, color = 0xFFFFFF, family = BlockPuzzle.Settings.DEFAULT_FONT_FAMILY) {
            let textField = new Phaser.BitmapText(BlockPuzzle.App.instance, x, y, family, text, fontSize, "center");
            textField.anchor.setTo(0.5, 0.5);
            textField.tint = color;
            return textField;
        }
        static getShadowText(text, x, y, fontSize, color, shadowColor = "#000000", shadowX = 0, shadowY = 2, anchorX = 0.5, anchorY = 0.5, fontFamily = BlockPuzzle.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                align: "center"
            });
            textField.anchor.setTo(anchorX, anchorY);
            textField.setShadow(shadowX, shadowY, shadowColor, 0);
            return textField;
        }
        static getStyledText(text, x, y, fontSize, color, strokeColor, strokeThinkness = 4, fontFamily = BlockPuzzle.Settings.DEFAULT_FONT_FAMILY, fontWidth = null) {
            let textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
                font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
                fill: color,
                stroke: strokeColor,
                strokeThickness: strokeThinkness,
                align: "center"
            });
            textField.setShadow(0, 2, strokeColor, 0);
            textField.anchor.set(0.5, 0.5);
            return textField;
        }
        static convertMSToHumanTime(milliseconds) {
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let restSeconds = seconds - minutes * 60;
            return (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }
        static convertMSToMSS(milliseconds) {
            let seconds = Math.floor(milliseconds / 1000);
            let minutes = Math.floor(seconds / 60);
            let restSeconds = seconds - minutes * 60;
            return minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }
        static normalizeTime(seconds) {
            let restSeconds = seconds;
            let hours = Math.floor(restSeconds / 3600);
            restSeconds %= 3600;
            let minutes = Math.floor(restSeconds / 60);
            restSeconds %= 60;
            return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
        }
    }
    BlockPuzzle.TextUtils = TextUtils;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class AbstractWindow extends Phaser.Group {
        constructor(windowManager, backgroundAlpha = BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA) {
            super(BlockPuzzle.App.instance, null);
            this.backgroundAlpha = BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA;
            this.windowManager = windowManager;
            this.backgroundAlpha = backgroundAlpha;
            this.visible = false;
            this.buildBackground();
        }
        buildBackground() {
            this.background = this.add(this.game.make.sprite(-50, -50, BlockPuzzle.Settings.GAME_ATLAS, 'blackSquare0000'));
            this.background.anchor.set(0.5);
            this.background.width = this.game.world.width + 100;
            this.background.height = this.game.world.height + 100;
            this.background.alpha = this.backgroundAlpha;
            this.background.inputEnabled = true;
            this.inputEnableChildren = true;
        }
        resize() {
            this.position.set(0, 0);
            this.background.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.centerY);
            this.background.width = this.windowManager.windowBounds.width + 100;
            this.background.height = this.windowManager.windowBounds.height + 100;
            this.resizeContent();
        }
        show() {
            this.visible = true;
            this.resize();
        }
        hide() {
            this.visible = false;
        }
        lockUpButtons(...args) {
            for (let i = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = false;
            }
        }
        unlockButtons(...args) {
            for (let i = 0; i < args.length; i++) {
                args[i]["inputEnabled"] = true;
            }
        }
        destroy() {
            super.destroy();
            this.background = null;
        }
    }
    BlockPuzzle.AbstractWindow = AbstractWindow;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="AbstractWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class DefaultWindow extends BlockPuzzle.AbstractWindow {
        constructor(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha) {
            super(windowManager, backgroundAlpha);
            this.headingBackplateType = headingBackplateType;
            this.headingIconFrameName = headingIconFrameName;
            /* create basic elements */
            this.buildWindowBase();
            this.buildAdditionalElements();
            this.buildContent();
        }
        buildWindowBase() {
            this.contentContainer = this.add(this.game.make.group());
            this.windowHeading = this.contentContainer.add(new BlockPuzzle.WindowHeading(this.headingIconFrameName, this.headingBackplateType));
        }
        buildAdditionalElements() {
        }
        resizeContent() {
            this.contentContainer.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.top);
            this.contentContainer.scale.set(Math.min(1, this.windowManager.windowBounds.height / BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT));
            this.windowHeading.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.001);
        }
        show() {
            super.show();
            this.resetTweens();
            this.background.alpha = 0;
            this.game.add.tween(this.background)
                .to({ alpha: this.backgroundAlpha }, 300, Phaser.Easing.Circular.Out, true, 0);
            this.windowHeading.animateAppearing(150);
            this.animateAppearing(200);
        }
        resetTweens() {
            this.windowHeading.resetTweens();
        }
        hide() {
            this.resetTweens();
            super.hide();
        }
    }
    BlockPuzzle.DefaultWindow = DefaultWindow;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="DefaultWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class CloseableWindow extends BlockPuzzle.DefaultWindow {
        constructor(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha) {
            super(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha);
        }
        buildAdditionalElements() {
            this.buttonClose = this.add(new BlockPuzzle.ButtonCloseWindow(this, this.closeClicked, this));
        }
        resizeContent() {
            super.resizeContent();
            this.buttonClose.resize(-75, 75);
        }
        show() {
            super.show();
            this.buttonClose.alpha = 1;
            this.buttonClose.scale.set(0);
            this.game.add.tween(this.buttonClose.scale)
                .to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, 300);
        }
        animateDisappearing(delay, onClosedCallback = null) {
            this.windowHeading.animateDisappearing(delay);
            this.game.tweens.removeFrom(this.buttonClose);
            this.game.add.tween(this.buttonClose)
                .to({ y: '-100', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
            this.game.tweens.removeFrom(this.background);
            this.game.add.tween(this.background)
                .to({ alpha: 0 }, 300, Phaser.Easing.Circular.In, true, delay + 100)
                .onComplete.add(() => {
                if (onClosedCallback)
                    onClosedCallback();
                this.hide();
            });
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.buttonClose, false);
            this.game.tweens.removeFrom(this.buttonClose.scale, false);
        }
        closeClicked() {
            this.onCloseClicked();
            this.animateDisappearing(0);
        }
    }
    BlockPuzzle.CloseableWindow = CloseableWindow;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="abstract/CloseableWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowAchievements extends BlockPuzzle.CloseableWindow {
        constructor(windowManager) {
            super(windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingAchievements', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA);
            BlockPuzzle.StarsManager.instance.onStarAdded.add(this.handleStarAdded, this);
        }
        buildContent() {
            this.itemsContainer = this.contentContainer.add(this.game.make.group());
            this.achievementPanels = new Map();
            Object.keys(BlockPuzzle.AchievementType).filter(value => !isNaN(+value)).map(value => +value).forEach(key => {
                this.achievementPanels.set(key, this.itemsContainer.add(new BlockPuzzle.AchievementPanel(this, key, ((key - 1) % 3 - 1) * 185, (Math.floor((key - 1) / 3) - 1) * 200)));
            });
        }
        resizeContent() {
            super.resizeContent();
            this.itemsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55 + 90);
        }
        updateAchievementPanels() {
            this.achievementPanels.forEach(panel => panel.updateView());
        }
        show() {
            super.show();
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_OTHER, "ACHIEVEMENTS");
            }
            this.updateAchievementPanels();
        }
        animateAppearing(delay) {
            this.achievementPanels.forEach((panel, key) => {
                panel.alpha = 1;
                this.game.add.tween(panel)
                    .from({ alpha: 0, y: '-50' }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);
                panel.scale.set(0.8);
                this.game.add.tween(panel.scale)
                    .to({ x: 1, y: 1 }, 250, Phaser.Easing.Back.Out, true, delay + key * 25);
            });
        }
        animateDisappearing(delay, onClosedCallback) {
            super.animateDisappearing(delay, onClosedCallback);
            this.achievementPanels.forEach((panel, key) => {
                this.game.add.tween(panel)
                    .to({ alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);
                this.game.add.tween(panel.scale)
                    .to({ x: 0.55, y: 0.55 }, 250, Phaser.Easing.Back.In, true, delay + key * 25);
            });
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.itemsContainer, false);
            this.game.tweens.removeFrom(this.itemsContainer.scale, false);
        }
        /**
         * INPUT HANDLERS
         */
        handleStarAdded() {
            if (this.achievementPanels) {
                const totalStarsAchievement = this.achievementPanels.get(BlockPuzzle.AchievementType.TOTAL_STARS);
                if (totalStarsAchievement) {
                    totalStarsAchievement.updateView();
                }
            }
        }
        onCloseClicked() {
        }
        continueClicked() {
            this.animateDisappearing(0, () => { });
        }
    }
    BlockPuzzle.WindowAchievements = WindowAchievements;
})(BlockPuzzle || (BlockPuzzle = {}));
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowManager {
        constructor() {
            this.containerWidth = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
            this.containerHeight = BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT;
            this.isInitialized = false;
        }
        static get instance() {
            return WindowManager._instance ? WindowManager._instance : WindowManager._instance = new WindowManager();
        }
        init() {
            this.container = BlockPuzzle.App.instance.stage.add(BlockPuzzle.App.instance.make.group());
            this.settings = this.container.add(new BlockPuzzle.WindowSettings(this));
            this.results = this.container.add(new BlockPuzzle.WindowResults(this));
            this.revive = this.container.add(new BlockPuzzle.WindowRevive(this));
            this.shop = this.container.add(new BlockPuzzle.WindowShop(this));
            this.achievements = this.container.add(new BlockPuzzle.WindowAchievements(this));
            this.isInitialized = true;
            this.resize();
        }
        resize() {
            if (this.isInitialized) {
                this.container.scale.set(BlockPuzzle.CustomScaleManager.SCALE_X, BlockPuzzle.CustomScaleManager.SCALE_Y);
                this.container.position.set(BlockPuzzle.CustomScaleManager.WIDTH / 2 - this.containerWidth * BlockPuzzle.CustomScaleManager.SCALE_X / 2, BlockPuzzle.CustomScaleManager.HEIGHT / 2 - this.containerHeight * BlockPuzzle.CustomScaleManager.SCALE_Y / 2);
                this.windowBounds = this.windowBounds || new BlockPuzzle.WindowBounds();
                this.windowBounds.set(-(BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2, (BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
                this.settings.resize();
                this.results.resize();
                this.revive.resize();
                this.shop.resize();
                this.achievements.resize();
            }
        }
        hasOpenedWindows() {
            return this.settings.visible || this.shop.visible || this.achievements.visible || this.revive.visible || this.results.visible;
        }
        showSettings() {
            this.settings.show();
        }
        showResults() {
            this.results.show();
        }
        showRevive() {
            this.revive.show();
        }
        showShop(powerupType) {
            this.shop.setPowerupType(powerupType);
            this.shop.show();
        }
        showAchievements() {
            this.achievements.show();
        }
        hideAll() {
            this.settings.hide();
            this.results.hide();
            this.revive.hide();
            this.shop.hide();
            this.achievements.hide();
        }
    }
    WindowManager._instance = null;
    BlockPuzzle.WindowManager = WindowManager;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="abstract/CloseableWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowResults extends BlockPuzzle.DefaultWindow {
        constructor(windowManager) {
            super(windowManager, BlockPuzzle.WindowHeadingBackplateType.GOLD, 'iconHeadingVictory', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA);
        }
        buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.scoresPanel = this.controlsContainer.add(new BlockPuzzle.ResultsScoresPanel(this));
            this.starsPanel = this.controlsContainer.add(new BlockPuzzle.ResultsStarsPanel(this));
            this.doubleStarsButton = this.controlsContainer.add(new BlockPuzzle.DoubleStarsButton(this));
            this.recordEffect = this.controlsContainer.add(new BlockPuzzle.NewRecordEffect(this));
            this.scoresPanel.position.set(-80, -70);
            this.starsPanel.position.set(-80, 70);
            this.doubleStarsButton.position.set(200, 160);
            this.recordEffect.position.set(205, -63);
            this.buttonRestart = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1.35, this.restartClicked, this));
        }
        showButtons() {
            this.buttonRestart.visible = true;
            this.buttonRestart.alpha = 0;
            this.game.add.tween(this.buttonRestart)
                .to({ alpha: 1 }, 350, Phaser.Easing.Linear.None, true, 1000);
        }
        animateAppearing() {
            const currentScores = BlockPuzzle.ScoreManager.instance.getCurrentScores();
            const lastRoundStars = BlockPuzzle.StarsManager.instance.getLastRoundStars();
            const scoresTweenDuration = currentScores > 0 ? Phaser.Math.clamp(Math.pow(currentScores, 0.9), 450, 1500) : 0;
            const starsTweenDuration = lastRoundStars > 0 ? Phaser.Math.clamp(Math.pow(lastRoundStars, 0.85) * 75, 50, 1000) : 0;
            const bestScoreReached = BlockPuzzle.ScoreManager.instance.updateMaxScores(BlockPuzzle.ScoreManager.instance.getCurrentScores());
            /* API & ANALYTICS */
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_GAMERESULT);
                setTimeout(() => {
                    Promise.all([
                        window["famobi_analytics"].trackEvent("EVENT_LEVELFAIL", {
                            levelName: '',
                            reason: 'dead'
                        }),
                        window["famobi_analytics"].trackEvent("EVENT_TOTALSCORE", {
                            totalScore: currentScores
                        })
                    ]).then(() => this.showButtons(), () => this.showButtons());
                }, 500);
            }
            else {
                this.showButtons();
            }
            /* END ANALYTICS */
            this.buttonRestart.visible = false;
            this.scoresPanel.showPanel(200, 800, scoresTweenDuration, bestScoreReached);
            this.starsPanel.showPanel(400, 800 + 250, starsTweenDuration);
            if (BlockPuzzle.APIUtils.instance.hasRewardedVideo()) {
                this.doubleStarsButton.visible = true;
                this.doubleStarsButton.show(1400, BlockPuzzle.Settings.RESULTS_DOUBLE_STARS_REWARD);
            }
            else {
                this.doubleStarsButton.visible = false;
            }
            if (bestScoreReached) {
                this.recordEffect.show(800 + scoresTweenDuration + starsTweenDuration);
            }
        }
        addBonusStars(amount) {
            BlockPuzzle.StarsManager.instance.addBonusStars(amount);
            this.starsPanel.tweenTexts(BlockPuzzle.StarsManager.instance.getStarsAmount() - amount, BlockPuzzle.StarsManager.instance.getStarsAmount(), BlockPuzzle.StarsManager.instance.getStarsAmount() - amount, BlockPuzzle.StarsManager.instance.getStarsAmount(), '', '', 50, Phaser.Math.clamp(amount * 75, 200, 1200));
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.buttonRestart);
            this.game.tweens.removeFrom(this.buttonRestart.scale);
            this.game.tweens.removeFrom(this.controlsContainer.scale);
            this.recordEffect.visible = false;
        }
        resizeContent() {
            super.resizeContent();
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.5);
            this.buttonRestart.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
        }
        hide() {
            BlockPuzzle.SoundController.instance.stopCountingSound();
            super.hide();
        }
        restartClicked() {
            BlockPuzzle.SoundController.instance.stopCountingSound();
            BlockPuzzle.TransitionScreen.instance.changeState('Level');
        }
        ;
    }
    BlockPuzzle.WindowResults = WindowResults;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="abstract/CloseableWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowRevive extends BlockPuzzle.CloseableWindow {
        constructor(windowManager) {
            super(windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingRevive', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA);
            this.isActive = false;
        }
        buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.reviveCountdown = this.controlsContainer.add(new BlockPuzzle.ReviveCountdown(this));
            this.reviveCountdown.position.set(0, 0);
            this.buttonWatchVideo = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRevive', 0, 0, 1.35, this.watchVideoClicked, this));
        }
        resizeContent() {
            super.resizeContent();
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55);
            this.buttonWatchVideo.position.set(10, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
        }
        show() {
            super.show();
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_BONUS);
            }
            this.reviveCountdown.startCountdown();
        }
        hide() {
            this.reviveCountdown.resetCountdown();
            super.hide();
        }
        onCloseClicked() {
            this.reviveFailed(false);
        }
        watchVideoClicked() {
            BlockPuzzle.APIUtils.instance.showRewardedVideo(() => this.reviveSucceed());
        }
        reviveSucceed() {
            if (!this.isActive) {
                return;
            }
            this.animateDisappearing(0, () => {
                if (this.game.state.getCurrentState() instanceof BlockPuzzle.Level) {
                    this.game.state.getCurrentState().eventManager.onReviveApplied.dispatch();
                }
            });
        }
        reviveFailed(disappear) {
            if (!this.isActive) {
                return;
            }
            if (disappear) {
                this.animateDisappearing(30, null);
            }
            if (this.game.state.getCurrentState() instanceof BlockPuzzle.Level) {
                this.game.state.getCurrentState().eventManager.onReviveFailed.dispatch();
            }
        }
        animateAppearing(delay) {
            this.isActive = true;
            this.reviveCountdown.alpha = 0;
            this.game.add.tween(this.reviveCountdown)
                .to({ alpha: 1 }, 350, Phaser.Easing.Linear.None, true, delay + 130);
            this.reviveCountdown.scale.set(0.6);
            this.game.add.tween(this.reviveCountdown.scale)
                .to({ x: 1, y: 1 }, 350, Phaser.Easing.Back.Out, true, delay + 130);
            this.buttonWatchVideo.inputEnabled = true;
            this.game.tweens.removeFrom(this.buttonWatchVideo);
            this.buttonWatchVideo.alpha = 1;
            this.game.add.tween(this.buttonWatchVideo)
                .from({ y: '70', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 200);
        }
        animateDisappearing(delay, onClosedCallback) {
            this.isActive = false;
            super.animateDisappearing(delay, onClosedCallback);
            this.reviveCountdown.animateDisappearing(delay);
            this.buttonWatchVideo.inputEnabled = false;
            this.game.tweens.removeFrom(this.buttonWatchVideo);
            this.game.add.tween(this.buttonWatchVideo)
                .to({ y: '100', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.controlsContainer, false);
            this.game.tweens.removeFrom(this.controlsContainer.scale, false);
            this.game.tweens.removeFrom(this.reviveCountdown, false);
            this.game.tweens.removeFrom(this.reviveCountdown.scale, false);
            this.game.tweens.removeFrom(this.buttonWatchVideo, false);
        }
    }
    BlockPuzzle.WindowRevive = WindowRevive;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="abstract/CloseableWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowSettings extends BlockPuzzle.CloseableWindow {
        constructor(windowManager) {
            super(windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingSettings', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA);
        }
        buildContent() {
            this.controlsContainer = this.contentContainer.add(this.game.make.group());
            this.sfxControl = this.controlsContainer.add(new BlockPuzzle.SFXControlScrollbar());
            this.musicControl = this.controlsContainer.add(new BlockPuzzle.MusicControlScrollbar());
            this.sfxControl.position.set(-25, -70);
            this.musicControl.position.set(-25, 70);
            this.buttonRestart = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1.12, this.restartClicked, this));
            this.publisherLogo = this.contentContainer.add(new BlockPuzzle.PublisherLogo(0, 0));
        }
        resizeContent() {
            super.resizeContent();
            this.sfxControl.position.set(-25, -70);
            this.musicControl.position.set(-25, 70);
            this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.53);
            this.buttonRestart.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.76);
            this.publisherLogo.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.92);
        }
        onCloseClicked() {
            BlockPuzzle.LocalStorageController.instance.save();
        }
        tutorialClicked() {
            this.hide();
            if (this.game.state.getCurrentState() instanceof BlockPuzzle.Level) {
                this.game.state.getCurrentState().tutorialManager.restartTutorial();
            }
        }
        restartClicked() {
            BlockPuzzle.TransitionScreen.instance.changeState('Level');
        }
        animateAppearing() {
            this.sfxControl.initValue();
            this.musicControl.initValue();
            this.sfxControl.alpha = 0;
            this.game.add.tween(this.sfxControl)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 200);
            this.sfxControl.scale.set(0.6);
            this.game.add.tween(this.sfxControl.scale)
                .to({ x: 1, y: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 200);
            this.musicControl.alpha = 0;
            this.game.add.tween(this.musicControl)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 250);
            this.musicControl.scale.set(0.6);
            this.game.add.tween(this.musicControl.scale)
                .to({ x: 1, y: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 250);
            this.buttonRestart.alpha = 0;
            this.game.add.tween(this.buttonRestart)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
            this.buttonRestart.scale.set(0.6);
            this.game.add.tween(this.buttonRestart.scale)
                .to({ x: 1.12, y: 1.12 }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
            this.publisherLogo.alpha = 0;
            this.game.add.tween(this.publisherLogo)
                .to({ alpha: 1 }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
            this.publisherLogo.scale.set(0.28);
            this.game.add.tween(this.publisherLogo.scale)
                .to({ x: 0.45, y: 0.45 }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
        }
        animateDisappearing(delay, onClosedCallback) {
            super.animateDisappearing(delay, onClosedCallback);
            this.game.add.tween(this.sfxControl)
                .to({ alpha: 0, x: '-150' }, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);
            this.game.add.tween(this.musicControl)
                .to({ alpha: 0, x: '+150' }, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);
            this.game.tweens.removeFrom(this.buttonRestart);
            this.game.add.tween(this.buttonRestart)
                .to({ y: '100', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay + 100);
            this.game.tweens.removeFrom(this.publisherLogo);
            this.game.add.tween(this.publisherLogo)
                .to({ y: '100', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay + 50);
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.controlsContainer, false);
            this.game.tweens.removeFrom(this.controlsContainer.scale, false);
            this.game.tweens.removeFrom(this.buttonRestart, false);
            this.game.tweens.removeFrom(this.sfxControl, false);
            this.game.tweens.removeFrom(this.musicControl, false);
            this.game.tweens.removeFrom(this.publisherLogo, false);
        }
    }
    BlockPuzzle.WindowSettings = WindowSettings;
})(BlockPuzzle || (BlockPuzzle = {}));
///<reference path="abstract/CloseableWindow.ts"/>
var BlockPuzzle;
(function (BlockPuzzle) {
    class WindowShop extends BlockPuzzle.CloseableWindow {
        constructor(windowManager) {
            super(windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingShop', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA);
        }
        buildContent() {
            this.itemsContainer = this.contentContainer.add(this.game.make.group());
            this.itemsMap = new Map();
            this.itemsMap.set(BlockPuzzle.PowerupType.BOMB, this.itemsContainer.add(new BlockPuzzle.ShopItem(this, BlockPuzzle.PowerupType.BOMB)));
            this.itemsMap.set(BlockPuzzle.PowerupType.LIGHTNING, this.itemsContainer.add(new BlockPuzzle.ShopItem(this, BlockPuzzle.PowerupType.LIGHTNING)));
            this.buttonContinue = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonContinue', 0, 0, 1, this.continueClicked, this));
            this.starsCounter = this.contentContainer.add(new BlockPuzzle.ShopStarsCounter(this));
            this.windowHeading.visible = false;
            this.buttonContinue.visible = false;
        }
        resizeContent() {
            super.resizeContent();
            this.itemsContainer.position.set(-22, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.54);
            this.buttonContinue.position.set(-5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
            this.starsCounter.position.set(-28 * BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.2);
            this.starsCounter.scale.set(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR);
            if (this.currentItem) {
                this.currentItem.scale.set(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR);
            }
        }
        setPowerupType(powerupType) {
            this.itemsMap.forEach(item => item.visible = item.powerupType == powerupType);
            this.currentItem = this.itemsMap.get(powerupType);
        }
        show() {
            super.show();
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SHOP);
            }
            this.starsCounter.visible = true;
            this.updateData();
        }
        updateData() {
            this.starsCounter.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
            this.currentItem.show();
        }
        powerupBought() {
            this.starsCounter.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
            this.closeClicked();
        }
        animateAppearing(delay) {
            this.currentItem.alpha = 0;
            this.game.add.tween(this.currentItem)
                .to({ alpha: 1 }, 200, Phaser.Easing.Sinusoidal.Out, true, 200);
            this.currentItem.scale.set(0.6);
            this.game.add.tween(this.currentItem.scale)
                .to({
                x: BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR,
                y: BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR
            }, 240, Phaser.Easing.Back.Out, true, 200);
            this.game.tweens.removeFrom(this.starsCounter);
            this.starsCounter.alpha = 1;
            this.game.add.tween(this.starsCounter)
                .from({ y: '-60', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay);
            this.buttonContinue.inputEnabled = true;
            this.game.tweens.removeFrom(this.buttonContinue);
            this.buttonContinue.alpha = 1;
            this.game.add.tween(this.buttonContinue)
                .from({ y: '70', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 50);
        }
        animateDisappearing(delay, onClosedCallback) {
            super.animateDisappearing(delay, onClosedCallback);
            this.game.add.tween(this.currentItem)
                .to({ alpha: 0 }, 160, Phaser.Easing.Sinusoidal.InOut, true, delay);
            this.game.tweens.removeFrom(this.starsCounter);
            this.game.add.tween(this.starsCounter)
                .to({ y: '-60', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
            this.buttonContinue.inputEnabled = false;
            this.game.tweens.removeFrom(this.buttonContinue);
            this.game.add.tween(this.buttonContinue)
                .to({ y: '100', alpha: 0 }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
            if (BlockPuzzle.Settings.ENABLE_API) {
                window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
            }
        }
        resetTweens() {
            super.resetTweens();
            this.game.tweens.removeFrom(this.itemsContainer, false);
            this.game.tweens.removeFrom(this.itemsContainer.scale, false);
            this.game.tweens.removeFrom(this.buttonContinue, false);
            this.game.tweens.removeFrom(this.starsCounter, false);
            this.game.tweens.removeFrom(this.starsCounter.scale, false);
            if (this.currentItem) {
                this.game.tweens.removeFrom(this.currentItem, false);
                this.game.tweens.removeFrom(this.currentItem.scale, false);
            }
        }
        /**
         * INPUT HANDLERS
         */
        onCloseClicked() {
        }
        continueClicked() {
            this.animateDisappearing(0, () => {
            });
        }
    }
    BlockPuzzle.WindowShop = WindowShop;
})(BlockPuzzle || (BlockPuzzle = {}));
