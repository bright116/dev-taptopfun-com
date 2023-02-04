//AG_init("5dcad9604e860911138320ef");

var canvas = document.getElementById("display");
var game = new Game(canvas);
var ctx = game.ctx;

var hasLocalStorage = true;

try {
    if (!localStorage.getItem("music")) {
        localStorage.setItem("music", "on");
    }

    if (!localStorage.getItem("sounds")) {
        localStorage.setItem("sounds", "on");
    }
} catch (err) {
    hasLocalStorage = false;
}

var WIDTH = 22;
var HEIGHT = 10;
var CELL = 36;
var OFFSETX = ctx.canvas.width / 2 - CELL * WIDTH / 2;
var OFFSETY = CELL;

var MUSIC = true;
var SOUND = true;

var MENU_LEVEL = LEVELS.length - 1;
var HELP_LEVEL = LEVELS.length - 2;
var END_LEVEL = LEVELS.length - 3;

var levelmenu = true;
var helpmenu = false;

var controller = null;
var player = null;

var levelgrid = null;
var levelnumber = 1;
var prevlevel = -1;
var lastlevel = 1;

var direction = 0;
var moving = false;
var turning = false;
var turndir = 0;
var startedMoving = false;

var restarting = false;

var mouseActive = false;
var mouseMoving = false;
var mouseSwiped = false;

var aaGameLoaded = false;
var aaUserTouched = false;

var levelStates = [];
var unlocked = [];
for (var i = 0; i < 40; i++) {
    unlocked.push(false);
}

var rotators = [];

var currentBlock = null;
var teleportAnimation = 0;
var teleportFlash = 0;
var teleportTween = new Tween(0.9, 10);
var coinRotation = 0;
var holeTween = new Tween(0.8, 10);

var tweenBlock = null;
var blockTweenX = new Tween(0.8, 10);
var blockTweenY = new Tween(0.8, 10);
var plankDelta = 0;

var completed = false;
var completeDelta = 0;

var prevMouseX = 0;
var prevMouseY = 0;

var selx = 0;
var sely = 0;
var buttonTweens = [];
var buttonSelects = [];
for (var i = 0; i < 40; i++) {
    buttonTweens.push(new Tween(0.7, 10));
    buttonSelects.push(false);
}

var fadingEvent = null;

var levelimage = null;

var WALLCOL = "rgb(180, 100, 60)";

var fadein = 1;
var fading = false;

var OUTLINE = false;

var boxgrad = ctx.createLinearGradient(0, 0, 0, HEIGHT * CELL);
boxgrad.addColorStop(0, "white");
boxgrad.addColorStop(1, "black");

ctx.textAlign = "center";
ctx.textBaseline = "middle";

game.addObject("obj_background", {
    create: function () {
        this.depth = 1000;
    },

    update: function () {
        if (levelimage) {
            ctx.drawImage(levelimage, OFFSETX - 5, OFFSETY - 5);
        }
    }
});

