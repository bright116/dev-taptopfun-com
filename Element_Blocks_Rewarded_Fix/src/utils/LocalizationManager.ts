namespace BlockPuzzle {
    export class LocalizationManager {

        private static texts: JSON;

        public static init(jsonFile:any) {
            LocalizationManager.texts = jsonFile;
        }

        public static getText(key:string): string {
            return LocalizationManager.texts[key] ? LocalizationManager.texts[key] : "NO_TEXT";
        }
    }
}