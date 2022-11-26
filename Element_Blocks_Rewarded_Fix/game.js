"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BlockPuzzle;

(function (BlockPuzzle) {
  var LayoutType;

  (function (LayoutType) {
    LayoutType[LayoutType["PORTRAIT"] = 0] = "PORTRAIT";
    LayoutType[LayoutType["SQUARED"] = 1] = "SQUARED";
    LayoutType[LayoutType["LANDSCAPE"] = 2] = "LANDSCAPE";
  })(LayoutType = BlockPuzzle.LayoutType || (BlockPuzzle.LayoutType = {}));
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="../enum/LayoutType.ts"/>

/**
* Famobi Mute/Unmute Management
* Replaces the Games Mute and Unmute Function for controls with the custom.js
*/

//Executed on Start and on Gamesnacks.subscribe

window.famobi_onMuteRequested = function() {
  //Set Volume to 0
  BlockPuzzle.SoundController.instance.setSFXVolume(0);
  BlockPuzzle.SoundController.instance.setMusicVolume(0);
}

window.famobi_onUnmuteRequested = function() {
  //Set Volume to previous Volume
  BlockPuzzle.SoundController.instance.setSFXVolume(0.5);
  BlockPuzzle.SoundController.instance.setMusicVolume(0.5);
}


var BlockPuzzle;

(function (BlockPuzzle) {
  var CustomScaleManager =
  /*#__PURE__*/
  function () {
    function CustomScaleManager() {
      _classCallCheck(this, CustomScaleManager);
    }

    _createClass(CustomScaleManager, null, [{
      key: "update",
      value: function update(width, height) {
        this.WIDTH = width;
        this.HEIGHT = height;
        var screenRatio = this.getScreenRatio();

        if (screenRatio <= this.PORTRAIT_RATIO) {
          /* fully portrait */
          this.LAYOUT = BlockPuzzle.LayoutType.PORTRAIT;
          this.SCALE_X = this.SCALE_Y = width / this.ORIGINAL_WIDTH;
          this.UPSCALE_FACTOR = 1;
        } else if (screenRatio >= this.LANDSCAPE_RATIO) {
          /* fully landscape */
          this.LAYOUT = BlockPuzzle.LayoutType.LANDSCAPE;
          this.UPSCALE_FACTOR = BlockPuzzle.App.instance.device.desktop ? 1 : Math.pow(screenRatio / this.ORIGINAL_RATIO, 0.35);
          this.SCALE_X = this.SCALE_Y = height / this.ORIGINAL_HEIGHT * this.UPSCALE_FACTOR;
        } else {
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
    }, {
      key: "getLayout",
      value: function getLayout() {
        return this.LAYOUT;
      }
    }, {
      key: "isLandscape",
      value: function isLandscape() {
        return this.getLayout() === BlockPuzzle.LayoutType.LANDSCAPE;
      }
    }, {
      key: "isPortrait",
      value: function isPortrait() {
        return this.getLayout() === BlockPuzzle.LayoutType.PORTRAIT;
      }
    }, {
      key: "isSquared",
      value: function isSquared() {
        return this.getLayout() === BlockPuzzle.LayoutType.SQUARED;
      }
    }, {
      key: "getScaleMode",
      value: function getScaleMode() {
        return BlockPuzzle.Settings.USE_HIGH_RESOLUTION_SCALING ? Phaser.ScaleManager.USER_SCALE : Phaser.ScaleManager.RESIZE;
      }
    }, {
      key: "getPixelRatio",
      value: function getPixelRatio() {
        return BlockPuzzle.App.instance.device.desktop || !BlockPuzzle.Settings.USE_HIGH_RESOLUTION_SCALING ? 1 : Math.min(BlockPuzzle.App.instance.device.pixelRatio, BlockPuzzle.Settings.PIXEL_RATIO_MAX_THRESHOLD);
      }
    }, {
      key: "getScreenRatio",
      value: function getScreenRatio() {
        return this.WIDTH / this.HEIGHT;
      }
    }]);

    return CustomScaleManager;
  }();

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
  var RenderUtils =
  /*#__PURE__*/
  function () {
    function RenderUtils() {
      _classCallCheck(this, RenderUtils);
    }

    _createClass(RenderUtils, null, [{
      key: "detectRenderMode",
      value: function detectRenderMode() {
        var isIE = window.navigator.userAgent.indexOf('MSIE ') > 0 || window.navigator.userAgent.indexOf('Trident/') > 0;
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        var isIPhone = window.navigator.userAgent.indexOf('iPhone ') > -1;
        return isIE || isFirefox || isIPhone ? Phaser.CANVAS : Phaser.AUTO;
      }
    }]);

    return RenderUtils;
  }();

  BlockPuzzle.RenderUtils = RenderUtils;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Settings = function Settings() {
    _classCallCheck(this, Settings);
  }; //SCALING


  Settings.USE_HIGH_RESOLUTION_SCALING = true;
  Settings.PIXEL_RATIO_MAX_THRESHOLD = 3; //FONTS

  Settings.DEFAULT_FONT_FAMILY = 'Kanit'; //WINDOWS

  Settings.WINDOW_BACKGROUND_ALPHA = 0.975;
  Settings.REVIVE_WINDOW_TIMER = 60;
  Settings.RESULTS_WINDOW_TIMER = 85;
  Settings.RESULTS_WINDOW_TIMER_WITHOUT_REVIVE = 110; //ATLASES

  Settings.PRELOADER_ATLAS = 'preloader';
  Settings.GAME_ATLAS = 'assets';
  Settings.ANIMATION_ATLAS = 'animations'; //BOARD

  Settings.BOARD_ROWS = 8;
  Settings.BOARD_COLS = 8;
  Settings.CELL_WIDTH = 75;
  Settings.CELL_HEIGHT = Settings.CELL_WIDTH;
  Settings.FIGURE_VIEW_DRAGGING_DELTA = -160;
  Settings.FIGURE_VIEW_SPACING = 5; //FIGURES

  Settings.DEFAULT_FIGURE_SCALE = 0.4;
  Settings.DRAGGING_FIGURE_SCALE = 0.88;
  Settings.FINAL_FIGURE_SCALE = 1.0;
  Settings.FIGURE_APPEARING_DURATION = 350;
  Settings.FIGURE_APPEARING_DELAY = 120;
  Settings.FIGURE_RETURNING_SPEED = 2000;
  Settings.FIGURE_PICK_UP_TWEEN_DURATION = 70;
  Settings.FIGURE_DISPOSING_TWEEN_DURATION = 250;
  Settings.NOT_APPLICABLE_FIGURE_APLHA = 0.475; //BLOCKS

  Settings.BLOCK_DESTROY_ANIMATION_DELAY = 65;
  Settings.BLOCK_DISAPPEARING_DURATION = 180;
  Settings.PICK_RANDOM_EXPLOSION_STARTING_POINT = true;
  Settings.SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS = true;
  Settings.STAR_SHINING_TWEEN_DURATION = 1400; //ms

  Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION = 750; //ms

  Settings.BLOCK_DEACTIVATION_TWEEN_DURATION = 400;
  Settings.BLOCK_ACTIVATION_TWEEN_DURATION = 250; //DIFFICULTY

  Settings.DIFFICULTY_FACTOR = difficulty_level; //POWERUPS

  Settings.POWERUP_USAGE_COUNTDOWN_WHEN_NO_MOVES_LEFT = 6 * 1000; // milliseconds

  Settings.BOMB_PRICE = bomb_powerup_basic_price;
  Settings.BOMB_PRICE_STEP = bomb_powerup_price_step;
  Settings.LIGHTNING_PRICE = lightning_powerup_basic_price;
  Settings.LIGHTNING_PRICE_STEP = lightning_powerup_price_step;
  Settings.POWERUP_HIGHLIGHTING_ALPHA = 0.3;
  Settings.POWERUP_DRAGGING_DELTA = -100;
  Settings.LIGHTING_DELAY_BETWEEN_STRIKES = 8;
  Settings.LIGHTING_MIN_TARGETS = 3;
  Settings.LIGHTING_MAX_TARGETS = 5; //REVIVE

  Settings.REVIVE_TIMER_DURATION = 10500; //SCORES

  Settings.BASIC_LINE_DESTROYING_REWARD = 10; //SCORES MULTIPLIER

  Settings.MULTIPLIER_MILESTONES = [100, 500, 3000, 14400, 72000, 340000, 1500000, 6000000, 20000000, 100000000]; //FIGURE GENERATOR

  Settings.GENERATE_MAX_FIGURES_PER_ITERATION = 25;
  Settings.GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE = 1;
  Settings.RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR = 1.85;
  Settings.MISTAKE_PROBABILITY_BASIC_STEP = 0.025;
  Settings.MISTAKE_PROBABILITY_STEP_SPEED = 0.005;
  Settings.MISTAKE_MAX_PROBABILITY = 0.1;
  Settings.MISTAKE_IMMUNITY_MIN_MOVES = 5;
  Settings.MISTAKE_IMMUNITY_MAX_MOVES = 10; //STARS GENERATOR

  Settings.SKIP_STARS_GENERATION_FOR_FIRST_X_MOVES = 5;
  Settings.BASIC_STAR_GENERATION_PROBABILITY = 0.02;
  Settings.BASIC_STAR_GENERATION_PROBABILITY_STEP = 0.0065;
  Settings.ADDITIONAL_SECOND_STAR_GENERATION_PROBABILITY = 0.01;
  Settings.ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES = 0.02;
  Settings.MAX_STAR_GENERATING_PROBABILITY = 0.3;
  Settings.STAR_GENERATION_DELAY = 1000;
  Settings.MAX_STARS_ON_BOARD_SIMULTANEOUSLY = 3; //RESULTS REWARD

  Settings.RESULTS_DOUBLE_STARS_REWARD = results_watch_video_reward; //GET STARS BUTTON

  Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = 0;
  Settings.GET_STARS_BUTTON_COOLDOWN = get_stars_button_cooldown; // seconds

  Settings.GET_STARS_BUTTON_ENABLED = get_stars_button_cooldown > 0;
  Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT = get_stars_button_basic_reward; //stars

  Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP = get_stars_button_reward_step; //stars
  //ACHIEVEMENT_INFORMER

  Settings.ACHIEVEMENT_INFORMER_VISIBILITY_DURATION = 5 * 1000; //milliseconds
  //TUTORIAL

  Settings.TUTORIAL_COMPLETED = false; //SETTINGS

  Settings.GAME_VERSION = "3";
  Settings.ENABLE_API = true;
  Settings.RELEASE_BUILD = true;
  Settings.MUSIC_ENABLED_BY_DEFAULT = true;
  Settings.LOCAL_STORAGE_KEY = 'Element_Blocks' + Settings.GAME_VERSION;
  BlockPuzzle.Settings = Settings;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="scale/CustomScaleManager.ts"/>
///<reference path="utils/RenderUtils.ts"/>
///<reference path="Settings.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var App =
  /*#__PURE__*/
  function (_Phaser$Game) {
    _inherits(App, _Phaser$Game);

    function App() {
      var _this;

      _classCallCheck(this, App);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, App.gameConfig));
      App.instance = _assertThisInitialized(_this);

      _this.state.add('Boot', BlockPuzzle.Boot, false);

      _this.state.add('Preloader', BlockPuzzle.Preloader, false);

      _this.state.add('Level', BlockPuzzle.Level, false);

      _this.state.start('Boot');

      return _this;
    }

    _createClass(App, [{
      key: "navigateToSponsor",
      value: function navigateToSponsor() {
        if (BlockPuzzle.Settings.ENABLE_API) {
          window.famobi.moreGamesLink();
        }
      }
    }, {
      key: "pauseGame",
      value: function pauseGame() {
        BlockPuzzle.SoundController.instance.pauseAudio();
        this.paused = true;
        console.log('pausing game...');
      }
    }, {
      key: "unpauseGame",
      value: function unpauseGame() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (isPageVisible && (!adIsShowing || force)) {
          this.paused = false;
          BlockPuzzle.SoundController.instance.resumeAudio();
          console.log('resuming game...');
        } else {
          console.log('resuming game is not allowed now because ads are displaying or page isn\'t visible...');
        }
      }
    }]);

    return App;
  }(Phaser.Game);

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
var adIsShowing = false; //famobi pause/resume requests

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
}; //visiblity


var hidden, visibilityChange;

if (typeof document.hidden !== "undefined") {
  // Opera 12.10 and Firefox 18 and later support
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
} // Warn if the browser doesn't support addEventListener or the Page Visibility API


if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
  console.log("Browser doesn't support the Page Visibility API.");
} else {
  // Handle page visibility change
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}

var BlockPuzzle;

(function (BlockPuzzle) {
  var AchievementsManager =
  /*#__PURE__*/
  function () {
    function AchievementsManager() {
      _classCallCheck(this, AchievementsManager);

      this.onAchievementCompleted = new Phaser.Signal();
      this.achievementModels = [{
        key: BlockPuzzle.AchievementType.TOTAL_SCORES,
        name: 'Total scores reached',
        currentValue: 0,
        requiredValues: [35000, 105000, 225000],
        rewards: [20, 31, 52],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.TOTAL_STARS,
        name: 'Total stars picked up',
        currentValue: 0,
        requiredValues: [50, 180, 365],
        rewards: [23, 34, 55],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.TOTAL_LEVEL_UPS,
        name: 'Level-ups collected',
        currentValue: 0,
        requiredValues: [25, 75, 150],
        rewards: [26, 37, 58],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.TOTAL_GREATS,
        name: 'Great inscriptions appeared',
        currentValue: 0,
        requiredValues: [5, 30, 60],
        rewards: [8, 19, 40],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.BOMB_EXPLOSIONS,
        name: 'Bomb explosions',
        currentValue: 0,
        requiredValues: [5, 20, 75],
        rewards: [17, 28, 49],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.LINES_DESTROYED,
        name: 'Destroyed lines',
        currentValue: 0,
        requiredValues: [240, 720, 1600],
        rewards: [14, 25, 46],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.BLOCKS_PLACED,
        name: 'Blocks placed at the board',
        currentValue: 0,
        requiredValues: [1600, 6400, 15000],
        rewards: [11, 22, 43],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.FIRE_BLOCKS_DESTROYED,
        name: 'Red blocks destroyed',
        currentValue: 0,
        requiredValues: [350, 1050, 2250],
        rewards: [17, 28, 49],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }, {
        key: BlockPuzzle.AchievementType.BEST_SCORE_REACHED,
        name: 'Best score reached',
        currentValue: 0,
        requiredValues: [6000, 10000, 16000],
        rewards: [5, 16, 37],
        achieved: [false, false, false],
        rewardClaimed: [false, false, false]
      }];
    }

    _createClass(AchievementsManager, [{
      key: "loadAchievementsState",
      value: function loadAchievementsState(states) {
        var _this2 = this;

        states.forEach(function (state) {
          var model = _this2.getAchievementModel(state.key);

          if (model) {
            model.currentValue = state.currentValue;
            model.achieved = state.achieved.slice();
            model.rewardClaimed = state.rewardClaimed.slice();
          }
        });
      }
    }, {
      key: "getAchievementsStates",
      value: function getAchievementsStates() {
        return this.achievementModels.map(function (model) {
          return {
            key: model.key,
            currentValue: model.currentValue,
            achieved: model.achieved.slice(),
            rewardClaimed: model.rewardClaimed.slice()
          };
        });
      }
    }, {
      key: "saveMedalsState",
      value: function saveMedalsState() {
        BlockPuzzle.LocalStorageController.instance.save();
      }
    }, {
      key: "getAchievementModel",
      value: function getAchievementModel(key) {
        return this.achievementModels.find(function (medal) {
          return medal.key == key;
        });
      }
    }, {
      key: "addValue",
      value: function addValue(key, value) {
        var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var model = this.getAchievementModel(key);

        if (model) {
          var prevLevel = AchievementsManager.getAchievementLevel(model);
          model.currentValue += value;
          var currentLevel = AchievementsManager.getAchievementLevel(model);

          if (currentLevel > prevLevel) {
            this.onAchievementCompleted.dispatch(model);
            BlockPuzzle.SoundController.instance.playAchievementClaimedSound();
          }

          if (save) {
            this.saveMedalsState();
          }
        }
      }
    }, {
      key: "setValue",
      value: function setValue(key, value) {
        var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var model = this.getAchievementModel(key);

        if (model && value > model.currentValue) {
          var prevLevel = AchievementsManager.getAchievementLevel(model);
          model.currentValue = value;
          var currentLevel = AchievementsManager.getAchievementLevel(model);

          if (currentLevel > prevLevel) {
            this.onAchievementCompleted.dispatch(model);
            BlockPuzzle.SoundController.instance.playAchievementClaimedSound();
          }

          if (save) {
            this.saveMedalsState();
          }
        }
      }
    }, {
      key: "hasAvailableRewards",
      value: function hasAvailableRewards() {
        var rewardAvailable = false;
        this.achievementModels.forEach(function (model) {
          if (model.currentValue >= model.requiredValues[0] && !model.rewardClaimed[0]) {
            rewardAvailable = true;
          } else if (model.currentValue >= model.requiredValues[1] && !model.rewardClaimed[1]) {
            rewardAvailable = true;
          } else if (model.currentValue >= model.requiredValues[2] && !model.rewardClaimed[2]) {
            rewardAvailable = true;
          }
        });
        return rewardAvailable;
      }
      /**
       * STATIC
       */

    }], [{
      key: "getAchievementLevel",
      value: function getAchievementLevel(model) {
        return model.currentValue >= model.requiredValues[2] ? 3 : model.currentValue >= model.requiredValues[1] ? 2 : model.currentValue >= model.requiredValues[0] ? 1 : 0;
      }
    }, {
      key: "instance",
      get: function get() {
        return AchievementsManager._instance ? AchievementsManager._instance : AchievementsManager._instance = new AchievementsManager();
      }
    }]);

    return AchievementsManager;
  }();

  AchievementsManager._instance = null;
  BlockPuzzle.AchievementsManager = AchievementsManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var APIUtils =
  /*#__PURE__*/
  function () {
    function APIUtils() {
      _classCallCheck(this, APIUtils);
    }

    _createClass(APIUtils, [{
      key: "isRewardedVideoFeatureEnabled",
      value: function isRewardedVideoFeatureEnabled() {
        return !!enable_rewarded_videos;
      }
    }, {
      key: "hasRewardedVideo",
      value: function hasRewardedVideo() {
        return window.famobi.hasRewardedAd();
      }
    }, {
      key: "showRewardedVideo",
      value: function showRewardedVideo(callback) {
        if (BlockPuzzle.Settings.ENABLE_API && this.isRewardedVideoFeatureEnabled()) {
          window.famobi.rewardedAd(function(result) {
            if(result.rewardGranted) {
              callback();
            }
          });
        } else {
          callback();
        }
      }
      /* Tracking stats */

    }, {
      key: "trackStats",
      value: function trackStats(key, value) {
        var incrementOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var currentLocalStorage = window.famobi && window.famobi.localStorage ? window.famobi.localStorage : window.localStorage;
        var trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
        var oldValue = trackableStats[key] || 0;

        if (incrementOnly && value <= oldValue) {
          return;
        }

        trackableStats[key] = value;
        currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));

        if (window.famobi_analytics && window.famobi_analytics.trackStats) {
          window.famobi_analytics.trackStats(key, value);
        }
      }
    }, {
      key: "trackStatsChange",
      value: function trackStatsChange(key, delta) {
        var currentLocalStorage = window.famobi && window.famobi.localStorage ? window.famobi.localStorage : window.localStorage;
        var trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
        trackableStats[key] = (trackableStats[key] || 0) + delta;
        currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));

        if (window.famobi_analytics && window.famobi_analytics.trackStats) {
          window.famobi_analytics.trackStats(key, trackableStats[key]);
        }
      }
    }, {
      key: "showAds",
      value: function showAds(callback) {
        var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (BlockPuzzle.Settings.ENABLE_API) {
          if (timeout == 0) {
            window.famobi.showAd(callback);
          } else {
            setTimeout(function () {
              window.famobi.showAd(callback);
            }, timeout);
          }
        } else {
          callback();
        }
      }
    }], [{
      key: "instance",
      get: function get() {
        return APIUtils._instance ? APIUtils._instance : APIUtils._instance = new APIUtils();
      }
    }]);

    return APIUtils;
  }();

  APIUtils._instance = null;
  BlockPuzzle.APIUtils = APIUtils;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Analytics =
  /*#__PURE__*/
  function () {
    function Analytics() {
      _classCallCheck(this, Analytics);
    }

    _createClass(Analytics, [{
      key: "initUser",
      value: function initUser() {

        if(window.famobi.hasFeature("standalone")) {
          return;
        }

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.response).data;
            var uid = data.uid;
            var splitTests = data.splitTests;
            Analytics.initialized = true;
            Analytics.USER_ID = uid;
            console.log('UID #', uid);
          }
        };

        xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/user", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
        xhttp.send(JSON.stringify({
          'locale': navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator["userLanguage"] || navigator.language || navigator["browserLanguage"] || 'en'
        }));
      }
    }, {
      key: "startLevel",
      value: function startLevel() {
        if (!Analytics.initialized) {
          return;
        }

        var data = {
          'level': 1
        };
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/start", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("X-Version", BlockPuzzle.Settings.GAME_VERSION);
        xhttp.setRequestHeader("X-User", Analytics.USER_ID);
        xhttp.send(JSON.stringify(data));
      }
    }, {
      key: "finishLevel",
      value: function finishLevel(score, stars, revives, powerups) {
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
    }, {
      key: "updateLevelData",
      value: function updateLevelData(params) {
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
    }], [{
      key: "instance",
      get: function get() {
        return Analytics._instance ? Analytics._instance : Analytics._instance = new Analytics();
      }
    }]);

    return Analytics;
  }();

  Analytics._instance = null;
  Analytics.USER_ID = undefined;
  Analytics.initialized = false;
  BlockPuzzle.Analytics = Analytics;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BackgroundManager =
  /*#__PURE__*/
  function (_Phaser$Group) {
    _inherits(BackgroundManager, _Phaser$Group);

    function BackgroundManager() {
      var _this3;

      _classCallCheck(this, BackgroundManager);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BackgroundManager).call(this, BlockPuzzle.App.instance, null));
      _this3.containerWidth = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
      _this3.containerHeight = BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT;
      _this3.leafs = [];
      _this3.isInitialized = false;
      _this3.leafAnchors = [new Phaser.Point(1, 0.85), new Phaser.Point(0.9, 1), new Phaser.Point(0.93, 1), new Phaser.Point(0.05, 1), new Phaser.Point(0, 1), new Phaser.Point(0.0875, 0.98)];
      BlockPuzzle.App.instance.stage.addChildAt(_assertThisInitialized(_this3), 0);
      _this3.container = _this3.add(BlockPuzzle.App.instance.make.group());
      _this3.topLeftContainer = _this3.container.add(BlockPuzzle.App.instance.make.group());
      _this3.topRightContainer = _this3.container.add(BlockPuzzle.App.instance.make.group());
      _this3.bottomLeftContainer = _this3.container.add(BlockPuzzle.App.instance.make.group());
      _this3.bottomRightContainer = _this3.container.add(BlockPuzzle.App.instance.make.group());

      _this3.resize();

      return _this3;
    }

    _createClass(BackgroundManager, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "createLeaf",
      value: function createLeaf(parentContainer, leafID, x, y, angle) {
        var scaleX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
        var scaleY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        var leaf = parentContainer.add(BlockPuzzle.App.instance.make.sprite(x, y, BlockPuzzle.Settings.PRELOADER_ATLAS, 'leaf' + leafID + '0000'));
        leaf.anchor.set(this.leafAnchors[leafID - 1].x, this.leafAnchors[leafID - 1].y);
        leaf.scale.set(scaleX, scaleY);
        var angleDispersion = BlockPuzzle.App.instance.rnd.realInRange(1, 3) * BlockPuzzle.App.instance.rnd.sign();
        var duration = BlockPuzzle.App.instance.rnd.integerInRange(2800, 5000);
        leaf.angle = angle + angleDispersion;
        leaf["shakeTween"] = BlockPuzzle.App.instance.tweens.create(leaf).to({
          angle: angle - angleDispersion
        }, duration, Phaser.Easing.Sinusoidal.InOut, true, 0, -1, true);
        BlockPuzzle.App.instance.tweens.add(leaf["shakeTween"]);
        this.leafs.push(leaf);
      }
    }, {
      key: "handleStateChanged",
      value: function handleStateChanged() {
        if (this.isInitialized) {
          this.leafs.forEach(function (leaf) {
            leaf["shakeTween"].pendingDelete = false;
          });
        }
      }
    }, {
      key: "init",
      value: function init() {
        this.buildChildren();
        this.isInitialized = true;
        this.resize();
      }
    }, {
      key: "resize",
      value: function resize() {
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
    }], [{
      key: "instance",
      get: function get() {
        return BackgroundManager._instance ? BackgroundManager._instance : BackgroundManager._instance = new BackgroundManager();
      }
    }]);

    return BackgroundManager;
  }(Phaser.Group);

  BackgroundManager._instance = null;
  BlockPuzzle.BackgroundManager = BackgroundManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AchievementType;

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
  var BlockColor;

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
  var CellModelState;

  (function (CellModelState) {
    CellModelState[CellModelState["CELL_EMPTY"] = 0] = "CELL_EMPTY";
    CellModelState[CellModelState["CELL_BUSY"] = 1] = "CELL_BUSY";
    CellModelState[CellModelState["CELL_NEW"] = 2] = "CELL_NEW";
  })(CellModelState = BlockPuzzle.CellModelState || (BlockPuzzle.CellModelState = {}));
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var FigureState;

  (function (FigureState) {
    FigureState[FigureState["INACTIVE"] = 0] = "INACTIVE";
    FigureState[FigureState["DRAGGING"] = 1] = "DRAGGING";
    FigureState[FigureState["PLACED"] = 2] = "PLACED";
  })(FigureState = BlockPuzzle.FigureState || (BlockPuzzle.FigureState = {}));
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var InscriptionLevel;

  (function (InscriptionLevel) {
    InscriptionLevel["GOOD"] = "Good";
    InscriptionLevel["GREAT"] = "Great";
    InscriptionLevel["EXCELLENT"] = "Excellent";
    InscriptionLevel["AWESOME"] = "Awesome";
  })(InscriptionLevel = BlockPuzzle.InscriptionLevel || (BlockPuzzle.InscriptionLevel = {}));
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var PowerupType;

  (function (PowerupType) {
    PowerupType["BOMB"] = "Bomb";
    PowerupType["LIGHTNING"] = "Lightning";
  })(PowerupType = BlockPuzzle.PowerupType || (BlockPuzzle.PowerupType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowHeadingBackplateType;

  (function (WindowHeadingBackplateType) {
    WindowHeadingBackplateType[WindowHeadingBackplateType["SILVER"] = 0] = "SILVER";
    WindowHeadingBackplateType[WindowHeadingBackplateType["GOLD"] = 1] = "GOLD";
  })(WindowHeadingBackplateType = BlockPuzzle.WindowHeadingBackplateType || (BlockPuzzle.WindowHeadingBackplateType = {}));
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BestScoreReachedEffectEmitter =
  /*#__PURE__*/
  function (_Phaser$Particles$Arc) {
    _inherits(BestScoreReachedEffectEmitter, _Phaser$Particles$Arc);

    function BestScoreReachedEffectEmitter(x, y, maxParticles) {
      var _this4;

      _classCallCheck(this, BestScoreReachedEffectEmitter);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(BestScoreReachedEffectEmitter).call(this, BlockPuzzle.App.instance, x, y, maxParticles));
      _this4.width = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
      _this4.height = 30;
      _this4.minParticleScale = 1;
      _this4.maxParticleScale = 1.4;

      _this4.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000'], maxParticles);

      _this4.gravity.set(0, 1200);

      _this4.setYSpeed(-100, 700);

      _this4.autoAlpha = true;

      _this4.setAlpha(1, 0.0, 1800, Phaser.Easing.Quadratic.In);

      _this4.flow(3500, 5, 6, maxParticles, false);

      return _this4;
    }

    return BestScoreReachedEffectEmitter;
  }(Phaser.Particles.Arcade.Emitter);

  BlockPuzzle.BestScoreReachedEffectEmitter = BestScoreReachedEffectEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ExplodingEffectEmitter =
  /*#__PURE__*/
  function (_Phaser$Particles$Arc2) {
    _inherits(ExplodingEffectEmitter, _Phaser$Particles$Arc2);

    function ExplodingEffectEmitter(targetPosition) {
      var _this5;

      _classCallCheck(this, ExplodingEffectEmitter);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ExplodingEffectEmitter).call(this, BlockPuzzle.App.instance, targetPosition.x, targetPosition.y, 100));
      _this5.particlefrequency = 12;

      _this5.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000']);

      _this5.width = 40;
      _this5.height = 40;
      _this5.minParticleScale = 1.0;
      _this5.maxParticleScale = 2.5;

      _this5.gravity.setTo(0, 0);

      _this5.setYSpeed(-130, 130);

      _this5.setXSpeed(-130, 130);

      _this5.minRotation = 0;
      _this5.maxRotation = 0;
      _this5.autoAlpha = true;

      _this5.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);

      _this5.autoScale = true;

      _this5.setScale(2, 0.6, 2, 0.6, 500, Phaser.Easing.Sinusoidal.InOut);

      _this5.start(false, 600, _this5.particlefrequency, 100 / _this5.particlefrequency);

      _this5.game.time.events.add(1600, function () {
        return _this5.destroy();
      });

      return _this5;
    }

    return ExplodingEffectEmitter;
  }(Phaser.Particles.Arcade.Emitter);

  BlockPuzzle.ExplodingEffectEmitter = ExplodingEffectEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var FlyingParticlesEmitter =
  /*#__PURE__*/
  function (_Phaser$Particles$Arc3) {
    _inherits(FlyingParticlesEmitter, _Phaser$Particles$Arc3);

    function FlyingParticlesEmitter(level, points, startPosition, targetPosition) {
      var _this6;

      _classCallCheck(this, FlyingParticlesEmitter);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(FlyingParticlesEmitter).call(this, level.game, startPosition.x, startPosition.y, 250));
      _this6.particleSpeed = 1200;
      _this6.particlefrequency = 17;
      _this6.level = level;
      _this6.points = points;
      _this6.distance = Phaser.Math.distance(targetPosition.x, targetPosition.y, startPosition.x, startPosition.y);
      _this6.duration = _this6.distance / _this6.particleSpeed * 1000;

      _this6.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleMultiplier10000', 'particleMultiplier20000', 'particleMultiplier30000']);

      _this6.width = 25;
      _this6.height = 25;
      _this6.minParticleScale = 0.8;
      _this6.maxParticleScale = 1.3;

      _this6.gravity.setTo(0, 200);

      _this6.setYSpeed(-25, 25);

      _this6.setXSpeed(-25, 25);

      _this6.minRotation = 0;
      _this6.maxRotation = 0;
      _this6.autoAlpha = true;

      _this6.setAlpha(1, 0, 370, Phaser.Easing.Quintic.In); // this.autoScale = true;
      // this.setScale(1.3, 0.8, 1.3, 0.8, 600, Phaser.Easing.Sinusoidal.InOut);


      _this6.flow(600, _this6.particlefrequency, 2, _this6.duration / _this6.particlefrequency * 3);

      _this6.game.add.tween(_assertThisInitialized(_this6)).to({
        x: targetPosition.x,
        y: targetPosition.y
      }, _this6.duration, Phaser.Easing.Linear.None, true).onComplete.add(_this6.addPoints, _assertThisInitialized(_this6));

      _this6.game.time.events.add(_this6.duration + 1600, function () {
        return _this6.destroy();
      });

      return _this6;
    }

    _createClass(FlyingParticlesEmitter, [{
      key: "addPoints",
      value: function addPoints() {
        this.on = false;
        this.width = 45;
        this.height = 45;
        this.setYSpeed(-120, 120);
        this.setXSpeed(-120, 120);
        this.setAlpha(1, 0, 300, Phaser.Easing.Quintic.In);
        this.setScale(1, 0.3, 1, 0.3, 280, Phaser.Easing.Sinusoidal.InOut);
        this.start(false, 300, 10, 12);
      }
    }]);

    return FlyingParticlesEmitter;
  }(Phaser.Particles.Arcade.Emitter);

  BlockPuzzle.FlyingParticlesEmitter = FlyingParticlesEmitter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var InscriptionEffect =
  /*#__PURE__*/
  function (_Phaser$Group2) {
    _inherits(InscriptionEffect, _Phaser$Group2);

    function InscriptionEffect(inscriptionLevel, x, y) {
      var _this7;

      _classCallCheck(this, InscriptionEffect);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(InscriptionEffect).call(this, BlockPuzzle.App.instance, null));
      _this7.inscriptionLevel = inscriptionLevel;

      _this7.game.camera.shake(0.0058, 200);

      _this7.position.set(x, Math.max(y, -120) + 40);

      _this7.sprite = _this7.add(_this7.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'inscription' + _this7.inscriptionLevel + '0000'));

      _this7.sprite.anchor.set(0.5, 1);

      _this7.sprite.alpha = 0;

      _this7.sprite.scale.set(0);

      _this7.game.add.tween(_this7.sprite).to({
        alpha: 1
      }, 420, Phaser.Easing.Sinusoidal.Out, false).to({
        alpha: 1
      }, 250, Phaser.Easing.Sinusoidal.Out, false).to({
        alpha: 0
      }, 650, Phaser.Easing.Sinusoidal.In, false).start().onComplete.add(function () {
        return _this7.destroy();
      });

      _this7.game.add.tween(_this7.sprite).to({
        y: -120
      }, 350, Phaser.Easing.Sinusoidal.Out, false).to({
        y: -140
      }, 800, Phaser.Easing.Linear.None, false).start();

      _this7.game.add.tween(_this7.sprite.scale).to({
        x: 1,
        y: 1
      }, 420, _this7.amplifiedBackOut, false).to({
        x: 1.25,
        y: 1.25
      }, 850, Phaser.Easing.Sinusoidal.In, false, 50).start();

      BlockPuzzle.SoundController.instance.playInscriptionSound(inscriptionLevel);

      if (_this7.inscriptionLevel == BlockPuzzle.InscriptionLevel.GREAT) {
        BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_GREATS, 1);
      }

      return _this7;
    }

    _createClass(InscriptionEffect, [{
      key: "amplifiedBackOut",
      value: function amplifiedBackOut(k) {
        var s = 0.70158;
        return --k * k * ((s + 1) * k + s) + 1;
      }
    }]);

    return InscriptionEffect;
  }(Phaser.Group);

  BlockPuzzle.InscriptionEffect = InscriptionEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var StarPickingUpEffect =
  /*#__PURE__*/
  function (_Phaser$Particles$Arc4) {
    _inherits(StarPickingUpEffect, _Phaser$Particles$Arc4);

    function StarPickingUpEffect(block) {
      var _this8;

      _classCallCheck(this, StarPickingUpEffect);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(StarPickingUpEffect).call(this, BlockPuzzle.App.instance, 0, 0, 250));
      _this8.particleSpeed = 750;
      _this8.particleFrequency = 8;
      var parentGroup = BlockPuzzle.App.instance.state.getCurrentState().uiManager.starsCounter;
      var startingPosition = parentGroup.toLocal(block.star.position, block);
      var targetPosition = new PIXI.Point(0, 0);
      var distance = Phaser.Math.clamp(Math.pow(Phaser.Math.distance(targetPosition.x, targetPosition.y, startingPosition.x, startingPosition.y), 0.5) * 20, 330, 700);
      var duration = distance / _this8.particleSpeed * 1000;
      /* emitter */

      parentGroup.addAt(_assertThisInitialized(_this8), 0);
      _this8.x = startingPosition.x;
      _this8.y = startingPosition.y;

      _this8.makeParticles(BlockPuzzle.Settings.ANIMATION_ATLAS, ['particleStar10000', 'particleStar20000', 'particleStar30000']);

      _this8.width = 30;
      _this8.height = 30;
      _this8.minParticleScale = 0.7;
      _this8.maxParticleScale = 1.5;

      _this8.gravity.setTo(0, -100);

      _this8.setYSpeed(-100, 100);

      _this8.setXSpeed(-100, 100);

      _this8.minRotation = 0;
      _this8.maxRotation = 0;
      _this8.autoAlpha = true;

      _this8.setAlpha(1, 0, 420, Phaser.Easing.Quintic.In);

      _this8.autoScale = true;

      _this8.setScale(1, 0.3, 1, 0.3, 500, Phaser.Easing.Sinusoidal.InOut);

      _this8.game.add.tween(_assertThisInitialized(_this8)).to({
        x: targetPosition.x
      }, duration, Phaser.Easing.Back.In, true);

      _this8.game.add.tween(_assertThisInitialized(_this8)).to({
        y: targetPosition.y
      }, duration, Phaser.Easing.Sinusoidal.In, true).onComplete.add(_this8.finalizeTween, _assertThisInitialized(_this8));

      _this8.start(false, 600, _this8.particleFrequency, duration / _this8.particleFrequency);

      _this8.game.time.events.add(duration + 1600, function () {
        return _this8.destroy();
      });
      /* star sprite */


      _this8.starSprite = parentGroup.addAt(block.star, 1);

      _this8.starSprite.position.set(startingPosition.x, startingPosition.y);

      _this8.game.add.tween(_this8.starSprite).to({
        x: targetPosition.x
      }, duration, Phaser.Easing.Back.In, true);

      _this8.game.add.tween(_this8.starSprite).to({
        y: targetPosition.y,
        angle: startingPosition.x < targetPosition.x ? '-373' : '+347'
      }, duration, Phaser.Easing.Sinusoidal.In, true);

      return _this8;
    }

    _createClass(StarPickingUpEffect, [{
      key: "finalizeTween",
      value: function finalizeTween() {
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
    }]);

    return StarPickingUpEffect;
  }(Phaser.Particles.Arcade.Emitter);

  BlockPuzzle.StarPickingUpEffect = StarPickingUpEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BlockStarredView =
  /*#__PURE__*/
  function (_Phaser$Group3) {
    _inherits(BlockStarredView, _Phaser$Group3);

    function BlockStarredView(color) {
      var _this9;

      _classCallCheck(this, BlockStarredView);

      _this9 = _possibleConstructorReturn(this, _getPrototypeOf(BlockStarredView).call(this, BlockPuzzle.App.instance, null));

      _this9.buildChildren(color);

      return _this9;
    }

    _createClass(BlockStarredView, [{
      key: "buildChildren",
      value: function buildChildren(color) {
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
    }, {
      key: "startShining",
      value: function startShining() {
        this.game.tweens.removeFrom(this.shining);
        this.shining.alpha = 0.0;
        this.game.add.tween(this.shining).to({
          alpha: 1
        }, BlockPuzzle.Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);
        this.game.tweens.removeFrom(this.star.scale);
        this.star.scale.set(0.9);
        this.game.add.tween(this.star.scale).to({
          x: 1,
          y: 1
        }, BlockPuzzle.Settings.STAR_SHINING_TWEEN_DURATION, Phaser.Easing.Linear.None, true, 0, -1, true);
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.block.frameName = 'blockStarred000' + color;
      }
    }, {
      key: "startAppearingTween",
      value: function startAppearingTween(initialParent, targetBlock) {
        var _this10 = this;

        var initialParentPosition = initialParent.toLocal(this.position, this.parent);
        this.position.set(initialParentPosition.x, initialParentPosition.y);
        initialParent.add(this);
        this.game.time.events.add(70, function () {
          return BlockPuzzle.SoundController.instance.playStarAppearSound();
        });
        this.game.tweens.removeFrom(this.block);
        this.block.alpha = 0;
        this.game.add.tween(this.block).to({
          alpha: 1
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.35, Phaser.Easing.Linear.None, true);
        this.shining.alpha = 0;
        this.shadow.alpha = 0;
        this.game.add.tween(this.shadow).to({
          alpha: 1
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.2, Phaser.Easing.Sinusoidal.In, true, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.8);
        this.game.tweens.removeFrom(this.star);
        this.star.alpha = 0.5;
        this.game.add.tween(this.star).to({
          alpha: 1
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.7, Phaser.Easing.Quadratic.Out, true);
        this.star.angle = -45;
        this.game.add.tween(this.star).to({
          angle: 0
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false).start();
        this.game.tweens.removeFrom(this.star.scale);
        this.star.scale.set(5);
        this.game.add.tween(this.star.scale).to({
          x: 0.8,
          y: 0.8
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.62, Phaser.Easing.Sinusoidal.Out, false).to({
          x: 0.9,
          y: 0.9
        }, BlockPuzzle.Settings.STARRED_BLOCK_APPEARING_TWEEN_DURATION * 0.1, Phaser.Easing.Sinusoidal.In, false).start().onComplete.add(function () {
          _this10.position.set(0, 0);

          targetBlock.add(_this10);

          _this10.startShining();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(BlockStarredView.prototype), "destroy", this).call(this);
      }
    }, {
      key: "pickupStar",
      value: function pickupStar(delay) {
        var _this11 = this;

        this.game.time.events.add(delay, function () {
          new BlockPuzzle.StarPickingUpEffect(_this11);
        });
      }
    }]);

    return BlockStarredView;
  }(Phaser.Group);

  BlockPuzzle.BlockStarredView = BlockStarredView;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ExplosionEffect =
  /*#__PURE__*/
  function (_Phaser$Group4) {
    _inherits(ExplosionEffect, _Phaser$Group4);

    function ExplosionEffect(x, y) {
      var _this12;

      _classCallCheck(this, ExplosionEffect);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(ExplosionEffect).call(this, BlockPuzzle.App.instance, null));

      _this12.position.set(x, y);

      _this12.explosionA = _this12.add(_this12.game.make.sprite(0, 0, 'explosionA'));

      _this12.explosionA.anchor.set(0.5);

      _this12.explosionA.scale.set(1.2);

      _this12.explosionA.angle = Math.random() * 360;

      _this12.explosionA.animations.add('boom');

      _this12.explosionA.animations.play('boom', 120, false, true);

      _this12.explosionB = _this12.add(_this12.game.make.sprite(0, 0, 'explosionB'));

      _this12.explosionB.anchor.set(0.5);

      _this12.explosionB.scale.set(1.3);

      _this12.explosionB.angle = Math.random() * 360;

      _this12.explosionB.animations.add('boom');

      _this12.explosionB.animations.play('boom', 60, false, true);

      _this12.game.camera.shake(0.0035, 350);

      BlockPuzzle.SoundController.instance.playExplosionSound();
      return _this12;
    }

    return ExplosionEffect;
  }(Phaser.Group);

  BlockPuzzle.ExplosionEffect = ExplosionEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var LightningEffect =
  /*#__PURE__*/
  function (_Phaser$Sprite) {
    _inherits(LightningEffect, _Phaser$Sprite);

    function LightningEffect(initialCell, targetCell) {
      var _this13;

      _classCallCheck(this, LightningEffect);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(LightningEffect).call(this, BlockPuzzle.App.instance, targetCell.x, targetCell.y, BlockPuzzle.Settings.GAME_ATLAS, 'lighting0000'));

      _this13.anchor.set(0.5, 0);

      _this13.initialCellPosition = initialCell.position.clone();
      _this13.targetCellPosition = targetCell.position.clone();
      _this13.targetCell = targetCell;

      _this13.update();

      _this13.blinkAnimation = _this13.animations.add('blinkAnimation', Phaser.Animation.generateFrameNames('lighting', 0, LightningEffect.LIGHTING_FRAMES - 1, '', 4));
      _this13.endAnimation = _this13.animations.add('endAnimation', Phaser.Animation.generateFrameNames('lightingEnd', 0, LightningEffect.DISAPPEARING_FRAMES - 1, '', 4));
      return _this13;
    }

    _createClass(LightningEffect, [{
      key: "delayedStart",
      value: function delayedStart(delay) {
        var _this14 = this;

        this.visible = false;
        this.game.time.events.add(delay, function () {
          if (_this14.targetCell) {
            _this14.startAnimations();
          } else {
            _this14.destroy();
          }
        });
        return this;
      }
    }, {
      key: "startAnimations",
      value: function startAnimations() {
        var _this15 = this;

        BlockPuzzle.SoundController.instance.playLightningSound();
        this.visible = true;
        this.blinkAnimation.play(LightningEffect.FPS, false, false);
        this.blinkAnimation.onComplete.add(function () {
          _this15.endAnimation.play(LightningEffect.FPS, false, false);

          _this15.endAnimation.onComplete.add(function () {
            _this15.destroy();
          });

          _this15.scale.set(1, 1);
        });

        if (this.targetCell) {
          BlockPuzzle.ScoreManager.instance.addScores(5);
          this.targetCell.destroyBlock(35);
        }
      }
    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(LightningEffect.prototype), "update", this).call(this);

        var length = Phaser.Math.distance(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y);

        if (this.targetCell) {
          this.targetCellPosition.copyFrom(this.targetCell.position);
          this.scale.set(1, Math.max(0.5, length / 130));

          if (length == 0) {
            this.anchor.set(0.5);
            /* hit the same block */
          }
        } else if (length < 120) {
          this.scale.set(1, length / 130);
        }

        this.position.copyFrom(this.targetCellPosition);
        this.rotation = Phaser.Math.angleBetween(this.targetCellPosition.x, this.targetCellPosition.y, this.initialCellPosition.x, this.initialCellPosition.y) - Math.PI / 2;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(LightningEffect.prototype), "destroy", this).call(this);

        this.blinkAnimation = null;
        this.endAnimation = null;
      }
    }]);

    return LightningEffect;
  }(Phaser.Sprite);

  LightningEffect.LIGHTING_FRAMES = 15;
  LightningEffect.DISAPPEARING_FRAMES = 13;
  LightningEffect.TOTAL_FRAMES = LightningEffect.LIGHTING_FRAMES + LightningEffect.DISAPPEARING_FRAMES;
  LightningEffect.FPS = 180;
  BlockPuzzle.LightningEffect = LightningEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ScoresEffect =
  /*#__PURE__*/
  function (_Phaser$Group5) {
    _inherits(ScoresEffect, _Phaser$Group5);

    function ScoresEffect(level, scores, x, y, delay) {
      var _this16;

      _classCallCheck(this, ScoresEffect);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(ScoresEffect).call(this, level.game));
      _this16.targetScale = 1.0;
      _this16.level = level;
      _this16.scores = scores;
      var parentGroup = BlockPuzzle.App.instance.state.getCurrentState().uiManager.multiplierBar;
      var startingPosition = parentGroup.toLocal(new Phaser.Point(x, y), _this16.level.boardManager.getBoard().cellsContainer);
      var targetPosition = new PIXI.Point(0, 0);

      _this16.position.set(startingPosition.x, startingPosition.y);

      parentGroup.addAt(_assertThisInitialized(_this16), 0);

      _this16.buildContent();

      _this16.animateContentA(delay, targetPosition);

      return _this16;
    }

    _createClass(ScoresEffect, [{
      key: "buildContent",
      value: function buildContent() {
        this.scoresText = this.add(new BlockPuzzle.BitmapTextField('+' + this.scores, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 1, 0.5, 0.5, 1));
      }
    }, {
      key: "animateContentA",
      value: function animateContentA(delay, targetPosition) {
        var _this17 = this;

        //appearing tween
        this.scale.set(0);
        this.game.add.tween(this.scale).to({
          x: this.targetScale,
          y: this.targetScale
        }, 300, Phaser.Easing.Back.Out, true, delay); //tween appearing position

        this.appearingTween = this.game.add.tween(this.scoresText).to({
          y: this.scoresText.y - 80
        }, 350, Phaser.Easing.Back.Out, true, delay);
        this.disappearingTween = this.game.add.tween(this).to({
          alpha: 0.0,
          y: this.y - 70
        }, 750, Phaser.Easing.Cubic.In, false);
        this.disappearingTween.onStart.add(function () {});
        this.disappearingTween.onComplete.add(function () {
          return _this17.destroy();
        });
        this.game.time.events.add(delay, function () {
          return _this17.parent.addChildAt(new BlockPuzzle.FlyingParticlesEmitter(_this17.level, _this17.scores, new PIXI.Point(_this17.x, _this17.y - 80), new Phaser.Point(targetPosition.x, targetPosition.y)), 0);
        }); //chain tweens

        this.appearingTween.chain(this.disappearingTween);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(ScoresEffect.prototype), "destroy", this).call(this);

        this.level = null;
        this.scoresText = null;
        this.appearingTween = null;
        this.disappearingTween = null;
      }
    }]);

    return ScoresEffect;
  }(Phaser.Group);

  BlockPuzzle.ScoresEffect = ScoresEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BlockDestroyingEffect =
  /*#__PURE__*/
  function (_Phaser$Sprite2) {
    _inherits(BlockDestroyingEffect, _Phaser$Sprite2);

    function BlockDestroyingEffect(color, x, y, delay) {
      var _this18;

      _classCallCheck(this, BlockDestroyingEffect);

      _this18 = _possibleConstructorReturn(this, _getPrototypeOf(BlockDestroyingEffect).call(this, BlockPuzzle.App.instance, x, y, BlockPuzzle.Settings.ANIMATION_ATLAS));

      _this18.anchor.set(0.5, 0.24);

      _this18.anim = _this18.animations.add('destroying', Phaser.Animation.generateFrameNames('blockDestroyingAnim' + color, 0, 35, '', 4));
      _this18.visible = false;

      _this18.game.time.events.add(delay, function () {
        _this18.visible = true;

        _this18.anim.play(62, false, true);
      });

      return _this18;
    }

    return BlockDestroyingEffect;
  }(Phaser.Sprite);

  BlockPuzzle.BlockDestroyingEffect = BlockDestroyingEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Block =
  /*#__PURE__*/
  function (_Phaser$Group6) {
    _inherits(Block, _Phaser$Group6);

    function Block(cellModel, color) {
      var _this19;

      _classCallCheck(this, Block);

      _this19 = _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this, BlockPuzzle.App.instance, null));
      _this19.starred = false;
      _this19.active = true;
      _this19.posX = cellModel.posX;
      _this19.posY = cellModel.posY;
      _this19.glow = _this19.add(_this19.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blockGlow000' + color));

      _this19.glow.anchor.set(0.5);

      _this19.glow.alpha = 0;
      _this19.glow.visible = false;
      _this19.block = _this19.add(_this19.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'block000' + color));

      _this19.block.anchor.set(0.5);

      _this19.blockGrayscale = _this19.add(_this19.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blockGrey000' + color));

      _this19.blockGrayscale.anchor.set(0.5);

      _this19.blockGrayscale.visible = false;
      _this19.blockGrayscale.alpha = 0;

      _this19.setColor(color);

      return _this19;
    }

    _createClass(Block, [{
      key: "addStar",
      value: function addStar(level) {
        if (!this.starred) {
          this.starred = true;
          this.block.visible = false;
          this.blockStarred = this.blockStarred || this.add(new BlockPuzzle.BlockStarredView(this.color));
          this.blockStarred.startAppearingTween(level.boardManager.getBoard().effectsContainer, this);
        }
      }
    }, {
      key: "hasStar",
      value: function hasStar() {
        return this.starred;
      }
    }, {
      key: "setColor",
      value: function setColor(color) {
        this.color = color;
        this.block.frameName = 'block000' + this.color;
        this.glow.frameName = 'blockGlow000' + this.color;

        if (this.blockStarred) {
          this.blockStarred.setColor(this.color);
        }

        this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
      }
    }, {
      key: "setTemporalColor",
      value: function setTemporalColor(color) {
        this.temporalColor = color;
        this.block.frameName = 'block000' + this.temporalColor;
        this.glow.frameName = 'blockGlow000' + this.temporalColor;

        if (this.blockStarred) {
          this.blockStarred.setColor(this.temporalColor);
        }

        this.blockGrayscale.frameName = this.hasStar() ? 'blockStarredGrey000' + this.color : 'blockGrey000' + this.color;
      }
    }, {
      key: "applyTemporalColor",
      value: function applyTemporalColor() {
        if (this.temporalColor) {
          this.setColor(this.temporalColor);
        }
      }
    }, {
      key: "activate",
      value: function activate(delay) {
        this.active = true;
        this.block.visible = true;

        if (this.hasStar()) {
          this.blockStarred.visible = true;
          this.blockStarred.alpha = 1;
          this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
        }

        this.game.add.tween(this.blockGrayscale).to({
          alpha: 0
        }, BlockPuzzle.Settings.BLOCK_ACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
      }
    }, {
      key: "deactivate",
      value: function deactivate(delay) {
        var _this20 = this;

        this.active = false;
        this.blockGrayscale.parent.setChildIndex(this.blockGrayscale, this.blockGrayscale.parent.children.length - 1);
        this.blockGrayscale.visible = true;
        this.blockGrayscale.alpha = 0;
        this.game.add.tween(this.blockGrayscale).to({
          alpha: 1
        }, BlockPuzzle.Settings.BLOCK_DEACTIVATION_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay).onComplete.add(function () {
          _this20.block.visible = false;

          if (_this20.hasStar()) {
            _this20.blockStarred.visible = false;
            _this20.blockStarred.alpha = 0;
          }
        });
      }
    }, {
      key: "dispose",
      value: function dispose(delay) {
        var deltaY = 8 - this.posY + 1;
        var targetY = deltaY * BlockPuzzle.Settings.CELL_HEIGHT;
        var targetX = Math.floor(this.game.rnd.integerInRange(20, 60));
        var fallingDistanceY = targetY;
        var fallingDuration = 250 + deltaY * 45;
        this.game.add.tween(this).to({
          x: targetX.toString()
        }, fallingDuration, Phaser.Easing.Sinusoidal.In, true, delay);
        this.game.add.tween(this).to({
          alpha: 0
        }, fallingDuration, Phaser.Easing.Exponential.In, true, delay);
        this.game.add.tween(this).to({
          y: '+' + fallingDistanceY
        }, fallingDuration, Phaser.Easing.Back.In, true, delay);
      }
    }, {
      key: "enableGlow",
      value: function enableGlow(duration) {
        this.game.tweens.removeFrom(this.glow);
        this.glow.visible = true;
        this.glow.alpha = 0;
        this.game.add.tween(this.glow).to({
          alpha: 0.6
        }, duration, Phaser.Easing.Sinusoidal.InOut, true);
      }
    }, {
      key: "disableGlow",
      value: function disableGlow(duration) {
        var _this21 = this;

        this.game.tweens.removeFrom(this.glow);
        this.game.add.tween(this.glow).to({
          alpha: 0
        }, duration, Phaser.Easing.Sinusoidal.Out, true).onComplete.add(function () {
          return _this21.glow.visible = false;
        });
      }
    }, {
      key: "animateDestroying",
      value: function animateDestroying(effectsContainer, delay) {
        var _this22 = this;

        effectsContainer.add(new BlockPuzzle.BlockDestroyingEffect(this.color, this.x, this.y, delay));
        this.game.add.tween(this.scale).to({
          x: 0.5,
          y: 0.5
        }, BlockPuzzle.Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay);
        this.game.add.tween(this).to({
          alpha: 0
        }, BlockPuzzle.Settings.BLOCK_DISAPPEARING_DURATION, Phaser.Easing.Sinusoidal.Out, true, delay).onComplete.add(function () {
          if (_this22.color == BlockPuzzle.BlockColor.RED) {
            BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.FIRE_BLOCKS_DESTROYED, 1);
          }

          _this22.destroy();
        });

        if (this.hasStar() && this.blockStarred) {
          this.blockStarred.pickupStar(delay);
        }
      }
    }]);

    return Block;
  }(Phaser.Group);

  BlockPuzzle.Block = Block;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Board =
  /*#__PURE__*/
  function (_Phaser$Group7) {
    _inherits(Board, _Phaser$Group7);

    function Board(boardManager, rows, cols) {
      var _this23;

      _classCallCheck(this, Board);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, boardManager.game));
      _this23.active = true;
      _this23.boardManager = boardManager;
      _this23.level = boardManager.level;
      _this23.numRows = rows;
      _this23.numCols = cols;

      _this23.buildCells();

      _this23.alignCells();

      _this23.animateAppearing();

      return _this23;
    }

    _createClass(Board, [{
      key: "buildCells",
      value: function buildCells() {
        this.cells = [];
        this.cellsContainer = this.add(this.game.make.group());
        this.fieldCoverSprite = this.add(this.game.make.image(0, 0, 'field-cover'));
        this.fieldCoverSprite.anchor.set(0.5);
        this.blocksContainer = this.add(this.game.make.group());
        this.explosionsContainer = this.add(this.game.make.group());
        this.effectsContainer = this.add(this.game.make.group());

        for (var i = 0; i < this.numRows * this.numCols; i++) {
          var row = Math.floor(i / this.numCols);
          var column = i % this.numCols;
          this.cells.push(this.cellsContainer.add(new BlockPuzzle.Cell(this, column, row)));
        }
      }
    }, {
      key: "alignCells",
      value: function alignCells() {
        var _this24 = this;

        this.cells.forEach(function (cell) {
          return cell.position.set(cell.posX - _this24.numCols / 2 + 0.5, cell.posY - _this24.numRows / 2 + 0.5).multiply(BlockPuzzle.Settings.CELL_WIDTH, BlockPuzzle.Settings.CELL_HEIGHT);
        });
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing() {
        var _this25 = this;

        var cell = null;

        for (var i = 0; i < this.numCols; i++) {
          for (var j = 0; j < this.numRows; j++) {
            cell = this.getCellAt(i, j);
            cell.scale.set(0);
            this.game.add.tween(cell.scale).to({
              x: 1,
              y: 1
            }, 120, Phaser.Easing.Quadratic.Out, true, (i + j) * 20 + 100);
          }
        }

        this.game.time.events.add((this.numCols + this.numRows) * 20 + 100, function () {
          return _this25.level.eventManager.onBoardCreated.dispatch();
        });
      }
    }, {
      key: "findClosestCell",
      value: function findClosestCell(point) {
        var closestCell = null;
        this.getCells().forEach(function (cell) {
          if (Math.abs(cell.x - point.x) <= BlockPuzzle.Settings.CELL_WIDTH / 2 && Math.abs(cell.y - point.y) <= BlockPuzzle.Settings.CELL_HEIGHT / 2) {
            closestCell = cell;
          }
        });
        return closestCell;
      }
      /**
       * PUBLIC
       */

    }, {
      key: "isActive",
      value: function isActive() {
        return this.active;
      }
    }, {
      key: "getScale",
      value: function getScale() {
        return this.scale.x;
      }
    }, {
      key: "getCells",
      value: function getCells() {
        return this.cells;
      }
    }, {
      key: "getNotEmptyCells",
      value: function getNotEmptyCells() {
        var _this26 = this;

        return this.getCells().filter(function (cell) {
          return !_this26.isEmpty(cell);
        });
      }
    }, {
      key: "getEmptyCells",
      value: function getEmptyCells() {
        var _this27 = this;

        return this.getCells().filter(function (cell) {
          return _this27.isEmpty(cell);
        });
      }
    }, {
      key: "getCellAt",
      value: function getCellAt(posX, posY) {
        return posX < 0 || posX >= this.numCols || posY < 0 || posY >= this.numRows ? null : this.cells[posY * this.numRows + posX] || null;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(cell) {
        return cell && cell.isEmpty();
      }
    }, {
      key: "activate",
      value: function activate() {
        if (!this.isActive()) {
          this.active = true;
          BlockPuzzle.SoundController.instance.playReviveSound();
          Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach(function (cell, index) {
            return cell.getBlock().activate(index * 7);
          });
        }
      }
    }, {
      key: "deactivate",
      value: function deactivate(delay) {
        if (this.isActive()) {
          this.active = false;
          BlockPuzzle.SoundController.instance.playLoseSound();
          Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach(function (cell, index) {
            return cell.getBlock().deactivate(delay + index * 10);
          });
        }
      }
    }, {
      key: "disposeBlocks",
      value: function disposeBlocks(delay, deactivateBeforeDisposing) {
        if (deactivateBeforeDisposing) {
          this.active = false;
          BlockPuzzle.SoundController.instance.playLoseSound();
        }

        Phaser.ArrayUtils.shuffle(this.getNotEmptyCells()).forEach(function (cell, index) {
          return cell.disposeBlock(delay + index * 8, deactivateBeforeDisposing);
        });
      }
    }, {
      key: "dispatchFigureIsBeingDragged",
      value: function dispatchFigureIsBeingDragged(figure) {
        var _this28 = this;

        this.getCells().forEach(function (cell) {
          return cell.resetView(false);
        });
        /* find target cells where figure will be placed */

        this.targetCells = this.getTargetCellsFor(figure);

        if (this.targetCells && figure) {
          /* and highlight them */
          this.targetCells.forEach(function (cell) {
            return cell.showHighlighting(figure.color, false);
          });
          /* highlight potentially filled lines and rows */

          var model = this.getModel();
          this.targetCells.forEach(function (cell) {
            return model.setCellStateAt(BlockPuzzle.CellModelState.CELL_NEW, cell.posX, cell.posY);
          });
          var cellsToClear = model.findCellsToClear();
          cellsToClear.forEach(function (cellPos) {
            return _this28.getCellAt(cellPos.x, cellPos.y).showHighlighting(figure.color, false);
          });
        }
      }
    }, {
      key: "dispatchPowerupIsBeingDragged",
      value: function dispatchPowerupIsBeingDragged(targetCells) {
        this.getCells().forEach(function (cell) {
          return cell.resetAlphaHighlighting();
        });

        if (targetCells && targetCells.length > 0) {
          /* set alpha to all the cells*/
          this.getCells().forEach(function (cell) {
            return cell.applyAlphaHighlighting(true);
          });
          /* remove alpha filter from target cells */

          targetCells.forEach(function (cell) {
            return cell.applyAlphaHighlighting(false);
          });
        }
      }
    }, {
      key: "placeFigure",
      value: function placeFigure(figure) {
        if (figure) {
          this.targetCells = this.getTargetCellsFor(figure);

          if (this.targetCells) {
            this.targetCells.forEach(function (cell, index) {
              return cell.placeBlock(figure.getView().getBlocks()[index]);
            });
            this.clearFilledRowsAndColumns(this.targetCells, figure);
            this.targetCells = null;
            return true;
          }
        }

        return false;
      }
    }, {
      key: "getTargetCellsFor",
      value: function getTargetCellsFor(figure) {
        var _this29 = this;

        if (figure) {
          var baseBlock = figure.getView().getFirstBlock();
          var figureLocalPosition = this.cellsContainer.toLocal(figure.getView().position, figure);
          var targetLocalPosition = new Phaser.Point(figureLocalPosition.x + baseBlock.x, figureLocalPosition.y + baseBlock.y);
          var baseCell = this.findClosestCell(targetLocalPosition);

          if (baseCell) {
            var localCells = figure.getView().getBlocks().map(function (block) {
              return _this29.getCellAt(baseCell.posX + block.posX - baseBlock.posX, baseCell.posY + block.posY - baseBlock.posY);
            });

            if (localCells.every(function (cell) {
              return _this29.isEmpty(cell);
            })) {
              if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
                if (localCells.every(function (cell) {
                  return !!figure.getModel().getCells().find(function (modelCell) {
                    return cell.posX == modelCell.posX + figure.getModel().posX && cell.posY == modelCell.posY + figure.getModel().posY;
                  });
                })) {
                  return localCells;
                } else {
                  return null;
                }
              } else {
                return localCells;
              }
            }
          }
        }

        return null;
      }
    }, {
      key: "getCellUnderPoint",
      value: function getCellUnderPoint(localPoint) {
        return this.level.boardManager.getBoard().getCells().find(function (cell) {
          return Math.abs(cell.x - localPoint.x) < BlockPuzzle.Settings.CELL_WIDTH / 2 && Math.abs(cell.y - localPoint.y) < BlockPuzzle.Settings.CELL_HEIGHT / 2;
        }) || null;
      }
    }, {
      key: "getNumStarsOnTheBoard",
      value: function getNumStarsOnTheBoard() {
        return this.getNotEmptyCells().reduce(function (sum, cell) {
          return sum + (cell.getBlock().hasStar() ? 1 : 0);
        }, 0);
      }
    }, {
      key: "clearFilledRowsAndColumns",
      value: function clearFilledRowsAndColumns(targetCells, figure) {
        var cellsToClear = [];
        var numLines = 0; //check rows

        for (var i = 0; i < this.numRows; i++) {
          if (this.isRowFilled(i)) {
            numLines++;
            cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getRow(i));
          }
        } //check columns


        for (var _i = 0; _i < this.numCols; _i++) {
          if (this.isColumnFilled(_i)) {
            numLines++;
            cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getColumn(_i));
          }
        }

        if (cellsToClear.length > 0) {
          this.level.dataManager.dispatchLinesDestroyed(numLines, cellsToClear.map(function (cell) {
            return {
              x: cell.posX,
              y: cell.posY
            };
          }));

          if (BlockPuzzle.Settings.SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS) {
            cellsToClear.forEach(function (cell) {
              return cell.getBlock().setColor(figure.color);
            });
          }

          var scores = numLines * (numLines + 1) / 2 * BlockPuzzle.Settings.BASIC_LINE_DESTROYING_REWARD + figure.getModel().numCells();
          var explosionStartingPosition = this.findExplosionStartingPosition(cellsToClear, targetCells, BlockPuzzle.Settings.PICK_RANDOM_EXPLOSION_STARTING_POINT);
          var scoresEffectPosition = this.level.boardManager.getBoard().getCellAt(explosionStartingPosition.x, explosionStartingPosition.y).position;
          this.level.serviceManager.inscriptionsService.displayScoresEffect(scores, scoresEffectPosition.x, scoresEffectPosition.y);
          cellsToClear.forEach(function (cell) {
            return cell.destroyBlock(BlockPuzzle.Settings.BLOCK_DESTROY_ANIMATION_DELAY * Math.max(Math.abs(cell.posX - explosionStartingPosition.x), Math.abs(cell.posY - explosionStartingPosition.y)));
          });
          BlockPuzzle.SoundController.instance.playNextLineDestroyingSound(numLines);
          BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.LINES_DESTROYED, numLines);
          BlockPuzzle.APIUtils.instance.trackStatsChange('lines_removed', numLines);
        } else {
          var _scoresEffectPosition = this.level.boardManager.getBoard().cellsContainer.toLocal(figure.getView().parent.toGlobal(figure.getView().position), this.game.world);

          this.level.serviceManager.inscriptionsService.displayScoresEffect(figure.getModel().numCells(), _scoresEffectPosition.x, _scoresEffectPosition.y - 60);
        }

        return numLines;
      }
    }, {
      key: "isRowFilled",
      value: function isRowFilled(rowIndex) {
        return this.getRow(rowIndex).every(function (cell) {
          return cell.isEmpty() == false;
        });
      }
    }, {
      key: "isColumnFilled",
      value: function isColumnFilled(columnIndex) {
        return this.getColumn(columnIndex).every(function (cell) {
          return cell.isEmpty() == false;
        });
      }
    }, {
      key: "getRow",
      value: function getRow(rowIndex) {
        return this.getCells().filter(function (cell) {
          return cell.posX == rowIndex;
        });
      }
    }, {
      key: "getColumn",
      value: function getColumn(colIndex) {
        return this.getCells().filter(function (cell) {
          return cell.posY == colIndex;
        });
      }
    }, {
      key: "findExplosionStartingPosition",
      value: function findExplosionStartingPosition(explodingCells, targetCells, pickRandom) {
        var targetCellsToExplode = explodingCells.filter(function (cell) {
          return targetCells.indexOf(cell) != -1;
        });

        if (targetCellsToExplode.length == 0) {
          /* if there are no target cells among exploding ones, which is basically impossible, but who knows :\ */
          targetCellsToExplode = explodingCells.slice();
        }
        /* find the epicenter of an explosion */


        if (pickRandom) {
          var _Phaser$ArrayUtils$ge = Phaser.ArrayUtils.getRandomItem(targetCellsToExplode),
              posX = _Phaser$ArrayUtils$ge.posX,
              posY = _Phaser$ArrayUtils$ge.posY;

          return {
            x: posX,
            y: posY
          };
        } else {
          var minX = targetCellsToExplode.reduce(function (min, cell) {
            return Math.min(min, cell.posX);
          }, Number.MAX_SAFE_INTEGER);
          var maxX = targetCellsToExplode.reduce(function (max, cell) {
            return Math.max(max, cell.posX);
          }, 0);
          var minY = targetCellsToExplode.reduce(function (min, cell) {
            return Math.min(min, cell.posY);
          }, Number.MAX_SAFE_INTEGER);
          var maxY = targetCellsToExplode.reduce(function (max, cell) {
            return Math.max(max, cell.posY);
          }, 0);
          return {
            x: (minX + maxX) / 2,
            y: (minY + maxY) / 2
          };
        }
      }
    }, {
      key: "getModel",
      value: function getModel() {
        return new BlockPuzzle.BoardModel(this.numCols, this.numRows).parseFromBoard(this);
      }
    }]);

    return Board;
  }(Phaser.Group);

  BlockPuzzle.Board = Board;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Cell =
  /*#__PURE__*/
  function (_Phaser$Group8) {
    _inherits(Cell, _Phaser$Group8);

    function Cell(board, posX, posY) {
      var _this30;

      _classCallCheck(this, Cell);

      _this30 = _possibleConstructorReturn(this, _getPrototypeOf(Cell).call(this, board.game));
      _this30.forceHighlighting = false;
      _this30.board = board;
      _this30.boardManager = board.boardManager;
      _this30.level = _this30.boardManager.level;
      _this30.posX = posX;
      _this30.posY = posY;

      _this30.buildContent();

      return _this30;
    }

    _createClass(Cell, [{
      key: "buildContent",
      value: function buildContent() {
        this.cellSprite = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'cell000' + Math.floor(Math.random() * 3)));
        this.cellSprite.anchor.set(0.5);
        this.highlightSprite = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'block0000'));
        this.highlightSprite.anchor.set(0.5);
        this.highlightSprite.alpha = 0.5;
        this.highlightSprite.visible = false;
        this.block = null;
      }
    }, {
      key: "equalsTo",
      value: function equalsTo(anotherCell) {
        return this.posX === anotherCell.posX && this.posY === anotherCell.posY;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this.block == null;
      }
    }, {
      key: "hasBlock",
      value: function hasBlock() {
        return !this.isEmpty();
      }
    }, {
      key: "getBlock",
      value: function getBlock() {
        return this.block;
      }
    }, {
      key: "disposeBlock",
      value: function disposeBlock(delay, deactivateBeforeDisposing) {
        if (this.hasBlock()) {
          if (deactivateBeforeDisposing) {
            this.getBlock().deactivate(delay);
            this.getBlock().dispose(delay + BlockPuzzle.Settings.BLOCK_DEACTIVATION_TWEEN_DURATION);
          } else {
            this.getBlock().dispose(delay);
          }

          this.block = null;
        }
      }
    }, {
      key: "placeBlock",
      value: function placeBlock(block) {
        var blockLocalPosition = this.board.blocksContainer.toLocal(block.position, block.parent);
        this.block = this.board.blocksContainer.add(block);
        this.block.posX = this.posX;
        this.block.posY = this.posY;
        this.block.position.set(blockLocalPosition.x, blockLocalPosition.y);
        this.game.tweens.removeFrom(this.block, false);
        this.game.tweens.removeFrom(this.block.scale);
        this.game.add.tween(this.block).to({
          x: this.x,
          y: this.y
        }, 130, Phaser.Easing.Circular.Out, true, 0);
        this.game.add.tween(this.block.scale).to({
          x: 1,
          y: 1
        }, 120, Phaser.Easing.Cubic.In, true, 0);
        BlockPuzzle.APIUtils.instance.trackStatsChange('total_blocks_placed', 1);
        BlockPuzzle.APIUtils.instance.trackStatsChange("".concat(BlockPuzzle.BlockColor[block.color].toLowerCase(), "_blocks_placed"), 1);
      }
    }, {
      key: "destroyBlock",
      value: function destroyBlock(delay) {
        if (this.block) {
          BlockPuzzle.APIUtils.instance.trackStatsChange('total_blocks_destroyed', 1);
          BlockPuzzle.APIUtils.instance.trackStatsChange("".concat(BlockPuzzle.BlockColor[this.block.color].toLowerCase(), "_blocks_destroyed"), 1);
          this.block.animateDestroying(this.board.explosionsContainer, delay);
          this.block = null;
        }
      }
    }, {
      key: "applyAlphaHighlighting",
      value: function applyAlphaHighlighting(value) {
        if (this.hasBlock()) {
          this.getBlock().alpha = value ? BlockPuzzle.Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
        } else {
          this.alpha = value ? BlockPuzzle.Settings.POWERUP_HIGHLIGHTING_ALPHA : 1;
        }
      }
    }, {
      key: "resetAlphaHighlighting",
      value: function resetAlphaHighlighting() {
        if (this.hasBlock()) {
          this.getBlock().alpha = 1;
        }

        this.alpha = 1;
      }
    }, {
      key: "showHighlighting",
      value: function showHighlighting(color, forced) {
        if (forced) {
          this.forceHighlighting = true;
        }

        if (this.isEmpty()) {
          this.highlightSprite.frameName = 'block000' + color;
          this.highlightSprite.visible = true;
        } else {
          this.block.setTemporalColor(color);
        }
      }
    }, {
      key: "resetView",
      value: function resetView(force) {
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
    }]);

    return Cell;
  }(Phaser.Group);

  BlockPuzzle.Cell = Cell;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Figure =
  /*#__PURE__*/
  function (_Phaser$Group9) {
    _inherits(Figure, _Phaser$Group9);

    function Figure(figureManager, figureModel, color, barIndex) {
      var _this31;

      _classCallCheck(this, Figure);

      _this31 = _possibleConstructorReturn(this, _getPrototypeOf(Figure).call(this, figureManager.game));
      _this31.figureWidth = 0;
      _this31.figureHeight = 0;
      _this31.applicable = true;
      _this31.figureManager = figureManager;
      _this31.level = _this31.figureManager.level;
      _this31.board = _this31.level.boardManager.getBoard();
      _this31.figureModel = figureModel;
      _this31.figureState = BlockPuzzle.FigureState.INACTIVE;
      _this31.color = color;
      _this31.barIndex = barIndex;
      _this31.figureWidth = figureModel.getWidth();
      _this31.figureHeight = figureModel.getHeight();
      _this31.figureView = _this31.add(new BlockPuzzle.FigureView(_assertThisInitialized(_this31), figureModel));
      /* input handler */

      _this31.inputHandler = _this31.add(_this31.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'blackSquare0000'));

      _this31.inputHandler.anchor.set(0.5);

      _this31.inputHandler.inputEnabled = true;
      _this31.inputHandler.width = 5 * BlockPuzzle.Settings.CELL_WIDTH * BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE;
      _this31.inputHandler.height = 5 * BlockPuzzle.Settings.CELL_HEIGHT * BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE;
      _this31.inputHandler.alpha = 0;

      _this31.inputHandler.events.onInputDown.add(_this31.handleInputDown, _assertThisInitialized(_this31));

      _this31.inputHandler.events.onInputUp.add(_this31.handleInputUp, _assertThisInitialized(_this31));

      return _this31;
    }
    /**
     * PUBLIC
     */


    _createClass(Figure, [{
      key: "setPosition",
      value: function setPosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
      }
    }, {
      key: "getView",
      value: function getView() {
        return this.figureView;
      }
    }, {
      key: "getModel",
      value: function getModel() {
        return this.figureModel;
      }
    }, {
      key: "playAppearingTween",
      value: function playAppearingTween(delay) {
        this.figureView.playAppearingTween(delay);
      }
    }, {
      key: "pickUp",
      value: function pickUp() {
        this.figureState = BlockPuzzle.FigureState.DRAGGING;

        if (this.parent) {
          this.parent.setChildIndex(this, this.parent.children.length - 1);
        }

        this.game.add.tween(this.figureView).to(this.level.serviceManager.layoutService.getFigureDraggingDelta(this.barIndex), BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Circular.Out, true);
        this.figureView.tweenScale(BlockPuzzle.Settings.DRAGGING_FIGURE_SCALE, true, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.25, 1 / this.scale.x * this.board.getScale());
        this.figureView.getBlocks().forEach(function (block) {
          return block.enableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION * 1.5);
        });
        BlockPuzzle.SoundController.instance.playFigurePickupSound();
      }
    }, {
      key: "putDown",
      value: function putDown() {
        this.figureState = BlockPuzzle.FigureState.PLACED;
        this.figureView.getBlocks().forEach(function (block) {
          return block.disableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION / 2);
        });
        BlockPuzzle.SoundController.instance.playFigurePlaceSound();
      }
    }, {
      key: "release",
      value: function release() {
        this.figureState = BlockPuzzle.FigureState.INACTIVE;
        this.game.add.tween(this.figureView).to({
          x: 0,
          y: 0
        }, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true);
        this.figureView.tweenScale(BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE, false, BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION);
        this.figureView.getBlocks().forEach(function (block) {
          return block.disableGlow(BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION);
        });
        BlockPuzzle.SoundController.instance.playFigureFailSound();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        var _this32 = this;

        this.game.add.tween(this.figureView).to(this.level.serviceManager.layoutService.getFigureDisposingTweenParams(), BlockPuzzle.Settings.FIGURE_DISPOSING_TWEEN_DURATION, Phaser.Easing.Sinusoidal.Out, true).onComplete.add(function () {
          return _this32.destroy();
        });
      }
    }, {
      key: "setApplicable",
      value: function setApplicable(value) {
        if (value != this.applicable) {
          this.applicable = value;
          this.game.tweens.removeFrom(this, false);
          this.game.add.tween(this).to({
            alpha: value ? 1 : BlockPuzzle.Settings.NOT_APPLICABLE_FIGURE_APLHA
          }, 350, Phaser.Easing.Linear.None, true, 450);
        }
      }
      /**
       * INPUT HANDLERS
       */

    }, {
      key: "handleInputDown",
      value: function handleInputDown() {
        if (this.figureView.isReady) {
          this.figureManager.handleFigureInputDown(this);
        }
      }
    }, {
      key: "handleInputUp",
      value: function handleInputUp() {
        if (this.figureView.isReady) {
          this.figureManager.handleFigureInputUp(this);
        }
      }
      /**
       * DESTROY
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.inputHandler.events.onInputDown.remove(this.handleInputDown, this);
        this.inputHandler.events.onInputUp.remove(this.handleInputUp, this);

        _get(_getPrototypeOf(Figure.prototype), "destroy", this).call(this);

        this.figureView = null;
        this.inputHandler = null;
      }
    }]);

    return Figure;
  }(Phaser.Group);

  BlockPuzzle.Figure = Figure;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractManager =
  /*#__PURE__*/
  function (_Phaser$Group10) {
    _inherits(AbstractManager, _Phaser$Group10);

    function AbstractManager(level) {
      var _this33;

      _classCallCheck(this, AbstractManager);

      _this33 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractManager).call(this, level.game));
      _this33.level = level;
      return _this33;
    }

    _createClass(AbstractManager, [{
      key: "resize",
      value: function resize() {
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
    }]);

    return AbstractManager;
  }(Phaser.Group);

  BlockPuzzle.AbstractManager = AbstractManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BoardManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract) {
    _inherits(BoardManager, _BlockPuzzle$Abstract);

    function BoardManager(level) {
      var _this34;

      _classCallCheck(this, BoardManager);

      _this34 = _possibleConstructorReturn(this, _getPrototypeOf(BoardManager).call(this, level));
      _this34.board = _this34.add(new BlockPuzzle.Board(_assertThisInitialized(_this34), BlockPuzzle.Settings.BOARD_ROWS, BlockPuzzle.Settings.BOARD_COLS));
      return _this34;
    }

    _createClass(BoardManager, [{
      key: "getBoard",
      value: function getBoard() {
        return this.board;
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        this.fillAvailableSpace();
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        this.fillAvailableSpace();
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        this.fillAvailableSpace();
      }
    }, {
      key: "getOriginalBounds",
      value: function getOriginalBounds(includePadding) {
        var boardWidth = (this.getBoard().numCols + (includePadding ? 0.5 : 0)) * BlockPuzzle.Settings.CELL_WIDTH;
        var boardHeight = (this.getBoard().numRows + (includePadding ? 0.5 : 0)) * BlockPuzzle.Settings.CELL_HEIGHT;
        return new Phaser.Rectangle(-boardWidth / 2, -boardHeight / 2, boardWidth, boardHeight);
      }
    }, {
      key: "getBoardBounds",
      value: function getBoardBounds(targetCoordinateSpace) {
        var includePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var originalBounds = this.getOriginalBounds(includePadding);
        var topLeft = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x, originalBounds.y), this.level.boardManager.getBoard().cellsContainer);
        var bottomRight = targetCoordinateSpace.toLocal(new Phaser.Point(originalBounds.x + originalBounds.width, originalBounds.y + originalBounds.height), this.level.boardManager.getBoard().cellsContainer);
        return new Phaser.Rectangle(topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y);
      }
    }, {
      key: "fillAvailableSpace",
      value: function fillAvailableSpace() {
        var boardBoundsRect = this.getOriginalBounds(true);
        var availableBounds = this.level.serviceManager.layoutService.getAvailableBoardBounds();
        /* update position and scale */

        this.board.position.set(availableBounds.x, availableBounds.y);
        this.board.scale.set(Math.min(availableBounds.width / boardBoundsRect.width, availableBounds.height / boardBoundsRect.height));
      }
    }]);

    return BoardManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.BoardManager = BoardManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var DataManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract2) {
    _inherits(DataManager, _BlockPuzzle$Abstract2);

    function DataManager(level) {
      var _this35;

      _classCallCheck(this, DataManager);

      _this35 = _possibleConstructorReturn(this, _getPrototypeOf(DataManager).call(this, level));
      _this35.numMoves = 0;

      _this35.initData();

      return _this35;
    }

    _createClass(DataManager, [{
      key: "initData",
      value: function initData() {
        this.numMoves = 0;
      }
      /**
       * PUBLIC
       */

    }, {
      key: "moveFinished",
      value: function moveFinished() {
        this.numMoves++;
        this.level.eventManager.onMoveFinished.dispatch(this.numMoves);
      }
    }, {
      key: "dispatchLinesDestroyed",
      value: function dispatchLinesDestroyed(destroyedLines, cellPositions) {
        this.level.eventManager.onLinesDestroyed.dispatch(destroyedLines, cellPositions);
      }
    }, {
      key: "getMaxMistakeProbability",
      value: function getMaxMistakeProbability() {
        return Phaser.Math.clamp(BlockPuzzle.Settings.MISTAKE_MAX_PROBABILITY + BlockPuzzle.Settings.MISTAKE_MAX_PROBABILITY * (BlockPuzzle.Settings.DIFFICULTY_FACTOR - 1) * 0.2 + this.numMoves * 0.001, 0, 0.4);
      }
    }, {
      key: "getMaxMistakeProbabilityStep",
      value: function getMaxMistakeProbabilityStep() {
        return this.getMaxMistakeProbability() / 5;
      }
    }, {
      key: "getMistakeProbabilityStepSpeed",
      value: function getMistakeProbabilityStepSpeed() {
        return BlockPuzzle.Settings.MISTAKE_PROBABILITY_STEP_SPEED + BlockPuzzle.Settings.MISTAKE_PROBABILITY_STEP_SPEED * (BlockPuzzle.Settings.DIFFICULTY_FACTOR - 1) * 0.15;
      }
      /**
       * PRIVATE
       */

      /**
       * INHERITED
       */

    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {}
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {}
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {}
    }]);

    return DataManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.DataManager = DataManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var EventManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract3) {
    _inherits(EventManager, _BlockPuzzle$Abstract3);

    function EventManager(level) {
      var _this36;

      _classCallCheck(this, EventManager);

      _this36 = _possibleConstructorReturn(this, _getPrototypeOf(EventManager).call(this, level));

      _this36.buildSignals();

      return _this36;
    }

    _createClass(EventManager, [{
      key: "buildSignals",
      value: function buildSignals() {
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

    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {}
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {}
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {}
    }, {
      key: "destroy",
      value: function destroy() {
        this.onBoardCreated.dispose();
        this.onRoundFinished.dispose();
        this.onMoveFinished.dispose();
        this.onReviveApplied.dispose();
        this.onReviveFailed.dispose();
        this.onLinesDestroyed.dispose();
        this.onPowerupUsageTimerExceeded.dispose();
        this.onPowerupApplied.dispose();

        _get(_getPrototypeOf(EventManager.prototype), "destroy", this).call(this);
      }
    }]);

    return EventManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.EventManager = EventManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var FigureManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract4) {
    _inherits(FigureManager, _BlockPuzzle$Abstract4);

    function FigureManager(level) {
      var _this37;

      _classCallCheck(this, FigureManager);

      _this37 = _possibleConstructorReturn(this, _getPrototypeOf(FigureManager).call(this, level));
      _this37.figures = [];
      _this37.activeFigure = null;
      _this37.activeFigurePointerDelta = null;
      _this37.currentMistakeStep = 0;
      _this37.currentMistakeProbability = 0;
      _this37.mistakeImmunityCounter = 0;
      _this37.initialFigureScale = 1;
      _this37.initialFigurePositions = [new Phaser.Point(0, 0), new Phaser.Point(0, 0), new Phaser.Point(0, 0)];
      _this37.figureService = _this37.level.serviceManager.figureService;
      _this37.currentMistakeStep = BlockPuzzle.Settings.MISTAKE_PROBABILITY_BASIC_STEP;
      _this37.mistakeImmunityCounter = _this37.game.rnd.integerInRange(BlockPuzzle.Settings.MISTAKE_IMMUNITY_MIN_MOVES, BlockPuzzle.Settings.MISTAKE_IMMUNITY_MAX_MOVES);

      _this37.buildContent();

      _this37.resize();

      return _this37;
    }

    _createClass(FigureManager, [{
      key: "buildContent",
      value: function buildContent() {
        this.figuresContainer = this.add(this.game.make.group());
        this.createFigures(false);
      }
    }, {
      key: "getPointerLocalPosition",
      value: function getPointerLocalPosition() {
        var _this$figuresContaine = this.figuresContainer.toLocal(this.game.input.activePointer.position, this.game.world),
            x = _this$figuresContaine.x,
            y = _this$figuresContaine.y;

        return new Phaser.Point(x, y);
      }
    }, {
      key: "getFigureInitialPosition",
      value: function getFigureInitialPosition(figure) {
        return this.initialFigurePositions[figure.barIndex];
      }
    }, {
      key: "getFiguresLeft",
      value: function getFiguresLeft() {
        return this.figures.filter(function (figure) {
          return figure != null;
        }).length;
      }
    }, {
      key: "createFigures",
      value: function createFigures(enableMistakes) {
        var _this38 = this;

        var generatedFigureModels = this.figureService.getNextFiguresSet(this.level.boardManager.getBoard().getModel());

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

        generatedFigureModels.forEach(function (model, index) {
          return _this38.addFigure(new BlockPuzzle.Figure(_this38, model, _this38.figureService.getRandomColor(), index), (index + 1) * BlockPuzzle.Settings.FIGURE_APPEARING_DELAY + 100);
        });
        this.alignFigures();
      }
      /**
       * INHERITED
       */

    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(FigureManager.prototype), "update", this).call(this);

        if (this.activeFigure) {
          this.activeFigure.position.copyFrom(this.getPointerLocalPosition().subtract(this.activeFigurePointerDelta.x, this.activeFigurePointerDelta.y));
          this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(this.activeFigure);
        } else {
          this.level.boardManager.getBoard().dispatchFigureIsBeingDragged(null);
        }
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        var availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
        var targetCellWidth = Math.min(availableBounds.width / 6, availableBounds.height / (3 * 6));
        var figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
        /* remember initial positions and scale */

        this.initialFigurePositions.forEach(function (position, index) {
          return position.set(0, (index - 1) * targetCellWidth * 6);
        });
        this.initialFigureScale = figureScale;
        this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
        this.alignFigures();
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        var availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
        var targetCellWidth = Math.min(availableBounds.width / 6, availableBounds.height / (3 * 6));
        var figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
        /* remember initial positions and scale */

        this.initialFigurePositions.forEach(function (position, index) {
          return position.set(0, (index - 1) * targetCellWidth * 6);
        });
        this.initialFigureScale = figureScale;
        this.figuresContainer.position.set(availableBounds.x, availableBounds.y);
        this.alignFigures();
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        var availableBounds = this.level.serviceManager.layoutService.getAvailableFiguresPanelBounds();
        var targetCellWidth = Math.min(availableBounds.width / (3 * 6), availableBounds.height / 6);
        var figureScale = targetCellWidth / BlockPuzzle.Settings.CELL_WIDTH;
        /* remember initial positions and scale */

        this.initialFigurePositions.forEach(function (position, index) {
          return position.set((index - 1) * targetCellWidth * 6, 0);
        });
        this.initialFigureScale = figureScale;
        this.figuresContainer.position.set(availableBounds.x, availableBounds.y - availableBounds.height * 0.05);
        this.alignFigures();
      }
    }, {
      key: "getOriginalBounds",
      value: function getOriginalBounds() {
        var bounds = this.figuresContainer.getBounds(this.figuresContainer.parent);
        this.add(this.game.make.graphics(bounds.x, bounds.y).beginFill(0xFFFFFF, 0.5).drawRect(0, 0, bounds.width, bounds.height).endFill());
        return new Phaser.Rectangle(bounds.x, bounds.y, bounds.width, bounds.height);
      }
    }, {
      key: "alignFigures",
      value: function alignFigures() {
        var _this39 = this;

        this.figures.forEach(function (figure) {
          if (figure) {
            _this39.game.tweens.removeFrom(figure, false);

            figure.scale.set(_this39.initialFigureScale / BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE);
            figure.position.copyFrom(_this39.getFigureInitialPosition(figure));
          }
        });
      }
      /**
       * PUBLIC
       */

    }, {
      key: "getFigures",
      value: function getFigures() {
        return this.figures;
      }
    }, {
      key: "addFigure",
      value: function addFigure(figure, delay) {
        this.figures[figure.barIndex] = this.figuresContainer.add(figure);
        figure.position.copyFrom(this.getFigureInitialPosition(figure));
        figure.playAppearingTween(delay);
      }
    }, {
      key: "removeFigure",
      value: function removeFigure(figure) {
        if (this.figures.indexOf(figure) != -1) {
          this.figures[this.figures.indexOf(figure)] = null;
          figure.destroy();
        }

        if (this.getFiguresLeft() == 0) {
          this.level.eventManager.onRoundFinished.dispatch();
          this.createFigures(true);
        }
      }
    }, {
      key: "regenerateFigures",
      value: function regenerateFigures() {
        for (var i = 0; i < this.figures.length; i++) {
          if (this.figures[i]) {
            this.figures[i].dispose();
          }

          this.figures[i] = null;
        }

        this.createFigures(false);
      }
    }, {
      key: "isNextMovePossible",
      value: function isNextMovePossible() {
        var _this40 = this;

        var figures = this.figures.filter(function (figure) {
          return !!figure;
        }).sort(function (a, b) {
          return a.getModel().numCells() - b.getModel().numCells();
        });
        var applicableFiguresAmount = 0;
        this.figures.forEach(function (figure) {
          if (figure) {
            var isApplicable = _this40.figureService.hasAvailableSpaceForFigure(figure, _this40.level.boardManager.getBoard().getModel());

            figure.setApplicable(isApplicable);

            if (isApplicable) {
              applicableFiguresAmount += 1;
            }
          }
        });
        return applicableFiguresAmount > 0;
      }
    }, {
      key: "updateFiguresApplicability",
      value: function updateFiguresApplicability() {
        var _this41 = this;

        this.figures.forEach(function (figure) {
          return figure && figure.setApplicable(_this41.figureService.hasAvailableSpaceForFigure(figure, _this41.level.boardManager.getBoard().getModel()));
        });
      }
    }, {
      key: "handleFigureInputDown",
      value: function handleFigureInputDown(figure) {
        if (this.level.gameStateManager.isGameActive() && !this.activeFigure && figure.figureState == BlockPuzzle.FigureState.INACTIVE) {
          if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED && this.level.tutorialManager.getActiveFigure() != figure) {
            return;
          }

          this.activeFigure = figure;
          this.activeFigure.pickUp();
          this.activeFigurePointerDelta = this.getPointerLocalPosition().subtract(this.activeFigure.x, this.activeFigure.y);
        }
      }
    }, {
      key: "handleFigureInputUp",
      value: function handleFigureInputUp(figure) {
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
          } else {
            var returnDuration = BlockPuzzle.Settings.FIGURE_PICK_UP_TWEEN_DURATION;
            this.game.add.tween(this.activeFigure).to({
              x: this.getFigureInitialPosition(figure).x,
              y: this.getFigureInitialPosition(figure).y
            }, returnDuration, Phaser.Easing.Linear.None, true);
            this.activeFigure.release();
          }
        }

        this.activeFigure = null;
        this.activeFigurePointerDelta = null;
      }
    }]);

    return FigureManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.FigureManager = FigureManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var GameStateManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract5) {
    _inherits(GameStateManager, _BlockPuzzle$Abstract5);

    function GameStateManager(level) {
      var _this42;

      _classCallCheck(this, GameStateManager);

      _this42 = _possibleConstructorReturn(this, _getPrototypeOf(GameStateManager).call(this, level));
      _this42.started = false;
      _this42.finished = false;
      _this42.paused = false;
      _this42.reviveAvailable = true;
      _this42.reviveUsed = false;
      _this42.reviveTimer = 0;
      _this42.resultsTimer = 0;
      _this42.reviveAvailable = true;

      _this42.level.eventManager.onBoardCreated.add(_this42.dispatchBoardCreated, _assertThisInitialized(_this42));

      _this42.level.eventManager.onMoveFinished.add(_this42.dispatchMoveFinished, _assertThisInitialized(_this42));

      _this42.level.eventManager.onPowerupUsageTimerExceeded.add(_this42.dispatchPowerupUsageTimerExceeded, _assertThisInitialized(_this42));

      _this42.level.eventManager.onPowerupApplied.add(_this42.dispatchPowerupApplied, _assertThisInitialized(_this42));

      _this42.level.eventManager.onReviveApplied.add(_this42.reviveApplied, _assertThisInitialized(_this42));

      _this42.level.eventManager.onReviveFailed.add(_this42.reviveFailed, _assertThisInitialized(_this42));

      return _this42;
    }

    _createClass(GameStateManager, [{
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(GameStateManager.prototype), "update", this).call(this);

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

    }, {
      key: "isGameActive",
      value: function isGameActive() {
        return this.started && !this.paused && !this.finished;
      }
    }, {
      key: "isStarted",
      value: function isStarted() {
        return this.started;
      }
    }, {
      key: "isPaused",
      value: function isPaused() {
        return this.paused;
      }
    }, {
      key: "isFinished",
      value: function isFinished() {
        return this.finished;
      }
      /**
       * PRIVATE
       */

    }, {
      key: "dispatchBoardCreated",
      value: function dispatchBoardCreated() {
        this.started = true;
      }
    }, {
      key: "dispatchMoveFinished",
      value: function dispatchMoveFinished() {
        if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
          if (BlockPuzzle.PowerupManager.instance.hasBoughtPowerups()) {
            this.level.uiManager.powerupContainer.startCountdown();
          } else {
            this.finishGame();
          }
        }
      }
    }, {
      key: "dispatchPowerupUsageTimerExceeded",
      value: function dispatchPowerupUsageTimerExceeded() {
        if (!this.finished && !this.level.figureManager.isNextMovePossible()) {
          this.finishGame();
        }
      }
    }, {
      key: "dispatchPowerupApplied",
      value: function dispatchPowerupApplied() {
        if (!this.finished) {
          if (!this.level.figureManager.isNextMovePossible()) {
            if (BlockPuzzle.PowerupManager.instance.hasBoughtPowerups()) {
              this.level.uiManager.powerupContainer.startCountdown();
            } else {
              this.finishGame();
            }
          }
        }
      }
    }, {
      key: "finishGame",
      value: function finishGame() {
        this.finished = true;
        this.reviveAvailable = this.reviveAvailable && window.famobi.hasRewardedAd();

        if (this.reviveAvailable) {
          this.reviveAvailable = false;
          this.reviveTimer = BlockPuzzle.Settings.REVIVE_WINDOW_TIMER;
          this.resultsTimer = 0;
          this.level.boardManager.getBoard().deactivate(200);
        } else {
          this.level.uiManager.levelFinished();
          this.reviveTimer = 0;
          this.resultsTimer = BlockPuzzle.Settings.RESULTS_WINDOW_TIMER_WITHOUT_REVIVE;
          this.level.boardManager.getBoard().disposeBlocks(250, true);
        }
      }
    }, {
      key: "reviveApplied",
      value: function reviveApplied() {
        BlockPuzzle.Analytics.instance.updateLevelData({
          revives: 1
        });
        this.reviveUsed = true;
        this.finished = false;
        this.reviveTimer = 0;
        this.resultsTimer = 0;
        this.level.figureManager.regenerateFigures();
        this.level.boardManager.getBoard().activate();
      }
    }, {
      key: "reviveFailed",
      value: function reviveFailed() {
        this.finished = true;
        this.reviveTimer = 0;
        this.resultsTimer = BlockPuzzle.Settings.RESULTS_WINDOW_TIMER;
        this.level.boardManager.getBoard().disposeBlocks(250, false);
        this.level.uiManager.levelFinished();
      }
      /**
       * INHERITED
       */

    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {}
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {}
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {}
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(GameStateManager.prototype), "destroy", this).call(this);
      }
    }]);

    return GameStateManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.GameStateManager = GameStateManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ServiceManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract6) {
    _inherits(ServiceManager, _BlockPuzzle$Abstract6);

    function ServiceManager(level) {
      var _this43;

      _classCallCheck(this, ServiceManager);

      _this43 = _possibleConstructorReturn(this, _getPrototypeOf(ServiceManager).call(this, level));

      _this43.initServices();

      return _this43;
    }

    _createClass(ServiceManager, [{
      key: "initServices",
      value: function initServices() {
        this.layoutService = new BlockPuzzle.LayoutService(this);
        this.figureService = new BlockPuzzle.FigureService(this);
        this.starsService = new BlockPuzzle.StarsService(this);
        this.inscriptionsService = new BlockPuzzle.InscriptionsService(this);
      }
      /**
       * INHERITED
       */

    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {}
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {}
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {}
    }]);

    return ServiceManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.ServiceManager = ServiceManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var TutorialManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract7) {
    _inherits(TutorialManager, _BlockPuzzle$Abstract7);

    function TutorialManager(level) {
      var _this44;

      _classCallCheck(this, TutorialManager);

      _this44 = _possibleConstructorReturn(this, _getPrototypeOf(TutorialManager).call(this, level));
      _this44.isManualTutorialActive = BlockPuzzle.Settings.TUTORIAL_COMPLETED;
      _this44.isInitialized = false;
      _this44.activeFigure = null;

      _this44.buildContent();

      _this44.level.eventManager.onBoardCreated.add(_this44.handleBoardCreated, _assertThisInitialized(_this44));

      _this44.level.eventManager.onMoveFinished.add(_this44.handleFigurePlaced, _assertThisInitialized(_this44));

      _this44.level.eventManager.onRoundFinished.add(_this44.handleRoundFinished, _assertThisInitialized(_this44));

      _this44.visible = false;
      return _this44;
    }

    _createClass(TutorialManager, [{
      key: "start",
      value: function start() {
        this.isInitialized = true;
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        this.startHandAnimation();
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        this.startHandAnimation();
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        this.startHandAnimation();
      }
    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(TutorialManager.prototype), "update", this).call(this);
      }
    }, {
      key: "getActiveFigure",
      value: function getActiveFigure() {
        return this.activeFigure;
      }
    }, {
      key: "restartTutorial",
      value: function restartTutorial() {
        this.isManualTutorialActive = true;
        BlockPuzzle.Settings.TUTORIAL_COMPLETED = false;
        this.startHandAnimation();
      }
      /**
       * PRIVATE
       */

    }, {
      key: "buildContent",
      value: function buildContent() {
        this.tutorialHand = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'tutorialHand0000'));
        this.tutorialHand.anchor.set(0.4, 0);
        this.visible = false;
      }
    }, {
      key: "startHandAnimation",
      value: function startHandAnimation() {
        var _this45 = this;

        if (this.isInitialized && !BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
          var board = this.level.boardManager.getBoard();
          this.level.boardManager.getBoard().getCells().forEach(function (cell) {
            return cell.resetView(true);
          });
          this.visible = true;
          var currentFigure = this.level.figureManager.getFigures().slice().filter(function (f) {
            return !!f;
          }).sort(function (a, b) {
            return a.getModel().numCells() - b.getModel().numCells();
          })[0];

          if (currentFigure) {
            this.activeFigure = currentFigure;
            var figureLocalPosition = this.toLocal(currentFigure.getView().position, currentFigure.getView().parent);
            var targetCell = this.level.boardManager.getBoard().getCellAt(currentFigure.getModel().posX, currentFigure.getModel().posY);

            if (!targetCell) {
              var figurePosition = this.level.serviceManager.figureService.getRandomPositionForFigure(currentFigure, board.getModel());

              if (figurePosition) {
                currentFigure.getModel().posX = figurePosition.x;
                currentFigure.getModel().posY = figurePosition.y;
                targetCell = this.level.boardManager.getBoard().getCellAt(figurePosition.x, figurePosition.y);
              } else {
                this.finishTutorial();
                return;
              }
            }

            var targetCellLocalPosition = this.toLocal(targetCell.position, targetCell.parent);
            this.game.tweens.removeFrom(this.tutorialHand);
            this.tutorialHand.position.set(figureLocalPosition.x, figureLocalPosition.y);
            this.tutorialHand.alpha = 0;
            /* tweens */

            var preparingTween = this.game.add.tween(this.tutorialHand).to({
              alpha: 1,
              x: figureLocalPosition.x,
              y: figureLocalPosition.y
            }, 500, Phaser.Easing.Sinusoidal.Out, false);
            var movingTween = this.game.add.tween(this.tutorialHand).to({
              x: targetCellLocalPosition.x + (currentFigure.getModel().getCenterX() - 0.5) * BlockPuzzle.Settings.CELL_WIDTH * board.getScale(),
              y: targetCellLocalPosition.y + (currentFigure.getModel().getCenterY() - 0.5) * BlockPuzzle.Settings.CELL_HEIGHT * board.getScale()
            }, 1200, Phaser.Easing.Sinusoidal.InOut, false, 0, 0, false);
            var finishingTween = this.game.add.tween(this.tutorialHand).to({
              alpha: 0
            }, 750, Phaser.Easing.Exponential.In, false);
            var returningTween = this.game.add.tween(this.tutorialHand).to({
              x: figureLocalPosition.x,
              y: figureLocalPosition.y
            }, 10, Phaser.Easing.Linear.None, false);
            preparingTween.onComplete.add(function () {
              return _this45.tutorialHand.frameName = 'tutorialHand0001';
            });
            finishingTween.onStart.add(function () {
              return _this45.tutorialHand.frameName = 'tutorialHand0000';
            });
            preparingTween.chain(movingTween);
            movingTween.chain(finishingTween);
            finishingTween.chain(returningTween);
            returningTween.chain(preparingTween);
            preparingTween.start();
            currentFigure.getModel().getCells().forEach(function (cell) {
              return board.getCellAt(targetCell.posX + cell.x, targetCell.posY + cell.y).showHighlighting(currentFigure.color, true);
            });
          } else {
            this.activeFigure = null;
          }
        }
      }
    }, {
      key: "handleFigurePlaced",
      value: function handleFigurePlaced() {
        if (this.isInitialized && BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
          return;
        }
        /* remove all tutorial highlightings */


        this.level.boardManager.getBoard().getCells().forEach(function (cell) {
          return cell.resetView(true);
        });

        if (this.isManualTutorialActive) {
          return this.finishTutorial();
        }
        /* show next figure */


        this.startHandAnimation();
      }
    }, {
      key: "handleRoundFinished",
      value: function handleRoundFinished() {
        this.finishTutorial();
      }
    }, {
      key: "finishTutorial",
      value: function finishTutorial() {
        if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
          this.visible = false;
          this.activeFigure = null;
          BlockPuzzle.Settings.TUTORIAL_COMPLETED = true;
          BlockPuzzle.LocalStorageController.instance.save();

          if (BlockPuzzle.Settings.ENABLE_API) {
            window["famobi_analytics"].trackEvent("EVENT_TUTORIALCOMPLETED");
          }

          this.level.boardManager.getBoard().getCells().forEach(function (cell) {
            return cell.resetView(true);
          });
        }
      }
      /**
       * EVENT LISTENERS
       */

    }, {
      key: "handleBoardCreated",
      value: function handleBoardCreated() {
        this.isInitialized = true;
        this.startHandAnimation();
      }
    }]);

    return TutorialManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.TutorialManager = TutorialManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var UIManager =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract8) {
    _inherits(UIManager, _BlockPuzzle$Abstract8);

    function UIManager(level) {
      var _this46;

      _classCallCheck(this, UIManager);

      _this46 = _possibleConstructorReturn(this, _getPrototypeOf(UIManager).call(this, level));

      _this46.buildContent();

      return _this46;
    }

    _createClass(UIManager, [{
      key: "buildContent",
      value: function buildContent() {
        this.famobiLogo = this.add(this.game.make.image(0, 0, 'famobi-logo'));
        this.famobiLogo.anchor.set(1, 1);
        this.famobiLogo.scale.set(0.2);
        this.famobiLogo.alpha = 0.85;
        this.copyrightText = this.add(BlockPuzzle.TextUtils.getText(window.famobi.hasFeature("credits") ? '© Famobi' : '', 0, 0, 28, '#FFFFFF', 'Russo One'));
        this.copyrightText.alpha = 0.85;
        this.buttonAchievements = this.add(new BlockPuzzle.ButtonAchievements(this.level));
        if(window.famobi.audio == undefined || window.famobi.audio.hasControls()) {
          this.buttonSettings = this.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonSettings', 0, 0, 1, this.settingsClicked, this));
        }
        this.topContainer = this.add(this.game.make.group());
        this.scoreCounter = this.topContainer.add(new BlockPuzzle.ScoreCounter(this));
        this.starsCounter = this.topContainer.add(new BlockPuzzle.StarsCounter(this));
        this.multiplierBar = this.topContainer.add(new BlockPuzzle.MultiplierBar(this));
        this.powerupContainer = this.add(new BlockPuzzle.PowerupContainer(this));
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        var availableBounds = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();
        this.buttonAchievements.position.set(this.level.windowBounds.left + availableBounds.width / 2, this.level.windowBounds.top + 70);
        if(this.buttonSettings != null) {
          this.buttonSettings.position.set(this.level.windowBounds.right - availableBounds.width / 2, this.level.windowBounds.top + 65);
        }
        this.scoreCounter.position.set(-65, -50);
        this.multiplierBar.position.set(-65, -50);
        this.starsCounter.position.set(-65, 50);
        this.buttonAchievements["setScale"](1.18);
        if(this.buttonSettings != null) {
          this.buttonSettings["setScale"](1.18);
        }
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
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        this.buttonAchievements.position.set(this.level.windowBounds.left + 95, this.level.windowBounds.top + 60);
        if(this.buttonSettings != null) {
          this.buttonSettings.position.set(this.level.windowBounds.right - 88, this.level.windowBounds.top + 60);
        }
        this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 55));
        this.topContainer.scale.set(0.95);
        this.scoreCounter.position.set(-this.level.windowBounds.width * 0.22, 0);
        this.multiplierBar.position.set(-this.level.windowBounds.width * 0.22, 0);
        this.starsCounter.position.set(this.level.windowBounds.width * 0.06, 0);
        this.buttonAchievements["setScale"](1.1);
        if(this.buttonSettings != null) {
          this.buttonSettings["setScale"](1.1);
        }
        this.buttonAchievements.resizeSquared();
        this.powerupContainer.resize();
        this.copyrightText.anchor.set(1, 1);
        this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 1, -5, 0));
        this.famobiLogo.visible = false;
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        var availableBounds = this.level.serviceManager.layoutService.getAvailableUIContainerBounds();
        this.buttonAchievements.position.set(this.level.windowBounds.left + 65, this.level.windowBounds.down - 65);
        if(this.buttonSettings != null) {
          this.buttonSettings.position.set(this.level.windowBounds.right - 65, this.level.windowBounds.down - 65);
        }
        this.topContainer.position.copyFrom(this.level.windowBounds.getPosition(0.5, 0, 0, 0));
        this.topContainer.y = availableBounds.y;
        this.topContainer.scale.set(1);
        this.scoreCounter.position.set(-this.level.windowBounds.width * 0.3, 0);
        this.multiplierBar.position.set(-this.level.windowBounds.width * 0.3, 0);
        this.starsCounter.position.set(this.level.windowBounds.width * 0.1, 0);
        this.buttonAchievements["setScale"](1.1);
        if(this.buttonSettings != null) {
          this.buttonSettings["setScale"](1.1);
        }
        this.buttonAchievements.resizePortrait();
        this.powerupContainer.resize();
        this.famobiLogo.visible = false;
        this.famobiLogo.anchor.set(1, 0);
        this.famobiLogo.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -3, -1));
        this.copyrightText.anchor.set(1, 0);
        this.copyrightText.position.copyFrom(this.level.windowBounds.getPosition(1, 0, -5, 1));
      }
    }, {
      key: "levelFinished",
      value: function levelFinished() {
        this.powerupContainer.hidePowerups();
      }
      /**
       * EVENT LISTENERS
       */

    }, {
      key: "settingsClicked",
      value: function settingsClicked() {
        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SETTINGS);
        }

        BlockPuzzle.WindowManager.instance.showSettings();
      }
    }]);

    return UIManager;
  }(BlockPuzzle.AbstractManager);

  BlockPuzzle.UIManager = UIManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BoardModel =
  /*#__PURE__*/
  function () {
    function BoardModel(numCols, numRows) {
      _classCallCheck(this, BoardModel);

      this.cleanedCells = 0;
      this.numCols = numCols;
      this.numRows = numRows;
    }

    _createClass(BoardModel, [{
      key: "parseFromBoard",
      value: function parseFromBoard(board) {
        this.cells = [];

        for (var i = 0; i < this.numCols; i++) {
          this.cells[i] = [];

          for (var j = 0; j < this.numRows; j++) {
            this.cells[i][j] = BlockPuzzle.CellModelState.CELL_EMPTY;
          }
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = board.getCells()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var cell = _step.value;
            this.cells[cell.posX][cell.posY] = cell.isEmpty() ? BlockPuzzle.CellModelState.CELL_EMPTY : BlockPuzzle.CellModelState.CELL_BUSY;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return this;
      }
    }, {
      key: "getCopy",
      value: function getCopy() {
        return new BoardModel(this.numCols, this.numRows).copyFrom(this);
      }
    }, {
      key: "copyFrom",
      value: function copyFrom(another) {
        this.cleanedCells = another.cleanedCells;
        this.cells = another.cells.map(function (col) {
          return col.slice();
        });
        return this;
      }
    }, {
      key: "getCellStateAt",
      value: function getCellStateAt(x, y) {
        return x >= 0 && x < this.numCols && y >= 0 && y < this.numRows ? this.cells[x][y] : null;
      }
    }, {
      key: "setCellStateAt",
      value: function setCellStateAt(state, x, y) {
        if (x >= 0 && x < this.numCols && y >= 0 && y < this.numRows) {
          this.cells[x][y] = state;
        }
      }
    }, {
      key: "placeFigure",
      value: function placeFigure(preset, position) {
        var _this47 = this;

        if (this.couldBePlaced(preset, position)) {
          preset.forEach(function (cellModel) {
            return _this47.setCellStateAt(BlockPuzzle.CellModelState.CELL_BUSY, position.x + cellModel.x, position.y + cellModel.y);
          });
          this.clearFilledRowsAndColumns();
        }
      }
    }, {
      key: "couldBePlaced",
      value: function couldBePlaced(figure, position) {
        var _this48 = this;

        return figure.map(function (cellModel) {
          return _this48.getCellStateAt(position.x + cellModel.x, position.y + cellModel.y);
        }).every(function (cellStatus) {
          return cellStatus == BlockPuzzle.CellModelState.CELL_EMPTY;
        });
      }
    }, {
      key: "print",
      value: function print() {
        var _this49 = this;

        console.log(this.cells.map(function (col, colIdx) {
          return col.map(function (item, rowIdx) {
            return _this49.cells[rowIdx][colIdx];
          });
        }));
      }
    }, {
      key: "equals",
      value: function equals(another) {
        if (this.numRows != another.numRows || this.numCols != another.numCols) {
          return false;
        }

        for (var i = 0; i < this.numCols; i++) {
          for (var j = 0; j < this.numRows; j++) {
            if (this.cells[i][j] != another.getCellStateAt(i, j)) {
              return false;
            }
          }
        }

        return true;
      }
    }, {
      key: "findCellsToClear",
      value: function findCellsToClear() {
        var cellsToClear = []; //check rows

        for (var i = 0; i < this.numRows; i++) {
          if (this.isRowFilled(i)) {
            cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getRowModel(i));
          }
        } //check columns


        for (var _i2 = 0; _i2 < this.numCols; _i2++) {
          if (this.isColumnFilled(_i2)) {
            cellsToClear = BlockPuzzle.ArrayUtils.uniteArrays(cellsToClear, this.getColumnModel(_i2));
          }
        }

        return cellsToClear;
      }
      /**
       * PRIVATE
       */

    }, {
      key: "clearFilledRowsAndColumns",
      value: function clearFilledRowsAndColumns() {
        var _this50 = this;

        this.findCellsToClear().forEach(function (cell) {
          if (_this50.getCellStateAt(cell.x, cell.y) != BlockPuzzle.CellModelState.CELL_EMPTY) {
            _this50.cleanedCells += 1;

            _this50.setCellStateAt(BlockPuzzle.CellModelState.CELL_EMPTY, cell.x, cell.y);
          }
        });
      }
    }, {
      key: "isRowFilled",
      value: function isRowFilled(rowIndex) {
        return this.getRow(rowIndex).every(function (cellState) {
          return cellState != BlockPuzzle.CellModelState.CELL_EMPTY;
        });
      }
    }, {
      key: "isColumnFilled",
      value: function isColumnFilled(columnIndex) {
        return this.getColumn(columnIndex).every(function (cellState) {
          return cellState != BlockPuzzle.CellModelState.CELL_EMPTY;
        });
      }
    }, {
      key: "getRow",
      value: function getRow(rowIndex) {
        return this.cells.map(function (column) {
          return column[rowIndex];
        });
      }
    }, {
      key: "getColumn",
      value: function getColumn(colIndex) {
        return this.cells[colIndex].slice();
      }
    }, {
      key: "getRowModel",
      value: function getRowModel(rowIndex) {
        return this.cells.map(function (column, colIdx) {
          return {
            x: colIdx,
            y: rowIndex
          };
        });
      }
    }, {
      key: "getColumnModel",
      value: function getColumnModel(colIndex) {
        return this.cells[colIndex].map(function (value, rowIdx) {
          return {
            x: colIndex,
            y: rowIdx
          };
        });
      }
    }]);

    return BoardModel;
  }();

  BlockPuzzle.BoardModel = BoardModel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var CellModel =
  /*#__PURE__*/
  function (_Phaser$Point) {
    _inherits(CellModel, _Phaser$Point);

    function CellModel(posX, posY) {
      _classCallCheck(this, CellModel);

      return _possibleConstructorReturn(this, _getPrototypeOf(CellModel).call(this, posX, posY));
    }

    _createClass(CellModel, [{
      key: "getCopy",
      value: function getCopy() {
        return new CellModel(this.posX, this.posY);
      }
      /* getters & setters */

    }, {
      key: "posX",
      get: function get() {
        return this.x;
      },
      set: function set(value) {
        this.x = value;
      }
    }, {
      key: "posY",
      get: function get() {
        return this.y;
      },
      set: function set(value) {
        this.y = value;
      }
    }]);

    return CellModel;
  }(Phaser.Point);

  BlockPuzzle.CellModel = CellModel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var FigureModel =
  /*#__PURE__*/
  function () {
    function FigureModel(cells) {
      _classCallCheck(this, FigureModel);

      this.figureWidth = 0;
      this.figureHeight = 0;
      this.centerX = 0;
      this.centerY = 0;
      this.cells = cells.slice();
      this.normalizeCells();
    }

    _createClass(FigureModel, [{
      key: "normalizeCells",
      value: function normalizeCells() {
        if (!this.cells || this.cells.length === 0) {
          return;
        }

        var minX = this.cells.reduce(function (prev, cell) {
          return prev.posX <= cell.posX ? prev : cell;
        }).posX;
        var minY = this.cells.reduce(function (prev, cell) {
          return prev.posY <= cell.posY ? prev : cell;
        }).posY;
        this.cells.forEach(function (cellModel) {
          return cellModel.subtract(minX, minY);
        });
        /* calculate figure width & height (measured in cells) */

        this.figureWidth = this.cells.reduce(function (prev, cell) {
          return prev.posX >= cell.posX ? prev : cell;
        }).posX - this.cells.reduce(function (prev, cell) {
          return prev.posX <= cell.posX ? prev : cell;
        }).posX + 1;
        this.figureHeight = this.cells.reduce(function (prev, cell) {
          return prev.posY >= cell.posY ? prev : cell;
        }).posY - this.cells.reduce(function (prev, cell) {
          return prev.posY <= cell.posY ? prev : cell;
        }).posY + 1;
        this.centerX = this.figureWidth / 2;
        this.centerY = this.figureHeight / 2;
      }
      /**
       * PUBLIC
       */

    }, {
      key: "setPosition",
      value: function setPosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        return this;
      }
    }, {
      key: "getCells",
      value: function getCells() {
        return this.cells;
      }
    }, {
      key: "numCells",
      value: function numCells() {
        return this.getCells().length;
      }
    }, {
      key: "getWidth",
      value: function getWidth() {
        return this.figureWidth;
      }
    }, {
      key: "getHeight",
      value: function getHeight() {
        return this.figureHeight;
      }
    }, {
      key: "getCenterX",
      value: function getCenterX() {
        return this.centerX;
      }
    }, {
      key: "getCenterY",
      value: function getCenterY() {
        return this.centerY;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new FigureModel(this.getCells().map(function (cell) {
          return new BlockPuzzle.CellModel(cell.posX, cell.posY);
        }));
      }
    }]);

    return FigureModel;
  }();

  BlockPuzzle.FigureModel = FigureModel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractService = function AbstractService(serviceManager) {
    _classCallCheck(this, AbstractService);

    this.serviceManager = serviceManager;
    this.level = serviceManager.level;
  };

  BlockPuzzle.AbstractService = AbstractService;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="../../Types.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var FigureService =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract9) {
    _inherits(FigureService, _BlockPuzzle$Abstract9);

    function FigureService() {
      var _this51;

      _classCallCheck(this, FigureService);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(FigureService).apply(this, arguments));
      _this51.prevColor = null;
      _this51.figurePresets = [_this51.normalizeCells([new BlockPuzzle.CellModel(1, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(1, 0)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(2, 0)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(0, 2)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(0, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 1), new BlockPuzzle.CellModel(2, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(0, 2), new BlockPuzzle.CellModel(0, 3)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(1, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 1), new BlockPuzzle.CellModel(2, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(2, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 1)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(2, 0), new BlockPuzzle.CellModel(3, 0), new BlockPuzzle.CellModel(4, 0)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(2, 0), new BlockPuzzle.CellModel(2, 1), new BlockPuzzle.CellModel(2, 2)]), _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(0, 2), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(1, 1), new BlockPuzzle.CellModel(1, 2), new BlockPuzzle.CellModel(2, 0), new BlockPuzzle.CellModel(2, 1), new BlockPuzzle.CellModel(2, 2)])];
      _this51.tutorialPlacements = [{
        preset: _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 1), new BlockPuzzle.CellModel(2, 1)]),
        position: {
          x: 2,
          y: 3
        }
      }, {
        preset: _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(1, 1)]),
        position: {
          x: 0,
          y: 3
        }
      }, {
        preset: _this51.normalizeCells([new BlockPuzzle.CellModel(0, 0), new BlockPuzzle.CellModel(0, 1), new BlockPuzzle.CellModel(0, 2), new BlockPuzzle.CellModel(1, 0), new BlockPuzzle.CellModel(1, 1), new BlockPuzzle.CellModel(1, 2), new BlockPuzzle.CellModel(2, 0), new BlockPuzzle.CellModel(2, 1), new BlockPuzzle.CellModel(2, 2)]),
        position: {
          x: 5,
          y: 2
        }
      }];
      _this51.iterations = 0;
      return _this51;
    }

    _createClass(FigureService, [{
      key: "normalizeCells",
      value: function normalizeCells(preset) {
        var minX = preset.reduce(function (prev, cell) {
          return prev.posX <= cell.posX ? prev : cell;
        }).posX;
        var minY = preset.reduce(function (prev, cell) {
          return prev.posY <= cell.posY ? prev : cell;
        }).posY;
        preset.forEach(function (cellModel) {
          return cellModel.subtract(minX, minY);
        });
        return preset;
      }
    }, {
      key: "getRandomFigureModel",
      value: function getRandomFigureModel() {
        return new BlockPuzzle.FigureModel(this.getCopy(Phaser.ArrayUtils.getRandomItem(this.figurePresets)));
      }
    }, {
      key: "getRandomColor",
      value: function getRandomColor() {
        var _this52 = this;

        this.prevColor = Phaser.ArrayUtils.getRandomItem(Object.keys(BlockPuzzle.BlockColor).map(function (key) {
          return BlockPuzzle.BlockColor[key];
        }).filter(function (value) {
          return typeof value === "number" && value != _this52.prevColor;
        }));
        return this.prevColor;
      }
    }, {
      key: "getRandomPositionForFigure",
      value: function getRandomPositionForFigure(figure, boardModel) {
        return Phaser.ArrayUtils.getRandomItem(this.findFigurePositions(figure.getModel().getCells(), boardModel, 1)) || null;
      }
    }, {
      key: "hasAvailableSpaceForFigure",
      value: function hasAvailableSpaceForFigure(figure, boardModel) {
        var positions = this.findFigurePositions(figure.getModel().getCells(), boardModel, 1);
        return positions.length > 0;
      }
      /*
       * VARIANT 1
       */

    }, {
      key: "getNextFiguresSet",
      value: function getNextFiguresSet(boardModel) {
        var _this53 = this;

        if (!BlockPuzzle.Settings.TUTORIAL_COMPLETED) {
          return this.tutorialPlacements.map(function (placement) {
            return new BlockPuzzle.FigureModel(_this53.getCopy(placement.preset)).setPosition(placement.position.x, placement.position.y);
          });
        }

        this.iterations = 0;
        var results = [];
        this.findFigurePositionsRecursive(boardModel, [], results);
        results.sort(function (a, b) {
          return b.reduce(function (sum, elem) {
            return sum + elem.preset.length;
          }, 0) - a.reduce(function (sum, elem) {
            return sum + elem.preset.length;
          }, 0);
        });

        if (results.length > 0) {
          return Phaser.ArrayUtils.shuffle(BlockPuzzle.ArrayUtils.getRandomItem(results, BlockPuzzle.Settings.RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR).map(function (result) {
            return new BlockPuzzle.FigureModel(result.preset);
          }));
        } else {
          return Phaser.ArrayUtils.shuffle([this.getRandomFigureModel(), this.getRandomFigureModel(), this.getRandomFigureModel()]);
        }
      }
    }, {
      key: "findFigurePositionsRecursive",
      value: function findFigurePositionsRecursive(boardModel, placedFigures, resultsArray) {
        var possiblePlaces = this.findAppropriateFigurePresetsForBoard(boardModel, true);

        if (possiblePlaces.length > 0) {
          if (resultsArray.length > 0) {
            //return;

            /* optimization */
            possiblePlaces = [Phaser.ArrayUtils.getRandomItem(possiblePlaces)];
          }

          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = possiblePlaces[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var place = _step2.value;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = place.figurePositions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var figurePosition = _step3.value;
                  this.iterations++;

                  if (placedFigures.length == 2) {
                    resultsArray.push(placedFigures.slice().concat({
                      preset: place.figurePreset,
                      position: figurePosition,
                      cleanedCells: boardModel.cleanedCells
                    }));
                  } else {
                    var boardCopy = boardModel.getCopy();
                    boardCopy.placeFigure(place.figurePreset, figurePosition);
                    this.findFigurePositionsRecursive(boardCopy, placedFigures.slice().concat({
                      preset: place.figurePreset,
                      position: figurePosition,
                      cleanedCells: boardCopy.cleanedCells
                    }), resultsArray);
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }
    }, {
      key: "findAppropriateFigurePresetsForBoard",
      value: function findAppropriateFigurePresetsForBoard(boardModel, shuffleResults) {
        var possibleCases = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Phaser.ArrayUtils.shuffle(this.figurePresets.slice())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var preset = _step4.value;
            possibleCases.push({
              figurePreset: preset,
              figurePositions: this.findFigurePositions(preset, boardModel, BlockPuzzle.Settings.GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE)
            });
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return shuffleResults ? Phaser.ArrayUtils.shuffle(possibleCases) : possibleCases;
      }
      /**
       * PRIVATE
       */

    }, {
      key: "findFiguresAtPosition",
      value: function findFiguresAtPosition(position, boardModel) {
        var presets = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = this.figurePresets[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var preset = _step5.value;

            if (boardModel.couldBePlaced(preset, position)) {
              presets.push(preset);
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return presets;
      }
    }, {
      key: "findFigurePositions",
      value: function findFigurePositions(preset, boardModel, limitPositionsCount) {
        var positions = [];
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var px = _step6.value;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = Phaser.ArrayUtils.shuffle([0, 1, 2, 3, 4, 5, 6, 7])[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var py = _step7.value;

                if (boardModel.couldBePlaced(preset, {
                  x: px,
                  y: py
                })) {
                  positions.push({
                    x: px,
                    y: py
                  });

                  if (positions.length >= limitPositionsCount) {
                    return positions;
                  }
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        return positions;
      }
    }, {
      key: "getCopy",
      value: function getCopy(figurePreset) {
        return figurePreset.map(function (cellModel) {
          return cellModel.getCopy();
        });
      }
    }]);

    return FigureService;
  }(BlockPuzzle.AbstractService);

  BlockPuzzle.FigureService = FigureService;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var InscriptionsService =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract10) {
    _inherits(InscriptionsService, _BlockPuzzle$Abstract10);

    function InscriptionsService(serviceManager) {
      var _this54;

      _classCallCheck(this, InscriptionsService);

      _this54 = _possibleConstructorReturn(this, _getPrototypeOf(InscriptionsService).call(this, serviceManager));

      _this54.level.eventManager.onLinesDestroyed.add(_this54.dispatchLinesDestroyed, _assertThisInitialized(_this54));

      return _this54;
    }

    _createClass(InscriptionsService, [{
      key: "dispatchLinesDestroyed",
      value: function dispatchLinesDestroyed(destroyedLines, cellPositions) {
        if (destroyedLines >= 2) {
          var px = cellPositions.reduce(function (accumulator, current) {
            return accumulator += current.x;
          }, 0) / cellPositions.length;
          var py = cellPositions.reduce(function (accumulator, current) {
            return accumulator += current.y;
          }, 0) / cellPositions.length;
          var targetCellPosition = this.level.boardManager.getBoard().getCellAt(Math.floor(px), Math.floor(py)).position;
          this.displayInscription(destroyedLines, targetCellPosition.x, targetCellPosition.y);
        }
      }
    }, {
      key: "displayInscription",
      value: function displayInscription(inscriptionPower, x, y) {
        var inscriptionLevel = BlockPuzzle.InscriptionLevel.AWESOME;

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

        var insription = this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.InscriptionEffect(inscriptionLevel, x, y));
      }
    }, {
      key: "displayScoresEffect",
      value: function displayScoresEffect(scores, x, y) {
        new BlockPuzzle.ScoresEffect(this.level, scores * BlockPuzzle.ScoreManager.instance.getMultiplier(), x, Math.max(y, -150), 50);
        BlockPuzzle.ScoreManager.instance.addScores(scores);
      }
    }]);

    return InscriptionsService;
  }(BlockPuzzle.AbstractService);

  BlockPuzzle.InscriptionsService = InscriptionsService;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var LayoutService =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract11) {
    _inherits(LayoutService, _BlockPuzzle$Abstract11);

    function LayoutService() {
      _classCallCheck(this, LayoutService);

      return _possibleConstructorReturn(this, _getPrototypeOf(LayoutService).apply(this, arguments));
    }

    _createClass(LayoutService, [{
      key: "getFigureDraggingDelta",
      value: function getFigureDraggingDelta(figureBarIndex) {
        return BlockPuzzle.App.instance.device.desktop ? {
          x: 0,
          y: 0
        } : BlockPuzzle.CustomScaleManager.isPortrait() ? {
          x: 0,
          y: BlockPuzzle.Settings.FIGURE_VIEW_DRAGGING_DELTA
        } : {
          x: BlockPuzzle.Settings.FIGURE_VIEW_DRAGGING_DELTA,
          y: -30 * figureBarIndex
        };
      }
    }, {
      key: "getPowerupDraggingDelta",
      value: function getPowerupDraggingDelta() {
        return BlockPuzzle.App.instance.device.desktop ? {
          x: 0,
          y: 0
        } : BlockPuzzle.CustomScaleManager.isPortrait() ? {
          x: 0,
          y: BlockPuzzle.Settings.POWERUP_DRAGGING_DELTA
        } : {
          x: 0,
          y: BlockPuzzle.Settings.POWERUP_DRAGGING_DELTA
        };
      }
    }, {
      key: "getAvailableBoardBounds",
      value: function getAvailableBoardBounds() {
        if (BlockPuzzle.CustomScaleManager.isPortrait()) {
          var _this$level$windowBou = this.level.windowBounds.getBounds(0, 1, 0.12, 0.75),
              minX = _this$level$windowBou.minX,
              maxX = _this$level$windowBou.maxX,
              minY = _this$level$windowBou.minY,
              maxY = _this$level$windowBou.maxY;

          return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
        } else if (BlockPuzzle.CustomScaleManager.isSquared()) {
          var _this$level$windowBou2 = this.level.windowBounds.getBounds(0, 0.75, 0.15, 1),
              _minX = _this$level$windowBou2.minX,
              _maxX = _this$level$windowBou2.maxX,
              _minY = _this$level$windowBou2.minY,
              _maxY = _this$level$windowBou2.maxY;

          return new Phaser.Rectangle((_minX + _maxX) / 2, (_minY + _maxY) / 2, _maxX - _minX, _maxY - _minY);
        } else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
          var _this$level$windowBou3 = this.level.windowBounds.getBounds(0.2, 0.8, 0, 1),
              _minX2 = _this$level$windowBou3.minX,
              _maxX2 = _this$level$windowBou3.maxX,
              _minY2 = _this$level$windowBou3.minY,
              _maxY2 = _this$level$windowBou3.maxY;

          return new Phaser.Rectangle((_minX2 + _maxX2) / 2, (_minY2 + _maxY2) / 2, _maxX2 - _minX2, _maxY2 - _minY2);
        }
      }
    }, {
      key: "getAvailableFiguresPanelBounds",
      value: function getAvailableFiguresPanelBounds() {
        if (BlockPuzzle.CustomScaleManager.isPortrait()) {
          var _this$level$windowBou4 = this.level.windowBounds.getBounds(0, 1, 0.75, 0.94),
              minX = _this$level$windowBou4.minX,
              maxX = _this$level$windowBou4.maxX,
              minY = _this$level$windowBou4.minY,
              maxY = _this$level$windowBou4.maxY;

          var bounds = this.level.boardManager.getBoardBounds(this.level.container);
          var availableHeight = this.level.boardManager.getBoardBounds(this.level.container).width * 5 / 15;
          minY = this.level.boardManager.getBoardBounds(this.level.container, false).bottom;
          return new Phaser.Rectangle((minX + maxX) / 2, minY + availableHeight / 2, maxX - minX, availableHeight);
        } else if (BlockPuzzle.CustomScaleManager.isSquared()) {
          var _this$level$windowBou5 = this.level.windowBounds.getBounds(0.75, 1, 0.15, 0.87),
              _minX3 = _this$level$windowBou5.minX,
              _maxX3 = _this$level$windowBou5.maxX,
              _minY3 = _this$level$windowBou5.minY,
              _maxY3 = _this$level$windowBou5.maxY;

          _minX3 = this.level.boardManager.getBoardBounds(this.level.container).right;
          return new Phaser.Rectangle((_minX3 + _maxX3) / 2, (_minY3 + _maxY3) / 2, _maxX3 - _minX3, _maxY3 - _minY3);
        } else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
          var _this$level$windowBou6 = this.level.windowBounds.getBounds(0.8, 1, 0.16, 1),
              _minX4 = _this$level$windowBou6.minX,
              _maxX4 = _this$level$windowBou6.maxX,
              _minY4 = _this$level$windowBou6.minY,
              _maxY4 = _this$level$windowBou6.maxY;

          _minX4 = this.level.boardManager.getBoardBounds(this.level.container).right;
          return new Phaser.Rectangle((_minX4 + _maxX4) / 2, (_minY4 + _maxY4) / 2, _maxX4 - _minX4, _maxY4 - _minY4);
        }
      }
    }, {
      key: "getAvailableUIContainerBounds",
      value: function getAvailableUIContainerBounds() {
        if (BlockPuzzle.CustomScaleManager.isPortrait()) {
          var _this$level$windowBou7 = this.level.windowBounds.getBounds(0, 1, 0, 0.15),
              minX = _this$level$windowBou7.minX,
              maxX = _this$level$windowBou7.maxX,
              minY = _this$level$windowBou7.minY,
              maxY = _this$level$windowBou7.maxY;

          maxY = this.level.boardManager.getBoardBounds(this.level.container).top;
          return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
        } else if (BlockPuzzle.CustomScaleManager.isSquared()) {
          var _this$level$windowBou8 = this.level.windowBounds.getBounds(0, 1, 0, 0.15),
              _minX5 = _this$level$windowBou8.minX,
              _maxX5 = _this$level$windowBou8.maxX,
              _minY5 = _this$level$windowBou8.minY,
              _maxY5 = _this$level$windowBou8.maxY;

          _maxY5 = this.level.boardManager.getBoardBounds(this.level.container).top;
          return new Phaser.Rectangle((_minX5 + _maxX5) / 2, (_minY5 + _maxY5) / 2, _maxX5 - _minX5, _maxY5 - _minY5);
        } else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
          var _this$level$windowBou9 = this.level.windowBounds.getBounds(0, 0.2, 0.25, 0.72),
              _minX6 = _this$level$windowBou9.minX,
              _maxX6 = _this$level$windowBou9.maxX,
              _minY6 = _this$level$windowBou9.minY,
              _maxY6 = _this$level$windowBou9.maxY;

          _maxX6 = this.level.boardManager.getBoardBounds(this.level.container).left;
          return new Phaser.Rectangle((_minX6 + _maxX6) / 2, (_minY6 + _maxY6) / 2, _maxX6 - _minX6, _maxY6 - _minY6);
        }
      }
    }, {
      key: "getFigureDisposingTweenParams",
      value: function getFigureDisposingTweenParams() {
        return BlockPuzzle.CustomScaleManager.isPortrait() ? {
          y: '+75',
          alpha: 0
        } : {
          x: '+75',
          alpha: 0
        };
      }
    }, {
      key: "getAvailablePowerupsContainerBounds",
      value: function getAvailablePowerupsContainerBounds() {
        if (BlockPuzzle.CustomScaleManager.isPortrait()) {
          var _this$level$windowBou10 = this.level.windowBounds.getBounds(0, 1, 0.9, 1),
              minX = _this$level$windowBou10.minX,
              maxX = _this$level$windowBou10.maxX,
              minY = _this$level$windowBou10.minY,
              maxY = _this$level$windowBou10.maxY;

          minY = this.getAvailableFiguresPanelBounds().y + this.getAvailableFiguresPanelBounds().height / 2;
          return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY); // minY = this.level.boardManager.getBoardBounds(this.level.container).bottom;
          // return new Phaser.Rectangle((minX + maxX) / 2, (minY + maxY) / 2, maxX - minX, maxY - minY);
        } else if (BlockPuzzle.CustomScaleManager.isSquared()) {
          var _this$level$windowBou11 = this.level.windowBounds.getBounds(0.8, 1, 0.86, 0.95),
              _minX7 = _this$level$windowBou11.minX,
              _maxX7 = _this$level$windowBou11.maxX,
              _minY7 = _this$level$windowBou11.minY,
              _maxY7 = _this$level$windowBou11.maxY;

          _minX7 = this.level.boardManager.getBoardBounds(this.level.container, false).right;
          return new Phaser.Rectangle((_minX7 + _maxX7) / 2, (_minY7 + _maxY7) / 2, _maxX7 - _minX7, _maxY7 - _minY7);
        } else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
          var _this$level$windowBou12 = this.level.windowBounds.getBounds(0, 0.2, 0.86, 0.94),
              _minX8 = _this$level$windowBou12.minX,
              _maxX8 = _this$level$windowBou12.maxX,
              _minY8 = _this$level$windowBou12.minY,
              _maxY8 = _this$level$windowBou12.maxY;

          _maxX8 = this.level.boardManager.getBoardBounds(this.level.container, false).left;
          return new Phaser.Rectangle((_minX8 + _maxX8) / 2, (_minY8 + _maxY8) / 2, _maxX8 - _minX8, _maxY8 - _minY8);
        }
      }
    }]);

    return LayoutService;
  }(BlockPuzzle.AbstractService);

  BlockPuzzle.LayoutService = LayoutService;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var StarsService =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract12) {
    _inherits(StarsService, _BlockPuzzle$Abstract12);

    function StarsService(serviceManager) {
      var _this55;

      _classCallCheck(this, StarsService);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(StarsService).call(this, serviceManager));
      _this55.currentStarGenerationProbability = 0;
      _this55.currentStarGenerationProbability = BlockPuzzle.Settings.BASIC_STAR_GENERATION_PROBABILITY;

      _this55.level.eventManager.onLinesDestroyed.add(_this55.dispatchLinesDestroyed, _assertThisInitialized(_this55));

      _this55.level.eventManager.onMoveFinished.add(_this55.dispatchMoveFinished, _assertThisInitialized(_this55));

      return _this55;
    }

    _createClass(StarsService, [{
      key: "dispatchMoveFinished",
      value: function dispatchMoveFinished(numMoves) {
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
        } else {
          this.currentStarGenerationProbability = Phaser.Math.clamp(this.currentStarGenerationProbability + BlockPuzzle.Settings.BASIC_STAR_GENERATION_PROBABILITY_STEP, 0, BlockPuzzle.Settings.MAX_STAR_GENERATING_PROBABILITY);
        }
      }
    }, {
      key: "dispatchLinesDestroyed",
      value: function dispatchLinesDestroyed(destroyedLines) {// if(destroyedLines >= 2) {
        //     const additionalMultilineProbability: number = Math.max(0, destroyedLines - 1) * Settings.ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES;
        //     if(Math.random() < additionalMultilineProbability) {
        //         this.currentStarGenerationProbability = Settings.BASIC_STAR_GENERATION_PROBABILITY;
        //         this.generateRandomStar(Settings.STAR_GENERATION_DELAY);
        //     }
        // }
      }
    }, {
      key: "generateRandomStar",
      value: function generateRandomStar(delay) {
        var _this56 = this;

        BlockPuzzle.App.instance.time.events.add(delay, function () {
          if (_this56.level.gameStateManager.isGameActive()) {
            var availableCells = _this56.level.boardManager.getBoard().getCells().filter(function (cell) {
              return cell && !cell.isEmpty() && !cell.getBlock().hasStar();
            });

            if (availableCells.length > 0) {
              Phaser.ArrayUtils.getRandomItem(availableCells).getBlock().addStar(_this56.level);
            }
          }
        });
      }
    }]);

    return StarsService;
  }(BlockPuzzle.AbstractService);

  BlockPuzzle.StarsService = StarsService;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var FigureView =
  /*#__PURE__*/
  function (_Phaser$Group11) {
    _inherits(FigureView, _Phaser$Group11);

    function FigureView(figure, figureModel) {
      var _this57;

      _classCallCheck(this, FigureView);

      _this57 = _possibleConstructorReturn(this, _getPrototypeOf(FigureView).call(this, figure.game));
      _this57.isReady = false;
      _this57.figure = figure;
      _this57.level = figure.level;
      _this57.viewDeltaX = -_this57.figure.figureWidth / 2 + 0.5;
      _this57.viewDeltaY = -_this57.figure.figureHeight / 2 + 0.5;

      _this57.createBlocks(figureModel);

      _this57.tweenScale(BlockPuzzle.Settings.DEFAULT_FIGURE_SCALE, false, 0);

      return _this57;
    }

    _createClass(FigureView, [{
      key: "createBlocks",
      value: function createBlocks(figureModel) {
        var _this58 = this;

        this.blocks = figureModel.getCells().map(function (cellModel) {
          return _this58.add(new BlockPuzzle.Block(cellModel, _this58.figure.color));
        });
      }
    }, {
      key: "alignBlocks",
      value: function alignBlocks() {
        var _this59 = this;

        this.blocks.forEach(function (block) {
          return block.position.set((block.posX + _this59.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH, (block.posY + _this59.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT);
        });
      }
      /**
       * PUBLIC
       */

    }, {
      key: "getBlocks",
      value: function getBlocks() {
        return this.blocks;
      }
    }, {
      key: "getFirstBlock",
      value: function getFirstBlock() {
        return this.blocks[0];
      }
    }, {
      key: "playAppearingTween",
      value: function playAppearingTween(delay) {
        var _this60 = this;

        this.scale.set(0);
        this.game.add.tween(this.scale).to({
          x: 1,
          y: 1
        }, BlockPuzzle.Settings.FIGURE_APPEARING_DURATION, Phaser.Easing.Back.Out, true, delay).onComplete.add(function () {
          return _this60.isReady = true;
        });
      }
    }, {
      key: "tweenScale",
      value: function tweenScale(scale, keepOriginalPosition, duration) {
        var _this61 = this;

        var scaleMultiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var targetScale = scale * scaleMultiplier;
        var noScale = 1 * scaleMultiplier;
        this.blocks.forEach(function (block) {
          _this61.game.tweens.removeFrom(block, false);

          _this61.game.tweens.removeFrom(block.scale, false);

          if (duration > 0) {
            _this61.game.add.tween(block.scale).to({
              x: targetScale,
              y: targetScale
            }, duration, Phaser.Easing.Sinusoidal.In, true);

            _this61.game.add.tween(block).to({
              x: (block.posX + _this61.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale),
              y: (block.posY + _this61.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale)
            }, duration, Phaser.Easing.Sinusoidal.In, true);
          } else {
            block.scale.set(targetScale);
            block.position.set((block.posX + _this61.viewDeltaX) * BlockPuzzle.Settings.CELL_WIDTH * (keepOriginalPosition ? noScale : targetScale), (block.posY + _this61.viewDeltaY) * BlockPuzzle.Settings.CELL_HEIGHT * (keepOriginalPosition ? noScale : targetScale));
          }
        });
      }
    }]);

    return FigureView;
  }(Phaser.Group);

  BlockPuzzle.FigureView = FigureView;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var PowerupManager =
  /*#__PURE__*/
  function () {
    function PowerupManager() {
      _classCallCheck(this, PowerupManager);

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

    _createClass(PowerupManager, [{
      key: "setInitialState",
      value: function setInitialState(powerupType, value) {
        this.powerupStates.set(powerupType, value);
      }
    }, {
      key: "isBought",
      value: function isBought(powerupType) {
        return this.powerupStates.get(powerupType) || false;
      }
    }, {
      key: "resetPrices",
      value: function resetPrices() {
        this.powerupPrices.set(BlockPuzzle.PowerupType.BOMB, BlockPuzzle.Settings.BOMB_PRICE);
        this.powerupPrices.set(BlockPuzzle.PowerupType.LIGHTNING, BlockPuzzle.Settings.LIGHTNING_PRICE);
      }
    }, {
      key: "buy",
      value: function buy(powerupType) {
        this.powerupStates.set(powerupType, true);
        BlockPuzzle.StarsManager.instance.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount() - this.getPrice(powerupType));
        this.onPowerupBought.dispatch(powerupType);
        BlockPuzzle.LocalStorageController.instance.save();
        this.powerupPrices.set(powerupType, this.powerupPrices.get(powerupType) + this.powerupPriceSteps.get(powerupType));
      }
    }, {
      key: "usePowerup",
      value: function usePowerup(powerupType) {
        this.powerupStates.set(powerupType, false);
        BlockPuzzle.LocalStorageController.instance.save();
      }
    }, {
      key: "getPrice",
      value: function getPrice(powerupType) {
        return this.powerupPrices.get(powerupType) || Number.MAX_SAFE_INTEGER;
      }
    }, {
      key: "hasUnboughtPowerups",
      value: function hasUnboughtPowerups() {
        var hasAvailablePowerups = false;
        this.powerupStates.forEach(function (state, key) {
          if (!state) {
            hasAvailablePowerups = true;
          }
        });
        return hasAvailablePowerups;
      }
    }, {
      key: "hasBoughtPowerups",
      value: function hasBoughtPowerups() {
        var hasBoughtPowerups = false;
        this.powerupStates.forEach(function (state, key) {
          if (state) {
            hasBoughtPowerups = true;
          }
        });
        return hasBoughtPowerups;
      }
    }], [{
      key: "instance",
      get: function get() {
        return PowerupManager._instance ? PowerupManager._instance : PowerupManager._instance = new PowerupManager();
      }
    }]);

    return PowerupManager;
  }();

  PowerupManager._instance = null;
  BlockPuzzle.PowerupManager = PowerupManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ScoreManager =
  /*#__PURE__*/
  function () {
    function ScoreManager() {
      _classCallCheck(this, ScoreManager);

      this.currentMultiplier = 1;
      this.maxScores = 0;
      this.prevMaxScores = 0;
      this.currentScore = 0;
      this.lastRoundScores = 0;
      this.roundNumber = 0;
      this.onScoreChanges = new Phaser.Signal();
      this.onMultiplierChanges = new Phaser.Signal();
    }

    _createClass(ScoreManager, [{
      key: "reset",
      value: function reset() {
        this.currentScore = 0;
        this.currentMultiplier = 1;
      }
    }, {
      key: "getCurrentScores",
      value: function getCurrentScores() {
        return ~~this.currentScore;
      }
    }, {
      key: "addScores",
      value: function addScores(value) {
        this.lastRoundScores = value * this.getMultiplier();
        this.currentScore += this.lastRoundScores;

        if (value != 0) {
          this.currentMultiplier = this.calculateMultiplier();
          this.onScoreChanges.dispatch(this.getCurrentScores());
          this.onMultiplierChanges.dispatch(this.getMultiplier(), this.getMultiplierProgress());
          BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_SCORES, this.lastRoundScores);
          BlockPuzzle.AchievementsManager.instance.setValue(BlockPuzzle.AchievementType.BEST_SCORE_REACHED, this.getCurrentScores());
          BlockPuzzle.Analytics.instance.updateLevelData({
            score: this.getCurrentScores()
          });
          BlockPuzzle.APIUtils.instance.trackStats('best_scores', this.getCurrentScores(), true);
        }

        //Livescore Event
        window.famobi_analytics.trackEvent("EVENT_LIVESCORE", { liveScore: this.currentScore })

      }
    }, {
      key: "startRound",
      value: function startRound() {
        this.roundNumber++;
      }
    }, {
      key: "getRoundNumber",
      value: function getRoundNumber() {
        return this.roundNumber;
      }
    }, {
      key: "isFirstRound",
      value: function isFirstRound() {
        return this.roundNumber <= 1;
      }
      /**
       * MULTIPLIER
       */

    }, {
      key: "calculateMultiplier",
      value: function calculateMultiplier() {
        var scores = this.getCurrentScores();

        for (var i = 0; i < BlockPuzzle.Settings.MULTIPLIER_MILESTONES.length; i++) {
          if (BlockPuzzle.Settings.MULTIPLIER_MILESTONES[i] > scores) {
            return i + 1;
          }
        }

        return BlockPuzzle.Settings.MULTIPLIER_MILESTONES.length;
      }
    }, {
      key: "getMultiplier",
      value: function getMultiplier() {
        return this.currentMultiplier;
      }
    }, {
      key: "getMultiplierProgress",
      value: function getMultiplierProgress() {
        if (this.currentMultiplier >= 2) {
          return (this.getCurrentScores() - BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]) / (BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1] - BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 2]);
        } else {
          return this.getCurrentScores() / BlockPuzzle.Settings.MULTIPLIER_MILESTONES[this.currentMultiplier - 1];
        }
      }
      /**
       * MAX SCORES
       */

    }, {
      key: "getMaxScores",
      value: function getMaxScores() {
        return this.maxScores;
      }
    }, {
      key: "getPrevMaxScores",
      value: function getPrevMaxScores() {
        return this.prevMaxScores;
      }
    }, {
      key: "setMaxScores",
      value: function setMaxScores(value) {
        this.maxScores = Math.max(this.maxScores, value);
        this.prevMaxScores = this.maxScores;
      }
    }, {
      key: "updateMaxScores",
      value: function updateMaxScores(currentScores) {
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

    }, {
      key: "removeListeners",
      value: function removeListeners() {
        this.onScoreChanges.removeAll();
        this.onMultiplierChanges.removeAll();
      }
    }], [{
      key: "instance",
      get: function get() {
        return ScoreManager._instance ? ScoreManager._instance : ScoreManager._instance = new ScoreManager();
      }
    }]);

    return ScoreManager;
  }();

  ScoreManager._instance = null;
  BlockPuzzle.ScoreManager = ScoreManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var StarsManager =
  /*#__PURE__*/
  function () {
    function StarsManager() {
      _classCallCheck(this, StarsManager);

      this.numStars = 0;
      this.lastRoundStars = 0;
      this.onStarAdded = new Phaser.Signal();
      this.onStarsAmountChanged = new Phaser.Signal();
    }

    _createClass(StarsManager, [{
      key: "reset",
      value: function reset() {
        this.lastRoundStars = 0;
      }
    }, {
      key: "getLastRoundStars",
      value: function getLastRoundStars() {
        return this.lastRoundStars;
      }
    }, {
      key: "getStarsAmount",
      value: function getStarsAmount() {
        return this.numStars;
      }
    }, {
      key: "setStarsAmount",
      value: function setStarsAmount(value) {
        var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        this.numStars = value;
        this.onStarsAmountChanged.dispatch(this.getStarsAmount());

        if (save) {
          BlockPuzzle.LocalStorageController.instance.save();
        }
      }
    }, {
      key: "addBonusStars",
      value: function addBonusStars(amount) {
        this.setStarsAmount(this.getStarsAmount() + amount);
        this.lastRoundStars += amount;
        BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_STARS, amount);
        BlockPuzzle.APIUtils.instance.trackStatsChange('stars_picked_up', amount);
        BlockPuzzle.Analytics.instance.updateLevelData({
          stars: this.getStarsAmount()
        });
      }
    }, {
      key: "pickupStars",
      value: function pickupStars(amount) {
        var silent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.setStarsAmount(this.getStarsAmount() + amount);

        if (!silent) {
          this.lastRoundStars += amount;
        }

        BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_STARS, amount);
        BlockPuzzle.APIUtils.instance.trackStatsChange('stars_picked_up', amount);
        BlockPuzzle.Analytics.instance.updateLevelData({
          stars: this.getStarsAmount()
        });
        this.onStarAdded.dispatch(this.getStarsAmount());
        BlockPuzzle.LocalStorageController.instance.save();
      }
      /**
       * LISTENERS
       */

    }, {
      key: "removeListeners",
      value: function removeListeners() {}
    }], [{
      key: "instance",
      get: function get() {
        return StarsManager._instance ? StarsManager._instance : StarsManager._instance = new StarsManager();
      }
    }]);

    return StarsManager;
  }();

  StarsManager._instance = null;
  BlockPuzzle.StarsManager = StarsManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var SoundController =
  /*#__PURE__*/
  function () {
    function SoundController() {
      _classCallCheck(this, SoundController);

      this.currentMusicVolume = BlockPuzzle.Settings.MUSIC_ENABLED_BY_DEFAULT ? 0.4 : 0;
      this.currentSFXVolume = 0.5;
      this.currentBlockDestroyingSoundIndex = 0;
      //Replaced for use in Famobi
        //this.hadBeenMutedBeforePauseTriggered = false;
      this.debouncedSoundsTimestamps = new Map();
      this.melodyNames = ["melody"];
      this.soundNames = ["click", "error", "counting", "panel", "panelUp", "figureTap", "figureRelease", "figureFail", "starAppear", "starReceived", "good", "great", "excellent", "awesome", "buying", "match1", "match2", "match3", "match4", "match5", "match6", "match7", "block", "revive", "lose", "stamp", "heartbeat", "levelUp", "reward", "achievement", "fire", "bomb", "lighting"];
    }

    _createClass(SoundController, [{
      key: "isDecodingSupported",
      value: function isDecodingSupported() {
        return BlockPuzzle.App.instance.sound.usingWebAudio;
      }
    }, {
      key: "getSFXNames",
      value: function getSFXNames() {
        return this.soundNames;
      }
    }, {
      key: "getSoundNames",
      value: function getSoundNames() {
        return this.melodyNames.slice().concat(this.soundNames);
      }
      /**
       * MUSIC
       */

    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "startMusic",
      value: function startMusic() {
        this.mainTheme = BlockPuzzle.App.instance.sound.play('melody', this.currentMusicVolume, true);
      }
      /**
       * PAUSE/RESUME SOUND
       */

    }, {
      key: "pauseAudio",
      value: function pauseAudio() {
        this.hadBeenMutedBeforePauseTriggered = BlockPuzzle.App.instance.sound.mute;
        BlockPuzzle.App.instance.sound.mute = true;
      }
    }, {
      key: "resumeAudio",
      value: function resumeAudio() {
        BlockPuzzle.App.instance.sound.mute = this.hadBeenMutedBeforePauseTriggered;
      }
    }, {
      key: "addSuspendedContextRestoreHandler",
      value: function addSuspendedContextRestoreHandler() {
        if ('ontouchstart' in window && BlockPuzzle.App.instance.sound.usingWebAudio) {
          console.log("Adding context resume handler...");
          document.querySelector('canvas').addEventListener('touchstart', function () {
            if (BlockPuzzle.App.instance.sound.context.state === 'suspended') {
              console.log('Resuming suspended context...');
              BlockPuzzle.App.instance.sound.context.resume().then(function () {
                console.log('Playback resumed successfully');
              });
            }
          });
        }
      }
    }, {
      key: "getMusicVolume",
      value: function getMusicVolume() {
        return this.currentMusicVolume;
      }
    }, {
      key: "setMusicVolume",
      value: function setMusicVolume(value) {
        this.currentMusicVolume = Phaser.Math.clamp(value, 0, 1);

        if (this.mainTheme && this.mainTheme.isPlaying) {
          this.mainTheme.volume = this.currentMusicVolume;
        }
      }
    }, {
      key: "getSFXVolume",
      value: function getSFXVolume() {
        return this.currentSFXVolume;
      }
    }, {
      key: "setSFXVolume",
      value: function setSFXVolume(value) {
        this.currentSFXVolume = Phaser.Math.clamp(value, 0, 1);
      }
      /**
       * SOUNDS
       */

    }, {
      key: "playClickSound",
      value: function playClickSound() {
        this.playSound('click');
      }
    }, {
      key: "playPanelMovementSound",
      value: function playPanelMovementSound() {
        this.playSound('panel');
      }
    }, {
      key: "playPanelUpMovementSound",
      value: function playPanelUpMovementSound() {
        this.playSound('panelUp');
      }
    }, {
      key: "playFigurePickupSound",
      value: function playFigurePickupSound() {
        this.playSound('figureTap');
      }
    }, {
      key: "playFigurePlaceSound",
      value: function playFigurePlaceSound() {
        this.playSound('figureRelease');
      }
    }, {
      key: "playFigureFailSound",
      value: function playFigureFailSound() {
        this.playSound('figureFail');
      }
    }, {
      key: "playStarAppearSound",
      value: function playStarAppearSound() {
        this.playSound('starAppear');
      }
    }, {
      key: "playStarReceivedSound",
      value: function playStarReceivedSound() {
        this.playSound('starReceived');
      }
    }, {
      key: "playBuyingSound",
      value: function playBuyingSound() {
        this.playSound('buying');
      }
    }, {
      key: "playBlockSound",
      value: function playBlockSound() {
        this.playSound('block', 0.8);
      }
    }, {
      key: "playReviveSound",
      value: function playReviveSound() {
        this.playSound('revive', 0.6);
      }
    }, {
      key: "playStampSound",
      value: function playStampSound() {
        this.playSound('stamp');
      }
    }, {
      key: "playErrorSound",
      value: function playErrorSound() {
        this.playSound('error');
      }
    }, {
      key: "playLoseSound",
      value: function playLoseSound() {
        var _this62 = this;

        BlockPuzzle.App.instance.time.events.add(70, function () {
          return _this62.playSound('lose', 0.7);
        });
      }
    }, {
      key: "playHeartBeatSound",
      value: function playHeartBeatSound() {
        this.playSound('heartbeat', 1);
      }
    }, {
      key: "playlevelUpSound",
      value: function playlevelUpSound() {
        this.playSound('levelUp', 0.5);
      }
    }, {
      key: "playAchievementClaimedSound",
      value: function playAchievementClaimedSound() {
        this.playSound('achievement', 0.8);
      }
    }, {
      key: "playRewardClaimedSound",
      value: function playRewardClaimedSound() {
        this.playSound('reward', 0.8);
      }
    }, {
      key: "playExplosionSound",
      value: function playExplosionSound() {
        this.playSound('bomb', 0.8);
        this.playSound('fire', 0.8);
      }
    }, {
      key: "playLightningSound",
      value: function playLightningSound() {
        this.playSound('lighting', 0.8);
      }
    }, {
      key: "playNextLineDestroyingSound",
      value: function playNextLineDestroyingSound(numLines) {
        var _this63 = this;

        this.playSound('match' + (this.currentBlockDestroyingSoundIndex++ % 7 + 1));
        this.playSound('block');

        if (numLines > 1) {
          BlockPuzzle.App.instance.time.events.add(100, function () {
            return _this63.playSound('block');
          });
        }
      }
    }, {
      key: "playInscriptionSound",
      value: function playInscriptionSound(inscriptionLevel) {
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
    }, {
      key: "playSound",
      value: function playSound(key) {
        var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
        var loop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (BlockPuzzle.App.instance.sound.usingWebAudio && BlockPuzzle.App.instance.sound.context.state === 'suspended') {//skip this sound
        } else {
          BlockPuzzle.App.instance.sound.play(key, volume * this.currentSFXVolume, loop);
        }
      }
      /**
       * COUNTING
       */

    }, {
      key: "startCountingSound",
      value: function startCountingSound() {
        if (this.countingSound) {
          this.stopCountingSound();
        }

        this.countingSound = BlockPuzzle.App.instance.add.sound('counting', 0.55, true);
        this.countingSound.play();
      }
    }, {
      key: "stopCountingSound",
      value: function stopCountingSound() {
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

    }, {
      key: "debounceSound",
      value: function debounceSound(key, volume, interval) {
        var currentTime = new Date().getTime();
        var lastTimestamp = this.debouncedSoundsTimestamps.get(key) || 0;

        if (currentTime - lastTimestamp >= interval) {
          this.playSound(key, volume, false);
          this.debouncedSoundsTimestamps.set(key, currentTime);
        }
      }
      /**
       * MUSIC
       */

    }, {
      key: "chokeMusicVolume",
      value: function chokeMusicVolume() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

        if (this.mainTheme) {
          this.mainTheme.fadeTo(duration, this.currentMusicVolume > 0 ? Math.min(0.1, this.currentMusicVolume / 3) : 0);
        }
      }
    }, {
      key: "restoreMusicVolume",
      value: function restoreMusicVolume() {
        var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

        if (this.mainTheme) {
          this.mainTheme.fadeTo(duration, this.currentMusicVolume);
        }
      }
    }], [{
      key: "instance",
      get: function get() {
        return SoundController._instance ? SoundController._instance : SoundController._instance = new SoundController();
      }
    }]);

    return SoundController;
  }();

  SoundController._instance = null;
  BlockPuzzle.SoundController = SoundController;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AutoResizeableState =
  /*#__PURE__*/
  function (_Phaser$State) {
    _inherits(AutoResizeableState, _Phaser$State);

    function AutoResizeableState() {
      _classCallCheck(this, AutoResizeableState);

      return _possibleConstructorReturn(this, _getPrototypeOf(AutoResizeableState).apply(this, arguments));
    }

    _createClass(AutoResizeableState, [{
      key: "init",
      value: function init() {
        var containerWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
        var containerHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT;

        _get(_getPrototypeOf(AutoResizeableState.prototype), "init", this).call(this);

        this.isInitialized = false;
        this.containerWidth = containerWidth;
        this.containerHeight = containerHeight;
        this.container = this.add.existing(this.game.make.group(null));
        this.originalBounds = new WindowBounds();
        this.originalBounds.set(0, BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH, 0, BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT);
        this.resize();
      }
    }, {
      key: "create",
      value: function create() {
        this.isInitialized = true;
      }
    }, {
      key: "addChild",
      value: function addChild(child) {
        return this.container.add(child);
      }
    }, {
      key: "getInputPosition",
      value: function getInputPosition() {
        return new Phaser.Point((this.game.input.activePointer.x - this.container.x) / BlockPuzzle.CustomScaleManager.SCALE_X, (this.game.input.activePointer.y - this.container.y) / BlockPuzzle.CustomScaleManager.SCALE_Y);
      }
    }, {
      key: "translateInputPosition",
      value: function translateInputPosition(pointer) {
        return new Phaser.Point((pointer.x - this.container.x) / BlockPuzzle.CustomScaleManager.SCALE_X, (pointer.y - this.container.y) / BlockPuzzle.CustomScaleManager.SCALE_Y);
      }
    }, {
      key: "resize",
      value: function resize() {
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        this.container.scale.set(BlockPuzzle.CustomScaleManager.SCALE_X, BlockPuzzle.CustomScaleManager.SCALE_Y);
        this.container.position.set(BlockPuzzle.CustomScaleManager.WIDTH / 2 - this.containerWidth * BlockPuzzle.CustomScaleManager.SCALE_X / 2, BlockPuzzle.CustomScaleManager.HEIGHT / 2 - this.containerHeight * BlockPuzzle.CustomScaleManager.SCALE_Y / 2);
        this.windowBounds = this.windowBounds || new WindowBounds();
        this.windowBounds.set(-(BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2, (BlockPuzzle.CustomScaleManager.WIDTH / BlockPuzzle.CustomScaleManager.SCALE_X - this.containerWidth) / 2 + this.containerWidth, -(BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2, (BlockPuzzle.CustomScaleManager.HEIGHT / BlockPuzzle.CustomScaleManager.SCALE_Y - this.containerHeight) / 2 + this.containerHeight);
      }
    }, {
      key: "shutdown",
      value: function shutdown() {
        this.container.destroy();
        this.container = null;
      }
    }]);

    return AutoResizeableState;
  }(Phaser.State);

  BlockPuzzle.AutoResizeableState = AutoResizeableState;

  var WindowBounds =
  /*#__PURE__*/
  function () {
    function WindowBounds() {
      _classCallCheck(this, WindowBounds);

      this.set(0, 0, 0, 0);
    }

    _createClass(WindowBounds, [{
      key: "set",
      value: function set(left, right, top, down) {
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
    }, {
      key: "getPosition",
      value: function getPosition(rx, ry) {
        var dx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var dy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        return new Phaser.Point(this.left + rx * this.width + dx, this.top + ry * this.height + dy);
      }
    }, {
      key: "getBounds",
      value: function getBounds(left, right, top, down) {
        return {
          minX: this.left + left * this.width,
          maxX: this.left + right * this.width,
          minY: this.top + top * this.height,
          maxY: this.top + down * this.height
        };
      }
    }]);

    return WindowBounds;
  }();

  BlockPuzzle.WindowBounds = WindowBounds;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Boot =
  /*#__PURE__*/
  function (_Phaser$State2) {
    _inherits(Boot, _Phaser$State2);

    function Boot() {
      _classCallCheck(this, Boot);

      return _possibleConstructorReturn(this, _getPrototypeOf(Boot).apply(this, arguments));
    }

    _createClass(Boot, [{
      key: "init",
      value: function init() {
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
    }, {
      key: "preload",
      value: function preload() {
        this.game.load.atlasJSONArray(BlockPuzzle.Settings.PRELOADER_ATLAS, 'img/' + BlockPuzzle.Settings.PRELOADER_ATLAS + '.png', 'img/' + BlockPuzzle.Settings.PRELOADER_ATLAS + '.json');
        this.game.load.image('famobi-logo', 'img/famobi-logo.png');
        this.game.load.json('l10n', 'lang/texts.json');
      }
    }, {
      key: "create",
      value: function create() {
        this.input.maxPointers = 1;

        if (this.game.device.desktop) {
          this.game.canvas.oncontextmenu = function (e) {
            e.preventDefault();
          };
        }

        BlockPuzzle.LocalizationManager.init(this.game.cache.getJSON('l10n'));
        this.game.state.start('Preloader', true, false);
      }
    }, {
      key: "resizeCallback",
      value: function resizeCallback(scaleManager, parentBounds) {
        if (BlockPuzzle.CustomScaleManager.getScaleMode() == Phaser.ScaleManager.USER_SCALE) {
          if (this.game.width != window.innerWidth * BlockPuzzle.CustomScaleManager.getPixelRatio() || this.game.height != window.innerHeight * BlockPuzzle.CustomScaleManager.getPixelRatio()) {
            scaleManager.setGameSize(window.innerWidth * BlockPuzzle.CustomScaleManager.getPixelRatio(), window.innerHeight * BlockPuzzle.CustomScaleManager.getPixelRatio());
            scaleManager.setUserScale(1 / BlockPuzzle.CustomScaleManager.getPixelRatio(), 1 / BlockPuzzle.CustomScaleManager.getPixelRatio());
          }
        }
      }
    }, {
      key: "sizeChanged",
      value: function sizeChanged(scaleManager, w, h) {
        var windowDimensions = this.game.device.android && window["visualViewport"] && window["visualViewport"].width && window["visualViewport"].height ? new Phaser.Rectangle(0, 0, Math.min(w, window["visualViewport"].width), Math.min(h, window["visualViewport"].height)) : new Phaser.Rectangle(0, 0, window.innerWidth, window.innerHeight);
        BlockPuzzle.CustomScaleManager.update(windowDimensions.width * BlockPuzzle.CustomScaleManager.getPixelRatio(), windowDimensions.height * BlockPuzzle.CustomScaleManager.getPixelRatio());
      }
    }]);

    return Boot;
  }(Phaser.State);

  BlockPuzzle.Boot = Boot;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="AutoResizeableState.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var Level =
  /*#__PURE__*/
  function (_BlockPuzzle$AutoResi) {
    _inherits(Level, _BlockPuzzle$AutoResi);

    function Level() {
      _classCallCheck(this, Level);

      return _possibleConstructorReturn(this, _getPrototypeOf(Level).apply(this, arguments));
    }

    _createClass(Level, [{
      key: "create",
      value: function create() {
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
    }, {
      key: "createChildren",
      value: function createChildren() {
        _get(_getPrototypeOf(Level.prototype), "create", this).call(this);

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
    }, {
      key: "resize",
      value: function resize(w, h) {
        _get(_getPrototypeOf(Level.prototype), "resize", this).call(this, w, h);

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
    }, {
      key: "shutdown",
      value: function shutdown() {
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

        _get(_getPrototypeOf(Level.prototype), "shutdown", this).call(this);
      }
    }]);

    return Level;
  }(BlockPuzzle.AutoResizeableState);

  BlockPuzzle.Level = Level;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var Preloader =
  /*#__PURE__*/
  function (_BlockPuzzle$AutoResi2) {
    _inherits(Preloader, _BlockPuzzle$AutoResi2);

    function Preloader() {
      _classCallCheck(this, Preloader);

      return _possibleConstructorReturn(this, _getPrototypeOf(Preloader).apply(this, arguments));
    }

    _createClass(Preloader, [{
      key: "preload",
      value: function preload() {
        _get(_getPrototypeOf(Preloader.prototype), "preload", this).call(this, this.game);

        this.buildChildren();
        this.preloadContent();
        this.resize(this.game.width, this.game.height);
      }
    }, {
      key: "buildChildren",
      value: function buildChildren() {
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
        this.versionText = this.addChild(BlockPuzzle.TextUtils.getText(window.famobi.hasFeature("standalone") ? '' : ('v' + BlockPuzzle.Settings.GAME_VERSION), 0, 0, 12, "#ffffff"));
        this.copyrightText = this.addChild(BlockPuzzle.TextUtils.getText(window.famobi.hasFeature("credits") ? '© Famobi' : '', 0, 0, 12, "#ffffff", 'Russo One'));
        this.copyrightText.anchor.set(1, 1);
        this.preloadText = this.preloadContainer.add(new BlockPuzzle.BitmapTextField("0%", BlockPuzzle.Settings.PRELOADER_ATLAS, "Gold", 1, 0.5, 0.5, 1));
        this.preloadText.position.set(0, 65);
        this.game.load.onFileComplete.add(this.onFileComplete, this);
        this.game.load.onLoadComplete.add(this.onLoadingComplete, this);
        this.isInitialized = true;
      }
    }, {
      key: "preloadContent",
      value: function preloadContent() {
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = BlockPuzzle.SoundController.instance.getSoundNames()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var soundName = _step8.value;
            this.game.load.audio(soundName, ['sound/mp3/' + soundName + '.mp3', 'sound/m4a/' + soundName + '.m4a', 'sound/ogg/' + soundName + '.ogg']);
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
              _iterator8["return"]();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
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
    }, {
      key: "create",
      value: function create() {
        _get(_getPrototypeOf(Preloader.prototype), "create", this).call(this);
      }
    }, {
      key: "resize",
      value: function resize(width, height) {
        _get(_getPrototypeOf(Preloader.prototype), "resize", this).call(this, width, height);

        if (this.isInitialized) {
          this.backScreen.width = this.windowBounds.width * BlockPuzzle.CustomScaleManager.SCALE_X + 100;
          this.backScreen.height = this.windowBounds.height * BlockPuzzle.CustomScaleManager.SCALE_X + 100;
          this.preloadContainer.position.copyFrom(this.windowBounds.getPosition(0.5, 0.58));
          this.versionText.position.set(this.windowBounds.left + 25, this.windowBounds.down - 16);
          this.copyrightText.position.set(this.windowBounds.right - 5, this.windowBounds.down - 1);
          this.logo.position.copyFrom(this.windowBounds.getPosition(0.5, 0.24));
        }
      }
    }, {
      key: "handleStateChanged",
      value: function handleStateChanged() {
        BlockPuzzle.BackgroundManager.instance.handleStateChanged();
      }
    }, {
      key: "onFileComplete",
      value: function onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        this.preloadText.changeText(progress + "%");
      }
    }, {
      key: "onLoadingComplete",
      value: function onLoadingComplete() {
        BlockPuzzle.WindowManager.instance.init();
        BlockPuzzle.TransitionScreen.instance.init();

        BlockPuzzle.LocalStorageController.instance.loadSave();

        BlockPuzzle.SoundController.instance.init();

        /**
        * Famobi Audio isEnabled Check
        */
        if(window.famobi.audio != undefined) {
          if(window.famobi.audio.isEnabled()) {
            console.log("[FAMOBI]: Start with Sound Enabled");
            //Set Volume to 0
            BlockPuzzle.SoundController.instance.setSFXVolume(0.5);
            BlockPuzzle.SoundController.instance.setMusicVolume(0.5);
          } else {
            console.log("[FAMOBI]: Start with Sound Disabled");
            //Set Volume to 0
            BlockPuzzle.SoundController.instance.setSFXVolume(0);
            BlockPuzzle.SoundController.instance.setMusicVolume(0);
          }
        }

        if (BlockPuzzle.SoundController.instance.isDecodingSupported()) {
          this.game.sound.setDecodedCallback(BlockPuzzle.SoundController.instance.getSFXNames(), this.onSoundsDecoded, this);
        } else {
          this.onSoundsDecoded();
        }
      }
    }, {
      key: "onSoundsDecoded",
      value: function onSoundsDecoded() {
        BlockPuzzle.SoundController.instance.startMusic();
        this.preloadText.changeText("100%");
        BlockPuzzle.TransitionScreen.instance.changeState("Level");
      }
    }]);

    return Preloader;
  }(BlockPuzzle.AutoResizeableState);

  BlockPuzzle.Preloader = Preloader;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BitmapTextField =
  /*#__PURE__*/
  function (_Phaser$Group12) {
    _inherits(BitmapTextField, _Phaser$Group12);

    function BitmapTextField(textValue, atlasKey, styleKey) {
      var _this64;

      var textScale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var pivotX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
      var pivotY = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.5;
      var letterSpacing = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var letterFrame = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var tintValue = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0xFFFFFF;

      _classCallCheck(this, BitmapTextField);

      _this64 = _possibleConstructorReturn(this, _getPrototypeOf(BitmapTextField).call(this, BlockPuzzle.App.instance));
      _this64.valueHolder = {
        value: 0,
        targetValue: 0
      };
      _this64.pivotX = 0.5;
      _this64.pivotY = 0.5;
      _this64.atlasKey = "";
      _this64.styleKey = "";
      _this64.letterSpacing = 0;
      _this64.letterFrame = 0;
      _this64.tintValue = 0;
      _this64.internalScale = 1;
      _this64.atlasKey = atlasKey;
      _this64.styleKey = styleKey;
      _this64.letterSpacing = letterSpacing;
      _this64.letterFrame = letterFrame;
      _this64.textScale = textScale;
      _this64.pivotX = pivotX;
      _this64.pivotY = pivotY;
      _this64.tintValue = tintValue;

      _this64.changeText(textValue);

      return _this64;
    }

    _createClass(BitmapTextField, [{
      key: "changeText",
      value: function changeText(textValue) {
        var _this65 = this;

        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (!force && this.textValue == textValue) {
          return;
        }

        this.textValue = textValue;
        this.removeAll(true);
        this.scale.set(1);

        for (var i = 0; i < textValue.length; i++) {
          var sprite = BlockPuzzle.BitmapTextFactory.getLetter(this.styleKey, this.atlasKey, textValue.charAt(i), this.letterFrame);

          if (sprite) {
            sprite.x = this.width + (i > 0 ? this.letterSpacing : 0);
            sprite.anchor.set(0, 0.5);
            this.add(sprite);
          } else {
            console.warn("BitmapTextFactory.getSprite - letter '".concat(textValue.charAt(i), "' not found in spritesheet"));
          }
        }

        var currentWidth = this.width;
        var currentHeight = this.height;
        this.children.forEach(function (child) {
          return child.position.set(child.x - _this65.pivotX * currentWidth, child.y - (_this65.pivotY - 0.5) * currentHeight);
        });
        this.children.forEach(function (child) {
          return child.tint = _this65.tintValue;
        });
        this.scale.set(this.textScale * this.internalScale);
      }
    }, {
      key: "setColor",
      value: function setColor(value) {
        var _this66 = this;

        this.tintValue = value;
        this.children.forEach(function (child) {
          return child.tint = _this66.tintValue;
        });
      }
    }, {
      key: "tweenText",
      value: function tweenText(initialValue, targetValue, duration, delay) {
        var _this67 = this;

        this.game.tweens.removeFrom(this.valueHolder);
        this.valueHolder.value = initialValue;
        this.valueHolder.targetValue = targetValue;
        this.game.add.tween(this.valueHolder).to({
          value: targetValue
        }, duration, Phaser.Easing.Linear.None, true, delay).onUpdateCallback(function () {
          return _this67.changeText('' + Math.floor(_this67.valueHolder.value));
        }).onComplete.add(function () {
          return _this67.changeText('' + Math.floor(_this67.valueHolder.targetValue));
        });
      }
    }, {
      key: "tweenTextAdvanced",
      value: function tweenTextAdvanced(preffix, initialValue, targetValue, duration, delay) {
        var _this68 = this;

        var playCountingSound = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
        var countingSoundStates = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : ['Level'];
        this.changeText('' + Math.floor(initialValue));

        if (initialValue == targetValue) {
          return;
        }

        var valueHolder = {
          value: initialValue
        };
        var textTween = this.game.add.tween(valueHolder).to({
          value: targetValue
        }, duration, Phaser.Easing.Linear.None, true, delay);
        textTween.onStart.add(function () {
          if (playCountingSound && countingSoundStates.indexOf(_this68.game.state.getCurrentState().key) != -1) {
            BlockPuzzle.SoundController.instance.startCountingSound();
          }
        });
        textTween.onUpdateCallback(function () {
          return _this68.changeText(preffix + Math.floor(valueHolder.value));
        });
        textTween.onComplete.add(function () {
          _this68.changeText(preffix + Math.floor(valueHolder.value));

          if (playCountingSound) {
            BlockPuzzle.SoundController.instance.stopCountingSound();
          }
        });
      }
    }]);

    return BitmapTextField;
  }(Phaser.Group);

  BlockPuzzle.BitmapTextField = BitmapTextField;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var TransitionScreen =
  /*#__PURE__*/
  function (_Phaser$Group13) {
    _inherits(TransitionScreen, _Phaser$Group13);

    function TransitionScreen() {
      var _this69;

      _classCallCheck(this, TransitionScreen);

      _this69 = _possibleConstructorReturn(this, _getPrototypeOf(TransitionScreen).call(this, BlockPuzzle.App.instance, null));
      _this69.isInitialized = false;
      return _this69;
    }

    _createClass(TransitionScreen, [{
      key: "buildChildren",
      value: function buildChildren() {
        this.background = this.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'transitionSquare0000'));
        this.background.anchor.set(0.5);
        this.background.alpha = 0.01;
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(function () {
          return console.log('Transition Screen: input locked');
        });
      }
    }, {
      key: "init",
      value: function init() {
        this.isInitialized = true;
        this.buildChildren();
      }
    }, {
      key: "resize",
      value: function resize() {
        if (this.isInitialized) {
          this.position.set(this.game.world.centerX, this.game.world.centerY);
          this.background.width = this.game.width + 100;
          this.background.height = this.game.height + 100;
        }
      }
    }, {
      key: "changeState",
      value: function changeState(newState) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.targetStateName = newState;
        this.callback = callback;
        this.show();
      }
    }, {
      key: "show",
      value: function show() {
        this.game.stage.addChild(this);
        this.visible = true;
        this.resize();
        this.game.add.tween(this.background).to({
          alpha: 1
        }, 140, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.close, this);
      }
    }, {
      key: "close",
      value: function close() {
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
    }, {
      key: "proceedClosing",
      value: function proceedClosing() {
        var _this70 = this;

        if (this.parent && this.parent.getChildIndex(this) > -1) {
          this.parent.setChildIndex(this, this.parent.children.length - 1);
        } else {
          this.game.stage.addChild(this);
        }

        setTimeout(function () {
          _this70.game.add.tween(_this70.background).to({
            alpha: 0
          }, 120, Phaser.Easing.Linear.None, true).onComplete.add(_this70.onTransitionFinished, _this70);
        }, 20);
        setTimeout(function () {
          _this70.onTransitionFinished();
        }, 400);
      }
    }, {
      key: "onTransitionFinished",
      value: function onTransitionFinished() {
        this.hide();
      }
    }, {
      key: "hide",
      value: function hide() {
        if (this.parent && this.parent.getChildIndex(this) > -1) {
          this.parent.removeChild(this);
        }

        this.visible = false;
      }
    }], [{
      key: "instance",
      get: function get() {
        return TransitionScreen._instance ? TransitionScreen._instance : TransitionScreen._instance = new TransitionScreen();
      }
    }]);

    return TransitionScreen;
  }(Phaser.Group);

  TransitionScreen._instance = null;
  BlockPuzzle.TransitionScreen = TransitionScreen;
})(BlockPuzzle || (BlockPuzzle = {}));

var src;

(function (src) {
  var App = BlockPuzzle.App;
  var Settings = BlockPuzzle.Settings;

  var TutorialManager =
  /*#__PURE__*/
  function () {
    function TutorialManager() {
      _classCallCheck(this, TutorialManager);
    }

    _createClass(TutorialManager, [{
      key: "init",
      value: function init() {
        this.tutorialHand = App.instance.make.sprite(0, 0, Settings.GAME_ATLAS, 'tutorialHand0000');
      }
    }], [{
      key: "instance",
      get: function get() {
        return TutorialManager._instance ? TutorialManager._instance : TutorialManager._instance = new TutorialManager();
      }
    }]);

    return TutorialManager;
  }();

  TutorialManager._instance = null;
  src.TutorialManager = TutorialManager;
})(src || (src = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AchievementInformer =
  /*#__PURE__*/
  function (_Phaser$Group14) {
    _inherits(AchievementInformer, _Phaser$Group14);

    function AchievementInformer(achievementsButton) {
      var _this71;

      _classCallCheck(this, AchievementInformer);

      _this71 = _possibleConstructorReturn(this, _getPrototypeOf(AchievementInformer).call(this, achievementsButton.game));
      _this71.active = false;
      _this71.visibilityTimer = 0;
      _this71.targetY = -100;
      _this71.achievementsButton = achievementsButton;
      _this71.level = achievementsButton.level;

      _this71.buildChildren();

      return _this71;
    }

    _createClass(AchievementInformer, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "show",
      value: function show(achievementModel) {
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
        this.game.add.tween(this.container).to({
          alpha: 1
        }, 250, Phaser.Easing.Linear.None, true);
        this.game.add.tween(this.container).to({
          y: this.targetY
        }, 280, Phaser.Easing.Back.Out, true);
        this.container.scale.set(0.6);
        this.game.add.tween(this.container.scale).to({
          x: 1,
          y: 1
        }, 280, Phaser.Easing.Sinusoidal.Out, true);
        this.achievementSprite.scale.set(0);
        this.game.add.tween(this.achievementSprite.scale).to({
          x: 0.7,
          y: 0.7
        }, 270, Phaser.Easing.Back.Out, true, 30);
        this.achievementSprite.y = -3;
        this.game.add.tween(this.achievementSprite).to({
          y: -7
        }, 350, Phaser.Easing.Sinusoidal.InOut, true, 180, -1, true);
        this.badgesSprite.alpha = 0;
        this.game.add.tween(this.badgesSprite).to({
          alpha: 1
        }, 160, Phaser.Easing.Sinusoidal.In, true, 100);
        this.badgesSprite.scale.set(0);
        this.game.add.tween(this.badgesSprite.scale).to({
          x: 1,
          y: 1
        }, 200, Phaser.Easing.Back.Out, true, 100);
        this.achievementSprite.frameName = 'achievement' + achievementModel.key + '0000';
        this.badgesSprite.frameName = 'achievementBadges000' + Phaser.Math.clamp(BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel) - 1, 0, 2);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this72 = this;

        this.active = false;
        this.game.tweens.removeFrom(this.container.scale, false);
        this.game.tweens.removeFrom(this.container, false);
        this.game.add.tween(this.container).to({
          alpha: 0
        }, 150, Phaser.Easing.Linear.None, true);
        this.game.add.tween(this.container).to({
          y: 0
        }, 220, Phaser.Easing.Sinusoidal.Out, true);
        this.game.add.tween(this.container.scale).to({
          x: 0.5,
          y: 0.5
        }, 150, Phaser.Easing.Back.Out, true).onComplete.add(function () {
          return _this72.visible = false;
        });
      }
    }, {
      key: "openAchievements",
      value: function openAchievements() {
        this.achievementsButton.handleClick();
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        this.targetY = 110;
        this.game.add.tween(this.container).to({
          y: this.targetY
        }, 50, Phaser.Easing.Sinusoidal.Out, true);
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        this.targetY = 110;
        this.game.add.tween(this.container).to({
          y: this.targetY
        }, 50, Phaser.Easing.Sinusoidal.Out, true);
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        this.targetY = -110;
        this.game.add.tween(this.container).to({
          y: this.targetY
        }, 50, Phaser.Easing.Sinusoidal.Out, true);
      }
    }, {
      key: "update",
      value: function update() {
        if (this.visible && this.active) {
          if (this.visibilityTimer > 0) {
            this.visibilityTimer -= this.game.time.elapsedMS;

            if (this.visibilityTimer <= 0) {
              this.hide();
            }
          }
        }
      }
    }]);

    return AchievementInformer;
  }(Phaser.Group);

  BlockPuzzle.AchievementInformer = AchievementInformer;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AchievementPanel =
  /*#__PURE__*/
  function (_Phaser$Group15) {
    _inherits(AchievementPanel, _Phaser$Group15);

    function AchievementPanel(windowAcheivements, achievementKey, x, y) {
      var _this73;

      _classCallCheck(this, AchievementPanel);

      _this73 = _possibleConstructorReturn(this, _getPrototypeOf(AchievementPanel).call(this, windowAcheivements.game));
      _this73.currentReward = 0;
      _this73.windowAchievements = windowAcheivements;
      _this73.achievementKey = achievementKey;

      _this73.position.set(x, y);

      _this73.buildContent();

      return _this73;
    }

    _createClass(AchievementPanel, [{
      key: "updateView",
      value: function updateView() {
        var achievementModel = BlockPuzzle.AchievementsManager.instance.getAchievementModel(this.achievementKey);
        var currentLevel = BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel);
        var currentValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.currentValue - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.currentValue;
        var displayedValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.currentValue : achievementModel.requiredValues[2] : achievementModel.currentValue;
        var targetValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.requiredValues[currentLevel] - achievementModel.requiredValues[currentLevel - 1] : achievementModel.requiredValues[2] : achievementModel.requiredValues[0];
        var displayTargetValue = currentLevel > 0 ? currentLevel < 3 ? achievementModel.requiredValues[currentLevel] : achievementModel.requiredValues[2] : achievementModel.requiredValues[0];
        var currentProgress = currentLevel < 3 ? currentValue / targetValue : 1;
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
          this.progressText.setText("".concat(displayedValue, "/").concat(displayTargetValue));
        } else {
          this.progressBarContainer.visible = false;
          this.maxText.visible = true;
        }
        /* show/hide claim button */


        if (achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
          this.buttonClaimReward.visible = true;
          this.progressBarContainer.visible = false;
          this.currentReward = achievementModel.rewards[0];
          this.buttonClaimReward.updateView('+' + this.currentReward);
        } else if (achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
          this.buttonClaimReward.visible = true;
          this.progressBarContainer.visible = false;
          this.currentReward = achievementModel.rewards[1];
          this.buttonClaimReward.updateView('+' + this.currentReward);
        } else if (achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
          this.buttonClaimReward.visible = true;
          this.progressBarContainer.visible = false;
          this.currentReward = achievementModel.rewards[2];
          this.buttonClaimReward.updateView('+' + this.currentReward);
        }
      }
    }, {
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "claimRewardClicked",
      value: function claimRewardClicked() {
        BlockPuzzle.StarsManager.instance.pickupStars(this.currentReward, true);
        this.currentReward = 0;
        var achievementModel = BlockPuzzle.AchievementsManager.instance.getAchievementModel(this.achievementKey);
        var currentLevel = BlockPuzzle.AchievementsManager.getAchievementLevel(achievementModel);

        if (achievementModel) {
          if (achievementModel.currentValue >= achievementModel.requiredValues[0] && !achievementModel.rewardClaimed[0]) {
            achievementModel.rewardClaimed[0] = true;
            this.badges.scale.set(0);
            this.game.add.tween(this.badges.scale).to({
              x: 1,
              y: 1
            }, 300, Phaser.Easing.Back.Out, true, 0);
          } else if (achievementModel.currentValue >= achievementModel.requiredValues[1] && !achievementModel.rewardClaimed[1]) {
            achievementModel.rewardClaimed[1] = true;
            this.badges.scale.set(0);
            this.game.add.tween(this.badges.scale).to({
              x: 1,
              y: 1
            }, 300, Phaser.Easing.Back.Out, true, 0);
          } else if (achievementModel.currentValue >= achievementModel.requiredValues[2] && !achievementModel.rewardClaimed[2]) {
            achievementModel.rewardClaimed[2] = true;
            this.badges.scale.set(0);
            this.game.add.tween(this.badges.scale).to({
              x: 1,
              y: 1
            }, 300, Phaser.Easing.Back.Out, true, 0);
          }

          BlockPuzzle.LocalStorageController.instance.save();
        }

        this.updateView();
      }
    }]);

    return AchievementPanel;
  }(Phaser.Group);

  BlockPuzzle.AchievementPanel = AchievementPanel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ButtonClaimReward =
  /*#__PURE__*/
  function (_Phaser$Group16) {
    _inherits(ButtonClaimReward, _Phaser$Group16);

    function ButtonClaimReward(panel, reward, initialScale, actionHandler, actionHandlerContext) {
      var _this74;

      _classCallCheck(this, ButtonClaimReward);

      _this74 = _possibleConstructorReturn(this, _getPrototypeOf(ButtonClaimReward).call(this, panel.game));
      _this74.achievementPanel = panel;
      _this74.container = _this74.add(_this74.game.make.group());
      /* backplate */

      _this74.backplate = _this74.container.add(_this74.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'buttonClaim0000'));

      _this74.backplate.anchor.setTo(0.5, 0.5);

      _this74.backplate.inputEnabled = true;

      _this74.backplate.events.onInputUp.add(actionHandler, actionHandlerContext);

      _this74.backplate["overTween"] = BlockPuzzle.App.instance.add.tween(_this74.container.scale).to({
        x: 1.05,
        y: 1.05
      }, 100);
      _this74.backplate["outTween"] = BlockPuzzle.App.instance.add.tween(_this74.container.scale).to({
        x: 1,
        y: 1
      }, 100);
      _this74.backplate["downTween"] = BlockPuzzle.App.instance.add.tween(_this74.container.scale).to({
        x: 0.95,
        y: 0.95
      }, 50).to({
        x: 1,
        y: 1
      }, 50);

      _this74.backplate.events.onInputOver.add(BlockPuzzle.ButtonUtils.mouseOverHandler, _assertThisInitialized(_this74), 0);

      _this74.backplate.events.onInputOut.add(BlockPuzzle.ButtonUtils.mouseOutHandler, _assertThisInitialized(_this74), 0);

      _this74.backplate.events.onInputDown.add(BlockPuzzle.ButtonUtils.mouseDownHandler, _assertThisInitialized(_this74), 0);

      _this74.backplate.events.onInputDown.add(function () {
        return BlockPuzzle.SoundController.instance.playRewardClaimedSound();
      }, _assertThisInitialized(_this74));
      /* price text */


      _this74.rewardText = _this74.add(new BlockPuzzle.BitmapTextField(reward, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.55, 0.5, 0.5, 1));

      _this74.rewardText.position.set(-17, -3);

      return _this74;
    }

    _createClass(ButtonClaimReward, [{
      key: "updateView",
      value: function updateView(rewardText) {
        this.rewardText.changeText(rewardText);
        this.game.tweens.removeFrom(this.scale);
        this.scale.set(1);
        this.game.add.tween(this.scale).to({
          x: 1.04,
          y: 1.04
        }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
      }
    }]);

    return ButtonClaimReward;
  }(Phaser.Group);

  BlockPuzzle.ButtonClaimReward = ButtonClaimReward;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ButtonAchievements =
  /*#__PURE__*/
  function (_Phaser$Group17) {
    _inherits(ButtonAchievements, _Phaser$Group17);

    function ButtonAchievements(level) {
      var _this75;

      _classCallCheck(this, ButtonAchievements);

      _this75 = _possibleConstructorReturn(this, _getPrototypeOf(ButtonAchievements).call(this, level.game, null));
      _this75.level = level;
      _this75.button = _this75.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonAchievements', 0, 0, 1, _this75.handleClick, _assertThisInitialized(_this75)));
      _this75.exclamationMark = _this75.add(_this75.game.make.sprite(25, 22, BlockPuzzle.Settings.GAME_ATLAS));

      _this75.exclamationMark.anchor.set(0.5);

      _this75.exclamationMark.animations.add('twerking', Phaser.Animation.generateFrameNames('achievementsNotification', 0, 99, '', 4)).play(60, true);

      _this75.exclamationMark.visible = BlockPuzzle.AchievementsManager.instance.hasAvailableRewards();
      _this75.achievementInformer = _this75.add(new BlockPuzzle.AchievementInformer(_assertThisInitialized(_this75)));
      BlockPuzzle.AchievementsManager.instance.onAchievementCompleted.add(_this75.handleAchievementCompleted, _assertThisInitialized(_this75));
      return _this75;
    }

    _createClass(ButtonAchievements, [{
      key: "destroy",
      value: function destroy() {
        BlockPuzzle.AchievementsManager.instance.onAchievementCompleted.remove(this.handleAchievementCompleted, this);

        _get(_getPrototypeOf(ButtonAchievements.prototype), "destroy", this).call(this);
      }
    }, {
      key: "handleAchievementCompleted",
      value: function handleAchievementCompleted(achievementModel) {
        this.achievementInformer.show(achievementModel);

        if (this.exclamationMark.visible == false) {
          this.exclamationMark.visible = true;
        }
      }
    }, {
      key: "handleClick",
      value: function handleClick() {
        if (this.achievementInformer.active) {
          this.achievementInformer.hide();
        }

        this.exclamationMark.visible = false;
        BlockPuzzle.WindowManager.instance.showAchievements();
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        this.achievementInformer.resizePortrait();
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        this.achievementInformer.resizeSquared();
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        this.achievementInformer.resizeLandscape();
      }
    }, {
      key: "setScale",
      value: function setScale(value) {
        this.button["setScale"](value);
      }
    }]);

    return ButtonAchievements;
  }(Phaser.Group);

  BlockPuzzle.ButtonAchievements = ButtonAchievements;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ButtonCloseWindow =
  /*#__PURE__*/
  function (_Phaser$Group18) {
    _inherits(ButtonCloseWindow, _Phaser$Group18);

    function ButtonCloseWindow(parentWindow, actionHandler, actionHandlerContext) {
      var _this76;

      _classCallCheck(this, ButtonCloseWindow);

      _this76 = _possibleConstructorReturn(this, _getPrototypeOf(ButtonCloseWindow).call(this, parentWindow.game));
      _this76.parentWindow = parentWindow;
      _this76.container = _this76.add(_this76.game.make.group());
      _this76.button = _this76.container.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonClose', 0, 0, 1, actionHandler, actionHandlerContext));
      return _this76;
    }

    _createClass(ButtonCloseWindow, [{
      key: "resize",
      value: function resize(dx, dy) {
        this.position.set(this.parentWindow.windowManager.windowBounds.right + dx, this.parentWindow.windowManager.windowBounds.top + dy);
      }
    }]);

    return ButtonCloseWindow;
  }(Phaser.Group);

  BlockPuzzle.ButtonCloseWindow = ButtonCloseWindow;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ButtonGetStars =
  /*#__PURE__*/
  function (_Phaser$Group19) {
    _inherits(ButtonGetStars, _Phaser$Group19);

    function ButtonGetStars() {
      var _this77;

      _classCallCheck(this, ButtonGetStars);

      _this77 = _possibleConstructorReturn(this, _getPrototypeOf(ButtonGetStars).call(this, BlockPuzzle.App.instance, null));
      _this77.isActive = false;
      _this77.starsAmount = BlockPuzzle.Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT;
      _this77.button = _this77.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonGetStars', 0, 0, 1, _this77.getStarsClicked, _assertThisInitialized(_this77)));
      _this77.numStarsText = _this77.add(new BlockPuzzle.BitmapTextField('+' + _this77.starsAmount, BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.42, 0.5, 0.5, 1));

      _this77.numStarsText.position.set(-20, 3);

      _this77.visible = false;
      _this77.isActive = false;
      return _this77;
    }

    _createClass(ButtonGetStars, [{
      key: "getStarsClicked",
      value: function getStarsClicked() {
        var _this78 = this;
        if (BlockPuzzle.Settings.ENABLE_API) {
          if (window.famobi.hasRewardedAd()) {
            BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
            window.famobi.rewardedAd(function(result) {
              if(result.rewardGranted) {
                return _this78.giveReward();
              } else {
                return _this78.denyReward();
              }
            });
          }
        } else {
          BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP = +new Date().getTime();
          this.giveReward();
        }
      }
    }, {
      key: "giveReward",
      value: function giveReward() {
        BlockPuzzle.StarsManager.instance.pickupStars(this.starsAmount);
        this.starsAmount += BlockPuzzle.Settings.GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP;
        this.numStarsText.changeText('+' + this.starsAmount, true);
        this.hide();
      }
    }, {
      key: "denyReward",
      value: function denyReward() {
        var self = this;
        this.hide();

        setTimeout(function() {
          if(!self.isActive && !self.visible && window.famobi.hasRewardedAd()) {
            self.activate();
          }
        }, 1000);
      }
    }, {
      key: "activate",
      value: function activate() {
        this.isActive = true;
        this.visible = true;
        this.button.inputEnabled = true;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.isActive = false;
        this.visible = false;
      }
    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(ButtonGetStars.prototype), "update", this).call(this);

        if (!this.isActive && BlockPuzzle.Settings.GET_STARS_BUTTON_ENABLED && BlockPuzzle.Settings.ENABLE_API && +new Date().getTime() - BlockPuzzle.Settings.GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP > BlockPuzzle.Settings.GET_STARS_BUTTON_COOLDOWN * 1000) {
          if (window.famobi.hasRewardedAd()) {
            this.activate();
          }
        }
      }
    }]);

    return ButtonGetStars;
  }(Phaser.Group);

  BlockPuzzle.ButtonGetStars = ButtonGetStars;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractResultsCounter =
  /*#__PURE__*/
  function (_Phaser$Group20) {
    _inherits(AbstractResultsCounter, _Phaser$Group20);

    function AbstractResultsCounter(results, iconFrameName) {
      var _this79;

      _classCallCheck(this, AbstractResultsCounter);

      _this79 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractResultsCounter).call(this, results.game, null));
      _this79.results = results;

      _this79.buildContent();

      _this79.buildIcon(iconFrameName);

      return _this79;
    }

    _createClass(AbstractResultsCounter, [{
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "buildIcon",
      value: function buildIcon(frameName) {
        this.icon = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, frameName + '0000'));
        this.icon.anchor.set(0.5);
      }
    }, {
      key: "show",
      value: function show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget) {
        var leftValuePrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var rightValuePrefix = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        var delay = arguments.length > 6 ? arguments[6] : undefined;
        var textTweenDelay = arguments.length > 7 ? arguments[7] : undefined;
        var tweenTextDuration = arguments.length > 8 ? arguments[8] : undefined;
        this.resetTweens();
        this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
        this.animateAppearing(delay);
      }
    }, {
      key: "tweenTexts",
      value: function tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
        this.textFieldLeft.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
        this.textFieldRight.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        var _this80 = this;

        this.icon.scale.set(0.5);
        this.game.add.tween(this.icon.scale).to({
          x: 1,
          y: 1
        }, 350, Phaser.Easing.Back.Out, true, delay + 100);
        this.icon.alpha = 0;
        this.game.add.tween(this.icon).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
        this.padLeft.scale.x = 0;
        this.game.add.tween(this.padLeft.scale).to({
          x: -1
        }, 450, Phaser.Easing.Back.Out, true, delay + 150);
        this.padRight.scale.x = 0;
        this.game.add.tween(this.padRight.scale).to({
          x: 1
        }, 450, Phaser.Easing.Back.Out, true, delay + 150);
        this.textFieldLeft.visible = false;
        this.textFieldLeft.scale.set(0.5);
        this.game.add.tween(this.textFieldLeft.scale).to({
          x: 0.75,
          y: 0.75
        }, 450, Phaser.Easing.Back.Out, true, delay + 250).onStart.add(function () {
          return _this80.textFieldLeft.visible = true;
        });
        this.textFieldRight.visible = false;
        this.textFieldRight.scale.set(0.5);
        this.game.add.tween(this.textFieldRight.scale).to({
          x: 0.75,
          y: 0.75
        }, 450, Phaser.Easing.Back.Out, true, delay + 330).onStart.add(function () {
          return _this80.textFieldRight.visible = true;
        });
        this.textFieldLeft.visible = false;
        this.textFieldLeft.alpha = 0;
        this.game.add.tween(this.textFieldLeft).to({
          alpha: 1
        }, 500, Phaser.Easing.Linear.None, true, delay + 250).onStart.add(function () {
          return _this80.textFieldLeft.visible = true;
        });
        this.textFieldRight.visible = false;
        this.textFieldRight.alpha = 0;
        this.game.add.tween(this.textFieldRight).to({
          alpha: 1
        }, 500, Phaser.Easing.Linear.None, true, delay + 330).onStart.add(function () {
          return _this80.textFieldRight.visible = true;
        });
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
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
    }]);

    return AbstractResultsCounter;
  }(Phaser.Group);

  BlockPuzzle.AbstractResultsCounter = AbstractResultsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractUICounter =
  /*#__PURE__*/
  function (_Phaser$Group21) {
    _inherits(AbstractUICounter, _Phaser$Group21);

    function AbstractUICounter(uiManager) {
      var _this81;

      _classCallCheck(this, AbstractUICounter);

      _this81 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractUICounter).call(this, uiManager.game, null));
      _this81.uiManager = uiManager;
      _this81.level = uiManager.level;

      _this81.buildChildren();

      return _this81;
    }

    _createClass(AbstractUICounter, [{
      key: "tweenIcon",
      value: function tweenIcon(duration) {
        if (duration < 400) {
          this.game.add.tween(this.icon.scale).to({
            x: 1.075,
            y: 1.075
          }, 100, Phaser.Easing.Sinusoidal.Out, false).to({
            x: 1.0,
            y: 1.0
          }, 240, Phaser.Easing.Sinusoidal.In, false).start();
        } else {
          this.game.add.tween(this.icon.scale).to({
            x: 1.13,
            y: 1.13
          }, .25 * duration, Phaser.Easing.Sinusoidal.Out, false).to({
            x: 1.15,
            y: 1.15
          }, 0.1 * duration, Phaser.Easing.Sinusoidal.In, false).to({
            x: 1.0,
            y: 1.0
          }, 0.65 * duration, Phaser.Easing.Sinusoidal.In, false).start();
        }
      }
    }]);

    return AbstractUICounter;
  }(Phaser.Group);

  BlockPuzzle.AbstractUICounter = AbstractUICounter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var DoubleStarsButton =
  /*#__PURE__*/
  function (_Phaser$Group22) {
    _inherits(DoubleStarsButton, _Phaser$Group22);

    function DoubleStarsButton(results) {
      var _this82;

      _classCallCheck(this, DoubleStarsButton);

      _this82 = _possibleConstructorReturn(this, _getPrototypeOf(DoubleStarsButton).call(this, results.game, null));
      _this82.starsAmount = 0;
      _this82.isActive = true;
      _this82.results = results;

      _this82.buildContent();

      return _this82;
    }

    _createClass(DoubleStarsButton, [{
      key: "buildContent",
      value: function buildContent() {
        this.pad = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsScorePad0000'));
        this.pad.anchor.set(0, 0.5);
        this.pad.scale.set(-0.8, 0.9);
        this.textField = this.add(new BlockPuzzle.BitmapTextField('+12', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.7, 0.5, 0.5, 1));
        this.textField.position.set(-82, 0);
        this.buttonContainer = this.add(this.game.make.group());
        this.buttonDoubleStars = this.buttonContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRewardedVideoSmall', 0, 0, 1, this.doubleStarsClicked, this));
      }
    }, {
      key: "doubleStarsClicked",
      value: function doubleStarsClicked() {
        var _this83 = this;

        if (this.isActive) {
          if(window.famobi.hasRewardedAd()) {
            window.famobi.rewardedAd(function(result) {
              if(result.rewardGranted) {
                return _this83.collapse();
              } else {
                return _this83.rewardDenied();
              }
            });
          }
        }
      }
    }, {
      key: "show",
      value: function show(delay, starsAmount) {
        var _this84 = this;

        this.resetTweens();
        this.scale.set(1.2);
        this.isActive = true;
        this.starsAmount = starsAmount;
        this.textField.changeText('+' + starsAmount);
        this.buttonContainer.scale.set(0.5);
        this.game.add.tween(this.buttonContainer.scale).to({
          x: 1.2,
          y: 1.2
        }, 300, Phaser.Easing.Back.Out, true, delay + 100);
        this.buttonContainer.alpha = 0;
        this.game.add.tween(this.buttonContainer).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
        this.pad.scale.x = 0;
        this.game.add.tween(this.pad.scale).to({
          x: -0.8
        }, 250, Phaser.Easing.Back.Out, true, delay + 100);
        this.textField.visible = false;
        this.textField.scale.set(0.2);
        this.game.add.tween(this.textField.scale).to({
          x: 0.7,
          y: 0.7
        }, 300, Phaser.Easing.Back.Out, true, delay + 200).onStart.add(function () {
          return _this84.textField.visible = true;
        });

        if(window.famobi.hasRewardedAd()) {
           // do nothing
        }
      }
    }, {
      key: "collapse",
      value: function collapse() {
        var _this85 = this;

        this.resetTweens();
        this.isActive = false;
        this.results.addBonusStars(this.starsAmount);
        this.starsAmount = 0;
        this.game.add.tween(this.textField).to({
          alpha: 0
        }, 120, Phaser.Easing.Linear.None, true);
        this.game.add.tween(this.textField.scale).to({
          x: 0,
          y: 0
        }, 120, Phaser.Easing.Back.In, true);
        this.game.add.tween(this.pad.scale).to({
          x: 0
        }, 200, Phaser.Easing.Sinusoidal.In, true, 0);
        this.game.add.tween(this.buttonContainer.scale).to({
          x: 0,
          y: 0
        }, 200, Phaser.Easing.Back.In, true, 100).onComplete.add(function () {
          return _this85.buttonContainer.visible = false;
        });
      }
    }, {
      key: "rewardDenied",
      value: function rewardDenied() {
        setTimeout(function() {
          window.famobi.hasRewardedAd();
        }, 500);
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
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
    }]);

    return DoubleStarsButton;
  }(Phaser.Group);

  BlockPuzzle.DoubleStarsButton = DoubleStarsButton;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ScoreCounter =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract13) {
    _inherits(ScoreCounter, _BlockPuzzle$Abstract13);

    function ScoreCounter() {
      var _this86;

      _classCallCheck(this, ScoreCounter);

      _this86 = _possibleConstructorReturn(this, _getPrototypeOf(ScoreCounter).apply(this, arguments));
      _this86.lastScoreValue = 0;
      _this86.lastHighscoreValue = BlockPuzzle.ScoreManager.instance.getMaxScores();
      return _this86;
    }

    _createClass(ScoreCounter, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "dispatchScoreChanged",
      value: function dispatchScoreChanged(scores) {
        if (this.lastScoreValue != scores) {
          var duration = Phaser.Math.clamp(50 * Math.pow(Math.abs(scores - this.lastScoreValue), 0.5), 250, 1000);
          this.textField.tweenText(this.lastScoreValue, scores, duration, 0);
          this.lastScoreValue = scores;
          this.tweenIcon(duration);
          var currentHighscores = Math.max(BlockPuzzle.ScoreManager.instance.getMaxScores(), scores);

          if (this.lastHighscoreValue < currentHighscores) {
            this.highscoreText.tweenText(this.lastHighscoreValue, currentHighscores, duration, 0);
            this.lastHighscoreValue = currentHighscores;
          }
        }
      }
    }, {
      key: "update",
      value: function update() {
        if (this.highscoreGroup.visible) {
          var textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
          this.highscoreIcon.x = -textFieldWidth / 2 - 2;
          this.highscoreText.x = -textFieldWidth / 2;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        BlockPuzzle.ScoreManager.instance.onScoreChanges.remove(this.dispatchScoreChanged, this);

        _get(_getPrototypeOf(ScoreCounter.prototype), "destroy", this).call(this);
      }
    }]);

    return ScoreCounter;
  }(BlockPuzzle.AbstractUICounter);

  BlockPuzzle.ScoreCounter = ScoreCounter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ShopStarsCounter =
  /*#__PURE__*/
  function (_Phaser$Group23) {
    _inherits(ShopStarsCounter, _Phaser$Group23);

    function ShopStarsCounter(windowShop) {
      var _this87;

      _classCallCheck(this, ShopStarsCounter);

      _this87 = _possibleConstructorReturn(this, _getPrototypeOf(ShopStarsCounter).call(this, windowShop.game, null));
      _this87.windowShop = windowShop;

      _this87.buildChildren();

      return _this87;
    }

    _createClass(ShopStarsCounter, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "dispatchStarAdded",
      value: function dispatchStarAdded(starsAmount) {
        this.updateStarsAmount(starsAmount);
      }
    }, {
      key: "setStarsAmount",
      value: function setStarsAmount(value) {
        this.textField.changeText('' + value, true);
      }
    }, {
      key: "updateStarsAmount",
      value: function updateStarsAmount(starsAmount) {
        this.game.tweens.removeFrom(this.textField.scale);
        this.textField.changeText('' + starsAmount);
        this.textField.scale.set(0);
        this.game.add.tween(this.textField.scale).to({
          x: 0.6,
          y: 0.6
        }, 190, Phaser.Easing.Back.Out, true);
      }
    }, {
      key: "displayError",
      value: function displayError() {
        this.game.tweens.removeFrom(this.errorSmile);
        this.game.tweens.removeFrom(this.errorSmile.scale);
        this.errorSmile.alpha = 0;
        this.errorSmile.x = this.textField.x + this.textField.getLocalBounds().width * this.textField.scale.x + 80;
        this.errorSmile.y = 20;
        this.errorSmile.scale.set(0);
        this.game.add.tween(this.errorSmile).to({
          alpha: 0.9
        }, 120, Phaser.Easing.Sinusoidal.In, false).to({
          alpha: 0
        }, 700, Phaser.Easing.Quintic.In, false).start();
        this.game.add.tween(this.errorSmile).to({
          y: 2
        }, 180, Phaser.Easing.Sinusoidal.In, false).to({
          y: -30
        }, 700, Phaser.Easing.Linear.None, false).start();
        this.game.add.tween(this.errorSmile.scale).to({
          x: 1.5,
          y: 1.5
        }, 240, Phaser.Easing.Elastic.Out, false).to({
          x: 1.65,
          y: 1.65
        }, 550, Phaser.Easing.Quadratic.In, false).start();
      }
    }]);

    return ShopStarsCounter;
  }(Phaser.Group);

  BlockPuzzle.ShopStarsCounter = ShopStarsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var StarsCounter =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract14) {
    _inherits(StarsCounter, _BlockPuzzle$Abstract14);

    function StarsCounter() {
      _classCallCheck(this, StarsCounter);

      return _possibleConstructorReturn(this, _getPrototypeOf(StarsCounter).apply(this, arguments));
    }

    _createClass(StarsCounter, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "playStarIncreasingTween",
      value: function playStarIncreasingTween() {
        BlockPuzzle.SoundController.instance.playStarReceivedSound();
        this.game.add.tween(this.textField.scale).to({
          x: 1.3 / 2,
          y: 1.3 / 2
        }, 140, Phaser.Easing.Sinusoidal.Out, true, 0, 0, true);
        this.game.add.tween(this.icon.scale).to({
          x: 1.45,
          y: 1.45
        }, 80, Phaser.Easing.Sinusoidal.Out, false).to({
          x: 0.87,
          y: 0.87
        }, 200, Phaser.Easing.Sinusoidal.In, false).to({
          x: 1,
          y: 1
        }, 60, Phaser.Easing.Sinusoidal.Out, false).start();
      }
    }, {
      key: "dispatchStarAdded",
      value: function dispatchStarAdded(starsAmount) {
        this.updateStarsAmount(starsAmount);
        this.playStarIncreasingTween();
      }
    }, {
      key: "updateStarsAmount",
      value: function updateStarsAmount(starsAmount) {
        this.textField.changeText('' + starsAmount);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        BlockPuzzle.StarsManager.instance.onStarAdded.remove(this.dispatchStarAdded, this);
        BlockPuzzle.StarsManager.instance.onStarsAmountChanged.remove(this.updateStarsAmount, this);

        _get(_getPrototypeOf(StarsCounter.prototype), "destroy", this).call(this);
      }
    }]);

    return StarsCounter;
  }(BlockPuzzle.AbstractUICounter);

  BlockPuzzle.StarsCounter = StarsCounter;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var MultiplierBar =
  /*#__PURE__*/
  function (_Phaser$Group24) {
    _inherits(MultiplierBar, _Phaser$Group24);

    function MultiplierBar(uiManager) {
      var _this88;

      _classCallCheck(this, MultiplierBar);

      _this88 = _possibleConstructorReturn(this, _getPrototypeOf(MultiplierBar).call(this, uiManager.game));
      _this88.padHeight = 70;
      _this88.storedMultiplierValue = 1;
      _this88.storedProgressValue = 0;
      _this88.uiManager = uiManager;
      _this88.level = uiManager.level;

      _this88.buildChildren();

      BlockPuzzle.ScoreManager.instance.onMultiplierChanges.add(_this88.handleMultiplierChange, _assertThisInitialized(_this88));
      return _this88;
    }

    _createClass(MultiplierBar, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "handleMultiplierChange",
      value: function handleMultiplierChange(multiplier, progress) {
        var _this89 = this;

        if (this.storedMultiplierValue == multiplier) {
          this.game.add.tween(this.progressMask).to({
            y: -1 + (0.5 - progress) * this.padHeight
          }, 500, Phaser.Easing.Sinusoidal.Out, true);
          this.game.tweens.removeFrom(this.padWhite);
          this.game.add.tween(this.padWhite).to({
            alpha: 0.5
          }, 250, Phaser.Easing.Linear.None, false).to({
            alpha: 0.0
          }, 250, Phaser.Easing.Linear.None, false).start();
        } else if (multiplier > this.storedMultiplierValue) {
          BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.TOTAL_LEVEL_UPS, multiplier - this.storedMultiplierValue);
          BlockPuzzle.SoundController.instance.playlevelUpSound();
          var totalDuration = 500;
          var fillingDuration = Phaser.Math.clamp(1 - this.storedProgressValue, 0.1, 0.8) * totalDuration;
          this.game.add.tween(this.progressMask).to({
            y: -1 + (0.5 - 1) * this.padHeight
          }, fillingDuration, Phaser.Easing.Sinusoidal.Out, false).to({
            y: -1 + 0.5 * this.padHeight
          }, 1, Phaser.Easing.Sinusoidal.Out, false).to({
            y: -1 + (0.5 - progress) * this.padHeight
          }, totalDuration - fillingDuration + 1, Phaser.Easing.Sinusoidal.Out, false).start();
          this.game.time.events.add(fillingDuration, function () {
            return _this89.updateMultiplierTexts(multiplier);
          });
          this.game.tweens.removeFrom(this.padWhite);
          this.game.add.tween(this.padWhite).to({
            alpha: 0.6
          }, fillingDuration, Phaser.Easing.Linear.None, false).to({
            alpha: 0
          }, totalDuration - fillingDuration, Phaser.Easing.Linear.None, false).start();
        }

        this.storedMultiplierValue = multiplier;
        this.storedProgressValue = progress;
      }
    }, {
      key: "updateMultiplierTexts",
      value: function updateMultiplierTexts(multiplier) {
        this.textFieldGrayscale.changeText('x' + multiplier);
        this.textFieldGold.changeText('x' + multiplier);
      }
    }]);

    return MultiplierBar;
  }(Phaser.Group);

  BlockPuzzle.MultiplierBar = MultiplierBar;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ResultsMultiplierBar =
  /*#__PURE__*/
  function (_Phaser$Group25) {
    _inherits(ResultsMultiplierBar, _Phaser$Group25);

    function ResultsMultiplierBar(results) {
      var _this90;

      _classCallCheck(this, ResultsMultiplierBar);

      _this90 = _possibleConstructorReturn(this, _getPrototypeOf(ResultsMultiplierBar).call(this, results.game));
      _this90.padHeight = 70;
      _this90.storedMultiplierValue = 1;
      _this90.storedProgressValue = 0;
      _this90.results = results;

      _this90.buildChildren();

      return _this90;
    }

    _createClass(ResultsMultiplierBar, [{
      key: "buildChildren",
      value: function buildChildren() {
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
    }, {
      key: "setValue",
      value: function setValue(multiplier, progress) {
        this.updateMultiplierTexts(multiplier);
        this.game.add.tween(this.progressMask).to({
          y: -1 + (0.5 - progress) * this.padHeight
        }, 800, Phaser.Easing.Sinusoidal.Out, true, 650);
        this.textFieldGrayscale.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);
        this.textFieldGold.tweenTextAdvanced('x', 1, multiplier, 800, 650, false);
        this.storedMultiplierValue = multiplier;
        this.storedProgressValue = progress;
      }
    }, {
      key: "updateMultiplierTexts",
      value: function updateMultiplierTexts(multiplier) {
        this.textFieldGrayscale.changeText('x' + multiplier);
        this.textFieldGold.changeText('x' + multiplier);
      }
    }]);

    return ResultsMultiplierBar;
  }(Phaser.Group);

  BlockPuzzle.ResultsMultiplierBar = ResultsMultiplierBar;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractPowerup =
  /*#__PURE__*/
  function (_Phaser$Group26) {
    _inherits(AbstractPowerup, _Phaser$Group26);

    function AbstractPowerup(powerupContainer, powerupType) {
      var _this91;

      _classCallCheck(this, AbstractPowerup);

      _this91 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractPowerup).call(this, powerupContainer.game, null));
      _this91.dragging = false;
      _this91.available = false;
      _this91.countdownActive = false;
      _this91.startAngle = 270;
      _this91.endAngle = -90 - 0.000001;
      _this91.currentStep = {
        value: 0
      };
      _this91.iconDelta = {
        x: 0,
        y: 0
      };
      _this91.powerupContainer = powerupContainer;
      _this91.level = powerupContainer.level;
      _this91.powerupType = powerupType;
      _this91.available = BlockPuzzle.PowerupManager.instance.isBought(_this91.powerupType);

      _this91.buildContent();

      _this91.addListeners();

      return _this91;
    }

    _createClass(AbstractPowerup, [{
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "addListeners",
      value: function addListeners() {
        BlockPuzzle.PowerupManager.instance.onPowerupBought.add(this.handlePowerupBought, this);
        this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this, 999);
        this.pad.inputEnabled = true;
        this.pad.input.pixelPerfectClick = true;
        this.pad.input.pixelPerfectAlpha = 1;
        this.pad.events.onInputDown.add(this.handleInputDown, this);
        this.pad.events.onInputUp.add(this.handleInputUp, this);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing() {
        this.visible = true;
        this.icon.scale.set(1);
        this.icon.position.set(0, 0);
        this.icon.visible = true;
        this.scale.set(0);
        this.game.add.tween(this.scale).to({
          x: 1,
          y: 1
        }, 240, Phaser.Easing.Circular.Out, true, 0);
        this.game.tweens.removeFrom(this, false);
        this.alpha = 0;
        this.y = 35;
        this.game.add.tween(this).to({
          alpha: 1,
          y: 0
        }, 240, Phaser.Easing.Linear.None, true);
      }
    }, {
      key: "handleInputDown",
      value: function handleInputDown(sprite, pointer) {
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
        this.game.add.tween(this.iconDelta).to(this.level.serviceManager.layoutService.getPowerupDraggingDelta(), 80, Phaser.Easing.Linear.None, true);
        this.game.tweens.removeFrom(this.icon.scale);
        this.icon.scale.set(1);
        this.game.add.tween(this.icon.scale).to({
          x: 1.5,
          y: 1.5
        }, 80, Phaser.Easing.Linear.None, true);
        this.game.tweens.removeFrom(this.mark.scale);
        this.game.add.tween(this.mark.scale).to({
          x: 0,
          y: 0
        }, 60, Phaser.Easing.Linear.None, true);
        this.game.tweens.removeFrom(this.mark);
        this.game.add.tween(this.mark).to({
          alpha: 0
        }, 60, Phaser.Easing.Linear.None, true);
        this.powerupContainer.pauseCountdowns();
      }
    }, {
      key: "handleInputUp",
      value: function handleInputUp(sprite, pointer) {
        if (!this.isAvailable()) {
          return;
        }

        var currentCell = this.getCurrentCell();

        if (this.canBeApplied(currentCell)) {
          this.applyPowerup(currentCell);
        } else {
          this.game.tweens.removeFrom(this.icon.scale);
          this.icon.scale.set(1);
          this.game.add.tween(this.icon.scale).to({
            x: 1,
            y: 1
          }, 100, Phaser.Easing.Linear.None, true);
          this.game.tweens.removeFrom(this.icon);
          this.game.add.tween(this.icon).to({
            x: 0,
            y: 0
          }, 100, Phaser.Easing.Linear.None, true);
        }

        this.dragging = false;
        this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged([]);
        this.game.tweens.removeFrom(this.mark.scale);
        this.game.add.tween(this.mark.scale).to({
          x: 1,
          y: 1
        }, 60, Phaser.Easing.Linear.None, true);
        this.game.tweens.removeFrom(this.mark);
        this.game.add.tween(this.mark).to({
          alpha: 1
        }, 60, Phaser.Easing.Linear.None, true);
        this.powerupContainer.resumeCountdowns();
      }
    }, {
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(AbstractPowerup.prototype), "update", this).call(this);

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
          var _this$toLocal = this.toLocal(this.game.input.activePointer.position, this.game.world),
              x = _this$toLocal.x,
              y = _this$toLocal.y;

          this.icon.position.set(x + this.iconDelta.x, y + this.iconDelta.y);
          this.level.boardManager.getBoard().dispatchPowerupIsBeingDragged(this.getTargetCells(this.getCurrentCell()));
        } else {
          this.updateView();
        }
      }
    }, {
      key: "pauseCountdown",
      value: function pauseCountdown() {
        if (this.countdownActive) {
          this.game.add.tween(this.tutorialHand).to({
            alpha: 0
          }, 70, Phaser.Easing.Linear.None, true);
          this.game.add.tween(this.countdownBar).to({
            alpha: 0
          }, 80, Phaser.Easing.Linear.None, true);
        }
      }
    }, {
      key: "resumeCountdown",
      value: function resumeCountdown() {
        if (this.countdownActive) {
          this.game.add.tween(this.tutorialHand).to({
            alpha: 1
          }, 70, Phaser.Easing.Linear.None, true);
          this.game.add.tween(this.countdownBar).to({
            alpha: 1
          }, 70, Phaser.Easing.Linear.None, true);
        }
      }
    }, {
      key: "isAvailable",
      value: function isAvailable() {
        return this.available;
      }
    }, {
      key: "mayBeBought",
      value: function mayBeBought() {
        return BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType) <= BlockPuzzle.StarsManager.instance.getStarsAmount();
      }
    }, {
      key: "updateView",
      value: function updateView() {
        if (!BlockPuzzle.PowerupManager.instance.isBought(this.powerupType)) {
          this.icon.frameName = 'icon' + this.powerupType + '0000';
          this.mark.visible = true;
          this.mark.frameName = 'plusSign0000';
        } else {
          this.mark.visible = true;
          this.mark.frameName = 'okaySign0000';
        }
      }
    }, {
      key: "activate",
      value: function activate() {
        this.available = true;
        this.icon.scale.set(1);
        this.icon.position.set(0, 0);
        this.icon.visible = true;
        this.mark.frameName = 'okaySign0000';
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (this.isAvailable()) {
          this.available = false;
          this.game.tweens.removeFrom(this.icon.scale);
          this.icon.scale.set(0);
          this.icon.position.set(0, 0);
          this.mark.frameName = 'plusSign0000';
          this.game.add.tween(this.icon.scale).to({
            x: 1,
            y: 1
          }, 180, Phaser.Easing.Sinusoidal.Out, true);
        }
      }
    }, {
      key: "startCountdown",
      value: function startCountdown() {
        if (this.isAvailable()) {
          this.resetCountdown();
          this.showTutorialHand();
          this.countdownBar.visible = true;
          this.countdownBar.alpha = 1;
          this.countdownActive = true;
        }
      }
    }, {
      key: "countdownFinished",
      value: function countdownFinished() {
        this.resetCountdown();
        this.level.eventManager.onPowerupUsageTimerExceeded.dispatch();
        this.hideTutorialHand();
      }
    }, {
      key: "hideTutorialHand",
      value: function hideTutorialHand() {
        var _this92 = this;

        this.game.tweens.removeFrom(this.tutorialHand);
        this.game.add.tween(this.tutorialHand).to({
          alpha: 0
        }, 250, Phaser.Easing.Linear.None, true).onComplete.add(function () {
          return _this92.tutorialHand.visible = false;
        });
      }
    }, {
      key: "showTutorialHand",
      value: function showTutorialHand() {
        this.game.tweens.removeFrom(this.tutorialHand);
        this.tutorialHand.visible = true;
        this.game.add.tween(this.tutorialHand).to({
          alpha: 1
        }, 250, Phaser.Easing.Linear.None, true);
        this.game.add.tween(this.tutorialHand).to({
          x: '-6',
          y: '-6'
        }, 300, Phaser.Easing.Linear.None, true, 0, -1, true);
      }
    }, {
      key: "handlePowerupApplied",
      value: function handlePowerupApplied() {
        this.resetCountdown();
        this.hideTutorialHand();
      }
    }, {
      key: "resetCountdown",
      value: function resetCountdown() {
        this.game.tweens.removeFrom(this.currentStep);
        this.game.tweens.removeFrom(this.countdownBar);
        this.currentStep.value = 0;
        this.countdownActive = false;
        this.countdownBar.visible = false;
        this.countdownBar.alpha = 1;
        this.countdownMask.clear();
      }
    }, {
      key: "displayShop",
      value: function displayShop() {
        BlockPuzzle.WindowManager.instance.showShop(this.powerupType);
      }
    }, {
      key: "getCurrentCell",
      value: function getCurrentCell() {
        var boardLocalPosition = this.level.boardManager.getBoard().cellsContainer.toLocal(this.icon.position, this);
        return this.level.boardManager.getBoard().getCellUnderPoint(boardLocalPosition);
      }
    }, {
      key: "handlePowerupBought",
      value: function handlePowerupBought(powerupType) {
        if (powerupType === this.powerupType && !this.isAvailable()) {
          this.activate();
          this.powerupContainer.updatePowerups();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        BlockPuzzle.PowerupManager.instance.onPowerupBought.remove(this.handlePowerupBought, this);

        _get(_getPrototypeOf(AbstractPowerup.prototype), "destroy", this).call(this);
      }
    }]);

    return AbstractPowerup;
  }(Phaser.Group);

  BlockPuzzle.AbstractPowerup = AbstractPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BombPowerup =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract15) {
    _inherits(BombPowerup, _BlockPuzzle$Abstract15);

    function BombPowerup(powerupContainer) {
      _classCallCheck(this, BombPowerup);

      return _possibleConstructorReturn(this, _getPrototypeOf(BombPowerup).call(this, powerupContainer, BlockPuzzle.PowerupType.BOMB));
    }

    _createClass(BombPowerup, [{
      key: "getTargetCells",
      value: function getTargetCells(mainCell) {
        if (mainCell) {
          return this.level.boardManager.getBoard().getCells().filter(function (cell) {
            return Math.abs(cell.posX - mainCell.posX) <= 1 && Math.abs(cell.posY - mainCell.posY) <= 1;
          });
        }

        return [];
      }
    }, {
      key: "canBeApplied",
      value: function canBeApplied(cell) {
        return cell && this.getTargetCells(cell).some(function (targetCell) {
          return targetCell.hasBlock();
        });
      }
    }, {
      key: "applyPowerup",
      value: function applyPowerup(currentCell) {
        BlockPuzzle.PowerupManager.instance.usePowerup(this.powerupType);
        BlockPuzzle.APIUtils.instance.trackStatsChange('bomb_powerups_used', 1);
        BlockPuzzle.AchievementsManager.instance.addValue(BlockPuzzle.AchievementType.BOMB_EXPLOSIONS, 1);
        this.getTargetCells(currentCell).forEach(function (cell) {
          return cell.destroyBlock(0);
        });
        this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.ExplosionEffect(currentCell.x, currentCell.y));
        this.level.figureManager.updateFiguresApplicability();
        this.deactivate();
        this.level.eventManager.onPowerupApplied.dispatch(this.powerupType);
      }
    }]);

    return BombPowerup;
  }(BlockPuzzle.AbstractPowerup);

  BlockPuzzle.BombPowerup = BombPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var LightningPowerup =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract16) {
    _inherits(LightningPowerup, _BlockPuzzle$Abstract16);

    function LightningPowerup(powerupContainer) {
      _classCallCheck(this, LightningPowerup);

      return _possibleConstructorReturn(this, _getPrototypeOf(LightningPowerup).call(this, powerupContainer, BlockPuzzle.PowerupType.LIGHTNING));
    }

    _createClass(LightningPowerup, [{
      key: "getTargetCells",
      value: function getTargetCells(mainCell) {
        if (mainCell) {
          return this.level.boardManager.getBoard().getCells().filter(function (cell) {
            return mainCell.hasBlock() && cell.hasBlock() && cell.getBlock().color == mainCell.getBlock().color;
          });
        }

        return [];
      }
    }, {
      key: "canBeApplied",
      value: function canBeApplied(cell) {
        return cell && cell.hasBlock();
      }
    }, {
      key: "applyPowerup",
      value: function applyPowerup(currentCell) {
        var _this93 = this;

        BlockPuzzle.PowerupManager.instance.usePowerup(this.powerupType);
        BlockPuzzle.APIUtils.instance.trackStatsChange('lightning_powerups_used', 1);
        var targetCells = Phaser.ArrayUtils.shuffle(this.getTargetCells(currentCell));

        if (targetCells.length == 1) {
          this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.LightningEffect(currentCell, currentCell).delayedStart(0));
          this.game.time.events.add(50, function () {
            return _this93.level.figureManager.updateFiguresApplicability();
          });
        } else {
          var delay = 0;
          var currentPortion = [currentCell];

          while (currentPortion) {
            for (var _i3 = 0, _currentPortion = currentPortion; _i3 < _currentPortion.length; _i3++) {
              var cell = _currentPortion[_i3];
              var nextPortion = this.getNextPortionOfCells(targetCells);

              if (nextPortion) {
                var _iteratorNormalCompletion9 = true;
                var _didIteratorError9 = false;
                var _iteratorError9 = undefined;

                try {
                  for (var _iterator9 = nextPortion[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var nextCell = _step9.value;
                    this.level.boardManager.getBoard().effectsContainer.add(new BlockPuzzle.LightningEffect(cell, nextCell).delayedStart(delay));
                  }
                } catch (err) {
                  _didIteratorError9 = true;
                  _iteratorError9 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                      _iterator9["return"]();
                    }
                  } finally {
                    if (_didIteratorError9) {
                      throw _iteratorError9;
                    }
                  }
                }

                delay += BlockPuzzle.LightningEffect.TOTAL_FRAMES / BlockPuzzle.LightningEffect.FPS * 1000 + BlockPuzzle.Settings.LIGHTING_DELAY_BETWEEN_STRIKES;
              }

              currentPortion = nextPortion;
            }
          }

          this.game.time.events.add(delay + 50, function () {
            _this93.level.figureManager.updateFiguresApplicability();

            _this93.level.eventManager.onPowerupApplied.dispatch(_this93.powerupType);
          });
        }

        this.deactivate();
      }
    }, {
      key: "getNextPortionOfCells",
      value: function getNextPortionOfCells(cells) {
        if (cells.length == 0) {
          return null;
        }

        if (cells.length < BlockPuzzle.Settings.LIGHTING_MIN_TARGETS) {
          return cells.splice(0, cells.length);
        }

        var cellsCount = BlockPuzzle.Settings.LIGHTING_MIN_TARGETS + Math.floor(Math.random() * (BlockPuzzle.Settings.LIGHTING_MAX_TARGETS + 1 - BlockPuzzle.Settings.LIGHTING_MIN_TARGETS));
        return cells.splice(0, cellsCount > cells.length ? cells.length : cellsCount);
      }
    }]);

    return LightningPowerup;
  }(BlockPuzzle.AbstractPowerup);

  BlockPuzzle.LightningPowerup = LightningPowerup;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var PowerupContainer =
  /*#__PURE__*/
  function (_Phaser$Group27) {
    _inherits(PowerupContainer, _Phaser$Group27);

    function PowerupContainer(uiManager) {
      var _this94;

      _classCallCheck(this, PowerupContainer);

      _this94 = _possibleConstructorReturn(this, _getPrototypeOf(PowerupContainer).call(this, uiManager.game, null));
      _this94.usedPowerups = [];
      _this94.uiManager = uiManager;
      _this94.level = uiManager.level;

      _this94.buildContent();

      return _this94;
    }

    _createClass(PowerupContainer, [{
      key: "buildContent",
      value: function buildContent() {
        this.lightningPowerup = this.add(new BlockPuzzle.LightningPowerup(this));
        this.lightningPowerup.position.set(0, 45);
        this.bombPowerup = this.add(new BlockPuzzle.BombPowerup(this));
        this.bombPowerup.position.set(0, -45);
        this.updatePowerups();
        this.level.eventManager.onPowerupApplied.add(this.handlePowerupApplied, this);
      }
    }, {
      key: "updatePowerups",
      value: function updatePowerups() {
        var _this95 = this;

        this.game.time.events.add(20, function () {
          return _this95.resize();
        });
      }
    }, {
      key: "hidePowerups",
      value: function hidePowerups() {
        var _this96 = this;

        this.game.add.tween(this.bombPowerup).to({
          y: '+50',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 0).onComplete.add(function () {
          return _this96.bombPowerup.visible = false;
        });
        this.game.add.tween(this.lightningPowerup).to({
          y: '+50',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 50).onComplete.add(function () {
          return _this96.lightningPowerup.visible = false;
        });
      }
    }, {
      key: "startCountdown",
      value: function startCountdown() {
        this.bombPowerup.startCountdown();
        this.lightningPowerup.startCountdown();
      }
    }, {
      key: "pauseCountdowns",
      value: function pauseCountdowns() {
        this.bombPowerup.pauseCountdown();
        this.lightningPowerup.pauseCountdown();
      }
    }, {
      key: "resumeCountdowns",
      value: function resumeCountdowns() {
        this.bombPowerup.resumeCountdown();
        this.lightningPowerup.resumeCountdown();
      }
    }, {
      key: "hasDraggingPowerups",
      value: function hasDraggingPowerups() {
        return this.lightningPowerup.dragging || this.bombPowerup.dragging;
      }
    }, {
      key: "resize",
      value: function resize() {
        if (BlockPuzzle.CustomScaleManager.isPortrait()) {
          this.resizePortrait();
        } else if (BlockPuzzle.CustomScaleManager.isSquared()) {
          this.resizeSquared();
        } else if (BlockPuzzle.CustomScaleManager.isLandscape()) {
          this.resizeLandscape();
        }
      }
    }, {
      key: "resizeLandscape",
      value: function resizeLandscape() {
        var powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
        this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
        this.scale.set(Math.max(Math.min(powerupContainerBounds.width * 0.6 / 200, 1.4), 1));
        this.bombPowerup.position.set(-48, 0);
        this.lightningPowerup.position.set(48, 0);
      }
    }, {
      key: "resizePortrait",
      value: function resizePortrait() {
        var powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
        this.scale.set(Math.max(1, Math.min(powerupContainerBounds.height / 90, 1.35)));
        this.position.set(powerupContainerBounds.x, Math.min(powerupContainerBounds.y, powerupContainerBounds.y + powerupContainerBounds.height / 2 - 48 * this.scale.y));
        this.bombPowerup.position.set(-47, 0);
        this.lightningPowerup.position.set(47, 0);
      }
    }, {
      key: "resizeSquared",
      value: function resizeSquared() {
        var powerupContainerBounds = this.level.serviceManager.layoutService.getAvailablePowerupsContainerBounds();
        this.position.set(powerupContainerBounds.x, powerupContainerBounds.y);
        this.scale.set(1 / Math.pow(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR, 0.5));
        this.bombPowerup.position.set(-48, 0);
        this.lightningPowerup.position.set(48, 0);
      }
    }, {
      key: "handlePowerupApplied",
      value: function handlePowerupApplied(powerupType) {
        BlockPuzzle.Analytics.instance.updateLevelData({
          powerups: [powerupType]
        });
        this.usedPowerups.push(powerupType);
      }
    }]);

    return PowerupContainer;
  }(Phaser.Group);

  BlockPuzzle.PowerupContainer = PowerupContainer;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var PublisherLogo =
  /*#__PURE__*/
  function (_Phaser$Sprite3) {
    _inherits(PublisherLogo, _Phaser$Sprite3);

    function PublisherLogo(x, y) {
      var _this97;

      _classCallCheck(this, PublisherLogo);

      _this97 = _possibleConstructorReturn(this, _getPrototypeOf(PublisherLogo).call(this, BlockPuzzle.App.instance, x, y, 'more_games'));

      _this97.anchor.set(0.5);

      _this97.inputEnabled = true;

      _this97.events.onInputDown.add(_this97.publisherLogoClicked, _assertThisInitialized(_this97));

      return _this97;
    }

    _createClass(PublisherLogo, [{
      key: "publisherLogoClicked",
      value: function publisherLogoClicked() {
        BlockPuzzle.App.instance.navigateToSponsor();
      }
    }]);

    return PublisherLogo;
  }(Phaser.Sprite);

  BlockPuzzle.PublisherLogo = PublisherLogo;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var NewRecordEffect =
  /*#__PURE__*/
  function (_Phaser$Group28) {
    _inherits(NewRecordEffect, _Phaser$Group28);

    function NewRecordEffect(results) {
      var _this98;

      _classCallCheck(this, NewRecordEffect);

      _this98 = _possibleConstructorReturn(this, _getPrototypeOf(NewRecordEffect).call(this, results.game, null));
      _this98.resultsWindow = results;
      _this98.stamp = _this98.add(_this98.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'newBestIcon0000'));

      _this98.stamp.anchor.set(0.5);

      return _this98;
    }

    _createClass(NewRecordEffect, [{
      key: "show",
      value: function show(delay) {
        var _this99 = this;

        this.game.time.events.add(delay, function () {
          return _this99.playStampTween();
        });
      }
    }, {
      key: "playStampTween",
      value: function playStampTween() {
        var _this100 = this;

        this.visible = true;
        this.scale.set(2.5);
        this.alpha = 0.45;
        this.game.add.tween(this).to({
          alpha: 1
        }, 250, Phaser.Easing.Linear.None, true);
        this.game.add.tween(this.scale).to({
          x: 1,
          y: 1
        }, 250, Phaser.Easing.Linear.None, true).onComplete.add(function () {
          _this100.parent.scale.set(0.95, 0.95);

          _this100.game.add.tween(_this100.parent.scale).to({
            x: 1,
            y: 1
          }, 320, Phaser.Easing.Back.Out, true);

          _this100.parent && _this100.parent.parent && _this100.parent.parent.addChildAt(new BlockPuzzle.BestScoreReachedEffectEmitter(0, -15, 120), 0);
        });
        this.game.time.events.add(160, function () {
          return BlockPuzzle.SoundController.instance.playStampSound();
        });
      }
    }]);

    return NewRecordEffect;
  }(Phaser.Group);

  BlockPuzzle.NewRecordEffect = NewRecordEffect;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ResultsScoresPanel =
  /*#__PURE__*/
  function (_Phaser$Group29) {
    _inherits(ResultsScoresPanel, _Phaser$Group29);

    function ResultsScoresPanel(results) {
      var _this101;

      _classCallCheck(this, ResultsScoresPanel);

      _this101 = _possibleConstructorReturn(this, _getPrototypeOf(ResultsScoresPanel).call(this, results.game, null));
      _this101.results = results;

      _this101.scale.set(1.25);

      _this101.buildContent();

      return _this101;
    }

    _createClass(ResultsScoresPanel, [{
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "show",
      value: function show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget) {
        var leftValuePrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var rightValuePrefix = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        var delay = arguments.length > 6 ? arguments[6] : undefined;
        var textTweenDelay = arguments.length > 7 ? arguments[7] : undefined;
        var tweenTextDuration = arguments.length > 8 ? arguments[8] : undefined;
        this.resetTweens();
        this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
        this.animateAppearing(delay);
      }
    }, {
      key: "tweenTexts",
      value: function tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
        this.highscoreText.changeText('' + rightValueInitial);
        this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
        this.highscoreText.tweenTextAdvanced(rightValuePrefix, rightValueInitial, rightValueTarget, tweenTextDuration, textTweenDelay, true);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        var _this102 = this;

        this.icon.scale.set(0.5);
        this.game.add.tween(this.icon.scale).to({
          x: 1,
          y: 1
        }, 350, Phaser.Easing.Back.Out, true, delay + 100);
        this.icon.alpha = 0;
        this.game.add.tween(this.icon).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
        this.pad.scale.x = 0;
        this.game.add.tween(this.pad.scale).to({
          x: 1.3
        }, 450, Phaser.Easing.Back.Out, true, delay + 150);
        this.textField.visible = false;
        this.textField.scale.set(0.5);
        this.game.add.tween(this.textField.scale).to({
          x: 0.72,
          y: 0.72
        }, 450, Phaser.Easing.Back.Out, true, delay + 250).onStart.add(function () {
          return _this102.textField.visible = true;
        });
        this.highscoreGroup.visible = false;
        this.highscoreGroup.alpha = 0;
        this.game.add.tween(this.highscoreGroup).to({
          alpha: 1
        }, 300, Phaser.Easing.Sinusoidal.Out, true, delay + 400).onStart.add(function () {
          return _this102.highscoreGroup.visible = true;
        });
        this.textField.visible = false;
        this.textField.alpha = 0;
        this.game.add.tween(this.textField).to({
          alpha: 1
        }, 500, Phaser.Easing.Linear.None, true, delay + 250).onStart.add(function () {
          return _this102.textField.visible = true;
        });
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
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
    }, {
      key: "showPanel",
      value: function showPanel(delay, textTweenDelay, duration, bestScoresReached) {
        this.show(0, BlockPuzzle.ScoreManager.instance.getCurrentScores(), bestScoresReached ? BlockPuzzle.ScoreManager.instance.getPrevMaxScores() : BlockPuzzle.ScoreManager.instance.getMaxScores(), BlockPuzzle.ScoreManager.instance.getMaxScores(), '', '', delay, delay + textTweenDelay, duration);
      }
    }, {
      key: "update",
      value: function update() {
        if (this.highscoreGroup.visible) {
          var textFieldWidth = this.highscoreText.getLocalBounds().width * this.highscoreText.scale.x;
          this.highscoreIcon.x = -textFieldWidth / 2 - 2;
          this.highscoreText.x = -textFieldWidth / 2;
        }
      }
    }]);

    return ResultsScoresPanel;
  }(Phaser.Group);

  BlockPuzzle.ResultsScoresPanel = ResultsScoresPanel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ResultsStarsPanel =
  /*#__PURE__*/
  function (_Phaser$Group30) {
    _inherits(ResultsStarsPanel, _Phaser$Group30);

    function ResultsStarsPanel(results) {
      var _this103;

      _classCallCheck(this, ResultsStarsPanel);

      _this103 = _possibleConstructorReturn(this, _getPrototypeOf(ResultsStarsPanel).call(this, results.game, null));
      _this103.results = results;

      _this103.scale.set(1.25);

      _this103.buildContent();

      return _this103;
    }

    _createClass(ResultsStarsPanel, [{
      key: "buildContent",
      value: function buildContent() {
        this.pad = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'scorePad0000'));
        this.pad.anchor.set(0, 0.5);
        this.pad.scale.set(1.3);
        this.textField = this.add(new BlockPuzzle.BitmapTextField('0', BlockPuzzle.Settings.GAME_ATLAS, 'Gold', 0.72, 0.5, 0.5, 1));
        this.textField.position.set(100, 0);
        this.icon = this.add(this.game.make.sprite(10, 0, BlockPuzzle.Settings.GAME_ATLAS, 'resultsIconStar0000'));
        this.icon.anchor.set(0.5);
      }
    }, {
      key: "show",
      value: function show(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget) {
        var leftValuePrefix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
        var rightValuePrefix = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
        var delay = arguments.length > 6 ? arguments[6] : undefined;
        var textTweenDelay = arguments.length > 7 ? arguments[7] : undefined;
        var tweenTextDuration = arguments.length > 8 ? arguments[8] : undefined;
        this.resetTweens();
        this.tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration);
        this.animateAppearing(delay);
      }
    }, {
      key: "tweenTexts",
      value: function tweenTexts(leftValueInitial, leftValueTarget, rightValueInitial, rightValueTarget, leftValuePrefix, rightValuePrefix, textTweenDelay, tweenTextDuration) {
        this.textField.tweenTextAdvanced(leftValuePrefix, leftValueInitial, leftValueTarget, tweenTextDuration, textTweenDelay, true);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        var _this104 = this;

        this.icon.scale.set(0.5);
        this.game.add.tween(this.icon.scale).to({
          x: 1,
          y: 1
        }, 350, Phaser.Easing.Back.Out, true, delay + 100);
        this.icon.alpha = 0;
        this.game.add.tween(this.icon).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
        this.pad.scale.x = 0;
        this.game.add.tween(this.pad.scale).to({
          x: 1.3
        }, 450, Phaser.Easing.Back.Out, true, delay + 150);
        this.textField.visible = false;
        this.textField.scale.set(0.5);
        this.game.add.tween(this.textField.scale).to({
          x: 0.72,
          y: 0.72
        }, 450, Phaser.Easing.Back.Out, true, delay + 250).onStart.add(function () {
          return _this104.textField.visible = true;
        });
        this.textField.visible = false;
        this.textField.alpha = 0;
        this.game.add.tween(this.textField).to({
          alpha: 1
        }, 500, Phaser.Easing.Linear.None, true, delay + 250).onStart.add(function () {
          return _this104.textField.visible = true;
        });
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
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
    }, {
      key: "showPanel",
      value: function showPanel(delay, textTweenDelay, duration) {
        this.show(0, Math.max(0, BlockPuzzle.StarsManager.instance.getStarsAmount()), 0, 0, '', '', delay, delay + textTweenDelay, duration);
      }
    }]);

    return ResultsStarsPanel;
  }(Phaser.Group);

  BlockPuzzle.ResultsStarsPanel = ResultsStarsPanel;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ReviveCountdown =
  /*#__PURE__*/
  function (_Phaser$Group31) {
    _inherits(ReviveCountdown, _Phaser$Group31);

    function ReviveCountdown(windowRevive) {
      var _this105;

      _classCallCheck(this, ReviveCountdown);

      _this105 = _possibleConstructorReturn(this, _getPrototypeOf(ReviveCountdown).call(this, windowRevive.game, null));
      _this105.countdownActive = false;
      _this105.startAngle = 270;
      _this105.endAngle = -90 - 0.000001;
      _this105.currentStep = {
        value: 0
      };
      _this105.windowRevive = windowRevive;
      _this105.circle = _this105.add(_this105.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'reviveCircle0000'));

      _this105.circle.anchor.set(0.5);

      _this105.circleMask = _this105.add(_this105.game.make.graphics(-1, -3));

      _this105.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(_this105.startAngle), Phaser.Math.degToRad(_this105.endAngle + _this105.currentStep.value * 360), true, 180).endFill();

      _this105.circle.mask = _this105.circleMask;
      _this105.heart = _this105.add(_this105.game.make.sprite(0, -25, BlockPuzzle.Settings.GAME_ATLAS, 'iconRevive0000'));

      _this105.heart.anchor.set(0.5);

      _this105.timeLeftText = _this105.add(BlockPuzzle.TextUtils.getText('9...', 0, 70, 65, '#FF5E40'));
      return _this105;
    }

    _createClass(ReviveCountdown, [{
      key: "update",
      value: function update() {
        _get(_getPrototypeOf(ReviveCountdown.prototype), "update", this).call(this);

        if (this.isActive()) {
          var secondsLeft = Math.ceil((1 - this.currentStep.value) * 10);
          this.timeLeftText.setText('' + BlockPuzzle.TextUtils.convertMSToMSS(secondsLeft * 1000));
          this.circleMask.clear().beginFill(0xFFFFFF, 0.5).arc(0, 0, 160, Phaser.Math.degToRad(this.startAngle), Phaser.Math.degToRad(this.endAngle + this.currentStep.value * 360), true, 180).endFill();
        }
      }
    }, {
      key: "startCountdown",
      value: function startCountdown() {
        var _this106 = this;

        BlockPuzzle.SoundController.instance.chokeMusicVolume(400);
        this.resetCountdown();
        this.circle.visible = true;
        this.circle.alpha = 1;
        this.heart.visible = true;
        this.timeLeftText.visible = true;
        this.countdownActive = true;
        this.game.add.tween(this.currentStep).to({
          value: 1
        }, BlockPuzzle.Settings.REVIVE_TIMER_DURATION, Phaser.Easing.Linear.None, true).onComplete.add(this.stopCountdown, this);
        this.heart.scale.set(0);
        this.game.add.tween(this.heart.scale).to({
          x: 1,
          y: 1
        }, 600, Phaser.Easing.Back.Out, true).onComplete.add(function () {
          return _this106.startHeartbeatAnimation();
        });
      }
    }, {
      key: "startHeartbeatAnimation",
      value: function startHeartbeatAnimation() {
        this.game.tweens.removeFrom(this.heart.scale);
        this.heart.scale.set(1);
        var heartbeatTween = this.game.add.tween(this.heart.scale).to({
          x: 1.1,
          y: 1.1
        }, 100, Phaser.Easing.Sinusoidal.In, false, 0).to({
          x: 1,
          y: 1
        }, 310, Phaser.Easing.Sinusoidal.Out, false).to({
          x: 1.1,
          y: 1.1
        }, 100, Phaser.Easing.Sinusoidal.In, false, 25).to({
          x: 1,
          y: 1
        }, 140, Phaser.Easing.Sinusoidal.Out, false).to({
          x: 1,
          y: 1
        }, 650, Phaser.Easing.Sinusoidal.Out, false).start().repeatAll(-1);
        heartbeatTween.onLoop.add(function () {
          return BlockPuzzle.SoundController.instance.playHeartBeatSound();
        });
        heartbeatTween.onStart.add(function () {
          return BlockPuzzle.SoundController.instance.playHeartBeatSound();
        });
      }
    }, {
      key: "stopCountdown",
      value: function stopCountdown() {
        this.resetCountdown();
        this.windowRevive.reviveFailed(true);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay) {
        var _this107 = this;

        BlockPuzzle.SoundController.instance.restoreMusicVolume(600);
        this.game.add.tween(this).to({
          alpha: 0
        }, 200, Phaser.Easing.Linear.None, true, delay + 50).onComplete.add(function () {
          _this107.heart.visible = false;
          _this107.timeLeftText.visible = false;
        });
        this.game.add.tween(this.scale).to({
          x: 0.6,
          y: 0.6
        }, 200, Phaser.Easing.Back.In, true, delay + 50);
        this.game.add.tween(this.circle).to({
          alpha: 0
        }, 200, Phaser.Easing.Sinusoidal.In, true, delay).onComplete.add(function () {
          return _this107.circle.visible = false;
        });
      }
    }, {
      key: "resetCountdown",
      value: function resetCountdown() {
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
    }, {
      key: "isActive",
      value: function isActive() {
        return this.countdownActive;
      }
    }]);

    return ReviveCountdown;
  }(Phaser.Group);

  BlockPuzzle.ReviveCountdown = ReviveCountdown;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractUIScrollbar =
  /*#__PURE__*/
  function (_Phaser$Group32) {
    _inherits(AbstractUIScrollbar, _Phaser$Group32);

    function AbstractUIScrollbar() {
      var _this108;

      _classCallCheck(this, AbstractUIScrollbar);

      _this108 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractUIScrollbar).call(this, BlockPuzzle.App.instance));
      _this108.prevValue = 0.5;
      _this108.sliderDx = 0;

      _this108.buildChildren();

      _this108.initValue();

      return _this108;
    }

    _createClass(AbstractUIScrollbar, [{
      key: "buildChildren",
      value: function buildChildren() {
        this.buildScrollerContainer();
        this.buildPad();
        this.buildBar();
        this.buildSlider();
        this.buildShadow();
        this.buildIcon();
        this.addIconListeners();
      }
    }, {
      key: "setInitialValue",
      value: function setInitialValue(value) {
        this.setValue(value, true);
        this.prevValue = this.value;
      }
    }, {
      key: "buildScrollerContainer",
      value: function buildScrollerContainer() {
        this.scrollerContainer = this.add(this.game.make.group());
        this.scrollerContainer.position.set(58, 0);
      }
    }, {
      key: "buildPad",
      value: function buildPad() {
        this.pad = this.scrollerContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlPad0000'));
        this.pad.anchor.set(0.5);
      }
    }, {
      key: "buildShadow",
      value: function buildShadow() {
        this.shadow = this.scrollerContainer.add(this.game.make.sprite(-100, -3, BlockPuzzle.Settings.GAME_ATLAS, 'controlBarShadow0000'));
        this.shadow.anchor.set(0.5);
      }
    }, {
      key: "buildBar",
      value: function buildBar() {
        this.bar = this.scrollerContainer.add(this.game.make.sprite(0, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlBar0000'));
        this.bar.anchor.set(0.5);
        this.barMask = this.scrollerContainer.add(this.game.make.graphics(-this.pad.width / 2, 0));
        this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.pad.width, 40).endFill();
        this.bar.mask = this.barMask;
      }
    }, {
      key: "buildSlider",
      value: function buildSlider() {
        this.slider = this.scrollerContainer.add(this.game.make.sprite(this.sliderDx, 0, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlSlider0000'));
        this.slider.anchor.set(0.2, 0.5);
        this.slider.hitArea = new Phaser.Rectangle(-60, -60, 120, 120);
        this.slider.inputEnabled = true;
        this.slider.input.allowVerticalDrag = false;
        this.slider.input.enableDrag(false, false, false, 0, new Phaser.Rectangle(-this.pad.width / 2 + this.sliderDx, -this.slider.height, this.pad.width - this.sliderDx, this.slider.height * 2));
        this.slider.events.onDragUpdate.add(this.handleSliderDrag, this);
        this.slider.events.onDragStop.add(this.handleSliderDrag, this);
      }
    }, {
      key: "updateBarMask",
      value: function updateBarMask() {
        this.barMask.clear().beginFill(0, 0.5).drawRect(0, -20, this.slider.x + this.pad.width / 2 + 20, 40).endFill();
      }
    }, {
      key: "handleSliderDrag",
      value: function handleSliderDrag() {
        var value = this.slider.x / (this.pad.width - this.sliderDx - this.slider.width) + 0.5;
        this.setValue(Phaser.Math.clamp(value, 0, 1));
      }
    }, {
      key: "addIconListeners",
      value: function addIconListeners() {
        this.icon.inputEnabled = true;
        this.icon.events.onInputDown.add(this.handleIconClicked, this);
      }
    }, {
      key: "handleIconClicked",
      value: function handleIconClicked() {
        if (this.value == 0) {
          this.setValue(this.prevValue);
        } else {
          this.prevValue = this.value;
          this.setValue(0);
        }
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        var skipAnalytics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.value = value;
        this.slider.x = (value - 0.5) * (this.pad.width - this.sliderDx - this.slider.width);
        this.updateBarMask();
        this.dispatchValueChanged(value, skipAnalytics);
      }
    }]);

    return AbstractUIScrollbar;
  }(Phaser.Group);

  BlockPuzzle.AbstractUIScrollbar = AbstractUIScrollbar;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="AbstractUIScrollbar.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var MusicControlScrollbar =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract17) {
    _inherits(MusicControlScrollbar, _BlockPuzzle$Abstract17);

    function MusicControlScrollbar() {
      _classCallCheck(this, MusicControlScrollbar);

      return _possibleConstructorReturn(this, _getPrototypeOf(MusicControlScrollbar).apply(this, arguments));
    }

    _createClass(MusicControlScrollbar, [{
      key: "initValue",
      value: function initValue() {
        this.setInitialValue(BlockPuzzle.SoundController.instance.getMusicVolume());
      }
    }, {
      key: "buildIcon",
      value: function buildIcon() {
        this.icon = this.add(this.game.make.sprite(-100, -5, BlockPuzzle.Settings.GAME_ATLAS, 'musicControlIcon0000'));
        this.icon.anchor.set(0.5);
      }
    }, {
      key: "dispatchValueChanged",
      value: function dispatchValueChanged(value, skipAnalytics) {
        this.icon.frameName = this.value === 0 ? 'musicControlIcon0001' : 'musicControlIcon0000';
        BlockPuzzle.SoundController.instance.setMusicVolume(value);

        if (BlockPuzzle.Settings.ENABLE_API && !skipAnalytics) {
          window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
            bgmVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getMusicVolume(), -2),
            sfxVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getSFXVolume(), -2)
          });
        }
      }
    }]);

    return MusicControlScrollbar;
  }(BlockPuzzle.AbstractUIScrollbar);

  BlockPuzzle.MusicControlScrollbar = MusicControlScrollbar;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="AbstractUIScrollbar.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var SFXControlScrollbar =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract18) {
    _inherits(SFXControlScrollbar, _BlockPuzzle$Abstract18);

    function SFXControlScrollbar() {
      _classCallCheck(this, SFXControlScrollbar);

      return _possibleConstructorReturn(this, _getPrototypeOf(SFXControlScrollbar).apply(this, arguments));
    }

    _createClass(SFXControlScrollbar, [{
      key: "initValue",
      value: function initValue() {
        this.setInitialValue(BlockPuzzle.SoundController.instance.getSFXVolume());
      }
    }, {
      key: "buildIcon",
      value: function buildIcon() {
        this.icon = this.add(this.game.make.sprite(-100, -5, BlockPuzzle.Settings.GAME_ATLAS, 'sfxControlIcon0000'));
        this.icon.anchor.set(0.5);
      }
    }, {
      key: "dispatchValueChanged",
      value: function dispatchValueChanged(value, skipAnalytics) {
        this.icon.frameName = this.value === 0 ? 'sfxControlIcon0001' : 'sfxControlIcon0000';
        BlockPuzzle.SoundController.instance.setSFXVolume(value);

        if (BlockPuzzle.Settings.ENABLE_API && !skipAnalytics) {
          window.famobi_analytics.trackEvent(window.famobi_analytics.EVENT_VOLUMECHANGE, {
            bgmVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getMusicVolume(), -2),
            sfxVolume: Phaser.Math.roundTo(BlockPuzzle.SoundController.instance.getSFXVolume(), -2)
          });
        }
      }
    }]);

    return SFXControlScrollbar;
  }(BlockPuzzle.AbstractUIScrollbar);

  BlockPuzzle.SFXControlScrollbar = SFXControlScrollbar;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ShopItem =
  /*#__PURE__*/
  function (_Phaser$Group33) {
    _inherits(ShopItem, _Phaser$Group33);

    function ShopItem(windowShop, powerupType) {
      var _this109;

      _classCallCheck(this, ShopItem);

      _this109 = _possibleConstructorReturn(this, _getPrototypeOf(ShopItem).call(this, windowShop.game, null));
      _this109.windowShop = windowShop;
      _this109.powerupType = powerupType;

      _this109.buildContent();

      return _this109;
    }

    _createClass(ShopItem, [{
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "show",
      value: function show() {
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
    }, {
      key: "buyClicked",
      value: function buyClicked() {
        if (BlockPuzzle.StarsManager.instance.getStarsAmount() >= BlockPuzzle.PowerupManager.instance.getPrice(this.powerupType)) {
          this.buttonBuy.inputEnabled = false;
          this.buttonBuy.visible = false;
          this.boughtMark.visible = true;
          this.game.tweens.removeFrom(this.boughtMark.scale);
          this.boughtMark.scale.set(0.2);
          this.game.add.tween(this.boughtMark.scale).to({
            x: 0.75,
            y: 0.75
          }, 50, Phaser.Easing.Sinusoidal.Out, true);
          BlockPuzzle.SoundController.instance.playBuyingSound();
          BlockPuzzle.PowerupManager.instance.buy(this.powerupType);
          this.windowShop.powerupBought();
        } else {
          this.displayError();
        }
      }
    }, {
      key: "displayError",
      value: function displayError() {
        this.windowShop.starsCounter.displayError();
        BlockPuzzle.ColorUtils.bounceTint(this.priceStar, 0xFF0000, 0xFFFFFF, 350);
        this.priceText.children.forEach(function (c) {
          return BlockPuzzle.ColorUtils.bounceTint(c, 0xFF0000, 0xFFFFFF, 350);
        });
        BlockPuzzle.SoundController.instance.playErrorSound();
      }
    }]);

    return ShopItem;
  }(Phaser.Group);

  BlockPuzzle.ShopItem = ShopItem;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowHeading =
  /*#__PURE__*/
  function (_Phaser$Group34) {
    _inherits(WindowHeading, _Phaser$Group34);

    function WindowHeading(iconFrameName, backplateType) {
      var _this110;

      _classCallCheck(this, WindowHeading);

      _this110 = _possibleConstructorReturn(this, _getPrototypeOf(WindowHeading).call(this, BlockPuzzle.App.instance));
      _this110.iconFrameName = iconFrameName;
      _this110.backplateType = backplateType;

      _this110.buildContent();

      return _this110;
    }

    _createClass(WindowHeading, [{
      key: "buildContent",
      value: function buildContent() {
        this.container = this.add(this.game.make.group());
        this.plate = this.container.add(this.game.make.sprite(0, -5, BlockPuzzle.Settings.GAME_ATLAS, 'windowHeadingBackplate000' + this.backplateType));
        this.plate.anchor.set(0.5, 0);
        this.icon = this.container.add(this.game.make.sprite(0, 316, BlockPuzzle.Settings.GAME_ATLAS, this.iconFrameName + '0000'));
        this.icon.anchor.set(0.5);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        this.game.tweens.removeFrom(this.container);
        this.container.y = -450;
        this.game.add.tween(this.container).to({
          y: -100
        }, 350, Phaser.Easing.Back.Out, true, delay).onStart.add(function () {
          return BlockPuzzle.SoundController.instance.playPanelMovementSound();
        });
        this.icon.alpha = 0;
        this.icon.scale.set(0.6);
        this.game.add.tween(this.icon).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 100);
        this.game.add.tween(this.icon.scale).to({
          x: 1,
          y: 1
        }, 300, Phaser.Easing.Back.Out, true, delay);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay) {
        this.game.tweens.removeFrom(this.container);
        this.game.add.tween(this.container).to({
          y: -450
        }, 350, Phaser.Easing.Back.In, true, delay).onStart.add(function () {
          return BlockPuzzle.SoundController.instance.playPanelUpMovementSound();
        });
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        this.game.tweens.removeFrom(this.container);
        this.game.tweens.removeFrom(this.icon);
        this.game.tweens.removeFrom(this.icon.scale);
      }
    }]);

    return WindowHeading;
  }(Phaser.Group);

  BlockPuzzle.WindowHeading = WindowHeading;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ArrayUtils =
  /*#__PURE__*/
  function () {
    function ArrayUtils() {
      _classCallCheck(this, ArrayUtils);
    }

    _createClass(ArrayUtils, null, [{
      key: "uniteArrays",
      value: function uniteArrays(sourceArray, targetArray) {
        return sourceArray.concat(targetArray.filter(function (targetElem) {
          return sourceArray.indexOf(targetElem) === -1;
        }));
      }
    }, {
      key: "getRandomItem",
      value: function getRandomItem(array, compressionFactor) {
        var randomIndex = Math.floor(array.length * Math.pow(Math.random(), compressionFactor));
        return array[randomIndex];
      }
    }]);

    return ArrayUtils;
  }();

  BlockPuzzle.ArrayUtils = ArrayUtils;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var BitmapTextFactory =
  /*#__PURE__*/
  function () {
    function BitmapTextFactory() {
      _classCallCheck(this, BitmapTextFactory);
    }

    _createClass(BitmapTextFactory, null, [{
      key: "getLetter",
      value: function getLetter(textKey, atlasKey, letterKey, letterFrame) {
        var spriteName = null;

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

        var sprite = new Phaser.Sprite(BlockPuzzle.App.instance, 0, 0, atlasKey, spriteName);
        sprite.anchor.setTo(0, 0);
        sprite.alpha = letterKey === ' ' || letterKey == '_' ? 0 : 1;
        sprite.scale.x = letterKey === '_' ? 0.5 : 1;
        return sprite;
      }
    }]);

    return BitmapTextFactory;
  }();

  BlockPuzzle.BitmapTextFactory = BitmapTextFactory;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ButtonUtils =
  /*#__PURE__*/
  function () {
    function ButtonUtils() {
      _classCallCheck(this, ButtonUtils);
    }

    _createClass(ButtonUtils, null, [{
      key: "createButton",
      value: function createButton(atlasName, spriteName, x, y, callback, callbackContext) {
        var button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0001', spriteName + '0000', spriteName + '0002', spriteName + '0000');
        button.anchor.setTo(0.5, 0.5);
        button.input.pixelPerfectClick = true;
        button.input.pixelPerfectAlpha = 1;
        button.input.useHandCursor = true;
        return button;
      }
    }, {
      key: "createOneFrameButton",
      value: function createOneFrameButton(atlasName, spriteName, x, y, callback, callbackContext) {
        var button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
        button.anchor.setTo(0.5, 0.5);
        button.input.pixelPerfectClick = true;
        button.input.pixelPerfectAlpha = 1;
        button.input.useHandCursor = true;
        return button;
      }
    }, {
      key: "createSimpleButton",
      value: function createSimpleButton(atlasName, spriteName, x, y, startScale, callback, callbackContext) {
        var playClickSound = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
        var button = new Phaser.Button(BlockPuzzle.App.instance, x, y, atlasName, callback, callbackContext, spriteName + '0000', spriteName + '0000', spriteName + '0000', spriteName + '0000');
        button.anchor.setTo(0.5, 0.5);
        button.scale.set(startScale);
        button.input.pixelPerfectClick = true;
        button.input.pixelPerfectAlpha = 1;
        button.input.useHandCursor = false;
        button["overTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
          x: startScale * 1.05,
          y: startScale * 1.05
        }, 100);
        button["outTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
          x: startScale,
          y: startScale
        }, 100);
        button["downTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
          x: startScale * 0.95,
          y: startScale * 0.95
        }, 50).to({
          x: startScale,
          y: startScale
        }, 50);
        button.events.onInputOver.add(ButtonUtils.mouseOverHandler, this, 0);
        button.events.onInputOut.add(ButtonUtils.mouseOutHandler, this, 0);
        button.events.onInputDown.add(ButtonUtils.mouseDownHandler, this, 0);

        if (playClickSound) {
          button.events.onInputDown.add(function () {
            return BlockPuzzle.SoundController.instance.playClickSound();
          }, 0);
        }

        button["setScale"] = function (value) {
          button.scale.set(value);
          button["overTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
            x: value * 1.05,
            y: value * 1.05
          }, 100);
          button["outTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
            x: value,
            y: value
          }, 100);
          button["downTween"] = BlockPuzzle.App.instance.add.tween(button.scale).to({
            x: value * 0.95,
            y: value * 0.95
          }, 50).to({
            x: value,
            y: value
          }, 50);
        };

        return button;
      }
    }, {
      key: "mouseOverHandler",
      value: function mouseOverHandler(caller) {
        caller["overTween"].start();
      }
    }, {
      key: "mouseOutHandler",
      value: function mouseOutHandler(caller) {
        caller["outTween"].start();
      }
    }, {
      key: "mouseDownHandler",
      value: function mouseDownHandler(caller) {
        caller["downTween"].start();
      }
    }]);

    return ButtonUtils;
  }();

  BlockPuzzle.ButtonUtils = ButtonUtils;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var ColorUtils =
  /*#__PURE__*/
  function () {
    function ColorUtils() {
      _classCallCheck(this, ColorUtils);
    }

    _createClass(ColorUtils, null, [{
      key: "tweenTint",
      value: function tweenTint(spriteToTween, startColor, endColor, duration) {
        var colorBlend = {
          step: 0
        };
        BlockPuzzle.App.instance.add.tween(colorBlend).to({
          step: 100
        }, duration, Phaser.Easing.Linear.None, true).onUpdateCallback(function () {
          spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
        }).onComplete.add(function () {
          return spriteToTween.tint = endColor;
        });
      }
    }, {
      key: "bounceTint",
      value: function bounceTint(spriteToTween, startColor, endColor, duration) {
        var colorBlend = {
          step: 10
        };
        BlockPuzzle.App.instance.add.tween(colorBlend).to({
          step: 100
        }, duration, Phaser.Easing.Bounce.Out, true).onUpdateCallback(function () {
          spriteToTween.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step, 1);
        }).onComplete.add(function () {
          return spriteToTween.tint = endColor;
        });
      }
    }]);

    return ColorUtils;
  }();

  BlockPuzzle.ColorUtils = ColorUtils;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="../Settings.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var LocalStorageController =
  /*#__PURE__*/
  function () {
    function LocalStorageController() {
      _classCallCheck(this, LocalStorageController);

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

    _createClass(LocalStorageController, [{
      key: "getMaxScores",
      value: function getMaxScores() {
        return this.data["maxScore"];
      }
    }, {
      key: "getNumStars",
      value: function getNumStars() {
        return this.data["numStars"];
      }
    }, {
      key: "getSFXVolume",
      value: function getSFXVolume() {
        return this.data["sfxVolume"];
      }
    }, {
      key: "getMusicVolume",
      value: function getMusicVolume() {
        return this.data["musicVolume"];
      }
    }, {
      key: "isBombBought",
      value: function isBombBought() {
        return this.data["bombBought"];
      }
    }, {
      key: "isLightningBought",
      value: function isLightningBought() {
        return this.data["lightningBought"];
      }
    }, {
      key: "isTutorialCompleted",
      value: function isTutorialCompleted() {
        return this.data["tutorialCompleted"];
      }
    }, {
      key: "getAchievementsStates",
      value: function getAchievementsStates() {
        return this.data["achievements"] || [];
      }
    }, {
      key: "save",
      value: function save() {
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
    }, {
      key: "checkLocalStorageSupported",
      value: function checkLocalStorageSupported() {
        try {
          this.isLocalStorageSupported = "localStorage" in window && window["localStorage"] !== null;
        } catch (e) {
          this.isLocalStorageSupported = false;
        }
      }
    }, {
      key: "loadSave",
      value: function loadSave() {
        this.checkLocalStorageSupported();

        if (this.isLocalStorageSupported) {
          if (this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME)) {
            this.data = JSON.parse(this.currentLocalStorage.getItem(LocalStorageController.STORAGE_NAME));
          } else {
            this.currentLocalStorage.setItem(LocalStorageController.STORAGE_NAME, JSON.stringify(this.data));
          }
        }

        this.finalizeLoading();
      }
    }, {
      key: "finalizeLoading",
      value: function finalizeLoading() {
        BlockPuzzle.SoundController.instance.setSFXVolume(this.getSFXVolume());
        BlockPuzzle.SoundController.instance.setMusicVolume(this.getMusicVolume());
        BlockPuzzle.Settings.TUTORIAL_COMPLETED = LocalStorageController.instance.isTutorialCompleted();
        BlockPuzzle.ScoreManager.instance.setMaxScores(LocalStorageController.instance.getMaxScores());
        BlockPuzzle.StarsManager.instance.setStarsAmount(LocalStorageController.instance.getNumStars(), false);
        BlockPuzzle.AchievementsManager.instance.loadAchievementsState(LocalStorageController.instance.getAchievementsStates());
        BlockPuzzle.PowerupManager.instance.setInitialState(BlockPuzzle.PowerupType.BOMB, LocalStorageController.instance.isBombBought());
        BlockPuzzle.PowerupManager.instance.setInitialState(BlockPuzzle.PowerupType.LIGHTNING, LocalStorageController.instance.isLightningBought());
      }
    }], [{
      key: "instance",
      get: function get() {
        return LocalStorageController._instance ? LocalStorageController._instance : LocalStorageController._instance = new LocalStorageController();
      }
    }]);

    return LocalStorageController;
  }();

  LocalStorageController.STORAGE_NAME = BlockPuzzle.Settings.LOCAL_STORAGE_KEY;
  BlockPuzzle.LocalStorageController = LocalStorageController;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var LocalizationManager =
  /*#__PURE__*/
  function () {
    function LocalizationManager() {
      _classCallCheck(this, LocalizationManager);
    }

    _createClass(LocalizationManager, null, [{
      key: "init",
      value: function init(jsonFile) {
        LocalizationManager.texts = jsonFile;
      }
    }, {
      key: "getText",
      value: function getText(key) {
        return LocalizationManager.texts[key] ? LocalizationManager.texts[key] : "NO_TEXT";
      }
    }]);

    return LocalizationManager;
  }();

  BlockPuzzle.LocalizationManager = LocalizationManager;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var TextUtils =
  /*#__PURE__*/
  function () {
    function TextUtils() {
      _classCallCheck(this, TextUtils);
    }

    _createClass(TextUtils, null, [{
      key: "getText",
      value: function getText(text, x, y, fontSize, color) {
        var fontFamily = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : BlockPuzzle.Settings.DEFAULT_FONT_FAMILY;
        var fontWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
        var textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
          font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
          fill: color,
          align: "center"
        });
        textField.anchor.setTo(0.5, 0.5);
        return textField;
      }
    }, {
      key: "getBitmapText",
      value: function getBitmapText(text, x, y, fontSize) {
        var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0xFFFFFF;
        var family = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : BlockPuzzle.Settings.DEFAULT_FONT_FAMILY;
        var textField = new Phaser.BitmapText(BlockPuzzle.App.instance, x, y, family, text, fontSize, "center");
        textField.anchor.setTo(0.5, 0.5);
        textField.tint = color;
        return textField;
      }
    }, {
      key: "getShadowText",
      value: function getShadowText(text, x, y, fontSize, color) {
        var shadowColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#000000";
        var shadowX = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        var shadowY = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2;
        var anchorX = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0.5;
        var anchorY = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0.5;
        var fontFamily = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : BlockPuzzle.Settings.DEFAULT_FONT_FAMILY;
        var fontWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : null;
        var textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
          font: (fontWidth ? fontWidth + ' ' : '') + fontSize + "px " + fontFamily,
          fill: color,
          align: "center"
        });
        textField.anchor.setTo(anchorX, anchorY);
        textField.setShadow(shadowX, shadowY, shadowColor, 0);
        return textField;
      }
    }, {
      key: "getStyledText",
      value: function getStyledText(text, x, y, fontSize, color, strokeColor) {
        var strokeThinkness = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 4;
        var fontFamily = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : BlockPuzzle.Settings.DEFAULT_FONT_FAMILY;
        var fontWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
        var textField = new Phaser.Text(BlockPuzzle.App.instance, x, y, text, {
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
    }, {
      key: "convertMSToHumanTime",
      value: function convertMSToHumanTime(milliseconds) {
        var seconds = Math.floor(milliseconds / 1000);
        var minutes = Math.floor(seconds / 60);
        var restSeconds = seconds - minutes * 60;
        return (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
      }
    }, {
      key: "convertMSToMSS",
      value: function convertMSToMSS(milliseconds) {
        var seconds = Math.floor(milliseconds / 1000);
        var minutes = Math.floor(seconds / 60);
        var restSeconds = seconds - minutes * 60;
        return minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
      }
    }, {
      key: "normalizeTime",
      value: function normalizeTime(seconds) {
        var restSeconds = seconds;
        var hours = Math.floor(restSeconds / 3600);
        restSeconds %= 3600;
        var minutes = Math.floor(restSeconds / 60);
        restSeconds %= 60;
        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (restSeconds < 10 ? "0" : "") + restSeconds;
      }
    }]);

    return TextUtils;
  }();

  BlockPuzzle.TextUtils = TextUtils;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var AbstractWindow =
  /*#__PURE__*/
  function (_Phaser$Group35) {
    _inherits(AbstractWindow, _Phaser$Group35);

    function AbstractWindow(windowManager) {
      var _this111;

      var backgroundAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA;

      _classCallCheck(this, AbstractWindow);

      _this111 = _possibleConstructorReturn(this, _getPrototypeOf(AbstractWindow).call(this, BlockPuzzle.App.instance, null));
      _this111.backgroundAlpha = BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA;
      _this111.windowManager = windowManager;
      _this111.backgroundAlpha = backgroundAlpha;
      _this111.visible = false;

      _this111.buildBackground();

      return _this111;
    }

    _createClass(AbstractWindow, [{
      key: "buildBackground",
      value: function buildBackground() {
        this.background = this.add(this.game.make.sprite(-50, -50, BlockPuzzle.Settings.GAME_ATLAS, 'blackSquare0000'));
        this.background.anchor.set(0.5);
        this.background.width = this.game.world.width + 100;
        this.background.height = this.game.world.height + 100;
        this.background.alpha = this.backgroundAlpha;
        this.background.inputEnabled = true;
        this.inputEnableChildren = true;
      }
    }, {
      key: "resize",
      value: function resize() {
        this.position.set(0, 0);
        this.background.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.centerY);
        this.background.width = this.windowManager.windowBounds.width + 100;
        this.background.height = this.windowManager.windowBounds.height + 100;
        this.resizeContent();
      }
    }, {
      key: "show",
      value: function show() {
        this.visible = true;
        this.resize();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.visible = false;
      }
    }, {
      key: "lockUpButtons",
      value: function lockUpButtons() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        for (var i = 0; i < args.length; i++) {
          args[i]["inputEnabled"] = false;
        }
      }
    }, {
      key: "unlockButtons",
      value: function unlockButtons() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        for (var i = 0; i < args.length; i++) {
          args[i]["inputEnabled"] = true;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(AbstractWindow.prototype), "destroy", this).call(this);

        this.background = null;
      }
    }]);

    return AbstractWindow;
  }(Phaser.Group);

  BlockPuzzle.AbstractWindow = AbstractWindow;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="AbstractWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var DefaultWindow =
  /*#__PURE__*/
  function (_BlockPuzzle$Abstract19) {
    _inherits(DefaultWindow, _BlockPuzzle$Abstract19);

    function DefaultWindow(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha) {
      var _this112;

      _classCallCheck(this, DefaultWindow);

      _this112 = _possibleConstructorReturn(this, _getPrototypeOf(DefaultWindow).call(this, windowManager, backgroundAlpha));
      _this112.headingBackplateType = headingBackplateType;
      _this112.headingIconFrameName = headingIconFrameName;
      /* create basic elements */

      _this112.buildWindowBase();

      _this112.buildAdditionalElements();

      _this112.buildContent();

      return _this112;
    }

    _createClass(DefaultWindow, [{
      key: "buildWindowBase",
      value: function buildWindowBase() {
        this.contentContainer = this.add(this.game.make.group());
        this.windowHeading = this.contentContainer.add(new BlockPuzzle.WindowHeading(this.headingIconFrameName, this.headingBackplateType));
      }
    }, {
      key: "buildAdditionalElements",
      value: function buildAdditionalElements() {}
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        this.contentContainer.position.set(this.windowManager.windowBounds.centerX, this.windowManager.windowBounds.top);
        this.contentContainer.scale.set(Math.min(1, this.windowManager.windowBounds.height / BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT));
        this.windowHeading.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.001);
      }
    }, {
      key: "show",
      value: function show() {
        _get(_getPrototypeOf(DefaultWindow.prototype), "show", this).call(this);

        this.resetTweens();
        this.background.alpha = 0;
        this.game.add.tween(this.background).to({
          alpha: this.backgroundAlpha
        }, 300, Phaser.Easing.Circular.Out, true, 0);
        this.windowHeading.animateAppearing(150);
        this.animateAppearing(200);
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        this.windowHeading.resetTweens();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.resetTweens();

        _get(_getPrototypeOf(DefaultWindow.prototype), "hide", this).call(this);
      }
    }]);

    return DefaultWindow;
  }(BlockPuzzle.AbstractWindow);

  BlockPuzzle.DefaultWindow = DefaultWindow;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="DefaultWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var CloseableWindow =
  /*#__PURE__*/
  function (_BlockPuzzle$DefaultW) {
    _inherits(CloseableWindow, _BlockPuzzle$DefaultW);

    function CloseableWindow(windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha) {
      _classCallCheck(this, CloseableWindow);

      return _possibleConstructorReturn(this, _getPrototypeOf(CloseableWindow).call(this, windowManager, headingBackplateType, headingIconFrameName, backgroundAlpha));
    }

    _createClass(CloseableWindow, [{
      key: "buildAdditionalElements",
      value: function buildAdditionalElements() {
        this.buttonClose = this.add(new BlockPuzzle.ButtonCloseWindow(this, this.closeClicked, this));
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(CloseableWindow.prototype), "resizeContent", this).call(this);

        this.buttonClose.resize(-75, 75);
      }
    }, {
      key: "show",
      value: function show() {
        _get(_getPrototypeOf(CloseableWindow.prototype), "show", this).call(this);

        this.buttonClose.alpha = 1;
        this.buttonClose.scale.set(0);
        this.game.add.tween(this.buttonClose.scale).to({
          x: 1,
          y: 1
        }, 350, Phaser.Easing.Back.Out, true, 300);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay) {
        var _this113 = this;

        var onClosedCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.windowHeading.animateDisappearing(delay);
        this.game.tweens.removeFrom(this.buttonClose);
        this.game.add.tween(this.buttonClose).to({
          y: '-100',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
        this.game.tweens.removeFrom(this.background);
        this.game.add.tween(this.background).to({
          alpha: 0
        }, 300, Phaser.Easing.Circular.In, true, delay + 100).onComplete.add(function () {
          if (onClosedCallback) onClosedCallback();

          _this113.hide();
        });
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(CloseableWindow.prototype), "resetTweens", this).call(this);

        this.game.tweens.removeFrom(this.buttonClose, false);
        this.game.tweens.removeFrom(this.buttonClose.scale, false);
      }
    }, {
      key: "closeClicked",
      value: function closeClicked() {
        this.onCloseClicked();
        this.animateDisappearing(0);
      }
    }]);

    return CloseableWindow;
  }(BlockPuzzle.DefaultWindow);

  BlockPuzzle.CloseableWindow = CloseableWindow;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="abstract/CloseableWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowAchievements =
  /*#__PURE__*/
  function (_BlockPuzzle$Closeabl) {
    _inherits(WindowAchievements, _BlockPuzzle$Closeabl);

    function WindowAchievements(windowManager) {
      var _this114;

      _classCallCheck(this, WindowAchievements);

      _this114 = _possibleConstructorReturn(this, _getPrototypeOf(WindowAchievements).call(this, windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingAchievements', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA));
      BlockPuzzle.StarsManager.instance.onStarAdded.add(_this114.handleStarAdded, _assertThisInitialized(_this114));
      return _this114;
    }

    _createClass(WindowAchievements, [{
      key: "buildContent",
      value: function buildContent() {
        var _this115 = this;

        this.itemsContainer = this.contentContainer.add(this.game.make.group());
        this.achievementPanels = new Map();
        Object.keys(BlockPuzzle.AchievementType).filter(function (value) {
          return !isNaN(+value);
        }).map(function (value) {
          return +value;
        }).forEach(function (key) {
          _this115.achievementPanels.set(key, _this115.itemsContainer.add(new BlockPuzzle.AchievementPanel(_this115, key, ((key - 1) % 3 - 1) * 185, (Math.floor((key - 1) / 3) - 1) * 200)));
        });
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(WindowAchievements.prototype), "resizeContent", this).call(this);

        this.itemsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55 + 90);
      }
    }, {
      key: "updateAchievementPanels",
      value: function updateAchievementPanels() {
        this.achievementPanels.forEach(function (panel) {
          return panel.updateView();
        });
      }
    }, {
      key: "show",
      value: function show() {
        _get(_getPrototypeOf(WindowAchievements.prototype), "show", this).call(this);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_OTHER, "ACHIEVEMENTS");
        }

        this.updateAchievementPanels();
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        var _this116 = this;

        this.achievementPanels.forEach(function (panel, key) {
          panel.alpha = 1;

          _this116.game.add.tween(panel).from({
            alpha: 0,
            y: '-50'
          }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);

          panel.scale.set(0.8);

          _this116.game.add.tween(panel.scale).to({
            x: 1,
            y: 1
          }, 250, Phaser.Easing.Back.Out, true, delay + key * 25);
        });
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay, onClosedCallback) {
        var _this117 = this;

        _get(_getPrototypeOf(WindowAchievements.prototype), "animateDisappearing", this).call(this, delay, onClosedCallback);

        this.achievementPanels.forEach(function (panel, key) {
          _this117.game.add.tween(panel).to({
            alpha: 0
          }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + key * 25);

          _this117.game.add.tween(panel.scale).to({
            x: 0.55,
            y: 0.55
          }, 250, Phaser.Easing.Back.In, true, delay + key * 25);
        });

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
        }
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(WindowAchievements.prototype), "resetTweens", this).call(this);

        this.game.tweens.removeFrom(this.itemsContainer, false);
        this.game.tweens.removeFrom(this.itemsContainer.scale, false);
      }
      /**
       * INPUT HANDLERS
       */

    }, {
      key: "handleStarAdded",
      value: function handleStarAdded() {
        if (this.achievementPanels) {
          var totalStarsAchievement = this.achievementPanels.get(BlockPuzzle.AchievementType.TOTAL_STARS);

          if (totalStarsAchievement) {
            totalStarsAchievement.updateView();
          }
        }
      }
    }, {
      key: "onCloseClicked",
      value: function onCloseClicked() {}
    }, {
      key: "continueClicked",
      value: function continueClicked() {
        this.animateDisappearing(0, function () {});
      }
    }]);

    return WindowAchievements;
  }(BlockPuzzle.CloseableWindow);

  BlockPuzzle.WindowAchievements = WindowAchievements;
})(BlockPuzzle || (BlockPuzzle = {}));