game.addObject("obj_levelcontroller", {
    create: function () {
        this.depth = 0;
    },

    update: function () {
        var sh = 4;

        // WALLS
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.fillStyle = WALLCOL;

        var s = 0;

        for (var i = 0; i < levelgrid.grid.length; i++) {
            var wall = levelgrid.grid[i];
            var ix = i % WIDTH;
            var iy = Math.floor(i / WIDTH);

            if (wall) {
                ctx.fillRect(OFFSETX + ix * CELL + s, OFFSETY + iy * CELL + s, CELL - 2 * s, CELL - 2 * s);

            }
        }


        // TELEPORTS
        s = 3;

        if (levelgrid.teleports) {
            var l = 4;
            var mr = CELL / 2 - s + teleportTween.get();
            var r = mr - l / 2;

            teleportAnimation -= 0.2;

            if (teleportAnimation < 0) {
                teleportAnimation = r;
            }

            if (teleportFlash > 0) {
                teleportFlash -= 0.1;
            }

            var ta = (teleportAnimation + r / 2) % r;
            var tx, ty;

            // teleport 1

            tx = levelgrid.teleport1.x;
            ty = levelgrid.teleport1.y;

            if (OUTLINE) {
                ctx.fillStyle = "black";
                fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr + 2);
            }

            ctx.fillStyle = "rgb(180, 40, 160)";
            //ctx.fillRect(OFFSETX + tx * CELL + s, OFFSETY + ty * CELL + s, CELL - 2 * s, CELL - 2 * s);
            fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr);

            ctx.strokeStyle = "rgb(150, 10, 130)";
            ctx.lineWidth = l;
            strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, teleportAnimation);
            strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, ta);
            ctx.lineWidth = l - 1;
            strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr - l / 2);

            // teleport 2

            if (!helpmenu) {

                tx = levelgrid.teleport2.x;
                ty = levelgrid.teleport2.y;
                //ctx.fillRect(OFFSETX + tx * CELL + s, OFFSETY + ty * CELL + s, CELL - 2 * s, CELL - 2 * s);

                if (OUTLINE) {
                    ctx.fillStyle = "black";
                    fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr + 2);
                }

                ctx.fillStyle = "rgb(180, 40, 160)";
                fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr);

                ctx.strokeStyle = "rgb(150, 10, 130)";
                ctx.lineWidth = l;
                fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr);
                strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, teleportAnimation);
                strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, ta);
                ctx.lineWidth = l - 1;
                strokeCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr - l / 2);

            }

            if (teleportFlash > 0) {
                ctx.globalAlpha = teleportFlash;
                ctx.fillStyle = "rgb(230, 0, 210)";
                tx = levelgrid.teleport1.x;
                ty = levelgrid.teleport1.y;
                fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr);
                tx = levelgrid.teleport2.x;
                ty = levelgrid.teleport2.y;
                fillCircle(OFFSETX + tx * CELL + CELL / 2, OFFSETY + ty * CELL + CELL / 2, mr);
                ctx.globalAlpha = 1;
            }
        }


        // COINS
        sh = 2;
        s = 9;
        coinRotation = (coinRotation + 0.1) % (2 * Math.PI);

        for (var i = 0; i < levelgrid.coins.length; i++) {
            var coin = levelgrid.coins[i];
            var rx = OFFSETX + coin.x * CELL;
            var ry = OFFSETY + coin.y * CELL;


            ctx.save();
            ctx.translate(rx + CELL / 2 + sh, ry + CELL / 2 + sh);
            ctx.rotate(coinRotation);

            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "black";
            ctx.fillRect(-CELL / 2 + s, -CELL / 2 + s, CELL - 2 * s, CELL - 2 * s);
            ctx.globalAlpha = 1;

            ctx.restore();


            ctx.save();
            ctx.translate(rx + CELL / 2, ry + CELL / 2);
            ctx.rotate(coinRotation);

            if (OUTLINE) {
                ctx.fillStyle = "black";
                ctx.fillRect(-CELL / 2 + s - 1, -CELL / 2 + s - 1, CELL - 2 * s + 2, CELL - 2 * s + 2);
            }

            ctx.fillStyle = "rgb(230, 210, 20)";
            ctx.fillRect(-CELL / 2 + s, -CELL / 2 + s, CELL - 2 * s, CELL - 2 * s);

            ctx.restore();
        }


        // HOLE
        if (!levelmenu) {
            var hx = levelgrid.hole.x;
            var hy = levelgrid.hole.y;

            var rh = holeTween.get();

            ctx.fillStyle = "rgb(50, 50, 50)";
            //fillCircle(OFFSETX + hx * CELL + CELL / 2, OFFSETY + hy * CELL + CELL / 2, CELL / 2.2 + rh);

            ctx.fillStyle = "rgb(30, 30, 30)";
            fillCircle(OFFSETX + hx * CELL + CELL / 2, OFFSETY + hy * CELL + CELL / 2, CELL / 2.2 + rh);

            ctx.fillStyle = "rgb(0, 0, 0)";
            fillCircle(OFFSETX + hx * CELL + CELL / 2, OFFSETY + hy * CELL + CELL / 2, CELL / 3.5 + rh);

            if (helpmenu) {
                ctx.fillStyle = "rgb(30, 30, 30)";
                fillCircle(OFFSETX + 17 * CELL + CELL / 2, OFFSETY + 1 * CELL + CELL / 2, CELL / 2.2);

                ctx.fillStyle = "rgb(0, 0, 0)";
                fillCircle(OFFSETX + 17 * CELL + CELL / 2, OFFSETY + 1 * CELL + CELL / 2, CELL / 3.5);
            }
        }


        // PLANKS
        s = 0;

        if (levelgrid.coins.length === 0) {
            plankDelta -= 2;
        }
        else if (plankDelta <= 0) {
            plankDelta = CELL / 2;
        }

        if (plankDelta > 0) {
            var ppd = CELL / 2 - plankDelta;

            var nn = 4;
            var pn = (CELL - 2 * s) / nn;

            ctx.fillStyle = "rgb(100, 70, 0)";
            ctx.fillRect(OFFSETX + hx * CELL + s + ppd, OFFSETY + hy * CELL + s + 0.75 * pn, CELL - 2 * s - 2 * ppd, pn);

            ctx.fillStyle = "rgb(120, 90, 20)";
            ctx.fillRect(OFFSETX + hx * CELL + s + ppd, OFFSETY + hy * CELL + s + 2.25 * pn, CELL - 2 * s - 2 * ppd, pn);

            ctx.fillStyle = "black";
            fillCircle(OFFSETX + hx * CELL + s + ppd + 3, OFFSETY + hy * CELL + s + 0.75 * pn + 3, 1);
            fillCircle(OFFSETX + hx * CELL + s + ppd + 3, OFFSETY + hy * CELL + s + 2.25 * pn + 6, 1);
            fillCircle(OFFSETX + hx * CELL - s - ppd - 3 + CELL, OFFSETY + hy * CELL + s + 0.75 * pn + 3, 1);
            fillCircle(OFFSETX + hx * CELL - s - ppd - 3 + CELL, OFFSETY + hy * CELL + s + 2.25 * pn + 6, 1);
        }


        // BLOCKS
        sh = 4;
        s = 4;

        for (var i = 0; i < levelgrid.blocks.length; i++) {
            var block = levelgrid.blocks[i];

            var twx = 0;
            var twy = 0;

            if (block === tweenBlock) {
                twx = blockTweenX.get();
                twy = blockTweenY.get();
            }

            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "black";
            ctx.fillRect(OFFSETX + block.realX + s + sh + twx, OFFSETY + block.realY + s + sh + twy, CELL - 2 * s - 2 * twx, CELL - 2 * s - 2 * twy);
            ctx.globalAlpha = 1;


            var bln = 2;

            ctx.fillStyle = "rgb(68, 132, 228)";
            ctx.fillRect(OFFSETX + block.realX + s + twx - bln, OFFSETY + block.realY + s + twy - bln, CELL - 2 * s - 2 * twx + 2 * bln, CELL - 2 * s - 2 * twy + 2 * bln);

            bln = -2;

            ctx.globalAlpha = 0.2;
            ctx.fillStyle = "black";
            ctx.fillRect(OFFSETX + block.realX + s + twx - bln, OFFSETY + block.realY + s + twy - bln, CELL - 2 * s - 2 * twx + 2 * bln, CELL - 2 * s - 2 * twy + 2 * bln);
            ctx.globalAlpha = 1;
        }

        if (fading) {
            if (fadein < 1.5) {
                fadein += 0.1 * (restarting ? 1 : 1.5);
            } else {
                if (fadingEvent) {
                    fadingEvent();
                }
                fading = false;
            }
        }

        if (completed) {
            if (completeDelta < 1) {
                completeDelta += 0.02;
            }
            else if (!restarting) {

                restarting = true;
                fading = true;
                fadingEvent = function () {
                    var uc = getUnlockedCount();
                    var firstAll = false;

                    if (!unlocked[levelnumber]) {
                        unlocked[levelnumber] = true;
                        uc += 1;
                        firstAll = uc === 40;
                    }

                    if (uc < 40) {
                        if (levelnumber < 39) {
                            levelnumber += 1;
                        } else {
                            for (var i = 0; i < 40; i++) {
                                if (!unlocked[i]) {
                                    levelnumber = i;
                                    break;
                                }
                            }
                        }
                    } else {
                        if (firstAll || levelnumber === 39) {
                            levelnumber = END_LEVEL;
                        } else {
                            levelnumber += 1;
                        }
                    }

                    var wasMusic = MUSIC;
                    if (MUSIC) {
                        game.pauseMusic("mus_play");
                    }
                    MUSIC = false;
                    // TMG_showAd(function () {
                    //     MUSIC = wasMusic;
                    //     if (MUSIC) {
                    //         game.playMusic("mus_play", true);
                    //     }
                    //     //gotoLevel(levelnumber);
                    // });
                    console.log("请求插屏广告");

                    // 展示插屏广告
                    HUHU_showInterstitialAd();
                
                    // 继续游戏
                    MUSIC = wasMusic;
                    if (MUSIC) {
                        game.playMusic("mus_play", true);
                    }
                    gotoLevel(levelnumber);
                };
            }
        } else if (!fading) {
            if (fadein > 0) {
                fadein -= 0.05 * (restarting ? 1 : 1.5);
            } else {
                restarting = false;
            }
        }


        // OTHER STUFF

        if (levelnumber === END_LEVEL) {
            ctx.font = "64px fnt_game, sans-serif";

            ctx.fillStyle = "black";
            ctx.globalAlpha = 0.2;
            ctx.fillText("Congratulations!", ctx.canvas.width / 2 + 4, 100 + 4);
            ctx.fillText("Thank you for playing!", ctx.canvas.width / 2 + 4, 370 + 4);
            ctx.globalAlpha = 1;

            ctx.fillStyle = "white";
            ctx.fillText("Congratulations!", ctx.canvas.width / 2, 100);
            ctx.fillText("Thank you for playing!", ctx.canvas.width / 2, 370);
        }
    }
});

