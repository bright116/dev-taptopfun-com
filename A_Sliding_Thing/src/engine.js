// HTML5 Game Engine

var deviceOS = "";
var browserSafari = false;
var deviceMobile = false;

var userHasGestured;

function Game(canvas, useViews) {
    var self = this;

    canvas.setAttribute("tabindex", 1);
    canvas.style.outline = "none";
    canvas.addEventListener("click", function () {
        canvas.focus();
    });
    canvas.focus();

    this.useViews = !!useViews;

    if (canvas) {
        this.canvas = canvas;
    } else {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 640;
        this.canvas.height = 480;
    }

    this.canvasctx = this.canvas.getContext("2d");

    if (useViews) {
        this.ctx = window.document.createElement("canvas").getContext("2d");
    } else {
        this.ctx = this.canvasctx;
    }

    this.keysDown = {};
    this.keysPressed = {};
    this.keysReleased = {};

    window.addEventListener("keydown", function (event) {
        /*
        var key = event.key;

        if (!key) {
            key = translateKeyCode(event.which || event.keyCode);
        }
        */

        var key = translateKeyCode(event.which || event.keyCode || event.key);

        event.preventDefault();

        if (!self.keysDown[key]) {
            self.keysDown[key] = true;
            self.keysPressed[key] = true;
        }
    });

    window.addEventListener("keyup", function (event) {
        /*
        var key = event.key;

        if (!key) {
            key = translateKeyCode(event.which || event.keyCode);
        }
        */

        var key = translateKeyCode(event.which || event.keyCode || event.key);

        event.preventDefault();

        if (self.keysDown[key]) {
            self.keysDown[key] = false;
            self.keysReleased[key] = true;
        }
    });

    this.buttonNames = ["Left", "Middle", "Right"];
    this.buttonIndices = {"Left": 0, "Middle": 1, "Right": 2};
    this.buttonsDown = [false, false, false];
    this.buttonsPressed = [false, false, false];
    this.buttonsReleased = [false, false, false];
    this.mouseX = 0;
    this.mouseY = 0;

    detectEnv();
    //deviceOS = "ios";

    if (!deviceMobile) {

        window.addEventListener("mousedown", function (event) {
            if (aaGameLoaded && !aaUserTouched) {
                aaUserTouched = true;
                userHasGestured();
                setTimeout(function () {
                    if (MUSIC) game.playMusic("mus_play", true);
                }, 200);
            }//*/

            var rect = canvas.getBoundingClientRect();
            var button = event.button;

            event.stopPropagation();
            event.preventDefault();

            self.mouseX = (event.pageX - window.pageXOffset - rect.left) * WIDTH_RATIO;
            self.mouseY = (event.pageY - window.pageYOffset - rect.top) * HEIGHT_RATIO;

            if (!self.buttonsDown[button]) {
                self.buttonsDown[button] = true;
                self.buttonsPressed[button] = true;
            }
        }, { passive: false });

        window.addEventListener("mouseup", function (event) {
            var rect = canvas.getBoundingClientRect();
            var button = event.button;

            event.stopPropagation();
            event.preventDefault();

            if (self.buttonsDown[button]) {
                self.buttonsDown[button] = false;
                self.buttonsReleased[button] = true;
            }
        }, { passive: false });

        window.addEventListener("mousemove", function (event) {
            var rect = canvas.getBoundingClientRect();

            event.stopPropagation();
            event.preventDefault();

            self.mouseX = (event.pageX - window.pageXOffset - rect.left) * WIDTH_RATIO;
            self.mouseY = (event.pageY - window.pageYOffset - rect.top) * HEIGHT_RATIO;
        }, { passive: false });

    }

    userHasGestured = function () {
        console.log("gesturing...");

        for (var key in self.sounds) {
            var sound = self.sounds[key];
            for (var i = 0; i < sound.channels.length; i++) {
                sound.channels[i].loop = false;
                sound.channels[i].volume = 0;
                sound.channels[i].play();
                sound.channels[i].pause();
                sound.channels[i].volume = 1;
            }
        }

        for (var key in self.music) {
            console.log("music:", key);
            self.music[key].volume = 0;
            self.music[key].loop = true;
            self.music[key].play();
            self.music[key].pause();
            self.music[key].volume = 1;
        }
    };

    window.addEventListener("touchstart", function (event) {
        var rect = canvas.getBoundingClientRect();
        var button = 0;
        var touch = event.touches[0];

        event.stopPropagation();
        event.preventDefault();

        self.mouseX = (touch.pageX - window.pageXOffset - rect.left) * WIDTH_RATIO;
        self.mouseY = (touch.pageY - window.pageYOffset - rect.top) * HEIGHT_RATIO;

        if (!self.buttonsDown[button]) {
            self.buttonsDown[button] = true;
            self.buttonsPressed[button] = true;
        }
    }, { passive: false });

    window.addEventListener("touchend", function (event) {
        if (aaGameLoaded && !aaUserTouched) {
            aaUserTouched = true;
            userHasGestured();
            setTimeout(function () {
                if (MUSIC) game.playMusic("mus_play", true);
            }, 200);
        }//*/

        var rect = canvas.getBoundingClientRect();
        var button = 0;

        //event.preventDefault();

        if (self.buttonsDown[button]) {
            self.buttonsDown[button] = false;
            self.buttonsReleased[button] = true;
        }
    }, { passive: false });

    window.addEventListener("touchcancel", function (event) {
        if (aaGameLoaded && !aaUserTouched) {
            aaUserTouched = true;
            userHasGestured();
            setTimeout(function () {
                if (MUSIC) game.playMusic("mus_play", true);
            }, 200);
        }//*/

        var rect = canvas.getBoundingClientRect();
        var button = 0;

        //event.preventDefault();

        if (self.buttonsDown[button]) {
            self.buttonsDown[button] = false;
            self.buttonsReleased[button] = true;
        }
    }, { passive: false });

    window.addEventListener("touchmove", function (event) {
        var rect = canvas.getBoundingClientRect();
        var touch = event.touches[0];

        event.stopPropagation();
        event.preventDefault();

        self.mouseX = (touch.pageX - window.pageXOffset - rect.left) * WIDTH_RATIO;
        self.mouseY = (touch.pageY - window.pageYOffset - rect.top) * HEIGHT_RATIO;
    }, { passive: false });

    var preventHandler = function (event) { event.preventDefault(); };

    self.canvas.addEventListener("mousedown", preventHandler, { passive: false });
    self.canvas.addEventListener("mouseup", preventHandler, { passive: false });
    self.canvas.addEventListener("mousemove", preventHandler, { passive: false });
    self.canvas.addEventListener("touchstart", preventHandler, { passive: false });
    self.canvas.addEventListener("touchend", preventHandler, { passive: false });
    self.canvas.addEventListener("touchcancel", preventHandler, { passive: false });
    self.canvas.addEventListener("touchmove", preventHandler, { passive: false });

    this.objects = {};
    this.instances = [];
    this.instanceGroups = {};
    this.destroyedInstances = [];
    this.changedOrder = false;

    this.scenes = {};
    this.nextScene = null;
    this.scene = {
        name: "",
        width: this.ctx.canvas.width,
        height: this.ctx.canvas.height,
        enter: function () {},
        leave: function () {}
    };

    this.views = [];

    this.images = {};
    this.sounds = {};
    this.music = {};
}

