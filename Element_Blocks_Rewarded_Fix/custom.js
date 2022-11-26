window.famobi = window.famobi || {};
window.famobi.hasGameReadyCalled = false;
window.famobi.hideSplashScreen = function() {
	if(!window.famobi.hasGameReadyCalled) {
		window.famobi.hasGameReadyCalled = true;
		console.log("GAMESNACKS.gameReady")
		GAMESNACKS.gameReady();
	}
}
window.famobi.audio = window.famobi.audio || {

	controls: false,
	bgm: true,
	sfx: true,

	init: function() {
		// do something
	},
	hasControls: function() {
		return this.controls;
	},
	isEnabled: function(type) {
		switch(type) {
			case "bgm":
				// return this.bgm;
			case "sfx":
				// return this.sfx;
			default:
				// return this.bgm && this.sfx;
				return GAMESNACKS.isAudioEnabled();
		}
	}
};

window.famobi_analytics = window.famobi_analytics || {};
window.famobi_tracking = window.famobi_tracking || {
	log: function() {},
	initUser: function() {},
	init: function() {},
	trackingAdCallback: function() {},
	trackEvent: function() {},
	sendRequest: function() {},
	processQueue: function() {}
};

window.famobi.getCurrentLanguage = function() {
	return "en";
};

window.famobi_analytics.trackEvent = function(event, params) {
	console.log(event, params);
	return new Promise(function(resolve, reject) {
		switch(event) {
			case "EVENT_LIVESCORE":
				console.log("GAMESNACKS.sendScore", params.liveScore);
				GAMESNACKS.sendScore(params.liveScore);
				return resolve(event, params);
			case "EVENT_LEVELSCORE":
				console.log("GAMESNACKS.sendScore", params.levelScore);
				GAMESNACKS.sendScore(params.levelScore);
				return resolve(event, params);
			case "EVENT_TOTALSCORE":
				console.log("GAMESNACKS.sendScore", params.totalScore);
				GAMESNACKS.sendScore(params.totalScore);
				return resolve(event, params);
			case "EVENT_LEVELFAIL":
				if(params.reason == "quit") {
					break;
				}
				console.log("GAMESNACKS.gameOver");
				GAMESNACKS.gameOver();
				return resolve(event, params);
			case "EVENT_LEVELSUCCESS":
				console.log("EVENT_LEVELSUCCESS");

				var gsLevel = -1;

				switch(window.famobi_gameID) {
					case "8-ball-billiards-classic":
						gsLevel = 0;
						break;
					default:
						if(!params.levelName.length) {
							gsLevel = 0;
						} else {
							gsLevel = parseInt(params.levelName.replace(/\D/g, "")) || -1;
						}
				}
				console.log("GAMESNACKS.levelComplete", gsLevel);
				GAMESNACKS.levelComplete(gsLevel);
				break;
			default:
				// ...
		}
		return resolve(event, params);
	});
};

window.famobi_analytics.trackScreen = function(screen) {

	if(screen == "SCREEN_HOME" || screen == "SCREEN_LEVEL") {
		setTimeout(function() {
			window.famobi.hideSplashScreen();
		}, 500);
	}
}

// Gamesnack Audio Listener
GAMESNACKS.subscribeToAudioUpdates((isAudioEnabled) => {
	console.log("audio update received!");

	if(isAudioEnabled) {
		if(typeof window.famobi_onUnmuteRequested == "function") {
			window.famobi_onUnmuteRequested();
			console.log("unmuting requested");
		}
	} else {
		if(typeof window.famobi_onMuteRequested == "function") {
			window.famobi_onMuteRequested();
			console.log("muting requested");
		}
	}
});

// localforage: driver to localstorage
if(famobi_gameJS.includes("c2runtime.js")) {

	localForageCheck = setInterval(function() {

		if(typeof localforage !== "undefined") {
			console.log("localforage found");
			clearInterval(localForageCheck);

			localforage.ready(function() {
				localforage.setDriver(localforage.LOCALSTORAGE);
			});
		}
	}, 250);
}

// ------------ Rewarded Ads APIs ------------
var showRewarded_adViewed = function() {

}
var showRewarded_adDismissed = function() {

}

var rewardedAdObject = {
	enableLog: false,
	showAdFn: null,
	state: 0,
	states: {
		"WAITING": 0,
        "READY": 1,
        "PLAYING": 2,
        "CLOSED": 3
    },
    setState: function(state) {
    	this.enableLog && console.log("new state: " + state);
    	this.state = state;
    },
    beforeReward: function(showAdFn) {
        this.showAdFn = showAdFn;
        this.setState(this.states.READY);
    },
    beforeAd: function() {
        if(typeof window.famobi_onPauseRequested == "function") {
        	window.famobi_onPauseRequested();
        }
        this.setState(this.states.PLAYING);
    },
    beforeBreak: function() {
        if(typeof window.famobi_onPauseRequested == "function") {
        	window.famobi_onPauseRequested();
        }
        this.setState(this.states.PLAYING);
    },
    adComplete: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adViewed();
    },
    adViewed: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adViewed();
    },
    adDismissed: function() {
        this.setState(this.states.CLOSED);
        showRewarded_adDismissed();
    },
    afterAd: function() {
        if(typeof window.famobi_onResumeRequested == "function") {
        	window.famobi_onResumeRequested();
        }
        this.setState(this.states.WAITING);
    },
    afterBreak: function() {
        if(typeof window.famobi_onResumeRequested == "function") {
        	window.famobi_onResumeRequested();
        }
        this.setState(this.states.WAITING);
    }
}

window.famobi.hasRewardedAd = function() {

	if(!window.famobi.hasFeature("rewarded")) {
		rewardedAdObject.enableLog && console.log("rewarded disabled")
		return false;
	}

	rewardedAdObject.enableLog && console.log("current state: " + rewardedAdObject.state);

	if(rewardedAdObject.state == rewardedAdObject.states.WAITING) {
		try{
			GAMESNACKS.rewardedAdOpportunity(rewardedAdObject);
		}catch(e) {
			console.log(e);
		}
		return typeof rewardedAdObject.showAdFn == "function";
	}

	if(rewardedAdObject.state == rewardedAdObject.states.READY) {
		return typeof rewardedAdObject.showAdFn == "function";
	}
	return false;
}

window.famobi.rewardedAd = function(callback) {

	var doCallback = function(result) {
		if(typeof callback === "function") {
			callback(result);
		} else {
			rewardedAdObject.enableLog && console.log("callback is not of type 'function'");
		}
	}

	if(rewardedAdObject.state !== rewardedAdObject.states.READY) {
		rewardedAdObject.enableLog && console.log("not ready: " + rewardedAdObject.state);
		doCallback({adDidLoad: false, adDidShow: false, rewardGranted: false});
		return;
	}

	if(typeof rewardedAdObject.showAdFn !== "function") {
		rewardedAdObject.enableLog && console.log("showAdFn is not a function");
		doCallback({adDidLoad: false, adDidShow: false, rewardGranted: false});
		return;
	}

	showRewarded_adViewed = function() {
		doCallback({adDidLoad: true, adDidShow: true, rewardGranted: true});
	};

	showRewarded_adDismissed = function() {
		doCallback({adDidLoad: true, adDidShow: true, rewardGranted: false});
	};

	try{
		setTimeout(rewardedAdObject.showAdFn, 250);
	} catch(e) {
		rewardedAdObject.enableLog && console.log(e);
		doCallback({adDidLoad: false, adDidShow: false, rewardGranted: false});
	}
}