game.addObject("obj_rotator", {
    create: function () {
        this.depth = 1;
        this.tween = new Tween(0.8, 10);
        this.rotation = 0;
        this.rotating = false;

        this.maxtimer = 150;
        this.timer = this.maxtimer;
    },

    update: function () {
        if (helpmenu) {
            this.timer -= 1;

            if (this.timer < 0) {
                this.tween.set(5);
                this.rotating = true;
                this.timer = this.maxtimer;
            }
        }

        if (this.rotating) {
            this.rotation += 10;

            if (this.rotation >= 90) {
                this.rotating = false;
                this.rotation = 0;
            }
        }

        var s = 2;
        ctx.lineWidth = 4;

        var rx = OFFSETX + this.x * CELL;
        var ry = OFFSETY + this.y * CELL;

        var rtw = this.tween.get() * 1;

        ctx.save();
        ctx.translate(rx + CELL / 2, ry + CELL / 2);
        ctx.rotate(this.rotation * Math.PI / 180);

        if (OUTLINE) {
            ctx.fillStyle = "black";
            fillTriangle(-CELL / 2 + s - sh, 0, 0, -CELL / 2 + s - sh, CELL / 2 - s + sh, 0);
            fillTriangle(-CELL / 2 + s - sh, 0, 0, CELL / 2 - s + sh, CELL / 2 - s + sh, 0);
        }

        ctx.fillStyle = "rgb(240, 220, 0)";
        fillTriangle(-CELL / 2 + s - rtw, 0, 0, -CELL / 2 + s - rtw, CELL / 2 - s + rtw, 0);
        fillTriangle(-CELL / 2 + s - rtw, 0, 0, CELL / 2 - s + rtw, CELL / 2 - s + rtw, 0);

        var sl = 6;
        rtw *= 1.5;

        ctx.strokeStyle = "rgb(180, 160, 60)";
        drawLine(-sl - rtw, 0, sl + rtw, 0);
        drawLine(0, -sl - rtw, 0, sl + rtw);

        ctx.restore();
    }
});

game.addObject("obj_coinsplash", {
    create: function () {
        this.depth = -2;
        this.rotation = coinRotation;
        this.maxtime = 20;
        this.time = this.maxtime;
    },

    update: function () {
        var s = 9 - (1 - this.time / this.maxtime) * 2;

        ctx.save();
        ctx.translate(OFFSETX + this.x * CELL + CELL / 2, OFFSETY + this.y * CELL + CELL / 2);
        ctx.rotate(this.rotation);

        ctx.globalAlpha = this.time / this.maxtime;
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgb(230, 210, 20)";
        ctx.strokeRect(-CELL / 2 + s, -CELL / 2 + s, CELL - 2 * s, CELL - 2 * s);
        ctx.globalAlpha = 1;

        ctx.restore();

        this.time -= 1.5;
        if (this.time <= 0) {
            game.destroyInstance(this);
        }
    }
});

game.addObject("obj_player", {
    create: function () {
        this.depth = -1;
        this.speed = 8 + 1;
        this.tween = new Tween(0.8, 10);
        this.steps = 0;
        this.out = false;
        this.outr = 0;
    },

    update: function () {

        if (levelmenu) {
            return;
        }

        if (this.out) {
            if (this.outr < 0) {
                this.outr += 0.04;
            } else {
                this.out = false;
            }
        } else {
            if (this.outr > -2) {
                this.outr -= 0.04;
            } else {
                this.out = true;
            }
        }

        if (moving) {
            this.outr = 0;
            this.out = false;
        }

        var sh = 2;
        var s = 5;
        var rr = CELL / 2 - s + this.tween.get() - (completed ? completeDelta * CELL / 2 : 0);

        rr = Math.max(0, rr + this.outr);

        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "black";
        fillCircle(OFFSETX + this.x + CELL / 2 + sh, OFFSETY + this.y + CELL / 2 + sh, rr);
        ctx.globalAlpha = 1;


        ctx.save();
        ctx.translate(OFFSETX + this.x + CELL / 2, OFFSETY + this.y + CELL / 2);
        //ctx.rotate((-rotation*0-turndir) * Math.PI / 180);

        //ctx.fillStyle = "black";
        //fillCircle(0, 0, rr + 2);

        ctx.fillStyle = "rgb(200, 20, 20)";
        fillCircle(0, 0, rr);

        //ctx.strokeStyle = "rgb(170, 20, 20)";
        //ctx.lineWidth = 2;
        //drawLine(0, 0, rr - 1, 0);
        //*/

        ctx.restore();

        if (completed || fading) {
            return;
        }

        if (turning) {
            if (Math.abs(turndir - direction) < 0.1) {
                turning = false;
            } else {
                if ((direction - turndir + 360) % 360 > 180) {
                    turndir -= 15;
                } else {
                    turndir += 15;
                }
                turndir = (turndir + 360) % 360;
                turndir = direction; // TODO
            }
        }
        else if (moving) {
            var dx = direction === 0 ? 1 : (direction === 180 ? -1 : 0);
            var dy = direction === 270 ? 1 : (direction === 90 ? -1 : 0);
            var cellX = Math.floor(this.x / CELL);
            var cellY = Math.floor(this.y / CELL);

            if (this.x === cellX * CELL && this.y === cellY * CELL) {
                currentBlock = null;

                if (levelgrid.hole.x === cellX && levelgrid.hole.y === cellY && levelgrid.coins.length === 0) {
                    // completed the level
                    completed = true;
                    moving = false;
                    holeTween.set(3);

                    if (SOUND) {
                        game.playSound("snd_finish");
                    }
                }

                if (true) {
                    var done = false;

                    if (levelgrid.teleports) {
                        if (levelgrid.teleport1.x === cellX && levelgrid.teleport1.y === cellY) {
                            this.x = levelgrid.teleport2.x * CELL;
                            this.y = levelgrid.teleport2.y * CELL;
                            cellX = Math.floor(this.x / CELL);
                            cellY = Math.floor(this.y / CELL);
                            teleportFlash = 1;
                            teleportTween.set(5);
                            done = true;

                            if (SOUND) game.playSound("snd_teleport");
                        }
                        else if (levelgrid.teleport2.x === cellX && levelgrid.teleport2.y === cellY) {
                            this.x = levelgrid.teleport1.x * CELL;
                            this.y = levelgrid.teleport1.y * CELL;
                            cellX = Math.floor(this.x / CELL);
                            cellY = Math.floor(this.y / CELL);
                            teleportFlash = 1;
                            teleportTween.set(5);
                            done = true;

                            if (SOUND) game.playSound("snd_teleport");
                        }
                    }

                    if (!done) {
                        var icoin = -1;

                        for (var i = 0; i < levelgrid.coins.length; i++) {
                            var coin = levelgrid.coins[i];

                            if (coin.x === cellX && coin.y === cellY) {
                                game.createInstance("obj_coinsplash", coin.x, coin.y);
                                if (SOUND) game.playSound("snd_coin");
                                icoin = i;
                                break;
                            }
                        }

                        if (icoin >= 0) {
                            levelgrid.coins.splice(icoin, 1);
                        }
                    }

                    if (!done) {
                        for (var i = 0; i < rotators.length; i++) {
                            var rotator = rotators[i];

                            if (rotator.x === cellX && rotator.y === cellY) {
                                /*if (currentRotator === rotator) {
                                    currentRotator = null;
                                    done = true;
                                } else {*/
                                rotator.tween.set(5);
                                rotator.rotating = true;
                                //tweenRotator = rotator;
                                //currentRotator = rotator;
                                //moving = false;
                                direction = (direction + 90) % 360;
                                turndir = direction;
                                dx = direction === 0 ? 1 : (direction === 180 ? -1 : 0);
                                dy = direction === 270 ? 1 : (direction === 90 ? -1 : 0);
                                //rotating = true;
                                done = true;

                                if (SOUND) game.playSound("snd_rotator");
                                //}
                                break;
                            }
                        }
                    }

                    if (!done && (cellY + dy >= HEIGHT || levelgrid.get(cellX + dx, cellY + dy))) {
                        if (this.steps > 0) {
                            if (SOUND && !completed) game.playSound("snd_touch");
                        }

                        this.tween.set(Math.min(this.steps, 4));
                        moving = false;
                        done = true;
                    }

                    for (var i = 0; i < levelgrid.blocks.length; i++) {
                        var block = levelgrid.blocks[i];

                        if (block.x === cellX + dx && block.y === cellY + dy) {
                            var bicoin = -1;

                            for (var i = 0; i < levelgrid.coins.length; i++) {
                                var coin = levelgrid.coins[i];

                                if (coin.x === block.x && coin.y === block.y) {
                                    game.createInstance("obj_coinsplash", coin.x, coin.y);
                                    if (SOUND) game.playSound("snd_coin");
                                    bicoin = i;
                                    break;
                                }
                            }

                            if (bicoin >= 0) {
                                levelgrid.coins.splice(bicoin, 1);
                            }

                            var another = false;

                            for (var j = 0; j < levelgrid.blocks.length; j++) {
                                var other = levelgrid.blocks[j];

                                if (other.x === block.x + dx && other.y === block.y + dy) {
                                    another = true;
                                    break;
                                }
                            }

                            if (block.y + dy >= HEIGHT || levelgrid.get(block.x + dx, block.y + dy) || another) {
                                if (this.steps > 0) {
                                    if (SOUND && !completed) game.playSound("snd_touch");
                                }

                                if (dx) {
                                    blockTweenX.set(Math.min(this.steps, 4));
                                } else {
                                    blockTweenY.set(Math.min(this.steps, 4));
                                }
                                tweenBlock = block;
                                this.tween.set(Math.min(this.steps, 4));
                                moving = false;
                            } else {
                                currentBlock = block;
                            }

                            break;
                        }
                    }
                }

                this.steps += 1;
            }

            if (moving) {
                if (startedMoving) {
                    this.x += dx * this.speed;
                    this.y += dy * this.speed;
                    mouseActive = false;
                    mouseMoving = true;

                    if (currentBlock) {
                        currentBlock.realX += dx * this.speed;
                        currentBlock.realY += dy * this.speed;
                        currentBlock.x = Math.floor(currentBlock.realX / CELL);
                        currentBlock.y = Math.floor(currentBlock.realY / CELL);
                    }
                } else {
                    if (currentBlock) {
                        moving = false;
                        currentBlock = false;
                    } else {
                        this.x += dx * this.speed;
                        this.y += dy * this.speed;
                        mouseActive = false;
                        mouseMoving = true;
                        startedMoving = true;
                    }
                }
            } else {
                startedMoving = false;
            }

        } else {
            var l = false;
            var r = false;
            var u = false;
            var d = false;

            if (game.keyboardDown("ArrowLeft") || game.keyboardDown("q") || game.keyboardDown("a")) {
                l = true;
            }

            if (game.keyboardDown("ArrowRight") || game.keyboardDown("d")) {
                r = true;
            }

            if (game.keyboardDown("ArrowUp") || game.keyboardDown("w") || game.keyboardDown("z")) {
                u = true;
            }

            if (game.keyboardDown("ArrowDown") || game.keyboardDown("s")) {
                d = true;
            }

            var mcoll = isInBox(game.mouseX, game.mouseY, OFFSETX + this.x, OFFSETY + this.y, CELL, CELL);

            var mdx = game.mouseX - prevMouseX;
            var mdy = game.mouseY - prevMouseY;
            var mdist = Math.sqrt(mdx * mdx + mdy * mdy);

            if (mouseActive && mdist > 5) {
                var mdir = -Math.atan2(mdy, mdx) * 180 / Math.PI;
                mdir = (mdir + 360) % 360;

                if (315 < mdir || mdir <= 45) {
                    r = true;
                }
                else if (mdir <= 135) {
                    u = true;
                }
                else if (mdir <= 225) {
                    l = true;
                }
                else {
                    d = true;
                }

                mouseSwiped = true;
            }

            //if (game.mouseDown("Left") && mcoll) {
            if (game.mousePressed("Left")) {
                mouseActive = true;
            }

            if (game.mouseReleased("Left")) {
                if (!mouseSwiped && game.mouseY < 470) {
                    var mdir = -Math.atan2(game.mouseY - (OFFSETY + this.y + CELL / 2), game.mouseX - (OFFSETX + this.x + CELL / 2)) * 180 / Math.PI;
                    mdir = (mdir + 360) % 360;

                    if (315 < mdir || mdir <= 45) {
                        r = true;
                    }
                    else if (mdir <= 135) {
                        u = true;
                    }
                    else if (mdir <= 225) {
                        l = true;
                    }
                    else {
                        d = true;
                    }
                }
                mouseSwiped = false;
            }

            if (l) {
                moving = true;
                turning = true;
                direction = 180;
            }

            if (r) {
                moving = true;
                turning = true;
                direction = 0;
            }

            if (u) {
                moving = true;
                turning = true;
                direction = 90;
            }

            if (d) {
                moving = true;
                turning = true;
                direction = 270;
            }

            if (moving) {
                this.steps = 0;
            }
        }

        if (!game.mouseDown("Left")) {
            mouseActive = false;
            mouseMoving = false;
        }
    }
});

