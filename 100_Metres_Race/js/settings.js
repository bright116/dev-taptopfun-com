var CANVAS_WIDTH = 1360;
var CANVAS_HEIGHT = 640;

var EDGEBOARD_X = 275; 
var EDGEBOARD_Y = 50;

var FONT = "arialbold";
var FONT_2 = "pixel_lcd7regular";

var FPS = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var PLAYER_X_POSITION_IN_SELECTION = CANVAS_WIDTH/2;
var PLAYER_Y_POSITION_IN_SELECTION = CANVAS_HEIGHT/2+29;

var NUM_RUNNERS = 8;

var PLAYER_WIDTH = 165;
var PLAYER_HEIGHT = 103;     

var NUM_ROUNDS;
var NUM_POWER_UP_AVAILABLE = 4;

var PLAYER_MAX_SPEED;
var PLAYER_MIN_SPEED;
var PLAYER_ENERGY;
var PLAYER_RESISTENCE_STEP;
var PLAYER_MAX_SPEED_ADDER;
var PLAYER_ENERGY_ADDER;

var ANIMATION_POSITION = "position";
var ANIMATION_STARTING = "starting";
var ANIMATION_RUNNING = "run";
var ANIMATION_ENDING = "ending";

var SPEED_DECELERATION   = 0.3;
var MODIFIER_SPEED_ADDER = 3;
var ENERGY_INCREASE = 0.15;

var ENEMY_MAX_SPEED = [19,20,20,,20,20,20,19];
var ENEMY_MIN_SPEED = [3, 3, 4, , 4, 4, 3, 3];
var ENEMY_ENERGY = [80, 70, 80, , 100, 90, 80, 80];
var ENEMY_RESISTENCE_STEP = [0.5, 0.4, 0.4, , 0.3,0.35, 0.4, 0.5];
var ENEMY_OCCURRENCE_RUN = [0.7, 0.75, 0.75, , 0.75, 0.75, 0.75, 0.7];

var PLAYER_NAME_AND_SPRITE;

var WAIT_FOR_GAME_START = 0;
var CONFIRMATION_ON_EXIT = 1;
var CONFIRMATION_ON_CAREER_RESET = 2;
var DIST_FROM_ARRIVAL;

var TEAM_0 = 0;
var TEAM_1 = 1;
var TEAM_2 = 2;
var TEAM_3 = 3;
var TEAM_4 = 4;
var TEAM_5 = 5;
var TEAM_6 = 6;
var TEAM_7 = 7;

var LEFT_DIR      = 37;
var RIGHT_DIR     = 39;


var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;