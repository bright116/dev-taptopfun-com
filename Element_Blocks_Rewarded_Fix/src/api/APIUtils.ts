namespace BlockPuzzle {
    export class APIUtils {
        private static _instance: APIUtils = null;
        public static get instance(): APIUtils {
            return APIUtils._instance ? APIUtils._instance :
                APIUtils._instance = new APIUtils();
        }

        public isRewardedVideoFeatureEnabled(): boolean {
            return !!enable_rewarded_videos;
        }

        public hasRewardedVideo(): boolean {
            if(Settings.ENABLE_API && this.isRewardedVideoFeatureEnabled() && window["famobi"].hasRewardedAd)
                return window["famobi"].hasRewardedAd();
            else return false;
        }

        public showRewardedVideo(callback: Function) {
            if(Settings.ENABLE_API && this.isRewardedVideoFeatureEnabled()) {
                (<any>window).famobi.rewardedAd(callback);
            } else {
                callback();
            }
        }



        /* Tracking stats */

        public trackStats(key, value, incrementOnly: boolean = false) {
            const currentLocalStorage = ((<any>window).famobi && (<any>window).famobi.localStorage) ? (<any>window).famobi.localStorage : window.localStorage;
            const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
            const oldValue: number = trackableStats[key] || 0;
            if(incrementOnly && value <= oldValue) {
                return;
            }
            trackableStats[key] = value;
            currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));

            if((<any>window).famobi_analytics && (<any>window).famobi_analytics.trackStats) {
                (<any>window).famobi_analytics.trackStats(key, value);
            }
        };

        public trackStatsChange(key, delta) {
            const currentLocalStorage = ((<any>window).famobi && (<any>window).famobi.localStorage) ? (<any>window).famobi.localStorage : window.localStorage;
            const trackableStats = JSON.parse(currentLocalStorage.getItem("trackableStats") || "{}");
            trackableStats[key] = (trackableStats[key] || 0) + delta;
            currentLocalStorage.setItem("trackableStats", JSON.stringify(trackableStats));

            if((<any>window).famobi_analytics && (<any>window).famobi_analytics.trackStats) {
                (<any>window).famobi_analytics.trackStats(key, trackableStats[key]);
            }
        };


        public showAds(callback: Function, timeout: number = 0) {
            if(Settings.ENABLE_API) {
                if (timeout == 0) {
                    (<any>window).famobi.showAd(callback);
                } else {
                    setTimeout(function () {
                        (<any>window).famobi.showAd(callback);
                    }, timeout);
                }
            } else {
                callback();
            }
        }

    }
}