window.HUHU = {
    _callback: null,
    _failback: null,
};
var interval = 30;
var huhu_s = 0;
window.huhuAd = () => {
    var e = Date.parse(new Date()) / 1000;
    var i = e - huhu_s;
    console.log("interval time = " + i);
    if (i >= 30) {
        huhu_s = e;
        console.log("------------ad1----------------");
        try {
            window.parent.postMessage("open", "*");
        } catch (e) {}
    }
};
window.HUHU_showInterstitialAd = function () {
    console.log("HUHU_showInterstitialAd");

    HUHU_H5Sdk_hide();
    window.parent.postMessage("interstitial", "*");
};

window.HUHU_showRewardedVideoAd = function (callback, failback) {
    console.log("HUHU_showRewardedVideoAd");

    HUHU_H5Sdk_hide();
    
    try {
        window.parent.postMessage("reward", "*");
        window.parent.HUHU = {};
        window.parent.HUHU._callback = callback;
        window.parent.HUHU._failback = failback;

        HUHU_H5Sdk_athenaSend('reward_click');
    } catch (e) {
        if (typeof failback == "function") {
            failback();
        }
    }
};

window.HUHU_H5Sdk_init = function (appKey, top, left, bottom, right) {
    console.log("%c HUHU_H5Sdk_init ...", 'background: #222; color: #bada55');
    if (typeof window.h5sdk === "undefined") {
        console.log("%c HUHU_H5Sdk_init: window.h5sdk not defined", 'background: #222; color: #bada55');
        return;
    }

    window.h5sdk.init(appKey, top, left, bottom, right);
};

window.HUHU_H5Sdk_show = function () {
    console.log("%c HUHU_H5Sdk_show ...", 'background: #222; color: #bada55');

    if (typeof window.h5sdk === "undefined") {
        console.log("%c HUHU_H5Sdk_show: window.h5sdk not defined", 'background: #222; color: #bada55');
        return;
    }

    window.h5sdk.show();
};

window.HUHU_H5Sdk_hide = function () {
    console.log("%c HUHU_H5Sdk_hide ...", 'background: #222; color: #bada55');

    if (typeof window.h5sdk === "undefined") {
        console.log("%c HUHU_H5Sdk_hide: window.h5sdk not defined", 'background: #222; color: #bada55');
        return;
    }

    window.h5sdk.hide();
};

window.HUHU_H5Sdk_athenaSend = function (eventname,param1,param2) {
    console.log("%c HUHU_H5Sdk_athenaSend ... eventname: " + eventname, 'background: #222; color: #bada55');

    if (typeof window.h5sdk === "undefined") {
        console.log("%c HUHU_H5Sdk_athenaSend: window.h5sdk not defined", 'background: #222; color: #bada55');
        return;
    }

    window.h5sdk.athenaSend(eventname,param1,param2);
}

window.onmessage = function (e) {
    e = e || event;
    tempData = e.data + "";
    if (tempData == "close") {
        if (typeof window.HUHU._callback == "function") {
            window.HUHU._callback();
            window.HUHU._callback = null;
        }
    } else if (tempData == "Error") {
        if (typeof window.HUHU._failback == "function") {
            window.HUHU._failback();
            window.HUHU._failback = null;
        }
    }
};

function promptMessage(msg, duration) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement("div");
        this.prompt_.style.cssText =
            "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 2000 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = "1";
    setTimeout(
        function () {
            var d = 0.5;
            this.prompt_.style.webkitTransition = "-webkit-transform " + d + "s ease-in, opacity " + d + "s ease-in";
            this.prompt_.style.opacity = "0";
            this.prompt_.style.display = "none";
        }.bind(this),
        duration
    );
}

window.HUHU_setLoadingProgress =(i)=>{
	console.log('setLoadingProgress:' + i + "%");
	// try{window.parent.postMessage("setLoadingProgress|"+i, "*");}catch(e){}
}

window.parent._resumeClickCallback = function interstitialCallback () {
    HUHU_H5Sdk_athenaSend('ads_pause');
}

window.parent._interstitialCallback = function interstitialCallback () {
    HUHU_H5Sdk_athenaSend('imp_pause');
}

