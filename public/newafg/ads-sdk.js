var _banner_height = 60;
_is_show_splash_afg = true;
var _force_horizontal = _force_horizontal || false;
_is_show_banner = !_force_horizontal;


var _footer_ad_html = '<ins class="adsbygoogle"'
    + ' style="display:inline-block;width:100%;height:50px"'
    + ' data-ad-client="' + GadAFC + '"'
    + ' data-ad-slot="' + GadSlot + '"></ins>';

var is_proxy = false;
var afc_done = false;

var game_frame = document.getElementById('game_frame');
game_frame.src = 'game.html';
game_frame.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var gameframediv = document.getElementById('gameframediv');
gameframediv.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

var interval = 30;
var afg_ts_start = 0;

window.onmessage = function(e) {
    e = e || event;
    tempData = e.data + "";
    if (tempData == "open" || tempData == "interstitial") {
        try {
            if (!is_proxy) {
                var currtime = Date.parse(new Date()) / 1000;
                var i = currtime - afg_ts_start;
                console.log("interval time = " + i);

                if(i >= interval) {
                    afg_ts_start = currtime;
                    console.log("------------ad1----------------");
                    HUHUGad.start();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    else if (tempData == "reward") {
        HUHUGad.reward();
    }
}

function _change_game_icon() {
    var gameArr = [
        "/Parking_Fury_2/index.html",
        "/Elsa_Sports_Injury_And_Recovery_2/index.html",
        "/Lets_Park/index.html",
        "/Train_Snake/index.html"
    ];

    var url = gameArr[Math.floor(Math.random() * gameArr.length)];
    $(".more_games").attr("href", url);
    setTimeout(_change_game_icon, 1000);
}

function showRotateScreen() {
    let screenOrientation = ($(window).width() > $(window).height())? "horizontal" : "portrait";
    if (screenOrientation === "portrait") {
        // PORTRAIT
        document.getElementById("rotate").style.display = "block";
    }
    else {
        document.getElementById("rotate").style.display = "none";
    }
}

function promptMessage(msg, duration) {
    if (!this.prompt_) {
        this.prompt_ = document.createElement('div');
        this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(this.prompt_);
    }
    this.prompt_.innerHTML = msg;
    duration = isNaN(duration) ? 2000 : duration;
    this.prompt_.style.display = "inline";
    this.prompt_.style.opacity = '1';
    setTimeout(function() {
        var d = 0.5;
        this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        this.prompt_.style.opacity = '0';
        this.prompt_.style.display = "none";
    }.bind(this), duration);
}

const continueHtml = '<div id="continue" class="continue" onclick="onClickContinue()"><h2 class="continue_text">Continue Playing ...</h2></div>';

$(document).ready(function() {
    // update page title
    document.title = gameTitle.replace(/_/, " ");

    $('body').append(continueHtml);
    $("#continue").hide();

    if (_is_show_splash_afg) {
        HUHUGad.start();
    } else {
        HUHUGad.showGame();
    }

    if (_is_show_banner) {
        _append_footer_ad();
    }

    if (_is_show_go_icon) {
        $("body").append('<a class="more_games"><img class="go-other" src="/public/img/gift.png"></a>');
        _change_game_icon();
    }

    $(window).trigger('resize');
});

function _getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function _append_footer_ad() {
    console.log('_append_footer_ad');
    $("#afc_banner_foot").html(_footer_ad_html);
    $("#afc_banner_foot").append('<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
}

function _add_ga() {
    (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {

                (i[r].q = i[r].q || []).push(arguments)
            }
                ,
                i[r].l = 1 * new Date();
            a = s.createElement(o),

                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)

        }
    )(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', GadGA, 'auto');
    ga('send', 'pageview');
}

$(window).resize(function() {
    if (typeof _force_horizontal !== 'undefined' && _force_horizontal) {
        showRotateScreen();
    }

    if (_is_show_banner) {
        $("#gameframediv").height($(window).height() - _banner_height);
        HUHUGad.banner_height = _banner_height;

        // $("#gameframediv").css("top", _banner_height);
    } else {
        $("#gameframediv").height($(window).height());
    }
});

var HUHUAFG = window.HUHUAFG = {};
HUHUAFG._cb = null;
HUHUAFG.requestAD = function () {};

// JavaScript Document
var HUHUGad = {
    adsManager: null,
    adsLoader: null,
    adDisplayContainer: null,
    videoContent: null,
    intervalTimer: null,
    adContainer: null,
    timeoutTimer: null,
    timeCounter: 15,
    adObject: null,
    iftickTimer: 0,
    mainContainer: null,
    startTime: new Date,
    _adload: null,
    curTime: 0,
    banner_height: 0,
    start: function() {
        console.debug("start ... ")

        HUHUGad.showadsContainer();

        HUHUGad.videoContent = $("#videoElement").get(0);
        HUHUGad.adContainer = $("#adContainer");
        HUHUGad.adContainer.width($(window).width());
        HUHUGad.adContainer.height($(window).height());
        // HUHUGad.adContainer.height($(window).height() - HUHUGad.banner_height);

        console.log('[HUHUGad.start] adBreak');

        setTimeout(function(){
            adBreak({
                type: 'preroll',
                name: 'new_afg',
                adBreakDone: (placementInfo) => {
                    console.log("[HUHUGad.start] adBreakDone ... breakStatus=" + placementInfo.breakStatus);

                    let _callback = window.parent._interstitialCallback;
                    if (_callback != null && typeof (_callback) == "function") {
                        _callback();
                    }

                }
            });
        }, 200);
        
        HUHUGad.showGame();

        // HUHUGad.requestAds();
        $(window).bind("resize", HUHUGad.correctPositions);
    },
    reward: function() {
        console.debug("reward ... ")

        HUHUGad.showadsContainer();

        HUHUGad.videoContent = $("#videoElement").get(0);
        HUHUGad.adContainer = $("#adContainer");
        HUHUGad.adContainer.width($(window).width());
        HUHUGad.adContainer.height($(window).height());
        // HUHUGad.adContainer.height($(window).height() - HUHUGad.banner_height);

        adBreak({
            type: "reward",  // ad shows at start of next level
            name: name,
            beforeAd: () => {
                console.log('reward.beforeAd ' );
            },  // You may also want to mute the game's sound.
            afterAd: () => {
                console.log('reward.afterAd ');
            },
            adViewed: () => {
                console.log('reward.adViewed ');
            },
            beforeReward: (showAdFn) => {
                showAdFn();
            },
            adDismissed: () => {
                console.log('reward.adDismissed ');
            },
            adBreakDone: (placementInfo) => {
                console.log("reward.adBreakDone breakStatus=" + placementInfo.breakStatus);
                let breakStatus = placementInfo.breakStatus;

                if (breakStatus === "viewed") {
                    let _callback = window.parent.HUHU._callback;
                    if (_callback != null && typeof (_callback) == "function") {
                        _callback();
                        window.parent.HUHU._callback = null;
                    }
                }
                else {
                    let _failback = window.parent.HUHU._failback;
                    if (_failback == null || typeof (_failback) != "function") {
                        console.log("Failed to pass fail callback");
                        return;
                    }

                    if (breakStatus === "frequencyCapped") {
                        _failback("Please wait for at least 30s to request ads again");
                    }
                    else if (breakStatus === "dismissed") {
                        _failback("Please watch ads until the end");
                    }
                    else {
                        _failback("Failed to load ads. Please wait for a while and try later.");
                    }

                    window.parent.HUHU._failback = null;
                }
            }
        });

        $(window).bind("resize", HUHUGad.correctPositions);
    },
    showGame: function() {
        //HUHUGad.iftickTimer = 0;
        $("#adsContainer").hide();
        $("#mainContainer").hide();

        HUHUAFG._cb && HUHUAFG._cb(true);
        HUHUAFG._cb = null;
        //HUHUGad.adloadStop();
    },

    correctPositions: function() {
        console.log("correctPositions..");
        if (HUHUGad.adObject && HUHUGad.adsManager) {
            if (HUHUGad.adObject.isLinear()) {

                HUHUGad.adContainer.height($(window).height());
                HUHUGad.adsManager.resize($(window).width(), $(window).height(), google.ima.ViewMode.NORMAL);
                // HUHUGad.adContainer.height($(window).height() - HUHUGad.banner_height);
                // HUHUGad.adsManager.resize($(window).width(), $(window).height() - HUHUGad.banner_height, google.ima.ViewMode.NORMAL);
            } else {
                $("#adsContainer").css({
                    "margin-top": 0
                });
                $("#adsContainer").height($(window).height());
                HUHUGad.adContainer.height($(window).height());

                // $("#adsContainer").height($(window).height() - HUHUGad.banner_height);
                // HUHUGad.adContainer.height($(window).height() - HUHUGad.banner_height);
                HUHUGad.adsManager.resize(HUHUGad.adObject.getWidth(), HUHUGad.adObject.getHeight(), google.ima.ViewMode.NORMAL);
                var PaddingLeft = ($(window).width() - HUHUGad.adObject.getWidth()) / 2;
                if (PaddingLeft < 0)
                    PaddingLeft = 0;
                $("#adContainer").css({
                    "padding-left": PaddingLeft
                });
            }
        }
    },
    requestAds: function() {
        HUHUGad.adDisplayContainer = new google.ima.AdDisplayContainer(HUHUGad.adContainer.get(0));
        HUHUGad.adDisplayContainer.initialize();
        HUHUGad.adsLoader = new google.ima.AdsLoader(HUHUGad.adDisplayContainer);
        HUHUGad.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, HUHUGad.onAdsManagerLoaded, !1);
        HUHUGad.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, HUHUGad.events.onAdError, !1);
        var e = new google.ima.AdsRequest;
        e.adTagUrl = GadURL;

        e.forceNonLinearFullSlot = true;
        e.nonLinearAdSlotWidth = HUHUGad.adContainer.width();
        e.nonLinearAdSlotHeight = HUHUGad.adContainer.height();

        HUHUGad.adsLoader.requestAds(e);
    },
    onAdsManagerLoaded: function(e) {
        HUHUGad.adsManager = e.getAdsManager(HUHUGad.videoContent);
        HUHUGad.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, HUHUGad.events.onAdError);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, HUHUGad.events.onUserClose);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, HUHUGad.events.onSkipped);
        // HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, HUHUGad.events.onComplete);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, HUHUGad.events.onAdEvent);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, HUHUGad.events.onAdEvent);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, HUHUGad.events.onAdEvent);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, HUHUGad.events.onAdEvent);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, HUHUGad.events.onAllAdsCompleted);
        HUHUGad.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, HUHUGad.events.onContentResumeRequested);
        try {
            HUHUGad.adsManager.init(HUHUGad.adContainer.width(), HUHUGad.adContainer.height(), google.ima.ViewMode.NORMAL);
            HUHUGad.adsManager.start();
        } catch (i) {
            HUHUGad.showGame();
        }
    },
    events: {
        onContentResumeRequested: function() {
            console.debug('onContentResumeRequested');
        },
        onAllAdsCompleted: function() {
            console.debug('onAllAdsCompleted');
        },
        onUserClose: function() {
            console.debug('onUserClose');
            HUHUGad.showGame();
        },
        onSkipped: function() {
            console.debug('onSkipped');
            game_frame.contentWindow.postMessage('skipped','*');

            HUHUGad.showGame();
        },
        // onComplete: function() {
        //     console.debug('onComplete');
        //     HUHUGad.showGame();
        // },
        onAdEvent: function(e) {
            var i = e.getAd();
            switch (e.type) {
                case google.ima.AdEvent.Type.LOADED:

                    // HUHUGad.showadsContainer();
                    console.log('google.ima.AdEvent.Type.LOADED');
                    HUHUGad.adObject = i;
                    HUHUGad.correctPositions();
                    $("#mainContainer").show();
                    //HUHUGad.tickTimer();
                    //i.isLinear() || HUHUGad.tickTimer();
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    HUHUGad.curTime = 1 * new Date;
                    console.log('google.ima.AdEvent.Type.STARTED');
                    HUHUGad.iftickTimer = 0;
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    console.log('google.ima.AdEvent.Type.COMPLETE');
                    game_frame.contentWindow.postMessage('complete','*');

                    HUHUGad.showGame();
                    break;
                case google.ima.AdEvent.Type.CLICK:
                    HUHUGad.showGame();
            }
        },
        onAdError: function(e) {
            console.log(e);

            game_frame.contentWindow.postMessage("error", "*");
            HUHUGad.iftickTimer = 0;
            HUHUGad.showGame();
        }
    },

    tickTimer: function() {
        if (HUHUGad.iftickTimer == 1) {
            HUHUGad.timeoutTimer = setTimeout(function() {

                HUHUGad.timeCounter--;
                if (HUHUGad.timeCounter == 0) {
                    HUHUGad.showGame();
                    HUHUGad.timeCounter = 15;
                    clearTimeout(HUHUGad.timeoutTimer);

                } else {

                    HUHUGad.tickTimer();
                }
            }, 1e3)
        } else {
            HUHUGad.timeCounter = 15;
            clearTimeout(HUHUGad.timeoutTimer);

        }

    },

    logPageClosedWhileAd: function() {
    },

    showadsContainer: function() {
        HUHUGad.iftickTimer = 1;
        HUHUGad.tickTimer();

        console.log(' showadsContainer: function () ');
        $("#adContainer").empty();
        // document.getElementById("adContainer").innerHTML += '<div  id="afgloading" >Loading...</div>';
        $("#adsContainer").show();
        //$("#mainContainer").show();
    }
};

function onClickContinue() {
    console.log('onClickContinue ...');

    window.postMessage('interstitial', '*');

    let _callback = window.parent._resumeClickCallback;
    if (_callback != null && typeof (_callback) == "function") {
        _callback();
    }


    // HUHU_showInterstitialAd();
    $("#continue").hide();
}

// Pause and resume on page becoming visible/invisible
function onVisibilityChanged() {
    if (document.hidden || document.mozHidden || document.webkitHidden || document.msHidden) {
        console.log('onVisibilityChanged suspended');
    }
    else {
        console.log('onVisibilityChanged resume');
        $("#continue").show();
    }
};

document.addEventListener("visibilitychange", onVisibilityChanged, false);
document.addEventListener("mozvisibilitychange", onVisibilityChanged, false);
document.addEventListener("webkitvisibilitychange", onVisibilityChanged, false);
document.addEventListener("msvisibilitychange", onVisibilityChanged, false);