game.addObject("obj_foreground", {
    create: function () {
        this.depth = -1000;
    },

    update: function () {

        if (levelmenu) {
            updateLevelMenu();
        }
        else if (helpmenu) {
            updateHelpMenu();
        }
        else {
            updateGameMenu();
        }

        if (fadein > 0) {
            if (restarting && !helpmenu && !levelmenu) {
                var s = Math.max(-1000, Math.min(Math.max((1 - fadein) * CELL / 2), CELL / 2));

                ctx.fillStyle = WALLCOL;
                ctx.globalAlpha = Math.min(1, fadein * 1.5);

                for (var i = 0; i < WIDTH * HEIGHT; i++) {
                    var ix = i % WIDTH;
                    var iy = Math.floor(i / WIDTH);

                    var ts = s;

                    ctx.fillRect(OFFSETX + ix * CELL + ts, OFFSETY + iy * CELL + ts, CELL - 2 * ts, CELL - 2 * ts);
                }

                //ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.globalAlpha = 1;
            } else {
                ctx.fillStyle = WALLCOL;
                ctx.globalAlpha = Math.min(1, fadein);

                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                ctx.globalAlpha = 1;
            }
        }

        ctx.fillStyle = boxgrad;
        ctx.globalAlpha = 0.1;
        //ctx.fillRect(OFFSETX, OFFSETY, WIDTH * CELL, HEIGHT * CELL);
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 1;

        prevMouseX = game.mouseX;
        prevMouseY = game.mouseY;
    }
});

game.addScene("scn_level", {
    enter: function () {
        game.createInstance("obj_foreground");
        game.createInstance("obj_background");
        controller = game.createInstance("obj_levelcontroller");
        gotoLevel(MENU_LEVEL);
    }
});

