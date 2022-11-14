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
            this.sideLogo  = new Laya.Image();
            this.sideLogo.skin       = "yad.png"
            this.sideLogo.zOrder     = 1e3;
            this.sideLogo.centerX    = 0;
            // this.sideLogo.top        = 10;
            this.sideLogo.bottom     = 50;
            Laya.stage.addChild(this.sideLogo);
            this.sideLogo.on(Laya.Event.MOUSE_DOWN,this,()=>{
                platform.getInstance().navigate("GAME","LOGO");
            })
        }

        removeLogo(){
            if(this.sideLogo){
                this.sideLogo.removeSelf();
            }
        }

        addGameList(){

            var json = {
                "x":15,
                "type":"List",
                "searchKey":"List,appList",
                "props":{
                    //"y":Laya.stage.height - 180,
                    "y":10,
                    "x":Laya.stage.width/2,
                    "width":620,
                    "height":160,
                    "repeatX":3,
                    "repeatY":1,
                    "spaceX":5,
                    "anchorX":0.5,
                    "name":"appList",
                    "var":"appList"
                    },
                "nodeParent":2,
                "label":"appList",
                "isOpen":true,
                "isDirectory":true,
                "isAniNode":true,
                "hasChild":true,
                "compId":131,
                "child":[
                    {
                        "x":30,
                        "type":"Box",
                        "searchKey":"Box,render",
                        "props":{"width":200,"name":"render","height":150},
                        "nodeParent":131,
                        "label":"render",
                        "isOpen":true,
                        "isDirectory":true,
                        "isAniNode":false,
                        "hasChild":true,
                        "compId":132,
                        "child":[
                            {
                                "x":45,
                                "type":"Image",
                                "searchKey":"Image,thumb",
                                "props":{"top":0,"right":0,"name":"thumb","left":0,"bottom":0},
                                "nodeParent":132,
                                "label":"thumb",
                                "isDirectory":false,
                                "isAniNode":false,
                                "hasChild":false,
                                "compId":133,
                                "child":[
                                    ]
                            }]
                    }]
            }
            const prefab  = new Laya.Prefab();
            prefab.json   = json;
            if (this.appList == null) {
                this.appList = prefab.create();
                this.appList.zOrder = 10000;
                console.log("appList",this.appList);
                
    
                platform.getInstance().initList(this.appList);
            } 

            if (this.appList.parent == null) {
                Laya.stage.addChild(this.appList);
            }
            
           
        }

        removeGameList(){
            if (this.appList) {
                this.appList.removeSelf();
                this.appList = null;
            }
        }

        updateItem(cell, index) {
            cell.setImg(cell.dataSource);
        }

        
    }
    platform._instance = null;
    window["platform"] = platform;
}()
