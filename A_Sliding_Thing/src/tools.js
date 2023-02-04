function getLevel(n) {
    var level = LEVELS[n];
    var player = { x: 0, y: 0 };
    var hole = { x: 0, y: 0 };
    var teleports = false;
    var teleport1 = { x: 0, y: 0 };
    var teleport2 = { x: 0, y: 0 };
    var coins = [];
    var rotators = [];
    var blocks = [];
    var grid = [];

    for (var i = 0; i < level.length; i++) {
        grid.push(false);
    }

    for (var i = 0; i < level.length; i++) {
        var x = i % WIDTH;
        var y = Math.floor(i / WIDTH);

        switch (level.charAt(i)) {
            case ".":
                break;

            case "@":
                player.x = x;
                player.y = y;
                break;

            case "#":
                grid[x + y * WIDTH] = true;
                break;

            case "o":
                hole.x = x;
                hole.y = y;
                break;

            case "%":
                if (teleports) {
                    teleport2.x = x;
                    teleport2.y = y;
                } else {
                    teleport1.x = x;
                    teleport1.y = y;
                }
                teleports = true;
                break;

            case "$":
                coins.push({ x: x, y: y });
                break;

            case "+":
                rotators.push({ x: x, y: y });
                break;

            case "x":
                blocks.push({
                    x: x,
                    y: y,
                    realX: x * CELL,
                    realY: y * CELL
                });
                break;
        }
    }

    return {
        get: function (x, y) {
            return grid[Math.floor(x) + Math.floor(y) * WIDTH];
        },

        grid: grid,

        player: player,
        hole: hole,
        teleports: teleports,
        teleport1: teleport1,
        teleport2: teleport2,
        coins: coins,
        rotators: rotators,
        blocks: blocks
    };
}

function gotoLevel(n) {
    levelmenu = n === MENU_LEVEL;
    helpmenu = n === HELP_LEVEL;

    if (n < 40) {
        selx = n % 8;
        sely = Math.floor(n / 8);
    }

    if (levelmenu) {
        //AG_endGame(function () { }, {});
        prevMouseX = game.mouseX;
        prevMouseY = game.mouseY;
        updateLevelStates();
    }

    if (hasLocalStorage) {
        localStorage.setItem("levels", JSON.stringify(unlocked));
    }

    /*
    if (n < 40 && !levelmenu && !helpmenu && lastlevel !== HELP_LEVEL) {
        if (lastlevel === n) {
            cmgReplay(n + 1);
        } else {
            cmgStartLevel(n + 1);
        }
    }
    */

    if (n < 40) {
        if (lastlevel === n) {
            cmgReplay(n + 1);
        }
        else if (lastlevel === MENU_LEVEL) {
            cmgStartLevel(n + 1);
        }
    }

    levelgrid = getLevel(n);
    levelimage = LEVELIMAGES[n];
    prevlevel = levelnumber;
    levelnumber = n;
    lastlevel = n;

    moving = false;
    startedMoving = false;
    mouseActive = false;
    mouseMoving = false;
    fadein = 1.5;

    completeDelta = 0;
    completed = false;

    var rotator;

    for (var i = 0; i < rotators.length; i++) {
        game.destroyInstance(rotators[i]);
    }

    rotators = [];
    for (var i = 0; i < levelgrid.rotators.length; i++) {
        rotator = levelgrid.rotators[i];
        rotators.push(game.createInstance("obj_rotator", rotator.x, rotator.y));
    }

    plankDelta = 0;

    currentBlock = null;
    teleportAnimation = 0;
    coinRotation = 0;

    if (player) {
        game.destroyInstance(player);
    }

    var px = levelgrid.player.x;
    var py = levelgrid.player.y;
    player = game.createInstance("obj_player", px * CELL, py * CELL);
}

function getUnlockedCount() {
    var count = 0;

    for (var i = 0; i < 40; i++) {
        if (unlocked[i]) {
            count += 1;
        }
    }

    return count;
}

function updateLevelStates() {
    levelStates = [];

    var c = 0;

    for (var i = 0; i < unlocked.length; i++) {
        if (unlocked[i]) {
            levelStates.push(2);
        } else {
            if (c < 2) {
                levelStates.push(1);
                c += 1;
            } else {
                levelStates.push(0);
            }
        }
    }
}

function detectEnv() {
    var ua = navigator.userAgent;

    if (/Android/.test(ua)) {
        deviceOS = "android";
    }
    else if (/iP[ao]d|iPhone/i.test(ua)) {
        deviceOS = "ios";
    }
    else if (/Windows Phone/i.test(ua) || /IEMobile/i.test(ua)) {
        deviceOS = "windowsphone";
    }
    else if (/Linux/.test(ua)) {
        deviceOS = "linux";
    }
    else if (/Mac OS/.test(ua)) {
        deviceOS = "macos";
    }
    else if (/Windows/.test(ua)) {
        deviceOS = "windows";
    }

    if (/Safari/.test(ua) && !(/Chrome\/(\d+)/.test(ua)) && (deviceOS === "ios" || deviceOS === "macos")) {
        console.log("safari detected");
        browserSafari = true;
    }

    deviceMobile = deviceOS === "ios" || deviceOS === "android" || deviceOS === "windowsphone";
    if (deviceOS) console.log(deviceOS + " detected");
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function strokeCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

function fillCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function fillTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}

function strokeTriangle(x1, y1, x2, y2, x3, y3) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}

function isInBox(mx, my, x, y, w, h) {
    return x < mx && mx <= x + w && y < my && my <= y + h;
}

function mouseInBox(x, y, w, h) {
    return isInBox(game.mouseX, game.mouseY, x, y, w, h);
}
