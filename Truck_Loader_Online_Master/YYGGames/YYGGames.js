(function () {
    'use strict';

    class System {
        constructor() {
            this.LANGUAGE_ENGLISH = "en";
            this.LANGUAGE_CHINESE = "zh";
            this.isCocosCreatorGame = false;
            this.isLayaGame = false;
            this.isBrowser = false;
            this.isMobile = false;
            this.isBrowser = typeof window === 'object' && typeof document === 'object';
            if (this.isBrowser) {
                if (window["isConchApp"]) {
                    this.isMobile = true;
                    this.isBrowser = false;
                }
                else {
                    this.isMobile = window.navigator.userAgent.indexOf("Mobile") > -1;
                }
                if (typeof Laya === 'object') {
                    this.isLayaGame = true;
                }
                if (typeof cc === 'object' && cc["Director"]) {
                    this.isCocosCreatorGame = true;
                }
            }
        }
    }

    class WebSound {
    }

    class WebAudioEngine {
        constructor() {
            this._audioInstances = new Map();
            this._audioContext = null;
            this._audioWebEnabled = false;
            this._muted = false;
            this._paused = false;
            this.initialize();
        }
        initialize() {
            try {
                window.AudioContext = window.AudioContext || window["webkitAudioContext"];
                this._audioContext = new AudioContext;
                let t = this;
                let resumeInterval = 0;
                window.document.addEventListener("mousedown", tryToResumeAudioContext, true);
                window.document.addEventListener("touchstart", tryToResumeAudioContext, true);
                function tryToResumeAudioContext() {
                    if (t._muted)
                        return;
                    if (t._paused) {
                        window.document.removeEventListener("mousedown", tryToResumeAudioContext, true);
                        window.document.removeEventListener("touchstart", tryToResumeAudioContext, true);
                        clearInterval(resumeInterval);
                        return;
                    }
                    if (t._audioContext.state === "suspended") {
                        t._audioContext.resume();
                    }
                    else {
                        window.document.removeEventListener("mousedown", tryToResumeAudioContext, true);
                        window.document.removeEventListener("touchstart", tryToResumeAudioContext, true);
                        clearInterval(resumeInterval);
                    }
                }
                resumeInterval = setInterval(tryToResumeAudioContext, 0.2e3);
                this._audioWebEnabled = true;
            }
            catch (e) {
                alert("Web Audio API is not supported in this browser");
            }
        }
        set muted(b) {
            this._muted = b;
            if (this._muted) {
                this._audioContext.suspend();
            }
            else {
                if (this._paused) {
                }
                else {
                    this._resume();
                }
            }
        }
        ;
        get muted() {
            return this._muted;
        }
        set pause(b) {
            this._paused = b;
            if (this._paused) {
                this._audioContext.suspend();
            }
            else {
                if (this._muted)
                    return;
                this._resume();
            }
        }
        _resume() {
            if (!this._muted) {
                this._audioContext.resume();
            }
        }
        stopAll() {
            const values = this._audioInstances.values();
            for (const sound of values) {
                const instance = sound.instance;
                if (instance.source.buffer) {
                    try {
                        instance.source.stop(this._audioContext.currentTime);
                    }
                    catch (e) {
                        instance.source.disconnect();
                    }
                    instance.source.onended = (function () { });
                    instance.setup();
                }
            }
        }
        stop(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                this._stopSound(sound);
            }
        }
        _stopSound(sound) {
            const instance = sound.instance;
            if (instance.source.buffer) {
                try {
                    instance.source.stop(this._audioContext.currentTime);
                }
                catch (e) {
                    instance.source.disconnect();
                }
                instance.source.onended = (function () { });
                instance.setup();
            }
        }
        playMusic(url) {
            if (this._music) {
                this._stopSound(this._music);
            }
            if (this._audioInstances.has(url)) {
                this._music = this._audioInstances.get(url);
                this.play(url, true);
            }
            else {
                this.downloadArrayBuffer(url, () => {
                    this.playMusic(url);
                });
            }
        }
        stopMusic() {
            if (this._music) {
                this._stopSound(this._music);
            }
        }
        play(url, loop = false) {
            if (!this._audioWebEnabled)
                return;
            if (this._audioInstances.has(url)) {
                this.stop(url);
                const sound = this._audioInstances.get(url);
                const instance = sound.instance;
                if (sound.buffer) {
                    try {
                        instance.playBuffer(this._audioContext.currentTime, sound.buffer);
                        instance.source.loop = loop;
                    }
                    catch (e) {
                        console.error("playBuffer error. Exception: " + e);
                    }
                }
            }
            else {
                this.downloadArrayBuffer(url, () => {
                    this.play(url, loop);
                });
            }
        }
        load(urls, onComplete) {
            let t = urls.length;
            let d = 0;
            for (let i = 0; i < urls.length; i++) {
                const url = urls[i];
                this.downloadArrayBuffer(url, () => {
                    d++;
                    if (d >= t) {
                        onComplete && onComplete();
                    }
                });
            }
        }
        setThreeD(url) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                sound.instance.threeD = true;
            }
        }
        createSoundInstance() {
            let audioContext = this._audioContext;
            const instance = {
                gain: audioContext.createGain(),
                panner: audioContext.createPanner(),
                threeD: false,
                playBuffer: (function (delay, buffer, offset) {
                    this.source.buffer = buffer;
                    var chan = this;
                    this.source.onended = (function () {
                        chan.setup();
                    });
                    this.source.start(delay, offset);
                }),
                setup: (function () {
                    this.source = audioContext.createBufferSource();
                    this.setupPanning();
                }),
                setupPanning: (function () {
                    if (this.threeD) {
                        this.source.disconnect();
                        this.source.connect(this.panner);
                        this.panner.connect(this.gain);
                    }
                    else {
                        this.panner.disconnect();
                        this.source.connect(this.gain);
                    }
                })
            };
            instance.panner.rolloffFactor = 0;
            instance.gain.connect(this._audioContext.destination);
            instance.setup();
            return instance;
        }
        parse(url, data, onComplete) {
            const sound = new WebSound();
            sound.url = url;
            sound.instance = this.createSoundInstance();
            this._audioInstances.set(url, sound);
            this._audioContext.decodeAudioData(data, function (buffer) {
                sound.buffer = buffer;
                onComplete && onComplete();
            }, function () {
                sound.error = true;
                onComplete && onComplete();
                console.log("Decode error." + sound.url);
            });
        }
        downloadArrayBuffer(url, onComplete) {
            if (this._audioInstances.has(url)) {
                onComplete && onComplete();
                return;
            }
            const t = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function () {
                if (xhr.status === 200 || xhr.status === 0) {
                    t.parse(url, xhr.response, onComplete);
                }
                else {
                    throw "no response";
                }
            };
            xhr.onerror = function () {
                onComplete && onComplete();
                throw "no response";
            };
            xhr.ontimeout = function () {
                onComplete && onComplete();
            };
            xhr.onabort = function () {
                onComplete && onComplete();
            };
            xhr.send(null);
        }
    }

    class WebAds {
        constructor() {
            this.canAds = true;
        }
        showInterstitial(onCompleted) {
            if (!this.canAds || typeof topmathgames == "undefined") {
                onCompleted && onCompleted();
                return;
            }
            topmathgames.showInterstitial(onCompleted);
        }
        showReward(successCallback, failure, completeCallback) {
            if (!this.canAds || typeof topmathgames == "undefined") {
                successCallback && successCallback();
                completeCallback && completeCallback();
                return;
            }
            topmathgames.showReward(successCallback, failure, completeCallback);
        }
    }

    const EXTNAME_RE = /(\.[^\.\/\?\\]*)(\?.*)?$/;
    class Path {
        static basename(pathStr, extname) {
            var index = pathStr.indexOf("?");
            if (index > 0)
                pathStr = pathStr.substring(0, index);
            var reg = /(\/|\\)([^\/\\]+)$/g;
            var result = reg.exec(pathStr.replace(/(\/|\\)$/, ""));
            if (!result)
                return pathStr;
            var baseName = result[2];
            if (extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() === extname.toLowerCase())
                return baseName.substring(0, baseName.length - extname.length);
            return baseName;
        }
        static extname(pathStr) {
            var temp = EXTNAME_RE.exec(pathStr);
            return temp ? temp[1] : '';
        }
    }

    class LayaWebAssetsLoader {
        constructor() {
            this._totalurlsAsyncCnt = 0;
            this.urls = [];
            this.completeurls = [];
            this.errorurls = [];
            this.bitmapfnts = [];
            this.dragonBones = [];
        }
        perload(complete, progress) {
            return new Promise((resolve, reject) => {
                function _complete() {
                    complete && complete();
                    resolve();
                }
                Laya.loader.create("resources.json", Laya.Handler.create(this, () => {
                    const res = Laya.loader.getRes("resources.json");
                    if (res) {
                        this.onProgress(progress);
                        this.onComplete(_complete);
                        this.push(res.sounds);
                        this.push(res.fonts);
                        this.push(res.images);
                        this.push(res.atlas);
                        this.push(res.bitmapfnts);
                        this.push(res.dragonBones);
                        this.push(res.jsons);
                        this.push(res.scenes);
                        this.loadAssetAsync();
                    }
                    else {
                        _complete();
                    }
                }));
            });
        }
        push(urls) {
            if (urls instanceof Array) {
                this.urls.push(...urls);
            }
            else {
                if (this.urls.indexOf(urls) < 0) {
                    this.urls.push(urls);
                }
            }
            return this;
        }
        remove(url) {
            let index = this.urls.indexOf(url);
            if (index >= 0) {
                this.urls.splice(index, 1);
            }
            return this;
        }
        loadAssetAsync() {
            this._totalurlsAsyncCnt = this.urls.length;
            const iterator = this.urls.shift();
            if (iterator) {
                this.toLoader(iterator);
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this);
                    this._onCompleteCallback = null;
                    this._onProgressCallback = null;
                }
            }
        }
        toLoader(url) {
            const type = Path.extname(url);
            const handler = Laya.Handler.create(this, this._onUrlCompleteAsync, [url]);
            switch (type) {
                case ".bitmapfnt":
                    Laya.loader.create(url, handler, null, Laya.Loader.XML);
                    break;
                case ".scene":
                    Laya.Scene.load(url, handler);
                    break;
                case ".mp3":
                case ".wav":
                    Laya.loader.create(url, handler, null, Laya.Loader.BUFFER);
                    break;
                case ".sk":
                    Laya.loader.load(url, handler);
                    break;
                default:
                    Laya.loader.load(url, handler);
                    break;
            }
        }
        decode(url, data) {
            const type = Path.extname(url);
            switch (type) {
                case ".bitmapfnt":
                    const bitmapfnt = new Laya.BitmapFont();
                    bitmapfnt.parseFont(Laya.loader.getRes(url), Laya.loader.getRes(url.replace(".bitmapfnt", ".png")));
                    Laya.Text.registerBitmapFont(Path.basename(url, type), bitmapfnt);
                    console.log("注册字体:", Path.basename(url, type));
                    break;
                case ".scene":
                    break;
                case ".mp3":
                case ".wav":
                    YYGGames.audio.parse(url, data);
                    break;
                case ".sk":
                    const dragonBones = YYGGames.dragonBones;
                    dragonBones.load(url);
                    break;
                default:
                    break;
            }
        }
        _onUrlCompleteAsync(url, data) {
            this.completeurls.push(url);
            if (this._onProgressCallback) {
                this._onProgressCallback(this.completeurls.length / this._totalurlsAsyncCnt);
            }
            if (data) {
                this.decode(url, data);
            }
            else {
                this.errorurls.push(url);
            }
            const iterator = this.urls.shift();
            if (iterator) {
                this.toLoader(iterator);
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback();
                    this._onCompleteCallback = null;
                    this._onProgressCallback = null;
                }
            }
        }
        onProgress(caller, progress) {
            if (caller instanceof Function) {
                this._onProgressCallback = caller;
            }
            else {
                if (progress) {
                    this._onProgressCallback = progress.bind(caller);
                }
            }
        }
        onComplete(caller, complete) {
            if (caller instanceof Function) {
                this._onCompleteCallback = caller;
            }
            else {
                if (complete) {
                    this._onCompleteCallback = complete.bind(caller);
                }
            }
        }
    }

    class LayaInit {
        static async init(gameConfig) {
            if (window["Laya3D"])
                Laya3D.init(gameConfig.width, gameConfig.height);
            else
                Laya.init(gameConfig.width, gameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = gameConfig.scaleMode;
            Laya.stage.screenMode = gameConfig.screenMode;
            Laya.stage.alignV = gameConfig.alignV;
            Laya.stage.alignH = gameConfig.alignH;
            Laya.URL.exportSceneToJson = gameConfig.exportSceneToJson;
            await new Promise((resolve, reject) => {
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded, [resolve]), Laya.ResourceVersion.FILENAME_VERSION);
            });
        }
        static onVersionLoaded(resolve) {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded, [resolve]));
        }
        static onConfigLoaded(resolve) {
            resolve();
        }
    }

    class CocosCeatorWebAssetsLoader {
        constructor() {
            this._totalurlsAsyncCnt = 0;
            this.urls = [];
            this.completeurls = [];
            this.errorurls = [];
            this.typeReg = /\.(\w+)\??/g;
        }
        perload(complete, progress) {
            return new Promise((resolve, reject) => {
                function _complete() {
                    complete && complete();
                    resolve();
                }
                cc.resources.load("resources", cc.JsonAsset, (err, asset) => {
                    if (!err) {
                        const res = asset.json;
                        this.onProgress(progress);
                        this.onComplete(_complete);
                        this.push(res.sounds);
                        this.push(res.fonts);
                        this.push(res.images);
                        this.push(res.atlas);
                        this.push(res.prefabs);
                        this.push(res.dragonBones);
                        this.push(res.jsons);
                        this.push(res.scenes);
                        this.loadAssetAsync();
                    }
                    else {
                        console.log("errresresres", err);
                        _complete();
                    }
                });
            });
        }
        push(urls) {
            if (urls instanceof Array) {
                this.urls.push(...urls);
            }
            else {
                if (this.urls.indexOf(urls) < 0) {
                    this.urls.push(urls);
                }
            }
            return this;
        }
        remove(url) {
            let index = this.urls.indexOf(url);
            if (index >= 0) {
                this.urls.splice(index, 1);
            }
            return this;
        }
        loadAssetAsync() {
            this._totalurlsAsyncCnt = this.urls.length;
            const iterator = this.urls.shift();
            if (iterator) {
                this.toLoader(iterator);
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this);
                    this._onCompleteCallback = null;
                    this._onProgressCallback = null;
                }
            }
        }
        getTypeFromUrl(url) {
            this.typeReg.lastIndex = url.lastIndexOf(".");
            let ret = this.typeReg.exec(url);
            if (ret && ret.length > 1) {
                return ret[1].toLowerCase();
            }
            return null;
        }
        toLoader(url) {
            const type = this.getTypeFromUrl(url);
            const t = this;
            function handler(err, asset) {
                if (!err) {
                    t._onUrlCompleteAsync(asset.url, asset);
                }
                else {
                }
            }
            switch (type) {
                case "bitmapfnt":
                    break;
                case "scene":
                    break;
                case "mp3":
                case "wav":
                    break;
                case "sk":
                    break;
                default:
                    cc.resources.load(url.slice(0, url.lastIndexOf(".")), handler);
                    break;
            }
        }
        decodeLoaderData(url, data) {
            const type = this.getTypeFromUrl(url);
            switch (type) {
                case "bitmapfnt":
                    break;
                case "scene":
                    break;
                case "mp3":
                case "wav":
                    break;
                case "sk":
                    break;
                default:
                    break;
            }
        }
        _onUrlCompleteAsync(url, data) {
            this.completeurls.push(url);
            if (this._onProgressCallback) {
                this._onProgressCallback(this.completeurls.length / this._totalurlsAsyncCnt);
            }
            if (data) {
                this.decodeLoaderData(url, data);
            }
            else {
                this.errorurls.push(url);
            }
            const iterator = this.urls.shift();
            if (iterator) {
                this.toLoader(iterator);
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback();
                    this._onCompleteCallback = null;
                    this._onProgressCallback = null;
                }
            }
        }
        onProgress(caller, progress) {
            if (caller instanceof Function) {
                this._onProgressCallback = caller;
            }
            else {
                if (progress) {
                    this._onProgressCallback = progress.bind(caller);
                }
            }
        }
        onComplete(caller, complete) {
            if (caller instanceof Function) {
                this._onCompleteCallback = caller;
            }
            else {
                if (complete) {
                    this._onCompleteCallback = complete.bind(caller);
                }
            }
        }
    }

    class LayaDragonBones {
        constructor() {
            this.skeletons = {};
        }
        create(url, aniMode = 0) {
            if (this.skeletons[url]) {
                const templet = this.skeletons[url];
                return templet.buildArmature(aniMode);
            }
            throw "error LayaDragonBones" + url;
        }
        load(url) {
            const templet = new Laya.Templet();
            templet.loadAni(url);
            this.skeletons[url] = templet;
        }
    }

    class YYGGamesImps {
        constructor() {
            this.appName = "";
            this.system = new System();
            if (this.system.isBrowser) {
                this.audio = new WebAudioEngine();
                this.ads = new WebAds();
            }
        }
        init(appName, gameConfig, perload) {
            return new Promise(async (resolve, reject) => {
                if (this.system.isBrowser) {
                    if (appName) {
                        document.title = appName.replace(/-/g, " ");
                        this.appName = appName;
                    }
                }
                if (this.system.isLayaGame) {
                    if (!this.system.isBrowser) {
                        const ratio = Laya.Browser.height / Laya.Browser.width;
                        gameConfig.width = gameConfig.height / ratio;
                    }
                    await LayaInit.init(gameConfig);
                    this.loader = new LayaWebAssetsLoader();
                    this.dragonBones = new LayaDragonBones();
                }
                if (this.system.isCocosCreatorGame) {
                    this.loader = new CocosCeatorWebAssetsLoader();
                }
                if (perload) {
                    await this.loader.perload();
                }
                resolve();
            });
        }
    }
    window["YYGGames"] = new YYGGamesImps();

}());
