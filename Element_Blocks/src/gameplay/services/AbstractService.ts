namespace BlockPuzzle {
    export abstract class AbstractService {

        public readonly serviceManager: ServiceManager;
        public readonly level: Level;

        constructor(serviceManager: ServiceManager) {
            this.serviceManager = serviceManager;
            this.level = serviceManager.level;
        }

    }
}