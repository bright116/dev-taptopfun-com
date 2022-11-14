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
            if(YYGSDK.isGamedistribution){
                return;
            }
            if (this.canNavigateActive_) {
                YYGSDK.navigate(this.screen_, this.action_, this.to_);
            }
            this.canNavigateActive_ = false;
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

        //插屏广告
        showInterstitial(complete) {
            
            if(!this.initialized_){
                complete && complete();
                return;
            }
           
            this.onblur();
            YYGSDK.showInterstitial(()=>{
                window.focus();
                this.onfocus();
                complete && complete();
            });
        }
        //复活
        showReward(success, failure) {
            // success && success() 
            // return;
            if(!this.initialized_){
                success && success();
                return;
            }
            this.onblur();
            YYGSDK.adsManager.request(YYG.TYPE.REWARD, YYG.EventHandler.create(this, () => {
                window.focus();
                this.onfocus();
                success && success();
                success = null;
            }), YYG.EventHandler.create(this, (event) => {
                window.focus();
                this.onfocus();
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
            let sforgames = YYGSDK.forgames || []
            // {
            //     thumb:"adsfafa.png"
            // }
            let forgames  = sforgames.slice();
            for (let i = 0, length = forgames.length; i < length; i++) {
                const random = Math.floor(Math.random() * (i + 1));
                const item = forgames[random];
                forgames[random] = forgames[i];
                forgames[i] = item;
            }
            return forgames;
        }

        /**
         * 启动YAD——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        startup(name, complete) {
            if (this.initialized_)
                return;
            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json",Laya.Handler.create(this,(res)=>{
                this.initialized_ = false;
                YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                let o = new YYG.Options();
                o.gameNameId = name;
                o.gamedistributionID = res["id"] || "";
                YYGSDK.__init__(YYG.ChannelType.YAD, o);
            }))
        }

        /**
         * 启动YAD——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        startup(name, complete) {
            if (this.initialized_)
                return;
            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json",Laya.Handler.create(this,(res)=>{
                this.initialized_ = false;
                YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                let o = new YYG.Options();
                o.gameNameId = name;
                o.gamedistributionID = res["id"] || "";
                YYGSDK.__init__(YYG.ChannelType.YAD, o);
            }))
        }

        /**
         * 启动CARGAMES——SDK
         * @param {*} name 
         * @param {*} complete 
         */
        cargamesstartup(name, complete) {
            if (this.initialized_)
                return;
            //临时锁死
            this.initialized_ = true;
            Laya.loader.create("cnf.json",Laya.Handler.create(this,(res)=>{
                this.initialized_ = false;
                YYGSDK.on(YYG.Event.YYGSDK_INITIALIZED, this, () => { complete && complete(); complete = null; this.initialized_ = true; });
                let o = new YYG.Options();
                o.gameNameId = name;
                o.gamedistributionID = res["id"] || "";
                YYGSDK.__init__(YYG.ChannelType.CARGAMES, o);
            }))
        }

        addLogo(){
            this.yad            = new Laya.Image();
            this.yad.skin       = "yad.png"
            this.yad.zOrder     = 1e3;
            this.yad.centerX    = 0;
            this.yad.top        = 10;
            Laya.stage.addChild(this.yad);
            this.yad.on(Laya.Event.MOUSE_DOWN,this,()=>{
                platform.getInstance().navigate("GAME","LOGO");
            })
        }

        removeLogo(){
            if(this.sideLogo){
                this.sideLogo.removeSelf();
            }
        }

        showGameList(){
            this.list = new Laya.List();
            Laya.stage.addChild(this.list);

            this.list.itemRender = Laya.Box;

            this.list.repeatX = 4;
            this.list.repeatY = 1;

            this.list.x = (Laya.stage.width - 400) / 2;
            this.list.y = (Laya.stage.height - 300 * this.list.repeatY) / 2;
            
            this.list.renderHandler = new Handler(this, this.updateItem);

            // 使用但隐藏滚动条
            // this.list.vScrollBarSkin = "";

            this.initList(this.list);
        }

        updateItem(cell, index) {
            cell.setImg(cell.dataSource);
        }
    }
    platform._instance = null;
    window["platform"] = platform;
}()
