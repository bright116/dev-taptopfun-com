var TMG_debug = false;

// SDK API

function TMG_init(appName, callback) {
    if (TMG_debug) {
        console.log("TopMathGames SDK initialized.");
        callback();
        return;
    }
    topmathgames.startup({
        appName: appName,
        onComplete: () => {
            callback();
        }
    });
}

function TMG_navigate(screenName, buttonName) {
    if (TMG_debug) {
        console.log("TopMathGames navigation happening:", screenName, buttonName || "logo");
        return;
    }
    topmathgames.navigate(screenName, buttonName || "logo");
}

function TMG_showAd(callback) {
    if (TMG_debug) {
        console.log("TopMathGames starting interstitial ad.");
        setTimeout(function () {
            console.log("TopMathGames interstitial ad over.");
            callback();
        }, 1500);
        return;
    }
    topmathgames.showInterstitial(() => {
        callback();
    });
}

function TMG_showRewardAd(onSuccess, onFailure) {
    if (TMG_debug) {
        console.log("TopMathGames showing reward ad.");
        onSuccess();
        return;
    }
    topmathgames.showReward(
        (success) => {
            if (onSuccess) onSuccess();
        },
        (failurer) => {
            switch (failurer) {
                case "ADSKIPPED":
                    break;

                case "ADERROR":
                    break;

                default:
                    break;
            }
            if (onFailure) onFailure();
        },
        (complete) => {
            // handled by success or failure
        }
    );
}


// Utility functions

var TMG_imagesLoaded;
var TMG_drawImage;
var TMG_drawImageClickable;
var TMG_drawSplash;
var TMG_images;

(function () {
    var images = {};
    var pload = -20;
    var afterSplash = false;
    TMG_images = images;

    window.addEventListener("load", function () {
        loadImage("tmg_logo1", "src/topmathgames/tmg_logo1.png");
        loadImage("tmg_logo2", "src/topmathgames/tmg_logo2.png");
        loadImage("tmg_logo3", "src/topmathgames/tmg_logo3.png");
        loadImage("tmg_robot", "src/topmathgames/tmg_robot.png");
    });

    var loadImage = function (name, src) {
        var image = new Image();
        image.onload = function () {
            images[name] = image;
        }
        image.src = src;
    };

    TMG_imagesLoaded = function () {
        return images["tmg_logo1"] && images["tmg_logo2"] && images["tmg_logo3"] && images["tmg_robot"];
    };

    TMG_drawImage = function (name, x, y, s) {
        if (!images[name]) return;
        var img = images[name];
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        ctx.drawImage(img, 0, 0, w, h, x, y, w * s, h * s);
    };

    TMG_drawImageClickable = function (name, x, y, s, mouseX, mouseY, mousePressed, noeffect) {
        if (!images[name]) return;
        var img = images[name];
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var ws = w * s;
        var hs = h * s;
        var hover = x <= mouseX && mouseX < x + ws && y <= mouseY && mouseY < y + hs;

        /*if (name === "tab_hor") {
            hover = x <= mouseX && mouseX < x + ws && y + 30 <= mouseY && mouseY < y + hs;
        }*/

        if (hover && !noeffect) {
            es = 0.05;
            s += es;
            x -= w * es / 2;
            y -= h * es / 2;
        }
        x = Math.floor(x);
        y = Math.floor(y);

        ctx.drawImage(img, 0, 0, w, h, x, y, w * s, h * s);

        /*if (hover && mousePressed) {
            window.open(deviceMobile ? "https://m.com/" : "https://www.com/", "_blank");
        }*/
        CLICKABLE_PRESENT = hover;
    };

    TMG_drawSplash = function (s, mousePressed, callback) {
        var image = "tmg_logo2";
        if (!images[image]) return;

        var img = images[image];
        var w = img.naturalWidth;
        var h = img.naturalHeight;

        var ww = w * s;
        var hh = h * s;
        var xx = canvas.width / 2 - ww / 2;
        var yy = canvas.height / 2 - hh / 2;

        pload += 0.5;

        if (pload > 130 && !afterSplash) {
            afterSplash = true;
            callback();
        }

        ctx.drawImage(img, 0, 0, w, h, xx, yy - 50, ww, hh);

        yy += 80;
        var lw = 3;
        var lp = 5;
        var p = Math.min(Math.max(0, pload), 100) / 100;

        ctx.fillStyle = "rgb(100, 100, 100)";
        ctx.fillRect(xx, yy + 80, ww, 20);
        ctx.fillStyle = "black";
        ctx.fillRect(xx + lw, yy + 80 + lw, ww - lw * 2, 20 - lw * 2);
        ctx.fillStyle = "red";
        ctx.fillRect(xx + lp, yy + 80 + lp, (ww - lp * 2) * p, 20 - lp * 2);
    };
})();