function updateGameMenu() {
    var xmusic = 30;
    var ymusic = ctx.canvas.height - 60;
    var xsound = 90;
    var ysound = ctx.canvas.height - 60;
    var xinfo = 150;
    var yinfo = ctx.canvas.height - 60;
    var xrestart = ctx.canvas.width - 140;
    var yrestart = ctx.canvas.height - 60;
    var xarrow = ctx.canvas.width - 80;
    var yarrow = ctx.canvas.height - 70;

    var res = 4;

    var hovermusic = mouseInBox(xmusic, ymusic, 32 + res, 32 + res);
    var hoversound = mouseInBox(xsound, ysound, 32 + res, 32 + res);
    var hoverinfo = mouseInBox(xinfo, yinfo, 32 + res, 32 + res);
    var hoverrestart = mouseInBox(xrestart, yrestart, 29 + res, 29 + res);
    var hoverarrow = mouseInBox(xarrow, yarrow, 48 + res, 48 + res);

    var musicres = hovermusic ? res : 0;
    var soundres = hoversound ? res : 0;
    var infores = hoverinfo ? res : 0;
    var restartres = hoverrestart ? res : 0;
    var arrowres = hoverarrow ? 2 * res : 0;

    xmusic -= hovermusic ? musicres / 2 : 0;
    ymusic -= hovermusic ? musicres / 2 : 0;
    xsound -= hoversound ? soundres / 2 : 0;
    ysound -= hoversound ? soundres / 2 : 0;
    xinfo -= hoverinfo ? infores / 2 : 0;
    yinfo -= hoverinfo ? infores / 2 : 0;
    xrestart -= hoverrestart ? restartres / 2 : 0;
    yrestart -= hoverrestart ? restartres / 2 : 0;
    xarrow -= hoverarrow ? arrowres / 2 : 0;
    yarrow -= hoverarrow ? arrowres / 2 : 0;

    ctx.font = "40px fnt_game, sans-serif";

    var showIcons = levelnumber < END_LEVEL;
    var lvl = (levelnumber + 1);

    if (showIcons) {
        var uxx = ctx.canvas.width - 68;
        var uyy = 50;
        ctx.globalAlpha = 0.2;
        ctx.fillStyle = "black";
        ctx.fillText((lvl < 10 ? "0" : "") + lvl, uxx + 2, uyy + 2);//ctx.canvas.width / 2 + 2, 40);//ctx.canvas.height - 45 + 2);
        ctx.globalAlpha = 1;

        ctx.fillStyle = "white";
        ctx.fillText((lvl < 10 ? "0" : "") + lvl, uxx, uyy);//ctx.canvas.height - 45);
    }

    ctx.globalAlpha = 0.2;
    if (showIcons) {
        ctx.drawImage(game.getImage("img_music_" + (MUSIC ? "on" : "off") + "_dark"), xmusic + 2, ymusic + 2, 32 + musicres, 32 + musicres);
        ctx.drawImage(game.getImage("img_sound_" + (SOUND ? "on" : "off") + "_dark"), xsound + 2, ysound + 2, 32 + soundres, 32 + soundres);
        ctx.drawImage(game.getImage("img_info_dark"), xinfo + 2, yinfo + 2, 32 + infores, 32 + infores);
        ctx.drawImage(game.getImage("img_restart_dark"), xrestart + 2, yrestart + 2, 29 + restartres, 29 + restartres);
    }
    ctx.drawImage(game.getImage("img_arrow_dark"), xarrow + 2, yarrow + 2, 48 + arrowres, 48 + arrowres);
    ctx.globalAlpha = 1;

    if (showIcons) {
        ctx.drawImage(game.getImage("img_music_" + (MUSIC ? "on" : "off")), xmusic, ymusic, 32 + musicres, 32 + musicres);
        ctx.drawImage(game.getImage("img_sound_" + (SOUND ? "on" : "off")), xsound, ysound, 32 + soundres, 32 + soundres);
        ctx.drawImage(game.getImage("img_info"), xinfo, yinfo, 32 + infores, 32 + infores);
        ctx.drawImage(game.getImage("img_restart"), xrestart, yrestart, 29 + restartres, 29 + restartres);
    }
    ctx.drawImage(game.getImage("img_arrow"), xarrow, yarrow, 48 + arrowres, 48 + arrowres);

    if (game.keyboardPressed("m")) {
        MUSIC = !MUSIC;
        if (SOUND) game.playSound("snd_click");

        if (MUSIC) {
            game.playMusic("mus_play", true);
        } else {
            game.pauseMusic("mus_play");
        }

        if (hasLocalStorage) localStorage.setItem("music", MUSIC ? "on" : "off");
    }

    if (game.keyboardPressed("k")) {
        SOUND = !SOUND;
        if (SOUND) game.playSound("snd_click");
        if (hasLocalStorage) localStorage.setItem("sounds", SOUND ? "on" : "off");
    }

    if (game.keyboardPressed("h")) {
        if (SOUND) game.playSound("snd_click");
        fading = true;
        fadingEvent = function () {
            gotoLevel(HELP_LEVEL);
        };
    }

    if (game.keyboardPressed("r")) {
        if (SOUND) game.playSound("snd_click");
        restarting = true;
        fading = true;
        fadingEvent = function () {
            gotoLevel(levelnumber);

            var wasMusic = MUSIC;
            if (MUSIC) {
                game.pauseMusic("mus_play");
            }
            MUSIC = false;
            TMG_showAd(function () {
                MUSIC = wasMusic;
                if (MUSIC) {
                    game.playMusic("mus_play", true);
                }
                //gotoLevel(m - 1);
            });
        };
    }

    if (game.keyboardPressed("Escape") || game.keyboardPressed("Backspace")) {
        if (SOUND) game.playSound("snd_click");
        fading = true;
        fadingEvent = function () {
            gotoLevel(MENU_LEVEL);

            var wasMusic = MUSIC;
            if (MUSIC) {
                game.pauseMusic("mus_play");
            }
            MUSIC = false;
            TMG_showAd(function () {
                MUSIC = wasMusic;
                if (MUSIC) {
                    game.playMusic("mus_play", true);
                }
                //gotoLevel(m - 1);
            });
        };
    }

    if (game.mousePressed("Left")) {
        if (showIcons) {
            if (hovermusic) {
                MUSIC = !MUSIC;
                if (SOUND) game.playSound("snd_click");

                if (MUSIC) {
                    game.playMusic("mus_play", true);
                } else {
                    game.pauseMusic("mus_play");
                }

                if (hasLocalStorage) localStorage.setItem("music", MUSIC ? "on" : "off");
            }

            if (hoversound) {
                SOUND = !SOUND;
                if (SOUND) game.playSound("snd_click");
                if (hasLocalStorage) localStorage.setItem("sounds", SOUND ? "on" : "off");
            }

            if (hoverinfo) {
                if (SOUND) game.playSound("snd_click");
                fading = true;
                fadingEvent = function () {
                    gotoLevel(HELP_LEVEL);
                };
            }

            if (hoverrestart) {
                if (SOUND) game.playSound("snd_click");
                restarting = true;
                fading = true;
                fadingEvent = function () {
                    gotoLevel(levelnumber);

                    var wasMusic = MUSIC;
                    if (MUSIC) {
                        game.pauseMusic("mus_play");
                    }
                    MUSIC = false;
                    // TMG_showAd(function () {
                    //     MUSIC = wasMusic;
                    //     if (MUSIC) {
                    //         game.playMusic("mus_play", true);
                    //     }
                    //     //gotoLevel(levelnumber);
                    // });
                    console.log("请求插屏广告");

                    // 展示插屏广告
                    HUHU_showInterstitialAd();
                
                    // 继续游戏
                    MUSIC = wasMusic;
                    if (MUSIC) {
                        game.playMusic("mus_play", true);
                    }
                };
            }
        }

        if (hoverarrow) {
            if (SOUND) game.playSound("snd_click");
            fading = true;
            fadingEvent = function () {
                gotoLevel(MENU_LEVEL);

                var wasMusic = MUSIC;
                if (MUSIC) {
                    game.pauseMusic("mus_play");
                }
                MUSIC = false;
                // TMG_showAd(function () {
                //     MUSIC = wasMusic;
                //     if (MUSIC) {
                //         game.playMusic("mus_play", true);
                //     }
                //     //gotoLevel(MENU_LEVEL);
                // });
                console.log("请求插屏广告");

                // 展示插屏广告
                HUHU_showInterstitialAd();
            
                // 继续游戏
                MUSIC = wasMusic;
                if (MUSIC) {
                    game.playMusic("mus_play", true);
                }
            };
        }
    }

    //armorGames.drawImageClickable("fb_white", canvas.width - 140, 25, 0.5, game.mouseX, game.mouseY, game.mousePressed("Left"), false);
    //armorGames.drawImageClickable("hor_white", 65 - 20, 15, 0.4, game.mouseX, game.mouseY, game.mousePressed("Left"), false);

    //addictingGames.drawImageClickable("tab_hor", ctx.canvas.width / 2 - 160, ctx.canvas.height - 110, 0.5, game.mouseX, game.mouseY, game.mousePressed("Left"), false);

    // ingame
    TMG_drawImageClickable("tmg_logo1", ctx.canvas.width / 2 - 150, ctx.canvas.height - 65, 0.4, game.mouseX, game.mouseY, game.mousePressed("Left"), false);
}

