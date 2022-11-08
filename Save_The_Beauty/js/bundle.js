!function () {
    "use strict";
    class e {
        constructor() { }
        static Log(e, ...t) {
            this.debugMode && (null != t && t.length > 0 ? console.log(e, t) : console.log(e));
        }
        static LogJSON(e) {
            console.log(JSON.stringify(e));
        }
        static PrintVec(e) {
            this.debugMode && console.log("[ x:" + e.x + ",y:" + e.y + ",z:" + e.z + "]");
        }
        static Dump(e) {
            console.log("", e);
        }
        static Error(e, ...t) {
            this.debugMode && (null != t && t.length > 0 ? console.error(e, t) : console.error(e));
        }
    }
    e.debugMode = !0;
    class t {
        constructor() { }
        dispatch(e, i) {
            console.log("派发事件" + e, i), t.eventDispatcher.event(e, i);
        }
        onEvent(e, i, s, a) {
            t.eventDispatcher.on(e, i, s, null == a ? null : [a]);
        }
        onEventOnce(e, i, s, a) {
            t.eventDispatcher.once(e, i, s, null == a ? null : [a]);
        }
        offEvent(e, i, s, a) {
            t.eventDispatcher.off(e, i, s);
        }
    }
    t.eventDispatcher = new Laya.EventDispatcher(), t.instance = new t();
    class i {
        static getUserInfo(e) {
            return window[this.platfomStr].getUserInfo(e);
        }
        static loadSubpackage(e) {
            return window[this.platfomStr].loadSubpackage(e);
        }
        static createBannerAd(t) {
            if (e.Log("------------  createBannerAd:" + JSON.stringify(t)), "qg" == i.platfomStr && "v" == i.platfomStr2) {
                let i = {
                    posId: t.adUnitId,
                    style: t.style
                };
                return e.Log("-----------  bann:" + JSON.stringify(i)), window[this.platfomStr].createBannerAd(i);
            }
            return window[this.platfomStr].createBannerAd(t);
        }
        static createInnerAudioContext() {
            return window[this.platfomStr].createInnerAudioContext();
        }
        static createUserInfoButton(e) {
            return window[this.platfomStr].createUserInfoButton(e);
        }
        static getSetting(e) {
            return window[this.platfomStr].getSetting(e);
        }
        static getGameRecorderManager() {
            return window[this.platfomStr].getGameRecorderManager();
        }
        static createRewardedVideoAd(t) {
            return e.Log("------------  createRewardedVideoAd:" + JSON.stringify(t)), window[this.platfomStr].createRewardedVideoAd(t);
        }
        static createNativeAd(e) {
            if ("qg" == this.platfomStr) return window[this.platfomStr].createNativeAd(e);
        }
        static login(e) {
            return window[this.platfomStr].login(e);
        }
        static onHide(e) {
            return window[this.platfomStr].onHide(e);
        }
        static onShow(e) {
            return window[this.platfomStr].onShow(e);
        }
        static getLaunchOptionsSync() {
            return window[this.platfomStr].getLaunchOptionsSync();
        }
        static getMenuButtonBoundingClientRect() {
            if ("qg" != this.platfomStr) return window[this.platfomStr].getMenuButtonBoundingClientRect();
        }
        static onShareAppMessage(e) {
            if ("qg" != this.platfomStr) return window[this.platfomStr].onShareAppMessage(e);
        }
        static showShareMenu(e) {
            if ("qg" != this.platfomStr) return window[this.platfomStr].showShareMenu(e);
        }
        static getSystemInfoSync() {
            return e.Log("---------  this.platfomStr:" + this.platfomStr), window[this.platfomStr].getSystemInfoSync();
        }
        static setUserCloudStorage(e) {
            if ("qg" != this.platfomStr) return window[this.platfomStr].setUserCloudStorage(e);
        }
        static navigateToMiniProgram(t) {
            return "qg" == this.platfomStr ? (e.Log("------  跳转" + JSON.stringify(t)), window[this.platfomStr].navigateToMiniGame(t)) : window[this.platfomStr].navigateToMiniProgram(t);
        }
        static shareAppMessage(e) {
            if ("qg" != this.platfomStr) return window[this.platfomStr].shareAppMessage(e);
        }
        static vibrateShort() {
            return window[this.platfomStr].vibrateShort();
        }
        static vibrateLong() {
            return window[this.platfomStr].vibrateLong();
        }
        static openCustomerServiceConversation() {
            if ("qg" != this.platfomStr) return window[this.platfomStr].openCustomerServiceConversation();
        }
        static showMoreGamesModal(e) {
            "qg" != this.platfomStr && window[this.platfomStr].showMoreGamesModal(e);
        }
        static showToast(e) {
            return window[this.platfomStr].showToast(e);
        }
        static createAppBox(t) {
            return e.Log("1111"), "qq" != this.platfomStr ? null : (e.Log("22222"), window[this.platfomStr].createAppBox(t));
        }
        static createBlockAd(e) {
            return "qq" != this.platfomStr ? null : window[this.platfomStr].createBlockAd(e);
        }
        static hasShortcutInstalled(e) {
            "qg" == this.platfomStr && window[this.platfomStr].hasShortcutInstalled({
                success: function (t) {
                    e && e(t);
                }
            });
        }
        static installShortcut(e) {
            "qg" == this.platfomStr && window[this.platfomStr].installShortcut({
                success: function () {
                    console.log("---------  success:"), e && e();
                },
                fail: function (e) {
                    console.log("---------  err:" + JSON.stringify(e));
                }
            });
        }
    }
    i.platfomStr = "wx", i.platfomStr2 = "o";
    class s {
        constructor() {
            this._isLoadUiAtlas = !1, this._isLoadConfigs = !1, this._isLoadSubpack = !1, this._isLoadMainScene = !1,
                this._isInit = !1, this._scene = null, this._prefabs = null, this._isLoadUiAtlas = !1;
        }
        init(t, i, s, a) {
            if (!this._isInit) if (null == t || t.length < 1) e.Error("uiAtlas为空"); else if (null == i || i.length < 1) e.Error("configs为空"); else if (null == s || s.length < 1) e.Error("subpackUrl为null"); else if (null == a || a.length < 1) e.Error("mainsceneUrl为null"); else {
                this._uiAtlas = t, this._configs = i, this._subpackUrl = s, this._mainSceneUrl = a,
                    this._isInit = !0, this._loadedSubpack = [];
                for (let e = 0, t = this._subpackUrl.length; e < t; ++e) this._loadedSubpack.push(!1);
                e.Log(" _loadedSubpack:" + JSON.stringify(this._loadedSubpack));
            }
        }
        loadUIAtlas() {
            0 != this._isInit ? this._isLoadUiAtlas ? t.instance.dispatch("loadedAtlas") : Laya.loader.load(this._uiAtlas, Laya.Handler.create(this, () => {
                Laya.Browser.onMiniGame, this._isLoadUiAtlas = !0, t.instance.dispatch("loadedAtlas");
            })) : e.Error("未实始化！！");
        }
        loadConfigs() {
            0 != this._isInit ? this._isLoadConfigs ? t.instance.dispatch("loadedConfigs") : Laya.loader.load(this._configs, Laya.Handler.create(this, e => {
                this.configs = [];
                for (let e = 0, t = this._configs.length; e < t; ++e) {
                    let t = Laya.Loader.getRes(this._configs[e].url);
                    this.configs.push(t);
                }
                this._isLoadConfigs = !0, t.instance.dispatch("loadedConfigs");
            })) : e.Error("未实始化！！");
        }
        getJsonById(e, t) {
            let i = this.configs[e];
            if (null == i) return null;
            for (let e = 0, s = i.length; e < s; ++e) if (i[e].id == t) return i[e];
            return null;
        }
        loadSubpack() {
            if (0 != this._isInit) if (this._isLoadSubpack) t.instance.dispatch("loadedSubpack"); else if (Laya.Browser.onMiniGame) if ("wx" == i.platfomStr || "qq" == i.platfomStr) for (let e = 0; e < this._subpackUrl.length; ++e) {
                i.loadSubpackage({
                    name: this._subpackUrl[e],
                    success: function (t) {
                        console.log("加载子包成功 res:" + s.instance._subpackUrl[e]), s.instance._loadedSubpack[e] = !0,
                            s.instance.checkedSubpackHandle();
                    },
                    fail: function (e) {
                        console.log("加载子包失败 res:" + JSON.stringify(e));
                    }
                }).onProgressUpdate(e => {
                    console.log("下载进度", e.progress), console.log("已经下载的数据长度", e.totalBytesWritten),
                        console.log("预期需要下载的数据总长度", e.totalBytesExpectedToWrite);
                });
            } else this._isLoadSubpack = !0, t.instance.dispatch("loadedSubpack"); else this._isLoadSubpack = !0,
                t.instance.dispatch("loadedSubpack"); else e.Error("未实始化！！");
        }
        checkedSubpackHandle() {
            let i = !0;
            for (let e = 0, t = this._subpackUrl.length; e < t; ++e) if (0 == this._loadedSubpack[e]) {
                i = !1;
                break;
            }
            e.Log("22 _loadedSubpack:" + JSON.stringify(this._loadedSubpack)), i && (this._isLoadSubpack = !0,
                t.instance.dispatch("loadedSubpack"));
        }
        loadMainScene() {
            if (e.Log(111), 0 != this._isInit) if (this._isLoadMainScene) t.instance.dispatch("loadedMainScene", this._scene); else {
                e.Log(222);
                this._mainSceneUrl, Laya.Scene3D;
                e.Log("3333 mainSceneUrl:" + this._mainSceneUrl), Laya.Scene3D.load(this._mainSceneUrl, Laya.Handler.create(this, i => {
                    e.Log(444), this._scene = Laya.stage.addChild(i), this._prefabs = this._scene.getChildByName("Prefabs"),
                        this._prefabs.active = !1, this._isLoadMainScene = !0, t.instance.dispatch("loadedMainScene", this._scene);
                }));
            } else e.Error("未初始化！！");
        }
        get prefabs() {
            return this._prefabs;
        }
        get Scene() {
            return this._scene;
        }
    }
    var a, n;
    s.instance = new s(), function (e) {
        e[e.None = 0] = "None", e[e.Login = 1] = "Login", e[e.Loading = 2] = "Loading",
            e[e.LoadSerConfig = 3] = "LoadSerConfig", e[e.LoadUI = 8] = "LoadUI", e[e.LoadConfig = 9] = "LoadConfig",
            e[e.LoadStartScene = 10] = "LoadStartScene", e[e.Lobby = 11] = "Lobby", e[e.MarkUI = 12] = "MarkUI",
            e[e.TrySkinView = 17] = "TrySkinView", e[e.LoginRewardUI = 20] = "LoginRewardUI",
            e[e.Newbee = 21] = "Newbee", e[e.Gaming = 22] = "Gaming", e[e.ReviveView = 23] = "ReviveView",
            e[e.ResultView = 24] = "ResultView", e[e.GamingResult = 25] = "GamingResult", e[e.ConvergeView = 26] = "ConvergeView",
            e[e.PauseGame = 27] = "PauseGame", e[e.SkinView = 28] = "SkinView", e[e.OutApp = 29] = "OutApp",
            e[e.Rewardbox = 30] = "Rewardbox";
    }(a || (a = {}));
    class o { }
    o.loadedAtlas = "loadedAtlas", o.loadedConfigs = "loadedConfigs", o.loadedSubpack = "loadedSubpack",
        o.loadedMainScene = "loadedMainScene", o.hide3dScene = "hide3dScene", o.ui_openLoading = "openLoading",
        o.ui_openMain = "openMain", o.ui_openConverge = "openConverge", o.ui_openConverge2 = "openConverge2",
        o.ui_openConverge3 = "openConverge3", o.ui_openGaming = "openGaming", o.ui_openRank = "openRank",
        o.ui_openResult = "openResult", o.ui_openRevive = "openRevive", o.ui_openReward = "openReward",
        o.ui_openSkin = "openSkin", o.ui_openTrySkin = "openTrySkin", o.ui_openLevelLoading = "openLevelLoading",
        o.ui_openSkinAdd = "openSkinAdd", o.ui_openNativeBanner = "openNativeBanner", o.ui_openShare = "openShare",
        o.ui_openRewardBox = "openRewardBox", o.ui_openGoldenEgg = "openGoldenEgg", o.ui_openSystem = "openSystem",
        o.ui_openSignin = "openSignin", o.frameLoop = "frameLoop", o.gameStart = "gameStart",
        o.gameEnd = "gameEnd", o.gameReset = "gameReset", o.loadedNativeAd = "loadedNativeAd";
    class r { }
    r.hasSound = !0, r.hasVibration = !0, r.shareReward = !0;
    class h {
        static stopBgMusic() {
            Laya.SoundManager.stopMusic();
        }
        static playBgMusic() {
            Laya.SoundManager.playMusic("res3d/sounds/bgm.mp3", 0);
        }
        static PlaySound(e, t) {
            Laya.SoundManager.playSound("res3d/sounds/" + e + ".mp3", 1, null);
        }
        static VibrateLong() {
        }
        static VibrateShort() {
        }
    }
    class l {
        static clickBtn(e, t, i) {
            e && (e.offAll(), e.on(Laya.Event.MOUSE_DOWN, t, () => {
                h.PlaySound("btn", !0), Laya.Tween.to(e, {
                    scaleX: .95,
                    scaleY: .95
                }, 200, Laya.Ease.linearIn);
            }), e.on(Laya.Event.MOUSE_UP, t, () => {
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 200, Laya.Ease.linearIn), i && i.bind(t)();
            }));
        }
        static ScaleAni(e) {
            e.scale(0, 0), Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.expoOut);
        }
        static TweenToRot(e, t, i, s, a, n = 0, o = Laya.Ease.linearIn) {
            if (null == i || null == i.position) return;
            console.error("canTouchMove false")
            // var tween = new Promise((resolve, reject) => {

            null != e && null != e.progress || (e = {
                progress: 0
            });
            let r = i.rotation.clone(), h = s.clone();
            var tween = Laya.Tween.to(e, {
                progress: 1,
                update: new Laya.Handler(this, () => {
                    let t = e.progress, s = l.QuaSlerp(r, h, t);
                    i.rotation = s;
                })
            }, 1e3 * t, o, Laya.Handler.create(this, () => {
                // resolve()
                if (a) {
                    a.run();
                }
            }), n);
            // });


            window["allTweens"].push(tween);
            // console.log("tween",tween)


        }
        static TweenToPos(e, t, i, s, a, n = 0, o = Laya.Ease.linearIn) {
            // var tween = new Promise((resolve, reject) => {
            if (null == i || null == i.position) {
                // resolve();
                return;
            }
            null != e && null != e.progress || (e = {
                progress: 0
            });
            let r = i.position.clone(), h = s.clone();
            var tween = Laya.Tween.to(e, {
                progress: 1,
                update: new Laya.Handler(this, () => {
                    let t = e.progress,
                        s = l.Sub(h, r);
                    i.position = new Laya.Vector3(r.x + s.x * t, r.y + s.y * t, r.z + s.z * t);
                })
            }, 1e3 * t, o, Laya.Handler.create(this, () => {
                // resolve()
                if (a) {
                    a.run();
                }
            }), n);
            // });


            window["allTweens"].push(tween);


            // return tween




        }
        static TweenToScale(e, t, i, s, a, n = 0, o = Laya.Ease.linearIn) {
            if (null == i || null == i.position) return;

            // var tween = new Promise((resolve, reject) => {
            null != e && null != e.progress || (e = {
                progress: 0
            });
            let r = i.getWorldLossyScale().clone(), h = s.clone();
            var tween = Laya.Tween.to(e, {
                progress: 1,
                update: new Laya.Handler(this, () => {
                    let t = e.progress, s = l.Sub(h, r);
                    i.setWorldLossyScale(new Laya.Vector3(r.x + s.x * t, r.y + s.y * t, r.z + s.z * t));
                })
            }, 1e3 * t, o, Laya.Handler.create(this, () => {
                // resolve()
                if (a) {
                    a.run();
                }
            }), n);

            // })
            window["allTweens"].push(tween);

            // return tween


        }
        static TweenToEuler(e, t, i, s, a, n = 0, o = Laya.Ease.linearIn) {

            // var tween = new Promise((resolve, reject) => {
            if (null == i || null == i.position) {
                // resolve()
                return;
            }

            null != e && null != e.progress || (e = {
                progress: 0
            });
            let r = i.rotationEuler.clone(), h = s.clone();


            var tween = Laya.Tween.to(e, {
                progress: 1,
                update: new Laya.Handler(this, () => {
                    let t = e.progress, s = l.Sub(h, r);
                    i.rotationEuler = new Laya.Vector3(r.x + s.x * t, r.y + s.y * t, r.z + s.z * t);
                })
            }, 1e3 * t, o, Laya.Handler.create(this, () => {
                // resolve()
                if (a) {
                    a.run();
                }
            }), n);
            // })
            window["allTweens"].push(tween);

            // return tween

        }
        static Initialize(e) {
            l.Seed = e, l.Count = 0, l.y = l.Y, l.z = l.Z, l.w = l.W;
        }
        static get ZeroVec3() {
            return new Laya.Vector3(0, 0, 0);
        }
        static GetRandom(e) {
            l.Count++;
            var t = l.Seed ^ l.Seed << 11;
            return l.Seed = l.y, l.y = l.z, l.z = l.w, (4294967295 & (l.w = l.w ^ l.w >> 19 ^ t ^ t >> 8)) % e;
        }
        static Random(e, t) {
            return ~~(.001 * l.GetRandom(1e3) * (t - e) + e);
        }
        static GetRandom2(e) {
            l.Count++;
            var t = l.Seed ^ l.Seed << 11;
            return l.Seed = l.y, l.y = l.z, l.z = l.w, (2147483647 & (l.w = l.w ^ l.w >> 19 ^ t ^ t >> 8)) % e;
        }
        static Random_notInArr(e, t, i) {
            let s = l.Random_local(e, t);
            if (0 == i.length) return s;
            let a = !0;
            for (; a;) {
                a = !1;
                for (let e = 0, t = i.length; e < t; ++e) if (s == i[e]) {
                    a = !0;
                    break;
                }
                a && (s = l.Random_local(e, t));
            }
            return s;
        }
        static Random_local(e, t) {
            return ~~(Math.random() * (t - e) + e);
        }
        static Range_local(e, t) {
            return Math.random() * (t - e) + e;
        }
        static ToFixed(e) {
            return Math.floor(100 * e) / 100;
        }
        static ToFixed2(e) {
            return Number(e.toFixed(2));
        }
        static ToFixedN(e, t) {
            return Number(e.toFixed(t));
        }
        static ToFixed2Vec(e) {
            return new Laya.Vector3(l.ToFixed(e.x), l.ToFixed(e.y), l.ToFixed(e.z));
        }
        static QuaternionByEuler(e, t, i) {
            let s = new Laya.Quaternion();
            return Laya.Quaternion.createFromYawPitchRoll(t * this.Deg2Rad, e * this.Deg2Rad, i * this.Deg2Rad, s),
                s;
        }
        static LookAtRotation(e) {
            let t = new Laya.Quaternion();
            return Laya.Quaternion.rotationLookAt(e, new Laya.Vector3(0, 1, 0), t), t;
        }
        static Add(e, t) {
            let i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.add(e, t, i), i;
        }
        static toRightPos(e) {
            return new Laya.Vector3(-1 * e.x, e.y, e.z);
        }
        static toRightRot(e) {
            return new Laya.Vector3(e.x, -1 * e.y, -1 * e.z);
        }
        static VecRot(e, t) {
            let i = new Laya.Vector3(0, 0, 0), s = new Laya.Sprite3D();
            s.transform.rotationEuler = t;
            let a = s.transform.rotation;
            return Laya.Vector3.transformQuat(e, a, i), i;
        }
        static MutQ(e, t) {
            let i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.transformQuat(t, e, i), i;
        }
        static MutN(e, t) {
            let i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.scale(t, e, i), i;
        }
        static Sub(e, t) {
            let i = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.subtract(e, t, i), i;
        }
        static Normalize(e) {
            let t = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.normalize(e, t), t;
        }
        static QuaSlerp(e, t, i) {
            let s = new Laya.Quaternion();
            return Laya.Quaternion.slerp(e, t, i, s), s;
        }
        static Lerp(e, t, i) {
            let s = new Laya.Vector3(0, 0, 0);
            return Laya.Vector3.lerp(e, t, i, s), s;
        }
        static CopyVector3(e) {
            return new Laya.Vector3(e.x, e.y, e.z);
        }
        static CopyQuat(e) {
            return new Laya.Quaternion(e.x, e.y, e.z, e.w);
        }
        static Angle(e, t) {
            let i = l.Normalize(e), s = l.Normalize(t), a = Laya.Vector3.dot(i, s);
            return Math.acos(a) * l.Rad2Deg;
        }
        static ForwardRadian(e, t) {
            let i = l.GetForward(e), s = l.GetForward(t), a = l.Normalize(i), n = l.Normalize(s), o = Laya.Vector3.dot(a, n);
            return Math.acos(o);
        }
        static GetForward(e) {
            let t = new Laya.Vector3(0, 0, 0);
            return e.transform.getForward(t), t;
        }
        static Fog(e, t, i, s) {
            e.enableFog = !0, e.fogColor = l.FogColor(t, i, s), e.fogStart = 70, e.fogRange = 28;
        }
        static FogColor(e, t, i) {
            return new Laya.Vector3(1 * e / 255, 1 * t / 255, 1 * i / 255);
        }
        static isOtherDay(e) {
            var t = new Date(), i = (t.getDay(), t.getMonth(), t.getFullYear(), t.getDate()),
                s = Laya.LocalStorage.getItem(e + "lastday"), a = !1;
            null != s && s.length > 0 ? Number(s) - i != 0 && (a = !0) : a = !0;
            return a;
        }
        static saveOtherDay(e) {
            var t = new Date().getDate();
            Laya.LocalStorage.setItem(e + "lastday", "" + t);
        }
        static getScreenPos(e) {
            let t = e.x, i = e.y, s = e.parent;
            for (; null != s;) {
                let e = s;
                t += e.x, i += e.y, s = s.parent;
            }
            return new Laya.Vector2(t, i);
        }
        static Lerp0(e) {
            return e < 0 ? 0 : e > 1 ? 1 : e;
        }
        static LerpN(e, t, i) {
            return e + (t - e) * (i = (i = i < 0 ? 0 : i) > 1 ? 1 : i);
        }
        static ClampMagnitude(e, t) {
            return Laya.Vector3.scalarLengthSquared(e) > t * t ? l.MutN(t, l.Normalize(e)) : e;
        }
        static SmoothDampV(e, t, i, s, a = Number.MAX_VALUE, n = .016) {
            let o = 2 / (s = Math.max(1e-4, s)), r = o * n, h = 1 / (1 + r + .479999989271164 * r * r + .234999999403954 * r * r * r), p = l.Sub(e, t), c = l.CopyVector3(t), d = a * s, g = l.ClampMagnitude(p, d), m = (l.Sub(e, g),
                l.MutN(n, l.Add(l.MutN(o, g), i)));
            i = l.MutN(h, l.Sub(i, l.MutN(o, m)));
            let y = l.Add(t, l.MutN(h, l.Add(g, m)));
            return Laya.Vector3.dot(l.Sub(c, e), l.Sub(y, c)) > 0 && (y = l.CopyVector3(c),
                i = l.MutN(1 / n, l.Sub(y, c))), y;
        }
        static SmoothDamp(e, t, i, s) {
            let a = Number.MAX_VALUE;
            return l.SmoothDampV(e, t, i, s, a, .016);
        }
        static CalcCubicBezierPointFor2C(e, t, i, s) {
            e > 1 && (e = 1), e < 0 && (e = 0);
            let a = 1 - e, n = e * e, o = a * a, r = l.MutN(o, t), h = l.MutN(2 * a * e, i);
            r = l.Add(r, h);
            let p = l.MutN(n, s);
            return r = l.Add(r, p);
        }
        static GetNearstPos(e, t) {
            let i = 0, s = Laya.Vector3.distance(e, t[i]), a = 0;
            for (let n = 1, o = t.length; n < o; ++n) (a = Laya.Vector3.distance(e, t[n])) < s && (i = n,
                s = a);
            return i;
        }
        static GetNearstPos_spt(e, t) {
            let i = 0, s = Laya.Vector3.distance(e, t[i].transform.position), a = 0;
            for (let n = 1, o = t.length; n < o; ++n) (a = Laya.Vector3.distance(e, t[n].transform.position)) < s && (i = n,
                s = a);
            return i;
        }
        static Distance(e, t, i, s) {
            return Math.sqrt((i - e) * (i - e) + (s - t) * (s - t));
        }
    }
    l.Rad2Deg = 57.29578, l.Deg2Rad = .01745329, l.Y = 842502087, l.Z = 3579807591,
        l.W = 273326509, l.Seed = 1, l.y = l.Y, l.z = l.Z, l.Count = 0;
    class p {
        static getObj(e) {
            let t = null;
            if (this.object[e]) for (let i = 0, s = this.object[e].length; i < s; ++i) if (this.object[e][i] && 0 == this.object[e][i].active) {
                (t = this.object[e][i]).active = !0;
                break;
            }
            return t;
        }
        static createObj(e, t, i) {
            let a = Laya.Sprite3D.instantiate(s.instance.prefabs.getChildByName(e), t, !1, i);
            return null == this.object[e] && (this.object[e] = []), a.active = !0, this.object[e].push(a),
                a;
        }
        static createObjNoCache(e, t, i) {
            let a = Laya.Sprite3D.instantiate(s.instance.prefabs.getChildByName(e), t, !1, i);
            return a.active = !0, a.transform.localPosition = i, a;
        }
        static getOrCreateObj(e, t, i) {
            let s = this.getObj(e);
            return null == s ? (s = this.createObj(e, t, i)).transform.localPosition = i : s.transform.localPosition = i,
                s;
        }
        static DestroyZ(e, t) {
            if (this.object[e]) for (let i = 0, s = this.object[e].length; i < s; ++i) this.object[e][i].transform.position.z <= t && 1 == this.object[e][i].active && (p.caches ? this.object[e][i].active = !1 : (this.object[e][i].destroy(),
                this.object[e][i] = null));
        }
        static DestroyObj(t) {
            for (const e in this.object) if (this.object[e]) for (let i = 0, s = this.object[e].length; i < s; ++i) if (this.object[e][i] == t) return void (p.caches ? this.object[e][i].active = !1 : (this.object[e][i].destroy(),
                this.object[e][i] = null));
            e.Log("未实现00000000000000000！！！" + t.name);
        }
        static clean() {
            for (const e in this.object) if (this.object[e]) for (let t = 0, i = this.object[e].length; t < i; ++t) this.object[e][t].destroy();
            this.object = {};
        }
    }
    p.caches = !0, p.object = {}, function (e) {
        e[e.LoadingView = 0] = "LoadingView", e[e.ResultView = 1] = "ResultView", e[e.ConvergeView = 2] = "ConvergeView",
            e[e.ConvergeView2 = 3] = "ConvergeView2", e[e.ConvergeView3 = 4] = "ConvergeView3",
            e[e.MainView = 5] = "MainView", e[e.GamingView = 6] = "GamingView", e[e.RankView = 7] = "RankView",
            e[e.SkinView = 8] = "SkinView", e[e.RewardView = 9] = "RewardView", e[e.TrySkinView = 10] = "TrySkinView",
            e[e.ReviveView = 11] = "ReviveView", e[e.LevelLoadingView = 12] = "LevelLoadingView",
            e[e.SkinAddView = 13] = "SkinAddView", e[e.RewardBoxView = 14] = "RewardBoxView",
            e[e.NativeBannerView = 15] = "NativeBannerView", e[e.ShareView = 16] = "ShareView",
            e[e.GoldenEggView = 17] = "GoldenEggView", e[e.SystemView = 18] = "SystemView",
            e[e.SigninView = 19] = "SigninView";
    }(n || (n = {}));
    var c, d, g, m, y, u, _, b = Laya.ClassUtils.regClass;
    !function (e) {
        class t extends Laya.Scene {
            constructor() {
                super();
            }
            createChildren() {
                super.createChildren(), this.createView(t.uiView);
            }
        }
        t.uiView = {
            type: "Scene",
            props: {
                width: 750,
                height: 1334
            },
            compId: 2,
            child: [{
                type: "Script",
                props: {
                    y: 0,
                    x: 0,
                    runtime: "script/GameLogic.ts"
                },
                compId: 8
            }],
            loadList: [],
            loadList3D: []
        }, e.StartSceneUI = t, b("ui.StartSceneUI", t);
    }(c || (c = {})), function (e) {
        !function (e) {
            class t extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(t.uiView);
                }
            }
            t.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 9,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 50,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "adlist/ty_bg.jpg",
                    "adlist/ty_hyzw.png",
                    "adlist/ty_rmtj.png",
                    "adlist/ty_btn_jxyx.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 0, "x": 0, "visible": false, "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 12,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "adlist/ty_bg.jpg", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 48,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,LeftTop",
                        "props": { "var": "LeftTop", "top": 0, "left": 0 },
                        "nodeParent": 2,
                        "label": "LeftTop",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Center",
                        "props": { "var": "Center", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Center",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 9,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,bottom",
                        "props": { "name": "bottom", "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "bottom",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 49,
                        "child": [
                            {
                                "type": "Sprite",
                                "searchKey": "Sprite,img_home",
                                "props": { "y": -405, "x": -147, "var": "img_home", "texture": "adlist/ty_btn_jxyx.png", "alpha": 1 },
                                "nodeParent": 49,
                                "label": "img_home",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ]
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.ConvergeViewUI = t, b("ui.Views.ConvergeViewUI", t);
            class i extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(i.uiView);
                }
            }
            i.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        visible: !0,
                        var: "img_bg",
                        top: 0,
                        skin: "common/hei4.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5,
                        sizeGrid: "1,1,1,1"
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: -50,
                        x: 0,
                        visible: !0,
                        skin: "adlist/ty_bg_2.jpg"
                    },
                    compId: 41
                }, {
                    type: "Image",
                    props: {
                        y: 124,
                        x: 43,
                        width: 665,
                        var: "img_adPanel",
                        height: 820
                    },
                    compId: 38,
                    child: [{
                        type: "Image",
                        props: {
                            width: 665,
                            skin: "common/hei4.png",
                            renderType: "mask",
                            name: "fgMask",
                            height: 810,
                            centerY: 0,
                            centerX: 0,
                            sizeGrid: "1,1,1,1"
                        },
                        compId: 36
                    }, {
                        type: "Script",
                        props: {
                            runtime: "view/AdPanelLoop.ts"
                        },
                        compId: 37
                    }]
                }, {
                    type: "Image",
                    props: {
                        name: "bottom",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 43,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -310,
                            x: -25,
                            var: "spt_back",
                            texture: "adlist/ty_x.png"
                        },
                        compId: 40
                    }]
                }],
                loadList: ["common/hei4.png", "adlist/ty_bg_2.jpg", "adlist/ty_x.png"],
                loadList3D: []
            }, e.ConvergeView2UI = i, b("ui.Views.ConvergeView2UI", i);
            class s extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(s.uiView);
                }
            }
            s.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "adlist/ty_bg.jpg",
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    compId: 39
                }, {
                    type: "Image",
                    props: {
                        visible: !1,
                        top: 0,
                        skin: "common/hei4.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5,
                        sizeGrid: "1,1,1,1"
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 76,
                        width: 578,
                        var: "img_adPanel",
                        height: 1334
                    },
                    compId: 5,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "view/AdPanelLoop.ts"
                        },
                        compId: 37
                    }]
                }, {
                    type: "Image",
                    props: {
                        name: "bottom",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 40,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -321,
                            x: -147,
                            var: "spt_back",
                            texture: "adlist/ty_btn_jxyx.png"
                        },
                        compId: 38
                    }]
                }],
                loadList: ["adlist/ty_bg.jpg", "common/hei4.png", "adlist/ty_btn_jxyx.png"],
                loadList3D: []
            }, e.ConvergeView3UI = s, b("ui.Views.ConvergeView3UI", s);
            class a extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(a.uiView);
                }
            }
            a.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 185,
                "selecteID": 186,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 218,
                "loadList3D": [
                ],
                "loadList": [
                    "zjm/zjm_tc.png",
                    "adlist/ty_fh.png",
                    "adlist/di_1.png",
                    "zjm/zjm_jb.png",
                    "comp/image.png",
                    "common/hei4.png",
                    "zjm/zjm_tg.png",
                    "zjm/zjm_gk.png",
                    "zjm/zjm_sz.png",
                    "jbbz/jbbz_shou.png",
                    "common/p_zy_icon_bg.png",
                    "adlist/p_bx_i_bg.png",
                    "mainview/p_more_bg.png",
                    "adlist/ty_db.png",
                    "adlist/ty_btn_cl_2.png",
                    "adlist/ty_hd.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,TopLeft",
                        "props": { "y": 0, "x": 0, "var": "TopLeft", "top": 0, "left": 0 },
                        "nodeParent": 2,
                        "label": "TopLeft",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 67,
                        "child": [
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_exit",
                                "props": { "y": 148, "x": 19, "var": "spt_exit", "texture": "zjm/zjm_tc.png" },
                                "nodeParent": 67,
                                "label": "spt_exit",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 181,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,spt_backConver",
                                "props": { "y": 154, "x": 19, "visible": false, "var": "spt_backConver", "skin": "adlist/ty_fh.png" },
                                "nodeParent": 67,
                                "label": "spt_backConver",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 188,
                                "child": [
                                ],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,TopRight",
                        "props": { "y": 0, "x": 750, "var": "TopRight", "top": 0, "right": 0 },
                        "nodeParent": 2,
                        "label": "TopRight",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 203,
                        "child": [
                            {
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_jump",
                                "props": { "y": 145, "x": -164, "visible": true, "var": "spt_jump", "texture": "zjm/zjm_tg.png" },
                                "nodeParent": 203,
                                "label": "spt_jump",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 202,
                                "child": [
                                ],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Top",
                        "props": { "y": 0, "x": 375, "var": "Top", "top": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Top",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 169,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 69, "x": 0, "centerX": 0 },
                                "nodeParent": 169,
                                "label": "Image",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 137,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 0, "x": -9, "skin": "zjm/zjm_gk.png", "centerX": 0 },
                                        "nodeParent": 137,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 118,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "FontClip",
                                        "searchKey": "FontClip,lbl_level",
                                        "props": { "y": -32, "x": -60, "width": 200, "var": "lbl_level", "value": "88", "skin": "zjm/zjm_sz.png", "sheet": "0123456789", "align": "center" },
                                        "nodeParent": 137,
                                        "label": "lbl_level",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 155,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    }],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Bottom",
                        "props": { "visible": true, "var": "Bottom", "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Bottom",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 33,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 667, "x": 375, "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 125,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_newbee",
                        "props": { "visible": false, "var": "img_newbee", "top": 0, "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "img_newbee",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 63,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,bg",
                                "props": { "top": 0, "right": 0, "name": "bg", "left": 0, "bottom": 0, "alpha": 0.5 },
                                "nodeParent": 63,
                                "label": "bg",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 66,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,step1",
                                "props": { "top": 0, "right": 0, "name": "step1", "left": 0, "bottom": 0 },
                                "nodeParent": 63,
                                "label": "step1",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 182,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Label",
                                        "searchKey": "Label,Label",
                                        "props": { "y": 958, "x": 374, "text": "Click role to move", "strokeColor": "#3A537c", "stroke": 3, "scaleY": 0.86, "scaleX": 0.86, "rotation": 0, "name": "Label", "fontSize": 40, "color": "#ffffff", "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 182,
                                        "label": "Label",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 183,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image,hand",
                                        "props": { "y": 741, "x": 637, "skin": "jbbz/jbbz_shou.png", "scaleY": 0.8, "scaleX": 0.8, "name": "hand", "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 182,
                                        "label": "hand",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 184,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    }],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,step2",
                                "props": { "y": 0, "x": 0, "top": 0, "right": 0, "name": "step2", "left": 0, "bottom": 0 },
                                "nodeParent": 63,
                                "label": "step2",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 185,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Label",
                                        "searchKey": "Label,Label",
                                        "props": { "y": 958, "x": 212, "text": "Move weight elevator", "strokeColor": "#3A537c", "stroke": 3, "name": "Label", "fontSize": 40, "color": "#ffffff", "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 185,
                                        "label": "Label",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 186,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image,hand",
                                        "props": { "y": 1179, "x": 338, "skin": "jbbz/jbbz_shou.png", "scaleY": 0.8, "scaleX": 0.8, "name": "hand", "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 185,
                                        "label": "hand",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 187,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    }],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,step3",
                                "props": { "y": 0, "x": 0, "top": 0, "right": 0, "name": "step3", "left": 0, "bottom": 0 },
                                "nodeParent": 63,
                                "label": "step3",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 214,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image,hand",
                                        "props": { "y": 1134, "x": 375, "skin": "jbbz/jbbz_shou.png", "scaleY": 0.8, "scaleX": 0.8, "name": "hand", "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 214,
                                        "label": "hand",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 216,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image,hand2",
                                        "props": { "y": 1187.5, "x": 515, "skin": "jbbz/jbbz_shou.png", "scaleY": 0.8, "scaleX": 0.8, "name": "hand2", "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 214,
                                        "label": "hand2",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 217,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    }],
                                "$HIDDEN": true
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Center",
                        "props": { "var": "Center", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Center",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 189,
                        "child": [
                        ],
                        "$HIDDEN": false
                    }],
                "animations": [
                    {
                        "nodes": [
                            {
                                "target": 183,
                                "keyframes": {
                                    "y": [
                                        {
                                            "value": 958,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "y",
                                            "index": 0
                                        },
                                        {
                                            "value": 958,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "y",
                                            "index": 10
                                        },
                                        {
                                            "value": 958,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "y",
                                            "index": 20
                                        }],
                                    "x": [
                                        {
                                            "value": 374,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "x",
                                            "index": 0
                                        },
                                        {
                                            "value": 374,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "x",
                                            "index": 10
                                        },
                                        {
                                            "value": 374,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "x",
                                            "index": 20
                                        }],
                                    "scaleY": [
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleY",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleY",
                                            "index": 10
                                        },
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleY",
                                            "index": 20
                                        }],
                                    "scaleX": [
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleX",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleX",
                                            "index": 10
                                        },
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "scaleX",
                                            "index": 20
                                        }],
                                    "anchorY": [
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorY",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorY",
                                            "index": 10
                                        },
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorY",
                                            "index": 20
                                        }],
                                    "anchorX": [
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorX",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorX",
                                            "index": 10
                                        },
                                        {
                                            "value": 0.5,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 183,
                                            "key": "anchorX",
                                            "index": 20
                                        }]
                                }
                            },
                            {
                                "target": 186,
                                "keyframes": {
                                    "x": [
                                        {
                                            "value": 375,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "x",
                                            "index": 0
                                        },
                                        {
                                            "value": 375,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "x",
                                            "index": 2
                                        },
                                        {
                                            "value": 375,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "x",
                                            "index": 3
                                        }],
                                    "scaleY": [
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleY",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleY",
                                            "index": 10
                                        },
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleY",
                                            "index": 20
                                        }],
                                    "scaleX": [
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleX",
                                            "index": 0
                                        },
                                        {
                                            "value": 0.8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleX",
                                            "index": 10
                                        },
                                        {
                                            "value": 1,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 186,
                                            "key": "scaleX",
                                            "index": 20
                                        }]
                                }
                            }],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 2
                    }],
                "$HIDDEN": false
            }, e.GamingViewUI = a, b("ui.Views.GamingViewUI", a);
            class n extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(n.uiView);
                }
            }
            n.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "common/hei4.png",
                        sizeGrid: "1,1,1,1",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .9
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        var: "spt_dan",
                        skin: "jbbz/jbbz_dan.png",
                        scaleY: 1.2,
                        scaleX: 1.2,
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 1126,
                        x: 0,
                        width: 750,
                        visible: !0,
                        var: "img_gamelist",
                        sizeGrid: "1,1,1,1",
                        height: 198,
                        bottom: 10
                    },
                    compId: 12,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "view/AdListLoop.ts"
                        },
                        compId: 25
                    }, {
                        type: "Sprite",
                        props: {
                            x: 172,
                            visible: !1,
                            texture: "adlist/p_t_bkyx.png"
                        },
                        compId: 161
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 158,
                        x: 644,
                        visible: !1,
                        var: "btn_close",
                        texture: "common/ad-close.png"
                    },
                    compId: 162
                }, {
                    type: "Image",
                    props: {
                        var: "img_title",
                        skin: "jbbz/jbbz_bt_6.png",
                        centerY: -381,
                        centerX: 5
                    },
                    compId: 5
                }, {
                    type: "Image",
                    props: {
                        x: 171,
                        skin: "jbbz/jbbz_jdt_2.png",
                        centerY: 219
                    },
                    compId: 7
                }, {
                    type: "Image",
                    props: {
                        x: 170,
                        width: 34,
                        var: "img_bar",
                        skin: "jbbz/jbbz_jdt_1.png",
                        sizeGrid: "0,18,0,18",
                        centerY: 218
                    },
                    compId: 8
                }, {
                    type: "Image",
                    props: {
                        y: 1227,
                        x: 376,
                        var: "btnClick",
                        skin: "jbbz/jbbz_btn.png",
                        scaleY: 1,
                        scaleX: 1,
                        bottom: 50,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 9,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 37,
                            x: 80,
                            texture: "jbbz/jbbz_kdlj.png"
                        },
                        compId: 10
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "spt_shou",
                        skin: "jbbz/jbbz_shou.png",
                        centerY: 54,
                        centerX: 52,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 11
                }, {
                    type: "Label",
                    props: {
                        x: 260.9462890625,
                        text: "砸开获得20~50金币",
                        fontSize: 30,
                        color: "#ffffff",
                        centerY: 159
                    },
                    compId: 171
                }],
                animations: [{
                    nodes: [{
                        target: 11,
                        keyframes: {
                            x: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "x",
                                index: 0
                            }],
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .8,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleY",
                                index: 20
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .8,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "scaleX",
                                index: 20
                            }],
                            centerX: [{
                                value: 52,
                                tweenMethod: "linearNone",
                                tween: !0,
                                target: 11,
                                key: "centerX",
                                index: 0
                            }]
                        }
                    }],
                    name: "ani1",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }],
                loadList: ["common/hei4.png", "jbbz/jbbz_dan.png", "adlist/p_t_bkyx.png", "common/ad-close.png", "jbbz/jbbz_bt_6.png", "jbbz/jbbz_jdt_2.png", "jbbz/jbbz_jdt_1.png", "jbbz/jbbz_btn.png", "jbbz/jbbz_kdlj.png", "jbbz/jbbz_shou.png"],
                loadList3D: []
            }, e.GoldenEggViewUI = n, b("ui.Views.GoldenEggViewUI", n);
            class o extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(o.uiView);
                }
            }
            o.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 11,
                "searchKey": "View",
                "props": { "zOrder": 9, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 12,
                "loadList3D": [
                ],
                "loadList": [
                    "loading/bg.jpg",
                    "loading/logo.png",
                    "loading/jdt.png",
                    "loading/jdt_1.png",
                    "loading/jdt_2.png",
                    "loading/wz.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "loading/bg.jpg", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 122, "skin": "loading/logo.png", "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_process",
                        "props": { "y": 983, "x": 59, "width": 645, "var": "img_process", "skin": "loading/jdt.png", "sizeGrid": "0,26,0,25" },
                        "nodeParent": 2,
                        "label": "img_process",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite,spt_process",
                        "props": { "y": 858, "x": 59, "var": "spt_process", "texture": "loading/jdt_1.png" },
                        "nodeParent": 2,
                        "label": "spt_process",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 9,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 844, "x": 636, "texture": "loading/jdt_2.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 10,
                        "child": [
                        ],
                        "$HIDDEN": false
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }],
                "$HIDDEN": false
            }, e.LevelLoadingViewUI = o, b("ui.Views.LevelLoadingViewUI", o);
            class r extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(r.uiView);
                }
            }
            r.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 11,
                "searchKey": "View",
                "props": { "zOrder": 9, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 12,
                "loadList3D": [
                ],
                "loadList": [
                    "loading/bg.jpg",
                    "loading/logo.png",
                    "loading/jdt.png",
                    "loading/jdt_1.png",
                    "loading/jdt_2.png",
                    "loading/wz.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "loading/bg.jpg", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 3,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 122, "skin": "loading/logo.png", "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_process",
                        "props": { "y": 983, "x": 59, "width": 645, "var": "img_process", "skin": "loading/jdt.png", "sizeGrid": "0,26,0,25" },
                        "nodeParent": 2,
                        "label": "img_process",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 7,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite,spt_process",
                        "props": { "y": 858, "x": 59, "var": "spt_process", "texture": "loading/jdt_1.png" },
                        "nodeParent": 2,
                        "label": "spt_process",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 9,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 844, "x": 636, "texture": "loading/jdt_2.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 10,
                        "child": [
                        ],
                        "$HIDDEN": false
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }],
                "$HIDDEN": false
            }, e.LoadingViewUI = r, b("ui.Views.LoadingViewUI", r);
            class h extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(h.uiView);
                }
            }
            h.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 11,
                "selecteID": 209,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 210,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "comp/image.png",
                    "common/p_zy_icon_bg.png",
                    "adlist/p_bx_i_bg.png",
                    "mainview/p_more_bg.png",
                    "zjm/zjm_ksyx.png",
                    "main1/p_i_music.png",
                    "main1/p_i_zd.png",
                    "zjm/zjm_sc.png",
                    "zjm/zjm_qd.png",
                    "main1/p_i_sz.png",
                    "zjm/zjm_gk.png",
                    "zjm/zjm_sz.png",
                    "adlist/ty_btn_gdyx.png",
                    "adlist/adBg.png",
                    "zjm/zmtb_1.png",
                    "zjm/zjm_jbd.png",
                    "zjm/zjm_tld.png",
                    "zjm/zjm_tl.png",
                    "zjm/zjm_jb.png",
                    "zjm/zjm_+.png",
                    "adlist/di_1.png",
                    "adlist/hei4.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 170,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Center",
                        "props": { "var": "Center", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 },
                        "nodeParent": 2,
                        "label": "Center",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 5,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_cover1",
                                "props": { "y": 157, "x": -375, "width": 751, "visible": false, "var": "img_cover1", "height": 515 },
                                "nodeParent": 5,
                                "label": "img_cover1",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 87,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_cover2",
                                "props": { "y": -665, "x": -375, "width": 751, "visible": false, "var": "img_cover2", "height": 330 },
                                "nodeParent": 5,
                                "label": "img_cover2",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 88,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_start",
                                "props": { "y": 313, "x": -1, "visible": true, "var": "img_start", "skin": "zjm/zjm_ksyx.png", "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 },
                                "nodeParent": 5,
                                "label": "img_start",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 22,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_store",
                                "props": { "y": 313, "x": 291, "var": "img_store", "skin": "zjm/zjm_sc.png", "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 5,
                                "label": "img_store",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 114,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_signIn",
                                "props": { "y": 316, "x": -293, "visible": true, "var": "img_signIn", "skin": "zjm/zjm_qd.png", "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 5,
                                "label": "img_signIn",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 115,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": -412, "centerX": 0 },
                                "nodeParent": 5,
                                "label": "Image",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 159,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 0, "x": -9, "skin": "zjm/zjm_gk.png", "centerX": 0 },
                                        "nodeParent": 159,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 118,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "FontClip",
                                        "searchKey": "FontClip,lbl_level",
                                        "props": { "y": -36, "x": -57, "width": 200, "var": "lbl_level", "value": "1", "skin": "zjm/zjm_sz.png", "sheet": "0123456789", "align": "center" },
                                        "nodeParent": 159,
                                        "label": "lbl_level",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 155,
                                        "child": [
                                        ],
                                        "$HIDDEN": false
                                    }],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -525, "x": -352.5, "texture": "main1/db.png" },
                                "nodeParent": 5,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 208,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_sound",
                                "props": { "y": -485, "x": -312.5, "var": "img_sound", "skin": "main1/p_i_music_off.png", "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 5,
                                "label": "img_sound",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 207,
                                "child": [
                                ],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,TopLeft",
                        "props": { "var": "TopLeft", "top": 0, "left": 0 },
                        "nodeParent": 2,
                        "label": "TopLeft",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 11,
                        "child": [
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 25, "x": 260, "texture": "zjm/zjm_jbd.png" },
                                "nodeParent": 11,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 175,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 26.5, "x": 23, "texture": "zjm/zjm_tld.png" },
                                "nodeParent": 11,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 176,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 26.5, "x": 23, "texture": "zjm/zjm_tl.png" },
                                "nodeParent": 11,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 177,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 28.5, "x": 262, "texture": "zjm/zjm_jb.png" },
                                "nodeParent": 11,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 178,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_hpAdd",
                                "props": { "y": 37, "x": 181, "var": "spt_hpAdd", "texture": "zjm/zjm_+.png" },
                                "nodeParent": 11,
                                "label": "spt_hpAdd",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 179,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_coinAdd",
                                "props": { "y": 34, "x": 417, "var": "spt_coinAdd", "texture": "zjm/zjm_+.png" },
                                "nodeParent": 11,
                                "label": "spt_coinAdd",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 180,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lbl_hp",
                                "props": { "y": 46.5, "x": 73, "width": 100, "var": "lbl_hp", "text": "20", "fontSize": 31, "color": "#ab4ae9", "align": "center" },
                                "nodeParent": 11,
                                "label": "lbl_hp",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 181,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lbl_coin",
                                "props": { "y": 46.5, "x": 315, "width": 100, "var": "lbl_coin", "text": "200", "fontSize": 31, "color": "#ab4ae9", "align": "center" },
                                "nodeParent": 11,
                                "label": "lbl_coin",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 182,
                                "child": [
                                ],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lab_addHpTimer",
                                "props": { "y": 87, "x": 47, "width": 163, "var": "lab_addHpTimer", "strokeColor": "#000000", "stroke": 2, "height": 31, "fontSize": 31, "color": "#ffffff", "align": "center" },
                                "nodeParent": 11,
                                "label": "lab_addHpTimer",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 209,
                                "child": [
                                ],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Bottom",
                        "props": { "visible": true, "var": "Bottom", "centerX": 0, "bottom": -5 },
                        "nodeParent": 2,
                        "label": "Bottom",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 23,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 0, "x": 0, "top": 0, "skin": "adlist/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0 },
                                "nodeParent": 23,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 160,
                                "child": [
                                ],
                                "$HIDDEN": false
                            }],
                        "$HIDDEN": false
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }],
                "$HIDDEN": false
            }, e.MainViewUI = h, b("ui.Views.MainViewUI", h);
            class l extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(l.uiView);
                }
            }
            l.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "img_bg",
                        top: 0,
                        skin: "native/hei4.png",
                        sizeGrid: "1,1,1,1",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5
                    },
                    compId: 3
                }, {
                    type: "Sprite",
                    props: {
                        y: 849,
                        x: 238,
                        var: "spt_enterAd",
                        texture: "native/ad-btn-bg.png"
                    },
                    compId: 5,
                    child: [{
                        type: "Label",
                        props: {
                            y: 33,
                            x: 57,
                            var: "lbl_btn",
                            text: "点击查看",
                            fontSize: 40,
                            color: "#ffffff"
                        },
                        compId: 9
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 440,
                        x: 60,
                        width: 624,
                        var: "img_clickArea",
                        skin: "native/ad-box.png",
                        sizeGrid: "19,29,25,22",
                        height: 373
                    },
                    compId: 6,
                    child: [{
                        type: "Image",
                        props: {
                            y: 11,
                            x: 14,
                            width: 603,
                            var: "img_srcAd",
                            skin: "comp/main.png",
                            height: 302
                        },
                        compId: 8
                    }, {
                        type: "Label",
                        props: {
                            y: 326,
                            x: 64,
                            width: 500,
                            var: "lbl_desc",
                            valign: "middle",
                            text: "这里是广告文字",
                            fontSize: 28,
                            color: "#000000",
                            bold: !0,
                            align: "center"
                        },
                        compId: 10
                    }, {
                        type: "Sprite",
                        props: {
                            y: 21,
                            x: 23,
                            var: "btn_close",
                            texture: "native/ad-close.png"
                        },
                        compId: 7
                    }]
                }],
                loadList: ["native/hei4.png", "native/ad-btn-bg.png", "native/ad-box.png", "comp/main.png", "native/ad-close.png"],
                loadList3D: []
            }, e.NativeBannerViewUI = l, b("ui.Views.NativeBannerViewUI", l);
            class p extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(p.uiView);
                }
            }
            p.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "game/hei4.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .2,
                        sizeGrid: "2,2,2,2"
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        var: "Center",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 4,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -548,
                            x: -356,
                            texture: "game/phb_biaoti.png"
                        },
                        compId: 7
                    }, {
                        type: "List",
                        props: {
                            y: -409,
                            x: -358,
                            width: 800,
                            var: "list_rank",
                            spaceY: 15,
                            repeatY: 10,
                            repeatX: 1,
                            height: "100"
                        },
                        compId: 8,
                        child: [{
                            type: "Box",
                            props: {
                                x: 0,
                                renderType: "render"
                            },
                            compId: 9,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 716,
                                    skin: "game/phb_di.png",
                                    sizeGrid: "0,66,0,63",
                                    name: "img_back"
                                },
                                compId: 11
                            }, {
                                type: "Image",
                                props: {
                                    y: 9.5,
                                    x: 47,
                                    skin: "game/phb_no1.png",
                                    name: "spt_pos"
                                },
                                compId: 12
                            }, {
                                type: "Label",
                                props: {
                                    y: 25.5,
                                    x: 111,
                                    width: 182,
                                    text: "你看起来好好吃",
                                    name: "lbl_name",
                                    height: 26,
                                    fontSize: 26,
                                    color: "#ffffff"
                                },
                                compId: 13
                            }, {
                                type: "Label",
                                props: {
                                    y: 26.5,
                                    x: 320,
                                    text: "0:6m:21S",
                                    name: "lbl_time",
                                    fontSize: 26,
                                    color: "#ffd618"
                                },
                                compId: 14
                            }, {
                                type: "Sprite",
                                props: {
                                    y: 13,
                                    x: 455,
                                    texture: "game/zr_leixing_1.png",
                                    scaleY: .8,
                                    scaleX: .8
                                },
                                compId: 15
                            }, {
                                type: "Label",
                                props: {
                                    y: 25.5,
                                    x: 511,
                                    width: 78,
                                    text: "特殊车",
                                    name: "lbl_carName",
                                    height: 26,
                                    fontSize: 26,
                                    color: "#18e1ff"
                                },
                                compId: 16
                            }, {
                                type: "FontClip",
                                props: {
                                    y: 20,
                                    x: 49,
                                    width: 52,
                                    value: "89",
                                    skin: "game/ssjl_jingbishuzi.png",
                                    sheet: "0123456789",
                                    name: "fc_site",
                                    height: 39,
                                    align: "center"
                                },
                                compId: 17
                            }, {
                                type: "Image",
                                props: {
                                    y: -4,
                                    x: 611,
                                    skin: "skin/car_01.png",
                                    scaleY: .3,
                                    scaleX: .3,
                                    name: "img_carSkin"
                                },
                                compId: 18
                            }]
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "Bottom",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 5,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -144,
                            x: -89,
                            var: "spt_next",
                            texture: "game/phb_jixu.png"
                        },
                        compId: 10
                    }]
                }],
                loadList: ["game/hei4.png", "game/phb_biaoti.png", "game/phb_di.png", "game/phb_no1.png", "game/zr_leixing_1.png", "game/ssjl_jingbishuzi.png", "skin/car_01.png", "game/phb_jixu.png"],
                loadList3D: []
            }, e.RankViewUI = p, b("ui.Views.RankViewUI", p);
            class c extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(c.uiView);
                }
            }
            c.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 224,
                "searchKey": "View",
                "props": { "width": 750, "visible": true, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0, "alpha": 1 },
                "nodeParent": -1,
                "maxID": 225,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "adlist/logo.png",
                    "js/js_sb.png",
                    "js/js_sl.png",
                    "js/js_yuan_2.png",
                    "js/js_yuan_1.png",
                    "sc/sc_btn_2.png",
                    "sc/sc_sp.png",
                    "sc/sc_jb.png",
                    "js/js_jxyx.png",
                    "adlist/di_1.png",
                    "zjm/zjm_jb.png",
                    "comp/image.png",
                    "jbbz/jbbz_btn.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "y": 0, "x": 0, "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 73,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 75, "x": 13, "texture": "zjm/zjm_jbd.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 221,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 79, "x": 15, "texture": "zjm/zjm_jb.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 222,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,fc_coin",
                        "props": { "y": 98, "x": 72, "width": 91, "var": "fc_coin", "text": "200", "height": 31, "fontSize": 31, "color": "#ab4ae9", "align": "center" },
                        "nodeParent": 2,
                        "label": "fc_coin",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 223,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_scale",
                        "props": { "var": "img_scale", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "img_scale",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 156,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,Center",
                                "props": { "x": 0, "var": "Center", "centerY": 0 },
                                "nodeParent": 156,
                                "label": "Center",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 5,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": -332, "x": 0 },
                                        "nodeParent": 5,
                                        "label": "Sprite",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 164,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_lose",
                                                "props": { "y": -52, "x": -264, "var": "img_lose", "skin": "js/js_sb.png" },
                                                "nodeParent": 164,
                                                "label": "img_lose",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 158,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_win",
                                                "props": { "y": -148, "x": -265, "var": "img_win", "skin": "js/js_sl.png" },
                                                "nodeParent": 164,
                                                "label": "img_win",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 165,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite,img_get",
                                        "props": { "y": 78, "x": -142.5, "var": "img_get", "texture": "sc/sc_btn_2.png" },
                                        "nodeParent": 5,
                                        "label": "img_get",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 163,
                                        "child": [
                                            {
                                                "x": 60,
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": 13, "x": 22, "texture": "sc/sc_sp.png" },
                                                "nodeParent": 163,
                                                "label": "Sprite",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 166,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "x": 60,
                                                "type": "Label",
                                                "searchKey": "Label",
                                                "props": { "y": 27, "x": 91, "text": "Reward *4", "fontSize": 35, "color": "#ffffff", "bold": true },
                                                "nodeParent": 163,
                                                "label": "Label",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 169,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": -24, "x": -84, "texture": "sc/sc_jb.png" },
                                        "nodeParent": 5,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 167,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Label",
                                        "searchKey": "Label,lbl_getCoin",
                                        "props": { "y": -10, "x": -2, "var": "lbl_getCoin", "text": "x500", "fontSize": 40, "color": "#ffffff" },
                                        "nodeParent": 5,
                                        "label": "lbl_getCoin",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 168,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_next",
                                "props": { "y": 208, "x": -58, "var": "spt_next", "texture": "js/js_jxyx.png" },
                                "nodeParent": 156,
                                "label": "spt_next",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 220,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Bottom",
                        "props": { "var": "Bottom", "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Bottom",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 18,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.ResultViewUI = c, b("ui.Views.ResultViewUI", c);
            class d extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(d.uiView);
                }
            }
            d.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 77,
                "selecteID": 155,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 159,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "main/daojishi-1.png",
                    "gaming/p_f_cgsb.png",
                    "gaming/p_coin_bg.png",
                    "store/p_b_lans.png",
                    "gaming/p_f_ljlq.png",
                    "box/xxl_xing_btn.png",
                    "main1/p_num_gk.png",
                    "gaming/p_gx_bg.png",
                    "gaming/p_gx_gou.png",
                    "main1/p_gk_bg.png",
                    "main1/p_f_gk.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 17,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_scale",
                        "props": { "var": "img_scale", "scaleY": 1, "scaleX": 1, "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "img_scale",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 158,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,Center",
                                "props": { "x": 0, "var": "Center", "centerY": -91, "centerX": 0 },
                                "nodeParent": 158,
                                "label": "Center",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 6,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -425, "x": -142, "skin": "main/daojishi-1.png" },
                                        "nodeParent": 6,
                                        "label": "Image",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 10,
                                        "child": [
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite,spt_mask",
                                                "props": { "var": "spt_mask", "renderType": "mask" },
                                                "nodeParent": 10,
                                                "label": "spt_mask",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 11,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": -424, "x": -289.4228515625, "texture": "gaming/p_f_cgsb.png" },
                                        "nodeParent": 6,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 12,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 48, "x": -105, "texture": "gaming/p_coin_bg.png" },
                                        "nodeParent": 6,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 76,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image,img_next",
                                        "props": { "y": 117, "x": -145, "width": 287, "var": "img_next", "skin": "store/p_b_lans.png", "sizeGrid": "46,66,47,66", "height": 101 },
                                        "nodeParent": 6,
                                        "label": "img_next",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 23,
                                        "child": [
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": 31, "x": 66, "texture": "gaming/p_f_ljlq.png" },
                                                "nodeParent": 23,
                                                "label": "Sprite",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 75,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 35, "x": -120.9228515625, "texture": "box/xxl_xing_btn.png", "scaleY": 0.6, "scaleX": 0.6 },
                                        "nodeParent": 6,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 72,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "FontClip",
                                        "searchKey": "FontClip,fc_starNum",
                                        "props": { "y": 53, "x": -3.5, "var": "fc_starNum", "value": "3", "skin": "main1/p_num_gk.png", "sheet": "0123456789" },
                                        "nodeParent": 6,
                                        "label": "fc_starNum",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 73,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -116, "x": 0 },
                                        "nodeParent": 6,
                                        "label": "Image",
                                        "isOpen": false,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 74,
                                        "child": [
                                            {
                                                "type": "Label",
                                                "searchKey": "Label",
                                                "props": { "y": 390, "x": -103, "width": 256.6845703125, "text": "观看视频，3倍领取", "height": 30, "fontSize": 30, "color": "#999999" },
                                                "nodeParent": 74,
                                                "label": "Label",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 71,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite,spt_kuang",
                                                "props": { "y": 387, "x": -153, "var": "spt_kuang", "texture": "gaming/p_gx_bg.png" },
                                                "nodeParent": 74,
                                                "label": "spt_kuang",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 24,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite,spt_gou",
                                                "props": { "y": 391, "x": -148, "var": "spt_gou", "texture": "gaming/p_gx_gou.png" },
                                                "nodeParent": 74,
                                                "label": "spt_gou",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 70,
                                                "child": [
                                                ]
                                            }],
                                        "$HIDDEN": false
                                    },
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -496, "centerX": 0 },
                                        "nodeParent": 6,
                                        "label": "Image",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 77,
                                        "child": [
                                            {
                                                "x": 60,
                                                "type": "Image",
                                                "searchKey": "Image",
                                                "props": { "y": 0, "x": -9, "skin": "main1/p_gk_bg.png", "centerX": 0 },
                                                "nodeParent": 77,
                                                "label": "Image",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 118,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "x": 60,
                                                "type": "Image",
                                                "searchKey": "Image",
                                                "props": { "y": 13, "x": 8, "skin": "main1/p_f_gk.png", "centerX": 0 },
                                                "nodeParent": 77,
                                                "label": "Image",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 154,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "x": 60,
                                                "type": "FontClip",
                                                "searchKey": "FontClip,lbl_level",
                                                "props": { "y": 14, "x": -2, "var": "lbl_level", "value": "12", "skin": "main1/p_num_gk.png", "sheet": "0123456789", "align": "center" },
                                                "nodeParent": 77,
                                                "label": "lbl_level",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 155,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Bottom",
                        "props": { "y": 667, "x": 375, "visible": false, "var": "Bottom", "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Bottom",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 5,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.ReviveViewUI = d, b("ui.Views.ReviveViewUI", d);
            class g extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(g.uiView);
                }
            }
            g.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 6,
                "selecteID": 121,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 140,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "box/p_t_zjjl.png",
                    "jbbz/jbbz_db.png",
                    "jbbz/jbbz_btn.png",
                    "sc/sc_sp.png",
                    "jbbz/jbbz_zk3g.png",
                    "jbbz/jbbz_bxd_2.png",
                    "jbbz/jbbz_bx.png",
                    "jbbz/jbbz_bxd_3.png",
                    "mrqd/mrqd_jb_3.png",
                    "jbbz/jbbz_sp.png",
                    "jbbz/jbbz_ys.png",
                    "box/p_zj_bg.png",
                    "box/xxl_xing_btn.png",
                    "box/p_zj_gou.png",
                    "skin/sc_2.png",
                    "jbbz/jbbz_blxx.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 106,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_scale",
                        "props": { "var": "img_scale", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "img_scale",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 126,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,Center",
                                "props": { "y": -145, "x": 0, "var": "Center", "centerY": -145, "centerX": 0 },
                                "nodeParent": 126,
                                "label": "Center",
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 15,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -293, "visible": false, "skin": "box/p_t_zjjl.png", "centerX": 5 },
                                        "nodeParent": 15,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 110,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -243, "x": -299, "skin": "jbbz/jbbz_db.png", "sizeGrid": "79,63,87,55" },
                                        "nodeParent": 15,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 109,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,spt_videoGet",
                                        "props": { "y": 448, "x": 0, "width": 352, "var": "spt_videoGet", "skin": "jbbz/jbbz_btn.png", "height": 110, "anchorY": 0.5, "anchorX": 0.5 },
                                        "nodeParent": 15,
                                        "label": "spt_videoGet",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 5,
                                        "child": [
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": 26, "x": 53, "texture": "sc/sc_sp.png" },
                                                "nodeParent": 5,
                                                "label": "Sprite",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 134,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": 31, "x": 123, "texture": "jbbz/jbbz_zk3g.png" },
                                                "nodeParent": 5,
                                                "label": "Sprite",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 135,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "List",
                                        "searchKey": "List,listBox",
                                        "props": { "y": -186, "x": -252, "width": 535, "var": "listBox", "spaceY": 35, "spaceX": 38, "repeatY": 3, "repeatX": 3, "height": 526, "alpha": 1 },
                                        "nodeParent": 15,
                                        "label": "listBox",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 16,
                                        "child": [
                                            {
                                                "type": "Box",
                                                "searchKey": "Box",
                                                "props": { "y": 0, "x": 0, "width": 145, "renderType": "render", "height": 145 },
                                                "nodeParent": 16,
                                                "label": "Box",
                                                "isDirectory": true,
                                                "isAniNode": false,
                                                "hasChild": true,
                                                "compId": 17,
                                                "child": [
                                                    {
                                                        "type": "Image",
                                                        "searchKey": "Image,bg",
                                                        "props": { "skin": "jbbz/jbbz_bxd_2.png", "name": "bg" },
                                                        "nodeParent": 17,
                                                        "label": "bg",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 18,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite,spt_close",
                                                        "props": { "y": 17.5, "x": 9.5, "texture": "jbbz/jbbz_bx.png", "name": "spt_close" },
                                                        "nodeParent": 17,
                                                        "label": "spt_close",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 131,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite,spt_open1",
                                                        "props": { "y": 117.5, "x": 17.5, "texture": "jbbz/jbbz_bxd_3.png", "name": "spt_open1" },
                                                        "nodeParent": 17,
                                                        "label": "spt_open1",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 132,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite,spt_open2",
                                                        "props": { "y": 9, "x": 13.5, "texture": "mrqd/mrqd_jb_3.png", "name": "spt_open2" },
                                                        "nodeParent": 17,
                                                        "label": "spt_open2",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 133,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Label",
                                                        "searchKey": "Label,lbl_coinNum",
                                                        "props": { "y": 123, "x": 41, "width": 83, "valign": "top", "text": "X50", "name": "lbl_coinNum", "height": 30, "fontSize": 30, "color": "#ffffff", "align": "center" },
                                                        "nodeParent": 17,
                                                        "label": "lbl_coinNum",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 27,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite,spt_vedio",
                                                        "props": { "y": 9, "x": 125, "texture": "jbbz/jbbz_sp.png", "name": "spt_vedio" },
                                                        "nodeParent": 17,
                                                        "label": "spt_vedio",
                                                        "isDirectory": false,
                                                        "isAniNode": false,
                                                        "hasChild": false,
                                                        "compId": 136,
                                                        "child": [
                                                        ]
                                                    }]
                                            }]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite,spt_keyStore",
                                        "props": { "y": -371, "x": -157, "var": "spt_keyStore" },
                                        "nodeParent": 15,
                                        "label": "spt_keyStore",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 10,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,key1",
                                                "props": { "y": 15.5, "x": 55, "skin": "jbbz/jbbz_ys.png", "name": "key1" },
                                                "nodeParent": 10,
                                                "label": "key1",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 11,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,key2",
                                                "props": { "y": 16.5, "x": 129.25, "skin": "jbbz/jbbz_ys.png", "name": "key2" },
                                                "nodeParent": 10,
                                                "label": "key2",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 29,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,key3",
                                                "props": { "y": 16.5, "x": 203, "skin": "jbbz/jbbz_ys.png", "name": "key3" },
                                                "nodeParent": 10,
                                                "label": "key3",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 30,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,lbl_keyCount",
                                                "props": { "y": -30, "x": 59.3154296875, "visible": false, "var": "lbl_keyCount", "text": "可开启3个宝箱", "fontSize": 30, "color": "#ffffff" },
                                                "nodeParent": 10,
                                                "label": "lbl_keyCount",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 123,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": -394, "x": -67.694091796875, "visible": false, "texture": "box/p_zj_bg.png" },
                                        "nodeParent": 15,
                                        "label": "Sprite",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 108,
                                        "child": [
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite,spt_hcoin",
                                                "props": { "y": 19, "x": 23.25, "var": "spt_hcoin", "texture": "box/xxl_xing_btn.png", "scaleY": 0.8, "scaleX": 0.8 },
                                                "nodeParent": 108,
                                                "label": "spt_hcoin",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 113,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,lbl_hcoinNum",
                                                "props": { "y": 113, "x": 33, "var": "lbl_hcoinNum", "valign": "top", "text": "+ 10", "fontSize": 30, "color": "#ffffff", "align": "center" },
                                                "nodeParent": 108,
                                                "label": "lbl_hcoinNum",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 114,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite",
                                                "props": { "y": -18, "x": -15, "texture": "box/p_zj_gou.png" },
                                                "nodeParent": 108,
                                                "label": "Sprite",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 122,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,spt_pf",
                                                "props": { "var": "spt_pf", "skin": "skin/sc_2.png", "centerY": 0, "centerX": 0 },
                                                "nodeParent": 108,
                                                "label": "spt_pf",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 128,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "x": 375, "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 6,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_gamelist",
                                "props": { "y": -200, "x": -375, "width": 750, "visible": true, "var": "img_gamelist", "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "height": 198, "alpha": 0 },
                                "nodeParent": 6,
                                "label": "img_gamelist",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 23,
                                "child": [
                                    {
                                        "type": "Script",
                                        "source": "src/view/AdListLoop.ts",
                                        "searchKey": "Script,AdListLoop",
                                        "props": { "runtime": "view/AdListLoop.ts" },
                                        "nodeParent": 23,
                                        "label": "AdListLoop",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 24,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,spt_next",
                                "props": { "y": -267, "x": -79.5, "width": 161, "var": "spt_next", "skin": "jbbz/jbbz_blxx.png", "height": 43 },
                                "nodeParent": 6,
                                "label": "spt_next",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 121,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 85, "x": 23, "texture": "zjm/zjm_jbd.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 137,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Sprite",
                        "searchKey": "Sprite",
                        "props": { "y": 89, "x": 25, "texture": "zjm/zjm_jb.png" },
                        "nodeParent": 2,
                        "label": "Sprite",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 138,
                        "child": [
                        ],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Label",
                        "searchKey": "Label,fc_coin",
                        "props": { "y": 108, "x": 82, "width": 91, "var": "fc_coin", "text": "200", "height": 31, "fontSize": 31, "color": "#ab4ae9", "align": "center" },
                        "nodeParent": 2,
                        "label": "fc_coin",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 139,
                        "child": [
                        ],
                        "$HIDDEN": false
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.RewardBoxViewUI = g, b("ui.Views.RewardBoxViewUI", g);
            class m extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(m.uiView);
                }
            }
            m.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 165,
                "selecteID": 11,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 166,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "jbbz/jbbz_db2.png",
                    "jbbz/jbbz_bt_2.png",
                    "jbbz/jbbz_gx.png",
                    "sc/sc_di.png",
                    "jbbz/jbbz_btn.png",
                    "jbbz/jbbz_lq.png",
                    "zjm/zjm_tl.png",
                    "sc/sc_sp.png",
                    "jbbz/jbbz_tld.png",
                    "jbbz/jbbz_tg.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.7 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,img_scale",
                        "props": { "var": "img_scale", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "img_scale",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 16,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 0, "x": 0, "centerY": 0, "centerX": 0 },
                                "nodeParent": 16,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 5,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -458, "x": -241, "texture": "jbbz/jbbz_db2.png" },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 7,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_title",
                                "props": { "y": -459, "x": -131, "var": "img_title", "skin": "jbbz/jbbz_bt_2.png" },
                                "nodeParent": 16,
                                "label": "img_title",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 6,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -465, "x": -242, "texture": "jbbz/jbbz_gx.png" },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 8,
                                "child": [
                                ],
                                "$HIDDEN": true
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -265, "x": -171, "texture": "sc/sc_di.png" },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 15,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_vedioGet",
                                "props": { "y": 60, "x": -180, "var": "spt_vedioGet", "texture": "jbbz/jbbz_btn.png" },
                                "nodeParent": 16,
                                "label": "spt_vedioGet",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 10,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 86, "x": -79, "width": 250, "height": 67 },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 162,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,img_btnText",
                                        "props": { "y": 4, "var": "img_btnText", "skin": "jbbz/jbbz_lq.png", "centerX": 0 },
                                        "nodeParent": 162,
                                        "label": "img_btnText",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 12,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_smallIcon",
                                "props": { "y": -74, "x": -92, "var": "img_smallIcon", "skin": "zjm/zjm_tl.png" },
                                "nodeParent": 16,
                                "label": "img_smallIcon",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 13,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 87, "x": -123, "texture": "sc/sc_sp.png" },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 14,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -371, "x": -169, "width": 347, "height": 248 },
                                "nodeParent": 16,
                                "label": "Sprite",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 163,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,img_bigIcon",
                                        "props": { "var": "img_bigIcon", "skin": "jbbz/jbbz_tld.png", "centerY": 0, "centerX": 0 },
                                        "nodeParent": 163,
                                        "label": "img_bigIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 9,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,lbl_count",
                                "props": { "y": -66, "x": -25, "var": "lbl_count", "text": "X500", "fontSize": 40, "color": "#ffffff" },
                                "nodeParent": 16,
                                "label": "lbl_count",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 164,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 165,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,spt_next",
                                "props": { "y": -461, "x": -42, "width": 81, "var": "spt_next", "skin": "jbbz/jbbz_tg.png", "height": 43 },
                                "nodeParent": 165,
                                "label": "spt_next",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ]
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.RewardViewUI = m, b("ui.Views.RewardViewUI", m);
            class y extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(y.uiView);
                }
            }
            y.uiView = {
                type: "View",
                props: {
                    width: 286,
                    height: 286
                },
                compId: 2,
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        width: 152,
                        var: "knob",
                        skin: "game/yxz_kongzhi.png",
                        rotation: 0,
                        height: 152,
                        centerY: 0,
                        centerX: 0,
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 4,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 85,
                            x: 91,
                            visible: !1,
                            texture: "tiles/p_i_more.png",
                            rotation: 90,
                            alpha: 0
                        },
                        compId: 6
                    }]
                }],
                loadList: ["game/yxz_kongzhi.png", "tiles/p_i_more.png"],
                loadList3D: []
            }, e.RockerViewUI = y, b("ui.Views.RockerViewUI", y);
            class u extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(u.uiView);
                }
            }
            u.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "common/hei4.png",
                        sizeGrid: "1,1,1,1",
                        right: 0,
                        name: "bg",
                        left: 0,
                        bottom: 0,
                        alpha: .5
                    },
                    compId: 72
                }, {
                    type: "Image",
                    props: {
                        visible: !1,
                        var: "img_scale",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 157,
                    child: [{
                        type: "Image",
                        props: {
                            x: 0,
                            var: "Center",
                            centerY: -56,
                            centerX: 0
                        },
                        compId: 23,
                        child: [{
                            type: "Image",
                            props: {
                                y: -316,
                                x: -375,
                                width: 750,
                                var: "img_adPanel",
                                height: 624
                            },
                            compId: 156,
                            child: [{
                                type: "Script",
                                props: {
                                    runtime: "view/AdPanelLoop.ts"
                                },
                                compId: 37
                            }]
                        }]
                    }]
                }, {
                    type: "Image",
                    props: {
                        x: 375,
                        var: "Bottom",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 17,
                    child: [{
                        type: "Image",
                        props: {
                            x: -375,
                            width: 750,
                            visible: !0,
                            var: "img_gamelist",
                            height: 198,
                            bottom: 0
                        },
                        compId: 4,
                        child: [{
                            type: "Script",
                            props: {
                                runtime: "view/AdListLoop.ts"
                            },
                            compId: 16
                        }]
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 205,
                        x: 133,
                        texture: "jbbz/jbbz_gx.png"
                    },
                    compId: 163
                }, {
                    type: "Sprite",
                    props: {
                        y: 727,
                        x: 195.5,
                        var: "spt_get",
                        texture: "jbbz/jbbz_btn.png"
                    },
                    compId: 159
                }, {
                    type: "Sprite",
                    props: {
                        y: 206,
                        x: 134,
                        texture: "jbbz/jbbz_db2.png"
                    },
                    compId: 168
                }, {
                    type: "Sprite",
                    props: {
                        y: 201,
                        x: 244.5,
                        texture: "jbbz/jbbz_bt_4.png"
                    },
                    compId: 160
                }, {
                    type: "Sprite",
                    props: {
                        y: 404,
                        x: 201.5,
                        texture: "sc/sc_di.png"
                    },
                    compId: 161
                }, {
                    type: "Sprite",
                    props: {
                        y: 295,
                        x: 203.5,
                        texture: "jbbz/jbbz_jbd.png"
                    },
                    compId: 162
                }, {
                    type: "Sprite",
                    props: {
                        y: 761.5,
                        x: 244.5,
                        texture: "jbbz/jbbz_lp.png"
                    },
                    compId: 164
                }, {
                    type: "Sprite",
                    props: {
                        y: 759,
                        x: 319,
                        texture: "jbbz/jbbz_fxlp.png"
                    },
                    compId: 165
                }, {
                    type: "Sprite",
                    props: {
                        y: 595,
                        x: 282.5,
                        texture: "sc/sc_jb.png"
                    },
                    compId: 166
                }, {
                    type: "Label",
                    props: {
                        y: 606.5,
                        x: 362,
                        text: "x500",
                        fontSize: 40,
                        color: "#ffffff"
                    },
                    compId: 167
                }, {
                    type: "Sprite",
                    props: {
                        y: 1010,
                        x: 334.5,
                        var: "spt_next",
                        texture: "jbbz/jbbz_gb.png"
                    },
                    compId: 170
                }],
                loadList: ["common/hei4.png", "jbbz/jbbz_gx.png", "jbbz/jbbz_btn.png", "jbbz/jbbz_db2.png", "jbbz/jbbz_bt_4.png", "sc/sc_di.png", "jbbz/jbbz_jbd.png", "jbbz/jbbz_lp.png", "jbbz/jbbz_fxlp.png", "sc/sc_jb.png", "jbbz/jbbz_gb.png"],
                loadList3D: []
            }, e.ShareViewUI = u, b("ui.Views.ShareViewUI", u);
            class _ extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(_.uiView);
                }
            }
            _.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 6,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 220,
                "loadList3D": [
                ],
                "loadList": [
                    "common/hei4.png",
                    "mrqd/mrqd_db.png",
                    "mrqd/mrqd_db_4.png",
                    "mrqd/mrqd_jb_4.png",
                    "mrqd/mrqd_db_3.png",
                    "mrqd/mrqd_yqd.png",
                    "mrqd/mrqd_dian_2.png",
                    "mrqd/mrqd_dian_1.png",
                    "mrqd/mrqd_yqd-2.png",
                    "sc/sc_btn_2.png",
                    "mrqd/mrqd_wz.png",
                    "sc/sc_fh.png",
                    "mrqd/mrqd_db_2.png",
                    "mrqd/mrqd_day1.png",
                    "mrqd/mrqd_jb_1.png",
                    "adlist/di_1.png",
                    "zjm/zjm_jb.png",
                    "comp/image.png",
                    "jbbz/jbbz_btn.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 4,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 6,
                        "child": [
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -497, "x": -361.5, "texture": "mrqd/mrqd_db.png", "alpha": 1 },
                                "nodeParent": 6,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 7,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 111, "x": -306, "width": 308, "texture": "mrqd/mrqd_db_4.png", "height": 202 },
                                "nodeParent": 6,
                                "label": "Sprite",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 9,
                                "child": [
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 24, "x": 77, "texture": "mrqd/mrqd_jb_4.png" },
                                        "nodeParent": 9,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 29,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 130, "x": 108.5, "texture": "mrqd/mrqd_db_3.png" },
                                        "nodeParent": 9,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 30,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Label",
                                        "searchKey": "Label,lbl_coin7",
                                        "props": { "y": 136.5, "x": 129.478515625, "width": 80, "var": "lbl_coin7", "text": "x100", "fontSize": 27, "color": "#ffcb3f", "align": "center" },
                                        "nodeParent": 9,
                                        "label": "lbl_coin7",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 31,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,img_mark7",
                                        "props": { "var": "img_mark7", "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "left": 0, "bottom": 0, "alpha": 0.5 },
                                        "nodeParent": 9,
                                        "label": "img_mark7",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 32,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite,spt_signined7",
                                        "props": { "y": 84.5, "x": 95, "var": "spt_signined7", "texture": "mrqd/mrqd_yqd.png" },
                                        "nodeParent": 9,
                                        "label": "spt_signined7",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 33,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_mark",
                                "props": { "y": 143, "x": 42, "var": "spt_mark", "texture": "mrqd/mrqd_dian_2.png" },
                                "nodeParent": 6,
                                "label": "spt_mark",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 10,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_gou",
                                "props": { "y": 152, "x": 51, "var": "spt_gou", "texture": "mrqd/mrqd_dian_1.png" },
                                "nodeParent": 6,
                                "label": "spt_gou",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 11,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_signined",
                                "props": { "y": 198, "x": 23, "var": "spt_signined", "texture": "mrqd/mrqd_yqd-2.png" },
                                "nodeParent": 6,
                                "label": "spt_signined",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 12,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_signin",
                                "props": { "y": 198, "x": 24, "var": "spt_signin", "texture": "sc/sc_btn_2.png" },
                                "nodeParent": 6,
                                "label": "spt_signin",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 16,
                                "child": [
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 19, "x": 83, "texture": "mrqd/mrqd_wz.png" },
                                        "nodeParent": 16,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 13,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_back",
                                "props": { "y": -537, "x": -336, "var": "spt_back", "texture": "sc/sc_fh.png" },
                                "nodeParent": 6,
                                "label": "spt_back",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 15,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label",
                                "props": { "y": 150, "x": 88, "text": "Watch the video x3", "fontSize": 24, "color": "#be825d" },
                                "nodeParent": 6,
                                "label": "Label",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 17,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "List",
                                "searchKey": "List,list_day",
                                "props": { "y": -327, "x": -306, "width": 612, "var": "list_day", "spaceY": 26, "spaceX": 45, "repeatY": 2, "repeatX": 3, "height": 433 },
                                "nodeParent": 6,
                                "label": "list_day",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 18,
                                "child": [
                                    {
                                        "type": "Box",
                                        "searchKey": "Box",
                                        "props": { "width": 173, "renderType": "render", "height": 201 },
                                        "nodeParent": 18,
                                        "label": "Box",
                                        "isDirectory": true,
                                        "isAniNode": false,
                                        "hasChild": true,
                                        "compId": 19,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image",
                                                "props": { "skin": "mrqd/mrqd_db_2.png" },
                                                "nodeParent": 19,
                                                "label": "Image",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 20,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_day",
                                                "props": { "y": 14, "x": 40, "skin": "mrqd/mrqd_day1.png", "name": "img_day" },
                                                "nodeParent": 19,
                                                "label": "img_day",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 21,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_coin",
                                                "props": { "skin": "mrqd/mrqd_jb_1.png", "name": "img_coin", "centerY": 0, "centerX": 0 },
                                                "nodeParent": 19,
                                                "label": "img_coin",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 22,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image",
                                                "props": { "y": 149, "skin": "mrqd/mrqd_db_3.png", "centerX": 0 },
                                                "nodeParent": 19,
                                                "label": "Image",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 24,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,lbl_coin",
                                                "props": { "y": 154, "width": 80, "text": "X100", "name": "lbl_coin", "fontSize": 27, "color": "#ffcb3f", "centerX": 0, "align": "center" },
                                                "nodeParent": 19,
                                                "label": "lbl_coin",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 25,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,fg",
                                                "props": { "top": 0, "skin": "common/hei4.png", "sizeGrid": "1,1,1,1", "right": 0, "name": "fg", "left": 0, "bottom": 0, "alpha": 0.4 },
                                                "nodeParent": 19,
                                                "label": "fg",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 27,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,mark",
                                                "props": { "skin": "mrqd/mrqd_yqd.png", "name": "mark", "centerY": 0, "centerX": 0 },
                                                "nodeParent": 19,
                                                "label": "mark",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 28,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.SigninViewUI = _, b("ui.Views.SigninViewUI", _);
            class w extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(w.uiView);
                }
            }
            w.uiView = {
                type: "View",
                props: {
                    zOrder: 1,
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        top: 0,
                        skin: "game/hei4.png",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5,
                        sizeGrid: "2,2,2,2"
                    },
                    compId: 19
                }, {
                    type: "Image",
                    props: {
                        var: "Center",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 18,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -358,
                            x: -230,
                            texture: "game/spjs_biaoti.png"
                        },
                        compId: 5
                    }, {
                        type: "Image",
                        props: {
                            y: -345,
                            x: -43,
                            var: "spt_title",
                            skin: "game/spjs_goumai.png"
                        },
                        compId: 6
                    }, {
                        type: "Sprite",
                        props: {
                            y: -425,
                            x: 173,
                            var: "spt_back",
                            texture: "game/ssjl_guanbi.png"
                        },
                        compId: 7
                    }, {
                        type: "Sprite",
                        props: {
                            y: -256,
                            x: -188,
                            texture: "main/ssjl_di.png"
                        },
                        compId: 9
                    }, {
                        type: "Sprite",
                        props: {
                            y: -119,
                            x: -145,
                            var: "spt_bugCoin",
                            texture: "game/spjs_btn.png"
                        },
                        compId: 10
                    }, {
                        type: "Sprite",
                        props: {
                            y: -3,
                            x: -146,
                            var: "spt_buyVedio",
                            texture: "game/spjs_btn.png"
                        },
                        compId: 11
                    }, {
                        type: "Image",
                        props: {
                            y: 13,
                            x: -109,
                            var: "spt_videoCount",
                            skin: "game/spjs_qhx3.png"
                        },
                        compId: 12
                    }, {
                        type: "Image",
                        props: {
                            y: 15,
                            x: 33,
                            var: "spt_video",
                            skin: "game/spjs_goumai_2.png"
                        },
                        compId: 13
                    }, {
                        type: "Image",
                        props: {
                            y: -100,
                            x: -75,
                            var: "spt_coin",
                            skin: "game/spjs_jingbigm.png"
                        },
                        compId: 15
                    }, {
                        type: "Sprite",
                        props: {
                            y: -172,
                            x: -84,
                            texture: "tiles/zjm_shishijianglijb.png"
                        },
                        compId: 16
                    }, {
                        type: "FontClip",
                        props: {
                            y: -173,
                            x: -35,
                            width: 150,
                            var: "fc_coin",
                            value: "2020",
                            skin: "game/ssjl_jingbishuzi.png",
                            sheet: "0123456789",
                            align: "left"
                        },
                        compId: 17
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 750,
                        visible: !0,
                        var: "img_gamelist",
                        skin: "game/hei4.png",
                        sizeGrid: "1,1,1,1",
                        height: 198,
                        bottom: 10
                    },
                    compId: 20,
                    child: [{
                        type: "Script",
                        props: {
                            runtime: "view/AdListLoop.ts"
                        },
                        compId: 21
                    }]
                }],
                loadList: ["game/hei4.png", "game/spjs_biaoti.png", "game/spjs_goumai.png", "game/ssjl_guanbi.png", "main/ssjl_di.png", "game/spjs_btn.png", "game/spjs_qhx3.png", "game/spjs_goumai_2.png", "game/spjs_jingbigm.png", "tiles/zjm_shishijianglijb.png", "game/ssjl_jingbishuzi.png"],
                loadList3D: []
            }, e.SkinAddUI = w, b("ui.Views.SkinAddUI", w);
            class f extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(f.uiView);
                }
            }
            f.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 11,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 222,
                "loadList3D": [
                ],
                "loadList": [
                    "sc/sc_bg.jpg",
                    "sc/sc_fh.png",
                    "zjm/zjm_jbd.png",
                    "zjm/zjm_jb.png",
                    "zjm/zjm_+.png",
                    "adlist/di_1.png",
                    "comp/image.png",
                    "common/hei4.png",
                    "sc/sc_di.png",
                    "sc/sc_db.png",
                    "sc/sc_tab.png",
                    "sc/sc_btn_2.png",
                    "sc/sc_sz_2.png",
                    "jbbz/jbbz_lp.png",
                    "sc/sc_btn_1.png",
                    "sc/sc_jb.png",
                    "sc/sc_sz_1.png",
                    "sc/sc_xz.png",
                    "sc/pf_3.png",
                    "sc/sc_yzb.png",
                    "jbbz/jbbz_btn.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "top": 0, "skin": "sc/sc_bg.jpg", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Image",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 133,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Top",
                        "props": { "var": "Top", "top": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Top",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 6,
                        "child": [
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_back",
                                "props": { "y": 129, "x": -336, "var": "spt_back", "texture": "sc/sc_fh.png" },
                                "nodeParent": 6,
                                "label": "spt_back",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 7,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 24, "x": -344, "texture": "zjm/zjm_jbd.png" },
                                "nodeParent": 6,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 122,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": 28, "x": -342, "texture": "zjm/zjm_jb.png" },
                                "nodeParent": 6,
                                "label": "Sprite",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 123,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Label",
                                "searchKey": "Label,fc_coin",
                                "props": { "y": 47, "x": -285, "width": 91, "var": "fc_coin", "text": "200", "height": 31, "fontSize": 31, "color": "#ab4ae9", "align": "center" },
                                "nodeParent": 6,
                                "label": "fc_coin",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 131,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_coinAdd",
                                "props": { "y": 34.5, "x": -186, "var": "spt_coinAdd", "texture": "zjm/zjm_+.png" },
                                "nodeParent": 6,
                                "label": "spt_coinAdd",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 132,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,spt_tai",
                        "props": { "y": 426, "x": 375, "width": 351, "visible": false, "var": "spt_tai", "skin": "sc/sc_di.png", "height": 185, "anchorY": 0.5, "anchorX": 0.5 },
                        "nodeParent": 2,
                        "label": "spt_tai",
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 134,
                        "child": [
                        ]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Center",
                        "props": { "visible": true, "var": "Center", "centerY": 0, "centerX": 0 },
                        "nodeParent": 2,
                        "label": "Center",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 11,
                        "child": [
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite",
                                "props": { "y": -40, "x": -375, "texture": "sc/sc_db.png" },
                                "nodeParent": 11,
                                "label": "Sprite",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 136,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 38, "x": 33, "width": 683, "skin": "sc/sc_db0.png", "sizeGrid": "50,50,50,50", "height": 517 },
                                        "nodeParent": 136,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 221,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": -72, "x": 18, "texture": "sc/sc_tab.png" },
                                        "nodeParent": 136,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 135,
                                        "child": [
                                        ],
                                        "$HIDDEN": true
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_vedioGet",
                                "props": { "y": 536, "x": 44, "var": "spt_vedioGet", "texture": "sc/sc_btn_2.png" },
                                "nodeParent": 11,
                                "label": "spt_vedioGet",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 79,
                                "child": [
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,lbl_vedioGet",
                                        "props": { "y": 24, "x": 131, "width": 120, "var": "lbl_vedioGet", "value": "1/2", "text": "0/1", "skin": "sc/sc_sz_2.png", "sheet": "0123456789/", "fontSize": 42, "color": "#ffffff" },
                                        "nodeParent": 79,
                                        "label": "lbl_vedioGet",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 129,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 26, "x": 47, "texture": "jbbz/jbbz_lp.png" },
                                        "nodeParent": 79,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 128,
                                        "child": [
                                        ]
                                    }],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "Sprite",
                                "searchKey": "Sprite,spt_coinGet",
                                "props": { "y": 534, "x": -324, "var": "spt_coinGet", "texture": "sc/sc_btn_1.png" },
                                "nodeParent": 11,
                                "label": "spt_coinGet",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 80,
                                "child": [
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 22, "x": 39, "texture": "sc/sc_jb.png" },
                                        "nodeParent": 80,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 126,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,fc_coinGet",
                                        "props": { "y": 30, "x": 111, "width": 141, "var": "fc_coinGet", "value": "100", "skin": "sc/sc_sz_1.png", "sheet": "0123456789", "height": 45 },
                                        "nodeParent": 80,
                                        "label": "fc_coinGet",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 127,
                                        "child": [
                                        ]
                                    }],
                                "$HIDDEN": false
                            },
                            {
                                "x": 30,
                                "type": "List",
                                "searchKey": "List,list_skin",
                                "props": { "y": 14, "x": -325, "width": 650, "visible": true, "var": "list_skin", "spaceY": 18, "spaceX": 23, "repeatX": 4, "height": 499 },
                                "nodeParent": 11,
                                "label": "list_skin",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 81,
                                "child": [
                                    {
                                        "type": "Box",
                                        "searchKey": "Box",
                                        "props": { "width": 145, "renderType": "render", "height": 150 },
                                        "nodeParent": 81,
                                        "label": "Box",
                                        "isDirectory": true,
                                        "isAniNode": false,
                                        "hasChild": true,
                                        "compId": 82,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_bg",
                                                "props": { "skin": "sc/sc_xz.png", "name": "img_bg" },
                                                "nodeParent": 82,
                                                "label": "img_bg",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 137,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,img_skin",
                                                "props": { "skin": "sc/pf_3.png", "name": "img_skin", "centerY": 0, "centerX": 0 },
                                                "nodeParent": 82,
                                                "label": "img_skin",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 138,
                                                "child": [
                                                ]
                                            },
                                            {
                                                "type": "Sprite",
                                                "searchKey": "Sprite,spt_use",
                                                "props": { "texture": "sc/sc_yzb.png", "name": "spt_use" },
                                                "nodeParent": 82,
                                                "label": "spt_use",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 139,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,Bottom",
                        "props": { "var": "Bottom", "centerX": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Bottom",
                        "isOpen": true,
                        "isDirectory": false,
                        "isAniNode": true,
                        "hasChild": false,
                        "compId": 40,
                        "child": [
                        ]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            }, e.SkinViewUI = f, b("ui.Views.SkinViewUI", f);
            class v extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(v.uiView);
                }
            }
            v.uiView = {
                type: "View",
                props: {
                    zOrder: 100,
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    centerY: 0,
                    centerX: 0,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        y: 667,
                        x: 375,
                        visible: !1,
                        top: -200,
                        skin: "common/hei4.png",
                        sizeGrid: "1,1,1,1",
                        right: -200,
                        name: "bg",
                        left: -200,
                        bottom: -200,
                        anchorY: .5,
                        anchorX: .5,
                        alpha: .1
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        y: 639,
                        x: 25,
                        width: 700,
                        var: "img_back",
                        skin: "common/mask.png",
                        sizeGrid: "10,10,10,10",
                        height: 66
                    },
                    compId: 3,
                    child: [{
                        type: "Label",
                        props: {
                            y: 13,
                            var: "txt_message",
                            valign: "middle",
                            text: "信息提示",
                            fontSize: 40,
                            color: "#ffffff",
                            centerX: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 4
                    }]
                }],
                loadList: ["common/hei4.png", "common/mask.png"],
                loadList3D: []
            }, e.SystemViewUI = v, b("ui.Views.SystemViewUI", v);
            class S extends Laya.View {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.createView(S.uiView);
                }
            }
            S.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        top: 0,
                        skin: "adlist/hei4.png",
                        sizeGrid: "1,1,1,1",
                        right: 0,
                        left: 0,
                        bottom: 0,
                        alpha: .5
                    },
                    compId: 6
                }, {
                    type: "Image",
                    props: {
                        var: "Center",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 7,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: 104,
                            x: -179.5,
                            var: "spt_use",
                            texture: "jbbz/jbbz_btn.png"
                        },
                        compId: 29
                    }, {
                        type: "Sprite",
                        props: {
                            y: -457,
                            x: -239,
                            texture: "jbbz/jbbz_db2.png"
                        },
                        compId: 33
                    }, {
                        type: "Sprite",
                        props: {
                            y: -472,
                            x: -125,
                            texture: "jbbz/jbbz_bt_5.png"
                        },
                        compId: 34
                    }, {
                        type: "Sprite",
                        props: {
                            y: 136.5,
                            x: -55,
                            texture: "jbbz/jbbz_mfsy.png"
                        },
                        compId: 36
                    }, {
                        type: "Sprite",
                        props: {
                            y: 132,
                            x: -124,
                            texture: "sc/sc_sp.png"
                        },
                        compId: 37
                    }, {
                        type: "Sprite",
                        props: {
                            y: 255,
                            x: -88,
                            var: "spt_kuang",
                            texture: "js/js_yuan_2.png"
                        },
                        compId: 39
                    }, {
                        type: "Sprite",
                        props: {
                            y: 264,
                            x: -79,
                            var: "spt_gou",
                            texture: "js/js_yuan_1.png"
                        },
                        compId: 40
                    }, {
                        type: "Label",
                        props: {
                            y: 262.5,
                            x: -36,
                            var: "lbl_checkText",
                            text: "使用试用皮肤",
                            fontSize: 24,
                            color: "#ffffff"
                        },
                        compId: 41
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "Bottom",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 8,
                    child: [{
                        type: "Image",
                        props: {
                            y: 0,
                            x: -375,
                            width: 750,
                            visible: !0,
                            var: "img_gamelist",
                            sizeGrid: "1,1,1,1",
                            height: 198,
                            bottom: 10
                        },
                        compId: 9,
                        child: [{
                            type: "Script",
                            props: {
                                runtime: "view/AdListLoop.ts"
                            },
                            compId: 16
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: -81,
                            visible: !1,
                            skin: "jbbz/jbbz_tg.png",
                            centerX: 0
                        },
                        compId: 26
                    }, {
                        type: "Label",
                        props: {
                            y: -81,
                            var: "spt_next",
                            valign: "middle",
                            text: "暂不试用",
                            fontSize: 40,
                            color: "#fb7875",
                            centerX: 0,
                            bold: !0,
                            align: "center"
                        },
                        compId: 42
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 471,
                        x: 375,
                        visible: !1,
                        var: "spt_tai",
                        anchorY: .5,
                        anchorX: .5
                    },
                    compId: 38,
                    child: [{
                        type: "Sprite",
                        props: {
                            y: -264,
                            x: -243,
                            texture: "jbbz/jbbz_gx.png"
                        },
                        compId: 32
                    }, {
                        type: "Sprite",
                        props: {
                            y: -66,
                            x: -176,
                            texture: "sc/sc_di.png"
                        },
                        compId: 35
                    }]
                }],
                loadList: ["adlist/hei4.png", "jbbz/jbbz_btn.png", "jbbz/jbbz_db2.png", "jbbz/jbbz_bt_5.png", "jbbz/jbbz_mfsy.png", "sc/sc_sp.png", "js/js_yuan_2.png", "js/js_yuan_1.png", "jbbz/jbbz_tg.png", "jbbz/jbbz_gx.png", "sc/sc_di.png"],
                loadList3D: []
            }, e.TrySkinViewUI = S, b("ui.Views.TrySkinViewUI", S);
        }(e.Views || (e.Views = {}));
    }(c || (c = {}));
    class w { }
    w.version = "100", w.appid = "xxxx", w.pkgName = "", w.appKey = "", w.env = "develop",
        w.url = "",//https://gmone.huiruui.com
        w.switchUrl = "";//https://gmtwo.huiruui.com
    class f {
        static sendLogin(e, t, i, s, a, n, o, r) {
            s || (s = 0);
            let h = {
                channel: e,
                action: t,
                openid: i,
                from_appid: a,
                from_imgid: n,
                my_appid: w.appid,
                code: o,
                isnew: s
            };
            v.sendPost(h, r);
        }
        static sendAuthorize(e, t, i, s, a, n, o, r) {
            s || (s = 0);
            let h = {
                channel: e,
                action: t,
                openid: i,
                from_appid: a,
                from_imgid: n,
                my_appid: w.appid,
                code: o,
                isnew: s
            };
            v.sendPost(h, r);
        }
        static startGame(e, t, i, s) {
            let a = {
                channel: e,
                action: t,
                openid: i,
                my_appid: w.appid
            };
            v.sendPost(a, s);
        }
        static sendShare(e, t, i, s, a) {
            let n = {
                channel: e,
                action: t,
                openid: i,
                my_appid: w.appid,
                type: s
            };
            v.sendPost(n, a);
        }
        static watchVideo(e, t, i, s, a) {
            let n = {
                channel: e,
                action: t,
                openid: i,
                my_appid: w.appid,
                type: s
            };
            v.sendPost(n, a);
        }
        static sendStaticData(e, t) {
            v.sendPost(e, t);
        }
        static sendJump(e, t, i, s, a, n) {
            let o = {
                channel: e,
                action: t,
                openid: i,
                my_appid: w.appid,
                my_uuid: s,
                to_appid: a
            };
            v.sendPost(o, n);
        }
        static sendEvent(e, t, i) {
            let s = {
                openid: e,
                eventId: t,
                appid: w.appid
            };
            v.sendPost(s, i, "/saveEvent");
        }
        static getJumpGameList(e) {
            v.sendPost({
                appid: w.appid
            }, e, "/getJumpInfo");
        }
        static getGameSwitch(e) {
            v.sendGet("/index/switch_new?appid=" + w.appid + "&version=" + w.version, 2, e);
        }
        static getTouTiaoOpenid(e, t, i) {
            v.sendGet("/service/getTouTiaoOpenid?appid=" + w.appid + "&code=" + e + "&anonymous_code=" + t, 1, i);
        }
        static getWxOpenid(e, t, i) {
            v.sendGet("/service/getWxOpenid?appid=" + w.appid + "&code=" + e, 1, i);
        }
        static getQQOpenid(e, t) {
            v.sendGet("/service/getQQOpenid?appid=" + w.appid + "&js_code=" + e, 1, t);
        }
        static getOppoOpenid(e, t) {
            v.sendGet("/service/getOppoOpenid?pkgName=" + w.pkgName + "&token=" + e + "&appid=" + w.appKey, 1, t);
        }
        static getVivoOpenid(e, t) {
            v.sendGet("/service/getVivoOpenid?pkgName=" + w.pkgName + "&token=" + e + "&appid=" + w.appKey, 1, t);
        }
        static collection(e, t, i) {
            var s = {
                action: e,
                openid: t,
                my_appid: w.appid
            };
            v.sendPost(s, i);
        }
        static probability(e) {
            var t = {
                appid: w.appid
            };
            v.sendPost(t, e, "/probability");
        }
    }
    class v {
        static sendPost(e, t = null, i = null) {
            // let s = new XMLHttpRequest(), a = w.url;
            // i && (a += i), s.open("POST", a), s.onreadystatechange = function () {
            //     4 == s.readyState && s.status >= 200 && s.status <= 207 && t && t(JSON.parse(s.responseText));
            // };
            // let n = JSON.stringify(e);
            // "develop" == w.env && console.log(a + "param=", JSON.stringify(e)), s.setRequestHeader("content-type", "application/x-www-form-urlencoded"),
            //     s.send("param=" + encodeURIComponent(n));
        }
        static sendGet(e, t, i) {
            // var s = new XMLHttpRequest();
            // let a = w.switchUrl;
            // 1 == t && (a = w.url), s.open("GET", a + e), s.onreadystatechange = function () {
            //     4 == s.readyState && s.status >= 200 && s.status <= 207 && i && ("develop" == w.env && console.log(w.switchUrl + e + "：", JSON.parse(s.responseText)),
            //         i(JSON.parse(s.responseText)));
            // }, s.send();
        }
    }
    !function (e) {
        e[e.Login = 1005] = "Login", e[e.Authority = 1006] = "Authority", e[e.Start = 1008] = "Start",
            e[e.Share = 1009] = "Share", e[e.Video = 1010] = "Video", e[e.VideoSuccess = 1011] = "VideoSuccess",
            e[e.Jump = 1007] = "Jump", e[e.JumpSuccess = 1017] = "JumpSuccess";
    }(d || (d = {})), function (e) {
        e[e.Left = 1001] = "Left", e[e.Right = 1002] = "Right", e[e.Settlement = 1003] = "Settlement",
            e[e.Common = 1004] = "Common", e[e.SettlementScroll = 1006] = "SettlementScroll",
            e[e.ReviveScroll = 1007] = "ReviveScroll", e[e.LobbyScroll = 1008] = "LobbyScroll";
    }(g || (g = {}));
    class S {
        constructor() { }
        init() {
            w.appid = L.appId, w.version = I.version + "", "o" == i.platfomStr2 ? (w.pkgName = "com.ptg.xjjbp.nearme.gamecenter",
                w.appKey = "4W27qe05Ozs40Kw8k4Wcw4g0w") : "v" == i.platfomStr2 && (w.pkgName = "com.ptg.xxl.vivominigame",
                    w.appKey = "fcae748f4a325d3d6dccda02284f12e7"), e.Log("---------  " + w.appid);
        }
        loginSend(e, t, i, s) { }
        getOpenId(t, s) {
            "qg" == i.platfomStr ? "o" == i.platfomStr2 ? f.getOppoOpenid(t, t => {
                e.Log("--------------- res:" + JSON.stringify(t)), null != t && t.openid && (S.openId = t.openid,
                    S.hasOpenId = !0, I.userData.userId = S.openId), "qg" == i.platfomStr && null != t && t.userId && (S.openId = t.userId,
                        S.hasOpenId = !0, I.userData.userId = S.openId), null != s && s(t), e.Log("--------------- openId:" + S.openId);
            }) : "v" == i.platfomStr2 && f.getVivoOpenid(t, t => {
                e.Log("--------------- res:" + JSON.stringify(t)), null != t && t.openId && (S.openId = t.openId,
                    S.hasOpenId = !0, I.userData.userId = S.openId), "qg" == i.platfomStr && null != t && t.userId && (S.openId = t.userId,
                        S.hasOpenId = !0, I.userData.userId = S.openId), null != s && s(t), e.Log("--------------- openId:" + S.openId);
            }) : "qq" == i.platfomStr ? f.getQQOpenid(t, e => {
                e.openid && (S.openId = e.openid, S.hasOpenId = !0, I.userData.userId = S.openId),
                    null != s && s(e);
            }) : "wx" == i.platfomStr && f.getWxOpenid(t, "", t => {
                e.Log("wxOpenId  res:" + JSON.stringify(t)), t.openid && (S.openId = t.openid, S.hasOpenId = !0,
                    I.userData.userId = S.openId), null != s && s(t);
            });
        }
        getJumpInfo(e, t, i) {
            f.getJumpGameList(t);
        }
        getSwitch(e, t, i) {
            f.getGameSwitch(t);
        }
        getNativeAdSwitch(e, t, i) {
            f.probability(t);
        }
        StatisticsLogin() {
            e.Log("发送登录 打点前"), S.hasOpenId && (e.Log("发送登录 打点后"), f.sendLogin(I.channelId, 1005, S.openId, S.isnew));
        }
        StatisticsAuthor() {
            S.hasOpenId && f.sendAuthorize(I.channelId, 1006, S.openId, 0);
        }
        StatisticsNavigateStart(e, t, i) {
            if (S.hasOpenId) {
                let i = {
                    my_appid: w.appid,
                    channel: I.channelId,
                    action: 1007,
                    openid: S.openId,
                    my_uuid: e,
                    to_appid: t
                };
                f.sendStaticData(i);
            }
        }
        StatisticsNavigate(e, t, i) {
            if (S.hasOpenId) {
                let i = {
                    my_appid: w.appid,
                    channel: I.channelId,
                    action: 1017,
                    openid: S.openId,
                    my_uuid: e,
                    to_appid: t
                };
                f.sendStaticData(i);
            }
        }
        StatisticsStartGame() {
            if (S.hasOpenId) {
                let e = {
                    appid: w.appid,
                    channel: I.channelId,
                    action: 1008,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(e);
            }
        }
        StatisticsShare(e) {
            if (S.hasOpenId) {
                let e = {
                    channel: I.channelId,
                    action: 1009,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(e);
            }
        }
        StatisticsVideoUnfinish(t) {
            if (e.Log("----------  未看完--打点---"), S.hasOpenId) {
                e.Log("----------  未看完--打点2---");
                let t = {
                    channel: I.channelId,
                    action: 1010,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(t);
            }
        }
        StatisticsVideoFinished(t) {
            if (e.Log("----------  看完--打点---"), S.hasOpenId) {
                e.Log("----------  看完--打点2---");
                let t = {
                    channel: I.channelId,
                    action: 1011,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(t);
            }
        }
        StatisticsDead(e) {
            if (S.hasOpenId) {
                let e = {
                    channel: I.channelId,
                    action: 1012,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(e);
            }
        }
        StatisticsShowBanner(e) {
            if (S.hasOpenId) {
                let e = {
                    channel: I.channelId,
                    action: 1050,
                    poster_number: 18e3,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(e);
            }
        }
        StatisticsClickBanner(e) {
            if (S.hasOpenId) {
                let e = {
                    channel: I.channelId,
                    action: 1051,
                    poster_number: 18e3,
                    openid: S.openId,
                    my_appid: w.appid
                };
                f.sendStaticData(e);
            }
        }
    }
    S.isnew = 0, S.instance = new S(), S.openId = "0", S.hasOpenId = !1;
    class I {
        static isUnlock(e) {
            return 1 == I.userData.unlock[e];
        }
        static saveUserData() {
            let e = JSON.stringify(I.userData);
            localStorage.setItem("Save_The_Beauty_UserData", e);
            Laya.stage.event("refreshUserData");
        }
        static loadUserData() {
            let e = localStorage.getItem("Save_The_Beauty_UserData");
            null != e && e.length > 0 ? (I.userData = JSON.parse(e), S.isnew = 0) : S.isnew = 1,
                null == I.userData.unlockv && (I.userData.unlockv = [0, 0, 0, 0, 0, 0, 0, 0])
            // , I.userData.hp < 10 && l.isOtherDay("TrickyElevator_hp") && (I.userData.hp = 10, l.saveOtherDay("TrickyElevator_hp"));
        }
        static saveAdInfo() {
            let e = JSON.stringify(I.adInfos);
            localStorage.setItem("AdInfo", e);
        }
        static loadAdInfo() { }
        static initLocalSwithes() { }
        static initAds() {
            L.appName = "Save The Beauty", L.appNameEn = "Save The Beauty";
        }
        static getAdInfos(e) {
            let t = [];
            for (let i = 0, s = this.adInfos.length; i < s; ++i) this.adInfos[i].position == e + "" && t.push(this.adInfos[i]);
            return L.initAdInfos(t), t = L.shuffleInfos(t);
        }
        static setDefaultAd() {
            I.adInfos = [{
                toLinks: "page/index/index",
                param: "adlist/bpmcqll.jpg",
                appid: "30260301",
                name: "把泡面藏起来了",
                pkgname: "com.gz.zhdtw.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/fklhz.jpg",
                appid: "30260137",
                name: "疯狂刮胡子",
                pkgname: "com.gz.jxjs.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/gzwtc.jpg",
                appid: "30271223",
                name: "公主王铁锤",
                pkgname: "com.xdb.qmhyh.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/gdpy.jpg",
                appid: "30261791",
                name: "轨道漂移",
                pkgname: "com.ptg.yzhx.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/jjdkl.jpg",
                appid: "30260385",
                name: "进击的恐龙",
                pkgname: "com.dcdc.mhyxj.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/kbxq.jpg",
                appid: "30277199",
                name: "狂飙星球",
                pkgname: "com.dcdc.mszc.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/mszc.jpg",
                appid: "30268930",
                name: "末世战车2",
                pkgname: "com.ptg.klfmg.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/qddm.jpg",
                appid: "30278847",
                name: "切的到吗",
                pkgname: "com.ptg.sccw.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/txy.jpg",
                appid: "30265056",
                name: "推削圆",
                pkgname: "com.dcdc.jqpk.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }, {
                toLinks: "page/index/index",
                param: "adlist/wsxl.jpg",
                appid: "30272941",
                name: "我是绣娘",
                pkgname: "com.ptg.sdyjq.nearme.gamecenter",
                weight: 0,
                position: "1001",
                toHz: 0
            }];
        }
        static resetSwithes(t) {
            e.Log("----- 开关数据:" + JSON.stringify(t)), null != t && ("tt" == i.platfomStr ? I.resetTTSwitches(t) : "qg" == i.platfomStr ? I.resetQGSwitches(t) : "qq" == i.platfomStr ? I.resetQQSwitched(t) : "wx" == i.platfomStr && I.resetWXSwitches(t),
                I.initLocalSwithes());
        }
        static resetWXSwitches(t) {
            if (I.version + "" == t.online_version) {
                if (e.Log("---------------配置1"), 0 == t.version) return;
                if (t.local_switch && 1 == t.local_switch) return;
                t.delay_turn && 1 == t.delay_turn ? this.isWudian = !0 : this.isWudian = !1, t.delay_egg_switch && 1 == t.delay_egg_switch ? this.isGoldenEgg = !0 : this.isGoldenEgg = !1,
                    t.force_video && 1 == t.force_video ? this.isStartVedio = !0 : this.isStartVedio = !1,
                    t.banner_display && 1 == t.banner_display ? this.isDefaultGou = !0 : this.isDefaultGou = !1;
            }
        }
        static resetQQSwitched(e) {
            if (I.version + "" == e.online_version) {
                if (0 == e.version) return;
                if (e.local_switch && 1 == e.local_switch) return;
                e.screen_ad_switch && 1 == e.screen_ad_switch ? this.isMainBoxAd = !0 : this.isMainBoxAd = !1,
                    e.delay_egg_switch1 ? 2 == e.delay_egg_switch1 ? this.hasStartEgg = 1 : 1 == e.delay_egg_switch1 ? this.hasStartEgg = 2 : this.hasStartEgg = e.delay_egg_switch1 : this.hasStartEgg = 0,
                    e.delay_egg_switch3 ? 2 == e.delay_egg_switch3 ? this.hasEndEgg = 1 : 1 == e.delay_egg_switch3 ? this.hasEndEgg = 2 : this.hasEndEgg = e.delay_egg_switch3 : this.hasEndEgg = 0,
                    e.delay_egg_switch4 ? 2 == e.delay_egg_switch4 ? this.hasRewboxEgg = 1 : 1 == e.delay_egg_switch4 ? this.hasRewboxEgg = 2 : this.hasRewboxEgg = e.delay_egg_switch4 : this.hasRewboxEgg = 0,
                    e.video_paly && 1 == e.video_paly ? this.isStartVedio = !0 : this.isStartVedio = !1,
                    e.blocks_show && 1 == e.blocks_show ? this.isGameBlock = !0 : this.isGameBlock = !1,
                    e.banner_display && 1 == e.banner_display ? this.isGamingBanner = !0 : this.isGamingBanner = !1,
                    e.video_display1 && 1 == e.video_display1 ? this.isStartEggVedio = !0 : this.isStartEggVedio = !1,
                    e.video_display3 && 1 == e.video_display3 ? this.isEndEggVedio = !0 : this.isEndEggVedio = !1,
                    e.video_display4 && 1 == e.video_display4 ? this.isRewboxEggVedio = !0 : this.isRewboxEggVedio = !1,
                    e.default_check && 1 == e.default_check ? this.isDefaultGou = !0 : this.isDefaultGou = !1,
                    e.delay_display && 1 == e.delay_display ? this.isDelayDis = !0 : this.isDelayDis = !1,
                    e.Icon_display && 1 == e.Icon_display ? this.isBoxVedio = !0 : this.isBoxVedio = !1,
                    e.Refresh_time1 ? this.bannerFreshTime = e.Refresh_time1 : this.bannerFreshTime = 30,
                    e.Refresh_time2 ? this.blockFreshTime = e.Refresh_time2 : this.blockFreshTime = 30;
            }
        }
        static resetQGSwitches(t) {
            if (I.version + "" == t.online_version) {
                if (e.Log("---------------配置1"), 0 == t.version) return;
                if (t.default_check && 1 == t.default_check ? this.isDefaultGou = !0 : this.isDefaultGou = !1,
                    t.local_switch && 1 == t.local_switch) return;
                t.delay_txt_switch && 1 == t.delay_txt_switch ? this.isWudian = !0 : this.isWudian = !1,
                    t.export_marquee && 1 == t.export_marquee ? this.hasMarquee = !0 : this.hasMarquee = !1,
                    t.delay_egg_switch && 1 == t.delay_egg_switch ? (this.isGoldenEgg = !0, t.share_bnt_switch && 1 == t.share_bnt_switch ? this.hasEndEgg = 1 : this.hasEndEgg = 0) : this.isGoldenEgg = !1,
                    t.ptg_native_btn_text && 1 == t.ptg_native_btn_text ? this.nativeText = !0 : this.nativeText = !1,
                    t.ptg_native_limit_city && 1 == t.ptg_native_limit_city ? this.nativeClose = !0 : this.nativeClose = !1,
                    t.ptg_yuansheng_limit && 1 == t.ptg_yuansheng_limit ? this.nativeTime = !0 : this.nativeTime = !1,
                    t.ptg_threshold && 1 == t.ptg_threshold ? this.isRequestNative = !0 : this.isRequestNative = !1;
            }
        }
        static resetTTSwitches(t) {
            if (I.version + "" == t.online_version) {
                if (e.Log("---------------配置1"), 0 == t.version) return;
                t.default_check && 1 == t.default_check ? this.isDefaultGou = !0 : this.isDefaultGou = !1,
                    t.delay_display && 1 == t.delay_display ? this.isDelayDis = !0 : this.isDelayDis = !1,
                    t.force_video1 && 1 == t.force_video1 ? this.isStartVedio = !0 : this.isStartVedio = !1,
                    t.force_video2 && 1 == t.force_video2 ? this.isReusltVedio = !0 : this.isReusltVedio = !1,
                    t.delay_egg_switch && 1 == t.delay_egg_switch ? this.isGoldenEgg = !0 : this.isGoldenEgg = !1,
                    t.screen_switch && 1 == t.screen_switch ? this.hasMarquee = !0 : this.hasMarquee = !1,
                    t.force_share && 1 == t.force_share ? this.isFoceShare = !0 : this.isFoceShare = !1;
            }
        }
    }
    I.isPlayBgMusic = !1, I.isAuthorization = !1, I.openId = 1e4, I.channelId = 1e4,
        I.shareInfo = [], I.userData = {
            userId: "0",
            level: 0,
            coin: 0,
            hp: 10,
            costHpTime: 0,
            useSkin: 0,
            useSkin2: 5,
            item1: 0,
            item2: 2,
            item3: 2,
            keyCount: 0,
            nickName: "player01",
            headImg: "",
            unlock: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            unlockv: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            signinNum: 0
        }, I.levelRecord = {}, I.adUnitId = "", I.appBoxId = "c135c890b6d29f2698cfc26765aa685d",
        I.blockAd = "98521211d2cef7188ddaa66916191961", I.innerADIds = [], I.innerAD_delayed_time = 0,
        I.isWudian = !1, I.hasJumpAd = !0, I.isShare = !1, I.isNativeClosed = !1, I.nativeClose = !1,
        I.nativeTime = !1, I.nativeText = !1, I.isOpenBox = !0, I.isGoldenEgg = !1, I.goldenEggRatio = 100,
        I.hasStartEgg = 0, I.hasEndEgg = 0, I.hasRewboxEgg = 0, I.isStartEggVedio = !1,
        I.isEndEggVedio = !1, I.isRewboxEggVedio = !1, I.hasMarquee = !1, I.hasConverge = !1,
        I.isDefaultGou = !1, I.isStartVedio = !1, I.isReusltVedio = !1, I.isFoceShare = !1,
        I.isDelayDis = !1, I.isMainBoxAd = !1, I.isGameBlock = !1, I.isBoxVedio = !1, I.bannerFreshTime = 30,
        I.blockFreshTime = 30, I.isGamingBanner = !1, I.isRequestNative = !1, I.allBannersControl = [{
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !1,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }, {
            ad_id: I.bannerId,
            delay: 1600,
            showDelay: 1700,
            refreshTime: 1600,
            postion: 1001,
            wudian: !0,
            isShowAd: !0,
            isWide: !1
        }], I.adInfos = [], I.switches = {}, I.version = "100", I.appLaunchOptions = [];
    class L {
        constructor() {
            this.shareSuccTitle = "分享成功", this.stime = 0, this.shareCaller = null, this.succFun = null,
                this.failFun = null, this.shareState = 0, this.sysInfo = null, this.isInited = !0,
                this.hasAd = !1;
        }
        static showAppBox(t) {
            0 != Laya.Browser.onMiniGame ? (this.initAppBox(), null != this.appBox && (this.appBox.offClose(),
                this.appBox.load().then(() => {
                    this.appBox.show();
                }), this.appBox.onClose(e => {
                    t && t();
                }))) : e.Log("显示  AppBox");
        }
        static initAppBox() {
            0 != Laya.Browser.onMiniGame ? "qq" == i.platfomStr && null == this.appBox && (this.appBox = i.createAppBox({
                adUnitId: I.appBoxId
            })) : e.Log("显示");
        }
        static hideBlockAd() {
            e.Log("----------  hideBlockAd---"), this._destroyBlockAd();
        }
        static showBlockAd(t) {
            if (0 == Laya.Browser.onMiniGame) return void e.Log("显示");
            if ("qq" != i.platfomStr) return;
            this._createBlockAd({
                size: 4,
                style: {
                    left: 0,
                    top: 0
                }
            }, t);
        }
        static _destroyBlockAd() {
            for (let e = 0, t = this.blockAds.length; e < t; ++e) this.blockAds[e].destroy();
            this.blockAds = [];
        }
        static _createBlockAd(t, s) {
            let a, n = {
                adUnitId: I.blockAd,
                size: 4,
                orientation: "vertical",
                style: {
                    left: 10,
                    top: 10
                }
            };
            e.Log("---------- 创建积木广告:" + JSON.stringify(n)), null != (a = i.createBlockAd(n)) && (this.blockAds.push(a),
                a.onLoad(t => {
                    e.Log("-------  blockAd.onLoad"), a.show();
                }), a.onResize(t => {
                    e.Log("-------  blockAd.onResize:" + JSON.stringify(t)), 1 == s ? (a.style.left = L.instance.sysInfo.screenWidth - t.width,
                        a.style.top = (L.instance.sysInfo.screenHeight - t.height) / 2 - 150) : (a.style.left = L.instance.sysInfo.screenWidth - t.width,
                            a.style.top = (L.instance.sysInfo.screenHeight - t.height) / 2);
                }), a.onError(t => {
                    e.Log("------  error  res:" + JSON.stringify(t)), a = null;
                }));
        }
        static showMessage(e) {
            t.instance.dispatch(o.ui_openSystem, e);
        }
        static openService() {
            Laya.Browser.onMiniGame ? (e.Log("打开客服"), i.openCustomerServiceConversation()) : e.Log("不能打开客服");
        }
        static reportMonitor() {
            "qg" == i.platfomStr && "o" == i.platfomStr2 && window.qg.reportMonitor("game_scene", 0);
        }
        static share(e, t, s) {

        }
        static jumpAd(t) {
            if ("qq" == i.platfomStr) return void this.showAppBox();
            if ("tt" == i.platfomStr) return void (0 == L.isIOS && i.showMoreGamesModal({
                appLaunchOptions: I.appLaunchOptions,
                success(e) {
                    console.log("success", e.errMsg);
                },
                fail(e) {
                    console.log("fail", e.errMsg);
                }
            }));
            let s = JSON.parse(JSON.stringify(this.advanceAdInfo(t)));
            0 == this._isInJump(s.appid) && this._jumplist.push(s.appid), e.Log("----- 点击 appid:" + s.appid);
            let a = s.appid, n = s.toLinks, o = s.id, r = {};
            if (S.instance.StatisticsNavigateStart(o, a, s.position), "qg" == i.platfomStr ? (r.pkgName = s.pkgname,
                r.path = n, r.success = (t => {
                    e.Log("跳转成功打开", t), L.isJumpOut = !0, S.instance.StatisticsNavigate(o, a, s.position);
                }), r.fail = (t => {
                    if (Laya.Browser.onMiniGame) {
                        let s = {};
                        L.isJumpOut = !1, s.title = "跳转失败", i.showToast(s), e.Log("-------------  res:" + JSON.stringify(t));
                    }
                })) : (r.path = n, r.envVersion = "release", r.appId = a, r.success = (t => {
                    e.Log("跳转成功打开", t), L.isJumpOut = !0, S.instance.StatisticsNavigate(o, a, s.position);
                }), r.fail = (t => {
                    if (Laya.Browser.onMiniGame) {
                        let s = {};
                        L.isJumpOut = !1, s.title = "跳转失败", i.showToast(s), e.Log("-------------  res:" + JSON.stringify(t));
                    }
                })), Laya.Browser.onMiniGame) if (void 0 !== a) i.navigateToMiniProgram(r), S.instance.StatisticsNavigateStart(o, a, s.position); else if (Laya.Browser.onMiniGame) {
                    let e = {};
                    L.isJumpOut = !1, e.title = "跳转失败", i.showToast(e);
                }
        }
        static advanceAdInfo(t) {
            return null == this._jumplist || this._jumplist.length < 1 ? (this._jumplist = [],
                t) : this._jumplist.length >= 10 ? t : (e.Log("  jumplist.length:" + this._jumplist.length + "    allLenth" + this._allAdlist.length),
                    this._hasJumpAd(t));
        }
        static _hasJumpAd(e) {
            for (let t = 0, i = this._jumplist.length; t < i; ++t) if (this._jumplist[t] == e.appid) return this._getRandAdInfo();
            return e;
        }
        static _getRandAdInfo() {
            let e = !0, t = l.Random_local(0, this._allAdlist.length);
            for (; e;) {
                if (0 == (e = this._isInJump(this._allAdlist[t].appid))) return this._allAdlist[t];
                t = l.Random_local(0, this._allAdlist.length);
            }
            return null;
        }
        static _isInJump(e) {
            if (null == this._jumplist || this._jumplist.length < 1) return !1;
            for (let t = 0, i = this._jumplist.length; t < i; ++t) if (this._jumplist[t] == e) return !0;
            return !1;
        }
        static initAdInfos(t) {
            (null == this._allAdlist || this._allAdlist.length < 1) && (this._allAdlist = t,
                e.Log("---------------  _allAdlist:" + JSON.stringify(this._allAdlist)));
        }
        static shuffleInfos(e) {
            let t = [], i = [];
            for (let s = 0, a = e.length; s < a; ++s) this._isInJump(e[s].appid) ? i.push(e[s]) : t.push(e[s]);
            return i.length == this._allAdlist.length || i.length >= 10 ? (this._shuffle(i),
                i) : (this._shuffle(t), t.concat(i));
        }
        static _shuffle(e) {
            let t, i, s = e.length;
            for (let a = 0, n = s; a < n; ++a) t = l.Random_local(0, s), i = e[a], e[a] = e[s - 1 - t],
                e[s - 1 - t] = i;
        }
        static _showNativeAd(s) {
            var a = i.createNativeAd({
                adUnitId: I.innerADIds[s]
            });
            a.load(), e.Log("加载原生广告:" + I.innerADIds[s]), a.onLoad(function (i) {
                e.Log("原生广告加载完成:" + JSON.stringify(i)), L._nativeAd = a, L._lastAd = i, I.isNativeClosed ? L.reportAdShow(i.adList[0].adId) : t.instance.dispatch(o.loadedNativeAd, i);
            }), a.onError(function (t) {
                e.Log("原生广告加载出错:" + JSON.stringify(t)), a.destroy(), 0 == s && L._showNativeAd(1);
            });
        }
        static showNativeAd() {
            0 != Laya.Browser.onMiniGame ? (e.Log("显示原生广告。。。"), "qg" == i.platfomStr && (null != L._nativeAd && (L._nativeAd.offLoad(),
                L._nativeAd.destroy(), L._nativeAd = null), e.Log("显示原生广告。。。 222"), L._showNativeAd(0),
                S.instance.StatisticsShowBanner(18e3), L._lastCreatTime = ae.instance.runTime)) : L.timeLoadNative = !1;
        }
        static reportAdClick(t) {
            e.Log("reportAdClick"), 0 != Laya.Browser.onMiniGame && "qg" == i.platfomStr && null != L._nativeAd && (L._nativeAd.reportAdClick({
                adId: t
            }), S.instance.StatisticsClickBanner(18e3));
        }
        static reportAdShow(t) {
            e.Log("reportAdShow"), 0 != Laya.Browser.onMiniGame && "qg" == i.platfomStr && null != L._nativeAd && L._nativeAd.reportAdShow({
                adId: t
            });
        }
        static clearNativeAd() {
            L.timeLoadNative = !1, L._nativeAd = null, L.nativeAdTime = 0;
        }
        static showInterstitialAD() {
            if (0 == Laya.Browser.onMiniGame) return;
            if (console.log("请求显示插屏广告"), Laya.timer.currTimer - L.preInterstitalsTime < I.innerAD_delayed_time) return void console.log("时间间隔未到");
            console.log("显示插屏广告");
            let e = null;
            window.tt.createInterstitialAd && (e = window.tt.createInterstitialAd({
                adUnitId: I.innerADIds[l.Random_local(0, I.innerADIds.length)]
            })), e && e.show().catch(e => {
                console.error(e);
            }), L.preInterstitalsTime = Laya.timer.currTimer;
        }
        static setUserCloudStorage(e, t, s) {
            Laya.Browser.window.tt.postMessage({
                type: "upScore",
                data: {
                    score: e,
                    stage: t,
                    skin: s
                }
            }), i.setUserCloudStorage(L.wxUserCloudStorage(e, t, s));
        }
        static wxUserCloudStorage(t, i, s) {
            var a = [];
            return a.push({
                key: "score",
                value: String(t)
            }), a.push({
                key: "stage",
                value: String(i)
            }), a.push({
                key: "skin",
                value: s
            }), e.Log("------------score:" + t), {
                KVDataList: a,
                success: e => { },
                fail: e => { }
            };
        }
        init() {
            if (e.Log("[启动时，要从project.config.json 拉取appId]"), 0 == Laya.Browser.onMiniGame) return L.screenWidth = Laya.stage.width,
                L.screenHeight = Laya.stage.height, this.hwRatio = 1 * Laya.stage.height / Laya.stage.width,
                void (this.whRatio = 1 * Laya.stage.width / Laya.stage.height);
            if (Laya.Browser.onMiniGame) {
                "ios" == i.getSystemInfoSync().platform && (L.isIOS = !0);
            }
            i.showShareMenu({
                withShareTicket: !0
            }), i.onShareAppMessage(() => {
                e.Log("点击分享。。。。");
                let t = "";
                return "qq" == i.platfomStr && (t = ""),
                {
                    imageUrl: t,
                    success() {
                        console.log("分享成功");
                    },
                    fail(e) {
                        console.log("分享失败", e);
                    }
                };
            });
            let t = i.getMenuButtonBoundingClientRect();
            t && (e.Log("getMenuButtonBoundingClientRect:" + JSON.stringify(t)), L.menuObj = t);
            var s = i.getSystemInfoSync();
            s && (e.Log("getSystemInfoSync:" + JSON.stringify(s)), this.SetSystemInfo(s));
            let a = i.getLaunchOptionsSync();
            if (a && (e.Log("getLaunchOptionsSync:" + JSON.stringify(a)), a.referrerInfo && a.referrerInfo.appId && (I.fromAppid = a.referrerInfo.appId),
                a.query && (a.query.channel && (I.channelId = Number(a.query.channel)), a.query.inviteId && (I.shareId = a.query.inviteId),
                    a.query.id && (I.shareImgId = a.query.id), a.query.inviteId))) {
                var n = a.query.inviteId;
                e.Log("接收到的数据 inviteId", n), null == n && null == n || (I.inviteId = n);
            }
            i.onShow(t => {
                if (I.loadUserData(), e.Log(" onShow:" + ae.instance.gameState), ae.instance.onShow(t),
                    "qg" != i.platfomStr) {
                    if (null != t.query) {
                        if (t.query.inviteId) {
                            var s = t.query.inviteId;
                            e.Log("接收到的数据 inviteId", s), null == s && null == s || (I.inviteId = s);
                        }
                        t.query.openGroup, 1104 == t.scene && (e.Log("从我的小程序进入的游戏"), e.Log("用户是从我的小程序进入游戏的 请求 小程序礼包"));
                    }
                    2 == this.shareState && (Laya.Browser.now() - this.stime > 3e3 ? (this.shareState = 3,
                        Laya.timer.once(500, this, this.funShareSucc)) : this.funShareFail()), 1104 == t.scene && (e.Log("从我的小程序进入的游戏"),
                            e.Log("用户是从我的小程序进入游戏的 请求 小程序礼包"));
                }
            }), i.onHide(t => {
                e.Log(" onHide:" + ae.instance.gameState), L.lastState = ae.instance.gameState,
                    ae.instance.onHide(t), "qg" != i.platfomStr && 1 == this.shareState && (this.stime = Laya.Browser.now(),
                        this.shareState = 2);
            });
        }
        initShare(e, t, i) {
            this.shareCaller = e, this.succFun = t, this.failFun = i, this.shareState = 1;
        }
        funShareFail() {
            this.shareState = 0, e.Log("微信分享模拟失败"), this.failFun && this.failFun.call(this.shareCaller, {});
        }
        cancelShare() {
            e.Log("微信分享 接口有用 或者失败"), this.shareState = 0, Laya.timer.clear(this, this.funShareSucc);
        }
        funShareSucc() {
            3 == this.shareState && (e.Log("微信分享模拟成功"), this.shareState = 0, this.succFun && this.succFun.call(this.shareCaller, {}));
        }
        SetSystemInfo(t) {
            this.sysInfo = t, L.screenWidth = t.windowWidth, L.screenHeight = t.windowHeight,
                this.hwRatio = t.windowHeight / t.windowWidth, this.whRatio = 1 * t.windowWidth / t.windowHeight,
                "qg" == i.platfomStr && "v" == i.platfomStr2 && (this.whRatio = 1 * t.screenWidth / t.screenHeight),
                e.Log("------------------  whRatio:" + this.whRatio), t.system && t.system.startsWith("iOS") && (L.isIOS = !0),
                t.SDKVersion >= "2.0.4" && (this.isInited = !0);
            let s = re.height / t.screenHeight;
            if (t.statusBarHeight) {
                if (L.offY = t.statusBarHeight - 20, t.platform && "android" == t.platform && (L.isAndroid = !0,
                    L.offY = 24 - t.statusBarHeight, L.offY < 0 && (L.offY = 0)), L.realH = ~~(s * L.offY),
                    L.isAndroid && null != L.menuObj && (L.realH = ~~(s * L.menuObj.top / 2), e.Log("-----------  android.realH:" + L.realH)),
                    L.menuObj) {
                    let e = t.screenHeight / re.height * 1.5;
                    L.realRightTop = e * L.menuObj.top + e * L.menuObj.height;
                }
                e.Log("WxPlatform.offY:" + L.offY + "  WxPlatform.realH:" + L.realH + " WxPlatform.realRightTop:" + L.realRightTop);
            }
        }
        static login(t, s) {
            Laya.Browser.onMiniGame && i.login({
                success: i => {
                    e.Log("这里发送服务器登录 code2Session" + i.code), S.instance.loginSend(i.code, !1, t, s);
                },
                fail: e => { }
            });
        }
        static HasVideo() {
            return !L._hasVideo && (L._hasVideo = !0, "qg" == i.platfomStr && "v" == i.platfomStr2 ? Laya.timer.once(3e4, L.instance, () => {
                L._hasVideo = !1;
            }) : Laya.timer.once(500, L.instance, () => {
                L._hasVideo = !1;
            }), !0);
        }
        static initVedioCom() {
            if (0 != Laya.Browser.onMiniGame) if (0 != this.HasVideo()) {
                if (L.instance.isInited) {
                    if (null != L.instance.rewardedVideoAd) return;
                    if ("" == I.adUnitId || null == I.adUnitId) return;
                    "qq" == i.platfomStr && (e.Log("初始化appBox"), L.initAppBox()), e.Log("初始化激励视频"),
                        L.instance.rewardedVideoAd = i.createRewardedVideoAd({
                            adUnitId: I.adUnitId
                        }), L.instance.rewardedVideoAd.onLoad(() => {
                            e.Log("视频加载成功"), L.instance.hasAd = !0, "qg" == i.platfomStr && (this.isFirst ? (L.instance.hasAd = !0,
                                this.isFirst = !1) : (L.instance.rewardedVideoAd.show(), L.instance.hasAd = !1));
                        }), L.instance.rewardedVideoAd.onError(t => {
                            L.showMessage("暂无视频"), L.instance.hasAd = !1, e.Log(JSON.stringify(t)), "qg" != i.platfomStr && null != L.instance.callBackFail && L.instance.callBackFail.call(L.instance._caller);
                        }), L.instance.rewardedVideoAd.onClose(t => {
                            e.Log("------------- onClose res:" + JSON.stringify(t)), t && t.isEnded || null == t ? (S.instance.StatisticsVideoFinished(1),
                                null != L.instance.callBackSuc && L.instance.callBackSuc.call(L.instance._caller)) : null != L.instance.callBackFail && (Laya.Browser.onMiniGame && console.log("播放中途退出"),
                                    S.instance.StatisticsVideoUnfinish(1), L.instance.callBackFail.call(L.instance._caller));
                        });
                }
            } else this.showMessage("暂无视频");
        }
        static showVideo(e, t, s) {
            platform.getInstance().showReward(() => {
                t && t();
            }, () => {
                s && s();
            })
        }
        static startVideo() {

        }
        static stopVideo() {
        }
        static shareVideo(e, t, s) {

        }
    }
    L.blockAds = [], L.instance = new L(), L.isJumpOut = !1, L.nativeAdTime = 0, L.timeLoadNative = !1,
        L.preInterstitalsTime = 0, L.appId = "", L.appName = "消消乐3d", L.appNameEn = "match3d",
        L.isIOS = !1, L.isDouyin = !1, L.offY = 0, L.realH = 0, L.isAndroid = !1, L.menuObj = null,
        L.realRightTop = 0, L._hasVideo = !1, L.isFirst = !0, L.isStopRecorder = !1, L.recorderPath = "",
        function (e) {
            e[e.LEFT = 0] = "LEFT", e[e.RIGHT = 1] = "RIGHT";
        }(m || (m = {}));
    class x extends Laya.Script {
        constructor() {
            super(), this._init = !1, this._cellWidth = 108, this._cellHeight = 108, this._spaceX = 20,
                this.speedTime = 500, this.itemWidth = 101;
        }
        onAwake() { }
        init(e) {
            this._cellWidth = e.width || 108, this._spaceX = e.spaceX || 20, this.speedTime = e.speedTime || 500,
                this._cellHeight = e.height || 108;
        }
        start(t) {
            if (this._init) return;
            let i = this;
            if (null == this.owner) return;
            if (null == t || t.length < 1) return;
            this.adInfos = t, this._cells = [];
            let s = t.length > 4;
            this.posY = (this.owner.height - this._cellHeight) / 2;
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                let o = new Laya.Image();
                this.owner.addChild(o), s ? o.pos((a - 1) * (this._cellWidth + this._spaceX), this.posY) : o.pos(a * (this._cellWidth + this._spaceX), this.posY);
                let r = new Laya.Image();
                o.addChild(r), r.skin = n.param, r.width = this._cellWidth, r.height = this._cellHeight;
                let h = new Laya.Image("adlist/p_bx_i_bg.png");
                r.mask = h;
                let l = new Laya.Image("adlist/p_bx_i_line.png");
                o.addChild(l), l.pos(-1, -1);
                n.name.replace("dy", "");
                l.on(Laya.Event.MOUSE_DOWN, this, () => {
                    i.startTime = Laya.timer.currTimer;
                }), o.name = a.toString(), l.on(Laya.Event.MOUSE_UP, this, () => {
                    let t = Number(o.name), s = this.adInfos[t];
                    Laya.timer.currTimer - i.startTime <= 200 && (e.Log("跳出"), L.jumpAd(s)), i.startTime = Laya.timer.currTimer;
                }), this._cells.push(o);
            }
            this.fristPosX = this._cells[0].x, this.endPosX = this._cells[this._cells.length - 1].x,
                this.moveDirection = m.RIGHT, this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown),
                this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp), this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp), this._init = !0;
        }
        move() {
            let e = -(this._cells[0].x - this.fristPosX);
            Math.abs(this.speedTime / (this._cellWidth + this._spaceX) * e);
            for (var t = 0; t < this._cells.length; t++) {
                let e = this._cells[t];
                e.pos(e.x - .5, this.posY);
            }
            this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
        }
        autoMove() {
            this._cells.length <= 4 || (Laya.timer.clearAll(this), Laya.timer.loop(10, this, function () {
                this.move();
            }));
        }
        firstMoveToEnd() {
            let e = this._cells[this._cells.length - 1], t = this._cells.shift();
            t.pos(e.x + this._cellWidth + this._spaceX, this.posY), this._cells.push(t);
        }
        endMoveToFrist() {
            let e = this._cells[0], t = this._cells.pop(), i = e.x - this._cellWidth - this._spaceX;
            t.pos(i, e.y), this._cells.unshift(t);
        }
        mouseDown() {
            this._mouseDown = !0, Laya.timer.clearAll(this), this._mouseX = this._mouseX = Laya.MouseManager.instance.mouseX,
                Laya.timer.clearAll(this);
            for (var e = 0; e < this._cells.length; e++) {
                let t = this._cells[e];
                Laya.Tween.clearAll(t);
            }
        }
        mouseMove() {
            if (this._mouseDown) {
                var e = Laya.MouseManager.instance.mouseX - this._mouseX;
                this._mouseX = Laya.MouseManager.instance.mouseX;
                for (var t = 0; t < this._cells.length; t++) {
                    let i = this._cells[t];
                    i.pos(i.x + e, this.posY);
                }
                this._cells[this._cells.length - 1].x > this.endPosX && this.endMoveToFrist(), this._cells[0].x < this.fristPosX && this.firstMoveToEnd();
            }
        }
        mouseUp(e) {
            this._mouseDown = !1, this.autoMove();
        }
        onEnable() { }
        onDisable() { }
    }
    !function (e) {
        e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN";
    }(y || (y = {}));
    class k extends Laya.Script {
        constructor() {
            super(), this._offX = 10, this._rowCount = 2, this.moveSpeed = .5, this.colCount = 3,
                this.disType = 2, this._isAutomove = !1, this.disType = 2, this.disType, this._itemHeight = 300,
                this._itemWidth = 216, this._spaceX = 31, this._spaceY = 30, this._repeatX = 3,
                this._repeatY = 2, this.speedTime = 500, this.viewHeight = 520, this.colCount = 3;
        }
        onClick() { }
        init(e) {
            this._itemWidth = e.width || 216, this._itemHeight = e.height || 300, this._spaceX = e.spaceX || 31,
                this._spaceY = e.spaceY || 30, this.colCount = e.col || 3;
        }
        start(e) {
            if (null == e || e.length < 1) return;
            this.owner.removeChildren(), this._cells = [], this.adInfos = e;
            let t = 0, i = new j(), s = this.adInfos.length, a = s >= 12 ? 1 : 2, n = this;
            this._rowCount = 0;
            for (var o = 0; o < s * a; o++) {
                let e, a = n.adInfos[o % s];
                e = 1 == this.disType ? new Laya.Image("adlist/di_2.png") : new Laya.Image("adlist/di_1.png"),
                    this.owner.addChild(e);
                let r = this._cells.length * (this._itemHeight + this._spaceY);
                if (e.pos(t * (this._itemWidth + this._spaceX) + this._offX, r), e.width = this._itemWidth,
                    e.height = this._itemHeight, 1 == this.disType) {
                    let t = new Laya.Image("adlist/kuang_2_1.png");
                    e.addChild(t), t.pos(0, 216), t.size(216, 85);
                    let i = new Laya.Image(a.param);
                    e.addChild(i), i.pos(0, 0), i.size(216, 216);
                    let s = a.name.replace("dy", ""), n = new Laya.Label(s);
                    e.addChild(n), n.fontSize = 20, n.color = "#ffffff", n.align = "center", n.overflow = "hidden",
                        n.pos(5, 238), n.size(207, 40);
                } else {
                    let t = o % 3 + 1, i = new Laya.Image("adlist/kuang_1_" + t + ".png");
                    e.addChild(i), i.pos(0, this._itemHeight - 59), i.size(this._itemWidth, 59);
                    let s = new Laya.Image(a.param);
                    e.addChild(s), s.pos(5, 10), s.size(this._itemWidth - 10, this._itemHeight - 70);
                    let n = new Laya.Image("adlist/zz_l.png");
                    n.size(s.width, s.height), s.mask = n;
                    let r = a.name.replace("dy", ""), h = new Laya.Label(r);
                    e.addChild(h), h.fontSize = 20, h.color = "#ffffff", h.align = "center", h.overflow = "hidden",
                        h.pos(5, this._itemHeight - 40), h.size(this._itemWidth, 40);
                }
                e.on(Laya.Event.MOUSE_DOWN, this, () => {
                    n.startTime = Laya.timer.currTimer;
                }), e.name = o.toString(), e.on(Laya.Event.MOUSE_UP, this, () => {
                    let t = Number(e.name), i = n.adInfos[t % s];
                    Laya.timer.currTimer - n.startTime <= 200 && L.jumpAd(i), n.startTime = Laya.timer.currTimer;
                }), t++, i._posY = r, i._cells.push(e), t >= this.colCount && (this._cells.push(i),
                    t = 0, ++this._rowCount, i = new j());
            }
            0 != t && this._cells.push(i), this.fristPosY = 0, this.endPosY = this.viewHeight - this._itemHeight,
                this.setDirtion(y.UP), this._mouseDown = !1, this.autoMove(), this.owner.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown),
                this.owner.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove), this.owner.on(Laya.Event.MOUSE_UP, this, this.mouseUp),
                this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouseUp), this.owner.on(Laya.Event.FOCUS_CHANGE, this, this.mouseUp);
        }
        autoMove() {
            0 == this._isAutomove && (Laya.timer.loop(10, this, () => {
                this.move();
            }), this._isAutomove = !0);
        }
        mouseDown() {
            Laya.timer.clearAll(this), this._isAutomove = !1, this._mouseDown = !0, this._mouseY = Laya.MouseManager.instance.mouseX;
        }
        mouseUp(e) {
            this._mouseDown = !1, this._mouseY = 0, this.autoMove();
        }
        mouseMove() {
            if (this._mouseDown) {
                var e = Laya.MouseManager.instance.mouseY - this._mouseY;
                e = e > 30 ? 30 : e < -30 ? -30 : e, this._mouseY = Laya.MouseManager.instance.mouseY,
                    e < 0 ? this.setDirtion(y.UP) : this.setDirtion(y.DOWN), this.myMove(e);
            }
        }
        move() {
            let e = -(this._cells[0].getPosY() - this.fristPosY), t = (Math.abs(this.speedTime / (this._itemHeight + this._spaceY) * e),
                this.moveSpeed);
            this.myMove(t);
        }
        myMove(e) {
            for (var t = 0; t < this._cells.length; t++) {
                let i = this._cells[t];
                if (i.setPosY(i.getPosY() + e), e < 0) {
                    if (i.getPosY() < -(this._itemHeight + this._spaceY)) {
                        let e = i.getPosY() - -(this._itemHeight + this._spaceY);
                        i.setPosY((this._itemHeight + this._spaceY) * (this._rowCount - 1) + e);
                    }
                } else if (i.getPosY() >= (this._itemHeight + this._spaceY) * (this._rowCount - 1)) {
                    let e = i.getPosY() - (this._itemHeight + this._spaceY) * (this._rowCount - 1);
                    i.setPosY(-(this._itemHeight + this._spaceY) + e);
                }
            }
        }
        setDirtion(e) {
            this.moveDirection = e, this.moveDirection == y.DOWN ? this.moveSpeed = .5 : this.moveSpeed = -.5;
        }
    }
    class j {
        constructor() {
            this._cells = [], this._posY = 0;
        }
        setPosY(e) {
            for (let t = 0; t < this._cells.length; t++) {
                let i = this._cells[t], s = i.x;
                i.pos(s, e);
            }
            this._posY = e;
        }
        getPosY() {
            return this._posY;
        }
    }
    class C {
        constructor(e, t, s = !1) {
            this.gameList = t, null == C.banners && (C.banners = []), this._idx = e, C.isSingleton && (this._idx = 0),
                null == C.banners[this._idx] ? (C.banners[this._idx] = C.createBanner(this._idx),
                    C.isSingleton && (C._lastCreatTime = ae.instance.runTime)) : C.isSingleton && "qq" == i.platfomStr && 0 == s && (C.banners[this._idx].destroy(),
                        C.banners[this._idx] = null, C.banners[this._idx] = C.createBanner(this._idx), C.isSingleton && (C._lastCreatTime = ae.instance.runTime)),
                C.banners[this._idx] && C.banners[this._idx].show(), C.isSingleton && "qq" == i.platfomStr && s && Laya.timer.loop(1e3 * I.bannerFreshTime, this, this.refresh);
        }
        static hideAll() {
            if (null != C.banners) for (let e = 0, t = C.banners.length; e < t; ++e) C.banners[e] && C.banners[e].hide();
        }
        static hide() { }
        static refresh(e) { }
        static init() {
            if (0 != Laya.Browser.onMiniGame) {
                "wx" == i.platfomStr ? this.isSingleton = !1 : this.isSingleton = !0;
                var e = ~~(L.instance.sysInfo.screenWidth / 300 * 100);
                if (this.styleObj = {
                    top: L.instance.sysInfo.screenHeight - e - 2 * L.offY - 8,
                    width: L.instance.sysInfo.screenWidth
                }, "qg" == i.platfomStr) if ("o" == i.platfomStr2) {
                    let e = ~~(L.instance.sysInfo.screenWidth / 3);
                    this.styleObj = {
                        top: L.instance.sysInfo.screenHeight - e / 2 + 2 * L.realH,
                        left: 0,
                        width: L.instance.sysInfo.screenWidth,
                        height: e
                    };
                } else "v" == i.platfomStr2 && (this.styleObj = {}); else if ("qq" == i.platfomStr || "wx" == i.platfomStr) {
                    var t = L.screenWidth;
                    "wx" == i.platfomStr && (t = 300), e = t / 3, "qq" == i.platfomStr && (e = t / 4);
                    var s = (L.screenWidth - t) / 2;
                    this.styleObj = {
                        top: L.instance.sysInfo.screenHeight - e,
                        left: s,
                        width: t,
                        height: e
                    };
                }
            }
        }
        refresh() {
            console.log("----------  定时刷新banner---------------------"), C.banners[this._idx].destroy(),
                C.banners[this._idx] = null, C.banners[this._idx] = C.createBanner(this._idx), C.isSingleton && (C._lastCreatTime = ae.instance.runTime),
                C.banners[this._idx].show();
        }
        static createBanner(e) {
            if (0 == Laya.Browser.onMiniGame) return null;
            let t = I.bannerId[e], s = null;
            return (s = "qq" == i.platfomStr || "qg" == i.platfomStr ? i.createBannerAd({
                adUnitId: t,
                style: C.styleObj
            }) : i.createBannerAd({
                adUnitId: t,
                style: C.styleObj,
                adIntervals: 30
            })).onError(e => {
                console.log("============================加载banner出错>>>>", JSON.stringify(e));
            }), s.onLoad(() => {
                s.show();
            }), s.onResize(e => {
                if ("tt" == i.platfomStr) {
                    const { windowWidth: t, windowHeight: a } = i.getSystemInfoSync();
                    s.style.top = a - e.height, s.style.left = (t - e.width) / 2, console.log("onResize windowWidth:" + t + " res.width:" + e.width + " left:" + (t - e.width) / 2);
                } else "qg" == i.platfomStr && "v" == i.platfomStr2 && (s.show(), s.style.top = L.instance.sysInfo.screenHeight - e.realHeight);
            }), s;
        }
        destroy() {
            C.banners[this._idx] && C.banners[this._idx].hide(), Laya.timer.clearAll(this);
        }
        show() {
            C.banners[this._idx] && C.banners[this._idx].show();
        }
        onEnable() { }
        onDisable() { }
    }
    C.styleObj = {};
    class V extends c.Views.ConvergeViewUI {
        constructor() {
            super(), this._showBanner = !1, Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent();
        }
        onEnable() { }
        onDisable() { }
        initEvent() {
            this.img_home.on(Laya.Event.CLICK, this, () => {
                if ("wx" == i.platfomStr) {
                    if (I.isWudian && 0 == this._showBanner && Laya.timer.once(1600, this, () => {
                        this.banner = new C(2, null), Laya.timer.once(1e3, this, () => {
                            this._showBanner = !0, C.hideAll();
                        });
                    }), I.isWudian && 0 == this._showBanner) return;
                    ae.instance.gameState == a.ResultView || ae.instance.gameState == a.ReviveView ?
                        t.instance.dispatch(o.ui_openResult, [ae.instance.g_getStar]) : te.instance.closeUI(n.ConvergeView);
                } else t.instance.dispatch(o.ui_openResult);
            });
        }
    }
    !function (e) {
        e[e.level = 0] = "level", e[e.mall = 1] = "mall", e[e.monster = 2] = "monster",
            e[e.signin = 3] = "signin";
    }(u || (u = {}));
    class A {
        constructor() {
            this.hasSkyBox = !1, this.ChaseTime = .032;
        }
        init(t) {
            e.Log("---------------- cameraSprite.name:" + t.name), this.gameObject = t, this.transform = this.gameObject.transform,
                this._camera = t, this.srcPos = this.transform.position.clone(), this.srcRot = this.transform.rotation.clone(),
                this.transform.position = l.toRightPos(new Laya.Vector3(0, 1, -20.8)), this.srcEuler = this.transform.rotationEuler.clone(),
                this.hasSkyBox && this.bigSky();
        }
        reset() {
            this.transform.position = l.toRightPos(new Laya.Vector3(0, 1, -20.8)), this.transform.rotationEuler = this.srcEuler.clone();
        }
        bigSky() {
            Laya.BaseMaterial.load("res3d/skyBox1/skyBox.lmat", Laya.Handler.create(this, function (e) {
                var t = s.instance.Scene.skyRenderer;
                t.mesh = Laya.SkyBox.instance, t.material = e;
            }));
        }
        setTarget(e, t) {
            this.MoveTo = e, this.LookAt = t, this.mVelocity = new Laya.Vector3(0, 0, 0);
        }
        worldPointToView(e) {
            let t = new Laya.Vector3(0, 0, 0);
            return this._camera.worldToViewportPoint(e, t), new Laya.Vector2(t.x, t.y);
        }
        viewportPointToRay(e) {
            let t = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            return this._camera.viewportPointToRay(e, t), t;
        }
        LateUpdate(e) { }
        toView(e) {
            if (null != e) {
                let t = e.position.clone();
                l.TweenToPos(null, .7, this.transform, t, null);
            }
        }
        toGame() {
            l.TweenToPos(null, .5, this.transform, this.srcPos, null), l.TweenToEuler(null, .5, this.transform, this.srcEuler, null);
        }
    }
    A.instance = new A();
    class z {
        constructor(i, s) {
            this.motions = ["run", "arder", "dead", "attack", "push", "shengli"], this.aniIdx = -1,
                this.id = 0, this.isMove = !1, this.movetype = 0, this.isLeft = !1, this.isOrgan = !1,
                this.hp = 1, this.gameObject = i, this.transform = this.gameObject.transform, this.data = s,
                this.id = O.instance.genId, 1 == s.move ? this.isMove = !0 : this.isOrgan = !0,
                this.gameObject.transform.position.x > 0 ? this.isLeft = !0 : this.isLeft = !1,
                this.hp = s.hp, this.range = s.Range, this.attack = s.attack, e.Log("actionObj y:" + this.gameObject.transform.position.y);
            let a = this.transform.position.y;
            if (this.triggerY = a > 1 ? 2.5 : a < -1 ? -2.5 : 0,
                this.animator = this.gameObject.getChildByName(this.gameObject.name).getComponent(Laya.Animator),
                this.playAnimation(1), "role_boy" == s.model || "role_girl" == s.model) {
                this.gameObject.getChildByName("tips").active = !1, t.instance.onEvent(o.gameStart, this, this.reset),
                    "role_boy" == s.model ? this.resetSkin(I.userData.useSkin2) : this.resetSkin(I.userData.useSkin);
            }
        }
        resetSkin(e) {
            // this.sprite && (this.sprite.destroy(), this.sprite = null), this.sceneType = _.store;
            // let e = s.instance.configs[u.mall][this.showIdx].model,
            //     t = ae.instance.createSkin(e);
            // this.sprite = Laya.Sprite3D.instantiate(t, this.displayScene),

            let t = "", i = s.instance.configs[u.mall];
            t = (this.data.model, i[e].model);
            let a = ae.instance.getMaterial(t);
            null != a ? ("role_boy" == this.data.model ?
                this.gameObject.getChildByName("role_boy").getChildByName("role_boy").skinnedMeshRenderer.material = a.meshRenderer.material :
                this.gameObject.getChildByName("role_girl").getChildByName("girl").skinnedMeshRenderer.material = a.meshRenderer.material)
                : ("role_boy" == t ?
                    this.gameObject.getChildByName("role_boy").getChildByName("role_boy").skinnedMeshRenderer.material = Laya.loader.getRes(
                        "res3d/LayaScene_game/Conventional/Assets/Arts/juese/Materials/zhujue_nan.lmat"
                    ) :
                    this.gameObject.getChildByName("role_girl").getChildByName("girl").skinnedMeshRenderer.material = Laya.loader.getRes(
                        "res3d/LayaScene_game/Conventional/Assets/Arts/Materials/Materials/role_girl.lmat"
                    ));
        }
        dance() {
            this.playAnimation(5), this.toEndCamera();
        }
        toRightCheng() {
            O.instance.getRightCheng().addChild(this.gameObject), this.transform.position = O.instance.getChengItem(2).transform.position.clone(),
                this.movetype = 1;
        }
        toLeftCheng() {
            O.instance.getLeftCheng().addChild(this.gameObject), this.transform.position = O.instance.getChengItem(1).transform.position.clone(),
                this.movetype = 1;
        }
        playAnimation(t) {
            null != this.animator && this.aniIdx != t && (e.Log("goName:" + this.gameObject.name + "  motion:" + this.motions[t]),
                this.animator.crossFade(this.motions[t], .1), this.aniIdx = t);
        }
        isMainRole() {
            return "role_boy" == this.data.model || "role_girl" == this.data.model;
        }
        push() {
            let e = -90;
            0 == this.isLeft && (e = 90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, e, 0), Laya.Handler.create(this, () => {
                h.PlaySound("open", !0), this.playAnimation(4);
            }));
        }
        endPush() {
            l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                this.playAnimation(1);
            }));
        }
        gotoDoor() {
            let e = -90;
            0 == this.isLeft && (e = 90), ae.instance.isResult || (ae.instance.setResult(!0),
                l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, e, 0), Laya.Handler.create(this, () => {
                    l.TweenToPos(null, .5, this.transform, l.Add(this.transform.position, new Laya.Vector3(-2, 0, 0)), Laya.Handler.create(this, () => {
                        h.PlaySound("win", !0);
                        let e = p.getOrCreateObj("Eff_lihua", O.instance.levelRoot, new Laya.Vector3(0, 0, 0));
                        Laya.timer.once(2e3, this, () => {
                            e.destroy(), ae.instance.toWinLogic();
                        });
                    }));
                })));
        }
        reset() {
            "role_boy" != this.data.model && "role_girl" != this.data.model || (Laya.timer.loop(6e4, this, this.showTips),
                this.showTips());
        }
        showTips() {
            let e = this.gameObject.getChildByName("tips");
            if (e) {
                e.active = !1;
                let t = 0;
                t = "role_girl" == this.data.model ? 0 : 1500, Laya.timer.once(t, this, () => {
                    0 == this.transform.localRotationEulerY && (e.active = !0, Laya.timer.once(1500, this, () => {
                        e.active = !1;
                    }));
                });
            }
        }
        toEndCamera() {
            let e = this.gameObject.getChildByName("cam");
            e && e.transform && A.instance.toView(e.transform);
        }
        beHurt(t) {
            if (e.Log(" hp:" + this.hp + "  attck:" + t), this.hp -= t, ae.instance.addHPTimer(), this.hp <= 0) {
                if (O.instance.removeObj(this), "role_boy" == this.gameObject.name || "role_girl" == this.gameObject.name) {
                    if (ae.instance.isResult) return;
                    ae.instance.setResult(!0), L.showMessage("Game Over"), h.PlaySound("dead", !0), Laya.timer.once(2e3, this, () => {
                        ae.instance.toLoseLogic();
                    });
                }
                this.playAnimation(2), Laya.timer.once(2e3, this, this.onDisable);
            }
        }
        active(e) {
            if (0 == this.movetype) {
                let t = 90;
                0 == this.isLeft && (t = -90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, t, 0), Laya.Handler.create(this, () => {
                    h.PlaySound(this.data.model, !0), this.playAnimation(3), h.VibrateLong(), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                        e.runWith(null);
                    }), 1500);
                }));
            } else {
                let t = -90;
                0 == this.isLeft && (t = 90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, t, 0), Laya.Handler.create(this, () => {
                    h.PlaySound(this.data.model, !0), this.playAnimation(3), h.VibrateLong(), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                        e.runWith(null);
                    }), 1500);
                }));
            }
        }
        moveAndPush(e, t, i) {
            if ("role_boy" != this.data.model) return;
            let s = -90;
            0 == this.isLeft && (s = 90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, s, 0), Laya.Handler.create(this, () => {
                let s, a;
                this.isLeft ? (a = O.instance.getLeftPoint(e), s = a.transform.position.clone()) : (a = O.instance.getRightPoint(e),
                    s = a.transform.position.clone()), this.playAnimation(0), l.TweenToPos(null, .8, this.transform, s, Laya.Handler.create(this, () => {
                        this.movetype = 0, O.instance.levelRoot.addChild(this.gameObject), this.isLeft ? O.instance.removeLeftCheObj(this) : O.instance.removeRightCheObj(this),
                            this.transform.position = s;
                        let e = this.transform.position.y;
                        this.triggerY = e > 1 ? 2.5 : e < -1 ? -2.5 : 0, h.PlaySound("open", !0), this.playAnimation(4),
                            t && t.runWith(null), Laya.timer.once(1e3, this, () => {
                                l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                                    this.playAnimation(1), i.runWith(null);
                                }));
                            });
                    }));
            }));
        }
        checkMove(e, t) {
            if (0 == this.movetype) {
                if (Math.abs(this.gameObject.transform.position.y - e) < .1) {
                    let e = 90;
                    0 == this.isLeft && (e = -90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, e, 0), Laya.Handler.create(this, () => {
                        let e, i = null;
                        this.isLeft ? (e = O.instance.getLeftCheng(), i = O.instance.getChengItem(1).transform.position.clone()) : (e = O.instance.getRightCheng(),
                            i = O.instance.getChengItem(2).transform.position.clone()),
                            this.playAnimation(0);

                        l.TweenToPos(null, .8, this.transform, i, Laya.Handler.create(this, () => {
                            l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                                this.playAnimation(1), this.movetype = 1,
                                    e.addChild(this.gameObject), this.isLeft ? O.instance.addLeftCheObj(this) : O.instance.addRightCheObj(this),
                                    this.transform.position = i, this.triggerY = -100, t.runWith(0);
                            }));
                        }), 0, Laya.Ease.expoOut);


                    }));
                }
            } else if (1 == this.movetype) {
                let i = -90;
                0 == this.isLeft && (i = 90), l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, i, 0), Laya.Handler.create(this, () => {
                    let i, s;
                    this.isLeft ? (s = O.instance.getLeftPoint(e), i = s.transform.position.clone()) : (s = O.instance.getRightPoint(e),
                        i = s.transform.position.clone()), this.playAnimation(0), l.TweenToPos(null, .8, this.transform, i, Laya.Handler.create(this, () => {
                            l.TweenToEuler(null, .2, this.transform, new Laya.Vector3(0, 0, 0), Laya.Handler.create(this, () => {
                                this.playAnimation(1), this.movetype = 0, O.instance.levelRoot.addChild(this.gameObject),
                                    this.isLeft ? O.instance.removeLeftCheObj(this) : O.instance.removeRightCheObj(this),
                                    this.transform.position = i;
                                let e = this.transform.position.y;
                                this.triggerY = e > 1 ? 2.5 : e < -1 ? -2.5 : 0, t.runWith(1);
                            }));
                        }), 0, Laya.Ease.expoOut);
                }));
            }
        }
        update(e) { }
        onEnable() { }
        onDisable() {
            this.gameObject.destroy();
        }
    }
    class M {
        constructor(t, i) {
            this.attType = 1, this.isLeft = !0, this.gameObject = t, this.transform = t.transform,
                this.data = i, this.gameObject.transform.position.x > 0 ? this.isLeft = !0 : this.isLeft = !1,
                this.range = i.Range, this.attack = i.attack, this.type = i.type;
            let s = this.transform.position.y;
            if (this.triggerY = s > 1 ? 2.5 : s < -1 ? -2.5 : 0, "trap_1" == i.model) this.attType = 1,
                this.transform.position = new Laya.Vector3(this.transform.position.x, this.transform.position.y - .3, this.transform.position.z); else if ("trap_2" == i.model) {
                    this.attType = 2;
                    let e = this.transform.position.y;
                    this.triggerY = e > 2 ? 0 : -2.5;
                } else if ("trap_3" == i.model) {
                    this.attType = 3;
                    let e = this.transform.position.y;
                    this.triggerY = e > 3 ? 2.5 : e < -1 ? -2.5 : 0;
                } else "trap_4" == i.model ? this.attType = 4 : (this.attType = 0, e.Log("other y:" + this.transform.position.y));
            if ("trap_6" == i.model) {
                this.gameObject.getChildByName(this.gameObject.name).getComponent(Laya.Animator).enabled = !1;
            }
        }
        isDoor() {
            return "trap_7" == this.data.model;
        }
        isPlus() {
            return "trap_5" == this.data.model;
        }
        setParent(e) {
            e.addChild(this.gameObject), e.transform.position.x < 0 ? this.transform.position = O.instance.getChengItem(2).transform.position.clone() : this.transform.position = O.instance.getChengItem(1).transform.position.clone();
        }
        specialOpen(e) {
            if (4 == this.type) {
                return this.gameObject.getChildByName(this.gameObject.name).getComponent(Laya.Animator).enabled = !0,
                    void Laya.timer.once(1e3, this, () => {
                        e.runWith(null);
                    });
            }
        }
        specialActive() {
            if ("trap_5" == this.data.model) {
                let e = this.gameObject.getChildByName("kaiguan_2").transform;
                l.TweenToPos(null, .5, e, l.Add(this.transform.position.clone(), new Laya.Vector3(.16, 0, 0)), Laya.Handler.create(this, () => { }));
            }
        }
        active(t, i) {
            if (0 != this.attType) {
                if (1 == this.attType) h.PlaySound("trap_1", !0), h.VibrateLong(), l.TweenToPos(null, .3, this.transform, new Laya.Vector3(this.transform.position.x, this.transform.position.y + .3, this.transform.position.z), i, 0, Laya.Ease.expoOut); else if (2 == this.attType) h.PlaySound("trap_2", !0),
                    h.VibrateLong(), l.TweenToPos(null, .3, this.transform, new Laya.Vector3(this.transform.position.x, this.transform.position.y - 1.5, this.transform.position.z), i, 0, Laya.Ease.expoOut); else if (3 == this.attType) h.PlaySound("trap_3", !0),
                        h.VibrateLong(), this.isLeft ? l.TweenToPos(null, .3, this.transform, new Laya.Vector3(this.transform.position.x - 2.5, this.transform.position.y, this.transform.position.z), i, 0, Laya.Ease.expoOut) : l.TweenToPos(null, .3, this.transform, new Laya.Vector3(this.transform.position.x + 2.5, this.transform.position.y, this.transform.position.z), i, 0, Laya.Ease.expoOut); else if (4 == this.attType) {
                            h.PlaySound("trap_4", !0), h.VibrateLong(), this.gameObject.active = !1;
                            let e = p.createObjNoCache("Eff_baozha2", O.instance.levelRoot, this.transform.position.clone());
                            Laya.timer.once(1e3, this, () => {
                                e.destroy(), i.runWith(null);
                            });
                        }
            } else if (t && "role_boy" == t.gameObject.name && "trap_5" == this.data.model) {
                if (this.isLeft) {
                    e.Log("--------------------------------------  aaaaa hp:" + t.hp);
                    let s = this.gameObject.getChildByName("kaiguan_2").transform;
                    t.push(), l.TweenToPos(null, .5, s, l.Add(this.transform.position.clone(), new Laya.Vector3(.16, 0, 0)), Laya.Handler.create(this, () => {
                        t.endPush(), i.run();
                    }));
                }
            } else null != i && i.runWith(0);
        }
        onEnable() { }
        onDisable() {
            this.gameObject.destroy();
        }
    }
    class O {
        constructor() {
            this._id = 0, this.isPause = !1, this.canOp = !0, this.isLeftBoom = -1, this.isRightBoom = -1,
                this.leftObj = null, this.rightObj = null, this.cell = .1, this.moveChengTime = .5,
                this.isMoveCheng = !1, this.lastT = 0, this.isOdd = !1, this._countIdx = 0, this.selFama = -1,
                this.canClick = true, this.checkAniClick = true, this.point = new Laya.Vector2();
        }
        setFamaVisible(e) {
            for (let t = 0, i = this.allFama.length; t < i; ++t) this.allFama[t].active = e;
        }
        getFama(e) {
            return this.allFama[e];
        }
        get genId() {
            return this._id++;
        }
        getRightPoint(e) {
            let t = this.PointsRoot.getChildByName("point11");
            if (Math.abs(t.transform.position.y - e) < .1) return t;
            let i = this.PointsRoot.getChildByName("point14");
            if (Math.abs(i.transform.position.y - e) < .1) return i;
            let s = this.PointsRoot.getChildByName("point17");
            return Math.abs(s.transform.position.y - e) < .1 ? s : null;
        }
        getLeftPoint(e) {
            let t = this.PointsRoot.getChildByName("point2");
            if (Math.abs(t.transform.position.y - e) < .1) return t;
            let i = this.PointsRoot.getChildByName("point5");
            if (Math.abs(i.transform.position.y - e) < .1) return i;
            let s = this.PointsRoot.getChildByName("point8");
            return Math.abs(s.transform.position.y - e) < .1 ? s : null;
        }
        getRightCheng() {
            return this._chengRight;
        }
        getLeftCheng() {
            return this._chengLeft;
        }
        setPause(e) {
            this.isPause = e;
        }
        setSkin(e) {
            e >= 5 ? this.boy && this.boy.resetSkin(e) : this.girl && this.girl.resetSkin(e);
        }
        get levelRoot() {
            return this._levelRoot;
        }
        init(e) {
            if (this.data = e, this._scene = s.instance.Scene, null == this._levelRoot) {
                this._levelRoot = this._scene.getChildByName("levelRoot"), this.ActiveObject = this._scene.getChildByName("ActiveObject"),
                    this.famaRoot = this._scene.getChildByName("famaRoot"), this.PointsRoot = this._scene.getChildByName("Points");
                this._scene.getChildByName("cj").getChildByName("bj").meshRenderer.material;
            } else this._levelRoot.removeChildren();
            this.resetOdd(), this._countIdx = 0, this._girl = null, this._boy = null, this.selFama = -1,
                this.leftObj = null, this.rightObj = null, this.isLeftBoom = -1, this.isRightBoom = -1,
                this.leftHas = [], this.rightHas = [], this.canOp = !0, this.clearPoints(), this.initFamas(this.data),
                this.initCheng(), this.initItems(), this.chengMove(), Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove),
                Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown);
        }
        onKeyDown(t) {
            e.Log(" keyCode:" + t.keyCode);
        }
        resetOdd() {
            let t = JSON.stringify(this.data), i = 0;
            for (let e = 0, s = t.length; e < s; ++e) "F" == t[e] && ++i;
            this.isOdd = i % 2 != 0, e.Log("c:" + i + " isOdd:" + this.isOdd);
        }
        initItems() {
            let t, i, s;
            this._allActionObjs = [], this._allStaicObjs = [];
            for (let a = 1, n = 18; a <= n; ++a) if ("" != (t = this.data["position" + a] + "")) for (let n = 0, o = (i = t.split(",")).length; n < o; ++n) e.Log(" j:" + i[n]),
                i[n].startsWith("F") ? 9 != a && 18 != a || this.genFama(a, i[n]) : (s = Number(i[n]),
                    this.genItem(a, s));
            e.Log("----------  allActionObjs.length:" + this._allActionObjs.length);
        }
        genItem(e, t) {
            let i, a = this.PointsRoot.getChildByName("point" + e), n = s.instance.configs[u.monster][t - 1], o = n.model;
            if (9 == e ? a = this._chengLeft : 18 == e && (a = this._chengRight), "trap_6" == o || "trap_5" == o || "trap_3" == o ? (o += e < 10 ? "_L" : "_R",
                i = p.getOrCreateObj(o, this._levelRoot, a.transform.position.clone())) : i = p.getOrCreateObj(o, this._levelRoot, a.transform.position.clone()),
                "role_girl" == o || "role_boy" == o || "monster_1" == o || "monster_3" == o || "monster_2" == o) {
                let t = new z(i, n);
                this._allActionObjs.push(t), 9 == e ? (this.leftObj = t, t.toLeftCheng()) : 18 == e && (this.rightObj = t,
                    t.toRightCheng());
            } else if (o.startsWith("trap")) {
                let t = new M(i, n);
                this._allStaicObjs.push(t), 9 == e ? (t.setParent(this._chengLeft), this.isLeftBoom = this._allStaicObjs.length - 1) : 18 == e && (t.setParent(this._chengRight),
                    this.isRightBoom = this._allStaicObjs.length - 1);
            }
        }
        getStaticByMode(e) {
            for (let t = 0, i = this._allStaicObjs.length; t < i; ++t) if (this._allStaicObjs[t] && this._allStaicObjs[t].data.model == e) return this._allStaicObjs[t];
            return null;
        }
        checkActionObjMove(t, i) {
            e.Log("---------  人物移动----" + t);
            for (let s = 0, a = this._allActionObjs.length; s < a; ++s) {
                if (null != this._allActionObjs[s] && this._allActionObjs[s].isMove) {
                    if (1 == t) {
                        this._allActionObjs[s].isLeft && (this.checkAutoMoveBoy(this._allActionObjs[s]) ? (e.Log("自动向板上移动并且推到开关"),
                            this._allActionObjs[s].moveAndPush(i, Laya.Handler.create(this, () => {
                                let e = this.getStaticByMode("trap_5");
                                null != e && e.specialActive();
                            }), Laya.Handler.create(this, () => {
                                this.openLock();
                            }))) : "role_boy" != this._allActionObjs[s].gameObject.name && this._allActionObjs[s].checkMove(i, Laya.Handler.create(this, e => {
                                1 == e && this.checkActive(t, 1, i, this._allActionObjs[s], Laya.Handler.create(this, () => {
                                    this.goToDoor();
                                }));
                            })))
                    } else {
                        0 == this._allActionObjs[s].isLeft && (this.checkAutoMoveGirl(this._allActionObjs[s]) || "role_girl" != this._allActionObjs[s].gameObject.name)
                            && this._allActionObjs[s].checkMove(i, Laya.Handler.create(this, e => {
                                1 == e ? this.checkActive(t, 1, i, this._allActionObjs[s], Laya.Handler.create(this, () => {
                                    this.goToDoor();
                                })) : this.goToDoor();
                            }))
                    }
                }
            }

        }
        checkHasActiveObj(t, i, s) {
            1 == t ? null == this.leftObj ? (e.Log("左边称上【没有】 人"), s.runWith(null)) : (e.Log("左边称上【有】 人"),
                this.checkActive(t, 2, i, this.leftObj, s)) : null == this.rightObj ? (e.Log("左边称上【没有】 人"),
                    s.runWith(null)) : (e.Log("左边称上【有】 人"), this.checkActive(t, 2, i, this.rightObj, s));
        }

        removeRightCheObj(e) {
            this.rightObj = null;
        }
        removeLeftCheObj(e) {
            this.leftObj = null;
        }
        addRightCheObj(e) {
            this.rightObj = e;
        }
        addLeftCheObj(e) {
            this.leftObj = e;
        }
        removeObj(e) {
            this.leftObj == e ? this.leftObj = null : this.rightObj == e && (this.rightObj = null);
            for (let t = this._allActionObjs.length - 1; t >= 0; --t) if (this._allActionObjs[t] == e) {
                this._allActionObjs[t] = null;
                break;
            }
        }
        getChengFama(e) {
            if (1 == e) {
                return this._chengLeft.getChildByName("famaPoint");
            }
            return this._chengRight.getChildByName("famaPoint");
        }
        getChengItem(e) {
            if (1 == e) {
                return this._chengLeft.getChildByName("itemPoint");
            }
            return this._chengRight.getChildByName("itemPoint");
        }
        initCheng() {
            null == this._chengLeft && (this._chengLeft = this.ActiveObject.getChildByName("cheng_left"),
                this._chengRight = this.ActiveObject.getChildByName("cheng_right"), this._gunzi_Left = this.ActiveObject.getChildByName("gunzi_left"),
                this._gunzi_Right = this.ActiveObject.getChildByName("gunzi_right")), this._chengLeft.transform.position = new Laya.Vector3(1, 0, 0),
                this._chengRight.transform.position = new Laya.Vector3(-1, 0, 0), this._gunzi_Left.transform.setWorldLossyScale(new Laya.Vector3(1, 3.3, 1)),
                this._gunzi_Right.transform.setWorldLossyScale(new Laya.Vector3(1, 3.3, 1));
        }
        moveLeft() {
            let e = -this.getFamaWeight(1) * this.cell;
            e != this.lastT && (h.PlaySound("chengmove", !0), this.lastT = e);
            let t = new Laya.Vector3(this._chengLeft.transform.position.x, e, this._chengLeft.transform.position.z);
            t.y > 3 ? t = new Laya.Vector3(t.x, 3, t.z) : t.y < -3 && (t = new Laya.Vector3(t.x, -3, t.z));
            let i = new Laya.Vector3(1, 3.3 + e, 1);
            i.y < .3 ? i = new Laya.Vector3(i.x, .3, i.z) : i.y > 6.3 && (i = new Laya.Vector3(i.x, 6.3, i.z)),
                l.TweenToPos(null, this.moveChengTime, this._chengLeft.transform, t.clone(), new Laya.Handler(this, () => {
                    let e = this._chengLeft.transform.position.y;
                    if (0 == e || -2.5 == e || 2.5 == e) {
                        this.checkBoom(1, e, Laya.Handler.create(this, () => {
                            this.checkHasActiveObj(1, e, Laya.Handler.create(this, () => {
                                this.checkActionObjMove(1, e);
                            }));
                        }));
                    } else {

                    }
                }), 0, Laya.Ease.backOut),
                l.TweenToScale(null, this.moveChengTime, this._gunzi_Left.transform, i, null, 0, Laya.Ease.backOut);
        }
        getFamaWeight(e) {
            let t = 0, i = 0, s = -1;
            for (let e = 0, i = this.leftHas.length; e < i; ++e) s = this.leftHas[e], t += this.allWeight[s];
            for (let e = 0, t = this.rightHas.length; e < t; ++e) s = this.rightHas[e], i += this.allWeight[s];
            return 1 == e ? t - i : i - t;
        }
        chengMove() {
            this.moveLeft(), this.moveRight();
        }
        moveRight() {
            let e = -this.getFamaWeight(2) * this.cell, t = new Laya.Vector3(this._chengRight.transform.position.x, e, this._chengRight.transform.position.z);
            t.y > 3 ? t = new Laya.Vector3(t.x, 3, t.z) : t.y < -3 && (t = new Laya.Vector3(t.x, -3, t.z));
            let i = new Laya.Vector3(1, 3.3 + e, 1);
            i.y < .3 ? i = new Laya.Vector3(i.x, .3, i.z) : i.y > 6.3 && (i = new Laya.Vector3(i.x, 6.3, i.z));
            l.TweenToPos(null, this.moveChengTime, this._chengRight.transform, t.clone(), new Laya.Handler(this, () => {
                let e = this._chengRight.transform.position.y;
                if (0 == e || -2.5 == e || 2.5 == e) {
                    this.checkBoom(2, e, Laya.Handler.create(this, () => {
                        this.checkHasActiveObj(2, e, Laya.Handler.create(this, () => {
                            this.checkActionObjMove(2, e);
                        }));
                    }));
                } else {

                }
            }), 0, Laya.Ease.backOut),
                l.TweenToScale(null, this.moveChengTime, this._gunzi_Right.transform, i, null, 0, Laya.Ease.backOut);
        }
        checkBoom(e, t, i) {
            if (this.isLeftBoom < 0 && 1 == e) i.run(); else if (this.isRightBoom < 0 && 2 == e) i.run(); else if (this.isRightBoom >= 0 && 2 == e) {
                let s = this.getActionObjs(e, 2, t);
                s.length > 0 && this._allStaicObjs[this.isRightBoom].active(null, Laya.Handler.create(this, () => {
                    for (let e = s.length - 1; e >= 0; --e) this._allActionObjs[s[e]].beHurt(this._allStaicObjs[this.isRightBoom].attack);
                    this._allStaicObjs[this.isRightBoom].onDisable(), this._allStaicObjs[this.isRightBoom] = null,
                        this.isRightBoom = -1, i.run();
                }));
            } else if (this.isLeftBoom >= 0 && 1 == e) {
                let s = this.getActionObjs(e, 2, t);
                s.length > 0 && this._allStaicObjs[this.isLeftBoom].active(null, Laya.Handler.create(this, () => {
                    for (let e = s.length - 1; e >= 0; --e) this._allActionObjs[s[e]].beHurt(this._allStaicObjs[this.isLeftBoom].attack);
                    this._allStaicObjs[this.isLeftBoom].onDisable(), this._allStaicObjs[this.isLeftBoom] = null,
                        this.isLeftBoom = -1, i.run();
                }));
            }
        }
        initFamas(e) {
            if (null != e && (this.allFama = [], this.allFamaSrcPos = [], this.allFamaAction = [],
                this.allWeight = [], e.Weight)) {
                let t = e.Weight.split(",");
                for (let e = 0, i = t.length; e < i; ++e) {
                    let i = Number(t[e].replace("F", ""));
                    this.allFama.push(this._addFama(i, this.isOdd)), this.allFamaSrcPos.push(this.allFama[e].transform.position.clone()),
                        this.allWeight.push(i), this.allFamaAction.push(!1);
                }
            }
        }
        genFama(e, t) {
            let i = Number(t.replace("F", "")), s = this._addFama(i, this.isOdd);
            this.allFama.push(s), this.allFamaSrcPos.push(s.transform.position.clone()), this.allWeight.push(i),
                this.allFamaAction.push(!1), s.transform.setWorldLossyScale(new Laya.Vector3(O.cellScale, O.cellScale, O.cellScale));
            let a, n = null, o = this.allFama.length - 1, r = this.leftHas.length * O.cellH + O.cellH / 2;
            9 == e ? (n = this.getLeftCheng(), this.leftHas.push(o), a = new Laya.Vector3(this.getChengFama(1).transform.position.x, this.getChengFama(1).transform.position.y + r, this.getChengFama(1).transform.position.z)) : (r = this.rightHas.length * O.cellH + O.cellH / 2,
                n = this.getRightCheng(), this.rightHas.push(o), a = new Laya.Vector3(this.getChengFama(2).transform.position.x, this.getChengFama(2).transform.position.y + r, this.getChengFama(2).transform.position.z)),
                n.addChild(s), s.transform.position = a;
        }
        _addFama(e, t) {
            let i;
            return i = t ? this.famaRoot.getChildByName("OddNum").getChildByName("fama" + this._countIdx).transform.position.clone() : this.famaRoot.getChildByName("EvenNum").getChildByName("fama" + this._countIdx).transform.position.clone(),
                ++this._countIdx, p.getOrCreateObj("fama1_" + e, this._levelRoot, i);
        }
        clearPoints() {
            for (let e = 0, t = this.PointsRoot.numChildren; e < t; ++e) this.PointsRoot.getChildAt(e).removeChildren();
        }
        update(e) {
            if (ae.instance.gameState == a.Gaming && !this.isPause) for (let e = 0, t = this._allActionObjs.length; e < t; ++e);
        }
        checkActionActive(t, i, s, a, n) {
            if (e.Log("---------  检查 人形动作"), a.hp <= 0 && n.runWith(null), 1 == t) {
                let o = this.getActionObjs(t, i, s);
                if (e.Log("左------------  idxs.len:" + o.length), o.length > 0) for (let e = o.length - 1; e >= 0; --e) a.isMainRole() && this._allActionObjs[o[e]].attack > 0 && a.toEndCamera(),
                    this._allActionObjs[o[e]].isMainRole() && a.attack > 0 && this._allActionObjs[o[e]].toEndCamera(),
                    a != this._allActionObjs[o[e]] ? a.attack + a.hp > this._allActionObjs[o[e]].attack + this._allActionObjs[o[e]].hp ? a.active(Laya.Handler.create(this, () => {
                        this._allActionObjs[o[e]].beHurt(a.attack), Laya.timer.once(1e3, this, () => {
                            n.runWith(null);
                        });
                    })) : this._allActionObjs[o[e]].active(Laya.Handler.create(this, () => {
                        a.beHurt(this._allActionObjs[o[e]].attack), Laya.timer.once(1e3, this, () => {
                            n.runWith(null);
                        });
                    })) : 1 == o.length && n.runWith(null); else n.runWith(null);
            } else {
                let o = this.getActionObjs(t, i, s);
                if (e.Log("右------------  idxs.len:" + o.length), o.length > 0) for (let e = o.length - 1; e >= 0; --e) a.isMainRole() && this._allActionObjs[o[e]].attack > 0 && a.toEndCamera(),
                    this._allActionObjs[o[e]].isMainRole() && a.attack > 0 && this._allActionObjs[o[e]].toEndCamera(),
                    a != this._allActionObjs[o[e]] ? a.attack + a.hp > this._allActionObjs[o[e]].attack + this._allActionObjs[o[e]].hp ? a.active(Laya.Handler.create(this, () => {
                        this._allActionObjs[o[e]].beHurt(a.attack), Laya.timer.once(1e3, this, () => {
                            n.runWith(null);
                        });
                    })) : this._allActionObjs[o[e]].active(Laya.Handler.create(this, () => {
                        a.beHurt(this._allActionObjs[o[e]].attack), Laya.timer.once(1e3, this, () => {
                            n.runWith(null);
                        });
                    })) : 1 == o.length && n.runWith(null); else n.runWith(null);
            }
        }
        checkActive(t, i, s, a, n) {
            if (1 == t) {
                let o = this.getStaticObjs(t, i, s);
                if (e.Log("----   1-   idxs.length:" + o.length), o.length > 0) for (let e = o.length - 1; e >= 0; --e) a.isMainRole() && 1 == this._allStaicObjs[o[e]].type && a.toEndCamera(),
                    "trap_5" == this._allStaicObjs[o[e]].data.model && o.length > 1 || this._allStaicObjs[o[e]].active(a, Laya.Handler.create(this, r => {
                        this._allStaicObjs[o[e]] && (1 == this._allStaicObjs[o[e]].type ? (null != a && a.beHurt(this._allStaicObjs[o[e]].attack),
                            this._allStaicObjs[o[e]].onDisable(), this._allStaicObjs[o[e]] = null) : 2 == this._allStaicObjs[o[e]].type && "role_boy" == a.gameObject.name && (this._allStaicObjs[o[e]] = null,
                                this.openLock())), e == o.length - 1 && this.checkActionActive(t, i, s, a, n);
                    })); else this.checkActionActive(t, i, s, a, n);
            } else {
                let o = this.getStaticObjs(t, i, s);
                if (o.length > 0) for (let r = o.length - 1; r >= 0; --r) a.isMainRole() && 1 == this._allStaicObjs[o[r]].type && a.toEndCamera(),
                    "trap_7" == this._allStaicObjs[o[r]].data.model && o.length > 1 || this._allStaicObjs[o[r]].active(a, Laya.Handler.create(this, h => {
                        this._allStaicObjs[o[r]] && (1 == this._allStaicObjs[o[r]].type ? (null != a && a.beHurt(this._allStaicObjs[o[r]].attack),
                            this._allStaicObjs[o[r]].onDisable(), this._allStaicObjs[o[r]] = null) : 2 == this._allStaicObjs[o[r]].type && "role_boy" == a.gameObject.name && (e.Log("开锁了"),
                                this._allStaicObjs[o[r]] = null, this.openLock())), r == o.length - 1 && this.checkActionActive(t, i, s, a, n);
                    })); else this.checkActionActive(t, i, s, a, n);
            }
        }
        getActionObjs(e, t, i) {
            let s = [];
            for (let t = 0, a = this._allActionObjs.length; t < a; ++t) 1 == e ? this._allActionObjs[t] && this._allActionObjs[t].isLeft && this._allActionObjs[t].triggerY == i && s.push(t) : this._allActionObjs[t] && 0 == this._allActionObjs[t].isLeft && this._allActionObjs[t].triggerY == i && s.push(t);
            return s;
        }
        getStaticObjs(e, t, i) {
            let s = [];
            for (let a = 0, n = this._allStaicObjs.length; a < n; ++a) 1 == e ? this._allStaicObjs[a] && this._allStaicObjs[a].isLeft && this._allStaicObjs[a].range >= t && this._allStaicObjs[a].triggerY == i && s.push(a) : this._allStaicObjs[a] && 0 == this._allStaicObjs[a].isLeft && this._allStaicObjs[a].range >= t && this._allStaicObjs[a].triggerY == i && s.push(a);
            return s;
        }
        openLock() {
            let e = null, t = -1;
            for (let i = 0, s = this._allStaicObjs.length; i < s; ++i) if (null != this._allStaicObjs[i] && 4 == this._allStaicObjs[i].type) {
                e = this._allStaicObjs[i], t = i;
                break;
            }
            null != e && e.specialOpen(Laya.Handler.create(this, () => {
                e.onDisable(), this._allStaicObjs[t] = null, this.goToDoor();
            }));
        }
        checkAutoMoveGirl(e) {
            if ("role_girl" != e.gameObject.name) return !1;
            if (0 == e.movetype) return !1;
            let t = null;
            for (let e = 0, i = this._allStaicObjs.length; e < i; ++e) if (null != this._allStaicObjs[e] && 4 == this._allStaicObjs[e].type) {
                t = this._allStaicObjs[e];
                break;
            }
            if (null != t) return !1;
            let i = this._chengRight.transform.position.y;
            for (let e = 0, t = this._allStaicObjs.length; e < t; ++e) if (this._allStaicObjs[e] && this._allStaicObjs[e].isDoor() && this._allStaicObjs[e].triggerY == i) return !0;
            return !1;
        }
        checkAutoMoveBoy(t) {
            if (e.Log("-----checkAutoMoveBoy--"), "role_boy" != t.gameObject.name) return !1;
            if (0 == t.movetype) return !1;
            let i = this._chengLeft.transform.position.y, s = this.getStaticObjs(1, 1, i);
            return e.Log("----------checkAutoMoveBoy idxs.length:" + s.length), !(s.length > 1) && !(!this._allStaicObjs[s[0]] || !this._allStaicObjs[s[0]].isPlus());
        }
        moveBoy() {
            let t = this._chengLeft.transform.position.y;
            if (0 != t && -2.5 != t && 2.5 != t) return;
            let i = !0;
            null != this.leftObj ? this.boy == this.leftObj ? this.boy.checkMove(this._chengLeft.transform.position.y, Laya.Handler.create(this, () => {
                e.Log("向板上移动"), this.checkActive(1, 1, this.boy.triggerY, this.boy, Laya.Handler.create(this, () => {

                }));
            })) : i = !1 : this._chengLeft.transform.position.y == this.boy.triggerY ? this.boy.checkMove(this._chengLeft.transform.position.y,
                Laya.Handler.create(this, () => {
                    e.Log("向称上移动");

                })) : (i = !1), 0 == i && h.VibrateLong();
        }
        get girl() {
            if (null == this._girl) for (let e = 0, t = this._allActionObjs.length; e < t; ++e) if (null != this._allActionObjs[e] && "role_girl" == this._allActionObjs[e].gameObject.name) {
                this._girl = this._allActionObjs[e];
                break;
            }
            return this._girl;
        }
        get boy() {
            if (null == this._boy) for (let e = 0, t = this._allActionObjs.length; e < t; ++e) if (null != this._allActionObjs[e] && "role_boy" == this._allActionObjs[e].gameObject.name) {
                this._boy = this._allActionObjs[e];
                break;
            }
            return this._boy;
        }
        moveGirl() {
            let t = this._chengRight.transform.position.y;
            if (0 != t && -2.5 != t && 2.5 != t) return;
            let i = !0;
            null != this.rightObj ? this.girl == this.rightObj ? this.girl.checkMove(this._chengRight.transform.position.y, Laya.Handler.create(this, () => {
                e.Log("向板上移动"), this.checkActive(2, 1, this.girl.triggerY, this.girl, Laya.Handler.create(this, () => {
                    this.goToDoor();

                }));
            })) : i = !1 : this._chengRight.transform.position.y == this.girl.triggerY ? this.girl.checkMove(this._chengRight.transform.position.y, Laya.Handler.create(this, () => {
                if (te.instance.ui[n.GamingView]) {
                    te.instance.ui[n.GamingView].checkNewbeeStep2();
                }

            })) : (i = !1), 0 == i && h.VibrateLong();
        }
        goToDoor() {
            let t = null;
            for (let e = 0, i = this._allStaicObjs.length; e < i; ++e) if (null != this._allStaicObjs[e] && 4 == this._allStaicObjs[e].type) {
                t = this._allStaicObjs[e];
                break;
            }
            if (null != t) return;
            let i = null;
            for (let e = 0, t = this._allStaicObjs.length; e < t; ++e) if (null != this._allStaicObjs[e] && 3 == this._allStaicObjs[e].type) {
                i = this._allStaicObjs[e];
                break;
            }
            null != this.girl && null != i && (e.Log("  triggerY:" + this.girl.triggerY + "  door.triggerY:" + i.triggerY),
                (this.girl.triggerY == i.triggerY || -100 == this.girl.triggerY && this.girl == this.rightObj && this._chengRight.transform.position.y == i.triggerY) && (te.instance.ui[n.GamingView] && te.instance.ui[n.GamingView].setJumpbtn(!1),
                    this.boy && Laya.timer.once(1e3, this, () => {
                        this.boy.dance();
                    }), this.girl.gotoDoor()));
        }
        onMouseDown(t) {
            // if (!window["canTouchMove"]()) return;
            if (t.touches && t.touches.length > 1) return;
            if (ae.instance.gameState != a.Gaming) return;
            if (0 == this.canOp) return;
            this.point.x = Laya.MouseManager.instance.mouseX, this.point.y = Laya.MouseManager.instance.mouseY,
                this._ray = A.instance.viewportPointToRay(this.point);
            let i = [];
            this._scene.physicsSimulation.rayCastAll(this._ray, i);
            let s = this.getNear(i).point;
            for (let t = 0, a = i.length; t < a; ++t) {
                if ("role_boy" == i[t].collider.owner.name) {
                    e.Log("点击了小孩"), this.moveBoy(), h.VibrateShort();
                    break;
                }
                if ("role_girl" == i[t].collider.owner.name) {
                    e.Log("点击了小孩"), this.moveGirl(), h.VibrateShort();
                    break;
                }
                {
                    let e = this.checkSelectFama(i[t].collider.owner);
                    if (e > -1) {
                        this.handleChengFamaHas(e, s), h.VibrateShort(), this.selFama = e, h.PlaySound("btn", !0);
                        break;
                    }
                }
            }
        }
        getNear(e) {
            for (let t = 0, i = e.length; t < i; ++t) if ("nearPlane" == e[t].collider.owner.name) return e[t];
            return null;
        }
        checkSelectFama(e) {
            for (let t = 0, i = this.allFama.length; t < i; ++t) if (!this.allFamaAction[t] && this.allFama[t] == e) return t;
            return -1;
        }
        onMouseUp() {
            if (ae.instance.gameState == a.Gaming && !this.isMoveCheng && this.selFama > -1) {
                this.point.x = Laya.MouseManager.instance.mouseX, this.point.y = Laya.MouseManager.instance.mouseY,
                    this._ray = A.instance.viewportPointToRay(this.point);
                let e = [];
                this._scene.physicsSimulation.rayCastAll(this._ray, e);
                let t = !0;
                for (let i = 0, s = e.length; i < s; ++i) if ("farPlane" == e[i].collider.owner.name) {
                    t = !1, this.addFamaObj(this.allFama[this.selFama], e[i].point.x, this.selFama);
                    break;
                }
                t && (l.TweenToPos(null, .5, this.allFama[this.selFama].transform, this.allFamaSrcPos[this.selFama].clone(), null),
                    this.chengMove()), this.selFama = -1;
            }
        }
        onMouseMove(e) {
            if (ae.instance.gameState == a.Gaming && this.selFama > -1) {
                this.point.x = Laya.MouseManager.instance.mouseX, this.point.y = Laya.MouseManager.instance.mouseY,
                    this._ray = A.instance.viewportPointToRay(this.point);
                let e = [];
                this._scene.physicsSimulation.rayCastAll(this._ray, e);
                for (let t = 0, i = e.length; t < i; ++t) if ("nearPlane" == e[t].collider.owner.name) {
                    this.allFama[this.selFama].transform.position = e[t].point;
                    break;
                }
            }
        }
        addFamaObj(e, t, i) {
            let s, a;
            if (e.transform.setWorldLossyScale(new Laya.Vector3(O.cellScale, O.cellScale, O.cellScale)), t > 0) {
                let t = this.leftHas.length * O.cellH + O.cellH / 2, n = this.getChengFama(1).transform;
                s = new Laya.Vector3(n.position.x, n.position.y + t + 2, n.position.z), e.transform.position = s,
                    a = new Laya.Vector3(n.position.x, n.position.y + t, n.position.z), this.allFamaAction[i] = !0,
                    l.TweenToPos(null, .5, e.transform, a, Laya.Handler.create(this, () => {
                        this.allFamaAction[i] = !1, this._chengLeft.addChild(e), e.transform.position = a,
                            this.leftHas.push(i), this.chengMove();
                    }));
            } else {
                let t = this.rightHas.length * O.cellH + O.cellH / 2, n = this.getChengFama(2).transform;
                s = new Laya.Vector3(n.position.x, n.position.y + t + 2, n.position.z), e.transform.position = s,
                    a = new Laya.Vector3(n.position.x, n.position.y + t, n.position.z), this.allFamaAction[i] = !0,
                    l.TweenToPos(null, .5, e.transform, a, Laya.Handler.create(this, () => {
                        this.allFamaAction[i] = !1, this._chengRight.addChild(e), e.transform.position = a,
                            this.rightHas.push(i), this.chengMove();
                    }));
            }
        }
        handleChengFamaHas(e, t) {
            for (let i = 0, s = this.leftHas.length; i < s; ++i) if (this.leftHas[i] == e) return this.moveAfterChengObj(i, 1),
                this.leftHas.splice(i, 1), this._levelRoot.addChild(this.allFama[e]), this.allFama[e].transform.position = t.clone(),
                void this.allFama[e].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
            for (let i = 0, s = this.rightHas.length; i < s; ++i) if (this.rightHas[i] == e) return this.moveAfterChengObj(i, 2),
                this.rightHas.splice(i, 1), this._levelRoot.addChild(this.allFama[e]), this.allFama[e].transform.position = t.clone(),
                void this.allFama[e].transform.setWorldLossyScale(new Laya.Vector3(1, 1, 1));
        }
        moveAfterChengObj(e, t) {
            if (1 == t) for (let t = this.leftHas.length - 1; t > e; --t) {
                let e = this.leftHas[t], i = this.leftHas[t - 1], s = this.allFama[i].transform.localPosition.clone();
                this.allFama[e].transform.localPosition = s;
            } else for (let t = this.rightHas.length - 1; t > e; --t) {
                let e = this.rightHas[t], i = this.rightHas[t - 1], s = this.allFama[i].transform.localPosition.clone();
                this.allFama[e].transform.localPosition = s;
            }
        }
    }
    O.instance = new O(), O.cellH = .7, O.cellScale = .8;
    class B extends c.Views.GamingViewUI {
        constructor() {
            super(), this._showAdPanel = !1, this._isLight = !1, Laya.stage.addChild(this);
        }
        setJumpbtn(e) {
            this.spt_jump.visible = e;
        }
        checkNewbeeStep2() {
            let e = ae.instance.hasNewbee();
            if (console.log("1111:" + e), 0 == e) {
                console.log("11112:" + e), this.img_newbee.visible = !0;
                for (let e = 0, t = 3; e < t; ++e) {
                    this.img_newbee.getChildByName("step" + (e + 1)).visible = !1;
                }
                this.startStep2Ani();
            } else this.img_newbee.visible = !1;
        }
        showPopMenu() { }
        showNativeIcon(e) {

        }
        init(e) {
            if ("qg" == i.platfomStr && "o" == i.platfomStr2) {
                if (0 == Laya.Browser.onMiniGame) {
                    let e = {
                        adList: [{
                            adId: "",
                            clickBtnTxt: "",
                            creativeType: 6,
                            desc: "",
                            iconUrlList: [""],
                            icon: "",
                            interactionType: 3,
                            logoUrl: "",
                            title: "",
                            imgUrlList: [""]
                        }],
                        code: 0,
                        msg: "ok"
                    };
                    this.showNativeIcon(e);
                }
                L.showNativeAd();
            }
            this.initEvent(), C.hideAll(), O.instance.setFamaVisible(!0), this.lbl_level.value = I.userData.level + 1 + "",
                this.resetItemBtn(), this.TopRight.y = 2 * L.realRightTop, (this.resetBtnSite()),
                this._isLight = !1, this.checkNewbee(), "wx" == i.platfomStr ? (this.Center.visible = !0,
                    I.isDefaultGou && (this.spt_backConver.visible = !0),
                    this.onClickFold()) : (this.img_gamePanel.visible = !1);
        }
        onClickFold() {

        }
        checkNewbee() {
            let e = ae.instance.hasNewbee();
            for (let e = 0, t = 3; e < t; ++e) {
                this.img_newbee.getChildByName("step" + (e + 1)).visible = !1;
            }
            0 == e ? (this.img_newbee.visible = !0, this.startStep1Ani()) : 1 == e ? (this.img_newbee.visible = !0,
                this.startStep3Ani()) : 2 == e ? (this.img_newbee.visible = !0, this.startStep4Ani()) : this.img_newbee.visible = !1;
        }
        startStep1Ani() {
            if (0 == this.img_newbee.visible) return;
            let e = A.instance.worldPointToView(O.instance.girl.transform.position), t = this.img_newbee.getChildByName("step1");
            t.visible = !0;
            let i = t.getChildByName("hand");
            i.pos(e.x + 25, e.y + 25), i.scale(.8, .8), Laya.Tween.to(i, {
                scaleX: .6,
                scaleY: .6
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(i, {
                    scaleX: .8,
                    scaleY: .8
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.startStep1Ani));
            }));
        }
        startStep2Ani() {
            if (0 == this.img_newbee.visible) return;
            let e = A.instance.worldPointToView(O.instance.getFama(0).transform.position), t = this.img_newbee.getChildByName("step2");
            t.visible = !0;
            let i = t.getChildByName("hand");
            i.pos(e.x + 50, e.y + 50);
            let s = A.instance.worldPointToView(O.instance.getLeftCheng().transform.position);
            Laya.Tween.to(i, {
                x: s.x,
                y: s.y
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.startStep2Ani), 1e3);
        }
        startStep3Ani() {
            if (0 == this.img_newbee.visible) return;
            let e = A.instance.worldPointToView(O.instance.getFama(0).transform.position), t = this.img_newbee.getChildByName("step2");
            t.visible = !0;
            let i = t.getChildByName("hand"), s = A.instance.worldPointToView(O.instance.getLeftCheng().transform.position);
            i.pos(s.x, s.y), Laya.Tween.to(i, {
                x: e.x + 50,
                y: e.y + 50
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.startStep3Ani), 1e3);
        }
        startStep4Ani() {
            if (0 == this.img_newbee.visible) return;
            let e = A.instance.worldPointToView(O.instance.girl.transform.position), t = this.img_newbee.getChildByName("step3");
            t.visible = !0;
            let i = t.getChildByName("hand");
            i.pos(e.x + 25, e.y + 25), i.scale(.8, .8), Laya.Tween.to(i, {
                scaleX: .6,
                scaleY: .6
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(i, {
                    scaleX: .8,
                    scaleY: .8
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, this.startStep4Ani));
            }));
            let s = A.instance.worldPointToView(O.instance.boy.transform.position), a = t.getChildByName("hand2");
            a.pos(s.x + 25, s.y + 25), a.scale(.8, .8), Laya.Tween.to(a, {
                scaleX: .6,
                scaleY: .6
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(a, {
                    scaleX: .8,
                    scaleY: .8
                }, 500, Laya.Ease.linearIn, null);
            }));
        }
        resetBtnSite() { }
        resetItemBtn() { }
        initEvent() {
            this.img_newbee.on(Laya.Event.MOUSE_UP, this, () => {
                ae.instance.setState(a.Gaming), this.img_newbee.visible = !1;
            }), this.spt_exit.on(Laya.Event.CLICK, this, () => {
                platform.getInstance().showInterstitial(() => {
                    for (let i = 0; i < window.allTweens.length; i++) {
                        window.allTweens[i].clear()
                    }
                    t.instance.dispatch(o.gameReset), t.instance.dispatch(o.ui_openMain);
                })
            }), this.spt_backConver.on(Laya.Event.CLICK, this, () => {
                t.instance.dispatch(o.ui_openConverge);
            }), this.spt_jump.on(Laya.Event.CLICK, this, () => {
                L.showVideo(this, () => {
                    for (let i = 0; i < window.allTweens.length; i++) {
                        window.allTweens[i].clear()
                    }
                    I.userData.level += 1, t.instance.dispatch(o.gameReset), t.instance.dispatch(o.ui_openMain);

                }, () => { });
            });
        }
        onEnable() { }
        onDisable() {
            this.banner && this.banner.destroy(), "qq" == i.platfomStr && 1 == I.isGameBlock && L.hideBlockAd();
        }
        onUpdate(e) { }
        refresh() { }
    }
    class N extends c.Views.LoadingViewUI {
        setProcess(e) {
            e >= 1 && (e = 1), this.spt_process.x = 59 + 509 * e;
        }
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(e) { }
        onEnable() { }
        onDisable() { }
    }
    class R extends c.Views.MainViewUI {
        constructor() {
            super(), this._showAdPanel = !1, this.pTime = 0, this.buttons = [], Laya.stage.stage.addChild(this);
        }
        setCoinPro(e) { }
        showNativeIcon(e) {
        }
        init(e) {
            if ("qg" == i.platfomStr && "o" == i.platfomStr2) {
                if (0 == Laya.Browser.onMiniGame) {
                    let e = {
                        adList: [{
                            adId: "",
                            clickBtnTxt: "",
                            creativeType: 6,
                            desc: "",
                            iconUrlList: [""],
                            icon: "",
                            interactionType: 3,
                            logoUrl: "",
                            title: "",
                            imgUrlList: [""]
                        }],
                        code: 0,
                        msg: "ok"
                    };
                    this.showNativeIcon(e);
                }
                L.showNativeAd();
            }
            if (this.initEvent(), ae.instance.setState(a.Lobby), O.instance.setFamaVisible(!1),
                C.hideAll(), this.lbl_level.value = I.userData.level + 1 + "", "qg" != i.platfomStr && (r.shareReward = l.isOtherDay("shareReward")),
                this.resetSettings(), this.resetItemBtn(), "tt" != i.platfomStr && this.checkAuthorization(),
                "qq" == i.platfomStr && I.isMainBoxAd && L.showAppBox(), L.hideBlockAd(), "qq" == i.platfomStr && L.showBlockAd(1), this.lbl_coin.text = I.userData.coin + "",
                this.lbl_hp.text = I.userData.hp + "", "qg" == i.platfomStr) { }
            this.lab_addHpTimer.visible = I.userData.hp < 10;
            if (I.userData.hp < 10) {
                this.refreshAddHpTimer();
                Laya.timer.loop(1000, this, this.refreshAddHpTimer);
            }

        }
        refresh() {
            this.lbl_coin.text = I.userData.coin + "", this.lbl_hp.text = I.userData.hp + "";
        }
        refreshAddHpTimer() {
            ae.instance.addHPTimer();
            this.lab_addHpTimer.text = ae.instance.numtoHSM(300000 - (Date.now() - I.userData.costHpTime));
            this.lab_addHpTimer.visible = I.userData.hp < 10;
            if (I.userData.hp >= 10) {
                Laya.timer.clear(this, this.refreshAddHpTimer);
            }
        }

        resetItemBtn() { }
        resetSettings() {
            this.img_sound.skin = window.WebAudioEngine.pause ? "main1/p_i_music_off.png" : "main1/p_i_music.png";
        }
        initEvent() {
            Laya.stage.on("refreshUserData", this, this.refresh);
            l.clickBtn(this.img_start, this, this.onClickStart), this.img_cover1.on(Laya.Event.MOUSE_UP, this, () => { }),
                this.img_cover2.on(Laya.Event.MOUSE_UP, this, () => { }), this.spt_hpAdd.on(Laya.Event.CLICK, this, () => {
                    t.instance.dispatch(o.ui_openReward, {
                        type: 2,
                        count: 3
                    });
                }), this.spt_coinAdd.on(Laya.Event.CLICK, this, () => {
                    t.instance.dispatch(o.ui_openReward, {
                        type: 1,
                        count: 200
                    });
                }), l.clickBtn(this.img_store, this, () => {
                    platform.getInstance().showInterstitial(() => {
                        this.checkAuthorization(), t.instance.dispatch(o.ui_openSkin);
                    })
                }), l.clickBtn(this.img_signIn, this, () => {
                    this.checkAuthorization(), t.instance.dispatch(o.ui_openSignin);
                }), this.img_sound.on(Laya.Event.MOUSE_UP, this, () => {
                    window.WebAudioEngine.pause = !window.WebAudioEngine.pause, this.resetSettings();
                    Laya.LocalStorage.setItem("Save-The-Beauty-musicState", JSON.stringify(window.WebAudioEngine.pause));
                });
        }
        clickFolder() {
            this._showAdPanel = !this._showAdPanel;
        }
        onClickShare() {
            this.checkAuthorization(), L.share(this, () => {
                S.instance.StatisticsShare(1), r.shareReward && (I.userData.coin += 3, l.saveOtherDay("shareReward"),
                    r.shareReward = !1, I.saveUserData());
            }, () => { });
        }
        onClickGetCoin() {
            t.instance.dispatch(o.gameStart);
        }
        refreshCoin(e) { }
        resetSoundImg() {
        }
        onEnable() { }
        onDisable() {
            Laya.stage.off("refreshUserData", this, this.refresh);
            this.banner && this.banner.destroy(), "qq" == i.platfomStr && L.hideBlockAd();
        }
        onClickLight(e) {
            e.touches && e.touches.length > 1 || (this.checkAuthorization(), I.userData.item3 < 1 ? L.showVideo(this, () => {
                I.userData.item3 += ae.instance.g_ItemCount, this.resetItemBtn();
            }, () => { }) : L.showMessage("It can only be used in the game"));
        }
        onClickRefresh(e) {
            e.touches && e.touches.length > 1 || (this.checkAuthorization(), I.userData.item2 < 1 ? L.showVideo(this, () => {
                I.userData.item2 += ae.instance.g_ItemCount, this.resetItemBtn();
            }, () => { }) : L.showMessage("It can only be used in the game"));
        }
        onClickTime(e) {
            e.touches && e.touches.length > 1 || (this.checkAuthorization(), I.userData.item1 < 1 ? L.showVideo(this, () => {
                I.userData.item1 += ae.instance.g_ItemCount, this.resetItemBtn();
            }, () => { }) : L.showMessage("It can only be used in the game"));
        }
        onClickStart() {
            this.checkAuthorization(), I.userData.hp <= 0 ? t.instance.dispatch(o.ui_openReward, {
                type: 2,
                count: 5
            }) : platform.getInstance().showInterstitial(() => {
                (I.userData.hp -= 1, ae.instance.addHPTimer(),
                    I.saveUserData(), I.isStartVedio ? L.showVideo(this, () => {
                        this._nextStep();
                    }, () => {
                        this._nextStep();
                    }) : this._nextStep());
            })
        }
        _nextStep() {
            S.instance.StatisticsStartGame(), L.startVideo(),
                //  "wx" == i.platfomStr && t.instance.dispatch(o.ui_openConverge3),
                // "qg" == i.platfomStr && "o" == i.platfomStr2 ? t.instance.dispatch(o.ui_openTrySkin) :
                //  "qq" == i.platfomStr && ae.instance.hasTrySkin() ? t.instance.dispatch(o.ui_openTrySkin) :
                t.instance.dispatch(o.gameStart);
        }
        checkAuthorization() {
            if ("qg" == i.platfomStr || "qq" == i.platfomStr || "wx" == i.platfomStr) return e.Log("--------------  checkAuthorization()"),
                void (Laya.Browser.onMiniGame && 0 == I.isAuthorization && (I.isAuthorization = !0,
                    e.Log("--------------  checkAuthorization()2"), i.login({
                        success: function (t) {
                            e.Log("--------------  success:" + JSON.stringify(t)), t && t.data && t.data.token && S.instance.getOpenId(t.data.token, e => {
                                S.instance.StatisticsLogin();
                            }), t && t.code && S.instance.getOpenId(t.code, e => {
                                S.instance.StatisticsLogin();
                            });
                        },
                        fail: function (t) {
                            e.Log("--------------  fail:" + JSON.stringify(t));
                        }
                    })));
            "qg" != i.platfomStr && Laya.Browser.onMiniGame && 0 == I.isAuthorization && (I.isAuthorization = !0,
                i.getUserInfo({
                    success(e) {
                        console.log(`getUserInfo 调用成功 ${e.userInfo}`), I.userData.headImg = JSON.parse(e.rawData).avatarUrl,
                            I.userData.headImg.indexOf("https") < 0 && (I.userData.headImg = I.userData.headImg.replace("http", "https")),
                            I.userData.nickName = e.userInfo.nickName;
                    },
                    fail(e) {
                        console.log("getUserInfo 调用失败"), i.login({
                            success(e) {
                                console.log(`login调用成功${e.code} ${e.anonymousCode}`), i.getUserInfo({
                                    success(e) {
                                        console.log(`getUserInfo 调用成功 ${e.userInfo}`), I.userData.headImg = JSON.parse(e.rawData).avatarUrl,
                                            I.userData.headImg.indexOf("https") < 0 && (I.userData.headImg = I.userData.headImg.replace("http", "https")),
                                            I.userData.nickName = e.userInfo.nickName;
                                    }
                                });
                            },
                            fail(e) {
                                console.log("login调用失败");
                            }
                        });
                    }
                }));
        }
        initAuthor() {
            this.buttons.length > 0 || Laya.Browser.onMiniGame && wx.getSetting({
                fail: t => {
                    l.isOtherDay("login") && this.initBox(0, 0, 750, 1334, this, null), e.Log(" res:" + JSON.stringify(t));
                },
                success: t => {
                    e.Log(" res2:" + JSON.stringify(t)), null == t.authSetting || 0 == t.authSetting["scope.userInfo"] || null == t.authSetting["scope.userInfo"] ? this.initBox(0, 0, 750, 1334, this, null) : this.loadWxLogin();
                }
            });
        }
        cleanButtons() {
            for (var e = 0, t = this.buttons.length; e < t; ++e) this.buttons[e].destroy();
            this.buttons = [];
        }
        initBox(t, i, s, a, n, o) {
            let r = Laya.Browser.width / Laya.Browser.pixelRatio / Laya.stage.width, h = Laya.Browser.height / Laya.Browser.pixelRatio / Laya.stage.height, p = wx.createUserInfoButton({
                type: "text",
                text: "",
                style: {
                    left: t * r,
                    top: i * h,
                    width: s * r,
                    height: a * h,
                    borderRadius: 120
                }
            });
            e.Log("w:" + s + "  h:" + a + " x:" + t + " y:" + i), this.buttons.push(p), p.onTap(t => {
                if (l.saveOtherDay("login"), t && t.userInfo) {
                    if (this.cleanButtons(), Laya.Browser.onMiniGame) {
                        let e = {
                            title: "授权成功！"
                        };
                        wx.showToast(e), this.wxLogin(t), n && o && o.call(n, null), R.isAuthor = !0;
                    }
                } else e.Log("没有授权!"), this.cleanButtons(), n && o && o.call(n, null);
            });
        }
        wxLogin(t) {
            Laya.LocalStorage.setItem("wx_nickName", t.userInfo.nickName), Laya.LocalStorage.setItem("wx_avatarUrl", t.userInfo.avatarUrl),
                Laya.LocalStorage.setItem("wx_gender", t.userInfo.gender), Laya.LocalStorage.setItem("wx_province", t.userInfo.province),
                Laya.LocalStorage.setItem("wx_city", t.userInfo.city), Laya.LocalStorage.setItem("wx_country", t.userInfo.country),
                I.userData.headImg = t.userInfo.avatarUrl, I.userData.nickName = t.userInfo.nickName,
                e.Log("res:" + JSON.stringify(t)), L.login(this, () => {
                    S.instance.StatisticsAuthor();
                });
        }
        loadWxLogin() {
            let e = localStorage.getItem("wx_nickName");
            null != e && e.length > 0 && (I.userData.nickName = e);
            let t = localStorage.getItem("wx_avatarUrl");
            null != t && t.length > 0 && (I.userData.headImg = t), L.login();
        }
    }
    R.isAuthor = !1;
    class T extends c.Views.RankViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(t) {
            this.initEvent(), this.cfg = s.instance.configs[u.mall], e.Log("  levelD:" + JSON.stringify(t)),
                1 == t.isPass && (I.userData.level += 1), I.saveUserData(), this.list_rank.array = this.rankData,
                this.list_rank.renderHandler = new Laya.Handler(this, this.onRender);
        }
        onRender(e, t) {
            if (null == this.rankData) return;
            e.getChildByName("lbl_name").text = this.rankData[t].name, e.getChildByName("lbl_time").text = (l.ToFixed2(this.rankData[t].totalTime) + "").replace(".", "秒");
            let i = this.rankData[t].car;
            e.getChildByName("lbl_carName").text = this.cfg[i].name, e.getChildByName("img_carSkin").skin = "skin/" + this.cfg[i].car + ".png",
                this.rankData[t].uid == I.userData.userId ? e.getChildByName("img_back").skin = "game/phb_di_2.png" : e.getChildByName("img_back").skin = "game/phb_di.png",
                t > 2 ? (e.getChildByName("fc_site").visible = !0, e.getChildByName("fc_site").value = t + 1 + "",
                    e.getChildByName("spt_pos").visible = !1) : (e.getChildByName("fc_site").visible = !1,
                        e.getChildByName("spt_pos").visible = !0, e.getChildByName("spt_pos").skin = "game/phb_no" + (t + 1) + ".png");
        }
        initEvent() {
            this.spt_next.on(Laya.Event.CLICK, this, () => {
                t.instance.dispatch(o.gameReset);
            });
        }
        onEnable() { }
        onDisable() { }
    }
    class D extends c.Views.ResultViewUI {
        constructor() {
            super(), this._showBanner = !1, this._isloaded = !1, Laya.stage.addChild(this);
        }
        showNativeIcon(e) {
            this.showNativeBanner(e);
        }
        showNativeBanner(e) {

        }
        init(t) {
            L.stopVideo(), this.initEvent(t), l.ScaleAni(this.img_scale), e.Log("  =======  data:" + JSON.stringify(t)),
                I.isDefaultGou ? null : null, t > 0 ? (this.isPass = !0,
                    I.userData.level += 1, this.img_win.visible = !0, this.img_lose.visible = !1, this.coin = 50,
                    this.lbl_getCoin.text = "X50") : (this.isPass = !1, this.img_win.visible = !1, this.img_lose.visible = !0,
                        this.coin = 20, this.lbl_getCoin.text = "X20"),
                // this.setGetCoins(),
                I.saveUserData(),
                "qg" == i.platfomStr && "o" == i.platfomStr2 ? I.hasMarquee ? null : null : null,
                I.isMainBoxAd && (L.hideBlockAd(), L.showAppBox(() => { })), L.hideBlockAd(),
                "qq" == i.platfomStr && (L.showBlockAd(2)), C.hideAll(),
                I.isWudian ? (Laya.timer.once(1600, this, () => {
                    "qg" == i.platfomStr && "o" == i.platfomStr2 ? L.showNativeAd() : null == this.banner ? this.banner = new C(5, null) : this.banner.show(),
                        Laya.timer.once(1e3, this, () => {
                            this._showBanner = !0;
                        });
                })) : ("qg" == i.platfomStr && "o" == i.platfomStr2 ? L.showNativeAd() : this.banner = new C(5, null),
                    I.isDelayDis ? (this.spt_next.visible = !1, Laya.timer.once(2e3, this, () => {
                        this.spt_next.visible = !0;
                    })) : this.spt_next.visible = !0);
            this.refreshUserData();
        }
        setGetCoins() {
            // this.spt_gou.visible ?
            this.lbl_getCoin.text = "X" + 4 * this.coin
            //  : this.lbl_getCoin.text = "X" + this.coin;
        }
        initEvent(e) {
            Laya.stage.on("refreshUserData", this, this.refreshUserData);
            this.img_get.on(Laya.Event.CLICK, this, () => {
                L.showVideo(this, () => {
                    I.userData.coin += 4 * this.coin, L.showMessage("Coin +" + 4 * this.coin), this.nextStep();
                }, () => { });
            }), this.spt_next.on(Laya.Event.CLICK, this, () => {
                platform.getInstance().showInterstitial(() => {
                    I.userData.coin += this.coin, L.showMessage("Coin +" + this.coin), this.nextStep();
                })
            });
        }
        refreshUserData() {
            this.fc_coin.text = I.userData.coin + "";
        }
        nextStep() {
            let e = l.Random_local(0, 101);
            I.userData.level > 0 && I.userData.level % 2 == 0 && "qg" != i.platfomStr ?
                I.userData.keyCount = 3 : I.userData.keyCount = 0,
                I.userData.keyCount >= 3 ? t.instance.dispatch(o.ui_openRewardBox) : I.isGoldenEgg && I
                    .hasStartEgg && I.goldenEggRatio > e ? t.instance.dispatch(o.ui_openGoldenEgg) : this._nextStep();
        }
        _nextStep() {
            // "wx" == i.platfomStr ? t.instance.dispatch(o.ui_openConverge3) : "tt" == i.platfomStr ? t.instance.dispatch(o.ui_openShare, [!0]) :
            //  1 == I.hasConverge ? t.instance.dispatch(o.ui_openConverge) :
            (t.instance.dispatch(o.gameReset),
                t.instance.dispatch(o.ui_openMain));
        }
        onEnable() { }
        onDisable() {
            Laya.stage.off("refreshUserData", this, this.refreshUserData);
            this.banner && this.banner.destroy();
        }
    }
    class E extends c.Views.ReviveViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(e) {
            S.instance.StatisticsDead(1), L.stopVideo(), this.initEvent(), this.banner = new C(3, this.img_gamelist.getComponent(x)),
                this.img_centerAd.getComponent(k).start(I.getAdInfos(1001)), "tt" == i.platfomStr && L.isIOS && (this.img_centerAd.visible = !1),
                "qq" == i.platfomStr && (this.img_centerAd.visible = !1), this.lbl_level.value = I.userData.level + 1 + "",
                I.isDefaultGou ? this.spt_gou.visible = !0 : this.spt_gou.visible = !1, this.resetCoin(),
                l.ScaleAni(this.img_scale), L.showNativeAd(), I.isMainBoxAd && (L.showAppBox(),
                    L.hideBlockAd());
        }
        onEnable() { }
        onDisable() {
            t.instance.offEvent(o.frameLoop, this, this.update);
        }
        initEvent() {
            this.img_next.on(Laya.Event.CLICK, this, () => {
                this.spt_gou.visible ? L.showVideo(this, () => {
                    this.nextStep();
                }, () => { }) : I.isReusltVedio ? L.showVideo(this, () => {
                    this.nextStep();
                }, () => {
                    this.nextStep();
                }) : this.nextStep();
            });
        }
        resetCoin() {
            this.spt_gou.visible ? this.fc_starNum.value = "3" : this.fc_starNum.value = "1";
        }
        nextStep() {
            let e = Number(this.fc_starNum.value);
            I.userData.coin += e, "qg" != i.platfomStr && L.showMessage("Coin +" + e), "tt" == i.platfomStr ?
                t.instance.dispatch(o.ui_openShare, [!1]) :
                (t.instance.dispatch(o.gameReset),
                    t.instance.dispatch(o.ui_openMain));
        }
        update(e) { }
    }
    class G extends c.Views.RewardViewUI {
        constructor() {
            super(), this._showBanner = !1, Laya.stage.addChild(this);
        }
        resetType() {
            0 == this.type ? (this.img_title.skin = "jbbz/jbbz_bt_3.png", this.img_btnText.skin = "jbbz/jbbz_zlyf.png",
                this.img_bigIcon.skin = "jbbz/jbbz_jbd.png", this.img_smallIcon.skin = "sc/sc_jb.png") : 1 == this.type ? (this.img_title.skin = "jbbz/jbbz_bt.png",
                    this.img_btnText.skin = "jbbz/jbbz_lq.png", this.img_bigIcon.skin = "jbbz/jbbz_jbd.png",
                    this.img_smallIcon.skin = "sc/sc_jb.png") : 2 == this.type ? (this.img_title.skin = "jbbz/jbbz_bt_2.png",
                        this.img_btnText.skin = "jbbz/jbbz_lq.png", this.img_bigIcon.skin = "jbbz/jbbz_tld.png",
                        this.img_smallIcon.skin = "zjm/zjm_tl.png") : 3 == this.type && (this.img_title.skin = "jbbz/jbbz_bt_3.png",
                            this.img_btnText.skin = "jbbz/jbbz_zlyf.png", this.img_bigIcon.skin = "jbbz/jbbz_jbd.png",
                            this.img_smallIcon.skin = "sc/sc_jb.png"), this.lbl_count.text = "X" + this.coin;
        }
        init(t) {
            this.initEvent(), l.ScaleAni(this.img_scale), C.hideAll(), e.Log("rewardView:" + JSON.stringify(t)),
                t ? (this.type = t.type, this.coin = t.count) : (this.type = 0, this.coin = 200),
                this.resetType(), e.Log("-----------  isDelayDis:" + I.isWudian), I.isDelayDis ? (this.spt_next.visible = !1,
                    Laya.timer.once(2e3, this, () => {
                        this.spt_next.visible = !0;
                    })) : this.spt_next.visible = !0, I.isWudian ? (Laya.timer.once(1e3, this, () => {
                        this.banner = new C(5, null);
                    }), Laya.timer.once(2e3, this, () => {
                        this._showBanner = !0;
                    })) : (this.banner = new C(5, null));
        }
        initEvent() {
            this.spt_next.on(Laya.Event.CLICK, this, this.onClickNext), this.spt_vedioGet.on(Laya.Event.CLICK, this, this.onClickVedio);
        }
        onClickNext() {
            I.isWudian && 0 == this._showBanner || (0 == this.type && (I.userData.coin += this.coin,
                "qg" != i.platfomStr && L.showMessage("Coin +" + this.coin)), te.instance.closeUI(n.RewardView),
                I.saveUserData());
        }
        onClickVedio() {
            L.showVideo(this, () => {
                3 == this.type ? (I.userData.coin += this.coin, L.showMessage("Coin +" + this.coin),
                    null != te.instance.ui[n.MainView] && te.instance.ui[n.MainView].refresh()) : 2 == this.type ? (I.userData.hp += this.coin,
                        // I.userData.hp > 30 && (I.userData.hp = 30), 
                        L.showMessage("Energy +" + this.coin),
                        null != te.instance.ui[n.MainView] && te.instance.ui[n.MainView].refresh()) : (I.userData.coin += this.coin,
                            L.showMessage("Coin +" + this.coin), null != te.instance.ui[n.MainView] && te.instance.ui[n.MainView].refresh()),
                    te.instance.closeUI(n.RewardView), I.saveUserData();
            }, () => {
                L.showMessage("未观看完视频");
            });
        }
        onEnable() { }
        onDisable() {
            this.banner && this.banner.destroy();
        }
    }
    class P {
        constructor() {
            this.getCoins = 0, this.isLoacalPlayer = !1, this.skinName = "Skate_01", this.motions = ["girl_daiji", "girl_hua", "girl_zhuaban", "girl_shengli", "girl_shibai"],
                this.aniIdx = -1, this.reviveCount = 0, this.isMouseDown = !1, this.times = 0, this.lastIdx = -1,
                this._isOnBlock = !1, this._lineSprite = null;
        }
        init(e) {
            this.gameObject = e, this.transform = this.gameObject.transform, this.mesh = this.gameObject.getChildByName("Mesh");
        }
        playAnimation(e) {
            this.aniIdx != e && (this.animator.crossFade(this.motions[e], .2), this.aniIdx = e);
        }
        reset() { }
        revive() {
            e.Log("玩家复活  加个无敌爽"), this.gameObject.active = !0, this.reviveCount = 50;
        }
        changeSkin(e) { }
        knockBack() { }
        onMouseUp() {
            this.isMouseDown = !1;
        }
        onMouseDown() {
            // ae.instance.gameState == a.Gaming && (this.isMouseDown = !0, this.startMouseX = Laya.stage.mouseX,
            //     this.times = 0);
        }
        onKeyDown(t) {
            e.Log(t.keyCode), 81 == t.keyCode ? Laya.timer.scale = .1 : 87 == t.keyCode && (Laya.timer.scale = 1);
        }
        setUseSkin(e) { }
        offEvent() {
            this.isMouseDown = !1, Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown),
                Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp), Laya.stage.off(Laya.Event.KEY_DOWN, this, this.onKeyDown);
        }
        update(e) { }
        uiAddCoin(e, t) {
            h.PlaySound("getcoin", !0), null != e && e.refresh();
        }
    }
    P.instance = new P(), function (e) {
        e[e.none = 0] = "none", e[e.store = 1] = "store", e[e.try = 2] = "try", e[e.reward = 3] = "reward";
    }(_ || (_ = {}));
    class U {
        constructor() {
            this.loaded = !1, this.showIdx = 0, this.sceneType = _.none;
        }
        static get instance() {
            return null == U._instance && (U._instance = new U()), U._instance;
        }
        init() {
            this.showIdx = I.userData.useSkin, Laya.Scene3D.load(U.sceneName, Laya.Handler.create(ae.instance, e => {
                this.loaded = !0, this.displayScene = e, Laya.stage.addChild(this.displayScene),
                    this.displayScene.zOrder = 99, this.displayScene.active = !1, this.storeModel = this.displayScene.getChildByName("storeModel"),
                    this.tryModel = this.displayScene.getChildByName("tryModel"), this.rewardModel = this.displayScene.getChildByName("rewardModel"),
                    this._camera = this.displayScene.getChildByName("Main Camera");
            }));
        }
        changeSelect(e) {
            if (e != this.showIdx) switch (this.showIdx = e, this.sceneType) {
                case _.store:
                    this.showStore();
                    break;

                case _.try:
                    this.showTry();
                    break;

                case _.reward:
                    this.showReward();
            }
        }
        showStore() {
            this.sprite && (this.sprite.destroy(), this.sprite = null), this.sceneType = _.store;
            let e = s.instance.configs[u.mall][this.showIdx].model,
                t = ae.instance.createSkin(e);
            this.sprite = Laya.Sprite3D.instantiate(t, this.displayScene),
                this.sprite.transform.position = this.storeModel.transform.position.clone(),
                this.sprite.transform.rotation = this.storeModel.transform.rotation.clone(),
                this.sprite.getChildByName("tips").active = !1;
            let i = ae.instance.getMaterial(e);
            console.log(e, i);
            null != i && (this.sprite.getChildByName("role_boy") ?
                this.sprite.getChildByName("role_boy").getChildByName("role_boy").skinnedMeshRenderer.material = i.meshRenderer.material :
                this.sprite.getChildByName("role_girl").getChildByName("girl").skinnedMeshRenderer.material = i.meshRenderer.material),
                this.displayScene.active = !0;
        }
        getViewPoint() {
            if (null == this.sprite) return new Laya.Vector2(0, 0);
            {
                let e = new Laya.Vector3(0, 0, 0);
                return this._camera.worldToViewportPoint(this.sprite.transform.position, e), new Laya.Vector2(e.x, e.y);
            }
        }
        showTry() {
            this.sprite && (this.sprite.destroy(), this.sprite = null), this.sceneType = _.try;
            let e = s.instance.configs[u.mall][this.showIdx].model, t = ae.instance.createSkin(e);
            this.sprite = Laya.Sprite3D.instantiate(t, this.displayScene), this.sprite.transform.position = this.tryModel.transform.position.clone(),
                this.sprite.transform.rotation = this.tryModel.transform.rotation.clone();
            let i = ae.instance.getMaterial(e);

            null != i && (this.sprite.getChildByName("role_boy") ?
                this.sprite.getChildByName("role_boy").getChildByName("role_boy").skinnedMeshRenderer.material = i.meshRenderer.material :
                this.sprite.getChildByName("role_girl").getChildByName("girl").skinnedMeshRenderer.material = i.meshRenderer.material,
                this.sprite.getChildByName("tips").active = !1), this.displayScene.active = !0;
        }
        showReward() {
            this.sprite && (this.sprite.destroy(), this.sprite = null), this.sceneType = _.reward;
            let e = s.instance.configs[u.mall][this.showIdx].model, t = ae.instance.createSkin(e);
            this.sprite = Laya.Sprite3D.instantiate(t, this.displayScene), this.sprite.transform.position = this.rewardModel.transform.position.clone(),
                this.sprite.transform.rotation = this.rewardModel.transform.rotation.clone(), this.displayScene.active = !0;
        }
        hide() {
            this.sceneType = _.none, this.sprite && (this.sprite.destroy(), this.sprite = null),
                this.displayScene && (this.displayScene.active = !1);
        }
    }
    U.sceneName = "res3d/LayaScene_store/Conventional/store.ls";
    class q extends c.Views.SkinViewUI {
        constructor() {
            super(), this._selIdx = 0, Laya.stage.addChild(this);
        }
        showBuyBtn() {
            this.spt_coinGet.visible = !0, this.spt_vedioGet.visible = !0;
        }
        hideBuyBtn() {
            this.spt_coinGet.visible = !1, this.spt_vedioGet.visible = !1;
        }
        showNativeIcon(e) {
            this.showNativeBanner(e);
        }
        showNativeBanner(e) {

        }
        init(t) {
            this.initEvent(), C.hideAll();
            let a = s.instance.configs[u.mall];
            this.skinData = a, e.Log("-------------  skinData:" + JSON.stringify(a)), this.list_skin.array = a,
                this.list_skin.renderHandler = new Laya.Handler(this, this.onRender), this.Center.centerY = 800,
                Laya.Tween.to(this.Center, { centerY: 0 }, 500, Laya.Ease.expoOut),
                this.fc_coin.text = I.userData.coin + "", this.Top.top = 2 * L.realH,
                this.hideBuyBtn(), U.instance.showStore(),
                Laya.timer.once(100, this, () => {
                    this.spt_tai.visible = !0;
                    let t = U.instance.getViewPoint();
                    e.Log("----------------  point:" + JSON.stringify(t)), this.spt_tai.x = t.x, this.spt_tai.y = t.y;
                });
        }
        setSelectedSkin(e) {
            this._selIdx = e,
                U.instance.changeSelect(e),
                1 == I.userData.unlock[e] ? (this.hideBuyBtn(),
                    this._selIdx < 5 ? I.userData.useSkin = this._selIdx : I.userData.useSkin2 = this._selIdx,
                    O.instance.setSkin(e)) : (this.fc_coinGet.value = this.skinData[e].price + "", this.lbl_vedioGet.value = I.userData.unlockv[e] + "/" + this.skinData[e].tv,
                        this.showBuyBtn()), this.list_skin.refresh();
        }
        setSelectedItem(e) {
            this._selIdx = e, this.showBuyBtn();
        }
        initEvent() {
            Laya.stage.on("refreshUserData", this, this.refreshUserData);
            this.spt_back.on(Laya.Event.CLICK, this, () => {
                platform.getInstance().showInterstitial(() => {
                    t.instance.dispatch(o.ui_openMain);
                })
            }), this.spt_coinAdd.on(Laya.Event.CLICK, this, () => {
                t.instance.dispatch(o.ui_openReward, {
                    type: 1,
                    count: 200
                });
            }), this.spt_coinGet.on(Laya.Event.CLICK, this, this.clickcoinget), this.spt_vedioGet.on(Laya.Event.CLICK, this, this.clickvedioget);
        }
        refreshUserData() {
            this.fc_coin.text = I.userData.coin + "";
        }
        clickcoinget() {
            I.userData.coin < this.skinData[this._selIdx].price ? L.showMessage("Coins Are Not Enough") : (I.userData.coin -= this.skinData[this._selIdx].price,
                I.userData.unlock[this._selIdx] = 1, I.userData.useSkin = this._selIdx, this.list_skin.refresh(),
                this.setSelectedSkin(this._selIdx), this.fc_coin.text = I.userData.coin + "", I.saveUserData()
                // , L.showMessage("Coin -" + this.skinData[this._selIdx].price)
            );
        }
        clickvedioget() {
            L.showVideo(this, () => {
                I.userData.unlockv[this._selIdx] += 1, I.userData.unlockv[this._selIdx] >= this.skinData[this._selIdx].tv && (I.userData.unlock[this._selIdx] = 1,
                    this._selIdx < 5 ? I.userData.useSkin = this._selIdx : I.userData.useSkin2 = this._selIdx),
                    this.list_skin.refresh(), this.setSelectedSkin(this._selIdx), I.saveUserData();
            }, () => { });
        }
        onRender(e, t) {
            let i = e.getChildByName("img_skin"), s = e.getChildByName("img_bg"), a = e.getChildByName("spt_use");
            i.skin = "sc/" + this.list_skin.array[t].icon + ".png", t < 5 ? t == I.userData.useSkin ? a.visible = !0 : a.visible = !1 : t == I.userData.useSkin2 ? a.visible = !0 : a.visible = !1,
                t == this._selIdx ? s.skin = "sc/sc_xz.png" : s.skin = "sc/sc_pt.png", 1 == I.userData.unlock[t] ? i.gray = !1 : i.gray = !0,
                e.offAll(), e.on(Laya.Event.CLICK, this, () => {
                    this.setSelectedSkin(t), this.list_skin.refresh();
                });
        }
        refresh() {
            this.list_skin.refresh();
        }
        refreshCar() {
            this.refresh();
            let e = this.list_skin.array[this._selIdx];
            I.userData.useSkin = this._selIdx, P.instance.setUseSkin(e);
        }
        onEnable() { }
        onDisable() {
            Laya.stage.off("refreshUserData", this, this.refreshUserData);
            U.instance.hide(), this.banner && this.banner.destroy();
        }
    }
    class H extends c.Views.TrySkinViewUI {
        constructor() {
            super(), this.selIdx = 0, this.type = 0, this._showBanner = !1, Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent(), this.data = s.instance.configs[u.mall], this.selIdx = ae.instance.getRandTry(),
                U.instance.changeSelect(this.selIdx), U.instance.showTry(), Laya.timer.once(100, this, () => {
                    this.spt_tai.visible = !0;
                    let e = U.instance.getViewPoint();
                    this.spt_tai.x = e.x, this.spt_tai.y = e.y;
                }), this.type = H.CheckType % 2, 0 == I.isDefaultGou && (this.type = 0), ++H.CheckType,
                console.log("  isGou:" + I.isDefaultGou + "  type:" + this.type), this.resetCheck(),
                C.hideAll(), I.isWudian ? (Laya.timer.once(1600, this, () => {
                    null == this.banner ? this.banner = new C(2, null) : this.banner.show(), Laya.timer.once(1e3, this, () => {
                        this._showBanner = !0;
                    });
                })) : (I.isDelayDis ? (this.spt_next.visible = !1, Laya.timer.once(2e3, this, () => {
                    this.spt_next.visible = !0;
                })) : this.spt_next.visible = !0, this.banner = new C(2, null));
        }
        resetCheck() {
            0 == this.type ? (this.lbl_checkText.text = "使用试用皮肤", this.spt_gou.visible = I.isDefaultGou,
                this.spt_gou.visible ? this.spt_next.text = "免费试用" : this.spt_next.text = "暂不试用") : (this.lbl_checkText.text = "暂不使用试用皮肤",
                    this.spt_gou.visible = I.isDefaultGou, this.spt_next.text = "暂不试用");
        }
        resetCheckText() {
            this.spt_gou.visible ? 0 == this.type ? this.spt_next.text = "免费试用" : this.spt_next.text = "暂不试用" : 0 == this.type ? this.spt_next.text = "暂不试用" : this.spt_next.text = "免费试用";
        }
        initEvent() {
            this.spt_next.on(Laya.Event.CLICK, this, () => {
                I.isWudian && 0 == this._showBanner || (this.spt_gou.visible && 0 == this.type || 0 == this.spt_gou.visible && 1 == this.type ? L.showVideo(this, () => {
                    O.instance.setSkin(this.selIdx), t.instance.dispatch(o.gameStart);
                }, () => {
                    L.showMessage("未观看完视频");
                }) : t.instance.dispatch(o.gameStart));
            }), this.spt_use.on(Laya.Event.CLICK, this, this.onClickTry);
        }
        onClickTry() {
            0 == Laya.Browser.onMiniGame ? (O.instance.setSkin(this.selIdx),
                t.instance.dispatch(o.gameStart)) : L.showVideo(this, () => {
                    O.instance.setSkin(this.selIdx),
                        t.instance.dispatch(o.gameStart);
                }, () => {
                    L.showMessage("未观看完视频");
                });
        }
        onEnable() { }
        onDisable() {
            U.instance.hide(), this.banner && this.banner.destroy();
        }
    }
    H.CheckType = 0;
    class X extends c.Views.LevelLoadingViewUI {
        constructor() {
            super(), Laya.stage.stage.addChild(this);
        }
        init(e) {
            this.initEvent(), this.img_vs.skewY, Laya.Tween.clearAll(this), Laya.Tween.to(this.img_vs, {
                skewY: 3600
            }, 2e3, Laya.Ease.elasticOut, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.img_Player2, {
                    x: 99
                }, 1e3, Laya.Ease.expoOut, Laya.Handler.create(this, () => { }));
            })), Laya.timer.once(3e3, this, () => {
                t.instance.dispatch(o.gameStart);
            }), this.fc_level.value = I.userData.level + 1 + "", this.img_p1Head.skin = "" == I.userData.headImg ? "main/zr_touxiangkuang_3.png" : I.userData.headImg,
                this.lbl_p1Name.text = I.userData.nickName;
        }
        initEvent() { }
        onEnable() { }
        onDisable() { }
    }
    class Y extends c.Views.SkinAddUI {
        constructor() {
            super(), this.type = 1, this.index = 0, this.tile = 1, Laya.stage.addChild(this);
        }
        init(t) {
            if (e.Log("" + JSON.stringify(t)), this.initEvent(), null != t) {
                let e = t.idx;
                if (this.index = e, this.config = s.instance.configs[u.mall][e], "buy" == t.type) this.banner = new C(5, this.img_gamelist.getComponent(x)),
                    this.type = 1, this.spt_title.skin = "game/spjs_goumai.png", this.spt_coin.skin = "game/spjs_jingbigm.png",
                    this.spt_video.skin = "game/spjs_goumai_2.png", this.fc_coin.value = this.config.coin + "",
                    this.spt_videoCount.skin = "game/spjs_qhx" + this.config.vedio + ".png"; else {
                    this.banner = new C(4, this.img_gamelist.getComponent(x)), this.tile = t.tile, this.type = 2,
                        this.spt_title.skin = "game/spjs_qianghua.png", this.spt_coin.skin = "game/spjs_jingbi.png",
                        this.spt_video.skin = "game/spjs_qianghua_2.png";
                    let e = t.tile;
                    this.fc_coin.value = this.config["consume" + e] + "", this.spt_videoCount.skin = "game/spjs_qhx" + this.config["vedioCount" + e] + ".png";
                }
            }
        }
        initEvent() {
            this.spt_back.on(Laya.Event.CLICK, this, () => {
                te.instance.closeUI(n.SkinAddView);
            }), this.spt_bugCoin.on(Laya.Event.CLICK, this, this.buyCoin), this.spt_buyVedio.on(Laya.Event.CLICK, this, this.buyVedio);
        }
        buyCoin() {
            if (1 == this.type) if (I.userData.coin < this.config.coin) L.showMessage("Coins Are Not Enough"); else {
                I.userData.coin -= this.config.coin;
                let e = this.index >= 5 ? this.index - 1 : this.index;
                I.userData.unlock[e] = 1, I.saveUserData(), te.instance.ui[n.SkinView].refresh(),
                    te.instance.closeUI(n.SkinAddView);
            } else if (I.userData.coin < this.config["consume" + this.tile]) L.showMessage("Coins Are Not Enough"); else {
                I.userData.coin -= this.config["consume" + this.tile];
                this.index >= 5 ? this.index : this.index;
                I.saveUserData(), te.instance.ui[n.SkinView].refreshCar(), te.instance.closeUI(n.SkinAddView);
            }
        }
        buyVedio() { }
        onEnable() { }
        onDisable() { }
    }
    class F extends c.Views.NativeBannerViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(e) {
            this.visible = !1, this.initEvent(), null == e ? te.instance.closeUI(n.NativeBannerView) : (this._data = e,
                I.nativeText ? this.lbl_btn.text = "点击查看" : this.lbl_btn.text = "查看广告", this.lbl_desc.text = e.adList[0].desc,
                this.img_srcAd.loadImage(e.adList[0].imgUrlList[0], Laya.Handler.create(this, () => {
                    this.visible = !0, L.reportAdShow(this._data.adList[0].adId), I.nativeClose && (this.btn_close.visible = !1,
                        Laya.timer.once(3e3, this, () => {
                            this.btn_close.visible = !0;
                        }));
                })));
        }
        initEvent() {
            this.img_bg.on(Laya.Event.CLICK, this, () => { }), this.img_clickArea.on(Laya.Event.CLICK, this, () => {
                L.reportAdClick(this._data.adList[0].adId), L.clearNativeAd(), te.instance.closeUI(n.NativeBannerView);
            }), this.spt_enterAd.on(Laya.Event.CLICK, this, () => {
                L.reportAdClick(this._data.adList[0].adId), L.clearNativeAd(), te.instance.closeUI(n.NativeBannerView);
            }), this.btn_close.on(Laya.Event.CLICK, this, () => {
                L.clearNativeAd(), te.instance.closeUI(n.NativeBannerView);
            });
        }
        onEnable() { }
        onDisable() { }
    }
    class W extends c.Views.ShareViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent(), l.ScaleAni(this.img_scale), this.img_adPanel.getComponent(k).start(I.getAdInfos(1001)),
                "tt" == i.platfomStr && L.isIOS && (this.img_adPanel.visible = !1), this.banner = new C(2, this.img_gamelist.getComponent(x)),
                I.isDelayDis && Laya.timer.once(2e3, this, () => { });
        }
        initEvent() {
            this.spt_get.on(Laya.Event.CLICK, this, () => {
                L.shareVideo(this, () => {
                    I.userData.coin += 5, L.showMessage("Coin +5"), t.instance.dispatch(o.gameReset),
                        t.instance.dispatch(o.ui_openMain), I.saveUserData();
                }, () => { });
            }), this.spt_next.on(Laya.Event.CLICK, this, () => {
                I.isFoceShare ? L.shareVideo(this, () => {
                    t.instance.dispatch(o.gameReset), t.instance.dispatch(o.ui_openMain);
                }, () => {
                    t.instance.dispatch(o.gameReset), t.instance.dispatch(o.ui_openMain);
                }) : (t.instance.dispatch(o.gameReset), t.instance.dispatch(o.ui_openMain));
            });
        }
    }
    class J extends c.Views.RewardBoxViewUI {
        constructor() {
            super(), this.openStateArr = [], this.totalRound = 3, this._showBanner = !1, this.rewards = [],
                this.round = 0, this.bingo = !1, Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent(), ae.instance.setState(a.Rewardbox), l.ScaleAni(this.img_scale),
                this.openStateArr = [], this.rewards = [];
            for (let e = 0, t = 9; e < t; ++e) this.openStateArr.push(!1);
            this.initRndVedio(), this.listBox.array = this.openStateArr, this.listBox.renderHandler = new Laya.Handler(this, this.onRender),
                this.spt_videoGet.visible = !1, this.spt_next.visible = !1, this.spt_keyStore.visible = !0,
                this.resetKeyMask(), this.skinIdx = -1, "qq" == i.platfomStr && (C.hideAll(), this.banner = new C(4, null));
            this.refreshUserData();
        }
        initRndVedio() {
            let e;
            if (this.rndVedio = [], I.isBoxVedio) {
                this.totalRound = 2;
                for (let t = 0, i = 3; t < i; ++t) e = l.Random_notInArr(0, 9, this.rndVedio), this.rndVedio.push(e);
            } else this.totalRound = 3;
        }
        hasRndVedio(e) {
            for (let t = 0, i = this.rndVedio.length; t < i; ++t) if (this.rndVedio[t] == e) return !0;
            return !1;
        }
        setHighReward() {
            let e = -1;
            return this.skinIdx > 0 ? I.userData.unlock[this.skinIdx] = 1 : (I.userData.coin += 10,
                e = 50), I.saveUserData(), L.showMessage("Get the highest reward"), e;
        }
        resetKeyMask() {
            for (let e = 0, t = 3; e < t; ++e) {
                let t = this.spt_keyStore.getChildByName("key" + (e + 1));
                e < I.userData.keyCount ? t.skin = "gaming/p_i_ys.png" : t.skin = "gaming/p_i_ys_bg.png";
            }
        }
        nextStep() {
            this._nextStep();
        }
        _nextStep() {
            t.instance.dispatch(o.gameReset),
                t.instance.dispatch(o.ui_openMain);
        }
        initEvent() {
            Laya.stage.on("refreshUserData", this, this.refreshUserData);
            this.spt_next.on(Laya.Event.CLICK, this, () => {
                I.isWudian && 0 == this._showBanner || this.nextStep();
            }), this.spt_videoGet.on(Laya.Event.CLICK, this, () => {
                L.showVideo(this, () => {
                    I.userData.keyCount = 3, this.round++, this.resetKeyMask(), this.spt_videoGet.visible = !1,
                        this.spt_next.visible = !1, this.spt_keyStore.visible = !0, this.banner && this.banner.destroy();
                })
            });
        }
        onRender(e, t) {
            let i = e.getChildByName("bg"), s = e.getChildByName("lbl_coinNum"), a = e.getChildByName("spt_open1"), n = e.getChildByName("spt_open2"), o = e.getChildByName("spt_close"), r = e.getChildByName("spt_vedio");
            this.hasRndVedio(t) ? r.visible = !0 : r.visible = !1, 0 == this.openStateArr[t] ? (i.skin = "jbbz/jbbz_bxd.png",
                o.visible = !0, a.visible = !1, n.visible = !1, s.visible = !1) : (i.skin = "jbbz/jbbz_bxd_2.png",
                    o.visible = !1, a.visible = !0, n.visible = !0, s.visible = !0, s.text = "X" + this.rewards[t]),
                e.on(Laya.Event.CLICK, this, this.onOpenBox, [t]);
        }
        onOpenBox(e) {
            if (1 == this.openStateArr[e]) return;
            if (this.hasRndVedio(e)) return void L.showVideo(this, () => {
                let t = 0;
                this.round < this.totalRound - 1 || 1 == this.bingo ? t = l.Random_local(20, 50) : this.round == this.totalRound - 1 && 0 == this.bingo ? (this.bingo = !0,
                    t = this.setHighReward()) : (t = l.Random_local(20, 50)) > 5 && (this.bingo = !0,
                        t = this.setHighReward()), this.rewards[e] = t, this.openStateArr[e] = !0, this.listBox.refresh(),
                    this.resetKeyMask()//, h.PlaySound("box", !0);
            }, () => {
                L.showMessage("未看完视频");
            });
            if (I.userData.keyCount <= 0) return;
            let t = 0;
            this.round < this.totalRound - 1 || 1 == this.bingo ? t = l.Random_local(20, 50) : this.round == this.totalRound - 1 && 1 == I.userData.keyCount && 0 == this.bingo ? (this.bingo = !0,
                t = this.setHighReward()) : (t = l.Random_local(20, 50)) > 5 && (this.bingo = !0,
                    t = this.setHighReward()), this.rewards[e] = t, this.openStateArr[e] = !0, t > 0 && (I.userData.coin += t,
                        "qg" != i.platfomStr && L.showMessage("Coin +" + t), I.saveUserData()), --I.userData.keyCount,
                I.userData.keyCount <= 0 && (this.round < this.totalRound ? (this.round == this.totalRound - 1 ? this.spt_videoGet.visible = !1 : this.spt_videoGet.visible = !0,
                    I.isDelayDis ? Laya.timer.once(2e3, this, () => {
                        this.spt_next.visible = !0;
                    }) : (this.spt_next.visible = !0, I.isWudian ? (C.hideAll(),
                        Laya.timer.once(1600, this, () => {
                            null == this.banner ? this.banner = new C(4, null) : this.banner.show(), Laya.timer.once(1e3, this, () => {
                                this._showBanner = !0;
                            });
                        })) : (null == this.banner ? this.banner = new C(4, null) : this.banner.show(),
                            I.isDelayDis ? (this.spt_next.visible = !1, Laya.timer.once(2e3, this, () => {
                                this.spt_next.visible = !0;
                            })) : this.spt_next.visible = !0)), this.spt_keyStore.visible = !1) : (this.spt_next.visible = !0,
                                I.isWudian ? (C.hideAll(), Laya.timer.once(1600, this, () => {
                                    null == this.banner ? this.banner = new C(4, null) : this.banner.show(), Laya.timer.once(1e3, this, () => {
                                        this._showBanner = !0;
                                    });
                                })) : (null == this.banner ? this.banner = new C(4, null) : this.banner.show(),
                                    I.isDelayDis ? (this.spt_next.visible = !1, Laya.timer.once(2e3, this, () => {
                                        this.spt_next.visible = !0;
                                    })) : this.spt_next.visible = !0))), this.listBox.refresh(), this.resetKeyMask()
            // , h.PlaySound("box", !0);
        }
        showBanner() {
            this.banner = new C(4, null);
        }
        onEnable() { }
        refreshUserData() {
            this.fc_coin.text = I.userData.coin + "";
        }
        onDisable() {
            Laya.stage.off("refreshUserData", this, this.refreshUserData);
        }
    }
    class K extends c.Views.GoldenEggViewUI {
        constructor() {
            super(), this.clickCount = 0, this.isShowVedio = !1, this.isShowBanner = !1, Laya.stage.stage.addChild(this);
        }
        init(t) {
            this.initEvent(), this.progressNum = 0, this.btn_close.visible = !1, C.hideAll(),
                Laya.timer.frameLoop(25, this, () => {
                    null != this && (this.progressNum -= .06, this.updataProgress());
                }), this.type = t || 1, e.Log("---------------  type:" + this.type), this.resetType();
        }
        handLoopAni() {
            0 != this.spt_shou.visible && (this.spt_shou.scaleX = 1, this.spt_shou.scaleY = 1,
                Laya.Tween.to(this.spt_shou, {
                    scaleX: .8,
                    scaleY: .8
                }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.spt_shou, {
                        scaleX: 1,
                        scaleY: 1
                    }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, this.handLoopAni));
                })));
        }
        danScaleAni() {
            this.spt_dan.scaleX = 1, this.spt_dan.scaleY = 1, Laya.Tween.to(this.spt_dan, {
                scaleX: 1.2,
                scaleY: 1.2
            }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.spt_dan, {
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.linearIn, null);
            }));
        }
        btnScaleAni() {
            this.btnClick.scaleX = 1, this.btnClick.scaleY = 1, Laya.Tween.to(this.btnClick, {
                scaleX: 1.2,
                scaleY: 1.2
            }, 100, Laya.Ease.linearIn, Laya.Handler.create(this, () => {
                Laya.Tween.to(this.btnClick, {
                    scaleX: 1,
                    scaleY: 1
                }, 100, Laya.Ease.linearIn, null);
            }));
        }
        resetType() {
            1 == this.type ? (this.btnClick.visible = !0, "qg" == i.platfomStr ? this.btnClick.bottom = 30 : this.btnClick.bottom = 50,
                this.spt_shou.visible = !1) : (this.btnClick.visible = !1, this.spt_shou.visible = !0,
                    this.handLoopAni(), this.banner = new C(0, this.img_gamelist.getComponent(x)));
        }
        clickBtn() {
            1 == this.type && (this.btnScaleAni(), this.danScaleAni(), this._clickAdd()), this.checkVedio();
        }
        clickEgg() {
            2 == this.type && (this.spt_shou.visible = !1, this.danScaleAni(), this._clickAdd()),
                this.checkVedio();
        }
        checkVedio() {
            this.isShowVedio || (ae.instance.gameState == a.Gaming || ae.instance.gameState == a.Newbee ? I.isStartEggVedio ? (ae.instance.setVedioHide(),
                L.showVideo(this, () => {
                    this.isShowVedio = !0;
                }, () => {
                    this.isShowVedio = !0;
                })) : this.isShowVedio = !0 : ae.instance.gameState == a.ResultView || ae.instance.gameState == a.ReviveView ? I.isEndEggVedio ? (ae.instance.setVedioHide(),
                    L.showVideo(this, () => {
                        this.isShowVedio = !0;
                    }, () => {
                        this.isShowVedio = !0;
                    })) : this.isShowVedio = !0 : ae.instance.gameState == a.Rewardbox && (I.isRewboxEggVedio ? (ae.instance.setVedioHide(),
                        L.showVideo(this, () => {
                            this.isShowVedio = !0;
                        }, () => {
                            this.isShowVedio = !0;
                        })) : this.isShowVedio = !0));
        }
        _clickAdd() {
            if (this.clickCount++, this.progressNum += .1, this.progressNum >= 1) return this.getReward(),
                void this.closeUI();
            this.updataProgress();
        }
        getReward() {
            let e = l.Random_local(20, 51);
            I.userData.coin += e, "qg" != i.platfomStr && L.showMessage("Coin +" + e);
        }
        updataProgress() {
            this.progressNum >= 1 ? this.progressNum = 1 : this.progressNum <= .07 && (this.progressNum = .07),
                this.progressNum > .5 && this.checkShowBannner();
            let e = 421 * this.progressNum;
            e < 34 && (e = 34), this.img_bar.width = e;
        }
        initEvent() {
            this.btnClick.on(Laya.Event.CLICK, this, this.clickBtn), this.spt_dan.on(Laya.Event.CLICK, this, this.clickEgg),
                this.btn_close.on(Laya.Event.CLICK, this, this.closeUI);
        }
        onEnable() { }
        onDisable() {
            this.banner && this.banner.destroy();
        }
        closeUI() {
            this._nextStep();
        }
        _nextStep() {
            "wx" == i.platfomStr ? t.instance.dispatch(o.ui_openConverge) : (e.Log("-------  gameState:" + ae.instance.gameState),
                ae.instance.gameState == a.Gaming || ae.instance.gameState == a.Newbee ? (O.instance.setPause(!1),
                    t.instance.dispatch(o.ui_openGaming)) : ae.instance.gameState == a.ResultView || ae.instance.gameState == a.ReviveView ? t.instance.dispatch(o.ui_openResult, [ae.instance.g_getStar]) : ae.instance.gameState == a.Rewardbox ? (t.instance.dispatch(o.gameReset),
                        t.instance.dispatch(o.ui_openMain)) : "tt" == i.platfomStr ? t.instance.dispatch(o.ui_openShare, [!0]) : 1 == I.hasConverge ? t.instance.dispatch(o.ui_openConverge) : (t.instance.dispatch(o.gameReset),
                            t.instance.dispatch(o.ui_openMain)));
        }
        checkShowBannner() {
            1 == this.type ? 0 == this.isShowBanner && (this.banner = new C(0, this.img_gamelist.getComponent(x)),
                this.isShowBanner = !0, Laya.timer.once(1500, this, () => {
                    this.btn_close.visible = !0, this.btnClick.bottom = 200, this.getReward(), this._nextStep();
                })) : 0 == this.isShowBanner && (this.isShowBanner = !0, Laya.Browser.onMiniGame && L.showAppBox(),
                    Laya.timer.once(1500, this, () => {
                        this.btn_close.visible = !0, this.getReward(), this._nextStep();
                    }));
        }
    }
    class Q extends c.Views.SystemViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent(), this.txt_message.text = e + "";
        }
        initEvent() {
            this.img_back.on(Laya.Event.CLICK, this, () => {
                te.instance.closeUI(n.SystemView);
            });
        }
        onEnable() { }
        onDisable() { }
    }
    class Z extends c.Views.SigninViewUI {
        constructor() {
            super(), Laya.stage.addChild(this);
        }
        showNativeIcon(e) {
            this.showNativeBanner(e);
        }
        showNativeBanner(e) {

        }
        init(e) {
            this.initEvent();
            let t = s.instance.configs[u.signin];
            if (this.data = t, C.hideAll(), "qg" == i.platfomStr && "o" == i.platfomStr2 || (this.banner = new C(1, null)),
                6 == I.userData.signinNum ? (this.img_mark7.visible = !0, this.spt_signined7.visible = !0) : (this.img_mark7.visible = !1,
                    this.spt_signined7.visible = !1),
                "qg" == i.platfomStr && "o" == i.platfomStr2) {
                if (0 == Laya.Browser.onMiniGame) {
                    let e = {
                        adList: [{
                            adId: "",
                            clickBtnTxt: "",
                            creativeType: 6,
                            desc: "",
                            iconUrlList: [""],
                            icon: "",
                            interactionType: 3,
                            logoUrl: "",
                            title: "",
                            imgUrlList: [""]
                        }],
                        code: 0,
                        msg: "ok"
                    };
                    this.showNativeIcon(e);
                }
                L.showNativeAd();
            }
            this.lbl_coin7.text = this.data[6].award + "";
            let a = JSON.parse(JSON.stringify(t));
            a.splice(6, 1), this.list_day.array = a, this.list_day.renderHandler = new Laya.Handler(this, this.onRender),
                this.spt_gou.visible = true, l.isOtherDay(L.appNameEn + "signin") ? (this.spt_signin.visible = !0,
                    this.spt_signined.visible = !1) : (this.spt_signin.visible = !1, this.spt_signined.visible = !0);
        }
        initEvent() {
            this.spt_back.on(Laya.Event.CLICK, this, () => {
                te.instance.closeUI(n.SigninView), te.instance.ui[n.MainView].refresh();
            }), this.spt_mark.on(Laya.Event.CLICK, this, () => {
                this.spt_gou.visible = !this.spt_gou.visible;
            }), this.spt_signin.on(Laya.Event.CLICK, this, () => {
                let e = this.data[I.userData.signinNum].award;
                this.spt_gou.visible ? L.showVideo(this, () => {
                    let i = 3 * e;
                    this.getAward(i), te.instance.closeUI(n.SigninView), t.instance.dispatch(o.ui_openReward, {
                        type: 3,
                        count: i
                    });
                }, () => { }) : (this.getAward(e), te.instance.closeUI(n.SigninView), t.instance.dispatch(o.ui_openReward, {
                    type: 3,
                    count: e
                }));
            });
        }
        getAward(e) {
            I.userData.coin += e, I.userData.signinNum += 1, I.userData.signinNum >= 7 && (I.userData.signinNum = 0),
                l.saveOtherDay(L.appNameEn + "signin"), this.spt_signin.visible = !1, this.spt_signined.visible = !0,
                this.list_day.refresh(), te.instance.ui[n.MainView] && te.instance.ui[n.MainView].refresh();
        }
        onRender(e, t) {
            let i = e.getChildByName("img_day"), s = e.getChildByName("img_coin"), a = e.getChildByName("lbl_coin"), n = e.getChildByName("fg"), o = e.getChildByName("mark");
            i.skin = "mrqd/mrqd_day" + (t + 1) + ".png", a.text = "X" + this.list_day.array[t].award,
                s.skin = t > 3 ? "mrqd/mrqd_jb_3.png" : t > 1 ? "mrqd/mrqd_jb_2.png" : "mrqd/mrqd_jb_1.png",
                I.userData.signinNum > t ? (n.visible = !0, o.visible = !0) : (n.visible = !1, o.visible = !1);
        }
        onEnable() { }
        onDisable() {
            this.banner && this.banner.destroy();
        }
    }
    class $ extends c.Views.ConvergeView2UI {
        constructor() {
            super(), this._showBanner = !1, Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent();
            let t = this.img_adPanel.getComponent(k);
            t.init({
                width: 200,
                height: 240,
                spaceX: 20,
                spaceY: 20
            }), t.start(I.getAdInfos(1001)), this._showBanner = !1, I.isWudian ? (C.hideAll(),
                this.spt_back.y = -134, Laya.timer.once(1600, this, () => {
                    this.banner = new C(1, null), Laya.timer.once(1e3, this, () => {
                        this._showBanner = !0, this.spt_back.y = -310;
                    });
                })) : (this.spt_back.y = -310, this.banner = new C(1, null));
        }
        onEnable() { }
        onDisable() { }
        initEvent() {
            this.spt_back.on(Laya.Event.CLICK, this, () => {
                I.isWudian && 0 == this._showBanner || te.instance.closeUI(n.ConvergeView2);
            });
        }
    }
    class ee extends c.Views.ConvergeView3UI {
        constructor() {
            super(), this._showBanner = !1, Laya.stage.addChild(this);
        }
        init(e) {
            this.initEvent();
            let t = this.img_adPanel.getComponent(k);
            t.init({
                width: 270,
                height: 344,
                spaceX: 20,
                spaceY: 25,
                col: 2
            }), t.start(I.getAdInfos(1001)), I.isWudian ? (C.hideAll(), this.spt_back.y = -134) : this.spt_back.y = -300;
        }
        onEnable() { }
        onDisable() { }
        initEvent() {
            this.spt_back.on(Laya.Event.CLICK, this, () => {
                I.isWudian && 0 == this._showBanner && Laya.timer.once(1600, this, () => {
                    this.banner = new C(2, null), Laya.timer.once(1e3, this, () => {
                        this._showBanner = !0, C.hideAll();
                    });
                }), I.isWudian && 0 == this._showBanner || (ae.instance.gameState == a.Lobby ? ae.instance.startGame() : (t.instance.dispatch(o.gameReset),
                    t.instance.dispatch(o.ui_openMain)));
            });
        }
    }
    class te {
        constructor() {
            this._event = ["openLoading", "openMain", "openConverge", "openConverge2", "openConverge3", "openGaming", "openRank", "openResult", "openRevive", "openReward", "openSkin", "openTrySkin", "openLevelLoading", "openSkinAdd", "openNativeBanner", "openRewardBox", "openShare", "openGoldenEgg", "openSystem", "openSignin"],
                this.systemTime = 0, this.cellTime = 1e3, this._ui = [];
        }
        init() {
            for (let e = 0, i = this._event.length; e < i; ++e) t.instance.onEvent(this._event[e], this, this[this._event[e]]);
        }
        openLevelLoading(e) {
            null == this._ui[n.LevelLoadingView] && (this._ui[n.LevelLoadingView] = new X()),
                this.hideOthers(n.LevelLoadingView), C.hide(), this._ui[n.LevelLoadingView].init(e);
        }
        openTrySkin(e) {
            null == this._ui[n.TrySkinView] && (this._ui[n.TrySkinView] = new H()), this.hideOthers(n.TrySkinView),
                C.hide(), this._ui[n.TrySkinView].init(e);
        }
        openRank(e) {
            null == this._ui[n.RankView] && (this._ui[n.RankView] = new T()), this.hideOthers(n.RankView),
                C.hide(), this._ui[n.RankView].init(e);
        }
        openResult(e) {
            null == this._ui[n.ResultView] && (this._ui[n.ResultView] = new D()), this.hideOthers(n.ResultView),
                C.hide(), this._ui[n.ResultView].init(e);
            window.scrollList.visible = true;
        }
        openRevive(e) {
            null == this._ui[n.ReviveView] && (this._ui[n.ReviveView] = new E()), this.hideOthers(n.ReviveView),
                C.hide(), this._ui[n.ReviveView].init(e);
        }
        openReward(e) {
            null == this._ui[n.RewardView] && (this._ui[n.RewardView] = new G()), C.hide(),
                this._ui[n.RewardView].init(e);
        }
        openSignin(e) {
            null == this._ui[n.SigninView] && (this._ui[n.SigninView] = new Z()), C.hide(),
                this._ui[n.SigninView].init(e);
        }
        openGoldenEgg(e) {
            null == this._ui[n.GoldenEggView] && (this._ui[n.GoldenEggView] = new K()), this.hideOthers(n.GoldenEggView),
                C.hide(), this._ui[n.GoldenEggView].init(e);
        }
        openRewardBox(e) {
            window.scrollList.visible = false;
            null == this._ui[n.RewardBoxView] && (this._ui[n.RewardBoxView] = new J()), this.hideOthers(n.RewardBoxView),
                this._ui[n.RewardBoxView].init(e);
        }
        openSkin(e) {
            window.scrollList.visible = false;
            null == this._ui[n.SkinView] && (this._ui[n.SkinView] = new q()), this.hideOthers(n.SkinView),
                C.hide(), this._ui[n.SkinView].init(e);
        }
        openGaming(e) {
            window.scrollList.visible = false;
            null == this._ui[n.GamingView] && (this._ui[n.GamingView] = new B()), this.hideOthers(n.GamingView),
                C.hide(), this._ui[n.GamingView].init(e), this._ui[n.GamingView].visible = !0;
        }
        openLoading(e) {
            null == this._ui[n.LoadingView] && (this._ui[n.LoadingView] = new N()), C.hide(),
                this._ui[n.LoadingView].init(e);
        }
        openMain(e) {
            null == this._ui[n.MainView] && (this._ui[n.MainView] = new R()), this.hideOthers(n.MainView),
                C.hide(), this._ui[n.MainView].init(e), this._ui[n.MainView].visible = !0;
            window.scrollList.visible = true;
        }
        openConverge(e) {
            null == this._ui[n.ConvergeView] && (this._ui[n.ConvergeView] = new V()), this.hideOthers(n.ConvergeView),
                C.hide(), this._ui[n.ConvergeView].init(e);
        }
        openConverge2(e) {
            null == this._ui[n.ConvergeView2] && (this._ui[n.ConvergeView2] = new $()), this._ui[n.ConvergeView2].init(e);
        }
        openConverge3(e) {
            null == this._ui[n.ConvergeView3] && (this._ui[n.ConvergeView3] = new ee()), this.hideOthers(n.ConvergeView3),
                this._ui[n.ConvergeView3].init(e);
        }
        openSkinAdd(e) {
            null == this._ui[n.SkinAddView] && (this._ui[n.SkinAddView] = new Y()), C.hide(),
                this._ui[n.SkinAddView].init(e);
        }
        openNativeBanner(e) {
            null == this._ui[n.NativeBannerView] && (this._ui[n.NativeBannerView] = new F()),
                C.hide(), this._ui[n.NativeBannerView].init(e);
        }
        openShare(e) {
            null == this._ui[n.ShareView] && (this._ui[n.ShareView] = new W()), this.hideOthers(n.ShareView),
                C.hide(), this._ui[n.ShareView].init(e);
        }
        openSystem(e) {
            null == this._ui[n.SystemView] && (this._ui[n.SystemView] = new Q()), this._ui[n.SystemView].init(e),
                this.systemTime < 0 && (this.systemTime = 0), this.systemTime += this.cellTime,
                Laya.timer.once(this.cellTime, this, () => {
                    this.systemTime -= this.cellTime, this.systemTime <= 0 && (te.instance.closeUI(n.SystemView),
                        this.systemTime = 0);
                });
        }
        hideOthers(e) {
            for (var t in this._ui) null != this._ui[t] && t != e + "" && t != n.SystemView + "" && (this._ui[t].onDisable(),
                this._ui[t].destroy(), this._ui[t] = null);
        }
        closeUI(e) {
            null != this._ui[e] && (this._ui[e].onDisable(), this._ui[e].destroy(), this._ui[e] = null);
        }
        get ui() {
            return this._ui;
        }
    }
    te.instance = new te();
    class ie {
        constructor() {
            this.frame = 0;
        }
        init(e) { }
        reset() { }
        checkCollision(e) {
            return !1;
        }
        createPlayer(e, t) {
            I.userData.level;
        }
        getPlayerPos() { }
        update(e) {
            ++this.frame;
        }
    }
    ie.instance = new ie();
    class se {
        constructor() {
            this.fixedIdx = 0;
        }
        awake(e) {
            if (e >= this.meshs.length) return;
            this.bodys[e].awake();
        }
        getMeshLen() {
            return null == this.meshs ? 0 : this.meshs.length;
        }
        getMesh(e) {
            if (null != this.meshs) return e >= this.meshs.length ? null : this.meshs[e];
        }
        addFixedBox(e) {
            this.world.add({
                size: [e.transform.getWorldLossyScale().x, e.transform.getWorldLossyScale().y, e.transform.getWorldLossyScale().z],
                pos: [e.transform.position.x, e.transform.position.y, e.transform.position.z],
                friction: se.friction,
                move: !1,
                world: this.world
            });
        }
        clear() {
            this.removeAll(0);
        }
        init() {
            this.world = new OIMO.World({
                timestep: 1 / 30,
                iterations: 8,
                broadphase: 3,
                random: !1,
                info: !1,
                worldscale: 1
            }), this.world.gravity = new OIMO.Vec3(0, -10, 0), this.bodys = [], this.meshs = [];
        }
        addBox(e, t = 1, i = 1, s = 1, a = 0, n = 0, o = 0) {
            if (null == this.world) return null;
            let r = this.world.add({
                type: "box",
                density: 5,
                friction: se.friction,
                restitution: se.restitution,
                size: [t, i, s],
                pos: [e.transform.position.x, e.transform.position.y, e.transform.position.z],
                rot: [a, n, o],
                move: !0,
                world: this.world
            });
            return this.bodys.push(r), this.meshs.push(e), r;
        }
        addSphere(e, t = .5) {
            if (null == this.world) return null;
            let i = this.world.add({
                type: "sphere",
                density: 5,
                friction: se.friction,
                restitution: se.restitution,
                size: [t],
                pos: [e.transform.position.x, e.transform.position.y, e.transform.position.z],
                move: !0,
                world: this.world,
                material: "statique"
            });
            return this.bodys.push(i), this.meshs.push(e), i;
        }
        addCylinder(e, t = .5, i = 2) {
            if (null == this.world) return null;
            let s = this.world.add({
                type: "cylinder",
                restitution: .6,
                size: [t, i],
                pos: [e.transform.position.x, e.transform.position.y, e.transform.position.z],
                move: !0,
                world: this.world,
                material: "statique"
            });
            return this.bodys.push(s), this.meshs.push(e), s;
        }
        update() {
            if (null != this.world) {
                this.world.step();
                for (var e, t, i = this.bodys.length; i--;) if (t = this.bodys[i], e = this.meshs[i],
                    !t.sleeping) {
                    if (null == e || null == e.transform) continue;
                    this.CopyPos(e, t.getPosition()), this.CopyRot(e, t.getQuaternion());
                }
            }
        }
        remove(e) {
            for (let t = 0, i = this.meshs.length; t < i; ++t) if (this.meshs[t] == e) {
                return this.bodys[t].remove(), this.bodys.splice(t, 1), this.meshs.splice(t, 1),
                    e.destroy(), !0;
            }
            return !1;
        }
        removeAll(t) {
            e.Log("idx:" + t + "  len:" + this.bodys.length);
            for (let e = this.bodys.length - 1; e >= t; --e) {
                let t = this.bodys[e];
                null != t && (t.remove(), this.bodys.splice(e, 1), this.meshs.splice(e, 1));
            }
        }
        sleepRigidbody(e) {
            for (let t = 0, i = this.meshs.length; t < i; ++t) if (this.meshs[t] == e) {
                return this.bodys[t].sleep(), !0;
            }
            return !1;
        }
        removeRigidbody(e) {
            for (let t = 0, i = this.meshs.length; t < i; ++t) if (this.meshs[t] == e) {
                return this.bodys[t].remove(), this.bodys.splice(t, 1), this.meshs.splice(t, 1),
                    !0;
            }
            return !1;
        }
        setPosition(e, t) {
            for (let i = 0, s = this.meshs.length; i < s; ++i) if (this.meshs[i] == e) {
                return this.bodys[i].resetPosition(t.x, t.y, t.z), !0;
            }
        }
        allSleep() {
            for (let e = 0, t = this.bodys.length; e < t; ++e) this.bodys[e].sleep();
        }
        CopyPos(e, t) {
            let i = new Laya.Vector3(t.x, t.y, t.z);
            e.transform.position = i;
        }
        CopyRot(e, t) {
            e.transform.rotation = new Laya.Quaternion(t.x, t.y, t.z, t.w);
        }
    }
    se.instance = new se(), se.friction = .2, se.restitution = 0;
    class ae extends Laya.Script {
        constructor() {
            super(), this.reback = !1, this._vedioHide = !1, this.isResult = !1, this._endGoldenType = 1,
                this._rewardType = 1, this.hasShadow = !0, this.isLocalPhysic = !1, this.isClearUserInfo = !1,
                this.isClearData = !1, this._startEggType = 1, this._state = a.None, this._nextState = a.None,
                this.g_hasNewbee = !0, this.g_ItemCount = 3, this.g_getStar = 0, this.refreshTime = 30,
                this.refreshC = 1, this.curCoin = 1, this.coinLimit = 10, this.isShowBanner = !0,
                I.initAds(), I.loadUserData(), ae.instance = this, this.loadOver = false,
                e.Log("constructor"), this.initEvent(), L.instance.init(), te.instance.init(), this.runTime = 0;
            this.loopNum = 0;
            let t = [{
                url: "res/atlas/adlist.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/big.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/box.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/common.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/gaming.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/loading.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/main1.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/result.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/skin.atlas",
                type: Laya.Loader.ATLAS
            }, {
                url: "res/atlas/store.atlas",
                type: Laya.Loader.ATLAS
            }], n = [{
                url: "res/configs/level.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/configs/mall.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/configs/monster.json",
                type: Laya.Loader.JSON
            }, {
                url: "res/configs/signin.json",
                type: Laya.Loader.JSON
            }];
            platform.getInstance().puzzlegamestartup("Save-The-Beauty", () => {
                window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Save-The-Beauty-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Save-The-Beauty-musicState")) : false;
                Laya.stage.addChild(window.scrollList);
                window.yad.scale(0.7, 0.7);
                window.yad.right = 10;
                window.yad.top = 10;
                window.scrollList.setSize(200, 200, true);
                window.scrollList.bottom = 0;
                window.scrollList.bottom = 50;
                window.scrollList.visible = false;
                s.instance.init(t, n, ["res3d"], "res3d/LayaScene_game/Conventional/game.ls"),
                    s.instance.loadUIAtlas()//, Laya.timer.loop(33, this, this.fixedUpdate);
                h.playBgMusic();
            })
            this.addHPTimer();
            // Laya.timer.loop(1000, this, this.addHPTimer);
        }
        addHPTimer() {
            if (I.userData.hp >= 10) {
                I.userData.costHpTime = 0;
                return;
            } else {
                I.userData.costHpTime == 0 && (I.userData.costHpTime = Date.now(), I.saveUserData());
                if (Date.now() - I.userData.costHpTime >= 300000) {
                    let num = Math.floor((Date.now() - I.userData.costHpTime) / 300000)
                    num = I.userData.hp + num > 10 ? 10 - I.userData.hp : num;
                    I.userData.hp += num;
                    I.userData.hp >= 10 ? I.userData.costHpTime = 0 : I.userData.costHpTime += 300000 * num;
                    I.saveUserData();
                }
            }
        }
        numtoHSM(num) {
            let str = "";
            let num0 = num;
            let h = Math.floor(num0 / 3600000);
            let s = Math.floor((num0 - h * 3600000) / 60000);
            let m = Math.floor((num0 - h * 3600000 - s * 60000) / 1000);
            str = (h >= 10 ? h : "0" + h) + ":" + (s >= 10 ? s : "0" + s) + ":" + (m >= 10 ? m : "0" + m);
            return str;
        }
        startGame() {
            ae.instance.hasTrySkin() ? t.instance.dispatch(o.ui_openTrySkin) : t.instance.dispatch(o.gameStart);
        }
        setVedioHide() {
            this._vedioHide = !0;
        }
        onHide(e) {
            this.reback = !0, I.isPlayBgMusic = !1;
        }
        onShow(s) {
            this._vedioHide ? this._vedioHide = !1 : (this._vedioHide = !1, null != te.instance.ui[n.GoldenEggView] && (e.Log("------------  gameState:" + this.gameState),
                this.getReward(), "wx" == i.platfomStr ? t.instance.dispatch(o.ui_openConverge) : (e.Log("-------  gameState:" + ae.instance.gameState),
                    ae.instance.gameState == a.Gaming || ae.instance.gameState == a.Newbee ? (O.instance.setPause(!1),
                        t.instance.dispatch(o.ui_openGaming)) : ae.instance.gameState == a.ResultView || ae.instance.gameState == a.ReviveView ? t.instance.dispatch(o.ui_openResult, [ae.instance.g_getStar]) : ae.instance.gameState == a.Rewardbox ? (t.instance.dispatch(o.gameReset),
                            t.instance.dispatch(o.ui_openMain)) : "tt" == i.platfomStr ? t.instance.dispatch(o.ui_openShare, [!0]) : 1 == I.hasConverge ? t.instance.dispatch(o.ui_openConverge) : (t.instance.dispatch(o.gameReset),
                                t.instance.dispatch(o.ui_openMain)))));
        }
        getReward() {
            let e = l.Random_local(20, 51);
            I.userData.coin += e, "qg" != i.platfomStr && L.showMessage("Coin +" + e);
        }
        setResult(e) {
            this.isResult = !0;
        }
        toLoseLogic() {
            this.setState(a.ReviveView), this.g_getStar = 0, "wx" == i.platfomStr ? I.isGoldenEgg ? t.instance.dispatch(o.ui_openGoldenEgg, 1) :
                t.instance.dispatch(o.ui_openResult) : "qq" == i.platfomStr ? I.hasEndEgg > 0 ? this.toEndGoldenEgg() :
                    t.instance.dispatch(o.ui_openResult, [this.g_getStar]) : "qg" == i.platfomStr && t.instance.dispatch(o.ui_openResult, [this.g_getStar]);
        }
        toEndGoldenEgg() {
            let e = 1;
            2 == I.hasEndEgg ? e = 2 : 3 == I.hasEndEgg && (e = this._endGoldenType, ++this._endGoldenType,
                this._endGoldenType >= 3 && (this._endGoldenType = 1)), t.instance.dispatch(o.ui_openGoldenEgg, e);
        }
        getRewardEggType() {
            let e = 1;
            return 2 == I.hasRewboxEgg ? e = 2 : 3 == I.hasRewboxEgg && (e = this._rewardType,
                ++this._rewardType, this._rewardType >= 3 && (this._rewardType = 1)), e;
        }
        toWinLogic() {
            this.setState(a.ResultView), this.g_getStar = 1,
                t.instance.dispatch(o.ui_openResult, [this.g_getStar]);
        }
        fixedUpdate() { }
        initEvent() {
            t.instance.onEvent(o.loadedAtlas, this, this.loadedAtlas), t.instance.onEvent(o.loadedConfigs, this, this.loadedConfigs),
                t.instance.onEvent(o.loadedSubpack, this, this.loadedSubpack), t.instance.onEvent(o.loadedMainScene, this, this.loadedMainScene),
                t.instance.onEvent(o.gameEnd, this, this.gameEnd), t.instance.onEvent(o.gameStart, this, this.gameStart),
                t.instance.onEvent(o.gameReset, this, this.gameReset), t.instance.onEvent(o.loadedNativeAd, this, this.loadedNativeAd);
            Laya.timer.frameLoop(1, this, this.setProcess);

        }
        setProcess() {
            if (this.loopNum < 0.95) {
                this.loopNum += 0.0015;
            }
            this.loopNum >= 0.95 && (this.loopNum = 0.95);
            te.instance.ui[n.LoadingView] && te.instance.ui[n.LoadingView].setProcess(this.loopNum);
            this.loadOver && 0 == ae.loadMain && (Laya.timer.clear(this, this.setProcess), Laya.timer.frameLoop(1, this, this.setProcess0));
        }
        loadedAtlas() {
            e.Log("加载图集完成"), t.instance.offEvent(o.loadedAtlas, this, this.loadedAtlas), s.instance.loadConfigs(),
                t.instance.dispatch(o.ui_openLoading);
        }
        loadedConfigs() {
            e.Log("加载配置完成"), t.instance.offEvent(o.loadedConfigs, this, this.loadedConfigs),
                L.initVedioCom(), C.init(), S.instance.init(), s.instance.loadSubpack()
        }
        loadedSubpack() {
            e.Log("加载子包完成"), t.instance.offEvent(o.loadedSubpack, this, this.loadedSubpack),
                s.instance.loadMainScene();
        }
        loadedMainScene(s) {
            e.Log("加载场景完成  e:" + arguments.length), U.instance.init(), se.instance.init(), this.gameScene = s;
            let r = this.gameScene.getChildByName("Main Camera");
            A.instance.init(r), this.setState(a.Lobby), this.gameReset(),

                S.instance.getSwitch(this, s => {
                    I.resetSwithes(s.data), "qg" == i.platfomStr && I.isRequestNative && S.instance.getNativeAdSwitch(this, t => {
                        e.Log("------  是否关闭原生:" + t), 1 == t ? (e.Log("--------------   isNativeOpen:false"),
                            I.isNativeClosed = !0) : I.isNativeClosed = !1;
                    }), "tt" != i.platfomStr && "qq" != i.platfomStr ? S.instance.getJumpInfo(this, this.getAdInfoSucc, this.getAdInfoFail) : 0 == ae.loadMain && (I.loadAdInfo(),
                        ae.loadMain = !0, t.instance.dispatch(o.ui_openMain));
                }, () => {
                    "tt" != i.platfomStr && "qq" != i.platfomStr ? S.instance.getJumpInfo(this, this.getAdInfoSucc, this.getAdInfoFail) : 0 == ae.loadMain && (I.loadAdInfo(),
                        ae.loadMain = !0, t.instance.dispatch(o.ui_openMain));
                }), this.initDirectionLight();
            this.loadOver = true;
        }
        setProcess0() {
            if (this.loopNum < 1) {
                this.loopNum += 0.02;
            }
            this.loopNum >= 1 && (this.loopNum = 1);
            te.instance.ui[n.LoadingView] && te.instance.ui[n.LoadingView].setProcess(this.loopNum);
            if (this.loopNum >= 1) {
                Laya.timer.clear(this, this.setProcess0);
                I.loadAdInfo(), ae.loadMain = !0, t.instance.dispatch(o.ui_openMain)
                platform.getInstance().hideSplash();
                platform.getInstance().showBanner();
            }
        }
        initDirectionLight() { }
        setLight(e) { }
        getAdInfoSucc(s) {
            if (e.Log("--------------  res:" + JSON.stringify(s)), "wx" == i.platfomStr && Laya.Browser.onMiniGame) {
                let e = JSON.stringify(s);
                e = e.replace(/\ufeff/g, "");
                let t = JSON.parse(e);
                I.adInfos = t;
            } else I.adInfos = JSON.parse(s);
            ae.loadMain = !0, t.instance.dispatch(o.ui_openMain);
        }
        getAdInfoFail() {
            I.loadAdInfo(), ae.loadMain = !0, t.instance.dispatch(o.ui_openMain);
        }
        clearData() { }
        gameEnd() {
            e.Log(" level:" + I.userData.level), t.instance.dispatch(o.ui_openResult, arguments),
                Laya.timer.once(2e3, this, () => {
                    this.setState(a.GamingResult);
                });
        }
        gameStart() {
            e.Log("-------------  gameStart"), this.hasNewbee() >= 0 ? this.setState(a.Newbee) : this.setState(a.Gaming),
                t.instance.dispatch(o.ui_openGaming), "qq" == i.platfomStr && I.hasStartEgg > 0 && Laya.timer.once(500, this, () => {
                    let e = 1;
                    2 == I.hasStartEgg ? e = 2 : 3 == I.hasStartEgg && (e = this._startEggType, ++this._startEggType,
                        this._startEggType >= 3 && (this._startEggType = 1)), t.instance.dispatch(o.ui_openGoldenEgg, e);
                });
        }
        hasNewbee() {
            return I.userData.level < 3 && this.g_hasNewbee ? I.userData.level : -1;
        }
        gameReset() {
            p.clean(), this.isLocalPhysic;
            let t = I.userData.level, i = s.instance.configs[u.level].length;
            t >= i && (t = i - 1);
            let a = s.instance.configs[u.level][t];
            this.isResult = !1, O.instance.init(a), ie.instance.init(a), P.instance.reset(),
                A.instance.reset(), ie.instance.reset(), e.Log(" idx:" + t);
        }
        onTouchDown(e) {
            Laya.MouseManager.instance.mouseX, Laya.MouseManager.instance.mouseY;
        }
        createBall(e) { }
        get gameState() {
            return this._state;
        }
        onAwake() {
            e.Log("onAwake");
        }
        onEnable() {
            e.Log("onEnable");
        }
        onUpdate() {
            this.myupdate();
        }
        myupdate() {
            this.checkEnterState();
            let e = 16;
            e > 50 && (e = 50);
            let t = .001 * e;
            this.update(e, t), this.runTime += t;
        }
        setState(e) {
            this._nextState = e;
        }
        checkEnterState() {
            this._state != this._nextState && (e.Log(" 切换状态:" + this._state + " 下一个状态:" + this._nextState),
                this._state, this._state = this._nextState, this._nextState);
        }
        update(e, t) {
            switch (C.refresh([e, t]), this.updateTimeCoin([e, t]), this._state) {
                case a.PauseGame:
                case a.Gaming:
                    this.gameScene && (this.isLocalPhysic, O.instance.update([e, t]), se.instance.update());
                    break;

                case a.ReviveView:
                    null != te.instance.ui[n.ReviveView] && te.instance.ui[n.ReviveView].update([e, t]);
                    break;

                case a.GamingResult:
            }
        }
        addBoxPos(e) {
            var t = this.gameScene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
            t.transform.position = e;
            var i = new Laya.BlinnPhongMaterial();
            return Laya.Texture2D.load("res/layabox.png", Laya.Handler.create(null, function (e) {
                i.albedoTexture = e;
            })), t.meshRenderer.material = i, t;
        }
        removeBox(e) {
            this.gameScene.removeChild(e), e.destroy();
        }
        onDisable() {
            e.Log("onDisable");
        }
        onDestroy() {
            e.Log("onDestroy");
        }
        onReset() {
            e.Log("onReset");
        }
        updateTimeCoin(e) {
            if (this.refreshTime > 0) {
                if (this.refreshTime -= e[1], null != te.instance.ui[n.MainView]) {
                    let e = (30 - this.refreshTime) / 30;
                    te.instance.ui[n.MainView].setCoinPro(e);
                }
                this.refreshTime <= 0 && (this.curCoin < this.coinLimit && (this.curCoin += this.refreshC),
                    null != te.instance.ui[n.MainView] && te.instance.ui[n.MainView].refreshCoin(this.curCoin),
                    this.refreshTime = 30);
            }
        }
        resetTimeCoin() {
            this.curCoin = 0;
        }
        getRandomSkin() {
            let e = I.userData.unlock.length, t = l.Random_local(0, e), i = I.userData.unlock[t];
            for (; 0 != i;) t = l.Random_local(0, e), i = I.userData.unlock[t];
            return t;
        }
        getRandTry() {
            let e = s.instance.configs[u.mall], t = 0;
            do {
                (t = l.Random_local(0, e.length)) > 5 && null == O.instance.boy && (t = 0);
            } while (I.isUnlock(t));
            return t;
        }
        hasTrySkin() {
            let e = !1;
            for (let t = 0, i = I.userData.unlock.length; t < i; ++t) if (0 == I.userData.unlock[t]) if (t > 5) {
                if (null == O.instance.boy) continue;
            } else e = !0;
            return e;
        }
        createSkin(e) {
            let t = "role_boy";
            return "role_boy" == e ? t = "role_boy" : "role_girl" == e ? t = "role_girl" : e.startsWith("zhujue") ? t = "role_boy" : e.startsWith("zhuju") && (t = "role_girl"),
                s.instance.prefabs.getChildByName(t);
        }
        getMaterial(e) {
            let t = "";
            return "role_boy" == e || "role_girl" == e ||
                (e.startsWith("zhujue") ? t = e : e.startsWith("zhuju") && (t = e)),
                "" != t ? s.instance.prefabs.getChildByName(t) : null;
        }
        loadedNativeAd(e) {
            console.log("GameLogic.loadedNativeAd()"), "qg" == i.platfomStr && (te.instance.ui[n.ResultView] && te.instance.ui[n.ResultView].showNativeIcon(e),
                te.instance.ui[n.GamingView] && te.instance.ui[n.GamingView].showNativeIcon(e),
                te.instance.ui[n.SkinView] && te.instance.ui[n.SkinView].showNativeIcon(e), te.instance.ui[n.SigninView] && te.instance.ui[n.SigninView].showNativeIcon(e),
                te.instance.ui[n.MainView] && te.instance.ui[n.MainView].showNativeIcon(e));
        }
    }
    ae.loadMain = !1;
    class ne extends Laya.Image {
        constructor() {
            super(), this.hasSwitchAni = !0, this.hasShakeAni = !0, this.type = 0, this.imgSrc = "zjm/zjm_jb.png",
                this.on(Laya.Event.CLICK, this, this.onClick), this.scale(1, 1), this.srcX = this.scaleX,
                this.srcY = this.scaleY;
        }
        onClick() {
            L.reportAdClick(this.infos[0].adId);
        }
        start(e, t = 0) {
            this.infos = e.adList, console.log("++++++++++++++++++"), 0 == t ? (this.imgSrc = this.infos[0].imgUrlList[0],
                this.hasShakeAni = !1, this.hasSwitchAni = !1, I.nativeText ? this.getChildByName("btntxt").getChildByName("gameName").text = "点击查看" : this.getChildByName("btntxt").getChildByName("gameName").text = "查看广告") : (console.log("++++++++++++++++++2"),
                    this.infos[0].iconUrlList && this.infos[0].iconUrlList[0] && this.infos[0].iconUrlList[0].length > 0 ? (console.log("00"),
                        this.imgSrc = this.infos[0].iconUrlList[0]) : this.infos[0].icon && this.infos[0].icon.length > 0 ? (console.log("11"),
                            this.imgSrc = this.infos[0].icon) : (console.log("22"), this.imgSrc = "zjm/zjm_jb.png"));
            let i = this.getChildByName("gameIcon");
            this.gameIcon = i, Laya.Tween.clearAll(this), this.rotation = 0, this.srcX = this.scaleX,
                this.srcY = this.scaleY, this.showAd();
        }
        showAd() {
            null == this.infos || this.infos.length < 1 ? this.visible = !1 : (this.visible = !0,
                L.reportAdShow(this.infos[0].adId), Laya.timer.clearAll(this), this.randomSwitch(),
                this.hasShakeAni && this.nomarlAni(), this.hasSwitchAni && this.switchAnimation());
        }
        randomSwitch() {
            this.infos && (this.gameIcon.skin = this.imgSrc, console.log("--------------  this.imgSrc:" + this.imgSrc));
        }
        _showNativeAd(t) {
            if (e.Log("加载原生广告:" + I.innerADIds[t]), 0 == Laya.Browser.onMiniGame) return this.infos = [{
                adId: 0,
                title: "",
                desc: "",
                icon: "",
                imgUrlList: [""],
                logoUrl: "",
                clickBtnTxt: "",
                creativeType: 0,
                interactionType: 1
            }], void this.showAd();
        }
        nomarlAni() {
            this.rotation = 0, new Laya.Tween().to(this, {
                rotation: 10
            }, 300, null, Laya.Handler.create(this, () => {
                new Laya.Tween().to(this, {
                    rotation: 0
                }, 300, null, Laya.Handler.create(this, () => {
                    new Laya.Tween().to(this, {
                        rotation: -10
                    }, 300, null, Laya.Handler.create(this, () => {
                        new Laya.Tween().to(this, {
                            rotation: 0
                        }, 300, null, Laya.Handler.create(this, () => {
                            this.nomarlAni();
                        }));
                    }));
                }));
            }));
        }
        switchAnimation() {
            this.scale(this.srcX, this.srcY), new Laya.Tween().to(this, {
                scaleX: 0,
                scaleY: 0
            }, 300, null, Laya.Handler.create(this, () => {
                this.randomSwitch(), new Laya.Tween().to(this, {
                    scaleX: 0,
                    scaleY: 0
                }, 100, null, Laya.Handler.create(this, () => {
                    new Laya.Tween().to(this, {
                        scaleX: this.srcX,
                        scaleY: this.srcY
                    }, 300, null, Laya.Handler.create(this, () => { }));
                }));
            }));
        }
        startAni() {
            this.infos && Laya.timer.loop(1e4, this, () => {
                this._showNativeAd(0);
            });
        }
    }
    class oe extends Laya.Image {
        constructor() {
            super(), this.hasSwitchAni = !0, this.hasShakeAni = !0, this.nowidx = 0, this.jumpIdx = 0,
                this.on(Laya.Event.CLICK, this, this.onClick), this.srcX = this.scaleX, this.srcY = this.scaleY;
        }
        onClick() {
            L.jumpAd(this.infos[this.jumpIdx]);
        }
        start(t) {
            let i = this.getChildByName("gameIcon");
            if (null == i || t.length < 1) return e.Error("须要name为gameIcon的子节点"), void (this.visible = !1);
            this.gameIcon = i, this.gameLabel = this.getChildByName("gameName"), this.infos = t,
                Laya.Tween.clearAll(this), this.rotation = 0, this.srcX = this.scaleX, this.srcY = this.scaleY,
                this.nowidx = l.Random_local(0, this.infos.length), this.randomSwitch(), this.hasShakeAni && this.nomarlAni(),
                Laya.timer.clearAll(this), this.startAni();
        }
        randomSwitch() {
            if (this.infos) {
                let t = this.infos;
                var e = t.length;
                this.gameIcon.skin = t[this.nowidx].param, this.gameLabel.text = t[this.nowidx].name.replace("dy", ""),
                    this.jumpIdx = this.nowidx, this.nowidx = this.nowidx + 1, this.nowidx > e - 1 && (this.nowidx = 0);
            }
        }
        nomarlAni() {
            this.rotation = 0, new Laya.Tween().to(this, {
                rotation: 10
            }, 300, null, Laya.Handler.create(this, () => {
                new Laya.Tween().to(this, {
                    rotation: 0
                }, 300, null, Laya.Handler.create(this, () => {
                    new Laya.Tween().to(this, {
                        rotation: -10
                    }, 300, null, Laya.Handler.create(this, () => {
                        new Laya.Tween().to(this, {
                            rotation: 0
                        }, 300, null, Laya.Handler.create(this, () => {
                            this.nomarlAni();
                        }));
                    }));
                }));
            }));
        }
        switchAnimation() {
            this.scale(this.srcX, this.srcY), new Laya.Tween().to(this, {
                scaleX: 0,
                scaleY: 0
            }, 300, null, Laya.Handler.create(this, () => {
                this.randomSwitch(), new Laya.Tween().to(this, {
                    scaleX: 0,
                    scaleY: 0
                }, 100, null, Laya.Handler.create(this, () => {
                    new Laya.Tween().to(this, {
                        scaleX: this.srcX,
                        scaleY: this.srcY
                    }, 300, null, Laya.Handler.create(this, () => { }));
                }));
            }));
        }
        startAni() {
            this.infos && Laya.timer.loop(1e4, this, () => {
                null != this.infos ? this.infos.length > 1 && this.hasSwitchAni ? this.switchAnimation() : this.randomSwitch() : this.hasSwitchAni ? this.switchAnimation() : this.randomSwitch();
            });
        }
    }
    class re {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/GameLogic.ts", ae), e("view/AdListLoop.ts", x), e("view/AdPanelLoop.ts", k),
                e("view/AdNativeImage.ts", ne), e("view/AdImage.ts", oe);
        }
    }
    re.width = 750, re.height = 1334, re.scaleMode = "showall", re.screenMode = "none",
        re.alignV = "middle", re.alignH = "center", re.startScene = "StartScene.scene", re.sceneRoot = "",
        re.debug = !1, re.stat = !1, re.physicsDebug = !1, re.exportSceneToJson = !0, re.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(re.width, re.height) : Laya.init(re.width, re.height, Laya.WebGL),
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(),
                Laya.stage.scaleMode = re.scaleMode, Laya.stage.screenMode = re.screenMode, Laya.stage.alignV = re.alignV,
                Laya.stage.alignH = re.alignH, Laya.URL.exportSceneToJson = re.exportSceneToJson,
                Laya.alertGlobalError = !0, Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded),
                    Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            re.startScene && Laya.Scene.open(re.startScene);
        }
    }();
}();