var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowManager =
  /*#__PURE__*/
  function () {
    function WindowManager() {
      _classCallCheck(this, WindowManager);

      this.containerWidth = BlockPuzzle.CustomScaleManager.ORIGINAL_WIDTH;
      this.containerHeight = BlockPuzzle.CustomScaleManager.ORIGINAL_HEIGHT;
      this.isInitialized = false;
    }

    _createClass(WindowManager, [{
      key: "init",
      value: function init() {
        this.container = BlockPuzzle.App.instance.stage.add(BlockPuzzle.App.instance.make.group());
        this.settings = this.container.add(new BlockPuzzle.WindowSettings(this));
        this.results = this.container.add(new BlockPuzzle.WindowResults(this));
        this.revive = this.container.add(new BlockPuzzle.WindowRevive(this));
        this.shop = this.container.add(new BlockPuzzle.WindowShop(this));
        this.achievements = this.container.add(new BlockPuzzle.WindowAchievements(this));
        this.isInitialized = true;
        this.resize();
      }
    }, {
      key: "resize",
      value: function resize() {
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
    }, {
      key: "hasOpenedWindows",
      value: function hasOpenedWindows() {
        return this.settings.visible || this.shop.visible || this.achievements.visible || this.revive.visible || this.results.visible;
      }
    }, {
      key: "showSettings",
      value: function showSettings() {
        this.settings.show();
      }
    }, {
      key: "showResults",
      value: function showResults() {
        this.results.show();
      }
    }, {
      key: "showRevive",
      value: function showRevive() {
        this.revive.show();
      }
    }, {
      key: "showShop",
      value: function showShop(powerupType) {
        this.shop.setPowerupType(powerupType);
        this.shop.show();
      }
    }, {
      key: "showAchievements",
      value: function showAchievements() {
        this.achievements.show();
      }
    }, {
      key: "hideAll",
      value: function hideAll() {
        this.settings.hide();
        this.results.hide();
        this.revive.hide();
        this.shop.hide();
        this.achievements.hide();
      }
    }], [{
      key: "instance",
      get: function get() {
        return WindowManager._instance ? WindowManager._instance : WindowManager._instance = new WindowManager();
      }
    }]);

    return WindowManager;
  }();

  WindowManager._instance = null;
  BlockPuzzle.WindowManager = WindowManager;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="abstract/CloseableWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowResults =
  /*#__PURE__*/
  function (_BlockPuzzle$DefaultW2) {
    _inherits(WindowResults, _BlockPuzzle$DefaultW2);

    function WindowResults(windowManager) {
      _classCallCheck(this, WindowResults);

      return _possibleConstructorReturn(this, _getPrototypeOf(WindowResults).call(this, windowManager, BlockPuzzle.WindowHeadingBackplateType.GOLD, 'iconHeadingVictory', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA));
    }

    _createClass(WindowResults, [{
      key: "buildContent",
      value: function buildContent() {
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
    }, {
      key: "showButtons",
      value: function showButtons() {
        this.buttonRestart.visible = true;
        this.buttonRestart.alpha = 0;
        this.game.add.tween(this.buttonRestart).to({
          alpha: 1
        }, 350, Phaser.Easing.Linear.None, true, 1000);
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing() {
        var _this118 = this;

        var currentScores = BlockPuzzle.ScoreManager.instance.getCurrentScores();
        var lastRoundStars = BlockPuzzle.StarsManager.instance.getLastRoundStars();
        var scoresTweenDuration = currentScores > 0 ? Phaser.Math.clamp(Math.pow(currentScores, 0.9), 450, 1500) : 0;
        var starsTweenDuration = lastRoundStars > 0 ? Phaser.Math.clamp(Math.pow(lastRoundStars, 0.85) * 75, 50, 1000) : 0;
        var bestScoreReached = BlockPuzzle.ScoreManager.instance.updateMaxScores(BlockPuzzle.ScoreManager.instance.getCurrentScores());
        /* API & ANALYTICS */

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_GAMERESULT);
          setTimeout(function () {
            Promise.all([window["famobi_analytics"].trackEvent("EVENT_LEVELFAIL", {
              levelName: '',
              reason: 'dead'
            }), window["famobi_analytics"].trackEvent("EVENT_TOTALSCORE", {
              totalScore: currentScores
            })]).then(function () {
              return _this118.showButtons();
            }, function () {
              return _this118.showButtons();
            });
          }, 500);
        } else {
          this.showButtons();
        }
        /* END ANALYTICS */


        this.buttonRestart.visible = false;
        this.scoresPanel.showPanel(200, 800, scoresTweenDuration, bestScoreReached);
        this.starsPanel.showPanel(400, 800 + 250, starsTweenDuration);

        if (window.famobi.hasRewardedAd()) {
          this.doubleStarsButton.visible = true;
          this.doubleStarsButton.show(1400, BlockPuzzle.Settings.RESULTS_DOUBLE_STARS_REWARD);
        } else {
          this.doubleStarsButton.visible = false;
        }

        if (bestScoreReached) {
          this.recordEffect.show(800 + scoresTweenDuration + starsTweenDuration);
        }
      }
    }, {
      key: "addBonusStars",
      value: function addBonusStars(amount) {
        BlockPuzzle.StarsManager.instance.addBonusStars(amount);
        this.starsPanel.tweenTexts(BlockPuzzle.StarsManager.instance.getStarsAmount() - amount, BlockPuzzle.StarsManager.instance.getStarsAmount(), BlockPuzzle.StarsManager.instance.getStarsAmount() - amount, BlockPuzzle.StarsManager.instance.getStarsAmount(), '', '', 50, Phaser.Math.clamp(amount * 75, 200, 1200));
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(WindowResults.prototype), "resetTweens", this).call(this);

        this.game.tweens.removeFrom(this.buttonRestart);
        this.game.tweens.removeFrom(this.buttonRestart.scale);
        this.game.tweens.removeFrom(this.controlsContainer.scale);
        this.recordEffect.visible = false;
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(WindowResults.prototype), "resizeContent", this).call(this);

        this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.5);
        this.buttonRestart.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
      }
    }, {
      key: "hide",
      value: function hide() {
        BlockPuzzle.SoundController.instance.stopCountingSound();

        _get(_getPrototypeOf(WindowResults.prototype), "hide", this).call(this);
      }
    }, {
      key: "restartClicked",
      value: function restartClicked() {
        BlockPuzzle.SoundController.instance.stopCountingSound();
        BlockPuzzle.TransitionScreen.instance.changeState('Level');
      }
    }]);

    return WindowResults;
  }(BlockPuzzle.DefaultWindow);

  BlockPuzzle.WindowResults = WindowResults;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="abstract/CloseableWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowRevive =
  /*#__PURE__*/
  function (_BlockPuzzle$Closeabl2) {
    _inherits(WindowRevive, _BlockPuzzle$Closeabl2);

    function WindowRevive(windowManager) {
      var _this119;

      _classCallCheck(this, WindowRevive);

      _this119 = _possibleConstructorReturn(this, _getPrototypeOf(WindowRevive).call(this, windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingRevive', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA));
      _this119.isActive = false;
      return _this119;
    }

    _createClass(WindowRevive, [{
      key: "buildContent",
      value: function buildContent() {
        this.controlsContainer = this.contentContainer.add(this.game.make.group());
        this.reviveCountdown = this.controlsContainer.add(new BlockPuzzle.ReviveCountdown(this));
        this.reviveCountdown.position.set(0, 0);
        this.buttonWatchVideo = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRevive', 0, 0, 1.35, this.watchVideoClicked, this));
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(WindowRevive.prototype), "resizeContent", this).call(this);

        this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.55);
        this.buttonWatchVideo.position.set(10, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
      }
    }, {
      key: "show",
      value: function show() {
        _get(_getPrototypeOf(WindowRevive.prototype), "show", this).call(this);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_BONUS);
        }

        this.reviveCountdown.startCountdown();
      }
    }, {
      key: "hide",
      value: function hide() {
        this.reviveCountdown.resetCountdown();

        _get(_getPrototypeOf(WindowRevive.prototype), "hide", this).call(this);
      }
    }, {
      key: "onCloseClicked",
      value: function onCloseClicked() {
        this.reviveFailed(false);
      }
    }, {
      key: "watchVideoClicked",
      value: function watchVideoClicked() {
        var _this120 = this;

        if(window.famobi.hasRewardedAd()) {
          window.famobi.rewardedAd(function(result) {
            if(result.rewardGranted) {
              return _this120.reviveSucceed();
            } else {
              return _this120.reviveFailed(true);
            }
          });
        }
      }
    }, {
      key: "reviveSucceed",
      value: function reviveSucceed() {
        var _this121 = this;

        if (!this.isActive) {
          return;
        }

        this.animateDisappearing(0, function () {
          if (_this121.game.state.getCurrentState() instanceof BlockPuzzle.Level) {
            _this121.game.state.getCurrentState().eventManager.onReviveApplied.dispatch();
          }
        });
      }
    }, {
      key: "reviveFailed",
      value: function reviveFailed(disappear) {

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
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        this.isActive = true;
        this.reviveCountdown.alpha = 0;
        this.game.add.tween(this.reviveCountdown).to({
          alpha: 1
        }, 350, Phaser.Easing.Linear.None, true, delay + 130);
        this.reviveCountdown.scale.set(0.6);
        this.game.add.tween(this.reviveCountdown.scale).to({
          x: 1,
          y: 1
        }, 350, Phaser.Easing.Back.Out, true, delay + 130);
        this.buttonWatchVideo.inputEnabled = true;
        this.game.tweens.removeFrom(this.buttonWatchVideo);
        this.buttonWatchVideo.alpha = 1;
        this.game.add.tween(this.buttonWatchVideo).from({
          y: '70',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 200);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay, onClosedCallback) {
        this.isActive = false;

        _get(_getPrototypeOf(WindowRevive.prototype), "animateDisappearing", this).call(this, delay, onClosedCallback);

        this.reviveCountdown.animateDisappearing(delay);
        this.buttonWatchVideo.inputEnabled = false;
        this.game.tweens.removeFrom(this.buttonWatchVideo);
        this.game.add.tween(this.buttonWatchVideo).to({
          y: '100',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
        }
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(WindowRevive.prototype), "resetTweens", this).call(this);

        this.game.tweens.removeFrom(this.controlsContainer, false);
        this.game.tweens.removeFrom(this.controlsContainer.scale, false);
        this.game.tweens.removeFrom(this.reviveCountdown, false);
        this.game.tweens.removeFrom(this.reviveCountdown.scale, false);
        this.game.tweens.removeFrom(this.buttonWatchVideo, false);
      }
    }]);

    return WindowRevive;
  }(BlockPuzzle.CloseableWindow);

  BlockPuzzle.WindowRevive = WindowRevive;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="abstract/CloseableWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowSettings =
  /*#__PURE__*/
  function (_BlockPuzzle$Closeabl3) {
    _inherits(WindowSettings, _BlockPuzzle$Closeabl3);

    function WindowSettings(windowManager) {
      _classCallCheck(this, WindowSettings);

      return _possibleConstructorReturn(this, _getPrototypeOf(WindowSettings).call(this, windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingSettings', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA));
    }

    _createClass(WindowSettings, [{
      key: "buildContent",
      value: function buildContent() {
        this.controlsContainer = this.contentContainer.add(this.game.make.group());
        this.sfxControl = this.controlsContainer.add(new BlockPuzzle.SFXControlScrollbar());
        this.musicControl = this.controlsContainer.add(new BlockPuzzle.MusicControlScrollbar());
        this.sfxControl.position.set(-25, -70);
        this.musicControl.position.set(-25, 70);
        this.buttonRestart = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonRestart', 0, 0, 1.12, this.restartClicked, this));
        this.publisherLogo = this.contentContainer.add(new BlockPuzzle.PublisherLogo(0, 0));
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(WindowSettings.prototype), "resizeContent", this).call(this);

        this.sfxControl.position.set(-25, -70);
        this.musicControl.position.set(-25, 70);
        this.controlsContainer.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.53);
        this.buttonRestart.position.set(0, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.76);
        this.publisherLogo.position.set(5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.92);
      }
    }, {
      key: "onCloseClicked",
      value: function onCloseClicked() {
        BlockPuzzle.LocalStorageController.instance.save();
      }
    }, {
      key: "tutorialClicked",
      value: function tutorialClicked() {
        this.hide();

        if (this.game.state.getCurrentState() instanceof BlockPuzzle.Level) {
          this.game.state.getCurrentState().tutorialManager.restartTutorial();
        }
      }
    }, {
      key: "restartClicked",
      value: function restartClicked() {
        BlockPuzzle.TransitionScreen.instance.changeState('Level');
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing() {
        this.sfxControl.initValue();
        this.musicControl.initValue();
        this.sfxControl.alpha = 0;
        this.game.add.tween(this.sfxControl).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 200);
        this.sfxControl.scale.set(0.6);
        this.game.add.tween(this.sfxControl.scale).to({
          x: 1,
          y: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 200);
        this.musicControl.alpha = 0;
        this.game.add.tween(this.musicControl).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 250);
        this.musicControl.scale.set(0.6);
        this.game.add.tween(this.musicControl.scale).to({
          x: 1,
          y: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 250);
        this.buttonRestart.alpha = 0;
        this.game.add.tween(this.buttonRestart).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
        this.buttonRestart.scale.set(0.6);
        this.game.add.tween(this.buttonRestart.scale).to({
          x: 1.12,
          y: 1.12
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
        this.publisherLogo.alpha = 0;
        this.game.add.tween(this.publisherLogo).to({
          alpha: 1
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
        this.publisherLogo.scale.set(0.28);
        this.game.add.tween(this.publisherLogo.scale).to({
          x: 0.45,
          y: 0.45
        }, 250, Phaser.Easing.Sinusoidal.Out, true, 350);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay, onClosedCallback) {
        _get(_getPrototypeOf(WindowSettings.prototype), "animateDisappearing", this).call(this, delay, onClosedCallback);

        this.game.add.tween(this.sfxControl).to({
          alpha: 0,
          x: '-150'
        }, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);
        this.game.add.tween(this.musicControl).to({
          alpha: 0,
          x: '+150'
        }, 200, Phaser.Easing.Sinusoidal.InOut, true, delay + 100);
        this.game.tweens.removeFrom(this.buttonRestart);
        this.game.add.tween(this.buttonRestart).to({
          y: '100',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay + 100);
        this.game.tweens.removeFrom(this.publisherLogo);
        this.game.add.tween(this.publisherLogo).to({
          y: '100',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay + 50);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
        }
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(WindowSettings.prototype), "resetTweens", this).call(this);

        this.game.tweens.removeFrom(this.controlsContainer, false);
        this.game.tweens.removeFrom(this.controlsContainer.scale, false);
        this.game.tweens.removeFrom(this.buttonRestart, false);
        this.game.tweens.removeFrom(this.sfxControl, false);
        this.game.tweens.removeFrom(this.musicControl, false);
        this.game.tweens.removeFrom(this.publisherLogo, false);
      }
    }]);

    return WindowSettings;
  }(BlockPuzzle.CloseableWindow);

  BlockPuzzle.WindowSettings = WindowSettings;
})(BlockPuzzle || (BlockPuzzle = {})); ///<reference path="abstract/CloseableWindow.ts"/>


var BlockPuzzle;

(function (BlockPuzzle) {
  var WindowShop =
  /*#__PURE__*/
  function (_BlockPuzzle$Closeabl4) {
    _inherits(WindowShop, _BlockPuzzle$Closeabl4);

    function WindowShop(windowManager) {
      _classCallCheck(this, WindowShop);

      return _possibleConstructorReturn(this, _getPrototypeOf(WindowShop).call(this, windowManager, BlockPuzzle.WindowHeadingBackplateType.SILVER, 'iconHeadingShop', BlockPuzzle.Settings.WINDOW_BACKGROUND_ALPHA));
    }

    _createClass(WindowShop, [{
      key: "buildContent",
      value: function buildContent() {
        this.itemsContainer = this.contentContainer.add(this.game.make.group());
        this.itemsMap = new Map();
        this.itemsMap.set(BlockPuzzle.PowerupType.BOMB, this.itemsContainer.add(new BlockPuzzle.ShopItem(this, BlockPuzzle.PowerupType.BOMB)));
        this.itemsMap.set(BlockPuzzle.PowerupType.LIGHTNING, this.itemsContainer.add(new BlockPuzzle.ShopItem(this, BlockPuzzle.PowerupType.LIGHTNING)));
        this.buttonContinue = this.contentContainer.add(BlockPuzzle.ButtonUtils.createSimpleButton(BlockPuzzle.Settings.GAME_ATLAS, 'buttonContinue', 0, 0, 1, this.continueClicked, this));
        this.starsCounter = this.contentContainer.add(new BlockPuzzle.ShopStarsCounter(this));
        this.windowHeading.visible = false;
        this.buttonContinue.visible = false;
      }
    }, {
      key: "resizeContent",
      value: function resizeContent() {
        _get(_getPrototypeOf(WindowShop.prototype), "resizeContent", this).call(this);

        this.itemsContainer.position.set(-22, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.54);
        this.buttonContinue.position.set(-5, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.85);
        this.starsCounter.position.set(-28 * BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR, this.windowManager.windowBounds.height / this.contentContainer.scale.y * 0.2);
        this.starsCounter.scale.set(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR);

        if (this.currentItem) {
          this.currentItem.scale.set(BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR);
        }
      }
    }, {
      key: "setPowerupType",
      value: function setPowerupType(powerupType) {
        this.itemsMap.forEach(function (item) {
          return item.visible = item.powerupType == powerupType;
        });
        this.currentItem = this.itemsMap.get(powerupType);
      }
    }, {
      key: "show",
      value: function show() {
        _get(_getPrototypeOf(WindowShop.prototype), "show", this).call(this);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_SHOP);
        }

        this.starsCounter.visible = true;
        this.updateData();
      }
    }, {
      key: "updateData",
      value: function updateData() {
        this.starsCounter.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
        this.currentItem.show();
      }
    }, {
      key: "powerupBought",
      value: function powerupBought() {
        this.starsCounter.setStarsAmount(BlockPuzzle.StarsManager.instance.getStarsAmount());
        this.closeClicked();
      }
    }, {
      key: "animateAppearing",
      value: function animateAppearing(delay) {
        this.currentItem.alpha = 0;
        this.game.add.tween(this.currentItem).to({
          alpha: 1
        }, 200, Phaser.Easing.Sinusoidal.Out, true, 200);
        this.currentItem.scale.set(0.6);
        this.game.add.tween(this.currentItem.scale).to({
          x: BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR,
          y: BlockPuzzle.CustomScaleManager.UPSCALE_FACTOR
        }, 240, Phaser.Easing.Back.Out, true, 200);
        this.game.tweens.removeFrom(this.starsCounter);
        this.starsCounter.alpha = 1;
        this.game.add.tween(this.starsCounter).from({
          y: '-60',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay);
        this.buttonContinue.inputEnabled = true;
        this.game.tweens.removeFrom(this.buttonContinue);
        this.buttonContinue.alpha = 1;
        this.game.add.tween(this.buttonContinue).from({
          y: '70',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.Out, true, delay + 50);
      }
    }, {
      key: "animateDisappearing",
      value: function animateDisappearing(delay, onClosedCallback) {
        _get(_getPrototypeOf(WindowShop.prototype), "animateDisappearing", this).call(this, delay, onClosedCallback);

        this.game.add.tween(this.currentItem).to({
          alpha: 0
        }, 160, Phaser.Easing.Sinusoidal.InOut, true, delay);
        this.game.tweens.removeFrom(this.starsCounter);
        this.game.add.tween(this.starsCounter).to({
          y: '-60',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay);
        this.buttonContinue.inputEnabled = false;
        this.game.tweens.removeFrom(this.buttonContinue);
        this.game.add.tween(this.buttonContinue).to({
          y: '100',
          alpha: 0
        }, 250, Phaser.Easing.Sinusoidal.In, true, delay);

        if (BlockPuzzle.Settings.ENABLE_API) {
          window["famobi_analytics"].trackScreen(window["famobi_analytics"].SCREEN_LEVEL);
        }
      }
    }, {
      key: "resetTweens",
      value: function resetTweens() {
        _get(_getPrototypeOf(WindowShop.prototype), "resetTweens", this).call(this);

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

    }, {
      key: "onCloseClicked",
      value: function onCloseClicked() {}
    }, {
      key: "continueClicked",
      value: function continueClicked() {
        this.animateDisappearing(0, function () {});
      }
    }]);

    return WindowShop;
  }(BlockPuzzle.CloseableWindow);

  BlockPuzzle.WindowShop = WindowShop;
})(BlockPuzzle || (BlockPuzzle = {}));
//# sourceMappingURL=game.js.map