var helptext = [
    "Control this sliding thing to reach the hole",
    "A rotator makes the sliding thing turn 90 degrees clockwise.",
    "A portal teleports the sliding thing to the other portal.",
    "A block can be pushed when the sliding thing is moving.",
    "Collect all coins to open the sealed hole",
    "",//"Game by Diamonax",
    "Music by Kevin MacLeod (\"Miami Viceroy\")"
];

function updateHelpMenu() {
    var x = 210;
    var y = 90;
    var ox = 2;
    var oy = 2;

    ctx.textAlign = "left";
    ctx.font = "18px fnt_game, sans-serif";

    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.2;
    ctx.fillText(helptext[0], x + ox, y + oy);
    ctx.fillText(helptext[1], x + ox, y + oy + CELL * 2);
    ctx.fillText(helptext[2], x + ox, y + oy + CELL * 4);
    ctx.fillText(helptext[3], x + ox, y + oy + CELL * 6);
    ctx.fillText(helptext[4], x + ox, y + oy + CELL * 8);

    ctx.fillText(helptext[5], 30 + ox, ctx.canvas.height - 60 + oy);
    ctx.fillText(helptext[6], 30 + ox, ctx.canvas.height - 30 + oy);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "white";
    ctx.fillText(helptext[0], x, y);
    ctx.fillText(helptext[1], x, y + CELL * 2);
    ctx.fillText(helptext[2], x, y + CELL * 4);
    ctx.fillText(helptext[3], x, y + CELL * 6);
    ctx.fillText(helptext[4], x, y + CELL * 8);

    ctx.fillStyle = "rgb(220, 160, 120)"; //"rgb(200, 180, 100)";
    ctx.fillText(helptext[5], 30, ctx.canvas.height - 60);
    ctx.fillText(helptext[6], 30, ctx.canvas.height - 30);

    ctx.textAlign = "center";


    var xarrow = ctx.canvas.width - 80;
    var yarrow = ctx.canvas.height - 70;

    var res = 4;
    var hoverarrow = mouseInBox(xarrow, yarrow, 48 + res, 48 + res);
    var arrowres = hoverarrow ? 2 * res : 0;

    xarrow -= hoverarrow ? arrowres / 2 : 0;
    yarrow -= hoverarrow ? arrowres / 2 : 0;

    ctx.globalAlpha = 0.2;
    ctx.drawImage(game.getImage("img_arrow_dark"), xarrow + 2, yarrow + 2, 48 + arrowres, 48 + arrowres);
    ctx.globalAlpha = 1;

    ctx.drawImage(game.getImage("img_arrow"), xarrow, yarrow, 48 + arrowres, 48 + arrowres);

    if (game.keyboardPressed("m")) {
        MUSIC = !MUSIC;
        if (SOUND) game.playSound("snd_click");

        if (MUSIC) {
            game.playMusic("mus_play", true);
        } else {
            game.pauseMusic("mus_play");
        }

        if (hasLocalStorage) localStorage.setItem("music", MUSIC ? "on" : "off");
    }

    if (game.keyboardPressed("k")) {
        SOUND = !SOUND;
        if (SOUND) game.playSound("snd_click");
        if (hasLocalStorage) localStorage.setItem("sounds", SOUND ? "on" : "off");
    }

    if (game.keyboardPressed("Escape") || game.keyboardPressed("Backspace")) {
        if (SOUND) game.playSound("snd_click");
        fading = true;
        fadingEvent = function () {
            //gotoLevel(MENU_LEVEL);
            gotoLevel(prevlevel);
        };
    }

    if (game.mousePressed("Left") && hoverarrow) {
        if (SOUND) game.playSound("snd_click");
        fading = true;
        fadingEvent = function () {
            gotoLevel(prevlevel);
        };
    }

    //addictingGames.drawImageClickable("logo", ctx.canvas.width / 2 + 90, ctx.canvas.height - 80, 0.4, game.mouseX, game.mouseY, game.mousePressed("Left"), false);

    // helpmenu
    TMG_drawImageClickable("tmg_logo3", ctx.canvas.width / 2 + 70, ctx.canvas.height - 95, 1.0, game.mouseX, game.mouseY, game.mousePressed("Left"), false);
}

