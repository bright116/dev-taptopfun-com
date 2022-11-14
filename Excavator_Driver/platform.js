!function () {
    const TAG = "GamemonetizeAdsInstance_AD_WEB";
    class GamemonetizeAdsInstance {
        constructor() {
            this.isInited = false;
            this.appName = "";
        }
        adsAsyncInit(appName, type, gamedistributionAppId) {
            this.route = [
                "https://www.yad.com/",
                "https://www.yiv.com/",
                "https://www.babygames.com/",
                "https://www.bestgames.com/",
                "https://cargames.com/",
                "https://www.yad.com/",
                "https://www.yad.com/",
                "https://www.yad.com/"
            ][type];
            this.appName = appName;
            this.getForgames();
            return new Promise((resolve, reject) => {
                window["SDK_OPTIONS"] = {
                    gameId: gamedistributionAppId,
                    onEvent: (event) => {
                        console.log("event.name ====", event);
                        switch (event.name) {
                            case "SDK_GAME_PAUSE":
                                window.WebAudioEngine && (window.WebAudioEngine.muted = true);
                                break;
                            case "SDK_GAME_START":
                                if (event.status === "success") {
                                    if (this.onSuccess) {
                                        this.onSuccess(false);
                                        this.onSuccess = null;
                                    }
                                    this.onComplete();
                                }
                                break;
                            case "SDK_READY":
                                resolve(this.isInited);
                                break;
                            default:
                                break;
                        }
                    }
                };
                this.init().then((isInited) => {
                    this.isInited = isInited;
                });
            });
        }
        init() {
            return new Promise((resolve, reject) => {
                var t = this;
                var ads = document.getElementById(TAG);
                if (ads && !this.isInited) {
                    ads = null;
                }
                if (!ads) {
                    function onLoaded() {
                        resolve(true);
                    }
                    function onError(e) {
                        console.log("onError", e);
                        reject(false);
                    }
                    const library = document.createElement("script");
                    library.onload = onLoaded.bind(this);
                    library.onerror = onError.bind(this);
                    library.type = "text/javascript";
                    library.async = false;
                    library.src = "https://api.gamemonetize.com/sdk.js";
                    library.id = TAG;
                    document.head.appendChild(library);
                }
                else {
                    resolve(true);
                }
            });
        }
        onComplete() {

        }
        request() {
            return new Promise((resolve, reject) => {
                if (!this.isInited) {
                    resolve(false);
                    return;
                }
                this.onSuccess = resolve;
                window["sdk"].showBanner();
            });
        }
        showInterstitial(success) {
            this.request().then(() => { success && success() });
        }
        showReward(success, f) {
            this.request().then(() => { success && success() });
        }
        getForgames() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", this.route + "forgame/games.json", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.responseType = "text";
            xhr.onerror = function (e) { };
            xhr.onabort = function (e) { };
            xhr.onprogress = function (e) { };
            xhr.onload = (e) => {
                var status = xhr.status !== undefined ? xhr.status : 200;
                if (status === 200 || status === 204 || status === 0) {
                    this.forgames = JSON.parse(xhr.responseText);
                }
                else {
                }
            };
            xhr.send();
        }
        navigate(screenName, buttonName, gameId) {
            gameId = gameId || "";
            let domain = document.referrer;
            var url = this.route;
            if (typeof gameId === 'undefined' || gameId == "" || gameId == "undefined") {
            }
            else {
                url = url + "?pic=" + gameId;
            }
            if (typeof domain === 'undefined' || domain == "" || domain == "undefined") {
                domain = "unknown";
            }
            else {
                domain = domain.split('/')[2];
            }
            if (url.indexOf("?") > -1) {
                url = url + "&";
            }
            else {
                url = url + "?";
            }
            url = url + "utm_source=" + domain + "&utm_medium=" + screenName + "-" + buttonName + "&utm_campaign=game-" + this.appName;
            try {
                if (window.open(url)) {
                } else {
                }
            } catch (error) {
            }
        }
    }
    var GamemonetizeAds = null;



    class WebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.musicAudio = new WebAudioContext();
                    this.soundAudio = new WebAudioContext();
                    window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                    window.document.addEventListener("visibilitychange", this.onVisibilitychange.bind(this));
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                    this.musicAudio.getContext().onstatechange = this.onMusicStatechange.bind(this);
                    this.soundAudio.getContext().onstatechange = this.onSoundStatechange.bind(this);
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                }
                catch (e) {
                    console.log("Web Audio API", e);
                    alert("Web Audio API is not supported in this browser");
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
            if (window.WebAudioEngine.adShowing) {
                return;
            }
            if (document.visibilityState == "hidden") {
                if (!this.isMuted) {
                    this.isVisibilityMuted = this.muted = true;
                }
            }
            else if (document.visibilityState == "visible") {
                if (this.isVisibilityMuted) {
                    this.isVisibilityMuted = this.muted = false;
                }
            }
        }
        onDBInstanceMuted() {
            // this.pauseMusic = DBInstance$1.musicMuted.value;
            // this.pauseSound = DBInstance$1.soundMuted.value;
        }
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;
            if (this.bePauseSound || this.bePauseMusic) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
                return;
            }
            if (this.musicAudio.isSuspend()) {
                this.musicAudio.resume();
            }
            if (this.soundAudio.isSuspend()) {
                this.soundAudio.resume();
            }
            if (!this.musicAudio.isSuspend() || !this.soundAudio.isSuspend()) {
                window.document.removeEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.removeEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                clearInterval(this.tryToResumeIntervalId);
                this.tryToResumeIntervalId = -1;
            }
        }
        onMusicStatechange() {
            if (this.musicAudio.isSuspend() && !this.isMuted && !this.bePauseMusic && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        onSoundStatechange() {
            if (this.soundAudio.isSuspend() && !this.isMuted && !this.bePauseSound && this.tryToResumeIntervalId === -1) {
                window.document.addEventListener("mousedown", this.tryToResumeAudioContext.bind(this), true);
                window.document.addEventListener("touchstart", this.tryToResumeAudioContext.bind(this), true);
                this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
            }
        }
        set muted(b) {
            this.isMuted = b;
            if (this.isMuted) {
                this.musicAudio.suspend();
                this.soundAudio.suspend();
            }
            else {
                if (this.tryToResumeIntervalId == -1) {
                    this.tryToResumeIntervalId = setInterval(this.tryToResumeAudioContext.bind(this), 0.2e3);
                }

            }
        }

        get muted() {
            return this.isMuted;
        }

        set pauseSound(b) {
            this.bePauseSound = b;
            if (this.bePauseSound) {
                this.soundAudio.suspend();
            }
            else {
                if (this.isMuted)
                    return;
                this.soundAudio.resume();
            }
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
            if (this.bePauseMusic) {
                this.musicAudio.suspend();
            }
            else {
                if (this.isMuted)
                    return;
                this.musicAudio.resume();
            }
        }
        stopAll() {
            this.musicAudio.stopAll();
            this.soundAudio.stopAll();
        }
        parse(url, data, onComplete) {
            this.soundAudio.parse(url, data);
        }
        playMusic(url) {
            this.musicAudio.stopAll();
            this.musicAudio.playMusic(url);
        }
        stopMusic() {
            this.musicAudio.stopAll();
        }
        stopSound(url) {
            this.soundAudio.stop(url);
        }
        set musicVolume(vlaue) {
            this.musicAudio.musicVolume = vlaue;
        }
        get musicVolume() {
            return this.musicAudio.musicVolume;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
            this.soundAudio.play(url, loop, singleton);
        }
    }
    class WebAudioSource {
    }
    class WebAudioContext {
        constructor() {
            this.volume = 100;
            this._audioInstances = new Map();
            this._musicVolume = 100;
            window.AudioContext = window.AudioContext || window["webkitAudioContext"];
            this.context = new AudioContext();
        }
        getContext() {
            return this.context;
        }
        isSuspend() {
            return this.context.state === "suspended";
        }
        suspend() {
            this.context.suspend();
        }
        resume() {
            this.context.resume();
        }
        stopAll() {
            const values = this._audioInstances.values();
            for (const sound of values) {
                const instance = sound.instance;
                if (instance.source.buffer) {
                    try {
                        instance.source.stop(this.context.currentTime);
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
                    instance.source.stop(this.context.currentTime);
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
                this.musicVolume = this._musicVolume;
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
        set musicVolume(vlaue) {
            this._musicVolume = vlaue;
            if (this._music) {
                this._music.instance.gain.gain.value = this._musicVolume / 100;
            }
        }
        get musicVolume() {
            return this._musicVolume;
        }
        play(url, loop = false, singleton = false) {
            if (this._audioInstances.has(url)) {
                const sound = this._audioInstances.get(url);
                const instance = sound.instance;
                if (singleton && !instance.ended)
                    return;
                this.stop(url);
                if (sound.buffer) {
                    try {
                        instance.playBuffer(this.context.currentTime, sound.buffer);
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
            let audioContext = this.context;
            const instance = {
                gain: audioContext.createGain(),
                panner: audioContext.createPanner(),
                threeD: false,
                ended: false,
                playBuffer: (function (delay, buffer, offset) {
                    this.source.buffer = buffer;
                    var chan = this;
                    this.ended = false;
                    this.source.onended = (function () {
                        chan.setup();
                        chan.ended = true;
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
            instance.gain.connect(this.context.destination);
            instance.setup();
            return instance;
        }
        parse(url, data, onComplete) {
            const sound = new WebAudioSource();
            sound.url = url;
            sound.instance = this.createSoundInstance();
            this._audioInstances.set(url, sound);
            this.context.decodeAudioData(data, function (buffer) {
                sound.buffer = buffer;
                onComplete && onComplete();
            }, function (e) {
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

    const audioEngine = window.WebAudioEngine = new WebAudioEngine();


    // var WebAudioEngine$1 = 



    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
            this.initData();
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }
        initData() {
            let canvas = document.getElementById("layaCanvas");
            if (canvas) {
                canvas.addEventListener("mouseup", this.onNavigate_.bind(this));
                canvas.addEventListener("touchend", this.onNavigate_.bind(this));
            }
        }
        onNavigate_() {
            // if (YYGSDK.isGamedistribution) {
            //     return;
            // }
            // if (this.canNavigateActive_) {
            //     if (GamemonetizeAds) {
            //         GamemonetizeAds.navigate(this.screen_, this.action_, this.to_);
            //     } else {
            //         YYGSDK.navigate(this.screen_, this.action_, this.to_);
            //     }
            // }
            // this.canNavigateActive_ = false;
        }

        getStorageSync(key) {
            let value = null;
            try {
                let v = Laya.LocalStorage.getItem(key);
                value = JSON.parse(v);
            } catch (error) {

            }

            return value
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }

        navigate(screen_, action_, to_) {
            if (this.canNavigateActive_ === false) {
                this.screen_ = screen_;
                this.action_ = action_;
                this.to_ = to_;
                this.canNavigateActive_ = true;
            }
        }

        onblur() {
            audioEngine.muted = true;;
        }

        onfocus() {
            audioEngine.muted = false;

        }

        //插屏广告
        showInterstitial(complete) {

            console.log("请求插屏广告");

            // 展示插屏广告
            HUHU_showInterstitialAd();
        
            // 继续游戏
            complete && complete()
            return;
        }
        //复活
        showReward(success, failure) {
            console.log("请求激励广告");


            HUHU_showRewardedVideoAd(
              () => {
                  // 用户观看广告完成，继续游戏
                  success && success();
              },
              () => {
                // 广告请求失败或者用户跳过广告
                if (failure) {
                    failure();
                }
          
          
                promptMessage("Failed to get the reward, please watch the ads to the end.");
              }
            );
        }

        initList(appList) {
            // if (YYGSDK.isGamedistribution) {
            //     appList.visible = false;
            //     return;
            // }
            appList.renderHandler = new Laya.Handler(appList, function (e) {
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN, e, () => { platform.getInstance().navigate("GAME", "MORE", e.dataSource.id) });
            })
            appList.array = platform.getInstance().getForgames();
        }
        prompt(msg, duration) {
            if (!this.prompt_) {
                this.prompt_ = document.createElement('div');
                this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
                document.body.appendChild(this.prompt_);
            }
            this.prompt_.innerHTML = msg;
            duration = isNaN(duration) ? 2000 : duration;
            this.prompt_.style.display = "inline";
            this.prompt_.style.opacity = '1';
            setTimeout(function () {
                var d = 0.5;
                this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                this.prompt_.style.opacity = '0';
                this.prompt_.style.display = "none";
            }.bind(this), duration);
        }
        getForgames() {
            return [];
        }

        createLogo() {
            const yad = new Laya.Image();
            yad.skin = "yad.png";
            yad.zOder = 2e3;
            Laya.stage.addChild(yad);
            yad.on(Laya.Event.MOUSE_DOWN, yad, () => { platform.getInstance().navigate("GAME", "LOGO"); });
            return yad;
        }


        /**
         * 启动YAD——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        yadstartup(name, complete) {
            if (this.initialized_) return;
            window.WebAudioEngine.init().then(() => {
                Laya.SoundManager.playMusic = function (url) {
                    window.WebAudioEngine.playMusic(url);
                }
                Laya.SoundManager.playSound = function (url) {
                    window.WebAudioEngine.playSound(url);
                }
            })
            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json", Laya.Handler.create(this, (res) => {
                this.initialized_ = false;
                const gamemonetize = res["gamemonetize"];
                if (gamemonetize && gamemonetize.trim().length > 5) {
                    GamemonetizeAds = new GamemonetizeAdsInstance();
                    GamemonetizeAds.adsAsyncInit(name, YYG.ChannelType.YAD, gamemonetize).then(() => {
                        this.initialized_ = true;
                        complete && complete();
                    });
                } else {
                    YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                    let o = new YYG.Options();
                    o.gameNameId = name;
                    o.gamedistributionID = res["id"] || "";
                    YYGSDK.__init__(YYG.ChannelType.YAD, o);
                }

            }))
        }

        /**
         * 启动CARGAMES——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        cargamesstartup(name, complete) {
            if (this.initialized_) return;
            window.WebAudioEngine.init().then(() => {
                Laya.SoundManager.playMusic = function (url) {
                    window.WebAudioEngine.playMusic(url);
                }
                Laya.SoundManager.playSound = function (url) {
                    window.WebAudioEngine.playSound(url);
                }
            })

            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json", Laya.Handler.create(this, (res) => {
                this.initialized_ = false;
                const gamemonetize = res["gamemonetize"];
                if (gamemonetize && gamemonetize.trim().length > 5) {
                    this.initialized_ = true;
                    complete && complete();
                    // GamemonetizeAds = new GamemonetizeAdsInstance();
                    // GamemonetizeAds.adsAsyncInit(name, YYG.ChannelType.YAD, gamemonetize).then(() => {
                    //     this.initialized_ = true;
                    //     complete && complete();
                    // });
                } else {
                    this.initialized_ = true;
                    complete && complete();
                    // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                    // let o = new YYG.Options();
                    // o.gameNameId = name;
                    // o.gamedistributionID = res["id"] || "";
                    // YYGSDK.__init__(YYG.ChannelType.CARGAMES, o);
                }
            }))
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()
