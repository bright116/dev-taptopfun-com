!function () {
    "use strict";
    class e {
        constructor() {
            this._userData = null, this._userDataKey = "Hai-Challenge_PoleRun_api_secret", this.init();
        }
        init() {
            if (this._userData = {
                isPlaySound: !0,
                isPlayVibrate: !0,
                levelID: 0,
                signinTime: 0,
                skinTipsTime: 0
            }, this.readStorage(), this._userData.gameStatus || (this._userData.gameStatus = {}),
                this._userData.gameStatus.awardGold || (this._userData.gameStatus.awardGold = 0),
                this._userData.gameStatus.unlockCount || (this._userData.gameStatus.unlockCount = 0),
                this._userData.gameStatus.lastRegisterTime || (this._userData.gameStatus.lastRegisterTime = 0),
                !this._userData.gameStatus.skinArr) {
                this._userData.gameStatus.skinArr = [], this._userData.gameStatus.skinArr.length = 6;
                for (let e = 0; e < 6; ++e) this._userData.gameStatus.skinArr[e] = 0 == e;
            }
            if (!this._userData.gameStatus.registerArr) {
                this._userData.gameStatus.registerArr = [], this._userData.gameStatus.registerArr.length = 7;
                for (let e = 0; e < 7; ++e) this._userData.gameStatus.registerArr[e] = !1;
            }
            this._userData.gameStatus.skinId || (this._userData.gameStatus.skinId = 0), this._userData.userInfo || (this._userData.userInfo = {}),
                this._userData.userInfo.gold || (this._userData.userInfo.gold = 0), this._userData.gameStatus.level || (this._userData.gameStatus.level = 1),
                this.writeStorage(), this.setRegisterTime();
        }
        readStorage() {
            let e = Laya.LocalStorage.getItem(this._userDataKey);
            e && (this._userData = JSON.parse(e));
        }
        writeStorage() {
            this._userData && Laya.LocalStorage.setItem(this._userDataKey, JSON.stringify(this._userData));
        }
        clearStorage() {
            Laya.LocalStorage.removeItem(this._userDataKey);
        }
        isPlaySound() {
            return this._userData.isPlaySound;
        }
        setPlaySound(e) {
            this._userData.isPlaySound = e, this.writeStorage();
            window.WebAudioEngine.pause = !e;
        }
        isPlayVibrate() {
            return this._userData.isPlayVibrate;
        }
        setPlayVibrate(e) {
            this._userData.isPlayVibrate = e, this.writeStorage();
        }
        setSkinTips(e) {
            this._userData.skinTipsTime = e ? 0 : Math.floor(Date.parse(new Date().toString()) / 1e3),
                this.writeStorage();
        }
        isSkinTips(e) {
            return Math.floor(this._userData.projectData.lastTime / 864e5) != Math.floor(e / 864e5);
        }
        get userInfo() {
            return this._userData.userInfo;
        }
        get unlockSkinData() {
            return this._userData.userInfo.skin;
        }
        unlockSkin(e) {
            this._userData.gameStatus.skinArr[e] || (this._userData.gameStatus.skinArr[e] = !0,
                this._userData.gameStatus.unlockCount++, this.writeStorage());
        }
        getUnlockCount() {
            return this._userData.gameStatus.unlockCount;
        }
        setSkinId(e) {
            this._userData.gameStatus.skinId = e, this.writeStorage();
        }
        getSkinId() {
            return this._userData.gameStatus.skinId;
        }
        getSkinArr() {
            return this._userData.gameStatus.skinArr;
        }
        isUnlockSkin(e, t) {
            return -1 != e.indexOf(t);
        }
        get gameStatus() {
            return this._userData.gameStatus;
        }
        get projectData() {
            return this._userData.projectData;
        }
        setGameStausLevel(e) {
            this._userData.gameStatus.level = e, zs.laya.WebService.updatePlayerInfo({
                user_id: this._userData.userInfo.user_id,
                level_id: e
            }), this.writeStorage();
        }
        setAwardGold(e) {
            this._userData.gameStatus.awardGold = e, zs.laya.WebService.updatePlayerInfo({
                user_id: this._userData.userInfo.user_id,
                gold: this._userData.gameStatus.awardGold
            }), this.writeStorage();
        }
        get awardGold() {
            return this._userData.gameStatus.awardGold;
        }
        setRegisterTime() {
            let e = new Date().valueOf() / 1e3, t = this.getLastRegisterTime();
            Math.floor(e / 86400) > Math.floor(t / 86400) && this.setRegisterSingle(!1);
        }
        setRegisterSingle(e) {
            this._userData.gameStatus.isRegister = e, this.writeStorage();
        }
        getRegisterSingle() {
            return this._userData.gameStatus.isRegister;
        }
        getRegisterArr() {
            return this._userData.gameStatus.registerArr;
        }
        setRegisterArr(e, t) {
            this._userData.gameStatus.registerArr[e] = t, this.writeStorage();
        }
        getLastRegisterTime() {
            return this._userData.gameStatus.lastRegisterTime;
        }
        setLastRegisterTime(e) {
            this._userData.gameStatus.lastRegisterTime = e, this.writeStorage();
        }
    }
    class t {
        constructor() {
            this.loadCfgList = [{
                path: "jsonConfig/LevelCfg.json",
                tag: "LevelCfg"
            }], this.skinCfg = [];
        }
        getLevelCfg() {
            return this.levelCfg;
        }
        init(e) {
            this.glEvent = e, this.loadCfgList.forEach(e => {
                this.loadJson(e);
            });
        }
        loadJson(e) {
            let t = this;
            Laya.loader.load(e.path, Laya.Handler.create(this, function (i) {
                t.onLoadJson(i, e.tag);
            }), null, Laya.Loader.JSON);
        }
        onLoadJson(e, t) {
            switch (t) {
                case "LevelCfg":
                    this.levelCfg = e;
            }
            null != e && this.glEvent.event("load_finish_event", {
                target: t
            });
        }
        getSkinCfg() {
            return this.skinCfg;
        }
        getSkinByIndex(e) {
            return this.skinCfg[e];
        }
        getSkinIndexById(e) {
            for (let t = 0, i = this.skinCfg.length; t < i; ++t) if (e == this.skinCfg[t].id) return t;
            return -1;
        }
    }
    class i {
        constructor() {
            this._bgmCtx = null, this.isInit = !1, this.isFire = !1, this._pathRoot = "res/music/",
                this._soundCtx = {}, this._soundFile = ["bg1", "bg2", "bg3", "fail", "victory",
                    "button", "eatDimond", "jiandao", "skinRan", "cut", "dead", "rotate", "broke", "fall", "circle", "endBroke"];
        }
        init() {
            let e = this._pathRoot, t = "", i = this._soundFile, a = this._soundFile.length;
            this.isInit = !0;
            for (let s = 0; s < a; ++s) {
                t = i[s];
                let a = new Laya.SoundChannel();
                a.url = e + t + ".mp3", "poleRotate" == t && (a.loops = 0), Laya.SoundManager.addChannel(a),
                    this._soundCtx[t] = !0;
            }
            Laya.stage.on("DEVICE_ON_HIDE", this, this.onAppHide), Laya.stage.on("DEVICE_ON_SHOW", this, this.onAppShow);
        }
        onAppHide() {
            this.stopBGM();
        }
        onAppShow() {
            this.playBGM();
        }
        play(e) {
            this._soundCtx[e] && L.storageMgr.isPlaySound() && Laya.SoundManager.playSound(this._pathRoot + e + ".mp3");
        }
        stop(e) {
            this._soundCtx[e] && Laya.SoundManager.stopSound(this._pathRoot + e + ".mp3");
        }
        stopAll() {
            Laya.SoundManager.stopAll();
        }
        playBGM() {
            if (!L.storageMgr.isPlaySound() || !this.isInit) return;
            let e = this._pathRoot + "bg" + (Math.floor(3 * Math.random()) + 1) + ".mp3";
            // L.gameData.freeSkinId > -1 && (e = this._pathRoot + "skin" + L.gameData.freeSkinId + ".mp3"),
            Laya.Browser.onWeiXin ? (null != this._bgmCtx && (this._bgmCtx.stop(), this._bgmCtx.destroy(),
                this._bgmCtx = null), this._bgmCtx = wx.createInnerAudioContext(), this._bgmCtx.src = e,
                this._bgmCtx.loop = !0, L.storageMgr.isPlaySound() && this._bgmCtx.play()) : (Laya.SoundManager.stopMusic(),
                    Laya.SoundManager.playMusic(e, 0));
        }
        stopBGM() {
            Laya.Browser.onWeiXin ? null != this._bgmCtx && this._bgmCtx.stop() : Laya.SoundManager.stopMusic();
        }
    }
    class a {
        constructor() {
            this.shareStartTime = 0;
        }
        init() {
            Laya.stage.on("DEVICE_ON_HIDE", this, this.onHideEvent), Laya.stage.on("DEVICE_ON_SHOW", this, this.onShowEvent);
        }
        showToast(e, t) {

        }
        openShare(e = null, t = null, i = null) {
            Laya.Browser.onWeiXin ? (this.shareStartTime = new Date().getTime(), this.successShareCallback = e,
                this.failShareCallback = new Laya.Handler(this, this.shareFailTips), zs.laya.sdk.SdkService.openShare(zs.laya.platform.ADConfig.zs_share_title, zs.laya.platform.ADConfig.zs_share_image)) : i && i.run();
        }
        onHideEvent(e) { }
        onShowEvent(e) {
            !(new Date().getTime() - this.shareStartTime < 2e3 * Math.random() + 2e3) ? this.successShareCallback && this.successShareCallback.run() : this.failShareCallback && this.failShareCallback.run(),
                this.failShareCallback = null, this.successShareCallback = null, this.shareStartTime = new Date().getTime() + 86e3;
        }
        shareFailTips() {
            let e = "分享失败，分享到不同的群", t = 3 * Math.random();
            0 < t && t < 1 ? e = "分享失败，分享大于10人的群" : 1 <= t && t < 2 ? e = "分享失败，分享给不同的人" : 2 <= t && t < 3 && (e = "分享失败，等一下再分享"),
                this.showToast(e, 1200);
        }
    }
    class s {
        constructor() {
            this.modelPrefabs = {}, this.resource = [{
                url: "res/scene/LayaScene_Scene/Conventional/Scene.ls",
                clas: Laya.Scene,
                priority: 1
            }], this.sceneID = 0, this.isLoad = !1, this.loadingScene = !1;
        }
        init(e) {
            platform.getInstance().yadstartup("Hair-Challenge", () => {
                platform.getInstance().showSplash();
                this.glEvent = e, (this.loadRes(), L.soundMgr.init());
            })
        }
        loadSubpackage(e, t, i) {
            Laya.Browser.onWeiXin && wx.loadSubpackage({
                name: e,
                success: function (a) {
                    console.log("分包加载成功 " + e), i.call(t, a, !0);
                },
                fail: function (a) {
                    console.error("分包加载失败 " + e), i.call(t, a, !1);
                }
            });
        }
        loadRes() {
            Laya.loader.create(this.resource, Laya.Handler.create(this, this.onLoadFinish, null, !1), Laya.Handler.create(this, this.onLoading, null, !1)),
                Laya.loader.on(Laya.Event.ERROR, this, e => { });
        }
        onLoadFinish(e) {
            if (e || (e = !0), e) {
                if (this.isLoad) return;
                this.isLoad = !0, L.glEvent.event("load_finish_event", {
                    target: "3dres"
                }), this.onSceneEvent(e);
            }
        }
        onLoading(e) {
            L.glEvent.event("load_pass_event", e);
        }
        isLoadingScene() {
            return this.loadingScene;
        }
        onSceneEvent(e) {
            this.loadingScene = !1, e && this.onScenes();
        }
        onScenes() {
            if (this.resource) {
                let e = Laya.loader.getRes(this.resource[0].url);
                Laya.stage.addChild(e), Laya.stage.setChildIndex(e, 0), this.mainScene = e, this.mainCamera = e.getChildByName("Main Camera"),
                    L.gameMgr.init();
            } else console.error("res cfg is null.");
        }
    }
    class o extends Laya.Script {
        constructor() {
            super(...arguments), this.type = 0, this.oriAngle = null, this.isMove = !1, this.delta = 20,
                this.angle = 0, this.addAngle = .15, this.angle4 = 0, this.moveValue = 0;
        }
        init(e, t) {
            this.single = e, this.type = t, this.oriAngle = this.single.transform.localRotationEuler.clone(),
                3 == t && (this.upSp = this.single.getChildAt(0).getChildAt(0), this.downSp = this.single.getChildAt(0).getChildAt(1));
        }
        clear() {
            this.single.active = !1, this.isMove = !1, Laya.Tween.clearAll(this), 3 == this.type && (this.angle = 0,
                this.upSp.transform.localRotationEulerX = this.angle, this.downSp.transform.localRotationEulerX = -this.angle),
                this.single.transform.localRotationEuler = this.oriAngle.clone(), this.single.removeSelf();
        }
        onUpdate() {
            this.delta = Laya.timer.delta, this.delta > 50 && (this.delta = 20), this.isMove && (3 == this.type && this.playMove3(),
                4 == this.type && this.playMove4(), 52 == this.type && this.playMove52());
        }
        playMove3() {
            this.angle += this.addAngle * this.delta, this.angle > 35 ? this.addAngle = -.15 : this.angle < 0 && (this.addAngle = .15),
                this.upSp.transform.localRotationEulerZ = -this.angle, this.downSp.transform.localRotationEulerZ = this.angle;
        }
        playMove4() {
            this.angle4 += this.addAngle * this.delta, this.single.transform.localRotationEulerY = this.angle4;
        }
        playMove52() {
            this.angle4 += this.addAngle * this.delta;
            for (let e = 2; e < 8; ++e) {
                this.single.getChildAt(e).transform.localRotationEulerY = 15 * e + this.angle4;
            }
        }
        shearsMoveAway() {
            let e = this.single.transform.position.clone(), t = new Laya.Vector3(15 * e.x, e.y + 2, e.z + 10), i = e.clone();
            Laya.Vector3.lerp(e, t, .5, i), i.y += 1, this.moveValue = 0, Laya.Tween.to(this, {
                moveValue: 1
            }, 1e3, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                this.clear();
            })).update = new Laya.Handler(this, function () {
                let a = L.utils.calculatePos(this.moveValue, e, i, t);
                this.single.transform.position = a.clone();
                let s = this.moveValue + 1;
                this.single.transform.localRotationEulerZ += 5 * s;
            });
        }
    }
    class n extends Laya.Script {
        constructor() {
            super(...arguments), this.isMove = !1, this.speed = 3, this.playerState = 0, this.hairLen = 10,
                this.hairLevel = 0, this.isUserHair = !1, this.lastIndex = -1, this.skinId = -1,
                this.colorArr = [1, 211 / 255, 135 / 255, 50 / 255, 190 / 255, 1, 184 / 255, 112 / 255, 1, 158 / 255, 238 / 255, 52 / 255, 0, 0, 0, 241 / 255, 61 / 255, 240 / 255],
                this.aniState = 0, this.speedMul = 1, this.speedTouch = 1, this.lastTimeA = 0, this.addCount = 0,
                this.lastTimeS = 0, this.subCount = 0, this.oriPos = null, this.oriAngle = null,
                this.movev = 0, this.isUpChair = !1, this.isNearChair = !1, this.isChairRevert = !1,
                this.isModelDown = !1, this.downValue = 0, this.speedV = 0, this.delta = 20, this.addTouchCount = 0,
                this.speedRan = 2, this.isTouchAdd = !1, this.isStop = !1, this.bodyLen = .2, this.isDown = !1,
                this.isUp = !1, this.dropSpeed = 1, this.upSpeed = 8, this.lastPos = new Laya.Vector3(0, 0, -1),
                this.endState = 0, this.isStartUp = !1, this.upShakeTime = 0, this.musiccount = 0,
                this.mAssAniCutTime = 0, this.mValue = 0, this.mCutAresType = 0, this.mAssAniTime = 0,
                this.mAssAni = !1, this.aniArr = ["change", "rollChange", "rotateChange", "runChange", "victoryChange", "sitChange", "longChange"],
                this.aniType = 0;
        }
        init(e, t = 0) {
            this.single = e, this.oriPos = this.single.transform.position.clone(), this.oriAngle = this.single.transform.rotation.clone(),
                this.animation = this.single.getComponent(Laya.Animator), this.playAnimation(1),
                this.animation.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                this.animation.getControllerLayer(1).defaultWeight = 1, this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                this.animation.play("change", 1, 0), this.mAssAniCutTime = 0, this.hairLevel = 0,
                this.crown = this.single.getChildByName("crown"), this.crown.active = !1, this.single.getChildByName("eye_base_old").active = !1,
                this.setHairMat(0), this.setHairShow(!1), this.setShowUpEffect(!1), this.showChangeEffect(!1),
                this.single.getChildByName("toufa").active = !1;
        }
        setHairShow(e) {
            this.single.getChildByName("hair_L").active = e;
        }
        setHairMat(e) {
            // if (this.isUserHair) return;
            if (e == this.lastIndex) return;
            this.lastIndex = e, this.isMove && this.showChangeEffect(!0);
            let t = this.single.getChildByName("hair_F"), i = this.single.getChildByName("hair_L"), a = this.single.getChildByName("hair_S");
            t._render.material = L.gameMgr.roleMatArr[e], i._render.material = L.gameMgr.roleMatArr[e],
                a._render.material = L.gameMgr.roleMatArr[e]//, this.changePropColor(e);
        }
        setEndHair() {
            let e = this.single.getChildByName("toufa");
            e.getChildAt(0)._render.material = L.gameMgr.roleMatArr[this.lastIndex], e.getChildAt(1)._render.material = L.gameMgr.roleBodyArr[this.skinId];
        }
        changePropColor(e) {
            if (L.gameMgr.obstacleLg) {
                let t = L.gameMgr.obstacleLg.daojuArr;
                for (let i = 0; i < t.length; ++i) {
                    if (5 == t[i].type && t[i].isActive) {
                        t[i].item._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1);
                    }
                    if (51 == t[i].type && t[i].isActive) for (let a = 0; a < t[i].item.numChildren; ++a) {
                        let s = t[i].item.getChildAt(a);
                        "prop5" == s.name && (s._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1));
                    }
                }
            }
        }
        playAnimation(e) {
            switch (this.aniState = e, e) {
                case 1:
                    this.animation.play("idle", 0, 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 0;
                    break;

                case 2:
                    this.animation.play("walk", 0, 0), this.aniType = 0;
                    let t = 1.5 * this.speedMul;
                    t > 2.2 && (t = 2.2), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = t;
                    break;

                case 3:
                    this.animation.play("rotate", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = .5,
                        this.aniType = 2;
                    break;

                case 4:
                    let i = .3 * this.speedTouch * this.speedMul;
                    i > 1.5 && (i = 1.5), this.animation.play("roll", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = i,
                        this.aniType = 1;
                    break;

                case 5:
                    this.animation.play("victory", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 4;
                    break;

                case 6:
                    let a = this.speedTouch * this.speedMul;
                    a > 3 && (a = 3), this.animation.play("run", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = a,
                        this.aniType = 3;
                    break;

                case 7:
                    this.animation.play("sit", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 5;
                    break;

                case 8:
                    this.animation.play("endLong1", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 6;
            }
        }
        addSpeed(e, t, i = !1) {
            let a = new Date().valueOf();
            if (this.subCount = 0, a - this.lastTimeA > 800 && (this.addCount = 0), a - this.lastTimeA > t) {
                this.lastTimeA = a, this.hairLevel += e, this.hairLevel > 20 && (this.hairLevel = 20),
                    this.setAniTime(), this.speedMul = 1 + .1 * Math.floor(this.hairLevel / 1.5);
                let t = 1.5 * this.speedMul;
                if (t > 2.2 && (t = 2.2), 2 == this.aniState && (this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = t),
                    i) {
                    L.gameMgr.playVibrate(!0);
                    let e = this.single.transform.position.clone();
                    e.y += 1, this.addCount++, L.commonData.GGame.showAddUi2(e, "1", !1);
                }
            }
        }
        subSpeed(e, t, i = !1) {
            let a = new Date().valueOf();
            if (this.addCount = 0, a - this.lastTimeS > 800 && (this.subCount = 0), a - this.lastTimeS > t) {
                this.lastTimeS = a, this.hairLevel -= e, this.hairLevel < 0 && (this.hairLevel = 0);
                let t = this.single.transform.position.clone();
                t = new Laya.Vector3(t.x, t.y + 1.266, t.z - .23), L.gameMgr.effectMgr.playEffect(1, t.clone(), this.single),
                    this.setAniTime(), this.speedMul = 1 + .1 * Math.floor(this.hairLevel / 1.5);
                let s = 1.5 * this.speedMul;
                if (s > 2.2 && (s = 2.2), 2 == this.aniState && (this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = s),
                    i) {
                    L.soundMgr.play("cut"), L.gameMgr.playVibrate(!0);
                    let e = this.single.transform.position.clone();
                    e.y += 1, this.subCount++, L.commonData.GGame.showAddUi2(e, "1", !0);
                }
            }
        }
        setMove(e) {
            this.isMove = e, this.isMove && this.playAnimation(2);
        }
        reset() {
            this.speedMul = 1, this.isTouchAdd = !1, this.speedTouch = 1, this.isStop = !1,
                this.endState = 0, this.musiccount = 0, this.isUpChair = !1, this.isNearChair = !1,
                this.isModelDown = !1, this.isChairRevert = !1, Laya.Tween.clearAll(this), this.setShowUpEffect(!1),
                this.showChangeEffect(!1), this.single.getChildByName("toufa").active = !1, this.single.getChildByName("hair_L").active = !0,
                this.single.getChildByName("fashi_01").active = !0, this.crown.active = !1, this.single.transform.position = this.oriPos.clone(),
                this.single.transform.rotation = this.oriAngle.clone(), this.single.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[0],
                this.single.getChildByName("fashi_02")._render.material = L.gameMgr.roleBodyArr[0],
                this.isUserHair = !1, this.setHairMat(0), this.playAnimation(1), this.addTouchCount = 0,
                this.lastPos = new Laya.Vector3(0, 0, -1), this.animation.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                this.animation.getControllerLayer(1).defaultWeight = 1, this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                this.animation.play("change", 1, 0), this.mAssAniCutTime = 0, this.hairLevel = 0,
                this.mValue = 0, this.mCutAresType = 0, this.mAssAniTime = 0, this.mAssAni = !1,
                this.setHairShow(!1);
        }
        lateGameOver() { }
        crownAni() {
            let e = this.single.transform.position.clone(), t = !1;
            if (e.z < L.gameMgr.groundMgr.endPos1) {
                let i = L.gameMgr.aiMgr.aiArr[0].item.transform.position.z, a = 0;
                L.gameMgr.aiMgr.aiArr.length > 1 && (a = L.gameMgr.aiMgr.aiArr[1].item.transform.position.z),
                    e.z > i && e.z > a && (t = !0);
            }
            this.crown.active = t, this.movev += .06, this.crown.transform.localRotationEulerY += Laya.timer.delta / 25,
                this.crown.transform.localPosition = new Laya.Vector3(0, 1.63 + .05 * Math.sin(this.movev), 0);
        }
        setPlayerMove(e) {
            if (this.isUpChair || this.isNearChair) {
                if (this.isUpChair) {
                    e *= .3, this.isChairRevert && (e = 0), this.single.transform.localRotationEulerZ += e;
                    let t = this.single.transform.position.clone(), i = -this.single.transform.localRotationEulerZ / 180 * Math.PI, a = .5 * Math.sin(i), s = .5 * Math.cos(i);
                    this.single.transform.position = new Laya.Vector3(a, s - .5 + this.lastPos.y, t.z);
                }
            } else {
                let t = this.single.transform.position.clone();
                if (t.z > L.gameMgr.groundMgr.endPos1) return;
                e = .007 * -e;
                let i = t.x + e;
                i < -.85 && (i = -.85), i > .85 && (i = .85), this.single.transform.position = new Laya.Vector3(i, t.y, t.z);
            }
        }
        setChairState(e, t) {
            let i = e - this.single.transform.position.z;
            if (i > .5 && i < 1) this.isNearChair = !0; else if (i <= .5 && i > -.2) {
                this.isNearChair = !1, this.isUpChair = !0, this.playAnimation(7);
                let e = this.single.transform.position.clone();
                this.single.transform.position = new Laya.Vector3(0, e.y, e.z), this.single.addChild(t),
                    t.transform.localPosition = new Laya.Vector3(0, 0, 0);
            }
        }
        setZhuziState(e) {
            let t = this.single.transform.position.z - e;
            if (t > -.1 && t < 1) {
                this.isUpChair = !1, this.isNearChair = !1, this.isChairRevert = !1, this.single.getChildByName("prop8").active = !1,
                    this.single.getChildByName("prop8").removeSelf();
                let e = this.single.transform.position.clone(), t = 0, i = .5 * Math.sin(t), a = .5 * Math.cos(t);
                this.single.transform.position = new Laya.Vector3(i, a - .5 + this.lastPos.y, e.z);
            } else t > -2 && (this.isChairRevert = !0);
        }
        setDownModel(e, t) {
            let i = this.single.transform.position.z - e;
            i > -5 && i < -3 && (this.isModelDown = !0, this.modelDownAni(t));
        }
        modelDownAni(e) {
            let t = e.transform.position.clone();
            this.downValue = t.y, e.getChildByName("banzi_02").active = !1, Laya.Tween.to(this, {
                downValue: t.y - 3
            }, 500, Laya.Ease.elasticInOut, new Laya.Handler(this, function () {
                this.isModelDown = !1;
            })).update = new Laya.Handler(this, function () {
                e.transform.position = new Laya.Vector3(t.x, this.downValue, t.z);
            });
        }
        calculateProp() {
            let e = L.gameMgr.obstacleLg.daojuArr, t = this.single.transform.position.clone();
            for (let i = 0; i < e.length; ++i) {
                let a = e[i];
                if (a.isActive && a.item.active) {
                    if (8 == a.type) {
                        this.isUpChair || this.setChairState(a.item.transform.position.z, a.item);
                        continue;
                    }
                    if (7 == a.type) {
                        this.isUpChair && this.setZhuziState(a.item.transform.position.z + a.item.transform.localScale.z);
                        continue;
                    }
                    if (a.type > 50) {
                        let e = a.item.transform.position.clone();
                        !this.isModelDown && e.y > t.y + 1 && this.setDownModel(e.z, a.item);
                    }
                    let e = Math.floor(a.type / 10), s = a.item.getChildByName("Cube"), n = s.transform.position.clone(), r = n.z - t.z;
                    if (r < -10) {
                        L.gameMgr.obstacleLg.daojuArr[i].isActive = !1, a.item.getComponent(o).clear();
                        continue;
                    }
                    if (L.utils.pointInBox(t, s, a.scale)) {
                        console.log(Math.abs(n.x) < 1.2 && (Math.abs(r) < 6 && e > 0 || Math.abs(r) < 2 && 0 == e))
                    }
                    if (Math.abs(n.x) < 1.2 && (Math.abs(r) < 6 && e > 0 || Math.abs(r) < 2 && 0 == e) && L.utils.pointInBox(t, s, a.scale)) switch (e) {
                        case 0:
                            L.gameMgr.obstacleLg.daojuArr[i].isActive = !1, this.calculateProp0(a.item, a.type);
                            break;

                        case 1:
                            this.calculateProp1(a.item, a.type);
                            break;

                        case 2:
                            this.calculateProp2(a.item, a.type);
                            break;

                        case 3:
                            this.calculateProp3(a.item, a.type);
                            break;

                        case 4:
                            this.calculateProp4(a.item, a.type);
                            break;

                        case 5:
                            this.calculateProp5(a.item, a.type);
                    }
                }
            }
        }
        addStar() {
            let e = this.single.transform.position.clone();
            e.y += 1, L.commonData.GGame.showAddUi(e.clone(), 4), L.gameMgr.playVibrate(!0),
                L.soundMgr.play("eatDimond");
        }
        setSpeed() {
            this.speedV = 3, this.speed = 1.5, Laya.Tween.to(this, {
                speed: this.speedV
            }, 500, Laya.Ease.quintInOut);
        }
        calculateProp0(e, t) {
            let i = e.transform.position.clone();
            switch (t) {
                case 1:
                    e.active = !1, this.setSpeed(), L.gameMgr.cameraLg.setShake(!0), L.gameMgr.effectMgr.playEffect3(3, i.clone()),
                        L.soundMgr.play("broke"), L.gameMgr.playVibrate(!0);
                    break;

                case 2:
                    break;

                case 3:
                    this.subSpeed(4, 0), L.gameMgr.playVibrate(!0);
                    let a = this.single.transform.position.clone();
                    a.y += 1, L.commonData.GGame.showAddUi2(a, "4", !0), L.soundMgr.play("jiandao"),
                        e.getComponent(o).shearsMoveAway();
                    break;

                case 4:
                    e.active = !1, i.y += .3, L.gameMgr.effectMgr.playEffect(2, i.clone()), this.addStar();
                    break;

                case 5:
                    e.active = !1, this.addSpeed(1, 0, !0), L.gameMgr.playVibrate(!0);
                    break;

                case 6:
                    e.active = !1, i.y += .3, L.gameMgr.effectMgr.playEffect(5, i.clone()), L.commonData.GGame.showGoldAni(),
                        L.soundMgr.play("circle"), L.gameMgr.playVibrate(!0);
            }
        }
        calculateProp1(e, t) {
            this.setHairMat(5);
        }
        calculateProp2(e, t) { }
        calculateProp3(e, t) {
            this.setHairMat(4);
        }
        calculateProp4(e, t) {
            this.setHairMat(2);
        }
        calculateProp5(e, t) {
            let i = this.single.transform.position.clone();
            for (let t = 0; t < e.numChildren; ++t) {
                let a = e.getChildAt(t);
                if ("prop5" == a.name && a.active) {
                    let e = a.transform.position.clone(), t = i.x - e.x, s = i.y - e.y, o = i.z - e.z;
                    t * t + s * s + o * o < .1 && (a.active = !1, this.addSpeed(1, 0, !0));
                } else if ("prop4" == a.name && a.active) {
                    let e = a.transform.position.clone(), t = i.x - e.x, s = (i.y, e.y, i.z - e.z);
                    t * t + s * s < .2 && (a.active = !1, e.y += .3, L.gameMgr.effectMgr.playEffect(2, e.clone()),
                        this.addStar());
                }
            }
        }
        onUpdate() {
            this.delta = Laya.timer.delta, this.delta > 50 && (this.delta = 20), this.isMove && (this.playMove(),
                this.crownAni(), this.single.transform.position.z < L.gameMgr.groundMgr.endPos1 && this.calculateProp(),
                this.mAssAni && this.ArseAniEnd());
        }
        gameVictory() {
            L.gameMgr.isVictory = !0, L.soundMgr.stopBGM(), L.soundMgr.play("victory"), L.gameMgr.cameraLg.showEndEff(!0),
                Laya.timer.once(3e3, this, function () {
                    L.gameData.gameCoin += 10 * (.5 * L.gameMgr.cameraLg.arrCount + .5), L.gameMgr.gameOver(),
                        L.gameMgr.cameraLg.showEndEff(!1);
                });
        }
        gameFail() {
            this.isMove = !1, L.soundMgr.stopBGM(), L.soundMgr.play("dead"), L.soundMgr.play("fail"),
                L.gameMgr.isVictory = !1, L.gameMgr.gameOver();
        }
        playMove() {
            this.calculateNextPos();
        }
        setTouchSpeed() { }
        calculateNextPos() {
            let e = this.single.transform.position.clone(), t = e.z + this.speed * this.delta / 1e3 * this.speedMul * this.speedTouch, i = L.gameMgr.groundMgr.routeUpArr, a = L.gameMgr.groundMgr.routeDownArr;
            (L.gameMgr.isTouchDown && this.hairLevel > 0 || this.isStartUp) && this.isUp ? (this.upShake(),
                this.dropSpeed = 1, this.subSpeed(.4, 200), e.y += this.upSpeed * this.delta / 1e3,
                3 != this.aniState && this.playAnimation(3)) : !this.isDown || this.isNearChair || this.isUpChair ? (this.dropSpeed = 1,
                    2 != this.aniState && e.z < L.gameMgr.groundMgr.endPos1 && !this.isUpChair && this.playAnimation(2)) : (e.y -= this.dropSpeed * this.delta / 1e3,
                        this.dropSpeed += .2, 2 != this.aniState && e.z < L.gameMgr.groundMgr.endPos1 && this.playAnimation(2));
            let s = e.clone(), o = !0;
            if (this.isDown = !1, s.z < L.gameMgr.groundMgr.endPos1 && !this.isNearChair && !this.isUpChair) for (let a = 0; a < i.length; ++a) {
                let n = i[a];
                if (e.z <= n.offz - this.bodyLen) {
                    if (t > n.offz - this.bodyLen && t < n.offz + n.length + this.bodyLen && e.y > n.height - 1) {
                        this.isDown = !1, e.y > n.height ? (s.y = e.y, s.z = t, this.isDown = !0) : e.y > n.height - .1 ? (s.y = n.height,
                            s.z = t) : (this.isDown = !0, s.y = e.y, s.z = n.offz - this.bodyLen), o = !1;
                        break;
                    }
                } else if (e.z > n.offz - this.bodyLen && e.z < n.offz + n.length + this.bodyLen && e.y > n.height - 1 && t > n.offz - this.bodyLen && t < n.offz + n.length + this.bodyLen && e.y > n.height - 1) {
                    e.y > n.height ? (this.isDown = !0, s.y = e.y, s.z = t) : (this.isDown = !1, s.y = n.height,
                        s.z = t), o = !1;
                    break;
                }
            } else s.z = t;
            if (o) for (let i = 0; i < a.length; ++i) {
                let o = a[i];
                if (e.z < o.offz && i > 0) {
                    let n = a[i - 1];
                    e.z < n.offz + n.length + this.bodyLen ? (s.z = t, s.y = Math.max(e.y, n.height),
                        this.isDown = !0, e.y < n.height && (this.dropSpeed = 1)) : t < o.offz - this.bodyLen ? (this.isDown = !0,
                            s.z = t, s.y = e.y) : e.y < o.height - .1 ? (this.isDown = !0, s.z = o.offz - this.bodyLen,
                                s.y = e.y) : (this.isDown = !1, s.z = t, s.y = e.y);
                    break;
                }
                i == a.length - 1 && e.z < o.offz + o.length && (this.isDown = !1, s.z = t, s.y = 0,
                    e.z, o.offz, o.length);
            }
            if ((s.z > L.gameMgr.groundMgr.endPos1 || this.isNearChair) && (s.x *= .9, this.isDown = !1,
                this.single.transform.localRotationEulerY *= .9), this.single.transform.position = s.clone(),
                this.isUpChair || this.isNearChair) {
                if (this.isChairRevert) this.single.transform.localRotationEulerZ *= .85, this.setPlayerMove(0); else if (this.isUpChair) {
                    let e = this.single.transform.localRotationEulerZ;
                    Math.abs(e) < 2 && (e = Math.random() > .5 ? 2.01 : -2.01), e *= 1.02, this.single.transform.localRotationEulerZ = e,
                        Math.abs(e) > 90 && this.gameFail();
                }
            } else this.single.transform.localRotationEulerZ *= .97, this.lastPos.y = s.y, this.single.transform.lookAt(this.lastPos, new Laya.Vector3(0, 1, 0), !1),
                Laya.Vector3.lerp(this.lastPos, s, .1, this.lastPos);
            if (s.z > L.gameMgr.groundMgr.endPos1 && s.z < L.gameMgr.groundMgr.endPos2 && !this.isTouchAdd && (this.isTouchAdd = !0,
                L.gameMgr.aiMgr.hideAi(), L.gameMgr.obstacleLg.resetData()), s.z > L.gameMgr.groundMgr.endPos2 && this.isStop,
                s.z > L.gameMgr.groundMgr.endPos2 - 8 && L.gameMgr.cameraLg.isMove && L.gameMgr.cameraLg.endMove(),
                0 == this.endState && s.z > L.gameMgr.groundMgr.endPos2 - 4) {
                this.endState = 1, this.single.transform.position = new Laya.Vector3(0, .4, L.gameMgr.groundMgr.endPos2),
                    this.single.transform.localRotationEulerY = 180, this.playAnimation(8), this.playLongHair(.4),
                    this.single.getChildByName("toufa").active = !0, this.single.getChildByName("hair_L").active = !1,
                    this.single.getChildByName("fashi_01").active = !1, this.setEndHair(), this.isMove = !1;
            }
            s.z < L.gameMgr.groundMgr.endPos1 && (s.y < -5 && this.gameFail(), this.setIsUp());
        }
        setIsUp() {
            let e = this.single.transform.position.clone(), t = L.gameMgr.obstacleLg.daoju2Arr, i = this.isUp;
            this.isUp = !1, this.isStartUp = !1;
            for (let i = 0; i < t.length; ++i) {
                let a = t[i].item.transform.position.clone().z - e.z;
                if (a > -6 && a < 1.8) {
                    this.isUp = !0, a > .5 && a < 1.8 && (this.isStartUp = !0);
                    break;
                }
            }
            !i && this.isUp ? (L.soundMgr.play("rotate"), this.setShowUpEffect(!0), L.commonData.GGame.showEndTip()) : this.isUp || this.setShowUpEffect(!1);
        }
        setShowUpEffect(e) {
            let t = this.single.getChildByName("body_01").getChildAt(0);
            t.active = !1, e && (t.active = !0);
        }
        showChangeEffect(e) {
            let t = this.single.getChildByName("hair_S").getChildAt(0);
            t.active = !1, e && (t.active = !0);
        }
        upShake() {
            let e = new Date().valueOf();
            e > this.upShakeTime + 100 && (this.upShakeTime = e, L.gameMgr.playVibrate(!0),
                this.musiccount++, this.isUp || this.musiccount % 2 != 0 || L.soundMgr.play("fall"));
        }
        setAniTime() {
            this.hairLevel > 0 ? this.setHairShow(!0) : this.setHairShow(!1), this.mAssAniTime = this.hairLevel / 20,
                this.setMValue();
        }
        setMValue() {
            this.mAssAniCutTime < this.mAssAniTime ? (this.mValue = .01, this.mCutAresType = 1) : (this.mValue = -.01,
                this.mCutAresType = 0), this.mAssAni = !0;
        }
        ArseAniEnd() {
            let e = this.mAssAniCutTime;
            (e += this.mValue) > 1 && (e = 1), e < 0 && (e = 0), this.animation.play(this.aniArr[this.aniType], 1, e),
                this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0, this.mAssAniCutTime = e,
                this.mCutAresType ? e >= this.mAssAniTime && (this.mAssAni = !1) : e <= this.mAssAniTime && (this.mAssAni = !1);
        }
        setEndPlayer() {
            this.isMove = !1, this.playAnimation(8);
        }
        playLongHair(e) {
            this.animation.play(this.aniArr[6], 1, e), this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0;
        }
        setEedPlayerPos(e) {
            let t = this.single.transform.position.clone();
            t.y = .4 - 2.3 * e, this.single.transform.position = t.clone();
        }
    }
    class r extends Laya.Script {
        constructor() {
            super(...arguments), this.arr = [4, 2, 5, 3, 1];
        }
        init(e) {
            this.single = e;
            let t = this.single.getChildAt(0);
            this.showPlayer = t, this.showPlayerLg = t.addComponent(n), this.showPlayerLg.init(t, 0),
                this.changeSkin();
        }
        changeSkin(e = -1) {
            -1 == e && (e = L.commonData.skinId),
                this.showPlayer.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[e],
                this.showPlayerLg.skinId = e;
            this.showPlayerLg.setHairMat(e)
        }
        setPlayerHair(e) {
            console.log("-------:　", e), this.showPlayerLg.setHairMat(e), this.showPlayerLg.isUserHair = !0,
                this.showPlayer.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[this.arr[e - 1]],
                this.showPlayer.getChildByName("fashi_02")._render.material = L.gameMgr.roleBodyArr[this.arr[e - 1]],
                this.showPlayerLg.skinId = this.arr[e - 1];
        }
        setPlayerMove(e) {
            this.showPlayerLg.setPlayerMove(e);
        }
        setMove(e) {
            this.showPlayerLg.setMove(e);
        }
        reSetPlayer() {
            this.showPlayerLg.reset();
        }
    }
    class l extends Laya.Script {
        constructor() {
            super(...arguments), this.isMove = !1, this.oriAngle = null, this.distance = null,
                this.effect = null, this.endValue = 0, this.endHeight = 0, this.movez = 8, this.lookAt = null,
                this.arrCount = 0, this.arr = [5, -6, -13, 3, -5, 2, -8, 3], this.count = 0, this.isShake = !1,
                this.oriY = 0;
        }
        init(e) {
            this.single = e, this.player = L.gameMgr.playerLg.showPlayer;
            let t = this.single.transform.position.clone();
            this.distance = new Laya.Vector3(0, 0, 0), Laya.Vector3.subtract(t, this.player.transform.position.clone(), this.distance),
                this.orip = this.single.transform.position.clone(), this.oriAngle = this.single.transform.rotation.clone(),
                this.addEndEff(L.gameMgr.effectMgr.effectArr[0]);
        }
        addEndEff(e) {
            this.single.addChild(e), e.transform.localPosition = new Laya.Vector3(-1, 2, -2),
                e.active = !1, this.effect = e;
        }
        showEndEff(e) {
            this.effect.active = !1, e && (this.effect.active = !0);
        }
        setCameraData(e) {
            this.isMove = e, e && (this.player = L.gameMgr.playerLg.showPlayer);
        }
        setStartPos(e) {
            this.single.transform.position.clone();
        }
        onLateUpdate() {
            if (this.isMove) {
                let e = this.single.transform.position.clone(), t = this.player.transform.position.clone(), i = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.add(t, this.distance, i), i.x = e.x, this.single.transform.position = i.clone();
            }
        }
        endMove() {
            this.isMove = !1;
            let e = this.player.transform.position.clone(), t = e.z, i = .28 * Math.PI, a = L.gameMgr.light.transform.localRotationEulerY;
            this.endValue = 0, Laya.Tween.to(this, {
                endValue: 1
            }, 1500, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                this.endMove2();
            })).update = new Laya.Handler(this, function () {
                e = this.player.transform.position.clone();
                let s = this.endValue * i, o = Math.sin(s), n = Math.cos(s), r = this.distance.clone();
                r.x = r.x * n + r.z * o, r.z = r.z * n - r.x * o, r.y = 0;
                let l = 1.3 * this.endValue;
                l > 1.3 && (l = 1.3);
                let h = 2.3 * Math.sin(l * Math.PI / 2);
                Laya.Vector3.scale(r, 1 + h, r), r.y = 1, r.z += 7 * this.endValue, Laya.Vector3.add(e, r, r),
                    L.gameMgr.light.transform.localRotationEulerY = a + 180 * this.endValue * .28, r.z += this.movez * this.endValue,
                    this.single.transform.position = r.clone();
                let g = e.clone();
                g.y += 1, g.z = t + 6 * this.endValue, this.single.transform.lookAt(g, new Laya.Vector3(0, 1, 0), !1),
                    this.lookAt = g.clone();
            });
        }
        endMove2() {
            let e = L.gameMgr.playerLg.showPlayerLg.hairLevel;
            e < 1 && (e = 1);
            let t = e / 20;
            L.gameMgr.playerLg.showPlayerLg.setEndPlayer();
            let i = this.single.transform.position.clone();
            this.endValue = 0;
            let a = 54;
            a = 38 * t + 18;
            let s = this.lookAt.clone();
            Laya.Tween.to(this, {
                endValue: 1
            }, 120 * a, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                L.gameMgr.playerLg.showPlayerLg.gameVictory();
            })).update = new Laya.Handler(this, function () {
                let e = new Laya.Vector3(i.x, i.y - a * this.endValue, i.z + this.endValue);
                this.single.transform.position = e.clone(), this.lookAt.y = s.y - a * this.endValue * 1.4,
                    this.lookAt.z = s.z + 4 * this.endValue, this.lookAt.y < s.y - a && (this.lookAt.y = s.y - a);
                let o = .1 * this.endValue;
                this.single.transform.lookAt(this.lookAt, new Laya.Vector3(o, 1, 0), !1);
                let n = 0;
                this.endValue < .2 || ((n = 35 * (this.endValue - .2)) > 16 && (n = 16), L.gameMgr.playerLg.showPlayerLg.setEedPlayerPos(n * t),
                    this.calculateEndArr(-14.6 - 2.3 * n * t));
            });
        }
        calculateEndArr(e) {
            let t = L.gameMgr.groundMgr.endPointArr;
            for (let i = 0; i < t.length; ++i) if (t[i].active) {
                let a = t[i].transform.position.clone();
                a.y > e && (t[i].active = !1, L.gameMgr.effectMgr.playEffect4(4, a.clone()), this.arrCount++,
                    L.soundMgr.play("endBroke"), L.gameMgr.playVibrate(!0));
            }
        }
        onLateUpdate2() {
            if (this.count++, this.isShake) {
                let e = .01 * this.arr[this.count % 8], t = this.single.transform.position.clone();
                this.single.transform.position = new Laya.Vector3(t.x, this.oriY + e, t.z);
            }
        }
        setShake(e) {
            e && this.isShake || e && (this.isShake = !0, this.count = 0, this.oriY = this.single.transform.position.y,
                Laya.timer.frameLoop(1, this, this.onLateUpdate2), Laya.timer.once(200, this, function () {
                    this.isShake = !1, Laya.timer.clear(this, this.onLateUpdate2);
                    let e = this.single.transform.position.clone();
                    this.single.transform.position = new Laya.Vector3(e.x, this.oriY, e.z);
                }));
        }
        reSet() {
            this.isMove = !1, this.single.transform.position = this.orip.clone(), this.single.transform.rotation = this.oriAngle.clone(),
                this.player = L.gameMgr.playerLg.showPlayer, this.arrCount = 0;
        }
    }
    class h extends Laya.Script {
        constructor() {
            super(...arguments), this.isMove = !1, this.daojuArrSg = [], this.daojuArr = [],
                this.daoju2Arr = [], this.daojuArr1 = [], this.daoju2Arr1 = [], this.daojuArr2 = [],
                this.daoju2Arr2 = [];
        }
        init(e) {
            this.root = e, e.active = !0, this.daojuRoot = this.root.getChildByName("prop");
            for (let e = 0; e < this.daojuRoot.numChildren; ++e) {
                let t = this.daojuRoot.getChildAt(e);
                t.active = !1, t.addComponent(o), this.daojuArrSg.push(t), t.getChildByName("Cube").active = !1;
            }
            this.initDaoju(), this.getConfigData();
        }
        initDaoju() {
            for (let e = 0; e < this.daojuArrSg.length; ++e) {
                let t = this.daojuArrSg[e];
                for (let e = 0; e < 3; ++e) {
                    let e = Laya.Sprite3D.instantiate(t);
                    Laya.Pool.recover(t.name, e);
                }
                Laya.Pool.recover(t.name, t);
            }
        }
        getIndex(e) {
            let t = e % 10;
            switch (Math.floor(e / 10)) {
                case 0:
                    return t - 1;

                case 1:
                    return 3 + t + 4;

                case 2:
                    return 6 + t + 4;

                case 3:
                    return 9 + t + 4;

                case 4:
                    return 12 + t + 4;

                case 5:
                    return 15 + t + 4;
            }
        }
        addDaoju(e) {
            let t = this.daojuArrSg[this.getIndex(e)];
            return Laya.Sprite3D.instantiate(t);
        }
        obstacleReset() {
            this.resetData(), this.getConfigData();
        }
        resetData() {
            for (let e = 0; e < this.daojuArr.length; ++e) {
                let t = this.daojuArr[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            this.daojuArr = [];
            for (let e = 0; e < this.daojuArr1.length; ++e) {
                let t = this.daojuArr1[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            this.daojuArr1 = [];
            for (let e = 0; e < this.daojuArr2.length; ++e) {
                let t = this.daojuArr2[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            this.daojuArr2 = [];
            for (let e = 0; e < this.daoju2Arr.length; ++e) {
                let t = this.daoju2Arr[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            for (let e = 0; e < this.daoju2Arr1.length; ++e) {
                let t = this.daoju2Arr1[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            for (let e = 0; e < this.daoju2Arr2.length; ++e) {
                let t = this.daoju2Arr2[e];
                t.item.getComponent(o).clear(), Laya.Pool.recover(t.item.name, t.item);
            }
            this.daoju2Arr = [], this.daoju2Arr1 = [], this.daoju2Arr2 = [];
        }
        getConfigData() {
            let e = L.configMgr.getLevelCfg(), t = L.commonData.newLevel - 1;
            t > 9 && (t = (t -= 4) % 6 + 4);
            let i = e[t % e.length].models;
            for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if (t.name.startsWith("prop")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(4, t.name.length - 4));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    if (e.transform.position = new Laya.Vector3(s.x, s.y, s.z), e.transform.localRotationEulerY = t.r,
                        e.transform.localScale = n.clone(), i > 50) for (let t = 0; t < e.numChildren - 1; ++t) e.getChildAt(t).active = !0;
                    if (2 == i) {
                        let a = t.pos, s = {
                            height: a.y,
                            offz: a.z - .75,
                            length: 1.25
                        };
                        L.gameMgr.groundMgr.routeDownArr.push(s);
                        let o = {
                            height: a.y - .8,
                            offz: a.z + .45,
                            length: 1.8
                        };
                        L.gameMgr.groundMgr.routeDownArr.push(o);
                        let n = {
                            item: e,
                            type: i,
                            isActive: !0
                        };
                        this.daoju2Arr.push(n);
                    } else {
                        let t = {
                            item: e,
                            type: i,
                            isActive: !0,
                            scale: n.clone()
                        };
                        this.daojuArr.push(t);
                    }
                } else if (t.name.startsWith("hairroad")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(9, t.name.length - 9));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    e.transform.position = new Laya.Vector3(s.x, s.y, s.z), e.transform.localScale = n.clone();
                    let r = {
                        item: e,
                        type: i,
                        isActive: !0,
                        scale: n.clone()
                    };
                    this.daojuArr.push(r);
                }
            }
            L.gameMgr.groundMgr.sortPosArr();
            for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if (t.name.startsWith("prop")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(4, t.name.length - 4));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    if (e.transform.position = new Laya.Vector3(s.x + 3.5, s.y, s.z), e.transform.localRotationEulerY = t.r,
                        e.transform.localScale = n.clone(), 2 == i) {
                        let t = {
                            item: e,
                            type: i,
                            isActive: !0
                        };
                        this.daoju2Arr1.push(t);
                    } else {
                        let t = {
                            item: e,
                            type: i,
                            isActive: !0,
                            scale: n.clone()
                        };
                        this.daojuArr1.push(t);
                    }
                } else if (t.name.startsWith("hairroad")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(9, t.name.length - 9));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    e.transform.position = new Laya.Vector3(s.x + 3.5, s.y, s.z), e.transform.localScale = n.clone();
                    let r = {
                        item: e,
                        type: i,
                        isActive: !0,
                        scale: n.clone()
                    };
                    this.daojuArr1.push(r);
                }
            }
            if (Laya.Browser.onIOS); else for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if (t.name.startsWith("prop")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(4, t.name.length - 4));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    if (e.transform.position = new Laya.Vector3(s.x + 7, s.y, s.z), e.transform.localRotationEulerY = t.r,
                        e.transform.localScale = n.clone(), 2 == i) {
                        let t = {
                            item: e,
                            type: i,
                            isActive: !0
                        };
                        this.daoju2Arr2.push(t);
                    } else {
                        let t = {
                            item: e,
                            type: i,
                            isActive: !0,
                            scale: n.clone()
                        };
                        this.daojuArr2.push(t);
                    }
                } else if (t.name.startsWith("hairroad")) {
                    let e = Laya.Pool.getItem(t.name), i = parseInt(t.name.substr(9, t.name.length - 9));
                    e || (e = this.addDaoju(i)), this.daojuRoot.addChild(e), e.active = !0;
                    let a = e.getComponent(o);
                    a.init(e, i), a.isMove = !0;
                    let s = t.pos, n = new Laya.Vector3(t.scale.x, t.scale.y, t.scale.z);
                    e.transform.position = new Laya.Vector3(s.x + 7, s.y, s.z), e.transform.localScale = n.clone();
                    let r = {
                        item: e,
                        type: i,
                        isActive: !0,
                        scale: n.clone()
                    };
                    this.daojuArr2.push(r);
                }
            }
            L.gameMgr.playerLg.showPlayerLg.changePropColor(0), L.gameMgr.aiMgr.resetAddSign();
        }
        onUpdate() { }
    }
    class g extends Laya.Script {
        constructor() {
            super(...arguments), this.type = 0, this.name = "";
        }
        inti(e, t, i) {
            this.single = e, this.type = t, this.name = i;
        }
        setLatatimeHide(e) {
            Laya.timer.once(e, this, this.lateHide);
        }
        lateHide() {
            this.single.active = !1, 1 == this.type && this.single.removeSelf(), Laya.Pool.recover(this.name, this.single);
        }
        onUpdate() { }
    }
    class d extends Laya.Script {
        constructor() {
            super(...arguments), this.effectArr = [];
        }
        init(e) {
            this.root = e;
            for (let e = 0; e < this.root.numChildren; ++e) {
                let t = this.root.getChildAt(e);
                t.active = !1, this.effectArr.push(t);
            }
            this.initPoolEffect();
        }
        initPoolEffect() {
            for (let e = 0; e < 6; ++e) {
                let e = Laya.Sprite3D.instantiate(this.effectArr[1], this.root);
                e.addComponent(g).inti(e, 1, "effect1"), Laya.Pool.recover("effect1", e);
            }
            for (let e = 0; e < 6; ++e) {
                let e = Laya.Sprite3D.instantiate(this.effectArr[2], this.root);
                e.addComponent(g).inti(e, 2, "effect2"), Laya.Pool.recover("effect2", e);
            }
            for (let e = 0; e < 6; ++e) {
                let e = Laya.Sprite3D.instantiate(this.effectArr[3], this.root);
                e.addComponent(g).inti(e, 0, "effect3"), Laya.Pool.recover("effect3", e);
            }
            for (let e = 0; e < 10; ++e) {
                let e = Laya.Sprite3D.instantiate(this.effectArr[4], this.root);
                e.addComponent(g).inti(e, 0, "effect4"), Laya.Pool.recover("effect4", e);
            }
            for (let e = 0; e < 6; ++e) {
                let e = Laya.Sprite3D.instantiate(this.effectArr[5], this.root);
                e.addComponent(g).inti(e, 0, "effect5"), Laya.Pool.recover("effect5", e);
            }
        }
        addEffect(e) {
            let t = Laya.Sprite3D.instantiate(this.effectArr[e], this.root);
            return t.addComponent(g).inti(t, 0, "effect" + e), t;
        }
        hidePurple() { }
        playEffect(e, t, i = null) {
            let a = Laya.Pool.getItem("effect" + e);
            a && (i && i.addChild(a), a.transform.position = t.clone(), a.active = !1, a.active = !0,
                a.getComponent(g).setLatatimeHide(1500));
        }
        playEffect2(e, t) {
            let i = this.effectArr[e];
            i.transform.position = t.clone(), i.active = !1, i.active = !0, Laya.timer.once(4e3, this, function () {
                i.active = !1;
            });
        }
        playEffect3(e, t) {
            let i = Laya.Pool.getItem("effect" + e);
            i && (i.transform.position = t.clone(), i.active = !0, i.getComponent(Laya.Animator).play("move", 0, 0),
                Laya.timer.once(1e3, this, function () {
                    i.active = !1, Laya.Pool.recover("effect" + e, i);
                }));
        }
        playEffect4(e, t) {
            let i = Laya.Pool.getItem("effect" + e);
            if (i) {
                i.transform.position = t.clone(), i.active = !0;
                let a = Math.floor(2 * Math.random()) + 1;
                i.getComponent(Laya.Animator).play("broke" + a, 0, 0), Laya.timer.once(3333, this, function () {
                    i.active = !1, Laya.Pool.recover("effect" + e, i);
                });
            }
        }
    }
    class c extends Laya.Script {
        constructor() {
            super(...arguments), this.sceneArr = [], this.routeArr = [], this.buildArr = [],
                this.routeUpArr = [], this.routeDownArr = [], this.routeUpArr1 = [], this.routeDownArr1 = [],
                this.routeUpArr2 = [], this.routeDownArr2 = [], this.endMulArr = [], this.endPointArr = [],
                this.endPos1 = 0, this.endPos2 = 0;
        }
        init(e) {
            this.sceneRoot = e;
            for (let e = 0; e < this.sceneRoot.numChildren; ++e) {
                let t = this.sceneRoot.getChildAt(e);
                t.active = !1, this.sceneArr.push(t);
            }
            this.initScene();
        }
        initScene() {
            for (let e = 0; e < 4; ++e) for (let t = 0; t < 3; ++t) {
                let t = Laya.Sprite3D.instantiate(this.sceneArr[e], this.sceneRoot);
                Laya.Pool.recover(t.name, t);
            }
            for (let e = 0; e < 3; ++e) {
                let e = Laya.Sprite3D.instantiate(this.sceneArr[5], this.sceneRoot);
                Laya.Pool.recover(e.name, e);
            }
            this.getConfigData();
        }
        addRoute(e) {
            return Laya.Sprite3D.instantiate(this.sceneArr[e], this.sceneRoot);
        }
        clearRoute() {
            for (let e = 0; e < this.routeArr.length; ++e) this.routeArr[e].active = !1, Laya.Pool.recover(this.routeArr[e].name, this.routeArr[e]);
            this.routeArr = [];
            for (let e = 0; e < this.buildArr.length; ++e) this.buildArr[e].active = !1, Laya.Pool.recover(this.buildArr[e].name, this.buildArr[e]);
            this.buildArr = [];
        }
        reset() {
            this.clearRoute(), this.routeUpArr = [], this.routeDownArr = [], this.routeUpArr1 = [],
                this.routeDownArr1 = [], this.routeUpArr2 = [], this.routeDownArr2 = [], this.initScene();
        }
        getConfigData() {
            let e = L.configMgr.getLevelCfg(), t = L.commonData.newLevel - 1;
            t > 9 && (t = (t -= 4) % 6 + 4);
            let i = e[t % e.length].models;
            for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if ("roads_01" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(0)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e.getChildAt(0)._render.materials[1].tilingOffsetY = a.z;
                    let s = {
                        height: i.y,
                        offz: i.z,
                        length: 2.2 * a.z
                    };
                    i.y > 2 ? this.routeUpArr.push(s) : this.routeDownArr.push(s), this.routeArr.push(e);
                } else if (t.name.startsWith("build_0")) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(t.name.substring(7, 8))), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        this.buildArr.push(e);
                } else if ("roads_11" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(5)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e._render.materials[0].tilingOffsetY = 3 * a.y, this.routeArr.push(e);
                }
            }
            for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if ("roads_01" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(0)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x + 3.5, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e.getChildAt(0)._render.materials[1].tilingOffsetY = a.z;
                    let s = {
                        height: i.y,
                        offz: i.z,
                        length: 2.2 * a.z
                    };
                    i.y > 2 ? this.routeUpArr1.push(s) : this.routeDownArr1.push(s), this.routeArr.push(e);
                } else if ("roads_11" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(5)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x + 3.5, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e._render.materials[0].tilingOffsetY = 3 * a.y, this.routeArr.push(e);
                }
            }
            if (Laya.Browser.onIOS); else for (let e = 0; e < i.length; ++e) {
                let t = i[e];
                if ("roads_01" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(0)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x + 7, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e.getChildAt(0)._render.materials[1].tilingOffsetY = a.z;
                    let s = {
                        height: i.y,
                        offz: i.z,
                        length: 2.2 * a.z
                    };
                    i.y > 2 ? this.routeUpArr2.push(s) : this.routeDownArr2.push(s), this.routeArr.push(e);
                } else if ("roads_11" == t.name) {
                    let e = Laya.Pool.getItem(t.name);
                    e || (e = this.addRoute(5)), e.active = !0;
                    let i = t.pos, a = t.scale;
                    e.transform.position = new Laya.Vector3(i.x + 7, i.y, i.z), e.transform.localScale = new Laya.Vector3(a.x, a.y, a.z),
                        e._render.materials[0].tilingOffsetY = 3 * a.y, this.routeArr.push(e);
                }
            }
        }
        sortPosArr() {
            for (let e = this.routeUpArr.length - 1; e >= 0; e--) for (let t = e - 1; t >= 0; t--) if (this.routeUpArr[e].offz < this.routeUpArr[t].offz) {
                let i = this.routeUpArr[e];
                this.routeUpArr[e] = this.routeUpArr[t], this.routeUpArr[t] = i;
            }
            for (let e = this.routeDownArr.length - 1; e >= 0; e--) for (let t = e - 1; t >= 0; t--) if (this.routeDownArr[e].offz < this.routeDownArr[t].offz) {
                let i = this.routeDownArr[e];
                this.routeDownArr[e] = this.routeDownArr[t], this.routeDownArr[t] = i;
            }
            this.setEndPos();
        }
        setEndPos() {
            let e = this.routeDownArr[this.routeDownArr.length - 1];
            this.sceneArr[4].transform.position = new Laya.Vector3(0, 0, e.offz + e.length),
                this.sceneArr[4].active = !0, this.endPointArr = [];
            let t = this.sceneArr[4].getChildAt(0);
            for (let e = 0; e < t.numChildren; ++e) {
                let i = t.getChildAt(e);
                "end_01" == i.name && (this.endPointArr.push(i), i.active = !0);
            }
            this.endPos1 = e.offz + e.length, this.endPos2 = e.offz + e.length + 19.5, this.endMulArr = [];
            let i = {
                height: 0,
                offz: e.offz + e.length,
                length: 2.2 * this.sceneArr[1].numChildren
            };
            this.routeDownArr.push(i);
            let a = {
                height: 0,
                offz: e.offz + e.length + 17.6,
                length: 19.5
            };
            this.routeDownArr.push(a);
        }
        onUpdate() { }
    }
    class m extends Laya.Script {
        constructor() {
            super(...arguments), this.isMove = !1, this.index = 0, this.speed = 3, this.playerState = 0,
                this.hairLen = 10, this.hairLevel = 0, this.colorArr = [1, 211 / 255, 135 / 255, 50 / 255, 190 / 255, 1, 184 / 255, 112 / 255,
                    1, 158 / 255, 238 / 255, 52 / 255],
                this.aniState = 0, this.speedMul = 1, this.speedTouch = 1, this.lastTimeA = 0, this.addCount = 0,
                this.lastTimeS = 0, this.subCount = 0, this.oriPos = null, this.oriAngle = null,
                this.moveDire = 1, this.moveCount = 0, this.rightCount = 0, this.width = 3.5, this.speedV = 0,
                this.delta = 20, this.isTouchAdd = !1, this.isStop = !1, this.bodyLen = .2, this.isDown = !1,
                this.isUp = !1, this.dropSpeed = 4, this.upSpeed = 8, this.mAssAniCutTime = 0, this.mValue = 0,
                this.mCutAresType = 0, this.mAssAniTime = 0, this.mAssAni = !1, this.aniArr = ["change", "rollChange", "rotateChange", "runChange", "victoryChange"],
                this.aniType = 0;
        }
        init(e, t = 0) {
            this.single = e, this.index = t, this.oriPos = this.single.transform.position.clone(),
                this.oriAngle = this.single.transform.rotation.clone(), this.animation = this.single.getComponent(Laya.Animator),
                this.animation.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                this.animation.getControllerLayer(1).defaultWeight = 1, this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                this.animation.play("change", 1, .15), this.mAssAniCutTime = .15, this.hairLevel = 3,
                this.setHairMat(0), this.setHairShow(!1), this.setRoleSkin();
        }
        setHairShow(e) {
            this.single.getChildByName("hair_L").active = e;
        }
        setHairMat(e) {
            console.log(1111111111)
            let t = this.single.getChildByName("hair_F"), i = this.single.getChildByName("hair_L"), a = this.single.getChildByName("hair_S");
            0 == e && (e = this.index + 6), t._render.material = L.gameMgr.roleMatArr[e], i._render.material = L.gameMgr.roleMatArr[e],
                a._render.material = L.gameMgr.roleMatArr[e]//, this.changePropColor(e);
        }
        changePropColor(e) {
            if (L.gameMgr.obstacleLg) {
                let t = L.gameMgr.obstacleLg.daojuArr1;
                1 == this.index && (t = L.gameMgr.obstacleLg.daojuArr2);
                for (let i = 0; i < t.length; ++i) {
                    if (5 == t[i].type && t[i].isActive) {
                        t[i].item._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1);
                    }
                    if (51 == t[i].type && t[i].isActive) for (let a = 0; a < t[i].item.numChildren; ++a) {
                        let s = t[i].item.getChildAt(a);
                        "prop5" == s.name && (s._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1));
                    }
                }
            }
        }
        playAnimation(e) {
            switch (this.aniState = e, e) {
                case 1:
                    this.animation.play("idle", 0, 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 0;
                    break;

                case 2:
                    this.animation.play("walk", 0, 0), this.aniType = 0, this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1.5;
                    break;

                case 3:
                    this.animation.play("rotate", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = .5,
                        this.aniType = 2;
                    break;

                case 4:
                    this.animation.play("roll", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 1;
                    break;

                case 5:
                    this.animation.play("victory", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 4;
                    break;

                case 6:
                    this.animation.play("run", 0), this.animation.getControllerLayer(0)._playStateInfo._currentState.speed = 1,
                        this.aniType = 3;
            }
        }
        addSpeed(e, t, i = !1) {
            let a = new Date().valueOf();
            if (this.subCount = 0, a - this.lastTimeA > 800 && (this.addCount = 0), a - this.lastTimeA > t && (this.lastTimeA = a,
                this.hairLevel += e, this.hairLevel > 20 && (this.hairLevel = 20), this.setAniTime(),
                i)) {
                this.single.transform.position.clone().y += 1, this.addCount++;
            }
        }
        subSpeed(e, t, i = !1) {
            let a = new Date().valueOf();
            if (this.addCount = 0, a - this.lastTimeS > 800 && (this.subCount = 0), a - this.lastTimeS > t && (this.lastTimeS = a,
                this.hairLevel -= e, this.hairLevel < 0 && (this.hairLevel = 0), this.setAniTime(),
                i)) {
                this.single.transform.position.clone().y += 1, this.subCount++;
            }
        }
        setMove(e) {
            this.isMove = e, this.isMove && (this.playAnimation(2), Laya.timer.loop(1e3, this, this.loopMove));
        }
        reset() {
            this.speedMul = 1, this.isMove = !1, this.single.active = !0, Laya.timer.clearAll(this),
                this.setHairMat(0), this.setHairShow(!1), this.isTouchAdd = !1, this.speedTouch = 1,
                this.isStop = !1, this.single.transform.position = this.oriPos.clone(), this.single.transform.rotation = this.oriAngle.clone(),
                this.playAnimation(1), this.animation.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                this.animation.getControllerLayer(1).defaultWeight = 1, this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                this.animation.play("change", 1, .15), this.mAssAniCutTime = .15, this.hairLevel = 3,
                this.mValue = 0, this.mCutAresType = 0, this.mAssAniTime = 0, this.mAssAni = !1,
                this.setRoleSkin();
        }
        setRoleSkin() {
            let e = Math.floor(6 * Math.random());
            this.single.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[e];
        }
        loopMove() {
            Math.random() < .5 || !this.isMove || (this.moveCount++, this.moveCount % 2 == 0 ? this.moveDire = 1 : this.moveDire = -1,
                this.rightCount = 0, Laya.timer.loop(30, this, this.loopRightMove));
        }
        loopRightMove() {
            this.rightCount++, this.rightCount > 10 && Laya.timer.clear(this, this.loopRightMove);
            let e = this.moveDire * (2 + 3 * Math.random());
            this.setPlayerMove(e);
        }
        setPlayerMove(e) {
            e = .02 * -e;
            let t = this.single.transform.position.clone(), i = t.x + e;
            i < -.85 + (this.index * this.width + this.width) && (i = -.85 + (this.index * this.width + this.width)),
                i > .85 + (this.index * this.width + this.width) && (i = .85 + (this.index * this.width + this.width)),
                this.single.transform.position = new Laya.Vector3(i, t.y, t.z);
        }
        calculateProp() {
            let e;
            0 == this.index ? e = L.gameMgr.obstacleLg.daojuArr1 : 1 == this.index && (e = L.gameMgr.obstacleLg.daojuArr2);
            let t = this.single.transform.position.clone(), i = L.gameMgr.playerLg.showPlayer.transform.position.clone();
            if (!(t.z < i.z)) for (let a = 0; a < e.length; ++a) {
                let s = e[a];
                if (s.isActive && s.item.active) {
                    let n = Math.floor(s.type / 10), r = s.item.getChildByName("Cube"), l = r.transform.position.clone();
                    if (l.z - i.z < -10) {
                        L.gameMgr.obstacleLg.daojuArr[a].isActive = !1, s.item.getComponent(o).clear();
                        continue;
                    }
                    if (Math.abs(l.x - this.index * this.width - this.width) < 1 && Math.abs(l.z - t.z) < 6 && L.utils.pointInBox(t, r, s.scale))
                        switch (n) {
                            case 0:
                                e[a].isActive = !1, this.calculateProp0(s.item, s.type);
                                break;

                            case 1:
                                this.calculateProp1(s.item, s.type);
                                break;

                            case 2:
                                this.calculateProp2(s.item, s.type);
                                break;

                            case 3:
                                this.calculateProp3(s.item, s.type);
                                break;

                            case 4:
                                this.calculateProp4(s.item, s.type);
                        }
                }
            }
        }
        addStar() {
            let e = this.single.transform.position.clone();
            e.y += 1, L.commonData.GGame.showAddUi(e.clone(), 1);
        }
        setSpeed() {
            this.speedV = 2.55, this.speed = 1.275, Laya.Tween.to(this, {
                speed: this.speedV
            }, 500, Laya.Ease.quintInOut);
        }
        calculateProp0(e, t) {
            switch (t) {
                case 1:
                    e.active = !1, this.setSpeed();
                    break;

                case 2:
                    break;

                case 3:
                    this.subSpeed(5, 0), e.getComponent(o).shearsMoveAway();
                    break;

                case 4:
                    e.active = !1;
            }
        }
        calculateProp1(e, t) {
            this.setHairMat(3), this.addSpeed(1, 200, !0);
        }
        calculateProp2(e, t) {
            this.subSpeed(1, 200, !0);
        }
        calculateProp3(e, t) {
            this.setHairMat(2), this.addSpeed(1, 200, !0);
        }
        calculateProp4(e, t) {
            this.setHairMat(1), this.addSpeed(1, 200, !0);
        }
        onUpdate() {
            this.delta = Laya.timer.delta, this.delta > 50 && (this.delta = 20), this.isMove && (this.playMove(),
                this.calculateProp(), this.mAssAni && this.ArseAniEnd());
        }
        playMove() {
            this.calculateNextPos();
        }
        calculateNextPos() {
            let e = this.single.transform.position.clone(), t = e.z + this.speed * this.delta / 1e3 * this.speedMul * this.speedTouch, i = L.gameMgr.groundMgr.routeUpArr, a = L.gameMgr.groundMgr.routeDownArr, s = L.gameMgr.playerLg.showPlayer.transform.position.clone();
            if (e.z < s.z && t < L.gameMgr.groundMgr.endPos1 - 2) return void (this.single.transform.position = new Laya.Vector3(e.x, e.y, t));
            this.isUp ? (this.subSpeed(.1, 30), e.y += this.upSpeed * this.delta / 1e3, 3 != this.aniState && this.playAnimation(3)) : this.isDown ? (e.y -= this.dropSpeed * this.delta / 1e3,
                e.y < 0 && (e.y = 0), 2 != this.aniState && e.z < L.gameMgr.groundMgr.endPos1 && this.playAnimation(2)) : 2 != this.aniState && e.z < L.gameMgr.groundMgr.endPos1 && this.playAnimation(2);
            let o = e.clone(), n = !0;
            this.isUp = !1, this.isDown = !1;
            for (let a = 0; a < i.length; ++a) {
                let s = i[a];
                if (e.z <= s.offz - this.bodyLen) {
                    if (t > s.offz - this.bodyLen && t < s.offz + s.length + this.bodyLen && e.y > s.height - 1) {
                        this.isDown = !1, e.y > s.height ? (o.y = e.y, o.z = t, this.isDown = !0) : e.y > s.height - .1 ? (o.y = s.height,
                            o.z = t) : (this.isDown = !0, o.y = e.y, o.z = s.offz - this.bodyLen), n = !1;
                        break;
                    }
                } else if (e.z > s.offz - this.bodyLen && e.z < s.offz + s.length + this.bodyLen && e.y > s.height - 1 && t > s.offz - this.bodyLen && t < s.offz + s.length + this.bodyLen && e.y > s.height - 1) {
                    e.y > s.height ? (this.isDown = !0, o.y = e.y, o.z = t) : (this.isDown = !1, o.y = s.height,
                        o.z = t), n = !1;
                    break;
                }
            }
            if (n) for (let i = 0; i < a.length; ++i) {
                let s = a[i];
                if (e.z < s.offz && i > 0) {
                    let n = a[i - 1];
                    e.z < n.offz + n.length + this.bodyLen ? (o.z = t, o.y = Math.max(e.y, n.height),
                        this.isDown = !0) : t < s.offz - this.bodyLen ? (this.isDown = !0, o.z = t, o.y = e.y) : e.y < s.height - .1 ? (this.isDown = !0,
                            o.z = s.offz - this.bodyLen, o.y = e.y) : (this.isDown = !1, o.z = t, o.y = e.y);
                    break;
                }
                i == a.length - 1 && e.z < s.offz + s.length && (this.isDown = !1, o.z = t, o.y = e.y);
            }
            this.single.transform.position = o.clone(), o.z > L.gameMgr.groundMgr.endPos1 - 1 && (this.isMove = !1,
                this.playAnimation(5)), this.setIsUp();
        }
        setIsUp() {
            let e, t = this.single.transform.position.clone();
            e = 1 == this.index ? L.gameMgr.obstacleLg.daoju2Arr2 : L.gameMgr.obstacleLg.daoju2Arr1,
                this.isUp = !1;
            for (let i = 0; i < e.length; ++i) {
                let a = e[i].item.transform.position.clone().z - t.z;
                if (a > -3.3 && a < 1.8) {
                    this.isUp = !0;
                    break;
                }
                if (a > 3) break;
            }
        }
        setAniTime() {
            this.hairLevel > 0 ? this.setHairShow(!0) : this.setHairShow(!1), this.mAssAniTime = this.hairLevel / 20,
                this.setMValue();
        }
        setMValue() {
            this.mAssAniCutTime < this.mAssAniTime ? (this.mValue = .01, this.mCutAresType = 1) : (this.mValue = -.01,
                this.mCutAresType = 0), this.mAssAni = !0;
        }
        ArseAniEnd() {
            let e = this.mAssAniCutTime;
            (e += this.mValue) > 1 && (e = 1), e < 0 && (e = 0), this.animation.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                this.animation.play(this.aniArr[this.aniType], 1, e), this.mAssAniCutTime = e, this.mCutAresType ? e >= this.mAssAniTime && (this.mAssAni = !1) : e <= this.mAssAniTime && (this.mAssAni = !1);
        }
    }
    class u extends Laya.Script {
        constructor() {
            super(...arguments), this.childArr = [], this.aiArr = [];
        }
        init(e) {
            this.root = e;
            let t = this.root.getChildAt(0), i = null;
            this.childArr.push(t), Laya.Browser.onIOS || (i = Laya.Sprite3D.instantiate(t, e),
                this.childArr.push(i));
            for (let e = 0; e < this.childArr.length; ++e) {
                let t = this.childArr[e];
                t.transform.position = new Laya.Vector3(3.5 + 3.5 * e, 0, 5 * e + 4.5);
                let i = t.addComponent(m);
                i.init(t, e);
                let a = {
                    item: t,
                    lg: i
                };
                this.aiArr.push(a);
            }
        }
        setStart() {
            for (let e = 0; e < this.aiArr.length; ++e) this.aiArr[e].lg.setMove(!0);
        }
        reset() {
            for (let e = 0; e < this.aiArr.length; ++e) this.aiArr[e].lg.reset();
        }
        resetAddSign() {
            for (let e = 0; e < this.aiArr.length; ++e) this.aiArr[e].lg.changePropColor(0);
        }
        hideAi() {
            for (let e = 0; e < this.aiArr.length; ++e) this.aiArr[e].item.active = !0;
        }
    }
    class y {
        init() {
            if (Laya.Browser.onWeiXin) {
                let e = window.wx;
                this.sysInfo = e.getSystemInfoSync(), this.launchOptions = e.getLaunchOptionsSync(),
                    this.openDataContext = e.getOpenDataContext();
            }
        }
        resetSize(e, t) {
            window.sharedCanvas && (window.sharedCanvas.width = e, window.sharedCanvas.height = t);
        }
        postMessage(e) {
            null != e && null != this.openDataContext && this.openDataContext.postMessage(e);
        }
        uploadScroe(e) {
            this.postMessage({
                cmd: "submit_scroe",
                score: e
            });
        }
        showFriendRank(e) {
            this.postMessage({
                cmd: e ? "open_friend_rank" : "close_friend_rank"
            });
        }
        destroyFriendRank() {
            this.postMessage({
                cmd: "destroy_friend_rank"
            });
        }
        showLiteRank(e) {
            this.postMessage({
                cmd: e ? "open_lite_rank" : "close_lite_rank"
            });
        }
        showOverFriendTips(e, t) {
            this.postMessage({
                cmd: e ? "open_over_friend" : "close_over_friend",
                score: t
            });
        }
        showLoopFriendTips(e, t) {
            this.postMessage({
                cmd: e ? "open_loop_friend" : "close_loop_friend",
                score: t
            });
        }
        restartGame() {
            this.postMessage({
                cmd: "restart_game"
            });
        }
        showFirstFriendTips(e) {
            this.postMessage({
                cmd: e ? "open_first_friend" : "close_first_friend",
                score: 0
            });
        }
        onFrientMouseEvent(e) {
            this.postMessage(e);
        }
    }
    class p extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            let e = this.owner.getChildByName("middleUI");
            this.toast = e.getChildByName("toast"), this.toast.visible = !1, this.lblToast = this.toast.getChildByName("lblToast");
        }
        showText(e, t) {
            Laya.stage.addChildren(this.toast), this.toast.pos(Laya.stage.width / 2, Laya.stage.height / 2),
                this.lblToast.text = e, this.toast.visible = !0, Laya.timer.once(t, this, this.hideText);
        }
        hideText() {
            this.toast.visible = !1;
        }
        onDestroy() { }
    }
    class f {
        constructor() { }
        showToast(e, t) {
            this.bubbleText ? this.bubbleText.showText(e, t) : Laya.Scene.open("views/popups/bubbleText.scene", !1, Laya.Handler.create(this, i => {
                this.bubbleText = i.getComponent(p), this.bubbleText.showText(e, t);
            }));
        }
    }
    class L {
        static get glEvent() {
            return this._eventListener;
        }
        static get soundMgr() {
            return void 0 === this._soundMgr && (this._soundMgr = new i()), this._soundMgr;
        }
        static get storageMgr() {
            return void 0 === this._storageMge && (this._storageMge = new e()), this._storageMge;
        }
        static get commonData() {
            return this._commonData;
        }
        static get gameData() {
            return this._gameData;
        }
        static get utils() {
            return this._utils;
        }
        static get gameMgr() {
            return this._gameMgr;
        }
        static get configMgr() {
            return void 0 === this._configMgr && (this._configMgr = new t()), this._configMgr;
        }
        static get rankMgr() {
            return void 0 === this._rankMgr && (this._rankMgr = new y()), this._rankMgr;
        }
        static get wxMgr() {
            return void 0 === this._wxMgr && (this._wxMgr = new a()), this._wxMgr;
        }
        static get resourceMgr() {
            return void 0 === this._resourceMgr && (this._resourceMgr = new s()), this._resourceMgr;
        }
        static get uiMgr() {
            return this._uiMgr || (this._uiMgr = new f()), this._uiMgr;
        }
    }
    L._eventListener = new Laya.EventDispatcher(), L._utils = new class {
        constructor() { }
        addClickEvent(e, t, i, a) {
            if (e.offAllCaller(t), e instanceof Laya.Button) {
                let a = function (e) {
                    e.stopPropagation(), i && (L.soundMgr.play("button"), L.gameMgr.playVibrate(!0),
                        i.call(t, e));
                };
                e.on(Laya.Event.CLICK, t, a), L.storageMgr.isPlayVibrate() && zs.laya.sdk.DeviceService.VibrateShort();
            } else {
                let s = 60, o = 1, n = (e.anchorX, e.anchorY, e.x, e.y, e.scaleX * o), r = e.scaleX * o, l = .9 * o, h = function (t) {
                    t.stopPropagation(), Laya.Tween.to(e, {
                        scaleX: l,
                        scaleY: l
                    }, s);
                };
                e.on(Laya.Event.MOUSE_DOWN, t, h);
                let g = function (o) {
                    o.stopPropagation(), Laya.Tween.to(e, {
                        scaleX: n,
                        scaleY: r
                    }, s), i && i.call(t, o), (0 === a || a) && L.soundMgr.play(a);
                };
                e.on(Laya.Event.MOUSE_UP, t, g);
                let d = function (t) {
                    t.stopPropagation(), Laya.Tween.to(e, {
                        scaleX: n,
                        scaleY: r
                    }, s);
                };
                e.on(Laya.Event.MOUSE_OUT, t, d);
            }
        }
        tweenShake(e, t) {
            let i = new Laya.TimeLine(), a = e.pivotX;
            e.pivotX = e.width / 2, i.addLabel("shake1", 0).to(e, {
                rotation: e.rotation + 5
            }, 50, null, 0).addLabel("shake2", 0).to(e, {
                rotation: e.rotation - 6
            }, 50, null, 0).addLabel("shake3", 0).to(e, {
                rotation: e.rotation - 13
            }, 50, null, 0).addLabel("shake4", 0).to(e, {
                rotation: e.rotation + 3
            }, 50, null, 0).addLabel("shake5", 0).to(e, {
                rotation: e.rotation - 5
            }, 50, null, 0).addLabel("shake6", 0).to(e, {
                rotation: e.rotation + 2
            }, 50, null, 0).addLabel("shake7", 0).to(e, {
                rotation: e.rotation - 8
            }, 50, null, 0).addLabel("shake8", 0).to(e, {
                rotation: e.rotation + 3
            }, 50, null, 0).addLabel("shake9", 0).to(e, {
                rotation: 0
            }, 50, null, 0), t ? Laya.timer.once(500, this, function () {
                i.destroy(), e.rotation = 0, e.pivotX = a;
            }) : i.on(Laya.Event.COMPLETE, this, function () {
                i.destroy(), e.rotation = 0, e.pivotX = a;
            }), i.play(0, !0);
        }
        PointToSegDist(e, t, i, a, s, o) {
            let n = (s - i) * (e - i) + (o - a) * (t - a), r = 0;
            if (n < 0) return r = Math.sqrt((e - i) * (e - i) + (t - a) * (t - a));
            let l = (s - i) * (s - i) + (o - a) * (o - a);
            if (n > l) return r = Math.sqrt((e - s) * (e - s) + (t - o) * (t - o));
            let h = n / l, g = i + (s - i) * h, d = a + (o - a) * h;
            return r = Math.sqrt((e - g) * (e - g) + (d - t) * (d - t));
        }
        showCoinFly(e, t, i) {
            L.commonData.coinFlyView ? (Laya.stage.addChild(L.commonData.coinFlyView.owner),
                L.commonData.coinFlyView.setCoinMove(e, t, i)) : Laya.Scene.open("views/coinFly.scene", !1, null, new Laya.Handler(this, function () {
                    L.commonData.coinFlyView.setCoinMove(e, t, i);
                }));
        }
        calculatePos(e, t, i, a) {
            let s = new Laya.Vector3(0, 0, 0);
            return s.x = t.x * (1 - e) * (1 - e) + 2 * i.x * (1 - e) * e + a.x * e * e, s.y = t.y * (1 - e) * (1 - e) + 2 * i.y * (1 - e) * e + a.y * e * e,
                s.z = t.z * (1 - e) * (1 - e) + 2 * i.z * (1 - e) * e + a.z * e * e, s;
        }
        pointInBox(e, t, i) {
            let a = new Laya.Vector3(0, 0, 0);
            t.transform.getForward(a), Laya.Vector3.normalize(a.clone(), a);
            let s = t.transform.position.clone(), o = new Laya.Vector3(0, 0, 0);
            Laya.Vector3.subtract(e, s, o);
            let n = Laya.Vector3.dot(a, o), r = new Laya.Vector3(0, 0, 0);
            t.transform.getUp(r), Laya.Vector3.normalize(r.clone(), r);
            let l = Laya.Vector3.dot(r, o), h = new Laya.Vector3(0, 0, 0);
            t.transform.getRight(h), Laya.Vector3.normalize(h.clone(), h);
            let g = Laya.Vector3.dot(h, o), d = t.transform.localScale.clone();
            return Math.abs(g) < d.x / 2 * i.x && Math.abs(l) < d.y / 2 * i.y && Math.abs(n) < d.z / 2 * i.z;
        }
    }(), L._commonData = new class {
        constructor() {
            this.useTime = 1e3, this.levelIndex = 0, this.newLevel = 1, this.maxScore = 0, this.userCoin = 0,
                this.skinValueArr = [3e3, 3e3, 3e3, 3e3, 3e3], this.unlockCount = 0, this.skinId = 0,
                this.freeSkinId = 0, this.isFreeId = !1, this.useSkinId = 0, this.firstMusic = !1,
                this.userInfo = {}, this.showScene = null, this.freeSkinCount = 0, this.coinFlyView = null,
                this.userId = "", this.playerNameStr1 = "",
                this.playerNameStr2 = "",
                this.playerNameStrArr = [];
        }
    }(), L._gameData = new class {
        constructor() {
            this.isStart = !1, this.gameLevel = 1, this.gameCoin = 0, this.gameMgr = null, this.freeSkinId = -1,
                this.poleScale = 1, this.gameCount = 0, this.gameState = 1, this.daojuArr = [],
                this.tipMoveArr = [0, 74, 19, 19, 85, 0, 138, 11, 179, 78, 215, 131, 280, 157, 335, 132, 361, 78, 337, 20, 282, 0, 221, 11, 179, 78, 145, 124, 84, 147, 19, 128];
        }
    }(), L._gameMgr = new class {
        constructor() {
            this.touchMove = new Laya.Vector2(0, 0), this.roleMatArr = [], this.roleBodyArr = [],
                this.isOver = !0, this.isPlay = !0, this.isTouchDown = !1, this.oripos = new Laya.Vector2(0, 0),
                this.count = 0, this._fieldOfView = null, this._viewportRatio = null, this.initCamera = !1,
                this.currentColor = 0, this.first = !0, this.bSetSpeed = !0, this.bSetCamera = !0,
                this.ballonShowCount = 0, this.lastTime = 0, this.movex = 0, this.movey = 0, this.targetNum = 0,
                this.targetNum2 = 0;
        }
        init() {
            L.gameData.gameMgr = this, this.addEvent(), this.initScene(), this.ballonShowCount = 0,
                Laya.stage.on("DEVICE_ON_HIDE", this, this.onHide), Laya.stage.on("DEVICE_ON_SHOW", this, this.onShow);
        }
        initScene() {
            if (this.scene = L.resourceMgr.mainScene, this.camera = this.scene.getChildByName("Main Camera"),
                Laya.Browser.onIOS && !this.initCamera) {
                this.initCamera = !0;
                let e = this.camera;
                this._fieldOfView && this._viewportRatio || (this._fieldOfView = e.fieldOfView,
                    this._viewportRatio = e.viewport.height / (1334 * Laya.RenderState2D.width / 750),
                    e.fieldOfView = this._fieldOfView * this._viewportRatio);
            }
            let e = this.scene.getChildByName("Directional Light");
            this.light = e, this.lightRotation = e.transform.localRotationEuler.clone();
            let t = this.scene.getChildByName("roleSkin").getChildAt(0);
            t.active = !1, t.removeSelf(), this.roleBodyArr = t._render.materials;
            let i = this.scene.getChildByName("hairMat").getChildAt(0);
            this.roleMatArr = i._render.materials,
                i.active = !1, i.removeSelf(),
                this.groundScene = this.scene.getChildByName("scene"),
                this.groundMgr = this.groundScene.addComponent(c), this.groundMgr.init(this.groundScene),
                this.player = this.scene.getChildByName("player");
            let a = this.player.getChildAt(0).getChildAt(0);
            this.showModel = Laya.Sprite3D.instantiate(a), this.aiRoot = this.scene.getChildByName("aiRoot");
            let s = Laya.Sprite3D.instantiate(a, this.aiRoot);
            this.removePlayerEff(this.showModel), this.removePlayerEff(s), this.effectRoot = this.scene.getChildByName("effect"),
                this.effectMgr = this.effectRoot.addComponent(d), this.effectMgr.init(this.effectRoot),
                this.playerLg = this.player.addComponent(r), this.playerLg.init(this.player.getChildAt(0)),
                this.aiMgr = this.aiRoot.addComponent(u), this.aiMgr.init(this.aiRoot), this.cameraLg = this.camera.addComponent(l),
                this.cameraLg.init(this.camera), this.obstacle = this.scene.getChildByName("obstacle"),
                this.obstacleLg = this.obstacle.addComponent(h), this.obstacleLg.init(this.obstacle);
        }
        removePlayerEff(e) {
            let t = e.getChildByName("body_01"), i = e.getChildByName("hair_S"), a = e.getChildByName("crown");
            t.getChildAt(0).removeSelf(), i.getChildAt(0).removeSelf(), a.removeSelf(), e.getChildByName("toufa").removeSelf();
        }
        gameReset() {
            this.isVictory = !1, L.gameData.gameCoin = 0, this.light.transform.localRotationEuler = this.lightRotation.clone(),
                this.playerLg.reSetPlayer(), this.playerLg.changeSkin(), this.cameraLg.reSet(),
                this.aiMgr.reset(), this.groundMgr.reset(), this.obstacleLg.obstacleReset(), this.isOver = !0,
                L.gameData.isStart = !1;
        }
        setSky() { }
        onHide() {
            Laya.timer.scale = 0;
        }
        onShow() {
            Laya.timer.scale = 1;
        }
        setGameOver() {
            L.gameData.isStart = !1, this.cameraLg.setCameraData(!1);
        }
        gameReviel() {
            L.gameData.isStart = !0;
        }
        gameStart() {
            this.isOver = !1, L.gameData.isStart = !0, this.playVibrate(!1), this.gameStart2();
        }
        gameStart2() {
            this.cameraLg.setCameraData(!0), this.playerLg.setMove(!0), this.aiMgr.setStart();
        }
        setFog(e) { }
        addEvent() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp),
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseMove),
                Laya.stage.on(zs.laya.platform.PlatformMgr.GAME_RESET_START, this, this.onContinueGame),
                Laya.timer.frameLoop(1, this, this.onUpdate);
        }
        onContinueGame() {
            Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, e => { }));
        }
        onUpdate() { }
        onMouseDown(e) {
            this.isTouchDown = !0, this.oripos = new Laya.Vector2(e.stageX, e.stageY), this.playerLg && L.gameData.isStart && this.playerLg.showPlayerLg.setTouchSpeed();
        }
        onMouseUp() {
            this.count = 0, this.isTouchDown = !1, this.playerLg && L.gameData.isStart;
        }
        onMouseMove(e) {
            if (!this.isTouchDown) return;
            if (this.cameraLg.isMove && this.count > 0) {
                let t = e.stageX - this.oripos.x;
                this.playerLg.setPlayerMove(t);
            }
            this.oripos = new Laya.Vector2(e.stageX, e.stageY), this.count++;
        }
        setDirection() { }
        playVibrate(e) {
            L.storageMgr.isPlayVibrate() && (e ? zs.laya.sdk.DeviceService.VibrateShort() : zs.laya.sdk.DeviceService.VibrateLong());
        }
        destoryAll() { }
        initGame(e) { }
        finishTarget() { }
        over() { }
        gameOver() {
            if (this.isOver) return void console.log("is game over.");
            L.gameData.freeSkinId = -1, L.gameData.gameCount++, this.isOver = !0;
            let e = "views/fail.scene";
            this.isVictory ? (L.gameData.gameCoin += 100, e = "views/success.scene", this.showResult(e)) : this.showResult(e);
        }
        showResult(e) {
            L.glEvent.event("over_game_event", {
                isVictory: this.isVictory
            });
        }
    }(), L._uiMgr = null, L.screen = {
        realPxRatio: 0,
        offsetTop: 0,
        allScreen: !1
    };
    class C extends zs.laya.base.ZhiSeView {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake(), this.initData(), this.initDataBase(), this.initUI(), this.initEvent();
        }
        onClosed() {
            Laya.timer.clearAll(this), L.glEvent.offAllCaller(this);
        }
        initData() { }
        initDataBase() { }
        initUI() { }
        initEvent() { }
        getChild(e, t) {
            return t || (t = this), t.getChildByName(e);
        }
    }
    class v extends Laya.Script {
        constructor() {
            super(...arguments), this.moveValue = 0;
        }
        init(e) {
            this.single = e;
        }
        setMove(e, t, i, a, s) {
            let o = new Laya.Vector2(e.x, e.y), n = new Laya.Vector2(t.x, t.y), r = new Laya.Vector2(i.x, i.y);
            this.moveValue = 0;
            let l = Laya.Tween.to(this, {
                moveValue: 1
            }, a, Laya.Ease.quadInOut, new Laya.Handler(this, function () {
                s ? this.setMove(n, r, r, a, !1) : this.single.visible = !1;
            })), h = new Laya.Vector2(0, 0);
            l.update = new Laya.Handler(this, function () {
                if (h.x = o.x * (1 - this.moveValue) + n.x * this.moveValue, h.y = o.y * (1 - this.moveValue) + n.y * this.moveValue,
                    this.single.pos(h.x, h.y), !s && this.moveValue > .5) {
                    let e = 2 * (1 - this.moveValue);
                    this.single.scale(e, e);
                }
            });
        }
    }
    class S extends C {
        constructor() {
            super(...arguments), this.coinArr = [];
        }
        onAwake() {
            super.onAwake();
        }
        initUI() {
            L.commonData.coinFlyView = this;
            let e = this.getChild("middleUI", this.owner);
            e.on(Laya.Event.MOUSE_DOWN, this, function () { });
            for (let t = 0; t < 10; ++t) {
                let i = this.getChild("coin" + (t + 1), e);
                i.addComponent(v).init(i), this.coinArr.push(i);
            }
        }
        setCoinMove(e, t, i = null) {
            this.owner.visible = !0;
            let a = new Laya.Vector2(0, 0);
            for (let i = 0; i < 10; ++i) {
                let s = this.coinArr[i];
                s.visible = !0, s.scale(1, 1);
                let o = 100 * Math.random() + 100, n = Math.random() * Math.PI * 2;
                a.x = o * Math.cos(n) + e.x, a.y = o * Math.sin(n) + e.y, s.pos(e.x, e.y), s.getComponent(v).setMove(e, a, t, 500, !0);
            }
            Laya.timer.once(1200, this, function () {
                this.owner.visible = !1, i && i();
            });
        }
    }
    class w extends C {
        onAwake() {
            super.onAwake();
        }
        onOpened() {
            this.isStartTimer = !0;
        }
        initUI() {
            let e = this.getChild("bottomUI", this.owner);
            this.btnSkip = this.getChild("btnSkip", e), this.btnAgain = this.getChild("btnAgain", e),
                L.commonData.userCoin += 10, L.storageMgr.setAwardGold(L.commonData.userCoin), L.gameData.gameCoin = 0,
                this.coinValue = this.owner.getChildByName("topUI").getChildByName("coinBg").getChildByName("value"),
                this.updateScore();
            let t = this.btnSkip.getChildByName("img");
            zs.laya.platform.ADConfig.zs_share ? t.skin = "ui/common/home/img_feixiang.png" : t.skin = "ui/common/home/img_guanggao.png",
                L.commonData.freeSkinCount++;
            let tt = this.getChild("middleUI", this.owner);
            this.showList = this.getChild("showList", tt);
            platform.getInstance().initList(this.showList);
        }
        initEvent() {
            L.utils.addClickEvent(this.btnSkip, this, this.onSkipClick), L.utils.addClickEvent(this.btnAgain, this, this.onAgainClick);
        }
        updateScore() {
            this.coinValue.text = L.commonData.userCoin + "", L.storageMgr.setAwardGold(L.commonData.userCoin);
        }
        onSkinShopClick() {
            Laya.Scene.open("views/skinShop.scene", !1, Laya.Handler.create(this, e => {
                L.gameMgr.gameReset(), this.owner.close();
            }));
        }
        onAgainClick() {
            L.gameMgr.gameReset(), this.owner.close(), zs.laya.platform.PlatformMgr.onGameOverPopUp(!1);
        }
        onSkipClick() {
            function callback(e) {
                1 == e ? (L.commonData.newLevel++, L.gameMgr.gameReset(), this.owner.close(), zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.levelCompletedEvt(L.commonData.userId, L.commonData.newLevel + "")),
                    L.storageMgr.setGameStausLevel(L.commonData.newLevel), zs.laya.platform.PlatformMgr.onGameOverPopUp(!1)) :
                    2 == e ? L.uiMgr.showToast("看完视频才能跳过关卡", 2e3) :
                        L.uiMgr.showToast("暂无视频", 2e3);
            }
            L.commonData.userCoin += L.gameData.gameCoin,
                zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, callback, [1]), Laya.Handler.create(this, callback, [2]), Laya.Handler.create(this, callback, [3]));
        }
    }
    class A extends C {
        constructor() {
            super(...arguments), this.skinId = 0, this.freeUse = !1, this.model = null, this.effect = null,
                this.movev = 0, this.arr = [4, 2, 5, 3, 1];
        }
        onAwake() {
            super.onAwake();
        }
        initUI() {
            let e = this.getChild("bottomUI", this.owner);
            this.videoBtn = this.getChild("selectBtn", e), this.skipBtn = this.getChild("btnStart", e);
            let t = this.videoBtn.getChildByName("img");
            zs.laya.platform.ADConfig.zs_share ? t.skin = "ui/common/home/img_feixiang.png" : t.skin = "ui/common/home/img_guanggao.png",
                2 != L.commonData.newLevel || L.commonData.isFreeId || (L.commonData.isFreeId = !0,
                    t.visible = !1, this.freeUse = !0), this.skinId = Math.floor(5 * Math.random() + 1);
            this.getChild("middleUI", this.owner).getChildByName("tips").text = ["Dihya", "VTuber", "Nova", "Goddess", "Fate"][this.skinId - 1],
                this.initScene(), this.show3dScene(!0);
        }
        initScene() {
            let e, t;
            if (L.commonData.showScene) L.commonData.showScene.active = !0, e = L.commonData.showScene,
                Laya.stage.addChild(e); else {
                let i = (e = Laya.stage.addChild(new Laya.Scene3D())).addChild(new Laya.DirectionLight());
                i.color = new Laya.Vector3(1, .956, .839), e.ambientSphericalHarmonicsIntensity = 1,
                    e.ambientColor = new Laya.Vector3(.8313726, .8313726, .8313726), i.intensity = .6,
                    i.transform.rotate(new Laya.Vector3(10, -17, 0), !0, !1), (t = e.addChild(new Laya.Camera(0, .1, 100))).name = "mainCamera",
                    t.transform.translate(new Laya.Vector3(0, 2, 5)), t.transform.rotate(new Laya.Vector3(-10, 0, 0), !0, !1),
                    t.clearFlag = 2, L.commonData.showScene = e;
            }
        }
        show3dScene(e) {
            if (e) {
                if (this.model && (this.model.active = !1), this.model = L.gameMgr.showModel, this.setHairMat(this.skinId),
                    this.model) {
                    L.commonData.showScene.active = !0, L.commonData.showScene.addChild(this.model),
                        this.model.active = !0, this.model.transform.localRotationEulerY = 0, this.model.transform.localScale = new Laya.Vector3(1.3, 1.3, 1.3),
                        this.model.transform.position = new Laya.Vector3(0, .5, 0);
                    let e = this.model.getComponent(Laya.Animator);
                    e.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                        e.getControllerLayer(1).defaultWeight = 1, e.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                        e.play("change", 1, .15), e.play("idle", 0), Laya.timer.frameLoop(1, this, this.rotateFunc);
                }
            } else this.model.active = !1, this.model.removeSelf(), L.commonData.showScene.active = !1,
                Laya.timer.clear(this, this.rotateFunc);
        }
        rotateFunc() {
            this.model && (this.movev += .04, this.model.transform.localRotationEulerY += Laya.timer.delta / 30,
                this.model.transform.position = new Laya.Vector3(0, .5 + .02 * Math.sin(this.movev), 0));
        }
        setHairMat(e) {
            console.log(4444444444)
            let t = this.model.getChildByName("hair_F"), i = this.model.getChildByName("hair_L"), a = this.model.getChildByName("hair_S");
            t._render.material = L.gameMgr.roleMatArr[e], i._render.material = L.gameMgr.roleMatArr[e],
                a._render.material = L.gameMgr.roleMatArr[e], this.model.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[this.arr[e - 1]],
                this.model.getChildByName("fashi_02")._render.material = L.gameMgr.roleBodyArr[this.arr[e - 1]];
        }
        initEvent() {
            L.utils.addClickEvent(this.videoBtn, this, this.onVideoClick), L.utils.addClickEvent(this.skipBtn, this, this.onSkipBtnClick);
        }
        onVideoClick() {
            if (this.freeUse) Laya.Scene.open("views/ggame.scene", !1, Laya.Handler.create(this, e => {
                this.owner.close(), this.show3dScene(!1), L.gameMgr.playerLg.setPlayerHair(this.skinId),
                    L.gameData.freeSkinId = this.skinId, L.glEvent.event("play_game_event");
            })); else {
                function callback(e) {
                    1 == e ? Laya.Scene.open("views/ggame.scene", !1, Laya.Handler.create(this, e => {
                        this.owner.close(),
                             this.show3dScene(!1), 
                            L.gameMgr.playerLg.setPlayerHair(this.skinId),
                            L.gameData.freeSkinId = this.skinId, L.glEvent.event("play_game_event");
                    })) : 2 == e ? L.uiMgr.showToast("看完视频才能试用新皮肤", 2e3) : L.uiMgr.showToast("暂无视频", 2e3);
                }
                zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, callback, [1]), Laya.Handler.create(this, callback, [2]), Laya.Handler.create(this, callback, [3]));
            }
        }
        onSkipBtnClick() {
            // this.freeUse ? Laya.Scene.open("views/ggame.scene", !1, Laya.Handler.create(this, e => {
            //     this.owner.close(), this.show3dScene(!1), L.gameMgr.playerLg.setPlayerHair(this.skinId),
            //         L.gameData.freeSkinId = this.skinId, L.glEvent.event("play_game_event");
            // })) : 
            Laya.Scene.open("views/ggame.scene", !1, Laya.Handler.create(this, e => {
                this.owner.close(), this.show3dScene(!1), L.glEvent.event("play_game_event");
            }));
        }
    }
    class M extends Laya.Script {
        constructor() {
            super(...arguments), this.index = 0, this.isMove = !1, this.moveValue = 0, this.start = null,
                this.end = null;
        }
        init(e, t) {
            this.index = t, this.single = e;
        }
        setMove(e, t, i, a, s = null, o = null) {
            this.isMove = e, this.start = t, this.end = i, this.moveValue = 0, this.single.visible = !0;
            let n = new Laya.Vector2(0, 0);
            Laya.Tween.to(this, {
                moveValue: 1
            }, 800, Laya.Ease.quadInOut, new Laya.Handler(this, function () {
                this.single.visible = !1, L.gameMgr.playVibrate(!0), L.gameMgr.isOver ? (L.commonData.userCoin += a,
                    s && o && s(o)) : (L.gameData.gameCoin += a, L.commonData.GGame.setTipShowArr(this.index));
            })).update = new Laya.Handler(this, function () {
                n.x = this.start.x * (1 - this.moveValue) + this.end.x * this.moveValue, n.y = this.start.y * (1 - this.moveValue) + this.end.y * this.moveValue,
                    this.single.pos(n.x, n.y);
            });
        }
        onUpdate() { }
    }
    class k extends C {
        constructor() {
            super(...arguments), this.addTipArr = [], this.addTipShow = [], this.addTipArr2 = [],
                this.addTipShow2 = [], this.addTipOffy = [], this.hideVlaue = 0, this.theta = 0;
        }
        initData() { }
        initUI() {
            L.commonData.GGame = this;
            let e = this.getChild("topUI", this.owner), t = this.getChild("middleUI", this.owner);
            this.getChild("bottomUI", this.owner);
            this.addTipBox = this.getChild("addCoin", t), this.addTipShow.length = 12, this.addTipArr.length = 12;
            for (let e = 0; e < 12; ++e) {
                this.addTipShow[e] = !1;
                let t = this.addTipBox.getChildAt(e);
                t.visible = !1, t.addComponent(M).init(t, e), this.addTipArr[e] = t;
            }
            this.addTipBox2 = this.getChild("addTip", t), this.addTipShow2.length = 6, this.addTipArr2.length = 6,
                this.addTipOffy.length = 6;
            for (let e = 0; e < 6; ++e) {
                this.addTipShow2[e] = !1, this.addTipOffy[e] = 0;
                let t = this.addTipBox2.getChildAt(e);
                t.visible = !1, this.addTipArr2[e] = t;
            }
            this.tipPanel = this.getChild("tipPanel", t), this.tipPanel.visible = !1, Laya.timer.once(4e3, this, this.hidePanle);
            let i = this.getChild("tp1", this.tipPanel), a = this.getChild("tp2", this.tipPanel);
            this.getChild("tp3", this.tipPanel).visible = !1, L.commonData.newLevel < 3 ? (i.visible = !0,
                a.visible = !1) : 3 == L.commonData.newLevel ? (i.visible = !1, a.visible = !0) : (i.visible = L.commonData.newLevel % 2 == 0,
                    a.visible = L.commonData.newLevel % 2 == 1), this.coinBg = this.getChild("coinBg", e),
                this.userCoin = this.getChild("value", this.coinBg), this.userCoin.text = "0", Laya.timer.loop(100, this, this.updateScore);
        }
        showVictory() {
            zs.laya.platform.PlatformMgr.onGameWinPopUp({
                isWin: !0
            });
        }
        hidePanle() {
            this.hideVlaue = 0, Laya.Tween.to(this, {
                hideVlaue: 1
            }, 1e3, Laya.Ease.linearIn, new Laya.Handler(this, function () {
                this.tipPanel.visible = !1;
            })).update = new Laya.Handler(this, function () {
                this.tipPanel.alpha = 1 - this.hideVlaue;
            });
        }
        showEndTip() {
            this.tipPanel.visible = !0, this.tipPanel.alpha = 1;
            let e = this.getChild("tp1", this.tipPanel), t = this.getChild("tp2", this.tipPanel);
            this.getChild("tp3", this.tipPanel).visible = !1, e.visible = !1, t.visible = !0,
                Laya.timer.once(2e3, this, this.hidePanle);
        }
        setGameCoin() {
            this.userCoin.text = L.gameData.gameCoin + "";
        }
        gameStartSet() {
            L.soundMgr.playBGM(), L.gameMgr.gameStart();
        }
        initEvent() {
            L.glEvent.on("over_game_event", this, this.onGameOverEvent), L.glEvent.on("init_game_event", this, this.onGameInitEvent),
                L.glEvent.on("play_game_event", this, this.onGamePlayEvent), L.gameMgr.initGame(!0),
                Laya.stage.on(zs.laya.platform.PlatformMgr.OPEN_WIN_VIEW, this, this.onOpenWinView),
                Laya.stage.on(zs.laya.platform.PlatformMgr.OPEN_FAILED_VIEW, this, this.onOpenFailedView);
        }
        onUpdate() {
            for (let e = 0; e < 6; ++e) if (this.addTipShow2[e]) {
                let t = this.addTipArr2[e];
                if (t.y > this.addTipOffy[e]) {
                    t.y -= .15 * Laya.timer.delta;
                    t.y, this.addTipOffy[e];
                } else t.visible = !1, this.addTipShow2[e] = !1;
            }
            let e = this.getChild("tp3", this.tipPanel);
            this.theta += Laya.timer.delta / 200;
            let t = 1.4 + .2 * Math.sin(this.theta);
            e.scale(t, t);
        }
        setTipShowArr(e) {
            this.addTipShow[e] = !1;
        }
        getHitIndex() {
            for (let e = 0; e < 12; ++e) if (!this.addTipShow[e]) return this.addTipShow[e] = !0,
                e;
            return -1;
        }
        showAddUi(e, t) {
            let i = this.getHitIndex();
            if (i > -1) {
                let a = this.addTipArr[i], s = e.clone();
                a.visible = !0, L.gameMgr.camera.viewport.project(e, L.gameMgr.camera.projectionViewMatrix, s);
                let o = new Laya.Vector2(s.x / Laya.stage.clientScaleX, s.y / Laya.stage.clientScaleY - Laya.stage.height / 2), 
                n = new Laya.Vector2(this.coinBg.x + 10, this.coinBg.y - Laya.stage.height / 2 + 11);
                a.pos(o.x, o.y), a.getComponent(M).setMove(!0, o, n, t);
            } else L.gameData.gameCoin += t;
        }
        getHitIndex2() {
            for (let e = 0; e < 6; ++e) if (!this.addTipShow2[e]) return this.addTipShow2[e] = !0,
                e;
            return -1;
        }
        showAddUi2(e, t, i) {
            let a = this.getHitIndex2();
            if (a > -1) {
                let s = this.addTipArr2[a], o = e.clone();
                o.y += .5, L.gameMgr.camera.viewport.project(e, L.gameMgr.camera.projectionViewMatrix, o),
                    s.pos((o.x - 10) / Laya.stage.clientScaleX, o.y / Laya.stage.clientScaleY - Laya.stage.height / 2),
                    this.addTipOffy[a] = o.y / Laya.stage.clientScaleY - 120 - Laya.stage.height / 2,
                    s.visible = !0, s.alpha = 1, s.value = t, i ? (s.getChildByName("img1").visible = !1,
                        s.getChildByName("img2").visible = !0, s.skin = "ui/common/game/clip_1_9.png") : (s.getChildByName("img1").visible = !0,
                            s.getChildByName("img2").visible = !1, s.skin = "ui/common/game/clip_1_91.png");

            }
        }
        updateScore() {
            this.userCoin.text = L.gameData.gameCoin + "";
        }
        onClosed() {
            Laya.timer.clearAll(this), L.glEvent.offAllCaller(this);
        }
        onGameOverEvent(e) {
            e && e.isVictory ? (L.gameMgr.setGameOver(), L.gameData.isStart = !1, this.showVictory()) : this.revivalFail();
        }
        showGoldAni() {
            let e = new Laya.Point(0, 0);
            e.x = Laya.stage.width / 2, e.y = Laya.stage.height / 2;
            let t = new Laya.Point(574, 265 - (Laya.stage.height - 1334) / 2);
            L.utils.showCoinFly(e, t, function () {
                L.gameData.gameCoin += 10;
            });
        }
        revivalSet() { }
        revival() {
            L.gameMgr.isOver = !1;
        }
        revivalFail() {
            L.soundMgr.stopBGM(), L.soundMgr.stop("4fire");
            L.gameMgr.setGameOver(), zs.laya.platform.PlatformMgr.onGameFaildPopUp({
                isWin: !1
            });
        }
        onOpenWinView() {
            this.owner.close(), this.onClosed(), Laya.Scene.open("views/success.scene", !1, Laya.Handler.create(this, () => { }));
        }
        onOpenFailedView() {
            this.owner.close(), this.onClosed(), Laya.Scene.open("views/fail.scene", !1, Laya.Handler.create(this, () => { }));
        }
        onGameInitEvent() { }
        onGamePlayEvent() {
            this.getChild("topUI", this.owner).visible = !0, this.gameStartSet(), L.gameData.gameCoin = 0;
        }
        onBackEvent() {
            this.owner.close(), L.gameMgr.over(), L.gameMgr.initGame(!0), Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, () => { }));
        }
    }
    class b extends C {
        constructor() {
            super(...arguments), this.soundSkin = "ui/common/btn_sound_", this.vibrateSkin = "ui/common/btn_vibrate_",
                this.moveValues = 0, this.moveValue = 0, this.isOther = !1;
        }
        onAwake() {
            super.onAwake();
        }
        initUI() {
            let e = this.getChild("topUI", this.owner), t = this.getChild("middleUI", this.owner);
            this.getChild("level", e).getChildByName("font").value = L.commonData.newLevel + "",
                this.btnSound = this.getChild("btnSound", t), this.setSound(L.storageMgr.isPlaySound()),
                this.btnVibrate = this.getChild("btnVibrate", t), this.setVibrate(L.storageMgr.isPlayVibrate()),
                this.btnRegister = this.getChild("btnSign", t), this.coinValue = e.getChildByName("coinBg").getChildByName("value"),
                this.btnPlay = this.getChild("btnPlay", t), this.btnPlay2 = this.getChild("btnPlay2", t),
                this.fingure = this.getChild("fingure", t), Laya.timer.frameLoop(1, this, this.fingureLoop),
                this.updateScore(), this.skinShopBtn = this.getChild("skinBtn", t);
        }
        fingureLoop() {
            this.moveValues += .04;
            let e = 128 * Math.sin(this.moveValues);
            this.fingure.x = 353 + e;
        }
        initEvent() {
            L.utils.addClickEvent(this.btnVibrate, this, this.onVibrateClick), L.utils.addClickEvent(this.btnSound, this, this.onSoundClick),
                L.utils.addClickEvent(this.btnRegister, this, this.onRegisterClick), L.utils.addClickEvent(this.skinShopBtn, this, this.onSkinShopClick),
                this.btnPlay.on(Laya.Event.MOUSE_DOWN, this, this.onPlayGameClick), this.btnPlay2.on(Laya.Event.MOUSE_DOWN, this, this.onPlayGameClick),
                L.glEvent.on("update_coin", this, this.updateScore);
        }
        onRegisterClick() {
            Laya.Scene.open("views/register.scene", !1);
        }
        onClosed() {
            L.glEvent.off("update_coin", this, this.updateScore);
        }
        setSound(e) {
            let t = e ? "on.png" : "off.png";
            this.btnSound.skin = this.soundSkin + t, Laya.SoundManager.muted = !e, L.storageMgr.setPlaySound(e);
        }
        setVibrate(e) {
            let t = e ? "on.png" : "off.png";
            this.btnVibrate.skin = this.vibrateSkin + t, L.storageMgr.setPlayVibrate(e);
        }
        onSoundClick() {
            this.setSound(!L.storageMgr.isPlaySound());
        }
        onVibrateClick() {
            this.setVibrate(!L.storageMgr.isPlayVibrate());
        }
        onPlayGameClick() {
            if (!this.isOther) {
                platform.getInstance().showInterstitial();
                if (this.isOther = !0, zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.gameStartEvt(L.commonData.userId)),
                    L.commonData.newLevel > 1 && (L.commonData.freeSkinCount > 0 || Math.random() < .5 || 2 == L.commonData.newLevel)) {
                    let e = () => {
                        Laya.Scene.open("views/freeSkin.scene", !1, Laya.Handler.create(this, e => {
                            this.owner.close();
                        }));
                    }, t = zs.laya.platform.ADConfig;
                    t.zs_switch && t.isPublicVersion() && t.zs_start_game_video_switch ? this.onStartToVideo(e) : this.onCheckAd(e);
                } else {
                    let e = () => {
                        L.gameMgr.playVibrate(!1), Laya.Scene.open("views/ggame.scene", !1, Laya.Handler.create(this, e => {
                            this.owner.close(), L.glEvent.event("init_game_event", {
                                isPlay: !0
                            }), L.glEvent.event("play_game_event");
                        }));
                    }, t = zs.laya.platform.ADConfig;
                    t.zs_switch && t.isPublicVersion() && t.zs_start_game_video_switch ? this.onStartToVideo(e) : this.onCheckAd(e);
                }
            }
        }
        onUpdate() { }
        onStartToVideo(e) {
            zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, () => {
                this.onCheckAd(e);
            }), Laya.Handler.create(this, () => {
                this.onCheckAd(e);
            }), Laya.Handler.create(this, () => {
                this.onCheckAd(e);
            }));
        }
        onCheckAd(e) {
            // zs.laya.platform.ADConfig.isOpenEgg(1) ? (Laya.stage.once(zs.laya.platform.PlatformMgr.EGG_GET_AWARD, this, () => {
            //     L.commonData.userCoin += 100, L.uiMgr.showToast("Coin +100", 2e3), L.storageMgr.setAwardGold(L.commonData.userCoin),
            //         e();
            // }), zs.laya.platform.PlatformMgr.showKnockEggView(null)) : 
            e();
        }
        onRankClick() {
            Laya.Scene.open("views/rank.scene", !1, Laya.Handler.create(this, e => {
                this.owner.close();
            }));
        }
        onSkinShopClick() {
            this.isOther || (this.isOther = !0, Laya.Scene.open("views/skinShop.scene", !1, Laya.Handler.create(this, e => {
                this.owner.close();
            })));
        }
        updateScore() {
            this.coinValue.text = L.commonData.userCoin + "", L.storageMgr.setAwardGold(L.commonData.userCoin);
        }
    }
    class D extends C {
        constructor() {
            super(...arguments), this._loadCount = 2, this._loadNum = 0, this._isLoadFinish = !1,
                this.length = 492, this.loadPres = 0;
        }
        onAwake() {
            super.onAwake();
        }
        onEnable() {
            zs.laya.sdk.SdkService.initSDK(), zs.laya.sdk.DeviceService.initDevice(), L.rankMgr.init(),
                L.resourceMgr.init(L.glEvent), L.configMgr.init(L.glEvent), L.wxMgr.init(), zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.startupEvt()),
                this.setPlayerName(), Laya.Browser.onWeiXin && (this._loadCount = 2), this.initLoaclalData(),
                zs.laya.WebService.UseWebApi = !0, zs.laya.WebService.RequestSign = "cjcc_api_secret",
                zs.laya.WebService.WebApiMap = {
                    login: "",
                    gameCfg: "",
                    updateInfo: "",
                    logVideo: ""
                }, Laya.stage.on(zs.laya.XHRUtils.NET_XHR_RESPONSE, this, this.onNetXHRResponse),
                this.login(), Laya.loader.load(["jsonConfig/platformCfg.json"], Laya.Handler.create(this, this.onPlatformCfgReady, null, !1));
        }
        setPlayerName() {
            // L.commonData.playerNameStrArr = L.commonData.playerNameStr1.split(",");
        }
        onPlatformCfgReady() {
            var e = Laya.loader.getRes("jsonConfig/platformCfg.json");
            zs.laya.platform.PlatformMgr.initCFG(e), zs.laya.platform.PlatformMgr.initSoundUrl(null, null),
                zs.laya.sdk.ZSReportSdk.loadConfig(function (t) {
                    zs.laya.platform.ADConfig.initAdSetting(e.publishVer, t), zs.laya.platform.PlatformMgr.initGameAd(),
                        Laya.stage.event(zs.laya.platform.PlatformMgr.AD_CONFIIG_LOADED);
                }, function (t) {
                    console.error(t), zs.laya.platform.ADConfig.initAdSetting(e.publishVer, e.adCfg),
                        zs.laya.platform.PlatformMgr.initGameAd();
                });
        }
        login() {
            zs.laya.WebService.requestBaseCfg(null);
            var e = Laya.LocalStorage.getItem(zs.laya.WebService.RequestSign);
            if (e) {
                var t = JSON.parse(e);
                if (t && t.lastLoginDate && zs.laya.MiscUtils.isToday(t.lastLoginDate)) return zs.laya.WebService.RequestHeader = {
                    t: t.t,
                    timestamp: t.timestamp
                }, console.log("1---------------登录：" + t.playerInfo.user_id), void zs.laya.WebService.requestLoginByUserId(t.playerInfo.user_id);
            }
            zs.laya.sdk.SdkService.login(Laya.Handler.create(this, function (e) {
                e && (console.log("------------: ", e), this.loginData = e, zs.laya.WebService.requestLoginByCode(this.loginData.identityId));
            }), Laya.Handler.create(this, function (e) {
                // console.error("login platform error:" + e), 1 == e.code && (console.log("2---------------登录：1"),
                zs.laya.WebService.requestLoginByUserId(1)
                // );
            }));
        }
        onNetXHRResponse(e, t, i, a) {
            if (console.log(t + " : response:", a), a && a.data) switch (t) {
                case zs.laya.WebService.WebApiMap.login:
                    var s = a.data;
                    L.storageMgr.userInfo.user_id = s.user_id, L.commonData.userId = s.user_id, L.commonData.userCoin = s.gold,
                        L.commonData.newLevel = s.level_id, zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.loginEvt(s.user_id)),
                        s.user_id && zs.laya.platform.PlatformMgr.setUserID(s.user_id, s.is_new), s.t && s.timestamp && (zs.laya.WebService.RequestHeader = {
                            t: s.t,
                            timestamp: s.timestamp
                        }), s.user_id && zs.laya.sdk.ZSReportSdk.init(s.user_id, Laya.Browser.onAndroid ? 1 : 0);
                    break;

                case zs.laya.WebService.WebApiMap.gameCfg:
                    console.log("获取游戏后台配置成功!");
                    break;

                case zs.laya.WebService.WebApiMap.logVideo:
                    zs.laya.sdk.ZSReportSdk.sendVideoLog();
                    break;

                case zs.laya.WebService.WebApiMap.updateInfo:
                    console.log("update player info success!");
            }
        }
        initLoaclalData() {
            let e = L.storageMgr.gameStatus;
            L.commonData.userCoin = e.awardGold, L.commonData.skinId = e.skinId, L.commonData.newLevel = e.level;
        }
        initUI() {
            let e = this.owner.getChildByName("middleUI");
            this.lblPres = e.getChildByName("lblPres"), this.barPres = e.getChildByName("progress"),
                Laya.timer.loop(200, this, this.loopLoading);
        }
        loopLoading() {
            this.loadPres = this.loadPres + .03 * Math.random(), this.loadPres > 1 && (this.loadPres = 1),
                this.onLoading(0);
        }
        initEvent() {
            L.glEvent.on("load_finish_event", this, this.onLoadFinish), L.glEvent.on("load_pass_event", this, this.onLoading);
        }
        onLoadFinish(e) {
            this._loadNum++, this.onLoading(0), this._loadNum >= this._loadCount && (this.barPres.width = this.length,
                this.lblPres.text = "100%", this.loadFinished = !0, this.loadGameScene());
        }
        onLoading(e) {
            e < this.loadPres ? e = this.loadPres : this.loadPres = e;
            let t = (this._loadNum + e) / this._loadCount;
            t > 1 && (t = 1);
            let i = Math.floor(100 * t);
            this.barPres.width = t * this.length, this.lblPres.text = i + "%";
        }
        loadGameScene() {
            this.openGameScene();
        }
        openGameScene() {
            let e = this;
            window.WebAudioEngine.pause = !L.storageMgr.isPlaySound();
            window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
            platform.getInstance().hideSplash();
            platform.getInstance().showBanner();
            Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, t => {
                Laya.timer.clear(this, this.loopLoading), e.owner.getChildByName("middleUI").visible = !1;
            }));

        }
    }
    class _ extends Laya.Script {
        onAwake() {
            super.onAwake(), this.initUI(), this.initEvent();
        }
        initUI() {
            let e = this.owner.getChildByName("middleUI");
            this.friendPanel = e.getChildByName("friend"), this.friendList = this.friendPanel.getChildByName("list"),
                this.touchArea = this.friendPanel.getChildByName("touchArea"), this.touchArea.alpha = 0;
        }
        initEvent() {
            let e = 0, t = 0, i = 0, a = 0;
            this.touchArea.on(Laya.Event.MOUSE_DOWN, this, function (a) {
                a.stopPropagation(), i = 0, t = a.nativeEvent.timeStamp, e = a.nativeEvent.changedTouches[0].clientY,
                    L.rankMgr.onFrientMouseEvent({
                        cmd: "touch_start"
                    });
            }), this.touchArea.on(Laya.Event.MOUSE_MOVE, this, function (t) {
                t.stopPropagation(), i = t.nativeEvent.changedTouches[0].clientY - e, L.rankMgr.onFrientMouseEvent({
                    cmd: "touch_move",
                    deltaY: i * Laya.Browser.pixelRatio
                });
            }), this.touchArea.on(Laya.Event.MOUSE_UP, this, function (e) {
                e.stopPropagation(), a = i / (e.nativeEvent.timeStamp - t), L.rankMgr.onFrientMouseEvent({
                    cmd: "touch_end",
                    speed: a
                });
            }), this.touchArea.on(Laya.Event.MOUSE_OUT, this, function (e) {
                e.stopPropagation(), a = i / (e.nativeEvent.timeStamp - t), L.rankMgr.onFrientMouseEvent({
                    cmd: "touch_cancel",
                    speed: a
                });
            });
        }
        onDisable() {
            this.touchArea.offAllCaller(this), L.rankMgr.showFriendRank(!1);
        }
        show() {
            this.friendPanel.visible = !0, L.rankMgr.resetSize(this.friendList.width, this.friendList.height),
                L.rankMgr.showFriendRank(!0);
        }
        hide() {
            this.friendPanel.visible = !1, L.rankMgr.showFriendRank(!1);
        }
        getChild(e) {
            this.findChild(this.owner, e);
        }
        findChild(e, t) {
            if (null != e) {
                let i = t.split("/"), a = e;
                for (let e = 0; e < i.length; e++) if (!(a = a.getChildByName(i[e]))) return null;
                return a;
            }
            return null;
        }
    }
    class V extends Laya.Script {
        onAwake() {
            super.onAwake(), this.initData(), this.initUI();
        }
        initData() { }
        initUI() {
            let e = this.owner.getChildByName("middleUI");
            this.worldPanel = e.getChildByName("world");
        }
        show() {
            this.worldPanel.visible = !0, console.error("未实现世界排行榜");
        }
        hide() {
            this.worldPanel.visible = !1;
        }
        getChild(e) { }
    }
    class P extends C {
        onAwake() {
            super.onAwake(), this.initData(), this.initUI();
        }
        onStart() {
            this.initEvent(), this.onRankClick(0);
        }
        initData() {
            this.rankFriend = this.owner.getComponent(_), this.rankWorld = this.owner.getComponent(V);
        }
        initUI() {
            let e = this.getChild("topUI", this.owner);
            this.btnBack = this.getChild("btnBack", e);
            let t = this.getChild("middleUI", this.owner);
            this.tabRank = this.getChild("tabRank", t);
        }
        initEvent() {
            L.utils.addClickEvent(this.btnBack, this, this.onCloseClick), this.tabRank.selectHandler = new Laya.Handler(this, this.onRankClick);
        }
        onRankClick(e) {
            1 != e ? (this.rankFriend && this.rankFriend.show(), this.rankWorld && this.rankWorld.hide()) : (this.rankFriend && this.rankFriend.hide(),
                this.rankWorld && this.rankWorld.show());
        }
        onPlayEvent() { }
        onCloseClick() { }
    }
    class z extends C {
        constructor() {
            super(...arguments), this.itemArr = [], this.coinArr = [100, 150, 200, 300, 400, 500, 1e3],
                this.moveValue = 0;
        }
        onAwake() {
            super.onAwake();
        }
        initUI() {
            let e = this.getChild("middleUI", this.owner);
            e.scale(0, 0), this.setAni(0, 1, !1), this.btnGet = this.getChild("btnGet", e),
                this.btnGetDouble = this.getChild("btnGetDouble", e), this.btnClose = this.getChild("btnClose", e);
            let t = L.storageMgr.getRegisterArr();
            if (t[6] && this.checkTime()) for (let e = 0; e < 7; ++e) t[e] = !1, L.storageMgr.setRegisterArr(e, !1);
            let i = this.getChild("panel", e);
            for (let e = 0; e < 7; ++e) {
                let a = this.getChild("itme" + (e + 1), i);
                if (this.itemArr[e] = a, 6 == e) {
                    let i = a.getChildByName("txt1"), s = a.getChildByName("txt2"), o = a.getChildByName("gold"), n = a.getChildByName("img");
                    t[e] ? (i.visible = !1, s.text = "Signed", o.visible = !1, n.visible = !0) : (i.visible = !0,
                        o.visible = !0, n.visible = !1);
                } else {
                    let i = a.getChildByName("txt1"), s = a.getChildByName("txt2"), o = a.getChildByName("gold"), n = a.getChildByName("img");
                    t[e] ? (i.visible = !1, s.text = "Signed", o.visible = !1, n.visible = !0) : (i.visible = !0,
                        o.visible = !0, n.visible = !1);
                }
            }
            let a = this.getChild("tip", e);
            L.storageMgr.getRegisterSingle() ? (this.btnGetDouble.visible = !1, this.btnGet.visible = !1,
                a.visible = !0) : (this.btnGetDouble.visible = !0, this.btnGet.visible = !0, a.visible = !1);
            let s = this.btnGetDouble.getChildByName("img");
            zs.laya.platform.ADConfig.zs_share ? s.skin = "ui/common/home/img_feixiang.png" : s.skin = "ui/common/home/img_guanggao.png";
        }
        showGoldAni(e) {
            let t = this.getChild("middleUI", this.owner), i = this.getChild("gold", this.itemArr[e]), a = new Laya.Point(0, 0);
            e < 6 ? (i.localToGlobal(a, !1, t), a.x += 38, a.y += 42) : (i.localToGlobal(a, !1, t),
                a.x += 63, a.y += 50);
            let s = new Laya.Point(574, 156 - (Laya.stage.height - 1334) / 2);
            L.utils.showCoinFly(a, s, null);
        }
        setAni(e, t, i = !1) {
            let a = this.getChild("middleUI", this.owner);
            this.moveValue = e, Laya.Tween.to(this, {
                moveValue: t
            }, 300, Laya.Ease.quadInOut, new Laya.Handler(this, function () {
                i && Laya.Scene.close("views/register.scene");
            })).update = new Laya.Handler(this, function () {
                a.scale(this.moveValue, this.moveValue);
            });
        }
        initEvent() {
            L.utils.addClickEvent(this.btnGet, this, this.onGetClick), L.utils.addClickEvent(this.btnGetDouble, this, this.onGetDoubleClick),
                L.utils.addClickEvent(this.btnClose, this, this.onCloseClick);
        }
        checkTime() {
            let e = new Date().valueOf() / 1e3, t = L.storageMgr.getLastRegisterTime();
            return Math.floor(e / 86400) > Math.floor(t / 86400);
        }
        onGetClick() {
            let e = 0, t = L.storageMgr.getRegisterArr();
            for (let i = 0; i < t.length; ++i) if (!t[i]) {
                e = i;
                break;
            }
            this.setRegister(e);
            let i = new Date().valueOf() / 1e3;
            L.storageMgr.setLastRegisterTime(i), L.storageMgr.setRegisterArr(e, !0), L.storageMgr.setRegisterSingle(!0),
                L.commonData.userCoin += this.coinArr[e], L.storageMgr.setAwardGold(L.commonData.userCoin),
                L.glEvent.event("update_coin"), this.showGoldAni(e);
        }
        setRegister(e) {
            let t = this.itemArr[e], i = t.getChildByName("txt1"), a = t.getChildByName("txt2"), s = t.getChildByName("gold"), o = t.getChildByName("img");
            i.visible = !1, a.text = "Signed", s.visible = !1, o.visible = !0;
            let n = this.getChild("middleUI", this.owner), r = this.getChild("tip", n);
            this.btnGetDouble.visible = !1, this.btnGet.visible = !1, r.visible = !0;
        }
        onGetDoubleClick() {
            let e = 0, t = L.storageMgr.getRegisterArr();
            for (let i = 0; i < t.length; ++i) if (!t[i]) {
                e = i;
                break;
            }
            zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, function () {
                L.commonData.userCoin += 3 * this.coinArr[e], L.storageMgr.setAwardGold(L.commonData.userCoin),
                    this.showGoldAni(e), this.setRegister(e), L.storageMgr.setRegisterArr(e, !0), L.storageMgr.setRegisterSingle(!0),
                    L.glEvent.event("update_coin"), L.uiMgr.showToast("Coin +" + 3 * this.coinArr[e], 2e3);
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("看完视频才能获得奖励", 2e3);
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("暂无视频", 2e3);
            }));
        }
        onCloseClick() {
            this.setAni(1, 0, !0);
        }
    }
    class x extends C {/////////
        constructor() {
            super(...arguments), this.skinArr = [], this.selectIndex = 0, this.indexArr = [],
                this.moveIndex = 0, this.model = null, this.movev = 0, this.unlockIndex = 0, this.isCoin = !1,
                this.randomPos = 0; this.colorArr = [1, 211 / 255, 135 / 255, 50 / 255, 190 / 255,
                    1, 184 / 255, 112 / 255,
                    1, 158 / 255, 238 / 255, 52 / 255]
        }
        onAwake() {
            super.onAwake();
        }
        initUI() {
            let e = this.getChild("topUI", this.owner), t = this.getChild("middleUI", this.owner), i = this.getChild("skinPanel", t);
            this.backBtn = this.getChild("backBtn", e), this.unLockBtn = this.getChild("unLockBtn", t),
                this.unlockValue = this.unLockBtn.getChildByName("value"), this.getBtn = this.getChild("getBtn", t);
            let a = L.storageMgr.getUnlockCount();
            a > L.commonData.skinValueArr.length - 1 && (a = L.commonData.skinValueArr.length - 1),
                this.unlockValue.text = L.commonData.skinValueArr[a] + "", this.selectIndex = L.storageMgr.getSkinId(),
                this.coinValue = this.getChild("coinBg", e).getChildByName("value"), this.coinValue.text = L.commonData.userCoin + "",
                this.skinArr.length = 6;
            L.storageMgr.getSkinArr();
            for (let e = 0; e < 6; ++e) {
                let t = i.getChildAt(e + 1);
                t.getChildByName("lock").visible = !1, this.skinArr[e] = t, t.on(Laya.Event.MOUSE_DOWN, this, this.selectSkin, [e]);
            }
            this.skinArr[this.selectIndex].getChildByName("lock").visible = !0, this.setSign(),
                this.initScene(), this.show3dScene(!0), this.setRoleSkin(this.selectIndex);
            let s = this.getBtn.getChildByName("img");
            zs.laya.platform.ADConfig.zs_share ? s.skin = "ui/common/home/img_feixiang.png" : s.skin = "ui/common/home/img_guanggao.png",
                Laya.timer.frameLoop(1, this, this.rotateFunc);
            window.yad.visible = false;
        }
        initEvent() {
            L.utils.addClickEvent(this.backBtn, this, this.onBackClick), L.utils.addClickEvent(this.unLockBtn, this, this.onUnlockClick),
                L.utils.addClickEvent(this.getBtn, this, this.onGetBtnClick);
        }
        initScene() {
            let e, t;
            if (L.commonData.showScene) L.commonData.showScene.active = !0, e = L.commonData.showScene,
                Laya.stage.addChild(e); else {
                let i = (e = Laya.stage.addChild(new Laya.Scene3D())).addChild(new Laya.DirectionLight());
                i.color = new Laya.Vector3(1, .956, .839), e.ambientSphericalHarmonicsIntensity = 1,
                    e.ambientColor = new Laya.Vector3(.8313726, .8313726, .8313726), i.intensity = .6,
                    i.transform.rotate(new Laya.Vector3(10, -17, 0), !0, !1), (t = e.addChild(new Laya.Camera(0, .1, 100))).name = "mainCamera",
                    t.transform.translate(new Laya.Vector3(0, 2, 5)), t.transform.rotate(new Laya.Vector3(-10, 0, 0), !0, !1),
                    t.clearFlag = 2, L.commonData.showScene = e;
            }
        }
        rotateFunc() {
            this.model && (this.movev += .04, this.model.transform.localRotationEulerY += Laya.timer.delta / 30,
                this.model.transform.position = new Laya.Vector3(0, 1.5 + .02 * Math.sin(this.movev), 0));
        }
        setRoleSkin(e) {
            if (this.model) {
                this.model.getChildByName("body_01")._render.material = L.gameMgr.roleBodyArr[e],
                    this.model.getChildByName("fashi_02")._render.material = L.gameMgr.roleBodyArr[e];
                this.setHairMat(e);
            }
        }
        setHairMat(e) {
            console.log(33333333333333333333)
            let t = this.model.getChildByName("hair_F"),
                i = this.model.getChildByName("hair_L"), a = this.model.getChildByName("hair_S");
            t._render.material = L.gameMgr.roleMatArr[e],
                i._render.material = L.gameMgr.roleMatArr[e],
                a._render.material = L.gameMgr.roleMatArr[e]
            // ,this.changePropColor(e);
        }
        changePropColor(e) {
            if (L.gameMgr.obstacleLg) {
                let t = L.gameMgr.obstacleLg.daojuArr1;
                1 == this.index && (t = L.gameMgr.obstacleLg.daojuArr2);
                for (let i = 0; i < t.length; ++i) {
                    if (5 == t[i].type && t[i].isActive) {
                        t[i].item._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1);
                    }
                    if (51 == t[i].type && t[i].isActive) for (let a = 0; a < t[i].item.numChildren; ++a) {
                        let s = t[i].item.getChildAt(a);
                        "prop5" == s.name && (s._render.material.albedoColor = new Laya.Vector4(this.colorArr[3 * e], this.colorArr[3 * e + 1], this.colorArr[3 * e + 2], 1));
                    }
                }
            }
        }
        show3dScene(e) {
            if (e) {
                if (this.model = L.gameMgr.showModel, this.model) {
                    L.commonData.showScene.active = !0, L.commonData.showScene.addChild(this.model),
                        this.model.active = !0, this.model.transform.localScale = new Laya.Vector3(1.3, 1.3, 1.3),
                        this.model.transform.position = new Laya.Vector3(0, 1.5, 0);
                    let e = this.model.getComponent(Laya.Animator);
                    e.getControllerLayer(1).blendingMode = Laya.AnimatorControllerLayer.BLENDINGMODE_ADDTIVE,
                        e.getControllerLayer(1).defaultWeight = 1, e.getControllerLayer(1)._playStateInfo._currentState.speed = 0,
                        e.play("change", 1, .15), e.play("idle", 0);
                }
            } else this.model.removeSelf(), L.commonData.showScene.active = !1;
        }
        onGetBtnClick() {
            zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, function () {
                L.commonData.userCoin += 1000, L.storageMgr.setAwardGold(L.commonData.userCoin),
                    this.coinValue.text = L.commonData.userCoin + "", this.showGoldAni();
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("看完视频才能获得金币", 2e3);
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("暂无视频", 2e3);
            }));
        }
        showGoldAni() {
            let e = new Laya.Point(0, 0);
            e.x = Laya.stage.width / 2, e.y = Laya.stage.height / 2;
            let t = new Laya.Point(554, 156 - (Laya.stage.height - 1334) / 2);
            L.utils.showCoinFly(e, t, null);
        }
        selectSkin(e) {
            if (L.storageMgr.getSkinArr()[e]) {
                this.selectIndex = e, this.skinArr[this.selectIndex].getChildByName("lock").visible = !0,
                    this.setRoleSkin(this.selectIndex);
                for (let e = 0; e < this.skinArr.length; ++e) e != this.selectIndex && (this.skinArr[e].getChildByName("lock").visible = !1);
                this.show3dScene(!0);
            }
        }
        onUnlockClick() {
            L.commonData.userCoin < L.commonData.skinValueArr[L.storageMgr.getUnlockCount()] ? L.uiMgr.showToast("Coins Are Not Enough!", 2e3) : this.randomUnlock(!0);
        }
        onVideoClick() {
            this.isCoin = !1, zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, function () {
                this.unlockIndex < 0 ? this.randomUnlock(!1) : this.unlockSkin(this.unlockIndex);
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("看完视频才能获得皮肤", 2e3);
            }), Laya.Handler.create(this, function () {
                L.uiMgr.showToast("今日视频观看次数已用尽", 2e3);
            }));
        }
        onBackClick() {
            L.storageMgr.setSkinId(this.selectIndex), L.commonData.skinId = this.selectIndex,
                this.show3dScene(!1), L.gameMgr && L.gameMgr.playerLg.changeSkin(), Laya.Scene.open("views/home.scene", !1, Laya.Handler.create(this, e => {
                    this.owner.close();
                }));
        }
        randomUnlock(e) {
            let t = L.storageMgr.getSkinArr();
            this.indexArr = [], this.moveIndex = 0;
            for (let e = 0; e < t.length; ++e) t[e] || this.indexArr.push(e);
            this.isCoin = e, this.indexArr.length > 1 ? (L.soundMgr.play("skinSelect"), this.randomPos = 8 + Math.floor(6 * Math.random()),
                Laya.timer.loop(150, this, this.setpos)) : 1 == this.indexArr.length ? this.unlockSkin(this.indexArr[0]) : (L.uiMgr.showToast("You have unlocked all skins", 2e3),
                    console.log("全部解锁"));
        }
        unlockSkin(e) {
            this.skinArr[e];
            this.isCoin && (L.commonData.userCoin -= L.commonData.skinValueArr[L.storageMgr.getUnlockCount()],
                L.storageMgr.setAwardGold(L.commonData.userCoin)), this.isCoin = !1, L.storageMgr.unlockSkin(e),
                this.selectIndex = e, this.setRoleSkin(this.selectIndex), this.skinArr[this.selectIndex].getChildByName("lock").visible = !0;
            for (let e = 0; e < this.skinArr.length; ++e) e != this.selectIndex && (this.skinArr[e].getChildByName("lock").visible = !1);
            this.setSign(), this.show3dScene(!0);
            let t = L.storageMgr.getUnlockCount();
            t > L.commonData.skinValueArr.length - 1 && (t = L.commonData.skinValueArr.length - 1),
                this.unlockValue.text = L.commonData.skinValueArr[t] + "", this.coinValue.text = L.commonData.userCoin + "";
        }
        setpos() {
            this.skinArr[this.indexArr[this.moveIndex % this.indexArr.length]];
            this.setSign2(this.moveIndex % this.indexArr.length), L.storageMgr.isPlayVibrate() && zs.laya.sdk.DeviceService.VibrateShort(),
                L.soundMgr.play("skinRan"), this.moveIndex++, this.moveIndex == this.randomPos && (this.unlockSkin(this.indexArr[(this.moveIndex - 1) % this.indexArr.length]),
                    Laya.timer.clear(this, this.setpos));
        }
        setSign() {
            let e = L.storageMgr.getSkinArr();
            for (let t = 0; t < this.skinArr.length; ++t) e[t] ?
                (this.skinArr[t].getChildByName("img1").visible = !0,
                    this.skinArr[t].getChildByName("img2").visible = !1,
                    this.skinArr[t].getChildByName("txt").visible = !1) :
                (this.skinArr[t].getChildByName("img1").visible = !1,
                    this.skinArr[t].getChildByName("img2").visible = !0,
                    this.skinArr[t].getChildByName("txt").visible = !0);
        }
        setSign2(e) {
            for (let t = 0; t < this.indexArr.length; ++t) t == e ? (this.skinArr[this.indexArr[t]].getChildByName("img1").visible = !0,
                this.skinArr[this.indexArr[t]].getChildByName("img2").visible = !1) : (this.skinArr[this.indexArr[t]].getChildByName("img1").visible = !1,
                    this.skinArr[this.indexArr[t]].getChildByName("img2").visible = !0);
        }
        onOpened() { }
        onDisable() {
            window.yad.visible = true;
        }
    }
    class I extends C {
        constructor() {
            super(...arguments), this.doubleReward = !1, this.addTipArr = [], this.addTipShow = [],
                this.coinStart = null, this.isCoinAni = !1, this.coinCount = 0, this.coinFlyValue = 0;
        }
        initData() { }
        initUI() {
            let e = this.getChild("bottomUI", this.owner);
            this.nextBtn = this.getChild("nextBtn", e), this.skinShopBtn = this.getChild("skinBtn", e),
                this.videoBtn = this.getChild("videoBtn", e), this.videoBtn.visible = !0, this.doubleReward = !1;
            let t = this.getChild("midddleUI", this.owner);

            this.addTipBox = this.getChild("addCoin", t), this.addTipShow.length = 20, this.addTipArr.length = 20;
            for (let e = 0; e < 20; ++e) {
                this.addTipShow[e] = !1;
                let t = this.addTipBox.getChildAt(e);
                t.visible = !1, t.addComponent(M).init(t, e), this.addTipArr[e] = t;
            }
            let i = this.getChild("topUI", this.owner);
            this.coinBg = this.getChild("coinBg", i), this.singleCoinValue = e.getChildByName("coin").getChildByName("value"),
                this.singleCoinValue.value = Math.floor(L.gameData.gameCoin) + "",
                zs.laya.platform.ADConfig.zs_share && (this.videoBtn.getChildByName("img").skin = "ui/common/home/img_feixiang.png"),
                this.coinStart = e.getChildByName("coin"), this.coinValue = this.coinBg.getChildByName("value"),

                this.coinValue.text = L.commonData.userCoin + "", L.commonData.newLevel++,
                zs.laya.tdapp.tdAppSdk.event(new zs.laya.tdapp.levelCompletedEvt(L.commonData.userId, L.commonData.newLevel + "")),
                L.storageMgr.setGameStausLevel(L.commonData.newLevel), L.commonData.freeSkinCount = 0;
            this.showList = this.getChild("showList", this.getChild("middleUI", this.owner));
            platform.getInstance().initList(this.showList);
        }
        initEvent() {
            L.utils.addClickEvent(this.nextBtn, this, this.onBtnAcquire), L.utils.addClickEvent(this.skinShopBtn, this, this.onSkinShopClick),
                L.utils.addClickEvent(this.videoBtn, this, this.onPlayVideoClick);
        }
        lateCoin() {
            L.gameData.gameCoin = 0, L.gameMgr.gameReset(), Laya.Scene.close("views/success.scene"),
                zs.laya.platform.PlatformMgr.onGameOverPopUp(!1);
        }
        loopAniSet() {
            this.coinCount = 0, this.isCoinAni = !0, this.doubleReward && (L.gameData.gameCoin *= 3,
                this.singleCoinValue.value = Math.floor(L.gameData.gameCoin) + ""), this.coinFlyValue = Math.floor(L.gameData.gameCoin / 20),
                Laya.timer.loop(50, this, this.loopAni), Laya.timer.once(2200, this, this.lateCoin);
        }
        loopAni() {
            this.coinCount++, this.coinCount % 3 == 0 && L.storageMgr.isPlayVibrate() && zs.laya.sdk.DeviceService.VibrateShort(),
                this.coinCount < 21 ? this.showAddUi(this.coinFlyValue) : (L.commonData.userCoin += Math.floor(L.gameData.gameCoin) - 20 * this.coinFlyValue,
                    L.storageMgr.setAwardGold(L.commonData.userCoin), this.coinValue.text = L.commonData.userCoin + "",
                    Laya.timer.clear(this, this.loopAni));
        }
        showAddUi(e) {
            let t = this.addTipArr[this.coinCount - 1], i = this.getChild("bottomUI", this.owner), a = new Laya.Vector2(this.coinBg.x + 1, this.coinBg.y - Laya.stage.height / 2 - 1), s = new Laya.Vector2(this.coinStart.x + i.x + 1, this.coinStart.y + i.y - Laya.stage.height / 2 - 2);
            t.pos(s.x, s.y), t.getComponent(M).setMove(!0, s, a, e, this.upDateScore, this);
        }
        upDateScore(e) {
            e.coinValue.text = L.commonData.userCoin + "";
        }
        onBtnAcquire() {
            if (!this.isCoinAni) if (Laya.Browser.onWeiXin && zs.laya.platform.ADConfig.zs_start_video_switch) {
                function callback(e) {
                    this.doubleReward = !!e, this.loopAniSet();
                }
                zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, callback, [1]), Laya.Handler.create(this, callback, [2]), Laya.Handler.create(this, callback, [3]));
            } else this.loopAniSet();
        }
        onSkinShopClick() {
            this.isCoinAni || (L.commonData.userCoin += Math.floor(L.gameData.gameCoin), L.storageMgr.setAwardGold(L.commonData.userCoin),
                L.gameData.gameCoin = 0, L.gameMgr.gameReset(), Laya.Scene.open("views/skinShop.scene", !1, Laya.Handler.create(this, e => {
                    Laya.Scene.close("views/success.scene");
                })));
        }
        onAcquireClick() {
            this.doubleReward && (L.gameData.gameCoin *= 3), L.commonData.userCoin += Math.floor(L.gameData.gameCoin),
                L.storageMgr.setAwardGold(L.commonData.userCoin), this.coinValue.text = L.commonData.userCoin + "",
                L.gameData.gameCoin = 0;
        }
        onPlayVideoClick() {
            this.isCoinAni || (zs.laya.sdk.SdkService.playVideo(Laya.Handler.create(this, function () {
                this.doubleReward = !0, L.uiMgr.showToast("Rewrad *3", 2e3), this.loopAniSet();
            }), Laya.Handler.create(this, function () {
                this.videoBtn.mouseEnabled = !0, L.uiMgr.showToast("看完视频才能获得金币", 2e3);
            }), Laya.Handler.create(this, function () {
                this.videoBtn.mouseEnabled = !0, L.uiMgr.showToast("暂无视频", 2e3);
            })));
        }
    }
    class E {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("scripts/stackIOViews/CoinFlyView.ts", S), e("scripts/stackIOViews/HairRushFailView.ts", w),
                e("scripts/stackIOViews/HairRushFreeSkin.ts", A), e("scripts/stackIOViews/HairRushGGame.ts", k),
                e("scripts/stackIOViews/HairRushHomeView.ts", b), e("scripts/stackIOViews/HairRushLoginView.ts", D),
                e("scripts/stackIOViews/popups/BubbleText.ts", p), e("scripts/stackIOViews/Rank/Rank.ts", P),
                e("scripts/stackIOViews/Rank/RankFriend.ts", _), e("scripts/stackIOViews/Rank/RankWorld.ts", V),
                e("scripts/stackIOViews/RegisterView.ts", z), e("scripts/stackIOViews/SkinShopView.ts", x),
                e("scripts/stackIOViews/HairRushSuccessView.ts", I);
        }
    }
    E.width = 750, E.height = 1334, E.scaleMode = "showall", E.screenMode = "none",
        E.alignV = "middle", E.alignH = "center", E.startScene = "views/login.scene", E.sceneRoot = "",
        E.debug = !1, E.stat = !1, E.physicsDebug = !1, E.exportSceneToJson = !0, E.init();
    new class {
        constructor() {
            // let e = Laya.Browser.height / Laya.Browser.width, t = Laya.Browser.onMobile ? e * E.width : E.height;
            // L.screen.realPxRatio = t / Laya.Browser.clientHeight, L.screen.allScreen = e > 17 / 9,
            //     L.screen.offsetTop = (t - E.height) / 2,
            window.Laya3D ? Laya3D.init(E.width, E.height) : Laya.init(E.width, E.height, Laya.WebGL),
                Laya.stage.scaleMode = E.scaleMode, Laya.stage.screenMode = E.screenMode, Laya.stage.alignV = E.alignV,
                Laya.stage.alignH = E.alignH,
                Laya.MouseManager.multiTouchEnabled = !1, Laya.URL.exportSceneToJson = E.exportSceneToJson;
            window.yad = platform.getInstance().createLogo();
            window.yad.centerX = 0;
            window.yad.bottom = 0;
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            E.startScene && Laya.Scene.open(E.startScene);
        }
    }();
}();