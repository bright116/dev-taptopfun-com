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
            // if(YYGSDK.isGamedistribution){
            //     return;
            // }
            // if (this.canNavigateActive_) {
            //     YYGSDK.navigate(this.screen_, this.action_, this.to_);
            // }
            // this.canNavigateActive_ = false;
        }
    
        getStorageSync(key) {
            let value =null;
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

        onblur(){
            if(document && document.getElementsByTagName){
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = true;
                }
            }
        }

        onfocus(){
            if(document && document.getElementsByTagName){
                let audios = document.getElementsByTagName("audio") || [];
                for (let i = 0; i < audios.length; i++) {
                    audios[i].muted = false;
                }
            }
        }

        showInterstitial(complete) {
            // complete && complete();
            // return;
            console.log("请求插屏广告");

            // 展示插屏广告
            HUHU_showInterstitialAd();
        
            // 继续游戏
            complete && complete()
            return;
            // if(!this.initialized_){
            //     complete && complete();
            //     return;
            // }
           
            // this.onblur();
            // YYGSDK.showInterstitial(()=>{
            //     window.focus();
            //     this.onfocus();
            //     complete && complete();
            // });
        }
        showReward(success, failure) {
            // success && success() 
            // return;
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

        initList(appList){
            // if(YYGSDK.isGamedistribution){
            //     appList.visible = false;
            //     return;
            // }
            appList.renderHandler = new Laya.Handler(appList,function(e){
                e.offAll(Laya.Event.MOUSE_DOWN);
                e.on(Laya.Event.MOUSE_DOWN,e,()=>{platform.getInstance().navigate("GAME","MORE",e.dataSource.id)});
            })
            appList.array = platform.getInstance().getForgames();
        }
        prompt(msg,duration) {
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

        cargamesstartup(name, complete) {
            if (this.initialized_)
                return;
            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json",Laya.Handler.create(this,(res)=>{
                this.initialized_ = false;
                complete && complete(); complete = null; this.initialized_ = true;
                // YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                // let o = new YYG.Options();
                // o.gameNameId = name;
                // o.gamedistributionID = res["id"] || "";
                // YYGSDK.__init__(YYG.ChannelType.CARGAMES, o);
            }))
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()
