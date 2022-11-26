namespace BlockPuzzle {
    export class Analytics {
        private static _instance: Analytics = null;
        public static get instance(): Analytics {
            return Analytics._instance ? Analytics._instance :
                Analytics._instance = new Analytics();
        }

        public static USER_ID = undefined;
        private static initialized: boolean = false;

        public initUser() {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let data = JSON.parse( this.response).data;
                    let uid = data.uid;
                    let splitTests = data.splitTests;

                    Analytics.initialized = true;
                    Analytics.USER_ID = uid;
                    console.log('UID #', uid);
                }
            };
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/user", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", Settings.GAME_VERSION);
            xhttp.send( JSON.stringify( {'locale':(navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator["userLanguage"] || navigator.language || navigator["browserLanguage"] || 'en' } ) );
        }

        public startLevel( ) {
            if(!Analytics.initialized) {
                return;
            }
            let data = {
                'level': 1
            };
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/start", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID );
            xhttp.send( JSON.stringify( data ) );
        }

        public finishLevel(score: number, stars: number, revives: number, powerups: any[]) {
            if(!Analytics.initialized) {
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
            xhttp.setRequestHeader("X-Version", Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID );
            xhttp.send( JSON.stringify( data ) );
        }

        public updateLevelData(params: object) {
            if(!Analytics.initialized) {
                return;
            }
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "https://element-blocks.tracking.html5games.com/event/level/update", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.setRequestHeader("X-Version", Settings.GAME_VERSION);
            xhttp.setRequestHeader("X-User", Analytics.USER_ID );
            xhttp.send( JSON.stringify( params ) );
        }





    }
}