namespace BlockPuzzle {
    export class Settings {

        //SCALING
        public static USE_HIGH_RESOLUTION_SCALING: boolean = true;
        public static PIXEL_RATIO_MAX_THRESHOLD: number = 3;

        //FONTS
        public static DEFAULT_FONT_FAMILY: string = 'Kanit';

        //WINDOWS
        public static WINDOW_BACKGROUND_ALPHA: number = 0.975;
        public static REVIVE_WINDOW_TIMER: number = 60;
        public static RESULTS_WINDOW_TIMER: number = 85;
        public static RESULTS_WINDOW_TIMER_WITHOUT_REVIVE: number = 110;

        //ATLASES
        public static PRELOADER_ATLAS: string = 'preloader';
        public static GAME_ATLAS: string = 'assets';
        public static ANIMATION_ATLAS: string = 'animations';

        //BOARD
        public static BOARD_ROWS: number = 8;
        public static BOARD_COLS: number = 8;
        public static CELL_WIDTH: number = 75;
        public static CELL_HEIGHT: number = Settings.CELL_WIDTH;
        public static FIGURE_VIEW_DRAGGING_DELTA: number = -160;
        public static FIGURE_VIEW_SPACING: number = 5;

        //FIGURES
        public static DEFAULT_FIGURE_SCALE: number = 0.4;
        public static DRAGGING_FIGURE_SCALE: number = 0.88;
        public static FINAL_FIGURE_SCALE: number = 1.0;

        public static FIGURE_APPEARING_DURATION: number = 350;
        public static FIGURE_APPEARING_DELAY: number = 120;
        public static FIGURE_RETURNING_SPEED: number = 2000;
        public static FIGURE_PICK_UP_TWEEN_DURATION: number = 70;
        public static FIGURE_DISPOSING_TWEEN_DURATION: number = 250;
        public static NOT_APPLICABLE_FIGURE_APLHA: number = 0.475;

        //BLOCKS
        public static BLOCK_DESTROY_ANIMATION_DELAY: number = 65;
        public static BLOCK_DISAPPEARING_DURATION: number = 180;
        public static PICK_RANDOM_EXPLOSION_STARTING_POINT: boolean = true;
        public static SET_THE_SAME_EXPLOSION_COLOR_FOR_ALL_THE_EXPLODING_CELLS: boolean = true;
        public static STAR_SHINING_TWEEN_DURATION: number = 1400; //ms
        public static STARRED_BLOCK_APPEARING_TWEEN_DURATION: number = 750; //ms
        public static BLOCK_DEACTIVATION_TWEEN_DURATION: number = 400;
        public static BLOCK_ACTIVATION_TWEEN_DURATION: number = 250;

        //DIFFICULTY
        public static DIFFICULTY_FACTOR: number = difficulty_level;

        //POWERUPS
        public static POWERUP_USAGE_COUNTDOWN_WHEN_NO_MOVES_LEFT: number = 6 * 1000; // milliseconds
        public static BOMB_PRICE: number = bomb_powerup_basic_price;
        public static BOMB_PRICE_STEP: number = bomb_powerup_price_step;
        public static LIGHTNING_PRICE: number = lightning_powerup_basic_price;
        public static LIGHTNING_PRICE_STEP: number = lightning_powerup_price_step;
        public static POWERUP_HIGHLIGHTING_ALPHA: number = 0.3;
        public static POWERUP_DRAGGING_DELTA: number = -100;

        public static LIGHTING_DELAY_BETWEEN_STRIKES: number = 8;
        public static LIGHTING_MIN_TARGETS: number = 3;
        public static LIGHTING_MAX_TARGETS: number = 5;

        //REVIVE
        public static REVIVE_TIMER_DURATION: number = 10500;

        //SCORES
        public static BASIC_LINE_DESTROYING_REWARD: number = 10;

        //SCORES MULTIPLIER
        public static MULTIPLIER_MILESTONES: number[] = [100, 500, 3000, 14400, 72000, 340000, 1500000, 6000000, 20000000, 100000000];

        //FIGURE GENERATOR
        public static GENERATE_MAX_FIGURES_PER_ITERATION: number = 25;
        public static GENERATE_MAX_POSITIONS_FOR_EACH_FIGURE: number = 1;
        public static RESULTING_FIGURE_RANDOM_COMPRESSION_FACTOR: number = 1.85;
        public static MISTAKE_PROBABILITY_BASIC_STEP: number = 0.025;
        public static MISTAKE_PROBABILITY_STEP_SPEED: number = 0.005;
        public static MISTAKE_MAX_PROBABILITY: number = 0.1;
        public static MISTAKE_IMMUNITY_MIN_MOVES: number = 5;
        public static MISTAKE_IMMUNITY_MAX_MOVES: number = 10;

        //STARS GENERATOR
        public static SKIP_STARS_GENERATION_FOR_FIRST_X_MOVES: number = 5;
        public static BASIC_STAR_GENERATION_PROBABILITY: number = 0.02;
        public static BASIC_STAR_GENERATION_PROBABILITY_STEP: number = 0.0065;
        public static ADDITIONAL_SECOND_STAR_GENERATION_PROBABILITY: number = 0.01;
        public static ADDITIONAL_STAR_GENERATION_PROBABILITY_FOR_DESTROYING_MULTIPLE_LINES: number = 0.02;
        public static MAX_STAR_GENERATING_PROBABILITY: number = 0.3;
        public static STAR_GENERATION_DELAY: number = 1000;
        public static MAX_STARS_ON_BOARD_SIMULTANEOUSLY: number = 3;

        //RESULTS REWARD
        public static RESULTS_DOUBLE_STARS_REWARD: number = results_watch_video_reward;

        //GET STARS BUTTON
        public static GET_STARS_BUTTON_LAST_REWARD_TIMESTAMP: number = 0;
        public static GET_STARS_BUTTON_COOLDOWN: number = get_stars_button_cooldown; // seconds
        public static GET_STARS_BUTTON_ENABLED: boolean = get_stars_button_cooldown > 0;
        public static GET_STARS_BUTTON_REWARD_STARS_AMOUNT: number = get_stars_button_basic_reward; //stars
        public static GET_STARS_BUTTON_REWARD_STARS_AMOUNT_STEP: number = get_stars_button_reward_step; //stars

        //ACHIEVEMENT_INFORMER
        public static ACHIEVEMENT_INFORMER_VISIBILITY_DURATION: number = 5 * 1000; //milliseconds

        //TUTORIAL
        public static TUTORIAL_COMPLETED: boolean = false;

        //SETTINGS
        public static GAME_VERSION: string = "3";
        public static ENABLE_API: boolean = true;
        public static RELEASE_BUILD: boolean = true;
        public static MUSIC_ENABLED_BY_DEFAULT: boolean = true;
        public static LOCAL_STORAGE_KEY: string = 'Element_Blocks' + Settings.GAME_VERSION;
    }
}