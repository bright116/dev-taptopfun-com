namespace BlockPuzzle {
    export class ServiceManager extends AbstractManager {

        public layoutService: LayoutService;
        public figureService: FigureService;
        public starsService: StarsService;
        public inscriptionsService: InscriptionsService;

        constructor(level: Level) {
            super(level);

            this.initServices();
        }

        protected initServices() {
            this.layoutService = new LayoutService(this);
            this.figureService = new FigureService(this);
            this.starsService = new StarsService(this);
            this.inscriptionsService = new InscriptionsService(this);
        }



        /**
         * INHERITED
         */

        public resizeLandscape() {

        }

        public resizeSquared() {

        }

        public resizePortrait() {

        }
    }
}