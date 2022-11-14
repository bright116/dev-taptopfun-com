class windowlog{
    constructor(){
        this.instance=null;
    }
    static getInstance(){
        if(this.instance==null){
            
            this.instance=new windowlog();
        }
        
        return this.instance;

    }

    log(get,color,centerY){
       
        var a =new Laya.Label();
        Laya.stage.addChild(a);
        a.zOrder=3000;
        a.text=get;
        a.centerX=0;
        a.centerY=-50;
        a.fontSize=40;
        a.color="#FFFFFF"
        if(color!=undefined){
            a.color=color;
        }
        if(centerY!=undefined){
            a.centerY=centerY;
        }
        setTimeout(() => {
            a.destroy()

            
        }, 1500);
        return a;

    }




}
window.onerror=function(){
    return true;
}
class Gamecontroller{
    constructor(){
        this.instance=null
        this.gameList=null
    }
    static getInstance(){
        if(this.instance==null){
            this.instance=new Gamecontroller()
        }
        
        return this.instance;
    }
    ssrReward(succ){
        Gamecontroller.getInstance().stopGame();
        platform.getInstance().showReward(()=>{
           succ();
           windowlog.getInstance().log("Successfully To Get Award");
           Gamecontroller.getInstance().resumeGame();
        },()=>{
            windowlog.getInstance().log("No reward for ads skipped");
            Gamecontroller.getInstance().resumeGame();
        })
    }

    stopGame(){
        window.WebAudioEngine.stopAll()
        Laya.stage.renderingEnabled=false//停止渲染
        Laya.updateTimer.pause() //停止onUpdate
        Laya.physicsTimer.pause() //停止物理
    }
    resumeGame(url){
        if(url!=undefined){
            window.WebAudioEngine.playMusic(url)
        }
        Laya.stage.renderingEnabled=true//停止渲染
        Laya.updateTimer.resume() //停止onUpdate
        Laya.physicsTimer.resume() //停止物理

    }
    getGamelist(){
    
        if(this.gameList==null){
            this._creatgamelist();
        }
        return this.gameList;
    }

    _creatgamelist(){
        class Item extends Laya.Box{
            constructor(){
                super();
                var image=new Laya.Image();
                image.skin="";
                image.width=200;
                image.height=150;
                this.addChild(image);
                image.name="thumb";
                image.zOrder=1000
            }
        }
        this.gameList=new Laya.List();
        this.gameList.itemRender=Item;
        this.gameList.zOrder=3000;
        this.gameList.spaceX=20;
        this.gameList.spaceY=20;
        this.gameList.height=300;
        this.gameList.width=650;
        this.gameList.centerX=0;
        this.gameList.centerY=0;
        Laya.stage.addChild(this.gameList)
        this.gameList.visible=false


    }
}