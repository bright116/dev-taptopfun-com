function unlockAllLevels() {
    for (var i = 0; i < 40; i++) {
        unlocked[i] = true;
    }

    updateLevelStates();
}

//parent.unlockAllLevels = unlockAllLevels;

function resizeIt() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var c = ctx.canvas;
    var sw = c.width;
    var sh = c.height;

    var r = w / h;
    var sr = sw / sh;

    if (r > sr) {
        sw *= h / sh;
        sh = h;
    } else {
        sh *= w / sw;
        sw = w;
    }

    WIDTH_RATIO = c.width / sw;
    HEIGHT_RATIO = c.height / sh;

    c.style.width = Math.floor(sw) + "px";
    c.style.height = Math.floor(sh) + "px";
    c.style.left = Math.floor((w - sw) / 2) + "px";
    c.style.top = Math.floor((h - sh) / 2) + "px";
    //topDiv.style.marginTop = Math.floor((h - sh) / 2) + "px";
    //topDiv.style.
}

function checkCorrectSite() {/*
    var hostname = parent.location.hostname;

    return (hostname === "" || hostname.indexOf("coolmath-games.com") >= 0);*/
}

function cmgStart() {/*
    if (parent.cmgGameEvent) {
        parent.cmgGameEvent("start");
    }*/
}

function cmgStartLevel(n) {/*
    if (parent.cmgGameEvent) {
        parent.cmgGameEvent("start", "" + n);
    }*/
}

function cmgReplay(n) {/*
    if (parent.cmgGameEvent) {
        parent.cmgGameEvent("replay", "" + n);
    }*/
}