Game.prototype = {
    createView: function (width, height, portX, portY, x, y) {
        var view = {
            x: x || 0,
            y: y || 0,
            portX: portX || 0,
            portY: portY || 0,
            width: width,
            height: height
        };

        this.views.push(view);

        return view;
    },

    destroyView: function (view) {
        var index = this.views.indexOf(view);

        if (index < 0) {
            throw new Error("Engine Error: trying to destroy an invalid instance");
        }

        this.view.splice(index, 1);
    },

    attachView: function (view, instance, originX, originY) {
        view.x = Math.max(0, Math.min(instance.x - (originX || (view.width / 2)), this.scene.width - view.width));
        view.y = Math.max(0, Math.min(instance.y - (originY || (view.height / 2)), this.scene.height - view.height));
    },

    run: function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        if (this.useViews) {
            if (this.views.length > 0) {
                for (var i = 0; i < this.views.length; i++) {
                    var view = this.views[i];
                    this.canvasctx.drawImage(ctx.canvas, view.x, view.y, view.width, view.height, view.portX, view.portY, view.width, view.height);
                }
            } else {
                this.canvasctx.drawImage(ctx.canvas, 0, 0);
            }
        }

        if (this.nextScene) {
            this.scene.leave();

            this.views = [];
            this.instances = [];
            this.instanceGroups = {};
            this.changedOrder = false;
            this.scene = this.nextScene;
            this.nextScene = null;

            if (this.useViews) {
                this.ctx.canvas.width = this.scene.width;
                this.ctx.canvas.height = this.scene.height;
            }

            this.scene.enter();
        }

        if (this.changedOrder) {
            this.instances.sort(function (a, b) {
                return b.depth - a.depth;
            });
            this.changedOrder = false;
        }

        for (var i = 0, len = this.instances.length; i < len; i++) {
            var instance = this.instances[i];
            var depth = instance.depth;

            instance.update();

            if (instance.depth !== depth) {
                this.changedOrder = true;
            }
        }

        while (this.destroyedInstances.length > 0) {
            var instance = this.destroyedInstances.pop();

            if (this.instanceGroups.hasOwnProperty(instance.object)) {
                this.instanceGroups[instance.object].splice(this.instanceGroups[instance.object].indexOf(instance), 1);
            }

            this.instances.splice(this.instances.indexOf(instance), 1);
            instance.destroy();
        }

        /*if (this.mousePressed("Left") && aaGameLoaded && !aaUserTouched) {
            aaUserTouched = true;
            userHasGestured();
            setTimeout(function () {
                if (MUSIC) game.playMusic("mus_play", true);
            }, 200);
        }//*/

        for (var key in this.keysPressed) {
            this.keysPressed[key] = false;
        }

        for (var key in this.keysReleased) {
            this.keysReleased[key] = false;
        }

        for (var i = 0; i < 3; i++) {
            this.buttonsPressed[i] = false;
            this.buttonsReleased[i] = false;
        }

        var self = this;
        window.requestAnimationFrame(function () {
            CLICKABLE_PRESENT = false;
            self.run();
        });
    },

    keyboardDown: function (key) {
        return !!this.keysDown[key];
    },

    keyboardPressed: function (key) {
        return !!this.keysPressed[key];
    },

    keyboardReleased: function (key) {
        return !!this.keysReleased[key];
    },

    mouseDown: function (button) {
        return this.buttonsDown[this.buttonIndices[button]];
    },

    mousePressed: function (button) {
        return this.buttonsPressed[this.buttonIndices[button]];
    },

    mouseReleased: function (button) {
        return this.buttonsReleased[this.buttonIndices[button]];
    },

    addObject: function (name, body) {
        function O(x, y, depth) {
            this.x = x || 0;
            this.y = y || 0;
            this.depth = depth || 0;
            this.object = name;
        }

        O.prototype = {
            create: body.create || function () {},
            update: body.update || function () {},
            destroy: body.destroy || function () {}
        };

        this.objects[name] = O;
    },

    createInstance: function (object, x, y, depth) {
        var instance = new this.objects[object](x, y, depth);

        if (!this.instanceGroups.hasOwnProperty(object)) {
            this.instanceGroups[object] = [];
        }
        this.instanceGroups[object].push(instance);

        this.instances.push(instance);
        instance.create();
        this.changedOrder = true;

        return instance;
    },

    destroyInstance: function (instance) {
        if (this.instances.indexOf(instance) < 0 || this.destroyedInstances.indexOf(instance) >= 0) {
            throw new Error("Engine Error: trying to destroy an invalid instance");
        }

        this.destroyedInstances.push(instance);
    },

    withInstances: function (object, func, self) {
        var instances = this.instanceGroups[object];
        if (instances) {
            for (var i = 0, len = instances.length; i < len; i++) {
                if (func.call(self || window, instances[i])) {
                    break;
                }
            }
        }
    },

    getInstanceCount: function (object) {
        if (object) {
            return this.instanceGroups.hasOwnProperty(object) ? this.instanceGroups[object].length : 0;
        } else {
            return this.instances.length;
        }
    },

    addScene: function (name, body) {
        var scene = {
            name: name,
            width: body.width || this.canvas.width,
            height: body.height || this.canvas.height,
            enter: body.enter || function () {},
            leave: body.leave || function () {}
        };

        if (scene.width < this.canvas.width || scene.height < this.canvas.height) {
            throw new Error("Engine Error: the dimensions of scene '" + name + "' are smaller than the dimensions of the canvas");
        }

        this.scenes[name] = scene;
    },

    enterScene: function (scene) {
        this.nextScene = this.scenes[scene];
    },

    loadAssets: function (assets, body) {
        var imageAssets = [];
        var soundAssets = [];
        var musicAssets = [];
        var fontAssets = [];
        var progress = body.progress || function (p) {};
        var finish = body.finish || function () {};
        var channelCount = 2;
        var fontTimeout = 1;

        if (assets.images) {
            for (var name in assets.images) {
                if (assets.images.hasOwnProperty(name)) {
                    imageAssets.push(name, assets.images[name]);
                }
            }
        }

        if (assets.sounds) {
            for (var name in assets.sounds) {
                if (name !== "channels" && assets.sounds.hasOwnProperty(name)) {
                    soundAssets.push(name, assets.sounds[name]);
                }
            }

            if (assets.sounds.channels) {
                channelCount = assets.sounds.channels;
            }
        }

        if (assets.music) {
            for (var name in assets.music) {
                if (assets.music.hasOwnProperty(name)) {
                    musicAssets.push(name, assets.music[name]);
                }
            }
        }

        if (assets.fonts) {
            for (var name in assets.fonts) {
                if (name !== "timeout" && assets.fonts.hasOwnProperty(name)) {
                    fontAssets.push(name, assets.fonts[name]);
                }
            }

            if (assets.fonts.timeout) {
                fontTimeout = assets.fonts.timeout;
            }
        }

        var total = (imageAssets.length + soundAssets.length + musicAssets.length) / 2 + (fontAssets.length > 0 ? 1 : 0);
        var count = 0;
        var self = this;

        function loadImage(index) {
            if (index >= imageAssets.length) {
                loadSound(0);
                return;
            }

            var image = new Image();
            image.src = imageAssets[index + 1];
            image.onload = function () {
                self.images[imageAssets[index]] = image;
                count += 1;
                progress(count / total);
                window.setTimeout(loadImage, 1, index + 2);
            };
        }

        function loadSound(index) {
            /*if (browserSafari || deviceMobile) {
                window.setTimeout(function () {
                    count += soundAssets.length;
                    progress(count / total);
                    loadMusic(0);
                }, 3000);
                console.log("skipped s");
                return;
            }*/

            if (index >= soundAssets.length) {
                loadMusic(0);
                return;
            }

            var channels = [];

            function loadChannel(i) {
                var sndName = soundAssets[index];

                if (i >= (sndName === "snd_touch" || sndName === "snd_coin" ? 4 : channelCount)) {
                    self.sounds[soundAssets[index]] = {
                        channels: channels,
                        currentChannel: 0
                    };
                    count += 1;
                    progress(count / total);
                    window.setTimeout(loadSound, 1, index + 2);
                    return;
                }

                var channel = new Audio();

                if (deviceOS === "ios") {
                    setTimeout(function () {
                        channels.push(channel);
                    }, 100);
                } else {
                    channel.onloadeddata = function () {
                        channels.push(channel);
                        //loadChannel(i + 1);
                    };
                }

                channel.src = soundAssets[index + 1];
                channel.preload = "auto";
                window.setTimeout(function () { loadChannel(i + 1); }, 100);
            }

            loadChannel(0);
        }

        function loadMusic(index) {
            if (index >= musicAssets.length) {// || deviceMobile) {
                window.setTimeout(finish, 2000);
                return;
            }

            var audio = new Audio();
            if (deviceOS === "ios") {
                setTimeout(function () {
                    self.music[musicAssets[index]] = audio;
                    count += 1;
                    progress(count / total);
                    window.setTimeout(loadMusic, 1, index + 2);
                }, 1000);
            } else {
                audio.onloadeddata = function () {
                    self.music[musicAssets[index]] = audio;
                    count += 1;
                    progress(count / total);
                    window.setTimeout(loadMusic, 1, index + 2);
                };
            }
            audio.src = musicAssets[index + 1];
            audio.preload = "auto";
        }

        function loadFonts() {
            if (fontAssets.length === 0) {
                loadImage(0);
                return;
            }

            var css = document.createElement("style");

            for (var index = 0; index < fontAssets.length; index += 2) {
                css.innerHTML += "@font-face { font-family: " + fontAssets[index] + "; src: url(" + fontAssets[index + 1] + "); }";
            }

            document.head.appendChild(css);
            window.setTimeout(function () {
                count += 1;
                progress(count / total);
                loadImage(0);
            }, fontTimeout);
        }

        progress(0);
        loadFonts();
    },

    getImage: function (name) {
        return this.images[name];
    },

    playSound: function (name) {
        //switch (name) {case "snd_rotator": case "snd_teleport": return;}
        var sound = this.sounds[name];

        if (sound === undefined) {
            return;
        }

        if (sound.channels === undefined || sound.channels.length === 0) {
            return;
        }

        var channel = sound.channels[sound.currentChannel];

        sound.currentChannel = (sound.currentChannel + 1) % sound.channels.length;
        channel.loop = false;
        channel.play();
    },

    setSoundVolume: function (name, volume) {
        var sound = this.sounds[name];

        for (var i = 0; i < sound.channels.length; i++) {
            sound.channels[i].volume = volume;
        }
    },

    playMusic: function (name, loop) {
        var music = this.music[name];

        if (music === undefined) {
            return;
        }

        music.loop = loop || false;
        music.play();
    },

    pauseMusic: function (name) {
        var music = this.music[name];

        if (music === undefined) {
            return;
        }

        music.pause();
    },

    setMusicTime: function (name, time) {
        this.music[name].currentTime = time;
    },

    setMusicVolume: function (name, volume) {
        this.music[name].volume = volume;
    },

    setMusicMuted: function (name, muted) {
        this.music[name].muted = muted;
    }
};

function translateKeyCode(code) {
    switch (code + "") {
        case "8": return "Backspace";
        case "9": return "Tab";
        case "13": return "Enter";
        case "16": return "Shift";
        case "17": return "Control";
        case "18": return "Alt";
        case "27": return "Escape";
        case "32": return " ";
        case "37": return "ArrowLeft";
        case "38": return "ArrowUp";
        case "39": return "ArrowRight";
        case "40": return "ArrowDown";
        // ... digits ...
        case "65": return "a";
        case "66": return "b";
        case "67": return "c";
        case "68": return "d";
        case "69": return "e";
        case "70": return "f";
        case "71": return "g";
        case "72": return "h";
        case "73": return "i";
        case "74": return "j";
        case "75": return "k";
        case "76": return "l";
        case "77": return "m";
        case "78": return "n";
        case "79": return "o";
        case "80": return "p";
        case "81": return "q";
        case "82": return "r";
        case "83": return "s";
        case "84": return "t";
        case "85": return "u";
        case "86": return "v";
        case "87": return "w";
        case "88": return "x";
        case "89": return "y";
        case "90": return "z";
    };

    return code + "";
}
