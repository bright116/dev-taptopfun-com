!function(){
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
            if (this.canNavigateActive_) {
                YYGSDK.navigate(this.screen_, this.action_, this.to_);
            }
            this.canNavigateActive_ = false;
        }
    
        getStorageSync(key) {
            let v = Laya.LocalStorage.getItem(key);
            return JSON.parse(v);
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }
    
        navigate(screen_, action_, to_) {
            if(YYGSDK.isGamedistribution){ 
                return;
            }
            if (this.canNavigateActive_ === false) {
                this.screen_ = screen_;
                this.action_ = action_;
                this.to_ = to_;
                this.canNavigateActive_ = true;
            }
        }

        onblur(){
            if(document && document.getElementsByTagName){
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = true;
                }
            }
            Laya.SoundManager.muted = true;
            if(!AudioEngineInstance._ismute)
                AudioEngineInstance.pause();
        }

        onfocus(){
            if(document && document.getElementsByTagName){
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = false;
                }
            }
            Laya.SoundManager.muted = false;
            if(!AudioEngineInstance._ismute)
                AudioEngineInstance.resume();
        }

        showInterstitial(complete) {
            console.log("Show ad...");
            this.onblur();
            YYGSDK.showInterstitial(()=>{
                window.focus();
                this.onfocus();
                // Laya.SoundManager.setMusicVolume(musicVolume);
                complete && complete();
            });
        }
        showReward(success, failure) {
            // success && success();
            // return;
            this.onblur();
           
            YYGSDK.adsManager.request(YYG.TYPE.REWARD, YYG.EventHandler.create(this, () => {
                window.focus();
                this.onfocus();
                // Laya.SoundManager.setMusicVolume(musicVolume);
                success && success();
                success = null;
            }), YYG.EventHandler.create(this, (event) => {
                window.focus();
                this.onfocus();
                // Laya.SoundManager.setMusicVolume(musicVolume);
                if (failure) {
                    failure();
                    failure = null;
                }
                else {
                    if (event == YYG.Event.AD_SKIPPED) {
                        this.prompt("Failed to get the reward, please watch the ads to the end.");
                    }
                }
            }));
        }

        initList(appList){
            if(YYGSDK.isGamedistribution){ 
                appList.visible = false;
                return;
            }
            appList.renderHandler = new Laya.Handler(appList,function(e){
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN,e,()=>{platform.getInstance().navigate("GAME","MORE",e.dataSource.id)});
            })
            appList.array = platform.getInstance().getForgames();
        }
        prompt(msg,duration=2000) {
            if (!this.prompt_) {
                this.prompt_ = document.createElement('div');
                this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
                document.body.appendChild(this.prompt_);
            }
            this.prompt_.innerHTML   = msg;
            duration  = isNaN(duration) ? 2000 : duration;
            this.prompt_.style.display = "inline";
            this.prompt_.style.opacity = '1';
            setTimeout(function() {
                var d = 0.5;
                this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                this.prompt_.style.opacity = '0';
                this.prompt_.style.display = "none";
            }.bind(this), duration);
        }
        getForgames() {
            let forgames = YYGSDK.forgames.slice();
            for (let i = 0, length = forgames.length; i < length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                const item = forgames[random];
                forgames[random] = forgames[i];
                forgames[i] = item;
            }
            return forgames;
        }
        startup(name, gamedistribution = "", complete) {
            if (this.initialized_)
                return;
            YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
            let o = new YYG.Options();
            o.gameNameId = name;
            o.gamedistributionID = gamedistribution;
            YYGSDK.__init__(YYG.ChannelType.CARGAMES, o);
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()