function updateLevelMenu() {
    var st = Math.floor(CELL / 3);
    var n = 1;
    var m = 1;

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 8; j++) {
            var x = OFFSETX + 2.6 * CELL + 2.2 * j * CELL;
            var y = OFFSETY + CELL + 2 * i * CELL;

            drawLevelButton(n, x, y, selx === j && sely === i, levelStates[n - 1]);

            if (mouseInBox(x - st, y - st, CELL + 2 * st, CELL + 2 * st)) {
                if (game.mouseX !== prevMouseX || game.mouseY !== prevMouseY) {
                    selx = j;
                    sely = i;
                }

                if (game.mousePressed("Left") && !fading) {
                    if (levelStates[n - 1] > 0) {
                        if (SOUND) game.playSound("snd_click");
                        m = n;
                        fading = true;
                        fadingEvent = function () {
                            //TMG_showAd(function () {
                            gotoLevel(m - 1);
                            //});

                            var wasMusic = MUSIC;
                            if (MUSIC) {
                                game.pauseMusic("mus_play");
                            }
                            MUSIC = false;

                            // TMG_showAd(function () {
                            //     MUSIC = wasMusic;
                            //     if (MUSIC) {
                            //         game.playMusic("mus_play", true);
                            //     }
                            //     //gotoLevel(m - 1);
                            // });
                            console.log("请求插屏广告");

                            // 展示插屏广告
                            HUHU_showInterstitialAd();
                        
                            // 继续游戏
                            MUSIC = wasMusic;
                            if (MUSIC) {
                                game.playMusic("mus_play", true);
                            }
                            return;
                        };
                    } else {
                        if (SOUND) game.playSound("snd_error");
                    }
                }
            }

            n += 1;
        }
    }

    var mm = selx + sely * 8;

    if (game.keyboardPressed("Enter") && !fading) {
        if (levelStates[mm] > 0) {
            if (SOUND) game.playSound("snd_click");
            fading = true;
            fadingEvent = function () {
                //TMG_showAd(function () {
                gotoLevel(mm);
                //});

                var wasMusic = MUSIC;
                if (MUSIC) {
                    game.pauseMusic("mus_play");
                }
                MUSIC = false;
                TMG_showAd(function () {
                    MUSIC = wasMusic;
                    if (MUSIC) {
                        game.playMusic("mus_play", true);
                    }
                    //gotoLevel(m - 1);
                });
            };
        } else {
            if (SOUND) game.playSound("snd_error");
        }
    }

    var xmusic = 30 + 302;
    var ymusic = ctx.canvas.height - 60;
    var xsound = 90 + 302;
    var ysound = ctx.canvas.height - 60;
    var xinfo = 150 + 302;
    var yinfo = ctx.canvas.height - 60;

    var res = 4;

    var hovermusic = mouseInBox(xmusic, ymusic, 32 + res, 32 + res);
    var hoversound = mouseInBox(xsound, ysound, 32 + res, 32 + res);
    var hoverinfo = mouseInBox(xinfo, yinfo, 32 + res, 32 + res);

    var musicres = hovermusic ? res : 0;
    var soundres = hoversound ? res : 0;
    var infores = hoverinfo ? res : 0;

    xmusic -= hovermusic ? musicres / 2 : 0;
    ymusic -= hovermusic ? musicres / 2 : 0;
    xsound -= hoversound ? soundres / 2 : 0;
    ysound -= hoversound ? soundres / 2 : 0;
    xinfo -= hoverinfo ? infores / 2 : 0;
    yinfo -= hoverinfo ? infores / 2 : 0;

    ctx.globalAlpha = 0.2;
    ctx.drawImage(game.getImage("img_music_" + (MUSIC ? "on" : "off") + "_dark"), xmusic + 2, ymusic + 2, 32 + musicres, 32 + musicres);
    ctx.drawImage(game.getImage("img_sound_" + (SOUND ? "on" : "off") + "_dark"), xsound + 2, ysound + 2, 32 + soundres, 32 + soundres);
    ctx.drawImage(game.getImage("img_info_dark"), xinfo + 2, yinfo + 2, 32 + infores, 32 + infores);
    ctx.globalAlpha = 1;

    ctx.drawImage(game.getImage("img_music_" + (MUSIC ? "on" : "off")), xmusic, ymusic, 32 + musicres, 32 + musicres);
    ctx.drawImage(game.getImage("img_sound_" + (SOUND ? "on" : "off")), xsound, ysound, 32 + soundres, 32 + soundres);
    ctx.drawImage(game.getImage("img_info"), xinfo, yinfo, 32 + infores, 32 + infores);

    if (game.keyboardPressed("m")) {
        MUSIC = !MUSIC;
        if (SOUND) game.playSound("snd_click");

        if (MUSIC) {
            game.playMusic("mus_play", true);
        } else {
            game.pauseMusic("mus_play");
        }

        if (hasLocalStorage) localStorage.setItem("music", MUSIC ? "on" : "off");
    }

    if (game.keyboardPressed("k")) {
        SOUND = !SOUND;
        if (SOUND) game.playSound("snd_click");
        if (hasLocalStorage) localStorage.setItem("sounds", SOUND ? "on" : "off");
    }

    if (game.keyboardPressed("h")) {
        if (SOUND) game.playSound("snd_click");
        fading = true;
        fadingEvent = function () {
            gotoLevel(HELP_LEVEL);
        };
    }

    if (game.mousePressed("Left")) {
        if (hovermusic) {
            MUSIC = !MUSIC;
            if (SOUND) game.playSound("snd_click");

            if (MUSIC) {
                game.playMusic("mus_play", true);
            } else {
                game.pauseMusic("mus_play");
            }

            if (hasLocalStorage) localStorage.setItem("music", MUSIC ? "on" : "off");
        }

        if (hoversound) {
            SOUND = !SOUND;
            if (SOUND) game.playSound("snd_click");
            if (hasLocalStorage) localStorage.setItem("sounds", SOUND ? "on" : "off");
        }

        if (hoverinfo) {
            if (SOUND) game.playSound("snd_click");
            fading = true;
            fadingEvent = function () {
                gotoLevel(HELP_LEVEL);
            };
        }
    }

    if (game.keyboardPressed("ArrowRight") || game.keyboardPressed("d")) {
        selx = (selx + 1 + 8) % 8;
    }

    if (game.keyboardPressed("ArrowLeft") || game.keyboardPressed("q") || game.keyboardPressed("a")) {
        selx = (selx - 1 + 8) % 8;
    }

    if (game.keyboardPressed("ArrowDown") || game.keyboardPressed("s")) {
        sely = (sely + 1 + 5) % 5;
    }

    if (game.keyboardPressed("ArrowUp") || game.keyboardPressed("w") || game.keyboardPressed("z")) {
        sely = (sely - 1 + 5) % 5;
    }

    //addictingGames.drawImageClickable("logo", ctx.canvas.width / 2 + 200, ctx.canvas.height - 80, 0.4, game.mouseX, game.mouseY, game.mousePressed("Left"), false);

    // levelmenu
    TMG_drawImageClickable("tmg_logo3", ctx.canvas.width / 2 + 140, ctx.canvas.height - 100, 1.0, game.mouseX, game.mouseY, game.mousePressed("Left"), false);
}

function drawLevelButton(n, x, y, selected, state) {

    var bsel = buttonSelects[n - 1];
    var tween = buttonTweens[n - 1];

    if (selected && !bsel) {
        buttonSelects[n - 1] = true;
        tween.set(5);
    }
    if (!selected && bsel) {
        buttonSelects[n - 1] = false;
        tween.set(5);
    }

    var tw = tween.get();

    var t = selected ? 12 : 4;
    var s = 3 + t + (selected ? -tw : tw);

    var o = selected ? 5 : 3;

    var alpha = 1;


    // blend
    var uc = getUnlockedCount();
    var al = 4;
    var ml = 5;

    if (n <= uc + al) {
        alpha = 1;
    }

    if (uc + al < n && n <= uc + al + ml) {
        alpha = 1 - (n - uc - al) / ml;
    }

    if (uc + al + ml < n) {
        alpha = 0;
    }


    ctx.fillStyle = "black";
    ctx.globalAlpha = Math.max(0, alpha - 0.8);
    ctx.fillRect(x - s + o, y - s + o, CELL + 2 * s, CELL + 2 * s);
    ctx.globalAlpha = alpha;

    var ns = n;
    ctx.fillStyle = state === 2 ? "rgb(60, 180, 40)" : (state === 1 ? "rgb(180, 180, 20)" : "rgb(190, 50, 50)");
    ctx.fillRect(x - s, y - s, CELL + 2 * s, CELL + 2 * s);

    ctx.font = (selected ? 40 : 22) + "px fnt_game, sans-serif";
    ctx.fillStyle = "black";

    ctx.globalAlpha = Math.max(0, alpha - 0.8);
    ctx.fillText(ns, x + CELL / 2 + 2, y + CELL / 2 + 2 + 3);
    ctx.globalAlpha = alpha;

    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText(ns, x + CELL / 2, y + CELL / 2 + 3);
}

var banner;

window.addEventListener("load", function () {
    canvas.style.backgroundColor = "rgb(180, 100, 60)";
    /*
    banner = new Image();
    banner.src = "src/images/img_coolmathgamesbanner.png";
    banner.onload = function () { setTimeout(loadScreen, 11); };
    */

    loadScreen();
    // TMG_init("A-Sliding-Thing", function () {
    //     loadScreen();
    // });
    /*
    AG_startSession(function () {
        loadScreen();
    });
    */
});

