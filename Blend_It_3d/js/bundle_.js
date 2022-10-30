! function() {
    "use strict";
    class GameSetting$ {
        constructor() {}
    }
    window.GameSetting = GameSetting$, GameSetting$.LOGIN_URL = "", GameSetting$.HEARTBEAT = 1 / 0,
        GameSetting$.ratio = 1, GameSetting$.HAS_SDK = !1, GameSetting$.SWITCH = {
            ONLINE: !1,
            SHOW_PROTOCOL_LOG: !1,
            AD_VIDEO: !0
        }, GameSetting$.GAME_SIGN = "spiral", GameSetting$.LoginPlatform = "web", GameSetting$.REPORT = !1,
        GameSetting$.LOAD_DATA_JS = !0, GameSetting$.CLICK_SOUND_ID = 1e3, GameSetting$.startScene = "MainScene",
        GameSetting$.ANGLE_1_RAD = 180 / Math.PI, GameSetting$.RAD_1_ANGLE = Math.PI / 180,
        GameSetting$.BATTLE_MODE = {
            NORMAL: 0
        }, GameSetting$.VIDEO_TYPE = {
            OFFLINE_REWARD: "offline_reward",
            SIGN_REWARD: "sign_reward",
            RELIVE: "relive",
            BOX_REWARD_KEY: "box_reward_key",
            COIN_REWARD_PLUS: "coin_reward_plus",
            GET_COIN: "get_coin",
            GET_GOOD: "get_good",
            JUMP_CHAPTER: "jump_chapter",
            PLUCK_REWARD_PLUS: "pluck_reward_plus"
        }, GameSetting$.DAY_MILLISECOND = 864e5;
    class Util_GameKey_s {
        constructor() {}
        static remo_GameKey_veArrayElement(array, element) {
            if (array && array instanceof Array)
                for (var i = array.length; --i > -1;) array[i] == element && array.splice(i, 1);
        }
        static remo_GameKey_veArrayElementAt(array, index) {
            array && array instanceof Array && array.splice(index, 1);
        }
        static arra_GameKey_yContains(array, element) {
            return !!(array && array instanceof Array) && -1 != array.indexOf(element);
        }
        static getC_GameKey_hildDeep(parent, childName) {
            var child = parent.getChildByName(childName);
            if (child) return child;
            for (var i = 0; i < parent._children.length; i++)
                if (child = Util_GameKey_s.getC_GameKey_hildDeep(parent._children[i], childName)) return child;
        }
        static getC_GameKey_hildArrayDeep(parent, childName) {
            let childs = [];
            parent.name == childName && childs.push(parent);
            let vchilds, i = parent._children.length;
            for (; --i > -1;)(vchilds = Util_GameKey_s.getC_GameKey_hildArrayDeep(parent._children[i], childName)) && childs.pushAll$(vchilds);
            return childs;
        }
        static getA_GameKey_vater(sp) {
            if (!sp || !sp.getComponent) return null;
            let avater = null;
            if (sp.getComponent(Laya.Animator)) avater = sp;
            else {
                let childs = sp._children,
                    i = 0,
                    l = childs.length;
                for (; i < l && !(avater = Util_GameKey_s.getA_GameKey_vater(childs[i])); i++);
            }
            return avater;
        }
        static clam_GameKey_p(min, value, max) {
            return Math.max(min, Math.min(value, max));
        }
        static form_GameKey_atDateStr(date) {
            return date.format("yyyy-MM-dd hh:mm");
        }
        static getZ_GameKey_eroTime() {
            return Date.parse(new Date().toDateString());
        }
        static floa_GameKey_tRange(min, max) {
            return Math.random() * (max - min) + min;
        }
        static rand_GameKey_omChance(chance) {
            return chance >= Math.random();
        }
        static intR_GameKey_ange(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        static getS_GameKey_kinPathById(id) {
            var config = D.SpritePath[id];
            return config || (config = D.SpritePath[100]), config.chs;
        }
        static arra_GameKey_yRandom(array) {
            return array[Util_GameKey_s.intR_GameKey_ange(0, array.length)];
        }
        static shif_GameKey_tRandom(array) {
            var idx = Util_GameKey_s.intR_GameKey_ange(0, array.length),
                value = array[idx];
            return array.removeAt(idx), value;
        }
        static rand_GameKey_omIndexByWeight(array, total) {
            if (!total) {
                total = 0;
                for (var i = 0; i < array.length; i++) total += array[i];
            }
            for (var ran = Util_GameKey_s.intR_GameKey_ange(0, total + 1), index = 0; index < array.length; index++)
                if ((ran -= array[index]) <= 0) return index;
            return 0;
        }
        static getS_GameKey_trParam(id) {
            var config = D.CommonParameter[id];
            return config ? config.Value : "";
        }
        static getN_GameKey_umberParam(id) {
            return Number(Util_GameKey_s.getS_GameKey_trParam(id));
        }
        static send_GameKey_ParamHttp(url, reqObj, compeleteCallback) {
            var httpHr = new Laya.HttpRequest();
            httpHr._loadedSize = 0, httpHr._totalSize = 5e6, httpHr.once(Laya.Event.COMPLETE, Util_GameKey_s, Util_GameKey_s.onHt_GameKey_tpCompelete, [httpHr, compeleteCallback]);
            for (key in reqObj) url += Util_GameKey_s.stri_GameKey_ngFormat("&{0}={1}", [key, reqObj[key]]);
            httpHr.send(url, null, "get", "text");
        }
        static onHt_GameKey_tpCompelete(httpHr, compeleteCallback) {
            compeleteCallback && compeleteCallback.runWith(httpHr.data);
        }
        static setS_GameKey_howName(vTarget, vName, vFixPixel) {
            if (vTarget) {
                var i;
                vFixPixel || (vTarget.text = "名字六个字哦", vFixPixel = vTarget.textField.textWidth);
                var l = vName.length;
                for (vTarget.text = "", i = 0; i < l; i++)
                    if (vTarget.text += vName.charAt(i),
                        vTarget.textField.textWidth > vFixPixel) return void(vTarget.text = vName.substring(0, i));
                vTarget.text = vName;
            }
        }
        static getS_GameKey_tring(stringId, arg) {
            if (!D.GameText[stringId]) return stringId + arg;
            var text = D.GameText[stringId].chs;
            return text ? arg ? Util_GameKey_s.stri_GameKey_ngFormat(text, arg) : text : D.GameText[0].chs;
        }
        static stri_GameKey_ngFormat(str, arg) {
            if (!str) return arg;
            var text = str;
            if (arg)
                for (var i = 0; i < arg.length; i++) text = text.replaceAll("{" + i + "}", arg[i]);
            return text;
        }
        static onBu_GameKey_ttonScaleEvent(target, caller, callName, sound) {
            !target.defaultScale && (target.defaultScale = {
                    scaleX: target.scaleX || 1,
                    scaleY: target.scaleY || 1
                }), target.on(Laya.Event.MOUSE_DOWN, Util_GameKey_s, Util_GameKey_s._onSc_GameKey_aleBtnDown),
                target.on(Laya.Event.ROLL_OUT, Util_GameKey_s, Util_GameKey_s._onS_GameKey_caleBtnOut),
                target.on(Laya.Event.MOUSE_UP, Util_GameKey_s, Util_GameKey_s._onS_GameKey_caleBtnUp),
                target.on(Laya.Event.CLICK, Util_GameKey_s, Util_GameKey_s._onS_GameKey_caleBtnClick, [caller, callName]),
                target._sound = sound;
        }
        static _onS_GameKey_caleBtnClick(caller, callName, event) {
            // window.pgdk$ && pgdk$.shakePhone$();
            try {
                caller && caller[callName] && caller[callName](event), Laya.audioManager && Laya.audioManager.play_GameKey_Sound(event.target._sound || GameSetting$.CLICK_SOUND_ID);
            } catch (error) {}
            event.stopPropagation();
        }
        static _onSc_GameKey_aleBtnDown(e) {
            e.target.scale(1.1 * e.target.defaultScale.scaleX, 1.1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onS_GameKey_caleBtnOut(e) {
            e.currentTarget.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static _onS_GameKey_caleBtnUp(e) {
            e.target.scale(1 * e.target.defaultScale.scaleX, 1 * e.target.defaultScale.scaleY),
                e.stopPropagation();
        }
        static onBu_GameKey_ttonEvent(target, caller, callName) {
            target && (target.on(Laya.Event.MOUSE_DOWN, caller, Util_GameKey_s._onB_GameKey_tnDown),
                target.on(Laya.Event.ROLL_OUT, caller, Util_GameKey_s._onB_GameKey_tnOut), target.on(Laya.Event.MOUSE_UP, caller, Util_GameKey_s._onB_GameKey_tnUp),
                target.on(Laya.Event.CLICK, caller, Util_GameKey_s._onB_GameKey_tnClick, [caller, callName]));
        }
        static _onB_GameKey_tnClick(caller, callName, event) {
            window.pgdk$ && pgdk$.shakePhone$();
            try {
                caller && caller[callName] && caller[callName](event);
            } catch (error) {
                Prot_GameKey_ocolManager.repo_GameKey_rtError(error.stack);
            }
            event.stopPropagation();
        }
        static _onB_GameKey_tnDown(e) {
            e.stopPropagation();
        }
        static _onB_GameKey_tnOut(e) {
            e.stopPropagation();
        }
        static _onB_GameKey_tnUp(e) {
            e.stopPropagation();
        }
        static onEv_GameKey_ent(window, target) {
            target.on(Laya.Event.MOUSE_DOWN, window, window.onMouseEventHandler), target.on(Laya.Event.ROLL_OUT, window, window.onMouseEventHandler),
                target.on(Laya.Event.MOUSE_UP, window, window.onMouseEventHandler), target.on(Laya.Event.CLICK, window, window.onMouseEventHandler);
        }
        static offE_GameKey_vent(window, target) {
            target.off(Laya.Event.MOUSE_DOWN, window, window.onMouseEventHandler), target.off(Laya.Event.ROLL_OUT, window, window.onMouseEventHandler),
                target.off(Laya.Event.MOUSE_UP, window, window.onMouseEventHandler), target.off(Laya.Event.CLICK, window, window.onMouseEventHandler);
        }
        static form_GameKey_atTime(second, showHours) {
            var min = Math.floor(second / 60);
            if (second %= 60, !showHours || min < 60) return Util_GameKey_s.time_GameKey_NumberFormat(min) + ":" + Util_GameKey_s.time_GameKey_NumberFormat(second);
            var hours = Math.floor(min / 60);
            return min %= 60, hours + ":" + Util_GameKey_s.time_GameKey_NumberFormat(min) + ":" + Util_GameKey_s.time_GameKey_NumberFormat(second);
        }
        static time_GameKey_NumberFormat(value) {
            return (value < 10 ? "0" : "") + parseInt(value);
        }
        static setV_GameKey_ector3(v3, x, y, z) {
            v3.x = x, v3.y = y, v3.z = z;
        }
        static rese_GameKey_tScale(sp) {
            if (!sp) return;
            let scale = sp.transform.localScale.clone();
            sp.transform.localScale = new Laya.Vector3(0, 0, 0), sp.transform.localScale = scale;
            let childs = sp._children,
                i = childs ? childs.length : 0;
            for (; --i > -1;) Util_GameKey_s.rese_GameKey_tScale(childs[i]);
        }
        static copyVector3(aV3, bV3) {
            bV3.x = aV3.x, bV3.y = aV3.y, bV3.z = aV3.z;
        }
        static getV3Length$(v3) {
            return Math.sqrt(Math.pow(v3.x, 2) + Math.pow(v3.y, 2) + Math.pow(v3.z, 2));
        }
        static getSkinPathById(id) {
            var config = D.SpritePath[id];
            return config || (config = D.SpritePath[100]), config.chs;
        }
        static changeImgColor$(matArr, img) {
            let redMat = [matArr[0], 0, 0, 0, 0, 0, matArr[1], 0, 0, 0, 0, 0, matArr[2], 0, 0, 0, 0, 0, matArr[3], 0],
                redFilter = new Laya.ColorFilter(redMat);
            img.filters = [redFilter];
        }
        static imgBecomeWhite$(img) {
            let redFilter = new Laya.ColorFilter([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
            img.filters = [redFilter];
        }
        static coinNumShow$(coinNum) {
            var num;
            if (coinNum < 1e3) num = coinNum % 1e3;
            else if (coinNum >= 1e3 && coinNum < 1e4) {
                var floatNum = coinNum / 1e3,
                    re = /([0-9]+.[0-9]{1})[0-9]*/;
                num = String(floatNum).replace(re, "$1") + "K";
            } else {
                floatNum = coinNum / 1e4, re = /([0-9]+.[0-9]{1})[0-9]*/;
                num = String(floatNum).replace(re, "$1") + "万";
            }
            return num;
        }
    }
    class TimeManager$ {
        constructor() {
            this.inited = !1, this.initedCB = void 0, this._deltaTime$ = 0, this._maxDeltaTime$ = 1e3 * Laya.Scene3D.physicsSettings.fixedTimeStep;
        }
        static getInstance$() {
            return null == TimeManager$.instance && (TimeManager$.instance = new TimeManager$()),
                TimeManager$.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        get deltaTime$() {
            return this._deltaTime$ = Laya.physicsTimer.delta, this._deltaTime$;
        }
        init(callback) {
            this.initedCB = callback, this.init_GameKey_Complete();
        }
        init_GameKey_Complete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
    }
    TimeManager$.instance = void 0;
    class BeachUpBubblePanel$ extends Laya.Script {
        constructor() {
            super(), this.isShow$ = !1, this.clickCallback$ = void 0, this.animT$ = 1500, this.animCountT$ = void 0,
                this.minScale$ = .8, this.maxScale$ = 1.2, this.label_coin$ = void 0;
        }
        setActive$(active) {
            this.owner.visible = this.isShow$ = active, this.isShow$ && (this.animCountT$ = 0);
        }
        setPos$(x, y) {
            this.owner.pos(x, y), this.changeCallback$ && this.changeCallback$();
        }
        setClickCallback$(callback) {
            this.clickCallback$ = callback;
        }
        setChangeCallback$(callback) {
            this.changeCallback$ = callback;
        }
        refreshUI$(coin) {
            this.label_coin$.text = coin;
        }
        onStart() {
            this.initUI$(), this.monitorBtns$();
        }
        initUI$() {
            this.label_coin$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_coin"),
                this.owner.visible = !1;
        }
        monitorBtns$() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.owner, this, "onClickPanel$");
        }
        onClickPanel$() {
            this.clickCallback$ && this.clickCallback$(), this.setActive$(!1);
        }
        refreshPanelAnim$() {
            if (!this.isShow$) return;
            this.animCountT$ += TimeManager$.getInstance$().deltaTime$, this.animCountT$ > this.animT$ && (this.animCountT$ %= this.animT$);
            let p = this.animCountT$ / this.animT$;
            this.owner.scaleX = this.owner.scaleY = (this.maxScale$ - this.minScale$) * (p > .5 ? 1 - p : p) + this.minScale$;
        }
        onUpdate() {
            this.refreshPanelAnim$();
        }
    }
    class LocalData$ {
        constructor() {}
        static getL_GameKey_ocalData(localKey, defaultValue) {
            let ret;
            return localKey += GameSetting$.GAME_SIGN, null != (ret = LocalData$.localDataDic[localKey]) ? ret : (null != (ret = Laya.LocalStorage.getItem(localKey)) && "null" !== ret && "undefined" !== ret && "" !== ret || null == defaultValue ? "boolean" == typeof defaultValue ? ret = LocalData$._toBoolean(ret, defaultValue) : "number" == typeof defaultValue ? ret = LocalData$._toNumber(ret, defaultValue) : "object" == typeof defaultValue && (ret = LocalData$._toJSON(ret, defaultValue)) : ret = defaultValue,
                LocalData$.localDataDic[localKey] = ret, ret);
        }
        static _toBoolean(src, def) {
            return "boolean" == typeof src ? src : null == src || "" == src ? def : "false" != src && ("true" == src || void 0);
        }
        static _toNumber(src, def) {
            let ret = Number(src);
            return isNaN(ret) ? def : ret;
        }
        static _toJSON(src, def) {
            try {
                let ret = JSON.parse(src);
                return "object" == typeof ret && ret ? ret : def;
            } catch (e) {
                return def;
            }
        }
        static setL_GameKey_ocalData(localKey, value) {
            localKey += GameSetting$.GAME_SIGN, LocalData$.localDataDic[localKey] = value, "object" == typeof value && (value = JSON.stringify(value)),
                Laya.LocalStorage.setItem(localKey, value);
        }
        clear() {
            LocalData$.localDataDic = {};
        }
    }
    LocalData$.localDataDic = {}, LocalData$.KEY = {
        ACCO_GameKey_UNT: "account",
        PASS_GameKey_WORD: "password",
        SOUN_GameKey_D: "sound",
        MUSI_GameKey_C: "music",
        SOUN_GameKey_D_SWITCH: "sound_switch",
        SHAK_GameKey_E: "shake",
        LEVEL$: "level",
        LEVEL_PROGRESS$: "level_progress",
        COIN$: "COIN",
        SUCCESS_CUP_NUM$: "successCupNum",
        INDUCE_TIMES$: "induce_times",
        INDUCE_TIME$: "induce_time",
        INDUCE_CNT$: "induce_cnt",
        BEST_SCORE$: "best_score",
        CUR_JUICER: "curJuicer",
        CUR_HAND: "curHand",
        FRUIT_IDS: "fruitIds",
        GLASS_IDS: "glassIds",
        DECORATE_IDS: "decorateIds",
        JUICER_IDS: "juicerIds",
        HAND_IDS: "handIds"
    };
    class Sett_GameKey_ingData {
        constructor() {}
        setS_GameKey_hake(shake) {
            LocalData$.setL_GameKey_ocalData(LocalData$.KEY.SHAK_GameKey_E, shake);
        }
        getS_GameKey_hake() {
            return LocalData$.getL_GameKey_ocalData(LocalData$.KEY.SHAK_GameKey_E, !0);
        }
        chan_GameKey_geShakeSwitch() {
            LocalData$.setL_GameKey_ocalData(LocalData$.KEY.SHAK_GameKey_E, !this.getS_GameKey_hake());
        }
        setS_GameKey_oundSwitch(isSoundSwitch) {
            LocalData$.setL_GameKey_ocalData(LocalData$.KEY.SOUN_GameKey_D_SWITCH, isSoundSwitch);
        }
        getS_GameKey_oundSwitch() {
            return !1;
        }
        clea_GameKey_r() {}
    }
    class UserData$ {
        constructor() {
            this._coin$ = 0, this._mission$ = 1, this._missionProgress$ = 1, this.awardHandIdArr$ = [3, 9, 13],
                this._successCupNum$ = 0, this._curHandSkinId = 1, this._curJuicerId = 1, this._haveFruitIds = [1, 2, 3],
                this._haveGlassIds = [1, 2, 3, 4], this._haveDecorateIds = [1, 2, 3], this._haveJuicerIds = [1, 3, 4],
                this._haveHandIds = [1];
        }
        setCurJuicerId(skinId) {
            this._curJuicerId = skinId, LocalData$.setL_GameKey_ocalData(LocalData$.KEY.CUR_JUICER, this._curJuicerId);
        }
        setCurHandId(skinId) {
            this._curHandSkinId = skinId, LocalData$.setL_GameKey_ocalData(LocalData$.KEY.CUR_HAND, this._curHandSkinId);
        }
        get curJuicerId() {
            return this._curJuicerId = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.CUR_JUICER, this._curJuicerId),
                this._curJuicerId;
        }
        get curHandSkinId() {
            return this._curHandSkinId = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.CUR_HAND, this._curHandSkinId),
                this._curHandSkinId;
        }
        get fruitIds() {
            return this._haveFruitIds = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.FRUIT_IDS, this._haveFruitIds),
                this._haveFruitIds;
        }
        get glassIds() {
            return this._haveGlassIds = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.GLASS_IDS, this._haveGlassIds),
                this._haveGlassIds;
        }
        get decorateIds() {
            return this._haveDecorateIds = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.DECORATE_IDS, this._haveDecorateIds),
                this._haveDecorateIds;
        }
        get juicerIds() {
            return this._haveJuicerIds = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.JUICER_IDS, this._haveJuicerIds),
                this._haveJuicerIds;
        }
        get handIds() {
            return this._haveHandIds = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.HAND_IDS, this._haveHandIds),
                this._haveHandIds;
        }
        isHaveFruitId(fId) {
            return -1 != this.fruitIds.indexOf(fId);
        }
        isHaveGlassId(gId) {
            return -1 != this.glassIds.indexOf(gId);
        }
        isHaveDecorateId(dId) {
            return -1 != this.decorateIds.indexOf(dId);
        }
        isHaveJuicerId(zId) {
            return -1 != this.juicerIds.indexOf(zId);
        }
        isHaveHandId(hId) {
            return -1 != this.handIds.indexOf(hId);
        }
        addHandSkin$(skinId) {
            this.isHaveHandId(skinId) || (this._haveHandIds.push(skinId), LocalData$.setL_GameKey_ocalData(LocalData$.KEY.HAND_IDS, this._haveHandIds),
                this.setCurHandId(skinId));
        }
        addFruitSkin$(skinId) {
            this.isHaveFruitId(skinId) || (this._haveFruitIds.push(skinId), LocalData$.setL_GameKey_ocalData(LocalData$.KEY.FRUIT_IDS, this._haveFruitIds));
        }
        addDecorateSkin$(skinId) {
            this.isHaveDecorateId(skinId) || (this._haveDecorateIds.push(skinId), LocalData$.setL_GameKey_ocalData(LocalData$.KEY.DECORATE_IDS, this._haveDecorateIds));
        }
        get coin$() {
            return this._coin$ = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.COIN$, 0),
                this._coin$;
        }
        onGetCoin$(coin) {
            this._coin$ = this.coin$ + coin, LocalData$.setL_GameKey_ocalData(LocalData$.KEY.COIN$, this._coin$);
        }
        get mission$() {
            return this._mission$ = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.LEVEL$, 1),
                console.log("当前关卡数：", this._mission$), this._mission$;
        }
        setMission$(value) {
            null != value && LocalData$.setL_GameKey_ocalData(LocalData$.KEY.LEVEL$, value);
        }
        get missionProgress$() {
            return this._missionProgress$ = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.LEVEL_PROGRESS$, 1),
                console.log("当前关卡进度：", this._missionProgress$), this._missionProgress$;
        }
        setMissionProgress$(value) {
            null != value && LocalData$.setL_GameKey_ocalData(LocalData$.KEY.LEVEL_PROGRESS$, value);
        }
        get successCupNum$() {
            return this._successCupNum$ = LocalData$.getL_GameKey_ocalData(LocalData$.KEY.SUCCESS_CUP_NUM$, 0),
                console.log("当前玩家已成功榨汁杯数：", this._missionProgress$), this._successCupNum$;
        }
        setSuccessCupNum$(value) {
            null != value && LocalData$.setL_GameKey_ocalData(LocalData$.KEY.SUCCESS_CUP_NUM$, value);
        }
        clear$() {}
    }
    class DrinkData$ {
        constructor() {
            this.curMissionData = void 0, this.curDrinkData = void 0, this._choiceScore = void 0,
                this._decorateScore = void 0, this._skillScore = void 0, this.maxId$ = void 0, this.idRandomDic$ = {};
        }
        getMissionDataByMissionId$(mId) {
            if (null == mId && (mId = 1), !this.maxId$) {
                let vId;
                for (let key in D.missionBasic) vId = Number(key), (!this.maxId$ || vId > this.maxId$) && (this.maxId$ = vId);
            }
            if (mId > this.maxId$) {
                let newMid = this.idRandomDic$[mId];
                return newMid || (newMid = this.idRandomDic$[mId] = Math.floor(Math.random() * this.maxId$) + 1),
                    D.missionBasic[newMid];
            }
            return D.missionBasic[mId];
        }
        getDrinkDataByDrinkId$(dId) {
            null == dId && (dId = 1);
            for (let key in D.drinkBasic)
                if (Number(key) == dId) return this.curDrinkData = D.drinkBasic[key],
                    D.drinkBasic[key];
        }
        getFruitDataByFruitId$(fId) {
            null == fId && (fId = 1);
            for (let key in D.fruitBasic)
                if (Number(key) == fId) return D.fruitBasic[key];
        }
        setChoiceScore$(vNum) {
            let allFruitNum = this.curDrinkData.fruitIdArr.length;
            this._choiceScore = vNum == allFruitNum ? 1 : this.randomScore$();
        }
        setDecorateScore$(vScore) {
            this._decorateScore = vScore <= .7 ? this.randomScore$() : 1;
        }
        setSkillScore$(vArr) {
            let allScore = 0;
            for (let i = 0; i < vArr.length; i++) allScore += vArr[i];
            let resultScore = allScore / vArr.length;
            this._skillScore = resultScore > .85 ? 1 : this.randomScore$();
        }
        getTotalScore$() {
            return this.choiceScore + this.decorateScore + this.skillScore;
        }
        randomScore$() {
            return Util_GameKey_s.clam_GameKey_p(.35, Math.random(), .75);
        }
        get choiceScore() {
            return this._choiceScore || 0;
        }
        get decorateScore() {
            return this._decorateScore || 0;
        }
        get skillScore() {
            return this._skillScore || 0;
        }
        clear$() {
            this.curMissionData = void 0, this.curDrinkData = void 0;
        }
    }
    class ShopConfig$ {
        constructor() {
            this.showPages = [], this.showShopIds = [], this.showPageGoods = {}, this.initConfig();
        }
        initConfig() {
            let id, page, vShop, pageGoods;
            for (id in D.shop) id = Number(id), (vShop = D.shop[id]) && 1 == vShop.isShow && ((pageGoods = this.showPageGoods[vShop.page]) || (this.showPageGoods[vShop.page] = pageGoods = []),
                pageGoods.push(id), this.showShopIds.contains$(id) || (this.showShopIds.push(id),
                    page = Number(vShop.page), this.showPages.contains$(page) || this.showPages.push(page)));
        }
        getShopId(page, itemId) {
            let pageGoods = this.showPageGoods[page];
            if (!pageGoods) return;
            let vShopConfig, i = pageGoods.length;
            for (; --i > -1;)
                if ((vShopConfig = D.shop[pageGoods[i]]).itemId == itemId) return vShopConfig.id;
        }
    }
    ShopConfig$.SHOP_PAGE = {
        FRUIT: 1,
        GLASS: 2,
        DECORATE: 3,
        JUICER: 4,
        HAND: 5
    }, ShopConfig$.GOODS = {
        FRUIT: 1,
        GLASS: 2,
        DECORATE: 3,
        JUICER: 4,
        HAND: 5
    }, ShopConfig$.BUY_TYPE = {
        MISSION: 1,
        BUY: 2,
        TURNTABLE: 3
    };
    class Conf_GameKey_igManager {
        constructor() {
            this.inited = !1, this.initedCB = void 0;
        }
        static getInstance$() {
            return null == Conf_GameKey_igManager.instance && (Conf_GameKey_igManager.instance = new Conf_GameKey_igManager()),
                Conf_GameKey_igManager.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        init(callback) {
            this.initedCB = callback, this.load_GameKey_AllConfig();
        }
        load_GameKey_AllConfig() {
            this.shopConfig$ = new ShopConfig$(), this.load_GameKey_AllConfigComplete();
        }
        load_GameKey_AllConfigComplete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
    }
    Conf_GameKey_igManager.instance = void 0;
    class ShopData$ {
        constructor() {
            this.cPage = void 0, this.shopPageDatas = {}, this.shopShowDatas = {}, this.initData();
        }
        initData() {
            let shopIds, shopListData, vShopId, i, showPageGoods = Conf_GameKey_igManager.getInstance$().shopConfig$.showPageGoods;
            if (showPageGoods)
                for (let page in showPageGoods) {
                    for (shopListData = {
                            shops: [],
                            page: Number(page)
                        }, i = (shopIds = showPageGoods[page]).length; --i > -1;) vShopId = shopIds[i],
                        shopListData.shops.push({
                            id: vShopId
                        });
                    this.shopListChange(shopListData);
                }
        }
        getShopDataList(page) {
            return this.shopShowDatas[page];
        }
        shopListChange(data) {
            if (this.shopPageDatas[data.page] = data.shops, this.sortShopList(this.shopPageDatas[data.page]), !Conf_GameKey_igManager.getInstance$().shopConfig$.showPages) return;
            let i, l, vDatas, vData;
            if (this.shopShowDatas[data.page] = [], Conf_GameKey_igManager.getInstance$().shopConfig$.showPages.contains$(data.page) && (vDatas = this.shopPageDatas[data.page]))
                for (l = vDatas.length,
                    i = 0; i < l; i++)(vData = vDatas[i]) && Conf_GameKey_igManager.getInstance$().shopConfig$.showShopIds.contains$(vData.id) && this.shopShowDatas[data.page].push(vData);
        }
        sortShopList(vShopList) {
            let i, j, aShopData, bShopData, aShopConfig, bShopConfig, l = vShopList.length;
            for (i = 0; i < l; i++)
                for (j = i + 1; j < l; j++) aShopData = vShopList[i], bShopData = vShopList[j],
                    aShopConfig = D.shop[aShopData.id], bShopConfig = D.shop[bShopData.id], aShopConfig ? bShopConfig ? (aShopConfig.sort > bShopConfig.sort || aShopConfig.sort == bShopConfig.sort && aShopConfig.id > bShopConfig.id) && (vShopList[i] = bShopData,
                        vShopList[j] = aShopData) : (console.log("商品ID:" + bShopData.id + "未在客户端找到，请尝试更新！"),
                        vShopList.removeAt(j), j--, l--) : (console.log("商品ID:" + aShopData.id + "未在客户端找到，请尝试更新！"),
                        vShopList.removeAt(i), i--, j--, l--);
        }
        clear() {
            this.shopPageDatas = {}, this.shopShowDatas = {};
        }
    }
    class Data_GameKey_Manager {
        constructor() {
            this.inited = !1, this.initedCB = void 0, window.dataMgr = this;
        }
        static getInstance$() {
            return null == Data_GameKey_Manager.instance && (Data_GameKey_Manager.instance = new Data_GameKey_Manager()),
                Data_GameKey_Manager.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        init(callback) {
            this.initedCB = callback, this.init_GameKey_Datas(), this.init_GameKey_Complete();
        }
        init_GameKey_Datas() {
            this.localData$ = new LocalData$(), this.settingData$ = new Sett_GameKey_ingData(),
                this.userData$ = new UserData$(), this.drinkData$ = new DrinkData$(), this.shopData$ = new ShopData$();
        }
        init_GameKey_Complete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
        getInduceCnt() {
            let induceT = Number(LocalData$.getL_GameKey_ocalData(LocalData$.KEY.INDUCE_TIME, 0)),
                induceCnt = 0;
            return new Date(induceT).toDateString() === new Date().toDateString() && (induceCnt = Number(LocalData$.getL_GameKey_ocalData(LocalData$.KEY.INDUCE_CNT, 0))),
                induceCnt;
        }
        addInduceCnt() {
            let induceCnt = Data_GameKey_Manager.getInstance$().getInduceCnt();
            LocalData$.setL_GameKey_ocalData(LocalData$.KEY.INDUCE_CNT, induceCnt + 1), LocalData$.setL_GameKey_ocalData(LocalData$.KEY.INDUCE_TIME, Date.now());
        }
        clea_GameKey_r() {
            this.localData$ && this.localData$.clear(), this.settingData$ && this.settingData$.clear(),
                this.userData$ && this.userData$.clear$(), this.drinkData$ && this.drinkData$.clear$();
        }
    }
    Data_GameKey_Manager.instance = void 0;
    class Even_GameKey_tManager extends Laya.EventDispatcher {
        constructor() {
            super(), this.inited = !1, this.initedCB = void 0, window.eventManager = this;
        }
        static getInstance$() {
            return null == Even_GameKey_tManager.instance && (Even_GameKey_tManager.instance = new Even_GameKey_tManager()),
                Even_GameKey_tManager.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        init(callback) {
            this.initedCB = callback, this.init_GameKey_Complete();
        }
        init_GameKey_Complete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
        addE_GameKey_ventListener(eventType, caller, listener, args) {
            this.on(eventType, caller, listener, args);
        }
        remo_GameKey_veEventListener(eventType, caller, listener) {
            this.off(eventType, caller, listener);
        }
        disp_GameKey_atchEvent(eventTag, data) {
            var e = {
                data: data,
                name: eventTag
            };
            this.event(eventTag, e), e = null;
        }
    }
    Even_GameKey_tManager.instance = void 0;
    class SSEV_GameKey_ENT {}
    SSEV_GameKey_ENT.SCREEN_SIZE_CHANGE = 1, SSEV_GameKey_ENT.MUSIC_VOLUME = 2, SSEV_GameKey_ENT.SOUND_VOLUME = 3,
        SSEV_GameKey_ENT.ON_EXIT_GAME = 4, SSEV_GameKey_ENT.ON_SHOW_GAME = 5, SSEV_GameKey_ENT.COLLIDER_ENTER = "colliderEnter",
        SSEV_GameKey_ENT.COLLIDER_STAY = "colliderStay", SSEV_GameKey_ENT.COLLIDER_EXIT = "colliderExit",
        SSEV_GameKey_ENT.TRIGGER_ENTER = "triggerEnter", SSEV_GameKey_ENT.TRIGGER_STAY = "triggerStay",
        SSEV_GameKey_ENT.TRIGGER_EXIT = "triggerExit", SSEV_GameKey_ENT.ON_DATA_LOAD = 1002,
        SSEV_GameKey_ENT.ON_START_GAME = 1003, SSEV_GameKey_ENT.REST_FIGHT = 1004, SSEV_GameKey_ENT.START_JUICE = 1005,
        SSEV_GameKey_ENT.STOP_JUICE = 1006, SSEV_GameKey_ENT.OVER_JUICE = 1007, SSEV_GameKey_ENT.MACK_JUICE_OK = 1008,
        SSEV_GameKey_ENT.FRUIT_USE_OVER = 1010, SSEV_GameKey_ENT.FILL_FLUID = 1011, SSEV_GameKey_ENT.RSP_FILL_UI_POSES = 1012,
        SSEV_GameKey_ENT.ADORN_START = 1013, SSEV_GameKey_ENT.ADORN_OVER = 1014, SSEV_GameKey_ENT.CHANGE_CUP = 1015,
        SSEV_GameKey_ENT.ASK_PLAY_WALK_OUT = 1016, SSEV_GameKey_ENT.CHANGE_ADORN = 1017,
        SSEV_GameKey_ENT.SCENE_LOADED = 1018, SSEV_GameKey_ENT.INPUT_MOUSE_DOWN = 1110,
        SSEV_GameKey_ENT.INPUT_MOUSE_MOVE = 1111, SSEV_GameKey_ENT.INPUT_MOUSE_UP = 1112,
        SSEV_GameKey_ENT.FIGHT_FAIL = 1113, SSEV_GameKey_ENT.FIGHT_WIN = 1114, SSEV_GameKey_ENT.GETED_LOOTBOX = 1115,
        SSEV_GameKey_ENT.GETED_COIN = 1116, SSEV_GameKey_ENT.SCORE_CHANGE$ = 1117, SSEV_GameKey_ENT.ADD_SCORE$ = 1118,
        SSEV_GameKey_ENT.RELIVE$ = 1120, SSEV_GameKey_ENT.ON_NET_FAILD = 2e3, SSEV_GameKey_ENT.ON_REGISTER_FINISH = 2001,
        SSEV_GameKey_ENT.ON_LOGINGAME_FINISH = 2002, SSEV_GameKey_ENT.ON_SERVER_LIST_FINISH = 2003,
        SSEV_GameKey_ENT.ON_UPDATE_WX_USERINFO = 2004, SSEV_GameKey_ENT.ARRIVE_JUICE_POS = 3e3,
        SSEV_GameKey_ENT.ARRIVE_ADORN_POS = 3001, SSEV_GameKey_ENT.FRUIT_SEND = 4001, SSEV_GameKey_ENT.CUR_JUICER_CHANGE = 4002,
        SSEV_GameKey_ENT.CUR_HAND_CHANGE = 4003;
    class BeachUpControl$ extends Laya.Script {
        constructor() {
            super(), this.bubblePanel$ = void 0, this.needCoins$ = void 0, this.skins$ = void 0,
                this.btnUp$ = void 0, this.bubblePanelCtr$ = void 0, this.upName$ = void 0, this.animT$ = 500,
                this.animCountT$ = void 0, this.minScaleY$ = 1, this.maxScaleY$ = 1.2;
        }
        onStart() {
            this.initData$(), this.initUI$(), this.refreshUI$(), this.monitorBtn$(), this.monitorEvents$();
        }
        get enoughCoin$() {
            return this.userData$.coin$ >= this.needCoin$;
        }
        get curIndex$() {
            return LocalData$.getL_GameKey_ocalData(this.upName$, 0);
        }
        get needCoin$() {
            return this.needCoins$[this.curIndex$];
        }
        get skin$() {
            return this.skinArray$[this.curIndex$];
        }
        initData$() {
            this.skinArray$ = this.skins$.split(","), this.userData$ = Data_GameKey_Manager.getInstance$().userData$;
        }
        initUI$() {
            this.upName$ = this.owner.name, this.btnUp$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "upBtn"),
                this.bubblePanelCtr$ = this.bubblePanel$.getComponent(BeachUpBubblePanel$);
        }
        refreshUI$() {
            this.refreshUpBtnShow$(), this.owner.skin = this.skin$;
        }
        refreshUpBtnShow$() {
            this.animCountT$ = 0, this.btnUp$.visible = this.enoughCoin$;
        }
        monitorBtn$() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btnUp$, this, "onClickBtnUp$");
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.GETED_COIN, this, this.refreshUpBtnShow$);
        }
        cancelEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.GETED_COIN, this, this.refreshUpBtnShow$);
        }
        onClickBtnUp$() {
            this.btnUp$.visible = !1, this.bubblePanelCtr$.setActive$(!0), this.bubblePanelCtr$.refreshUI$(this.needCoin$),
                this.bubblePanelCtr$.setClickCallback$(this.onClickPanel$.bind(this)), Laya.Point.TEMP.setTo(this.btnUp$.x, this.btnUp$.y),
                this.btnUp$.parent.localToGlobal(Laya.Point.TEMP), this.bubblePanel$.parent.globalToLocal(Laya.Point.TEMP),
                this.bubblePanelCtr$.setPos$(Laya.Point.TEMP.x, Laya.Point.TEMP.y), this.bubblePanelCtr$.setChangeCallback$(this.refreshUpBtnShow$.bind(this));
        }
        onClickPanel$() {
            this.enoughCoin$ && (this.userData$.onGetCoin$(-this.needCoin$), Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.GETED_COIN, -this.needCoin$),
                LocalData$.setL_GameKey_ocalData(this.upName$, this.curIndex$ + 1), this.refreshUI$());
        }
        refreshUpBtnAnim$() {
            this.btnUp$.visible && (this.animCountT$ += TimeManager$.getInstance$().deltaTime$,
                this.animCountT$ > this.animT$ && (this.animCountT$ %= this.animT$), this.btnUp$.scaleY = Laya.Ease.backOut(this.animCountT$ / this.animT$, this.minScaleY$, this.maxScaleY$ - this.minScaleY$, 1));
        }
        onUpdate() {
            this.refreshUpBtnAnim$();
        }
        onDestroy() {
            this.cancelEvents$();
        }
    }
    class UILa_GameKey_yer {}
    UILa_GameKey_yer.LAYER_BG = "bg", UILa_GameKey_yer.LAYER_MAINUI = "main_ui", UILa_GameKey_yer.LAYER_NORMAL = "normal",
        UILa_GameKey_yer.LAYER_TOP = "top", UILa_GameKey_yer.LAYER_MESSAGE = "msg";
    class UIMa_GameKey_nager {
        constructor() {
            this.inited = !1, this.initedCB = void 0, this.uis = {}, this.layers = {}, this.baseWindowClass = Laya.CyzClassMap.BaseWindow,
                window.uiMgr = this;
        }
        static getInstance$() {
            return null == UIMa_GameKey_nager.instance && (UIMa_GameKey_nager.instance = new UIMa_GameKey_nager()),
                UIMa_GameKey_nager.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        init(callback) {
            this.initedCB = callback, this.bg$ = Laya.stage.addChild(new Laya.Image("battle/bg.jpg")),
                this.bg$.left = this.bg$.right = this.bg$.top = this.bg$.bottom = 0;
            var zOrder = 0,
                bgBox = this.crea_GameKey_teBox();
            Laya.stage.addChild(bgBox), this.layers[UILa_GameKey_yer.LAYER_BG] = bgBox, zOrder += 100,
                bgBox.zOrder = zOrder;
            var mainUIBox = this.crea_GameKey_teBox();
            Laya.stage.addChild(mainUIBox), this.layers[UILa_GameKey_yer.LAYER_MAINUI] = mainUIBox,
                zOrder += 100, mainUIBox.zOrder = zOrder;
            var normalBox = this.crea_GameKey_teBox();
            Laya.stage.addChild(normalBox), this.layers[UILa_GameKey_yer.LAYER_NORMAL] = normalBox,
                zOrder += 100, normalBox.zOrder = zOrder;
            var topBox = this.crea_GameKey_teBox();
            Laya.stage.addChild(topBox), this.layers[UILa_GameKey_yer.LAYER_TOP] = topBox, zOrder += 100,
                topBox.zOrder = zOrder;
            var msgBox = this.crea_GameKey_teBox();
            Laya.stage.addChild(msgBox), this.layers[UILa_GameKey_yer.LAYER_MESSAGE] = msgBox,
                zOrder += 100, msgBox.zOrder = zOrder, this.init_GameKey_Complete();
        }
        crea_GameKey_teBox() {
            var box = new Laya.Box();
            return box.left = 0, box.right = 0, box.top = 0, box.bottom = 0, box.mouseThrough = !0,
                box;
        }
        init_GameKey_Complete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
        getU_GameKey_I(uiClass) {
            var array = this.uis[uiClass.className];
            return array && array.last$();
        }
        open_GameKey_UI(uiClass, callback, ...args) {
            if (uiClass.uiConfig.only && this.getU_GameKey_I(uiClass)) return callback && callback(),
                this.getU_GameKey_I(uiClass);
            var uiSurrenal = this.crea_GameKey_teSurrenal(uiClass);
            Laya.loader.create(uiClass.url, Laya.Handler.create(this, obj => {
                if (uiClass.uiConfig.only && this.getU_GameKey_I(uiClass)) return;
                let pre = new Laya.Prefab();
                pre.json = obj;
                let uiNode = pre.create(),
                    ui = uiNode.getComponent(uiClass);
                ui.init(args, callback, uiSurrenal), this.uis[uiClass.className] || (this.uis[uiClass.className] = []),
                    this.uis[uiClass.className].push(ui);
                let uiLayer = uiClass.uiConfig.layer,
                    parent = this.layers[uiLayer];
                parent && parent.addChild(uiNode);
            }));
        }
        crea_GameKey_teComp(parent, uiClass, callback, ...args) {
            Laya.loader.create(uiClass.url, Laya.Handler.create(this, obj => {
                if (parent.destroyed) return;
                let pre = new Laya.Prefab();
                pre.json = obj;
                let uiNode = pre.create();
                uiNode.getComponent(uiClass).init(args, callback), parent && parent.addChild(uiNode);
            }));
        }
        crea_GameKey_tePrefab(path, parent, callback) {
            Laya.loader.create(path, Laya.Handler.create(this, obj => {
                if (parent.destroyed) return;
                let pre = new Laya.Prefab();
                pre.json = obj;
                let uiNode = pre.create();
                parent && parent.addChild(uiNode), callback && callback(uiNode);
            }));
        }
        crea_GameKey_teSurrenal(uiClass) {
            if (!uiClass.uiConfig.needUISurrenal) return null;
            var uiLayer = uiClass.uiConfig.layer,
                uiSurrenal = this.crea_GameKey_teBox();
            uiSurrenal.mouseThrough = !1;
            var parent = this.layers[uiLayer];
            return parent && parent.addChild(uiSurrenal), Util_GameKey_s.onBu_GameKey_ttonEvent(uiSurrenal),
                uiSurrenal;
        }
        getL_GameKey_ayer(uiLayer) {
            return this.layers[uiLayer];
        }
        clos_GameKey_eUI(ui) {
            var array = this.uis[ui.constructor.className];
            array && array.remove$(ui), ui.owner.destroy();
        }
        clos_GameKey_eAll() {
            for (var key in this.uis) {
                var array = this.uis[key];
                if (!(array instanceof Array)) continue;
                let i = array.length;
                for (; --i > -1;) {
                    var item = array[i];
                    item instanceof this.baseWindowClass && !item.constructor.uiConfig.notClose && (item.destroy(),
                        array.removeAt$(i));
                }
            }
        }
    }
    UIMa_GameKey_nager.instance = void 0;
    class Base_GameKey_Window extends Laya.Script {
        constructor() {
            super(), this.finishCb = void 0, this._eve_GameKey_nts = [], this._bannerActIndex = void 0;
        }
        onStart() {
            this.owner.visible = !1, this.constructor.uiConfig.bannerId || this.onUI_GameKey_Load();
        }
        onUI_GameKey_Load() {
            this._isClosed || (this.owner.visible = !0, this.uiSurrenal && this.uiSurrenal.destroy(),
                this.uiSurrenal = void 0, Laya.timer.callLater(this, function() {
                    this.finishCb && this.finishCb(this.ui);
                }));
        }
        init_GameKey_Data() {}
        moni_GameKey_torBtns() {}
        init(args, callback, uiSurrenal) {
            this.args = args, this.finishCb = callback, this.uiSurrenal = uiSurrenal, this.init_GameKey_Data();
        }
        addE_GameKey_ventListener(event, callback) {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(event, this, callback),
                this._eve_GameKey_nts.push({
                    e: event,
                    cn: callback
                });
        }
        remo_GameKey_veEventListener(event, callback) {
            for (var item, i = this._eve_GameKey_nts.length; --i > -1;)
                if ((item = this._eve_GameKey_nts[i]).e == event && item.cn == callback) {
                    this._eve_GameKey_nts.removeAt(i);
                    break;
                }
        }
        remo_GameKey_veAllEventListener() {
            for (var item; this._eve_GameKey_nts.length;) item = this._eve_GameKey_nts.shift(),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(item.e, this, item.cn);
            this._eve_GameKey_nts = [];
        }
        crea_GameKey_teBannerByUI(ui, isRefresh) {
            this._bannerUI = ui;
        }
        hide_GameKey_Banner() {}
        reba_GameKey_ckBanner() {
            this._bannerActIndex = void 0;
        }
        refr_GameKey_eshBanner() {
            this.bannerChangeCnt--, this.bannerChangeCnt < 0 || (Laya.timer.once(this.bannerChangeSpacing, this, this.refr_GameKey_eshBanner),
                1 == bannerState && (this.isLoadingNewBanner || (this.isLoadingNewBanner = !0)));
        }
        onLoadedNewBanner(isLoaded) {
            this.isLoadingNewBanner = !1, isLoaded && 1 == bannerState && (this._bannerUI.destroyed || (this.reba_GameKey_ckBanner(),
                this.bannerId = this.nextBannerId, this.crea_GameKey_teBannerByUI(this._bannerUI)));
        }
        doCl_GameKey_ose() {
            this._isClosed || (this.uiSurrenal && this.uiSurrenal.destroy(), this.uiSurrenal = void 0,
                this.reba_GameKey_ckBanner(), this._isClosed = !0, this.remo_GameKey_veAllEventListener(),
                Laya.timer.clearAll(this), UIMa_GameKey_nager.getInstance$().clos_GameKey_eUI(this),
                this.args && this.args.closeHandler && this.args.closeHandler.run());
        }
        destroy() {
            this.doCl_GameKey_ose();
        }
    }
    Base_GameKey_Window.url = "", Base_GameKey_Window.className = "", Base_GameKey_Window.uiConfig = {
        layer: UILa_GameKey_yer.LAYER_NORMAL,
        only: !0,
        needUISurrenal: !0,
        notClose: !1,
        bannerId: void 0
    };
    class BeachUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "沙滩界面";
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.btn_start$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_start"),
                this.label_day$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_day"),
                this.coinNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_coinNum"),
                this.label_day$.text = "DAY" + Data_GameKey_Manager.getInstance$().userData$.mission$ + " ",
                this.refreshCoinUI$(), this.moni_GameKey_torBtns(), this.monitorEvents$();
        }
        moni_GameKey_torBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_start$, this, "onClickStart$");
        }
        monitorEvents$() {
            this.addE_GameKey_ventListener(SSEV_GameKey_ENT.GETED_COIN, this.refreshCoinUI$);
        }
        refreshCoinUI$() {
            let num = Data_GameKey_Manager.getInstance$().userData$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num);
        }
        onClickStart$() {

            platform.getInstance().showInterstitial(() => {
                console("Beac")
                this.doCl_GameKey_ose();
            })

        }
    }
    BeachUI$.url = "Prefab/Battle/BeachWindow.json", BeachUI$.className = "BeachUI",
        BeachUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class PgTopView$ extends Laya.Script {
        constructor() {
            super(), this.canShowBanner$ = !0;
        }
        onStart() {
            window.pgdk$ && pgdk$.hideBanner$(), window.pgdk$ && pgdk$.onUIOpen$(this), this.boxBanner$ && (this.boxBanner$.alpha = 0),
                this.autoShowBanner$ && this.restoreBanner$();
        }
        restoreBanner$() {
            this.canShowBanner$ && this._createBannerByUI$();
        }
        _createBannerByUI$() {
            if (!this.boxBanner$) return;
            Laya.stage.height > 1280 && "number" == typeof this.boxBanner$.bottom && (this.boxBanner$.bottom = 60);
            let topLeftPoint = this.boxBanner$.localToGlobal(new Laya.Point(0, 0)),
                bottomRightPoint = this.boxBanner$.localToGlobal(new Laya.Point(this.boxBanner$.width, this.boxBanner$.height)),
                bounding_x = topLeftPoint.x,
                bounding_y = topLeftPoint.y,
                bounding_width = bottomRightPoint.x - topLeftPoint.x,
                bounding_height = bottomRightPoint.y - topLeftPoint.y,
                ratioX = Laya.stage.width / Laya.Browser.clientWidth,
                ratioY = Laya.stage.height / Laya.Browser.clientHeight,
                rect = {
                    left: bounding_x / ratioX,
                    top: bounding_y / ratioY,
                    width: bounding_width / ratioX,
                    height: bounding_height / ratioY
                },
                widget = {
                    top: this.top$,
                    bottom: this.bottom$,
                    left: this.left$,
                    right: this.right$
                };
        }
        onEnable() {}
        onDisable() {}
        onDestroy() {}
    }
    class Mode_GameKey_lUtils {
        constructor() {}
        static init() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.SCREEN_SIZE_CHANGE, null, Mode_GameKey_lUtils.onRe_GameKey_size);
        }
        static crea_GameKey_teUIModel(uiTarget, modelId, loadedHandler) {
            Mode_GameKey_lUtils.uiModelDic || (Mode_GameKey_lUtils.uiModelDic = {}, Mode_GameKey_lUtils.uiModelMaxId = 0),
                uiTarget.UMId || (uiTarget.UMId = ++Mode_GameKey_lUtils.uiModelMaxId);
            Mode_GameKey_lUtils.getU_GameKey_IData(uiTarget, !0);
            return Laya.CyzClassMap.UIMode3D.create(uiTarget, modelId, loadedHandler);
        }
        static onRe_GameKey_size() {
            Mode_GameKey_lUtils.resi_GameKey_zeScenes();
        }
        static resi_GameKey_zeScenes() {
            if (!Mode_GameKey_lUtils.uiModelDic) return;
            let mid;
            for (mid in Mode_GameKey_lUtils.uiModelDic) Mode_GameKey_lUtils.resi_GameKey_zeScene(Mode_GameKey_lUtils.uiModelDic[mid]);
        }
        static getU_GameKey_IData(uiTarget, isCreate) {
            let uiData = Mode_GameKey_lUtils.uiModelDic[uiTarget.UMId];
            if (!uiData && isCreate) {
                Mode_GameKey_lUtils.uiModelDic[uiTarget.UMId] = uiData = {};
                let scene = uiTarget.addChild(new Laya.Scene3D());
                scene.ambientColor = new Laya.Vector3(.3, .3, .3);
                let camera = scene.addChild(new Laya.Camera(0, .1, 1e3));
                camera.transform.rotate(new Laya.Vector3(0, 180, 0), !0, !1), camera.transform.position = new Laya.Vector3(0, 0, -500),
                    camera.orthographic = !0, camera.orthographicVerticalSize = 5, camera.clearFlag = Laya.BaseCamera.CLEARFLAG_DEPTHONLY,
                    uiData.camera = camera, uiData.scene = scene, Mode_GameKey_lUtils.resi_GameKey_zeScene(uiData);
            }
            return uiData;
        }
        static get3_GameKey_DUIPos(stageX, stageY, targetUI, vPos) {
            if (!targetUI) return null;
            vPos || (vPos = new Laya.Vector3());
            var data = Mode_GameKey_lUtils.getU_GameKey_IData(targetUI),
                sceneStageRate = data.sceneStageRate,
                camera = data.camera;
            return vPos.x = (stageX - .5 * Laya.stage.width) * sceneStageRate.x + camera.transform.position.x,
                vPos.y = (stageY - .5 * Laya.stage.height) * sceneStageRate.y + camera.transform.position.y,
                vPos.z = camera.transform.position.z + 100, vPos;
        }
        static resi_GameKey_zeScene(uiData) {
            let camera = uiData.camera,
                pos1 = new Laya.Vector3(0, 0, 0),
                pos2 = new Laya.Vector3(0, 0, 0),
                pos = new Laya.Vector3(0, 0, 0);
            camera.convertScreenCoordToOrthographicCoord(pos, pos1);
            let vScaleX = Laya.RenderState.clientWidth / Laya.stage.width || 1,
                vScaleY = Laya.RenderState.clientHeight / Laya.stage.height || 1;
            pos = new Laya.Vector3(vScaleX, vScaleY, 0), camera.convertScreenCoordToOrthographicCoord(pos, pos2),
                uiData.sceneStageRate = new Laya.Vector2(pos2.x - pos1.x, pos2.y - pos1.y);
        }
        static dest_GameKey_royUIModel(uiTarget, modelId) {
            let uiData = Mode_GameKey_lUtils.getU_GameKey_IData(uiTarget);
            uiData && (uiData.scene.destroy(), delete Mode_GameKey_lUtils.uiModelDic[uiTarget.UMId],
                uiTarget.UMId = void 0);
        }
        static getL_GameKey_ocalPosition(parent, pos, localPosition) {
            let worldMatrix = parent.worldMatrix;
            localPosition || (localPosition = new Laya.Vector3());
            var parentInvMat = Laya.Transform3D._tempMatrix0;
            return worldMatrix.invert(parentInvMat), Laya.Vector3.transformCoordinate(pos, parentInvMat, localPosition),
                localPosition;
        }
        static getL_GameKey_ocalRotation(parent, rotation, localRotation) {
            return localRotation || (localRotation = new Laya.Quaternion()), null != parent ? (parent.rotation.invert(Laya.Transform3D._tempQuaternion0),
                    Laya.Quaternion.multiply(Laya.Transform3D._tempQuaternion0, rotation, localRotation)) : rotation.cloneTo(localRotation),
                localRotation;
        }
        static getL_GameKey_ocalScale(parent, scale, localScale) {
            if (localScale || (localScale = new Laya.Vector3()), null !== parent) {
                let scaleMat = Laya.Transform3D._tempMatrix3x33,
                    localScaleMat = Laya.Transform3D._tempMatrix3x33,
                    localScaleMatE = localScaleMat.elements,
                    parInvScaleMat = parent._getScaleMatrix();
                parInvScaleMat.invert(parInvScaleMat), Laya.Matrix3x3.createFromScaling(scale, scaleMat),
                    Laya.Matrix3x3.multiply(parInvScaleMat, scaleMat, localScaleMat), localScale.x = localScaleMatE[0],
                    localScale.y = localScaleMatE[4], localScale.z = localScaleMatE[8];
            } else scale.cloneTo(localScale);
            return localScale;
        }
        static refreshRigidbodysColliderShape(sp) {
            let rigidbody = sp.getComponent(Laya.Rigidbody3D);
            if (rigidbody && Mode_GameKey_lUtils.refreshSingleRigidbodyColliderShape(rigidbody, sp), !sp._children) return;
            let i = sp._children.length;
            for (; --i > -1;) Mode_GameKey_lUtils.refreshRigidbodysColliderShape(sp._children[i]);
        }
        static refreshSingleRigidbodyColliderShape(rigidbody, sp) {
            let spRigidbody = sp.getComponent(Laya.Rigidbody3D);
            if (spRigidbody && spRigidbody != rigidbody) return;
            let collider = sp.getComponent(Laya.PhysicsCollider);
            if (collider) {
                let newShape = collider.colliderShape.clone();
                newShape._localRotation = Mode_GameKey_lUtils.getL_GameKey_ocalRotation(rigidbody.owner.transform, sp.transform.rotation),
                    newShape._scale = Mode_GameKey_lUtils.getL_GameKey_ocalScale(rigidbody.owner.transform, sp.transform.getWorldLossyScale()),
                    newShape._localOffset = Mode_GameKey_lUtils.getL_GameKey_ocalPosition(rigidbody.owner.transform, sp.transform.position),
                    newShape.updateLocalTransformations(), sp._destroyComponent(collider), rigidbody.colliderShape || (rigidbody.colliderShape = new Laya.CompoundColliderShape()),
                    rigidbody.colliderShape.addChildShape && rigidbody.colliderShape.addChildShape(newShape);
            }
            if (!sp._children) return;
            let i = sp._children.length;
            for (; --i > -1;) Mode_GameKey_lUtils.refreshSingleRigidbodyColliderShape(rigidbody, sp._children[i]);
        }
        static getMeshObjs$(sprite) {
            let objs = [];
            (sprite instanceof Laya.MeshSprite3D || sprite instanceof Laya.SkinnedMeshSprite3D) && objs.push(sprite);
            let cObjs, j, children = sprite._children,
                i = children.length;
            for (; --i > -1;)
                for (j = (cObjs = Mode_GameKey_lUtils.getMeshObjs$(children[i])).length; --j > -1;) objs.push(cObjs[j]);
            return objs;
        }
    }
    class Mode_GameKey_l3D extends Laya.Script {
        constructor() {
            super(), this._modelId = 0, this.sprite = null, this._animator = null, this.avater = null,
                this._canimators = [], this._parent = null, this._addModels = [], this._bones = {},
                this._loadedHandler = null, this._position = new Laya.Vector3(NaN, NaN, NaN), this._localPosition = new Laya.Vector3(0, 0, 0),
                this._localScale = new Laya.Vector3(1, 1, 1), this._localRotation = new Laya.Vector3(0, 0, 0),
                this.loaded = !1, this._active = !0, this._config = void 0, this._name = void 0,
                this._isDestroyed = void 0, this._isOrbit = void 0, this._adds = void 0, this._addLoadIndex = void 0,
                this.isPauseEmission$ = !1;
        }
        reset(parent, modelId, loadedHandler) {
            this._parent = parent, this._modelId = modelId, this._loadedHandler = loadedHandler,
                this._isDestroyed = !1, this._config = D.PrefabsPath[modelId];
            var chs = this._config.chs;
            if (this._name = chs.substring(chs.lastIndexOf("/") + 1), this.setLocalScale(this._config.scale),
                this._isOrbit = !!this._config.path, this._adds = [], this._addLoadIndex = 0, this._config.additionalId)
                for (var adds = this._config.additionalId.split("&"), i = 0; i < adds.length; i++) {
                    var p = adds[i].split("#");
                    this._adds.push([p[0], p[1]]);
                }
            this._isOrbit ? this.creareOrbit() : this.create();
        }
        create() {
            if (this.loaded) Laya.timer.once(1, this, this._onA_GameKey_llCompleted);
            else {
                let modelId = this._modelId;
                Mode_GameKey_l3D.prepareLoad([this._modelId], Laya.Handler.create(this, this._onC_GameKey_omplete, [modelId]));
            }
        }
        _onC_GameKey_omplete(modelId) {
            if (modelId == this._modelId && !this._isDestroyed) {
                var lh = this._config.chs;
                if (lh.endWith$(".lh") || (lh += "/" + this._name + ".lh"), this.sprite = Laya.Loader.getRes(lh),
                    this.sprite) {
                    this.sprite = Laya.Sprite3D.instantiate(this.sprite), this.sprite.$model = this,
                        this.sprite.$name = "Model_" + this._modelId, this.avater = Util_GameKey_s.getA_GameKey_vater(this.sprite),
                        this.avater && (this._animator = this.avater.getComponent(Laya.Animator));
                    for (var i = 0; i < this._adds.length; i++) {
                        var item = this._adds[i];
                        Mode_GameKey_l3D.create(this.getBone(item[1]), item[0]);
                    }
                    Laya.timer.once(1, this, this._onA_GameKey_llCompleted);
                }
            }
        }
        changeParent(parent) {
            let lastPos = this.sprite.transform.position.clone(),
                lastAngle = this.sprite.transform.rotationEuler.clone(),
                lastScale = this.sprite.transform.getWorldLossyScale().clone();
            this.sprite.removeSelf(), this._parent = parent, this._parent.addChild(this.sprite),
                this.sprite.transform.position = lastPos, this.sprite.transform.rotationEuler = lastAngle,
                this.sprite.transform.setWorldLossyScale(lastScale);
        }
        setPosition(x, y, z) {
            Util_GameKey_s.setV_GameKey_ector3(this._position, x, y, z), this.loaded && (this.sprite.transform.position = this._position);
        }
        setLocalPosition(x, y, z) {
            Util_GameKey_s.setV_GameKey_ector3(this._localPosition, x, y, z), this.loaded && (this.sprite.transform.localPosition = this._localPosition);
        }
        setLocalScale(x, y, z) {
            void 0 === x && (x = 1), void 0 === y && (y = x), void 0 === z && (z = x), Util_GameKey_s.setV_GameKey_ector3(this._localScale, x, y, z),
                this.loaded && (this.sprite.transform.localScale = this._localScale.clone(), Util_GameKey_s.rese_GameKey_tScale(this.sprite));
        }
        setLocalRotation(yaw, pitch, roll, isRad) {
            isRad || (yaw *= GameSetting$.RAD_1_ANGLE, pitch *= GameSetting$.RAD_1_ANGLE, roll *= GameSetting$.RAD_1_ANGLE),
                Util_GameKey_s.setV_GameKey_ector3(this._localRotation, yaw, pitch, roll), this.loaded && this._setLocalRotation();
        }
        _setLocalRotation() {
            var transform = this.sprite.transform;
            Laya.Quaternion.createFromYawPitchRoll(this._localRotation.x, this._localRotation.y, this._localRotation.z, transform._localRotation),
                transform.localRotation = transform._localRotation;
        }
        setActive(active) {
            this._active != active && (this._active = active, this.loaded && (this.sprite.active = active));
        }
        rotate(rotation, isLocal, isRadian) {
            this.loaded && this.sprite.transform.rotate(rotation, isLocal, isRadian);
        }
        _onLoadedModel(model) {
            if (!this._isDestroyed) {
                this.sprite = Laya.Sprite3D.instantiate(model), this.avater = this.sprite.getChildAt(0),
                    this._animator = this.avater.getComponent(Laya.Animator);
                for (var i = 0; i < this._config.subModel.length; i++) {
                    var childName = this._config.subModel[i];
                    if ("0" == childName) break;
                    var child = this.avater.getChildByName(childName);
                    if (child) {
                        var canimator = child.getComponent(Laya.Animator);
                        canimator && this._canimators.push(canimator);
                    }
                }
                this._loadAdds();
            }
        }
        _loadAdds() {
            this._isDestroyed || (this._addLoadIndex >= this._adds.length ? this._onA_GameKey_llCompleted() : this._addModels.push(Mode_GameKey_l3D.create(void 0, this._adds[this._addLoadIndex][0], Laya.Handler.create(this, this._onA_GameKey_ddLoaded))));
        }
        _onA_GameKey_ddLoaded() {
            if (!this._isDestroyed) {
                var m = this._addModels.last(),
                    boneName = this._adds[this._addLoadIndex][1];
                this.bindBone(boneName, m.sprite), this._addLoadIndex++, this._loadAdds();
            }
        }
        _onA_GameKey_llCompleted() {
            this.loaded = !0, this._isDestroyed || (this._waitDestroy ? this.dispose() : (this._parent && this._parent.addChild(this.sprite),
                this.sprite.transform.localScale = this._localScale, this.refreshRigidbodysColliderShape(this.sprite),
                isNaN(this._position.x) ? this.sprite.transform.localPosition = this._localPosition : this.sprite.transform.position = this._position,
                this._setLocalRotation(), this._config.color && this._config.color.length > 0 && Mode_GameKey_l3D.chan_GameKey_geMaterialColor(this.sprite, this._config.color[0], this._config.color[1], this._config.color[2], this._config.color[3]),
                this.isPauseEmission$ && this.pauseEmission(), this.sprite.active = this._active,
                this._parent.destroyed || this._loadedHandler && this._loadedHandler.runWith(this)));
        }
        refreshRigidbodysColliderShape(sp) {
            let rigidbody = sp.getComponent(Laya.Rigidbody3D);
            if (rigidbody && this.refreshSingleRigidbodyColliderShape(rigidbody, sp), !sp._children) return;
            let i = sp._children.length;
            for (; --i > -1;) this.refreshRigidbodysColliderShape(sp._children[i]);
        }
        refreshSingleRigidbodyColliderShape(rigidbody, sp) {
            let collider = sp.getComponent(Laya.PhysicsCollider);
            if (collider) {
                let newShape = collider.colliderShape.clone();
                newShape._localRotation = Mode_GameKey_lUtils.getL_GameKey_ocalRotation(rigidbody.owner.transform, sp.transform.rotation),
                    newShape._scale = Mode_GameKey_lUtils.getL_GameKey_ocalScale(rigidbody.owner.transform, sp.transform.getWorldLossyScale()),
                    newShape._localOffset = Mode_GameKey_lUtils.getL_GameKey_ocalPosition(rigidbody.owner.transform, sp.transform.position),
                    newShape.updateLocalTransformations(), sp._destroyComponent(collider), rigidbody.colliderShape.addChildShape && rigidbody.colliderShape.addChildShape(newShape);
            }
            if (!sp._children) return;
            let i = sp._children.length;
            for (; --i > -1;) this.refreshSingleRigidbodyColliderShape(rigidbody, sp._children[i]);
        }
        bindBone(boneName, boneChild) {
            var bone = this.getBone(boneName);
            bone && bone.addChild(boneChild);
        }
        getBone(boneName) {
            var bone = this._bones[boneName];
            if (!bone) {
                if (boneName !== Mode_GameKey_l3D.ORBIT_POINT.POINT3 || this._animator._avatarNodeMap[boneName]) {
                    if (!this._animator._avatarNodeMap[boneName]) return console.log("无该模型:" + this._modelId + "的绑点:" + boneName + "!"),
                        null;
                    bone = this.sprite.addChild(new Laya.Sprite3D()), this._animator.linkSprite3DToAvatarNode(boneName, bone);
                } else bone = this.avater;
                this._bones[boneName] = bone;
            }
            return bone;
        }
        playAnim(animName, isLoop, caller, callback, speed, isForce) {
            let animState;
            if (this._animator && (animState = this._animator._controllerLayers[0]._statesMap[animName]),
                animState) {
                let currentState = this._animator.getControllerLayer()._playStateInfo._currentState;
                if (!isForce && currentState.name == animName && animState.speed > 0) return;
                animState.clip.islooping = isLoop, animState.speed = null != speed ? speed : 1,
                    isForce ? this._animator.play(animName, 0, 0) : this._animator.crossFade(animName, .2);
            }
        }
        stopAnim$() {
            let control = this._animator.getControllerLayer();
            control && (control._playStateInfo._currentState.speed = 0);
        }
        pauseEmission() {
            this.isPauseEmission$ = !0, this.sprite && this._setEmission$(this.sprite, !1);
        }
        resumeEmission() {
            this.isPauseEmission$ = !1, this.sprite && this._setEmission$(this.sprite, !0);
        }
        _setEmission$(node, enable) {
            if (this.isPauseEmission$ != enable && (node.particleSystem && (node.particleSystem.emission.enable = enable),
                    node._children && node._children.length > 0))
                for (let i = 0; i < node._children.length; i++) this._setEmission$(node._children[i], enable);
        }
        changeEmissionColor$(r, g, b, a) {
            this.sprite && this._changeEmissionColor$(this.sprite, r, g, b, a);
        }
        _changeEmissionColor$(node, r, g, b, a) {
            if (node.particleSystem) {
                let startColorConstant = node.particleSystem.startColorConstant;
                startColorConstant.x = r, startColorConstant.y = g, startColorConstant.z = b, startColorConstant.w = a;
            }
            if (node._children && node._children.length > 0)
                for (let i = 0; i < node._children.length; i++) this._changeEmissionColor$(node._children[i], r, g, b, a);
        }
        static chan_GameKey_geMaterialColor(sprite, r, g, b, a, materialName) {
            Mode_GameKey_l3D._cha_GameKey_ngeMaterialColor(sprite, r, g, b, a, materialName);
            for (let i = 0; i < sprite._children.length; i++) Mode_GameKey_l3D.chan_GameKey_geMaterialColor(sprite._children[i], r, g, b, a, materialName);
        }
        static _cha_GameKey_ngeMaterialColor(sprite, r, g, b, a, materialName) {
            let materials = [];
            if (sprite instanceof Laya.MeshSprite3D || sprite instanceof Laya.SkinnedMeshSprite3D || sprite instanceof Laya.ShuriKenParticle3D)
                if (null != materialName) {
                    let vMaterials = sprite._render.materials;
                    if (vMaterials) {
                        let vMaterial, i = vMaterials.length;
                        for (; --i > -1;)(vMaterial = vMaterials[i]).name == materialName && materials.push(vMaterial);
                    } else sprite._render.material.name == materialName && materials.push(sprite._render.material);
                } else {
                    materials.push(sprite._render.material);
                    let vMaterials = sprite._render.materials;
                    if (vMaterials) {
                        let i = vMaterials.length;
                        for (; --i > -1;) materials.push(vMaterials[i]);
                    }
                }
            if (materials && materials.length > 0) {
                let i = materials.length;
                for (; --i > -1;) Mode_GameKey_l3D.setM_GameKey_aterialColor(materials[i], r, g, b, a);
            }
        }
        static setM_GameKey_aterialColor(material, r, g, b, a) {
            material.defualtAlbedoColor || (material.defualtAlbedoColor = null != material.albedoColor ? material.albedoColor.clone() : material.color),
                r = null == r ? material.defualtAlbedoColor.x : r, g = null == g ? material.defualtAlbedoColor.y : g,
                b = null == b ? material.defualtAlbedoColor.z : b, a = null == a ? material.defualtAlbedoColor.w : a,
                null != material.albedoColor ? material.albedoColor = new Laya.Vector4(r, g, b, a) : material.color = new Laya.Vector4(r, g, b, a);
        }
        static setF_GameKey_riction(sprite, friction) {
            let i, components = sprite._components;
            if (components) {
                let vComponent;
                for (i = components.length; --i > -1;)((vComponent = components[i]) instanceof Laya.PhysicsCollider || vComponent instanceof Laya.Rigidbody3D) && (vComponent.friction = friction);
            }
            let childrens = sprite._children;
            if (childrens)
                for (i = childrens.length; --i > -1;) Mode_GameKey_l3D.setF_GameKey_riction(childrens[i], friction);
        }
        getMaterials$() {
            if (this.loaded) return this._getMaterials(this.sprite);
        }
        _getMaterials(sprite) {
            let materials = [];
            if (sprite instanceof Laya.MeshSprite3D || sprite instanceof Laya.SkinnedMeshSprite3D)
                if (sprite._render.materials) {
                    let i = sprite._render.materials.length;
                    for (; --i > -1;) materials.push(sprite._render.materials[i]);
                } else materials.push(sprite._render.material);
            let childrens = sprite._children;
            if (childrens) {
                let i = childrens.length;
                for (; --i > -1;) {
                    let childMaterials = this._getMaterials(childrens[i]),
                        j = childMaterials.length;
                    for (; --j > -1;) materials.push(childMaterials[j]);
                }
            }
            return materials;
        }
        rese_GameKey_tMaterialsColor(sprite) {
            this._res_GameKey_etMaterialColor(sprite);
            for (let i = 0; i < sprite._children.length; i++) this.rese_GameKey_tMaterialsColor(sprite._children[i]);
        }
        _res_GameKey_etMaterialColor(sprite) {
            if (sprite instanceof Laya.MeshSprite3D || sprite instanceof Laya.SkinnedMeshSprite3D) {
                sprite._render.material.defualtAlbedoColor && (null != sprite._render.material.albedoColor ? sprite._render.material.albedoColor = sprite._render.material.defualtAlbedoColor.clone() : material.color = sprite._render.material.defualtAlbedoColor.clone());
                let materials = sprite._render.materials;
                if (materials) {
                    let vMaterial, i = materials.length;
                    for (; --i > -1;)(vMaterial = materials[i]).defualtAlbedoColor && (null != vMaterial.albedoColor ? vMaterial.albedoColor = vMaterial.defualtAlbedoColor.clone() : vMaterial.color = vMaterial.defualtAlbedoColor.clone());
                }
            }
        }
        replay() {
            this.setActive(!1), this.setActive(!0);
        }
        creareOrbit() {
            var vOrbitUrl = Mode_GameKey_l3D._fullChs(Mode_GameKey_l3D.ORBIT_DATA[this._config.path]);
            this.spritePrefab = Laya.Loader.getRes(vOrbitUrl), this.spritePrefab = Laya.Sprite3D.instantiate(this.spritePrefab),
                this.spritePrefab.loaded ? Laya.timer.once(1, this, this.onLo_GameKey_adedOrbit, null, !1) : this.spritePrefab.once(Laya.Event.HIERARCHY_LOADED, this, this.onLo_GameKey_adedOrbit);
        }
        onLo_GameKey_adedOrbit() {
            if (!this._isDestroyed) {
                this._onLoadedModel(this.spritePrefab), this._onA_GameKey_llCompleted();
                var itemNum = 0;
                this._config.path === Mode_GameKey_l3D.ORBIT_TYPE.SURROUND ? itemNum = 3 : this._config.path === Mode_GameKey_l3D.ORBIT_TYPE.UPROUND ? itemNum = 2 : this._config.path === Mode_GameKey_l3D.ORBIT_TYPE.DRAGON && (itemNum = 1),
                    this.prepareOrbitItems(itemNum);
            }
        }
        prepareOrbitItems(itemNum) {
            var url = Mode_GameKey_l3D._getUrlById(this._modelId);
            this._orbitItemPrefab = Laya.Loader.getRes(url), this._orbitItemPrefab = Laya.Sprite3D.instantiate(this._orbitItemPrefab),
                this._orbitItemPrefab.loaded ? this.onLo_GameKey_adedOrbitItems(itemNum) : this._orbitItemPrefab.once(Laya.Event.HIERARCHY_LOADED, this, this.onLo_GameKey_adedOrbitItems, [itemNum]);
        }
        onLo_GameKey_adedOrbitItems(itemNum) {
            if (!this._isDestroyed && itemNum > 0)
                for (var orbitItemGo; --itemNum > -1;) orbitItemGo = Laya.Sprite3D.instantiate(this._orbitItemPrefab),
                    this.bindBone(Mode_GameKey_l3D.ORBIT_POINT["POINT" + (itemNum + 1)], orbitItemGo);
        }
        dispose() {
            if (!this._isDestroyed && this.loaded) {
                this._isDestroyed = !0, this.loaded = !1;
                for (var i = 0; i < this._addModels.length; i++) this._addModels[i].dispose();
                this._orbitItemPrefab && this._orbitItemPrefab.destroy(!0), this.spritePrefab && this.spritePrefab.destroy(!0),
                    this._addModels = [], this._parent && this._parent.destroyed || this.sprite.destroy(!0),
                    this.sprite = null, this._animator = null, this.avater = null, this._canimators = [],
                    this._parent = null, this._addModels = [], this._bones = {}, this._loadedHandler = null,
                    this._active = !0, this._waitDestroy = !1, this.isPauseEmission$ = !1, this._position = new Laya.Vector3(NaN, NaN, NaN),
                    this._localPosition = new Laya.Vector3(0, 0, 0), this._localScale = new Laya.Vector3(1, 1, 1),
                    this._localRotation = new Laya.Vector3(0, 0, 0), Laya.timer.clearAll(this), Laya.Pool.recover("ssModel", this),
                    Mode_GameKey_l3D.modelUsedCnt[this._modelId]--;
            } else this._waitDestroy = !0;
        }
        setReceiveShadow(value) {
            this._set_GameKey_ReceiveShadow(this.sprite, value);
        }
        _set_GameKey_ReceiveShadow(sprite, isReceive) {
            if (sprite instanceof Laya.MeshSprite3D) sprite.meshRenderer.receiveShadow = isReceive;
            else
                for (let i = 0; i < sprite._children.length; i++) this._set_GameKey_ReceiveShadow(sprite._children[i], isReceive);
        }
        setCastShadow(value) {
            this._set_GameKey_CastShadow(this.sprite, value);
        }
        _set_GameKey_CastShadow(sprite, isCast) {
            sprite instanceof Laya.MeshSprite3D ? sprite.meshRenderer.castShadow = isCast : sprite instanceof Laya.SkinnedMeshSprite3D && (sprite.skinnedMeshRenderer.castShadow = isCast);
            for (let i = 0; i < sprite._children.length; i++) this._set_GameKey_CastShadow(sprite._children[i], isCast);
        }
        static _isLoading(ids) {
            for (var i = 0; i < ids.length; i++)
                if (-1 != Mode_GameKey_l3D.curLoad.indexOf(ids[i])) return !0;
            return !1;
        }
        static prepareLoad(ids, completeHandler) {
            if (0 == ids.length && completeHandler.run(), Mode_GameKey_l3D._isLoading(ids)) {
                var data = {
                    ids: ids,
                    completeHandler: completeHandler
                };
                Mode_GameKey_l3D.waitting.push(data);
            } else if (Mode_GameKey_l3D.curLoadingNum >= Mode_GameKey_l3D.MAX_LOADING_NUM) {
                data = {
                    ids: ids,
                    completeHandler: completeHandler
                };
                Mode_GameKey_l3D.waitting.push(data);
            } else {
                for (var urls = [], i = 0; i < ids.length; i++) {
                    var id = ids[i],
                        config = D.PrefabsPath[id],
                        chs = id;
                    if (Number(id)) {
                        if (!config) continue;
                        Mode_GameKey_l3D.curLoad.push(id), chs = config.chs;
                    }
                    var additionalId = config ? config.additionalId : 0;
                    if (additionalId)
                        for (var adds = additionalId.split("&"), j = 0; j < adds.length; j++) {
                            var effectId = adds[j].split("#")[0];
                            !ids.contains(effectId) && ids.push(effectId);
                        }
                    urls.push(chs + chs.substr(chs.lastIndexOf("/")) + ".lh");
                }
                Mode_GameKey_l3D.curLoadingNum++, Laya.loader.create(urls, Laya.Handler.create(null, function() {
                    Mode_GameKey_l3D.curLoadingNum--;
                    for (var i = 0; i < ids.length; i++) {
                        var id = ids[i],
                            config = D.PrefabsPath[id];
                        if (Number(id)) {
                            if (!config) continue;
                            config.chs;
                        }
                        Mode_GameKey_l3D.curLoad.remove$(id);
                    }
                    var next;
                    Laya.timer.once(1, this, function() {
                        completeHandler.run();
                    });
                    for (i = Mode_GameKey_l3D.waitting.length - 1; i >= 0; i--)
                        if (next = Mode_GameKey_l3D.waitting[i], !Mode_GameKey_l3D._isLoading(next)) return Mode_GameKey_l3D.waitting.removeAt$(i),
                            void Mode_GameKey_l3D.prepareLoad(next.ids, next.completeHandler);
                }));
            }
        }
        static create(parent, modelId, loadedHandler) {
            var model = Laya.Pool.getItem("ssModel") || new Mode_GameKey_l3D();
            return model.reset(parent, modelId, loadedHandler), Mode_GameKey_l3D._addModelUsedCnt(modelId),
                model;
        }
        static _addModelUsedCnt(modelId) {
            Mode_GameKey_l3D.modelUsedCnt[modelId] = (Mode_GameKey_l3D.modelUsedCnt[modelId] || 0) + 1;
        }
        static _getUrlById(modelId) {
            var config = D.PrefabsPath[modelId];
            return Mode_GameKey_l3D._fullChs(config.chs);
        }
        static _fullChs(chs) {
            var resName = chs.substring(chs.lastIndexOf("/") + 1);
            return chs + "/" + resName + ".lh";
        }
        static destroyRes(res) {
            res && (res.destroy && !res.destroyed ? res.destroy() : res.dispose && !res.disposed && res.dispose());
        }
        static destroyResArray(resources) {
            if (resources)
                for (var i = 0; i < resources.length; i++) {
                    var url = resources[i];
                    GameSetting$.SWITCH.MODEL_LOG && console.log("-资源:" + url), Mode_GameKey_l3D.loadedCount[url] && (Mode_GameKey_l3D.loadedCount[url]--,
                        0 == Mode_GameKey_l3D.loadedCount[url] && (Mode_GameKey_l3D.destroyRes(Laya.Loader.getRes(url)),
                            Laya.Loader.clearRes(Laya.URL.formatURL(url), !0)));
                }
        }
    }
    Mode_GameKey_l3D.ORBIT_POINT = {}, Mode_GameKey_l3D.ORBIT_POINT.POINT1 = "leftPoint",
        Mode_GameKey_l3D.ORBIT_POINT.POINT2 = "rightPoint", Mode_GameKey_l3D.ORBIT_POINT.POINT3 = "waistPoint",
        Mode_GameKey_l3D.ORBIT_POINT.POINT4 = "solePoint", Mode_GameKey_l3D.ORBIT_TYPE = {},
        Mode_GameKey_l3D.ORBIT_TYPE.SURROUND = 1, Mode_GameKey_l3D.ORBIT_TYPE.UPROUND = 2,
        Mode_GameKey_l3D.ORBIT_TYPE.DRAGON = 3, Mode_GameKey_l3D.ORBIT_DATA = {}, Mode_GameKey_l3D.ORBIT_DATA[Mode_GameKey_l3D.ORBIT_TYPE.UPROUND] = "models/orbit/guiji_luoxuan01",
        Mode_GameKey_l3D.ORBIT_DATA[Mode_GameKey_l3D.ORBIT_TYPE.DRAGON] = "models/orbit/guiji_long01",
        Mode_GameKey_l3D.MAX_LOADING_NUM = 3, Mode_GameKey_l3D.curLoadingNum = 0, Mode_GameKey_l3D.waitting = [],
        Mode_GameKey_l3D.loadedCount = {}, Mode_GameKey_l3D.modelUsedCnt = {}, Mode_GameKey_l3D.curLoad = [];
    class Logi_GameKey_nLoadingUI extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "登录加载";
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this._tai_GameKey_lValue = [".", "..", "...", "....", ".....", "......"],
                this._tai_GameKey_lIndex = 0, this._pro_GameKey_gressUpdateTime = 200, this._pro_GameKey_gressTime = this._pro_GameKey_gressUpdateTime,
                this.load_GameKey_edCallback = this.args[0], this.pack_GameKey_ages = ["models_role", "models_obj"],
                this.preloadModelIds = [2e3, 2001, 2002], this.progressLength = this.pack_GameKey_ages.length + 1,
                this.progress_bar = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "progress_bar"),
                this.progress_icon = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "progress_icon"),
                this.labelTail = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_tail"),
                this.refreshProgressUI(), this.load_GameKey_SubPacks();
        }
        refreshProgressUI() {
            if (!this.progress_bar) return;
            let p = null == this.pack_GameKey_ages ? 0 : 1 - this.pack_GameKey_ages.length / this.progressLength;
            p = Math.min(1, this.progress_bar.value + 5e-4 * Laya.timer.delta), this.progress_bar.value = p,
                this.progress_icon.x = this.progress_bar.width * p;
        }
        load_GameKey_SubPacks() {
            this.onlo_GameKey_adedPacks();
        }
        onLo_GameKey_adedSinglePack(res) {
            console.log("loadSubpackage success"), this.load_GameKey_SubPacks();
        }
        onlo_GameKey_adedPacks() {
            this.preloadModels$();
        }
        preloadModels$() {
            0 != this.preloadModelIds.length ? Mode_GameKey_l3D.prepareLoad(this.preloadModelIds, Laya.Handler.create(this, this.onModelsPreloaded$)) : this.loadingComplete$();
        }
        onModelsPreloaded$() {
            this.loadingComplete$();
        }
        loadingComplete$() {
            platform.getInstance().startup("Blend-It-3D", "", () => {
                let yad = new Laya.Image();
                yad.scale(0.8, 0.8);
                yad.skin = "common/yad.png";
                yad.right = 10;
                yad.top = 10;
                yad.zOrder = 1e3;
                yad.on(Laya.Event.MOUSE_DOWN, yad, () => {
                    platform.getInstance().navigate("GAME", "LOGO")
                })
                Laya.stage.addChild(yad);
                this.load_GameKey_edCallback && this.load_GameKey_edCallback(), this.load_GameKey_edCallback = void 0,
                    Laya.timer.once(100, this, this.destroy);
            });
        }
        upda_GameKey_teTail() {}
        onUpdate() {
            this._pro_GameKey_gressTime += Laya.timer.delta, this._pro_GameKey_gressTime > this._pro_GameKey_gressUpdateTime && (this._pro_GameKey_gressTime = 0,
                this.upda_GameKey_teTail()), this.refreshProgressUI();
        }
    }
    Logi_GameKey_nLoadingUI.url = "Prefab/Loading/LoginLoadingWindow.json", Logi_GameKey_nLoadingUI.className = "LoginLoadingUI",
        Logi_GameKey_nLoadingUI.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_TOP,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class PgViewBase extends Laya.Script {
        constructor() {
            super();
        }
        executeWhenSdkReady$(target, callback) {
            "undefined" != typeof pgdk$ && pgdk$.isSdkReady$ ? callback && callback() : Laya.timer.once(100, this, this.executeWhenSdkReady$, [target, callback], !0);
        }
        setWidget$(node, top, bottom, left, right) {
            "number" == typeof top && (node.top = top), "number" == typeof bottom && (node.bottom = bottom),
                "number" == typeof left && (node.left = left), "number" == typeof right && (node.right = right),
                "number" != typeof left && "number" != typeof right && (node.centerX = 0), "number" != typeof top && "number" != typeof bottom && (node.centerY = 0);
        }
        createBaseList$(isHorizontal) {
            let list = new Laya.List();
            return list.repeatX = isHorizontal ? 10 : 1, list.repeatY = isHorizontal ? 1 : 10,
                isHorizontal ? list.hScrollBarSkin = "common/hscroll.png" : list.vScrollBarSkin = "common/vscroll.png",
                list.scrollBar.visible = !1, this.setWidget$(list, 0, 0, 0, 0), list;
        }
        createLabel$(parent, fontSize, text, color) {
            let label = parent.addChild(new Laya.Label());
            return color && (label.color = color), label.fontSize = fontSize, label.lineHeight = fontSize,
                label.font = "SimHei", label.text = text, label;
        }
        registerAdClickEvent$(cell, viewName) {
            cell.clickEvent$ && cell.off(Laya.Event.CLICK, cell, cell.clickEvent$), cell.clickEvent$ = function() {
                pgdk$.navigateToMiniProgram$(this.dataSource, viewName);
            }, cell.on(Laya.Event.CLICK, cell, cell.clickEvent$);
        }
        createMask$(parent, url) {
            if (!url) return;
            let mask = new Laya.Image();
            return mask.skin = url, mask.width = parent.width, mask.height = parent.height,
                mask.left = mask.right = mask.top = mask.bottom = 0, parent.mask = mask, mask;
        }
        createBgNode$(parent, skin, width, height) {
            let bg;
            if (void 0 === width && (width = 100), void 0 === height && (height = 100), skin.startsWith("#"))(bg = parent.addChild(new Laya.Box())).width = width,
                bg.height = height, 9 === skin.length ? (bg.bgColor = skin.substring(0, 7), bg.alpha = parseInt("0x" + skin.substring(7)) / 255) : (bg.bgColor = skin,
                    bg.alpha = .7);
            else {
                let values = skin.split(";");
                (bg = parent.addChild(new Laya.Image())).width = width, bg.height = height, bg.skin = values[0],
                    values[1] && (bg.sizeGrid = values[1]);
            }
            return bg;
        }
    }
    class PgGifIcon$ extends Laya.Sprite {
        constructor(originalSize) {
            super(), this._offsetTexture = new Laya.Point(), this._originalSize = originalSize,
                this._imgUrl = "", this._singleImgSize = null, this._totalFrames = 0, this._curentFrame = 0,
                this._rowCount = 0, this._colCount = 0, this._tag = "", this._imgTexture = null,
                this._onSizeChangedCb = null, this.size(originalSize.width, originalSize.height);
        }
        setImage(imgUrl) {
            if (this._imgUrl !== imgUrl)
                if ("object" == typeof imgUrl) {
                    let imgData = imgUrl;
                    this._setImageAnimation(imgData.path, {
                        width: imgData.width,
                        height: imgData.height
                    }, imgData.frame_count);
                } else this._setImg(imgUrl);
        }
        _setImg(imgUrl) {
            this._imgUrl = imgUrl, this._totalFrames = 1, null !== this._imgTexture && (this._imgTexture = null,
                this._singleImgSize = null, this._totalFrames = 0, this._curentFrame = 0, this._rowCount = 0,
                this._colCount = 0, this._endAnimate(), this.graphics.clear(!0));
            let imgPath = "";
            if ("string" == typeof imgUrl && "" !== imgUrl) imgPath = imgUrl;
            else if (Array.isArray(imgUrl) && imgUrl.length > 0) {
                let randomIndex = pgdk$.randomInt(0, imgUrl.length - 1);
                imgPath = imgUrl[randomIndex];
            } else imgPath = "ad/default_ad.png";
            this.loadImage(imgPath, Laya.Handler.create(this, function() {
                this.destroyed || this._imgUrl === imgUrl && this.texture && (this.size(this.texture.width, this.texture.height),
                    this._onSizeChangedCb && this._onSizeChangedCb());
            }.bind(this)));
        }
        _setImageAnimation(imgUrl, singleImgSize, totalFrames) {
            this.destroyed || (totalFrames > 1 ? (this._imgUrl = imgUrl, this._singleImgSize = singleImgSize,
                this._totalFrames = totalFrames, this.size(this._singleImgSize.width, this._singleImgSize.height),
                this._onSizeChangedCb && this._onSizeChangedCb(), this._loadImg(function() {
                    this.destroyed || imgUrl === this._imgUrl && (null !== this.texture && (this.texture = null),
                        null !== this._imgTexture && (this._curentFrame = 0, this._rowCount = this._imgTexture.sourceHeight / this._singleImgSize.height,
                            this._colCount = this._imgTexture.sourceWidth / this._singleImgSize.width, this.scaleX = this.parent.width / this._singleImgSize.width,
                            this.scaleY = this.parent.height / this._singleImgSize.height, this.centerX = this.centerY = 0,
                            this._startAnimate()));
                }.bind(this))) : this._setImg(imgUrl));
        }
        _loadImg(cb) {
            "string" == typeof this._imgUrl && "" !== this._imgUrl && Laya.loader.load(this._imgUrl, Laya.Handler.create(this, function() {
                this.destroyed || (this._imgTexture = Laya.loader.getRes(this._imgUrl), "function" == typeof cb && cb());
            }.bind(this)));
        }
        _updateFrame() {
            if (this.isStop) return;
            this._curentFrame += 1, this._curentFrame > this._totalFrames && (this._curentFrame = 1);
            let offsetX = (this._curentFrame - 1) % this._colCount * this._singleImgSize.width,
                offsetY = Math.floor((this._curentFrame - 1) / this._colCount) * this._singleImgSize.height;
            this._offsetTexture.x = -offsetX, this._offsetTexture.y = -offsetY, this.graphics.clear(!0),
                this.graphics.fillTexture(this._imgTexture, 0, 0, this._singleImgSize.width, this._singleImgSize.height, "no-repeat", this._offsetTexture);
        }
        _startAnimate() {
            this._endAnimate(), this._tag = pgdk$.generateString(32), pgdk$.schedule$.schedule("Update_Image_Animation_" + this._tag, function() {
                this._checkIsOnShow(this) && this._updateFrame();
            }.bind(this), !1, 100), this._updateFrame(), this.isStop = !1;
        }
        _endAnimate() {
            "" !== this._tag && (pgdk$.schedule$.unschedule("Update_Image_Animation_" + this._tag),
                this._tag = "");
        }
        clearAnim() {
            this.isStop = !0, this.graphics.clear(!0);
        }
        onSizeChanged(cb) {
            "function" == typeof cb && (this._onSizeChangedCb = cb);
        }
        offSizeChanged() {
            this._onSizeChangedCb = null;
        }
        _checkIsOnShow(node) {
            return null === node || node && node.visible && this._checkIsOnShow(node.parent);
        }
    }
    class PgSingleAd$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = null, this.iconBg$ = null, this.iconMask$ = null, this.titleBg$ = null,
                this.showTitle$ = !0, this.isInCell$ = !1, this.isRotate$ = !0, this.titleColor$ = "#000000",
                this.dataType$ = "gameover";
        }
        onStart() {
            this.owner.bgColor = "", this.owner.alpha = 1, this.executeWhenSdkReady$(this, this.initUI$.bind(this));
        }
        initUI$() {
            this.ui$ = new Laya.Image(), this.owner.addChild(this.ui$);
            let data = pgdk$.getRandomAd$(this.dataType$);
            this.dataSource$ = data, this.dataSource$ && (this.ui$.skin = this.iconBg$, this.ui$.anchorX = this.ui$.anchorY = .5,
                this.ui$.width = this.owner.width, this.ui$.height = this.owner.height, this.setWidget$(this.ui$, 0, 0, 0, 0),
                this.createIcon$(), this.createTitle$(), this.createMask$(this.icon$, this.iconMask$),
                this.initEvents$(), this.resetRotate$());
        }
        createIcon$() {
            this.icon$ = new Laya.Image(), this.ui$.addChild(this.icon$), this.isInCell$ ? (this.icon$.width = this.ui$.width - 50,
                this.icon$.height = this.ui$.height - 50, this.icon$.centerY = -5, this.icon$.centerX = 0,
                this.icon$.zOrder = -2) : (this.icon$.width = this.ui$.width - 10, this.icon$.height = this.icon$.width,
                this.setWidget$(this.icon$, 5, null, 5, 5)), this.changeAd$();
        }
        createTitle$() {
            this.showTitle$ && (this.title$ = this.createLabel$(this.ui$, 24, this.dataSource$.title.substring(0, 6), this.titleColor$),
                this.setWidget$(this.title$, null, 5, null, null));
        }
        onUpdate() {
            this.rotate$();
        }
        changeAd$() {
            if (pgdk$.recoverRandomAd$(this.dataSource$), this.dataSource$ = pgdk$.getRandomAd$(this.dataType$),
                this.dataSource$) {
                if (this.setIcon$(), !this.showTitle$) return;
                this.title$ && (this.title$.text = this.dataSource$.title.substring(0, 6));
            }
        }
        resetRotate$() {
            this.isRotate$ && (this.ui$.rotation = 0, this.rotateCnt = 0, this.rotateSpeed = 100,
                this.nextRotateTime = 3);
        }
        rotate$() {
            if (!this.ui$) return;
            if (!this.isRotate$) return;
            let dt = Laya.timer.delta / 1e3;
            if (this.nextRotateTime > 0) this.nextRotateTime -= dt;
            else {
                let lastAngle = this.ui$.rotation;
                this.ui$.rotation += this.rotateSpeed * dt, this.ui$.rotation <= -5 ? (this.ui$.rotation = -5,
                    this.rotateSpeed = Math.abs(this.rotateSpeed)) : this.ui$.rotation >= 5 && (this.ui$.rotation = 5,
                    this.rotateSpeed = -Math.abs(this.rotateSpeed)), (lastAngle >= 0 && this.ui$.rotation <= 0 || lastAngle <= 0 && this.ui$.rotation >= 0) && (this.rotateCnt++,
                    this.rotateCnt >= 4 && (this.resetRotate$(), this.changeAd$()));
            }
        }
        click$() {
            pgdk$.navigateToMiniProgram$(this.dataSource$, this.viewName$);
        }
        onRemoved$() {
            pgdk$.recoverRandomAd$(this.dataSource$);
        }
        initEvents$() {
            this.ui$.on(Laya.Event.REMOVED, this, this.onRemoved$), this.ui$.on(Laya.Event.CLICK, this, this.click$);
        }
        setIcon$() {
            let singleData, imgData = this.dataSource$.img;
            if (this.gif && this.gif.clearAnim(), "string" == typeof imgData) this.icon$.skin = imgData;
            else if (Object.keys(imgData).length)
                for (const key in imgData)
                    if (imgData.hasOwnProperty(key)) {
                        const elements = imgData[key];
                        if ("gifData" === key && elements && Object.keys(elements).length) {
                            let gifIcon = new PgGifIcon$({
                                width: 150,
                                height: 150
                            });
                            this.gif = this.icon$.addChild(gifIcon), singleData = pgdk$.arrayRandom(elements),
                                this.gif.setImage(singleData);
                            break;
                        }
                        if ("array" === key && elements && Object.keys(elements).length) {
                            singleData = pgdk$.arrayRandom(elements), this.icon$.skin = singleData.path;
                            break;
                        }
                    }
        }
    }
    class PgAutoScroll$ extends Laya.Script {
        constructor() {
            super(), this.forward = !0, this._lastStartIndex = -1, this.step = 1;
        }
        onStart() {
            this.scrolling = !1, Laya.timer.loop(2e3, this, this.scrollToNext), this.owner.scrollBar.on(Laya.Event.END, this, this.onScrollEnd);
        }
        scrollToNext() {
            if (this.scrolling) return;
            let startIndex = this.owner.startIndex;
            this._lastStartIndex === startIndex && (this.forward = !this.forward), this._lastStartIndex = startIndex,
                startIndex += this.forward ? this.step : -this.step, this.owner.tweenTo(startIndex, 200),
                this.forward || 0 !== startIndex || (this.forward = !0);
        }
        onScrollEnd() {
            this.scrolling = !1;
        }
        onMouseDown(e) {
            this.scrolling = !0;
        }
        onMouseUp(e) {
            this.scrolling = !1;
        }
    }
    class PgViewList$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = null, this.bgSkin$ = "#000000", this.iconBg$ = null, this.iconMask$ = null,
                this.showTitle$ = !0, this.titleBg$ = null, this.titleColor$ = "#FFFFFF", this.margin$ = 5,
                this.spaceX$ = 5, this.isInCell$ = !1, this.dataType$ = "carousel", this.width = 720,
                this.height = 175, this.cellWidth = 140, this.cellHeight = 165, this.cellCnt = 0,
                this.iconSize = 0, this.iconOrder = 0, this.iconOffsetX = 0, this.iconOffsetY = 0,
                this.hScrollBarSkin$ = "common/hscroll.png", this.titleHeight$ = 25, this.tittleFonsize$ = 25;
        }
        onStart() {
            this.initUI$(), this.list$.addComponent(PgAutoScroll$), this.executeWhenSdkReady$(this, this.createAds$.bind(this));
        }
        initUI$() {
            this.cellHeight = this.owner.height - 2 * this.margin$, this.cellWidth = this.showTitle$ ? this.cellHeight - this.titleHeight$ : this.cellHeight,
                this.owner.bgColor = "", this.owner.alpha = 1, this.titleBgList$ = this.titleBg$ && this.titleBg$.split(","),
                this.ui$ = new Laya.Box(), this.ui$.width = this.owner.width, this.ui$.height = this.owner.height,
                this.setWidget$(this.ui$, 0, 0, 0, 0), this.owner.addChild(this.ui$), this.createBg$(),
                this.createList$();
        }
        getTitleBg$() {
            return this.titleBgList$ ? this.titleBgList$[Math.floor(Math.random() * this.titleBgList$.length)] : void 0;
        }
        createBg$() {
            if (!this.bgSkin$ || "0" == this.bgSkin$) return;
            let bg = this.createBgNode$(this.ui$, this.bgSkin$, this.width$, this.height$);
            this.setWidget$(bg, 0, 0, 0, 0);
        }
        createList$() {
            if (this.list$ = new Laya.List(), this.list$.repeatX = 10, this.list$.repeatY = 1,
                this.list$.spaceX = this.spaceX$, this.list$.hScrollBarSkin = this.hScrollBarSkin$ || "common/hscroll.png",
                this.list$.scrollBar.visible = !1, this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$),
                this.setWidget$(this.list$, this.margin$, this.margin$, this.margin$, this.margin$),
                this.ui$.addChild(this.list$), this.list$.itemRender = {
                    type: "Image",
                    props: {
                        width: this.cellWidth,
                        height: this.cellHeight
                    }
                }, this.isInCell$) {
                let w = (Laya.stage.width - 25) / 5;
                this.list$.itemRender = {
                    type: "Image",
                    props: {
                        width: w,
                        height: 135
                    }
                };
            }
        }
        renderHandler$(cell, index) {
            this.renderIconBg$(cell, index), this.renderIcon$(cell, index), this.renderTitle$(cell, index),
                this.registerAdClickEvent$(cell, this.viewName$);
        }
        renderIconBg$(cell, index) {
            this.iconBg$ && (this.iconBgNode$ = this.createBgNode$(cell, this.iconBg$, this.cellWidth, this.cellHeight),
                this.iconBgNode$.zOrder = -1, this.setWidget$(this.iconBgNode$, 0, 0, 0, 0));
        }
        renderIcon$(cell, index) {
            let icon = cell.getChildByName("GameIcon");
            if (!icon) {
                if ((icon = cell.addChild(new Laya.Image())).name = "GameIcon", this.iconBgNode$) {
                    let padding = 5;
                    if (icon.width = icon.height = this.cellWidth - 2 * padding, icon.left = padding,
                        icon.top = padding, this.isInCell$) {
                        let w = (Laya.stage.width - 25) / 5;
                        icon.bottom = 15, icon.top = 10, icon.left = icon.right = .5 * (w - Math.min(115, w - 20)),
                            icon.zOrder = -2;
                    }
                } else icon.width = icon.height = this.cellWidth;
                if (icon.left = this.iconOffsetX || icon.left, icon.top = this.iconOffsetY || icon.top,
                    icon.zOrder = this.iconOrder || icon.zOrder, icon.width = this.iconSize || icon.width,
                    icon.height = this.iconSize || icon.height, this.iconMask$) {
                    let mask = new Laya.Image();
                    mask.width = icon.width, mask.height = icon.height, mask.skin = this.iconMask$,
                        icon.mask = mask;
                }
            }
            this.setIcon$(cell, icon);
        }
        renderTitle$(cell, index) {
            if (!this.showTitle$) return;
            let titleBg = cell.getChildByName("GameTitleBg");
            titleBg || ((titleBg = cell.addChild(new Laya.Image())).bottom = 0, titleBg.name = "GameTitleBg",
                titleBg.width = this.cellWidth, titleBg.height = 25, titleBg.skin = this.getTitleBg$());
            let title = titleBg.getChildByName("GameTitle");
            title || ((title = this.createLabel$(titleBg, this.tittleFonsize$, cell.dataSource.title.substring(0, 6), this.titleColor$)).name = "GameTitle",
                title.anchorX = title.anchorY = .5, title.centerX = 0, this.setWidget$(title, null, 0, null, null));
        }
        createAds$() {
            this.list$.array = pgdk$.unsortedAds$(this.dataType$, this.cellCnt);
        }
        setIcon$(cell, icon) {
            let singleData, imgData = cell.dataSource.img;
            if ("string" == typeof imgData) icon.skin = imgData;
            else if (Object.keys(imgData).length)
                for (const key in imgData)
                    if (imgData.hasOwnProperty(key)) {
                        const elements = imgData[key];
                        if ("gifData" === key && elements && Object.keys(elements).length) {
                            let gifIcon = new PgGifIcon$({
                                    width: 150,
                                    height: 150
                                }),
                                gif = icon.addChild(gifIcon);
                            singleData = pgdk$.arrayRandom(elements), gif.setImage(singleData);
                            break;
                        }
                        if ("array" === key && elements && Object.keys(elements).length) {
                            singleData = pgdk$.arrayRandom(elements), icon.skin = singleData.path;
                            break;
                        }
                    }
        }
    }
    class PgViewGrid$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = null, this.bgSkin$ = null, this.iconMask$ = null, this.iconBg$ = null,
                this.titleBg$ = null, this.titleColor$ = "#FFFFFF", this.columns$ = 3, this.rows$ = 0,
                this.spacingX$ = 10, this.spacingY$ = 10, this.dataType$ = "gameover";
        }
        onStart() {
            this.initUI$(), this.executeWhenSdkReady$(this, this.createAds$.bind(this));
        }
        initUI$() {
            this.owner.bgColor = "", this.owner.alpha = 1, this.ui$ = this.owner.addChild(new Laya.Box()),
                this.ui$.viewName$ = this.viewName$;
            let width = this.ui$.width = this.owner.width,
                height = this.ui$.height = this.owner.height;
            if (this.setWidget$(this.ui$, 0, 0, 0, 0), "number" == typeof top && "number" == typeof bottom && (height = Laya.stage.height - bottom - top),
                "number" == typeof left && "number" == typeof right && (width = Laya.stage.width - right - left),
                this.cellWidth = Math.floor((width - 10 - this.spacingX$ * (this.columns$ - 1)) / this.columns$),
                this.cellHeight = Math.floor(1.2 * this.cellWidth), this.rows$) {
                let maxHeight = (this.cellHeight + this.spacingY$) * this.rows$ - this.spacingY$ + 10;
                height > maxHeight && (height = maxHeight, this.ui$.bottom = NaN, this.ui$.height = height);
            }
            this.width$ = width, this.height$ = height, this.createBg$(), this.createList$(),
                this.titleBgList$ = this.titleBg$ ? this.titleBg$.split(",") : void 0, this.list$.addComponent(PgAutoScroll$).step = 3;
        }
        getTitleBg$(index) {
            return this.titleBgList$ ? this.titleBgList$[Math.floor(Math.random() * this.titleBgList$.length)] : void 0;
        }
        createBg$() {
            if (!this.bgSkin$) return;
            let bg;
            if (this.bgSkin$.startWith$("#"))(bg = this.ui$.addChild(new Laya.Box())).width = this.width$,
                bg.height = this.height$, bg.bgColor = this.bgSkin$, bg.alpha = .7;
            else {
                let values = this.bgSkin$.split(";");
                (bg = this.ui$.addChild(new Laya.Image())).width = this.width$, bg.height = this.height$,
                    bg.skin = values[0], values[1] && (bg.sizeGrid = values[1]);
            }
            this.setWidget$(bg, 0, 0, 0, 0);
        }
        createList$() {
            this.list$ = this.ui$.addChild(this.createBaseList$(!1)), this.list$.repeatX = this.columns$,
                this.list$.repeatY = Math.floor(this.height$ / this.cellHeight) + 1, this.list$.name = "List",
                this.list$.spaceX = this.spacingX$, this.list$.spaceY = this.spacingY$, this.list$.anchorX = this.list$.anchorY = .5,
                this.list$.width = this.width$, this.list$.height = this.height$, this.setWidget$(this.list$, 5, 5, 5, 5),
                this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$), this.list$.itemRender = {
                    type: "Image",
                    props: {
                        width: this.cellWidth,
                        height: this.cellHeight
                    }
                }, this.createAds$();
        }
        renderHandler$(cell, index) {
            if (0 === cell.numChildren) {
                if (this.iconBg$) {
                    let iconBg;
                    if (this.iconBg$.startWith$("#"))(iconBg = cell.addChild(new Laya.Box())).bgColor = this.iconBg$;
                    else {
                        iconBg = cell.addChild(new Laya.Image());
                        let skin = this.iconBg$.split(";");
                        iconBg.skin = skin[0], iconBg.sizeGrid = skin[1];
                    }
                    iconBg.width = this.cellWidth, iconBg.height = this.cellHeight;
                }
                let padding = 5;
                if (cell.icon$ = cell.addChild(new Laya.Image()), cell.icon$.name = "GameIcon",
                    cell.icon$.width = cell.icon$.height = this.iconBg$ ? this.cellWidth - 2 * padding : this.cellWidth,
                    cell.icon$.top = this.iconBg$ ? padding : 0, cell.icon$.centerX = 0, this.setIcon$(cell),
                    this.iconMask$) {
                    let mask = new Laya.Image();
                    mask.width = cell.icon$.width, mask.height = cell.icon$.height, mask.skin = this.iconMask$,
                        cell.icon$.mask = mask;
                }
                this.titleBg$ && (cell.titleBg$ = cell.addChild(new Laya.Image()), cell.titleBg$.bottom = 0,
                    cell.titleBg$.left = cell.titleBg$.right = 0, cell.titleBg$.height = this.cellHeight - this.cellWidth,
                    cell.titleBg$.skin = this.getTitleBg$(index));
                let fontSize = this.cellHeight - this.cellWidth - 10;
                cell.title$ = this.createLabel$(cell, fontSize, cell.dataSource.title.substring(0, 6), this.titleColor$),
                    cell.title$.anchorX = cell.title$.anchorY = .5, cell.title$.centerX = 0, this.setWidget$(cell.title$, null, 5, null, null);
            }
            this.setIcon$(cell), cell.title$.text = cell.dataSource.title.substring(0, 6), this.registerAdClickEvent$(cell, this.viewName$);
        }
        createAds$() {
            this.list$.array = window.pgdk$ && pgdk$.unsortedAds$(this.dataType$, this.rows$ * this.columns$);
        }
        setIcon$(cell) {
            let singleData, imgData = cell.dataSource.img;
            if ("string" == typeof imgData) cell.icon$.skin = imgData;
            else if (Object.keys(imgData).length)
                for (const key in imgData)
                    if (imgData.hasOwnProperty(key)) {
                        const elements = imgData[key];
                        if ("gifData" === key && elements && Object.keys(elements).length) {
                            let gifIcon = new PgGifIcon$({
                                    width: 150,
                                    height: 150
                                }),
                                gif = cell.icon$.addChild(gifIcon);
                            singleData = pgdk$.arrayRandom(elements), gif.setImage(singleData);
                            break;
                        }
                        if ("array" === key && elements && Object.keys(elements).length) {
                            singleData = pgdk$.arrayRandom(elements), cell.icon$.skin = singleData.path;
                            break;
                        }
                    }
        }
    }
    class PgViewIndex$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = null, this.dialogBgSkin$ = null, this.width$ = 500, this.height$ = 700,
                this.iconMask$ = null, this.titleBg$ = null, this.titleColor$ = "#FFFFFF", this.hScrollBarSkin$ = null,
                this.isCreateCloseLabel$ = !1, this.listMargin$ = 2;
        }
        onStart() {
            this.owner.on(Laya.Event.CLICK, this, this.showUI$), Laya.isShowViewIndex$ ? this.showUI$() : Laya.isShowViewIndex$ = !0;
        }
        showUI$() {
            this.ui$ ? Laya.stage.addChild(this.ui$) : this.initUI$();
        }
        initUI$() {
            this.titleBgList$ = this.titleBg$ && this.titleBg$.split(","), this.ui$ = new Laya.Box(),
                this.ui$.zOrder = 999999999, this.ui$.name = "PgViewIndex", this.setWidget$(this.ui$, 0, 0, 0, 0),
                Laya.stage.addChild(this.ui$), this.createBg$(), this.createDialogBg$(), this.createTitle$(),
                this.createCloseBtn$(), this.createGrid$(), this.createCloseLabel$();
        }
        getTitleBg$() {
            return this.titleBgList$ ? this.titleBgList$[Math.floor(Math.random() * this.titleBgList$.length)] : void 0;
        }
        createBg$() {
            let bg = new Laya.Box();
            bg.name = "ImageBg", bg.bgColor = "#000000", this.setWidget$(bg, 0, 0, 0, 0), bg.alpha = .7,
                this.ui$.addChild(bg);
        }
        createTitle$() {
            let title = new Laya.Image();
            title.skin = "sdk/index-hot.png", title.centerX = 0, title.top = 20, this.dialogBg$.addChild(title);
        }
        createCloseBtn$() {
            let btn = new Laya.Image();
            btn.skin = "sdk/index-close.png", btn.top = 20, btn.right = 20, btn.on(Laya.Event.CLICK, this, this.doClose$),
                this.dialogBg$.addChild(btn);
        }
        doClose$() {
            this.ui$.removeSelf();
        }
        createDialogBg$() {
            this.dialogBg$ = new Laya.Image(), this.dialogBg$.width = this.width$, this.dialogBg$.height = this.height$,
                this.dialogBg$.centerX = 0, this.dialogBg$.centerY = 0;
            let values = this.dialogBgSkin$.split(";");
            this.dialogBg$.skin = values[0], values[1] && (this.dialogBg$.sizeGrid = values[1]),
                this.ui$.addChild(this.dialogBg$);
        }
        createGrid$() {
            this.createGridBg$(), this.grid$ = new Laya.Box(), this.grid$.width = this.width$ - 2 * this.listMargin$,
                this.grid$.height = this.height$ - 80, this.grid$.centerX = 0, this.grid$.bottom = this.listMargin$,
                this.dialogBg$.addChild(this.grid$), this.comp = this.grid$.addComponent(PgViewGrid$),
                this.comp.dataType$ = "slider", this.comp.rows$ = 6, this.comp.iconMask$ = this.iconMask$,
                this.comp.titleBg$ = this.titleBg$, this.comp.titleColor$ = this.titleColor$;
        }
        createGridBg$() {
            this.grid$ = new Laya.Image(), this.grid$.skin = "sdk/image_icon_bg.png", this.grid$.sizeGrid = "20,20,20,20",
                this.grid$.width = this.width$ - 2 * this.listMargin$, this.grid$.height = this.height$ - 80,
                this.grid$.centerX = 0, this.grid$.bottom = this.listMargin$, this.dialogBg$.addChild(this.grid$);
        }
        createCloseLabel$() {
            this.isCreateCloseLabel$ ? (this.label_close$ || (this.label_close$ = this.createLabel$(this.dialogBg$, 50, "关闭", "#c0c0c0"),
                    this.label_close$.centerX = 0, this.label_close$.bottom = -80, this.label_close$.on(Laya.Event.CLICK, this, this.doClose$)),
                this.label_close$.visible = !0) : this.label_close$ && (this.label_close$.visible = !1);
        }
    }
    class PgGameCenter$ extends PgViewBase {
        static create(closeCallback$) {
            if (pgdk$.hideBanner$(), Laya.gameCenterUI$) return Laya.stage.addChild(Laya.gameCenterUI$),
                Laya.gameCenterUI$.getComponent(PgGameCenter$).closeCallback$ = closeCallback$,
                Laya.gameCenterUI$;
            let gameCenterUI = new Laya.Box();
            gameCenterUI.bgColor = "#000000", gameCenterUI.name = "GameCenterUI", gameCenterUI.viewName$ = "游戏中心",
                gameCenterUI.zOrder = 999999999, gameCenterUI.width = 720, gameCenterUI.height = 1280,
                Laya.stage.addChild(gameCenterUI), Laya.gameCenterUI$ = gameCenterUI;
            let comp = gameCenterUI.addComponent(PgGameCenter$);
            comp.setWidget$(gameCenterUI, 0, 0, 0, 0), comp.closeCallback$ = closeCallback$;
        }
        constructor() {
            super(), this.titleBg$ = "sdk/1.png,sdk/2.png,sdk/3.png,sdk/4.png,sdk/5.png,sdk/6.png,sdk/7.png,sdk/8.png,sdk/9.png",
                this.closeCallback$ = void 0;
        }
        onStart() {
            this.initUI$();
        }
        onEnable() {
            this.reset$();
        }
        reset$() {
            this.canTrick$ = pgdk$.isGameCenterViewDelay$(), this.hasClick$ = !1, this.hasShowBanner$ = !1;
        }
        initUI$() {
            this.reset$(), this.createListAds$(), this.createGridAds$(), this.createBtnContinue$(),
                this.createBannerBox$(), this.owner.addComponent(PgTopView$).boxBanner$ = this.boxBanner$;
        }
        createBannerBox$() {
            this.boxBanner$ = this.owner.addChild(new Laya.Box()), this.boxBanner$.zOrder = 1,
                this.boxBanner$.left = this.boxBanner$.right = 0, this.boxBanner$.bottom = 10, this.boxBanner$.height = 220,
                this.boxBanner$.bgColor = "#FFFFFF";
        }
        createListAds$() {
            this.list1$ = this.owner.addChild(new Laya.Box()), this.list1$.top = 100, this.list1$.width = 680,
                this.list1$.height = 180, this.list1$.centerX = 0;
            let comp = this.list1$.addComponent(PgViewList$);
            comp.dataType$ = "dialog", comp.bgSkin$ = "", comp.titleColor$ = "#ffffff", comp.tittleFonsize$ = 18;
        }
        createGridAds$() {
            this.list$ = this.owner.addChild(new Laya.Box()), this.list$.width = 680, this.list$.top = 300,
                this.list$.bottom = 20, this.list$.centerX = 0;
            let comp = this.list$.addComponent(PgViewGrid$);
            comp.dataType$ = "dialog", comp.iconBg$ = "sdk/image_icon_bg.png;20,20,20,20", comp.iconMask$ = "sdk/image_icon_bg.png",
                comp.titleBg$ = this.titleBg$, comp.spacingY$ = 20, comp.rows$ = 6;
        }
        createBtnContinue$() {
            let btn = this.owner.addChild(new Laya.Image());
            btn.skin = "sdk/btn-continue-new.png", btn.centerX = 0, btn.bottom = 115, btn.scaleX = btn.scaleY = .9,
                btn.on(Laya.Event.CLICK, this, function() {
                    if (this.canTrick$)
                        if (this.hasClick$) {
                            if (!this.hasShowBanner$) return;
                            this._onClose$();
                        } else this.hasClick$ = !0, Laya.timer.once(1e3, this, this._showBanner$);
                    else this._onClose$();
                }.bind(this));
        }
        _onClose$() {
            this.owner.removeSelf(), this.closeCallback$ && (this.closeCallback$(), this.closeCallback$ = void 0);
        }
        _showBanner$() {
            this.owner.getComponent(PgTopView$).restoreBanner$(), this.hasShowBanner$ = !0,
                Laya.timer.once(1e3, this, this._hideBanner$);
        }
        _hideBanner$() {
            pgdk$.hideBanner$();
        }
        createBanner$() {
            this.bannerPos$ = this.owner.addChild(new Laya.Box()), this.bannerPos$.width = 700,
                this.bannerPos$.height = 220, this.bannerPos$.centerX = 0, this.bannerPos$.bottom = 60,
                this.showBanner$();
        }
    }
    Laya.createGameCenter = PgGameCenter$.create;
    class Scheduler$ extends Laya.Script {
        constructor() {
            super();
        }
        static getInstance$() {
            return null == Scheduler$.instance && (Scheduler$.instance = new Scheduler$()),
                Scheduler$.instance.init$();
        }
        init$() {
            console.log("Init Scheduler Instance...");
            var _scheduledInfos = {};
            return {
                schedule: function(key, cb, useFrame, interval, repeat) {
                    if (!this._checkKey(key) || !this._checkCallback(cb)) return !1;
                    if (_scheduledInfos[key]) return !1;
                    null == interval && (interval = useFrame ? 1 : 0), null == repeat && (repeat = Number.MAX_VALUE);
                    let scheduleCb = 0 === repeat ? cb : function(dt) {
                        let _info = _scheduledInfos[key];
                        if (_info)
                            if (_info.invokeTimes += 1, _info.invokeTimes >= repeat) {
                                let _cb = _info.cb;
                                this.unschedule(key), _cb();
                            } else _info.cb(dt);
                    }.bind(this);
                    return 0 === repeat ? useFrame ? Laya.timer.frameOnce(interval, this, scheduleCb) : Laya.timer.once(interval, this, scheduleCb) : (_scheduledInfos[key] = {
                        invokeTimes: 0,
                        cb: cb,
                        scheduleCb: scheduleCb
                    }, useFrame ? Laya.timer.frameLoop(interval, this, scheduleCb) : Laya.timer.loop(interval, this, scheduleCb)), !0;
                },
                unschedule: function(key) {
                    return !!this._checkKey(key) && (!!_scheduledInfos[key] && (Laya.timer.clear(this, _scheduledInfos[key].scheduleCb),
                        delete _scheduledInfos[key], !0));
                },
                isScheduled: function(key) {
                    return !!this._checkKey(key) && !!_scheduledInfos[key];
                },
                unscheduleAll: function() {
                    for (let key in _scheduledInfos) Laya.timer.clear(this, _scheduledInfos[key].cb);
                    _scheduledInfos = {};
                },
                _checkKey: function(key) {
                    return "string" == typeof key && "" !== key;
                },
                _checkCallback: function(cb) {
                    return "function" == typeof cb;
                }
            };
        }
    }
    Scheduler$.instance = void 0;
    class Pgdk$ extends Laya.Script {
        constructor() {
            super(), window.pgdk$ = this, this.app_version = 1, this._banners$ = [], this.MIN_BANNER_WIDTH$ = 300,
                this.MIN_BANNER_HEIGHT$ = 122, this.schedule$ = Scheduler$.getInstance$();
        }
        onStart() {
            console.log(this.dataHandler$), this._getParamData$();
        }
        unsortedAds$(type, cnt) {
            let ads = [];
            if (pgdk$.isSdkReady$) {
                let temp = [],
                    _ads = pgdk$.getAds$(type);
                for (let i = 0; i < _ads.length; i++) temp.push(_ads[i]);
                for (; temp.length > 0;) {
                    let index = Math.floor(Math.random() * temp.length);
                    ads.push(temp.removeAt$(index));
                }
                let adCnt = ads.length;
                if (adCnt < cnt) {
                    let j = cnt - ads.length;
                    for (; --j > -1;) ads.push(ads[Math.floor(adCnt * Math.random())]);
                }
            }
            return ads;
        }
        getAds$(type) {
            return this.dataHandler$.getAds$(type);
        }
        getRandomAd$(type) {
            if (this.isSdkReady$) return this._randomAdCache$ || (this._randomAdCache$ = [],
                this._randomAdCache$.pushAll$(this.getAds$(type))), this._randomAdCache$ && this._randomAdCache$.length > 0 && this._randomAdCache$.removeAt$(Math.floor(Math.random() * this._randomAdCache$.length));
        }
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        generateString(count) {
            let str = "";
            if ("number" == typeof count)
                for (let i = 0; i < count; i++) Math.random() < .5 ? str += String.fromCharCode(this.randomInt("0".charCodeAt(), "0".charCodeAt() + 9)) : str += String.fromCharCode(this.randomInt("a".charCodeAt(), "a".charCodeAt() + 25));
            return str;
        }
        arrayRandom(array) {
            return array[this.randomInt(0, array.length)];
        }
        recoverRandomAd$(ad) {
            ad && this.isSdkReady$ && -1 === this._randomAdCache$.indexOf(ad) && this._randomAdCache$.push(ad);
        }
        isIOS$() {
            if (this.platformHandler$ && this.platformHandler$.isIOS$) return this.platformHandler$.isIOS$();
        }
        shakePhone$(isLong) {
            // if (!(Date.now() - 100 < this.lastShakeT)) if (this.lastShakeT = Date.now(), window.wx) isLong ? wx.vibrateLong() : wx.vibrateShort(); else {
            //     if (!window.navigator.vibrate) return;
            //     window.navigator.vibrate(500);
            // }
        }
        _getParamData$() {
            let xhr = new Laya.HttpRequest();
            this.platformHandler$ && (this.appId$ = this.platformHandler$.appId$), xhr.once(Laya.Event.COMPLETE, this, this._reciveParamData$),
                xhr.send("https://game.littleboy.net/api/gameparams.jsp?appid=" + this.appId$ + "&version=" + this.app_version + "&t=" + Date.now(), null, "POST", "json", ["Content-Type", "application/x-www-form-urlencoded;charset=utf-8"]);
        }
        _reciveParamData$(rsp) {
            this.cfg$ = rsp.data, this.isParamGot$ = !0;
        }
        canTrick$() {
            switch (this.channel$) {
                case "zs":
                    if (this.dataHandler$ && this.dataHandler$.cfg$) {
                        if (1 !== this.dataHandler$.cfg$.zs_switch) return !1;
                        if (1 !== this.dataHandler$.cfg$.zs_banner_city) return !1;
                    }

                case "qy":
                    return !0;

                default:
                    return this.cfg$ && this.cfg$.cheat;
            }
        }
        getPgCfg$(type) {
            try {
                return this.cfg$[type];
            } catch (e) {
                return;
            }
        }
        isGameCenterViewDelay$() {
            return this.canTrick$() && this.getPgCfg$("gameCenterViewDelayRate") > Math.random();
        }
        isResultTrick$() {
            return this.canTrick$() && this.getPgCfg$("isResultTrick") > Math.random();
        }
        isShowExit$() {
            return this.canTrick$() && this.getPgCfg$("showExitRate") > Math.random();
        }
        getChannleConfig$() {
            if (this.dataHandler$ && this.dataHandler$.getConfig$) return this.dataHandler$.getConfig$();
        }
        showBanner$(rect, widget) {
            this.platformHandler$ && this.platformHandler$.showBanner$(rect, widget);
        }
        hideBanner$() {
            this.platformHandler$ && this.platformHandler$.hideBanner$();
        }
        _getUis$() {
            return this._uis$ || (this._uis$ = []), this._uis$;
        }
        onUIOpen$(ui) {
            -1 === this._getUis$().indexOf(ui) && this._getUis$().push(ui);
        }
        onUIClose$(ui) {
            -1 !== this._getUis$().indexOf(ui) && (this._getUis$().remove$(ui), this.restoreBanner$());
        }
        restoreBanner$() {
            let lastUI = this._getUis$()[this._getUis$().length - 1];
            lastUI && lastUI.restoreBanner$ && lastUI.restoreBanner$();
        }
        showInterstitialAd$() {
            this.platformHandler$ && this.platformHandler$.showInterstitialAd$();
        }
        showVideoAd$(callback) {
            this.platformHandler$ && this.platformHandler$.showVideoAd$ && this.platformHandler$ && this.platformHandler$.showVideoAd$(callback);
        }
        navigateToMiniProgram$(data, viewName, success, cancel) {
            this.platformHandler$ && this.platformHandler$.navigate2Mini$ && this.platformHandler$.navigate2Mini$(data, viewName, success, cancel);
        }
        showToast$(tipStr) {
            this.platformHandler$ && this.platformHandler$.showToast$ && this.platformHandler$.showToast$(tipStr);
        }
        getUserId$() {
            this.platformHandler$ && this.platformHandler$.getUerId$ && this.platformHandler$ && this.platformHandler$.getUerId$();
        }
        showAppBox$(onClose) {
            this.platformHandler$ && this.platformHandler$.showAppBox$ ? this.platformHandler$.showAppBox$(onClose) : onClose && onClose();
        }
        getNativeAdData$() {
            if (this.platformHandler$ && this.platformHandler$.getNativeAdData$) return this.platformHandler$ && this.platformHandler$.getNativeAdData$();
        }
        nativeClick$(adId) {
            this.platformHandler$ && this.platformHandler$.nativeClick$ && this.platformHandler$ && this.platformHandler$.nativeClick$(adId);
        }
        reportMonitor$() {
            this.platformHandler$ && this.platformHandler$.reportMonitor$ && this.platformHandler$ && this.platformHandler$.reportMonitor$();
        }
        startRecord$(callback, time, errFun) {
            this.platformHandler$ && this.platformHandler$.recorderStart$ && this.platformHandler$.recorderStart$(callback, time, errFun);
        }
        stopRecord$(callback) {
            this.platformHandler$ && this.platformHandler$.recorderStop$ && this.platformHandler$.recorderStop$(callback);
        }
        shareRecord$(success, fail) {
            this.platformHandler$ && this.platformHandler$.shareRecordVideo$ && this.platformHandler$.shareRecordVideo$(success, fail);
        }
        showMoreGameBtn$(type) {
            if (this.platformHandler$ && this.platformHandler$.createMoregameBtn$) {
                let adDataArr = this.unsortedAds$(type);
                if (0 == adDataArr.length) return void Laya.timer.once(2e3, this, function() {
                    this.showMoreGameBtn$(type);
                });
                this.platformHandler$.createMoregameBtn$(adDataArr[0], {
                    left: 0,
                    top: Laya.Browser.clientHeight - 262,
                    width: 70,
                    height: 70
                });
            }
        }
        hideMoreGameBtn$() {
            this.platformHandler$ && this.platformHandler$.hideMoreGameBtn$ && this.platformHandler$.hideMoreGameBtn$();
        }
        isNewUser$(isNew) {
            this.dataHandler$ && this.dataHandler$.isNewUser$ && this.dataHandler$.isNewUser$(isNew);
        }
        reportData$(type, ...args) {
            this.dataHandler$ && this.dataHandler$.reportData$ && this.dataHandler$.reportData$(type, args);
        }
        getNativeConfig$() {
            this.dataHandler$ && this.dataHandler$.getNativeConfig$ && this.dataHandler$.getNativeConfig$();
        }
    }
    class BattleAwardUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "奖励界面";
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.coinNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_coinNum"),

                this.gameList = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "gameList"),
                this.btn_continue$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_continue"),
                this.img_awardBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_awardBg"),
                this.label_award$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_award"),
                this.BoxBanner$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "BoxBanner"),
                this.img_awardIcon$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_awardIcon"),
                this.list_good_cur = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "list_good_cur"),
                this.box_reward$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "box_reward"),
                this.box_reward_icon$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "box_reward_icon"),
                this.label_reward_close$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_reward_close"),
                this.list_good_cur.renderHandler = new Laya.Handler(this, this.renderGoodItem),
                this.list_good_cur.array = this.rewardCupDatas$, this.list_good_cur.width = this.rewardNeedCupNum$ * this.list_good_cur.cells[0].width + (this.rewardNeedCupNum$ - 1) * this.list_good_cur.spaceX,
                // this.img_awardBg$.centerX = .5 * this.list_good_cur.width + 80, 
                this.moni_GameKey_torBtns(),
                this.initUI$();
        }
        init_GameKey_Data() {
            this.userDataMg$ = Data_GameKey_Manager.getInstance$().userData$,
                this.sucCupNum = Data_GameKey_Manager.getInstance$().userData$.successCupNum$;
            let mission = this.userDataMg$.mission$,
                missionProgress = this.userDataMg$.missionProgress$,
                leftMission = mission > 1 && 1 == missionProgress ? mission - 1 : mission,
                level = Math.ceil(Math.sqrt(2 * leftMission + .25) - .5);
            this.rewardNeedCupNum$ = Math.min(3 * level, 12), this.rewardCupDatas$ = [];
            let i = this.rewardNeedCupNum$;
            for (; --i > -1;) this.rewardCupDatas$.push(null);
            this.selectAward$();
        }
        renderGoodItem(cell, index) {
            if (cell.inited || (cell.img_empty = Util_GameKey_s.getC_GameKey_hildDeep(cell, "img_empty"),
                    cell.img_full = Util_GameKey_s.getC_GameKey_hildDeep(cell, "img_full"), cell.inited = !0),
                index <= this.sucCupNum - 1) {
                if (cell.img_full.visible = !0, index == this.sucCupNum - 1) {
                    cell.img_full.scaleY = 1, new Laya.Tween().from(cell.img_full, {
                        scaleY: 0
                    }, 2e3, Laya.Ease.quintInOut);
                }
            } else cell.img_full.visible = !1;
        }
        moni_GameKey_torBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_continue$, this, "onClickContinue$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.label_reward_close$, this, "onClickCloseRewardLabel$");
        }
        initUI$() {
            let num = Data_GameKey_Manager.getInstance$().userData$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num), this.owner.ani2 && this.owner.ani2.play(0, !0),
                this.setAwardItem$(), this.askPlayBannerMoveAnim$();
            this.gameList.renderHandler = new Laya.Handler(this, this.showADPanel);
            this.gameList.array = platform.getInstance().getForgames()
        }

        showADPanel(e) {
            e.offAll(Laya.Event.MOUSE_DOWN);
            e.on(Laya.Event.MOUSE_DOWN, e, () => {
                platform.getInstance().navigate("GAME", "MORE");
            });
        }
        selectAward$() {
            this.curAwardHandId$ = void 0, this.isHaveAward = !0;
            let haveHands = this.userDataMg$.handIds,
                awardHands = this.userDataMg$.awardHandIdArr$;
            for (let i = 0; i < awardHands.length; i++)
                if (!haveHands.includes(awardHands[i])) {
                    this.curAwardHandId$ = awardHands[i];
                    break;
                }
            this.curAwardHandId$ || (this.isHaveAward = !1);
        }
        setAwardItem$() {
            if (this.isHaveAward) {
                this.label_award$.text = "REWARD";
                let imgId = D.handSkinBasic[this.curAwardHandId$].handSkinImgId;
                if (this.img_awardIcon$.skin = Util_GameKey_s.getSkinPathById(imgId), this.sucCupNum >= this.rewardNeedCupNum$) {
                    this.label_award$.text = "RECEIVED", new Laya.Tween().from(this.label_award$, {
                            fontSize: 10
                        }, 2e3, Laya.Ease.quintInOut), this.userDataMg$.addHandSkin$(this.curAwardHandId$),
                        this.userDataMg$.setSuccessCupNum$(0), this.box_reward_icon$.skin = Util_GameKey_s.getSkinPathById(imgId),
                        this.box_reward$.visible = !0, this.owner.ani3 && this.owner.ani3.play(0, !0);
                }
            } else this.img_awardBg$.visible = !1;
        }
        askPlayBannerMoveAnim$() {}
        playUpAnim$() {}
        refreshUpAnim$() {}
        showBanner$() {
            // pgdk$.restoreBanner$();
        }
        onClickContinue$() {
            this.destroy(),
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.REST_FIGHT),
                UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUI);
        }
        onClickCloseRewardLabel$() {
            this.box_reward$.visible = !1
        }
        onUpdate() {
            this.refreshUpAnim$();
        }
    }
    BattleAwardUI$.url = "Prefab/Battle/BattleAwardWindow.json", BattleAwardUI$.className = "BattleAwardUI$",
        BattleAwardUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Audi_GameKey_oManager {
        constructor() {
            this.inited = !1, this.initedCB = void 0, this.soun_GameKey_dDic = {}, this.refr_GameKey_eshMusicVolume(),
                this.refr_GameKey_eshSoundVolume(), Laya.audioManager = this;
        }
        static getInstance$() {
            return null == Audi_GameKey_oManager.instance && (Audi_GameKey_oManager.instance = new Audi_GameKey_oManager()),
                Audi_GameKey_oManager.instance;
        }
        init(callback) {
            if (this.initedCB = callback, this.inited) this.initedCB && this.initedCB();
            else {
                var resArray = [];
                for (var key in D.musicBasic) {
                    var config = D.musicBasic[key];
                    2 == config.type && resArray.push(config.file);
                }
                if (Laya.Browser.onMiniGame)
                    if (0 == resArray.length) this.init_GameKey_Complete();
                    else {
                        let config, soundChanel;
                        for (let key in D.musicBasic) 2 == (config = D.musicBasic[key]).type && (soundChanel = this.play_GameKey_Sound(Number(key), !1, !0)) && (soundChanel.volume = 0);
                        this.init_GameKey_Complete();
                    }
                else this.init_GameKey_Complete();
            }
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        setS_GameKey_oundSwitch(isSound) {
            Data_GameKey_Manager.getInstance$().settingData$.setS_GameKey_oundSwitch(isSound);
        }
        getS_GameKey_oundSwitch() {
            return Data_GameKey_Manager.getInstance$().settingData$.getS_GameKey_oundSwitch();
        }
        init_GameKey_Complete() {
            this.inited = !0, this.initedCB && this.initedCB();
        }
        play_GameKey_Music(musicId) {
            Laya.stage.isVisibility ? this._play_GameKey_Music(musicId) : Laya.timer.once(1e3, this, this.play_GameKey_Music);
        }
        _play_GameKey_Music(musicId, force) {
            if (this.getS_GameKey_oundSwitch()) {
                this.playMusicId = musicId;
                var file = D.musicBasic[musicId].file;
                this._bgm && this._bgm.position;
                (Laya.SoundManager._tMusic != file || force) && (Laya.Browser.onMiniGame ? (this._bgm || (this._bgm = wx.createInnerAudioContext()),
                        this._bgm.src = file, this._bgm.loop = !0, this._bgm.play()) : this._bgm || (this._bgm = Laya.SoundManager.playMusic(file, 0, void 0, this._bgm && this._bgm.url === file ? this._bgm.position : 0)),
                    this.refr_GameKey_eshMusicVolume());
            }
        }
        back_GameKey_PlayMusic() {
            this._play_GameKey_Music(this.playMusicId, !0);
        }
        _get_GameKey_CurMusicConfig() {
            return this._bgm ? D.musicBasic[this.playMusicId] : null;
        }
        stop_GameKey_Music() {
            Laya.Browser.onMiniGame ? this._bgm.stop() : (Laya.SoundManager.stopMusic(), this._bgm = null);
        }
        resu_GameKey_meMusic() {
            this._bgm && this.play_GameKey_Music(this.playMusicId);
        }
        refr_GameKey_eshMusicVolume() {
            this.setM_GameKey_usicVolume(Number(LocalData$.getL_GameKey_ocalData(LocalData$.KEY.MUSIC, 1)));
        }
        refr_GameKey_eshSoundVolume() {
            this.soundVolume = Number(LocalData$.getL_GameKey_ocalData(LocalData$.KEY.SOUND, 1)),
                Laya.SoundManager.soundVolume = this.soundVolume;
        }
        play_GameKey_Sound(soundId, loop, isForce) {
            if (!this.getS_GameKey_oundSwitch() && !isForce) return;
            if (!Laya.stage.isVisibility) return;
            var config = D.musicBasic[soundId];
            let sound;
            sound = Laya.SoundManager.playSound(config.file, loop ? 0 : 1);
            var value = this.soundVolume;
            return Laya.SoundManager.setSoundVolume(config.musicPower * value, config.file),
                sound;
        }
        remo_GameKey_veChannel(channel) {
            channel && (Laya.SoundManager.removeChannel(channel), channel = null);
        }
        stop_GameKey_Sound(soundId) {
            if (Laya.stage.isVisibility) {
                var config = D.musicBasic[soundId];
                Laya.SoundManager.stopSound(config.file);
            }
        }
        setM_GameKey_usicVolume(value) {
            this.musicVolume = value;
            var config = this._get_GameKey_CurMusicConfig();
            config && this._mus_GameKey_icVolume(config.musicPower * this.musicVolume), Laya.SoundManager.musicVolume = (config ? config.musicPower : 1) * this.musicVolume;
        }
        _mus_GameKey_icVolume(value) {
            Laya.Browser.onMiniGame ? this._bgm && (this._bgm.volume = value) : Laya.SoundManager._musicChannel && (Laya.SoundManager._musicChannel.volume = value);
        }
        musi_GameKey_cCheck() {
            Laya.SoundManager._musicChannel.isStopped && Laya.SoundManager._musicChannel.play();
        }
    }
    Audi_GameKey_oManager.instance = void 0;
    class CoinCollectUI$ {
        constructor() {
            this.coinDatas = [], this.moveState = 0, this.countTime = 0, this.moveEndCnt = 0,
                this.targetPos = new Laya.Point();
        }
        static create(coinNum, coinImgData, startUI, targetUI, completeCallback, isAutoDestroy, area, boomTime, moveTime) {
            if (!(coinNum > 0)) return completeCallback && completeCallback(), void(completeCallback = void 0);
            let coinCollectCtr = new CoinCollectUI$();
            return coinCollectCtr.setData(coinNum, coinImgData, startUI, targetUI, completeCallback, isAutoDestroy, area, boomTime, moveTime),
                Laya.timer.once(1, coinCollectCtr, coinCollectCtr.onStart), coinCollectCtr;
        }
        setData(coinNum, coinImgData, startUI, targetUI, completeCallback, isAutoDestroy, area, boomTime, moveTime) {
            this.coinNum = coinNum, this.coinImgData = coinImgData, this.startUI = startUI,
                this.targetUI = targetUI, this.completeCallback = completeCallback, this.area = area || 150,
                this.boomTime = boomTime || 500, this.moveTime = moveTime || 800, this.isAutoDestroy = null == isAutoDestroy;
        }
        onStart() {
            this.crateCoins(), this.moveState = 1, Laya.timer.loop(1, this, this.update);
        }
        crateCoins() {
            let i = this.coinNum;
            for (; --i > -1;) this.coinDatas.push(this.createSingleCoin());
        }
        createSingleCoin() {
            let propName, coinImg = this.startUI.addChild(new Laya.Image());
            for (propName in coinImg.anchorX = coinImg.anchorY = .5, this.coinImgData) coinImg[propName] = this.coinImgData[propName];
            let boomTime = this.boomTime + Util_GameKey_s.floa_GameKey_tRange(-150, 150),
                goTargetTime = this.moveTime - this.boomTime + Util_GameKey_s.floa_GameKey_tRange(-150, 150);
            return {
                img: coinImg,
                startPos: {
                    x: .5 * this.startUI.width,
                    y: .5 * this.startUI.height
                },
                boomPos: this.getRandomBoomPos(),
                boomTime: boomTime,
                goTargetTime: goTargetTime,
                totalTime: boomTime + goTargetTime
            };
        }
        getRandomBoomPos() {
            return {
                x: .5 * this.startUI.width + Util_GameKey_s.floa_GameKey_tRange(-this.area, this.area),
                y: .5 * this.startUI.height + Util_GameKey_s.floa_GameKey_tRange(-this.area, this.area)
            };
        }
        getTargetPos() {
            if (!this.targetUI.destroyed) return this.targetPos.setTo(this.targetUI.x, this.targetUI.y),
                this.targetUI.parent.localToGlobal(this.targetPos), this.startUI.globalToLocal(this.targetPos),
                this.targetPos;
        }
        update() {
            this.moveCoins();
        }
        moveCoins() {
            if (this.targetUI.destroyed) return;
            if (1 != this.moveState) return;
            this.countTime += Laya.timer.delta;
            let i = this.coinDatas.length;
            for (; --i > -1;) this.moveSingleCoin(this.coinDatas[i]);
        }
        moveSingleCoin(coinData) {
            if (!coinData.isMoveEnd)
                if (this.countTime <= coinData.boomTime) {
                    let progress = Laya.Ease.quintOut(this.countTime, 0, 1, coinData.boomTime);
                    coinData.img.pos(coinData.startPos.x + (coinData.boomPos.x - coinData.startPos.x) * progress, coinData.startPos.y + (coinData.boomPos.y - coinData.startPos.y) * progress);
                } else if (this.countTime < coinData.totalTime) {
                let progress = Laya.Ease.linearNone(this.countTime - coinData.boomTime, 0, 1, coinData.goTargetTime);
                this.coinDatas.indexOf(coinData);
                let targetPos = this.getTargetPos(),
                    boomPos = coinData.boomPos;
                coinData.img.pos(boomPos.x + (targetPos.x - boomPos.x) * progress, boomPos.y + (targetPos.y - boomPos.y) * progress);
            } else this.onSingleCoinMoveComplete(coinData);
        }
        onSingleCoinMoveComplete(coinData) {
            this.moveEndCnt++;
            let targetPos = this.getTargetPos();
            coinData.img.pos(targetPos.x, targetPos.y), coinData.img.visible = !1, coinData.isMoveEnd = !0,
                this.moveEndCnt == this.coinNum && Laya.timer.once(1, this, this.onAllMoveCpmplete);
        }
        onAllMoveCpmplete() {
            Audi_GameKey_oManager.getInstance$().play_GameKey_Sound(1005, !1), this.moveState = 2,
                this.isAutoDestroy && this.destroy(), this.completeCallback && this.completeCallback(),
                this.completeCallback = void 0;
        }
        clearCoins() {
            let coinData, i = this.coinDatas.length;
            for (; --i > -1;)(coinData = this.coinDatas[i]).img && coinData.img.destroy();
            this.coinDatas = [];
        }
        destroy() {
            Laya.timer.clearAll(this), this.clearCoins();
        }
    }
    class BattleResultUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "结算界面";
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(),
                this.coinNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_coinNum"),
                this.btn_continue$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_continue"),
                this.label_awardNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_awardNum"),
                this.btn_three$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_three"),
                this.box_drink$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "box_drink"),
                this.drinkBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bg"),
                this.decorate$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_decorate"),
                this.glass$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass"),
                this.glassBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass_bg"),
                this.joiceUp$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_up"),
                this.joiceCenter$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_center"),
                this.joiceBottom$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bottom"),
                this.img_starFu1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_starFu1"),
                this.img_starFu2$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_starFu2"),
                this.img_starFu3$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_starFu3"),
                this.pb_choice$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "pb_choice"),
                this.choice_starFu1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "choice_starFu1"),
                this.pb_decorate$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "pb_decorate"),
                this.decorate_starFu1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "decorate_starFu1"),
                this.pb_skill$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "pb_skill"),
                this.skill_starFu1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "skill_starFu1"),
                this.BoxBanner$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "BoxBanner"),
                this.label_successNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_successNum"),
                this.decorate_starEm1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "decorate_starEm1"),
                this.moni_GameKey_torBtns(), this.initUI$();
        }
        init_GameKey_Data() {
            this.userDataMg$ = Data_GameKey_Manager.getInstance$().userData$,
                this.curMissionId$ = this.userDataMg$.mission$,
                this.curMissionProgress$ = this.userDataMg$.missionProgress$,
                this.drinkDataMg$ = Data_GameKey_Manager.getInstance$().drinkData$,
                this.curMissionData$ = this.drinkDataMg$.getMissionDataByMissionId$(this.curMissionId$),
                this.curDrinkData$ = this.drinkDataMg$.getDrinkDataByDrinkId$(this.curMissionData$.drinkArr[this.curMissionProgress$ - 1]),
                this.addNum$ = this.curMissionData$.coinNumArr[this.curMissionProgress$ - 1], this.setScoreData$(),
                this.setMisProgress$(),
                this.setSucCupNum$(),
                this.addAllFruit$(),
                this.addDecorate$();
        }
        moni_GameKey_torBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_three$, this, "onClickThree$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_continue$, this, "onClickContinue$");
        }
        initUI$() {
            let num = this.userDataMg$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num), this.makeRoleNeedDrink$(),
                this.setScoreShow$(), this.refreshAwardNumUI$(), this.askPlayBannerMoveAnim$();
        }
        refreshAwardNumUI$() {
            this.label_awardNum$.text = "+" + this.addNum$;
        }
        askPlayBannerMoveAnim$() {
            // pgdk$.isResultTrick$() ? (this.playUpAnim$(), Laya.timer.once(1500, this, this.showBanner$)) : Laya.timer.once(100, this, this.showBanner$);
        }
        playUpAnim$() {
            this.isPlayUpAnim$ = !0, this.moveAllT$ = 500, this.delayMoveCountT$ = 2e3, this.moveCountT$ = 0,
                this.btn_continue$.ty = this.btn_continue$.y, this.btn_three$.ty = this.btn_three$.y,
                this.btn_continue$.sy = this.btn_continue$.y = Laya.stage.height - 180, this.btn_three$.sy = this.btn_three$.y = Laya.stage.height - 180;
        }
        refreshUpAnim$() {
            if (!this.isPlayUpAnim$) return;
            if (this.delayMoveCountT$ > 0) return void(this.delayMoveCountT$ -= Laya.timer.delta);
            this.moveCountT$ += Laya.timer.delta;
            let p = Math.min(1, this.moveCountT$ / this.moveAllT$);
            this.btn_continue$.y = this.btn_continue$.sy + (this.btn_continue$.ty - this.btn_continue$.sy) * p,
                this.btn_three$.y = this.btn_three$.sy + (this.btn_three$.ty - this.btn_three$.sy) * p,
                1 == p && (this.isPlayUpAnim$ = !1);
        }
        showBanner$() {
            pgdk$.restoreBanner$();
        }
        makeRoleNeedDrink$() {
            this.drinkBg$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.effectImgId),
                this.glass$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId),
                this.glassBg$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId + 4),
                this.decorate$.skin = Util_GameKey_s.getSkinPathById(D.decorateBasic[this.curDrinkData$.decorateId].decorateImgId),
                this.joiceUp$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[0]),
                this.joiceCenter$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[1]),
                this.joiceBottom$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[2]);
            let cUpArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[2]).fluidColor;
            this.juiceChangeColor$(cUpArr$, this.joiceUp$);
            let cCenterArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[1]).fluidColor;
            this.juiceChangeColor$(cCenterArr$, this.joiceCenter$);
            let cDownArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[0]).fluidColor;
            this.juiceChangeColor$(cDownArr$, this.joiceBottom$);
            let len = this.curDrinkData$.fruitIdArr.length;
            2 == len ? this.juiceChangeColor$(cCenterArr$, this.joiceUp$) : 1 == len && (this.juiceChangeColor$(cDownArr$, this.joiceUp$),
                this.juiceChangeColor$(cDownArr$, this.joiceCenter$)), 3 == this.curDrinkData$.glassId && (this.joiceUp$.centerX -= 13,
                this.joiceUp$.centerY += 13, this.joiceCenter$.centerX -= 13, this.joiceCenter$.centerY += 13,
                this.joiceBottom$.centerX -= 13, this.joiceBottom$.centerY += 13);
        }
        juiceChangeColor$(matArr, img) {
            Util_GameKey_s.changeImgColor$(matArr, img);
        }
        setScoreData$() {
            this.choScore$ = this.drinkDataMg$.choiceScore, this.decScore$ = this.drinkDataMg$.decorateScore,
                this.skiScore$ = this.drinkDataMg$.skillScore, this.allScore$ = Math.floor(this.choScore$ + this.decScore$ + this.skiScore$),
                this.starNum$ = 0, this.choScore$ >= 1 && this.starNum$++, this.decScore$ >= 1 && this.starNum$++,
                this.skiScore$ >= 1 && this.starNum$++;
            let arr = [];
            arr = 0 == this.starNum$ ? [!1, !1, !1] : 1 == this.starNum$ ? [!0, !1, !1] : 2 == this.starNum$ ? [!0, !0, !1] : [!0, !0, !0],
                this.starShowArr$ = arr;
        }
        setScoreShow$() {
            this.setStarShow$(), this.choice_starFu1$.visible = 1 == this.choScore$, this.decorate_starFu1$.visible = 1 == this.decScore$,
                this.skill_starFu1$.visible = 1 == this.skiScore$, this.pb_choice$.value = this.choScore$,
                this.pb_decorate$.value = this.decScore$, this.pb_skill$.value = this.skiScore$;
            let tw1 = new Laya.Tween(),
                tw2 = new Laya.Tween(),
                tw3 = new Laya.Tween();
            tw1.from(this.pb_choice$, {
                value: 0
            }, 2e3, Laya.Ease.quintInOut), tw2.from(this.pb_decorate$, {
                value: 0
            }, 2e3, Laya.Ease.quintInOut), tw3.from(this.pb_skill$, {
                value: 0
            }, 2e3, Laya.Ease.quintInOut), this.label_successNum$.text = this.userDataMg$.successCupNum$;
        }
        setCoinShow$() {
            this.coinNum$.text = "+" + this.addNum$;
            CoinCollectUI$.create(20, {
                skin: "main/CoinIcon.png",
                width: 35,
                height: 35
            }, this.label_awardNum$, this.coinNum$, this.onCoinAnimComplete$.bind(this));
        }
        onCoinAnimComplete$() {
            this.userDataMg$.onGetCoin$(this.addNum$);
            let num = this.userDataMg$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num), this.continue$();
        }
        setStarShow$() {
            this.img_starFu1$.visible = this.starShowArr$[0], this.img_starFu2$.visible = this.starShowArr$[1],
                this.img_starFu3$.visible = this.starShowArr$[2];
        }
        setMisNum$() {
            let curProgress = this.userDataMg$.mission$;
            curProgress++, this.userDataMg$.setMission$(curProgress);
        }
        setMisProgress$() {
            let curProgress = this.userDataMg$.missionProgress$;
            curProgress++, this.userDataMg$.setMissionProgress$(curProgress), curProgress > this.curMissionData$.drinkArr.length && (this.userDataMg$.setMissionProgress$(1),
                this.setMisNum$());
        }
        setSucCupNum$() {
            let curCupNum = this.userDataMg$.successCupNum$;
            curCupNum++, this.userDataMg$.setSuccessCupNum$(curCupNum);
        }
        addAllFruit$() {
            let havedFruits = this.userDataMg$.fruitIds,
                curFruits = this.args[0][0];
            for (let i = 0; i < curFruits.length; i++) havedFruits.includes(curFruits[i]) || this.userDataMg$.addFruitSkin$(curFruits[i]);
        }
        addDecorate$() {
            let haveDecorates = this.userDataMg$.decorateIds,
                curDecorate = this.args[0][1];
            haveDecorates.includes(curDecorate) || this.userDataMg$.addDecorateSkin$(curDecorate);
        }
        onClickThree$() {

            platform.getInstance().showReward(() => {
                this.addNum$ *= 3, this.playCoinAnim$();
            })
            pgdk$.showVideoAd$(this.receiveVideo$.bind(this));
        }
        receiveVideo$(isTrue) {
            isTrue && (this.addNum$ *= 3, this.playCoinAnim$());
        }
        onClickContinue$() {
            this.isPlayUpAnim$ || this.playCoinAnim$();
        }
        playCoinAnim$() {
            this.refreshAwardNumUI$(), this.setCoinShow$(), this.btn_three$.visible = !1, this.btn_continue$.visible = !1;
        }
        continue$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ASK_PLAY_WALK_OUT),
                UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleAwardUI$), this.destroy();
        }
        onUpdate() {
            this.refreshUpAnim$();
        }
    }
    BattleResultUI$.url = "Prefab/Battle/BattleResultWindow.json", BattleResultUI$.className = "BattleResultUI$",
        BattleResultUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class BattleInfoUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "战斗信息界面";
        }
        init_GameKey_Data() {
            this.curMissionId$ = Data_GameKey_Manager.getInstance$().userData$.mission$, this.curMissionProgress$ = Data_GameKey_Manager.getInstance$().userData$.missionProgress$,
                this.drinkDataMg$ = Data_GameKey_Manager.getInstance$().drinkData$, this.curMissionData$ = this.drinkDataMg$.getMissionDataByMissionId$(this.curMissionId$),
                this.curDrinkData$ = this.drinkDataMg$.getDrinkDataByDrinkId$(this.curMissionData$.drinkArr[this.curMissionProgress$ - 1]),
                this.fruitIdArr$ = this.curDrinkData$.fruitIdArr, this.havedFruitIdArr$ = Data_GameKey_Manager.getInstance$().userData$.fruitIds,
                this.havedGlassIdsArr$ = Data_GameKey_Manager.getInstance$().userData$.glassIds,
                this.havedDecorateIdsArr$ = Data_GameKey_Manager.getInstance$().userData$.decorateIds,
                this.curFruitNum$ = 1, this.blendStep$ = 1, this.choiceTrueNum$ = 0, this.skillScoreArr$ = [],
                this.starEffectUI$ = void 0, this.isDecorateTrue$ = void 0;
        }
        startMoveArrow() {
            this.isStartMoveArrow = !0, this.dProgress$.visible = !0, this.allLength = this.dProgress$.x + this.dProgress$.width;
            let minX = this.dCenter$.width / 2,
                maxX = this.dProgress$.width - this.dCenter$.width;
            this.dCenter$.x = Util_GameKey_s.clam_GameKey_p(minX, Math.random() * this.dProgress$.width, maxX),
                this.dArrow$.x = 0, this.xSpeed$ = .3, this.dirValue$ = 1, this.isShaking$ = !1,
                this.shakeTime$ = 0, this.shakeDis$ = 200, this.shakeNum$ = 0;
        }
        moveArrow() {
            this.dArrow$.x >= this.dProgress$.width ? this.dirValue$ = -1 : this.dArrow$.x <= 0 && (this.dirValue$ = 1),
                this.dArrow$.x += this.dirValue$ * this.xSpeed$ * Math.min(Laya.timer.delta, 50),
                this.isShaking$ || this.dArrow$.x < .6 * this.dProgress$.width && this.dArrow$.x > .4 * this.dProgress$.width && (this.isShaking$ = !0);
        }
        checkShake() {
            this.isShaking$ && (this.shakeTime$ += Laya.timer.delta, this.shakeTime$ > 200 && (this.shakeTime$ = 0,
                this.shakeNum$++), this.shakeNum$ >= 3 && (this.shakeNum$ = 0,
                this.isShaking$ = !1));
        }
        onUpdate() {
            this.isStartMoveArrow && this.moveArrow(), this.checkShake();
        }
        stopMoveArrow() {
            this.isStartMoveArrow = !1;
            let centerX = this.dCenter$.x + this.dCenter$.width / 2,
                score = 1;
            centerX > this.dArrow$.x ? score = 1 - (centerX - this.dArrow$.x) / centerX : centerX < this.dArrow$.x && (score = 1 - Math.abs(centerX - this.dArrow$.x) / centerX);
            let allScore = this.isDecorateTrue$ ? (score + 1) / 2 : score / 2;
            this.saveDecorateScore$(allScore), this.showSelectWord$(!1);
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.input_box$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "inputBox"),
                this.box_drink$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "box_drink"),
                this.drinkBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bg"),
                this.decorate$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_decorate"),
                this.glass$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass"),
                this.glassBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass_bg"),
                this.joiceUp$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_up"),
                this.joiceCenter$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_center"),
                this.joiceBottom$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bottom"),
                this.btn_back$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_back"), this.btn_Box$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btnBox"),
                this.btn_good1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_good1"),
                this.btn_good2$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_good2"),
                this.btn_good3$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_good3"),
                this.img_good1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_good1"),
                this.img_good2$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_good2"),
                this.img_good3$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_good3"),
                this.img_juiceMark1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_juiceMark1"),
                this.img_markIcon1Bg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon1Bg"),
                this.img_markIcon1$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon1"),
                this.img_juiceMark2$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_juiceMark2"),
                this.img_markIcon2Bg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon2Bg"),
                this.img_markIcon2$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon2"),
                this.img_juiceMark3$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_juiceMark3"),
                this.img_markIcon3Bg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon3Bg"),
                this.img_markIcon3$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_markIcon3"),
                this.dProgress$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_progress"),
                this.dCenter$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_area"), this.dArrow$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_arrow"),
                this.label_word$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_word"),
                this.label_ratio$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_ratio"),
                this.effectStar$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "effectStar"),
                this.label_select$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_select"),
                this.initUI$(), this.moni_GameKey_torBtns(), this.monitorEvents$();
        }
        moni_GameKey_torBtns() {
            this.input_box$ && (this.input_box$.on(Laya.Event.MOUSE_DOWN, this, this.onInputMouseDown$),
                    this.input_box$.on(Laya.Event.MOUSE_UP, this, this.onInputMouseUp$), this.input_box$.on(Laya.Event.MOUSE_OUT, this, this.onInputMouseUp$)),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_back$, this, "onClickBack$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_good1$, this, "onClickGood$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_good2$, this, "onClickGood$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_good3$, this, "onClickGood$");
        }
        initUI$() {
            this.owner.bottomBtnAnim.play(0, !0), this.makeRoleNeedDrink$();
        }
        onDestroy() {}
        nextBlendStep$() {
            this.blendStep$++, this.resetBtns$();
        }
        resetBtns$() {
            this.blendStep$ == BattleInfoUI$.Step$.FRUIT ? this.resetFruitBtns$() : this.blendStep$ == BattleInfoUI$.Step$.GLASS ? (this.showSelectWord$(!0, this.blendStep$),
                this.resetGlassBtns$()) : this.blendStep$ == BattleInfoUI$.Step$.DECORATE && (this.startMoveArrow(),
                this.showSelectWord$(!0, this.blendStep$), this.resetDecorateBtns$()), this.showBtns$();
        }
        resetFruitBtns$() {
            let fId = this.fruitIdArr$[this.curFruitNum$ - 1],
                fModelId = fId,
                imgId = this.drinkDataMg$.getFruitDataByFruitId$(fId).fruitImgId,
                len = this.havedFruitIdArr$.length,
                oId1 = this.havedFruitIdArr$[Math.floor(Math.random() * len)],
                oModelId1 = oId1,
                oImgId1 = this.drinkDataMg$.getFruitDataByFruitId$(oId1).fruitImgId,
                oId2 = this.havedFruitIdArr$[Math.floor(Math.random() * len)],
                oModelId2 = oId2,
                oImgId2 = this.drinkDataMg$.getFruitDataByFruitId$(oId2).fruitImgId,
                num = Math.ceil(3 * Math.random());
            this.btn_good1$.skin = this.btn_good2$.skin = this.btn_good3$.skin = "battle/ButtonE.png",
                this.btn_good1$.isChoiceTrue = void 0, this.btn_good2$.isChoiceTrue = void 0, this.btn_good3$.isChoiceTrue = void 0,
                1 == num ? (this.btn_good1$.isChoiceTrue = !0, this.setBtnsInfo$(fModelId, imgId, oModelId1, oImgId1, oModelId2, oImgId2)) : 2 == num ? (this.btn_good2$.isChoiceTrue = !0,
                    this.setBtnsInfo$(oModelId1, oImgId1, fModelId, imgId, oModelId2, oImgId2)) : (this.btn_good3$.isChoiceTrue = !0,
                    this.setBtnsInfo$(oModelId1, oImgId1, oModelId2, oImgId2, fModelId, imgId)), fId == oId1 && (this.btn_good1$.isChoiceTrue = !0),
                fId == oId2 && (this.btn_good2$.isChoiceTrue = !0);
        }
        resetGlassBtns$() {
            let gId = this.curDrinkData$.glassId,
                glass = D.glassBasic[gId],
                gModelId = glass.glassModelId,
                imgId = glass.glassImgId,
                len = this.havedGlassIdsArr$.length,
                oId1 = this.havedGlassIdsArr$[Math.floor(Math.random() * len)],
                oModelId1 = D.glassBasic[oId1].glassModelId,
                oImgId1 = D.glassBasic[oId1].glassImgId,
                oId2 = this.havedGlassIdsArr$[Math.floor(Math.random() * len)],
                oModelId2 = D.glassBasic[oId2].glassModelId,
                oImgId2 = D.glassBasic[oId2].glassImgId,
                num = Math.ceil(3 * Math.random());
            this.btn_good1$.skin = this.btn_good2$.skin = this.btn_good3$.skin = "battle/ButtonK.png",
                1 == num ? this.setBtnsInfo$(gModelId, imgId, oModelId1, oImgId1, oModelId2, oImgId2) : 2 == num ? this.setBtnsInfo$(oModelId1, oImgId1, gModelId, imgId, oModelId2, oImgId2) : this.setBtnsInfo$(oModelId1, oImgId1, oModelId2, oImgId2, gModelId, imgId);
        }
        resetDecorateBtns$() {
            let dId = this.curDrinkData$.decorateId,
                decorate = D.decorateBasic[dId],
                dModelId = decorate.decorateModelId,
                imgId = decorate.decorateImgId,
                len = this.havedDecorateIdsArr$.length,
                oId1 = this.havedDecorateIdsArr$[Math.floor(Math.random() * len)],
                oModelId1 = D.decorateBasic[oId1].decorateModelId,
                oImgId1 = D.decorateBasic[oId1].decorateImgId,
                oId2 = this.havedDecorateIdsArr$[Math.floor(Math.random() * len)],
                oModelId2 = D.decorateBasic[oId2].decorateModelId,
                oImgId2 = D.decorateBasic[oId2].decorateImgId,
                num = Math.ceil(3 * Math.random());
            this.btn_good1$.isDecorateTrue = void 0, this.btn_good2$.isDecorateTrue = void 0,
                this.btn_good3$.isDecorateTrue = void 0, this.btn_good1$.skin = this.btn_good2$.skin = this.btn_good3$.skin = "battle/ButtonM.png",
                1 == num ? (this.btn_good1$.isDecorateTrue = !0, this.setBtnsInfo$(dModelId, imgId, oModelId1, oImgId1, oModelId2, oImgId2)) : 2 == num ? (this.btn_good2$.isDecorateTrue = !0,
                    this.setBtnsInfo$(oModelId1, oImgId1, dModelId, imgId, oModelId2, oImgId2)) : (this.btn_good3$.isDecorateTrue = !0,
                    this.setBtnsInfo$(oModelId1, oImgId1, oModelId2, oImgId2, dModelId, imgId)), dId == oId1 && (this.btn_good1$.isDecorateTrue = !0),
                dId == oId2 && (this.btn_good2$.isDecorateTrue = !0);
        }
        setBtnsInfo$(vId1, imgId1, vId2, imgId2, vId3, imgId3) {
            this.btn_good1$.willSendId = vId1, this.img_good1$.skin = Util_GameKey_s.getSkinPathById(imgId1),
                this.btn_good2$.willSendId = vId2, this.img_good2$.skin = Util_GameKey_s.getSkinPathById(imgId2),
                this.btn_good3$.willSendId = vId3, this.img_good3$.skin = Util_GameKey_s.getSkinPathById(imgId3);
        }
        onClickGood$(e) {
            let wId = e.target.willSendId;
            if (e.target.isChoiceTrue && this.recordChoice$(), e.target.isDecorateTrue && (this.isDecorateTrue$ = !0),
                this.blendStep$ == BattleInfoUI$.Step$.FRUIT) this.curFruitNum$++, this.showWarnZha$(),
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.FRUIT_SEND, wId);
            else {
                if (this.blendStep$ == BattleInfoUI$.Step$.GLASS) return this.nextBlendStep$(),
                    void Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.CHANGE_CUP, wId);
                this.blendStep$ == BattleInfoUI$.Step$.DECORATE && (this.stopMoveArrow(), Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.CHANGE_ADORN, wId));
            }
            this.hideBtns$();
        }
        showOnceSkillScore$(e) {
            this.owner.warnZha.gotoAndStop(this.owner.warnZha.playEnd);
            let score = e.data;
            if (score >= .95 ? (this.label_word$.text = "PERFECT!",
                    this.label_ratio$.visible = !1) : score >= .85 && score < .95 ? (
                    this.label_word$.text = "COOL!",
                    this.label_ratio$.visible = !0, this.label_ratio$.text = Math.floor(100 * score) + "%") : (
                    this.label_word$.text = "GREAT!",
                    this.label_ratio$.visible = !0, this.label_ratio$.text = Math.floor(100 * score) + "%"),
                this.owner.scoreWord.play(0, !1), this.starEffectUI$) this.starEffectUI$.starShow.play(0, !1);
            else {
                let url = "Prefab/Effect/ShowStar.json";
                UIMa_GameKey_nager.getInstance$().crea_GameKey_tePrefab(url, this.effectStar$, this.preCompelet$.bind(this));
            }
        }
        preCompelet$(data) {
            this.starEffectUI$ = data, data.starShow.play(0, !1);
        }
        showSelectWord$(isShow, step) {
            isShow ? (this.label_select$.visible = !0, step == BattleInfoUI$.Step$.GLASS ? this.label_select$.text = "Choose A Cup" : step == BattleInfoUI$.Step$.DECORATE && (this.label_select$.text = "Choose Decorations")) : this.label_select$.visible = !1;
        }
        showWarnZha$() {
            this.owner.warnZha.play(0, !1);
        }
        showBtns$() {
            this.btn_Box$.visible = !0;
        }
        hideBtns$() {
            this.btn_Box$.visible = !1;
        }
        onClickBack$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.REST_FIGHT),
                UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUI), this.destroy();
        }
        onInputMouseDown$(e) {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.INPUT_MOUSE_DOWN, e);
        }
        onInputMouseUp$(e) {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.INPUT_MOUSE_UP, e);
        }
        makeRoleNeedDrink$() {
            this.drinkBg$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.effectImgId),
                this.glass$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId),
                this.glassBg$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId + 4),
                this.decorate$.skin = Util_GameKey_s.getSkinPathById(D.decorateBasic[this.curDrinkData$.decorateId].decorateImgId),
                this.joiceUp$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[0]),
                this.joiceCenter$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[1]),
                this.joiceBottom$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[2]);
            let cUpArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[2]).fluidColor;
            this.juiceChangeColor$(cUpArr$, this.joiceUp$);
            let cCenterArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[1]).fluidColor;
            this.juiceChangeColor$(cCenterArr$, this.joiceCenter$);
            let cDownArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[0]).fluidColor;
            this.juiceChangeColor$(cDownArr$, this.joiceBottom$);
            let len = this.curDrinkData$.fruitIdArr.length;
            2 == len ? this.juiceChangeColor$(cCenterArr$, this.joiceUp$) : 1 == len && (this.juiceChangeColor$(cDownArr$, this.joiceUp$),
                this.juiceChangeColor$(cDownArr$, this.joiceCenter$)), 3 == this.curDrinkData$.glassId && (this.joiceUp$.centerX -= 13,
                this.joiceUp$.centerY += 13, this.joiceCenter$.centerX -= 13, this.joiceCenter$.centerY += 13,
                this.joiceBottom$.centerX -= 13, this.joiceBottom$.centerY += 13);
        }
        juiceChangeColor$(matArr, img) {
            Util_GameKey_s.changeImgColor$(matArr, img);
        }
        setMarkImg$(e) {
            let posData = e.data,
                len = posData.length;
            if (1 == len) {
                this.img_juiceMark1$.visible = !0, this.img_juiceMark2$.visible = !1, this.img_juiceMark3$.visible = !1,
                    this.img_juiceMark1$.pos(posData[0].x, posData[0].y);
                let imgId1 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[0]).fruitImgId;
                this.img_markIcon1$.skin = Util_GameKey_s.getSkinPathById(imgId1);
            } else if (2 == len) {
                this.img_juiceMark1$.visible = !0, this.img_juiceMark2$.visible = !0, this.img_juiceMark3$.visible = !1,
                    this.img_juiceMark1$.pos(posData[0].x, posData[0].y);
                let imgId1 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[0]).fruitImgId;
                this.img_markIcon1$.skin = Util_GameKey_s.getSkinPathById(imgId1), this.img_juiceMark2$.pos(posData[1].x, posData[1].y);
                let imgId2 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[1]).fruitImgId;
                this.img_markIcon2$.skin = Util_GameKey_s.getSkinPathById(imgId2);
            } else if (3 == len) {
                this.img_juiceMark1$.visible = !0, this.img_juiceMark2$.visible = !0, this.img_juiceMark3$.visible = !0,
                    this.img_juiceMark1$.pos(posData[0].x, posData[0].y);
                let imgId1 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[0]).fruitImgId;
                this.img_markIcon1$.skin = Util_GameKey_s.getSkinPathById(imgId1), this.img_juiceMark2$.pos(posData[1].x, posData[1].y);
                let imgId2 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[1]).fruitImgId;
                this.img_markIcon2$.skin = Util_GameKey_s.getSkinPathById(imgId2), this.img_juiceMark3$.pos(posData[2].x, posData[2].y);
                let imgId3 = this.drinkDataMg$.getFruitDataByFruitId$(this.fruitIdArr$[2]).fruitImgId;
                this.img_markIcon3$.skin = Util_GameKey_s.getSkinPathById(imgId3);
            }
            this.img_markIcon1Bg$.skin = this.img_markIcon1$.skin, this.img_markIcon2Bg$.skin = this.img_markIcon2$.skin,
                this.img_markIcon3Bg$.skin = this.img_markIcon3$.skin, Util_GameKey_s.imgBecomeWhite$(this.img_markIcon1Bg$),
                Util_GameKey_s.imgBecomeWhite$(this.img_markIcon2Bg$), Util_GameKey_s.imgBecomeWhite$(this.img_markIcon3Bg$);
        }
        hideMarks$() {
            this.img_juiceMark1$.visible = !1, this.img_juiceMark2$.visible = !1, this.img_juiceMark3$.visible = !1;
        }
        recordChoice$() {
            this.choiceTrueNum$++;
        }
        recordOneFruitSkillScore$(e) {
            let score = e.data;
            this.skillScoreArr$.push(score);
        }
        saveChoiceScore$() {
            this.drinkDataMg$.setChoiceScore$(this.choiceTrueNum$);
        }
        saveSkillScoreArr$() {
            this.drinkDataMg$.setSkillScore$(this.skillScoreArr$);
        }
        saveDecorateScore$(value) {
            this.drinkDataMg$.setDecorateScore$(value);
        }
        openResultWindow$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleResultUI$, void 0, [this.fruitIdArr$, this.curDrinkData$.decorateId]);
        }
        removeStarEffectUI$() {
            this.starEffectUI$ && (this.starEffectUI$.destroy(), this.starEffectUI$ = void 0);
        }
        monitorEvents$() {
            this.addE_GameKey_ventListener(SSEV_GameKey_ENT.RSP_FILL_UI_POSES, this.setMarkImg$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.RSP_FILL_UI_POSES, this.resetBtns$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.OVER_JUICE, this.resetBtns$), this.addE_GameKey_ventListener(SSEV_GameKey_ENT.OVER_JUICE, this.recordOneFruitSkillScore$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.OVER_JUICE, this.showOnceSkillScore$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this.nextBlendStep$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this.saveChoiceScore$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this.saveSkillScoreArr$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this.hideMarks$), this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this.removeStarEffectUI$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_OVER, this.openResultWindow$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_OVER, this.destroy);
        }
    }
    BattleInfoUI$.Step$ = {
            FRUIT: 1,
            GLASS: 2,
            DECORATE: 3
        }, BattleInfoUI$.url = "Prefab/Battle/BattleInfoWindow.json", BattleInfoUI$.className = "BattleInfoUI$",
        BattleInfoUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ShopCollectionsUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "商店收集品界面", this.nextGoodsData = void 0, this.tagIndexShowDatas = void 0;
        }
        init_GameKey_Data() {
            this.curPage = 1, this.goodsTagIndex = 0, this.refreshShopData();
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.label_curPageName = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_curPageName"),
                this.btn_close = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_close"),
                this.btn_fruit = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_fruit"),
                this.btn_glass = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_glass"),
                this.btn_decorate = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_decorate"),
                this.unSelectBtnHeight = this.btn_glass.height, this.unSelectBtnSkin = this.btn_glass.skin,
                this.selectBtnHeight = this.btn_fruit.height, this.selectBtnSkin = this.btn_fruit.skin,
                this.list_good_cur = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "list_good_cur"),
                this.list_good_cur.scrollBar.visible = !1, this.list_good_cur.renderHandler = new Laya.Handler(this, this.renderGoodItem),
                this.list_good_cur.mouseHandler = new Laya.Handler(this, this.selectGoodItem), this.listenEvents(),
                this.monitorBtns(), this.refreshShopGoods();
        }
        refreshShopData() {
            this.shopDatas = Data_GameKey_Manager.getInstance$().shopData$.getShopDataList(this.curPage);
            let vData, config, tagGoodsDatas, i, l = this.shopDatas.length;
            for (this.tagIndexShowDatas = [], this.goodsBuyTypeDatas = [], i = 0; i < l; i++) vData = this.shopDatas[i],
                config = D.shop[vData.id], (tagGoodsDatas = this.goodsBuyTypeDatas[config.tagIndex - 1]) || (this.goodsBuyTypeDatas[config.tagIndex - 1] = tagGoodsDatas = {
                    array: [],
                    buyType: config.buyType
                }, this.tagIndexShowDatas.push(null)), tagGoodsDatas.array.push(vData);
        }
        refreshShopGoods() {
            this.list_good_cur.array = this.goodsBuyTypeDatas[this.goodsTagIndex].array;
        }
        listenEvents() {}
        monitorBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_glass, this, "onClickGlassBtn"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_close, this, "onClickCloseBtn"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_fruit, this, "onClickFruitBtn"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_decorate, this, "onClickDecorateBtn");
        }
        changePageName() {
            this.curPage == ShopConfig$.SHOP_PAGE.FRUIT ? this.label_curPageName.text = "Juicing items" : this.curPage == ShopConfig$.SHOP_PAGE.GLASS ? this.label_curPageName.text = "Cup" : this.curPage == ShopConfig$.SHOP_PAGE.DECORATE && (this.label_curPageName.text = "Decorations");
        }
        onChangePage() {
            this.clearPageData(), this.refreshShopData(), this.refreshShopGoods(), this.changePageName();
        }
        changePageBtnShow(vBtn1, vBtn2, vBtn3) {
            vBtn1.height = this.selectBtnHeight, vBtn1.skin = this.selectBtnSkin, vBtn2.height = this.unSelectBtnHeight,
                vBtn2.skin = this.unSelectBtnSkin, vBtn3.height = this.unSelectBtnHeight, vBtn3.skin = this.unSelectBtnSkin;
        }
        onClickFruitBtn() {
            ShopConfig$.SHOP_PAGE.FRUIT != this.curPage && (this.curPage = ShopConfig$.SHOP_PAGE.FRUIT,
                this.changePageBtnShow(this.btn_fruit, this.btn_glass, this.btn_decorate), this.onChangePage());
        }
        onClickGlassBtn() {
            ShopConfig$.SHOP_PAGE.GLASS != this.curPage && (this.curPage = ShopConfig$.SHOP_PAGE.GLASS,
                this.changePageBtnShow(this.btn_glass, this.btn_fruit, this.btn_decorate), this.onChangePage());
        }
        onClickDecorateBtn() {
            ShopConfig$.SHOP_PAGE.DECORATE != this.curPage && (this.curPage = ShopConfig$.SHOP_PAGE.DECORATE,
                this.changePageBtnShow(this.btn_decorate, this.btn_glass, this.btn_fruit), this.onChangePage());
        }
        onClickCloseBtn() {
            this.destroy();
        }
        onGetShopItem(id) {
            this.refreshSelectState();
        }
        clearPageData() {
            this.goodsTagIndex = 0;
        }
        refreshSelectState() {
            let index, vCell, cells = this.list_good_cur.cells,
                length = cells.length;
            for (index = 0; index < length; index++)(vCell = cells[index]).dataSource && (vCell.dataSource.id == this.curUseGoodId ? this.renderGoodItem(vCell, this.list_good_cur.startIndex + index) : this.lastUseGoodId == vCell.dataSource.id && this.renderGoodItem(vCell, this.list_good_cur.startIndex + index));
        }
        renderGoodItem(cell, index) {
            cell.inited || (cell.icon_good = Util_GameKey_s.getC_GameKey_hildDeep(cell, "icon_good"),
                cell.inited = !0);
            let shopConfig = D.shop[cell.dataSource.id],
                goodType = shopConfig.type,
                iconId = (shopConfig.buyValue2,
                    void 0),
                isHave = this.isHaveGood(cell.dataSource.id);
            if (goodType == ShopConfig$.GOODS.FRUIT) {
                let fruitConfig = D.fruitBasic[shopConfig.itemId];
                fruitConfig && (iconId = fruitConfig.fruitImgId);
            } else if (goodType == ShopConfig$.GOODS.GLASS) {
                let glassConfig = D.glassBasic[shopConfig.itemId];
                glassConfig && (iconId = glassConfig.glassImgId);
            } else if (goodType == ShopConfig$.GOODS.DECORATE) {
                let decorateConfig = D.decorateBasic[shopConfig.itemId];
                decorateConfig && (iconId = decorateConfig.decorateImgId);
            }
            cell.icon_good.skin = isHave ? Util_GameKey_s.getSkinPathById(iconId) : "collections/SolidBlob.png";
        }
        isHaveGood(goodId) {
            if (!goodId) return !0;
            let shopConfig = D.shop[goodId],
                goodType = shopConfig.type,
                isHave = !1;
            return goodType == ShopConfig$.GOODS.FRUIT ? isHave = Data_GameKey_Manager.getInstance$().userData$.isHaveFruitId(shopConfig.itemId) : goodType == ShopConfig$.GOODS.GLASS ? isHave = Data_GameKey_Manager.getInstance$().userData$.isHaveGlassId(shopConfig.itemId) : goodType == ShopConfig$.GOODS.DECORATE && (isHave = Data_GameKey_Manager.getInstance$().userData$.isHaveDecorateId(shopConfig.itemId)),
                isHave;
        }
        selectGoodItem(e, index) {
            let target = Util_GameKey_s.getC_GameKey_hildDeep(e.target, "icon_good");
            target && (!target.defaultScale && (target.defaultScale = {
                scaleX: target.scaleX || 1,
                scaleY: target.scaleY || 1
            }), e.type == Laya.Event.MOUSE_DOWN ? target.scale(1.05 * target.defaultScale.scaleX, 1.05 * target.defaultScale.scaleY) : target.scale(1, 1));
        }
        onUpdate() {}
        onDestroy() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUI), super.onDestroy();
        }
    }
    ShopCollectionsUI$.url = "Prefab/Battle/CollectionWindow.json", ShopCollectionsUI$.className = "ShopCollectionsUI$",
        ShopCollectionsUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class ShopSkinsUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "商店SKIN界面", this.nextGoodsData = void 0, this.tagIndexShowDatas = void 0;
        }
        init_GameKey_Data() {
            this.startHandSkinId = Data_GameKey_Manager.getInstance$().userData$.curHandSkinId,
                this.startJuicerId = Data_GameKey_Manager.getInstance$().userData$.curJuicerId,
                this.curPage = void 0;
            let showGoodsId = this.args[0];
            if ((showGoodsId = showGoodsId || Conf_GameKey_igManager.getInstance$().shopConfig$.getShopId(ShopConfig$.SHOP_PAGE.JUICER, this.startJuicerId)) > 0) {
                let showGoodsConfig = D.shop[showGoodsId];
                this.curPage = showGoodsConfig.page, this.goodsTagIndex = showGoodsConfig.tagIndex - 1;
            }
            this.refreshShopData(showGoodsId);
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.label_curPageName = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_curPageName"),
                this.btn_close = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_close"),
                this.btn_juicer = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_juicer"),
                this.btn_hand = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_hand"), this.list_good_cur = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "list_good_cur"),
                this.list_good_cur.scrollBar.visible = !1, this.list_good_cur.renderHandler = new Laya.Handler(this, this.renderGoodItem),
                this.list_good_cur.mouseHandler = new Laya.Handler(this, this.selectGoodItem), this.listenEvents(),
                this.monitorBtns(), this.refreshShopGoods();
        }
        refreshShopData(showGoodsId) {
            this.shopDatas = Data_GameKey_Manager.getInstance$().shopData$.getShopDataList(this.curPage);
            let useItemId = void 0;
            this.curPage == ShopConfig$.SHOP_PAGE.JUICER ? useItemId = Data_GameKey_Manager.getInstance$().userData$.curJuicerId : this.curPage == ShopConfig$.SHOP_PAGE.HAND && (useItemId = Data_GameKey_Manager.getInstance$().userData$.curHandSkinId);
            let vData, config, tagGoodsDatas, i, l = this.shopDatas.length;
            for (this.lastUseGoodId = this.curUseGoodId, this.tagIndexShowDatas = [], this.goodsBuyTypeDatas = [],
                i = 0; i < l; i++)
                if (vData = this.shopDatas[i], config = D.shop[vData.id]) {
                    if ((tagGoodsDatas = this.goodsBuyTypeDatas[config.tagIndex - 1]) || (this.goodsBuyTypeDatas[config.tagIndex - 1] = tagGoodsDatas = {
                            array: [],
                            buyType: config.buyType
                        }, this.tagIndexShowDatas.push(null)), config.itemId == useItemId && (this.curUseGoodId = vData.id),
                        this.curPage == ShopConfig$.SHOP_PAGE.JUICER) {
                        if (!D.juicerBasic[config.itemId]) continue;
                    } else if (this.curPage == ShopConfig$.SHOP_PAGE.HAND && !D.handSkinBasic[config.itemId]) continue;
                    tagGoodsDatas.array.push(vData);
                }
            this.selectGoodId = showGoodsId || this.curUseGoodId;
        }
        refreshShopGoods() {
            this.list_good_cur.array = this.goodsBuyTypeDatas[this.goodsTagIndex].array;
        }
        listenEvents() {}
        monitorBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_hand, this, "onClickHandBtn"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_close, this, "onClickCloseBtn"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_juicer, this, "onClickJuicerBtn");
        }
        changePageName() {
            this.curPage == ShopConfig$.SHOP_PAGE.JUICER ? this.label_curPageName.text = "Juicer" : this.curPage == ShopConfig$.SHOP_PAGE.HAND && (this.label_curPageName.text = "Arm");
        }
        onChangePage() {
            this.clearPageData(), this.refreshShopData(), this.refreshShopGoods(), this.changePageName();
        }
        changePageBtnShow() {
            let h = this.btn_hand.height,
                skin = this.btn_hand.skin;
            this.btn_hand.height = this.btn_juicer.height, this.btn_hand.skin = this.btn_juicer.skin,
                this.btn_juicer.height = h, this.btn_juicer.skin = skin;
        }
        onClickJuicerBtn() {
            ShopConfig$.SHOP_PAGE.JUICER != this.curPage && (this.curPage = ShopConfig$.SHOP_PAGE.JUICER,
                this.changePageBtnShow(), this.onChangePage());
        }
        onClickHandBtn() {
            ShopConfig$.SHOP_PAGE.HAND != this.curPage && (this.curPage = ShopConfig$.SHOP_PAGE.HAND,
                this.changePageBtnShow(), this.onChangePage());
        }
        onClickCloseBtn() {
            this.destroy();
        }
        onGetShopItem(id) {
            this.refreshSelectState();
        }
        clearTagData() {
            this.goodsTagIndex = null != this.nextGoodsData ? this.nextGoodsTagIndex : this.goodsTagIndex,
                this.nextGoodsTagIndex = void 0, this.isPlayFixAnim = !1, this.mouseOffsetX = this.lastMouseOffsetX = void 0;
        }
        clearPageData() {
            this.isPlayFixAnim && this.onGoodsArriveTarget(), this.clearTagData(), this.goodsTagIndex = 0,
                this.selectGoodId = void 0;
        }
        refreshSelectState() {
            let index, vCell, cells = this.list_good_cur.cells,
                length = cells.length;
            for (index = 0; index < length; index++)(vCell = cells[index]).dataSource && (vCell.dataSource.id == this.curUseGoodId ? this.renderGoodItem(vCell, this.list_good_cur.startIndex + index) : this.lastUseGoodId == vCell.dataSource.id && this.renderGoodItem(vCell, this.list_good_cur.startIndex + index));
        }
        renderGoodItem(cell, index) {
            cell.inited || (cell.icon_good = Util_GameKey_s.getC_GameKey_hildDeep(cell, "icon_good"),
                cell.mark_unSelect = Util_GameKey_s.getC_GameKey_hildDeep(cell, "mark_unSelect"),
                cell.mark_select = Util_GameKey_s.getC_GameKey_hildDeep(cell, "mark_select"), cell.bg_sale = Util_GameKey_s.getC_GameKey_hildDeep(cell, "bg_sale"),
                cell.inited = !0);
            let shopConfig = D.shop[cell.dataSource.id],
                goodType = shopConfig.type,
                iconId = (shopConfig.buyValue2,
                    void 0),
                isHave = this.isHaveGood(cell.dataSource.id),
                isSelect = !1;
            if (goodType == ShopConfig$.GOODS.JUICER) {
                let juicerConfig = D.juicerBasic[shopConfig.itemId];
                juicerConfig && (iconId = juicerConfig.juicerImgId), isSelect = shopConfig.itemId == Data_GameKey_Manager.getInstance$().userData$.curJuicerId;
            } else if (goodType == ShopConfig$.GOODS.HAND) {
                let handConfig = D.handSkinBasic[shopConfig.itemId];
                handConfig && (iconId = handConfig.handSkinImgId), isSelect = shopConfig.itemId == Data_GameKey_Manager.getInstance$().userData$.curHandSkinId;
            }
            cell.icon_good.skin = iconId && isHave ? Util_GameKey_s.getSkinPathById(iconId) : void 0,
                cell.mark_select.visible = isSelect, cell.mark_unSelect.visible = !isSelect, cell.bg_sale.visible = !isHave;
        }
        isHaveGood(goodId) {
            if (!goodId) return !0;
            let shopConfig = D.shop[goodId],
                goodType = shopConfig.type,
                isHave = !1;
            return goodType == ShopConfig$.GOODS.JUICER ? isHave = Data_GameKey_Manager.getInstance$().userData$.isHaveJuicerId(shopConfig.itemId) : goodType == ShopConfig$.GOODS.HAND && (isHave = Data_GameKey_Manager.getInstance$().userData$.isHaveHandId(shopConfig.itemId)),
                isHave;
        }
        selectGoodItem(e, index) {
            if (e.type != Laya.Event.CLICK) return;
            let cell = this.list_good_cur.getCell(index);
            if (this.selectGoodId != cell.dataSource.id && (this.selectGoodId = cell.dataSource.id,
                    this.isHaveGood(this.selectGoodId))) {
                let shopConfig = D.shop[this.selectGoodId];
                shopConfig.type == ShopConfig$.GOODS.JUICER ? (Data_GameKey_Manager.getInstance$().userData$.setCurJuicerId(shopConfig.itemId),
                        Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.CUR_JUICER_CHANGE)) : shopConfig.type == ShopConfig$.GOODS.HAND && (Data_GameKey_Manager.getInstance$().userData$.setCurHandId(shopConfig.itemId),
                        Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.CUR_HAND_CHANGE)),
                    this.refreshShopData(), this.refreshSelectState();
            }
        }
        onUpdate() {}
        onDestroy() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUI), super.onDestroy();
        }
    }
    ShopSkinsUI$.url = "Prefab/Battle/SkinsWindow.json", ShopSkinsUI$.className = "ShopSkinsUI$",
        ShopSkinsUI$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class MainUI$ extends Base_GameKey_Window {
        constructor() {
            super(), this.winName = "主界面";
        }
        onUI_GameKey_Load() {
            super.onUI_GameKey_Load(), this.coinNum$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "label_coinNum"),
                this.btn_start$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_start"),
                // this.btn_beach$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_beach"), 
                this.btn_items$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_items"),
                this.btn_custom$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "btn_custom"),
                this.img_need$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "img_need"), this.box_drink$ = Util_GameKey_s.getC_GameKey_hildDeep(this.owner, "box_drink"),
                this.drinkBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bg"),
                this.decorate$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_decorate"),
                this.glass$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass"),
                this.glassBg$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_glass_bg"),
                this.joiceUp$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_up"),
                this.joiceCenter$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_center"),
                this.joiceBottom$ = Util_GameKey_s.getC_GameKey_hildDeep(this.box_drink$, "img_bottom"),
                this.monitorEvents$(), this.moni_GameKey_torBtns(), this.initUI$();
        }
        init_GameKey_Data() {
            this.curMissionId$ = Data_GameKey_Manager.getInstance$().userData$.mission$, this.curMissionProgress$ = Data_GameKey_Manager.getInstance$().userData$.missionProgress$,
                this.drinkDataMg$ = Data_GameKey_Manager.getInstance$().drinkData$, this.curMissionData$ = this.drinkDataMg$.getMissionDataByMissionId$(this.curMissionId$),
                this.curDrinkData$ = this.drinkDataMg$.getDrinkDataByDrinkId$(this.curMissionData$.drinkArr[this.curMissionProgress$ - 1]);
        }
        moni_GameKey_torBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_start$, this, "onClickStart$"),
                // Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_beach$, this, "onClickBeach$"), 
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_items$, this, "onClickItem$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_custom$, this, "onClickCustom$");
        }
        initUI$() {
            let num = Data_GameKey_Manager.getInstance$().userData$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num), this.makeRoleNeedDrink$(),
                Laya.timer.once(4e3, this, this.showNeedAnim);
        }
        resetCoinNum$() {
            let num = Data_GameKey_Manager.getInstance$().userData$.coin$;
            this.coinNum$.text = Util_GameKey_s.coinNumShow$(num);
        }
        makeRoleNeedDrink$() {
            this.drinkBg$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.effectImgId),
                this.glass$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId),
                this.glassBg$.skin = Util_GameKey_s.getSkinPathById(D.glassBasic[this.curDrinkData$.glassId].glassImgId + 4),
                this.decorate$.skin = Util_GameKey_s.getSkinPathById(D.decorateBasic[this.curDrinkData$.decorateId].decorateImgId),
                this.joiceUp$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[0]),
                this.joiceCenter$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[1]),
                this.joiceBottom$.skin = Util_GameKey_s.getSkinPathById(this.curDrinkData$.juiceImgIdArr[2]);
            let cUpArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[2]).fluidColor;
            this.juiceChangeColor$(cUpArr$, this.joiceUp$);
            let cCenterArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[1]).fluidColor;
            this.juiceChangeColor$(cCenterArr$, this.joiceCenter$);
            let cDownArr$ = this.drinkDataMg$.getFruitDataByFruitId$(this.curDrinkData$.fruitIdArr[0]).fluidColor;
            this.juiceChangeColor$(cDownArr$, this.joiceBottom$);
            let len = this.curDrinkData$.fruitIdArr.length;
            2 == len ? this.juiceChangeColor$(cCenterArr$, this.joiceUp$) : 1 == len && (this.juiceChangeColor$(cDownArr$, this.joiceUp$),
                this.juiceChangeColor$(cDownArr$, this.joiceCenter$)), 3 == this.curDrinkData$.glassId && (this.joiceUp$.centerX -= 13,
                this.joiceUp$.centerY += 13, this.joiceCenter$.centerX -= 13, this.joiceCenter$.centerY += 13,
                this.joiceBottom$.centerX -= 13, this.joiceBottom$.centerY += 13);
        }
        juiceChangeColor$(matArr, img) {
            Util_GameKey_s.changeImgColor$(matArr, img);
        }
        showNeedAnim() {
            this.owner.need.play(0, !1);
        }
        onClickStart$() {

            platform.getInstance().showInterstitial(() => {
                curScene.isLoadedScene$ && (this.destroy(), Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ON_START_GAME),
                    UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleInfoUI$));
            });

        }
        onClickBeach$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BeachUI$);
        }
        onClickItem$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(ShopCollectionsUI$);
        }
        onClickCustom$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(ShopSkinsUI$);
        }
        monitorEvents$() {
            this.addE_GameKey_ventListener(SSEV_GameKey_ENT.GETED_COIN, this.resetCoinNum$);
        }
    }
    MainUI$.url = "Prefab/Main/MainWindow.json", MainUI$.className = "MainUI", MainUI$.uiConfig = {
        layer: UILa_GameKey_yer.LAYER_NORMAL,
        only: !0,
        needUISurrenal: !0,
        notClose: !1
    };
    class BattleAwardUIOppo$ extends BattleAwardUI$ {
        constructor() {
            super(), this.winName = "奖励界面";
        }
        onClickContinue$() {
            this.destroy(), Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.REST_FIGHT),
                UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUIOppo);
        }
    }
    BattleAwardUIOppo$.url = "Prefab/Battle/BattleAwardWindowOppo.json", BattleAwardUIOppo$.className = "BattleAwardUIOppo$",
        BattleAwardUIOppo$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class BattleResultUIOppo$ extends BattleResultUI$ {
        constructor() {
            super(), this.winName = "结算界面";
        }
        onClickContinue$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ASK_PLAY_WALK_OUT),
                UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleAwardUIOppo$), this.destroy();
        }
    }
    BattleResultUIOppo$.url = "Prefab/Battle/BattleResultWindowOppo.json", BattleResultUIOppo$.className = "BattleResultUIOppo$",
        BattleResultUIOppo$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class BattleInfoUIOppo$ extends BattleInfoUI$ {
        constructor() {
            super(), this.winName = "战斗信息界面";
        }
        openResultWindow$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleResultUIOppo$, void 0, [this.fruitIdArr$, this.curDrinkData$.decorateId]);
        }
    }
    BattleInfoUIOppo$.url = "Prefab/Battle/BattleInfoWindowOppo.json", BattleInfoUIOppo$.className = "BattleInfoUIOppo$",
        BattleInfoUIOppo$.uiconfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class FluidTopMaterial$ extends Laya.Material {
        constructor() {
            super(), this.setShaderName("FluidShader"), this.coolor$ = new Laya.Vector4(1, 0, 1, 1),
                this.loopT$ = 2e3, Laya.timer.loop(1, this, function() {
                    this.waterTime$ = Laya.timer.currTimer % this.loopT$ * 2 * Math.PI / this.loopT$;
                });
        }
        set coolor$(value) {
            this._shaderValues.setVector(FluidTopMaterial$.COLOR, value);
        }
        set waterTime$(value) {
            this._shaderValues.setNumber(FluidTopMaterial$.T, value);
        }
        set fill$(value) {
            this._shaderValues.setNumber(FluidTopMaterial$.FILL, value);
        }
        destroy() {
            Laya.timer.clearAll(this), super.destroy();
        }
        static initShader$() {
            var attributeMap = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0
                },
                uniformMap = {
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_Color: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Fill: Laya.Shader3D.PERIOD_MATERIAL,
                    u_T: Laya.Shader3D.PERIOD_MATERIAL,
                    "u_SunLight.direction": Laya.Shader3D.PERIOD_SCENE
                },
                customShader = Laya.Shader3D.add("FluidShader"),
                subShader = new Laya.SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            subShader.addShaderPass('\n            #include "Lighting.glsl";\n            attribute vec4 a_Position;\n            attribute vec3 a_Normal;\n        \n            uniform mat4 u_MvpMatrix;\n            uniform float u_T;     \n            uniform float u_Fill;     \n            uniform mat4 u_WorldMat;\n\n            varying vec3 v_Normal;\n            varying float v_sina;\n\n            void main() {\n                float rad = u_T + a_Position.x * 2.0 + a_Position.z * 2.0;\n                float sina = sin(rad);\n                float u_ThickFactor = sina * 0.01 * u_Fill;\n                vec4 m_Pos = vec4(a_Position.x, a_Position.y + u_ThickFactor, a_Position.z, a_Position.w);\n                gl_Position = remapGLPositionZ(u_MvpMatrix * m_Pos);\n                v_Normal = mat3(u_WorldMat)*a_Normal;\n                v_sina =(a_Normal.x != 0.0 || a_Normal.z != 0.0 ? 1.0 : (sina + 1.0) * 0.5 * (1.0 - 0.9) + 0.9) * 1.2;\n            }\n        ', '\n            #ifdef FSHIGHPRECISION\n            precision highp float;\n            #else\n            precision mediump float;\n            #endif\n            #include "Lighting.glsl";\n\n            uniform vec4 u_Color;\n            uniform DirectionLight u_SunLight;\n\n            varying vec3 v_Normal;\n            varying float v_sina;\n\n\n            void main()\n            {\n                gl_FragColor = vec4(v_sina * u_Color.rgb, u_Color.a);\n            }\n        ');
        }
    }
    FluidTopMaterial$.COLOR = Laya.Shader3D.propertyNameToID("u_Color"), FluidTopMaterial$.T = Laya.Shader3D.propertyNameToID("u_T"),
        FluidTopMaterial$.FILL = Laya.Shader3D.propertyNameToID("u_Fill");
    class FluidBottomMaterial$ extends Laya.Material {
        constructor(minY, maxY) {
            super(), this.setShaderName("FluidBottomShader"), this.tint1 = new Laya.Vector4(1, 1, 1, 1),
                this.tint2 = new Laya.Vector4(1, 1, 1, 1), this.tint3 = new Laya.Vector4(1, 1, 1, 1),
                this.fill1 = 0, this.fill2 = 0, this.fill3 = 0, this.maxY = maxY, this.minY = minY,
                this.renderMode = FluidBottomMaterial$.RENDERMODE_ALPHABLENDED, this.loopT$ = 2e3,
                Laya.timer.loop(1, this, function() {
                    this.waterTime$ = Laya.timer.currTimer % this.loopT$ * 2 * Math.PI / this.loopT$;
                });
        }
        static __initDefine__() {}
        set waterTime$(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.T, value);
        }
        set tint1(value) {
            this._shaderValues.setVector(FluidBottomMaterial$.TINT1, value);
        }
        set tint2(value) {
            this._shaderValues.setVector(FluidBottomMaterial$.TINT2, value);
        }
        set tint3(value) {
            this._shaderValues.setVector(FluidBottomMaterial$.TINT3, value);
        }
        set fill1(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.FILL1, value);
        }
        set fill2(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.FILL2, value);
        }
        set fill3(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.FILL3, value);
        }
        set minY(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.MINY, value);
        }
        set maxY(value) {
            this._shaderValues.setNumber(FluidBottomMaterial$.MAXY, value);
        }
        get depthWrite() {
            return this._shaderValues.getBool(FluidBottomMaterial$.DEPTH_WRITE);
        }
        set depthWrite(value) {
            this._shaderValues.setBool(FluidBottomMaterial$.DEPTH_WRITE, value);
        }
        get cull() {
            return this._shaderValues.getInt(FluidBottomMaterial$.CULL);
        }
        set cull(value) {
            this._shaderValues.setInt(FluidBottomMaterial$.CULL, value);
        }
        get blend() {
            return this._shaderValues.getInt(FluidBottomMaterial$.BLEND);
        }
        set blend(value) {
            this._shaderValues.setInt(FluidBottomMaterial$.BLEND, value);
        }
        get blendSrc() {
            return this._shaderValues.getInt(FluidBottomMaterial$.BLEND_SRC);
        }
        set blendSrc(value) {
            this._shaderValues.setInt(FluidBottomMaterial$.BLEND_SRC, value);
        }
        get blendDst() {
            return this._shaderValues.getInt(FluidBottomMaterial$.BLEND_DST);
        }
        set blendDst(value) {
            this._shaderValues.setInt(FluidBottomMaterial$.BLEND_DST, value);
        }
        get depthTest() {
            return this._shaderValues.getInt(FluidBottomMaterial$.DEPTH_TEST);
        }
        set depthTest(value) {
            this._shaderValues.setInt(FluidBottomMaterial$.DEPTH_TEST, value);
        }
        set renderMode(value) {
            switch (value) {
                case FluidBottomMaterial$.RENDERMODE_ADDTIVE:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT + 1, this.alphaTest = !1,
                        this.depthWrite = !1, this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                case FluidBottomMaterial$.RENDERMODE_ALPHABLENDED:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT + 1, this.alphaTest = !1,
                        this.depthWrite = !0, this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                default:
                    throw new Error("MeshFluidBottomMaterial$ : renderMode value error.");
            }
        }
        static initShader$() {
            FluidBottomMaterial$.__initDefine__();
            var attributeMap = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
                },
                uniformMap = {
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_Tint1: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Tint2: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Tint3: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Fill1: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Fill2: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Fill3: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MaxY: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MinY: Laya.Shader3D.PERIOD_MATERIAL,
                    "u_SunLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    u_T: Laya.Shader3D.PERIOD_MATERIAL
                },
                customShader = Laya.Shader3D.add("FluidBottomShader"),
                subShader = new Laya.SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            let stateMap = {
                s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
            };
            subShader.addShaderPass('\n            #include "Lighting.glsl";\n            attribute vec4 a_Position;\n            attribute vec3 a_Normal;\n            attribute vec2 a_Texcoord0;\n\n            uniform mat4 u_MvpMatrix;         \n            uniform mat4 u_WorldMat;\n\n            uniform float u_MaxY;\n            uniform float u_MinY;\n            uniform float u_Fill1;\n            uniform float u_Fill2;\n            uniform float u_Fill3;\n            uniform float u_T;\n\n            varying vec2 v_Texcoord0; \n            varying vec3 v_PositionWorld;\n            varying vec3 v_Normal;\n            varying float v_WorldWaterPosY1;\n            varying float v_WorldWaterPosY2;\n            varying float v_WorldWaterPosY3;\n\n            void main() {\n                float rad = u_T + a_Position.x * 2.0 + a_Position.z * 2.0;\n                float sina = sin(rad);\n                float deltaY = u_MaxY - u_MinY;\n                float u_ThickFactor = sina * 0.01 * (a_Position.y - u_MinY) / deltaY;\n                vec4 m_Pos = vec4(a_Position.x, a_Position.y + u_ThickFactor, a_Position.z, a_Position.w);\n                gl_Position = remapGLPositionZ(u_MvpMatrix * m_Pos);\n\n                v_PositionWorld=(u_WorldMat*a_Position).xyz;\n                float localWaterY1 = u_MinY + u_Fill1 * deltaY;\n                float localWaterY2 = localWaterY1 + u_Fill2 * deltaY;\n                float localWaterY3 = localWaterY2 + u_Fill3 * deltaY;\n                v_WorldWaterPosY1 = (u_WorldMat * vec4(a_Position.x, localWaterY1, a_Position.z, a_Position.w)).y;\n                v_WorldWaterPosY2 = (u_WorldMat * vec4(a_Position.x, localWaterY2, a_Position.z, a_Position.w)).y;\n                v_WorldWaterPosY3 = (u_WorldMat * vec4(a_Position.x, localWaterY3, a_Position.z, a_Position.w)).y;\n                v_Normal=mat3(u_WorldMat)*a_Normal;\n            }\n        ', '\n            #ifdef FSHIGHPRECISION\n            precision highp float;\n            #else\n            precision mediump float;\n            #endif\n            #include "Lighting.glsl";\n\n            varying vec3 v_PositionWorld;\n            varying vec3 v_Normal;\n            varying float v_WorldWaterPosY1;\n            varying float v_WorldWaterPosY2;\n            varying float v_WorldWaterPosY3;\n\n            uniform vec4 u_Tint1;\n            uniform vec4 u_Tint2;\n            uniform vec4 u_Tint3;\n            uniform DirectionLight u_SunLight;\n\n            void main()\n            {   \n                float diffuse = max(dot(-u_SunLight.direction, v_Normal), 0.0) * ( 1.0 - 0.99) + 0.99;\n                vec4 color;\n                if(v_PositionWorld.y < v_WorldWaterPosY1){\n                    color = u_Tint1;\n                }else if(v_PositionWorld.y < v_WorldWaterPosY2){\n                    color = u_Tint2;\n                }else if(v_PositionWorld.y < v_WorldWaterPosY3){\n                    color = u_Tint3;\n                }else{\n                    color = vec4(0.0);\n                }\n                gl_FragColor = vec4(diffuse * color.rgb * max(1.0, 1.2 - (v_WorldWaterPosY3 - v_PositionWorld.y) / 1.0), color.a);\n            }\n        ', stateMap);
        }
        destroy() {
            Laya.timer.clearAll(this), super.destroy();
        }
    }
    FluidBottomMaterial$.TINT1 = Laya.Shader3D.propertyNameToID("u_Tint1"), FluidBottomMaterial$.TINT2 = Laya.Shader3D.propertyNameToID("u_Tint2"),
        FluidBottomMaterial$.TINT3 = Laya.Shader3D.propertyNameToID("u_Tint3"), FluidBottomMaterial$.TEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"),
        FluidBottomMaterial$.FILL1 = Laya.Shader3D.propertyNameToID("u_Fill1"), FluidBottomMaterial$.FILL2 = Laya.Shader3D.propertyNameToID("u_Fill2"),
        FluidBottomMaterial$.FILL3 = Laya.Shader3D.propertyNameToID("u_Fill3"), FluidBottomMaterial$.MAXY = Laya.Shader3D.propertyNameToID("u_MaxY"),
        FluidBottomMaterial$.MINY = Laya.Shader3D.propertyNameToID("u_MinY"), FluidBottomMaterial$.T = Laya.Shader3D.propertyNameToID("u_T"),
        FluidBottomMaterial$.CULL = Laya.Shader3D.propertyNameToID("s_Cull"), FluidBottomMaterial$.BLEND = Laya.Shader3D.propertyNameToID("s_Blend"),
        FluidBottomMaterial$.BLEND_SRC = Laya.Shader3D.propertyNameToID("s_BlendSrc"), FluidBottomMaterial$.BLEND_DST = Laya.Shader3D.propertyNameToID("s_BlendDst"),
        FluidBottomMaterial$.DEPTH_TEST = Laya.Shader3D.propertyNameToID("s_DepthTest"),
        FluidBottomMaterial$.DEPTH_WRITE = Laya.Shader3D.propertyNameToID("s_DepthWrite"),
        FluidBottomMaterial$.RENDERMODE_ADDTIVE = 0, FluidBottomMaterial$.RENDERMODE_ALPHABLENDED = 1;
    class FruitMaterial$ extends Laya.Material {
        constructor(texture, minY, maxY, minPerfect, maxPerfect) {
            super(), this.setShaderName("FruitShader"), this.minY = minY, this.maxY = maxY,
                this.minPerfectFill = minPerfect, this.maxPerfectFill = maxPerfect, this.topColor = new Laya.Vector4(1, 0, 1, 1),
                this.color = new Laya.Vector4(1, 1, 1, 1), this.texture = texture, this.fill = .5,
                this.renderMode = FruitMaterial$.RENDERMODE_ALPHABLENDED;
        }
        set fill(value) {
            this._shaderValues.setNumber(FruitMaterial$.FILL, value);
        }
        set texture(value) {
            this._shaderValues.setTexture(FruitMaterial$.TEXTURE, value);
        }
        set color(value) {
            this._shaderValues.setVector(FruitMaterial$.COLOR, value);
        }
        set topColor(value) {
            this._shaderValues.setVector(FruitMaterial$.TOPCOLOR, value);
        }
        set minPerfectFill(value) {
            this._shaderValues.setNumber(FruitMaterial$.MINPERFECTFILL, value);
        }
        set maxPerfectFill(value) {
            this._shaderValues.setNumber(FruitMaterial$.MAXPERFECTFILL, value);
        }
        set minY(value) {
            this._shaderValues.setNumber(FruitMaterial$.MINY, value);
        }
        set maxY(value) {
            this._shaderValues.setNumber(FruitMaterial$.MAXY, value);
        }
        get depthWrite() {
            return this._shaderValues.getBool(FruitMaterial$.DEPTH_WRITE);
        }
        set depthWrite(value) {
            this._shaderValues.setBool(FruitMaterial$.DEPTH_WRITE, value);
        }
        get cull() {
            return this._shaderValues.getInt(FruitMaterial$.CULL);
        }
        set cull(value) {
            this._shaderValues.setInt(FruitMaterial$.CULL, value);
        }
        get blend() {
            return this._shaderValues.getInt(FruitMaterial$.BLEND);
        }
        set blend(value) {
            this._shaderValues.setInt(FruitMaterial$.BLEND, value);
        }
        get blendSrc() {
            return this._shaderValues.getInt(FruitMaterial$.BLEND_SRC);
        }
        set blendSrc(value) {
            this._shaderValues.setInt(FruitMaterial$.BLEND_SRC, value);
        }
        get blendDst() {
            return this._shaderValues.getInt(FruitMaterial$.BLEND_DST);
        }
        set blendDst(value) {
            this._shaderValues.setInt(FruitMaterial$.BLEND_DST, value);
        }
        get depthTest() {
            return this._shaderValues.getInt(FruitMaterial$.DEPTH_TEST);
        }
        set depthTest(value) {
            this._shaderValues.setInt(FruitMaterial$.DEPTH_TEST, value);
        }
        get alphaTest() {
            return this._alphaTest;
        }
        set alphaTest(value) {
            this._alphaTest = value, value ? this._shaderValues.addDefine(Laya.Material.SHADERDEFINE_ALPHATEST) : this._shaderValues.removeDefine(Laya.Material.SHADERDEFINE_ALPHATEST);
        }
        set renderMode(value) {
            switch (value) {
                case FruitMaterial$.RENDERMODE_ADDTIVE:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1,
                        this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                case FruitMaterial$.RENDERMODE_ALPHABLENDED:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !0,
                        this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                default:
                    throw new Error("MeshFruitMaterial$ : renderMode value error.");
            }
        }
        static initShader$() {
            let attributeMap = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
                },
                uniformMap = {
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_Texture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_FillAmount: Laya.Shader3D.PERIOD_MATERIAL,
                    u_Color: Laya.Shader3D.PERIOD_MATERIAL,
                    u_TopColor: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MinY: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MaxY: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MaxPerfectFill: Laya.Shader3D.PERIOD_MATERIAL,
                    u_MinPerfectFill: Laya.Shader3D.PERIOD_MATERIAL,
                    "u_SunLight.direction": Laya.Shader3D.PERIOD_SCENE
                },
                stateMap = {
                    s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                    s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                    s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                    s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                    s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                    s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
                };
            var customShader = Laya.Shader3D.add("FruitShader"),
                subShader = new Laya.SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            subShader.addShaderPass('\n            #include "Lighting.glsl";\n            attribute vec4 a_Position;\n            attribute vec3 a_Normal;\n            attribute vec2 a_Texcoord0;\n        \n            uniform mat4 u_MvpMatrix;         \n            uniform mat4 u_WorldMat;  \n            uniform float u_MinY;\n            uniform float u_MaxY;\n            uniform float u_MaxPerfectFill;\n            uniform float u_MinPerfectFill;\n            uniform float u_FillAmount;\n\n            varying vec3 v_Normal;\n            varying vec2 v_Texcoord0; \n            varying float v_result;\n            varying float v_result3;\n\n            void main() {\n                mat3 worldMat=mat3(u_WorldMat);\n                v_Normal=worldMat*a_Normal;\n                v_Texcoord0 = a_Texcoord0;\n                float localTargetY = (u_MinY - u_MaxY) * u_FillAmount + u_MaxY;\n                float targetY = (u_WorldMat* vec4(a_Position.x, localTargetY, a_Position.zw)).y;\n                float positionWorldY=(u_WorldMat*a_Position).y;\n                \n                v_result = (positionWorldY >= targetY - 0.001 ? 1.0 : 0.0);\n                float v_result2 = (positionWorldY < targetY ? 1.0 : 0.0);\n                vec4 m_Pos = vec4(a_Position.x, a_Position.y, a_Position.z, a_Position.w);\n                if(v_result2 == 1.0){\n                    m_Pos.y = localTargetY;\n                    m_Pos.x -= a_Normal.x * 0.01;\n                    m_Pos.z -= a_Normal.z * 0.01;\n                }\n                float localMinPerfectY = (u_MaxY - u_MinY) * u_MinPerfectFill + u_MinY;\n                float localMaxPerfectY = (u_MaxY - u_MinY) * u_MaxPerfectFill + u_MinY;\n                float minPerfectY = (u_WorldMat* vec4(a_Position.x, localMinPerfectY, a_Position.zw)).y;\n                float maxPerfectY = (u_WorldMat* vec4(a_Position.x, localMaxPerfectY, a_Position.zw)).y;\n                v_result3 = (positionWorldY >= minPerfectY && positionWorldY <= maxPerfectY ? 1.0 : 0.0);\n                gl_Position = remapGLPositionZ(u_MvpMatrix * m_Pos);\n            }\n        ', '\n            #ifdef FSHIGHPRECISION\n            precision highp float;\n            #else\n            precision mediump float;\n            #endif\n            #include "Lighting.glsl";\n\n            varying vec3 v_Normal;\n            varying vec2 v_Texcoord0; \n            varying float v_result;\n            varying float v_result3;\n\n            uniform vec4 u_TopColor;\n            uniform sampler2D u_Texture;\n            uniform DirectionLight u_SunLight;\n            uniform vec4 u_Color;\n\n            void main() {\n                if(v_result == 0.0){\n                    discard;\n                } else {\n                    float diffuse = max(dot(-u_SunLight.direction, v_Normal), 0.0) * ( 1.0 - 0.5) + 0.5;\n                    vec4 albedoTextureColor = (v_result3 > 0.0 ? vec4(vec3(1.0,1.0,0.0) * diffuse, 1.0) : texture2D(u_Texture, v_Texcoord0) * vec4(u_Color.rgb * diffuse, u_Color.a));\n                    gl_FragColor = (gl_FrontFacing ? albedoTextureColor : u_TopColor);\n                }\n            }\n        ', stateMap);
        }
    }
    FruitMaterial$.FILL = Laya.Shader3D.propertyNameToID("u_FillAmount"), FruitMaterial$.MAXPERFECTFILL = Laya.Shader3D.propertyNameToID("u_MaxPerfectFill"),
        FruitMaterial$.MINPERFECTFILL = Laya.Shader3D.propertyNameToID("u_MinPerfectFill"),
        FruitMaterial$.MAXY = Laya.Shader3D.propertyNameToID("u_MaxY"), FruitMaterial$.MINY = Laya.Shader3D.propertyNameToID("u_MinY"),
        FruitMaterial$.TEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"), FruitMaterial$.COLOR = Laya.Shader3D.propertyNameToID("u_Color"),
        FruitMaterial$.TOPCOLOR = Laya.Shader3D.propertyNameToID("u_TopColor"), FruitMaterial$.CULL = Laya.Shader3D.propertyNameToID("s_Cull"),
        FruitMaterial$.BLEND = Laya.Shader3D.propertyNameToID("s_Blend"), FruitMaterial$.BLEND_SRC = Laya.Shader3D.propertyNameToID("s_BlendSrc"),
        FruitMaterial$.BLEND_DST = Laya.Shader3D.propertyNameToID("s_BlendDst"), FruitMaterial$.DEPTH_TEST = Laya.Shader3D.propertyNameToID("s_DepthTest"),
        FruitMaterial$.DEPTH_WRITE = Laya.Shader3D.propertyNameToID("s_DepthWrite"), FruitMaterial$.RENDERMODE_ADDTIVE = 0,
        FruitMaterial$.RENDERMODE_ALPHABLENDED = 1;
    class BgMaskMaterial$ extends Laya.Material {
        constructor(texture, tilingOffset) {
            super(), this.setShaderName("BgMaskShader"), this.alpha$ = 0, this.texture$ = texture,
                this.tilingOffset = tilingOffset, this.renderMode = BgMaskMaterial$.RENDERMODE_ALPHABLENDED;
        }
        static __initDefine__() {
            BgMaskMaterial$.SHADERDEFINE_MAINTEXTURE = Laya.Shader3D.getDefineByName("MAINTEXTURE"),
                BgMaskMaterial$.SHADERDEFINE_TILINGOFFSET = Laya.Shader3D.getDefineByName("TILINGOFFSET"),
                BgMaskMaterial$.SHADERDEFINE_ADDTIVEFOG = Laya.Shader3D.getDefineByName("ADDTIVEFOG");
        }
        set alpha$(value) {
            this._shaderValues.setVector(BgMaskMaterial$.ALPHA, value);
        }
        set texture$(value) {
            this._shaderValues.setTexture(BgMaskMaterial$.TEXTURE, value);
        }
        get depthWrite() {
            return this._shaderValues.getBool(BgMaskMaterial$.DEPTH_WRITE);
        }
        set depthWrite(value) {
            this._shaderValues.setBool(BgMaskMaterial$.DEPTH_WRITE, value);
        }
        get cull() {
            return this._shaderValues.getInt(BgMaskMaterial$.CULL);
        }
        set cull(value) {
            this._shaderValues.setInt(BgMaskMaterial$.CULL, value);
        }
        get blend() {
            return this._shaderValues.getInt(BgMaskMaterial$.BLEND);
        }
        set blend(value) {
            this._shaderValues.setInt(BgMaskMaterial$.BLEND, value);
        }
        get blendSrc() {
            return this._shaderValues.getInt(BgMaskMaterial$.BLEND_SRC);
        }
        set blendSrc(value) {
            this._shaderValues.setInt(BgMaskMaterial$.BLEND_SRC, value);
        }
        get blendDst() {
            return this._shaderValues.getInt(BgMaskMaterial$.BLEND_DST);
        }
        set blendDst(value) {
            this._shaderValues.setInt(BgMaskMaterial$.BLEND_DST, value);
        }
        get depthTest() {
            return this._shaderValues.getInt(BgMaskMaterial$.DEPTH_TEST);
        }
        set depthTest(value) {
            this._shaderValues.setInt(BgMaskMaterial$.DEPTH_TEST, value);
        }
        get _MainTex_STX() {
            return this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET).x;
        }
        set _MainTex_STX(x) {
            var tilOff = this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET);
            tilOff.x = x, this.tilingOffset = tilOff;
        }
        get _MainTex_STY() {
            return this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET).y;
        }
        set _MainTex_STY(y) {
            var tilOff = this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET);
            tilOff.y = y, this.tilingOffset = tilOff;
        }
        get _MainTex_STZ() {
            return this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET).z;
        }
        set _MainTex_STZ(z) {
            var tilOff = this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET);
            tilOff.z = z, this.tilingOffset = tilOff;
        }
        get _MainTex_STW() {
            return this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET).w;
        }
        set _MainTex_STW(w) {
            var tilOff = this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET);
            tilOff.w = w, this.tilingOffset = tilOff;
        }
        get tilingOffsetX() {
            return this._MainTex_STX;
        }
        set tilingOffsetX(x) {
            this._MainTex_STX = x;
        }
        get tilingOffsetY() {
            return this._MainTex_STY;
        }
        set tilingOffsetY(y) {
            this._MainTex_STY = y;
        }
        get tilingOffsetZ() {
            return this._MainTex_STZ;
        }
        set tilingOffsetZ(z) {
            this._MainTex_STZ = z;
        }
        get tilingOffsetW() {
            return this._MainTex_STW;
        }
        set tilingOffsetW(w) {
            this._MainTex_STW = w;
        }
        get tilingOffset() {
            return this._shaderValues.getVector(BgMaskMaterial$.TILINGOFFSET);
        }
        set tilingOffset(value) {
            value && (1 != value.x || 1 != value.y || 0 != value.z || 0 != value.w) ? this._shaderValues.addDefine(BgMaskMaterial$.SHADERDEFINE_TILINGOFFSET) : this._shaderValues.removeDefine(BgMaskMaterial$.SHADERDEFINE_TILINGOFFSET),
                this._shaderValues.setVector(BgMaskMaterial$.TILINGOFFSET, value);
        }
        set renderMode(value) {
            switch (value) {
                case BgMaskMaterial$.RENDERMODE_ADDTIVE:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !1,
                        this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                case BgMaskMaterial$.RENDERMODE_ALPHABLENDED:
                    this.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT, this.alphaTest = !1, this.depthWrite = !0,
                        this.cull = Laya.RenderState.CULL_NONE, this.blend = Laya.RenderState.BLEND_ENABLE_ALL,
                        this.blendSrc = Laya.RenderState.BLENDPARAM_SRC_ALPHA, this.blendDst = Laya.RenderState.BLENDPARAM_ONE_MINUS_SRC_ALPHA,
                        this.depthTest = Laya.RenderState.DEPTHTEST_LESS;
                    break;

                default:
                    throw new Error("MeshBgMaskMaterial$ : renderMode value error.");
            }
        }
        static initShader$() {
            BgMaskMaterial$.__initDefine__();
            var attributeMap = {
                    a_Position: Laya.VertexMesh.MESH_POSITION0,
                    a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                    a_Texcoord0: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
                },
                uniformMap = {
                    u_MvpMatrix: Laya.Shader3D.PERIOD_SPRITE,
                    u_WorldMat: Laya.Shader3D.PERIOD_SPRITE,
                    u_Alpha: Laya.Shader3D.PERIOD_MATERIAL,
                    "u_SunLight.direction": Laya.Shader3D.PERIOD_SCENE,
                    u_Texture: Laya.Shader3D.PERIOD_MATERIAL,
                    u_TilingOffset: Laya.Shader3D.PERIOD_MATERIAL
                },
                customShader = Laya.Shader3D.add("BgMaskShader"),
                subShader = new Laya.SubShader(attributeMap, uniformMap);
            customShader.addSubShader(subShader);
            let stateMap = {
                s_Cull: Laya.Shader3D.RENDER_STATE_CULL,
                s_Blend: Laya.Shader3D.RENDER_STATE_BLEND,
                s_BlendSrc: Laya.Shader3D.RENDER_STATE_BLEND_SRC,
                s_BlendDst: Laya.Shader3D.RENDER_STATE_BLEND_DST,
                s_DepthTest: Laya.Shader3D.RENDER_STATE_DEPTH_TEST,
                s_DepthWrite: Laya.Shader3D.RENDER_STATE_DEPTH_WRITE
            };
            subShader.addShaderPass('\n            #include "Lighting.glsl";\n            attribute vec4 a_Position;\n            attribute vec3 a_Normal;\n            attribute vec2 a_Texcoord0;\n        \n            uniform mat4 u_MvpMatrix;\n            uniform mat4 u_WorldMat;\n            uniform vec4 u_TilingOffset;\n\n            varying vec3 v_Normal;\n            varying vec2 v_Texcoord0;\n\n            void main() {\n                gl_Position = remapGLPositionZ(u_MvpMatrix * a_Position);\n                v_Normal = mat3(u_WorldMat)*a_Normal;\n                #ifdef TILINGOFFSET\n                    v_Texcoord0=TransformUV(a_Texcoord0,u_TilingOffset);\n                #else\n                    v_Texcoord0=a_Texcoord0;\n                #endif\n            }\n        ', '\n            #ifdef FSHIGHPRECISION\n            precision highp float;\n            #else\n            precision mediump float;\n            #endif\n            #include "Lighting.glsl";\n            \n            uniform float u_Alpha;\n            uniform vec4 u_Color;\n            uniform DirectionLight u_SunLight;\n            uniform sampler2D u_Texture;\n\n            varying vec3 v_Normal;\n            varying vec2 v_Texcoord0; \n\n            void main()\n            {\n                float diffuse = max(dot(-u_SunLight.direction, v_Normal), 0.0) * ( 1.0 - 0.5) + 0.5;\n                gl_FragColor = texture2D(u_Texture, v_Texcoord0) * vec4(diffuse, diffuse, diffuse, u_Alpha);\n            }\n        ', stateMap);
        }
    }
    BgMaskMaterial$.ALPHA = Laya.Shader3D.propertyNameToID("u_Alpha"), BgMaskMaterial$.TEXTURE = Laya.Shader3D.propertyNameToID("u_Texture"),
        BgMaskMaterial$.TILINGOFFSET = Laya.Shader3D.propertyNameToID("u_TilingOffset"),
        BgMaskMaterial$.CULL = Laya.Shader3D.propertyNameToID("s_Cull"), BgMaskMaterial$.BLEND = Laya.Shader3D.propertyNameToID("s_Blend"),
        BgMaskMaterial$.BLEND_SRC = Laya.Shader3D.propertyNameToID("s_BlendSrc"), BgMaskMaterial$.BLEND_DST = Laya.Shader3D.propertyNameToID("s_BlendDst"),
        BgMaskMaterial$.DEPTH_TEST = Laya.Shader3D.propertyNameToID("s_DepthTest"), BgMaskMaterial$.DEPTH_WRITE = Laya.Shader3D.propertyNameToID("s_DepthWrite"),
        BgMaskMaterial$.RENDERMODE_ADDTIVE = 0, BgMaskMaterial$.RENDERMODE_ALPHABLENDED = 1;
    class ShaderManager$ {
        constructor() {
            this.inited = !1, FruitMaterial$.initShader$(), FluidBottomMaterial$.initShader$(),
                FluidTopMaterial$.initShader$(), BgMaskMaterial$.initShader$();
        }
        static getInstance$() {
            return ShaderManager$.instance$ || (ShaderManager$.instance$ = new ShaderManager$()),
                ShaderManager$.instance$;
        }
        preCompile22() {
            Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 8, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 2), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 16),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 40, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 72, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 72, 2), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8194, 104, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 8, 18), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 0),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 16), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 40, 18),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 72, 0), Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 72, 2),
                Laya.Shader3D.compileShader("BLINNPHONG", 0, 0, 8198, 104, 0), Laya.Shader3D.compileShader("PARTICLESHURIKEN", 0, 0, 8192, 67117064, 2),
                Laya.Shader3D.compileShader("PARTICLESHURIKEN", 0, 0, 8192, 67272712, 14), Laya.Shader3D.compileShader("Effect", 0, 0, 8192, 0, 10),
                console.debug("预编译完毕");
        }
        preCompile25() {
            for (var key in this.shaderObj = {
                    BLINNPHONG: [{
                        defineNames: ["DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIRECTIONLIGHT", "UV", "UV1"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["GPU_INSTANCE", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["GPU_INSTANCE", "DIFFUSEMAP", "DIRECTIONLIGHT", "UV"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    Effect: [{
                        defineNames: ["ADDTIVEFOG", "MAINTEXTURE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    Unlit: [{
                        defineNames: ["ALPHATEST", "ALBEDOTEXTURE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }],
                    PARTICLESHURIKEN: [{
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TEXTURESHEETANIMATIONCURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SHAPE"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "HORIZONTALBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "STRETCHEDBILLBOARD", "COLOROVERLIFETIME", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "SIZEOVERLIFETIMECURVE", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "SPHERHBILLBOARD", "SIZEOVERLIFETIMECURVE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }, {
                        defineNames: ["DIFFUSEMAP", "ADDTIVEFOG", "SPHERHBILLBOARD", "COLOROVERLIFETIME", "ROTATIONOVERLIFETIME", "ROTATIONOVERLIFETIMECONSTANT", "SHAPE", "TINTCOLOR"],
                        passIndex: 0,
                        subShaderIndex: 0
                    }]
                }, this.shaderObj) {
                let arr = this.shaderObj[key];
                for (let index = 0; index < arr.length; index++) {
                    let obj = arr[index],
                        shadervariant = new Laya.ShaderVariant(Laya.Shader3D.find(key), obj.subShaderIndex, obj.passIndex, obj.defineNames);
                    Laya.Shader3D.debugShaderVariantCollection.add(shadervariant);
                }
            }
            Laya.Shader3D.debugShaderVariantCollection.compile(), console.log("预编译完毕");
        }
    }
    ShaderManager$.instance$ = void 0;
    class MainUiOppo$ extends MainUI$ {
        constructor() {
            super(), this.winName = "主界面";
        }
        onUI_GameKey_Load() {
            Base_GameKey_Window.prototype.onUI_GameKey_Load.call(this), this.setUINode(), this.monitorEvents$(),
                this.moni_GameKey_torBtns(), ShaderManager$.getInstance$().preCompile25(), window.shaderObj = {},
                window.getShaders = function() {
                    let arr;
                    for (let i = 0; i < Laya.Shader3D.debugShaderVariantCollection.variantCount; i++) {
                        let shadervariant = Laya.Shader3D.debugShaderVariantCollection.getByIndex(i),
                            shaderName = shadervariant.shader.name;
                        window.shaderObj[shaderName] || (window.shaderObj[shaderName] = []), arr = window.shaderObj[shaderName];
                        let obj = {};
                        obj.defineNames = shadervariant.defineNames, obj.passIndex = shadervariant.passIndex,
                            obj.subShaderIndex = shadervariant.subShaderIndex, arr.push(obj);
                    }
                    console.log(JSON.stringify(window.shaderObj));
                }, this.initUI$();
        }
        init_GameKey_Data() {
            this.curMissionId$ = Data_GameKey_Manager.getInstance$().userData$.mission$, this.curMissionProgress$ = Data_GameKey_Manager.getInstance$().userData$.missionProgress$,
                this.drinkDataMg$ = Data_GameKey_Manager.getInstance$().drinkData$, this.curMissionData$ = this.drinkDataMg$.getMissionDataByMissionId$(this.curMissionId$),
                this.curDrinkData$ = this.drinkDataMg$.getDrinkDataByDrinkId$(this.curMissionData$.drinkArr[this.curMissionProgress$ - 1]);
        }
        moni_GameKey_torBtns() {
            Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_start$, this, "onClickStart$"),
                // Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_beach$, this, "onClickBeach$"), 
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_items$, this, "onClickItem$"),
                Util_GameKey_s.onBu_GameKey_ttonScaleEvent(this.btn_custom$, this, "onClickCustom$");
        }
        showBannr$() {}
        reportData$() {}
        showInterstitialAd$() {}
        onClickStart$() {
            platform.getInstance().showInterstitial(() => {
                console.log("aaaaaa");
                curScene.isLoadedScene$ && (this.destroy(), Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ON_START_GAME),
                    UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BattleInfoUIOppo$));
            });
        }
        onClickBeach$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(BeachUI$);
        }
        onClickItem$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(ShopCollectionsUI$);
        }
        onClickCustom$() {
            UIMa_GameKey_nager.getInstance$().open_GameKey_UI(ShopSkinsUI$);
        }
    }
    MainUiOppo$.url = "Prefab/Main/MainWindowOppo.json", MainUiOppo$.className = "MainUiOppo",
        MainUiOppo$.uiConfig = {
            layer: UILa_GameKey_yer.LAYER_NORMAL,
            only: !0,
            needUISurrenal: !0,
            notClose: !1
        };
    class Scen_GameKey_eManager {
        constructor() {
            this.inited = !1, this.initedCB = void 0, this.sceneMap = {};
        }
        static getInstance$() {
            return null == Scen_GameKey_eManager.instance && (Scen_GameKey_eManager.instance = new Scen_GameKey_eManager()),
                Scen_GameKey_eManager.instance;
        }
        get isIn_GameKey_ited() {
            return this.inited;
        }
        init(callback) {
            this.initedCB = callback, this.init_GameKey_Complete();
        }
        open_GameKey_InitScene() {}
        init_GameKey_Complete() {
            this.open_GameKey_InitScene(), this.inited = !0, this.initedCB && this.initedCB();
        }
        open_GameKey_Scene(sceneClass, callback, onProgress, ...args) {
            Laya.Scene.open(sceneClass.url, !0, args, Laya.Handler.create(this, e => {
                callback && callback.run();
            }), onProgress);
        }
        add_GameKey_Scene(scene) {
            this.sceneMap[scene.constructor.className] = scene;
        }
        remo_GameKey_veScene(scene) {
            delete this.sceneMap[scene.constructor.className];
        }
        getS_GameKey_cene(sceneClass) {
            return this.sceneMap[sceneClass.className];
        }
    }
    Scen_GameKey_eManager.instance = void 0;
    class Base_GameKey_Scene extends Laya.Scene {
        constructor() {
            super(), this._even_GameKey_ts = [], Scen_GameKey_eManager.getInstance$().add_GameKey_Scene(this);
        }
        addE_GameKey_ventListener(event, callFunc) {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(event, this, callFunc),
                this._even_GameKey_ts.push({
                    e: event,
                    cn: callFunc
                });
        }
        remo_GameKey_veEventListener(event, callName) {
            for (var item, i = this._even_GameKey_ts.length; --i > -1;)
                if ((item = this._even_GameKey_ts[i]).e == event && item.cn == callName) {
                    this._even_GameKey_ts.removeAt(i);
                    break;
                }
        }
        remo_GameKey_veAllEventListener() {
            for (var item; this._even_GameKey_ts.length;) item = this._even_GameKey_ts.shift(),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(item.e, this, item.cn);
            this._even_GameKey_ts = [];
        }
        onDestroy() {
            Scen_GameKey_eManager.getInstance$().remo_GameKey_veScene(this), this.remo_GameKey_veAllEventListener(),
                this.close();
        }
    }
    Base_GameKey_Scene.url = "", Base_GameKey_Scene.className = "";
    class HandControl$ extends Laya.Script3D {
        constructor() {
            super(), this.modelId$ = void 0;
        }
        static create$(scene, callback) {
            let hand = scene.addChild(new Laya.Sprite3D());
            return hand.addComponent(HandControl$).setData$(callback), hand;
        }
        setData$(callback) {
            this.loadedCallback$ = callback;
        }
        onStart() {
            this.initData$(), this.createModel$(), this.resetPos$(), this.monitorEvents$();
        }
        initData$() {
            this.refreshModelData$(), this.inputMouseDown$ = !1, this._canJuice$ = !1, this._handState$ = 0,
                this.transform$ = this.owner.transform, this.moveYSpeed$ = .01, this.handStartPos$ = new Laya.Vector3(0, 20, 0),
                this.makeJuiceV$ = 1e-5, this.speedPlus$ = 1e-6, this.juiceT$ = 0;
        }
        refreshModelData$() {
            let handId = Data_GameKey_Manager.getInstance$().userData$.curHandSkinId,
                handConfig = D.handSkinBasic[handId];
            return !(!handConfig || handConfig.handSkinModelId == this.modelId$) && (this.modelId$ = handConfig.handSkinModelId, !0);
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, this.modelId$, Laya.Handler.create(this, this.onModelLoaded$)),
                this.modelCtr$.setLocalPosition(0, 0, 0);
        }
        onModelLoaded$(modelCtr) {
            this.owner.destroyed || (this.loaded$ = !0, this.loadedCallback$ && this.loadedCallback$(),
                this.loadedCallback$ = void 0);
        }
        onHandChange$(e) {
            this.refreshModelData$() && (this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0,
                this.createModel$());
        }
        setDefaultPosY$(x, y, z) {
            this.handStartPos$.x = x, this.handStartPos$.y = y, this.handStartPos$.z = z, this._canJuice$ || 0 != this.handState$ || this.resetPos$();
        }
        resetPos$() {
            let pos = this.transform$.position;
            pos.x = this.handStartPos$.x, pos.y = this.handStartPos$.y, pos.z = this.handStartPos$.z,
                this.transform$.position = pos;
        }
        set handState$(value) {
            value != this._handState$ && (0 != value && 4 == this._handState$ || (1 == value ? !this._canJuice$ || 0 != this._handState$ && 2 != this._handState$ || (this._handState$ = 1) : 3 == value ? this._canJuice$ && 1 == this._handState$ && (this._handState$ = 3) : 4 == value ? this._canJuice$ || 1 != this._handState$ && 3 != this._handState$ || (this._handState$ = 4) : this._handState$ = value));
        }
        get handState$() {
            return this._handState$;
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.CUR_HAND_CHANGE, this, this.onHandChange$);
        }
        cancleEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.CUR_HAND_CHANGE, this, this.onHandChange$);
        }
        onStartJuice$(y) {
            let pos = this.transform$.position;
            pos.y = y, this.transform$.position = pos, this.handState$ = 3, this.juiceT$ = 0;
        }
        fixHandY$(y) {
            let pos = this.transform$.position;
            pos.y = y, this.transform$.position = pos;
        }
        onStopJuice$() {}
        askMoveToStart$() {
            this.handState$ = 2;
        }
        onFruitUseOver$() {
            this._canJuice$ = !1, this.askMoveToStart$();
        }
        onCreatedFruit$(x, y, z) {
            this._canJuice$ = !0;
            let pos = this.transform$.position;
            pos.x = x, pos.y = y, pos.z = z, this.transform$.position = pos;
        }
        askDownMove$() {
            this.handState$ = 1;
        }
        get speed$() {
            return 3 == this.handState$ ? this.makeJuiceV$ + this.speedPlus$ * this.juiceT$ : 4 == this.handState$ ? 0 : this.moveYSpeed$;
        }
        refreshMoveStartAnim$() {
            if (2 != this.handState$) return;
            let yDis = TimeManager$.getInstance$().deltaTime$ * this.speed$,
                pos = this.transform$.position;
            pos.y > this.handStartPos$.y ? pos.y = Math.max(pos.y - yDis, this.handStartPos$.y) : pos.y = Math.min(this.handStartPos$.y, pos.y + yDis),
                this.transform$.position = pos, pos.y != this.handStartPos$.y || (this.handState$ = 0);
        }
        move$() {
            this.isDead$ || (this.refreshDownAnim$(), this.refreshMoveStartAnim$());
        }
        refreshDownAnim$() {
            if (1 != this.handState$ && 3 != this.handState$) return;
            3 == this.handState$ && (this.juiceT$ += TimeManager$.getInstance$().deltaTime$);
            let yDis = TimeManager$.getInstance$().deltaTime$ * this.speed$,
                pos = this.transform$.position;
            pos.y -= yDis, this.transform$.position = pos;
        }
        onDestroy() {
            this.cancleEvents$(), this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0;
        }
    }
    class FruitBaseCtrl$ extends Laya.Script3D {
        constructor() {
            super(), this.fruitMaterial$ = void 0, this.minY$ = void 0, this.maxY$ = void 0,
                this._fill$ = void 0, this._topColor$ = void 0, this._fillData$ = {}, this.frameFillMax$ = void 0,
                this._frameCutYMax$ = void 0, this._minPerfectFill$ = void 0, this.perfectFillYDis$ = .04,
                this._maxPerfectFill$ = void 0, this.targetFill$ = void 0, this.loadedCallback$ = void 0,
                this.fruitConfig$ = void 0, this.transform$ = void 0, this.fruitState$ = 0, this._stopOffsetFill$ = void 0,
                this._stopOffsetFillYDis$ = .5, this._cutYSpacingT$ = void 0, this._cutYCountT$ = void 0,
                this._juiceSpeed$ = void 0;
        }
        static create$(parent, fruitId, targetFill, index, callback) {
            let fruit = parent.addChild(new Laya.Sprite3D());
            return fruit.addComponent(FruitBaseCtrl$).setData$(fruitId, targetFill, index, callback),
                fruit;
        }
        onStart() {
            this.createModel$();
        }
        setData$(fruitId, targetFill, index, callback) {
            this.transform$ = this.owner.transform, this.targetFill$ = targetFill, this.loadedCallback$ = callback,
                this.fruitConfig$ = D.fruitBasic[fruitId], this._cutYSpacingT$ = 200 * this.fruitConfig$.hard,
                this._frameCutYMax$ = .02 + this.fruitConfig$.hard, this._juiceSpeed$ = .005 * this.fruitConfig$.hard,
                this._fillData$.index = index, this.fruitState$ = 0;
            let fluidColorParam = this.fruitConfig$.fluidColor;
            this._fillData$.color = new Laya.Vector4(fluidColorParam[0], fluidColorParam[1], fluidColorParam[2], fluidColorParam[3]);
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, this.fruitConfig$.fruitModelId, Laya.Handler.create(this, this.onModelLoaded$));
        }
        onModelLoaded$(modelCtr) {
            if (this.owner.destroyed) return;
            let meshRenderer = Mode_GameKey_lUtils.getMeshObjs$(this.modelCtr$.sprite)[0].meshRenderer;
            this.minY$ = void 0, this.maxY$ = void 0;
            let bottomObj = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "BottomPoint"),
                topObj = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "TopPoint"),
                perfectObj = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Perfect"),
                posY = this.owner.transform.position.y,
                bottomY = bottomObj.transform.position.y,
                topY = topObj.transform.position.y,
                perfectY = perfectObj.transform.position.y;
            this.minY$ = bottomY - posY, this.maxY$ = topY - posY;
            let deltaY = topY - bottomY;
            this._minPerfectFill$ = Math.min(1, (perfectY - bottomY - this.perfectFillYDis$) / deltaY),
                this._maxPerfectFill$ = Math.min(1, (perfectY - bottomY + this.perfectFillYDis$) / deltaY),
                this._stopOffsetFill$ = this._stopOffsetFillYDis$ / deltaY, this.frameFillMax$ = this._frameCutYMax$ / deltaY,
                this.fruitMaterial$ = meshRenderer.sharedMaterial = new FruitMaterial$(meshRenderer.sharedMaterial.albedoTexture, bottomObj.transform.localPosition.y, topObj.transform.localPosition.y, this._minPerfectFill$, this._maxPerfectFill$),
                this.fill$ = 1;
            let topColorParam = this.fruitConfig$.topColor;
            this.topColor$ = new Laya.Vector4(topColorParam[0], topColorParam[1], topColorParam[2], topColorParam[3]),
                this.loadedCallback$ && this.loadedCallback$(), this.loadedCallback$ = void 0;
        }
        get canJuice$() {
            return this.modelCtr$ && this.modelCtr$.loaded && 3 != this.fruitState$;
        }
        get isLoaded$() {
            return this.modelCtr$ && this.modelCtr$.loaded;
        }
        set topColor$(value) {
            this._topColor$ != value && (this.fruitMaterial$.topColor = this._topColor$ = value);
        }
        get topColor$() {
            return this._topColor$;
        }
        set fill$(value) {
            this._fill$ != value && (this._fill$ = this.fruitMaterial$.fill = value);
        }
        get fill$() {
            return this._fill$;
        }
        get bootomY$() {
            return (this.minY$ - this.maxY$) * this.fill$ + this.maxY$ + this.owner.transform.position.y;
        }
        get topY$() {
            return this.maxY$ + this.owner.transform.position.y;
        }
        get fillData$() {
            return this._fillData$.fill = (1 - this.fill$) * this.targetFill$ / this._minPerfectFill$,
                this._fillData$;
        }
        checkMakeJuice$(cutY) {
            if (3 == this.fruitState$) return;
            return this.bootomY$ < cutY && (this.doMakeJuice$(cutY), !0);
        }
        askJuiceStop$() {
            0 != this.fruitState$ && 3 != this.fruitState$ && (this.fruitState$ = 0, Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.STOP_JUICE),
                1 - this.fill$ >= this._minPerfectFill$ - this._stopOffsetFill$ && (this.fruitState$ = 3,
                    Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.OVER_JUICE, this.score$)));
        }
        get score$() {
            let juiceFill = 1 - this.fill$;
            return juiceFill < this._minPerfectFill$ ? 1 - (this._minPerfectFill$ - juiceFill) : juiceFill > this._maxPerfectFill$ ? 1 - (juiceFill - this._maxPerfectFill$) : 1;
        }
        doMakeJuice$(cutY) {
            1 != this.fruitState$ && (this.fruitState$ = 1, this._cutYCountT$ = 0, this.isCountT$ = !1,
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.START_JUICE, this)), !this.isCountT$ && (this._cutYCountT$ < this._cutYSpacingT$ && (this._cutYCountT$ += TimeManager$.getInstance$().deltaTime$,
                this._cutYCountT$ >= this._cutYSpacingT$ && (this.isCountT$ = !0)), this._cutYCountT$ < this._cutYSpacingT$) || (this.fill$ = Math.max((this.topY$ - TimeManager$.getInstance$().deltaTime$ * this._juiceSpeed$ - cutY) / (this.maxY$ - this.minY$), 0, this.fill$ - this.frameFillMax$),
                this._cutYCountT$ -= TimeManager$.getInstance$().deltaTime$, this._cutYCountT$ <= 0 && (this._cutYCountT$ = 0,
                    this.isCountT$ = !1));
        }
        setJuiceEffectShow$(isShow) {}
        checkFruitUseOver$() {
            0 == this.fill$ && (this.fruitState$ = 3, Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.STOP_JUICE),
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.FRUIT_USE_OVER),
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.OVER_JUICE, this.score$));
        }
        onDestroy() {}
    }
    class FluiudControl$ extends Laya.Script3D {
        constructor() {
            super(), this.minY$ = -1, this.maxY$ = 1, this.topCone$ = void 0, this.bootomMaterial$ = void 0,
                this.topMaterial$ = void 0, this._color1$ = void 0, this._color1$ = void 0, this._color1$ = void 0,
                this._topColor$ = void 0, this._fill1$ = 0, this._fill2$ = 0, this._fill3$ = 0,
                this.rDatas$ = void 0, this.targetFills$ = void 0, this.color1$ = new Laya.Vector4(0, 0, 1, 1),
                this.color2$ = new Laya.Vector4(1, 0, 0, 1), this.color3$ = new Laya.Vector4(0, 1, 0, 1),
                this.fill1$ = 0, this.fill2$ = 0, this.fill3$ = 0, this.topColor$ = new Laya.Vector4(0, 1, 0, 1);
        }
        static create$(target, minY, maxY, rDatas, targetFills) {
            if (!target) return;
            let fluidCtr = target.addComponent(FluiudControl$);
            return fluidCtr.setData$(minY, maxY, rDatas, targetFills), fluidCtr;
        }
        setData$(minY, maxY, rDatas, targetFills) {
            this.minY$ = minY, this.maxY$ = maxY, this.rDatas$ = rDatas, this.targetFills$ = targetFills;
        }
        onStart() {
            this.changeMaterial$(), this.createTopCone$(), this.monitorEvents$();
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$);
        }
        cancelEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$);
        }
        onFillFluid$(e) {
            0 == e.data.index ? (this.color1$ = e.data.color, this.fill1$ = e.data.fill) : 1 == e.data.index ? (this.color2$ = e.data.color,
                    this.fill2$ = e.data.fill) : 2 == e.data.index && (this.color3$ = e.data.color,
                    this.fill3$ = e.data.fill), this.upEffect$ || this.createUpEffect$(), this.upEffect$.setLocalPosition(0, this.coneY$ + .1, 0),
                this.upEffect$.resumeEmission(), this.upEffect$.loaded && this.upEffect$.changeEmissionColor$(this.topColor$.x, this.topColor$.y, this.topColor$.z, this.topColor$.w);
        }
        onStopJuice$() {
            this.upEffect$ && this.upEffect$.pauseEmission();
        }
        createUpEffect$() {
            this.upEffect$ = Mode_GameKey_l3D.create(this.owner, 2001, Laya.Handler.create(this, this.onUpEffectLoaded$));
        }
        onUpEffectLoaded$() {
            this.destroyed || this.owner.destroyed || this.upEffect$.changeEmissionColor$(this.topColor$.x, this.topColor$.y, this.topColor$.z, this.topColor$.w);
        }
        changeMaterial$() {
            this.bootomMaterial$ = this.owner.meshRenderer.sharedMaterial = new FluidBottomMaterial$(this.minY$, this.maxY$),
                this.bootomMaterial$.fill1 = this.fill1$, this.bootomMaterial$.fill2 = this.fill2$,
                this.bootomMaterial$.fill3 = this.fill3$, this.bootomMaterial$.tint1 = this.color1$,
                this.bootomMaterial$.tint2 = this.color2$, this.bootomMaterial$.tint3 = this.color3$;
        }
        createTopCone$() {
            this.topCone$ = this.owner.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createCylinder(1, .01, 100))),
                this.topMaterial$ = this.topCone$.meshRenderer.sharedMaterial = new FluidTopMaterial$(),
                this.topCone$.transform.localPosition = new Laya.Vector3(0, 1, 0), this.topMaterial$.coolor$ = this.topColor$,
                this.onChangeFill$();
        }
        get coneR$() {
            let vData, coneH = this.coneY$,
                i = this.rDatas$.length;
            for (; --i > -1;)
                if ((vData = this.rDatas$[i]).y <= coneH) return vData.r + 5e-4;
            return 0;
        }
        get coneY$() {
            return (this.maxY$ - this.minY$) * this.totalFill$ + this.minY$;
        }
        onChangeFill$() {
            if (!this.topCone$) return;
            let coneY = this.coneY$,
                localPos = this.topCone$.transform.localPosition;
            localPos.y = coneY, this.topCone$.transform.localPosition = localPos;
            let coneR = this.coneR$;
            if (this.minY$ == coneY) this.topCone$.active = !1;
            else {
                this.topCone$.active = !0;
                let localScale = this.topCone$.transform.localScale;
                localScale.x = coneR, localScale.z = coneR, this.topCone$.transform.localScale = localScale;
            }
            this._fill3$ > 0 ? this.topColor$ = this._color3$ : this._fill2$ > 0 ? this.topColor$ = this._color2$ : this.topColor$ = this._color1$,
                this.topMaterial$.fill$ = this.totalFill$;
        }
        get totalFill$() {
            return Math.min(1, this._fill1$ + this._fill2$ + this._fill3$);
        }
        set topColor$(value) {
            this._topColor$ = value, this.topMaterial$ && (this.topMaterial$.coolor$ = value);
        }
        get topColor$() {
            return this._topColor$;
        }
        set color1$(value) {
            this._color1$ = value, this.bootomMaterial$ && (this.bootomMaterial$.tint1 = value);
        }
        get color1$() {
            return this._color1$;
        }
        set color2$(value) {
            this._color2$ = value, this.bootomMaterial$ && (this.bootomMaterial$.tint2 = value);
        }
        get color2$() {
            return this._color2$;
        }
        set color3$(value) {
            this._color3$ = value, this.bootomMaterial$ && (this.bootomMaterial$.tint3 = value);
        }
        get color3$() {
            return this._color3$;
        }
        set fill1$(value) {
            this._fill1$ = value, this.bootomMaterial$ && (this.bootomMaterial$.fill1 = value),
                this.onChangeFill$();
        }
        get fill1$() {
            return this._fill1$;
        }
        set fill2$(value) {
            this._fill2$ = value, this.bootomMaterial$ && (this.bootomMaterial$.fill2 = value),
                this.onChangeFill$();
        }
        get fill2$() {
            return this._fill2$;
        }
        set fill3$(value) {
            this._fill3$ = value, this.bootomMaterial$ && (this.bootomMaterial$.fill3 = value),
                this.onChangeFill$();
        }
        get fill3$() {
            return this._fill3$;
        }
        get fillUIPoses$() {
            let localPosX, localPosY, vRData, j, drinkPos = this.owner.transform.position,
                uiPoses = [],
                l = this.targetFills$.length,
                vFill = 0;
            for (let i = 0; i < l; i++) {
                for (vFill += this.targetFills$[i], localPosY = (this.maxY$ - this.minY$) * vFill + this.minY$,
                    j = this.rDatas$.length; --j > -1;)
                    if ((vRData = this.rDatas$[j]).y <= localPosY) {
                        localPosX = -vRData.r - 5e-4;
                        break;
                    }
                uiPoses.push(curScene.getUIPos$(new Laya.Vector3(drinkPos.x + localPosX, localPosY + drinkPos.y, drinkPos.z)));
            }
            return uiPoses;
        }
        onDestroy() {
            this.cancelEvents$();
        }
    }
    class PgHotPlay$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = "好友热玩", this.iconWidth = 80, this.iconMaskSkin$ = "sdk/image_circle.png",
                this.backSkin$ = "sdk/image_back.png", this.dataType$ = "copyWx";
        }
        static create$(onClose) {
            if (pgdk$.isShowExit$()) {
                if (pgdk$.hideBanner$(), Laya.hotPlayUI$) {
                    Laya.stage.addChild(Laya.hotPlayUI$);
                    let comp = Laya.hotPlayUI$.addComponent(PgHotPlay$);
                    comp.resetList$(), comp.closeCallbcak$ = onClose;
                } else {
                    let hotPlayUI = Laya.stage.addChild(new Laya.Box());
                    hotPlayUI.zOrder = 999999999, hotPlayUI.bgColor = "#FF0000", hotPlayUI.name = "HotPlayUI",
                        hotPlayUI.viewName = "好友热玩", hotPlayUI.addComponent(PgTopView$);
                    let comp = hotPlayUI.addComponent(PgHotPlay$);
                    comp.setWidget$(hotPlayUI, 0, 0, 0, 0), comp.closeCallbcak$ = onClose, Laya.hotPlayUI$ = hotPlayUI;
                }
                return Laya.hotPlayUI$;
            }
            onClose && onClose();
        }
        onStart() {
            this.initUI$(), this.executeWhenSdkReady$(this, this.createList$.bind(this));
        }
        initUI$() {
            this.createBg$(), this.createHeader$(), this.createBackButton$();
        }
        addChild(node) {
            return this.owner.addChild(node);
        }
        createBg$() {
            let bg = this.addChild(new Laya.Box());
            bg.bgColor = "#FFFFFF", this.setWidget$(bg, 0, 0, 0, 0);
        }
        createHeader$() {
            this.head = this.addChild(new Laya.Box()), this.head.bgColor = "#F0F0F0", this.head.height = 150,
                this.addChild(this.head), this.setWidget$(this.head, 0, null, 0, 0);
        }
        createBackButton$() {
            let backArea = this.head.addChild(new Laya.Box());
            backArea.width = 200, backArea.height = 100, this.setWidget$(backArea, null, 0, 0, null);
            let arrow = backArea.addChild(new Laya.Image());
            arrow.left = 20, arrow.centerY = 0, arrow.width = 25, arrow.height = 43, arrow.skin = this.backSkin$;
            let title = this.createLabel$(backArea, 26, "好友热玩", "#000000");
            title.left = 60, title.centerY = 0, backArea.on(Laya.Event.CLICK, this, function() {
                this.active = !1, this.parent$ = this.parent, this.owner.removeSelf(), this.closeCallbcak$ && this.closeCallbcak$();
            }.bind(this));
        }
        resetList$() {
            this.list$ && (this.list$.array = pgdk$.unsortedAds$(this.dataType$));
        }
        createList$() {
            this.list$ = this.addChild(this.createBaseList$(!1)), this.setWidget$(this.list$, 150, 0, 0, 0),
                this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$), this.list$.itemRender = {
                    type: "Box",
                    props: {
                        width: 720,
                        height: 150,
                        left: 0,
                        right: 0
                    }
                }, this.resetList$(), this.createHeadIconSp$();
        }
        createHeadIconSp$() {
            this.headIconSp$ = this.list$._children[0].addChild(new Laya.Sprite()), this.headIconSp$.mouseThrough = !0,
                this.headIconSp$.startY = 84, this.headIconSp$.pos(this.list$.x + 220, this.headIconSp$.startY);
            pgdk$.platformHandler$.getHeadIconSp$(50, 50, 5, this.list$.itemRender.props.height - 50, this.list$.array.length, 3, this.headIconSp$);
        }
        renderHandler$(cell, index) {
            if (0 === cell.numChildren) {
                let line = cell.addChild(new Laya.Box());
                line.bgColor = "#F0F0F0", line.height = 2, this.setWidget$(line, null, 2, 100, 0),
                    cell.addChild(line), cell.icon$ = cell.addChild(new Laya.Image()), cell.icon$.name = "GameIcon",
                    cell.icon$.x = 40, cell.icon$.centerY = .5, cell.icon$.width = cell.icon$.height = this.iconWidth,
                    this.setIcon$(cell);
                let mask = new Laya.Image();
                mask.width = mask.height = this.iconWidth, mask.skin = this.iconMaskSkin$, cell.icon$.mask = mask,
                    cell.title$ = this.createLabel$(cell, 24, cell.dataSource.title, "#000000"), cell.title$.anchorX = 0,
                    this.setWidget$(cell.title$, null, null, 220, null), cell.title$.centerY = -10,
                    cell.friendInfo$ = this.createLabel$(cell, 18, Math.floor(100 * Math.random() + 3) + "个好友在玩", "#707070"),
                    cell.friendInfo$.anchorX = 0, this.setWidget$(cell.friendInfo$, null, null, 400, null),
                    cell.friendInfo$.centerY = 50;
            }
            this.setIcon$(cell), cell.title$.text = cell.dataSource.title, this.registerAdClickEvent$(cell, this.viewName$);
        }
        setIcon$(cell) {
            let singleData, imgData = cell.dataSource.img;
            if ("string" == typeof imgData) cell.icon$.skin = imgData;
            else if (Object.keys(imgData).length)
                for (const key in imgData)
                    if (imgData.hasOwnProperty(key)) {
                        const elements = imgData[key];
                        if ("gifData" === key && elements && Object.keys(elements).length) {
                            let gifIcon = new PgGifIcon$({
                                    width: 150,
                                    height: 150
                                }),
                                gif = cell.icon$.addChild(gifIcon);
                            singleData = pgdk$.arrayRandom(elements), gif.setImage(singleData);
                        } else if ("array" === key && elements && Object.keys(elements).length) {
                            singleData = pgdk$.arrayRandom(elements), cell.icon$.skin = singleData.path;
                            break;
                        }
                    }
        }
    }
    class GlassCupControl$ extends Laya.Script3D {
        constructor() {
            super(), this.modelId$ = void 0, this.targetFills$ = void 0, this.strawPoint$ = void 0,
                this.isPlayingDrink$ = void 0, this.isPlayingAdorn$ = void 0, this.tempV3$ = void 0,
                this.adornAnimT$ = 800, this.adornAnimStartY$ = 5, this.adornAnimCountT$ = 0, this.adornTagetY$ = 0;
        }
        static create$(parent, modelId, pos, targetFills) {
            let obj = parent.addChild(new Laya.Sprite3D());
            obj.transform.localPosition = pos.clone();
            let glassCupCtr = obj.addComponent(GlassCupControl$);
            return glassCupCtr.setData$(modelId, targetFills), glassCupCtr;
        }
        setData$(modelId, targetFills) {
            this.modelId$ = modelId, this.targetFills$ = targetFills;
        }
        onStart() {
            this.createModel$();
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, this.modelId$, Laya.Handler.create(this, this.onModelLoaded$));
        }
        onModelLoaded$() {
            if (this.destroyed) return;
            let drink = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Drink"),
                rDatas = [],
                rDataDic = {},
                vertexs = [];
            drink.meshFilter.sharedMesh.getPositions(vertexs);
            let vertexA, vertexB, disQ, maxDis, maxDisQ, j, lastY, i = vertexs.length,
                minFluidY = void 0,
                maxFluidY = void 0;
            for (; --i > -1;)
                for (vertexA = vertexs[i], (null == minFluidY || minFluidY > vertexA.y) && (minFluidY = vertexA.y),
                    (null == maxFluidY || maxFluidY < vertexA.y) && (maxFluidY = vertexA.y), maxDis = 2 * (rDataDic[vertexA.y] || 0),
                    lastY == vertexA.y && 0 != i || (null != lastY && rDatas.push({
                        y: lastY,
                        r: rDataDic[lastY] || 0
                    }), lastY = vertexA.y), maxDisQ = maxDis * maxDis, j = i; --j > -1;)(vertexB = vertexs[j]).y == vertexA.y && ((disQ = Math.pow(vertexB.x - vertexA.x, 2) + Math.pow(vertexB.z - vertexA.z, 2)) < maxDisQ || (rDataDic[vertexA.y] = .5 * Math.sqrt(disQ)));
            this.fluidCtr$ = FluiudControl$.create$(drink, minFluidY, maxFluidY, rDatas, this.targetFills$),
                this.lastFluidCtr$ && (this.fluidCtr$.color1$ = this.lastFluidCtr$.color1$, this.fluidCtr$.color2$ = this.lastFluidCtr$.color2$,
                    this.fluidCtr$.color3$ = this.lastFluidCtr$.color3$, this.fluidCtr$.topColor$ = this.lastFluidCtr$.topColor$,
                    this.fluidCtr$.fill1$ = this.lastFluidCtr$.fill1$, this.fluidCtr$.fill2$ = this.lastFluidCtr$.fill2$,
                    this.fluidCtr$.fill3$ = this.lastFluidCtr$.fill3$, this.lastFluidCtr$ = void 0),
                this.strawPoint$ = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "StrawPoint"),
                this.strawPoint$.active = !1;
        }
        changeModel$(modelId) {
            this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0, this.lastFluidCtr$ = this.fluidCtr$,
                this.modelId$ = modelId, this.createModel$();
        }
        changeAdorn$(modelId) {
            let slicesParent = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Slices");
            this.adornModelCtr$ = Mode_GameKey_l3D.create(slicesParent, modelId, Laya.Handler.create(this, this.delayAdornOver$));
        }
        changeParent$(parent) {
            let scale = this.owner.transform.getWorldLossyScale().clone();
            parent.addChild(this.owner), this.owner.transform.localPosition = new Laya.Vector3(),
                this.owner.transform.localRotationEuler = new Laya.Vector3(), this.owner.transform.setWorldLossyScale(scale),
                this.fluidCtr$.bootomMaterial$.renderQueue = Laya.Material.RENDERQUEUE_TRANSPARENT;
        }
        playDrinkAnim$() {
            this.isPlayingDrink$ = !0, this.drinkSpeed$ = .001;
        }
        refreshDrinkAnim$() {
            this.isPlayingDrink$ && (this.fluidCtr$.fill3$ > 0 ? this.fluidCtr$.fill3$ = Math.max(this.fluidCtr$.fill3$ - TimeManager$.getInstance$().deltaTime$ * this.drinkSpeed$, 0) : this.fluidCtr$.fill2$ > 0 ? this.fluidCtr$.fill2$ = Math.max(this.fluidCtr$.fill2$ - TimeManager$.getInstance$().deltaTime$ * this.drinkSpeed$, 0) : this.fluidCtr$.fill1$ > 0 && (this.fluidCtr$.fill1$ = Math.max(this.fluidCtr$.fill1$ - TimeManager$.getInstance$().deltaTime$ * this.drinkSpeed$, 0)),
                0 == this.fluidCtr$.totalFill$ && (this.isPlayingDrink$ = !1));
        }
        refreshAdornAnim$() {
            this.isPlayingAdorn$ && (this.adornAnimCountT$ += TimeManager$.getInstance$().deltaTime$,
                this.tempV3$ = this.adornModelCtr$.sprite.transform.position, this.tempV3$.y = Math.max(0, 1 - this.adornAnimCountT$ / this.adornAnimT$) * this.adornAnimStartY$ + this.adornTagetY$,
                this.adornModelCtr$.sprite.transform.position = this.tempV3$, this.adornAnimCountT$ > this.adornAnimT$ && (this.isPlayingAdorn$ = !1,
                    Laya.timer.once(500, this, this.onAdornOver$)));
        }
        onUpdate() {
            this.refreshDrinkAnim$(), this.refreshAdornAnim$();
        }
        delayAdornOver$() {
            this.isPlayingAdorn$ = !0, this.tempV3$ = this.adornModelCtr$.sprite.transform.position,
                this.adornTagetY$ = this.tempV3$.y, this.tempV3$.y += this.adornAnimStartY$, this.adornModelCtr$.sprite.transform.position = this.tempV3$;
        }
        onAdornOver$() {
            this.strawPoint$.active = !0, window.wx && !window.tt && 3 == Data_GameKey_Manager.getInstance$().drinkData$.getTotalScore$() ? PgHotPlay$.create$(this.sendAdornOverEvent$.bind(this)) : this.sendAdornOverEvent$();
        }
        sendAdornOverEvent$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ADORN_OVER, this);
        }
        onDestroy() {
            this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0, this.adornModelCtr$ && this.adornModelCtr$.dispose(),
                this.adornModelCtr$ = void 0;
        }
    }
    class BlenderCtrl$ extends Laya.Script3D {
        constructor() {
            super(), this.targetFills$ = void 0, this.modelId$ = void 0, this.modelCtr$ = void 0,
                this.glassCupCtr$ = void 0, this.transform$ = void 0, this.tempEuler$ = void 0,
                this.isOpenJuiceMode$ = void 0, this.dropEffectModel$ = void 0, this.brokenEffectModel$ = void 0,
                this.brokenBits$ = void 0, this.brokenBitUpSpacing$ = 200, this.lastBrokenBitUpT$ = 0,
                this.brokenAnimBits$ = [], this.brokenAnimTArea$ = [300, 800], this.brokenBitScaleArea$ = [.15, .2],
                this.brokenAnimG$ = 7e-6, this.brokenRotateSpeed$ = .5;
        }
        static create$(scene, targetFills) {
            let blender = scene.addChild(new Laya.Sprite3D());
            return blender.transform.position = new Laya.Vector3(0, 10, -5), blender.addComponent(BlenderCtrl$).setData$(targetFills),
                blender;
        }
        setData$(targetFills) {
            this.transform$ = this.owner.transform, this.targetFills$ = targetFills;
        }
        onStart() {
            this.refreshModelData$(), this.createModel$(), this.createCup$(), this.createBottom$(),
                this.monitorEvents$();
        }
        refreshModelData$() {
            let juiceId = Data_GameKey_Manager.getInstance$().userData$.curJuicerId,
                juiceConfig = D.juicerBasic[juiceId];
            return juiceConfig.juicerModelId != this.modelId$ && (this.modelId$ = juiceConfig.juicerModelId, !0);
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, this.modelId$, Laya.Handler.create(this, this.onModelLoaded$));
        }
        createCup$() {
            this.glassCupCtr$ = GlassCupControl$.create$(this.owner, 106, new Laya.Vector3(0, 0, 0), this.targetFills$);
        }
        createBottom$() {
            this.bottomModel$ = Mode_GameKey_l3D.create(this.owner, 301), this.bottomModel$.setLocalPosition(0, -.8, -3),
                this.bottomModel$.setLocalScale(10);
        }
        onModelLoaded$(modelCtr) {
            if (this.owner.destroyed) return;
            let blade = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "BladePoint");
            this._cutY$ = blade.transform.localPosition.y;
            let topPoint = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "TopPoint");
            this._topY$ = topPoint.transform.localPosition.y;
            let lowestPoint = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "LowestPoint");
            this._lowY$ = lowestPoint.transform.localPosition.y, this.blade$ = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Blade"),
                this.modelCtr$.stopAnim$();
        }
        onChangeBlender$(e) {
            this.refreshModelData$() && (this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0,
                this.createModel$());
        }
        get isLoaded$() {
            return this.modelCtr$ && this.modelCtr$.loaded;
        }
        getCollierPos$() {
            let blade = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "BladePoint");
            return blade ? blade.transform.position.clone() : 0;
        }
        get lowY$() {
            return this.owner.transform.position.y + this._lowY$;
        }
        get topY$() {
            return this.owner.transform.position.y + this._topY$;
        }
        get cutY$() {
            return this.owner.transform.position.y + this._cutY$;
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this, this.onAdornStart$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.CHANGE_CUP, this, this.onChangeCup$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.CHANGE_ADORN, this, this.onChangeAdorn$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenJuiceMode$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.CUR_JUICER_CHANGE, this, this.onChangeBlender$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$);
        }
        cancleEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ADORN_START, this, this.onAdornStart$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.CHANGE_CUP, this, this.onChangeCup$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.CHANGE_ADORN, this, this.onChangeAdorn$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenJuiceMode$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.CUR_JUICER_CHANGE, this, this.onChangeBlender$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$);
        }
        onFillFluid$(e) {
            this.dropEffectModel$ || this.createDropEffect$(), this.brokenEffectModel$ || this.createBrokenEffect$(),
                this.dropEffectModel$.resumeEmission(), this.brokenEffectModel$.resumeEmission(),
                this.askUpABit$(), this.dropEffectColor$ != e.data.color && (this.dropEffectColor$ = e.data.color,
                    this.dropEffectModel$.loaded && this.refreshDropEffectColor$(), this.brokenEffectModel$.loaded && this.refreshBrokenEffectColor$());
        }
        askUpABit$() {
            if (!this.brokenBits$) return;
            let curT = Laya.timer.currTimer;
            if (curT - this.lastBrokenBitUpT$ < this.brokenBitUpSpacing$) return;
            this.lastBrokenBitUpT$ = curT;
            let l = this.brokenBits$.length;
            if (0 == l) return;
            let randomIndex = Math.floor(Math.random() * l),
                bit = this.brokenBits$[randomIndex];
            bit.animT$ = Util_GameKey_s.floa_GameKey_tRange(this.brokenAnimTArea$[0], this.brokenAnimTArea$[1]),
                bit.animTQ$ = bit.animT$ * bit.animT$, bit.h = .5 * bit.animTQ$ * this.brokenAnimG$,
                bit.countT$ = 0, bit.rotateSpeed$ = Util_GameKey_s.floa_GameKey_tRange(-this.brokenRotateSpeed$, this.brokenRotateSpeed$);
            let localScale = Util_GameKey_s.floa_GameKey_tRange(this.brokenBitScaleArea$[0], this.brokenBitScaleArea$[1]);
            bit.transform.localScale = new Laya.Vector3(localScale, localScale, localScale),
                bit.active = !0, this.brokenBits$.splice(randomIndex, 1), this.brokenAnimBits$.push(bit);
        }
        refreshBitAnim$() {
            let i = this.brokenAnimBits$.length;
            if (0 == i) return;
            let vBit, p, pos, euler, deltaT = TimeManager$.getInstance$().deltaTime$;
            for (; --i > -1;) pos = (vBit = this.brokenAnimBits$[i]).transform.localPosition,
                (euler = vBit.transform.localRotationEuler).z += deltaT * vBit.rotateSpeed$, vBit.countT$ += deltaT,
                p = vBit.countT$ / vBit.animT$, pos.y = vBit.h * Math.max(0, p > .5 ? 1 - p : p),
                vBit.transform.localPosition = pos, vBit.transform.localRotationEuler = euler, vBit.countT$ >= vBit.animT$ && (vBit.active = !1,
                    this.brokenAnimBits$.splice(i, 1), this.brokenBits$.push(vBit));
        }
        onStopJuice$() {
            this.dropEffectModel$ && this.dropEffectModel$.pauseEmission(), this.brokenEffectModel$ && this.brokenEffectModel$.pauseEmission();
        }
        createDropEffect$() {
            let streamObj = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "StreamPoint");
            this.dropEffectModel$ = Mode_GameKey_l3D.create(streamObj, 2e3, Laya.Handler.create(this, this.onDropEffectLoaded$)),
                this.dropEffectModel$.setLocalPosition(0, 0, 0);
        }
        createBrokenEffect$() {
            let blade = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "BladePoint");
            this.brokenEffectModel$ = Mode_GameKey_l3D.create(blade, 2002, Laya.Handler.create(this, this.onBrokenEffectLoaded$)),
                this.brokenEffectModel$.setLocalPosition(0, 0, 0);
        }
        onDropEffectLoaded$() {
            this.destroyed || this.owner.destroyed || this.dropEffectColor$ && this.refreshDropEffectColor$();
        }
        refreshDropEffectColor$() {
            this.dropEffectModel$.changeEmissionColor$(this.dropEffectColor$.x, this.dropEffectColor$.y, this.dropEffectColor$.z, this.dropEffectColor$.w);
        }
        onBrokenEffectLoaded$() {
            if (this.destroyed || this.owner.destroyed) return;
            this.brokenBits$ = Util_GameKey_s.getC_GameKey_hildArrayDeep(this.brokenEffectModel$.sprite, "bit");
            let i = this.brokenBits$ ? this.brokenBits$.length : 0;
            for (; --i > -1;) this.brokenBits$[i].active = !1;
            this.dropEffectColor$ && this.refreshBrokenEffectColor$();
        }
        refreshBrokenEffectColor$() {
            this.brokenEffectModel$.changeEmissionColor$(this.dropEffectColor$.x, this.dropEffectColor$.y, this.dropEffectColor$.z, this.dropEffectColor$.w);
            let i = this.brokenBits$ ? this.brokenBits$.length : 0;
            for (; --i > -1;) Mode_GameKey_l3D.chan_GameKey_geMaterialColor(this.brokenBits$[i], .7 * this.dropEffectColor$.x, .7 * this.dropEffectColor$.y, .7 * this.dropEffectColor$.z, this.dropEffectColor$.w);
            for (i = this.brokenAnimBits$ ? this.brokenAnimBits$.length : 0; --i > -1;) Mode_GameKey_l3D.chan_GameKey_geMaterialColor(this.brokenAnimBits$[i], .7 * this.dropEffectColor$.x, .7 * this.dropEffectColor$.y, .7 * this.dropEffectColor$.z, this.dropEffectColor$.w);
        }
        onOpenJuiceMode$() {
            this.modelCtr$.playAnim("Cutting", !0), this.isOpenJuiceMode$ = !0;
        }
        onAdornStart$() {
            this.modelCtr$ && this.modelCtr$.setActive(!1);
        }
        onChangeCup$(e) {
            this.glassCupCtr$ && this.glassCupCtr$.changeModel$(e.data);
        }
        onChangeAdorn$(e) {
            this.glassCupCtr$ && this.glassCupCtr$.changeAdorn$(e.data);
        }
        onUpdate() {
            this.rotateBlade$(), this.refreshBitAnim$();
        }
        rotateBlade$() {
            this.blade$ && !this.blade$.destroyed && this.isOpenJuiceMode$ && (this.tempEuler$ = this.blade$.transform.localRotationEuler,
                this.tempEuler$.y += 1 * TimeManager$.getInstance$().deltaTime$, this.blade$.transform.localRotationEuler = this.tempEuler$);
        }
        onDestroy() {
            this.cancleEvents$(), this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0,
                this.dropEffectModel$ && this.dropEffectModel$.dispose(), this.dropEffectModel$ = void 0,
                this.bottomModel$ && this.bottomModel$.dispose(), this.bottomModel$ = void 0;
        }
    }
    class PlayerControl$ extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.curFruidIndex$ = 0, this.curFruitId$ = void 0, this.maskCtr$ = void 0, this.curMissionId$ = Data_GameKey_Manager.getInstance$().userData$.mission$,
                this.curMissionProgress$ = Data_GameKey_Manager.getInstance$().userData$.missionProgress$,
                this.drinkDataMg$ = Data_GameKey_Manager.getInstance$().drinkData$, this.curMissionData$ = this.drinkDataMg$.getMissionDataByMissionId$(this.curMissionId$),
                this.drinkConfig$ = this.drinkDataMg$.getDrinkDataByDrinkId$(this.curMissionData$.drinkArr[this.curMissionProgress$ - 1]),
                this.isPlayingShake$ = !1;
        }
        static create$(parent, loadedCallback) {
            let playerCtr = parent.addChild(new Laya.Sprite3D()).addComponent(PlayerControl$);
            return playerCtr.setData$(loadedCallback), playerCtr;
        }
        setData$(callback) {
            this.loadedCallback$ = callback;
        }
        onStart() {
            this.createHand$(), this.createBlender$(), this.monitorEvents$();
        }
        createHand$() {
            this.hand$ = HandControl$.create$(this.owner, this.onHandLoaded$.bind(this)), this.handCtr$ = this.hand$.getComponent(HandControl$),
                this.hand$.active = !1;
        }
        onHandLoaded$() {
            this.checkLoaded$();
        }
        checkLoaded$() {
            this.loaded$ || (this.loaded$ = this.handCtr$ && this.handCtr$.loaded$, this.loaded$ && (this.loadedCallback$ && this.loadedCallback$(),
                this.loadedCallback$ = void 0));
        }
        createFruit$() {
            this.curFruidIndex$ >= this.drinkConfig$.targetFill.length || (this.hand$.active = !0,
                this.curFruit$ && this.curFruit$.destroy(), this.curFruit$ = FruitBaseCtrl$.create$(this.hand$, this.curFruitId$, this.drinkConfig$.targetFill[this.curFruidIndex$], this.curFruidIndex$, this.onFruitLoaded$.bind(this)),
                this.curFruitCtr$ = this.curFruit$.getComponent(FruitBaseCtrl$), this.curFruidIndex$++);
        }
        onFruitLoaded$() {
            this.refreshHandStartPos$();
            let blendTopY = this.curBlenderCtr$.topY$,
                blendPos = this.curBlenderCtr$.owner.transform.position,
                fruitMinY = this.curFruitCtr$ && this.curFruitCtr$.canJuice$ ? this.curFruitCtr$.bootomY$ - this.curFruitCtr$.owner.transform.position.y : 0;
            this.handCtr$ && this.handCtr$.onCreatedFruit$(blendPos.x, blendTopY + 5 - fruitMinY, blendPos.z),
                this.handCtr$ && this.handCtr$.askMoveToStart$();
        }
        createBlender$() {
            this.curBlender$ = BlenderCtrl$.create$(this.owner, this.drinkConfig$.targetFill),
                this.curBlenderCtr$ = this.curBlender$.getComponent(BlenderCtrl$);
        }
        refreshHandStartPos$() {
            if (!this.handCtr$ || !this.handCtr$.loaded$) return;
            if (!this.curBlenderCtr$ || !this.curBlenderCtr$.isLoaded$) return;
            let blendTopY = this.curBlenderCtr$.topY$,
                blendPos = this.curBlenderCtr$.owner.transform.position;
            if (this.curFruitCtr$ && this.curFruitCtr$.canJuice$) {
                let lowY = this.curBlenderCtr$.lowY$,
                    offsetY = blendTopY + (this.curFruitCtr$ && this.curFruitCtr$.canJuice$ ? this.curFruitCtr$.bootomY$ - this.curFruitCtr$.owner.transform.position.y : 0) - lowY;
                offsetY < 0 ? this.handCtr$.setDefaultPosY$(blendPos.x, blendTopY - offsetY, blendPos.z) : this.handCtr$.setDefaultPosY$(blendPos.x, blendTopY, blendPos.z);
            } else {
                let fruitMinY = this.curFruitCtr$ && this.curFruitCtr$.canJuice$ ? this.curFruitCtr$.bootomY$ - this.curFruitCtr$.owner.transform.position.y : 0;
                this.handCtr$ && this.handCtr$.setDefaultPosY$(blendPos.x, blendTopY + 5 - fruitMinY, blendPos.z);
            }
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.INPUT_MOUSE_DOWN, this, this.onInputMouseDown$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.INPUT_MOUSE_UP, this, this.onInputMouseUp$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.START_JUICE, this, this.onStartJuice$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.OVER_JUICE, this, this.onOverJuice$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.FRUIT_SEND, this, this.onSelectFruit$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ARRIVE_JUICE_POS, this, this.onCameraArriveJuicePos$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornEnd$);
        }
        cancleEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.INPUT_MOUSE_DOWN, this, this.onInputMouseDown$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.INPUT_MOUSE_UP, this, this.onInputMouseUp$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.START_JUICE, this, this.onStartJuice$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.STOP_JUICE, this, this.onStopJuice$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.OVER_JUICE, this, this.onOverJuice$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.FRUIT_SEND, this, this.onSelectFruit$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ARRIVE_JUICE_POS, this, this.onCameraArriveJuicePos$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornEnd$);
        }
        onCameraArriveJuicePos$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.RSP_FILL_UI_POSES, this.curBlenderCtr$.glassCupCtr$.fluidCtr$.fillUIPoses$);
        }
        onStartJuice$() {
            let handY = this.hand$.transform.position.y,
                bootomY$ = this.curFruitCtr$ ? this.curFruitCtr$.bootomY$ : handY;
            this.handCtr$.onStartJuice$(this.curBlenderCtr$.cutY$ - bootomY$ + handY), this.isPlayingShake$ = !0;
        }
        fixHandPos$() {
            let handY = this.hand$.transform.position.y,
                bootomY$ = this.curFruitCtr$ ? this.curFruitCtr$.bootomY$ : handY;
            this.handCtr$.fixHandY$(this.curBlenderCtr$.cutY$ - bootomY$ + handY);
        }
        onStopJuice$() {
            this.handCtr$.onStopJuice$(), this.isPlayingShake$ = !1;
            // pgdk$.shakePhone$();
        }
        refreshShake$() {
            // this.isPlayingShake$ && pgdk$.shakePhone$();
        }
        onOverJuice$(e) {
            this.handCtr$ && this.handCtr$.onFruitUseOver$(), this.curFruidIndex$ == this.drinkConfig$.targetFill.length && this.onAllFruitJuice$();
        }
        onAllFruitJuice$() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ADORN_START);
        }
        onAdornEnd$() {
            this.hand$.active = !1;
        }
        onInputMouseDown$() {
            curScene.isFight$ && this.curFruitCtr$ && (this.inputMouseDown$ || this.handCtr$ && (this.inputMouseDown$ = !0,
                this.handCtr$.askDownMove$()));
        }
        onInputMouseUp$() {
            this.inputMouseDown$ && this.handCtr$ && (this.inputMouseDown$ = !1, this.handCtr$.askMoveToStart$(),
                this.curFruitCtr$ && this.curFruitCtr$.askJuiceStop$());
        }
        onSelectFruit$(e) {
            this.curFruitId$ = Number(e.data), this.createFruit$();
        }
        onUpdate() {
            this.handCtr$ && this.handCtr$.move$(), this.checkMakeJuice$(), this.refreshHandStartPos$(),
                this.refreshShake$();
        }
        getTargetFillMarkUIPos(index) {}
        checkMakeJuice$() {
            this.curFruit$ && this.curFruitCtr$.canJuice$ && this.curBlenderCtr$ && this.curFruitCtr$.checkMakeJuice$(this.curBlenderCtr$.cutY$) && (Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.FILL_FLUID, this.curFruitCtr$.fillData$),
                this.curFruitCtr$.checkFruitUseOver$(), this.fixHandPos$());
        }
        onDestroy() {
            this.cancleEvents$();
        }
    }
    class RoleControl$ extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.roleId$ = void 0, this.isCurCustom$ = void 0, this.modelCtr$ = void 0, this.animState$ = 0,
                this.leftIntoPos$ = new Laya.Vector3(30, 0, 25), this.nextCustomPos$ = new Laya.Vector3(15, 0, 25),
                this.curCustomPos$ = new Laya.Vector3(0, 0, 25), this.rightOutPos$ = new Laya.Vector3(-30, 0, 25),
                this.targetRot$ = void 0, this.moveSpeed$ = .005, this.tempRotEuler$ = void 0, this.tempPos$ = void 0,
                this.moveT$ = void 0, this.moveTotalT$ = void 0, this.mouthNeutralA$ = void 0, this.mouthSadA$ = void 0,
                this.mouthSmileA$ = void 0;
        }
        static create$(parent, roleId, isCurCustom, callback) {
            let roleCtr = parent.addChild(new Laya.Sprite3D()).addComponent(RoleControl$);
            return roleCtr.setData$(roleId, isCurCustom, callback), roleCtr;
        }
        setData$(roleId, isCurCustom, callback) {
            this.roleId$ = roleId, this.isCurCustom$ = isCurCustom, this.loadedCallback$ = callback,
                this.roleConfig$ = D.RoleSkin[this.roleId$];
        }
        onStart() {
            this.createModel$();
        }
        setModelActive$(active) {
            this.modelCtr$ && this.modelCtr$.setActive(active);
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, this.roleConfig$.model, Laya.Handler.create(this, this.onModelLoaded$));
        }
        onModelLoaded$(modelCtr) {
            if (this.destroyed || this.owner.destroyed) return;
            let i, hairIndex = this.roleConfig$.hair,
                clothIndex = this.roleConfig$.cloth,
                pantIndex = this.roleConfig$.pant,
                hairs = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "HairA")._children;
            for (i = hairs.length; --i > -1;) hairs[i].active = i == hairIndex;
            let cloths = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Top1")._children;
            for (i = cloths.length; --i > -1;) cloths[i].active = i == clothIndex;
            let pants = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "Pants1")._children;
            for (i = pants.length; --i > -1;) pants[i].active = i == pantIndex;
            this.mouthNeutralA$ = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "MouthNeutralA"),
                this.mouthSadA$ = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "MouthSadA"),
                this.mouthSmileA$ = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "MouthSmileA"),
                this.mouthNeutralA$.active = !0, this.mouthSadA$.active = this.mouthSmileA$.active = !1,
                this.isCurCustom$ ? this.playWalkInAnim$() : this.playWalkToNextCustomPos$(), this.loaded$ = !0,
                this.loadedCallback$ && this.loadedCallback$(), this.loadedCallback$ = void 0;
        }
        playWalkToNextCustomPos$() {
            this.animState$ = 7, this.modelCtr$.playAnim(RoleControl$.AnimName$.WALK_IN, !0, void 0, void 0, void 0, !0),
                this.tempRotEuler$ = this.owner.transform.rotationEuler, this.tempRotEuler$.x = 0,
                this.tempRotEuler$.y = 55, this.tempRotEuler$.z = 0, this.owner.transform.rotationEuler = this.tempRotEuler$,
                this.tempPos$ = this.owner.transform.position, Util_GameKey_s.copyVector3(this.leftIntoPos$, this.tempPos$),
                this.owner.transform.position = this.tempPos$, this.moveTotalT$ = Laya.Vector3.distance(this.leftIntoPos$, this.nextCustomPos$) / this.moveSpeed$,
                this.moveT$ = 0, this.targetRot$ = new Laya.Vector3(0, 20, 0);
        }
        refreshWalkToNextCustomPosAnim$() {
            this.tempPos$ = this.owner.transform.position, this.moveT$ += Laya.timer.delta,
                Laya.Vector3.lerp(this.leftIntoPos$, this.nextCustomPos$, Math.min(1, this.moveT$ / this.moveTotalT$), this.tempPos$),
                this.owner.transform.position = this.tempPos$, this.moveT$ >= this.moveTotalT$ && (this.tempRotEuler$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.tempRotEuler$, this.targetRot$, Math.min(1, .02 * Laya.timer.delta), this.tempRotEuler$),
                    Math.abs(this.tempRotEuler$.y - this.targetRot$.y) <= .1 ? (this.tempRotEuler$.y = this.targetRot$.y,
                        this.owner.transform.rotationEuler = this.tempRotEuler$, this.onWalkToNextCustomPosAnimComplete$()) : this.owner.transform.rotationEuler = this.tempRotEuler$);
        }
        onWalkToNextCustomPosAnimComplete$() {
            this.playIdleAnim$();
        }
        drink$(glassCtr) {
            this.glassCtr$ = glassCtr;
            let glassPoint = Util_GameKey_s.getC_GameKey_hildDeep(this.modelCtr$.sprite, "GlassPoint");
            this.glassCtr$.changeParent$(glassPoint), Laya.timer.once(1e3, this, this.dinkWater$),
                this.playDrinkAnim$();
        }
        dinkWater$() {
            this.glassCtr$ && this.glassCtr$.playDrinkAnim$();
        }
        playWalkInAnim$() {
            this.animState$ = 1, this.modelCtr$.playAnim(RoleControl$.AnimName$.WALK_IN, !0, void 0, void 0, void 0, !0),
                this.tempRotEuler$ = this.owner.transform.rotationEuler, this.tempRotEuler$.x = 0,
                this.tempRotEuler$.y = 55, this.tempRotEuler$.z = 0, this.owner.transform.rotationEuler = this.tempRotEuler$,
                this.tempPos$ = this.owner.transform.position, Util_GameKey_s.copyVector3(this.nextCustomPos$, this.tempPos$),
                this.owner.transform.position = this.tempPos$, this.moveTotalT$ = Laya.Vector3.distance(this.nextCustomPos$, this.curCustomPos$) / this.moveSpeed$,
                this.moveT$ = 0, this.targetRot$ = new Laya.Vector3(0, 0, 0);
        }
        refreshWalkToCurCustomPosAnim$() {
            this.tempPos$ = this.owner.transform.position, this.moveT$ += Laya.timer.delta,
                Laya.Vector3.lerp(this.nextCustomPos$, this.curCustomPos$, Math.min(1, this.moveT$ / this.moveTotalT$), this.tempPos$),
                this.owner.transform.position = this.tempPos$, this.moveT$ >= this.moveTotalT$ && (this.tempRotEuler$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.tempRotEuler$, this.targetRot$, Math.min(1, .02 * Laya.timer.delta), this.tempRotEuler$),
                    Math.abs(this.tempRotEuler$.y) <= .1 ? (this.tempRotEuler$.y = this.targetRot$.y,
                        this.owner.transform.rotationEuler = this.tempRotEuler$, this.onWalkInAnimComplete$()) : this.owner.transform.rotationEuler = this.tempRotEuler$);
        }
        onWalkInAnimComplete$() {
            this.playIdleAnim$();
        }
        playIdleAnim$() {
            this.animState$ = 2, this.modelCtr$.playAnim(this.isCurCustom$ ? RoleControl$.AnimName$.IDLE : RoleControl$.AnimName$.IDLE2, !0);
        }
        playDrinkAnim$() {
            this.animState$ = 3, this.modelCtr$.playAnim(RoleControl$.AnimName$.DRINK, !1, void 0, void 0, 1, !0),
                Laya.timer.once(2e3, this, this.playHappyAnim$);
        }
        playHappyAnim$() {
            this.modelCtr$.playAnim(RoleControl$.AnimName$.HAPPY, !0);
        }
        playSadAnim$() {
            this.modelCtr$.playAnim(RoleControl$.AnimName$.SAD, !0);
        }
        playWalkOutAnim$(callback) {
            this._walkOutCallback$ = callback, this.modelCtr$.playAnim(RoleControl$.AnimName$.WALK_OUT, !0),
                this.targetRot$ = new Laya.Vector3(0, 30, 0), this.moveTotalT$ = Laya.Vector3.distance(this.rightOutPos$, this.curCustomPos$) / this.moveSpeed$,
                this.moveT$ = 0, this.animState$ = 6;
        }
        refreshWalkOutAnim$() {
            this.tempPos$ = this.owner.transform.position, this.tempRotEuler$ = this.owner.transform.rotationEuler,
                this.tempRotEuler$.y != this.targetRot$.y ? (this.tempRotEuler$.y += (this.targetRot$.y - this.tempRotEuler$.y) * Math.min(1, .02 * Laya.timer.delta),
                    Math.abs(this.tempRotEuler$.y - this.targetRot$.y) <= .1 ? (this.tempRotEuler$.y = this.targetRot$.y,
                        this.owner.transform.rotationEuler = this.tempRotEuler$) : this.owner.transform.rotationEuler = this.tempRotEuler$) : (this.moveT$ += Laya.timer.delta,
                    Laya.Vector3.lerp(this.curCustomPos$, this.rightOutPos$, Math.min(1, this.moveT$ / this.moveTotalT$), this.tempPos$),
                    this.owner.transform.position = this.tempPos$, this.moveT$ >= this.moveTotalT$ && this.onWalkOutAnimComplete$());
        }
        onWalkOutAnimComplete$() {
            this.owner.transform.position = this.rightOutPos$.clone(), this.owner.transform.rotationEuler = this.targetRot$.clone(),
                this.animState$ = 0, this.setModelActive$(!1), this._walkOutCallback$ && this._walkOutCallback$(),
                this._walkOutCallback$ = void 0;
        }
        refreshAnims$() {
            1 == this.animState$ ? this.refreshWalkToCurCustomPosAnim$() : 7 == this.animState$ ? this.refreshWalkToNextCustomPosAnim$() : 6 == this.animState$ && this.refreshWalkOutAnim$();
        }
        onUpdate() {
            this.refreshAnims$();
        }
        onDestroy() {
            this.modelCtr$ = void 0;
        }
    }
    RoleControl$.AnimName$ = {
        WALK_IN: "GirlWalk1",
        IDLE: "IdleNoPlate0",
        IDLE2: "IdleWheel",
        DRINK: "IdleNoPlateDrink",
        HAPPY: "IdleNoPlate2New",
        SAD: "IdleNoPlate1New",
        WALK_OUT: "GirlWalkDrinkNew"
    };
    class BgMaskControl$ extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.startPos$ = new Laya.Vector3(0, 10, -6), this._state$ = 0, this._alpha$ = 0,
                this._animT$ = void 0, this._animTotalT$ = 2e3;
        }
        static create$(parent, callback) {
            let bgMaskCtr = parent.addChild(new Laya.Sprite3D()).addComponent(BgMaskControl$);
            return bgMaskCtr.setData$(callback), bgMaskCtr;
        }
        setData$(callback) {
            this.loadedCallback$ = callback;
        }
        onStart() {
            this.owner.transform.position = this.startPos$.clone(), this.createModel$();
        }
        set state$(value) {
            this._state$ = value;
        }
        get state$() {
            return this._state$;
        }
        set alpha$(value) {
            this._alpha$ = value, this.bgMaterial$ && (this.bgMaterial$.alpha$ = value);
        }
        get alpha$() {
            return this._alpha$;
        }
        createModel$() {
            this.modelCtr$ = Mode_GameKey_l3D.create(this.owner, 300, Laya.Handler.create(this, this.onModelLoaded$));
            let scale = this.modelCtr$._config.scale;
            this.modelCtr$.setLocalScale(scale, 2 * scale, scale);
        }
        onModelLoaded$(modelCtr) {
            if (this.destroyed || this.owner.destroyed) return;
            let meshRenderer = Mode_GameKey_lUtils.getMeshObjs$(this.modelCtr$.sprite)[0].meshRenderer,
                lastMaterial = meshRenderer.sharedMaterial;
            this.bgMaterial$ = meshRenderer.sharedMaterial = new BgMaskMaterial$(lastMaterial.albedoTexture, lastMaterial.tilingOffset),
                this.bgMaterial$.alpha$ = this.alpha$, this.loaded$ = !0, this.loadedCallback$ && this.loadedCallback$(),
                this.loadedCallback$ = void 0;
        }
        playShowAnim$(callback) {
            this.state$ = 1, this._animT$ = 0, this._animComplteCallback$ = callback;
        }
        playHideAnim$(callback) {
            this.state$ = 3, this._animT$ = 0, this._animHideCallback$ = callback;
        }
        refreshShowAnim$() {
            this._animT$ += TimeManager$.getInstance$().deltaTime$, this._animT$ >= this._animTotalT$ ? (this.alpha$ = 1,
                this.state$ = 2, this._animComplteCallback$ && this._animComplteCallback$(), this._animComplteCallback$ = void 0) : this.alpha$ = Math.min(1, this._animT$ / this._animTotalT$);
        }
        refreshHideAnim$() {
            this._animT$ += TimeManager$.getInstance$().deltaTime$, this._animT$ >= this._animTotalT$ ? (this.alpha$ = 0,
                this.state$ = 4, this._animHideCallback$ && this._animHideCallback$(), this._animHideCallback$ = void 0) : this.alpha$ = 1 - Math.min(1, this._animT$ / this._animTotalT$);
        }
        refreshAnim$() {
            1 == this.state$ ? this.refreshShowAnim$() : 3 == this.state$ && this.refreshHideAnim$();
        }
        onUpdate() {
            this.refreshAnim$();
        }
        onDestroy() {
            this.modelCtr$ && this.modelCtr$.dispose(), this.modelCtr$ = void 0;
        }
    }
    class BgControl$ extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.customIndex$ = Data_GameKey_Manager.getInstance$().userData$.missionProgress$ - 1,
                this.levelConfog$ = Data_GameKey_Manager.getInstance$().drinkData$.getMissionDataByMissionId$(Data_GameKey_Manager.getInstance$().userData$.mission$),
                this.barCounterModel$ = void 0;
        }
        static create$(parent, callback) {
            let bgCtr = parent.addChild(new Laya.Sprite3D()).addComponent(BgControl$);
            return bgCtr.setData$(callback), bgCtr;
        }
        setData$(callback) {
            this._loadedCallback$ = callback;
        }
        onStart() {
            this.createShop$(), this.createBgMask$(), this.createCustoms$(), this.monitorEvents$();
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenMakeJuiceMode$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornOver$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ASK_PLAY_WALK_OUT, this, this.onAskPlayWalkOut$);
        }
        cancelEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenMakeJuiceMode$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornOver$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ASK_PLAY_WALK_OUT, this, this.onAskPlayWalkOut$);
        }
        createLayouts$() {}
        checkLoaded$() {
            this.loaded$ || (this.loaded$ = this.barCounterModel$ && this.barCounterModel$.loaded && this._bgMaskCtr$ && this._bgMaskCtr$.loaded$ && this._curCustom$ && this._curCustom$.loaded$,
                this.loaded$ && (this._loadedCallback$ && this._loadedCallback$(), this._loadedCallback$ = void 0));
        }
        createShop$() {
            this.barCounterModel$ = Mode_GameKey_l3D.create(this.owner, 200, Laya.Handler.create(this, this.onShopLoaded$)),
                this.barCounterModel$.setLocalRotation(180, 0, 0);
        }
        onShopLoaded$() {
            this.checkLoaded$();
        }
        createBgMask$() {
            this._bgMaskCtr$ = BgMaskControl$.create$(this.owner, this.onBgMaskLoaded$.bind(this));
        }
        onBgMaskLoaded$() {
            this.checkLoaded$();
        }
        createCustoms$() {
            let drinkIds = this.levelConfog$.drinkArr,
                curDrinkId = drinkIds[this.customIndex$],
                nextDrinkId = drinkIds[this.customIndex$ + 1],
                curCustomConfig = curDrinkId > 0 ? Data_GameKey_Manager.getInstance$().drinkData$.getDrinkDataByDrinkId$(curDrinkId) : void 0,
                nextCustomConfig = nextDrinkId > 0 ? Data_GameKey_Manager.getInstance$().drinkData$.getDrinkDataByDrinkId$(nextDrinkId) : void 0;
            curCustomConfig && (this._curCustom$ = RoleControl$.create$(this.owner, curCustomConfig.roleId, !0, this.onCurCustomLoaded$.bind(this))),
                nextCustomConfig && (this._nextCustom$ = RoleControl$.create$(this.owner, nextCustomConfig.roleId));
        }
        onCurCustomLoaded$() {
            this.checkLoaded$();
        }
        onAdornOver$(e) {
            this.barCounterModel$.setActive(!0), this._curCustom$ && this._curCustom$.setModelActive$(!0),
                this._nextCustom$ && this._nextCustom$.setModelActive$(!0), this._nextCustom$ && this._nextCustom$.playIdleAnim$(),
                this._curCustom$ && this._curCustom$.drink$(e.data), this._bgMaskCtr$ && this._bgMaskCtr$.playHideAnim$(this.onBgHideAnimComplete$.bind(this));
        }
        onOpenMakeJuiceMode$() {
            this._bgMaskCtr$ && this._bgMaskCtr$.playShowAnim$(this.onOpenJuiceMakeModeComplete$.bind(this));
        }
        onBgHideAnimComplete$() {}
        onAskPlayWalkOut$() {
            this._curCustom$ && this._curCustom$.playWalkOutAnim$();
        }
        onOpenJuiceMakeModeComplete$() {
            this.barCounterModel$.setActive(!1), this._curCustom$ && this._curCustom$.setModelActive$(!1),
                this._nextCustom$ && this._nextCustom$.setModelActive$(!1);
        }
        onJuiceMakeComplete$() {}
        onDestroy() {
            this.barCounterModel$ && this.barCounterModel$.dispose(), this.barCounterModel$ = void 0,
                this.cancelEvents$();
        }
    }
    class CameraMoveScript extends Laya.Script3D {
        constructor() {
            super(), this._tempVector3 = new Laya.Vector3(), this.yawPitchRoll = new Laya.Vector3(),
                this.resultRotation = new Laya.Quaternion(), this.tempRotationZ = new Laya.Quaternion(),
                this.tempRotationX = new Laya.Quaternion(), this.tempRotationY = new Laya.Quaternion(),
                this.rotaionSpeed = 6e-5;
        }
        onAwake() {
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp),
                this.camera = this.owner;
        }
        _onDestroy() {
            Laya.stage.off(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseDown), Laya.stage.off(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseUp);
        }
        onUpdate(state) {
            var elapsedTime = 5 * Laya.timer.delta;
            if (!isNaN(this.lastMouseX) && !isNaN(this.lastMouseY) && this.isMouseDown) {
                this.owner.scene;
                Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-.01 * elapsedTime), Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(.01 * elapsedTime),
                    Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-.01 * elapsedTime), Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(.01 * elapsedTime),
                    Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(.01 * elapsedTime), Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-.01 * elapsedTime);
                var offsetX = Laya.stage.mouseX - this.lastMouseX,
                    offsetY = Laya.stage.mouseY - this.lastMouseY,
                    yprElem = this.yawPitchRoll;
                yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime, yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime,
                    this.updateRotation();
            }
            this.lastMouseX = Laya.stage.mouseX, this.lastMouseY = Laya.stage.mouseY;
        }
        mouseDown(e) {
            this.camera.transform.localRotation.getYawPitchRoll(this.yawPitchRoll), this.lastMouseX = Laya.stage.mouseX,
                this.lastMouseY = Laya.stage.mouseY, this.isMouseDown = !0;
        }
        mouseUp(e) {
            this.isMouseDown = !1;
        }
        moveForward(distance) {
            this._tempVector3.x = 0, this._tempVector3.y = 0, this._tempVector3.z = distance,
                this.camera.transform.translate(this._tempVector3);
        }
        moveRight(distance) {
            this._tempVector3.y = 0, this._tempVector3.z = 0, this._tempVector3.x = distance,
                this.camera.transform.translate(this._tempVector3);
        }
        moveVertical(distance) {
            this._tempVector3.x = this._tempVector3.z = 0, this._tempVector3.y = distance, this.camera.transform.translate(this._tempVector3, !1);
        }
        updateRotation() {
            Math.abs(this.yawPitchRoll.y) < 1.5 && (Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ),
                this.tempRotationZ.cloneTo(this.camera.transform.localRotation), this.camera.transform.localRotation = this.camera.transform.localRotation);
        }
    }
    class MainCameraControl$ extends Laya.Script3D {
        constructor() {
            super(), this.initData$();
        }
        initData$() {
            this.startCameraPos$ = new Laya.Vector3(0, 30, -21), this.startCameraEuler$ = new Laya.Vector3(-17, -180, 0),
                this.doJuiceCameraPos$ = new Laya.Vector3(0, 13.2, -16), this.doJuiceCameraEuler$ = new Laya.Vector3(-2.5, -180, 0),
                this.adornCameraPos$ = new Laya.Vector3(0, 14, -10), this.adornCameraEuler$ = new Laya.Vector3(-27, -180, 0),
                this.adornOverCameraTargetPos$ = new Laya.Vector3(0, 18, -18), this.state$ = 0,
                this.startMoveSpeed$ = .005, this.juiceMoveSpeed$ = .01, this.moveT$ = void 0, this.animTotalT$ = void 0,
                this.tempPos$ = void 0, this.tempRot$ = void 0, this.isShakeCamera$ = !1;
        }
        static create$(parent) {
            let camera = parent.addChild(new Laya.Camera(0, .1, 1e3));
            return camera.clearFlag = 2, camera.addComponent(MainCameraControl$);
        }
        set state$(value) {
            this._state$ = value;
        }
        get state$() {
            return this._state$;
        }
        onStart() {
            let owner = this.owner;
            owner.transform.position = this.doJuiceCameraPos$.clone();
            let euler = owner.transform.rotationEuler;
            euler.z = this.doJuiceCameraEuler$.z, euler.y = this.doJuiceCameraEuler$.y, euler.x = this.doJuiceCameraEuler$.x,
                owner.transform.rotationEuler = euler, Laya.Browser.onPC && owner.addComponent(CameraMoveScript),
                this.monitorEvents$();
        }
        monitorEvents$() {
            Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenMakeJuiceMode$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.START_JUICE, this, this.onJuiceStart$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_START, this, this.onAdornStart$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornEnd$),
                Even_GameKey_tManager.getInstance$().addE_GameKey_ventListener(SSEV_GameKey_ENT.SCENE_LOADED, this, this.onSceneLoaded$);
        }
        cancelEvents$() {
            Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ON_START_GAME, this, this.onOpenMakeJuiceMode$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ADORN_START, this, this.onAdornStart$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.ADORN_OVER, this, this.onAdornEnd$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.SCENE_LOADED, this, this.onSceneLoaded$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.START_JUICE, this, this.onJuiceStart$),
                Even_GameKey_tManager.getInstance$().remo_GameKey_veEventListener(SSEV_GameKey_ENT.FILL_FLUID, this, this.onFillFluid$);
        }
        onSceneLoaded$() {
            this.playStartAnim$();
        }
        onOpenMakeJuiceMode$() {
            this.playMoveToJuicePosAnim$();
        }
        onJuiceStart$(e) {
            this.playShakeAnim$(e.data.fruitConfig$.hard);
        }
        onAdornStart$() {
            this.playMoveToAdornPosAnim$();
        }
        onAdornEnd$() {
            this.playAdornOverAnim$();
        }
        playStartAnim$() {
            this.state$ = 1, this.moveT$ = 0, this.animTotalT$ = Laya.Vector3.distance(this.doJuiceCameraPos$, this.startCameraPos$) / this.startMoveSpeed$;
        }
        playMoveToJuicePosAnim$() {
            this.state$ = 2, this.moveT$ = 0, this.animTotalT$ = Laya.Vector3.distance(this.doJuiceCameraPos$, this.startCameraPos$) / this.juiceMoveSpeed$;
        }
        playMoveToAdornPosAnim$() {
            this.state$ = 4, this.moveT$ = 0, this.animTotalT$ = Laya.Vector3.distance(this.adornCameraPos$, this.doJuiceCameraPos$) / this.juiceMoveSpeed$;
        }
        playAdornOverAnim$() {
            this.state$ = 6, this.moveT$ = 0, this.animTotalT$ = Laya.Vector3.distance(this.adornCameraPos$, this.adornOverCameraTargetPos$) / this.startMoveSpeed$;
        }
        playShakeAnim$(hard) {
            this.isShakeCamera$ || (this.shakeOffsetAngle$ = 2 + 10 * hard * hard, this.singleShakeT$ = 100,
                this.shakeCountT$ = 0, this.shakeDirection$ = Math.random() > .5 ? 1 : -1, this.shakeCutPara$ = .7,
                this.isShakeCamera$ = !0);
        }
        refreshAnim$() {
            1 == this.state$ ? this.refreshMoveToStartPosAnim$() : 2 == this.state$ ? this.refreshMoveToDoJuicePosAnim$() : 4 == this.state$ ? this.refreshMoveAdornPosAnim$() : 6 == this.state$ && this.refreshAdornOverAnim$(),
                this.refreshShakeAnim$();
        }
        refreshShakeAnim$() {
            if (!this.isShakeCamera$) return;
            this.shakeCountT$ += TimeManager$.getInstance$().deltaTime$;
            let p = Math.min(1, this.shakeCountT$ / this.singleShakeT$);
            this.tempRot$ = this.owner.transform.rotationEuler, this.tempRot$.z = (p > .5 ? 1 - p : p) * this.shakeDirection$ * this.shakeOffsetAngle$,
                this.owner.transform.rotationEuler = this.tempRot$, this.shakeCountT$ >= this.singleShakeT$ && (this.shakeDirection *= -1,
                    this.shakeCountT$ -= this.singleShakeT$, this.singleShakeT$ *= this.shakeCutPara$,
                    this.shakeOffsetAngle$ *= this.shakeCutPara$, this.shakeOffsetAngle$ < 1 && (this.isShakeCamera$ = !1));
        }
        refreshAdornOverAnim$() {
            if (this.moveT$ += TimeManager$.getInstance$().deltaTime$, this.moveT$ >= this.animTotalT$) this.onAdornOverAnimComplete$();
            else {
                let p = Math.min(1, this.moveT$ / this.animTotalT$);
                this.tempPos$ = this.owner.transform.position, Laya.Vector3.lerp(this.adornCameraPos$, this.adornOverCameraTargetPos$, p, this.tempPos$),
                    this.owner.transform.position = this.tempPos$, this.tempRot$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.adornCameraEuler$, this.startCameraEuler$, p, this.tempRot$),
                    this.owner.transform.rotationEuler = this.tempRot$;
            }
        }
        refreshMoveToDoJuicePosAnim$() {
            if (this.moveT$ += TimeManager$.getInstance$().deltaTime$, this.moveT$ >= this.animTotalT$) this.onMoveToDoJuicePosAnimComplete$();
            else {
                let p = Math.min(1, this.moveT$ / this.animTotalT$);
                this.tempPos$ = this.owner.transform.position, Laya.Vector3.lerp(this.startCameraPos$, this.doJuiceCameraPos$, p, this.tempPos$),
                    this.owner.transform.position = this.tempPos$, this.tempRot$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.startCameraEuler$, this.doJuiceCameraEuler$, p, this.tempRot$),
                    this.owner.transform.rotationEuler = this.tempRot$;
            }
        }
        refreshMoveAdornPosAnim$() {
            if (this.moveT$ += TimeManager$.getInstance$().deltaTime$, this.moveT$ >= this.animTotalT$) this.onMoveAdornPosAnimComplete$();
            else {
                let p = Math.min(1, this.moveT$ / this.animTotalT$);
                this.tempPos$ = this.owner.transform.position, Laya.Vector3.lerp(this.doJuiceCameraPos$, this.adornCameraPos$, p, this.tempPos$),
                    this.owner.transform.position = this.tempPos$, this.tempRot$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.doJuiceCameraEuler$, this.adornCameraEuler$, p, this.tempRot$),
                    this.owner.transform.rotationEuler = this.tempRot$;
            }
        }
        onAdornOverAnimComplete$() {
            this.state$ = 7, this.owner.transform.position = this.adornOverCameraTargetPos$,
                this.owner.transform.rotationEuler = this.startCameraEuler$.clone();
        }
        onMoveAdornPosAnimComplete$() {
            this.state$ = 5, this.owner.transform.position = this.adornCameraPos$.clone(), this.owner.transform.rotationEuler = this.adornCameraEuler$.clone(),
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ARRIVE_ADORN_POS);
        }
        onMoveToDoJuicePosAnimComplete$() {
            this.owner.transform.position = this.doJuiceCameraPos$.clone(), this.owner.transform.rotationEuler = this.doJuiceCameraEuler$.clone(),
                this.state$ = 3, Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ARRIVE_JUICE_POS);
        }
        refreshMoveToStartPosAnim$() {
            if (this.moveT$ += TimeManager$.getInstance$().deltaTime$, this.moveT$ >= this.animTotalT$) this.onMoveToStartPosAnimComplete$();
            else {
                let p = Math.min(1, this.moveT$ / this.animTotalT$);
                this.tempPos$ = this.owner.transform.position, Laya.Vector3.lerp(this.doJuiceCameraPos$, this.startCameraPos$, p, this.tempPos$),
                    this.owner.transform.position = this.tempPos$, this.tempRot$ = this.owner.transform.rotationEuler,
                    Laya.Vector3.lerp(this.doJuiceCameraEuler$, this.startCameraEuler$, p, this.tempRot$),
                    this.owner.transform.rotationEuler = this.tempRot$;
            }
        }
        onMoveToStartPosAnimComplete$() {
            this.owner.transform.position = this.startCameraPos$.clone(), this.owner.transform.rotationEuler = this.startCameraEuler$.clone(),
                this.state$ = 0;
        }
        getUIPos$(pos3d, out) {
            return out = out || new Laya.Vector3(), this.owner.worldToViewportPoint(pos3d, out),
                out;
        }
        onUpdate() {
            this.refreshAnim$();
        }
        onDestroy() {
            this.cancelEvents$();
        }
    }
    class BattleScene$ extends Base_GameKey_Scene {
        constructor() {
            super(), window.curScene = this, this.init$();
        }
        init$() {
            this.initData$(), this.refreshData$(), this.monitorEvents$(), this.createScene$(),
                this.createCamera$(), this.createBg$(), this.createPlayer$();
        }
        initData$() {
            this.fight_state$ = 0;
        }
        refreshData$() {
            this.isLoadedScene$ = !1;
        }
        startFight$() {
            this.fight_state$ = 1;
        }
        resetFight$() {
            this.refreshData$(), this.baseScene$.destroy(), this.baseScene$ = this.rootScene$.addChild(new Laya.Sprite3D()),
                this.createCamera$(), this.createBg$(), this.createPlayer$(), this.fight_state$ = 0;
        }
        monitorEvents$() {
            this.addE_GameKey_ventListener(SSEV_GameKey_ENT.ON_START_GAME, this.startFight$),
                this.addE_GameKey_ventListener(SSEV_GameKey_ENT.REST_FIGHT, this.resetFight$);
        }
        createScene$() {
            this.rootScene$ = this.addChild(new Laya.Scene3D()), this.rootScene$.ambientColor = new Laya.Vector3(.5, .5, .5);
            var directionLight = new Laya.DirectionLight();
            directionLight.color = new Laya.Vector3(.5, .5, .5), this.directionLight = directionLight;
            var mat = directionLight.transform.worldMatrix;
            mat.setForward(new Laya.Vector3(.7, -2, 1.8)), directionLight.transform.worldMatrix = mat,
                directionLight.shadowDistance = 100, directionLight.shadowResolution = 512, directionLight.shadowPSSMCount = 1,
                directionLight.shadowPCFType = 0, this.rootScene$.addChild(directionLight), this.baseScene$ = this.rootScene$.addChild(new Laya.Sprite3D());
        }
        createCamera$() {
            this.camera$ = MainCameraControl$.create$(this.baseScene$);
        }
        createPlayer$() {
            this.playerCtr$ = PlayerControl$.create$(this.baseScene$, this.onPlayerLoded$.bind(this));
        }
        createBg$() {
            this.bgCtr$ = BgControl$.create$(this.baseScene$, this.onBgLoded$.bind(this));
        }
        onPlayerLoded$() {
            this.checkAllLoaded$();
        }
        onBgLoded$() {
            this.checkAllLoaded$();
        }
        checkAllLoaded$() {
            this.playerCtr$ && this.playerCtr$.loaded$ && this.bgCtr$ && this.bgCtr$.loaded$ && (this.isLoadedScene$ = !0,
                Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.SCENE_LOADED));
        }
        get isFight$() {
            return 1 == this.fight_state$;
        }
        getUIPos$(pos, out) {
            return this.camera$.getUIPos$(pos, out);
        }
    }
    BattleScene$.url = "Scene/BattleScene.scene", BattleScene$.className = "BattleScene$";
    class PgdkDataQyWx$ extends Laya.Script {
        constructor() {
            super(), this.coupletKey = null, this.sliderKey = null, this.carouselKey = null,
                this.dialogKey = null, this.gameoverKey = null, this.copyWxKey = null, this.reviveKey = null,
                this._config = [], this.cache = {
                    slider: [],
                    couplet: [],
                    carousel: [],
                    gameover: [],
                    dialog: [],
                    dialogFriendGames: [],
                    copyWx: [],
                    revive: []
                };
        }
        onStart() {
            // "undefined" != typeof AdvManager ? this.init$() : console.error("趣游文件未正确引入");
        }
        init$() {
            this._config = [{
                name: "slider",
                key: this.sliderKey,
                data: []
            }, {
                name: "couplet",
                key: this.coupletKey,
                data: []
            }, {
                name: "carousel",
                key: this.carouselKey,
                data: []
            }, {
                name: "gameover",
                key: this.gameoverKey,
                data: []
            }, {
                name: "dialog",
                key: this.dialogKey,
                data: []
            }, {
                name: "dialogFriendGames",
                key: this.carouselKey,
                data: []
            }, {
                name: "copyWx",
                key: this.copyWxKey,
                data: []
            }, {
                name: "revive",
                key: this.reviveKey,
                data: []
            }], this.getAdData$();
        }
        getAdData$() {
            let self = this;
            if (!window.wx) {
                let testData = [{
                    appid: "wx4fbc709c03523c0d",
                    logo: "https://img.2960.net/2019-08-06/129f821be99f996d30c8cc57dbf7eea0.png",
                    title: "几何风暴暴暴暴"
                }, {
                    appid: "wxccad312b6eb6d15f",
                    logo: "https://img.2960.net/2019-08-06/dca32ac117dae6d96080151622b9ebea.png",
                    title: "几何风暴"
                }, {
                    appid: "wx56929af85b4ee605",
                    logo: "https://img.2960.net/2019-08-06/5a138ed07be51e4fa9b20900a61b976a.png",
                    title: "几何风暴"
                }, {
                    appid: "wxc83cf066206e8d5f",
                    logo: "https://img.2960.net/2019-08-06/e9bc201c4813c887403e36bb6dfe8402.png",
                    title: "几何风暴"
                }, {
                    appid: "wx1cd174e398e50d0b",
                    logo: "https://img.2960.net/2019-08-06/c97275cd397e63de950f7494e7b3ef00.png",
                    title: "几何风暴"
                }, {
                    appid: "wxa4668e10c31f77c0",
                    logo: "https://img.2960.net/2019-08-06/7b3f0adbac29079dba7a40ac628fd1df.png",
                    title: "几何风暴"
                }, {
                    appid: "wxaa07a343502af86c",
                    logo: "https://img.2960.net/2019-08-06/ad445412a0bb84ce92081d78588d4097.png",
                    title: "几何风暴"
                }, {
                    appid: "wx5bcd76a8aa2089f1",
                    logo: "https://img.2960.net/2019-08-06/b7499e5ae018eec269827bb341493f99.jpg",
                    title: "几何风暴"
                }, {
                    appid: "wx4afb4917e558d198",
                    logo: "https://img.2960.net/2019-08-06/eae9615bf03a5f8c96a12a326fa9e937.png",
                    title: "几何风暴"
                }, {
                    appid: "wxeee627401171c2a3",
                    logo: "https://img.2960.net/2019-08-06/9132ca95d9e7be8f18df77b24ccc9388.png",
                    title: "几何风暴"
                }];
                return self.cache.slider = testData, self.cache.couplet = testData, self.cache.carousel = testData,
                    self.cache.gameover = testData, self.cache.dialog = testData, self.cache.dialogFriendGames = testData,
                    self.cache.copyWx = testData, self.cache.revive = testData, self.data$ = self.cache,
                    self.formatData$(), pgdk$.isSdkReady$ = !0, new Promise((r, s) => {
                        r();
                    });
            }
            return this.initQyAd$();
        }
        initQyAd$() {
            let self = this,
                keyArray = [];
            self._config.forEach(a => keyArray.push(a.key));
            let keys = keyArray.join(",");
            return new Promise((r, s) => {
                AdvManager.getIconButtons(keys, d => {
                    r(d), s();
                });
            }).then(results => {
                for (let i = 0; i < self._config.length; i++) {
                    let item = self._config[i];
                    if (item.data = results[item.key], self.cache[item.name] && (self.cache[item.name] = results[item.key],
                            self.cache[item.name]))
                        for (let j = 0; j < self.cache[item.name].length; j++) {
                            let logo_attr = self.cache[item.name][j].logo_attr;
                            self.cache[item.name][j].logoData = self.adIs_gif(logo_attr);
                        }
                }
                self.data$ = self.cache, self.formatData$(), pgdk$.isSdkReady$ = !0;
            });
        }
        adIs_gif(logo_attr) {
            if (Array.isArray(logo_attr) && logo_attr.length > 0) {
                let element, gifs = [];
                for (let i = 0; i < logo_attr.length; i++)(element = logo_attr[i]).frame_count && element.frame_count > 1 && gifs.push(element);
                return 0 != gifs.length ? {
                    gifData: gifs,
                    array: logo_attr
                } : {
                    gifData: null,
                    array: logo_attr
                };
            }
            return {
                gifData: null,
                array: logo_attr
            };
        }
        formatData$() {
            if (window.wx) {
                for (const key in this.data$)
                    if (this.data$.hasOwnProperty(key)) {
                        const elements = this.data$[key];
                        if (!elements) return;
                        for (let i = 0; i < elements.length; i++) {
                            let ad = elements[i];
                            ad.title = ad.title, ad.img = ad.logoData;
                        }
                    }
            } else
                for (const key in this.data$)
                    if (this.data$.hasOwnProperty(key)) {
                        const elements = this.data$[key];
                        if (!elements) return;
                        for (let i = 0; i < elements.length; i++) {
                            let ad = elements[i];
                            ad.title = ad.title, ad.img = ad.logo;
                        }
                    }
        }
        getAds$(type) {
            return this.data$[type];
        }
    }
    class PgRecentUse$ extends PgViewBase {
        constructor() {
            super(), this.viewName$ = "最近使用", this.iconWidth = 80, this.iconMaskSkin$ = "sdk/image_circle.png",
                this.starSkin$ = "sdk/image_star.png", this.backSkin$ = "sdk/image_back.png", this.dataType$ = "copyWx";
        }
        static create$(onClose) {
            if (pgdk$.isShowExit$()) {
                if (pgdk$.hideBanner$(), Laya.recentUseUI$) return Laya.stage.addChild(Laya.recentUseUI$),
                    Laya.recentUseUI$.getComponent(PgRecentUse$).resetList$(), Laya.recentUseUI$; {
                    let recentUseUI = Laya.stage.addChild(new Laya.Box());
                    recentUseUI.zOrder = 999999999, recentUseUI.bgColor = "#FF0000", recentUseUI.name = "RecentUseUI",
                        recentUseUI.viewName = "最近使用", recentUseUI.addComponent(PgTopView$), recentUseUI.addComponent(PgRecentUse$).setWidget$(recentUseUI, 0, 0, 0, 0),
                        Laya.recentUseUI$ = recentUseUI;
                }
            } else onClose && onClose();
        }
        onStart() {
            this.initUI$(), this.executeWhenSdkReady$(this, this.createList$.bind(this));
        }
        initUI$() {
            this.createBg$(), this.createHeader$(), this.createBackButton$();
        }
        addChild(node) {
            return this.owner.addChild(node);
        }
        createBg$() {
            let bg = this.addChild(new Laya.Box());
            bg.bgColor = "#FFFFFF", this.setWidget$(bg, 0, 0, 0, 0);
        }
        createHeader$() {
            this.head = this.addChild(new Laya.Box()), this.head.bgColor = "#F0F0F0", this.head.height = 150,
                this.addChild(this.head), this.setWidget$(this.head, 0, null, 0, 0);
        }
        createBackButton$() {
            let backArea = this.head.addChild(new Laya.Box());
            backArea.width = 200, backArea.height = 100, this.setWidget$(backArea, null, 0, 0, null);
            let arrow = backArea.addChild(new Laya.Image());
            arrow.left = 20, arrow.centerY = 0, arrow.width = 25, arrow.height = 43, arrow.skin = this.backSkin$;
            let title = this.createLabel$(backArea, 26, "最近使用", "#000000");
            title.left = 60, title.centerY = 0, backArea.on(Laya.Event.CLICK, this, function() {
                this.active = !1, this.parent$ = this.parent, this.owner.removeSelf();
            }.bind(this));
        }
        resetList$() {
            this.list$ && (this.list$.array = pgdk$.unsortedAds$(this.dataType$));
        }
        createList$() {
            this.list$ = this.addChild(this.createBaseList$(!1)), this.setWidget$(this.list$, 150, 0, 0, 0),
                this.list$.renderHandler = new Laya.Handler(this, this.renderHandler$), this.list$.itemRender = {
                    type: "Box",
                    props: {
                        width: 720,
                        height: 150,
                        left: 0,
                        right: 0
                    }
                }, this.resetList$();
        }
        renderHandler$(cell, index) {
            if (0 === cell.numChildren) {
                let line = cell.addChild(new Laya.Box());
                line.bgColor = "#F0F0F0", line.height = 2, this.setWidget$(line, null, 2, 100, 0),
                    cell.addChild(line), cell.icon$ = cell.addChild(new Laya.Image()), cell.icon$.name = "GameIcon",
                    cell.icon$.x = 40, cell.icon$.centerY = .5, cell.icon$.width = cell.icon$.height = this.iconWidth,
                    this.setIcon$(cell);
                let mask = new Laya.Image();
                mask.width = mask.height = this.iconWidth, mask.skin = this.iconMaskSkin$, cell.icon$.mask = mask,
                    cell.title$ = this.createLabel$(cell, 24, cell.dataSource.title, "#000000"), cell.title$.anchorX = 0,
                    cell.title$.centerY = .5, this.setWidget$(cell.title$, null, null, 220, null), cell.star$ = cell.addChild(new Laya.Image()),
                    cell.star$.width = cell.star$.height = 50, cell.star$.centerY = .5, cell.star$.skin = this.starSkin$,
                    this.setWidget$(cell.star$, null, null, null, 80);
            }
            this.setIcon$(cell), cell.title$.text = cell.dataSource.title, cell.star$.visible = Math.random() < .2,
                this.registerAdClickEvent$(cell, this.viewName$);
        }
        setIcon$(cell) {
            let singleData, imgData = cell.dataSource.img;
            if ("string" == typeof imgData) cell.icon$.skin = imgData;
            else if (Object.keys(imgData).length)
                for (const key in imgData)
                    if (imgData.hasOwnProperty(key)) {
                        const elements = imgData[key];
                        if ("gifData" === key && elements && Object.keys(elements).length) {
                            let gifIcon = new PgGifIcon$({
                                    width: 150,
                                    height: 150
                                }),
                                gif = cell.icon$.addChild(gifIcon);
                            singleData = pgdk$.arrayRandom(elements), gif.setImage(singleData);
                        } else if ("array" === key && elements && Object.keys(elements).length) {
                            singleData = pgdk$.arrayRandom(elements), cell.icon$.skin = singleData.path;
                            break;
                        }
                    }
        }
    }
    class PgExitButton$ extends PgViewBase {
        constructor() {
            super(), this.skin$ = null, this.position$ = "right";
        }
        onStart() {
            this.init$();
        }
        init$() {
            pgdk$.isParamGot$ || Laya.timer.once(1e3, this, this.init$), pgdk$.isShowExit$() && this.initUI$();
        }
        initRightTopCloseBtn$() {
            if ("undefined" != typeof wx && wx.getMenuButtonBoundingClientRect) {
                let rect = wx.getMenuButtonBoundingClientRect();
                if (!rect) return;
                if (0 === rect.left) return Laya.timer.once(100, this, this.initRightTopCloseBtn$),
                    0;
                this.ui$.visible = !0;
                let ratioW = Laya.stage.width / Laya.Browser.clientWidth,
                    ratioH = Laya.stage.height / Laya.Browser.clientHeight;
                this.ui$.width = rect.width * ratioW, this.ui$.height = rect.height * ratioH, "left" === this.position$ ? (this.ui$.top = rect.top * ratioH,
                    this.ui$.left = 20) : (this.ui$.top = rect.bottom * ratioH, this.ui$.left = rect.left * ratioW);
            }
        }
        initUI$() {
            this.ui$ = new Laya.Image(), Laya.stage.addChild(this.ui$), this.ui$.zOrder = 9999999999,
                this.ui$.name = "ButtonExit", this.ui$.skin = this.skin$, this.ui$.width = 130,
                this.ui$.height = 50, "left" === this.position$ ? this.setWidget$(this.ui$, 40, null, 20, null) : this.setWidget$(this.ui$, 100, null, 570, null),
                Laya.btnRightTopExit$ = this.ui$, this.initRightTopCloseBtn$(), this.ui$.on(Laya.Event.CLICK, this.ui$, function() {
                    PgRecentUse$.create$();
                }.bind(this.ui$));
        }
    }
    class Pgdkwx$ extends Laya.Script {
        constructor() {
            super(), this._banners$ = [], this.MIN_BANNER_WIDTH$ = 300, this.MIN_BANNER_HEIGHT$ = 122;
        }
        onStart() {
            this.initShare$(), this.isVideoActive$ && this.initVideoAd$(), this.isInsertActive$ && this.initInterstitialAd$(),
                this._refreshBanner$();
        }
        onUpdate() {
            this._refreshBanner$();
        }
        navigate2Mini$(data, viewName, success, cancel) {
            "undefined" != typeof wx ? wx.navigateToMiniProgram && data.appid && wx.navigateToMiniProgram({
                appId: data.appid,
                path: data.path,
                fail: function(err) {
                    err && console.log(err.errMsg), err && err.errMsg && -1 !== err.errMsg.indexOf("cancel") && (console.debug("取消导出"),
                        cancel && cancel());
                },
                success: function() {
                    success && success();
                }
            }) : console.warn("非微信环境，无法跳转", data);
        }
        showBanner$(rect, widget) {
            this.isAdActive$ && (this._needBanner$ = !0, console.log(now$(), "显示广告"), "undefined" != typeof wx && wx.createBannerAd && (this._banners$.length >= 2 && this._hideBanner$(),
                this._banners$.length > 0 && (this._curBanner$ = this._banners$[0], this._curBanner$.startShowTime$ = Date.now(),
                    this._curBanner$.rect$ = rect, this._curBanner$.widget$ = widget, this._curBanner$.show(),
                    this._resizeBannerPos$(this._curBanner$, rect, widget)), this._createBanner$(!0, rect, widget)));
        }
        hideBanner$() {
            this._needBanner$ = !1, this._hideBanner$();
        }
        _hideBanner$() {
            if (console.log(Date.now(), "隐藏广告"), "undefined" == typeof wx) return;
            if (!this._curBanner$) return;
            if (0 === this._banners$.length) return;
            let banner = this._banners$.removeAt$(0);
            if (banner.hide(), this._banners$.length >= 1 && banner.$showTime > 3e4) {
                console.log(Date.now(), "销毁广告");
                let args = [this._curBanner$.$id, !1, this._curBanner$.style.left, this._curBanner$.style.top, this._curBanner$.style.height];
                this._curBanner$.destroy(), this._curBanner$ = void 0, this.__createBanner$(args);
            } else this._curBanner$ = void 0, this._banners$.push(banner);
        }
        _createBanner$(show, rect, widget) {
            if ("undefined" == typeof wx || !wx.createBannerAd) return;
            if (this.bannerIds$.length <= 0) return;
            let bannerId = this.bannerIds$.removeAt$(Math.floor(Math.random() * this.bannerIds$.length));
            this.__createBanner$([bannerId, show, rect, widget]);
        }
        __createBanner$(args) {
            if (!args) return;
            console.log(now$(), "创建广告");
            let bannerId = args[0],
                show = args[1],
                rect = args[2],
                widget = args[3],
                banner = wx.createBannerAd({
                    adUnitId: bannerId,
                    style: {
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    }
                });
            banner.id$ = bannerId, banner.onLoad$ = function() {
                this._onBannerLoad$(banner, show, rect, widget);
            }.bind(this), banner.onError$ = function(errMsg) {
                console.warn("广告加载失败:"), console.warn(errMsg), this.destroy && this.destroy(), setTimeout(this.__createBanner$.bind(this, args), 3e3, args);
            }.bind(this), banner.onLoad(banner.onLoad$.bind(banner)), banner.onError(banner.onError$.bind(banner, args));
        }
        _onBannerLoad$(banner, show, rect, widget) {
            this._needBanner$ && show && !this._curBanner$ ? (this._curBanner$ = banner, this._curBanner$.startShowTime$ = Date.now(),
                this._curBanner$.rect$ = rect, this._curBanner$.widget$ = widget, this._curBanner$.show(),
                this._banners$.insert$(0, banner), this._resizeBannerPos$(banner, rect, widget)) : this._banners$.push(banner);
        }
        _resizeBannerPos$(banner, rect, widget) {
            if (rect.width / rect.height > banner.style.realWidth / banner.style.realHeight) {
                if (banner.style.realHeight > rect.height && banner.style.realWidth > this.MIN_BANNER_WIDTH$) {
                    let targetWidth = Math.max(this.MIN_BANNER_WIDTH$, banner.style.realWidth / (banner.style.realHeight / rect.height));
                    banner.style.width = targetWidth;
                }
            } else "undefined" != typeof cc ? banner.style.width = Math.min(cc.view.getFrameSize().width, Math.max(this.MIN_BANNER_WIDTH$, rect.width)) : "undefined" != typeof Laya && (banner.style.width = Math.min(Laya.Browser.clientWidth, Math.max(this.MIN_BANNER_WIDTH$, rect.width)));
            let height = banner.style.realHeight / banner.style.realWidth * banner.style.width;
            "number" == typeof widget.top && "number" != typeof widget.bottom ? banner.style.top = rect.top : "number" != typeof widget.top && "number" == typeof widget.bottom ? banner.style.top = rect.top + rect.height - height : banner.style.top = rect.top + rect.height / 2 - height / 2,
                "number" == typeof widget.left && "number" != typeof widget.right ? banner.style.left = rect.left : "number" != typeof widget.left && "number" == typeof widget.right ? banner.style.left = rect.left + rect.width - banner.style.width : banner.style.left = rect.left + rect.width / 2 - banner.style.width / 2;
        }
        _refreshBanner$() {
            this._needBanner$ && this._curBanner$ && (Date.now() - this._curBanner$.startShowTime$ > this.bannerShowSpacing$ ? (this.showBanner$(this._curBanner$.rect$, this._curBanner$.widget$),
                console.log(now$(), "刷新Banner")) : this._resizeBannerPos$(this._curBanner$, this._curBanner$.rect$, this._curBanner$.widget$));
        }
        initInterstitialAd$() {
            this.createInterstitialAd$();
        }
        createInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createInterstitialAd ? this.insertUnitId$ ? (this._curInterstitialAd$ = wx.createInterstitialAd({
                adUnitId: this.insertUnitId$
            }), this._curInterstitialAd$.onClose(function() {
                this.createInterstitialAd$();
            }.bind(this))) : console.warn(now$(), "未配置插屏广告ID") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        showInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createInterstitialAd ? this._curInterstitialAd$ ? this._curInterstitialAd$ && this._curInterstitialAd$.show().catch(err => {
                console.error(err);
            }) : console.warn(now$(), "请先使用initInterstitialAd$()，预加载插屏广告") : console.warn(now$(), "非微信环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        initShare$() {
            if (window.wx && wx.showShareMenu(), window.wx && wx.updateShareMenu({
                    withShareTicket: !0
                }), this.shares = [{
                    title: "我发现了一种好喝的果汁！",
                    imageUrl: "share/share1.jpg"
                }, {
                    title: "榨汁100%，我榨的汁是万里挑一！",
                    imageUrl: "share/share1.jpg"
                }], !window.wx) return;
            let share = this.shares[Math.floor(this.shares.length * Math.random())];
            wx.onShareAppMessage(function() {
                return {
                    title: share.title,
                    imageUrl: share.imageUrl
                };
            });
        }
        share$() {
            if (!window.wx) return;
            this.onShare = !0;
            let share = this.shares[Math.floor(this.shares.length * Math.random())];
            wx.shareAppMessage({
                title: share.title,
                imageUrl: share.imageUrl
            });
        }
        initVideoAd$() {
            this.hasVideoInit$ || (this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5,
                this.createVideoAd$(), this.hasVideoInit$ = !0);
        }
        createVideoAd$() {
            this.isAdActive$ ? "undefined" != typeof wx && wx.createRewardedVideoAd ? this.videoUnitId$ ? this._videoAd$ || (this._videoAd$ = wx.createRewardedVideoAd({
                adUnitId: this.videoUnitId$
            }), this._videoAd$.onLoad(function() {
                this._videoErrorTimes = 0, console.log(now$(), "激励式视频加载成功");
            }.bind(this)), this._videoAd$.onClose(function(res) {
                this._videoCloseCallback$ && (this._videoCloseCallback$(!res || res.isEnded), this._videoCloseCallback$ = void 0);
            }.bind(this)), this._videoAd$.onError(function(err) {
                this._videoErrorTimes++, this._videoErrorTimes >= this._maxVideoErrorTimes ? console.warn(now$(), "激励式视频加载失败次数过多, 停止重试。 ") : (console.warn(now$(), "激励式视频加载失败, 重试" + this._videoErrorTimes),
                    console.warn(err), this._videoAd$.load());
            }.bind(this))) : console.warn(now$(), "未配置激励式视频ID") : console.warn(now$(), "非微信环境，无法创建激励式视频") : console.warn(now$(), "流量主未开通，无法创建激励式视频");
        }
        showVideoAd$(callback) {
            return this.isAdActive$ ? "undefined" != typeof wx && wx.createRewardedVideoAd ? void(this._videoAd$ ? !this._videoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? callback && callback(!1) : (this._videoCloseCallback$ = callback,
                this._videoAd$.show()) : console.error(now$(), "请先使用initVideoAd$()，预加载激励式视频")) : (console.warn(now$(), "非微信环境，无法播放激励式视频。当做成功回调。"),
                void(callback && callback(!0))) : (console.warn(now$(), "流量主未开通，无法创建激励式视频。当做成功回调。"),
                void(callback && callback(!0)));
        }
        getHeadIconSp$(iconW, iconH, spaceX, spaceY, row, column, sp) {
            if (!window.wx) return;
            let len = row * column,
                self = this;
            if (!self.sharedCanvas) {
                var openDataContext = wx.getOpenDataContext();
                self.sharedCanvas = openDataContext.canvas;
            }
            let allW = column * iconW + (column - 1) * spaceX,
                allH = row * iconH + (row - 1) * spaceY;
            self.sharedCanvas.width = allW, self.sharedCanvas.height = allH, sp = sp || new Laya.Sprite();
            var texture2D = new Laya.Texture2D(0, 0, Laya.TextureFormat.R8G8B8A8, !0, !0);
            texture2D.loadImageSource(self.sharedCanvas), self.shareTexture = new Laya.Texture(texture2D),
                self.shareTexture.bitmap.alwaysChange = !1;
            let vColumn, vRow, style = {
                    friendcontainer: {
                        width: allW,
                        height: allH
                    }
                },
                html = "<view id='friendcontainer'>",
                i = len;
            for (; --i > -1;) html += "<image id='headicon" + i + "' src=''></image>", vColumn = i % column + 1,
                vRow = Math.floor(i / column) + 1, style["headicon" + i] = {
                    width: iconW,
                    height: iconH,
                    position: "absolute",
                    left: (iconW + spaceX) * (vColumn - 1),
                    top: (iconH + spaceY) * (vRow - 1)
                };
            let data = {
                type: "refresh",
                row: row,
                column: column,
                w: iconW,
                h: iconH,
                spaceX: spaceX,
                spaceY: spaceY,
                html: html += "</view>",
                style: style
            };
            wx.postMessage(JSON.stringify(data)), sp.refreshCountT = 5e3, sp.visible = !0, sp.graphics.clear(),
                sp.graphics.drawTexture(self.shareTexture, 0, 0, self.shareTexture.width, self.shareTexture.height);
            return sp.intervalId > 0 && clearInterval(sp.intervalId), sp.intervalId = setInterval(function() {
                sp.destroyed ? clearInterval(sp.intervalId) : (self.shareTexture.bitmap.loadImageSource(self.sharedCanvas),
                    sp.refreshCountT -= 100, sp.refreshCountT < 0 && clearInterval(sp.intervalId));
            }, 100), sp;
        }
    }
    class PgdkQyWx$ extends Pgdkwx$ {
        constructor() {
            super();
        }
        navigate2Mini$(data, viewName, success, cancel) {
            "undefined" != typeof wx ? wx.h_ToMinProgram && data.appid && (data.fail = function(err) {
                err && console.log(err.errMsg), err && err.errMsg && -1 !== err.errMsg.indexOf("cancel") && (console.debug("取消导出"),
                    "最近使用" != viewName && "好友热玩" != viewName && "游戏中心" != viewName && PgGameCenter$.create(),
                    cancel && cancel());
            }, data.success = function() {
                success && success();
            }, data.appId = data.appid, wx.h_ToMinProgram(data)) : console.warn("非微信环境，无法跳转", data);
        }
    }
    class BattleSceneOppo$ extends BattleScene$ {
        constructor() {
            super();
        }
    }
    BattleSceneOppo$.url = "Scene/BattleSceneOppo.scene", BattleSceneOppo$.className = "BattleSceneOppo$";
    class PgdkDataQyOppo$ extends Laya.Script {
        constructor() {
            super();
        }
    }
    class PgdkOppo$ extends Laya.Script {
        constructor() {
            super(), this.channel$ = null, this.appId$ = null, this.isAdActive$ = !0, this.nativeAdIds$ = [],
                this.bannerId$ = null, this.isVideoActive$ = null, this.videoUnitId$ = null, this.isInsertActive$ = !0,
                this.insertUnitId$ = null, this.sysInfo = {}, this.nativeAds$ = [], this.userId = "";
        }
        onStart() {
            this.init$();
        }
        init$() {
            console.log("tcy oppoSDK初始化"), this.getSceneInfo$(), this.curBannerAd$ = void 0,
                this.curVideoAd$ = void 0, this.curNativeAd$ = void 0, this.bannerStatus$ = -1,
                this._initVideo$(), this.createNativeAds$(), this._createInterstitialAd$();
        }
        navigate2Mini$(data, viewName, success, fail) {
            if (pgdk$.dataHandler$.navigate2Mini$) pgdk$.dataHandler$.navigate2Mini$(data, viewName, success, fail);
            else {
                var extraData = data.extraData || {};
                extraData.from = this.appId$, qg.navigateToMiniGame({
                    pkgName: data.pkg_name,
                    path: data.path,
                    extraData: extraData
                });
            }
        }
        getSceneInfo$() {
            window.qg && qg.getSystemInfo({
                success: function(res) {
                    this.sysInfo = res;
                }.bind(this),
                fail: function(err) {
                    console.log("tcy 获取系统信息失败"), console.log(err);
                }.bind(this),
                complete: function(res) {
                    console.log("tcy 获取系统信息接口调用结束"), console.log(res);
                }.bind(this)
            });
        }
        _createBanner$(args) {
            if (!window.qg) return;
            if (!this.isAdActive$) return void console.warn("tcy 广告组未开通，无法创建banner广告");
            if ("undefined" == typeof qg || !qg.createBannerAd) return void console.warn("tcy 非oppo环境，无法创建激banner广告");
            if (!this.bannerId$) return void console.warn("tcy 未配置banner广告ID");
            var screenW = this.sysInfo.screenWidth,
                screenH = this.sysInfo.screenHeight;
            console.log(this.bannerId$), console.log(qg), console.log(window.qg), console.log("tcy 开始创建oppobanner广告"),
                this.curBannerAd$ = qg.createBannerAd({
                    adUnitId: this.bannerId$,
                    style: {
                        left: 0,
                        top: screenH - 100,
                        width: screenW,
                        height: 300
                    }
                });
            let self = this;
            this.curBannerAd$.onLoad(function() {
                console.log("tcy banner加载成功"), self.curBannerAd$.show();
            }), this.curBannerAd$.onError(function(err) {
                console.log("tcy banner加载失败"), console.log(err);
            });
        }
        showBanner$(rect, widget) {
            this._showBanner$(rect, widget);
        }
        _showBanner$(rect, widget) {
            window.qg && 0 != this.bannerStatus$ && (console.log("tcy 展示oppobanner广告"), this.curBannerAd$ ? (console.log("tcy oppobanner存在"),
                this.bannerStatus$ = 0, this.curBannerAd$.show()) : this._createBanner$({
                rect: rect,
                widget: widget
            }));
        }
        hideBanner$() {
            window.qg && 1 != this.bannerStatus$ && (this.curBannerAd$ ? (this.bannerStatus$ = 1,
                this.curBannerAd$.hide()) : this._createBanner$());
        }
        _initVideo$() {
            this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5, this.onVideoLoadOk = !1,
                this._createVideoAd$(), console.log("tcy 初始化视频广告");
        }
        _createVideoAd$() {
            window.qg && (this.isVideoActive$ ? "undefined" != typeof qg && qg.createRewardedVideoAd ? this.videoUnitId$ ? this.curVideoAd$ && "{}" != JSON.stringify(this.curVideoAd$) || (console.log("tcy 创建视频广告"),
                this.curVideoAd$ = qg.createRewardedVideoAd({
                    adUnitId: this.videoUnitId$
                }), this.curVideoAd$.onLoad(function() {
                    this._videoErrorTimes = 0, this.onVideoLoadOk = !0, console.log("tcy 激励式视频加载成功");
                }.bind(this)), this.curVideoAd$.onClose(function(res) {
                    console.log("tcy 关闭视频"), this.curVideoAd$ = void 0, this.onVideoLoadOk = !1, this._videoCloseCallback$ && (console.log("tcy 关闭视频执行回调"),
                        console.log(this._videoCloseCallback$), this._videoCloseCallback$(!res || res.isEnded),
                        this._videoCloseCallback$ = void 0);
                }.bind(this)), this.curVideoAd$.onError(function(err) {
                    this._videoErrorTimes++, this._videoErrorTimes >= this._maxVideoErrorTimes && (console.warn("tcy 激励式视频加载失败次数过多, 停止重试。 "),
                            this._initVideo$()), console.warn("tcy 激励式视频加载失败, 重试" + this._videoErrorTimes),
                        console.warn(JSON.stringify(err)), this.curVideoAd$.load();
                }.bind(this)), this.curVideoAd$.load()) : console.warn("tcy 未配置视频广告ID") : console.warn("tcy 非oppo环境，无法创建视频广告") : console.warn("tcy 广告组未开通，无法创建视频广告"));
        }
        showVideoAd$(callback) {
            return console.log(JSON.stringify(this.isAdActive$)), this.isVideoActive$ ? "undefined" != typeof qg && qg.createRewardedVideoAd ? (console.log("tcy 视频播放"),
                console.log(JSON.stringify(this.curVideoAd$)), this.curVideoAd$ && this.onVideoLoadOk ? (this._videoCloseCallback$ = callback,
                    void this.curVideoAd$.show()) : this.onVideoLoadOk ? !this.curVideoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? (this._novidoTip$("视频点击频繁，请稍后再试"),
                    console.log("tcy 视频加载失败........."), this._initVideo$(), void(callback && callback(!1))) : void 0 : (this._novidoTip$("视频点击频繁，请稍后再试"),
                    void this._initVideo$())) : (console.warn("tcy 非oppo环境，无法播放激励式视频。当做成功回调。"), void(callback && callback(!0))) : (console.warn("tcy 广告组未开通，无法创建激励式视频。当做成功回调。"),
                void(callback && callback(!0)));
        }
        _shakePhone$() {}
        _login$() {
            window.qg && qg.login({
                success: function(res) {
                    var data = JSON.stringify(res.data);
                    console.log("tcy 登录oppo"), console.log(JSON.stringify(data)), this.userId = data.uid;
                }.bind(this),
                fail: function(res) {
                    console.log(JSON.stringify(res));
                }.bind(this)
            });
        }
        getUerId$() {
            return this.userId;
        }
        _novidoTip$(messStr) {
            window.qg && qg.showToast({
                title: messStr
            });
        }
        getNativeAd$(idx) {}
        createNativeAds$() {
            console.log("tcy 原生广告id");
            let nativeId = this.arrayRandom(this.nativeAdIds$);
            this._createNativeAd$(nativeId);
        }
        _createNativeAd$(nativeId) {
            if (console.log("tcy 创建原生广告"), !window.qg) return;
            if (!this.isAdActive$) return void console.warn("tcy 广告组未开通，无法创建原生广告");
            if (!qg.createNativeAd) return void console.warn("tcy 非oppo环境，无法创建原生广告");
            if (!nativeId) return void console.warn("tcy 未配置原生广告ID");
            let nativeAd;
            console.log("tcy 创建原生广告1"), console.log(nativeId);
            try {
                nativeAd = qg.createNativeAd({
                    adUnitId: nativeId
                });
            } catch (e) {
                console.log("tcy 原生广告load.....");
            }
            nativeAd.onLoad(function(res) {
                    console.log("tcy 原生广告加载成功3"), console.log(JSON.stringify(res)), this.nativeAds$ = res.adList,
                        this.curNativeAd$ = nativeAd, this.loadNativelogo$();
                }.bind(this)), nativeAd.onError(function() {
                    console.warn("tcy 原生广告加载失败4:"), console.warn(JSON.stringify(errMsg)), setTimeout(this._creatNativeAd$.bind(this), 3e3);
                }.bind(this)), console.log("tcy 原生广告load2"), console.log(JSON.stringify(nativeAd)),
                nativeAd.load(), this.curNativeAd$ = nativeAd;
        }
        getNativeAdData$() {
            return console.log("tcy 获取原生广告数据"), console.log(JSON.stringify(this.nativeAds$)),
                this.nativeAds$.pop();
        }
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        arrayRandom(array) {
            return array[this.randomInt(0, array.length)];
        }
        loadNativelogo$() {
            if (this.nativeAds$.length <= 0) return;
            this.nativeLogoArr = [];
            let nativeAd, adImgList, imgUrl, i = this.nativeAds$.length;
            for (; --i > -1;)(nativeAd = this.nativeAds$[i]).imgUrlList && (adImgList = nativeAd.imgUrlList,
                imgUrl = this.arrayRandom(adImgList), this.setNativeLogo$(imgUrl, nativeAd));
        }
        setNativeLogo$(url, nativeAd) {
            Laya.loader.load(url, Laya.Handler.create(this, res => {
                nativeAd.logoImg$ = url;
            }));
        }
        nativeClick$(aDId) {
            this.curNativeAd$ ? (console.log("tcy 原生广告点击"), this.curNativeAd$.reportAdShow({
                adId: aDId
            }), this.curNativeAd$.reportAdClick({
                adId: aDId
            }), this.nativeAds$.length <= 0 && (this.curNativeAd$ = void 0, this.nativeAds$ = [],
                this.createNativeAds$())) : console.log("tcy 没有创建原生广告");
        }
        closeNativeAd$(aDId) {
            this.curNativeAd$ ? (this.curNativeAd$.reportAdShow({
                adId: aDId
            }), this.nativeAds$.length <= 0 && (this.curNativeAd$ = void 0, this.nativeAds$ = [],
                this.createNativeAds$())) : console.log("tcy 没有创建原生广告");
        }
        _createInterstitialAd$() {
            if (!window.qg) return;
            if (!this.isInsertActive$) return void console.warn("tcy 广告组未开通，无法创建插屏广告");
            if ("undefined" == typeof qg || !qg.createInsertAd) return void console.warn("tcy 非oppo环境，无法创建插屏广告");
            if (!this.insertUnitId$) return void console.warn("tcy 未配置插屏广告ID");
            let interstitialAd;
            console.log("tcy 创建插屏广告");
            try {
                interstitialAd = qg.createInsertAd({
                    adUnitId: this.insertUnitId$
                });
            } catch (e) {
                console.log("tcy 插屏广告fail");
            }
            interstitialAd.onClose(function() {
                interstitialAd.destroy(), this.curInterstitialAd$ = null, this._createInterstitialAd$(),
                    pgdk$.showBanner$(null, null);
            }), interstitialAd.onLoad(function() {
                console.log("tcy 插屏广告加载成功"), this.curInterstitialAd$ = interstitialAd;
            }.bind(this)), interstitialAd.onError(function(errMsg) {
                console.warn("tcy 插屏广告加载失败:"), console.warn(JSON.stringify(errMsg)), setTimeout(this._createInterstitialAd$.bind(this), 3e3);
            }.bind(this)), interstitialAd.load();
        }
        showInterstitialAd$() {
            if (console.log(JSON.stringify(this.isInsertActive$)), this.isInsertActive$)
                if ("undefined" != typeof qg && qg.createInsertAd) {
                    if (console.log("tcy 展示插屏广告"), console.log(JSON.stringify(this.curInterstitialAd$)),
                        this.curInterstitialAd$) return pgdk$.hideBanner$(), this.curInterstitialAd$.show(),
                        void(this.curInterstitialAd$ = null);
                    this.curInterstitialAd$ || this._createInterstitialAd$();
                } else console.warn("tcy 非oppo环境，无法展示插屏广告。");
            else console.warn("tcy 广告组未开通，无法创建插屏广告");
        }
        reportMonitor$() {
            "undefined" != typeof qg && qg.reportMonitor ? qg.reportMonitor("game_scene", 0) : console.warn("不能进行数据上报");
        }
    }
    class PgdkToutiao$ extends Laya.Script {
        constructor() {
            super(), this.appId$ = null, this.isAdActive$ = !0, this.bannerIds$ = null, this.isVideoActive$ = !0,
                this.videoUnitId$ = null, this.isInsertActive$ = !0, this.insertUnitId$ = null,
                this.shareId$ = null, this.secret$ = null, this._banners$ = [], this.loginCode$ = "",
                this.anonymous_code$ = "", this.recorderMsg = void 0, this.recordClipIndexList = [],
                this.recordVideoRes = void 0, this.MIN_BANNER_WIDTH$ = 208, this.MIN_BANNER_HEIGHT$ = 128;
        }
        onStart() {
            window.tt && (this.updateMgr$(), this._login$(), this.isVideoActive$ && this.initVideoAd$(),
                this.isInsertActive$ && this.initInterstitialAd$(), this._refreshBanner$(), this.initGameRecorder$());
        }
        updateMgr$() {
            if (!window.tt || !tt.getUpdateManager) return;
            const updateManager = tt.getUpdateManager();
            updateManager.onCheckForUpdate(function(res) {}), updateManager.onUpdateReady(() => {}), updateManager.onUpdateFailed(() => {});
        }
        _checkLogin$() {}
        _login$() {
            if ("undefined" == typeof tt || !tt.login) return void console.warn("非头条环境，无法跳转", data);
            if (localStorage.getItem("sessionKey$")) return;
            let self = this;
            tt.login({
                force: !1,
                success(res) {
                    console.log("头条登录成功..."), console.log(`login调用成功${res.code} ${res.anonymousCode}`),
                        self.loginCode$ = res.code, self.anonymous_code$ = res.anonymousCode, self.getPlatformOpenId$();
                },
                fail(res) {
                    console.log("头条登录失败..."), console.log("login调用失败");
                }
            });
        }
        getPlatformOpenId$() {
            if ("undefined" == typeof tt || !tt.request) return;
            if (!this.loginCode$ && !this.anonymous_code$) return;
            if (!this.secret$) return;
            let data;
            this.loginCode$ ? data = {
                appid: this.appId$,
                secret: this.secret$,
                code: this.loginCode$
            } : this.anonymous_code$ && (data = {
                appid: this.appId$,
                secret: this.secret$,
                anonymous_code: this.anonymous_code$
            });
            let self = this;
            console.log("tcy 获取用户信息...."), tt.request({
                url: "https://developer.toutiao.com/api/apps/jscode2session",
                data: data,
                header: {
                    "content-type": "application/json"
                },
                method: "GET",
                success: function(res) {
                    console.log("获取openid成功"), self.user_Id = res.data.openid || res.data.anonymous_openid,
                        console.log(res), console.log("tcy  userID" + self.user_Id), localStorage.setItem("sessionKey$", res.data.session_key);
                },
                fail: function(res) {
                    console.log("获取openid失败"), console.log(res);
                },
                complete: function(res) {}
            });
        }
        getUserId$() {
            return window.tt ? this.user_Id : "";
        }
        onUpdate() {
            this._refreshBanner$();
        }
        navigate2Mini$(data, viewName, success, cancel) {
            if (window.tt && "function" == typeof window.tt.showMoreGamesModal)
                if (window.zs.sdk && window.zs.sdk.showMoreGamesModal) {
                    let openId = pgdk$.getPlatformUserId$() || "";
                    window.zs.sdk.showMoreGamesModal(data, openId, success, cancel);
                } else {
                    var targetMini = data,
                        navigateData = targetMini.extraData || {};
                    navigateData.appId = this.appId$, tt.onMoreGamesModalClose(function(res) {
                        console.log("modal closed", res);
                    }), tt.onNavigateToMiniProgram(function(res) {
                        res && (console.log(res.errCode), console.log(res.errMsg), 0 == res.errCode ? success && success() : fail && cancel());
                    }), "ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal({
                        appLaunchOptions: [{
                            appId: targetMini.app_id,
                            query: targetMini.path,
                            extraData: navigateData
                        }],
                        success(res) {
                            console.log("showMoreGamesModal success", res.errMsg);
                        },
                        fail(res) {
                            console.log("showMoreGamesModal fail", res.errMsg);
                        }
                    });
                }
        }
        showBanner$(rect, widget) {
            this.isAdActive$ && (this._needBanner$ = !0, console.log(now$(), "显示广告"), "undefined" != typeof tt && tt.createBannerAd && (this._banners$.length >= 2 && this._hideBanner$(),
                this._banners$.length > 0 && (this._curBanner$ = this._banners$[0], this._curBanner$.startShowTime$ = Date.now(),
                    this._curBanner$.rect$ = rect, this._curBanner$.widget$ = widget, this._curBanner$.show(),
                    this._resizeBannerPos$(this._curBanner$, rect, widget)), this._createBanner$(!0, rect, widget)));
        }
        hideBanner$() {
            this._needBanner$ = !1, this._hideBanner$();
        }
        _hideBanner$() {
            if (console.log(Date.now(), "隐藏广告"), "undefined" == typeof tt) return;
            if (!this._curBanner$) return;
            if (0 === this._banners$.length) return;
            let banner = this._banners$.removeAt$(0);
            if (banner.hide(), this._banners$.length >= 1 && banner.$showTime > 3e4) {
                console.log(Date.now(), "销毁广告");
                let args = [this._curBanner$.$id, !1, this._curBanner$.style.left, this._curBanner$.style.top, this._curBanner$.style.height];
                this._curBanner$.destroy(), this._curBanner$ = void 0, this.__createBanner$(args);
            } else this._curBanner$ = void 0, this._banners$.push(banner);
        }
        _createBanner$(show, rect, widget) {
            if ("undefined" == typeof tt || !tt.createBannerAd) return;
            if (this.bannerIds$.length <= 0) return;
            let bannerId = this.bannerIds$.removeAt$(Math.floor(Math.random() * this.bannerIds$.length));
            this.__createBanner$([bannerId, show, rect, widget]);
        }
        __createBanner$(args) {
            if (!args) return;
            console.log(now$(), "创建广告");
            let bannerId = args[0],
                show = args[1],
                rect = args[2],
                widget = args[3],
                banner = tt.createBannerAd({
                    adUnitId: bannerId,
                    style: {
                        left: rect.left,
                        top: rect.top,
                        width: rect.width
                    }
                });
            banner.id$ = bannerId, banner.onLoad$ = function() {
                    this._onBannerLoad$(banner, show, rect, widget);
                }.bind(this), banner.onError$ = function(errMsg) {
                    console.warn("广告加载失败:"), console.warn(errMsg), this.destroy && this.destroy(), setTimeout(this.__createBanner$.bind(this, args), 3e3, args);
                }.bind(this), banner.onResize$ = function(size) {
                    this.style.realWidth = size.width, this.style.realHeight = size.height;
                }.bind(banner), banner.onLoad(banner.onLoad$.bind(banner)), banner.onError(banner.onError$.bind(banner, args)),
                banner.onResize(banner.onResize$.bind(banner));
        }
        _onBannerLoad$(banner, show, rect, widget) {
            this._needBanner$ && show && !this._curBanner$ ? (this._curBanner$ = banner, this._curBanner$.startShowTime$ = Date.now(),
                this._curBanner$.rect$ = rect, this._curBanner$.widget$ = widget, this._curBanner$.show(),
                this._banners$.insert$(0, banner), this._resizeBannerPos$(banner, rect, widget)) : this._banners$.push(banner);
        }
        _resizeBannerPos$(banner, rect, widget) {
            if (rect.width / rect.height > banner.style.realWidth / banner.style.realHeight) {
                if (banner.style.realHeight > rect.height && banner.style.realWidth > this.MIN_BANNER_WIDTH$) {
                    let targetWidth = Math.max(this.MIN_BANNER_WIDTH$, banner.style.realWidth / (banner.style.realHeight / rect.height));
                    banner.style.width = targetWidth;
                }
            } else "undefined" != typeof cc ? banner.style.width = Math.min(cc.view.getFrameSize().width, Math.max(this.MIN_BANNER_WIDTH$, rect.width)) : "undefined" != typeof Laya && (banner.style.width = Math.min(Laya.Browser.clientWidth, Math.max(this.MIN_BANNER_WIDTH$, rect.width)));
            let height = banner.style.realHeight;
            "number" == typeof widget.top && "number" != typeof widget.bottom ? banner.style.top = rect.top : "number" != typeof widget.top && "number" == typeof widget.bottom ? banner.style.top = rect.top + rect.height - height : banner.style.top = rect.top + rect.height / 2 - height / 2,
                "number" == typeof widget.left && "number" != typeof widget.right ? banner.style.left = rect.left : "number" != typeof widget.left && "number" == typeof widget.right ? banner.style.left = rect.left + rect.width - banner.style.realWidth : banner.style.left = rect.left + rect.width / 2 - banner.style.realWidth / 2;
        }
        _refreshBanner$() {
            this._needBanner$ && this._curBanner$ && (Date.now() - this._curBanner$.startShowTime$ > this.bannerShowSpacing$ ? (this.showBanner$(this._curBanner$.rect$, this._curBanner$.widget$),
                console.log(now$(), "刷新Banner")) : this._resizeBannerPos$(this._curBanner$, this._curBanner$.rect$, this._curBanner$.widget$));
        }
        initInterstitialAd$() {
            this.createInterstitialAd$();
        }
        createInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof tt && tt.createInterstitialAd ? this.insertUnitId$ ? (this._curInterstitialAd$ = tt.createInterstitialAd({
                adUnitId: this.insertUnitId$
            }), this._curInterstitialAd$.onClose(function() {
                this.createInterstitialAd$();
            }.bind(this))) : console.warn(now$(), "未配置插屏广告ID") : console.warn(now$(), "非头条环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        showInterstitialAd$() {
            this.isAdActive$ ? "undefined" != typeof tt && tt.createInterstitialAd ? this._curInterstitialAd$ ? this._curInterstitialAd$ && this._curInterstitialAd$.show().catch(err => {
                console.error(err);
            }) : console.warn(now$(), "请先使用initInterstitialAd$()，预加载插屏广告") : console.warn(now$(), "非头条环境，无法创建插屏广告") : console.warn(now$(), "流量主未开通，无法创建插屏广告");
        }
        initVideoAd$() {
            this.hasVideoInit$ || (this._videoErrorTimes = 0, this._maxVideoErrorTimes = 5,
                this.createVideoAd$(), this.hasVideoInit$ = !0);
        }
        createVideoAd$() {
            this.isAdActive$ ? "undefined" != typeof tt && tt.createRewardedVideoAd ? this.videoUnitId$ ? this._videoAd$ || (this._videoAd$ = tt.createRewardedVideoAd({
                adUnitId: this.videoUnitId$
            }), this._videoAd$.onLoad(function() {
                this._videoErrorTimes = 0, console.log(now$(), "激励式视频加载成功");
            }.bind(this)), this._videoAd$.onClose(function(res) {
                this._videoCloseCallback$ && (this._videoCloseCallback$(!res || res.isEnded), this._videoCloseCallback$ = void 0);
            }.bind(this)), this._videoAd$.onError(function(err) {
                this._videoErrorTimes++, this._videoErrorTimes >= this._maxVideoErrorTimes ? console.warn(now$(), "激励式视频加载失败次数过多, 停止重试。 ") : (console.log("tcy 视频id"),
                    console.log(this.videoUnitId$), console.log(this.appid$), console.warn(now$(), "激励式视频加载失败, 重试" + this._videoErrorTimes),
                    console.warn(err), this._videoAd$.load());
            }.bind(this))) : console.warn(now$(), "未配置激励式视频ID") : console.warn(now$(), "非头条环境，无法创建激励式视频") : console.warn(now$(), "流量主未开通，无法创建激励式视频");
        }
        showVideoAd$(callback) {
            return this.isAdActive$ ? "undefined" != typeof tt && tt.createRewardedVideoAd ? void(this._videoAd$ ? !this._videoAd$ || this._videoErrorTimes >= this._maxVideoErrorTimes ? callback && callback(!1) : (this._videoCloseCallback$ = callback,
                this._videoAd$.show()) : console.error(now$(), "请先使用initVideoAd$()，预加载激励式视频")) : (console.warn(now$(), "非头条环境，无法播放激励式视频。当做成功回调。"),
                void(callback && callback(!0))) : (console.warn(now$(), "流量主未开通，无法创建激励式视频。当做成功回调。"),
                void(callback && callback(!0)));
        }
        initGameRecorder$() {
            this.recorderMsg || (this.recorderMsg = tt.getGameRecorderManager());
        }
        recorderStart$(callback, time, errFun) {
            if (!this.recorderMsg) return;
            let self = this;
            this.recorderMsg.onStart(res => {
                console.log("录屏开始"), callback && callback();
            }), this.recorderMsg.onStop(res => {
                self.recordVideoRes = res, console.log(res.videoPath);
            }), this.recorderMsg.onError(res => {
                console.warn("视频录制出错"), errFun && errFun();
            }), this.recorderMsg.start({
                duration: time
            });
        }
        recorderClip$(timeRange, successFun, failFun) {
            this.recorderMsg && this.recorderMsg.recordClip({
                timeRange: timeRange,
                success(r) {
                    console.log(r.index), clipIndexList.push(r.index), successFun && successFun();
                },
                fail(err) {
                    console.warn("录屏裁剪失败"), console.warn(err), failFun && failFun();
                }
            });
        }
        recorderCliper$() {
            this.recorderMsg && this.recordVideoRes && this.recorderMsg.clipVideo({
                path: this.recordVideoRes.videoPath,
                clipRange: this.recordClipIndexList,
                success(res) {
                    console.log(res.videoPath);
                },
                fail(e) {
                    console.error(e);
                }
            });
        }
        recorderPause$(callback) {
            this.recorderMsg && (this.recorderMsg.onPause(res => {
                console.log(res.videoPath), callback && callback();
            }), this.recorderMsg.pause());
        }
        recorderResume$(callback) {
            this.recorderMsg && (this.recorderMsg.onResume(res => {
                console.log(res.videoPath), callback && callback();
            }), this.recorderMsg.resume());
        }
        recorderStop$(callback) {
            this.recorderMsg && this.recorderMsg.stop();
        }
        shareRecordVideo$(successFun, failFun) {
            "undefined" != typeof tt && tt.shareAppMessage && this.recordVideoRes && tt.shareAppMessage({
                channel: "video",
                title: "脑洞打开，打造只属于你的战车",
                desc: "超强的AI，据说只有百分之一的人能战胜",
                imageUrl: "./share/share1.jpg",
                templateId: this.shareId$,
                query: "",
                extra: {
                    videoPath: this.recordVideoRes.videoPath,
                    videoTopics: ["话题1", "话题2"]
                },
                success() {
                    console.log("分享视频成功"), successFun && successFun(), this.recordVideoRes = void 0;
                },
                fail(e) {
                    console.log("分享视频失败"), failFun && failFun(), this.recordVideoRes = void 0;
                }
            });
        }
        createMoregameBtn$(row, style, success, fail) {
            if (window.tt && "function" == typeof window.tt.createMoreGamesButton) {
                var targetMini = row,
                    navigateData = targetMini.extraData || {};
                navigateData.appId = this.appId$, this.moreGamesButton && (this.moreGamesButton.hide(),
                    this.moreGamesButton = null), this.moreGamesButton = tt.createMoreGamesButton({
                    type: "image",
                    image: "zsad/anymore.png",
                    style: {
                        left: style.left,
                        top: style.top,
                        width: style.width,
                        height: style.height,
                        lineHeight: 40,
                        textColor: "#ffffff",
                        textAlign: "center",
                        fontSize: 0,
                        borderRadius: 0,
                        borderWidth: 0,
                        borderColor: "#000000"
                    },
                    appLaunchOptions: [{
                        appId: targetMini.app_id,
                        query: targetMini.path,
                        extraData: navigateData
                    }],
                    onNavigateToMiniGame(res) {
                        console.log("跳转其他小游戏", res), res && (0 == res.errCode ? success && success() : fail && fail());
                    }
                }), this.moreGamesButton.onTap(() => {
                    console.log("点击更多游戏");
                }), this.moreGamesButton.show();
            }
        }
        showMoreGamesModal$(row, success, fail) {
            if (!window.tt || "function" != typeof window.tt.showMoreGamesModal) return;
            var targetMini = row,
                navigateData = targetMini.extraData || {};
            navigateData.appId = this.appId$, tt.onMoreGamesModalClose(function(res) {
                console.log("modal closed", res);
            }), tt.onNavigateToMiniProgram(function(res) {
                res && (console.log(res.errCode), console.log(res.errMsg), 0 == res.errCode ? success && success() : fail && fail());
            }), "ios" !== tt.getSystemInfoSync().platform ? tt.showMoreGamesModal({
                appLaunchOptions: [{
                    appId: targetMini.app_id,
                    query: targetMini.path,
                    extraData: navigateData
                }],
                success(res) {
                    console.log("showMoreGamesModal success", res.errMsg);
                },
                fail(res) {
                    console.log("showMoreGamesModal fail", res.errMsg);
                }
            }) : this.showToast$("IOS暂不支持该功能");
        }
        hideMoreGameBtn$() {
            this.moreGamesButton && (this.moreGamesButton.hide(), this.moreGamesButton = null);
        }
        showToast$(tipStr) {
            window.tt && "function" == typeof window.tt.showToast && tt.showToast({
                title: tipStr,
                duration: 2e3,
                success(res) {
                    console.log(`${res}`);
                },
                fail(res) {
                    console.log("showToast调用失败");
                }
            });
        }
    }
    class ImgAutoMatchSize extends Laya.Script {
        constructor() {
            super();
        }
        onStart() {
            this.owner.on(Laya.Event.LOADED, this, this.onImgLoaded$), this.owner.on(Laya.Event.CHANGED, this, this.onImgLoaded$),
                this.startUwidth = this.owner.width, this.startUheight = this.owner.height;
        }
        onImgLoaded$() {
            if (!this.owner.source) return;
            let fHeight = this.owner.source.sourceHeight,
                fWidth = this.owner.source.sourceWidth,
                uWidth = this.startUwidth,
                uHeight = this.startUheight,
                disW = Math.abs(uWidth - fWidth),
                disH = Math.abs(uHeight - fHeight);
            if (fWidth > uWidth && fHeight > uHeight)
                if (disW > disH) {
                    let ratio = fWidth / uWidth;
                    this.owner.height = fHeight / ratio, this.owner.width = this.startUwidth;
                } else {
                    let ratio = fHeight / uHeight;
                    this.owner.width = fWidth / ratio, this.owner.height = this.startUheight;
                }
            else if (fWidth > uWidth && fHeight < uHeight) {
                let ratio = fWidth / uWidth;
                this.owner.height = fHeight / ratio, this.owner.width = this.startUwidth;
            } else if (fWidth < uWidth && fHeight > uHeight) {
                let ratio = fHeight / uHeight;
                this.owner.width = fWidth / ratio, this.owner.height = this.startUheight;
            } else if (fWidth < uWidth && fHeight < uHeight) {
                let ratio = fHeight / uHeight;
                this.owner.width = fWidth / ratio, this.owner.height = this.startUheight;
            } else this.owner.width = this.startUwidth, this.owner.height = this.startUheight;
        }
    }
    class GameConfig {
        static init() {
            let reg = Laya.ClassUtils.regClass;
            reg("script/Module/Battle/View/BeathUpControl.js", BeachUpControl$), reg("script/Module/Battle/View/BeathUpBubblePanel.js", BeachUpBubblePanel$),
                reg("script/Module/Battle/View/BeachUI.js", BeachUI$), reg("script/sdk/view/PgTopView$.js", PgTopView$),
                reg("script/Module/Loading/View/LoginLoadingUI.js", Logi_GameKey_nLoadingUI), reg("script/sdk/view/PgSingleAd$.js", PgSingleAd$),
                reg("script/sdk/view/PgViewList$.js", PgViewList$), reg("script/sdk/view/PgViewIndex$.js", PgViewIndex$),
                reg("script/Module/Main/View/MainUI.js", MainUI$), reg("script/Module/Main/View/MainUiOppo.js", MainUiOppo$),
                reg("script/Module/Battle/Scene/BattleScene.js", BattleScene$), reg("script/sdk/Pgdk$.js", Pgdk$),
                reg("script/sdk/data/PgdkDataQyWx$.js", PgdkDataQyWx$), reg("script/sdk/view/PgExitButton$.js", PgExitButton$),
                reg("script/sdk/platform/PgdkQyWx$.js", PgdkQyWx$), reg("script/Module/Battle/Scene/BattleSceneOppo.js", BattleSceneOppo$),
                reg("script/sdk/data/PgdkDataQyOppo$.js", PgdkDataQyOppo$), reg("script/sdk/platform/PgdkOppo$.js", PgdkOppo$),
                reg("script/sdk/platform/PgdkToutiao$.js", PgdkToutiao$), reg("script/Module/Battle/View/BattleAwardUI.js", BattleAwardUI$),
                reg("script/Module/Battle/View/BattleAwardUIOppo.js", BattleAwardUIOppo$), reg("script/Base/ImgAutoMatchSize.js", ImgAutoMatchSize),
                reg("script/Module/Battle/View/BattleInfoUI.js", BattleInfoUI$), reg("script/Module/Battle/View/BattleInfoUIOppo.js", BattleInfoUIOppo$),
                reg("script/Module/Battle/View/BattleResultUI.js", BattleResultUI$), reg("script/Module/Battle/View/BattleResultUIOppo.js", BattleResultUIOppo$),
                reg("script/Module/Battle/View/ShopCollectionsUI.js", ShopCollectionsUI$), reg("script/Module/Battle/View/ShopSkinsUI.js", ShopSkinsUI$);
        }
    }
    GameConfig.width = 640, GameConfig.height = 1136, GameConfig.scaleMode = "fixedwidth",
        GameConfig.screenMode = "none", GameConfig.alignV = "top", GameConfig.alignH = "left",
        GameConfig.startScene = "Scene/BattleScene.scene", GameConfig.sceneRoot = "", GameConfig.debug = !1,
        GameConfig.stat = !1, GameConfig.physicsDebug = !1, GameConfig.exportSceneToJson = !0,
        GameConfig.init();
    class UIMgr {
        constructor() {
            this._uis$ = [], Laya.uiMgr$ = this;
        }
        static init$() {
            Laya.uiMgr$ || new UIMgr();
        }
        onUIOpen$(ui) {
            -1 === this._uis$.indexOf(ui) && this._uis$.push(ui);
        }
        onUIClose$(ui) {
            -1 !== this._uis$.indexOf(ui) && (this._uis$.remove$(ui), this.restoreBanner$());
        }
        restoreBanner$() {
            let lastUI = this._uis$[this._uis$.length - 1];
            lastUI && lastUI.restoreBanner$ && lastUI.restoreBanner$();
        }
        isLastUI$(ui) {
            let uiL = this._uis$.length;
            return uiL && this._uis$.indexOf(ui) == uiL - 1;
        }
    }
    class Game_GameKey_Manager {
        constructor() {
            this.inited = !1;
        }
        static getInstance$() {
            return null == Game_GameKey_Manager.instance && (window.gameManager = Game_GameKey_Manager.instance = new Game_GameKey_Manager()),
                Game_GameKey_Manager.instance;
        }
        init_GameKey_Manager() {
            this.inited || (UIMgr.init$(), Even_GameKey_tManager.getInstance$().isIn_GameKey_ited ? Conf_GameKey_igManager.getInstance$().isIn_GameKey_ited ? UIMa_GameKey_nager.getInstance$().isIn_GameKey_ited ? Data_GameKey_Manager.getInstance$().isIn_GameKey_ited ? TimeManager$.getInstance$().isIn_GameKey_ited ? Audi_GameKey_oManager.getInstance$().isIn_GameKey_ited ? Game_GameKey_Manager.loadedPacks ? Scen_GameKey_eManager.getInstance$().isIn_GameKey_ited ? this.onIn_GameKey_itedGame() : Scen_GameKey_eManager.getInstance$().init(this.init_GameKey_Manager.bind(this)) : UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Logi_GameKey_nLoadingUI, null, function() {
                Game_GameKey_Manager.loadedPacks = !0, this.init_GameKey_Manager();
            }.bind(this)) : Audi_GameKey_oManager.getInstance$().init(this.init_GameKey_Manager.bind(this)) : TimeManager$.getInstance$().init(this.init_GameKey_Manager.bind(this)) : Data_GameKey_Manager.getInstance$().init(this.init_GameKey_Manager.bind(this)) : UIMa_GameKey_nager.getInstance$().init(this.init_GameKey_Manager.bind(this)) : Conf_GameKey_igManager.getInstance$().init(this.init_GameKey_Manager.bind(this)) : Even_GameKey_tManager.getInstance$().init(this.init_GameKey_Manager.bind(this)));
        }
        onIn_GameKey_itedGame() {
            window.qg ? Scen_GameKey_eManager.getInstance$().open_GameKey_Scene(BattleSceneOppo$, Laya.Handler.create(this, this.onSceneLoaded$)) : Scen_GameKey_eManager.getInstance$().open_GameKey_Scene(BattleScene$, Laya.Handler.create(this, this.onSceneLoaded$));
        }
        onSceneLoaded$() {
            window.qg ? UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUIOppo) : UIMa_GameKey_nager.getInstance$().open_GameKey_UI(Laya.CyzClassMap.MainUI);
        }
        moni_GameKey_torEvents() {}
        onSh_GameKey_owGame() {}
        onEx_GameKey_itGame() {}
        open_GameKey_MainUI(callback) {}
        open_GameKey_OfflineUI() {}
    }
    Game_GameKey_Manager.instance = void 0;
    class DataInputStream {
        constructor(arrayBuffer) {
            this.arrayBuffer = arrayBuffer, this.index = 0, this.dv = new DataView(this.arrayBuffer);
        }
        readByte() {
            return this.dv.getInt8(this.index++);
        }
        readShort() {
            var value = this.dv.getInt16(this.index);
            return this.index += 2, value;
        }
        readInt() {
            var value = this.dv.getInt32(this.index);
            return this.index += 4, value;
        }
        readUint() {
            var value = this.dv.getUint32(this.index);
            return this.index += 4, value;
        }
        readLong() {
            var value1 = this.readInt(),
                value2 = this.readUint();
            return value1 * Math.POW_2_32 + value2;
        }
        readFloat() {
            var value = this.dv.getFloat32(this.index);
            return this.index += 4, value;
        }
        readUTF() {
            var num = this.readShort();
            return this.readText(num);
        }
        readText(length) {
            for (var buffer = this.arrayBuffer.slice(this.index, this.index + length), array = new Uint8Array(buffer), v = "", max = length, c = 0, f = String.fromCharCode, idx = 0, u = array; idx < max;)(c = u[idx++]) < 128 ? 0 != c && (v += f(c)) : v += f(c < 224 ? (63 & c) << 6 | 127 & u[idx++] : c < 240 ? (31 & c) << 12 | (127 & u[idx++]) << 6 | 127 & u[idx++] : (15 & c) << 18 | (127 & u[idx++]) << 12 | u[idx++] << 6 & 127 | 127 & u[idx++]),
                0;
            return this.index += length, v;
        }
        readArrayBuffer(length) {
            var buffer = this.arrayBuffer.slice(this.index, this.index + length);
            return this.index += length, buffer;
        }
    }
    class DataWrap {
        static init_GameKey_Data() {
            if (GameSetting$.LOAD_DATA_JS) {
                function dataload() {
                    for (var tableName in D)
                        if ("properties" != tableName) {
                            var data = D[tableName],
                                properties = D.properties[tableName];
                            if (properties)
                                for (var id in data) {
                                    var valueArray = data[id],
                                        entry = {};
                                    entry[properties[0]] = id;
                                    for (var i = 1, n = properties.length; i < n; i++) {
                                        var value = valueArray[i - 1];
                                        void 0 !== value && (entry[properties[i]] = value);
                                    }
                                    data[id] = entry;
                                }
                        }
                    onDataCompleted();
                }
                dataload();
            } else {
                function dataload() {
                    for (var colNum, rowNum, value, rowData, table, arraySize, m, tmpData = {}, _data = Laya.Loader.getRes("script/data.bin"), dis = new DataInputStream(_data), tableName = dis.readUTF(), columnNames = [], columnTypes = [];
                        "#" != tableName;) {
                        table = tmpData[tableName] = {}, colNum = dis.readByte(), columnNames.length = 0,
                            columnTypes.length = 0;
                        for (var i = 0; i < colNum; i++) columnNames.push(dis.readUTF()), columnTypes.push(dis.readUTF());
                        rowNum = dis.readShort();
                        for (var j = 0; j < rowNum; j++)
                            for (var n = 0; n < colNum; n++) {
                                switch (columnTypes[n]) {
                                    case "byte":
                                        value = dis.readByte();
                                        break;

                                    case "short":
                                        value = dis.readShort();
                                        break;

                                    case "int":
                                        value = dis.readInt();
                                        break;

                                    case "float":
                                        value = dis.readFloat();
                                        break;

                                    case "string":
                                        value = dis.readUTF();
                                        break;

                                    case "int[]":
                                        if (value = void 0, (arraySize = dis.readShort()) > 0)
                                            for (value = [], m = 0; m < arraySize; m++) value.push(dis.readInt());
                                        break;

                                    case "float[]":
                                        if (value = void 0, (arraySize = dis.readShort()) > 0)
                                            for (value = [], m = 0; m < arraySize; m++) value.push(dis.readFloat());
                                        break;

                                    default:
                                        console.error("DataInputStream缺失解析方法：" + columnTypes[n]);
                                }
                                0 == n && (rowData = table[value] = {}), rowData[columnNames[n]] = value;
                            }
                        tableName = dis.readUTF();
                    }
                    D = tmpData, Laya.Loader.clearRes("script/data.bin", !0), onDataCompleted();
                }
                Laya.loader.load("script/data.bin", Handler.create(this, dataload), null, Laya.Loader.BUFFER);
            }

            function onDataCompleted() {
                ! function() {
                    var emptyArray = [];
                    for (var key in D.PrefabsPath) {
                        var config = D.PrefabsPath[key];
                        config.subModel ? config.subModel = config.subModel.split("#") : config.subModel = emptyArray,
                            config.actionInShop ? config.actionInShop = config.actionInShop.split("#") : config.actionInShop = emptyArray;
                    }
                }(), D._inited = !0, Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ON_DATA_LOAD);
            }
        }
    }
    class UIMo_GameKey_de3D {
        constructor() {
            this.curPos = new Laya.Vector3();
        }
        static create(targetUI, modelId, loadedHandler) {
            let uiModelCtr = new UIMo_GameKey_de3D();
            return uiModelCtr.init(targetUI, modelId, loadedHandler), uiModelCtr;
        }
        init(targetUI, modelId, loadedHandler) {
            this.targetUI = targetUI, this.modelId = modelId, this.load_GameKey_edHandler = loadedHandler,
                this.uiDa_GameKey_ta = Mode_GameKey_lUtils.getU_GameKey_IData(targetUI), this.modelCtr = Mode_GameKey_l3D.create(this.uiDa_GameKey_ta.scene, this.modelId, Laya.Handler.create(this, this.onMo_GameKey_delLoaded)),
                Laya.timer.loop(1, this, this.upda_GameKey_tePos);
        }
        onMo_GameKey_delLoaded() {
            this.load_GameKey_edHandler && this.load_GameKey_edHandler.runWith(this), this.load_GameKey_edHandler = void 0;
        }
        playAnim(animName, isLoop, caller, callback, speed) {
            this.modelCtr && this.modelCtr.playAnim(animName, isLoop, caller, callback, speed);
        }
        upda_GameKey_tePos() {
            this.modelCtr && (Laya.Point.TEMP.setTo(0, 0), this.targetUI.localToGlobal(Laya.Point.TEMP),
                this.curPos = Mode_GameKey_lUtils.get3_GameKey_DUIPos(Laya.Point.TEMP.x, Laya.Point.TEMP.y, this.targetUI, this.curPos),
                this.modelCtr.setPosition(this.curPos.x, this.curPos.y, this.curPos.z));
        }
        dispose() {
            Laya.timer.clearAll(this), this.modelCtr && this.modelCtr.dispose(), this.modelCtr = void 0,
                Mode_GameKey_lUtils.dest_GameKey_royUIModel(this.targetUI, this.modelId);
        }
    }
    class CyzClassMap {
        static init() {
            Laya.CyzClassMap = {}, Laya.CyzClassMap.LocalData = LocalData$, Laya.CyzClassMap.BaseWindow = Base_GameKey_Window,
                Laya.CyzClassMap.UIMode3D = UIMo_GameKey_de3D, Laya.CyzClassMap.MainUI = MainUI$,
                Laya.CyzClassMap.MainUIOppo = MainUiOppo$;
        }
    }
    GameConfig.width = 640, GameConfig.height = 1136, GameConfig.screenMode = Laya.Browser.onPC ? Laya.Stage.SCREEN_NONE : Laya.Stage.SCREEN_VERTICAL,
        GameConfig.alignV = Laya.Stage.ALIGN_CENTER, GameConfig.alignH = Laya.Stage.ALIGN_MIDDLE,
        GameConfig.sceneRoot = "", GameConfig.debug = !1, GameConfig.stat = !1, GameConfig.physicsDebug = !1,
        GameConfig.exportSceneToJson = !0, new class {
            constructor() {
                Laya3D.init(0, 0), Laya.Shader3D.debugMode = !1, CyzClassMap.init(), Laya.stage.screenMode = GameConfig.screenMode,
                    Laya.stage.alignV = GameConfig.alignV, Laya.stage.alignH = GameConfig.alignH, Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson,
                    (GameConfig.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(),
                    GameConfig.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(),
                    GameConfig.stat && Laya.Stat.show(), Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION),
                    window.onunload = function(e) {
                        Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.ON_EXIT_GAME),
                            gameManager.onEx_GameKey_itGame();
                    };
            }
            onPlfLoaded() {
                Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
            onVersionLoaded() {
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
            }
            onConfigLoaded() {
                ShaderManager$.getInstance$().inited || (ShaderManager$.getInstance$().preCompile22(),
                    window.shaderObj = {}, window.getShaders = function() {
                        let arr;
                        for (let i = 0; i < Laya.Shader3D.debugShaderVariantCollection.variantCount; i++) {
                            let shadervariant = Laya.Shader3D.debugShaderVariantCollection.getByIndex(i),
                                shaderName = shadervariant.shader.name;
                            window.shaderObj[shaderName] || (window.shaderObj[shaderName] = []), arr = window.shaderObj[shaderName];
                            let obj = {};
                            obj.defineNames = shadervariant.defineNames, obj.passIndex = shadervariant.passIndex,
                                obj.subShaderIndex = shadervariant.subShaderIndex, arr.push(obj);
                        }
                    }), DataWrap.init_GameKey_Data(), Mode_GameKey_lUtils.init(), Game_GameKey_Manager.getInstance$().init_GameKey_Manager();
            }
        }(), Laya.stage.on(Laya.Event.RESIZE, null, function() {
            Even_GameKey_tManager.getInstance$().disp_GameKey_atchEvent(SSEV_GameKey_ENT.SCREEN_SIZE_CHANGE);
        }), Laya.stage._setScreenSize = Laya.stage.setScreenSize, Laya.stage.setScreenSize = function(screenWidth, screenHeight, doNotCheck) {
            if (!Laya.stage._isInputting()) {
                var clientRate, data, clientWidth, clientHeight, trueRate, tem = (data = {}, clientWidth = Laya.Browser.clientWidth * Laya.Browser.pixelRatio,
                    clientHeight = Laya.Browser.clientHeight * Laya.Browser.pixelRatio, trueRate = clientRate = Laya.Browser.onPC ? clientHeight / clientWidth : clientHeight > clientWidth ? clientHeight / clientWidth : clientWidth / clientHeight,
                    clientRate > 1280 / 720 ? (data.scaleMode = Laya.Stage.SCALE_FIXED_AUTO, data.height = 1280,
                        data.width = 720, GameSetting.ratio = Laya.Browser.clientWidth / Laya.stage.width) : clientRate < 1280 / 854 ? (data.scaleMode = Laya.Stage.SCALE_SHOWALL,
                        data.height = 1280, data.width = 854, GameSetting.ratio = Laya.Browser.clientHeight / Laya.stage.height) : (data.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT,
                        data.height = 1280, GameSetting.ratio = Laya.Browser.clientWidth / Laya.stage.width),
                    data.trueRate = trueRate, data);
                this._scaleMode = tem.scaleMode, this.designHeight = tem.height, this.designWidth = tem.width,
                    this._setScreenSize(screenWidth, screenHeight), doNotCheck || Laya.timer.once(2e3, null, function() {
                        Laya.stage.setScreenSize(Laya.Browser.clientWidth * Laya.Browser.pixelRatio, Laya.Browser.clientHeight * Laya.Browser.pixelRatio, !0);
                    });
            }
        }, Laya.stage._changeCanvasSize();
}();