function loadScreen() {
    if (hasLocalStorage) {
        if (localStorage.getItem("levels")) {
            try {
                var ll = JSON.parse(localStorage.getItem("levels"));
                unlocked = ll;
            } catch (err) { }

            if (!unlocked || !unlocked.length || unlocked.length !== 40) {
                console.log("invalid levels detected");
                unlocked = [];
                for (var i = 0; i < 40; i++) {
                    unlocked.push(false);
                }
            }
        }

        if (localStorage.getItem("music")) {
            MUSIC = localStorage.getItem("music") === "on" ? true : false;
        }

        if (localStorage.getItem("sounds")) {
            SOUND = localStorage.getItem("sounds") === "on" ? true : false;
        }
    }

    //if (deviceMobile) MUSIC = false;

    var progv = 0;
    var progt = 0;

    var loadloop = function () {
        var w = 300;
        var h = 30;
        var x = ctx.canvas.width / 2 - w / 2;
        var y = ctx.canvas.height / 2 - h / 2// + 200;
        var s = 8;
        //var imx = ctx.canvas.width / 2 - banner.naturalWidth / 2;
        //var imy = 30;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        /*
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.strokeRect(x - s + 2, y - s + 2, w + 2 * s, h + 2 * s);

        ctx.font = "36px fnt_game, sans-serif";

        ctx.fillStyle = "black";
        ctx.fillRect(x + 2, y + 2, w * Math.min(1, progv), h);
        ctx.fillText("A Sliding Thing", x + w / 2 + 2, y - 30 + 2);

        //ctx.fillRect(imx + 5, imy + 5, banner.naturalWidth, banner.naturalHeight);
        ctx.globalAlpha = 1;

        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgb(100, 60, 20)";
        ctx.strokeRect(x - s, y - s, w + 2 * s, h + 2 * s);

        ctx.fillStyle = "rgb(100, 60, 20)";
        ctx.fillRect(x, y, w * Math.min(1, progv), h);
        ctx.fillText("A Sliding Thing", x + w / 2, y - 30);

        //ctx.drawImage(banner, imx, imy);
        */

        var s = 0.75;

        var image = "tmg_logo2";
        if (TMG_images[image]) {
            var img = TMG_images[image];
            var w = img.naturalWidth;
            var h = img.naturalHeight;

            var ww = w * s;
            var hh = h * s;
            var xx = canvas.width / 2 - ww / 2;
            var yy = canvas.height / 2 - hh / 2;

            ctx.drawImage(img, 0, 0, w, h, xx, yy - 50, ww, hh);

            yy += 80;
            var lw = 3;
            var lp = 4;
            //var p = Math.min(Math.max(0, addictingGames.pload), 100) / 100;

            ctx.fillStyle = "rgb(40, 40, 40)";
            ctx.fillRect(xx, yy + 80, ww, 20);
            ctx.fillStyle = "rgb(110, 110, 110)";//"black";
            ctx.fillRect(xx + lw, yy + 80 + lw, ww - lw * 2, 20 - lw * 2);
            ctx.fillStyle = "black";
            ctx.fillRect(xx + lp, yy + 80 + lp, (ww - lp * 2) * progv, 20 - lp * 2);
        }

        if (progv < 1) {
            window.requestAnimationFrame(loadloop);
        } else {
            ctx.fillStyle = "white";
            //ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            var aaa = false;

            //armorGames.drawSplash(1.0, game.mousePressed("Left"), function () {
            //armorGames.playVideo(1.0, game.mousePressed("Left"), function () {
            aaa = true;

            for (var i = 0; i < LEVELS.length; i++) {
                LEVELIMAGES.push(getLevelImage(getLevel(i)));
            }

            if (MUSIC) game.playMusic("mus_play", true);
            game.run();
            game.enterScene("scn_level");
            //});

            if (!aaa) {
                for (var i = 0; i < 3; i++) {
                    game.buttonsPressed[i] = false;
                    game.buttonsReleased[i] = false;
                }
                window.requestAnimationFrame(loadloop);
            }
        }

        if (progv < progt) {
            progv += Math.min(2 / w, progt - progv);
        }
    };
    window.requestAnimationFrame(loadloop);

    game.loadAssets({
        fonts: {
            timeout: 2000,
            "fnt_game": "src/font.ttf"
        },

        images: {
            "img_arrow": "src/images/img_arrow.png",
            "img_sound_on": "src/images/img_sound_on.png",
            "img_sound_off": "src/images/img_sound_off.png",
            "img_music_on": "src/images/img_music_on.png",
            "img_music_off": "src/images/img_music_off.png",
            "img_restart": "src/images/img_restart.png",
            "img_info": "src/images/img_info.png",

            "img_arrow_dark": "src/images/img_arrow_dark.png",
            "img_sound_on_dark": "src/images/img_sound_on_dark.png",
            "img_sound_off_dark": "src/images/img_sound_off_dark.png",
            "img_music_on_dark": "src/images/img_music_on_dark.png",
            "img_music_off_dark": "src/images/img_music_off_dark.png",
            "img_restart_dark": "src/images/img_restart_dark.png",
            "img_info_dark": "src/images/img_info_dark.png",
        },

        sounds: {
            "snd_click": "src/audio/snd_click.mp3",
            "snd_coin": "src/audio/snd_coin.mp3",
            "snd_teleport": "src/audio/snd_teleport.mp3",
            "snd_touch": "src/audio/snd_touch.mp3",
            "snd_finish": "src/audio/snd_finish.mp3",
            "snd_rotator": "src/audio/snd_rotator.mp3",
            "snd_error": "src/audio/snd_error.mp3"
        },

        music: {
            "mus_play": "src/audio/mus_play.mp3"
        }
    }, {
        progress: function (p) {
            progt = p;
        },

        finish: function () {
            aaGameLoaded = true;

            checkBlurOrFocus(function () {
                if (MUSIC) {
                    game.pauseMusic("mus_play");
                    game.setMusicMuted("mus_play", true);
                    game.setMusicVolume("mus_play", 0);
                }
            }, function () {
                if (MUSIC) {
                    game.playMusic("mus_play", true);
                    game.setMusicMuted("mus_play", false);
                    game.setMusicVolume("mus_play", 1);
                }
            });
        }
    });
}

var WIDTH_RATIO = 0;
var HEIGHT_RATIO = 0;
var topDiv = document.getElementById("top");
topDiv.style.marginTop = "0px";
resizeIt();

window.addEventListener("resize", function () {
    resizeIt();
});


// CUSTOM BLUR/FOCUS EVENTS
var checkBlurOrFocus = function (cbBlur, cbFocus) {
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }

    if (hidden === undefined) {
        console.log("No support for the Page Visibility API.");
        window.addEventListener("blur", function () {
            cbBlur();
        });
        window.addEventListener("focus", function () {
            cbFocus();
        });
    } else {
        var handleVisibilityChange = function () {
            if (document[hidden]) {
                cbBlur();
            } else {
                cbFocus();
            }
        };
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
};

// CLICKABLE LOGO EVENTS
var CLICKABLE_PRESENT = false;
var CLICKABLE_FUNC = function () {
    if (CLICKABLE_PRESENT) {
        CLICKABLE_PRESENT = false;
        //window.open("https://www.addictinggames.com/", "_blank");
        var screenName = "game";
        if (levelnumber === HELP_LEVEL) {
            screenName = "helpmenu";
        } else if (levelnumber === MENU_LEVEL) {
            screenName = "levelmenu";
        }
        TMG_navigate(screenName, "logo");
    }
};
window.addEventListener("mouseup", function (e) {
    e.preventDefault();
    if (e.button == 0) {
        CLICKABLE_FUNC();
    }
});
window.addEventListener("touchend", function (e) {
    e.preventDefault();
    CLICKABLE_FUNC();
});
